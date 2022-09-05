import { ADD_ROLE, LOAD_ROLE, REMOVE_ROLE } from "../constants/RoleContants";

const initialRoleState = {
	roles: [],
}

export const RoleReducer = (state = initialRoleState, action) => {
	
	switch (action.type) {
		case LOAD_ROLE:

			console.log(action);

			return {
				...state,
				roles: [...action.payload]
			}

		case ADD_ROLE:

			return {
				...state,
				roles: [...state.roles, action.payload]
			}

		case REMOVE_ROLE:

			state.roles.splice(action.payload, 1);

			return {
				...state,
				roles: [...state.roles]
			}

		default:
			return state;
	}

}