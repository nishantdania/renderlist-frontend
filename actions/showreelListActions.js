import ApiCaller from './ApiCaller.js';
import baseConfig, { headers } from './BaseConfig.js';

export const VERIFIED_SHOWREELS_REQUEST = 'VERIFIED_SHOWREELS_REQUEST';
export const VERIFIED_SHOWREELS_SUCCESS = 'VERIFIED_SHOWREELS_SUCCESS';
export const VERIFIED_SHOWREELS_ERROR = 'VERIFIED_SHOWREELS_ERROR';
export const SEARCH_SHOWREELS_REQUEST = 'SEARCH_SHOWREELS_REQUEST';
export const SEARCH_SHOWREELS_SUCCESS = 'SEARCH_SHOWREELS_SUCCESS';
export const SEARCH_SHOWREELS_ERROR = 'SEARCH_SHOWREELS_ERROR';

export function getVerifiedShowreelsRequestAction () {
	return {type : VERIFIED_SHOWREELS_REQUEST};
}

export function getVerifiedShowreelsSuccessAction (data) {
	return {type : VERIFIED_SHOWREELS_SUCCESS, data};
}

export function getVerifiedShowreelsErrorAction (error) {
	return {type : VERIFIED_SHOWREELS_ERROR, error};
}

export function searchShowreelsRequestAction () {
	return {type : SEARCH_SHOWREELS_REQUEST};
}

export function searchShowreelsSuccessAction (data) {
	return {type : SEARCH_SHOWREELS_SUCCESS, data};
}

export function searchShowreelsErrorAction (error) {
	return {type : SEARCH_SHOWREELS_ERROR, error};
}

export function getVerifiedShowreelsAction (sortId = 0) {
	let reqBody = {"sortId" : sortId};
	return dispatch => {
		dispatch(getVerifiedShowreelsRequestAction());
		return ApiCaller.post(Object.assign({}, baseConfig, {
			pathname : '/api/verifiedShowreels',
			headers: Object.assign({}, headers)
			}), reqBody).then(json => dispatch(getVerifiedShowreelsSuccessAction(json)), err => {
				dispatch(getVerifiedShowreelsErrorAction(err));
			return Promise.reject(err);
			});
	};
}

export function searchShowreelsAction (query, sortId = 0) {
	let reqBody = {"searchQuery" : query, "sortId" : sortId};
	return dispatch => {
		dispatch(searchShowreelsRequestAction());
		return ApiCaller.post(Object.assign({}, baseConfig, {
			pathname : '/api/search',
			headers: Object.assign({}, headers)
			}), reqBody).then(json => dispatch(searchShowreelsSuccessAction(json)), err => {
				dispatch(searchShowreelsErrorAction(err));
			return Promise.reject(err);
			});
	};
}
