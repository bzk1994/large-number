
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: {
		'large-number': './src/index.js',
		'large-number.min': './src/index.js',
	},
	output: {
		filename: "[name].js",
		library: "largeNumber",
		libraryExport: "default",
		libraryTarget: "umd"
	},
	mode: 'none',
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				include: /\.min.js$/
			})
		]
	}
}