import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

//* COMPONENT *//
import { Fab } from "../Fab/Fab";

//* HOOK *//
import { useLocation } from "../../hooks";

//* SCREEN *//
import { LoadingScreen } from "../../screens/LoadingScreen/LoadingScreen";

//* INTERFACE *//
interface Props {}

export const Map: React.FC<Props> = () => {
  const { currentPosition, hasLocation } = useLocation();

  if (!hasLocation) {
    return <LoadingScreen />;
  }

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation
        showsMyLocationButton={false}
        initialRegion={{
          latitude: currentPosition.latitude,
          longitude: currentPosition.longitude,
          latitudeDelta: 0.1022,
          longitudeDelta: 0.1022,
        }}
      ></MapView>

      <Fab
        iconName="star-outline"
        onPress={() => console.log("Hola FAB")}
        style={{ position: "absolute", bottom: 20, right: 20 }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
