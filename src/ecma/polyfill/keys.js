if(!Object.keys){
	Object.keys = function(obj){
		if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null){
			throw new TypeError('Object.keys called on non-object')
		}
		var ret = [];
		for(var key in obj){
			if(obj.hasOwnproperty(key)){
				ret.push(key);
			}
		}
		return ret;
	}
}