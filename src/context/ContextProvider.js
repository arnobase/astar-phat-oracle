import React, { useEffect, useState } from "react";
import { Keyring } from '@polkadot/api'
import { cryptoWaitReady } from '@polkadot/util-crypto';
import { DAPP_NAME } from "../lib/constants"

export const AppContext = React.createContext();

export const ContextProvider = ({ children }) => {
  
  const [dappName, setDappName] = useState(DAPP_NAME);
  const [pair, setQueryPair] = useState();
  const [phatOk, setPhatOk] = useState();
  const [phatError, setPhatError] = useState();
  const [lastUpdate, setLastUpdate] = useState();
  const [queryTime, setQueryTime] = useState();

  useEffect(()=>{
    const load = async () => {
      await cryptoWaitReady().catch(console.error);
      loadContext()
    }
    load().catch(console.error);
  },[])
  
  const loadContext = () => {
    setQueryPair(new Keyring({ type: 'sr25519' }).addFromUri("//Alice"))
  }
  
  return (
    <AppContext.Provider
      value={{
        pair,
        dappName, 
        phatOk,
        setPhatOk,
        phatError,
        setPhatError,
        lastUpdate, 
        setLastUpdate,
        queryTime,
        setQueryTime
      }}
    >
      {children}
    </AppContext.Provider>
  );
};