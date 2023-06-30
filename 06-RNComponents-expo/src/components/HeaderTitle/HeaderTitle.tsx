import { View, Text } from "react-native";

//* THEME *//
import { styles } from "../../theme";

interface Props {
  title: string;
  color?: string;
}

export const HeaderTitle: React.FC<Props> = ({ title, color = "black" }) => {
  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={{ ...styles.title, color }}>{title}</Text>
    </View>
  );
};
