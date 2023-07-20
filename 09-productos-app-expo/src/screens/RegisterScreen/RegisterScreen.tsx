import { useEffect } from "react";
import { Keyboard, ScrollView, Text, View, Alert } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { useFormik } from "formik";
import { useStore } from "zustand";

//* COMPONENTS *//
import { FormButton, FormInput, WhiteLogo } from "../../components";

//* THEME STYLES *//
import { authStyles } from "../../theme";

//* STORE *//
import { useAuthStore } from "../../store";

//* INTERFACES *//
import { RootStackParams } from "../../navigators/RootStack/RootStack";

interface Props extends StackScreenProps<RootStackParams, "RegisterScreen"> {}

export const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const { register, error, setError } = useStore(useAuthStore);

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", repeatPassword: "" },
    onSubmit: async (formValues) => {
      Keyboard.dismiss();
      if (formValues.password !== formValues.repeatPassword)
        return setError("Las contraseñas no coinciden");

      await register(formValues);
    },
  });

  useEffect(() => {
    if (error.length === 0) return;

    Alert.alert("Error al registrarte", error, [
      { text: "Ok", onPress: () => setError("") },
    ]);
  }, [error]);

  return (
    <>
      <ScrollView style={{ backgroundColor: "#5858D6", flex: 1 }}>
        <View style={authStyles.container}>
          <WhiteLogo />

          <Text style={authStyles.title}>Registro</Text>

          <FormInput
            keyboardType="default"
            label="Nombre"
            placelholder="Ingrese su nombre"
            value={formik.values.name}
            onChangeText={formik.handleChange("name")}
          />

          <FormInput
            keyboardType="email-address"
            label="Email"
            placelholder="Ingrese su email"
            value={formik.values.email}
            onChangeText={formik.handleChange("email")}
          />

          <FormInput
            label="Contraseña"
            placelholder="**********"
            value={formik.values.password}
            isPassword
            onChangeText={formik.handleChange("password")}
          />

          <FormInput
            label="Repetir contraseña"
            placelholder="**********"
            value={formik.values.repeatPassword}
            isPassword
            onChangeText={formik.handleChange("repeatPassword")}
          />

          <View style={authStyles.buttons__container}>
            <FormButton.Primary
              text="Registrarme"
              onPress={() => formik.handleSubmit()}
            />

            <FormButton.Secondary
              text="¿Ya tienes una cuenta?"
              onPress={() => navigation.replace("LoginScreen")}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
