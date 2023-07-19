import { View, Image, Text, StyleSheet } from "react-native";

//* INTERFACE *//
interface Props {}

export const WhiteLogo: React.FC<Props> = () => {
  return (
    <View style={styles.logo__container}>
      <Image
        source={require("../../assets/react-logo-white.png")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo__container: {
    alignItems: "center",
  },
  image: {
    width: 110,
    height: 100,
  },
});
