"use strict";
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");


module.exports = {
	devtool: "source-map",
	mode: "development",
	entry: {
		app: "./src/main.js"
	},
	output: {
		path: path.resolve(__dirname, "dist")
	},
	resolve: {
		extensions: [".js", ".vue", ".json"],
		alias: {
			'vue$': path.resolve(__dirname, "node_modules/vue")
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{
				test: /\.js$/,
				loader: "babel-loader"
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: "index.html"
		})
	]
};
