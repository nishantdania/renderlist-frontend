import ApiCaller from './ApiCaller.js';
import baseConfig, { headers } from './BaseConfig.js';

export const GET_JOBS_SUCCESS = 'GET_JOBS_SUCCESS';

export function getJobsSuccessAction (data) {
	return {type : GET_JOBS_SUCCESS, data};
}

export function fetchJobsAction () {
	return dispatch => {
		return ApiCaller.get(Object.assign({}, baseConfig, {
			pathname : '/api/jobs',
			headers: Object.assign({}, headers)
			})).then(json => dispatch(getJobsSuccessAction(json)), err => {
				dispatch(getJobsSuccessAction(err));
			return Promise.reject(err);
			});
	};
}
