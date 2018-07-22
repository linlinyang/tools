import isPlainObject from '../object/isPlainObject';
import cloneObject from '../object/cloneObject';

export default function cloneArray(arr,isDeep,hasFuncOrUndefined){
	if(!arr){
		return [];
	}
	if(!Array.isArray(arr)){
		return [arr];
	}
	if(!isDeep){
		return arr.slice();
	}
	if(!!hasFuncOrUndefined){
		return clone(arr);
	}
	return JSON.parse(JSON.stringify(arr));
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