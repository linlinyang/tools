import {win} from './config.js';

var cache = Object.create(null),
	add = win.addEventListener 
				? function(el,type,hander,isBobble){
					el.addEventListener(type,hander,isBobble);
				}
				: win.attachEvent 
					? function(el,type,hander){
						el.attachEvent('on'+type,hander);
					}
					: function(){
						el['on' + type] = hander;
					},
	remove = win.removeEventListener
				? function(el,type,hander,isBobble){
					el.removeEventListener(type,hander,isBobble);
				}
				: win.attachEvent
					? function(){
						el.detachEvent('on' + type,hander);
					}
					: function(){
						el['on' + type] = null;
					}; 

/**
 * add event listener to some element
 *
 * @param {node} el;the element which add event listener
 * @param {string} type;the event type
 * @param {function} hander;the function which fired event
 * @param {boolean} isBobble; is bobble for event and the event must support it
 * 
 * @example
 * 
 * var btn = document.getElementByTagName('button')[0];
 * Lin.listen(btn,'click',function(){},true);
 *
 * the event add by this way will be removed when window unloaded;
 *
*/
export default function listen(el,type,hander,isBobble){
	type = String(type).toLowerCase();
	isBobble = !!isBobble;

	add(el,type,hander,isBobble);
	toggleCache(el,type,hander,isBobble);
}

/**
 * remove event listener from some element
 *
 * @param {node} el;the element which removed element
 * @param {string} type;the removed event type
 * @param {function} hander;the function which bind to element
 * @param {boolean} isBobble; is bobble for event and the event must support it
 * 
 * @example
 * 
 * var btn = document.getElementByTagName('button')[0];
 * Lin.unlisten(btn,'click',clickFunc,true);
 * function clickFunc(){}
 *
 *
*/
export function unlisten(el,type,hander,isBobble){
	type = String(type).toLowerCase();
	isBobble = !!isBobble;

	remove(el,type,hander,isBobble);
	toggleCache(el,type,hander,isBobble);
}

function toggleCache(el,type,hander,isBobble){
	var tagName = el.tagName;
	tagName = (tagName && tagName.toLowerCase()) || 'otherTag';

	var cacheTags = cache[tagName];
	if(!cacheTags){
		cacheTags = cache[tagName] = [];
	}

	var len = cacheTags.length;
	while(len--){
		var tmpTag = cacheTags[len];
		if(
			tmpTag['el'] === el
			&& tmpTag['type'] === type
			&& tmpTag['hander'] === hander
			&& tmpTag['isBobble'] === isBobble
			){
			return cacheTags.splice(len,1);
		}
	}
	cacheTags.push({
		el: el,
		type: type,
		hander: hander,
		isBobble: isBobble
	});

	cacheTags = null;
}

listen(win,'unload',unload);

function unload(){
	for(var cacheTags in cache){
		var len = cacheTags.length;
		while(len--){
			var tmpTag = cacheTags[len];
			remove(tmpTag['el'],tmpTag['type'],tmpTag['hander'],tmpTag['isBobble']);
		}
	}
	cache = null;
}

remove(win,'unload',unload);