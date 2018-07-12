/*
*difference from two array
*/

function difference(checkArr,templateAtt){
	var res = [];
	for(var i = 0, len = checkArr.length,val; i < len; i++){
		val = checkArr[i];
		if(templateAtt.indexOf(val) === -1){
			res.push(val);
		}
	}
	return res;
}

export default difference;