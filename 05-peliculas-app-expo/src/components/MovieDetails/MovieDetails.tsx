import { View, Text } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

//* INTERFACES *//
import { ICast, IMovieFull } from "../../interfaces";

interface Props {
  cast: ICast[];
  fullMovie: IMovieFull;
}

export const MovieDetails: React.FC<Props> = ({ cast, fullMovie }) => {
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
          <Icon name="star-outline" color="grey" size={20} />
          <Text>{fullMovie.vote_average}</Text>

          <Text>
            - {fullMovie.genres.map((genre) => genre.name).join(", ")}
          </Text>
        </View>
      </View>
    </>
  );
};
