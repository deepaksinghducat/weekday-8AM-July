import { ADD_PRODUCT, LOAD_PRODUCT } from "../constants/ProductContants"

const initialProduct = {
	products: []
}

export const ProductReducer = (state = initialProduct, action) => {
	switch (action.type) {
		case LOAD_PRODUCT:
			return {
				...state,
				products: [...action.payload]
			}

		case ADD_PRODUCT: 
			return {
				...state,
				products: [...state.products,action.payload]
			}
		default : 
			return state
	}
}