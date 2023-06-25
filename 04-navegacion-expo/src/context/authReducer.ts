//* INTERFACES *//
import { AuthState, authInitialState } from "./AuthContext";

type Action =
  | { type: "signIn" }
  | { type: "logout" }
  | { type: "changeFavIcon"; payload: string }
  | { type: "changeUsername"; payload: string };

export const authReducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case "signIn":
      return { ...state, isLoggedIn: true, username: "no-username-yet" };

    case "logout":
      return { ...authInitialState };

    case "changeFavIcon":
      return { ...state, favoriteIcon: action.payload };

    case "changeUsername":
      return { ...state, username: action.payload };

    default:
      return state;
  }
};
