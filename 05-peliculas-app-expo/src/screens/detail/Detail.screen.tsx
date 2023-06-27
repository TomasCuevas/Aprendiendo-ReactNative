import { StackScreenProps } from "@react-navigation/stack";
import { View, Text } from "react-native";

//* STACK TYPE *//
import { RootStackParams } from "../../navigation/PrincipalStack.navigator";

//* SCREEN INTERFACE *//
interface Props extends StackScreenProps<RootStackParams, "Detail"> {}

export const DetailScreen: React.FC<Props> = ({ route }) => {
  const movie = route.params;

  return (
    <View>
      <Text>Detail Screen</Text>
    </View>
  );
};
