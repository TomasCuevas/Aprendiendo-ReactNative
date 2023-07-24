import { useEffect, useState } from "react";
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { ProductsStackParams } from "../../navigators/ProductsStack/ProductsStack";

//* HOOK *//
import { useProducts } from "../../hooks";

//* INTERFACES *//
interface Props
  extends StackScreenProps<ProductsStackParams, "ProductsScreen"> {}

export const ProductsScreen: React.FC<Props> = ({ navigation }) => {
  const { products, productsQuery } = useProducts();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);
    productsQuery.refetch();

    setIsRefreshing(false);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.4}
          style={{
            marginRight: 15,
            borderWidth: 0.5,
            borderRadius: 5,
            paddingHorizontal: 10,
            paddingVertical: 2,
          }}
          onPress={() => navigation.navigate("CreateProductScreen")}
        >
          <Text>Agregar</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            progressViewOffset={100}
            progressBackgroundColor="#FFF"
            colors={["#5858D6"]}
          />
        }
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
