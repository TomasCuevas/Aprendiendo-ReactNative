import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { ProductsStackParams } from "../../navigators/ProductsStack/ProductsStack";
import { Picker } from "@react-native-picker/picker";
import { useFormik } from "formik";

//* COMPONENTS *//
import { FormButton, FormInput } from "../../components";

//* INTERFACES *//
interface Props
  extends StackScreenProps<ProductsStackParams, "ProductScreen"> {}

export const ProductScreen: React.FC<Props> = ({ route, navigation }) => {
  const { id, name = "" } = route.params;

  const [selectedLanguage, setSelectedLanguage] = useState();
  const formik = useFormik({
    initialValues: { name: "" },
    onSubmit: (formValues) => {
      console.log(formValues);
    },
  });

  useEffect(() => {
    navigation.setOptions({ title: name ? name : "Nuevo producto" });
  }, []);

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
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>

        <FormButton.Primary
          text="Guardar"
          onPress={() => formik.handleSubmit()}
          style={{ borderColor: "#000", marginTop: 20, borderWidth: 1.2 }}
        />

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
