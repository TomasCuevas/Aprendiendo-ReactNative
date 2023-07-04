import { useContext } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//* COMPONENT *//
import { HeaderTitle } from "../../components";

//* CONTEXT *//
import { ThemeContext } from "../../context";

export const ChangeThemeScreen: React.FC = () => {
  const { setDarkTheme, setLightTheme, colors } = useContext(ThemeContext);

  return (
    <SafeAreaView style={{ marginTop: 20 }}>
      <View style={{ marginHorizontal: 20 }}>
        <HeaderTitle title="Theme" color={colors.primary} />
        <View style={styles.buttons__container}>
          <TouchableOpacity
            onPress={setLightTheme}
            activeOpacity={0.8}
            style={{
              ...styles.button__container,
              backgroundColor: colors.primary,
            }}
          >
            <Text style={styles.button__text}>Light</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={setDarkTheme}
            activeOpacity={0.8}
            style={{
              ...styles.button__container,
              backgroundColor: colors.primary,
            }}
          >
            <Text style={styles.button__text}>Dark</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttons__container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  button__container: {
    width: 150,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button__text: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "500",
  },
});
