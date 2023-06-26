import { useEffect } from "react";
import { View, Text } from "react-native";

//* AXIOS INSTANCE *//
import { movie_api } from "../axios";

export const HomeScreen: React.FC = () => {
  useEffect(() => {
    (async () => {
      const response = await movie_api.get("/now_playing");
      console.log(JSON.stringify(response.data, null, 4));
    })();
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};
