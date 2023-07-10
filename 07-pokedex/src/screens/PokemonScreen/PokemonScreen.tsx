import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* ICONS *//
import Icon from "@expo/vector-icons/Ionicons";

//* COMPONENT *//
import { FadeInImage, PokemonDetails } from "../../components";

//* HOOK *//
import { usePokemon } from "../../hooks";

//* SCREEN INTERFACE AND TYPE *//
import { RootStackParams } from "../../navigator/RootStackNavigator";

interface Props extends StackScreenProps<RootStackParams, "PokemonScreen"> {}

export const PokemonScreen: React.FC<Props> = ({ navigation, route }) => {
  const {
    simplePokemon: { id, name, picture },
  } = route.params;
  const { top } = useSafeAreaInsets();
  const { goBack } = useNavigation<StackNavigationProp<RootStackParams>>();
  const { data, isLoading } = usePokemon(id);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header__container}>
        <TouchableOpacity
          onPress={() => goBack()}
          activeOpacity={0.8}
          style={{ ...styles.back__button, marginTop: top + 10 }}
        >
          <Icon name="arrow-back-outline" color="#FFF" size={30} />
        </TouchableOpacity>

        <Text style={{ ...styles.pokemon__name, marginTop: top + 45 }}>
          {name}
        </Text>
        <Text style={{ ...styles.pokemon__name }}>#{id}</Text>

        <Image
          source={require("../../assets/pokebola-blanca.png")}
          style={styles.pokeball}
        />

        <FadeInImage uri={picture} style={styles.pokemon__picture} />
      </View>

      {isLoading ? (
        <View style={styles.activity__indicator}>
          <ActivityIndicator size={50} color="#AAA" />
        </View>
      ) : (
        <PokemonDetails fullPokemon={data!} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header__container: {
    backgroundColor: "#AAA",
    zIndex: 999,
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
  },
  back__button: {
    position: "absolute",
    left: 20,
  },
  pokemon__name: {
    color: "#FFF",
    fontSize: 35,
    alignSelf: "flex-start",
    left: 20,
    textTransform: "capitalize",
  },
  pokeball: {
    width: 200,
    height: 200,
    bottom: 10,
    opacity: 0.6,
  },
  pokemon__picture: {
    width: 200,
    height: 200,
    position: "absolute",
    bottom: -20,
  },
  activity__indicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
