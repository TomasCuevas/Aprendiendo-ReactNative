import { useContext } from "react";
import { View, Text, Button } from "react-native";

//* THEME *//
import { styles } from "../theme";

//* CONTEXT *//
import { AuthContext } from "../context/AuthContext";

export const AlbumsScreen = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Albums Screen</Text>
      {isLoggedIn && <Button title="Logout" onPress={logout} />}
    </View>
  );
};
