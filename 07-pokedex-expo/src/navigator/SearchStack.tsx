import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

//* SCREENS *//
import { PokemonScreen, SearchScreen } from "../screens";

//* INTERFACES *//
import { ISimplePokemon } from "../interfaces";

//* STACK TYPES *//
export type SearchStackParams = {
  SearchList: undefined;
  PokemonScreen: { simplePokemon: ISimplePokemon };
};

//* STACK INSTANCE *//
const StackInstance = createStackNavigator<SearchStackParams>();

export const SearchStack: React.FC = () => {
  return (
    <StackInstance.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#FFF" },
      }}
      initialRouteName="SearchList"
    >
      <StackInstance.Screen name="SearchList" component={SearchScreen} />
      <StackInstance.Screen name="PokemonScreen" component={PokemonScreen} />
    </StackInstance.Navigator>
  );
};

const styles = StyleSheet.create({});
