import { GET_PLACES_SUCCESS, GET_PLACES_ERROR, GET_PLACES_REQUEST } from '../actions/googlePlacesActions';
import {INIT, LOADING, SUCCESS, ERROR} from '../utils/asyncStatusHelper';

export default function userState (state = {
			asyncStatus : INIT
		}, action = null) {
	switch (action.type) {
		case GET_PLACES_SUCCESS:
			return Object.assign({}, state, { 
				places : action.data.places,
				asyncStatus : SUCCESS
			});
		case GET_PLACES_ERROR :
			return Object.assign({}, state, {
				asyncStatus : ERROR	
			});			
		default:
			return state;
	}
}
