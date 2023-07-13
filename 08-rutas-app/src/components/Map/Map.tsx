import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

//* HOOK *//
import { useLocation } from "../../hooks";

//* SCREEN *//
import { LoadingScreen } from "../../screens";

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
        initialRegion={{
          latitude: currentPosition.latitude,
          longitude: currentPosition.longitude,
          latitudeDelta: 0.1922,
          longitudeDelta: 0.1922,
        }}
      ></MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
