import { combineReducers ,configureStore }  from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { CartReducer } from "../reducers/CartReducer"
import { CustomerReducer } from "../reducers/CustomerReducer"
import { OrderReducer } from "../reducers/OrderReducer"
import { ProductReducer } from "../reducers/ProductReducer"
import { RoleReducer } from "../reducers/RoleReducer"
import rootSaga from "../sagas/rootSaga"

const reducers = combineReducers({
	products: ProductReducer,
	cart: CartReducer,
	order: OrderReducer,
	customer: CustomerReducer,
	role: RoleReducer
})

const initialState = {}


const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
	reducer: reducers,
	middleware: [sagaMiddleware],
	initialState,
	devTools: true
})

sagaMiddleware.run(rootSaga);

export default store;