function camelCase(str){
	return str.replace(/\-(\w)/g,function(a,b){
		return b.toUpperCase();
	});
}

export default camelCase;