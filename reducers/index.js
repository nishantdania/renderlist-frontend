import { combineReducers  } from 'redux';
import userState from './userStateReducer';

const rootReducer = combineReducers({
	userState
});

export default rootReducer;
