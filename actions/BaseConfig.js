export const headers = {
	'Content-Type': 'application/json'
};

const baseConfig = Object.assign({}, {headers}, {
	protocol: 'http',
	hostname: 'localhost:3000',
	credentials: 'include'
});

export default baseConfig;
