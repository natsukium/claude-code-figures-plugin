import { n as e, t } from "./chunk-mathjax-glyphs-CDRzZSH6.js";
import { a as n, c as r, i, l as a, n as o, o as s, r as c, s as l, t as u, u as d } from "./chunk-mathjax-glyphs-C7Z3kWTk.js";
import { _ as f, a as p, b as m, c as h, d as g, f as ee, g as te, h as ne, i as re, l as ie, m as ae, n as oe, o as se, p as ce, r as le, s as ue, t as de, u as fe, v as pe, x as me, y as he } from "./chunk-mathjax-glyphs-3NV1ybv8.js";
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/components/version.js
var ge = "4.1.3", _e = class e {
	constructor() {
		this.items = [], this.items = [];
	}
	[Symbol.iterator]() {
		let e = 0, t = this.items;
		return { next() {
			return {
				value: t[e++],
				done: e > t.length
			};
		} };
	}
	add(t, n = e.DEFAULTPRIORITY) {
		let r = this.items.length;
		do
			r--;
		while (r >= 0 && n < this.items[r].priority);
		return this.items.splice(r + 1, 0, {
			item: t,
			priority: n
		}), t;
	}
	remove(e) {
		let t = this.items.length;
		do
			t--;
		while (t >= 0 && this.items[t].item !== e);
		return t >= 0 && this.items.splice(t, 1), this;
	}
};
_e.DEFAULTPRIORITY = 5;
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/HandlerList.js
var ve = class extends _e {
	register(e) {
		return this.add(e, e.priority);
	}
	unregister(e) {
		this.remove(e);
	}
	handlesDocument(e) {
		for (let t of this) {
			let n = t.item;
			if (n.handlesDocument(e)) return n;
		}
		throw Error("Can't find handler for document");
	}
	document(e, t = null) {
		return this.handlesDocument(e).create(e, t);
	}
};
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/util/Retries.js
function ye(e) {
	return new Promise(function t(n, r) {
		let i = (e) => {
			e.retry instanceof Promise ? e.retry.then(() => t(n, r)).catch((e) => r(e)) : e.restart?.isCallback ? MathJax.Callback.After(() => t(n, r), e.restart) : r(e);
		};
		try {
			let t = e();
			t instanceof Promise ? t.then((e) => n(e)).catch((e) => i(e)) : n(t);
		} catch (e) {
			i(e);
		}
	});
}
function be(e) {
	let t = /* @__PURE__ */ Error("MathJax retry -- an asynchronous action is required; try using one of the promise-based functions and await its resolution.");
	throw t.retry = e, t;
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/util/context.js
var xe = typeof window < "u", Se = typeof exports < "u", Ce = {
	window: xe ? window : null,
	document: xe ? window.document : null,
	os: (() => {
		if (xe && window.navigator) {
			let e = window.navigator.appVersion;
			for (let [t, n] of [
				["Win", "Windows"],
				["Mac", "MacOS"],
				["X11", "Unix"],
				["Linux", "Unix"]
			]) if (e.includes(t)) return n;
			if (window.navigator.userAgent.includes("Android")) return "Unix";
		} else if (typeof process < "u") return {
			linux: "Unix",
			android: "Unix",
			aix: "Unix",
			freebsd: "Unix",
			netbsd: "Unix",
			openbsd: "Unix",
			sunos: "Unix",
			darwin: "MacOS",
			win32: "Windows",
			cygwin: "Windows"
		}[process.platform] || process.platform;
		return "unknown";
	})(),
	path: (e) => e
};
Ce.os === "Windows" && (Ce.path = (e) => e.match(/^[/\\]?[a-zA-Z]:[/\\]/) ? (Se ? "" : "file://") + e.replace(/\\/g, "/").replace(/^\//, "") : e.replace(/^\//, "file:///"));
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/mathjax.js
var we = {
	version: ge,
	context: Ce,
	handlers: new ve(),
	document: function(e, t) {
		return we.handlers.document(e, t);
	},
	handleRetriesFor: ye,
	retryAfter: be,
	asyncLoad: null,
	asyncIsSynchronous: !1
}, Te = {}.constructor;
function Ee(e) {
	return typeof e == "object" && !!e && (e.constructor === Te || e.constructor === Oe);
}
var De = {
	invalidOption: "warn",
	optionError: (e, t) => {
		if (De.invalidOption === "fatal") throw Error(e);
		console.warn("MathJax: " + e);
	}
}, Oe = class {};
function ke(e) {
	return Object.assign(Object.create(Oe.prototype), e);
}
function Ae(e) {
	return Array.isArray(e) ? e : [e];
}
function je(e) {
	return e ? Object.keys(e).concat(Object.getOwnPropertySymbols(e)) : [];
}
function Me(e) {
	let t = {};
	for (let n of je(e)) {
		let r = Object.getOwnPropertyDescriptor(e, n), i = r.value;
		Array.isArray(i) ? r.value = Ne([], i, !1) : Ee(i) && (r.value = Me(i)), r.enumerable && (t[n] = r);
	}
	return Object.defineProperties(e.constructor === Oe ? ke({}) : {}, t);
}
function Ne(e, t, n = !0) {
	for (let r of je(t)) {
		if (n && e[r] === void 0 && e.constructor !== Oe) {
			typeof r == "symbol" && (r = r.toString()), De.optionError(`Invalid option "${r}" (no default value).`, r);
			continue;
		}
		let i = t[r], a = e[r];
		if (Ee(i) && a !== null && (typeof a == "object" || typeof a == "function")) {
			let t = je(i);
			Array.isArray(a) && (t.length === 1 && (t[0] === "[+]" || t[0] === "[-]") && Array.isArray(i[t[0]]) || t.length === 2 && t.sort().join(",") === "[+],[-]" && Array.isArray(i["[+]"]) && Array.isArray(i["[-]"])) ? (i["[-]"] && (a = e[r] = a.filter((e) => i["[-]"].indexOf(e) < 0)), i["[+]"] && (e[r] = [...a, ...i["[+]"]])) : Ne(a, i, n);
		} else Array.isArray(i) ? (e[r] = [], Ne(e[r], i, !1)) : Ee(i) ? e[r] = Me(i) : e[r] = i;
	}
	return e;
}
function _(e, ...t) {
	return t.forEach((t) => Ne(e, t, !1)), e;
}
function Pe(e, ...t) {
	return t.forEach((t) => Ne(e, t, !0)), e;
}
function Fe(e, ...t) {
	let n = [];
	for (let r of t) {
		let t = {}, i = {};
		for (let n of Object.keys(e || {})) (r[n] === void 0 ? i : t)[n] = e[n];
		n.push(t), e = i;
	}
	return n.unshift(e), n;
}
function Ie(e, t, n = null) {
	return Object.hasOwn(t, e) ? t[e] : n;
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/util/FunctionList.js
var Le = class extends _e {
	constructor(e = null) {
		super(), e && this.addList(e);
	}
	addList(e) {
		for (let t of e) Array.isArray(t) ? this.add(t[0], t[1]) : this.add(t);
	}
	execute(...e) {
		for (let t of this) if (t.item(...e) === !1) return !1;
		return !0;
	}
	asyncExecute(...e) {
		let t = -1, n = this.items;
		return new Promise((r, i) => {
			(function a() {
				for (; ++t < n.length;) {
					let o = n[t].item(...e);
					if (o instanceof Promise) {
						o.then(a).catch((e) => i(e));
						return;
					}
					if (o === !1) {
						r(!1);
						return;
					}
				}
				r(!0);
			})();
		});
	}
}, Re = class {
	constructor(e = {}) {
		this.adaptor = null, this.mmlFactory = null;
		let t = this.constructor;
		this.options = Pe(_({}, t.OPTIONS), e), this.preFilters = new Le(this.options.preFilters), this.postFilters = new Le(this.options.postFilters);
	}
	get name() {
		return this.constructor.NAME;
	}
	setAdaptor(e) {
		this.adaptor = e;
	}
	setMmlFactory(e) {
		this.mmlFactory = e;
	}
	initialize() {}
	reset(...e) {}
	get processStrings() {
		return !0;
	}
	findMath(e, t) {
		return [];
	}
	executeFilters(e, t, n, r) {
		let i = {
			math: t,
			document: n,
			data: r
		};
		return e.execute(i), i.data;
	}
};
Re.NAME = "generic", Re.OPTIONS = {
	preFilters: [],
	postFilters: []
};
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/FindMath.js
var ze = class {
	constructor(e) {
		let t = this.constructor;
		this.options = Pe(_({}, t.OPTIONS), e);
	}
};
ze.OPTIONS = {};
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/util/string.js
function Be(e, t) {
	return e.length === t.length ? e === t ? 0 : e < t ? -1 : 1 : t.length - e.length;
}
function Ve(e) {
	return e.replace(/([\^$(){}.+*?\-|[\]:\\])/g, "\\$1");
}
function He(e) {
	return Array.from(e).map((e) => e.codePointAt(0));
}
function Ue(e) {
	return String.fromCodePoint(...e);
}
function We(e) {
	return !!e.match(/%\s*$/);
}
function Ge(e) {
	return e.trim().split(/\s+/);
}
function Ke(e) {
	return e.replace(/\\U(?:([0-9A-Fa-f]{4})|\{\s*([0-9A-Fa-f]{1,6})\s*\})|\\./g, (e, t, n) => e === "\\\\" ? "\\" : String.fromCodePoint(parseInt(t || n, 16)));
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MathItem.js
function qe(e, t, n, r, i, a, o = null) {
	return {
		open: e,
		math: t,
		close: n,
		n: r,
		start: { n: i },
		end: { n: a },
		display: o
	};
}
var Je = class {
	get isEscaped() {
		return this.display === null;
	}
	constructor(e, t, n = !0, r = {
		i: 0,
		n: 0,
		delim: ""
	}, i = {
		i: 0,
		n: 0,
		delim: ""
	}) {
		this.root = null, this.typesetRoot = null, this.metrics = {}, this.inputData = {}, this.outputData = {}, this._state = v.UNPROCESSED, this.math = e, this.inputJax = t, this.display = n, this.start = r, this.end = i, this.root = null, this.typesetRoot = null, this.metrics = {}, this.inputData = {}, this.outputData = {};
	}
	render(e) {
		e.renderActions.renderMath(this, e);
	}
	rerender(e, t = v.RERENDER) {
		this.state() >= t && this.state(t - 1), e.renderActions.renderMath(this, e, t);
	}
	convert(e, t = v.LAST) {
		e.renderActions.renderConvert(this, e, t);
	}
	compile(e) {
		this.state() < v.COMPILED && (this.root = this.inputJax.compile(this, e), this.state(v.COMPILED));
	}
	typeset(e) {
		this.state() < v.TYPESET && (this.typesetRoot = e.outputJax[this.isEscaped ? "escaped" : "typeset"](this, e), this.state(v.TYPESET));
	}
	updateDocument(e) {}
	removeFromDocument(e = !1) {
		this.clear();
	}
	setMetrics(e, t, n, r) {
		this.metrics = {
			em: e,
			ex: t,
			containerWidth: n,
			scale: r
		};
	}
	state(e = null, t = !1) {
		return e != null && (e < v.INSERTED && this._state >= v.INSERTED && this.removeFromDocument(t), e < v.TYPESET && this._state >= v.TYPESET && (this.outputData = {}), e < v.COMPILED && this._state >= v.COMPILED && (this.inputData = {}), this._state = e), this._state;
	}
	reset(e = !1) {
		this.state(v.UNPROCESSED, e);
	}
	clear() {}
}, v = {
	UNPROCESSED: 0,
	FINDMATH: 10,
	COMPILED: 20,
	CONVERT: 100,
	METRICS: 110,
	RERENDER: 125,
	TYPESET: 150,
	INSERTED: 200,
	LAST: 1e4
};
function Ye(e, t) {
	if (e in v) throw Error("State " + e + " already exists");
	v[e] = t;
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/FindTeX.js
var Xe = class extends ze {
	constructor(e) {
		super(e), this.getPatterns();
	}
	getPatterns() {
		let e = this.options, t = [], n = [], r = [];
		this.end = {}, this.env = this.sub = 0;
		let i = 1;
		e.inlineMath.forEach((e) => this.addPattern(t, e, !1)), e.displayMath.forEach((e) => this.addPattern(t, e, !0)), t.length && n.push(t.sort(Be).join("|")), e.processEnvironments && (n.push("\\\\begin\\s*\\{([^}]*)\\}"), this.env = i, i++), e.processEscapes && r.push("\\\\([\\\\$])"), e.processRefs && r.push("(\\\\(?:eq)?ref\\s*\\{[^}]*\\})"), r.length && (n.push("(" + r.join("|") + ")"), this.sub = i), this.start = new RegExp(n.join("|"), "g"), this.hasPatterns = n.length > 0;
	}
	addPattern(e, t, n) {
		let [r, i] = t;
		e.push(Ve(r)), this.end[r] = [
			i,
			n,
			this.endPattern(i)
		];
	}
	endPattern(e, t) {
		return RegExp((t || Ve(e)) + "|\\\\(?:[a-zA-Z]|.)|[{}]", "g");
	}
	findEnd(e, t, n, r) {
		let [i, a, o] = r, s = o.lastIndex = n.index + n[0].length, c, l = 0;
		for (; c = o.exec(e);) if ((c[1] || c[0]) === i && l === 0) return qe(n[0], e.substring(s, c.index), c[0], t, n.index, c.index + c[0].length, a);
		else c[0] === "{" ? l++ : c[0] === "}" && l && l--;
		return null;
	}
	findMathInString(e, t, n) {
		let r, i;
		for (this.start.lastIndex = 0; r = this.start.exec(n);) {
			if (r[this.env] !== void 0 && this.env) {
				let e = "\\\\end\\s*(\\{" + Ve(r[this.env]) + "\\})";
				i = this.findEnd(n, t, r, [
					"{" + r[this.env] + "}",
					!0,
					this.endPattern(null, e)
				]), i && (i.math = i.open + i.math + i.close, i.open = i.close = "");
			} else if (r[this.sub] !== void 0 && this.sub) {
				let e = r[this.sub], n = r.index + r[this.sub].length;
				i = e.length === 2 ? qe("\\", e.substring(1), "", t, r.index, n) : qe("", e, "", t, r.index, n, !1);
			} else i = this.findEnd(n, t, r, this.end[r[0]]);
			i && (e.push(i), this.start.lastIndex = i.end.n);
		}
	}
	findMath(e) {
		let t = [];
		if (this.hasPatterns) for (let n = 0, r = e.length; n < r; n++) this.findMathInString(t, n, e[n]);
		return t;
	}
};
Xe.OPTIONS = {
	inlineMath: [["\\(", "\\)"]],
	displayMath: [["$$", "$$"], ["\\[", "\\]"]],
	processEscapes: !0,
	processEnvironments: !0,
	processRefs: !0
};
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/Attributes.js
var y = "_inherit_", Ze = class {
	constructor(e, t) {
		this.global = t, this.defaults = Object.create(t), this.inherited = Object.create(this.defaults), this.attributes = Object.create(this.inherited), Object.assign(this.defaults, e);
	}
	set(e, t) {
		this.attributes[e] = t;
	}
	setList(e) {
		Object.assign(this.attributes, e);
	}
	unset(e) {
		delete this.attributes[e];
	}
	get(e) {
		let t = this.attributes[e];
		return t === "_inherit_" && (t = this.global[e]), t;
	}
	getExplicit(e) {
		return this.hasExplicit(e) ? this.attributes[e] : void 0;
	}
	hasExplicit(e) {
		return Object.hasOwn(this.attributes, e);
	}
	hasOneOf(e) {
		for (let t of e) if (this.hasExplicit(t)) return !0;
		return !1;
	}
	getList(...e) {
		let t = {};
		for (let n of e) t[n] = this.get(n);
		return t;
	}
	setInherited(e, t) {
		this.inherited[e] = t;
	}
	getInherited(e) {
		return this.inherited[e];
	}
	getDefault(e) {
		return this.defaults[e];
	}
	isSet(e) {
		return Object.hasOwn(this.attributes, e) || Object.hasOwn(this.inherited, e);
	}
	hasDefault(e) {
		return e in this.defaults;
	}
	getExplicitNames() {
		return Object.keys(this.attributes);
	}
	getInheritedNames() {
		return Object.keys(this.inherited);
	}
	getDefaultNames() {
		return Object.keys(this.defaults);
	}
	getGlobalNames() {
		return Object.keys(this.global);
	}
	getAllAttributes() {
		return this.attributes;
	}
	getAllInherited() {
		return this.inherited;
	}
	getAllDefaults() {
		return this.defaults;
	}
	getAllGlobals() {
		return this.global;
	}
}, Qe = class {
	constructor(e, t = {}, n = []) {
		this.factory = e, this.parent = null, this.properties = {}, this.childNodes = [];
		for (let e of Object.keys(t)) this.setProperty(e, t[e]);
		n.length && this.setChildren(n);
	}
	get kind() {
		return "unknown";
	}
	setProperty(e, t) {
		this.properties[e] = t;
	}
	getProperty(e) {
		return this.properties[e];
	}
	getPropertyNames() {
		return Object.keys(this.properties);
	}
	getAllProperties() {
		return this.properties;
	}
	removeProperty(...e) {
		for (let t of e) delete this.properties[t];
	}
	isKind(e) {
		return this.factory.nodeIsKind(this, e);
	}
	setChildren(e) {
		this.childNodes = [];
		for (let t of e) this.appendChild(t);
	}
	appendChild(e) {
		return this.childNodes.push(e), e.parent = this, e;
	}
	replaceChild(e, t) {
		let n = this.childIndex(t);
		return n !== null && (this.childNodes[n] = e, e.parent = this, t.parent === this && (t.parent = null)), e;
	}
	removeChild(e) {
		let t = this.childIndex(e);
		return t !== null && (this.childNodes.splice(t, 1), e.parent = null), e;
	}
	childIndex(e) {
		let t = this.childNodes.indexOf(e);
		return t === -1 ? null : t;
	}
	copy() {
		let e = this.factory.create(this.kind);
		e.properties = Object.assign({}, this.properties);
		for (let t of this.childNodes || []) t && e.appendChild(t.copy());
		return e;
	}
	findNodes(e) {
		let t = [];
		return this.walkTree((n) => {
			n.isKind(e) && t.push(n);
		}), t;
	}
	walkTree(e, t) {
		e(this, t);
		for (let n of this.childNodes) n && n.walkTree(e, t);
		return t;
	}
	toString() {
		return this.kind + "(" + this.childNodes.join(",") + ")";
	}
}, $e = class extends Qe {
	setChildren(e) {}
	appendChild(e) {
		return e;
	}
	replaceChild(e, t) {
		return t;
	}
	childIndex(e) {
		return null;
	}
	walkTree(e, t) {
		return e(this, t), t;
	}
	toString() {
		return this.kind;
	}
}, b = {
	ORD: 0,
	OP: 1,
	BIN: 2,
	REL: 3,
	OPEN: 4,
	CLOSE: 5,
	PUNCT: 6,
	INNER: 7,
	NONE: -1
}, et = [
	"ORD",
	"OP",
	"BIN",
	"REL",
	"OPEN",
	"CLOSE",
	"PUNCT",
	"INNER"
], tt = [
	"",
	"thinmathspace",
	"mediummathspace",
	"thickmathspace"
], nt = [
	[
		0,
		-1,
		2,
		3,
		0,
		0,
		0,
		1
	],
	[
		-1,
		-1,
		0,
		3,
		0,
		0,
		0,
		1
	],
	[
		2,
		2,
		0,
		0,
		2,
		0,
		0,
		2
	],
	[
		3,
		3,
		0,
		0,
		3,
		0,
		0,
		3
	],
	[
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		0,
		-1,
		2,
		3,
		0,
		0,
		0,
		1
	],
	[
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1
	],
	[
		1,
		-1,
		2,
		3,
		1,
		0,
		1,
		1
	]
], rt = /* @__PURE__ */ new Set([
	"normal",
	"bold",
	"italic",
	"bold-italic",
	"double-struck",
	"fraktur",
	"bold-fraktur",
	"script",
	"bold-script",
	"sans-serif",
	"bold-sans-serif",
	"sans-serif-italic",
	"sans-serif-bold-italic",
	"monospace",
	"inital",
	"tailed",
	"looped",
	"stretched"
]), it = [
	"indentalign",
	"indentalignfirst",
	"indentshift",
	"indentshiftfirst"
], x = class e extends Qe {
	constructor(e, t = {}, n = []) {
		super(e), this.prevClass = null, this.prevLevel = null, this.texclass = null, this.arity < 0 && (this.childNodes = [e.create("inferredMrow")], this.childNodes[0].parent = this), this.setChildren(n), this.attributes = new Ze(e.getNodeClass(this.kind).defaults, e.getNodeClass("math").defaults), this.attributes.setList(t);
	}
	copy(e = !1) {
		let t = this.factory.create(this.kind);
		if (t.properties = Object.assign({}, this.properties), this.attributes) {
			let n = this.attributes.getAllAttributes();
			for (let r of Object.keys(n)) (r !== "id" || e) && t.attributes.set(r, n[r]);
		}
		if (this.childNodes && this.childNodes.length) {
			let e = this.childNodes;
			e.length === 1 && e[0].isInferred && (e = e[0].childNodes);
			for (let n of e) n ? t.appendChild(n.copy()) : t.childNodes.push(null);
		}
		return t;
	}
	get texClass() {
		return this.texclass;
	}
	set texClass(e) {
		this.texclass = e;
	}
	get isToken() {
		return !1;
	}
	get isEmbellished() {
		return !1;
	}
	get isSpacelike() {
		return !1;
	}
	get linebreakContainer() {
		return !1;
	}
	get linebreakAlign() {
		return "data-align";
	}
	get isEmpty() {
		for (let e of this.childNodes) if (e && !e.isEmpty) return !1;
		return !0;
	}
	get arity() {
		return Infinity;
	}
	get isInferred() {
		return !1;
	}
	get Parent() {
		let e = this.parent;
		for (; e && e.notParent;) e = e.Parent;
		return e;
	}
	get notParent() {
		return !1;
	}
	setChildren(e) {
		return this.arity < 0 ? this.childNodes[0].setChildren(e) : super.setChildren(e);
	}
	appendChild(e) {
		if (this.arity < 0) return this.childNodes[0].appendChild(e), e;
		if (e.isInferred) {
			if (this.arity === Infinity) return e.childNodes.forEach((e) => super.appendChild(e)), e;
			let t = e;
			e = this.factory.create("mrow"), e.setChildren(t.childNodes), e.attributes = t.attributes;
			for (let n of t.getPropertyNames()) e.setProperty(n, t.getProperty(n));
		}
		return super.appendChild(e);
	}
	replaceChild(e, t) {
		return this.arity < 0 ? (this.childNodes[0].replaceChild(e, t), e) : super.replaceChild(e, t);
	}
	core() {
		return this;
	}
	coreMO() {
		return this;
	}
	coreIndex() {
		return 0;
	}
	childPosition() {
		let e = null, t = this.parent;
		for (; t && t.notParent;) e = t, t = t.parent;
		if (e ||= this, t) {
			let n = 0;
			for (let r of t.childNodes) {
				if (r === e) return n;
				n++;
			}
		}
		return null;
	}
	setTeXclass(e) {
		return this.getPrevClass(e), this.texClass == null ? e : this;
	}
	updateTeXclass(e) {
		e && (this.prevClass = e.prevClass, this.prevLevel = e.prevLevel, e.prevClass = e.prevLevel = null, this.texClass = e.texClass);
	}
	getPrevClass(e) {
		e && (this.prevClass = e.texClass, this.prevLevel = e.attributes.get("scriptlevel"));
	}
	texSpacing() {
		let e = this.prevClass == null ? b.NONE : this.prevClass, t = this.texClass || b.ORD;
		if (e === b.NONE || t === b.NONE) return "";
		let n = nt[e][t];
		return (this.prevLevel > 0 || this.attributes.get("scriptlevel") > 0) && n >= 0 ? "" : tt[Math.abs(n)];
	}
	hasSpacingAttributes() {
		return this.isEmbellished && this.coreMO().hasSpacingAttributes();
	}
	setInheritedAttributes(t = {}, n = !1, r = 0, i = !1) {
		let a = this.attributes.getAllDefaults();
		for (let n of Object.keys(t)) {
			if (Object.hasOwn(a, n) || Object.hasOwn(e.alwaysInherit, n)) {
				let [r, i] = t[n];
				e.noInherit[r]?.[this.kind]?.[n] || this.attributes.setInherited(n, i);
			}
			e.stopInherit[this.kind]?.[n] && (t = Object.assign({}, t), delete t[n]);
		}
		this.attributes.getExplicit("displaystyle") === void 0 && this.attributes.setInherited("displaystyle", n), this.attributes.getExplicit("scriptlevel") === void 0 && this.attributes.setInherited("scriptlevel", r), i && this.setProperty("texprimestyle", i);
		let o = this.arity;
		if (o >= 0 && o !== Infinity && (o === 1 && this.childNodes.length === 0 || o !== 1 && this.childNodes.length !== o)) {
			if (o < this.childNodes.length) this.childNodes = this.childNodes.slice(0, o);
			else for (; this.childNodes.length < o;) this.appendChild(this.factory.create("mrow"));
		}
		if (this.linebreakContainer && !this.isEmbellished) {
			let e = this.linebreakAlign;
			if (e) {
				let n = this.attributes.get(e) || "left";
				t = this.addInheritedAttributes(t, {
					indentalign: n,
					indentshift: "0",
					indentalignfirst: n,
					indentshiftfirst: "0",
					indentalignlast: "indentalign",
					indentshiftlast: "indentshift"
				});
			}
		}
		this.setChildInheritedAttributes(t, n, r, i);
	}
	setChildInheritedAttributes(e, t, n, r) {
		for (let i of this.childNodes) i.setInheritedAttributes(e, t, n, r);
	}
	addInheritedAttributes(e, t) {
		let n = Object.assign({}, e);
		for (let e of Object.keys(t)) e !== "displaystyle" && e !== "scriptlevel" && e !== "style" && (n[e] = [this.kind, t[e]]);
		return n;
	}
	inheritAttributesFrom(e) {
		let t = e.attributes, n = t.get("displaystyle"), r = t.get("scriptlevel"), i = t.isSet("mathsize") ? { mathsize: ["math", t.get("mathsize")] } : {}, a = e.getProperty("texprimestyle") || !1;
		this.setInheritedAttributes(i, n, r, a);
	}
	verifyTree(e = null) {
		if (e === null) return;
		this.verifyAttributes(e);
		let t = this.arity;
		e.checkArity && t >= 0 && t !== Infinity && (t === 1 && this.childNodes.length === 0 || t !== 1 && this.childNodes.length !== t) && this.mError("Wrong number of children for \"" + this.kind + "\" node", e, !0), this.verifyChildren(e);
	}
	verifyAttributes(e) {
		if (e.checkAttributes) {
			let t = this.attributes, n = [];
			for (let e of t.getExplicitNames()) e.substring(0, 5) !== "data-" && t.getDefault(e) === void 0 && !e.match(/^(?:class|style|id|(?:xlink:)?href)$/) && n.push(e);
			n.length && this.mError("Unknown attributes for " + this.kind + " node: " + n.join(", "), e);
		}
		if (e.checkMathvariants) {
			let t = this.attributes.getExplicit("mathvariant");
			t && !rt.has(t) && !this.getProperty("ignore-variant") && this.mError(`Invalid mathvariant: ${t}`, e, !0);
		}
	}
	verifyChildren(e) {
		for (let t of this.childNodes) t.verifyTree(e);
	}
	mError(e, t, n = !1) {
		if (this.parent && this.parent.isKind("merror")) return null;
		let r = this.factory.create("merror");
		if (r.attributes.set("data-mjx-message", e), t.fullErrors || n) {
			let n = this.factory.create("mtext"), i = this.factory.create("text");
			i.setText(t.fullErrors ? e : this.kind), n.appendChild(i), r.appendChild(n), this.parent.replaceChild(r, this), t.fullErrors || r.attributes.set("title", e);
		} else this.parent.replaceChild(r, this), r.appendChild(this);
		return r;
	}
};
x.defaults = {
	mathbackground: y,
	mathcolor: y,
	mathsize: y,
	dir: y
}, x.noInherit = {
	mstyle: {
		mpadded: {
			width: !0,
			height: !0,
			depth: !0,
			lspace: !0,
			voffset: !0
		},
		mtable: {
			width: !0,
			height: !0,
			depth: !0,
			align: !0
		}
	},
	maligngroup: {
		mrow: { groupalign: !0 },
		mtable: { groupalign: !0 }
	},
	mtr: {
		msqrt: { "data-vertical-align": !0 },
		mroot: { "data-vertical-align": !0 }
	},
	mlabeledtr: {
		msqrt: { "data-vertical-align": !0 },
		mroot: { "data-vertical-align": !0 }
	}
}, x.stopInherit = { mtd: {
	columnalign: !0,
	rowalign: !0,
	groupalign: !0
} }, x.alwaysInherit = {
	scriptminsize: !0,
	scriptsizemultiplier: !0,
	infixlinebreakstyle: !0
}, x.verifyDefaults = {
	checkArity: !0,
	checkAttributes: !1,
	checkMathvariants: !0,
	fullErrors: !1,
	fixMmultiscripts: !0,
	fixMtables: !0
};
var S = class extends x {
	get isToken() {
		return !0;
	}
	get isEmpty() {
		for (let e of this.childNodes) if (!(e instanceof st) || e.getText().length) return !1;
		return !0;
	}
	getText() {
		let e = "";
		for (let t of this.childNodes) t instanceof st ? e += t.getText() : "textContent" in t && (e += t.textContent());
		return e;
	}
	setChildInheritedAttributes(e, t, n, r) {
		for (let i of this.childNodes) i instanceof x && i.setInheritedAttributes(e, t, n, r);
	}
	walkTree(e, t) {
		e(this, t);
		for (let n of this.childNodes) n instanceof x && n.walkTree(e, t);
		return t;
	}
};
S.defaults = Object.assign(Object.assign({}, x.defaults), {
	mathvariant: "normal",
	mathsize: y
});
var at = class extends x {
	get isSpacelike() {
		return this.childNodes[0].isSpacelike;
	}
	get isEmbellished() {
		return this.childNodes[0].isEmbellished;
	}
	get arity() {
		return -1;
	}
	core() {
		return this.childNodes[0];
	}
	coreMO() {
		return this.childNodes[0].coreMO();
	}
	setTeXclass(e) {
		return e = this.childNodes[0].setTeXclass(e), this.updateTeXclass(this.childNodes[0]), e;
	}
};
at.defaults = x.defaults;
var C = class extends x {
	get isEmbellished() {
		return this.childNodes[0].isEmbellished;
	}
	core() {
		return this.childNodes[0];
	}
	coreMO() {
		return this.childNodes[0].coreMO();
	}
	setTeXclass(e) {
		this.getPrevClass(e), this.texClass = b.ORD;
		let t = this.childNodes[0], n = null;
		t && (this.isEmbellished || t.isKind("mi") ? (n = t.setTeXclass(e), this.updateTeXclass(this.core())) : (t.setTeXclass(null), t.isKind("TeXAtom") && (this.texClass = t.texClass)));
		for (let e of this.childNodes.slice(1)) e && e.setTeXclass(null);
		return n || this;
	}
};
C.defaults = x.defaults;
var ot = class extends $e {
	get isToken() {
		return !1;
	}
	get isEmpty() {
		return !0;
	}
	get isEmbellished() {
		return !1;
	}
	get isSpacelike() {
		return !1;
	}
	get linebreakContainer() {
		return !1;
	}
	get linebreakAlign() {
		return "";
	}
	get arity() {
		return 0;
	}
	get isInferred() {
		return !1;
	}
	get notParent() {
		return !1;
	}
	get Parent() {
		return this.parent;
	}
	get texClass() {
		return b.NONE;
	}
	get prevClass() {
		return b.NONE;
	}
	get prevLevel() {
		return 0;
	}
	hasSpacingAttributes() {
		return !1;
	}
	get attributes() {
		return null;
	}
	core() {
		return this;
	}
	coreMO() {
		return this;
	}
	coreIndex() {
		return 0;
	}
	childPosition() {
		return 0;
	}
	setTeXclass(e) {
		return e;
	}
	texSpacing() {
		return "";
	}
	setInheritedAttributes(e, t, n, r) {}
	inheritAttributesFrom(e) {}
	verifyTree(e) {}
	mError(e, t, n = !1) {
		return null;
	}
}, st = class extends ot {
	constructor() {
		super(...arguments), this.text = "";
	}
	get kind() {
		return "text";
	}
	getText() {
		return this.text;
	}
	setText(e) {
		return this.text = e, this;
	}
	copy() {
		return this.factory.create(this.kind).setText(this.getText());
	}
	toString() {
		return this.text;
	}
}, ct = class extends ot {
	constructor() {
		super(...arguments), this.xml = null, this.adaptor = null;
	}
	get kind() {
		return "XML";
	}
	getXML() {
		return this.xml;
	}
	setXML(e, t = null) {
		return this.xml = e, this.adaptor = t, this;
	}
	getSerializedXML() {
		return this.adaptor.serializeXML(this.xml);
	}
	copy() {
		return this.factory.create(this.kind).setXML(this.adaptor.clone(this.xml));
	}
	toString() {
		return "XML data";
	}
};
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/OperatorDictionary.js
function w(e, t, n = b.BIN, r = null) {
	return [
		e,
		t,
		n,
		r
	];
}
var T = {
	REL: w(5, 5, b.REL),
	WIDEREL: w(5, 5, b.REL, {
		accent: !0,
		stretchy: !0
	}),
	BIN4: w(4, 4, b.BIN),
	RELSTRETCH: w(5, 5, b.REL, { stretchy: !0 }),
	ORD: w(0, 0, b.ORD),
	BIN3: w(3, 3, b.BIN),
	OPEN: w(0, 0, b.OPEN, {
		fence: !0,
		stretchy: !0,
		symmetric: !0
	}),
	CLOSE: w(0, 0, b.CLOSE, {
		fence: !0,
		stretchy: !0,
		symmetric: !0
	}),
	INTEGRAL: w(3, 3, b.OP, {
		largeop: !0,
		symmetric: !0
	}),
	ACCENT: w(0, 0, b.ORD, { accent: !0 }),
	WIDEACCENT: w(0, 0, b.ORD, {
		accent: !0,
		stretchy: !0
	}),
	OP: w(3, 3, b.OP, {
		largeop: !0,
		movablelimits: !0,
		symmetric: !0
	}),
	RELACCENT: w(5, 5, b.REL, { accent: !0 }),
	BIN0: w(0, 0, b.BIN),
	BIN5: w(5, 5, b.BIN),
	FENCE: w(0, 0, b.ORD, {
		fence: !0,
		stretchy: !0,
		symmetric: !0
	}),
	INNER: w(1, 1, b.INNER),
	ORD30: w(3, 0, b.ORD),
	NONE: w(0, 0, b.NONE),
	ORDSTRETCH0: w(0, 0, b.ORD, { stretchy: !0 }),
	BINSTRETCH0: w(0, 0, b.BIN, { stretchy: !0 }),
	RELSTRETCH0: w(0, 0, b.REL, { stretchy: !0 }),
	CLOSE0: w(0, 0, b.CLOSE, { fence: !0 }),
	ORD3: w(3, 3, b.ORD),
	PUNCT03: w(0, 3, b.PUNCT, { linebreakstyle: "after" }),
	OPEN0: w(0, 0, b.OPEN, { fence: !0 }),
	STRETCH4: w(4, 4, b.BIN, { stretchy: !0 })
}, lt = [
	[
		32,
		127,
		b.REL,
		"mo"
	],
	[
		160,
		191,
		b.ORD,
		"mo"
	],
	[
		192,
		591,
		b.ORD,
		"mi"
	],
	[
		688,
		879,
		b.ORD,
		"mo"
	],
	[
		880,
		6688,
		b.ORD,
		"mi"
	],
	[
		6832,
		6911,
		b.ORD,
		"mo"
	],
	[
		6912,
		7615,
		b.ORD,
		"mi"
	],
	[
		7616,
		7679,
		b.ORD,
		"mo"
	],
	[
		7680,
		8191,
		b.ORD,
		"mi"
	],
	[
		8192,
		8303,
		b.ORD,
		"mo"
	],
	[
		8304,
		8351,
		b.ORD,
		"mo"
	],
	[
		8448,
		8527,
		b.ORD,
		"mi"
	],
	[
		8528,
		8591,
		b.ORD,
		"mn"
	],
	[
		8592,
		8703,
		b.REL,
		"mo"
	],
	[
		8704,
		8959,
		b.BIN,
		"mo"
	],
	[
		8960,
		9215,
		b.ORD,
		"mo"
	],
	[
		9312,
		9471,
		b.ORD,
		"mn"
	],
	[
		9472,
		10223,
		b.ORD,
		"mo"
	],
	[
		10224,
		10239,
		b.REL,
		"mo"
	],
	[
		10240,
		10495,
		b.ORD,
		"mtext"
	],
	[
		10496,
		10623,
		b.REL,
		"mo"
	],
	[
		10624,
		10751,
		b.ORD,
		"mo"
	],
	[
		10752,
		11007,
		b.BIN,
		"mo"
	],
	[
		11008,
		11055,
		b.ORD,
		"mo"
	],
	[
		11056,
		11087,
		b.REL,
		"mo"
	],
	[
		11088,
		11263,
		b.ORD,
		"mo"
	],
	[
		11264,
		11744,
		b.ORD,
		"mi"
	],
	[
		11776,
		11903,
		b.ORD,
		"mo"
	],
	[
		11904,
		12255,
		b.ORD,
		"mi",
		"normal"
	],
	[
		12272,
		12351,
		b.ORD,
		"mo"
	],
	[
		12352,
		42143,
		b.ORD,
		"mi",
		"normal"
	],
	[
		42192,
		43055,
		b.ORD,
		"mi"
	],
	[
		43056,
		43071,
		b.ORD,
		"mn"
	],
	[
		43072,
		55295,
		b.ORD,
		"mi"
	],
	[
		63744,
		64255,
		b.ORD,
		"mi",
		"normal"
	],
	[
		64256,
		65023,
		b.ORD,
		"mi"
	],
	[
		65024,
		65135,
		b.ORD,
		"mo"
	],
	[
		65136,
		65791,
		b.ORD,
		"mi"
	],
	[
		65792,
		65935,
		b.ORD,
		"mn"
	],
	[
		65936,
		74751,
		b.ORD,
		"mi",
		"normal"
	],
	[
		74752,
		74879,
		b.ORD,
		"mn"
	],
	[
		74880,
		113823,
		b.ORD,
		"mi",
		"normal"
	],
	[
		113824,
		119391,
		b.ORD,
		"mo"
	],
	[
		119648,
		119679,
		b.ORD,
		"mn"
	],
	[
		119808,
		120781,
		b.ORD,
		"mi"
	],
	[
		120782,
		120831,
		b.ORD,
		"mn"
	],
	[
		122624,
		129023,
		b.ORD,
		"mo"
	],
	[
		129024,
		129279,
		b.REL,
		"mo"
	],
	[
		129280,
		129535,
		b.ORD,
		"mo"
	],
	[
		131072,
		195103,
		b.ORD,
		"mi",
		"normal"
	]
];
function ut(e) {
	let t = ft.infix[e] || ft.prefix[e] || ft.postfix[e];
	if (t) return [
		0,
		0,
		t[2],
		"mo"
	];
	let n = e.codePointAt(0);
	for (let e of lt) if (n <= e[1]) {
		if (n >= e[0]) return e;
		break;
	}
	return [
		0,
		0,
		b.REL,
		"mo"
	];
}
var dt = [
	[0, 0],
	[1, 2],
	[3, 3],
	[4, 4],
	[0, 0],
	[0, 0],
	[0, 3],
	[1, 1]
], ft = {
	prefix: {
		"!": T.ORD,
		"(": T.OPEN,
		"+": T.BIN0,
		"-": T.BIN0,
		"[": T.OPEN,
		"{": T.OPEN,
		"|": T.OPEN,
		"||": T.BIN0,
		"¬": T.ORD,
		"±": T.BIN0,
		"‖": T.FENCE,
		"‘": T.OPEN0,
		"“": T.OPEN0,
		ⅅ: T.ORD30,
		ⅆ: T.ORD30,
		"∀": T.ORD,
		"∁": T.ORD,
		"∂": T.ORD30,
		"∃": T.ORD,
		"∄": T.ORD,
		"∇": T.ORD,
		"∏": T.OP,
		"∐": T.OP,
		"∑": T.OP,
		"−": T.BIN0,
		"∓": T.BIN0,
		"√": [
			3,
			0,
			b.ORD,
			{ stretchy: !0 }
		],
		"∛": T.ORD30,
		"∜": T.ORD30,
		"∟": T.ORD,
		"∠": T.ORD,
		"∡": T.ORD,
		"∢": T.ORD,
		"∫": T.INTEGRAL,
		"∬": T.INTEGRAL,
		"∭": T.INTEGRAL,
		"∮": T.INTEGRAL,
		"∯": T.INTEGRAL,
		"∰": T.INTEGRAL,
		"∱": T.INTEGRAL,
		"∲": T.INTEGRAL,
		"∳": T.INTEGRAL,
		"∴": T.REL,
		"∵": T.REL,
		"∼": [
			0,
			0,
			b.REL,
			{}
		],
		"⊾": T.ORD,
		"⊿": T.ORD,
		"⋀": T.OP,
		"⋁": T.OP,
		"⋂": T.OP,
		"⋃": T.OP,
		"⌈": T.OPEN,
		"⌊": T.OPEN,
		"⌐": T.ORD,
		"⌙": T.ORD,
		"❲": T.OPEN,
		"➕": T.ORD,
		"➖": T.ORD,
		"⟀": T.ORD,
		"⟦": T.OPEN,
		"⟨": T.OPEN,
		"⟪": T.OPEN,
		"⟬": T.OPEN,
		"⟮": T.OPEN,
		"⦀": T.FENCE,
		"⦃": T.OPEN,
		"⦅": T.OPEN,
		"⦇": T.OPEN,
		"⦉": T.OPEN,
		"⦋": T.OPEN,
		"⦍": T.OPEN,
		"⦏": T.OPEN,
		"⦑": T.OPEN,
		"⦓": T.OPEN,
		"⦕": T.OPEN,
		"⦗": T.OPEN,
		"⦙": T.FENCE,
		"⦛": T.ORD,
		"⦜": T.ORD,
		"⦝": T.ORD,
		"⦞": T.ORD,
		"⦟": T.ORD,
		"⦠": T.ORD,
		"⦡": T.ORD,
		"⦢": T.ORD,
		"⦣": T.ORD,
		"⦤": T.ORD,
		"⦥": T.ORD,
		"⦦": T.ORD,
		"⦧": T.ORD,
		"⦨": T.ORD,
		"⦩": T.ORD,
		"⦪": T.ORD,
		"⦫": T.ORD,
		"⦬": T.ORD,
		"⦭": T.ORD,
		"⦮": T.ORD,
		"⦯": T.ORD,
		"⧘": T.OPEN,
		"⧚": T.OPEN,
		"⧼": T.OPEN,
		"⨀": T.OP,
		"⨁": T.OP,
		"⨂": T.OP,
		"⨃": T.OP,
		"⨄": T.OP,
		"⨅": T.OP,
		"⨆": T.OP,
		"⨇": T.OP,
		"⨈": T.OP,
		"⨉": T.OP,
		"⨊": T.OP,
		"⨋": T.INTEGRAL,
		"⨌": T.INTEGRAL,
		"⨍": T.INTEGRAL,
		"⨎": T.INTEGRAL,
		"⨏": T.INTEGRAL,
		"⨐": T.INTEGRAL,
		"⨑": T.INTEGRAL,
		"⨒": T.INTEGRAL,
		"⨓": T.INTEGRAL,
		"⨔": T.INTEGRAL,
		"⨕": T.INTEGRAL,
		"⨖": T.INTEGRAL,
		"⨗": T.INTEGRAL,
		"⨘": T.INTEGRAL,
		"⨙": T.INTEGRAL,
		"⨚": T.INTEGRAL,
		"⨛": T.INTEGRAL,
		"⨜": T.INTEGRAL,
		"⨝": T.OP,
		"⨞": T.OP,
		"⫬": T.ORD,
		"⫭": T.ORD,
		"⫼": T.OP,
		"⫿": T.OP,
		"〈": T.OPEN
	},
	postfix: {
		"!!": T.BIN0,
		"!": T.CLOSE0,
		"\"": T.ORD,
		"%": T.ORD,
		"&": T.ORD,
		"'": T.ACCENT,
		")": T.CLOSE,
		"++": T.BIN0,
		"--": T.BIN0,
		"]": T.CLOSE,
		"^": T.WIDEACCENT,
		_: T.WIDEACCENT,
		"`": T.ACCENT,
		"|": T.CLOSE,
		"||": T.BIN0,
		"}": T.CLOSE,
		"~": T.WIDEACCENT,
		"¨": T.ACCENT,
		"¯": T.WIDEACCENT,
		"°": T.ACCENT,
		"²": T.ORD,
		"³": T.ORD,
		"´": T.ACCENT,
		"¸": T.ACCENT,
		"¹": T.ORD,
		ˆ: T.WIDEACCENT,
		ˇ: T.WIDEACCENT,
		ˉ: T.WIDEACCENT,
		ˊ: T.ACCENT,
		ˋ: T.ACCENT,
		ˍ: T.WIDEACCENT,
		"˘": T.ACCENT,
		"˙": T.ACCENT,
		"˚": T.ACCENT,
		"˜": T.WIDEACCENT,
		"˝": T.ACCENT,
		"˷": T.WIDEACCENT,
		"̂": T.WIDEACCENT,
		"̑": T.ACCENT,
		"‖": T.FENCE,
		"’": T.CLOSE0,
		"‚": T.ORD,
		"‛": T.ORD,
		"”": T.CLOSE0,
		"„": T.ORD,
		"‟": T.ORD,
		"′": T.ORD,
		"″": T.ORD,
		"‴": T.ORD,
		"‵": T.ORD,
		"‶": T.ORD,
		"‷": T.ORD,
		"‾": T.WIDEACCENT,
		"⁗": T.ORD,
		"⃛": T.ACCENT,
		"⃜": T.ACCENT,
		"⌉": T.CLOSE,
		"⌋": T.CLOSE,
		"⌢": T.RELSTRETCH0,
		"⌣": T.RELSTRETCH0,
		"⎴": T.WIDEACCENT,
		"⎵": T.WIDEACCENT,
		"⏍": T.ORD,
		"⏜": T.WIDEACCENT,
		"⏝": T.WIDEACCENT,
		"⏞": T.WIDEACCENT,
		"⏟": T.WIDEACCENT,
		"⏠": T.WIDEACCENT,
		"⏡": T.WIDEACCENT,
		"❳": T.CLOSE,
		"⟧": T.CLOSE,
		"⟩": T.CLOSE,
		"⟫": T.CLOSE,
		"⟭": T.CLOSE,
		"⟯": T.CLOSE,
		"⦀": T.FENCE,
		"⦄": T.CLOSE,
		"⦆": T.CLOSE,
		"⦈": T.CLOSE,
		"⦊": T.CLOSE,
		"⦌": T.CLOSE,
		"⦎": T.CLOSE,
		"⦐": T.CLOSE,
		"⦒": T.CLOSE,
		"⦔": T.CLOSE,
		"⦖": T.CLOSE,
		"⦘": T.CLOSE,
		"⦙": T.FENCE,
		"⧙": T.CLOSE,
		"⧛": T.CLOSE,
		"⧽": T.CLOSE,
		"〉": T.CLOSE,
		"𞻰": T.BINSTRETCH0,
		"𞻱": T.BINSTRETCH0
	},
	infix: {
		"!": T.ORD,
		"!=": T.BIN5,
		"#": T.ORD,
		$: T.ORD,
		"%": T.ORD3,
		"&&": T.BIN4,
		"**": T.BIN3,
		"*": T.BIN3,
		"*=": T.BIN5,
		"+": T.BIN4,
		"+=": T.BIN5,
		",": T.PUNCT03,
		"": T.ORD,
		"-": T.BIN4,
		"-=": T.BIN5,
		"->": T.BIN5,
		".": T.ORD3,
		"..": T.BIN3,
		"...": T.INNER,
		"/": [
			4,
			4,
			b.ORD,
			{}
		],
		"//": T.BIN5,
		"/=": T.BIN5,
		":": [
			0,
			3,
			b.REL,
			{}
		],
		":=": T.BIN5,
		";": T.PUNCT03,
		"<": T.REL,
		"<=": T.REL,
		"<>": [
			3,
			3,
			b.REL,
			{}
		],
		"=": T.REL,
		"==": T.REL,
		">": T.REL,
		">=": T.REL,
		"?": [
			3,
			3,
			b.CLOSE,
			{ fence: !0 }
		],
		"@": T.ORD3,
		"\\": T.ORD,
		"^": [
			3,
			3,
			b.ORD,
			{
				accent: !0,
				stretchy: !0
			}
		],
		_: T.WIDEACCENT,
		"|": [
			5,
			5,
			b.ORD,
			{}
		],
		"||": T.BIN5,
		"±": T.BIN4,
		"·": T.BIN3,
		"×": T.BIN3,
		"÷": T.BIN4,
		ʹ: T.ORD,
		"̀": T.ACCENT,
		"́": T.ACCENT,
		"̃": T.WIDEACCENT,
		"̄": T.ACCENT,
		"̆": T.ACCENT,
		"̇": T.ACCENT,
		"̈": T.ACCENT,
		"̌": T.ACCENT,
		"̲": T.WIDEACCENT,
		"̸": T.REL,
		"϶": T.REL,
		"―": T.ORDSTRETCH0,
		"‗": T.ORDSTRETCH0,
		"†": T.BIN3,
		"‡": T.BIN3,
		"•": T.BIN3,
		"…": T.INNER,
		"⁃": T.BIN3,
		"⁄": T.STRETCH4,
		"⁡": T.NONE,
		"⁢": T.NONE,
		"⁣": [
			0,
			0,
			b.NONE,
			{ linebreakstyle: "after" }
		],
		"⁤": T.NONE,
		"⃗": T.ACCENT,
		ℑ: T.ORD,
		ℓ: T.ORD,
		℘: T.ORD,
		ℜ: T.ORD,
		"←": T.WIDEREL,
		"↑": T.RELSTRETCH,
		"→": T.WIDEREL,
		"↓": T.RELSTRETCH,
		"↔": T.WIDEREL,
		"↕": T.RELSTRETCH,
		"↖": T.REL,
		"↗": T.REL,
		"↘": T.REL,
		"↙": T.REL,
		"↚": T.WIDEREL,
		"↛": T.WIDEREL,
		"↜": T.WIDEREL,
		"↝": T.WIDEREL,
		"↞": T.WIDEREL,
		"↟": T.RELSTRETCH,
		"↠": T.WIDEREL,
		"↡": T.RELSTRETCH,
		"↢": T.WIDEREL,
		"↣": T.WIDEREL,
		"↤": T.WIDEREL,
		"↥": T.RELSTRETCH,
		"↦": T.WIDEREL,
		"↧": T.RELSTRETCH,
		"↨": T.RELSTRETCH,
		"↩": T.WIDEREL,
		"↪": T.WIDEREL,
		"↫": T.WIDEREL,
		"↬": T.WIDEREL,
		"↭": T.WIDEREL,
		"↮": T.WIDEREL,
		"↯": T.REL,
		"↰": T.RELSTRETCH,
		"↱": T.RELSTRETCH,
		"↲": T.RELSTRETCH,
		"↳": T.RELSTRETCH,
		"↴": T.RELSTRETCH,
		"↵": T.RELSTRETCH,
		"↶": T.REL,
		"↷": T.REL,
		"↸": T.REL,
		"↹": T.WIDEREL,
		"↺": T.REL,
		"↻": T.REL,
		"↼": T.WIDEREL,
		"↽": T.WIDEREL,
		"↾": T.RELSTRETCH,
		"↿": T.RELSTRETCH,
		"⇀": T.WIDEREL,
		"⇁": T.WIDEREL,
		"⇂": T.RELSTRETCH,
		"⇃": T.RELSTRETCH,
		"⇄": T.WIDEREL,
		"⇅": T.RELSTRETCH,
		"⇆": T.WIDEREL,
		"⇇": T.WIDEREL,
		"⇈": T.RELSTRETCH,
		"⇉": T.WIDEREL,
		"⇊": T.RELSTRETCH,
		"⇋": T.WIDEREL,
		"⇌": T.WIDEREL,
		"⇍": T.WIDEREL,
		"⇎": T.WIDEREL,
		"⇏": T.WIDEREL,
		"⇐": T.WIDEREL,
		"⇑": T.RELSTRETCH,
		"⇒": T.WIDEREL,
		"⇓": T.RELSTRETCH,
		"⇔": T.WIDEREL,
		"⇕": T.RELSTRETCH,
		"⇖": T.REL,
		"⇗": T.REL,
		"⇘": T.REL,
		"⇙": T.REL,
		"⇚": T.WIDEREL,
		"⇛": T.WIDEREL,
		"⇜": T.WIDEREL,
		"⇝": T.WIDEREL,
		"⇞": T.RELSTRETCH,
		"⇟": T.RELSTRETCH,
		"⇠": T.WIDEREL,
		"⇡": T.RELSTRETCH,
		"⇢": T.WIDEREL,
		"⇣": T.RELSTRETCH,
		"⇤": T.WIDEREL,
		"⇥": T.WIDEREL,
		"⇦": T.WIDEREL,
		"⇧": T.RELSTRETCH,
		"⇨": T.WIDEREL,
		"⇩": T.RELSTRETCH,
		"⇪": T.RELSTRETCH,
		"⇫": T.RELSTRETCH,
		"⇬": T.RELSTRETCH,
		"⇭": T.RELSTRETCH,
		"⇮": T.RELSTRETCH,
		"⇯": T.RELSTRETCH,
		"⇰": T.WIDEREL,
		"⇱": T.REL,
		"⇲": T.REL,
		"⇳": T.RELSTRETCH,
		"⇴": T.WIDEREL,
		"⇵": T.RELSTRETCH,
		"⇶": T.WIDEREL,
		"⇷": T.WIDEREL,
		"⇸": T.WIDEREL,
		"⇹": T.WIDEREL,
		"⇺": T.WIDEREL,
		"⇻": T.WIDEREL,
		"⇼": T.WIDEREL,
		"⇽": T.WIDEREL,
		"⇾": T.WIDEREL,
		"⇿": T.WIDEREL,
		"∅": T.ORD,
		"∆": T.ORD,
		"∈": T.REL,
		"∉": T.REL,
		"∊": T.REL,
		"∋": T.REL,
		"∌": T.REL,
		"∍": T.REL,
		"−": T.BIN4,
		"∓": T.BIN4,
		"∔": T.BIN4,
		"∕": T.STRETCH4,
		"∖": T.BIN4,
		"∗": T.BIN3,
		"∘": T.BIN3,
		"∙": T.BIN3,
		"∝": T.REL,
		"∞": T.ORD,
		"∣": T.REL,
		"∤": T.REL,
		"∥": T.REL,
		"∦": T.REL,
		"∧": T.BIN4,
		"∨": T.BIN4,
		"∩": T.BIN4,
		"∪": T.BIN4,
		"∶": T.BIN4,
		"∷": T.REL,
		"∸": T.BIN4,
		"∹": T.REL,
		"∺": T.REL,
		"∻": T.REL,
		"∼": T.REL,
		"∽": T.REL,
		"∾": T.REL,
		"≀": T.BIN3,
		"≁": T.REL,
		"≂": T.REL,
		"≂̸": T.REL,
		"≃": T.REL,
		"≄": T.REL,
		"≅": T.REL,
		"≆": T.REL,
		"≇": T.REL,
		"≈": T.REL,
		"≉": T.REL,
		"≊": T.REL,
		"≋": T.REL,
		"≌": T.REL,
		"≍": T.REL,
		"≎": T.REL,
		"≏": T.REL,
		"≐": T.REL,
		"≑": T.REL,
		"≒": T.REL,
		"≓": T.REL,
		"≔": T.REL,
		"≕": T.REL,
		"≖": T.REL,
		"≗": T.REL,
		"≘": T.REL,
		"≙": T.REL,
		"≚": T.REL,
		"≛": T.REL,
		"≜": T.REL,
		"≝": T.REL,
		"≞": T.REL,
		"≟": T.REL,
		"≠": T.REL,
		"≡": T.REL,
		"≢": T.REL,
		"≣": T.REL,
		"≤": T.REL,
		"≥": T.REL,
		"≦": T.REL,
		"≦̸": T.REL,
		"≧": T.REL,
		"≧̸": T.REL,
		"≨": T.REL,
		"≩": T.REL,
		"≪": T.REL,
		"≪̸": T.REL,
		"≫": T.REL,
		"≫̸": T.REL,
		"≬": T.REL,
		"≭": T.REL,
		"≮": T.REL,
		"≯": T.REL,
		"≰": T.REL,
		"≱": T.REL,
		"≲": T.REL,
		"≳": T.REL,
		"≴": T.REL,
		"≵": T.REL,
		"≶": T.REL,
		"≷": T.REL,
		"≸": T.REL,
		"≹": T.REL,
		"≺": T.REL,
		"≻": T.REL,
		"≼": T.REL,
		"≽": T.REL,
		"≾": T.REL,
		"≾̸": T.REL,
		"≿": T.REL,
		"≿̸": T.REL,
		"⊀": T.REL,
		"⊁": T.REL,
		"⊂": T.REL,
		"⊃": T.REL,
		"⊄": T.REL,
		"⊅": T.REL,
		"⊆": T.REL,
		"⊇": T.REL,
		"⊈": T.REL,
		"⊉": T.REL,
		"⊊": T.REL,
		"⊋": T.REL,
		"⊌": T.BIN4,
		"⊍": T.BIN4,
		"⊎": T.BIN4,
		"⊏": T.REL,
		"⊏̸": T.REL,
		"⊐": T.REL,
		"⊐̸": T.REL,
		"⊑": T.REL,
		"⊒": T.REL,
		"⊓": T.BIN4,
		"⊔": T.BIN4,
		"⊕": T.BIN4,
		"⊖": T.BIN4,
		"⊗": T.BIN3,
		"⊘": T.BIN4,
		"⊙": T.BIN3,
		"⊚": T.BIN3,
		"⊛": T.BIN3,
		"⊜": T.REL,
		"⊝": T.BIN4,
		"⊞": T.BIN4,
		"⊟": T.BIN4,
		"⊠": T.BIN3,
		"⊡": T.BIN3,
		"⊢": T.REL,
		"⊣": T.REL,
		"⊤": T.ORD,
		"⊥": T.ORD,
		"⊦": T.REL,
		"⊧": T.REL,
		"⊨": T.REL,
		"⊩": T.REL,
		"⊪": T.REL,
		"⊫": T.REL,
		"⊬": T.REL,
		"⊭": T.REL,
		"⊮": T.REL,
		"⊯": T.REL,
		"⊰": T.REL,
		"⊱": T.REL,
		"⊲": T.REL,
		"⊳": T.REL,
		"⊴": T.REL,
		"⊵": T.REL,
		"⊶": T.REL,
		"⊷": T.REL,
		"⊸": T.REL,
		"⊺": T.BIN3,
		"⊻": T.BIN4,
		"⊼": T.BIN4,
		"⊽": T.BIN4,
		"⋄": T.BIN3,
		"⋅": T.BIN3,
		"⋆": T.BIN3,
		"⋇": T.BIN3,
		"⋈": T.REL,
		"⋉": T.BIN3,
		"⋊": T.BIN3,
		"⋋": T.BIN3,
		"⋌": T.BIN3,
		"⋍": T.REL,
		"⋎": T.BIN4,
		"⋏": T.BIN4,
		"⋐": T.REL,
		"⋑": T.REL,
		"⋒": T.BIN4,
		"⋓": T.BIN4,
		"⋔": T.REL,
		"⋕": T.REL,
		"⋖": T.REL,
		"⋗": T.REL,
		"⋘": T.REL,
		"⋙": T.REL,
		"⋚": T.REL,
		"⋛": T.REL,
		"⋜": T.REL,
		"⋝": T.REL,
		"⋞": T.REL,
		"⋟": T.REL,
		"⋠": T.REL,
		"⋡": T.REL,
		"⋢": T.REL,
		"⋣": T.REL,
		"⋤": T.REL,
		"⋥": T.REL,
		"⋦": T.REL,
		"⋧": T.REL,
		"⋨": T.REL,
		"⋩": T.REL,
		"⋪": T.REL,
		"⋫": T.REL,
		"⋬": T.REL,
		"⋭": T.REL,
		"⋮": T.ORD,
		"⋯": T.INNER,
		"⋰": T.INNER,
		"⋱": T.INNER,
		"⋲": T.REL,
		"⋳": T.REL,
		"⋴": T.REL,
		"⋵": T.REL,
		"⋶": T.REL,
		"⋷": T.REL,
		"⋸": T.REL,
		"⋹": T.REL,
		"⋺": T.REL,
		"⋻": T.REL,
		"⋼": T.REL,
		"⋽": T.REL,
		"⋾": T.REL,
		"⋿": T.REL,
		"⌁": T.REL,
		"⌅": T.BIN3,
		"⌆": T.BIN3,
		"〈": T.OPEN,
		"〉": T.CLOSE,
		"⍼": T.REL,
		"⎋": T.REL,
		"⎪": T.ORD,
		"⎯": T.ORDSTRETCH0,
		"⎰": T.OPEN,
		"⎱": T.CLOSE,
		"─": T.ORD,
		"△": T.BIN3,
		"▵": T.BIN3,
		"▹": T.BIN3,
		"▽": T.BIN3,
		"▿": T.BIN3,
		"◃": T.BIN3,
		"◯": T.BIN3,
		"♠": T.ORD,
		"♡": T.ORD,
		"♢": T.ORD,
		"♣": T.ORD,
		"♭": T.ORD,
		"♮": T.ORD,
		"♯": T.ORD,
		"❘": [
			5,
			5,
			b.REL,
			{
				stretchy: !0,
				symmetric: !0
			}
		],
		"➔": T.WIDEREL,
		"➕": T.BIN4,
		"➖": T.BIN4,
		"➗": T.BIN4,
		"➘": T.REL,
		"➙": T.WIDEREL,
		"➚": T.REL,
		"➛": T.WIDEREL,
		"➜": T.WIDEREL,
		"➝": T.WIDEREL,
		"➞": T.WIDEREL,
		"➟": T.WIDEREL,
		"➠": T.WIDEREL,
		"➡": T.WIDEREL,
		"➥": T.WIDEREL,
		"➦": T.WIDEREL,
		"➧": T.RELACCENT,
		"➨": T.WIDEREL,
		"➩": T.WIDEREL,
		"➪": T.WIDEREL,
		"➫": T.WIDEREL,
		"➬": T.WIDEREL,
		"➭": T.WIDEREL,
		"➮": T.WIDEREL,
		"➯": T.WIDEREL,
		"➱": T.WIDEREL,
		"➲": T.RELACCENT,
		"➳": T.WIDEREL,
		"➴": T.REL,
		"➵": T.WIDEREL,
		"➶": T.REL,
		"➷": T.REL,
		"➸": T.WIDEREL,
		"➹": T.REL,
		"➺": T.WIDEREL,
		"➻": T.WIDEREL,
		"➼": T.WIDEREL,
		"➽": T.WIDEREL,
		"➾": T.WIDEREL,
		"⟂": T.REL,
		"⟂̸": T.REL,
		"⟋": T.BIN3,
		"⟍": T.BIN3,
		"⟰": T.RELSTRETCH,
		"⟱": T.RELSTRETCH,
		"⟲": T.REL,
		"⟳": T.REL,
		"⟴": T.RELSTRETCH,
		"⟵": T.WIDEREL,
		"⟶": T.WIDEREL,
		"⟷": T.WIDEREL,
		"⟸": T.WIDEREL,
		"⟹": T.WIDEREL,
		"⟺": T.WIDEREL,
		"⟻": T.WIDEREL,
		"⟼": T.WIDEREL,
		"⟽": T.WIDEREL,
		"⟾": T.WIDEREL,
		"⟿": T.WIDEREL,
		"⤀": T.WIDEREL,
		"⤁": T.WIDEREL,
		"⤂": T.WIDEREL,
		"⤃": T.WIDEREL,
		"⤄": T.WIDEREL,
		"⤅": T.WIDEREL,
		"⤆": T.WIDEREL,
		"⤇": T.WIDEREL,
		"⤈": T.RELSTRETCH,
		"⤉": T.RELSTRETCH,
		"⤊": T.RELSTRETCH,
		"⤋": T.RELSTRETCH,
		"⤌": T.WIDEREL,
		"⤍": T.WIDEREL,
		"⤎": T.WIDEREL,
		"⤏": T.WIDEREL,
		"⤐": T.WIDEREL,
		"⤑": T.WIDEREL,
		"⤒": T.RELSTRETCH,
		"⤓": T.RELSTRETCH,
		"⤔": T.WIDEREL,
		"⤕": T.WIDEREL,
		"⤖": T.WIDEREL,
		"⤗": T.WIDEREL,
		"⤘": T.WIDEREL,
		"⤙": T.WIDEREL,
		"⤚": T.WIDEREL,
		"⤛": T.WIDEREL,
		"⤜": T.WIDEREL,
		"⤝": T.WIDEREL,
		"⤞": T.WIDEREL,
		"⤟": T.WIDEREL,
		"⤠": T.WIDEREL,
		"⤡": T.REL,
		"⤢": T.REL,
		"⤣": T.REL,
		"⤤": T.REL,
		"⤥": T.REL,
		"⤦": T.REL,
		"⤧": T.REL,
		"⤨": T.REL,
		"⤩": T.REL,
		"⤪": T.REL,
		"⤫": T.REL,
		"⤬": T.REL,
		"⤭": T.REL,
		"⤮": T.REL,
		"⤯": T.REL,
		"⤰": T.REL,
		"⤱": T.REL,
		"⤲": T.REL,
		"⤳": T.RELACCENT,
		"⤴": T.RELSTRETCH,
		"⤵": T.RELSTRETCH,
		"⤶": T.RELSTRETCH,
		"⤷": T.RELSTRETCH,
		"⤸": T.REL,
		"⤹": T.REL,
		"⤺": T.RELACCENT,
		"⤻": T.RELACCENT,
		"⤼": T.RELACCENT,
		"⤽": T.RELACCENT,
		"⤾": T.REL,
		"⤿": T.REL,
		"⥀": T.REL,
		"⥁": T.REL,
		"⥂": T.WIDEREL,
		"⥃": T.WIDEREL,
		"⥄": T.WIDEREL,
		"⥅": T.RELSTRETCH,
		"⥆": T.RELSTRETCH,
		"⥇": T.WIDEREL,
		"⥈": T.WIDEREL,
		"⥉": T.RELSTRETCH,
		"⥊": T.WIDEREL,
		"⥋": T.WIDEREL,
		"⥌": T.RELSTRETCH,
		"⥍": T.RELSTRETCH,
		"⥎": T.WIDEREL,
		"⥏": T.RELSTRETCH,
		"⥐": T.WIDEREL,
		"⥑": T.RELSTRETCH,
		"⥒": T.WIDEREL,
		"⥓": T.WIDEREL,
		"⥔": T.RELSTRETCH,
		"⥕": T.RELSTRETCH,
		"⥖": T.WIDEREL,
		"⥗": T.WIDEREL,
		"⥘": T.RELSTRETCH,
		"⥙": T.RELSTRETCH,
		"⥚": T.WIDEREL,
		"⥛": T.WIDEREL,
		"⥜": T.RELSTRETCH,
		"⥝": T.RELSTRETCH,
		"⥞": T.WIDEREL,
		"⥟": T.WIDEREL,
		"⥠": T.RELSTRETCH,
		"⥡": T.RELSTRETCH,
		"⥢": T.WIDEREL,
		"⥣": T.RELSTRETCH,
		"⥤": T.WIDEREL,
		"⥥": T.RELSTRETCH,
		"⥦": T.WIDEREL,
		"⥧": T.WIDEREL,
		"⥨": T.WIDEREL,
		"⥩": T.WIDEREL,
		"⥪": T.WIDEREL,
		"⥫": T.WIDEREL,
		"⥬": T.WIDEREL,
		"⥭": T.WIDEREL,
		"⥮": T.RELSTRETCH,
		"⥯": T.RELSTRETCH,
		"⥰": T.WIDEREL,
		"⥱": T.WIDEREL,
		"⥲": T.WIDEREL,
		"⥳": T.WIDEREL,
		"⥴": T.WIDEREL,
		"⥵": T.WIDEREL,
		"⥶": T.RELACCENT,
		"⥷": T.RELACCENT,
		"⥸": T.RELACCENT,
		"⥹": T.RELACCENT,
		"⥺": T.RELACCENT,
		"⥻": T.RELACCENT,
		"⥼": T.WIDEREL,
		"⥽": T.WIDEREL,
		"⥾": T.RELSTRETCH,
		"⥿": T.RELSTRETCH,
		"⦁": T.REL,
		"⦂": T.REL,
		"⦶": T.REL,
		"⦷": T.REL,
		"⦸": T.BIN4,
		"⦹": T.REL,
		"⦼": T.BIN4,
		"⧀": T.REL,
		"⧁": T.REL,
		"⧄": T.BIN4,
		"⧅": T.BIN4,
		"⧆": T.BIN3,
		"⧇": T.BIN3,
		"⧈": T.BIN3,
		"⧎": T.REL,
		"⧏": T.REL,
		"⧐": T.REL,
		"⧑": T.REL,
		"⧒": T.REL,
		"⧓": T.REL,
		"⧔": T.BIN3,
		"⧕": T.BIN3,
		"⧖": T.BIN3,
		"⧗": T.BIN3,
		"⧟": T.REL,
		"⧡": T.REL,
		"⧢": T.BIN3,
		"⧣": T.REL,
		"⧤": T.REL,
		"⧥": T.REL,
		"⧦": T.REL,
		"⧴": T.REL,
		"⧵": T.BIN4,
		"⧶": T.BIN4,
		"⧷": T.BIN4,
		"⧸": T.BIN4,
		"⧹": T.BIN4,
		"⧺": T.BIN4,
		"⧻": T.BIN4,
		"⨝": T.BIN3,
		"⨞": T.BIN3,
		"⨟": T.BIN4,
		"⨠": T.BIN4,
		"⨡": T.BIN4,
		"⨢": T.BIN4,
		"⨣": T.BIN4,
		"⨤": T.BIN4,
		"⨥": T.BIN4,
		"⨦": T.BIN4,
		"⨧": T.BIN4,
		"⨨": T.BIN4,
		"⨩": T.BIN4,
		"⨪": T.BIN4,
		"⨫": T.BIN4,
		"⨬": T.BIN4,
		"⨭": T.BIN4,
		"⨮": T.BIN4,
		"⨯": T.BIN3,
		"⨰": T.BIN3,
		"⨱": T.BIN3,
		"⨲": T.BIN3,
		"⨳": T.BIN3,
		"⨴": T.BIN3,
		"⨵": T.BIN3,
		"⨶": T.BIN3,
		"⨷": T.BIN3,
		"⨸": T.BIN4,
		"⨹": T.BIN4,
		"⨺": T.BIN4,
		"⨻": T.BIN3,
		"⨼": T.BIN3,
		"⨽": T.BIN3,
		"⨾": T.BIN4,
		"⨿": T.BIN3,
		"⩀": T.BIN4,
		"⩁": T.BIN4,
		"⩂": T.BIN4,
		"⩃": T.BIN4,
		"⩄": T.BIN4,
		"⩅": T.BIN4,
		"⩆": T.BIN4,
		"⩇": T.BIN4,
		"⩈": T.BIN4,
		"⩉": T.BIN4,
		"⩊": T.BIN4,
		"⩋": T.BIN4,
		"⩌": T.BIN4,
		"⩍": T.BIN4,
		"⩎": T.BIN4,
		"⩏": T.BIN4,
		"⩐": T.BIN3,
		"⩑": T.BIN4,
		"⩒": T.BIN4,
		"⩓": T.BIN4,
		"⩔": T.BIN4,
		"⩕": T.BIN4,
		"⩖": T.BIN4,
		"⩗": T.BIN4,
		"⩘": T.BIN4,
		"⩙": T.BIN4,
		"⩚": T.BIN4,
		"⩛": T.BIN4,
		"⩜": T.BIN4,
		"⩝": T.BIN4,
		"⩞": T.BIN4,
		"⩟": T.BIN4,
		"⩠": T.BIN4,
		"⩡": T.BIN4,
		"⩢": T.BIN4,
		"⩣": T.BIN4,
		"⩤": T.BIN3,
		"⩥": T.BIN3,
		"⩦": T.REL,
		"⩧": T.REL,
		"⩨": T.REL,
		"⩩": T.REL,
		"⩪": T.REL,
		"⩫": T.REL,
		"⩬": T.REL,
		"⩭": T.REL,
		"⩮": T.REL,
		"⩯": T.REL,
		"⩰": T.REL,
		"⩱": T.REL,
		"⩲": T.REL,
		"⩳": T.REL,
		"⩴": T.REL,
		"⩵": T.REL,
		"⩶": T.REL,
		"⩷": T.REL,
		"⩸": T.REL,
		"⩹": T.REL,
		"⩺": T.REL,
		"⩻": T.REL,
		"⩼": T.REL,
		"⩽": T.REL,
		"⩽̸": T.REL,
		"⩾": T.REL,
		"⩾̸": T.REL,
		"⩿": T.REL,
		"⪀": T.REL,
		"⪁": T.REL,
		"⪂": T.REL,
		"⪃": T.REL,
		"⪄": T.REL,
		"⪅": T.REL,
		"⪆": T.REL,
		"⪇": T.REL,
		"⪈": T.REL,
		"⪉": T.REL,
		"⪊": T.REL,
		"⪋": T.REL,
		"⪌": T.REL,
		"⪍": T.REL,
		"⪎": T.REL,
		"⪏": T.REL,
		"⪐": T.REL,
		"⪑": T.REL,
		"⪒": T.REL,
		"⪓": T.REL,
		"⪔": T.REL,
		"⪕": T.REL,
		"⪖": T.REL,
		"⪗": T.REL,
		"⪘": T.REL,
		"⪙": T.REL,
		"⪚": T.REL,
		"⪛": T.REL,
		"⪜": T.REL,
		"⪝": T.REL,
		"⪞": T.REL,
		"⪟": T.REL,
		"⪠": T.REL,
		"⪡": T.REL,
		"⪢": T.REL,
		"⪣": T.REL,
		"⪤": T.REL,
		"⪥": T.REL,
		"⪦": T.REL,
		"⪧": T.REL,
		"⪨": T.REL,
		"⪩": T.REL,
		"⪪": T.REL,
		"⪫": T.REL,
		"⪬": T.REL,
		"⪭": T.REL,
		"⪮": T.REL,
		"⪯": T.REL,
		"⪯̸": T.REL,
		"⪰": T.REL,
		"⪰̸": T.REL,
		"⪱": T.REL,
		"⪲": T.REL,
		"⪳": T.REL,
		"⪴": T.REL,
		"⪵": T.REL,
		"⪶": T.REL,
		"⪷": T.REL,
		"⪸": T.REL,
		"⪹": T.REL,
		"⪺": T.REL,
		"⪻": T.REL,
		"⪼": T.REL,
		"⪽": T.REL,
		"⪾": T.REL,
		"⪿": T.REL,
		"⫀": T.REL,
		"⫁": T.REL,
		"⫂": T.REL,
		"⫃": T.REL,
		"⫄": T.REL,
		"⫅": T.REL,
		"⫆": T.REL,
		"⫇": T.REL,
		"⫈": T.REL,
		"⫉": T.REL,
		"⫊": T.REL,
		"⫋": T.REL,
		"⫌": T.REL,
		"⫍": T.REL,
		"⫎": T.REL,
		"⫏": T.REL,
		"⫐": T.REL,
		"⫑": T.REL,
		"⫒": T.REL,
		"⫓": T.REL,
		"⫔": T.REL,
		"⫕": T.REL,
		"⫖": T.REL,
		"⫗": T.REL,
		"⫘": T.REL,
		"⫙": T.REL,
		"⫚": T.REL,
		"⫛": T.BIN4,
		"⫝": T.BIN3,
		"⫝̸": T.REL,
		"⫞": T.REL,
		"⫟": T.REL,
		"⫠": T.REL,
		"⫡": T.REL,
		"⫢": T.REL,
		"⫣": T.REL,
		"⫤": T.REL,
		"⫥": T.REL,
		"⫦": T.REL,
		"⫧": T.REL,
		"⫨": T.REL,
		"⫩": T.REL,
		"⫪": T.REL,
		"⫫": T.REL,
		"⫮": T.REL,
		"⫲": T.REL,
		"⫳": T.REL,
		"⫴": T.REL,
		"⫵": T.REL,
		"⫶": T.BIN4,
		"⫷": T.REL,
		"⫸": T.REL,
		"⫹": T.REL,
		"⫺": T.REL,
		"⫻": T.BIN4,
		"⫽": T.BIN4,
		"⫾": T.BIN3,
		"⬀": T.REL,
		"⬁": T.REL,
		"⬂": T.REL,
		"⬃": T.REL,
		"⬄": T.WIDEREL,
		"⬅": T.WIDEREL,
		"⬆": T.RELSTRETCH,
		"⬇": T.RELSTRETCH,
		"⬈": T.REL,
		"⬉": T.REL,
		"⬊": T.REL,
		"⬋": T.REL,
		"⬌": T.WIDEREL,
		"⬍": T.RELSTRETCH,
		"⬎": T.RELSTRETCH,
		"⬏": T.RELSTRETCH,
		"⬐": T.RELSTRETCH,
		"⬑": T.RELSTRETCH,
		"⬰": T.WIDEREL,
		"⬱": T.WIDEREL,
		"⬲": T.RELSTRETCH,
		"⬳": T.WIDEREL,
		"⬴": T.WIDEREL,
		"⬵": T.WIDEREL,
		"⬶": T.WIDEREL,
		"⬷": T.WIDEREL,
		"⬸": T.WIDEREL,
		"⬹": T.WIDEREL,
		"⬺": T.WIDEREL,
		"⬻": T.WIDEREL,
		"⬼": T.WIDEREL,
		"⬽": T.WIDEREL,
		"⬾": T.WIDEREL,
		"⬿": T.RELACCENT,
		"⭀": T.WIDEREL,
		"⭁": T.WIDEREL,
		"⭂": T.WIDEREL,
		"⭃": T.WIDEREL,
		"⭄": T.WIDEREL,
		"⭅": T.WIDEREL,
		"⭆": T.WIDEREL,
		"⭇": T.WIDEREL,
		"⭈": T.WIDEREL,
		"⭉": T.WIDEREL,
		"⭊": T.WIDEREL,
		"⭋": T.WIDEREL,
		"⭌": T.WIDEREL,
		"⭍": T.REL,
		"⭎": T.REL,
		"⭏": T.REL,
		"⭚": T.REL,
		"⭛": T.REL,
		"⭜": T.REL,
		"⭝": T.REL,
		"⭞": T.REL,
		"⭟": T.REL,
		"⭠": T.WIDEREL,
		"⭡": T.RELSTRETCH,
		"⭢": T.WIDEREL,
		"⭣": T.RELSTRETCH,
		"⭤": T.WIDEREL,
		"⭥": T.RELSTRETCH,
		"⭦": T.REL,
		"⭧": T.REL,
		"⭨": T.REL,
		"⭩": T.REL,
		"⭪": T.WIDEREL,
		"⭫": T.RELSTRETCH,
		"⭬": T.WIDEREL,
		"⭭": T.RELSTRETCH,
		"⭮": T.REL,
		"⭯": T.REL,
		"⭰": T.WIDEREL,
		"⭱": T.RELSTRETCH,
		"⭲": T.WIDEREL,
		"⭳": T.RELSTRETCH,
		"⭶": T.REL,
		"⭷": T.REL,
		"⭸": T.REL,
		"⭹": T.REL,
		"⭺": T.WIDEREL,
		"⭻": T.RELSTRETCH,
		"⭼": T.WIDEREL,
		"⭽": T.RELSTRETCH,
		"⮀": T.WIDEREL,
		"⮁": T.RELSTRETCH,
		"⮂": T.WIDEREL,
		"⮃": T.RELSTRETCH,
		"⮄": T.WIDEREL,
		"⮅": T.RELSTRETCH,
		"⮆": T.WIDEREL,
		"⮇": T.RELSTRETCH,
		"⮈": T.RELACCENT,
		"⮉": T.REL,
		"⮊": T.RELACCENT,
		"⮋": T.REL,
		"⮌": T.REL,
		"⮍": T.REL,
		"⮎": T.REL,
		"⮏": T.REL,
		"⮔": T.REL,
		"⮕": T.WIDEREL,
		"⮠": T.RELSTRETCH,
		"⮡": T.RELSTRETCH,
		"⮢": T.RELSTRETCH,
		"⮣": T.RELSTRETCH,
		"⮤": T.RELSTRETCH,
		"⮥": T.RELSTRETCH,
		"⮦": T.RELSTRETCH,
		"⮧": T.RELSTRETCH,
		"⮨": T.WIDEREL,
		"⮩": T.WIDEREL,
		"⮪": T.WIDEREL,
		"⮫": T.WIDEREL,
		"⮬": T.RELSTRETCH,
		"⮭": T.RELSTRETCH,
		"⮮": T.RELSTRETCH,
		"⮯": T.RELSTRETCH,
		"⮰": T.REL,
		"⮱": T.REL,
		"⮲": T.REL,
		"⮳": T.REL,
		"⮴": T.REL,
		"⮵": T.REL,
		"⮶": T.REL,
		"⮷": T.REL,
		"⮸": T.RELSTRETCH,
		"⯑": T.REL,
		㫜: T.BIN3,
		"︷": T.WIDEACCENT,
		"︸": T.WIDEACCENT
	}
}, E = class extends S {
	constructor() {
		super(...arguments), this._texClass = null, this.lspace = 5 / 18, this.rspace = 5 / 18;
	}
	get texClass() {
		return this._texClass === null ? this.getOperatorDef(this.getText())[2] : this._texClass;
	}
	set texClass(e) {
		this._texClass = e;
	}
	get kind() {
		return "mo";
	}
	get isEmbellished() {
		return !0;
	}
	coreParent() {
		let e = null, t = this, n = this.factory.getNodeClass("math");
		for (; t && t.isEmbellished && t.coreMO() === this && !(t instanceof n);) e = t, t = t.parent;
		return e || this;
	}
	coreText(e) {
		if (!e) return "";
		if (e.isEmbellished) return e.coreMO().getText();
		for (; ((e.isKind("mrow") || e.isKind("TeXAtom") || e.isKind("mstyle") || e.isKind("mphantom")) && e.childNodes.length === 1 || e.isKind("munderover")) && e.childNodes[0];) e = e.childNodes[0];
		return e.isToken ? e.getText() : "";
	}
	hasSpacingAttributes() {
		return this.attributes.isSet("lspace") || this.attributes.isSet("rspace");
	}
	get isAccent() {
		let e = !1, t = this.coreParent().parent;
		if (t) {
			let n = t.isKind("mover") ? t.childNodes[t.over].coreMO() ? "accent" : "" : t.isKind("munder") ? t.childNodes[t.under].coreMO() ? "accentunder" : "" : t.isKind("munderover") ? this === t.childNodes[t.over].coreMO() ? "accent" : this === t.childNodes[t.under].coreMO() ? "accentunder" : "" : "";
			n && (e = t.attributes.getExplicit(n) === void 0 ? this.attributes.get("accent") : e);
		}
		return e;
	}
	setTeXclass(e) {
		let { form: t, fence: n } = this.attributes.getList("form", "fence");
		return this.getProperty("texClass") === void 0 && this.hasSpacingAttributes() ? null : (n && this.texClass === b.REL && (t === "prefix" && (this.texClass = b.OPEN), t === "postfix" && (this.texClass = b.CLOSE)), this.adjustTeXclass(e));
	}
	adjustTeXclass(e) {
		let t = this.texClass, n = this.prevClass;
		if (t === b.NONE) return e;
		if (e ? (e.getProperty("autoOP") && (t === b.BIN || t === b.REL) && (n = e.texClass = b.ORD), n = this.prevClass = e.texClass || b.ORD, this.prevLevel = this.attributes.getInherited("scriptlevel")) : n = this.prevClass = b.NONE, t === b.BIN && (n === b.NONE || n === b.BIN || n === b.OP || n === b.REL || n === b.OPEN || n === b.PUNCT)) this.texClass = b.ORD;
		else if (n === b.BIN && (t === b.REL || t === b.CLOSE || t === b.PUNCT)) e.texClass = this.prevClass = b.ORD;
		else if (t === b.BIN) {
			let e = null, t = this.parent;
			for (; t && t.parent && t.isEmbellished && (t.childNodes.length === 1 || !t.isKind("mrow") && t.core() === e);) e = t, t = t.parent;
			e ||= this, t.childNodes[t.childNodes.length - 1] === e && (this.texClass = b.ORD);
		}
		return this;
	}
	setInheritedAttributes(e = {}, t = !1, n = 0, r = !1) {
		super.setInheritedAttributes(e, t, n, r);
		let i = this.getText();
		this.checkOperatorTable(i), this.checkPseudoScripts(i), this.checkPrimes(i), this.checkMathAccent(i);
	}
	getOperatorDef(e) {
		let [t, n, r] = this.handleExplicitForm(this.getForms());
		this.attributes.setInherited("form", t);
		let i = this.constructor, a = i.OPTABLE, o = a[t][e] || a[n][e] || a[r][e];
		if (o) return o;
		this.setProperty("noDictDef", !0);
		let s = this.attributes.get("movablelimits");
		if ((e.match(i.opPattern) || s) && this.getProperty("texClass") === void 0) return w(1, 2, b.OP);
		let c = ut(e), [l, u] = i.MMLSPACING[c[2]];
		return w(l, u, c[2]);
	}
	checkOperatorTable(e) {
		let t = this.getOperatorDef(e);
		this.getProperty("texClass") === void 0 && (this.texClass = t[2]);
		for (let e of Object.keys(t[3] || {})) this.attributes.setInherited(e, t[3][e]);
		this.lspace = t[0] / 18, this.rspace = t[1] / 18;
	}
	getForms() {
		let e = null, t = this.parent, n = this.Parent;
		for (; n && n.isEmbellished;) e = t, t = n.parent, n = n.Parent;
		if (e ||= this, t && t.isKind("mrow") && t.nonSpaceLength() !== 1) {
			if (t.firstNonSpace() === e) return [
				"prefix",
				"infix",
				"postfix"
			];
			if (t.lastNonSpace() === e) return [
				"postfix",
				"infix",
				"prefix"
			];
		}
		return [
			"infix",
			"prefix",
			"postfix"
		];
	}
	handleExplicitForm(e) {
		if (this.attributes.isSet("form")) {
			let t = this.attributes.get("form");
			e = [t].concat(e.filter((e) => e !== t));
		}
		return e;
	}
	checkPseudoScripts(e) {
		let t = this.constructor.pseudoScripts;
		if (!e.match(t)) return;
		let n = this.coreParent().Parent, r = !n || !(n.isKind("msubsup") && !n.isKind("msub"));
		this.setProperty("pseudoscript", r), r && (this.attributes.setInherited("lspace", 0), this.attributes.setInherited("rspace", 0));
	}
	checkPrimes(e) {
		let t = this.constructor.primes;
		if (!e.match(t)) return;
		let n = this.constructor.remapPrimes, r = Ue(He(e).map((e) => n[e]));
		this.setProperty("primes", r);
	}
	checkMathAccent(e) {
		let t = this.Parent;
		if (this.getProperty("mathaccent") !== void 0 || !t || !t.isKind("munderover")) return;
		let [n, r, i] = t.childNodes;
		if (n.isEmbellished && n.coreMO() === this) return;
		let a = !!(r && r.isEmbellished && r.coreMO() === this), o = !!(i && i.isEmbellished && r.coreMO() === this);
		(a || o) && (this.isMathAccent(e) ? this.setProperty("mathaccent", !0) : this.isMathAccentWithWidth(e) && this.setProperty("mathaccent", !1));
	}
	isMathAccent(e = this.getText()) {
		let t = this.constructor.mathaccents;
		return !!e.match(t);
	}
	isMathAccentWithWidth(e = this.getText()) {
		let t = this.constructor.mathaccentsWithWidth;
		return !!e.match(t);
	}
};
E.defaults = Object.assign(Object.assign({}, S.defaults), {
	form: "infix",
	fence: !1,
	separator: !1,
	lspace: "thickmathspace",
	rspace: "thickmathspace",
	stretchy: !1,
	symmetric: !1,
	maxsize: "infinity",
	minsize: "0em",
	largeop: !1,
	movablelimits: !1,
	accent: !1,
	linebreak: "auto",
	lineleading: "100%",
	linebreakstyle: "before",
	indentalign: "auto",
	indentshift: "0",
	indenttarget: "",
	indentalignfirst: "indentalign",
	indentshiftfirst: "indentshift",
	indentalignlast: "indentalign",
	indentshiftlast: "indentshift"
}), E.MMLSPACING = dt, E.OPTABLE = ft, E.pseudoScripts = new RegExp([
	"^[\"'*`",
	"ª",
	"°",
	"²-´",
	"¹",
	"º",
	"‘-‟",
	"′-‷⁗",
	"⁰ⁱ",
	"⁴-ⁿ",
	"₀-₎",
	"]+$"
].join("")), E.primes = new RegExp([
	"^[\"'",
	"‘-‟",
	"]+$"
].join("")), E.opPattern = /^[a-zA-Z]{2,}$/, E.remapPrimes = {
	34: 8243,
	39: 8242,
	8216: 8245,
	8217: 8242,
	8218: 8242,
	8219: 8245,
	8220: 8246,
	8221: 8243,
	8222: 8243,
	8223: 8246
}, E.mathaccents = new RegExp([
	"^[",
	"´́ˊ",
	"`̀ˋ",
	"¨̈",
	"~̃˜",
	"¯̄ˉ",
	"˘̆",
	"ˇ̌",
	"^̂ˆ",
	"⃐⃑",
	"⃖⃗⃡",
	"˙̇",
	"˚̊",
	"⃛",
	"⃜",
	"]$"
].join("")), E.mathaccentsWithWidth = new RegExp([
	"^[",
	"←→↔",
	"⏜⏝",
	"⏞⏟",
	"]$"
].join(""));
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/NodeUtil.js
var D = {
	attrs: /* @__PURE__ */ new Set([
		"autoOP",
		"fnOP",
		"movesupsub",
		"subsupOK",
		"texprimestyle",
		"useHeight",
		"variantForm",
		"withDelims",
		"mathaccent",
		"open",
		"close"
	]),
	createEntity(e) {
		return String.fromCodePoint(parseInt(e, 16));
	},
	getChildren(e) {
		return e.childNodes;
	},
	getText(e) {
		return e.getText();
	},
	appendChildren(e, t) {
		for (let n of t) e.appendChild(n);
	},
	setAttribute(e, t, n) {
		e.attributes.set(t, n);
	},
	setProperty(e, t, n) {
		e.setProperty(t, n);
	},
	setProperties(e, t) {
		for (let n of Object.keys(t)) {
			let r = t[n];
			n === "texClass" ? (e.texClass = r, e.setProperty(n, r)) : n === "movablelimits" ? (e.setProperty("movablelimits", r), (e.isKind("mo") || e.isKind("mstyle")) && e.attributes.set("movablelimits", r)) : n === "inferred" || (D.attrs.has(n) ? e.setProperty(n, r) : e.attributes.set(n, r));
		}
	},
	getProperty(e, t) {
		return e.getProperty(t);
	},
	getAttribute(e, t) {
		return e.attributes.get(t);
	},
	removeAttribute(e, t) {
		e.attributes.unset(t);
	},
	removeProperties(e, ...t) {
		e.removeProperty(...t);
	},
	getChildAt(e, t) {
		return e.childNodes[t];
	},
	setChild(e, t, n) {
		let r = e.childNodes;
		r[t] = n, n && (n.parent = e);
	},
	copyChildren(e, t) {
		let n = e.childNodes;
		for (let e = 0; e < n.length; e++) this.setChild(t, e, n[e]);
	},
	copyAttributes(e, t) {
		t.attributes = e.attributes;
		for (let [n, r] of Object.entries(e.getAllProperties())) t.setProperty(n, r);
	},
	isType(e, t) {
		return e.isKind(t);
	},
	isEmbellished(e) {
		return e.isEmbellished;
	},
	getTexClass(e) {
		return e.texClass;
	},
	getCoreMO(e) {
		return e.coreMO();
	},
	isNode(e) {
		return e instanceof x || e instanceof ot;
	},
	isInferred(e) {
		return e.isInferred;
	},
	getForm(e) {
		if (!e.isKind("mo")) return null;
		let t = e, n = t.getForms();
		for (let e of n) {
			let n = this.getOp(t, e);
			if (n) return n;
		}
		return null;
	},
	getOp(e, t = "infix") {
		return E.OPTABLE[t][e.getText()] || null;
	},
	getMoAttribute(e, t) {
		if (!e.attributes.isSet(t)) for (let n of [
			"infix",
			"postfix",
			"prefix"
		]) {
			let r = this.getOp(e, n)?.[3]?.[t];
			if (r !== void 0) return r;
		}
		return e.attributes.get(t);
	}
}, O = {
	Variant: {
		NORMAL: "normal",
		BOLD: "bold",
		ITALIC: "italic",
		BOLDITALIC: "bold-italic",
		DOUBLESTRUCK: "double-struck",
		FRAKTUR: "fraktur",
		BOLDFRAKTUR: "bold-fraktur",
		SCRIPT: "script",
		BOLDSCRIPT: "bold-script",
		SANSSERIF: "sans-serif",
		BOLDSANSSERIF: "bold-sans-serif",
		SANSSERIFITALIC: "sans-serif-italic",
		SANSSERIFBOLDITALIC: "sans-serif-bold-italic",
		MONOSPACE: "monospace",
		INITIAL: "inital",
		TAILED: "tailed",
		LOOPED: "looped",
		STRETCHED: "stretched",
		CALLIGRAPHIC: "-tex-calligraphic",
		BOLDCALLIGRAPHIC: "-tex-bold-calligraphic",
		OLDSTYLE: "-tex-oldstyle",
		BOLDOLDSTYLE: "-tex-bold-oldstyle",
		MATHITALIC: "-tex-mathit"
	},
	Form: {
		PREFIX: "prefix",
		INFIX: "infix",
		POSTFIX: "postfix"
	},
	LineBreak: {
		AUTO: "auto",
		NEWLINE: "newline",
		NOBREAK: "nobreak",
		GOODBREAK: "goodbreak",
		BADBREAK: "badbreak"
	},
	LineBreakStyle: {
		BEFORE: "before",
		AFTER: "after",
		DUPLICATE: "duplicate",
		INFIXLINBREAKSTYLE: "infixlinebreakstyle"
	},
	IndentAlign: {
		LEFT: "left",
		CENTER: "center",
		RIGHT: "right",
		AUTO: "auto",
		ID: "id",
		INDENTALIGN: "indentalign"
	},
	IndentShift: { INDENTSHIFT: "indentshift" },
	LineThickness: {
		THIN: "thin",
		MEDIUM: "medium",
		THICK: "thick"
	},
	Notation: {
		LONGDIV: "longdiv",
		ACTUARIAL: "actuarial",
		PHASORANGLE: "phasorangle",
		RADICAL: "radical",
		BOX: "box",
		ROUNDEDBOX: "roundedbox",
		CIRCLE: "circle",
		LEFT: "left",
		RIGHT: "right",
		TOP: "top",
		BOTTOM: "bottom",
		UPDIAGONALSTRIKE: "updiagonalstrike",
		DOWNDIAGONALSTRIKE: "downdiagonalstrike",
		VERTICALSTRIKE: "verticalstrike",
		HORIZONTALSTRIKE: "horizontalstrike",
		NORTHEASTARROW: "northeastarrow",
		MADRUWB: "madruwb",
		UPDIAGONALARROW: "updiagonalarrow"
	},
	Align: {
		TOP: "top",
		BOTTOM: "bottom",
		CENTER: "center",
		BASELINE: "baseline",
		AXIS: "axis",
		LEFT: "left",
		RIGHT: "right"
	},
	Lines: {
		NONE: "none",
		SOLID: "solid",
		DASHED: "dashed"
	},
	Side: {
		LEFT: "left",
		RIGHT: "right",
		LEFTOVERLAP: "leftoverlap",
		RIGHTOVERLAP: "rightoverlap"
	},
	Width: {
		AUTO: "auto",
		FIT: "fit"
	},
	Actiontype: {
		TOGGLE: "toggle",
		STATUSLINE: "statusline",
		TOOLTIP: "tooltip",
		INPUT: "input"
	},
	Overflow: {
		LINBREAK: "linebreak",
		SCROLL: "scroll",
		ELIDE: "elide",
		TRUNCATE: "truncate",
		SCALE: "scale"
	},
	Unit: {
		EM: "em",
		EX: "ex",
		PX: "px",
		IN: "in",
		CM: "cm",
		MM: "mm",
		PT: "pt",
		PC: "pc"
	},
	Attr: {
		LATEX: "data-latex",
		LATEXITEM: "data-latex-item"
	}
};
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/FilterUtil.js
function pt(e, t, n) {
	let r = t.attributes, i = n.attributes;
	e.forEach((e) => {
		let t = i.getExplicit(e);
		t != null && r.set(e, t);
	});
}
function mt(e, t) {
	let n = (e, t) => e.getExplicitNames().filter((n) => n !== t && (n !== "stretchy" || e.getExplicit("stretchy")) && n !== "data-latex" && n !== "data-latex-item"), r = e.attributes, i = t.attributes, a = n(r, "lspace"), o = n(i, "rspace");
	if (a.length !== o.length) return !1;
	for (let e of a) if (r.getExplicit(e) !== i.getExplicit(e)) return !1;
	return !0;
}
function ht(e, t, n) {
	let r = [];
	for (let i of e.getList("m" + t + n)) {
		let a = i.childNodes;
		if (a[i[t]] && a[i[n]]) continue;
		let o = i.parent, s = a[i[t]] ? e.nodeFactory.create("node", "m" + t, [a[i.base], a[i[t]]]) : e.nodeFactory.create("node", "m" + n, [a[i.base], a[i[n]]]);
		D.copyAttributes(i, s), o.replaceChild(s, i), r.push(i);
	}
	e.removeFromList("m" + t + n, r);
}
function gt(e, t, n) {
	let r = [];
	for (let i of e.getList(t)) {
		if (i.attributes.get("displaystyle")) continue;
		let t = i.childNodes[i.base], a = t.coreMO();
		if (t.getProperty("movablelimits") && !a.attributes.hasExplicit("movablelimits")) {
			let t = e.nodeFactory.create("node", n, i.childNodes);
			D.copyAttributes(i, t), i.parent.replaceChild(t, i), r.push(i);
		}
	}
	e.removeFromList(t, r);
}
var _t = {
	cleanStretchy(e) {
		let t = e.data;
		for (let e of t.getList("fixStretchy")) D.getProperty(e, "fixStretchy") && (D.getForm(e)?.[3]?.stretchy && D.setAttribute(e, "stretchy", !1), D.removeProperties(e, "fixStretchy"));
	},
	cleanAttributes(e) {
		e.data.root.walkTree((e) => {
			let t = new Set((e.getProperty("keep-attrs") || "").split(/ /)), n = e.attributes;
			n.unset(O.Attr.LATEXITEM);
			for (let e of n.getExplicitNames()) !t.has(e) && n.get(e) === n.getInherited(e) && n.unset(e);
		});
	},
	combineRelations(e) {
		let t = [];
		for (let n of e.data.getList("mo")) {
			if (n.getProperty("relationsCombined") || !n.parent || n.parent && !D.isType(n.parent, "mrow") || D.getTexClass(n) !== b.REL) continue;
			let e = n.parent, r, i = e.childNodes, a = i.indexOf(n) + 1, o = D.getProperty(n, "variantForm");
			for (; a < i.length && (r = i[a]) && D.isType(r, "mo") && D.getTexClass(r) === b.REL;) if (o === D.getProperty(r, "variantForm") && mt(n, r)) {
				D.appendChildren(n, D.getChildren(r)), pt(["stretchy", "rspace"], n, r);
				for (let e of r.getPropertyNames()) n.setProperty(e, r.getProperty(e));
				r.attributes.get("data-latex") && n.attributes.set("data-latex", n.attributes.get("data-latex") + r.attributes.get("data-latex")), i.splice(a, 1), t.push(r), r.parent = null, r.setProperty("relationsCombined", !0), n.setProperty("texClass", b.REL);
			} else {
				n.attributes.hasExplicit("rspace") || D.setAttribute(n, "rspace", "0pt"), r.attributes.hasExplicit("lspace") || D.setAttribute(r, "lspace", "0pt");
				break;
			}
			n.attributes.setInherited("form", n.getForms()[0]);
		}
		e.data.removeFromList("mo", t);
	},
	cleanSubSup(e) {
		let t = e.data;
		t.error || (ht(t, "sub", "sup"), ht(t, "under", "over"));
	},
	moveLimits(e) {
		let t = e.data;
		gt(t, "munderover", "msubsup"), gt(t, "munder", "msub"), gt(t, "mover", "msup");
	},
	setInherited(e) {
		e.data.root.setInheritedAttributes({}, e.math.display, 0, !1);
	},
	checkScriptlevel(e) {
		let t = e.data, n = [];
		for (let e of t.getList("mstyle")) {
			if (e.childNodes[0].childNodes.length !== 1) continue;
			let t = e.attributes;
			for (let e of ["displaystyle", "scriptlevel"]) t.getExplicit(e) === t.getInherited(e) && t.unset(e);
			let r = t.getExplicitNames();
			if (r.filter((e) => e.substring(0, 10) !== "data-latex").length === 0) {
				let i = e.childNodes[0].childNodes[0];
				r.forEach((e) => i.attributes.set(e, t.get(e))), e.parent.replaceChild(i, e), n.push(e);
			}
		}
		t.removeFromList("mstyle", n);
	}
}, k;
(function(e) {
	e.HANDLER = "handler", e.FALLBACK = "fallback", e.ITEMS = "items", e.TAGS = "tags", e.OPTIONS = "options", e.NODES = "nodes", e.PREPROCESSORS = "preprocessors", e.POSTPROCESSORS = "postprocessors", e.INIT = "init", e.CONFIG = "config", e.PRIORITY = "priority", e.PARSER = "parser";
})(k ||= {});
var A;
(function(e) {
	e.DELIMITER = "delimiter", e.MACRO = "macro", e.CHARACTER = "character", e.ENVIRONMENT = "environment";
})(A ||= {});
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/UnitUtil.js
var vt = class {
	constructor(e) {
		this.num = "([-+]?([.,]\\d+|\\d+([.,]\\d*)?))", this.unit = "", this.dimenEnd = /./, this.dimenRest = /./, this.map = new Map(e), this.updateDimen();
	}
	updateDimen() {
		this.unit = `(${Array.from(this.map.keys()).join("|")})`, this.dimenEnd = RegExp("^\\s*" + this.num + "\\s*" + this.unit + "\\s*$"), this.dimenRest = RegExp("^\\s*" + this.num + "\\s*" + this.unit + " ?");
	}
	set(e, t) {
		return this.map.set(e, t), this.updateDimen(), this;
	}
	get(e) {
		return this.map.get(e) || this.map.get("pt");
	}
	delete(e) {
		return this.map.delete(e) ? (this.updateDimen(), !0) : !1;
	}
}, yt = 7.2, bt = 72;
function xt([e, t, n]) {
	return t === "mu" ? [
		j.em(j.UNIT_CASES.get(t) * parseFloat(e)).slice(0, -2),
		"em",
		n
	] : [
		e,
		t,
		n
	];
}
var j = {
	UNIT_CASES: new vt([
		["em", 1],
		["ex", .43],
		["pt", 1 / 10],
		["pc", 1.2],
		["px", yt / bt],
		["in", yt],
		["cm", yt / 2.54],
		["mm", yt / 25.4],
		["mu", 1 / 18]
	]),
	matchDimen(e, t = !1) {
		let n = e.match(t ? j.UNIT_CASES.dimenRest : j.UNIT_CASES.dimenEnd);
		return n ? xt([
			n[1].replace(/,/, "."),
			n[4],
			n[0].length
		]) : [
			null,
			null,
			0
		];
	},
	dimen2em(e) {
		let [t, n] = j.matchDimen(e), r = parseFloat(t || "1");
		return j.UNIT_CASES.get(n) * r;
	},
	em(e) {
		return Math.abs(e) < 6e-4 ? "0em" : e.toFixed(3).replace(/\.?0+$/, "") + "em";
	},
	trimSpaces(e) {
		if (typeof e != "string") return e;
		let t = e.trim();
		return t.match(/\\$/) && e.match(/ $/) && (t += " "), t;
	}
}, St = class {
	constructor(e, t, n) {
		this._factory = e, this._env = t, this.global = {}, this.stack = [], this.global = { isInner: n }, this.stack = [this._factory.create("start", this.global)], t && (this.stack[0].env = t), this.env = this.stack[0].env;
	}
	set env(e) {
		this._env = e;
	}
	get env() {
		return this._env;
	}
	Push(...e) {
		for (let t of e) {
			if (!t) continue;
			let e = D.isNode(t) ? this._factory.create("mml", t) : t;
			e.global = this.global;
			let [n, r] = this.stack.length ? this.Top().checkItem(e) : [null, !0];
			if (r) {
				if (n) {
					this.Pop(), this.Push(...n);
					continue;
				}
				e.isKind("null") || this.stack.push(e), e.env ? (e.copyEnv && Object.assign(e.env, this.env), this.env = e.env) : e.env = this.env;
			}
		}
	}
	Pop() {
		let e = this.stack.pop();
		return e.isOpen || delete e.env, this.env = this.stack.length ? this.Top().env : {}, e;
	}
	Top(e = 1) {
		return this.stack.length < e ? null : this.stack[this.stack.length - e];
	}
	Prev(e) {
		let t = this.Top();
		return e ? t.First : t.Pop();
	}
	get height() {
		return this.stack.length;
	}
	toString() {
		return "stack[\n  " + this.stack.join("\n  ") + "\n]";
	}
}, M = class e {
	static processString(t, n) {
		let r = t.split(e.pattern);
		for (let e = 1, t = r.length; e < t; e += 2) {
			let t = r[e].charAt(0);
			t >= "0" && t <= "9" ? (r[e] = n[parseInt(r[e], 10) - 1], typeof r[e] == "number" && (r[e] = r[e].toString())) : t === "{" && (t = r[e].substring(1), t >= "0" && t <= "9" ? (r[e] = n[parseInt(r[e].substring(1, r[e].length - 1), 10) - 1], typeof r[e] == "number" && (r[e] = r[e].toString())) : r[e].match(/^\{([a-z]+):%(\d+)\|(.*)\}$/) && (r[e] = "%" + r[e]));
		}
		return r.join("");
	}
	constructor(t, n, ...r) {
		this.id = t, this.message = e.processString(n, r);
	}
};
M.pattern = /%(\d+|\{\d+\}|\{[a-z]+:%\d+(?:\|(?:%\{\d+\}|%.|[^}])*)+\}|.)/g;
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/StackItem.js
var Ct = class {
	constructor(e) {
		this._nodes = e, this.startStr = "", this.startI = 0, this.stopI = 0;
	}
	get nodes() {
		return this._nodes;
	}
	Push(...e) {
		this._nodes.push(...e);
	}
	Pop() {
		return this._nodes.pop();
	}
	get First() {
		return this._nodes[this.Size() - 1];
	}
	set First(e) {
		this._nodes[this.Size() - 1] = e;
	}
	get Last() {
		return this._nodes[0];
	}
	set Last(e) {
		this._nodes[0] = e;
	}
	Peek(e) {
		return e ??= 1, this._nodes.slice(this.Size() - e);
	}
	Size() {
		return this._nodes.length;
	}
	Clear() {
		this._nodes = [];
	}
	toMml(e = !0, t) {
		return this._nodes.length === 1 && !t ? this.First : this.create("node", e ? "inferredMrow" : "mrow", this._nodes, {});
	}
	create(e, ...t) {
		return this.factory.configuration.nodeFactory.create(e, ...t);
	}
}, N = class e extends Ct {
	constructor(e, ...t) {
		super(t), this.factory = e, this.global = {}, this._properties = {}, this.isOpen && (this._env = {});
	}
	get kind() {
		return "base";
	}
	get env() {
		return this._env;
	}
	set env(e) {
		this._env = e;
	}
	get copyEnv() {
		return !0;
	}
	getProperty(e) {
		return this._properties[e];
	}
	setProperty(e, t) {
		return this._properties[e] = t, this;
	}
	get isOpen() {
		return !1;
	}
	get isClose() {
		return !1;
	}
	get isFinal() {
		return !1;
	}
	isKind(e) {
		return e === this.kind;
	}
	checkItem(t) {
		if (t.isKind("over") && this.isOpen && (t.setProperty("num", this.toMml(!1)), this.Clear()), t.isKind("cell") && this.isOpen) {
			if (t.getProperty("linebreak")) return e.fail;
			throw new M("Misplaced", "Misplaced %1", t.getName());
		}
		if (t.isClose && this.getErrors(t.kind)) {
			let [e, n] = this.getErrors(t.kind);
			throw new M(e, n, t.getName());
		}
		return t.isFinal ? (this.Push(t.First), e.fail) : e.success;
	}
	clearEnv() {
		for (let e of Object.keys(this.env)) delete this.env[e];
	}
	setProperties(e) {
		return Object.assign(this._properties, e), this;
	}
	getName() {
		return this.getProperty("name");
	}
	toString() {
		return this.kind + "[" + this.nodes.join("; ") + "]";
	}
	getErrors(t) {
		return this.constructor.errors[t] || e.errors[t];
	}
	addLatexItem(e, t = "") {
		let n = this.startStr.slice(this.startI, this.stopI);
		if (n) {
			let r = t ? t + n : n;
			e.attributes.set(O.Attr.LATEXITEM, r), r !== "}" && e.attributes.set(O.Attr.LATEX, r);
		}
	}
};
N.fail = [null, !1], N.success = [null, !0], N.errors = {
	end: ["MissingBeginExtraEnd", "Missing \\begin{%1} or extra \\end{%1}"],
	close: ["ExtraCloseMissingOpen", "Extra close brace or missing open brace"],
	right: ["MissingLeftExtraRight", "Missing \\left or extra \\right"],
	middle: ["ExtraMiddle", "Extra \\middle"]
};
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/TexParser.js
var P = class e {
	constructor(e, t, n) {
		this._string = e, this.configuration = n, this.macroCount = 0, this.i = 0, this.currentCS = "", this.saveI = 0;
		let r = Object.hasOwn(t, "isInner"), i = t.isInner;
		delete t.isInner;
		let a;
		if (t) {
			a = {};
			for (let e of Object.keys(t)) a[e] = t[e];
		}
		this.configuration.pushParser(this), this.stack = new St(this.itemFactory, a, !r || i), this.Parse(), this.Push(this.itemFactory.create("stop")), this.stack.env = a;
	}
	get options() {
		return this.configuration.options;
	}
	get itemFactory() {
		return this.configuration.itemFactory;
	}
	get tags() {
		return this.configuration.tags;
	}
	set string(e) {
		this._string = e;
	}
	get string() {
		return this._string;
	}
	parse(e, t) {
		let n = this.saveI;
		this.saveI = this.i - (e === "character" && t[1] !== "&" ? t[1].length : 0);
		let r = this.configuration.handlers.get(e).parse(t);
		return e !== "macro" && this.updateResult(t[1], n), this.saveI = n, r;
	}
	lookup(e, t) {
		return this.configuration.handlers.get(e).lookup(t);
	}
	contains(e, t) {
		return this.configuration.handlers.get(e).contains(t);
	}
	toString() {
		let e = "";
		for (let t of Array.from(this.configuration.handlers.keys())) e += t + ": " + this.configuration.handlers.get(t) + "\n";
		return e;
	}
	Parse() {
		let e;
		for (; this.i < this.string.length;) e = this.getCodePoint(), this.i += e.length, this.parse(A.CHARACTER, [this, e]);
	}
	Push(e) {
		e instanceof N && (e.startI = this.saveI, e.stopI = this.i, e.startStr = this.string), e instanceof x && e.isInferred ? this.PushAll(e.childNodes) : this.stack.Push(e);
	}
	PushAll(e) {
		for (let t of e) this.stack.Push(t);
	}
	mml() {
		if (this.configuration.popParser(), !this.stack.Top().isKind("mml")) return null;
		let e = this.stack.Top().First, t = this.trimTex(this.string);
		return t && e.attributes.set(O.Attr.LATEX, t), e;
	}
	convertDelimiter(e) {
		return this.lookup(A.DELIMITER, e)?.char ?? null;
	}
	getCodePoint() {
		let e = this.string.codePointAt(this.i);
		return e === void 0 ? "" : String.fromCodePoint(e);
	}
	nextIsSpace() {
		return !!this.string.charAt(this.i).match(/\s/);
	}
	GetNext() {
		for (; this.nextIsSpace();) this.i++;
		return this.getCodePoint();
	}
	GetCS() {
		let e = this.string.slice(this.i).match(/^(([a-z]+) ?|[\uD800-\uDBFF].|.)/i);
		return e ? (this.i += e[0].length, e[2] || e[1]) : (this.i++, " ");
	}
	GetArgument(e, t = !1) {
		switch (this.GetNext()) {
			case "":
				if (!t) throw new M("MissingArgFor", "Missing argument for %1", this.currentCS);
				return null;
			case "}":
				if (!t) throw new M("ExtraCloseMissingOpen", "Extra close brace or missing open brace");
				return null;
			case "\\": return this.i++, "\\" + this.GetCS();
			case "{": {
				let e = ++this.i, t = 1;
				for (; this.i < this.string.length;) switch (this.string.charAt(this.i++)) {
					case "\\":
						this.i++;
						break;
					case "{":
						t++;
						break;
					case "}": if (--t === 0) return this.string.slice(e, this.i - 1);
				}
				throw new M("MissingCloseBrace", "Missing close brace");
			}
		}
		let n = this.getCodePoint();
		return this.i += n.length, n;
	}
	GetBrackets(e, t, n = !1) {
		if (this.GetNext() !== "[") return t;
		let r = ++this.i, i = 0, a = 0;
		for (; this.i < this.string.length;) switch (this.string.charAt(this.i++)) {
			case "{":
				i++;
				break;
			case "\\":
				this.i++;
				break;
			case "}":
				if (i-- <= 0) throw new M("ExtraCloseLooking", "Extra close brace while looking for %1", "']'");
				break;
			case "[":
				i === 0 && a++;
				break;
			case "]": if (i === 0) {
				if (!n || a === 0) return this.string.slice(r, this.i - 1);
				a--;
			}
		}
		throw new M("MissingCloseBracket", "Could not find closing ']' for argument to %1", this.currentCS);
	}
	GetDelimiter(e, t = !1) {
		let n = this.GetNext();
		if (this.i += n.length, this.i <= this.string.length && (n === "\\" ? n += this.GetCS() : n === "{" && t && (this.i--, n = this.GetArgument(e).trim()), this.contains(A.DELIMITER, n))) return this.convertDelimiter(n);
		throw new M("MissingOrUnrecognizedDelim", "Missing or unrecognized delimiter for %1", this.currentCS);
	}
	GetDimen(e) {
		if (this.GetNext() === "{") {
			let t = this.GetArgument(e), [n, r] = j.matchDimen(t);
			if (n) return n + r;
		} else {
			let e = this.string.slice(this.i), [t, n, r] = j.matchDimen(e, !0);
			if (t) return this.i += r, t + n;
		}
		throw new M("MissingDimOrUnits", "Missing dimension or its units for %1", this.currentCS);
	}
	GetUpTo(e, t) {
		for (; this.nextIsSpace();) this.i++;
		let n = this.i, r = 0;
		for (; this.i < this.string.length;) {
			let e = this.i, i = this.GetNext();
			switch (this.i += i.length, i) {
				case "\\":
					i += this.GetCS();
					break;
				case "{":
					r++;
					break;
				case "}":
					if (r === 0) throw new M("ExtraCloseLooking", "Extra close brace while looking for %1", t);
					r--;
			}
			if (r === 0 && i === t) return this.string.slice(n, e);
		}
		throw new M("TokenNotFoundForCommand", "Could not find %1 for %2", t, this.currentCS);
	}
	ParseArg(t) {
		return new e(this.GetArgument(t), this.stack.env, this.configuration).mml();
	}
	ParseUpTo(t, n) {
		return new e(this.GetUpTo(t, n), this.stack.env, this.configuration).mml();
	}
	GetDelimiterArg(e) {
		let t = j.trimSpaces(this.GetArgument(e));
		if (t === "") return null;
		if (this.contains(A.DELIMITER, t)) return t;
		throw new M("MissingOrUnrecognizedDelim", "Missing or unrecognized delimiter for %1", this.currentCS);
	}
	GetStar() {
		let e = this.GetNext() === "*";
		return e && this.i++, e;
	}
	create(e, ...t) {
		let n = this.configuration.nodeFactory.create(e, ...t);
		return n.isToken && n.attributes.hasExplicit("mathvariant") && n.attributes.get("mathvariant").charAt(0) === "-" && n.setProperty("ignore-variant", !0), n;
	}
	trimTex(e) {
		return e.trim() + (e.match(/(?:^|[^\\])(?:\\\\)*\\\s+$/) ? " " : "");
	}
	updateResult(e, t) {
		let n = this.stack.Prev(!0);
		if (!n) return;
		let r = O.Attr.LATEX, i = n.attributes.get(r), a = n.attributes.get(O.Attr.LATEXITEM);
		if (a !== void 0) {
			i || (e === "}" || a === "}" ? this.composeBraces(n) : n.attributes.set(r, a));
			return;
		}
		t = t < this.saveI ? this.saveI : t;
		let o = this.trimTex(t === this.i ? e : this.string.slice(t, this.i));
		if (!(!o || o === i || e === "\\" && o === "\\")) {
			if (o === "_" || o === "^") n.setProperty("sub-sup", o);
			else {
				switch (n.getProperty("sub-sup")) {
					case "^":
						if (n.childNodes[2] && (o === "}" ? this.composeBraces(n.childNodes[2]) : n.childNodes[2].attributes.hasExplicit(r) || n.childNodes[2].attributes.set(r, o)), n.childNodes[1]) {
							let e = n.childNodes[1].attributes.get(r);
							this.composeLatex(n, `_${e}^`, 0, 2);
						} else this.composeLatex(n, "^", 0, 2);
						return;
					case "_":
						if (n.childNodes[1] && (o === "}" ? this.composeBraces(n.childNodes[1]) : n.childNodes[1].attributes.hasExplicit(r) || n.childNodes[1].attributes.set(r, o)), n.childNodes[2]) {
							let e = n.childNodes[2].attributes.get(r);
							this.composeLatex(n, `^${e}_`, 0, 1);
						} else this.composeLatex(n, "_", 0, 1);
						return;
				}
				if (o === "}") {
					this.composeBraces(n);
					return;
				}
			}
			n.attributes.set(r, o);
		}
	}
	composeLatex(e, t, n, r) {
		if (!e.childNodes[n] || !e.childNodes[r]) return;
		let i = O.Attr.LATEX, a = (e.childNodes[n].attributes.get(i) || "") + t + e.childNodes[r].attributes.get(i);
		e.attributes.set(i, a);
	}
	composeBraces(e) {
		let t = this.composeBracedContent(e);
		e.attributes.set(O.Attr.LATEX, `{${t}}`);
	}
	composeBracedContent(e) {
		let t = e.childNodes[0]?.childNodes || [], n = "";
		for (let e of t) {
			let t = (e?.attributes)?.get(O.Attr.LATEX) || "";
			t && (n += n && n.match(/[a-zA-Z]$/) && t.match(/^[a-zA-Z]/) ? " " + t : t);
		}
		return n;
	}
}, wt = class {
	constructor(e = null) {
		this.defaultKind = "unknown", this.nodeMap = /* @__PURE__ */ new Map(), this.node = {}, e === null && (e = this.constructor.defaultNodes);
		for (let t of Object.keys(e)) this.setNodeClass(t, e[t]);
	}
	create(e, ...t) {
		return (this.node[e] || this.node[this.defaultKind])(...t);
	}
	setNodeClass(e, t) {
		this.nodeMap.set(e, t);
		let n = this.nodeMap.get(e);
		this.node[e] = (...e) => new n(this, ...e);
	}
	getNodeClass(e) {
		return this.nodeMap.get(e);
	}
	deleteNodeClass(e) {
		this.nodeMap.delete(e), delete this.node[e];
	}
	nodeIsKind(e, t) {
		return e instanceof this.getNodeClass(t);
	}
	getKinds() {
		return Array.from(this.nodeMap.keys());
	}
};
wt.defaultNodes = {};
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/StackItemFactory.js
var Tt = class extends N {}, Et = class extends wt {
	constructor() {
		super(...arguments), this.defaultKind = "dummy", this.configuration = null;
	}
};
Et.DefaultStackItems = { [Tt.prototype.kind]: Tt };
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/NodeFactory.js
var Dt = class e {
	constructor() {
		this.mmlFactory = null, this.factory = {
			node: e.createNode,
			token: e.createToken,
			text: e.createText,
			error: e.createError
		};
	}
	static createNode(e, t, n = [], r = {}, i) {
		let a = e.mmlFactory.create(t);
		return a.setChildren(n), i && a.appendChild(i), D.setProperties(a, r), a;
	}
	static createToken(e, t, n = {}, r = "") {
		let i = e.create("text", r);
		return e.create("node", t, [], n, i);
	}
	static createText(e, t) {
		return t == null ? null : e.mmlFactory.create("text").setText(t);
	}
	static createError(e, t) {
		let n = e.create("text", t), r = e.create("node", "mtext", [], {}, n);
		return e.create("node", "merror", [r], { "data-mjx-error": t });
	}
	setMmlFactory(e) {
		this.mmlFactory = e;
	}
	set(e, t) {
		this.factory[e] = t;
	}
	setCreators(e) {
		for (let t in e) this.set(t, e[t]);
	}
	create(e, ...t) {
		let n = (this.factory[e] || this.factory.node)(this, t[0], ...t.slice(1));
		return e === "node" && this.configuration.addNode(t[0], n), n;
	}
	get(e) {
		return this.factory[e];
	}
};
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/util/AsyncLoad.js
function Ot(e) {
	return we.asyncLoad ? new Promise((t, n) => {
		let r = we.asyncLoad(e);
		r instanceof Promise ? r.then((e) => t(e)).catch((e) => n(e)) : t(r);
	}) : Promise.reject(`Can't load '${e}': No mathjax.asyncLoad method specified`);
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/util/Entities.js
var kt = { loadMissingEntities: !0 }, At = {
	ApplyFunction: "⁡",
	Backslash: "∖",
	Because: "∵",
	Breve: "˘",
	Cap: "⋒",
	CenterDot: "·",
	CircleDot: "⊙",
	CircleMinus: "⊖",
	CirclePlus: "⊕",
	CircleTimes: "⊗",
	Congruent: "≡",
	ContourIntegral: "∮",
	Coproduct: "∐",
	Cross: "⨯",
	Cup: "⋓",
	CupCap: "≍",
	Dagger: "‡",
	Del: "∇",
	Delta: "Δ",
	Diamond: "⋄",
	DifferentialD: "ⅆ",
	DotEqual: "≐",
	DoubleDot: "¨",
	DoubleRightTee: "⊨",
	DoubleVerticalBar: "∥",
	DownArrow: "↓",
	DownLeftVector: "↽",
	DownRightVector: "⇁",
	DownTee: "⊤",
	Downarrow: "⇓",
	Element: "∈",
	EqualTilde: "≂",
	Equilibrium: "⇌",
	Exists: "∃",
	ExponentialE: "ⅇ",
	FilledVerySmallSquare: "▪",
	ForAll: "∀",
	Gamma: "Γ",
	Gg: "⋙",
	GreaterEqual: "≥",
	GreaterEqualLess: "⋛",
	GreaterFullEqual: "≧",
	GreaterLess: "≷",
	GreaterSlantEqual: "⩾",
	GreaterTilde: "≳",
	Hacek: "ˇ",
	Hat: "^",
	HumpDownHump: "≎",
	HumpEqual: "≏",
	Im: "ℑ",
	ImaginaryI: "ⅈ",
	Integral: "∫",
	Intersection: "⋂",
	InvisibleComma: "⁣",
	InvisibleTimes: "⁢",
	Lambda: "Λ",
	Larr: "↞",
	LeftAngleBracket: "⟨",
	LeftArrow: "←",
	LeftArrowRightArrow: "⇆",
	LeftCeiling: "⌈",
	LeftDownVector: "⇃",
	LeftFloor: "⌊",
	LeftRightArrow: "↔",
	LeftTee: "⊣",
	LeftTriangle: "⊲",
	LeftTriangleEqual: "⊴",
	LeftUpVector: "↿",
	LeftVector: "↼",
	Leftarrow: "⇐",
	Leftrightarrow: "⇔",
	LessEqualGreater: "⋚",
	LessFullEqual: "≦",
	LessGreater: "≶",
	LessSlantEqual: "⩽",
	LessTilde: "≲",
	Ll: "⋘",
	Lleftarrow: "⇚",
	LongLeftArrow: "⟵",
	LongLeftRightArrow: "⟷",
	LongRightArrow: "⟶",
	Longleftarrow: "⟸",
	Longleftrightarrow: "⟺",
	Longrightarrow: "⟹",
	Lsh: "↰",
	MinusPlus: "∓",
	NestedGreaterGreater: "≫",
	NestedLessLess: "≪",
	NotDoubleVerticalBar: "∦",
	NotElement: "∉",
	NotEqual: "≠",
	NotExists: "∄",
	NotGreater: "≯",
	NotGreaterEqual: "≱",
	NotLeftTriangle: "⋪",
	NotLeftTriangleEqual: "⋬",
	NotLess: "≮",
	NotLessEqual: "≰",
	NotPrecedes: "⊀",
	NotPrecedesSlantEqual: "⋠",
	NotRightTriangle: "⋫",
	NotRightTriangleEqual: "⋭",
	NotSubsetEqual: "⊈",
	NotSucceeds: "⊁",
	NotSucceedsSlantEqual: "⋡",
	NotSupersetEqual: "⊉",
	NotTilde: "≁",
	NotVerticalBar: "∤",
	Omega: "Ω",
	OverBar: "‾",
	OverBrace: "⏞",
	PartialD: "∂",
	Phi: "Φ",
	Pi: "Π",
	PlusMinus: "±",
	Precedes: "≺",
	PrecedesEqual: "⪯",
	PrecedesSlantEqual: "≼",
	PrecedesTilde: "≾",
	Product: "∏",
	Proportional: "∝",
	Psi: "Ψ",
	Rarr: "↠",
	Re: "ℜ",
	ReverseEquilibrium: "⇋",
	RightAngleBracket: "⟩",
	RightArrow: "→",
	RightArrowLeftArrow: "⇄",
	RightCeiling: "⌉",
	RightDownVector: "⇂",
	RightFloor: "⌋",
	RightTee: "⊢",
	RightTeeArrow: "↦",
	RightTriangle: "⊳",
	RightTriangleEqual: "⊵",
	RightUpVector: "↾",
	RightVector: "⇀",
	Rightarrow: "⇒",
	Rrightarrow: "⇛",
	Rsh: "↱",
	Sigma: "Σ",
	SmallCircle: "∘",
	Sqrt: "√",
	Square: "□",
	SquareIntersection: "⊓",
	SquareSubset: "⊏",
	SquareSubsetEqual: "⊑",
	SquareSuperset: "⊐",
	SquareSupersetEqual: "⊒",
	SquareUnion: "⊔",
	Star: "⋆",
	Subset: "⋐",
	SubsetEqual: "⊆",
	Succeeds: "≻",
	SucceedsEqual: "⪰",
	SucceedsSlantEqual: "≽",
	SucceedsTilde: "≿",
	SuchThat: "∋",
	Sum: "∑",
	Superset: "⊃",
	SupersetEqual: "⊇",
	Supset: "⋑",
	Therefore: "∴",
	Theta: "Θ",
	Tilde: "∼",
	TildeEqual: "≃",
	TildeFullEqual: "≅",
	TildeTilde: "≈",
	UnderBar: "_",
	UnderBrace: "⏟",
	Union: "⋃",
	UnionPlus: "⊎",
	UpArrow: "↑",
	UpDownArrow: "↕",
	UpTee: "⊥",
	Uparrow: "⇑",
	Updownarrow: "⇕",
	Upsilon: "Υ",
	Vdash: "⊩",
	Vee: "⋁",
	VerticalBar: "∣",
	VerticalTilde: "≀",
	Vvdash: "⊪",
	Wedge: "⋀",
	Xi: "Ξ",
	amp: "&",
	acute: "´",
	aleph: "ℵ",
	alpha: "α",
	amalg: "⨿",
	and: "∧",
	ang: "∠",
	angmsd: "∡",
	angsph: "∢",
	ape: "≊",
	backprime: "‵",
	backsim: "∽",
	backsimeq: "⋍",
	beta: "β",
	beth: "ℶ",
	between: "≬",
	bigcirc: "◯",
	bigodot: "⨀",
	bigoplus: "⨁",
	bigotimes: "⨂",
	bigsqcup: "⨆",
	bigstar: "★",
	bigtriangledown: "▽",
	bigtriangleup: "△",
	biguplus: "⨄",
	blacklozenge: "⧫",
	blacktriangle: "▴",
	blacktriangledown: "▾",
	blacktriangleleft: "◂",
	bowtie: "⋈",
	boxdl: "┐",
	boxdr: "┌",
	boxminus: "⊟",
	boxplus: "⊞",
	boxtimes: "⊠",
	boxul: "┘",
	boxur: "└",
	bsol: "\\",
	bull: "•",
	cap: "∩",
	check: "✓",
	chi: "χ",
	circ: "ˆ",
	circeq: "≗",
	circlearrowleft: "↺",
	circlearrowright: "↻",
	circledR: "®",
	circledS: "Ⓢ",
	circledast: "⊛",
	circledcirc: "⊚",
	circleddash: "⊝",
	clubs: "♣",
	colon: ":",
	comp: "∁",
	ctdot: "⋯",
	cuepr: "⋞",
	cuesc: "⋟",
	cularr: "↶",
	cup: "∪",
	curarr: "↷",
	curlyvee: "⋎",
	curlywedge: "⋏",
	dagger: "†",
	daleth: "ℸ",
	ddarr: "⇊",
	deg: "°",
	delta: "δ",
	digamma: "ϝ",
	div: "÷",
	divideontimes: "⋇",
	dot: "˙",
	doteqdot: "≑",
	dotplus: "∔",
	dotsquare: "⊡",
	dtdot: "⋱",
	ecir: "≖",
	efDot: "≒",
	egs: "⪖",
	ell: "ℓ",
	els: "⪕",
	empty: "∅",
	epsi: "ε",
	epsiv: "ϵ",
	erDot: "≓",
	eta: "η",
	eth: "ð",
	flat: "♭",
	fork: "⋔",
	frown: "⌢",
	gEl: "⪌",
	gamma: "γ",
	gap: "⪆",
	gimel: "ℷ",
	gnE: "≩",
	gnap: "⪊",
	gne: "⪈",
	gnsim: "⋧",
	gt: ">",
	gtdot: "⋗",
	harrw: "↭",
	hbar: "ℏ",
	hellip: "…",
	hookleftarrow: "↩",
	hookrightarrow: "↪",
	imath: "ı",
	infin: "∞",
	intcal: "⊺",
	iota: "ι",
	jmath: "ȷ",
	kappa: "κ",
	kappav: "ϰ",
	lEg: "⪋",
	lambda: "λ",
	lap: "⪅",
	larrlp: "↫",
	larrtl: "↢",
	lbrace: "{",
	lbrack: "[",
	le: "≤",
	leftleftarrows: "⇇",
	leftthreetimes: "⋋",
	lessdot: "⋖",
	lmoust: "⎰",
	lnE: "≨",
	lnap: "⪉",
	lne: "⪇",
	lnsim: "⋦",
	longmapsto: "⟼",
	looparrowright: "↬",
	lowast: "∗",
	loz: "◊",
	lt: "<",
	ltimes: "⋉",
	ltri: "◃",
	macr: "¯",
	malt: "✠",
	mho: "℧",
	mu: "μ",
	multimap: "⊸",
	nLeftarrow: "⇍",
	nLeftrightarrow: "⇎",
	nRightarrow: "⇏",
	nVDash: "⊯",
	nVdash: "⊮",
	natur: "♮",
	nearr: "↗",
	nharr: "↮",
	nlarr: "↚",
	not: "¬",
	nrarr: "↛",
	nu: "ν",
	nvDash: "⊭",
	nvdash: "⊬",
	nwarr: "↖",
	omega: "ω",
	omicron: "ο",
	or: "∨",
	osol: "⊘",
	period: ".",
	phi: "φ",
	phiv: "ϕ",
	pi: "π",
	piv: "ϖ",
	prap: "⪷",
	precnapprox: "⪹",
	precneqq: "⪵",
	precnsim: "⋨",
	prime: "′",
	psi: "ψ",
	quot: "\"",
	rarrtl: "↣",
	rbrace: "}",
	rbrack: "]",
	rho: "ρ",
	rhov: "ϱ",
	rightrightarrows: "⇉",
	rightthreetimes: "⋌",
	ring: "˚",
	rmoust: "⎱",
	rtimes: "⋊",
	rtri: "▹",
	scap: "⪸",
	scnE: "⪶",
	scnap: "⪺",
	scnsim: "⋩",
	sdot: "⋅",
	searr: "↘",
	sect: "§",
	sharp: "♯",
	sigma: "σ",
	sigmav: "ς",
	simne: "≆",
	smile: "⌣",
	spades: "♠",
	sub: "⊂",
	subE: "⫅",
	subnE: "⫋",
	subne: "⊊",
	supE: "⫆",
	supnE: "⫌",
	supne: "⊋",
	swarr: "↙",
	tau: "τ",
	theta: "θ",
	thetav: "ϑ",
	tilde: "˜",
	times: "×",
	triangle: "▵",
	triangleq: "≜",
	upsi: "υ",
	upuparrows: "⇈",
	veebar: "⊻",
	vellip: "⋮",
	weierp: "℘",
	xi: "ξ",
	yen: "¥",
	zeta: "ζ",
	zigrarr: "⇝",
	nbsp: "\xA0",
	rsquo: "’",
	lsquo: "‘"
}, jt = {};
function Mt(e) {
	return e.replace(/&([a-z][a-z0-9]*|#(?:[0-9]+|x[0-9a-f]+));/gi, Nt);
}
function Nt(e, t) {
	if (t.charAt(0) === "#") return Pt(t.slice(1));
	if (At[t]) return At[t];
	if (kt.loadMissingEntities) {
		let e = t.match(/^[a-zA-Z](fr|scr|opf)$/) ? RegExp.$1 : t.charAt(0).toLowerCase();
		jt[e] || (jt[e] = !0, be(Ot("./util/entities/" + e + ".js")));
	}
	return e;
}
function Pt(e) {
	let t = e.charAt(0) === "x" ? parseInt(e.slice(1), 16) : parseInt(e);
	return String.fromCodePoint(t);
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/ParseUtil.js
var Ft = class {
	static oneof(...e) {
		return new this("string", (t) => e.includes(t), (e) => e);
	}
	constructor(e, t, n) {
		this.name = e, this.verify = t, this.convert = n;
	}
};
new Ft("boolean", (e) => e === "true" || e === "false", (e) => e === "true"), new Ft("number", (e) => !!e.match(/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[-+]?\d+)?$/), (e) => parseFloat(e)), new Ft("integer", (e) => !!e.match(/^[-+]?\d+$/), (e) => parseInt(e)), new Ft("string", (e) => !0, (e) => e), new Ft("dimen", (e) => j.matchDimen(e)[0] !== null, (e) => e);
function It(e, t = !1) {
	let n = {}, r = e, i, a, o, s = !0;
	for (; r;) [a, i, r] = Rt(r, ["=", ","], t, s), s = !1, i === "=" ? ([o, i, r] = Rt(r, [","], t), o = o === "false" || o === "true" ? JSON.parse(o) : o, n[a] = o) : a && (n[a] = !0);
	return n;
}
function Lt(e, t) {
	if (t === 0) return e.replace(/^\s+/, "").replace(/([^\\\s]|^)((?:\\\\)*(?:\\\s)?)?\s+$/, "$1$2");
	for (; t > 0;) e = e.trim().slice(1, -1), t--;
	return e;
}
function Rt(e, t, n = !1, r = !1) {
	let i = e.length, a = 0, o = "", s = 0, c = 0, l = !0;
	for (; s < i;) {
		let r = e[s++];
		switch (r) {
			case "\\":
				o += r + (e[s++] || ""), l = !1;
				continue;
			case " ": break;
			case "{":
				l && c++, a++;
				break;
			case "}":
				if (!a) throw new M("ExtraCloseMissingOpen", "Extra close brace or missing open brace");
				a--, l = !1;
				break;
			default:
				if (!a && t.includes(r)) return [
					Lt(o, n ? Math.min(1, c) : c),
					r,
					e.slice(s)
				];
				c > a && (c = a), l = !1;
		}
		o += r;
	}
	if (a) throw new M("ExtraOpenMissingClose", "Extra open brace or missing close brace");
	return r && c ? [
		"",
		"",
		Lt(o, 1)
	] : [
		Lt(o, n ? Math.min(1, c) : c),
		"",
		e.slice(s)
	];
}
var F = {
	cols(...e) {
		return e.map((e) => j.em(e)).join(" ");
	},
	fenced(e, t, n, r, i = "", a = "") {
		let o = e.nodeFactory, s = o.create("node", "mrow", [], {
			open: t,
			close: r,
			texClass: b.INNER
		}), c;
		if (i) c = new P("\\" + i + "l" + t, e.parser.stack.env, e).mml();
		else {
			let e = o.create("text", t);
			c = o.create("node", "mo", [], {
				fence: !0,
				stretchy: !0,
				symmetric: !0,
				texClass: b.OPEN
			}, e);
		}
		if (D.appendChildren(s, [c, n]), i) c = new P("\\" + i + "r" + r, e.parser.stack.env, e).mml();
		else {
			let e = o.create("text", r);
			c = o.create("node", "mo", [], {
				fence: !0,
				stretchy: !0,
				symmetric: !0,
				texClass: b.CLOSE
			}, e);
		}
		return a && c.attributes.set("mathcolor", a), D.appendChildren(s, [c]), s;
	},
	fixedFence(e, t, n, r) {
		let i = e.nodeFactory.create("node", "mrow", [], {
			open: t,
			close: r,
			texClass: b.ORD
		});
		return t && D.appendChildren(i, [F.mathPalette(e, t, "l")]), D.isType(n, "mrow") ? D.appendChildren(i, D.getChildren(n)) : D.appendChildren(i, [n]), r && D.appendChildren(i, [F.mathPalette(e, r, "r")]), i;
	},
	mathPalette(e, t, n) {
		(t === "{" || t === "}") && (t = "\\" + t);
		let r = "{\\bigg" + n + " " + t + "}", i = "{\\big" + n + " " + t + "}";
		return new P("\\mathchoice" + r + i + i + i, {}, e).mml();
	},
	fixInitialMO(e, t) {
		for (let n = 0, r = t.length; n < r; n++) {
			let r = t[n];
			if (r && !D.isType(r, "mspace") && (!D.isType(r, "TeXAtom") || D.getChildren(r)[0] && D.getChildren(D.getChildren(r)[0]).length)) {
				if (D.isEmbellished(r) || D.isType(r, "TeXAtom") && D.getTexClass(r) === b.REL) {
					let n = e.nodeFactory.create("node", "mi");
					t.unshift(n);
				}
				break;
			}
		}
	},
	internalMath(e, t, n, r) {
		if (t = t.replace(/ +/g, " "), e.configuration.options.internalMath) return e.configuration.options.internalMath(e, t, n, r);
		let i = r || e.stack.env.font, a = i ? { mathvariant: i } : {}, o = [], s = 0, c = 0, l, u, d = "", f = 0;
		if (t.match(/\\?[${}\\]|\\\(|\\(?:eq)?ref\s*\{|\\U/)) {
			for (; s < t.length;) if (l = t.charAt(s++), l === "$") d === "$" && f === 0 ? (u = e.create("node", "TeXAtom", [new P(t.slice(c, s - 1), {}, e.configuration).mml()]), o.push(u), d = "", c = s) : d === "" && (c < s - 1 && o.push(F.internalText(e, t.slice(c, s - 1), a)), d = "$", c = s);
			else if (l === "{" && d !== "") f++;
			else if (l === "}") {
				if (d === "}" && f === 0) {
					let n = new P(t.slice(c, s), {}, e.configuration).mml();
					u = e.create("node", "TeXAtom", [n], a), o.push(u), d = "", c = s;
				} else d !== "" && f && f--;
			} else if (l === "\\") {
				if (d === "" && t.substring(s).match(/^(eq)?ref\s*\{/)) {
					let n = RegExp["$&"].length;
					c < s - 1 && o.push(F.internalText(e, t.slice(c, s - 1), a)), d = "}", c = s - 1, s += n;
				} else if (l = t.charAt(s++), l === "(" && d === "") c < s - 2 && o.push(F.internalText(e, t.slice(c, s - 2), a)), d = ")", c = s;
				else if (l === ")" && d === ")" && f === 0) u = e.create("node", "TeXAtom", [new P(t.slice(c, s - 2), {}, e.configuration).mml()]), o.push(u), d = "", c = s;
				else if (l.match(/[${}\\]/) && d === "") s--, t = t.substring(0, s - 1) + t.substring(s);
				else if (l === "U") {
					let e = t.substring(s).match(/^\s*(?:([0-9A-F])|\{\s*([0-9A-F]+)\s*\})/);
					if (!e) throw new M("BadRawUnicode", "Argument to %1 must a hexadecimal number with 1 to 6 digits", "\\U");
					let n = String.fromCodePoint(parseInt(e[1] || e[2], 16));
					t = t.substring(0, s - 2) + n + t.substring(s + e[0].length), s = s - 2 + n.length;
				}
			}
			if (d !== "") throw new M("MathNotTerminated", "Math mode is not properly terminated");
		}
		return c < t.length && o.push(F.internalText(e, t.slice(c), a)), n == null ? o.length > 1 && (o = [e.create("node", "mrow", o)]) : o = [e.create("node", "mstyle", o, {
			displaystyle: !1,
			scriptlevel: n
		})], o;
	},
	internalText(e, t, n) {
		t = t.replace(/\n+/g, " ").replace(/^ +/, At.nbsp).replace(/ +$/, At.nbsp);
		let r = e.create("text", t);
		return e.create("node", "mtext", [], n, r);
	},
	underOver(e, t, n, r, i) {
		if (F.checkMovableLimits(t), D.isType(t, "munderover") && D.isEmbellished(t)) {
			D.setProperties(D.getCoreMO(t), {
				lspace: 0,
				rspace: 0
			});
			let n = e.create("node", "mo", [], { rspace: 0 });
			t = e.create("node", "mrow", [n, t]);
		}
		let a = e.create("node", "munderover", [t]);
		D.setChild(a, r === "over" ? a.over : a.under, n);
		let o = a;
		return i && (o = e.create("node", "TeXAtom", [e.create("node", "mstyle", [a], {
			displaystyle: !0,
			scriptlevel: 0
		})], {
			texClass: b.OP,
			movesupsub: !0
		})), D.setProperty(o, "subsupOK", !0), o;
	},
	checkMovableLimits(e) {
		let t = D.isType(e, "mo") ? D.getForm(e) : null;
		(D.getProperty(e, "movablelimits") || t && t[3] && t[3].movablelimits) && D.setProperties(e, { movablelimits: !1 });
	},
	setArrayAlign(e, t, n) {
		return n || (t = j.trimSpaces(t || "")), t === "t" ? e.arraydef.align = "baseline 1" : t === "b" ? e.arraydef.align = "baseline -1" : t === "c" ? e.arraydef.align = "axis" : t && (n ? (n.string = `[${t}]` + n.string.slice(n.i), n.i = 0) : e.arraydef.align = t), e;
	},
	substituteArgs(e, t, n) {
		let r = "", i = "", a = 0;
		for (; a < n.length;) {
			let o = n.charAt(a++);
			if (o === "\\") r += o + n.charAt(a++);
			else if (o === "#") {
				if (o = n.charAt(a++), o === "#") r += o;
				else {
					if (!o.match(/[1-9]/) || parseInt(o, 10) > t.length) throw new M("IllegalMacroParam", "Illegal macro parameter reference");
					i = F.addArgs(e, F.addArgs(e, i, r), t[parseInt(o, 10) - 1]), r = "";
				}
			} else r += o;
		}
		return F.addArgs(e, i, r);
	},
	addArgs(e, t, n) {
		if (n.match(/^[a-z]/i) && t.match(/(^|[^\\])(\\\\)*\\[a-z]+$/i) && (t += " "), t.length + n.length > e.configuration.options.maxBuffer) throw new M("MaxBufferSize", "MathJax internal buffer size exceeded; is there a recursive macro call?");
		return t + n;
	},
	checkMaxMacros(e, t = !0) {
		if (!(++e.macroCount <= e.configuration.options.maxMacros)) throw t ? new M("MaxMacroSub1", "MathJax maximum macro substitution count exceeded; is here a recursive macro call?") : new M("MaxMacroSub2", "MathJax maximum substitution count exceeded; is there a recursive latex environment?");
	},
	checkEqnEnv(e, t = !0) {
		let n = e.stack.Top(), r = n.First;
		if (!(n.getProperty("nestable") && t && !r || n.getProperty("nestStart")) && (!n.isKind("start") || r)) throw new M("ErroneousNestingEq", "Erroneous nesting of equation structures");
	},
	copyNode(e, t) {
		let n = e.copy(), r = t.configuration;
		return n.walkTree((e) => {
			r.addNode(e.kind, e);
			let t = (e.getProperty("in-lists") || "").split(/,/);
			for (let n of t) n && r.addNode(n, e);
		}), n;
	},
	mmlFilterAttribute(e, t, n) {
		return n;
	},
	getFontDef(e) {
		let t = e.stack.env.font;
		return t ? { mathvariant: t } : {};
	},
	keyvalOptions(e, t = null, n = !1, r = !1) {
		let i = It(e, r);
		if (t) for (let e of Object.keys(i)) if (Object.hasOwn(t, e)) {
			if (t[e] instanceof Ft) {
				let n = t[e], r = String(i[e]);
				if (!n.verify(r)) throw new M("InvalidValue", "Value for key '%1' is not of the expected type", e);
				i[e] = n.convert(r);
			}
		} else {
			if (n) throw new M("InvalidOption", "Invalid option: %1", e);
			delete i[e];
		}
		return i;
	},
	isLatinOrGreekChar(e) {
		return !!e.normalize("NFD").match(/[a-zA-Z\u0370-\u03F0]/);
	}
}, zt = class {
	constructor() {
		this.columnHandler = {
			l: (e) => e.calign[e.j++] = "left",
			c: (e) => e.calign[e.j++] = "center",
			r: (e) => e.calign[e.j++] = "right",
			p: (e) => this.getColumn(e, "top"),
			m: (e) => this.getColumn(e, "middle"),
			b: (e) => this.getColumn(e, "bottom"),
			w: (e) => this.getColumn(e, "top", ""),
			W: (e) => this.getColumn(e, "top", ""),
			"|": (e) => this.addRule(e, "solid"),
			":": (e) => this.addRule(e, "dashed"),
			">": (e) => e.cstart[e.j] = this.getBraces(e) + (e.cstart[e.j] || ""),
			"<": (e) => e.cend[e.j - 1] = this.getBraces(e) + (e.cend[e.j - 1] || ""),
			"@": (e) => this.addAt(e, this.getBraces(e)),
			"!": (e) => this.addBang(e, this.getBraces(e)),
			"*": (e) => this.repeat(e),
			"{": (e) => this.brace(e),
			P: (e) => this.macroColumn(e, ">{$}p{#1}<{$}", 1),
			M: (e) => this.macroColumn(e, ">{$}m{#1}<{$}", 1),
			B: (e) => this.macroColumn(e, ">{$}b{#1}<{$}", 1),
			" ": (e) => {},
			"\n": (e) => {}
		}, this.MAXCOLUMNS = 1e4;
	}
	process(e, t, n) {
		let r = {
			parser: e,
			template: t,
			i: 0,
			j: 0,
			c: "",
			cwidth: [],
			calign: [],
			cspace: [],
			clines: [],
			cstart: n.cstart,
			cend: n.cend,
			ralign: n.ralign,
			cextra: n.cextra
		};
		if (t.charAt(0) === "{" && t.slice(-1) === "}") {
			let e = this.getBraces(r);
			e.length === t.length - 2 && (r.template = e), r.i = 0;
		}
		let i = 0;
		for (; r.i < r.template.length;) {
			if (i++ > this.MAXCOLUMNS) throw new M("MaxColumns", "Too many column specifiers (perhaps looping column definitions?)");
			let e = r.template.codePointAt(r.i), t = r.c = String.fromCodePoint(e);
			r.i += t.length, this.processColumn(r, t);
		}
		this.setColumnAlign(r, n), this.setColumnWidths(r, n), this.setColumnSpacing(r, n), this.setColumnLines(r, n), this.setPadding(r, n);
	}
	processColumn(e, t) {
		if (!Object.hasOwn(this.columnHandler, t)) throw new M("BadPreamToken", "Illegal pream-token (%1)", t);
		this.columnHandler[t](e);
	}
	setColumnAlign(e, t) {
		t.arraydef.columnalign = e.calign.join(" ");
	}
	setColumnWidths(e, t) {
		if (!e.cwidth.length) return;
		let n = [...e.cwidth];
		n.length < e.calign.length && n.push("auto"), t.arraydef.columnwidth = n.map((e) => e || "auto").join(" ");
	}
	setColumnSpacing(e, t) {
		if (!e.cspace.length) return;
		let n = [...e.cspace];
		n.length < e.calign.length && n.push("1em"), t.arraydef.columnspacing = n.slice(1).map((e) => e || "1em").join(" ");
	}
	setColumnLines(e, t) {
		if (!e.clines.length) return;
		let n = [...e.clines];
		n[0] && t.frame.push(["left", n[0]]), n.length > e.calign.length ? t.frame.push(["right", n.pop()]) : n.length < e.calign.length && n.push("none"), n.length > 1 && (t.arraydef.columnlines = n.slice(1).map((e) => e || "none").join(" "));
	}
	setPadding(e, t) {
		if (!e.cextra[0] && !e.cextra[e.calign.length - 1]) return;
		let n = e.calign.length - 1, r = e.cspace, i = e.cextra[n] ? r[n] : null;
		t.arraydef["data-array-padding"] = `${r[0] || ".5em"} ${i || ".5em"}`;
	}
	getColumn(e, t, n = "left") {
		e.calign[e.j] = n || this.getAlign(e), e.cwidth[e.j] = this.getDimen(e), e.ralign[e.j] = [
			t,
			e.cwidth[e.j],
			e.calign[e.j]
		], e.j++;
	}
	getDimen(e) {
		let t = this.getBraces(e);
		if (!j.matchDimen(t)[0]) throw new M("MissingColumnDimOrUnits", "Missing dimension or its units for %1 column declaration", e.c);
		return t;
	}
	getAlign(e) {
		return Ie(this.getBraces(e).toLowerCase(), {
			l: "left",
			c: "center",
			r: "right"
		}, "");
	}
	getBraces(e) {
		for (; e.template[e.i] === " ";) e.i++;
		if (e.i >= e.template.length) throw new M("MissingArgForColumn", "Missing argument for %1 column declaration", e.c);
		if (e.template[e.i] !== "{") return e.template[e.i++];
		let t = ++e.i, n = 1;
		for (; e.i < e.template.length;) switch (e.template.charAt(e.i++)) {
			case "\\":
				e.i++;
				break;
			case "{":
				n++;
				break;
			case "}": if (--n === 0) return e.template.slice(t, e.i - 1);
		}
		throw new M("MissingCloseBrace", "Missing close brace");
	}
	macroColumn(e, t, n) {
		let r = [];
		for (; n > 0 && n--;) r.push(this.getBraces(e));
		e.template = F.substituteArgs(e.parser, r, t) + e.template.slice(e.i), e.i = 0;
	}
	addRule(e, t) {
		e.clines[e.j] && this.addAt(e, "\\,"), e.clines[e.j] = t, e.cspace[e.j] === "0" && (e.cstart[e.j] = "\\hspace{.5em}");
	}
	addAt(e, t) {
		let { cstart: n, cspace: r, j: i } = e;
		e.cextra[i] = !0, e.calign[i] = "center", e.clines[i] && (r[i] === ".5em" ? n[i - 1] += "\\hspace{.25em}" : r[i] || (e.cend[i - 1] = (e.cend[i - 1] || "") + "\\hspace{.5em}")), n[i] = t, r[i] = "0", r[++e.j] = "0";
	}
	addBang(e, t) {
		let { cstart: n, cspace: r, j: i } = e;
		e.cextra[i] = !0, e.calign[i] = "center", n[i] = (r[i] === "0" && e.clines[i] ? "\\hspace{.25em}" : "") + t, r[i] || (r[i] = ".5em"), r[++e.j] = ".5em";
	}
	repeat(e) {
		let t = this.getBraces(e), n = this.getBraces(e), r = parseInt(t);
		if (String(r) !== t) throw new M("ColArgNotNum", "First argument to %1 column specifier must be a number", "*");
		e.template = Array(r).fill(n).join("") + e.template.substring(e.i), e.i = 0;
	}
	brace(e) {
		e.i--, this.processColumn(e, this.getBraces(e));
	}
}, Bt = O.Variant, Vt = class e {
	constructor(t, n = []) {
		this.options = {}, this.columnParser = new zt(), this.packageData = /* @__PURE__ */ new Map(), this.parsers = [], this.root = null, this.nodeLists = {}, this.error = !1, this.handlers = t.handlers, this.nodeFactory = new Dt(), this.nodeFactory.configuration = this, this.nodeFactory.setCreators(t.nodes), this.itemFactory = new Et(t.items), this.itemFactory.configuration = this, _(this.options, ...n), _(this.options, t.options), this.mathStyle = e.getVariant.get(this.options.mathStyle) || e.getVariant.get("TeX");
	}
	pushParser(e) {
		this.parsers.unshift(e);
	}
	popParser() {
		this.parsers.shift();
	}
	get parser() {
		return this.parsers[0];
	}
	clear() {
		this.parsers = [], this.root = null, this.nodeLists = {}, this.error = !1, this.tags.resetTag();
	}
	addNode(e, t) {
		let n = this.nodeLists[e];
		if (n ||= this.nodeLists[e] = [], n.push(t), t.kind !== e) {
			let n = D.getProperty(t, "in-lists") || "", r = (n ? n.split(/,/) : []).concat(e).join(",");
			D.setProperty(t, "in-lists", r);
		}
	}
	getList(e) {
		let t = this.nodeLists[e] || [], n = [];
		for (let e of t) this.inTree(e) && n.push(e);
		return this.nodeLists[e] = n, n;
	}
	removeFromList(e, t) {
		let n = this.nodeLists[e] || [];
		for (let e of t) {
			let t = n.indexOf(e);
			t >= 0 && n.splice(t, 1);
		}
	}
	inTree(e) {
		for (; e && e !== this.root;) e = e.parent;
		return !!e;
	}
};
Vt.getVariant = /* @__PURE__ */ new Map([
	["TeX", (e, t) => t && e.match(/^[\u0391-\u03A9\u03F4]/) ? Bt.NORMAL : ""],
	["ISO", (e) => Bt.ITALIC],
	["French", (e) => e.normalize("NFD").match(/^[a-z]/) ? Bt.ITALIC : Bt.NORMAL],
	["upright", (e) => Bt.NORMAL]
]);
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/Tags.js
var Ht = class {
	constructor(e = "???", t = "") {
		this.tag = e, this.id = t;
	}
}, Ut = class {
	constructor(e = "", t = !1, n = !1, r = null, i = "", a = "", o = !1, s = "") {
		this.env = e, this.taggable = t, this.defaultTags = n, this.tag = r, this.tagId = i, this.tagFormat = a, this.noTag = o, this.labelId = s;
	}
}, Wt = class {
	constructor() {
		this.counter = 0, this.allCounter = 0, this.configuration = null, this.ids = {}, this.allIds = {}, this.labels = {}, this.allLabels = {}, this.redo = !1, this.refUpdate = !1, this.currentTag = new Ut(), this.history = [], this.stack = [], this.enTag = function(e, t) {
			let n = this.configuration.nodeFactory, r = n.create("node", "mtd", [e]), i = n.create("node", "mlabeledtr", [t, r]);
			return n.create("node", "mtable", [i], {
				side: this.configuration.options.tagSide,
				minlabelspacing: this.configuration.options.tagIndent,
				displaystyle: !0
			});
		};
	}
	start(e, t, n) {
		this.currentTag && this.stack.push(this.currentTag);
		let r = this.label;
		this.currentTag = new Ut(e, t, n), this.label = r;
	}
	get env() {
		return this.currentTag.env;
	}
	end() {
		this.history.push(this.currentTag);
		let e = this.label;
		this.currentTag = this.stack.pop(), e && !this.label && (this.label = e);
	}
	tag(e, t) {
		this.currentTag.tag = e, this.currentTag.tagFormat = t ? e : this.formatTag(e), this.currentTag.noTag = !1;
	}
	notag() {
		this.tag("", !0), this.currentTag.noTag = !0;
	}
	get noTag() {
		return this.currentTag.noTag;
	}
	set label(e) {
		this.currentTag.labelId = e;
	}
	get label() {
		return this.currentTag.labelId;
	}
	formatUrl(e, t) {
		return t + "#" + encodeURIComponent(e);
	}
	formatTag(e) {
		return [
			"(",
			e,
			")"
		];
	}
	formatRef(e) {
		return this.formatTag(e);
	}
	formatId(e) {
		return "mjx-eqn:" + e.replace(/\s/g, "_");
	}
	formatNumber(e) {
		return e.toString();
	}
	autoTag() {
		this.currentTag.tag ?? (this.counter++, this.tag(this.formatNumber(this.counter), !1));
	}
	clearTag() {
		this.tag(null, !0), this.currentTag.tagId = "";
	}
	getTag(e = !1) {
		if (e) return this.autoTag(), this.makeTag();
		let t = this.currentTag;
		return t.taggable && !t.noTag && (t.defaultTags && this.autoTag(), t.tag) ? this.makeTag() : null;
	}
	resetTag() {
		this.history = [], this.redo = !1, this.refUpdate = !1, this.clearTag();
	}
	reset(e = 0) {
		this.resetTag(), this.counter = this.allCounter = e, this.allLabels = {}, this.allIds = {}, this.label = "";
	}
	startEquation(e) {
		this.history = [], this.stack = [], this.clearTag(), this.currentTag = new Ut("", void 0, void 0), this.labels = {}, this.ids = {}, this.counter = this.allCounter, this.redo = !1;
		let t = e.inputData.recompile;
		t && (this.refUpdate = !0, this.counter = t.counter);
	}
	finishEquation(e) {
		this.redo && (e.inputData.recompile = {
			state: e.state(),
			counter: this.allCounter
		}), this.refUpdate || (this.allCounter = this.counter), Object.assign(this.allIds, this.ids), Object.assign(this.allLabels, this.labels);
	}
	finalize(e, t) {
		if (!t.display || this.currentTag.env || this.currentTag.tag == null) return e;
		let n = this.makeTag();
		return this.enTag(e, n);
	}
	makeId() {
		this.currentTag.tagId = this.formatId(this.configuration.options.useLabelIds && this.label || this.currentTag.tag);
	}
	makeTag() {
		this.makeId(), this.label &&= (this.labels[this.label] = new Ht(this.currentTag.tag, this.currentTag.tagId), "");
		let e = this.currentTag.tagFormat, t = new P((Array.isArray(e) ? e : e.match(/^(\(|\[|\{)(.*)(\}|\]|\))$/)?.slice(1) || [e]).map((e) => e ? `\\text{${e}}` : "").join(""), {}, this.configuration).mml();
		return this.configuration.nodeFactory.create("node", "mtd", [t], {
			id: this.currentTag.tagId,
			rowalign: this.configuration.options.tagAlign
		});
	}
}, Gt = /* @__PURE__ */ new Map([["none", class extends Wt {
	autoTag() {}
	getTag() {
		return this.currentTag.tag ? super.getTag() : null;
	}
}], ["all", class extends Wt {
	finalize(e, t) {
		if (!t.display || this.history.find(function(e) {
			return e.taggable;
		})) return e;
		let n = this.getTag(!0);
		return this.enTag(e, n);
	}
}]]), Kt = "none", qt = {
	OPTIONS: {
		tags: Kt,
		tagSide: "right",
		tagIndent: "0.8em",
		useLabelIds: !0,
		ignoreDuplicateLabels: !1,
		tagAlign: "baseline"
	},
	add(e, t) {
		Gt.set(e, t);
	},
	addTags(e) {
		for (let t of Object.keys(e)) qt.add(t, e[t]);
	},
	create(e) {
		let t = Gt.get(e) || Gt.get(Kt);
		if (!t) throw Error("Unknown tags class");
		return new t();
	},
	setDefault(e) {
		Kt = e;
	},
	getDefault() {
		return qt.create(Kt);
	}
}, Jt = class {
	constructor(e, t, n) {
		this._token = e, this._char = t, this._attributes = n;
	}
	get token() {
		return this._token;
	}
	get char() {
		return this._char;
	}
	get attributes() {
		return this._attributes;
	}
}, Yt = class {
	constructor(e, t, n = []) {
		this._token = e, this._func = t, this._args = n;
	}
	get token() {
		return this._token;
	}
	get func() {
		return this._func;
	}
	get args() {
		return this._args;
	}
};
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/TokenMap.js
function Xt(e) {
	return e === void 0 || e;
}
var Zt = class {
	constructor(e, t) {
		this._name = e, this._parser = t, sn.register(this);
	}
	get name() {
		return this._name;
	}
	parserFor(e) {
		return this.contains(e) ? this.parser : null;
	}
	parse([e, t]) {
		let n = this.parserFor(t), r = this.lookup(t);
		return n && r ? Xt(n(e, r)) : null;
	}
	set parser(e) {
		this._parser = e;
	}
	get parser() {
		return this._parser;
	}
}, Qt = class extends Zt {
	constructor(e, t, n) {
		super(e, t), this._regExp = n;
	}
	contains(e) {
		return this._regExp.test(e);
	}
	lookup(e) {
		return this.contains(e) ? e : null;
	}
}, $t = class extends Zt {
	constructor() {
		super(...arguments), this.map = /* @__PURE__ */ new Map();
	}
	lookup(e) {
		return this.map.get(e);
	}
	contains(e) {
		return this.map.has(e);
	}
	add(e, t) {
		this.map.set(e, t);
	}
	remove(e) {
		this.map.delete(e);
	}
}, en = class extends $t {
	constructor(e, t, n) {
		super(e, t);
		for (let e of Object.keys(n)) {
			let t = n[e], [r, i] = typeof t == "string" ? [t, null] : t, a = new Jt(e, r, i);
			this.add(e, a);
		}
	}
}, tn = class extends en {
	parse([e, t]) {
		return super.parse([e, "\\" + t]);
	}
}, nn = class extends $t {
	constructor(e, t, n = {}) {
		super(e, null);
		let r = (e) => typeof e == "string" ? n[e] : e;
		for (let [e, n] of Object.entries(t)) {
			let t, i;
			Array.isArray(n) ? (t = r(n[0]), i = n.slice(1)) : (t = r(n), i = []);
			let a = new Yt(e, t, i);
			this.add(e, a);
		}
	}
	parserFor(e) {
		let t = this.lookup(e);
		return t ? t.func : null;
	}
	parse([e, t]) {
		let n = this.lookup(t), r = this.parserFor(t);
		return !n || !r ? null : Xt(r(e, n.token, ...n.args));
	}
}, rn = class extends nn {
	parse([e, t]) {
		let n = this.lookup(t), r = this.parserFor(t);
		if (!n || !r) return null;
		let i = e.currentCS;
		e.currentCS = "\\" + t;
		let a = r(e, "\\" + n.token, ...n.args);
		return e.currentCS = i, Xt(a);
	}
}, an = class extends nn {
	constructor(e, t, n, r = {}) {
		super(e, n, r), this.parser = t;
	}
	parse([e, t]) {
		let n = this.lookup(t), r = this.parserFor(t);
		return !n || !r ? null : Xt(this.parser(e, n.token, r, n.args));
	}
}, on = /* @__PURE__ */ new Map(), sn = {
	register(e) {
		on.set(e.name, e);
	},
	getMap(e) {
		return on.get(e);
	}
}, cn = class e {
	constructor() {
		this._configuration = new _e(), this._fallback = new Le();
	}
	add(e, t, n = _e.DEFAULTPRIORITY) {
		for (let t of e.slice().reverse()) {
			let e = sn.getMap(t);
			if (!e) {
				this.warn(`Configuration '${t}' not found! Omitted.`);
				return;
			}
			this._configuration.add(e, n);
		}
		t && this._fallback.add(t, n);
	}
	remove(e, t = null) {
		for (let t of e) {
			let e = this.retrieve(t);
			e && this._configuration.remove(e);
		}
		t && this._fallback.remove(t);
	}
	parse(t) {
		for (let { item: n } of this._configuration) {
			let r = n.parse(t);
			if (r === e.FALLBACK) break;
			if (r) return r;
		}
		let [n, r] = t;
		Array.from(this._fallback)[0].item(n, r);
	}
	lookup(e) {
		let t = this.applicable(e);
		return t ? t.lookup(e) : null;
	}
	contains(e) {
		let t = this.applicable(e);
		return !!t && !(t instanceof en && t.lookup(e).char === null);
	}
	toString() {
		let e = [];
		for (let { item: t } of this._configuration) e.push(t.name);
		return e.join(", ");
	}
	applicable(e) {
		for (let { item: t } of this._configuration) if (t.contains(e)) return t;
		return null;
	}
	retrieve(e) {
		for (let { item: t } of this._configuration) if (t.name === e) return t;
		return null;
	}
	warn(e) {
		console.log("TexParser Warning: " + e);
	}
};
cn.FALLBACK = Symbol("fallback");
var ln = class {
	constructor() {
		this.map = /* @__PURE__ */ new Map();
	}
	add(e, t, n = _e.DEFAULTPRIORITY) {
		for (let r of Object.keys(e)) {
			let i = r, a = this.get(i);
			a || (a = new cn(), this.set(i, a)), a.add(e[i], t[i], n);
		}
	}
	remove(e, t) {
		for (let n of Object.keys(e)) {
			let r = this.get(n);
			r && r.remove(e[n], t[n]);
		}
	}
	set(e, t) {
		this.map.set(e, t);
	}
	get(e) {
		return this.map.get(e);
	}
	retrieve(e) {
		for (let t of this.map.values()) {
			let n = t.retrieve(e);
			if (n) return n;
		}
		return null;
	}
	keys() {
		return this.map.keys();
	}
}, un = class e {
	static makeProcessor(e, t) {
		return Array.isArray(e) ? e : [e, t];
	}
	static _create(t, n = {}) {
		let r = n.priority ?? _e.DEFAULTPRIORITY, i = n.init ? this.makeProcessor(n.init, r) : null, a = n.config ? this.makeProcessor(n.config, r) : null, o = (n.preprocessors || []).map((e) => this.makeProcessor(e, r)), s = (n.postprocessors || []).map((e) => this.makeProcessor(e, r)), c = n.parser || "tex";
		return new e(t, n[k.HANDLER] || {}, n[k.FALLBACK] || {}, n[k.ITEMS] || {}, n[k.TAGS] || {}, n[k.OPTIONS] || {}, n[k.NODES] || {}, o, s, i, a, r, c);
	}
	static create(t, n = {}) {
		let r = e._create(t, n);
		return fn.set(t, r), r;
	}
	static local(t = {}) {
		return e._create("", t);
	}
	constructor(e, t = {}, n = {}, r = {}, i = {}, a = {}, o = {}, s = [], c = [], l = null, u = null, d, f) {
		this.name = e, this.handler = t, this.fallback = n, this.items = r, this.tags = i, this.options = a, this.nodes = o, this.preprocessors = s, this.postprocessors = c, this.initMethod = l, this.configMethod = u, this.priority = d, this.parser = f, this.handler = Object.assign({
			[A.CHARACTER]: [],
			[A.DELIMITER]: [],
			[A.MACRO]: [],
			[A.ENVIRONMENT]: []
		}, t);
	}
	get init() {
		return this.initMethod ? this.initMethod[0] : null;
	}
	get config() {
		return this.configMethod ? this.configMethod[0] : null;
	}
}, dn = /* @__PURE__ */ new Map(), fn = {
	set(e, t) {
		dn.set(e, t);
	},
	get(e) {
		return dn.get(e);
	},
	keys() {
		return dn.keys();
	}
}, pn = class {
	constructor(e, t = ["tex"]) {
		this.initMethod = new Le(), this.configMethod = new Le(), this.configurations = new _e(), this.parsers = [], this.handlers = new ln(), this.items = {}, this.tags = {}, this.options = {}, this.nodes = {}, this.parsers = t;
		for (let t of e.slice().reverse()) this.addPackage(t);
		for (let { item: e, priority: t } of this.configurations) this.append(e, t);
	}
	init() {
		this.initMethod.execute(this);
	}
	config(e) {
		this.configMethod.execute(this, e);
		for (let t of this.configurations) this.addFilters(e, t.item);
	}
	addPackage(e) {
		let t = typeof e == "string" ? e : e[0], n = this.getPackage(t);
		n && this.configurations.add(n, typeof e == "string" ? n.priority : e[1]);
	}
	add(e, t, n = {}) {
		let r = this.getPackage(e);
		this.append(r), this.configurations.add(r, r.priority), this.init();
		let i = t.parseOptions;
		i.nodeFactory.setCreators(r.nodes);
		for (let e of Object.keys(r.items)) i.itemFactory.setNodeClass(e, r.items[e]);
		qt.addTags(r.tags), _(i.options, r.options), Pe(i.options, n), this.addFilters(t, r), r.config && r.config(this, t);
	}
	getPackage(e) {
		let t = fn.get(e);
		if (t && !this.parsers.includes(t.parser)) throw Error(`Package '${e}' doesn't target the proper parser`);
		return t || this.warn(`Package '${e}' not found.  Omitted.`), t;
	}
	append(e, t) {
		t ||= e.priority, e.initMethod && this.initMethod.add(e.initMethod[0], e.initMethod[1]), e.configMethod && this.configMethod.add(e.configMethod[0], e.configMethod[1]), this.handlers.add(e.handler, e.fallback, t), Object.assign(this.items, e.items), Object.assign(this.tags, e.tags), _(this.options, e.options), Object.assign(this.nodes, e.nodes);
	}
	addFilters(e, t) {
		for (let [n, r] of t.preprocessors) e.preFilters.add(n, r);
		for (let [n, r] of t.postprocessors) e.postFilters.add(n, r);
	}
	warn(e) {
		console.warn("MathJax Warning: " + e);
	}
}, mn = [
	"top",
	"right",
	"bottom",
	"left"
], hn = [
	"width",
	"style",
	"color"
];
function gn(e) {
	let t = e.split(/((?:'[^'\n]*'|"[^"\n]*"|,[\s\n]|[^\s\n])*)/g), n = [];
	for (; t.length > 1;) t.shift(), n.push(t.shift());
	return n;
}
function _n(e) {
	let t = gn(this.styles[e]);
	t.length === 0 && t.push(""), t.length === 1 && t.push(t[0]), t.length === 2 && t.push(t[0]), t.length === 3 && t.push(t[1]);
	for (let n of I.connect[e].children) this.setStyle(this.childName(e, n), t.shift());
}
function vn(e) {
	let t = I.connect[e].children, n = [];
	for (let r of t) {
		let t = this.styles[this.childName(e, r)];
		if (!t) {
			delete this.styles[e];
			return;
		}
		n.push(t);
	}
	n[3] === n[1] && (n.pop(), n[2] === n[0] && (n.pop(), n[1] === n[0] && n.pop())), this.styles[e] = n.join(" ");
}
function yn(e) {
	vn.call(this, e), this.combineChildren(e), xn.call(this, e), this.combineParent(e);
}
function bn(e) {
	for (let t of I.connect[e].children) this.setStyle(this.childName(e, t), this.styles[e]);
}
function xn(e) {
	if (!I.connect[e]) return;
	let t = [...I.connect[e].children], n = this.styles[this.childName(e, t.shift())];
	for (let r of t) if (this.styles[this.childName(e, r)] !== n) {
		delete this.styles[e];
		return;
	}
	n && (this.styles[e] = n);
}
var Sn = {
	width: /^(?:[\d.]+(?:[a-z]+)|thin|medium|thick|inherit|initial|unset)$/,
	style: /^(?:none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|inherit|initial|unset)$/
};
function Cn(e) {
	let t = {
		width: "",
		style: "",
		color: ""
	};
	for (let n of gn(this.styles[e])) n.match(Sn.width) && t.width === "" ? t.width = n : n.match(Sn.style) && t.style === "" ? t.style = n : t.color = n;
	for (let n of I.connect[e].children) this.setStyle(this.childName(e, n), t[n]);
}
function wn(e) {
	let t = [];
	for (let n of I.connect[e].children) {
		let r = this.styles[this.childName(e, n)];
		r && t.push(r);
	}
	t.length > 1 ? this.styles[e] = t.join(" ") : delete this.styles[e];
}
var Tn = {
	style: /^(?:normal|italic|oblique|inherit|initial|unset)$/,
	variant: RegExp("^(?:" + [
		"normal|none",
		"inherit|initial|unset",
		"common-ligatures|no-common-ligatures",
		"discretionary-ligatures|no-discretionary-ligatures",
		"historical-ligatures|no-historical-ligatures",
		"contextual|no-contextual",
		"(?:stylistic|character-variant|swash|ornaments|annotation)\\([^)]*\\)",
		"small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps",
		"lining-nums|oldstyle-nums|proportional-nums|tabular-nums",
		"diagonal-fractions|stacked-fractions",
		"ordinal|slashed-zero",
		"jis78|jis83|jis90|jis04|simplified|traditional",
		"full-width|proportional-width",
		"ruby"
	].join("|") + ")$"),
	weight: /^(?:normal|bold|bolder|lighter|[1-9]00|inherit|initial|unset)$/,
	stretch: RegExp("^(?:" + [
		"normal",
		"(?:(?:ultra|extra|semi)-)?(?:condensed|expanded)",
		"inherit|initial|unset"
	].join("|") + ")$"),
	size: RegExp("^(?:" + [
		"xx-small|x-small|small|medium|large|x-large|xx-large|larger|smaller",
		"[\\d.]+%|[\\d.]+[a-z]+",
		"inherit|initial|unset"
	].join("|") + ")(?:/(?:normal|[\\d.]+(?:%|[a-z]+)?))?$")
};
function En(e) {
	let t = gn(this.styles[e]), n = {
		style: "",
		variant: [],
		weight: "",
		stretch: "",
		size: "",
		family: "",
		"line-height": ""
	};
	for (let e of t) {
		n.family ||= e;
		for (let t of Object.keys(Tn)) if ((Array.isArray(n[t]) || n[t] === "") && e.match(Tn[t])) {
			if (n.family === e && (n.family = ""), t === "size") {
				let [r, i] = e.split(/\//);
				n[t] = r, i && (n["line-height"] = i);
			} else n.size === "" && (Array.isArray(n[t]) ? n[t].push(e) : n[t] === "" && (n[t] = e));
		}
	}
	Dn.call(this, e, n), delete this.styles[e];
}
function Dn(e, t) {
	for (let n of I.connect[e].children) {
		let r = this.childName(e, n);
		if (Array.isArray(t[n])) {
			let e = t[n];
			e.length && (this.styles[r] = e.join(" "));
		} else t[n] !== "" && (this.styles[r] = t[n]);
	}
}
function On(e) {}
var I = class e {
	constructor(e = "") {
		this.parse(e);
	}
	sanitizeValue(e) {
		let t = this.constructor.pattern;
		if (!e.match(t.sanitize)) return e;
		e = e.replace(t.value, "$1");
		let n = e.replace(/\\./g, "").replace(/(['"]).*?\1/g, "").replace(/[^'"]/g, "");
		return n.length && (e += n.charAt(0)), e;
	}
	get cssText() {
		let t = [];
		for (let n of Object.keys(this.styles)) {
			let r = this.parentName(n), i = n.replace(/.*-/, ""), a = this.childName(this.parentName(r), i);
			this.styles[n] && !this.styles[a] && (!this.styles[r] || !(e.connect[r]?.children)?.includes(i)) && t.push(`${n}: ${this.styles[n]};`);
		}
		return t.join(" ");
	}
	get styleList() {
		return Object.assign({}, this.styles);
	}
	set(t, n) {
		t = this.normalizeName(t), this.setStyle(t, String(n));
		let r = e.connect[t];
		if (r?.subPart) {
			r.combine.call(this, t);
			return;
		}
		if (this.combineParent(t), t.match(/-.*-/)) {
			let e = t.replace(/-.*-/, "-");
			xn.call(this, e);
		}
	}
	combineParent(t) {
		for (; t.match(/-/);) {
			let n = t;
			t = this.parentName(t);
			let r = e.connect[t];
			if (!e.connect[n] && !(r?.children)?.includes(n.substring(t.length + 1))) break;
			r.combine.call(this, t);
		}
		if (!this.styles[t]) return;
		let n = e.connect[t];
		for (let e of n?.parts || []) delete this.styles[this.childName(t, e)];
	}
	get(e) {
		return e = this.normalizeName(e), Object.hasOwn(this.styles, e) ? this.styles[e] : "";
	}
	setStyle(t, n) {
		this.styles[t] = this.sanitizeValue(n), e.connect[t]?.children && e.connect[t].split.call(this, t), n === "" && delete this.styles[t];
	}
	combineChildren(t) {
		let n = this.parentName(t);
		for (let r of e.connect[t].children) {
			let t = this.childName(n, r);
			e.connect[t].combine.call(this, t);
		}
	}
	parentName(e) {
		let t = e.replace(/-[^-]*$/, "");
		return e === t ? "" : t;
	}
	childName(t, n) {
		return n.match(/-/) ? n : (e.connect[t]?.subPart && (n += t.replace(/.*-/, "-"), t = this.parentName(t)), t + "-" + n);
	}
	normalizeName(e) {
		return e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase());
	}
	parse(e = "") {
		let t = this.constructor.pattern;
		this.styles = {};
		let n = e.replace(/\n/g, " ").replace(t.comment, "").split(t.style);
		for (; n.length > 1;) {
			let [e, t, r] = n.splice(0, 3);
			if (e.match(/[^\s\n;]/)) return;
			this.set(t, r);
		}
	}
};
I.pattern = {
	sanitize: /['";]/,
	value: /^((:?'(?:\\.|[^'])*(?:'|$)|"(?:\\.|[^"])*(?:"|$)|\n|\\.|[^'";])*?)[\s\n]*(?:;|$).*/,
	style: /([-a-z]+)[\s\n]*:[\s\n]*((?:'(?:\\.|[^'])*(?:'|$)|"(?:\\.|[^"])*(?:"|$)|\n|\\.|[^'";])*?)[\s\n]*(?:;|$)/g,
	comment: /\/\*[^]*?\*\//g
}, I.connect = {
	padding: {
		children: mn,
		split: _n,
		combine: vn
	},
	margin: {
		children: mn,
		split: _n,
		combine: vn
	},
	border: {
		children: mn,
		parts: hn,
		split: bn,
		combine: xn
	},
	"border-top": {
		children: hn,
		split: Cn,
		combine: wn
	},
	"border-right": {
		children: hn,
		split: Cn,
		combine: wn
	},
	"border-bottom": {
		children: hn,
		split: Cn,
		combine: wn
	},
	"border-left": {
		children: hn,
		split: Cn,
		combine: wn
	},
	"border-width": {
		children: mn,
		split: _n,
		combine: yn,
		subPart: !0
	},
	"border-style": {
		children: mn,
		split: _n,
		combine: yn,
		subPart: !0
	},
	"border-color": {
		children: mn,
		split: _n,
		combine: yn,
		subPart: !0
	},
	font: {
		children: [
			"style",
			"variant",
			"weight",
			"stretch",
			"line-height",
			"size",
			"family"
		],
		split: En,
		combine: On
	}
};
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/base/BaseItems.js
var kn = class extends N {
	constructor(e, t) {
		super(e), this.global = t;
	}
	get kind() {
		return "start";
	}
	get isOpen() {
		return !0;
	}
	checkItem(e) {
		if (e.isKind("stop")) {
			let e = this.toMml();
			return this.global.isInner || (e = this.factory.configuration.tags.finalize(e, this.env)), [[this.factory.create("mml", e)], !0];
		}
		return super.checkItem(e);
	}
}, An = class extends N {
	get kind() {
		return "stop";
	}
	get isClose() {
		return !0;
	}
}, jn = class extends N {
	get kind() {
		return "open";
	}
	get isOpen() {
		return !0;
	}
	checkItem(e) {
		if (e.isKind("close")) {
			let t = this.toMml(), n = this.create("node", "TeXAtom", [t]);
			return e.addLatexItem(n), [[this.factory.create("mml", n)], !0];
		}
		return super.checkItem(e);
	}
};
jn.errors = Object.assign(Object.create(N.errors), { stop: ["ExtraOpenMissingClose", "Extra open brace or missing close brace"] });
var Mn = class extends N {
	get kind() {
		return "close";
	}
	get isClose() {
		return !0;
	}
}, Nn = class extends N {
	get kind() {
		return "null";
	}
}, Pn = class extends N {
	get kind() {
		return "prime";
	}
	checkItem(e) {
		let [t, n] = this.Peek(2), r = (D.isType(t, "msubsup") || D.isType(t, "msup")) && !D.getChildAt(t, t.sup), i = (D.isType(t, "munderover") || D.isType(t, "mover")) && !D.getChildAt(t, t.over) && !D.getProperty(t, "subsupOK");
		if (!r && !i) return [[this.create("node", t.getProperty("movesupsub") ? "mover" : "msup", [t, n]), e], !0];
		let a = r ? t.sup : t.over;
		return D.setChild(t, a, n), [[t, e], !0];
	}
}, Fn = class extends N {
	get kind() {
		return "subsup";
	}
	checkItem(e) {
		if (e.isKind("open") || e.isKind("left")) return N.success;
		let t = this.First, n = this.getProperty("position");
		if (e.isKind("mml")) return this.getProperty("primes") && (n === 2 ? (D.setProperty(this.getProperty("primes"), "variantForm", !0), e.First = this.create("node", "mrow", [this.getProperty("primes"), e.First])) : D.setChild(t, 2, this.getProperty("primes"))), D.setChild(t, n, e.First), this.getProperty("movesupsub") != null && D.setProperty(t, "movesupsub", this.getProperty("movesupsub")), [[this.factory.create("mml", t)], !0];
		super.checkItem(e);
		let r = this.getErrors([
			"",
			"sub",
			"sup"
		][n]);
		throw new M(r[0], r[1], ...r.splice(2));
	}
};
Fn.errors = Object.assign(Object.create(N.errors), {
	stop: ["MissingScript", "Missing superscript or subscript argument"],
	sup: ["MissingOpenForSup", "Missing open brace for superscript"],
	sub: ["MissingOpenForSub", "Missing open brace for subscript"]
});
var In = class extends N {
	constructor(e) {
		super(e), this.setProperty("name", "\\over");
	}
	get kind() {
		return "over";
	}
	get isClose() {
		return !0;
	}
	checkItem(e) {
		if (e.isKind("over")) throw new M("AmbiguousUseOf", "Ambiguous use of %1", e.getName());
		if (e.isClose) {
			let t = this.create("node", "mfrac", [this.getProperty("num"), this.toMml(!1)]);
			return this.getProperty("thickness") != null && D.setAttribute(t, "linethickness", this.getProperty("thickness")), (this.getProperty("ldelim") || this.getProperty("rdelim")) && (D.setProperty(t, "withDelims", !0), t = F.fixedFence(this.factory.configuration, this.getProperty("ldelim"), t, this.getProperty("rdelim"))), t.attributes.set(O.Attr.LATEXITEM, this.getProperty("name")), [[this.factory.create("mml", t), e], !0];
		}
		return super.checkItem(e);
	}
	toString() {
		return "over[" + this.getProperty("num") + " / " + this.nodes.join("; ") + "]";
	}
}, Ln = class extends N {
	constructor(e, t) {
		super(e), this.setProperty("delim", t);
	}
	get kind() {
		return "left";
	}
	get isOpen() {
		return !0;
	}
	checkItem(e) {
		if (e.isKind("right")) {
			let t = F.fenced(this.factory.configuration, this.getProperty("delim"), this.toMml(), e.getProperty("delim"), "", e.getProperty("color")), n = t.childNodes[0], r = t.childNodes[t.childNodes.length - 1], i = this.factory.create("mml", t);
			return this.addLatexItem(n, "\\left"), e.addLatexItem(r, "\\right"), i.Peek()[0].attributes.set(O.Attr.LATEXITEM, "\\left" + e.startStr.slice(this.startI, e.stopI)), [[i], !0];
		}
		if (e.isKind("middle")) {
			let t = {
				stretchy: !0,
				symmetric: !0
			};
			e.getProperty("color") && (t.mathcolor = e.getProperty("color"));
			let n = this.create("token", "mo", t, e.getProperty("delim"));
			return e.addLatexItem(n, "\\middle"), this.Push(this.create("node", "TeXAtom", [], { texClass: b.CLOSE }), n, this.create("node", "TeXAtom", [], { texClass: b.OPEN })), this.env = {}, [[this], !0];
		}
		return super.checkItem(e);
	}
};
Ln.errors = Object.assign(Object.create(N.errors), { stop: ["ExtraLeftMissingRight", "Extra \\left or missing \\right"] });
var Rn = class extends N {
	constructor(e, t, n) {
		super(e), this.setProperty("delim", t), n && this.setProperty("color", n);
	}
	get kind() {
		return "middle";
	}
	get isClose() {
		return !0;
	}
}, zn = class extends N {
	constructor(e, t, n) {
		super(e), this.setProperty("delim", t), n && this.setProperty("color", n);
	}
	get kind() {
		return "right";
	}
	get isClose() {
		return !0;
	}
}, Bn = class extends N {
	get kind() {
		return "break";
	}
	constructor(e, t, n) {
		super(e), this.setProperty("linebreak", t), this.setProperty("insert", n);
	}
	checkItem(e) {
		let t = this.getProperty("linebreak");
		if (e.isKind("mml")) {
			let n = e.First;
			if (n.isKind("mo")) {
				if ((D.getOp(n)?.[3]?.linebreakstyle || D.getAttribute(n, "linebreakstyle")) !== "after") return D.setAttribute(n, "linebreak", t), [[e], !0];
				if (!this.getProperty("insert")) return [[e], !0];
			}
		}
		let n = this.create("token", "mspace", { linebreak: t });
		return [[this.factory.create("mml", n), e], !0];
	}
}, Vn = class extends N {
	get kind() {
		return "begin";
	}
	get isOpen() {
		return !0;
	}
	checkItem(e) {
		if (e.isKind("end")) {
			if (e.getName() !== this.getName()) throw new M("EnvBadEnd", "\\begin{%1} ended with \\end{%2}", this.getName(), e.getName());
			let t = this.toMml();
			return e.addLatexItem(t), [[this.factory.create("mml", t)], !0];
		}
		if (e.isKind("stop")) throw new M("EnvMissingEnd", "Missing \\end{%1}", this.getName());
		return super.checkItem(e);
	}
}, Hn = class extends N {
	get kind() {
		return "end";
	}
	get isClose() {
		return !0;
	}
}, Un = class extends N {
	get kind() {
		return "style";
	}
	checkItem(e) {
		if (!e.isClose) return super.checkItem(e);
		let t = this.create("node", "mstyle", this.nodes, this.getProperty("styles"));
		return [[this.factory.create("mml", t), e], !0];
	}
}, Wn = class extends N {
	get kind() {
		return "position";
	}
	checkItem(e) {
		if (e.isClose) throw new M("MissingBoxFor", "Missing box for %1", this.getName());
		if (e.isFinal) {
			let t = e.toMml();
			switch (this.getProperty("move")) {
				case "vertical": return t = this.create("node", "mpadded", [t], {
					height: this.getProperty("dh"),
					depth: this.getProperty("dd"),
					voffset: this.getProperty("dh")
				}), [[this.factory.create("mml", t)], !0];
				case "horizontal": return [[
					this.factory.create("mml", this.getProperty("left")),
					e,
					this.factory.create("mml", this.getProperty("right"))
				], !0];
			}
		}
		return super.checkItem(e);
	}
}, Gn = class extends N {
	get kind() {
		return "cell";
	}
	get isClose() {
		return !0;
	}
}, Kn = class extends N {
	get isFinal() {
		return !0;
	}
	get kind() {
		return "mml";
	}
}, qn = class extends N {
	get kind() {
		return "fn";
	}
	checkItem(e) {
		let t = this.First;
		if (t) {
			if (e.isOpen) return N.success;
			if (!e.isKind("fn")) {
				let n = e.First;
				if (!e.isKind("mml") || !n || D.isType(n, "mstyle") && n.childNodes.length && D.isType(n.childNodes[0].childNodes[0], "mspace") || D.isType(n, "mspace")) return [[t, e], !0];
				D.isEmbellished(n) && (n = D.getCoreMO(n));
				let r = D.getForm(n);
				if (r != null && [
					0,
					0,
					1,
					1,
					0,
					1,
					1,
					0,
					0,
					0
				][r[2]]) return [[t, e], !0];
			}
			return t.isKind("TeXAtom") && t.isEmpty ? [[t, e], !0] : [[
				t,
				this.create("token", "mo", { texClass: b.NONE }, At.ApplyFunction),
				e
			], !0];
		}
		return super.checkItem(e);
	}
}, Jn = class extends N {
	constructor() {
		super(...arguments), this.remap = sn.getMap("not_remap");
	}
	get kind() {
		return "not";
	}
	checkItem(e) {
		let t, n, r;
		if (e.isKind("open") || e.isKind("left")) return N.success;
		if (e.isKind("mml") && (D.isType(e.First, "mo") || D.isType(e.First, "mi") || D.isType(e.First, "mtext")) && (t = e.First, n = D.getText(t), n.length === 1 && !D.getProperty(t, "movesupsub") && D.getChildren(t).length === 1)) return this.remap.contains(n) ? (r = this.create("text", this.remap.lookup(n).char), D.setChild(t, 0, r)) : (r = this.create("text", "̸"), D.appendChildren(t, [r])), [[e], !0];
		r = this.create("text", "⧸");
		let i = this.create("node", "mtext", [], {}, r), a = this.create("node", "mpadded", [i], { width: 0 });
		return t = this.create("node", "TeXAtom", [a], { texClass: b.REL }), [[t, e], !0];
	}
}, Yn = class extends N {
	get kind() {
		return "nonscript";
	}
	checkItem(e) {
		if (e.isKind("mml") && e.Size() === 1) {
			let t = e.First;
			if (t.isKind("mstyle") && t.notParent && (t = D.getChildren(D.getChildren(t)[0])[0]), t.isKind("mspace")) {
				if (t !== e.First) {
					let t = this.create("node", "mrow", [e.Pop()]);
					e.Push(t);
				}
				this.factory.configuration.addNode("nonscript", e.First);
			}
		}
		return [[e], !0];
	}
}, Xn = class extends N {
	get kind() {
		return "dots";
	}
	checkItem(e) {
		if (e.isKind("open") || e.isKind("left")) return N.success;
		let t = this.getProperty("ldots"), n = e.First;
		if (e.isKind("mml") && D.isEmbellished(n)) {
			let e = D.getTexClass(D.getCoreMO(n));
			(e === b.BIN || e === b.REL) && (t = this.getProperty("cdots"));
		}
		return [[t, e], !0];
	}
}, Zn = class extends N {
	constructor() {
		super(...arguments), this.table = [], this.row = [], this.frame = [], this.hfill = [], this.arraydef = {}, this.cstart = [], this.cend = [], this.cextra = [], this.atEnd = !1, this.ralign = [], this.breakAlign = {
			cell: "",
			row: "",
			table: ""
		}, this.templateSubs = 0;
	}
	get kind() {
		return "array";
	}
	get isOpen() {
		return !0;
	}
	get copyEnv() {
		return !1;
	}
	checkItem(e) {
		if (e.isClose && !e.isKind("over")) {
			if (e.getProperty("isEntry")) return this.EndEntry(), this.clearEnv(), this.StartEntry(), N.fail;
			if (e.getProperty("isCR")) return this.EndEntry(), this.EndRow(), this.clearEnv(), this.StartEntry(), N.fail;
			this.EndTable(), this.clearEnv();
			let t = this.factory.create("mml", this.createMml());
			if (this.getProperty("requireClose")) {
				if (e.isKind("close")) return [[t], !0];
				throw new M("MissingCloseBrace", "Missing close brace");
			}
			return [[t, e], !0];
		}
		return super.checkItem(e);
	}
	createMml() {
		let e = this.arraydef.scriptlevel;
		delete this.arraydef.scriptlevel;
		let t = this.create("node", "mtable", this.table, this.arraydef);
		return e && t.setProperty("smallmatrix", !0), this.breakAlign.table && D.setAttribute(t, "data-break-align", this.breakAlign.table), this.getProperty("arrayPadding") && (D.setAttribute(t, "data-frame-styles", ""), D.setAttribute(t, "framespacing", this.getProperty("arrayPadding"))), t = this.handleFrame(t), e !== void 0 && (t = this.create("node", "mstyle", [t], { scriptlevel: e })), (this.getProperty("open") || this.getProperty("close")) && (t = F.fenced(this.factory.configuration, this.getProperty("open"), t, this.getProperty("close"))), t;
	}
	handleFrame(e) {
		if (!this.frame.length) return e;
		let t = new Map(this.frame), n = this.frame.reduce((e, [, t]) => t === e ? t : "", this.frame[0][1]);
		if (n) {
			if (this.frame.length === 4) return D.setAttribute(e, "frame", n), D.removeAttribute(e, "data-frame-styles"), e;
			if (n === "solid") return D.setAttribute(e, "data-frame-styles", ""), e = this.create("node", "menclose", [e], {
				notation: Array.from(t.keys()).join(" "),
				"data-padding": 0
			}), e;
		}
		let r = mn.map((e) => t.get(e) || "none").join(" ");
		return D.setAttribute(e, "data-frame-styles", r), e;
	}
	StartEntry() {
		let e = this.row.length, t = this.cstart[e], n = this.cend[e], r = this.ralign[e], i = this.cextra;
		if (!t && !n && !r && !i[e] && !i[e + 1]) return;
		let [a, o, s, c] = this.getEntry();
		if (i[e] && (!this.atEnd || i[e + 1]) && (t += "&"), s !== "&" && (c = !!o.trim() || !!(e || s && s.substring(0, 4) !== "\\end"), i[e + 1] && !i[e] && (n = (n || "") + "&", this.atEnd = !0)), !c && !a) return;
		let l = this.parser;
		if (c && (t && (o = F.addArgs(l, t, o)), n && (o = F.addArgs(l, o, n)), r && (o = "\\text{" + o.trim() + "}"), (t || n || r) && ++this.templateSubs > l.configuration.options.maxTemplateSubtitutions)) throw new M("MaxTemplateSubs", "Maximum template substitutions exceeded; is there an invalid use of \\\\ in the template?");
		a && (o = F.addArgs(l, a, o)), l.string = F.addArgs(l, o, l.string), l.i = 0;
	}
	getEntry() {
		let e = this.parser, t = /^([^]*?)([&{}]|\\\\|\\(?:begin|end)\s*\{array\}|\\cr|\\)/, n = 0, r = 0, i = e.i, a, o = [
			"",
			"",
			"",
			!1
		];
		for (; (a = e.string.slice(i).match(t)) !== null;) switch (i += a[0].length, a[2]) {
			case "\\":
				i++;
				break;
			case "{":
				n++;
				break;
			case "}":
				if (!n) return o;
				n--;
				break;
			case "\\begin{array}":
				n || r++;
				break;
			case "\\end{array}": if (!n && r) {
				r--;
				break;
			}
			default: {
				if (n || r) continue;
				i -= a[2].length;
				let t = e.string.slice(e.i, i).trim(), o = t.match(/^(?:\s*\\(?:h(?:dash)?line|hfil{1,3}|rowcolor\s*\{.*?\}))+/);
				return o && (t = t.slice(o[0].length)), e.string = e.string.slice(i), e.i = 0, [
					o?.[0] || "",
					t,
					a[2],
					!0
				];
			}
		}
		return o;
	}
	EndEntry() {
		let e = this.create("node", "mtd", this.nodes);
		this.hfill.length && (this.hfill[0] === 0 && D.setAttribute(e, "columnalign", "right"), this.hfill[this.hfill.length - 1] === this.Size() && D.setAttribute(e, "columnalign", D.getAttribute(e, "columnalign") ? "center" : "left"));
		let t = this.ralign[this.row.length];
		if (t) {
			let [n, r, i] = t, a = this.create("node", "mpadded", e.childNodes[0].childNodes, {
				width: r,
				"data-overflow": "auto",
				"data-align": i,
				"data-vertical-align": n
			});
			a.setProperty("vbox", n), e.childNodes[0].childNodes = [], e.appendChild(a);
		} else this.breakAlign.cell && D.setAttribute(e, "data-vertical-align", this.breakAlign.cell);
		this.breakAlign.cell = "", this.row.push(e), this.Clear(), this.hfill = [];
	}
	EndRow() {
		let e = "mtr";
		this.getProperty("isNumbered") && this.row.length === 3 ? (this.row.unshift(this.row.pop()), e = "mlabeledtr") : this.getProperty("isLabeled") && (e = "mlabeledtr", this.setProperty("isLabeled", !1));
		let t = this.create("node", e, this.row);
		this.breakAlign.row && (D.setAttribute(t, "data-break-align", this.breakAlign.row), this.breakAlign.row = ""), this.addLatexItem(t), this.table.push(t), this.row = [], this.atEnd = !1;
	}
	EndTable() {
		(this.Size() || this.row.length) && (this.EndEntry(), this.EndRow()), this.checkLines();
	}
	checkLines() {
		if (this.arraydef.rowlines) {
			let e = this.arraydef.rowlines.split(/ /);
			e.length === this.table.length ? (this.frame.push(["bottom", e.pop()]), e.length ? this.arraydef.rowlines = e.join(" ") : delete this.arraydef.rowlines) : e.length < this.table.length - 1 && (this.arraydef.rowlines += " none");
		}
		if (this.getProperty("rowspacing")) {
			let e = this.arraydef.rowspacing.split(/ /);
			for (; e.length < this.table.length;) e.push(this.getProperty("rowspacing") + "em");
			this.arraydef.rowspacing = e.join(" ");
		}
	}
	addRowSpacing(e) {
		if (this.arraydef.rowspacing) {
			let t = this.arraydef.rowspacing.split(/ /);
			if (!this.getProperty("rowspacing")) {
				let e = j.dimen2em(t[0]);
				this.setProperty("rowspacing", e);
			}
			let n = this.getProperty("rowspacing");
			for (; t.length < this.table.length;) t.push(j.em(n));
			t[this.table.length - 1] = j.em(Math.max(0, n + j.dimen2em(e))), this.arraydef.rowspacing = t.join(" ");
		}
	}
}, Qn = class extends Zn {
	constructor(e, ...t) {
		super(e), this.maxrow = 0, this.factory.configuration.tags.start(t[0], t[2], t[1]);
	}
	get kind() {
		return "eqnarray";
	}
	EndEntry() {
		let e = this.arraydef.columnalign.split(/ /);
		(this.row.length && e.length ? e[this.row.length % e.length] : "right") !== "right" && F.fixInitialMO(this.factory.configuration, this.nodes), super.EndEntry();
	}
	EndRow() {
		this.row.length > this.maxrow && (this.maxrow = this.row.length);
		let e = this.factory.configuration.tags.getTag();
		e && (this.row = [e].concat(this.row), this.setProperty("isLabeled", !0)), this.factory.configuration.tags.clearTag(), super.EndRow();
	}
	EndTable() {
		super.EndTable(), this.factory.configuration.tags.end(), this.extendArray("columnalign", this.maxrow), this.extendArray("columnwidth", this.maxrow), this.extendArray("columnspacing", this.maxrow - 1), this.extendArray("data-break-align", this.maxrow), this.addIndentshift();
	}
	extendArray(e, t) {
		if (!this.arraydef[e]) return;
		let n = this.arraydef[e].split(/ /), r = [...n];
		if (r.length > 1) {
			for (; r.length < t;) r.push(...n);
			this.arraydef[e] = r.slice(0, t).join(" ");
		}
	}
	addIndentshift() {
		let e = this.arraydef.columnalign.split(/ /), t = "";
		for (let n of e.keys()) {
			if (e[n] === "left" && n > 0) {
				let e = t === "center" ? ".7em" : "2em";
				for (let t of this.table) {
					let r = t.childNodes[t.isKind("mlabeledtr") ? n + 1 : n];
					if (r) {
						let t = this.create("node", "mstyle", r.childNodes[0].childNodes, { indentshift: e });
						r.childNodes[0].childNodes = [], r.appendChild(t);
					}
				}
			}
			t = e[n];
		}
	}
}, $n = class extends Vn {
	get kind() {
		return "mstyle";
	}
	constructor(e, t, n) {
		super(e), this.attrList = t, this.setProperty("name", n);
	}
	checkItem(e) {
		return e.isKind("end") && e.getName() === this.getName() ? [[this.create("node", "mstyle", [this.toMml()], this.attrList)], !0] : super.checkItem(e);
	}
}, er = class extends N {
	constructor(e, ...t) {
		super(e), this.factory.configuration.tags.start("equation", !0, t[0]);
	}
	get kind() {
		return "equation";
	}
	get isOpen() {
		return !0;
	}
	checkItem(e) {
		if (e.isKind("end")) {
			let t = this.toMml(), n = this.factory.configuration.tags.getTag();
			return this.factory.configuration.tags.end(), [[n ? this.factory.configuration.tags.enTag(t, n) : t, e], !0];
		}
		if (e.isKind("stop")) throw new M("EnvMissingEnd", "Missing \\end{%1}", this.getName());
		return super.checkItem(e);
	}
}, tr = 1e6, nr = {
	px: 1,
	in: 96,
	cm: 96 / 2.54,
	mm: 96 / 25.4
}, rr = {
	em: 1,
	ex: .431,
	pt: 1 / 10,
	pc: 12 / 10,
	mu: 1 / 18
}, L = {
	veryverythinmathspace: 1 / 18,
	verythinmathspace: 2 / 18,
	thinmathspace: 3 / 18,
	mediummathspace: 4 / 18,
	thickmathspace: 5 / 18,
	verythickmathspace: 6 / 18,
	veryverythickmathspace: 7 / 18,
	negativeveryverythinmathspace: -1 / 18,
	negativeverythinmathspace: -2 / 18,
	negativethinmathspace: -3 / 18,
	negativemediummathspace: -4 / 18,
	negativethickmathspace: -5 / 18,
	negativeverythickmathspace: -6 / 18,
	negativeveryverythickmathspace: -7 / 18,
	thin: .04,
	medium: .06,
	thick: .1,
	normal: 1,
	big: 2,
	small: 1 / Math.sqrt(2),
	infinity: tr
};
function ir(e, t = 0, n = 1, r = 16) {
	if (typeof e != "string" && (e = String(e)), e === "" || e == null) return t;
	if (L[e]) return L[e];
	let i = e.match(/^\s*([-+]?(?:\.\d+|\d+(?:\.\d*)?))?(pt|em|ex|mu|px|pc|in|mm|cm|%)?/);
	if (!i || i[0] === "") return t;
	let a = parseFloat(i[1] || "1"), o = i[2];
	return Object.hasOwn(nr, o) ? a * nr[o] / r / n : Object.hasOwn(rr, o) ? a * rr[o] : o === "%" ? a / 100 * t : a * t;
}
function ar(e) {
	return (100 * e).toFixed(1).replace(/\.?0+$/, "") + "%";
}
function R(e) {
	return Math.abs(e) < .001 ? "0" : e.toFixed(3).replace(/\.?0+$/, "") + "em";
}
function or(e, t = -1e6, n = 16) {
	return e *= n, t && e < t && (e = t), Math.abs(e) < .1 ? "0" : e.toFixed(1).replace(/\.0$/, "") + "px";
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/base/BaseMethods.js
var sr = 1.2 / .85, cr = {
	fontfamily: 1,
	fontsize: 1,
	fontweight: 1,
	fontstyle: 1,
	color: 1,
	background: 1,
	id: 1,
	class: 1,
	href: 1,
	style: 1
};
function lr(e, t = Infinity) {
	let n = e.replace(/\s+/g, "").split("").map((e) => {
		let t = {
			t: "top",
			b: "bottom",
			m: "middle",
			c: "center"
		}[e];
		if (!t) throw new M("BadBreakAlign", "Invalid alignment character: %1", e);
		return t;
	});
	if (n.length > t) throw new M("TooManyAligns", "Too many alignment characters: %1", e);
	return t === 1 ? n[0] : n.join(" ");
}
function ur(e, t) {
	let n = e.stack.env, r = n.inRoot;
	n.inRoot = !0;
	let i = new P(t, n, e.configuration), a = i.mml(), o = i.stack.global;
	if (o.leftRoot || o.upRoot) {
		let t = {};
		o.leftRoot && (t.width = o.leftRoot), o.upRoot && (t.voffset = o.upRoot, t.height = o.upRoot), a = e.create("node", "mpadded", [a], t);
	}
	return n.inRoot = r, a;
}
var z = {
	Open(e, t) {
		e.Push(e.itemFactory.create("open"));
	},
	Close(e, t) {
		e.Push(e.itemFactory.create("close"));
	},
	Bar(e, t) {
		let n = e.create("token", "mo", {
			stretchy: !1,
			texClass: b.ORD
		}, t);
		n.setProperty("keep-attrs", "stretchy"), e.Push(n);
	},
	Tilde(e, t) {
		e.Push(e.create("token", "mtext", {}, At.nbsp));
	},
	Space(e, t) {},
	Superscript(e, t) {
		e.GetNext().match(/\d/) && (e.string = e.string.substring(0, e.i + 1) + " " + e.string.substring(e.i + 1));
		let n, r, i = e.stack.Top();
		i.isKind("prime") ? ([r, n] = i.Peek(2), e.stack.Pop()) : (r = e.stack.Prev(), r ||= e.create("token", "mi", {}, ""));
		let a = D.getProperty(r, "movesupsub"), o = D.isType(r, "msubsup") ? r.sup : r.over;
		if (D.isType(r, "msubsup") && !D.isType(r, "msup") && D.getChildAt(r, r.sup) || D.isType(r, "munderover") && !D.isType(r, "mover") && D.getChildAt(r, r.over) && !D.getProperty(r, "subsupOK")) throw new M("DoubleExponent", "Double exponent: use braces to clarify");
		(!D.isType(r, "msubsup") || D.isType(r, "msup")) && (a ? ((!D.isType(r, "munderover") || D.isType(r, "mover") || D.getChildAt(r, r.over)) && (r = e.create("node", "munderover", [r], { movesupsub: !0 })), o = r.over) : (r = e.create("node", "msubsup", [r]), o = r.sup)), e.Push(e.itemFactory.create("subsup", r).setProperties({
			position: o,
			primes: n,
			movesupsub: a
		}));
	},
	Subscript(e, t) {
		e.GetNext().match(/\d/) && (e.string = e.string.substring(0, e.i + 1) + " " + e.string.substring(e.i + 1));
		let n, r, i = e.stack.Top();
		i.isKind("prime") ? ([r, n] = i.Peek(2), e.stack.Pop()) : (r = e.stack.Prev(), r ||= e.create("token", "mi", {}, ""));
		let a = D.getProperty(r, "movesupsub"), o = D.isType(r, "msubsup") ? r.sub : r.under;
		if (D.isType(r, "msubsup") && !D.isType(r, "msup") && D.getChildAt(r, r.sub) || D.isType(r, "munderover") && !D.isType(r, "mover") && D.getChildAt(r, r.under) && !D.getProperty(r, "subsupOK")) throw new M("DoubleSubscripts", "Double subscripts: use braces to clarify");
		(!D.isType(r, "msubsup") || D.isType(r, "msup")) && (a ? ((!D.isType(r, "munderover") || D.isType(r, "mover") || D.getChildAt(r, r.under)) && (r = e.create("node", "munderover", [r], { movesupsub: !0 })), o = r.under) : (r = e.create("node", "msubsup", [r]), o = r.sub)), e.Push(e.itemFactory.create("subsup", r).setProperties({
			position: o,
			primes: n,
			movesupsub: a
		}));
	},
	Prime(e, t) {
		let n = e.stack.Prev();
		if (n ||= e.create("token", "mi"), D.isType(n, "msubsup") && !D.isType(n, "msup") && D.getChildAt(n, n.sup) || D.isType(n, "munderover") && !D.isType(n, "mover") && D.getChildAt(n, n.over) && !D.getProperty(n, "subsupOK")) throw new M("DoubleExponentPrime", "Prime causes double exponent: use braces to clarify");
		let r = "";
		e.i--;
		do
			r += At.prime, e.i++, t = e.GetNext();
		while (t === "'" || t === At.rsquo);
		r = [
			"",
			"′",
			"″",
			"‴",
			"⁗"
		][r.length] || r;
		let i = e.create("token", "mo", { variantForm: !0 }, r);
		e.Push(e.itemFactory.create("prime", n, i));
	},
	Comment(e, t) {
		for (; e.i < e.string.length && e.string.charAt(e.i) !== "\n";) e.i++;
	},
	Hash(e, t) {
		throw new M("CantUseHash1", "You can't use 'macro parameter character #' in math mode");
	},
	MathFont(e, t, n, r = "") {
		let i = new P(e.GetArgument(t), Object.assign(Object.assign({ multiLetterIdentifiers: e.options.identifierPattern }, e.stack.env), {
			font: n,
			italicFont: r,
			noAutoOP: !0
		}), e.configuration).mml();
		e.Push(e.create("node", "TeXAtom", [i]));
	},
	SetFont(e, t, n) {
		e.stack.env.font = n, e.Push(e.itemFactory.create("null"));
	},
	SetStyle(e, t, n, r, i) {
		e.stack.env.style = n, e.stack.env.level = i, e.Push(e.itemFactory.create("style").setProperty("styles", {
			displaystyle: r,
			scriptlevel: i
		}));
	},
	SetSize(e, t, n) {
		e.stack.env.size = n, e.Push(e.itemFactory.create("style").setProperty("styles", { mathsize: R(n) }));
	},
	Spacer(e, t, n) {
		let r = e.create("node", "mspace", [], { width: R(n) }), i = e.create("node", "mstyle", [r], { scriptlevel: 0 });
		e.Push(i);
	},
	DiscretionaryTimes(e, t) {
		e.Push(e.create("token", "mo", { linebreakmultchar: "×" }, "⁢"));
	},
	AllowBreak(e, t) {
		e.Push(e.create("token", "mspace"));
	},
	Break(e, t) {
		e.Push(e.create("token", "mspace", { linebreak: O.LineBreak.NEWLINE }));
	},
	Linebreak(e, t, n) {
		let r = !0, i = e.stack.Prev(!0);
		i && i.isKind("mo") && D.getMoAttribute(i, "linebreakstyle") !== O.LineBreakStyle.BEFORE && (i.attributes.set("linebreak", n), r = !1), e.Push(e.itemFactory.create("break", n, r));
	},
	LeftRight(e, t) {
		let n = t.substring(1);
		e.Push(e.itemFactory.create(n, e.GetDelimiter(t), e.stack.env.color));
	},
	NamedFn(e, t, n) {
		n ||= t.substring(1);
		let r = e.create("token", "mi", { texClass: b.OP }, n);
		e.Push(e.itemFactory.create("fn", r));
	},
	NamedOp(e, t, n) {
		n ||= t.substring(1), n = n.replace(/&thinsp;/, " ");
		let r = e.create("token", "mo", {
			movablelimits: !0,
			movesupsub: !0,
			form: O.Form.PREFIX,
			texClass: b.OP
		}, n);
		e.Push(r);
	},
	Limits(e, t, n) {
		let r = e.stack.Prev(!0);
		if (!r || D.getTexClass(D.getCoreMO(r)) !== b.OP && D.getProperty(r, "movesupsub") == null) throw new M("MisplacedLimits", "%1 is allowed only on operators", e.currentCS);
		let i = e.stack.Top(), a;
		D.isType(r, "munderover") && !n ? (a = e.create("node", "msubsup"), D.copyChildren(r, a), r = i.First = a) : D.isType(r, "msubsup") && n && (a = e.create("node", "munderover"), D.copyChildren(r, a), r = i.First = a), D.setProperty(r, "movesupsub", !!n), D.setProperties(D.getCoreMO(r), { movablelimits: !1 }), ((D.isType(r, "mo") ? D.getMoAttribute(r, "movableLimits") : D.getAttribute(r, "movablelimits")) || D.getProperty(r, "movablelimits")) && D.setProperties(r, { movablelimits: !1 });
	},
	Over(e, t, n, r) {
		let i = e.itemFactory.create("over").setProperty("name", e.currentCS);
		n || r ? (i.setProperty("ldelim", n), i.setProperty("rdelim", r)) : t.match(/withdelims$/) && (i.setProperty("ldelim", e.GetDelimiter(t)), i.setProperty("rdelim", e.GetDelimiter(t))), t.match(/^\\above/) ? i.setProperty("thickness", e.GetDimen(t)) : (t.match(/^\\atop/) || n || r) && i.setProperty("thickness", 0), e.Push(i);
	},
	Frac(e, t) {
		let n = e.ParseArg(t), r = e.ParseArg(t), i = e.create("node", "mfrac", [n, r]);
		e.Push(i);
	},
	Sqrt(e, t) {
		let n = e.GetBrackets(t), r = e.GetArgument(t);
		r === "\\frac" && (r += "{" + e.GetArgument(r) + "}{" + e.GetArgument(r) + "}");
		let i = new P(r, e.stack.env, e.configuration).mml();
		i = n ? e.create("node", "mroot", [i, ur(e, n)]) : e.create("node", "msqrt", [i]), e.Push(i);
	},
	Root(e, t) {
		let n = e.GetUpTo(t, "\\of"), r = e.ParseArg(t), i = e.create("node", "mroot", [r, ur(e, n)]);
		e.Push(i);
	},
	MoveRoot(e, t, n) {
		if (!e.stack.env.inRoot) throw new M("MisplacedMoveRoot", "%1 can appear only within a root", e.currentCS);
		if (e.stack.global[n]) throw new M("MultipleMoveRoot", "Multiple use of %1", e.currentCS);
		let r = e.GetArgument(t);
		if (!r.match(/-?[0-9]+/)) throw new M("IntegerArg", "The argument to %1 must be an integer", e.currentCS);
		r = parseInt(r, 10) / 15 + "em", r.substring(0, 1) !== "-" && (r = "+" + r), e.stack.global[n] = r;
	},
	Accent(e, t, n, r) {
		let i = e.ParseArg(t), a = Object.assign(Object.assign({}, F.getFontDef(e)), {
			accent: !0,
			mathaccent: r === void 0 || r
		}), o = D.createEntity(n), s = e.create("token", "mo", a, o);
		D.setAttribute(s, "stretchy", !!r);
		let c = D.isEmbellished(i) ? D.getCoreMO(i) : i;
		(D.isType(c, "mo") || D.getProperty(c, "movablelimits")) && D.setProperties(c, { movablelimits: !1 });
		let l = e.create("node", "munderover");
		D.setChild(l, 0, i), D.setChild(l, 1, null), D.setChild(l, 2, s);
		let u = e.create("node", "TeXAtom", [l]);
		e.Push(u);
	},
	UnderOver(e, t, n, r) {
		let i = D.createEntity(n), a = e.create("token", "mo", {
			stretchy: !0,
			accent: !0
		}, i);
		i.match(E.mathaccentsWithWidth) && a.setProperty("mathaccent", !1);
		let o = t.charAt(1) === "o" ? "over" : "under", s = e.ParseArg(t);
		e.Push(F.underOver(e, s, a, o, r));
	},
	Overset(e, t) {
		let n = e.ParseArg(t), r = e.ParseArg(t), i = n.coreMO(), a = i.isKind("mo") && D.getMoAttribute(i, "accent") === !0;
		F.checkMovableLimits(r);
		let o = e.create("node", "mover", [r, n], { accent: a });
		e.Push(o);
	},
	Underset(e, t) {
		let n = e.ParseArg(t), r = e.ParseArg(t), i = n.coreMO(), a = i.isKind("mo") && D.getMoAttribute(i, "accent") === !0;
		F.checkMovableLimits(r);
		let o = e.create("node", "munder", [r, n], { accentunder: a });
		e.Push(o);
	},
	Overunderset(e, t) {
		let n = e.ParseArg(t), r = e.ParseArg(t), i = e.ParseArg(t), a = n.coreMO(), o = r.coreMO(), s = a.isKind("mo") && D.getMoAttribute(a, "accent") === !0, c = o.isKind("mo") && D.getMoAttribute(o, "accent") === !0;
		F.checkMovableLimits(i);
		let l = e.create("node", "munderover", [
			i,
			r,
			n
		], {
			accent: s,
			accentunder: c
		});
		e.Push(l);
	},
	TeXAtom(e, t, n) {
		let r = { texClass: n }, i, a;
		if (n === b.OP) {
			r.movesupsub = r.movablelimits = !0;
			let n = e.GetArgument(t), o = n.match(/^\s*\\rm\s+([a-zA-Z0-9 ]+)$/);
			if (o) r.mathvariant = O.Variant.NORMAL, a = e.create("token", "mi", r, o[1]);
			else {
				let t = new P(n, e.stack.env, e.configuration).mml();
				a = e.create("node", "TeXAtom", [t], r);
			}
			i = e.itemFactory.create("fn", a);
		} else i = e.create("node", "TeXAtom", [e.ParseArg(t)], r);
		e.Push(i);
	},
	VBox(e, t, n) {
		let r = new P(e.GetArgument(t), e.stack.env, e.configuration), i = {
			"data-vertical-align": n,
			texClass: b.ORD
		};
		r.stack.env.hsize && (i.width = r.stack.env.hsize, i["data-overflow"] = "linebreak");
		let a = e.create("node", "mpadded", [r.mml()], i);
		a.setProperty("vbox", n), e.Push(a);
	},
	Hsize(e, t) {
		e.GetNext() === "=" && e.i++, e.stack.env.hsize = e.GetDimen(t), e.Push(e.itemFactory.create("null"));
	},
	ParBox(e, t) {
		let n = e.GetBrackets(t, "c"), r = e.GetDimen(t), i = F.internalMath(e, e.GetArgument(t)), a = lr(n, 1), o = e.create("node", "mpadded", i, {
			width: r,
			"data-overflow": "linebreak",
			"data-vertical-align": a
		});
		o.setProperty("vbox", a), e.Push(o);
	},
	BreakAlign(e, t) {
		let n = e.stack.Top();
		if (!(n instanceof Zn)) throw new M("BreakNotInArray", "%1 must be used in an alignment environment", e.currentCS);
		switch (e.GetArgument(t).trim()) {
			case "c":
				if (n.First) throw new M("BreakFirstInEntry", "%1 must be at the beginning of an alignment entry", e.currentCS + "{c}");
				n.breakAlign.cell = lr(e.GetArgument(t), 1);
				break;
			case "r":
				if (n.row.length || n.First) throw new M("BreakFirstInRow", "%1 must be at the beginning of an alignment row", e.currentCS + "{r}");
				n.breakAlign.row = lr(e.GetArgument(t));
				break;
			case "t":
				if (n.table.length || n.row.length || n.First) throw new M("BreakFirstInTable", "%1 must be at the beginning of an alignment", e.currentCS + "{t}");
				n.breakAlign.table = lr(e.GetArgument(t));
				break;
			default: throw new M("BreakType", "First argument to %1 must be one of c, r, or t", e.currentCS);
		}
	},
	MmlToken(e, t) {
		let n = e.GetArgument(t), r = e.GetBrackets(t, "").replace(/^\s+/, ""), i = e.GetArgument(t), a = {}, o = [], s;
		try {
			s = e.create("node", n);
		} catch {
			s = null;
		}
		if (!s || !s.isToken) throw new M("NotMathMLToken", "%1 is not a token element", n);
		for (; r !== "";) {
			let t = r.match(/^([a-z]+)\s*=\s*('[^'\n]*'|"[^"\n]*"|[^ ,\n]*)[\s\n]*,?[\s\n]*/i);
			if (!t) throw new M("InvalidMathMLAttr", "Invalid MathML attribute: %1", r.split(/[\s\n=]/)[0]);
			if (!s.attributes.hasDefault(t[1]) && !cr[t[1]]) throw new M("UnknownAttrForElement", "%1 is not a recognized attribute for %2", t[1], n);
			let i = F.mmlFilterAttribute(e, t[1], t[2].replace(/^(['"])(.*)\1$/, "$2"));
			i && (i.toLowerCase() === "true" ? i = !0 : i.toLowerCase() === "false" && (i = !1), a[t[1]] = i, o.push(t[1])), r = r.substring(t[0].length);
		}
		o.length && s.setProperty("keep-attrs", o.join(" "));
		let c = e.create("text", Ke(i));
		s.appendChild(c), D.setProperties(s, a), e.Push(s);
	},
	Strut(e, t) {
		let n = e.create("node", "mrow"), r = e.create("node", "mpadded", [n], {
			height: "8.6pt",
			depth: "3pt",
			width: 0
		});
		e.Push(r);
	},
	Phantom(e, t, n, r) {
		let i = e.create("node", "mphantom", [e.ParseArg(t)]);
		(n || r) && (i = e.create("node", "mpadded", [i]), r && (D.setAttribute(i, "height", 0), D.setAttribute(i, "depth", 0)), n && D.setAttribute(i, "width", 0));
		let a = e.create("node", "TeXAtom", [i]);
		e.Push(a);
	},
	Smash(e, t) {
		let n = j.trimSpaces(e.GetBrackets(t, "")), r = e.create("node", "mpadded", [e.ParseArg(t)]);
		switch (n) {
			case "b":
				D.setAttribute(r, "depth", 0);
				break;
			case "t":
				D.setAttribute(r, "height", 0);
				break;
			default: D.setAttribute(r, "height", 0), D.setAttribute(r, "depth", 0);
		}
		let i = e.create("node", "TeXAtom", [r]);
		e.Push(i);
	},
	Lap(e, t) {
		let n = e.create("node", "mpadded", [e.ParseArg(t)], { width: 0 });
		t === "\\llap" && D.setAttribute(n, "lspace", "-1width");
		let r = e.create("node", "TeXAtom", [n]);
		e.Push(r);
	},
	RaiseLower(e, t) {
		let n = e.GetDimen(t), r = e.itemFactory.create("position").setProperties({
			name: e.currentCS,
			move: "vertical"
		});
		n.charAt(0) === "-" && (n = n.slice(1), t = t.substring(1) === "raise" ? "\\lower" : "\\raise"), t === "\\lower" ? (r.setProperty("dh", "-" + n), r.setProperty("dd", "+" + n)) : (r.setProperty("dh", "+" + n), r.setProperty("dd", "-" + n)), e.Push(r);
	},
	MoveLeftRight(e, t) {
		let n = e.GetDimen(t), r = n.charAt(0) === "-" ? n.slice(1) : "-" + n;
		if (t === "\\moveleft") {
			let e = n;
			n = r, r = e;
		}
		e.Push(e.itemFactory.create("position").setProperties({
			name: e.currentCS,
			move: "horizontal",
			left: e.create("node", "mspace", [], { width: n }),
			right: e.create("node", "mspace", [], { width: r })
		}));
	},
	Hskip(e, t, n = !1) {
		let r = e.create("node", "mspace", [], { width: e.GetDimen(t) });
		n && D.setAttribute(r, "linebreak", "nobreak"), e.Push(r);
	},
	Nonscript(e, t) {
		e.Push(e.itemFactory.create("nonscript"));
	},
	Rule(e, t, n) {
		let r = {
			width: e.GetDimen(t),
			height: e.GetDimen(t),
			depth: e.GetDimen(t)
		};
		n !== "blank" && (r.mathbackground = e.stack.env.color || "black");
		let i = e.create("node", "mspace", [], r);
		e.Push(i);
	},
	rule(e, t) {
		let n = e.GetBrackets(t), r = e.GetDimen(t), i = e.GetDimen(t), a = e.create("node", "mspace", [], {
			width: r,
			height: i,
			mathbackground: e.stack.env.color || "black"
		});
		n && (a = e.create("node", "mpadded", [a], { voffset: n }), n.match(/^-/) ? (D.setAttribute(a, "height", n), D.setAttribute(a, "depth", "+" + n.substring(1))) : D.setAttribute(a, "height", "+" + n)), e.Push(a);
	},
	MakeBig(e, t, n, r) {
		r *= sr;
		let i = String(r).replace(/(\.\d\d\d).+/, "$1") + "em", a = e.GetDelimiter(t, !0), o = e.create("token", "mo", {
			minsize: i,
			maxsize: i,
			fence: !0,
			stretchy: !0,
			symmetric: !0
		}, a), s = e.create("node", "TeXAtom", [o], { texClass: n });
		e.Push(s);
	},
	BuildRel(e, t) {
		let n = e.ParseUpTo(t, "\\over"), r = e.ParseArg(t), i = e.create("node", "munderover");
		D.setChild(i, 0, r), D.setChild(i, 1, null), D.setChild(i, 2, n);
		let a = e.create("node", "TeXAtom", [i], { texClass: b.REL });
		e.Push(a);
	},
	HBox(e, t, n, r) {
		e.PushAll(F.internalMath(e, e.GetArgument(t), n, r));
	},
	FBox(e, t) {
		let n = F.internalMath(e, e.GetArgument(t)), r = e.create("node", "menclose", n, { notation: "box" });
		e.Push(r);
	},
	FrameBox(e, t) {
		let n = e.GetBrackets(t), r = e.GetBrackets(t) || "c", i = F.internalMath(e, e.GetArgument(t));
		n && (i = [e.create("node", "mpadded", i, {
			width: n,
			"data-align": Ie(r, {
				l: "left",
				r: "right"
			}, "center")
		})]);
		let a = e.create("node", "TeXAtom", [e.create("node", "menclose", i, { notation: "box" })], { texClass: b.ORD });
		e.Push(a);
	},
	MakeBox(e, t) {
		let n = e.GetBrackets(t), r = e.GetBrackets(t, "c"), i = e.create("node", "mpadded", F.internalMath(e, e.GetArgument(t)));
		n && D.setAttribute(i, "width", n);
		let a = Ie(r.toLowerCase(), {
			c: "center",
			r: "right"
		}, "");
		a && D.setAttribute(i, "data-align", a), r.toLowerCase() !== r && D.setAttribute(i, "data-overflow", "linebreak"), e.Push(i);
	},
	Not(e, t) {
		e.Push(e.itemFactory.create("not"));
	},
	Dots(e, t) {
		let n = D.createEntity("2026"), r = D.createEntity("22EF"), i = e.create("token", "mo", { stretchy: !1 }, n), a = e.create("token", "mo", { stretchy: !1 }, r);
		e.Push(e.itemFactory.create("dots").setProperties({
			ldots: i,
			cdots: a
		}));
	},
	Matrix(e, t, n, r, i, a, o, s, c, l) {
		let u = e.GetNext();
		if (u === "") throw new M("MissingArgFor", "Missing argument for %1", e.currentCS);
		u === "{" ? e.i++ : (e.string = u + "}" + e.string.slice(e.i + 1), e.i = 0);
		let d = e.itemFactory.create("array").setProperty("requireClose", !0);
		(n || !i) && d.setProperty("arrayPadding", ".2em .125em"), d.arraydef = {
			rowspacing: o || "4pt",
			columnspacing: a || "1em"
		}, c && d.setProperty("isCases", !0), l && (d.setProperty("isNumbered", !0), d.arraydef.side = l), (n || r) && (d.setProperty("open", n), d.setProperty("close", r)), s === "D" && (d.arraydef.displaystyle = !0), i != null && (d.arraydef.columnalign = i), e.Push(d);
	},
	Entry(e, t) {
		e.Push(e.itemFactory.create("cell").setProperties({
			isEntry: !0,
			name: t
		}));
		let n = e.stack.Top(), r = n.getProperty("casesEnv");
		if (!n.getProperty("isCases") && !r) return;
		let i = e.string, a = 0, o = -1, s = e.i, c = i.length, l = r ? RegExp(`^\\\\end\\s*\\{${r.replace(/\*/, "\\*")}\\}`) : null;
		for (; s < c;) {
			let t = i.charAt(s);
			if (t === "{") a++, s++;
			else if (t === "}") a === 0 ? c = 0 : (a--, a === 0 && o < 0 && (o = s - e.i), s++);
			else if (t === "&" && a === 0) throw new M("ExtraAlignTab", "Extra alignment tab in \\cases text");
			else if (t === "\\") {
				let e = i.substring(s);
				e.match(/^((\\cr)[^a-zA-Z]|\\\\)/) || l && e.match(l) ? c = 0 : s += 2;
			} else s++;
		}
		let u = i.substring(e.i, s);
		if (!u.match(/^\s*\\text[^a-zA-Z]/) || o !== u.replace(/\s+$/, "").length - 1) {
			let t = F.internalMath(e, j.trimSpaces(u), 0);
			e.PushAll(t), e.i = s;
		}
	},
	Cr(e, t) {
		e.Push(e.itemFactory.create("cell").setProperties({
			isCR: !0,
			name: t
		}));
	},
	CrLaTeX(e, t, n = !1) {
		let r;
		if (!n && (e.string.charAt(e.i) === "*" && e.i++, e.string.charAt(e.i) === "[")) {
			let n = e.GetBrackets(t, ""), [i, a] = j.matchDimen(n);
			if (n && !i) throw new M("BracketMustBeDimension", "Bracket argument to %1 must be a dimension", e.currentCS);
			r = i + a;
		}
		e.Push(e.itemFactory.create("cell").setProperties({
			isCR: !0,
			name: t,
			linebreak: !0
		}));
		let i = e.stack.Top(), a;
		i instanceof Zn ? r && i.addRowSpacing(r) : (a = e.create("node", "mspace", [], { linebreak: O.LineBreak.NEWLINE }), r && D.setAttribute(a, "data-lineleading", r), e.Push(a));
	},
	HLine(e, t, n) {
		n ??= "solid";
		let r = e.stack.Top();
		if (!(r instanceof Zn) || r.Size()) throw new M("Misplaced", "Misplaced %1", e.currentCS);
		if (!r.table.length) r.frame.push(["top", n]);
		else {
			let e = r.arraydef.rowlines ? r.arraydef.rowlines.split(/ /) : [];
			for (; e.length < r.table.length;) e.push("none");
			e[r.table.length - 1] = n, r.arraydef.rowlines = e.join(" ");
		}
	},
	HFill(e, t) {
		let n = e.stack.Top();
		if (n instanceof Zn) n.hfill.push(n.Size());
		else throw new M("UnsupportedHFill", "Unsupported use of %1", e.currentCS);
	},
	NewColumnType(e, t) {
		let n = e.GetArgument(t), r = e.GetBrackets(t, "0"), i = e.GetArgument(t);
		if (n.length !== 1) throw new M("BadColumnName", "Column specifier must be exactly one character: %1", n);
		if (!r.match(/^\d+$/)) throw new M("PositiveIntegerArg", "Argument to %1 must be a positive integer", r);
		let a = e.configuration.columnParser;
		a.columnHandler[n] = (e) => a.macroColumn(e, i, parseInt(r)), e.Push(e.itemFactory.create("null"));
	},
	BeginEnd(e, t) {
		let n = e.GetArgument(t);
		if (n.match(/\\/)) throw new M("InvalidEnv", "Invalid environment name '%1'", n);
		let r = e.configuration.handlers.get(A.ENVIRONMENT).lookup(n);
		if (r && t === "\\end") {
			if (!r.args[0]) {
				let t = e.itemFactory.create("end").setProperty("name", n);
				e.Push(t);
				return;
			}
			e.stack.env.closing = n;
		}
		F.checkMaxMacros(e, !1), e.parse(A.ENVIRONMENT, [e, n]);
	},
	Array(e, t, n, r, i, a, o, s, c) {
		i ||= e.GetArgument("\\begin{" + t.getName() + "}");
		let l = e.itemFactory.create("array");
		return t.getName() === "array" && l.setProperty("arrayPadding", ".5em .125em"), l.parser = e, l.arraydef = {
			columnspacing: a || "1em",
			rowspacing: o || "4pt"
		}, e.configuration.columnParser.process(e, i, l), n && l.setProperty("open", e.convertDelimiter(n)), r && l.setProperty("close", e.convertDelimiter(r)), (s || "").charAt(1) === "'" && (l.arraydef["data-cramped"] = !0, s = s.charAt(0)), s === "D" ? l.arraydef.displaystyle = !0 : s && (l.arraydef.displaystyle = !1), l.arraydef.scriptlevel = +(s === "S"), c && (l.arraydef.useHeight = !1), e.Push(t), l.StartEntry(), l;
	},
	AlignedArray(e, t, n = "") {
		let r = e.GetBrackets("\\begin{" + t.getName() + "}"), i = z.Array(e, t, null, null, null, null, null, n);
		return F.setArrayAlign(i, r);
	},
	IndentAlign(e, t) {
		let n = `\\begin{${t.getName()}}`, r = e.GetBrackets(n, ""), i = e.GetBrackets(n, ""), a = e.GetBrackets(n, "");
		if (r && !j.matchDimen(r)[0] || i && !j.matchDimen(i)[0] || a && !j.matchDimen(a)[0]) throw new M("BracketMustBeDimension", "Bracket argument to %1 must be a dimension", n);
		let o = e.GetArgument(n);
		if (o && !o.match(/^([lcr]{1,3})?$/)) throw new M("BadAlignment", "Alignment must be one to three copies of l, c, or r");
		let s = [...o].map((e) => ({
			l: "left",
			c: "center",
			r: "right"
		})[e]);
		s.length === 1 && s.push(s[0]);
		let c = {};
		for (let [e, t] of [
			["indentshiftfirst", r],
			["indentshift", i || r],
			["indentshiftlast", a],
			["indentalignfirst", s[0]],
			["indentalign", s[1]],
			["indentalignlast", s[2]]
		]) t && (c[e] = t);
		e.Push(e.itemFactory.create("mstyle", c, t.getName()));
	},
	Equation(e, t, n, r = !0) {
		return e.configuration.mathItem.display = r, e.stack.env.display = r, F.checkEqnEnv(e), e.Push(t), e.itemFactory.create("equation", n).setProperty("name", t.getName());
	},
	EqnArray(e, t, n, r, i, a, o) {
		let s = t.getName(), c = s === "gather" || s === "gather*";
		r && F.checkEqnEnv(e, !c), e.Push(t), i = i.replace(/[^clr]/g, "").split("").join(" "), i = i.replace(/l/g, "left").replace(/r/g, "right").replace(/c/g, "center"), a = lr(a);
		let l = e.itemFactory.create("eqnarray", s, n, r, e.stack.global);
		return l.arraydef = {
			displaystyle: !0,
			columnalign: i,
			columnspacing: o || "1em",
			rowspacing: "3pt",
			"data-break-align": a,
			side: e.options.tagSide,
			minlabelspacing: e.options.tagIndent
		}, c && l.setProperty("nestable", !0), l;
	},
	HandleNoTag(e, t) {
		e.tags.notag();
	},
	HandleLabel(e, t) {
		let n = e.GetArgument(t);
		if (n !== "") {
			if (e.tags.label) throw new M("MultipleCommand", "Multiple %1", e.currentCS);
			if (e.tags.label = n, !e.tags.refUpdate) {
				if ((e.tags.allLabels[n] || e.tags.labels[n]) && !e.options.ignoreDuplicateLabels) throw new M("MultipleLabel", "Label '%1' multiply defined", n);
				e.tags.labels[n] = new Ht();
			}
		}
	},
	HandleRef(e, t, n) {
		let r = e.GetArgument(t), i = e.tags.allLabels[r] || e.tags.labels[r];
		i ||= (e.tags.refUpdate || (e.tags.redo = !0), new Ht());
		let a = i.tag;
		n && (a = e.tags.formatRef(a));
		let o = e.create("node", "mrow", F.internalMath(e, Array.isArray(a) ? a.join("") : a), {
			href: e.tags.formatUrl(i.id, e.options.baseURL),
			class: "MathJax_ref"
		});
		e.Push(o);
	},
	Macro(e, t, n, r, i) {
		if (r) {
			let a = [];
			if (i != null) {
				let n = e.GetBrackets(t);
				a.push(n ?? i);
			}
			for (let n = a.length; n < r; n++) a.push(e.GetArgument(t));
			n = F.substituteArgs(e, a, n);
		}
		e.string = F.addArgs(e, n, e.string.slice(e.i)), e.i = 0, F.checkMaxMacros(e);
	},
	MathChoice(e, t) {
		let n = e.ParseArg(t), r = e.ParseArg(t), i = e.ParseArg(t), a = e.ParseArg(t);
		e.Push(e.create("node", "MathChoice", [
			n,
			r,
			i,
			a
		]));
	}
}, dr = O.Variant, B = {
	variable(e, t) {
		let n = F.getFontDef(e), r = e.stack.env;
		if (r.multiLetterIdentifiers && r.font !== "" && (t = e.string.substring(e.i - 1).match(r.multiLetterIdentifiers)?.[0] || t, e.i += t.length - 1, n.mathvariant === dr.NORMAL && r.noAutoOP && t.length > 1 && (n.autoOP = !1)), !n.mathvariant && F.isLatinOrGreekChar(t)) {
			let r = e.configuration.mathStyle(t);
			r && (n.mathvariant = r);
		}
		let i = e.create("token", "mi", n, t);
		e.Push(i);
	},
	digit(e, t) {
		let n = e.configuration.options.numberPattern, r = e.string.slice(e.i - 1).match(n);
		if (!r) return !1;
		let i = F.getFontDef(e), a = e.create("token", "mn", i, r[0].replace(/[{}]/g, ""));
		return e.i += r[0].length - 1, e.Push(a), !0;
	},
	controlSequence(e, t) {
		let n = e.GetCS();
		e.parse(A.MACRO, [e, n]);
	},
	lcGreek(e, t) {
		let n = { mathvariant: e.configuration.mathStyle(t.char) || dr.ITALIC }, r = e.create("token", "mi", n, t.char);
		e.Push(r);
	},
	ucGreek(e, t) {
		let n = { mathvariant: e.stack.env.font || e.configuration.mathStyle(t.char, !0) || dr.NORMAL }, r = e.create("token", "mi", n, t.char);
		e.Push(r);
	},
	mathchar0mi(e, t) {
		let n = t.attributes || { mathvariant: dr.ITALIC }, r = e.create("token", "mi", n, t.char);
		e.Push(r);
	},
	mathchar0mo(e, t) {
		let n = t.attributes || {};
		n.stretchy = !1;
		let r = e.create("token", "mo", n, t.char);
		D.setProperty(r, "fixStretchy", !0), e.configuration.addNode("fixStretchy", r), e.Push(r);
	},
	mathchar7(e, t) {
		let n = t.attributes || { mathvariant: dr.NORMAL };
		e.stack.env.font && (n.mathvariant = e.stack.env.font);
		let r = e.create("token", "mi", n, t.char);
		e.Push(r);
	},
	delimiter(e, t) {
		let n = t.attributes || {};
		n = Object.assign({
			fence: !1,
			stretchy: !1
		}, n);
		let r = e.create("token", "mo", n, t.char);
		t.char === "|" && r.setProperty("keep-attrs", "stretchy"), e.Push(r);
	},
	environment(e, t, n, r) {
		let i = e.itemFactory.create("begin").setProperty("name", t);
		e.Push(n(e, i, ...r.slice(1)));
	}
}, fr = R(L.thickmathspace), V = O.Variant;
new Qt("letter", B.variable, /[a-z]/i), new Qt("digit", B.digit, /[0-9.,]/), new Qt("command", B.controlSequence, /^\\/), new nn("special", {
	"{": z.Open,
	"}": z.Close,
	"~": z.Tilde,
	"^": z.Superscript,
	_: z.Subscript,
	"|": z.Bar,
	" ": z.Space,
	"	": z.Space,
	"\r": z.Space,
	"\n": z.Space,
	"'": z.Prime,
	"%": z.Comment,
	"&": z.Entry,
	"#": z.Hash,
	"\xA0": z.Space,
	"’": z.Prime
}), new en("lcGreek", B.lcGreek, {
	alpha: "α",
	beta: "β",
	gamma: "γ",
	delta: "δ",
	epsilon: "ϵ",
	zeta: "ζ",
	eta: "η",
	theta: "θ",
	iota: "ι",
	kappa: "κ",
	lambda: "λ",
	mu: "μ",
	nu: "ν",
	xi: "ξ",
	omicron: "ο",
	pi: "π",
	rho: "ρ",
	sigma: "σ",
	tau: "τ",
	upsilon: "υ",
	phi: "ϕ",
	chi: "χ",
	psi: "ψ",
	omega: "ω",
	varepsilon: "ε",
	vartheta: "ϑ",
	varpi: "ϖ",
	varrho: "ϱ",
	varsigma: "ς",
	varphi: "φ"
}), new en("ucGreek", B.ucGreek, {
	Gamma: "Γ",
	Delta: "Δ",
	Theta: "Θ",
	Lambda: "Λ",
	Xi: "Ξ",
	Pi: "Π",
	Sigma: "Σ",
	Upsilon: "Υ",
	Phi: "Φ",
	Psi: "Ψ",
	Omega: "Ω"
}), new en("mathchar0mi", B.mathchar0mi, {
	AA: "Å",
	S: ["§", { mathvariant: V.NORMAL }],
	aleph: ["ℵ", { mathvariant: V.NORMAL }],
	hbar: ["ℏ", { variantForm: !0 }],
	imath: "ı",
	jmath: "ȷ",
	ell: "ℓ",
	wp: ["℘", { mathvariant: V.NORMAL }],
	Re: ["ℜ", { mathvariant: V.NORMAL }],
	Im: ["ℑ", { mathvariant: V.NORMAL }],
	partial: ["∂", { mathvariant: V.ITALIC }],
	infty: ["∞", { mathvariant: V.NORMAL }],
	prime: ["′", { variantForm: !0 }],
	emptyset: ["∅", { mathvariant: V.NORMAL }],
	nabla: ["∇", { mathvariant: V.NORMAL }],
	top: ["⊤", { mathvariant: V.NORMAL }],
	bot: ["⊥", { mathvariant: V.NORMAL }],
	angle: ["∠", { mathvariant: V.NORMAL }],
	triangle: ["△", { mathvariant: V.NORMAL }],
	backslash: ["\\", { mathvariant: V.NORMAL }],
	forall: ["∀", { mathvariant: V.NORMAL }],
	exists: ["∃", { mathvariant: V.NORMAL }],
	neg: ["¬", { mathvariant: V.NORMAL }],
	lnot: ["¬", { mathvariant: V.NORMAL }],
	flat: ["♭", { mathvariant: V.NORMAL }],
	natural: ["♮", { mathvariant: V.NORMAL }],
	sharp: ["♯", { mathvariant: V.NORMAL }],
	clubsuit: ["♣", { mathvariant: V.NORMAL }],
	diamondsuit: ["♢", { mathvariant: V.NORMAL }],
	heartsuit: ["♡", { mathvariant: V.NORMAL }],
	spadesuit: ["♠", { mathvariant: V.NORMAL }]
}), new en("mathchar0mo", B.mathchar0mo, {
	surd: ["√", { symmetric: !0 }],
	coprod: ["∐", { movesupsub: !0 }],
	bigvee: ["⋁", { movesupsub: !0 }],
	bigwedge: ["⋀", { movesupsub: !0 }],
	biguplus: ["⨄", { movesupsub: !0 }],
	bigcap: ["⋂", { movesupsub: !0 }],
	bigcup: ["⋃", { movesupsub: !0 }],
	int: "∫",
	intop: ["∫", {
		movesupsub: !0,
		movablelimits: !0
	}],
	iint: "∬",
	iiint: "∭",
	prod: ["∏", { movesupsub: !0 }],
	sum: ["∑", { movesupsub: !0 }],
	bigotimes: ["⨂", { movesupsub: !0 }],
	bigoplus: ["⨁", { movesupsub: !0 }],
	bigodot: ["⨀", { movesupsub: !0 }],
	oint: "∮",
	ointop: ["∮", {
		movesupsub: !0,
		movablelimits: !0
	}],
	oiint: "∯",
	oiiint: "∰",
	bigsqcup: ["⨆", { movesupsub: !0 }],
	smallint: ["∫", { largeop: !1 }],
	triangleleft: "◃",
	triangleright: "▹",
	bigtriangleup: "△",
	bigtriangledown: "▽",
	wedge: "∧",
	land: "∧",
	vee: "∨",
	lor: "∨",
	cap: "∩",
	cup: "∪",
	ddagger: "‡",
	dagger: "†",
	sqcap: "⊓",
	sqcup: "⊔",
	uplus: "⊎",
	amalg: "⨿",
	diamond: "⋄",
	bullet: "∙",
	wr: "≀",
	div: "÷",
	odot: ["⊙", { largeop: !1 }],
	oslash: ["⊘", { largeop: !1 }],
	otimes: ["⊗", { largeop: !1 }],
	ominus: ["⊖", { largeop: !1 }],
	oplus: ["⊕", { largeop: !1 }],
	mp: "∓",
	pm: "±",
	circ: "∘",
	bigcirc: "◯",
	setminus: "∖",
	cdot: "⋅",
	ast: "∗",
	times: "×",
	star: "⋆",
	propto: "∝",
	sqsubseteq: "⊑",
	sqsupseteq: "⊒",
	parallel: "∥",
	mid: "∣",
	dashv: "⊣",
	vdash: "⊢",
	leq: "≤",
	le: "≤",
	geq: "≥",
	ge: "≥",
	lt: "<",
	gt: ">",
	succ: "≻",
	prec: "≺",
	approx: "≈",
	succeq: "⪰",
	preceq: "⪯",
	supset: "⊃",
	subset: "⊂",
	supseteq: "⊇",
	subseteq: "⊆",
	in: "∈",
	ni: "∋",
	notin: "∉",
	owns: "∋",
	gg: "≫",
	ll: "≪",
	sim: "∼",
	simeq: "≃",
	perp: "⟂",
	equiv: "≡",
	asymp: "≍",
	smile: "⌣",
	frown: "⌢",
	ne: "≠",
	neq: "≠",
	cong: "≅",
	doteq: "≐",
	bowtie: "⋈",
	models: "⊧",
	notChar: "⧸",
	Leftrightarrow: "⇔",
	Leftarrow: "⇐",
	Rightarrow: "⇒",
	leftrightarrow: "↔",
	leftarrow: "←",
	gets: "←",
	rightarrow: "→",
	to: ["→", { accent: !1 }],
	mapsto: "↦",
	leftharpoonup: "↼",
	leftharpoondown: "↽",
	rightharpoonup: "⇀",
	rightharpoondown: "⇁",
	nearrow: "↗",
	searrow: "↘",
	nwarrow: "↖",
	swarrow: "↙",
	rightleftharpoons: "⇌",
	hookrightarrow: "↪",
	hookleftarrow: "↩",
	longleftarrow: "⟵",
	Longleftarrow: "⟸",
	longrightarrow: "⟶",
	Longrightarrow: "⟹",
	Longleftrightarrow: "⟺",
	longleftrightarrow: "⟷",
	longmapsto: "⟼",
	ldots: "…",
	cdots: "⋯",
	vdots: "⋮",
	ddots: "⋱",
	iddots: "⋰",
	dotsc: "…",
	dotsb: "⋯",
	dotsm: "⋯",
	dotsi: "⋯",
	dotso: "…",
	ldotp: [".", { texClass: b.PUNCT }],
	cdotp: ["⋅", { texClass: b.PUNCT }],
	colon: [":", { texClass: b.PUNCT }]
}), new en("mathchar7", B.mathchar7, {
	_: "_",
	"#": "#",
	$: "$",
	"%": "%",
	"&": "&",
	And: "&"
}), new tn("delimiter", B.delimiter, {
	"(": "(",
	")": ")",
	"[": "[",
	"]": "]",
	"<": "⟨",
	">": "⟩",
	"\\lt": "⟨",
	"\\gt": "⟩",
	"/": "/",
	"|": ["|", { texClass: b.ORD }],
	".": "",
	"\\lmoustache": "⎰",
	"\\rmoustache": "⎱",
	"\\lgroup": "⟮",
	"\\rgroup": "⟯",
	"\\arrowvert": "⏐",
	"\\Arrowvert": "‖",
	"\\bracevert": "⎪",
	"\\Vert": ["‖", { texClass: b.ORD }],
	"\\|": ["‖", { texClass: b.ORD }],
	"\\vert": ["|", { texClass: b.ORD }],
	"\\uparrow": "↑",
	"\\downarrow": "↓",
	"\\updownarrow": "↕",
	"\\Uparrow": "⇑",
	"\\Downarrow": "⇓",
	"\\Updownarrow": "⇕",
	"\\backslash": "\\",
	"\\rangle": "⟩",
	"\\langle": "⟨",
	"\\rbrace": "}",
	"\\lbrace": "{",
	"\\}": "}",
	"\\{": "{",
	"\\rceil": "⌉",
	"\\lceil": "⌈",
	"\\rfloor": "⌋",
	"\\lfloor": "⌊",
	"\\lbrack": "[",
	"\\rbrack": "]"
}), new rn("macros", {
	displaystyle: [
		z.SetStyle,
		"D",
		!0,
		0
	],
	textstyle: [
		z.SetStyle,
		"T",
		!1,
		0
	],
	scriptstyle: [
		z.SetStyle,
		"S",
		!1,
		1
	],
	scriptscriptstyle: [
		z.SetStyle,
		"SS",
		!1,
		2
	],
	rm: [z.SetFont, V.NORMAL],
	mit: [z.SetFont, V.ITALIC],
	oldstyle: [z.SetFont, V.OLDSTYLE],
	cal: [z.SetFont, V.CALLIGRAPHIC],
	it: [z.SetFont, V.MATHITALIC],
	bf: [z.SetFont, V.BOLD],
	sf: [z.SetFont, V.SANSSERIF],
	tt: [z.SetFont, V.MONOSPACE],
	frak: [z.MathFont, V.FRAKTUR],
	Bbb: [z.MathFont, V.DOUBLESTRUCK],
	mathrm: [z.MathFont, V.NORMAL],
	mathup: [z.MathFont, V.NORMAL],
	mathnormal: [z.MathFont, ""],
	mathbf: [z.MathFont, V.BOLD],
	mathbfup: [z.MathFont, V.BOLD],
	mathit: [z.MathFont, V.MATHITALIC],
	mathbfit: [z.MathFont, V.BOLDITALIC],
	mathbb: [z.MathFont, V.DOUBLESTRUCK],
	mathfrak: [z.MathFont, V.FRAKTUR],
	mathbffrak: [z.MathFont, V.BOLDFRAKTUR],
	mathscr: [z.MathFont, V.SCRIPT],
	mathbfscr: [z.MathFont, V.BOLDSCRIPT],
	mathsf: [z.MathFont, V.SANSSERIF],
	mathsfup: [z.MathFont, V.SANSSERIF],
	mathbfsf: [z.MathFont, V.BOLDSANSSERIF],
	mathbfsfup: [z.MathFont, V.BOLDSANSSERIF],
	mathsfit: [z.MathFont, V.SANSSERIFITALIC],
	mathbfsfit: [z.MathFont, V.SANSSERIFBOLDITALIC],
	mathtt: [z.MathFont, V.MONOSPACE],
	mathcal: [z.MathFont, V.CALLIGRAPHIC],
	mathbfcal: [z.MathFont, V.BOLDCALLIGRAPHIC],
	symrm: [z.MathFont, V.NORMAL],
	symup: [z.MathFont, V.NORMAL],
	symnormal: [z.MathFont, ""],
	symbf: [
		z.MathFont,
		V.BOLD,
		V.BOLDITALIC
	],
	symbfup: [z.MathFont, V.BOLD],
	symit: [z.MathFont, V.ITALIC],
	symbfit: [z.MathFont, V.BOLDITALIC],
	symbb: [z.MathFont, V.DOUBLESTRUCK],
	symfrak: [z.MathFont, V.FRAKTUR],
	symbffrak: [z.MathFont, V.BOLDFRAKTUR],
	symscr: [z.MathFont, V.SCRIPT],
	symbfscr: [z.MathFont, V.BOLDSCRIPT],
	symsf: [
		z.MathFont,
		V.SANSSERIF,
		V.SANSSERIFITALIC
	],
	symsfup: [z.MathFont, V.SANSSERIF],
	symbfsf: [z.MathFont, V.BOLDSANSSERIF],
	symbfsfup: [z.MathFont, V.BOLDSANSSERIF],
	symsfit: [z.MathFont, V.SANSSERIFITALIC],
	symbfsfit: [z.MathFont, V.SANSSERIFBOLDITALIC],
	symtt: [z.MathFont, V.MONOSPACE],
	symcal: [z.MathFont, V.CALLIGRAPHIC],
	symbfcal: [z.MathFont, V.BOLDCALLIGRAPHIC],
	textrm: [
		z.HBox,
		null,
		V.NORMAL
	],
	textup: [
		z.HBox,
		null,
		V.NORMAL
	],
	textnormal: [z.HBox],
	textit: [
		z.HBox,
		null,
		V.ITALIC
	],
	textbf: [
		z.HBox,
		null,
		V.BOLD
	],
	textsf: [
		z.HBox,
		null,
		V.SANSSERIF
	],
	texttt: [
		z.HBox,
		null,
		V.MONOSPACE
	],
	Tiny: [z.SetSize, .5],
	tiny: [z.SetSize, .6],
	scriptsize: [z.SetSize, .7],
	SMALL: [z.SetSize, .7],
	Small: [z.SetSize, .8],
	footnotesize: [z.SetSize, .8],
	small: [z.SetSize, .9],
	normalsize: [z.SetSize, 1],
	large: [z.SetSize, 1.095],
	Large: [z.SetSize, 1.2],
	LARGE: [z.SetSize, 1.44],
	huge: [z.SetSize, 1.728],
	Huge: [z.SetSize, 2.074],
	HUGE: [z.SetSize, 2.49],
	arcsin: z.NamedFn,
	arccos: z.NamedFn,
	arctan: z.NamedFn,
	arg: z.NamedFn,
	cos: z.NamedFn,
	cosh: z.NamedFn,
	cot: z.NamedFn,
	coth: z.NamedFn,
	csc: z.NamedFn,
	deg: z.NamedFn,
	det: z.NamedOp,
	dim: z.NamedFn,
	exp: z.NamedFn,
	gcd: z.NamedOp,
	hom: z.NamedFn,
	inf: z.NamedOp,
	ker: z.NamedFn,
	lg: z.NamedFn,
	lim: z.NamedOp,
	liminf: [z.NamedOp, "lim&thinsp;inf"],
	limsup: [z.NamedOp, "lim&thinsp;sup"],
	ln: z.NamedFn,
	log: z.NamedFn,
	max: z.NamedOp,
	min: z.NamedOp,
	Pr: z.NamedOp,
	sec: z.NamedFn,
	sin: z.NamedFn,
	sinh: z.NamedFn,
	sup: z.NamedOp,
	tan: z.NamedFn,
	tanh: z.NamedFn,
	limits: [z.Limits, !0],
	nolimits: [z.Limits, !1],
	overline: [z.UnderOver, "2015"],
	underline: [z.UnderOver, "2015"],
	overbrace: [
		z.UnderOver,
		"23DE",
		!0
	],
	underbrace: [
		z.UnderOver,
		"23DF",
		!0
	],
	overparen: [z.UnderOver, "23DC"],
	underparen: [z.UnderOver, "23DD"],
	overrightarrow: [z.UnderOver, "2192"],
	underrightarrow: [z.UnderOver, "2192"],
	overleftarrow: [z.UnderOver, "2190"],
	underleftarrow: [z.UnderOver, "2190"],
	overleftrightarrow: [z.UnderOver, "2194"],
	underleftrightarrow: [z.UnderOver, "2194"],
	overset: z.Overset,
	underset: z.Underset,
	overunderset: z.Overunderset,
	stackrel: [
		z.Macro,
		"\\mathrel{\\mathop{#2}\\limits^{#1}}",
		2
	],
	stackbin: [
		z.Macro,
		"\\mathbin{\\mathop{#2}\\limits^{#1}}",
		2
	],
	over: z.Over,
	overwithdelims: z.Over,
	atop: z.Over,
	atopwithdelims: z.Over,
	above: z.Over,
	abovewithdelims: z.Over,
	brace: [
		z.Over,
		"{",
		"}"
	],
	brack: [
		z.Over,
		"[",
		"]"
	],
	choose: [
		z.Over,
		"(",
		")"
	],
	frac: z.Frac,
	sqrt: z.Sqrt,
	root: z.Root,
	uproot: [z.MoveRoot, "upRoot"],
	leftroot: [z.MoveRoot, "leftRoot"],
	left: z.LeftRight,
	right: z.LeftRight,
	middle: z.LeftRight,
	llap: z.Lap,
	rlap: z.Lap,
	raise: z.RaiseLower,
	lower: z.RaiseLower,
	moveleft: z.MoveLeftRight,
	moveright: z.MoveLeftRight,
	",": [z.Spacer, L.thinmathspace],
	":": [z.Spacer, L.mediummathspace],
	">": [z.Spacer, L.mediummathspace],
	";": [z.Spacer, L.thickmathspace],
	"!": [z.Spacer, L.negativethinmathspace],
	enspace: [z.Spacer, .5],
	quad: [z.Spacer, 1],
	qquad: [z.Spacer, 2],
	thinspace: [z.Spacer, L.thinmathspace],
	negthinspace: [z.Spacer, L.negativethinmathspace],
	"*": z.DiscretionaryTimes,
	allowbreak: z.AllowBreak,
	goodbreak: [z.Linebreak, O.LineBreak.GOODBREAK],
	badbreak: [z.Linebreak, O.LineBreak.BADBREAK],
	nobreak: [z.Linebreak, O.LineBreak.NOBREAK],
	break: z.Break,
	hskip: z.Hskip,
	hspace: z.Hskip,
	kern: [z.Hskip, !0],
	mskip: z.Hskip,
	mspace: z.Hskip,
	mkern: [z.Hskip, !0],
	rule: z.rule,
	Rule: [z.Rule],
	Space: [z.Rule, "blank"],
	nonscript: z.Nonscript,
	big: [
		z.MakeBig,
		b.ORD,
		.85
	],
	Big: [
		z.MakeBig,
		b.ORD,
		1.15
	],
	bigg: [
		z.MakeBig,
		b.ORD,
		1.45
	],
	Bigg: [
		z.MakeBig,
		b.ORD,
		1.75
	],
	bigl: [
		z.MakeBig,
		b.OPEN,
		.85
	],
	Bigl: [
		z.MakeBig,
		b.OPEN,
		1.15
	],
	biggl: [
		z.MakeBig,
		b.OPEN,
		1.45
	],
	Biggl: [
		z.MakeBig,
		b.OPEN,
		1.75
	],
	bigr: [
		z.MakeBig,
		b.CLOSE,
		.85
	],
	Bigr: [
		z.MakeBig,
		b.CLOSE,
		1.15
	],
	biggr: [
		z.MakeBig,
		b.CLOSE,
		1.45
	],
	Biggr: [
		z.MakeBig,
		b.CLOSE,
		1.75
	],
	bigm: [
		z.MakeBig,
		b.REL,
		.85
	],
	Bigm: [
		z.MakeBig,
		b.REL,
		1.15
	],
	biggm: [
		z.MakeBig,
		b.REL,
		1.45
	],
	Biggm: [
		z.MakeBig,
		b.REL,
		1.75
	],
	mathord: [z.TeXAtom, b.ORD],
	mathop: [z.TeXAtom, b.OP],
	mathopen: [z.TeXAtom, b.OPEN],
	mathclose: [z.TeXAtom, b.CLOSE],
	mathbin: [z.TeXAtom, b.BIN],
	mathrel: [z.TeXAtom, b.REL],
	mathpunct: [z.TeXAtom, b.PUNCT],
	mathinner: [z.TeXAtom, b.INNER],
	vtop: [z.VBox, "top"],
	vcenter: [z.VBox, "center"],
	vbox: [z.VBox, "bottom"],
	hsize: z.Hsize,
	parbox: z.ParBox,
	breakAlign: z.BreakAlign,
	buildrel: z.BuildRel,
	hbox: [z.HBox, 0],
	text: z.HBox,
	mbox: [z.HBox, 0],
	fbox: z.FBox,
	boxed: [
		z.Macro,
		"\\fbox{$\\displaystyle{#1}$}",
		1
	],
	framebox: z.FrameBox,
	makebox: z.MakeBox,
	strut: z.Strut,
	mathstrut: [z.Macro, "\\vphantom{(}"],
	phantom: z.Phantom,
	vphantom: [
		z.Phantom,
		1,
		0
	],
	hphantom: [
		z.Phantom,
		0,
		1
	],
	smash: z.Smash,
	acute: [z.Accent, "00B4"],
	grave: [z.Accent, "0060"],
	ddot: [z.Accent, "00A8"],
	dddot: [z.Accent, "20DB"],
	ddddot: [z.Accent, "20DC"],
	tilde: [z.Accent, "007E"],
	bar: [z.Accent, "00AF"],
	breve: [z.Accent, "02D8"],
	check: [z.Accent, "02C7"],
	hat: [z.Accent, "005E"],
	vec: [
		z.Accent,
		"2192",
		!1
	],
	dot: [z.Accent, "02D9"],
	widetilde: [
		z.Accent,
		"007E",
		!0
	],
	widehat: [
		z.Accent,
		"005E",
		!0
	],
	matrix: z.Matrix,
	array: z.Matrix,
	pmatrix: [
		z.Matrix,
		"(",
		")"
	],
	cases: [
		z.Matrix,
		"{",
		"",
		"left left",
		null,
		".2em",
		null,
		!0
	],
	eqalign: [
		z.Matrix,
		null,
		null,
		"right left",
		fr,
		".5em",
		"D"
	],
	displaylines: [
		z.Matrix,
		null,
		null,
		"center",
		null,
		".5em",
		"D"
	],
	cr: z.Cr,
	"\\": z.CrLaTeX,
	newline: [z.CrLaTeX, !0],
	hline: z.HLine,
	hdashline: [z.HLine, "dashed"],
	eqalignno: [
		z.Matrix,
		null,
		null,
		"right left",
		fr,
		".5em",
		"D",
		null,
		"right"
	],
	leqalignno: [
		z.Matrix,
		null,
		null,
		"right left",
		fr,
		".5em",
		"D",
		null,
		"left"
	],
	hfill: z.HFill,
	hfil: z.HFill,
	hfilll: z.HFill,
	bmod: [z.Macro, `\\mmlToken{mo}[lspace="${fr}" rspace="${fr}"]{mod}`],
	pmod: [
		z.Macro,
		"\\pod{\\mmlToken{mi}{mod}\\kern 6mu #1}",
		1
	],
	mod: [
		z.Macro,
		"\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,#1",
		1
	],
	pod: [
		z.Macro,
		"\\mathchoice{\\kern18mu}{\\kern8mu}{\\kern8mu}{\\kern8mu}(#1)",
		1
	],
	iff: [z.Macro, "\\;\\Longleftrightarrow\\;"],
	skew: [
		z.Macro,
		"{{#2{#3\\mkern#1mu}\\mkern-#1mu}{}}",
		3
	],
	pmb: [
		z.Macro,
		"\\rlap{#1}\\kern1px{#1}",
		1
	],
	TeX: [z.Macro, "T\\kern-.14em\\lower.5ex{E}\\kern-.115em X"],
	LaTeX: [z.Macro, "L\\kern-.325em\\raise.21em{\\scriptstyle{A}}\\kern-.17em\\TeX"],
	not: z.Not,
	dots: z.Dots,
	space: z.Tilde,
	"\xA0": z.Tilde,
	" ": z.Tilde,
	begin: z.BeginEnd,
	end: z.BeginEnd,
	label: z.HandleLabel,
	ref: z.HandleRef,
	nonumber: z.HandleNoTag,
	newcolumntype: z.NewColumnType,
	mathchoice: z.MathChoice,
	mmlToken: z.MmlToken
}), new an("environment", B.environment, {
	displaymath: [
		z.Equation,
		null,
		!1
	],
	math: [
		z.Equation,
		null,
		!1,
		!1
	],
	array: [z.AlignedArray],
	darray: [
		z.AlignedArray,
		null,
		"D"
	],
	equation: [
		z.Equation,
		null,
		!0
	],
	eqnarray: [
		z.EqnArray,
		null,
		!0,
		!0,
		"rcl",
		"bmt",
		F.cols(0, L.thickmathspace),
		".5em"
	],
	indentalign: [z.IndentAlign]
}), new en("not_remap", null, {
	"←": "↚",
	"→": "↛",
	"↔": "↮",
	"⇐": "⇍",
	"⇒": "⇏",
	"⇔": "⇎",
	"∈": "∉",
	"∋": "∌",
	"∣": "∤",
	"∥": "∦",
	"∼": "≁",
	"~": "≁",
	"≃": "≄",
	"≅": "≇",
	"≈": "≉",
	"≍": "≭",
	"=": "≠",
	"≡": "≢",
	"<": "≮",
	">": "≯",
	"≤": "≰",
	"≥": "≱",
	"≲": "≴",
	"≳": "≵",
	"≶": "≸",
	"≷": "≹",
	"≺": "⊀",
	"≻": "⊁",
	"⊂": "⊄",
	"⊃": "⊅",
	"⊆": "⊈",
	"⊇": "⊉",
	"⊢": "⊬",
	"⊨": "⊭",
	"⊩": "⊮",
	"⊫": "⊯",
	"≼": "⋠",
	"≽": "⋡",
	"⊑": "⋢",
	"⊒": "⋣",
	"⊲": "⋪",
	"⊳": "⋫",
	"⊴": "⋬",
	"⊵": "⋭",
	"∃": "∄"
});
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/base/BaseConfiguration.js
var pr = O.Variant;
new en("remap", null, {
	"-": "−",
	"*": "∗",
	"`": "‘"
});
function mr(e, t) {
	let n = e.stack.env.font, r = e.stack.env.italicFont, i = n ? { mathvariant: n } : {}, a = sn.getMap("remap").lookup(t), o = ut(t), s = o[3], c = e.create("token", s, i, a ? a.char : t), l = F.isLatinOrGreekChar(t) ? e.configuration.mathStyle(t, !0) || r : "", u = o[4] || (n && l === pr.NORMAL ? "" : l);
	u && c.attributes.set("mathvariant", u), s === "mo" && (D.setProperty(c, "fixStretchy", !0), e.configuration.addNode("fixStretchy", c)), e.Push(c);
}
function hr(e, t) {
	throw new M("UndefinedControlSequence", "Undefined control sequence %1", "\\" + t);
}
function gr(e, t) {
	throw new M("UnknownEnv", "Unknown environment '%1'", t);
}
function _r({ data: e }) {
	for (let t of e.getList("nonscript")) if (t.attributes.get("scriptlevel") > 0) {
		let n = t.parent;
		if (n.childNodes.splice(n.childIndex(t), 1), e.removeFromList(t.kind, [t]), t.isKind("mrow")) {
			let n = t.childNodes[0];
			e.removeFromList("mstyle", [n]), e.removeFromList("mspace", n.childNodes[0].childNodes);
		}
	} else t.isKind("mrow") && (t.parent.replaceChild(t.childNodes[0], t), e.removeFromList("mrow", [t]));
}
var vr = class extends Wt {};
un.create("base", {
	[k.CONFIG]: function(e, t) {
		let n = t.parseOptions.options;
		n.digits && (n.numberPattern = n.digits), new Qt("digit", B.digit, n.initialDigit), new Qt("letter", B.variable, n.initialLetter), e.handlers.get(A.CHARACTER).add(["letter", "digit"], null, 4);
	},
	[k.HANDLER]: {
		[A.CHARACTER]: ["command", "special"],
		[A.DELIMITER]: ["delimiter"],
		[A.MACRO]: [
			"delimiter",
			"macros",
			"lcGreek",
			"ucGreek",
			"mathchar0mi",
			"mathchar0mo",
			"mathchar7"
		],
		[A.ENVIRONMENT]: ["environment"]
	},
	[k.FALLBACK]: {
		[A.CHARACTER]: mr,
		[A.MACRO]: hr,
		[A.ENVIRONMENT]: gr
	},
	[k.ITEMS]: {
		[kn.prototype.kind]: kn,
		[An.prototype.kind]: An,
		[jn.prototype.kind]: jn,
		[Mn.prototype.kind]: Mn,
		[Nn.prototype.kind]: Nn,
		[Pn.prototype.kind]: Pn,
		[Fn.prototype.kind]: Fn,
		[In.prototype.kind]: In,
		[Ln.prototype.kind]: Ln,
		[Rn.prototype.kind]: Rn,
		[zn.prototype.kind]: zn,
		[Bn.prototype.kind]: Bn,
		[Vn.prototype.kind]: Vn,
		[Hn.prototype.kind]: Hn,
		[Un.prototype.kind]: Un,
		[Wn.prototype.kind]: Wn,
		[Gn.prototype.kind]: Gn,
		[Kn.prototype.kind]: Kn,
		[qn.prototype.kind]: qn,
		[Jn.prototype.kind]: Jn,
		[Yn.prototype.kind]: Yn,
		[Xn.prototype.kind]: Xn,
		[Zn.prototype.kind]: Zn,
		[Qn.prototype.kind]: Qn,
		[er.prototype.kind]: er,
		[$n.prototype.kind]: $n
	},
	[k.OPTIONS]: {
		maxMacros: 1e3,
		digits: "",
		numberPattern: /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)?|\.[0-9]+)/,
		initialDigit: /[0-9.,]/,
		identifierPattern: /^[a-zA-Z]+/,
		initialLetter: /[a-zA-Z]/,
		baseURL: !Ce.document || Ce.document.getElementsByTagName("base").length === 0 ? "" : String(Ce.document.location).replace(/#.*$/, "")
	},
	[k.TAGS]: { base: vr },
	[k.POSTPROCESSORS]: [[_r, -4]]
});
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex.js
var yr = class e extends Re {
	static configure(e) {
		let t = new pn(e, ["tex"]);
		return t.init(), t;
	}
	static tags(e, t) {
		qt.addTags(t.tags), qt.setDefault(e.options.tags), e.tags = qt.getDefault(), e.tags.configuration = e;
	}
	constructor(t = {}) {
		let [n, r, i] = Fe(t, e.OPTIONS, Xe.OPTIONS);
		super(r), this.findTeX = this.options.FindTeX || new Xe(i);
		let a = this.options.packages, o = this.configuration = e.configure(a), s = this._parseOptions = new Vt(o, [this.options, qt.OPTIONS]);
		Pe(s.options, n), o.config(this), e.tags(s, o), this.postFilters.addList([
			[_t.cleanSubSup, -7],
			[_t.setInherited, -6],
			[_t.checkScriptlevel, -5],
			[_t.moveLimits, -4],
			[_t.cleanStretchy, -3],
			[_t.cleanAttributes, -2],
			[_t.combineRelations, -1]
		]);
	}
	setMmlFactory(e) {
		super.setMmlFactory(e), this._parseOptions.nodeFactory.setMmlFactory(e);
	}
	get parseOptions() {
		return this._parseOptions;
	}
	reset(e = 0) {
		this.parseOptions.clear(), this.parseOptions.tags.reset(e);
	}
	compile(e, t) {
		this.parseOptions.clear(), this.parseOptions.mathItem = e, this.executeFilters(this.preFilters, e, t, this.parseOptions), this.latex = e.math;
		let n;
		this.parseOptions.tags.startEquation(e);
		let r;
		try {
			r = new P(this.latex, {
				display: e.display,
				isInner: !1
			}, this.parseOptions), n = r.mml();
		} catch (e) {
			if (!(e instanceof M)) throw e;
			this.parseOptions.error = !0, n = this.options.formatError(this, e);
		}
		return n = this.parseOptions.nodeFactory.create("node", "math", [n]), n.attributes.set(O.Attr.LATEX, this.latex), e.display && D.setAttribute(n, "display", "block"), this.parseOptions.tags.finishEquation(e), this.parseOptions.root = n, this.executeFilters(this.postFilters, e, t, this.parseOptions), r && r.stack.env.hsize && (D.setAttribute(n, "maxwidth", r.stack.env.hsize), D.setAttribute(n, "overflow", "linebreak")), this.mathNode = this.parseOptions.root, this.mathNode;
	}
	findMath(e) {
		return this.findTeX.findMath(e);
	}
	formatError(e) {
		let t = e.message.replace(/\n.*/, "");
		return this.parseOptions.nodeFactory.create("error", t, e.id, this.latex);
	}
};
yr.NAME = "TeX", yr.OPTIONS = Object.assign(Object.assign({}, Re.OPTIONS), {
	FindTeX: null,
	packages: ["base"],
	maxBuffer: 5120,
	maxTemplateSubtitutions: 1e4,
	mathStyle: "TeX",
	formatError: (e, t) => e.formatError(t)
});
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/OutputJax.js
var br = class {
	constructor(e = {}) {
		this.adaptor = null;
		let t = this.constructor;
		this.options = Pe(_({}, t.OPTIONS), e), this.preFilters = new Le(this.options.preFilters), this.postFilters = new Le(this.options.postFilters);
	}
	get name() {
		return this.constructor.NAME;
	}
	setAdaptor(e) {
		this.adaptor = e;
	}
	initialize() {}
	reset(...e) {}
	getMetrics(e) {}
	styleSheet(e) {
		return null;
	}
	pageElements(e) {
		return null;
	}
	executeFilters(e, t, n, r) {
		let i = {
			math: t,
			document: n,
			data: r
		};
		return e.execute(i), i.data;
	}
};
br.NAME = "generic", br.OPTIONS = {
	preFilters: [],
	postFilters: []
};
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Direction.js
var H = {
	None: "",
	Vertical: "v",
	Horizontal: "h"
}, U = H.Vertical, W = H.Horizontal, xr = function(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}, Sr = .07, Cr = .07, wr = { dir: H.None };
function Tr(e, t, n) {
	return n ? _(e, { [t]: n })[t] : e[t];
}
var G = class {
	get CLASS() {
		return this.constructor;
	}
	static charOptions(e, t) {
		let n = e[t];
		if (!Array.isArray(n)) throw Error(`Character data hasn't been loaded for 0x${t.toString(16).toUpperCase()}`);
		return n.length === 3 && (n[3] = {}), n[3];
	}
	static defineDynamicFiles(e, t = "") {
		let n = {};
		return (e || []).forEach(([e, r, i]) => {
			n[e] = {
				extension: t,
				file: e,
				variants: r,
				delimiters: i || [],
				promise: null,
				failed: !1,
				setup: (t) => {
					n[e].failed = !0;
				}
			};
		}), n;
	}
	static dynamicSetup(e, t, n, r = {}, i = null) {
		let a = e ? this.dynamicExtensions.get(e) : null, o = e ? a.files : this.dynamicFiles;
		o[t].setup = (t) => {
			Object.keys(n).forEach((e) => t.defineChars(e, n[e])), t.defineDelimiters(r), e && this.adjustDelimiters(t.delimiters, Object.keys(r), a.sizeN, a.stretchN), i && t.addDynamicFontCss(i);
		};
	}
	static adjustDelimiters(e, t, n, r) {
		t.forEach((t) => {
			let i = e[parseInt(t)];
			"dir" in i && (i.variants &&= this.adjustArrayIndices(i.variants, n), i.stretchv &&= this.adjustArrayIndices(i.stretchv, r));
		});
	}
	static adjustArrayIndices(e, t) {
		return e.map((e) => e < 0 ? t - 1 - e : e);
	}
	static addExtension(e, t = "") {
		let n = {
			name: e.name,
			prefix: t || `[${e.name}-extension]/${this.JAX.toLowerCase()}/dynamic`,
			files: this.defineDynamicFiles(e.ranges, e.name),
			sizeN: this.defaultSizeVariants.length,
			stretchN: this.defaultStretchVariants.length
		};
		this.dynamicExtensions.set(e.name, n);
		for (let [t, n] of [
			["options", "OPTIONS"],
			["variants", "defaultVariants"],
			["variantSmp", "VariantSmp"],
			["cssFonts", "defaultCssFonts"],
			["accentMap", "defaultAccentMap"],
			["moMap", "defaultMoMap"],
			["mnMap", "defaultMnMap"],
			["parameters", "defaultParams"],
			["chars", "defaultChars"],
			["sizeVariants", "defaultSizeVariants"],
			["stretchVariants", "defaultStretchVariants"]
		]) Tr(this, n, e[t]);
		e.delimiters && (Object.assign(this.defaultDelimiters, e.delimiters), this.adjustDelimiters(this.defaultDelimiters, Object.keys(e.delimiters), n.sizeN, n.stretchN));
	}
	constructor(e = null) {
		this.variant = {}, this.delimiters = {}, this.cssFontMap = {}, this.cssFontPrefix = "", this.remapChars = {}, this.skewIcFactor = .75;
		let t = this.CLASS;
		this.options = Pe(_({}, t.OPTIONS), e), this.params = Object.assign({}, t.defaultParams), this.sizeVariants = [...t.defaultSizeVariants], this.stretchVariants = [...t.defaultStretchVariants], this.defineCssFonts(t.defaultCssFonts), this.cssFamilyPrefix = t.defaultCssFamilyPrefix, this.createVariants(t.defaultVariants), this.defineDelimiters(t.defaultDelimiters), Object.keys(t.defaultChars).forEach((e) => this.defineChars(e, t.defaultChars[e])), this.defineRemap("accent", t.defaultAccentMap), this.defineRemap("mo", t.defaultMoMap), this.defineRemap("mn", t.defaultMnMap), this.defineDynamicCharacters(t.dynamicFiles), t.dynamicExtensions.forEach((e) => this.defineDynamicCharacters(e.files));
	}
	setOptions(e) {
		_(this.options, e);
	}
	addExtension(e, t = "") {
		let n = this.constructor.JAX.toLowerCase(), r = {
			name: e.name,
			prefix: t || `[${e.name}-extension]/${n}/dynamic`,
			files: this.CLASS.defineDynamicFiles(e.ranges, t),
			sizeN: this.sizeVariants.length,
			stretchN: this.stretchVariants.length
		};
		this.CLASS.dynamicExtensions.set(e.name, r), _(this.options, e.options || {}), _(this.params, e.parameters || {}), Tr(this, "sizeVariants", e.sizeVariants), Tr(this, "stretchVariants", e.stretchVariants), Tr(this.constructor, "VariantSmp", e.variantSmp), this.defineCssFonts(Tr({ cssFonts: {} }, "cssFonts", e.cssFonts)), this.createVariants(Tr({ variants: [] }, "variants", e.variants)), e.delimiters && (this.defineDelimiters(Tr({ delimiters: {} }, "delimiters", e.delimiters)), this.CLASS.adjustDelimiters(this.delimiters, Object.keys(e.delimiters), r.sizeN, r.stretchN));
		for (let t of Object.keys(e.chars || {})) this.defineChars(t, e.chars[t]);
		return this.defineRemap("accent", e.accentMap), this.defineRemap("mo", e.moMap), this.defineRemap("mn", e.mnMap), e.ranges && this.defineDynamicCharacters(r.files), [];
	}
	get styles() {
		return this._styles;
	}
	set styles(e) {
		this._styles = e;
	}
	createVariant(e, t = null, n = null) {
		let r = {
			linked: [],
			chars: Object.create(t ? this.variant[t].chars : {})
		};
		this.variant[n] && (Object.assign(r.chars, this.variant[n].chars), this.variant[n].linked.push(r.chars), r.chars = Object.create(r.chars)), this.remapSmpChars(r.chars, e), this.variant[e] = r;
	}
	remapSmpChars(e, t) {
		let n = this.CLASS, r = n.VariantSmp[t];
		if (typeof r == "string" && (r = n.VariantSmp[r]), !r) return;
		let i = n.SmpRemap, a = [
			null,
			null,
			n.SmpRemapGreekU,
			n.SmpRemapGreekL
		];
		for (let [t, o, s] of n.SmpRanges) {
			let n = r[t];
			if (n) {
				for (let t = o; t <= s; t++) {
					if (t === 930) continue;
					let r = n + t - o;
					e[t] = this.smpChar(i[r] || r);
				}
				if (a[t]) for (let r of Object.keys(a[t]).map((e) => parseInt(e))) e[r] = this.smpChar(n + a[t][r]);
			}
		}
		let o = r[5] || {};
		for (let t of Object.keys(o)) e[t] = this.smpChar(r[5][t]);
	}
	smpChar(e) {
		return [
			,
			,
			,
			{ smp: e }
		];
	}
	createVariants(e) {
		for (let t of e) this.createVariant(t[0], t[1], t[2]);
	}
	defineChars(e, t) {
		let n = this.variant[e];
		Object.assign(n.chars, t);
		for (let e of n.linked) Object.assign(e, t);
	}
	defineCssFonts(e) {
		Object.assign(this.cssFontMap, e);
		for (let t of Object.keys(e)) this.cssFontMap[t][0] === "unknown" && (this.cssFontMap[t][0] = this.options.unknownFamily);
	}
	defineDelimiters(e) {
		Object.assign(this.delimiters, e);
	}
	defineRemap(e, t) {
		t && (Object.hasOwn(this.remapChars, e) || (this.remapChars[e] = {}), Object.assign(this.remapChars[e], t));
	}
	defineDynamicCharacters(e) {
		for (let t of Object.keys(e)) {
			let n = e[t];
			for (let e of Object.keys(n.variants)) this.defineChars(e, this.flattenRanges(n.variants[e], n));
			this.defineDelimiters(this.flattenRanges(n.delimiters, n));
		}
	}
	flattenRanges(e, t) {
		let n = {};
		for (let r of e) if (Array.isArray(r)) for (let e = r[0]; e <= r[1]; e++) n[e] = t;
		else n[r] = t;
		return n;
	}
	dynamicFileName(e) {
		let t = e.extension ? this.CLASS.dynamicExtensions.get(e.extension).prefix : this.options.dynamicPrefix;
		return e.file.match(/^(?:[/[]|[a-z]+:\/\/|[a-z]:)/i) ? e.file : t + "/" + e.file.replace(/(\.js)?$/, ".js");
	}
	loadDynamicFile(e) {
		return xr(this, void 0, void 0, function* () {
			return e.failed ? Promise.reject(/* @__PURE__ */ Error(`dynamic file '${e.file}' failed to load`)) : (e.promise ||= Ot(this.dynamicFileName(e)).catch((t) => {
				e.failed = !0, console.warn(t);
			}), e.promise.then(() => e.setup(this)));
		});
	}
	loadDynamicFiles() {
		let e = this.CLASS.dynamicFiles, t = Object.keys(e).map((t) => this.loadDynamicFile(e[t]));
		for (let e of this.CLASS.dynamicExtensions.values()) t.push(...Object.keys(e.files).map((t) => this.loadDynamicFile(e.files[t])));
		return Promise.all(t);
	}
	loadDynamicFilesSync() {
		if (!we.asyncIsSynchronous) throw Error("MathJax(loadDynamicFilesSync): mathjax.asyncLoad must be specified and synchronous\n    Try importing #js/../components/require.mjs and #js/util/asyncLoad/node.js");
		let e = this.CLASS.dynamicFiles;
		Object.keys(e).forEach((t) => this.loadDynamicFileSync(e[t]));
		for (let e of this.CLASS.dynamicExtensions.values()) Object.keys(e.files).forEach((t) => this.loadDynamicFileSync(e.files[t]));
	}
	loadDynamicFileSync(e) {
		if (!e.promise) {
			e.promise = Promise.resolve();
			try {
				we.asyncLoad(this.dynamicFileName(e));
			} catch (t) {
				e.failed = !0, console.warn(t);
			}
			e.setup(this);
		}
	}
	addDynamicFontCss(e, t) {}
	getDelimiter(e) {
		let t = this.delimiters[e];
		return t && !("dir" in t) ? (this.delimiters[e] = null, we.asyncIsSynchronous ? (this.loadDynamicFileSync(t), this.getDelimiter(e)) : (be(this.loadDynamicFile(t)), null)) : t;
	}
	getSizeVariant(e, t) {
		let n = this.getDelimiter(e);
		return n && n.variants && (t = n.variants[t]), this.sizeVariants[t];
	}
	getStretchVariant(e, t) {
		let n = this.getDelimiter(e);
		return this.stretchVariants[n.stretchv ? n.stretchv[t] : 0];
	}
	getStretchVariants(e) {
		return [
			0,
			1,
			2,
			3
		].map((t) => this.getStretchVariant(e, t));
	}
	getChar(e, t) {
		let n = this.variant[e].chars[t];
		if (n && !Array.isArray(n)) {
			let r = this.variant[e];
			return delete r.chars[t], r.linked.forEach((e) => delete e[t]), we.asyncIsSynchronous ? (this.loadDynamicFileSync(n), this.getChar(e, t)) : (be(this.loadDynamicFile(n)), null);
		}
		return n;
	}
	getVariant(e) {
		return this.variant[e];
	}
	getCssFont(e) {
		return this.cssFontMap[e] || [
			"serif",
			!1,
			!1
		];
	}
	getFamily(e) {
		return this.cssFamilyPrefix ? this.cssFamilyPrefix + ", " + e : e;
	}
	getRemappedChar(e, t) {
		return (this.remapChars[e] || {})[t];
	}
};
G.OPTIONS = {
	unknownFamily: "serif",
	dynamicPrefix: "."
}, G.JAX = "common", G.NAME = "", G.defaultVariants = [
	["normal"],
	["bold", "normal"],
	["italic", "normal"],
	[
		"bold-italic",
		"italic",
		"bold"
	],
	["double-struck", "bold"],
	["fraktur", "normal"],
	[
		"bold-fraktur",
		"bold",
		"fraktur"
	],
	["script", "italic"],
	[
		"bold-script",
		"bold-italic",
		"script"
	],
	["sans-serif", "normal"],
	[
		"bold-sans-serif",
		"bold",
		"sans-serif"
	],
	[
		"sans-serif-italic",
		"italic",
		"sans-serif"
	],
	[
		"sans-serif-bold-italic",
		"bold-italic",
		"bold-sans-serif"
	],
	["monospace", "normal"],
	["-smallop", "normal"],
	["-largeop", "normal"],
	["-tex-calligraphic", "italic"],
	["-tex-bold-calligraphic", "bold-italic"],
	["-tex-oldstyle", "normal"],
	["-tex-bold-oldstyle", "bold"],
	["-tex-mathit", "italic"],
	["-tex-variant", "normal"]
], G.defaultCssFonts = {
	normal: [
		"unknown",
		!1,
		!1
	],
	bold: [
		"unknown",
		!1,
		!0
	],
	italic: [
		"unknown",
		!0,
		!1
	],
	"bold-italic": [
		"unknown",
		!0,
		!0
	],
	"double-struck": [
		"unknown",
		!1,
		!0
	],
	fraktur: [
		"unknown",
		!1,
		!1
	],
	"bold-fraktur": [
		"unknown",
		!1,
		!0
	],
	script: [
		"cursive",
		!1,
		!1
	],
	"bold-script": [
		"cursive",
		!1,
		!0
	],
	"sans-serif": [
		"sans-serif",
		!1,
		!1
	],
	"bold-sans-serif": [
		"sans-serif",
		!1,
		!0
	],
	"sans-serif-italic": [
		"sans-serif",
		!0,
		!1
	],
	"sans-serif-bold-italic": [
		"sans-serif",
		!0,
		!0
	],
	monospace: [
		"monospace",
		!1,
		!1
	],
	"-smallop": [
		"unknown",
		!1,
		!1
	],
	"-largeop": [
		"unknown",
		!1,
		!1
	],
	"-tex-calligraphic": [
		"cursive",
		!0,
		!1
	],
	"-tex-bold-calligraphic": [
		"cursive",
		!0,
		!0
	],
	"-tex-oldstyle": [
		"unknown",
		!1,
		!1
	],
	"-tex-bold-oldstyle": [
		"unknown",
		!1,
		!0
	],
	"-tex-mathit": [
		"unknown",
		!0,
		!1
	],
	"-tex-variant": [
		"unknown",
		!1,
		!1
	]
}, G.defaultCssFamilyPrefix = "", G.VariantSmp = {
	bold: [
		119808,
		119834,
		120488,
		120514,
		120782,
		{
			988: 120778,
			989: 120779
		}
	],
	italic: [
		119860,
		119886,
		120546,
		120572
	],
	"bold-italic": [
		119912,
		119938,
		120604,
		120630
	],
	script: [119964, 119990],
	"bold-script": [120016, 120042],
	fraktur: [120068, 120094],
	"double-struck": [
		120120,
		120146,
		,
		,
		120792
	],
	"bold-fraktur": [120172, 120198],
	"sans-serif": [
		120224,
		120250,
		,
		,
		120802
	],
	"bold-sans-serif": [
		120276,
		120302,
		120662,
		120688,
		120812
	],
	"sans-serif-italic": [120328, 120354],
	"sans-serif-bold-italic": [
		120380,
		120406,
		120720,
		120746
	],
	monospace: [
		120432,
		120458,
		,
		,
		120822
	]
}, G.SmpRanges = [
	[
		0,
		65,
		90
	],
	[
		1,
		97,
		122
	],
	[
		2,
		913,
		937
	],
	[
		3,
		945,
		969
	],
	[
		4,
		48,
		57
	]
], G.SmpRemap = {
	119893: 8462,
	119965: 8492,
	119968: 8496,
	119969: 8497,
	119971: 8459,
	119972: 8464,
	119975: 8466,
	119976: 8499,
	119981: 8475,
	119994: 8495,
	119996: 8458,
	120004: 8500,
	120070: 8493,
	120075: 8460,
	120076: 8465,
	120085: 8476,
	120093: 8488,
	120122: 8450,
	120127: 8461,
	120133: 8469,
	120135: 8473,
	120136: 8474,
	120137: 8477,
	120145: 8484
}, G.SmpRemapGreekU = {
	8711: 25,
	1012: 17
}, G.SmpRemapGreekL = {
	977: 27,
	981: 29,
	982: 31,
	1008: 28,
	1009: 30,
	1013: 26,
	8706: 25
}, G.defaultAccentMap = {
	94: "ˆ",
	126: "˜",
	768: "ˋ",
	769: "ˊ",
	770: "ˆ",
	771: "˜",
	772: "ˉ",
	774: "˘",
	775: "˙",
	776: "¨",
	778: "˚",
	780: "ˇ",
	8594: "⃗"
}, G.defaultMoMap = { 45: "−" }, G.defaultMnMap = { 45: "−" }, G.defaultParams = {
	x_height: .442,
	quad: 1,
	num1: .676,
	num2: .394,
	num3: .444,
	denom1: .686,
	denom2: .345,
	sup1: .413,
	sup2: .363,
	sup3: .289,
	sub1: .15,
	sub2: .247,
	sup_drop: .386,
	sub_drop: .05,
	delim1: 2.39,
	delim2: 1,
	axis_height: .25,
	rule_thickness: .06,
	big_op_spacing1: .111,
	big_op_spacing2: .167,
	big_op_spacing3: .2,
	big_op_spacing4: .6,
	big_op_spacing5: .1,
	surd_height: .06,
	scriptspace: .05,
	nulldelimiterspace: .12,
	delimiterfactor: 901,
	delimitershortfall: .3,
	rule_factor: 1.25,
	min_rule_thickness: 1.25,
	separation_factor: 1.75,
	extra_ic: .033,
	extender_factor: .333
}, G.defaultDelimiters = {}, G.defaultChars = {}, G.defaultSizeVariants = [], G.defaultStretchVariants = [], G.dynamicFiles = {}, G.dynamicExtensions = /* @__PURE__ */ new Map();
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/Tree/Visitor.js
var Er = class e {
	static methodName(e) {
		return "visit" + (e.charAt(0).toUpperCase() + e.substring(1)).replace(/[^a-z0-9_]/gi, "_") + "Node";
	}
	constructor(t) {
		this.nodeHandlers = /* @__PURE__ */ new Map();
		for (let n of t.getKinds()) {
			let t = this[e.methodName(n)];
			t && this.nodeHandlers.set(n, t);
		}
	}
	visitTree(e, ...t) {
		return this.visitNode(e, ...t);
	}
	visitNode(e, ...t) {
		return (this.nodeHandlers.get(e.kind) || this.visitDefault).call(this, e, ...t);
	}
	visitDefault(e, ...t) {
		if ("childNodes" in e) for (let n of e.childNodes) this.visitNode(n, ...t);
	}
	setNodeHandler(e, t) {
		this.nodeHandlers.set(e, t);
	}
	removeNodeHandler(e) {
		this.nodeHandlers.delete(e);
	}
}, K = class e {
	static zero() {
		return new e({
			h: 0,
			d: 0,
			w: 0
		});
	}
	static empty() {
		return new e();
	}
	constructor(e = {
		w: 0,
		h: -tr,
		d: -tr
	}) {
		this.w = e.w || 0, this.h = "h" in e ? e.h : -tr, this.d = "d" in e ? e.d : -tr, this.L = this.R = this.ic = this.oc = this.sk = this.dx = 0, this.scale = this.rscale = 1, this.pwidth = "";
	}
	empty() {
		return this.w = 0, this.h = this.d = -tr, this;
	}
	clean() {
		this.w === -1e6 && (this.w = 0), this.h === -1e6 && (this.h = 0), this.d === -1e6 && (this.d = 0);
	}
	rescale(e) {
		this.w *= e, this.h *= e, this.d *= e;
	}
	combine(e, t = 0, n = 0) {
		let r = e.rscale, i = t + r * (e.w + e.L + e.R), a = n + r * e.h, o = r * e.d - n;
		i > this.w && (this.w = i), a > this.h && (this.h = a), o > this.d && (this.d = o);
	}
	append(e) {
		let t = e.rscale;
		this.w += t * (e.w + e.L + e.R), t * e.h > this.h && (this.h = t * e.h), t * e.d > this.d && (this.d = t * e.d);
	}
	updateFrom(e) {
		this.h = e.h, this.d = e.d, this.w = e.w, e.pwidth && (this.pwidth = e.pwidth);
	}
	copy() {
		let t = new e();
		return Object.assign(t, this), t;
	}
};
K.fullWidth = "100%", K.boxSides = [
	[
		"Top",
		0,
		"h"
	],
	[
		"Right",
		1,
		"w"
	],
	[
		"Bottom",
		2,
		"d"
	],
	[
		"Left",
		3,
		"w"
	]
];
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/LineBBox.js
var q = class e extends K {
	static from(e, t, n = null) {
		let r = new this();
		return Object.assign(r, e), r.lineLeading = t, n && (r.indentData = n), r;
	}
	constructor(e, t = null) {
		super(e), this.indentData = null, this.isFirst = !1, this.originalL = this.L, t && (this.start = t);
	}
	append(e) {
		this.isFirst && (e.originalL += e.L, e.L = 0), e.indentData && (this.indentData = e.indentData), this.lineLeading = e.lineLeading, super.append(e), this.isFirst = e.isFirst;
	}
	copy() {
		let t = e.from(this, this.lineLeading);
		return t.indentData = this.indentData, t.lineLeading = this.lineLeading, t;
	}
	getIndentData(e) {
		let { indentalign: t, indentshift: n, indentalignfirst: r, indentshiftfirst: i, indentalignlast: a, indentshiftlast: o } = e.attributes.getAllAttributes();
		r === "indentalign" && (r = e.attributes.getInherited("indentalign")), i === "indentshift" && (i = e.attributes.getInherited("indentshift")), a === "indentalign" && (a = t), o === "indentshift" && (o = n), this.indentData = [
			[r, i],
			[t, n],
			[a, o]
		];
	}
	copyIndentData(e) {
		return e.indentData.map(([e, t]) => [e, t]);
	}
}, Dr = 1e6, Or = class extends Er {
	breakToWidth(e, t) {}
}, kr = class extends Or {
	constructor() {
		super(...arguments), this.PENALTY = {
			newline: (e) => 0,
			nobreak: (e) => Dr,
			goodbreak: (e) => e - 200 * this.state.depth,
			badbreak: (e) => e + 200 * this.state.depth,
			auto: (e) => e
		}, this.FACTORS = {
			depth: (e) => e + 800 * this.state.depth,
			width: (e) => e + Math.floor((this.state.width - this.state.w) / this.state.width * 2500),
			tail: (e) => e + Math.floor(this.state.width / Math.max(1e-4, this.state.mathLeft - this.state.w) * 500),
			open: (e, t) => {
				let n = t.node.prevClass;
				if (n === b.BIN || n === b.REL || n === b.OP) return e + 5e3;
				let r = this.getPrevious(t);
				if (r && (r.attributes.get("form") !== "postfix" || r.attributes.get("linebreak") === "nobreak")) return e + 5e3;
				let i = t.node.Parent;
				return i?.isKind("mmultiscripts") && t.node === this.getFirstToken(i) && i.childNodes.filter((e) => e.isKind("mprescripts")).length ? Dr : e - 500;
			},
			close: (e, t) => {
				let n = t.node.Parent;
				return n?.isKind("msubsup") && !(n.isKind("mmultiscripts") && n.childNodes[1]?.isKind("mprescripts")) && t.node === this.getLastToken(n.childNodes[0]) ? Dr : e + 500;
			},
			space: (e, t) => {
				let n = t;
				if (!n.canBreak) return Dr;
				let r = n.getBBox().w;
				return r < 0 ? Dr : r < 1 ? e : e - 100 * (r + 4);
			},
			separator: (e) => e + 500,
			fuzz: (e) => e * .99
		}, this.TEXCLASS = {
			[b.BIN]: (e) => e - 250,
			[b.REL]: (e) => e - 500
		};
	}
	breakToWidth(e, t) {
		let n = this.state;
		this.state = this.createState(e), this.state.width = t;
		let r = e.breakCount;
		for (let n = 0; n <= r; n++) (e.lineBBox[n] || e.getLineBBox(n)).w > t && this.breakLineToWidth(e, n);
		for (let [e, t] of this.state.breaks) {
			if (t === null) {
				let t = e.coreMO();
				t.setBreakStyle(t.node.attributes.get("linebreakstyle") || "before");
			} else e.setBreakAt(t);
			e.invalidateBBox();
		}
		this.state = n;
	}
	createState(e) {
		let t = e.getBBox().w;
		return {
			breaks: /* @__PURE__ */ new Set(),
			potential: [],
			width: 0,
			w: 0,
			prevWidth: 0,
			prevBreak: null,
			depth: 0,
			mathWidth: t,
			mathLeft: t
		};
	}
	breakLineToWidth(e, t) {
		let n = this.state;
		n.potential = [], n.w = 0, n.prevWidth = 0, n.prevBreak = null, n.depth = 0, this.visitNode(e, t);
	}
	addWidth(e, t = null) {
		t === null && (t = e.L + e.w + e.R), t && (t *= e.rscale, this.state.w += t, this.state.potential.length && (this.state.potential[0][4] += t), this.processBreak());
	}
	processBreak() {
		let e = this.state;
		for (; e.potential.length && e.w > this.state.width;) {
			let t = e.potential.pop(), [n, , r, i, a] = t;
			e.breaks.add(n), e.w = e.potential.reduce((e, t) => e + t[4], i + a), e.prevBreak && e.prevWidth + r <= e.width ? (e.breaks.delete(e.prevBreak[0]), e.prevWidth += r) : e.prevWidth = r + i, e.potential.forEach((e) => e[2] -= r), e.prevBreak = t, e.mathLeft -= r;
		}
	}
	pushBreak(e, t, n, r) {
		let i = this.state;
		if (!(t >= 1e6 || i.w === 0 && i.prevWidth === 0)) {
			for (; i.potential.length && i.potential[0][1] > this.FACTORS.fuzz(t);) {
				let e = i.potential.shift();
				i.potential.length && (i.potential[0][4] += e[4]);
			}
			i.potential.unshift([
				[e, r],
				t,
				i.w - (i.prevBreak?.[3] || 0),
				n,
				0
			]);
		}
	}
	getBorderLR(e) {
		let t = e.styleData;
		if (!t) return [0, 0];
		let n = t?.border?.width || [
			0,
			0,
			0,
			0
		], r = t?.padding || [
			0,
			0,
			0,
			0
		];
		return [n[3] + r[3], n[1] + r[1]];
	}
	getFirstToken(e) {
		return e.isToken ? e : this.getFirstToken(e.childNodes[0]);
	}
	getLastToken(e) {
		return e.isToken ? e : this.getLastToken(e.childNodes[e.childNodes.length - 1]);
	}
	visitNode(e, t) {
		e && (this.state.depth++, e.node.isEmbellished && !e.node.isKind("mo") ? this.visitEmbellishedOperator(e, t) : super.visitNode(e, t), this.state.depth--);
	}
	visitDefault(e, t) {
		let n = e.getLineBBox(t);
		if (e.node.isToken || e.node.linebreakContainer || !e.childNodes?.[0]) this.addWidth(n);
		else {
			let [r, i] = this.getBorderLR(e);
			t === 0 && this.addWidth(n, n.L + r), this.visitNode(e.childNodes[0], t), t === e.breakCount && this.addWidth(n, n.R + i);
		}
	}
	visitEmbellishedOperator(e, t) {
		let n = e.coreMO(), r = q.from(e.getOuterBBox(), e.linebreakOptions.lineleading);
		r.getIndentData(n.node);
		let i = n.getBreakStyle(n.node.attributes.get("linebreakstyle")), a = n.processIndent("", r.indentData[1][1], "", r.indentData[0][1], this.state.width)[1], o = this.moPenalty(n);
		if (i === "before") this.pushBreak(e, o, a - r.L, null), this.addWidth(r);
		else {
			this.addWidth(r);
			let t = (i === "after" ? 0 : n.multChar ? n.multChar.getBBox().w : r.w) + a;
			this.pushBreak(e, o, t, null);
		}
	}
	visitMoNode(e, t) {
		let n = e, r = q.from(n.getOuterBBox(), n.linebreakOptions.lineleading);
		r.getIndentData(n.node);
		let i = n.getBreakStyle(n.node.attributes.get("linebreakstyle")), a = n.processIndent("", r.indentData[1][1], "", r.indentData[0][1], this.state.width)[1], o = this.moPenalty(n);
		if (i === "before") this.pushBreak(e, o, a - r.L, null), this.addWidth(r);
		else {
			this.addWidth(r);
			let t = (i === "after" ? 0 : n.multChar ? n.multChar.getBBox().w : r.w) + a;
			this.pushBreak(e, o, t, null);
		}
	}
	moPenalty(e) {
		let { linebreak: t, fence: n, form: r } = e.node.attributes.getList("linebreak", "fence", "form"), i = this.FACTORS, a = i.tail(i.width(0)), o = n && r === "prefix" || e.node.texClass === b.OPEN, s = n && r === "postfix" || e.node.texClass === b.CLOSE;
		return o && (a = i.open(a, e), this.state.depth++), s && (a = i.close(a, e), this.state.depth--), a = (this.TEXCLASS[e.node.texClass] || ((e) => e))(a), (this.PENALTY[t] || ((e) => e))(i.depth(a));
	}
	getPrevious(e) {
		let t = e.node, n = t.parent, r = n.childIndex(t);
		for (; n && (n.notParent || n.isKind("mrow")) && r === 0;) t = n, n = t.parent, r = n.childIndex(t);
		if (!n || !r) return null;
		let i = n.childNodes[r - 1];
		return i.isEmbellished ? i.coreMO() : null;
	}
	visitMspaceNode(e, t) {
		let n = e.getLineBBox(t), r = e;
		if (r.canBreak) {
			let t = this.mspacePenalty(r);
			n.getIndentData(e.node);
			let i = e.processIndent("", n.indentData[1][1], "", n.indentData[0][1], this.state.width)[1];
			this.pushBreak(e, t, i - n.w, null);
		}
		this.addWidth(n);
	}
	mspacePenalty(e) {
		let t = e.node.attributes.get("linebreak"), n = this.FACTORS, r = n.space(n.tail(n.width(0)), e);
		return (this.PENALTY[t] || ((e) => e))(n.depth(r));
	}
	visitMtextNode(e, t) {
		if (!e.getText().match(/ /)) {
			this.visitDefault(e, t);
			return;
		}
		let n = e;
		n.clearBreakPoints();
		let r = n.textWidth(" "), i = e.getBBox(), [a, o] = this.getBorderLR(e);
		this.addWidth(i, i.L + a);
		let s = n.childNodes;
		for (let t of s.keys()) {
			let a = s[t];
			if (a.node.isKind("text")) {
				let o = a.node.getText().split(/ /), s = o.pop();
				for (let a of o.keys()) this.addWidth(i, n.textWidth(o[a])), this.pushBreak(e, this.mtextPenalty(), -r, [t, a + 1]), this.addWidth(i, r);
				this.addWidth(i, n.textWidth(s));
			} else this.addWidth(a.getBBox());
		}
		this.addWidth(i, i.R + o);
	}
	mtextPenalty() {
		let e = this.FACTORS;
		return e.depth(e.tail(e.width(0)));
	}
	visitMrowNode(e, t) {
		let n = e.lineBBox[t] || e.getLineBBox(t), [r, i] = n.start || [0, 0], [a, o] = n.end || [e.childNodes.length - 1, 0], [s, c] = this.getBorderLR(e);
		this.addWidth(n, n.L + s);
		for (let t = r; t <= a; t++) this.visitNode(e.childNodes[t], t === r ? i : t === a ? o : 0);
		this.addWidth(n, n.R + c);
	}
	visitInferredMrowNode(e, t) {
		this.state.depth--, this.visitMrowNode(e, t), this.state.depth++;
	}
	visitMfracNode(e, t) {
		let n = e;
		!n.node.attributes.get("bevelled") && n.getOuterBBox().w > this.state.width && (this.breakToWidth(n.childNodes[0], this.state.width), this.breakToWidth(n.childNodes[1], this.state.width)), this.visitDefault(e, t);
	}
	visitMsqrtNode(e, t) {
		if (e.getOuterBBox().w > this.state.width) {
			let t = e, n = t.childNodes[t.base];
			this.breakToWidth(n, this.state.width - t.rootWidth()), t.getStretchedSurd();
		}
		this.visitDefault(e, t);
	}
	visitMrootNode(e, t) {
		this.visitMsqrtNode(e, t);
	}
	visitMsubNode(e, t) {
		this.visitDefault(e, t);
		let n = e, r = n.getOffset()[0], i = n.scriptChild.getOuterBBox(), [a, o] = this.getBorderLR(e);
		this.addWidth(n.getLineBBox(t), r + a + i.rscale * i.w + n.font.params.scriptspace + o);
	}
	visitMsupNode(e, t) {
		this.visitDefault(e, t);
		let n = e, r = n.getOffset()[0], i = n.scriptChild.getOuterBBox(), [a, o] = this.getBorderLR(e);
		this.addWidth(n.getLineBBox(t), r + a + i.rscale * i.w + n.font.params.scriptspace + o);
	}
	visitMsubsupNode(e, t) {
		this.visitDefault(e, t);
		let n = e, r = n.subChild.getOuterBBox(), i = n.supChild.getOuterBBox(), a = n.getAdjustedIc(), o = Math.max(r.rscale * r.w, a + i.rscale * i.w) + n.font.params.scriptspace, [s, c] = this.getBorderLR(e);
		this.addWidth(e.getLineBBox(t), s + o + c);
	}
	visitMmultiscriptsNode(e, t) {
		let n = e, r = n.scriptData;
		if (r.numPrescripts) {
			let i = Math.max(r.psup.rscale * r.psup.w, r.psub.rscale * r.psub.w);
			this.addWidth(e.getLineBBox(t), i + n.font.params.scriptspace);
		}
		if (this.visitDefault(e, t), r.numScripts) {
			let i = Math.max(r.sup.rscale * r.sup.w, r.sub.rscale * r.sub.w);
			this.addWidth(e.getLineBBox(t), i + n.font.params.scriptspace);
		}
	}
	visitMfencedNode(e, t) {
		let n = e, r = e.getLineBBox(t), [i, a] = this.getBorderLR(e);
		t === 0 && this.addWidth(r, r.L + i), this.visitNode(n.mrow, t), t === e.breakCount && this.addWidth(r, r.R + a);
	}
	visitMactionNode(e, t) {
		let n = e, r = e.getLineBBox(t), [i, a] = this.getBorderLR(e);
		t === 0 && this.addWidth(r, r.L + i), this.visitNode(n.selected, t), t === e.breakCount && this.addWidth(r, r.R + a);
	}
};
(function() {
	for (let e of Object.keys(ft.postfix)) {
		let t = ft.postfix[e][3];
		t && t.fence && (t.linebreakstyle = "after");
	}
	ft.infix["⁡"] = [...ft.infix["⁡"]], ft.infix["⁡"][3] = { linebreak: "nobreak" };
})();
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/util/StyleJson.js
var Ar = class {
	get cssText() {
		return this.getStyleString();
	}
	constructor(e = null) {
		this.styles = {}, this.addStyles(e);
	}
	addStyles(e) {
		if (e) for (let t of Object.keys(e)) this.styles[t] || (this.styles[t] = {}), Object.assign(this.styles[t], e[t]);
	}
	removeStyles(...e) {
		for (let t of e) delete this.styles[t];
	}
	clear() {
		this.styles = {};
	}
	getStyleString() {
		return this.getStyleRules().join("\n\n");
	}
	getStyleRules(e = this.styles, t = "") {
		let n = Object.keys(e), r = Array(n.length), i = 0;
		for (let a of n) {
			let n = e[a];
			r[i++] = `${t}${a} {\n${this.getStyleDefString(n, t)}\n${t}}`;
		}
		return r;
	}
	getStyleDefString(e, t) {
		let n = Object.keys(e), r = Array(n.length), i = 0;
		for (let a of n) r[i++] = e[a] instanceof Object ? t + this.getStyleRules({ [a]: e[a] }, t + "  ").join("\n" + t) : "  " + t + a + ": " + e[a] + ";";
		return r.join("\n" + t);
	}
}, jr = "@mathjax/%%FONT%%-font", Mr = class extends br {
	get forceInlineBreaks() {
		return !1;
	}
	constructor(e = {}, t = null, n = null) {
		let [r, i] = e.fontData instanceof G ? [e.fontData.constructor, e.fontData] : [e.fontData || n, null], [a, o] = Fe(e, r.OPTIONS);
		super(a), this.factory = this.options.wrapperFactory || new t(), this.factory.jax = this, this.styleJson = this.options.styleJson || new Ar(), this.font = i || new r(o), this.font.setOptions({ mathmlSpacing: this.options.mathmlSpacing }), this.constructor.genericFont = r, this.unknownCache = /* @__PURE__ */ new Map();
		let s = this.options.linebreaks.LinebreakVisitor || kr;
		this.linebreaks = new s(this.factory);
	}
	setAdaptor(e) {
		super.setAdaptor(e), this.options.htmlHDW === "auto" && (this.options.htmlHDW = e.canMeasureNodes ? "ignore" : "force");
	}
	addExtension(e, t = "") {
		return this.font.addExtension(e, t);
	}
	typeset(e, t) {
		let n = this.constructor, r = n.genericFont;
		n.genericFont = this.font.constructor, this.setDocument(t);
		let i = this.createNode();
		try {
			this.toDOM(e, i, t);
		} finally {
			n.genericFont = r;
		}
		return i;
	}
	createNode() {
		let e = this.constructor.NAME;
		return this.html("mjx-container", {
			class: "MathJax",
			jax: e
		});
	}
	setScale(e, t) {
		let n = this.getInitialScale() * this.options.scale;
		if (t.node.attributes.get("overflow") === "scale" && this.math.display) {
			let e = t.getOuterBBox().w, r = Math.max(0, this.math.metrics.containerWidth - 4) / this.pxPerEm;
			e > r && e && (n *= r / e);
		}
		n !== 1 && this.adaptor.setStyle(e, "fontSize", ar(n));
	}
	getInitialScale() {
		return this.math.metrics.scale;
	}
	toDOM(e, t, n = null) {
		this.setDocument(n), this.math = e, this.container = t, this.pxPerEm = e.metrics.ex / this.font.params.x_height, this.executeFilters(this.preFilters, e, n, t), this.nodeMap = /* @__PURE__ */ new Map(), e.root.attributes.getAllInherited().overflow = this.options.displayOverflow;
		let r = e.root.attributes.get("overflow");
		this.adaptor.setAttribute(t, "overflow", r), r === "linebreak" && this.getLinebreakWidth();
		let i = this.options.linebreaks.inline && !e.display, a = !!e.root.getProperty("inlineMarked");
		a && (!i || this.forceInlineBreaks !== e.root.getProperty("inlineForced")) && (this.unmarkInlineBreaks(e.root), e.root.removeProperty("inlineMarked"), e.root.removeProperty("inlineForced"), a = !1), i && !a && (this.markInlineBreaks(e.root.childNodes?.[0]), e.root.setProperty("inlineMarked", !0), e.root.setProperty("inlineForced", this.forceInlineBreaks)), e.root.setTeXclass(null);
		let o = this.factory.wrap(e.root);
		this.setScale(t, o), this.processMath(o, t), this.nodeMap = null, this.executeFilters(this.postFilters, e, n, t);
	}
	getBBox(e, t) {
		this.setDocument(t), this.math = e, e.root.setTeXclass(null), this.nodeMap = /* @__PURE__ */ new Map();
		let n = this.factory.wrap(e.root).getOuterBBox();
		return this.nodeMap = null, n;
	}
	getLinebreakWidth() {
		let e = this.math.metrics.containerWidth / this.pxPerEm, t = this.math.root.attributes.get("maxwidth") || this.options.linebreaks.width;
		this.containerWidth = ir(t, e, 1, this.pxPerEm);
	}
	markInlineBreaks(e) {
		if (!e) return;
		let t = this.forceInlineBreaks, n = !1, r = !1, i = "";
		for (let a of e.childNodes) if (i) r = this.markInlineBreak(r, t, i, e, a), i = "", n = !1;
		else if (a.isEmbellished) {
			if (a === e.childNodes[0]) continue;
			let o = a.coreMO(), s = o.texClass, c = o.attributes.get("linebreak"), l = o.attributes.get("linebreakstyle");
			(s === b.BIN || s === b.REL || s === b.ORD && o.hasSpacingAttributes() || c !== "auto") && c !== "nobreak" && (l === "before" ? (!n || c !== "auto") && (r = this.markInlineBreak(r, t, c, e, a, o)) : i = c), n = c === "newline" && l === "after";
		} else if (a.isKind("mspace")) {
			let i = a.attributes.get("linebreak");
			i !== "nobreak" && a.canBreak && (r = this.markInlineBreak(r, t, i, e, a)), n = i === "newline";
		} else n = !1, a.isKind("mstyle") && !a.attributes.get("style") && !a.attributes.hasExplicit("mathbackground") || a.isKind("semantics") ? (this.markInlineBreaks(a.childNodes[0]), a.getProperty("process-breaks") && (a.setProperty("inline-breaks", !0), a.childNodes[0].setProperty("inline-breaks", !0), e.parent.setProperty("process-breaks", "true"))) : a.isKind("mrow") && a.attributes.get("data-semantic-added") && (this.markInlineBreaks(a), a.getProperty("process-breaks") && (a.setProperty("inline-breaks", !0), e.parent.setProperty("process-breaks", "true")));
	}
	markInlineBreak(e, t, n, r, i, a = null) {
		return i.setProperty("breakable", !0), t && n !== "newline" ? (i.setProperty("forcebreak", !0), a?.setProperty("forcebreak", !0)) : (i.removeProperty("forcebreak"), a?.removeProperty("forcebreak"), n === "newline" && i.setProperty("newline", !0)), e ||= (r.setProperty("process-breaks", !0), r.parent.setProperty("process-breaks", !0), !0), e;
	}
	unmarkInlineBreaks(e) {
		if (e && (e.removeProperty("forcebreak"), e.removeProperty("breakable"), e.coreMO().removeProperty("forcebreak"), e.getProperty("process-breaks"))) {
			e.removeProperty("process-breaks");
			for (let t of e.childNodes) this.unmarkInlineBreaks(t);
		}
	}
	getMetrics(e) {
		this.setDocument(e);
		let t = this.adaptor, n = this.getMetricMaps(e);
		for (let r of e.math) {
			let e = t.parent(r.start.node);
			if (r.state() < v.METRICS && e) {
				let { em: t, ex: i, containerWidth: a, scale: o, family: s } = n[+!!r.display].get(e);
				r.setMetrics(t, i, a, o), this.options.mtextInheritFont && (r.outputData.mtextFamily = s), this.options.merrorInheritFont && (r.outputData.merrorFamily = s), r.state(v.METRICS);
			}
		}
	}
	getMetricsFor(e, t) {
		let n = this.options.mtextInheritFont || this.options.merrorInheritFont, r = this.getTestElement(e, t), i = Object.assign(Object.assign({}, this.measureMetrics(r, n)), { display: t });
		return this.adaptor.remove(r), i;
	}
	getMetricMaps(e) {
		let t = this.adaptor, n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
		for (let r of e.math) {
			let e = t.parent(r.start.node);
			if (e && r.state() < v.METRICS) {
				let t = n[+!!r.display];
				t.has(e) || t.set(e, this.getTestElement(e, r.display));
			}
		}
		let r = this.options.mtextInheritFont || this.options.merrorInheritFont, i = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
		for (let e of i.keys()) for (let t of n[e].keys()) i[e].set(t, this.measureMetrics(n[e].get(t), r));
		for (let e of i.keys()) for (let r of n[e].values()) t.remove(r);
		return i;
	}
	getTestElement(e, t) {
		let n = this.adaptor;
		if (!this.testInline) {
			this.testInline = this.html("mjx-test", { style: {
				display: "inline-block",
				width: "100%",
				"font-style": "normal",
				"font-weight": "normal",
				"font-size": "100%",
				"font-size-adjust": "none",
				"text-indent": 0,
				"text-transform": "none",
				"letter-spacing": "normal",
				"word-spacing": "normal",
				overflow: "hidden",
				height: "1px",
				"margin-right": "-1px"
			} }, [
				this.html("mjx-left-box", { style: {
					display: "inline-block",
					width: 0,
					float: "left"
				} }),
				this.html("mjx-ex-box", { style: {
					position: "absolute",
					overflow: "hidden",
					width: "1px",
					height: "60ex"
				} }),
				this.html("mjx-right-box", { style: {
					display: "inline-block",
					width: 0,
					float: "right"
				} })
			]), this.testDisplay = n.clone(this.testInline), n.setStyle(this.testDisplay, "display", "table"), n.setStyle(this.testDisplay, "margin-right", ""), n.setStyle(n.firstChild(this.testDisplay), "display", "none");
			let e = n.lastChild(this.testDisplay);
			n.setStyle(e, "display", "table-cell"), n.setStyle(e, "width", "10000em"), n.setStyle(e, "float", "");
		}
		return n.append(e, n.clone(t ? this.testDisplay : this.testInline));
	}
	measureMetrics(e, t) {
		let n = this.adaptor, r = t ? n.fontFamily(e) : "", i = n.fontSize(e), [a, o] = n.nodeSize(n.childNode(e, 1)), s = a ? o / 60 : i * this.options.exFactor;
		return {
			em: i,
			ex: s,
			containerWidth: a ? n.getStyle(e, "display") === "table" ? n.nodeSize(n.lastChild(e))[0] - 1 : n.nodeBBox(n.lastChild(e)).left - n.nodeBBox(n.firstChild(e)).left - 2 : 1e6,
			scale: Math.max(this.options.minScale, this.options.matchFontHeight ? s / this.font.params.x_height / i : 1),
			family: r
		};
	}
	styleSheet(e) {
		if (this.setDocument(e), this.styleJson.clear(), this.styleJson.addStyles(this.constructor.commonStyles), "getStyles" in e) for (let t of e.getStyles()) this.styleJson.addStyles(t);
		return this.addWrapperStyles(this.styleJson), this.addFontStyles(this.styleJson), this.html("style", { id: "MJX-styles" }, [this.text("\n" + this.styleJson.cssText + "\n")]);
	}
	addFontStyles(e) {
		e.addStyles(this.font.styles);
	}
	addWrapperStyles(e) {
		for (let t of this.factory.getKinds()) this.addClassStyles(this.factory.getNodeClass(t), e);
	}
	addClassStyles(e, t) {
		e.addStyles(t, this);
	}
	insertStyles(e) {}
	setDocument(e) {
		e && (this.document = e, this.adaptor.document = e.document);
	}
	html(e, t = {}, n = [], r) {
		return this.adaptor.node(e, t, n, r);
	}
	text(e) {
		return this.adaptor.text(e);
	}
	fixed(e, t = 3) {
		return Math.abs(e) < 6e-4 ? "0" : e.toFixed(t).replace(/\.?0+$/, "");
	}
	measureText(e, t, n = [
		"",
		!1,
		!1
	]) {
		let r = this.unknownText(e, t);
		if (t === "-explicitFont") {
			let e = this.cssFontStyles(n);
			this.adaptor.setAttributes(r, { style: e });
		}
		return this.measureTextNodeWithCache(r, e, t, n);
	}
	measureTextNodeWithCache(e, t, n, r = [
		"",
		!1,
		!1
	]) {
		n === "-explicitFont" && (n = [
			r[0],
			r[1] ? "T" : "F",
			r[2] ? "T" : "F",
			""
		].join("-")), this.unknownCache.has(n) || this.unknownCache.set(n, /* @__PURE__ */ new Map());
		let i = this.unknownCache.get(n), a = i.get(t);
		if (a) return a;
		let o = this.measureTextNode(e);
		return i.set(t, o), o;
	}
	cssFontStyles(e, t = {}) {
		let [n, r, i] = e;
		return t["font-family"] = this.font.getFamily(n), r && (t["font-style"] = "italic"), i && (t["font-weight"] = "bold"), t;
	}
	getFontData(e) {
		return e ||= new I(), [
			this.font.getFamily(e.get("font-family")),
			e.get("font-style") === "italic",
			e.get("font-weight") === "bold"
		];
	}
};
Mr.NAME = "Common", Mr.OPTIONS = Object.assign(Object.assign({}, br.OPTIONS), {
	scale: 1,
	minScale: .5,
	mtextInheritFont: !1,
	merrorInheritFont: !1,
	mtextFont: "",
	merrorFont: "serif",
	mathmlSpacing: !1,
	skipAttributes: {},
	exFactor: .5,
	displayAlign: "center",
	displayIndent: "0",
	displayOverflow: "overflow",
	linebreaks: {
		inline: !0,
		width: "100%",
		lineleading: .2,
		LinebreakVisitor: null
	},
	font: "",
	fontExtensions: [],
	htmlHDW: "auto",
	wrapperFactory: null,
	fontData: null,
	fontPath: jr,
	styleJson: null
}), Mr.commonStyles = {
	"mjx-container[overflow=\"scroll\"][display]": {
		overflow: "auto clip",
		"min-width": "initial !important"
	},
	"mjx-container[overflow=\"truncate\"][display]": {
		overflow: "hidden clip",
		"min-width": "initial !important"
	},
	"mjx-container[display]": {
		display: "block",
		"text-align": "center",
		"justify-content": "center",
		margin: ".7em 0",
		padding: ".3em 2px"
	},
	"mjx-container[display][width=\"full\"]": { display: "flex" },
	"mjx-container[justify=\"left\"]": {
		"text-align": "left",
		"justify-content": "left"
	},
	"mjx-container[justify=\"right\"]": {
		"text-align": "right",
		"justify-content": "right"
	}
};
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/Tree/WrapperFactory.js
var Nr = class extends wt {
	wrap(e, ...t) {
		return this.create(e.kind, e, ...t);
	}
}, Pr = class extends Nr {
	constructor() {
		super(...arguments), this.jax = null;
	}
	get Wrappers() {
		return this.node;
	}
};
Pr.defaultNodes = {};
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/Tree/Wrapper.js
var Fr = class {
	get kind() {
		return this.node.kind;
	}
	constructor(e, t) {
		this.factory = e, this.node = t;
	}
	wrap(e) {
		return this.factory.wrap(e);
	}
	walkTree(e, t) {
		if (e(this, t), "childNodes" in this) for (let n of this.childNodes) n && n.walkTree(e, t);
		return t;
	}
}, Ir = 2 / 18, Lr = 5 / 18;
function Rr(e, t, n) {
	return t ? e ? Ir : Lr : e ? n < Ir ? 0 : Ir : n;
}
var zr = {
	[R(0)]: "0",
	[R(2 / 18)]: "1",
	[R(3 / 18)]: "2",
	[R(4 / 18)]: "3",
	[R(5 / 18)]: "4",
	[R(6 / 18)]: "5"
}, Br = class e extends Fr {
	static addStyles(e, t) {
		e.addStyles(this.styles);
	}
	get jax() {
		return this.factory.jax;
	}
	get adaptor() {
		return this.factory.jax.adaptor;
	}
	get metrics() {
		return this.factory.jax.math.metrics;
	}
	get containerWidth() {
		return this.parent ? this.parent.containerWidth : this.jax.containerWidth;
	}
	get linebreaks() {
		return this.jax.linebreaks;
	}
	get linebreakOptions() {
		return this.jax.options.linebreaks;
	}
	get fixesPWidth() {
		return !this.node.notParent && !this.node.isToken;
	}
	get breakCount() {
		if (this._breakCount < 0) {
			let e = this.node;
			this._breakCount = e.isEmbellished ? this.coreMO().embellishedBreakCount : e.arity < 0 && !e.linebreakContainer && this.childNodes[0].isStack ? this.childNodes[0].breakCount : 0;
		}
		return this._breakCount;
	}
	breakTop(e, t) {
		return this.node.linebreakContainer || !this.parent ? e : this.parent.breakTop(e, this);
	}
	constructor(e, t, n = null) {
		super(e, t), this.parent = null, this.dom = null, this.removedStyles = null, this.styles = null, this.styleData = null, this.variant = "", this.bboxComputed = !1, this._breakCount = -1, this.lineBBox = [], this.stretch = wr, this.font = null, this.parent = n, this.font = e.jax.font, this.bbox = K.zero(), this.getStyles(), this.getStyleData(), this.getVariant(), this.getScale(), this.getSpace(), this.childNodes = t.childNodes.map((e) => {
			let n = this.wrap(e);
			return n.bbox.pwidth && (t.notParent || t.isKind("math")) && (this.bbox.pwidth = K.fullWidth), n;
		});
	}
	wrap(e, t = null) {
		let n = this.factory.wrap(e, t || this);
		return t && t.childNodes.push(n), this.jax.nodeMap.set(e, n), n;
	}
	getBBox(e = !0) {
		if (this.bboxComputed) return this.bbox;
		let t = e ? this.bbox : K.zero();
		return this.computeBBox(t), this.bboxComputed = e, t;
	}
	getOuterBBox(e = !0) {
		let t = this.getBBox(e);
		if (!this.styleData) return t;
		let n = this.styleData.padding, r = this.styleData.border?.width || [
			0,
			0,
			0,
			0
		], i = this.styleData.margin || [
			0,
			0,
			0,
			0
		], a = t.copy();
		for (let [, e, t] of K.boxSides) a[t] += n[e] + r[e] + i[e];
		return a;
	}
	getUnbrokenHD() {
		let e = this.breakCount + 1, t = 0, n = 0;
		for (let r = 0; r < e; r++) {
			let { h: e, d: i } = this.getLineBBox(r);
			e > t && (t = e), i > n && (n = i);
		}
		return [t, n];
	}
	computeBBox(e, t = !1) {
		e.empty();
		for (let t of this.childNodes) e.append(t.getOuterBBox());
		e.clean(), this.fixesPWidth && this.setChildPWidths(t) && this.computeBBox(e, !0);
	}
	getLineBBox(e) {
		if (!this.lineBBox[e]) {
			let t = this.breakCount;
			if (t) {
				let n = this.embellishedBBox(e) || this.computeLineBBox(e);
				this.lineBBox[e] = n, e === 0 && (!this.node.isKind("mo") && this.node.isEmbellished ? n.originalL = this.getBBox().L : n.L = this.getBBox().L), e === t && (n.R = this.getBBox().R);
			} else {
				let t = this.getOuterBBox();
				this.lineBBox[e] = q.from(t, this.linebreakOptions.lineleading);
			}
		}
		return this.lineBBox[e];
	}
	embellishedBBox(e) {
		if (!this.node.isEmbellished || this.node.isKind("mo")) return null;
		let t = this.coreMO();
		return t.moLineBBox(e, t.embellishedBreakStyle, this.getOuterBBox());
	}
	computeLineBBox(e) {
		return this.getChildLineBBox(this.childNodes[0], e);
	}
	getBreakNode(e) {
		if (!e.start) return [this, null];
		let [t, n] = e.start;
		if (this.node.isEmbellished) return [this, this.coreMO()];
		let r = this.childNodes[0]?.node?.isInferred || this.node.isKind("semantics") ? this.childNodes[0].childNodes : this.childNodes;
		return this.node.isToken || !r[t] ? [this, null] : r[t].getBreakNode(r[t].getLineBBox(n));
	}
	getChildLineBBox(e, t) {
		let n = this.breakCount, r = e.getLineBBox(t);
		return (this.styleData || this.bbox.L || this.bbox.R) && (r = r.copy()), this.addMiddleBorders(r), t === 0 ? (r.L += this.bbox.L, this.addLeftBorders(r)) : t === n && (r.R += this.bbox.R, this.addRightBorders(r)), r;
	}
	sideStyleSize(e) {
		let t = this.styleData.border, n = this.styleData.padding, r = this.styleData.margin;
		return (t?.width?.[e] || 0) + (n?.[e] || 0) + (r?.[e] || 0);
	}
	addLeftBorders(e) {
		this.styleData && (e.w += this.sideStyleSize(3));
	}
	addMiddleBorders(e) {
		this.styleData && (e.h += this.sideStyleSize(0), e.d += this.sideStyleSize(2));
	}
	addRightBorders(e) {
		this.styleData && (e.w += this.sideStyleSize(1));
	}
	setChildPWidths(e, t = null, n = !0) {
		if (e) return !1;
		n && (this.bbox.pwidth = "");
		let r = !1;
		for (let i of this.childNodes) {
			let a = i.getBBox();
			a.pwidth && i.setChildPWidths(e, t === null ? a.w : t, n) && (r = !0);
		}
		return r;
	}
	breakToWidth(e) {}
	invalidateBBox(e = !0) {
		(this.bboxComputed || this._breakCount >= 0) && (this.bboxComputed = !1, this.lineBBox = [], this._breakCount = -1, this.parent && e && this.parent.invalidateBBox());
	}
	copySkewIC(e) {
		let t = this.childNodes[0];
		t?.bbox?.sk && (e.sk = t.bbox.sk), t?.bbox?.dx && (e.dx = t.bbox.dx);
		let n = this.childNodes[this.childNodes.length - 1];
		n?.bbox?.ic && (e.ic = n.bbox.ic, e.w += e.ic);
	}
	getStyles() {
		let t = this.node.attributes.getExplicit("style");
		if (!t) return;
		let n = this.styles = new I(t);
		for (let t = 0, r = e.removeStyles.length; t < r; t++) {
			let r = e.removeStyles[t];
			n.get(r) && (this.removedStyles ||= {}, this.removedStyles[r] = n.get(r), n.set(r, ""));
		}
	}
	getStyleData() {
		if (!this.styles) return;
		let e = [
			,
			,
			,
			,
		].fill(0), t = [
			,
			,
			,
			,
		].fill(0), n = [
			,
			,
			,
			,
		].fill(0), r = [
			,
			,
			,
			,
		], i = [
			,
			,
			,
			,
		], a = !1, o = !1, s = !1;
		for (let [c, l] of K.boxSides) {
			let u = "border" + c, d = this.styles.get(u + "Width");
			d && (o = !0, n[l] = Math.max(0, this.length2em(d, 1)), r[l] = this.styles.get(u + "Style") || "solid", i[l] = this.styles.get(u + "Color"));
			let f = this.styles.get("padding" + c);
			f && (a = !0, e[l] = Math.max(0, this.length2em(f, 1)));
			let p = this.styles.get("margin" + c);
			p && (s = !0, t[l] = this.length2em(p, 1));
		}
		this.styleData = a || o || s ? {
			padding: e,
			margin: t,
			border: o ? {
				width: n,
				style: r,
				color: i
			} : null
		} : null;
	}
	getVariant() {
		if (!this.node.isToken) return;
		let t = this.node.attributes, n = t.get("mathvariant");
		if (t.hasExplicit("mathvariant")) this.font.getVariant(n) || (console.warn(`Invalid variant: ${n}`), n = "normal");
		else {
			let r = t.getList("fontfamily", "fontweight", "fontstyle");
			if (this.removedStyles) {
				let e = this.removedStyles;
				e.fontFamily && (r.family = e.fontFamily), e.fontWeight && (r.weight = e.fontWeight), e.fontStyle && (r.style = e.fontStyle);
			}
			r.fontfamily && (r.family = r.fontfamily), r.fontweight && (r.weight = r.fontweight), r.fontstyle && (r.style = r.fontstyle), r.weight && r.weight.match(/^\d+$/) && (r.weight = parseInt(r.weight) > 600 ? "bold" : "normal"), r.family ? n = this.explicitVariant(r.family, r.weight, r.style) : (this.node.getProperty("variantForm") && (n = "-tex-variant"), n = (e.BOLDVARIANTS[r.weight] || {})[n] || n, n = (e.ITALICVARIANTS[r.style] || {})[n] || n);
		}
		this.variant = n;
	}
	explicitVariant(e, t, n) {
		let r = this.styles;
		return r ||= this.styles = new I(), r.set("fontFamily", e), t && r.set("fontWeight", t), n && r.set("fontStyle", n), "-explicitFont";
	}
	getScale() {
		let e = 1, t = this.parent, n = t ? t.bbox.scale : 1, r = this.node.attributes, i = Math.min(r.get("scriptlevel"), 2), a = r.get("fontsize"), o = this.node.isToken || this.node.isKind("mstyle") ? r.get("mathsize") : r.getInherited("mathsize");
		if (i !== 0 && (e = r.get("scriptsizemultiplier") ** +i), this.removedStyles && this.removedStyles.fontSize && !a && (a = this.removedStyles.fontSize), a && !r.hasExplicit("mathsize") && (o = a), o !== "1" && (e *= this.length2em(o, 1, 1)), i !== 0) {
			let t = this.length2em(r.get("scriptminsize"), .4, 1);
			e < t && (e = t);
		}
		this.bbox.scale = e, this.bbox.rscale = e / n;
	}
	getSpace() {
		let e = this.isTopEmbellished(), t = this.node.hasSpacingAttributes();
		this.jax.options.mathmlSpacing || t ? e && this.getMathMLSpacing() : this.getTeXSpacing(e, t);
	}
	getMathMLSpacing() {
		let e = this.node.coreMO(), t = e.coreParent(), n = t.parent;
		if (!n || !n.isKind("mrow") || n.childNodes.length === 1) return;
		let r = n.childIndex(t);
		if (r === null) return;
		let i = e.getProperty("noDictDef"), a = e.attributes, o = a.get("scriptlevel") > 0;
		if (this.bbox.L = a.isSet("lspace") ? Math.max(0, this.length2em(a.get("lspace"))) : Rr(o, i, e.lspace), this.bbox.R = a.isSet("rspace") ? Math.max(0, this.length2em(a.get("rspace"))) : Rr(o, i, e.rspace), !r) return;
		let s = n.childNodes[r - 1];
		if (!s.isEmbellished) return;
		let c = this.jax.nodeMap.get(s).getBBox();
		c.R && (this.bbox.L = Math.max(0, this.bbox.L - c.R));
	}
	getTeXSpacing(e, t) {
		if (!t) {
			let e = this.node.texSpacing();
			e && (this.bbox.L = this.length2em(e));
		}
		if (e || t) {
			let e = this.node.coreMO().attributes;
			e.isSet("lspace") && (this.bbox.L = Math.max(0, this.length2em(e.get("lspace")))), e.isSet("rspace") && (this.bbox.R = Math.max(0, this.length2em(e.get("rspace"))));
		}
	}
	isTopEmbellished() {
		return this.node.isEmbellished && !(this.node.parent && this.node.parent.isEmbellished);
	}
	core() {
		return this.jax.nodeMap.get(this.node.core());
	}
	coreMO() {
		return this.jax.nodeMap.get(this.node.coreMO());
	}
	coreRScale() {
		let e = this.bbox.rscale, t = this.coreMO();
		for (; t !== this && t;) e *= t.bbox.rscale, t = t.parent;
		return e;
	}
	getRScale() {
		let e = 1, t = this;
		for (; t;) e *= t.bbox.rscale, t = t.parent;
		return e;
	}
	getText() {
		let e = "";
		if (this.node.isToken) for (let t of this.node.childNodes) t instanceof st && (e += t.getText());
		return e;
	}
	canStretch(e) {
		if (this.stretch = wr, this.node.isEmbellished) {
			let t = this.core();
			t && t.node !== this.node && t.canStretch(e) && (this.stretch = t.stretch);
		}
		return this.stretch.dir !== H.None;
	}
	getAlignShift() {
		let { indentalign: e, indentshift: t, indentalignfirst: n, indentshiftfirst: r } = this.node.attributes.getAllAttributes();
		return n !== "indentalign" && (e = n), r !== "indentshift" && (t = r), this.processIndent(e, t);
	}
	processIndent(e, t, n = "", r = "", i = this.metrics.containerWidth) {
		if (!this.jax.math.display) return ["left", 0];
		(!n || n === "auto") && (n = this.jax.math.root.getProperty("inlineMarked") ? "left" : this.jax.options.displayAlign), (!r || r === "auto") && (r = this.jax.math.root.getProperty("inlineMarked") ? "0" : this.jax.options.displayIndent), e === "auto" && (e = n), t === "auto" && (t = r, e === "right" && !t.match(/^\s*0[a-z]*\s*$/) && (t = ("-" + t.trim()).replace(/^--/, "")));
		let a = this.length2em(t, i);
		return [e, a];
	}
	getAlignX(e, t, n) {
		return n === "right" ? e - (t.w + t.R) * t.rscale : n === "left" ? t.L * t.rscale : (e - t.w * t.rscale) / 2;
	}
	getAlignY(e, t, n, r, i) {
		return i === "top" ? e - n : i === "bottom" ? r - t : i === "center" ? (e - n - (t - r)) / 2 : 0;
	}
	getWrapWidth(e) {
		return this.childNodes[e].getBBox().w;
	}
	getChildAlign(e) {
		return "left";
	}
	percent(e) {
		return ar(e);
	}
	em(e) {
		return R(e);
	}
	px(e, t = -tr) {
		return or(e, t, this.metrics.em);
	}
	length2em(e, t = 1, n = null) {
		n === null && (n = this.bbox.scale);
		let r = this.font.params.rule_thickness, i = Ie(e, {
			medium: 1,
			thin: 2 / 3,
			thick: 5 / 3
		}, 0);
		return i ? i * r : ir(e, t, n, this.jax.pxPerEm);
	}
	unicodeChars(e, t = this.variant) {
		let n = He(e), r = this.font.getVariant(t);
		if (r && r.chars) {
			let e = r.chars;
			n = n.map((t) => e[t]?.[3]?.smp || t);
		}
		return n;
	}
	remapChars(e) {
		return e;
	}
	mmlText(e) {
		return this.node.factory.create("text").setText(e);
	}
	mmlNode(e, t = {}, n = []) {
		return this.node.factory.create(e, t, n);
	}
	createMo(e) {
		let t = this.node.factory, n = t.create("text").setText(e), r = t.create("mo", { stretchy: !0 }, [n]);
		r.inheritAttributesFrom(this.node), r.parent = this.node.parent;
		let i = this.wrap(r);
		return i.parent = this, i;
	}
	getVariantChar(e, t) {
		let n = this.font.getChar(e, t) || [
			0,
			0,
			0,
			{ unknown: !0 }
		];
		return n.length === 3 && (n[3] = {}), n;
	}
	html(e, t = {}, n = []) {
		return this.jax.html(e, t, n);
	}
};
Br.kind = "unknown", Br.styles = {}, Br.removeStyles = [
	"fontSize",
	"fontFamily",
	"fontWeight",
	"fontStyle",
	"fontVariant",
	"font"
], Br.skipAttributes = {
	fontfamily: !0,
	fontsize: !0,
	fontweight: !0,
	fontstyle: !0,
	color: !0,
	background: !0,
	class: !0,
	href: !0,
	style: !0,
	xmlns: !0
}, Br.BOLDVARIANTS = {
	bold: {
		normal: "bold",
		italic: "bold-italic",
		fraktur: "bold-fraktur",
		script: "bold-script",
		"sans-serif": "bold-sans-serif",
		"sans-serif-italic": "sans-serif-bold-italic"
	},
	normal: {
		bold: "normal",
		"bold-italic": "italic",
		"bold-fraktur": "fraktur",
		"bold-script": "script",
		"bold-sans-serif": "sans-serif",
		"sans-serif-bold-italic": "sans-serif-italic"
	}
}, Br.ITALICVARIANTS = {
	italic: {
		normal: "italic",
		bold: "bold-italic",
		"sans-serif": "sans-serif-italic",
		"bold-sans-serif": "sans-serif-bold-italic"
	},
	normal: {
		italic: "normal",
		"bold-italic": "bold",
		"sans-serif-italic": "sans-serif",
		"sans-serif-bold-italic": "bold-sans-serif"
	}
};
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrapper.js
var J = class e extends Br {
	constructor() {
		super(...arguments), this.dx = 0, this.utext = "";
	}
	toSVG(e) {
		this.toEmbellishedSVG(e) || this.addChildren(this.standardSvgNodes(e));
	}
	toEmbellishedSVG(e) {
		if (e.length <= 1 || !this.node.isEmbellished || this.node.parent.isEmbellished) return !1;
		let t = this.coreMO().embellishedBreakStyle, n = [];
		for (let [r, i] of [[e[0], "before"], [e[1], "after"]]) t === i ? n.push(this.createSvgNodes([r])[0]) : (this.toSVG([r]), n.push(this.dom[0]), this.place(0, 0));
		return this.dom = n, !0;
	}
	addChildren(e) {
		let t = 0;
		for (let n of this.childNodes) {
			n.toSVG(e);
			let r = n.getOuterBBox();
			n.dom && n.place(t + r.L * r.rscale, 0), t += (r.L + r.w + r.R) * r.rscale;
		}
	}
	standardSvgNodes(e) {
		let t = this.createSvgNodes(e);
		return this.handleStyles(), this.handleScale(), this.handleBorder(), this.handleColor(), this.handleAttributes(), t;
	}
	createSvgNodes(e) {
		this.dom = e.map((e) => this.svg("g", { "data-mml-node": this.node.kind })), e = this.handleHref(e);
		for (let t of e.keys()) this.adaptor.append(e[t], this.dom[t]);
		return this.dom;
	}
	handleHref(e) {
		let t = this.node.attributes.get("href");
		if (!t) return e;
		let n = 0, r = this.node.isEmbellished && !this.node.isKind("mo");
		return e.map((e) => {
			e = this.adaptor.append(e, this.svg("a", { href: t }));
			let { h: i, d: a, w: o } = r ? this.getOuterBBox() : this.getLineBBox(n);
			return this.adaptor.append(this.dom[n++], this.svg("rect", {
				"data-hitbox": !0,
				fill: "none",
				stroke: "none",
				"pointer-events": "all",
				width: this.fixed(o),
				height: this.fixed(i + a),
				x: n === 1 || r ? this.fixed(-this.dx) : 0,
				y: this.fixed(-a)
			})), e;
		});
	}
	handleStyles() {
		if (!this.styles) return;
		let e = this.styles.cssText;
		e && this.dom.forEach((t) => this.adaptor.setAttribute(t, "style", e));
		let t = (this.styleData?.padding || [
			0,
			0,
			0,
			0
		])[3], n = (this.styleData?.margin || [
			0,
			0,
			0,
			0
		])[3], r = (this.styleData?.border?.width || [
			0,
			0,
			0,
			0
		])[3];
		if ((t || r) && (this.dx = t + r), n) {
			let e = `translate(${this.fixed(n)},0)`;
			this.dom.forEach((t) => this.adaptor.setAttribute(t, "transform", e));
		}
	}
	handleScale() {
		if (this.bbox.rscale !== 1) {
			let e = "scale(" + this.fixed(this.bbox.rscale / 1e3, 3) + ")";
			this.dom.forEach((t) => this.adaptor.setAttribute(t, "transform", e));
		}
	}
	handleColor() {
		let e = this.adaptor, t = this.node.attributes, n = t.getExplicit("mathcolor") || t.getExplicit("color"), r = t.getExplicit("mathbackground") || t.getExplicit("background") || this.styles?.get("background-color");
		if (n && this.dom.forEach((t) => {
			e.setAttribute(t, "fill", n), e.setAttribute(t, "stroke", n);
		}), r) {
			let t = 0, n = this.node.isEmbellished && !this.node.isKind("mo");
			this.dom.forEach((i) => {
				let { h: a, d: o, w: s } = n ? this.getOuterBBox() : this.getLineBBox(t++), c = this.svg("rect", {
					fill: r,
					x: t === 1 || n ? this.fixed(-this.dx) : 0,
					y: this.fixed(-o),
					width: this.fixed(s),
					height: this.fixed(a + o),
					"data-bgcolor": !0
				}), l = e.firstChild(i);
				l ? e.insert(c, l) : e.append(i, c);
			});
		}
	}
	handleBorder() {
		let t = this.styleData?.border;
		if (!t) return;
		let n = this.styleData?.margin ?? [
			0,
			0,
			0,
			0
		], r = e.borderFuzz, i = this.adaptor, a = 0, o = this.dom.length - 1, s = this.node.isEmbellished && !this.node.isKind("mo");
		for (let e of this.dom) {
			let c = +(!o || !a), l = +(!o || a === o), u = s ? this.getOuterBBox() : this.getLineBBox(a++), d = u.h - n[0] + r, f = u.d - n[2] + r, p = u.w - n[1] - n[3] + r, m = [p, d], h = [-r, d], g = [p, -f], ee = [-r, -f], te = [p - l * t.width[1], d - t.width[0]], ne = [-r + c * t.width[3], d - t.width[0]], re = [p - l * t.width[1], -f + t.width[2]], ie = [-r + c * t.width[3], -f + t.width[2]], ae = [
				[
					h,
					m,
					te,
					ne
				],
				[
					g,
					m,
					te,
					re
				],
				[
					ee,
					g,
					re,
					ie
				],
				[
					ee,
					h,
					ne,
					ie
				]
			], oe = i.firstChild(e), se = c * this.dx;
			for (let n of [
				0,
				1,
				2,
				3
			]) {
				if (!t.width[n] || n === 3 && !c || n === 1 && !l) continue;
				let r = ae[n];
				t.style[n] === "dashed" || t.style[n] === "dotted" ? this.addBorderBroken(r, t.color[n], t.style[n], t.width[n], n, e, se) : this.addBorderSolid(r, t.color[n], oe, e, se);
			}
		}
	}
	addBorderSolid(e, t, n, r, i) {
		let a = this.svg("polygon", {
			points: e.map(([e, t]) => `${this.fixed(e - i)},${this.fixed(t)}`).join(" "),
			stroke: "none"
		});
		t && this.adaptor.setAttribute(a, "fill", t), n ? this.adaptor.insert(a, n) : this.adaptor.append(r, a);
	}
	addBorderBroken(e, t, n, r, i, a, o) {
		let s = n === "dotted", c = r / 2, [l, u, d, f] = [
			[
				c,
				-c,
				-c,
				-c
			],
			[
				-c,
				c,
				-c,
				-c
			],
			[
				c,
				c,
				-c,
				c
			],
			[
				c,
				c,
				c,
				-c
			]
		][i], [p, m] = e, h = p[0] + l - o, g = p[1] + u, ee = m[0] + d - o, te = m[1] + f, ne = Math.abs(i % 2 ? te - g : ee - h), re = Math.ceil(s ? ne / (2 * r) : (ne - r) / (4 * r)), ie = ne / (4 * re + 1), ae = this.svg("line", {
			x1: this.fixed(h),
			y1: this.fixed(g),
			x2: this.fixed(ee),
			y2: this.fixed(te),
			"stroke-width": this.fixed(r),
			stroke: t,
			"stroke-linecap": s ? "round" : "square",
			"stroke-dasharray": s ? [1, this.fixed(ne / re - .002)].join(" ") : [this.fixed(ie), this.fixed(3 * ie)].join(" ")
		}), oe = this.adaptor, se = oe.firstChild(a);
		se ? oe.insert(ae, se) : oe.append(a, ae);
	}
	handleAttributes() {
		let t = this.adaptor, n = this.node.attributes, r = n.getAllDefaults(), i = e.skipAttributes;
		for (let e of n.getExplicitNames()) (i[e] === !1 || !(e in r) && !i[e] && !t.hasAttribute(this.dom[0], e)) && this.dom.forEach((r) => t.setAttribute(r, e, n.getExplicit(e)));
		if (n.get("class")) for (let e of Ge(n.get("class"))) this.dom.forEach((n) => t.addClass(n, e));
	}
	place(e, t, n = null) {
		if (n || (e += this.dx * this.bbox.rscale), !(e || t)) return;
		n || (n = this.dom[0], t = this.handleId(t));
		let r = `translate(${this.fixed(e)},${this.fixed(t)})`, i = this.adaptor.getAttribute(n, "transform") || "";
		this.adaptor.setAttribute(n, "transform", r + (i ? " " + i : ""));
	}
	handleId(e) {
		if (!this.node.attributes || !this.node.attributes.get("id")) return e;
		let t = this.adaptor, { h: n, rscale: r } = this.getBBox(), i = t.childNodes(this.dom[0]);
		i.forEach((e) => t.remove(e));
		let a = this.svg("g", {
			"data-idbox": !0,
			transform: `translate(0,${this.fixed(-n)})`
		}, i);
		return t.append(this.dom[0], this.svg("text", { "data-id-align": !0 }, [this.text("")])), t.append(this.dom[0], a), e + n * r;
	}
	firstChild(e = this.dom[0]) {
		let t = this.adaptor, n = t.firstChild(e);
		return n && t.kind(n) === "text" && t.getAttribute(n, "data-id-align") && (n = t.firstChild(t.next(n))), n && t.kind(n) === "rect" && t.getAttribute(n, "data-hitbox") && (n = t.next(n)), n;
	}
	placeChar(e, t, n, r, i = null, a = !1) {
		i === null && (i = this.variant);
		let o = e.toString(16).toUpperCase(), [, , s, c] = this.getVariantChar(i, e);
		if (c.unknown) return this.utext += String.fromCodePoint(e), a ? 0 : this.addUtext(t, n, r, i);
		let l = this.addUtext(t, n, r, i);
		if ("p" in c) {
			t += l;
			let e = c.p ? "M" + c.p + "Z" : "";
			return this.place(t, n, this.adaptor.append(r, this.charNode(i, o, e))), s + l;
		}
		if ("c" in c) {
			let e = this.adaptor.append(r, this.svg("g", { "data-c": o }));
			this.place(t + l, n, e), t = 0;
			for (let r of this.unicodeChars(c.c, i)) t += this.placeChar(r, t, n, e, i);
			return t + l;
		}
		return s;
	}
	addUtext(e, t, n, r) {
		let i = this.utext;
		if (!i) return 0;
		this.utext = "";
		let a = this.adaptor.append(n, this.jax.unknownText(i, r));
		return this.place(e, t, a), this.jax.measureTextNodeWithCache(a, i, r).w;
	}
	charNode(e, t, n) {
		return this.jax.options.fontCache === "none" ? this.pathNode(t, n) : this.useNode(e, t, n);
	}
	pathNode(e, t) {
		return this.svg("path", {
			"data-c": e,
			d: t
		});
	}
	useNode(e, t, n) {
		let r = this.svg("use", { "data-c": t }), i = "#" + this.jax.fontCache.cachePath(e, t, n);
		return this.adaptor.setAttribute(r, "href", i, this.jax.options.useXlink ? Ao : null), r;
	}
	drawBBox() {
		let { w: e, h: t, d: n } = this.getOuterBBox(), r = (this.styleData?.border?.width || [
			0,
			0,
			0,
			0
		])[3], i = { style: { opacity: .25 } };
		r && (i.transform = `translate(${this.fixed(-r)}, 0)`);
		let a = this.svg("g", i, [this.svg("rect", {
			fill: "red",
			height: this.fixed(t),
			width: this.fixed(e)
		}), this.svg("rect", {
			fill: "green",
			height: this.fixed(n),
			width: this.fixed(e),
			y: this.fixed(-n)
		})]), o = this.dom[0] || this.parent.dom[0];
		this.adaptor.append(o, a);
	}
	html(e, t = {}, n = []) {
		return this.jax.html(e, t, n);
	}
	svg(e, t = {}, n = []) {
		return this.jax.svg(e, t, n);
	}
	text(e) {
		return this.jax.text(e);
	}
	fixed(e, t = 1) {
		return this.jax.fixed(e * 1e3, t);
	}
};
J.kind = "unknown", J.borderFuzz = .005;
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Wrappers/math.js
function Vr(e) {
	return class extends e {
		getWrapWidth(e) {
			return this.parent ? this.getBBox().w : this.metrics.containerWidth / this.jax.pxPerEm;
		}
		computeBBox(e, t = !1) {
			super.computeBBox(e, t);
			let n = this.node.attributes;
			if (!this.parent && this.jax.math.display && n.get("overflow") === "linebreak") {
				let t = this.containerWidth;
				e.w > t && this.childNodes[0].breakToWidth(t), e.updateFrom(this.childNodes[0].getBBox());
			}
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/math.js
var Hr = class extends at {
	get kind() {
		return "math";
	}
	get linebreakContainer() {
		return !0;
	}
	get linebreakAlign() {
		return "";
	}
	setChildInheritedAttributes(e, t, n, r) {
		this.attributes.get("mode") === "display" && this.attributes.setInherited("display", "block"), e = this.addInheritedAttributes(e, this.attributes.getAllAttributes()), t = !!this.attributes.get("displaystyle") || !this.attributes.get("displaystyle") && this.attributes.get("display") === "block", this.attributes.setInherited("displaystyle", t), n = this.attributes.get("scriptlevel") || this.constructor.defaults.scriptlevel, super.setChildInheritedAttributes(e, t, n, r);
	}
	verifyTree(e = null) {
		super.verifyTree(e), this.parent && this.mError("Improper nesting of math tags", e, !0);
	}
};
Hr.defaults = Object.assign(Object.assign({}, at.defaults), {
	mathvariant: "normal",
	mathsize: "normal",
	mathcolor: "",
	mathbackground: "transparent",
	dir: "ltr",
	scriptlevel: 0,
	displaystyle: !1,
	display: "inline",
	maxwidth: "",
	overflow: "linebreak",
	altimg: "",
	"altimg-width": "",
	"altimg-height": "",
	"altimg-valign": "",
	alttext: "",
	cdgroup: "",
	scriptsizemultiplier: 1 / Math.sqrt(2),
	scriptminsize: ".4em",
	infixlinebreakstyle: "before",
	lineleading: "100%",
	linebreakmultchar: "⁢",
	indentshift: "auto",
	indentalign: "auto",
	indenttarget: "",
	indentalignfirst: "indentalign",
	indentshiftfirst: "indentshift",
	indentalignlast: "indentalign",
	indentshiftlast: "indentshift"
});
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/zero.js
var Ur = [
	"url(data:application/x-font-woff;charset=utf-8;base64,",
	"T1RUTwAJAIAAAwAQQ0ZGIGnFMZkAAARQAAAAlE9TLzJpUWOBAAABAAAAAGBjbWFwAAwAUwAABAQAAAAs",
	"aGVhZCFRvpAAAACcAAAANmhoZWEC8AD9AAAA1AAAACRobXR4A+gAAAAABOQAAAAIbWF4cAACUAAAAAD4",
	"AAAABm5hbWVNb8+2AAABYAAAAqNwb3N0AAMAAAAABDAAAAAgAAEAAAABAABVWOu4Xw889QADA+gAAAAA",
	"3ym+2AAAAADfKb7YAAAAAAPoAAAAAAADAAIAAAAAAAAAAQAAAu79EgAAA+gAAAAAAAAAAQAAAAAAAAAA",
	"AAAAAAAAAAIAAFAAAAIAAAADA+gB9AAFAAACigK7AAAAjAKKArsAAAHfADEBAgAAAAAAAAAAAAAAAAAA",
	"AAEAAAAAAAAAAAAAAABYWFhYAEAAIAAgAu79EgAAAu4C7gAAAAEAAAAAAXcAAAAgACAAAAAAACIBngAB",
	"AAAAAAAAAAEAQQABAAAAAAABAAsAAAABAAAAAAACAAcAIQABAAAAAAADABUAxgABAAAAAAAEABMANgAB",
	"AAAAAAAFAAsApQABAAAAAAAGABIAbwABAAAAAAAHAAEAQQABAAAAAAAIAAEAQQABAAAAAAAJAAEAQQAB",
	"AAAAAAAKAAEAQQABAAAAAAALAAEAQQABAAAAAAAMAAEAQQABAAAAAAANAAEAQQABAAAAAAAOAAEAQQAB",
	"AAAAAAAQAAsAAAABAAAAAAARAAcAIQADAAEECQAAAAIAXwADAAEECQABABYACwADAAEECQACAA4AKAAD",
	"AAEECQADACoA2wADAAEECQAEACYASQADAAEECQAFABYAsAADAAEECQAGACQAgQADAAEECQAHAAIAXwAD",
	"AAEECQAIAAIAXwADAAEECQAJAAIAXwADAAEECQAKAAIAXwADAAEECQALAAIAXwADAAEECQAMAAIAXwAD",
	"AAEECQANAAIAXwADAAEECQAOAAIAXwADAAEECQAQABYACwADAAEECQARAA4AKG1qeC1sbS16ZXJvAG0A",
	"agB4AC0AbABtAC0AegBlAHIAb1JlZ3VsYXIAUgBlAGcAdQBsAGEAcm1qeC1sbS16ZXJvIFJlZ3VsYXIA",
	"bQBqAHgALQBsAG0ALQB6AGUAcgBvACAAUgBlAGcAdQBsAGEAcm1qeC1sbS16ZXJvUmVndWxhcgBtAGoA",
	"eAAtAGwAbQAtAHoAZQByAG8AUgBlAGcAdQBsAGEAclZlcnNpb24gMC4xAFYAZQByAHMAaQBvAG4AIAAw",
	"AC4AMSA6bWp4LWxtLXplcm8gUmVndWxhcgAgADoAbQBqAHgALQBsAG0ALQB6AGUAcgBvACAAUgBlAGcA",
	"dQBsAGEAcgAAAAABAAMAAQAAAAwABAAgAAAABAAEAAEAAAAg//8AAAAg////4QABAAAAAAADAAAAAAAA",
	"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEAQABAQETbWp4LWxtLXplcm9SZWd1bGFyAAEBASf4GwD4",
	"HAL4HQP4HgSLi/mC+nwFHQAAAIYPHQAAAIkRix0AAACUEgAFAQEMHyoxNlZlcnNpb24gMC4xbWp4LWxt",
	"LXplcm8gUmVndWxhcm1qeC1sbS16ZXJvUmVndWxhcnNwYWNlAAAAAYsAAgEBAwaLDvp8DgAAAAAD6AAA",
	") format(\"woff\")"
].join(""), Wr = (function() {
	var e;
	let t = Vr(J);
	return e = class extends t {
		handleDisplay() {
			let [e, t] = this.getAlignShift();
			if (e !== "center" && this.adaptor.setAttribute(this.jax.container, "justify", e), this.bbox.pwidth === K.fullWidth) {
				if (this.adaptor.setAttribute(this.jax.container, "width", "full"), this.jax.table) {
					let { L: n, w: r, R: i } = this.jax.table.getOuterBBox();
					e === "right" ? i = Math.max(i || -t, -t) : e === "left" ? n = Math.max(n || t, t) : e === "center" && (r += 2 * Math.abs(t)), this.jax.minwidth = Math.max(0, n + r + i);
				}
			} else this.jax.shift = t;
		}
		toSVG(e) {
			super.toSVG(e);
			let t = this.adaptor;
			this.node.attributes.get("display") === "block" && (t.setAttribute(this.jax.container, "display", "true"), this.handleDisplay());
		}
		setChildPWidths(e, t = null, n = !0) {
			return super.setChildPWidths(e, this.parent ? t : this.metrics.containerWidth / this.jax.pxPerEm, !1);
		}
	}, e.kind = Hr.prototype.kind, e.styles = {
		"mjx-container[jax=\"SVG\"] mjx-break": {
			"white-space": "normal",
			"line-height": "0",
			"clip-path": "rect(0 0 0 0)",
			"font-family": "MJX-ZERO ! important"
		},
		"mjx-break[size=\"0\"]": { "letter-spacing": "-0.999em" },
		"mjx-break[size=\"1\"]": { "letter-spacing": "-0.889em" },
		"mjx-break[size=\"2\"]": { "letter-spacing": "-0.833em" },
		"mjx-break[size=\"3\"]": { "letter-spacing": "-0.778em" },
		"mjx-break[size=\"4\"]": { "letter-spacing": "-0.722em" },
		"mjx-break[size=\"5\"]": { "letter-spacing": "-0.667em" },
		"mjx-container[jax=\"SVG\"] mjx-break[newline]::before": {
			"white-space": "pre",
			content: "\"\\A\""
		},
		"mjx-break[newline] + svg[width=\"0.054ex\"]": { "margin-right": "-1px" },
		"mjx-break[prebreak]": { "letter-spacing": "-.999em" },
		"@font-face /* zero */": {
			"font-family": "MJX-ZERO",
			src: Ur
		}
	}, e;
})();
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Wrappers/mrow.js
function Gr(e) {
	return class extends e {
		stretchChildren() {
			let e = [];
			for (let t of this.childNodes) t.canStretch(H.Vertical) && e.push(t);
			let t = e.length, n = this.childNodes.length;
			if (t && n > 1) {
				let r = 0, i = 0, a = t > 1 && t === n;
				for (let e of this.childNodes) {
					let t = e.stretch.dir === H.None;
					if (a || t) {
						let t = e.getBBox().rscale, [n, a] = e.getUnbrokenHD();
						n *= t, a *= t, n > r && (r = n), a > i && (i = a);
					}
				}
				for (let t of e) {
					let e = t.coreRScale();
					t.coreMO().getStretchedVariant([r / e, i / e]);
				}
			}
		}
		get fixesPWidth() {
			return !1;
		}
		get breakCount() {
			return this._breakCount < 0 && (this._breakCount = this.childNodes.length ? this.childNodes.reduce((e, t) => e + t.breakCount, 0) : 0), this._breakCount;
		}
		breakTop(e, t) {
			let n = this;
			return this.isStack ? this.parent.breakTop(n, n) : n;
		}
		constructor(e, t, n = null) {
			super(e, t, n), this.dh = 0;
			let r = this;
			this.isStack = !this.parent || this.parent.node.isInferred || this.parent.breakTop(r, r) !== r, this.stretchChildren();
			for (let e of this.childNodes) if (e.bbox.pwidth) {
				this.bbox.pwidth = K.fullWidth;
				break;
			}
		}
		computeBBox(e, t = !1) {
			let n = this.breakCount;
			this.lineBBox = n ? [new q({
				h: .75,
				d: .25,
				w: 0
			}, [0, 0])] : [], e.empty();
			for (let t of this.childNodes.keys()) {
				let r = this.childNodes[t];
				e.append(r.getOuterBBox()), n && this.computeChildLineBBox(r, t);
			}
			e.clean(), n && !this.coreMO().node.isEmbellished && this.computeLinebreakBBox(e), this.fixesPWidth && this.setChildPWidths(t) && this.computeBBox(e, !0), this.vboxAdjust(e);
		}
		computeLinebreakBBox(e) {
			e.empty();
			let t = this.isStack, n = this.lineBBox, r = n.length - 1;
			if (t) for (let e of n.keys()) {
				let t = n[e];
				this.addMiddleBorders(t), e === 0 && this.addLeftBorders(t), e === r && this.addRightBorders(t);
			}
			let i = 0;
			for (let t of n.keys()) {
				let r = n[t];
				e.combine(r, 0, i), i -= Math.max(.25, r.d) + r.lineLeading + Math.max(.75, n[t + 1]?.h || 0);
			}
			t ? (n[0].L = this.bbox.L, n[r].R = this.bbox.R) : (e.w = Math.max(...this.lineBBox.map((e) => e.w)), this.shiftLines(e), !this.jax.math.display && !this.linebreakOptions.inline && (e.pwidth = K.fullWidth, this.node.isInferred && (this.parent.bbox.pwidth = K.fullWidth))), e.clean();
		}
		vboxAdjust(e) {
			if (!this.parent) return;
			let t = this.breakCount, n = this.parent.node.attributes.get("data-vertical-align");
			if (t && n === "bottom") this.dh = t ? e.d - this.lineBBox[t - 1].d : 0;
			else if (n === "center" || t && n === "middle") {
				let { h: t, d: n } = e, r = this.font.params.axis_height;
				this.dh = (t + n) / 2 + r - t;
			} else {
				this.dh = 0;
				return;
			}
			e.h += this.dh, e.d -= this.dh;
		}
		computeChildLineBBox(e, t) {
			let n = this.lineBBox[this.lineBBox.length - 1];
			n.end = [t, 0], n.append(e.getLineBBox(0));
			let r = e.breakCount + 1;
			if (r !== 1) for (let n = 1; n < r; n++) {
				let r = new q({
					h: .75,
					d: .25,
					w: 0
				});
				r.start = r.end = [t, n], r.isFirst = !0, r.append(e.getLineBBox(n)), this.lineBBox.push(r);
			}
		}
		getLineBBox(e) {
			return this.getBBox(), this.isStack ? super.getLineBBox(e) : q.from(this.getOuterBBox(), this.linebreakOptions.lineleading);
		}
		shiftLines(e) {
			let t = e.w, n = this.lineBBox, r = n.length - 1, [i, a] = n[1].indentData?.[0] || ["left", "0"];
			for (let o of n.keys()) {
				let s = n[o], [c, l] = o === 0 ? [i, a] : s.indentData?.[o === r ? 2 : 1] || ["left", "0"], [u, d] = this.processIndent(c, l, i, a, t);
				s.L = 0, s.L = this.getAlignX(t, s, u) + d;
				let f = s.L + s.w;
				f > e.w && (e.w = f);
			}
		}
		setChildPWidths(e, t = null, n = !0) {
			return this.breakCount ? !e && (t !== null && this.bbox.w !== t && (this.bbox.w = t, this.shiftLines(this.bbox)), !0) : super.setChildPWidths(e, t, n);
		}
		breakToWidth(e) {
			this.linebreaks.breakToWidth(this, e);
		}
	};
}
function Kr(e) {
	return class extends e {
		getScale() {
			this.bbox.scale = this.parent.bbox.scale, this.bbox.rscale = 1;
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/mrow.js
var qr = class extends x {
	constructor() {
		super(...arguments), this._core = null;
	}
	get kind() {
		return "mrow";
	}
	get isSpacelike() {
		for (let e of this.childNodes) if (!e.isSpacelike) return !1;
		return !0;
	}
	get isEmbellished() {
		let e = !1, t = 0;
		for (let n of this.childNodes) {
			if (n) {
				if (n.isEmbellished) {
					if (e) return !1;
					e = !0, this._core = t;
				} else if (!n.isSpacelike) return !1;
			}
			t++;
		}
		return e;
	}
	core() {
		return !this.isEmbellished || this._core == null ? this : this.childNodes[this._core];
	}
	coreMO() {
		return !this.isEmbellished || this._core == null ? this : this.childNodes[this._core].coreMO();
	}
	nonSpaceLength() {
		let e = 0;
		for (let t of this.childNodes) t && !t.isSpacelike && e++;
		return e;
	}
	firstNonSpace() {
		for (let e of this.childNodes) if (e && !e.isSpacelike) return e;
		return null;
	}
	lastNonSpace() {
		let e = this.childNodes.length;
		for (; --e >= 0;) {
			let t = this.childNodes[e];
			if (t && !t.isSpacelike) return t;
		}
		return null;
	}
	setTeXclass(e) {
		if (this.getProperty("open") != null || this.getProperty("close") != null) {
			this.getPrevClass(e), e = null;
			for (let t of this.childNodes) e = t.setTeXclass(e);
			return this.texClass ??= b.INNER, this;
		}
		for (let t of this.childNodes) e = t.setTeXclass(e);
		return this.childNodes[0] && this.updateTeXclass(this.childNodes[0]), e;
	}
};
qr.defaults = Object.assign({}, x.defaults);
var Jr = class extends qr {
	get kind() {
		return "inferredMrow";
	}
	get isInferred() {
		return !0;
	}
	get notParent() {
		return !0;
	}
	toString() {
		return "[" + this.childNodes.join(",") + "]";
	}
};
Jr.defaults = qr.defaults;
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/mrow.js
var Yr = (function() {
	var e;
	let t = Gr(J);
	return e = class extends t {
		constructor() {
			super(...arguments), this.linebreakCount = 0;
		}
		toSVG(e) {
			this.getBBox();
			let t = this.linebreakCount = this.isStack ? 0 : this.breakCount;
			e = t || !this.node.isInferred ? this.standardSvgNodes(e) : this.getSvgNodes(e), this.addChildren(e), t && this.placeLines(e);
		}
		getSvgNodes(e) {
			if (this.dh) {
				let t = this.svg("g", { transform: `translate(0 ${this.fixed(this.dh)})` });
				e = [this.adaptor.append(e[0], t)];
			}
			return this.dom = e, e;
		}
		placeLines(e) {
			let t = this.lineBBox, n = this.jax.math.display, r = this.dh;
			for (let i of e.keys()) {
				let a = t[i];
				this.place(a.L || 0, r, e[i]), r -= Math.max(.25, a.d) + (n ? a.lineLeading : 0) + Math.max(.75, t[i + 1]?.h || 0);
			}
		}
		createSvgNodes(e) {
			let t = this.linebreakCount;
			if (!t) return super.createSvgNodes(e);
			let n = this.adaptor, r = this.node.isInferred ? { "data-mjx-linestack": !0 } : { "data-mml-node": this.node.kind };
			this.dom = [n.append(e[0], this.svg("g", r))], this.dom = [n.append(this.handleHref(e)[0], this.dom[0])];
			let i = Array(t);
			for (let e = 0; e <= t; e++) i[e] = n.append(this.dom[0], this.svg("g", {
				"data-mjx-linebox": !0,
				"data-mjx-lineno": e
			}));
			return i;
		}
		addChildren(e) {
			let t = 0, n = 0, r = this.node.isEmbellished;
			for (let i of this.childNodes) {
				let a = r ? 0 : i.breakCount;
				if (i.toSVG(e.slice(n, n + a + 1)), i.dom) {
					let e = 0;
					for (let n of i.dom) {
						if (n) {
							let r = e ? 0 : i.dx, a = i.getLineBBox(e++);
							t += (a.L + r) * a.rscale, this.place(t, 0, n), t += (a.w + a.R - r) * a.rscale;
						}
						a && (t = 0);
					}
					if (a) {
						let e = i.getLineBBox(a);
						t += (e.w + e.R) * e.rscale;
					}
				}
				n += a;
			}
		}
	}, e.kind = qr.prototype.kind, e;
})(), Xr = (function() {
	var e;
	let t = Kr(Yr);
	return e = class extends t {}, e.kind = Jr.prototype.kind, e;
})();
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Wrappers/mi.js
function Zr(e) {
	return class extends e {
		computeBBox(e, t = !1) {
			super.computeBBox(e), this.copySkewIC(e);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/mi.js
var Qr = class e extends S {
	constructor() {
		super(...arguments), this.texclass = b.ORD;
	}
	get kind() {
		return "mi";
	}
	setInheritedAttributes(t = {}, n = !1, r = 0, i = !1) {
		super.setInheritedAttributes(t, n, r, i), this.getText().match(e.singleCharacter) && !t.mathvariant && this.attributes.setInherited("mathvariant", "italic");
	}
	setTeXclass(t) {
		this.getPrevClass(t);
		let n = this.getText();
		return n.length > 1 && n.match(e.operatorName) && this.attributes.get("mathvariant") === "normal" && this.getProperty("autoOP") === void 0 && this.getProperty("texClass") === void 0 && (this.texClass = b.OP, this.setProperty("autoOP", !0)), this;
	}
};
Qr.defaults = Object.assign({}, S.defaults), Qr.operatorName = /^[a-z][a-z0-9]*$/i, Qr.singleCharacter = /^[\uD800-\uDBFF]?.[\u0300-\u036F\u1AB0-\u1ABE\u1DC0-\u1DFF\u20D0-\u20EF]*$/;
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/mi.js
var $r = (function() {
	var e;
	let t = Zr(J);
	return e = class extends t {}, e.kind = Qr.prototype.kind, e;
})(), ei = class extends G {
	static charOptions(e, t) {
		return super.charOptions(e, t);
	}
	static addExtension(e, t = "") {
		super.addExtension(e, t), Tr(this, "variantCacheIds", e.cacheIds);
	}
};
ei.OPTIONS = Object.assign(Object.assign({}, G.OPTIONS), { dynamicPrefix: "./svg/dynamic" }), ei.JAX = "SVG";
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Wrappers/mo.js
function ti(e) {
	return class extends e {
		get breakCount() {
			return +!!this.breakStyle;
		}
		get embellishedBreakCount() {
			return +!!this.embellishedBreakStyle;
		}
		get embellishedBreakStyle() {
			return this.breakStyle || this.getBreakStyle();
		}
		protoBBox(e) {
			let t = this.stretch.dir !== H.None;
			t && this.size === null && this.getStretchedVariant([0]), !(t && this.size < 0) && (super.computeBBox(e), e.w === 0 && this.node.attributes.hasExplicit("fence") && this.node.getText() === "" && (this.node.texClass === b.OPEN || this.node.texClass === b.CLOSE) && !this.jax.options.mathmlSpacing && (e.R = this.font.params.nulldelimiterspace), this.copySkewIC(e));
		}
		getAccentOffset() {
			let e = K.empty();
			return this.protoBBox(e), -e.w / 2;
		}
		getCenterOffset(e = null) {
			return e || (e = K.empty(), super.computeBBox(e)), (e.h + e.d) / 2 + this.font.params.axis_height - e.h;
		}
		getStretchedVariant(e, t = !1) {
			if (this.stretch.dir === H.None) return;
			let n = this.getWH(e), r = this.getSize("minsize", 0), i = this.getSize("maxsize", Infinity), a = this.node.getProperty("mathaccent");
			n = Math.max(r, Math.min(i, n));
			let o = this.font.params.delimiterfactor / 1e3, s = this.font.params.delimitershortfall, c = r || t ? n : a ? Math.min(n / o, n + s) : Math.max(n * o, n - s), l = this.getText().codePointAt(0), u = this.stretch;
			this.size &&= (this.stretch = u = this.font.getDelimiter(l), null);
			let d = u.c || l, f = 0;
			if (u.sizes) for (let e of u.sizes) {
				if (e >= c) {
					a && f && f--, this.setDelimSize(d, f);
					return;
				}
				f++;
			}
			u.stretch ? (this.size = -1, this.invalidateBBox(), this.getStretchBBox(e, this.checkExtendedHeight(n, u), u)) : this.setDelimSize(d, f - 1);
		}
		setDelimSize(e, t) {
			let n = this.stretch;
			this.variant = this.font.getSizeVariant(e, t), this.size = t;
			let r = n.schar && n.schar[Math.min(t, n.schar.length - 1)] || e;
			this.stretch = Object.assign(Object.assign({}, n), { c: r }), this.childNodes[0].invalidateBBox();
		}
		getSize(e, t) {
			let n = this.node.attributes;
			return n.isSet(e) && (t = this.length2em(n.get(e), 1, 1)), t;
		}
		getWH(e) {
			if (e.length === 0) return 0;
			if (e.length === 1) return e[0];
			let [t, n] = e, r = this.font.params.axis_height;
			return this.node.attributes.get("symmetric") ? 2 * Math.max(t - r, n + r) : t + n;
		}
		getStretchBBox(e, t, n) {
			Object.hasOwn(n, "min") && n.min > t && (t = n.min);
			let [r, i, a] = n.HDW;
			if (this.stretch.dir === H.Vertical) [r, i] = this.getBaseline(e, t, n);
			else if (a = t, this.stretch.hd && !this.jax.options.mathmlSpacing) {
				let e = this.font.params.extender_factor;
				r = r * (1 - e) + this.stretch.hd[0] * e, i = i * (1 - e) + this.stretch.hd[1] * e;
			}
			this.bbox.h = r, this.bbox.d = i, this.bbox.w = a;
		}
		getBaseline(e, t, n) {
			let r = e.length === 2 && e[0] + e[1] === t, i = this.node.attributes.get("symmetric"), [a, o] = r ? e : [t, 0], [s, c] = [a + o, 0];
			if (i) {
				let e = this.font.params.axis_height;
				r && (s = 2 * Math.max(a - e, o + e)), c = s / 2 - e;
			} else if (r) c = o;
			else {
				let [e, t] = n.HDW || [.75, .25];
				c = t * (s / (e + t));
			}
			return [s - c, c];
		}
		checkExtendedHeight(e, t) {
			if (t.fullExt) {
				let [n, r] = t.fullExt;
				e = r + Math.ceil(Math.max(0, e - r) / n) * n;
			}
			return e;
		}
		setBreakStyle(e = "") {
			if (this.breakStyle = this.node.parent?.isEmbellished && !e ? "" : this.getBreakStyle(e), this.breakCount && this.multChar) {
				let e = this.parent.node.childIndex(this.node), t = this.parent.node.childNodes[e + 1];
				t && t.setTeXclass(this.multChar.node);
			}
		}
		getBreakStyle(e = "") {
			let t = this.node.attributes, n = e || (t.get("linebreak") === "newline" || this.node.getProperty("forcebreak") ? t.get("linebreakstyle") : "");
			return n === "infixlinebreakstyle" && (n = t.get(n)), n;
		}
		getMultChar() {
			let e = this.node.attributes.get("linebreakmultchar");
			e && this.getText() === "⁢" && e !== "⁢" && (this.multChar = this.createMo(e));
		}
		constructor(e, t, n = null) {
			super(e, t, n), this.size = null, this.isAccent = this.node.isAccent, this.getMultChar(), this.setBreakStyle();
		}
		computeBBox(e, t = !1) {
			if (this.protoBBox(e), this.node.attributes.get("symmetric") && this.stretch.dir !== H.Horizontal) {
				let t = this.getCenterOffset(e);
				e.h += t, e.d -= t;
			}
			this.node.getProperty("mathaccent") && (this.stretch.dir === H.None || this.size >= 0) && (e.w = 0);
		}
		computeLineBBox(e) {
			return this.moLineBBox(e, this.breakStyle);
		}
		moLineBBox(e, t, n = null) {
			let r = this.node.attributes.get("lineleading"), i = this.length2em(r, this.linebreakOptions.lineleading);
			if (e === 0 && t === "before") {
				let e = q.from(K.zero(), i);
				return e.originalL = this.bbox.L, this.bbox.L = 0, e;
			}
			let a = q.from(n || this.getOuterBBox(), i);
			return e === 1 && (t === "after" ? (a.w = a.h = a.d = 0, a.isFirst = !0, this.bbox.R = 0) : t === "duplicate" ? a.L = 0 : this.multChar && (a = q.from(this.multChar.getOuterBBox(), i)), a.getIndentData(this.node)), a;
		}
		canStretch(e) {
			if (this.stretch.dir !== H.None) return this.stretch.dir === e;
			if (!this.node.attributes.get("stretchy")) return !1;
			let t = this.getText();
			if (Array.from(t).length !== 1) return !1;
			let n = this.font.getDelimiter(t.codePointAt(0));
			return this.stretch = n && n.dir === e ? n : wr, this.stretch.dir !== H.None;
		}
		getVariant() {
			if (this.node.attributes.get("largeop")) {
				this.variant = this.node.attributes.get("displaystyle") ? "-largeop" : "-smallop";
				return;
			}
			if (!this.node.attributes.hasExplicit("mathvariant") && this.node.getProperty("pseudoscript") === !1) {
				this.variant = "-tex-variant";
				return;
			}
			super.getVariant();
		}
		remapChars(e) {
			let t = this.node.getProperty("primes");
			if (t) return He(t);
			if (e.length === 1) {
				let t = this.node.coreParent().parent, n = this.isAccent && !t.isKind("mrow") ? "accent" : "mo", r = this.font.getRemappedChar(n, e[0]);
				r && (e = this.unicodeChars(r, this.variant));
			}
			return e;
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/mo.js
var ni = (function() {
	var e;
	let t = ti(J);
	return e = class extends t {
		toSVG(e) {
			let t = this.node.attributes, n = t.get("symmetric") && this.stretch.dir !== H.Horizontal, r = this.stretch.dir !== H.None;
			r && this.size === null && this.getStretchedVariant([]);
			let i = this.standardSvgNodes(e);
			if (i.length > 1 && this.breakStyle !== "duplicate") {
				let e = +(this.breakStyle === "after");
				this.adaptor.remove(i[e]), i[e] = null;
			}
			if (r && this.size < 0) this.stretchSvg();
			else {
				let e = n || t.get("largeop") ? this.fixed(this.getCenterOffset()) : "0", r = this.node.getProperty("mathaccent") ? this.fixed(this.getAccentOffset()) : "0";
				(e !== "0" || r !== "0") && (i[0] && this.adaptor.setAttribute(i[0], "transform", `translate(${r} ${e})`), i[1] && this.adaptor.setAttribute(i[1], "transform", `translate(${r} ${e})`)), i[0] && this.addChildren([i[0]]), i[1] && (this.multChar || this).addChildren([i[1]]);
			}
		}
		stretchSvg() {
			let e = this.stretch.stretch, t = this.getStretchVariants(), n = this.getBBox();
			this.stretch.dir === H.Vertical ? this.stretchVertical(e, t, n) : this.stretchHorizontal(e, t, n);
		}
		getStretchVariants() {
			let e = this.stretch.c || this.getText().codePointAt(0), t = [];
			for (let n of this.stretch.stretch.keys()) t[n] = this.font.getStretchVariant(e, n);
			return t;
		}
		stretchVertical(e, t, n) {
			let { h: r, d: i, w: a } = n, o = this.addTop(e[0], t[0], r, a), s = this.addBot(e[2], t[2], i, a);
			if (e.length === 4) {
				let [n, c] = this.addMidV(e[3], t[3], a);
				this.addExtV(e[1], t[1], r, -n, o, 0, a), this.addExtV(e[1], t[1], -c, i, 0, s, a);
			} else this.addExtV(e[1], t[1], r, i, o, s, a);
		}
		stretchHorizontal(e, t, n) {
			let r = n.w, i = this.addLeft(e[0], t[0]), a = this.addRight(e[2], t[2], r);
			if (e.length === 4) {
				let [n, o] = this.addMidH(e[3], t[3], r), s = r / 2;
				this.addExtH(e[1], t[1], s, i, s - n), this.addExtH(e[1], t[1], s, o - s, a, s);
			} else this.addExtH(e[1], t[1], r, i, a);
		}
		getChar(e, t) {
			let n = this.font.getChar(t, e) || [
				0,
				0,
				0,
				null
			];
			return [
				n[0],
				n[1],
				n[2],
				n[3] || {}
			];
		}
		addGlyph(e, t, n, r, i = null) {
			if (i) return this.placeChar(e, n, r, i, t);
			if (this.dom[0]) {
				let i = this.placeChar(e, n, r, this.dom[0], t);
				if (!this.dom[1]) return i;
			}
			return this.placeChar(e, n, r, this.dom[1], t);
		}
		addTop(e, t, n, r) {
			if (!e) return 0;
			let [i, a, o] = this.getChar(e, t);
			return this.addGlyph(e, t, (r - o) / 2, n - i), i + a;
		}
		addExtV(e, t, n, r, i, a, o) {
			if (!e) return;
			i = Math.max(0, i - Sr), a = Math.max(0, a - Sr);
			let s = this.adaptor, [c, l, u] = this.getChar(e, t), d = n + r - i - a, f = 1.5 * d / (c + l), p = (f * (c - l) - d) / 2;
			if (d <= 0) return;
			let m = this.svg("svg", {
				width: this.fixed(u),
				height: this.fixed(d),
				y: this.fixed(a - r),
				x: this.fixed((o - u) / 2),
				viewBox: [
					0,
					p,
					u,
					d
				].map((e) => this.fixed(e)).join(" ")
			});
			this.addGlyph(e, t, 0, 0, m);
			let h = s.lastChild(m);
			s.setAttribute(h, "transform", `scale(1,${this.jax.fixed(f)})`), this.dom[0] && s.append(this.dom[0], m), this.dom[1] && s.append(this.dom[1], this.dom[0] ? s.clone(m) : m);
		}
		addBot(e, t, n, r) {
			if (!e) return 0;
			let [i, a, o] = this.getChar(e, t);
			return this.addGlyph(e, t, (r - o) / 2, a - n), i + a;
		}
		addMidV(e, t, n) {
			if (!e) return [0, 0];
			let [r, i, a] = this.getChar(e, t), o = (i - r) / 2 + this.font.params.axis_height;
			return this.addGlyph(e, t, (n - a) / 2, o), [r + o, i - o];
		}
		addLeft(e, t) {
			return e ? this.addGlyph(e, t, 0, 0) : 0;
		}
		addExtH(e, t, n, r, i, a = 0) {
			if (!e) return;
			i = Math.max(0, i - Cr), r = Math.max(0, r - Cr);
			let o = this.adaptor, [s, c, l] = this.getChar(e, t), u = n - r - i, d = s + c + 2 * Sr, f = u / l * 1.5, p = -(c + Sr);
			if (u <= 0) return;
			let m = this.svg("svg", {
				width: this.fixed(u),
				height: this.fixed(d),
				x: this.fixed(a + r),
				y: this.fixed(p),
				viewBox: [
					(f * l - u) / 2,
					p,
					u,
					d
				].map((e) => this.fixed(e)).join(" ")
			});
			this.addGlyph(e, t, 0, 0, m);
			let h = o.lastChild(m);
			o.setAttribute(h, "transform", `scale(${this.jax.fixed(f)},1)`), this.dom[0] && o.append(this.dom[0], m), this.dom[1] && o.append(this.dom[1], this.dom[0] ? o.clone(m) : m);
		}
		addRight(e, t, n) {
			if (!e) return 0;
			let r = this.getChar(e, t)[2];
			return this.addGlyph(e, t, n - r, 0);
		}
		addMidH(e, t, n) {
			if (!e) return [0, 0];
			let r = this.getChar(e, t)[2];
			return this.addGlyph(e, t, (n - r) / 2, 0), [(n - r) / 2, (n + r) / 2];
		}
	}, e.kind = E.prototype.kind, e;
})();
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Wrappers/mn.js
function ri(e) {
	return class extends e {
		remapChars(e) {
			if (e.length) {
				let t = this.font.getRemappedChar("mn", e[0]);
				if (t) {
					let n = this.unicodeChars(t, this.variant);
					n.length === 1 ? e[0] = n[0] : e = n.concat(e.slice(1));
				}
			}
			return e;
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/mn.js
var ii = class extends S {
	constructor() {
		super(...arguments), this.texclass = b.ORD;
	}
	get kind() {
		return "mn";
	}
};
ii.defaults = Object.assign({}, S.defaults);
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/mn.js
var ai = (function() {
	var e;
	let t = ri(J);
	return e = class extends t {}, e.kind = ii.prototype.kind, e;
})();
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Wrappers/ms.js
function oi(e) {
	return class extends e {
		createText(e) {
			let t = this.wrap(this.mmlText(e));
			return t.parent = this, t;
		}
		constructor(e, t, n = null) {
			super(e, t, n);
			let r = this.node.attributes, i = r.getList("lquote", "rquote");
			this.variant !== "monospace" && (!r.isSet("lquote") && i.lquote === "\"" && (i.lquote = "“"), !r.isSet("rquote") && i.rquote === "\"" && (i.rquote = "”")), this.childNodes.unshift(this.createText(i.lquote)), this.childNodes.push(this.createText(i.rquote));
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/ms.js
var si = class extends S {
	constructor() {
		super(...arguments), this.texclass = b.ORD;
	}
	get kind() {
		return "ms";
	}
};
si.defaults = Object.assign(Object.assign({}, S.defaults), {
	lquote: "\"",
	rquote: "\""
});
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/ms.js
var ci = (function() {
	var e;
	let t = oi(J);
	return e = class extends t {}, e.kind = si.prototype.kind, e;
})();
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Wrappers/mtext.js
function li(e) {
	var t = class extends e {
		constructor() {
			super(...arguments), this.breakPoints = [];
		}
		textWidth(e) {
			let t = this.textNode;
			if (!t) {
				let e = this.node.factory.create("text");
				e.parent = this.node, t = this.textNode = this.factory.wrap(e), t.parent = this;
			}
			return t.node.setText(e), t.invalidateBBox(!1), t.getBBox().w;
		}
		get breakCount() {
			return this.breakPoints.length;
		}
		getVariant() {
			let e = this.jax.options, t = this.jax.math.outputData, n = (!!t.merrorFamily || !!e.merrorFont) && this.node.Parent.isKind("merror");
			if (t.mtextFamily || e.mtextFont || n) {
				let r = this.node.attributes.get("mathvariant"), i = this.constructor.INHERITFONTS[r] || this.jax.font.getCssFont(r), a = i[0] || (n ? t.merrorFamily || e.merrorFont : t.mtextFamily || e.mtextFont);
				this.variant = this.explicitVariant(a, i[2] ? "bold" : "", i[1] ? "italic" : "");
				return;
			}
			super.getVariant();
		}
		setBreakAt(e) {
			this.breakPoints.push(e);
		}
		clearBreakPoints() {
			this.breakPoints = [];
		}
		computeLineBBox(e) {
			let t = q.from(this.getOuterBBox(), this.linebreakOptions.lineleading);
			return this.breakCount ? (t.w = this.getBreakWidth(e), e === 0 ? (t.R = 0, this.addLeftBorders(t)) : (t.L = 0, t.indentData = [
				["left", "0"],
				["left", "0"],
				["left", "0"]
			], e === this.breakCount && this.addRightBorders(t)), t) : t;
		}
		getBreakWidth(e) {
			let t = this.childNodes, [n, r] = this.breakPoints[e - 1] || [0, 0], [i, a] = this.breakPoints[e] || [t.length, 0], o = t[n].node.getText().split(/ /);
			if (n === i) return this.textWidth(o.slice(r, a).join(" "));
			let s = this.textWidth(o.slice(r).join(" "));
			for (; ++n < i && n < t.length;) s += t[n].getBBox().w;
			return n < t.length && (o = t[n].node.getText().split(/ /), s += this.textWidth(o.slice(0, a).join(" "))), s;
		}
	};
	return t.INHERITFONTS = {
		normal: [
			"",
			!1,
			!1
		],
		bold: [
			"",
			!1,
			!0
		],
		italic: [
			"",
			!0,
			!1
		],
		"bold-italic": [
			"",
			!0,
			!0
		]
	}, t;
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/mtext.js
var ui = class e extends S {
	constructor() {
		super(...arguments), this.texclass = b.ORD;
	}
	get kind() {
		return "mtext";
	}
	get isSpacelike() {
		return !!this.getText().match(/^\s*$/) && !this.attributes.hasOneOf(e.NONSPACELIKE);
	}
};
ui.NONSPACELIKE = [
	"style",
	"mathbackground",
	"background"
], ui.defaults = Object.assign({}, S.defaults);
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/mtext.js
var di = (function() {
	var e;
	let t = li(J);
	return e = class extends t {
		toSVG(e) {
			if (!this.breakCount) {
				super.toSVG(e);
				return;
			}
			let t = this.standardSvgNodes(e), n = this.textNode.node, r = this.childNodes;
			for (let e of t.keys()) {
				let i = [t[e]], [a, o] = this.breakPoints[e - 1] || [0, 0], [s, c] = this.breakPoints[e] || [r.length, 0], l = r[a].node.getText().split(/ /);
				if (a === s) {
					n.setText(l.slice(o, c).join(" ")), this.textNode.toSVG(i);
					continue;
				}
				n.setText(l.slice(o).join(" ")), this.textNode.toSVG(i);
				let u = this.textNode.getBBox().w;
				for (; ++a < s && a < r.length;) {
					let e = r[a];
					e.toSVG(i), e.dom && e.place(u, 0), u += e.getBBox().w;
				}
				a < r.length && (l = r[a].node.getText().split(/ /), n.setText(l.slice(0, c).join(" ")), this.textNode.toSVG(i), this.textNode.place(u, 0));
			}
		}
	}, e.kind = ui.prototype.kind, e;
})(), fi = class extends x {
	constructor() {
		super(...arguments), this.texclass = b.ORD;
	}
	get kind() {
		return "merror";
	}
	get arity() {
		return -1;
	}
	get linebreakContainer() {
		return !0;
	}
};
fi.defaults = Object.assign({}, x.defaults);
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/merror.js
var pi = (function() {
	var e = class extends J {
		toSVG(e) {
			let t = this.standardSvgNodes(e), { h: n, d: r, w: i } = this.getBBox();
			this.adaptor.append(this.dom[0], this.svg("rect", {
				"data-background": !0,
				width: this.fixed(i),
				height: this.fixed(n + r),
				y: this.fixed(-r)
			}));
			let a = this.node.attributes.get("title");
			a && this.adaptor.append(this.dom[0], this.svg("title", {}, [this.adaptor.text(a)])), this.addChildren(t);
		}
	};
	return e.kind = fi.prototype.kind, e.styles = {
		"g[data-mml-node=\"merror\"] > g": {
			fill: "red",
			stroke: "red"
		},
		"g[data-mml-node=\"merror\"] > rect[data-background]": {
			fill: "yellow",
			stroke: "none"
		}
	}, e;
})();
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Wrappers/mspace.js
function mi(e) {
	return class extends e {
		get canBreak() {
			return this.node.canBreak;
		}
		get breakCount() {
			return +!!this.breakStyle;
		}
		setBreakStyle(e = "") {
			this.breakStyle = e || (this.node.hasNewline || this.node.getProperty("forcebreak") ? "before" : "");
		}
		constructor(e, t, n = null) {
			super(e, t, n), this.setBreakStyle();
		}
		computeBBox(e, t = !1) {
			let n = this.node.attributes;
			e.w = this.length2em(n.get("width"), 0), e.h = this.length2em(n.get("height"), 0), e.d = this.length2em(n.get("depth"), 0);
		}
		computeLineBBox(e) {
			let t = this.node.attributes.get("data-lineleading"), n = this.length2em(t, this.linebreakOptions.lineleading), r = q.from(K.zero(), n);
			return e === 1 && (r.getIndentData(this.node), r.w = this.getBBox().w, r.isFirst = r.w === 0), r;
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/mspace.js
var hi = class e extends S {
	constructor() {
		super(...arguments), this.texclass = b.NONE;
	}
	setTeXclass(e) {
		return e;
	}
	get kind() {
		return "mspace";
	}
	get arity() {
		return 0;
	}
	get isSpacelike() {
		return !this.attributes.hasExplicit("linebreak") && this.canBreak;
	}
	get hasNewline() {
		let e = this.attributes.get("linebreak");
		return this.canBreak && (e === "newline" || e === "indentingnewline");
	}
	get canBreak() {
		return !this.attributes.hasOneOf(e.NONSPACELIKE) && String(this.attributes.get("width")).trim().charAt(0) !== "-";
	}
};
hi.NONSPACELIKE = [
	"height",
	"depth",
	"style",
	"mathbackground",
	"background"
], hi.defaults = Object.assign(Object.assign({}, S.defaults), {
	width: "0em",
	height: "0ex",
	depth: "0ex",
	linebreak: "auto",
	indentshift: "auto",
	indentalign: "auto",
	indenttarget: "",
	indentalignfirst: "indentalign",
	indentshiftfirst: "indentshift",
	indentalignlast: "indentalign",
	indentshiftlast: "indentshift"
});
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/mspace.js
var gi = (function() {
	var e;
	let t = mi(J);
	return e = class extends t {}, e.kind = hi.prototype.kind, e;
})();
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Wrappers/mpadded.js
function _i(e) {
	return class extends e {
		get containerWidth() {
			let e = this.node.attributes, t = e.get("width").toString();
			return !t.match(/^[-+]|%$/) && e.get("data-overflow") === "linebreak" ? this.length2em(t) : this.parent.containerWidth;
		}
		getDimens() {
			let e = this.node.attributes.getList("width", "height", "depth", "lspace", "voffset"), t = this.childNodes[0].getOuterBBox(), { w: n, h: r, d: i } = t, a = n, o = r, s = i, c = 0, l = 0, u = 0;
			e.width !== "" && (n = this.dimen(e.width, t, "w", 0)), e.height !== "" && (r = this.dimen(e.height, t, "h", 0)), e.depth !== "" && (i = this.dimen(e.depth, t, "d", 0)), e.voffset !== "" && (l = this.dimen(e.voffset, t)), e.lspace !== "" && (c = this.dimen(e.lspace, t));
			let d = this.node.attributes.get("data-align");
			return d && (u = this.getAlignX(n, t, d)), [
				o,
				s,
				a,
				r - o,
				i - s,
				n - a,
				c,
				l,
				u
			];
		}
		dimen(e, t, n = "", r = null) {
			e = String(e);
			let i = e.match(/width|height|depth/), a = i ? t[i[0].charAt(0)] : n ? t[n] : 0, o = this.length2em(e, a) || 0;
			return e.match(/^[-+]/) && n && (o += a), r != null && (o = Math.max(r, o)), o;
		}
		setBBoxDimens(e) {
			let [t, n, r, i, a, o] = this.getDimens();
			e.w = r + o, e.h = t + i, e.d = n + a;
		}
		computeBBox(e, t = !1) {
			if (this.setBBoxDimens(e), this.childNodes[0].getOuterBBox().w > e.w) {
				let t = this.node.attributes.get("data-overflow");
				(t === "linebreak" || t === "auto" && this.jax.math.root.attributes.get("overflow") === "linebreak") && (this.childNodes[0].breakToWidth(e.w), this.setBBoxDimens(e));
			}
			this.setChildPWidths(t, e.w);
		}
		getWrapWidth(e) {
			return this.getBBox().w;
		}
		getChildAlign(e) {
			return this.node.attributes.get("data-align") || "left";
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/mpadded.js
var vi = class extends at {
	get kind() {
		return "mpadded";
	}
	get linebreakContainer() {
		return !0;
	}
	setTeXclass(e) {
		return this.getProperty("vbox") ? (this.getPrevClass(e), this.texClass = b.ORD, this.childNodes[0].setTeXclass(null), this) : super.setTeXclass(e);
	}
};
vi.defaults = Object.assign(Object.assign({}, at.defaults), {
	width: "",
	height: "",
	depth: "",
	lspace: 0,
	voffset: 0
});
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/mpadded.js
var yi = (function() {
	var e;
	let t = _i(J);
	return e = class extends t {
		toSVG(e) {
			if (this.toEmbellishedSVG(e)) return;
			let t = this.standardSvgNodes(e), [, , , , , n, r, i, a] = this.getDimens(), o = this.node.attributes.get("data-align") || "left", s = n < 0 && o !== "left" ? o === "center" ? n / 2 : n : 0, c = r + a - s;
			(c || i) && (t = [this.adaptor.append(t[0], this.svg("g"))], this.place(c, i, t[0])), this.addChildren(t);
		}
	}, e.kind = vi.prototype.kind, e;
})(), bi = class extends at {
	constructor() {
		super(...arguments), this.texclass = b.ORD;
	}
	get kind() {
		return "mphantom";
	}
};
bi.defaults = Object.assign({}, at.defaults);
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/mphantom.js
var xi = (function() {
	var e = class extends J {
		toSVG(e) {
			this.standardSvgNodes(e);
		}
	};
	return e.kind = bi.prototype.kind, e;
})();
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Wrappers/mfrac.js
function Si(e) {
	return class extends e {
		getFractionBBox(e, t, n) {
			let r = this.childNodes[0].getOuterBBox(), i = this.childNodes[1].getOuterBBox(), a = this.font.params.axis_height, { T: o, u: s, v: c } = this.getTUV(t, n);
			e.combine(r, 0, a + o + Math.max(r.d * r.rscale, s)), e.combine(i, 0, a - o - Math.max(i.h * i.rscale, c)), e.w += 2 * this.pad + .2;
		}
		getTUV(e, t) {
			let n = this.font.params, r = n.axis_height, i = (e ? 3.5 : 1.5) * t;
			return {
				T: (e ? 3.5 : 1.5) * t,
				u: (e ? n.num1 : n.num2) - r - i,
				v: (e ? n.denom1 : n.denom2) + r - i
			};
		}
		getAtopBBox(e, t) {
			let { u: n, v: r, nbox: i, dbox: a } = this.getUVQ(t);
			e.combine(i, 0, n), e.combine(a, 0, -r), e.w += 2 * this.pad;
		}
		getUVQ(e) {
			let t = this.childNodes[0].getOuterBBox(), n = this.childNodes[1].getOuterBBox(), r = this.font.params, [i, a] = e ? [r.num1, r.denom1] : [r.num3, r.denom2], o = (e ? 7 : 3) * r.rule_thickness, s = i - t.d * t.scale - (n.h * n.scale - a);
			return s < o && (i += (o - s) / 2, a += (o - s) / 2, s = o), {
				u: i,
				v: a,
				q: s,
				nbox: t,
				dbox: n
			};
		}
		getBevelledBBox(e, t) {
			let { u: n, v: r, delta: i, nbox: a, dbox: o } = this.getBevelData(t), s = this.bevel.getOuterBBox();
			e.combine(a, 0, n), e.combine(s, e.w - i / 2, 0), e.combine(o, e.w - i / 2, r);
		}
		getBevelData(e) {
			let t = this.childNodes[0].getOuterBBox(), n = this.childNodes[1].getOuterBBox(), r = e ? .4 : .15, i = Math.max(t.scale * (t.h + t.d), n.scale * (n.h + n.d)) + 2 * r, a = this.font.params.axis_height;
			return {
				H: i,
				delta: r,
				u: t.scale * (t.d - t.h) / 2 + a + r,
				v: n.scale * (n.d - n.h) / 2 + a - r,
				nbox: t,
				dbox: n
			};
		}
		isDisplay() {
			let { displaystyle: e, scriptlevel: t } = this.node.attributes.getList("displaystyle", "scriptlevel");
			return e && t === 0;
		}
		constructor(e, t, n = null) {
			if (super(e, t, n), this.bevel = null, this.pad = this.node.getProperty("withDelims") ? 0 : this.font.params.nulldelimiterspace, this.node.attributes.get("bevelled")) {
				let { H: e } = this.getBevelData(this.isDisplay()), t = this.bevel = this.createMo("/");
				t.node.attributes.set("symmetric", !0), t.canStretch(H.Vertical), t.getStretchedVariant([e], !0);
			}
		}
		computeBBox(e, t = !1) {
			e.empty();
			let { linethickness: n, bevelled: r } = this.node.attributes.getList("linethickness", "bevelled"), i = this.isDisplay(), a = null;
			if (r) this.getBevelledBBox(e, i);
			else {
				let t = this.length2em(String(n), .06);
				a = -2 * this.pad, t === 0 ? this.getAtopBBox(e, i) : (this.getFractionBBox(e, i, t), a -= .2), a += e.w;
			}
			e.clean(), this.setChildPWidths(t, a);
		}
		canStretch(e) {
			return !1;
		}
		getChildAlign(e) {
			let t = this.node.attributes;
			return t.get("bevelled") ? "left" : t.get(["numalign", "denomalign"][e]);
		}
		getWrapWidth(e) {
			let t = this.node.attributes;
			return t.get("bevelled") ? this.childNodes[e].getOuterBBox().w : this.getBBox().w - (this.length2em(t.get("linethickness")) ? .2 : 0) - 2 * this.pad;
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/mfrac.js
var Ci = class extends C {
	get kind() {
		return "mfrac";
	}
	get arity() {
		return 2;
	}
	get linebreakContainer() {
		return !0;
	}
	get linebreakAlign() {
		return "";
	}
	setTeXclass(e) {
		this.getPrevClass(e);
		for (let e of this.childNodes) e.setTeXclass(null);
		return this;
	}
	setChildInheritedAttributes(e, t, n, r) {
		(!t || n > 0) && n++;
		let i = this.attributes.get("numalign"), a = this.attributes.get("denomalign"), o = this.addInheritedAttributes(Object.assign({}, e), {
			numalign: i,
			indentshift: "0",
			indentalignfirst: i,
			indentshiftfirst: "0",
			indentalignlast: "indentalign",
			indentshiftlast: "indentshift"
		}), s = this.addInheritedAttributes(Object.assign({}, e), {
			denalign: a,
			indentshift: "0",
			indentalignfirst: a,
			indentshiftfirst: "0",
			indentalignlast: "indentalign",
			indentshiftlast: "indentshift"
		});
		this.childNodes[0].setInheritedAttributes(o, !1, n, r), this.childNodes[1].setInheritedAttributes(s, !1, n, !0);
	}
};
Ci.defaults = Object.assign(Object.assign({}, C.defaults), {
	linethickness: "medium",
	numalign: "center",
	denomalign: "center",
	bevelled: !1
});
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/mfrac.js
var wi = (function() {
	var e;
	let t = Si(J);
	return e = class extends t {
		toSVG(e) {
			if (this.toEmbellishedSVG(e)) return;
			this.standardSvgNodes(e);
			let { linethickness: t, bevelled: n } = this.node.attributes.getList("linethickness", "bevelled"), r = this.isDisplay();
			if (n) this.makeBevelled(r);
			else {
				let e = this.length2em(String(t), .06);
				e === 0 ? this.makeAtop(r) : this.makeFraction(r, e);
			}
		}
		makeFraction(e, t) {
			let n = this.dom, { numalign: r, denomalign: i } = this.node.attributes.getList("numalign", "denomalign"), [a, o] = this.childNodes, s = a.getOuterBBox(), c = o.getOuterBBox(), l = this.font.params, u = l.axis_height, d = .1, f = this.node.getProperty("withDelims") ? 0 : l.nulldelimiterspace, p = Math.max((s.L + s.w + s.R) * s.rscale, (c.L + c.w + c.R) * c.rscale), m = this.getAlignX(p, s, r) + d + f, h = this.getAlignX(p, c, i) + d + f, { T: g, u: ee, v: te } = this.getTUV(e, t);
			a.toSVG(n), a.place(m, u + g + Math.max(s.d * s.rscale, ee)), o.toSVG(n), o.place(h, u - g - Math.max(c.h * c.rscale, te)), this.adaptor.append(n[0], this.svg("rect", {
				width: this.fixed(p + 2 * d),
				height: this.fixed(t),
				x: this.fixed(f),
				y: this.fixed(u - t / 2)
			}));
		}
		makeAtop(e) {
			let t = this.dom, { numalign: n, denomalign: r } = this.node.attributes.getList("numalign", "denomalign"), [i, a] = this.childNodes, o = i.getOuterBBox(), s = a.getOuterBBox(), c = this.font.params, l = this.node.getProperty("withDelims") ? 0 : c.nulldelimiterspace, u = Math.max((o.L + o.w + o.R) * o.rscale, (s.L + s.w + s.R) * s.rscale), d = this.getAlignX(u, o, n) + l, f = this.getAlignX(u, s, r) + l, { u: p, v: m } = this.getUVQ(e);
			i.toSVG(t), i.place(d, p), a.toSVG(t), a.place(f, -m);
		}
		makeBevelled(e) {
			let t = this.dom, [n, r] = this.childNodes, { u: i, v: a, delta: o, nbox: s, dbox: c } = this.getBevelData(e), l = (s.L + s.w + s.R) * s.rscale;
			n.toSVG(t), this.bevel.toSVG(t), r.toSVG(t), n.place(s.L * s.rscale, i), this.bevel.place(l - o / 2, 0), r.place(l + this.bevel.getOuterBBox().w + c.L * c.rscale - o, a);
		}
	}, e.kind = Ci.prototype.kind, e;
})();
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Wrappers/msqrt.js
function Ti(e) {
	return class extends e {
		get base() {
			return 0;
		}
		get root() {
			return null;
		}
		combineRootBBox(e, t, n) {}
		getPQ(e) {
			let t = this.font.params.rule_thickness, n = this.font.params.surd_height, r = this.node.attributes.get("displaystyle") ? this.font.params.x_height : t;
			return [r, e.h + e.d > this.surdH ? (e.h + e.d - (this.surdH - t - n - r / 2)) / 2 : n + r / 4];
		}
		getRootDimens(e, t) {
			return [
				0,
				0,
				0,
				0
			];
		}
		rootWidth() {
			return 1.25;
		}
		getStretchedSurd() {
			let e = this.font.params.rule_thickness, t = this.font.params.surd_height, n = this.node.attributes.get("displaystyle") ? this.font.params.x_height : e, { h: r, d: i } = this.childNodes[this.base].getOuterBBox();
			this.surdH = r + i + e + t + n / 4, this.surd.getStretchedVariant([this.surdH - i, i], !0);
		}
		constructor(e, t, n = null) {
			super(e, t, n), this.surd = this.createMo("√"), this.surd.canStretch(H.Vertical), this.getStretchedSurd();
		}
		computeBBox(e, t = !1) {
			e.empty();
			let n = this.surd.getBBox(), r = new K(this.childNodes[this.base].getOuterBBox()), i = this.getPQ(n)[1], a = this.font.params.rule_thickness, o = this.font.params.surd_height, s = r.h + i + a, [c] = this.getRootDimens(n, s);
			e.h = s + o, this.combineRootBBox(e, n, s), e.combine(n, c, s - n.h), e.combine(r, c + n.w, 0), e.clean(), this.setChildPWidths(t);
		}
		invalidateBBox() {
			super.invalidateBBox(), this.surd.childNodes[0].invalidateBBox();
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/msqrt.js
var Ei = class extends x {
	constructor() {
		super(...arguments), this.texclass = b.ORD;
	}
	get kind() {
		return "msqrt";
	}
	get arity() {
		return -1;
	}
	get linebreakContainer() {
		return !0;
	}
	setTeXclass(e) {
		return this.getPrevClass(e), this.childNodes[0].setTeXclass(null), this;
	}
	setChildInheritedAttributes(e, t, n, r) {
		this.childNodes[0].setInheritedAttributes(e, t, n, !0);
	}
};
Ei.defaults = Object.assign(Object.assign({}, x.defaults), { "data-vertical-align": "bottom" });
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/msqrt.js
var Di = (function() {
	var e;
	let t = Ti(J);
	return e = class extends t {
		constructor() {
			super(...arguments), this.dx = 0;
		}
		addRoot(e, t, n, r) {
			return 0;
		}
		toSVG(e) {
			let t = this.surd, n = this.childNodes[this.base], r = this.root ? this.childNodes[this.root] : null, i = t.getBBox(), a = n.getOuterBBox(), o = this.getPQ(i)[1], s = this.font.params.surd_height * this.bbox.scale, c = a.h + o + s, l = this.standardSvgNodes(e);
			t.toSVG(l);
			let u = this.addRoot(l, r, i, c), d = this.adaptor.append(l[0], this.svg("g"));
			n.toSVG([d]), t.place(u, c - i.h), n.place(u + i.w, 0), this.adaptor.append(l[l.length - 1], this.svg("rect", {
				width: this.fixed(a.w),
				height: this.fixed(s),
				x: this.fixed(u + i.w),
				y: this.fixed(c - s)
			}));
		}
	}, e.kind = Ei.prototype.kind, e;
})();
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Wrappers/mroot.js
function Oi(e) {
	return class extends e {
		get root() {
			return 1;
		}
		combineRootBBox(e, t, n) {
			let r = this.childNodes[this.root].getOuterBBox(), i = this.getRootDimens(t, n)[1];
			e.combine(r, 0, i);
		}
		getRootDimens(e, t) {
			let n = this.surd, r = this.childNodes[this.root].getOuterBBox(), i = (n.size < 0 ? .5 : .6) * e.w, { w: a, rscale: o } = r, s = Math.max(a, i / o), c = Math.max(0, s - a), l = this.rootHeight(r, e, n.size, t);
			return [
				s * o - i,
				l,
				c
			];
		}
		rootHeight(e, t, n, r) {
			let i = t.h + t.d;
			return (n < 0 ? 1.9 : .55 * i) - (i - r) + Math.max(0, e.d * e.rscale);
		}
		rootWidth() {
			let e = this.childNodes[this.root].getOuterBBox();
			return .4 + e.w * e.rscale;
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/mroot.js
var ki = class extends x {
	constructor() {
		super(...arguments), this.texclass = b.ORD;
	}
	get kind() {
		return "mroot";
	}
	get arity() {
		return 2;
	}
	get linebreakContainer() {
		return !0;
	}
	setTeXclass(e) {
		return this.getPrevClass(e), this.childNodes[0].setTeXclass(null), this.childNodes[1].setTeXclass(null), this;
	}
	setChildInheritedAttributes(e, t, n, r) {
		this.childNodes[0].setInheritedAttributes(e, t, n, !0), this.childNodes[1].setInheritedAttributes(e, !1, n + 2, r);
	}
};
ki.defaults = Object.assign(Object.assign({}, x.defaults), { "data-vertical-align": "bottom" });
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/mroot.js
var Ai = (function() {
	var e;
	let t = Oi(Di);
	return e = class extends t {
		addRoot(e, t, n, r) {
			t.toSVG(e);
			let [i, a, o] = this.getRootDimens(n, r), s = t.getOuterBBox();
			return t.place(o * s.rscale, a), i;
		}
	}, e.kind = ki.prototype.kind, e;
})();
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Wrappers/mfenced.js
function ji(e) {
	return class extends e {
		createMrow() {
			let e = this.node.factory.create("inferredMrow");
			e.inheritAttributesFrom(this.node), this.mrow = this.wrap(e), this.mrow.parent = this;
		}
		addMrowChildren() {
			let e = this.node, t = this.mrow;
			this.addMo(e.open), this.childNodes.length && t.childNodes.push(this.childNodes[0]);
			let n = 0;
			for (let r of this.childNodes.slice(1)) this.addMo(e.separators[n++]), t.childNodes.push(r);
			this.addMo(e.close), t.stretchChildren();
		}
		addMo(e) {
			if (!e) return;
			let t = this.wrap(e);
			this.mrow.childNodes.push(t), t.parent = this.mrow;
		}
		constructor(e, t, n = null) {
			super(e, t, n), this.mrow = null, this.createMrow(), this.addMrowChildren();
		}
		computeBBox(e, t = !1) {
			e.updateFrom(this.mrow.getOuterBBox()), this.setChildPWidths(t);
		}
		get breakCount() {
			return this.mrow.breakCount;
		}
		computeLineBBox(e) {
			return this.mrow.getLineBBox(e);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/mfenced.js
var Mi = class extends x {
	constructor() {
		super(...arguments), this.texclass = b.INNER, this.separators = [], this.open = null, this.close = null;
	}
	get kind() {
		return "mfenced";
	}
	setTeXclass(e) {
		this.getPrevClass(e), this.open && (e = this.open.setTeXclass(e)), this.childNodes[0] && (e = this.childNodes[0].setTeXclass(e));
		for (let t = 1, n = this.childNodes.length; t < n; t++) this.separators[t - 1] && (e = this.separators[t - 1].setTeXclass(e)), this.childNodes[t] && (e = this.childNodes[t].setTeXclass(e));
		return this.close && (e = this.close.setTeXclass(e)), (!this.open || !this.close) && this.updateTeXclass(this.open || this.childNodes[0] || this.close), e;
	}
	setChildInheritedAttributes(e, t, n, r) {
		this.addFakeNodes();
		for (let i of [this.open, this.close].concat(this.separators)) i && i.setInheritedAttributes(e, t, n, r);
		super.setChildInheritedAttributes(e, t, n, r);
	}
	addFakeNodes() {
		let { open: e, close: t, separators: n } = this.attributes.getList("open", "close", "separators");
		if (e = e.replace(/[ \t\n\r]/g, ""), t = t.replace(/[ \t\n\r]/g, ""), n = n.replace(/[ \t\n\r]/g, ""), e && (this.open = this.fakeNode(e, {
			fence: !0,
			form: "prefix"
		}, b.OPEN)), n) {
			for (; n.length < this.childNodes.length - 1;) n += n.charAt(n.length - 1);
			let e = 0;
			for (let t of this.childNodes.slice(1)) t && this.separators.push(this.fakeNode(n.charAt(e++)));
		}
		t && (this.close = this.fakeNode(t, {
			fence: !0,
			form: "postfix"
		}, b.CLOSE));
	}
	fakeNode(e, t = {}, n = null) {
		let r = this.factory.create("text").setText(e), i = this.factory.create("mo", t, [r]);
		return i.texClass = n, i.parent = this, i;
	}
};
Mi.defaults = Object.assign(Object.assign({}, x.defaults), {
	open: "(",
	close: ")",
	separators: ","
});
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/mfenced.js
var Ni = (function() {
	var e;
	let t = ji(J);
	return e = class extends t {
		toSVG(e) {
			let t = this.standardSvgNodes(e);
			this.setChildrenParent(this.mrow), this.mrow.toSVG(t), this.setChildrenParent(this);
		}
		setChildrenParent(e) {
			for (let t of this.childNodes) t.parent = e;
		}
	}, e.kind = Mi.prototype.kind, e;
})();
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Wrappers/msubsup.js
function Pi(e) {
	var t = class extends e {
		get scriptChild() {
			return this.childNodes[this.node.sub];
		}
		getOffset() {
			return [this.baseIsChar ? 0 : this.getAdjustedIc(), -this.getV()];
		}
	};
	return t.useIC = !1, t;
}
function Fi(e) {
	return class extends e {
		get scriptChild() {
			return this.childNodes[this.node.sup];
		}
		getOffset() {
			return [this.getAdjustedIc() - (this.baseRemoveIc ? 0 : this.baseIc), this.getU()];
		}
	};
}
function Ii(e) {
	var t = class extends e {
		constructor() {
			super(...arguments), this.UVQ = null;
		}
		get subChild() {
			return this.childNodes[this.node.sub];
		}
		get supChild() {
			return this.childNodes[this.node.sup];
		}
		get scriptChild() {
			return this.supChild;
		}
		getUVQ(e = this.subChild.getOuterBBox(), t = this.supChild.getOuterBBox()) {
			let n = this.baseCore, r = n.getLineBBox(n.breakCount);
			if (this.UVQ) return this.UVQ;
			let i = this.font.params, a = 3 * i.rule_thickness, o = this.length2em(this.node.attributes.get("subscriptshift"), i.sub2), s = this.baseCharZero(r.d * this.baseScale + i.sub_drop * e.rscale), c = t.d * t.rscale, l = e.h * e.rscale, [u, d] = [this.getU(), Math.max(s, o)], f = u - c - (l - d);
			if (f < a) {
				d += a - f;
				let e = 4 / 5 * i.x_height - (u - c);
				e > 0 && (u += e, d -= e);
			}
			return u = Math.max(this.length2em(this.node.attributes.get("superscriptshift"), u), u), d = Math.max(this.length2em(this.node.attributes.get("subscriptshift"), d), d), f = u - c - (l - d), this.UVQ = [
				u,
				-d,
				f
			], this.UVQ;
		}
		appendScripts(e) {
			let [t, n] = [this.subChild.getOuterBBox(), this.supChild.getOuterBBox()], r = this.getBaseWidth(), i = this.getAdjustedIc(), [a, o] = this.getUVQ(), s = e.d - this.baseChild.getLineBBox(this.baseChild.breakCount).d;
			return e.combine(t, r + (this.baseIsChar ? 0 : i), o - s), e.combine(n, r + i, a - s), e.w += this.font.params.scriptspace, e;
		}
	};
	return t.useIC = !1, t;
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Wrappers/scriptbase.js
function Li(e) {
	var t = class extends e {
		get baseChild() {
			return this.childNodes[this.node.base];
		}
		get scriptChild() {
			return this.childNodes[1];
		}
		getBaseCore() {
			let e = this.getSemanticBase() || this.childNodes[0], t = e?.node;
			for (; e && (e.childNodes.length === 1 && (t.isKind("mrow") || t.isKind("TeXAtom") || t.isKind("mstyle") || t.isKind("mpadded") && !t.getProperty("vbox") || t.isKind("mphantom") || t.isKind("semantics")) || t.isKind("munderover") && e.isMathAccent);) this.setBaseAccentsFor(e), e = e.childNodes[0], t = e?.node;
			return e || (this.baseHasAccentOver = this.baseHasAccentUnder = !1), e || this.childNodes[0];
		}
		setBaseAccentsFor(e) {
			e.node.isKind("munderover") && (this.baseHasAccentOver === null && (this.baseHasAccentOver = !!e.node.attributes.get("accent")), this.baseHasAccentUnder === null && (this.baseHasAccentUnder = !!e.node.attributes.get("accentunder")));
		}
		getSemanticBase() {
			let e = this.node.attributes.getExplicit("data-semantic-fencepointer");
			return this.getBaseFence(this.baseChild, e);
		}
		getBaseFence(e, t) {
			if (!e || !e.node.attributes || !t) return null;
			if (e.node.attributes.getExplicit("data-semantic-id") === t) return e;
			for (let n of e.childNodes) {
				let e = this.getBaseFence(n, t);
				if (e) return e;
			}
			return null;
		}
		getBaseScale() {
			let e = this.baseCore, t = 1;
			for (; e && e !== this;) {
				let n = e.getOuterBBox();
				t *= n.rscale, e = e.parent;
			}
			return t;
		}
		getBaseIc() {
			return this.baseCore.getOuterBBox().ic * this.baseScale;
		}
		getAdjustedIc() {
			return this.baseIc ? 1.05 * this.baseIc + .05 : 0;
		}
		isCharBase() {
			let e = this.baseCore;
			return (e.node.isKind("mo") && e.size === null || e.node.isKind("mi") || e.node.isKind("mn")) && e.bbox.rscale === 1 && Array.from(e.getText()).length === 1;
		}
		checkLineAccents() {
			if (this.node.isKind("munderover")) {
				if (this.node.isKind("mover")) this.isLineAbove = this.isLineAccent(this.scriptChild);
				else if (this.node.isKind("munder")) this.isLineBelow = this.isLineAccent(this.scriptChild);
				else {
					let e = this;
					this.isLineAbove = this.isLineAccent(e.overChild), this.isLineBelow = this.isLineAccent(e.underChild);
				}
			}
		}
		isLineAccent(e) {
			let t = e.coreMO().node;
			return t.isToken && t.getText() === "―";
		}
		getBaseWidth() {
			let e = this.baseChild.getLineBBox(this.baseChild.breakCount);
			return e.w * e.rscale - (this.baseRemoveIc ? this.baseIc : 0) + this.font.params.extra_ic;
		}
		getOffset() {
			return [0, 0];
		}
		baseCharZero(e) {
			let t = !!this.baseCore.node.attributes.get("largeop"), n = !!(this.baseCore.node.isKind("mo") && this.baseCore.size), r = this.baseScale;
			return this.baseIsChar && !t && !n && r === 1 ? 0 : e;
		}
		getV() {
			let e = this.baseCore, t = e.getLineBBox(e.breakCount), n = this.scriptChild.getOuterBBox(), r = this.font.params, i = this.length2em(this.node.attributes.get("subscriptshift"), r.sub1);
			return Math.max(this.baseCharZero(t.d * this.baseScale + r.sub_drop * n.rscale), i, n.h * n.rscale - 4 / 5 * r.x_height);
		}
		getU() {
			let e = this.baseCore, t = e.getLineBBox(e.breakCount), n = this.scriptChild.getOuterBBox(), r = this.font.params, i = this.node.attributes.getList("displaystyle", "superscriptshift"), a = this.node.getProperty("texprimestyle") ? r.sup3 : i.displaystyle ? r.sup1 : r.sup2, o = this.length2em(i.superscriptshift, a);
			return Math.max(this.baseCharZero(t.h * this.baseScale - r.sup_drop * n.rscale), o, n.d * n.rscale + 1 / 4 * r.x_height);
		}
		hasMovableLimits() {
			let e = this.node.attributes.get("displaystyle"), t = this.baseChild.coreMO().node;
			return !e && !!t.attributes.get("movablelimits");
		}
		getOverKU(e, t) {
			let n = this.node.attributes.get("accent"), r = this.font.params, i = t.d * t.rscale, a = r.rule_thickness * r.separation_factor, o = this.baseHasAccentOver ? a : 0, s = this.isLineAbove ? 3 * r.rule_thickness : a, c = (n ? s : Math.max(r.big_op_spacing1, r.big_op_spacing3 - Math.max(0, i))) - o;
			return [c, e.h * e.rscale + c + i];
		}
		getUnderKV(e, t) {
			let n = this.node.attributes.get("accentunder"), r = this.font.params, i = t.h * t.rscale, a = r.rule_thickness * r.separation_factor, o = this.baseHasAccentUnder ? a : 0, s = this.isLineBelow ? 3 * r.rule_thickness : a, c = (n ? s : Math.max(r.big_op_spacing2, r.big_op_spacing4 - i)) - o;
			return [c, -(e.d * e.rscale + c + i)];
		}
		getDeltaW(e, t = [
			0,
			0,
			0
		]) {
			let n = this.node.attributes.get("align"), r = e.map((e) => e.w * e.rscale);
			r[0] -= this.baseRemoveIc && !this.baseCore.node.attributes.get("largeop") ? this.baseIc : 0;
			let i = Math.max(...r), a = [], o = 0;
			for (let e of r.keys()) a[e] = (n === "center" ? (i - r[e]) / 2 : n === "right" ? i - r[e] : 0) + t[e], a[e] < o && (o = -a[e]);
			if (o) for (let e of a.keys()) a[e] += o;
			return [1, 2].map((t) => a[t] += e[t] ? e[t].dx * e[0].rscale : 0), a;
		}
		getDelta(e, t = !1) {
			let n = this.node.attributes.get("accent"), { sk: r, ic: i } = this.baseCore.getOuterBBox();
			return n && (r -= e.getOuterBBox().sk), ((n && !t ? r : 0) + this.font.skewIcFactor * i) * this.baseScale;
		}
		stretchChildren() {
			let e = [];
			for (let t of this.childNodes) t.canStretch(H.Horizontal) && e.push(t);
			let t = e.length, n = this.childNodes.length;
			if (t && n > 1) {
				let r = 0, i = t > 1 && t === n;
				for (let e of this.childNodes) {
					let t = e.stretch.dir === H.None;
					if (i || t) {
						let { w: n, rscale: i } = e.getOuterBBox(t);
						n * i > r && (r = n * i);
					}
				}
				for (let t of e) {
					let e = t.coreMO();
					e.size === null && e.getStretchedVariant([r / t.coreRScale()]);
				}
			}
		}
		constructor(e, t, n = null) {
			super(e, t, n), this.baseScale = 1, this.baseIc = 0, this.baseRemoveIc = !1, this.baseIsChar = !1, this.baseHasAccentOver = null, this.baseHasAccentUnder = null, this.isLineAbove = !1, this.isLineBelow = !1, this.isMathAccent = !1;
			let r = this.baseCore = this.getBaseCore();
			r && (this.setBaseAccentsFor(r), this.baseScale = this.getBaseScale(), this.baseIc = this.getBaseIc(), this.baseIsChar = this.isCharBase(), this.isMathAccent = this.baseIsChar && this.scriptChild && this.scriptChild.coreMO().node.getProperty("mathaccent") !== void 0, this.checkLineAccents(), this.baseRemoveIc = !this.isLineAbove && !this.isLineBelow && (!this.constructor.useIC || this.isMathAccent));
		}
		computeBBox(e, t = !1) {
			e.empty(), e.append(this.baseChild.getOuterBBox()), this.appendScripts(e), e.clean(), this.setChildPWidths(t);
		}
		appendScripts(e) {
			let t = this.getBaseWidth(), [n, r] = this.getOffset();
			return e.combine(this.scriptChild.getOuterBBox(), t + n, r), e.w += this.font.params.scriptspace, e;
		}
		get breakCount() {
			return this._breakCount < 0 && (this._breakCount = this.node.isEmbellished ? this.coreMO().embellishedBreakCount : this.node.linebreakContainer ? 0 : this.childNodes[0].breakCount), this._breakCount;
		}
		breakTop(e, t) {
			return this.node.linebreakContainer || !this.parent || this.node.childIndex(t.node) ? e : this.parent.breakTop(e, this);
		}
		computeLineBBox(e) {
			let t = this.breakCount;
			if (!t) return q.from(this.getOuterBBox(), this.linebreakOptions.lineleading);
			let n = this.baseChild.getLineBBox(e).copy();
			return e < t ? (e === 0 && this.addLeftBorders(n), this.addMiddleBorders(n)) : (this.appendScripts(n), this.addMiddleBorders(n), this.addRightBorders(n)), n;
		}
	};
	return t.useIC = !0, t;
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/scriptbase.js
var Ri = (function() {
	var e;
	let t = Li(J);
	return e = class extends t {
		toSVG(e) {
			if (this.toEmbellishedSVG(e)) return;
			let t = this.standardSvgNodes(e), n = this.getBaseWidth(), [r, i] = this.getOffset();
			this.baseChild.toSVG(t), this.baseChild.place(0, 0), this.scriptChild.toSVG([t[t.length - 1]]), this.scriptChild.place(n + r, i);
		}
	}, e.kind = "scriptbase", e;
})(), zi = class extends C {
	get kind() {
		return "msubsup";
	}
	get arity() {
		return 3;
	}
	get base() {
		return 0;
	}
	get sub() {
		return 1;
	}
	get sup() {
		return 2;
	}
	setChildInheritedAttributes(e, t, n, r) {
		let i = this.childNodes;
		i[0].setInheritedAttributes(e, t, n, r), i[1].setInheritedAttributes(e, !1, n + 1, r || this.sub === 1), i[2] && i[2].setInheritedAttributes(e, !1, n + 1, r || this.sub === 2);
	}
};
zi.defaults = Object.assign(Object.assign({}, C.defaults), {
	subscriptshift: "",
	superscriptshift: ""
});
var Bi = class extends zi {
	get kind() {
		return "msub";
	}
	get arity() {
		return 2;
	}
};
Bi.defaults = Object.assign({}, zi.defaults);
var Vi = class extends zi {
	get kind() {
		return "msup";
	}
	get arity() {
		return 2;
	}
	get sup() {
		return 1;
	}
	get sub() {
		return 2;
	}
};
Vi.defaults = Object.assign({}, zi.defaults);
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/msubsup.js
var Hi = (function() {
	var e;
	let t = Pi(Ri);
	return e = class extends t {}, e.kind = Bi.prototype.kind, e;
})(), Ui = (function() {
	var e;
	let t = Fi(Ri);
	return e = class extends t {}, e.kind = Vi.prototype.kind, e;
})(), Wi = (function() {
	var e;
	let t = Ii(Ri);
	return e = class extends t {
		toSVG(e) {
			if (this.toEmbellishedSVG(e)) return;
			let t = this.standardSvgNodes(e), [n, r, i] = [
				this.baseChild,
				this.supChild,
				this.subChild
			], a = this.getBaseWidth(), o = this.getAdjustedIc(), [s, c] = this.getUVQ();
			n.toSVG(t);
			let l = [t[t.length - 1]];
			r.toSVG(l), i.toSVG(l), n.place(0, 0), i.place(a + (this.baseIsChar ? 0 : o), c), r.place(a + o, s);
		}
	}, e.kind = zi.prototype.kind, e;
})();
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Wrappers/munderover.js
function Gi(e) {
	return class extends e {
		get scriptChild() {
			return this.childNodes[this.node.under];
		}
		constructor(...e) {
			super(...e), this.stretchChildren();
		}
		computeBBox(e, t = !1) {
			if (this.hasMovableLimits()) {
				super.computeBBox(e, t);
				return;
			}
			e.empty();
			let n = this.baseChild.getOuterBBox(), r = this.scriptChild.getOuterBBox(), i = this.getUnderKV(n, r)[1], a = this.isLineBelow ? 0 : this.getDelta(this.scriptChild, !0), [o, s] = this.getDeltaW([n, r], [0, -a]);
			e.combine(n, o, 0), e.combine(r, s, i), e.d += this.font.params.big_op_spacing5, e.clean(), this.setChildPWidths(t);
		}
	};
}
function Ki(e) {
	return class extends e {
		get scriptChild() {
			return this.childNodes[this.node.over];
		}
		constructor(...e) {
			super(...e), this.stretchChildren();
		}
		computeBBox(e) {
			if (this.hasMovableLimits()) {
				super.computeBBox(e);
				return;
			}
			e.empty();
			let t = this.baseChild.getOuterBBox(), n = this.scriptChild.getOuterBBox();
			this.node.attributes.get("accent") && (t.h = Math.max(t.h, this.font.params.x_height * this.baseScale));
			let r = this.getOverKU(t, n)[1], i = this.isLineAbove ? 0 : this.getDelta(this.scriptChild), [a, o] = this.getDeltaW([t, n], [0, i]);
			e.combine(t, a, 0), e.combine(n, o, r), e.h += this.font.params.big_op_spacing5, e.clean();
		}
	};
}
function qi(e) {
	return class extends e {
		get underChild() {
			return this.childNodes[this.node.under];
		}
		get overChild() {
			return this.childNodes[this.node.over];
		}
		get subChild() {
			return this.underChild;
		}
		get supChild() {
			return this.overChild;
		}
		constructor(...e) {
			super(...e), this.stretchChildren();
		}
		computeBBox(e) {
			if (this.hasMovableLimits()) {
				super.computeBBox(e);
				return;
			}
			e.empty();
			let t = this.overChild.getOuterBBox(), n = this.baseChild.getOuterBBox(), r = this.underChild.getOuterBBox();
			this.node.attributes.get("accent") && (n.h = Math.max(n.h, this.font.params.x_height * this.baseScale));
			let i = this.getOverKU(n, t)[1], a = this.getUnderKV(n, r)[1], o = this.getDelta(this.overChild), s = this.getDelta(this.underChild, !0), [c, l, u] = this.getDeltaW([
				n,
				r,
				t
			], [
				0,
				this.isLineBelow ? 0 : -s,
				this.isLineAbove ? 0 : o
			]);
			e.combine(n, c, 0), e.combine(t, u, i), e.combine(r, l, a);
			let d = this.font.params.big_op_spacing5;
			e.h += d, e.d += d, e.clean();
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/munderover.js
var Ji = class extends C {
	get kind() {
		return "munderover";
	}
	get arity() {
		return 3;
	}
	get base() {
		return 0;
	}
	get under() {
		return 1;
	}
	get over() {
		return 2;
	}
	get linebreakContainer() {
		return !0;
	}
	setChildInheritedAttributes(e, t, n, r) {
		let i = this.childNodes;
		i[0].setInheritedAttributes(e, t, n, r || !!i[this.over]);
		let a = !(t || !i[0].coreMO().attributes.get("movablelimits")), o = this.constructor.ACCENTS;
		i[1].setInheritedAttributes(e, !1, this.getScriptlevel(o[1], a, n), r || this.under === 1), this.setInheritedAccent(1, o[1], t, n, r, a), i[2] && (i[2].setInheritedAttributes(e, !1, this.getScriptlevel(o[2], a, n), r || this.under === 2), this.setInheritedAccent(2, o[2], t, n, r, a));
	}
	getScriptlevel(e, t, n) {
		return (t || !this.attributes.get(e)) && n++, n;
	}
	setInheritedAccent(e, t, n, r, i, a) {
		let o = this.childNodes[e];
		if (!this.attributes.hasExplicit(t) && o.isEmbellished) {
			let e = o.coreMO().attributes.get("accent");
			this.attributes.setInherited(t, e), e !== this.attributes.getDefault(t) && o.setInheritedAttributes({}, n, this.getScriptlevel(t, a, r), i);
		}
	}
};
Ji.defaults = Object.assign(Object.assign({}, C.defaults), {
	accent: !1,
	accentunder: !1,
	align: "center"
}), Ji.ACCENTS = [
	"",
	"accentunder",
	"accent"
];
var Yi = class extends Ji {
	get kind() {
		return "munder";
	}
	get arity() {
		return 2;
	}
};
Yi.defaults = Object.assign({}, Ji.defaults);
var Xi = class extends Ji {
	get kind() {
		return "mover";
	}
	get arity() {
		return 2;
	}
	get over() {
		return 1;
	}
	get under() {
		return 2;
	}
};
Xi.defaults = Object.assign({}, Ji.defaults), Xi.ACCENTS = [
	"",
	"accent",
	"accentunder"
];
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/munderover.js
var Zi = (function() {
	var e;
	let t = Gi(Hi);
	return e = class extends t {
		toSVG(e) {
			if (this.toEmbellishedSVG(e)) return;
			if (this.hasMovableLimits()) {
				super.toSVG(e);
				return;
			}
			let t = this.standardSvgNodes(e), [n, r] = [this.baseChild, this.scriptChild], [i, a] = [n.getOuterBBox(), r.getOuterBBox()];
			n.toSVG(t), r.toSVG(t);
			let o = this.isLineBelow ? 0 : this.getDelta(this.scriptChild, !0), s = this.getUnderKV(i, a)[1], [c, l] = this.getDeltaW([i, a], [0, -o]);
			n.place(c, 0), r.place(l, s);
		}
	}, e.kind = Yi.prototype.kind, e;
})(), Qi = (function() {
	var e;
	let t = Ki(Ui);
	return e = class extends t {
		toSVG(e) {
			if (this.toEmbellishedSVG(e)) return;
			if (this.hasMovableLimits()) {
				super.toSVG(e);
				return;
			}
			let t = this.standardSvgNodes(e), [n, r] = [this.baseChild, this.scriptChild], [i, a] = [n.getOuterBBox(), r.getOuterBBox()];
			n.toSVG(t), r.toSVG(t);
			let o = this.isLineAbove ? 0 : this.getDelta(this.scriptChild), s = this.getOverKU(i, a)[1], [c, l] = this.getDeltaW([i, a], [0, o]);
			n.place(c, 0), r.place(l, s);
		}
	}, e.kind = Xi.prototype.kind, e;
})(), $i = (function() {
	var e;
	let t = qi(Wi);
	return e = class extends t {
		toSVG(e) {
			if (this.toEmbellishedSVG(e)) return;
			if (this.hasMovableLimits()) {
				super.toSVG(e);
				return;
			}
			let t = this.standardSvgNodes(e), [n, r, i] = [
				this.baseChild,
				this.overChild,
				this.underChild
			], [a, o, s] = [
				n.getOuterBBox(),
				r.getOuterBBox(),
				i.getOuterBBox()
			];
			n.toSVG(t), i.toSVG(t), r.toSVG(t);
			let c = this.getDelta(this.overChild), l = this.getDelta(this.underChild, !0), u = this.getOverKU(a, o)[1], d = this.getUnderKV(a, s)[1], [f, p, m] = this.getDeltaW([
				a,
				s,
				o
			], [
				0,
				this.isLineBelow ? 0 : -l,
				this.isLineAbove ? 0 : c
			]);
			n.place(f, 0), i.place(p, d), r.place(m, u);
		}
	}, e.kind = Ji.prototype.kind, e;
})(), ea = {
	base: "subList",
	subList: "supList",
	supList: "subList",
	psubList: "psupList",
	psupList: "psubList"
};
function ta(e) {
	return class extends e {
		combinePrePost(e, t) {
			let n = new K(e);
			return n.combine(t, 0, 0), n;
		}
		getScriptData() {
			let e = this.scriptData = {
				base: null,
				sub: K.empty(),
				sup: K.empty(),
				psub: K.empty(),
				psup: K.empty(),
				numPrescripts: 0,
				numScripts: 0
			}, t = this.getScriptBBoxLists();
			this.combineBBoxLists(e.sub, e.sup, t.subList, t.supList), this.combineBBoxLists(e.psub, e.psup, t.psubList, t.psupList), e.base = t.base[0], e.numPrescripts = t.psubList.length, e.numScripts = t.subList.length;
		}
		getScriptBBoxLists() {
			let e = {
				base: [],
				subList: [],
				supList: [],
				psubList: [],
				psupList: []
			}, t = "base";
			for (let n of this.childNodes) n.node.isKind("mprescripts") ? t = "psubList" : (e[t].push(n.getOuterBBox()), t = ea[t]);
			return this.firstPrescript = e.subList.length + e.supList.length + 2, this.padLists(e.subList, e.supList), this.padLists(e.psubList, e.psupList), e;
		}
		padLists(e, t) {
			e.length > t.length && t.push(K.empty());
		}
		combineBBoxLists(e, t, n, r) {
			for (let i = 0; i < n.length; i++) {
				let [a, o, s] = this.getScaledWHD(n[i]), [c, l, u] = this.getScaledWHD(r[i]), d = Math.max(a, c);
				e.w += d, t.w += d, o > e.h && (e.h = o), s > e.d && (e.d = s), l > t.h && (t.h = l), u > t.d && (t.d = u);
			}
		}
		getScaledWHD(e) {
			let { w: t, h: n, d: r, rscale: i } = e;
			return [
				t * i,
				n * i,
				r * i
			];
		}
		getCombinedUV() {
			let e = this.scriptData, t = this.combinePrePost(e.sub, e.psub), n = this.combinePrePost(e.sup, e.psup);
			return this.getUVQ(t, n);
		}
		addPrescripts(e, t, n) {
			let r = this.scriptData;
			if (r.numPrescripts) {
				let i = this.font.params.scriptspace;
				e.combine(r.psup, i, t), e.combine(r.psub, i, n);
			}
			return e;
		}
		addPostscripts(e, t, n) {
			let r = this.scriptData;
			if (r.numScripts) {
				let i = e.w;
				e.combine(r.sup, i, t), e.combine(r.sub, i, n), e.w += this.font.params.scriptspace;
			}
			return e;
		}
		constructor(...e) {
			super(...e), this.scriptData = null, this.firstPrescript = 0, this.getScriptData();
		}
		appendScripts(e) {
			e.empty();
			let [t, n] = this.getCombinedUV();
			return this.addPrescripts(e, t, n), e.append(this.scriptData.base), this.addPostscripts(e, t, n), e.clean(), e;
		}
		computeLineBBox(e) {
			let t = this.baseChild.breakCount, n = this.baseChild.getLineBBox(e).copy(), r = n, [i, a] = this.getCombinedUV();
			return e === 0 ? (r = q.from(this.addPrescripts(K.zero(), i, a), this.linebreakOptions.lineleading), r.append(n), this.addLeftBorders(r), r.L = this.bbox.L) : e === t && (r = this.addPostscripts(r, i, a), this.addRightBorders(r), r.R = this.bbox.R), this.addMiddleBorders(r), r;
		}
		getUVQ(e, t) {
			if (!this.UVQ) {
				let [n, r, i] = [
					0,
					0,
					0
				];
				e.w === 0 ? n = this.getU() : t.w === 0 ? n = -this.getV() : [n, r, i] = super.getUVQ(e, t), this.UVQ = [
					n,
					r,
					i
				];
			}
			return this.UVQ;
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/mmultiscripts.js
var na = class extends zi {
	get kind() {
		return "mmultiscripts";
	}
	get arity() {
		return 1;
	}
	setChildInheritedAttributes(e, t, n, r) {
		this.childNodes[0].setInheritedAttributes(e, t, n, r);
		let i = !1;
		for (let t = 1, a = 0; t < this.childNodes.length; t++) {
			let o = this.childNodes[t];
			if (o.isKind("mprescripts")) {
				if (!i && (i = !0, t % 2 == 0)) {
					let e = this.factory.create("none");
					this.childNodes.splice(t, 0, e), e.parent = this, t++;
				}
			} else {
				let t = r || a % 2 == 0;
				o.setInheritedAttributes(e, !1, n + 1, t), a++;
			}
		}
		this.childNodes.length % 2 == +!!i && (this.appendChild(this.factory.create("none")), this.childNodes[this.childNodes.length - 1].setInheritedAttributes(e, !1, n + 1, r));
	}
	verifyChildren(e) {
		let t = !1, n = e.fixMmultiscripts;
		for (let r = 0; r < this.childNodes.length; r++) {
			let i = this.childNodes[r];
			i.isKind("mprescripts") && (t ? i.mError(i.kind + " can only appear once in " + this.kind, e, !0) : (t = !0, r % 2 == 0 && !n && this.mError("There must be an equal number of prescripts of each type", e)));
		}
		this.childNodes.length % 2 == +!!t && !n && this.mError("There must be an equal number of scripts of each type", e), super.verifyChildren(e);
	}
};
na.defaults = Object.assign({}, zi.defaults);
var ra = class extends x {
	get kind() {
		return "mprescripts";
	}
	get arity() {
		return 0;
	}
	verifyTree(e) {
		super.verifyTree(e), this.parent && !this.parent.isKind("mmultiscripts") && this.mError(this.kind + " must be a child of mmultiscripts", e, !0);
	}
};
ra.defaults = Object.assign({}, x.defaults);
var ia = class extends x {
	get kind() {
		return "none";
	}
	get arity() {
		return 0;
	}
	verifyTree(e) {
		super.verifyTree(e), this.parent && !this.parent.isKind("mmultiscripts") && this.mError(this.kind + " must be a child of mmultiscripts", e, !0);
	}
};
ia.defaults = Object.assign({}, x.defaults);
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/mmultiscripts.js
function aa(e) {
	return {
		left: (e, t) => 0,
		center: (e, t) => (t - e) / 2,
		right: (e, t) => t - e
	}[e] || ((e, t) => 0);
}
var oa = (function() {
	var e;
	let t = ta(Wi);
	return e = class extends t {
		toSVG(e) {
			if (this.toEmbellishedSVG(e)) return;
			let t = this.standardSvgNodes(e), n = this.scriptData, r = this.node.getProperty("scriptalign") || "right left", [i, a] = Ge(r + " " + r), [o, s] = this.getCombinedUV(), c = 0;
			n.numPrescripts && (c = this.addScripts(this.dom[0], this.font.params.scriptspace, o, s, this.firstPrescript, n.numPrescripts, i));
			let l = this.baseChild;
			l.toSVG(t), l.place(c, 0), this.breakCount && (c = 0), c += l.getLineBBox(l.breakCount).w, n.numScripts && this.addScripts(this.dom[this.dom.length - 1], c, o, s, 1, n.numScripts, a);
		}
		addScripts(e, t, n, r, i, a, o) {
			let s = this.adaptor, c = aa(o), l = s.append(e, this.svg("g")), u = s.append(e, this.svg("g"));
			this.place(t, n, l), this.place(t, r, u);
			let d = i + 2 * a, f = 0;
			for (; i < d;) {
				let [e, t] = [this.childNodes[i++], this.childNodes[i++]], [n, r] = [e.getOuterBBox(), t.getOuterBBox()], [a, o] = [n.rscale, r.rscale], s = Math.max(n.w * a, r.w * o);
				e.toSVG([u]), t.toSVG([l]), e.place(f + c(n.w * a, s), 0), t.place(f + c(r.w * o, s), 0), f += s;
			}
			return t + f;
		}
	}, e.kind = na.prototype.kind, e;
})();
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/util/numeric.js
function sa(e) {
	return e.reduce((e, t) => e + t, 0);
}
function ca(e) {
	return e.reduce((e, t) => Math.max(e, t), 0);
}
function la(e) {
	return class extends e {
		get tableRows() {
			return this.childNodes;
		}
		findContainer() {
			let e = this, t = e.parent;
			for (; t && (t.node.notParent || t.node.isKind("mrow"));) e = t, t = t.parent;
			this.container = t, this.containerI = e.node.childPosition();
		}
		getPercentageWidth() {
			if (this.hasLabels) this.bbox.pwidth = K.fullWidth;
			else {
				let e = this.node.attributes.get("width");
				We(e) && (this.bbox.pwidth = e);
			}
		}
		stretchRows() {
			let e = this.node.attributes.get("equalrows"), t = e ? this.getEqualRowHeight() : 0, { H: n, D: r } = e ? this.getTableData() : {
				H: [0],
				D: [0]
			}, i = this.tableRows;
			for (let a = 0; a < this.numRows; a++) {
				let o = e ? [(t + n[a] - r[a]) / 2, (t - n[a] + r[a]) / 2] : null;
				i[a].stretchChildren(o);
			}
		}
		stretchColumns() {
			let e = this.getColumnAttributes("columnwidth", 0);
			for (let t = 0; t < this.numCols; t++) {
				let n = typeof this.cWidths[t] == "number" ? this.cWidths[t] : null;
				this.stretchColumn(t, n), n !== null && this.breakColumn(t, n, e[t]);
			}
		}
		stretchColumn(e, t) {
			let n = [];
			for (let t of this.tableRows) {
				let r = t.getChild(e);
				if (r) {
					let e = r.childNodes[0];
					e.stretch.dir === H.None && e.canStretch(H.Horizontal) && n.push(e);
				}
			}
			let r = n.length;
			if (r && t === null) {
				t = 0;
				let n = r === this.childNodes.length;
				for (let r of this.tableRows) {
					let i = r.getChild(e);
					if (i) {
						let e = i.childNodes[0], r = e.stretch.dir === H.None;
						if (n || r) {
							let { w: n } = e.getBBox(r);
							n > t && (t = n);
						}
					}
				}
			}
			if (t !== null) {
				let r = this.getTableData().W;
				for (let i of n) {
					let n = i.getBBox().w;
					i.coreMO().getStretchedVariant([Math.max(t, n) / i.coreRScale()]), n = i.getBBox().w, n > r[e] && (r[e] = n);
				}
			}
		}
		breakColumn(e, t, n) {
			if (this.jax.math.root.attributes.get("overflow") !== "linebreak" || !this.jax.math.display) return;
			let { H: r, D: i } = this.getTableData(), a = 0, o = 0;
			for (let n of this.tableRows) {
				let s = n.getChild(e);
				if (s) {
					let c = n.getBBox().rscale, l = s.getBBox();
					if (s && l.w * c > t) {
						s.childNodes[0].breakToWidth(t);
						let o = n.node.attributes.get("rowalign");
						this.updateHDW(s, e, a, o, r, i);
					}
					l.w * c > o && (o = l.w * c);
				}
				let c = n.getBBox();
				c.h = r[a], c.d = i[a], a++;
			}
			(n === "fit" || n === "auto" || We(n) || o > this.cWidths[e]) && (this.cWidths[e] = o);
		}
		getTableData() {
			if (this.data) return this.data;
			let e = Array(this.numRows).fill(0), t = Array(this.numRows).fill(0), n = Array(this.numCols).fill(0), r = Array(this.numRows), i = Array(this.numRows), a = [0], o = this.tableRows;
			for (let s = 0; s < o.length; s++) {
				let c = o[s], l = c.node.attributes.get("rowalign");
				for (let r = 0; r < c.numCells; r++) {
					let i = c.getChild(r);
					this.updateHDW(i, r, s, l, e, t, n), this.recordPWidthCell(i, r);
				}
				r[s] = e[s], i[s] = t[s], c.labeled && this.updateHDW(c.childNodes[0], 0, s, l, e, t, a), c.bbox.h = e[s], c.bbox.d = t[s];
			}
			let s = a[0];
			return this.data = {
				H: e,
				D: t,
				W: n,
				NH: r,
				ND: i,
				L: s
			}, this.data;
		}
		updateHDW(e, t, n, r, i, a, o = null) {
			let { h: s, d: c, w: l } = e.getBBox(), u = e.parent.bbox.rscale;
			e.parent.bbox.rscale !== 1 && (s *= u, c *= u, l *= u), this.node.getProperty("useHeight") && (s < .75 && (s = .75), c < .25 && (c = .25)), r = e.node.attributes.get("rowalign") || r, Object.hasOwn(this.adjustHD, r) || (r = "other"), this.adjustHD[r](s, c, i, a, n), o && l > o[t] && (o[t] = l);
		}
		recordPWidthCell(e, t) {
			e.childNodes[0] && e.childNodes[0].getBBox().pwidth && this.pwidthCells.push([e, t]);
		}
		setColumnPWidths() {
			let e = this.cWidths;
			for (let [t, n] of this.pwidthCells) t.setChildPWidths(!1, e[n]) && (t.invalidateBBox(), t.getBBox());
		}
		getBBoxHD(e) {
			let [t, n] = this.getAlignmentRow();
			if (n === null) {
				let n = this.font.params.axis_height, r = e / 2;
				return {
					top: [0, e],
					center: [r, r],
					bottom: [e, 0],
					baseline: [r, r],
					axis: [r + n, r - n]
				}[t] || [r, r];
			}
			{
				let r = this.getVerticalPosition(n, t);
				return [r, e - r];
			}
		}
		getBBoxLR() {
			if (this.hasLabels) {
				let e = this.node.attributes, t = e.get("side"), [n, r] = this.getPadAlignShift(t), i = this.hasLabels && !!e.get("data-width-includes-label");
				return i && this.frame && this.fSpace[0] && (n -= this.fSpace[0]), r === "center" && !i ? [n, n] : t === "left" ? [n, 0] : [0, n];
			}
			return [this.bbox?.L || 0, 0];
		}
		getPadAlignShift(e) {
			let { L: t } = this.getTableData(), n = t + this.length2em(this.node.attributes.get("minlabelspacing")), [r, i] = this.styles == null ? ["", ""] : [this.styles.get("padding-left"), this.styles.get("padding-right")];
			(r || i) && (n = Math.max(n, this.length2em(r || "0"), this.length2em(i || "0")));
			let [a, o] = this.getAlignShift();
			return a === e && (o = e === "left" ? Math.max(n, o) - n : Math.min(-n, o) + n), [
				n,
				a,
				o
			];
		}
		getWidth() {
			return this.pWidth || this.getBBox().w;
		}
		adjustWideTable() {
			let e = this.node.attributes;
			if (e.get("width") !== "auto") return;
			let [t, n] = this.getPadAlignShift(e.get("side")), r = Math.max(this.containerWidth / 10, this.containerWidth - t - (n === "center" ? t : 0));
			this.naturalWidth() > r && this.adjustColumnWidths(r);
		}
		naturalWidth() {
			return sa(this.getComputedWidths().concat(this.cLines, this.cSpace)) + 2 * this.fLine + this.fSpace[0] + this.fSpace[2];
		}
		getEqualRowHeight() {
			let { H: e, D: t } = this.getTableData(), n = Array.from(e.keys()).map((n) => e[n] + t[n]);
			return Math.max(...n);
		}
		getComputedWidths() {
			let e = this.getTableData().W, t = Array.from(e.keys()).map((t) => typeof this.cWidths[t] == "number" ? this.cWidths[t] : e[t]);
			return this.node.attributes.get("equalcolumns") && (t = Array(t.length).fill(ca(t))), t;
		}
		getColumnWidths() {
			let e = this.node.attributes.get("width");
			if (this.node.attributes.get("equalcolumns")) return this.getEqualColumns(e);
			let t = this.getColumnAttributes("columnwidth", 0);
			return e === "auto" ? this.getColumnWidthsAuto(t) : We(e) ? this.getColumnWidthsPercent(t) : this.getColumnWidthsFixed(t, this.length2em(e));
		}
		getEqualColumns(e) {
			let t = Math.max(1, this.numCols), n;
			if (e === "auto") {
				let { W: e } = this.getTableData();
				n = ca(e);
			} else if (We(e)) n = this.percent(1 / t);
			else {
				let r = sa([].concat(this.cLines, this.cSpace)) + this.fSpace[0] + this.fSpace[2];
				n = Math.max(0, this.length2em(e) - r) / t;
			}
			return Array(this.numCols).fill(n);
		}
		getColumnWidthsAuto(e) {
			return e.map((e) => e === "auto" || e === "fit" ? null : We(e) ? e : this.length2em(e));
		}
		getColumnWidthsPercent(e) {
			let t = e.includes("fit"), { W: n } = t ? this.getTableData() : { W: null };
			return Array.from(e.keys()).map((r) => {
				let i = e[r];
				return i === "fit" ? null : i === "auto" ? t ? n[r] : null : We(i) ? i : this.length2em(i);
			});
		}
		getColumnWidthsFixed(e, t) {
			let n = Array.from(e.keys()), r = n.filter((t) => e[t] === "fit"), i = n.filter((t) => e[t] === "auto"), a = r.length || i.length, { W: o } = a ? this.getTableData() : { W: null }, s = t - sa([].concat(this.cLines, this.cSpace)) - this.fSpace[0] - this.fSpace[2], c = s;
			n.forEach((t) => {
				let n = e[t];
				c -= n === "fit" || n === "auto" ? o[t] : this.length2em(n, s);
			});
			let l = a && c > 0 ? c / a : 0;
			return n.map((t) => {
				let n = e[t];
				return n === "fit" ? o[t] + l : n === "auto" ? o[t] + (r.length === 0 ? l : 0) : this.length2em(n, s);
			});
		}
		adjustColumnWidths(e) {
			let { W: t } = this.getTableData(), n = this.getColumnAttributes("columnwidth", 0), r = Array.from(n.keys()), i = r.filter((e) => n[e] === "fit").sort((e, n) => t[n] - t[e]), a = r.filter((e) => n[e] === "auto").sort((e, n) => t[n] - t[e]), o = r.filter((e) => We(n[e])).sort((e, n) => t[n] - t[e]), s = r.filter((e) => n[e] !== "fit" && n[e] !== "auto" && !We(n[e])).sort((e, n) => t[n] - t[e]), c = [
				...i,
				...a,
				...o,
				...s
			];
			if (!c.length) return;
			this.cWidths = r.map((e) => typeof this.cWidths[e] == "number" ? this.cWidths[e] : t[e]);
			let l = e - sa([].concat(this.cLines, this.cSpace)) - this.fSpace[0] - this.fSpace[2], u = sa(this.cWidths) - l, d = 0, f = 0;
			for (; f < c.length && (d += t[c[f++]], !(d && u / d < .333)););
			u = 1 - u / d, c.slice(0, f).forEach((e) => this.cWidths[e] *= u);
		}
		getVerticalPosition(e, t) {
			let n = this.node.attributes.get("equalrows"), { H: r, D: i } = this.getTableData(), a = n ? this.getEqualRowHeight() : 0, o = this.getRowHalfSpacing(), s = this.fLine;
			for (let t = 0; t < e; t++) s += o[t] + (n ? a : r[t] + i[t]) + o[t + 1] + this.rLines[t];
			let [c, l] = n ? [(a + r[e] - i[e]) / 2, (a - r[e] + i[e]) / 2] : [r[e], i[e]], u = {
				top: 0,
				center: o[e] + (c + l) / 2,
				bottom: o[e] + c + l + o[e + 1],
				baseline: o[e] + c,
				axis: o[e] + c - .25
			};
			return s += u[t] || 0, s;
		}
		getFrameSpacing() {
			let e = this.fframe ? this.convertLengths(this.getAttributeArray("framespacing")) : [0, 0];
			e[2] = e[0];
			let t = this.node.attributes.get("data-array-padding");
			if (t) {
				let [n, r] = this.convertLengths(Ge(t));
				e[0] = n, e[2] = r;
			}
			return e;
		}
		getEmHalfSpacing(e, t, n = 1) {
			let r = this.addEm(t, 2 / n);
			return r.unshift(this.em(e[0] * n)), r.push(this.em(e[1] * n)), r;
		}
		getRowHalfSpacing() {
			let e = this.rSpace.map((e) => e / 2);
			return e.unshift(this.fSpace[1]), e.push(this.fSpace[1]), e;
		}
		getColumnHalfSpacing() {
			let e = this.cSpace.map((e) => e / 2);
			return e.unshift(this.fSpace[0]), e.push(this.fSpace[2]), e;
		}
		getAlignmentRow() {
			let [e, t] = Ge(this.node.attributes.get("align"));
			if (t == null) return [e, null];
			let n = parseInt(t);
			return n < 0 && (n += this.numRows + 1), [e, n < 1 || n > this.numRows ? null : n - 1];
		}
		getColumnAttributes(e, t = 1) {
			let n = this.numCols - t, r = this.getAttributeArray(e);
			if (r.length === 0) return null;
			for (; r.length < n;) r.push(r[r.length - 1]);
			return r.length > n && r.splice(n), r;
		}
		getRowAttributes(e, t = 1) {
			let n = this.numRows - t, r = this.getAttributeArray(e);
			if (r.length === 0) return null;
			for (; r.length < n;) r.push(r[r.length - 1]);
			return r.length > n && r.splice(n), r;
		}
		getAttributeArray(e) {
			let t = this.node.attributes.get(e);
			return t ? Ge(t) : [this.node.attributes.getDefault(e)];
		}
		addEm(e, t = 1) {
			return e ? e.map((e) => this.em(e / t)) : null;
		}
		convertLengths(e) {
			return e ? e.map((e) => this.length2em(e)) : null;
		}
		constructor(e, t, n = null) {
			super(e, t, n), this.numCols = 0, this.numRows = 0, this.data = null, this.pwidthCells = [], this.pWidth = 0, this.adjustHD = {
				top: (e, t, n, r, i) => {
					e > n[i] && (r[i] -= e - n[i], n[i] = e), e + t > n[i] + r[i] && (r[i] = e + t - n[i]);
				},
				bottom: (e, t, n, r, i) => {
					t > r[i] && (n[i] -= t - r[i], r[i] = t), e + t > n[i] + r[i] && (n[i] = e + t - r[i]);
				},
				center: (e, t, n, r, i) => {
					e + t > n[i] + r[i] && (n[i] = r[i] = (e + t) / 2);
				},
				other: (e, t, n, r, i) => {
					e > n[i] && (n[i] = e), t > r[i] && (r[i] = t);
				}
			}, this.numCols = ca(this.tableRows.map((e) => e.numCells)), this.numRows = this.childNodes.length, this.hasLabels = this.childNodes.reduce((e, t) => e || t.node.isKind("mlabeledtr"), !1), this.findContainer(), this.isTop = !this.container || this.container.node.isKind("math") && !this.container.parent, this.isTop && (this.jax.table = this), this.getPercentageWidth();
			let r = this.node.attributes, i = r.get("frame");
			this.frame = i !== "none", this.fframe = this.frame || r.get("data-frame-styles") !== void 0, this.fLine = this.frame ? .07 : 0, this.fSpace = this.getFrameSpacing(), this.cSpace = this.convertLengths(this.getColumnAttributes("columnspacing")), this.rSpace = this.convertLengths(this.getRowAttributes("rowspacing")), this.cLines = this.getColumnAttributes("columnlines").map((e) => e === "none" ? 0 : .07), this.rLines = this.getRowAttributes("rowlines").map((e) => e === "none" ? 0 : .07), this.cWidths = this.getColumnWidths(), this.adjustWideTable(), this.stretchColumns(), this.stretchRows();
		}
		getStyles() {
			super.getStyles();
			let e = this.node.attributes.get("data-frame-styles");
			if (!e) return;
			this.styles ||= new I("");
			let t = e.split(/ /);
			for (let e of mn.keys()) {
				let n = t[e];
				n !== "none" && this.styles.set(`border-${mn[e]}`, `.07em ${n}`);
			}
		}
		computeBBox(e, t = !1) {
			let { H: n, D: r } = this.getTableData(), i, a;
			if (this.node.attributes.get("equalrows")) {
				let e = this.getEqualRowHeight();
				i = sa([].concat(this.rLines, this.rSpace)) + e * this.numRows;
			} else i = sa(n.concat(r, this.rLines, this.rSpace));
			i += 2 * (this.fLine + this.fSpace[1]), a = this.naturalWidth();
			let o = this.node.attributes.get("width");
			o !== "auto" && (a = Math.max(this.length2em(o, 0) + 2 * this.fLine, a));
			let [s, c] = this.getBBoxHD(i);
			e.h = s, e.d = c, e.w = a;
			let [l, u] = this.getBBoxLR();
			e.L = l, e.R = u, We(o) || this.setColumnPWidths();
		}
		setChildPWidths(e, t, n) {
			let r = this.node.attributes.get("width");
			if (!We(r)) return !1;
			this.hasLabels || (this.bbox.pwidth = "", this.container.bbox.pwidth = "");
			let { w: i, L: a, R: o } = this.bbox, s = this.node.attributes.get("data-width-includes-label"), c = Math.max(i, this.length2em(r, Math.max(t, a + i + o))) - (s ? a + o : 0), l = this.node.attributes.get("equalcolumns") ? Array(this.numCols).fill(this.percent(1 / Math.max(1, this.numCols))) : this.getColumnAttributes("columnwidth", 0);
			return this.cWidths = this.getColumnWidthsFixed(l, c), this.pWidth = this.naturalWidth(), this.isTop && (this.bbox.w = this.pWidth), this.setColumnPWidths(), this.pWidth !== i && this.parent.invalidateBBox(), this.pWidth !== i;
		}
		getAlignShift() {
			return this.isTop ? super.getAlignShift() : [this.container.getChildAlign(this.containerI), 0];
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/mtable.js
var ua = class extends x {
	constructor() {
		super(...arguments), this.properties = { useHeight: !0 }, this.texclass = b.ORD;
	}
	get kind() {
		return "mtable";
	}
	get linebreakContainer() {
		return !0;
	}
	get linebreakAlign() {
		return "";
	}
	setInheritedAttributes(e, t, n, r) {
		for (let t of it) e[t] && this.attributes.setInherited(t, e[t][1]), this.attributes.hasExplicit(t) && this.attributes.unset(t);
		super.setInheritedAttributes(e, t, n, r);
	}
	setChildInheritedAttributes(e, t, n, r) {
		for (let e of this.childNodes) e.isKind("mtr") || this.replaceChild(this.factory.create("mtr"), e).appendChild(e);
		t = !!(this.attributes.getExplicit("displaystyle") || this.attributes.getDefault("displaystyle")), e = this.addInheritedAttributes(e, {
			columnalign: this.attributes.get("columnalign"),
			rowalign: "center",
			"data-break-align": this.attributes.get("data-break-align")
		});
		let i = this.attributes.getExplicit("data-cramped"), a = Ge(this.attributes.get("rowalign"));
		for (let r of this.childNodes) e.rowalign[1] = a.shift() || e.rowalign[1], r.setInheritedAttributes(e, t, n, !!i);
	}
	verifyChildren(e) {
		let t = null, n = this.factory;
		for (let r = 0; r < this.childNodes.length; r++) {
			let i = this.childNodes[r];
			if (i.isKind("mtr")) t = null;
			else {
				let a = i.isKind("mtd");
				if (t ? (this.removeChild(i), r--) : t = this.replaceChild(n.create("mtr"), i), t.appendChild(a ? i : n.create("mtd", {}, [i])), !e.fixMtables) {
					i.parent.removeChild(i), i.parent = this, a && t.appendChild(n.create("mtd"));
					let r = i.mError("Children of " + this.kind + " must be mtr or mlabeledtr", e, a);
					t.childNodes[t.childNodes.length - 1].appendChild(r);
				}
			}
		}
		super.verifyChildren(e);
	}
	setTeXclass(e) {
		this.getPrevClass(e);
		for (let e of this.childNodes) e.setTeXclass(null);
		return this;
	}
};
ua.defaults = Object.assign(Object.assign({}, x.defaults), {
	align: "axis",
	rowalign: "baseline",
	columnalign: "center",
	groupalign: "{left}",
	alignmentscope: !0,
	columnwidth: "auto",
	width: "auto",
	rowspacing: "1ex",
	columnspacing: ".8em",
	rowlines: "none",
	columnlines: "none",
	frame: "none",
	framespacing: "0.4em 0.5ex",
	equalrows: !1,
	equalcolumns: !1,
	displaystyle: !1,
	side: "right",
	minlabelspacing: "0.8em",
	"data-break-align": "top"
});
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/mtable.js
var da = "mjx-", fa = (function() {
	var e;
	let t = la(J);
	return e = class extends t {
		placeRows(e) {
			let t = this.node.attributes.get("equalrows"), { H: n, D: r } = this.getTableData(), i = this.getEqualRowHeight(), a = this.getRowHalfSpacing(), o = [
				this.fLine,
				...this.rLines,
				this.fLine
			], s = this.getBBox().h - o[0];
			for (let c = 0; c < this.numRows; c++) {
				let l = this.childNodes[c];
				[l.H, l.D] = this.getRowHD(t, i, n[c], r[c]), [l.tSpace, l.bSpace] = [a[c], a[c + 1]], [l.tLine, l.bLine] = [o[c], o[c + 1]], l.toSVG([e]), l.place(0, s - a[c] - l.H), s -= a[c] + l.H + l.D + a[c + 1] + o[c + 1];
			}
		}
		getRowHD(e, t, n, r) {
			return e ? [(t + n - r) / 2, (t - n + r) / 2] : [n, r];
		}
		handleColor() {
			super.handleColor();
			let e = this.firstChild();
			e && this.adaptor.setAttribute(e, "width", this.fixed(this.getWidth()));
		}
		handleColumnLines(e) {
			if (this.node.attributes.get("columnlines") === "none") return;
			let t = this.getColumnAttributes("columnlines");
			if (!t) return;
			let n = this.getColumnHalfSpacing(), r = this.cLines, i = this.getComputedWidths(), a = this.fLine;
			for (let o = 0; o < t.length; o++) a += n[o] + i[o] + n[o + 1], t[o] !== "none" && this.adaptor.append(e, this.makeVLine(a, t[o], r[o])), a += r[o];
		}
		handleRowLines(e) {
			if (this.node.attributes.get("rowlines") === "none") return;
			let t = this.getRowAttributes("rowlines");
			if (!t) return;
			let n = this.node.attributes.get("equalrows"), { H: r, D: i } = this.getTableData(), a = this.getEqualRowHeight(), o = this.getRowHalfSpacing(), s = this.rLines, c = this.getBBox().h - this.fLine;
			for (let l = 0; l < t.length; l++) {
				let [u, d] = this.getRowHD(n, a, r[l], i[l]);
				c -= o[l] + u + d + o[l + 1], t[l] !== "none" && this.adaptor.append(e, this.makeHLine(c, t[l], s[l])), c -= s[l];
			}
		}
		handleFrame(e) {
			if (this.frame && this.fLine) {
				let { h: t, d: n, w: r } = this.getBBox(), i = this.node.attributes.get("frame");
				this.adaptor.append(e, this.makeFrame(r, t, n, i));
			}
		}
		handlePWidth(e) {
			if (!this.pWidth) return 0;
			let { w: t, L: n, R: r } = this.getBBox(), i = n + this.pWidth + r, a = this.getAlignShift()[0], o = Math.max(this.isTop ? i : 0, this.container.getWrapWidth(this.containerI)) - n - r, s = t - (this.pWidth > o ? o : this.pWidth), c = a === "left" ? 0 : a === "right" ? s : s / 2;
			if (c) {
				let t = this.svg("g", {}, this.adaptor.childNodes(e));
				this.place(c, 0, t), this.adaptor.append(e, t);
			}
			return c;
		}
		lineClass(e) {
			return da + e;
		}
		makeFrame(e, t, n, r) {
			let i = this.fLine;
			return this.svg("rect", this.setLineThickness(i, r, {
				"data-frame": !0,
				class: this.lineClass(r),
				width: this.fixed(e - i),
				height: this.fixed(t + n - i),
				x: this.fixed(i / 2),
				y: this.fixed(i / 2 - n)
			}));
		}
		makeVLine(e, t, n) {
			let { h: r, d: i } = this.getBBox(), a = t === "dotted" ? n / 2 : 0, o = this.fixed(e + n / 2);
			return this.svg("line", this.setLineThickness(n, t, {
				"data-line": "v",
				class: this.lineClass(t),
				x1: o,
				y1: this.fixed(a - i),
				x2: o,
				y2: this.fixed(r - a)
			}));
		}
		makeHLine(e, t, n) {
			let r = this.getBBox().w, i = t === "dotted" ? n / 2 : 0, a = this.fixed(e - n / 2);
			return this.svg("line", this.setLineThickness(n, t, {
				"data-line": "h",
				class: this.lineClass(t),
				x1: this.fixed(i),
				y1: a,
				x2: this.fixed(r - i),
				y2: a
			}));
		}
		setLineThickness(e, t, n) {
			return e !== .07 && (n["stroke-thickness"] = this.fixed(e), t !== "solid" && (n["stroke-dasharray"] = (t === "dotted" ? "0," : "") + this.fixed(2 * e))), n;
		}
		handleLabels(e, t, n) {
			if (!this.hasLabels) return;
			let r = this.labels, i = this.node.attributes.get("side");
			this.spaceLabels(), this.isTop ? this.topTable(e, r, i) : this.subTable(e, r, i, n);
		}
		spaceLabels() {
			let e = this.adaptor, t = this.getBBox().h, n = this.getTableData().L, r = this.getRowHalfSpacing(), i = t - this.fLine, a = e.firstChild(this.labels);
			for (let t = 0; t < this.numRows; t++) {
				let o = this.childNodes[t];
				if (o.node.isKind("mlabeledtr")) {
					let s = o.childNodes[0];
					i -= r[t] + o.H, o.placeCell(s, {
						x: 0,
						y: i,
						w: n,
						lSpace: 0,
						rSpace: 0,
						lLine: 0,
						rLine: 0
					}), i -= o.D + r[t + 1] + this.rLines[t], a = e.next(a);
				} else i -= r[t] + o.H + o.D + r[t + 1] + this.rLines[t];
			}
		}
		topTable(e, t, n) {
			let r = this.adaptor, { h: i, d: a, w: o, L: s, R: c } = this.getBBox(), l = s + (this.pWidth || o) + c, u = this.getTableData().L, [, d, f] = this.getPadAlignShift(n), p = f + (d === "right" ? -l : d === "center" ? -l / 2 : 0) + s, m = "matrix(1 0 0 -1 0 0)", h = `scale(${this.jax.fixed(this.font.params.x_height * 1e3 / this.metrics.ex, 2)})`, g = `translate(0 ${this.fixed(i)}) ${m} ${h}`, ee = this.svg("svg", {
				"data-table": !0,
				preserveAspectRatio: d === "left" ? "xMinYMid" : d === "right" ? "xMaxYMid" : "xMidYMid",
				viewBox: `${this.fixed(-p)} ${this.fixed(-i)} 1 ${this.fixed(i + a)}`
			}, [this.svg("g", { transform: m }, r.childNodes(e))]);
			t = this.svg("svg", {
				"data-labels": !0,
				preserveAspectRatio: n === "left" ? "xMinYMid" : "xMaxYMid",
				viewBox: [
					n === "left" ? 0 : this.fixed(u),
					this.fixed(-i),
					1,
					this.fixed(i + a)
				].join(" ")
			}, [t]), r.append(e, this.svg("g", { transform: g }, [ee, t])), this.place(-s, 0, e);
		}
		subTable(e, t, n, r) {
			let i = this.adaptor, { w: a, L: o, R: s } = this.getBBox(), c = o + (this.pWidth || a) + s, l = this.getTableData().L, u = this.getAlignShift()[0], d = Math.max(c, this.container.getWrapWidth(this.containerI));
			this.place(n === "left" ? (u === "left" ? 0 : u === "right" ? c - d + r : (c - d) / 2 + r) - o : (u === "left" ? d : u === "right" ? c + r : (d + c) / 2 + r) - o - l, 0, t), i.append(e, t);
		}
		constructor(e, t, n = null) {
			super(e, t, n);
			let r = { "data-labels": !0 };
			this.isTop && (r.transform = "matrix(1 0 0 -1 0 0)"), this.labels = this.svg("g", r);
		}
		toSVG(e) {
			let t = this.standardSvgNodes(e)[0];
			this.placeRows(t), this.handleColumnLines(t), this.handleRowLines(t), this.handleFrame(t);
			let n = this.handlePWidth(t);
			this.handleLabels(t, e[0], n);
		}
	}, e.kind = ua.prototype.kind, e.styles = {
		"g[data-mml-node=\"mtable\"] > line[data-line], svg[data-table] > g > line[data-line]": {
			"stroke-width": "70px",
			fill: "none"
		},
		"g[data-mml-node=\"mtable\"] > rect[data-frame], svg[data-table] > g > rect[data-frame]": {
			"stroke-width": "70px",
			fill: "none"
		},
		"g[data-mml-node=\"mtable\"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed": { "stroke-dasharray": "140" },
		"g[data-mml-node=\"mtable\"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted": {
			"stroke-linecap": "round",
			"stroke-dasharray": "0,140"
		},
		"g[data-mml-node=\"mtable\"] > g > svg": { overflow: "visible" }
	}, e;
})();
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Wrappers/mtr.js
function pa(e) {
	return class extends e {
		get numCells() {
			return this.childNodes.length;
		}
		get labeled() {
			return !1;
		}
		get tableCells() {
			return this.childNodes;
		}
		getChild(e) {
			return this.childNodes[e];
		}
		getChildBBoxes() {
			return this.childNodes.map((e) => e.getBBox());
		}
		stretchChildren(e = null) {
			let t = [], n = this.labeled ? this.childNodes.slice(1) : this.childNodes;
			for (let e of n) {
				let n = e.childNodes[0];
				n.canStretch(H.Vertical) && t.push(n);
			}
			let r = t.length, i = this.childNodes.length;
			if (r && i > 1 && !e) {
				let t = 0, a = 0, o = r > 1 && r === i;
				for (let e of n) {
					let n = e.childNodes[0], r = n.stretch.dir === H.None;
					if (o || r) {
						let { h: e, d: i } = n.getBBox(r);
						e > t && (t = e), i > a && (a = i);
					}
				}
				e = [t, a];
			}
			if (e) for (let n of t) {
				let t = n.coreRScale();
				n.coreMO().getStretchedVariant(e.map((e) => e * t));
			}
		}
		get fixesPWidth() {
			return !1;
		}
	};
}
function ma(e) {
	return class extends e {
		get numCells() {
			return Math.max(0, this.childNodes.length - 1);
		}
		get labeled() {
			return !0;
		}
		get tableCells() {
			return this.childNodes.slice(1);
		}
		getChild(e) {
			return this.childNodes[e + 1];
		}
		getChildBBoxes() {
			return this.childNodes.slice(1).map((e) => e.getBBox());
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/mtr.js
var ha = class extends x {
	get kind() {
		return "mtr";
	}
	get linebreakContainer() {
		return !0;
	}
	get linebreakAlign() {
		return "";
	}
	setChildInheritedAttributes(e, t, n, r) {
		for (let e of this.childNodes) e.isKind("mtd") || this.replaceChild(this.factory.create("mtd"), e).appendChild(e);
		let i = Ge(this.attributes.get("columnalign")), a = Ge(this.attributes.get("data-break-align"));
		this.arity === 1 && (i.unshift(this.parent.attributes.get("side")), a.unshift("top")), e = this.addInheritedAttributes(e, {
			rowalign: this.attributes.get("rowalign"),
			columnalign: "center",
			"data-break-align": "top"
		});
		for (let o of this.childNodes) e.columnalign[1] = i.shift() || e.columnalign[1], e["data-vertical-align"] = [this.kind, a.shift() || e["data-break-align"][1]], o.setInheritedAttributes(e, t, n, r);
	}
	verifyChildren(e) {
		if (this.parent && !this.parent.isKind("mtable")) {
			this.mError(this.kind + " can only be a child of an mtable", e, !0);
			return;
		}
		for (let t of this.childNodes) t.isKind("mtd") || (this.replaceChild(this.factory.create("mtd"), t).appendChild(t), e.fixMtables || t.mError("Children of " + this.kind + " must be mtd", e));
		super.verifyChildren(e);
	}
	setTeXclass(e) {
		this.getPrevClass(e);
		for (let e of this.childNodes) e.setTeXclass(null);
		return this;
	}
};
ha.defaults = Object.assign(Object.assign({}, x.defaults), {
	rowalign: y,
	columnalign: y,
	groupalign: y,
	"data-break-align": "top"
});
var ga = class extends ha {
	get kind() {
		return "mlabeledtr";
	}
	get arity() {
		return 1;
	}
}, _a = (function() {
	var e;
	let t = pa(J);
	return e = class extends t {
		placeCell(e, t) {
			let { x: n, y: r, lSpace: i, w: a, rSpace: o, lLine: s, rLine: c } = t, l = 1 / this.getBBox().rscale, [u, d] = [this.H * l, this.D * l], [f, p] = [this.tSpace * l, this.bSpace * l], [m, h] = e.placeCell(n + i, r, a, u, d), g = i + a + o;
			return e.placeColor(-(m + i + s / 2), -(d + p + h), g + (s + c) / 2, u + d + f + p), g + c;
		}
		placeCells(e) {
			let t = this.parent, n = t.getColumnHalfSpacing(), r = [
				t.fLine,
				...t.cLines,
				t.fLine
			], i = t.getComputedWidths(), a = 1 / this.getBBox().rscale, o = r[0];
			for (let t = 0; t < this.numCells; t++) {
				let s = this.getChild(t);
				s.toSVG(e), o += this.placeCell(s, {
					x: o,
					y: 0,
					lSpace: n[t] * a,
					rSpace: n[t + 1] * a,
					w: i[t] * a,
					lLine: r[t] * a,
					rLine: r[t + 1] * a
				});
			}
		}
		placeColor() {
			let e = 1 / this.getBBox().rscale, t = this.adaptor, n = this.firstChild();
			if (n && t.kind(n) === "rect" && t.getAttribute(n, "data-bgcolor")) {
				let [r, i] = [this.tLine / 2 * e, this.bLine / 2 * e], [a, o] = [this.tSpace * e, this.bSpace * e], [s, c] = [this.H * e, this.D * e];
				t.setAttribute(n, "y", this.fixed(-(c + o + i))), t.setAttribute(n, "width", this.fixed(this.parent.getWidth() * e)), t.setAttribute(n, "height", this.fixed(r + a + s + c + o + i));
			}
		}
		toSVG(e) {
			let t = this.standardSvgNodes(e);
			this.placeCells(t), this.placeColor();
		}
	}, e.kind = ha.prototype.kind, e;
})(), va = (function() {
	var e;
	let t = ma(_a);
	return e = class extends t {
		toSVG(e) {
			super.toSVG(e);
			let t = this.childNodes[0];
			t && t.toSVG([this.parent.labels]);
		}
	}, e.kind = ga.prototype.kind, e;
})();
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Wrappers/mtd.js
function ya(e) {
	return class extends e {
		get fixesPWidth() {
			return !1;
		}
		invalidateBBox() {
			this.bboxComputed = !1, this.lineBBox = [];
		}
		getWrapWidth(e) {
			let t = this.parent.parent, n = this.parent, r = this.node.childPosition() - +!!n.labeled;
			return typeof t.cWidths[r] == "number" ? t.cWidths[r] : t.getTableData().W[r];
		}
		getChildAlign(e) {
			return this.node.attributes.get("columnalign");
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/mtd.js
var ba = class extends C {
	get kind() {
		return "mtd";
	}
	get arity() {
		return -1;
	}
	get linebreakContainer() {
		return !0;
	}
	get linebreakAlign() {
		return "columnalign";
	}
	verifyChildren(e) {
		if (this.parent && !this.parent.isKind("mtr")) {
			this.mError(this.kind + " can only be a child of an mtr or mlabeledtr", e, !0);
			return;
		}
		super.verifyChildren(e);
	}
	setTeXclass(e) {
		return this.getPrevClass(e), this.childNodes[0].setTeXclass(null), this;
	}
};
ba.defaults = Object.assign(Object.assign({}, C.defaults), {
	rowspan: 1,
	columnspan: 1,
	rowalign: y,
	columnalign: y,
	groupalign: y,
	"data-vertical-align": "top"
});
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/mtd.js
var xa = (function() {
	var e;
	let t = ya(J);
	return e = class extends t {
		placeCell(e, t, n, r, i) {
			let a = this.getBBox(), o = Math.max(a.h, .75), s = Math.max(a.d, .25), c = this.node.attributes.get("columnalign"), l = this.node.attributes.get("rowalign"), u = this.getAlignX(n, a, c), d = this.getAlignY(r, i, o, s, l);
			return this.place(e + u, t + d), [u, d];
		}
		placeColor(e, t, n, r) {
			let i = this.adaptor, a = this.firstChild();
			a && i.kind(a) === "rect" && i.getAttribute(a, "data-bgcolor") && (i.setAttribute(a, "x", this.fixed(e)), i.setAttribute(a, "y", this.fixed(t)), i.setAttribute(a, "width", this.fixed(n)), i.setAttribute(a, "height", this.fixed(r)));
		}
	}, e.kind = ba.prototype.kind, e;
})(), Sa = {
	dx: ".2em",
	dy: ".1em",
	postDelay: 600,
	clearDelay: 100,
	hoverTimer: /* @__PURE__ */ new Map(),
	clearTimer: /* @__PURE__ */ new Map(),
	stopTimers: (e, t) => {
		t.clearTimer.has(e) && (clearTimeout(t.clearTimer.get(e)), t.clearTimer.delete(e)), t.hoverTimer.has(e) && (clearTimeout(t.hoverTimer.get(e)), t.hoverTimer.delete(e));
	}
};
function Ca(e) {
	return class extends e {
		get selected() {
			let e = this.node.attributes.get("selection"), t = Math.max(1, Math.min(this.childNodes.length, e)) - 1;
			return this.childNodes[t] || this.wrap(this.node.selected);
		}
		getParameters() {
			let [e, t] = Ge(this.node.attributes.get("data-offsets") || "");
			this.tipDx = this.length2em(e || Sa.dx), this.tipDy = this.length2em(t || Sa.dy);
		}
		constructor(e, t, n = null) {
			super(e, t, n);
			let r = this.constructor.actions, i = this.node.attributes.get("actiontype"), [a, o] = r.get(i) || [((e, t) => {}), {}];
			this.action = a, this.data = o, this.getParameters();
		}
		computeBBox(e, t = !1) {
			e.updateFrom(this.selected.getOuterBBox()), this.selected.setChildPWidths(t);
		}
		get breakCount() {
			return this.node.isEmbellished ? this.selected.coreMO().embellishedBreakCount : this.selected.breakCount;
		}
		computeLineBBox(e) {
			return this.getChildLineBBox(this.selected, e);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/maction.js
var wa = class extends x {
	get kind() {
		return "maction";
	}
	get arity() {
		return 1;
	}
	get selected() {
		let e = this.attributes.get("selection"), t = Math.max(1, Math.min(this.childNodes.length, e)) - 1;
		return this.childNodes[t] || this.factory.create("mrow");
	}
	get isEmbellished() {
		return this.selected.isEmbellished;
	}
	get isSpacelike() {
		return this.selected.isSpacelike;
	}
	core() {
		return this.selected.core();
	}
	coreMO() {
		return this.selected.coreMO();
	}
	verifyAttributes(e) {
		super.verifyAttributes(e), this.attributes.get("actiontype") !== "toggle" && this.attributes.hasExplicit("selection") && this.attributes.unset("selection");
	}
	setTeXclass(e) {
		this.attributes.get("actiontype") === "tooltip" && this.childNodes[1] && this.childNodes[1].setTeXclass(null);
		let t = this.selected;
		return e = t.setTeXclass(e), this.updateTeXclass(t), e;
	}
	nextToggleSelection() {
		let e = Math.max(1, parseInt(this.attributes.get("selection")) + 1);
		e > this.childNodes.length && (e = 1), this.attributes.set("selection", e);
	}
	setChildInheritedAttributes(e, t, n, r) {
		var i, a;
		if (this.attributes.get("actiontype").toLowerCase() !== "tooltip") {
			super.setChildInheritedAttributes(e, t, n, r);
			return;
		}
		(i = this.childNodes[0]) == null || i.setInheritedAttributes(e, t, n, r), (a = this.childNodes[1]) == null || a.setInheritedAttributes(e, !1, 1, !1);
	}
};
wa.defaults = Object.assign(Object.assign({}, x.defaults), {
	actiontype: "toggle",
	selection: 1
});
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/maction.js
var Ta = (function() {
	var e;
	let t = Ca(J);
	return e = class extends t {
		setEventHandler(e, t, n = null) {
			(n ? [n] : this.dom).forEach((n) => n.addEventListener(e, t));
		}
		Px(e) {
			return this.px(e);
		}
		toSVG(e) {
			if (this.toEmbellishedSVG(e)) return;
			let t = this.standardSvgNodes(e), n = this.selected, r = 0;
			this.dom.forEach((e) => {
				let { h: t, d: i, w: a } = n.getLineBBox(r++);
				this.adaptor.append(e, this.svg("rect", {
					width: this.fixed(a),
					height: this.fixed(t + i),
					x: r === 1 ? this.fixed(-this.dx) : 0,
					y: this.fixed(-i),
					fill: "none",
					"pointer-events": "all"
				}));
			}), n.toSVG(t);
			let i = n.getOuterBBox();
			n.dom && n.place(i.L * i.rscale, 0), this.action(this, this.data);
		}
	}, e.kind = wa.prototype.kind, e.styles = {
		"[jax=\"SVG\"] mjx-tool": {
			display: "inline-block",
			position: "relative",
			width: 0,
			height: 0
		},
		"[jax=\"SVG\"] mjx-tool > mjx-tip": {
			position: "absolute",
			top: 0,
			left: 0
		},
		"mjx-tool > mjx-tip": {
			display: "inline-block",
			"line-height": 0,
			padding: ".2em",
			border: "1px solid #888",
			"background-color": "#F8F8F8",
			color: "black",
			"box-shadow": "2px 2px 5px #AAAAAA"
		},
		"g[data-mml-node=\"maction\"][data-toggle]": { cursor: "pointer" },
		"mjx-status": {
			display: "block",
			position: "fixed",
			left: "1em",
			bottom: "1em",
			"min-width": "25%",
			padding: ".2em .4em",
			border: "1px solid #888",
			"font-size": "90%",
			"background-color": "#F8F8F8",
			color: "black"
		},
		"g[data-mjx-collapsed]": { fill: "#55F" },
		"@media (prefers-color-scheme: dark) /* svg maction */": {
			"mjx-tool > mjx-tip": {
				"background-color": "#303030",
				color: "#E0E0E0",
				"box-shadow": "2px 2px 5px #000"
			},
			"mjx-status": {
				"background-color": "#303030",
				color: "#E0E0E0"
			},
			"g[data-mjx-collapsed]": { fill: "#88F" }
		}
	}, e.actions = /* @__PURE__ */ new Map([
		["toggle", [(e, t) => {
			e.dom.forEach((t) => {
				e.adaptor.setAttribute(t, "data-toggle", e.node.attributes.get("selection"));
			});
			let n = e.factory.jax.math, r = e.factory.jax.document, i = e.node;
			e.setEventHandler("click", (e) => {
				n.end.node || (n.start.node = n.end.node = n.typesetRoot, n.start.n = n.end.n = 0), i.nextToggleSelection(), n.rerender(r, i.attributes.get("data-maction-id") ? v.ENRICHED : v.RERENDER), e.stopPropagation();
			});
		}, {}]],
		["tooltip", [(e, t) => {
			let n = e.childNodes[1];
			if (n) for (let r of e.dom) {
				let i = e.firstChild(r);
				if (n.node.isKind("mtext")) {
					let t = n.node.getText();
					e.adaptor.insert(e.svg("title", {}, [e.text(t)]), i);
				} else {
					let n = e.adaptor, a = e.jax.container, o = e.node.factory.create("math", {}, [e.childNodes[1].node]), s = e.html("mjx-tool", {}, [e.html("mjx-tip")]), c = n.append(i, e.svg("foreignObject", { style: { display: "none" } }, [s]));
					e.jax.processMath(e.jax.factory.wrap(o), n.firstChild(s)), e.childNodes[1].node.parent = e.node, e.setEventHandler("mouseover", (i) => {
						t.stopTimers(r, t), t.hoverTimer.set(r, setTimeout(() => {
							n.setStyle(s, "left", "0"), n.setStyle(s, "top", "0"), n.append(a, s);
							let t = n.nodeBBox(s), i = n.nodeBBox(r), o = (i.right - t.left) / e.metrics.em + e.tipDx, c = (i.bottom - t.bottom) / e.metrics.em + e.tipDy;
							n.setStyle(s, "left", e.Px(o)), n.setStyle(s, "top", e.Px(c));
						}, t.postDelay)), i.stopPropagation();
					}, r), e.setEventHandler("mouseout", (e) => {
						t.stopTimers(r, t);
						let i = setTimeout(() => n.append(c, s), t.clearDelay);
						t.clearTimer.set(r, i), e.stopPropagation();
					}, r);
				}
			}
		}, Sa]],
		["statusline", [(e, t) => {
			let n = e.childNodes[1];
			if (n && n.node.isKind("mtext")) {
				let r = e.adaptor, i = n.node.getText();
				e.dom.forEach((e) => r.setAttribute(e, "data-statusline", i)), e.setEventHandler("mouseover", (n) => {
					if (t.status === null) {
						let n = r.body(r.document);
						t.status = r.append(n, e.html("mjx-status", {}, [e.text(i)]));
					}
					n.stopPropagation();
				}), e.setEventHandler("mouseout", (e) => {
					t.status &&= (r.remove(t.status), null), e.stopPropagation();
				});
			}
		}, { status: null }]]
	]), e;
})(), Ea = .067, Da = .2, Oa = {
	top: 0,
	right: 1,
	bottom: 2,
	left: 3
};
Object.keys(Oa);
var ka = ((e) => [
	,
	,
	,
	,
].fill(e.thickness + e.padding)), Aa = ((e) => [
	,
	,
	,
	,
].fill(e.thickness)), ja = (e) => Math.max(e.padding, e.thickness * (e.arrowhead.x + e.arrowhead.dx + 1)), Ma = (e, t) => {
	if (e.childNodes[0]) {
		let { h: n, d: r } = e.childNodes[0].getBBox();
		t[0] = t[2] = Math.max(0, e.thickness * e.arrowhead.y - (n + r) / 2);
	}
	return t;
}, Na = (e, t) => {
	if (e.childNodes[0]) {
		let { w: n } = e.childNodes[0].getBBox();
		t[1] = t[3] = Math.max(0, e.thickness * e.arrowhead.y - n / 2);
	}
	return t;
}, Pa = {
	up: [
		-Math.PI / 2,
		!1,
		!0,
		"verticalstrike"
	],
	down: [
		Math.PI / 2,
		!1,
		!0,
		"verticakstrike"
	],
	right: [
		0,
		!1,
		!1,
		"horizontalstrike"
	],
	left: [
		Math.PI,
		!1,
		!1,
		"horizontalstrike"
	],
	updown: [
		Math.PI / 2,
		!0,
		!0,
		"verticalstrike uparrow downarrow"
	],
	leftright: [
		0,
		!0,
		!1,
		"horizontalstrike leftarrow rightarrow"
	]
}, Fa = {
	updiagonal: [
		-1,
		0,
		!1,
		"updiagonalstrike northeastarrow"
	],
	northeast: [
		-1,
		0,
		!1,
		"updiagonalstrike updiagonalarrow"
	],
	southeast: [
		1,
		0,
		!1,
		"downdiagonalstrike"
	],
	northwest: [
		1,
		Math.PI,
		!1,
		"downdiagonalstrike"
	],
	southwest: [
		-1,
		Math.PI,
		!1,
		"updiagonalstrike"
	],
	northeastsouthwest: [
		-1,
		0,
		!0,
		"updiagonalstrike northeastarrow updiagonalarrow southwestarrow"
	],
	northwestsoutheast: [
		1,
		0,
		!0,
		"downdiagonalstrike northwestarrow southeastarrow"
	]
}, Ia = {
	up: (e) => Na(e, [
		ja(e),
		0,
		e.padding,
		0
	]),
	down: (e) => Na(e, [
		e.padding,
		0,
		ja(e),
		0
	]),
	right: (e) => Ma(e, [
		0,
		ja(e),
		0,
		e.padding
	]),
	left: (e) => Ma(e, [
		0,
		e.padding,
		0,
		ja(e)
	]),
	updown: (e) => Na(e, [
		ja(e),
		0,
		ja(e),
		0
	]),
	leftright: (e) => Ma(e, [
		0,
		ja(e),
		0,
		ja(e)
	])
}, La = function(e) {
	return (t) => {
		let n = Oa[t];
		return [t, {
			renderer: e,
			bbox: (e) => {
				let t = [
					0,
					0,
					0,
					0
				];
				return t[n] = e.thickness + e.padding, t;
			},
			border: (e) => {
				let t = [
					0,
					0,
					0,
					0
				];
				return t[n] = e.thickness, t;
			}
		}];
	};
}, Ra = function(e) {
	return (t, n, r) => {
		let i = Oa[n], a = Oa[r];
		return [t, {
			renderer: e,
			bbox: (e) => {
				let t = e.thickness + e.padding, n = [
					0,
					0,
					0,
					0
				];
				return n[i] = n[a] = t, n;
			},
			border: (e) => {
				let t = [
					0,
					0,
					0,
					0
				];
				return t[i] = t[a] = e.thickness, t;
			},
			remove: n + " " + r
		}];
	};
}, za = function(e) {
	return (t) => {
		let n = "mjx-" + t.charAt(0) + "strike";
		return [t + "diagonalstrike", {
			renderer: e(n),
			bbox: ka
		}];
	};
}, Ba = function(e) {
	return (t) => {
		let [n, r, i, a] = Fa[t];
		return [t + "arrow", {
			renderer: (t, a) => {
				let [o, s] = t.arrowAW();
				e(t, t.arrow(s, n * (o - r), i));
			},
			bbox: (e) => {
				let { a: t, x: n, y: r } = e.arrowData(), [i, a, o] = [
					e.arrowhead.x,
					e.arrowhead.y,
					e.arrowhead.dx
				], [s, c] = e.getArgMod(i + o, a), l = r + (s > t ? e.thickness * c * Math.sin(s - t) : 0), u = n + (s > Math.PI / 2 - t ? e.thickness * c * Math.sin(s + t - Math.PI / 2) : 0);
				return [
					l,
					u,
					l,
					u
				];
			},
			remove: a
		}];
	};
}, Va = function(e) {
	return (t) => {
		let [n, r, i, a] = Pa[t];
		return [t + "arrow", {
			renderer: (t, a) => {
				let { w: o, h: s, d: c } = t.getBBox(), [l, u] = i ? [s + c, "X"] : [o, "Y"], d = t.getOffset(u);
				e(t, t.arrow(l, n, r, u, d));
			},
			bbox: Ia[t],
			remove: a
		}];
	};
};
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Wrappers/menclose.js
function Ha(e) {
	return class extends e {
		getParameters() {
			let e = this.node.attributes, t = e.get("data-padding");
			t !== void 0 && (this.padding = this.length2em(t, Da));
			let n = e.get("data-thickness");
			n !== void 0 && (this.thickness = this.length2em(n, Ea));
			let r = e.get("data-arrowhead");
			if (r !== void 0) {
				let [e, t, n] = Ge(r);
				this.arrowhead = {
					x: e ? parseFloat(e) : 4,
					y: t ? parseFloat(t) : 2,
					dx: n ? parseFloat(n) : 1
				};
			}
		}
		getNotations() {
			let e = this.constructor.notations;
			for (let t of Ge(this.node.attributes.get("notation"))) {
				let n = e.get(t);
				n && (this.notations[t] = n, n.renderChild && (this.renderChild = n.renderer));
			}
		}
		removeRedundantNotations() {
			for (let e of Object.keys(this.notations)) if (this.notations[e]) {
				let t = this.notations[e].remove || "";
				for (let e of t.split(/ /)) delete this.notations[e];
			}
		}
		initializeNotations() {
			for (let e of Object.keys(this.notations)) {
				let t = this.notations[e].init;
				t && t(this);
			}
		}
		getBBoxExtenders() {
			let e = [
				0,
				0,
				0,
				0
			];
			for (let t of Object.keys(this.notations)) this.maximizeEntries(e, this.notations[t].bbox(this));
			return e;
		}
		getPadding() {
			let e = [
				0,
				0,
				0,
				0
			];
			for (let t of Object.keys(this.notations)) {
				let n = this.notations[t].border;
				n && this.maximizeEntries(e, n(this));
			}
			return [
				0,
				1,
				2,
				3
			].map((t) => this.TRBL[t] - e[t]);
		}
		maximizeEntries(e, t) {
			for (let n = 0; n < e.length; n++) e[n] < t[n] && (e[n] = t[n]);
		}
		getOffset(e) {
			let [t, n, r, i] = this.TRBL, a = (e === "X" ? n - i : r - t) / 2;
			return Math.abs(a) > .001 ? a : 0;
		}
		getArgMod(e, t) {
			return [Math.atan2(t, e), Math.sqrt(e * e + t * t)];
		}
		arrow(e, t, n, r = "", i = 0) {
			return null;
		}
		arrowData() {
			let [e, t] = [this.padding, this.thickness], n = t * (this.arrowhead.x + Math.max(1, this.arrowhead.dx)), { h: r, d: i, w: a } = this.childNodes[0].getBBox(), o = r + i, s = Math.sqrt(o * o + a * a), c = Math.max(e, n * a / s), l = Math.max(e, n * o / s), [u, d] = this.getArgMod(a + 2 * c, o + 2 * l);
			return {
				a: u,
				W: d,
				x: c,
				y: l
			};
		}
		arrowAW() {
			let { h: e, d: t, w: n } = this.childNodes[0].getBBox(), [r, i, a, o] = this.TRBL;
			return this.getArgMod(o + n + i, r + e + t + a);
		}
		createMsqrt(e) {
			let t = this.node.factory.create("msqrt");
			t.inheritAttributesFrom(this.node), t.childNodes[0] = e.node;
			let n = this.wrap(t);
			return n.parent = this, n;
		}
		sqrtTRBL() {
			let e = this.msqrt.getBBox(), t = this.msqrt.childNodes[0].getBBox();
			return [
				e.h - t.h,
				0,
				e.d - t.d,
				e.w - t.w
			];
		}
		constructor(e, t, n = null) {
			super(e, t, n), this.notations = {}, this.renderChild = null, this.msqrt = null, this.padding = Da, this.thickness = Ea, this.arrowhead = {
				x: 4,
				y: 2,
				dx: 1
			}, this.TRBL = [
				0,
				0,
				0,
				0
			], this.getParameters(), this.getNotations(), this.removeRedundantNotations(), this.initializeNotations(), this.TRBL = this.getBBoxExtenders();
		}
		computeBBox(e, t = !1) {
			let [n, r, i, a] = this.TRBL, o = this.childNodes[0].getBBox();
			e.combine(o, a, 0), e.h += n, e.d += i, e.w += r, this.setChildPWidths(t);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/menclose.js
var Ua = class extends x {
	constructor() {
		super(...arguments), this.texclass = b.ORD;
	}
	get kind() {
		return "menclose";
	}
	get arity() {
		return -1;
	}
	get linebreakContainer() {
		return !0;
	}
	setTeXclass(e) {
		return e = this.childNodes[0].setTeXclass(e), this.updateTeXclass(this.childNodes[0]), e;
	}
};
Ua.defaults = Object.assign(Object.assign({}, x.defaults), { notation: "longdiv" });
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Notation.js
var Wa = {
	top: (e, t, n, r) => [
		0,
		e - r,
		n,
		e - r
	],
	right: (e, t, n, r) => [
		n - r,
		-t,
		n - r,
		e
	],
	bottom: (e, t, n, r) => [
		0,
		r - t,
		n,
		r - t
	],
	left: (e, t, n, r) => [
		r,
		-t,
		r,
		e
	],
	vertical: (e, t, n, r) => [
		n / 2,
		e,
		n / 2,
		-t
	],
	horizontal: (e, t, n, r) => [
		0,
		(e - t) / 2,
		n,
		(e - t) / 2
	],
	up: (e, t, n, r) => [
		r,
		r - t,
		n - r,
		e - r
	],
	down: (e, t, n, r) => [
		r,
		e - r,
		n - r,
		r - t
	]
}, Ga = function(e, t, n = "") {
	let { h: r, d: i, w: a } = e.getBBox(), o = e.thickness / 2;
	return Ka(Wa[t](r, i, a, o), e, n);
}, Ka = function(e, t, n) {
	if (n) {
		let r = t.getOffset(n);
		r && (n === "X" ? (e[0] -= r, e[2] -= r) : (e[1] -= r, e[3] -= r));
	}
	return e;
}, qa = function(e, t = "") {
	return (n, r) => {
		let i = n.line(Ga(n, e, t));
		n.adaptor.append(n.dom[0], i);
	};
}, Ja = function(e) {
	return La((t, n) => {
		t.adaptor.append(t.dom[0], t.line(Ga(t, e)));
	})(e);
}, Ya = function(e, t, n) {
	return Ra((e, r) => {
		e.adaptor.append(e.dom[0], e.line(Ga(e, t))), e.adaptor.append(e.dom[0], e.line(Ga(e, n)));
	})(e, t, n);
}, Xa = function(e) {
	return za((t) => (t, n) => {
		t.adaptor.append(t.dom[0], t.line(Ga(t, e)));
	})(e);
}, Za = function(e) {
	return Ba((e, t) => {
		e.adaptor.append(e.dom[0], t);
	})(e);
}, Qa = function(e) {
	return Va((e, t) => {
		e.adaptor.append(e.dom[0], t);
	})(e);
}, $a = (function() {
	var e;
	let t = Ha(J);
	return e = class extends t {
		line(e) {
			let [t, n, r, i] = e;
			return this.svg("line", {
				x1: this.fixed(t),
				y1: this.fixed(n),
				x2: this.fixed(r),
				y2: this.fixed(i),
				"stroke-width": this.fixed(this.thickness)
			});
		}
		box(e, t, n, r = 0) {
			let i = this.thickness, a = {
				x: this.fixed(i / 2),
				y: this.fixed(i / 2 - n),
				width: this.fixed(e - i),
				height: this.fixed(t + n - i),
				fill: "none",
				"stroke-width": this.fixed(i)
			};
			return r && (a.rx = this.fixed(r)), this.svg("rect", a);
		}
		ellipse(e, t, n) {
			let r = this.thickness;
			return this.svg("ellipse", {
				rx: this.fixed((e - r) / 2),
				ry: this.fixed((t + n - r) / 2),
				cx: this.fixed(e / 2),
				cy: this.fixed((t - n) / 2),
				fill: "none",
				"stroke-width": this.fixed(r)
			});
		}
		path(e, ...t) {
			return this.svg("path", {
				d: t.map((e) => typeof e == "string" ? e : this.fixed(e)).join(" "),
				style: { "stroke-width": this.fixed(this.thickness) },
				"stroke-linecap": "round",
				"stroke-linejoin": e,
				fill: "none"
			});
		}
		fill(...e) {
			return this.svg("path", { d: e.map((e) => typeof e == "string" ? e : this.fixed(e)).join(" ") });
		}
		arrow(e, t, n, r = "", i = 0) {
			let { w: a, h: o, d: s } = this.getBBox(), c = (e - a) / 2, l = (o - s) / 2, u = this.thickness, d = u / 2, [f, p, m] = [
				u * this.arrowhead.x,
				u * this.arrowhead.y,
				u * this.arrowhead.dx
			], h = n ? this.fill("M", a + c, l, "l", -(f + m), p, "l", m, d - p, "L", f - c, l + d, "l", m, p - d, "l", -(f + m), -p, "l", f + m, -p, "l", -m, p - d, "L", a + c - f, l - d, "l", -m, d - p, "Z") : this.fill("M", a + c, l, "l", -(f + m), p, "l", m, d - p, "L", -c, l + d, "l", 0, -u, "L", a + c - f, l - d, "l", -m, d - p, "Z"), g = [];
			if (i && g.push(r === "X" ? `translate(${this.fixed(-i)} 0)` : `translate(0 ${this.fixed(i)})`), t) {
				let e = this.jax.fixed(-t * 180 / Math.PI);
				g.push(`rotate(${e} ${this.fixed(a / 2)} ${this.fixed(l)})`);
			}
			return g.length && this.adaptor.setAttribute(h, "transform", g.join(" ")), h;
		}
		toSVG(e) {
			let t = this.standardSvgNodes(e), n = this.getBBoxExtenders()[3], r = {};
			n > 0 && (r.transform = "translate(" + this.fixed(n) + ", 0)");
			let i = this.adaptor.append(t[0], this.svg("g", r));
			this.renderChild ? this.renderChild(this, i) : (this.childNodes[0].toSVG([i]), this.childNodes[0].place(0, 0));
			for (let e of Object.keys(this.notations)) {
				let n = this.notations[e];
				n.renderChild || n.renderer(this, t[0]);
			}
		}
	}, e.kind = Ua.prototype.kind, e.notations = new Map([
		Ja("top"),
		Ja("right"),
		Ja("bottom"),
		Ja("left"),
		Ya("actuarial", "top", "right"),
		Ya("madruwb", "bottom", "right"),
		Xa("up"),
		Xa("down"),
		["horizontalstrike", {
			renderer: qa("horizontal", "Y"),
			bbox: (e) => [
				0,
				e.padding,
				0,
				e.padding
			]
		}],
		["verticalstrike", {
			renderer: qa("vertical", "X"),
			bbox: (e) => [
				e.padding,
				0,
				e.padding,
				0
			]
		}],
		["box", {
			renderer: (e, t) => {
				let { w: n, h: r, d: i } = e.getBBox();
				e.adaptor.append(e.dom[0], e.box(n, r, i));
			},
			bbox: ka,
			border: Aa,
			remove: "left right top bottom"
		}],
		["roundedbox", {
			renderer: (e, t) => {
				let { w: n, h: r, d: i } = e.getBBox(), a = e.thickness + e.padding;
				e.adaptor.append(e.dom[0], e.box(n, r, i, a));
			},
			bbox: ka
		}],
		["circle", {
			renderer: (e, t) => {
				let { w: n, h: r, d: i } = e.getBBox();
				e.adaptor.append(e.dom[0], e.ellipse(n, r, i));
			},
			bbox: ka
		}],
		["phasorangle", {
			renderer: (e, t) => {
				let { w: n, h: r, d: i } = e.getBBox(), a = e.getArgMod(1.75 * e.padding, r + i)[0], o = e.thickness / 2, s = r + i, c = Math.cos(a);
				e.adaptor.append(e.dom[0], e.path("mitre", "M", n, o - i, "L", o + c * o, o - i, "L", c * s + o, s - i - o));
			},
			bbox: (e) => {
				let t = e.padding / 2, n = e.thickness;
				return [
					2 * t,
					t,
					t + n,
					3 * t + n
				];
			},
			border: (e) => [
				0,
				0,
				e.thickness,
				0
			],
			remove: "bottom"
		}],
		Qa("up"),
		Qa("down"),
		Qa("left"),
		Qa("right"),
		Qa("updown"),
		Qa("leftright"),
		Za("updiagonal"),
		Za("northeast"),
		Za("southeast"),
		Za("northwest"),
		Za("southwest"),
		Za("northeastsouthwest"),
		Za("northwestsoutheast"),
		["longdiv", {
			renderer: (e, t) => {
				let { w: n, h: r, d: i } = e.getBBox(), a = e.thickness / 2, o = e.padding;
				e.adaptor.append(e.dom[0], e.path("round", "M", a, a - i, "a", o - a / 2, (r + i) / 2 - 4 * a, 0, "0,1", 0, r + i - 2 * a, "L", n - a, r - a));
			},
			bbox: (e) => {
				let t = e.padding, n = e.thickness;
				return [
					t + n,
					t,
					t,
					2 * t + n / 2
				];
			}
		}],
		["radical", {
			renderer: (e, t) => {
				e.msqrt.toSVG([t]);
				let n = e.sqrtTRBL()[3];
				e.place(-n, 0, t);
			},
			init: (e) => {
				e.msqrt = e.createMsqrt(e.childNodes[0]);
			},
			bbox: (e) => e.sqrtTRBL(),
			renderChild: !0
		}]
	]), e;
})();
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Wrappers/semantics.js
function eo(e) {
	return class extends e {
		computeBBox(e, t = !1) {
			if (this.childNodes.length) {
				let { w: t, h: n, d: r } = this.childNodes[0].getBBox();
				e.w = t, e.h = n, e.d = r;
			}
		}
		get breakCount() {
			return this.node.isEmbellished ? this.coreMO().embellishedBreakCount : this.childNodes[0].breakCount;
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Wrappers/XmlNode.js
function to(e) {
	class t extends e {
		constructor(e, t, n = null) {
			super(e, t, n), this.rscale = this.getRScale();
		}
		computeBBox(e, t = !1) {
			let n = this.node.getXML(), r = this.getHDW(n, "use", "force"), { h: i, d: a, w: o } = r ? this.splitHDW(r) : this.measureXmlNode(n);
			e.w = o, e.h = i, e.d = a;
		}
		getHTML() {
			let e = this.adaptor.clone(this.node.getXML()), t = this.getFontStyles();
			return (this.getHDW(e, "force") || this.jax.options.scale !== 1) && (e = this.addHDW(e, t)), this.html("mjx-html", {
				variant: this.parent.variant,
				style: t
			}, [e]);
		}
		getHDW(e, t, n = t) {
			let r = this.jax.options.htmlHDW, i = this.adaptor.getAttribute(e, "data-mjx-hdw");
			return i && (r === t || r === n) ? i : null;
		}
		splitHDW(e) {
			let t = 1 / this.metrics.scale, [n, r, i] = Ge(e).map((e) => this.length2em(e || "0") * t);
			return {
				h: n,
				d: r,
				w: i
			};
		}
		getFontStyles() {
			let e = this.adaptor, t = this.metrics;
			return {
				"font-family": this.parent.styles?.get("font-family") || t.family || e.fontFamily(e.parent(this.jax.math.start.node)) || "initial",
				"font-size": this.jax.fixed(t.em * this.rscale) + "px"
			};
		}
		measureXmlNode(e) {
			let t = this.adaptor, n = this.html("mjx-xml-block", { style: { display: "inline-block" } }, [t.clone(e)]), r = this.html("mjx-baseline", { style: {
				display: "inline-block",
				width: 0,
				height: 0
			} }), i = this.getFontStyles(), a = this.html("mjx-measure-xml", { style: i }, [r, n]), o = this.jax.container;
			t.append(t.parent(this.jax.math.start.node), o), t.append(o, a);
			let s = this.metrics, c = s.em * s.scale * this.rscale, { left: l, right: u, bottom: d, top: f } = t.nodeBBox(n), p = (u - l) / c, m = (t.nodeBBox(r).top - f) / c, h = (d - f) / c - m;
			return t.remove(o), t.remove(a), {
				w: p,
				h: m,
				d: h
			};
		}
		getStyles() {}
		getScale() {}
		getVariant() {}
	}
	return t.autoStyle = !1, t.styles = {
		"mjx-measure-xml": {
			position: "absolute",
			left: 0,
			top: 0,
			display: "inline-block",
			"line-height": "normal",
			"white-space": "normal"
		},
		"mjx-html": {
			display: "inline-block",
			"line-height": "normal",
			"text-align": "initial",
			"white-space": "initial"
		},
		"mjx-html-holder": {
			display: "block",
			position: "absolute",
			top: 0,
			left: 0,
			bottom: 0,
			right: 0
		}
	}, t;
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/semantics.js
var no = class extends C {
	get kind() {
		return "semantics";
	}
	get arity() {
		return 1;
	}
	get notParent() {
		return !0;
	}
};
no.defaults = Object.assign(Object.assign({}, C.defaults), {
	definitionUrl: null,
	encoding: null
});
var ro = class extends x {
	get kind() {
		return "annotation-xml";
	}
	setChildInheritedAttributes() {}
};
ro.defaults = Object.assign(Object.assign({}, x.defaults), {
	definitionUrl: null,
	encoding: null,
	cd: "mathmlkeys",
	name: "",
	src: null
});
var io = class extends ro {
	constructor() {
		super(...arguments), this.properties = { isChars: !0 };
	}
	get kind() {
		return "annotation";
	}
};
io.defaults = Object.assign({}, ro.defaults);
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/semantics.js
var ao = (function() {
	var e;
	let t = eo(J);
	return e = class extends t {
		toSVG(e) {
			if (this.toEmbellishedSVG(e)) return;
			let t = this.standardSvgNodes(e);
			this.childNodes.length && this.childNodes[0].toSVG(t);
		}
	}, e.kind = no.prototype.kind, e;
})(), oo = (function() {
	var e = class extends J {
		toSVG(e) {
			super.toSVG(e);
		}
		computeBBox() {
			return this.bbox;
		}
	};
	return e.kind = io.prototype.kind, e;
})(), so = (function() {
	var e = class extends J {};
	return e.kind = ro.prototype.kind, e.styles = { "foreignObject[data-mjx-xml]": {
		"font-family": "initial",
		"line-height": "normal",
		overflow: "visible"
	} }, e;
})(), co = (function() {
	var e;
	let t = to(J);
	return e = class extends t {
		toSVG(e) {
			let t = this.jax.math.metrics, n = t.em * t.scale * this.rscale, r = this.fixed(1 / n, 3), { w: i, h: a, d: o } = this.getBBox();
			this.dom = [this.adaptor.append(e[0], this.svg("foreignObject", {
				"data-mjx-xml": !0,
				y: this.jax.fixed(-a * n) + "px",
				width: this.jax.fixed(i * n) + "px",
				height: this.jax.fixed((a + o) * n) + "px",
				transform: `scale(${r}) matrix(1 0 0 -1 0 0)`
			}, [this.getHTML()]))];
		}
		addHDW(e, t) {
			e = this.html("mjx-html-holder", { style: t }, [e]);
			let { h: n, d: r, w: i } = this.getBBox(), a = this.metrics.scale;
			return t.height = this.em((n + r) * a), t.width = this.em(i * a), t["vertical-align"] = this.em(-r * a), delete t["font-size"], delete t["font-family"], e;
		}
	}, e.kind = ct.prototype.kind, e.styles = Object.assign({ "foreignObject[data-mjx-html]": { overflow: "visible" } }, t.styles), e;
})();
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Wrappers/mglyph.js
function lo(e) {
	return class extends e {
		constructor(e, t, n = null) {
			super(e, t, n), this.getParameters();
		}
		getParameters() {
			let { width: e, height: t, valign: n, src: r, index: i } = this.node.attributes.getList("width", "height", "valign", "src", "index");
			if (r) this.width = e === "auto" ? 1 : this.length2em(e), this.height = t === "auto" ? 1 : this.length2em(t), this.valign = this.length2em(n || "0");
			else {
				let e = String.fromCodePoint(parseInt(i)), t = this.node.factory;
				this.charWrapper = this.wrap(t.create("text").setText(e)), this.charWrapper.parent = this;
			}
		}
		computeBBox(e, t = !1) {
			this.charWrapper ? e.updateFrom(this.charWrapper.getBBox()) : (e.w = this.width, e.h = this.height + this.valign, e.d = -this.valign);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/mglyph.js
var uo = class extends S {
	constructor() {
		super(...arguments), this.texclass = b.ORD;
	}
	get kind() {
		return "mglyph";
	}
	verifyAttributes(e) {
		let { src: t, fontfamily: n, index: r } = this.attributes.getList("src", "fontfamily", "index");
		t === "" && (n === "" || r === "") ? this.mError("mglyph must have either src or fontfamily and index attributes", e, !0) : super.verifyAttributes(e);
	}
};
uo.defaults = Object.assign(Object.assign({}, S.defaults), {
	alt: "",
	src: "",
	index: "",
	width: "auto",
	height: "auto",
	valign: "0em"
});
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/mglyph.js
var fo = (function() {
	var e;
	let t = lo(J);
	return e = class extends t {
		toSVG(e) {
			let t = this.standardSvgNodes(e);
			if (this.charWrapper) {
				this.charWrapper.toSVG(t);
				return;
			}
			let { src: n, alt: r } = this.node.attributes.getList("src", "alt"), i = this.fixed(this.height), a = {
				width: this.fixed(this.width),
				height: i,
				transform: "translate(0 " + this.fixed(this.height + (this.valign || 0)) + ") matrix(1 0 0 -1 0 0)",
				preserveAspectRatio: "none",
				"aria-label": r,
				href: n
			}, o = this.svg("image", a);
			this.adaptor.append(t[0], o);
		}
	}, e.kind = uo.prototype.kind, e;
})();
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Wrappers/TeXAtom.js
function po(e) {
	return class extends e {
		computeBBox(e, t = !1) {
			super.computeBBox(e, t), this.childNodes[0] && this.childNodes[0].bbox.ic && (e.ic = this.childNodes[0].bbox.ic);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/TeXAtom.js
var mo = class extends C {
	get kind() {
		return "TeXAtom";
	}
	get arity() {
		return -1;
	}
	get notParent() {
		return !0;
	}
	constructor(e, t, n) {
		super(e, t, n), this.texclass = b.ORD, this.setProperty("texClass", this.texClass);
	}
	setTeXclass(e) {
		return this.childNodes[0].setTeXclass(null), this.adjustTeXclass(e);
	}
	adjustTeXclass(e) {
		return e;
	}
};
mo.defaults = Object.assign({}, C.defaults), mo.prototype.adjustTeXclass = E.prototype.adjustTeXclass;
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/TeXAtom.js
var ho = (function() {
	var e;
	let t = po(J);
	return e = class extends t {
		toSVG(e) {
			super.toSVG(e), this.adaptor.setAttribute(this.dom[0], "data-mjx-texclass", et[this.node.texClass]);
		}
	}, e.kind = mo.prototype.kind, e;
})();
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/common/Wrappers/TextNode.js
function go(e) {
	return class extends e {
		remappedText(e, t) {
			let n = this.parent.stretch.c;
			return n ? [n] : this.parent.remapChars(this.unicodeChars(e, t));
		}
		computeBBox(e, t = !1) {
			let n = this.parent.variant, r = this.node.getText();
			if (n === "-explicitFont") {
				let t = this.jax.getFontData(this.parent.styles), { w: i, h: a, d: o } = this.jax.measureText(r, n, t);
				e.h = a, e.d = o, e.w = i;
			} else {
				let t = this.remappedText(r, n), i = "";
				e.empty();
				for (let r = 0; r < t.length; r++) {
					let [a, o, s, c] = this.getVariantChar(n, t[r]);
					if (c.unknown) i += String.fromCodePoint(t[r]);
					else {
						if (i = this.addUtextBBox(e, i, n), this.updateBBox(e, a, o, s), e.ic = c.ic || 0, e.sk = c.sk || 0, e.dx = c.dx || 0, !c.oc || r < t.length - 1) continue;
						let l = this.parent.childNodes;
						if (this.node !== l[l.length - 1].node) continue;
						let u = this.parent.parent.node, d = u.isKind("mrow") || u.isInferred ? u.childNodes[u.childIndex(this.parent.node) + 1] : null;
						d?.isKind("mo") && d.getText() === "⁢" && (d = u.childNodes[u.childIndex(d) + 1]), !d || d.attributes.get("mathvariant") !== n ? e.ic = c.oc : e.oc = c.oc;
					}
				}
				this.addUtextBBox(e, i, n), t.length > 1 && (e.sk = 0), e.clean();
			}
		}
		addUtextBBox(e, t, n) {
			if (t) {
				let { h: r, d: i, w: a } = this.jax.measureText(t, n);
				this.updateBBox(e, r, i, a);
			}
			return "";
		}
		updateBBox(e, t, n, r) {
			e.w += r, t > e.h && (e.h = t), n > e.d && (e.d = n);
		}
		getStyles() {}
		getVariant() {}
		getScale() {}
		getSpace() {}
	};
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/Wrappers/TextNode.js
var _o = (function() {
	var e;
	let t = go(J);
	return e = class extends t {
		static addStyles(e, t) {
			e.addStyles({ "mjx-container[jax=\"SVG\"] path[data-c], mjx-container[jax=\"SVG\"] use[data-c]": { "stroke-width": t.options.blacker } });
		}
		toSVG(e) {
			let t = this.adaptor, n = this.parent.variant, r = this.node.getText();
			if (r.length !== 0) {
				if (n === "-explicitFont") this.dom = [t.append(e[0], this.jax.unknownText(r, n))];
				else {
					let i = this.remappedText(r, n);
					this.parent.childNodes.length > 1 ? e = this.dom = [t.append(e[0], this.svg("g", { "data-mml-node": "text" }))] : this.dom = e;
					let a = 0;
					for (let t of i) a += this.placeChar(t, a, 0, e[0], n, !0);
					this.addUtext(a, 0, e[0], n);
				}
			}
		}
	}, e.kind = st.prototype.kind, e;
})(), vo = class extends ct {
	get kind() {
		return "html";
	}
	getHTML() {
		return this.getXML();
	}
	setHTML(e, t = null) {
		try {
			t.getAttribute(e, "data-mjx-hdw");
		} catch {
			e = t.node("span", {}, [e]);
		}
		return this.setXML(e, t);
	}
	getSerializedHTML() {
		return this.adaptor.outerHTML(this.xml);
	}
	textContent() {
		return this.adaptor.textContent(this.xml);
	}
	toString() {
		let e = this.adaptor.kind(this.xml);
		return `HTML=<${e}>...</${e}>`;
	}
	verifyTree(e) {
		if (this.parent && !this.parent.isToken) {
			this.mError("HTML can only be a child of a token element", e, !0);
			return;
		}
	}
}, yo = (function() {
	var e = class extends co {};
	return e.kind = vo.prototype.kind, e;
})(), bo = {
	[Wr.kind]: Wr,
	[Yr.kind]: Yr,
	[Xr.kind]: Xr,
	[$r.kind]: $r,
	[ni.kind]: ni,
	[ai.kind]: ai,
	[ci.kind]: ci,
	[di.kind]: di,
	[pi.kind]: pi,
	[gi.kind]: gi,
	[yi.kind]: yi,
	[xi.kind]: xi,
	[wi.kind]: wi,
	[Di.kind]: Di,
	[Ai.kind]: Ai,
	[Ni.kind]: Ni,
	[Hi.kind]: Hi,
	[Ui.kind]: Ui,
	[Wi.kind]: Wi,
	[Zi.kind]: Zi,
	[Qi.kind]: Qi,
	[$i.kind]: $i,
	[oa.kind]: oa,
	[fa.kind]: fa,
	[_a.kind]: _a,
	[va.kind]: va,
	[xa.kind]: xa,
	[Ta.kind]: Ta,
	[$a.kind]: $a,
	[ao.kind]: ao,
	[oo.kind]: oo,
	[so.kind]: so,
	[co.kind]: co,
	[fo.kind]: fo,
	[ho.kind]: ho,
	[_o.kind]: _o,
	[yo.kind]: yo,
	[J.kind]: J
}, xo = class extends Pr {};
xo.defaultNodes = bo;
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/output/svg/FontCache.js
var So = class {
	constructor(e) {
		this.cache = /* @__PURE__ */ new Map(), this.defs = null, this.localID = "", this.nextID = 0, this.jax = e;
	}
	cachePath(e, t, n) {
		let r = "MJX-" + this.localID + (this.jax.font.getVariant(e).cacheID || "") + "-" + t;
		return this.cache.has(r) || (this.cache.set(r, n), this.jax.adaptor.append(this.defs, this.jax.svg("path", {
			id: r,
			d: n
		}))), r;
	}
	clearLocalID() {
		this.localID = "";
	}
	useLocalID(e = null) {
		this.localID = (e ?? ++this.nextID) + (e === "" ? "" : "-");
	}
	clearCache() {
		this.cache = /* @__PURE__ */ new Map(), this.defs = this.jax.svg("defs");
	}
	getCache() {
		return this.defs;
	}
};
//#endregion
//#region node_modules/.pnpm/@mathjax+mathjax-newcm-font@4.1.3/node_modules/@mathjax/mathjax-newcm-font/mjs/common.js
function Co(e) {
	var t = class extends e {};
	return t.defaultVariants = [
		...G.defaultVariants,
		["-size3", "normal"],
		["-size4", "normal"],
		["-size5", "normal"],
		["-size6", "normal"],
		["-size7", "normal"],
		["-lf-tp", "normal"],
		["-rt-bt", "normal"],
		["-ex-md", "normal"],
		["-bbold", "normal"],
		["-upsmall", "normal"],
		["-uplarge", "normal"]
	], t.VariantSmp = Object.assign(Object.assign({}, G.VariantSmp), { "-bbold": [
		120120,
		120146,
		,
		,
		120792
	] }), t.defaultCssFonts = Object.assign(Object.assign({}, G.defaultCssFonts), {
		"-size3": [
			"serif",
			!1,
			!1
		],
		"-size4": [
			"serif",
			!1,
			!1
		],
		"-size5": [
			"serif",
			!1,
			!1
		],
		"-size6": [
			"serif",
			!1,
			!1
		],
		"-size7": [
			"serif",
			!1,
			!1
		],
		"-lf-tp": [
			"serif",
			!1,
			!1
		],
		"-rt-bt": [
			"serif",
			!1,
			!1
		],
		"-ex-md": [
			"serif",
			!1,
			!1
		],
		"-bbold": [
			"serif",
			!1,
			!1
		],
		"-upsmall": [
			"serif",
			!1,
			!1
		],
		"-uplarge": [
			"serif",
			!1,
			!1
		]
	}), t.defaultAccentMap = {
		94: "ˆ",
		126: "˜",
		768: "ˋ",
		769: "ˊ",
		770: "ˆ",
		771: "˜",
		772: "ˉ",
		774: "˘",
		775: "˙",
		776: "¨",
		778: "˚",
		780: "ˇ",
		8594: "⃗"
	}, t.defaultParams = Object.assign(Object.assign({}, G.defaultParams), { x_height: .442 }), t.defaultSizeVariants = [
		"normal",
		"-smallop",
		"-largeop",
		"-size3",
		"-size4",
		"-size5",
		"-size6",
		"-size7"
	], t.defaultStretchVariants = [
		"normal",
		"-ex-md",
		"-size3",
		"-lf-tp",
		"-rt-bt"
	], t;
}
//#endregion
//#region node_modules/.pnpm/@mathjax+mathjax-newcm-font@4.1.3/node_modules/@mathjax/mathjax-newcm-font/mjs/svg/delimiters.js
var wo = {
	40: {
		dir: U,
		sizes: [
			.997,
			1.095,
			1.195,
			1.445,
			1.793,
			2.093,
			2.393,
			2.991
		],
		stretch: [
			9115,
			9116,
			9117
		],
		HDW: [
			.748,
			.248,
			.875
		]
	},
	41: {
		dir: U,
		sizes: [
			.997,
			1.095,
			1.195,
			1.445,
			1.793,
			2.093,
			2.393,
			2.991
		],
		stretch: [
			9118,
			9119,
			9120
		],
		HDW: [
			.748,
			.248,
			.875
		]
	},
	45: {
		c: 8722,
		dir: W,
		stretch: [0, 8722],
		HDW: [
			.583,
			.083,
			.778
		],
		hd: [.583, .083]
	},
	47: {
		dir: U,
		sizes: [
			1.001,
			1.311,
			1.717,
			2.249,
			2.945,
			3.859,
			5.055,
			6.621
		]
	},
	61: {
		dir: W,
		stretch: [0, 61],
		HDW: [
			.367,
			-.133,
			.778
		],
		hd: [.367, -.133]
	},
	91: {
		dir: U,
		sizes: [
			1.001,
			1.101,
			1.201,
			1.451,
			1.801,
			2.101,
			2.401,
			3.001
		],
		stretch: [
			9121,
			9122,
			9123
		],
		HDW: [
			.75,
			.25,
			.667
		]
	},
	92: {
		dir: U,
		sizes: [
			1.001,
			1.311,
			1.717,
			2.249,
			2.945,
			3.859,
			5.055,
			6.621
		]
	},
	93: {
		dir: U,
		sizes: [
			1.001,
			1.101,
			1.201,
			1.451,
			1.801,
			2.101,
			2.401,
			3.001
		],
		stretch: [
			9124,
			9125,
			9126
		],
		HDW: [
			.75,
			.25,
			.667
		]
	},
	94: {
		c: 770,
		dir: W,
		sizes: [
			.5,
			.644,
			.768,
			.919,
			1.1,
			1.32,
			1.581,
			1.896
		]
	},
	95: {
		c: 8211,
		dir: W,
		stretch: [0, 8211],
		HDW: [
			.277,
			-.255,
			.5
		],
		hd: [.277, -.255]
	},
	123: {
		dir: U,
		sizes: [
			1.001,
			1.101,
			1.201,
			1.451,
			1.801,
			2.101,
			2.401,
			3.001
		],
		stretch: [
			9127,
			123,
			9129,
			9128
		],
		stretchv: [
			0,
			1,
			0,
			0
		],
		HDW: [
			.75,
			.25,
			.902
		]
	},
	124: {
		dir: U,
		sizes: [
			1.001,
			1.203,
			1.443,
			1.735,
			2.085,
			2.505,
			3.005,
			3.605
		],
		schar: [124, 8739],
		stretch: [0, 8739],
		stretchv: [0, 2],
		HDW: [
			.75,
			.25,
			.333
		]
	},
	125: {
		dir: U,
		sizes: [
			1.001,
			1.101,
			1.201,
			1.451,
			1.801,
			2.101,
			2.401,
			3.001
		],
		stretch: [
			9131,
			123,
			9133,
			9132
		],
		stretchv: [
			0,
			1,
			0,
			0
		],
		HDW: [
			.75,
			.25,
			.902
		]
	},
	126: {
		c: 771,
		dir: W,
		sizes: [
			.5,
			.652,
			.778,
			.931,
			1.115,
			1.335,
			1.599,
			1.915
		]
	},
	175: {
		c: 773,
		dir: W,
		sizes: [.392, .568],
		stretch: [0, 773],
		stretchv: [0, 1],
		HDW: [
			.67,
			-.63,
			0
		],
		hd: [.67, -.63]
	},
	710: {
		c: 770,
		dir: W,
		sizes: [
			.5,
			.644,
			.768,
			.919,
			1.1,
			1.32,
			1.581,
			1.896
		]
	},
	711: {
		c: 780,
		dir: W,
		sizes: [
			.366,
			.644,
			.768,
			.919,
			1.1,
			1.32,
			1.581,
			1.896
		]
	},
	713: {
		c: 773,
		dir: W,
		sizes: [.392, .568],
		stretch: [0, 773],
		stretchv: [0, 1],
		HDW: [
			.67,
			-.63,
			0
		],
		hd: [.67, -.63]
	},
	728: {
		c: 774,
		dir: W,
		sizes: [
			.376,
			.658,
			.784,
			.937,
			1.12,
			1.341,
			1.604,
			1.92
		]
	},
	732: {
		c: 771,
		dir: W,
		sizes: [
			.5,
			.652,
			.778,
			.931,
			1.115,
			1.335,
			1.599,
			1.915
		]
	},
	770: {
		dir: W,
		sizes: [
			.5,
			.644,
			.768,
			.919,
			1.1,
			1.32,
			1.581,
			1.896
		]
	},
	771: {
		dir: W,
		sizes: [
			.5,
			.652,
			.778,
			.931,
			1.115,
			1.335,
			1.599,
			1.915
		]
	},
	773: {
		dir: W,
		sizes: [.392, .568],
		stretch: [0, 773],
		stretchv: [0, 1],
		HDW: [
			.67,
			-.63,
			0
		],
		hd: [.67, -.63]
	},
	774: {
		dir: W,
		sizes: [
			.376,
			.658,
			.784,
			.937,
			1.12,
			1.341,
			1.604,
			1.92
		]
	},
	780: {
		dir: W,
		sizes: [
			.366,
			.644,
			.768,
			.919,
			1.1,
			1.32,
			1.581,
			1.896
		]
	},
	8211: {
		dir: W,
		stretch: [0, 8211],
		HDW: [
			.277,
			-.255,
			.5
		],
		hd: [.277, -.255]
	},
	8212: {
		dir: W,
		stretch: [0, 8212],
		HDW: [
			.277,
			-.255,
			1
		],
		hd: [.277, -.255]
	},
	8213: {
		dir: W,
		stretch: [0, 8213],
		HDW: [
			.27,
			-.23,
			1.152
		],
		hd: [.27, -.23]
	},
	8214: {
		dir: U,
		sizes: [
			1.001,
			1.203,
			1.443,
			1.735,
			2.085,
			2.503,
			3.004,
			3.607
		],
		schar: [8214, 8741],
		stretch: [0, 8741],
		stretchv: [0, 2],
		HDW: [
			.75,
			.25,
			.555
		]
	},
	8254: {
		c: 175,
		dir: W,
		sizes: [.392, .568],
		stretch: [0, 773],
		stretchv: [0, 1],
		HDW: [
			.67,
			-.63,
			0
		],
		hd: [.67, -.63]
	},
	8260: {
		dir: U,
		sizes: [
			1.001,
			1.311,
			1.717,
			2.249,
			2.945,
			3.859,
			5.055,
			6.621
		]
	},
	8400: {
		dir: W,
		sizes: [.422, .667],
		stretch: [8400, 8400],
		stretchv: [3, 1],
		HDW: [
			.711,
			-.601,
			0
		],
		hd: [.631, -.601]
	},
	8401: {
		dir: W,
		sizes: [.422, .667],
		stretch: [
			0,
			8400,
			8401
		],
		stretchv: [
			0,
			1,
			4
		],
		HDW: [
			.711,
			-.601,
			0
		],
		hd: [.631, -.601]
	},
	8406: {
		dir: W,
		sizes: [.416, .659],
		stretch: [8406, 8400],
		stretchv: [3, 1],
		HDW: [
			.711,
			-.521,
			0
		],
		hd: [.631, -.601]
	},
	8407: {
		dir: W,
		sizes: [.416, .659],
		stretch: [
			0,
			8400,
			8407
		],
		stretchv: [
			0,
			1,
			4
		],
		HDW: [
			.711,
			-.521,
			0
		],
		hd: [.631, -.601]
	},
	8417: {
		dir: W,
		sizes: [.47, .715],
		stretch: [
			8406,
			8400,
			8407
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.711,
			-.521,
			0
		],
		hd: [.631, -.601]
	},
	8428: {
		dir: W,
		sizes: [.422, .667],
		stretch: [
			0,
			845,
			8428
		],
		stretchv: [
			0,
			1,
			4
		],
		HDW: [
			-.171,
			.281,
			0
		],
		hd: [-.171, .201]
	},
	8429: {
		dir: W,
		sizes: [.422, .667],
		stretch: [8429, 845],
		stretchv: [3, 1],
		HDW: [
			-.171,
			.281,
			0
		],
		hd: [-.171, .201]
	},
	8430: {
		dir: W,
		sizes: [.416, .659],
		stretch: [8430, 845],
		stretchv: [3, 1],
		HDW: [
			-.091,
			.281,
			0
		],
		hd: [-.171, .201]
	},
	8431: {
		dir: W,
		sizes: [.416, .659],
		stretch: [
			0,
			845,
			8431
		],
		stretchv: [
			0,
			1,
			4
		],
		HDW: [
			-.091,
			.281,
			0
		],
		hd: [-.171, .201]
	},
	8512: {
		dir: U,
		sizes: [.684, 1.401],
		variants: [0, 2]
	},
	8592: {
		dir: W,
		sizes: [1, 1.463],
		variants: [0, 0],
		schar: [8592, 10229],
		stretch: [8592, 8592],
		stretchv: [3, 1],
		HDW: [
			.51,
			.01,
			1
		],
		hd: [.274, -.226]
	},
	8593: {
		dir: U,
		sizes: [.883, 1.349],
		variants: [0, 2],
		stretch: [8593, 8593],
		stretchv: [3, 1],
		HDW: [
			.679,
			.203,
			.5
		]
	},
	8594: {
		dir: W,
		sizes: [1, 1.463],
		variants: [0, 0],
		schar: [8594, 10230],
		stretch: [
			0,
			8592,
			8594
		],
		stretchv: [
			0,
			1,
			4
		],
		HDW: [
			.51,
			.01,
			1
		],
		hd: [.274, -.226]
	},
	8595: {
		dir: U,
		sizes: [.883, 1.349],
		variants: [0, 2],
		stretch: [
			0,
			8593,
			8595
		],
		stretchv: [
			0,
			1,
			4
		],
		HDW: [
			.703,
			.179,
			.5
		]
	},
	8596: {
		dir: W,
		sizes: [1, 1.442],
		variants: [0, 0],
		schar: [8596, 10231],
		stretch: [
			8592,
			8592,
			8594
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.51,
			.01,
			1
		],
		hd: [.274, -.226]
	},
	8597: {
		dir: U,
		sizes: [1.015, 1.015],
		variants: [0, 2],
		stretch: [
			8593,
			8593,
			8595
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.757,
			.257,
			.5
		]
	},
	8598: {
		dir: U,
		sizes: [.918, 1.384],
		variants: [0, 2]
	},
	8599: {
		dir: U,
		sizes: [.918, 1.384],
		variants: [0, 2]
	},
	8600: {
		dir: U,
		sizes: [.918, 1.384],
		variants: [0, 2]
	},
	8601: {
		dir: U,
		sizes: [.918, 1.384],
		variants: [0, 2]
	},
	8602: {
		dir: W,
		sizes: [.997, 1.463],
		variants: [0, 2],
		stretch: [
			8602,
			8592,
			0,
			8602
		],
		stretchv: [
			3,
			1,
			0,
			1
		],
		HDW: [
			.51,
			.01,
			.997
		],
		hd: [.274, -.226]
	},
	8603: {
		dir: W,
		sizes: [.997, 1.463],
		variants: [0, 2],
		stretch: [
			0,
			8592,
			8603,
			8602
		],
		stretchv: [
			0,
			1,
			4,
			1
		],
		HDW: [
			.51,
			.01,
			.997
		],
		hd: [.274, -.226]
	},
	8606: {
		dir: W,
		sizes: [1.017, 1.463],
		variants: [0, 2],
		stretch: [8606, 8592],
		stretchv: [3, 1],
		HDW: [
			.51,
			.01,
			1.017
		],
		hd: [.274, -.226]
	},
	8608: {
		dir: W,
		sizes: [1.017, 1.463],
		variants: [0, 2],
		stretch: [
			0,
			8592,
			8608
		],
		stretchv: [
			0,
			1,
			4
		],
		HDW: [
			.51,
			.01,
			1.017
		],
		hd: [.274, -.226]
	},
	8610: {
		dir: W,
		sizes: [1.192, 1.658],
		variants: [0, 2],
		stretch: [
			8592,
			8592,
			8610
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.51,
			.01,
			1.192
		],
		hd: [.274, -.226]
	},
	8611: {
		dir: W,
		sizes: [1.192, 1.658],
		variants: [0, 2],
		stretch: [
			8611,
			8592,
			8594
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.51,
			.01,
			1.192
		],
		hd: [.274, -.226]
	},
	8612: {
		dir: W,
		sizes: [.977, 1.443],
		variants: [0, 0],
		schar: [8612, 10235],
		stretch: [
			8592,
			8592,
			8612
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.51,
			.011,
			.977
		],
		hd: [.274, -.226]
	},
	8614: {
		dir: W,
		sizes: [.977, 1.443],
		variants: [0, 0],
		schar: [8614, 10236],
		stretch: [
			8614,
			8592,
			8594
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.51,
			.011,
			.977
		],
		hd: [.274, -.226]
	},
	8617: {
		dir: W,
		sizes: [.997, 1.463],
		variants: [0, 2],
		stretch: [
			8592,
			8617,
			8617
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.546,
			.01,
			.997
		],
		hd: [.274, -.226]
	},
	8618: {
		dir: W,
		sizes: [.997, 1.463],
		variants: [0, 2],
		stretch: [
			8618,
			8617,
			8594
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.546,
			.01,
			.997
		],
		hd: [.274, -.226]
	},
	8619: {
		dir: W,
		sizes: [.997, 1.463],
		variants: [0, 2],
		stretch: [
			8592,
			8617,
			8619
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.55,
			.05,
			.997
		],
		hd: [.274, -.226]
	},
	8620: {
		dir: W,
		sizes: [.997, 1.463],
		variants: [0, 2],
		stretch: [
			8620,
			8617,
			8594
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.55,
			.05,
			.997
		],
		hd: [.274, -.226]
	},
	8630: {
		dir: W,
		sizes: [.98, 1.33],
		variants: [0, 2]
	},
	8631: {
		dir: W,
		sizes: [.98, 1.33],
		variants: [0, 2]
	},
	8636: {
		dir: W,
		sizes: [1, 1.478],
		variants: [0, 2],
		stretch: [8636, 8636],
		stretchv: [3, 1],
		HDW: [
			.499,
			-.226,
			1
		],
		hd: [.273, -.226]
	},
	8637: {
		dir: W,
		sizes: [1.012, 1.478],
		variants: [0, 2],
		stretch: [8637, 8636],
		stretchv: [3, 1],
		HDW: [
			.273,
			0,
			1.012
		],
		hd: [.273, -.226]
	},
	8638: {
		dir: U,
		sizes: [.901, 1.367],
		variants: [0, 2],
		stretch: [8638, 8638],
		stretchv: [3, 1],
		HDW: [
			.697,
			.203,
			.441
		]
	},
	8639: {
		dir: U,
		sizes: [.901, 1.367],
		variants: [0, 2],
		stretch: [8639, 8639],
		stretchv: [3, 1],
		HDW: [
			.697,
			.203,
			.441
		]
	},
	8640: {
		dir: W,
		sizes: [1, 1.478],
		variants: [0, 2],
		stretch: [
			0,
			8636,
			8640
		],
		stretchv: [
			0,
			1,
			4
		],
		HDW: [
			.499,
			-.226,
			1
		],
		hd: [.273, -.226]
	},
	8641: {
		dir: W,
		sizes: [1.012, 1.478],
		variants: [0, 2],
		stretch: [
			0,
			8636,
			8641
		],
		stretchv: [
			0,
			1,
			4
		],
		HDW: [
			.273,
			0,
			1.012
		],
		hd: [.273, -.226]
	},
	8642: {
		dir: U,
		sizes: [.901, 1.367],
		variants: [0, 2],
		stretch: [
			0,
			8638,
			8642
		],
		stretchv: [
			0,
			1,
			4
		],
		HDW: [
			.703,
			.197,
			.441
		]
	},
	8643: {
		dir: U,
		sizes: [.901, 1.367],
		variants: [0, 2],
		stretch: [
			0,
			8639,
			8643
		],
		stretchv: [
			0,
			1,
			4
		],
		HDW: [
			.703,
			.197,
			.441
		]
	},
	8644: {
		dir: W,
		sizes: [1.018, 1.484],
		variants: [0, 2],
		stretch: [
			8644,
			8644,
			8644
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.669,
			.172,
			1.018
		],
		hd: [.432, -.065]
	},
	8645: {
		dir: U,
		sizes: [.907, 1.373],
		variants: [0, 2],
		stretch: [
			8645,
			8645,
			8645
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.703,
			.203,
			.896
		]
	},
	8646: {
		dir: W,
		sizes: [1.018, 1.484],
		variants: [0, 2],
		stretch: [
			8646,
			8644,
			8646
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.669,
			.172,
			1.018
		],
		hd: [.432, -.065]
	},
	8647: {
		dir: W,
		sizes: [.997, 1.463],
		variants: [0, 2],
		stretch: [8647, 8647],
		stretchv: [3, 1],
		HDW: [
			.75,
			.25,
			.997
		],
		hd: [.512, .012]
	},
	8648: {
		dir: U,
		sizes: [.883, 1.349],
		variants: [0, 2],
		stretch: [8648, 8648],
		stretchv: [3, 1],
		HDW: [
			.679,
			.203,
			.992
		]
	},
	8649: {
		dir: W,
		sizes: [.997, 1.463],
		variants: [0, 2],
		stretch: [
			0,
			8647,
			8649
		],
		stretchv: [
			0,
			1,
			4
		],
		HDW: [
			.75,
			.25,
			.997
		],
		hd: [.512, .012]
	},
	8650: {
		dir: U,
		sizes: [.883, 1.349],
		variants: [0, 2],
		stretch: [
			0,
			8648,
			8650
		],
		stretchv: [
			0,
			1,
			4
		],
		HDW: [
			.703,
			.179,
			.992
		]
	},
	8651: {
		dir: W,
		sizes: [1.018, 1.484],
		variants: [0, 2],
		stretch: [
			8651,
			8651,
			8651
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.598,
			.098,
			1.018
		],
		hd: [.369, -.131]
	},
	8652: {
		dir: W,
		sizes: [1.018, 1.484],
		variants: [0, 2],
		stretch: [
			8652,
			8651,
			8652
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.598,
			.098,
			1.018
		],
		hd: [.369, -.131]
	},
	8653: {
		dir: W,
		sizes: [.991, 1.457],
		variants: [0, 2],
		stretch: [
			8653,
			8654,
			0,
			8653
		],
		stretchv: [
			3,
			1,
			0,
			1
		],
		HDW: [
			.52,
			.02,
			.991
		],
		hd: [.369, -.131]
	},
	8654: {
		dir: W,
		sizes: [1.068, 1.534],
		variants: [0, 2],
		stretch: [
			8656,
			8654,
			8658,
			8653
		],
		stretchv: [
			3,
			1,
			4,
			1
		],
		HDW: [
			.52,
			.02,
			1.068
		],
		hd: [.369, -.131]
	},
	8655: {
		dir: W,
		sizes: [.991, 1.457],
		variants: [0, 2],
		stretch: [
			0,
			8654,
			8658,
			8653
		],
		stretchv: [
			0,
			1,
			4,
			1
		],
		HDW: [
			.52,
			.02,
			.991
		],
		hd: [.369, -.131]
	},
	8656: {
		dir: W,
		sizes: [1, 1.457],
		variants: [0, 0],
		schar: [8656, 10232],
		stretch: [8656, 8656],
		stretchv: [3, 1],
		HDW: [
			.52,
			.02,
			1
		],
		hd: [.369, -.131]
	},
	8657: {
		dir: U,
		sizes: [.88, 1.346],
		variants: [0, 2],
		stretch: [8657, 8657],
		stretchv: [3, 1],
		HDW: [
			.676,
			.203,
			.652
		]
	},
	8658: {
		dir: W,
		sizes: [1, 1.457],
		variants: [0, 0],
		schar: [8658, 10233],
		stretch: [
			0,
			8656,
			8658
		],
		stretchv: [
			0,
			1,
			4
		],
		HDW: [
			.52,
			.02,
			1
		],
		hd: [.369, -.131]
	},
	8659: {
		dir: U,
		sizes: [.88, 1.346],
		variants: [0, 2],
		stretch: [
			0,
			8657,
			8659
		],
		stretchv: [
			0,
			1,
			4
		],
		HDW: [
			.703,
			.176,
			.652
		]
	},
	8660: {
		dir: W,
		sizes: [1, 1.534],
		variants: [0, 0],
		schar: [8660, 10234],
		stretch: [
			8656,
			8656,
			8658
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.52,
			.02,
			1
		],
		hd: [.369, -.131]
	},
	8661: {
		dir: U,
		sizes: [.957, 1.423],
		variants: [0, 2],
		stretch: [
			8657,
			8657,
			8659
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.728,
			.228,
			.652
		]
	},
	8666: {
		dir: W,
		sizes: [1.015, 1.461],
		variants: [0, 2],
		stretch: [8666, 8666],
		stretchv: [3, 1],
		HDW: [
			.617,
			.117,
			1.015
		],
		hd: [.466, -.034]
	},
	8667: {
		dir: W,
		sizes: [1.015, 1.461],
		variants: [0, 2],
		stretch: [
			0,
			8666,
			8667
		],
		stretchv: [
			0,
			1,
			4
		],
		HDW: [
			.617,
			.117,
			1.015
		],
		hd: [.466, -.034]
	},
	8693: {
		dir: U,
		sizes: [.907, 1.373],
		variants: [0, 2],
		stretch: [
			8693,
			8645,
			8693
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.703,
			.203,
			.896
		]
	},
	8694: {
		dir: W,
		sizes: [.997, 1.463],
		variants: [0, 2],
		stretch: [
			0,
			8694,
			8694
		],
		stretchv: [
			0,
			1,
			4
		],
		HDW: [
			.99,
			.49,
			.997
		],
		hd: [.751, .251]
	},
	8719: {
		dir: U,
		sizes: [1.001, 1.401],
		variants: [0, 2]
	},
	8720: {
		dir: U,
		sizes: [1.001, 1.401],
		variants: [0, 2]
	},
	8721: {
		dir: U,
		sizes: [1.001, 1.401],
		variants: [0, 2]
	},
	8722: {
		dir: W,
		stretch: [0, 8722],
		HDW: [
			.583,
			.083,
			.778
		],
		hd: [.583, .083]
	},
	8725: {
		c: 47,
		dir: U,
		sizes: [
			1.001,
			1.311,
			1.717,
			2.249,
			2.945,
			3.859,
			5.055,
			6.621
		]
	},
	8730: {
		dir: U,
		sizes: [
			1.001,
			1.201,
			1.801,
			2.401,
			3.001
		],
		stretch: [
			8730,
			8730,
			9143
		],
		stretchv: [
			3,
			1,
			0
		],
		HDW: [
			.04,
			.96,
			1.056
		],
		fullExt: [.64, 2.44]
	},
	8739: {
		dir: U,
		sizes: [
			1.001,
			1.203,
			1.443,
			1.735,
			2.085,
			2.505,
			3.005,
			3.605
		],
		stretch: [0, 8739],
		stretchv: [0, 2],
		HDW: [
			.75,
			.25,
			.333
		]
	},
	8741: {
		dir: U,
		sizes: [
			1.001,
			1.203,
			1.443,
			1.735,
			2.085,
			2.503,
			3.004,
			3.607
		],
		stretch: [0, 8741],
		stretchv: [0, 2],
		HDW: [
			.75,
			.25,
			.555
		]
	},
	8747: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2],
		stretch: [
			8992,
			9134,
			8993
		],
		HDW: [
			.805,
			.306,
			1.185
		]
	},
	8748: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2]
	},
	8749: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2]
	},
	8750: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2]
	},
	8751: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2]
	},
	8752: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2]
	},
	8753: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2]
	},
	8754: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2]
	},
	8755: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2]
	},
	8801: {
		dir: W,
		stretch: [0, 8801],
		HDW: [
			.464,
			-.036,
			.778
		],
		hd: [.464, -.036]
	},
	8803: {
		dir: W,
		stretch: [0, 8803],
		HDW: [
			.561,
			.061,
			.778
		],
		hd: [.561, .061]
	},
	8866: {
		dir: U,
		sizes: [.685, .869],
		variants: [0, 0],
		schar: [8866, 10205]
	},
	8867: {
		dir: U,
		sizes: [.685, .869],
		variants: [0, 0],
		schar: [8867, 10206]
	},
	8868: {
		dir: U,
		sizes: [.685, .869],
		variants: [0, 0],
		schar: [8868, 10201]
	},
	8869: {
		dir: U,
		sizes: [.685, .869],
		variants: [0, 0],
		schar: [8869, 10200]
	},
	8896: {
		dir: U,
		sizes: [1.045, 1.394],
		variants: [0, 2]
	},
	8897: {
		dir: U,
		sizes: [1.045, 1.394],
		variants: [0, 2]
	},
	8898: {
		dir: U,
		sizes: [1.023, 1.357],
		variants: [0, 2]
	},
	8899: {
		dir: U,
		sizes: [1.023, 1.357],
		variants: [0, 2]
	},
	8968: {
		dir: U,
		sizes: [
			1.001,
			1.101,
			1.201,
			1.451,
			1.801,
			2.101,
			2.401,
			3.001
		],
		stretch: [9121, 9122],
		HDW: [
			.75,
			.25,
			.667
		]
	},
	8969: {
		dir: U,
		sizes: [
			1.001,
			1.101,
			1.201,
			1.451,
			1.801,
			2.101,
			2.401,
			3.001
		],
		stretch: [9124, 9125],
		HDW: [
			.75,
			.25,
			.667
		]
	},
	8970: {
		dir: U,
		sizes: [
			1.001,
			1.101,
			1.201,
			1.451,
			1.801,
			2.101,
			2.401,
			3.001
		],
		stretch: [
			0,
			9122,
			9123
		],
		HDW: [
			.75,
			.25,
			.667
		]
	},
	8971: {
		dir: U,
		sizes: [
			1.001,
			1.101,
			1.201,
			1.451,
			1.801,
			2.101,
			2.401,
			3.001
		],
		stretch: [
			0,
			9125,
			9126
		],
		HDW: [
			.75,
			.25,
			.667
		]
	},
	8978: {
		c: 9180,
		dir: W,
		sizes: [
			.504,
			1.006,
			1.508,
			2.012,
			2.516,
			3.02,
			3.524,
			4.032
		],
		stretch: [
			9180,
			9180,
			9180
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.796,
			-.502,
			.504
		],
		hd: [.796, -.689]
	},
	8994: {
		c: 9180,
		dir: W,
		sizes: [
			.504,
			1.006,
			1.508,
			2.012,
			2.516,
			3.02,
			3.524,
			4.032
		],
		stretch: [
			9180,
			9180,
			9180
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.796,
			-.502,
			.504
		],
		hd: [.796, -.689]
	},
	8995: {
		c: 9181,
		dir: W,
		sizes: [
			.504,
			1.006,
			1.508,
			2.012,
			2.516,
			3.02,
			3.524,
			4.032
		],
		stretch: [
			9181,
			9181,
			9181
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			-.072,
			.366,
			.504
		],
		hd: [-.259, .366]
	},
	9001: {
		dir: U,
		sizes: [
			1.001,
			1.101,
			1.201,
			1.451,
			1.801,
			2.101,
			2.401,
			3.001
		],
		schar: [9001, 10216]
	},
	9002: {
		dir: U,
		sizes: [
			1.001,
			1.101,
			1.201,
			1.451,
			1.801,
			2.101,
			2.401,
			3.001
		],
		schar: [9002, 10217]
	},
	9130: {
		dir: U,
		sizes: [.748],
		stretch: [0, 9130],
		HDW: [
			.748,
			0,
			.902
		]
	},
	9135: {
		c: 8211,
		dir: W,
		stretch: [0, 8211],
		HDW: [
			.277,
			-.255,
			.5
		],
		hd: [.277, -.255]
	},
	9136: {
		dir: U,
		sizes: [1.125],
		stretch: [
			9127,
			9130,
			9133
		],
		HDW: [
			.75,
			.375,
			.902
		]
	},
	9137: {
		dir: U,
		sizes: [1.125],
		stretch: [
			9131,
			9130,
			9129
		],
		HDW: [
			.75,
			.375,
			.902
		]
	},
	9140: {
		dir: W,
		sizes: [
			.36,
			.735,
			1.11,
			1.485,
			1.86,
			2.235,
			2.61,
			2.985
		],
		stretch: [
			9140,
			9140,
			9140
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.772,
			-.504,
			.36
		],
		hd: [.772, -.706]
	},
	9141: {
		dir: W,
		sizes: [
			.36,
			.735,
			1.11,
			1.485,
			1.86,
			2.235,
			2.61,
			2.985
		],
		stretch: [
			9141,
			9141,
			9141
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			-.074,
			.342,
			.36
		],
		hd: [-.276, .342]
	},
	9168: {
		dir: U,
		sizes: [.642],
		stretch: [0, 9168],
		HDW: [
			.642,
			0,
			.333
		]
	},
	9180: {
		dir: W,
		sizes: [
			.504,
			1.006,
			1.508,
			2.012,
			2.516,
			3.02,
			3.524,
			4.032
		],
		stretch: [
			9180,
			9180,
			9180
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.796,
			-.502,
			.504
		],
		hd: [.796, -.689]
	},
	9181: {
		dir: W,
		sizes: [
			.504,
			1.006,
			1.508,
			2.012,
			2.516,
			3.02,
			3.524,
			4.032
		],
		stretch: [
			9181,
			9181,
			9181
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			-.072,
			.366,
			.504
		],
		hd: [-.259, .366]
	},
	9182: {
		dir: W,
		sizes: [
			.492,
			.993,
			1.494,
			1.996,
			2.498,
			3,
			3.502,
			4.006
		],
		stretch: [
			9182,
			175,
			9182,
			9182
		],
		stretchv: [
			3,
			1,
			4,
			1
		],
		HDW: [
			.85,
			-.493,
			.492
		],
		hd: [.724, -.618]
	},
	9183: {
		dir: W,
		sizes: [
			.492,
			.993,
			1.494,
			1.996,
			2.498,
			3,
			3.502,
			4.006
		],
		stretch: [
			9183,
			95,
			9183,
			9183
		],
		stretchv: [
			3,
			1,
			4,
			1
		],
		HDW: [
			-.062,
			.419,
			.492
		],
		hd: [-.188, .294]
	},
	9184: {
		dir: W,
		sizes: [
			.546,
			1.048,
			1.55,
			2.056,
			2.564,
			3.068,
			3.574,
			4.082
		],
		stretch: [
			9184,
			9184,
			9184
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.873,
			-.605,
			.546
		],
		hd: [.873, -.766]
	},
	9185: {
		dir: W,
		sizes: [
			.546,
			1.048,
			1.55,
			2.056,
			2.564,
			3.068,
			3.574,
			4.082
		],
		stretch: [
			9185,
			9185,
			9185
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			-.175,
			.443,
			.546
		],
		hd: [-.336, .443]
	},
	9472: {
		c: 8211,
		dir: W,
		stretch: [0, 8211],
		HDW: [
			.277,
			-.255,
			.5
		],
		hd: [.277, -.255]
	},
	10072: {
		c: 8739,
		dir: U,
		sizes: [
			1.001,
			1.203,
			1.443,
			1.735,
			2.085,
			2.505,
			3.005,
			3.605
		],
		stretch: [0, 8739],
		stretchv: [0, 2],
		HDW: [
			.75,
			.25,
			.333
		]
	},
	10197: {
		dir: U,
		sizes: [.511, .628],
		variants: [0, 2]
	},
	10198: {
		dir: U,
		sizes: [.511, .628],
		variants: [0, 2]
	},
	10199: {
		dir: U,
		sizes: [.511, .628],
		variants: [0, 2]
	},
	10214: {
		dir: U,
		sizes: [
			1.001,
			1.101,
			1.201,
			1.451,
			1.801,
			2.101,
			2.401,
			3.001
		],
		stretch: [
			10214,
			10214,
			10214
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.75,
			.25,
			1.007
		]
	},
	10215: {
		dir: U,
		sizes: [
			1.001,
			1.101,
			1.201,
			1.451,
			1.801,
			2.101,
			2.401,
			3.001
		],
		stretch: [
			10215,
			10215,
			10215
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.75,
			.25,
			1.007
		]
	},
	10216: {
		dir: U,
		sizes: [
			1.001,
			1.101,
			1.201,
			1.451,
			1.801,
			2.101,
			2.401,
			3.001
		]
	},
	10217: {
		dir: U,
		sizes: [
			1.001,
			1.101,
			1.201,
			1.451,
			1.801,
			2.101,
			2.401,
			3.001
		]
	},
	10218: {
		dir: U,
		sizes: [
			1.001,
			1.101,
			1.201,
			1.451,
			1.801,
			2.101,
			2.401,
			3.001
		]
	},
	10219: {
		dir: U,
		sizes: [
			1.001,
			1.101,
			1.201,
			1.451,
			1.801,
			2.101,
			2.401,
			3.001
		]
	},
	10222: {
		dir: U,
		sizes: [
			1.025,
			1.127,
			1.229,
			1.483,
			1.837,
			2.141,
			2.445,
			3.053
		],
		stretch: [
			10222,
			10222,
			10222
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.762,
			.262,
			.647
		]
	},
	10223: {
		dir: U,
		sizes: [
			1.025,
			1.127,
			1.229,
			1.483,
			1.837,
			2.141,
			2.445,
			3.053
		],
		stretch: [
			10223,
			10223,
			10223
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.762,
			.262,
			.647
		]
	},
	10229: {
		c: 8592,
		dir: W,
		sizes: [1, 1.463],
		variants: [0, 0],
		schar: [8592, 10229],
		stretch: [8592, 8592],
		stretchv: [3, 1],
		HDW: [
			.51,
			.01,
			1
		],
		hd: [.274, -.226]
	},
	10230: {
		c: 8594,
		dir: W,
		sizes: [1, 1.463],
		variants: [0, 0],
		schar: [8594, 10230],
		stretch: [
			0,
			8592,
			8594
		],
		stretchv: [
			0,
			1,
			4
		],
		HDW: [
			.51,
			.01,
			1
		],
		hd: [.274, -.226]
	},
	10231: {
		c: 8596,
		dir: W,
		sizes: [1, 1.442],
		variants: [0, 0],
		schar: [8596, 10231],
		stretch: [
			8592,
			8592,
			8594
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.51,
			.01,
			1
		],
		hd: [.274, -.226]
	},
	10232: {
		c: 8656,
		dir: W,
		sizes: [1, 1.457],
		variants: [0, 0],
		schar: [8656, 10232],
		stretch: [8656, 8656],
		stretchv: [3, 1],
		HDW: [
			.52,
			.02,
			1
		],
		hd: [.369, -.131]
	},
	10233: {
		c: 8658,
		dir: W,
		sizes: [1, 1.457],
		variants: [0, 0],
		schar: [8658, 10233],
		stretch: [
			0,
			8656,
			8658
		],
		stretchv: [
			0,
			1,
			4
		],
		HDW: [
			.52,
			.02,
			1
		],
		hd: [.369, -.131]
	},
	10234: {
		c: 8660,
		dir: W,
		sizes: [1, 1.534],
		variants: [0, 0],
		schar: [8660, 10234],
		stretch: [
			8656,
			8656,
			8658
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.52,
			.02,
			1
		],
		hd: [.369, -.131]
	},
	10235: {
		c: 8612,
		dir: W,
		sizes: [.977, 1.443],
		variants: [0, 0],
		schar: [8612, 10235],
		stretch: [
			8592,
			8592,
			8612
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.51,
			.011,
			.977
		],
		hd: [.274, -.226]
	},
	10236: {
		c: 8614,
		dir: W,
		sizes: [.977, 1.443],
		variants: [0, 0],
		schar: [8614, 10236],
		stretch: [
			8614,
			8592,
			8594
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.51,
			.011,
			.977
		],
		hd: [.274, -.226]
	},
	10570: {
		dir: W,
		sizes: [1.012],
		stretch: [
			8636,
			8636,
			8641
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.499,
			0,
			1.012
		],
		hd: [.273, -.226]
	},
	10571: {
		dir: W,
		sizes: [1.012],
		stretch: [
			8637,
			8636,
			8640
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.499,
			0,
			1.012
		],
		hd: [.273, -.226]
	},
	10574: {
		dir: W,
		sizes: [1],
		stretch: [
			8636,
			8636,
			8640
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.499,
			-.226,
			1
		],
		hd: [.273, -.226]
	},
	10576: {
		dir: W,
		sizes: [1],
		stretch: [
			8637,
			8636,
			8641
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.273,
			0,
			1
		],
		hd: [.273, -.226]
	},
	10586: {
		dir: W,
		sizes: [1],
		stretch: [
			8636,
			8636,
			8612
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.51,
			.011,
			1
		],
		hd: [.273, -.226]
	},
	10587: {
		dir: W,
		sizes: [1],
		stretch: [
			8614,
			8636,
			8640
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.51,
			.011,
			1
		],
		hd: [.273, -.226]
	},
	10590: {
		dir: W,
		sizes: [1],
		stretch: [
			8637,
			8636,
			8612
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.51,
			.011,
			1
		],
		hd: [.273, -.226]
	},
	10591: {
		dir: W,
		sizes: [1],
		stretch: [
			8614,
			8636,
			8641
		],
		stretchv: [
			3,
			1,
			4
		],
		HDW: [
			.51,
			.011,
			1
		],
		hd: [.273, -.226]
	},
	10627: {
		dir: U,
		sizes: [
			1.001,
			1.101,
			1.201,
			1.451,
			1.801,
			2.101,
			2.401,
			3.001
		]
	},
	10628: {
		dir: U,
		sizes: [
			1.001,
			1.101,
			1.201,
			1.451,
			1.801,
			2.101,
			2.401,
			3.001
		]
	},
	10629: {
		dir: U,
		sizes: [
			.997,
			1.095,
			1.195,
			1.445,
			1.793,
			2.093,
			2.393,
			2.991
		]
	},
	10630: {
		dir: U,
		sizes: [
			.997,
			1.095,
			1.195,
			1.445,
			1.793,
			2.093,
			2.393,
			2.991
		]
	},
	10744: {
		dir: U,
		sizes: [1.076, 1.917],
		variants: [0, 2]
	},
	10745: {
		dir: U,
		sizes: [1.076, 1.917],
		variants: [0, 2]
	},
	10748: {
		dir: U,
		sizes: [
			1.001,
			1.083,
			1.185,
			1.433,
			1.793,
			2.093,
			2.383,
			2.997
		]
	},
	10749: {
		dir: U,
		sizes: [
			1.001,
			1.083,
			1.185,
			1.433,
			1.793,
			2.093,
			2.383,
			2.997
		]
	},
	10752: {
		dir: U,
		sizes: [.987, 1.305],
		variants: [0, 2]
	},
	10753: {
		dir: U,
		sizes: [.987, 1.305],
		variants: [0, 2]
	},
	10754: {
		dir: U,
		sizes: [.987, 1.305],
		variants: [0, 2]
	},
	10755: {
		dir: U,
		sizes: [1.023, 1.357],
		variants: [0, 2]
	},
	10756: {
		dir: U,
		sizes: [1.023, 1.357],
		variants: [0, 2]
	},
	10757: {
		dir: U,
		sizes: [1.029, 1.373],
		variants: [0, 2]
	},
	10758: {
		dir: U,
		sizes: [1.029, 1.373],
		variants: [0, 2]
	},
	10759: {
		dir: U,
		sizes: [1.045, 1.907],
		variants: [0, 2]
	},
	10760: {
		dir: U,
		sizes: [1.045, 1.907],
		variants: [0, 2]
	},
	10761: {
		dir: U,
		sizes: [.981, 1.261],
		variants: [0, 2]
	},
	10762: {
		dir: U,
		sizes: [1.001, 1.401],
		variants: [0, 2]
	},
	10763: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2]
	},
	10764: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2]
	},
	10765: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2]
	},
	10766: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2]
	},
	10767: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2]
	},
	10768: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2]
	},
	10769: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2]
	},
	10770: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2]
	},
	10771: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2]
	},
	10772: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2]
	},
	10773: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2]
	},
	10774: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2]
	},
	10775: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2]
	},
	10776: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2]
	},
	10777: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2]
	},
	10778: {
		dir: U,
		sizes: [1.112, 2.223],
		variants: [0, 2]
	},
	10779: {
		dir: U,
		sizes: [1.274, 2.464],
		variants: [0, 2]
	},
	10780: {
		dir: U,
		sizes: [1.274, 2.486],
		variants: [0, 2]
	},
	10781: {
		dir: U,
		sizes: [.767, 1.073],
		variants: [0, 2]
	},
	10782: {
		dir: U,
		sizes: [.767, 1.074],
		variants: [0, 2]
	},
	10784: {
		dir: U,
		sizes: [.595, .835],
		variants: [0, 2]
	},
	10785: {
		dir: U,
		sizes: [.901, 1.261],
		variants: [0, 2]
	},
	11004: {
		dir: U,
		sizes: [1.001, 1.915],
		variants: [0, 2]
	},
	11007: {
		dir: U,
		sizes: [1.241, 1.915],
		variants: [0, 2]
	},
	12296: {
		c: 10216,
		dir: U,
		sizes: [
			1.001,
			1.101,
			1.201,
			1.451,
			1.801,
			2.101,
			2.401,
			3.001
		]
	},
	12297: {
		c: 10217,
		dir: U,
		sizes: [
			1.001,
			1.101,
			1.201,
			1.451,
			1.801,
			2.101,
			2.401,
			3.001
		]
	},
	65079: {
		c: 9182,
		dir: W,
		sizes: [
			.492,
			.993,
			1.494,
			1.996,
			2.498,
			3,
			3.502,
			4.006
		],
		stretch: [
			9182,
			175,
			9182,
			9182
		],
		stretchv: [
			3,
			1,
			4,
			1
		],
		HDW: [
			.85,
			-.493,
			.492
		],
		hd: [.724, -.618]
	},
	65080: {
		c: 9183,
		dir: W,
		sizes: [
			.492,
			.993,
			1.494,
			1.996,
			2.498,
			3,
			3.502,
			4.006
		],
		stretch: [
			9183,
			95,
			9183,
			9183
		],
		stretchv: [
			3,
			1,
			4,
			1
		],
		HDW: [
			-.062,
			.419,
			.492
		],
		hd: [-.188, .294]
	},
	126704: {
		dir: U,
		sizes: [.527, .738]
	},
	126705: {
		dir: U,
		sizes: [.531, .744]
	}
}, To = Co(ei), Eo = class extends To {
	constructor(e = {}) {
		super(e);
		let t = this.constructor;
		for (let e of Object.keys(this.variant)) this.variant[e].cacheID = "NCM-" + (t.variantCacheIds[e] || "N");
	}
};
Eo.NAME = "MathJaxNewcm", Eo.OPTIONS = Object.assign(Object.assign({}, To.OPTIONS), { dynamicPrefix: "@mathjax/mathjax-newcm-font/js/svg/dynamic" }), Eo.defaultDelimiters = wo, Eo.defaultChars = {
	normal: e,
	bold: d,
	italic: a,
	"bold-italic": r,
	"double-struck": l,
	fraktur: s,
	"bold-fraktur": n,
	"sans-serif": me,
	"bold-sans-serif": m,
	"sans-serif-italic": he,
	"sans-serif-bold-italic": pe,
	monospace: t,
	"-smallop": f,
	"-largeop": i,
	"-size3": te,
	"-size4": ne,
	"-size5": ae,
	"-size6": ce,
	"-size7": ee,
	"-tex-mathit": g,
	"-tex-calligraphic": fe,
	"-tex-bold-calligraphic": ie,
	"-tex-oldstyle": h,
	"-tex-bold-oldstyle": ue,
	"-tex-variant": se,
	"-lf-tp": c,
	"-rt-bt": p,
	"-ex-md": o,
	"-bbold": u,
	"-upsmall": re,
	"-uplarge": le,
	script: oe,
	"bold-script": de
}, Eo.dynamicFiles = ei.defineDynamicFiles([
	["latin", { normal: [
		11377,
		[192, 214],
		[216, 239],
		[241, 246],
		[248, 304],
		[306, 566],
		[568, 591],
		[7680, 7835],
		7838,
		[7840, 7929]
	] }],
	["latin-b", { bold: [
		11377,
		[192, 214],
		[216, 239],
		[241, 246],
		[248, 304],
		[306, 566],
		[568, 591],
		[7680, 7699],
		[7704, 7707],
		[7710, 7719],
		[7722, 7755],
		[7764, 7779],
		[7784, 7799],
		[7804, 7833],
		7835,
		7838,
		[7840, 7929]
	] }],
	["latin-i", { italic: [
		[192, 214],
		[216, 239],
		[241, 246],
		[248, 304],
		[306, 566],
		[568, 591],
		[7680, 7699],
		[7704, 7707],
		[7710, 7719],
		[7722, 7755],
		[7764, 7779],
		[7784, 7799],
		[7804, 7833],
		7835,
		7838,
		[7840, 7929]
	] }],
	["latin-bi", { "bold-italic": [
		[192, 214],
		[216, 239],
		[241, 246],
		[248, 304],
		[306, 566],
		[568, 591],
		[7680, 7699],
		[7704, 7707],
		[7710, 7719],
		[7722, 7755],
		[7764, 7779],
		[7784, 7799],
		[7804, 7833],
		7835,
		7838,
		[7840, 7929]
	] }],
	["double-struck", {
		normal: [
			120120,
			120121,
			[120123, 120126],
			[120128, 120132],
			120134,
			[120138, 120144],
			[120146, 120171],
			[120792, 120801],
			8450,
			8461,
			8469,
			8473,
			8474,
			8477,
			8484,
			[8508, 8512],
			[8517, 8521]
		],
		"double-struck": [305, 567]
	}],
	["fraktur", {
		normal: [
			120068,
			120069,
			[120071, 120074],
			[120077, 120084],
			[120086, 120092],
			[120094, 120119],
			[120172, 120223],
			8460,
			8465,
			8476,
			8488,
			8493
		],
		fraktur: [305, 567],
		"bold-fraktur": [305, 567]
	}],
	["script", {
		normal: [
			119964,
			119966,
			119967,
			119970,
			119973,
			119974,
			[119977, 119980],
			[119982, 119993],
			119995,
			[119997, 120003],
			[120005, 120067],
			8458,
			8459,
			8464,
			8466,
			8467,
			8472,
			8475,
			8492,
			[8495, 8497],
			8499,
			8500
		],
		script: [],
		"bold-script": []
	}],
	["sans-serif", {
		normal: [
			[120224, 120431],
			[120662, 120777],
			[120802, 120821],
			[8513, 8516]
		],
		"sans-serif": [
			1008,
			1009,
			[1012, 1014],
			[123, 126],
			160,
			163,
			165,
			167,
			168,
			172,
			[175, 177],
			[180, 183],
			215,
			240,
			247,
			305,
			[32, 47],
			567,
			[58, 64],
			710,
			711,
			[713, 715],
			[728, 730],
			732,
			[768, 776],
			778,
			780,
			[8208, 8212],
			8214,
			8216,
			8217,
			8220,
			8221,
			8224,
			8225,
			8230,
			8260,
			8364,
			8486,
			8487,
			[8592, 8595],
			8722,
			8734,
			91,
			[913, 919],
			92,
			[920, 929],
			93,
			[931, 937],
			94,
			[945, 949],
			95,
			[950, 959],
			96,
			[960, 969],
			977,
			978,
			981,
			982
		],
		"bold-sans-serif": [
			1014,
			[123, 126],
			160,
			163,
			165,
			167,
			168,
			172,
			[175, 177],
			[180, 183],
			215,
			240,
			247,
			305,
			32,
			33,
			[35, 47],
			567,
			58,
			59,
			61,
			63,
			64,
			710,
			711,
			[713, 715],
			[728, 730],
			732,
			[768, 776],
			778,
			780,
			[8208, 8212],
			8214,
			8216,
			8217,
			8220,
			8221,
			8224,
			8225,
			8230,
			8260,
			8364,
			8486,
			8487,
			[8592, 8595],
			8722,
			8734,
			[91, 96],
			978
		],
		"sans-serif-italic": [
			1008,
			1009,
			[1012, 1014],
			[123, 126],
			160,
			163,
			165,
			167,
			168,
			172,
			[175, 177],
			[180, 183],
			215,
			240,
			247,
			305,
			[32, 56],
			567,
			[57, 64],
			710,
			711,
			[713, 715],
			[728, 730],
			732,
			[768, 776],
			778,
			780,
			[8208, 8212],
			8214,
			8216,
			8217,
			8220,
			8221,
			8224,
			8225,
			8230,
			8260,
			8364,
			8486,
			8487,
			[8592, 8595],
			8722,
			8734,
			91,
			[913, 919],
			92,
			[920, 929],
			93,
			[931, 937],
			94,
			[945, 949],
			95,
			[950, 959],
			96,
			[960, 969],
			977,
			978,
			981,
			982
		],
		"sans-serif-bold-italic": [
			1014,
			[123, 126],
			160,
			163,
			165,
			167,
			168,
			172,
			[175, 177],
			[180, 183],
			215,
			240,
			247,
			305,
			32,
			33,
			[35, 56],
			567,
			[57, 59],
			61,
			63,
			64,
			710,
			711,
			[713, 715],
			[728, 730],
			732,
			[768, 776],
			778,
			780,
			[8208, 8212],
			8214,
			8216,
			8217,
			8220,
			8221,
			8224,
			8225,
			8230,
			8260,
			8364,
			8486,
			8487,
			[8592, 8595],
			8722,
			8734,
			[91, 96],
			978
		]
	}],
	["sans-serif-r", { "sans-serif": [
		11377,
		[192, 214],
		[216, 239],
		[241, 246],
		[248, 304],
		[306, 566],
		[568, 591],
		[7680, 7699],
		[7704, 7707],
		[7710, 7719],
		[7722, 7755],
		[7764, 7779],
		[7784, 7799],
		[7804, 7833],
		7835,
		7838,
		[7840, 7929]
	] }],
	["sans-serif-b", { "bold-sans-serif": [
		11377,
		[192, 214],
		[216, 239],
		[241, 246],
		[248, 304],
		[306, 566],
		[568, 591],
		[7680, 7699],
		[7704, 7707],
		[7710, 7719],
		[7722, 7755],
		[7764, 7779],
		[7784, 7799],
		[7804, 7833],
		7835,
		7838,
		[7840, 7929]
	] }],
	["sans-serif-i", { "sans-serif-italic": [
		11377,
		[192, 214],
		[216, 239],
		[241, 246],
		[248, 304],
		[306, 566],
		[568, 591],
		[7680, 7699],
		[7704, 7707],
		[7710, 7719],
		[7722, 7755],
		[7764, 7779],
		[7784, 7799],
		[7804, 7833],
		7835,
		7838,
		[7840, 7929]
	] }],
	["sans-serif-bi", { "sans-serif-bold-italic": [
		11377,
		[192, 214],
		[216, 239],
		[241, 246],
		[248, 304],
		[306, 566],
		[568, 591],
		[7680, 7699],
		[7704, 7707],
		[7710, 7719],
		[7722, 7755],
		[7764, 7779],
		[7784, 7799],
		[7804, 7833],
		7835,
		7838,
		[7840, 7929]
	] }],
	["sans-serif-ex", {
		"sans-serif": [
			10013,
			10214,
			10215,
			11800,
			161,
			162,
			164,
			166,
			[169, 171],
			173,
			174,
			184,
			[186, 191],
			3647,
			59395,
			[59908, 59910],
			59913,
			59915,
			59917,
			59920,
			59927,
			59930,
			59932,
			59934,
			59935,
			59942,
			59946,
			59948,
			59951,
			59957,
			59959,
			59962,
			59966,
			59970,
			59973,
			60163,
			60164,
			60168,
			60175,
			60177,
			60178,
			60182,
			60185,
			60190,
			60191,
			60200,
			60201,
			60203,
			60209,
			60213,
			60214,
			60218,
			60219,
			60224,
			60232,
			60233,
			60237,
			60257,
			60259,
			60261,
			60270,
			60271,
			[60424, 60430],
			60432,
			60433,
			61699,
			61700,
			61705,
			[61719, 61726],
			[61729, 61731],
			[61734, 61741],
			61743,
			[61747, 61752],
			61757,
			[61761, 61766],
			[61771, 61788],
			[61791, 61797],
			61800,
			[61804, 61810],
			61813,
			[61817, 61819],
			[61822, 61824],
			61826,
			61828,
			61829,
			[61832, 61839],
			61842,
			61850,
			61854,
			61855,
			61857,
			61859,
			61860,
			[61863, 61877],
			62082,
			62083,
			62110,
			62113,
			62116,
			[62119, 62121],
			62124,
			62126,
			62127,
			[62560, 62568],
			[62570, 62578],
			63166,
			[63187, 63190],
			63198,
			[64256, 64260],
			65126,
			[688, 709],
			712,
			716,
			[718, 727],
			731,
			[733, 762],
			7620,
			7621,
			7624,
			7625,
			[763, 766],
			777,
			779,
			[781, 821],
			8218,
			8219,
			822,
			8222,
			8223,
			8226,
			823,
			8233,
			8240,
			8241,
			8249,
			825,
			8250,
			8251,
			8253,
			8255,
			8256,
			826,
			8261,
			8262,
			827,
			8274,
			8276,
			[828, 831],
			8319,
			832,
			8320,
			[833, 835],
			8353,
			8358,
			836,
			8361,
			8363,
			8369,
			837,
			8370,
			[838, 845],
			8451,
			846,
			8470,
			8471,
			8478,
			848,
			8480,
			8482,
			849,
			8494,
			[850, 859],
			[8592, 8595],
			[860, 873],
			8730,
			8738,
			[874, 879],
			8960,
			9001,
			9002,
			9250,
			9251,
			9474,
			9553,
			9702,
			9773,
			9792,
			9834,
			9901,
			9902,
			9906
		],
		"bold-sans-serif": [
			10013,
			10214,
			10215,
			11800,
			161,
			162,
			164,
			166,
			[169, 171],
			173,
			174,
			184,
			[186, 191],
			3647,
			59395,
			[59908, 59910],
			59913,
			59915,
			59917,
			59920,
			59927,
			59930,
			59932,
			59934,
			59935,
			59942,
			59946,
			59948,
			59951,
			59957,
			59962,
			59966,
			59970,
			59973,
			60163,
			60164,
			60168,
			[60175, 60178],
			60182,
			60185,
			60190,
			60191,
			60200,
			60201,
			60203,
			60209,
			60213,
			60214,
			60218,
			60219,
			60224,
			60232,
			60233,
			60237,
			60257,
			60259,
			60261,
			60270,
			60271,
			[60424, 60430],
			60432,
			60433,
			61699,
			61700,
			61705,
			[61719, 61726],
			[61729, 61731],
			[61734, 61741],
			61743,
			[61747, 61752],
			61757,
			[61761, 61766],
			[61771, 61788],
			[61791, 61797],
			61800,
			[61804, 61810],
			61813,
			[61817, 61819],
			[61822, 61824],
			61826,
			61828,
			61829,
			[61832, 61839],
			61842,
			61850,
			61854,
			61855,
			61857,
			61859,
			61860,
			[61863, 61877],
			62082,
			62083,
			62110,
			62113,
			62116,
			[62119, 62121],
			62124,
			62126,
			62127,
			[62560, 62568],
			[62570, 62578],
			63166,
			[63187, 63190],
			63198,
			[64256, 64260],
			65126,
			[688, 709],
			712,
			716,
			[718, 727],
			731,
			[733, 762],
			7620,
			7621,
			7624,
			7625,
			[763, 766],
			777,
			779,
			[781, 821],
			8218,
			8219,
			822,
			8222,
			8223,
			8226,
			823,
			8233,
			8240,
			8241,
			8249,
			825,
			8250,
			8251,
			8253,
			8255,
			8256,
			826,
			8261,
			8262,
			827,
			8274,
			8276,
			[828, 831],
			8319,
			832,
			8320,
			[833, 835],
			8353,
			8358,
			836,
			8361,
			8363,
			8369,
			837,
			8370,
			[838, 845],
			8451,
			846,
			8470,
			8471,
			8478,
			848,
			8480,
			8482,
			849,
			8494,
			[850, 859],
			[8592, 8595],
			[860, 873],
			8730,
			8738,
			[874, 879],
			8960,
			9001,
			9002,
			9250,
			9251,
			9474,
			9553,
			9702,
			9773,
			9792,
			9834,
			9901,
			9902,
			9906
		],
		"sans-serif-italic": [
			10013,
			10214,
			10215,
			11800,
			161,
			162,
			164,
			166,
			[169, 171],
			173,
			174,
			184,
			[186, 191],
			3647,
			59395,
			[59908, 59910],
			59913,
			59915,
			59917,
			59920,
			59927,
			59930,
			59932,
			59934,
			59935,
			59942,
			59946,
			59948,
			59951,
			59957,
			59962,
			59966,
			59970,
			59973,
			60163,
			60164,
			60168,
			[60175, 60178],
			60182,
			60185,
			60190,
			60191,
			60200,
			60201,
			60203,
			60209,
			60213,
			60214,
			60218,
			60219,
			60224,
			60232,
			60233,
			60237,
			60257,
			60259,
			60261,
			60270,
			60271,
			[60424, 60430],
			60432,
			60433,
			61699,
			61700,
			61705,
			[61719, 61726],
			[61729, 61731],
			[61734, 61741],
			61743,
			[61747, 61752],
			61757,
			[61761, 61766],
			[61771, 61788],
			[61791, 61797],
			61800,
			[61804, 61810],
			61813,
			[61817, 61819],
			[61822, 61824],
			61826,
			61828,
			61829,
			[61832, 61839],
			61842,
			61850,
			61854,
			61855,
			61857,
			61859,
			61860,
			[61863, 61877],
			62082,
			62083,
			62110,
			62113,
			62116,
			[62119, 62121],
			62124,
			62126,
			62127,
			[62560, 62568],
			[62570, 62578],
			63166,
			[63187, 63190],
			63198,
			[64256, 64260],
			65126,
			[688, 709],
			712,
			716,
			[718, 727],
			731,
			[733, 762],
			7620,
			7621,
			7624,
			7625,
			[763, 766],
			777,
			779,
			[781, 821],
			8218,
			8219,
			822,
			8222,
			8223,
			8226,
			823,
			8233,
			8240,
			8241,
			8249,
			825,
			8250,
			8251,
			8253,
			8255,
			8256,
			826,
			8261,
			8262,
			827,
			8274,
			8276,
			[828, 831],
			8319,
			832,
			8320,
			[833, 835],
			8353,
			8358,
			836,
			8361,
			8363,
			8369,
			837,
			8370,
			[838, 845],
			8451,
			846,
			8470,
			8471,
			8478,
			848,
			8480,
			8482,
			849,
			8494,
			[850, 859],
			[8592, 8595],
			[860, 873],
			8730,
			8738,
			[874, 879],
			8960,
			9001,
			9002,
			9250,
			9251,
			9474,
			9553,
			9702,
			9773,
			9792,
			9834,
			9901,
			9902,
			9906
		],
		"sans-serif-bold-italic": [
			10013,
			10214,
			10215,
			11800,
			161,
			162,
			164,
			166,
			[169, 171],
			173,
			174,
			184,
			[186, 191],
			3647,
			59395,
			[59908, 59910],
			59913,
			59915,
			59917,
			59920,
			59927,
			59930,
			59932,
			59934,
			59935,
			59942,
			59946,
			59948,
			59951,
			59957,
			59962,
			59966,
			59970,
			59973,
			60163,
			60164,
			60168,
			[60175, 60178],
			60182,
			60185,
			60190,
			60191,
			60200,
			60201,
			60203,
			60209,
			60213,
			60214,
			60218,
			60219,
			60224,
			60232,
			60233,
			60237,
			60257,
			60259,
			60261,
			60270,
			60271,
			[60424, 60430],
			60432,
			60433,
			61699,
			61700,
			61705,
			[61719, 61726],
			[61729, 61731],
			[61734, 61741],
			61743,
			[61747, 61752],
			61757,
			[61761, 61766],
			[61771, 61788],
			[61791, 61797],
			61800,
			[61804, 61810],
			61813,
			[61817, 61819],
			[61822, 61824],
			61826,
			61828,
			61829,
			[61832, 61839],
			61842,
			61850,
			61854,
			61855,
			61857,
			61859,
			61860,
			[61863, 61877],
			62082,
			62083,
			62110,
			62113,
			62116,
			[62119, 62121],
			62124,
			62126,
			62127,
			[62560, 62568],
			[62570, 62578],
			63166,
			[63187, 63190],
			63198,
			[64256, 64260],
			65126,
			[688, 709],
			712,
			716,
			[718, 727],
			731,
			[733, 762],
			7620,
			7621,
			7624,
			7625,
			[763, 766],
			777,
			779,
			[781, 821],
			8218,
			8219,
			822,
			8222,
			8223,
			8226,
			823,
			8233,
			8240,
			8241,
			8249,
			825,
			8250,
			8251,
			8253,
			8255,
			8256,
			826,
			8261,
			8262,
			827,
			8274,
			8276,
			[828, 831],
			8319,
			832,
			8320,
			[833, 835],
			8353,
			8358,
			836,
			8361,
			8363,
			8369,
			837,
			8370,
			[838, 845],
			8451,
			846,
			847,
			8470,
			8471,
			8478,
			848,
			8480,
			8482,
			849,
			8494,
			[850, 859],
			[8592, 8595],
			[860, 873],
			8730,
			8738,
			[874, 879],
			8960,
			9001,
			9002,
			9250,
			9251,
			9474,
			9553,
			9702,
			9773,
			9792,
			9834,
			9901,
			9902,
			9906
		]
	}],
	["monospace", {
		normal: [[120432, 120483], [120822, 120831]],
		monospace: [
			1008,
			1009,
			[1012, 1014],
			[123, 126],
			160,
			163,
			165,
			167,
			168,
			172,
			[175, 177],
			[180, 183],
			215,
			240,
			247,
			305,
			[32, 47],
			567,
			[58, 64],
			710,
			711,
			[728, 730],
			732,
			[768, 776],
			778,
			780,
			[8208, 8212],
			8214,
			8216,
			8217,
			8220,
			8221,
			8224,
			8225,
			8230,
			8260,
			8364,
			8486,
			8487,
			[8592, 8595],
			8722,
			8734,
			91,
			[913, 919],
			92,
			[920, 929],
			93,
			[931, 937],
			94,
			[945, 949],
			95,
			[950, 959],
			96,
			[960, 969],
			977,
			978,
			981,
			982
		]
	}],
	["monospace-l", { monospace: [
		11377,
		[192, 214],
		[216, 239],
		[241, 246],
		[248, 304],
		[306, 566],
		[568, 591],
		[7680, 7699],
		[7704, 7707],
		[7710, 7719],
		[7722, 7755],
		[7764, 7779],
		[7784, 7799],
		[7804, 7833],
		7835,
		7838,
		[7840, 7929]
	] }],
	["monospace-ex", { monospace: [
		10013,
		1010,
		1011,
		[1015, 1021],
		10214,
		10215,
		[1022, 1143],
		[1146, 1158],
		[1160, 1180],
		11800,
		[1181, 1230],
		[1232, 1273],
		[1276, 1279],
		1298,
		1299,
		[1306, 1309],
		161,
		162,
		164,
		166,
		[169, 171],
		173,
		174,
		184,
		[186, 191],
		3647,
		[592, 599],
		[59908, 59910],
		59913,
		59915,
		59917,
		59920,
		59927,
		59930,
		59932,
		59934,
		59935,
		59942,
		59946,
		59948,
		59951,
		59957,
		59962,
		59966,
		59970,
		59973,
		600,
		601,
		60163,
		60164,
		60168,
		[60175, 60178],
		60182,
		60185,
		60190,
		60191,
		602,
		60201,
		60203,
		60209,
		60213,
		60214,
		60218,
		60219,
		60224,
		60232,
		60233,
		60237,
		60259,
		60261,
		60270,
		60271,
		603,
		604,
		[60424, 60430],
		60432,
		60433,
		[605, 616],
		61699,
		617,
		61700,
		61705,
		[61719, 61726],
		[61729, 61731],
		[61734, 61741],
		61743,
		[61747, 61752],
		61757,
		[61761, 61766],
		[61771, 61788],
		[61791, 61797],
		618,
		61800,
		[61804, 61810],
		61813,
		[61817, 61819],
		[61822, 61824],
		61826,
		61828,
		61829,
		[61832, 61839],
		61842,
		61850,
		61854,
		61855,
		61857,
		61859,
		61860,
		[61863, 61877],
		619,
		620,
		62082,
		62083,
		621,
		62110,
		62113,
		62116,
		[62119, 62121],
		62124,
		62126,
		62127,
		[622, 625],
		[62560, 62568],
		[62570, 62578],
		[626, 631],
		63166,
		[63187, 63190],
		63198,
		[632, 642],
		[64256, 64262],
		[643, 651],
		65126,
		[652, 709],
		712,
		716,
		[718, 727],
		731,
		[733, 742],
		7424,
		743,
		7431,
		7434,
		7435,
		7437,
		744,
		7448,
		7449,
		745,
		7452,
		[746, 749],
		[7491, 7499],
		750,
		7501,
		[7503, 7507],
		751,
		[7510, 7512],
		7514,
		7515,
		7517,
		7518,
		752,
		7520,
		7521,
		753,
		754,
		7544,
		755,
		756,
		7568,
		7569,
		757,
		7570,
		7571,
		7575,
		[758, 762],
		7620,
		7621,
		7624,
		7625,
		[763, 766],
		777,
		779,
		[781, 793],
		[7936, 7939],
		794,
		[7940, 7949],
		795,
		[7950, 7957],
		796,
		[7960, 7965],
		7968,
		7969,
		797,
		[7970, 7979],
		798,
		[7980, 7989],
		799,
		[7990, 7999],
		800,
		[8e3, 8005],
		8008,
		8009,
		801,
		[8010, 8013],
		[8016, 8019],
		802,
		[8020, 8023],
		8025,
		8027,
		8029,
		803,
		[8031, 8039],
		804,
		[8040, 8049],
		805,
		[8050, 8059],
		806,
		8060,
		8061,
		[8064, 8069],
		807,
		[8070, 8079],
		808,
		[8080, 8089],
		809,
		[8090, 8099],
		810,
		[8100, 8109],
		811,
		[8110, 8116],
		8118,
		8119,
		812,
		[8120, 8129],
		813,
		[8130, 8132],
		[8134, 8139],
		814,
		[8140, 8147],
		815,
		[8150, 8155],
		[8157, 8159],
		816,
		[8160, 8169],
		817,
		[8170, 8175],
		8178,
		8179,
		818,
		8180,
		[8182, 8189],
		819,
		8190,
		820,
		821,
		8218,
		8219,
		822,
		8222,
		8223,
		8226,
		823,
		8233,
		8240,
		8241,
		8249,
		825,
		8250,
		8251,
		8253,
		8255,
		8256,
		826,
		8261,
		8262,
		827,
		8274,
		8276,
		[828, 831],
		8319,
		832,
		8320,
		[833, 835],
		8353,
		8358,
		836,
		8361,
		8363,
		8369,
		837,
		8370,
		[838, 845],
		8451,
		846,
		847,
		8470,
		8471,
		8478,
		848,
		8480,
		8482,
		849,
		8494,
		[850, 859],
		[8592, 8595],
		[860, 873],
		8730,
		8738,
		[874, 887],
		[890, 895],
		8960,
		900,
		9001,
		9002,
		[901, 906],
		908,
		[910, 912],
		9250,
		9251,
		[938, 944],
		9472,
		9474,
		9484,
		9488,
		9492,
		9496,
		9500,
		9508,
		9516,
		9524,
		9532,
		[9552, 9579],
		970,
		9702,
		[971, 976],
		9773,
		979,
		9792,
		980,
		983,
		9834,
		[984, 990],
		9901,
		9902,
		9906,
		[991, 995]
	] }],
	["calligraphic", {
		"-tex-calligraphic": [[65, 90]],
		"-tex-bold-calligraphic": [[65, 90]]
	}],
	["math", { normal: [
		[10176, 10199],
		[10202, 10204],
		[10207, 10213],
		[10625, 10646],
		[10649, 10740],
		10742,
		[10746, 10751],
		10762,
		10763,
		[10781, 10798],
		[10800, 10814],
		[10816, 10876],
		[10879, 10884],
		[10893, 10900],
		[10903, 10926],
		[10939, 10948],
		[10951, 10954],
		[10957, 10973],
		[10988, 10993],
		[10998, 11003],
		[11005, 11007],
		8714,
		8717,
		8731,
		8732,
		8762,
		8763,
		8782,
		8783,
		[8785, 8787],
		[8790, 8796],
		8798,
		8844,
		[8886, 8889],
		[8891, 8895],
		8903,
		[8912, 8929],
		[8932, 8937],
		[8946, 8959]
	] }],
	[
		"symbols",
		{ normal: [
			11159,
			11193,
			11209,
			[11216, 11241],
			[11248, 11263],
			11800,
			12306,
			12310,
			12311,
			12336,
			127,
			161,
			162,
			164,
			166,
			[169, 171],
			173,
			174,
			178,
			179,
			[185, 191],
			3647,
			[64256, 64262],
			65126,
			65279,
			8215,
			8218,
			8219,
			8222,
			8223,
			[8226, 8229],
			8233,
			8240,
			8241,
			[8248, 8259],
			[8261, 8278],
			[8280, 8286],
			8319,
			8320,
			8353,
			8358,
			[8361, 8363],
			8369,
			8370,
			8448,
			8449,
			[8451, 8454],
			8456,
			8457,
			8468,
			8470,
			8471,
			[8478, 8483],
			8485,
			8489,
			8494,
			[8505, 8507],
			[8522, 8527],
			[8960, 8966],
			[8977, 8984],
			8986,
			8987,
			[8996, 9e3],
			[9003, 9114],
			9142,
			[9146, 9165],
			9167,
			[9169, 9179],
			[9186, 9203],
			[9208, 9215],
			9250,
			9251
		] },
		[8215]
	],
	["symbols-b-i", {
		bold: [
			11800,
			161,
			162,
			164,
			166,
			[169, 171],
			173,
			174,
			[186, 191],
			3647,
			[64256, 64262],
			65126,
			8218,
			8219,
			8222,
			8223,
			8226,
			8233,
			8240,
			8241,
			[8249, 8251],
			8253,
			8255,
			8256,
			8261,
			8262,
			8274,
			8276,
			8319,
			8320,
			8353,
			8358,
			[8361, 8363],
			8369,
			8370,
			8451,
			8470,
			8471,
			8478,
			8480,
			8482,
			8494,
			8960,
			9250,
			9251
		],
		italic: [
			11800,
			[161, 167],
			[169, 174],
			177,
			[181, 183],
			[186, 191],
			215,
			240,
			247,
			3647,
			[64256, 64262],
			65126,
			8218,
			8219,
			[8222, 8226],
			8233,
			8240,
			8241,
			[8249, 8251],
			8253,
			8255,
			8256,
			8261,
			8262,
			8274,
			8276,
			8320,
			8353,
			8358,
			8361,
			8363,
			8369,
			8370,
			8451,
			8470,
			8471,
			8478,
			8480,
			8482,
			8494,
			8960,
			9250,
			9251
		],
		"bold-italic": [
			11800,
			[161, 167],
			[169, 174],
			177,
			[181, 183],
			[186, 191],
			215,
			240,
			247,
			3647,
			[64256, 64262],
			65126,
			8218,
			8219,
			[8222, 8226],
			8233,
			8240,
			8241,
			[8249, 8251],
			8253,
			8255,
			8256,
			8261,
			8262,
			8274,
			8276,
			8320,
			8353,
			8358,
			[8361, 8363],
			8369,
			8370,
			8451,
			8470,
			8471,
			8478,
			8480,
			8482,
			8494,
			8960,
			9250,
			9251
		]
	}],
	["greek", {
		normal: [
			[1e3, 1007],
			1010,
			1011,
			[1015, 1023],
			[11392, 11507],
			[11513, 11519],
			[7936, 7957],
			[7960, 7965],
			[7968, 8005],
			[8008, 8013],
			[8016, 8023],
			8025,
			8027,
			8029,
			[8031, 8061],
			[8064, 8116],
			[8118, 8132],
			[8134, 8147],
			[8150, 8155],
			[8157, 8175],
			[8178, 8180],
			[8182, 8190],
			[880, 887],
			[890, 895],
			[900, 906],
			908,
			[910, 912],
			[938, 944],
			[970, 976],
			979,
			980,
			[983, 999]
		],
		bold: [
			[1e3, 1007],
			1010,
			1011,
			[1015, 1023],
			[11392, 11507],
			[11513, 11519],
			[7936, 7957],
			[7960, 7965],
			[7968, 8005],
			[8008, 8013],
			[8016, 8023],
			8025,
			8027,
			8029,
			[8031, 8061],
			[8064, 8116],
			[8118, 8132],
			[8134, 8147],
			[8150, 8155],
			[8157, 8175],
			[8178, 8180],
			[8182, 8190],
			[880, 887],
			[890, 895],
			[900, 906],
			908,
			[910, 912],
			[938, 944],
			[970, 976],
			979,
			980,
			[983, 987],
			[990, 999]
		],
		italic: [
			[1e3, 1007],
			1010,
			1011,
			[1015, 1023],
			[11392, 11507],
			[11513, 11519],
			[7936, 7957],
			[7960, 7965],
			[7968, 8005],
			[8008, 8013],
			[8016, 8023],
			8025,
			8027,
			8029,
			[8031, 8061],
			[8064, 8116],
			[8118, 8132],
			[8134, 8147],
			[8150, 8155],
			[8157, 8175],
			[8178, 8180],
			[8182, 8190],
			[880, 887],
			[890, 895],
			[900, 906],
			908,
			[910, 912],
			[938, 944],
			[970, 976],
			979,
			980,
			[983, 999]
		],
		"bold-italic": [
			[1e3, 1007],
			1010,
			1011,
			[1015, 1023],
			[11392, 11507],
			[11513, 11519],
			[7936, 7957],
			[7960, 7965],
			[7968, 8005],
			[8008, 8013],
			[8016, 8023],
			8025,
			8027,
			8029,
			[8031, 8061],
			[8064, 8116],
			[8118, 8132],
			[8134, 8147],
			[8150, 8155],
			[8157, 8175],
			[8178, 8180],
			[8182, 8190],
			[880, 887],
			[890, 895],
			[900, 906],
			908,
			[910, 912],
			[938, 944],
			[970, 976],
			979,
			980,
			[983, 999]
		]
	}],
	["greek-ss", {
		"sans-serif": [
			[1e3, 1007],
			1010,
			1011,
			[1015, 1023],
			[7936, 7957],
			[7960, 7965],
			[7968, 8005],
			[8008, 8013],
			[8016, 8023],
			8025,
			8027,
			8029,
			[8031, 8061],
			[8064, 8116],
			[8118, 8132],
			[8134, 8147],
			[8150, 8155],
			[8157, 8175],
			[8178, 8180],
			[8182, 8190],
			[880, 887],
			[890, 895],
			[900, 906],
			908,
			[910, 912],
			[938, 944],
			[970, 976],
			979,
			980,
			[983, 999]
		],
		"bold-sans-serif": [
			[1e3, 1007],
			1010,
			1011,
			[1015, 1023],
			[7936, 7957],
			[7960, 7965],
			[7968, 8005],
			[8008, 8013],
			[8016, 8023],
			8025,
			8027,
			8029,
			[8031, 8061],
			[8064, 8116],
			[8118, 8121],
			[8123, 8132],
			[8134, 8147],
			[8150, 8155],
			[8157, 8175],
			[8178, 8180],
			[8182, 8190],
			[880, 887],
			[890, 895],
			[900, 906],
			908,
			[910, 912],
			[938, 944],
			[970, 976],
			979,
			980,
			[983, 999]
		],
		"sans-serif-italic": [
			[1e3, 1007],
			1010,
			1011,
			[1015, 1023],
			[7936, 7957],
			[7960, 7965],
			[7968, 8005],
			[8008, 8013],
			[8016, 8023],
			8025,
			8027,
			8029,
			[8031, 8061],
			[8064, 8116],
			[8118, 8132],
			[8134, 8147],
			[8150, 8155],
			[8157, 8175],
			[8178, 8180],
			[8182, 8190],
			[880, 887],
			[890, 895],
			[900, 906],
			908,
			[910, 912],
			[938, 944],
			[970, 976],
			979,
			980,
			[983, 999]
		],
		"sans-serif-bold-italic": [
			[1e3, 1007],
			1010,
			1011,
			[1015, 1023],
			[7936, 7957],
			[7960, 7965],
			[7968, 8005],
			[8008, 8013],
			[8016, 8023],
			8025,
			8027,
			8029,
			[8031, 8061],
			[8064, 8116],
			[8118, 8121],
			[8123, 8132],
			[8134, 8147],
			[8150, 8155],
			[8157, 8175],
			[8178, 8180],
			[8182, 8190],
			[880, 887],
			[890, 895],
			[900, 906],
			908,
			[910, 912],
			[938, 944],
			[970, 976],
			979,
			980,
			[983, 999]
		]
	}],
	["cyrillic", {
		normal: [
			[1024, 1143],
			[1146, 1158],
			[1160, 1230],
			[1232, 1273],
			[1276, 1279],
			1298,
			1299,
			[1306, 1309]
		],
		bold: [
			[1024, 1143],
			[1146, 1158],
			[1160, 1230],
			[1232, 1273],
			[1276, 1279],
			1298,
			1299,
			[1306, 1309]
		],
		italic: [
			[1024, 1143],
			[1146, 1158],
			[1160, 1225],
			[1227, 1230],
			[1232, 1273],
			[1276, 1279],
			1298,
			1299,
			[1306, 1309]
		],
		"bold-italic": [
			[1024, 1143],
			[1146, 1158],
			[1160, 1225],
			[1227, 1230],
			[1232, 1273],
			[1276, 1279],
			1298,
			1299,
			[1306, 1309]
		]
	}],
	["cyrillic-ss", {
		"sans-serif": [
			[1024, 1143],
			[1146, 1158],
			[1160, 1230],
			[1232, 1273],
			[1276, 1279],
			1298,
			1299,
			[1306, 1309]
		],
		"bold-sans-serif": [
			[1024, 1143],
			[1146, 1158],
			[1160, 1230],
			[1232, 1273],
			[1276, 1279],
			1298,
			1299,
			[1306, 1309]
		],
		"sans-serif-italic": [
			[1024, 1143],
			[1146, 1158],
			[1160, 1230],
			[1232, 1273],
			[1276, 1279],
			1298,
			1299,
			[1306, 1309]
		],
		"sans-serif-bold-italic": [
			[1024, 1143],
			[1146, 1158],
			[1160, 1230],
			[1232, 1273],
			[1276, 1279],
			1298,
			1299,
			[1306, 1309]
		]
	}],
	["phonetics", {
		normal: [
			[592, 687],
			7424,
			7431,
			7434,
			7435,
			7437,
			7448,
			7449,
			7452,
			[7491, 7499],
			7501,
			[7503, 7507],
			[7510, 7512],
			7514,
			7515,
			7517,
			7518,
			7520,
			7521,
			7544,
			[7568, 7571],
			7575
		],
		bold: [
			[592, 687],
			7424,
			7431,
			7434,
			7435,
			7437,
			7448,
			7449,
			7452,
			[7491, 7499],
			7501,
			[7503, 7507],
			[7510, 7512],
			7514,
			7515,
			7517,
			7518,
			7520,
			7521,
			7544,
			[7568, 7571],
			7575
		],
		italic: [[592, 685], 687],
		"bold-italic": [[592, 687]]
	}],
	["phonetics-ss", {
		"sans-serif": [
			[592, 687],
			7424,
			7431,
			7434,
			7435,
			7437,
			7448,
			7449,
			7452,
			[7491, 7499],
			7501,
			[7503, 7507],
			[7510, 7512],
			7514,
			7515,
			7517,
			7518,
			7520,
			7521,
			7544,
			[7568, 7571],
			7575
		],
		"bold-sans-serif": [
			[592, 687],
			7424,
			7431,
			7434,
			7435,
			7437,
			7448,
			7449,
			7452,
			[7491, 7499],
			7501,
			[7503, 7507],
			[7510, 7512],
			7514,
			7515,
			7517,
			7518,
			7520,
			7521,
			7544,
			[7568, 7571],
			7575
		],
		"sans-serif-italic": [
			[592, 687],
			7424,
			7431,
			7434,
			7435,
			7437,
			7448,
			7449,
			7452,
			[7491, 7499],
			7501,
			[7503, 7507],
			[7510, 7512],
			7514,
			7515,
			7517,
			7518,
			7520,
			7521,
			7544,
			[7568, 7571],
			7575
		],
		"sans-serif-bold-italic": [
			[592, 687],
			7424,
			7431,
			7434,
			7435,
			7437,
			7448,
			7449,
			7452,
			[7491, 7499],
			7501,
			[7503, 7507],
			[7510, 7512],
			7514,
			7515,
			7517,
			7518,
			7520,
			7521,
			7544,
			[7568, 7571],
			7575
		]
	}],
	["hebrew", {
		normal: [
			[1425, 1479],
			[1488, 1514],
			[1519, 1525],
			1527,
			[64285, 64335]
		],
		bold: [
			[1425, 1479],
			[1488, 1515],
			[1519, 1525],
			1527,
			[64285, 64335]
		],
		italic: [
			[1425, 1479],
			[1488, 1514],
			[1519, 1525],
			1527,
			[64285, 64335]
		],
		"bold-italic": [
			[1425, 1479],
			[1488, 1515],
			[1519, 1525],
			1527,
			[64285, 64335]
		]
	}],
	["devanagari", {
		normal: [[2304, 2431]],
		bold: [],
		italic: [],
		"bold-italic": []
	}],
	["cherokee", {
		normal: [[5024, 5109], [5112, 5117]],
		bold: [[5024, 5109], [5112, 5117]],
		italic: [[5024, 5115]],
		"bold-italic": [[5024, 5115]]
	}],
	["arabic", {
		normal: [
			[126464, 126498],
			126500,
			126503,
			[126505, 126514],
			[126516, 126519],
			126521,
			126523,
			126530,
			126535,
			126537,
			126539,
			[126541, 126543],
			126545,
			126546,
			126548,
			126551,
			126553,
			126555,
			126557,
			126559,
			126561,
			126562,
			126564,
			[126567, 126570],
			[126572, 126578],
			[126580, 126583],
			[126585, 126588],
			[126590, 126601],
			[126603, 126619],
			[126625, 126627],
			[126629, 126633],
			[126635, 126651],
			126704,
			126705
		],
		bold: [],
		italic: [],
		"bold-italic": []
	}],
	["braille-d", { normal: [[10240, 10495]] }],
	["braille", { "sans-serif": [[10240, 10495]] }],
	[
		"arrows",
		{
			normal: [
				10145,
				[10224, 10228],
				10239,
				[10496, 10505],
				[10508, 10569],
				10572,
				10573,
				10575,
				10577,
				10580,
				10581,
				10584,
				10585,
				10588,
				10589,
				[10592, 10601],
				[10608, 10619],
				[11008, 11026],
				[11056, 11087],
				[11098, 11123],
				[11126, 11157],
				[11160, 11192],
				[11244, 11247],
				8604,
				8605,
				8607,
				8609,
				8613,
				8615,
				8616,
				8621,
				[8623, 8629],
				8632,
				8633,
				[8662, 8665],
				[8668, 8671],
				[8678, 8692],
				[8695, 8703],
				9166
			],
			"-largeop": [
				[11012, 11015],
				11020,
				11021,
				11057,
				8593,
				8595,
				[8597, 8603],
				[8606, 8611],
				8613,
				8615,
				[8617, 8622],
				[8624, 8627],
				8630,
				8631,
				[8636, 8655],
				8657,
				8659,
				[8661, 8667],
				[8678, 8681],
				8691,
				8693,
				8694
			],
			"-lf-tp": [
				10503,
				11013,
				11014,
				[8678, 8681]
			],
			"-rt-bt": [
				10502,
				11015,
				11020,
				[8678, 8681]
			],
			"-ex-md": [
				11013,
				11014,
				8678,
				8679
			]
		},
		[
			8607,
			8609,
			8613,
			8615,
			8621,
			8622,
			[8624, 8627],
			[8662, 8665],
			8668,
			8669,
			[8678, 8681],
			8691,
			10145,
			10237,
			10238,
			10502,
			10503,
			10572,
			10573,
			10575,
			10577,
			10588,
			10589,
			10592,
			10593,
			[11012, 11015],
			11020,
			11021,
			11057
		]
	],
	["marrows", { normal: [
		[129024, 129035],
		[129040, 129095],
		[129104, 129113],
		[129120, 129159],
		[129168, 129197],
		129200,
		129201
	] }],
	[
		"accents",
		{
			normal: [
				184,
				[688, 709],
				712,
				716,
				[718, 727],
				731,
				[733, 762],
				7620,
				7621,
				7624,
				7625,
				[763, 766],
				777,
				779,
				[781, 823],
				[825, 840],
				[8403, 8405],
				8408,
				841,
				[8413, 8415],
				842,
				[8420, 8427],
				843,
				8432,
				[844, 879]
			],
			"-smallop": [
				785,
				[812, 816],
				818,
				819,
				831,
				845
			],
			"-largeop": [785, [812, 816]],
			"-size3": [785, [812, 816]],
			"-size4": [785, [812, 816]],
			"-size5": [785, [812, 816]],
			"-size6": [785, [812, 816]],
			"-size7": [785, [812, 816]],
			"-ex-md": [
				818,
				819,
				831,
				845
			]
		},
		[
			785,
			[812, 816],
			818,
			819,
			831,
			845,
			8425
		]
	],
	["accents-b-i", {
		bold: [
			184,
			[688, 709],
			712,
			716,
			[718, 727],
			731,
			[733, 762],
			7620,
			7621,
			7624,
			7625,
			[763, 766],
			777,
			779,
			[781, 823],
			[825, 846],
			[848, 879]
		],
		italic: [
			184,
			[688, 700],
			[702, 709],
			712,
			716,
			[718, 727],
			731,
			[733, 766],
			777,
			779,
			[781, 823],
			[825, 846],
			[848, 879]
		],
		"bold-italic": [
			184,
			[688, 709],
			712,
			716,
			[718, 727],
			731,
			[733, 766],
			777,
			779,
			[781, 823],
			[825, 846],
			[848, 879]
		]
	}],
	["shapes", {
		normal: [
			10003,
			10013,
			10016,
			10026,
			10038,
			10045,
			10098,
			10099,
			10139,
			10145,
			[11026, 11055],
			[11088, 11097],
			[11194, 11208],
			[11210, 11215],
			11242,
			11243,
			8962,
			[8998, 9e3],
			9003,
			[9211, 9214],
			[9472, 9631],
			[9634, 9641],
			[9644, 9649],
			9672,
			9673,
			[9676, 9678],
			[9680, 9701],
			[9703, 9710],
			[9712, 9719],
			9728,
			9733,
			9734,
			9737,
			9761,
			9773,
			[9785, 9790],
			9792,
			9794,
			[9824, 9831],
			[9833, 9835],
			[9837, 9839],
			9854,
			[9856, 9865],
			9893,
			[9898, 9902],
			9906
		],
		bold: [
			10013,
			9474,
			9553,
			9773,
			9792,
			9834,
			9901,
			9902,
			9906
		],
		italic: [
			10013,
			9773,
			9834,
			9901,
			9902
		],
		"bold-italic": [
			10013,
			9773,
			9834,
			9901,
			9902
		]
	}],
	["mshapes", { normal: [[128896, 128984], [128992, 129003]] }],
	["variants", { "-tex-variant": [
		126,
		170,
		176,
		178,
		179,
		185,
		186,
		34,
		39,
		42,
		8212,
		8289,
		8304,
		8305,
		[8308, 8334],
		96
	] }],
	["PUA", {
		normal: [
			[57344, 57395],
			[57409, 57458],
			[59264, 59274],
			59395,
			[59908, 59910],
			59913,
			59915,
			59917,
			59920,
			59927,
			59930,
			59932,
			59934,
			59935,
			59942,
			59946,
			59948,
			59951,
			59957,
			59962,
			59966,
			59970,
			59973,
			60163,
			60164,
			60168,
			[60175, 60178],
			60182,
			60185,
			60190,
			60191,
			60200,
			60201,
			60203,
			60209,
			60213,
			60214,
			60218,
			60219,
			60224,
			60232,
			60233,
			60237,
			60257,
			60259,
			60261,
			60270,
			60271,
			[60424, 60430],
			60432,
			60433,
			61699,
			61700,
			61705,
			[61719, 61726],
			[61729, 61731],
			[61734, 61741],
			61743,
			[61747, 61752],
			61757,
			[61761, 61766],
			[61771, 61788],
			[61791, 61797],
			61800,
			[61804, 61810],
			61813,
			[61817, 61819],
			[61822, 61824],
			61826,
			61828,
			61829,
			[61832, 61839],
			61842,
			61850,
			61854,
			61855,
			61857,
			61859,
			61860,
			[61863, 61877],
			62082,
			62083,
			62110,
			62113,
			62116,
			[62119, 62121],
			62124,
			62126,
			62127,
			[62560, 62568],
			[62570, 62578],
			63166,
			[63187, 63190],
			63198
		],
		bold: [
			59395,
			[59908, 59910],
			59913,
			59915,
			59917,
			59920,
			59927,
			59930,
			59932,
			59934,
			59935,
			59942,
			59946,
			59948,
			59951,
			59957,
			59962,
			59966,
			59970,
			59973,
			60163,
			60164,
			60168,
			[60175, 60178],
			60182,
			60185,
			60190,
			60191,
			60200,
			60201,
			60203,
			60209,
			60213,
			60214,
			60218,
			60219,
			60224,
			60232,
			60233,
			60237,
			60257,
			60259,
			60261,
			60270,
			60271,
			[60424, 60430],
			60432,
			60433,
			61699,
			61700,
			61705,
			[61719, 61726],
			[61729, 61731],
			[61734, 61741],
			61743,
			[61747, 61752],
			61757,
			[61761, 61766],
			[61771, 61788],
			[61791, 61797],
			61800,
			[61804, 61810],
			61813,
			[61817, 61819],
			[61822, 61824],
			61826,
			61828,
			61829,
			[61832, 61839],
			61842,
			61850,
			61854,
			61855,
			61857,
			61859,
			61860,
			[61863, 61877],
			62082,
			62083,
			62110,
			62113,
			62116,
			[62119, 62121],
			62124,
			62126,
			62127,
			[62560, 62568],
			[62570, 62578],
			63166,
			[63187, 63190],
			63198
		],
		italic: [
			59395,
			[59908, 59910],
			59913,
			59915,
			59917,
			59920,
			59927,
			59930,
			59932,
			59934,
			59935,
			59942,
			59946,
			59948,
			59951,
			59957,
			59962,
			59966,
			59970,
			59973,
			60163,
			60164,
			60168,
			[60175, 60178],
			60182,
			60185,
			60190,
			60191,
			60200,
			60201,
			60203,
			60209,
			60213,
			60214,
			60218,
			60219,
			60224,
			60232,
			60233,
			60237,
			60257,
			60259,
			60261,
			60270,
			60271,
			[60424, 60430],
			60432,
			60433,
			61699,
			61700,
			61705,
			[61719, 61726],
			[61729, 61731],
			[61734, 61741],
			61743,
			[61747, 61752],
			61757,
			61867,
			61868,
			[61873, 61877],
			62082,
			62083,
			62110,
			62113,
			62116,
			62119,
			62120,
			[62560, 62568],
			[62570, 62578],
			63166,
			63172,
			[63174, 63176],
			[63187, 63190],
			63198
		],
		"bold-italic": [
			59395,
			[59908, 59910],
			59913,
			59915,
			59917,
			59920,
			59927,
			59930,
			59932,
			59934,
			59935,
			59942,
			59946,
			59948,
			59951,
			59957,
			59962,
			59966,
			59970,
			59973,
			60163,
			60164,
			60168,
			[60175, 60178],
			60182,
			60185,
			60190,
			60191,
			60200,
			60201,
			60203,
			60209,
			60213,
			60214,
			60218,
			60219,
			60224,
			60232,
			60233,
			60237,
			60257,
			60259,
			60261,
			60270,
			60271,
			[60424, 60430],
			60432,
			60433,
			61699,
			61700,
			61705,
			[61719, 61726],
			[61729, 61731],
			[61734, 61741],
			61743,
			[61747, 61752],
			61757,
			61867,
			61868,
			[61873, 61877],
			62082,
			62083,
			62110,
			62113,
			62116,
			62119,
			62120,
			[62560, 62568],
			[62570, 62578],
			63166,
			63172,
			[63174, 63176],
			[63187, 63190],
			63198
		]
	}]
]), Eo.variantCacheIds = {
	normal: "N",
	bold: "B",
	italic: "I",
	"bold-italic": "BI",
	"double-struck": "DS",
	fraktur: "F",
	"bold-fraktur": "FB",
	"sans-serif": "SS",
	"bold-sans-serif": "SSB",
	"sans-serif-italic": "SSI",
	"sans-serif-bold-italic": "SSBI",
	monospace: "M",
	"-smallop": "SO",
	"-largeop": "LO",
	"-size3": "S3",
	"-size4": "S4",
	"-size5": "S5",
	"-size6": "S6",
	"-size7": "S7",
	"-tex-mathit": "MI",
	"-tex-calligraphic": "C",
	"-tex-bold-calligraphic": "CB",
	"-tex-oldstyle": "OS",
	"-tex-bold-oldstyle": "OB",
	"-tex-variant": "V",
	"-lf-tp": "LT",
	"-rt-bt": "RB",
	"-ex-md": "EM",
	"-bbold": "B-a",
	"-upsmall": "U",
	"-uplarge": "U-a",
	script: "S",
	"bold-script": "SB"
};
//#endregion
//#region node_modules/.pnpm/@mathjax+mathjax-newcm-font@4.1.3/node_modules/@mathjax/mathjax-newcm-font/mjs/svg/default.js
var Do = {
	fontName: "mathjax-newcm",
	DefaultFont: Eo
};
Do.fontName;
var Oo = Do.DefaultFont, ko = "http://www.w3.org/2000/svg", Ao = "http://www.w3.org/1999/xlink", jo = class e extends Mr {
	get forceInlineBreaks() {
		return this.options.linebreaks.inline;
	}
	constructor(e = {}) {
		super(e, xo, Oo), this.minwidth = 0, this.shift = 0, this.svgStyles = null, this.fontCache = new So(this), this.options.matchFontHeight = !0;
	}
	initialize() {
		this.options.fontCache === "global" && this.fontCache.clearCache();
	}
	clearFontCache() {
		this.fontCache.clearCache();
	}
	reset() {
		this.clearFontCache();
	}
	escaped(e, t) {
		return this.setDocument(t), this.html("span", {}, [this.text(e.math)]);
	}
	styleSheet(t) {
		if (this.svgStyles) return this.svgStyles;
		let n = this.svgStyles = super.styleSheet(t);
		return this.adaptor.setAttribute(n, "id", e.STYLESHEETID), n;
	}
	insertStyles(e) {
		this.svgStyles && this.adaptor.insertRules(this.svgStyles, new Ar(e).getStyleRules());
	}
	pageElements(t) {
		return this.options.fontCache === "global" && !this.findCache(t) ? this.svg("svg", {
			xmlns: ko,
			id: e.FONTCACHEID,
			style: { display: "none" }
		}, [this.fontCache.getCache()]) : null;
	}
	findCache(t) {
		let n = this.adaptor, r = n.tags(n.body(t.document), "svg");
		for (let t = r.length - 1; t >= 0; t--) if (this.adaptor.getAttribute(r[t], "id") === e.FONTCACHEID) return !0;
		return !1;
	}
	getInitialScale() {
		return 1;
	}
	processMath(e, t) {
		let n = this.container;
		this.container = t;
		let [r, i] = this.createRoot(e);
		this.typesetSvg(e, r, i), e.node.getProperty("process-breaks") && this.handleInlineBreaks(e, r, i), this.container = n;
	}
	createRoot(e) {
		let { w: t, h: n, d: r, pwidth: i } = e.getOuterBBox(), [a, o] = this.createSVG(n, r, t);
		if (i) {
			let t = this.adaptor;
			t.setStyle(a, "min-width", t.getStyle(a, "width")), t.setAttribute(a, "width", i), t.setAttribute(a, "data-mjx-viewBox", t.getAttribute(a, "viewBox")), t.removeAttribute(a, "viewBox");
			let r = this.fixed(e.metrics.ex / (this.font.params.x_height * 1e3), 6);
			t.setAttribute(o, "transform", `scale(${r},-${r}) translate(0, ${this.fixed(-n * 1e3, 1)})`);
		}
		return [a, o];
	}
	createSVG(e, t, n) {
		let r = this.math.metrics.em / 1e3, i = Math.max(n, r), a = Math.max(e + t, r), o = this.svg("g", {
			stroke: "currentColor",
			fill: "currentColor",
			"stroke-width": 0,
			transform: "scale(1,-1)"
		}), s = this.adaptor, c = s.append(this.container, this.svg("svg", {
			xmlns: ko,
			width: this.ex(i),
			height: this.ex(a),
			role: "img",
			focusable: !1,
			style: { "vertical-align": this.ex(-t) },
			viewBox: [
				0,
				this.fixed(-e * 1e3, 1),
				this.fixed(i * 1e3, 1),
				this.fixed(a * 1e3, 1)
			].join(" ")
		}, [o]));
		return i === .001 && (s.setAttribute(c, "preserveAspectRatio", "xMidYMid slice"), n < 0 && s.setStyle(this.container, "margin-right", this.ex(n))), this.options.fontCache !== "none" && this.options.useXlink && s.setAttribute(c, "xmlns:xlink", Ao), [c, o];
	}
	typesetSvg(e, t, n) {
		let r = this.adaptor;
		if (this.minwidth = this.shift = 0, this.options.fontCache === "local" && (this.fontCache.clearCache(), this.fontCache.useLocalID(this.options.localID), r.insert(this.fontCache.getCache(), n)), e.toSVG([n]), this.fontCache.clearLocalID(), this.minwidth) r.setStyle(t, "minWidth", this.ex(this.minwidth)), r.setStyle(this.container, "minWidth", this.ex(this.minwidth));
		else if (this.shift) {
			let e = r.getAttribute(this.container, "justify") || "center";
			this.setIndent(t, e, this.shift);
		}
	}
	setIndent(e, t, n) {
		(t === "center" || t === "left") && this.adaptor.setStyle(e, "margin-left", this.ex(n)), (t === "center" || t === "right") && this.adaptor.setStyle(e, "margin-right", this.ex(-n));
	}
	handleInlineBreaks(e, t, n) {
		let r = e.childNodes[0].breakCount;
		if (!r) return;
		let i = this.adaptor, a = i.firstChild(n), o = i.childNodes(i.firstChild(a)), s = e.childNodes[0].lineBBox;
		i.remove(n);
		for (let n = 0; n <= r; n++) {
			let r = s[n] || e.childNodes[0].getLineBBox(n), { h: c, d: l, w: u } = r, [d, f] = e.childNodes[0].getBreakNode(r), { scale: p } = d.getBBox(), [m, h] = this.createSVG(c * p, l * p, u * p), g = i.append(h, i.clone(a, !1));
			for (let e of i.childNodes(o[n])) i.append(g, e);
			i.insert(m, t);
			let ee = !!(f && f.node.getProperty("forcebreak"));
			if (ee && f.node.attributes.get("linebreakstyle") === "after") {
				let e = d.parent.node.childIndex(d.node) + 1, t = d.parent.childNodes[e], n = t ? t.getLineBBox(0).originalL * p : 0;
				n && this.addInlineBreak(m, n, ee);
			} else if (ee || n) {
				let e = d && n ? d.getLineBBox(0).originalL * p : 0;
				(e || !ee) && this.addInlineBreak(m, e, ee || !!d.node.getProperty("forcebreak"));
			}
		}
		i.childNodes(t).length && i.append(i.firstChild(i.parent(t)), i.firstChild(t)), i.remove(t);
	}
	addInlineBreak(e, t, n) {
		let r = this.adaptor, i = R(t);
		n || r.insert(r.node("mjx-break", { prebreak: !0 }, [r.text(" ")]), e), r.insert(r.node("mjx-break", n ? zr[i] ? { size: zr[i] } : { style: `letter-spacing: ${R(t - 1)}` } : { newline: !0 }, [r.text(" ")]), e);
	}
	ex(e) {
		return e /= this.font.params.x_height, Math.abs(e) < .001 ? "0" : e.toFixed(3).replace(/\.?0+$/, "") + "ex";
	}
	svg(e, t = {}, n = []) {
		return this.html(e, t, n, ko);
	}
	unknownText(e, t) {
		let n = this.math.metrics, r = this.font.params.x_height / n.ex * n.em * 1e3, i = this.svg("text", {
			"data-variant": t,
			transform: "scale(1,-1)",
			"font-size": this.fixed(r, 1) + "px"
		}, [this.text(e)]), a = this.adaptor;
		if (t !== "-explicitFont") {
			let n = He(e);
			if (n.length !== 1 || n[0] < 119808 || n[0] > 120831) {
				let [e, n, r] = this.font.getCssFont(t);
				a.setAttribute(i, "font-family", e), n && a.setAttribute(i, "font-style", "italic"), r && a.setAttribute(i, "font-weight", "bold");
			}
		}
		return i;
	}
	measureTextNode(e) {
		let t = this.adaptor;
		e = t.clone(e), t.removeAttribute(e, "transform");
		let n = this.fixed(this.font.params.x_height * 1e3, 1), r = this.svg("svg", {
			position: "absolute",
			visibility: "hidden",
			width: "1ex",
			height: "1ex",
			top: 0,
			left: 0,
			viewBox: [
				0,
				0,
				n,
				n
			].join(" ")
		}, [e]);
		t.append(t.body(t.document), r);
		let i = t.nodeSize(e, 1e3, !0)[0];
		return t.remove(r), {
			w: i,
			h: .75,
			d: .2
		};
	}
};
jo.NAME = "SVG", jo.OPTIONS = Object.assign(Object.assign({}, Mr.OPTIONS), {
	blacker: 3,
	fontCache: "local",
	localID: null,
	useXlink: !0
}), jo.commonStyles = Object.assign(Object.assign({}, Mr.commonStyles), {
	"mjx-container[jax=\"SVG\"]": {
		direction: "ltr",
		"white-space": "nowrap"
	},
	"mjx-container[jax=\"SVG\"] > svg": {
		overflow: "visible",
		"min-height": "1px",
		"min-width": "1px"
	},
	"mjx-container[jax=\"SVG\"] > svg a": {
		fill: "blue",
		stroke: "blue"
	},
	[["rect[data-sre-highlighter-added]:has(+ .mjx-selected)", "rect[data-sre-highlighter-bbox].mjx-selected"].join(", ")]: {
		stroke: "black",
		"stroke-width": "80px"
	},
	"@media (prefers-color-scheme: dark)": { [["rect[data-sre-highlighter-added]:has(+ .mjx-selected)", "rect[data-sre-highlighter-bbox].mjx-selected"].join(", ")]: { stroke: "#C8C8C8" } }
}), jo.FONTCACHEID = "MJX-SVG-global-cache", jo.STYLESHEETID = "MJX-SVG-styles";
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/DOMAdaptor.js
var Mo = class {
	constructor(e = null) {
		this.canMeasureNodes = !0, this.document = e;
	}
	node(e, t = {}, n = [], r) {
		let i = this.create(e, r);
		this.setAttributes(i, t);
		for (let e of n) this.append(i, e);
		return i;
	}
	setProperty(e, t, n) {
		e[t] = n;
	}
	getProperty(e, t) {
		return e[t];
	}
	setAttributes(e, t) {
		if (t.style && typeof t.style != "string") for (let n of Object.keys(t.style)) this.setStyle(e, n.replace(/-([a-z])/g, (e, t) => t.toUpperCase()), t.style[n]);
		if (t.properties) for (let n of Object.keys(t.properties)) e[n] = t.properties[n];
		for (let n of Object.keys(t)) (n !== "style" || typeof t.style == "string") && n !== "properties" && this.setAttribute(e, n, t[n]);
	}
	replace(e, t) {
		return this.insert(e, t), this.remove(t), t;
	}
	childNode(e, t) {
		return this.childNodes(e)[t];
	}
	allClasses(e) {
		let t = this.getAttribute(e, "class");
		return t ? t.replace(/  +/g, " ").replace(/^ /, "").replace(/ $/, "").split(/ /) : [];
	}
	cssText(e) {
		return this.kind(e) === "style" ? this.textContent(e) : "";
	}
}, No = function(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}, Po = {
	badCSS: !0,
	badSizes: !0
};
function Fo(e, t = {}) {
	var n;
	return t = Pe(_({}, Po), t), n = class extends e {
		constructor(...e) {
			super(e[0]), this.canMeasureNodes = !1;
			let t = this.constructor;
			this.options = Pe(_({}, t.OPTIONS), e[1]);
		}
		fontSize(e) {
			return t.badCSS ? this.options.fontSize : super.fontSize(e);
		}
		fontFamily(e) {
			return t.badCSS ? this.options.fontFamily : super.fontFamily(e);
		}
		nodeSize(e, r = 1, i = null) {
			if (!t.badSizes) return super.nodeSize(e, r, i);
			let a = this.textContent(e), o = Array.from(a.replace(n.cjkPattern, "")).length;
			return [(Array.from(a).length - o) * this.options.cjkCharWidth + o * this.options.unknownCharWidth, this.options.unknownCharHeight];
		}
		nodeBBox(e) {
			return t.badSizes ? {
				left: 0,
				right: 0,
				top: 0,
				bottom: 0
			} : super.nodeBBox(e);
		}
		createWorker(e, t) {
			return No(this, void 0, void 0, function* () {
				let { Worker: n } = yield Ot("node:worker_threads");
				class r {
					constructor(e, t = {}) {
						this.worker = new n(e, t);
					}
					addEventListener(e, t) {
						this.worker.on(e, t);
					}
					postMessage(e) {
						this.worker.postMessage({ data: e });
					}
					terminate() {
						this.worker.terminate();
					}
				}
				let { path: i, maps: a } = t, o = new r(`${i}/${t.worker}`, {
					type: "module",
					workerData: { maps: a }
				});
				return o.addEventListener("message", e), o;
			});
		}
	}, n.OPTIONS = Object.assign(Object.assign({}, t.badCSS ? {
		fontSize: 16,
		fontFamily: "Times"
	} : {}), t.badSizes ? {
		cjkCharWidth: 1,
		unknownCharWidth: .6,
		unknownCharHeight: .8
	} : {}), n.cjkPattern = new RegExp([
		"[",
		"ᄀ-ᅟ",
		"〈〉",
		"⺀-〾",
		"぀-㉇",
		"㉐-䶿",
		"一-꓆",
		"ꥠ-ꥼ",
		"가-힣",
		"豈-﫿",
		"︐-︙",
		"︰-﹫",
		"！-｠￠-￦",
		"𛀀-𛀁",
		"🈀-🉑",
		"𠀀-𿿽",
		"]"
	].join(""), "gu"), n;
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/adaptors/lite/Element.js
var Io = class {
	constructor(e, t = {}, n = []) {
		this.kind = e, this.attributes = Object.assign({}, t), this.children = [...n];
		for (let e of this.children) e.parent = this;
		this.styles = null;
	}
}, Lo = class {
	get kind() {
		return "#document";
	}
	constructor(e = null) {
		this.defaultView = null, this.root = new Io("html", {}, [this.head = new Io("head"), this.body = new Io("body")]), this.type = "", this.defaultView = e;
	}
}, Ro = class {
	get kind() {
		return "#text";
	}
	constructor(e = "") {
		this.value = e;
	}
}, zo = class extends Ro {
	get kind() {
		return "#comment";
	}
}, Bo = class {
	constructor(e) {
		this.nodes = [], this.nodes = [...e];
	}
	append(e) {
		this.nodes.push(e);
	}
	[Symbol.iterator]() {
		let e = 0;
		return { next() {
			return e === this.nodes.length ? {
				value: null,
				done: !0
			} : {
				value: this.nodes[e++],
				done: !1
			};
		} };
	}
}, Vo = "[ \\n]+", Ho = "[ \\n]*", Uo = "[A-Za-z][^\0- \"'>/=-]*", Wo = "[^\0- \"'>/=-]+", Go = `(?:'[^']*'|"[^"]*"|${Vo})`, Ko = `(?:'([^']*)'|"([^"]*)"|(${Vo}))`, qo = `${Wo}(?:${Ho}=${Ho}${Go})?`, Jo = `(${Wo})(?:${Ho}=${Ho}${Ko})?`, Yo = `(<(?:${Uo}(?:${Vo}${qo})*${Ho}/?|/${Uo}|!--[^]*?--|![^]*?)(?:>|$))`, Xo = {
	tag: new RegExp(Yo, "u"),
	attr: new RegExp(qo, "u"),
	attrsplit: new RegExp(Jo, "u")
}, Zo = class {
	parseFromString(e, t = "text/html", n = null) {
		let r = n.createDocument(), i = n.body(r), a = e.replace(/<\?.*?\?>/g, "").split(Xo.tag);
		for (; a.length;) {
			let e = a.shift(), t = a.shift();
			e && this.addText(n, i, e), t && t.charAt(t.length - 1) === ">" && (t.charAt(1) === "!" ? this.addComment(n, i, t) : i = t.charAt(1) === "/" ? this.closeTag(n, i, t) : this.openTag(n, i, t, a));
		}
		return this.checkDocument(n, r), r;
	}
	addText(e, t, n) {
		return n = Mt(n), e.append(t, e.text(n));
	}
	addComment(e, t, n) {
		return e.append(t, new zo(n));
	}
	closeTag(e, t, n) {
		let r = n.slice(2, n.length - 1).toLowerCase();
		for (; e.parent(t) && e.kind(t) !== r;) t = e.parent(t);
		return e.parent(t);
	}
	openTag(e, t, n, r) {
		let i = this.constructor.PCDATA, a = this.constructor.SELF_CLOSING, o = n.match(/<(.*?)[\s\n>/]/)[1].toLowerCase(), s = e.node(o), c = n.replace(/^<.*?[\s\n>]/, "").split(Xo.attrsplit);
		return (c.pop().match(/>$/) || c.length < 5) && (this.addAttributes(e, s, c), e.append(t, s), !a[o] && !n.match(/\/>$/) && (i[o] ? this.handlePCDATA(e, s, o, r) : t = s)), t;
	}
	addAttributes(e, t, n) {
		for (; n.length;) {
			let [, r, i, a, o] = n.splice(0, 5), s = Mt(i || a || o || "");
			e.setAttribute(t, r, s);
		}
	}
	handlePCDATA(e, t, n, r) {
		let i = [], a = "</" + n + ">", o = "";
		for (; r.length && o !== a;) i.push(o), i.push(r.shift()), o = r.shift();
		e.append(t, e.text(i.join("")));
	}
	checkDocument(e, t) {
		let n = this.getOnlyChild(e, e.body(t));
		if (n) {
			for (let r of e.childNodes(e.body(t))) {
				if (r === n) break;
				r instanceof zo && r.value.match(/^<!DOCTYPE/) && (t.type = r.value);
			}
			switch (e.kind(n)) {
				case "html":
					for (let r of n.children) switch (e.kind(r)) {
						case "head":
							t.head = r;
							break;
						case "body": t.body = r;
					}
					t.root = n, e.remove(n), e.parent(t.body) !== n && e.append(n, t.body), e.parent(t.head) !== n && e.insert(t.head, t.body);
					break;
				case "head":
					t.head = e.replace(n, t.head);
					break;
				case "body": t.body = e.replace(n, t.body);
			}
		}
	}
	getOnlyChild(e, t) {
		let n = null;
		for (let r of e.childNodes(t)) if (r instanceof Io) {
			if (n) return null;
			n = r;
		}
		return n;
	}
	serialize(e, t, n = !1) {
		let r = this.constructor.SELF_CLOSING, i = e.kind(t), a = this.allAttributes(e, t, n).map((e) => e.name + "=\"" + this.protectAttribute(e.value, n) + "\"").join(" "), o = this.serializeInner(e, t, n);
		return `<${i}` + (a ? " " + a : "") + ((!n || o) && !r[i] ? `>${o}</${i}>` : n ? "/>" : ">");
	}
	serializeInner(e, t, n = !1) {
		let r = this.constructor.PCDATA;
		return Object.hasOwn(r, t.kind) ? e.childNodes(t).map((t) => e.value(t)).join("") : e.childNodes(t).map((t) => {
			let r = e.kind(t);
			return r === "#text" ? this.protectHTML(e.value(t)) : r === "#comment" ? t.value : this.serialize(e, t, n);
		}).join("");
	}
	allAttributes(e, t, n) {
		let r = e.allAttributes(t);
		if (!n) return r;
		let i = e.kind(t), a = this.constructor.XMLNS;
		if (!Object.hasOwn(a, i)) return r;
		for (let { name: e } of r) if (e === "xmlns") return r;
		return r.push({
			name: "xmlns",
			value: a[i]
		}), r;
	}
	protectAttribute(e, t) {
		return typeof e != "string" && (e = String(e)), e = e.replace(/&/g, "&amp;").replace(/"/g, "&quot;"), t && (e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;")), e;
	}
	protectHTML(e) {
		return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
	}
};
Zo.SELF_CLOSING = {
	area: !0,
	base: !0,
	br: !0,
	col: !0,
	command: !0,
	embed: !0,
	hr: !0,
	img: !0,
	input: !0,
	keygen: !0,
	link: !0,
	menuitem: !0,
	meta: !0,
	param: !0,
	source: !0,
	track: !0,
	wbr: !0
}, Zo.PCDATA = {
	option: !0,
	textarea: !0,
	fieldset: !0,
	title: !0,
	style: !0,
	script: !0
}, Zo.XMLNS = {
	svg: "http://www.w3.org/2000/svg",
	math: "http://www.w3.org/1998/Math/MathML",
	html: "http://www.w3.org/1999/xhtml"
};
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/adaptors/lite/Window.js
var Qo = class {
	constructor() {
		this.DOMParser = Zo, this.NodeList = Bo, this.HTMLCollection = Bo, this.HTMLElement = Io, this.DocumentFragment = Bo, this.Document = Lo, this.document = new Lo(this);
	}
}, $o = function(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}, es = class extends Mo {
	constructor() {
		super(), this.parser = new Zo(), this.window = new Qo();
	}
	parse(e, t) {
		return this.parser.parseFromString(e, t, this);
	}
	create(e, t = null) {
		return new Io(e);
	}
	text(e) {
		return new Ro(e);
	}
	comment(e) {
		return new zo(e);
	}
	createDocument() {
		return new Lo();
	}
	head(e = this.document) {
		return e.head;
	}
	body(e = this.document) {
		return e.body;
	}
	root(e = this.document) {
		return e.root;
	}
	doctype(e = this.document) {
		return e.type;
	}
	tags(e, t, n = null, r = null) {
		let i = [], a = [];
		if (n) return a;
		let o = e;
		for (; o;) {
			let e = o.kind;
			if (e !== "#text" && e !== "#comment") {
				if (o = o, e === t && (a.push(o), a.length === r)) return a;
				o.children.length && (i = o.children.concat(i));
			}
			o = i.shift();
		}
		return a;
	}
	elementById(e, t) {
		let n = [], r = e;
		for (; r;) {
			if (r.kind !== "#text" && r.kind !== "#comment") {
				if (r = r, r.attributes.id === t) return r;
				r.children.length && (n = r.children.concat(n));
			}
			r = n.shift();
		}
		return null;
	}
	elementsByClass(e, t, n = null) {
		let r = [], i = [], a = e;
		for (; a;) {
			if (a.kind !== "#text" && a.kind !== "#comment") {
				if (a = a, (a.attributes.class || "").trim().split(/ +/).includes(t) && (i.push(a), i.length === n)) return i;
				a.children.length && (r = a.children.concat(r));
			}
			a = r.shift();
		}
		return i;
	}
	elementsByAttribute(e, t, n, r = null) {
		let i = [], a = [], o = e;
		for (; o;) {
			if (o.kind !== "#text" && o.kind !== "#comment") {
				if (o = o, o.attributes[t] === n && (a.push(o), a.length === r)) return a;
				o.children.length && (i = o.children.concat(i));
			}
			o = i.shift();
		}
		return a;
	}
	getElements(e, t) {
		let n = [], r = this.body(t);
		for (let t of e) if (typeof t == "string") {
			if (t.charAt(0) === "#") {
				let e = this.elementById(r, t.slice(1));
				e && n.push(e);
			} else if (t.charAt(0) === ".") n = n.concat(this.elementsByClass(r, t.slice(1)));
			else if (t.match(/^[-a-z][-a-z0-9]*$/i)) n = n.concat(this.tags(r, t));
			else {
				let e = t.match(/^\[(.*?)="(.*?)"\]$/);
				e && (n = n.concat(this.elementsByAttribute(r, e[1], e[2])));
			}
		} else Array.isArray(t) ? n = n.concat(t) : t instanceof this.window.NodeList || t instanceof this.window.HTMLCollection ? n = n.concat(t.nodes) : n.push(t);
		return n;
	}
	getElement(e, t = this.document) {
		if (t instanceof Lo && (t = this.body(t)), e.charAt(0) === "#") return this.elementById(t, e.slice(1));
		if (e.charAt(0) === ".") return this.elementsByClass(t, e.slice(1), 1)[0];
		if (e.match(/^[-a-z][-a-z0-9]*$/i)) return this.tags(t, e, null, 1)[0];
		let n = e.match(/^\[(.*?)="(.*?)"\]$/);
		return n ? this.elementsByAttribute(t, n[1], n[2], 1)[0] : null;
	}
	contains(e, t) {
		for (; t && t !== e;) t = this.parent(t);
		return !!t;
	}
	parent(e) {
		return e.parent;
	}
	childIndex(e) {
		return e.parent ? e.parent.children.findIndex((t) => t === e) : -1;
	}
	append(e, t) {
		return t.parent && this.remove(t), e.children.push(t), t.parent = e, t;
	}
	insert(e, t) {
		if (e.parent && this.remove(e), t && t.parent) {
			let n = this.childIndex(t);
			t.parent.children.splice(n, 0, e), e.parent = t.parent;
		}
	}
	remove(e) {
		let t = this.childIndex(e);
		return t >= 0 && e.parent.children.splice(t, 1), e.parent = null, e;
	}
	replace(e, t) {
		let n = this.childIndex(t);
		return n >= 0 && (t.parent.children[n] = e, e.parent = t.parent, t.parent = null), t;
	}
	clone(e, t = !0) {
		let n = new Io(e.kind);
		return n.attributes = Object.assign({}, e.attributes), n.children = t ? e.children.map((e) => {
			if (e.kind === "#text") return new Ro(e.value);
			if (e.kind === "#comment") return new zo(e.value);
			{
				let t = this.clone(e);
				return t.parent = n, t;
			}
		}) : [], n;
	}
	split(e, t) {
		let n = new Ro(e.value.slice(t));
		return e.value = e.value.slice(0, t), e.parent.children.splice(this.childIndex(e) + 1, 0, n), n.parent = e.parent, n;
	}
	next(e) {
		let t = e.parent;
		if (!t) return null;
		let n = this.childIndex(e) + 1;
		return n >= 0 && n < t.children.length ? t.children[n] : null;
	}
	previous(e) {
		let t = e.parent;
		if (!t) return null;
		let n = this.childIndex(e) - 1;
		return n >= 0 ? t.children[n] : null;
	}
	firstChild(e) {
		return e.children[0];
	}
	lastChild(e) {
		return e.children[e.children.length - 1];
	}
	childNodes(e) {
		return [...e.children];
	}
	childNode(e, t) {
		return e.children[t];
	}
	kind(e) {
		return e.kind;
	}
	value(e) {
		return e.kind === "#text" ? e.value : e.kind === "#comment" ? e.value.replace(/^<!(--)?((?:.|\n)*)\1>$/, "$2") : "";
	}
	textContent(e) {
		return e.children.reduce((e, t) => e + (t.kind === "#text" ? t.value : t.kind === "#comment" ? "" : this.textContent(t)), "");
	}
	innerHTML(e) {
		return this.parser.serializeInner(this, e);
	}
	outerHTML(e) {
		return this.parser.serialize(this, e);
	}
	serializeXML(e) {
		return this.parser.serialize(this, e, !0);
	}
	setAttribute(e, t, n, r = null) {
		typeof n != "string" && (n = String(n)), r && (t = r.replace(/.*\//, "") + ":" + t.replace(/^.*:/, "")), e.attributes[t] = n, t === "style" && (e.styles = null);
	}
	getAttribute(e, t) {
		return e.attributes[t];
	}
	removeAttribute(e, t) {
		delete e.attributes[t];
	}
	hasAttribute(e, t) {
		return Object.hasOwn(e.attributes, t);
	}
	allAttributes(e) {
		let t = e.attributes, n = [];
		for (let e of Object.keys(t)) n.push({
			name: e,
			value: t[e]
		});
		return n;
	}
	addClass(e, t) {
		let n = e.attributes.class?.split(/ /) || [];
		n.includes(t) || (n.push(t), e.attributes.class = n.join(" "));
	}
	removeClass(e, t) {
		let n = e.attributes.class?.split(/ /) || [], r = n.indexOf(t);
		r >= 0 && (n.splice(r, 1), e.attributes.class = n.join(" "));
	}
	hasClass(e, t) {
		return (e.attributes.class || "").split(/ /).includes(t);
	}
	setStyle(e, t, n) {
		e.styles ||= new I(this.getAttribute(e, "style")), e.styles.set(t, n), e.attributes.style = e.styles.cssText;
	}
	getStyle(e, t) {
		if (!e.styles) {
			let t = this.getAttribute(e, "style");
			if (!t) return "";
			e.styles = new I(t);
		}
		return e.styles.get(t);
	}
	allStyles(e) {
		return this.getAttribute(e, "style");
	}
	insertRules(e, t) {
		e.children = [this.text(this.textContent(e) + "\n\n" + t.join("\n\n"))];
	}
	fontSize(e) {
		return 0;
	}
	fontFamily(e) {
		return "";
	}
	nodeSize(e, t = 1, n = null) {
		return [0, 0];
	}
	nodeBBox(e) {
		return {
			left: 0,
			right: 0,
			top: 0,
			bottom: 0
		};
	}
	createWorker() {
		return $o(this, void 0, void 0, function* () {
			return null;
		});
	}
}, ts = class extends Fo(es) {};
function ns(e = null) {
	return new ts(null, e);
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/util/LinkedList.js
var rs = Symbol(), is = class {
	constructor(e = null) {
		this.next = null, this.prev = null, this.data = e;
	}
}, as = class e {
	constructor(...e) {
		this.list = new is(rs), this.list.next = this.list.prev = this.list, this.push(...e);
	}
	isBefore(e, t) {
		return e < t;
	}
	push(...e) {
		for (let t of e) {
			let e = new is(t);
			e.next = this.list, e.prev = this.list.prev, this.list.prev = e, e.prev.next = e;
		}
		return this;
	}
	pop() {
		let e = this.list.prev;
		return e.data === rs ? null : (this.list.prev = e.prev, e.prev.next = this.list, e.next = e.prev = null, e.data);
	}
	unshift(...e) {
		for (let t of e.slice(0).reverse()) {
			let e = new is(t);
			e.next = this.list.next, e.prev = this.list, this.list.next = e, e.next.prev = e;
		}
		return this;
	}
	shift() {
		let e = this.list.next;
		return e.data === rs ? null : (this.list.next = e.next, e.next.prev = this.list, e.next = e.prev = null, e.data);
	}
	remove(...e) {
		let t = /* @__PURE__ */ new Map();
		for (let n of e) t.set(n, !0);
		let n = this.list.next;
		for (; n.data !== rs;) {
			let e = n.next;
			t.has(n.data) && (n.prev.next = n.next, n.next.prev = n.prev, n.next = n.prev = null), n = e;
		}
		return this;
	}
	clear() {
		return this.list.next.prev = this.list.prev.next = null, this.list.next = this.list.prev = this.list, this;
	}
	*[Symbol.iterator]() {
		let e = this.list.next;
		for (; e.data !== rs;) yield e.data, e = e.next;
	}
	*reversed() {
		let e = this.list.prev;
		for (; e.data !== rs;) yield e.data, e = e.prev;
	}
	insert(e, t = null) {
		t === null && (t = this.isBefore.bind(this));
		let n = new is(e), r = this.list.next;
		for (; r.data !== rs && t(r.data, n.data);) r = r.next;
		return n.prev = r.prev, n.next = r, r.prev.next = r.prev = n, this;
	}
	sort(t = null) {
		t === null && (t = this.isBefore.bind(this));
		let n = [];
		for (let t of this) n.push(new e(t));
		for (this.list.next = this.list.prev = this.list; n.length > 1;) {
			let e = n.shift(), r = n.shift();
			e.merge(r, t), n.push(e);
		}
		return n.length && (this.list = n[0].list), this;
	}
	merge(e, t = null) {
		t === null && (t = this.isBefore.bind(this));
		let n = this.list.next, r = e.list.next;
		for (; n.data !== rs && r.data !== rs;) t(r.data, n.data) ? ([r.prev.next, n.prev.next] = [n, r], [r.prev, n.prev] = [n.prev, r.prev], [this.list.prev.next, e.list.prev.next] = [e.list, this.list], [this.list.prev, e.list.prev] = [e.list.prev, this.list.prev], [n, r] = [r.next, n]) : n = n.next;
		return r.data !== rs && (this.list.prev.next = e.list.next, e.list.next.prev = this.list.prev, e.list.prev.next = this.list, this.list.prev = e.list.prev, e.list.next = e.list.prev = e.list), this;
	}
}, os = class extends as {
	isBefore(e, t) {
		return e.start.i < t.start.i || e.start.i === t.start.i && e.start.n < t.start.n;
	}
}, ss = class extends wt {
	create(e, t = {}, n = []) {
		return this.node[e](t, n);
	}
}, cs = class extends at {
	get kind() {
		return "mstyle";
	}
	get notParent() {
		return this.childNodes[0] && this.childNodes[0].childNodes.length === 1;
	}
	setInheritedAttributes(e = {}, t = !1, n = 0, r = !1) {
		this.attributes.setInherited("displaystyle", t), this.attributes.setInherited("scriptlevel", n), super.setInheritedAttributes(e, t, n, r);
	}
	setChildInheritedAttributes(e, t, n, r) {
		let i = this.attributes.getExplicit("scriptlevel");
		i != null && (i = i.toString(), i.match(/^\s*[-+]/) ? n += parseInt(i) : n = parseInt(i), r = !1);
		let a = this.attributes.getExplicit("displaystyle");
		a != null && (t = a === !0, r = !1);
		let o = this.attributes.getExplicit("data-cramped");
		o != null && (r = o), e = this.addInheritedAttributes(e, this.attributes.getAllAttributes()), this.childNodes[0].setInheritedAttributes(e, t, n, r);
	}
};
cs.defaults = Object.assign(Object.assign({}, at.defaults), {
	scriptlevel: y,
	displaystyle: y,
	scriptsizemultiplier: 1 / Math.sqrt(2),
	scriptminsize: ".4em",
	mathbackground: y,
	mathcolor: y,
	dir: y,
	infixlinebreakstyle: "before"
});
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/maligngroup.js
var ls = class extends at {
	get kind() {
		return "maligngroup";
	}
	get isSpacelike() {
		return !0;
	}
	setChildInheritedAttributes(e, t, n, r) {
		e = this.addInheritedAttributes(e, this.attributes.getAllAttributes()), super.setChildInheritedAttributes(e, t, n, r);
	}
};
ls.defaults = Object.assign(Object.assign({}, at.defaults), { groupalign: y });
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/malignmark.js
var us = class extends x {
	get kind() {
		return "malignmark";
	}
	get arity() {
		return 0;
	}
	get isSpacelike() {
		return !0;
	}
};
us.defaults = Object.assign(Object.assign({}, x.defaults), { edge: "left" });
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MmlNodes/mathchoice.js
var ds = class extends C {
	get kind() {
		return "MathChoice";
	}
	get arity() {
		return 4;
	}
	get notParent() {
		return !0;
	}
	setInheritedAttributes(e, t, n, r) {
		let i = t ? 0 : Math.max(0, Math.min(n, 2)) + 1, a = this.childNodes[i] || this.factory.create("mrow");
		this.parent.replaceChild(a, this), a.setInheritedAttributes(e, t, n, r);
	}
};
ds.defaults = Object.assign({}, C.defaults);
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MmlTree/MML.js
var fs = {
	[Hr.prototype.kind]: Hr,
	[Qr.prototype.kind]: Qr,
	[ii.prototype.kind]: ii,
	[E.prototype.kind]: E,
	[ui.prototype.kind]: ui,
	[hi.prototype.kind]: hi,
	[si.prototype.kind]: si,
	[qr.prototype.kind]: qr,
	[Jr.prototype.kind]: Jr,
	[Ci.prototype.kind]: Ci,
	[Ei.prototype.kind]: Ei,
	[ki.prototype.kind]: ki,
	[cs.prototype.kind]: cs,
	[fi.prototype.kind]: fi,
	[vi.prototype.kind]: vi,
	[bi.prototype.kind]: bi,
	[Mi.prototype.kind]: Mi,
	[Ua.prototype.kind]: Ua,
	[wa.prototype.kind]: wa,
	[Bi.prototype.kind]: Bi,
	[Vi.prototype.kind]: Vi,
	[zi.prototype.kind]: zi,
	[Yi.prototype.kind]: Yi,
	[Xi.prototype.kind]: Xi,
	[Ji.prototype.kind]: Ji,
	[na.prototype.kind]: na,
	[ra.prototype.kind]: ra,
	[ia.prototype.kind]: ia,
	[ua.prototype.kind]: ua,
	[ga.prototype.kind]: ga,
	[ha.prototype.kind]: ha,
	[ba.prototype.kind]: ba,
	[ls.prototype.kind]: ls,
	[us.prototype.kind]: us,
	[uo.prototype.kind]: uo,
	[no.prototype.kind]: no,
	[io.prototype.kind]: io,
	[ro.prototype.kind]: ro,
	[mo.prototype.kind]: mo,
	[ds.prototype.kind]: ds,
	[st.prototype.kind]: st,
	[ct.prototype.kind]: ct,
	[vo.prototype.kind]: vo
}, ps = class extends ss {
	get MML() {
		return this.node;
	}
};
ps.defaultNodes = fs;
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/util/BitField.js
var ms = class e {
	constructor() {
		this.bits = 0;
	}
	static allocate(...t) {
		for (let n of t) {
			if (this.has(n)) throw Error("Bit already allocated for " + n);
			if (this.next === e.MAXBIT) throw Error("Maximum number of bits already allocated");
			this.names.set(n, this.next), this.next <<= 1;
		}
	}
	static has(e) {
		return this.names.has(e);
	}
	set(e) {
		this.bits |= this.getBit(e);
	}
	clear(e) {
		this.bits &= ~this.getBit(e);
	}
	isSet(e) {
		return !!(this.bits & this.getBit(e));
	}
	reset() {
		this.bits = 0;
	}
	getBit(e) {
		let t = this.constructor.names.get(e);
		if (!t) throw Error("Unknown bit-field name: " + e);
		return t;
	}
};
ms.MAXBIT = 1 << 31, ms.next = 1, ms.names = /* @__PURE__ */ new Map();
function hs(...e) {
	let t = class extends ms {};
	return t.allocate(...e), t;
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/MathDocument.js
var gs = function(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}, _s = class extends _e {
	static create(e) {
		let t = new this();
		for (let n of Object.keys(e)) {
			let [r, i] = this.action(n, e[n]);
			i && t.add(r, i);
		}
		return t;
	}
	static action(e, t) {
		let n, r, i = !0, a = t[0];
		if (t.length === 1 || typeof t[1] == "boolean") t.length === 2 && (i = t[1]), [n, r] = this.methodActions(e);
		else if (typeof t[1] == "string") {
			if (typeof t[2] == "string") {
				t.length === 4 && (i = t[3]);
				let [e, a] = t.slice(1);
				[n, r] = this.methodActions(e, a);
			} else t.length === 3 && (i = t[2]), [n, r] = this.methodActions(t[1]);
		} else t.length === 4 && (i = t[3]), [n, r] = t.slice(1);
		return [{
			id: e,
			renderDoc: n,
			renderMath: r,
			convert: i
		}, a];
	}
	static methodActions(e, t = e) {
		return [(t) => (e && t[e](), !1), (e, n) => (t && e[t](n), !1)];
	}
	renderDoc(e, t = v.UNPROCESSED) {
		for (let n of this.items) if (n.priority >= t && n.item.renderDoc(e)) return;
	}
	renderMath(e, t, n = v.UNPROCESSED) {
		for (let r of this.items) if (r.priority >= n && r.item.renderMath(e, t)) return;
	}
	renderConvert(e, t, n = v.LAST) {
		for (let r of this.items) if (r.priority > n || r.item.convert && r.item.renderMath(e, t)) return;
	}
	findID(e) {
		for (let t of this.items) if (t.item.id === e) return t.item;
		return null;
	}
}, vs = {
	all: !1,
	processed: !1,
	inputJax: null,
	outputJax: null
}, ys = {
	all: !0,
	processed: !0,
	inputJax: [],
	outputJax: []
}, bs = class extends Re {
	compile(e) {
		return null;
	}
}, xs = class extends br {
	typeset(e, t = null) {
		return null;
	}
	escaped(e, t) {
		return null;
	}
}, Ss = class extends os {}, Cs = class extends Je {}, ws = class e {
	constructor(t, n, r) {
		let i = this.constructor;
		this.document = t, this.options = Pe(_({}, i.OPTIONS), r), this.math = new (this.options.MathList || Ss)(), this.renderActions = _s.create(this.options.renderActions), this._actionPromises = [], this._readyPromise = Promise.resolve(), this.processed = new e.ProcessBits(), this.outputJax = this.options.OutputJax || new xs();
		let a = this.options.InputJax || [new bs()];
		Array.isArray(a) || (a = [a]), this.inputJax = a, this.adaptor = n, this.outputJax.setAdaptor(n), this.inputJax.map((e) => e.setAdaptor(n)), this.mmlFactory = this.options.MmlFactory || new ps(), this.inputJax.map((e) => e.setMmlFactory(this.mmlFactory)), this.outputJax.initialize(), this.inputJax.map((e) => e.initialize());
	}
	get kind() {
		return this.constructor.KIND;
	}
	addRenderAction(e, ...t) {
		let [n, r] = _s.action(e, t);
		this.renderActions.add(n, r);
	}
	removeRenderAction(e) {
		let t = this.renderActions.findID(e);
		t && this.renderActions.remove(t);
	}
	render() {
		return this.clearPromises(), this.renderActions.renderDoc(this), this;
	}
	renderPromise() {
		return this.whenReady(() => ye(() => gs(this, void 0, void 0, function* () {
			return this.render(), yield this.actionPromises(), this.clearPromises(), this;
		})));
	}
	rerender(e = v.RERENDER) {
		return this.state(e - 1), this.render(), this;
	}
	rerenderPromise(e = v.RERENDER) {
		return this.whenReady(() => ye(() => gs(this, void 0, void 0, function* () {
			return this.rerender(e), yield this.actionPromises(), this.clearPromises(), this;
		})));
	}
	convert(e, t = {}) {
		let { format: n, display: r, end: i, ex: a, em: o, containerWidth: s, scale: c, family: l } = Pe({
			format: this.inputJax[0].name,
			display: !0,
			end: v.LAST,
			em: 16,
			ex: 8,
			containerWidth: null,
			scale: 1,
			family: ""
		}, t);
		s === null && (s = 80 * a);
		let u = this.inputJax.reduce((e, t) => t.name === n ? t : e, null), d = new this.options.MathItem(e, u, r);
		return d.start.node = this.adaptor.body(this.document), d.setMetrics(o, a, s, c), l && this.outputJax.options.mtextInheritFont && (d.outputData.mtextFamily = l), l && this.outputJax.options.merrorInheritFont && (d.outputData.merrorFamily = l), this.clearPromises(), d.convert(this, i), d.typesetRoot || d.root;
	}
	convertPromise(e, t = {}) {
		return this.whenReady(() => ye(() => gs(this, void 0, void 0, function* () {
			let n = this.convert(e, t);
			return yield this.actionPromises(), this.clearPromises(), n;
		})));
	}
	whenReady(e) {
		return this._readyPromise = this._readyPromise.catch((e) => {}).then(() => {
			let t = this._readyPromise;
			this._readyPromise = Promise.resolve();
			let n = e(), r = this._readyPromise.then(() => n);
			return this._readyPromise = t, r;
		});
	}
	actionPromises() {
		return Promise.all(this._actionPromises);
	}
	clearPromises() {
		this._actionPromises = [];
	}
	savePromise(e) {
		this._actionPromises.push(e);
	}
	findMath(e = null) {
		return this.processed.set("findMath"), this;
	}
	compile() {
		if (!this.processed.isSet("compile")) {
			let e = [];
			for (let t of this.math) this.compileMath(t), t.inputData.recompile !== void 0 && e.push(t);
			for (let t of e) {
				let e = t.inputData.recompile;
				t.state(e.state), t.inputData.recompile = e, this.compileMath(t);
			}
			this.processed.set("compile");
		}
		return this;
	}
	compileMath(e) {
		try {
			e.compile(this);
		} catch (t) {
			if (t.retry || t.restart) throw t;
			this.options.compileError(this, e, t), e.inputData.error = t;
		}
	}
	compileError(e, t) {
		e.root = this.mmlFactory.create("math", null, [this.mmlFactory.create("merror", {
			"data-mjx-error": t.message,
			title: t.message
		}, [this.mmlFactory.create("mtext", null, [this.mmlFactory.create("text").setText("Math input error")])])]), e.display && e.root.attributes.set("display", "block"), e.inputData.error = t.message;
	}
	typeset() {
		if (!this.processed.isSet("typeset")) {
			for (let e of this.math) try {
				e.typeset(this);
			} catch (t) {
				if (t.retry || t.restart) throw t;
				this.options.typesetError(this, e, t), e.outputData.error = t;
			}
			this.processed.set("typeset");
		}
		return this;
	}
	typesetError(e, t) {
		e.typesetRoot = this.adaptor.node("mjx-container", {
			class: "MathJax mjx-output-error",
			jax: this.outputJax.name
		}, [this.adaptor.node("span", {
			"data-mjx-error": t.message,
			title: t.message,
			style: {
				color: "red",
				"background-color": "yellow",
				"line-height": "normal"
			}
		}, [this.adaptor.text("Math output error")])]), e.display && this.adaptor.setAttributes(e.typesetRoot, { style: {
			display: "block",
			margin: "1em 0",
			"text-align": "center"
		} }), e.outputData.error = t.message;
	}
	getMetrics() {
		return this.processed.isSet("getMetrics") || (this.outputJax.getMetrics(this), this.processed.set("getMetrics")), this;
	}
	updateDocument() {
		if (!this.processed.isSet("updateDocument")) {
			for (let e of this.math.reversed()) e.updateDocument(this);
			this.processed.set("updateDocument");
		}
		return this;
	}
	removeFromDocument(e = !1) {
		return this;
	}
	state(e, t = !1) {
		for (let n of this.math) n.state(e, t);
		return e < v.INSERTED && this.processed.clear("updateDocument"), e < v.TYPESET && (this.processed.clear("typeset"), this.processed.clear("getMetrics")), e < v.COMPILED && this.processed.clear("compile"), e < v.FINDMATH && this.processed.clear("findMath"), this;
	}
	reset(e = { processed: !0 }) {
		return e = Pe(Object.assign({}, vs), e), e.all && Object.assign(e, ys), e.processed && this.processed.reset(), e.inputJax && this.inputJax.forEach((t) => t.reset(...e.inputJax)), e.outputJax && this.outputJax.reset(...e.outputJax), this;
	}
	clear() {
		return this.reset(), this.math.clear(), this;
	}
	done() {
		return Promise.resolve();
	}
	concat(e) {
		return this.math.merge(e), this;
	}
	clearMathItemsWithin(e) {
		let t = this.getMathItemsWithin(e);
		for (let e of t.slice(0).reverse()) e.clear();
		return this.math.remove(...t), t;
	}
	getMathItemsWithin(e) {
		Array.isArray(e) || (e = [e]);
		let t = this.adaptor, n = [], r = t.getElements(e, this.document);
		ITEMS: for (let e of this.math) for (let i of r) if (e.start.node && t.contains(i, e.start.node)) {
			n.push(e);
			continue ITEMS;
		}
		return n;
	}
};
ws.KIND = "MathDocument", ws.OPTIONS = {
	OutputJax: null,
	InputJax: null,
	MmlFactory: null,
	MathList: Ss,
	MathItem: Cs,
	compileError: (e, t, n) => {
		e.compileError(t, n);
	},
	typesetError: (e, t, n) => {
		e.typesetError(t, n);
	},
	renderActions: ke({
		find: [
			v.FINDMATH,
			"findMath",
			"",
			!1
		],
		compile: [v.COMPILED],
		metrics: [
			v.METRICS,
			"getMetrics",
			"",
			!1
		],
		typeset: [v.TYPESET],
		update: [
			v.INSERTED,
			"updateDocument",
			!1
		]
	})
}, ws.ProcessBits = hs("findMath", "compile", "getMetrics", "typeset", "updateDocument");
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/core/Handler.js
var Ts = class extends ws {}, Es = class {
	constructor(e, t = 5) {
		this.documentClass = Ts, this.adaptor = e, this.priority = t;
	}
	get name() {
		return this.constructor.NAME;
	}
	handlesDocument(e) {
		return !1;
	}
	create(e, t) {
		return new this.documentClass(e, this.adaptor, t);
	}
};
Es.NAME = "generic";
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/handlers/html/HTMLMathItem.js
var Ds = class extends Je {
	get adaptor() {
		return this.inputJax.adaptor;
	}
	constructor(e, t, n = !0, r = {
		node: null,
		n: 0,
		delim: ""
	}, i = {
		node: null,
		n: 0,
		delim: ""
	}) {
		super(e, t, n, r, i);
	}
	updateDocument(e) {
		if (this.state() < v.INSERTED) {
			if (this.inputJax.processStrings) {
				let e = this.start.node;
				if (e === this.end.node) this.end.n && this.end.n < this.adaptor.value(this.end.node).length && this.adaptor.split(this.end.node, this.end.n), this.start.n && (e = this.adaptor.split(this.start.node, this.start.n)), this.adaptor.parent(e) && this.adaptor.replace(this.typesetRoot, e);
				else {
					for (this.start.n && (e = this.adaptor.split(e, this.start.n)); e !== this.end.node;) {
						let t = this.adaptor.next(e);
						this.adaptor.remove(e), e = t;
					}
					this.adaptor.insert(this.typesetRoot, e), this.end.n < this.adaptor.value(e).length && this.adaptor.split(e, this.end.n), this.adaptor.remove(e);
				}
			} else this.adaptor.replace(this.typesetRoot, this.start.node);
			this.start.node = this.end.node = this.typesetRoot, this.start.n = this.end.n = 0, this.state(v.INSERTED);
		}
	}
	updateStyleSheet(e) {
		e.addStyleSheet();
	}
	removeFromDocument(e = !1) {
		if (super.removeFromDocument(e), this.state() >= v.TYPESET) {
			let t = this.adaptor, n = this.start.node, r = t.text("");
			if (e) {
				let e = this.start.delim + this.math + this.end.delim;
				if (this.inputJax.processStrings) r = t.text(e);
				else {
					let n = t.parse(e, "text/html");
					r = t.firstChild(t.body(n));
				}
			}
			t.parent(n) && t.replace(r, n), this.start.node = this.end.node = r, this.start.n = this.end.n = 0;
		}
	}
}, Os = class extends os {}, ks = class {
	constructor(e = null) {
		let t = this.constructor;
		this.options = Pe(_({}, t.OPTIONS), e), this.init(), this.getPatterns();
	}
	init() {
		this.strings = [], this.string = "", this.snodes = [], this.nodes = [], this.stack = [];
	}
	getPatterns() {
		let e = Ae(this.options.skipHtmlTags), t = Ae(this.options.ignoreHtmlClass), n = Ae(this.options.processHtmlClass);
		this.skipHtmlTags = RegExp("^(?:" + e.join("|") + ")$", "i"), this.ignoreHtmlClass = RegExp("(?:^| )(?:" + t.join("|") + ")(?: |$)"), this.processHtmlClass = RegExp("(?:^| )(?:" + n + ")(?: |$)");
	}
	pushString() {
		this.string.match(/\S/) && (this.strings.push(this.string), this.nodes.push(this.snodes)), this.string = "", this.snodes = [];
	}
	extendString(e, t) {
		this.snodes.push([e, t.length]), this.string += t;
	}
	handleText(e, t) {
		return t || this.extendString(e, this.adaptor.value(e)), this.adaptor.next(e);
	}
	handleTag(e, t) {
		if (!t) {
			let t = this.options.includeHtmlTags[this.adaptor.kind(e)];
			t instanceof Function ? this.extendString(e, t(e, this.adaptor)) : this.extendString(e, t);
		}
		return this.adaptor.next(e);
	}
	handleContainer(e, t) {
		this.pushString();
		let n = this.adaptor.getAttribute(e, "class") || "", r = this.adaptor.kind(e) || "", i = this.processHtmlClass.exec(n), a = e;
		return this.adaptor.firstChild(e) && !this.adaptor.getAttribute(e, "data-MJX") && (i || !this.skipHtmlTags.exec(r)) ? (this.adaptor.next(e) && this.stack.push([this.adaptor.next(e), t]), a = this.adaptor.firstChild(e), t = (t || this.ignoreHtmlClass.exec(n)) && !i) : a = this.adaptor.next(e), [a, t];
	}
	handleOther(e, t) {
		return this.pushString(), this.adaptor.next(e);
	}
	find(e) {
		this.init();
		let t = this.adaptor.next(e), n = !1, r = this.options.includeHtmlTags;
		for (; e && e !== t;) {
			let t = this.adaptor.kind(e);
			t === "#text" ? e = this.handleText(e, n) : Object.hasOwn(r, t) ? e = this.handleTag(e, n) : t ? [e, n] = this.handleContainer(e, n) : e = this.handleOther(e, n), !e && this.stack.length && (this.pushString(), [e, n] = this.stack.pop());
		}
		this.pushString();
		let i = [this.strings, this.nodes];
		return this.init(), i;
	}
};
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/handlers/html/HTMLDocument.js
ks.OPTIONS = {
	skipHtmlTags: [
		"script",
		"noscript",
		"style",
		"textarea",
		"pre",
		"code",
		"math",
		"select",
		"option",
		"mjx-container"
	],
	includeHtmlTags: ke({
		br: "\n",
		wbr: "",
		"#comment": ""
	}),
	ignoreHtmlClass: "mathjax_ignore",
	processHtmlClass: "mathjax_process"
}, Ye("STYLES", v.INSERTED + 1);
var As = class extends ws {
	constructor(e, t, n) {
		let [r, i] = Fe(n, ks.OPTIONS);
		super(e, t, r), this.domStrings = this.options.DomStrings || new ks(i), this.domStrings.adaptor = t, this.styles = [];
	}
	findPosition(e, t, n, r) {
		let i = this.adaptor, a = 1 / (r[e].length || 1), o = e;
		for (let [s, c] of r[e]) {
			if (t <= c && i.kind(s) === "#text") return {
				i: o,
				node: s,
				n: Math.max(t, 0),
				delim: n
			};
			t -= c, o += a;
		}
		return {
			node: null,
			n: 0,
			delim: n
		};
	}
	mathItem(e, t, n) {
		let r = e.math, i = this.findPosition(e.n, e.start.n, e.open, n), a = this.findPosition(e.n, e.end.n, e.close, n);
		return new this.options.MathItem(r, t, e.display, i, a);
	}
	findMath(e) {
		if (!this.processed.isSet("findMath")) {
			this.adaptor.document = this.document, e = Pe({ elements: this.options.elements || [this.adaptor.body(this.document)] }, e);
			let t = this.adaptor.getElements(e.elements, this.document);
			for (let e of this.inputJax) {
				let n = e.processStrings ? this.findMathFromStrings(e, t) : this.findMathFromDOM(e, t);
				this.math.merge(n);
			}
			this.processed.set("findMath");
		}
		return this;
	}
	findMathFromStrings(e, t) {
		let n = [], r = [];
		for (let e of t) {
			let [t, i] = this.domStrings.find(e);
			n.push(...t), r.push(...i);
		}
		let i = new this.options.MathList();
		for (let t of e.findMath(n)) i.push(this.mathItem(t, e, r));
		return i;
	}
	findMathFromDOM(e, t) {
		let n = [];
		for (let r of t) for (let t of e.findMath(r)) n.push(new this.options.MathItem(t.math, e, t.display, t.start, t.end));
		return new this.options.MathList(...n);
	}
	updateDocument() {
		return this.processed.isSet("updateDocument") || (this.addPageElements(), this.addStyleSheet(), super.updateDocument(), this.processed.set("updateDocument")), this;
	}
	addPageElements() {
		let e = this.adaptor, t = e.body(this.document), n = this.documentPageElements();
		if (n) {
			let r = e.firstChild(t);
			r ? e.insert(n, r) : e.append(t, n);
		}
	}
	addStyleSheet() {
		let e = this.documentStyleSheet(), t = this.adaptor;
		if (e && !t.parent(e)) {
			let n = t.head(this.document), r = this.findSheet(n, t.getAttribute(e, "id"));
			r ? t.replace(e, r) : t.append(n, e);
		}
	}
	findSheet(e, t) {
		if (t) {
			for (let n of this.adaptor.tags(e, "style")) if (this.adaptor.getAttribute(n, "id") === t) return n;
		}
		return null;
	}
	removeFromDocument(e = !1) {
		if (this.processed.isSet("updateDocument")) for (let t of this.math) t.state() >= v.INSERTED && t.state(v.TYPESET, e);
		return this.processed.clear("updateDocument"), this;
	}
	documentStyleSheet() {
		return this.outputJax.styleSheet(this);
	}
	documentPageElements() {
		return this.outputJax.pageElements(this);
	}
	addStyles(e) {
		this.styles.push(e), "insertStyles" in this.outputJax && this.outputJax.insertStyles(e);
	}
	getStyles() {
		return this.styles;
	}
};
As.KIND = "HTML", As.OPTIONS = Object.assign(Object.assign({}, ws.OPTIONS), {
	renderActions: ke(Object.assign(Object.assign({}, ws.OPTIONS.renderActions), { styles: [
		v.STYLES,
		"",
		"updateStyleSheet",
		!1
	] })),
	MathList: Os,
	MathItem: Ds,
	DomStrings: null
});
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/handlers/html/HTMLHandler.js
var js = class extends Es {
	constructor() {
		super(...arguments), this.documentClass = As;
	}
	handlesDocument(e) {
		let t = this.adaptor;
		if (typeof e == "string") try {
			e = t.parse(e, "text/html");
		} catch {}
		return e instanceof t.window.Document || e instanceof t.window.HTMLElement || e instanceof t.window.DocumentFragment;
	}
	create(e, t) {
		let n = this.adaptor;
		if (typeof e == "string") e = n.parse(e, "text/html");
		else if (e instanceof n.window.HTMLElement || e instanceof n.window.DocumentFragment) {
			let t = e;
			e = n.parse("", "text/html"), n.append(n.body(e), t);
		}
		return super.create(e, t);
	}
};
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/handlers/html.js
function Ms(e) {
	let t = new js(e);
	return we.handlers.register(t), t;
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/ams/AmsItems.js
var Ns = class extends Zn {
	constructor(e, ...t) {
		super(e), this.factory.configuration.tags.start("multline", !0, t[0]);
	}
	get kind() {
		return "multline";
	}
	EndEntry() {
		this.table.length && F.fixInitialMO(this.factory.configuration, this.nodes);
		let e = this.getProperty("shove"), t = this.create("node", "mtd", this.nodes, e ? { columnalign: e } : {});
		this.setProperty("shove", null), this.row.push(t), this.Clear();
	}
	EndRow() {
		if (this.row.length !== 1) throw new M("MultlineRowsOneCol", "The rows within the %1 environment must have exactly one column", "multline");
		let e = this.create("node", "mtr", this.row);
		this.table.push(e), this.row = [];
	}
	EndTable() {
		if (super.EndTable(), this.table.length) {
			let e = this.table.length - 1, t = -1;
			D.getAttribute(D.getChildren(this.table[0])[0], "columnalign") || D.setAttribute(D.getChildren(this.table[0])[0], "columnalign", O.Align.LEFT), D.getAttribute(D.getChildren(this.table[e])[0], "columnalign") || D.setAttribute(D.getChildren(this.table[e])[0], "columnalign", O.Align.RIGHT);
			let n = this.factory.configuration.tags.getTag();
			if (n) {
				t = this.arraydef.side === O.Align.LEFT ? 0 : this.table.length - 1;
				let e = this.table[t], r = this.create("node", "mlabeledtr", [n].concat(D.getChildren(e)));
				D.copyAttributes(e, r), this.table[t] = r;
			}
		}
		this.factory.configuration.tags.end();
	}
}, Ps = class extends Qn {
	get kind() {
		return "flalign";
	}
	constructor(e, t, n, r, i) {
		super(e), this.name = t, this.numbered = n, this.padded = r, this.center = i, this.factory.configuration.tags.start(t, n, n);
	}
	EndEntry() {
		super.EndEntry();
		let e = this.getProperty("xalignat");
		if (e && this.row.length > e) throw new M("XalignOverflow", "Extra %1 in row of %2", "&", this.name);
	}
	EndRow() {
		let e, t = this.row, n = this.getProperty("xalignat");
		for (; t.length < n;) t.push(this.create("node", "mtd"));
		for (this.row = [], this.padded && this.row.push(this.create("node", "mtd")); e = t.shift();) this.row.push(e), e = t.shift(), e && this.row.push(e), (t.length || this.padded) && this.row.push(this.create("node", "mtd"));
		this.row.length > this.maxrow && (this.maxrow = this.row.length), super.EndRow();
		let r = this.table[this.table.length - 1];
		if (this.getProperty("zeroWidthLabel") && r.isKind("mlabeledtr")) {
			let e = D.getChildren(r)[0], t = this.factory.configuration.options.tagSide, n = Object.assign({ width: 0 }, t === "right" ? { lspace: "-1width" } : {}), i = this.create("node", "mpadded", D.getChildren(e), n);
			e.setChildren([i]);
		}
	}
	EndTable() {
		if (super.EndTable(), this.center && this.maxrow <= 2) {
			let e = this.arraydef;
			delete e.width, delete this.global.indentalign;
		}
	}
}, Y;
(function(e) {
	e.NEW_DELIMITER = "new-Delimiter", e.NEW_COMMAND = "new-Command", e.NEW_ENVIRONMENT = "new-Environment";
})(Y ||= {});
var Fs = -100, X = {
	GetCSname(e, t) {
		if (e.GetNext() !== "\\") throw new M("MissingCS", "%1 must be followed by a control sequence", t);
		let n = j.trimSpaces(e.GetArgument(t)).substring(1);
		return this.checkProtectedMacros(e, n), n;
	},
	GetCsNameArgument(e, t) {
		let n = j.trimSpaces(e.GetArgument(t));
		if (n.charAt(0) === "\\" && (n = n.substring(1)), !n.match(/^(.|[a-z]+)$/i)) throw new M("IllegalControlSequenceName", "Illegal control sequence name for %1", t);
		return this.checkProtectedMacros(e, n), n;
	},
	GetArgCount(e, t) {
		let n = e.GetBrackets(t);
		if (n && (n = j.trimSpaces(n), !n.match(/^[0-9]+$/))) throw new M("IllegalParamNumber", "Illegal number of parameters specified in %1", t);
		return n;
	},
	GetTemplate(e, t, n) {
		let r = e.GetNext(), i = [], a = 0, o = e.i;
		for (; e.i < e.string.length;) {
			if (r = e.GetNext(), r === "#") {
				if (o !== e.i && (i[a] = e.string.substring(o, e.i)), r = e.string.charAt(++e.i), !r.match(/^[1-9]$/)) throw new M("CantUseHash2", "Illegal use of # in template for %1", n);
				if (parseInt(r) !== ++a) throw new M("SequentialParam", "Parameters for %1 must be numbered sequentially", n);
				o = e.i + 1;
			} else if (r === "{") return o !== e.i && (i[a] = e.string.substring(o, e.i), i[a].replace(/^ +/, "") === "" && i.slice(0, a).join("") === "") ? a : i.length > 0 ? [a.toString()].concat(i) : a;
			e.i++;
		}
		throw new M("MissingReplacementString", "Missing replacement string for definition of %1", t);
	},
	GetParameter(e, t, n) {
		if (n == null) return e.GetArgument(t);
		let r = e.i, i = 0, a = !1;
		for (; e.i < e.string.length;) {
			let o = e.string.charAt(e.i);
			if (o === "{") a = e.i === r, e.GetArgument(t), i = e.i - r;
			else if (this.MatchParam(e, n)) return a && (r++, i -= 2), e.string.substring(r, r + i);
			else if (o === "\\") {
				e.i++, i++, a = !1;
				let t = e.string.substring(e.i).match(/[a-z]+|./i);
				t && (e.i += t[0].length, i = e.i - r);
			} else e.i++, i++, a = !1;
		}
		throw new M("RunawayArgument", "Runaway argument for %1?", t);
	},
	MatchParam(e, t) {
		return e.string.substring(e.i, e.i + t.length) !== t || t.match(/\\[a-z]+$/i) && e.string.charAt(e.i + t.length).match(/[a-z]/i) ? 0 : (e.i += t.length, 1);
	},
	checkGlobal(e, t, n) {
		return e.stack.env.isGlobal ? e.configuration.packageData.get("begingroup").stack.checkGlobal(t, n) : n.map((t) => e.configuration.handlers.retrieve(t));
	},
	checkProtectedMacros(e, t) {
		if (e.options.protectedMacros?.includes(t)) throw new M("ProtectedMacro", "The control sequence %1 can't be redefined", `\\${t}`);
	},
	addDelimiter(e, t, n, r) {
		let i = t.substring(1);
		this.checkProtectedMacros(e, i);
		let [a, o] = X.checkGlobal(e, [i, t], [Y.NEW_COMMAND, Y.NEW_DELIMITER]);
		i !== t && a.remove(i), o.add(t, new Jt(t, n, r)), delete e.stack.env.isGlobal;
	},
	addMacro(e, t, n, r, i = "") {
		this.checkProtectedMacros(e, t);
		let a = X.checkGlobal(e, [t], [Y.NEW_COMMAND])[0];
		this.undefineDelimiter(e, "\\" + t), a.add(t, new Yt(i || t, n, r)), delete e.stack.env.isGlobal;
	},
	addEnvironment(e, t, n, r) {
		X.checkGlobal(e, [t], [Y.NEW_ENVIRONMENT])[0].add(t, new Yt(t, n, r)), delete e.stack.env.isGlobal;
	},
	undefineMacro(e, t) {
		let n = X.checkGlobal(e, [t], [Y.NEW_COMMAND])[0];
		n.remove(t), e.configuration.handlers.get(A.MACRO).applicable(t) && (n.add(t, new Yt(t, () => cn.FALLBACK, [])), this.undefineDelimiter(e, "\\" + t)), delete e.stack.env.isGlobal;
	},
	undefineDelimiter(e, t) {
		let n = X.checkGlobal(e, [t], [Y.NEW_DELIMITER])[0];
		n.remove(t), e.configuration.handlers.get(A.DELIMITER).applicable(t) && n.add(t, new Jt(t, null, {})), delete e.stack.env.isGlobal;
	}
};
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/ams/AmsMethods.js
function Is(e) {
	if (!e || e.isInferred && e.childNodes.length === 0) return [null, null];
	if (e.isKind("msubsup") && Ls(e)) return [e, null];
	let t = D.getChildAt(e, 0);
	return e.isInferred && t && Ls(t) ? (e.childNodes.splice(0, 1), [t, e]) : [null, e];
}
function Ls(e) {
	let t = e.childNodes[0];
	return t && t.isKind("mi") && t.getText() === "";
}
var Z = {
	AmsEqnArray(e, t, n, r, i, a, o, s) {
		let c = e.GetBrackets("\\begin{" + t.getName() + "}"), l = z.EqnArray(e, t, n, r, i, a, o, s);
		return F.setArrayAlign(l, c, e);
	},
	AlignAt(e, t, n, r) {
		let i = t.getName(), a, o = "", s = "", c = [];
		r || (a = e.GetBrackets("\\begin{" + i + "}"));
		let l = e.GetArgument("\\begin{" + i + "}");
		if (l.match(/[^0-9]/)) throw new M("PositiveIntegerArg", "Argument to %1 must be a positive integer", "\\begin{" + i + "}");
		let u = parseInt(l, 10);
		for (; u > 0;) o += "rl", s += "bt", c.push("0em 0em"), u--;
		let d = c.join(" ");
		if (r) return Z.EqnArray(e, t, n, r, o, s, d);
		let f = Z.EqnArray(e, t, n, r, o, s, d);
		return F.setArrayAlign(f, a, e);
	},
	Multline(e, t, n) {
		F.checkEqnEnv(e), e.Push(t);
		let r = e.options.ams.multlineIndent, i = e.itemFactory.create("multline", n, e.stack);
		return i.arraydef = {
			displaystyle: !0,
			rowspacing: ".5em",
			columnspacing: "100%",
			width: e.options.ams.multlineWidth,
			side: e.options.tagSide,
			minlabelspacing: e.options.tagIndent,
			"data-array-padding": `${r} ${r}`,
			"data-width-includes-label": !0
		}, i;
	},
	XalignAt(e, t, n, r) {
		let i = e.GetArgument("\\begin{" + t.getName() + "}");
		if (i.match(/[^0-9]/)) throw new M("PositiveIntegerArg", "Argument to %1 must be a positive integer", "\\begin{" + t.getName() + "}");
		let a = r ? "crl" : "rlc", o = r ? "mbt" : "btm", s = r ? "fit auto auto" : "auto auto fit", c = Z.FlalignArray(e, t, n, r, !1, a, o, s, !0);
		return c.setProperty("xalignat", 2 * parseInt(i)), c;
	},
	FlalignArray(e, t, n, r, i, a, o, s, c = !1) {
		F.checkEqnEnv(e), e.Push(t), a = a.split("").join(" ").replace(/r/g, "right").replace(/l/g, "left").replace(/c/g, "center"), o = lr(o);
		let l = e.itemFactory.create("flalign", t.getName(), n, r, i, e.stack);
		return l.arraydef = {
			width: "100%",
			displaystyle: !0,
			columnalign: a,
			columnspacing: "0em",
			columnwidth: s,
			rowspacing: "3pt",
			"data-break-align": o,
			side: e.options.tagSide,
			minlabelspacing: c ? "0" : e.options.tagIndent,
			"data-width-includes-label": !0
		}, l.setProperty("zeroWidthLabel", c), l;
	},
	HandleDeclareOp(e, t) {
		let n = e.GetStar() ? "*" : "", r = X.GetCsNameArgument(e, t), i = e.GetArgument(t);
		X.addMacro(e, r, Z.Macro, [`\\operatorname${n}{${i}}`]), e.Push(e.itemFactory.create("null"));
	},
	HandleOperatorName(e, t) {
		let n = e.GetStar(), r = new P(j.trimSpaces(e.GetArgument(t)), Object.assign(Object.assign({}, e.stack.env), {
			font: O.Variant.NORMAL,
			multiLetterIdentifiers: e.options.ams.operatornamePattern,
			operatorLetters: !0,
			noAutoOP: !0
		}), e.configuration).mml();
		if (r.isKind("mi") ? r.removeProperty("autoOP") : r = e.create("node", "TeXAtom", [r]), D.setProperties(r, {
			movesupsub: n,
			movablelimits: !0,
			texClass: b.OP
		}), !n) {
			let t = e.GetNext(), n = e.i;
			t === "\\" && ++e.i && e.GetCS() !== "limits" && (e.i = n);
		}
		e.Push(e.itemFactory.create("fn", r));
	},
	SideSet(e, t) {
		let [n, r] = Is(e.ParseArg(t)), [i, a] = Is(e.ParseArg(t)), o = e.ParseArg(t), s = o;
		n && (r ? n.replaceChild(e.create("node", "mphantom", [e.create("node", "mpadded", [F.copyNode(o, e)], { width: 0 })]), D.getChildAt(n, 0)) : (s = e.create("node", "mmultiscripts", [o]), i && D.appendChildren(s, [D.getChildAt(i, 1) || e.create("node", "none"), D.getChildAt(i, 2) || e.create("node", "none")]), D.setProperty(s, "scriptalign", "left"), D.appendChildren(s, [
			e.create("node", "mprescripts"),
			D.getChildAt(n, 1) || e.create("node", "none"),
			D.getChildAt(n, 2) || e.create("node", "none")
		]))), i && s === o && (i.replaceChild(o, D.getChildAt(i, 0)), s = i);
		let c = e.create("node", "TeXAtom", [], {
			texClass: b.OP,
			movesupsub: !0,
			movablelimits: !0
		});
		r && (n && c.appendChild(n), c.appendChild(r)), c.appendChild(s), a && c.appendChild(a), e.Push(c);
	},
	operatorLetter(e, t) {
		return e.stack.env.operatorLetters ? B.variable(e, t) : !1;
	},
	MultiIntegral(e, t, n) {
		let r = e.GetNext();
		if (r === "\\") {
			let i = e.i;
			r = e.GetArgument(t), e.i = i, r === "\\limits" && (n = "\\!\\!\\mathop{\\,\\," + n + "}");
		}
		e.string = n + " " + e.string.slice(e.i), e.i = 0;
	},
	xArrow(e, t, n, r, i, a = 0) {
		let o = {
			width: "+" + j.em((r + i) / 18),
			lspace: j.em(r / 18)
		}, s = e.GetBrackets(t), c = e.ParseArg(t), l = e.create("node", "mspace", [], { depth: ".2em" }), u = e.create("token", "mo", {
			stretchy: !0,
			texClass: b.ORD
		}, String.fromCodePoint(n));
		a && u.attributes.set("minsize", j.em(a)), u = e.create("node", "mstyle", [u], { scriptlevel: 0 });
		let d = e.create("node", "munderover", [u]), f = e.create("node", "mpadded", [c, l], o);
		if (D.setAttribute(f, "voffset", "-.2em"), D.setAttribute(f, "height", "-.2em"), D.setChild(d, d.over, f), s) {
			let t = new P(s, e.stack.env, e.configuration).mml(), n = e.create("node", "mspace", [], { height: ".75em" });
			f = e.create("node", "mpadded", [t, n], o), D.setAttribute(f, "voffset", ".15em"), D.setAttribute(f, "depth", "-.15em"), D.setChild(d, d.under, f);
		}
		D.setProperty(d, "subsupOK", !0), e.Push(e.create("node", "TeXAtom", [e.create("node", "TeXAtom", [], { texClass: b.NONE }), d], { texClass: b.REL }));
	},
	HandleShove(e, t, n) {
		let r = e.stack.Top();
		if (r.kind !== "multline") throw new M("CommandOnlyAllowedInEnv", "%1 only allowed in %2 environment", e.currentCS, "multline");
		if (r.Size()) throw new M("CommandAtTheBeginingOfLine", "%1 must come at the beginning of the line", e.currentCS);
		r.setProperty("shove", n);
	},
	CFrac(e, t) {
		let n = j.trimSpaces(e.GetBrackets(t, "")), r = e.GetArgument(t), i = e.GetArgument(t), a = {
			l: O.Align.LEFT,
			r: O.Align.RIGHT,
			"": ""
		}, o = new P("\\strut\\textstyle{" + r + "}", e.stack.env, e.configuration).mml(), s = new P("\\strut\\textstyle{" + i + "}", e.stack.env, e.configuration).mml(), c = e.create("node", "mfrac", [o, s]);
		if (n = a[n], n == null) throw new M("IllegalAlign", "Illegal alignment specified in %1", e.currentCS);
		n && D.setProperties(c, {
			numalign: n,
			denomalign: n
		}), e.Push(c);
	},
	Genfrac(e, t, n, r, i, a) {
		n ??= e.GetDelimiterArg(t), r ??= e.GetDelimiterArg(t), i ??= e.GetArgument(t), a ??= j.trimSpaces(e.GetArgument(t));
		let o = e.ParseArg(t), s = e.ParseArg(t), c = e.create("node", "mfrac", [o, s]);
		if (i !== "" && D.setAttribute(c, "linethickness", i), (n || r) && (D.setProperty(c, "withDelims", !0), c = F.fixedFence(e.configuration, n, c, r)), a !== "") {
			let t = parseInt(a, 10), n = [
				"D",
				"T",
				"S",
				"SS"
			][t];
			if (n == null) throw new M("BadMathStyleFor", "Bad math style for %1", e.currentCS);
			c = e.create("node", "mstyle", [c]), n === "D" ? D.setProperties(c, {
				displaystyle: !0,
				scriptlevel: 0
			}) : D.setProperties(c, {
				displaystyle: !1,
				scriptlevel: t - 1
			});
		}
		e.Push(c);
	},
	HandleTag(e, t) {
		if (!e.tags.currentTag.taggable && e.tags.env) throw new M("CommandNotAllowedInEnv", "%1 not allowed in %2 environment", e.currentCS, e.tags.env);
		if (e.tags.currentTag.tag) throw new M("MultipleCommand", "Multiple %1", e.currentCS);
		let n = e.GetStar(), r = j.trimSpaces(e.GetArgument(t));
		e.tags.tag(r, n), e.Push(e.itemFactory.create("null"));
	},
	HandleNoTag: z.HandleNoTag,
	HandleRef: z.HandleRef,
	Macro: z.Macro,
	Accent: z.Accent,
	Tilde: z.Tilde,
	Array: z.Array,
	Spacer: z.Spacer,
	NamedOp: z.NamedOp,
	EqnArray: z.EqnArray,
	Equation: z.Equation
};
new en("AMSmath-mathchar0mo", B.mathchar0mo, { iiiint: ["⨌", { texClass: b.OP }] }), new Qt("AMSmath-operatorLetter", Z.operatorLetter, /[-*]/i), new rn("AMSmath-macros", {
	mathring: [Z.Accent, "02DA"],
	nobreakspace: Z.Tilde,
	negmedspace: [Z.Spacer, L.negativemediummathspace],
	negthickspace: [Z.Spacer, L.negativethickmathspace],
	idotsint: [Z.MultiIntegral, "\\int\\cdots\\int"],
	dddot: [Z.Accent, "20DB"],
	ddddot: [Z.Accent, "20DC"],
	sideset: Z.SideSet,
	boxed: [
		Z.Macro,
		"\\fbox{$\\displaystyle{#1}$}",
		1
	],
	tag: Z.HandleTag,
	notag: Z.HandleNoTag,
	eqref: [Z.HandleRef, !0],
	substack: [
		Z.Macro,
		"\\begin{subarray}{c}#1\\end{subarray}",
		1
	],
	injlim: [Z.NamedOp, "inj&thinsp;lim"],
	projlim: [Z.NamedOp, "proj&thinsp;lim"],
	varliminf: [Z.Macro, "\\mathop{\\underline{\\mmlToken{mi}{lim}}}"],
	varlimsup: [Z.Macro, "\\mathop{\\overline{\\mmlToken{mi}{lim}}}"],
	varinjlim: [Z.Macro, "\\mathop{\\underrightarrow{\\mmlToken{mi}{lim}}}"],
	varprojlim: [Z.Macro, "\\mathop{\\underleftarrow{\\mmlToken{mi}{lim}}}"],
	DeclareMathOperator: Z.HandleDeclareOp,
	operatorname: Z.HandleOperatorName,
	genfrac: Z.Genfrac,
	frac: [
		Z.Genfrac,
		"",
		"",
		"",
		""
	],
	tfrac: [
		Z.Genfrac,
		"",
		"",
		"",
		"1"
	],
	dfrac: [
		Z.Genfrac,
		"",
		"",
		"",
		"0"
	],
	binom: [
		Z.Genfrac,
		"(",
		")",
		"0",
		""
	],
	tbinom: [
		Z.Genfrac,
		"(",
		")",
		"0",
		"1"
	],
	dbinom: [
		Z.Genfrac,
		"(",
		")",
		"0",
		"0"
	],
	cfrac: Z.CFrac,
	shoveleft: [Z.HandleShove, O.Align.LEFT],
	shoveright: [Z.HandleShove, O.Align.RIGHT],
	xrightarrow: [
		Z.xArrow,
		8594,
		5,
		10
	],
	xleftarrow: [
		Z.xArrow,
		8592,
		10,
		5
	]
}), new an("AMSmath-environment", B.environment, {
	"equation*": [
		Z.Equation,
		null,
		!1
	],
	"eqnarray*": [
		Z.EqnArray,
		null,
		!1,
		!0,
		"rcl",
		"bmt",
		F.cols(0, L.thickmathspace),
		".5em"
	],
	align: [
		Z.EqnArray,
		null,
		!0,
		!0,
		"rl",
		"bt",
		F.cols(0, 2)
	],
	"align*": [
		Z.EqnArray,
		null,
		!1,
		!0,
		"rl",
		"bt",
		F.cols(0, 2)
	],
	multline: [
		Z.Multline,
		null,
		!0
	],
	"multline*": [
		Z.Multline,
		null,
		!1
	],
	split: [
		Z.EqnArray,
		null,
		!1,
		!1,
		"rl",
		"bt",
		F.cols(0)
	],
	gather: [
		Z.EqnArray,
		null,
		!0,
		!0,
		"c",
		"m"
	],
	"gather*": [
		Z.EqnArray,
		null,
		!1,
		!0,
		"c",
		"m"
	],
	alignat: [
		Z.AlignAt,
		null,
		!0,
		!0
	],
	"alignat*": [
		Z.AlignAt,
		null,
		!1,
		!0
	],
	alignedat: [
		Z.AlignAt,
		null,
		!1,
		!1
	],
	aligned: [
		Z.AmsEqnArray,
		null,
		null,
		null,
		"rl",
		"bt",
		F.cols(0, 2),
		".5em",
		"D"
	],
	gathered: [
		Z.AmsEqnArray,
		null,
		null,
		null,
		"c",
		"m",
		null,
		".5em",
		"D"
	],
	xalignat: [
		Z.XalignAt,
		null,
		!0,
		!0
	],
	"xalignat*": [
		Z.XalignAt,
		null,
		!1,
		!0
	],
	xxalignat: [
		Z.XalignAt,
		null,
		!1,
		!1
	],
	flalign: [
		Z.FlalignArray,
		null,
		!0,
		!1,
		!0,
		"rlc",
		"btm",
		"auto auto fit"
	],
	"flalign*": [
		Z.FlalignArray,
		null,
		!1,
		!1,
		!0,
		"rlc",
		"btm",
		"auto auto fit"
	],
	subarray: [
		Z.Array,
		null,
		null,
		null,
		null,
		F.cols(0),
		"0.1em",
		"S",
		!0
	],
	smallmatrix: [
		Z.Array,
		null,
		null,
		null,
		"c",
		F.cols(1 / 3),
		".2em",
		"S",
		!0
	],
	matrix: [
		Z.Array,
		null,
		null,
		null,
		"c"
	],
	pmatrix: [
		Z.Array,
		null,
		"(",
		")",
		"c"
	],
	bmatrix: [
		Z.Array,
		null,
		"[",
		"]",
		"c"
	],
	Bmatrix: [
		Z.Array,
		null,
		"\\{",
		"\\}",
		"c"
	],
	vmatrix: [
		Z.Array,
		null,
		"\\vert",
		"\\vert",
		"c"
	],
	Vmatrix: [
		Z.Array,
		null,
		"\\Vert",
		"\\Vert",
		"c"
	],
	cases: [
		Z.Array,
		null,
		"\\{",
		".",
		"ll",
		null,
		".2em",
		"T"
	]
}), new tn("AMSmath-delimiter", B.delimiter, {
	"\\lvert": ["|", { texClass: b.OPEN }],
	"\\rvert": ["|", { texClass: b.CLOSE }],
	"\\lVert": ["‖", { texClass: b.OPEN }],
	"\\rVert": ["‖", { texClass: b.CLOSE }]
}), new en("AMSsymbols-mathchar0mi", B.mathchar0mi, {
	digamma: "ϝ",
	varkappa: "ϰ",
	varGamma: ["Γ", { mathvariant: O.Variant.ITALIC }],
	varDelta: ["Δ", { mathvariant: O.Variant.ITALIC }],
	varTheta: ["Θ", { mathvariant: O.Variant.ITALIC }],
	varLambda: ["Λ", { mathvariant: O.Variant.ITALIC }],
	varXi: ["Ξ", { mathvariant: O.Variant.ITALIC }],
	varPi: ["Π", { mathvariant: O.Variant.ITALIC }],
	varSigma: ["Σ", { mathvariant: O.Variant.ITALIC }],
	varUpsilon: ["Υ", { mathvariant: O.Variant.ITALIC }],
	varPhi: ["Φ", { mathvariant: O.Variant.ITALIC }],
	varPsi: ["Ψ", { mathvariant: O.Variant.ITALIC }],
	varOmega: ["Ω", { mathvariant: O.Variant.ITALIC }],
	beth: "ℶ",
	gimel: "ℷ",
	daleth: "ℸ",
	backprime: ["‵", { variantForm: !0 }],
	hslash: "ℏ",
	varnothing: ["∅", { variantForm: !0 }],
	blacktriangle: "▴",
	triangledown: ["▽", { variantForm: !0 }],
	blacktriangledown: "▾",
	square: "◻",
	Box: "◻",
	blacksquare: "◼",
	lozenge: "◊",
	Diamond: "◊",
	blacklozenge: "⧫",
	circledS: ["Ⓢ", { mathvariant: O.Variant.NORMAL }],
	bigstar: "★",
	sphericalangle: "∢",
	measuredangle: "∡",
	nexists: "∄",
	complement: "∁",
	mho: "℧",
	eth: ["ð", { mathvariant: O.Variant.NORMAL }],
	Finv: "Ⅎ",
	diagup: "╱",
	Game: "⅁",
	diagdown: "╲",
	Bbbk: ["k", { mathvariant: O.Variant.DOUBLESTRUCK }],
	yen: "¥",
	circledR: "®",
	checkmark: "✓",
	maltese: "✠"
}), new en("AMSsymbols-mathchar0mo", B.mathchar0mo, {
	dotplus: "∔",
	ltimes: "⋉",
	smallsetminus: ["∖", { variantForm: !0 }],
	rtimes: "⋊",
	Cap: "⋒",
	doublecap: "⋒",
	leftthreetimes: "⋋",
	Cup: "⋓",
	doublecup: "⋓",
	rightthreetimes: "⋌",
	barwedge: "⊼",
	curlywedge: "⋏",
	veebar: "⊻",
	curlyvee: "⋎",
	doublebarwedge: "⩞",
	boxminus: "⊟",
	circleddash: "⊝",
	boxtimes: "⊠",
	circledast: "⊛",
	boxdot: "⊡",
	circledcirc: "⊚",
	boxplus: "⊞",
	centerdot: ["⋅", { variantForm: !0 }],
	divideontimes: "⋇",
	intercal: "⊺",
	leqq: "≦",
	geqq: "≧",
	leqslant: "⩽",
	geqslant: "⩾",
	eqslantless: "⪕",
	eqslantgtr: "⪖",
	lesssim: "≲",
	gtrsim: "≳",
	lessapprox: "⪅",
	gtrapprox: "⪆",
	approxeq: "≊",
	lessdot: "⋖",
	gtrdot: "⋗",
	lll: "⋘",
	llless: "⋘",
	ggg: "⋙",
	gggtr: "⋙",
	lessgtr: "≶",
	gtrless: "≷",
	lesseqgtr: "⋚",
	gtreqless: "⋛",
	lesseqqgtr: "⪋",
	gtreqqless: "⪌",
	doteqdot: "≑",
	Doteq: "≑",
	eqcirc: "≖",
	risingdotseq: "≓",
	circeq: "≗",
	fallingdotseq: "≒",
	triangleq: "≜",
	backsim: "∽",
	thicksim: ["∼", { variantForm: !0 }],
	backsimeq: "⋍",
	thickapprox: ["≈", { variantForm: !0 }],
	subseteqq: "⫅",
	supseteqq: "⫆",
	Subset: "⋐",
	Supset: "⋑",
	sqsubset: "⊏",
	sqsupset: "⊐",
	preccurlyeq: "≼",
	succcurlyeq: "≽",
	curlyeqprec: "⋞",
	curlyeqsucc: "⋟",
	precsim: "≾",
	succsim: "≿",
	precapprox: "⪷",
	succapprox: "⪸",
	vartriangleleft: "⊲",
	lhd: "⊲",
	vartriangleright: "⊳",
	rhd: "⊳",
	trianglelefteq: "⊴",
	unlhd: "⊴",
	trianglerighteq: "⊵",
	unrhd: "⊵",
	vDash: "⊨",
	Vdash: "⊩",
	Vvdash: "⊪",
	smallsmile: ["⌣", { variantForm: !0 }],
	shortmid: ["∣", { variantForm: !0 }],
	smallfrown: ["⌢", { variantForm: !0 }],
	shortparallel: ["∥", { variantForm: !0 }],
	bumpeq: "≏",
	between: "≬",
	Bumpeq: "≎",
	pitchfork: "⋔",
	varpropto: ["∝", { variantForm: !0 }],
	backepsilon: "∍",
	blacktriangleleft: "◂",
	blacktriangleright: "▸",
	therefore: "∴",
	because: "∵",
	eqsim: "≂",
	vartriangle: ["△", { variantForm: !0 }],
	Join: "⋈",
	nless: "≮",
	ngtr: "≯",
	nleq: "≰",
	ngeq: "≱",
	nleqslant: ["⪇", { variantForm: !0 }],
	ngeqslant: ["⪈", { variantForm: !0 }],
	nleqq: ["≰", { variantForm: !0 }],
	ngeqq: ["≱", { variantForm: !0 }],
	lneq: "⪇",
	gneq: "⪈",
	lneqq: "≨",
	gneqq: "≩",
	lvertneqq: ["≨", { variantForm: !0 }],
	gvertneqq: ["≩", { variantForm: !0 }],
	lnsim: "⋦",
	gnsim: "⋧",
	lnapprox: "⪉",
	gnapprox: "⪊",
	nprec: "⊀",
	nsucc: "⊁",
	npreceq: ["⋠", { variantForm: !0 }],
	nsucceq: ["⋡", { variantForm: !0 }],
	precneqq: "⪵",
	succneqq: "⪶",
	precnsim: "⋨",
	succnsim: "⋩",
	precnapprox: "⪹",
	succnapprox: "⪺",
	nsim: "≁",
	ncong: "≇",
	nshortmid: ["∤", { variantForm: !0 }],
	nshortparallel: ["∦", { variantForm: !0 }],
	nmid: "∤",
	nparallel: "∦",
	nvdash: "⊬",
	nvDash: "⊭",
	nVdash: "⊮",
	nVDash: "⊯",
	ntriangleleft: "⋪",
	ntriangleright: "⋫",
	ntrianglelefteq: "⋬",
	ntrianglerighteq: "⋭",
	nsubseteq: "⊈",
	nsupseteq: "⊉",
	nsubseteqq: ["⊈", { variantForm: !0 }],
	nsupseteqq: ["⊉", { variantForm: !0 }],
	subsetneq: "⊊",
	supsetneq: "⊋",
	varsubsetneq: ["⊊", { variantForm: !0 }],
	varsupsetneq: ["⊋", { variantForm: !0 }],
	subsetneqq: "⫋",
	supsetneqq: "⫌",
	varsubsetneqq: ["⫋", { variantForm: !0 }],
	varsupsetneqq: ["⫌", { variantForm: !0 }],
	leftleftarrows: "⇇",
	rightrightarrows: "⇉",
	leftrightarrows: "⇆",
	rightleftarrows: "⇄",
	Lleftarrow: "⇚",
	Rrightarrow: "⇛",
	twoheadleftarrow: "↞",
	twoheadrightarrow: "↠",
	leftarrowtail: "↢",
	rightarrowtail: "↣",
	looparrowleft: "↫",
	looparrowright: "↬",
	leftrightharpoons: "⇋",
	rightleftharpoons: ["⇌", { variantForm: !0 }],
	curvearrowleft: "↶",
	curvearrowright: "↷",
	circlearrowleft: "↺",
	circlearrowright: "↻",
	Lsh: "↰",
	Rsh: "↱",
	upuparrows: "⇈",
	downdownarrows: "⇊",
	upharpoonleft: "↿",
	upharpoonright: "↾",
	downharpoonleft: "⇃",
	restriction: "↾",
	multimap: "⊸",
	downharpoonright: "⇂",
	leftrightsquigarrow: "↭",
	rightsquigarrow: "⇝",
	leadsto: "⇝",
	dashrightarrow: "⇢",
	dashleftarrow: "⇠",
	nleftarrow: "↚",
	nrightarrow: "↛",
	nLeftarrow: "⇍",
	nRightarrow: "⇏",
	nleftrightarrow: "↮",
	nLeftrightarrow: "⇎"
}), new tn("AMSsymbols-delimiter", B.delimiter, {
	"\\ulcorner": "⌜",
	"\\urcorner": "⌝",
	"\\llcorner": "⌞",
	"\\lrcorner": "⌟"
}), new rn("AMSsymbols-macros", {
	implies: [Z.Macro, "\\;\\Longrightarrow\\;"],
	impliedby: [Z.Macro, "\\;\\Longleftarrow\\;"]
});
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/newcommand/NewcommandItems.js
var Rs = class extends N {
	get kind() {
		return "beginEnv";
	}
	get isOpen() {
		return !0;
	}
	checkItem(e) {
		if (e.isKind("end")) {
			if (e.getName() !== this.getName()) throw new M("EnvBadEnd", "\\begin{%1} ended with \\end{%2}", this.getName(), e.getName());
			return [[this.factory.create("mml", this.toMml())], !0];
		}
		if (e.isKind("stop")) throw new M("EnvMissingEnd", "Missing \\end{%1}", this.getName());
		return super.checkItem(e);
	}
}, zs = {
	NewCommand(e, t) {
		let n = X.GetCsNameArgument(e, t), r = X.GetArgCount(e, t), i = e.GetBrackets(t), a = e.GetArgument(t);
		X.addMacro(e, n, zs.Macro, [
			a,
			r,
			i
		]), e.Push(e.itemFactory.create("null"));
	},
	NewEnvironment(e, t) {
		let n = j.trimSpaces(e.GetArgument(t)), r = X.GetArgCount(e, t), i = e.GetBrackets(t), a = e.GetArgument(t), o = e.GetArgument(t);
		X.addEnvironment(e, n, zs.BeginEnv, [
			!0,
			a,
			o,
			r,
			i
		]), e.Push(e.itemFactory.create("null"));
	},
	MacroDef(e, t) {
		let n = X.GetCSname(e, t), r = X.GetTemplate(e, t, "\\" + n), i = e.GetArgument(t);
		r instanceof Array ? X.addMacro(e, n, zs.MacroWithTemplate, [i].concat(r)) : X.addMacro(e, n, zs.Macro, [i, r]), e.Push(e.itemFactory.create("null"));
	},
	Let(e, t) {
		let n = X.GetCSname(e, t), r = e.GetNext();
		r === "=" && (e.i++, r = e.GetNext());
		let i = e.configuration.handlers;
		if (e.Push(e.itemFactory.create("null")), r === "\\") {
			if (t = X.GetCSname(e, t), n === t) return;
			let r = i.get(A.MACRO).applicable(t);
			if (r instanceof nn) {
				let i = r.lookup(t);
				X.addMacro(e, n, i.func, i.args, i.token);
				return;
			}
			if (r instanceof en && !(r instanceof tn)) {
				let i = r.lookup(t);
				X.addMacro(e, n, (e) => r.parser(e, i), [n, i.char]);
				return;
			}
			let a = i.get(A.DELIMITER).lookup("\\" + t);
			if (a) {
				X.addDelimiter(e, "\\" + n, a.char, a.attributes);
				return;
			}
			X.checkProtectedMacros(e, n), X.undefineMacro(e, n), X.undefineDelimiter(e, "\\" + n);
			return;
		}
		e.i++;
		let a = i.get(A.DELIMITER).lookup(r);
		if (a) {
			X.addDelimiter(e, "\\" + n, a.char, a.attributes);
			return;
		}
		X.addMacro(e, n, zs.Macro, [r]);
	},
	MacroWithTemplate(e, t, n, r, ...i) {
		let a = parseInt(r, 10);
		if (i.length) {
			let r = [];
			if (e.GetNext(), i[0] && !X.MatchParam(e, i[0])) throw new M("MismatchUseDef", "Use of %1 doesn't match its definition", t);
			if (a) {
				for (let n = 0; n < a; n++) r.push(X.GetParameter(e, t, i[n + 1]));
				n = F.substituteArgs(e, r, n);
			}
		}
		e.string = F.addArgs(e, n, e.string.slice(e.i)), e.i = 0, F.checkMaxMacros(e);
	},
	BeginEnv(e, t, n, r, i, a) {
		let o = t.getName();
		if (e.stack.env.closing === o) {
			if (delete e.stack.env.closing, e.stack.global.beginEnv && (e.stack.global.beginEnv--, r)) {
				let t = e.string.slice(e.i);
				e.string = F.addArgs(e, e.string.substring(0, e.i), r), e.Parse(), e.string = t, e.i = 0;
			}
			return e.itemFactory.create("end").setProperty("name", o);
		}
		if (i) {
			let t = [];
			if (a != null) {
				let n = e.GetBrackets(`\\begin{${o}}`);
				t.push(n ?? a);
			}
			for (let n = t.length; n < i; n++) t.push(e.GetArgument(`\\begin{${o}}`));
			n = F.substituteArgs(e, t, n), r = F.substituteArgs(e, [], r);
		}
		return e.string = F.addArgs(e, n, e.string.slice(e.i)), e.i = 0, e.stack.global.beginEnv = (e.stack.global.beginEnv || 0) + 1, e.itemFactory.create("beginEnv").setProperty("name", o);
	},
	Macro: z.Macro
};
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/newcommand/NewcommandMappings.js
new rn("Newcommand-macros", {
	newcommand: zs.NewCommand,
	renewcommand: zs.NewCommand,
	newenvironment: zs.NewEnvironment,
	renewenvironment: zs.NewEnvironment,
	def: zs.MacroDef,
	let: zs.Let
});
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/newcommand/NewcommandConfiguration.js
function Bs(e, t) {
	t.parseOptions.packageData.has("newcommand") || (t.parseOptions.packageData.set("newcommand", {}), new tn(Y.NEW_DELIMITER, B.delimiter, {}), new rn(Y.NEW_COMMAND, {}), new an(Y.NEW_ENVIRONMENT, B.environment, {}), t.parseOptions.handlers.add({
		[A.CHARACTER]: [],
		[A.DELIMITER]: [Y.NEW_DELIMITER],
		[A.MACRO]: [Y.NEW_DELIMITER, Y.NEW_COMMAND],
		[A.ENVIRONMENT]: [Y.NEW_ENVIRONMENT]
	}, {}, Fs));
}
un.create("newcommand", {
	[k.HANDLER]: { macro: ["Newcommand-macros"] },
	[k.ITEMS]: { [Rs.prototype.kind]: Rs },
	[k.OPTIONS]: {
		maxMacros: 1e3,
		protectedMacros: ["begingroupSandbox"]
	},
	[k.CONFIG]: Bs
});
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/ams/AmsConfiguration.js
var Vs = class extends Wt {};
un.create("ams", {
	[k.HANDLER]: {
		[A.CHARACTER]: ["AMSmath-operatorLetter"],
		[A.DELIMITER]: ["AMSsymbols-delimiter", "AMSmath-delimiter"],
		[A.MACRO]: [
			"AMSsymbols-mathchar0mi",
			"AMSsymbols-mathchar0mo",
			"AMSsymbols-delimiter",
			"AMSsymbols-macros",
			"AMSmath-mathchar0mo",
			"AMSmath-macros",
			"AMSmath-delimiter"
		],
		[A.ENVIRONMENT]: ["AMSmath-environment"]
	},
	[k.ITEMS]: {
		[Ns.prototype.kind]: Ns,
		[Ps.prototype.kind]: Ps
	},
	[k.TAGS]: { ams: Vs },
	[k.OPTIONS]: {
		multlineWidth: "",
		ams: {
			operatornamePattern: /^[-*a-zA-Z0-9]+/,
			multlineWidth: "100%",
			multlineIndent: "1em"
		}
	},
	[k.CONFIG]: Bs
});
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/boldsymbol/BoldsymbolConfiguration.js
var Hs = {};
Hs[O.Variant.NORMAL] = O.Variant.BOLD, Hs[O.Variant.ITALIC] = O.Variant.BOLDITALIC, Hs[O.Variant.FRAKTUR] = O.Variant.BOLDFRAKTUR, Hs[O.Variant.SCRIPT] = O.Variant.BOLDSCRIPT, Hs[O.Variant.SANSSERIF] = O.Variant.BOLDSANSSERIF, Hs["-tex-calligraphic"] = "-tex-bold-calligraphic", Hs["-tex-oldstyle"] = "-tex-bold-oldstyle", Hs["-tex-mathit"] = O.Variant.BOLDITALIC, new rn("boldsymbol", { boldsymbol: { Boldsymbol(e, t) {
	let n = e.stack.env.boldsymbol;
	e.stack.env.boldsymbol = !0;
	let r = e.ParseArg(t);
	e.stack.env.boldsymbol = n, e.Push(r);
} }.Boldsymbol });
function Us(e, t, n, r) {
	let i = Dt.createToken(e, t, n, r);
	return t !== "mtext" && e.configuration.parser.stack.env.boldsymbol && (D.setProperty(i, "fixBold", !0), e.configuration.addNode("fixBold", i)), i;
}
function Ws(e) {
	for (let t of e.data.getList("fixBold")) if (D.getProperty(t, "fixBold")) {
		let e = D.getAttribute(t, "mathvariant");
		D.setAttribute(t, "mathvariant", Hs[e] || e), D.removeProperties(t, "fixBold");
	}
}
un.create("boldsymbol", {
	[k.HANDLER]: { [A.MACRO]: ["boldsymbol"] },
	[k.NODES]: { token: Us },
	[k.POSTPROCESSORS]: [Ws]
});
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/mathtools/MathtoolsUtil.js
var Q = {
	setDisplayLevel(e, t) {
		if (!t) return;
		let [n, r] = Ie(t, {
			"\\displaystyle": [!0, 0],
			"\\textstyle": [!1, 0],
			"\\scriptstyle": [!1, 1],
			"\\scriptscriptstyle": [!1, 2]
		}, [null, null]);
		n !== null && (e.attributes.set("displaystyle", n), e.attributes.set("scriptlevel", r));
	},
	checkAlignment(e, t) {
		let n = e.stack.Top();
		if (n.kind !== Qn.prototype.kind) throw new M("NotInAlignment", "%1 can only be used in aligment environments", t);
		return n;
	},
	addPairedDelims(e, t, n) {
		if (e.configuration.handlers.get(A.MACRO).contains(t)) throw new M("CommadExists", "Command %1 already defined", `\\${t}`);
		X.addMacro(e, t, $.PairedDelimiters, n);
	},
	spreadLines(e, t) {
		if (!e.isKind("mtable")) return;
		let n = e.attributes.get("rowspacing"), r = j.dimen2em(t);
		n = n.split(/ /).map((e) => j.em(Math.max(0, j.dimen2em(e) + r))).join(" "), e.attributes.set("rowspacing", n);
	},
	plusOrMinus(e, t) {
		if (t = t.trim(), !t.match(/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)$/)) throw new M("NotANumber", "Argument to %1 is not a number", e);
		return t.match(/^[-+]/) ? t : "+" + t;
	},
	getScript(e, t, n) {
		let r = j.trimSpaces(e.GetArgument(t));
		if (r === "") return e.create("node", "none");
		let i = e.options.mathtools[`prescript-${n}-format`];
		i && (r = `${i}{${r}}`);
		let a = new P(r, e.stack.env, e.configuration).mml();
		return a.isKind("TeXAtom") && a.isEmpty ? e.create("node", "none") : a;
	}
}, Gs = { [A.MACRO]: ["mathtools-legacycolonsymbols"] }, Ks = _e.DEFAULTPRIORITY - 1, $ = {
	MtMatrix(e, t, n, r) {
		let i = e.GetBrackets(`\\begin{${t.getName()}}`, "c");
		return $.Array(e, t, n, r, i);
	},
	MtSmallMatrix(e, t, n, r, i) {
		return i ||= e.GetBrackets(`\\begin{${t.getName()}}`, e.options.mathtools["smallmatrix-align"]), $.Array(e, t, n, r, i, j.em(1 / 3), ".2em", "S", 1);
	},
	MtMultlined(e, t) {
		let n = `\\begin{${t.getName()}}`, r = e.options.mathtools["multlined-pos"] || "c", i = e.options.mathtools["multlined-width"] || "";
		if (!e.nextIsSpace()) {
			let t = e.GetBrackets(n, r);
			if (t.match(/^[ctb]$/) ? (r = t, i = e.nextIsSpace() ? "" : e.GetBrackets(n, "")) : i = t, i && !j.matchDimen(i)[0]) throw new M("BadWidth", "Width for %1 must be a dimension", n);
		}
		e.Push(t);
		let a = e.itemFactory.create("multlined", e, t);
		return a.arraydef = {
			displaystyle: !0,
			rowspacing: ".5em",
			width: i || "auto",
			columnwidth: "100%"
		}, F.setArrayAlign(a, r);
	},
	HandleShove(e, t, n) {
		let r = e.stack.Top();
		if (r.kind !== "multline" && r.kind !== "multlined") throw new M("CommandInMultlined", "%1 can only appear within the multline or multlined environments", t);
		if (r.Size()) throw new M("CommandAtTheBeginingOfLine", "%1 must come at the beginning of the line", t);
		r.setProperty("shove", n);
		let i = e.GetBrackets(t), a = e.ParseArg(t);
		if (i) {
			let t = e.create("node", "mrow", []), r = e.create("node", "mspace", [], { width: i });
			n === "left" ? (t.appendChild(r), t.appendChild(a)) : (t.appendChild(a), t.appendChild(r)), a = t;
		}
		e.Push(a);
	},
	SpreadLines(e, t) {
		if (e.stack.env.closing === t.getName()) {
			delete e.stack.env.closing;
			let t = e.stack.Pop(), n = t.toMml(), r = t.getProperty("spread");
			if (n.isInferred) for (let e of D.getChildren(n)) Q.spreadLines(e, r);
			else Q.spreadLines(n, r);
			e.Push(n);
		} else {
			let n = e.GetDimen(`\\begin{${t.getName()}}`);
			t.setProperty("spread", n), t.setProperty("nestStart", !0), F.checkEqnEnv(e), e.Push(t);
		}
	},
	Cases(e, t, n, r, i) {
		let a = e.itemFactory.create("array").setProperty("casesEnv", t.getName());
		return a.arraydef = {
			rowspacing: ".2em",
			columnspacing: "1em",
			columnalign: "left"
		}, i === "D" && (a.arraydef.displaystyle = !0), a.setProperties({
			open: n,
			close: r
		}), e.Push(t), a;
	},
	MathLap(e, t, n, r) {
		let i = e.GetBrackets(t, "").trim(), a = e.create("node", "mstyle", [e.create("node", "mpadded", [e.ParseArg(t)], Object.assign({ width: 0 }, n === "r" ? {} : { lspace: n === "l" ? "-1width" : "-.5width" }))], { "data-cramped": r });
		Q.setDisplayLevel(a, i), e.Push(e.create("node", "TeXAtom", [a]));
	},
	Cramped(e, t) {
		let n = e.GetBrackets(t, "").trim(), r = e.ParseArg(t), i = e.create("node", "mstyle", [r], { "data-cramped": !0 });
		Q.setDisplayLevel(i, n), e.Push(i);
	},
	MtLap(e, t, n) {
		let r = F.internalMath(e, e.GetArgument(t), 0), i = e.create("node", "mpadded", r, { width: 0 });
		n !== "r" && D.setAttribute(i, "lspace", n === "l" ? "-1width" : "-.5width"), e.Push(i);
	},
	MathMakeBox(e, t) {
		let n = e.GetBrackets(t), r = e.GetBrackets(t, "c"), i = e.create("node", "mpadded", [e.ParseArg(t)]);
		n && D.setAttribute(i, "width", n);
		let a = Ie(r.toLowerCase(), {
			c: "center",
			r: "right"
		}, "");
		a && D.setAttribute(i, "data-align", a), r.toLowerCase() !== r && D.setAttribute(i, "data-overflow", "linebreak"), e.Push(i);
	},
	MathMBox(e, t) {
		e.Push(e.create("node", "mrow", [e.ParseArg(t)]));
	},
	UnderOverBracket(e, t) {
		let n = ir(e.GetBrackets(t, ".1em"), .1), r = e.GetBrackets(t, ".2em"), i = e.GetArgument(t), [a, o, s] = t.charAt(1) === "o" ? [
			"over",
			"accent",
			"bottom"
		] : [
			"under",
			"accentunder",
			"top"
		], c = R(n), l = new P(i, e.stack.env, e.configuration).mml(), u = new P(i, e.stack.env, e.configuration).mml(), d = e.create("node", "mpadded", [e.create("node", "mphantom", [u])], {
			style: `border: ${c} solid; border-${s}: none`,
			height: r,
			depth: 0
		}), f = F.underOver(e, l, d, a, !0), p = D.getChildAt(D.getChildAt(f, 0), 0);
		D.setAttribute(p, o, !0), e.Push(f);
	},
	Aboxed(e, t, n = "boxed", r = !0) {
		let i = Q.checkAlignment(e, t);
		i.row.length % 2 == 1 && i.row.push(e.create("node", "mtd", []));
		let a = e.GetArgument(t), o = e.string.substring(e.i);
		e.string = a + "&&\\endAboxed", e.i = 0;
		let s = e.GetUpTo(t, "&"), c = e.GetUpTo(t, "&");
		e.GetUpTo(t, "\\endAboxed");
		let [l, u] = r ? ["", ""] : ["$\\displaystyle{", "}$"];
		e.string = F.substituteArgs(e, [s, c], `\\rlap{\\${n}{${l}#1{}#2${u}}}\\kern.267em\\phantom{#1}&\\phantom{{}#2}\\kern.267em`) + o, e.i = 0;
	},
	MakeAboxedCommand(e, t) {
		let n = e.GetStar(), r = X.GetCSname(e, t), i = X.GetCSname(e, t + "\\" + r), a = e.configuration.handlers;
		if (a.get(A.MACRO).lookup(r)) throw new M("AlreadyDefined", "%1 is already defined", "\\" + r);
		a.retrieve(Y.NEW_COMMAND).add(r, new Yt(r, $.Aboxed, [i, n])), e.Push(e.itemFactory.create("null"));
	},
	ArrowBetweenLines(e, t) {
		let n = Q.checkAlignment(e, t);
		if (n.Size() || n.row.length) throw new M("BetweenLines", "%1 must be on a row by itself", t);
		let r = e.GetStar(), i = e.GetBrackets(t, "\\Updownarrow");
		r && (n.EndEntry(), n.EndEntry());
		let a = new P(r ? "\\quad" + i : i + "\\quad", e.stack.env, e.configuration).mml();
		e.Push(a), n.EndEntry(), n.EndRow();
	},
	VDotsWithin(e, t) {
		let n = new P("\\mmlToken{mi}{}" + e.GetArgument(t) + "\\mmlToken{mi}{}", e.stack.env, e.configuration).mml(), r = e.create("node", "mpadded", [e.create("node", "mpadded", [e.create("node", "mo", [e.create("text", "⋮")])], {
			width: 0,
			lspace: "-.5width"
		}), e.create("node", "mphantom", [n])], { lspace: ".5width" });
		e.Push(r);
	},
	ShortVDotsWithin(e, t) {
		let n = e.stack.Top(), r = e.GetStar();
		n.EndEntry && ($.FlushSpaceAbove(e, "\\MTFlushSpaceAbove"), r || n.EndEntry()), $.VDotsWithin(e, "\\vdotswithin"), n.EndEntry && (r && n.EndEntry(), $.FlushSpaceBelow(e, "\\MTFlushSpaceBelow"));
	},
	FlushSpaceAbove(e, t) {
		let n = Q.checkAlignment(e, t);
		n.table && (n.setProperty("flushspaceabove", n.table.length), n.addRowSpacing("-" + e.options.mathtools.shortvdotsadjustabove));
	},
	FlushSpaceBelow(e, t) {
		let n = Q.checkAlignment(e, t);
		n.table && (n.Size() && n.EndEntry(), n.EndRow(), n.addRowSpacing("-" + e.options.mathtools.shortvdotsadjustbelow));
	},
	PairedDelimiters(e, t, n, r, i = "#1", a = 1, o = "", s = "") {
		let c = e.GetStar(), l = c ? "" : e.GetBrackets(t), [u, d, f] = c ? [
			"\\mathopen{\\left",
			"\\right",
			"}\\mathclose{}"
		] : l ? [
			l + "l",
			l + "r",
			""
		] : [
			"",
			"",
			""
		], p = c ? "\\middle" : l || "";
		if (a) {
			let n = [];
			for (let r = n.length; r < a; r++) n.push(e.GetArgument(t));
			o = F.substituteArgs(e, n, o), i = F.substituteArgs(e, n, i), s = F.substituteArgs(e, n, s);
		}
		i = i.replace(/\\delimsize/g, p), e.string = [
			o,
			u,
			n,
			i,
			d,
			r,
			f,
			s,
			e.string.substring(e.i)
		].reduce((t, n) => F.addArgs(e, t, n), ""), e.i = 0, F.checkMaxMacros(e);
	},
	DeclarePairedDelimiter(e, t) {
		let n = X.GetCsNameArgument(e, t), r = e.GetArgument(t), i = e.GetArgument(t);
		Q.addPairedDelims(e, n, [r, i]), e.Push(e.itemFactory.create("null"));
	},
	DeclarePairedDelimiterX(e, t) {
		let n = X.GetCsNameArgument(e, t), r = X.GetArgCount(e, t), i = e.GetArgument(t), a = e.GetArgument(t), o = e.GetArgument(t);
		Q.addPairedDelims(e, n, [
			i,
			a,
			o,
			r
		]), e.Push(e.itemFactory.create("null"));
	},
	DeclarePairedDelimiterXPP(e, t) {
		let n = X.GetCsNameArgument(e, t), r = X.GetArgCount(e, t), i = e.GetArgument(t), a = e.GetArgument(t), o = e.GetArgument(t), s = e.GetArgument(t), c = e.GetArgument(t);
		Q.addPairedDelims(e, n, [
			a,
			o,
			c,
			r,
			i,
			s
		]), e.Push(e.itemFactory.create("null"));
	},
	CenterColon(e, t, n, r = !1, i = !1) {
		let a = e.options.mathtools, o = e.create("token", "mo", {}, ":");
		if (n && (a.centercolon || r)) {
			let t = a["centercolon-offset"];
			o = e.create("node", "mpadded", [o], Object.assign({
				voffset: t,
				height: `+${t}`,
				depth: `-${t}`
			}, i ? {
				width: a["thincolon-dw"],
				lspace: a["thincolon-dx"]
			} : {}));
		}
		e.Push(o);
	},
	Relation(e, t, n, r) {
		e.options.mathtools["use-unicode"] && r ? e.Push(e.create("token", "mo", { texClass: b.REL }, r)) : (n = "\\mathrel{" + n.replace(/:/g, "\\MTThinColon").replace(/-/g, "\\mathrel{-}") + "}", e.string = F.addArgs(e, n, e.string.substring(e.i)), e.i = 0);
	},
	NArrow(e, t, n, r) {
		e.Push(e.create("node", "TeXAtom", [e.create("token", "mtext", {}, n), e.create("node", "mpadded", [e.create("node", "mpadded", [e.create("node", "menclose", [e.create("node", "mspace", [], {
			height: ".2em",
			depth: 0,
			width: ".4em"
		})], {
			notation: "updiagonalstrike",
			"data-thickness": ".05em",
			"data-padding": 0
		})], {
			width: 0,
			lspace: "-.5width",
			voffset: r
		}), e.create("node", "mphantom", [e.create("token", "mtext", {}, n)])], {
			width: 0,
			lspace: "-.5width"
		})], { texClass: b.REL }));
	},
	SplitFrac(e, t, n) {
		let r = e.ParseArg(t), i = e.ParseArg(t);
		e.Push(e.create("node", "mstyle", [e.create("node", "mfrac", [e.create("node", "mstyle", [
			r,
			e.create("token", "mi"),
			e.create("token", "mspace", { width: "1em" })
		], { scriptlevel: 0 }), e.create("node", "mstyle", [
			e.create("token", "mspace", { width: "1em" }),
			e.create("token", "mi"),
			i
		], { scriptlevel: 0 })], {
			linethickness: 0,
			numalign: "left",
			denomalign: "right"
		})], {
			displaystyle: n,
			scriptlevel: 0
		}));
	},
	XMathStrut(e, t) {
		let n = e.GetBrackets(t), r = e.GetArgument(t);
		r = Q.plusOrMinus(t, r), n = Q.plusOrMinus(t, n || r), e.Push(e.create("node", "TeXAtom", [e.create("node", "mpadded", [e.create("node", "mphantom", [e.create("token", "mo", { stretchy: !1 }, "(")])], {
			width: 0,
			height: r + "height",
			depth: n + "depth"
		})], { texClass: b.ORD }));
	},
	Prescript(e, t) {
		let n = Q.getScript(e, t, "sup"), r = Q.getScript(e, t, "sub"), i = Q.getScript(e, t, "arg");
		if (D.isType(n, "none") && D.isType(r, "none")) {
			e.Push(i);
			return;
		}
		let a = e.create("node", "mmultiscripts", [i]);
		D.getChildren(a).push(null, null), D.appendChildren(a, [
			e.create("node", "mprescripts"),
			r,
			n
		]), a.setProperty("fixPrescript", !0), e.Push(a);
	},
	NewTagForm(e, t, n = !1) {
		let r = e.tags;
		if (!("mtFormats" in r)) throw new M("TagsNotMT", "%1 can only be used with ams or mathtools tags", t);
		let i = e.GetArgument(t).trim();
		if (!i) throw new M("InvalidTagFormID", "Tag form name can't be empty");
		let a = e.GetBrackets(t, ""), o = e.GetArgument(t), s = e.GetArgument(t);
		if (!n && r.mtFormats.has(i)) throw new M("DuplicateTagForm", "Duplicate tag form: %1", i);
		r.mtFormats.set(i, [
			o,
			s,
			a
		]), e.Push(e.itemFactory.create("null"));
	},
	UseTagForm(e, t) {
		let n = e.tags;
		if (!("mtFormats" in n)) throw new M("TagsNotMT", "%1 can only be used with ams or mathtools tags", t);
		let r = e.GetArgument(t).trim();
		if (!r) {
			n.mtCurrent = null, e.Push(e.itemFactory.create("null"));
			return;
		}
		if (!n.mtFormats.has(r)) throw new M("UndefinedTagForm", "Undefined tag form: %1", r);
		n.mtCurrent = n.mtFormats.get(r), e.Push(e.itemFactory.create("null"));
	},
	SetOptions(e, t) {
		let n = e.options.mathtools;
		if (!n["allow-mathtoolsset"]) throw new M("ForbiddenMathtoolsSet", "%1 is disabled", t);
		let r = {};
		Object.keys(n).forEach((e) => {
			e !== "pariedDelimiters" && e !== "tagforms" && e !== "allow-mathtoolsset" && (r[e] = 1);
		});
		let i = e.GetArgument(t), a = F.keyvalOptions(i, r, !0);
		for (let t of Object.keys(a)) t === "legacycolonsymbols" && n[t] !== a[t] && (n[t] ? e.configuration.handlers.remove(Gs, {}) : e.configuration.handlers.add(Gs, {}, Ks)), n[t] = a[t];
		e.Push(e.itemFactory.create("null"));
	},
	Array: z.Array,
	Macro: z.Macro,
	xArrow: Z.xArrow,
	HandleRef: Z.HandleRef,
	AmsEqnArray: Z.AmsEqnArray,
	MacroWithTemplate: zs.MacroWithTemplate
};
new rn("mathtools-macros", {
	shoveleft: [$.HandleShove, O.Align.LEFT],
	shoveright: [$.HandleShove, O.Align.RIGHT],
	xleftrightarrow: [
		$.xArrow,
		8596,
		10,
		10
	],
	xLeftarrow: [
		$.xArrow,
		8656,
		12,
		7
	],
	xRightarrow: [
		$.xArrow,
		8658,
		7,
		12
	],
	xLeftrightarrow: [
		$.xArrow,
		8660,
		12,
		12
	],
	xhookleftarrow: [
		$.xArrow,
		8617,
		10,
		5
	],
	xhookrightarrow: [
		$.xArrow,
		8618,
		5,
		10
	],
	xmapsto: [
		$.xArrow,
		8614,
		10,
		10
	],
	xrightharpoondown: [
		$.xArrow,
		8641,
		5,
		10
	],
	xleftharpoondown: [
		$.xArrow,
		8637,
		10,
		5
	],
	xrightleftharpoons: [
		$.xArrow,
		8652,
		10,
		10
	],
	xrightharpoonup: [
		$.xArrow,
		8640,
		5,
		10
	],
	xleftharpoonup: [
		$.xArrow,
		8636,
		10,
		5
	],
	xleftrightharpoons: [
		$.xArrow,
		8651,
		10,
		10
	],
	xlongrightarrow: [
		$.xArrow,
		10230,
		7,
		12,
		1.45
	],
	xlongleftarrow: [
		$.xArrow,
		10229,
		12,
		7,
		1.45
	],
	xLongrightarrow: [
		$.xArrow,
		10233,
		7,
		12,
		1.45
	],
	xLongleftarrow: [
		$.xArrow,
		10232,
		12,
		7,
		1.45
	],
	mathllap: [
		$.MathLap,
		"l",
		!1
	],
	mathrlap: [
		$.MathLap,
		"r",
		!1
	],
	mathclap: [
		$.MathLap,
		"c",
		!1
	],
	clap: [$.MtLap, "c"],
	textllap: [$.MtLap, "l"],
	textrlap: [$.MtLap, "r"],
	textclap: [$.MtLap, "c"],
	cramped: $.Cramped,
	crampedllap: [
		$.MathLap,
		"l",
		!0
	],
	crampedrlap: [
		$.MathLap,
		"r",
		!0
	],
	crampedclap: [
		$.MathLap,
		"c",
		!0
	],
	crampedsubstack: [
		$.Macro,
		"\\begin{crampedsubarray}{c}#1\\end{crampedsubarray}",
		1
	],
	mathmbox: $.MathMBox,
	mathmakebox: $.MathMakeBox,
	overbracket: $.UnderOverBracket,
	underbracket: $.UnderOverBracket,
	refeq: $.HandleRef,
	MoveEqLeft: [
		$.Macro,
		"\\hspace{#1em}&\\hspace{-#1em}",
		1,
		"2"
	],
	Aboxed: $.Aboxed,
	MakeAboxedCommand: $.MakeAboxedCommand,
	ArrowBetweenLines: $.ArrowBetweenLines,
	vdotswithin: $.VDotsWithin,
	shortvdotswithin: $.ShortVDotsWithin,
	MTFlushSpaceAbove: $.FlushSpaceAbove,
	MTFlushSpaceBelow: $.FlushSpaceBelow,
	DeclarePairedDelimiter: $.DeclarePairedDelimiter,
	DeclarePairedDelimiterX: $.DeclarePairedDelimiterX,
	DeclarePairedDelimiterXPP: $.DeclarePairedDelimiterXPP,
	DeclarePairedDelimiters: $.DeclarePairedDelimiter,
	DeclarePairedDelimitersX: $.DeclarePairedDelimiterX,
	DeclarePairedDelimitersXPP: $.DeclarePairedDelimiterXPP,
	vcentercolon: [
		$.CenterColon,
		!0,
		!0
	],
	ordinarycolon: [$.CenterColon, !1],
	MTThinColon: [
		$.CenterColon,
		!0,
		!0,
		!0
	],
	coloneqq: [
		$.Relation,
		":=",
		"≔"
	],
	Coloneqq: [
		$.Relation,
		"::=",
		"⩴"
	],
	coloneq: [
		$.Relation,
		":=",
		"≔"
	],
	Coloneq: [
		$.Relation,
		"::=",
		"⩺"
	],
	eqqcolon: [
		$.Relation,
		"=:",
		"≕"
	],
	Eqqcolon: [$.Relation, "=::"],
	eqcolon: [
		$.Relation,
		"=:",
		"≕"
	],
	Eqcolon: [$.Relation, "=::"],
	colonapprox: [$.Relation, ":\\approx"],
	Colonapprox: [$.Relation, "::\\approx"],
	colonsim: [$.Relation, ":\\sim"],
	Colonsim: [$.Relation, "::\\sim"],
	dblcolon: [
		$.Relation,
		"::",
		"∷"
	],
	approxcolon: [$.Relation, "\\approx:"],
	Approxcolon: [$.Relation, "\\approx::"],
	simcolon: [$.Relation, "\\sim:"],
	Simcolon: [$.Relation, "\\sim::"],
	colondash: [$.Relation, ":-"],
	Colondash: [$.Relation, "::-"],
	dashcolon: [
		$.Relation,
		"-:",
		"∹"
	],
	Dashcolon: [$.Relation, "-::"],
	nuparrow: [
		$.NArrow,
		"↑",
		".06em"
	],
	ndownarrow: [
		$.NArrow,
		"↓",
		".25em"
	],
	bigtimes: [$.Macro, "\\mathop{\\Large\\kern-.1em\\boldsymbol{\\times}\\kern-.1em}"],
	splitfrac: [$.SplitFrac, !1],
	splitdfrac: [$.SplitFrac, !0],
	xmathstrut: $.XMathStrut,
	prescript: $.Prescript,
	newtagform: [$.NewTagForm, !1],
	renewtagform: [$.NewTagForm, !0],
	usetagform: $.UseTagForm,
	adjustlimits: [
		$.MacroWithTemplate,
		"\\mathop{{#1}\\vphantom{{#3}}}_{{#2}\\vphantom{{#4}}}\\mathop{{#3}\\vphantom{{#1}}}_{{#4}\\vphantom{{#2}}}",
		4,
		,
		"_",
		,
		"_"
	],
	mathtoolsset: $.SetOptions
}), new rn("mathtools-legacycolonsymbols", {
	coloneq: [$.Relation, ":-"],
	Coloneq: [$.Relation, "::-"],
	eqcolon: [
		$.Relation,
		"-:",
		"∹"
	],
	Eqcolon: [$.Relation, "-::"]
}), new an("mathtools-environments", B.environment, {
	dcases: [
		$.Array,
		null,
		"\\{",
		"",
		"ll",
		null,
		".2em",
		"D"
	],
	rcases: [
		$.Array,
		null,
		"",
		"\\}",
		"ll",
		null,
		".2em"
	],
	drcases: [
		$.Array,
		null,
		"",
		"\\}",
		"ll",
		null,
		".2em",
		"D"
	],
	"dcases*": [
		$.Cases,
		null,
		"{",
		"",
		"D"
	],
	"rcases*": [
		$.Cases,
		null,
		"",
		"}"
	],
	"drcases*": [
		$.Cases,
		null,
		"",
		"}",
		"D"
	],
	"cases*": [
		$.Cases,
		null,
		"{",
		""
	],
	"matrix*": [
		$.MtMatrix,
		null,
		null,
		null
	],
	"pmatrix*": [
		$.MtMatrix,
		null,
		"(",
		")"
	],
	"bmatrix*": [
		$.MtMatrix,
		null,
		"[",
		"]"
	],
	"Bmatrix*": [
		$.MtMatrix,
		null,
		"\\{",
		"\\}"
	],
	"vmatrix*": [
		$.MtMatrix,
		null,
		"\\vert",
		"\\vert"
	],
	"Vmatrix*": [
		$.MtMatrix,
		null,
		"\\Vert",
		"\\Vert"
	],
	"smallmatrix*": [
		$.MtSmallMatrix,
		null,
		null,
		null
	],
	psmallmatrix: [
		$.MtSmallMatrix,
		null,
		"(",
		")",
		"c"
	],
	"psmallmatrix*": [
		$.MtSmallMatrix,
		null,
		"(",
		")"
	],
	bsmallmatrix: [
		$.MtSmallMatrix,
		null,
		"[",
		"]",
		"c"
	],
	"bsmallmatrix*": [
		$.MtSmallMatrix,
		null,
		"[",
		"]"
	],
	Bsmallmatrix: [
		$.MtSmallMatrix,
		null,
		"\\{",
		"\\}",
		"c"
	],
	"Bsmallmatrix*": [
		$.MtSmallMatrix,
		null,
		"\\{",
		"\\}"
	],
	vsmallmatrix: [
		$.MtSmallMatrix,
		null,
		"\\vert",
		"\\vert",
		"c"
	],
	"vsmallmatrix*": [
		$.MtSmallMatrix,
		null,
		"\\vert",
		"\\vert"
	],
	Vsmallmatrix: [
		$.MtSmallMatrix,
		null,
		"\\Vert",
		"\\Vert",
		"c"
	],
	"Vsmallmatrix*": [
		$.MtSmallMatrix,
		null,
		"\\Vert",
		"\\Vert"
	],
	crampedsubarray: [
		$.Array,
		null,
		null,
		null,
		null,
		"0em",
		"0.1em",
		"S'",
		1
	],
	multlined: $.MtMultlined,
	spreadlines: [$.SpreadLines, !0],
	lgathered: [
		$.AmsEqnArray,
		null,
		null,
		null,
		"l",
		"t",
		null,
		".5em",
		"D"
	],
	rgathered: [
		$.AmsEqnArray,
		null,
		null,
		null,
		"r",
		"t",
		null,
		".5em",
		"D"
	]
}), new tn("mathtools-delimiters", B.delimiter, {
	"\\lparen": "(",
	"\\rparen": ")"
}), new rn("mathtools-characters", { ":": [$.CenterColon, !0] });
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/mathtools/MathtoolsTags.js
var qs = 0;
function Js(e, t) {
	let n = t.parseOptions.options.tags;
	n !== "base" && Object.hasOwn(e.tags, n) && qt.add(n, e.tags[n]);
	let r = qt.create(t.parseOptions.options.tags).constructor;
	class i extends r {
		constructor() {
			super(), this.mtFormats = /* @__PURE__ */ new Map(), this.mtCurrent = null;
			let e = t.parseOptions.options.mathtools.tagforms;
			for (let t of Object.keys(e)) {
				if (!Array.isArray(e[t]) || e[t].length !== 3) throw new M("InvalidTagFormDef", "The tag form definition for \"%1\" should be an array of three strings", t);
				this.mtFormats.set(t, e[t]);
			}
		}
		formatTag(e) {
			if (this.mtCurrent) {
				let [t, n, r] = this.mtCurrent;
				return [
					t,
					r ? `${r}{${e}}` : e,
					n
				];
			}
			return super.formatTag(e);
		}
	}
	qs++;
	let a = "MathtoolsTags-" + qs;
	qt.add(a, i), t.parseOptions.options.tags = a;
}
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/mathtools/MathtoolsItems.js
var Ys = class extends Ns {
	get kind() {
		return "multlined";
	}
	EndTable() {
		if ((this.Size() || this.row.length) && (this.EndEntry(), this.EndRow()), this.table.length > 1) {
			let e = this.factory.configuration.options.mathtools, t = e["multlined-gap"], n = e["firstline-afterskip"] || t, r = e["lastline-preskip"] || t, i = D.getChildren(this.table[0])[0];
			D.getAttribute(i, "columnalign") !== O.Align.RIGHT && i.appendChild(this.create("node", "mspace", [], { width: n }));
			let a = D.getChildren(this.table[this.table.length - 1])[0];
			if (D.getAttribute(a, "columnalign") !== O.Align.LEFT) {
				let e = D.getChildren(a)[0];
				e.childNodes.unshift(null);
				let t = this.create("node", "mspace", [], { width: r });
				D.setChild(e, 0, t);
			}
		}
		super.EndTable.call(this);
	}
};
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/mathtools/MathtoolsConfiguration.js
function Xs(e, t) {
	Bs(e, t);
	let n = t.parseOptions, r = n.options.mathtools.pairedDelimiters, i = e.handlers.retrieve(Y.NEW_COMMAND);
	for (let [e, t] of Object.entries(r)) i.add(e, new Yt(e, $.PairedDelimiters, t));
	n.options.mathtools.legacycolonsymbols && e.handlers.add(Gs, {}, Ks), Js(e, t);
}
function Zs({ data: e }) {
	for (let t of e.getList("mmultiscripts")) {
		if (!t.getProperty("fixPrescript")) continue;
		let n = D.getChildren(t), r = 0;
		for (let i of [1, 2]) n[i] || (D.setChild(t, i, e.nodeFactory.create("node", "none")), r++);
		r === 2 && n.splice(1, 2);
	}
}
un.create("mathtools", {
	[k.HANDLER]: {
		macro: ["mathtools-macros", "mathtools-delimiters"],
		[A.ENVIRONMENT]: ["mathtools-environments"],
		[A.DELIMITER]: ["mathtools-delimiters"],
		[A.CHARACTER]: ["mathtools-characters"]
	},
	[k.ITEMS]: { [Ys.prototype.kind]: Ys },
	[k.CONFIG]: Xs,
	[k.POSTPROCESSORS]: [[Zs, -6]],
	[k.OPTIONS]: { mathtools: {
		"multlined-gap": "1em",
		"multlined-pos": "c",
		"multlined-width": "",
		"firstline-afterskip": "",
		"lastline-preskip": "",
		"smallmatrix-align": "c",
		shortvdotsadjustabove: ".2em",
		shortvdotsadjustbelow: ".2em",
		centercolon: !1,
		"centercolon-offset": ".04em",
		"thincolon-dx": "-.04em",
		"thincolon-dw": "-.08em",
		"use-unicode": !1,
		legacycolonsymbols: !1,
		"prescript-sub-format": "",
		"prescript-sup-format": "",
		"prescript-arg-format": "",
		"allow-mathtoolsset": !0,
		pairedDelimiters: ke({}),
		tagforms: ke({})
	} }
});
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/empheq/EmpheqUtil.js
var Qs = {
	splitOptions(e, t = null) {
		return F.keyvalOptions(e, t, !0);
	},
	columnCount(e) {
		let t = 0;
		for (let n of e.childNodes) {
			let e = n.childNodes.length - +!!n.isKind("mlabeledtr");
			e > t && (t = e);
		}
		return t;
	},
	cellBlock(e, t, n, r) {
		let i = n.create("node", "mpadded", [], {
			height: 0,
			depth: 0,
			voffset: "-1height"
		}), a = new P(e, n.stack.env, n.configuration), o = a.mml();
		r && a.configuration.tags.label && (a.configuration.tags.currentTag.env = r, a.configuration.tags.getTag(!0));
		for (let e of o.isInferred ? o.childNodes : [o]) i.appendChild(e);
		return i.appendChild(n.create("node", "mphantom", [n.create("node", "mpadded", [t], { width: 0 })])), i;
	},
	topRowTable(e, t) {
		let n = F.copyNode(e, t);
		return n.setChildren(n.childNodes.slice(0, 1)), n.attributes.set("align", "baseline 1"), e.factory.create("mphantom", {}, [t.create("node", "mpadded", [n], { width: 0 })]);
	},
	rowspanCell(e, t, n, r, i) {
		e.appendChild(r.create("node", "mpadded", [this.cellBlock(t, F.copyNode(n, r), r, i), this.topRowTable(n, r)], {
			height: 0,
			depth: 0,
			voffset: "height"
		}));
	},
	left(e, t, n, r, i = "") {
		e.attributes.set("columnalign", "right " + e.attributes.get("columnalign")), e.attributes.set("columnspacing", "0em " + e.attributes.get("columnspacing")), e.childNodes.length === 0 && e.appendChild(r.create("node", "mtr"));
		let a;
		for (let t of e.childNodes.slice(0).reverse()) a = r.create("node", "mtd"), t.childNodes.unshift(a), a.parent = t, t.isKind("mlabeledtr") && (t.childNodes[0] = t.childNodes[1], t.childNodes[1] = a);
		this.rowspanCell(a, n, t, r, i);
	},
	right(e, t, n, r, i = "") {
		e.childNodes.length === 0 && e.appendChild(r.create("node", "mtr"));
		let a = e.childNodes[0], o = Qs.columnCount(e) + +!!a.isKind("mlabeledtr");
		for (; a.childNodes.length < o;) a.appendChild(r.create("node", "mtd"));
		let s = a.appendChild(r.create("node", "mtd"));
		Qs.rowspanCell(s, n, t, r, i), e.attributes.set("columnalign", (e.attributes.get("columnalign") || "").split(/ /).slice(0, o).join(" ") + " left"), e.attributes.set("columnspacing", e.attributes.get("columnspacing").split(/ /).slice(0, o - 1).join(" ") + " 0em");
	},
	adjustTable(e, t) {
		let n = e.getProperty("left"), r = e.getProperty("right");
		if (n || r) {
			let i = e.Last, a = F.copyNode(i, t);
			n && this.left(i, a, n, t), r && this.right(i, a, r, t);
		}
	},
	allowEnv: {
		equation: !0,
		align: !0,
		gather: !0,
		flalign: !0,
		alignat: !0,
		multline: !0
	},
	checkEnv(e) {
		return Object.hasOwn(this.allowEnv, e.replace(/\*$/, "")) || !1;
	}
}, $s = class extends Vn {
	get kind() {
		return "cases-begin";
	}
	checkItem(e) {
		return e.isKind("end") && e.getName() === this.getName() && this.getProperty("end") ? (this.setProperty("end", !1), [[], !0]) : super.checkItem(e);
	}
}, ec = class extends Vs {
	constructor() {
		super(...arguments), this.subcounter = 0;
	}
	start(e, t, n) {
		this.subcounter = 0, super.start(e, t, n);
	}
	autoTag() {
		this.currentTag.tag ?? (this.currentTag.env === "subnumcases" ? (this.subcounter === 0 && this.counter++, this.subcounter++, this.tag(this.formatNumber(this.counter, this.subcounter), !1)) : (this.currentTag.env !== "numcases-left" && this.counter++, this.tag(this.formatNumber(this.counter), !1)));
	}
	formatNumber(e, t = null) {
		return e.toString() + (t === null ? "" : String.fromCharCode(96 + t));
	}
}, tc = {
	NumCases(e, t) {
		if (e.stack.env.closing === t.getName()) {
			delete e.stack.env.closing, e.Push(e.itemFactory.create("end").setProperty("name", t.getName()));
			let n = e.stack.Top(), r = n.Last, i = F.copyNode(r, e), a = n.getProperty("left");
			return Qs.left(r, i, a + "\\mmlToken{mo}{\\U{7B}}\\,", e, "numcases-left"), e.Push(e.itemFactory.create("end").setProperty("name", t.getName())), null;
		}
		{
			let n = e.GetArgument("\\begin{" + t.getName() + "}");
			t.setProperty("left", n);
			let r = z.EqnArray(e, t, !0, !0, "ll", "tt");
			return r.arraydef.displaystyle = !1, r.arraydef.rowspacing = ".2em", r.setProperty("numCases", !0), e.Push(t), r;
		}
	},
	Entry(e, t) {
		if (!e.stack.Top().getProperty("numCases")) return z.Entry(e, t);
		e.Push(e.itemFactory.create("cell").setProperties({
			isEntry: !0,
			name: t
		}));
		let n = e.string, r = 0, i = e.i, a = n.length;
		for (; i < a;) {
			let e = n.charAt(i);
			if (e === "{") r++, i++;
			else if (e === "}") {
				if (r === 0) break;
				r--, i++;
			} else if (e === "&" && r === 0) throw new M("ExtraCasesAlignTab", "Extra alignment tab in text for numcase environment");
			else if (e === "\\" && r === 0) {
				let e = (n.slice(i + 1).match(/^[a-z]+|./i) || [])[0];
				if (e === "\\" || e === "cr" || e === "end" || e === "label" || e === void 0) break;
				i += e.length;
			} else i++;
		}
		let o = n.substring(e.i, i).replace(/^\s*/, "");
		return e.PushAll(F.internalMath(e, o, 0)), e.i = i, null;
	},
	environment(e, t, n, r) {
		let i = e.itemFactory.create("cases-begin").setProperties({
			name: t,
			end: !0
		});
		e.Push(n(e, i, ...r));
	}
};
new an("cases-env", tc.environment, {
	numcases: [tc.NumCases, "cases"],
	subnumcases: [tc.NumCases, "cases"]
}), new nn("cases-macros", { "&": tc.Entry }), un.create("cases", {
	[k.HANDLER]: {
		[A.ENVIRONMENT]: ["cases-env"],
		[A.CHARACTER]: ["cases-macros"]
	},
	[k.ITEMS]: { [$s.prototype.kind]: $s },
	[k.TAGS]: { cases: ec }
});
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/enclose/EncloseConfiguration.js
var nc = {
	"data-arrowhead": 1,
	color: 1,
	mathcolor: 1,
	background: 1,
	mathbackground: 1,
	"data-padding": 1,
	"data-thickness": 1
};
new rn("enclose", { enclose: { Enclose(e, t) {
	let n = e.GetArgument(t).replace(/,/g, " "), r = e.GetBrackets(t, ""), i = e.ParseArg(t), a = F.keyvalOptions(r, nc);
	a.notation = n, e.Push(e.create("node", "menclose", [i], a));
} }.Enclose }), un.create("enclose", { [k.HANDLER]: { [A.MACRO]: ["enclose"] } });
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/cancel/CancelConfiguration.js
var rc = {
	Cancel(e, t, n) {
		let r = e.GetBrackets(t, ""), i = e.ParseArg(t), a = F.keyvalOptions(r, nc);
		a.notation = n, e.Push(e.create("node", "menclose", [i], a));
	},
	CancelTo(e, t) {
		let n = e.GetBrackets(t, ""), r = e.ParseArg(t), i = e.ParseArg(t), a = F.keyvalOptions(n, nc);
		a.notation = [
			O.Notation.UPDIAGONALSTRIKE,
			O.Notation.UPDIAGONALARROW,
			O.Notation.NORTHEASTARROW
		].join(" "), r = e.create("node", "mpadded", [r], {
			depth: "-.1em",
			height: "+.1em",
			voffset: ".1em"
		}), e.Push(e.create("node", "msup", [e.create("node", "menclose", [i], a), r]));
	}
};
new rn("cancel", {
	cancel: [rc.Cancel, O.Notation.UPDIAGONALSTRIKE],
	bcancel: [rc.Cancel, O.Notation.DOWNDIAGONALSTRIKE],
	xcancel: [rc.Cancel, O.Notation.UPDIAGONALSTRIKE + " " + O.Notation.DOWNDIAGONALSTRIKE],
	cancelto: rc.CancelTo
}), un.create("cancel", { [k.HANDLER]: { [A.MACRO]: ["cancel"] } });
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/color/ColorMethods.js
function ic(e) {
	let t = `+${e}`, n = e.replace(/^.*?([a-z]*)$/, "$1");
	return {
		width: `+${2 * parseFloat(t)}${n}`,
		height: t,
		depth: t,
		lspace: e
	};
}
var ac = {
	Color(e, t) {
		let n = e.GetBrackets(t, ""), r = e.GetArgument(t), i = e.configuration.packageData.get("color").model.getColor(n, r), a = e.itemFactory.create("style").setProperties({ styles: { mathcolor: i } });
		e.stack.env.color = i, e.Push(a);
	},
	TextColor(e, t) {
		let n = e.GetBrackets(t, ""), r = e.GetArgument(t), i = e.configuration.packageData.get("color").model.getColor(n, r), a = e.stack.env.color;
		e.stack.env.color = i;
		let o = e.ParseArg(t);
		a ? e.stack.env.color = a : delete e.stack.env.color;
		let s = e.create("node", "mstyle", [o], { mathcolor: i });
		e.Push(s);
	},
	DefineColor(e, t) {
		let n = e.GetArgument(t), r = e.GetArgument(t), i = e.GetArgument(t);
		e.configuration.packageData.get("color").model.defineColor(r, n, i), e.Push(e.itemFactory.create("null"));
	},
	ColorBox(e, t) {
		let n = e.GetBrackets(t, ""), r = e.GetArgument(t), i = F.internalMath(e, e.GetArgument(t)), a = e.configuration.packageData.get("color").model, o = e.create("node", "mpadded", i, { mathbackground: a.getColor(n, r) });
		D.setProperties(o, ic(e.options.color.padding)), e.Push(o);
	},
	FColorBox(e, t) {
		let n = e.GetBrackets(t, ""), r = e.GetArgument(t), i = e.GetBrackets(t, n), a = e.GetArgument(t), o = F.internalMath(e, e.GetArgument(t)), s = e.options.color, c = e.configuration.packageData.get("color").model, l = e.create("node", "mpadded", o, {
			mathbackground: c.getColor(i, a),
			style: `border: ${s.borderWidth} solid ${c.getColor(n, r)}`
		});
		D.setProperties(l, ic(s.padding)), e.Push(l);
	}
}, oc = /* @__PURE__ */ new Map([
	["Apricot", "#FBB982"],
	["Aquamarine", "#00B5BE"],
	["Bittersweet", "#C04F17"],
	["Black", "#221E1F"],
	["Blue", "#2D2F92"],
	["BlueGreen", "#00B3B8"],
	["BlueViolet", "#473992"],
	["BrickRed", "#B6321C"],
	["Brown", "#792500"],
	["BurntOrange", "#F7921D"],
	["CadetBlue", "#74729A"],
	["CarnationPink", "#F282B4"],
	["Cerulean", "#00A2E3"],
	["CornflowerBlue", "#41B0E4"],
	["Cyan", "#00AEEF"],
	["Dandelion", "#FDBC42"],
	["DarkOrchid", "#A4538A"],
	["Emerald", "#00A99D"],
	["ForestGreen", "#009B55"],
	["Fuchsia", "#8C368C"],
	["Goldenrod", "#FFDF42"],
	["Gray", "#949698"],
	["Green", "#00A64F"],
	["GreenYellow", "#DFE674"],
	["JungleGreen", "#00A99A"],
	["Lavender", "#F49EC4"],
	["LimeGreen", "#8DC73E"],
	["Magenta", "#EC008C"],
	["Mahogany", "#A9341F"],
	["Maroon", "#AF3235"],
	["Melon", "#F89E7B"],
	["MidnightBlue", "#006795"],
	["Mulberry", "#A93C93"],
	["NavyBlue", "#006EB8"],
	["OliveGreen", "#3C8031"],
	["Orange", "#F58137"],
	["OrangeRed", "#ED135A"],
	["Orchid", "#AF72B0"],
	["Peach", "#F7965A"],
	["Periwinkle", "#7977B8"],
	["PineGreen", "#008B72"],
	["Plum", "#92268F"],
	["ProcessBlue", "#00B0F0"],
	["Purple", "#99479B"],
	["RawSienna", "#974006"],
	["Red", "#ED1B23"],
	["RedOrange", "#F26035"],
	["RedViolet", "#A1246B"],
	["Rhodamine", "#EF559F"],
	["RoyalBlue", "#0071BC"],
	["RoyalPurple", "#613F99"],
	["RubineRed", "#ED017D"],
	["Salmon", "#F69289"],
	["SeaGreen", "#3FBC9D"],
	["Sepia", "#671800"],
	["SkyBlue", "#46C5DD"],
	["SpringGreen", "#C6DC67"],
	["Tan", "#DA9D76"],
	["TealBlue", "#00AEB3"],
	["Thistle", "#D883B7"],
	["Turquoise", "#00B4CE"],
	["Violet", "#58429B"],
	["VioletRed", "#EF58A0"],
	["White", "#FFFFFF"],
	["WildStrawberry", "#EE2967"],
	["Yellow", "#FFF200"],
	["YellowGreen", "#98CC70"],
	["YellowOrange", "#FAA21A"]
]), sc = /* @__PURE__ */ new Map(), cc = class {
	constructor() {
		this.userColors = /* @__PURE__ */ new Map();
	}
	normalizeColor(e, t) {
		if (!e || e === "named") {
			if (t.match(/;/)) throw new M("BadColorValue", "Invalid color value");
			return t;
		}
		if (sc.has(e)) return sc.get(e)(t);
		throw new M("UndefinedColorModel", "Color model '%1' not defined", e);
	}
	getColor(e, t) {
		return !e || e === "named" ? this.getColorByName(t) : this.normalizeColor(e, t);
	}
	getColorByName(e) {
		if (this.userColors.has(e)) return this.userColors.get(e);
		if (oc.has(e)) return oc.get(e);
		if (e.match(/;/)) throw new M("BadColorValue", "Invalid color value");
		return e;
	}
	defineColor(e, t, n) {
		let r = this.normalizeColor(e, n);
		this.userColors.set(t, r);
	}
};
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/color/ColorConfiguration.js
sc.set("rgb", function(e) {
	let t = e.trim().split(/\s*,\s*/), n = "#";
	if (t.length !== 3) throw new M("ModelArg1", "Color values for the %1 model require 3 numbers", "rgb");
	for (let e of t) {
		if (!e.match(/^(\d+(\.\d*)?|\.\d+)$/)) throw new M("InvalidDecimalNumber", "Invalid decimal number");
		let t = parseFloat(e);
		if (t < 0 || t > 1) throw new M("ModelArg2", "Color values for the %1 model must be between %2 and %3", "rgb", "0", "1");
		let r = Math.floor(t * 255).toString(16);
		r.length < 2 && (r = "0" + r), n += r;
	}
	return n;
}), sc.set("RGB", function(e) {
	let t = e.trim().split(/\s*,\s*/), n = "#";
	if (t.length !== 3) throw new M("ModelArg1", "Color values for the %1 model require 3 numbers", "RGB");
	for (let e of t) {
		if (!e.match(/^\d+$/)) throw new M("InvalidNumber", "Invalid number");
		let t = parseInt(e);
		if (t > 255) throw new M("ModelArg2", "Color values for the %1 model must be between %2 and %3", "RGB", "0", "255");
		let r = t.toString(16);
		r.length < 2 && (r = "0" + r), n += r;
	}
	return n;
}), sc.set("gray", function(e) {
	if (!e.match(/^\s*(\d+(\.\d*)?|\.\d+)\s*$/)) throw new M("InvalidDecimalNumber", "Invalid decimal number");
	let t = parseFloat(e);
	if (t < 0 || t > 1) throw new M("ModelArg2", "Color values for the %1 model must be between %2 and %3", "gray", "0", "1");
	let n = Math.floor(t * 255).toString(16);
	return n.length < 2 && (n = "0" + n), `#${n}${n}${n}`;
}), new rn("color", {
	color: ac.Color,
	textcolor: ac.TextColor,
	definecolor: ac.DefineColor,
	colorbox: ac.ColorBox,
	fcolorbox: ac.FColorBox
});
var lc = function(e, t) {
	t.parseOptions.packageData.set("color", { model: new cc() });
};
un.create("color", {
	[k.HANDLER]: { [A.MACRO]: ["color"] },
	[k.OPTIONS]: { color: {
		padding: "5px",
		borderWidth: "2px"
	} },
	[k.CONFIG]: lc
});
//#endregion
//#region node_modules/.pnpm/@mathjax+src@4.1.3/node_modules/@mathjax/src/mjs/input/tex/braket/BraketItems.js
var uc = R(L.thinmathspace), dc = class extends N {
	constructor() {
		super(...arguments), this.barNodes = [];
	}
	get kind() {
		return "braket";
	}
	get isOpen() {
		return !0;
	}
	checkItem(e) {
		return e.isKind("close") ? e.getProperty("braketbar") ? (this.barNodes.push(...super.toMml(!0, !0).childNodes), this.Clear(), N.fail) : [[this.factory.create("mml", this.toMml())], !0] : e.isKind("mml") ? (this.Push(e.toMml()), this.getProperty("single") ? [[this.toMml()], !0] : N.fail) : super.checkItem(e);
	}
	toMml(e = !0, t) {
		let n = super.toMml(e, t);
		if (!e) return n;
		let r = this.getProperty("open"), i = this.getProperty("close");
		if (this.barNodes.length && (n = this.create("node", "inferredMrow", [...this.barNodes, n])), this.getProperty("stretchy")) return this.getProperty("space") && (n = this.create("node", "inferredMrow", [
			this.create("token", "mspace", { width: uc }),
			n,
			this.create("token", "mspace", { width: uc })
		])), F.fenced(this.factory.configuration, r, n, i);
		let a = {
			fence: !0,
			stretchy: !1,
			symmetric: !0,
			texClass: b.OPEN
		}, o = this.create("token", "mo", a, r);
		a.texClass = b.CLOSE;
		let s = this.create("token", "mo", a, i);
		return this.create("node", "mrow", [
			o,
			n,
			s
		], {
			open: r,
			close: i
		});
	}
}, fc = {
	Braket(e, t, n, r, i, a, o = !1) {
		let s = e.i;
		e.GetArgument(t), e.i = s;
		let c = e.GetNext(), l = !0;
		c === "{" && (e.i++, l = !1);
		let u = e.itemFactory.create("braket");
		u.setProperties({
			barcount: 0,
			barmax: a,
			open: n,
			close: r,
			stretchy: i,
			single: l,
			space: o
		}), e.Push(u), u.env.braketItem = e.stack.height - 1;
	},
	Bar(e, t) {
		let n = t === "|" ? "|" : "‖", r = e.stack.height - e.stack.env.braketItem, i = e.stack.Top(r);
		if (!i || !i.isKind("braket") || i.getProperty("barcount") >= i.getProperty("barmax")) return !1;
		if (n === "|" && e.GetNext() === "|" && (e.i++, n = "‖"), !i.getProperty("stretchy")) {
			let t = e.create("token", "mo", {
				stretchy: !1,
				"data-braketbar": !0,
				texClass: b.ORD
			}, n);
			return e.Push(t), !0;
		}
		let a = e.itemFactory.create("close").setProperty("braketbar", !0);
		return e.Push(a), i.barNodes.push(e.create("node", "TeXAtom", [], { texClass: b.CLOSE }), e.create("token", "mo", {
			stretchy: !0,
			"data-braketbar": !0,
			texClass: b.BIN
		}, n), e.create("node", "TeXAtom", [], { texClass: b.OPEN })), i.setProperty("barcount", i.getProperty("barcount") + 1), !0;
	},
	Macro: z.Macro
};
new rn("Braket-macros", {
	bra: [
		fc.Macro,
		"{\\langle {#1} \\vert}",
		1
	],
	ket: [
		fc.Macro,
		"{\\vert {#1} \\rangle}",
		1
	],
	braket: [
		fc.Braket,
		"⟨",
		"⟩",
		!1,
		Infinity
	],
	set: [
		fc.Braket,
		"{",
		"}",
		!1,
		1
	],
	Bra: [
		fc.Macro,
		"{\\left\\langle {#1} \\right\\vert}",
		1
	],
	Ket: [
		fc.Macro,
		"{\\left\\vert {#1} \\right\\rangle}",
		1
	],
	Braket: [
		fc.Braket,
		"⟨",
		"⟩",
		!0,
		Infinity
	],
	Set: [
		fc.Braket,
		"{",
		"}",
		!0,
		1,
		!0
	],
	ketbra: [
		fc.Macro,
		"{\\vert {#1} \\rangle\\langle {#2} \\vert}",
		2
	],
	Ketbra: [
		fc.Macro,
		"{\\left\\vert {#1} \\right\\rangle\\left\\langle {#2} \\right\\vert}",
		2
	],
	"|": fc.Bar
}), new nn("Braket-characters", { "|": fc.Bar }), un.create("braket", {
	[k.HANDLER]: {
		[A.CHARACTER]: ["Braket-characters"],
		[A.MACRO]: ["Braket-macros"]
	},
	[k.ITEMS]: { [dc.prototype.kind]: dc },
	[k.PRIORITY]: 3
});
//#endregion
//#region vendor/mathjax.ts
var pc = ns();
Ms(pc);
var mc = we.document("", {
	InputJax: new yr({
		packages: [
			"base",
			"ams",
			"newcommand",
			"boldsymbol",
			"mathtools",
			"cases",
			"cancel",
			"color",
			"braket"
		],
		formatError: (e, t) => {
			throw t;
		}
	}),
	OutputJax: new jo({
		fontData: Eo,
		fontCache: "none"
	})
}), hc = async () => void 0;
we.asyncLoad = async (e) => {
	let t = /dynamic\/([\w-]+)\.js$/.exec(e)?.[1], n = t === void 0 ? void 0 : await hc(t);
	if (n === void 0) throw Error(`no glyphs for ${t ?? e}`);
	Eo.dynamicSetup(...n);
};
async function gc(e, t) {
	hc = t;
	let n = await mc.convertPromise(e, { display: !0 });
	return pc.serializeXML(pc.firstChild(n));
}
//#endregion
export { gc as tex2svg };
