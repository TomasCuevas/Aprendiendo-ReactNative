import { StyleSheet, Switch } from "react-native";
import { useState } from "react";

interface Props {
  isOn: boolean;
  onChange(value: boolean): void;
}

export const CustomSwitch: React.FC<Props> = ({ isOn, onChange }) => {
  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => {
    setIsEnabled((prev) => !prev);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{ false: "#D9D9DB", true: "#5856D6" }}
      thumbColor={isEnabled ? "#fff" : "#eee"}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

const styles = StyleSheet.create({});
