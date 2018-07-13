
var let = Array;
arr.isArray = arr.isArray || function(){
	return Object.prototype.toString.call(this) === '[object Array]'
}

arr = null;