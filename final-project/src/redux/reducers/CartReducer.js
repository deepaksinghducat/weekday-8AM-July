import { ADD_CART, LOAD_CART, REMOVE_CART } from "../constants/CartContants";

const initialCartState = {
	cartItems: [],
	subtotal: 0,
	taxes: 0,
	grandTotal: 0
}

export const CartReducer = (state = initialCartState, action) => {

	switch (action.type) {
		case LOAD_CART:

			return {
				...state,
				cartItems: [...action.cartItems],
				subtotal: action.subtotal,
				taxes: action.taxes,
				grandTotal: action.grandTotal
			}

		case ADD_CART:

			return {
				...state,
				cartItems: [...action.cartItems],
				subtotal: action.subtotal,
				taxes: action.taxes,
				grandTotal: action.grandTotal
			}

		case REMOVE_CART:

			return {
				...state,
				cartItems: [...action.cartItems],
				subtotal: action.subtotal,
				taxes: action.taxes,
				grandTotal: action.grandTotal
			}

		default:
			return state;
	}

}