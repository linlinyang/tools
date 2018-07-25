import trim from './trim';

/**
 * covert some value to userful value
 *
 * @param {anyval} val;
 * @return {string|number}; return coverted value;coverted false will be return undefined
 * 
 * @example
 * 
 *
 * Lin.toString('abc')
 * // => 'abc'
 *
 * Lin.toString(123)
 * // => 123
 *
 * Lin.toString(null)
 * // => '0'
 *
 * Lin.toString(true)
 * // => '1'
 *
 * Lin.toString({})
 * // => '[object Object]'
 *
*/
export default function toString(val){
	if(val === null || val === false){
		return 0;
	}
	if(val === true){
		return 1;
	}
	if(typeof val === 'string'){
		return trim(val);
	}
	if(typeof val === 'number'){
		return isNaN(val) || !isFinite(val) ? 0 : val;
	}
	if(val && val.toString){
		return val.toString();
	}
	return undefined;
}