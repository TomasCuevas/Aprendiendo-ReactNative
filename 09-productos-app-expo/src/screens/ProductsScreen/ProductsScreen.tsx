import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

//* HOOK *//
import { useProducts } from "../../hooks";

//* INTERFACE *//
interface Props {}

export const ProductsScreen: React.FC<Props> = () => {
  const { products } = useProducts();

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(product) => product._id}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.4}>
            <Text style={styles.product__name}>{item.name}</Text>
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
