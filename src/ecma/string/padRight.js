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
 * Lin.padRight(str,10,'0');
 * // => 'abc0000000'
 *
 *
*/
function padRight(str,len,char){
	var strLen = str.length;
	char = char === undefined ? ' ' : String(char);
	return strLen > len 
			? str
			: str + repeat(char,len - strLen );
}

export default padRight;