import { useEffect } from "react";
import { View, Text } from "react-native";

//* AXIOS INSTANCE *//
import { movie_api } from "../axios";

//* INTERFACES *//
import { IMovieNowPlaying } from "../interfaces";

export const HomeScreen: React.FC = () => {
  useEffect(() => {
    (async () => {
      const response = await movie_api.get<IMovieNowPlaying>("/now_playing");
      console.log(JSON.stringify(response.data.results[0].title, null, 4));
    })();
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};
