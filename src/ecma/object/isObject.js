/**
 * check is object
 *
 * @param {object} obj;
 * @return {boolean};
 * 
 * @example
 *
 * var obj = {name: 'zoro',zge: 20};
 * Lin.isObject(obj);
 * // => true
 *
 * var obj = null;
 * Lin.isObject(obj);
 * // => false
 *
 * var obj = [];
 * Lin.isObject(obj);
 * // => true
 *
*/
export default function isObject(obj){
	return obj !== null && typeof obj === 'object';
}