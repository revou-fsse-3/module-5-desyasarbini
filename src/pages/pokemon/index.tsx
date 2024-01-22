import { PokemonGrid } from '@/components'
import Layout from '@/layout';
import { getPokemonList, Pokemon } from '@/lib/PokeApi';
import React, { useEffect, useState } from 'react';


const PokemonPage: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const data = await getPokemonList();
        setPokemonList(data);
      } catch (error) {
        console.error('Error fetching Pokémon list:', (error as Error).message);
        // Handle the error as needed
      }
    };

    fetchPokemonList();
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <Layout>
      <PokemonGrid pokemonList={pokemonList}/>
    </Layout>
  );
};

export default PokemonPage;