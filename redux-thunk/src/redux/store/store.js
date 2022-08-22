import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { CartReducer } from '../reducers/CartReducer'
import { ProductReducer } from '../reducers/ProductReducer'

const reducers = combineReducers({
	products: ProductReducer,
	carts: CartReducer
})

const initialState = {}

const middleware = [thunk];

const store = configureStore({
	reducer: reducers,
	initialState: initialState,
	middleware,
	devTools: true
})

export default store;





