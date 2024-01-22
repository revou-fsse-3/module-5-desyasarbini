export const POKEMON_API_BASE = "https://pokeapi.co/api/v2/"
export const POKEMON_API_NAME = `${POKEMON_API_BASE}pokemon/`
export const POKEMON_API_POKEMON_DETAIL = `${POKEMON_API_NAME}name`

export interface Pokemon {
  name: string;
  url: string;
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
    console.error('Error fetching Pokémon data:', (error as Error).message);
    throw error;
  }
};


// export async const getPokemon(name: string) {
//     const response = await fetch(POKEMON_API_POKEMON_DETAIL)
//     const data = await response.json()
//     return data
// }