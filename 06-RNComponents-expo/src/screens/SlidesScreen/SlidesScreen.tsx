import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* COMPONENT *//
import { HeaderTitle } from "../../components";

export const SlidesScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ marginTop: top + 20, marginHorizontal: 20 }}>
      <HeaderTitle title="Slides Screen" color="#5656D8" />
    </View>
  );
};
