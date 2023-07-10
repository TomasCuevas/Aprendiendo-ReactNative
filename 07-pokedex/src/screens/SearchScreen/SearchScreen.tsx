import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* COMPONENT *//
import { SearchInput } from "../../components";

//* INTERFACE *//
interface Props {}

export const SearchScreen: React.FC<Props> = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ ...styles.container, marginTop: top + 10 }}>
      <SearchInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
  },
});
