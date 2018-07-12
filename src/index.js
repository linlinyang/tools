//import * from './ecma/polyfill/index';
//import isbase from "./ecma/isbase";
//import isArray from "./ecma/isArray";
//import repeatStr from "./ecma/repeatStr";
// import splitContain from "./ecma/splitContain";
// import toUrlParams from "./ecma/toUrlParams";
// import shuffle from "./ecma/shuffle";
// import padLeft from "./ecma/padLeft";
// import padRight from "./ecma/padRight";
// import nodeIndex from "./dom/nodeIndex";
// import chunk from "./ecma/chunk";
// import compact from "./ecma/compact";
// import countOccurrences from "./ecma/countOccurrences";
// import unique from "./ecma/unique";
import deepFlatten from "./ecma/deepFlatten";
import difference from "./ecma/difference";

var arr1 = [1,3,5,7,8,9,10],
	arr2 = [2,4,6,8,10];
var tt = difference(arr1,arr2);
console.log(tt);
