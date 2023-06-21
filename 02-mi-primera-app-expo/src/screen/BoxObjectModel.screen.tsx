import { StyleSheet, Text, View } from "react-native";

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
  },
  title: {
    color: "white",
    borderWidth: 10,
    fontSize: 20,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
});
