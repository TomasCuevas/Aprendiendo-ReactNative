import { View, Text, FlatList } from "react-native";

//* DATA *//
import { menuItems } from "../../data";

//* INTERFACES *//
import { IMenuItem } from "../../interfaces";

export const HomeScreen: React.FC = () => {
  const renderMenuItem = (item: IMenuItem) => {
    return (
      <View>
        <Text>
          {item.name} - {item.icon}
        </Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => renderMenuItem(item)}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};
