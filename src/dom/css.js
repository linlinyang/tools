import kebabCase from '../ecma/string/kebabCase';
import camelCase from '../ecma/string/camelCase';
import trim from '../ecma/string/trim';
import isPlainObject from '../ecma/object/isPlainObject';
import {win,doc,defaultView,rootEl} from './config.js';

export default function css(el,anyKey,val,important){
	if(!el){
		throw new Error('Expected at least onemore param');
	}
	if(anyKey === undefined){
		return el;
	}
	if(val === undefined){
		if(isPlainObject(anyKey)){
			return setCss(el,anyKey);
		}else{
			return getCss(el,anyKey);
		}
	}else{
		return setCss(el,anyKey,val,important);
	}
}

export function getCss(el,strOrArr){
	if(!el){
		throw new Error('Expected at least onemore param');
	}
	if(el === win || el === doc){
		throw new Error('Cannot get window or document style');
	}
	var style = defaultView ? defaultView.getComputedStyle(el) : el.currentStyle;
	if(strOrArr === undefined){
		return style;
	}
	if(typeof strOrArr === 'string'){
		strOrArr = trim(strOrArr);
		if(!strOrArr){
			return style;
		}
		strOrArr = camelCase(strOrArr);
		if(strOrArr === 'opacity'){
			var filter = style['filter'];
			filter = filter && filter.match(/^alpha\(opacity=(\d+(?:\.\d+)?)\)$/);
			return filter 
					? (filter[1] || 1) / 100
					: style['opacity'];
		}else{
			return style[strOrArr];
		}
	}
	if(Array.isArray(strOrArr)){
		var res = {};
		for(var i = 0,len = strOrArr.length; i < len; i++){
			res[strOrArr[i]] = getCss(el,strOrArr[i]);
		}
		return res;
	}
	return '';
}

export function setCss(el,strOrObj,valStr,important){
	if(!el){
		throw new Error('Expected at least onemore param');
	}
	if(el === win || el === doc){
		throw new Error('Cannot set window or document style');
	}
	if(strOrObj === undefined){
		return null;
	}
	if(typeof strOrObj === 'string'){
		strOrObj = trim(strOrObj);
		if(valStr === undefined){
			return null;
		}else{
			strOrObj = kebabCase(strOrObj);
			valStr = !!important ? valStr + 'important' : valStr;
			if(strOrObj === 'opacity'){
				el.style['opacity'] = valStr;
				el.style['filter'] = 'alpha(opacity=' + valStr * 100 + ')';
			}else{
				el.style[strOrObj] = valStr;
			}
			return valStr;
		}
	}
	if(isPlainObject(strOrObj)){
		for(var key in strOrObj){
			if(strOrObj.hasOwnProperty(key)){
				setCss(el,key,strOrObj[key]);
			}
		}
		return strOrObj
	}
	return null;
}

