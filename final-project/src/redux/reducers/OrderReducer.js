import { ADD_ORDER, LOAD_ORDER } from "../constants/OrderContants";

const initialOrderState = {
	orders: [],
}

export const OrderReducer = (state = initialOrderState, action) => {

	switch (action.type) {
		case LOAD_ORDER:

			return {
				...state,
				orders: [...action.payload]
			}

		case ADD_ORDER:

			return {
				...state,
				orders: [...state.orders, action.payload]
			}

		default:
			return state;
	}

}