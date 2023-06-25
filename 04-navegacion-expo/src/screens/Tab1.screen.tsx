import { useEffect } from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* COMPONENT *//
import { TouchableIcon } from "../components";

//* THEME *//
import { colors, styles } from "../theme";

export const Tab1Screen: React.FC = () => {
  const { top } = useSafeAreaInsets();

  useEffect(() => {}, []);

  return (
    <View style={{ ...styles.globalMargin, marginTop: top }}>
      <Text style={styles.title}>Iconos</Text>
      <View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap" }}>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="add-circle-outline" />
        <TouchableIcon iconName="albums-outline" />
        <TouchableIcon iconName="alarm-outline" />
        <TouchableIcon iconName="american-football-outline" />
        <TouchableIcon iconName="aperture-outline" />
        <TouchableIcon iconName="apps-outline" />
        <TouchableIcon iconName="arrow-redo-circle-outline" />
        <TouchableIcon iconName="arrow-up-outline" />
        <TouchableIcon iconName="at-circle-outline" />
        <TouchableIcon iconName="tv-outline" />
        <TouchableIcon iconName="beer-outline" />
      </View>
    </View>
  );
};
