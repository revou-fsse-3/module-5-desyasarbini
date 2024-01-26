export const POKEMON_API_BASE = "https://pokeapi.co/api/v2/"
export const POKEMON_API_NAME = `${POKEMON_API_BASE}pokemon/`
export const POKEMON_API_POKEMON_DETAIL = `${POKEMON_API_NAME}name`

export interface Pokemon {
  name: string
  id: number
  height: number
  weight: number
  sprites: {
    front_default: string
  };
}

export const getPokemonList = async (): Promise<Pokemon[]> => {
  try {
    const response = await fetch(`${POKEMON_API_BASE}pokemon?limit=151&offset=0`);

    if (!response.ok) {
      throw new Error('Failed to fetch Pokémon data');
    }

    const data = await response.json();
    return data.results as Pokemon[];
  } catch (error) {
    // console.error('Error fetching Pokémon data:', (error as Error).message);
    throw error;
  }
};

export const getPokemonDetails = async (pokemonName: string): Promise<Pokemon | null> => {
  try {
    const response = await fetch(`${POKEMON_API_BASE}pokemon/${pokemonName}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch Pokémon details');
    }

    const data = await response.json();
    return {
      name: data.name,
      id: data.id,
      height: data.height,
      weight: data.weight,
      sprites: {
        front_default: data.sprites.front_default,
      },
    };
  } catch (error) {
    // console.error('Error fetching Pokémon details:', (error as Error).message);
    throw error;
  }
};