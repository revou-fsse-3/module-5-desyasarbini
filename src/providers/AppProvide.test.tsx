import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import AppProvider, { usePokemon } from './AppProvider'

test('App provider should be return correct value', async () => {
    const dummypokemon = {
        name: 'ditto',
        id: 272,
        height: 12
    }

    const TestComponent = () => {
        const context = usePokemon()
        const {pokemon, setPokemon} = context

        const getPokemonData = () => {
            setPokemon?.(dummypokemon)
        }

        return(
            <>
                <div>
                    <p>{`Name: ${pokemon?.name}`}</p>
                    <button onClick={getPokemonData}>New Pokemon</button>
                </div>
            </>
        )
    }
    render(
        <AppProvider>
            <TestComponent/>
        </AppProvider>
    )
    expect(screen.getAllByText('New Pokemon')).toBeDefined()
    waitFor(() => fireEvent.click(screen.getByRole('button')))
    expect(screen.getByText(`Name: ${dummypokemon.name}`)).toBeDefined()
})