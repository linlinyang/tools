/**
 * make shure item in array will be unique
 *
 * @param {array} arr;
 * @return {array};return the origin array
 * 
 * @example
 *
 * var arr = [4,2,6,4,6,1];
 * Lin.unique(arr);
 * // => [4,2,6,1]
 *
 *
*/
function unique(arr){
	var obj = {},
		len = arr.length;
	for(;len--;){
		var val = arr[len];
		if(obj[val]){
			arr.splice(len,1);
		}else{
			obj[val] = true;
		}
	}

	obj = null;
	return arr;
}

/*function unique1(arr){
	return Array.from(new Set(...arr));
}*/

export default unique;