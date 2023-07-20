import { create } from "zustand";

//* AXIOS INSTANCE *//
import { cafeApi } from "../../api";

//* INTERFACES *//
import {
  ILogin,
  ILoginResponse,
  IRegisterResponse,
  IUser,
  authStatus,
} from "../../interfaces";

//* STORE STATE *//
interface useAuthState {
  error?: string;
  status: authStatus;
  token?: string;
  user?: IUser;
  setLogin(loginData: ILoginResponse | IRegisterResponse): void;
  login(loginData: ILogin): void;
  register(): void;
  logout(): void;
}

export const useAuthStore = create<useAuthState>(() => ({
  error: "",
  status: "checking",
  token: undefined,
  user: undefined,

  //! SET LOGIN
  setLogin(loginData) {},

  //! LOGIN
  async login(loginData) {
    try {
      const response = await cafeApi.post<ILoginResponse>(
        "/auth/login",
        loginData
      );

      console.log(response.data);
    } catch (error: any) {
      console.log(error.response.data);
    }
  },

  //! REGISTER
  register() {},

  //! LOGOUT
  logout() {},
}));
