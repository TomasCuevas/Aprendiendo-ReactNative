import { createStackNavigator } from "@react-navigation/stack";
import { useStore } from "zustand";

//* SCREENS *//
import { LoginScreen, ProtectedScreen, RegisterScreen } from "../../screens";

//* STORE *//
import { useAuthStore } from "../../store";

//* STACK TYPES *//
export type RootStackParams = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  ProtectedScreen: undefined;
};

//* STACK INSTANCE *//
const Stack = createStackNavigator<RootStackParams>();

export const RootStack = () => {
  const { status } = useStore(useAuthStore);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#FFF" },
      }}
    >
      {status === "authenticated" ? (
        <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
      ) : (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
