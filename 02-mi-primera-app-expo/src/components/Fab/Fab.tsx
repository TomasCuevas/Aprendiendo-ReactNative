import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";

//* INTERFACE *//
interface Props {
  title: string;
  position: "left" | "right";
  onPress(): void;
}

export const Fab: React.FC<Props> = ({ title, position, onPress }) => {
  return (
    <View
      style={[
        styles.fabLocation,
        position === "left" ? styles.left : styles.right,
      ]}
    >
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("#3836A6", false, 30)}
        onPress={onPress}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  fabLocation: {
    position: "absolute",
    bottom: 25,
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
  fab: {
    backgroundColor: "#5856D6",
    width: 60,
    height: 60,
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

    elevation: 6,
  },
  fabText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
