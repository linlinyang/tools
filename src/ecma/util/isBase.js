
function isbase(val){
	return typeof val === 'string'
		|| typeof val === 'number'
		|| typeof val === 'boolean';
}

export default isbase;