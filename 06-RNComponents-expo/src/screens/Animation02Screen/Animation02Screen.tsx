import { View, StyleSheet } from "react-native";

export const Animation02Screen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.orange__box} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  orange__box: {
    backgroundColor: "orange",
    width: 150,
    height: 150,
  },
});
