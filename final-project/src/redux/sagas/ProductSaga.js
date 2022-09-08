import { fork, put, takeLatest } from 'redux-saga/effects'
import { addProductSuccess, deleteProductSuccess, updateProductSuccess } from '../actions/ProductAction';
import { ADD_PRODUCT_START, DELETE_PRODUCT_START, UPDATE_PRODUCT_START } from '../constants/ProductContants';

function* addProductSync({ payload }) {
	try {
		yield put(addProductSuccess(payload))
	} catch (e) { }
}

function* updateProductSync({ payload }) {
	try {
		yield put(updateProductSuccess(payload.product, payload.id))
	} catch (e) { }
}

function* deleteProductSync({ payload }) {
	try {
		yield put(deleteProductSuccess(payload))
	} catch (e) { }
}
function* addProduct() {
	yield takeLatest(ADD_PRODUCT_START, addProductSync);
}

function* updateProduct() {
	yield takeLatest(UPDATE_PRODUCT_START, updateProductSync);
}

function* deleteProduct() {
	yield takeLatest(DELETE_PRODUCT_START, deleteProductSync);
}

const productSaga = [
	fork(addProduct),
	fork(updateProduct),
	fork(deleteProduct),
]
export default productSaga;