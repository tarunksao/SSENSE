import { createContext, useReducer } from 'react';
import authReducer from './authReducer';

export const AuthContext = createContext();

const initState = {
	isAuth: false,
	newUser: false,
	existingUser: false,
	userEmail: '',
	userPassword: '',
};

const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initState);

	const value = { state, dispatch };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
