import { combineReducers  } from 'redux';
import userState from './userStateReducer';
import googlePlaces from './googlePlacesReducer';
import addShowreel from './addStudioReducer';
import showreelList from './showreelListReducer';
import profile from './profileReducer';
import searchResults from './searchResultsReducer';
import jobs from './jobsReducer';

const rootReducer = combineReducers({
	userState,
	googlePlaces,
	addShowreel,
	showreelList,
	profile,
	searchResults,
	jobs
});

export default rootReducer;
