/**
 * cover string to came case
 *
 * @param {string} str;
 * @return {string};
 * 
 * @example
 *
 * var str = 'This-is-some-string';
 * Lin.camelCase(str);
 * // => ThisIsSomeString
 *
 *
*/
function camelCase(str){
	return str.replace(/\-(\w)/g,function(a,b){
		return b.toUpperCase();
	});
}

export default camelCase;