import isPlainObject from './isPlainObject';
import extend from './extend';
import cloneArray from '../array/cloneArray';

/**
 * clone object
 *
 * @param {Object} obj;the object will be cloned
 * @param {boolean} isDeep;is deep clone or not
 * @return {object};the cloned obj
 * 
 * @example
 * var obj = {name: 'zoro',age: 22},
 		cloneObj = Lin.cloneArray(obj);
 		cloneObj.age = 25;
 * // obj => {name: 'zoro',age: 22}
 *
 * var obj = {name: 'zoro',age: 20,friends:['Nami','Lufei']},
 		cloneObj = Lin.cloneArray(obj,true);
 		obj.friends.push('Luobing');
 * // cloneObj => {name: 'zoro',age: 20,friends:['Nami','Lufei']}
 *
 *
*/
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
						? cloneArray(tmpVal,true)
						: tmpVal
						);
		ret[key] = tmpVal;
	}
	return ret;
}