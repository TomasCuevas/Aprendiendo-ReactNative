import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  Dimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* COMPONENTS *//
import { Loading, PokemonCard, SearchInput } from "../../components";

//* HOOK *//
import { usePokemonSearch } from "../../hooks";

//* INTERFACE *//
interface Props {}

export const SearchScreen: React.FC<Props> = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, allPokemon } = usePokemonSearch();
  const screeeWidth = Dimensions.get("screen").width;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={{ ...styles.container }}>
      <SearchInput
        style={{
          position: "absolute",
          top: top + 10,
          zIndex: 999,
          width: screeeWidth - 40,
        }}
      />

      <FlatList
        data={allPokemon}
        keyExtractor={(pokemon) => pokemon.name}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              marginBottom: 20,
              marginTop: top + 60,
            }}
          >
            Pokedex
          </Text>
        }
        numColumns={2}
        renderItem={({ item: pokemon }) => <PokemonCard pokemon={pokemon} />}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator style={{ height: 100 }} size={40} color="grey" />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
  },
  title: {
    fontSize: 35,
    fontWeight: "700",
    marginHorizontal: 20,
  },
});
