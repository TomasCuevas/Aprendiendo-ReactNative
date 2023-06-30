import { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

export const SwitchScreen: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((prev) => !prev);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#D9D9DB", true: "#5856D6" }}
        thumbColor={isEnabled ? "#fff" : "#eee"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
