//* INTERFACES *//
import {
  IProduct,
  IProductToCreate,
  IProductsResponse,
} from "../../interfaces";

//* AXIOS INSTANCE *//
import { cafeApi } from "../../api";

//! GET PRODUCTS
export const getProductsService = async ({
  limit = 10,
  offset = 0,
}): Promise<IProduct[]> => {
  try {
    const { data } = await cafeApi.get<IProductsResponse>("/products", {
      params: { limit, offset },
    });

    return data.products;
  } catch (error) {
    throw error;
  }
};

//! GET UNIQUE PRODUCT
export const getProductByIdService = async (productId: string) => {
  try {
  } catch (error) {
    throw error;
  }
};

//! CREATE PRODUCT
interface CreateProductProps {
  name: string;
  category: string;
}

export const createProductService = async (productData: CreateProductProps) => {
  try {
  } catch (error) {
    throw error;
  }
};

//! UPDATE PRODUCT
export const updateProductService = async (productData: IProductToCreate) => {
  try {
  } catch (error) {
    throw error;
  }
};

//! DELETE PRODUCT
export const deleteProductService = async (productId: string) => {
  try {
  } catch (error) {
    throw error;
  }
};
