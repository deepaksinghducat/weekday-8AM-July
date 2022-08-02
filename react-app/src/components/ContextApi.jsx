import React, { useContext } from 'react'
import TodoContext from '../store/TodoContent'

function ContextApi() {

    const store = useContext(TodoContext)

//   return (
//     <TodoContext.Consumer>
//         {
//             (ctx) => (
//                 <div>{ctx.name}</div>
//             )
//         }
//     </TodoContext.Consumer>
//   )

    return <div>{store.name}</div>
}

export default ContextApi