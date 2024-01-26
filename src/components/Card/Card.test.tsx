import { render } from '@testing-library/react'
import { describe } from 'node:test'
import Card from '.'

describe('Unit test for Card component', () => {

    test('component should be return card', () => {
        render(<Card>('testing Card')</Card>)
        console.log('expected')
    }) 

})