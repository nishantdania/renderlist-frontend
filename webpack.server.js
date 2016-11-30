var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var APP_DIR = path.resolve(__dirname);

var nodeModules = {};
fs.readdirSync('node_modules')
	.filter(function(x) {
		return ['.bin'].indexOf(x) === -1;
	})
	.forEach(function(mod) {
		nodeModules[mod] = 'commonjs ' + mod;
});

module.exports = {
	entry: APP_DIR + '/server.js',
	target: 'node',
	output: {
		path: APP_DIR,
		filename: 'serverEntry.js'
	},
	externals: nodeModules,
	module : {
		loaders : [
			{
				test : /\.js?/,
				loader : 'babel-loader'
			},
			{
				test : /\.ejs?/,
				loader : 'ejs-loader'
			},
			{
				test: /\.css$/,
				loaders : ['isomorphic-style-loader','css?localIdentName=[name]_[local]_[hash:base64:6]&modules&-autoprefixer!postcss'] 
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	},
	postcss: [
		require('postcss-import')({
			path: __dirname
		}),
		require('postcss-cssnext')({
			browsers: ['Chrome >= 31', 'Firefox >= 31', 'IE >= 9', 'Safari >= 8'],
			url: false
		}),
		require('postcss-nested')
	],
	resolve: {
		root: path.resolve(__dirname),
		extensions: ['', '.js', '.jsx', '.css', '.svg', '.ejs'],
		modulesDirectories: [
			'.', 'build', 'public'
		],
		fallback: path.join(__dirname, 'node_modules')
	},
	resolveLoader: {
		fallback: path.join(__dirname, 'node_modules'),
		alias: {
			'ejs': 'ejs-loader'
		}
   },
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				  'NODE_ENV': JSON.stringify(process.env.NODE_ENV) || '"development"'
			}
		})
	]
};
