import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

//* COMPONENT *//
import { FadeInImage } from "../FadeInImage/FadeInImage";

//* NAVIGATION TYPE *//

//* INTERFACES *//
import { ISimplePokemon } from "../../interfaces";
import { RootStackParams } from "../../navigator/RootStack";

interface Props {
  pokemon: ISimplePokemon;
}

export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const windowsWidth = Dimensions.get("window").width;
  const { navigate } = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <TouchableOpacity
      onPress={() => navigate("PokemonScreen", { simplePokemon: pokemon })}
      activeOpacity={0.9}
    >
      <View style={{ ...styles.card__container, width: windowsWidth * 0.4 }}>
        <View>
          <Text style={styles.pokemon__name}>{pokemon.name}</Text>
          <Text style={styles.pokemon__name}>#{pokemon.id}</Text>
        </View>

        <View style={styles.poke__bola_container}>
          <Image
            source={require("../../assets/pokebola-blanca.png")}
            style={styles.poke__bola}
          />
        </View>

        <FadeInImage uri={pokemon.picture} style={styles.pokemon__picture} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card__container: {
    marginHorizontal: 10,
    height: 120,
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#AAA",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  pokemon__name: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  poke__bola_container: {
    width: 120,
    height: 120,
    position: "absolute",
    bottom: -0,
    right: -0,
    overflow: "hidden",
  },
  poke__bola: {
    width: 110,
    height: 110,
    position: "absolute",
    right: -20,
    bottom: -20,
    opacity: 0.6,
  },
  pokemon__picture: {
    width: 120,
    height: 120,
    position: "absolute",
    right: -20,
    bottom: -75,
  },
});
