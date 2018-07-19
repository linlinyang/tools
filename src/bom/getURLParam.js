export default function getURLParam(name,url){
	url = url || location.href;
	var reg = new RegExp('(^|&|\\?)' + name + '=([^&]*)(&|$)'),
		ret = url.match(reg);
	if(ret !== null){
		return unescape(ret[2]);
	}
	return null;
}

export function getURLParameters(url){
	url = url || location.href;
	var paramsArr = url.match(/([^&=?]+)(=([^&]*))/g),
		ret = {};
	for(var i = 0,len = paramsArr.length,tmp; i < len; i++){
		tmp = paramsArr[i].split('=');
		ret[tmp[0]] = tmp[1];
	}
	return ret;
}