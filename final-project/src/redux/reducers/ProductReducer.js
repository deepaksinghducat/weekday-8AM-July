import { ADD_PRODUCT, LOAD_PRODUCT, REMOVE_PRODUCT } from "../constants/ProductContants";

const initialProductState = {
	products: [],
}

export const ProductReducer = (state = initialProductState, action) => {

	switch (action.type) {
		case LOAD_PRODUCT:

		console.log(action);

			return {
				...state,
				products: [...action.payload]
			}

		case ADD_PRODUCT:

			return {
				...state,
				products: [...state.products, action.payload]
			}

		case REMOVE_PRODUCT:

			state.products.splice(action.payload, 1);

			return {
				...state,
				products: [...state.products]
			}

		default:
			return state;
	}

}