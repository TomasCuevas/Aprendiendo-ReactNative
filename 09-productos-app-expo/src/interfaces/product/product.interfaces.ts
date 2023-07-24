export interface IProductsResponse {
  total: number;
  products: IProduct[];
}

export interface IProductResponse {
  product: IProduct;
}

export interface IProduct {
  price: number;
  _id: string;
  name: string;
  category: Category;
  user: CreatedBy;
  image?: string;
}

export interface IProductToCreate extends Pick<IProduct, "_id" | "name"> {
  category: string;
}

interface Category {
  _id: string;
  name: string;
}

interface CreatedBy {
  _id: string;
  name: string;
}
