import { Animated } from "react-native";

export const useFade = (
  value: Animated.Value,
  toValue: number,
  duration?: number
) => {
  const animate = () => {
    Animated.timing(value, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start();
  };

  return animate;
};
