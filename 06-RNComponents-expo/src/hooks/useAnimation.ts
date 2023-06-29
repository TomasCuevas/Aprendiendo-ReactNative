import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const startMoving = (initialPosition: number, duration: number = 300) => {
    position.setValue(initialPosition);

    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start();
  };

  return {
    // properties
    opacity,
    position,

    // methods
    fadeIn,
    fadeOut,
    startMoving,
  };
};
