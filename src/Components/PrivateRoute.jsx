import { Box } from '@chakra-ui/layout';
import { useToast } from '@chakra-ui/toast';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
	const toast = useToast();
	const isAuth = false;

	if (!isAuth) {
		toast({
			position: 'top-left',
			duration: 3000,
			render: () => (
				<Box
					color='white'
					p={3}
					h={'50px'}
					w={'1535.3px'}
					m={'75px auto auto -7.7px'}
					bg='blackAlpha.900'
					align='center'
				>
					Please Login First
				</Box>
			),
		});

		return <Navigate to='/login' />;
	}
	return children;
}

export default PrivateRoute;
