import { createContext, useReducer, useEffect } from "react";
import { useColorScheme } from "react-native";

//* REDUCER *//
import {
  IThemeState,
  darkTheme,
  lightTheme,
  themeReducer,
} from "./themeReducer";

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
  const colorSchema = useColorScheme();
  const [theme, dispatch] = useReducer(
    themeReducer,
    colorSchema === "light" ? lightTheme : darkTheme
  );

  const setDarkTheme = () => {
    dispatch({ type: "dark_theme" });
  };

  const setLightTheme = () => {
    dispatch({ type: "light_theme" });
  };

  useEffect(() => {
    colorSchema === "light" ? setLightTheme() : setDarkTheme();
  }, [colorSchema]);

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
