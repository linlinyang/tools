
if(!Array.isArray){
	Array.isArray = function(){
		return Object.prototype.toString.call(this) === '[object Array]'
	}
}