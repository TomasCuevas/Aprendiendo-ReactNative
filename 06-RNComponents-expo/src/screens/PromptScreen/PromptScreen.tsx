import { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* COMPONENTS *//
import { HeaderTitle, Prompt } from "../../components";

//* THEME *//
import { styles as themeStyles } from "../../theme";

export const PromptScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const [isVisible, setIsVisible] = useState(false);
  const [promptValue, setPromptValue] = useState("");

  const showPrompt = () => setIsVisible(true);
  const closePrompt = () => setIsVisible(false);

  const send = () => {
    console.log(`El valor es: ${promptValue}`);
    closePrompt();
  };

  const updatePromptValue = (newValue: string) => setPromptValue(newValue);

  return (
    <View style={{ ...themeStyles.globalMargin, marginTop: top + 20 }}>
      <HeaderTitle title="Prompt" color="#5858D6" />
      <Button title="Mostrar Prompt" onPress={showPrompt} />
      <Prompt
        buttons={[
          { label: "Cancel", onPress: () => closePrompt() },
          { label: "Enviar", onPress: () => send() },
        ]}
        description="Debes ingresar la contraseña para validar tu identidad."
        title="Ingresar contraseña"
        visible={isVisible}
        inputValue={promptValue}
        updateValue={updatePromptValue}
        password
      />
    </View>
  );
};

const styles = StyleSheet.create({});
