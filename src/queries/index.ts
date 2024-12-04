import { manApi } from "./request";
import { useQuery } from "@tanstack/react-query";

export function getCountInfo() {
  return manApi<{
    Count: {
      block: number;
      Pin: number;
      metaId: number;
      app: number;
      node: number;
    };
  }>("/api/pin/list").get({ page: 1, size: 1 });
}

export function useQueryCountInfo() {
  return useQuery({
    queryKey: ["CountInfo"],
    queryFn: () => getCountInfo(),
  });
}
