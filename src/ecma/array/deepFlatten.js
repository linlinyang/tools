/*
*free all inner array into this array
*/

var ptoPush = Array.prototype.push;

function deepFlatten(arr){

	var val,
		newArr = [];
	for(var i = 0, len = arr.length; i < len; i++){
		val = arr[i];
		if(Array.isArray(val)){
			ptoPush.apply(newArr,deepFlatten(val));
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