import { createContext, useReducer } from "react";

//* REDUCER *//
import { IThemeState, lightTheme, themeReducer } from "./themeReducer";

//* CONTEXT *//
//* CONTEXT *//
interface ThemeContextProps extends IThemeState {
  theme: IThemeState;
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
  const [theme, dispatch] = useReducer(themeReducer, lightTheme);

  const setDarkTheme = () => {
    dispatch({ type: "dark_theme" });
  };

  const setLightTheme = () => {
    dispatch({ type: "light_theme" });
  };

  return (
    <ThemeContext.Provider
      value={{
        // properties
        ...theme,
        theme,

        // methods
        setDarkTheme,
        setLightTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
