import { NavigationContainer } from "@react-navigation/native";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "react-native-gesture-handler";

//* NAVIGATOR *//
import { StackNavigator } from "./src/navigator/StackNavigator";

//* QUERY CLIENT INSTANCE *//
export const queryClient = new QueryClient();

export const App = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <StackNavigator />
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
