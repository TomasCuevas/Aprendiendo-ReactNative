import {
  Text,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { usePokemons } from "../../hooks";
import { useEffect, useState } from "react";
import { ISimplePokemon } from "../../interfaces";
import { FadeInImage } from "../../components";

//* INTERFACE *//
interface Props {}

export const HomeScreen: React.FC<Props> = () => {
  const { top } = useSafeAreaInsets();
  const { data, isLoading, fetchNextPage } = usePokemons();
  const [pokemons, setPokemons] = useState<ISimplePokemon[]>([]);

  useEffect(() => {
    if (data) {
      setPokemons(() => {
        return data?.pages.flat().map((pokemon) => {
          const id = pokemon.url.split("/").at(-2)!;

          return {
            id,
            name: pokemon.name,
            picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          };
        });
      });
    }
  }, [data]);

  return (
    <>
      <Image
        style={styles.pokebola__bg}
        source={require("../../assets/pokebola.png")}
      />

      <FlatList
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.name}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <FadeInImage uri={item.picture} style={{ height: 100, width: 100 }} />
        )}
        onEndReached={() => fetchNextPage()}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator style={{ height: 100 }} size={40} color="grey" />
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  pokebola__bg: {
    position: "absolute",
    top: -100,
    right: -100,
    width: 300,
    height: 300,
    opacity: 0.3,
  },
  title: {
    fontSize: 35,
    fontWeight: "700",
    marginHorizontal: 20,
  },
});
