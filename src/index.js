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

var arr = [1,2,3,[4,5,5,[6,7,8,[2,3,'a']]]];
var tt = deepFlatten(arr);
console.log(tt);