import extend from './ecma/object/extend';
import init from './init';

var Lin = Object.create(null);

Lin = extend(Lin,{
	version: '1.1.0',
	getVersion: function(){
		return this.version;
	},
	author: 'Lin',
});

init(Lin);

export default Lin;