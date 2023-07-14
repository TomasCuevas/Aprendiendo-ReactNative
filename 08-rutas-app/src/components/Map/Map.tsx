import { useRef } from "react";
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
  const mapViewRef = useRef<MapView>();

  //! CENTER POSITION ON MAP
  const centerPosition = () => {
    mapViewRef.current?.animateCamera({
      center: {
        latitude: currentPosition.latitude,
        longitude: currentPosition.longitude,
      },
      zoom: 13,
    });
  };

  if (!hasLocation) {
    return <LoadingScreen />;
  }

  return (
    <>
      <MapView
        ref={(el) => (mapViewRef.current = el!)}
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
        iconName="compass-outline"
        onPress={() => centerPosition()}
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
