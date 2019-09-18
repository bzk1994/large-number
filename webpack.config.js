
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
	}
}