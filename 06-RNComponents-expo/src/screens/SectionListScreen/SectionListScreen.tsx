import { useContext } from "react";
import { View, SectionList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//* COMPONENT *//
import { HeaderTitle, ItemSeparator } from "../../components";

//* THEME *//
import { styles as themeStyles } from "../../theme/app.theme";

//* DATA *//
import { casas } from "../../data";

//* CONTEXT *//
import { ThemeContext } from "../../context";

export const SectionListScreen: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <SafeAreaView style={{ marginTop: 20, ...themeStyles.globalMargin }}>
      <SectionList
        sections={casas}
        renderItem={({ item }) => (
          <Text style={{ color: colors.text }}>{item}</Text>
        )}
        keyExtractor={(item, index) => `${item}${index}`}
        stickySectionHeadersEnabled
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: colors.background }}>
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
            color={colors.primary}
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
    </SafeAreaView>
  );
};
