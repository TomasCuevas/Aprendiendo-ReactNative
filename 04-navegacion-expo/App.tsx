import { NavigationContainer } from "@react-navigation/native";

//* STACK NAVIGATOR *//
import { StackNavigator } from "./src/navigator/Stack.navigator";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
