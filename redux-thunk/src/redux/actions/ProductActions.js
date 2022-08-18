import { LOAD_PRODUCT } from "../constants/ProductContants";

export const getProduct = () => (dispatch) => {
	try {
		const {data} = axios.get('');

		dispatch({type: LOAD_PRODUCT, payload: data})
	}catch(e) {

	}
}