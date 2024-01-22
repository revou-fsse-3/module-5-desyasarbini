import { Card, Input } from "@/components";
import Layout from "@/layout"
import axios from "axios";
import { useState } from "react";

interface PokemonType {
    slot: number;
    type: {
      name: string;
    };
}

interface Pokemon {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
    types: PokemonType[];
    height: number;
    weight: number;
}


const SearchPage = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonChosen, setPokemonChosen] = useState(false)
    const [pokemon, setPokemon] = useState({
        id:'',
        name: '',
        img: '',
        types: '',
        weight: '',
        height: '',
    })
    
    const searchPokemon = () => { 
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((response) => {
                const typesArray = response.data.types.map((typeObject: { type: { name: string } }) => typeObject.type.name);
    
                setPokemon({
                    id: response.data.id,
                    name: pokemonName,
                    img: response.data.sprites.front_default,
                    types: typesArray.join(', '), // Join the array into a string if needed
                    weight: response.data.weight,
                    height: response.data.height
                });
    
                setPokemonChosen(true);
            })
            .catch((error) => {
                console.error('Error fetching Pokemon:', error);
            });
    };
    
    return(
        <Layout>
            {'ini halaman search pokemon'}
            <div>
            <Input 
                className="border-solid border-2 border-amber-500 rounded-lg w-1/2 p-2"
                type='text' 
                placeholder='search your pokemon' 
                onChange={(event) => {
                setPokemonName(event.target.value)
            }}/>
            <button onClick={searchPokemon}>search Pokemon</button>
            <div>
                <div>
                    {!pokemonChosen ? (<h1>choose your pokemon</h1>) : (
                        <Card key={pokemon.id}>
                            <p>#{pokemon.id}</p>
                            {/* <div>
                                <Image src={pokemon.img} alt={pokemon.name} width={150} height={100}/>
                            </div> */}
                            <div>
                                <div>
                                    <p className="pokemonId">{pokemon.id}</p>
                                    <h2 className="pokemonName">{pokemon.name}</h2>
                                </div>
                                <div>
                                    {pokemon.types}
                                </div>
                                <div>
                                    <p>{pokemon.height}m</p>
                                    <p>{pokemon.weight}kg</p>
                                </div>
                            </div>
                        </Card>
                    )}
                </div>
            </div>
        </div>
        </Layout>
    )
}
export default SearchPage