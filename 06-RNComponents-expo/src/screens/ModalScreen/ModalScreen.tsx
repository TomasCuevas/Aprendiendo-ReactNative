import { useState } from "react";
import { View, Text, StyleSheet, Button, Modal } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* COMPONENT *//
import { HeaderTitle } from "../../components";

//* THEME *//
import { styles as themeStyles } from "../../theme/app.theme";

export const ModalScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={{ ...themeStyles.globalMargin, marginTop: top + 20 }}>
      <HeaderTitle title="Modal Screen " color="#5656D8" />

      <Button title="Abrir modal" onPress={() => setIsVisible(true)} />

      <Modal transparent animationType="fade" visible={isVisible}>
        <View style={styles.modal__container}>
          <View style={{ marginTop: 20 }}>
            <HeaderTitle title="Modal" marginBottom={0} color="white" />
            <Text style={{ color: "white", marginBottom: 20 }}>
              Cuerpo del modal
            </Text>
            <Button title="Cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal__container: {
    backgroundColor: "#a8a85cf5",
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
