import { createStackNavigator } from "@react-navigation/stack";

//* SCREENS *//
import { ProductScreen, ProductsScreen } from "../../screens";

//* STACK TYPES *//
export type ProductsStackParams = {
  ProductsScreen: undefined;
  ProductScreen: { id?: string; name?: string };
};

//* STACK INSTANCE *//
const Stack = createStackNavigator<ProductsStackParams>();

export const ProductsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: "#FFF" },
        headerStyle: {
          elevation: 0,
          shadowColor: "transparent",
        },
      }}
      initialRouteName="ProductsScreen"
    >
      <Stack.Screen
        name="ProductsScreen"
        options={{ title: "Productos" }}
        component={ProductsScreen}
      />
      <Stack.Screen
        name="ProductScreen"
        options={{ title: "Producto" }}
        component={ProductScreen}
      />
    </Stack.Navigator>
  );
};