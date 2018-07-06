
function nodeIndex(node){
	var parent = node.parentNode,
		pos = -1;
	if(!parent){ return pos; }

	var childs = parent.children,
		len = childs.length,
		half = len & 1 
				? len >> 1
				: (len - 1) >> 1;
	for(var i = 0; i <= half; i++){
		if(childs[i] == node){
			return i;
		}
		var end = len - 1 - i;
		if(childs[end] == node){
			return end;
		}
	}
	return -1;
}


export default nodeIndex;