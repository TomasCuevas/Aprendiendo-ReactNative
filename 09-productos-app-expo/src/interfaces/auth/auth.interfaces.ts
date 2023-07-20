import { IUser } from "../";

export type authStatus = "checking" | "authenticated" | "not-authenticated";

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
}

export interface ILoginResponse {
  user: IUser;
  token: string;
}

export interface IRegisterResponse {
  user: IUser;
  token: string;
}
