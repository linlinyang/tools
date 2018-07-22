import trim from '../string/trim';

/**
 * format date
 *
 * @param {Date} date;The date to format.
 * @param {String} fmt;The style of date.
 * @returns {String|Object} Returns the format date string if exist or null if not.
 * @example
 *
 * Lin.formatDate();
 * // => null
 *
 * Lin.formatDate('some string');
 * // => null
 *
 * Lin.formatDate(new Date());
 * // => new Date()
 * 
 * Lin.formatDate(dateObject,'y-m-d h:i:s/S');
 * // => 'year-month-day hour:minute:seconds/milliseconds'
 *
 * y --- year
 * m --- month
 * d --- day
 * h --- hour
 * i --- minutes
 * s --- seconds
 * S --- milliseconds
 *
 */

export default function formatDate(date,fmt){
	if(!date || !(date instanceof Date) ){
		return null
	}
	if(!fmt || !(fmt = trim(fmt))){
		return date;
	}
	var fmtObj = {
		'y': date.getFullYear(),
		'm': date.getMonth() + 1,
		'd': date.getDate(),
		'h': date.getHours(),
		'i': date.getMinutes(),
		's': date.getSeconds(),
		'S': date.getMilliseconds()
	}
	for(var key in fmtObj){
		if(fmtObj.hasOwnProperty(key)){
			var reg = new RegExp('(' + key + ')');
			fmt = fmt.replace(reg,fmtObj[key]);
		}
	}
	return fmt;
}