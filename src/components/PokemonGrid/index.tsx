'use client'
import { useState } from "react"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { PokemonCard } from ".."
import { Pokemon } from "@/lib/PokeApi";

interface PokemonGridProps {
  pokemonList: Pokemon[];
}

const PokemonGrid: React.FC<PokemonGridProps> = ({pokemonList}: PokemonGridProps) => {
    const [ searchText, setSearchText ] = useState('')
    console.log(pokemonList)

    const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchText.toLowerCase())
  );
    
    return (
        <>
            <div className="p-10">
                <h3 className="text-2xl py-6 text-center">search pokemon!</h3>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="pokemonName">Pokemon Name</Label>
                    <Input
                        type="text"
                        value={searchText}
                        id="pokemonName"
                        placeholder="ditto, pikachu, etc ..."
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
                <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon Collection</h3>
            </div>

            <div className="mb-32 grid text-center p-10 lg:mb-0 lg:grid-cols-3 lg:text-left">
                {filteredPokemonList.map((pokemon) => (
                <PokemonCard key={pokemon.name} name={pokemon.name} />
                ))}
            </div>
        </> 
    )
}
export default PokemonGrid