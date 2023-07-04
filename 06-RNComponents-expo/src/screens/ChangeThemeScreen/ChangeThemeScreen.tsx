import { useContext } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//* COMPONENT *//
import { HeaderTitle } from "../../components";

//* CONTEXT *//
import { ThemeContext } from "../../context";

export const ChangeThemeScreen: React.FC = () => {
  const { setDarkTheme } = useContext(ThemeContext);

  return (
    <SafeAreaView style={{ marginTop: 20 }}>
      <View style={{ marginHorizontal: 20 }}>
        <HeaderTitle title="Theme" color="#5656D8" />
        <TouchableOpacity
          onPress={setDarkTheme}
          activeOpacity={0.8}
          style={{
            backgroundColor: "#5858D6",
            width: 150,
            height: 50,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
            Light / Dark
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
