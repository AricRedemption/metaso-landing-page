import { metaSoApi } from "./request";
import { useQuery } from "@tanstack/react-query";

interface MetaSoTickData {
  tickId: string;
  tick: string;
  tokenName: string;
  totalSupply: string;
  circulatingSupply: string;
  priceChange24h: string;
  price: string;
  priceUsd: string;
  marketCapChange24h: string;
  marketCap: string;
  marketCapUsd: string;
  isActive: boolean;
  activeMetaBlockHeight: number;
  totalTx: number;
  totalMetaId: number;
  totalMetaSo: number;
  totalIdCoins: number;
}

interface MetaSoTxItem {
  content: string;
  number: number;
  operation: string;
  height: number;
  id: string;
  type: string;
  path: string;
  metaid: string;
  chainName: string;
  address: string;
  creator: string;
  initialOwner: string;
  timestamp: number;
  txId: string;
}

interface MetaSoTxListResponse {
  total: number;
  list: MetaSoTxItem[];
}

export function getCoinSummary() {
  return metaSoApi<MetaSoTickData>("/v1/metaso/coin/summary").get();
}

export function useQueryCoinSummary() {
  return useQuery({
    queryKey: ["CoinSummary"],
    queryFn: () => getCoinSummary(),
  });
}

export function getTxList(params?: { cursor?: number | string; size?: number | string }) {
  return metaSoApi<MetaSoTxListResponse>("/v1/metaso/tx-list").get(params);
}

export function useQueryTxList(params?: { cursor?: number | string; size?: number | string }) {
  return useQuery({
    queryKey: ["TxList", params],
    queryFn: () => getTxList(params),
    refetchInterval: 5000, // 每5秒刷新一次
  });
}
