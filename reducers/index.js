import { combineReducers  } from 'redux';
import userState from './userStateReducer';
import googlePlaces from './googlePlacesReducer';
import addStudio from './addStudioReducer';
import showreelList from './showreelListReducer';
import profile from './profileReducer';

const rootReducer = combineReducers({
	userState,
	googlePlaces,
	addStudio,
	showreelList,
	profile
});

export default rootReducer;
