import { Text, StyleSheet, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* INTERFACE *//
interface Props {}

export const HomeScreen: React.FC<Props> = () => {
  const { top } = useSafeAreaInsets();

  return (
    <>
      <Image
        style={styles.pokebola__bg}
        source={require("../../assets/pokebola.png")}
      />

      <Text style={{ ...styles.title, top: top + 10 }}>Pokédex</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  pokebola__bg: {
    position: "absolute",
    top: -100,
    right: -100,
    width: 300,
    height: 300,
    opacity: 0.3,
  },
  title: {
    fontSize: 35,
    fontWeight: "700",
    marginHorizontal: 20,
  },
});
