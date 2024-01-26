import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/layout';
import { getPokemonDetails, Pokemon } from '@/lib/PokeApi';

const PokeDetailPage = () => {
  const router = useRouter();
  const { pokemonName } = router.query;
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      if (pokemonName) {
        try {
          const details = await getPokemonDetails(pokemonName as string);
          setPokemonDetails(details);
        } catch (error) {
          console.error('Error fetching Pokémon details:', (error as Error).message);
        }
      }
    };

    fetchPokemonDetails();
  }, [pokemonName]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className='w-fit rounded-lg m-3 p-3 border-2 border-gray-200'>
        <h1 className="text-4xl font-bold pt-4">{pokemonDetails.name}</h1>
        <img src={pokemonDetails.sprites.front_default} alt={`${pokemonDetails.name} sprite`} />
        <p>#{pokemonDetails.id}</p>
        <div className='flex justify-evenly'>
          <p>{pokemonDetails.height}M</p>
          <p>{pokemonDetails.weight}KG</p>
        </div>
      </div>
    </Layout>
  );
};

export default PokeDetailPage;
