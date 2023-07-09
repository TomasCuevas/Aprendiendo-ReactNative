import { NavigationContainer } from "@react-navigation/native";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "react-native-gesture-handler";

//* NAVIGATOR *//
import { RootStackNavigator } from "./src/navigator/RootStackNavigator";

//* QUERY CLIENT INSTANCE *//
export const queryClient = new QueryClient();

export const App = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <RootStackNavigator />
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
