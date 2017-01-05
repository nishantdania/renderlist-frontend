import { PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_ERROR, CLEAR_PROFILE_REQUEST, MY_PROFILE_SUCCESS } from '../actions/profileActions';
import {INIT, LOADING, SUCCESS, ERROR} from '../utils/asyncStatusHelper';

export default function profile (state = {
			asyncStatus : INIT
		}, action = null) {
	switch (action.type) {
		case PROFILE_REQUEST :
			return Object.assign({}, state, { 
				asyncStatus : LOADING
			});
		case PROFILE_SUCCESS :
			if (action.data.data)
			return Object.assign({}, state, { 
				asyncStatus : SUCCESS,
				data : action.data.data.profile || {}
			});
			else
			return Object.assign({}, state, { 
				asyncStatus : SUCCESS,
				data : undefined
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
		case MY_PROFILE_SUCCESS:
			return Object.assign({}, state, {
				myProfile : action.data.data.profile	
			});
		default:
			return state;
	}
}
