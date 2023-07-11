import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//* ICONS *//
import Icon from "@expo/vector-icons/Ionicons";

//* STACKS *//
import { RootStack } from "./RootStack";
import { SearchStack } from "./SearchStack";

//* TABS TYPES *//
export type RootTabs = {
  RootStack: undefined;
  SearchStack: undefined;
};

//* TAB INSTANCE
const TabInstance = createBottomTabNavigator<RootTabs>();

export const RootTabs = () => {
  return (
    <TabInstance.Navigator
      sceneContainerStyle={{ backgroundColor: "#FFF" }}
      screenOptions={{
        tabBarActiveTintColor: "#5858D6",
        tabBarStyle: {
          paddingBottom: 10,
          backgroundColor: "#FFFFFFE2",
          borderWidth: 0,
          elevation: 0,
          height: 55,
        },
        headerShown: false,
      }}
      initialRouteName="RootStack"
    >
      <TabInstance.Screen
        name="RootStack"
        options={{
          tabBarLabel: "Listado",
          tabBarIcon: ({ color }) => (
            <Icon
              size={22}
              name="list-outline"
              color={color}
              style={{ marginBottom: -5 }}
            />
          ),
        }}
        component={RootStack}
      />
      <TabInstance.Screen
        name="SearchStack"
        options={{
          tabBarLabel: "Búsqueda",
          tabBarIcon: ({ color }) => (
            <Icon
              size={22}
              name="search-outline"
              color={color}
              style={{ marginBottom: -5 }}
            />
          ),
        }}
        component={SearchStack}
      />
    </TabInstance.Navigator>
  );
};
