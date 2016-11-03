import { combineReducers  } from 'redux';
import userState from './userStateReducer';
import googlePlaces from './googlePlacesReducer';
import addStudio from './addStudioReducer';

const rootReducer = combineReducers({
	userState,
	googlePlaces,
	addStudio
});

export default rootReducer;
