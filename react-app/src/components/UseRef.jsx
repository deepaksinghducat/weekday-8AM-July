import React, { Fragment } from 'react'
import { useRef } from 'react';

function UseRef() {

  const input = useRef();

  const add = (event) => {
    event.preventDefault();

    if(input.current.value === '') {
      // console.log("fasf");

      input.current.style.borderColor = 'red'
    }
  }

  return (
    <Fragment>
      <form onSubmit={add} style={{
        textAlign: 'center',
      }}>
        <input ref={input} type="text" name="name" />
        <button type='submit'>Add</button>
      </form>
      {/* <div>
      <p>name: {input != undefined ? input.current.value : ''}</p>
    </div> */}
    </Fragment>

  )
}

export default UseRef