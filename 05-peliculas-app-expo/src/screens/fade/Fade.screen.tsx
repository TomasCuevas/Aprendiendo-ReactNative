import { useRef } from "react";
import { View, StyleSheet, Animated, Button } from "react-native";

//* HOOK *//
import { useFade } from "../../hooks";

export const FadeScreen = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const fadeIn = useFade(opacity, 1);
  const fadeOut = useFade(opacity, 0);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        style={{
          backgroundColor: "#084F6A",
          width: 150,
          height: 150,
          borderColor: "white",
          borderWidth: 10,
          opacity: opacity,
          marginBottom: 10,
        }}
      />

      <Button title="FadeIn" onPress={fadeIn} />
      <Button title="FadeOut" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({});
