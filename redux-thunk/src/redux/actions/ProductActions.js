import { LOAD_PRODUCT } from "../constants/ProductContants";
import axios from 'axios';

export const getProduct = () => async (dispatch) => {
	try {
		const { data } = await axios.get('https://fakestoreapi.com/products')

		dispatch({ type: LOAD_PRODUCT, payload: data })
	} catch (e) {
		dispatch({ type: LOAD_PRODUCT, payload: null })
	}
}