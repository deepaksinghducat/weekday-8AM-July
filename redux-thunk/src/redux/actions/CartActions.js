import { ADD_CART, ERR_CART } from "../constants/CartContants";

export const addToCart = (product) => (dispatch) => {
	try {
		dispatch({type: ADD_CART, payload: product})
	}catch(e) {
		dispatch({type: ERR_CART, payload: ''})
	}
}