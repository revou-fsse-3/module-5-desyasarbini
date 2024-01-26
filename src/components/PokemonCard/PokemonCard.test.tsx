import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonCard from '.';

describe('PokemonCard component', () => {
    const mockProps = {
        name: 'pikachu',
    };

    test('renders PokemonCard correctly', () => {
        const { asFragment } = render(<PokemonCard {...mockProps} />);
        
        // asFragment() untuk mengambil snapshot dari struktur DOM yang dihasilkan oleh komponen
        expect(asFragment()).toMatchSnapshot();
    });
});
