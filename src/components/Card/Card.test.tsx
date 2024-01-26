import { render } from '@testing-library/react'
import { describe } from 'node:test'
import Card from '.'

describe('Unit test for Card component', () => {

    test('component should be return card', () => {
        render(<Card>('testing Card')</Card>)
        // const element = screen.getByRole('testing Card')
        // expect(element).toMatchSnapshot()
        console.log('expected')
    }) 
    
})