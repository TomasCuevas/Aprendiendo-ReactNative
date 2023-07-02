import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

//* SCREENS *//
import {
  AlertScreen,
  Animation01Screen,
  Animation02Screen,
  HomeScreen,
  InfiniteScrollScreen,
  ModalScreen,
  PromptScreen,
  PullToRefreshScreen,
  SectionListScreen,
  SwitchScreen,
  TextInputScreen,
} from "../../screens";

//* STACK INSTANCE *//
const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation01Screen" component={Animation01Screen} />
      <Stack.Screen name="Animation02Screen" component={Animation02Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="PromptScreen" component={PromptScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen
        name="PullToRefreshScreen"
        component={PullToRefreshScreen}
      />
      <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen
        name="InfiniteScrollScreen"
        component={InfiniteScrollScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
