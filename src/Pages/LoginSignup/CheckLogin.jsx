import { Box, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { getUser } from '../../Context/authAction';
import { AuthContext } from '../../Context/AuthContext';
import styles from './LoginSignup.module.css';

const CheckLogin = ({ checkUser }) => {
	const { state, dispatch } = useContext(AuthContext);

	// console.log(state.userEmail);

	return (
		<Box mt={20}>
			<Text
				fontSize='xs'
				my={4}
			>
				LOGIN OR CREATE ACCOUNT
			</Text>
			<Text
				fontSize='2xs'
				my={2}
			>
				Email Address
			</Text>
			<input
				className={styles.inputBox}
				type='email'
				name='email'
				value={state.userEmail}
				onChange={(e) => dispatch(getUser(e.target.value))}
			/>
			<br />
			<button
				className={styles.loginButton}
				onClick={checkUser}
			>
				CONTINUE
			</button>
		</Box>
	);
};

export default CheckLogin;
