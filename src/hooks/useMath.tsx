import { useState } from 'react'

interface Props {
    a: number
    b: number
}

const useMath = ({a, b}: Props) => {
    
    const [result, setResult] = useState(0)

    const addition = () => {
        const result = a + b
        setResult(result)
    }

    const subtraction = () => {
        const result = a - b
        setResult(result)
    }

    const multiply = () => {
        const result = a * b
        setResult(result)
    }

    return{
        result,
        addition,
        subtraction,
        multiply
    }
}

export default useMath