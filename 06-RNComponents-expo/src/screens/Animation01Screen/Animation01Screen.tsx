import { useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";

export const Animation01Screen: React.FC = () => {
  const opacity = useRef(new Animated.Value(0.4)).current;

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.purple__box, opacity }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  purple__box: {
    backgroundColor: "#5856D6",
    width: 150,
    height: 150,
  },
});
