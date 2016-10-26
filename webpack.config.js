var webpack = require('webpack');
var path = require('path');
var CompressionPlugin = require("compression-webpack-plugin");
var Extract = require('extract-text-webpack-plugin');

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
			},
			{
				test: /\.css$/,
				include : APP_DIR,
				loader : Extract.extract('style', 'css?localIdentName=[name]_[local]_[hash:base64:6]&modules&-autoprefixer!postcss')
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
	plugins: [
		new Extract('bundle.css',
			{ allChunks: true  }),
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
