import { useState } from "react";
import { View, StyleSheet, ScrollView, RefreshControl } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* COMPONENT *//
import { HeaderTitle } from "../../components";

//* THEME *//
import { styles as themeStyles } from "../../theme";

export const PullToRefreshScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      console.log("Terminado.");
      setIsRefreshing(false);
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          progressViewOffset={100}
          progressBackgroundColor="#5858d6"
          colors={["white"]}
        />
      }
    >
      <View style={{ marginTop: top + 20, ...themeStyles.globalMargin }}>
        <HeaderTitle title="Pull to refresh" color="#5858D6" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
