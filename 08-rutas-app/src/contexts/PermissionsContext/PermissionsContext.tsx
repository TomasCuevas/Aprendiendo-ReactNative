import { createContext, useEffect, useState } from "react";
import { AppState } from "react-native";
import * as Location from "expo-location";

//* CONTEXT *//
//* CONTEXT *//
interface PermissionsContextProps {
  locationStatus: Location.LocationPermissionResponse | undefined;
  requestLocationPermission(): Promise<void>;
}

export const PermissionsContext = createContext({} as PermissionsContextProps);

//* PROVIDER *//
//* PROVIDER *//
interface PermissionsProviderProps {
  children: React.ReactNode;
}

export const PermissionsProvider: React.FC<PermissionsProviderProps> = ({
  children,
}) => {
  const [locationStatus, setLocationStatus] =
    useState<Location.LocationPermissionResponse>();

  useEffect(() => {
    AppState.addEventListener("change", async (state) => {
      if (state === "active") checkLocationPermission();
    });
  }, []);

  useEffect(() => {
    checkLocationPermission();
  }, []);

  //! CHECK LOCATION PERMISSION
  const checkLocationPermission = async () => {
    const request = await Location.getForegroundPermissionsAsync();
    setLocationStatus(request);
  };

  //! REQUEST LOCATION PERMISSION
  const requestLocationPermission = async () => {
    const request = await Location.requestForegroundPermissionsAsync();
    setLocationStatus(request);
  };

  return (
    <PermissionsContext.Provider
      value={{
        locationStatus,
        requestLocationPermission,
      }}
    >
      {children}
    </PermissionsContext.Provider>
  );
};
