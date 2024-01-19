import { Card } from '@/components'
import Layout from '@/layout';

export interface PokemonList {
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
}

interface Props {
  pokemonList: PokemonList;
}

const HomePage = ({ pokemonList }: Props) => {
  return (
    <Layout>
      <Card className='grid grid-cols-4 gap-4 p-5'>
        {pokemonList.results.map((pokemon, index) => (
        <p key={index}>{pokemon.name}</p>
        ))}
      </Card>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=40&offset=0');
  const data: PokemonList = await response.json();

  return {
    props: {
      pokemonList: data,
    },
  };
};

export default HomePage;