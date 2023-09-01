import React from 'react';
import { Typography } from '@mui/material';
import { useContext } from "react";
import { AppContext } from "../context/ContextProvider";

export function AppHeader() {
  const { dappName } = useContext(AppContext);

  return (<>
    <Typography variant="h3" gutterBottom>
        {dappName}
    </Typography>
  </>);
  
}
