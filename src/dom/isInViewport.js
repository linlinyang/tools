import isShow from './isShow';
import rect from './rect';
import { getWindowRect } from './winOrDoc';

/**
 * check element is in Viewport
 *
 * @param {node} el;The element
 * @param {boolean} partiallyVisible;if true,this element has part in viewport will be return true;
 * if not this element all in viewport will return true
 * 
*/
export default function isInViewport(el,partiallyVisible){
	if(!isShow(el)){
		return false;
	}
	var elInfo = rect(el),
		top = elInfo['top'],
		left = elInfo['left'],
		right = elInfo['right'],
		bottom = elInfo['bottom'],
		winInfo = getWindowRect(),
		winWidth = winInfo['width'],
		winHeight = winInfo['height'];
	return !!partiallyVisible 
			? ( (top > 0 && top < winHeight) || (bottom > 0 && bottom < winHeight) ) && ( (left > 0 && left < winWidth) || (right > 0 && right < winWidth) )
			: top > 0 && bottom < winHeight && left > 0 && right < winWidth;
}