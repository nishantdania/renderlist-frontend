import { UPLOAD_REQUEST, UPLOAD_SUCCESS, UPLOAD_ERROR,
	ADD_STUDIO_REQUEST, ADD_STUDIO_SUCCESS, ADD_STUDIO_ERROR } from '../actions/addStudioActions';
import {INIT, LOADING, SUCCESS, ERROR} from '../utils/asyncStatusHelper';

export default function addShowreel (state = {
			asyncStatus : INIT,
			uploadStatus : INIT
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
		case UPLOAD_SUCCESS :
			if (action.data.success) 
				return Object.assign({}, state, {
					uploadStatus : SUCCESS
				});
			else {
				return Object.assign({}, state, {
					uploadStatus : ERROR
				});
			}	
		case UPLOAD_ERROR : 
			return Object.assign({}, state, {
				uploadStatus : ERROR
			});
		case UPLOAD_REQUEST : 
			return Object.assign({}, state, {
				uploadStatus : LOADING
			});
		default:
			return state;
	}
}
