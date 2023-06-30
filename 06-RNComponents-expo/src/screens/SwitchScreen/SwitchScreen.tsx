import { View, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* COMPONENT *//
import { CustomSwitch, HeaderTitle } from "../../components";
import { useState } from "react";

export const SwitchScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();

  const [switchState, setSwitchState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const onChangeSwitchState = (value: boolean, field: string) => {
    setSwitchState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <View style={{ marginTop: top + 20 }}>
      <HeaderTitle title="Switches" />

      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>isActive</Text>
        <CustomSwitch
          isOn={switchState.isActive}
          onChange={(value) => onChangeSwitchState(value, "isActive")}
        />
      </View>

      <Text style={styles.switchText}>
        {JSON.stringify(switchState, null, 4)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  switchText: {
    fontSize: 25,
  },
});
