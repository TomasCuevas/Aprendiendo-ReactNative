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
  error: string;
  status: authStatus;
  token?: string;
  user?: IUser;
  setLogin(loginData: ILoginResponse | IRegisterResponse): void;
  setError(error?: string): void;
  login(loginData: ILogin): void;
  register(): void;
  logout(): void;
}

export const useAuthStore = create<useAuthState>((set, get) => ({
  error: "",
  status: "checking",
  token: undefined,
  user: undefined,

  //! SET LOGIN
  setLogin(loginData) {
    set((state) => ({
      ...state,
      error: "",
      status: "authenticated",
      token: loginData.token,
      user: loginData.user,
    }));
  },

  //! SET ERROR
  setError(error = "Información incorrecta.") {
    set((state) => ({ ...state, error }));
  },

  //! LOGIN
  async login(loginData) {
    const { setLogin, setError } = get();

    try {
      const response = await cafeApi.post<ILoginResponse>(
        "/auth/login",
        loginData
      );

      setLogin(response.data);
    } catch (error: any) {
      setError(error.response.data.msg);
    }
  },

  //! REGISTER
  register() {},

  //! LOGOUT
  logout() {},
}));
