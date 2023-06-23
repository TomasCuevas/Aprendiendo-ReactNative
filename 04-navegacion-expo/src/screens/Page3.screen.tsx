import { View, Text, Button } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

//* THEME *//
import { styles } from "../theme";

//* INTERFACE *//
interface Props extends StackScreenProps<any, any> {}

export const Page3Screen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page3 Screen</Text>
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir a la página 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
