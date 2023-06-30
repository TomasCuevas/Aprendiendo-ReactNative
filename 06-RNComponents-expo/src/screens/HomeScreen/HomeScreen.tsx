import { View, Text, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* DATA *//
import { menuItems } from "../../data";

//* COMPONENTS *//
import { FlatListMenuItem, HeaderTitle } from "../../components";

//* THEME
import { styles } from "../../theme";

export const HomeScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();

  const itemSeperator = () => {
    return (
      <View style={{ opacity: 0.2, borderBottomWidth: 1, marginVertical: 3 }} />
    );
  };

  return (
    <View style={{ flex: 1, marginTop: top + 20, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListMenuItem item={item} />}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de Menú" />}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={itemSeperator}
      />
    </View>
  );
};
