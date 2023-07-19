import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//* COMPONENT *//
import { Background, WhiteLogo } from "../../components";

//* THEME STYLES *//
import { authStyles } from "../../theme";

//* INTERFACE *//
interface Props {}

export const LoginScreen: React.FC<Props> = () => {
  return (
    <>
      <Background />

      <SafeAreaView style={authStyles.container}>
        <WhiteLogo />

        <Text style={authStyles.title}>Iniciar Sesión</Text>

        <Text style={authStyles.label}>Email</Text>
        <TextInput
          placeholder="Ingrese su email:"
          placeholderTextColor="#FFF5"
          keyboardType="email-address"
          style={authStyles.inputField}
          selectionColor="#FFF4"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Text style={authStyles.label}>Contraseña</Text>
        <TextInput
          placeholder="**************"
          placeholderTextColor="#FFF5"
          style={authStyles.inputField}
          selectionColor="#FFF4"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <View style={authStyles.buttons__container}>
          <View>
            <TouchableOpacity activeOpacity={0.7} style={authStyles.button}>
              <Text style={authStyles.button__text}>Login</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              activeOpacity={0.7}
              style={authStyles.button__secondary}
            >
              <Text style={authStyles.button__text_secondary}>
                Crear cuenta
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
