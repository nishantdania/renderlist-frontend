export const INIT = 'INIT';
export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

function getStatus (x, asyncStatusKey = 'asyncStatus') {
	return typeof x === 'object' ? x[asyncStatusKey] : x;
}

export function isInit (x, asyncStatusKey) {
	const status = getStatus(x, asyncStatusKey);
	return status === INIT;
}

export function isLoading (x, asyncStatusKey) {
	const status = getStatus(x, asyncStatusKey);
	return status === LOADING;
}

export function isSuccess (x, asyncStatusKey) {
	const status = getStatus(x, asyncStatusKey);
	return status === SUCCESS;
}

export function isError (x, asyncStatusKey) {
	const status = getStatus(x, asyncStatusKey);
	return status === ERROR;
}

export function isCompleted (x, asyncStatusKey) {
	const status = getStatus(x, asyncStatusKey);
	return isSuccess(status) || isError(status);
}
