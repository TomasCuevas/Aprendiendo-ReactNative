import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

//* AXIOS INSTANCE *//
import { cafeApi } from "../../api";

//* INTERFACES *//
import {
  ILogin,
  ILoginResponse,
  IRegister,
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
  setLogin(loginData: ILoginResponse | IRegisterResponse): Promise<void>;
  setError(error?: string): void;
  checkAuthentication(): Promise<void>;
  login(loginData: ILogin): Promise<void>;
  register(registerData: IRegister): void;
  logout(): Promise<void>;
}

export const useAuthStore = create<useAuthState>((set, get) => ({
  error: "",
  status: "checking",
  token: undefined,
  user: undefined,

  //! SET LOGIN
  async setLogin(loginData) {
    await AsyncStorage.setItem("token", loginData.token);

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
    set(() => ({ error }));
  },

  //! CHECK AUTHENTICATION
  async checkAuthentication() {
    const { setLogin, logout } = get();

    try {
      const { data } = await cafeApi.get<ILoginResponse>("/auth");
      setLogin(data);
    } catch (error: any) {
      logout();
    }
  },

  //! LOGIN
  async login(loginData) {
    const { setLogin, setError } = get();
    set(() => ({ status: "checking" }));

    try {
      const { data } = await cafeApi.post<ILoginResponse>(
        "/auth/login",
        loginData
      );
      setLogin(data);
    } catch (error: any) {
      set(() => ({ status: "not-authenticated" }));
      setError(error.response.data.msg);
    }
  },

  //! REGISTER
  async register(registerData) {
    const { setLogin, setError } = get();
    set(() => ({ status: "checking" }));

    try {
      const { data } = await cafeApi.post<IRegisterResponse>(
        "/users",
        registerData
      );
      setLogin(data);
    } catch (error: any) {
      set(() => ({ status: "not-authenticated" }));
      setError(error.response.data.msg);
    }
  },

  //! LOGOUT
  async logout() {
    await AsyncStorage.removeItem("token");

    set((state) => ({
      ...state,
      error: "",
      status: "not-authenticated",
      token: undefined,
      user: undefined,
    }));
  },
}));
