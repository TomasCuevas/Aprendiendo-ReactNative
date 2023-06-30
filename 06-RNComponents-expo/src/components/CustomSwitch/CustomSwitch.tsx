import { StyleSheet, Switch, View, Text } from "react-native";

//* INTERFACE *//
interface Props {
  title: string;
  isOn: boolean;
  onChange(value: boolean): void;
}

export const CustomSwitch: React.FC<Props> = ({ title, isOn, onChange }) => {
  return (
    <View style={styles.switchContainer}>
      <Text style={styles.switchText}>{title}</Text>
      <Switch
        trackColor={{ false: "#D9D9DB", true: "#5856D6" }}
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
