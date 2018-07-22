import isPlainObject from '../object/isPlainObject';

/**
 *
 * return Date object from string or number or array
 * @param {String|number|array} strOrArray;The date params
 * @returns {Object};return date object
 *
 * @example
 * 
 * Lin.time();
 * // => now Date
 *
 * Lin.time('2018-3-4 5:6:7')
 * // => Wed Apr 04 2018 05:06:07
 *
 * Lin.time('2018-3-4')
 * // => Wed Apr 04 2018 00:00:00
 *
 * Lin.time('3-4 5:6:7')
 * // => Wed Apr 04 2018 05:06:07 GMT+0800
 *
 * Lin.time(2018,3,4,5,6)
 * // => Wed Apr 04 2018 05:06:07 GMT+0800
 *
 * Lin.time([2018,3,4,5,6])
 * // => Wed Apr 04 2018 05:06:07 GMT+0800
*/

export default function time(strOrArray){
	if(anyVal === undefined){
		return new Date();
	}
	if(arguments.length > 1 || typeof anyVal === 'number'){
		anyVal = Array.prototype.slice.call(arguments);
	}
	if(typeof anyVal === 'string'){
		anyVal = anyVal.match(/(\d+)/g);
	}
	if(Array.isArray(anyVal)){
		anyVal[0] < 1970 && anyVal.unshift(new Date().getFullYear());
		ret = new Date(anyVal[0],anyVal[1] || 0,anyVal[2] || 0,anyVal[3] || 0,anyVal[4] || 0,anyVal[5] || 0);
		if(isNaN(ret)){
			return null;
		}else{
			return ret;
		}
	}
	return null;
}