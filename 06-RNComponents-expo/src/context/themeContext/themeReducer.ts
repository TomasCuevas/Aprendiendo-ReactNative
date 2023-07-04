import { Theme } from "@react-navigation/native";

//* ACTIONS TYPE *//
type ThemeAction = { type: "light_theme" } | { type: "dark_theme" };

//* STATE INTERFACE *//
export interface IThemeState extends Theme {
  currentTheme: "light" | "dark";
  dividerColor: string;
}

//* SET LIGHT THEME
export const lightTheme: IThemeState = {
  currentTheme: "light",
  dark: false,
  colors: {
    primary: "#5656D8",
    background: "#FFF",
    card: "green",
    text: "#000",
    border: "orange",
    notification: "teal",
  },
  dividerColor: "#0005",
};

//* SET DARK THEME
export const darkTheme: IThemeState = {
  currentTheme: "dark",
  dark: true,
  colors: {
    primary: "#5656D8",
    background: "#000",
    card: "green",
    text: "#FFF",
    border: "orange",
    notification: "teal",
  },
  dividerColor: "#0005",
};

export const themeReducer = (state: any, action: ThemeAction): IThemeState => {
  switch (action.type) {
    case "light_theme":
      return { ...lightTheme };

    case "dark_theme": {
      return { ...darkTheme };
    }

    default:
      return state;
  }
};
