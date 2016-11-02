class ApiCaller {
	
	get (config) {
		config.method = 'GET';
		return this.call(config, null);
	}

	post (config, reqBody) {
		config.method = 'POST';
		let body = typeof reqBody === 'string' ? reqBody : JSON.stringify(reqBody);

		return this.call(config, body);
	}

	getURL (config) {
		var url = config.protocol + '://' + config.hostname + config.pathname;
		return url;
	}

	call (config, body) {
		let extracts = ['method', 'headers', 'body', 'referrer', 'mode', 'credentials', 'cache', 'redirect', 'integrity', 'window'];
		let options = {};

		extracts.map(key => {
			if (typeof config[key] !== 'undefined') options[key] = config[key];
		});
		options.body = body;
		const mainPromise = fetch (this.getURL(config), options)
			.then(
				response => {
					return response.json();
		},
				error => {
					return Promise.reject(error);
		}
		).catch(error => {
			//
		});

		return mainPromise;
	}
}

export default new ApiCaller();
