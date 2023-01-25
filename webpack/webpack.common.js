const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
	entry: path.resolve(__dirname, "..", "./src/index.tsx"),
	resolve: {
		extensions: [".js", ".ts", ".tsx"],
	},
	devServer: {
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				// should use babel-loader for all ts js tsx and jsx files
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
					},
				],
			},

			{
				// should use style-loader and css-loader for all css files
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				// v5 supports image loaders out of box
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: "asset/inline",
			},
		],
	},
	output: {
		path: path.resolve(__dirname, "..", "./build"),
		filename: "[name].[chunkhash].js",
		publicPath: "/",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "./index.html",
			favicon: "./public/favicon.ico",
		}),

		new Dotenv({
			path: "./.env",
		}),
	],
};
