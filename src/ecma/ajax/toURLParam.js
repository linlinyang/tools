import isPlainObject from '../object/isPlainObject';
import toString from '../string/toString';


/**
 * convert object to string as search for url
 *
 * @param {Object} data;
 * @param {string} url;
 * @return {string};the url stitch thie data params
 * 
 * 
 * @example
 * Lin.toURLParam({
			name: 'zoro',
			age: 25,
			undef: undefined,
			isHappy: true,
			ispoor: false,
			others: null
		});
 * // => name=zoro&age=25&isHappy=1&ispoor=0
 *
*/
export default function toURLParam(data,url){
	if(!isPlainObject(data)){
		return '';
	}
	var str = '';
	for(var key in data){
		if(data.hasOwnProperty(key)){
			var tmpVal = data[key];
			tmpVal = toString(tmpVal);
			if(tmpVal === undefined){
				continue ;
			}
			str += encodeURIComponent(key) + '=' + encodeURIComponent(tmpVal) + '&';
		}
	}
	str = str.length > 0 ? str.slice(0,-1) : str;

	if(!url || typeof url !== 'string'){
		return str;
	}
	url = url.substr(-1,1) === '?'
			? url
			: url + '?';
	return url + str;
}