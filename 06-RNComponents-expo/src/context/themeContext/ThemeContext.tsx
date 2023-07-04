import { createContext, useReducer } from "react";

//* REDUCER *//
import { themeReducer } from "./themeReducer";

//* CONTEXT *//
//* CONTEXT *//
interface ThemeContextProps {
  theme: any;
  setDarkTheme(): void;
  setLightTheme(): void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

//* PROVIDER *//
//* PROVIDER *//
interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, {});

  const setDarkTheme = () => {
    console.log("dark");
  };

  const setLightTheme = () => {
    console.log("dark");
  };

  return (
    <ThemeContext.Provider
      value={{
        // methods
        setDarkTheme,
        setLightTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
