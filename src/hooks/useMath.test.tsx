import {renderHook, act} from '@testing-library/react'
import useMath from './useMath'

describe('useMath unit testing', () => {

    test('result should be 0', () => {
        const hook = renderHook(() => useMath({a: 0, b:0}))
        expect(hook.result.current.result).toBe(0)
    })

    test('result from addition should be 10', () => {
        const hook = renderHook(() => useMath({a: 5, b:15}))
        act(() => {
            hook.result.current.addition()
        })
        expect(hook.result.current.result).toBe(20)
    })

    test('result from subtraction hould be 10', () => {
        const hook = renderHook(() => useMath({a: 15, b:5}))
        act(() => {
            hook.result.current.subtraction()
        })
        expect(hook.result.current.result).toBe(10)
    })

    test('result from subtraction hould be 10', () => {
        const hook = renderHook(() => useMath({a: 5, b:2}))
        act(() => {
            hook.result.current.multiply()
        })
        expect(hook.result.current.result).toBe(10)
    })
})