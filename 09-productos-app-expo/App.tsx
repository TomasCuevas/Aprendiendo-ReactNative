import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

//* NAVIGATOR *//
import { RootStack } from "./src/navigators/RootStack/RootStack";

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
