import axios from 'axios';

export const findUsers = (params = {}) => {
	return axios.get('http://localhost:4000/users', {
		params: {
			email: params.email,
		},
	});
};
