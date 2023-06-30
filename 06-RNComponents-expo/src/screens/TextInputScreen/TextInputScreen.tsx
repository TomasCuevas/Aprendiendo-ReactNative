import { View, TextInput, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFormik } from "formik";

//* COMPONENT *//
import { HeaderTitle } from "../../components";

//* THEME *//
import { styles as themeStyles } from "../../theme";

export const TextInputScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const formik = useFormik({
    initialValues: { name: "", email: "", phone: "" },
    onSubmit: (formValues) => {},
  });

  return (
    <View style={{ ...themeStyles.globalMargin, marginTop: top + 20 }}>
      <HeaderTitle title="TextInput" color="#5858D6" />
      <TextInput
        style={styles.input}
        placeholder="Ingrese su nombre"
        autoCorrect={false}
        autoCapitalize="words"
        onChangeText={formik.handleChange("name")}
        value={formik.values.name}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese su email"
        autoCapitalize="none"
        onChangeText={formik.handleChange("email")}
        value={formik.values.email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese su telefono"
        onChangeText={formik.handleChange("phone")}
        value={formik.values.phone}
        keyboardType="phone-pad"
      />
      <HeaderTitle title={JSON.stringify(formik.values, null, 4)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 2,
    marginVertical: 5,
  },
});
