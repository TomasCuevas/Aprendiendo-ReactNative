import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

//* SERVICE *//
import { getAllPokemons } from "../../service";

//* INTERFACES *//
import { ISimplePokemon } from "../../interfaces";

export const usePokemonSearch = () => {
  const [allPokemon, setAllPokemon] = useState<ISimplePokemon[]>([]);
  const pokemonsQuery = useQuery(["pokemonsToSearch"], getAllPokemons);

  useEffect(() => {
    if (pokemonsQuery.data) {
      setAllPokemon(() => {
        return pokemonsQuery.data.map((pokemon) => {
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
