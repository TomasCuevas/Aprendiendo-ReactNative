import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { ProductsStackParams } from "../../navigators/ProductsStack/ProductsStack";

//* INTERFACES *//
interface Props
  extends StackScreenProps<ProductsStackParams, "ProductScreen"> {}

export const ProductScreen: React.FC<Props> = ({ route, navigation }) => {
  const { id, name = "" } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: name ? name : "Nuevo producto" });
  }, []);

  return (
    <View>
      <Text>
        {id} {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
