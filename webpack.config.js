const path = require('path');

module.exports = {
	entry: {
		tool: ['babel-polyfill',path.resolve(__dirname,'./src/index')]
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'umd',
        globalObject: 'this',
	}
};