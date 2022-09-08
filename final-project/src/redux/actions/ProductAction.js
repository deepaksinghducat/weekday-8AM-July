import {
	ADD_PRODUCT_START,
	ADD_PRODUCT_SUCCESS,
	DELETE_PRODUCT_START,
	DELETE_PRODUCT_SUCCESS,
	UPDATE_PRODUCT_START,
	UPDATE_PRODUCT_SUCCESS
} from "../constants/ProductContants"

export const addProductStart = (product) => ({
	type: ADD_PRODUCT_START,
	payload: product
})

export const addProductSuccess = (product) => ({
	type: ADD_PRODUCT_SUCCESS,
	payload: product
})


export const updateProductStart = (product, id) => ({
	type: UPDATE_PRODUCT_START,
	payload: {
		product,
		id
	}
})

export const updateProductSuccess = (product, id) => ({
	type: UPDATE_PRODUCT_SUCCESS,
	payload: {
		product,
		id
	}
})

export const deleteProductStart = (id) => ({
	type: DELETE_PRODUCT_START,
	payload: id
})

export const deleteProductSuccess = (id) => ({
	type: DELETE_PRODUCT_SUCCESS,
	payload: id
})
