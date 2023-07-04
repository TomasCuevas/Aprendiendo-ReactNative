import "react-native-gesture-handler";

//* NAVIGATOR *//
import { Navigator } from "./src/navigators/Navigator/Navigator";

//* PROVIDERS *//
import { ThemeProvider } from "./src/context";

const App: React.FC = () => {
  return (
    <AppContext>
      <Navigator />
    </AppContext>
  );
};

const AppContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
