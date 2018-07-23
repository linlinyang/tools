import {win} from './config.js';

var cache = Object.create(null),
	add = win.addEventListener 
				? function(el,type,hander,isBobble){
					el.addEventListener(type,hander,!!isBobble);
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

export default function listen(el,type,hander,isBobble){
	type = String(type).toLowerCase();

	add(el,type,hander,isBobble);


}

export function unlisten(el,type,hander,isBobble){
	type = String(type).toLowerCase();
	remove(el,type,hander,isBobble);
}

function addCache(){}

function removeCache(){}

function searchCache(){}

function removeCacheListener(el,type,hander){
	var len = cache.length;
	while(len--){
		var tmp = cache[len];
		if(tmp['el'] === el && tmp['type'] === type && tmp['hander'] === hander){
			cache.splice(len,1);
		}
	}
}

/*listen(win,'unload',function(){
	var len = cache.length;
	while(len--){
		var tmp = cache[len];
		unlisten(tmp['el'],tmp['type'],tmp['hander']);
	}
	cache = null;
});*/