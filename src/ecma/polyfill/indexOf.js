/*
*polyfill of array indexOf
*/

let proto = Array.prototype;

proto.indexOf = proto.indexOf || function(val){
				var len = this.length;
				for(;len--;){
					if(this[len] === val){
						return len;
					}
				}

				return len;
			};
proto = null;