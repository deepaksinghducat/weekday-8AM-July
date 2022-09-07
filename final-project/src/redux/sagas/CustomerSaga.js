import { fork, put, takeLatest } from 'redux-saga/effects'
import { addCustomerSuccess, deleteCustomerSuccess, updateCustomerSuccess } from '../actions/CustomerAction';
import { ADD_CUSTOMER_START, DELETE_CUSTOMER_START, UPDATE_CUSTOMER_START } from '../constants/CustomerContants';

function* addCustomerSync({ payload }) {
	try {
		yield put(addCustomerSuccess(payload))
	} catch (e) { }
}

function* updateCustomerSync({ payload }) {
	try {
		yield put(updateCustomerSuccess(payload.customer, payload.id))
	} catch (e) { }
}

function* deleteCustomerSync({ payload }) {
	try {
		yield put(deleteCustomerSuccess(payload))
	} catch (e) { }
}

function* addCustomer() {
	yield takeLatest(ADD_CUSTOMER_START, addCustomerSync);
}

function* updateCustomer() {
	yield takeLatest(UPDATE_CUSTOMER_START, updateCustomerSync);
}

function* deleteCustomer() {
	yield takeLatest(DELETE_CUSTOMER_START, deleteCustomerSync);
}

const customerSaga = [
	fork(addCustomer),
	fork(updateCustomer),
	fork(deleteCustomer)
]

export default customerSaga;
