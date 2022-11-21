import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

//* navigator *//
import { StackNavigator } from './src/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
