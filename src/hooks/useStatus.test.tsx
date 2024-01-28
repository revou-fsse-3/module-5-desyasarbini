import {renderHook} from '@testing-library/react'
import useStatus from './useStatus'

describe('useStatus unit test', () => {

    test('should be return active value', () => {
        const hook = renderHook(() => useStatus({status: true}))
        expect(hook.result.current).toBe('active') 
    })

    test('should be return deactive value', () => {
        const hook = renderHook(() => useStatus({status: false}))
        expect(hook.result.current).toBe('deactive') 
    })
})