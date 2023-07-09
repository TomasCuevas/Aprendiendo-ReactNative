import { View, Text, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

//* SCREEN INTERFACE AND TYPE *//
import { RootStackParams } from "../../navigator/RootStackNavigator";

interface Props extends StackScreenProps<RootStackParams, "PokemonScreen"> {}

export const PokemonScreen: React.FC<Props> = ({ navigation, route }) => {
  const { simplePokemon } = route.params;

  return (
    <View>
      <Text>{simplePokemon.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
