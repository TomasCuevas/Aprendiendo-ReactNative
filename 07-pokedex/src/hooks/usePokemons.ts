import { useState, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

//* SERVICE *//
import { getPokemonsService } from "../service";
import { IResult, ISimplePokemon } from "../interfaces";

export const usePokemons = () => {
  const [simplePokemon, setSimplePokemon] = useState<ISimplePokemon[]>([]);

  const pokemonQuery = useInfiniteQuery(
    ["allPokemons"],
    ({ pageParam }) => getPokemonsService(pageParam),
    {
      getNextPageParam: (lastPage, nextPage) => {
        return lastPage.length || 0;
      },
      staleTime: 1000 * 60,
    }
  );

  const prepairPokemonData = (pokemonlist: IResult[]) => {
    const pokemons = pokemonlist.flat().map((pokemon) => console.log(pokemon));
  };

  useEffect(() => {
    if (pokemonQuery.data) {
      prepairPokemonData(pokemonQuery.data.pages.flat());
    }
  }, [pokemonQuery]);

  return {
    ...pokemonQuery,
  };
};
