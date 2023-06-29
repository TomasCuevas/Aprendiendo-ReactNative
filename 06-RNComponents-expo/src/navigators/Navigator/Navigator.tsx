import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

//* SCREENS *//
import { HomeScreen } from "../../screens";

//* STACK INSTANCE *//
const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
