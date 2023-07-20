import { useEffect } from "react";
import { Alert, Keyboard, ScrollView, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { useStore } from "zustand";
import { useFormik } from "formik";

//* COMPONENTS *//
import { Background, FormButton, FormInput, WhiteLogo } from "../../components";

//* THEME STYLES *//
import { authStyles } from "../../theme";

//* STORE *//
import { useAuthStore } from "../../store";

//* INTERFACES *//
import { RootStackParams } from "../../navigators/RootStack/RootStack";

interface Props extends StackScreenProps<RootStackParams, "LoginScreen"> {}

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const { login, error, setError } = useStore(useAuthStore);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: async (formValues) => {
      Keyboard.dismiss();
      await login(formValues);
    },
  });

  useEffect(() => {
    if (error.length === 0) return;

    Alert.alert("Error al inciar sesión", error, [
      { text: "Ok", onPress: () => setError("") },
    ]);
  }, [error]);

  return (
    <>
      <Background />

      <ScrollView style={{ flex: 1 }}>
        <View style={authStyles.container}>
          <WhiteLogo />

          <Text style={authStyles.title}>Iniciar Sesión</Text>

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

          <View style={authStyles.buttons__container}>
            <FormButton.Primary
              text="Ingresar"
              onPress={() => formik.handleSubmit()}
            />

            <FormButton.Secondary
              text="¿No tienes una cuenta?"
              onPress={() => navigation.replace("RegisterScreen")}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
