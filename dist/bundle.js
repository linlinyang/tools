/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ecma/splitContain.js":
/*!**********************************!*\
  !*** ./src/ecma/splitContain.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nfunction splitContain(pStr,cStr,delimiter){\r\n\tdelimiter = delimiter || /\\s+/g;\r\n\r\n\tvar arr = cStr.split(delimiter),\r\n\t\tlen = arr.length;\r\n\tpStr = pStr.split(delimiter);\r\n\r\n\twhile(len--){\r\n\t\tif(pStr.indexOf(arr[len]) === -1){ return false; }\r\n\t}\r\n\treturn true;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (splitContain);\n\n//# sourceURL=webpack:///./src/ecma/splitContain.js?");

/***/ }),

/***/ "./src/ecma/toUrlParams.js":
/*!*********************************!*\
  !*** ./src/ecma/toUrlParams.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _usefulString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usefulString */ \"./src/ecma/usefulString.js\");\n\r\n\r\nfunction toUrlParams(data,url){\r\n\tif(data === null || typeof data !== 'object' ){\r\n\t\treturn url;\r\n\t}\r\n\r\n\tvar paramsArr = [];\r\n\tfor(var k in data){\r\n\t\tvar val = Object(_usefulString__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data[k]);\r\n\t\tif(val === undefined || !data.hasOwnProperty(k)){ continue ;}\r\n\t\tparamsArr.push(encodeURIComponent(k)+'='+encodeURIComponent(val));\r\n\t}\r\n\t\r\n\tvar paramsStr = paramsArr.join('&');\r\n\r\n\tif(url){\r\n\t\tif(url.indexOf('?') > -1){\r\n\t\t\treturn url.slice(-1) === '&' \r\n\t\t\t\t? url + paramsStr \r\n\t\t\t\t: url + '&' + paramsStr;\r\n\t\t}else{\r\n\t\t\treturn url + '?' + paramsStr;\r\n\t\t}\r\n\t}else{\r\n\t\treturn paramsStr;\r\n\t}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (toUrlParams);\n\n//# sourceURL=webpack:///./src/ecma/toUrlParams.js?");

/***/ }),

/***/ "./src/ecma/usefulString.js":
/*!**********************************!*\
  !*** ./src/ecma/usefulString.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nfunction usefulString(val){\r\n\tif(\r\n\t\t(typeof val === 'object' && val !== null) || \r\n\t\ttypeof val === 'function' || \r\n\t\ttypeof val === 'symbol'\r\n\t){\r\n\t\treturn undefined;\r\n\t}\r\n\tif(val === null || val === false){\r\n\t\treturn 0;\r\n\t}\r\n\tif(val === true){\r\n\t\treturn 1;\r\n\t}\r\n\treturn val;\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (usefulString);\n\n//# sourceURL=webpack:///./src/ecma/usefulString.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ecma_splitContain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ecma/splitContain */ \"./src/ecma/splitContain.js\");\n/* harmony import */ var _ecma_toUrlParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ecma/toUrlParams */ \"./src/ecma/toUrlParams.js\");\n//import isbase from \"./ecma/isbase\";\r\n//import isArray from \"./ecma/isArray\";\r\n//import repeatStr from \"./ecma/repeatStr\";\r\n\r\n\r\n\r\nvar res = Object(_ecma_toUrlParams__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n\tuname: 'zoro',\r\n\tage: '20'\r\n},'http://baidu.com');\r\nconsole.log(res);\r\n\r\nvar res1 = Object(_ecma_toUrlParams__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n\tuname: 'zoro',\r\n\tage: '20'\r\n},'http://baidu.com?a=2');\r\nconsole.log(res1);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });