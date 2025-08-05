import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
        if (count === 0){
            setCount(0)
        }
    }

    const reset = () => {
        setCount(0)
    }

    return(
        <>
            <p>{count}</p>
            <button onClick={increment} className="increment">INCREMENT</button>
            <button onClick={decrement} className="decrement">DECREMENT</button>
            <button onClick={reset} className="reset">RESET</button>
        </>
    )
}

export default Counter