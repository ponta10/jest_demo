import { renderHook, act } from '@testing-library/react'
import { useCounter } from '../hook/counter'
 
describe('Counter Hooks', () => {
    test('インクリメントされる', () => {
        const { result } = renderHook(() => useCounter())
        act(() => result.current.increment())
        expect(result.current.count).toBe(1)
    })
     
    test('デクリメントされる', () => {
        const { result } = renderHook(() => useCounter())
        act(() => result.current.decrement())
        expect(result.current.count).toBe(-1)
    })
})