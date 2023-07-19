import { create } from "zustand";

//* INTERFACES *//
import { IUser } from "../../interfaces";

//* STORE STATE *//
interface useAuthState {
  status: "checking" | "authenticated" | "not-authenticated";
  token?: string;
  user?: IUser;
  login(): void;
  register(): void;
  logout(): void;
}

export const useAuthStore = create<useAuthState>(() => ({
  status: "checking",
  token: undefined,
  user: undefined,
  login() {},
  register() {},
  logout() {},
}));
