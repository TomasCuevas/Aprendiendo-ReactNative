import { SafeAreaView, StatusBar } from "react-native";

//* SCREENS *//
import {
  HolaMundoScreen,
  CounterScreen,
  BoxObjectModelScreen,
  DimensionesScreen,
  PositionScreen,
  FlexScreen,
  TareaScreen,
} from "./src/screen";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      {/* <HolaMundoScreen /> */}
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
};

export default App;
