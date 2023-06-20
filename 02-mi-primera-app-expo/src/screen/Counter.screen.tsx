import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

//* COMPONENTS *//
import { Fab } from "../components";

export const CounterScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>

      <Fab
        onPress={() => setContador((prev) => prev - 1)}
        position="left"
        title="-1"
      />
      <Fab
        onPress={() => setContador((prev) => prev + 1)}
        position="right"
        title="+1"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
  },
});
