import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* THEME COLORS *//
import { colors } from "../theme";

//* SCREENS *//
import { AlbumsScreen, ChatScreen, ContactsScreen } from "../screens";
import { Text } from "react-native";

//* TOP TAB INSTANCE *//
const TopTab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  const { top } = useSafeAreaInsets();

  return (
    <TopTab.Navigator
      style={{ marginTop: top }}
      sceneContainerStyle={{ backgroundColor: "white" }}
      screenOptions={({ route }) => ({
        tabBarIndicatorStyle: { backgroundColor: colors.primary },
        tabBarShowIcon: true,
        tabBarPressColor: colors.primary,
        tabBarStyle: { elevation: 0 },
        tabBarActiveTintColor: colors.primary,
        tabBarIcon: () => {
          let iconName: string = "";

          switch (route.name) {
            case "ChatScreen":
              iconName = "CH";
              break;
            case "ContactsScreen":
              iconName = "CO";
              break;
            case "AlbumsScreen":
              iconName = "AL";
              break;
          }

          return <Text>{iconName}</Text>;
        },
      })}
    >
      <TopTab.Screen
        name="ChatScreen"
        options={{ title: "Chat" }}
        component={ChatScreen}
      />
      <TopTab.Screen
        name="ContactsScreen"
        options={{ title: "Contacts" }}
        component={ContactsScreen}
      />
      <TopTab.Screen
        name="AlbumsScreen"
        options={{ title: "Albums" }}
        component={AlbumsScreen}
      />
    </TopTab.Navigator>
  );
};
