function authReducer(state, action) {
	switch (action.type) {
		case 'NEW_USER':
			return {
				...state,
				newUser: true,
				existingUser: false,
				isAuth: false,
				userEmail: '',
				userPassword: '',
			};
		case 'AUTHENTICATE':
			return {
				...state,
				newUser: false,
				existingUser: false,
				isAuth: true,
				userEmail: '',
				userPassword: '',
			};
		case 'EXISTING_USER':
			return {
				...state,
				newUser: false,
				existingUser: true,
				isAuth: false,
				userEmail: '',
				userPassword: '',
			};
		case 'GET_USER':
			return {
				...state,
				newUser: false,
				existingUser: false,
				isAuth: false,
				userEmail: action.payload,
				userPassword: '',
			};
		case 'SET_PASSWORD':
			return {
				...state,
				newUser: false,
				existingUser: false,
				isAuth: false,
				userEmail: '',
				userPassword: action.payload,
			};
		default:
			return state;
	}
}

export default authReducer;
