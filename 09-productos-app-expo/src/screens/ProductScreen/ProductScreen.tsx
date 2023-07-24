import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Image,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { ProductsStackParams } from "../../navigators/ProductsStack/ProductsStack";
import { Picker } from "@react-native-picker/picker";
import { useFormik } from "formik";

//* COMPONENTS *//
import { FormButton, FormInput } from "../../components";

//* HOOKS *//
import { useCategories, useProduct } from "../../hooks";

//* SERVICES *//
import { createProductService, updateProductService } from "../../services";

//* SCREENS *//
import { LoadingScreen } from "../LoadingScreen/LoadingScreen";

//* QUERY CLIENT *//
import { queryClient } from "../../../App";

//* INTERFACES *//
interface Props
  extends StackScreenProps<ProductsStackParams, "ProductScreen"> {}

export const ProductScreen: React.FC<Props> = ({ route, navigation }) => {
  const { product } = route.params;

  const { product: productFromApi, productQuery } = useProduct(
    product?._id || ""
  );
  const { categories } = useCategories();

  const formik = useFormik({
    initialValues: { _id: "", name: "", category: "", image: "" },
    onSubmit: async (formValues) => {
      if (formValues._id.length > 0) {
        try {
          const response = await updateProductService(formValues);
          queryClient.refetchQueries([`/allProducts`]);
          navigation.replace("ProductScreen", { product: response });
        } catch (error) {}
      } else {
        try {
          const response = await createProductService({
            category: formValues.category || categories[0]._id,
            name: formValues.name,
          });

          queryClient.refetchQueries(["/allProducts"]);
          navigation.replace("ProductScreen", { product: response });
        } catch (error) {}
      }
    },
  });

  useEffect(() => {
    navigation.setOptions({
      title: product?.name ? product.name : "Nuevo producto",
    });
  }, []);

  useEffect(() => {
    if (productFromApi) {
      formik.setFieldValue("_id", productFromApi._id);
      formik.setFieldValue("name", productFromApi.name);
      formik.setFieldValue("category", productFromApi.category._id);
      formik.setFieldValue("image", productFromApi.image);
    }
  }, [productFromApi]);

  if (productQuery.isLoading && productQuery.isFetching)
    return <LoadingScreen />;

  return (
    <View style={styles.container}>
      <ScrollView>
        <FormInput.Dark
          label={`Nombre del producto: ${formik.values.name}`}
          value={formik.values.name}
          onChangeText={formik.handleChange("name")}
          placelholder="Producto"
        />

        <View style={{ borderBottomWidth: 1, marginTop: 10 }}>
          <Text style={{ fontWeight: "700", fontSize: 18, marginBottom: -10 }}>
            Categoria:
          </Text>
          <Picker
            selectedValue={formik.values.category}
            onValueChange={(itemValue) => {
              formik.setFieldValue("category", itemValue);
            }}
          >
            {categories.map((category) => (
              <Picker.Item
                label={category.name}
                value={category._id}
                key={category._id}
              />
            ))}
          </Picker>
        </View>

        <FormButton.Primary
          text="Guardar"
          onPress={() => formik.handleSubmit()}
          style={{ borderColor: "#000", marginTop: 20, borderWidth: 1.2 }}
        />

        {formik.values._id.length > 0 && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 10,
              marginTop: 10,
            }}
          >
            <Button color="#5858D6" title="Cámara" />
            <Button color="#5858D6" title="Galería" />
          </View>
        )}

        {formik.values.image && (
          <Image
            source={{ uri: formik.values.image }}
            style={{
              width: "100%",
              height: 300,
              marginVertical: 20,
              borderRadius: 15,
              objectFit: "cover",
            }}
          />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 15,
  },
});
