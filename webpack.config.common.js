const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
	entry: {
		indexpage: './src/index.js',
		checkoutpage: './src/checkout.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|bower_components)/,
				use: [{
					loader: 'eslint-loader'
				},
				{
					loader: 'babel-loader',
					options: {
						cacheDirectory: '.babel_cache'
					}
				}]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'This is page title'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common'	// Specify the common bundle's name
		})
	],
	output: {
		filename: process.env.NODE_ENV === 'production' ? '[name].[hash].bundle.js' : '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	}
};

module.exports = config;