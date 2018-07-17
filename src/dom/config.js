var win = window,
	doc = document,
	defaultView = doc.defaultView,
	rootEl = doc.compatMode === 'CSS1Compat' ? doc.documentElement : doc.body;

export {
	win,doc,defaultView,rootEl
}