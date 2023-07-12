import { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

//* SCREENS *//
import { LoadingScreen, MapScreen, PermissionsScreen } from "../screens";

//* CONTEXT *//
import { PermissionsContext } from "../contexts";

//* STACK TYPES *//
export type RootStackParams = {
  MapScreen: undefined;
  PermissionsScreen: undefined;
};

//* STACK INSTANCE *//
const Stack = createStackNavigator<RootStackParams>();

export const RootStack = () => {
  const { locationStatus } = useContext(PermissionsContext);

  if (!locationStatus) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#FFF" },
      }}
    >
      {locationStatus.granted ? (
        <Stack.Screen name="MapScreen" component={MapScreen} />
      ) : (
        <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
      )}
    </Stack.Navigator>
  );
};
