import { SafeAreaView, StatusBar } from "react-native";

//* SCREENS *//
import { CalculadoraScreen } from "./src/screens";

//* THEME *//
import { styles } from "./src/theme";

export default function App() {
  return (
    <SafeAreaView style={{ ...styles.background }}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculadoraScreen />
    </SafeAreaView>
  );
}
