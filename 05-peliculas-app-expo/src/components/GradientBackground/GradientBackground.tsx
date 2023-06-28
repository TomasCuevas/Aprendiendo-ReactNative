import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Text } from "react-native";

//* INTERFACE *//
interface Props {
  children: React.ReactNode;
}

export const GradientBackground: React.FC<Props> = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#084f6a", "#75cedb", "white"]}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.3, y: 0.1 }}
        end={{ x: 0.65, y: 0.65 }}
      />

      {children}
    </View>
  );
};

const styles = StyleSheet.create({});
