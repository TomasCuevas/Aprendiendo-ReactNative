import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { ProductsStackParams } from "../../navigators/ProductsStack/ProductsStack";

//* HOOK *//
import { useProducts } from "../../hooks";

//* INTERFACES *//
interface Props
  extends StackScreenProps<ProductsStackParams, "ProductsScreen"> {}

export const ProductsScreen: React.FC<Props> = ({ navigation }) => {
  const { products } = useProducts();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.4}
          style={{ marginRight: 15 }}
          onPress={() => navigation.navigate("ProductScreen", {})}
        >
          <Text>Agregar</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(product) => product._id}
        renderItem={({ item: product }) => (
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => navigation.navigate("ProductScreen", { product })}
          >
            <Text style={styles.product__name}>{product.name}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.item__separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 15,
  },
  product__name: {
    fontSize: 20,
  },
  item__separator: {
    borderBottomWidth: 0.5,
    marginVertical: 5,
    borderBottomColor: "#000A",
  },
});
