import { Card } from '@/components'
import Layout from '@/layout';

interface Props {
  pokemonData: PokemonData[];
}

export interface PokemonList {
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonData {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
  height: number;
  weight: number;
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
  };
}

const PokemonPage = ({ pokemonData }: Props) => {
  return (
    <Layout>
      <Card className="grid grid-cols-4 gap-4 m-5">
        {pokemonData.map((pokemon, index) => (
          <Card key={index} className="border-2 border-gray-300 p-4 text-center">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className='inline-block'/>
            <div className='flex gap-3 justify-center'>
              <p>{pokemon.weight}Kg</p>
              <p>{pokemon.height}M</p>
            </div>
          </Card>
        ))}
      </Card>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=40&offset=0');
  const data: PokemonList = await response.json();

  const pokemonPromises = data.results.map(async (pokemon) => {
    try {
      const pokemonDataResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
      if (!pokemonDataResponse.ok) {
        throw new Error(`Error fetching pokemon data for ${pokemon.name}`);
      }
      const pokemonDataJson: PokemonData = await pokemonDataResponse.json();
      return pokemonDataJson;
    } catch (error) {
      console.error(error);
      return null;
    }
  });

  const pokemonDataArray = await Promise.all(pokemonPromises);
  const filteredPokemonDataArray = pokemonDataArray.filter(pokemon => pokemon !== null);

  return {
    props: {
      pokemonData: filteredPokemonDataArray,
    },
  };
};

export default PokemonPage;

