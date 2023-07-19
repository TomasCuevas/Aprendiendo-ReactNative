import { NavigationContainer } from "@react-navigation/native";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "react-native-gesture-handler";

//* NAVIGATOR *//
import { RootTabs } from "./src/navigator/RootTabs";

//* QUERY CLIENT INSTANCE *//
export const queryClient = new QueryClient();

export const App = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <RootTabs />
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
