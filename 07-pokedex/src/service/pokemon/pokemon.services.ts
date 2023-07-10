//* AXIOS INSTANCE *//
import { pokemonApi } from "../../axios";

//* INTERFACES *//
import { IFullPokemon, IListPokemons } from "../../interfaces";

//! GET POKEMONS
export const getPokemonsService = async (offset = 0) => {
  try {
    const { data } = await pokemonApi.get<IListPokemons>(
      `/pokemon?offset=${offset}&limit=40`
    );

    return data.results;
  } catch (error) {
    throw error;
  }
};

//! GET UNIQUE POKEMON BY ID
export const getPokemonById = async (id: string) => {
  try {
    const { data } = await pokemonApi.get<IFullPokemon>(`/pokemon/${id}`);

    return data;
  } catch (error) {
    throw error;
  }
};
