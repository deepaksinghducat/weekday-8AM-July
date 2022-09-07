import {
	ADD_CUSTOMER_START,
	ADD_CUSTOMER_SUCCESS,
	DELETE_CUSTOMER_START,
	DELETE_CUSTOMER_SUCCESS,
	UPDATE_CUSTOMER_START,
	UPDATE_CUSTOMER_SUCCESS
} from "../constants/CustomerContants"

export const addCustomerStart = (customer) => ({
	type: ADD_CUSTOMER_START,
	payload: customer
})

export const addCustomerSuccess = (customer) => ({
	type: ADD_CUSTOMER_SUCCESS,
	payload: customer
})


export const updateCustomerStart = (customer, id) => ({
	type: UPDATE_CUSTOMER_START,
	payload: {
		customer,
		id
	}
})

export const updateCustomerSuccess = (customer, id) => ({
	type: UPDATE_CUSTOMER_SUCCESS,
	payload: {
		customer,
		id
	}
})

export const deleteCustomerStart = (id) => ({
	type: DELETE_CUSTOMER_START,
	payload: id
})

export const deleteCustomerSuccess = (id) => ({
	type: DELETE_CUSTOMER_SUCCESS,
	payload: id
})
