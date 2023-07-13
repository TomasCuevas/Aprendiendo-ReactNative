import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Location from "expo-location";

//* COMPONENTS *//
import { Map } from "../../components";

//* INTERFACE *//
interface Props {}

export const MapScreen: React.FC<Props> = () => {
  const getCurrentPosition = async (interval: number = 1000) => {
    try {
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
        timeInterval: interval,
      });
      console.log(location);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setInterval(() => {
      getCurrentPosition();
    }, 10000);
  }, []);

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
