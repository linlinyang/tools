import repeat from "./repeatStr";

/**
 *
 * @param {string} str;
 * @param {number} len;
 * @param {string} char
 * 
 * @example
 *
 * var str = 'abc';
 * Lin.padLeft(str,10,'0');
 * // => '0000000abc'
 *
 *
*/
function padLeft(str,len,char){
	var strLen = str.length;
	char = char === undefined ? ' ' : String(char);
	return strLen > len 
			? str
			: repeat(char,len - strLen ) + str;
}

export default padLeft;