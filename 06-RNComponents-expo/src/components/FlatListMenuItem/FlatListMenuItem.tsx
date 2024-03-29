import { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/Ionicons";

//* CONTEXT *//
import { ThemeContext } from "../../context";

//* INTERFACES *//
import { IMenuItem } from "../../interfaces";

interface Props {
  item: IMenuItem;
}

export const FlatListMenuItem: React.FC<Props> = ({ item }) => {
  const navigation = useNavigation();
  const { colors } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(item.component as never)}
      activeOpacity={0.3}
    >
      <View style={styles.container}>
        <Icon name={item.icon as any} color={colors.primary} size={20} />
        <Text
          style={{
            ...styles.itemText,
            color: colors.text,
          }}
        >
          {item.name}
        </Text>
        <Icon
          name="chevron-forward-outline"
          color={colors.primary}
          size={20}
          style={styles.arrowIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  itemText: {
    fontSize: 16,
  },
  arrowIcon: {
    marginLeft: "auto",
  },
});
