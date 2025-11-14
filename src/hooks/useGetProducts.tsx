import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../lib";
import type { PaginatedProps } from "../types";

export const useGetProducts = ({ page = 1 }: PaginatedProps) => {
  return useQuery({
    queryKey: ["GetProducts", page],
    queryFn: async () => await fetchProducts(page),
    staleTime: 1000 * 60,
  });
};
