import { createContext, useState } from 'react';

//* CONTEXT *//
//* CONTEXT *//
interface AuthContextProps {
  authState: IAuthState;
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
  username: string;
  favoriteIcon: string;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<IAuthState>({
    favoriteIcon: '',
    isLoggin: false,
    username: '',
  });

  const onSignIn = () => {};

  return (
    <AuthContext.Provider value={{ authState, onSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};
