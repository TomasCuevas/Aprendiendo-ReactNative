import { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* COMPONENT *//
import { HeaderTitle } from "../../components";

export const SwitchScreen: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((prev) => !prev);
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ marginTop: top + 20 }}>
      <HeaderTitle title="Switches" />
      <Switch
        trackColor={{ false: "#D9D9DB", true: "#5856D6" }}
        thumbColor={isEnabled ? "#fff" : "#eee"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
