import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

function Functional() {

    let [obj,setObj] = useState({
        number : '',
        name: ''
    });

    // let number = 0;
    // setInterval(() => {
    //     let num = number + 1;
    //     setNumber(num);
    // }, 1000)

    useEffect(() => {
        // console.log("function Functional " + number);

    }, [])


    return (
        <div>
            <input type="number" value={obj.number} onChange={(e) => {
                setObj({
                    ...obj,
                    number: e.target.value
                });
            } } />
            <input type="text" value={obj.name} onChange={(e) => {
                setObj({
                    ...obj,
                    name: e.target.value
                });
               
            } } />
            <p>{obj.name}</p>
            <p>{obj.number}</p>
        </div>
    )
}

export default Functional