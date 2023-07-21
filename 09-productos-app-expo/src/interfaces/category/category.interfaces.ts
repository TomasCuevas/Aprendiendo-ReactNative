export interface ICategoriesResponse {
  total: number;
  categories: ICategory[];
}

export interface ICategory {
  _id: string;
  name: string;
  user: ICreatedBy;
}

interface ICreatedBy {
  _id: string;
  name: string;
}
