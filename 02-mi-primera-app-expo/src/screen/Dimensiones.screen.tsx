import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

// const { width, height } = Dimensions.get("window");

export const DimensionesScreen = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.cajaMorada,
            width: width * 0.5,
          }}
        />
        <View style={styles.cajaNaranja} />
      </View>
      <Text style={styles.title}>
        W: {width.toFixed(2)}, H: {height.toFixed(2)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 600,
    backgroundColor: "red",
  },
  cajaMorada: {
    backgroundColor: "#5856D6",
    width: "50%",
    height: 200,
  },
  cajaNaranja: {
    backgroundColor: "#F0A23B",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
  },
});
