// cara testing bagi komponen yg menggunakan props

import {render, screen} from '@testing-library/react'
import Text from '.'
import '@testing-library/jest-dom'

describe('unit testing Text components', () => {
    test('expect render text unit correctly', () => {
        const document = render(<Text>{'texting unit'}</Text>)
        expect(document).toBeDefined()
        expect(document).toMatchSnapshot()
    })

    test('expect render text unit to have classname correctly', () => {
        render(<Text className={'class-testing'}>{'texting unit'}</Text>)
        const element = screen.getByText('texting unit')
        expect(element).toHaveClass('class-testing')
    })

    test('expect render text unit to have id correctly', () => {
        render(<Text id={'id-testing'}>{'texting unit'}</Text>)
        const element = screen.getByText('texting unit')
        expect(element).toHaveAttribute('id', 'id-testing')
    })
})