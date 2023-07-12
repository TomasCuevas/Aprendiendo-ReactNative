import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

//* COMPONENT *//
import { BlackButton } from "../../components";

//* CONTEXT *//
import { PermissionsContext } from "../../contexts";

export const PermissionsScreen: React.FC = () => {
  const { locationStatus, requestLocationPermission } =
    useContext(PermissionsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Es necesario el uso del GPS para usar esta aplicación
      </Text>
      <BlackButton text="Permiso" onPress={requestLocationPermission} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 17,
    width: 250,
    textAlign: "center",
  },
});
