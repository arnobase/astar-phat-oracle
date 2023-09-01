import React from 'react';
import { Box, Grid } from '@mui/material';
import { Price } from './Price';

export function Content() {
  


  return (<>
  <Box sx={{backgroundColor:"#191919", borderRadius:3}} p={2}>
    <Grid container alignItems="center" justifyContent="center" spacing={1} >
      <Grid item xs={4}>
        <Price ticker="BTC" pairId='1' decimals='18' />
      </Grid>
      <Grid item xs={4}>
        <Price ticker="ETH" pairId='2' decimals='18' />
      </Grid>
      <Grid item xs={4}>
        <Price ticker="DOT" pairId='13' decimals='18' />
      </Grid>
    </Grid>
    <Grid container alignItems="center" justifyContent="center" spacing={2}>
      <Grid item xs={4}>
        <Price ticker="ASTR" pairId='147' decimals='18' />
      </Grid>
      <Grid item xs={4}>
        <Price ticker="PHA" pairId='384' decimals='18' />
      </Grid>
      <Grid item xs={4}>
        <Price ticker="GLMR" pairId='190' decimals='18' />
      </Grid>
    </Grid>
  </Box>
   
  </>);
  
}
