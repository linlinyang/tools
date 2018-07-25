import {win,doc,defaultView,rootEl} from './config.js';
import {getDocumentRect,getWindowRect} from './winOrDoc';
import css from './css';
import offset from './offset';

/**
 * return this element all position information and size info
 *
 * @param {node} el;the element which add event listener
 * @return {object};
 * 		top,left,bottom,right // => relative to window position;top property equal to top border distance to window top;
 *  	width,height // => clientWidth + padding
 * 		innerWidth,innerHeight // => clientWidth
 * 		styleWidth,styleHeight // => clientWidth + padding + border
 * 		x,y // => position related to document
 * 
 *
*/
export default function rect(el){
	if(el === win){
		return getWindowRect();
	}
	if(el === doc){
		return getDocumentRect();
	}
	var client = el.getBoundingClientRect(),
		offsetNum = rootEl.clientTop,
		clientWidth = el.clientWidth,
		clientHeight = el.clientHeight,
		elBox = css(el,[
			'borderLeftWidth',
			'borderTopWidth',
			'borderRightWidth',
			'borderBottomWidth',
			'width',
			'height',
			'paddingLeft',
			'paddingTop',
			'paddingRight',
			'paddingBottom'
			]),
		elPos = offset(el);
	return {
		top: client.top - offsetNum,
		left: client.left - offsetNum,
		bottom: client.bottom - offsetNum,
		right: client.right - offsetNum,		
		width: client.width || clientWidth + parseFloat(elBox.borderLeftWidth) + parseFloat(elBox.borderRightWidth),
		height: client.height || clientHeight + parseFloat(elBox.borderTopWidth) + parseFloat(elBox.borderBottomWidth),
		innerWidth: clientWidth,
		innerHeight: clientHeight,
		styleWidth: parseFloat(elBox.width),
		styleHeight: parseFloat(elBox.height),
		x: elPos.left,
		y: elPos.top
	};
}