import { all, fork } from 'redux-saga/effects'
import roleWatch from './RoleSaga';


const rootSagas = [
	fork(roleWatch)
]


function* rootSaga() {
	yield all([
		...rootSagas
	])
}


export default rootSaga;