import { useContext } from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "@expo/vector-icons/Ionicons";

//* THEME *//
import { colors, styles } from "../theme";

//* CONTEXT *//
import { AuthContext } from "../context/AuthContext";

export const SettingsScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const { authState, favoriteIcon } = useContext(AuthContext);

  return (
    <View style={{ marginTop: top, ...styles.globalMargin }}>
      <Text style={styles.title}>Settings Screen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>

      {favoriteIcon && (
        <Icon name={favoriteIcon as any} size={150} color={colors.primary} />
      )}
    </View>
  );
};
