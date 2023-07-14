import { useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

//* COMPONENT *//
import { Fab } from "../Fab/Fab";

//* HOOK *//
import { useLocation } from "../../hooks";

//* SCREEN *//
import { LoadingScreen } from "../../screens/LoadingScreen/LoadingScreen";

export const Map: React.FC = () => {
  const {
    initialPosition,
    currentPosition,
    getCurrentPosition,
    stopCurrentPosition,
    hasLocation,
  } = useLocation();

  const mapViewRef = useRef<MapView>();
  const following = useRef<boolean>(true);

  useEffect(() => {
    getCurrentPosition();
    return () => stopCurrentPosition();
  }, []);

  useEffect(() => {
    if (!following.current) return;
    centerPosition();
  }, [currentPosition]);

  //! CENTER POSITION ON MAP
  const centerPosition = () => {
    following.current = true;

    mapViewRef.current?.animateCamera({
      center: {
        latitude: currentPosition.latitude,
        longitude: currentPosition.longitude,
      },
      zoom: 15,
    });
  };

  if (!hasLocation) return <LoadingScreen />;

  return (
    <>
      <MapView
        ref={(el) => (mapViewRef.current = el!)}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation
        showsMyLocationButton={false}
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.1022,
          longitudeDelta: 0.1022,
        }}
        onTouchStart={() => (following.current = false)}
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
