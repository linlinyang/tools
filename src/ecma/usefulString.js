
function usefulString(val){
	if(
		(typeof val === 'object' && val !== null) || 
		typeof val === 'function' || 
		typeof val === 'symbol'
	){
		return undefined;
	}
	if(val === null || val === false){
		return 0;
	}
	if(val === true){
		return 1;
	}
	return val;

}

export default usefulString;