/**
 * freed array in this array and covert to one array
 *
 * @param {array} arr;
 * @return {array};
 * 
 * @example
 *
 * var arr = [1,2,3,[4,5,6,[7,8,9]],10];
 * Lin.deepFlatten(arr);
 * // => [1,2,3,4,5,6,7,8,9]
 *
 *
*/

function deepFlatten(arr){

	var val,
		newArr = [];
	for(var i = 0, len = arr.length; i < len; i++){
		val = arr[i];
		if(Array.isArray(val)){
			Array.prototype.push.apply(newArr,deepFlatten(val));
		}else{
			newArr.push(val);
		}
	}

	return newArr;
}

/*function deepFlatten1(arr){
	return [].concat(...arr.map(function(v,i){
		return Array.isArray(v) ? deepFlatten1(v) : v;
	}));
}*/

export default deepFlatten;