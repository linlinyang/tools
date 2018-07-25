/**
 * shuffle array
 *
 * @param {array} arr;
 * @return {array};return the origin array
 * 
 * @example
 *
 * var arr = [4,2,6,4,6,1];
 * Lin.shuffle(arr);
 * // => may be [6,6,4,4,2,1]
 * // => or [6,1,2,4,4,6]
 *
 *
*/

function shuffle(arr){
	return arr.sort(function(){
		return Math.random() > 0.5;
	});
}

export default shuffle;