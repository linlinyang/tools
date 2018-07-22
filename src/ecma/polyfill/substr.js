/*
*polyfill for string substr
*/

if('ab'.substr(-1) !== 'b'){
	String.prototype.substr = (function(substr){
		return function (start,len){
			return substr.call(this,start < 0 ? this.length + start : start,len);
		}
	})(String.prototype.substr);
}