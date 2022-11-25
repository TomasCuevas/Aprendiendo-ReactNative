import { createContext, useState } from 'react';

//* CONTEXT *//
//* CONTEXT *//
interface AuthContextProps {
  authState: IAuthState;
  onChangeFavIcon: (iconName: string) => void;
  onSignIn: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

//* PROVIDER *//
//* PROVIDER *//
interface AuthProviderProps {
  children: React.ReactNode;
}

interface IAuthState {
  isLoggin: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<IAuthState>({
    favoriteIcon: undefined,
    isLoggin: false,
    username: undefined,
  });

  const onSignIn = () => {
    setAuthState((prev) => ({
      ...prev,
      isLoggin: true,
      username: 'no-username-yet',
    }));
  };

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
        onSignIn,
        onChangeFavIcon,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
