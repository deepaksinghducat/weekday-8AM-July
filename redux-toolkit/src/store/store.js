
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

const taskReducer = (state = { task: [] }, action) => {
	if(action.type === 'add-task-one') {
		return {
			...state,
			task: [...state.task, 'dfasfdsaf']
		}
	}
	return state;
}
const taskReducer1 = (state = { task1: [] }, action) => {
	return state;
}
const taskReducer2 = (state = { task2: [] }, action) => {
	return state;
}
const taskReducer3 = (state = { task3: [] }, action) => {
	return state;
}
const taskReducer4 = (state = { task4: [] }, action) => {
	return state;
}

const reducers = combineReducers({
	task: taskReducer,
	taskTwo: taskReducer1,
	taskThreee: taskReducer2,
	taskFour: taskReducer3,
	taskOne: taskReducer4,
});

const initialState = {}

const middleware = [];

const store  = configureStore({
	reducer: reducers,
	initialState,
	middleware,
	devTools : true
})

export default store;