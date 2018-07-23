/**
 * get URL param from link
 *
 * @param {String} name;The param name
 * @param {String} [url=location.href];The browser link string
 * @returns {String|null|object};return all params as object or the value of name
 *
 * @example
 * var link = 'http://example.com/abc?a=a&b=123&c=abc123'
 * 
 * Lin.getURLParam('b')
 * // => 123
 *
 * Lin.getURLParam('foo')
 * // => null
 *
 * Lin.getURLParam('c','?foo=foo&c=bar')
 * // => bar
 *
 * Lin.getURLParam()
 * // => {a:'a',b:123,c:'abc123'}
 *
*/

export default function getURLParam(name,url){
	url = url || location.href;
	var reg,ret = {};
	if(name){
		reg = new RegExp('(^|&|\\?)' + name + '=([^&]*)(&|$)'),
		ret = url.match(reg);
		return ret && unescape(ret[2]);
	}
	var paramsArr = url.match(/([^&=?]+)(=([^&]*))/g);
	if(paramsArr === null){ return null; }
	for(var i = 0,len = paramsArr.length,tmp; i < len; i++){
		tmp = paramsArr[i].split('=');
		ret[tmp[0]] = unescape(tmp[1]);
	}
	return ret;
}
