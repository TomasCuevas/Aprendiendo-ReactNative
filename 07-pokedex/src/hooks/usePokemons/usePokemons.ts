import { useState, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

//* SERVICE *//
import { getPokemonsService } from "../../service";

//* INTERFACE *//
import { ISimplePokemon } from "../../interfaces";

export const usePokemons = () => {
  const [allPokemon, setAllPokemon] = useState<ISimplePokemon[]>([]);
  const pokemonsQuery = useInfiniteQuery(
    ["allPokemons"],
    ({ pageParam }) => getPokemonsService(pageParam),
    {
      getNextPageParam: (_lastPage, nextPage) => {
        return nextPage.flat().length || 0;
      },
      staleTime: 1000 * 60,
    }
  );

  useEffect(() => {
    if (pokemonsQuery.data) {
      setAllPokemon(() => {
        return pokemonsQuery.data?.pages.flat().map((pokemon) => {
          const id = pokemon.url.split("/").at(-2)!;

          return {
            id,
            name: pokemon.name,
            picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          };
        });
      });
    }
  }, [pokemonsQuery.data]);

  return {
    ...pokemonsQuery,
    allPokemon,
  };
};
