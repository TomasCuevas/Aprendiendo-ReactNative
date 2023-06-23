import { useEffect } from "react";
import { Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

//* THEME *//
import { styles } from "../theme";

//* INTERFACE *//
import { RootStackParams } from "../navigator/Stack.navigator";

interface Props extends StackScreenProps<RootStackParams, "PersonScreen"> {}

export const PersonScreen: React.FC<Props> = ({ route, navigation }) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 4)}</Text>
    </View>
  );
};
