/*
*polyfill of array indexOf
*/

var proto = Array.prototype;


proto.lastIndexOf = proto.lastIndexOf || function(val){
	var len = this.length;
	for(;len--;){
		if(this[len] === val){
			return len;
		}
	}

	return len;
};

proto.indexOf = proto.indexOf || function(val){
	for(var i = 0,len = this.length; i < len; i++){
		if(this[i] === val){
			return i;
		}
	}
	return -1;
}

proto = null;