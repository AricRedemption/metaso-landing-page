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
  totalNode: number;
  totalUser: number;
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
