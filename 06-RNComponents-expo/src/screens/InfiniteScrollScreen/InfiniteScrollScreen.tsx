import { useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* COMPONENTS *//
import { FadeInImage, HeaderTitle } from "../../components";

export const InfiniteScrollScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    let newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    setTimeout(() => {
      setNumbers((prev) => [...prev, ...newArray]);
    }, 1000);
  };

  const renderItem = (id: number) => (
    <FadeInImage
      uri={`https://picsum.photos/id/${id}/1024/1024`}
      style={{
        width: "100%",
        height: 400,
      }}
    />
  );

  return (
    <View style={{ marginTop: top + 20 }}>
      <FlatList
        data={numbers}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => String(item)}
        ListHeaderComponent={
          <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title="Infinite Scroll" color="#5656D8" />
          </View>
        }
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              backgroundColor: "transparent",
            }}
          >
            <ActivityIndicator size={40} color="#5656D8" />
          </View>
        )}
      />
    </View>
  );
};
