var path =require('path')
var webpack=require('webpack')
var ExtractTextPlugin=require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var config={
	entry:{
		main:path.resolve(__dirname,'js/main.js'),
		vendor:['react','react-dom','react-router','object-assign','whatwg-fetch']
	},
	output:{
		filename:'[name].bundle.js',
		path:path.resolve(__dirname,"dist"),
		publicPath:'/dist/'
	},
	module:{
		loaders:[
			{
	          test: /\.jsx?$/,
	          loader: 'react-hot!babel-loader',
	          include: path.join(__dirname, 'js'),
	       },{
	       	  test:/\.css$/,
	       	  exclude: /node_modules/,
        	  loader:ExtractTextPlugin.extract('style-loader', 'css-loader')
	       },{
	       	  test: /\.(png|jpg|jpeg|gif)$/,
	       	  loader:'url?limit=8192&name=img/[name].[ext]'
	       }
		]
	},
	resolve:{
	  extensions:['','.js','.jsx','.css'],
	},
	plugins:[
	    new ExtractTextPlugin('app.css'),
	    new webpack.optimize.CommonsChunkPlugin('vendor','vendor.js')
	]
}
module.exports=config
