import { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
  Text,
  View,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* HOOK *//
import { usePokemons } from "../../hooks";

//* COMPONENTS *//
import { PokemonCard } from "../../components";

//* INTERFACES AND TYPES *//
import { ISimplePokemon } from "../../interfaces";
import { RootStackParams } from "../../navigator/RootStack";

export interface Props
  extends StackScreenProps<RootStackParams, "HomeScreen"> {}

export const HomeScreen: React.FC<Props> = () => {
  const { top } = useSafeAreaInsets();
  const { data, fetchNextPage } = usePokemons();
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

      <View style={{ alignItems: "center" }}>
        <FlatList
          data={pokemons}
          keyExtractor={(pokemon) => pokemon.name}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <Text
              style={{
                ...styles.title,
                marginTop: top + 20,
                marginBottom: 20,
              }}
            >
              Pokedex
            </Text>
          }
          numColumns={2}
          renderItem={({ item: pokemon }) => <PokemonCard pokemon={pokemon} />}
          onEndReached={() => fetchNextPage()}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator style={{ height: 100 }} size={40} color="grey" />
          }
        />
      </View>
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
