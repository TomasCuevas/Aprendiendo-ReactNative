import { useContext } from "react";
import { View, Text } from "react-native";

//* THEME *//
import { styles } from "../../theme";

//* CONTEXT *//
import { ThemeContext } from "../../context";

//* INTERFACE *//
interface Props {
  title: string;
  color?: string;
  marginTop?: number;
  marginBottom?: number;
  fontSize?: number;
}

export const HeaderTitle: React.FC<Props> = ({
  title,
  color,
  marginTop = 0,
  marginBottom = 15,
  fontSize = 25,
}) => {
  const { colors } = useContext(ThemeContext);

  return (
    <View style={{ marginBottom, marginTop }}>
      <Text style={{ ...styles.title, color: color || colors.text, fontSize }}>
        {title}
      </Text>
    </View>
  );
};
