import repeat from "./repeatStr";

function padRight(str,len,char){
	var strLen = str.length;
	char = char === undefined ? ' ' : String(char);
	return strLen > len 
			? str
			: str + repeat(char,len - strLen );
}

export default padRight;