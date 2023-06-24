import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//* THEME COLORS *//
import { colors } from "../theme";

//* SCREENS *//
import { Tab1Screen } from "../screens";

//* STACK NAVIGATOR *//
import { StackNavigator } from "./Stack.navigator";

//* TOP TAB NAVIGATOR *//
import { TopTabsNavigator } from "./TopTabs.navigator";

//* BOTTOM TAB INSTANCE *//
const BottomTab = createBottomTabNavigator();

export const BottomTabs: React.FC = () => {
  return (
    <BottomTab.Navigator
      sceneContainerStyle={{
        backgroundColor: "white",
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: string = "";

          switch (route.name) {
            case "Tab1Screen":
              iconName = "T1";
              break;
            case "TopTabNavigator":
              iconName = "TOP";
              break;
            case "StackNavigator":
              iconName = "ST";
              break;
          }

          return <Text style={{ color: color }}>{iconName}</Text>;
        },
      })}
    >
      <BottomTab.Screen
        name="Tab1Screen"
        options={{ title: "Tab 1" }}
        component={Tab1Screen}
      />
      <BottomTab.Screen
        name="TopTabNavigator"
        options={{ title: "Top Tab" }}
        component={TopTabsNavigator}
      />
      <BottomTab.Screen
        name="StackNavigator"
        options={{ title: "Stack" }}
        component={StackNavigator}
      />
    </BottomTab.Navigator>
  );
};
