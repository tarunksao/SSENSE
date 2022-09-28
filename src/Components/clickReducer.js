function clickReducer(state, action) {
	switch (action.type) {
		case 'MEN':
			return {
				...state,
				men: true,
				women: false,
				else: false,
			};
		case 'WOMEN':
			return {
				...state,
				men: false,
				women: true,
				else: false,
			};
		case 'EVERYTHING-ELSE':
			return {
				...state,
				men: false,
				women: false,
				else: true,
			};
		default:
			return {
				...state,
				men: true,
				women: false,
				else: false,
			};
	}
}

export default clickReducer;
