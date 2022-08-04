import React from 'react'
import Button from './Button';

function Parent(props) {

    console.log("parent counter");
  return (
    <div>
        {props.counter}
        {/* <Butt onClick={props.incrementCounter}>incrementCounter</Butt> */}

        <Button incrementCounter={props.incrementCounter} />
    </div>
  )
}

export default React.memo(Parent)