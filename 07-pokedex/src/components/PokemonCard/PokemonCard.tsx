import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";

//* INTERFACES *//
import { ISimplePokemon } from "../../interfaces";

interface Props {
  pokemon: ISimplePokemon;
}

export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const windowsWidth = Dimensions.get("window").width;

  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={{ ...styles.card__container, width: windowsWidth * 0.4 }}>
        <View>
          <Text style={styles.pokemon__name}>{pokemon.name}</Text>
          <Text style={styles.pokemon__name}>#{pokemon.id}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card__container: {
    marginHorizontal: 10,
    backgroundColor: "red",
    height: 120,
    marginBottom: 25,
    borderRadius: 10,
    padding: 10,
  },
  pokemon__name: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
  },
});
