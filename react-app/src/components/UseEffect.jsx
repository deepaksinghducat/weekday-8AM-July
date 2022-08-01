import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function UseEffect() {

    const [counter, setCounter] = useState(2);

    useEffect(() => {
        // if(counter > 1)
        // console.log(counter);
        let interval = setInterval(() => setCounter(counter + 1),1000);
        console.log("counter");
        return () => {clearInterval(interval)};
    },[counter])

    return (
        <div style={{
            textAlign: 'center',
        }}>{counter}</div>
    )
}

export default UseEffect