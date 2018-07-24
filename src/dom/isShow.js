import css from './css';
import {win,doc} from './config.js';

/**
 * check the element is show or not
 *
 * @param {node} el;The element
 * 
 * @example
 * 
 * <div style='display: none'></div>
 * Lin.isShow(div);
 * // => false;
 * 
 * <div style='opacity: 0'></div>
 * Lin.isShow(div);
 * // => false;
 *
 * <div style='visibility: hidden'></div>
 * Lin.isShow(div);
 * // => false;
 *
*/
export default function isShow(el){
	if(el === win || el === doc){
		return true;
	}
	var showAttr = css(el,['display','opacity','visibility']);
	if(
		showAttr['display'] === 'none' 
		|| showAttr['opacity'] == 0 
		|| showAttr['visibility'] === 'hidden'
	){
		return false;
	}
	return true;
}