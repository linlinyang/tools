/**
 * count some value repeat numbers in array
 *
 * @param {array} arr;
 * @param {anyValue} the value in array
 * @return {number};the repeat numbers
 * 
 * @example
 *
 * var arr = [1,2,3,1,'1'];
 * Lin.countOccurrences(arr,1);
 * // => 2
 *
 *
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