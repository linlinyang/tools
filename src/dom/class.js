import trim from '../ecma/string/trim';

var div = document.createElement('div'),
	contain = 'classList' in div 
					? function(el,name){
						return el.classList.contains(name);
					}
					:function(el,name){
						var reg = new RegExp('(^\|\\s\+)' + name + '(\\s\+\|$)','g');
						return reg.test(el.className);
					};
div = null;
export function hasClass(el,className){
	var classNames = trim(className).split(/\s+/g),
		len = classNames.length;

	for(;len--;){
		if(!contain(el,classNames[len])){
			return false;
		}
	}
	return true;
}

