import { put, takeEvery } from 'redux-saga/effects'

function* loadProduct() {
	yield put("LOAD_PRODUCT", {payload: {}})
}

function* productWatcher() {
	console.log("fsadfdasf");
	yield takeEvery("LOAD_PRODUCT", loadProduct )
}

export default productWatcher;