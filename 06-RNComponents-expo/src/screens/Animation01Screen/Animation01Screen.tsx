import { useRef } from "react";
import { View, StyleSheet, Animated, Button, Easing } from "react-native";

export const Animation01Screen: React.FC = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const top = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(top, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(top, {
      toValue: -100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purple__box,
          opacity,
          transform: [{ translateY: top }],
        }}
      />
      <View style={styles.buttons__container}>
        <Button title="FadeIn" onPress={fadeIn} />
        <Button title="FadeOut" onPress={fadeOut} />
      </View>
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
    marginBottom: 20,
  },
  buttons__container: {
    flexDirection: "row",
    gap: 10,
  },
});
