if(!Object.create){
	Object.create = function(fn){
		function F(){}
		F.prototype = fn;
		return new F();
	}
}