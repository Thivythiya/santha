const path = require('path');
const webpack = require('webpack');

const config = {
	entry:'./src/index.js',

	output:{
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	module:{
		rules:[
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use:{
					loader:'babel-loader',
					options: {
					 	presets: ['env','react']
					}
				}
			},
			{
				 test: /\.scss$/,
 			     use: ['style-loader', 'css-loader' ,'sass-loader']
			}
		]
	},
	resolve:{
		extensions:['.js','.jsx','.css','.scss']
	},

	devServer:{
		contentBase: path.join(__dirname, 'dist')
	}

};

module.exports = config;
