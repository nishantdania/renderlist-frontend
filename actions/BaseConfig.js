export const headers = {
	'Content-Type': 'application/json'
};

const baseConfig = Object.assign({}, {headers}, {
	protocol: 'http',
	hostname: process.env.NODE_ENV=='production' ? 'www.renderlist.com' : 'localhost:3000',
	credentials: 'include'
});

export default baseConfig;
