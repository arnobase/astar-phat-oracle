import React, { useEffect, useState, useContext } from 'react';
import { Box } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { ContractContext } from "../context/ContractProvider";
import { AppContext } from "../context/ContextProvider";

import { formatTokenBalance } from '../lib/formatTokenBalance';

const delay = ms => new Promise(res => setTimeout(res, ms));

export function Price(props) {

  const { phatOk, lastUpdate, setLastUpdate, queryTime } = useContext(AppContext);
  const {oracleContract, getTradingPair} = useContext(ContractContext);
  const [price, setPrice] = useState();

  useEffect(()=>{
    // if a query was sent and is OK
    // OR no query sent (first load)
    if (oracleContract && phatOk || oracleContract && !queryTime) doQuery()
  },[oracleContract,phatOk])
  
  let nbQuery=0;

  const doQuery = async () =>{
    nbQuery++;
    console.log("doQuery...");
    props.loading.setLoadingPrices(true)
    const previousUpdate = lastUpdate;
    const {data} = await getTradingPair(props.pairId);
    const newUpdate = data.Ok.lastUpdate.replace(/,/g,"")
    if (!queryTime || (previousUpdate !== newUpdate && newUpdate > queryTime)) {
      const formatedPrice = formatTokenBalance(data.Ok.value.replace(/,/g,""),"USD",18)
      console.log("price",data,formatedPrice)
      setPrice(formatedPrice);
      setLastUpdate(data.Ok.lastUpdate.replace(/,/g,""))
      nbQuery=0
      props.loading.setLoadingPrices(false)
    }
    else if (nbQuery<30) {
      await delay(1000);
      doQuery();
    }
  }

  return (<>
    <ListItem sx={{overflow:"auto"}} key={props.ticker} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={props.ticker} src={props.image} />
        </ListItemAvatar>
        <ListItemText
          primary={props.ticker}
          secondary={price}
        />
      </ListItem>
  </>);

}
