import usefulString from './usefulString';

function toUrlParams(data,url){
	if(data === null || typeof data !== 'object' ){
		return url;
	}

	var paramsArr = [];
	for(var k in data){
		var val = usefulString(data[k]);
		if(val === undefined || !data.hasOwnProperty(k)){ continue ;}
		paramsArr.push(encodeURIComponent(k)+'='+encodeURIComponent(val));
	}
	
	var paramsStr = paramsArr.join('&');

	if(url){
		if(url.indexOf('?') > -1){
			return url.slice(-1) === '&' 
				? url + paramsStr 
				: url + '&' + paramsStr;
		}else{
			return url + '?' + paramsStr;
		}
	}else{
		return paramsStr;
	}
}

export default toUrlParams;