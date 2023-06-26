import { useNavigation } from "@react-navigation/core";
import { View, Text, Button } from "react-native";

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Ir detalle"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
};
