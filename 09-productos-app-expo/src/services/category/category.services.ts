//* AXIOS INSTANCE *//
import { cafeApi } from "../../api";

//* INTERFACES *//
import { ICategoriesResponse } from "../../interfaces";

//! GET CATEGORIES
export const getCategories = async () => {
  try {
    const { data } = await cafeApi.get<ICategoriesResponse>("/categories", {
      params: { limit: 100 },
    });
    return data.categories;
  } catch (error) {
    throw error;
  }
};
