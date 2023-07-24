import { useQuery } from "@tanstack/react-query";

//* SERVICES *//
import { getProductByIdService } from "../../services";

//* INTERFACES *//
import { IProduct } from "../../interfaces";

export const useProduct = (productId: string) => {
  const shouldFetchProduct = productId ? true : false;

  const productQuery = useQuery<IProduct | null>(
    shouldFetchProduct ? [`/product-${productId}`] : ["productNoId"],
    () => (shouldFetchProduct ? getProductByIdService(productId) : null),
    { enabled: shouldFetchProduct ? true : false }
  );

  return {
    product: productQuery.data,
    productQuery,
  };
};
