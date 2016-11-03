import { ADD_STUDIO_REQUEST, ADD_STUDIO_SUCCESS, ADD_STUDIO_ERROR } from '../actions/addStudioActions';
import {INIT, LOADING, SUCCESS, ERROR} from '../utils/asyncStatusHelper';

export default function userState (state = {
			asyncStatus : INIT
		}, action = null) {
	switch (action.type) {
		case ADD_STUDIO_SUCCESS :
			return Object.assign({}, state, { 
				asyncStatus : SUCCESS
			});
		case ADD_STUDIO_ERROR :
			return Object.assign({}, state, {
				asyncStatus : ERROR	
			});			
		default:
			return state;
	}
}
