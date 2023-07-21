export interface ICategoriesResponse {
  total: number;
  categories: ICategory[];
}

export interface ICategory {
  _id: string;
  name: string;
  user: User;
}

interface User {
  _id: string;
  name: string;
}
