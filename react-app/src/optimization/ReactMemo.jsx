import React from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import Parent from './Parent';

function ReactMemo() {

  const [counter,setCounter] = useState(1);

  console.log("counter");

  useEffect(() => {
    // const interval  = setInterval(() => setCounter((counter) => counter +1 ),1000);

    // return () => clearInterval(interval);
  },[counter])

  const incrementCounter = useCallback(() => {
    setCounter((counter) => counter +1);
  },[])

  return (
    <div style={{
      textAlign: 'center',
      fontSize:"64px"
    }}>
      <Parent counter={counter} incrementCounter={incrementCounter} />
    </div>
  )
}

export default ReactMemo