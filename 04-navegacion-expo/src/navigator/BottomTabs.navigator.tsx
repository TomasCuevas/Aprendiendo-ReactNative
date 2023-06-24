import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//* THEME COLORS *//
import { colors } from "../theme";

//* SCREENS *//
import { Tab1Screen, Tab2Screen } from "../screens";

//* STACK NAVIGATOR *//
import { StackNavigator } from "./Stack.navigator";
import { View, Text } from "react-native";

//* BOTTOM TAB INSTANCE *//
const Tab = createBottomTabNavigator();

export const BottomTabs: React.FC = () => {
  return (
    <Tab.Navigator
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
            case "Tab2Screen":
              iconName = "T2";
              break;
            case "StackNavigator":
              iconName = "ST";
              break;
          }

          return <Text style={{ color: color }}>{iconName}</Text>;
        },
      })}
    >
      {/* <Tab.Screen
        name="Tab1Screen"
        options={{
          title: "Tab 1",
          tabBarIcon: ({ color }) => (
            <View>
              <Text style={{ color: color }}>T1</Text>
            </View>
          ),
        }}
        component={Tab1Screen}
      /> */}
      <Tab.Screen
        name="Tab1Screen"
        options={{ title: "Tab 1" }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2Screen"
        options={{ title: "Tab 2" }}
        component={Tab2Screen}
      />
      <Tab.Screen
        name="StackNavigator"
        options={{ title: "Stack" }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
