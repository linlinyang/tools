/**
 * trim space string around string
 *
 * @param {string} str;
 * @return {string}; 
 * 
 * @example
 * 
 * Lin.trim('   abc   ')
 * // => 'abc'
 *
*/
function trim(str){
	return str.replace(/(^\s+)|(\s+$)/ig,'');
}

export default trim;