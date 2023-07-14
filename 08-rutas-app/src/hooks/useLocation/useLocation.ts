import { useEffect, useRef, useState } from "react";
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

  const watchId = useRef<Location.LocationSubscription>();

  useEffect(() => {
    getInitialPosition();
  }, []);

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
      const position = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, distanceInterval: 2 },
        (location) => {
          setCurrentPosition({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
        }
      );

      watchId.current = position;
    } catch (error) {
      console.error(error);
    }
  };

  //! STOP WATCH CURRENT POSITION
  const stopCurrentPosition = () => {
    if (watchId.current) watchId.current.remove();
  };

  return {
    // PROPERTIES
    initialPosition,
    currentPosition,
    hasLocation,

    // METHODS
    getCurrentPosition,
    stopCurrentPosition,
  };
};
