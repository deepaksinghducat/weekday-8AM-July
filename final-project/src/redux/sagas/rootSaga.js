import { all } from 'redux-saga/effects'
import customerSaga from './CustomerSaga';
import productSaga from './ProductSaga';
import roleSaga from './RoleSaga';


export default function* rootSaga() {
	yield all([
		...roleSaga, 
		...customerSaga,
		...productSaga
	])
}
