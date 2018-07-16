import kebabCase from '../ecma/string/kebabCase';
import camelCase from '../ecma/string/camelCase';
import trim from '../ecma/string/trim';

var win = window,
	doc = document,
	defaultView = doc.defaultView,
	rootEl = doc.compatMode === 'CSS1Compat' ? doc.documentElement : doc.body;

export default function css(el,key,val,important){
	if(el === win || el === doc){
		return null;
	}
	val = val && trim(val);
	if(!val){
		var style = defaultView ? defaultView.getComputedStyle(el) : el.currentStyle;
		return style[camelCase(key)];
	}
	val = !!important ? val + '!important' : val;
	val = val.lastIndexOf(';') > -1 ? val : val + ';';

	key = kebabCase(trim(key));

	var cssText = el.style.cssText;
	if(cssText.indexOf(key) === -1){
		el.style.cssText = cssText + key + ':' + val;
	}else{
		var reg = new RegExp("("+key+":).*?;",'ig');
		el.style.cssText = cssText.replace(reg,function(all,first){
			return first + val;
		});
	}
	return val;

}

export function getCss(el,strOrArr){
	if(!el){
		throw new Error('Expected at least onemore param');
		return ;
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
		return ;
	}
	if(strOrObj === undefined){
		return null;
	}
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