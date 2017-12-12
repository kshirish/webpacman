const webpack = require('webpack');
const common = require('./webpack.config.common');
const merge = require('webpack-merge');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');

module.exports = merge(common, {
	devtool: 'source-map',	
	plugins: [
		new UglifyjsWebpackPlugin({
			sourceMap: true
		}),
		new WebpackManifestPlugin()
	]
});