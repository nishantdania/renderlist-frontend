import ApiCaller from './ApiCaller.js';
import baseConfig, { headers } from './BaseConfig.js';

export const ADD_STUDIO_REQUEST = 'ADD_STUDIO_REQUEST';
export const ADD_STUDIO_SUCCESS = 'ADD_STUDIO_SUCCESS';
export const ADD_STUDIO_ERROR = 'ADD_STUDIO_ERROR';

export function addStudioRequestAction () {
	return {type : ADD_STUDIO_REQUEST};
}

export function addStudioSuccessAction (data) {
	return {type : ADD_STUDIO_SUCCESS, data};
}

export function addStudioErrorAction (error) {
console.log(error);
	return {type : ADD_STUDIO_ERROR, error};
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
