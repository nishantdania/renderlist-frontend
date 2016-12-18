import { combineReducers  } from 'redux';
import userState from './userStateReducer';
import googlePlaces from './googlePlacesReducer';
import addStudio from './addStudioReducer';
import showreelList from './showreelListReducer';

const rootReducer = combineReducers({
	userState,
	googlePlaces,
	addStudio,
	showreelList
});

export default rootReducer;
