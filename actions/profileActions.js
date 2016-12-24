import ApiCaller from './ApiCaller.js';
import baseConfig, { headers } from './BaseConfig.js';

export const PROFILE_REQUEST = 'PROFILE_REQUEST';
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
export const PROFILE_ERROR = 'PROFILE_ERROR';
export const CLEAR_PROFILE_REQUEST = 'CLEAR_PROFILE_REQUEST';

export function getProfileRequestAction () {
	return {type : PROFILE_REQUEST};
}

export function getProfileSuccessAction (data) {
	return {type : PROFILE_SUCCESS, data};
}

export function getProfileErrorAction (error) {
	return {type : PROFILE_ERROR, error};
}

export function clearProfileRequestAction () {
	return {type : CLEAR_PROFILE_REQUEST};
}

export function clearProfileAction () {
	return dispatch => {
		dispatch(clearProfileRequestAction());
	};
}

export function getProfileAction (username) {
	let reqBody = {'username' : username}; 
	return dispatch => {
		dispatch(getProfileRequestAction());
		return ApiCaller.post(Object.assign({}, baseConfig, {
			pathname : '/api/profile',
			headers: Object.assign({}, headers)
			}), reqBody).then(json => dispatch(getProfileSuccessAction(json)), err => {
				dispatch(getProfileErrorAction(err));
			return Promise.reject(err);
			});
	};
}

export function incViewsAction (username) {
	let reqBody = {'username' : username}; 
	return dispatch => {
		return ApiCaller.post(Object.assign({}, baseConfig, {
			pathname : '/api/incViews',
			headers: Object.assign({}, headers)
			}), reqBody);
	}
}
