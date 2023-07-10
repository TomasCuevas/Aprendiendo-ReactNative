import { useQuery } from "@tanstack/react-query";

//* SERVICE *//
import { getPokemonById } from "../service";

export const usePokemon = (id: string) => {
  const pokemonQuery = useQuery([`/pokemon/${id}`], () => getPokemonById(id));

  return {
    ...pokemonQuery,
  };
};
