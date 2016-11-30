import { GET_USER_STATE_SUCCESS, GET_USER_STATE_ERROR, USER_NOT_LOGGED_IN, LOGOUT } from '../actions/userStateActions';
import { ADD_STUDIO_SUCCESS } from '../actions/addStudioActions';
import {INIT, LOADING, SUCCESS, ERROR} from '../utils/asyncStatusHelper';

export default function userState (state = {
			asyncStatus : INIT
		}, action = null) {
	switch (action.type) {
		case GET_USER_STATE_SUCCESS :
			if (action.data && action.data.success) {
				return Object.assign({}, state, { 
					isLoggedIn : true,
					user : action.data,
					asyncStatus : SUCCESS
				});
			} else {
				if(typeof localStorage != 'undefined')
					localStorage.removeItem('token');
				return Object.assign({}, state, {
					isLoggedIn : false,
					user : {},
					asyncStatus : SUCCESS		
				});
			}
		case GET_USER_STATE_ERROR :
		case USER_NOT_LOGGED_IN :
		case LOGOUT :
			if(typeof localStorage != 'undefined')
				localStorage.removeItem('token');
			return Object.assign({}, state, {
				isLoggedIn : false,
				user : {},
				asyncStatus : ERROR	
			});			
		case ADD_STUDIO_SUCCESS : 
			var newUser = Object.assign({}, state.user, {
				hasStudio : true
			});
			return Object.assign({}, state, {
				user : newUser
			});	
		default:
			return state;
	}
}
