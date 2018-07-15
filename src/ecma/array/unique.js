
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

function unique1(arr){
	return Array.from(new Set(...arr));
}

export default unique;