const path = require('path');

module.exports = {
	entry: path.resolve(__dirname,'./src/index'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'umd',
        globalObject: 'this',
	}
};