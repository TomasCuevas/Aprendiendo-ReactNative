import { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

//* CONTEXT *//
import { PermissionsContext } from "../../contexts";

export const PermissionsScreen: React.FC = () => {
  const { locationStatus, requestLocationPermission } =
    useContext(PermissionsContext);

  return (
    <View style={styles.container}>
      <Text>Permissions Screen</Text>
      <Button title="Permiso" onPress={requestLocationPermission} />

      <Text>{JSON.stringify({ status: locationStatus?.status }, null, 4)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
