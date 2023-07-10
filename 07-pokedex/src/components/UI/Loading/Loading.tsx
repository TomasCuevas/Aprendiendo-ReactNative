import { View, StyleSheet, ActivityIndicator } from "react-native";

export const Loading: React.FC = () => {
  return (
    <View style={styles.activity__container}>
      <ActivityIndicator size={50} color="#AAA" />
    </View>
  );
};

const styles = StyleSheet.create({
  activity__container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
});
