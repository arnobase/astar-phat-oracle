import React, { useContext, useEffect, useState } from 'react';

// Phala sdk beta!!
// install with `yarn add @phala/sdk@beta`, v0.5.0
import { PinkContractPromise, OnChainRegistry, signCertificate } from '@phala/sdk'

import { AppContext } from "../context/ContextProvider";
import { PhalaApiContext } from '../context/PhalaApiProvider';

import metadata from "../lib/phat_contract_metadata.json";

import { Box } from '@mui/material';
import SyncIcon from '@mui/icons-material/Sync';
import CircularProgress from '@mui/material/CircularProgress';

export function PhatContractCall(props) {

  const [contract, setContract] = useState();
  const [cert, setCert] = useState();
  const { pair, phatOk, setPhatOk, phatError, setPhatError } = useContext(AppContext);
  const { api, setProvider, connectApi } = useContext(PhalaApiContext);

  useEffect(()=>{
    if (api) {
      loadContract()
    }
  }, [api])
  


  const loadContract = async () => {
    
        try {
          setProvider('wss://poc5.phala.network/ws')
          
          // contract ID on phat-cb (contract address on polkadot.js.org/apps)
          const contractId = "0xed1bf2be043050ed7b85c270b28d41d4f1b2baaee6e556dd049cc826876dd27c"
         
          const phatRegistry = await OnChainRegistry.create(api)

          const abi = JSON.parse(JSON.stringify(metadata))
          const contractKey = await phatRegistry.getContractKey(contractId)

          console.log("contractKey",contractKey)
         
          const contract = new PinkContractPromise(api, phatRegistry, abi, contractId, contractKey)
          setContract(contract)
          console.log(signCertificate)
          const lcert = await signCertificate({ api, pair })
          console.log("certificat",lcert)
          console.log("pair",pair.address)
          setCert(lcert);

          console.log("contract:",contract.abi.messages.map((e)=>{return e.method}))
          console.log("Contract loaded successfully");

        } catch (err) {
          console.log("Error in contract loading",err);
          throw err;
        }
      
  };

  // query with sdk
  const feedPrices = async () => {
      console.log("feedPrices...")
      props.loading.setLoadingQuery(true);
      try {
        const result = await contract.query.feedPrices(pair.address,{cert});
        console.log('result:', result.output.toHuman())
      if (result.output.toHuman().Ok?.Ok) {
        setPhatOk(result.output.toHuman().Ok.Ok)
        setPhatError(undefined)
      }
      else {
        setPhatError(result.output.toHuman().Ok?.Err)
        setPhatOk(undefined)
      }
      } catch (error) {
        console.log("Error in rollup: \"",error, "\" - Please try again")
        /*await connectApi();
        await loadContract();
        await feedPrices();
        */
      }
      props.loading.setLoadingQuery(false);
      
  }

  console.log(props?.loading?.loadingQuery);
  const message=phatOk ? "Query has been executed succesfully!" : phatError ? "Error during rollup query: "+phatError+" - Please try again" : "Click to send Rollup query";
  return (<>
        <Box display="flex" alignItems="center" justifyContent="left" >
            <SyncIcon 
              fontSize="large" 
              style={{cursor:'pointer'}} 
              disabled={!(contract)} 
              onClick={feedPrices} 
              color="success"
              sx={{display:props?.loading?.loadingQuery ? "none" : "inline-block"}}
            />
            <CircularProgress 
              size="1.5rem"
              sx={{mx:0.7, my:0.67, display:props?.loading?.loadingQuery ? "inline-block" : "none"}} 
            />
            <Box sx={{ml:1.3}}>{message}</Box>
          
        </Box>

    </>)
};

