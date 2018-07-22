import extend from '../object/extend';
import isPlainObject from '../object/isPlainObject';
import toURLParam from './toURLParam';

/**
 * send ajax request
 *
 * @param {Object} option;ajax params
 * 
 * option.url {string};required
 * option.data {object};can send FormData object
 * option.type {string} [get|post];default -> get
 * option.success {function};callback for ajax success
 * option.error {function}; callback for ajax fail
 * 
 * @example
 * Lin.ajax({
		url: 'index.php',
		data: {
			a: 'zoro--a',
			b: 'some b value'
		},
		success: function(data){
			console.log(data);
		},
		error: function(){
			console.log('ajax error');
		}
	});
 *
 * var data = new FormData();
 * data.append('a','zoro--a');
 * data.append('b','some b value');
 * Lin.jsonp({
		url: 'index.php',
		data:data,
		success: function(data){
			console.log(data);
		},
		error: function(){
			console.log('ajax error');
		}
	});
 *
*/

export function ajax(option){
	if(!isPlainObject(option)){
		throw new Error('Expect a object as option');
	}
	option = extend({
		type: 'get',
		async: true,
		duration: 0
	},option);
	var url = option.url;

	if(!url){
		throw new Error('url params must be require');
	}
	var xhrObj = new XMLHttpRequest(),
		data = option.data,
		type = option.type.toLowerCase();

	xhrObj.onreadystatechange = function(){
		if(xhrObj.readyState === 4){
			var status = xhrObj.status;
			if(status >= 200 && status < 300){
				try{
					option.success && option.success(JSON.parse(xhrObj.responseText));	
				}catch(ex){};
			}else{
				option.error && option.error(status);
			}
		}
	};

	if(type === 'get'){
		url = toURLParam(data,url);
		xhrObj.open('GET',url,!!option.async);
		xhrObj.send(null);
	}else{
		xhrObj.open('POST',url,!!option.async);
		if(data instanceof FormData){
			xhrObj.send(data);
		}else{
			xhrObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhrObj.send(toURLParam(data));
		}
	}

}

