import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

//* INTERFACE *//
interface Props {}

export const LoadingScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color="#5858D6" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
