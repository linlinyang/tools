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

export default function listen(el,type,hander,isBobble){
	type = String(type).toLowerCase();
	isBobble = !!isBobble;

	add(el,type,hander,isBobble);
	addCache(el,type,hander,isBobble);

}

export function unlisten(el,type,hander,isBobble){
	type = String(type).toLowerCase();
	isBobble = !!isBobble;

	remove(el,type,hander,isBobble);
	removeCache(el,type,hander,isBobble);
}

function addCache(el,type,hander,isBobble){
	var tagName = el.tagName;
	tagName = (tagName && tagName.toLowerCase()) || 'other';

	if(searchCache(el,type,hander,isBobble) === false){
		var cacheTag = cache[tagName];
		if(!cacheTag){
			cacheTag = cache[tagName] = [];
		}
		cacheTag.push({
			el: el,
			type: type,
			hander: hander,
			isBobble: isBobble
		});
	}
}

function removeCache(el,type,hander,isBobble){
	var tagName = el.tagName;
	tagName = (tagName && tagName.toLowerCase()) || 'other';

	if(searchCache(el,type,hander,isBobble) === false){
		
	}
}

function searchCache(el,type,hander,isBobble){
	var tagName = el.tagName;
	tagName = tagName && tagName.toLowerCase();

	var cacheTag = cache[tagName] || cache['other'];
	if(cacheTag){
		var len = cacheTag.length;
		while(len--){
			var tmp = cacheTag[len];
			if(tmp['el'] === el && tmp['type'] === type && tmp['hander'] === hander && tmp['isBobble'] === isBobble){
				return len;
			}
		}
		return false;
	}

	return false;
}

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