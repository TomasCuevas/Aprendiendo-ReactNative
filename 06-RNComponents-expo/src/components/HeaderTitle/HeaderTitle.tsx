import { View, Text } from "react-native";

//* THEME *//
import { styles } from "../../theme";

interface Props {
  title: string;
  color?: string;
  marginTop?: number;
  marginBottom?: number;
  fontSize?: number;
}

export const HeaderTitle: React.FC<Props> = ({
  title,
  color = "black",
  marginTop = 0,
  marginBottom = 15,
  fontSize = 25,
}) => {
  return (
    <View style={{ marginBottom, marginTop }}>
      <Text style={{ ...styles.title, color, fontSize }}>{title}</Text>
    </View>
  );
};
