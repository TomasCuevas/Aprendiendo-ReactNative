import { View, Text, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* DATA *//
import { menuItems } from "../../data";

//* THEME
import { styles } from "../../theme";

//* INTERFACES *//
import { IMenuItem } from "../../interfaces";

export const HomeScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();

  const renderMenuItem = (item: IMenuItem) => {
    return (
      <View>
        <Text>
          {item.name} - {item.icon}
        </Text>
      </View>
    );
  };

  const renderListHeader = (title: string) => {
    return (
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };

  const itemSeperator = () => {
    return (
      <View
        style={{ opacity: 0.2, borderBottomWidth: 1, marginVertical: 3 }}
      ></View>
    );
  };

  return (
    <View style={{ flex: 1, marginTop: top + 20, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => renderMenuItem(item)}
        ListHeaderComponent={() => renderListHeader("Opciones de Menú")}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={itemSeperator}
      />
    </View>
  );
};
