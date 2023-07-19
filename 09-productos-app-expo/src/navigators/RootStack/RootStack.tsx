import { createStackNavigator } from "@react-navigation/stack";

//* SCREENS *//
import { LoginScreen, ProtectedScreen, RegisterScreen } from "../../screens";

//* STACK TYPES *//
export type RootStackParams = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  ProtectedScreen: undefined;
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
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
    </Stack.Navigator>
  );
};
