import { useState } from "react";
import { View, Text, StyleSheet, Button, Modal } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* COMPONENT *//
import { HeaderTitle } from "../../components";

//* THEME *//
import { styles as themeStyles } from "../../theme";

export const ModalScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={{ ...themeStyles.globalMargin, marginTop: top + 20 }}>
      <HeaderTitle title="Modal Screen " color="#5656D8" />

      <Button title="Abrir modal" onPress={() => setIsVisible(true)} />

      <Modal transparent animationType="fade" visible={isVisible}>
        <View style={styles.modal__container}>
          <View style={styles.modal}>
            <View style={{ marginTop: 20, justifyContent: "center" }}>
              <HeaderTitle title="Modal" marginBottom={0} color="white" />
              <Text style={{ color: "white", marginBottom: 20 }}>
                Cuerpo del modal
              </Text>
              <Button title="Cerrar" onPress={() => setIsVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal__container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CCCA",
  },
  modal: {
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: "#a8a85cf5",
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: "95%",
  },
});
