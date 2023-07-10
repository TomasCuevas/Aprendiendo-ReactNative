import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* COMPONENT *//
import { PokemonCard, SearchInput } from "../../components";

//* HOOK *//
import { usePokemonSearch } from "../../hooks";

//* INTERFACE *//
interface Props {}

export const SearchScreen: React.FC<Props> = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, allPokemon } = usePokemonSearch();

  if (isLoading) {
    return (
      <View style={styles.activity__container}>
        <ActivityIndicator size={50} color="#AAA" />
      </View>
    );
  }

  return (
    <View style={{ ...styles.container, marginTop: top + 10 }}>
      <SearchInput />

      <FlatList
        data={allPokemon}
        keyExtractor={(pokemon) => pokemon.name}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              marginTop: 20,
              marginBottom: 20,
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
  activity__container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "700",
    marginHorizontal: 20,
  },
});
