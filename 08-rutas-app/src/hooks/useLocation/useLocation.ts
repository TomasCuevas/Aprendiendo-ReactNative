import { useEffect, useState } from "react";
import * as Location from "expo-location";

//* INTERFACES *//
import { ILocation } from "../../interface";

export const useLocation = () => {
  const [hasLocation, setHasLocation] = useState(false);
  const [currentPosition, setCurrentPosition] = useState<ILocation>({
    latitude: 0,
    longitude: 0,
  });

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

          if (!hasLocation) setHasLocation(true);
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return {
    // PROPERTIES
    currentPosition,
    hasLocation,
  };
};
