import repeat from "./repeatStr";

function padLeft(str,len,char){
	var strLen = str.length;
	char = char === undefined ? ' ' : String(char);
	return strLen > len 
			? str
			: repeat(char,len - strLen ) + str;
}

export default padLeft;