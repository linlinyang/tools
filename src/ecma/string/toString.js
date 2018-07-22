import trim from './trim';

export default function toString(val){
	if(val === null || val === false){
		return '0';
	}
	if(val === true){
		return '1';
	}
	if(typeof val === 'string'){
		return trim(val);
	}
	if(typeof val === 'number'){
		return isNaN(val) ? 0 : val;
	}
	if(val && val.toString){
		return val.toString();
	}
	return undefined;
}