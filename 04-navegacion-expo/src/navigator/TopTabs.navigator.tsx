import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "@expo/vector-icons/Ionicons";

//* THEME COLORS *//
import { colors } from "../theme";

//* SCREENS *//
import { AlbumsScreen, ChatScreen, ContactsScreen } from "../screens";

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
        tabBarIcon: ({ color }) => {
          let iconName: any = "";

          switch (route.name) {
            case "ChatScreen":
              iconName = "chatbox-ellipses-outline";
              break;
            case "ContactsScreen":
              iconName = "people-outline";
              break;
            case "AlbumsScreen":
              iconName = "albums-outline";
              break;
          }

          return <Icon name={iconName} size={23} color={color} />;
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
