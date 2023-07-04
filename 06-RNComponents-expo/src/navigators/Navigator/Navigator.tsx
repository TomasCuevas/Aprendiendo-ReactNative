import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";

//* SCREENS *//
import {
  AlertScreen,
  Animation01Screen,
  Animation02Screen,
  ChangeThemeScreen,
  HomeScreen,
  InfiniteScrollScreen,
  ModalScreen,
  PromptScreen,
  PullToRefreshScreen,
  SectionListScreen,
  SlidesScreen,
  SwitchScreen,
  TextInputScreen,
} from "../../screens";

//* STACK INSTANCE *//
const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          // cardStyle: { backgroundColor: "white" },
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
        <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
        <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
