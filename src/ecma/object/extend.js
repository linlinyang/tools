import isPlainObject from './isPlainObject';
/**
 * merge two object
 *
 * @param {object} to;
 * @return {object} from;merge from to 'to' array
 * 
 * @example
 *
 * var to = {name: 'zoro',zge: 20},
 		from = {name: 'snake',friends: ['Nami','Luobing']}
 * Lin.extend(to,from);
 * // => {name: 'snake',age: 20,friends: ['Nami','Luobing']}
 *
 *
*/
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