import { StyleSheet, Text, View } from "react-native";

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#28c4d9",
    flexDirection: "column-reverse",
  },
  caja1: {
    flex: 3,
    borderWidth: 2,
    borderColor: "white",
    fontSize: 20,
  },
  caja2: {
    flex: 1,
    borderWidth: 2,
    borderColor: "white",
    fontSize: 20,
  },
  caja3: {
    flex: 1,
    borderWidth: 2,
    borderColor: "white",
    fontSize: 20,
  },
});
