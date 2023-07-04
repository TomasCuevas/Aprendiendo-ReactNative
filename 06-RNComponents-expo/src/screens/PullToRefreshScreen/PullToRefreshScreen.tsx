import { useState, useContext } from "react";
import { ScrollView, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//* COMPONENT *//
import { HeaderTitle } from "../../components";

//* THEME *//
import { styles as themeStyles } from "../../theme";

//* CONTEXT *//
import { ThemeContext } from "../../context";

export const PullToRefreshScreen: React.FC = () => {
  const { colors } = useContext(ThemeContext);
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
          progressBackgroundColor={colors.primary}
          colors={["white"]}
        />
      }
    >
      <SafeAreaView style={{ marginTop: 20, ...themeStyles.globalMargin }}>
        <HeaderTitle title="Pull to refresh" color={colors.primary} />
      </SafeAreaView>
    </ScrollView>
  );
};
