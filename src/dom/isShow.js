import css from './css';
import {win,doc} from './config.js';

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