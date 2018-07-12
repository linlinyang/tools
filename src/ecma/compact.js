
function compact(arr){

	var len = arr.length;

	for(;len--;){
		!arr[len] && arr.splice(len,1)
	}
	return arr;
}

function compact1(arr){
	return arr.filter(Boolean);
}

export default compact;