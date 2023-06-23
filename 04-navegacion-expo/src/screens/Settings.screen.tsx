import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const SettingsScreen: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ marginTop: insets.top }}>
      <Text>Settings Screen</Text>
    </View>
  );
};
