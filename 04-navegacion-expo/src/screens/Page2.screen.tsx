import { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

//* THEME *//
import { styles } from "../theme";

//* INTERFACE *//
interface Props extends StackScreenProps<any, any> {}

export const Page2Screen: React.FC<Props> = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: "Hola Mundo",
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page2 Screen</Text>
      <Button
        title="Ir página 3"
        onPress={() => navigator.navigate("Page3Screen")}
      />
    </View>
  );
};
