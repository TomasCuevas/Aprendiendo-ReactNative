import { View, Text, StyleSheet } from "react-native";

//* INTERFACE *//
interface Props {}

export const ProtectedScreen: React.FC<Props> = () => {
  return (
    <View>
      <Text>ProtectedScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
