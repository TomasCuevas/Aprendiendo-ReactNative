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
}

export interface IFullPokemon {
  abilities: IAbility[];
  base_experience: number;
  forms: ISpecies[];
  game_indices: IGameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IMove[];
  name: string;
  order: number;
  past_types: any[];
  species: ISpecies;
  sprites: ISprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface IAbility {
  ability: ISpecies;
  is_hidden: boolean;
  slot: number;
}

export interface ISpecies {
  name: string;
  url: string;
}

export interface IGameIndex {
  game_index: number;
  version: ISpecies;
}

export interface IMove {
  move: ISpecies;
  version_group_details: IVersionGroupDetail[];
}

export interface IVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: ISpecies;
  version_group: ISpecies;
}

export interface IGenerationV {
  "black-white": ISprites;
}

export interface IGenerationIv {
  "diamond-pearl": ISprites;
  "heartgold-soulsilver": ISprites;
  platinum: ISprites;
}

export interface IVersions {
  "generation-i": IGenerationI;
  "generation-ii": IGenerationIi;
  "generation-iii": GenerationIii;
  "generation-iv": IGenerationIv;
  "generation-v": IGenerationV;
  "generation-vi": { [key: string]: Home };
  "generation-vii": GenerationVii;
  "generation-viii": GenerationViii;
}

export interface ISprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: Other;
  versions?: IVersions;
  animated?: ISprites;
}

export interface IGenerationI {
  "red-blue": IRedBlue;
  yellow: IRedBlue;
}

export interface IRedBlue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface IGenerationIi {
  crystal: ICrystal;
  gold: Gold;
  silver: Gold;
}

export interface ICrystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent?: string;
}

export interface GenerationIii {
  emerald: OfficialArtwork;
  "firered-leafgreen": Gold;
  "ruby-sapphire": Gold;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface Home {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface GenerationVii {
  icons: DreamWorld;
  "ultra-sun-ultra-moon": Home;
}

export interface DreamWorld {
  front_default: string;
  front_female: null;
}

export interface GenerationViii {
  icons: DreamWorld;
}

export interface Other {
  dream_world: DreamWorld;
  home: Home;
  "official-artwork": OfficialArtwork;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: ISpecies;
}

export interface Type {
  slot: number;
  type: ISpecies;
}
