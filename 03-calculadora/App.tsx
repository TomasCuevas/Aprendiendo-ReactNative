import { SafeAreaView, StatusBar } from 'react-native';

//* screens *//
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';

//* styles *//
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App;
