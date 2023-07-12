import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

//* NAVIGATOR *//
import { RootStack } from "./src/navigators/RootStack";

//* CONTEXTS *//
import { PermissionsProvider } from "./src/contexts";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AppContexts>
        <RootStack />
      </AppContexts>
    </NavigationContainer>
  );
};

const AppContexts: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <PermissionsProvider>{children}</PermissionsProvider>
);

export default App;
