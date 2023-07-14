import { useEffect, useState } from "react";
import * as Location from "expo-location";

//* INTERFACES *//
import { ILocation } from "../../interface";

export const useLocation = () => {
  const [hasLocation, setHasLocation] = useState(false);
  const [initialPosition, setInitialPosition] = useState<ILocation>({
    latitude: 0,
    longitude: 0,
  });
  const [currentPosition, setCurrentPosition] = useState<ILocation>({
    latitude: 0,
    longitude: 0,
  });

  //! GET INITIAL USER POSITION
  const getInitialPosition = async () => {
    const position = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
    });
    setInitialPosition({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });

    if (!hasLocation) setHasLocation(true);
  };

  //! GET CURRENT USER POSITION
  const getCurrentPosition = async () => {
    try {
      Location.watchPositionAsync(
        { accuracy: Location.Accuracy.Balanced, distanceInterval: 2 },
        (location) => {
          setCurrentPosition({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  useEffect(() => {
    getInitialPosition();
  }, []);

  return {
    // PROPERTIES
    initialPosition,
    currentPosition,
    hasLocation,
  };
};
