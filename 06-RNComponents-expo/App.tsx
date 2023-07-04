import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import "react-native-gesture-handler";

//* NAVIGATOR *//
import { Navigator } from "./src/navigators/Navigator/Navigator";

//* THEME
const customTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    // ...DarkTheme.colors,
    // primary: "",
    // background: "",
    // card: "",
    // text: "",
    // border: "",
    // notification: "",
  },
};

const App: React.FC = () => {
  return (
    <NavigationContainer theme={customTheme}>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
