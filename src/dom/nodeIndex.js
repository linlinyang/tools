function nodeIndex(node){
	var parent = node.parentNode,
		pos = -1;
	if(!parent){ return pos; }

	var currNode = parent.firstChild;
	while(currNode){
		currNode.nodeType == 1 && pos++;
		if(currNode == node){return pos; }
		currNode = currNode.nextSibling;
	}

	return pos;
}

export default nodeIndex;