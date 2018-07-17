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
	if(el === win || el === doc){
		throw new Error('Cannot set window or document style');
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

export function scrollTop(el){
	return scrollPos(el)['top'];
}
export function scrollLeft(el){
	return scrollPos(el)['left'];
}

export function scrollPos(el){
	if(el === doc){
		return {
			'top': 0,
			'left': 0
		};
	}
	if(el === win){
		return {
			'top': win.pageYOffset || rootEl.scrollTop,
			'left': win.pageXOffset || rootEl.scrollLeft
		};
	}
	return {
		'top': el.scrollTop,
		'left': el.scrollLeft
	};
}

export function offsetLeft(el){
	return offset(el)['left'];
}

export function offsetTop(el){
	return offset(el)['top'];
}

export function offset(el){
	if(el === win || el === doc){
		return {
			'top': 0,
			'left': 0
		}
	}
	var pat = el,
		top = 0,
		left = 0;
	while(pat){
		top += pat.offsetTop;
		left += pat.offsetLeft;
		pat = pat.offsetParent;
	}
	return {
		'top': top,
		'left': left
	}
}

export function clientPos(el){}