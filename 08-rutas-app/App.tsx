import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

//* NAVIGATOR *//
import { RootStack } from "./src/navigators/RootStack";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
