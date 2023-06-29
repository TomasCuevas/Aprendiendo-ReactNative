import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

//* INTERFACES *//
import { IMenuItem } from "../../interfaces";

interface Props {
  item: IMenuItem;
}

export const FlatListMenuItem: React.FC<Props> = ({ item }) => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={styles.container}>
        <Icon name={item.icon as any} color="gray" size={20} />
        <Text style={styles.itemText}>{item.name}</Text>
        <Icon
          name="chevron-forward-outline"
          color="gray"
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
