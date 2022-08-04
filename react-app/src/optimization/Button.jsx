import React from 'react'

function Button(props) {

    console.log("button counter");
  return (
    <button onClick={props.incrementCounter}>Button</button>
  )
}

export default React.memo(Button)