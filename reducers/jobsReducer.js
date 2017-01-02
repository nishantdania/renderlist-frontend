import { GET_JOBS_SUCCESS } from '../actions/jobsActions.js';
import {INIT, LOADING, SUCCESS, ERROR} from '../utils/asyncStatusHelper';

export default function jobs (state = {
			asyncStatus : INIT
		}, action = null) {
	switch (action.type) {
		case GET_JOBS_SUCCESS:
			return Object.assign({}, state, { 
				data : action.data,
				asyncStatus : SUCCESS
			});
		default:
			return state;
	}
}
