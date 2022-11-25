import { createContext, useState } from 'react';

//* CONTEXT *//
//* CONTEXT *//
interface AuthContextProps {
  authState: IAuthState;
  onChangeFavIcon: (iconName: string) => void;
  onLogout: () => void;
  onSignIn: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

//* PROVIDER *//
//* PROVIDER *//
const authInitialState: IAuthState = {
  isLoggin: false,
  favoriteIcon: undefined,
  username: undefined,
};

interface AuthProviderProps {
  children: React.ReactNode;
}

interface IAuthState {
  isLoggin: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<IAuthState>(authInitialState);

  const onSignIn = () => {
    setAuthState((prev) => ({
      ...prev,
      isLoggin: true,
      username: 'no-username-yet',
    }));
  };

  const onLogout = () => setAuthState(authInitialState);

  const onChangeFavIcon = (iconName: string) => {
    setAuthState((prev) => ({
      ...prev,
      favoriteIcon: iconName,
    }));
  };

  return (
    <AuthContext.Provider
      value={{
        // getters
        authState,

        // methods
        onChangeFavIcon,
        onLogout,
        onSignIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
