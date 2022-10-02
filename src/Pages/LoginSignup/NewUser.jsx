import { Box, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { goBack, setPassword } from '../../Context/authAction';
import { AuthContext } from '../../Context/AuthContext';
import styles from './LoginSignup.module.css';

const NewUser = ({ newUserRegister }) => {
	const { state, dispatch } = useContext(AuthContext);

	// console.log(state.userEmail);

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
				readOnly
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
			<button
				className={styles.loginButton}
				onClick={newUserRegister}
			>
				CREATE AN ACCOUNT
			</button>
			<Text
				fontSize='xs'
				mt={8}
				mb={1}
				textAlign='center'
				onClick={() => dispatch(goBack)}
			>
				BACK
			</Text>
			<Text
				fontSize='2xs'
				mt={8}
				mb={1}
			>
				When you create an SSENSE account, we collect your email and other
				personal data to enhance your shopping experience and, subject to your
				agreement, to provide you with exclusive email updates, promotions and
				notifications. We may also use third party search engines and social
				media platforms to deliver our updates, promotions and notifications to
				you.
			</Text>
			<Text
				fontSize='2xs'
				mt={2}
			>
				You may unsubscribe at any time.
			</Text>
			<Text
				fontSize='2xs'
				mt={2}
			>
				To find out more, please visit our Privacy Policy.
			</Text>
		</Box>
	);
};

export default NewUser;
