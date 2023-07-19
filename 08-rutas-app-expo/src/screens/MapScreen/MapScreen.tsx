import { View, StyleSheet } from "react-native";

//* COMPONENTS *//
import { Map } from "../../components";

export const MapScreen: React.FC = () => {
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
