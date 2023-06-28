import { View, ActivityIndicator, Dimensions, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";

//* COMPONENTS *//
import {
  GradientBackground,
  HorizontalSlider,
  MovieCard,
} from "../../components";

//* HOOK *//
import { useMovies } from "../../hooks";

//* DIMENSIONS *//
const { width: windowsWidth } = Dimensions.get("window");

export const HomeScreen: React.FC = () => {
  const { moviesOnCinema, popularMovies, topRated, upcoming, isLoading } =
    useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="red" size={60} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView style={{ marginTop: top + 10 }}>
        <View style={{ height: 450 }}>
          <Carousel
            data={moviesOnCinema}
            renderItem={({ item }) => <MovieCard movie={item} />}
            sliderWidth={windowsWidth}
            itemWidth={300}
          />
        </View>

        <HorizontalSlider movies={popularMovies} title="Populares" />
        <HorizontalSlider movies={topRated} title="Mejor valoradas" />
        <HorizontalSlider movies={upcoming} title="Próximamente" />
      </ScrollView>
    </GradientBackground>
  );
};
