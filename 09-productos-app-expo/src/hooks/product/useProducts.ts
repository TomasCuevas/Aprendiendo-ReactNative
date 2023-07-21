import { useInfiniteQuery } from "@tanstack/react-query";

//* SERVICES *//
import { getProductsService } from "../../services";

//* INTERFACES *//
import { IProduct } from "../../interfaces";

export const useProducts = () => {
  const productsQuery = useInfiniteQuery<IProduct[]>(
    [`/allProducts`],
    ({ pageParam }) => getProductsService({ offset: pageParam }),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length < 20) return;

        return pages.length;
      },
    }
  );

  return {
    productsQuery,
  };
};
