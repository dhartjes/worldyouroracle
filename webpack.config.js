var path = require("path");
var webpack = require("webpack");

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractCSS = new ExtractTextPlugin({ filename: 'css.bundle.css' });

module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: extractCSS.extract({ // Instance 1
					fallback: 'style-loader',
					use: ['css-loader']
				})
			}
		],
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css?sourceMap'
			}, /* {
				test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff"
			}, {
				test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff"
			}, {
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url-loader?limit=10000&mimetype=application/octet-stream"
			}, {
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: "file-loader"
			}, {
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url-loader?limit=10000&mimetype=image/svg+xml"
			}
 */
			{
				test: /\.less$/,
				loader: 'less-loader' // compiles Less to CSS
			},
			{
				test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
				//test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/
				loader: 'url-loader?limit=100000&name=[name].[ext]'
			}

			//test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,

			/* 			{
							test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
							loader: "url-loader?limit=10000&mimetype=application/font-woff"
						},
						{
							test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
							loader: "file-loader?name=fonts/[name].[ext]"
						} */
		]
},
	resolve: {
	extensions: [".js", "min.js"],
		modules: [
			//"node_modules",
			path.resolve(__dirname, "app"),
			path.resolve(__dirname, "app/lib"),
			path.resolve(__dirname, "app/lib/kendo-ui-core/js"),
			path.resolve(__dirname, "app/lib/jQueryEventCalendar/js"),
			path.resolve(__dirname, "node_modules")
			//<script src="app/lib/jQueryEventCalendar/js/moment.js" type="text/javascript"></script>
			// <script src="app/lib/jQueryEventCalendar/js/jquery.eventCalendar.js" type="text/javascript"></script>
		]
},
entry: "./app/index.js",
	output: {
	filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
},
externals: [
	require('webpack-require-http')
],
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),
		// Fixes warning in moment.js with locales
		// 	Module not found: Error: Can't resolve './locale' in ...
		new webpack.IgnorePlugin(/\.\/locale$/),
		new ExtractTextPlugin("styles.css")
	]
};