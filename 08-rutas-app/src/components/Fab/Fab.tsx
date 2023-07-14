import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";

//* ICONS *//
import Icon from "@expo/vector-icons/Ionicons";

//* INTERFACE *//
interface Props {
  iconName: string;
  style?: StyleProp<ViewStyle>;
  onPress(): void;
}

export const Fab: React.FC<Props> = ({ iconName, onPress, style = {} }) => {
  return (
    <View style={{ ...(style as any) }}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={styles.black__button}
      >
        <Icon name={iconName as any} color="#FFF" size={35} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  black__button: {
    zIndex: 999,
    height: 50,
    width: 50,
    backgroundColor: "#000",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
