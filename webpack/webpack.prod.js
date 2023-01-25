const webpack = require("webpack");

module.exports = {
	mode: "production",
	devtool: "source-map",
	plugins: [
		new webpack.DefinePlugin({
			"process.env.name": JSON.stringify("prod"),
			"process.env.VALUE_SERVICE_URL": JSON.stringify("http://localhost:4001"),
		}),
	],
};
