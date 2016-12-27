import { PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_ERROR, CLEAR_PROFILE_REQUEST } from '../actions/profileActions';
import {INIT, LOADING, SUCCESS, ERROR} from '../utils/asyncStatusHelper';

export default function profile (state = {
			asyncStatus : INIT
		}, action = null) {
	switch (action.type) {
		case PROFILE_SUCCESS :
			return Object.assign({}, state, { 
				asyncStatus : SUCCESS,
				data : action.data.data.profile
			});
		case PROFILE_ERROR :
			return Object.assign({}, state, {
				asyncStatus : ERROR	
			});			
		case CLEAR_PROFILE_REQUEST :
			return Object.assign({}, state, {
				data : {},
				asyncStatus : INIT
			});
		default:
			return state;
	}
}
