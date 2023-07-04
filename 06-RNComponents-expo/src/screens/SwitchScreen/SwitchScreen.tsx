import { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFormik } from "formik";

//* COMPONENT *//
import { CustomSwitch, HeaderTitle } from "../../components";

//* THEME *//
import { styles as themeStyles } from "../../theme";

//* CONTEXT *//
import { ThemeContext } from "../../context";

export const SwitchScreen: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const formik = useFormik({
    initialValues: { isActive: false, isHappy: false, isHungry: false },
    onSubmit: (formValues) => {
      console.log(formValues);
    },
  });

  return (
    <SafeAreaView style={{ marginTop: 20, ...themeStyles.globalMargin }}>
      <HeaderTitle title="Switches" color={colors.primary} />

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

      <Text style={{ ...styles.state__info, color: colors.text }}>
        {JSON.stringify(formik.values, null, 4)}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  state__info: {
    marginTop: 20,
    fontSize: 25,
  },
});
