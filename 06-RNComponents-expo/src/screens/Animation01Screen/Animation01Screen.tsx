import { useContext } from "react";
import { View, StyleSheet, Animated, Button } from "react-native";

//* HOOK *//
import { useAnimation } from "../../hooks";

//* CONTEXT *//
import { ThemeContext } from "../../context";

export const Animation01Screen: React.FC = () => {
  const { colors } = useContext(ThemeContext);
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
          color={colors.primary}
          onPress={() => {
            fadeIn(), startMoving(-150);
          }}
        />
        <Button title="FadeOut" color={colors.primary} onPress={fadeOut} />
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
