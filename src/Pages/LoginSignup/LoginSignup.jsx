import { Container } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import CheckLogin from './CheckLogin';
import ExistingUser from './ExistingUser';
import { findUsers, setUser } from './loginUsersApi';
import { Navigate } from 'react-router-dom';
import NewUser from './NewUser';
import { existingUser, newUser } from '../../Context/authAction';

function LoginSignup() {
	const { state, dispatch } = useContext(AuthContext);

	const checkUser = () => {
		console.log(state.userEmail);
		findUsers({ email: state.userEmail })
			.then((res) => {
				// console.log(res.data);
				res.data.length === 0 ? dispatch(newUser) : dispatch(existingUser);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally((res) => {
				console.log(res);
			});
	};

	const newUserRegister = () => {
		setUser({ email: state.userEmail, password: state.password }).then(
			(res) => {
				console.log(res.data);
			}
		);
	};

	return (
		<Container textStyle='mainContainer'>
			{!state.newUser && !state.existingUser ? (
				<CheckLogin checkUser={checkUser} />
			) : state.newUser ? (
				<NewUser newUserRegister={newUserRegister} />
			) : state.existingUser ? (
				<ExistingUser />
			) : (
				<Navigate to='/' />
			)}
		</Container>
	);
}

export default LoginSignup;
