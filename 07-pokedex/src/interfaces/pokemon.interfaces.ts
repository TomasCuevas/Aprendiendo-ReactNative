export interface IListPokemons {
  count: number;
  next: string;
  previous: null;
  results: IResult[];
}

export interface IResult {
  name: string;
  url: string;
}

export interface ISimplePokemon {
  id: string;
  name: string;
  picture: string;
  color?: string;
}
