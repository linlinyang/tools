/**
 * check is plain object
 *
 * @param {object} obj;
 * @return {boolean};
 * 
 * @example
 *
 * var obj = {name: 'zoro',zge: 20};
 * Lin.isPlainObject(obj);
 * // => true
 *
 * var obj = null;
 * Lin.isPlainObject(obj);
 * // => false
 *
 * var obj = [];
 * Lin.isPlainObject(obj);
 * // => false
 *
*/
function isPlainObject(obj){
	return Object.prototype.toString.call(obj) === '[object Object]';
}

export default isPlainObject;