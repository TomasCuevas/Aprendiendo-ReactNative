import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

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
import { useContext } from "react";

//* CONTEXT *//
import { ThemeContext } from "../../context";

//* STACK INSTANCE *//
const Stack = createStackNavigator();

export const Navigator = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
      <StatusBar style={theme.currentTheme === "light" ? "dark" : "light"} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
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
