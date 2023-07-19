import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";
import { useFormik } from "formik";

//* COMPONENTS *//
import { Background, FormButton, FormInput, WhiteLogo } from "../../components";

//* THEME STYLES *//
import { authStyles } from "../../theme";

//* INTERFACES *//
import { RootStackParams } from "../../navigators/RootStack/RootStack";

interface Props extends StackScreenProps<RootStackParams, "LoginScreen"> {}

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (formValues) => {
      Keyboard.dismiss();
      console.log(formValues);
    },
  });

  return (
    <>
      <Background />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <SafeAreaView style={authStyles.container}>
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
              text="Crear cuenta"
              onPress={() => navigation.replace("RegisterScreen")}
            />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};
