import { View, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFormik } from "formik";

//* COMPONENT *//
import { CustomSwitch, HeaderTitle } from "../../components";

//* THEME *//
import { styles as themeStyles } from "../../theme";

export const SwitchScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();

  const formik = useFormik({
    initialValues: { isActive: false, isHappy: false, isHungry: false },
    onSubmit: (formValues) => {
      console.log(formValues);
    },
  });

  return (
    <View style={{ marginTop: top + 20, ...themeStyles.globalMargin }}>
      <HeaderTitle title="Switches" color="#5858d6" />

      <CustomSwitch
        title="isActive"
        isOn={formik.values.isActive}
        onChange={(value: boolean) => formik.setFieldValue("isActive", value)}
      />

      <CustomSwitch
        title="isHappy"
        isOn={formik.values.isHappy}
        onChange={(value: boolean) => formik.setFieldValue("isHappy", value)}
      />

      <CustomSwitch
        title="isHungry"
        isOn={formik.values.isHungry}
        onChange={(value: boolean) => formik.setFieldValue("isHungry", value)}
      />

      <Text style={styles.state__info}>
        {JSON.stringify(formik.values, null, 4)}
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
