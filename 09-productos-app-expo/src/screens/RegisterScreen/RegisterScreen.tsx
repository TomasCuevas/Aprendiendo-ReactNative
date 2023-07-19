import { Keyboard, ScrollView, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { useFormik } from "formik";

//* COMPONENTS *//
import { FormButton, FormInput, WhiteLogo } from "../../components";

//* THEME STYLES *//
import { authStyles } from "../../theme";

//* INTERFACES *//
import { RootStackParams } from "../../navigators/RootStack/RootStack";

interface Props extends StackScreenProps<RootStackParams, "RegisterScreen"> {}

export const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", repeatPassword: "" },
    onSubmit: (formValues) => {
      Keyboard.dismiss();
      console.log(formValues);
    },
  });

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
            value={formik.values.email}
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
              text="Regístrate"
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
