import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

//* STACK TYPE *//
import { RootStackParams } from "../../navigation/PrincipalStack.navigator";

//* DIMENSIONS *//
const SCREEN_HEIGHT = Dimensions.get("window").height;

//* SCREEN INTERFACE *//
interface Props extends StackScreenProps<RootStackParams, "Detail"> {}

export const DetailScreen: React.FC<Props> = ({ route }) => {
  const movie = route.params;
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
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
});
