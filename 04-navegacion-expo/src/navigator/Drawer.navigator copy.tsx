import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Icon from "@expo/vector-icons/Ionicons";

//* SCREENS *//
import { SettingsScreen } from "../screens";

//* NAVIGATOR *//
import { BottomTabs } from "./BottomTabs.navigator";

//* DRAWER INSTANCE *//
const Drawer = createDrawerNavigator();

export const DrawerNavigator: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={{
        drawerPosition: "left",
        headerShown: false,
        drawerType: width >= 768 ? "permanent" : "front",
      }}
    >
      <Drawer.Screen
        name="BottomTabs"
        options={{ title: "Home" }}
        component={BottomTabs}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{ title: "Settings" }}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

const DrawerContent: React.FC<DrawerContentComponentProps> = ({
  navigation,
}) => {
  return (
    <DrawerContentScrollView>
      {/* AVATAR */}
      <View style={styles.avatar_container}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
          }}
          style={styles.avatar}
        />
      </View>

      {/* MENU OPTIONS */}
      <View style={styles.menu__container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("BottomTabs")}
          style={{ ...styles.menu__button, flexDirection: "row", gap: 10 }}
        >
          <Icon name="airplane-outline" size={25} color="black" />
          <Text style={styles.menu__text}>Navegación</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SettingsScreen")}
          style={{ ...styles.menu__button, flexDirection: "row", gap: 10 }}
        >
          <Icon name="settings-outline" size={25} color="black" />
          <Text style={styles.menu__text}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  avatar_container: {
    alignItems: "center",
    marginTop: 10,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 100,
  },
  menu__container: {
    marginVertical: 50,
    marginHorizontal: 20,
    gap: 20,
  },
  menu__button: {
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderRightWidth: 1,
    borderRightColor: "#ccc",
    borderBottomRightRadius: 20,
  },
  menu__text: {
    fontSize: 20,
  },
});
