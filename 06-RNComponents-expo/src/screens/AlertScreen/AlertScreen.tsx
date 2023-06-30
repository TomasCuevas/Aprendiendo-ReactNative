import { View, Alert, StyleSheet, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* COMPONENTS *//
import { HeaderTitle } from "../../components";

//* THEME *//
import { styles as ThemeStyles } from "../../theme/app.theme";

export const AlertScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();

  const showAlert = () => {
    Alert.alert(
      "Título",
      "Este es el mensaje de la alerta",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel button"),
          style: "destructive",
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ],
      { cancelable: true, onDismiss: () => console.log("onDismiss") }
    );
  };

  return (
    <View style={{ ...ThemeStyles.globalMargin, marginTop: top + 20 }}>
      <HeaderTitle title="Alert" color="#5858D6" />

      <Button title="Mostrar Alerta" onPress={showAlert} />
    </View>
  );
};

const styles = StyleSheet.create({});
