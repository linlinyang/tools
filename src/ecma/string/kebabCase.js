/**
 * cover string to kebab case
 *
 * @param {string} str;
 * @return {string};
 * 
 * @example
 *
 * var str = 'ThisIsSomeString';
 * Lin.kebabCase(str);
 * // => This-is-some-string
 *
 *
*/

function kebabCase(str){
	return str.replace(/([A-Z])/g,"-$1").toLowerCase();
}

export default kebabCase;