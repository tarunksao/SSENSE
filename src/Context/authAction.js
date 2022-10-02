export const newUser = { type: 'NEW_USER' };

export const existingUser = { type: 'EXISTING_USER' };

export const isUser = { type: 'AUTHENTICATE' };

export const goBack = { type: 'GO_BACK' };

export const getUser = (val) => {
	return {
		type: 'GET_USER',
		payload: val,
	};
};

export const setPassword = (val) => {
	return {
		type: 'SET_PASSWORD',
		payload: val,
	};
};
