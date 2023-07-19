import { View, Text, StyleSheet, TextInput } from "react-native";

//* COMPONENT *//
import { Background, WhiteLogo } from "../../components";

//* THEME STYLES *//
import { loginStyles } from "../../theme/loginTheme";

//* INTERFACE *//
interface Props {}

export const LoginScreen: React.FC<Props> = () => {
  return (
    <>
      <Background />
      <WhiteLogo />

      <Text style={loginStyles.title}>Login</Text>
      <Text style={loginStyles.label}>Email</Text>

      <TextInput
        placeholder="Ingrese su email:"
        placeholderTextColor="#FFF5"
        keyboardType="email-address"
      />
    </>
  );
};

const styles = StyleSheet.create({});
