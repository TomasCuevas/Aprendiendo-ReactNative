import {
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";

//* COMPONENTS *//
import { HorizontalSlider, MovieCard } from "../../components";

//* HOOK *//
import { useMovies } from "../../hooks";

const { width: windowsWidth } = Dimensions.get("window");

export const HomeScreen: React.FC = () => {
  const { moviesOnCinema, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="red" size={60} />
      </View>
    );
  }

  return (
    <ScrollView style={{ marginTop: top + 10 }}>
      <View style={{ height: 450 }}>
        <Carousel
          data={moviesOnCinema}
          renderItem={({ item }) => <MovieCard movie={item} />}
          sliderWidth={windowsWidth}
          itemWidth={300}
        />
      </View>

      <HorizontalSlider movies={moviesOnCinema} title="En cine" />
      <HorizontalSlider movies={moviesOnCinema} />
    </ScrollView>
  );
};
