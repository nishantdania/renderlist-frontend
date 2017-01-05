import { SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_ERROR } from '../actions/contactActions.js';
import {INIT, LOADING, SUCCESS, ERROR} from '../utils/asyncStatusHelper';

export default function misc (state = {
			asyncStatus : INIT,
			contact : { asyncStatus : INIT }
		}, action = null) {
	switch (action.type) {
		case SEND_MESSAGE_REQUEST:
			return Object.assign({}, state, { 
				contact : {asyncStatus : LOADING}
			});
		case SEND_MESSAGE_SUCCESS:
		case SEND_MESSAGE_ERROR:
			return Object.assign({}, state, { 
				contact : {asyncStatus : SUCCESS}
			});
		default:
			return state;
	}
}
