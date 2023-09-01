import React, { useEffect, useState, useContext } from 'react';
import { Box } from '@mui/material';
import { ContractContext } from "../context/ContractProvider";
import BN from "bn.js"
import { formatTokenBalance } from '../lib/formatTokenBalance';

export function Price(props) {
  
  const {oracleContract, getTradingPair} = useContext(ContractContext);
  const [price, setPrice] = useState();

  useEffect(()=>{
    if (oracleContract) doQuery()
  },[oracleContract])
  
  const doQuery = async () =>{
    const {data} = await getTradingPair(props.pairId);
    
    const formatedPrice = formatTokenBalance(data.Ok.value.replace(/,/g,""),"USD",props.decimals)
    console.log("price",data,formatedPrice)
    setPrice(formatedPrice);
  } 

  return (<>
    <Box sx={{ 
      bgcolor:'#222',   
      m:3,
      p:4,
      borderRadius:3,
      opacity:0.9
    }}>
          <Box textAlign='center'>{props.ticker}</Box>
          <Box textAlign='center'>{price}</Box>
    </Box>
  </>);
  
}
