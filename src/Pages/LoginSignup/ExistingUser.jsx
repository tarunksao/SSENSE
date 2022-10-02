import { Box, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { goBack, setPassword } from '../../Context/authAction';
import { AuthContext } from '../../Context/AuthContext';
import styles from './LoginSignup.module.css';

const ExistingUser = () => {
	const { state, dispatch } = useContext(AuthContext);

	return (
		<Box
			mt={20}
			px={4}
			// border='1px solid'
		>
			<Text
				fontSize='xs'
				my={4}
			>
				CREATE AN ACCOUNT
			</Text>
			<Text
				fontSize='2xs'
				mt={4}
				mb={1}
			>
				Email Address
			</Text>
			<input
				className={styles.inputBox}
				type='email'
				name='email'
				value={state.userEmail}
			/>
			<br />
			<Text
				fontSize='2xs'
				mt={8}
				mb={1}
			>
				Password
			</Text>
			<input
				className={styles.inputBox}
				type='password'
				name='password'
				value={state.userPassword}
				onChange={(e) => dispatch(setPassword(e.target.value))}
			/>
			<br />
			<button className={styles.loginButton}>CONTINUE</button>
			<Text
				fontSize='2xs'
				mt={8}
				mb={1}
				textAlign='center'
				textDecoration='underline'
				onClick={() => dispatch(goBack)}
			>
				NOT YOUR EMAIL?
			</Text>
		</Box>
	);
};

export default ExistingUser;
