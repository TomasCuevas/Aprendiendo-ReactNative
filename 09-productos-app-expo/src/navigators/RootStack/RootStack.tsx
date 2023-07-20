import { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useStore } from "zustand";

//* SCREENS *//
import {
  LoadingScreen,
  LoginScreen,
  ProtectedScreen,
  RegisterScreen,
} from "../../screens";

//* STORE *//
import { useAuthStore } from "../../store";
import AsyncStorage from "@react-native-async-storage/async-storage";

//* STACK TYPES *//
export type RootStackParams = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  ProtectedScreen: undefined;
};

//* STACK INSTANCE *//
const Stack = createStackNavigator<RootStackParams>();

export const RootStack = () => {
  const { status, logout, checkAuthentication } = useStore(useAuthStore);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem("token");
    if (!token) return logout();

    await checkAuthentication();
  };

  useEffect(() => {
    checkToken();
  }, []);

  if (status === "checking") return <LoadingScreen />;

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
