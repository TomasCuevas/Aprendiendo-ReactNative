import {
  StyleProp,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

//* INTERFACE *//
interface Props {
  text: string;
  style?: StyleProp<ViewStyle>;
  onPress(): void;
}

export const BlackButton: React.FC<Props> = ({ text, onPress, style = {} }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{ ...(style as any), ...styles.black__button }}
    >
      <Text style={styles.button__text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  black__button: {
    height: 46,
    width: 200,
    backgroundColor: "#000",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    elevation: 7,
  },
  button__text: {
    color: "#FFF",
    fontSize: 18,
  },
});
