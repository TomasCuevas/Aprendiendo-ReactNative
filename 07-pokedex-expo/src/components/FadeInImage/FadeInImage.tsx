import { useState } from "react";
import {
  Animated,
  View,
  ActivityIndicator,
  StyleProp,
  ImageStyle,
} from "react-native";

//* HOOK *//
import { useAnimation } from "../../hooks";

//* INTERFACE *//
interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage: React.FC<Props> = ({ uri, style }) => {
  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {isLoading && (
        <ActivityIndicator
          color="#AAA"
          size={30}
          style={{ position: "absolute" }}
        />
      )}
      <Animated.Image
        source={{ uri }}
        onLoad={() => {
          fadeIn();
          setIsLoading(false);
        }}
        style={{ ...(style as any), opacity }}
      />
    </View>
  );
};
