import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

//* INTERFACE *//
interface Props {
  text: string;
  color?: "default" | "gray" | "orange";
  width?: boolean;
  onPress?(): void;
}

export const ButtonCalc: React.FC<Props> = ({
  text,
  color = "default",
  width = false,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: styles[color].backgroundColor,
          width: width ? 180 : 80,
        }}
      >
        <Text style={{ ...styles.botonTexto, color: styles[color].color }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  default: {
    backgroundColor: "#2D2D2D",
    color: "white",
  },
  gray: {
    backgroundColor: "#A8ABAB",
    color: "black",
  },
  orange: {
    backgroundColor: "#FF9427",
    color: "white",
  },
  botonTexto: {
    textAlign: "center",
    padding: 10,
    fontSize: 35,
    fontWeight: "500",
  },
});
