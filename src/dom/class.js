import trim from '../ecma/string/trim';
import {win,doc,defaultView,rootEl} from './config.js';

var div = document.createElement('div'),
	hasClassList = 'classList' in div,
	contain = hasClassList 
					? function(el,name){
						return el.classList.contains(name);
					}
					: function(el,name){
						var reg = new RegExp('(^\|\\s\+)' + name + '(\\s\+\|$)','g');
						return reg.test(el.className);
					},
	remove = hasClassList
					? function(el,name){
						el.classList.remove(name);
					}
					: function(el,name){
						var reg = new RegExp('(^\|\\s\+)' + name + '(\\s\+\|$)','g'),
							newClassName = el.className.replace(reg,"$2");;
						el.className = newClassName;
					};
div = null;

export function hasClass(el,className){
	if(!el || el.nodeType !== 1){
		throw new Error('just element node can has class');
	}
	if(typeof className !== 'string'){
		throw new Error('Class name must be string');
	}
	if(el === win || el === doc){
		return false;
	}
	var classNames = trim(className).split(/\s+/g),
		len = classNames.length;

	while(len--){
		if(!contain(el,classNames[len])){
			return false;
		}
	}
	return true;
}

export function addClass(el,className){
	if(!el || el.nodeType !== 1){
		throw new Error('just element node can has class');
	}
	if(typeof className !== 'string'){
		throw new Error('Class name must be string type');
	}
	if(el === win || el === doc){
		return ;
	}
	className = trim(className);
	if(hasClassList){
		var classNames = className.split(/\s+/g),
			len = classNames.length;
		while(len--){
			el.classList.add(classNames[len]);
		}
	}else{
		el.className += ' ' + className;
	}
}

export function removeClass(el,className){
	if(!el || el.nodeType !== 1){
		throw new Error('just element node can has class');
	}
	if(typeof className !== 'string'){
		throw new Error('Class name must be string type');
	}
	if(el === win || el === doc){
		return ;
	}
	var classNames = trim(className).split(/\s+/g),
		len = classNames.length;
	while(len--){
		remove(el,classNames[len]);
	}

}

export function toggleClass(el,className){
	if(!el || el.nodeType !== 1){
		throw new Error('just element node can has class');
	}
	if(typeof className !== 'string'){
		throw new Error('Class name must be string type');
	}
	if(el === win || el === doc){
		return ;
	}
	var classNames = trim(className).split(/\s+/g),
		len = classNames.length;
	while(len--){
		var curClass = classNames[len];
		if(hasClassList){
			el.classList.toggle(curClass);
		}else{
			if(hasClass(el,curClass)){
				remove(el,curClass);
			}else{
				el.className += ' ' + curClass;
			}
		}
	}

}

