import { View, Text, StyleSheet } from "react-native";

//* COMPONENTS *//
import { Map } from "../../components";

//* INTERFACE *//
interface Props {}

export const MapScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Map />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
