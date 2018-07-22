export default function randomStr(len){
	var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
		maxLen = str.length,
		ret = '';
	len = (len && parseInt(len)) || 32;
	while(len--){
		ret += str.charAt(Math.random()*maxLen);
	}
	return ret;
}