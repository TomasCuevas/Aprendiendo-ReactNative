import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

//* NAVIGATORS *//
import { PrincipalStackNavigator } from "./src/navigation/PrincipalStack.navigator";
import { FadeScreen } from "./src/screens";

const App = () => {
  return (
    <NavigationContainer>
      {/* <PrincipalStackNavigator /> */}
      <FadeScreen />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
