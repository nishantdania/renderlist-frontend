import {  SEARCH_SHOWREELS_SUCCESS, SEARCH_SHOWREELS_ERROR } from '../actions/showreelListActions';
import {INIT, LOADING, SUCCESS, ERROR} from '../utils/asyncStatusHelper';

export default function searchResults (state = {
			asyncStatus : INIT
		}, action = null) {
	switch (action.type) {
		case SEARCH_SHOWREELS_SUCCESS :
			return Object.assign({}, state, { 
				asyncStatus : SUCCESS,
				data : action.data.showreels
			});
		case SEARCH_SHOWREELS_ERROR :
			return Object.assign({}, state, {
				asyncStatus : ERROR	
			});			
		default:
			return state;
	}
}
