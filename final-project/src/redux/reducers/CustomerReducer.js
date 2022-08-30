import { ADD_CUSTOMER, LOAD_CUSTOMER, REMOVE_CUSTOMER } from "../constants/CustomerContants";

const initialCustomerState = {
	customers: [],
}

export const CustomerReducer = (state = initialCustomerState, action) => {

	switch (action.type) {
		case LOAD_CUSTOMER:

			return {
				...state,
				customers: [...action.payload]
			}

		case ADD_CUSTOMER:

			return {
				...state,
				customers: [...state.customers, action.payload]
			}

		case REMOVE_CUSTOMER:

			state.customers.splice(action.payload, 1);

			return {
				...state,
				customers: [...state.customers]
			}

		default:
			return state;
	}

}