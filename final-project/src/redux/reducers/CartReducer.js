import { ADDTOCART_SUCCESS, REMOVETOCART_SUCCESS } from "../constants/CartContants";

const previousCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

console.log(previousCart);

const initialCartState = {
	cartItems: previousCart.length > 0 ? previousCart.cartItems : [],
	subTotal: previousCart.length > 0 ? previousCart.subtotal : 0,
	taxes: previousCart.length > 0 ? previousCart.taxes : 0,
	grandTotal: previousCart.length > 0 ? previousCart.grandTotal : 0,
}

let cart = {};

export const CartReducer = (state = initialCartState, action) => {

	switch (action.type) {
		case ADDTOCART_SUCCESS:

			cart =  {
				...state,
				cartItems: [...action.cartItems],
				subTotal: action.subTotal,
				taxes: action.taxes,
				grandTotal: action.grandTotal
			}

			localStorage.setItem('cart', JSON.stringify(cart));

			return cart;

		case REMOVETOCART_SUCCESS:

			return {
				...state,
				cartItems: [...action.cartItems],
				subTotal: action.subtotal,
				taxes: action.taxes,
				grandTotal: action.grandTotal
			}

		default:
			return state;
	}
}