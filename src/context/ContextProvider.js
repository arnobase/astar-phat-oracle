import React, { useEffect, useState } from "react";
import { Keyring } from '@polkadot/api'
import { DAPP_NAME } from "../lib/constants"

export const AppContext = React.createContext();

export const ContextProvider = ({ children }) => {
  
  const [dappName, setDappName] = useState(DAPP_NAME);
  const [queryPair, setQueryPair] = useState();
  
  useEffect(()=>{
    const load = async () => {
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
        queryPair,
        dappName, 
      }}
    >
      {children}
    </AppContext.Provider>
  );
};