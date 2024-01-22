
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/layout';
import { Card } from '@/components';

interface PokemonDetail {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
}

const PokeDetailPage = () => {
  const router = useRouter();
  const { pokemonName } = router.query;
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetail | null>(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();
        setPokemonDetails({
          name: data.name,
          height: data.height,
          weight: data.weight,
          sprites: {
            front_default: data.sprites.front_default,
          },
        });
      } catch (error) {
        console.error('Error fetching Pokémon details:', (error as Error).message);
      }
    };

    if (pokemonName) {
      fetchPokemonDetails();
    }
  }, [pokemonName]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
        <Card>
            <h1 className="text-4xl font-bold pt-4">{pokemonDetails.name}</h1>
            <img src={pokemonDetails.sprites.front_default} alt={`${pokemonDetails.name} sprite`} />
            <p>Height: {pokemonDetails.height}</p>
            <p>Weight: {pokemonDetails.weight}</p>
        </Card>
    </Layout>
    
  );
};

export default PokeDetailPage;
