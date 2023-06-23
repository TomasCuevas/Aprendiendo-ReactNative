import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

//* DRAWER NAVIGATOR *//
// import { StackNavigator } from "./src/navigator/Stack.navigator.tsx";
// import { BasicDrawerNavigator } from "./src/navigator/BasicDrawer.navigator";
import { DrawerNavigator } from "./src/navigator/Drawer.navigator copy";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <BasicDrawerNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
