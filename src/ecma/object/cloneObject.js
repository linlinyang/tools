import isPlainObject from './isPlainObject';
import extend from './extend';
import cloneArray from '../array/cloneArray';

export default function cloneObject(obj,isDeep){
	if(!obj || !isPlainObject(obj)){
		return {};
	}
	if(!isDeep){
		return extend({},obj);
	}
	return clone(obj);
}

function clone(targetObj){
	var ret = {},
		keys = Object.keys(targetObj),
		len = keys.length,
		tmpVal;
	while(len--){
		var key = keys[len];
		tmpVal = targetObj[key];
		tmpVal = isPlainObject(tmpVal)
					? cloneObject(tmpVal,true)
					: (Array.isArray(tmpVal)
						? cloneArray(tmpVal,true,true)
						: tmpVal
						);
		ret[key] = tmpVal;
	}
	return ret;
}