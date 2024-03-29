import { View, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* DATA *//
import { menuItems } from "../../data";

//* COMPONENTS *//
import { FlatListMenuItem, HeaderTitle, ItemSeparator } from "../../components";

//* THEME
import { styles } from "../../theme";

export const HomeScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, marginTop: top + 20, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListMenuItem item={item} />}
        ListHeaderComponent={() => (
          <HeaderTitle title="Opciones de Menú" color="#5858d6" />
        )}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};
