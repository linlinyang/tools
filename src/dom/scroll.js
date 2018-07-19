import {win,doc,rootEl} from './config.js';

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
		'top': el.pageYOffset || el.scrollTop,
		'left': el.pageXOffset || el.scrollLeft
	};
}