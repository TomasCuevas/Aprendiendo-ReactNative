export interface IProductsResponse {
  total: number;
  products: IProduct[];
}

export interface IProduct {
  price: number;
  _id: string;
  name: string;
  category: Category;
  user: Category;
  image?: string;
}

interface Category {
  _id: string;
  name: string;
}
