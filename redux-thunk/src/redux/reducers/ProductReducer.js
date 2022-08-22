import { ADD_PRODUCT, ERR_PRODUCT, LOAD_PRODUCT } from "../constants/ProductContants"

const initialProduct = {
	products: [],
	error: ''
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
				products: [...state.products, action.payload]
			}
		case ERR_PRODUCT:
			return {
				...state,
				error: 'Something went wrong'
			}

		default:
			return state
	}
}