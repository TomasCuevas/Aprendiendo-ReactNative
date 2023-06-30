import { View, TextInput, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* THEME *//
import { styles as themeStyles } from "../../theme";
import { HeaderTitle } from "../../components";

export const TextInputScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ ...themeStyles.globalMargin, marginTop: top + 20 }}>
      <HeaderTitle title="TextInput" color="#5858D6" />
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 2,
  },
});
