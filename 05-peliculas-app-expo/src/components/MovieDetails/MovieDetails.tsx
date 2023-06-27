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
      <View style={{ marginHorizontal: 20, marginTop: 5 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
          <Icon name="star-outline" color="grey" size={20} />
          <Text>{fullMovie.vote_average}</Text>

          <Text>
            - {fullMovie.genres.map((genre) => genre.name).join(", ")}
          </Text>
        </View>

        <Text style={{ fontSize: 20, marginTop: 10, fontWeight: "700" }}>
          Historia
        </Text>
        <Text style={{ fontSize: 16, lineHeight: 22 }}>
          {fullMovie.overview}
        </Text>

        <Text style={{ fontSize: 20, marginTop: 10, fontWeight: "700" }}>
          Presupuesto
        </Text>
        <Text style={{ fontSize: 18, lineHeight: 22 }}>
          {new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "USD",
          }).format(fullMovie.budget)}
        </Text>
      </View>
    </>
  );
};
