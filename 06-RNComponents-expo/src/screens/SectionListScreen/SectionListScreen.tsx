import { View, StyleSheet, SectionList, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* COMPONENT *//
import { HeaderTitle, ItemSeparator } from "../../components";

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
            <HeaderTitle title={section.casa} marginTop={10} marginBottom={5} />
          </View>
        )}
        renderSectionFooter={({ section }) => (
          <HeaderTitle
            title={`Total: ${section.data.length}`}
            marginTop={10}
            fontSize={20}
          />
        )}
        ListHeaderComponent={() => (
          <HeaderTitle
            title="Section List"
            color="#5656D8"
            fontSize={30}
            marginBottom={0}
          />
        )}
        ListFooterComponent={() => (
          <HeaderTitle
            title={`Total de casas ${casas.length}`}
            marginTop={30}
            marginBottom={50}
          />
        )}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
