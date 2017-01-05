import { combineReducers  } from 'redux';
import userState from './userStateReducer';
import googlePlaces from './googlePlacesReducer';
import addShowreel from './addStudioReducer';
import showreelList from './showreelListReducer';
import profile from './profileReducer';
import searchResults from './searchResultsReducer';
import jobs from './jobsReducer';
import misc from './miscReducer.js';

const rootReducer = combineReducers({
	userState,
	googlePlaces,
	addShowreel,
	showreelList,
	profile,
	searchResults,
	jobs,
	misc
});

export default rootReducer;
