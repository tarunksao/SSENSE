import axios from 'axios';

export const findUsers = (params = {}) => {
	return axios.get('http://localhost:4000/users', {
		params: {
			email: params.email,
		},
	});
};

export const setUser = (data = {}) => {
	return axios.post('http://localhost:4000/users', {
		email: data.email,
		password: data.password,
	});
};
