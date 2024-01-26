import { render } from '@testing-library/react'
import Navbar from '.'

describe('Navbar component unit testing', () => {
    
    test('Navbar render correctly', () => {
        const document =  render(<Navbar/>) 
        expect(document).toMatchSnapshot()
    })
    
})