import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

//* INTERFACES *//
import { IMovie } from "../../interfaces";

interface Props {
  movie: IMovie;
  height?: number;
  width?: number;
}

export const MovieCard: React.FC<Props> = ({
  movie,
  height = 420,
  width = 300,
}) => {
  const MOVIE_IMAGE = `https://images.tmdb.org/t/p/w500/${movie.poster_path}`;
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", movie)}
      activeOpacity={0.6}
      style={{ ...styles.movie__container, height, width }}
    >
      <View style={styles.image__container}>
        <Image source={{ uri: MOVIE_IMAGE }} style={styles.movie__image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  movie__container: {
    marginHorizontal: 5,
    overflow: "hidden",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image__container: {
    flex: 1,
  },
  movie__image: {
    flex: 1,
  },
});
