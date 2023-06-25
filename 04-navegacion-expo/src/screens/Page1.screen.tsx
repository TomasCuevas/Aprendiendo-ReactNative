import { View, Text, Button, TouchableOpacity } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import Icon from "@expo/vector-icons/Ionicons";

//* THEME *//
import { styles } from "../theme";

//* INTERFACE *//
import { RootStackParams } from "../navigator/Stack.navigator";

interface Props extends DrawerScreenProps<RootStackParams, "Page1Screen"> {}

export const Page1Screen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1 Screen</Text>
      <Button
        title="Ir página 2"
        onPress={() => navigation.navigate("Page2Screen")}
      />

      <Text style={{ marginVertical: 20, fontSize: 20 }}>
        Navegar con argumentos
      </Text>

      <View style={{ flexDirection: "row", gap: 10 }}>
        <TouchableOpacity
          style={{ ...styles.bigButton, backgroundColor: "#5856D6", gap: 5 }}
          onPress={() =>
            navigation.navigate("PersonScreen", { id: 1, name: "Pedro" })
          }
        >
          <Icon name="man-outline" color="white" size={30} />
          <Text style={styles.bigButtonText}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.bigButton, backgroundColor: "#FF9427", gap: 5 }}
          onPress={() =>
            navigation.navigate("PersonScreen", { id: 2, name: "María" })
          }
        >
          <Icon name="woman-outline" color="white" size={30} />
          <Text style={styles.bigButtonText}>María</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
