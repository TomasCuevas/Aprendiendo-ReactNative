import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  ActivityIndicator,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import Icon from "@expo/vector-icons/Ionicons";

//* COMPONENT *//
import { MovieDetails } from "../../components";

//* HOOK *//
import { useMovieDetails } from "../../hooks";

//* STACK TYPE *//
import { RootStackParams } from "../../navigation/PrincipalStack.navigator";
import { TouchableOpacity } from "react-native";

//* DIMENSIONS *//
const SCREEN_HEIGHT = Dimensions.get("window").height;

//* SCREEN INTERFACE *//
interface Props extends StackScreenProps<RootStackParams, "Detail"> {}

export const DetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const movie = route.params;
  const { isLoading, cast, fullMovie } = useMovieDetails(movie.id);

  const MOVIE_IMAGE = `https://images.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <ScrollView>
      <View style={styles.image__container}>
        <Image source={{ uri: MOVIE_IMAGE }} style={styles.movie__image} />
      </View>

      <View style={styles.margin__container}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={30} color="grey" />
      ) : (
        <MovieDetails cast={cast!} fullMovie={fullMovie!} />
      )}

      <TouchableOpacity
        onPress={() => navigation.pop()}
        style={styles.back__button}
      >
        <Icon name="arrow-back-sharp" color="white" size={50} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image__container: {
    width: "100%",
    height: SCREEN_HEIGHT * 0.7,
    overflow: "hidden",
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  movie__image: {
    flex: 1,
  },
  margin__container: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  subtitle: {
    fontSize: 15,
    opacity: 0.5,
  },
  title: {
    fontSize: 20,
    lineHeight: 23,
    fontWeight: "900",
  },
  back__button: {
    borderRadius: 100,
    height: 55,
    width: 55,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0008",
    position: "absolute",
    top: 40,
    left: 12,
  },
});
