export const DAPP_NAME = "Price Feed Oracle";

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
  shibuya:  "aZbYhcQUMRPBN2CvhDyyDDrv8GrtxTPNcmrxbzqhVVTvVPZ",
  shiden:   'changeit'
};

import oracle_contract_metadata from "./oracle_contract_metadata.json"
export const ORACLE_CONTRACT_ABI_METADATA = {
  shibuya:  oracle_contract_metadata,
  shiden:   oracle_contract_metadata
};
