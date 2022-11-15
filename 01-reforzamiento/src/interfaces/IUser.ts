export interface IUser {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Datum[];
  support: Support;
}

interface Support {
  url: string;
  text: string;
}

interface Datum {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
