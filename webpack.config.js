var webpack = require('webpack');
var path = require('path');
var CompressionPlugin = require("compression-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR = path.resolve(__dirname);

var config = {
	entry: APP_DIR + '/client.js',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module : {
		loaders : [
			{
				test : /\.jsx?/,
				include : APP_DIR,
				loader : 'babel'
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({minimize: true}),
		new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		})
	]
};

module.exports = config;
