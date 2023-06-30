import { View, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* COMPONENT *//
import { CustomSwitch, HeaderTitle } from "../../components";
import { useState } from "react";
import { styles as themeStyles } from "../../theme";

export const SwitchScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();

  const [switchState, setSwitchState] = useState({
    isActive: true,
    isHappy: true,
    isHungry: false,
  });

  const onChangeSwitchState = (value: boolean, field: string) => {
    setSwitchState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <View style={{ marginTop: top + 20, ...themeStyles.globalMargin }}>
      <HeaderTitle title="Switches" color="#5858d6" />

      <CustomSwitch
        title="isActive"
        isOn={switchState.isActive}
        onChange={(value) => onChangeSwitchState(value, "isActive")}
      />

      <CustomSwitch
        title="isHappy"
        isOn={switchState.isHappy}
        onChange={(value) => onChangeSwitchState(value, "isHappy")}
      />

      <CustomSwitch
        title="isHungry"
        isOn={switchState.isHungry}
        onChange={(value) => onChangeSwitchState(value, "isHungry")}
      />

      <Text style={styles.state__info}>
        {JSON.stringify(switchState, null, 4)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  state__info: {
    marginTop: 20,
    fontSize: 25,
  },
});
