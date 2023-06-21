import { StyleSheet, View } from "react-native";

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaRoja}></View>
      <View style={styles.cajaMorada}></View>
      <View style={styles.cajaNaranja}></View>
      <View style={styles.cajaVerde}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28c4d9",
    justifyContent: "center",
    alignItems: "center",
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: "#5856d6",
    borderWidth: 10,
    borderColor: "white",
    top: -100,
    left: -100,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: "#F0A23B",
    borderWidth: 10,
    borderColor: "white",
    right: -100,
  },
  cajaVerde: {
    width: 100,
    height: 100,
    backgroundColor: "green",
    borderWidth: 10,
    top: 0,
    borderColor: "white",
    position: "absolute",
  },
  cajaRoja: {
    backgroundColor: "red",
    borderWidth: 10,
    borderColor: "white",
    ...StyleSheet.absoluteFillObject,
  },
});
