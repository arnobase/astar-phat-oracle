import React, { useContext, useState } from 'react';
import { Box, Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Price } from './Price';
import List from '@mui/material/List';
import { coins } from '../lib/coins';
import { PhatContractCall } from './PhatContractCall';
import { AppContext } from '../context/ContextProvider';
import dayjs from 'dayjs';
import rollupSVG from "../images/rollup.svg"

//Object.values(coins).forEach((ele)=>{console.log(ele)})

export function Content() {
  const {lastUpdate} = useContext(AppContext);
  const [loadingQuery, setLoadingQuery] = useState(false);
  const [loadingPrices, setLoadingPrices] = useState(false)

  return <>
  <Box sx={{backgroundColor:"#202020", borderRadius:3}} m={"10px 0"} p={"20px"}>
    <PhatContractCall loading={{loadingQuery, setLoadingQuery}} />
  </Box>
  <Box sx={{backgroundColor:"#202020", borderRadius:3, p:3}}>
    Updated: {dayjs(Number(lastUpdate)).format('YYYY/MM/DD - HH:mm:ss')} 
    <CircularProgress
      sx={{display:loadingPrices ? "inline-block" : "none" ,m:"0 10px"}} 
      size={"1em"}
    />
    <List sx={{
      opacity:loadingPrices ? 0.3 : 1,
      columnCount: {
        xs: '1 !important',
        sm: '2 !important',
        md: '3 !important',
      },
    }}>
      {Object.values(coins).map((ele)=>{return <>
        <Price loading={{loadingPrices, setLoadingPrices}} key={ele.ticker} ticker={ele.ticker} pairId={ele.pairId} image={ele.image} />
      </>})}
    </List>
  </Box>
  <Box>
    <img style={{width:"100%"}} src={rollupSVG} alt="SVG as an image" />
  </Box>
  </>;
  
}
