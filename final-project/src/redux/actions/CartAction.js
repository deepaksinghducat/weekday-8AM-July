import { ADDTOCART_START, ADDTOCART_SUCCESS } from "../constants/CartContants"

export const addToCartStart = (cart) => ({
	type: ADDTOCART_START,
	payload: cart
})

export const addToCartSuccess = (cart) => ({
	type: ADDTOCART_SUCCESS,
	payload: cart
})