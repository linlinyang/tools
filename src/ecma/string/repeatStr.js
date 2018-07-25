/**
 * repeat string
 *
 * @param {string} str;the repeat string
 * @param {number} n;repeat times
 * @return {string}; return the repeat string
 * 
 * @example
 * 
 *
 * Lin.repeatStr('abc',3)
 * // => 'abcabcabc'
 *
*/

function repeatStr(str,n){
	str = String(str);
	if( !n ){ return ''; }
	if(str.repeat){ return str.repeat(n); }
	var res = '';
	while( n ){
		if( n & 1 ){
			res += str;
		}
		str += str;
		n >>= 1;
	}
	return res;
}

export default repeatStr;