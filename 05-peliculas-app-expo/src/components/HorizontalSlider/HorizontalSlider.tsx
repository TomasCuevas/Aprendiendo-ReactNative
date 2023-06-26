import { View, Text, FlatList } from "react-native";

//* COMPONENT *//
import { MovieCard } from "../";

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
        <Text style={{ fontSize: 30, fontWeight: "700" }}>{title}</Text>
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
