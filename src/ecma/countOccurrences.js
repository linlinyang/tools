/*
*count value in array appears
*/


function countOccurrences(arr,value){
	var len = arr.length,
		counter = 0;
	for(;len--;){
		arr[len] === value && counter++;
	}

	return counter;
}

function countOccurrences1(arr,value){
	var count = 0;
	return arr.reduce(function(ct,val){
		val === value && ct++;
		return (val === value && ct++) || ct;
	},count);
}

export default countOccurrences;