/*
*Creates an array of elements split into groups the length of `size`
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