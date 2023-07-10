import { View, Text, StyleSheet, ScrollView } from "react-native";

//* INTERFACES *//
import { IFullPokemon } from "../../interfaces";

interface Props {
  fullPokemon: IFullPokemon;
}

export const PokemonDetails: React.FC<Props> = ({ fullPokemon }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Types: </Text>
        <View style={styles.types__container}>
          {fullPokemon.types.map(({ type }) => (
            <Text style={styles.regular__text} key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Sprites: </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontWeight: "700",
    fontSize: 22,
  },
  types__container: {
    flexDirection: "row",
    gap: 10,
  },
  regular__text: {
    fontSize: 18,
  },
});
