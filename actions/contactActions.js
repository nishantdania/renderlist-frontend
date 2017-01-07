import ApiCaller from './ApiCaller.js';
import baseConfig, { headers } from './BaseConfig.js';

export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_ERROR = 'SEND_MESSAGE_ERROR';
export const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST';

export function sendMessageSuccessAction (data) {
	return {type : SEND_MESSAGE_SUCCESS, data};
}

export function sendMessageErrorAction (error) {
	return {type : SEND_MESSAGE_ERROR, error};
}

export function sendMessageRequestAction () {
	return {type : SEND_MESSAGE_REQUEST};
}

export function sendMessageAction (data) {
	let reqBody = data;
	return dispatch => {
		dispatch(sendMessageRequestAction());
		return ApiCaller.post(Object.assign({}, baseConfig, {
			pathname : '/api/contact',
			headers: Object.assign({}, headers)
			}), reqBody).then(json => dispatch(sendMessageSuccessAction(json)), err => {
				dispatch(sendMessageErrorAction(err));
			return Promise.reject(err);
			});
	};
}
