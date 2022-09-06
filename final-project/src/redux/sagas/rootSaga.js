import { all } from 'redux-saga/effects'
import roleSaga from './RoleSaga';


export default function* rootSaga() {
	yield all([...roleSaga])
}
