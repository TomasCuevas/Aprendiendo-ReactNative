import { View, Text, FlatList } from "react-native";

//* COMPONENT *//
import { MovieCard } from "../MovieCard/MovieCard";

//* INTERFACES *//
import { IMovie } from "../../interfaces";

interface Props {
  movies: IMovie[];
  title?: string;
}

export const HorizontalSlider: React.FC<Props> = ({ movies, title }) => {
  return (
    <View style={{ height: title ? 260 : 230 }}>
      {title && (
        <Text
          style={{
            fontSize: 28,
            fontWeight: "700",
            marginBottom: 5,
            marginLeft: 10,
          }}
        >
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MovieCard movie={item} width={140} height={200} />
        )}
        horizontal
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
