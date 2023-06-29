import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

//* SCREENS *//
import {
  Animation01Screen,
  Animation02Screen,
  HomeScreen,
} from "../../screens";

//* STACK INSTANCE *//
const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation01Screen" component={Animation01Screen} />
      <Stack.Screen name="Animation02Screen" component={Animation02Screen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
