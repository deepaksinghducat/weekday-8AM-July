const redux = require('redux');

const CounterReducer = (state =  {counter : 0},action) => {
	if(action.type === 'increment') {
		return {
			counter : state.counter + 1
		}
	}

	if(action.type === 'decrement') {
		return {
			counter : state.counter - 1
		}
	}
}

const store = redux.createStore(CounterReducer);

const counterSubcriber = () => {
	const currentStore =  store.getState();

	console.log(currentStore);
}

store.subscribe(counterSubcriber)

store.dispatch({type: 'increment'});

store.dispatch({type: 'decrement'});

