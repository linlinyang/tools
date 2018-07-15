import isPlainObject from './isPlainObject';

function extend(to,from){
	if(!isPlainObject(from)){
		return to;
	}
	var keys = Object.keys(from);
	for(var len = keys.length;len--;){
		to[keys[len]] = from[keys[len]];
	}
	return to;
}

export default extend;