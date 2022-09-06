import { ADD_ROLE_START, ADD_ROLE_SUCCESS, DELETE_ROLE_START, DELETE_ROLE_SUCCESS, UPDATE_ROLE_START, UPDATE_ROLE_SUCCESS } from "../constants/RoleContants"

export const addRoleStart = (role) => ({
	type: ADD_ROLE_START,
	payload: role
})

export const addRoleSuccess = (role) => ({
	type: ADD_ROLE_SUCCESS,
	payload: role
})

export const updateRoleStart = (role, id) => ({
	type: UPDATE_ROLE_START,
	payload: {
		role,
		id
	}
})

export const updateRoleSuccess = (role, id) => ({
	type: UPDATE_ROLE_SUCCESS,
	payload: {
		role,
		id
	}
})

export const deleteRoleStart = (id) => ({
	type: DELETE_ROLE_START,
	payload: id
})

export const deleteRoleSuccess = (id) => ({
	type: DELETE_ROLE_SUCCESS,
	payload: id
})
