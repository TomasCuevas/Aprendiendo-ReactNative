import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

//* INTERFACE *//
interface Props {}

export const MapScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
