import { combineReducers  } from 'redux';
import userState from './userStateReducer';
import googlePlaces from './googlePlacesReducer';

const rootReducer = combineReducers({
	userState,
	googlePlaces
});

export default rootReducer;
