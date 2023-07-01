import { View, StyleSheet, SectionList, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* COMPONENT *//
import { HeaderTitle } from "../../components";

//* THEME *//
import { styles as themeStyles } from "../../theme/app.theme";

//* DATA *//
import { casas } from "../../data";

export const SectionListScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ marginTop: top + 20, ...themeStyles.globalMargin }}>
      <SectionList
        sections={casas}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => `${item}${index}`}
        stickySectionHeadersEnabled
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: "white" }}>
            <HeaderTitle title={section.casa} marginTop={20} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
