import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

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
const StackInstance = createStackNavigator<RootStackParams>();

export const RootStack: React.FC = () => {
  return (
    <StackInstance.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#FFF" },
      }}
      initialRouteName="HomeScreen"
    >
      <StackInstance.Screen name="HomeScreen" component={HomeScreen} />
      <StackInstance.Screen name="PokemonScreen" component={PokemonScreen} />
    </StackInstance.Navigator>
  );
};

const styles = StyleSheet.create({});
