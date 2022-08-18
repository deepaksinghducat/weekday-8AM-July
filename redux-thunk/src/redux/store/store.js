import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { ProductReducer } from '../reducers/ProductReducer'

const reducers = combineReducers({
	products: ProductReducer
})

const initialState = {}

const middleware = [thunk];

const store = configureStore({
	reducer: reducers,
	initialState: initialState,
	middleware,
	devTools: false
})

export default store;





