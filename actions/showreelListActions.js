import ApiCaller from './ApiCaller.js';
import baseConfig, { headers } from './BaseConfig.js';

export const VERIFIED_SHOWREELS_REQUEST = 'VERIFIED_SHOWREELS_REQUEST';
export const VERIFIED_SHOWREELS_SUCCESS = 'VERIFIED_SHOWREELS_SUCCESS';
export const VERIFIED_SHOWREELS_ERROR = 'VERIFIED_SHOWREELS_ERROR';

export function getVerifiedShowreelsRequestAction () {
	return {type : VERIFIED_SHOWREELS_REQUEST};
}

export function getVerifiedShowreelsSuccessAction (data) {
	return {type : VERIFIED_SHOWREELS_SUCCESS, data};
}

export function getVerifiedShowreelsErrorAction (error) {
	return {type : VERIFIED_SHOWREELS_ERROR, error};
}

export function getVerifiedShowreelsAction () {
	return dispatch => {
		dispatch(getVerifiedShowreelsRequestAction());
		return ApiCaller.get(Object.assign({}, baseConfig, {
			pathname : '/api/verifiedShowreels',
			headers: Object.assign({}, headers)
			})).then(json => dispatch(getVerifiedShowreelsSuccessAction(json)), err => {
				dispatch(getVerifiedShowreelsErrorAction(err));
			return Promise.reject(err);
			});
	};
}
