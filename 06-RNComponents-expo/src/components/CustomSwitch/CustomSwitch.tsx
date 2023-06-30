import { StyleSheet, Switch, View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

interface Props {
  title: string;
  isOn: boolean;
  onChange(value: boolean): void;
}

export const CustomSwitch: React.FC<Props> = ({ title, isOn, onChange }) => {
  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => {
    setIsEnabled((prev) => !prev);
    onChange(!isEnabled);
  };

  return (
    <TouchableOpacity activeOpacity={1} onPress={toggleSwitch}>
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>{title}</Text>
        <Switch
          trackColor={{ false: "#D9D9DB", true: "#5856D6" }}
          thumbColor={isEnabled ? "#fff" : "#eee"}
          value={isEnabled}
        />
      </View>
    </TouchableOpacity>
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
