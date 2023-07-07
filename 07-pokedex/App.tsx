import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

//* NAVIGATOR *//
import { StackNavigator } from "./src/navigator/StackNavigator";

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
