import { createStackNavigator } from "@react-navigation/stack";
import Icon from "@expo/vector-icons/Ionicons";

//* SCREENS *//
import {
  Page1Screen,
  Page2Screen,
  Page3Screen,
  PersonScreen,
} from "../screens";

//* STACK PARAMS *//
export type RootStackParams = {
  Page1Screen: undefined;
  Page2Screen: undefined;
  Page3Screen: undefined;
  PersonScreen: { id: number; name: string };
};

//* STACK INSTANCE *//
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Page1Screen"
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <Icon
            name="menu-outline"
            color="black"
            size={35}
            style={{ marginLeft: 20 }}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
        headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: "white" },
      })}
    >
      <Stack.Screen
        name="Page1Screen"
        options={{ title: "Página 1" }}
        component={Page1Screen}
      />
      <Stack.Screen
        name="Page2Screen"
        options={{ title: "Página 2" }}
        component={Page2Screen}
      />
      <Stack.Screen
        name="Page3Screen"
        options={{ title: "Página 3" }}
        component={Page3Screen}
      />
      <Stack.Screen
        name="PersonScreen"
        options={{ title: "Persona" }}
        component={PersonScreen}
      />
    </Stack.Navigator>
  );
};
