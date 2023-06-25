import { useContext } from "react";
import { View, Text, Button } from "react-native";

//* THEME *//
import { styles } from "../theme";

//* CONTEXT *//
import { AuthContext } from "../context/AuthContext";

export const ContactsScreen = () => {
  const { isLoggedIn, signIn } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contacts Screen</Text>

      {!isLoggedIn && <Button title="Sign In" onPress={signIn} />}
    </View>
  );
};
