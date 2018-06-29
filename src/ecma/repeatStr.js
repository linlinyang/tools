
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