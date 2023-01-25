const webpack = require("webpack");

module.exports = {
	mode: "development",
	devtool: "cheap-module-source-map",

	plugins: [
		new webpack.DefinePlugin({
			"process.env.name": JSON.stringify("dev"),
			"process.env.VALUE_SERVICE_URL": JSON.stringify("http://localhost:4001"),
		}),
	],
};
