import { createContext, useReducer } from "react";

//* REDUCER *//
import { authReducer } from "./authReducer";

//* CONTEXT *//
//* CONTEXT *//
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

interface AuthContextState extends AuthState {
  authState: AuthState;
  signIn(): void;
  logout(): void;
  changeFavoriteIcon(iconName: string): void;
  changeUsername(newUsername: string): void;
}

export const AuthContext = createContext({} as AuthContextState);

//* PROVIDER *//
//* PROVIDER *//
interface AuthProviderProps {
  children: React.ReactNode;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => dispatch({ type: "signIn" });

  const logout = () => dispatch({ type: "logout" });

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({ type: "changeFavIcon", payload: iconName });
  };

  const changeUsername = (newUsername: string) => {
    dispatch({ type: "changeUsername", payload: newUsername });
  };

  return (
    <AuthContext.Provider
      value={{
        // props
        ...authState,
        authState,

        // methods
        signIn,
        logout,
        changeFavoriteIcon,
        changeUsername,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
