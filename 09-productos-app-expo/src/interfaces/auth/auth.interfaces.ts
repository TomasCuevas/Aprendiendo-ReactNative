import { IUser } from "../";

export interface ILogin {
  user: IUser;
  token: string;
}

export interface IRegister {
  user: IUser;
  token: string;
}
