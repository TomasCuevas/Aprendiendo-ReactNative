import { View, Text } from "react-native";

export const HolaMundoScreen: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 35, textAlign: "center" }}>Hola Mundo!</Text>
    </View>
  );
};
