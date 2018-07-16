import kebabCase from '../ecma/string/kebabCase';
import camelCase from '../ecma/string/camelCase';
import trim from '../ecma/string/trim';
import isPlainObject from '../ecma/object/isPlainObject';

var win = window,
	doc = document,
	defaultView = doc.defaultView,
	rootEl = doc.compatMode === 'CSS1Compat' ? doc.documentElement : doc.body;

export default function css(el,anyKey,val,important){
	if(!el){
		throw new Error('Expected at least onemore param');
	}
	
}

export function getCss(el,strOrArr){
	if(!el){
		throw new Error('Expected at least onemore param');
	}
	var style = defaultView ? defaultView.getComputedStyle(el) : el.currentStyle;
	if(strOrArr === undefined){
		return style;
	}
	if(typeof strOrArr === 'string'){
		strOrArr = camelCase(trim(strOrArr));
		return style[strOrArr];
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
	if(strOrObj === undefined){
		return null;
	}
	if(typeof strOrObj === 'string'){
		if(valStr === undefined){
			return null;
		}else{
			el.style[strOrObj] = !!important ? valStr + 'important' : valStr;
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

export function getSize(el){
	if(el === win){
		return getWindowSize();
	}
	if(el === doc){
		return getDocumentSize();
	}
	return css(el,['width','height']);
}

export function getWindowSize(){
	return {
		width: win.innerWidth || rootEl.clientWidth,
		height: win.innerHeight || rootEl.clientHeight
	};
}

export function getDocumentSize(){
	return {
		width: Math.max(rootEl.clientWidth,rootEl.offsetWidth,rootEl.scrollWidth),
		height: Math.max(rootEl.clientHeight,rootEl.offsetWidth,rootEl.scrollHeight)
	};
}