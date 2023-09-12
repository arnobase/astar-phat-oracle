export const DAPP_NAME = "Decentralized Oracles";

export const DEFAULT_NETWORKS = {
  astar: "shibuya",
  phala: "poc5",
}

export const SS58_PREFIX = {
  astar:5,
  shiden:5,
  shibuya:5,
  substrate:42,
  rococo:42,
  westend:42,
  polkadot:0,
  kusama:2
};

export const CONTRACT_PALLET_NETWORK = {
  astar: "substrate",
  shiden: "westend",
  shibuya: "rococo"
};

export const NETWORK_TOKENS = {
  astar:"ASTR",
  shiden:"SDN",
  shibuya:"SBY"
};

export const TOKEN_DECIMALS = {
  ASTR: 18,
  SDN: 18,
  SBY: 18
};

export const PROVIDER_ENDPOINTS = {
  astar:"wss://rpc.astar.network",
  shiden:"wss://shiden.api.onfinality.io/ws?apikey=53bc7e7e-1dbf-4272-af42-66c42a474c30",
  shibuya:"wss://shibuya-rpc.dwellir.com",
}

export const ORACLE_CONTRACT_ADDRESS = {
  //shibuya:  "aZbYhcQUMRPBN2CvhDyyDDrv8GrtxTPNcmrxbzqhVVTvVPZ",
  shibuya:  "af9W3PUGqE4Ki2inxJWdG9kawL5t6BM3FAWKxGrXYP2ib1f",
  shiden:   'changeit'
};

export const PHALA_PROVIDER_ENDPOINTS = {
  poc5: "wss://poc5.phala.network/ws"
}
export const PHAT_CONTRACT_ID = {
  poc5: "0x0c7c4800da26365d2fa749c7f645197f0befcfe9fae251ecffc98b4f76f6d93f"
}

import oracle_contract_metadata from "./oracle_contract_metadata.json"
export const ORACLE_CONTRACT_ABI_METADATA = {
  shibuya:  oracle_contract_metadata,
  shiden:   oracle_contract_metadata
};
