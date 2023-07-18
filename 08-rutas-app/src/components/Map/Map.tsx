import { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Polyline } from "react-native-maps";

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
    routeLines,
    hasLocation,
  } = useLocation();

  const [showPolyline, setShowPolyline] = useState(true);

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
      >
        {showPolyline && (
          <Polyline
            coordinates={routeLines}
            strokeColor="#f00"
            strokeWidth={3}
          />
        )}
      </MapView>

      <Fab
        iconName="compass-outline"
        onPress={() => centerPosition()}
        style={{ position: "absolute", bottom: 20, right: 20 }}
        iconStyle={{ marginLeft: 1 }}
      />

      <Fab
        iconName="brush-outline"
        onPress={() => setShowPolyline((prev) => !prev)}
        style={{ position: "absolute", bottom: 80, right: 20 }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
