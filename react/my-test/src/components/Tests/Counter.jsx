import React, { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0)

    // function handleCounter(number) {
    //     const contador = counter + number

    //     setCounter(contador) 
    // }

    return (
        <h1 style={{ color: '#f00' }}>
            {counter}
            <br/>
            <button onClick={() => setCounter(counter + 1)}>+1</button>
            <button onClick={() => setCounter(counter - 2)}>-2</button>
        </h1>
    ) 

}

export default Counter