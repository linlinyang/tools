function init(Lin){
	importAll(require.context('./ecma/polyfill/', true, /\.js$/),Lin);
	importAll(require.context('./ecma/', true, /\.js$/),Lin)
}

function importAll(rsq,Lin){
	var files = rsq.keys();
	for(var i = 0, len = files.length; i < len; i++){
		var pathName = files[i],
			module = rsq(pathName),
			funcName = pathName.substring(pathName.lastIndexOf('/') + 1, pathName.lastIndexOf('.'));

		for(var key in module){
			if(module.hasOwnProperty(key)){
				if(key === 'default'){
					Lin[funcName] = module[key];
				}else{
					Lin[key] = module[key];
				}
			}
		}
	}
}

export default init;