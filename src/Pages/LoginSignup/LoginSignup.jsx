import { Container } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import CheckLogin from './CheckLogin';
import ExistingUser from './ExistingUser';
import { findUsers } from './loginUsersApi';
import { Navigate } from 'react-router-dom';
import NewUser from './NewUser';

function LoginSignup() {
	const { state, dispatch } = useContext(AuthContext);

	const checkUser = () => {
		console.log(state.userEmail);
		findUsers({ email: state.userEmail })
			.then((res) => {
				console.log(res.data);
				console.log(res.data.length === 0 ? 'yes' : 'no');
			})
			.catch((err) => {
				console.log(err);
			})
			.finally((res) => {
				console.log(res);
			});
	};

	return (
		<Container textStyle='mainContainer'>
			{!state.newUser && !state.existingUser ? (
				<CheckLogin checkUser={checkUser} />
			) : state.newUser ? (
				<NewUser />
			) : state.existingUser ? (
				<ExistingUser />
			) : (
				<Navigate to='/' />
			)}
		</Container>
	);
}

export default LoginSignup;
