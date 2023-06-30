import { View, Text } from "react-native";

//* THEME *//
import { styles } from "../../theme";

interface Props {
  title: string;
}

export const HeaderTitle: React.FC<Props> = ({ title }) => {
  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
