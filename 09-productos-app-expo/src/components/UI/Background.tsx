import { View, StyleSheet } from "react-native";

export const Background: React.FC = () => {
  return <View style={styles.background} />;
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    backgroundColor: "#5858D6",
    top: -300,
    width: 1000,
    height: 1200,
    transform: [{ rotate: "-70deg" }],
  },
});
