import { Text, View, Image, StyleSheet } from "react-native";

//* INTERFACES *//
import { IMovie } from "../../interfaces";

interface Props {
  movie: IMovie;
}

export const MovieCard: React.FC<Props> = ({ movie }) => {
  const movieImage = `https://images.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <View style={styles.movie__container}>
      <Image source={{ uri: movieImage }} style={styles.movie__image} />
    </View>
  );
};

const styles = StyleSheet.create({
  movie__container: {
    width: 300,
    height: 420,
    borderRadius: 25,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 7.49,
    elevation: 20,
  },
  movie__image: {
    flex: 1,
  },
});
