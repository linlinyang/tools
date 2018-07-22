import isPlainObject from './isPlainObject';
import toString from '../string/toString';

export default function objectJoin(obj,connect,separator){
	if(!isPlainObject(obj)){
		return '';
	}
	connect = connect === undefined ? '=' : connect;
	connect = String(connect);
	separator = separator === undefined ? ',' : separator;
	separator = String(separator);
	var str = '';
	for(var key in obj){
		if(obj.hasOwnProperty(key)){
			var tmpVal = obj[key];
			tmpVal = toString(tmpVal);
			if(tmpVal === undefined){
				continue ;
			}
			str += key + connect + tmpVal + separator;
		}
	}
	return str.length > 0 ? str.slice(0,-(separator.length)) : str;
}
