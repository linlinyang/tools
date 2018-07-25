import {win,doc} from './config.js';

export function offsetLeft(el){
	return offset(el)['left'];
}

export function offsetTop(el){
	return offset(el)['top'];
}

/**
 * return top and left relative to document position
 *
 * @param {node} el;the element
 * @return {object};
 * 		top // => offset of top
 * 		left // => offset of left
 * 
*/
export default function offset(el){
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