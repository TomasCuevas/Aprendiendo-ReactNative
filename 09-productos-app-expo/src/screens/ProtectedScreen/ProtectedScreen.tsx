import { View, Text, StyleSheet, Button } from "react-native";
import { useStore } from "zustand";

//* STORE *//
import { useAuthStore } from "../../store";

//* INTERFACE *//
interface Props {}

export const ProtectedScreen: React.FC<Props> = () => {
  const { user, token, logout } = useStore(useAuthStore);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProtectedScreen</Text>
      <Button title="Cerrar sesión" color="#5858D6" onPress={logout} />

      <Text>{JSON.stringify(user, null, 4)}</Text>
      <Text>{token}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});
