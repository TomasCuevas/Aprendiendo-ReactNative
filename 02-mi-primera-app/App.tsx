import { SafeAreaView } from 'react-native';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { FlexScreen } from './src/screens/FlexScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import { PositionScreen } from './src/screens/PositionScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HolaMundoScreen />
      <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      <FlexScreen />
    </SafeAreaView>
  );
};
