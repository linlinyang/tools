

function splitContain(pStr,cStr,delimiter){
	delimiter = delimiter || /\s+/g;

	var arr = cStr.split(delimiter),
		len = arr.length;
	pStr = pStr.split(delimiter);

	while(len--){
		if(pStr.indexOf(arr[len]) === -1){ return false; }
	}
	return true;
}

export default splitContain;