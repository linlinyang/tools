/**
 * get URL param from link by name
 *
 * @param {String} name;The param name
 * @param {String} [url=location.href];The browser link string
 * @returns {String|null};return got param from link if exist
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
*/
export default function getURLParam(name,url){
	url = url || location.href;
	var reg = new RegExp('(^|&|\\?)' + name + '=([^&]*)(&|$)'),
		ret = url.match(reg);
	if(ret !== null){
		return unescape(ret[2]);
	}
	return null;
}

/**
 *
 * get all params from link
 * @param {String} url;the link
 * @returns {Object};params key => value
 *
 * @example
 * This page link is'http://example.com/abc?a=a&b=123&c=abc123'
 * 
 * Lin.getURLParams();
 * // => {a: a,b: 123,c: abc123}
 *
 * Lin.getURLParams('?foo=foo&c=bar')
 * // => {foo: foo,bar: bar}
 *
*/
export function getURLParams(url){
	url = url || location.href;
	var paramsArr = url.match(/([^&=?]+)(=([^&]*))/g),
		ret = {};
	for(var i = 0,len = paramsArr.length,tmp; i < len; i++){
		tmp = paramsArr[i].split('=');
		ret[tmp[0]] = unescape(tmp[1]);
	}
	return ret;
}