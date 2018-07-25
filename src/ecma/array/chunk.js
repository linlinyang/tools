/**
 * group array by a size
 *
 * @param {array} arr;
 * @return {array};the new array
 * 
 * @example
 * Lin.chunk([1,2,3,4,5,6,7,8,9,10],3);
 * // => [[1,2,3],[4,5,6],[7,8,9],[10]]
 *
 * Lin.chunk([1,2,3,4,5,6,7,8,9,10],0);
 * // => [1,2,3,4,5,6,7,8,9,10]
 *
*/

function chunk(arr,size){

	size = parseInt(size);
	if(!size || isNaN(size) || !isFinite(size)){
		return arr;
	}

	var res = [],
		start = 0;

	do{
		var got = arr.slice(start,start + size);
		start += size;
		res.push(got);
	}while(got.length === size);

	return res;
}

function chunk1(arr,size){
	size = parseInt(size);
	if(!size || isNaN(size) || !isFinite(size)){
		return arr;
	}
	return Array.from({
			length: Math.ceil(arr.length / size)
		}, 
		function(v, i){
			arr.slice(i * size, i * size + size);
		});
}

export default chunk;