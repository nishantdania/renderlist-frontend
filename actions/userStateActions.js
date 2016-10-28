import ApiCaller from './ApiCaller.js';
import baseConfig, { headers } from './BaseConfig.js';

export const GET_USER_STATE_REQUEST = 'GET_USER_STATE_REQUEST';
export const GET_USER_STATE_SUCCESS = 'GET_USER_STATE_SUCCESS';
export const GET_USER_STATE_ERROR = 'GET_USER_STATE_ERROR';

export function getUserStateAction () {
	return {type: GET_USER_STATE_REQUEST};
}

export function getUserStateSuccessAction (data) {
	return {type: GET_USER_STATE_SUCCESS, data};
}

export function getUserStateErrorAction (error) {
	return {type: GET_USER_STATE_ERROR, error};
}

export function fetchUserStateAction (requestHeaders) {
	let token = localStorage.token || '';
	let reqBody = { 'token' : token };
	return dispatch => {
		dispatch(getUserStateAction());
		return ApiCaller.post(Object.assign({}, baseConfig, {
			pathname: '/api/userState',
			headers: Object.assign({}, headers, requestHeaders)
			}), reqBody).then(json => dispatch(getUserStateSuccessAction(json)), err => {
				dispatch(getUserStateErrorAction(err));
			return Promise.reject(err);
			});
	};
}
