import { useInfiniteQuery } from "@tanstack/react-query";

//* SERVICE *//
import { getPokemonsService } from "../service";

export const usePokemons = () => {
  const pokemonQuery = useInfiniteQuery(
    ["allPokemons"],
    ({ pageParam }) => getPokemonsService(pageParam),
    {
      getNextPageParam: (lastPage, nextPage) => {
        return nextPage.flat().length || 0;
      },
      staleTime: 1000 * 60,
    }
  );

  return {
    ...pokemonQuery,
  };
};
