import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import PokemonGrid from '.';
import '@testing-library/jest-dom';

describe('PokemonGrid component', () => {
    const mockPokemonList = [{ 
        name: 'pikachu', 
        id: 1, 
        height: 4, 
        weight: 60, 
        sprites: { front_default: 'pikachu-image-url' } 
    }]  

    test('Pokemon Grid rendering correctly', () => {
        render(<PokemonGrid pokemonList={mockPokemonList} />);
        const labelInput = screen.getByText('Pokemon Name')
        const searchBoxInput = screen.getByPlaceholderText('ditto, pikachu, etc ...')
        
        expect(labelInput).toBeDefined()
        expect(searchBoxInput).toBeDefined()
    })

    test('Pokemon Grid rendering correctly', () => {
        render(<PokemonGrid pokemonList={mockPokemonList} />)
        
        // Verify that the PokemonGrid renders with the provided Pokemon list
        expect(screen.getByText('Pikachu')).toBeInTheDocument()
    })
  
    test('Search box Input with value', () => {
        render(<PokemonGrid pokemonList={mockPokemonList} />);
        const searchBoxInput = screen.getByPlaceholderText('ditto, pikachu, etc ...')

        fireEvent.change(searchBoxInput, { target: { value: 'pikachu' } })
        expect(searchBoxInput).toHaveValue('pikachu')
    })

    // test('Search functionality filters Pokemon', async () => {
    //     render(<PokemonGrid pokemonList={mockPokemonList} />);
    //     const searchBoxInput = screen.getByPlaceholderText('ditto, pikachu, etc ...');

    //     // Simulate user typing 'ditto' in the search box
    //     fireEvent.change(searchBoxInput, { target: { value: 'ditto' } });

    //     // Wait for the PokemonGrid to update based on the search
    //     await waitFor(() => {
    //         expect(screen.getByText('Ditto')).toBeInTheDocument();
    //     });

    //     // Additional assertions or verifications related to search functionality
    // });

});
