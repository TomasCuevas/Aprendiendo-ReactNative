import { useEffect } from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "@expo/vector-icons/Ionicons";

//* THEME *//
import { colors, styles } from "../theme";

export const Tab1Screen: React.FC = () => {
  const { top } = useSafeAreaInsets();

  useEffect(() => {}, []);

  return (
    <View style={{ ...styles.globalMargin, marginTop: top }}>
      <Text style={styles.title}>Iconos</Text>
      <View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap" }}>
        <Icon name="airplane-outline" size={60} color={colors.primary} />
        <Icon name="add-circle-outline" size={60} color={colors.primary} />
        <Icon name="albums-outline" size={60} color={colors.primary} />
        <Icon name="alarm-outline" size={60} color={colors.primary} />
        <Icon
          name="american-football-outline"
          size={60}
          color={colors.primary}
        />
        <Icon name="aperture-outline" size={60} color={colors.primary} />
        <Icon name="apps-outline" size={60} color={colors.primary} />
        <Icon
          name="arrow-redo-circle-outline"
          size={60}
          color={colors.primary}
        />
        <Icon name="arrow-up-outline" size={60} color={colors.primary} />
        <Icon name="at-circle-outline" size={60} color={colors.primary} />
        <Icon name="tv-outline" size={60} color={colors.primary} />
        <Icon name="beer-outline" size={60} color={colors.primary} />
      </View>
    </View>
  );
};
