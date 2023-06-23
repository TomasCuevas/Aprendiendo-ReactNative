import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

//* SCREENS *//
import { SettingsScreen } from "../screens";

//* NAVIGATOR *//
import { StackNavigator } from "./Stack.navigator";

//* DRAWER INSTANCE *//
const Drawer = createDrawerNavigator();

export const BasicDrawerNavigator = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: "left",
        headerShown: false,
        drawerType: width >= 768 ? "permanent" : "front",
      }}
    >
      <Drawer.Screen
        name="StackNavigator"
        options={{ title: "Home" }}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{ title: "Settings" }}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
