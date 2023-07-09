import { StyleSheet } from "react-native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

//* SCREENS *//
import { HomeScreen, PokemonScreen } from "../screens";

//* INTERFACES *//
import { ISimplePokemon } from "../interfaces";

//* STACK TYPES *//
export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: { simplePokemon: ISimplePokemon };
};

//* STACK INSTANCE *//
const StackNavigatorInstance = createStackNavigator<RootStackParams>();

export const RootStackNavigator: React.FC = () => {
  return (
    <StackNavigatorInstance.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#FFF" },
      }}
      initialRouteName="HomeScreen"
    >
      <StackNavigatorInstance.Screen name="HomeScreen" component={HomeScreen} />
      <StackNavigatorInstance.Screen
        name="PokemonScreen"
        component={PokemonScreen}
      />
    </StackNavigatorInstance.Navigator>
  );
};

const styles = StyleSheet.create({});
