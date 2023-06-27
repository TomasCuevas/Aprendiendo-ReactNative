import { View, Text, Image, StyleSheet } from "react-native";

//* INTERFACES *//
import { ICast } from "../../interfaces";

interface Props {
  actor: ICast;
}

export const CastItem: React.FC<Props> = ({ actor }) => {
  const ACTOR_IMAGE = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;

  return (
    <View style={styles.container}>
      <Image source={{ uri: ACTOR_IMAGE }} style={styles.actor__image} />

      <View style={styles.actor__info}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>{actor.name}</Text>
        <Text style={{ fontSize: 16, color: "grey" }}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    gap: 15,
  },
  actor__image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  actor__info: {},
});
