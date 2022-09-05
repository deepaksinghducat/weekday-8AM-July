import { put, takeEvery } from "redux-saga/effects";
import { ADD_ROLE, LOAD_ROLE } from "../constants/RoleContants";

function* loadRole() {
	const payload = ['asfdasf', 'fdsafdasf'];
	yield put(ADD_ROLE, payload)
}

function* roleWatch() {
	yield takeEvery(LOAD_ROLE, loadRole);
}

export default roleWatch

