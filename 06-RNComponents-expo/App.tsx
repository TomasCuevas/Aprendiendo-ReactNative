import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

//* NAVIGATOR *//
import { Navigator } from "./src/navigators/Navigator/Navigator";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
