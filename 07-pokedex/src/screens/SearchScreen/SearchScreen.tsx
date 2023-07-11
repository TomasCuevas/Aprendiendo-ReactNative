import { useEffect, useState } from "react";
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

//* INTERFACES *//
import { ISimplePokemon } from "../../interfaces";

export const SearchScreen: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, allPokemon } = usePokemonSearch();
  const [searchedPokemon, setSearchedPokemon] = useState<ISimplePokemon[]>([]);
  const screeeWidth = Dimensions.get("screen").width;

  const [term, setTerm] = useState("");

  useEffect(() => {
    if (term.length === 0) return setSearchedPokemon([]);

    if (term.length > 1) {
      setSearchedPokemon(
        allPokemon.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(term.toLowerCase())
        )
      );
    }
  }, [term]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={{ ...styles.container }}>
      <SearchInput
        onDebounce={(value: string) => setTerm(value)}
        style={{
          position: "absolute",
          top: top + 10,
          zIndex: 999,
          width: screeeWidth - 40,
        }}
      />

      <FlatList
        data={searchedPokemon}
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
            {term}
          </Text>
        }
        numColumns={2}
        renderItem={({ item: pokemon }) => <PokemonCard pokemon={pokemon} />}
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
