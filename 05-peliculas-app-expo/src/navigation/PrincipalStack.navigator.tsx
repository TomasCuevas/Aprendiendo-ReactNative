import { createStackNavigator } from "@react-navigation/stack";

//* SCREENS *//
import { DetailScreen, HomeScreen } from "../screens";

//* INTERFACES *//
import { IMovie } from "../interfaces";

//* STACK TYPES *//
export type RootStackParams = {
  Home: undefined;
  Detail: IMovie;
};

//* STACK INSTANCE *//
const Stack = createStackNavigator<RootStackParams>();

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
