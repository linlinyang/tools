import {win} from './config.js';
import cloneArray from '../ecma/array/cloneArray';

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
 * @param {node|array} el;the element which add event listener
 * @param {string|array} type;the event type
 * @param {function} hander;the function which fired event
 * @param {boolean} isBobble; is bobble for event and the event must support it
 * 
 * @example
 * 
 * var aa = document.getElementById('aa'),
 *	   bb = document.getElementById('bb');

 *  // => bind a event to one element
	Lin.listen(aa,'click',function(){
		console.log('aaa');
	},false);

	// => bind some events to one element
	Lin.listen(aa,[{
			click: function(){
				console.log('click');
			},
			isBobble: false
		},{
			dblclick: function(){
				console.log('dbclick');
			},
			isBobble: true
		}
	]);

	// => bind a event to every element
	Lin.listen([{
		el: aa,
		type: 'click',
		hander: function(){
			console.log('click');
		},
		isBobble: false
	},{
		el: bb,
		click: function(){
			console.log('bb');
		},
		isBobble: false
	}]);

	// => bin some event to some element
	Lin.listen([{
		el: aa,
		binds: [{
			click: function(){
				console.log('aa click');
			},
			isBobble: false
		},{
			dblclick: function(){
				console.log('aa double click');
			},
			isBobble: true
		}]
	},{
		el: bb,
		binds: [{
			click: function(){
				console.log('bb click');
			},
			isBobble: false
		},{
			dbclick: function(){
				console.log('bb double click');
			},
			isBobble: true
		}]
	}]);

 *
 * the event add by this way will be removed when window unloaded;
 *
*/
export default function listen(elOrArr,typeOrArr,hander,isBobble){
	if(Array.isArray(elOrArr)){
		var eventBinds = [];
		for(var i = 0,len = elOrArr.length; i < len; i++){
			var tmpListen = elOrArr[i],
				eventBinds = tmpListen.binds;
			if(eventBinds && Array.isArray(eventBinds)){
				for(var j = 0,length = eventBinds.length; j < length; j++){
					var bindObj = eventBinds[j];
					bindObj['el'] = tmpListen['el'];
					addListen(bindObj);
				}
			}else{
				addListen(tmpListen);
			}
		}
		return ;
	}
	if(Array.isArray(typeOrArr)){
		for(var i = 0,len = typeOrArr.length; i < len; i++){
			var typeObj = typeOrArr[i];
			typeObj['el'] = elOrArr;
			addListen(typeObj);
		}
		return ;
	}
	addListen({
		el: elOrArr,
		type: typeOrArr,
		hander: hander,
		isBobble: isBobble
	});

}

/**
 * add event listener by object
 * @param {object} options;
 * options = {
	el: The element,
	type: event type,
	hander: event hander,
	isBobble: can bobble event,
	type: hander; ==> equal to type and hander
 }
*/
function addListen(options){
	var el = options.el,
		type = options.type,
		hander = options.hander,
		isBobble = !!options.isBobble;
	if(!hander){
		for(var key in options){
			var prop = options[key];
			if(options.hasOwnProperty(key) && typeof prop === 'function'){
				hander = prop;
				type = type ? type : key;
			}
		}
	}
	if(!hander){
		throw new Error('must bind a function to event');
	}
	type = String(type).toLowerCase();
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
 * Lin.unlisten(btn);
 * // => remove all listener from btn
 *
 * Lin.unlisten(btn,'click')
 * // => remove all click listener from btn
 *
 * Lin.unlisten(btn,'click',hander)
 * // => remove all click listener from btn,ignore is bobble or not
 *
 * Lin.unlisten(btn,'click',hander,false)
 * // => remove only event from btn
 *
*/
export function unlisten(el,type,hander,isBobble){
	if(!el){
		throw new Error('element must be require');
	}
	var tagName = el.tagName;
	tagName = (tagName && tagName.toLowerCase()) || 'otherTag';

	var cacheTags = cloneArray(cache[tagName]);
	for(var i = 0,len = cacheTags.length; i < len; i++){
		var tmpTag = cacheTags[i];
		if(tmpTag.el === el){
			!type && removeListen(tmpTag);
			if(tmpTag.type === type){
				!hander && removeListen(tmpTag);
				if(tmpTag.hander === hander){
					isBobble === undefined && removeListen(tmpTag);
					if(tmpTag.isBobble === isBobble){
						removeListen(tmpTag);
					}
				}
			}
		}
	}
}

/*
* remove listener from element and remove cache
* options.el ==> the element
* options.type ==> event type
* options.hander ==> event hander
* options.isBobble ==> event is bobble
*/
function removeListen(options){
	var el = options.el,
		type = options.type,
		hander = options.hander,
		isBobble = !!options.isBobble;
	type = String(type).toLowerCase();

	remove(el,type,hander,isBobble);
	toggleCache(el,type,hander,isBobble);
}

/*
*if cached this element and it's event,then remove it;
*or cache element and it's event 
*/
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