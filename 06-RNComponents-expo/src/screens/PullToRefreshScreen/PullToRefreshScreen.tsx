import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* COMPONENT *//
import { HeaderTitle } from "../../components";
import { styles as themeStyles } from "../../theme/app.theme";

export const PullToRefreshScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log("Terminado.");
      setRefreshing(false);
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={{ marginTop: top + 20, ...themeStyles.globalMargin }}>
        <HeaderTitle title="Pull to refresh" color="#5858D6" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
