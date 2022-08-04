// import { Cookies } from 'react-cookie';

// const cookies = new Cookies();

// console.log(cookies.get('todo'))

// console.log(JSON.parse(sessionStorage.getItem('todo'))[0])

export const TodoReducer = (state, action) => {
    if (action.type === "add") {

        const todos = [...state.todos, action.data];

        // sessionStorage.setItem('todo', JSON.stringify(todos))


        // cookies.set('todo', JSON.stringify(todos));
        localStorage.setItem('todo', JSON.stringify(todos))

        return {
            ...state,
            todos: [
                ...state.todos,
                action.data
            ]
        }
    }

    if (action.type === "delete") {
        const prevTodo = state.todos;

        prevTodo.splice(action.data, 1);

        localStorage.setItem('todo', JSON.stringify(prevTodo))

        return {
            ...state,
            todos: prevTodo
        }
    }

    return state
}
