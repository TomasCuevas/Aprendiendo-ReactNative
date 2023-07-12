import { createContext } from "react";
import {
  useForegroundPermissions,
  LocationPermissionResponse,
} from "expo-location";

//* CONTEXT *//
//* CONTEXT *//
interface PermissionsContextProps {
  locationStatus: LocationPermissionResponse | null;
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
  const [status, requestPermission] = useForegroundPermissions();

  const requestLocationPermission = async () => {
    await requestPermission();
  };

  return (
    <PermissionsContext.Provider
      value={{
        locationStatus: status,
        requestLocationPermission,
      }}
    >
      {children}
    </PermissionsContext.Provider>
  );
};
