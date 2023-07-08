import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

//* SCREENS *//
import { HomeScreen, PokemonScreen } from "../screens";

//* STACK INSTANCE *//
const StackNavigatorInstance = createStackNavigator();

export const StackNavigator: React.FC = () => {
  return (
    <StackNavigatorInstance.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#FFF" },
      }}
      initialRouteName="home"
    >
      <StackNavigatorInstance.Screen name="Home" component={HomeScreen} />
      <StackNavigatorInstance.Screen name="Pokemon" component={PokemonScreen} />
    </StackNavigatorInstance.Navigator>
  );
};

const styles = StyleSheet.create({});
