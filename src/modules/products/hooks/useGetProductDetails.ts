import { useQuery } from "@tanstack/react-query";
import { fetchOneProduct } from "@/lib";
import type { Product } from "@/types";

export const useProductDetails = (slug: string) => {
  return useQuery<Product>({
    queryKey: ["product", slug],
    queryFn: async () => {
      const product = await fetchOneProduct();
      return product;
    },
    staleTime: 1000 * 60 * 5,
  });
};
