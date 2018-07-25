/**
 * filter falsely value
 *
 * @param {array} arr;
 * @return {array};the origin array apart from some false value
 * 
 * @example
 * var arr = [1,2,3,false,0,NaN,null,undefined];
 * Lin.compact(arr);
 * // arr => [1,2,3]
 *
 *
*/
function compact(arr){

	var len = arr.length;

	while(len--){
		!arr[len] && arr.splice(len,1)
	}
	return arr;
}

function compact1(arr){
	return arr.filter(Boolean);
}

export default compact;