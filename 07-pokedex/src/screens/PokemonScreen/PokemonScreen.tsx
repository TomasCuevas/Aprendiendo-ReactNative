import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* ICONS *//
import Icon from "@expo/vector-icons/Ionicons";

//* SCREEN INTERFACE AND TYPE *//
import { RootStackParams } from "../../navigator/RootStackNavigator";
import { FadeInImage } from "../../components";

interface Props extends StackScreenProps<RootStackParams, "PokemonScreen"> {}

export const PokemonScreen: React.FC<Props> = ({ navigation, route }) => {
  const {
    simplePokemon: { id, name, picture },
  } = route.params;
  const { top } = useSafeAreaInsets();
  const { goBack } = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <View>
      <View style={styles.header__container}>
        <TouchableOpacity
          onPress={() => goBack()}
          activeOpacity={0.8}
          style={{ ...styles.back__button, marginTop: top + 10 }}
        >
          <Icon name="arrow-back-outline" color="#FFF" size={30} />
        </TouchableOpacity>

        <Text style={{ ...styles.pokemon__name, marginTop: top + 40 }}>
          {name}
        </Text>
        <Text style={{ ...styles.pokemon__name }}>#{id}</Text>

        <Image
          source={require("../../assets/pokebola-blanca.png")}
          style={styles.pokeball}
        />

        <FadeInImage uri={picture} style={styles.pokemon__picture} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header__container: {
    height: 370,
    backgroundColor: "#AAA",
    zIndex: 999,
    borderBottomLeftRadius: 500,
    borderBottomRightRadius: 500,
    alignItems: "center",
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
});
