import { fork, put, takeLatest } from 'redux-saga/effects'
import { addRoleSuccess, deleteRoleSuccess, updateRoleSuccess } from '../actions/RoleAction';
import { ADD_ROLE_START, DELETE_ROLE_START, UPDATE_ROLE_START } from '../constants/RoleContants';

function* addRoleSync({ payload }) {
	try {
		yield put(addRoleSuccess(payload))
	} catch (e) { }
}

function* updateRoleSync({ payload }) {
	try {
		yield put(updateRoleSuccess(payload.role, payload.id))
	} catch (e) { }
}

function* deleteRoleSync({ payload }) {
	try {
		yield put(deleteRoleSuccess(payload))
	} catch (e) { }
}
function* addRole() {
	yield takeLatest(ADD_ROLE_START, addRoleSync);
}

function* updateRole() {
	yield takeLatest(UPDATE_ROLE_START, updateRoleSync);
}

function* deleteRole() {
	yield takeLatest(DELETE_ROLE_START, deleteRoleSync);
}

const roleSaga = [
	fork(addRole),
	fork(updateRole),
	fork(deleteRole),
]

export default roleSaga;
