import { View, Text } from "react-native";

//* THEME *//
import { styles } from "../../theme";

interface Props {
  title: string;
  color?: string;
  marginTop?: number;
}

export const HeaderTitle: React.FC<Props> = ({
  title,
  color = "black",
  marginTop = 0,
}) => {
  return (
    <View style={{ marginBottom: 15, marginTop: marginTop }}>
      <Text style={{ ...styles.title, color }}>{title}</Text>
    </View>
  );
};
