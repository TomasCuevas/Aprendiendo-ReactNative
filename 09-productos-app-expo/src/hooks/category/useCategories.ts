import { useQuery } from "@tanstack/react-query";

//* SERVICES *//
import { getCategories } from "../../services";

//* INTERFACES *//
import { ICategory } from "../../interfaces";

export const useCategories = () => {
  const categoriesQuery = useQuery<ICategory[]>([`/allCategories`], () =>
    getCategories()
  );

  return {
    categories: categoriesQuery.data || [],
    categoriesQuery,
  };
};
