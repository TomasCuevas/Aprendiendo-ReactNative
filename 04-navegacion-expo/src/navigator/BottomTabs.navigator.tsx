import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/Ionicons";

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
        tabBarIcon: ({ color }) => {
          let iconName: any = "airplane-outline";

          switch (route.name) {
            case "Iconos":
              iconName = "bandage-outline";
              break;
            case "TopTabNavigator":
              iconName = "basketball-outline";
              break;
            case "StackNavigator":
              iconName = "bookmarks-outline";
              break;
          }

          return <Icon name={iconName} size={25} color={color} />;
        },
      })}
    >
      <BottomTab.Screen
        name="Iconos"
        options={{ title: "Iconos" }}
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
