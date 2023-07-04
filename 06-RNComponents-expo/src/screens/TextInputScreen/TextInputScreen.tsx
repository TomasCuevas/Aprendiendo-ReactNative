import { useContext } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFormik } from "formik";

//* COMPONENT *//
import { CustomSwitch, HeaderTitle } from "../../components";

//* THEME *//
import { styles as themeStyles } from "../../theme";

//* CONTEXT *//
import { ThemeContext } from "../../context";

export const TextInputScreen: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const formik = useFormik({
    initialValues: { name: "", email: "", phone: "", suscribe: false },
    onSubmit: (formValues) => {},
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <SafeAreaView style={{ ...themeStyles.globalMargin, marginTop: 20 }}>
          <HeaderTitle title="TextInput" color={colors.primary} />
          <TextInput
            style={{
              ...styles.input,
              borderColor: colors.border,
              color: colors.text,
            }}
            placeholderTextColor={colors.border}
            placeholder="Ingrese su nombre"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={formik.handleChange("name")}
            value={formik.values.name}
          />
          <TextInput
            style={{
              ...styles.input,
              borderColor: colors.border,
              color: colors.text,
            }}
            placeholderTextColor={colors.border}
            placeholder="Ingrese su email"
            autoCapitalize="none"
            onChangeText={formik.handleChange("email")}
            value={formik.values.email}
            keyboardType="email-address"
          />
          <CustomSwitch
            title="Suscribrise"
            isOn={formik.values.suscribe}
            onChange={(value: boolean) =>
              formik.setFieldValue("suscribe", value)
            }
          />
          <HeaderTitle title={JSON.stringify(formik.values, null, 4)} />
          <HeaderTitle title={JSON.stringify(formik.values, null, 4)} />
          <HeaderTitle title={JSON.stringify(formik.values, null, 4)} />
          <HeaderTitle title={JSON.stringify(formik.values, null, 4)} />
          <TextInput
            style={styles.input}
            placeholder="Ingrese su telefono"
            onChangeText={formik.handleChange("phone")}
            value={formik.values.phone}
            keyboardType="phone-pad"
          />
        </SafeAreaView>

        <View style={{ height: 10 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 2,
    marginVertical: 5,
  },
});
