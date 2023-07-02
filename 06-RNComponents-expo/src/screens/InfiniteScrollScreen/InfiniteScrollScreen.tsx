import { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* COMPONENT *//
import { HeaderTitle } from "../../components";

export const InfiniteScrollScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    let newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    setNumbers((prev) => [...prev, ...newArray]);
  };

  const renderItem = (item: number) => (
    <Text style={styles.text__item}>{item}</Text>
  );

  return (
    <View style={{ marginTop: top + 20 }}>
      <FlatList
        data={numbers}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => String(item)}
        ListHeaderComponent={
          <HeaderTitle title="Infinite Scroll" color="#5656D8" />
        }
        onEndReached={loadMore}
        onEndReachedThreshold={0.2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text__item: {
    backgroundColor: "green",
    height: 150,
  },
});
