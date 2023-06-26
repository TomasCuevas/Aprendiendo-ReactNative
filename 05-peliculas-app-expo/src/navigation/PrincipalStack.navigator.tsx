import { createStackNavigator } from "@react-navigation/stack";

//* SCREENS *//
import { DetailScreen, HomeScreen } from "../screens";

//* STACK INSTANCE *//
const Stack = createStackNavigator();

export const PrincipalStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};
