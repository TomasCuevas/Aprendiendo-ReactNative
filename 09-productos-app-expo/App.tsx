import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-native-gesture-handler";

//* NAVIGATOR *//
import { RootStack } from "./src/navigators/RootStack/RootStack";

//* QUERY CLIENT *//
export const queryClient = new QueryClient();

export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <RootStack />
      </QueryClientProvider>
    </NavigationContainer>
  );
}
