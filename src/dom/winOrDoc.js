import {win,doc,rootEl} from './config.js';

export function getDocumentRect(){
	var docWidth = Math.max(rootEl.clientWidth,rootEl.offsetWidth,rootEl.scrollWidth),
		docHeight = Math.max(rootEl.clientHeight,rootEl.offsetWidth,rootEl.scrollHeight),
		scrollLeft = win.pageXOffset || rootEl.scrollLeft,
		scrollTop = win.pageXOffset || rootEl.scrollLeft;
	return {
		width: docWidth,
		height: docHeight,
		top: 0 - scrollTop,
		left: 0 - scrollLeft,
		right: docWidth - scrollLeft,
		bottom: docHeight - scrollTop,
		innerWidth: docWidth,
		innerHeight: docHeight,
		styleWidth: docWidth,
		styleHeight: docHeight,
		x: 0,
		y: 0
	};
}

export function getWindowRect(){
	var winWidth = win.innerWidth || rootEl.clientWidth,
		winHeight = win.innerHeight || rootEl.clientHeight
	return {
		width: winWidth,
		height: winHeight,
		top: 0,
		left: 0,
		right: winWidth,
		bottom: winHeight,
		innerWidth: winWidth,
		innerHeight: winHeight,
		styleWidth: winWidth,
		styleHeight: winHeight,
		x: win.pageXOffset || rootEl.scrollLeft,
		y: win.pageYOffset || rootEl.scrollTop,
	};
}
