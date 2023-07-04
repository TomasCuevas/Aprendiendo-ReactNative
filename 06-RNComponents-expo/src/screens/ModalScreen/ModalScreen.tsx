import { useState, useContext } from "react";
import { View, Text, StyleSheet, Button, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//* COMPONENT *//
import { HeaderTitle } from "../../components";

//* THEME *//
import { styles as themeStyles } from "../../theme";

//* CONTEXT *//
import { ThemeContext } from "../../context";

export const ModalScreen: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <SafeAreaView style={{ ...themeStyles.globalMargin, marginTop: 20 }}>
      <HeaderTitle title="Modal Screen " color={colors.primary} />

      <Button title="Abrir modal" onPress={() => setIsVisible(true)} />

      <Modal transparent animationType="fade" visible={isVisible}>
        <View style={styles.modal__container}>
          <View style={styles.modal}>
            <View style={{ marginTop: 20, justifyContent: "center" }}>
              <HeaderTitle title="Modal" marginBottom={0} color="#FFF" />
              <Text style={{ color: "#FFF", marginBottom: 20 }}>
                Cuerpo del modal
              </Text>
              <Button title="Cerrar" onPress={() => setIsVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modal__container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AAA8",
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
