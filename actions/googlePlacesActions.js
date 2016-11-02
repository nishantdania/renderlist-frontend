import ApiCaller from './ApiCaller.js';
import baseConfig, { headers } from './BaseConfig.js';

export const GET_PLACES_REQUEST = 'GET_USER_STATE_REQUEST';
export const GET_PLACES_SUCCESS = 'GET_USER_STATE_SUCCESS';
export const GET_PLACES_ERROR = 'GET_USER_STATE_ERROR';

export function getPlacesAction () {
	return {type : GET_PLACES_REQUEST};
}

export function getPlacesSuccessAction (data) {
console.log(data);
	return {type : GET_PLACES_SUCCESS, data};
}

export function getPlacesErrorAction (error) {
	return {type : GET_PLACES_ERROR, error};
}

export function fetchPlacesAction (input) {
	let reqBody = { 'input' : input };
	return dispatch => {
		dispatch(getPlacesAction());
		return ApiCaller.post(Object.assign({}, baseConfig, {
			pathname : '/api/places',
			headers: Object.assign({}, headers)
			}), reqBody).then(json => dispatch(getPlacesSuccessAction(json)), err => {
				dispatch(getPlacesErrorAction(err));
			return Promise.reject(err);
			});
	};
}
