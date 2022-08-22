import { ADD_CART, ERR_CART } from "../constants/CartContants"

const initialCart = {
	carts: [],
	error: ''
}

export const CartReducer = (state = initialCart, action) => {
	switch (action.type) {
		case ADD_CART:
			return {
				...state,
				carts: [...state.carts, action.payload]
			}

		case ERR_CART:
			return {
				...state,
				error: 'Something went wrong'
			}

		default:
			return state
	}
}