import { useContext } from "react";
import { StyleSheet, Switch, View, Text } from "react-native";

//* CONTEXT *//
import { ThemeContext } from "../../context";

//* INTERFACE *//
interface Props {
  title: string;
  isOn: boolean;
  onChange(value: boolean): void;
}

export const CustomSwitch: React.FC<Props> = ({ title, isOn, onChange }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <View style={styles.switchContainer}>
      <Text style={{ ...styles.switchText, color: colors.text }}>{title}</Text>
      <Switch
        trackColor={{ false: "#D9D9DB", true: colors.primary }}
        thumbColor={isOn ? "#fff" : "#eee"}
        value={isOn}
        onValueChange={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: -5,
  },
  switchText: {
    fontSize: 25,
  },
});
