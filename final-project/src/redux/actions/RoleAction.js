import { LOAD_ROLE } from "../constants/RoleContants"

export const getRoles = (users) => ({
	type: LOAD_ROLE,
	payload: users
})