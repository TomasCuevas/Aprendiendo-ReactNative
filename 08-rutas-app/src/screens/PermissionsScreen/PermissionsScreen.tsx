import { View, Text, StyleSheet, Button } from "react-native";
import * as Location from "expo-location";

//* INTERFACE *//
interface Props {}

export const PermissionsScreen: React.FC<Props> = () => {
  const [status, requestPermission] = Location.useForegroundPermissions();

  const requestLocationPermission = async () => {
    const request = await requestPermission();
    console.log({ status: request.status });
  };

  return (
    <View style={styles.container}>
      <Text>Permissions Screen</Text>
      <Button title="Permiso" onPress={requestLocationPermission} />
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
