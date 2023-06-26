import { View, ActivityIndicator, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";

//* COMPONENTS *//
import { MovieCard } from "../../components";

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
    <View style={{ marginTop: top + 10 }}>
      {/* <MovieCard movie={moviesOnCinema[0]} /> */}
      <View style={{ height: 450 }}>
        <Carousel
          data={moviesOnCinema}
          renderItem={({ item }) => <MovieCard movie={item} />}
          sliderWidth={windowsWidth}
          itemWidth={300}
        />
      </View>
    </View>
  );
};
