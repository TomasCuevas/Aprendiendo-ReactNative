import { Theme } from "@react-navigation/native";

//* ACTIONS TYPE *//
type ThemeAction = { type: "light_theme" } | { type: "dark_theme" };

//* STATE INTERFACE *//
export interface IThemeState extends Theme {
  currentTheme: "light" | "dark";
  dividerColor: string;
}

//* SET LIGHT THEME
const lightTheme: IThemeState = {
  currentTheme: "light",
  dark: false,
  colors: {
    primary: "red",
    background: "blue",
    card: "green",
    text: "pink",
    border: "orange",
    notification: "teal",
  },
  dividerColor: "#0005",
};

export const themeReducer = (state: any, action: ThemeAction): IThemeState => {
  switch (action.type) {
    case "light_theme":
      return { ...lightTheme };

    default:
      return state;
  }
};
