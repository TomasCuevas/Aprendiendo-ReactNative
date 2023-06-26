import { Text, View, Image, StyleSheet } from "react-native";

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
  const movieImage = `https://images.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <View style={{ ...styles.movie__container, height, width }}>
      <Image source={{ uri: movieImage }} style={styles.movie__image} />
    </View>
  );
};

const styles = StyleSheet.create({
  movie__container: {
    marginHorizontal: 5,
    borderRadius: 25,
    overflow: "hidden",
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
});
