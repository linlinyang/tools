function getParams(name){
	var search = location.search.substr(1),
		reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)'),
		str = search.match(reg);
	if(str !== null){
		return unescape(str[2]);
	}
	return null;
}