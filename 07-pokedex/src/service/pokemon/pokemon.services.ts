import { pokemonApi } from "../../axios";

//! GET POKEMONS
export const getPokemonsService = async (offset = 0) => {
  try {
    const { data } = await pokemonApi.get(`/pokemon?offset=${offset}&limit=40`);

    return data;
  } catch (error) {
    throw error;
  }
};
