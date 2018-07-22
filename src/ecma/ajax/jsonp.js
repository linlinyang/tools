import extend from '../object/extend';
import randomStr from '../string/randomStr';
import toURLParam from './toURLParam';

/**
 * send jsonp request
 *
 * @param {Object} option;json params
 * 
 * option.url {string};required
 * option.data {object};can send FormData object
 * option.time {number} [10000];request time,over it will fire error function
 * option.callback {string} [callback];point function name as callback
 * option.jsonpCallback {string};recive function name,default as random string
 * option.success {function};callback for ajax success
 * option.error {function}; callback for ajax fail
 * 
 * @example
 * Lin.jsonp({
		url: 'http://cross_host/index.php',
		data: {
			a: 'zoro--a',
			b: 'some b value'
		},
		callback: 'callback';
		success: function(data){
			console.log(data);
		},
		error: function(){
			console.log('ajax error');
		}
	});
 *
*/

export default function jsonp(option){
	option = extend({
		overtime: 10000
	},option);
	var url = option.url;
	if(!url || typeof url !== 'string'){
		throw new Error('Expect a string as url');
	}
	var jsonpCallback = createCallbackFunction(option),
		callback = option.callback || 'callback',
		data = option.data;
	data[callback] = jsonpCallback;
	url = toURLParam(data,option.url);

	var script = document.createElement('script');
	script.src = url;
	script.type = 'text/javascript';
	script.async = true;
	document.body.appendChild(script);
	script.parentNode && script.parentNode.removeChild(script);
	script = null;

}

function createCallbackFunction(opt){
	var win = window,
		funcName = opt['jsonpCallback'];
	if(!funcName){
		do{
			funcName = 'LinJsonpCallFunc' + randomStr(10);
		}while(win[funcName]);
	}
	if(opt.time){
		opt.timer = setTimeout(function(){
			var error = opt.error;
			try{
				error && typeof error === 'function' && error();
			}catch(ex){};
		},opt.time);
	}
	var originFunc = win[funcName];
	originFunc = (typeof originFunc === 'function') && originFunc;
	win[funcName] = function(data){
		try{
			originFunc && originFunc(data);
			var success = opt.success;
			success && typeof success === 'function' && success(data);
			clearTimeout(opt.timer);
		}catch(ex){};
		win[funcName] = originFunc || undefined;
	};

	return funcName;
}