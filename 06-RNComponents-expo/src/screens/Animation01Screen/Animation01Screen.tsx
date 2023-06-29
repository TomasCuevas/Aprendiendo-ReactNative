import { View, StyleSheet, Animated, Button } from "react-native";

//* HOOK *//
import { useAnimation } from "../../hooks";

export const Animation01Screen: React.FC = () => {
  const { fadeIn, fadeOut, startMoving, opacity, position } = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purple__box,
          opacity,
          transform: [{ translateY: position }],
        }}
      />
      <View style={styles.buttons__container}>
        <Button
          title="FadeIn"
          onPress={() => {
            fadeIn(), startMoving(-150);
          }}
        />
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
