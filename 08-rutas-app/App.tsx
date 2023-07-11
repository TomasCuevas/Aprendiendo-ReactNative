import { View } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

//* INTERFACE *//
interface Props {}

const App: React.FC<Props> = () => {
  return (
    <View>
      <Icon name="airplane-outline" size={30} />
    </View>
  );
};

export default App;
