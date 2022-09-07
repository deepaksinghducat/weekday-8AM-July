import { ADD_CUSTOMER_SUCCESS, DELETE_CUSTOMER_SUCCESS, UPDATE_CUSTOMER_SUCCESS } from "../constants/CustomerContants";

const initialCustomerState = {
	customers: localStorage.getItem('customers') ? JSON.parse(localStorage.getItem('customers')) : [],
}

let customers = [];

export const CustomerReducer = (state = initialCustomerState, action) => {

	switch (action.type) {
		case ADD_CUSTOMER_SUCCESS:

			customers = [
				...state.customers,
				action.payload
			];

			localStorage.setItem('customers', JSON.stringify(customers));

			return {
				...state,
				customers
			}

		case UPDATE_CUSTOMER_SUCCESS:

			customers = state.customers.map((customer, index) => {
				if (index === parseInt(action.payload.id)) {
					return action.payload.customer;
				}

				return customer;
			})

			localStorage.setItem('customers', JSON.stringify(customers));

			return {
				...state,
				customers
			}

		case DELETE_CUSTOMER_SUCCESS:
			
			state.customers.splice(action.payload, 1);

			customers = state.customers;

			localStorage.setItem('customers', JSON.stringify(customers));

			return {
				...state,
				customers
			}

		default:
			return state;
	}

}