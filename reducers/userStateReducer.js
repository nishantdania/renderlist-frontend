import { GET_USER_STATE_SUCCESS, GET_USER_STATE_ERROR, USER_NOT_LOGGED_IN } from '../actions/userStateActions';

export default function userState (state = {}, action = null) {
	switch (action.type) {
		case GET_USER_STATE_SUCCESS :
			if (action.data.success) {
				return Object.assign({}, state, { 
					isLoggedIn : true,
					user : action.data 
				});
			} else {
				localStorage.removeItem('token');
				return Object.assign({}, state, {
					isLoggedIn : false,
					user : {}		
				});
			}
		case GET_USER_STATE_ERROR :
		case USER_NOT_LOGGED_IN :
			localStorage.removeItem('token');
			return Object.assign({}, state, {
				isLoggedIn : false,
				user : {}	
			});			
		default:
			return state;
	}
}
