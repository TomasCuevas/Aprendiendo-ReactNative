import { View, Text, StyleSheet, ScrollView } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { ProductsStackParams } from "../../navigators/ProductsStack/ProductsStack";
import { Picker } from "@react-native-picker/picker";
import { useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";

//* COMPONENTS *//
import { FormButton, FormInput } from "../../components";

//* HOOKS *//
import { useCategories } from "../../hooks";

//* SERVICES *//
import { createProductService } from "../../services";

//* INTERFACES *//
interface Props
  extends StackScreenProps<ProductsStackParams, "CreateProductScreen"> {}

export const CreateProductScreen: React.FC<Props> = ({ navigation }) => {
  const queryClient = useQueryClient();
  const { categories } = useCategories();

  const formik = useFormik({
    initialValues: { name: "", category: "" },
    onSubmit: async (formValues) => {
      try {
        const response = await createProductService({
          category: formValues.category || categories[0]._id,
          name: formValues.name,
        });

        queryClient.refetchQueries(["/allProducts"]);
        navigation.replace("ProductScreen", { product: response });
      } catch (error) {}
    },
  });

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
