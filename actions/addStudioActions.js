import ApiCaller from './ApiCaller.js';
import baseConfig, { headers } from './BaseConfig.js';

export const ADD_STUDIO_REQUEST = 'ADD_STUDIO_REQUEST';
export const ADD_STUDIO_SUCCESS = 'ADD_STUDIO_SUCCESS';
export const ADD_STUDIO_ERROR = 'ADD_STUDIO_ERROR';
export const UPLOAD_REQUEST = 'UPLOAD_REQUEST';
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
export const UPLOAD_ERROR = 'UPLOAD_ERROR';

export function addStudioRequestAction () {
	return {type : ADD_STUDIO_REQUEST};
}

export function addStudioSuccessAction (data) {
	return {type : ADD_STUDIO_SUCCESS, data};
}

export function addStudioErrorAction (error) {
	return {type : ADD_STUDIO_ERROR, error};
}

export function uploadShowreelSuccessAction (data) {
	return {type : UPLOAD_SUCCESS, data};
}

export function uploadShowreelRequestAction () {
	return {type : UPLOAD_REQUEST};
}

export function uploadShowreelErrorAction (error) {
	return {type : UPLOAD_ERROR, error};
}

export function addStudioAction (data) {
	let reqBody = data;
	const token = localStorage.token || '';
	let headers = {
		'authorization' : token,
		'Content-Type' : 'application/json' 
	};
	return dispatch => {
		dispatch(addStudioRequestAction());
		return ApiCaller.post(Object.assign({}, baseConfig, {
			pathname : '/api/addStudio',
			headers: Object.assign({}, headers)
			}), reqBody).then(json => dispatch(addStudioSuccessAction(json)), err => {
				dispatch(addStudioErrorAction(err));
			return Promise.reject(err);
			});
	};
}

export function uploadShowreelAction (data) {
	let reqBody = data;
	let headers = {};
	return dispatch => {
		dispatch(uploadShowreelRequestAction());
		return ApiCaller.postFile(Object.assign({}, baseConfig, {
			pathname : '/api/upload',
			headers: Object.assign({}, headers)
			}), reqBody).then(json => dispatch(uploadShowreelSuccessAction(json)), err => {
				dispatch(uploadShowreelErrorAction(err));
			return Promise.reject(err);
			});
	};
}
