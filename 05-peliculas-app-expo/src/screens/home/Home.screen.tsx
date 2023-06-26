import { View, ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* COMPONENTS *//
import { MovieCard } from "../../components";

//* HOOK *//
import { useMovies } from "../../hooks";

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
      <MovieCard movie={moviesOnCinema[0]} />
    </View>
  );
};
