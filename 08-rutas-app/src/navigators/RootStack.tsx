import { createStackNavigator } from "@react-navigation/stack";

//* SCREENS *//
import { MapScreen, PermissionsScreen } from "../screens";

//* STACK TYPES *//
export type RootStackParams = {
  MapScreen: undefined;
  PermissionsScreen: undefined;
};

//* STACK INSTANCE *//
const Stack = createStackNavigator<RootStackParams>();

export const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#FFF" },
      }}
    >
      <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
};
