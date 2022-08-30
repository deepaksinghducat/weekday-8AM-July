import { all } from 'redux-saga/effects'
import productWatcher from './ProductSaga';


function* rootSaga() {
	yield all([
		productWatcher()
	])
}


export default rootSaga;