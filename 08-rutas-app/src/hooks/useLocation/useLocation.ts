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

  const [routeLines, setRouteLines] = useState<ILocation[]>([]);

  const watchId = useRef<Location.LocationSubscription>();

  useEffect(() => {
    getInitialPosition();
  }, []);

  //! GET INITIAL USER POSITION
  const getInitialPosition = async () => {
    const { coords } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
    });

    const position = {
      latitude: coords.latitude,
      longitude: coords.longitude,
    };

    setInitialPosition(position);
    setRouteLines((routes) => [...routes, position]);

    if (!hasLocation) setHasLocation(true);
  };

  //! GET CURRENT USER POSITION
  const getCurrentPosition = async () => {
    try {
      const position = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, distanceInterval: 2 },
        ({ coords }) => {
          const position = {
            latitude: coords.latitude,
            longitude: coords.longitude,
          };

          setCurrentPosition(position);
          setRouteLines((routes) => [...routes, position]);
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
    routeLines,
    hasLocation,

    // METHODS
    getCurrentPosition,
    stopCurrentPosition,
  };
};
