import isPlainObject from '../object/isPlainObject';
import cloneObject from '../object/cloneObject';

/**
 * clone array
 *
 * @param {array} arr;the array will be cloned
 * @param {boolean} isDeep;is deep clone or not
 * @return {array};the cloned array
 * 
 * @example
 * var arr = [1,2,3,4],
 		cloneArr = Lin.cloneArray(arr);
 		cloneArr.push(5);
 * // arr => [1,2,3,4]
 *
 * var obj = {name: 'zoro',age: 20},
 		arr = [1,2,3,4,obj],
 		cloneArr = Lin.cloneArray(arr,true);
 		obj.age = 22;
 * // cloneArr => [1,2,3,4,{name: 'zoro',age: 20}]
 *
 *
*/
export default function cloneArray(arr,isDeep){
	if(!arr){
		return [];
	}
	if(!Array.isArray(arr)){
		return [arr];
	}
	if(!isDeep){
		return arr.slice();
	}
	return clone(arr);
}

function clone(targetArr){
	var cloneArr = [],
		len = targetArr.length,
		tmpVal;
	while(len--){
		tmpVal = targetArr[len];
		tmpVal = isPlainObject(tmpVal) 
					? cloneObject(tmpVal,true)
					: (Array.isArray(tmpVal)
						? clone(tmpVal)
						: tmpVal
						);
		cloneArr.unshift(tmpVal);
	}
	return cloneArr;
}