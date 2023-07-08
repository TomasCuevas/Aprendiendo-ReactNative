//* AXIOS INSTANCE *//
import { pokemonApi } from "../../axios";

//* INTERFACES *//
import { IListPokemons } from "../../interfaces";

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
