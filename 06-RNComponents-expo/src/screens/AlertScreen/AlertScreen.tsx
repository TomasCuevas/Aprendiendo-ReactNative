import { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* COMPONENTS *//
import { Alert, HeaderTitle } from "../../components";

//* THEME *//
import { styles as themeStyles } from "../../theme";

export const AlertScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const [isVisible, setIsVisible] = useState(false);

  const showAlert = () => setIsVisible(true);

  const closeAlert = (button: string) => {
    console.log(`${button} button`);
    setIsVisible(false);
  };

  return (
    <View style={{ ...themeStyles.globalMargin, marginTop: top + 20 }}>
      <HeaderTitle title="Alert" color="#5858D6" />

      <Button title="Mostrar Alerta" onPress={showAlert} />
      <Alert
        buttons={[
          { label: "Cancel", onPress: () => closeAlert("Cancel") },
          { label: "Ok", onPress: () => closeAlert("Ok") },
        ]}
        description="Esta es la descripción de la Alerta."
        title="Título de la Alerta"
        visible={isVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
