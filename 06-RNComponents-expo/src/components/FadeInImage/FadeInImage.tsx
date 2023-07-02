import { useState } from "react";
import { Animated, View, ActivityIndicator } from "react-native";

//* HOOK *//
import { useAnimation } from "../../hooks";

//* INTERFACE *//
interface Props {
  uri: string;
}

export const FadeInImage: React.FC<Props> = ({ uri }) => {
  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {isLoading && (
        <ActivityIndicator
          color="#5656D8"
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
        style={{ width: "100%", height: 400, opacity }}
      />
    </View>
  );
};
