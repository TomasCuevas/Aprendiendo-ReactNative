import { View, Text, ActivityIndicator } from "react-native";

//* HOOK *//
import { useMovies } from "../../hooks";

export const HomeScreen: React.FC = () => {
  const { moviesOnCinema, isLoading } = useMovies();

  if (true) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="red" size={60} />
      </View>
    );
  }

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};
