import { VERIFIED_SHOWREELS_REQUEST, VERIFIED_SHOWREELS_SUCCESS, VERIFIED_SHOWREELS_ERROR } from '../actions/showreelListActions';
import {INIT, LOADING, SUCCESS, ERROR} from '../utils/asyncStatusHelper';

export default function showreelList (state = {
			asyncStatus : INIT
		}, action = null) {
	switch (action.type) {
		case VERIFIED_SHOWREELS_SUCCESS :
			return Object.assign({}, state, { 
				asyncStatus : SUCCESS,
				data : action.data.showreels
			});
		case VERIFIED_SHOWREELS_ERROR :
			return Object.assign({}, state, {
				asyncStatus : ERROR	
			});			
		default:
			return state;
	}
}
