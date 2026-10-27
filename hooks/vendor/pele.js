// node_modules/.pnpm/pele@1.9.1/node_modules/pele/dist/pele.js
var e = [
	[
		"flowchart",
		"flowchart-elk",
		/^\s*flowchart-elk/
	],
	[
		"mindmap",
		"mindmap",
		/^\s*mindmap/
	],
	[
		"architecture",
		"architecture",
		/^\s*architecture/
	],
	[
		"agentflow",
		"agentflow",
		/^\s*agentflow-beta\b/
	],
	[
		"c4",
		"c4",
		/^\s*(?:C4Context|C4Container|C4Component|C4Dynamic|C4Deployment)/
	],
	[
		"kanban",
		"kanban",
		/^\s*kanban/
	],
	[
		"class",
		"classDiagram",
		/^\s*classDiagram/
	],
	[
		"er",
		"er",
		/^\s*erDiagram/
	],
	[
		"gantt",
		"gantt",
		/^\s*gantt/
	],
	[
		"info",
		"info",
		/^\s*info/
	],
	[
		"pie",
		"pie",
		/^\s*pie/
	],
	[
		"requirement",
		"requirement",
		/^\s*requirement(Diagram)?/
	],
	[
		"sequence",
		"sequence",
		/^\s*sequenceDiagram/
	],
	[
		"swimlane",
		"swimlane",
		/^\s*swimlane-beta\b/
	],
	[
		"flowchart",
		"flowchart-v2",
		/^\s*(graph|flowchart)/
	],
	[
		"timeline",
		"timeline",
		/^\s*timeline/
	],
	[
		"gitGraph",
		"gitGraph",
		/^\s*gitGraph/
	],
	[
		"state",
		"stateDiagram",
		/^\s*stateDiagram/
	],
	[
		"journey",
		"journey",
		/^\s*journey/
	],
	[
		"quadrantChart",
		"quadrantChart",
		/^\s*quadrantChart/
	],
	[
		"sankey",
		"sankey",
		/^\s*sankey(-beta)?/
	],
	[
		"packet",
		"packet",
		/^\s*packet(-beta)?/
	],
	[
		"xychart",
		"xychart",
		/^\s*xychart(-beta)?/
	],
	[
		"block",
		"block",
		/^\s*block(-beta)?/
	],
	[
		"eventmodeling",
		"eventmodeling",
		/^\s*eventmodeling/
	],
	[
		"treeView",
		"treeView",
		/^\s*treeView-beta/
	],
	[
		"radar",
		"radar",
		/^\s*radar-beta/
	],
	[
		"ishikawa",
		"ishikawa",
		/^\s*ishikawa(-beta)?\b/i
	],
	[
		"treemap",
		"treemap",
		/^\s*treemap/
	],
	[
		"railroad",
		"railroad",
		/^\s*railroad-beta/i
	],
	[
		"railroad",
		"railroadEbnf",
		/^\s*railroad-ebnf-beta/i
	],
	[
		"railroad",
		"railroadAbnf",
		/^\s*railroad-abnf-beta/i
	],
	[
		"railroad",
		"railroadPeg",
		/^\s*railroad-peg-beta/i
	],
	[
		"venn",
		"venn",
		/^\s*venn-beta/
	],
	[
		"wardley",
		"wardley",
		/^\s*wardley-beta/i
	],
	[
		"cynefin",
		"cynefin",
		/^\s*cynefin-beta(?:[\s:]|$)/
	],
	[
		"usecase",
		"usecase",
		/^\s*usecase-beta(?:\s|$)/
	]
];
function t(t) {
	for (let [n, r, i] of e) if (i.test(t)) return {
		type: n,
		mermaidType: r
	};
	return null;
}
var n = class extends Error {
	code;
	type;
	mermaidType;
	line;
	column;
	snippet;
	constructor(e, t = "syntax", n = {}) {
		super(e), this.name = "PeleError", this.code = t, this.type = n.type ?? null, this.mermaidType = n.mermaidType ?? null, this.line = n.line ?? 0, this.column = n.column ?? 0, this.snippet = n.snippet ?? "";
	}
};
function r(e, t) {
	let n = 1, r = 0;
	for (let i = e.indexOf("\n"); i !== -1 && i < t; i = e.indexOf("\n", i + 1)) n++, r = i + 1;
	let i = e.indexOf("\n", t);
	i === -1 && (i = e.length);
	let a = t - r + 1, o = e.slice(r, i);
	return {
		line: n,
		column: a,
		snippet: o + "\n" + "-".repeat(a - 1) + "^"
	};
}
function i(e, t, i, a, o = !1) {
	let s = r(t, i), c = o ? `Lexical error on line ${s.line}. Unrecognized text.` : `Parse error on line ${s.line}:`;
	return new n(o ? `${c}
${s.snippet}` : `${c}
${s.snippet}
${a}`, "syntax", {
		type: e,
		...s
	});
}
var a = "amp:38,lt:60,gt:62,quot:34,apos:39,nbsp:160,shy:173,iexcl:161,cent:162,pound:163,curren:164,yen:165,sect:167,copy:169,laquo:171,not:172,reg:174,deg:176,plusmn:177,sup2:178,sup3:179,micro:181,para:182,middot:183,sup1:185,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,euro:8364,trade:8482,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,radic:8730,infin:8734,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830,check:10003,cross:10007,AMP:38,LT:60,GT:62,QUOT:34,lsqb:91,rsqb:93,lcub:123,rcub:125,verbar:124,VerticalLine:124,midast:42,DiacriticalGrave:96,Hat:94,UnderBar:95,equals:61,colon:58,semi:59,num:35,percnt:37,lpar:40,rpar:41,lbrack:91,rbrack:93,lbrace:123,rbrace:125,vert:124,sol:47,bsol:92,quest:63,excl:33,ast:42,plus:43,comma:44,period:46,dollar:36,commat:64,grave:96,hat:94,lowbar:95,tilde:126,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969", o;
function s(e) {
	if (!o) {
		o = /* @__PURE__ */ new Map();
		for (let e of a.split(",")) {
			let t = e.indexOf(":");
			o.set(e.slice(0, t), String.fromCodePoint(Number(e.slice(t + 1))));
		}
	}
	return o.get(e);
}
function c(e, t) {
	return e > 0 && e <= 1114111 && (e < 55296 || e > 57343) ? String.fromCodePoint(e) : t;
}
var l = /&(?:#(\d+)|#[xX]([0-9a-fA-F]+)|(\w+));/g, u = "ﬂ°", d = "¶ß";
function f(e) {
	let t = "", n = 0, r = e.indexOf(u);
	for (; r !== -1;) {
		let i = e.indexOf("¶", r + 2);
		if (i === -1) break;
		if (e[i + 1] === "ß") {
			let a = e[r + 2] === "°";
			t += e.slice(n, r) + (a ? "&#" : "&") + e.slice(r + (a ? 3 : 2), i) + ";", n = i + 2;
		}
		r = e.indexOf(u, i + 1);
	}
	return n === 0 ? e : t + e.slice(n);
}
function p(e) {
	return e.includes(d) && (e = f(e)), e.includes("&") && (e = e.replace(l, (e, t, n, r) => t ? c(Number(t), e) : n ? c(parseInt(n, 16), e) : s(r) ?? e)), e;
}
var m, h = /* @__PURE__ */ new Map();
function g(e, t) {
	let n = m, r = h;
	m = e, h = /* @__PURE__ */ new Map();
	try {
		return t();
	} finally {
		m = n, h = r;
	}
}
function _(e) {
	if (m === void 0) return "";
	let t = h.get(e);
	return t === void 0 && (t = m(e) ?? "", h.set(e, t)), t;
}
var v, y = /* @__PURE__ */ new Map();
function b(e, t) {
	let n = v, r = y;
	v = e, y = /* @__PURE__ */ new Map();
	try {
		return t();
	} finally {
		v = n, y = r;
	}
}
function x() {
	return v !== void 0;
}
function S(e) {
	return Number.isFinite(e) && e > 0;
}
function C(e, t) {
	if (v === void 0) return;
	let n = t + "\n" + e;
	if (y.has(n)) return y.get(n);
	let r = v(e, t) ?? void 0, i = r && S(r.width) && S(r.height) && typeof ("svg" in r ? r.svg : r.html) == "string" ? r : void 0;
	return y.set(n, i), i;
}
function w(e) {
	if (v === void 0) return e();
	let t = v;
	v = void 0;
	try {
		return e();
	} finally {
		v = t;
	}
}
var T = class {
	constructor(e) {
		this.message = e;
	}
	message;
}, E = 64;
function D(e, t, n) {
	t === "__proto__" ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		writable: !0,
		configurable: !0
	}) : e[t] = n;
}
var O = class {
	lines;
	i = 0;
	constructor(e) {
		this.lines = (e.includes("\r") ? e.replace(/\r\n?/g, "\n") : e).split("\n");
	}
	skipBlank() {
		for (; this.i < this.lines.length;) {
			let e = this.lines[this.i].trim();
			if (e !== "" && e[0] !== "#" && e !== "---") break;
			this.i++;
		}
	}
	indent() {
		let e = this.lines[this.i], t = 0;
		for (; t < e.length && e[t] === " ";) t++;
		if (e[t] === "	") throw Error("YAML: tabs are not allowed for indentation");
		return t;
	}
}, k = /^[-+]?(?:0|[1-9][0-9]*)$/, A = /^[-+]?0x[0-9a-fA-F]+$/, j = /^[-+]?0o[0-7]+$/, M = /^[-+]?0b[01]+$/, N = /^[-+]?(?:[0-9][0-9]*(?:\.[0-9]*)?|\.[0-9]+)(?:[eE][-+]?[0-9]+)?$/, P = /[\s#:,[\]{}&*!|>'"%@`]/;
function F(e) {
	return e === " " || e === "	" || e === "\n" || e === "\r";
}
function I(e) {
	let t = e[0], n, r;
	if (t === "\"" || t === "'") {
		let i = 1;
		for (;;) {
			if (i >= e.length) return null;
			let n = e[i];
			if (t === "\"" && n === "\\") i += 2;
			else if (n === t) {
				if (t === "\"" || e[i + 1] !== "'") break;
				i += 2;
			} else i++;
		}
		for (n = i + 1, r = n; F(e[r]);) r++;
		if (e[r] !== ":") return null;
	} else {
		if (t === void 0 || P.test(t) || t === "-" && (e.length < 2 || F(e[1]) || e[1] === ":" || e[1] === "#")) return null;
		for (r = 1; r < e.length && e[r] !== ":" && e[r] !== "#";) r++;
		if (e[r] !== ":") return null;
		for (n = r; F(e[n - 1]);) n--;
	}
	let i = r + 1;
	if (i < e.length && !F(e[i])) return null;
	for (; F(e[i]);) i++;
	return {
		key: e.slice(0, n),
		length: i
	};
}
function L(e) {
	let t = e.trim();
	if (t === "" || t === "~" || t === "null" || t === "Null" || t === "NULL") return null;
	if (t === "true" || t === "True" || t === "TRUE") return !0;
	if (t === "false" || t === "False" || t === "FALSE") return !1;
	let n = t[0];
	if (n !== "-" && n !== "+" && n !== "." && (n < "0" || n > "9")) return t;
	if (k.test(t) || N.test(t)) return Number(t);
	if (A.test(t) || j.test(t) || M.test(t)) {
		let e = t[0] === "-", n = Number(e || t[0] === "+" ? t.slice(1) : t);
		return e ? -n : n;
	}
	return /^[-+]?\.(?:inf|Inf|INF)$/.test(t) ? t[0] === "-" ? -1 / 0 : 1 / 0 : /^\.(?:nan|NaN|NAN)$/.test(t) ? NaN : t;
}
var R = {
	0: "\0",
	a: "\x07",
	b: "\b",
	t: "	",
	n: "\n",
	v: "\v",
	f: "\f",
	r: "\r",
	e: "\x1B",
	" ": " ",
	"\"": "\"",
	"/": "/",
	"\\": "\\",
	N: "",
	_: "\xA0",
	L: "\u2028",
	P: "\u2029"
};
function z(e) {
	if (!e.includes("\n")) return e;
	let t = e.split("\n"), n = t.length - 1;
	for (let e = 0; e <= n; e++) {
		let r = t[e], i = 0, a = r.length;
		if (e > 0) for (; i < a && (r.charCodeAt(i) === 32 || r.charCodeAt(i) === 9);) i++;
		if (e < n) for (; a > i && (r.charCodeAt(a - 1) === 32 || r.charCodeAt(a - 1) === 9);) a--;
		t[e] = r.slice(i, a);
	}
	return t.join("\n").replace(/\n+/g, (e) => e.length === 1 ? " " : "\n".repeat(e.length - 1));
}
function B(e) {
	if (!e.includes("\\")) return z(e);
	let t = "", n = z(e.replace(/\\\n[ \t]*/g, ""));
	for (let e = 0; e < n.length; e++) {
		let r = n[e];
		if (r !== "\\") {
			t += r;
			continue;
		}
		let i = n[++e];
		if (i === "x" || i === "u" || i === "U") {
			let r = i === "x" ? 2 : i === "u" ? 4 : 8;
			t += String.fromCodePoint(parseInt(n.slice(e + 1, e + 1 + r), 16)), e += r;
		} else if (i in R) t += R[i];
		else throw Error("YAML: unknown escape sequence");
	}
	return t;
}
function V(e, t, n) {
	for (; t < e.length;) {
		let r = e[t];
		if (r === " " || r === "\n" || r === "	" || r === "\r" || n && r === ",") t++;
		else if (r === "#" && (t === 0 || /\s/.test(e[t - 1]))) {
			let n = e.indexOf("\n", t);
			t = n === -1 ? e.length : n;
		} else break;
	}
	return t;
}
function H(e, t) {
	if (!t) throw Error("YAML: missed comma between flow collection entries");
	if (e === ",") throw Error("YAML: expected the node content, but found ','");
}
function U(e, t, n, r = 0) {
	if (r > E) throw Error("YAML: nesting is too deep");
	t = V(e, t, !1);
	let i = e[t];
	if (i === "{") {
		let n = {};
		t++;
		let i = !0;
		for (;;) {
			if (t = V(e, t, !1), t >= e.length) throw new T("YAML: unexpected end of the stream within a flow collection");
			if (e[t] === "}") return [n, t + 1];
			H(e[t], i);
			let a;
			[a, t] = U(e, t, ":,}", r + 1), t = V(e, t, !1);
			let o = null;
			e[t] === ":" && ([o, t] = U(e, t + 1, ",}", r + 1)), D(n, String(a), o), t = V(e, t, !1), i = e[t] === ",", i && t++;
		}
	}
	if (i === "[") {
		let n = [];
		t++;
		let i = !0;
		for (;;) {
			if (t = V(e, t, !1), t >= e.length) throw new T("YAML: unexpected end of the stream within a flow collection");
			if (e[t] === "]") return [n, t + 1];
			H(e[t], i);
			let a;
			[a, t] = U(e, t, ",]", r + 1), n.push(a), t = V(e, t, !1), i = e[t] === ",", i && t++;
		}
	}
	if (i === "\"") {
		let n = t + 1;
		for (; n < e.length && e[n] !== "\"";) n += e[n] === "\\" ? 2 : 1;
		if (n >= e.length) throw new T("YAML: unexpected end of the stream within a double quoted scalar");
		return [B(e.slice(t + 1, n)), n + 1];
	}
	if (i === "'") {
		let n = t + 1;
		for (; n < e.length;) {
			if (e[n] === "'") {
				if (e[n + 1] !== "'") break;
				n++;
			}
			n++;
		}
		if (n >= e.length) throw new T("YAML: unexpected end of the stream within a single quoted scalar");
		return [z(e.slice(t + 1, n)).replace(/''/g, "'"), n + 1];
	}
	let a = t;
	for (; a < e.length;) {
		let r = e[a];
		if (n.includes(r) && (r !== ":" || a + 1 >= e.length || /[\s,[\]{}]/.test(e[a + 1]))) break;
		if (r === "#" && a > t && /\s/.test(e[a - 1])) {
			let n = e.indexOf("\n", a);
			return [L(z(e.slice(t, a).trim())), n === -1 ? e.length : n];
		}
		a++;
	}
	return [L(z(e.slice(t, a).trim())), a];
}
function ee(e) {
	let t = "";
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (t) r === "\\" && t === "\"" ? n++ : r === t && (t = "");
		else if (r === "\"" || r === "'") t = r;
		else if (r === "#" && (n === 0 || e[n - 1] === " " || e[n - 1] === "	")) return e.slice(0, n);
	}
	return e;
}
function te(e, t, n) {
	let r = t[0] === ">", i = t.includes("-") ? "-" : t.includes("+") ? "+" : "", a = /[1-9]/.exec(t), o = a ? n + Number(a[0]) : -1, s = [];
	for (; e.i < e.lines.length;) {
		let t = e.lines[e.i];
		if (t.trim() === "") {
			s.push(""), e.i++;
			continue;
		}
		let r = t.length - t.trimStart().length;
		if (o === -1) {
			if (r <= n) break;
			o = r;
		}
		if (r < o) break;
		s.push(t.slice(o)), e.i++;
	}
	let c = 0;
	for (; s.length > 0 && s[s.length - 1] === "";) s.pop(), c++;
	let l;
	if (r) {
		l = "";
		for (let e = 0; e < s.length; e++) {
			let t = s[e];
			if (e > 0) {
				let n = s[e - 1];
				t === "" ? l += "\n" : n !== "" && (l += /^[ \t]/.test(n) || /^[ \t]/.test(t) ? "\n" : " ");
			}
			l += t;
		}
	} else l = s.join("\n");
	return s.length === 0 ? i === "+" ? "\n".repeat(c) : "" : i === "-" ? l : i === "+" ? l + "\n".repeat(c + 1) : l + "\n";
}
function W(e, t, n) {
	let r = t[0];
	if ((r === "|" || r === ">") && /^[|>][-+0-9]*\s*(?:#.*)?$/.test(t)) return te(e, t, n);
	if (r === "{" || r === "[" || r === "\"" || r === "'") {
		let n = e.i, r = t, i = 0, a = 1;
		for (;;) try {
			let [t, i] = U(r, 0, ""), a = 0;
			for (let e = r.indexOf("\n"); e !== -1 && e < i; e = r.indexOf("\n", e + 1)) a++;
			let o = r.indexOf("\n", i);
			if (ee(r.slice(i, o === -1 ? r.length : o)).trim() !== "") throw Error("YAML: unexpected content after a value");
			return e.i = n + a, t;
		} catch (t) {
			if (!(t instanceof T)) throw t;
			if (n + i >= e.lines.length) throw Error(t.message);
			let o = e.lines.slice(n + i, n + i + a);
			r += "\n" + o.join("\n"), i += o.length, a *= 2;
		}
	}
	let i = ee(t).trim();
	for (; e.i < e.lines.length;) {
		let t = e.lines[e.i];
		if (t.trim() === "") {
			let t = e.i;
			for (; t < e.lines.length && e.lines[t].trim() === "";) t++;
			if (t >= e.lines.length || e.lines[t].length - e.lines[t].trimStart().length <= n) break;
			i += "\n".repeat(t - e.i), e.i = t;
			continue;
		}
		if (t.length - t.trimStart().length <= n) break;
		let r = ee(t).trim();
		i += (i.endsWith("\n") ? "" : " ") + r, e.i++;
	}
	return L(i);
}
function ne(e, t, n = 0) {
	if (n > E) throw Error("YAML: nesting is too deep");
	if (e.skipBlank(), e.i >= e.lines.length) return null;
	let r = e.indent();
	if (r < t) return null;
	let i = e.lines[e.i].slice(r);
	if (i === "-" || i.startsWith("- ")) {
		let t = [];
		for (; e.i < e.lines.length && (e.skipBlank(), !(e.i >= e.lines.length || e.indent() !== r));) {
			let i = e.lines[e.i].slice(r);
			if (i !== "-" && !i.startsWith("- ")) break;
			let a = i.slice(1), o = a.length - a.trimStart().length + 1, s = ee(a).trim();
			s === "" ? (e.i++, t.push(ne(e, r + 1, n + 1))) : I(s) === null ? (e.i++, t.push(W(e, a.trim(), r))) : (e.lines[e.i] = " ".repeat(r + o) + a.trimStart(), t.push(ne(e, r + o, n + 1)));
		}
		return t;
	}
	if (I(i) === null) return e.i++, W(e, i.trim(), r - 1);
	let a = {};
	for (; e.i < e.lines.length && (e.skipBlank(), !(e.i >= e.lines.length));) {
		let t = e.indent();
		if (t < r) break;
		if (t > r) throw Error("YAML: bad indentation of a mapping entry");
		let i = e.lines[e.i].slice(r), o = I(i);
		if (!o) throw Error("YAML: can not read a block mapping entry");
		let s = String(U(o.key, 0, "")[0]), c = i.slice(o.length);
		if (e.i++, ee(c).trim() === "") {
			if (e.skipBlank(), e.i < e.lines.length) {
				let t = e.indent(), i = e.lines[e.i].slice(t), o = i === "-" || i.startsWith("- ");
				D(a, s, t > r || o && t === r ? ne(e, o ? r : r + 1, n + 1) : null);
			} else D(a, s, null);
		} else D(a, s, W(e, c.trim(), r));
	}
	return a;
}
function re(e) {
	let t = e.trim();
	if (t[0] === "{" || t[0] === "[") try {
		let [e, n] = U(t, 0, "");
		if (V(t, n, !1) === t.length) return e;
	} catch (e) {
		throw e instanceof T ? Error(e.message) : e;
	}
	let n = new O(e), r = ne(n, 0);
	if (n.skipBlank(), n.i < n.lines.length && n.lines[n.i].trim() !== "...") throw Error("YAML: end of the stream or a document separator is expected");
	return r;
}
function G(e) {
	return e < 128 ? e === 32 || e >= 9 && e <= 13 : e === 160 || e === 5760 || e >= 8192 && e <= 8202 || e === 8232 || e === 8233 || e === 8239 || e === 8287 || e === 12288 || e === 65279;
}
function K(e) {
	return e === 32 || e === 9;
}
function ie(e) {
	return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function q(e) {
	return e >= 48 && e <= 57;
}
function ae(e) {
	return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
function oe(e) {
	return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}
function J(e) {
	return e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e === 95;
}
var se = /^\s*%%(?!{)[^\n]+\n?/gm, ce = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, le = /<(\w+)([^>]*)>/g, ue = /="([^"]*)"/g, de = /* @__PURE__ */ new Set([
	"__proto__",
	"constructor",
	"prototype"
]);
function fe(e) {
	return (e.includes("%%") ? e.replace(se, "") : e).trimStart();
}
function pe(e) {
	return e === "\n" || e === "\r";
}
function me(e) {
	return e !== void 0 && /\s/.test(e);
}
function he(e) {
	let t = 0;
	for (; t < e.length && me(e[t]) && !pe(e[t]);) t++;
	let n = e.slice(0, t);
	if (!e.startsWith("---", t)) return;
	let r = [];
	for (let n = t + 3; n < e.length && me(e[n]); n++) pe(e[n]) && r.push(n);
	if (r.length === 0) return;
	let i = n + "---", a = (t) => {
		if (!pe(e[t]) || !e.startsWith(i, t + 1)) return -1;
		let n = -1;
		for (let r = t + 1 + i.length; r < e.length && me(e[r]); r++) pe(e[r]) && (n = r);
		return n;
	}, o = "\n" + i, s = -1;
	for (let t = e.lastIndexOf(o); t > r[0]; t = e.lastIndexOf(o, t - 1)) if (a(t) !== -1) {
		s = t;
		break;
	}
	if (s === -1) return;
	let c = r[0];
	for (let e of r) e < s && (c = e);
	let l = c + 1, u = l > 0 ? l - 1 : 0;
	for (let t = e.indexOf(o, u); t !== -1 && t <= s; t = e.indexOf(o, t + 1)) {
		if (t < l) continue;
		let r = a(t);
		if (r !== -1) return {
			indent: n,
			body: e.slice(l, t),
			length: r + 1
		};
	}
}
function ge(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function _e(e, t) {
	for (let n of Object.keys(t)) {
		if (de.has(n)) continue;
		let r = t[n], i = e[n];
		ge(r) && ge(i) ? _e(i, r) : e[n] = ge(r) ? _e({}, r) : r;
	}
	return e;
}
function ve(e, t) {
	if (!e.includes("%%{")) return e;
	let n = e.trim().replace(/'/g, "\"");
	ce.lastIndex = 0;
	let r;
	for (; (r = ce.exec(n)) !== null;) {
		r.index === ce.lastIndex && ce.lastIndex++;
		let e = r[1] ?? r[2];
		if (e === "wrap") t.wrap = !0;
		else if ((e === "init" || e === "initialize") && r[4]) try {
			let e = JSON.parse(r[4].trim());
			ge(e) && _e(t, e);
		} catch {}
	}
	return ce.lastIndex = 0, e.replace(ce, "");
}
function ye(e) {
	let t = e.includes("\r") ? e.replace(/\r\n?/g, "\n") : e, r = t.includes("<") ? t.lastIndexOf(">") : -1;
	r > 0 && (t = t.slice(0, r + 1).replace(le, (e, t, n) => "<" + t + n.replace(ue, "='$1'") + ">") + t.slice(r + 1));
	let i = {}, a, o = 0, s = t.includes("---") ? he(t) : void 0;
	if (s) {
		let e = s.indent ? s.body.split("\n").map((e) => e.startsWith(s.indent) ? e.slice(s.indent.length) : e).join("\n") : s.body, r;
		try {
			r = re(e);
		} catch (e) {
			throw new n(`Front matter is not valid YAML. ${e.message}`, "syntax");
		}
		if (ge(r) && (r.title && (a = String(r.title)), ge(r.config) && _e(i, r.config), r.displayMode)) {
			let e = ge(i.gantt) ? i.gantt : i.gantt = {};
			e.displayMode = String(r.displayMode);
		}
		for (let e = t.indexOf("\n"); e !== -1 && e < s.length; e = t.indexOf("\n", e + 1)) o++;
		t = t.slice(s.length);
	}
	return t = ve(t, i), {
		text: fe(t),
		title: a,
		config: i,
		withComments: t,
		lineOffset: o
	};
}
var be = /#\w+;/g, xe = /^\+?\d+$/, Se = /* @__PURE__ */ RegExp("[\\n\\r\u2028\u2029]", "g");
function Ce(e, t) {
	let n = e.indexOf(t);
	if (n === -1) return e;
	let r = "", i = 0;
	for (; n !== -1;) {
		Se.lastIndex = n;
		let a = Se.test(e) ? Se.lastIndex - 1 : e.length, o = !1, s = -1;
		for (let r = n + t.length; r < a; r++) {
			let t = e.charCodeAt(r);
			if (t === 58) o = !0;
			else if (t === 35) {
				if (o) {
					s = r;
					break;
				}
			} else G(t) && (o = !1);
		}
		if (s !== -1) {
			let t = e.lastIndexOf(";", a - 1);
			t > s && (r += e.slice(i, t), i = t + 1);
		}
		n = a >= e.length ? -1 : e.indexOf(t, a + 1);
	}
	return i === 0 ? e : r + e.slice(i);
}
function we(e) {
	return e.includes("#") ? Ce(Ce(e, "style"), "classDef").replace(be, (e) => {
		let t = e.substring(1, e.length - 1);
		return (xe.test(t) ? "ﬂ°°" : "ﬂ°") + t + "¶ß";
	}) : e;
}
var Te = "7q7q9vfgfgopij5b9999atg87q997q7qfgfgfgfgfgfgfgfgfgfg7q7qg8g8g8fgs7ijijk2k2ijgzlmk27qdwijfgn5k2lmijlmk2ijgzk2ijq8ijijgz7q7q7qd1fg99fgfgdwfgfg7qfgfg6666dw66n5fgfgfgfg99dw7qfgdwk2dwdwdw9a789ag8", Ee = "7q99d6fgfgopk26m9999atg87q997q7qfgfgfgfgfgfgfgfgfgfg9999g8g8g8gzr3k2k2k2k2ijgzlmk27qfgk2gzn5k2lmijlmk2ijgzk2ijq8ijijgz997q99g8fg99fggzfggzfg99gzgz7q7qfg7qopgzgzgzgzatfg99gzfglmfgfgdwat7satg8", De = 1.2;
function Oe(e) {
	let t = /* @__PURE__ */ new Uint16Array(95);
	for (let n = 0; n < 95; n++) t[n] = parseInt(e.substr(n * 2, 2), 36);
	return t;
}
var ke, Ae;
function je(e) {
	return e >= 4352 && e <= 4447 || e >= 11904 && e <= 42191 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65072 && e <= 65103 || e >= 65280 && e <= 65376 || e >= 65504 && e <= 65510 || e >= 55296 && e <= 56319;
}
function Me(e) {
	return e === 173 || e >= 768 && e <= 879 || e >= 8203 && e <= 8207 || e >= 56320 && e <= 57343 || e >= 65024 && e <= 65039 || e === 65279;
}
var Ne = { width(e, t, n) {
	let r = !!(n & 4), i = n & 24 ? t / De : t, a = n & 1 ? Ae ??= Oe(Ee) : ke ??= Oe(Te), o = 0;
	for (let t = 0; t < e.length; t++) {
		let n = e.charCodeAt(t);
		if (!(n < 32)) {
			if (n < 127) o += r ? 600 : a[n - 32];
			else {
				if (Me(n)) continue;
				je(n) ? o += r ? 1200 : 1e3 : o += r ? 600 : 580;
			}
		}
	}
	return o * i / 1e3;
} };
function Pe() {
	let e = globalThis;
	try {
		if (e.OffscreenCanvas) return new e.OffscreenCanvas(1, 1).getContext("2d");
		if (e.document) return e.document.createElement("canvas").getContext("2d");
	} catch {
		return null;
	}
	return null;
}
var Fe = 2e4;
function Ie() {
	let e = globalThis;
	return e.document?.fonts ?? e.fonts;
}
function Le(e, t, n) {
	try {
		return e?.check(t, n) ?? !0;
	} catch {
		return !0;
	}
}
function Re(e, t = "monospace") {
	let n = Pe();
	if (!n) return null;
	let r = /* @__PURE__ */ new Map(), i = "", a = Ie()?.size;
	return { width(o, s, c) {
		let l = Ie();
		l?.size !== a && (a = l?.size, r.clear());
		let u = c & 24 ? s / De : s, d = (c & 2 ? "italic " : "") + (c & 1 ? "bold " : "") + u + "px " + (c & 4 ? t : e), f = r.get(d);
		f || r.set(d, f = /* @__PURE__ */ new Map());
		let p = f.get(o);
		return p === void 0 && (d !== i && (n.font = i = d), p = n.measureText(o).width, Le(l, d, o) && (f.size >= Fe && f.clear(), f.set(o, p))), p;
	} };
}
var ze = /* @__PURE__ */ new Map();
function Be(e = "sans-serif", t = "monospace") {
	let n = e + "\n" + t, r = ze.get(n);
	return r || (r = Re(e, t) ?? Ne, ze.set(n, r)), r;
}
Math.random().toString(36).slice(2, 7);
var Ve = /* @__PURE__ */ new Map();
function He(...e) {
	for (let t of e) Ve.set(t.type, t);
}
var Ue = 5e4, We = 4e6, Ge = 5e3;
function Ke(e) {
	try {
		return e();
	} catch (e) {
		throw e instanceof RangeError ? new n("Diagram is nested too deeply.", "limit") : e;
	}
}
function qe(e, t) {
	try {
		return t();
	} catch (t) {
		throw t instanceof RangeError ? new n("Diagram is nested too deeply.", "limit", e) : (t instanceof n && (t.type ??= e.type, t.mermaidType ??= e.mermaidType), t);
	}
}
var Je = /* @__PURE__ */ new WeakMap();
function Ye(e, r = Ue, i = Ge, a) {
	if (e.length > r) throw new n(`Diagram source is longer than the limit of ${r} characters.`, "limit");
	let o = ye(e), s = t(o.text);
	if (s === null) throw new n("No diagram type detected for the given text.", "unsupported-diagram");
	let c = Ve.get(s.type);
	if (c === void 0) throw new n(`Diagram type "${s.type}" is not supported yet.`, "unsupported-diagram", s);
	let l = a ? {
		...a,
		...o.config
	} : o.config, u = c.keepComments ? o.withComments : o.text, d = qe(s, () => c.parse(we(u) + "\n", l, o.title, o.lineOffset, { maxEdges: i }));
	return {
		...s,
		diagram: c,
		model: d,
		config: l
	};
}
function Xe(e, t) {
	if (typeof e == "string") return Ye(e, t.limit, t.maxEdges, t.config);
	let n = Je.get(e);
	if (n === void 0) throw TypeError("render() takes diagram text or a model that parse() returned.");
	return n;
}
function Ze(e, t = {}) {
	return Ke(() => {
		let { type: r, mermaidType: i, diagram: a, model: o, config: s } = Xe(e, t), c = s[a.section ?? r], l = typeof c == "object" && !!c && !Array.isArray(c) && c.useMaxWidth === !1, u = t.responsive ?? !l, d = t.icons, f = d && ((e) => d(p(e))), m = qe({
			type: r,
			mermaidType: i
		}, () => b(a.math ? t.math : void 0, () => g(f, () => a.render(o, s, {
			...t,
			responsive: u,
			icons: f
		})))), h = t.outputLimit ?? We;
		if (m.svg.length > h) throw new n(`Diagram output is longer than the limit of ${h} characters.`, "limit", {
			type: r,
			mermaidType: i
		});
		for (let e of m.links) e.id = p(e.id);
		return {
			type: r,
			mermaidType: i,
			...m
		};
	});
}
var Qe = /[&<>"\x00-\x08\x0b\x0c\x0e-\x1f\x7f\ud800-\udfff\ufffe\uffff]/u, $e = /[&<>"]|[\x00-\x08\x0b\x0c\x0e-\x1f\x7f\ud800-\udfff\ufffe\uffff]+/gu, et = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;"
}, tt = /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f\ud800-\udfff\ufffe\uffff]/u;
function nt(e) {
	return Qe.test(e) ? e.replace($e, (e) => et[e] ?? "") : e;
}
function Y(e) {
	return nt(p(e));
}
var rt = [];
for (let e = 0; e < 100; e++) rt.push(e === 0 ? "" : e % 10 == 0 ? "." + e / 10 : "." + (e < 10 ? "0" + e : e));
function X(e) {
	let t = Math.round(e * 100);
	if (t === 0) return "0";
	if (t > 0) {
		if (t < 1e11) {
			let e = Math.floor(t / 100);
			return e + rt[t - e * 100];
		}
	} else if (t > -1e11) {
		let e = -t, n = Math.floor(e / 100);
		return "-" + n + rt[e - n * 100];
	}
	return String(t / 100);
}
function Z(e, t, n, r, i) {
	let a = e.lines;
	if (a.length === 0) return "";
	let o = e.lineHeight, s = e.heights, c = e.size * .35, l = n - e.height / 2, u = a.length === 1 && a[0].length === 1 ? a[0][0] : void 0;
	if (u && u.icon === void 0 && u.math === void 0 && u.style === 0) return `<text${r} x="${X(t)}" y="${X(l + o / 2 + c)}" text-anchor="middle">${nt(u.text)}</text>`;
	let d = vt(e), f = r, p;
	r = yt(r, d);
	let m = "", h = "";
	for (let n = 0; n < a.length; n++) {
		let r = a[n], u = s ? s[n] : o, g = l + u / 2, _ = g + c, v = !1;
		for (let e of r) (e.icon !== void 0 || e.math) && (v = !0);
		if (v) {
			let a = t - e.widths[n] / 2;
			for (let t of r) {
				if (t.math) {
					let n = `x="${X(a)}" y="${X(g - t.math.height / 2)}" width="${X(t.math.width)}" height="${X(t.math.height)}"`;
					p ??= lt(f), h += p.halo === void 0 ? ut(t.math, n, e.size, p.attrs) : `<rect ${n} rx="2" fill="${p.halo}"/>`;
				} else if (t.icon !== void 0) {
					let n = e.size * 1.1, r = i?.(t.icon) ?? "";
					h += `<svg class="pele-icon" data-icon="${Y(t.icon)}" x="${X(a)}" y="${X(g - n / 2)}" width="${X(n)}" height="${X(n)}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${r}</svg>`;
				} else t.text !== "" && (m += `<tspan x="${X(a)}" y="${X(_)}" text-anchor="start"${_t(t.style & ~d)}>${nt(t.text)}</tspan>`);
				a += t.width;
			}
		} else {
			for (let e = 0; e < r.length; e++) {
				let n = r[e], i = e === 0 ? ` x="${X(t)}" y="${X(_)}"` : "";
				m += `<tspan${i}${_t(n.style & ~d)}>${nt(n.text)}</tspan>`;
			}
			r.length === 0 && (m += `<tspan x="${X(t)}" y="${X(_)}"> </tspan>`);
		}
		l += u;
	}
	return `<text${r} text-anchor="middle" xml:space="preserve">${m}</text>${h}`;
}
var it = / fill="([^"]*)"/, at = / stroke="([^"]*)"/, ot = / style="([^"]*)"/, st = /(?:^|;)\s*fill:([^;]*)/, ct = /(?:^|;)\s*opacity:([^;]*)/;
function lt(e) {
	let t = ot.exec(e)?.[1] ?? "", n = (st.exec(t)?.[1] ?? it.exec(e)?.[1] ?? "").trim();
	if (n === "none") return {
		attrs: "",
		halo: at.exec(e)?.[1] ?? "none"
	};
	let r = ct.exec(t)?.[1].trim();
	return { attrs: (n === "" ? "" : ` color="${n}"`) + (r ? ` opacity="${r}"` : "") };
}
function ut(e, t, n, r) {
	return "svg" in e ? `<svg class="pele-math" ${t} overflow="visible"${r}>${e.svg}</svg>` : `<foreignObject class="pele-math" ${t} overflow="visible"${r}><div xmlns="http://www.w3.org/1999/xhtml" style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:${X(n)}px;line-height:normal;white-space:nowrap">${e.html}</div></foreignObject>`;
}
var dt = " font-weight=\"var(--_w)\"", ft = " font-style=\"italic\"", pt = " text-decoration=\"underline\"", mt = " font-family=\"var(--_fm)\"", ht = " baseline-shift=\"sub\" font-size=\"smaller\"", gt = " baseline-shift=\"super\" font-size=\"smaller\"";
function _t(e) {
	return (e & 1 ? dt : "") + (e & 2 ? ft : "") + (e & 4 ? mt : "") + (e & 32 ? pt : "") + (e & 8 ? ht : e & 16 ? gt : "");
}
function vt(e) {
	let t = 7, n = !1;
	for (let r of e.lines) for (let e of r) e.icon !== void 0 || e.text === "" || (t &= e.style, n = !0);
	return n ? t : 0;
}
function yt(e, t) {
	return e + (t & 1 && !e.includes(" font-weight=\"") ? dt : "") + (t & 2 && !e.includes(" font-style=\"") ? ft : "") + (t & 4 && !e.includes(" font-family=\"") ? mt : "");
}
var bt = "about:blank", xt = /^([^\w]*)(javascript|data|vbscript)/im, St = /&#(\w+)(^\w|;)?/g, Ct = /&(newline|tab);/gi, wt = /[\u0000-\u001F\u007F-\u009F -‍﻿\uD800-\uDFFF\uFFFE\uFFFF]/gimu, Tt = /^.+(:|&colon;)/gim, Et = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g;
function Dt(e) {
	try {
		return decodeURIComponent(e);
	} catch {
		return e;
	}
}
function Ot(e) {
	if (!e) return bt;
	let t = Dt(e.trim()), n, r = 0;
	do {
		if (++r > 32) return bt;
		t = t.replace(wt, "").replace(St, (e, t) => String.fromCharCode(t)).replace(Ct, "").replace(wt, "").replace(Et, "").trim(), t = Dt(t), n = t.match(wt) || t.match(St) || t.match(Ct) || t.match(Et);
	} while (n && n.length > 0);
	if (!t) return bt;
	if (t[0] === "." || t[0] === "/") return t;
	let i = t.trimStart(), a = i.match(Tt);
	if (!a) return t;
	let o = a[0].toLowerCase().trim();
	if (xt.test(o)) return bt;
	let s = i.replace(/\\/g, "/");
	if (o === "mailto:" || o.includes("://")) return s;
	if (o === "http:" || o === "https:") {
		let e;
		try {
			e = new URL(s);
		} catch {
			return bt;
		}
		return e.protocol = e.protocol.toLowerCase(), e.hostname = e.hostname.toLowerCase(), e.toString();
	}
	return s;
}
function kt(e) {
	return Ot(p(e));
}
var At = [
	"http",
	"https",
	"mailto",
	"tel"
], jt = ["http", "https"], Mt = /^([a-z][a-z0-9+.-]*):/i, Nt = /^[\\/]{2}/;
function Pt(e, t) {
	if (Nt.test(e)) return;
	let n = Mt.exec(e);
	return !n || t.includes(n[1].toLowerCase()) ? e : void 0;
}
function Ft(e, t) {
	return t.links === !1 ? void 0 : Pt(e, t.linkSchemes ?? At);
}
function It(e, t) {
	return t.images === !1 ? void 0 : Pt(e, t.imageSchemes ?? jt);
}
var Lt = new RegExp(tt.source, "gu");
function Rt(e, t) {
	let n = Ot(e);
	return n === bt || Ft(n, t) === void 0 ? !1 : Ft(e.replace(Lt, "").replace(/[\t\n\r]/g, "").replace(/^[\x00-\x20]+/, ""), t) !== void 0;
}
function zt(e, t, n, r, i, a = "") {
	let o = Ft(t, i);
	return o === void 0 ? e : (r.push({
		id: n,
		href: o,
		internal: !1
	}), `<a href="${nt(o)}"${a}${Bt(i)}>${e}</a>`);
}
function Bt(e) {
	let t = e.linkRel ?? "noopener";
	return t ? ` rel="${nt(t)}"` : "";
}
var Vt = [
	[
		"rect",
		"proc",
		"process",
		"rectangle",
		"squareRect"
	],
	[
		"rounded",
		"event",
		"roundedRect"
	],
	[
		"stadium",
		"terminal",
		"pill"
	],
	[
		"fr-rect",
		"subprocess",
		"subproc",
		"framed-rectangle",
		"subroutine"
	],
	[
		"cyl",
		"db",
		"database",
		"cylinder"
	],
	["datastore", "data-store"],
	["folder", "directory"],
	["bucket"],
	["console"],
	["browser"],
	["person"],
	["circle", "circ"],
	["bang"],
	["cloud"],
	[
		"diam",
		"decision",
		"diamond",
		"question"
	],
	[
		"hex",
		"hexagon",
		"prepare"
	],
	[
		"lean-r",
		"lean-right",
		"in-out",
		"lean_right"
	],
	[
		"lean-l",
		"lean-left",
		"out-in",
		"lean_left"
	],
	[
		"trap-b",
		"priority",
		"trapezoid-bottom",
		"trapezoid"
	],
	[
		"trap-t",
		"manual",
		"trapezoid-top",
		"inv-trapezoid",
		"inv_trapezoid"
	],
	[
		"dbl-circ",
		"double-circle",
		"doublecircle"
	],
	["text"],
	[
		"notch-rect",
		"card",
		"notched-rectangle"
	],
	[
		"lin-rect",
		"lined-rectangle",
		"lined-process",
		"lin-proc",
		"shaded-process"
	],
	[
		"sm-circ",
		"start",
		"small-circle",
		"stateStart"
	],
	[
		"fr-circ",
		"stop",
		"framed-circle",
		"stateEnd"
	],
	[
		"fork",
		"join",
		"forkJoin"
	],
	["hourglass", "collate"],
	[
		"brace",
		"comment",
		"brace-l"
	],
	["brace-r"],
	["braces"],
	[
		"bolt",
		"com-link",
		"lightning-bolt"
	],
	["doc", "document"],
	["delay", "half-rounded-rectangle"],
	[
		"h-cyl",
		"das",
		"horizontal-cylinder"
	],
	[
		"lin-cyl",
		"disk",
		"lined-cylinder"
	],
	[
		"curv-trap",
		"curved-trapezoid",
		"display"
	],
	[
		"div-rect",
		"div-proc",
		"divided-rectangle",
		"divided-process"
	],
	[
		"tri",
		"extract",
		"triangle"
	],
	[
		"win-pane",
		"internal-storage",
		"window-pane"
	],
	[
		"f-circ",
		"junction",
		"filled-circle"
	],
	[
		"notch-pent",
		"loop-limit",
		"notched-pentagon"
	],
	[
		"flip-tri",
		"manual-file",
		"flipped-triangle"
	],
	[
		"sl-rect",
		"manual-input",
		"sloped-rectangle"
	],
	[
		"docs",
		"documents",
		"st-doc",
		"stacked-document"
	],
	[
		"st-rect",
		"procs",
		"processes",
		"stacked-rectangle"
	],
	[
		"bow-rect",
		"stored-data",
		"bow-tie-rectangle"
	],
	[
		"cross-circ",
		"summary",
		"crossed-circle"
	],
	["tag-doc", "tagged-document"],
	[
		"tag-rect",
		"tagged-rectangle",
		"tag-proc",
		"tagged-process"
	],
	["flag", "paper-tape"],
	["odd", "rect_left_inv_arrow"],
	["lin-doc", "lined-document"]
], Ht = /* @__PURE__ */ "state.choice.note.composite.rectWithTitle.labelRect.block_arrow.collapsedGroup.iconSquare.iconCircle.icon.iconRounded.imageSquare.anchor.kanbanItem.mindmapCircle.defaultMindmapNode.classBox.erBox.requirementBox.usecaseActor.usecaseActorHollow.usecaseActorAwesome.usecaseActorIcon.usecaseBusiness.usecaseEllipse.usecaseJsonTable".split("."), Ut = /* @__PURE__ */ new Map([
	["square", "rect"],
	["round", "rounded"],
	["ellipse", "ellipse"],
	["hexagon", "hex"],
	["diamond", "diam"]
]), Wt = /* @__PURE__ */ new Map();
for (let e of Vt) for (let t of e) Wt.set(t, e[0]);
for (let e of Ht) Wt.set(e, e);
function Gt(e) {
	return Wt.has(e);
}
function Kt(e) {
	return e === void 0 ? "rect" : Ut.get(e) ?? Wt.get(e) ?? "rect";
}
var qt = /* @__PURE__ */ new Map([
	["task", "roundedRect"],
	["tool", "subroutine"],
	["input", "lean-right"],
	["decision", "diamond"],
	["refdoc", "lin-doc"],
	["action", "hexagon"],
	["round", "rect"]
]), Jt = /* @__PURE__ */ new Set(/* @__PURE__ */ "doc.stadium.terminal.circle.trapezoid.inv_trapezoid.inv-trapezoid.doublecircle.double-circle.typeDeclaration.procs.lean_left.lean-left.in-out.cylinder.ellipse.odd.tag-rect.tagged-rectangle.delay.half-rounded-rectangle.lin-rect.lined-rectangle.win-pane.window-pane.curv-trap.curved-trapezoid".split(".")), Yt = /* @__PURE__ */ new Set([
	"roundedRect",
	"subroutine",
	"subprocess",
	"subproc",
	"framed-rectangle",
	"lean-right",
	"diamond",
	"lin-doc",
	"lined-document",
	"hexagon",
	"hex",
	"connector",
	"collapsedGroup"
]), Xt = "roundedRect";
function Zt(e) {
	return e && (qt.get(e) ?? e);
}
function Qt(e) {
	return Gt(e) || e === "constructor";
}
function $t(e, t) {
	for (let n of e) n.isGroup || (n.shape && n.shape !== "squareRect" && n.shape !== "rect" || (n.shape = Xt), Jt.has(n.shape) ? (t.emitError("SHAPE_REMOVED", `shape "${n.shape}" was removed in v0.8.1, using "${Xt}"`, { nodeId: n.id }), n.shape = Xt) : Yt.has(n.shape) || (t.emitWarning("SHAPE_UNSUPPORTED", `shape "${n.shape}" is not supported, using "${Xt}"`, { nodeId: n.id }), n.shape = Xt));
}
var en = /* @__PURE__ */ new Set([
	"shape",
	"view",
	"icon",
	"img",
	"form",
	"pos",
	"w",
	"h",
	"class",
	"style",
	"labelType"
]), tn = /* @__PURE__ */ new Set([
	"subroutine",
	"subprocess",
	"subproc",
	"framed-rectangle",
	"tool"
]);
function nn(e) {
	return tn.has(e.type);
}
function rn(e) {
	return e === "markdown" || e === "string" || e === "text" ? e : "markdown";
}
function an(e) {
	return e.startsWith("\"") && e.endsWith("\"") ? e.substring(1, e.length - 1) : e;
}
function on(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function sn(e) {
	let t = (e) => Array.isArray(e) ? [] : on(e) ? {} : e, n = t(e), r = [[e, n]];
	for (; r.length > 0;) {
		let [e, n] = r.pop();
		if (Array.isArray(e)) for (let i of e) {
			let e = t(i);
			n.push(e), typeof i == "object" && i && r.push([i, e]);
		}
		else if (on(e)) for (let i of Object.keys(e)) {
			if (i === "__proto__" || i === "constructor" || i === "prototype") continue;
			let a = e[i], o = t(a);
			n[i] = o, typeof a == "object" && a && r.push([a, o]);
		}
	}
	return n;
}
function cn(e, t) {
	return Object.assign(e ?? {}, t);
}
var ln = /:\s*[>|][\d+-]*\s*$/, un = /,([\t ]*)$/;
function dn(e) {
	let t = !1, n = !1, r = 0, i, a = [];
	for (let o of e.split("\n")) {
		if (i !== void 0) {
			let e = o.length - o.trimStart().length;
			if (o.trim() === "" || e > i) {
				a.push(o);
				continue;
			}
			i = void 0;
		}
		let e = -1;
		for (let i = 0; i < o.length; i++) {
			let a = o[i];
			if (n) a === "\\" ? i++ : a === "\"" && (n = !1);
			else if (t) a === "'" && (t = !1);
			else if (a === "\"") n = !0;
			else if (a === "'") t = !0;
			else if (a === "#" && (i === 0 || o[i - 1] === " " || o[i - 1] === "	")) {
				e = i;
				break;
			} else a === "[" || a === "{" ? r++ : (a === "]" || a === "}") && (r = Math.max(0, r - 1));
		}
		if (t || n || r > 0) {
			a.push(o);
			continue;
		}
		let s = e >= 0 ? o.slice(0, e) : o, c = e >= 0 ? o.slice(e) : "";
		ln.test(s) ? (i = o.length - o.trimStart().length, a.push(o)) : a.push(s.replace(un, "$1") + c);
	}
	return a.join("\n");
}
function fn(e, t) {
	if (e === "arrow_point" && t === "normal") return "sequence";
	if (e === "arrow_cross" && t === "normal") return "failure";
	if (e === "arrow_open" && t === "dotted") return "reference";
}
function pn(e) {
	let t = e.trim(), n = t.slice(0, -1), r = "arrow_open";
	switch (t.slice(-1)) {
		case "x":
			r = "arrow_cross";
			break;
		case ">":
			r = "arrow_point";
			break;
		case "-":
		case ".": n = t;
	}
	let i = "normal", a = n.length - 1, o = 0;
	for (let e = 0; e < n.length; e++) n[e] === "." && o++;
	return o > 0 && (i = "dotted", a = o), {
		type: r,
		stroke: i,
		length: a
	};
}
function mn(e) {
	if (!e) return;
	let t = {}, n = !1;
	for (let r of Object.keys(e)) en.has(r) || (t[r] = e[r], n = !0);
	return n ? t : void 0;
}
var hn = class {
	type = "agentflow";
	direction;
	nodes = /* @__PURE__ */ new Map();
	edges = [];
	subgraphs = [];
	connectors = /* @__PURE__ */ new Map();
	classes = /* @__PURE__ */ new Map();
	tooltips = /* @__PURE__ */ new Map();
	defaultEdgeStyle;
	defaultInterpolate;
	mappings = [];
	diagnostics = [];
	title;
	accTitle;
	accDescr;
	lineOffset;
	subgraphLookup = /* @__PURE__ */ new Map();
	globalNodes = /* @__PURE__ */ new Set();
	members = /* @__PURE__ */ new Set();
	edgeById = /* @__PURE__ */ new Map();
	pairCount = /* @__PURE__ */ new Map();
	subCount = 0;
	bareMappings = /* @__PURE__ */ new Set();
	firstMapping = /* @__PURE__ */ new Map();
	reported = /* @__PURE__ */ new Map();
	options;
	constructor(e = {}) {
		this.options = e, this.lineOffset = e.lineOffset ?? 0;
	}
	metadata(e, t, r) {
		let i = t.includes("\n"), a;
		try {
			a = re(i ? t + "\n" : "{\n" + t + "\n}");
		} catch (o) {
			let s = i ? dn(t) : t, c;
			if (s !== t) try {
				c = re(s + "\n");
			} catch {
				c = void 0;
			}
			if (c === void 0) {
				let t = r ? ` (${r.first_line + this.lineOffset}:${r.first_column + 1})` : "";
				throw new n(`Metadata of "${e}" is not valid YAML. ${o.message}${t}`, "syntax", {
					type: "agentflow",
					line: r ? r.first_line + this.lineOffset : 0,
					column: r ? r.first_column + 1 : 0
				});
			}
			a = c;
		}
		return sn(a ?? {});
	}
	shapeError(e, t) {
		return new n(e, "semantic", {
			type: "agentflow",
			line: t ? t.first_line + this.lineOffset : 0,
			column: t ? t.first_column + 1 : 0
		});
	}
	addVertex(e, t, n, r, i, a, o = {}, s, c) {
		if (!e || e.trim().length === 0) return;
		let l, u, d;
		s !== void 0 && (l = this.metadata(e, s, c), on(l) && (u = l, typeof l.shape == "string" && (d = l.shape, l.shape = Zt(l.shape))));
		let f = this.subgraphLookup.get(e);
		if (f && l) {
			f.metadata = cn(f.metadata, l);
			return;
		}
		let p = this.connectors.get(e);
		if (p && l) {
			p.metadata = cn(p.metadata, l);
			return;
		}
		if (e === "connectors") return;
		let m = this.edgeById.get(e);
		if (m) {
			u?.animate !== void 0 && (m.animate = u.animate), u?.animation !== void 0 && (m.animation = u.animation), u?.curve !== void 0 && (m.interpolate = u.curve), l && (m.metadata = cn(m.metadata, l));
			return;
		}
		let h = this.nodes.get(e);
		if (h === void 0 && (h = {
			id: e,
			labelType: "text",
			styles: [],
			classes: []
		}, this.nodes.set(e, h)), t === void 0 ? h.text === void 0 && (h.text = e) : (h.labelType = t.type, h.text = an(t.text.trim())), n !== void 0 && (h.type = n), r != null) for (let e of r) h.styles.push(e);
		if (i != null) for (let e of i) h.classes.push(e);
		if (a !== void 0 && (h.dir = a), h.props === void 0 ? h.props = o : o !== void 0 && Object.assign(h.props, o), l && (h.metadata = cn(h.metadata, l), u !== void 0)) {
			if (u.shape) {
				let e = d ?? u.shape;
				if (typeof e != "string") throw this.shapeError(`No such shape: ${JSON.stringify(e)}.`, c);
				if (e !== e.toLowerCase() || e.includes("_")) throw this.shapeError(`No such shape: ${e}. Shape names should be lowercase.`, c);
				let t = u.shape;
				if (!Qt(t)) throw this.shapeError(`No such shape: ${t}.`, c);
				h.type = t;
			}
			u.label && (h.text = String(u.label), h.labelType = rn(u.labelType));
		}
	}
	addSingleLink(e, t, r, i) {
		let a = {
			start: e,
			end: t,
			type: void 0,
			text: "",
			labelType: "text",
			classes: [],
			isUserDefinedId: !1,
			interpolate: this.defaultInterpolate
		}, o = r?.text;
		o !== void 0 && (a.text = an(o.text.trim()), a.labelType = rn(o.type)), r !== void 0 && (a.type = r.type, a.stroke = r.stroke, a.length = r.length > 10 ? 10 : r.length, r.edgeSemantic && (a.edgeSemantic = r.edgeSemantic));
		let s = e + "\0" + t, c = this.pairCount.get(s) ?? 0;
		i && !this.edgeById.has(i) ? (a.id = i, a.isUserDefinedId = !0) : a.id = `L_${e}_${t}_${c === 0 ? 0 : c + 1}`;
		let l = this.options.maxEdges;
		if (l !== void 0 && this.edges.length >= l) throw new n(`Edge limit exceeded. ${this.edges.length} edges found, but the limit is ${l}.`, "limit", { type: "agentflow" });
		this.edges.push(a), this.pairCount.set(s, c + 1), this.edgeById.has(a.id) || this.edgeById.set(a.id, a);
	}
	addLink(e, t, n) {
		let r = typeof n?.id == "string" ? n.id.replace("@", "") : void 0, i = e[e.length - 1], a = t[0];
		for (let o of e) for (let e of t) this.addSingleLink(o, e, n, o === i && e === a ? r : void 0);
	}
	updateLinkInterpolate(e, t) {
		for (let n of e) n === "default" ? this.defaultInterpolate = t : this.edgeAt(n).interpolate = t;
	}
	updateLink(e, t) {
		for (let n of e) {
			if (n === "default") {
				this.defaultEdgeStyle = t;
				continue;
			}
			let e = this.edgeAt(n);
			e.style = t, t.length > 0 && !t.some((e) => e?.startsWith("fill")) && t.push("fill:none");
		}
	}
	edgeAt(e) {
		let t = this.edges[Number(e)];
		if (t === void 0) throw new n(`The index ${e} for linkStyle is out of bounds. Valid indices for linkStyle are between 0 and ${this.edges.length - 1}. (Help: Ensure that the index is within the range of existing edges.)`, "semantic", { type: "agentflow" });
		return t;
	}
	addClass(e, t) {
		let n = t.join().replace(/\\,/g, "§§§").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
		for (let t of e.split(",")) {
			let e = this.classes.get(t);
			e === void 0 && (e = {
				id: t,
				styles: [],
				textStyles: []
			}, this.classes.set(t, e));
			for (let t of n) t.includes("color") && e.textStyles.push(t.replace("fill", "bgFill")), e.styles.push(t);
		}
	}
	setDirection(e) {
		let t = e.trim();
		t.includes("<") && (t = "RL"), t.includes("^") && (t = "BT"), t.includes(">") && (t = "LR"), t.includes("v") && (t = "TB"), t === "TD" && (t = "TB"), this.direction = t;
	}
	setClass(e, t) {
		for (let n of e.split(",")) this.nodes.get(n)?.classes.push(t), this.edgeById.get(n)?.classes.push(t), this.subgraphLookup.get(n)?.classes.push(t);
	}
	setTooltip(e, t) {
		if (t !== void 0) for (let n of e.split(",")) this.tooltips.set(n, t);
	}
	setLink(e, t, n) {
		let r = t.trim();
		for (let t of e.split(",")) {
			let e = this.nodes.get(t);
			e !== void 0 && (e.link = r ? kt(r) : void 0, e.linkTarget = n);
		}
		this.setClass(e, "clickable");
	}
	setClickEvent(e, t, n) {
		this.setClass(e, "clickable");
	}
	setAccTitle(e) {
		this.accTitle = e.replace(/^\s+/g, "");
	}
	setAccDescription(e) {
		this.accDescr = e.replace(/\n\s+/g, "\n");
	}
	addSubGraph(e, t, n, r) {
		let i = e?.text?.trim(), a = n?.text || "";
		e !== void 0 && e === n && /\s/.test(a) && (i = void 0);
		let o = /* @__PURE__ */ new Set(), s = [], c;
		for (let e of t) if (typeof e == "string") e.trim() !== "" && !o.has(e) && (o.add(e), s.push(e));
		else if (Array.isArray(e)) for (let t of e) t.trim() !== "" && !o.has(t) && (o.add(t), s.push(t));
		else c = e.value;
		c ??= this.options.inheritDir ? this.direction ?? this.options.direction : void 0, i ??= "subGraph" + this.subCount, this.subCount++;
		let l = this.members, u = s.filter((e) => e !== i && !this.globalNodes.has(e) && !l.has(e));
		for (let e of u) l.add(e);
		let d = this.subgraphLookup.get(i);
		if (d) {
			for (let e of u) d.nodes.push(e);
			return a.trim() && (d.title = a.trim()), c && (d.dir = c), i;
		}
		let f = {
			id: i,
			nodes: u,
			title: a.trim(),
			classes: [],
			dir: c,
			labelType: rn(n?.type),
			type: "flow"
		};
		return this.subgraphs.push(f), this.subgraphLookup.set(i, f), i;
	}
	addGlobal(e) {
		let t = !1, n = (e) => {
			let n = e.trim();
			n !== "" && (this.globalNodes.add(n), this.members.delete(n) && (t = !0));
		};
		for (let t of e) if (typeof t == "string") n(t);
		else if (Array.isArray(t)) for (let e of t) n(e);
		if (t) for (let e of this.subgraphs) e.nodes = e.nodes.filter((e) => !this.globalNodes.has(e));
	}
	addConnector(e, t) {
		let n = e?.text?.trim();
		if (!n) return "";
		let r = t?.text?.trim() ?? "", i = this.connectors.get(n);
		if (i) r.length > 0 && (i.text = r);
		else {
			let e = {
				id: n,
				labelType: "text",
				styles: [],
				classes: [],
				isConnector: !0,
				text: r.length > 0 ? r : n
			};
			this.connectors.set(n, e), this.nodes.set(n, e);
		}
		return n;
	}
	destructLink(e, t) {
		let n = pn(e);
		return t && (t.includes(".") ? "dotted" : "normal") !== n.stroke ? {
			type: "INVALID",
			stroke: "INVALID"
		} : {
			...n,
			edgeSemantic: fn(n.type, n.stroke)
		};
	}
	subgraph(e) {
		return this.subgraphLookup.get(e);
	}
	vertexKind(e) {
		if (nn(e)) return "tool";
		let t = Zt(e.type);
		return t === "hexagon" || t === "hex" ? "action" : t === "lean-right" || t === "lean_right" ? "input" : t === "lin-doc" || t === "lined-document" ? "refdoc" : t === "diamond" ? "decision" : "task";
	}
	semanticModel() {
		let e = [], t = [];
		for (let [n, r] of this.nodes) {
			if (this.subgraphLookup.has(n)) continue;
			let i = mn(r.metadata);
			if (r.isConnector) {
				let e = { id: n };
				r.text !== void 0 && r.text !== n && (e.title = r.text), i && (e.metadata = i), t.push(e);
				continue;
			}
			let a = { id: n };
			r.text !== void 0 && (a.label = r.text);
			let o = Zt(r.type);
			o !== void 0 && (a.shape = o), a.vertexKind = this.vertexKind(r), i && (a.metadata = i), e.push(a);
		}
		let n = {
			vertices: e,
			edges: this.edges.map((e) => {
				let t = {
					start: e.start,
					end: e.end
				};
				return e.id !== void 0 && (t.id = e.id), e.text.length > 0 && (t.label = e.text), e.type !== void 0 && (t.type = e.type), e.stroke !== void 0 && (t.stroke = e.stroke), e.edgeSemantic !== void 0 && (t.edgeSemantic = e.edgeSemantic), e.length !== void 0 && (t.length = e.length), e.metadata && Object.keys(e.metadata).length > 0 && (t.metadata = { ...e.metadata }), t;
			}),
			subGraphs: this.subgraphs.map((e) => {
				let t = {
					id: e.id,
					nodes: [...e.nodes],
					type: e.type,
					title: e.title
				};
				e.dir !== void 0 && (t.direction = e.dir);
				let n = mn(e.metadata);
				return n && (t.metadata = n), t;
			}),
			connectors: t,
			diagnostics: this.diagnostics
		};
		return this.direction !== void 0 && (n.direction = this.direction), n;
	}
	position(e) {
		let t = e?.first_line ?? 0, n = e?.first_column ?? 0;
		return {
			startLine: t + this.lineOffset,
			startColumn: n,
			endLine: (e?.last_line ?? t) + this.lineOffset,
			endColumn: e?.last_column ?? n,
			startIndex: 0,
			endIndex: 0
		};
	}
	pushMapping(e, t, n) {
		let r = {
			id: e,
			type: t,
			position: n
		};
		return this.mappings.push(r), this.firstMapping.has(e) || this.firstMapping.set(e, r), r;
	}
	addVertexMapping(e, t, n, r) {
		if (!e) return;
		let i = this.pushMapping(e, "vertex", this.position(r));
		n ?? this.bareMappings.add(i);
	}
	extendVertexMapping(e, t) {
		if (!e || !t) return;
		let n = this.position(t);
		for (let t = this.mappings.length - 1; t >= 0; t--) {
			let r = this.mappings[t];
			if (r.type !== "vertex" || r.id !== e) continue;
			this.bareMappings.delete(r) && (r.type = "attachment");
			let i = r.position;
			(n.endLine > i.endLine || n.endLine === i.endLine && n.endColumn > i.endColumn) && (i.endLine = n.endLine, i.endColumn = n.endColumn);
			return;
		}
		this.pushMapping(e, "attachment", n);
	}
	addEdgeMapping(e, t, n, r) {
		let i = Array.isArray(t) ? t.filter((e) => typeof e == "string" && e !== "") : [];
		this.pushMapping(i.length > 0 ? i.join(">") : "edge", "edge", this.position(r));
	}
	blockMapping(e, t, n, r) {
		if (!e) return;
		let i = this.position(n), a = r ? this.position(r) : i;
		this.pushMapping(e, t, {
			startLine: i.startLine,
			startColumn: i.startColumn,
			endLine: a.endLine,
			endColumn: a.endColumn,
			startIndex: 0,
			endIndex: 0
		});
	}
	addSubgraphMapping(e, t, n, r) {
		let i = typeof e == "string" ? e : e?.text;
		this.blockMapping(i ?? "", "subgraph", n, r);
	}
	addConnectorMapping(e, t, n, r) {
		this.blockMapping(e?.text?.trim() ?? "", "connector", n, r);
	}
	emit(e, t, n, r) {
		let i = r?.nodeId ?? r?.edgeId, a = {
			id: e,
			severity: t,
			message: n
		};
		r?.nodeId ? a.nodeId = r.nodeId : r?.edgeId && (a.edgeId = r.edgeId);
		let o = i ? this.firstMapping.get(i) : void 0;
		o && (a.position = o.position);
		let s = i ?? "", c = this.reported.get(s);
		if (c === void 0) this.reported.set(s, [a]);
		else {
			for (let r of c) if (r.id === e && r.severity === t && r.message === n && r.nodeId === a.nodeId && r.edgeId === a.edgeId) return;
			c.push(a);
		}
		this.diagnostics.push(a), this.options.log?.(t, `agentflow[${e}]: ${n}`);
	}
	emitWarning(e, t, n) {
		this.emit(e, "warning", t, n);
	}
	emitError(e, t, n) {
		this.emit(e, "error", t, n);
	}
}, gn = "4q 0 b 0 5 0 6 m 2 u 2 cp 5 b f 4 8 0 2 0 3m 4 2 1 3 3 9 0 2 2 2 0 2 j 2 2a 2 3u 9 4d a 11 3 0 8 12 21 q 6 2 1a 16 10 1 2 2q 2 0 g 1 8 1 b 2 3 0 h 0 2 t u 2g c 0 p w a 1 5 0 6 l 5 0 a 0 4 0 o o 20 0 2 a 2g 1h 4 0 j 0 8 9 g 6 2 6 6 7 3 1 3 l 2 6 2 0 4 3 4 0 h 0 e 1 2 2 f 1 k 5 5 1 3 l 2 6 2 1 2 1 2 1 w 3 2 0 k 2 h 8 2 2 2 l 2 6 2 1 2 4 4 0 j 0 g 1 10 7 3 1 3 l 2 6 2 1 2 4 4 0 v 1 2 2 g 0 i 0 2 5 4 2 2 3 4 1 2 0 2 1 4 1 4 2 4 b n 0 1h 7 2 2 2 m 2 9 2 4 4 0 r 1 7 1 10 7 2 2 2 m 2 9 2 4 4 0 x 0 2 1 g 1 j 7 2 2 2 14 3 0 h 0 i 1 p 5 6 h 4 n 2 8 2 0 3 6 1n 1b 2 1 d 6 1n 1 2 0 3 1 2 0 3 0 7 3 2 6 2 2 2 0 2 0 3 1 2 3 2 1 a 0 3 4 2 0 m 3 x 0 1s 7 2 z s 4 38 16 l 0 h 5 5 3 4 0 4 1 8 2 5 c d 0 i 11 2 0 6 0 3 16 2 98 2 3 3 6 2 0 2 3 3 14 2 3 3 w 2 3 3 6 2 0 2 3 3 e 2 1k 2 3 3 1u 12 f h 2c d h7 3 g 2 p 6 22 m c 2 3 f h f h f c 2 2 g 1f 10 0 5 0 1w 2f 9 14 2 0 6 1x b s 1g t 3 4 c 17 m 6 1l m a 1g 2b 0 2m 1a i 6 1k t e 1 b 17 r z 16 2 b z 30 3 2 3 4 1 a 5b 1t 7p 3 5 3 11 3 5 3 7 2 0 2 0 2 0 2 u 3 1g 2 6 2 0 4 2 2 6 4 3 3 5 5 c 6 2 2 6 39 0 e 0 h c 2u 0 5 0 3 9 2 0 4 4 7 0 2 0 2 0 2 3 2 a 3 3 6 4 5 0 1h 1 22k 1a 2 1a 2 3o 7 3 4 1 d 11 2 0 6 0 3 1j 8 0 h m a 6 2 6 2 6 2 6 2 6 2 6 2 6 2 6 29 0 d2 1 17 4 6 1 5 2d 7 2 2 2h 2 3 6 14 4 2l i q 1i f e9 52t 23 g5o 1g wc 1w 19 3 7g 4 f b 1 l 1a h o 9 1x 1e 8 3 2u 3 3 2 3 d a 26 9 2 2 2 3 2 m u 1f f 1d 1r 5 4 0 f r b m q s 8 1a t 0 1d 14 o 2 2 7 l m 4 0 6 1b 2 0 4 1 3 4 3 0 2 0 p 2 3 a 8 2 d 5 3 5 3 5 a 6 2 6 42 y u 8mb d m 5 1c 6it a5 3 2x 13 6 d 4 6 0 2 9 2 c 2 4 2 0 2 1 2 1 2 2z y a2 j 1r 3 1h 15 b 39 4 2 3q 11 p 7 p c 2g 4 5 3 5 3 5 3 2", _n;
function vn() {
	let e = gn.split(" "), t = new Uint16Array(e.length), n = 0;
	for (let r = 0; r < e.length; r += 2) {
		let i = n + parseInt(e[r], 36);
		n = i + parseInt(e[r + 1], 36), t[r] = i, t[r + 1] = n;
	}
	return t;
}
function yn(e) {
	if (e < 170 || e > 65500) return !1;
	let t = _n ??= vn(), n = 0, r = (t.length >> 1) - 1;
	for (; n <= r;) {
		let i = n + r >> 1;
		if (e < t[i * 2]) r = i - 1;
		else if (e > t[i * 2 + 1]) n = i + 1;
		else return !0;
	}
	return !1;
}
var bn = /* @__PURE__ */ "$end.INVALID.acc_title.acc_title_value.acc_descr.acc_descr_value.acc_descr_multiline_value.SHAPE_DATA.CALLBACKNAME.CALLBACKARGS.MD_STR.STR.STYLE.DEFAULT.LINKSTYLE.INTERPOLATE.CLASSDEF.CLASS.HREF.CLICK.GRAPH.flow.connector.global.end.LINK_TARGET.NODIR.DIR.direction_tb.direction_bt.direction_rl.direction_lr.direction_td.LINK_ID.NUM.BRKT.STYLE_SEPARATOR.COLON.AMP.SEMI.COMMA.MULT.LINK.START_LINK.EDGE_TEXT.-).TEXT.(-.STADIUMEND.STADIUMSTART.SUBROUTINEEND.SUBROUTINESTART.VERTEX_WITH_PROPS_START.TAGEND.CYLINDEREND.CYLINDERSTART.DOUBLECIRCLEEND.DOUBLECIRCLESTART.TRAPEND.INVTRAPEND.TRAPSTART.INVTRAPSTART.TAGSTART.UP.SEP.DOWN.COMMENT.NODE_STRING.MINUS.UNICODE_TEXT.PIPE.PE.PS.SQE.SQS.DIAMOND_STOP.DIAMOND_START.NEWLINE.SPACE.EOF".split("."), xn = /* @__PURE__ */ new Uint8Array(128);
for (let e of "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'*+.`?\\_/") xn[e.charCodeAt(0)] = 1;
var Sn = /accTitle\s*:\s*/y, Cn = /accDescr\s*:\s*/y, wn = /accDescr\s*\{\s*/y, Tn = /call\s+/y, En = /click\s+/y, Dn = /(?:\r?\n)*\s*\n/y, On = /\s*(?:LR|RL|TB|BT|TD|BR)\b/y, kn = /\s*[<>^]/y, An = /\s*v\b/y, jn = [
	/.*direction\s+TB[^\n]*/y,
	/.*direction\s+BT[^\n]*/y,
	/.*direction\s+RL[^\n]*/y,
	/.*direction\s+LR[^\n]*/y,
	/.*direction\s+TD[^\n]*/y
], Mn = /[\n\r\u2028\u2029]/g, Nn = /\(\s*\)/y, Pn = /\n\s*/g;
function Fn(e) {
	let t = e.length, n = [], r = [], i = [], a = [], o = [], s = 0, c = 0, l = 1, u = 0, d = !0, f = e.indexOf("direction"), p = e.indexOf("@"), m = -1, h = 0, g = 0, _ = -1, v = -1, y = -1, b = -1, x = -1, S = -1, C = -1, w = (t) => {
		let n = -1;
		for (let r = c; r < t; r++) {
			let i = e.charCodeAt(r);
			i === 10 ? (l++, n = r) : i === 13 && (r + 1 < t && e.charCodeAt(r + 1) === 10 && r++, l++, n = r);
		}
		if (n < 0) u += t - c;
		else {
			let r = n + 1;
			for (; r < t;) {
				let t = e.charCodeAt(r);
				if (t === 8232 || t === 8233) break;
				r++;
			}
			u = r - n - 1;
		}
		c = t;
	}, T = (t, o) => {
		n.push(t), r.push(e.slice(c, o)), i.push(c), a.push(l, u), w(o), a.push(l, u);
	}, E = (t, o) => {
		n.push(t), r.push(e.slice(c, o)), i.push(c), a.push(l, u), u += o - c, c = o, a.push(l, u);
	}, D = (t, o) => {
		n.push(t), r.push(e.slice(c, o)), i.push(c), a.push(l, u);
		for (let t = c; t < o; t++) {
			let n = e.charCodeAt(t);
			n === 10 || n === 13 ? (l++, u = 0) : u++;
		}
		c = o, a.push(l, u);
	}, O = (e, t, o) => {
		n.push(e), r.push(t), i.push(c), a.push(l, u), w(o), a.push(l, u);
	}, k = (e) => {
		o.push(s), s = e;
	}, A = () => {
		o.length > 0 && (s = o.pop());
	}, j = (t, n) => (t.lastIndex = n, t.test(e) ? t.lastIndex : -1), M = (t) => e.startsWith(t, c) && !J(e.charCodeAt(c + t.length)), N = (n) => {
		if (n >= v && n <= y) return y;
		let r = n;
		for (; r < t && G(e.charCodeAt(r));) r++;
		return v = n, y = r, r;
	}, P = (n) => {
		if (n >= b && n <= x) return x;
		let r = n;
		for (; r < t;) {
			let t = e.charCodeAt(r);
			if (t !== 32 && t !== 9) break;
			r++;
		}
		return b = n, x = r, r;
	}, F = (t) => {
		let n = N(t);
		if (n === C || e.charCodeAt(n) !== 45 || e.charCodeAt(n + 1) !== 45) return -1;
		let r = n + 2;
		for (; e.charCodeAt(r) === 45;) r++;
		let i = e.charCodeAt(r);
		return i === 120 || i === 62 ? N(r + 1) : (C = n, -1);
	}, I = () => {
		let t = N(c);
		if (t === S || e.charCodeAt(t) !== 45) return !1;
		let n = e.charCodeAt(t + 1), r = t + 2;
		if (n === 45) {
			for (; e.charCodeAt(r) === 45;) r++;
			let n = e.charCodeAt(r);
			return n === 120 || n === 62 ? T(42, N(r + 1)) : (k(10), T(43, N(t + 2))), !0;
		}
		if (n === 46) {
			for (; e.charCodeAt(r) === 46;) r++;
			if (e.charCodeAt(r) === 45) return T(42, N(r + 1)), !0;
		}
		return S = t, !1;
	}, L = (n) => {
		if (e.charCodeAt(n) !== 37 || e.charCodeAt(n + 1) !== 37 || e.charCodeAt(n + 2) === 123) return -1;
		let r = e.indexOf("\n", n + 2);
		return r === -1 ? t : r;
	}, R = () => {
		e.charCodeAt(c + 1) === 96 ? (k(2), w(c + 2)) : (k(1), w(c + 1));
	}, z = (t) => {
		let n = e.charCodeAt(c + 1);
		return t === 40 ? (n === 45 ? (k(8), E(47, c + 2)) : n === 91 ? (k(7), E(49, c + 2)) : n === 40 && e.charCodeAt(c + 2) === 40 ? (k(7), E(57, c + 3)) : (k(7), E(72, c + 1)), !0) : t === 91 ? (n === 91 ? (k(7), E(51, c + 2)) : n === 40 ? (k(7), E(55, c + 2)) : n === 47 ? (k(9), E(60, c + 2)) : n === 92 ? (k(9), E(61, c + 2)) : (k(7), E(74, c + 1)), !0) : t === 124 ? (k(7), E(70, c + 1), !0) : t === 123 && (k(7), E(76, c + 1), !0);
	}, B = () => {
		let n = c;
		for (; n < t;) {
			let r = e.charCodeAt(n);
			if (r < 128 && xn[r] === 1) n++;
			else if (r === 45 && n + 1 < t) {
				let t = e.charCodeAt(n + 1);
				if (t === 62 || t === 45 || t === 46) break;
				n++;
			} else break;
		}
		return n !== c && (E(67, n), !0);
	}, V = (n) => {
		let r = n;
		for (; r < t;) {
			let t = e.charCodeAt(r);
			if (t !== 32 && t !== 9) break;
			r++;
		}
		return r;
	}, H = (n) => {
		let r;
		switch (n) {
			case 97:
				if (e.startsWith("acc", c)) {
					if ((r = j(Sn, c)) >= 0) return k(3), T(2, r), !0;
					if ((r = j(Cn, c)) >= 0) return k(4), T(4, r), !0;
					if ((r = j(wn, c)) >= 0) return k(5), w(r), !0;
				}
				if (M("agentflow-beta")) return d && (d = !1, k(6)), E(20, c + 14), !0;
				break;
			case 64:
				if (e.charCodeAt(c + 1) === 123) return k(14), O(7, "", c + 2), !0;
				break;
			case 99:
				if ((r = j(Tn, c)) >= 0) return k(12), w(r), !0;
				if (M("classDef")) return E(16, c + 8), !0;
				if (M("class")) return E(17, c + 5), !0;
				if ((r = j(En, c)) >= 0) return k(11), w(r), !0;
				if (M("connector")) return E(22, c + 9), !0;
				break;
			case 34: return R(), !0;
			case 115:
				if (M("style")) return E(12, c + 5), !0;
				break;
			case 100:
				if (M("default")) return E(13, c + 7), !0;
				break;
			case 108:
				if (M("linkStyle")) return E(14, c + 9), !0;
				break;
			case 105:
				if (M("interpolate")) return E(15, c + 11), !0;
				break;
			case 104:
				if (e.startsWith("href", c) && G(e.charCodeAt(c + 4))) return T(18, c + 5), !0;
				break;
			case 102:
				if (M("flow")) return E(21, c + 4), !0;
				break;
			case 103:
				if (M("global")) return E(23, V(c + 6)), !0;
				break;
			case 101:
				if (M("end")) return E(24, V(c + 3)), !0;
				break;
			case 95:
				if (M("_self")) return E(25, c + 5), !0;
				if (M("_blank")) return E(25, c + 6), !0;
				if (M("_parent")) return E(25, c + 7), !0;
				if (M("_top")) return E(25, c + 4), !0;
		}
		if (f !== -1 && c >= h && (f < c && (f = e.indexOf("direction", c)), f !== -1 && (m < c && (Mn.lastIndex = c, m = Mn.test(e) ? Mn.lastIndex - 1 : t), f < m))) {
			for (let e = 0; e < 5; e++) if ((r = j(jn[e], c)) >= 0) return T(28 + e, r), !0;
			h = m;
		}
		if (p !== -1 && n !== 34 && !G(n)) {
			if (c >= g) {
				p < c && (p = e.indexOf("@", c));
				let n = c;
				for (; n < t;) {
					let t = e.charCodeAt(n);
					if (t === 34 || G(t)) break;
					n++;
				}
				if (g = n, _ = -1, p !== -1 && p < n) for (let r = Math.min(n, t - 1) - 1; r >= p; r--) {
					if (e.charCodeAt(r) !== 64) continue;
					let t = e.charCodeAt(r + 1);
					if (t !== 123 && t !== 34) {
						_ = r;
						break;
					}
				}
			}
			if (_ > c) return E(33, _ + 1), !0;
		}
		if (n >= 48 && n <= 57) {
			let n = c + 1;
			for (; n < t;) {
				let t = e.charCodeAt(n);
				if (t < 48 || t > 57) break;
				n++;
			}
			return E(34, n), !0;
		}
		switch (n) {
			case 35: return E(35, c + 1), !0;
			case 58: return e.charCodeAt(c + 1) === 58 && e.charCodeAt(c + 2) === 58 ? E(36, c + 3) : E(37, c + 1), !0;
			case 38: return E(38, c + 1), !0;
			case 59: return E(39, c + 1), !0;
			case 44: return E(40, c + 1), !0;
			case 42: return E(41, c + 1), !0;
			case 60: return E(62, c + 1), !0;
			case 45: return I() || B() || E(68, c + 1), !0;
			case 40: return z(n);
			case 91: return e.charCodeAt(c + 1) === 124 ? (E(52, c + 2), !0) : z(n);
			case 124:
			case 123: return z(n);
			case 62: return k(7), E(53, c + 1), !0;
			case 94: return E(63, c + 1), !0;
			case 92: return e.charCodeAt(c + 1) === 124 ? (E(64, c + 2), !0) : B();
			case 118: return J(e.charCodeAt(c + 1)) ? B() : (E(65, c + 1), !0);
			case 37: return (r = L(c)) >= 0 ? (T(66, r), !0) : B();
		}
		if (G(n)) {
			if (I()) return !0;
			if ((n === 32 || n === 9) && (r = L(P(c))) >= 0) return T(66, r), !0;
			for (r = c;;) {
				let t = e.charCodeAt(r);
				if (t === 10) r++;
				else if (t === 13 && e.charCodeAt(r + 1) === 10) r += 2;
				else break;
			}
			return r > c ? T(77, r) : T(78, c + 1), !0;
		}
		return n < 128 ? B() : yn(n) ? (E(69, c + 1), !0) : !1;
	};
	e: for (;;) {
		if (c >= t) {
			let e = -1;
			switch (s) {
				case 0:
					e = 79;
					break;
				case 3:
					e = 3;
					break;
				case 4:
					e = 5;
					break;
				case 5:
					e = 6;
					break;
				case 11:
					e = 19;
					break;
				case 12:
					e = 8;
					break;
				case 13: e = 9;
			}
			e !== -1 && E(e, t);
			break;
		}
		let o = e.charCodeAt(c), d = !0;
		switch (s) {
			case 0:
				d = H(o);
				break;
			case 1:
				if (o === 34) e.charCodeAt(c + 1) === 96 ? (k(2), w(c + 2)) : (A(), w(c + 1));
				else {
					let n = e.indexOf("\"", c);
					T(11, n === -1 ? t : n);
				}
				break;
			case 2:
				if (o === 96) e.charCodeAt(c + 1) === 34 ? (A(), w(c + 2)) : d = !1;
				else if (o === 34) R();
				else {
					let n = c + 1;
					for (; n < t;) {
						let t = e.charCodeAt(n);
						if (t === 96 || t === 34) break;
						n++;
					}
					T(10, n);
				}
				break;
			case 3:
			case 4: {
				let n = e.indexOf("\n", c);
				n === -1 && (n = t);
				let r = s === 3 ? 3 : 5;
				A(), T(r, n);
				break;
			}
			case 5:
				if (o === 125) A(), w(c + 1);
				else {
					let n = e.indexOf("}", c);
					n === -1 && (n = t), T(6, n);
				}
				break;
			case 6: {
				let e;
				o === 34 ? R() : (e = j(Dn, c)) >= 0 ? (A(), T(26, e)) : (e = j(On, c)) >= 0 || (e = j(kn, c)) >= 0 || (e = j(An, c)) >= 0 ? (A(), T(27, e)) : d = z(o);
				break;
			}
			case 7: {
				let n = e.charCodeAt(c + 1);
				switch (o) {
					case 34:
						R();
						break;
					case 40:
					case 91:
					case 123:
						z(o);
						break;
					case 93:
						A(), n === 41 ? E(48, c + 2) : n === 93 ? E(50, c + 2) : E(73, c + 1);
						break;
					case 41:
						A(), n === 93 ? E(54, c + 2) : n === 41 && e.charCodeAt(c + 2) === 41 ? E(56, c + 3) : E(71, c + 1);
						break;
					case 124:
						A(), E(70, c + 1);
						break;
					case 125:
						A(), E(75, c + 1);
						break;
					case 37: {
						let e = L(c);
						e >= 0 ? w(e) : d = !1;
						break;
					}
					default: {
						let n = c + 1;
						for (; n < t;) {
							let t = e.charCodeAt(n);
							if (t === 91 || t === 93 || t === 40 || t === 41 || t === 123 || t === 125 || t === 124 || t === 34 || t === 37) break;
							n++;
						}
						T(46, n);
					}
				}
				break;
			}
			case 8: {
				let n = e.charCodeAt(c + 1), r;
				if (o === 34) R();
				else if (o === 37 && (r = L(c)) >= 0) w(r);
				else if ((o === 45 || o === 47 || o === 41) && n === 41) A(), E(45, c + 2);
				else if (o === 40 || o === 91 || o === 123) z(o);
				else if (o === 41 || o === 93 || o === 125) d = !1;
				else {
					let n = c + 1;
					for (; n < t;) {
						let t = e.charCodeAt(n);
						if (t === 34 || t === 40 || t === 41 || t === 91 || t === 93 || t === 123 || t === 125 || (t === 45 || t === 47) && e.charCodeAt(n + 1) === 41 || t === 37 && e.charCodeAt(n + 1) === 37 && e.charCodeAt(n + 2) !== 123) break;
						n++;
					}
					D(46, n);
				}
				break;
			}
			case 9: {
				let n = e.charCodeAt(c + 1);
				if (o === 34) {
					R();
					break;
				}
				switch (o) {
					case 40:
						n === 45 || n === 91 || n === 40 && e.charCodeAt(c + 2) === 40 ? z(o) : n === 93 ? (A(), E(58, c + 2)) : z(o);
						break;
					case 91:
					case 123:
						z(o);
						break;
					case 92:
						n === 93 ? (A(), E(58, c + 2)) : E(46, c + 1);
						break;
					case 47:
						n === 93 ? (A(), E(59, c + 2)) : E(46, c + 1);
						break;
					case 93:
					case 41:
						n === 93 ? (A(), E(58, c + 2)) : d = !1;
						break;
					case 125:
						d = !1;
						break;
					case 37: {
						let e = L(c);
						e >= 0 ? w(e) : d = !1;
						break;
					}
					default: {
						if ((o === 63 || o === 61) && n === 93) {
							A(), E(58, c + 2);
							break;
						}
						let r = c + 1;
						for (; r < t;) {
							let t = e.charCodeAt(r);
							if (t === 92 || t === 91 || t === 93 || t === 40 || t === 41 || t === 123 || t === 125 || t === 47 || t === 37) break;
							r++;
						}
						T(46, r);
					}
				}
				break;
			}
			case 10: {
				if (o === 34) {
					R();
					break;
				}
				let n = F(c);
				if (n >= 0) {
					A(), T(42, n);
					break;
				}
				if (o === 45 && e.charCodeAt(c + 1) === 45) {
					d = !1;
					break;
				}
				let r = c + 1;
				for (; r < t;) {
					let t = e.charCodeAt(r);
					if (t === 34) break;
					if (t === 45) {
						if (e.charCodeAt(r + 1) === 45) break;
					} else if (G(t) && F(r) >= 0) break;
					r++;
				}
				D(44, r);
				break;
			}
			case 11:
				if (o === 34) R();
				else if (G(o)) A(), w(c + 1);
				else {
					let n = c + 1;
					for (; n < t && !G(e.charCodeAt(n));) n++;
					E(19, n);
				}
				break;
			case 12:
				if (o === 40) {
					let e = j(Nn, c);
					A(), e >= 0 ? w(e) : (k(13), w(c + 1));
				} else {
					let n = e.indexOf("(", c);
					n === -1 && (n = t), T(8, n);
				}
				break;
			case 13:
				if (o === 41) A(), w(c + 1);
				else {
					let n = e.indexOf(")", c);
					n === -1 && (n = t), T(9, n);
				}
				break;
			case 14:
				if (o === 34) k(15), E(7, c + 1);
				else if (o === 125) A(), w(c + 1);
				else if (o === 94) d = !1;
				else {
					let n = c + 1;
					for (; n < t;) {
						let t = e.charCodeAt(n);
						if (t === 125 || t === 94 || t === 34) break;
						n++;
					}
					T(7, n);
				}
				break;
			case 15: if (o === 34) A(), E(7, c + 1);
			else {
				let n = e.indexOf("\"", c);
				n === -1 && (n = t), O(7, e.slice(c, n).replace(Pn, "<br/>"), n);
			}
		}
		if (!d) return n.push(1), r.push(""), i.push(c), a.push(l, u, l, u), {
			types: n,
			texts: r,
			starts: i,
			locs: a
		};
		continue e;
	}
	return n.push(0), r.push(""), i.push(t), a.push(l, u, l, u), {
		types: n,
		texts: r,
		starts: i,
		locs: a
	};
}
var In = /* @__PURE__ */ new Uint8Array(80);
for (let e of [
	34,
	67,
	65,
	68,
	13,
	40,
	37,
	38,
	35,
	41,
	69
]) In[e] = 1;
var Ln = /* @__PURE__ */ new Uint8Array(80);
for (let e of [
	34,
	69,
	67,
	27,
	65,
	68,
	40,
	37,
	38,
	35,
	41
]) Ln[e] = 1;
var Rn = /* @__PURE__ */ new Uint8Array(80);
for (let e of [
	34,
	67,
	78,
	68,
	38,
	69,
	37,
	41,
	35,
	12,
	14,
	16,
	17,
	19,
	20,
	27,
	21,
	22,
	23,
	24,
	65,
	63,
	43
]) Rn[e] = 1;
var zn = /* @__PURE__ */ new Uint8Array(80);
for (let e of [
	34,
	67,
	37,
	78,
	35,
	12
]) zn[e] = 1;
var Bn = /* @__PURE__ */ new Uint8Array(80);
for (let e of [
	77,
	39,
	79,
	66
]) Bn[e] = 1;
var Vn = "'UNICODE_TEXT', 'TEXT', 'TAGSTART'", Hn = "'COMMENT', 'SEMI', 'NEWLINE', 'EOF'", Un = [], Wn = /}[^\S\n]*\n/g;
function Gn(e, t, n = !1) {
	let r = !n && e.includes("}") ? e.replace(Wn, "}\n") : e, { types: a, texts: o, starts: s, locs: c } = Fn(r), l = 0, u, d = 0, f = 0, p = (e) => {
		let t = a[l];
		throw t === 1 ? i("agentflow", r, s[l], "", !0) : i("agentflow", r, s[l], `Expecting ${e}, got '${bn[t]}'`);
	}, m = (e, t) => ({
		first_line: c[4 * e],
		first_column: c[4 * e + 1],
		last_line: c[4 * t + 2],
		last_column: c[4 * t + 3]
	}), h = (e, t = "") => (a[l] !== e && p(`'${bn[e]}'${t ? ", " + t : ""}`), o[l++]), g = () => {
		Bn[a[l]] === 0 && p(Hn), l++;
	}, _ = () => {
		In[a[l]] === 0 && p("'NODE_STRING'");
		let e = o[l++];
		for (; In[a[l]] === 1;) e += o[l++];
		return e;
	}, v = () => {
		Ln[a[l]] === 0 && p("'NODE_STRING'");
		let e = o[l++];
		for (; Ln[a[l]] === 1;) e += o[l++];
		return e;
	}, y = () => {
		let e = a[l], t;
		if (e === 11) t = "string";
		else if (e === 10) t = "markdown";
		else if (e === 46 || e === 62 || e === 53 || e === 69) t = "text";
		else return p(`${Vn}, 'TAGEND', 'STR', 'MD_STR'`);
		let n = o[l++];
		for (;;) {
			let e = a[l];
			if (e !== 46 && e !== 62 && e !== 53 && e !== 69) break;
			n += o[l++];
		}
		return {
			text: n,
			type: t
		};
	}, b = (e) => {
		h(e, Vn);
	}, x = () => {
		let e = a[l], t;
		if (e === 11) t = "string";
		else if (e === 10) t = "markdown";
		else if (e === 44 || e === 69) t = "text";
		else return p("'EDGE_TEXT', 'STR', 'MD_STR'");
		let n = o[l++];
		for (; a[l] === 44 || a[l] === 69;) n += o[l++];
		return {
			text: n,
			type: t
		};
	}, S = () => {
		let e = a[l], t;
		if (e === 11) t = "text";
		else if (e === 10) t = "markdown";
		else if (Rn[e] === 1) t = "text";
		else return p("'NODE_STRING', 'STR', 'MD_STR'");
		let n = o[l++];
		for (; Rn[a[l]] === 1;) n += o[l++];
		return {
			text: n,
			type: t
		};
	}, C = () => {
		d = l;
		let e = o[l++];
		for (; a[l] === 7;) e += o[l++];
		return f = l - 1, e;
	}, w = (e, n, r, i) => {
		let a = m(r, i);
		t.addVertex(e, void 0, void 0, void 0, void 0, void 0, void 0, n, a), t.extendVertexMapping(e, a);
	}, T = (e, n) => {
		n.data !== void 0 && t.addVertex(e, void 0, void 0, void 0, void 0, void 0, void 0, n.data, m(n.dataFrom, n.dataTo));
	}, E = () => {
		let e = l, n = _(), r, i, o;
		switch (a[l]) {
			case 74:
				l++, r = y(), b(73), i = "square";
				break;
			case 57:
				l++, r = y(), b(56), i = "doublecircle";
				break;
			case 72:
				l++, a[l] === 72 ? (l++, r = y(), b(71), h(71), i = "circle") : (r = y(), b(71), i = "round");
				break;
			case 47:
				l++, r = y(), b(45), i = "ellipse";
				break;
			case 49:
				l++, r = y(), b(48), i = "stadium";
				break;
			case 51:
				l++, r = y(), b(50), i = "subroutine";
				break;
			case 52: {
				l++;
				let e = h(67);
				h(37);
				let t = h(67);
				h(70), r = y(), b(73), i = "rect", o = { [e]: t };
				break;
			}
			case 55:
				l++, r = y(), b(54), i = "cylinder";
				break;
			case 76:
				l++, a[l] === 76 ? (l++, r = y(), b(75), h(75), i = "hexagon") : (r = y(), b(75), i = "diamond");
				break;
			case 53:
				l++, r = y(), b(73), i = "odd";
				break;
			case 60:
				l++, r = y(), a[l] === 59 ? (l++, i = "lean_right") : (b(58), i = "trapezoid");
				break;
			case 61: l++, r = y(), a[l] === 58 ? (l++, i = "lean_left") : (b(59), i = "inv_trapezoid");
		}
		return o === void 0 ? i === void 0 ? t.addVertex(n) : t.addVertex(n, r, i) : t.addVertex(n, r, i, void 0, void 0, void 0, o), t.addVertexMapping(n, r, i, m(e, l - 1)), n;
	}, D = () => {
		let e = E();
		return a[l] === 36 && (l++, t.setClass(e, _())), e;
	}, O = () => {
		let e = [D()];
		for (u = void 0;;) {
			let t = a[l] === 7 ? C() : void 0, n = d, r = f;
			if (a[l] !== 78) return u = t, e;
			do
				l++;
			while (a[l] === 78);
			if (a[l] !== 38) return t !== void 0 && p("'AMP'"), e;
			l++, a[l] !== 78 && p("'SPACE'");
			do
				l++;
			while (a[l] === 78);
			let i = D();
			t !== void 0 && w(e[e.length - 1], t, n, r), e.push(i);
		}
	}, k = () => {
		let e;
		if (a[l] === 33 && (e = o[l++]), a[l] === 42) {
			let n = t.destructLink(o[l++]);
			return e !== void 0 && (n.id = e), a[l] === 70 && (l++, n.text = y(), b(70), a[l] === 78 && l++), n;
		}
		if (a[l] === 43) {
			let n = o[l++], r = x(), i = h(42, "'EDGE_TEXT'"), a = t.destructLink(i, n);
			return a.text = r, e !== void 0 && (a.id = e), a;
		}
		return p("'LINK', 'START_LINK'");
	}, A = () => {
		let e = l, n = O();
		u !== void 0 && w(n[n.length - 1], u, d, f);
		let r = n;
		for (;;) {
			let i = a[l];
			if (i !== 42 && i !== 43 && i !== 33) return r;
			let o = k(), s = O();
			u !== void 0 && w(s[s.length - 1], u, d, f), t.addLink(n, s, o), t.addEdgeMapping(n, s, o, m(e, l - 1)), r = s.concat(r), n = s;
		}
	}, j = () => {
		zn[a[l]] === 0 && p("'NODE_STRING', 'NUM', 'COLON', 'BRKT'");
		let e = o[l++];
		for (; zn[a[l]] === 1;) e += o[l++];
		return e;
	}, M = () => {
		let e = [j()];
		for (; a[l] === 40;) l++, e.push(j());
		return e;
	}, N = () => {
		l++, h(78);
		let e;
		if (a[l] === 13) e = [o[l++]];
		else for (e = [h(34, "'DEFAULT'")]; a[l] === 40;) l++, e.push(h(34));
		if (h(78), a[l] !== 15) {
			t.updateLink(e, M());
			return;
		}
		l++, h(78);
		let n = v();
		if (a[l] === 78) {
			l++;
			let r = M();
			t.updateLinkInterpolate(e, n), t.updateLink(e, r);
		} else t.updateLinkInterpolate(e, n);
	}, P = (e, n) => {
		if (a[l] !== 78) {
			t.setLink(e, n);
			return;
		}
		if (l++, a[l] === 25) {
			t.setLink(e, n, o[l++]);
			return;
		}
		let r = h(11, "'LINK_TARGET'");
		a[l] === 78 ? (l++, t.setLink(e, n, h(25))) : t.setLink(e, n), t.setTooltip(e, r);
	}, F = () => {
		let e = o[l++];
		switch (a[l]) {
			case 8: {
				let n = o[l++], r = a[l] === 9, i = r ? o[l++] : void 0, s;
				a[l] === 78 && (l++, s = h(11)), r ? t.setClickEvent(e, n, i) : t.setClickEvent(e, n), s !== void 0 && t.setTooltip(e, s);
				return;
			}
			case 18:
				l++, P(e, h(11));
				return;
			case 11:
				P(e, o[l++]);
				return;
			default: {
				let n = v();
				if (a[l] === 78) {
					l++;
					let r = h(11);
					t.setClickEvent(e, n), t.setTooltip(e, r);
				} else t.setClickEvent(e, n);
			}
		}
	}, I = (e) => {
		h(78, Hn);
		let t = S(), n = {
			text: "",
			type: "text"
		};
		a[l] === 74 && (l++, n = y(), b(73));
		let r = a[l] === 7 ? C() : void 0;
		return Bn[a[l]] === 0 && p(`${Hn}, 'SHAPE_DATA'`), {
			global: !1,
			at: e,
			id: t,
			title: n,
			data: r,
			dataFrom: d,
			dataTo: f,
			list: [],
			collect: !1
		};
	}, L = () => {
		let e = a[l];
		switch (e) {
			case 12: {
				l++, h(78);
				let e = _();
				return h(78), t.addVertex(e, void 0, void 0, M()), g(), Un;
			}
			case 14: return N(), g(), Un;
			case 16: {
				l++, h(78);
				let e = _();
				return h(78), t.addClass(e, M()), g(), Un;
			}
			case 17: {
				l++, h(78);
				let e = _();
				return h(78), t.setClass(e, _()), g(), Un;
			}
			case 19: return F(), g(), Un;
			case 22: {
				let e = I(l++), n = l++, r = t.addConnector(e.id, e.title);
				return T(r, e), t.addConnectorMapping(e.id, e.title, m(e.at, e.at), m(n, n)), r;
			}
			case 28:
			case 29:
			case 30:
			case 31:
			case 32: return l++, {
				stmt: "dir",
				value: Kn[e - 28]
			};
			case 2: {
				l++;
				let e = h(3).trim();
				return t.setAccTitle(e), e;
			}
			case 4: {
				l++;
				let e = h(5).trim();
				return t.setAccDescription(e), e;
			}
			case 6: {
				let e = o[l++].trim();
				return t.setAccDescription(e), e;
			}
			default: {
				In[e] === 0 && p(qn);
				let t = A();
				return g(), t;
			}
		}
	}, R = () => {
		let e = [], n = [], r = !1;
		for (;;) {
			let i = a[l];
			if (i === 0) break;
			if (i === 24) {
				let i = e.pop();
				if (i === void 0) break;
				let a = l++;
				if (i.global) {
					t.addGlobal(n), n = i.list, r = i.collect;
					continue;
				}
				let o = t.addSubGraph(i.id, n, i.title, "flow");
				T(o, i), t.addSubgraphMapping(i.id, i.title, m(i.at, i.at), m(a, a)), n = i.list, r = i.collect, r && n.push(o);
			} else if (i === 39 || i === 77 || i === 78 || i === 79) r && n.push(o[l]), l++;
			else if (i === 66) l++;
			else if (i === 21 || i === 23) {
				let t = l++, o;
				i === 23 || Bn[a[l]] === 1 ? (o = {
					global: i === 23,
					at: t,
					id: void 0,
					title: void 0,
					data: void 0,
					dataFrom: 0,
					dataTo: 0,
					list: n,
					collect: r
				}, g()) : (o = I(t), o.list = n, o.collect = r, l++), e.push(o), n = [], r = !0;
			} else {
				let e = L();
				r && (!Array.isArray(e) || e.length > 0) && n.push(e);
			}
		}
		e.length > 0 && p("'end'");
	};
	for (; a[l] === 78 || a[l] === 77 || a[l] === 66;) l++;
	if (h(20, "'SPACE', 'NEWLINE', 'COMMENT'"), a[l] === 26) l++, t.setDirection("TB");
	else {
		let e = h(27, "'NODIR'"), n = a[l];
		if (n === 78) {
			do
				l++;
			while (a[l] === 78);
			n = a[l], n !== 77 && p("'NEWLINE', 'SPACE'");
		} else n !== 39 && n !== 77 && n !== 66 && p("'COMMENT', 'SEMI', 'NEWLINE', 'SPACE'");
		l++, t.setDirection(e);
	}
	R(), a[l] !== 0 && p(qn);
}
var Kn = [
	"TB",
	"BT",
	"RL",
	"LR",
	"TD"
], qn = "'COMMENT', 'SEMI', 'NEWLINE', 'SPACE', 'EOF', 'flow', 'global', 'connector', 'acc_title', 'acc_descr', 'acc_descr_multiline_value', 'STYLE', 'LINKSTYLE', 'CLASSDEF', 'CLASS', 'CLICK', 'NODE_STRING'";
function Jn(e, t, n = 0) {
	return {
		w: e,
		h: t,
		kind: n,
		pin: 0,
		hint: NaN,
		key: NaN,
		span: 0,
		x: 0,
		y: 0,
		rank: 0
	};
}
function Yn(e, t, n = 1, r = 0, i = 0) {
	return {
		tail: e,
		head: t,
		minlen: n,
		labelW: r,
		labelH: i,
		tailDx: 0,
		headDx: 0,
		tailFixed: !1,
		headFixed: !1,
		reversed: !1,
		points: [],
		labelX: 0,
		labelY: 0
	};
}
var Xn = 24, Zn = 2e4, Qn = 16, $n = 8, er = .125, tr = 3, nr = 18, rr = 10, ir = 14, ar = 2, or = 28, sr = 12, cr = 12, lr = 8, ur = 4, dr = .5, fr = .5, pr = 12, mr = 40, hr = 400, gr = 16, _r = new Float64Array(2 * gr + 2), vr = new Float64Array(2 * gr + 2);
function yr(e) {
	return e === 1 || e === 2;
}
function br(e, t, n, r) {
	for (let i = t + 1; i < n; i++) {
		let n = e[i], a = r[n], o = i - 1;
		for (; o >= t && (r[e[o]] > a || r[e[o]] === a && e[o] > n);) e[o + 1] = e[o], o--;
		e[o + 1] = n;
	}
}
function xr(e, t, n, r, i, a) {
	let o = (e, t) => n[e] < n[t] || n[e] === n[t] && (i ? r[e] > r[t] : r[e] < r[t]);
	for (let n = 0; n < t; n += 8) for (let r = n + 1, i = Math.min(t, n + 8); r < i; r++) {
		let t = e[r], i = r - 1;
		for (; i >= n && o(t, e[i]);) e[i + 1] = e[i], i--;
		e[i + 1] = t;
	}
	let s = e, c = a;
	for (let e = 8; e < t; e *= 2) {
		for (let n = 0; n < t; n += 2 * e) {
			let r = Math.min(t, n + e), i = Math.min(t, n + 2 * e), a = n, l = r, u = n;
			for (; a < r && l < i;) c[u++] = o(s[l], s[a]) ? s[l++] : s[a++];
			for (; a < r;) c[u++] = s[a++];
			for (; l < i;) c[u++] = s[l++];
		}
		let n = s;
		s = c, c = n;
	}
	if (s !== e) for (let n = 0; n < t; n++) e[n] = s[n];
}
function Sr(e, t, n) {
	let r = e.length;
	if (r === 0) return {
		width: 0,
		height: 0
	};
	let i = t.length;
	if (r === 1 && i === 0 && e[0].kind === 0) {
		let t = e[0];
		return t.rank = 0, t.x = t.w / 2, t.y = t.h / 2, {
			width: t.w,
			height: t.h
		};
	}
	let a = 1;
	if (i > 0) {
		let e = /* @__PURE__ */ new Set();
		for (let n of t) {
			let t = Math.min(n.tail, n.head), i = Math.max(n.tail, n.head), o = t * r + i;
			if (n.labelW > 0 || e.has(o)) {
				a = 2;
				break;
			}
			e.add(o);
		}
	}
	Cr(e, t), wr(e, t, a);
	let o = new Int32Array(i), s = 0;
	for (let n = 0; n < i; n++) {
		let r = t[n];
		o[n] = Math.abs(e[r.head].rank - e[r.tail].rank), o[n] > 1 && (s += o[n] - 1);
	}
	let c = new Uint8Array(i);
	if (s > Zn) {
		let e = [];
		for (let t = 0; t < i; t++) o[t] > 1 && e.push(t);
		e.sort((e, t) => o[t] - o[e] || e - t);
		for (let t of e) {
			if (s <= Zn) break;
			c[t] = 1, s -= o[t] - 1;
		}
	}
	let l = r + s, u = new Float64Array(l), d = new Float64Array(l), f = new Uint8Array(l), p = new Int32Array(l), m = 0;
	for (let t = 0; t < r; t++) {
		let n = e[t];
		u[t] = n.w, d[t] = n.h, f[t] = n.kind, p[t] = n.rank, n.rank > m && (m = n.rank);
	}
	let h = 0;
	for (let e = 0; e < i; e++) c[e] || (h += o[e]);
	let g = new Int32Array(h), _ = new Int32Array(h), v = new Float64Array(h), y = new Float64Array(h), b = new Int32Array(i).fill(-1), x = new Uint8Array(m + 1), S = new Int32Array(i).fill(-1), C = !1;
	for (let t = 0; t < r; t++) e[t].span > 0 && e[t].kind === 0 && (C = !0);
	let w = C ? new Uint8Array(h) : void 0, T = C ? new Uint8Array(h) : void 0, E = new Int32Array(i).fill(-1), D = new Int32Array(i).fill(-1), O = new Float64Array(l).fill(NaN);
	for (let t = 0; t < r; t++) O[t] = e[t].key;
	let k = !1;
	{
		let e = r, n = 0;
		for (let r = 0; r < i; r++) {
			if (c[r]) continue;
			let i = t[r], o = i.reversed ? i.head : i.tail, s = i.reversed ? i.tail : i.head, l = i.reversed ? i.headDx : i.tailDx, m = i.reversed ? i.tailDx : i.headDx;
			(l !== 0 || m !== 0) && (k = !0);
			let h = p[o], C = p[s], A = -1;
			i.labelW > 0 && (A = h + (C - h >> 1), a === 2 && C - h >= 4 ? (A & 1) == 1 && (A += i.reversed ? 1 : -1) : a === 2 && !(A & 1) && (A += i.reversed ? 1 : -1));
			let j = o;
			C - h > 1 && (b[r] = e), E[r] = n, w && !(i.reversed ? i.headFixed : i.tailFixed) && (w[n] = i.reversed ? 2 : 1);
			for (let t = h + 1; t < C; t++) {
				let a = e++;
				p[a] = t, O[a] = O[o] + (O[s] - O[o]) * (t - h) / (C - h), t === A ? (u[a] = i.labelW, d[a] = i.labelH, f[a] = 2, S[r] = a, x[t] |= i.reversed ? 2 : 1) : f[a] = 1, g[n] = j, _[n] = a, v[n] = j === o ? l : 0, n++, j = a;
			}
			g[n] = j, _[n] = s, v[n] = j === o ? l : 0, y[n] = m, T && !(i.reversed ? i.tailFixed : i.headFixed) && (T[n] = i.reversed ? 1 : 2), D[r] = n, n++;
		}
	}
	let A;
	if (n.groups) {
		let { of: e, parent: a } = n.groups;
		A = new Int32Array(l);
		for (let t = 0; t < r; t++) A[t] = e[t];
		let s = (e) => {
			let t = 0;
			for (; e >= 0; e = a[e]) t++;
			return t;
		}, c = (e, t) => {
			let n = s(e), r = s(t);
			for (; n > r; n--) e = a[e];
			for (; r > n; r--) t = a[t];
			for (; e !== t;) e = a[e], t = a[t];
			return e;
		};
		for (let n = 0; n < i; n++) {
			if (b[n] < 0) continue;
			let r = t[n], i = c(e[r.tail], e[r.head]);
			for (let e = b[n], t = e + o[n] - 1; e < t; e++) A[e] = i;
		}
	}
	let j = new Int32Array(l + 1), M = new Int32Array(l + 1);
	for (let e = 0; e < h; e++) j[g[e] + 1]++, M[_[e] + 1]++;
	for (let e = 0; e < l; e++) j[e + 1] += j[e], M[e + 1] += M[e];
	let N = new Int32Array(h), P = new Int32Array(h);
	{
		let e = j.slice(0, l), t = M.slice(0, l);
		for (let n = 0; n < h; n++) N[e[g[n]]++] = n, P[t[_[n]]++] = n;
	}
	let F = new Int32Array(m + 2);
	for (let e = 0; e < l; e++) F[p[e] + 1]++;
	for (let e = 0; e <= m; e++) F[e + 1] += F[e];
	let I = new Int32Array(l), L = new Int32Array(l);
	{
		let e = new Int32Array(l), t = F.slice(0, m + 1);
		for (let n = 0; n < l; n++) e[t[p[n]]++] = n;
		for (let e = 0; e <= m; e++) t[e] = F[e];
		let n = new Uint8Array(l), r = [];
		for (let i = 0; i < l; i++) if (!n[e[i]]) for (r.push(e[i]); r.length > 0;) {
			let e = r.pop();
			if (!n[e]) {
				n[e] = 1, I[t[p[e]]++] = e;
				for (let t = j[e + 1] - 1; t >= j[e]; t--) {
					let e = _[N[t]];
					n[e] || r.push(e);
				}
			}
		}
	}
	let R = (e, t) => {
		let n = F[e], r = F[e + 1];
		if (r - n < 2) return !1;
		for (let e = n; e < r; e++) if (Number.isNaN(t(I[e]))) return !1;
		let i = Array.from(I.subarray(n, r)), a = /* @__PURE__ */ new Map();
		return i.forEach((e, t) => a.set(e, t)), i.sort((e, n) => t(e) - t(n) || a.get(e) - a.get(n)), I.set(i, n), !0;
	};
	for (let e = 0; e <= m; e++) R(e, (e) => O[e]);
	let z = !1;
	for (let t = 0; t < r; t++) e[t].pin !== 0 && (z = !0);
	if (z) for (let t = 0; t <= m; t++) {
		let n = Array.from(I.subarray(F[t], F[t + 1])), i = /* @__PURE__ */ new Map();
		n.forEach((e, t) => i.set(e, t));
		let a = (t) => t < r ? e[t].pin : 0;
		n.sort((e, t) => a(e) - a(t) || i.get(e) - i.get(t)), I.set(n, F[t]);
	}
	let B = new Uint8Array(m + 1), V = (t) => t < r && (e[t].kind === 3 || e[t].kind === 4) ? e[t].hint : NaN;
	for (let e of [0, m]) R(e, V) && (B[e] = 1);
	let H = () => {
		for (let e = 0; e <= m; e++) {
			let t = F[e];
			for (let n = t, r = F[e + 1]; n < r; n++) L[I[n]] = n - t;
		}
	};
	H();
	let U = {
		n: l,
		real: r,
		maxRank: m,
		W: u,
		KIND: f,
		RANK: p,
		EF: g,
		ET: _,
		EFD: v,
		ETD: y,
		succStart: j,
		succE: N,
		predStart: M,
		predE: P,
		layerStart: F,
		order: I,
		pos: L,
		offsets: k,
		fixed: B,
		GRP: A,
		groupParent: n.groups?.parent
	}, ee = 0, te = 0;
	if (h > 0 && m > 0 && ([ee, te] = Lr(U, e), H()), n.orderOnly) {
		let a = zr(U, n);
		for (let t = 0; t < r; t++) e[t].x = a[t];
		for (let e = 0; e < i; e++) {
			let n = t[e], r = n.reversed ? n.head : n.tail, i = n.reversed ? n.tail : n.head, s = [p[r], a[r]];
			if (!c[e] && b[e] >= 0) for (let t = b[e], n = t + o[e] - 1; t < n; t++) s.push(p[t], a[t]);
			s.push(p[i], a[i]), n.points = s;
		}
		return {
			width: 0,
			height: 0,
			crossings: ee,
			declared: te
		};
	}
	w && T && Er(U, e, w, T);
	let W = zr(U, n), ne = Nr(U);
	if (w && T) {
		let r = Or(U, w, T);
		Ar(U, e, W, r, n, ne), jr(U, e, W, w, T, r, ne), Mr(U, W, ne, n);
		for (let e = 0; e < i; e++) {
			if (c[e]) continue;
			let n = t[e], r = v[E[e]], i = y[D[e]];
			n.tailDx = n.reversed ? i : r, n.headDx = n.reversed ? r : i;
		}
	}
	let re = new Uint8Array(l);
	ne && !n.tracks && Fr(U, W, ne, b, o, n.apart ? 0 : n.edgeSep, re), n.tracks || Ir(U, W, b, o, n.edgeSep, re);
	let G = new Int32Array(i + 1), K = n.tracks || w && !n.straight ? {
		from: [],
		to: [],
		rank: [],
		lower: [],
		track: [],
		levels: [],
		wide: []
	} : void 0, ie = new Int32Array(m + 1);
	if (K) {
		for (let e = 0; e < i; e++) {
			if (G[e] = K.from.length, c[e]) continue;
			let t = b[e], r = !1;
			for (let i = t, a = t < 0 ? t : t + o[e] - 1; i < a; i++) {
				let e = ne !== void 0 && ne[p[i]] === 1;
				!n.tracks && e !== (re[i] === 1) && (r = !0);
			}
			if (r) continue;
			let i = W[g[E[e]]] + v[E[e]], a = p[g[E[e]]];
			for (let n = t, r = t < 0 ? t : t + o[e] - 1; n < r; n++) ne && ne[p[n]] || (K.from.push(i), K.to.push(W[n]), K.rank.push(a), K.lower.push(n), i = W[n], a = p[n]);
			K.from.push(i), K.to.push(W[_[D[e]]] + y[D[e]]), K.rank.push(a), K.lower.push(-1);
		}
		G[i] = K.from.length;
	}
	let q = (e, t) => {
		let n = !1;
		for (let r = F[e]; r < F[e + 1]; r++) {
			let e = f[I[r]];
			if (e === t) n = !0;
			else if (e !== 1) return !1;
		}
		return n;
	}, ae = q(0, 3) ? a : 0, oe = q(m, 4) ? a : 0, J = new Float64Array(m + 1);
	for (let e = 0; e < h; e++) {
		let t = Math.abs(W[g[e]] + v[e] - W[_[e]] - y[e]);
		t > J[p[g[e]]] && (J[p[g[e]]] = t);
	}
	let se = new Float64Array(m + 1), ce = new Float64Array(m + 1), le = (e) => (e < ae || e >= m - oe ? n.portSep : n.rankSep) / a, ue = new Float64Array(m + 1);
	for (let e = 0; e < m; e++) ue[e] = K ? le(e) : Math.max(le(e), Math.min(tr * n.rankSep / a, J[e] * er));
	let de = new Uint8Array(m + 1).fill(1);
	for (let e = 0; e < r; e++) de[p[e]] = 0;
	for (let e = 1; e < m; e++) {
		if (n.tracks || !de[e] || x[e] !== 1 && x[e] !== 2) continue;
		let t = Math.min((n.headRoom ?? 0) / 2, ue[x[e] === 1 ? e - 1 : e] / 2);
		ue[e - 1] += x[e] === 1 ? -t : t, ue[e] += x[e] === 1 ? t : -t;
	}
	let fe = (e) => f[e] === 1 && de[p[e]] && !n.tracks ? (ce[p[e]] - se[p[e]]) / 4 : 0, pe = n.tracks ? nr : or, me = n.tracks ? rr : sr, he = n.tracks ? ir : sr, ge = new Int32Array(m + 1);
	if (K) {
		let e = new Float64Array(m + 1);
		for (let t = 0; t < m; t++) {
			if (ne && ne[t]) continue;
			let n = t + 1;
			for (e[t] = ue[t]; n < m && ne && ne[n];) e[t] += ue[n++];
			ge[t] = n;
		}
		for (let t = 0; t < K.from.length; t++) K.wide.push(+(Math.abs(K.from[t] - K.to[t]) > ar * e[K.rank[t]]));
		let t = new Float64Array(m + 1);
		Pr(K, ie, !n.tracks, e, t);
		for (let r = 0; r < m; r++) ie[r] > 0 ? ue[r] += Math.max(0, 2 * pe + (ie[r] - 1) * me - e[r]) : t[r] > 0 && (ue[r] += Math.max(0, Math.min(tr * n.rankSep, t[r]) - e[r]));
	}
	let _e = 0;
	for (let e = 0; e <= m; e++) {
		let t = 0;
		for (let n = F[e]; n < F[e + 1]; n++) d[I[n]] > t && (t = d[I[n]]);
		se[e] = _e, ce[e] = _e + t, _e += t + ue[e];
	}
	let ve = _e, ye = (e, t = K.track[e]) => {
		let r = K.rank[e], i = ce[r], a = se[ge[r]], o = n.tracks ? ie[r] : K.levels[e], s = o > 1 ? Math.min(he, (a - i - 2 * pe) / (o - 1)) : 0;
		return (i + a) / 2 + (t - (o - 1) / 2) * s;
	}, be = 1 / 0, xe = -1 / 0;
	for (let e = 0; e < l; e++) {
		let t = u[e] / 2;
		W[e] - t < be && (be = W[e] - t), W[e] + t > xe && (xe = W[e] + t);
	}
	let Se = new Uint8Array(m + 1), Ce = new Uint8Array(m + 1);
	for (let e = 0; e < r; e++) f[e] !== 0 || !w || (M[e + 1] > M[e] && (Se[p[e]] = 1), j[e + 1] > j[e] && (Ce[p[e]] = 1));
	for (let t = 0; t < r; t++) {
		let n = e[t], r = n.rank;
		n.x = W[t] - be, n.y = f[t] === 0 && Ce[r] && !Se[r] ? ce[r] - n.h / 2 : f[t] === 0 && Se[r] && !Ce[r] ? se[r] + n.h / 2 : (se[r] + ce[r]) / 2;
	}
	for (let r = 0; r < i; r++) {
		let i = t[r], a = e[i.reversed ? i.head : i.tail], s = e[i.reversed ? i.tail : i.head], c = [a.x + (i.reversed ? i.headDx : i.tailDx), a.y + a.h / 2], l = b[r];
		if (K && G[r + 1] > G[r]) for (let e = G[r]; e < G[r + 1]; e++) {
			if (K.track[e] >= 0 && (n.tracks || K.wide[e] === 1)) {
				let t = ye(e);
				c.push(K.from[e] - be, t, K.to[e] - be, t);
			} else K.track[e] > 0 && c.push(K.from[e] - be, ye(e, K.track[e] - 1));
			let t = K.lower[e];
			t < 0 || (c.push(W[t] - be, se[p[t]] + fe(t)), ce[p[t]] > se[p[t]] && c.push(W[t] - be, ce[p[t]] - fe(t)));
		}
		else if (l >= 0) for (let e = l, t = l + o[r] - 1; e < t; e++) {
			if (re[e]) continue;
			let t = W[e] - be, n = se[p[e]], r = ce[p[e]];
			c.push(t, n + fe(e)), r > n && c.push(t, r - fe(e));
		}
		if (c.push(s.x + (i.reversed ? i.tailDx : i.headDx), s.y - s.h / 2), i.reversed) for (let e = 0, t = c.length - 2; e < t; e += 2, t -= 2) {
			let n = c[e], r = c[e + 1];
			c[e] = c[t], c[e + 1] = c[t + 1], c[t] = n, c[t + 1] = r;
		}
		i.points = c;
		let u = S[r];
		u >= 0 ? (i.labelX = W[u] - be, i.labelY = (se[p[u]] + ce[p[u]]) / 2) : i.labelW > 0 && (i.labelX = (c[0] + c[c.length - 2]) / 2, i.labelY = (c[1] + c[c.length - 1]) / 2);
	}
	return {
		width: xe - be,
		height: ve
	};
}
function Cr(e, t) {
	let n = e.length, r = t.length, i = new Int32Array(n + 1);
	for (let n = 0; n < r; n++) {
		let r = t[n];
		r.reversed = e[r.head].kind === 3 || e[r.tail].kind === 4, r.reversed || i[r.tail + 1]++;
	}
	for (let e = 0; e < n; e++) i[e + 1] += i[e];
	let a = new Int32Array(i[n]);
	{
		let e = i.slice(0, n);
		for (let n = 0; n < r; n++) t[n].reversed || (a[e[t[n].tail]++] = n);
	}
	let o = new Uint8Array(n), s = i.slice(0, n), c = [];
	for (let e = 0; e < n; e++) if (o[e] === 0) for (c.push(e), o[e] = 1; c.length > 0;) {
		let e = c[c.length - 1];
		if (s[e] < i[e + 1]) {
			let n = t[a[s[e]++]], r = n.head;
			o[r] === 1 ? n.reversed = !0 : o[r] === 0 && (o[r] = 1, c.push(r));
		} else o[e] = 2, c.pop();
	}
}
function wr(e, t, n) {
	let r = e.length, i = t.length, a = new Int32Array(i), o = new Int32Array(i), s = new Int32Array(i), c = new Int32Array(r + 1), l = new Int32Array(r + 1);
	for (let e = 0; e < i; e++) {
		let r = t[e], i = r.reversed ? r.head : r.tail, u = r.reversed ? r.tail : r.head;
		a[e] = i, o[e] = u, s[e] = Math.max(1, r.minlen) * n, c[i + 1]++, l[u + 1]++;
	}
	for (let e = 0; e < r; e++) c[e + 1] += c[e], l[e + 1] += l[e];
	let u = new Int32Array(i), d = new Int32Array(i);
	{
		let e = c.slice(0, r), t = l.slice(0, r);
		for (let n = 0; n < i; n++) u[e[a[n]]++] = n, d[t[o[n]]++] = n;
	}
	let f = new Int32Array(r), p = new Int32Array(r);
	for (let e = 0; e < r; e++) p[e] = l[e + 1] - l[e];
	let m = new Int32Array(r), h = 0;
	for (let e = 0; e < r; e++) p[e] === 0 && (m[h++] = e);
	for (let e = 0; e < h; e++) {
		let t = m[e];
		for (let e = c[t]; e < c[t + 1]; e++) {
			let n = u[e], r = o[n];
			f[t] + s[n] > f[r] && (f[r] = f[t] + s[n]), --p[r] === 0 && (m[h++] = r);
		}
	}
	for (let e = 0; e < 8; e++) {
		let e = !1;
		for (let t = h - 1; t >= 0; t--) {
			let n = m[t], r = l[n + 1] - l[n], i = c[n + 1] - c[n];
			if (r === 0 && i === 0) continue;
			let p = -1 / 0, h = 1 / 0;
			for (let e = l[n]; e < l[n + 1]; e++) {
				let t = d[e];
				p = Math.max(p, f[a[t]] + s[t]);
			}
			for (let e = c[n]; e < c[n + 1]; e++) {
				let t = u[e];
				h = Math.min(h, f[o[t]] - s[t]);
			}
			let g = f[n];
			i > r && h !== 1 / 0 ? g = h : r > i && p !== -1 / 0 && (g = p), g !== f[n] && (f[n] = g, e = !0);
		}
		if (!e) break;
	}
	let g = 1 / 0, _ = -1 / 0, v = !1;
	for (let t = 0; t < r; t++) {
		let n = e[t].kind;
		n === 3 && (v = !0), n !== 3 && n !== 4 && (f[t] < g && (g = f[t]), f[t] > _ && (_ = f[t]));
	}
	g === 1 / 0 && (g = 0, _ = 0);
	for (let t = 0; t < r; t++) e[t].kind === 3 ? f[t] = g - n : e[t].kind === 4 && (f[t] = _ + n);
	v && (g -= n);
	for (let t = 0; t < r; t++) e[t].rank = f[t] - g;
}
function Tr(e, t, n, r, i, a, o) {
	let s = n === 0 ? e.predStart : e.succStart, c = n === 0 ? e.predE : e.succE, l = n === 0 ? e.EF : e.ET, u = e.pos;
	for (let e = s[t]; e < s[t + 1]; e++) i[c[e]] !== 0 && a.push(c[e]);
	if (a.length < 2) return 0;
	a.sort((e, t) => u[l[e]] - u[l[t]] || e - t);
	let d = (e) => {
		let t = 0;
		o[0] = 0;
		for (let n = 1; n < a.length; n++) {
			let r = i[a[n]] === i[a[n - 1]];
			o[n] = e(r && i[a[n]] === 1, r), t += o[n];
		}
		return t;
	}, f = d(() => 1);
	if (r / f < $n && (f = d((e) => e ? .5 : 1)), r / f < $n && (f = d((e, t) => +!t)), f === 0) return 0;
	let p = Math.min(Qn, r / f);
	for (let e = 1; e < a.length; e++) o[e] *= p;
	return f * p;
}
function Er(e, t, n, r) {
	let { real: i, W: a, EFD: o, ETD: s } = e;
	for (let c = 0; c < i; c++) {
		let i = Math.min(t[c].span, a[c]);
		if (!(i <= 0 || t[c].kind !== 0)) for (let t = 0; t < 2; t++) {
			let a = [], l = [], u = Tr(e, c, t, i, t === 0 ? r : n, a, l);
			if (u === 0) continue;
			let d = t === 0 ? s : o, f = -u / 2;
			for (let e = 0; e < a.length; e++) f += l[e], d[a[e]] = f;
		}
	}
}
function Dr(e, t, n, r) {
	if (!t) return n;
	let { KIND: i, RANK: a, EF: o, ET: s, succStart: c, succE: l, predStart: u, predE: d } = e;
	for (let e = 0; e < 1e5; e++) {
		let e = r === 0 ? o[n] : s[n];
		if (i[e] !== 1 || !t[a[e]]) break;
		n = r === 0 ? d[u[e]] : l[c[e]];
	}
	return n;
}
function Or(e, t, n) {
	let r = [new Int32Array(e.n), new Int32Array(e.n)];
	for (let i = 0; i < e.EF.length; i++) n[i] !== 0 && r[0][e.ET[i]]++, t[i] !== 0 && r[1][e.EF[i]]++;
	return r;
}
function kr(e, t) {
	return Math.max(.25, Math.min(.5, 4 * Math.abs(t) / (Math.abs(e) || 1)));
}
function Ar(e, t, n, r, i, a) {
	let o = i.edgeSep, { n: s, real: c, maxRank: l, KIND: u, RANK: d, W: f, EF: p, ET: m, EFD: h, ETD: g, succStart: _, succE: v, predStart: y, predE: b, layerStart: x, order: S, pos: C } = e, w = (e) => u[e] === 2 || u[e] === 1 && (a === void 0 || a[d[e]] !== 1), T = (e, i) => {
		let a = i === 0 ? p[e] : m[e];
		return [i === 0 ? n[a] + h[e] : n[a] + g[e], a < c && t[a].kind === 0 ? r[1 - i][a] : 0];
	}, E = (e) => {
		let t = x[d[e]], r = t + C[e], a = (t) => f[t] / 2 + f[e] / 2 + (u[t] === 0 ? i.nodeSep / 2 + o / 2 : u[t] === u[e] ? o : o / 2);
		return [r > t ? n[S[r - 1]] + a(S[r - 1]) : -1 / 0, r + 1 < x[d[e] + 1] ? n[S[r + 1]] - a(S[r + 1]) : 1 / 0];
	}, D = (e, t, n, r, i) => {
		let a = (t[1] === n[1] ? Math.abs(t[0] - e) <= Math.abs(n[0] - e) : t[1] < n[1]) ? [t[0], n[0]] : [n[0], t[0]];
		return a.find((e) => e >= r && e <= i) ?? Math.max(r, Math.min(i, a[0]));
	}, O = new Uint8Array(s), k = [];
	for (let t = 1; t < l; t++) for (let r = x[t]; r < x[t + 1]; r++) {
		if (!w(S[r]) || O[S[r]]) continue;
		let t = S[r];
		for (; yr(u[p[b[y[t]]]]);) t = p[b[y[t]]];
		let i = t, o = -1 / 0, s = 1 / 0;
		k.length = 0;
		for (let e = t; yr(u[e]); e = m[v[_[e]]]) {
			if (i = e, !w(e)) continue;
			O[e] = 1, k.push(e);
			let [t, n] = E(e);
			t > o && (o = t), n < s && (s = n);
		}
		if (o <= s) {
			let e = D(n[k[0]], T(b[y[t]], 0), T(v[_[i]], 1), o, s);
			for (let t of k) n[t] = e;
		} else for (let t of k) {
			let [r, i] = E(t);
			r > i || (n[t] = D(n[t], T(Dr(e, a, b[y[t]], 0), 0), T(Dr(e, a, v[_[t]], 1), 1), r, i));
		}
	}
}
function jr(e, t, n, r, i, a, o) {
	let { real: s, W: c, EF: l, ET: u, EFD: d, ETD: f, succStart: p, succE: m, predStart: h, predE: g, pos: _ } = e, v = (p, m, h, g, _) => {
		if (a[m][h] < 2) return 0;
		p = Dr(e, o, p, m);
		let v = m === 0 ? l[p] : u[p], y = m === 0 ? n[v] + d[p] : n[v] + f[p];
		if (_ && Math.abs(y - n[h]) <= g / 2 + fr) return Math.max(-g / 2, Math.min(g / 2, y - n[h]));
		let b = y, x = 0;
		v < s && t[v].kind === 0 && (m === 0 ? r : i)[p] !== 0 && a[1 - m][v] >= 2 && (x = Math.max(0, Math.min(t[v].span, c[v])), x > 0 && (b = n[v]));
		let S = Math.max(n[h] - g / 2, b - x / 2), C = Math.min(n[h] + g / 2, b + x / 2);
		if (S > C + fr) {
			let e = Math.max(0, g / 2 - mr);
			return Math.max(-e, Math.min(e, y - n[h]));
		}
		let w = (n[h] * x + b * g) / (x + g);
		return Math.max(S, Math.min(C, w)) - n[h];
	}, y = [];
	for (let n = 0; n < s; n++) {
		let a = Math.min(t[n].span, c[n]);
		if (!(a <= 0 || t[n].kind !== 0)) for (let t = 0; t < 2; t++) {
			let o = t === 0 ? l : u, s = t === 0 ? h : p, c = t === 0 ? g : m, d = [], f = [];
			if (Tr(e, n, t, a, t === 0 ? i : r, d, f), d.length === 0) continue;
			d.length === 1 && (f[0] = 0);
			let v = [];
			for (let e = s[n]; e < s[n + 1]; e++) v.push(c[e]);
			v.sort((e, t) => _[o[e]] - _[o[t]] || e - t), y.push({
				v: n,
				side: t,
				span: a,
				ids: d,
				room: f,
				all: v
			});
		}
	}
	for (let e = 0, t = !0; t && e < 6; e++) {
		t = !1;
		for (let { v: n, side: a, span: o, ids: s, room: c, all: l } of y) {
			let u = a === 0 ? i : r, p = a === 0 ? f : d, m = 0, h = -o / 2;
			for (let r = 0; r <= l.length; r++) {
				let i = r < l.length && u[l[r]] === 0;
				if (r < l.length && !i) continue;
				let d = 0;
				for (let e = r - 1; e >= 0 && u[l[e]] !== 0; e--) d++;
				let f = i ? p[l[r]] - Qn : o / 2;
				if (d > 0) {
					let r = [], i = [], l = 0;
					for (let t = 0; t < d; t++) {
						t > 0 && (l += c[m + t]), r.push(v(s[m + t], a, n, o, e > 0) - l), i.push(1);
						let u = t > 0 && c[m + t] === 0;
						for (; r.length > 1 && (u || r[r.length - 2] / i[i.length - 2] > r[r.length - 1] / i[i.length - 1]);) {
							u = !1;
							let e = r.pop(), t = i.pop();
							r[r.length - 1] += e, i[i.length - 1] += t;
						}
					}
					let u = l, g = 0;
					l = 0;
					for (let e = 0; e < r.length; e++) {
						let n = f - u < h ? (h + f - u) / 2 : Math.max(h, Math.min(f - u, r[e] / i[e]));
						for (let r = 0; r < i[e]; r++, g++) g > 0 && (l += c[m + g]), Math.abs(p[s[m + g]] - n - l) > .01 && (t = !0), p[s[m + g]] = n + l;
					}
					m += d;
				}
				i && (h = p[l[r]] + Qn);
			}
		}
	}
}
function Mr(e, t, n, r) {
	let { n: i, KIND: a, RANK: o, EF: s, ET: c, EFD: l, ETD: u, layerStart: d, order: f, pos: p } = e, m = (e) => n !== void 0 && a[e] === 1 && n[o[e]] === 1, h = [], g = [], _ = [], v = [];
	for (let t = 0; t < s.length; t++) {
		if (m(s[t])) continue;
		let r = Dr(e, n, t, 1);
		h.push(s[t]), g.push(c[r]), _.push(l[t]), v.push(u[r]);
	}
	let y = (e) => t[g[e]] + v[e] - t[h[e]] - _[e], b = new Int32Array(i), x = [];
	for (let e = 0; e < i; e++) b[e] = e, x.push([e]);
	let S = (e, t) => {
		let n = b[e], r = b[t];
		if (n !== r) {
			x[n].length < x[r].length && ([n, r] = [r, n]);
			for (let e of x[r]) b[e] = n, x[n].push(e);
			x[r] = [];
		}
	}, C = [];
	for (let e = 0; e < h.length; e++) {
		let t = Math.abs(y(e));
		t < .01 ? S(h[e], g[e]) : t <= pr && C.push(e);
	}
	if (C.length === 0) return;
	C.sort((e, t) => Math.abs(y(e)) - Math.abs(y(t)) || e - t);
	let w = (t) => Rr(e, r, t), T = (e, n) => {
		for (let r of x[e]) {
			let i = d[o[r]], a = d[o[r] + 1], s = i + p[r];
			if (s > i && b[f[s - 1]] !== e && t[r] + n - t[f[s - 1]] < w(r) + w(f[s - 1]) - .01 || s + 1 < a && b[f[s + 1]] !== e && t[f[s + 1]] - t[r] - n < w(r) + w(f[s + 1]) - .01) return !1;
		}
		return !0;
	};
	for (let e of C) {
		let n = y(e);
		if (Math.abs(n) < .01) {
			S(h[e], g[e]);
			continue;
		}
		if (Math.abs(n) > pr || b[h[e]] === b[g[e]]) continue;
		let r = b[h[e]], i = b[g[e]], a = x[r].length <= x[i].length ? r : i;
		for (let o of [a, a === r ? i : r]) {
			let i = o === r ? n : -n;
			if (T(o, i)) {
				for (let e of x[o]) t[e] += i;
				S(h[e], g[e]);
				break;
			}
		}
	}
}
function Nr(e) {
	let { maxRank: t, KIND: n, layerStart: r, order: i } = e, a = new Uint8Array(t + 1), o = !1;
	for (let e = 1; e < t; e++) {
		let t = r[e + 1] > r[e];
		for (let a = r[e]; t && a < r[e + 1]; a++) n[i[a]] !== 1 && (t = !1);
		t && (a[e] = 1, o = !0);
	}
	return o ? a : void 0;
}
function Pr(e, t, n, r, i) {
	let { from: a, to: o, rank: s, track: c, levels: l, wide: u } = e, d = a.length, f = /* @__PURE__ */ new Map();
	for (let e = 0; e < d; e++) {
		if (c.push(-1), l.push(0), Math.abs(a[e] - o[e]) < fr) continue;
		let t = f.get(s[e]);
		t ? t.push(e) : f.set(s[e], [e]);
	}
	if (f.size === 0) return;
	let p = new Float64Array(d), m = new Float64Array(d);
	for (let e = 0; e < d; e++) p[e] = Math.min(a[e], o[e]), m[e] = Math.max(a[e], o[e]);
	let h = (e, t) => +(e >= p[t] - fr && e <= m[t] + fr), g = (e, t) => Math.abs(a[e] - a[t]) < fr || Math.abs(o[e] - o[t]) < fr, _ = (e, t) => p[e] < m[t] - fr && p[t] < m[e] - fr, v = (e, t) => _(e, t) && !g(e, t), y = (e, t) => _(e, t) || h(o[e], t) + h(a[t], e) + h(o[t], e) + h(a[e], t) > 0, b = (e, t) => h(o[e], t) + h(a[t], e), x = (e) => {
		let t = e.map((e, t) => t).sort((t, n) => p[e[t]] - p[e[n]]), n = [];
		for (let r = 0; r < t.length; r++) {
			let i = t[r], a = m[e[i]] + 4 * fr;
			for (let o = r + 1; o < t.length && p[e[t[o]]] <= a; o++) {
				let e = t[o];
				n.push(Math.min(i, e), Math.max(i, e));
			}
		}
		return n;
	}, S = (e) => {
		e.sort((e, t) => m[t] - p[t] - (m[e] - p[e]) || p[e] - p[t] || e - t);
		let t = e.length, r = [], i = e.map((e, t) => t), a = (e) => {
			for (; i[e] !== e;) e = i[e] = i[i[e]];
			return e;
		}, o = t <= hr, s = o ? x(e) : [], u = o ? e.map(() => []) : [];
		for (let t = 0; t < s.length; t += 2) {
			let n = s[t], r = s[t + 1];
			v(e[n], e[r]) && (u[n].push(r), u[r].push(n));
		}
		let d = e.map((e, t) => t);
		if (o) {
			let n = new Int32Array(t), o = [];
			for (let e = 0; e < t; e++) r.push([]), o.push([]);
			for (let t = 0; t < s.length; t += 2) {
				let c = s[t], l = s[t + 1], u = e[c], d = e[l];
				if (!y(u, d)) continue;
				i[a(c)] = a(l);
				let f = b(u, d), p = b(d, u);
				if (f === p) continue;
				let m = f < p ? c : l, h = f < p ? l : c;
				r[h].push(m), o[m].push(h), n[h]++;
			}
			let c = new Uint8Array(t);
			d = [];
			for (let e = 0; e < t; e++) {
				let e = -1;
				for (let r = 0; r < t && !(!c[r] && ((e < 0 || n[r] < n[e]) && (e = r), n[r] === 0)); r++);
				c[e] = 1, d.push(e);
				for (let t of o[e]) n[t]--;
			}
		}
		let f = /* @__PURE__ */ new Set(), h = [], g = 0;
		for (let t of d) {
			let n = e[t], i = 0;
			for (let n of r[t] ?? []) c[e[n]] >= i && (i = c[e[n]] + 1);
			if (o) {
				f.clear();
				for (let n of u[t]) f.add(c[e[n]]);
				for (; f.has(i);) i++;
			} else {
				for (; h[i]?.some((e) => v(n, e));) i++;
				(h[i] ??= []).push(n);
			}
			c[n] = i, i >= g && (g = i + 1);
		}
		let _ = new Int32Array(t).fill(g), S = new Int32Array(t).fill(-1);
		for (let n = 0; n < t; n++) {
			let t = a(n);
			_[t] = Math.min(_[t], c[e[n]]), S[t] = Math.max(S[t], c[e[n]]);
		}
		for (let r = 0; r < t; r++) {
			let t = a(r);
			l[e[r]] = S[t] - _[t] + 1, n && (c[e[r]] -= _[t]);
		}
		return g;
	}, C = (e, t, n) => {
		let r = kr(o[e] - a[e], t);
		for (let i = 0; i <= gr; i++) {
			let s = i / gr, c = 1 - s;
			n[2 * i] = a[e] + (o[e] - a[e]) * s * s * (3 - 2 * s), n[2 * i + 1] = t * (3 * r * s * c * c + 3 * (1 - r) * s * s * c + s * s * s);
		}
	}, w = (e, t, n) => {
		let r = n * n * 1.000000001;
		for (let i = 0; i <= gr; i++) {
			let a = e[2 * i], o = e[2 * i + 1];
			for (let e = 0; e < gr; e++) {
				let i = t[2 * e + 2] - t[2 * e], s = t[2 * e + 3] - t[2 * e + 1], c = Math.max(0, Math.min(1, ((a - t[2 * e]) * i + (o - t[2 * e + 1]) * s) / (i * i + s * s || 1))), l = a - t[2 * e] - c * i, u = o - t[2 * e + 1] - c * s;
				if (l * l + u * u < r && Math.hypot(l, u) < n) return !0;
			}
		}
		return !1;
	}, T = (e, t, n, r) => {
		let i = Math.max(n / 2, n - 2 * cr);
		return C(e, i, _r), C(t, i, vr), w(_r, vr, r) || w(vr, _r, r);
	};
	for (let [e, s] of f) {
		if (!n) {
			t[e] = S(s);
			continue;
		}
		if (s.length > hr) continue;
		let d = s.filter((e) => u[e] === 1);
		S(d);
		let f = new Set(d.filter((e) => l[e] > 1)), h = x(s);
		for (let t = 0; t < h.length; t += 2) {
			let n = s[h[t]], i = s[h[t + 1]];
			f.has(n) && f.has(i) || !v(n, i) || a[n] < o[n] != a[i] < o[i] || T(n, i, r[e], u[n] === 1 || u[i] === 1 ? lr : ur) && f.add(n).add(i);
		}
		for (let e of d) c[e] = -1, l[e] = 0;
		if (f.size === 0) continue;
		let b = 0, C = 0, w = /* @__PURE__ */ new Set();
		for (let e = 0; e < h.length; e += 2) {
			let t = s[h[e]], n = s[h[e + 1]];
			if (f.has(t) && f.has(n)) {
				if (!_(t, n)) continue;
				a[t] < o[t] == a[n] < o[n] ? g(t, n) || C++ : b++;
			} else (f.has(t) || f.has(n)) && y(t, n) && w.add(t).add(n);
		}
		if (b > C) {
			for (let t of s) (m[t] - p[t]) * dr > i[e] && (i[e] = (m[t] - p[t]) * dr);
			continue;
		}
		let E = s.filter((e) => f.has(e) || u[e] !== 1 && w.has(e));
		S(E);
		let D = 0;
		for (let e of E) l[e] > D && (D = l[e]);
		t[e] = D;
	}
}
function Fr(e, t, n, r, i, a, o) {
	let { maxRank: s, EF: c, ET: l, EFD: u, ETD: d, succStart: f, succE: p, predStart: m, predE: h, layerStart: g, order: _ } = e, v = new Float64Array(t.length), y = new Float64Array(t.length), b = new Float64Array(t.length);
	for (let a = 0; a < r.length; a++) {
		let o = r[a];
		if (o < 0) continue;
		let s = o + i[a] - 1, g = e.RANK[o];
		for (let e = o; e < s; e++) {
			if (!n[g + e - o]) continue;
			let r = e;
			for (; r + 1 < s && n[g + r + 1 - o];) r++;
			let i = h[m[e]], a = p[f[r]], _ = t[c[i]] + u[i], x = t[l[a]] + d[a], S = r - e + 2;
			for (let t = e; t <= r; t++) v[t] = _ + (x - _) * (t - e + 1) / S, y[t] = _, b[t] = x;
			e = r;
		}
	}
	let x = [];
	for (let r = 1; r < s; r++) {
		if (!n[r]) continue;
		let i = g[r], s = g[r + 1], c = Array.from(_.subarray(i, s)).sort((e, t) => y[e] - y[t] || b[e] - b[t] || e - t);
		for (let n = 0; n < c.length;) {
			x.length = 0;
			let r = n;
			for (; r < c.length && Math.abs(y[c[r]] - y[c[n]]) < 1 && Math.abs(b[c[r]] - b[c[n]]) < 1; r++) x.push(c[r]);
			x.sort((t, n) => e.pos[t] - e.pos[n]);
			for (let e = 0; e < x.length; e++) {
				let n = x[e];
				t[n] = v[n] + (e - (x.length - 1) / 2) * a, (x.length === 1 || a === 0) && (o[n] = 1);
			}
			n = r;
		}
	}
}
function Ir(e, t, n, r, i, a) {
	let { maxRank: o, W: s, KIND: c, RANK: l, EF: u, ET: d, EFD: f, ETD: p, succStart: m, succE: h, predStart: g, predE: _, layerStart: v, order: y } = e, b = new Uint8Array(o + 1), x = !1;
	for (let e = 1; e < o; e++) {
		let t = !1, n = !1;
		for (let r = v[e]; r < v[e + 1]; r++) {
			let e = c[y[r]];
			e === 2 ? t = !0 : e !== 1 && (n = !0);
		}
		t && !n && (b[e] = 1, x = !0);
	}
	if (x) for (let e = 0; e < n.length; e++) {
		let o = n[e];
		if (!(o < 0)) for (let n = o, x = o + r[e] - 1; n < x; n++) {
			if (c[n] !== 1 || !b[l[n]]) continue;
			let e = n, r = n;
			for (; e > o && a[e - 1];) e--;
			for (; r + 1 < x && a[r + 1];) r++;
			let S = _[g[e]], C = h[m[r]], w = t[u[S]] + f[S], T = t[d[C]] + p[C], E = Math.min(w, T) - i, D = Math.max(w, T) + i, O = !0, k = l[n];
			for (let e = v[k]; O && e < v[k + 1]; e++) {
				let n = y[e];
				c[n] === 2 && t[n] + s[n] / 2 > E && t[n] - s[n] / 2 < D && (O = !1);
			}
			if (!O) continue;
			a[n] = 1;
			let A = r - e + 2;
			for (let n = e; n <= r; n++) t[n] = w + (T - w) * (n - e + 1) / A;
		}
	}
}
function Lr(e, t) {
	let { n, real: r, maxRank: i, W: a, EF: o, ET: s, EFD: c, ETD: l, succStart: u, succE: d, predStart: f, predE: p, layerStart: m, order: h, pos: g, offsets: _, fixed: v, GRP: y, groupParent: b } = e, x = 0;
	for (let e = 0; e <= i; e++) x = Math.max(x, m[e + 1] - m[e]);
	if (x < 2) return [0, 0];
	let S = _ ? new Int32Array(o.length) : void 0, C = new Int32Array(S ? o.length : 0), w = new Int32Array(S ? n : 0), T = S ? d.slice() : d, E = new Uint8Array(S ? n : 0);
	if (S) {
		let e = p.slice(), t = (e, t, n, r) => {
			for (let i = t + 1; i < n; i++) if (r[e[i]] !== r[e[t]]) return e.subarray(t, n).sort((e, t) => r[e] - r[t]), !0;
			return !1;
		};
		for (let r = 0; r < n; r++) {
			if (w[r] = 1, t(e, f[r], f[r + 1], l)) for (let t = f[r] + 1; t < f[r + 1]; t++) l[e[t]] !== l[e[t - 1]] && w[r]++, C[e[t]] = w[r] - 1;
			t(T, u[r], u[r + 1], c) && (E[r] = 1);
		}
	}
	let D = 1;
	for (; D < (S ? x + o.length : x);) D <<= 1;
	let O = new Int32Array(2 * D), k = new Int32Array(o.length), A = () => {
		let e = 0;
		for (let t = 0; t < i; t++) {
			let n = m[t + 2] - m[t + 1];
			if (S) {
				let e = 0;
				for (let n = m[t + 1]; n < m[t + 2]; n++) {
					let t = h[n];
					for (let n = f[t]; n < f[t + 1]; n++) S[p[n]] = e + C[p[n]];
					e += w[t];
				}
				n = e;
			}
			if (n < 2) continue;
			let r = 0;
			for (let e = m[t]; e < m[t + 1]; e++) {
				let t = h[e], n = u[t], i = u[t + 1], a = r;
				for (let e = n; e < i; e++) k[r++] = S ? S[T[e]] : g[s[d[e]]];
				let o = r - a;
				if (!(o < 2)) {
					if (S && E[t]) for (let e = a + 1; e < r; e++) {
						let t = k[e], r = c[T[n + e - a]], i = e - 1;
						for (; i >= a && c[T[n + i - a]] === r && k[i] > t;) k[i + 1] = k[i], i--;
						k[i + 1] = t;
					}
					else if (o <= 12) for (let e = a + 1; e < r; e++) {
						let t = k[e], n = e - 1;
						for (; n >= a && k[n] > t;) k[n + 1] = k[n], n--;
						k[n + 1] = t;
					}
					else k.subarray(a, r).sort();
				}
			}
			if (r < 2) continue;
			let i = 1;
			for (; i < n;) i <<= 1;
			O.fill(0, 0, 2 * i);
			for (let t = 0; t < r; t++) {
				let n = k[t] + i;
				for (O[n]++; n > 1;) !(n & 1) && (e += O[n + 1]), n >>= 1, O[n]++;
			}
		}
		return e;
	}, j = A(), M = new Float64Array(n), N = new Int32Array(x), P = new Int32Array(x), F = b ? b.length : 0, I = new Int32Array(F);
	for (let e = 0; e < F; e++) for (let t = e; t >= 0; t = b[t]) I[e]++;
	let L = new Float64Array(F), R = new Int32Array(F), z = new Int32Array(F), B = (e, t) => {
		let r = m[e], i = m[e + 1];
		for (let e = r; e < i; e++) for (let t = y[h[e]]; t >= 0; t = b[t]) L[t] = 0, R[t] = 0;
		for (let e = r; e < i; e++) {
			let n = h[e];
			for (let r = y[n]; r >= 0; r = b[r]) R[r] === 0 && (z[r] = e), L[r] += t[n], R[r]++;
		}
		let a = (e) => e >= n ? L[e - n] / R[e - n] : t[e], o = (e) => e >= n ? z[e - n] : r + g[e], s = Array.from(h.subarray(r, i)).sort((e, t) => {
			let r = e, i = t, s = y[e], c = y[t], l = s < 0 ? 0 : I[s], u = c < 0 ? 0 : I[c];
			for (; l > u; l--) r = n + s, s = b[s];
			for (; u > l; u--) i = n + c, c = b[c];
			for (; s !== c;) r = n + s, s = b[s], i = n + c, c = b[c];
			return a(r) - a(i) || o(r) - o(i);
		});
		h.set(s, r);
		for (let e = r; e < i; e++) g[h[e]] = e - r;
	};
	if (y) {
		let e = new Float64Array(n);
		for (let t = 0; t <= i; t++) {
			for (let n = m[t]; n < m[t + 1]; n++) e[h[n]] = n - m[t];
			B(t, e);
		}
	}
	let V = y ? A() : j;
	if (V === 0) return [0, j];
	let H = h.slice(), U = Math.min(V, j), ee = (e, n) => {
		let b = e ? f : u, x = e ? p : d, S = e ? o : s, C = e ? c : l;
		for (let o = 1; o <= i; o++) {
			let s = e ? o : i - o;
			if (v[s]) continue;
			let c = m[s], l = m[s + 1], u = 0;
			for (let n = c; n < l; n++) {
				let i = h[n], o = i < r ? t[i].pin : 0;
				if (o !== 0) {
					M[i] = o * 1e9, N[u++] = i;
					continue;
				}
				let d = b[i], f = b[i + 1];
				if (d === f) {
					if (y) {
						let t = e ? m[s] - m[s - 1] : m[s + 2] - m[s + 1];
						M[i] = (n - c) * t / (l - c);
						continue;
					}
					M[i] = -1;
					continue;
				}
				let p = 0;
				for (let e = d; e < f; e++) {
					let t = S[x[e]];
					p += g[t], _ && a[t] > 0 && (p += C[x[e]] / a[t]);
				}
				M[i] = p / (f - d), N[u++] = i;
			}
			if (y) {
				B(s, M);
				continue;
			}
			if (u < 2) continue;
			xr(N, u, M, g, n, P);
			let d = 0;
			for (let e = c; e < l; e++) M[h[e]] !== -1 && (h[e] = N[d++]);
			for (let e = c; e < l; e++) g[h[e]] = e - c;
		}
	}, te = () => {
		let e = 0;
		for (let t = 0; t <= i; t++) for (let n = m[t]; n < m[t + 1]; n++) if (!(h[n] >= r)) for (let r = n + 1; r < m[t + 1]; r++) h[r] < h[n] && e++;
		return e;
	}, W = () => {
		for (let e = 0; e <= i; e++) for (let t = m[e]; t < m[e + 1]; t++) g[h[t]] = t - m[e];
	}, ne = (e) => e < r ? t[e].pin : 0, re = (e, t) => {
		let n = t ? o[e] : s[e];
		return _ && a[n] > 0 ? g[n] + (t ? c[e] : l[e]) / a[n] : g[n];
	}, G = (e, t) => {
		let n = 0;
		for (let r = f[e]; r < f[e + 1]; r++) {
			let e = re(p[r], !0);
			for (let r = f[t]; r < f[t + 1]; r++) e > re(p[r], !0) && n++;
		}
		for (let r = u[e]; r < u[e + 1]; r++) {
			let e = re(d[r], !1);
			for (let r = u[t]; r < u[t + 1]; r++) e > re(d[r], !1) && n++;
		}
		return n;
	}, K = () => {
		for (let e = 0; e < 8; e++) {
			let e = !1;
			for (let t = 0; t <= i; t++) {
				if (v[t]) continue;
				let n = m[t];
				for (let r = n; r + 1 < m[t + 1]; r++) {
					let t = h[r], i = h[r + 1];
					ne(t) !== ne(i) || y && y[t] !== y[i] || G(i, t) >= G(t, i) || (h[r] = i, h[r + 1] = t, g[i] = r - n, g[t] = r + 1 - n, e = !0);
				}
			}
			if (!e) break;
		}
	}, ie = h.slice(), q = n <= 600, ae = H, oe = 1 / 0;
	for (let e = 0; e < (q ? 2 : 1); e++) {
		e > 0 && (h.set(ie), W());
		let t = U, n = ie.slice();
		for (let r = 0, i = 0; i < 4 && r < Xn; r++, i++) {
			ee((r + e) % 2 == 0, r % 4 >= 2);
			let a = A();
			if (a < t && (t = a, n.set(h), i = 0, a === 0)) break;
		}
		if (h.set(n), q && t > 0) {
			W(), K();
			let e = A();
			e < t && (t = e, n.set(h));
		}
		let r = q ? te() : 0;
		(e === 0 || t < V || t === V && r < oe) && (V = t, ae = n, oe = r);
	}
	if (h.set(ae), W(), H.set(ae), y && (V = A()), !q) return [V, j];
	for (let e = 0; e < r; e++) if (t[e].pin !== 0) return [V, j];
	if (oe === 0 || v[0] || v[i]) return [V, j];
	for (let e = 0; e <= i; e++) h.subarray(m[e], m[e + 1]).reverse();
	return W(), (A() > V || te() >= oe) && h.set(H), [V, j];
}
function Rr(e, t, n) {
	return e.W[n] / 2 + (e.KIND[n] === 0 ? t.nodeSep : t.edgeSep) / 2;
}
function zr(e, t) {
	let { n, maxRank: r, W: i, KIND: a, EF: o, ET: s, EFD: c, ETD: l, succStart: u, succE: d, predStart: f, predE: p, layerStart: m, order: h, pos: g } = e, _ = o.length, v = new Float64Array(n);
	for (let r = 0; r < n; r++) v[r] = Rr(e, t, r);
	let y = new Int32Array(_);
	for (let e = 0; e < _; e++) y[e] = g[s[e]];
	for (let e = 0; e < n; e++) u[e + 1] - u[e] > 1 && br(d, u[e], u[e + 1], y);
	for (let e = 0; e < _; e++) y[e] = g[o[e]];
	for (let e = 0; e < n; e++) f[e + 1] - f[e] > 1 && br(p, f[e], f[e + 1], y);
	let b = new Uint8Array(_);
	for (let e = 1; e <= r; e++) {
		let t = m[e] - m[e - 1], n = m[e], r = m[e + 1], i = 0, s = n;
		for (let e = n; e < r; e++) {
			let n = h[e], c = -1;
			if (yr(a[n])) {
				let e = o[p[f[n]]];
				yr(a[e]) && (c = e);
			}
			let l = c >= 0 ? g[c] : t;
			if (c >= 0 || e === r - 1) {
				for (let t = s; t <= e; t++) {
					let e = h[t], n = yr(a[e]);
					for (let t = f[e]; t < f[e + 1]; t++) {
						let e = p[t], r = g[o[e]];
						(r < i || l < r) && !(n && yr(a[o[e]])) && (b[e] = 1);
					}
				}
				s = e + 1, i = l;
			}
		}
	}
	let x = [], S = new Int32Array(n), C = new Int32Array(n), w = new Float64Array(n), T = new Int32Array(n), E = new Int32Array(n), D = new Float64Array(n), O = new Int32Array(n), k = new Int32Array(n + 1), A = new Int32Array(n), j = new Int32Array(n), M = new Int32Array(n), N = new Float64Array(n);
	for (let e = 0; e < 4; e++) {
		let t = e < 2, i = (e & 1) == 1, a = t ? f : u, _ = t ? p : d, y = t ? o : s, P = t ? l : c, F = t ? c : l;
		for (let e = 0; e < n; e++) S[e] = e, C[e] = e, w[e] = 0, O[e] = 0, k[e + 1] = 0, N[e] = 0;
		for (let e = 0; e <= r; e++) {
			let n = t ? e : r - e, o = m[n], s = m[n + 1], c = t ? n - 1 : n + 1, l = c >= 0 && c <= r ? m[c + 1] - m[c] - 1 : 0, u = -1;
			for (let e = i ? s - 1 : o; i ? e >= o : e < s; i ? e-- : e++) {
				let t = h[e], n = a[t], r = a[t + 1] - n;
				if (r === 0) continue;
				let o = n + (r - 1 >> 1), s = n + (r >> 1);
				for (let e = 0; e < 2 && (e !== 1 || o !== s); e++) {
					let n = _[e === 0 === i ? s : o], r = y[n], a = i ? l - g[r] : g[r];
					C[t] === t && u < a && b[n] === 0 && (C[r] = t, C[t] = S[t] = S[r], w[t] = w[r] + F[n] - P[n], u = a);
				}
			}
		}
		let I = 0;
		for (let e = 0; e <= r; e++) {
			let t = m[e], n = m[e + 1];
			for (let e = t + 1; e < n; e++) {
				let t = i ? h[e] : h[e - 1], n = i ? h[e - 1] : h[e], r = v[t] + v[n];
				T[I] = S[t], E[I] = S[n], D[I] = i ? r - w[t] + w[n] : r + w[t] - w[n], O[S[n]]++, k[S[t] + 1]++, I++;
			}
		}
		for (let e = 0; e < n; e++) k[e + 1] += k[e];
		for (let e = 0; e < n; e++) j[e] = k[e];
		for (let e = 0; e < I; e++) A[j[T[e]]++] = e;
		let L = 0;
		for (let e = 0; e < n; e++) S[e] === e && O[e] === 0 && (M[L++] = e);
		for (let e = 0; e < L; e++) {
			let t = M[e];
			for (let e = k[t]; e < k[t + 1]; e++) {
				let n = A[e], r = E[n];
				N[t] + D[n] > N[r] && (N[r] = N[t] + D[n]), --O[r] === 0 && (M[L++] = r);
			}
		}
		for (let e = L - 1; e >= 0; e--) {
			let t = M[e], n = 1 / 0;
			for (let e = k[t]; e < k[t + 1]; e++) {
				let t = A[e], r = N[E[t]] - D[t];
				r < n && (n = r);
			}
			n !== 1 / 0 && n > N[t] && (N[t] = n);
		}
		let R = new Float64Array(n);
		for (let e = 0; e < n; e++) R[e] = (i ? -N[S[e]] : N[S[e]]) + w[e];
		x.push(R);
	}
	let P = 0, F = 1 / 0, I = [], L = [];
	for (let e = 0; e < 4; e++) {
		let t = 1 / 0, r = -1 / 0, a = x[e];
		for (let e = 0; e < n; e++) {
			let n = i[e] / 2;
			a[e] - n < t && (t = a[e] - n), a[e] + n > r && (r = a[e] + n);
		}
		I.push(t), L.push(r), r - t < F && (F = r - t, P = e);
	}
	for (let e = 0; e < 4; e++) {
		let t = e & 1 ? L[P] - L[e] : I[P] - I[e];
		if (t !== 0) {
			let r = x[e];
			for (let e = 0; e < n; e++) r[e] += t;
		}
	}
	let R = new Float64Array(n);
	for (let e = 0; e < n; e++) {
		let t = x[0][e], n = x[1][e], r = x[2][e], i = x[3][e], a;
		t > n && (a = t, t = n, n = a), r > i && (a = r, r = i, i = a), t > r && (a = t, t = r, r = a), n > i && (a = n, n = i, i = a), n > r && (a = n, n = r, r = a), R[e] = (n + r) / 2;
	}
	return R;
}
function Br(e) {
	return e === "BT" || e === "LR" || e === "RL" ? e : "TB";
}
var Vr = 4e4, Hr = 400, Ur = 500, Wr = 1.5, Gr = 4;
function Kr(e, t, n, r) {
	let i = [];
	for (let t of e) i.push(t.x, t.y, t.w, t.h);
	let a = [];
	for (let e of t) a.push(e.labelX, e.labelY);
	let o = [];
	for (let e of n) {
		o.push(e.x, e.y);
		for (let t of e.ports) o.push(t.px, t.py);
	}
	return {
		nodes: i,
		routes: t.map((e) => e.route),
		labels: a,
		levels: o,
		total: r
	};
}
function qr(e, t, n, r) {
	t.forEach((t, n) => {
		t.x = e.nodes[4 * n], t.y = e.nodes[4 * n + 1], t.w = e.nodes[4 * n + 2], t.h = e.nodes[4 * n + 3];
	}), n.forEach((t, n) => {
		t.route = e.routes[n], t.labelX = e.labels[2 * n], t.labelY = e.labels[2 * n + 1];
	});
	let i = 0;
	for (let t of r) {
		t.x = e.levels[i++], t.y = e.levels[i++];
		for (let n of t.ports) n.px = e.levels[i++], n.py = e.levels[i++];
	}
	return e.total;
}
var Jr = 24, Yr = .5, Xr = 3, Zr = 2, Qr = Math.max(3, Xr, Zr + 1), $r = .62, ei = 128;
function ti(e) {
	return e.tracks ? 1 : e.straight ? 2 : 0;
}
function ni(e, t, n = 0) {
	let r = 0;
	for (let e of t) e.src !== e.dst && e.route.length > 3 && (r += (e.route.length / 3 - 1) * Qr);
	let i = new Float64Array(r), a = new Float64Array(r), o = new Float64Array(r), s = new Float64Array(r), c = new Float64Array(r), l = new Float64Array(r), u = new Int32Array(r), d = new Uint8Array(r), f = 0, p = 1 / 0, m = -1 / 0, h = NaN, g = NaN, _ = NaN, v = NaN, y = (e, t, n, r, y, b) => {
		let x = f - 1;
		n === _ && r === v && (b === r && g === r || y === n && h === n) && u[x] === e && d[x] === t && (n - h) * (y - n) + (r - g) * (b - r) > 0 && (f--, n = h, r = g), h = n, g = r, _ = y, v = b, d[f] = t, i[f] = Math.min(n, y), o[f] = Math.max(n, y), a[f] = n <= y ? r : b, s[f] = n <= y ? b : r, c[f] = Math.min(r, b), l[f] = Math.max(r, b), c[f] < p && (p = c[f]), l[f] > m && (m = l[f]), u[f++] = e;
	};
	for (let e = 0; e < t.length; e++) {
		let r = t[e];
		if (r.src === r.dst) continue;
		let i = r.route, a = (e) => Math.abs(i[e] - i[e - 3]) < .01 || Math.abs(i[e + 1] - i[e - 2]) < .01, o = (e) => Math.abs(i[e] - i[e - 3]) + Math.abs(i[e + 1] - i[e - 2]), s = (e) => n === 0 && e > 0 && e < i.length - 3 && a(e) && a(e + 3) && o(e) >= .01 && o(e + 3) >= .01 && Math.abs(i[e] - i[e - 3]) < .01 != Math.abs(i[e + 3] - i[e]) < .01, c = i[0], l = i[1];
		for (let t = 3; t < i.length; t += 3) {
			let r = +(t === 3) | (t === i.length - 3 ? 2 : 0), u = c, d = l, f = i[t], p = i[t + 1];
			if (c = f, l = p, a(t) || n === 2) {
				if (!s(t)) {
					y(e, r, u, d, f, p);
					continue;
				}
				let n = s(t - 3) ? o(t) / 2 : o(t), a = s(t + 3) ? o(t + 3) / 2 : o(t + 3), m = (f - i[t - 3]) / o(t), h = (p - i[t - 2]) / o(t), g = (i[t + 3] - f) / o(t + 3), _ = (i[t + 4] - p) / o(t + 3), v = f - m * n, b = p - h * n;
				y(e, r, u, d, v, b);
				let x = f - m * n * (1 - $r), S = p - h * n * (1 - $r), C = f + g * a * (1 - $r), w = p + _ * a * (1 - $r);
				c = f + g * a, l = p + _ * a;
				let T = r | (t + 3 === i.length - 3 ? 2 : 0), E = v, D = b;
				for (let t = 1; t <= Zr; t++) {
					let n = t / Zr, r = 1 - n, i = r * r * r * v + 3 * r * r * n * x + 3 * r * n * n * C + n * n * n * c, a = r * r * r * b + 3 * r * r * n * S + 3 * r * n * n * w + n * n * n * l;
					y(e, T, E, D, i, a), E = i, D = a;
				}
				continue;
			}
			if (n === 1) {
				let n = i[t + 2] === 0, a = n ? u : (u + f) / 2, o = n ? (d + p) / 2 : d;
				y(e, r, u, d, a, o), y(e, r, a, o, n ? f : a, n ? o : p), y(e, r, n ? f : a, n ? o : p, f, p);
				continue;
			}
			let m = i[t + 2] === 0, h = m ? kr(f - u, p - d) : kr(p - d, f - u), g = u, _ = d;
			for (let t = 1; t <= Xr; t++) {
				let n = t / Xr, i = 1 - n, a = n * n * (3 - 2 * n), o = 3 * h * n * i * i + 3 * (1 - h) * n * n * i + n * n * n, s = u + (f - u) * (m ? a : o), c = d + (p - d) * (m ? o : a);
				y(e, r, g, _, s, c), g = s, _ = c;
			}
		}
	}
	let b = m > p ? Math.round(Math.sqrt(f)) : 1, x = m > p ? b / (m - p) : 0, S = (e) => Math.min(b - 1, Math.floor((e - p) * x)), C = new Int32Array(f), w = new Int32Array(b + 1);
	for (let e = 0; e < f; e++) {
		C[e] = S(c[e]);
		for (let t = C[e], n = S(l[e]); t <= n; t++) w[t + 1]++;
	}
	for (let e = 0; e < b; e++) w[e + 1] += w[e];
	let T = w.slice(0, b), E = new Int32Array(w[b]);
	for (let e = 0; e < f; e++) for (let t = C[e], n = S(l[e]); t <= n; t++) E[T[t]++] = e;
	let D = new Float64Array(t.length * 8), O = (e, t, n, r) => Math.abs(e[t] - e[n]) < Yr && Math.abs(e[t] - e[r]) < Yr || Math.abs(e[t + 1] - e[n + 1]) < Yr && Math.abs(e[t + 1] - e[r + 1]) < Yr;
	for (let e = 0; e < t.length; e++) {
		let n = t[e].route;
		if (n.length < 6) continue;
		let r = 3;
		for (; r + 3 < n.length && O(n, 0, r, r + 3);) r += 3;
		let i = n.length - 3, a = i - 3;
		for (; a >= 3 && O(n, i, a, a - 3);) a -= 3;
		D.set([
			n[0],
			n[1],
			n[r],
			n[r + 1],
			n[a],
			n[a + 1],
			n[i],
			n[i + 1]
		], e * 8);
	}
	let k = (e, t, n, r) => {
		let i = e * 8 + (t === 1 ? 0 : 4), a = D[i], o = D[i + 1], s = D[i + 2] - a, c = D[i + 3] - o, l = s * s + c * c, u = l > 0 ? Math.max(0, Math.min(1, ((n - a) * s + (r - o) * c) / l)) : 0;
		return Math.hypot(n - a - u * s, r - o - u * c) < Yr;
	}, A = 0;
	for (let n = 0; n < b; n++) {
		let r = w[n + 1];
		if (r - w[n] > ei) E.subarray(w[n], r).sort((e, t) => i[e] - i[t] || e - t);
		else for (let e = w[n] + 1; e < r; e++) {
			let t = E[e], r = e;
			for (; r > w[n] && i[E[r - 1]] > i[t]; r--) E[r] = E[r - 1];
			E[r] = t;
		}
		for (let f = w[n]; f < r; f++) {
			let p = E[f], m = o[p] - i[p], h = s[p] - a[p], g = C[p] === n;
			for (let _ = f + 1; _ < r; _++) {
				let r = E[_];
				if (i[r] > o[p]) break;
				if (l[r] < c[p] || c[r] > l[p] || u[p] === u[r] || !g && C[r] !== n) continue;
				let f = m * (a[r] - a[p]) - h * (i[r] - i[p]), v = m * (s[r] - a[p]) - h * (o[r] - i[p]);
				if (f > 0 == v > 0) continue;
				let y = o[r] - i[r], b = s[r] - a[r], x = y * (a[p] - a[r]) - b * (i[p] - i[r]), S = y * (s[p] - a[r]) - b * (o[p] - i[r]);
				if (x > 0 == S > 0) continue;
				let w = t[u[p]], T = t[u[r]], D = x / (x - S), O = i[p] + D * m, j = a[p] + D * h, M = (t, n, i) => (d[p] & n) !== 0 && (d[r] & i) !== 0 || Math.abs(O - e[t].x) < e[t].w / 2 + Jr && Math.abs(j - e[t].y) < e[t].h / 2 + Jr || k(u[p], n, O, j) && k(u[r], i, O, j);
				w.src === T.src && M(w.src, 1, 1) || w.src === T.dst && M(w.src, 1, 2) || w.dst === T.src && M(w.dst, 2, 1) || w.dst === T.dst && M(w.dst, 2, 2) || A++;
			}
		}
	}
	return A;
}
function ri(e, t, n, r) {
	for (let t of e) t.x += n, t.y += r;
	for (let e of t) {
		for (let t = 0; t < e.route.length; t += 3) e.route[t] += n, e.route[t + 1] += r;
		e.labelX += n, e.labelY += r;
	}
}
function ii(e, t, n = -1) {
	return {
		w: e,
		h: t,
		parent: n,
		isGroup: !1,
		dir: void 0,
		padX: 0,
		padTop: 0,
		padBottom: 0,
		minW: 0,
		seq: 0,
		span: 0,
		x: 0,
		y: 0
	};
}
function ai(e) {
	return e === "TB" ? 0 : e === "BT" ? 2 : e === "LR" ? 3 : 1;
}
function oi(e) {
	return e + 2 & 3;
}
function si(e, t, n, r) {
	let i = e.length, a = /* @__PURE__ */ new Map(), o = [], s = (e, t) => {
		let n = {
			id: e,
			dir: t,
			items: [],
			edges: [],
			ports: [],
			portOf: /* @__PURE__ */ new Map(),
			routes: /* @__PURE__ */ new Map(),
			x: 0,
			y: 0
		};
		return a.set(e, n), n;
	}, c = s(-1, n), l = [];
	for (let e = 0; e < i; e++) l.push([]);
	let u = [];
	for (let t = 0; t < i; t++) {
		let n = e[t].parent;
		n >= 0 && n < i && n !== t && e[n].isGroup ? l[n].push(t) : (e[t].parent = -1, u.push(t));
	}
	c.items = u, o.push(c);
	let d = new Int32Array(i), f = new Uint8Array(i), p = (t) => {
		for (let n = t; n < o.length; n++) {
			let t = o[n];
			for (let n of t.items) if (f[n] = 1, d[n] = t.id < 0 ? 0 : d[t.id] + 1, e[n].isGroup) {
				let r = s(n, e[n].dir ?? t.dir);
				r.items = l[n], o.push(r);
			}
		}
	};
	p(0);
	for (let t = 0; t < i; t++) {
		if (f[t]) continue;
		let r = e[t].parent;
		if (l[r] = l[r].filter((e) => e !== t), e[t].parent = -1, c.items.push(t), f[t] = 1, d[t] = 0, e[t].isGroup) {
			let r = o.length, i = s(t, e[t].dir ?? n);
			i.items = l[t], o.push(i), p(r);
		}
	}
	for (let t = o.length - 1; t > 0; t--) {
		let n = o[t], r = 1 / 0;
		for (let t of n.items) e[t].seq < r && (r = e[t].seq);
		r !== 1 / 0 && (e[n.id].seq = r);
	}
	for (let t of o) t.items.sort((t, n) => e[t].seq - e[n].seq || t - n);
	let m = 0;
	for (let n of t) {
		let t = n.src, r = n.dst, i = 0;
		for (; d[t] > d[r]; i++) t = e[t].parent;
		for (; d[r] > d[t]; i++) r = e[r].parent;
		for (; t !== r && e[t].parent !== e[r].parent; i += 2) t = e[t].parent, r = e[r].parent;
		t !== r && (m + i > Vr ? (n.src = t, n.dst = r) : m += i);
	}
	let h = [], g = [];
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (r.route = [], r.src === r.dst) {
			h.push(n);
			continue;
		}
		let i = r.src, o = r.dst, s = [], c = [];
		for (; d[i] > d[o];) s.push(i), i = e[i].parent;
		for (; d[o] > d[i];) c.push(o), o = e[o].parent;
		if (i === o) g.push(n);
		else {
			for (; e[i].parent !== e[o].parent;) s.push(i), c.push(o), i = e[i].parent, o = e[o].parent;
			a.get(e[i].parent).edges.push({
				e: n,
				a: i,
				b: o
			});
			for (let [t, r] of [[s, !0], [c, !1]]) for (let i of t) {
				let t = a.get(e[i].parent), o = {
					e: n,
					inner: i,
					out: r,
					side: 0,
					hint: NaN,
					px: 0,
					py: 0,
					route: []
				};
				t.ports.push(o), t.portOf.set(n * 2 + +!r, o);
			}
		}
	}
	let _ = new Int32Array(i), v = (e, t, n) => (n ? t.src : t.dst) !== e, y = (n, r) => {
		let i = n.dir === "TB" || n.dir === "BT", o = ai(n.dir), s = [], c = [];
		n.items.forEach((t, n) => {
			_[t] = n;
			let a = e[t], o = r ? Jn(i ? a.w : a.h, i ? a.h : a.w) : Jn(0, 0);
			o.span = a.isGroup ? Math.min(a.span, o.w - 2 * a.padX) : a.span, o.key = S ? x[t] : NaN, s.push(o);
		});
		let l = (n, r, i) => e[n].isGroup && v(n, t[r], i), u = (n, o, s) => {
			if (!r || !e[n].isGroup || !v(n, t[o], s)) return 0;
			let c = a.get(n).portOf.get(o * 2 + +!s);
			return i ? c.px - e[n].w / 2 : c.py - e[n].h / 2;
		};
		for (let e of n.edges) {
			let n = t[e.e], a = Yn(_[e.a], _[e.b], n.minlen);
			r && (a.labelW = i ? n.labelW : n.labelH, a.labelH = i ? n.labelH : n.labelW, a.tailDx = u(e.a, e.e, !0), a.headDx = u(e.b, e.e, !1), a.tailFixed = l(e.a, e.e, !0), a.headFixed = l(e.b, e.e, !1)), c.push(a);
		}
		let d = new Int32Array(n.ports.length).fill(-1);
		return n.ports.forEach((e, r) => {
			if (e.side === o || e.side === oi(o)) {
				let i = s.length, a = Jn(0, 0, e.side === o ? 3 : 4);
				a.key = S ? x[e.out ? t[e.e].dst : t[e.e].src] : NaN, a.hint = Number.isNaN(e.hint) && S && w ? w(n, e) : e.hint, s.push(a), d[r] = i;
				let f = e.out ? Yn(_[e.inner], i) : Yn(i, _[e.inner]);
				e.out ? (f.tailDx = u(e.inner, e.e, !0), f.tailFixed = l(e.inner, e.e, !0)) : (f.headDx = u(e.inner, e.e, !1), f.headFixed = l(e.inner, e.e, !1)), c.push(f);
			} else s[_[e.inner]].pin = e.side === 0 || e.side === 3 ? -1 : 1;
		}), {
			lnodes: s,
			ledges: c,
			dummies: d
		};
	}, b = m > 1 && m <= Hr && t.length <= Ur, x = new Float64Array(i).fill(NaN), S = !1, C = 0, w, T = o.length > 1 && b;
	for (let e of o) e.dir !== n && (T = !1);
	if (T) {
		let a = n === "TB" || n === "BT", o = new Int32Array(i).fill(-1), s = new Int32Array(i).fill(-1), c = [], l = [], u = [];
		for (let t = 0; t < i; t++) e[t].isGroup && (s[t] = u.length, u.push(-1));
		for (let t = 0; t < i; t++) {
			let n = e[t].parent;
			e[t].isGroup ? u[s[t]] = n >= 0 ? s[n] : -1 : (o[t] = c.length, c.push(Jn(a ? e[t].w : e[t].h, a ? e[t].h : e[t].w)), l.push(n >= 0 ? s[n] : -1));
		}
		let d = [], f = new Int32Array(t.length).fill(-1);
		t.forEach((e, t) => {
			e.src === e.dst || o[e.src] < 0 || o[e.dst] < 0 || (f[t] = d.length, d.push(Yn(o[e.src], o[e.dst], e.minlen, a ? e.labelW : e.labelH, a ? e.labelH : e.labelW)));
		});
		let p = Sr(c, d, {
			...r,
			groups: {
				of: Int32Array.from(l),
				parent: Int32Array.from(u)
			},
			orderOnly: !0
		});
		C = Math.min(p.crossings ?? 0, p.declared ?? 0);
		let m = new Float64Array(i), h = new Int32Array(i), g = new Int32Array(i).fill(-1);
		for (let t = 0; t < i; t++) if (!(o[t] < 0)) {
			x[t] = c[o[t]].x;
			for (let n = e[t].parent; n >= 0; n = e[n].parent) m[n] += x[t], h[n]++, g[n] = Math.max(g[n], c[o[t]].rank);
		}
		for (let e = 0; e < i; e++) h[e] > 0 && (x[e] = m[e] / h[e]);
		w = (e, n) => {
			let r = f[n.e];
			if (r < 0 || e.id < 0 || !n.out || n.side !== oi(ai(e.dir))) return NaN;
			let i = d[r].points, a = x[t[n.e].src], o = 0;
			for (let t = 0; t < i.length; t += 2) i[t] === g[e.id] && (a = i[t + 1]), i[t] === g[e.id] + 1 && (o = i[t + 1]);
			return a + o * 1e-6;
		};
	}
	let E = /* @__PURE__ */ new Map(), D = (e, t, n) => {
		if (!b) return {
			lnodes: t,
			ledges: n,
			size: Sr(t, n, r)
		};
		let i = [];
		for (let e of t) i.push(e.w, e.h, e.kind, e.pin, e.hint, e.key, e.span);
		for (let e of n) i.push(e.tail, e.head, e.minlen, e.labelW, e.labelH, e.tailDx, e.headDx, +e.tailFixed, +e.headFixed);
		let a = E.get(e.id);
		a || E.set(e.id, a = []);
		for (let e of a) {
			let t = e.given.length === i.length;
			for (let n = 0; t && n < i.length; n++) t = Object.is(e.given[n], i[n]);
			if (t) return e;
		}
		let o = {
			given: i,
			lnodes: t,
			ledges: n,
			size: Sr(t, n, r)
		};
		return a.push(o), o;
	}, O = {
		width: 0,
		height: 0
	}, k = () => {
		for (let n of o) {
			for (let r of n.ports) e[r.inner].isGroup && v(r.inner, t[r.e], r.out) && (a.get(r.inner).portOf.get(r.e * 2 + +!r.out).side = r.side);
			if (n.edges.length === 0) continue;
			let r = !1;
			for (let i of n.edges) {
				let n = t[i.e];
				(e[i.a].isGroup && n.src !== i.a || e[i.b].isGroup && n.dst !== i.b) && (r = !0);
			}
			if (!r) continue;
			let { lnodes: i, ledges: o } = y(n, !1);
			Cr(i, o), wr(i, o, 1);
			let s = ai(n.dir);
			n.edges.forEach((n, r) => {
				let i = t[n.e], c = !o[r].reversed;
				e[n.a].isGroup && i.src !== n.a && (a.get(n.a).portOf.get(n.e * 2).side = c ? oi(s) : s), e[n.b].isGroup && i.dst !== n.b && (a.get(n.b).portOf.get(n.e * 2 + 1).side = c ? s : oi(s));
			});
		}
		for (let n = o.length - 1; n >= 0; n--) {
			let r = o[n], i = r.id >= 0 ? e[r.id] : void 0, s = r.dir === "TB" || r.dir === "BT", c = r.dir === "BT" || r.dir === "RL", l = y(r, !0), { lnodes: u, ledges: d, size: f } = D(r, l.lnodes, l.ledges), p = l.dummies, m = s ? f.width : f.height, h = s ? f.height : f.width, g = i ? i.padX : 0, _ = i ? i.padTop : 0, b = Math.max(m + 2 * g, i ? i.minW : 0), x = h + _ + (i ? i.padBottom : 0), S = (b - m) / 2, C = _, w = (e, t) => S + (s ? e : c ? f.height - t : t), T = (e, t) => C + (s ? c ? f.height - t : t : e), E = +!s, k = (e) => {
				let t = [];
				for (let n = 0; n < e.length; n += 2) t.push(w(e[n], e[n + 1]), T(e[n], e[n + 1]), E);
				return t;
			};
			r.items.forEach((t, n) => {
				e[t].x = w(u[n].x, u[n].y), e[t].y = T(u[n].x, u[n].y);
			}), r.edges.forEach((e, n) => {
				let i = d[n];
				r.routes.set(e.e, k(i.points));
				let a = t[e.e];
				a.labelW > 0 && (a.labelX = w(i.labelX, i.labelY), a.labelY = T(i.labelX, i.labelY));
			});
			let A = r.edges.length;
			r.ports.forEach((n, r) => {
				let i = e[n.inner];
				if (p[r] >= 0) {
					let e = k(d[A++].points), t = n.out ? e.length - 3 : 0, r = e[t], i = e[t + 1];
					n.side === 0 ? i = 0 : n.side === 2 ? i = x : r = n.side === 3 ? 0 : b, n.out ? e.push(r, i, E) : e.unshift(r, i, E), n.px = r, n.py = i, n.route = e;
					return;
				}
				let o = i.x, s = i.y;
				if (i.isGroup && v(n.inner, t[n.e], n.out)) {
					let e = a.get(n.inner).portOf.get(n.e * 2 + +!n.out);
					o += e.px - i.w / 2, s += e.py - i.h / 2;
				} else n.side === 0 ? s -= i.h / 2 : n.side === 2 ? s += i.h / 2 : n.side === 3 ? o -= i.w / 2 : o += i.w / 2;
				let c = o, l = s;
				n.side === 0 ? l = 0 : n.side === 2 ? l = x : c = n.side === 3 ? 0 : b;
				let u = n.side === 0 || n.side === 2 ? 0 : 1;
				n.px = c, n.py = l, n.route = n.out ? [
					o,
					s,
					u,
					c,
					l,
					u
				] : [
					c,
					l,
					u,
					o,
					s,
					u
				];
			}), i ? (i.w = b, i.h = x) : O = {
				width: b,
				height: x
			};
		}
		for (let t of o) {
			let n = t.x, r = t.y;
			for (let i of t.items) {
				let t = e[i];
				if (t.x += n, t.y += r, t.isGroup) {
					let e = a.get(i);
					e.x = t.x - t.w / 2, e.y = t.y - t.h / 2;
				}
			}
		}
		let n = (e, t, n, r) => {
			for (let i = 0; i < t.length; i += 3) {
				let a = t[i] + n, o = t[i + 1] + r, s = e.length;
				s >= 3 && Math.abs(e[s - 3] - a) < .01 && Math.abs(e[s - 2] - o) < .01 || e.push(a, o, t[i + 2]);
			}
		};
		for (let r of o) for (let i of r.edges) {
			let o = t[i.e], s = [], c = [];
			for (let t = o.src; e[t].parent !== r.id; t = e[t].parent) c.push(a.get(e[t].parent));
			for (let e of c) n(s, e.portOf.get(i.e * 2).route, e.x, e.y);
			n(s, r.routes.get(i.e), r.x, r.y);
			let l = [];
			for (let t = o.dst; e[t].parent !== r.id; t = e[t].parent) l.push(a.get(e[t].parent));
			for (let e = l.length - 1; e >= 0; e--) n(s, l[e].portOf.get(i.e * 2 + 1).route, l[e].x, l[e].y);
			o.route = s, o.labelW > 0 && (o.labelX += r.x, o.labelY += r.y);
		}
	}, A = ti(r);
	S = T, k();
	let j = -1;
	if (T && (j = ni(e, t, A), j > C * Wr + Gr)) {
		let n = Kr(e, t, o, O);
		S = !1, k();
		let r = ni(e, t, A);
		r >= j ? (S = !0, O = qr(n, e, t, o)) : j = r;
	}
	if (S === T && b) {
		let n = !1;
		for (let r of o) {
			if (r.id < 0) continue;
			let i = e[r.id], a = r.dir === "TB" || r.dir === "BT", o = oi(ai(r.dir)), s = [];
			for (let e of r.ports) {
				if (e.side !== o) continue;
				let n = t[e.e].route, c = r.x + e.px, l = r.y + e.py, u = -1;
				for (let t = 0; t < n.length && (u < 0 || e.out); t += 3) Math.abs(n[t] - c) < .01 && Math.abs(n[t + 1] - l) < .01 && (u = t);
				if (u < 0) continue;
				let d = +!a, f = e.out ? u + 3 : u - 3;
				for (; f >= 0 && f < n.length && Math.abs(n[f + d] - n[u + d]) < Yr;) f += e.out ? 3 : -3;
				f < 0 || f >= n.length || (e.hint = n[f + d] - (a ? i.x - i.w / 2 : i.y - i.h / 2), s.push([a ? e.px : e.py, e.hint]));
			}
			s.sort((e, t) => e[0] - t[0]);
			for (let e = 1; e < s.length; e++) s[e - 1][1] > s[e][1] && (n = !0);
		}
		if (n) {
			let n = j >= 0 ? j : ni(e, t, A), r = n > 0 ? Kr(e, t, o, O) : void 0;
			r && (k(), ni(e, t, A) >= n && (O = qr(r, e, t, o)));
		}
	}
	for (let n of g) {
		let r = t[n], i = e[r.src], a = e[r.dst];
		r.route = [
			i.x,
			i.y,
			0,
			a.x,
			a.y,
			0
		], r.labelX = (i.x + a.x) / 2, r.labelY = (i.y + a.y) / 2;
	}
	for (let n of h) {
		let r = t[n], i = e[r.src];
		r.labelX = i.x + i.w / 2 + 28 + r.labelW / 2, r.labelY = i.y;
	}
	return O;
}
function ci(e, t) {
	for (let n = 0; n < t.length; n += 3) {
		let r = Math.round(t[n + 1]), i = e.get(r);
		i ? i.push(t[n]) : e.set(r, [t[n]]);
	}
}
function li(e, t, n, r) {
	if (t === 0) return e.x;
	let i = e.y - e.h / 2, a = e.x - e.w / 2, o = t / 2, s = [
		a + r - 6 + o,
		e.x,
		a + e.w - r + 6 - o
	], c = n.get(Math.round(i));
	if (c === void 0) return s[0];
	let l = s[0], u = -1;
	for (let t of s) {
		let n = 1 / 0;
		for (let r of c) r > a && r < a + e.w && (n = Math.min(n, Math.abs(r - t) - o));
		if (n >= 6) return t;
		n > u + .5 && (u = n, l = t);
	}
	return l;
}
function ui(e, t, n, r) {
	let i = t > 0 ? r.get(Math.round(e.y - e.h / 2)) : void 0;
	if (i === void 0) return !1;
	let a = e.x - e.w / 2;
	for (let r of i) if (r > a && r < a + e.w && Math.abs(r - n) < t / 2 + 4) return !0;
	return !1;
}
function di(e, t, n, r, i, a, o, s) {
	let c = 1;
	for (let e = a[o].parent; e >= 0 && c < 8; e = a[e].parent) c++;
	let l = `color-mix(in srgb,var(--_a) ${X(100 * (1 - .5 ** c))}%,var(--_bg))`;
	return `<g class="pele-cluster-title" data-id="${i}">` + Z(e, t, n, ` fill="none" stroke="${l}" stroke-width="5" stroke-linejoin="round"`, s) + Z(e, t, n, r, s) + "</g>";
}
var fi = 8, pi = 12, mi = .62, hi = 6;
function gi() {
	let e = /* @__PURE__ */ new Map();
	return {
		add(t, n, r) {
			let i = vi(r);
			n >= 0 && i > 0 && i + hi > (e.get(t * 4 + n) ?? 0) && e.set(t * 4 + n, i + hi);
		},
		of: (t, n) => n >= 0 ? e.get(t * 4 + n) ?? 0 : 0
	};
}
function _i(e, t, n, r, i = n > 0 ? n + hi : 0, a = r > 0 ? r + hi : 0) {
	let o = t === "linear", s = t === "step" || t === "stepBefore" || t === "stepAfter", c = [], l = [], u = [], d = (e, t, n, r) => Math.abs(e - n) < .01 && Math.abs(t - r) < .01;
	for (let n = 0; n < e.length; n += 3) {
		let r = e[n], i = e[n + 1], a = e[n + 2], o = c.length - 1;
		if (s && o >= 0 && Math.abs(r - c[o]) >= .01 && Math.abs(i - l[o]) >= .01) {
			let e = c[o], n = l[o], s = t === "stepBefore" ? n : t === "stepAfter" ? i : (n + i) / 2, f = t === "stepBefore" ? e : t === "stepAfter" ? r : (e + r) / 2, p = a === 0 ? [
				e,
				s,
				r,
				s
			] : [
				f,
				n,
				f,
				i
			];
			for (let t = 0; t < 4; t += 2) d(p[t], p[t + 1], e, n) || d(p[t], p[t + 1], r, i) || (c.push(p[t]), l.push(p[t + 1]), u.push(a));
		}
		c.push(r), l.push(i), u.push(a);
	}
	let f = c.length - 1, p = (e) => Math.abs(c[e] - c[e - 1]) < .01 || Math.abs(l[e] - l[e - 1]) < .01, m = (e) => o || p(e), h = (e, t, n) => {
		if (!m(Math.max(e, t))) return n === 0 ? [0, Math.sign(l[t] - l[e]) || 1] : [Math.sign(c[t] - c[e]) || 1, 0];
		let r = c[t] - c[e], i = l[t] - l[e], a = Math.hypot(r, i) || 1;
		return [r / a, i / a];
	}, [g, _] = h(0, 1, u[1]), [v, y] = h(f - 1, f, u[f]), b = c[0], x = l[0], S = c[f], C = l[f];
	c[0] += g * n, l[0] += _ * n, c[f] -= v * r, l[f] -= y * r;
	let w = (e) => Math.abs(c[e] - c[e - 1]) + Math.abs(l[e] - l[e - 1]), T = (e) => !o && e > 0 && e < f && p(e) && p(e + 1) && w(e) >= .01 && w(e + 1) >= .01 && Math.abs(c[e] - c[e - 1]) < .01 != Math.abs(c[e + 1] - c[e]) < .01, E = (e, t, n) => Math.abs(c[e] - c[e - 1]) * Math.abs(t) + Math.abs(l[e] - l[e - 1]) * Math.abs(n), D = (e, t, n) => {
		let r = Math.min(Math.max(0, e - hi - t), n / 4);
		return r + Math.min(e - t - r, (n - r) / 4);
	}, O = a > r && (!m(f) || T(f - 1)) ? D(a, r, E(f, v, y)) : 0, k = i > n && (!m(1) || T(1)) ? D(i, n, E(1, g, _)) : 0;
	O >= 1 && (c.splice(f, 0, c[f] - v * O), l.splice(f, 0, l[f] - y * O), u.splice(f, 0, u[f]), f++), k >= 1 && (c.splice(1, 0, c[0] + g * k), l.splice(1, 0, l[0] + _ * k), u.splice(1, 0, u[1]), f++);
	let A = `M${X(c[0])},${X(l[0])}`, j = c[0], M = l[0], N = (e, t) => {
		d(e, t, j, M) || (A += `L${X(e)},${X(t)}`, j = e, M = t);
	};
	for (let e = 1; e <= f; e++) {
		let t = c[e], n = l[e];
		if (!m(e)) {
			let r = u[e] === 0, i = r ? n - M : t - j, a = Math.abs(i) * kr(r ? t - j : n - M, i), o = r ? 0 : Math.sign(i) * a, s = r ? Math.sign(i) * a : 0;
			A += `C${X(j + o)},${X(M + s)} ${X(t - o)},${X(n - s)} ${X(t)},${X(n)}`, j = t, M = n;
			continue;
		}
		if (!T(e)) {
			if (e < f && p(e) && p(e + 1) && (t - c[e - 1]) * (c[e + 1] - t) + (n - l[e - 1]) * (l[e + 1] - n) > 0) continue;
			N(t, n);
			continue;
		}
		let r = T(e - 1) ? w(e) / 2 : w(e), i = T(e + 1) ? w(e + 1) / 2 : w(e + 1);
		s && (r = i = Math.min(pi, r, i));
		let [a, o] = h(e - 1, e, u[e]), [d, g] = h(e, e + 1, u[e + 1]);
		N(t - a * r, n - o * r), j = t + d * i, M = n + g * i, A += s ? `Q${X(t)},${X(n)} ${X(j)},${X(M)}` : `C${X(t - a * r * (1 - mi))},${X(n - o * r * (1 - mi))} ${X(t + d * i * (1 - mi))},${X(n + g * i * (1 - mi))} ${X(j)},${X(M)}`;
	}
	return {
		d: A,
		sx: b,
		sy: x,
		sdx: -g,
		sdy: -_,
		ex: S,
		ey: C,
		edx: v,
		edy: y
	};
}
function vi(e) {
	return e === "arrow_point" ? fi - 1 : e === "arrow_circle" ? fi : e === "arrow_cross" ? 4 : 0;
}
function yi(e, t, n, r, i, a) {
	let o = -i, s = r;
	if (e === "arrow_point") {
		let e = t - r * fi, c = n - i * fi, l = fi * .42;
		return `<path class="pele-marker" d="M${X(t)},${X(n)}L${X(e + o * l)},${X(c + s * l)}L${X(e - o * l)},${X(c - s * l)}Z" fill="${a}" stroke="none"/>`;
	}
	if (e === "arrow_circle") return `<circle class="pele-marker" cx="${X(t - r * 4)}" cy="${X(n - i * 4)}" r="3.5" fill="${a}" stroke="none"/>`;
	if (e === "arrow_cross") {
		let e = t - r * 4, a = n - i * 4, c = 3.5, l = (r + o) * c, u = (i + s) * c, d = (r - o) * c, f = (i - s) * c;
		return `<path class="pele-marker" d="M${X(e - l)},${X(a - u)}L${X(e + l)},${X(a + u)}M${X(e - d)},${X(a - f)}L${X(e + d)},${X(a + f)}"/>`;
	}
	return "";
}
function bi(e, t, n, r, i, a) {
	let o = t.width + 8, s = t.height;
	return `<g class="pele-edge-label" data-id="${Y(e)}"><rect x="${X(n - o / 2)}" y="${X(r - s / 2)}" width="${X(o)}" height="${X(s)}" rx="3" fill="var(--_bg)"/>` + Z(t, n, r, i, a) + "</g>";
}
function xi(e, t, n, r, i, a, o, s) {
	let c = (i ? t : n) / 2, l = Math.min(c - 4, 8 + r * 6), u = a + r * 8, d = Math.hypot(u, l) || 1, f = (r, a) => i ? `${X(e.x + a)},${X(e.y + n / 2 + r)}` : `${X(e.x + t / 2 + r)},${X(e.y + a)}`, p = u / d * o, m = l / d * o;
	return i ? (s.labelX = e.x, s.labelY = e.y + n / 2 + u + 4 + s.labelH / 2) : (s.labelX = e.x + t / 2 + u + 4 + s.labelW / 2, s.labelY = e.y), {
		d: `M${f(0, -l)}C${f(u, -l * 2)} ${f(u, l * 2)} ${f(p, l + m)}`,
		sx: i ? e.x - l : e.x + t / 2,
		sy: i ? e.y + n / 2 : e.y - l,
		sdx: i ? 0 : -1,
		sdy: i ? -1 : 0,
		ex: i ? e.x + l : e.x + t / 2,
		ey: i ? e.y + n / 2 : e.y + l,
		edx: i ? -l / d : -u / d,
		edy: i ? -u / d : -l / d
	};
}
var Si = "--_bg:var(--pele-bg,#fff);--_fg:var(--pele-fg,#1f1f1f);--_m:var(--pele-muted,#6e6e6e);--_l:var(--pele-line,#1f1f1f);--_s:var(--pele-surface,#f3f3f3);--_a:var(--pele-surface-alt,#e6e6e6);--_b:var(--pele-border,#8a8a8a);--_c:var(--pele-accent,#5b7bd5);color:var(--_fg)", Ci = "var(--_fm)", wi = "var(--pele-radius,4px)", Ti = " style=\"rx:var(--_r)\"";
function Ei(e) {
	let t = e.indexOf(" style=\"");
	return t < 0 ? e + Ti : `${e.slice(0, t + 8)}rx:var(--_r);${e.slice(t + 8)}`;
}
var Di = "var(--pele-critical,#e45756)", Oi = String.raw`(?:"[^"'\\\n<>{}();:@]*"|'[^"'\\\n<>{}();:@]*'|[\p{L}\p{N}_-][\p{L}\p{N}_ .-]*)`, ki = new RegExp(String.raw`^\s*${Oi}(?:\s*,\s*${Oi})*\s*$`, "u");
function Ai(e, t) {
	return e && ki.test(e) ? e : t;
}
function ji(e, t, n) {
	return `;--_fm:var(--pele-font-mono,${Ai(n, "monospace")});font:${e}px sans-serif;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;font-family:var(--pele-font,${Ai(t, "sans-serif")})`;
}
var Mi = /* @__PURE__ */ new Set([
	"fill",
	"fill-opacity",
	"stroke",
	"stroke-width",
	"stroke-dasharray",
	"stroke-dashoffset",
	"stroke-linecap",
	"stroke-linejoin",
	"stroke-opacity",
	"opacity",
	"rx",
	"ry"
]), Ni = /* @__PURE__ */ new Set([
	"color",
	"font-size",
	"font-family",
	"font-weight",
	"font-style",
	"text-decoration",
	"letter-spacing",
	"word-spacing",
	"opacity"
]), Pi = /url\s*\(|expression\s*\(|javascript:|[<>{};\\]|@import|image-set|\/\*/i, Fi = {
	shape: "",
	line: "",
	text: "",
	stroke: void 0,
	bold: !1,
	italic: !1,
	fontSize: void 0
};
function Ii(e) {
	if (e.length === 0) return Fi;
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
	for (let r of e) {
		let e = r.indexOf(":");
		if (e <= 0) continue;
		let i = r.slice(0, e).trim().toLowerCase(), a = r.slice(e + 1).replace(/!important/gi, "").trim();
		a === "" || Pi.test(a) || tt.test(a) || (Mi.has(i) && t.set(i, a), Ni.has(i) && n.set(i === "color" ? "fill" : i, a));
	}
	if (t.size === 0 && n.size === 0) return Fi;
	let r = "", i = "";
	for (let [e, n] of t) r += `${e}:${n};`, e !== "fill" && e !== "fill-opacity" && (i += `${e}:${n};`);
	let a = "";
	for (let [e, t] of n) a += `${e}:${t};`;
	let o = n.get("font-weight"), s = n.get("font-size"), c = s && /^[\d.]+(px)?$/.test(s) ? parseFloat(s) : void 0;
	return {
		shape: r ? ` style="${nt(r)}"` : "",
		line: i ? ` style="${nt(i)}"` : "",
		text: a ? ` style="${nt(a)}"` : "",
		stroke: t.get("stroke"),
		bold: o === "bold" || o === "bolder" || Number(o) >= 600,
		italic: n.get("font-style") === "italic",
		fontSize: c !== void 0 && c > 0 && c <= 200 ? c : void 0
	};
}
var Li = /[^\w-]+/g;
function Ri(e) {
	let t = e.replace(Li, " ").trim();
	return t === "" ? "" : " " + t;
}
var zi = [
	"#4c78a8",
	"#f58518",
	"#54a24b",
	"#e45756",
	"#72b7b2",
	"#eeca3b",
	"#b279a2",
	"#9d755d"
];
function Bi(e) {
	let t = (e % 8 + 8) % 8;
	return `var(--pele-series-${t + 1},${zi[t]})`;
}
var Vi = [
	["tw", "title"],
	["hw", "heading"],
	["w", "bold"]
], Hi = /var\(--_(r|tw|hw|w)\)/g;
function Ui(e, t, n, r, i, a, o) {
	let s = nt(i.idPrefix ?? "pele"), c = "", l = "";
	a.accTitle && (c += `<title id="${s}-title">${Y(a.accTitle)}</title>`, l += ` aria-labelledby="${s}-title"`), a.accDescr && (c += `<desc id="${s}-desc">${Y(a.accDescr)}</desc>`, l += ` aria-describedby="${s}-desc"`);
	let u = i.responsive === !1 ? "" : "max-width:100%;height:auto;", d = /* @__PURE__ */ new Set();
	for (let [, e] of o.matchAll(Hi)) if (d.add(e), d.size === 4) break;
	let f = d.has("r") ? `;--_r:${wi}` : "";
	for (let [e, t] of Vi) d.has(e) && (f += `;--_${e}:var(--pele-${t}-weight,bold)`);
	return `<svg xmlns="http://www.w3.org/2000/svg" class="pele pele-${e}" viewBox="0 0 ${t} ${n}" width="${t}" height="${n}" style="${u}${Si}${f}${nt(ji(r, i.fontFamily, i.fontFamilyMono))}" fill="var(--_fg)" role="graphics-document document" aria-roledescription="${e}"${l}>` + c + o + "</svg>";
}
var Wi = 18, Gi = 12, Ki = 12, qi = (e, t, n) => (n ? t : e) - 2 * Ki, Ji = (e) => (t, n, r) => r ? 0 : t - 2 * e(n) - 2 * Ki;
function Yi(e, t, n) {
	let r = Math.min(1, Math.abs(e) / t);
	return n * (1 - Math.sqrt(1 - r * r));
}
var Xi = (e, t, n, r) => n & 1 ? Yi(r, t / 2, e / 2) : Yi(r, e / 2, t / 2), Zi = (e, t, n) => (n ? t : e) * .6, Qi = (e, t, n, r) => n & 1 ? 0 : Yi(r, e / 2, Math.min(12, Math.max(6, e / 14))), $i = (e, t) => () => ({
	w: e,
	h: t,
	dy: 0
});
function ea(e, t, n) {
	let r = Math.max(1.6 * e + 40, 80), i = (t + 10) / (1 - (e + 8) / r), a = i / 2 - 10 - t / 2;
	return {
		w: r,
		h: i,
		dy: n ? -a : a
	};
}
function ta(e, t) {
	return `<path d="${e}"${t}/>`;
}
var na = (e, t, n) => n & 1 ? t / 8 : 0, ra = (e, t) => ({
	w: Math.max(e + 2 * Wi, 2 * Wi + 12),
	h: t + 2 * Gi,
	dy: 0
});
function ia(e, t) {
	let n = "";
	for (let t = 0; t < e.length; t += 2) n += (t ? " " : "") + X(e[t]) + "," + X(e[t + 1]);
	return `<polygon points="${n}"${t}/>`;
}
function aa(e, t, n, r = "") {
	return `<rect x="${X(-e / 2)}" y="${X(-t / 2)}" width="${X(e)}" height="${X(t)}"${r}${n}/>`;
}
var oa = {
	rect: {
		size: ra,
		span: qi,
		draw: (e, t, n) => aa(e, t, Ei(n))
	},
	rounded: {
		size: ra,
		span: qi,
		draw: (e, t, n) => aa(e, t, n, ` rx="${X(Math.min(12, t / 2))}"`)
	},
	stadium: {
		inset: (e, t, n, r) => n & 1 ? Yi(r, t / 2, t / 2) : 0,
		span: (e, t, n) => n ? t * .6 : e - t,
		size: (e, t) => {
			let n = t + 2 * Gi;
			return {
				w: e + n * .5 + 2 * Wi - 8,
				h: n,
				dy: 0
			};
		},
		draw: (e, t, n) => aa(e, t, n, ` rx="${X(t / 2)}"`)
	},
	"fr-rect": {
		span: qi,
		size: (e, t) => ({
			w: e + 2 * Wi + 16,
			h: t + 2 * Gi,
			dy: 0
		}),
		draw: (e, t, n, r) => {
			let i = e / 2 - 8;
			return aa(e, t, Ei(n)) + `<path d="M${X(-i)},${X(-t / 2)}V${X(t / 2)}M${X(i)},${X(-t / 2)}V${X(t / 2)}" fill="none"${r}/>`;
		}
	},
	cyl: {
		inset: Qi,
		span: (e, t, n) => n ? t - 2 * Ki - 12 : e * .6,
		size: (e, t) => {
			let n = Math.max(e + 2 * Wi, 56), r = Math.min(12, Math.max(6, n / 14));
			return {
				w: n,
				h: t + 2 * Gi + 2 * r,
				dy: r / 2
			};
		},
		draw: (e, t, n, r) => {
			let i = e / 2, a = Math.min(12, Math.max(6, e / 14)), o = -t / 2 + a, s = t / 2 - a;
			return `<path d="M${X(-i)},${X(o)}A${X(i)},${X(a)} 0 0 1 ${X(i)},${X(o)}V${X(s)}A${X(i)},${X(a)} 0 0 1 ${X(-i)},${X(s)}Z"${n}/><path d="M${X(-i)},${X(o)}A${X(i)},${X(a)} 0 0 0 ${X(i)},${X(o)}" fill="none"${r}/>`;
		}
	},
	circle: {
		inset: Xi,
		span: Zi,
		size: (e, t) => {
			let n = Math.max(Math.sqrt(e * e + t * t) + 16, 44);
			return {
				w: n,
				h: n,
				dy: 0
			};
		},
		draw: (e, t, n) => `<circle r="${X(e / 2)}"${n}/>`
	},
	"dbl-circ": {
		inset: Xi,
		span: Zi,
		size: (e, t) => {
			let n = Math.max(Math.sqrt(e * e + t * t) + 26, 54);
			return {
				w: n,
				h: n,
				dy: 0
			};
		},
		draw: (e, t, n, r) => `<circle r="${X(e / 2)}"${n}/><circle r="${X(e / 2 - 5)}" fill="none"${r}/>`
	},
	ellipse: {
		inset: Xi,
		span: Zi,
		size: (e, t) => ({
			w: e * 1.3 + 2 * Wi,
			h: t * 1.2 + 2 * Gi,
			dy: 0
		}),
		draw: (e, t, n) => `<ellipse rx="${X(e / 2)}" ry="${X(t / 2)}"${n}/>`
	},
	diam: {
		inset: (e, t, n, r) => n & 1 ? Math.abs(r) * e / t : Math.abs(r) * t / e,
		span: (e, t, n) => (n ? t : e) * .6,
		size: (e, t) => {
			let n = e + 16, r = t + 8;
			return {
				w: n + 1.6 * r,
				h: n / 1.6 + r,
				dy: 0
			};
		},
		draw: (e, t, n) => ia([
			0,
			-t / 2,
			e / 2,
			0,
			0,
			t / 2,
			-e / 2,
			0
		], n)
	},
	hex: {
		inset: (e, t, n, r) => n & 1 ? Math.abs(r) / 2 : 0,
		span: (e, t, n) => n ? t * .5 : e - t / 2 - Ki,
		size: (e, t) => {
			let n = t + 2 * Gi;
			return {
				w: e + 2 * Wi + n / 2,
				h: n,
				dy: 0
			};
		},
		draw: (e, t, n) => {
			let r = t / 4;
			return ia([
				-e / 2 + r,
				-t / 2,
				e / 2 - r,
				-t / 2,
				e / 2,
				0,
				e / 2 - r,
				t / 2,
				-e / 2 + r,
				t / 2,
				-e / 2,
				0
			], n);
		}
	},
	odd: {
		inset: (e, t, n) => n === 3 ? t / 4 : 0,
		span: Ji(() => 0),
		size: (e, t) => {
			let n = t + 2 * Gi;
			return {
				w: e + 2 * Wi + n / 4,
				h: n,
				dy: 0
			};
		},
		draw: (e, t, n) => {
			let r = t / 4;
			return ia([
				-e / 2,
				-t / 2,
				e / 2,
				-t / 2,
				e / 2,
				t / 2,
				-e / 2,
				t / 2,
				-e / 2 + r,
				0
			], n);
		}
	},
	"lean-r": {
		inset: na,
		span: Ji((e) => e / 4),
		size: (e, t) => {
			let n = t + 2 * Gi;
			return {
				w: e + 2 * Wi + n / 2,
				h: n,
				dy: 0
			};
		},
		draw: (e, t, n) => {
			let r = t / 4;
			return ia([
				-e / 2 + r,
				-t / 2,
				e / 2,
				-t / 2,
				e / 2 - r,
				t / 2,
				-e / 2,
				t / 2
			], n);
		}
	},
	"lean-l": {
		inset: na,
		span: Ji((e) => e / 4),
		size: (e, t) => {
			let n = t + 2 * Gi;
			return {
				w: e + 2 * Wi + n / 2,
				h: n,
				dy: 0
			};
		},
		draw: (e, t, n) => {
			let r = t / 4;
			return ia([
				-e / 2,
				-t / 2,
				e / 2 - r,
				-t / 2,
				e / 2,
				t / 2,
				-e / 2 + r,
				t / 2
			], n);
		}
	},
	"trap-b": {
		inset: na,
		span: Ji((e) => e / 4),
		size: (e, t) => {
			let n = t + 2 * Gi;
			return {
				w: e + 2 * Wi + n / 2,
				h: n,
				dy: 0
			};
		},
		draw: (e, t, n) => {
			let r = t / 4;
			return ia([
				-e / 2 + r,
				-t / 2,
				e / 2 - r,
				-t / 2,
				e / 2,
				t / 2,
				-e / 2,
				t / 2
			], n);
		}
	},
	"trap-t": {
		inset: na,
		span: Ji((e) => e / 4),
		size: (e, t) => {
			let n = t + 2 * Gi;
			return {
				w: e + 2 * Wi + n / 2,
				h: n,
				dy: 0
			};
		},
		draw: (e, t, n) => {
			let r = t / 4;
			return ia([
				-e / 2,
				-t / 2,
				e / 2,
				-t / 2,
				e / 2 - r,
				t / 2,
				-e / 2 + r,
				t / 2
			], n);
		}
	},
	text: {
		span: qi,
		size: (e, t) => ({
			w: e + 8,
			h: t + 8,
			dy: 0
		}),
		draw: (e, t) => aa(e, t, " fill=\"none\" stroke=\"none\"")
	},
	"sm-circ": {
		noLabel: !0,
		inset: Xi,
		span: Zi,
		size: $i(14, 14),
		draw: (e, t, n) => `<circle r="${X(e / 2)}"${n}/>`
	},
	"f-circ": {
		noLabel: !0,
		inset: Xi,
		span: Zi,
		size: $i(14, 14),
		draw: (e, t, n, r) => `<circle r="${X(e / 2)}" fill="var(--_l)"${r}/>`
	},
	"fr-circ": {
		noLabel: !0,
		inset: Xi,
		span: Zi,
		size: $i(18, 18),
		draw: (e, t, n, r) => `<circle r="${X(e / 2)}"${n}/><circle r="${X(e / 2 - 4)}" fill="var(--_l)"${r}/>`
	},
	fork: {
		noLabel: !0,
		span: (e, t, n) => (n ? t : e) - 8,
		size: $i(72, 8),
		draw: (e, t, n, r) => aa(e, t, ` fill="var(--_l)"${r}`, " rx=\"2\"")
	},
	"notch-rect": {
		size: ra,
		span: qi,
		draw: (e, t, n) => ia([
			-e / 2 + 10,
			-t / 2,
			e / 2,
			-t / 2,
			e / 2,
			t / 2,
			-e / 2,
			t / 2,
			-e / 2,
			-t / 2 + 10
		], n)
	},
	"lin-rect": {
		span: qi,
		size: (e, t) => ({
			w: e + 2 * Wi + 8,
			h: t + 2 * Gi,
			dy: 0
		}),
		draw: (e, t, n, r) => aa(e, t, Ei(n)) + `<path d="M${X(-e / 2 + 8)},${X(-t / 2)}V${X(t / 2)}" fill="none"${r}/>`
	},
	"div-rect": {
		span: qi,
		size: (e, t) => ({
			w: e + 2 * Wi,
			h: t + 2 * Gi + 8,
			dy: 4
		}),
		draw: (e, t, n, r) => aa(e, t, Ei(n)) + `<path d="M${X(-e / 2)},${X(-t / 2 + 8)}H${X(e / 2)}" fill="none"${r}/>`
	},
	"win-pane": {
		span: qi,
		size: (e, t) => ({
			w: e + 2 * Wi + 8,
			h: t + 2 * Gi + 8,
			dy: 4
		}),
		draw: (e, t, n, r) => aa(e, t, Ei(n)) + `<path d="M${X(-e / 2 + 8)},${X(-t / 2)}V${X(t / 2)}M${X(-e / 2)},${X(-t / 2 + 8)}H${X(e / 2)}" fill="none"${r}/>`
	},
	tri: {
		inset: (e, t, n) => n & 1 ? e / 4 : 0,
		size: (e, t) => ea(e, t, !1),
		draw: (e, t, n) => ia([
			0,
			-t / 2,
			e / 2,
			t / 2,
			-e / 2,
			t / 2
		], n)
	},
	"flip-tri": {
		inset: (e, t, n) => n & 1 ? e / 4 : 0,
		size: (e, t) => ea(e, t, !0),
		draw: (e, t, n) => ia([
			-e / 2,
			-t / 2,
			e / 2,
			-t / 2,
			0,
			t / 2
		], n)
	},
	"sl-rect": {
		inset: (e, t, n) => n === 0 ? 5 : 0,
		size: (e, t) => ({
			w: e + 2 * Wi,
			h: t + 2 * Gi + 10,
			dy: 5
		}),
		draw: (e, t, n) => ia([
			-e / 2,
			-t / 2 + 10,
			e / 2,
			-t / 2,
			e / 2,
			t / 2,
			-e / 2,
			t / 2
		], n)
	},
	"notch-pent": {
		span: qi,
		size: (e, t) => ({
			w: e + 2 * Wi,
			h: t + 2 * Gi,
			dy: 0
		}),
		draw: (e, t, n) => ia([
			-e / 2 + 10,
			-t / 2,
			e / 2 - 10,
			-t / 2,
			e / 2,
			-t / 2 + 10,
			e / 2,
			t / 2,
			-e / 2,
			t / 2,
			-e / 2,
			-t / 2 + 10
		], n)
	},
	hourglass: {
		noLabel: !0,
		inset: (e, t, n) => n & 1 ? e / 2 : 0,
		size: $i(32, 40),
		draw: (e, t, n) => ia([
			-e / 2,
			-t / 2,
			e / 2,
			-t / 2,
			-e / 2,
			t / 2,
			e / 2,
			t / 2
		], n)
	},
	delay: {
		size: (e, t) => {
			let n = t + 2 * Gi;
			return {
				w: e + 2 * Wi + n / 4,
				h: n,
				dy: 0
			};
		},
		draw: (e, t, n) => {
			let r = t / 2;
			return `<path d="M${X(-e / 2)},${X(-r)}H${X(e / 2 - r)}A${X(r)},${X(r)} 0 0 1 ${X(e / 2 - r)},${X(r)}H${X(-e / 2)}Z"${n}/>`;
		}
	},
	"h-cyl": {
		size: (e, t) => {
			let n = t + 2 * Gi, r = Math.min(12, n / 4);
			return {
				w: e + 2 * Wi + 2 * r,
				h: n,
				dy: 0
			};
		},
		draw: (e, t, n, r) => {
			let i = t / 2, a = Math.min(12, t / 4), o = -e / 2 + a, s = e / 2 - a;
			return `<path d="M${X(o)},${X(-i)}H${X(s)}A${X(a)},${X(i)} 0 0 1 ${X(s)},${X(i)}H${X(o)}A${X(a)},${X(i)} 0 0 1 ${X(o)},${X(-i)}Z"${n}/><path d="M${X(s)},${X(-i)}A${X(a)},${X(i)} 0 0 0 ${X(s)},${X(i)}" fill="none"${r}/>`;
		}
	},
	"cross-circ": {
		noLabel: !0,
		inset: Xi,
		span: Zi,
		size: $i(44, 44),
		draw: (e, t, n, r) => {
			let i = e / 2, a = i * Math.SQRT1_2;
			return `<circle r="${X(i)}"${n}/><path d="M${X(-a)},${X(-a)}L${X(a)},${X(a)}M${X(a)},${X(-a)}L${X(-a)},${X(a)}" fill="none"${r}/>`;
		}
	},
	"st-rect": {
		span: (e, t, n) => (n ? t : e) - 2 * Ki - 8,
		size: (e, t) => ({
			w: e + 2 * Wi + 8,
			h: t + 2 * Gi + 8,
			dy: 4
		}),
		draw: (e, t, n) => {
			let r = e - 8, i = t - 8, a = "";
			for (let o = 0; o < 3; o++) {
				let s = -e / 2 + (2 - o) * 4, c = -t / 2 + o * 4;
				a += `<rect x="${X(s)}" y="${X(c)}" width="${X(r)}" height="${X(i)}"${Ei(n)}/>`;
			}
			return a;
		}
	},
	doc: {
		inset: (e, t, n) => n === 2 ? 10 : 0,
		size: (e, t) => ({
			w: e + 2 * Wi,
			h: t + 2 * Gi + 10,
			dy: -5
		}),
		draw: (e, t, n) => ca(e, t, n)
	},
	flag: {
		inset: (e, t, n) => n & 1 ? 0 : 8,
		size: (e, t) => ({
			w: e + 2 * Wi,
			h: t + 2 * Gi + 16,
			dy: 0
		}),
		draw: (e, t, n) => {
			let r = e / 2, i = t / 2 - 8, a = e / 4;
			return `<path d="M${X(-r)},${X(-i)}q${X(a)},-10 ${X(2 * a)},0t${X(2 * a)},0V${X(i)}q${X(-a)},10 ${X(-2 * a)},0t${X(-2 * a)},0Z"${n}/>`;
		}
	},
	datastore: {
		size: ra,
		span: qi,
		draw: (e, t, n, r) => aa(e, t, n.replace("stroke=\"var(--_b)\"", "stroke=\"none\"")) + `<path d="M${X(-e / 2)},${X(-t / 2)}H${X(e / 2)}M${X(-e / 2)},${X(t / 2)}H${X(e / 2)}" fill="none"${r}/>`
	},
	folder: {
		size: (e, t) => ({
			w: Math.max(e + 2 * Wi, 64),
			h: t + 2 * Gi + 8,
			dy: 4
		}),
		draw: (e, t, n) => {
			let r = e / 2, i = t / 2, a = Math.min(e * .4, 48);
			return ta(`M${X(-r)},${X(-i)}H${X(-r + a)}L${X(-r + a + 8)},${X(-i + 8)}H${X(r)}V${X(i)}H${X(-r)}Z`, n);
		}
	},
	bucket: {
		size: (e, t) => ({
			w: e + 2 * Wi + 20,
			h: t + 2 * Gi + 10,
			dy: 3
		}),
		inset: (e, t, n) => n & 1 ? t / 12 : 0,
		draw: (e, t, n, r) => {
			let i = e / 2, a = t / 2, o = t / 6;
			return ta(`M${X(-i)},${X(-a + 5)}A${X(i)},${X(5)} 0 0 1 ${X(i)},${X(-a + 5)}L${X(i - o)},${X(a - 5)}A${X(i - o)},${X(5)} 0 0 1 ${X(-i + o)},${X(a - 5)}Z`, n) + `<path d="M${X(-i)},${X(-a + 5)}A${X(i)},${X(5)} 0 0 0 ${X(i)},${X(-a + 5)}" fill="none"${r}/>`;
		}
	},
	console: {
		span: qi,
		size: (e, t) => ({
			w: Math.max(e + 2 * Wi, 72),
			h: t + 2 * Gi + 12,
			dy: 6
		}),
		draw: (e, t, n, r) => aa(e, t, Ei(n)) + `<path d="M${X(-e / 2)},${X(-t / 2 + 12)}H${X(e / 2)}M${X(-e / 2 + 7)},${X(-t / 2 + 4)}l3,2.5l-3,2.5M${X(-e / 2 + 13)},${X(-t / 2 + 9)}h4" fill="none"${r}/>`
	},
	browser: {
		span: qi,
		size: (e, t) => ({
			w: Math.max(e + 2 * Wi, 72),
			h: t + 2 * Gi + 12,
			dy: 6
		}),
		draw: (e, t, n, r) => {
			let i = "";
			for (let n = 0; n < 3; n++) i += `<circle cx="${X(-e / 2 + 8 + n * 7)}" cy="${X(-t / 2 + 6)}" r="1.5" fill="none"${r}/>`;
			return aa(e, t, Ei(n)) + `<path d="M${X(-e / 2)},${X(-t / 2 + 12)}H${X(e / 2)}" fill="none"${r}/>` + i;
		}
	},
	person: {
		size: (e, t) => ({
			w: Math.max(e + 2 * Wi, 56),
			h: t + 2 * Gi + 26,
			dy: 13
		}),
		draw: (e, t, n) => {
			let r = -t / 2;
			return `<rect x="${X(-e / 2)}" y="${X(r + 26)}" width="${X(e)}" height="${X(t - 26)}" rx="12"${n}/><circle cy="${X(r + 14)}" r="13"${n}/>`;
		}
	},
	bang: {
		size: (e, t) => ({
			w: e + 2 * Wi + 28,
			h: t + 2 * Gi + 24,
			dy: 0
		}),
		inset: () => 3,
		draw: (e, t, n) => {
			let r = [];
			for (let n = 0; n < 28; n++) {
				let i = Math.PI * n / 14 - Math.PI / 2, a = n % 2 == 0 ? 1 : .82;
				r.push(e / 2 * Math.cos(i) * a, t / 2 * Math.sin(i) * a);
			}
			return ia(r, n);
		}
	},
	cloud: {
		size: (e, t) => ({
			w: e + 2 * Wi + 32,
			h: t + 2 * Gi + 24,
			dy: 0
		}),
		inset: (e, t, n) => n & 1 ? 2 : 1,
		draw: (e, t, n) => {
			let r = e / 2, i = t / 2, a = i * .55;
			return ta(`M${X(-r + a)},${X(i)}A${X(a)},${X(a)} 0 0 1 ${X(-r + a * .6)},${X(-i * .1)}A${X(r * .42)},${X(i * .7)} 0 0 1 ${X(-r * .1)},${X(-i * .72)}A${X(r * .4)},${X(i * .62)} 0 0 1 ${X(r * .62)},${X(-i * .42)}A${X(a * 1.05)},${X(a * 1.05)} 0 0 1 ${X(r - a)},${X(i)}Z`, n);
		}
	},
	brace: {
		size: (e, t) => ({
			w: e + 2 * Wi + 12,
			h: t + 2 * Gi,
			dy: 0
		}),
		draw: (e, t, n, r) => aa(e, t, " fill=\"none\" stroke=\"none\"") + sa(-e / 2 + 12, t, -1, r)
	},
	"brace-r": {
		size: (e, t) => ({
			w: e + 2 * Wi + 12,
			h: t + 2 * Gi,
			dy: 0
		}),
		draw: (e, t, n, r) => aa(e, t, " fill=\"none\" stroke=\"none\"") + sa(e / 2 - 12, t, 1, r)
	},
	braces: {
		size: (e, t) => ({
			w: e + 2 * Wi + 24,
			h: t + 2 * Gi,
			dy: 0
		}),
		draw: (e, t, n, r) => aa(e, t, " fill=\"none\" stroke=\"none\"") + sa(-e / 2 + 12, t, -1, r) + sa(e / 2 - 12, t, 1, r)
	},
	bolt: {
		noLabel: !0,
		size: $i(36, 56),
		inset: (e, t, n) => n & 1 ? e / 4 : 0,
		draw: (e, t, n) => ia([
			e * .15,
			-t / 2,
			-e / 2,
			t * .08,
			-e * .05,
			t * .08,
			-e * .15,
			t / 2,
			e / 2,
			-t * .08,
			e * .05,
			-t * .08
		], n)
	},
	"lin-cyl": {
		inset: Qi,
		span: (e, t, n) => n ? t - 2 * Ki - 20 : e * .6,
		size: (e, t) => {
			let n = Math.max(e + 2 * Wi, 56), r = Math.min(12, Math.max(6, n / 14));
			return {
				w: n,
				h: t + 2 * Gi + 2 * r + 8,
				dy: r / 2 + 4
			};
		},
		draw: (e, t, n, r) => {
			let i = e / 2, a = Math.min(12, Math.max(6, e / 14)), o = -t / 2 + a, s = t / 2 - a, c = (e) => `M${X(-i)},${X(e)}A${X(i)},${X(a)} 0 0 0 ${X(i)},${X(e)}`;
			return ta(`M${X(-i)},${X(o)}A${X(i)},${X(a)} 0 0 1 ${X(i)},${X(o)}V${X(s)}A${X(i)},${X(a)} 0 0 1 ${X(-i)},${X(s)}Z`, n) + `<path d="${c(o)}${c(o + 8)}" fill="none"${r}/>`;
		}
	},
	"curv-trap": {
		size: (e, t) => {
			let n = t + 2 * Gi;
			return {
				w: e + 2 * Wi + n * .6,
				h: n,
				dy: 0
			};
		},
		draw: (e, t, n) => {
			let r = e / 2, i = t / 2, a = t * .3;
			return ta(`M${X(-r + a)},${X(-i)}H${X(r - a)}A${X(a)},${X(i)} 0 0 1 ${X(r - a)},${X(i)}H${X(-r + a)}L${X(-r)},0Z`, n);
		}
	},
	docs: {
		size: (e, t) => ({
			w: e + 2 * Wi + 8,
			h: t + 2 * Gi + 18,
			dy: -1
		}),
		inset: (e, t, n) => n === 2 ? 10 : 0,
		draw: (e, t, n) => {
			let r = "";
			for (let i = 0; i < 3; i++) r += `<g transform="translate(${(1 - i) * 4},${(i - 1) * 4})">${ca(e - 8, t - 8, n)}</g>`;
			return r;
		}
	},
	"bow-rect": {
		size: (e, t) => {
			let n = t + 2 * Gi;
			return {
				w: e + 2 * Wi + n * .4,
				h: n,
				dy: 0
			};
		},
		inset: (e, t, n) => n === 1 ? t * .2 : 0,
		draw: (e, t, n) => {
			let r = e / 2, i = t / 2, a = t * .2;
			return ta(`M${X(-r + a)},${X(-i)}H${X(r)}A${X(a)},${X(i)} 0 0 0 ${X(r)},${X(i)}H${X(-r + a)}A${X(a)},${X(i)} 0 0 1 ${X(-r + a)},${X(-i)}Z`, n);
		}
	},
	"tag-rect": {
		size: ra,
		span: qi,
		draw: (e, t, n, r) => aa(e, t, Ei(n)) + `<path d="M${X(e / 2 - 12)},${X(t / 2)}L${X(e / 2)},${X(t / 2 - 12)}" fill="none"${r}/>`
	},
	"tag-doc": {
		size: (e, t) => ({
			w: e + 2 * Wi,
			h: t + 2 * Gi + 10,
			dy: -5
		}),
		inset: (e, t, n) => n === 2 ? 10 : 0,
		draw: (e, t, n, r) => ca(e, t, n) + `<path d="M${X(e / 2 - 12)},${X(t / 2 - 14)}L${X(e / 2)},${X(t / 2 - 26)}" fill="none"${r}/>`
	},
	"lin-doc": {
		size: (e, t) => ({
			w: e + 2 * Wi + 8,
			h: t + 2 * Gi + 10,
			dy: -5
		}),
		inset: (e, t, n) => n === 2 ? 10 : 0,
		draw: (e, t, n, r) => ca(e, t, n) + `<path d="M${X(-e / 2 + 8)},${X(-t / 2)}V${X(t / 2 - 6)}" fill="none"${r}/>`
	},
	collapsedGroup: {
		size: (e, t) => ({
			w: e + 2 * Wi + 8,
			h: t + 2 * Gi + 8,
			dy: -2
		}),
		draw: (e, t, n) => `<rect x="${X(-e / 2 + 6)}" y="${X(-t / 2 + 8)}" width="${X(e - 12)}" height="${X(t - 8)}"${Ei(n)}/><rect x="${X(-e / 2)}" y="${X(-t / 2)}" width="${X(e)}" height="${X(t - 4)}"${Ei(n)}/>`
	}
};
function sa(e, t, n, r) {
	let i = t / 2, a = 6 * n;
	return `<path d="M${X(e)},${X(-i)}q${X(a)},0 ${X(a)},6V-6q0,6 ${X(a)},6q${X(-a)},0 ${X(-a)},6V${X(i - 6)}q0,6 ${X(-a)},6" fill="none"${r}/>`;
}
function ca(e, t, n) {
	let r = e / 2, i = -t / 2, a = t / 2 - 10, o = e / 4;
	return `<path d="M${X(-r)},${X(i)}H${X(r)}V${X(a)}q${X(-o)},-12 ${X(-2 * o)},0t${X(-2 * o)},0Z"${n}/>`;
}
var la = oa.rect, ua = new Map(Object.entries(oa));
function da(e, t, n) {
	return (ua.get(e) ?? la).size(t, n);
}
function fa(e, t, n, r, i) {
	return (ua.get(e) ?? la).draw(t, n, r, i);
}
function pa(e, t, n, r, i = 0) {
	return ua.get(e)?.inset?.(t, n, r, i) ?? 0;
}
function ma(e, t, n, r) {
	return Math.max(0, ua.get(e)?.span?.(t, n, r) ?? 0);
}
function ha(e) {
	return ua.get(e)?.noLabel !== !0;
}
function ga(e, t, n) {
	let r = e[t] - n.x, i = e[t + 1] - n.y;
	return Math.abs(Math.abs(i) - n.h / 2) < .5 ? i < 0 ? 0 : 2 : Math.abs(Math.abs(r) - n.w / 2) < .5 ? r < 0 ? 3 : 1 : -1;
}
function _a(e, t, n, r) {
	if (r.isGroup) return;
	let i = ga(e, t, r);
	if (i === 0 || i === 2) {
		let a = pa(n.shape, n.w, n.h, i, e[t] - r.x) + (r.h - n.h) / 2;
		e[t + 1] += i === 0 ? a : -a;
	} else if (i >= 0) {
		let a = pa(n.shape, n.w, n.h, i, e[t + 1] - r.y) + (r.w - n.w) / 2;
		e[t] += i === 3 ? a : -a;
	}
}
var va = 1.5, ya = 1.3, ba = /<br\s*\/?>|\\n|\n/gi, xa = /<\/?([a-zA-Z][\w-]*)(?:\s[^<>]*)?\/?>/y, Sa = /(fa[bklrs]?):fa-([\w-]+)/g, Ca = /[<\\\n*_]|fa[bklrs]?:fa-/, wa = /* @__PURE__ */ new Map([
	["b", 1],
	["strong", 1],
	["i", 2],
	["em", 2],
	["cite", 2],
	["dfn", 2],
	["var", 2],
	["code", 4],
	["kbd", 4],
	["samp", 4],
	["tt", 4],
	["sub", 8],
	["sup", 16],
	["u", 32],
	["ins", 32]
]), Ta = 24, Ea = new Set("a abbr address article aside audio b bdi bdo big blockquote body br button caption center cite code col colgroup data dd del details dfn dialog div dl dt em embed fieldset figcaption figure font footer form h1 h2 h3 h4 h5 h6 head header hr html i iframe img input ins kbd label legend li link main map mark meta meter nav noscript object ol optgroup option output p picture pre progress q rp rt ruby s samp script section select small source span strike strong style sub summary sup table tbody td template textarea tfoot th thead time title tr track tt u ul var video wbr".split(" ")), Da = "\\u2e80-\\u9fff\\uf900-\\ufaff\\uff00-\\uff60", Oa = "、。，．：；！？）］｝」』】〕〉》〙〗ー…‥・ゝゞぁぃぅぇぉっゃゅょゎァィゥェォッャュョヮ,.:;!?)\\]}", ka = "（［｛「『【〔〈《〘〖([{", Aa = RegExp(`[${Da}]`), ja = "\\u200b\\u00ad", Ma = RegExp(`[${ja}]`), Na = RegExp(`\\s*(?:[${ka}]*[${Da}][${Oa}]*|[^\\s${Da}${ja}]+[${ja}]*[${Oa}]*|[${ja}]+)\\s*|\\s+`, "g"), Pa = 57344, Fa = 6400, Ia = /\$\$(.+?)\$\$/g, La = /[\ue000-\uf8ff]/, Ra = /([\ue000-\uf8ff])/, za, Ba = {
	lines: [],
	widths: [],
	width: 0,
	height: 0,
	size: 0,
	lineHeight: 0
};
function Va(e) {
	let t = e.split("\n"), n = 1 / 0;
	for (let e of t) {
		if (e.trim() === "") continue;
		let t = e.length - e.trimStart().length;
		t < n && (n = t);
	}
	return n === 1 / 0 || n === 0 ? e : t.map((e) => e.slice(Math.min(n, e.length - e.trimStart().length))).join("\n");
}
function Ha(e) {
	return e !== void 0 && e.icon === void 0 && e.math === void 0;
}
function Ua(e, t, n) {
	if (t !== "") {
		if (za !== void 0 && La.test(t)) {
			let r = za, i = t.split(Ra);
			for (let t = 0; t < i.length; t++) {
				if (t % 2 == 0) {
					i[t] !== "" && Wa(e, i[t], n);
					continue;
				}
				let a = i[t].charCodeAt(0) - Pa, o = r.math[a];
				o ? e.push({
					text: "",
					style: n,
					math: o,
					width: o.width
				}) : Wa(e, `$$${r.tex[a]}$$`, n);
			}
			return;
		}
		Wa(e, t, n);
	}
}
function Wa(e, t, n) {
	let r = p(t), i = e[e.length - 1];
	Ha(i) && i.style === n ? i.text += r : e.push({
		text: r,
		style: n,
		width: 0
	});
}
function Ga(e, t, n) {
	if (!t.includes(":fa-")) {
		Ua(e, t, n);
		return;
	}
	let r = 0;
	Sa.lastIndex = 0;
	let i;
	for (; (i = Sa.exec(t)) !== null;) {
		let a = `${i[1]}:fa-${i[2]}`;
		if (Ua(e, t.slice(r, i.index), n), r = i.index + i[0].length, _(a) !== "") e.push({
			text: "",
			style: n,
			icon: a,
			width: 0
		});
		else if (t[r] === " ") r++;
		else if (r === t.length) {
			let t = e[e.length - 1];
			Ha(t) && (t.text = t.text.trimEnd());
		}
	}
	Ua(e, t.slice(r), n);
}
function Ka(e, t, n, r, i) {
	let a = i.style, o = 0, s = "", c = 0, l = t.length, u = () => {
		Ga(e, s, a | (i.shifts[i.shifts.length - 1] ?? 0)), s = "";
	};
	for (; c < l;) {
		let e = t[c];
		if (e === "<") {
			xa.lastIndex = c;
			let e = xa.exec(t);
			if (e && e.index === c) {
				let n = e[1].toLowerCase(), o = t[c + 1] === "/", s = wa.get(n) ?? 0;
				if (s & Ta) {
					u();
					let e = i.shifts.lastIndexOf(s);
					o ? e !== -1 && i.shifts.splice(e, 1) : i.shifts.push(s);
				} else s && (u(), i.style = o ? i.style & ~s | r & s : i.style | s, a = o ? a & ~s | r & s : a | s);
				if (s || Ea.has(n)) {
					c += e[0].length;
					continue;
				}
			}
		} else if (n && (e === "*" || e === "_")) {
			let n = t[c + 1] === e, i = n ? 1 : 2, s = n ? 2 : 1, d = (o & i) === 0, f = c > 0 ? t[c - 1] : " ", p = c + s < l ? t[c + s] : " ", m = d && p.trim() !== "" && t.indexOf(n ? e + e : e, c + s) !== -1, h = !d && f.trim() !== "", g = e === "_" && /\w/.test(f) && /\w/.test(p);
			if ((m || h) && !g) {
				u(), o = m ? o | i : o & ~i, a = m ? a | i : a & ~i | r & i, c += s;
				continue;
			}
		}
		s += e, c++;
	}
	u();
}
function qa(e, t, n) {
	let r = 0;
	for (let i of e) i.width = i.icon === void 0 ? i.math ? i.math.width : t.width(i.text, n, i.style) : n * 1.25, r += i.width;
	return r;
}
function Ja(e, t, n, r, i, a) {
	let o = [], s = 0, c = (e = !1) => {
		let r = o[o.length - 1];
		if (Ha(r)) {
			let i = r.text.trimEnd();
			if (e && r.text.endsWith("­") && (i = i.slice(0, -1) + "-"), i !== r.text) {
				r.text = i;
				let e = t.width(i, n, r.style);
				s += e - r.width, r.width = e;
			}
		}
		i.push(o), a.push(s), o = [], s = 0;
	};
	for (let i of e) {
		if (i.icon !== void 0 || i.math) {
			let e = i.math ? i.math.width : n * 1.25;
			s > 0 && s + e > r && c(), o.push({
				...i,
				width: e
			}), s += e;
			continue;
		}
		let a = i.text.match(Na) ?? [], l = i.text.includes("­"), u = l ? a.length : 0, d = new Float64Array(u), f = new Float64Array(u + 1);
		for (let r = u - 1; r >= 0; r--) {
			let o = a[r].endsWith("­"), s = a[r].trimEnd();
			d[r] = t.width(o ? s.slice(0, -1) : s, n, i.style), f[r] = o ? r === u - 1 ? i === e[e.length - 1] ? d[r] : 1 / 0 : d[r] + f[r + 1] : d[r];
		}
		for (let e = 0; e < a.length; e++) {
			let u = a[e], p = l ? d[e] : t.width(u.trimEnd(), n, i.style), m = !l || !u.endsWith("­") ? s + p <= r : s + t.width(u.slice(0, -1) + "-", n, i.style) <= r || s + f[e] <= r;
			s > 0 && !m && (c(u.trimStart() === u), u = u.trimStart());
			let h = o[o.length - 1];
			if (Ha(h) && h.style === i.style) {
				if (h.text += u, p > 0 || u.trimEnd() !== u) {
					let e = h.width;
					h.width = t.width(h.text, n, h.style), s += h.width - e;
				}
			} else {
				let e = t.width(u, n, i.style);
				o.push({
					text: u,
					style: i.style,
					width: e
				}), s += e;
			}
		}
	}
	(o.length > 0 || i.length === 0) && c();
}
function Q(e, t, n, r, i, a = 0) {
	if (e === void 0 || e === "") return Ba;
	let o = Math.round(r * va);
	if (x() && e.includes("$$") && !La.test(e)) {
		let s = {
			tex: [],
			math: []
		}, c = e.replace(Ia, (e, t) => s.tex.length === Fa ? e : (s.tex.push(t), String.fromCharCode(Pa + s.tex.length - 1)));
		if (s.tex.length > 0) {
			for (let e of s.tex) s.math.push(C(p(e), r));
			return Ya(c, t, n, r, i, a, o, s);
		}
	}
	if (!Ca.test(e) && !e.includes("&") && !e.includes("ﬂ")) {
		let t = e.trim(), s = n.width(t, r, a);
		if (s <= i || !(t.includes(" ") || Aa.test(t) || Ma.test(t))) return {
			lines: [[{
				text: t,
				style: a,
				width: s
			}]],
			widths: [s],
			width: s,
			height: o,
			size: r,
			lineHeight: o
		};
		let c = [], l = [];
		Ja([{
			text: t,
			style: a,
			width: s
		}], n, r, i, c, l);
		let u = 0;
		for (let e of l) e > u && (u = e);
		let d = c.length > 1 ? Math.round(r * ya) : o;
		return {
			lines: c,
			widths: l,
			width: u,
			height: c.length * d,
			size: r,
			lineHeight: d
		};
	}
	return Ya(e, t, n, r, i, a, o);
}
function Ya(e, t, n, r, i, a, o, s) {
	let c = za;
	za = s;
	try {
		let c = Xa(e, t, n, r, i, a, o);
		return s ? Za(c) : c;
	} finally {
		za = c;
	}
}
function Xa(e, t, n, r, i, a, o) {
	let s = t ? Va(e.replace(/\r\n?/g, "\n")).trim() : e.trim(), c = [], l = [], u = 0, d = {
		style: a,
		shifts: []
	};
	for (let e of s.split(ba)) {
		let o = [];
		Ka(o, e.trim(), t, a, d);
		let s = qa(o, n, r);
		s > i ? Ja(o, n, r, i, c, l) : (c.push(o), l.push(s));
	}
	for (let e of l) e > u && (u = e);
	let f = c.length > 1 ? Math.round(r * ya) : o;
	return {
		lines: c,
		widths: l,
		width: u,
		height: c.length * f,
		size: r,
		lineHeight: f
	};
}
function Za(e) {
	let t;
	for (let n = 0; n < e.lines.length; n++) {
		let r = e.lineHeight;
		for (let t of e.lines[n]) t.math && (r = Math.max(r, Math.ceil(t.math.height + e.size / 4)));
		r !== e.lineHeight && t === void 0 && (t = e.lines.map(() => e.lineHeight)), t && (t[n] = r);
	}
	if (t === void 0) return e.heights === void 0 ? e : {
		...e,
		heights: void 0,
		height: e.lines.length * e.lineHeight
	};
	let n = 0;
	for (let e of t) n += e;
	return {
		...e,
		heights: t,
		height: n
	};
}
function Qa(e) {
	for (let t of e) if (t.math) return !0;
	return !1;
}
function $a(e, t) {
	let n = e.heights;
	if (!n) return (t + .5) * e.lineHeight;
	let r = 0;
	for (let e = 0; e < t; e++) r += n[e];
	return r + n[t] / 2;
}
function eo(e, t) {
	let n = e.widths[t], r = e.heights ? e.heights[t] : e.lineHeight, i = {
		lines: [e.lines[t]],
		widths: [n],
		width: n,
		height: r,
		size: e.size,
		lineHeight: e.lineHeight
	};
	return r !== e.lineHeight && (i.heights = [r]), i;
}
function to(e, t, n, r) {
	let i = r(t, !1), a = e.maxWidth;
	if (a === void 0 || !(a > 0) || i.width <= a) return i;
	let o = Math.min(n, t), s = t;
	i = r(s, !0);
	for (let e = 0; e < 3 && i.width > a && s > o; e++) s = Math.max(o, s - (i.width - a)), i = r(s, !0);
	return i;
}
function no(e) {
	let t = e.maxWidth;
	return t !== void 0 && t > 0 ? Math.max(80, t - 2 * (e.padding ?? 8)) : 4e3;
}
function ro(e, t, n, r = 0) {
	let i = e.maxWidth;
	return i === void 0 || !(i > 0) ? t : Math.max(Math.min(n, t), Math.min(t, i - r));
}
var io = 640;
function ao(e, t) {
	let n = t(!1), r = e.maxWidth;
	if (e.autoDirection === !1 || r === void 0 || !(r > 0) || n.width <= r) return n;
	let i = e.directionBreakpoint;
	if (r >= (i !== void 0 && i > 0 ? i : io)) return n;
	let a = t(!0);
	return a.width < n.width ? a : n;
}
function oo(e) {
	return e === "LR" || e === "RL";
}
function so(e, t) {
	let n = t(!1), r = e.maxWidth;
	if (r === void 0 || !(r > 0) || n.width <= r) return n;
	let i = t(!0);
	return i.width < n.width ? i : n;
}
var co = /* @__PURE__ */ new Map([
	["tool", 0],
	["task", 1],
	["decision", 2],
	["input", 3],
	["refdoc", 4],
	["connector", 5],
	["action", 6]
]), lo = co.size, uo = (e) => Math.max(1, e - lo), fo = (e, t) => {
	let n = lo + e % uo(t);
	return t > 0 ? n % t : n;
};
function po(e, t, n, r) {
	let i = n.size;
	for (let a of e) {
		if (a.isGroup || a.shape === "collapsedGroup") {
			a.colorIndex = fo(n.get(a.id) ?? i++, r);
			continue;
		}
		let e = t(a.id);
		e && co.has(e) && (a.kind = e);
	}
}
function mo(e, t, n) {
	let r = [], i = [], a = e.subgraphs, o = (t) => {
		let n = [];
		for (let r of t) {
			let t = e.classes.get(r);
			t?.styles && (n = [...n, ...t.styles].map((e) => e.trim())), t?.textStyles && (n = [...n, ...t.textStyles].map((e) => e.trim()));
		}
		return n;
	}, s = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Set();
	for (let t of a) {
		if (t.metadata?.view !== "collapsed" || s.has(t.id)) continue;
		let n = [t.id];
		for (; n.length > 0;) {
			let r = e.subgraph(n.pop())?.nodes;
			if (r !== void 0) for (let e of r) e === t.id || s.has(e) || (s.add(e), c.set(e, t.id), l.has(e) || n.push(e));
		}
		l.add(t.id);
	}
	let u = /* @__PURE__ */ new Map();
	for (let e of s) {
		let t = [e], n = c.get(e);
		for (;;) {
			let e = u.get(n), r = e ?? c.get(n);
			if (r === void 0 || (e === void 0 && t.push(n), n = r, e !== void 0)) break;
		}
		for (let e of t) u.set(e, n);
	}
	let d = /* @__PURE__ */ new Map();
	a.forEach((e, t) => d.set(e.id, t));
	let f = /* @__PURE__ */ new Map(), p = (e, t, n) => {
		let r = d.get(e);
		if (r === void 0 || r < n) return !1;
		let i = t;
		for (let t = 0; i !== void 0 && t <= a.length; t++) {
			if (i === e) return !0;
			i = f.get(i);
		}
		return !1;
	};
	for (let t = a.length - 1; t >= 0; t--) {
		let n = a[t];
		if (!s.has(n.id)) for (let r of n.nodes) p(r, n.id, t) ? e.emitWarning("CONTAINMENT_VIOLATION", `Container "${n.id}" cannot contain "${r}" because "${r}" already contains it. The nesting that would close the loop is dropped.`, { nodeId: r }) : f.set(r, n.id);
	}
	let m = /* @__PURE__ */ new Map();
	for (let e = a.length - 1; e >= 0; e--) {
		let t = a[e];
		if (s.has(t.id)) continue;
		let n = t.metadata?.view === "collapsed", i = {
			id: t.id,
			label: t.title,
			labelType: t.labelType,
			parentId: f.get(t.id),
			cssStyles: [],
			cssCompiledStyles: o(t.classes),
			cssClasses: t.classes.join(" "),
			shape: n ? "collapsedGroup" : "flowGroup",
			dir: t.dir,
			isGroup: !n,
			metadata: n ? {
				...t.metadata,
				containerType: t.type
			} : t.metadata
		};
		r.push(i), m.set(t.id, i);
	}
	for (let t of e.nodes.values()) {
		if (s.has(t.id)) continue;
		let n = m.get(t.id);
		if (n) {
			n.cssStyles = t.styles, n.cssCompiledStyles = o(t.classes), n.cssClasses = t.classes.join(" ");
			continue;
		}
		let i = Zt(t.type), a = {
			id: t.id,
			label: t.text,
			labelType: t.labelType,
			parentId: f.get(t.id),
			cssStyles: t.styles,
			cssCompiledStyles: o([
				"default",
				"node",
				...t.classes
			]),
			cssClasses: "default " + t.classes.join(" "),
			dir: t.dir,
			link: t.link,
			linkTarget: t.linkTarget,
			tooltip: e.tooltips.get(t.id),
			metadata: t.metadata,
			isGroup: !1,
			shape: i === "square" || i === void 0 ? "squareRect" : i
		};
		r.push(a), m.set(t.id, a);
	}
	e.edges.forEach((t, r) => {
		let a = u.get(t.start) ?? t.start, s = u.get(t.end) ?? t.end;
		if (a === s && t.start !== t.end) return;
		let c = [...e.defaultEdgeStyle ?? []];
		t.style && c.push(...t.style);
		let l = t.type === "arrow_open" ? "none" : t.type === "arrow_cross" || t.type === "arrow_point" ? t.type : "arrow_point";
		i.push({
			id: t.id || `L_${a}_${s}_${r}`,
			isUserDefinedId: t.isUserDefinedId,
			start: a,
			end: s,
			type: t.type ?? "normal",
			label: t.text,
			labelType: t.labelType,
			thickness: t.stroke,
			pattern: t.stroke,
			minlen: t.length,
			classes: "edge-thickness-normal edge-pattern-solid flowchart-link",
			arrowTypeStart: "none",
			arrowTypeEnd: l,
			cssCompiledStyles: o(t.classes),
			style: c,
			animate: t.animate,
			animation: t.animation,
			curve: t.interpolate || e.defaultInterpolate || n,
			metadata: t.metadata
		});
	}), $t(r, e);
	let h = /* @__PURE__ */ new Map();
	for (let e of a) {
		let t = f.get(e.id);
		if (t === void 0) continue;
		let n = h.get(t);
		n ? n.push(e.id) : h.set(t, [e.id]);
	}
	let g = /* @__PURE__ */ new Map();
	for (let e of a) {
		if (f.get(e.id) !== void 0) continue;
		let t = [e.id];
		for (; t.length > 0;) {
			let e = t.pop();
			if (g.has(e)) continue;
			g.set(e, g.size);
			let n = h.get(e);
			if (n) for (let e = n.length - 1; e >= 0; e--) t.push(n[e]);
		}
	}
	return po(r, (t) => {
		if (e.connectors.has(t)) return "connector";
		let n = e.nodes.get(t);
		return n ? e.vertexKind(n) : void 0;
	}, g, t), {
		nodes: r,
		edges: i
	};
}
var ho = 8, go = 40, _o = 16, vo = 48, yo = 20, bo = 26, xo = 14, So = "collapsed", Co = {
	TB: 2,
	RL: 3,
	BT: 0,
	LR: 1
}, wo = /* @__PURE__ */ new WeakMap();
function To(e, t) {
	let n = wo.get(e);
	if (n === void 0) {
		let r = t.flowchart?.curve;
		n = mo(e, ho, typeof r == "string" ? r : void 0), wo.set(e, n);
	}
	return n;
}
function Eo(e, t, n) {
	let r = e.agentflow?.[t];
	return typeof r == "number" && r > 0 ? Math.min(r, 2e3) : n;
}
var Do = /[";]fill:/;
function Oo(e, t, n) {
	let r = Bi(e);
	return ` fill="${r}"${Do.test(n.shape) ? "" : ` fill-opacity="${t}"`} stroke="${r}"`;
}
function ko(e, t, n) {
	return oo(e.direction) ? ao(n, (r) => Ao(e, t, n, r)) : Ao(e, t, n, !1);
}
function Ao(e, t, n, r) {
	let i = To(e, t), a = n.fontSize ?? 16, o = Math.round(a * .875), s = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), c = Eo(t, "wrappingWidth", 120), l = Eo(t, "minNodeWidth", 120), u = n.padding ?? 8, d = n.icons, f = /* @__PURE__ */ new Map(), m = [], h = [];
	i.nodes.forEach((e, t) => f.set(e.id, t));
	for (let e of i.nodes) {
		let t = Ii(e.cssStyles.length > 0 ? e.cssCompiledStyles.concat(e.cssStyles) : e.cssCompiledStyles), n = +!!t.bold | (t.italic ? 2 : 0), r = e.labelType === "markdown", i = t.fontSize ?? a, o, u;
		if (e.isGroup) {
			let a = Q(e.label, r, s, i, 4e3, n);
			o = {
				node: e,
				style: t,
				label: a,
				shape: "group",
				w: 0,
				h: 0,
				dy: 0,
				loops: 0
			}, u = ii(0, 0), u.isGroup = !0, u.dir = e.dir ? Br(e.dir) : void 0, u.padX = yo, u.padTop = a.height > 0 ? a.height + 16 : yo, u.padBottom = yo, u.minW = a.width + 2 * yo - 12;
		} else if (e.shape === "collapsedGroup") {
			let a = Q(e.label, r, s, i, c, n), d = Math.max(a.width, l) + 2 * Wi, f = a.height + 2 * Gi + xo;
			o = {
				node: e,
				style: t,
				label: a,
				shape: So,
				w: d,
				h: f,
				dy: -xo / 2,
				loops: 0
			}, u = ii(d, f);
		} else {
			let a = Kt(e.shape), d = Q(e.label, r, s, i, c, n), f = da(a, a === "diam" ? d.width : Math.max(d.width, l), d.height);
			o = {
				node: e,
				style: t,
				label: d,
				shape: a,
				w: f.w,
				h: f.h,
				dy: f.dy,
				loops: 0
			}, u = ii(f.w, f.h);
		}
		u.seq = m.length, m.push(o), h.push(u);
	}
	i.nodes.forEach((e, t) => {
		h[t].parent = e.parentId === void 0 ? -1 : f.get(e.parentId) ?? -1;
	});
	let g = r ? "TB" : Br(e.direction), _ = (e) => {
		let t;
		for (let n = h[e].parent, r = 0; n >= 0 && t === void 0 && r < 1e4; n = h[n].parent, r++) t = h[n].dir;
		return t ?? g;
	}, v = (e) => {
		let t = _(e);
		return t === "LR" || t === "RL";
	}, y = new Int32Array(h.length).fill(-1);
	for (let e = 0; e < h.length; e++) {
		let t = [], n = e;
		for (; n >= 0 && y[n] < 0 && t.length <= h.length;) t.push(n), n = h[n].parent;
		let r = n >= 0 ? y[n] + 1 : 0;
		for (let e = t.length - 1; e >= 0; e--) y[t[e]] = r++;
	}
	let b = (e, t) => {
		let n = t;
		for (let r = y[t]; r > y[e]; r--) n = h[n].parent;
		return n === e && t !== e;
	}, x = [], S = [], C = [], w = [];
	for (let e of i.edges) {
		let t = f.get(e.start), n = f.get(e.end);
		if (t === void 0 || n === void 0) continue;
		let r = Q(e.label, e.labelType === "markdown", s, o, c);
		b(t, n) || b(n, t) ? w.push({
			edge: e,
			label: r,
			src: t,
			dst: n
		}) : (t === n && (m[t].loops++, v(t) ? h[t].h += 2 * (bo + (r.height > 0 ? r.height + 8 : 0)) : h[t].w += 2 * (bo + (r.width > 0 ? r.width + 12 : 0))), C.push(e), S.push(r), x.push({
			src: t,
			dst: n,
			minlen: e.minlen ?? 1,
			labelW: r.width > 0 ? r.width + 12 : 0,
			labelH: r.height > 0 ? r.height + 4 : 0,
			route: [],
			labelX: 0,
			labelY: 0
		}));
	}
	let T = si(h, x, g, {
		nodeSep: Eo(t, "nodeSpacing", go),
		edgeSep: _o,
		rankSep: Eo(t, "rankSpacing", vo),
		portSep: 20
	}), E = Q(e.title, !1, s, a, 4e3, 1), D = E.height > 0 ? E.height + 12 : 0, O = Math.max(T.width, E.width);
	ri(h, x, u + (O - T.width) / 2, u + D);
	let k = Math.ceil(O + 2 * u), A = Math.ceil(T.height + D + 2 * u), j = [], M = [], N = [], P = [], F = w.length * h.length < 2e6;
	for (let { edge: e, src: t, dst: n } of w) {
		let r = b(n, t), i = r ? n : t, a = r ? t : n, o = h[i], s = h[a], c = Co[o.dir ?? _(i)], l = r ? c : c + 2 & 3, u = (e) => {
			let t = !(e & 1), n = e === 0 || e === 3 ? -1 : 1, i = t ? s.x : s.x + n * s.w / 2, a = t ? s.y + n * s.h / 2 : s.y, c = t ? s.x : o.x + n * o.w / 2, l = t ? o.y + n * o.h / 2 : s.y, u = +!t;
			return r ? [
				i,
				a,
				u,
				c,
				l,
				u
			] : [
				c,
				l,
				u,
				i,
				a,
				u
			];
		}, d = (e) => {
			for (let t = 0; t < h.length; t++) {
				let n = h[t];
				if (t !== a && !n.isGroup && n.x + n.w / 2 > Math.min(e[0], e[3]) - 1 && n.x - n.w / 2 < Math.max(e[0], e[3]) + 1 && n.y + n.h / 2 > Math.min(e[1], e[4]) - 1 && n.y - n.h / 2 < Math.max(e[1], e[4]) + 1) return !0;
			}
			return !1;
		}, f = u(l);
		if (F && d(f)) for (let e of [
			l + 1 & 3,
			l + 3 & 3,
			l + 2 & 3
		]) {
			let t = u(e);
			if (!d(t)) {
				f = t;
				break;
			}
		}
		P.push(f), N.push((f[0] + f[3]) / 2, (f[1] + f[4]) / 2);
		let p = f.slice();
		_a(p, r ? 0 : 3, m[a], s), M.push(_i(p, "linear", 0, vi(e.arrowTypeEnd)));
	}
	let I = /* @__PURE__ */ new Map(), L = !1;
	for (let e of h) e.isGroup && (L = !0);
	if (L) {
		for (let e of x) ci(I, e.route);
		for (let e of P) ci(I, e);
	}
	let R = "", z = "";
	for (let e = 0; e < m.length; e++) {
		let t = m[e], r = h[e], i = t.node, a = r.x, o = r.y, s = Ri(i.cssClasses.replace(/^default\s?/, "")), c = Y(i.id);
		if (r.isGroup) {
			let e = li(r, t.label.width, I, yo);
			R += `<g class="pele-cluster pele-flow${s}" data-id="${c}"><rect x="${X(a - r.w / 2)}" y="${X(o - r.h / 2)}" width="${X(r.w)}" height="${X(r.h)}"${Ei(Oo(i.colorIndex ?? co.size, "0.06", t.style) + t.style.shape)}/>` + Z(t.label, e, o - r.h / 2 + 8 + t.label.height / 2, ` class="pele-cluster-label" fill="var(--_m)"${t.style.text}`, d) + "</g>";
			continue;
		}
		let l = t.w, u = t.h, f = "", g;
		if (t.shape === So) {
			let e = Bi(i.colorIndex ?? co.size), n = u / 2 - xo - 2, r = n + (xo + 2) / 2;
			g = `<rect x="${X(-l / 2)}" y="${X(-u / 2)}" width="${X(l)}" height="${X(u)}"${Ei(Oo(i.colorIndex ?? co.size, "0.06", t.style) + t.style.shape)}/><path d="M${X(-l / 2 + 10)},${X(n)}H${X(l / 2 - 10)}" fill="none" stroke="${e}" stroke-dasharray="3 3"${t.style.line}/><path class="pele-collapsed-mark" d="${jo(-9, r)}${jo(0, r)}${jo(9, r)}" fill="${e}" stroke="none"/>`;
		} else {
			let e = co.get(i.kind ?? "task") ?? 1;
			f = ` pele-kind-${i.kind ?? "task"}`, g = fa(t.shape, l, u, Oo(e, "0.14", t.style) + t.style.shape, ` stroke="${Bi(e)}"` + t.style.line);
		}
		let _ = Z(t.label, 0, t.dy, ` class="pele-label"${t.style.text}`, d);
		if (/ internal-link(?: |$)/.test(s + " ") && i.label && n.links !== !1) {
			let e = p(i.label), t = Rt(e, n), r = nt(e);
			_ = `<a class="internal-link"${t ? ` href="${r}"${Bt(n)}` : ""} data-href="${r}">${_}</a>`, j.push({
				id: i.id,
				href: e,
				internal: !0
			});
		}
		let v = g + _;
		i.tooltip && (v = `<title>${Y(i.tooltip)}</title>` + v), i.link && (v = zt(v, i.link, i.id, j, n, i.linkTarget ? ` target="${nt(i.linkTarget)}"` : "")), z += `<g class="pele-node pele-shape-${t.shape}${f}${s}" data-id="${c}" transform="translate(${X(a)},${X(o)})">${v}</g>`;
	}
	let B = "", V = "", H = (e, t, n, r, i) => {
		let a = e.style.length > 0 || e.cssCompiledStyles.length > 0 ? Ii(e.cssCompiledStyles.concat(e.style)) : void 0, o = e.arrowTypeEnd, s = a?.stroke ? nt(a.stroke) : "var(--_l)", c = e.thickness === "dotted" ? "reference" : o === "arrow_cross" ? "failure" : "sequence", l = Ri(e.classes.replace(/edge-thickness-normal|edge-pattern-solid|flowchart-link/g, ""));
		B += `<g class="pele-edge pele-edge-${c}${l}" data-id="${Y(e.id)}"${a?.line ?? ""}><path d="${n.d}"${e.thickness === "dotted" ? " stroke-dasharray=\"3 4\"" : ""}/>` + yi(o, n.ex, n.ey, n.edx, n.edy, s) + "</g>", t.width > 0 && (V += bi(e.id, t, r, i, a?.text ?? "", d));
	}, U = /* @__PURE__ */ new Map();
	for (let e = 0; e < x.length; e++) {
		let t = x[e], n = C[e], r = S[e], i = n.arrowTypeEnd, a;
		if (t.src === t.dst) {
			let e = m[t.src], n = U.get(t.src) ?? 0;
			U.set(t.src, n + 1), a = xi(h[t.src], e.w, e.h, n, v(t.src), bo, vi(i), t);
		} else {
			let e = t.route.slice();
			_a(e, 0, m[t.src], h[t.src]), _a(e, e.length - 3, m[t.dst], h[t.dst]), a = _i(e, n.curve, 0, vi(i));
		}
		H(n, r, a, t.labelX, t.labelY);
	}
	return w.forEach((e, t) => H(e.edge, e.label, M[t], N[2 * t], N[2 * t + 1])), {
		svg: Ui("agentflow", k, A, a, n, e, Z(E, k / 2, u + E.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + (R ? `<g class="pele-clusters">${R}</g>` : "") + (B ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round">${B}</g>` : "") + (V ? `<g class="pele-edge-labels" font-size="${o}">${V}</g>` : "") + `<g class="pele-nodes">${z}</g>`),
		width: k,
		height: A,
		links: j
	};
}
function jo(e, t) {
	return `M${X(e - 1.75)},${X(t)}a1.75,1.75 0 1 0 3.5,0a1.75,1.75 0 1 0 -3.5,0Z`;
}
var Mo = {
	type: "agentflow",
	keepComments: !0,
	parse(e, t, n, r, i) {
		let a = new hn({
			inheritDir: (t.flowchart ?? {}).inheritDir === !0,
			direction: typeof t.direction == "string" ? t.direction : void 0,
			lineOffset: r,
			maxEdges: i.maxEdges
		});
		return n && (a.title = n), Gn(e, a), To(a, t), a;
	},
	render: ko
};
function No(e) {
	throw new n(e, "semantic", { type: "architecture" });
}
var Po = class {
	type = "architecture";
	title;
	accTitle;
	accDescr;
	nodes = /* @__PURE__ */ new Map();
	groups = /* @__PURE__ */ new Map();
	edges = [];
	layoutHints = [];
	registered = /* @__PURE__ */ new Map();
	register(e, t, n) {
		this.registered.has(t) && No(`The ${e} id [${t}] is already in use by another ${this.registered.get(t)}`), n !== void 0 && (t === n && No(`The ${e} [${t}] cannot be placed within itself`), this.registered.has(n) || No(`The ${e} [${t}]'s parent does not exist. Please make sure the parent is created before this ${e}`), this.registered.get(n) === "node" && No(`The ${e} [${t}]'s parent is not a group`)), this.registered.set(t, e === "group" ? "group" : "node");
	}
	addService({ id: e, icon: t, iconText: n, title: r, in: i }) {
		this.register("service", e, i), this.nodes.set(e, {
			id: e,
			type: "service",
			icon: t,
			iconText: n,
			title: r,
			in: i
		});
	}
	addJunction({ id: e, in: t }) {
		this.register("junction", e, t), this.nodes.set(e, {
			id: e,
			type: "junction",
			in: t
		});
	}
	addGroup({ id: e, icon: t, title: n, in: r }) {
		this.register("group", e, r), this.groups.set(e, {
			id: e,
			icon: t,
			title: n,
			in: r
		});
	}
	addEdge({ lhsId: e, rhsId: t, lhsDir: n, rhsDir: r, lhsInto: i, rhsInto: a, lhsGroup: o, rhsGroup: s, title: c }) {
		let l = [[
			"left",
			e,
			o
		], [
			"right",
			t,
			s
		]];
		for (let [e, t] of l) this.registered.has(t) || No(`The ${e}-hand id [${t}] does not yet exist. Please create the service/group before declaring an edge to it.`);
		for (let [e, t] of l) this.nodes.has(t) || No(`The ${e}-hand id [${t}] is a group. Add {group} to a service inside it instead.`);
		let u = this.nodes.get(e).in;
		if (u !== void 0 && u === this.nodes.get(t).in) for (let [e, t, n] of l) n && No(`The ${e}-hand id [${t}] is modified to traverse the group boundary, but the edge does not pass through two groups.`);
		this.edges.push({
			lhsId: e,
			lhsDir: n,
			lhsInto: i,
			lhsGroup: o,
			rhsId: t,
			rhsDir: r,
			rhsInto: a,
			rhsGroup: s,
			title: c
		});
	}
	addLayoutHint(e) {
		e.members.length < 2 && No(`An align directive requires at least two members; got ${e.members.length}`);
		let t = /* @__PURE__ */ new Set();
		for (let n of e.members) this.registered.get(n) !== "node" && No(`align ${e.direction} references [${n}], which is not a service or junction`), t.has(n) && No(`align ${e.direction} lists [${n}] more than once`), t.add(n);
		this.layoutHints.push(e);
	}
};
function Fo(e, t) {
	e.accDescr && (t.accDescr = e.accDescr.replace(/\n\s+/g, "\n")), e.accTitle && (t.accTitle = e.accTitle.replace(/^\s+/g, "")), e.title && (t.title = e.title);
	for (let n of e.groups) t.addGroup(n);
	for (let n of e.services) t.addService(n);
	for (let n of e.junctions) t.addJunction(n);
	for (let n of e.edges) t.addEdge(n);
	for (let n of e.alignments) t.addLayoutHint({
		direction: n.direction,
		members: [...n.members]
	});
}
var Io = /* @__PURE__ */ new WeakMap();
function Lo(e) {
	let t = e.map((e, t) => t), n = [];
	for (let r = 0; r < 128; r++) {
		let i = String.fromCharCode(r);
		n.push(t.filter((t) => {
			let { pattern: n, first: r } = e[t];
			return typeof n == "string" ? n[0] === i : r === void 0 || r.includes(i);
		}));
	}
	let r = {
		starting: n,
		every: t,
		longer: e.map((t) => t.longer?.map((t) => e.indexOf(t)))
	};
	return Io.set(e, r), r;
}
function Ro(e, t, n) {
	let r = [], a = [], o = [], s = new Uint8Array(t.length), { starting: c, every: l, longer: u } = Io.get(t) ?? Lo(t), d = [], f = e.length, p = (n, r) => {
		if (s[n]) return -1;
		let i = t[n];
		if (i.match !== void 0) return i.match(e, r);
		if (i.scanner !== void 0) return (d[n] ??= i.scanner())(e, r);
		let a = i.pattern;
		return typeof a == "string" ? e.startsWith(a, r) ? r + a.length : -1 : (a.lastIndex = r, a.test(e) ? a.lastIndex : (i.opener !== void 0 && (i.opener.lastIndex = r, i.opener.test(e) && (s[n] = 1)), -1));
	}, m = 0;
	e: for (; m < f;) {
		let s = e.charCodeAt(m);
		for (let e of s < 128 ? c[s] : l) {
			let n = p(e, m);
			if (n <= m) continue;
			let i = e, s = u[e];
			if (s !== void 0) for (let e of s) {
				let t = p(e, m);
				if (t > n) {
					i = e, n = t;
					break;
				}
			}
			t[i].hidden || (r.push(i), a.push(m), o.push(n)), m = n;
			continue e;
		}
		throw i(n, e, m, "", !0);
	}
	return r.push(-1), a.push(f), o.push(f), {
		kinds: r,
		starts: a,
		ends: o,
		src: e
	};
}
var zo = {
	name: "ACC_DESCR",
	pattern: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/y,
	first: "	 a"
}, Bo = {
	name: "ACC_TITLE",
	pattern: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/y,
	first: "	 a"
}, Vo = {
	name: "TITLE",
	pattern: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/y,
	first: "	 t"
}, Ho = {
	name: "STRING",
	pattern: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/y,
	first: "\"'"
}, Uo = {
	name: "NEWLINE",
	pattern: /\r?\n/y,
	first: "\r\n"
}, Wo = {
	name: "WHITESPACE",
	pattern: /[\t ]+/y,
	hidden: !0,
	first: "	 "
}, Go = {
	name: "YAML",
	pattern: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/y,
	hidden: !0,
	opener: /---[\t ]*\r?\n/y,
	first: "-"
}, Ko = {
	name: "DIRECTIVE",
	pattern: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/y,
	hidden: !0,
	opener: /[\t ]*%%{/y,
	first: "	 %"
}, qo = {
	name: "SINGLE_LINE_COMMENT",
	pattern: /[\t ]*%%[^\n\r]*/y,
	first: "	 %",
	hidden: !0
};
function Jo(e) {
	return {
		name: e,
		pattern: RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(?:(?=%%)|(?!\\S))", "y"),
		first: e[0]
	};
}
var Yo = /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/, Xo = /accTitle[\t ]*:([^\n\r]*)/, Zo = /title([\t ][^\n\r]*|)/;
function Qo(e) {
	return e.trim().replace(/[\t ]{2,}/gm, " ");
}
function $o(e) {
	return Qo(Zo.exec(e)[1]);
}
function es(e) {
	return Qo(Xo.exec(e)[1]);
}
function ts(e) {
	let t = Yo.exec(e);
	return t[1] === void 0 ? t[2].replace(/^\s*/gm, "").replace(/\s+$/gm, "").replace(/[\t ]{2,}/gm, " ").replace(/[\n\r]{2,}/gm, "\n") : Qo(t[1]);
}
var ns = /* @__PURE__ */ new Map([
	["b", "\b"],
	["f", "\f"],
	["n", "\n"],
	["r", "\r"],
	["t", "	"],
	["v", "\v"],
	["0", "\0"]
]);
function rs(e) {
	if (!e.includes("\\")) return e.slice(1, -1);
	let t = "";
	for (let n = 1; n < e.length - 1; n++) {
		let r = e[n];
		if (r === "\\") {
			let r = e[++n];
			t += ns.get(r) ?? r;
		} else t += r;
	}
	return t;
}
var is = class {
	constructor(e, t, n) {
		this.tokens = e, this.types = t, this.diagram = n, this.kinds = e.kinds;
	}
	tokens;
	types;
	diagram;
	i = 0;
	kinds;
	get kind() {
		return this.kinds[this.i];
	}
	text(e = this.i) {
		return this.tokens.src.slice(this.tokens.starts[e], this.tokens.ends[e]);
	}
	take() {
		return this.text(this.i++);
	}
	accept(e) {
		return this.kinds[this.i] === e && (this.i++, !0);
	}
	expect(e) {
		return this.kinds[this.i] !== e && this.fail(`token of type '${this.types[e].name}'`), this.take();
	}
	fail(e) {
		let t = this.kind === -1 ? "end of input" : `\`${this.text()}\``;
		throw i(this.diagram, this.tokens.src, this.tokens.starts[this.i], `Expecting ${e} but found ${t}.`);
	}
}, as = {
	name: "ID",
	pattern: /[\w]([-\w]*\w)?/y
};
function os(e) {
	return {
		name: e,
		pattern: e,
		longer: [as]
	};
}
var ss = [
	os("architecture-beta"),
	os("junction"),
	os("service"),
	os("column"),
	os("group"),
	os("align"),
	os("row"),
	{
		name: "--",
		pattern: "--",
		longer: [Go]
	},
	os("in"),
	{
		name: ":",
		pattern: ":"
	},
	{
		name: "-",
		pattern: "-",
		longer: [Go]
	},
	{
		name: "ARROW_DIRECTION",
		pattern: /L|R|T|B/y
	},
	{
		name: "ARROW_GROUP",
		pattern: /\{group\}/y
	},
	{
		name: "ARROW_INTO",
		pattern: /<|>/y
	},
	zo,
	Bo,
	Vo,
	Ho,
	as,
	Uo,
	Wo,
	Go,
	Ko,
	qo,
	{
		name: "ARCH_ICON",
		pattern: /\([\w-:]+\)/y
	},
	{
		name: "ARCH_TITLE",
		pattern: /\[(?:"([^"\\]|\\.)*"|'([^'\\]|\\.)*'|[^\[\]\r\n]+)\]/y
	}
];
function cs(e) {
	let t = e.slice(1, -1).trim();
	return (t.startsWith("\"") && t.endsWith("\"") || t.startsWith("'") && t.endsWith("'")) && (t = t.slice(1, -1).replace(/\\"/g, "\"").replace(/\\'/g, "'")), t.trim();
}
function ls(e) {
	let t = new is(Ro(e, ss, "architecture"), ss, "architecture"), n = {
		$type: "Architecture",
		groups: [],
		services: [],
		junctions: [],
		edges: [],
		alignments: []
	}, r = (e) => t.kinds[t.i] === e, i = () => {
		if (t.kind !== -1) for (t.kind !== 19 && t.fail("a line break or the end of input"); t.kind === 19;) t.i++;
	};
	for (; t.kind === 19;) t.i++;
	for (t.expect(0); t.kind !== -1;) {
		switch (t.kind) {
			case 19:
				t.i++;
				continue;
			case 14:
				n.accDescr = ts(t.take());
				break;
			case 15:
				n.accTitle = es(t.take());
				break;
			case 16:
				n.title = $o(t.take());
				break;
			case 4: {
				t.i++;
				let e = {
					$type: "Group",
					id: t.expect(18)
				};
				r(24) && (e.icon = t.take().slice(1, -1)), r(25) && (e.title = cs(t.take())), t.accept(8) && (e.in = t.expect(18)), n.groups.push(e);
				break;
			}
			case 2: {
				t.i++;
				let e = {
					$type: "Service",
					id: t.expect(18)
				};
				r(17) ? e.iconText = rs(t.take()) : r(24) && (e.icon = t.take().slice(1, -1)), r(25) && (e.title = cs(t.take())), t.accept(8) && (e.in = t.expect(18)), n.services.push(e);
				break;
			}
			case 1: {
				t.i++;
				let e = {
					$type: "Junction",
					id: t.expect(18)
				};
				t.accept(8) && (e.in = t.expect(18)), n.junctions.push(e);
				break;
			}
			case 18: {
				let e = t.take(), i = t.accept(12);
				t.expect(9);
				let a = t.expect(11), o = t.accept(13), s;
				t.accept(7) || (r(10) || t.fail("'--' or '-'"), t.i++, s = cs(t.expect(25)), t.expect(10));
				let c = t.accept(13), l = t.expect(11);
				t.expect(9);
				let u = t.expect(18), d = t.accept(12);
				n.edges.push({
					$type: "Edge",
					lhsId: e,
					lhsGroup: i,
					lhsDir: a,
					lhsInto: o,
					title: s,
					rhsInto: c,
					rhsDir: l,
					rhsId: u,
					rhsGroup: d
				});
				break;
			}
			case 5: {
				t.i++, !r(6) && !r(3) && t.fail("'row' or 'column'");
				let e = t.take(), i = [t.expect(18), t.expect(18)];
				for (; r(18);) i.push(t.take());
				n.alignments.push({
					$type: "Alignment",
					direction: e,
					members: i
				});
				break;
			}
			default: t.fail("a group, a service, a junction, an edge, an alignment, a title, or a line break");
		}
		i();
	}
	return n;
}
var us = /* @__PURE__ */ new Map([
	["database", "M4 6a8 3 0 1 0 16 0a8 3 0 1 0-16 0M4 6v12a8 3 0 0 0 16 0V6M4 12a8 3 0 0 0 16 0"],
	["server", "M3 4h18v7H3zM3 13h18v7H3zM7 7.5h.01M7 16.5h.01M11 7.5h6M11 16.5h6"],
	["disk", "M5 3h14v18H5zM12 6.5a4 4 0 1 0 0 8a4 4 0 1 0 0-8M12 10.5h.01M8 18h3"],
	["internet", "M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0M3 12h18M12 3a13 13 0 0 0 0 18M12 3a13 13 0 0 1 0 18"],
	["cloud", "M7 18a4 4 0 0 1-.5-7.97A6 6 0 0 1 18 9.5a4.25 4.25 0 0 1-.5 8.5z"]
]);
function ds(e) {
	let t = us.get(e);
	return t === void 0 ? "" : `<path d="${t}" stroke="var(--_fg)" stroke-width="1.5"/>`;
}
var fs = [
	-1,
	1,
	0,
	0
], ps = [
	0,
	0,
	-1,
	1
];
function ms(e) {
	return e === "L" ? 0 : e === "R" ? 1 : e === "T" ? 2 : 3;
}
var hs = 64, gs = 2 ** 25, _s = 2 ** 26;
function vs(e, t, n, r) {
	let i = e.length, a = t.length, o = a, s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = new Int32Array(i + a).fill(o), u = new Int32Array(a + 1), d = [];
	for (let e = 0; e <= a; e++) d.push([]);
	t.forEach((e, t) => {
		c.set(e.id, t);
		let n = e.in === void 0 ? void 0 : c.get(e.in);
		n !== void 0 && n !== t ? (l[i + t] = n, u[t] = u[n] + 1) : u[t] = 1;
	}), e.forEach((e, t) => {
		s.set(e.id, t);
		let n = e.in === void 0 ? void 0 : c.get(e.in);
		n !== void 0 && (l[t] = n), d[l[t]].push(t);
	});
	for (let e = 0; e < a; e++) d[l[i + e]].push(i + e);
	let f = [], p = [], m = [], h = [], g = [], _ = [], v = Array(i + a), y = Array(i + a), b = (e, t, n, r, a) => {
		if (e === t) return;
		let o = e, s = t, c = l[e], d = l[t];
		for (; c !== d;) u[c] >= u[d] ? (o = i + c, c = l[o]) : (s = i + d, d = l[s]);
		let v = f.length;
		f.push(e), p.push(t), m.push(n), h.push(r), g.push(o), _.push(s), (a[o] ??= []).push(v), (a[s] ??= []).push(v);
	};
	for (let e of r) {
		let t = e.direction === "row";
		for (let n = 1; n < e.members.length; n++) {
			let r = s.get(e.members[n - 1]), i = s.get(e.members[n]);
			r !== void 0 && i !== void 0 && b(r, i, t ? 1 : 3, t ? 0 : 2, v);
		}
	}
	for (let e of [!1, !0]) for (let t of n) {
		if (t.lhsDir === t.rhsDir !== e) continue;
		let n = s.get(t.lhsId), r = s.get(t.rhsId);
		n !== void 0 && r !== void 0 && b(n, r, ms(t.lhsDir), ms(t.rhsDir), y);
	}
	let x = new Int32Array(i + a), S = new Int32Array(i + a), C = new Int32Array(i + a).fill(1), w = new Int32Array(i + a).fill(1), T = new Uint8Array(i + a), E = [], D = /* @__PURE__ */ new Map(), O = [], k = /* @__PURE__ */ new Map(), A = 0, j = 0, M = 0, N = (e, t) => {
		j = 0, M = 0;
		for (let n = e; n !== t; n = i + l[n]) j += x[n], M += S[n];
	}, P = (e, t, n) => {
		if (x[e] = t, S[e] = n, T[e] = 1, E.push(e), C[e] * w[e] > hs) O.push(e);
		else for (let r = n; r < n + w[e]; r++) for (let n = t; n < t + C[e]; n++) D.set((n + gs) * _s + r + gs, e);
	}, F = (e, t, n, r, i) => x[e] < t + r && t < x[e] + C[e] && S[e] < n + i && n < S[e] + w[e], I = (e, t, n, r) => {
		if (n * r > hs) {
			for (let i = A; i < E.length; i++) if (F(E[i], e, t, n, r)) return E[i];
			return -1;
		}
		for (let i = t; i < t + r; i++) for (let t = e; t < e + n; t++) {
			let e = D.get((t + gs) * _s + i + gs);
			if (e !== void 0) return e;
		}
		for (let i of O) if (F(i, e, t, n, r)) return i;
		return -1;
	}, L = (e, t, n, r, i, a) => {
		let o = `${e},${t},${n},${r},${i},${a}`, s = k.get(o) ?? 0;
		for (;;) {
			let o = I(e + s * i, t + s * a, n, r);
			if (o < 0) break;
			s = i > 0 ? x[o] + C[o] - e : i < 0 ? e + n - x[o] : a > 0 ? S[o] + w[o] - t : t + r - S[o];
		}
		return k.set(o, s), s;
	}, R = (e, t) => {
		let n = g[t] === e, r = n ? _[t] : g[t];
		if (T[r]) return;
		let i = n ? m[t] : h[t], a = n ? h[t] : m[t];
		N(n ? f[t] : p[t], e);
		let o = j, s = M;
		N(n ? p[t] : f[t], r);
		let c = fs[i], l = ps[i], u = 0, d = 0, v = fs[i] + fs[a] === 0 && ps[i] + ps[a] === 0;
		i === a ? (c = +(fs[i] === 0), l = 1 - c) : v || (u = -fs[a], d = -ps[a]);
		let b, E;
		if (c === 0 ? (E = l > 0 ? S[e] + w[e] : S[e] - w[r], b = x[e] + o + u - j) : (b = c > 0 ? x[e] + C[e] : x[e] - C[r], E = S[e] + s + d - M), v) {
			let e = y[r];
			if (e !== void 0 && e.length > 1) {
				let t = [];
				for (let n of e) {
					let e = _[n] === r, o = e ? g[n] : _[n];
					if (!T[o] || (e ? m[n] : h[n]) !== i || (e ? h[n] : m[n]) !== a) continue;
					N(e ? f[n] : p[n], o);
					let s = c === 0 ? x[o] + j : S[o] + M;
					N(e ? p[n] : f[n], r), t.push(s - (c === 0 ? j : M));
				}
				t.length > 1 && (t.sort((e, t) => e - t), c === 0 ? b = t[t.length - 1 >> 1] : E = t[t.length - 1 >> 1]);
			}
			let t = +(c === 0), n = 1 - t, o = L(b, E, C[r], w[r], t, n), s = o === 0 ? 0 : L(b, E, C[r], w[r], -t, -n), l = o <= s ? o : -s;
			b += t * l, E += n * l;
		} else {
			let e = L(b, E, C[r], w[r], c, l);
			b += c * e, E += l * e;
		}
		P(r, b, E);
	}, z = (e) => {
		let t = d[e];
		if (t.length === 0) return;
		E.length = 0;
		let n = [];
		for (let e of t) {
			if (T[e]) continue;
			A = E.length, n.push(A), D.clear(), O.length = 0, k.clear(), P(e, 0, 0);
			let t = A, r = A, i = 0;
			for (;;) {
				if (t < E.length) {
					let e = E[t++], n = v[e];
					if (n !== void 0) for (let t of n) R(e, t);
					continue;
				}
				if (r >= E.length) break;
				let e = y[E[r]];
				e === void 0 || i >= e.length ? (r++, i = 0) : R(E[r], e[i++]);
			}
		}
		n.push(E.length);
		let r = n.length - 1, o = Array(r), s = Array(r), c = Array(r), l = Array(r), u = 0, f = 0;
		for (let e = 0; e < r; e++) {
			let t = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0;
			for (let o = n[e]; o < n[e + 1]; o++) {
				let e = E[o];
				t = Math.min(t, x[e]), r = Math.min(r, S[e]), i = Math.max(i, x[e] + C[e]), a = Math.max(a, S[e] + w[e]);
			}
			o[e] = t, s[e] = r, c[e] = i - t, l[e] = a - r, u += c[e] * l[e], f = Math.max(f, c[e]);
		}
		let p = Math.max(f, Math.ceil(Math.sqrt(u * 2))), m = 0, h = 0, g = 0, _ = 0;
		for (let e = 0; e < r; e++) {
			m > 0 && m + c[e] > p && (h += g, m = 0, g = 0);
			for (let t = n[e]; t < n[e + 1]; t++) x[E[t]] += m - o[e], S[E[t]] += h - s[e];
			m += c[e], g = Math.max(g, l[e]), _ = Math.max(_, m);
		}
		e < a && (C[i + e] = _, w[i + e] = h + g);
	};
	for (let e = a - 1; e >= 0; e--) z(e);
	z(o);
	let B = new Int32Array(a), V = new Int32Array(a), H = new Int32Array(a), U = new Uint8Array(a);
	for (let e = 0; e < a; e++) {
		let t = l[i + e];
		H[e] = t === o ? -1 : t, B[e] = x[i + e] + (t === o ? 0 : B[t]), V[e] = S[i + e] + (t === o ? 0 : V[t]), d[e].length === 0 && (U[e] = 1);
	}
	let ee = new Int32Array(i), te = new Int32Array(i), W = new Int32Array(i);
	for (let e = 0; e < i; e++) {
		let t = l[e];
		W[e] = t === o ? -1 : t, ee[e] = x[e] + (t === o ? 0 : B[t]), te[e] = S[e] + (t === o ? 0 : V[t]);
	}
	return {
		col: ee,
		row: te,
		groupCol: B,
		groupRow: V,
		groupCols: C.slice(i),
		groupRows: w.slice(i),
		groupParent: H,
		groupEmpty: U,
		nodeParent: W
	};
}
var ys = 12, bs = 6, xs = 4, Ss = 3, Cs = [
	-1,
	1,
	0,
	0
], ws = [
	0,
	0,
	-1,
	1
];
function Ts(e, t, n, r, i) {
	let a = e.architecture, o = typeof a == "object" && a && !Array.isArray(a) ? a[t] : void 0;
	return typeof o == "number" && Number.isFinite(o) ? Math.min(i, Math.max(r, o)) : n;
}
function Es(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.sort((e, t) => e - t)) t.has(n) || t.set(n, t.size);
	return t;
}
function Ds(e, t, n, r, i) {
	return `<svg class="pele-icon" data-icon="${Y(e)}" x="${X(t)}" y="${X(n)}" width="${X(r)}" height="${X(r)}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${i?.(e) ?? ds(e)}</svg>`;
}
function Os(e, t, n, r) {
	let i = e.lines.length > n;
	if (!i && e.width <= t) return e;
	let a = r.width("…", e.size, 0), o = [], s = [], c = 0;
	for (let l = 0; l < Math.min(n, e.lines.length); l++) {
		let u = e.lines[l].map((e) => ({ ...e })), d = e.widths[l];
		if (d > t || i && l === n - 1) for (;;) {
			let n = u[u.length - 1];
			if (n === void 0) {
				u.push({
					text: "…",
					style: 0,
					width: a
				}), d = a;
				break;
			}
			let i = d - n.width;
			if (n.icon === void 0 && i + a < t) {
				let o = 0, s = n.text.length;
				for (; o < s;) {
					let c = o + s + 1 >> 1;
					i + r.width(n.text.slice(0, c), e.size, n.style) + a <= t ? o = c : s = c - 1;
				}
				let c = o > 0 ? n.text.charCodeAt(o - 1) : 0;
				c >= 55296 && c <= 56319 && o--, n.text = n.text.slice(0, o).trimEnd() + "…", n.width = r.width(n.text, e.size, n.style), d = i + n.width;
				break;
			}
			u.pop(), d = i;
		}
		o.push(u), s.push(d), c = Math.max(c, d);
	}
	return {
		...e,
		lines: o,
		widths: s,
		width: c,
		height: o.length * e.lineHeight
	};
}
function ks(e, t) {
	let { x: n, y: r, dx: i, dy: a } = e, { x: o, y: s, dx: c, dy: l } = t, u = n + i * ys, d = r + a * ys, f = o + c * ys, p = s + l * ys;
	if (i * c + a * l === 0) {
		let e = i === 0 ? n : o, t = i === 0 ? s : r;
		return (e - n) * i + (t - r) * a > 0 && (e - o) * c + (t - s) * l > 0 ? [
			n,
			r,
			e,
			t,
			o,
			s
		] : i === 0 ? [
			n,
			r,
			u,
			d,
			f,
			d,
			f,
			p,
			o,
			s
		] : [
			n,
			r,
			u,
			d,
			u,
			p,
			f,
			p,
			o,
			s
		];
	}
	let m = i !== 0, h = m ? s - r : o - n;
	if (i === -c && a === -l) {
		if ((o - n) * i + (s - r) * a > 0) {
			if (Math.abs(h) < .5) return [
				n,
				r,
				o,
				s
			];
			if (m) {
				let a = i > 0 ? e.x1 : t.x1, c = i > 0 ? t.x0 : e.x0, l = a < c ? (a + c) / 2 : (n + o) / 2;
				return [
					n,
					r,
					l,
					r,
					l,
					s,
					o,
					s
				];
			}
			let c = a > 0 ? e.y1 : t.y1, l = a > 0 ? t.y0 : e.y0, u = c < l ? (c + l) / 2 : (r + s) / 2;
			return [
				n,
				r,
				n,
				u,
				o,
				u,
				o,
				s
			];
		}
	} else if (Math.abs(h) >= 1) {
		if (m) {
			let e = i > 0 ? Math.max(n, o) + ys : Math.min(n, o) - ys;
			return [
				n,
				r,
				e,
				r,
				e,
				s,
				o,
				s
			];
		}
		let e = a > 0 ? Math.max(r, s) + ys : Math.min(r, s) - ys;
		return [
			n,
			r,
			n,
			e,
			o,
			e,
			o,
			s
		];
	}
	if (m) {
		let i = e.y1 + ys <= t.y0 ? (e.y1 + t.y0) / 2 : t.y1 + ys <= e.y0 ? (t.y1 + e.y0) / 2 : Math.max(e.y1, t.y1) + ys;
		return [
			n,
			r,
			u,
			r,
			u,
			i,
			f,
			i,
			f,
			s,
			o,
			s
		];
	}
	let g = e.x1 + ys <= t.x0 ? (e.x1 + t.x0) / 2 : t.x1 + ys <= e.x0 ? (t.x1 + e.x0) / 2 : Math.max(e.x1, t.x1) + ys;
	return [
		n,
		r,
		n,
		d,
		g,
		d,
		g,
		p,
		o,
		p,
		o,
		s
	];
}
function As(e) {
	let t = [e[0], e[1]];
	for (let n = 2; n < e.length; n += 2) {
		let r = e[n], i = e[n + 1], a = t.length, o = Math.abs(r - t[a - 2]) < .01, s = Math.abs(i - t[a - 1]) < .01;
		o && s || (a >= 4 && (o && Math.abs(t[a - 4] - t[a - 2]) < .01 || s && Math.abs(t[a - 3] - t[a - 1]) < .01) ? (t[a - 2] = r, t[a - 1] = i) : t.push(r, i));
	}
	return t;
}
function js(e, t, n) {
	let r = e.length / 2, i = Array(r), a = Array(r);
	for (let t = 0; t < r; t++) i[t] = e[t * 2], a[t] = e[t * 2 + 1];
	let o = (e, t, n) => {
		let r = Math.hypot(i[t] - i[e], a[t] - a[e]), o = Math.min(n, Math.max(0, r - 1));
		r > 0 && o > 0 && (i[e] += (i[t] - i[e]) / r * o, a[e] += (a[t] - a[e]) / r * o);
	};
	o(0, 1, t), o(r - 1, r - 2, n);
	let s = `M${X(i[0])},${X(a[0])}`;
	for (let e = 1; e < r - 1; e++) {
		let t = Math.hypot(i[e] - i[e - 1], a[e] - a[e - 1]), n = Math.hypot(i[e + 1] - i[e], a[e + 1] - a[e]), r = Math.min(bs, t / 2, n / 2);
		if (r < .5) {
			s += `L${X(i[e])},${X(a[e])}`;
			continue;
		}
		let o = i[e] - (i[e] - i[e - 1]) / t * r, c = a[e] - (a[e] - a[e - 1]) / t * r, l = i[e] + (i[e + 1] - i[e]) / n * r, u = a[e] + (a[e + 1] - a[e]) / n * r;
		s += `L${X(o)},${X(c)}Q${X(i[e])},${X(a[e])} ${X(l)},${X(u)}`;
	}
	return s + `L${X(i[r - 1])},${X(a[r - 1])}`;
}
function Ms(e, t, n) {
	return so(n, (r) => Ns(e, t, n, r));
}
function Ns(e, t, n, r) {
	let i = Ts(t, "iconSize", 48, 8, 512), a = Ts(t, "fontSize", n.fontSize ?? 16, 4, 128), o = Math.min(Ts(t, "padding", 20, 0, 256), r ? 12 : 1 / 0), s = Math.round(a * .875), c = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), l = n.padding ?? 8, u = n.icons, d = i / 2, f = [...e.nodes.values()], p = [...e.groups.values()], m = f.length, h = p.length, g = vs(f, p, e.edges, e.layoutHints), _ = /* @__PURE__ */ new Map();
	f.forEach((e, t) => _.set(e.id, t));
	let v = Array(m), y = new Float64Array(m), b = new Float64Array(m), x = r ? Math.max(i, 64) : Math.max(i * 2.25, 96);
	for (let e = 0; e < m; e++) {
		let t = f[e], n = Q(t.type === "service" ? t.title : void 0, !0, c, a, x);
		v[e] = n, y[e] = Math.max(i, 2 * Math.ceil(n.width / 2)), b[e] = i + (n.height > 0 ? xs + n.height : 0);
	}
	let S = [], C = [];
	for (let e = 0; e < m; e++) S.push(g.col[e]), C.push(g.row[e]);
	for (let e = 0; e < h; e++) g.groupEmpty[e] && (S.push(g.groupCol[e]), C.push(g.groupRow[e]));
	let w = Es(S), T = Es(C), E = w.size, D = T.size, O = new Float64Array(E), k = new Float64Array(D), A = r ? Math.max(24, 2 * ys) : Math.max(40, Math.round(i * .75)), j = new Float64Array(E).fill(A), M = new Float64Array(D).fill(A), N = new Int32Array(m), P = new Int32Array(m);
	for (let e = 0; e < m; e++) {
		let t = N[e] = w.get(g.col[e]), n = P[e] = T.get(g.row[e]);
		O[t] = Math.max(O[t], y[e]), k[n] = Math.max(k[n], b[e]);
	}
	for (let e = 0; e < h; e++) {
		if (!g.groupEmpty[e]) continue;
		let t = w.get(g.groupCol[e]), n = T.get(g.groupRow[e]);
		O[t] = Math.max(O[t], i), k[n] = Math.max(k[n], d);
	}
	let F = e.edges.length, I = Array(F), L = new Int32Array(F * 2);
	for (let t = 0; t < F; t++) {
		let n = e.edges[t], r = L[t * 2] = _.get(n.lhsId) ?? -1, i = L[t * 2 + 1] = _.get(n.rhsId) ?? -1, a = Q(n.title, !0, c, s, 160);
		if (I[t] = a, !(a.width === 0 || r < 0 || i < 0)) {
			if (N[r] !== N[i]) {
				let e = Math.min(N[r], N[i]);
				j[e] = Math.max(j[e], Math.ceil(a.width) + 28);
			} else if (O[N[r]] = Math.max(O[N[r]], 2 * Math.ceil(a.width / 2) + 8), P[r] !== P[i]) {
				let e = Math.min(P[r], P[i]);
				M[e] = Math.max(M[e], Math.ceil(a.height) + 24);
			}
		}
	}
	let R = Array(h), z = new Int32Array(h), B = new Int32Array(h), V = new Int32Array(h), H = new Int32Array(h), U = new Float64Array(h), ee = new Float64Array(h), te = new Float64Array(h), W = new Float64Array(h), ne = new Float64Array(h), re = new Float64Array(h), G = new Float64Array(E), K = new Float64Array(E), ie = new Float64Array(D), q = new Float64Array(D), ae = Math.round(a * 1.25);
	for (let e = 0; e < h; e++) {
		z[e] = w.get(g.groupCol[e]), B[e] = w.get(g.groupCol[e] + g.groupCols[e] - 1), V[e] = T.get(g.groupRow[e]), H[e] = T.get(g.groupRow[e] + g.groupRows[e] - 1);
		let t = Q(p[e].title, !0, c, a, r ? Math.max(80, no(n) / 2) : 320);
		R[e] = t;
		let i = p[e].icon ? ae : 0;
		ne[e] = t.width + i + (t.width > 0 && i > 0 ? 6 : 0), re[e] = Math.max(t.height, i);
	}
	for (let e = h - 1; e >= 0; e--) {
		let t = o + U[e], n = o + ee[e], r = (re[e] > 0 ? Math.max(o, re[e] + 12) : o) + te[e], i = o + W[e];
		if (ne[e] > 0) {
			let r = t + n;
			for (let t = z[e]; t <= B[e]; t++) r += O[t] + (t < B[e] ? K[t] + j[t] + G[t + 1] : 0);
			ne[e] + 20 > r && (n += Math.ceil(ne[e] + 20 - r));
		}
		U[e] = t, ee[e] = n, te[e] = r, W[e] = i, G[z[e]] = Math.max(G[z[e]], t), K[B[e]] = Math.max(K[B[e]], n), ie[V[e]] = Math.max(ie[V[e]], r), q[H[e]] = Math.max(q[H[e]], i);
		let a = g.groupParent[e];
		a < 0 || (z[a] === z[e] && (U[a] = Math.max(U[a], t)), B[a] === B[e] && (ee[a] = Math.max(ee[a], n)), V[a] === V[e] && (te[a] = Math.max(te[a], r)), H[a] === H[e] && (W[a] = Math.max(W[a], i)));
	}
	let oe = new Float64Array(E), J = new Float64Array(D), se = 0;
	for (let e = 0; e < E; e++) oe[e] = se + G[e], se = oe[e] + O[e] + K[e] + (e < E - 1 ? j[e] : 0);
	let ce = 0;
	for (let e = 0; e < D; e++) J[e] = ce + ie[e], ce = J[e] + k[e] + q[e] + (e < D - 1 ? M[e] : 0);
	let le = 0, ue = 0, de = se, fe = ce, pe = (e) => oe[z[e]] - U[e], me = (e) => oe[B[e]] + O[B[e]] + ee[e], he = (e) => J[V[e]] - te[e], ge = (e) => J[H[e]] + k[H[e]] + W[e], _e = (e) => oe[N[e]] + O[N[e]] / 2, ve = (e, t, n) => {
		let r = Cs[t], i = ws[t], a = _e(e), o = J[P[e]], s = {
			x: a,
			y: o + d,
			dx: r,
			dy: i,
			x0: a - y[e] / 2,
			y0: o,
			x1: a + y[e] / 2,
			y1: o + b[e],
			gap: 0,
			wire: !1
		};
		f[e].type === "junction" ? (s.x0 = s.x1 = a, s.y0 = s.y1 = s.y, s.gap = Ss) : r === 0 ? s.y = i < 0 ? o : o + b[e] + (v[e].height > 0 ? 2 : 0) : s.x = a + r * d;
		let c = n ? g.nodeParent[e] : -1;
		return c >= 0 && (s.x0 = pe(c), s.x1 = me(c), s.y0 = he(c), s.y1 = ge(c), s.gap = 0, s.wire = f[e].type === "junction", r === 0 ? s.y = i < 0 ? s.y0 : s.y1 : s.x = r < 0 ? s.x0 : s.x1), s;
	}, ye = "", be = "", xe = [], Se = vi("arrow_point");
	for (let t = 0; t < F; t++) {
		let n = e.edges[t], r = L[t * 2], i = L[t * 2 + 1];
		if (r < 0 || i < 0) continue;
		let a = ve(r, ms(n.lhsDir), n.lhsGroup), o = ve(i, ms(n.rhsDir), n.rhsGroup);
		a.x === o.x && a.y === o.y && a.dx === o.dx && (a.x -= 8 * Math.abs(a.dy), a.y -= 8 * Math.abs(a.dx), o.x += 8 * Math.abs(a.dy), o.y += 8 * Math.abs(a.dx));
		let s = ks(a, o);
		a.wire && s.unshift(_e(r), J[P[r]] + d), o.wire && s.push(_e(i), J[P[i]] + d);
		let c = As(s);
		if (c.length < 4) continue;
		let l = Y(`${n.lhsId}-${n.rhsId}`);
		ye += `<g class="pele-edge" data-id="${l}"><path d="${js(c, n.lhsInto && !a.wire ? Se + a.gap : 0, n.rhsInto && !o.wire ? Se + o.gap : 0)}"/>` + (n.lhsInto ? yi("arrow_point", a.x + a.dx * a.gap, a.y + a.dy * a.gap, -a.dx, -a.dy, "var(--_l)") : "") + (n.rhsInto ? yi("arrow_point", o.x + o.dx * o.gap, o.y + o.dy * o.gap, -o.dx, -o.dy, "var(--_l)") : "") + "</g>";
		let f = -1, p = -1, m = -1, h = -1, g = I[t];
		for (let e = 0; e < c.length; e += 2) le = Math.min(le, c[e] - 4), de = Math.max(de, c[e] + 4), ue = Math.min(ue, c[e + 1] - 4), fe = Math.max(fe, c[e + 1] + 4);
		for (let e = 0; e + 3 < c.length; e += 2) {
			let t = Math.abs(c[e + 1] - c[e + 3]) < .01, n = Math.abs(c[e] - c[e + 2]) + Math.abs(c[e + 1] - c[e + 3]);
			t || xe.push(c[e], Math.min(c[e + 1], c[e + 3]), Math.max(c[e + 1], c[e + 3])), n > p && (f = e, p = n), t && n > h && (m = e, h = n);
		}
		if (g.width > 0) {
			let e = h >= g.width + 8 ? m : f, t = (c[e] + c[e + 2]) / 2, r = (c[e + 1] + c[e + 3]) / 2, i = g.width + 8, s = Math.abs(c[e] - c[e + 2]) < .01;
			for (let e of [a, o]) t + i / 2 <= e.x0 || t - i / 2 >= e.x1 || r + g.height / 2 <= e.y0 || r - g.height / 2 >= e.y1 || (s ? t = t >= (e.x0 + e.x1) / 2 ? e.x1 + i / 2 + 4 : e.x0 - i / 2 - 4 : r = r >= (e.y0 + e.y1) / 2 ? e.y1 + g.height / 2 + 4 : e.y0 - g.height / 2 - 4);
			le = Math.min(le, t - i / 2), de = Math.max(de, t + i / 2), ue = Math.min(ue, r - g.height / 2), fe = Math.max(fe, r + g.height / 2), be += bi(`${n.lhsId}-${n.rhsId}`, g, t, r, "", u);
		}
	}
	let Ce = "";
	for (let e = 0; e < h; e++) {
		let t = p[e], n = pe(e), r = he(e), i = me(e) - n, a = R[e], o = "";
		if (ne[e] > 0) {
			let s = r + re[e] + 12, c = [];
			for (let e = 0; e < xe.length; e += 3) xe[e + 1] < s && xe[e + 2] > r && xe[e] > n && xe[e] < n + i && c.push(xe[e]);
			c.sort((e, t) => e - t), c.push(n + i - 4);
			let l = n + 10;
			for (let t of c) {
				if (t - 6 - l >= ne[e]) break;
				l = Math.max(l, t + 6);
			}
			l + ne[e] > n + i - 4 && (l = n + 10);
			let d = r + 6 + re[e] / 2, f = l;
			t.icon && (o += Ds(t.icon, l, d - ae / 2, ae, u), f += ae + 6), o += Z(a, f + a.width / 2, d, " class=\"pele-cluster-label\" fill=\"var(--_m)\"", u);
		}
		Ce += `<g class="pele-cluster" data-id="${Y(t.id)}"><rect x="${X(n)}" y="${X(r)}" width="${X(i)}" height="${X(ge(e) - r)}" fill="var(--_a)" fill-opacity="0.5" stroke="var(--_b)"${Ti}/>` + o + "</g>";
	}
	let we = "", Te = i * .5, Ee = Math.max(6, Math.round(a * .75));
	for (let e = 0; e < m; e++) {
		let t = f[e], n = `data-id="${Y(t.id)}" transform="translate(${X(_e(e))},${X(J[P[e]])})"`;
		if (t.type === "junction") {
			we += `<g class="pele-node pele-junction" ${n}><circle cy="${X(d)}" r="${Ss}" fill="var(--_l)"/></g>`;
			continue;
		}
		let r = "";
		if (t.icon) r = Ds(t.icon, -Te / 2, (i - Te) / 2, Te, u);
		else if (t.iconText) {
			let e = Q(t.iconText, !1, c, Ee, i - 8), n = Math.max(1, Math.floor((i - 4) / (e.lineHeight || 1)));
			r = Z(Os(e, i - 8, n, c), 0, d, ` class="pele-icon-text" font-size="${Ee}"`, u);
		}
		we += `<g class="pele-node pele-service" ${n}><rect x="${X(-d)}" width="${X(i)}" height="${X(i)}" fill="var(--_s)" stroke="var(--_b)"${Ti}/>` + r + Z(v[e], 0, i + xs + v[e].height / 2, " class=\"pele-label\"", u) + "</g>";
	}
	let De = Q(e.title, !1, c, a, r ? no(n) : 4e3, 1), Oe = De.height > 0 ? De.height + 12 : 0, ke = Math.ceil(Math.max(de - le, De.width) + 2 * l), Ae = Math.ceil(fe - ue + Oe + 2 * l), je = Math.round((ke - (de - le)) / 2 - le), Me = Math.round(l + Oe - ue), Ne = (Ce ? `<g class="pele-clusters">${Ce}</g>` : "") + (ye ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round" stroke-linejoin="round">${ye}</g>` : "") + (be ? `<g class="pele-edge-labels" font-size="${s}">${be}</g>` : "") + (we ? `<g class="pele-nodes">${we}</g>` : "");
	return {
		svg: Ui("architecture", ke, Ae, a, n, e, Z(De, ke / 2, l + De.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + (Ne ? `<g transform="translate(${je},${Me})">${Ne}</g>` : "")),
		width: ke,
		height: Ae,
		links: []
	};
}
var Ps = {
	type: "architecture",
	parse(e, t, n) {
		let r = new Po();
		return n && (r.title = n), Fo(ls(e), r), r;
	},
	render: Ms
}, Fs = 1e5;
function Is(e) {
	switch (e) {
		case "[]": return "square";
		case "()": return "round";
		case "(())": return "circle";
		case ">]": return "rect_left_inv_arrow";
		case "{}": return "diamond";
		case "{{}}": return "hexagon";
		case "([])": return "stadium";
		case "[[]]": return "subroutine";
		case "[()]": return "cylinder";
		case "((()))": return "doublecircle";
		case "[//]": return "lean_right";
		case "[\\\\]": return "lean_left";
		case "[/\\]": return "trapezoid";
		case "[\\/]": return "inv_trapezoid";
		case "<[]>": return "block_arrow";
		default: return "na";
	}
}
function Ls(e) {
	switch (e.trim().slice(-1)) {
		case "x": return "arrow_cross";
		case "o": return "arrow_circle";
		case ">": return "arrow_point";
		default: return "";
	}
}
function Rs(e) {
	switch (e.trim().charAt(0)) {
		case "x": return "arrow_cross";
		case "o": return "arrow_circle";
		case "<": return "arrow_point";
		default: return "arrow_open";
	}
}
function zs(e) {
	return e.includes("==") ? "thick" : "normal";
}
function Bs(e) {
	return e.includes(".-") ? "dotted" : "solid";
}
function Vs(e, t) {
	let n = e.flat(), r = -1;
	for (let e of n) if (e.type === "column-setting") {
		r = e.columns ?? -1;
		break;
	}
	return {
		list: n,
		at: 0,
		parent: t,
		children: [],
		columns: r
	};
}
var Hs = class {
	type = "block";
	title;
	root = {
		id: "root",
		type: "composite",
		children: [],
		columns: -1
	};
	blocks = [];
	edges = [];
	classes = /* @__PURE__ */ new Map();
	byId = /* @__PURE__ */ new Map();
	typeStr2Type = Is;
	edgeStrToEdgeData = Ls;
	edgeStrToEdgeStartData = Rs;
	edgeStrToThickness = zs;
	edgeStrToPattern = Bs;
	warn;
	pending = /* @__PURE__ */ new Set();
	edgeCount = /* @__PURE__ */ new Map();
	ids = 0;
	colors = 0;
	spaces = 0;
	constructor(e = {}) {
		this.warn = e.warn;
	}
	generateId() {
		return "id-" + ++this.ids;
	}
	addStyleClass(e, t = "") {
		let n = this.classes.get(e);
		n || (n = {
			id: e,
			styles: [],
			textStyles: []
		}, this.classes.set(e, n));
		for (let e of t.split(",")) {
			let t = e.indexOf(";"), r = (t === -1 ? e : e.slice(0, t) + e.slice(t + 1)).trim();
			e.includes("color") && n.textStyles.push(r.replace("fill", "bgFill").replace("color", "fill")), n.styles.push(r);
		}
	}
	addStyle2Node(e, t = "") {
		this.named(e).styles = t.split(",");
	}
	setCssClass(e, t) {
		for (let n of e.split(",")) (this.named(n.trim()).classes ??= []).push(t);
	}
	named(e) {
		let t = this.byId.get(e);
		return t === void 0 && (t = {
			id: e,
			type: "na",
			children: []
		}, this.byId.set(e, t), this.pending.add(e)), t;
	}
	setHierarchy(e) {
		let t = [Vs(e, this.root)];
		for (; t.length > 0;) {
			let e = t[t.length - 1];
			if (e.at === e.list.length) {
				e.parent.children = e.children, t.pop();
				continue;
			}
			let r = e.list[e.at++];
			switch (e.columns > 0 && r.type !== "column-setting" && typeof r.widthInColumns == "number" && r.widthInColumns > e.columns && this.warn?.(`Block ${r.id} width ${r.widthInColumns} exceeds configured column width ${e.columns}`), r.type) {
				case "classDef":
					this.addStyleClass(r.id, r.css);
					continue;
				case "applyClass":
					this.setCssClass(r.id, r.styleClass ?? "");
					continue;
				case "applyStyles":
					r.stylesStr && this.addStyle2Node(r.id, r.stylesStr);
					continue;
				case "column-setting":
					e.parent.columns = r.columns ?? -1;
					continue;
				case "edge": {
					let e = (this.edgeCount.get(r.id) ?? 0) + 1;
					this.edgeCount.set(r.id, e), r.id = e + "-" + r.id, this.edges.push(r);
					continue;
				}
			}
			r.id ??= this.generateId(), r.label ||= r.type === "composite" ? "" : r.id;
			let i = this.byId.get(r.id), a = i === void 0 || this.pending.delete(r.id);
			a ? (i && (r.classes = i.classes, r.styles = i.styles), r.type === "composite" && (r.colorIndex = this.colors++), this.byId.set(r.id, r)) : (r.type !== "na" && (i.type = r.type), r.label !== r.id && (i.label = r.label));
			let o = r.children;
			if (r.children = [], r.type === "space") {
				let t = r.width ?? 1;
				if (!(t <= Fs - this.spaces)) throw new n(`A block diagram can hold at most ${Fs} space blocks.`, "limit", { type: "block" });
				this.spaces += Math.max(t, 0);
				for (let n = 0; n < t; n++) {
					let t = {
						...r,
						id: r.id + "-" + n,
						children: []
					};
					this.byId.set(t.id, t), e.children.push(t);
				}
			} else a && e.children.push(r);
			o && o.length > 0 && t.push(Vs(o, r));
		}
		this.blocks = this.root.children ?? [];
	}
}, Us = /* @__PURE__ */ "$end.INVALID.BLOCK_DIAGRAM_KEY.id-block.COLUMNS.MD_STR.STR.SPACE_BLOCK.DEFAULT.LINKSTYLE.INTERPOLATE.classDef.DEFAULT_CLASSDEF_ID.CLASSDEF_ID.CLASSDEF_STYLEOPTS.class.CLASSENTITY_IDS.STYLECLASS.style.STYLE_ENTITY_IDS.STYLE_DEFINITION_DATA.acc_title.acc_title_value.acc_descr.acc_descr_value.acc_descr_multiline_value.end.NODE_DSTART.NODE_DEND.BLOCK_ARROW_START.BLOCK_ARROW_END.DIR.NODE_ID.LINK.START_LINK.LINK_LABEL.SIZE.EOF".split("."), Ws = [
	"right",
	"left",
	"x",
	"y",
	"up",
	"down"
], Gs = /* @__PURE__ */ new Uint8Array(128);
for (let e of [
	9,
	10,
	11,
	12,
	13,
	32,
	40,
	41,
	45,
	58,
	60,
	61,
	62,
	91,
	123,
	125
]) Gs[e] = 1;
function Ks(e) {
	let t = e.length, n = [], r = [], i = [], a = [], o = 0, s = 0, c = (e, t, a) => (n.push(e), r.push(t), i.push(s), s = a, !0), l = (t, n) => c(t, e.slice(s, n), n), u = (e) => {
		a.push(o), o = e;
	}, d = () => {
		a.length > 0 && (o = a.pop());
	}, f = (n) => {
		for (; n < t && G(e.charCodeAt(n));) n++;
		return n;
	}, p = (n) => {
		for (; n < t;) {
			let t = e.charCodeAt(n);
			if (t < 48 || t > 57) break;
			n++;
		}
		return n;
	}, m = (n) => {
		for (; n < t && J(e.charCodeAt(n));) n++;
		return n;
	}, h = (t) => e.startsWith(t, s) && !J(e.charCodeAt(s + t.length)), g = () => (e.charCodeAt(s + 1) === 96 ? (u(2), s += 2) : (u(1), s++), !0), _ = (t) => {
		if (e.charCodeAt(t) !== 46) return -1;
		do
			t++;
		while (e.charCodeAt(t) === 46);
		if (e.charCodeAt(t) !== 45) return -1;
		let n = e.charCodeAt(t + 1);
		return n === 120 || n === 111 || n === 62 ? t + 2 : t + 1;
	}, v = (t) => {
		let n = e.charCodeAt(t);
		(n === 120 || n === 111 || n === 60) && t++;
		let r = e.charCodeAt(t);
		if (r === 46) return _(t);
		if (r !== 45 && r !== 61) return -1;
		let i = t + 1;
		for (; e.charCodeAt(i) === r;) i++;
		if (i - t === 1) return r === 45 ? _(i) : -1;
		let a = e.charCodeAt(i);
		return a === 120 || a === 111 || a === 62 ? i + 1 : i - t >= 3 ? i : -1;
	}, y = () => {
		let t = v(s);
		if (t >= 0) return l(33, f(t));
		let n = e.charCodeAt(s) === 60 ? s + 1 : s, r = e.charCodeAt(n), i = e.charCodeAt(n + 1);
		return r === 45 && (i === 45 || i === 46) || r === 61 && i === 61 ? (u(6), l(34, f(n + 2))) : !1;
	}, b = (n) => {
		let r = e.indexOf("\n", s);
		return r === -1 && (r = t), d(), l(n, r);
	}, x = (t, n) => {
		let r = m(s);
		if (r === s) return !1;
		for (; e.charCodeAt(r) === 44;) {
			let e = f(r + 1), t = m(e);
			if (t === e) break;
			r = t;
		}
		return o = n, l(t, r);
	}, S = (n) => {
		if (G(n)) return s = f(s + 1), !0;
		let r;
		switch (n) {
			case 98:
				if (e.startsWith("block", s)) {
					if (h("block-beta")) return l(2, s + 10);
					if (e.charCodeAt(s + 5) === 58) return l(3, s + 6);
					if (!J(e.charCodeAt(s + 5))) return l(2, s + 5);
				}
				break;
			case 99:
				if (e.startsWith("columns", s)) {
					if (r = f(s + 7), r > s + 7) {
						if (e.startsWith("auto", r) && !J(e.charCodeAt(r + 4))) return c(4, "-1", r + 4);
						let t = p(r);
						if (t > r) return c(4, e.slice(r, t), t);
					}
				} else if (e.startsWith("class", s)) {
					let t = e.startsWith("Def", s + 5), n = t ? s + 8 : s + 5;
					if (r = f(n), r > n) return u(t ? 7 : 9), l(t ? 11 : 15, r);
				}
				break;
			case 34: return g();
			case 115:
				if (e.startsWith("space", s)) {
					if (e.charCodeAt(s + 5) === 58) {
						let t = p(s + 6);
						if (t > s + 6) return c(7, e.slice(s + 6, t), t);
					}
					if (!J(e.charCodeAt(s + 5))) return c(7, "1", s + 5);
				} else if (e.startsWith("style", s) && (r = f(s + 5), r > s + 5)) return u(11), l(18, r);
				break;
			case 100:
				if (h("default")) return l(8, s + 7);
				break;
			case 108:
				if (h("linkStyle")) return l(9, s + 9);
				break;
			case 105:
				if (h("interpolate")) return l(10, s + 11);
				break;
			case 97:
				if (e.startsWith("accTitle", s)) {
					if (r = f(s + 8), e.charCodeAt(r) === 58) return u(13), l(21, f(r + 1));
				} else if (e.startsWith("accDescr", s)) {
					r = f(s + 8);
					let t = e.charCodeAt(r);
					if (t === 58) return u(14), l(23, f(r + 1));
					if (t === 123) return u(15), s = f(r + 1), !0;
				}
				break;
			case 101:
				if (h("end")) return l(26, f(s + 3));
				break;
			case 45: return e.charCodeAt(s + 1) === 41 ? (u(3), l(27, s + 2)) : y();
			case 61: return y();
			case 60: return e.charCodeAt(s + 1) === 91 ? (u(4), l(29, s + 2)) : y();
			case 40: {
				let t = e.charCodeAt(s + 1), n = t === 45 || t === 91 ? 2 : t === 40 ? e.charCodeAt(s + 2) === 40 ? 3 : 2 : 1;
				return u(3), l(27, s + n);
			}
			case 41:
			case 123: return u(3), l(27, e.charCodeAt(s + 1) === n ? s + 2 : s + 1);
			case 62: return u(3), l(27, s + 1);
			case 91: {
				let t = e.charCodeAt(s + 1);
				return u(3), l(27, t === 91 || t === 124 || t === 40 || t === 92 || t === 47 ? s + 2 : s + 1);
			}
			case 58: {
				let t = p(s + 1);
				return t > s + 1 && c(36, e.slice(s + 1, t), t);
			}
		}
		for (r = s; r < t;) {
			let t = e.charCodeAt(r);
			if (t < 128 ? Gs[t] === 1 : G(t)) break;
			r++;
		}
		return r > s && l(32, r);
	}, C = (t) => {
		let n = e.charCodeAt(s + 1), r = 0;
		switch (t) {
			case 34: return g();
			case 40:
				r = n === 45 ? 2 : n === 40 ? e.charCodeAt(s + 2) === 40 ? 3 : 2 : 1;
				break;
			case 41:
				r = n === 41 ? e.charCodeAt(s + 2) === 41 ? 3 : 2 : n === 93 ? 2 : 1;
				break;
			case 125:
				r = n === 125 ? 2 : 1;
				break;
			case 45:
				r = n === 41 ? 2 : 0;
				break;
			case 93:
				r = n === 93 || n === 41 || n === 62 ? 2 : 1;
				break;
			case 92:
			case 47: r = n === 93 ? 2 : 0;
		}
		return r !== 0 && (d(), l(28, s + r));
	}, w = (t) => {
		if (t === 41) return d(), d(), c(30, "]>", f(s + 1));
		let n = f(t === 44 ? s + 1 : s);
		for (let r of Ws) if (e.startsWith(r, n)) {
			let i = f(n + r.length);
			return c(31, e.slice(t === 44 ? n : s, i), i);
		}
		return !1;
	};
	for (;;) {
		if (s >= t) {
			let e = -1;
			switch (o) {
				case 0:
					e = 37;
					break;
				case 1:
					e = 6;
					break;
				case 8:
					e = 14;
					break;
				case 10:
					e = 17;
					break;
				case 12:
					e = 20;
					break;
				case 13:
					e = 22;
					break;
				case 14:
					e = 24;
					break;
				case 15: e = 25;
			}
			s = t, e !== -1 && c(e, "", t);
			break;
		}
		let a = e.charCodeAt(s), p = !0;
		switch (o) {
			case 0:
				p = S(a);
				break;
			case 1:
				if (a === 34) d(), s++;
				else {
					let n = e.indexOf("\"", s);
					l(6, n === -1 ? t : n);
				}
				break;
			case 2:
				if (a === 96) p = e.charCodeAt(s + 1) === 34, p && (d(), s += 2);
				else if (a === 34) p = !1;
				else {
					let n = s + 1;
					for (; n < t;) {
						let t = e.charCodeAt(n);
						if (t === 96 || t === 34) break;
						n++;
					}
					l(5, n);
				}
				break;
			case 3:
				p = C(a);
				break;
			case 4:
				if (a === 34) g();
				else if (a === 93 && e.charCodeAt(s + 1) === 62) {
					let t = f(s + 2);
					p = e.charCodeAt(t) === 40, p && (u(5), s = t + 1);
				} else p = !1;
				break;
			case 5:
				p = w(a);
				break;
			case 6:
				if (a === 34) e.charCodeAt(s + 1) === 96 ? g() : (l(35, s + 1), u(1));
				else {
					let e = v(f(s));
					p = e >= 0, p && (d(), l(33, f(e)));
				}
				break;
			case 7: {
				let t = 12, n = e.startsWith("DEFAULT", s) ? s + 7 : s, r = f(n);
				(n === s || r === n) && (t = 13, n = m(s), r = f(n)), p = n > s && r > n, p && (o = 8, l(t, r));
				break;
			}
			case 8:
				b(14);
				break;
			case 9:
				p = x(16, 10);
				break;
			case 10:
				b(17);
				break;
			case 11:
				p = x(19, 12);
				break;
			case 12:
				b(20);
				break;
			case 13:
				b(22);
				break;
			case 14:
				b(24);
				break;
			case 15: if (a === 125) d(), s++;
			else {
				let n = e.indexOf("}", s);
				l(25, n === -1 ? t : n);
			}
		}
		if (!p) return n.push(1), r.push(""), i.push(s), {
			types: n,
			texts: r,
			starts: i
		};
	}
	return n.push(0), r.push(""), i.push(t), {
		types: n,
		texts: r,
		starts: i
	};
}
var qs = "'NODE_ID', 'COLUMNS', 'SPACE_BLOCK', 'BLOCK_DIAGRAM_KEY', 'id-block', 'classDef', 'class', 'style'";
function Js(e) {
	let t = e[e.length - 1];
	return Array.isArray(t) ? (e.pop(), e.concat(t)) : e;
}
function Ys(e, t) {
	let { types: n, texts: r, starts: a } = Ks(e), o = 0, s = (t) => {
		let r = n[o];
		throw r === 1 ? i("block", e, a[o], "", !0) : i("block", e, a[o], `Expecting ${t}, got '${Us[r]}'`);
	}, c = (e) => (n[o] !== e && s(`'${Us[e]}'`), r[o++]), l = () => {
		let e = c(32);
		if (n[o] === 27) {
			let t = r[o++];
			return {
				id: e,
				label: c(6),
				typeStr: t + c(28)
			};
		}
		if (n[o] === 29) {
			let t = r[o++], i = c(6), a = [c(31)];
			for (; n[o] === 31;) a.push(r[o++]);
			return {
				id: e,
				label: i,
				typeStr: t + c(30),
				directions: a
			};
		}
		return { id: e };
	}, u = () => {
		let e = l(), i = n[o] === 36 ? parseInt(r[o++], 10) : 1, a = {
			id: e.id,
			label: e.label,
			type: t.typeStr2Type(e.typeStr),
			directions: e.directions,
			widthInColumns: i
		}, s;
		for (; n[o] === 33 || n[o] === 34;) {
			let e = "";
			n[o++] === 34 && (c(35), e = c(6), c(33));
			let i = r[o - 1], u = l(), d = t.edgeStrToEdgeData(i), f = t.edgeStrToEdgeStartData(i), p = t.edgeStrToThickness(i), m = t.edgeStrToPattern(i);
			s ??= [{
				id: a.id,
				label: a.label,
				type: a.type,
				directions: a.directions
			}], a = {
				id: u.id,
				label: u.label,
				type: t.typeStr2Type(u.typeStr),
				directions: u.directions
			}, s.push({
				id: s[s.length - 1].id + "-" + u.id,
				start: s[s.length - 1].id,
				end: u.id,
				label: e,
				type: "edge",
				thickness: p,
				pattern: m,
				directions: u.directions,
				arrowTypeEnd: d,
				arrowTypeStart: f
			}, a);
		}
		return s ?? a;
	};
	c(2);
	let d = [], f = [];
	for (;;) switch (n[o]) {
		case 32:
			f.push(u());
			break;
		case 4:
			f.push({
				type: "column-setting",
				columns: parseInt(r[o++], 10)
			});
			break;
		case 7: {
			let e = parseInt(r[o++], 10);
			f.push({
				id: t.generateId(),
				type: "space",
				label: "",
				width: e,
				children: []
			});
			break;
		}
		case 2:
			o++, d.push({
				list: f,
				header: void 0
			}), f = [];
			break;
		case 3:
			o++, n[o] !== 32 && s("'NODE_ID'"), d.push({
				list: f,
				header: u()
			}), f = [];
			break;
		case 26: {
			let e = d.pop();
			if (e === void 0 || f.length === 0) return s(qs);
			o++;
			let n = t.generateId(), r = Js(f);
			f = e.list, f.push(e.header === void 0 ? {
				id: n,
				type: "composite",
				label: "",
				children: r
			} : {
				...e.header,
				type: "composite",
				children: r
			});
			break;
		}
		case 11: {
			o++;
			let e = c(13).trim();
			f.push({
				type: "classDef",
				id: e,
				css: c(14).trim()
			});
			break;
		}
		case 15: {
			o++;
			let e = c(16).trim();
			f.push({
				type: "applyClass",
				id: e,
				styleClass: c(17).trim()
			});
			break;
		}
		case 18: {
			o++;
			let e = c(19).trim();
			f.push({
				type: "applyStyles",
				id: e,
				stylesStr: c(20).trim()
			});
			break;
		}
		case 37:
			d.length > 0 && s(qs + ", 'end'"), f.length === 0 && s(qs), t.setHierarchy(Js(f));
			return;
		default: s(f.length === 0 ? qs : qs + (d.length > 0 ? ", 'end'" : ", 'EOF'"));
	}
}
function Xs(e, t, n, r) {
	return w(() => Q(e, !1, t, n, r, 1));
}
function Zs(e, t, n, r, i, a, o) {
	let s = Xs(e, t, n, 4e3);
	if (s.height === 0) return {
		width: i,
		height: a,
		content: o
	};
	let c = s.height + 12, l = Math.max(i, Math.ceil(s.width + 2 * r));
	return {
		width: l,
		height: Math.ceil(a + c),
		content: Z(s, l / 2, r + s.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + `<g transform="translate(${X((l - i) / 2)},${X(c)})">${o}</g>`
	};
}
var Qs = 1, $s = 2, ec = 4, tc = 8, nc = 7, rc = 20, ic = 12;
function ac(e) {
	let t = 0;
	if (e) for (let n of e) switch (n.trim()) {
		case "right":
			t |= Qs;
			break;
		case "left":
			t |= $s;
			break;
		case "up":
			t |= ec;
			break;
		case "down":
			t |= tc;
			break;
		case "x":
			t |= Qs | $s;
			break;
		case "y": t |= ec | tc;
	}
	return t;
}
var oc = (e, t) => e & t ? 1 : 0;
function sc(e) {
	return e !== 0 && (e & (ec | tc)) === 0 ? "x" : e !== 0 && (e & (Qs | $s)) === 0 ? "y" : "";
}
function cc(e, t, n) {
	let r = sc(e), i = oc(e, $s) - oc(e, Qs), a = oc(e, ec) - oc(e, tc);
	if (r === "x") {
		let r = Math.max(n + 8, 14) + 2 * nc, a = Math.min(r / 2, rc);
		return {
			w: Math.max(t + 12, 16) + a * (e === (Qs | $s) ? 2 : 1),
			h: r,
			dx: i * a / 2,
			dy: 0
		};
	}
	if (r === "y") {
		let r = Math.max(t + 16, 14) + 2 * nc, i = Math.min(r / 2, rc);
		return {
			w: r,
			h: Math.max(n + 8, 16) + i * (e === (ec | tc) ? 2 : 1),
			dx: 0,
			dy: a * i / 2
		};
	}
	return {
		w: Math.max(t + 16, 24) + ic * (oc(e, $s) + oc(e, Qs)),
		h: Math.max(n + 8, 24) + ic * (oc(e, ec) + oc(e, tc)),
		dx: i * ic / 2,
		dy: a * ic / 2
	};
}
function lc(e, t, n, r) {
	let i = sc(e), a = t / 2, o = n / 2, s;
	if (i === "x") {
		let t = Math.min(o, rc), n = o - nc, r = e & $s ? -a + t : -a, i = e & Qs ? a - t : a;
		s = [
			r,
			-n,
			i,
			-n
		], e & Qs && s.push(i, -o, a, 0, i, o), s.push(i, n, r, n), e & $s && s.push(r, o, -a, 0, r, -o);
	} else if (i === "y") {
		let t = Math.min(a, rc), n = a - nc, r = e & ec ? -o + t : -o, i = e & tc ? o - t : o;
		s = [
			n,
			r,
			n,
			i
		], e & tc && s.push(a, i, 0, o, -a, i), s.push(-n, i, -n, r), e & ec && s.push(-a, r, 0, -o, a, r);
	} else {
		let t = e & $s ? -a + ic : -a, n = e & Qs ? a - ic : a, r = e & ec ? -o + ic : -o, i = e & tc ? o - ic : o, c = (t + n) / 2, l = (r + i) / 2, u = Math.min(10, (n - t) / 2), d = Math.min(10, (i - r) / 2);
		s = [t, r], e & ec && s.push(c - u, r, c, -o, c + u, r), s.push(n, r), e & Qs && s.push(n, l - d, a, l, n, l + d), s.push(n, i), e & tc && s.push(c + u, i, c, o, c - u, i), s.push(t, i), e & $s && s.push(t, l + d, -a, l, t, l - d);
	}
	let c = "";
	for (let e = 0; e < s.length; e += 2) c += (e ? " " : "") + X(s[e]) + "," + X(s[e + 1]);
	return `<polygon points="${c}" stroke-linejoin="round"${r}/>`;
}
var uc = 1e3;
function dc(e, t) {
	if (e === 0 || !Number.isInteger(e)) throw new n("Columns must be an integer !== 0.", "semantic", { type: "block" });
	if (t < 0 || !Number.isInteger(t)) throw new n("Position must be a non-negative integer." + t, "semantic", { type: "block" });
	return e < 0 ? {
		px: t,
		py: 0
	} : {
		px: t % e,
		py: Math.floor(t / e)
	};
}
function fc(e, t, n) {
	let r = e.columns, i = [], a = 0, o = 0, s = 0, c = 0;
	for (let n of e.children) {
		let { px: e, py: l } = dc(r, a), u = n.span >= 1 ? Math.min(n.span, uc) : 1;
		if (r > 0 && u > r - e && (u = r - e), n.span = u, n.col = e, n.row = l, a += u, e + u > o && (o = e + u), l === i.length && i.push(0), n.children.length === 0 ? i[l] = -1 : i[l] >= 0 && n.nh > i[l] && (i[l] = n.nh), n.space) continue;
		let d = (n.nw - t * (u - 1)) / u;
		d > s && (s = d), n.nh > c && (c = n.nh);
	}
	let l = (i.length - 1) * t;
	for (let e = 0; e < i.length; e++) i[e] < 0 && (i[e] = c), l += i[e];
	e.cols = o, e.heights = i, e.nw = Math.max(e.nw, o * s + (o - 1) * t + 2 * n), e.nh = l + 2 * n + e.head;
}
function pc(e, t, n) {
	let { cols: r, heights: i } = e, a = i.length, o = (e.w - 2 * n - (r - 1) * t) / r, s = e.h - 2 * n - e.head - (a - 1) * t, c = 0;
	for (let e of i) c += e;
	let l = c > 0 ? s / c : 0, u = c > 0 ? 0 : s / a, d = e.x - e.w / 2 + n, f = e.y - e.h / 2 + n + e.head, p = 0;
	for (let n of e.children) {
		for (; p < n.row; p++) f += i[p] * l + u + t;
		n.w = o * n.span + t * (n.span - 1), n.h = i[p] * l + u, n.x = d + n.col * (o + t) + n.w / 2, n.y = f + n.h / 2;
	}
}
function mc(e, t) {
	let n = [e];
	for (let e = 0; e < n.length; e++) for (let t of n[e].children) n.push(t);
	for (let e = n.length - 1; e >= 0; e--) {
		let r = n[e];
		r.children.length > 0 && fc(r, t, e === 0 ? 0 : t);
	}
	e.w = e.nw, e.h = e.nh, e.x = e.w / 2, e.y = e.h / 2;
	for (let e = 0; e < n.length; e++) {
		let r = n[e];
		r.children.length > 0 && pc(r, t, e === 0 ? 0 : t);
	}
	return {
		width: e.w,
		height: e.h
	};
}
var hc = 12, gc = 200, _c = 8, vc = " fill=\"var(--_s)\" stroke=\"var(--_b)\"", yc = " stroke=\"var(--_b)\"", bc = [], xc = [], Sc = [], Cc = ["default"], wc = 2e6, Tc = /* @__PURE__ */ new Map([
	["square", "rect"],
	["round", "rounded"],
	["circle", "circle"],
	["doublecircle", "dbl-circ"],
	["diamond", "diam"],
	["hexagon", "hex"],
	["stadium", "stadium"],
	["subroutine", "fr-rect"],
	["cylinder", "cyl"],
	["rect_left_inv_arrow", "odd"],
	["lean_right", "lean-r"],
	["lean_left", "lean-l"],
	["trapezoid", "trap-b"],
	["inv_trapezoid", "trap-t"]
]), Ec = /* @__PURE__ */ new Set([
	"circle",
	"dbl-circ",
	"diam"
]), Dc = /* @__PURE__ */ new Set([
	"stadium",
	"hex",
	"odd",
	"lean-r",
	"lean-l",
	"trap-b",
	"trap-t"
]);
function Oc(e) {
	return e.kind === 0 && (e.shape === "circle" || e.shape === "dbl-circ");
}
function kc(e, t, n) {
	let r = e.bw / 2, i = e.bh / 2, a = Math.abs(t - e.x), o = i;
	return Oc(e) ? o = Math.sqrt(Math.max(r * r - a * a, 0)) : e.kind === 0 && e.shape === "diam" ? o = i * Math.max(1 - a / r, 0) : e.kind === 0 ? o = i - pa(e.shape, e.bw, e.bh, n > 0 ? 2 : 0) : e.kind === 1 && sc(e.mask) === "x" && (o = i - nc), e.y + n * o;
}
function Ac(e, t, n) {
	let r = e.bw / 2, i = e.bh / 2, a = Math.abs(t - e.y), o = r;
	return Oc(e) ? o = Math.sqrt(Math.max(i * i - a * a, 0)) : e.kind === 0 && e.shape === "diam" ? o = r * Math.max(1 - a / i, 0) : e.kind === 0 ? o = r - pa(e.shape, e.bw, e.bh, n > 0 ? 1 : 3) : e.kind === 1 && sc(e.mask) === "y" && (o = r - nc), e.x + n * o;
}
function jc(e, t, n, r) {
	let i = t - e.x, a = n - e.y, o = e.bw / 2, s = e.bh / 2, c;
	c = Oc(e) ? o / (Math.hypot(i, a) || 1) : e.kind === 0 && e.shape === "diam" ? 1 / (Math.abs(i) / o + Math.abs(a) / s || 1) : Math.min(i === 0 ? 1 / 0 : o / Math.abs(i), a === 0 ? 1 / 0 : s / Math.abs(a)), c === 1 / 0 && (c = 0), r.push(e.x + i * c, e.y + a * c);
}
function Mc(e, t, n, r, i) {
	let a = i.x - i.bw / 2 + 1, o = i.x + i.bw / 2 - 1, s = i.y - i.bh / 2 + 1, c = i.y + i.bh / 2 - 1;
	if (e < a && n < a || e > o && n > o || t < s && r < s || t > c && r > c) return !1;
	if (e === n || t === r) return !0;
	let l = n - e, u = r - t, d = (n, r) => Math.sign(l * (r - t) - u * (n - e)), f = d(a, s);
	return f === 0 || d(o, s) !== f || d(o, c) !== f || d(a, c) !== f;
}
function Nc(e, t, n, r) {
	let i = 0;
	for (let a of r) if (a !== t && a !== n) {
		for (let t = 0; t + 3 < e.length; t += 2) if (Mc(e[t], e[t + 1], e[t + 2], e[t + 3], a)) {
			i++;
			break;
		}
	}
	return i;
}
function Pc(e, t, n, r) {
	let i = e.x - e.bw / 2, a = e.x + e.bw / 2, o = e.y - e.bh / 2, s = e.y + e.bh / 2, c = t.x - t.bw / 2, l = t.x + t.bw / 2, u = t.y - t.bh / 2, d = t.y + t.bh / 2, f = Math.max(i, c), p = Math.min(a, l), m = Math.max(o, u), h = Math.min(s, d), g = p - f > 6, _ = h - m > 6;
	if (g && _) {
		let n = e.bw * e.bh <= t.bw * t.bh ? e : t, r = n === e ? t : e, i = n.y - n.bh / 2 - (r.y - r.bh / 2), a = r.y + r.bh / 2 - (n.y + n.bh / 2), o = n.x - n.bw / 2 - (r.x - r.bw / 2), s = r.x + r.bw / 2 - (n.x + n.bw / 2), c = Math.min(i, a, o, s), l;
		return l = c === a ? [
			n.x,
			kc(n, n.x, 1),
			n.x,
			r.y + r.bh / 2
		] : c === i ? [
			n.x,
			kc(n, n.x, -1),
			n.x,
			r.y - r.bh / 2
		] : c === s ? [
			Ac(n, n.y, 1),
			n.y,
			r.x + r.bw / 2,
			n.y
		] : [
			Ac(n, n.y, -1),
			n.y,
			r.x - r.bw / 2,
			n.y
		], n === e ? l : [
			l[2],
			l[3],
			l[0],
			l[1]
		];
	}
	if (g) {
		let r = Math.min(6, (p - f) / 2), i = Math.min(Math.max((f + p) / 2 + n, f + r), p - r), a = t.y > e.y ? 1 : -1;
		return [
			i,
			kc(e, i, a),
			i,
			kc(t, i, -a)
		];
	}
	if (_) {
		let r = Math.min(6, (h - m) / 2), i = Math.min(Math.max((m + h) / 2 + n, m + r), h - r), a = t.x > e.x ? 1 : -1;
		return [
			Ac(e, i, a),
			i,
			Ac(t, i, -a),
			i
		];
	}
	let v = t.x > e.x ? 1 : -1, y = t.y > e.y ? 1 : -1, b = [
		Ac(e, e.y, v),
		e.y,
		t.x,
		e.y,
		t.x,
		kc(t, t.x, -y)
	], x = [
		e.x,
		kc(e, e.x, y),
		e.x,
		t.y,
		Ac(t, t.y, -v),
		t.y
	], S = Math.abs(t.x - e.x) >= Math.abs(t.y - e.y), C = S ? b : x;
	if (r === void 0) return C;
	let w = Nc(C, e, t, r);
	if (w === 0) return C;
	let T = S ? x : b, E = Nc(T, e, t, r);
	if (E < w && (C = T, w = E), w === 0) return C;
	let D = [];
	return jc(e, t.x, t.y, D), jc(t, e.x, e.y, D), Nc(D, e, t, r) < w ? D : C;
}
function Fc(e, t, n) {
	let r = e.length, i = e[0], a = e[1], o = e[r - 2], s = e[r - 1], c = e[2] - i, l = e[3] - a, u = Math.hypot(c, l);
	c /= u || 1, l /= u || 1;
	let d = o - e[r - 4], f = s - e[r - 3], p = Math.hypot(d, f);
	if (d /= p || 1, f /= p || 1, r === 4 && t + n > u) {
		let e = u / (t + n);
		t *= e, n *= e;
	}
	t = Math.min(t, u), n = Math.min(n, p);
	let m = `M${X(i + c * t)},${X(a + l * t)}`;
	if (r === 6) {
		let r = Math.max(0, Math.min(_c, u - t, p - n));
		m += `L${X(e[2] - c * r)},${X(e[3] - l * r)}Q${X(e[2])},${X(e[3])} ${X(e[2] + d * r)},${X(e[3] + f * r)}`;
	}
	return m += `L${X(o - d * n)},${X(s - f * n)}`, {
		d: m,
		sx: i,
		sy: a,
		sdx: -c,
		sdy: -l,
		ex: o,
		ey: s,
		edx: d,
		edy: f
	};
}
function Ic(e, t) {
	let n = e.bw / 2, r = e.bh / 2, i = Math.max(1, Math.min(10 + 5 * (t - 1), n, r));
	if (Oc(e)) {
		let t = e.x + n * Math.SQRT1_2, r = e.y - n * Math.SQRT1_2, a = 2 * Math.asin(Math.min(1, i / (2 * n))), o = (i) => Math.atan2(e.y - n * Math.sin(i) - r, e.x + n * Math.cos(i) - t);
		return [
			t,
			r,
			i,
			o(Math.PI / 4 + a),
			o(Math.PI / 4 - a)
		];
	}
	if (e.kind === 0 && e.shape === "diam") {
		let t = Math.atan2(r, n);
		return [
			e.x + n / 2,
			e.y - r / 2,
			i,
			t + Math.PI,
			t
		];
	}
	return [
		e.x + n,
		e.y - r,
		i,
		Math.PI,
		Math.PI / 2
	];
}
function Lc(e, t, n, r) {
	let [i, a, o, s, c] = Ic(e, t), l = s + n / o, u = c - r / o, d = (u - l) % (2 * Math.PI);
	d <= 0 && (d += 2 * Math.PI);
	let f = i + o * Math.cos(l), p = a + o * Math.sin(l), m = i + o * Math.cos(u), h = a + o * Math.sin(u), g = i + o * Math.cos(s), _ = a + o * Math.sin(s), v = i + o * Math.cos(c), y = a + o * Math.sin(c), b = Math.hypot(g - f, _ - p), x = Math.hypot(v - m, y - h);
	return {
		d: `M${X(f)},${X(p)}A${X(o)},${X(o)} 0 ${+(d > Math.PI)} 1 ${X(m)},${X(h)}`,
		sx: g,
		sy: _,
		sdx: b > 0 ? (g - f) / b : Math.sin(s),
		sdy: b > 0 ? (_ - p) / b : -Math.cos(s),
		ex: v,
		ey: y,
		edx: x > 0 ? (v - m) / x : -Math.sin(c),
		edy: x > 0 ? (y - h) / x : Math.cos(c)
	};
}
var Rc = [
	.5,
	.3,
	.7,
	.15,
	.85
];
function zc(e, t, n, r, i, a, o) {
	if (o === void 0) return .5;
	for (let s of Rc) {
		let c = e[t] + (e[t + 2] - e[t]) * s, l = e[t + 1] + (e[t + 3] - e[t + 1]) * s, u = !0;
		for (let e of o) if (e !== i && e !== a && Math.abs(c - e.x) < (n + e.bw) / 2 && Math.abs(l - e.y) < (r + e.bh) / 2) {
			u = !1;
			break;
		}
		if (u) return s;
	}
	return .5;
}
function Bc(e, t, n) {
	return so(n, (r) => Vc(e, t, n, r));
}
function Vc(e, t, n, r) {
	let i = n.fontSize ?? 16, a = Math.round(i * .875), o = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), s = n.padding ?? 8, c = n.icons, l = t.block?.padding, u = Math.min(typeof l == "number" && l >= 0 ? Math.min(l, 200) : hc, r ? 6 : 1 / 0), d = r ? 80 : gc, f = (t) => {
		let n = [], r = (e) => {
			for (let t of e) for (let e of t.split(";")) n.push(e);
		};
		for (let n of t.classes && t.classes.length > 0 ? t.classes : Cc) {
			let t = e.classes.get(n);
			t && r(t.styles);
		}
		return t.styles && r(t.styles), Ii(n);
	}, p = (e, t) => {
		let a = e.type, s = a === "space" ? Ii(bc) : f(e), c = +!!s.bold | (s.italic ? 2 : 0), l = s.fontSize ?? i, p = 0, m = "", h, g = 0, _ = 0, v = 0, y = 0, b = 0, x = 0;
		if (a === "space") p = 3, h = Q(void 0, !1, o, l, d);
		else if (a === "composite") p = 2, h = Q(e.label, !1, o, l, r ? no(n) : 4e3, c), v = h.height > 0 ? h.height + 4 : 0, g = h.width + 2 * u, _ = v + 2 * u;
		else if (a === "block_arrow") {
			p = 1, h = Q(e.label, !1, o, l, d, c);
			let t = !0;
			for (let e of h.lines) for (let n of e) (n.icon !== void 0 || n.text.trim() !== "") && (t = !1);
			y = ac(e.directions);
			let n = t ? cc(y, 0, 0) : cc(y, h.width, h.height);
			g = n.w, _ = n.h, b = n.dx, x = n.dy;
		} else {
			m = Tc.get(a ?? "") ?? "rect", h = Q(e.label, !1, o, l, d, c);
			let t = da(m, h.width, h.height);
			g = t.w, _ = m === "cyl" ? Math.max(t.h, h.height + 40) : t.h, x = t.dy;
		}
		return {
			children: [],
			columns: p === 2 ? e.columns ?? -1 : -1,
			span: p === 3 ? 1 : e.widthInColumns ?? 1,
			space: p === 3,
			head: v,
			nw: g,
			nh: _,
			col: 0,
			row: 0,
			cols: 0,
			heights: Sc,
			x: 0,
			y: 0,
			w: 0,
			h: 0,
			block: e,
			kind: p,
			index: t,
			shape: m,
			label: h,
			style: s,
			mask: y,
			dx: b,
			dy: x,
			bw: 0,
			bh: 0
		};
	}, m = p(e.root, 0);
	m.nw = 0, m.nh = 0;
	let h = [m], g = /* @__PURE__ */ new Map();
	for (let e = 0; e < h.length; e++) {
		let t = h[e];
		if (t.kind === 2) for (let e of t.block.children ?? xc) {
			let n = p(e, h.length);
			t.children.push(n), h.push(n), n.kind !== 3 && g.set(e.id, n);
		}
	}
	let _ = mc(m, u), v = [];
	for (let e of h) e.kind === 0 && Ec.has(e.shape) ? (e.bw = e.nw, e.bh = e.nh) : e.kind === 1 ? (e.bw = e.span > 1 ? e.w : e.nw, e.bh = e.nh) : (e.bw = e.w, e.bh = e.kind === 0 && Dc.has(e.shape) ? e.nh : e.h), e.kind === 0 && e.shape === "cyl" && (e.dy = Math.min(12, Math.max(6, e.bw / 14)) / 2), (e.kind === 0 || e.kind === 1) && v.push(e);
	let y = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Set(), x = [], S = [];
	for (let t of e.edges) {
		let e = g.get(t.start ?? ""), n = g.get(t.end ?? "");
		if (e === void 0 || n === void 0) continue;
		let r = Math.min(e.index, n.index) * h.length + Math.max(e.index, n.index);
		y.set(r, (y.get(r) ?? 0) + 1), t.label && b.add(r), x.push([e, n]), S.push(t);
	}
	let C = S.length * v.length <= wc ? v : void 0, w = /* @__PURE__ */ new Map(), T = [], E = 0, D = 0, O = _.width, k = _.height, A = (e, t, n, r) => {
		e - n / 2 < E && (E = e - n / 2), e + n / 2 > O && (O = e + n / 2), t - r / 2 < D && (D = t - r / 2), t + r / 2 > k && (k = t + r / 2);
	};
	for (let e = 0; e < S.length; e++) {
		let [t, n] = x[e], r = Math.min(t.index, n.index) * h.length + Math.max(t.index, n.index), i = y.get(r) ?? 1, s = w.get(r) ?? 0;
		w.set(r, s + 1);
		let c = Q(S[e].label, !1, o, a, gc), l, u, d;
		if (t === n) {
			let [e, n, r] = Ic(t, s + 1);
			l = [], A(e, n, 2 * r + 2, 2 * r + 2), u = e + r + 6 + c.width / 2, d = n - r / 2;
		} else {
			let e = b.has(r) ? Math.round(a * 1.5) + 2 : 14;
			l = Pc(t, n, (s - (i - 1) / 2) * e, C);
			let o = l.length, f = Math.abs(l[2] - l[0]) + Math.abs(l[3] - l[1]), p = Math.abs(l[o - 2] - l[o - 4]) + Math.abs(l[o - 1] - l[o - 3]), m = o === 6 && p > f ? 2 : 0, h = c.width > 0 ? zc(l, m, c.width + 8, c.height, t, n, C) : .5;
			u = l[m] + (l[m + 2] - l[m]) * h, d = l[m + 1] + (l[m + 3] - l[m + 1]) * h;
		}
		c.width > 0 && A(u, d, c.width + 8, c.height), T.push({
			edge: S[e],
			points: l,
			loop: t === n ? s + 1 : 0,
			label: c,
			lx: u,
			ly: d
		});
	}
	let j = Xs(e.title, o, i, r ? no(n) : 4e3), M = j.height > 0 ? j.height + 12 : 0, N = Math.max(O - E, j.width), P = s - E + (N - (O - E)) / 2, F = s + M - D;
	for (let e of h) e.x += P, e.y += F;
	let I = Math.ceil(N + 2 * s), L = Math.ceil(k - D + M + 2 * s), R = "", z = "";
	for (let e = 1; e < h.length; e++) {
		let t = h[e];
		if (t.kind === 3) continue;
		let n = Ri((t.block.classes ?? bc).join(" ")), r = Y(t.block.id);
		if (t.kind === 2) {
			let e = t.y - t.h / 2;
			R += `<g class="pele-cluster${n}" data-id="${r}"><rect x="${X(t.x - t.w / 2)}" y="${X(e)}" width="${X(t.w)}" height="${X(t.h)}" fill="var(--_a)" fill-opacity="0.5" stroke="var(--_b)"${Ei(t.style.shape)}/>` + Z(t.label, t.x, e + (t.head + u) / 2 + 2, ` class="pele-cluster-label" fill="var(--_m)"${t.style.text}`, c) + "</g>";
			continue;
		}
		let i = t.kind === 1;
		z += `<g class="pele-node pele-shape-${i ? "block-arrow" : t.shape}${n}" data-id="${r}" transform="translate(${X(t.x)},${X(t.y)})">` + (i ? lc(t.mask, t.bw, t.bh, vc + t.style.shape) : fa(t.shape, t.bw, t.bh, vc + t.style.shape, yc + t.style.line)) + Z(t.label, t.dx, t.dy, ` class="pele-label"${t.style.text}`, c) + "</g>";
	}
	let B = "", V = "";
	for (let e = 0; e < T.length; e++) {
		let { edge: t, points: n, loop: r, label: i } = T[e], a = t.arrowTypeStart ?? "", o = t.arrowTypeEnd ?? "", s;
		if (r > 0) s = Lc(x[e][0], r, vi(a), vi(o));
		else {
			for (let e = 0; e < n.length; e += 2) n[e] += P, n[e + 1] += F;
			s = Fc(n, vi(a), vi(o));
		}
		let l = Y(t.id);
		if (B += `<g class="pele-edge" data-id="${l}"><path d="${s.d}"${t.thickness === "thick" ? " stroke-width=\"2.5\"" : ""}${t.pattern === "dotted" ? " stroke-dasharray=\"3 4\"" : ""}/>` + yi(a, s.sx, s.sy, s.sdx, s.sdy, "var(--_l)") + yi(o, s.ex, s.ey, s.edx, s.edy, "var(--_l)") + "</g>", i.width > 0) {
			let n = T[e].lx + P, r = T[e].ly + F;
			V += bi(t.id, i, n, r, "", c);
		}
	}
	return {
		svg: Ui("block", I, L, i, n, e, Z(j, I / 2, s + j.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + (R ? `<g class="pele-clusters">${R}</g>` : "") + (B ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round">${B}</g>` : "") + `<g class="pele-nodes">${z}</g>` + (V ? `<g class="pele-edge-labels" font-size="${a}">${V}</g>` : "")),
		width: I,
		height: L,
		links: []
	};
}
var Hc = {
	type: "block",
	math: !0,
	parse(e, t, n) {
		let r = new Hs();
		return r.title = n, Ys(e, r), r;
	},
	render: Bc
}, Uc = /* @__PURE__ */ new Set([
	"label",
	"type",
	"descr",
	"techn",
	"sprite",
	"tags",
	"link",
	"bgColor",
	"fontColor",
	"borderColor",
	"shadowing",
	"shape",
	"legendText",
	"legendSprite"
]), Wc = /* @__PURE__ */ new Set([
	"label",
	"descr",
	"techn",
	"sprite",
	"tags",
	"link",
	"textColor",
	"lineColor"
]);
function Gc(e, t) {
	let { key: n, value: r } = t;
	"from" in e && (n === "offsetX" || n === "offsetY") ? e[n] = parseInt(r) : ("from" in e ? Wc : Uc).has(n) ? e[n] = r : (e.extra ??= /* @__PURE__ */ new Map()).set(n, r);
}
function Kc(e, t, n) {
	n !== void 0 && (typeof n == "string" ? e[t] = n : Gc(e, n));
}
function qc(e, t, n) {
	n === void 0 ? e[t] ??= "" : Kc(e, t, n);
}
function Jc(e, t) {
	e.labelAttr = void 0, typeof t == "object" ? (e.label = "", e.labelAttr = t, Gc(e, t)) : e.label = t ?? "";
}
var Yc = class {
	type = "c4";
	c4Type;
	title;
	accTitle;
	accDescr;
	shapes = [];
	boundaries = [{
		alias: "global",
		label: "global",
		type: "global",
		parent: void 0
	}];
	rels = [];
	shapeInRow = 4;
	boundaryInRow = 2;
	shapeIndex = /* @__PURE__ */ new Map();
	boundaryIndex = /* @__PURE__ */ new Map();
	relIndex = /* @__PURE__ */ new Map();
	current = this.boundaries[0];
	stack = [];
	setC4Type(e) {
		this.c4Type = e;
	}
	setTitle(e) {
		this.title = e;
	}
	setAccDescription(e) {
		this.accDescr = e.replace(/\n\s+/g, "\n");
	}
	element(e, t, n, r) {
		let i = typeof n == "string" ? t.get(n) : void 0;
		return i === void 0 && (i = {
			alias: "",
			label: "",
			parent: void 0
		}, e.push(i), typeof n == "string" ? (i.alias = n, t.set(n, i)) : (i.aliasAttr = n, Gc(i, n))), Jc(i, r), i;
	}
	addPersonOrSystem(e, t) {
		let n = this.element(this.shapes, this.shapeIndex, t[0], t[1]);
		qc(n, "descr", t[2]), this.finishShape(n, e, t, 3);
	}
	addContainer(e, t) {
		let n = this.element(this.shapes, this.shapeIndex, t[0], t[1]);
		qc(n, "techn", t[2]), qc(n, "descr", t[3]), this.finishShape(n, e, t, 4);
	}
	addComponent(e, t) {
		this.addContainer(e, t);
	}
	finishShape(e, t, n, r) {
		Kc(e, "sprite", n[r]), Kc(e, "tags", n[r + 1]), Kc(e, "link", n[r + 2]), e.kind = t, e.parent = this.current;
	}
	boundary(e, t) {
		let n = this.element(this.boundaries, this.boundaryIndex, e[0], e[1]);
		return e[2] === void 0 ? n.type = t : Kc(n, "type", e[2]), n;
	}
	open(e) {
		e.parent = this.current, this.stack.push(this.current), this.current = e;
	}
	addPersonOrSystemBoundary(e, t = "system") {
		let n = this.boundary(e, t);
		Kc(n, "tags", e[3]), Kc(n, "link", e[4]), this.open(n);
	}
	addContainerBoundary(e) {
		this.addPersonOrSystemBoundary(e, "container");
	}
	addDeploymentNode(e, t) {
		let n = this.boundary(t, "node");
		qc(n, "descr", t[3]), Kc(n, "sprite", t[4]), Kc(n, "tags", t[5]), Kc(n, "link", t[6]), n.nodeType = e, this.open(n);
	}
	popBoundaryParseStack() {
		this.current = this.stack.pop() ?? this.boundaries[0];
	}
	addRel(e, t) {
		let n = t[0], r = t[1];
		if (n === void 0 || r === void 0 || t[2] === void 0) return;
		let i = typeof n == "string" && typeof r == "string", a = i ? this.relIndex.get(n)?.get(r) : void 0;
		if (a === void 0) {
			if (a = {
				type: e,
				from: "",
				to: "",
				label: ""
			}, this.rels.push(a), i) {
				let e = this.relIndex.get(n);
				e === void 0 && this.relIndex.set(n, e = /* @__PURE__ */ new Map()), e.set(r, a);
			}
			typeof n == "string" ? a.from = n : a.fromAttr = n, typeof r == "string" ? a.to = r : a.toAttr = r;
		}
		a.type = e, Jc(a, t[2]), qc(a, "techn", t[3]), qc(a, "descr", t[4]), Kc(a, "sprite", t[5]), Kc(a, "tags", t[6]), Kc(a, "link", t[7]);
	}
	getC4Shape(e) {
		return this.shapeIndex.get(e) ?? this.boundaryIndex.get(e);
	}
	updateElStyle(e, t) {
		let n = typeof t[0] == "string" ? this.getC4Shape(t[0]) : void 0;
		n !== void 0 && (Kc(n, "bgColor", t[1]), Kc(n, "fontColor", t[2]), Kc(n, "borderColor", t[3]), Kc(n, "shadowing", t[4]), Kc(n, "shape", t[5]), Kc(n, "sprite", t[6]), Kc(n, "techn", t[7]), Kc(n, "legendText", t[8]), Kc(n, "legendSprite", t[9]));
	}
	updateRelStyle(e, t) {
		let n = t[0], r = t[1], i = typeof n == "string" && typeof r == "string" ? this.relIndex.get(n)?.get(r) : void 0;
		if (i === void 0) return;
		Kc(i, "textColor", t[2]), Kc(i, "lineColor", t[3]);
		let a = t[4], o = t[5];
		typeof a == "string" ? i.offsetX = parseInt(a) : a !== void 0 && Gc(i, a), typeof o == "string" ? i.offsetY = parseInt(o) : o !== void 0 && Gc(i, o);
	}
	updateLayoutConfig(e, t) {
		let n = (e) => e === void 0 ? NaN : parseInt(typeof e == "string" ? e : e.value), r = n(t[0]), i = n(t[1]);
		r >= 1 && (this.shapeInRow = r), i >= 1 && (this.boundaryInRow = i);
	}
}, Xc = /* @__PURE__ */ "$end.INVALID.direction_tb.direction_bt.direction_rl.direction_lr.title.accDescription.acc_title.acc_title_value.acc_descr.acc_descr_value.acc_descr_multiline_value.NEWLINE.C4_CONTEXT.C4_CONTAINER.C4_COMPONENT.C4_DYNAMIC.C4_DEPLOYMENT.PERSON.PERSON_EXT.SYSTEM.SYSTEM_DB.SYSTEM_QUEUE.SYSTEM_EXT.SYSTEM_EXT_DB.SYSTEM_EXT_QUEUE.CONTAINER.CONTAINER_DB.CONTAINER_QUEUE.CONTAINER_EXT.CONTAINER_EXT_DB.CONTAINER_EXT_QUEUE.COMPONENT.COMPONENT_DB.COMPONENT_QUEUE.COMPONENT_EXT.COMPONENT_EXT_DB.COMPONENT_EXT_QUEUE.ENTERPRISE_BOUNDARY.SYSTEM_BOUNDARY.BOUNDARY.CONTAINER_BOUNDARY.NODE.NODE_L.NODE_R.REL.BIREL.REL_U.REL_D.REL_L.REL_R.REL_B.REL_INDEX.UPDATE_EL_STYLE.UPDATE_REL_STYLE.UPDATE_LAYOUT_CONFIG.EOF_IN_STRUCT.ATTRIBUTE_EMPTY.STR.STR_KEY.STR_VALUE.LBRACE.RBRACE.EOF".split("."), Zc = /* @__PURE__ */ new Map([
	["C4Context", 14],
	["C4Container", 15],
	["C4Component", 16],
	["C4Dynamic", 17],
	["C4Deployment", 18],
	["Person", 19],
	["Person_Ext", 20],
	["System", 21],
	["SystemDb", 22],
	["SystemQueue", 23],
	["System_Ext", 24],
	["SystemDb_Ext", 25],
	["SystemQueue_Ext", 26],
	["Container", 27],
	["ContainerDb", 28],
	["ContainerQueue", 29],
	["Container_Ext", 30],
	["ContainerDb_Ext", 31],
	["ContainerQueue_Ext", 32],
	["Component", 33],
	["ComponentDb", 34],
	["ComponentQueue", 35],
	["Component_Ext", 36],
	["ComponentDb_Ext", 37],
	["ComponentQueue_Ext", 38],
	["Enterprise_Boundary", 39],
	["System_Boundary", 40],
	["Boundary", 41],
	["Container_Boundary", 42],
	["Deployment_Node", 43],
	["Node", 43],
	["Node_L", 44],
	["Node_R", 45],
	["Rel", 46],
	["BiRel", 47],
	["Rel_Up", 48],
	["Rel_U", 48],
	["Rel_Down", 49],
	["Rel_D", 49],
	["Rel_Left", 50],
	["Rel_L", 50],
	["Rel_Right", 51],
	["Rel_R", 51],
	["Rel_Back", 52],
	["RelIndex", 53],
	["UpdateElementStyle", 54],
	["UpdateRelStyle", 55],
	["UpdateLayoutConfig", 56]
]), Qc = [
	/.*direction\s+TB[^\n]*/y,
	/.*direction\s+BT[^\n]*/y,
	/.*direction\s+RL[^\n]*/y,
	/.*direction\s+LR[^\n]*/y
], $c = /[\n\r\u2028\u2029]/g;
function el(e) {
	let t = e.length, n = [], r = [], i = [], a = 0, o = 9, s = 0, c = !1, l = -2, u = -1, d = 0, f = (e, t, a) => {
		n.push(e), r.push(t), i.push(a), s = a;
	}, p = (n) => {
		for (; n < t && G(e.charCodeAt(n));) n++;
		return n;
	}, m = (n, r) => {
		let i = e.indexOf(n, r);
		return i === -1 ? t : i;
	}, h = (n, r) => {
		let i = s + n.length;
		if (!e.startsWith(n, s) || !G(e.charCodeAt(i))) return !1;
		let a = ++i;
		for (; i < t;) {
			let t = e.charCodeAt(i);
			if (t === 35 || t === 10 || t === 59) break;
			i++;
		}
		return i !== a && (f(r, s, i), !0);
	};
	for (;;) {
		if (c) {
			f(0, t, t);
			break;
		}
		s >= t && (c = !0);
		let n = e.charCodeAt(s);
		if (a === 0) {
			if (s >= t) {
				f(64, t, t);
				continue;
			}
			if (l !== -1 && s >= d && (l < s && (l = e.indexOf("direction", s)), l !== -1 && (u < s && ($c.lastIndex = s, u = $c.test(e) ? $c.lastIndex - 1 : t), l < u))) {
				let t = !1;
				for (let n = 0; n < 4 && !t; n++) Qc[n].lastIndex = s, Qc[n].test(e) && (f(2 + n, s, Qc[n].lastIndex), t = !0);
				if (t) continue;
				d = u;
			}
			if (n === 116 && h("title", 6)) continue;
			if (n === 97) {
				if (h("accDescription", 7)) continue;
				let t = e.startsWith("accTitle", s);
				if (t || e.startsWith("accDescr", s)) {
					let n = p(s + 8), r = e.charCodeAt(n);
					if (r === 58) {
						f(t ? 8 : 10, s, p(n + 1)), o = t ? 9 : 11, a = 7;
						continue;
					}
					if (r === 123 && !t) {
						s = p(n + 1), a = 8;
						continue;
					}
				}
			}
			if (n === 37 && e.charCodeAt(s + 1) === 37) {
				let n = m("\n", s + 2);
				for (; n < t && (e.charCodeAt(n) === 10 || e.charCodeAt(n) === 13);) n++;
				s = n;
				continue;
			}
			if (G(n)) {
				let n = s, r = -1;
				for (; n < t;) {
					let t = e.charCodeAt(n);
					if (!G(t)) break;
					t === 10 && (r = n), n++;
				}
				r === -1 ? s = n : f(13, s, r + 1);
				continue;
			}
			if (n === 123) {
				f(62, s, s + 1);
				continue;
			}
			if (n === 125) {
				f(63, s, s + 1);
				continue;
			}
			if (J(n)) {
				let n = s + 1;
				for (; n < t && J(e.charCodeAt(n));) n++;
				let r = n - s <= 19 ? Zc.get(e.slice(s, n)) : void 0;
				if (r !== void 0) {
					r > 18 && (a = 1), f(r, s, n);
					continue;
				}
			}
			f(1, s, s);
			break;
		}
		if (a === 1) {
			if (s >= t) f(57, t, t);
			else if (n === 40) {
				let t = s + 1;
				for (; e.charCodeAt(t) === 32;) t++;
				e.charCodeAt(t) === 44 ? f(58, s, t + 1) : s++, a = 2;
			} else if (n === 41) s++, a = 0;
			else {
				f(1, s, s);
				break;
			}
		} else if (a === 2) {
			if (s >= t) continue;
			if (n === 41) s++, a = 0;
			else if (n === 44) e.charCodeAt(s + 1) === 44 ? f(58, s, s + 2) : s++;
			else {
				let t = s;
				for (; e.charCodeAt(t) === 32;) t++;
				let n = e.charCodeAt(t);
				n === 34 ? e.charCodeAt(t + 1) === 34 ? f(58, s, t + 2) : (s = t + 1, a = 3) : n === 36 ? (s = t + 1, a = 4) : f(59, s, m(",", s));
			}
		} else if (a === 3) n === 34 ? (s++, a = 2) : f(59, s, m("\"", s));
		else if (a === 4) f(60, s, m("=", s)), a = 5;
		else if (a === 5) {
			if (s >= t) continue;
			let r = s + 1;
			if (n === 61) for (; e.charCodeAt(r) === 32;) r++;
			if (n !== 61 || e.charCodeAt(r) !== 34) {
				f(1, s, s);
				break;
			}
			s = r + 1, a = 6;
		} else if (a === 6) {
			if (s >= t) continue;
			n === 34 ? (s++, a = 2) : f(61, s, m("\"", s));
		} else a === 7 ? (f(o, s, m("\n", s)), a = 0) : n === 125 ? (s++, a = 0) : f(12, s, m("}", s));
	}
	return {
		types: n,
		starts: r,
		ends: i
	};
}
var tl = [
	"person",
	"external_person",
	"system",
	"system_db",
	"system_queue",
	"external_system",
	"external_system_db",
	"external_system_queue",
	"container",
	"container_db",
	"container_queue",
	"external_container",
	"external_container_db",
	"external_container_queue",
	"component",
	"component_db",
	"component_queue",
	"external_component",
	"external_component_db",
	"external_component_queue"
], nl = [
	"rel",
	"birel",
	"rel_u",
	"rel_d",
	"rel_l",
	"rel_r",
	"rel_b",
	"rel"
], rl = [
	"node",
	"nodeL",
	"nodeR"
], il = "'direction_tb', 'direction_bt', 'direction_rl', 'direction_lr', 'C4_CONTEXT', 'C4_CONTAINER', 'C4_COMPONENT', 'C4_DYNAMIC', 'C4_DEPLOYMENT'", al = "'STR', 'STR_KEY', 'ATTRIBUTE', 'ATTRIBUTE_EMPTY'";
function ol(e) {
	return e === 6 || e === 7 || e === 8 || e === 10 || e === 12;
}
function sl(e) {
	return e >= 19 && e <= 56;
}
function cl(e, t) {
	let { types: n, starts: r, ends: a } = el(e), o = 0, s = (t) => e.slice(r[t], a[t]), c = (t) => {
		let a = n[o];
		throw a === 1 ? i("c4", e, r[o], "", !0) : i("c4", e, r[o], `Expecting ${t}, got '${Xc[a]}'`);
	}, l = (e) => {
		n[o] !== e && c(`'${Xc[e]}'`), o++;
	}, u = () => {
		let e = [];
		for (;;) {
			let t = n[o];
			if (t === 59) e.push(s(o++).trim());
			else if (t === 58) e.push(""), o++;
			else if (t === 60) o++, n[o] !== 61 && c("'STR_VALUE'"), e.push({
				key: s(o - 1).trim(),
				value: s(o).trim()
			}), o++;
			else break;
		}
		return e.length === 0 && c(al), e;
	}, d = (e) => {
		e === 6 ? t.setTitle(s(o++).substring(6)) : e === 7 ? t.setAccDescription(s(o++).substring(15)) : e === 12 ? t.setAccDescription(s(o++).trim()) : (o++, e === 8 ? (n[o] !== 9 && c("'acc_title_value'"), t.setTitle(s(o++).trim())) : (n[o] !== 11 && c("'acc_descr_value'"), t.setAccDescription(s(o++).trim())));
	}, f = (e) => {
		o++;
		let r = u();
		if (e <= 26) t.addPersonOrSystem(tl[e - 19], r);
		else if (e <= 32) t.addContainer(tl[e - 19], r);
		else if (e <= 38) t.addComponent(tl[e - 19], r);
		else {
			if (e <= 45) return e === 39 ? r.splice(2, 0, "ENTERPRISE") : e === 40 ? r.splice(2, 0, "SYSTEM") : e === 42 && r.splice(2, 0, "CONTAINER"), e >= 43 ? t.addDeploymentNode(rl[e - 43], r) : e === 42 ? t.addContainerBoundary(r) : t.addPersonOrSystemBoundary(r), n[o] === 62 ? (o++, l(13)) : n[o] === 13 ? (o++, l(62), n[o] === 13 && o++) : c("'NEWLINE', 'LBRACE'"), !0;
			e <= 53 ? (e === 53 && r.splice(0, 1), t.addRel(nl[e - 46], r)) : e === 54 ? t.updateElStyle("update_el_style", r) : e === 55 ? t.updateRelStyle("update_rel_style", r) : t.updateLayoutConfig("update_layout_config", r);
		}
		return !1;
	}, p = n[o];
	(p < 14 || p > 18) && c(il), o++, l(13);
	let m = 0, h = 0;
	for (;;) {
		let e = n[o];
		if (h === 3 || h === 4) {
			if (e === 13) {
				o++, h = 2;
				continue;
			}
			if (h === 3 && sl(e)) {
				h = 1;
				continue;
			}
		} else if (sl(e)) {
			f(e) ? (m++, h = 1) : h = 4;
			continue;
		} else if (ol(e) && h !== 1) {
			d(e), h = 3;
			continue;
		} else h !== 2 && c("'title', 'accDescription', 'acc_title', 'acc_descr', 'acc_descr_multiline_value', 'PERSON', 'REL'");
		if (m > 0) e !== 63 && c("'NEWLINE', 'RBRACE'"), o++, t.popBoundaryParseStack(), m--, h = 4;
		else {
			e !== 64 && c("'NEWLINE', 'EOF'"), o++, l(0), t.setC4Type(s(0));
			return;
		}
	}
}
var ll = /\s/;
function ul(e, t, n, r, i = 0) {
	let a = [];
	for (let o of e.split("\n")) {
		let e = Array.from(o);
		e.length === 0 && a.push("");
		let s = 0;
		for (; s < e.length;) {
			let o = (a) => t.width(e.slice(s, s + a).join(""), n, i) <= r, c = 1;
			for (; c < e.length - s && o(c);) c = Math.min(e.length - s, c * 2);
			let l = 1;
			for (; l < c;) {
				let e = Math.ceil((l + c) / 2);
				o(e) ? l = e : c = e - 1;
			}
			let u = l, d = s + u < e.length;
			if (d && !ll.test(e[s + u])) {
				for (let t = u - 1; t > 0; t--) if (ll.test(e[s + t])) {
					u = t + 1;
					break;
				}
			}
			let f = e.slice(s, s + u).join("");
			for (a.push(d && f.trimEnd() || f), s += u; d && s < e.length && ll.test(e[s]);) s++;
		}
	}
	e === "" && (a.length = 0);
	let o = a.map((e) => t.width(e, n, i)), s = 0;
	for (let e of o) s = Math.max(s, e);
	let c = Math.round(n * 1.5);
	return {
		lines: a.map((e, t) => [{
			text: e,
			style: i,
			width: o[t]
		}]),
		widths: o,
		width: s,
		height: a.length * c,
		size: n,
		lineHeight: c
	};
}
function dl(e, t, n) {
	if (e.width <= n) return e;
	let r = [], i = [];
	for (let a = 0; a < e.lines.length; a++) {
		if (e.widths[a] <= n) {
			r.push(e.lines[a]), i.push(e.widths[a]);
			continue;
		}
		let o = [], s = 0, c = () => {
			r.push(o), i.push(s), o = [], s = 0;
		};
		for (let r of e.lines[a]) if (r.icon !== void 0 || r.math) o.length && s + r.width > n && c(), o.push(r), s += r.width;
		else for (let i of Array.from(r.text)) {
			let a = o[o.length - 1], l = a && a.icon === void 0 && a.math === void 0 && a.style === r.style, u = t.width(l ? a.text + i : i, e.size, r.style) - (l ? a.width : 0);
			o.length && s + u > n && (c(), a = void 0, u = t.width(i, e.size, r.style)), a && a.icon === void 0 && a.math === void 0 && a.style === r.style ? (a.text += i, a.width += u) : o.push({
				text: i,
				style: r.style,
				width: u
			}), s += u;
		}
		(o.length || !e.lines[a].length) && c();
	}
	let a = 0;
	for (let e of i) a = Math.max(a, e);
	let o = {
		...e,
		lines: r,
		widths: i,
		width: a,
		height: r.length * e.lineHeight
	};
	return e.heights ? Za(o) : o;
}
function fl(e, t, n, r) {
	let i = vt(e), a = "<text" + yt(r, i), o = "";
	for (let s = 0; s < e.lines.length; s++) {
		let c = e.lines[s], l = n + (s + .5) * e.lineHeight;
		if (c.some((e) => e.icon !== void 0)) {
			let n = e.widths[s];
			o += Z({
				...e,
				lines: [c],
				widths: [n],
				width: n,
				height: e.lineHeight
			}, t + n / 2, l, r);
			continue;
		}
		let u = "";
		for (let e of c) {
			let t = _t(e.style & ~i);
			u += t ? `<tspan${t}>${nt(e.text)}</tspan>` : nt(e.text);
		}
		u !== "" && (o += `${a} x="${X(t)}" y="${X(l + e.size * .35)}" text-anchor="start" xml:space="preserve">${u}</text>`);
	}
	return o;
}
var pl = 28, ml = 20, hl = 7, gl = 8, _l = 30, vl = 88, yl = 160, bl = 8, xl = 26, Sl = (e) => Math.min(12, Math.max(6, e / 14)), Cl = (e) => Math.min(12, e / 4);
function wl(e, t, n, r, i, a, o, s) {
	let c = 0, l = 1;
	if (o === 0) {
		if (i < e || i > n) return 1 / 0;
	} else {
		let t = (e - i) / o, r = (n - i) / o;
		c = Math.max(c, Math.min(t, r)), l = Math.min(l, Math.max(t, r));
	}
	if (s === 0) {
		if (a < t || a > r) return 1 / 0;
	} else {
		let e = (t - a) / s, n = (r - a) / s;
		c = Math.max(c, Math.min(e, n)), l = Math.min(l, Math.max(e, n));
	}
	return c <= l ? c : 1 / 0;
}
function Tl(e, t, n, r, i, a, o, s) {
	let c = o / n, l = s / r, u = (i - e) / n, d = (a - t) / r, f = c * c + l * l, p = 2 * (c * u + l * d), m = u * u + d * d - 1, h = p * p - 4 * f * m;
	if (f === 0 || h < 0) return 1 / 0;
	let g = (-p - Math.sqrt(h)) / (2 * f);
	return g >= 0 && g <= 1 ? g : m <= 0 ? 0 : 1 / 0;
}
function El(e, t, n, r, i) {
	let { x: a, y: o, w: s, h: c } = e, l = r - t, u = i - n;
	if (e.form === "person") return Math.min(wl(a, o + xl, a + s, o + c, t, n, l, u), Tl(a + s / 2, o + 14, 13, 13, t, n, l, u));
	if (e.form === "cyl") {
		let e = Sl(s);
		return Math.min(wl(a, o + e, a + s, o + c - e, t, n, l, u), Tl(a + s / 2, o + e, s / 2, e, t, n, l, u), Tl(a + s / 2, o + c - e, s / 2, e, t, n, l, u));
	}
	if (e.form === "h-cyl") {
		let e = Cl(c);
		return Math.min(wl(a + e, o, a + s - e, o + c, t, n, l, u), Tl(a + e, o + c / 2, e, c / 2, t, n, l, u), Tl(a + s - e, o + c / 2, e, c / 2, t, n, l, u));
	}
	return wl(a, o, a + s, o + c, t, n, l, u);
}
function Dl(e, t, n, r, i) {
	for (let a = 2; a < e.length; a += 2) {
		let o = e[a - 2], s = e[a - 1];
		if (wl(t, n, r, i, o, s, e[a] - o, e[a + 1] - s) <= 1) return !0;
	}
	return !1;
}
function Ol(e, t) {
	return e.x <= t.x && e.y <= t.y && e.x + e.w >= t.x + t.w && e.y + e.h >= t.y + t.h;
}
function kl(e, t, n) {
	let r = e.x + e.w / 2, i = e.y + e.h / 2, a = t.x + t.w / 2, o = t.y + t.h / 2, s = Ol(e, t);
	if (s || Ol(t, e)) {
		let n = s ? e : t, r = s ? t : e, i = r.x + r.w / 2, a = r.y + r.h / 2, o = r.x - n.x, c = n.x + n.w - r.x - r.w, l = r.y - n.y, u = n.y + n.h - r.y - r.h, d = Math.min(o, c, l, u), f = d === o ? n.x : d === c ? n.x + n.w : i, p = d === o || d === c ? a : d === u ? n.y + n.h : n.y, m = Math.min(El(r, f, p, i, a), 1), h = f + (i - f) * m, g = p + (a - p) * m;
		return s ? [
			f,
			p,
			h,
			g
		] : [
			h,
			g,
			f,
			p
		];
	}
	let c = r, l = i, u = a, d = o, f = Math.max(e.x, t.x), p = Math.min(e.x + e.w, t.x + t.w), m = Math.max(e.y, t.y), h = Math.min(e.y + e.h, t.y + t.h);
	f < p ? c = u = (f + p) / 2 : m < h && (l = d = (m + h) / 2);
	let g = Math.hypot(u - c, d - l) || 1, _ = -(d - l) / g * n, v = (u - c) / g * n, y = El(e, u + _, d + v, c + _, l + v), b = El(t, c + _, l + v, u + _, d + v);
	return y <= 1 && b <= 1 ? (c += _, l += v, u += _, d += v) : (c = r, l = i, u = a, d = o, y = Math.min(El(e, u, d, c, l), 1), b = Math.min(El(t, c, l, u, d), 1)), [
		u + (c - u) * y,
		d + (l - d) * y,
		c + (u - c) * b,
		l + (d - l) * b
	];
}
var Al = 6, jl = 3, Ml = 12, Nl = class {
	upright = [];
	level = [];
	frames = [[], []];
	taken = /* @__PURE__ */ new Map();
	squeezed = 0;
	free(e, t, n, r) {
		let i = Math.min(n, r), a = Math.max(n, r), o = (e, n) => {
			for (let r = 0; r < e.length; r += 3) if (Math.abs(e[r] - t) < n && e[r + 1] < a && e[r + 2] > i) return !0;
			return !1;
		};
		return !o(e ? this.upright : this.level, Al) && !o(this.frames[+!e], jl);
	}
	crossings(e) {
		let t = 0;
		for (let n = 2; n < e.length; n += 2) {
			let r = e[n] === e[n - 2], i = r ? e[n] : e[n + 1], a = Math.min(r ? e[n - 1] : e[n - 2], r ? e[n + 1] : e[n]), o = Math.max(r ? e[n - 1] : e[n - 2], r ? e[n + 1] : e[n]), s = r ? this.level : this.upright;
			for (let e = 0; e < s.length; e += 3) s[e] > a && s[e] < o && s[e + 1] < i && s[e + 2] > i && t++;
		}
		return t;
	}
	frame(e) {
		this.frames[0].push(e.x, e.y, e.y + e.h, e.x + e.w, e.y, e.y + e.h), this.frames[1].push(e.y, e.x, e.x + e.w, e.y + e.h, e.x, e.x + e.w);
	}
	take(e) {
		for (let t = 2; t < e.length; t += 2) e[t] === e[t - 2] ? this.upright.push(e[t], Math.min(e[t - 1], e[t + 1]), Math.max(e[t - 1], e[t + 1])) : e[t + 1] === e[t - 1] && this.level.push(e[t + 1], Math.min(e[t - 2], e[t]), Math.max(e[t - 2], e[t]));
	}
	ports(e, t, n, r, i) {
		let a = this.taken.get(e) ?? [], o = [];
		for (let e = 0; e < 9 && o.length < 4; e++) {
			let s = n + (e & 1 ? 1 : -1) * Math.ceil(e / 2) * Ml;
			if (s < r || s > i) continue;
			let c = !0;
			for (let e = 0; e < a.length; e += 2) a[e] === t && Math.abs(a[e + 1] - s) < Ml && (c = !1);
			c && o.push(s);
		}
		return o.length ? o : [n];
	}
	claim(e, t, n) {
		let r = this.taken.get(e);
		r ? r.push(t, n) : this.taken.set(e, [t, n]);
	}
};
function Pl(e, t, n) {
	let r = e.length, i = Math.sign(e[2] - e[0]), a = Math.sign(e[3] - e[1]), o = `M${X(e[0] + i * t)},${X(e[1] + a * t)}`;
	for (let t = 2; t < r - 2; t += 2) {
		let n = e[t], r = e[t + 1], i = Math.sign(n - e[t - 2]), a = Math.sign(r - e[t - 1]), s = Math.sign(e[t + 2] - n), c = Math.sign(e[t + 3] - r), l = Math.min(gl, Math.abs(n - e[t - 2] + r - e[t - 1]) / 2, Math.abs(e[t + 2] - n + e[t + 3] - r) / 2);
		o += `${i ? "H" + X(n - i * l) : "V" + X(r - a * l)}Q${X(n)},${X(r)} ${X(n + s * l)},${X(r + c * l)}`;
	}
	let s = Math.sign(e[r - 2] - e[r - 4]), c = Math.sign(e[r - 1] - e[r - 3]);
	return o + (s ? "H" + X(e[r - 2] - s * n) : "V" + X(e[r - 1] - c * n));
}
function Fl(e, t, n, r) {
	for (let i of t) if (i !== n && i !== r && Dl(e, i.x, i.y, i.x + i.w, i.y + i.h)) return !1;
	return !0;
}
function Il(e, t, n, r, i) {
	let a = e.length;
	return {
		d: Pl(e, n, r),
		sx: e[0],
		sy: e[1],
		sdx: -Math.sign(e[2] - e[0]),
		sdy: -Math.sign(e[3] - e[1]),
		ex: e[a - 2],
		ey: e[a - 1],
		edx: Math.sign(e[a - 2] - e[a - 4]),
		edy: Math.sign(e[a - 1] - e[a - 3]),
		x0: e[t],
		y0: e[t + 1],
		x1: e[t + 2],
		y1: e[t + 3],
		nx: 0,
		ny: 0,
		lean: 0,
		room: yl,
		...i,
		points: e
	};
}
function Ll(e, t) {
	let n = [], r = (e + t) / 2, i = Math.max(hl, (t - e) / 4);
	for (let a = 0; a < 9; a++) {
		let o = r + (a & 1 ? 1 : -1) * Math.ceil(a / 2) * i;
		o >= e + Al && o <= t - Al && n.push(o);
	}
	return n;
}
function Rl(e, t, n, r, i, a) {
	let o = e.x + e.w / 2, s = e.y + e.h / 2, c = t.x + t.w / 2, l = t.y + t.h / 2, u, d = (i, a, o) => {
		if (!Fl(i, n, e, t)) return;
		for (let e = 2; e < i.length; e += 2) {
			let t = i[e] === i[e - 2];
			if (!r.free(t, t ? i[e] : i[e + 1], t ? i[e - 1] : i[e - 2], t ? i[e + 1] : i[e])) return;
		}
		let s = r.crossings(i) * 1e6;
		for (let e = 2; e < i.length; e += 2) s += Math.abs(i[e] - i[e - 2]) + Math.abs(i[e + 1] - i[e - 1]);
		(!u || s < u.cost) && (u = {
			points: i,
			cost: s,
			upright: a,
			sides: o
		});
	};
	if (e.x + e.w <= t.x || t.x + t.w <= e.x) {
		let n = c > o, i = Math.sign(l - s), a = n ? [1, 0] : [0, 1], f = Ll(n ? e.x + e.w : t.x + t.w, n ? t.x : e.x);
		e: for (let n of r.ports(e, a[0], s + i * e.h / 4, e.y + 8, e.y + e.h - 8)) for (let s of r.ports(t, a[1], l - i * t.h / 4, t.y + 8, t.y + t.h - 8)) for (let r of f) {
			let i = r + (o - r) * Math.min(El(e, r, n, o, n), 1), l = r + (c - r) * Math.min(El(t, r, s, c, s), 1), f = u;
			if (d([
				i,
				n,
				r,
				n,
				r,
				s,
				l,
				s
			], !0, a), u !== f) break e;
		}
	}
	if (e.y + e.h <= t.y || t.y + t.h <= e.y) {
		let n = l > s, i = Math.sign(c - o), a = n ? [3, 2] : [2, 3], f = Ll(n ? e.y + e.h : t.y + t.h, n ? t.y : e.y);
		e: for (let n of r.ports(e, a[0], o + i * e.w / 4, e.x + 8, e.x + e.w - 8)) for (let o of r.ports(t, a[1], c - i * t.w / 4, t.x + 8, t.x + t.w - 8)) for (let r of f) {
			let i = r + (s - r) * Math.min(El(e, n, r, n, s), 1), c = r + (l - r) * Math.min(El(t, o, r, o, l), 1), f = u;
			if (d([
				n,
				i,
				n,
				r,
				o,
				r,
				o,
				c
			], !1, a), u !== f) break e;
		}
	}
	if (!u) return;
	let { points: f, upright: p, sides: m } = u;
	return r.take(f), r.claim(e, m[0], p ? f[1] : f[0]), r.claim(t, m[1], p ? f[7] : f[6]), Il(f, 2, i, a, { room: p ? vl : yl });
}
function zl(e, t, n, r, i, a, o) {
	if (e === t) {
		let t = Math.min(e.h / 2 - 4, 10), n = Math.hypot(pl, t), r = e.x + e.w, i = e.y + e.h / 2, s = pl / n, c = t / n;
		return {
			d: `M${X(r + s * a)},${X(i - t - c * a)}C${X(r + pl)},${X(i - t * 2)} ${X(r + pl)},${X(i + t * 2)} ${X(r + s * o)},${X(i + t + c * o)}`,
			sx: r,
			sy: i - t,
			sdx: -s,
			sdy: c,
			ex: r,
			ey: i + t,
			edx: -s,
			edy: -c,
			x0: r + pl + 4,
			y0: i,
			x1: r + pl + 4,
			y1: i,
			nx: 1,
			ny: 0,
			lean: 0,
			room: 64,
			points: []
		};
	}
	let [s, c, l, u] = kl(e, t, n), d = s === l, f = !1;
	if (r && !Ol(e, t) && !Ol(t, e)) for (let n of r) n !== e && n !== t && wl(n.x, n.y, n.x + n.w, n.y + n.h, s, c, l - s, u - c) <= 1 && (f = !0);
	if (r && f && !d && c !== u) {
		let n = Rl(e, t, r, i, a, o);
		if (n) return n;
		i.squeezed++;
	}
	if (r && f && (d || c === u)) {
		let n = (n) => {
			let i = n ? -1 / 0 : 1 / 0, a = (e) => {
				let t = d ? e.x : e.y;
				i = n ? Math.max(i, t + (d ? e.w : e.h)) : Math.min(i, t);
			};
			a(e), a(t);
			for (let n of r) n !== e && n !== t && wl(n.x, n.y, n.x + n.w, n.y + n.h, s, c, l - s, u - c) <= 1 && a(n);
			return i;
		}, f = d ? Math.min(e.y, t.y) : Math.min(e.x, t.x), p = d ? Math.max(e.y + e.h, t.y + t.h) : Math.max(e.x + e.w, t.x + t.w), m = (n, i) => {
			for (let a of r) {
				if (a === e || a === t) continue;
				let r = d ? a.y < p && a.y + a.h > f : a.x < p && a.x + a.w > f, o = d ? a.x : a.y, s = o + (d ? a.w : a.h);
				if (r && (n ? s > i : o < i)) return !1;
			}
			return !0;
		}, h = e.x + e.w / 2, g = e.y + e.h / 2, _ = t.x + t.w / 2, v = t.y + t.h / 2, y = Math.sign(d ? v - g : _ - h), b = (a) => {
			let o = n(a), s = a ? 1 : -1, c = d ? +!!a : a ? 3 : 2, l = d ? i.ports(e, c, g + y * e.h / 4, e.y + 8, e.y + e.h - 8)[0] : i.ports(e, c, h + y * e.w / 4, e.x + 8, e.x + e.w - 8)[0], u = d ? i.ports(t, c, v - y * t.h / 4, t.y + 8, t.y + t.h - 8)[0] : i.ports(t, c, _ - y * t.w / 4, t.x + 8, t.x + t.w - 8)[0], f = (n) => {
				if (d) {
					let r = n + (h - n) * Math.min(El(e, n, l, h, l), 1), i = n + (_ - n) * Math.min(El(t, n, u, _, u), 1);
					return [
						r,
						l,
						n,
						l,
						n,
						u,
						i,
						u
					];
				}
				let r = n + (g - n) * Math.min(El(e, l, n, l, g), 1), i = n + (v - n) * Math.min(El(t, u, n, u, v), 1);
				return [
					l,
					r,
					l,
					n,
					u,
					n,
					u,
					i
				];
			}, p = f(o + s * ml);
			for (let n = 0; n <= 4; n++) {
				let a = o + s * (ml + n * hl), m = f(a);
				if (Fl(m, r, e, t) && (p = m, i.free(d, a, l, u))) return {
					points: p,
					side: c,
					p0: l,
					p1: u,
					step: n
				};
			}
			return {
				points: p,
				side: c,
				p0: l,
				p1: u,
				step: 5
			};
		}, x = d ? u > c : l < s, S = m(x, n(x)), C = m(!x, n(!x)), w = b(x), T = S === C ? b(!x) : void 0, E = (e) => i.crossings(e.points) * 8 + e.step, D = C && !S || T && E(T) < E(w) ? !x : x, { points: O, side: k, p0: A, p1: j, step: M } = D === x ? w : T ?? b(!x), N = D ? 1 : -1;
		return M > 4 && i.squeezed++, i.take(O), i.claim(e, k, A), i.claim(t, k, j), Il(O, 2, a, o, d ? {
			nx: N,
			lean: _l,
			room: vl
		} : { room: yl });
	}
	let p = Math.hypot(l - s, u - c) || 1, m = (l - s) / p, h = (u - c) / p;
	return (d || c === u) && i.take([
		s,
		c,
		l,
		u
	]), {
		d: `M${X(s + m * a)},${X(c + h * a)}L${X(l - m * o)},${X(u - h * o)}`,
		sx: s,
		sy: c,
		sdx: -m,
		sdy: -h,
		ex: l,
		ey: u,
		edx: m,
		edy: h,
		x0: s,
		y0: c,
		x1: l,
		y1: u,
		nx: n ? -h : 0,
		ny: n ? m : 0,
		lean: 0,
		room: Math.abs(m) > Math.abs(h) ? vl : yl,
		points: [
			s,
			c,
			l,
			u
		]
	};
}
var Bl = 216, Vl = 64, Hl = 14, Ul = 12, Wl = vl + bl + 3 * fi, Gl = 88, Kl = ml + 8, ql = 48, Jl = 16, Yl = 10, Xl = /* @__PURE__ */ new Map([
	["person", "person"],
	["box", "rect"],
	["rounded", "rect"],
	["component", "rect"],
	["cylinder", "cyl"],
	["database", "cyl"],
	["db", "cyl"],
	["queue", "h-cyl"],
	["pipe", "h-cyl"]
]);
function Zl(e) {
	let t = Xl.get((e.shape ?? "").toLowerCase()) ?? Xl.get((e.sprite ?? "").toLowerCase());
	if (t) return t;
	if (e.tags) for (let t of e.tags.split(",")) {
		let e = Xl.get(t.trim().toLowerCase());
		if (e) return e;
	}
	let n = e.kind;
	return n.endsWith("person") ? "person" : n.endsWith("_db") ? "cyl" : n.endsWith("_queue") ? "h-cyl" : "rect";
}
function Ql(e, t, n, r, i = Bl) {
	let a = Zl(e), o = a === "h-cyl" ? 36 : 0, s = a === "person" ? xl : a === "cyl" ? 24 : 0, c = i - 2 * Hl - o, l = [
		Q("«" + e.kind.replace(/_/g, " ") + "»", !1, t, r - 1, c),
		Q(e.label, !1, t, n, c, 1),
		Q(e.techn ? `[${e.techn}]` : void 0, !1, t, r, c),
		Q(e.descr, !1, t, r, c)
	], u = 0, d = l[3].height > 0 ? 4 : 0;
	for (let e of l) u = Math.max(u, e.width), d += e.height;
	return {
		shape: e,
		form: a,
		labels: l,
		textH: d,
		x: 0,
		y: 0,
		w: Math.max(i, u + 2 * Hl + o),
		h: Math.max(Vl, d + 2 * Ul + s)
	};
}
function $l(e, t, n, r, i) {
	let a = 0, o = 0;
	for (let s = 0; s < e.length; s += t) {
		let c = Math.min(e.length, s + t), l = 0, u = 0;
		for (let t = s; t < c; t++) u = Math.max(u, e[t].h);
		for (let t = s; t < c; t++) {
			let r = e[t];
			r.x = l, r.y = o, i && (r.h = u), l += r.w + n;
		}
		a = Math.max(a, l - n), o += u + r;
	}
	return [a, e.length > 0 ? o - r : 0];
}
function eu(e, t, n, r, i, a) {
	let o = i === void 0 ? Kl : 12, s = /* @__PURE__ */ new Map();
	for (let a of e.boundaries) {
		let e = i === void 0 ? 4e3 : Math.max(80, i - 2 * Jl - 2 * Kl * 2), c = a.parent ? [
			Q(a.label, !1, t, n, e, 1),
			Q(a.type ? `[${a.type}]` : void 0, !1, t, r, e),
			Q(a.descr, !1, t, r, e)
		] : [], l = 0, u = 0;
		for (let e of c) l += e.height, u = Math.max(u, e.width);
		s.set(a, {
			boundary: a,
			kids: [],
			nodes: [],
			labels: c,
			head: l > 0 ? l + Yl + 6 + ml : o,
			headW: u,
			headX: Jl,
			x: 0,
			y: 0,
			w: 0,
			h: 0,
			form: "rect"
		});
	}
	let c = s.get(e.boundaries[0]);
	for (let e of s.values()) {
		let t = e.boundary.parent;
		t && s.get(t)?.kids.push(e);
	}
	let l = [c], u = /* @__PURE__ */ new Map([[c.boundary, 0]]);
	for (let e = 0; e < l.length; e++) for (let t of l[e].kids) u.set(t.boundary, u.get(l[e].boundary) + 1), l.push(t);
	for (let a of e.shapes) if (a.parent) {
		let e = u.get(a.parent) ?? 0, c = i === void 0 ? Bl : Math.max(100, Math.min(Bl, i - 2 * e * o - 32));
		s.get(a.parent)?.nodes.push(Ql(a, t, n, r, c));
	}
	let d = Math.max(1, e.shapeInRow), f = Math.max(1, e.boundaryInRow), p = /* @__PURE__ */ new Map();
	for (let e = l.length - 1; e >= 0; e--) {
		let t = l[e], n = i === void 0 ? Wl : a, r = (e, t, n) => {
			if (i === void 0) return t;
			let r = 1;
			for (let t of e) r = Math.max(r, t.w);
			return Math.max(1, Math.min(t, Math.floor((i + n - 2 * o) / (r + n))));
		}, [s, u] = $l(t.nodes, r(t.nodes, d, n), n, Gl, !0), [m, h] = $l(t.kids, r(t.kids, f, ql), ql, ql, !1), g = u > 0 && h > 0 ? ql : 0, _ = t === c ? 0 : o;
		p.set(t, u + g), t.w = Math.max(s, m, t.headW + 2 * Jl - 2 * _) + 2 * _, t.h = (_ && t.head) + u + g + h + _;
	}
	let m = /* @__PURE__ */ new Map();
	for (let e of l) {
		let t = e.x + (e === c ? 0 : o), n = e.y + (e === c ? 0 : e.head);
		for (let r of e.nodes) r.x += t, r.y += n, m.set(r.shape, r);
		for (let r of e.kids) r.x += t, r.y += n + p.get(e);
		e !== c && m.set(e.boundary, e);
	}
	return {
		order: l,
		boxes: m
	};
}
var tu = 7, nu = 36, ru = 24, iu = 2e3, au = 8, ou = [
	.5,
	.4,
	.6,
	.3,
	.7,
	.2,
	.8
], su = 2e6;
function cu(e, t, n) {
	let r = [];
	return e && r.push("fill:" + e), t && r.push("stroke:" + t), n && r.push("color:" + n), Ii(r);
}
function lu(e, t, n, r, i) {
	return t ? zt(e, Ot(t.includes("¶ß") ? t.replace(/\ufb02\u00b0\u00b0?/g, "#").replace(/\u00b6\u00df/g, ";") : t), n, r, i) : e;
}
function uu(e, t, n) {
	return so(n, (r) => {
		if (!r) return du(e, t, n, !1)[0];
		let [i, a] = du(e, t, n, !0, nu);
		for (let r = nu + ru; a > 0 && r <= nu + 3 * ru; r += ru) {
			let [o, s] = du(e, t, n, !0, r);
			s < a && ([i, a] = [o, s]);
		}
		return i;
	});
}
function du(e, t, r, i, a = nu) {
	let o = r.fontSize ?? 16, s = Math.round(o * .8125), c = r.measurer ?? Be(r.fontFamily, r.fontFamilyMono), l = r.padding ?? 8, u = [], { order: d, boxes: f } = eu(e, c, o, s, i ? Math.max(80, (r.maxWidth ?? 320) - 2 * l) : void 0, a), p = d[0], m = 0, h = 0, g = p.w, _ = p.h, v = (e, t, n, r) => {
		m = Math.min(m, e), h = Math.min(h, t), g = Math.max(g, n), _ = Math.max(_, r);
	}, y = [], b = /* @__PURE__ */ new Map();
	for (let t of e.rels) {
		let r = t.fromAttr ? void 0 : e.getC4Shape(t.from), i = t.toAttr ? void 0 : e.getC4Shape(t.to), a = r && f.get(r), o = i && f.get(i);
		if (!a || !o) throw new n(`C4 rel "${t.from}" -> "${t.to}" references an unknown shape or boundary`, "semantic", { type: "c4" });
		y.push(a, o);
		let s = b.get(a);
		s || b.set(a, s = /* @__PURE__ */ new Set()), s.add(o);
	}
	let x = [], S = [];
	for (let e of d) for (let t of e.nodes) x.push(t), S.push(t.x + au, t.y + au, t.x + t.w - au, t.y + t.h - au);
	let C = e.rels.length * (x.length + d.length + 3 * e.rels.length) <= su, w = (e, t, n, r) => {
		let i = 0;
		for (let a = 0; a < S.length; a += 4) {
			let o = Math.min(n, S[a + 2]) - Math.max(e, S[a]);
			if (o <= 0) continue;
			let s = Math.min(r, S[a + 3]) - Math.max(t, S[a + 1]);
			s > 0 && (i += o * s);
		}
		return i;
	}, T = (e) => e ? Math.max(-iu, Math.min(iu, e)) : 0, E = "", D = vi("arrow_point"), O = new Nl();
	for (let e of d) e !== p && O.frame(e);
	let k = e.rels.map((e, t) => {
		let n = y[t * 2], r = y[t * 2 + 1], i = cu(void 0, e.lineColor, void 0), a = i.stroke ? nt(i.stroke) : "var(--_l)", o = e.type === "birel" || e.type === "rel_b", s = e.type !== "rel_b", c = zl(n, r, n !== r && b.get(r)?.has(n) === !0 ? tu : 0, C ? x : void 0, O, o ? D : 0, s ? D : 0);
		return v(Math.min(c.x0, c.x1), Math.min(c.y0, c.y1), Math.max(c.x0, c.x1), Math.max(c.y0, c.y1)), o && C && S.push(c.sx - fi, c.sy - fi, c.sx + fi, c.sy + fi), s && C && S.push(c.ex - fi, c.ey - fi, c.ex + fi, c.ey + fi), E += `<g class="pele-edge" data-id="${Y(e.from + "-" + e.to)}"${i.line}><path d="${c.d}"/>` + (o ? yi("arrow_point", c.sx, c.sy, c.sdx, c.sdy, a) : "") + (s ? yi("arrow_point", c.ex, c.ey, c.edx, c.edy, a) : "") + "</g>", c;
	});
	for (let e of d) {
		if (!C || e.headW === 0) continue;
		let t = e.y + Yl, n = e.y + e.head - ml, r = 1 / 0;
		for (let i of [
			Jl,
			(e.w - e.headW) / 2,
			e.w - Jl - e.headW
		]) {
			let a = 0;
			for (let r of k) Dl(r.points, e.x + i - 4, t, e.x + i + e.headW + 4, n) && a++;
			if (a < r && (r = a, e.headX = i), a === 0) break;
		}
		S.push(e.x + e.headX - 4, t, e.x + e.headX + e.headW + 4, n);
	}
	let A = "";
	e.rels.forEach((t, n) => {
		let a = k[n], o = t.from + "-" + t.to, l = cu(void 0, void 0, t.textColor), d = Q((e.c4Type === "C4Dynamic" ? n + 1 + ": " : "") + t.label, !1, c, s, a.room), f = Q(t.techn ? `[${t.techn}]` : void 0, !1, c, s, a.room, 2), p = Math.max(d.width, f.width) + bl, m = d.height + f.height;
		if (m === 0) return;
		let h = Math.abs(a.nx) * (p / 2) + Math.abs(a.ny) * (m / 2) + 2, g = a.lean ? Math.max(0, Math.min(a.lean, h - 14)) : h, _ = a.nx * g + (i ? 0 : T(t.offsetX)), y = a.ny * g + (i ? 0 : T(t.offsetY)), b = .5;
		if (C) {
			let e = 1 / 0, t = _ !== a.nx * g || y !== a.ny * g;
			for (let n = 0; n < (t ? 2 : 1) && e > 0; n++) {
				let t = n ? a.nx * g : _, r = n ? a.ny * g : y;
				for (let n of ou) {
					let i = a.x0 + (a.x1 - a.x0) * n + t, o = a.y0 + (a.y1 - a.y0) * n + r, s = w(i - p / 2, o - m / 2, i + p / 2, o + m / 2);
					if (s < e && (e = s, b = n, _ = t, y = r), s === 0) break;
				}
			}
		}
		let x = a.x0 + (a.x1 - a.x0) * b + _, E = a.y0 + (a.y1 - a.y0) * b + y - m / 2;
		C && S.push(x - p / 2, E, x + p / 2, E + m), v(x - p / 2, E, x + p / 2, E + m), A += `<g class="pele-edge-label" data-id="${Y(o)}">` + (t.descr ? `<title>${Y(t.descr)}</title>` : "") + `<rect x="${X(x - p / 2)}" y="${X(E)}" width="${X(p)}" height="${X(m)}" rx="3" fill="var(--_bg)"/>` + lu(Z(d, x, E + d.height / 2, l.text) + Z(f, x, E + d.height + f.height / 2, ` class="pele-c4-techn" fill="var(--_m)"${l.text}`), t.link, o, u, r) + "</g>";
	});
	let j = "", M = "";
	for (let e of d) {
		if (e !== p) {
			let t = e.boundary, n = cu(t.bgColor, t.borderColor, t.fontColor), i = e.x + e.headX, a = e.y + Yl, o = fl(e.labels[0], i, a, ` class="pele-cluster-label" font-weight="var(--_hw)"${n.text}`);
			a += e.labels[0].height, o += fl(e.labels[1], i, a, ` class="pele-c4-type" font-size="${s}" fill="var(--_m)"${n.text}`), a += e.labels[1].height, o += fl(e.labels[2], i, a, ` class="pele-c4-descr" font-size="${s}" fill="var(--_m)"${n.text}`), j += `<g class="pele-cluster pele-c4-${t.nodeType ? "node" : "boundary"}" data-id="${Y(t.alias)}"><rect x="${X(e.x)}" y="${X(e.y)}" width="${X(e.w)}" height="${X(e.h)}" fill="none" stroke="var(--_b)"${t.nodeType ? "" : " stroke-dasharray=\"6 4\""}${Ei(n.shape)}/>` + lu(o, t.link, t.alias, u, r) + "</g>";
		}
		for (let t of e.nodes) {
			let e = t.shape, n = e.kind.startsWith("external"), i = cu(e.bgColor, e.borderColor, e.fontColor), a = " stroke=\"var(--_b)\"" + (n ? " stroke-dasharray=\"4 3\"" : ""), { w: o, h: c, form: l, labels: d } = t, f = l === "h-cyl" ? -Cl(c) / 2 : 0, p = l === "person" ? xl / 2 : l === "cyl" ? Sl(o) / 2 : 0, m = ` fill="var(--_m)"${i.text}`, h = p - t.textH / 2, g = Z(d[0], f, h + d[0].height / 2, ` class="pele-c4-type" font-size="${s - 1}"${m}`);
			h += d[0].height, g += Z(d[1], f, h + d[1].height / 2, ` class="pele-label" font-weight="var(--_hw)"${i.text}`), h += d[1].height, g += Z(d[2], f, h + d[2].height / 2, ` class="pele-c4-techn" font-size="${s}"${m}`), h += d[2].height + 4, g += Z(d[3], f, h + d[3].height / 2, ` class="pele-c4-descr" font-size="${s}"${i.text}`), M += `<g class="pele-node pele-shape-${l} pele-c4-${e.kind}${n ? " pele-c4-external" : ""}" data-id="${Y(e.alias)}" transform="translate(${X(t.x + o / 2)},${X(t.y + c / 2)})">` + lu(fa(l, o, c, ` fill="var(${n ? "--_bg" : "--_s"})"${a}${i.shape}`, a + i.line) + g, e.link, e.alias, u, r) + "</g>";
		}
	}
	let N = Q(e.title, !1, c, o, i ? no(r) : 4e3, 1), P = N.height > 0 ? N.height + 12 : 0, F = Math.max(g - m, N.width), I = Math.ceil(F + 2 * l), L = Math.ceil(_ - h + P + 2 * l), R = l - m + (F - (g - m)) / 2, z = l + P - h;
	return [{
		svg: Ui("c4", I, L, o, r, e, Z(N, I / 2, l + N.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + `<g transform="translate(${X(R)},${X(z)})">` + (j ? `<g class="pele-clusters">${j}</g>` : "") + (E ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round">${E}</g>` : "") + (M ? `<g class="pele-nodes">${M}</g>` : "") + (A ? `<g class="pele-edge-labels" font-size="${s}">${A}</g>` : "") + "</g>"),
		width: I,
		height: L,
		links: u
	}, O.squeezed];
}
var fu = {
	type: "c4",
	parse(e, t, n) {
		let r = new Yc();
		return n && (r.title = n), cl(e, r), r;
	},
	render: uu
};
function pu(e) {
	let t = 0;
	for (let n = e.indexOf("~"); n !== -1; n = e.indexOf("~", n + 1)) t++;
	return t;
}
function mu(e) {
	let t = pu(e);
	if (t <= 1) return e;
	let n = t % 2 != 0 && e.startsWith("~"), r = e.split(""), i = [];
	for (let e = +!!n; e < r.length; e++) r[e] === "~" && i.push(e);
	for (let e = 0, t = i.length - 1; e < t; e++, t--) r[i[e]] = "<", r[i[t]] = ">";
	return r.join("");
}
function hu(e) {
	if (!e.includes("~")) return e;
	let t = e.split(/(,)/), n = [];
	for (let e = 0; e < t.length; e++) {
		let r = t[e];
		r === "," && e > 0 && e + 1 < t.length && pu(t[e - 1]) === 1 && pu(t[e + 1]) === 1 && (r = t[e - 1] + "," + t[e + 1], e++, n.pop()), n.push(mu(r));
	}
	return n.join("");
}
function gu(e) {
	return e === "#" || e === "+" || e === "~" || e === "-";
}
var _u = class {
	id = "";
	memberType;
	visibility = "";
	classifier = "";
	parameters = "";
	returnType = "";
	constructor(e, t) {
		this.memberType = t, t === "method" && this.parseMethod(e) || this.parseAttribute(e), this.id = this.id.startsWith(" ") ? " " + this.id.trim() : this.id.trim();
	}
	parseMethod(e) {
		let t = e.length;
		for (let n = 0; n < t;) {
			let r = n;
			for (; r < t && !ie(e.charCodeAt(r));) r++;
			let i = r - 1;
			for (; i > n && e.charCodeAt(i) !== 41;) i--;
			let a = i - 1;
			for (; a > n && e.charCodeAt(a) !== 40;) a--;
			if (a > n) {
				let r = e[n], o = gu(r) && a > n + 1;
				o && (this.visibility = r), this.id = e.slice(o ? n + 1 : n, a), this.parameters = e.slice(a + 1, i).trim();
				let s = i + 1, c = "";
				if (s < t) {
					let t = e[s];
					(t === "$" || t === "*" || t.trim() === "") && (c = t.trim(), s++);
				}
				let l = s;
				for (; l < t && !ie(e.charCodeAt(l));) l++;
				if (this.returnType = e.slice(s, l).trim(), c === "") {
					let e = this.returnType.slice(-1);
					(e === "$" || e === "*") && (c = e, this.returnType = this.returnType.slice(0, -1));
				}
				return this.classifier = c, !0;
			}
			n = r + 1;
		}
		return this.memberType = "attribute", !1;
	}
	parseAttribute(e) {
		let t = e.slice(0, 1), n = e.slice(-1);
		gu(t) && (this.visibility = t), (n === "$" || n === "*") && (this.classifier = n), this.id = e.substring(this.visibility === "" ? 0 : 1, this.classifier === "" ? e.length : e.length - 1);
	}
	getDisplayDetails() {
		let e = this.visibility + hu(this.id);
		return this.memberType === "method" && (e += `(${hu(this.parameters.trim())})`, this.returnType && (e += " : " + hu(this.returnType))), {
			displayText: e.trim(),
			cssStyle: this.parseClassifier()
		};
	}
	parseClassifier() {
		return this.classifier === "*" ? "font-style:italic;" : this.classifier === "$" ? "text-decoration:underline;" : "";
	}
}, vu = {
	LINE: 0,
	DOTTED_LINE: 1
}, yu = {
	AGGREGATION: 0,
	EXTENSION: 1,
	COMPOSITION: 2,
	DEPENDENCY: 3,
	LOLLIPOP: 4
}, bu = "classId-";
function xu(e) {
	let t = e.indexOf("~");
	if (t <= 0) return {
		className: e,
		type: ""
	};
	let n = e.indexOf("~", t + 1);
	return {
		className: e.slice(0, t),
		type: e.slice(t + 1, n === -1 ? e.length : n)
	};
}
function Su(e) {
	let t = e.charCodeAt(0);
	return xu(t >= 48 && t <= 57 ? bu + e : e).className;
}
var Cu = class {
	type = "class";
	lineType = vu;
	relationType = yu;
	direction = "TB";
	classes = /* @__PURE__ */ new Map();
	relations = [];
	notes = /* @__PURE__ */ new Map();
	namespaces = /* @__PURE__ */ new Map();
	interfaces = [];
	styleClasses = /* @__PURE__ */ new Map();
	title;
	accTitle;
	accDescr;
	namespaceStack = [];
	withCssClass = /* @__PURE__ */ new Map();
	addClass(e) {
		let { className: t, type: n } = xu(e);
		if (this.classes.has(t)) return;
		let r = {
			id: t,
			type: n,
			label: t,
			cssClasses: "default",
			methods: [],
			members: [],
			annotations: [],
			styles: []
		};
		this.classes.set(t, r), this.tag(r, "default");
	}
	tag(e, t) {
		let n = this.withCssClass.get(t);
		n ? n.add(e) : this.withCssClass.set(t, /* @__PURE__ */ new Set([e]));
	}
	ensure(e) {
		return this.addClass(e), this.classes.get(xu(e).className);
	}
	setClassLabel(e, t) {
		this.ensure(e).label = t;
	}
	addRelation(e) {
		let { type1: t, type2: n } = e.relation;
		t === yu.LOLLIPOP && n === "none" ? (this.addClass(e.id2), e.id1 = this.addInterface(e.id1, e.id2)) : n === yu.LOLLIPOP && t === "none" ? (this.addClass(e.id1), e.id2 = this.addInterface(e.id2, e.id1)) : (this.addClass(e.id1), this.addClass(e.id2)), e.id1 = xu(e.id1).className, e.id2 = xu(e.id2).className, e.relationTitle1 = e.relationTitle1.trim(), e.relationTitle2 = e.relationTitle2.trim(), this.relations.push(e);
	}
	addInterface(e, t) {
		let n = `interface${this.interfaces.length}`;
		return this.interfaces.push({
			id: n,
			label: e,
			classId: t
		}), n;
	}
	addAnnotation(e, t) {
		this.ensure(e).annotations.push(t);
	}
	addMember(e, t) {
		let n = this.ensure(e);
		if (typeof t != "string") return;
		let r = t.trim();
		if (r.startsWith("<<") && r.endsWith(">>")) n.annotations.push(r.substring(2, r.length - 2));
		else if (r.indexOf(")") > 0) {
			let e = new _u(r, "method");
			(e.memberType === "method" ? n.methods : n.members).push(e);
		} else r && n.members.push(new _u(r, "attribute"));
	}
	addMembers(e, t) {
		if (Array.isArray(t)) {
			t.reverse();
			for (let n of t) this.addMember(e, n);
		}
	}
	addNote(e, t) {
		let n = this.notes.size, r = `note${n}`;
		return this.notes.set(r, {
			id: r,
			class: t,
			text: e,
			index: n
		}), r;
	}
	cleanupLabel(e) {
		return (e.startsWith(":") ? e.substring(1) : e).trim();
	}
	setCssClass(e, t) {
		for (let n of e.split(",")) {
			let e = this.classes.get(Su(n));
			if (e !== void 0) {
				e.cssClasses += " " + t;
				for (let n of t.split(" ")) this.tag(e, n);
			}
		}
	}
	defineClass(e, t) {
		for (let n of e) {
			let e = this.styleClasses.get(n);
			if (e === void 0 && (e = {
				id: n,
				styles: [],
				textStyles: []
			}, this.styleClasses.set(n, e)), !t) continue;
			for (let n of t) n.includes("color") && e.textStyles.push(n.replace("fill", "bgFill")), e.styles.push(n);
			let r = this.withCssClass.get(n);
			if (r === void 0) continue;
			let i = t.flatMap((e) => e.split(","));
			for (let e of r) for (let t of i) e.styles.push(t);
		}
	}
	setTooltip(e, t) {
		if (t !== void 0) for (let n of e.split(",")) {
			let e = this.classes.get(xu(n).className);
			e && (e.tooltip = t);
		}
	}
	setLink(e, t, n) {
		let r = p(t).trim();
		for (let t of e.split(",")) {
			let e = this.classes.get(Su(t));
			e && (e.link = r ? Ot(r) : void 0, e.linkTarget = typeof n == "string" ? n : "_blank");
		}
		this.setCssClass(e, "clickable");
	}
	setClickEvent(e, t, n) {
		for (let t of e.split(",")) {
			let e = this.classes.get(xu(t).className);
			e && (e.haveCallback = !0);
		}
		this.setCssClass(e, "clickable");
	}
	setDirection(e) {
		this.direction = e;
	}
	setAccTitle(e) {
		this.accTitle = e.replace(/^\s+/g, "");
	}
	setAccDescription(e) {
		this.accDescr = e.replace(/\n\s+/g, "\n");
	}
	addNamespace(e, t) {
		let n = this.namespaceStack[this.namespaceStack.length - 1], r = n ? `${n}.${e}` : e;
		this.namespaceStack.push(r);
		let i = this.namespaces.get(r);
		if (i) return i.explicit = !0, t && (i.label = t), r;
		let a = n || void 0, o = n ? n.length + 1 : 0;
		for (;;) {
			let e = r.indexOf(".", o), n = e === -1, i = n ? r : r.slice(0, e), s = this.namespaces.get(i);
			if (s === void 0) {
				let c = r.slice(o, n ? r.length : e);
				s = {
					id: i,
					label: n && t ? t : c,
					classes: /* @__PURE__ */ new Map(),
					notes: /* @__PURE__ */ new Map(),
					children: /* @__PURE__ */ new Map(),
					parent: a,
					explicit: n
				}, this.namespaces.set(i, s);
			} else n && (s.explicit = !0);
			let c = a ? this.namespaces.get(a) : void 0;
			if (c && (c.children.has(i) || c.children.set(i, s), s.parent ??= a), n) return r;
			a = i, o = e + 1;
		}
	}
	popNamespace() {
		this.namespaceStack.pop();
	}
	addClassesToNamespace(e, t, n) {
		let r = this.namespaces.get(e);
		if (r !== void 0) {
			for (let n of t) {
				let { className: t } = xu(n), i = this.classes.get(t);
				i !== void 0 && (i.parent = e, r.classes.set(t, i));
			}
			for (let t of n) {
				let n = this.notes.get(t);
				n !== void 0 && (n.parent = e, r.notes.set(t, n));
			}
		}
	}
	setCssStyle(e, t) {
		let n = this.classes.get(e);
		if (t && n) for (let e of t) for (let t of e.split(",")) n.styles.push(t);
	}
}, wu = /* @__PURE__ */ "$end.INVALID.CLASS_DIAGRAM.NEWLINE.EOF.SQS.STR.SQE.DOT.GENERICTYPE.LABEL.acc_title.acc_title_value.acc_descr.acc_descr_value.acc_descr_multiline_value.STRUCT_START.STRUCT_STOP.NAMESPACE.STYLE_SEPARATOR.ANNOTATION_START.ANNOTATION_END.CLASS.MEMBER.NOTE_FOR.NOTE.CLASSDEF.ALPHA.COMMA.direction_tb.direction_bt.direction_rl.direction_lr.AGGREGATION.EXTENSION.COMPOSITION.DEPENDENCY.LOLLIPOP.LINE.DOTTED_LINE.CALLBACK.LINK.LINK_TARGET.CLICK.CALLBACK_NAME.CALLBACK_ARGS.HREF.STYLE.CSSCLASS.COLON.BRKT.PCT.MINUS.UNICODE_TEXT.BQUOTE_STR.EDGE_STATE.EOF_IN_STRUCT.OPEN_IN_STRUCT.PLUS.EQUALS.PUNCTUATION".split("."), Tu = [
	4,
	6,
	4,
	9,
	44,
	45,
	12,
	14,
	15,
	4,
	56,
	4,
	56
], Eu = [
	/.*direction\s+TB[^\n]*/y,
	/.*direction\s+BT[^\n]*/y,
	/.*direction\s+RL[^\n]*/y,
	/.*direction\s+LR[^\n]*/y
], Du = /[\n\r\u2028\u2029]/g;
function Ou(e) {
	let t = e.length, n = [], r = [], i = [], a = [], o = 0, s = 0, c = e.indexOf("direction"), l = -1, u = 0, d = (t, a, o) => (n.push(t), r.push(e.slice(a, o)), i.push(a), s = o, !0), f = (e) => {
		a.push(o), o = e;
	}, p = () => {
		a.length > 0 && (o = a.pop());
	}, m = (t) => e.startsWith(t, s) && !J(e.charCodeAt(s + t.length)), h = (n) => {
		for (; n < t && G(e.charCodeAt(n));) n++;
		return n;
	}, g = (n) => {
		let r = e.indexOf(n, s);
		return r === -1 ? t : r;
	}, _ = (n) => {
		let r = s, i = -1;
		for (let n = e.charCodeAt(r); r < t && G(n); n = e.charCodeAt(++r)) n === 10 && (i = r);
		i < 0 ? s = r : (n && p(), d(3, s, i + 1));
	}, v = (t) => {
		switch (t) {
			case 99:
				if (m("cssClass")) return d(48, s, s + 8);
				if (m("callback")) return d(40, s, s + 8);
				if (m("click")) return d(43, s, s + 5);
				break;
			case 108:
				if (m("link")) return d(41, s, s + 4);
				break;
			case 110:
				if (m("note for")) return d(24, s, s + 8);
				if (m("note")) return d(25, s, s + 4);
				break;
			case 60:
				if (e.charCodeAt(s + 1) === 60) return d(20, s, s + 2);
				break;
			case 62:
				if (e.charCodeAt(s + 1) === 62) return d(21, s, s + 2);
				break;
			case 104: if (m("href")) return d(46, s, s + 4);
		}
		return !1;
	}, y = (n) => {
		if (v(n)) return !0;
		let r = e.charCodeAt(s + 1);
		switch (n) {
			case 34: return f(1), s++, !0;
			case 126: return f(3), s++, !0;
			case 96: return f(2), s++, !0;
			case 95:
				if (m("_self")) return d(42, s, s + 5);
				if (m("_blank")) return d(42, s, s + 6);
				if (m("_parent")) return d(42, s, s + 7);
				if (m("_top")) return d(42, s, s + 4);
				break;
			case 60: return r === 124 ? d(34, s, s + 2) : d(36, s, s + 1);
			case 124: return r === 62 && d(34, s, s + 2);
			case 62: return d(36, s, s + 1);
			case 42: return d(35, s, s + 1);
			case 111:
				if (!J(r)) return d(33, s, s + 1);
				break;
			case 40: return r === 41 && d(37, s, s + 2);
			case 45: return r === 45 ? d(38, s, s + 2) : d(52, s, s + 1);
			case 46: return r === 46 ? d(39, s, s + 2) : d(8, s, s + 1);
			case 58: {
				let n = s + 1;
				for (; n < t;) {
					let t = e.charCodeAt(n);
					if (t === 58 || t === 10 || t === 59) break;
					n++;
				}
				return n > s + 1 ? d(10, s, n) : r === 58 && e.charCodeAt(s + 2) === 58 && d(19, s, s + 3);
			}
			case 43: return d(58, s, s + 1);
			case 37: return d(51, s, s + 1);
			case 61: return d(59, s, s + 1);
			case 91: return d(5, s, s + 1);
			case 93: return d(7, s, s + 1);
			case 33:
			case 35:
			case 36:
			case 38:
			case 39:
			case 44:
			case 63:
			case 92:
			case 47: return d(60, s, s + 1);
		}
		if (J(n)) {
			let t = s + 1;
			for (; J(e.charCodeAt(t));) t++;
			return d(27, s, t);
		}
		return yn(n) && d(53, s, s + 1);
	}, b = () => {
		if (c === -1 || s < u || (c < s && (c = e.indexOf("direction", s)), c === -1) || (l < s && (Du.lastIndex = s, l = Du.test(e) ? Du.lastIndex - 1 : t), c >= l)) return !1;
		for (let t = 0; t < 4; t++) {
			let n = Eu[t];
			if (n.lastIndex = s, n.test(e)) return d(29 + t, s, n.lastIndex);
		}
		return u = l, !1;
	}, x = (n) => {
		if (b()) return !0;
		if (G(n)) return _(!1), !0;
		switch (n) {
			case 37:
				if (e.charCodeAt(s + 1) === 37) {
					let n = g("\n");
					for (; n < t && (e.charCodeAt(n) === 10 || e.charCodeAt(n) === 13);) n++;
					return s = n, !0;
				}
				break;
			case 97: {
				let t = e.startsWith("accTitle", s);
				if (!t && !e.startsWith("accDescr", s)) break;
				let n = h(s + 8), r = e.charCodeAt(n);
				if (r === 58) return d(t ? 11 : 13, s, h(n + 1)), f(t ? 6 : 7), !0;
				if (r === 123 && !t) return s = h(n + 1), f(8), !0;
				break;
			}
			case 99:
				if (m("classDiagram-v2")) return d(2, s, s + 15);
				if (m("classDiagram")) return d(2, s, s + 12);
				if (e.startsWith("call", s) && G(e.charCodeAt(s + 4))) return s = h(s + 4), f(4), !0;
				if (m("classDef")) return d(26, s, s + 8);
				if (m("class")) return f(9), d(22, s, s + 5);
				break;
			case 91:
				if (e.startsWith("*]", s + 1)) return d(55, s, s + 3);
				break;
			case 115:
				if (m("style")) return d(47, s, s + 5);
				break;
			case 110:
				if (m("namespace")) return f(11), d(18, s, s + 9);
				break;
			case 44: return d(28, s, s + 1);
			case 35: return d(50, s, s + 1);
		}
		return y(n) || n === 58 && d(49, s, s + 1);
	};
	for (;;) {
		if (s >= t) {
			n.push(Tu[o]), r.push(""), i.push(t);
			break;
		}
		let a = e.charCodeAt(s), c = !0;
		switch (o) {
			case 0:
				c = x(a);
				break;
			case 9:
				G(a) ? _(!0) : a === 125 ? (p(), p(), d(17, s, s + 1)) : a === 123 ? (f(10), d(16, s, s + 1)) : c = y(a);
				break;
			case 10:
				if (a === 34) f(1), s++;
				else if (a === 125) p(), d(17, s, s + 1);
				else if (a === 91 && e.startsWith("*]", s + 1)) d(55, s, s + 3);
				else if (a === 123) d(57, s, s + 1);
				else if (a === 10) s++;
				else {
					let n = s + 1;
					for (; n < t;) {
						let t = e.charCodeAt(n);
						if (t === 123 || t === 125 || t === 10) break;
						n++;
					}
					d(23, s, n);
				}
				break;
			case 11:
				G(a) ? _(!0) : a === 123 ? (f(12), d(16, s, s + 1)) : a === 125 ? p() : a === 110 && m("namespace") ? (f(11), d(18, s, s + 9)) : c = y(a);
				break;
			case 12:
				G(a) ? _(!1) : a === 125 ? (p(), d(17, s, s + 1)) : a === 110 && m("namespace") ? (f(11), d(18, s, s + 9)) : a === 91 && e.startsWith("*]", s + 1) ? d(55, s, s + 3) : a === 99 && m("class") ? (f(9), d(22, s, s + 5)) : c = y(a);
				break;
			case 1:
				a === 34 ? (p(), s++) : d(6, s, g("\""));
				break;
			case 3:
				if (a === 34) f(1), s++;
				else {
					if (v(a)) break;
					a === 126 ? (p(), s++) : d(9, s, g("~"));
				}
				break;
			case 2:
				if (a === 34) f(1), s++;
				else {
					if (v(a)) break;
					a === 126 ? (f(3), s++) : a === 96 ? (p(), s++) : d(54, s, g("`"));
				}
				break;
			case 4:
				if (a === 40) {
					let t = h(s + 1);
					p(), e.charCodeAt(t) === 41 ? s = t + 1 : (f(5), s++);
				} else d(44, s, g("("));
				break;
			case 5:
				a === 41 ? (p(), s++) : d(45, s, g(")"));
				break;
			case 6:
			case 7:
				d(o === 6 ? 12 : 14, s, g("\n")), p();
				break;
			case 8: a === 125 ? (p(), s++) : d(15, s, g("}"));
		}
		if (!c) return n.push(1), r.push(""), i.push(s), {
			types: n,
			texts: r,
			starts: i
		};
	}
	return n.push(0), r.push(""), i.push(t), {
		types: n,
		texts: r,
		starts: i
	};
}
var ku = 61, Au = new Uint8Array(ku);
for (let e of [
	53,
	27,
	52
]) Au[e] = 1;
var ju = new Uint8Array(ku);
for (let e of [
	27,
	49,
	50,
	47,
	51,
	10
]) ju[e] = 1;
var Mu = new Uint8Array(ku);
Mu[33] = 1, Mu[34] = 2, Mu[35] = 3, Mu[36] = 4, Mu[37] = 5;
var Nu = "'UNICODE_TEXT', 'NUM', 'ALPHA', 'MINUS', 'BQUOTE_STR'";
function Pu(e, t) {
	let { types: n, texts: r, starts: a } = Ou(e), o = 0, s = (t) => {
		let r = n[o];
		throw r === 1 ? i("class", e, a[o], "", !0) : i("class", e, a[o], `Expecting ${t}, got '${wu[r]}'`);
	}, c = (e) => (n[o] !== e && s(`'${wu[e]}'`), r[o++]), l = () => (Au[n[o]] === 0 && s("'UNICODE_TEXT', 'NUM', 'ALPHA', 'MINUS'"), r[o++]), u = (e) => {
		let t = "";
		for (;;) {
			if (n[o] === 54) {
				t += r[o++];
				break;
			}
			Au[n[o]] === 0 && s(Nu), t += r[o++];
			let e = n[o];
			if (e === 8) t += ".", o++;
			else if (Au[e] === 0 && e !== 54) break;
		}
		return e && n[o] === 9 && (t += "~" + r[o++] + "~"), t;
	}, d = () => {
		o++;
		let e = c(6);
		return c(7), e;
	}, f = () => {
		n[o] !== 23 && s("'STRUCT_STOP', 'MEMBER'");
		let e = [];
		for (; n[o] === 23;) e.push(r[o++]);
		return c(17), e.reverse();
	}, p = () => {
		o++;
		let e = u(!0);
		switch (t.addClass(e), n[o] === 5 && t.setClassLabel(e, d()), n[o]) {
			case 19: {
				o++;
				let r = l();
				t.setCssClass(e, r), n[o] === 16 && (o++, t.addMembers(e, f()));
				break;
			}
			case 16:
				o++, n[o] === 17 ? o++ : t.addMembers(e, f());
				break;
			case 20: {
				o++;
				let r = l();
				c(21), t.addAnnotation(e, r), n[o] === 16 && (o++, n[o] === 17 ? o++ : t.addMembers(e, f()));
				break;
			}
		}
		return e;
	}, m = () => {
		if (n[o++] === 25) return t.addNote(c(6));
		let e = u(!0);
		return t.addNote(c(6), e);
	}, h = () => {
		let e = [];
		for (;;) {
			o++;
			let r = u(!1), i = n[o] === 5 ? t.addNamespace(r, d()) : t.addNamespace(r);
			c(16), n[o] === 3 && o++, e.push({
				id: i,
				classes: [],
				notes: []
			});
			let a = !0;
			for (; a;) {
				let r = e[e.length - 1], i = n[o];
				if (i === 18) break;
				for (i === 22 ? r.classes.push(p()) : i === 25 || i === 24 ? r.notes.push(m()) : s("'NAMESPACE', 'CLASS', 'NOTE_FOR', 'NOTE'");;) {
					if (n[o] === 3) {
						let e = n[o + 1];
						if (e === 18 || e === 22 || e === 25 || e === 24) {
							o++;
							break;
						}
						o++;
					}
					c(17);
					let r = e.pop();
					if (t.addClassesToNamespace(r.id, r.classes, r.notes), t.popNamespace(), e.length === 0) {
						a = !1;
						break;
					}
				}
			}
			if (e.length === 0) return;
		}
	}, g = () => {
		let e = Mu[n[o]];
		return e === 0 ? "none" : (o++, e - 1);
	}, _ = () => {
		let e = u(!0), i = n[o];
		if (i === 10) {
			t.addMember(e, t.cleanupLabel(r[o++]));
			return;
		}
		let a = "none";
		if (i === 6) a = r[o++], i = n[o];
		else if (Mu[i] === 0 && i !== 38 && i !== 39) return;
		let c = g();
		i = n[o], i !== 38 && i !== 39 && s("'AGGREGATION', 'EXTENSION', 'COMPOSITION', 'DEPENDENCY', 'LOLLIPOP', 'LINE', 'DOTTED_LINE'"), o++;
		let l = g(), d = n[o] === 6 ? r[o++] : "none", f = {
			id1: e,
			id2: u(!0),
			relation: {
				type1: c,
				type2: l,
				lineType: i === 38 ? 0 : 1
			},
			relationTitle1: a,
			relationTitle2: d
		};
		n[o] === 10 && (f.title = t.cleanupLabel(r[o++])), t.addRelation(f);
	}, v = () => {
		let e = [];
		for (;;) {
			ju[n[o]] === 0 && s("'ALPHA', 'NUM', 'COLON', 'UNIT', 'SPACE', 'BRKT', 'STYLE', 'PCT', 'LABEL'");
			let t = r[o++];
			for (; ju[n[o]] === 1;) t += r[o++];
			if (e.push(t), n[o] !== 28) return e;
			o++;
		}
	}, y = (e) => {
		n[o] === 6 && t.setTooltip(e, r[o++]);
	}, b = (e) => {
		let i = c(6), a = n[o] === 6 ? r[o++] : void 0;
		n[o] === 42 ? t.setLink(e, i, r[o++]) : t.setLink(e, i), a !== void 0 && t.setTooltip(e, a);
	}, x = () => {
		let e = n[o];
		switch (e) {
			case 53:
			case 27:
			case 52:
			case 54:
				_();
				return;
			case 18:
				h();
				return;
			case 22:
				p();
				return;
			case 23:
				o++;
				return;
			case 20: {
				o++;
				let e = l();
				c(21), t.addAnnotation(u(!0), e);
				return;
			}
			case 40: {
				o++;
				let e = u(!0);
				t.setClickEvent(e, c(6)), y(e);
				return;
			}
			case 41:
				o++, b(u(!0));
				return;
			case 43: {
				o++;
				let e = u(!0);
				if (n[o] === 46) {
					o++, b(e);
					return;
				}
				let i = c(44);
				n[o] === 45 ? t.setClickEvent(e, i, r[o++]) : t.setClickEvent(e, i), y(e);
				return;
			}
			case 47: {
				o++;
				let e = c(27);
				t.setCssStyle(e, v());
				return;
			}
			case 48: {
				o++;
				let e = c(6);
				t.setCssClass(e, c(27));
				return;
			}
			case 25:
			case 24:
				m();
				return;
			case 26: {
				o++;
				let e = [c(27)];
				for (; n[o] === 28;) o++, e.push(c(27));
				t.defineClass(e, v());
				return;
			}
			case 29:
			case 30:
			case 31:
			case 32:
				o++, t.setDirection(e === 29 ? "TB" : e === 30 ? "BT" : e === 31 ? "RL" : "LR");
				return;
			case 11:
				o++, t.setAccTitle(c(12).trim());
				return;
			case 13:
				o++, t.setAccDescription(c(14).trim());
				return;
			case 15:
				t.setAccDescription(r[o++].trim());
				return;
		}
		s("'acc_title', 'acc_descr', 'acc_descr_multiline_value', 'NAMESPACE', 'ANNOTATION_START', 'CLASS', 'MEMBER', 'NOTE_FOR', 'NOTE', 'CLASSDEF', 'direction_tb', 'CALLBACK', 'LINK', 'CLICK', 'STYLE', 'CSSCLASS', 'ALPHA', 'MINUS', 'BQUOTE_STR'");
	}, S = n[o] === 2;
	for (S && (o++, c(3)); x(), !(n[o] !== 3 || (o++, n[o] === 4 || n[o] === 0)););
	S && c(4), c(0);
}
function Fu(e, t, n, r) {
	let i = Int32Array.from(e, (e, t) => t), a = (e) => {
		for (; i[e] !== e;) i[e] = i[i[e]], e = i[e];
		return e;
	}, o = (e, t) => {
		i[a(e)] = a(t);
	};
	for (let t = 0; t < e.length; t++) e[t].parent >= 0 && o(t, e[t].parent);
	for (let e of t) o(e.src, e.dst);
	let s = /* @__PURE__ */ new Map(), c = (e, t, n, r = 0, i = 0) => {
		e.left = Math.min(e.left, t - r / 2), e.top = Math.min(e.top, n - i / 2), e.right = Math.max(e.right, t + r / 2), e.bottom = Math.max(e.bottom, n + i / 2);
	};
	for (let t = 0; t < e.length; t++) {
		let n = a(t), r = s.get(n);
		r || (r = {
			nodes: [],
			edges: [],
			left: 1 / 0,
			top: 1 / 0,
			right: -1 / 0,
			bottom: -1 / 0
		}, s.set(n, r));
		let i = e[t];
		r.nodes.push(i), c(r, i.x, i.y, i.w, i.h);
	}
	if (s.size < 2) return;
	for (let e of t) {
		let t = s.get(a(e.src));
		t.edges.push(e);
		for (let n = 0; n < e.route.length; n += 3) c(t, e.route[n], e.route[n + 1]);
		e.labelW > 0 && c(t, e.labelX, e.labelY, e.labelW, e.labelH);
	}
	let l = 0, u = 0, d = 0, f = 0, p = 1 / 0, m = -1 / 0, h = [];
	for (let e of s.values()) {
		let t = e.right - e.left, i = e.bottom - e.top;
		l > 0 && l + t > n && (u += d + r, l = 0, d = 0), h.push(l - e.left, u - e.top), p = Math.min(p, e.left), m = Math.max(m, e.right), f = Math.max(f, l + t), d = Math.max(d, i), l += t + r;
	}
	if (f >= m - p) return;
	let g = 0;
	for (let e of s.values()) ri(e.nodes, e.edges, h[g++], h[g++]);
	return {
		width: f,
		height: u + d
	};
}
var Iu = [
	"aggregation",
	"extension",
	"composition",
	"dependency",
	"lollipop"
];
function Lu(e) {
	return typeof e == "number" && Iu[e] || "none";
}
function Ru(e, t = !0) {
	let n = [], r = [], i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), c = (n) => {
		if (t || n === void 0) return n;
		let r = [], i = n, a;
		for (; i;) {
			if (s.has(i)) {
				a = s.get(i);
				break;
			}
			let t = e.namespaces.get(i);
			if (t === void 0) break;
			if (t.explicit) {
				a = i;
				break;
			}
			r.push(i), i = t.parent;
		}
		for (let e of r) s.set(e, a);
		return a;
	}, l = (e) => e === void 0 ? -1 : i.get(e) ?? -1;
	for (let r of e.namespaces.values()) !t && !r.explicit || (i.set(r.id, n.length), n.push({
		id: r.id,
		label: t ? r.label : r.id,
		isGroup: !0,
		shape: "rect",
		parentId: t ? r.parent : void 0,
		parent: -1
	}));
	for (let e of n) e.parent = l(e.parentId);
	let u = 0;
	for (let t of e.classes.values()) {
		let e = c(t.parent);
		a.set(t.id, n.length), n.push({
			id: t.id,
			label: t.label,
			isGroup: !1,
			shape: "classBox",
			parentId: e,
			parent: l(e),
			classNode: t,
			colorIndex: u++
		});
	}
	for (let t of e.notes.values()) {
		let e = c(t.parent), i = t.class === void 0 ? void 0 : a.get(t.class);
		i !== void 0 && r.push({
			id: `edgeNote${t.index}`,
			start: t.id,
			end: n[i].id,
			source: n.length,
			target: i,
			label: void 0,
			arrowTypeStart: "none",
			arrowTypeEnd: "none",
			startLabelRight: "",
			endLabelLeft: "",
			pattern: "dotted",
			classes: "relation"
		}), n.push({
			id: t.id,
			label: t.text,
			isGroup: !1,
			shape: "note",
			parentId: e,
			parent: l(e)
		});
	}
	for (let t of e.interfaces) {
		let e = a.get(t.classId);
		o.set(t.id, n.length), n.push({
			id: t.id,
			label: t.label,
			isGroup: !1,
			shape: "interface",
			parentId: void 0,
			parent: e === void 0 ? -1 : n[e].parent
		});
	}
	let d = 0;
	for (let t of e.relations) {
		d++;
		let { type1: e, type2: n } = t.relation, i = e === yu.LOLLIPOP && n === "none" ? o : a, s = i === a && n === yu.LOLLIPOP && e === "none" ? o : a;
		r.push({
			id: `id_${t.id1}_${t.id2}_${d}`,
			start: t.id1,
			end: t.id2,
			source: i.get(t.id1) ?? -1,
			target: s.get(t.id2) ?? -1,
			label: t.title,
			arrowTypeStart: Lu(e),
			arrowTypeEnd: Lu(n),
			startLabelRight: t.relationTitle1 === "none" ? "" : t.relationTitle1,
			endLabelLeft: t.relationTitle2 === "none" ? "" : t.relationTitle2,
			pattern: t.relation.lineType === 1 ? "dashed" : "solid",
			classes: "relation"
		});
	}
	return {
		nodes: n,
		edges: r
	};
}
var zu = 12, Bu = 16, Vu = 6, Hu = 5;
function Uu(e) {
	switch (e) {
		case "extension": return zu;
		case "composition":
		case "aggregation": return Bu;
		case "lollipop": return 2 * Hu;
		case "dependency": return vi("arrow_point");
	}
	return 0;
}
function Wu(e, t, n, r, i, a) {
	let o = -i, s = r;
	switch (e) {
		case "extension": {
			let e = t - r * zu, a = n - i * zu;
			return `<path class="pele-marker" d="M${X(t)},${X(n)}L${X(e + o * Vu)},${X(a + s * Vu)}L${X(e - o * Vu)},${X(a - s * Vu)}Z" stroke-linejoin="round"/>`;
		}
		case "composition":
		case "aggregation": {
			let c = t - r * Bu / 2, l = n - i * Bu / 2, u = Vu - 1;
			return `<path class="pele-marker" d="M${X(t)},${X(n)}L${X(c + o * u)},${X(l + s * u)}L${X(t - r * Bu)},${X(n - i * Bu)}L${X(c - o * u)},${X(l - s * u)}Z" stroke-linejoin="round"${e === "composition" ? ` fill="${a}"` : ""}/>`;
		}
		case "lollipop": return `<circle class="pele-marker" cx="${X(t - r * Hu)}" cy="${X(n - i * Hu)}" r="${Hu}"/>`;
		case "dependency": return yi("arrow_point", t, n, r, i, a);
	}
	return "";
}
var Gu = 40, Ku = 16, qu = 56, Ju = 20, Yu = 26, Xu = 12, Zu = 8, Qu = 6, $u = 10, ed = 64, td = 8, nd = "var(--_l)", rd = /* @__PURE__ */ new Set([
	"_self",
	"_blank",
	"_parent",
	"_top"
]);
function id(e, t, n) {
	let r = e[t];
	return typeof r == "number" && r > 0 ? Math.min(r, 2e3) : n;
}
var ad = [], od = [];
function sd(e, t, n) {
	let r = p(e.getDisplayDetails().displayText).trim();
	return {
		text: r,
		width: t.width(r, n, e.classifier === "*" ? 2 : 0),
		classifier: e.classifier
	};
}
function cd(e, t, n) {
	let r = (r) => so(n, (i) => ld(e, t, n, r, i));
	return oo(e.direction) ? ao(n, r) : r(!1);
}
function ld(e, t, n, r, i) {
	let a = t.class ?? {}, o = Ru(e, a.hierarchicalNamespaces !== !1), s = a.hideEmptyMembersBox === !0, c = n.fontSize ?? 16, l = Math.round(c * .875), u = Math.round(c * .8), d = Math.round(u * 1.4), f = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), m = n.padding ?? 8, h = (e, t) => {
		if (!e.includes("$$")) return;
		let n = Q(e, !1, f, t, 4e3);
		return n.lines.some(Qa) ? n : void 0;
	}, g = (e) => e ? h(e, u)?.width ?? f.width(p(e), u, 0) : 0, _ = r ? "TB" : Br(e.direction), v = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), x = (e) => {
		let t = v.get(e);
		if (t === void 0) {
			let n = Ii([e]);
			t = n.shape === "" && n.text === "" ? "" : e.slice(0, e.indexOf(":")).trim().toLowerCase(), v.set(e, t);
		}
		t !== "" && b.set(t, e);
	}, S = (t) => {
		b.clear();
		let n = y.get(t.cssClasses);
		if (n === void 0) {
			for (let n of t.cssClasses.split(" ")) {
				let t = e.styleClasses.get(n);
				if (t) for (let e of t.styles) for (let t of e.split(",")) x(t);
			}
			n = [...b], y.set(t.cssClasses, n);
		} else for (let [e, t] of n) b.set(e, t);
		for (let e of t.styles) x(e);
		return Ii(b.size === 0 ? od : [...b.values()]);
	}, C = new Int32Array(o.nodes.length);
	for (let e of o.nodes) e.parent >= 0 && C[e.parent]++;
	let w = new Uint8Array(o.nodes.length);
	for (let e of o.edges) {
		if (e.source < 0 || e.target < 0) continue;
		let t = o.nodes[e.source].parent, n = o.nodes[e.target].parent;
		if (t !== n) {
			for (let e = t; e >= 0 && w[e] === 0; e = o.nodes[e].parent) w[e] = 1;
			for (let e = n; e >= 0 && w[e] === 0; e = o.nodes[e].parent) w[e] = 1;
		}
	}
	let T = [], E = [];
	o.nodes.forEach((e, t) => {
		let n, r;
		if (e.isGroup) {
			let a = Q(e.label, !1, f, c, 4e3);
			n = D(e, a, 0, 0, c), C[t] > 0 ? (r = ii(0, 0), r.isGroup = !0, r.padX = Ju, r.padTop = a.height > 0 ? a.height + 16 : Ju, r.padBottom = Ju, r.minW = a.width + 2 * Ju - 12 + (w[t] === 1 && !i ? Math.min(a.width + 24, 240) : 0)) : (n.w = Math.max(a.width + 2 * Ju, 80), n.h = a.height + 2 * Ju, r = ii(n.w, n.h));
		} else if (e.classNode) n = O(e, e.classNode), r = ii(n.w, n.h);
		else if (e.shape === "note") {
			let t = Q(e.label, !0, f, l, 260);
			n = D(e, t, Math.max(t.width + 2 * Xu, 40), t.height + 2 * Zu, l), r = ii(n.w, n.h);
		} else {
			let t = Q(e.label, !1, f, l, 200);
			n = D(e, t, Math.max(t.width, 12) + 4, Math.max(t.height, 12), l), r = ii(n.w, n.h);
		}
		r.parent = e.parent, r.seq = t, T.push(n), E.push(r);
	});
	function D(e, t, n, r, i) {
		return {
			node: e,
			style: Ii(od),
			label: t,
			w: n,
			h: r,
			loops: 0,
			annotations: od,
			attributes: ad,
			methods: ad,
			titleH: 0,
			attributesH: 0,
			fontSize: i
		};
	}
	function O(e, t) {
		let n = S(t), r = n.fontSize ?? c, i = Math.round(r * .875), a = Math.round(i * 1.5), o = t.type ? "&lt;" + hu(t.type).replace(/</g, "&lt;").replace(/>/g, "&gt;") + "&gt;" : "", l = Q(t.label + o, !1, f, r, 4e3, 1 | (n.italic ? 2 : 0)), m = t.annotations.length > 0 ? t.annotations.map((e) => h(`«${e.trim()}»`, u) ?? `«${p(e).trim()}»`) : od, g = t.members.length > 0 ? t.members.map((e) => sd(e, f, i)) : ad, _ = t.methods.length > 0 ? t.methods.map((e) => sd(e, f, i)) : ad, v = l.width, y = 0;
		for (let e of m) v = Math.max(v, typeof e == "string" ? f.width(e, u, 0) : e.width), y += typeof e == "string" ? d : Math.max(d, e.height);
		for (let e of g) v = Math.max(v, e.width);
		for (let e of _) v = Math.max(v, e.width);
		let b = !(s && g.length === 0 && _.length === 0), x = (e) => b ? e > 0 ? 2 * Qu + e * a : $u : 0, C = 2 * Zu + y + Math.max(l.height, Math.round(r * 1.5)), w = x(g.length);
		return {
			node: e,
			style: n,
			label: l,
			w: Math.max(v + 2 * Xu, ed),
			h: C + w + x(_.length),
			loops: 0,
			annotations: m,
			attributes: g,
			methods: _,
			titleH: C,
			attributesH: w,
			fontSize: r
		};
	}
	let k = [], A = [], j = [], M = [], N = [], P = new Float64Array(T.length * 4), F = (e, t, n) => {
		P[e * 4 + t]++, n > P[e * 4 + t + 1] && (P[e * 4 + t + 1] = n);
	};
	for (let e of o.edges) {
		if (e.source < 0 || e.target < 0) continue;
		let t = Q(e.label, !0, f, l, 200), n = g(e.startLabelRight), r = g(e.endLabelLeft);
		e.source === e.target ? (T[e.source].loops++, E[e.source].w += 2 * (Yu + (t.width > 0 ? t.width + 12 : 0))) : (F(e.source, 0, n), F(e.target, 2, r)), M.push(n), N.push(r), A.push(e), j.push(t), k.push({
			src: e.source,
			dst: e.target,
			minlen: 1,
			labelW: t.width > 0 ? t.width + 12 : 0,
			labelH: t.height > 0 ? t.height + 4 : 0,
			route: [],
			labelX: 0,
			labelY: 0
		});
	}
	if (_ === "TB" || _ === "BT") for (let e = 0; e < T.length; e++) {
		if (!T[e].node.classNode) continue;
		let t = 0;
		for (let n = 0; n < 4; n += 2) {
			let r = P[e * 4 + n], i = P[e * 4 + n + 1];
			r > 1 && (t = Math.max(t, (r - 1) * (i > 0 ? i + 24 : 14) + 24));
		}
		t = Math.min(t, 480), t > T[e].w && (E[e].w += t - T[e].w, T[e].w = t);
	}
	let I = !1;
	for (let e = 0; e < A.length && !I; e++) I = M[e] > 0 || N[e] > 0;
	let L = 0;
	if (_ === "TB" || _ === "BT") {
		let e = (e) => e ? Math.max(d, h(e, u)?.height ?? 0) : 0;
		for (let t of A) L = Math.max(L, e(t.startLabelRight) + e(t.endLabelLeft) - 2 * d);
	}
	let R = si(E, k, _, {
		nodeSep: id(a, "nodeSpacing", Gu),
		edgeSep: Ku,
		rankSep: id(a, "rankSpacing", I ? qu + 16 : qu) + L,
		portSep: 20,
		apart: !0
	}), z = /* @__PURE__ */ new Map(), B = [], V = (e, t, n, r, i) => {
		let a = e.route, o = E[n], s = ga(a, t, o);
		if (s < 0) return;
		let c = (o.w - T[n].w) / 2;
		s === 1 ? a[t] -= c : s === 3 && (a[t] += c);
		let l = s & 1, u = a[(t === 0 ? 3 : t - 3) + l], d = u - a[t + l], f = {
			route: a,
			at: t,
			toward: u,
			order: i,
			room: r,
			side: s,
			after: l ? d > 0 : d >= 0
		}, p = n * 4 + s, m = z.get(p);
		return m ? m.push(f) : z.set(p, [f]), f;
	}, H = [], U = [];
	for (let e = 0; e < k.length; e++) {
		let t = k[e], n = t.src !== t.dst && t.route.length >= 6;
		H.push(n ? V(t, 0, t.src, M[e], e) : void 0), U.push(n ? V(t, t.route.length - 3, t.dst, N[e], e) : void 0);
	}
	let ee = (e, t, n) => {
		for (let r = E[e].parent, i = 0; r >= 0 && i < 1e4; r = E[r].parent, i++) {
			let e = E[r], i = Math.abs(t - e.x), a = Math.abs(n - e.y);
			if (Math.abs(a - e.h / 2) < .5 && i <= e.w / 2 + .5 || Math.abs(i - e.w / 2) < .5 && a <= e.h / 2 + .5) return !0;
		}
		return !1;
	}, te = [];
	for (let [e, t] of z) {
		if (t.length < 2) continue;
		let n = e >> 2, r = e & 1, i = r ? T[n].h : T[n].w;
		t.sort((e, t) => e.toward - t.toward || e.order - t.order);
		let a = 0;
		for (let e = 0; e + 1 < t.length; e++) {
			let n = t[e], i = t[e + 1], o = r ? 20 : 24;
			n.room > 0 && n.after && (o += r ? d + 6 : n.room), i.room > 0 && !i.after && (o += r ? d + 6 : i.room), te[e] = o, a += o;
		}
		let o = Math.min(1, (i - 24) / a);
		if (o <= 0) continue;
		let s = (r ? E[n].y : E[n].x) - a * o / 2;
		for (let e = 0; e < t.length; e++) {
			let { route: i, at: a } = t[e], c = a === 0 ? 3 : -3, l = a + c, u = -1;
			for (let e = l; e >= 0 && e < i.length && Math.abs(i[e + r] - i[l + r]) < .5; e += c) if (ee(n, i[e], i[e + 1])) {
				u = e;
				break;
			}
			if (u >= 0 && Math.abs(i[l + r] - s) <= 24) for (let e = l; e !== u + c; e += c) i[e + r] = s;
			i[a + r] = s, s += te[e] * o;
		}
	}
	let W = (e, t, n, r) => {
		if (t === void 0 || n <= 0) return;
		let i = t.side & 1, a = r ? 0 : e.length - 3, o = a + 1 - i, s = Math.abs(e[(r ? 3 : a - 3) + 1 - i] - e[o]), c = Math.min(i ? n + 10 : d + 6, s * .35);
		if (c < 4) return;
		let l = [
			e[a],
			e[a + 1],
			e[a + 2]
		];
		l[1 - i] += (t.side === 0 || t.side === 3 ? -1 : 1) * c, e.splice(r ? 3 : a, 0, l[0], l[1], l[2]);
	};
	for (let e = 0; e < k.length; e++) W(k[e].route, H[e], M[e], !0), W(k[e].route, U[e], N[e], !1);
	let ne = 0, re = 0, G = R.width, K = R.height, ie = (e, t, n, r, i, a, o) => {
		if (!t) return;
		let s = h(t, u), c = s ? Math.max(d, s.height) : d, l = r, f = i;
		a & 1 ? (l += (a === 3 ? -1 : 1) * (5 + n / 2), f += (o ? 1 : -1) * (7 + c / 2)) : (l += (o ? 1 : -1) * (9 + n / 2), f += (a === 0 ? -1 : 1) * (3 + c / 2)), B.push({
			text: p(t),
			math: s,
			x: l,
			y: f,
			w: n,
			h: c,
			parent: e
		}), ne = Math.min(ne, l - n / 2), G = Math.max(G, l + n / 2), re = Math.min(re, f - c / 2), K = Math.max(K, f + c / 2);
	}, q = /* @__PURE__ */ new Map(), ae = new Int32Array(k.length);
	for (let e = 0; e < k.length; e++) {
		let t = k[e], n = A[e], r = t.route;
		if (t.src === t.dst) {
			let r = q.get(t.src) ?? 0;
			q.set(t.src, r + 1), ae[e] = r;
			let i = E[t.src], a = T[t.src], o = i.x + a.w / 2, s = Math.min(a.h / 2 - 4, 8 + r * 6);
			ie(t.src, n.startLabelRight, M[e], o, i.y - s, 1, !1), ie(t.dst, n.endLabelLeft, N[e], o, i.y + s, 1, !0), t.labelX = i.x + a.w / 2 + Yu + r * 8 + 4 + t.labelW / 2, t.labelY = i.y;
		} else if (r.length >= 6) {
			let i = r.length - 3, a = H[e], o = U[e];
			ie(t.src, n.startLabelRight, M[e], r[0], r[1], a ? a.side : 2, !a || a.after), ie(t.dst, n.endLabelLeft, N[e], r[i], r[i + 1], o ? o.side : 0, !o || o.after);
		}
	}
	let oe = n.maxWidth;
	if (oe !== void 0 && oe > 0 && G - ne + 2 * m > oe) {
		let e = B.map((e) => ({
			...ii(e.w, e.h, e.parent),
			x: e.x,
			y: e.y
		})), t = Fu(E.concat(e), k, Math.max(1, oe - 2 * m), id(a, "nodeSpacing", Gu));
		t && (B.forEach((t, n) => {
			t.x = e[n].x, t.y = e[n].y;
		}), ne = re = 0, G = t.width, K = t.height);
	}
	let J = m - ne, se = m - re, ce = Math.ceil(G - ne + 2 * m), le = Math.ceil(K - re + 2 * m), ue = [], de = /* @__PURE__ */ new Map();
	if (o.nodes.length > 0 && o.nodes[0].isGroup) for (let e of k) ci(de, e.route);
	let fe = "", pe = "", me = "";
	for (let e = 0; e < T.length; e++) {
		let t = T[e], r = E[e], i = t.node, a = r.x + J, s = r.y + se, c = Y(i.id), u = r.isGroup ? r.w : t.w, d = r.isGroup ? r.h : t.h;
		if (i.isGroup) {
			let n = r.isGroup ? li(r, t.label.width, de, Ju) : r.x, i = s - d / 2 + 8 + t.label.height / 2, l = " class=\"pele-cluster-label\" fill=\"var(--_m)\"", f = r.isGroup && ui(r, t.label.width, n, de);
			f && (pe += di(t.label, n + J, i, l, c, o.nodes, e)), fe += `<g class="pele-cluster pele-namespace" data-id="${c}"><rect x="${X(a - u / 2)}" y="${X(s - d / 2)}" width="${X(u)}" height="${X(d)}" fill="var(--_a)" fill-opacity="0.5" stroke="var(--_b)"${Ti}/>` + (f ? "" : Z(t.label, n + J, i, l)) + "</g>";
			continue;
		}
		let f = ` transform="translate(${X(a)},${X(s)})"`;
		if (i.classNode) me += he(t, i.classNode, c, f);
		else if (i.shape === "note") {
			let e = u / 2, r = -d / 2;
			me += `<g class="pele-node pele-note" data-id="${c}"${f}><path d="M${X(-e)},${X(r)}H${X(e - td)}L${X(e)},${X(r + td)}V${X(-r)}H${X(-e)}Z" fill="var(--_a)" stroke="var(--_b)" stroke-linejoin="round"/><path d="M${X(e - td)},${X(r)}V${X(r + td)}H${X(e)}" fill="none" stroke="var(--_b)" stroke-linejoin="round"/>` + Z(t.label, 0, 0, ` class="pele-label" font-size="${l}"`, n.icons) + "</g>";
		} else me += `<g class="pele-node pele-interface" data-id="${c}"${f}>` + Z(t.label, 0, 0, ` class="pele-label" font-size="${l}"`, n.icons) + "</g>";
	}
	function he(e, t, r, i) {
		let { w: a, h: o, style: s } = e, l = -a / 2, f = -o / 2, p = Math.round(e.fontSize * .875), m = Math.round(p * 1.5), h = `<rect x="${X(l)}" y="${X(f)}" width="${X(a)}" height="${X(o)}" fill="var(--_s)" stroke="var(--_b)"${Ei(s.shape)}/>`, g = f + e.titleH, _ = g + e.attributesH;
		if (o > e.titleH) {
			let e = s.stroke ? ` style="stroke:${nt(s.stroke)}"` : "";
			h += `<path class="pele-divider" d="M${X(l)},${X(g)}H${X(-l)}M${X(l)},${X(_)}H${X(-l)}" fill="none" stroke="var(--_b)"${e}/>`;
		}
		let v = f + Zu;
		for (let t of e.annotations) if (typeof t == "string") h += `<text class="pele-annotation" x="0" y="${X(v + d / 2 + u * .35)}" text-anchor="middle" font-size="${u}" fill="var(--_m)">${nt(t)}</text>`, v += d;
		else {
			let e = Math.max(d, t.height);
			h += Z(t, 0, v + e / 2, ` class="pele-annotation" font-size="${u}" fill="var(--_m)"`, n.icons), v += e;
		}
		let y = e.fontSize === c ? "" : ` font-size="${X(e.fontSize)}"`;
		h += Z(e.label, 0, (v + g - Zu) / 2, ` class="pele-label"${y} font-weight="var(--_hw)"${s.text}`, n.icons);
		let b = (e, t, n) => {
			let r = "", i = n + Qu + m / 2 + p * .35;
			for (let n of e) {
				let e = n.classifier === "$" ? ` pele-static"${s.text ? s.text.slice(0, -1) + "text-decoration:underline\"" : " style=\"text-decoration:underline\""}` : n.classifier === "*" ? ` pele-abstract" font-style="italic"${s.text}` : `"${s.text}`;
				r += `<text class="pele-member pele-${t}${e} x="${X(l + Xu)}" y="${X(i)}">${nt(n.text)}</text>`, i += m;
			}
			return r;
		};
		return (e.attributes.length > 0 || e.methods.length > 0) && (h += `<g class="pele-members" font-size="${p}">${b(e.attributes, "attribute", g)}${b(e.methods, "method", _)}</g>`), t.tooltip && (h = `<title>${Y(t.tooltip)}</title>` + h), t.link && (h = zt(h, t.link, t.id, ue, n, t.linkTarget && rd.has(t.linkTarget) ? ` target="${t.linkTarget}"` : "")), `<g class="pele-node pele-class${Ri(t.cssClasses.replace(/^default\s?/, ""))}" data-id="${r}"${i}>${h}</g>`;
	}
	let ge = "", _e = "";
	for (let e = 0; e < k.length; e++) {
		let t = k[e], r = A[e], i = j[e], a = r.arrowTypeStart, o = r.arrowTypeEnd, s = Uu(a), c = Uu(o), l;
		if (t.src === t.dst) {
			let n = E[t.src], r = T[t.src], i = ae[e], a = n.x + J + r.w / 2, o = n.y + se, u = Math.min(r.h / 2 - 4, 8 + i * 6), d = Yu + i * 8;
			l = {
				d: `M${X(a + s)},${X(o - u)}C${X(a + d + s)},${X(o - u)} ${X(a + d + c)},${X(o + u)} ${X(a + c)},${X(o + u)}`,
				sx: a,
				sy: o - u,
				sdx: -1,
				sdy: 0,
				ex: a,
				ey: o + u,
				edx: -1,
				edy: 0
			};
		} else {
			let e = t.route;
			for (let t = 0; t < e.length; t += 3) e[t] += J, e[t + 1] += se;
			l = _i(e, void 0, s, c);
		}
		let u = r.pattern === "dashed" ? " stroke-dasharray=\"6 4\"" : r.pattern === "dotted" ? " stroke-dasharray=\"2 4\"" : "";
		if (ge += `<g class="pele-edge${r.pattern === "dotted" ? " pele-note-edge" : " pele-relation"}" data-id="${Y(r.id)}"><path d="${l.d}"${u}/>` + Wu(a, l.sx, l.sy, l.sdx, l.sdy, nd) + Wu(o, l.ex, l.ey, l.edx, l.edy, nd) + "</g>", i.width > 0) {
			let e = t.labelX + J, a = t.labelY + se;
			_e += bi(r.id, i, e, a, "", n.icons);
		}
	}
	let ve = "";
	for (let e of B) ve += e.math ? Z(e.math, e.x + J, e.y + se, " class=\"pele-cardinality\"", n.icons) : `<text class="pele-cardinality" x="${X(e.x + J)}" y="${X(e.y + se + u * .35)}" text-anchor="middle">${nt(e.text)}</text>`;
	let ye = Zs(e.title, f, c, m, ce, le, (fe ? `<g class="pele-clusters">${fe}</g>` : "") + (ge ? `<g class="pele-edges" fill="none" stroke="${nd}" stroke-linecap="round">${ge}</g>` : "") + (pe ? `<g class="pele-cluster-titles">${pe}</g>` : "") + (_e ? `<g class="pele-edge-labels" font-size="${l}">${_e}</g>` : "") + (ve ? `<g class="pele-cardinalities" font-size="${u}" fill="var(--_m)">${ve}</g>` : "") + `<g class="pele-nodes">${me}</g>`);
	return {
		svg: Ui("class", ye.width, ye.height, c, n, e, ye.content),
		width: ye.width,
		height: ye.height,
		links: ue
	};
}
var ud = {
	type: "class",
	math: !0,
	parse(e, t, n) {
		let r = new Cu();
		return n && (r.title = n), Pu(e, r), r;
	},
	render: cd
}, dd = class {
	domains = /* @__PURE__ */ new Map();
	transitions = [];
	setDomains(e) {
		if (e) for (let t of e) {
			let e = t.domain;
			this.domains.set(e, {
				name: e,
				items: (t.items ?? []).map((e) => ({ label: e.label }))
			});
		}
	}
	setTransitions(e) {
		e && (this.transitions = e.filter((e) => e.from !== e.to).map((e) => ({
			from: e.from,
			to: e.to,
			label: e.label || void 0
		})));
	}
};
function fd(e, t) {
	let n = new dd();
	return n.setDomains(e.domains), n.setTransitions(e.transitions), {
		type: "cynefin",
		title: e.title || t,
		accTitle: e.accTitle ? e.accTitle.replace(/^\s+/g, "") : void 0,
		accDescr: e.accDescr ? e.accDescr.replace(/\n\s+/g, "\n") : void 0,
		domains: n.domains,
		transitions: n.transitions
	};
}
var pd = [
	{
		name: "cynefin-beta:",
		pattern: "cynefin-beta:"
	},
	Jo("cynefin-beta"),
	{
		name: "-->",
		pattern: "-->"
	},
	{
		name: ":",
		pattern: ":"
	},
	{
		name: "DOMAIN_NAME",
		pattern: /complex|complicated|clear|chaotic|confusion/y
	},
	zo,
	Bo,
	Vo,
	Ho,
	Uo,
	Wo,
	Go,
	Ko,
	qo
];
function md(e) {
	let t = new is(Ro(e, pd, "cynefin"), pd, "cynefin"), n = {
		$type: "Cynefin",
		domains: [],
		transitions: []
	}, r = () => {
		for (; t.kinds[t.i] === 9;) t.i++;
	}, i = () => {
		t.kind !== -1 && (t.kind !== 9 && t.fail("a line break or the end of input"), r());
	};
	for (r(), t.kind !== 1 && t.kind !== 0 && t.fail("'cynefin-beta'"), t.i++; t.kind !== -1;) switch (t.kind) {
		case 9:
			t.i++;
			break;
		case 5:
			n.accDescr = ts(t.take()), i();
			break;
		case 6:
			n.accTitle = es(t.take()), i();
			break;
		case 7:
			n.title = $o(t.take()), i();
			break;
		case 4: {
			let e = t.take();
			if (t.accept(2)) {
				let r = {
					$type: "Transition",
					from: e,
					to: t.expect(4)
				};
				t.accept(3) && (r.label = rs(t.expect(8))), i(), n.transitions.push(r);
				break;
			}
			let a = {
				$type: "DomainBlock",
				domain: e,
				items: []
			};
			for (r(); t.kinds[t.i] === 8;) a.items.push({
				$type: "DomainItem",
				label: rs(t.take())
			}), r();
			n.domains.push(a);
			break;
		}
		default: t.fail("a domain, a transition, a title, or a line break");
	}
	return n;
}
function hd(e) {
	let t = e + 1831565813 | 0;
	return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function gd(e) {
	let t = 0;
	for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
	return t;
}
function _d(e, t) {
	return typeof e == "number" && Number.isFinite(e) && e !== 0 ? e : gd(t);
}
var vd = {
	segments: 7,
	vertical: !0,
	pointStep: 17,
	controlStep: 31,
	controlShift: 7
}, yd = {
	segments: 7,
	vertical: !1,
	pointStep: 23,
	controlStep: 37,
	controlShift: 11
};
function bd(e, t, n, r, i, a) {
	let o = (t - e) / a.segments, s = [], c = [];
	for (let t = 0; t <= a.segments; t++) {
		let l = t === 0 && a.pinStart || t === a.segments && a.pinEnd;
		s.push(e + t * o), c.push(l ? n : n + hd(r + t * a.pointStep) * i * 2 - i);
	}
	let l = a.vertical ? [c[0], s[0]] : [s[0], c[0]];
	for (let e = 0; e < a.segments; e++) {
		let t = (s[e] + s[e + 1]) / 2, n = i * 1.5 * (e % 2 == 0 ? 1 : -1) * hd(r + e * a.controlStep + a.controlShift);
		a.vertical ? l.push(c[e] + n, t, c[e + 1] - n, t, c[e + 1], s[e + 1]) : l.push(t, c[e] + n, t, c[e + 1] - n, s[e + 1], c[e + 1]);
	}
	return l;
}
function xd(e, t, n, r) {
	let i = n - t;
	return [
		e,
		t,
		e + r,
		t + i * .2,
		e - r * 1.5,
		t + i * .55,
		e + r * .5,
		t + i * .75,
		e - r,
		t + i * .85,
		e + r * .3,
		t + i * .95,
		e,
		n
	];
}
function Sd(e) {
	let t = "";
	for (let n = 2; n < e.length; n += 6) t += `C${X(e[n])},${X(e[n + 1])} ${X(e[n + 2])},${X(e[n + 3])} ${X(e[n + 4])},${X(e[n + 5])}`;
	return t;
}
function Cd(e) {
	let t = "";
	for (let n = e.length - 6; n >= 2; n -= 6) t += `C${X(e[n + 2])},${X(e[n + 3])} ${X(e[n])},${X(e[n + 1])} ${X(e[n - 2])},${X(e[n - 1])}`;
	return t;
}
function wd(e) {
	return `M${X(e[0])},${X(e[1])}${Sd(e)}`;
}
function Td(e, t, n, r) {
	let i = `${X(n)},${X(r)}`;
	return `M${X(e - n)},${X(t)}A${i} 0 1,1 ${X(e + n)},${X(t)}A${i} 0 1,1 ${X(e - n)},${X(t)}Z`;
}
var Ed = [
	[
		"complex",
		0,
		0,
		0
	],
	[
		"complicated",
		1,
		0,
		1
	],
	[
		"chaotic",
		0,
		1,
		3
	],
	[
		"clear",
		1,
		1,
		2
	]
], Dd = 4, Od = /* @__PURE__ */ new Map([
	["complex", [
		"Complex",
		"Probe → Sense → Respond",
		"Emergent Practices"
	]],
	["complicated", [
		"Complicated",
		"Sense → Analyse → Respond",
		"Good Practices"
	]],
	["clear", [
		"Clear",
		"Sense → Categorise → Respond",
		"Best Practices"
	]],
	["chaotic", [
		"Chaotic",
		"Act → Sense → Respond",
		"Novel Practices"
	]],
	["confusion", [
		"Confusion",
		"",
		"Disorder"
	]]
]), kd = 3, Ad = 200, jd = 10, Md = 4, Nd = 6, Pd = 10, Fd = 20, Id = 10;
function Ld(e, t, n, r, i) {
	let a = e.cynefin?.[t];
	return typeof a == "number" && a >= r && a <= i ? a : n;
}
function Rd(e, t, n) {
	let r = n.fontSize ?? 16, i = Math.round(r * .8125), a = Math.round(r * .875), o = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), s = n.padding ?? 8, c = n.icons, l = t.cynefin?.showDomainDescriptions !== !1, u = Ld(t, "boundaryAmplitude", 8, 0, 50), d = _d(Ld(t, "seed", 0, -0x38d7ea4c68000, 0x38d7ea4c68000), n.idPrefix ?? "pele"), f = Math.round(a * 1.5), p = (e, t) => {
		let n = Q(e, !1, o, a, Ad);
		return {
			text: e,
			label: n,
			w: n.width + 2 * jd,
			h: Math.max(n.height, f) + 2 * Md,
			overflow: t
		};
	}, m = (t) => {
		let n = Od.get(t), a = Q(n[0], !1, o, r, 4e3, 1), s = [];
		if (l) for (let e of [n[1], n[2]]) e && s.push(Q(e, !1, o, i, 4e3, 2));
		let c = e.domains.get(t)?.items ?? [], u = t === "confusion" && c.length > kd ? kd : c.length, d = [];
		for (let e = 0; e < u; e++) d.push(p(c[e].label, !1));
		u < c.length && d.push(p(`+${c.length - u} more`, !0));
		let f = a.width, m = a.height;
		for (let e of s) f = Math.max(f, e.width), m += e.height;
		d.length > 0 && (m += Pd - Nd);
		for (let e of d) f = Math.max(f, e.w), m += Nd + e.h;
		return {
			name: t,
			title: a,
			subtitles: s,
			badges: d,
			w: f,
			h: m,
			cx: 0,
			cy: 0
		};
	}, h = Ed.map(([e]) => m(e)), g = m("confusion"), _ = Math.max(88, g.w * .71 + 8), v = Math.max(64, g.h * .71 + 6), y = Ld(t, "width", 640, 100, 1e4) / 2, b = Ld(t, "height", 440, 100, 1e4) / 2;
	for (let e of h) y = Math.max(y, e.w + 2 * Fd), b = Math.max(b, e.h + 2 * Fd);
	for (let e of h) {
		let t = (y - e.w) / 2, n = (b - e.h) / 2;
		if ((t / (_ + Id)) ** 2 + (n / (v + Id)) ** 2 >= 1) continue;
		let r = e.w + 2 * (_ + Id), i = e.h + 2 * (v + Id);
		r * b <= y * i ? y = Math.max(y, r) : b = Math.max(b, i);
	}
	let x = Q(e.title, !1, o, r, 4e3, 1), S = x.height > 0 ? x.height + 12 : 0, C = 2 * y, w = 2 * b, T = s, E = s + S, D = T + y, O = E + b, k = T + C, A = E + w, j = bd(E, O, D, d, u, {
		...vd,
		segments: 4,
		pinEnd: !0
	}), M = bd(T, D, O, d + 100, u, {
		...yd,
		segments: 4,
		pinEnd: !0
	}), N = bd(D, k, O, d + 200, u, {
		...yd,
		segments: 4,
		pinStart: !0
	}), P = xd(D, O, A, C * .03), F = (e, t) => t ? `${X(e[e.length - 2])},${X(e[e.length - 1])}` : `${X(e[0])},${X(e[1])}`, I = /* @__PURE__ */ new Map([
		["complex", `M${X(T)},${X(E)}L${F(j, !1)}${Sd(j)}${Cd(M)}Z`],
		["complicated", `M${F(j, !1)}L${X(k)},${X(E)}L${F(N, !0)}${Cd(N)}${Cd(j)}Z`],
		["chaotic", `M${F(M, !1)}${Sd(M)}${Sd(P)}L${X(T)},${X(A)}Z`],
		["clear", `M${F(N, !1)}${Sd(N)}L${X(k)},${X(A)}L${F(P, !0)}${Cd(P)}Z`]
	]), L = "";
	for (let [e, , , t] of Ed) L += `<path class="pele-cynefin-region" data-id="${e}" d="${I.get(e)}" fill="${Bi(t)}" fill-opacity="0.14"/>`;
	let R = `<g class="pele-cynefin-boundaries" fill="none" stroke="var(--_b)" stroke-dasharray="6 3"><path d="${wd(j)}"/><path d="${wd(M)}"/><path d="${wd(N)}"/><path class="pele-cynefin-cliff" d="${wd(P)}" stroke="var(--_l)" stroke-width="2" stroke-dasharray="none" stroke-linecap="round"/></g>`, z = Td(D, O, _, v), B = `<path d="${z}" fill="var(--_bg)"/><path class="pele-cynefin-region" data-id="confusion" d="${z}" fill="${Bi(Dd)}" fill-opacity="0.18" stroke="var(--_b)" stroke-dasharray="4 2"/>`, V = (e) => {
		let t = e.cy - e.h / 2, n = Z(e.title, e.cx, t + e.title.height / 2, " class=\"pele-label\" font-weight=\"var(--_hw)\"");
		t += e.title.height;
		for (let r of e.subtitles) n += Z(r, e.cx, t + r.height / 2, ` class="pele-cynefin-subtitle" font-size="${i}" font-style="italic" fill="var(--_m)"`), t += r.height;
		t += Pd - Nd;
		for (let r of e.badges) t += Nd, n += `<g class="pele-node${r.overflow ? " pele-cynefin-overflow" : ""}"${r.overflow ? "" : ` data-id="${Y(r.text)}"`}><rect x="${X(e.cx - r.w / 2)}" y="${X(t)}" width="${X(r.w)}" height="${X(r.h)}" fill="var(--_bg)" stroke="var(--_b)"${r.overflow ? " stroke-dasharray=\"3 2\"" : ""}${Ti}/>` + Z(r.label, e.cx, t + r.h / 2, ` class="pele-label" font-size="${a}"${r.overflow ? " fill=\"var(--_m)\"" : ""}`, c) + "</g>", t += r.h;
		return `<g class="pele-cynefin-domain" data-id="${e.name}">${n}</g>`;
	}, H = /* @__PURE__ */ new Map(), U = "";
	Ed.forEach(([e, t, n], r) => {
		let i = h[r];
		i.cx = T + y * (t + .5), i.cy = E + b * (n + .5), H.set(e, i), U += V(i);
	}), g.cx = D, g.cy = O, H.set("confusion", g), U += V(g);
	let ee = (e, t, n) => e === g ? ((t - D) / (_ + 4)) ** 2 + ((n - O) / (v + 4)) ** 2 <= 1 : Math.abs(t - e.cx) <= e.w / 2 + 8 && Math.abs(n - e.cy) <= e.h / 2 + 8, te = "", W = /* @__PURE__ */ new Map();
	for (let t of e.transitions) {
		let e = H.get(t.from), n = H.get(t.to);
		if (!e || !n || e === n) continue;
		let r = t.from < t.to ? `${t.from} ${t.to}` : `${t.to} ${t.from}`, a = W.get(r) ?? 0;
		W.set(r, a + 1);
		let s = n.cx - e.cx, l = n.cy - e.cy, u = Math.hypot(s, l) || 1, d = (e.cx + n.cx) / 2, f = (e.cy + n.cy) / 2, p = -l * (d - D) + s * (f - O) >= 0 ? 1 : -1, m = -l / u * p, h = s / u * p, y = (e !== g && n !== g && Math.abs(s) > 1 && Math.abs(l) > 1 ? 2 * (Math.hypot(_ * m, v * h) + 16) : u * .15) + a * 56, b = d + m * y, x = f + h * y, S = (t) => {
			let r = 1 - t;
			return [r * r * e.cx + 2 * r * t * b + t * t * n.cx, r * r * e.cy + 2 * r * t * x + t * t * n.cy];
		}, C = (e, t, n, r) => {
			for (let i = 0; i < 16; i++) {
				let i = (t + n) / 2;
				ee(e, ...S(i)) === r ? t = i : n = i;
			}
			return (t + n) / 2;
		}, w = 1;
		for (; w <= 48 && ee(e, ...S(w / 48));) w++;
		if (w > 48) continue;
		let E = C(e, (w - 1) / 48, w / 48, !0);
		for (; w <= 48 && !ee(n, ...S(w / 48));) w++;
		let A = w > 48 ? 1 : C(n, (w - 1) / 48, w / 48, !1), [j, M] = S(E), [N, P] = S(A), F = (e, t, n) => (1 - E) * (1 - A) * e + ((1 - E) * A + E * (1 - A)) * t + E * A * n, I = F(e.cx, b, n.cx), L = F(e.cy, x, n.cy), R = Math.hypot(N - I, P - L) || 1, z = (N - I) / R, B = (P - L) / R, V = yi("arrow_point", N, P, z, B, "var(--_l)");
		N -= z * vi("arrow_point"), P -= B * vi("arrow_point");
		let U = "";
		if (t.label) {
			let e = Q(t.label, !1, o, i, Ad), [n, r] = S((E + A) / 2), a = Math.abs(m) * e.width / 2 + Math.abs(h) * e.height / 2 + 6, s = e.width / 2 + 4;
			U = Z(e, Math.min(Math.max(n + m * a, T + s), Math.max(k - s, T + s)), r + h * a, ` class="pele-edge-label" font-size="${i}"`, c);
		}
		te += `<g class="pele-edge" data-id="${t.from}-${t.to}"><path d="M${X(j)},${X(M)}Q${X(I)},${X(L)} ${X(N)},${X(P)}" fill="none" stroke="var(--_l)"/>` + V + U + "</g>";
	}
	let ne = Math.ceil(Math.max(C, x.width) + 2 * s), re = Math.ceil(w + S + 2 * s);
	return {
		svg: Ui("cynefin", ne, re, r, n, e, Z(x, T + C / 2, s + x.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + `<g class="pele-cynefin-regions">${L}</g>` + R + B + U + (te ? `<g class="pele-edges">${te}</g>` : "")),
		width: ne,
		height: re,
		links: []
	};
}
var zd = {
	type: "cynefin",
	parse: (e, t, n) => fd(md(e), n),
	render: Rd
};
function Bd(e) {
	return e === "markdown" || e === "string" || e === "text" ? e : "markdown";
}
var Vd = class {
	type = "er";
	direction = "TB";
	entities = /* @__PURE__ */ new Map();
	relationships = [];
	classes = /* @__PURE__ */ new Map();
	subgraphs = [];
	title;
	accTitle;
	accDescr;
	subgraphLookup = /* @__PURE__ */ new Map();
	claimed = /* @__PURE__ */ new Set();
	addEntity(e, t = "") {
		let n = this.entities.get(e);
		return n === void 0 ? (n = {
			id: `entity-${e}-${this.entities.size}`,
			label: e,
			alias: t,
			attributes: [],
			cssClasses: "default",
			cssStyles: []
		}, this.entities.set(e, n)) : !n.alias && t && (n.alias = t), n;
	}
	addAttributes(e, t) {
		let n = this.addEntity(e);
		for (let e = t.length - 1; e >= 0; e--) {
			let r = t[e];
			r.keys ??= [], r.comment ??= "", n.attributes.push(r);
		}
	}
	addRelationship(e, t, n, r) {
		let i = this.subgraphLookup.has(e) ? e : this.addEntity(e).id, a = this.subgraphLookup.has(n) ? n : this.addEntity(n).id;
		this.relationships.push({
			entityA: i,
			roleA: t,
			entityB: a,
			relSpec: r
		});
	}
	setDirection(e) {
		this.direction = e;
	}
	addCssStyles(e, t) {
		if (t) for (let n of e) {
			let e = this.entities.get(n);
			if (e) for (let n of t) e.cssStyles.push(n);
			let r = this.subgraphLookup.get(n);
			if (r) for (let e of t) r.cssStyles.push(e);
		}
	}
	addClass(e, t) {
		for (let n of e) {
			let e = this.classes.get(n);
			if (e === void 0 && (e = {
				id: n,
				styles: [],
				textStyles: []
			}, this.classes.set(n, e)), t) for (let n of t) n.includes("color") && e.textStyles.push(n.replace("fill", "bgFill")), e.styles.push(n);
		}
	}
	setClass(e, t) {
		for (let n of e) {
			let e = this.entities.get(n);
			if (e) for (let n of t) e.cssClasses += " " + n;
			let r = this.subgraphLookup.get(n);
			if (r) for (let e of t) r.classes.push(e);
		}
	}
	addSubGraph(e, t, n) {
		let r = e.text.trim(), i = /* @__PURE__ */ new Set(), a = [], o;
		for (let e of t.flat()) {
			if (typeof e != "string") {
				e?.stmt === "dir" && (o = e.value);
				continue;
			}
			let t = e.trim();
			t === "" || i.has(t) || (i.add(t), this.claimed.has(e) || a.push(e));
		}
		for (let e of a) this.claimed.add(e);
		let s = {
			id: r,
			nodes: a,
			title: (n.text || "").trim(),
			classes: [],
			cssStyles: [],
			dir: o,
			labelType: Bd(n.type)
		};
		return this.subgraphs.push(s), this.subgraphLookup.set(r, s), r;
	}
	setAccTitle(e) {
		this.accTitle = e.replace(/^\s+/g, "");
	}
	setAccDescription(e) {
		this.accDescr = e.replace(/\n\s+/g, "\n");
	}
}, Hd = /* @__PURE__ */ "$end.INVALID.ER_DIAGRAM.EOF.NEWLINE.COLON.STYLE_SEPARATOR.BLOCK_START.BLOCK_STOP.SQS.SQE.acc_title.acc_title_value.acc_descr.acc_descr_value.acc_descr_multiline_value.END.SUBGRAPH.direction_tb.direction_bt.direction_rl.direction_lr.CLASSDEF.UNICODE_TEXT.STYLE_TEXT.COMMA.CLASS.STYLE.SEMI.NUM.BRKT.ENTITY_NAME.DECIMAL_NUM.ENTITY_ONE.ATTRIBUTE_WORD.ATTRIBUTE_KEY.COMMENT.ZERO_OR_ONE.ZERO_OR_MORE.ONE_OR_MORE.ONLY_ONE.MD_PARENT.NON_IDENTIFYING.IDENTIFYING.WORD.CHAR".split("."), Ud = 1, Wd = 2, Gd = 4, Kd = 8, qd = /* @__PURE__ */ new Uint8Array(128);
for (let e = 0; e < 128; e++) {
	let t = e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e === 95, n = t && (e < 48 || e > 57);
	t && (qd[e] |= Ud | Wd | Kd), n && (qd[e] |= Gd);
}
for (let e of "-*") qd[e.charCodeAt(0)] |= Ud | Wd | Kd;
qd[46] |= Ud | Kd, qd[42] |= Gd;
for (let e of "[](),") qd[e.charCodeAt(0)] |= Kd;
var Jd = /accTitle\s*:\s*/iy, Yd = /accDescr\s*:\s*/iy, Xd = /accDescr\s*\{\s*/iy, Zd = [
	/.*direction\s+TB[^\n]*/iy,
	/.*direction\s+BT[^\n]*/iy,
	/.*direction\s+RL[^\n]*/iy,
	/.*direction\s+LR[^\n]*/iy
], Qd = /direction/gi, $d = /[\n\r\u2028\u2029]/g;
function ef(e, t) {
	return e < 128 ? (qd[e] & t) !== 0 : e >= 192 || e === 181;
}
function tf(e) {
	let t = e.length, n = [], r = [], i = [], a = 0, o = 0, s = -2, c = 0, l = -1, u = -2, d = -1, f = -1, p = -1, m = (t, a, s) => {
		n.push(t), r.push(e.slice(a, s)), i.push(a), o = s;
	}, h = (t, n) => (t.lastIndex = n, t.test(e) ? t.lastIndex : -1), g = (t) => {
		for (let n = 0; n < t.length; n++) {
			let r = t.charCodeAt(n), i = e.charCodeAt(o + n);
			if (i !== r && (r < 97 || r > 122 || (i | 32) !== r)) return !1;
		}
		return !0;
	}, _ = (t) => g(t) && !J(e.charCodeAt(o + t.length)), v = (t) => {
		let n = e.charCodeAt(t);
		return n >= 65 && n <= 90 ? n + 32 : n;
	}, y = (n) => ($d.lastIndex = n, $d.test(e) ? $d.lastIndex - 1 : t), b = (t) => {
		for (; q(e.charCodeAt(t));) t++;
		return t;
	}, x = () => {
		if (s === -1 || s < o && (Qd.lastIndex = o, s = Qd.test(e) ? Qd.lastIndex - 9 : -1, s === -1) || o < c || (l < o && (l = y(o)), s >= l)) return !1;
		for (let e = 0; e < 4; e++) {
			let t = h(Zd[e], o);
			if (t >= 0) return m(18 + e, o, t), !0;
		}
		return c = l, !1;
	}, S = () => {
		let t = e.indexOf("\"", o + 1);
		if (t === -1) {
			m(45, o, o + 1);
			return;
		}
		let n = t > o + 1;
		for (let r = o + 1; n && r < t; r++) {
			let t = e.charCodeAt(r);
			(t === 37 || t === 92 || t === 13 || t === 10 || t === 11 || t === 8) && (n = !1);
		}
		m(n ? 31 : 44, o, t + 1);
	}, C = (t) => {
		let n = e.charCodeAt(o + 1);
		if (n === 43 && (t === 49 || t === 48)) {
			m(t === 49 ? 39 : 38, o, o + 2);
			return;
		}
		let r = b(o + 1);
		if (e.charCodeAt(r) === 46 && q(e.charCodeAt(r + 1))) m(32, o, b(r + 2));
		else {
			if (t === 49) {
				if (G(n)) {
					let t = o + 2;
					for (; G(e.charCodeAt(t));) t++;
					let n = e.charCodeAt(t);
					if (J(n) || n === 34 || n === 39) {
						m(40, o, o + 1);
						return;
					}
				} else if (n === 45 || n === 46) {
					let t = e.charCodeAt(o + 2);
					if (t === 45 || t === 46) {
						m(40, o, o + 1);
						return;
					}
				}
				if (!J(n)) {
					m(33, o, o + 1);
					return;
				}
			}
			m(29, o, r);
		}
	}, w = (t) => {
		let n = e.charCodeAt(o + 1);
		switch (t) {
			case 101:
				if (_("erdiagram")) m(2, o, o + 9);
				else if (_("end")) {
					let t = o + 3;
					for (; G(e.charCodeAt(t));) t++;
					m(16, o, t);
				} else return !1;
				return !0;
			case 115:
				if (_("style")) a = 6, m(27, o, o + 5);
				else if (_("subgraph")) m(17, o, o + 8);
				else return !1;
				return !0;
			case 99:
				if (_("classdef")) a = 6, m(22, o, o + 8);
				else if (_("class")) m(26, o, o + 5);
				else return !1;
				return !0;
			case 111:
				if (_("one or zero")) m(37, o, o + 11);
				else if (_("one or more") || _("one or many")) m(39, o, o + 11);
				else if (_("one")) m(40, o, o + 3);
				else if (_("only one")) m(40, o, o + 8);
				else if (n === 124) m(37, o, o + 2);
				else if (n === 123) m(38, o, o + 2);
				else if (_("optionally to")) m(42, o, o + 13);
				else return !1;
				return !0;
			case 122:
				if (_("zero or one")) m(37, o, o + 11);
				else if (_("zero or more") || _("zero or many")) m(38, o, o + 12);
				else return !1;
				return !0;
			case 109:
				if (g("many(0)")) m(38, o, o + 7);
				else if (g("many(1)")) m(39, o, o + 7);
				else if (_("many")) m(38, o, o + 4);
				else return !1;
				return !0;
			case 116: return _("to") ? (m(43, o, o + 2), !0) : !1;
			case 117: return n !== 46 && n !== 45 && n !== 124 ? !1 : (m(41, o, o + 1), !0);
			case 124:
				if (v(o + 1) === 111 && !J(e.charCodeAt(o + 2))) m(37, o, o + 2);
				else if (n === 124) m(40, o, o + 2);
				else if (n === 123) m(39, o, o + 2);
				else return !1;
				return !0;
			case 125:
				if (v(o + 1) === 111 && !J(e.charCodeAt(o + 2))) m(38, o, o + 2);
				else if (n === 124) m(39, o, o + 2);
				else return !1;
				return !0;
			case 46: return n !== 46 && n !== 45 ? !1 : (m(42, o, o + 2), !0);
			case 45:
				if (n === 45) m(43, o, o + 2);
				else if (n === 46) m(42, o, o + 2);
				else return !1;
				return !0;
		}
		return !1;
	}, T = (t) => {
		let n;
		if ((t === 97 || t === 65) && g("acc")) {
			if ((n = h(Jd, o)) >= 0) {
				a = 3, m(11, o, n);
				return;
			}
			if ((n = h(Yd, o)) >= 0) {
				a = 4, m(13, o, n);
				return;
			}
			if ((n = h(Xd, o)) >= 0) {
				a = 5, o = n;
				return;
			}
		}
		if (!x()) {
			switch (t) {
				case 32:
				case 9:
				case 13:
					n = o + 1;
					for (let t = e.charCodeAt(n); t === 32 || t === 9 || t === 13; t = e.charCodeAt(n)) n++;
					o = n;
					return;
				case 10:
					for (n = o + 1; e.charCodeAt(n) === 10;) n++;
					m(4, o, n);
					return;
				case 34:
					S();
					return;
				case 123:
					a = 1, m(7, o, o + 1);
					return;
				case 35:
					m(30, o, o + 1);
					return;
				case 44:
					m(25, o, o + 1);
					return;
				case 58:
					e.charCodeAt(o + 1) === 58 && e.charCodeAt(o + 2) === 58 ? m(6, o, o + 3) : m(5, o, o + 1);
					return;
				case 91:
					m(9, o, o + 1);
					return;
				case 93:
					m(10, o, o + 1);
					return;
			}
			if (q(t)) {
				C(t);
				return;
			}
			if (!w(t >= 65 && t <= 90 ? t + 32 : t)) {
				if (t >= 128 || (qd[t] & Ud) !== 0) {
					n = o + 1;
					for (let t = e.charCodeAt(n); t >= 128 || (qd[t] & Ud) !== 0; t = e.charCodeAt(n)) n++;
					m(23, o, n);
					return;
				}
				m(45, o, o + 1);
			}
		}
	}, E = () => {
		if (u === -1 || u < o && (u = e.indexOf("~", o), u === -1)) return !1;
		if (p < o) {
			let n = o;
			for (; n < t && !G(e.charCodeAt(n));) n++;
			p = n;
		}
		if (u >= p || (d < o && (d = y(o), f = e.lastIndexOf("~", d - 1)), f <= u)) return !1;
		let n = f + 1;
		for (; n < t && !G(e.charCodeAt(n));) n++;
		return m(34, o, n), !0;
	}, D = (n) => {
		if (G(n)) {
			for (o++; G(e.charCodeAt(o));) o++;
			return;
		}
		let r = n | 32;
		if ((r === 112 || r === 102 || r === 117) && (e.charCodeAt(o + 1) | 32) == 107 && !J(e.charCodeAt(o + 2))) m(35, o, o + 2);
		else if (!E()) {
			if (ef(n, Gd)) {
				let n = o + 1;
				for (; n < t && ef(e.charCodeAt(n), Kd);) n++;
				m(34, o, n);
				return;
			}
			if (n === 96) {
				a = 2, o++;
				return;
			}
			if (n === 34) {
				let t = e.indexOf("\"", o + 1);
				if (t !== -1) {
					m(36, o, t + 1);
					return;
				}
			} else if (n === 125) {
				a = 0, m(8, o, o + 1);
				return;
			}
			m(45, o, o + 1);
		}
	};
	for (; o < t;) {
		let s = e.charCodeAt(o), c;
		switch (a) {
			case 0:
				T(s);
				break;
			case 1:
				D(s);
				break;
			case 2:
				s === 96 ? (a = 1, o++) : (c = e.indexOf("`", o), m(34, o, c === -1 ? t : c));
				break;
			case 3:
			case 4:
				c = e.indexOf("\n", o), m(a === 3 ? 12 : 14, o, c === -1 ? t : c), a = 0;
				break;
			case 5:
				s === 125 ? (a = 0, o++) : (c = e.indexOf("}", o), m(15, o, c === -1 ? t : c));
				break;
			case 6: if (s === 10) {
				for (c = o + 1; e.charCodeAt(c) === 10;) c++;
				a = 0, m(4, o, c);
			} else if (G(s)) for (o++; G(e.charCodeAt(o));) o++;
			else if (s === 58) m(5, o, o + 1);
			else if (s === 44) m(25, o, o + 1);
			else if (s === 35) m(30, o, o + 1);
			else if (s === 59) m(28, o, o + 1);
			else if (s >= 128 || (qd[s] & Wd) !== 0) {
				c = o + 1;
				for (let t = e.charCodeAt(c); t >= 128 || (qd[t] & Wd) !== 0; t = e.charCodeAt(c)) c++;
				m(24, o, c);
			} else return n.push(1), r.push(""), i.push(o), {
				types: n,
				texts: r,
				starts: i
			};
		}
	}
	let O = a === 0 ? 3 : a === 3 ? 12 : a === 4 ? 14 : a === 5 ? 15 : -1;
	return O !== -1 && (n.push(O), r.push(""), i.push(t)), n.push(0), r.push(""), i.push(t), {
		types: n,
		texts: r,
		starts: i
	};
}
var nf = /* @__PURE__ */ new Map([
	[37, "ZERO_OR_ONE"],
	[38, "ZERO_OR_MORE"],
	[39, "ONE_OR_MORE"],
	[40, "ONLY_ONE"],
	[41, "MD_PARENT"]
]), rf = [
	"TB",
	"BT",
	"RL",
	"LR"
], af = "'UNICODE_TEXT', 'NUM', 'ENTITY_NAME', 'DECIMAL_NUM', 'ENTITY_ONE'", of = "'ZERO_OR_ONE', 'ZERO_OR_MORE', 'ONE_OR_MORE', 'ONLY_ONE', 'MD_PARENT'", sf = "'EOF', 'NEWLINE', 'title', 'acc_title', 'acc_descr', 'acc_descr_multiline_value', 'SUBGRAPH', 'direction_tb', 'direction_bt', 'direction_rl', 'direction_lr', 'CLASSDEF', 'CLASS', 'STYLE', " + af;
function cf(e, t) {
	let { types: n, texts: r, starts: a } = tf(e), o = 0, s = (t) => {
		let s = n[o];
		throw s === 1 ? i("er", e, a[o], "", !0) : i("er", e, a[o], `Expecting ${t}, got '${s === 45 ? r[o] : Hd[s]}'`);
	}, c = (e) => (n[o] !== e && s(`'${Hd[e]}'`), r[o++]), l = () => {
		let e = n[o];
		e !== 4 && e !== 28 && e !== 3 && s("'EOF', 'NEWLINE', 'SEMI'"), o++;
	}, u = (e) => e === 23 || e === 31 || e === 29 || e === 32 || e === 33, d = () => {
		let e = n[o];
		u(e) || s(af);
		let t = r[o++];
		return e === 31 ? t.slice(1, -1) : t;
	}, f = () => {
		let e = [];
		for (;;) {
			let t = n[o];
			if (t !== 23 && t !== 24 && s("'UNICODE_TEXT', 'STYLE_TEXT'"), e.push(r[o++]), n[o] !== 25) return e;
			o++;
		}
	}, p = (e) => e === 24 || e === 29 || e === 5 || e === 30, m = () => {
		let e = [];
		for (;;) {
			p(n[o]) || s("'STYLE_TEXT', 'COLON', 'NUM', 'BRKT'");
			let t = r[o++];
			for (; p(n[o]);) t += r[o++];
			if (e.push(t), n[o] !== 25) return e;
			o++;
		}
	}, h = () => {
		let e = nf.get(n[o++]), t = n[o];
		t !== 43 && t !== 42 && s("'NON_IDENTIFYING', 'IDENTIFYING'");
		let r = t === 43 ? "IDENTIFYING" : "NON_IDENTIFYING";
		o++;
		let i = nf.get(n[o]);
		return i === void 0 ? s(of) : (o++, {
			cardA: i,
			relType: r,
			cardB: e
		});
	}, g = () => {
		let e = n[o];
		e !== 44 && e !== 31 && e !== 23 && s("'UNICODE_TEXT', 'ENTITY_NAME', 'WORD'");
		let t = r[o++];
		return e === 23 ? t : t.slice(1, -1);
	}, _ = (e) => n[o] === 45 && r[o] === e, v = () => {
		let e = [];
		do {
			let t = c(34);
			_("?") && (t += r[o++]), n[o] !== 34 && s(t.endsWith("?") ? "'ATTRIBUTE_WORD'" : "'ATTRIBUTE_WORD', '?'");
			let i = {
				type: t,
				name: r[o++]
			};
			if (n[o] === 35) {
				let e = [r[o++]];
				for (; _(",");) o++, e.push(c(35));
				i.keys = e;
			}
			n[o] === 36 && (i.comment = r[o++].slice(1, -1)), e.push(i);
		} while (n[o] !== 8);
		return e.reverse();
	}, y = () => {
		if (n[o] !== 7) return;
		if (o++, n[o] === 8) {
			o++;
			return;
		}
		let e = v();
		return o++, e;
	}, b = () => {
		let e = d(), r = n[o];
		if (r === 9) {
			o++;
			let r = d();
			c(10);
			let i;
			n[o] === 6 && (o++, i = f());
			let a = y();
			return t.addEntity(e, r), a && t.addAttributes(e, a), i && t.setClass([e], i), [e];
		}
		let i;
		if (r === 6 && (o++, i = f(), r = n[o]), nf.has(r)) {
			let r = h(), a = d(), s;
			n[o] === 6 && (o++, s = f()), c(5);
			let l = g();
			return t.addEntity(e), t.addEntity(a), t.addRelationship(e, l, a, r), i && t.setClass([e], i), s && t.setClass([a], s), [e, a];
		}
		let a = y();
		return t.addEntity(e), a && t.addAttributes(e, a), i && t.setClass([e], i), [e];
	};
	c(2);
	let x = [{
		id: "",
		title: "",
		list: []
	}], S = x[0], C = !1;
	for (;;) {
		let e = n[o];
		switch (e) {
			case 4:
				o++;
				break;
			case 3:
				o++, C && s(`'END', ${sf}`);
				return;
			case 16: {
				C || s(sf), o++;
				let e = t.addSubGraph({ text: S.id }, S.list, { text: S.title });
				x.pop(), S = x[x.length - 1], C = x.length > 1, C && S.list.push(e);
				break;
			}
			case 17: {
				o++;
				let e = d(), t = e;
				if (n[o] === 9) {
					for (o++, t = d(); u(n[o]);) t += " " + d();
					c(10);
				}
				l(), S = {
					id: e,
					title: t,
					list: []
				}, x.push(S), C = !0;
				break;
			}
			case 11: {
				o++;
				let e = c(12).trim();
				t.setAccTitle(e), C && S.list.push(e);
				break;
			}
			case 13: {
				o++;
				let e = c(14).trim();
				t.setAccDescription(e), C && S.list.push(e);
				break;
			}
			case 15: {
				let e = r[o++].trim();
				t.setAccDescription(e), C && S.list.push(e);
				break;
			}
			case 18:
			case 19:
			case 20:
			case 21: {
				o++;
				let n = rf[e - 18];
				C ? S.list.push({
					stmt: "dir",
					value: n
				}) : t.setDirection(n);
				break;
			}
			case 22: {
				let e = r[o++], n = f(), i = m();
				l(), t.addClass(n, i), C && S.list.push(e);
				break;
			}
			case 26: {
				let e = r[o++], n = f();
				t.setClass(n, f()), C && S.list.push(e);
				break;
			}
			case 27: {
				let e = r[o++], n = f(), i = m();
				l(), t.addCssStyles(n, i), C && S.list.push(e);
				break;
			}
			default: {
				u(e) || s(C ? `'END', ${sf}` : sf);
				let t = b();
				if (C) for (let e of t) S.list.push(e);
			}
		}
	}
}
var lf = [];
function uf(e) {
	let t = [], n = [], r = e.subgraphs, i = (t) => {
		let n = [];
		for (let r of t) {
			let t = e.classes.get(r);
			if (t !== void 0) {
				for (let e of t.styles) n.push(e.trim());
				for (let e of t.textStyles) n.push(e.trim());
			}
		}
		return n;
	}, a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
	for (let e = r.length - 1; e >= 0; e--) {
		let t = r[e];
		o.add(t.id);
		for (let e of t.nodes) a.set(e, t.id);
	}
	for (let e = r.length - 1; e >= 0; e--) {
		let n = r[e];
		t.push({
			id: n.id,
			label: n.title,
			alias: "",
			attributes: lf,
			isGroup: !0,
			parentId: a.get(n.id),
			cssStyles: n.cssStyles,
			cssCompiledStyles: i(n.classes),
			cssClasses: n.classes.join(" "),
			dir: n.dir,
			labelType: n.labelType
		});
	}
	let s = /* @__PURE__ */ new Map();
	for (let [n, r] of e.entities) o.has(n) ? s.set(r.id, n) : t.push({
		id: r.id,
		label: r.label,
		alias: r.alias,
		attributes: r.attributes,
		isGroup: !1,
		parentId: a.get(n),
		cssStyles: r.cssStyles,
		cssCompiledStyles: i(r.cssClasses.split(" ")),
		cssClasses: r.cssClasses,
		dir: void 0,
		labelType: "markdown"
	});
	return e.relationships.forEach((e, t) => {
		n.push({
			id: `id_${e.entityA}_${e.entityB}_${t}`,
			start: s.get(e.entityA) ?? e.entityA,
			end: s.get(e.entityB) ?? e.entityB,
			label: e.roleA,
			arrowTypeStart: e.relSpec.cardB.toLowerCase(),
			arrowTypeEnd: e.relSpec.cardA.toLowerCase(),
			pattern: e.relSpec.relType === "IDENTIFYING" ? "solid" : "dashed"
		});
	}), {
		nodes: t,
		edges: n
	};
}
var df = 18, ff = 5, pf = 6, mf = 10, hf = 3.5;
function gf(e, t, n, r, i) {
	let a = (e, a) => X(t - r * e - i * a) + "," + X(n - i * e + r * a), o = (e) => `M${a(e, -ff)}L${a(e, ff)}`, s = `M${a(0, -pf)}L${a(mf, 0)}L${a(0, pf)}`, c = (e) => `<circle class="pele-marker" cx="${X(t - r * e)}" cy="${X(n - i * e)}" r="${hf}" fill="var(--_bg)"/>`, l = (e) => `<path class="pele-marker" d="${e}"/>`;
	switch (e) {
		case "only_one": return l(o(6) + o(10));
		case "zero_or_one": return l(o(6)) + c(13.5);
		case "one_or_more": return l(s + o(mf + 3.5));
		case "zero_or_more": return l(s) + c(mf + hf + .5);
		case "md_parent": return `<path class="pele-marker" d="M${a(0, 0)}L${a(6, 4)}L${a(12, 0)}L${a(6, -4)}Z" fill="var(--_bg)"/>`;
	}
	return "";
}
var _f = 48, vf = 20, yf = 64, bf = 20, xf = 28, Sf = 38, Cf = 96, wf = 18, Tf = 12, Ef = 9, Df = 12, Of = 16, kf = 9, Af = 260, jf = 1e6, Mf = [], Nf = 18, Pf = 14, Ff = " fill=\"var(--_s)\" stroke=\"var(--_b)\"";
function If(e, t, n) {
	let r = e.er?.[t];
	return typeof r == "number" && r > 0 ? Math.min(r, 2e3) : n;
}
function Lf(e, t, n, r, i) {
	let a = e.lines;
	if (a.length === 0) return "";
	let o = a.length === 1 && a[0].length === 1 ? a[0][0] : void 0;
	if (o && o.icon === void 0 && o.math === void 0 && o.style === 0) return `<text${r} x="${X(t)}" y="${X(n)}">${nt(o.text)}</text>`;
	let s = vt(e), c = e.size * .35, l = n - c - e.lineHeight / 2, u = "", d = "";
	for (let o = 0; o < a.length; o++) {
		let f = a[o], p = l + $a(e, o);
		if (Qa(f)) {
			d += Z(eo(e, o), t + e.widths[o] / 2, p, r, i);
			continue;
		}
		n = p + c;
		let m = !1;
		for (let e of f) e.icon !== void 0 && (m = !0);
		let h = t, g = !1;
		for (let t of f) {
			if (t.icon !== void 0) {
				let r = e.size * 1.1;
				d += `<svg class="pele-icon" data-icon="${Y(t.icon)}" x="${X(h)}" y="${X(n - e.size * .35 - r / 2)}" width="${X(r)}" height="${X(r)}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${i?.(t.icon) ?? ""}</svg>`;
			} else if (t.text !== "") {
				let e = m || !g ? ` x="${X(h)}" y="${X(n)}"` : "";
				u += `<tspan${e}${_t(t.style & ~s)}>${nt(t.text)}</tspan>`, g = !0;
			}
			h += t.width;
		}
	}
	return `<text${yt(r, s)} xml:space="preserve">${u}</text>${d}`;
}
function Rf(e) {
	let t = hu(e);
	return t === e ? e : t.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function zf(e, t, n) {
	return oo(e.direction) ? ao(n, (r) => Bf(e, t, n, r)) : Bf(e, t, n, !1);
}
function Bf(e, t, n, r) {
	let i = uf(e), a = n.fontSize ?? 16, o = Math.round(a * .875), s = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), c = n.padding ?? 8, l = n.icons, u = /* @__PURE__ */ new Map(), d = [], f = [];
	i.nodes.forEach((e, t) => u.set(e.id, t));
	let m = [], h = [], g = [], _ = /* @__PURE__ */ new Map(), v = [];
	for (let e of i.edges) {
		let t = u.get(e.start), n = u.get(e.end);
		if (t === void 0 || n === void 0) continue;
		let r = Q(e.label, !0, s, o, 200), i;
		if (t === n) {
			i = {
				label: r,
				band: 0,
				at: 0
			};
			let e = _.get(t);
			e ? e.push(i) : _.set(t, [i]);
		}
		v.push(i), g.push(e), h.push(r), m.push({
			src: t,
			dst: n,
			minlen: 1,
			labelW: r.width > 0 ? r.width + 12 : 0,
			labelH: r.height > 0 ? r.height + 4 : 0,
			route: [],
			labelX: 0,
			labelY: 0
		});
	}
	let y = (t) => {
		let n = t;
		for (let e = 0; e < i.nodes.length; e++) {
			let e = i.nodes[n].parentId, t = e === void 0 ? void 0 : u.get(e);
			if (t === void 0) break;
			let r = i.nodes[t].dir;
			if (r) return r === "LR" || r === "RL";
			n = t;
		}
		return e.direction === "LR" || e.direction === "RL";
	};
	for (let e = 0; e < i.nodes.length; e++) {
		let t = i.nodes[e], n = Ii(t.cssStyles.length > 0 ? t.cssCompiledStyles.concat(t.cssStyles) : t.cssCompiledStyles), r = +!!n.bold | (n.italic ? 2 : 0), c = n.fontSize ?? a, l = n.fontSize ?? o, u = n.fontSize ?? Math.round(a * .75), p = t.isGroup ? Q(t.label, !0, s, c, 4e3, r) : Q(t.alias || t.label, !0, s, c, 240, r), m = _.get(e) ?? Mf, h = m.length > 0 && !t.isGroup && y(e), g = {
			node: t,
			style: n,
			label: p,
			w: 0,
			h: 0,
			headH: 0,
			rows: [],
			cols: [],
			rowSize: l,
			keySize: u,
			below: h
		}, v = 0, b = 0;
		for (let e of m) e.band = Math.max(Sf, h ? e.label.width + 12 : e.label.height + 6), b += e.band, v = Math.max(v, h ? e.label.height : e.label.width);
		let x = Math.max(Cf, h ? b + 8 : 0), S;
		if (t.isGroup) S = ii(0, 0), S.isGroup = !0, S.dir = t.dir ? Br(t.dir) : void 0, S.padX = bf, S.padTop = g.label.height > 0 ? g.label.height + 16 : bf, S.padBottom = bf, S.minW = Math.max(g.label.width + 2 * bf - 12, Cf);
		else {
			let e = Math.max(p.height, Math.round(c * 1.5));
			if (t.attributes.length === 0) g.w = Math.max(p.width + 2 * wf, x), g.h = Math.max(e + 2 * Tf, h ? 0 : b + 8);
			else {
				let n = Math.round(l * 1.5), i = [
					0,
					0,
					0,
					0
				];
				for (let e of t.attributes) {
					let t = [
						Q(Rf(e.type), !0, s, l, jf, r),
						Q(Rf(e.name), !0, s, l, jf, r),
						Q(e.keys.join(", "), !1, s, u, jf, r),
						Q(Rf(e.comment), !0, s, l, Af, r)
					], a = n;
					for (let e = 0; e < 4; e++) t[e].width > i[e] && (i[e] = t[e].width), t[e].height > a && (a = t[e].height);
					g.rows.push({
						cells: t,
						h: a + kf
					}), g.h += a + kf;
				}
				let a = 0, o = 0;
				for (let e of i) e !== 0 && (o += e + (a > 0 ? Of : 0), a++);
				g.w = Math.max(o + 2 * Df, p.width + 2 * wf, x);
				let c = a > 0 ? (g.w - o - 2 * Df) / a : 0, d = Df;
				for (let e of i) g.cols.push(d), e > 0 && (d += e + c + Of);
				g.headH = e + 2 * Ef, g.h += g.headH;
			}
			let n = m.length > 0 ? 2 * (df + xf * .75 + 10 + v) : 0;
			S = h ? ii(g.w, g.h + n) : ii(g.w + n, g.h);
		}
		S.seq = d.length, d.push(g), f.push(S);
	}
	i.nodes.forEach((e, t) => {
		f[t].parent = e.parentId === void 0 ? -1 : u.get(e.parentId) ?? -1;
	});
	let b = si(f, m, r ? "TB" : Br(e.direction), {
		nodeSep: If(t, "nodeSpacing", _f),
		edgeSep: vf,
		rankSep: If(t, "rankSpacing", yf),
		portSep: 24
	});
	Hf(m, f, d);
	let x = b.width;
	for (let [e, t] of _) {
		let n = f[e];
		if (!n.isGroup) continue;
		let r = 0;
		for (let e of t) r = Math.max(r, e.label.width);
		x = Math.max(x, n.x + n.w / 2 + df + xf * .75 + 10 + r);
	}
	let S = Xs(e.title, s, a, 4e3), C = S.height > 0 ? S.height + 12 : 0, w = Math.max(x, S.width);
	ri(f, m, c + (w - x) / 2, c + C);
	let T = Math.ceil(w + 2 * c), E = Math.ceil(b.height + C + 2 * c), D = [], O = /* @__PURE__ */ new Map(), k = !1;
	for (let e of f) e.isGroup && (k = !0);
	if (k) for (let e of m) ci(O, e.route);
	let A = "", j = "";
	for (let e = 0; e < d.length; e++) {
		let t = d[e], r = f[e], i = t.node, a = Ri(i.cssClasses.replace(/^default\s?/, ""));
		if (r.isGroup) {
			t.w = r.w, t.h = r.h;
			let e = r.x - r.w / 2, n = r.y - r.h / 2, o = li(r, t.label.width, O, bf);
			A += `<g class="pele-cluster${a}" data-id="${Y(i.id)}"><rect x="${X(e)}" y="${X(n)}" width="${X(r.w)}" height="${X(r.h)}" fill="var(--_a)" fill-opacity="0.5" stroke="var(--_b)"${Ei(t.style.shape)}/>` + Z(t.label, o, n + 8 + t.label.height / 2, ` class="pele-cluster-label" fill="var(--_m)"${t.style.text}`, l) + "</g>";
			continue;
		}
		let o = t.w, s = t.h, c = -o / 2, u = -s / 2, m = t.style.text, h = `x="${X(c)}" y="${X(u)}" width="${X(o)}" height="${X(s)}"`, g = Z(t.label, 0, t.rows.length > 0 ? u + t.headH / 2 : 0, ` class="pele-label"${m}`, l), _ = p(i.alias || i.label);
		if (/ internal-link(?: |$)/.test(a + " ") && g !== "" && n.links !== !1) {
			let e = Rt(_, n), t = nt(_);
			g = `<a class="internal-link"${e ? ` href="${t}"${Bt(n)}` : ""} data-href="${t}">${g}</a>`, D.push({
				id: i.label,
				href: _,
				internal: !0
			});
		}
		let v;
		if (t.rows.length === 0) v = `<rect ${h}${Ei(Ff + t.style.shape)}/>` + g;
		else {
			let e = Math.round(t.rowSize * 1.5), n = t.style.stroke ? nt(t.style.stroke) : "var(--_b)", r = "", i = "", a = u + t.headH;
			for (let n = 0; n < t.rows.length; n++) {
				let s = t.rows[n];
				if (n % 2 == 0) {
					let e = `x="${X(c)}" width="${X(o)}"`;
					n === t.rows.length - 1 ? r += `<rect ${e} y="${X(a)}" height="${X(s.h)}"${Ti}/><rect ${e} y="${X(a)}" height="${X(s.h / 2)}"/>` : r += `<rect ${e} y="${X(a)}" height="${X(s.h)}"/>`;
				}
				let u = a + kf / 2 + e / 2 + t.rowSize * .35, [d, f, p, h] = s.cells;
				i += Lf(d, c + t.cols[0], u, ` class="pele-er-type" fill="var(--_m)"${m}`, l) + Lf(f, c + t.cols[1], u, ` class="pele-er-name"${m}`, l) + Lf(p, c + t.cols[2], u, ` class="pele-er-keys" font-size="${t.keySize}" fill="var(--_m)"${m}`, l) + Lf(h, c + t.cols[3], u, ` class="pele-er-comment" fill="var(--_m)"${m}`, l), a += s.h;
			}
			let s = X(u + t.headH);
			v = `<rect ${h}${Ei(Ff + t.style.shape)}/><g class="pele-er-stripes" fill="var(--_bg)"${t.style.shape.includes("fill:") ? " opacity=\"0.6\"" : ""}>${r}</g><path class="pele-er-divider" d="M${X(c)},${s}H${X(c + o)}" stroke="${n}"/><rect ${h} fill="none" stroke="var(--_b)"${Ei(t.style.line)}/>` + g + `<g class="pele-er-attributes" font-size="${t.rowSize}">${i}</g>`;
		}
		j += `<g class="pele-node pele-entity${a}" data-id="${Y(i.label)}" transform="translate(${X(r.x)},${X(r.y)})">${v}</g>`;
	}
	for (let [e, t] of _) {
		let n = d[e], r = 0;
		for (let e of t) r += e.band;
		let i = Math.min(1, Math.max((n.below ? n.w : n.h) - 8, 0) / r), a = -r * i / 2;
		for (let e of t) e.band *= i, e.at = a + e.band / 2, a += e.band;
	}
	let M = "", N = "";
	for (let e = 0; e < m.length; e++) {
		let t = m[e], n = g[e], r = h[e], i, a, o, s = v[e];
		if (s) {
			let e = f[t.src], c = d[t.src], l = Math.max(Math.min(s.band / 2 - 6, 13), 1), u = df + xf * .75 + 6;
			if (c.below) {
				let d = e.x + s.at, f = e.y + c.h / 2, p = X(f + df), m = X(f + df + xf);
				i = `M${X(d - l)},${X(f)}V${p}C${X(d - l)},${m} ${X(d + l)},${m} ${X(d + l)},${p}V${X(f)}`, a = gf(n.arrowTypeStart, d - l, f, 0, -1), o = gf(n.arrowTypeEnd, d + l, f, 0, -1), t.labelX = d, t.labelY = f + u + r.height / 2;
			} else {
				let d = e.x + c.w / 2, f = e.y + s.at, p = X(d + df), m = X(d + df + xf);
				i = `M${X(d)},${X(f - l)}H${p}C${m},${X(f - l)} ${m},${X(f + l)} ${p},${X(f + l)}H${X(d)}`, a = gf(n.arrowTypeStart, d, f - l, -1, 0), o = gf(n.arrowTypeEnd, d, f + l, -1, 0), t.labelX = d + u + r.width / 2, t.labelY = f;
			}
		} else {
			let e = Vf(t.route);
			if (e.length < 6) continue;
			Uf(e, 0, d[t.src], f[t.src]), Uf(e, e.length - 3, d[t.dst], f[t.dst]);
			let r = Math.abs(e[e.length - 3] - e[0]), s = Math.abs(e[e.length - 2] - e[1]), c = e.length === 6 && (r < .01 || s < .01 || Math.hypot(r, s) <= 3 * df) ? 0 : df, l = _i(e, void 0, c, c);
			i = c > 0 ? `M${X(l.sx)},${X(l.sy)}L${l.d.slice(1)}L${X(l.ex)},${X(l.ey)}` : l.d, a = gf(n.arrowTypeStart, l.sx, l.sy, l.sdx, l.sdy), o = gf(n.arrowTypeEnd, l.ex, l.ey, l.edx, l.edy);
		}
		let c = n.pattern === "dashed";
		if (M += `<g class="pele-edge pele-er-${c ? "non-identifying" : "identifying"}" data-id="${Y(n.id)}"><path d="${i}"${c ? " stroke-dasharray=\"4 3\"" : ""}/>` + a + o + "</g>", r.width > 0) {
			let e = t.labelX, i = t.labelY;
			N += bi(n.id, r, e, i, "", l);
		}
	}
	return {
		svg: Ui("er", T, E, a, n, e, Z(S, T / 2, c + S.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + (A ? `<g class="pele-clusters">${A}</g>` : "") + (M ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round">${M}</g>` : "") + (N ? `<g class="pele-edge-labels" font-size="${o}">${N}</g>` : "") + `<g class="pele-nodes">${j}</g>`),
		width: T,
		height: E,
		links: D
	};
}
function Vf(e) {
	let t = e.slice(0, 3);
	for (let n = 3; n < e.length; n += 3) {
		let r = t.length - 3, i = (i) => Math.abs(t[r + i] - e[n + i]) < .01 && Math.abs(e[n + i] - e[n + 3 + i]) < .01;
		n + 3 < e.length && (i(0) || i(1)) || t.push(e[n], e[n + 1], e[n + 2]);
	}
	return t;
}
function Hf(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i = (e, n, i, a) => {
		let o = t[e], s = n[i] - o.x, c = n[i + 1] - o.y, l;
		if (Math.abs(Math.abs(c) - o.h / 2) < .5) l = c < 0 ? 0 : 2;
		else if (Math.abs(Math.abs(s) - o.w / 2) < .5) l = s < 0 ? 3 : 1;
		else return;
		let u = e * 4 + l, d = {
			route: n,
			at: i,
			toward: n[a + (l & 1 ? 1 : 0)]
		}, f = r.get(u);
		f ? f.push(d) : r.set(u, [d]);
	};
	for (let t of e) {
		let e = t.route.length - 3;
		t.src === t.dst || e < 3 || (i(t.src, t.route, 0, 3), i(t.dst, t.route, e, e - 3));
	}
	for (let [e, i] of r) {
		if (i.length < 2) continue;
		let r = e >> 2, a = (e & 1) == 1, o = t[r].isGroup ? t[r] : n[r], s = a ? o.h : o.w, c = Math.max(Math.min(Nf, (s - 2 * Pf) / (i.length - 1)), 0), l = a ? t[r].y : t[r].x;
		i.sort((e, t) => e.toward - t.toward);
		for (let e = 0; e < i.length; e++) i[e].route[i[e].at + +!!a] = l + (e - (i.length - 1) / 2) * c;
	}
}
function Uf(e, t, n, r) {
	if (r.isGroup) return;
	let i = e[t] - r.x, a = e[t + 1] - r.y;
	r.w !== n.w && Math.abs(Math.abs(i) - r.w / 2) < .5 && (e[t] -= Math.sign(i) * (r.w - n.w) / 2), r.h !== n.h && Math.abs(Math.abs(a) - r.h / 2) < .5 && (e[t + 1] -= Math.sign(a) * (r.h - n.h) / 2);
}
var Wf = {
	type: "er",
	math: !0,
	parse(e, t, n) {
		let r = new Vd();
		return n && (r.title = n), cf(e, r), r;
	},
	render: zf
}, Gf = /* @__PURE__ */ new Map([
	["ui", "ui"],
	["pcr", "processor"],
	["processor", "processor"],
	["rmo", "readmodel"],
	["readmodel", "readmodel"],
	["cmd", "command"],
	["command", "command"],
	["evt", "event"],
	["event", "event"]
]), Kf = /* @__PURE__ */ new Map([
	["trigger", [
		0,
		"UI/Automation",
		"UI/A: "
	]],
	["state", [
		100,
		"Command/Read Model",
		"C/RM: "
	]],
	["stream", [
		200,
		"Events",
		"Stream: "
	]]
]);
function qf(e) {
	return e === "ui" || e === "processor" ? "trigger" : e === "event" ? "stream" : "state";
}
function Jf(e) {
	let t = e.indexOf("{"), n = e.lastIndexOf("}"), r = (t !== -1 && n > t ? e.slice(t + 1, n) : t === -1 && e.length >= 2 ? e.slice(1, -1) : "").replace(/\r/g, "").split("\n");
	for (; r.length > 0 && r[0].trim() === "";) r.shift();
	for (; r.length > 0 && r[r.length - 1].trim() === "";) r.pop();
	let i = 1 / 0;
	for (let e of r) e.trim() !== "" && (i = Math.min(i, e.length - e.trimStart().length));
	return r.map((e) => e.slice(Math.min(i, e.length)).trimEnd()).join("\n");
}
function Yf(e, t) {
	let i = /* @__PURE__ */ new Set();
	for (let t of e.frames) {
		if (i.has(t.name)) {
			let i = r(e.$source, t.$offset).line;
			throw new n(`Duplicate event modeling frame ID "${t.name}" on line ${i}`, "semantic", {
				type: "eventmodeling",
				line: i
			});
		}
		i.add(t.name);
	}
	let a = /* @__PURE__ */ new Map();
	for (let t of e.dataEntities) a.has(t.name) || a.set(t.name, t.dataBlockValue);
	let o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), c = (e, t) => {
		let n = qf(e), r = t === void 0 ? n : `${n} ${t}`, i = o.get(r);
		if (!i) {
			let [e, a, c] = Kf.get(n), l = e;
			t !== void 0 && (l = s.get(n) ?? e + 1, s.set(n, l + 1)), i = {
				index: l,
				label: t === void 0 ? a : c + t,
				group: n,
				namespace: t
			}, o.set(r, i);
		}
		return i;
	}, l = [], u = /* @__PURE__ */ new Map(), d = [];
	e.frames.forEach((e, t) => {
		let n = e.entityIdentifier.split("."), r = n.length === 2 ? n[0] : void 0, i = Gf.get(e.modelEntityType) ?? "event", o = e.dataInlineValue === void 0 ? void 0 : Jf(e.dataInlineValue);
		if (e.dataReference) {
			let t = a.get(e.dataReference.$refText);
			t !== void 0 && (o = Jf(t));
		}
		let s = {
			id: e.name,
			kind: i,
			entity: e.entityIdentifier,
			name: n.length === 2 ? n[1] : e.entityIdentifier,
			namespace: r,
			reset: e.$type === "EmResetFrame",
			lane: c(i, r),
			data: o,
			dataType: e.dataType
		};
		if (l.push(s), u.set(s.id, s), e.sourceFrames.length > 0) {
			let t = new Set(e.sourceFrames.map((e) => e.$refText));
			for (let e of l) t.has(e.id) && d.push({
				source: e,
				target: s
			});
		} else if (t > 0 && !s.reset) {
			for (let e = t - 1; e >= 0; e--) if (l[e].lane !== s.lane) {
				d.push({
					source: l[e],
					target: s
				});
				break;
			}
		}
	});
	let f = (e) => e.map((e) => e.entityIdentifier.$refText);
	return {
		type: "eventmodeling",
		title: e.title && $o(e.title) || t,
		accTitle: e.accTitle ? es(e.accTitle).replace(/^\s+/g, "") : void 0,
		accDescr: e.accDescr ? ts(e.accDescr).replace(/\n\s+/g, "\n") : void 0,
		boxes: l,
		lanes: [...o.values()].sort((e, t) => e.index - t.index),
		relations: d,
		notes: e.noteEntities.map((e) => ({
			frame: e.sourceFrame.$refText,
			text: Jf(e.dataBlockValue),
			dataType: e.dataType
		})),
		specifications: e.gwtEntities.map((e) => ({
			frame: e.sourceFrame.$refText,
			given: f(e.givenStatements),
			when: f(e.whenStatements),
			then: f(e.thenStatements)
		})),
		entities: e.modelEntities.map((e) => e.name)
	};
}
var Xf = /[\t ]*accDescr(?:[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)|\s*({))/y;
function Zf() {
	let e = !1;
	return (t, n) => {
		Xf.lastIndex = n;
		let r = Xf.exec(t);
		if (r === null) return -1;
		let i = Xf.lastIndex;
		if (r[1] === void 0) return i;
		if (e) return -1;
		let a = t.indexOf("}", i);
		return e = a === -1, a + 1 || -1;
	};
}
function Qf(e = "ACC_DESCR") {
	return {
		...zo,
		name: e,
		scanner: Zf
	};
}
var $f = {
	name: "EM_ID",
	pattern: /[_a-zA-Z][\w_]*/y
}, ep = (e) => ({
	name: e,
	pattern: e,
	longer: [$f]
}), tp = (e) => ({
	name: e,
	pattern: e
}), np = [
	"resetframe",
	"readmodel",
	"processor",
	"timeframe",
	"command",
	"entity",
	"event",
	"jsobj",
	"figma",
	"given",
	"json",
	"salt",
	"html",
	"text",
	"data",
	"note",
	"when",
	"then",
	"rmo",
	"cmd",
	"evt",
	"pcr",
	"uri"
], rp = [
	{
		...Jo("eventmodeling"),
		longer: [$f]
	},
	...np.map(ep),
	tp("->>"),
	ep("gwt"),
	ep("ui"),
	ep("md"),
	ep("tf"),
	tp("[["),
	tp("]]"),
	ep("rf"),
	tp("`"),
	tp("."),
	$f,
	{
		name: "EM_FID",
		pattern: /\d{1,3}/y
	},
	{
		name: "EM_DATA_INLINE",
		pattern: /\{(.*)\}|"(.*)"|'(.*)'/y
	},
	{
		name: "EM_DATA_BLOCK",
		pattern: /\{[\t ]*\r?\n(?:[\S\s]*?\r?\n)?\}(?:\r?\n|(?!\S))/y
	},
	Qf("EM_ACC_DESCR"),
	{
		...Bo,
		name: "EM_ACC_TITLE"
	},
	{
		...Vo,
		name: "EM_TITLE"
	},
	{
		name: "EM_WS",
		pattern: /\s+/y,
		hidden: !0
	},
	{
		...Go,
		name: "EM_YAML"
	},
	{
		...Ko,
		name: "EM_DIRECTIVE"
	},
	{
		...qo,
		name: "EM_SINGLE_LINE_COMMENT"
	},
	{
		name: "EM_ML_COMMENT",
		pattern: /\/\*[\s\S]*?\*\//y,
		hidden: !0
	},
	{
		name: "EM_SL_COMMENT",
		pattern: /\/\/[^\n\r]*/y,
		hidden: !0
	}
], ip = (e) => rp.findIndex((t) => t.name === e), ap = (e) => new Set(e.map(ip)), op = {
	keyword: 0,
	arrow: ip("->>"),
	open: ip("[["),
	close: ip("]]"),
	tick: ip("`"),
	dot: ip("."),
	id: ip("EM_ID"),
	frameId: ip("EM_FID"),
	inline: ip("EM_DATA_INLINE"),
	block: ip("EM_DATA_BLOCK"),
	accDescr: ip("EM_ACC_DESCR"),
	accTitle: ip("EM_ACC_TITLE"),
	title: ip("EM_TITLE"),
	entity: ip("entity"),
	data: ip("data"),
	note: ip("note"),
	gwt: ip("gwt"),
	given: ip("given"),
	when: ip("when"),
	then: ip("then")
}, sp = ap(["tf", "timeframe"]), cp = ap(["rf", "resetframe"]), lp = ap([
	"rmo",
	"readmodel",
	"ui",
	"cmd",
	"command",
	"evt",
	"event",
	"pcr",
	"processor"
]), up = ap([
	"json",
	"jsobj",
	"figma",
	"salt",
	"uri",
	"md",
	"html",
	"text"
]);
function dp(e) {
	let t = new is(Ro(e, rp, "eventmodeling"), rp, "eventmodeling"), n = {
		$type: "EventModel",
		modelEntities: [],
		frames: [],
		dataEntities: [],
		noteEntities: [],
		gwtEntities: [],
		$source: e
	}, r = (e) => t.kinds[t.i] === e, i = (e, n) => e.has(t.kinds[t.i]) ? t.take() : t.fail(n), a = () => {
		let e = t.expect(op.id);
		for (; t.accept(op.dot);) e += "." + t.expect(op.id);
		return e;
	}, o = () => {
		if (!t.accept(op.tick)) return;
		let e = i(up, "a data type");
		return t.expect(op.tick), e;
	}, s = () => {
		let e = [];
		do
			i(lp, "an entity type"), e.push({
				$type: "EmGwtStatement",
				entityIdentifier: { $refText: t.expect(op.id) }
			});
		while (lp.has(t.kinds[t.i]));
		return e;
	};
	for (t.expect(op.keyword); !r(-1);) {
		let e = t.kinds[t.i];
		if (e === op.accDescr) n.accDescr = t.take();
		else if (e === op.accTitle) n.accTitle = t.take();
		else if (e === op.title) n.title = t.take();
		else if (e === op.entity) t.i++, n.modelEntities.push({
			$type: "EmModelEntity",
			name: a()
		});
		else if (sp.has(e) || cp.has(e)) {
			let s = {
				$type: sp.has(e) ? "EmTimeFrame" : "EmResetFrame",
				name: "",
				modelEntityType: "",
				entityIdentifier: "",
				sourceFrames: [],
				$offset: t.tokens.starts[t.i]
			};
			for (t.i++, s.name = t.expect(op.frameId), s.modelEntityType = i(lp, "an entity type"), s.entityIdentifier = a(); t.accept(op.arrow);) s.sourceFrames.push({ $refText: t.expect(op.frameId) });
			if (t.accept(op.open) && (s.dataReference = { $refText: t.expect(op.id) }, t.expect(op.close)), r(op.tick) || r(op.inline)) {
				let e = o();
				e !== void 0 && (s.dataType = e), s.dataInlineValue = t.expect(op.inline);
			}
			n.frames.push(s);
		} else if (e === op.data) {
			t.i++;
			let e = {
				$type: "EmDataEntity",
				name: t.expect(op.id),
				dataBlockValue: ""
			}, r = o();
			r !== void 0 && (e.dataType = r), e.dataBlockValue = t.expect(op.block), n.dataEntities.push(e);
		} else if (e === op.note) {
			t.i++;
			let e = {
				$type: "EmNoteEntity",
				sourceFrame: { $refText: t.expect(op.frameId) },
				dataBlockValue: ""
			}, r = o();
			r !== void 0 && (e.dataType = r), e.dataBlockValue = t.expect(op.block), n.noteEntities.push(e);
		} else if (e === op.gwt) {
			t.i++;
			let e = {
				$type: "EmGwt",
				sourceFrame: { $refText: t.expect(op.frameId) },
				givenStatements: [],
				whenStatements: [],
				thenStatements: []
			};
			t.expect(op.given), e.givenStatements = s(), t.accept(op.when) && (e.whenStatements = s()), t.expect(op.then), e.thenStatements = s(), n.gwtEntities.push(e);
		} else t.fail("a frame, an entity, a data block, a note, or a specification");
	}
	return n;
}
var fp = /* @__PURE__ */ new Map([
	["command", 0],
	["event", 1],
	["readmodel", 2],
	["processor", 6]
]), pp = 12, mp = 10, hp = 96, gp = 16, _p = 80, vp = 12, yp = 8, bp = 48, xp = 80, Sp = 8;
function Cp(e, t) {
	let n = [];
	for (let r of p(e).split("\n")) {
		let e = r.length <= t ? void 0 : Array.from(r);
		if (e === void 0 || e.length <= t) n.push(r);
		else for (let r = 0; r < e.length; r += t) n.push(e.slice(r, r + t).join(""));
	}
	return n;
}
function wp(e, t, n, r, i) {
	let a = "";
	for (let i = 0; i < e.length; i++) e[i] !== "" && (a += `<tspan x="${X(t)}" y="${X(n + i * r)}">${nt(e[i])}</tspan>`);
	return a === "" ? "" : `<text${i} xml:space="preserve">${a}</text>`;
}
function Tp(e, t, n) {
	return ao(n, (r) => Ep(e, t, n, r));
}
function Ep(e, t, n, r) {
	if (r) return Ap(e, n);
	let i = n.fontSize ?? 16, a = Math.round(i * .875), o = Math.round(i * .8125), s = Math.round(i * .75), c = Math.round(s * 1.4), l = Math.round(o * 1.5), u = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), d = n.padding ?? 8, f = (e, t, n) => {
		let r = 0;
		for (let i of e) r = Math.max(r, u.width(i, t, n));
		return r;
	}, p = /* @__PURE__ */ new Map(), m = 0;
	for (let t of e.lanes) {
		let e = Q(t.label, !1, u, o, 4e3, 1);
		m = Math.max(m, e.width), p.set(t, {
			lane: t,
			label: e,
			right: -1 / 0,
			y: 0,
			h: 0
		});
	}
	m += 2 * vp;
	let h = [], g = /* @__PURE__ */ new Map(), _;
	for (let t of e.boxes) {
		let e = p.get(t.lane), n = Q(t.name, !1, u, a, 4e3, 1), r = t.data ? Cp(t.data, bp) : [], i = Math.max(hp, Math.max(n.width, f(r, s, 4)) + 2 * pp), o = 2 * mp + n.height + (r.length > 0 ? 6 + r.length * c : 0), l = 0;
		if (_) {
			let n = _.x + Math.max(_.w / 2, _.w - _p);
			l = _.box.lane === t.lane ? e.right + gp : Math.max(n, e.right + gp);
		}
		let d = {
			box: t,
			name: n,
			data: r,
			x: l,
			y: 0,
			w: i,
			h: o
		};
		e.right = l + i, e.h = Math.max(e.h, o), h.push(d), g.set(t, d), _ = d;
	}
	let v = 0;
	for (let e of h) v = Math.max(v, e.x + e.w);
	let y = m + v + vp, b = Q(e.title, !1, u, i, 4e3, 1), x = b.height > 0 ? b.height + 12 : 0, S = d, C = d + x, w = C, T = "";
	for (let e of p.values()) e.y = w, e.h += 2 * vp, T += `<g class="pele-cluster pele-em-lane" data-id="${Y(e.lane.label)}"><rect x="${X(S)}" y="${X(w)}" width="${X(y)}" height="${X(e.h)}" fill="var(--_s)"${Ti}/>` + Z(e.label, S + vp + e.label.width / 2, w + e.h / 2, ` class="pele-cluster-label" font-size="${o}" font-weight="var(--_hw)" fill="var(--_m)"`) + "</g>", w += e.h + yp;
	let E = p.size > 0 ? w - yp : C, D = "";
	for (let e of h) {
		let t = p.get(e.box.lane);
		e.x += S + m, e.y = t.y + (t.h - e.h) / 2;
		let n = fp.get(e.box.kind), r = `x="${X(e.x)}" y="${X(e.y)}" width="${X(e.w)}" height="${X(e.h)}"`, i = n === void 0 ? `<rect ${r} fill="var(--_bg)" stroke="var(--_b)"${Ti}/>` : `<rect ${r} fill="var(--_bg)"${Ti}/><rect ${r} fill="${Bi(n)}" fill-opacity="0.22" stroke="${Bi(n)}"${Ti}/>`, o = e.y + mp + e.name.height / 2, l = Z(e.name, e.x + e.w / 2, o, ` class="pele-label" font-size="${a}" font-weight="var(--_hw)"`) + wp(e.data, e.x + pp, e.y + mp + e.name.height + 6 + c / 2 + s * .35, c, ` class="pele-em-data" font-family="${Ci}" font-size="${s}"`);
		D += `<g class="pele-node pele-em-${e.box.kind}${e.box.reset ? " pele-em-reset" : ""}" data-id="${Y(e.box.id)}">${i}${l}</g>`;
	}
	let O = "", k = vi("arrow_point");
	for (let t of e.relations) {
		let e = g.get(t.source), n = g.get(t.target);
		if (!e || !n || e === n) continue;
		let r, i;
		if (e.box.lane === n.box.lane) {
			let t = n.x >= e.x, a = t ? e.x + e.w : e.x, o = t ? n.x : n.x + n.w, s = e.y + e.h / 2, c = n.y + n.h / 2, l = o >= a ? 1 : -1;
			r = `M${X(a)},${X(s)}L${X(o - l * k)},${X(c)}`, i = yi("arrow_point", o, c, l, 0, "var(--_l)");
		} else {
			let t = n.y > e.y, a = Math.max(e.x, n.x), o = Math.min(e.x + e.w, n.x + n.w), s = (e) => Math.min(24, e / 4), c = o - a >= 16 ? (a + o) / 2 : n.x > e.x ? e.x + e.w - s(e.w) : e.x + s(e.w), l = o - a >= 16 ? c : n.x > e.x ? n.x + s(n.w) : n.x + n.w - s(n.w), u = t ? e.y + e.h : e.y, d = t ? n.y : n.y + n.h, f = t ? 1 : -1, p = d - f * k, m = (u + p) / 2;
			r = c === l ? `M${X(c)},${X(u)}V${X(p)}` : `M${X(c)},${X(u)}C${X(c)},${X(m)} ${X(l)},${X(m)} ${X(l)},${X(p)}`, i = yi("arrow_point", l, d, 0, f, "var(--_l)");
		}
		O += `<g class="pele-edge" data-id="${Y(t.source.id)}-${Y(t.target.id)}"><path d="${r}" fill="none" stroke="var(--_l)"/>${i}</g>`;
	}
	let A = /* @__PURE__ */ new Map();
	for (let t of e.boxes) A.set(t.id, t.name);
	let j = "", M = 0, N = (e, t, n, r) => {
		let i = Q(`${t} · ${n}${A.has(n) ? " " + A.get(n) : ""}`, !1, u, o, 4e3, 1), a = Math.max(i.width, f(r, o, 0)) + 2 * pp, s = 2 * mp + i.height + r.length * l, c = E + (j === "" && p.size === 0 ? 0 : Sp);
		j += `<g class="pele-em-${e}" data-id="${Y(n)}"><rect x="${X(S)}" y="${X(c)}" width="${X(a)}" height="${X(s)}" fill="var(--_bg)" stroke="var(--_b)"${Ti}/>` + Z(i, S + pp + i.width / 2, c + mp + i.height / 2, ` font-size="${o}" font-weight="var(--_hw)"`) + wp(r, S + pp, c + mp + i.height + l / 2 + o * .35, l, ` font-size="${o}"`) + "</g>", E = c + s, M = Math.max(M, a);
	};
	for (let t of e.notes) N("note", "Note", t.frame, Cp(t.text, xp));
	for (let t of e.specifications) {
		let e = [`Given  ${t.given.join(", ")}`];
		t.when.length > 0 && e.push(`When  ${t.when.join(", ")}`), e.push(`Then  ${t.then.join(", ")}`), N("specification", "Given / When / Then", t.frame, e.flatMap((e) => Cp(e, xp)));
	}
	let P = Math.max(p.size > 0 ? y : 0, M, b.width), F = Math.ceil(P + 2 * d), I = Math.ceil(E + d);
	return {
		svg: Ui("eventmodeling", F, I, i, n, e, Z(b, F / 2, d + b.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + T + O + D + j),
		width: F,
		height: I,
		links: []
	};
}
var Dp = 8, Op = 120, kp = 20;
function Ap(e, t) {
	let n = t.fontSize ?? 16, r = Math.round(n * .875), i = Math.round(n * .75), a = t.padding ?? 8, o = t.measurer ?? Be(t.fontFamily, t.fontFamilyMono), s = Math.max(160, (t.maxWidth ?? 320) - 2 * a), c = new Map(e.boxes.map((e, t) => [e, t])), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Set();
	for (let t of e.relations) {
		let n = c.get(t.source), r = c.get(t.target);
		if (n === void 0 || r === void 0 || n === r) continue;
		if (Math.abs(n - r) < 2) {
			u.add(e.boxes[Math.max(n, r)]);
			continue;
		}
		let i = l.get(t.target);
		i ? (i[0] = Math.min(i[0], n), i[1] = Math.max(i[1], n)) : l.set(t.target, [Math.min(n, r), Math.max(n, r)]);
	}
	let d = /* @__PURE__ */ new Map(), f = [];
	for (let [e, [t, n]] of [...l].sort((e, t) => e[1][0] - t[1][0])) {
		let r = f.findIndex((e) => e < t);
		r < 0 && (r = f.length), f[r] = n, d.set(e, r);
	}
	let m = 24 + Dp * Math.max(0, f.length - 1), h = Math.max(Op, s - m), g = h - 2 * pp, _ = Q(e.title, !1, o, n, s, 1), v = a + (_.height ? _.height + 12 : 0), y = a + _.height, b = Math.max(_.width, h + m), x = "", S = "", C = "", w = /* @__PURE__ */ new Map(), T = (e, t, n = 0) => ul(p(e), o, t, g, n);
	e.boxes.forEach((e, t) => {
		let n = u.has(e) ? g - kp : g, s = dl(Q(e.lane.label, !1, o, r, n, 1), o, n), c = Q(e.name, !1, o, r, g - 36, 1), l = e.data ? T(e.data, i, 4) : void 0, d = Math.max(h, s.width + 2 * pp, c.width + 2 * pp + 36, (l?.width ?? 0) + 2 * pp), f = s.height + 12, p = 2 * mp + c.height + (l ? l.height + 6 : 0), _ = fp.get(e.kind), S = v + f, C = `x="${X(a)}" y="${X(S)}" width="${X(d)}" height="${X(p)}"`;
		x += `<g class="pele-cluster pele-em-lane" data-id="${Y(e.lane.label)}">` + fl(s, a + pp, v, ` class="pele-cluster-label" font-size="${r}" font-weight="var(--_hw)" fill="var(--_m)"`) + `<g class="pele-node pele-em-${e.kind}${e.reset ? " pele-em-reset" : ""}" data-id="${Y(e.id)}"><rect ${C} fill="var(--_bg)" stroke="var(--_b)"${Ti}/>` + (_ === void 0 ? "" : `<rect ${C} fill="${Bi(_)}" fill-opacity="0.22" stroke="${Bi(_)}"${Ti}/>`) + Z(c, a + pp + c.width / 2, S + mp + c.height / 2, ` class="pele-label" font-size="${r}" font-weight="var(--_hw)"`) + `<text class="pele-em-frame" x="${X(a + d - pp)}" y="${X(S + mp + r)}" text-anchor="end" font-size="${i}" fill="var(--_m)">${nt(e.id)}</text>` + (l ? wp(l.lines.map((e) => e.map((e) => e.text).join("")), a + pp, S + mp + c.height + 6 + l.lineHeight / 2 + i * .35, l.lineHeight, ` class="pele-em-data" font-family="${Ci}" font-size="${i}"`) : "") + "</g></g>", w.set(e, {
			y: S,
			h: p,
			w: d,
			index: t,
			lane: s.width
		}), b = Math.max(b, d + m), y = S + p, v = y + 28;
	});
	for (let t of e.relations) {
		let e = w.get(t.source), n = w.get(t.target);
		if (!e || !n || e === n) continue;
		let r = n.y > e.y, i = r ? 1 : -1, o = r ? e.y + e.h : e.y, s = r ? n.y : n.y + n.h, c, l;
		if (Math.abs(e.index - n.index) === 1) {
			let t = a + Math.max(Math.min(e.w, n.w) / 2, pp + (r ? n : e).lane + 16);
			c = `M${X(t)},${X(o)}V${X(s - i * vi("arrow_point"))}`, l = yi("arrow_point", t, s, 0, i, "var(--_l)");
		} else {
			let r = a + b - m + 12 + Dp * (d.get(t.target) ?? 0), i = e.y + e.h / 2 - 5, o = n.y + n.h / 2 + 5;
			c = `M${X(a + e.w)},${X(i)}H${X(r)}V${X(o)}H${X(a + n.w + vi("arrow_point"))}`, l = yi("arrow_point", a + n.w, o, -1, 0, "var(--_l)");
		}
		S += `<g class="pele-edge" data-id="${Y(t.source.id)}-${Y(t.target.id)}"><path d="${c}" fill="none" stroke="var(--_l)"/>${l}</g>`;
	}
	let E = new Map(e.boxes.map((e) => [e.id, e.name])), D = (e, t, n, i) => {
		let s = Q(`${t} · ${n}${E.has(n) ? " " + E.get(n) : ""}`, !1, o, r, g, 1), c = T(i, r), l = Math.max(h, s.width + 2 * pp, c.width + 2 * pp), u = 2 * mp + s.height + c.height;
		C += `<g class="pele-em-${e}" data-id="${Y(n)}"><rect x="${X(a)}" y="${X(v)}" width="${X(l)}" height="${X(u)}" fill="var(--_bg)" stroke="var(--_b)"${Ti}/>` + Z(s, a + pp + s.width / 2, v + mp + s.height / 2, ` font-size="${r}" font-weight="var(--_hw)"`) + wp(c.lines.map((e) => e.map((e) => e.text).join("")), a + pp, v + mp + s.height + c.lineHeight / 2 + r * .35, c.lineHeight, ` font-size="${r}"`) + "</g>", y = v + u, v = y + Sp, b = Math.max(b, l);
	};
	for (let t of e.notes) D("note", "Note", t.frame, t.text);
	for (let t of e.specifications) {
		let e = [`Given  ${t.given.join(", ")}`];
		t.when.length && e.push(`When  ${t.when.join(", ")}`), e.push(`Then  ${t.then.join(", ")}`), D("specification", "Given / When / Then", t.frame, e.join("\n"));
	}
	let O = Math.ceil(b + 2 * a), k = Math.ceil(y + a);
	return {
		svg: Ui("eventmodeling", O, k, n, t, e, Z(_, O / 2, a + _.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + S + x + C),
		width: O,
		height: k,
		links: []
	};
}
var jp = {
	type: "eventmodeling",
	keepComments: !0,
	parse: (e, t, n) => Yf(dp(e), n),
	render: Tp
};
function Mp(e) {
	return e === "markdown" || e === "string" || e === "text" ? e : "markdown";
}
function Np(e) {
	return e.startsWith("\"") && e.endsWith("\"") ? e.substring(1, e.length - 1) : e;
}
function Pp(e, t) {
	let n = 0;
	for (let r = 0; r < t.length; r++) t[r] === e && n++;
	return n;
}
function Fp(e) {
	let t = e.trim(), n = "arrow_open";
	switch (t[0]) {
		case "<":
			n = "arrow_point", t = t.slice(1);
			break;
		case "x":
			n = "arrow_cross", t = t.slice(1);
			break;
		case "o": n = "arrow_circle", t = t.slice(1);
	}
	let r = "normal";
	return t.includes("=") && (r = "thick"), t.includes(".") && (r = "dotted"), {
		type: n,
		stroke: r
	};
}
function Ip(e) {
	let t = e.trim(), n = t.slice(0, -1), r = "arrow_open";
	switch (t.slice(-1)) {
		case "x":
			r = "arrow_cross", t.startsWith("x") && (r = "double_" + r, n = n.slice(1));
			break;
		case ">":
			r = "arrow_point", t.startsWith("<") && (r = "double_" + r, n = n.slice(1));
			break;
		case "o": r = "arrow_circle", t.startsWith("o") && (r = "double_" + r, n = n.slice(1));
	}
	let i = "normal", a = n.length - 1;
	n.startsWith("=") && (i = "thick"), n.startsWith("~") && (i = "invisible");
	let o = Pp(".", n);
	return o && (i = "dotted", a = o), {
		type: r,
		stroke: i,
		length: a
	};
}
var Lp = class {
	type = "flowchart";
	direction;
	nodes = /* @__PURE__ */ new Map();
	edges = [];
	subgraphs = [];
	classes = /* @__PURE__ */ new Map();
	tooltips = /* @__PURE__ */ new Map();
	defaultEdgeStyle;
	defaultInterpolate;
	title;
	accTitle;
	accDescr;
	subgraphLookup = /* @__PURE__ */ new Map();
	members = /* @__PURE__ */ new Set();
	edgeById = /* @__PURE__ */ new Map();
	pairCount = /* @__PURE__ */ new Map();
	subCount = 0;
	options;
	constructor(e = {}) {
		this.options = e;
	}
	addVertex(e, t, r, i, a, o, s, c) {
		if (!e || e.trim().length === 0) return;
		let l;
		if (c !== void 0) {
			let t = c.includes("\n") ? c + "\n" : "{\n" + c + "\n}", r;
			try {
				r = re(t);
			} catch (t) {
				throw new n(`Metadata of "${e}" is not valid YAML. ${t.message}`, "syntax", { type: "flowchart" });
			}
			l = typeof r == "object" && r && !Array.isArray(r) ? r : void 0;
		}
		let u = this.subgraphLookup.get(e);
		if (u && l) {
			u.metadata = {
				...u.metadata,
				...l
			};
			return;
		}
		let d = this.edgeById.get(e);
		if (d) {
			l?.animate !== void 0 && (d.animate = l.animate), l?.animation !== void 0 && (d.animation = l.animation), l?.curve !== void 0 && (d.interpolate = l.curve);
			return;
		}
		let f = this.nodes.get(e);
		if (f === void 0 && (t === void 0 && r === void 0 && i != null && this.options.warn?.(`Style applied to unknown node "${e}". This may indicate a typo. The node will be created automatically.`), f = {
			id: e,
			labelType: "text",
			styles: [],
			classes: []
		}, this.nodes.set(e, f)), t === void 0 ? f.text === void 0 && (f.text = e) : (f.labelType = t.type, f.text = Np(t.text.trim())), r !== void 0 && (f.type = r), i != null) for (let e of i) f.styles.push(e);
		if (a != null) for (let e of a) f.classes.push(e);
		if (o !== void 0 && (f.dir = o), f.props === void 0 ? f.props = s ?? {} : s !== void 0 && Object.assign(f.props, s), l === void 0) return;
		if (l.shape) {
			let e = String(l.shape);
			if (e !== e.toLowerCase() || e.includes("_")) throw new n(`No such shape: ${e}. Shape names should be lowercase.`, "semantic", { type: "flowchart" });
			if (!Gt(e)) throw new n(`No such shape: ${e}.`, "semantic", { type: "flowchart" });
			f.type = e;
		}
		let p = typeof l.label == "string" ? l.label : void 0;
		l.label && (f.text = String(l.label), f.labelType = Mp(l.labelType)), l.icon && (f.icon = String(l.icon), !p?.trim() && f.text === e && (f.text = "")), l.form && (f.form = String(l.form)), l.pos && (f.pos = String(l.pos)), l.img && (f.img = String(l.img), !p?.trim() && f.text === e && (f.text = "")), l.constraint && (f.constraint = String(l.constraint)), l.w && (f.assetWidth = Number(l.w)), l.h && (f.assetHeight = Number(l.h));
	}
	addSingleLink(e, t, r, i) {
		let a = {
			start: e,
			end: t,
			type: void 0,
			text: "",
			labelType: "text",
			classes: [],
			isUserDefinedId: !1,
			interpolate: this.defaultInterpolate
		}, o = r?.text;
		o !== void 0 && (a.text = Np(o.text.trim()), a.labelType = Mp(o.type)), r !== void 0 && (a.type = r.type, a.stroke = r.stroke, a.length = r.length > 10 ? 10 : r.length);
		let s = e + "\0" + t, c = this.pairCount.get(s) ?? 0;
		i && !this.edgeById.has(i) ? (a.id = i, a.isUserDefinedId = !0) : a.id = `L_${e}_${t}_${c === 0 ? 0 : c + 1}`;
		let l = this.options.maxEdges;
		if (l !== void 0 && this.edges.length >= l) throw new n(`Edge limit exceeded. ${this.edges.length} edges found, but the limit is ${l}.`, "limit", { type: "flowchart" });
		this.edges.push(a), this.pairCount.set(s, c + 1), this.edgeById.has(a.id) || this.edgeById.set(a.id, a);
	}
	addLink(e, t, n) {
		let r = typeof n?.id == "string" ? n.id.replace("@", "") : void 0, i = e[e.length - 1], a = t[0];
		for (let o of e) for (let e of t) this.addSingleLink(o, e, n, o === i && e === a ? r : void 0);
	}
	updateLinkInterpolate(e, t) {
		for (let n of e) n === "default" ? this.defaultInterpolate = t : this.edgeAt(n).interpolate = t;
	}
	updateLink(e, t) {
		for (let n of e) {
			if (n === "default") {
				this.defaultEdgeStyle = t;
				continue;
			}
			let e = this.edgeAt(n);
			e.style = t, t.length > 0 && !t.some((e) => e?.startsWith("fill")) && t.push("fill:none");
		}
	}
	edgeAt(e) {
		let t = this.edges[Number(e)];
		if (t === void 0) throw new n(`The index ${e} for linkStyle is out of bounds. Valid indices for linkStyle are between 0 and ${this.edges.length - 1}. (Help: Ensure that the index is within the range of existing edges.)`, "semantic", { type: "flowchart" });
		return t;
	}
	addClass(e, t) {
		let n = t.join().replace(/\\,/g, "§§§").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
		for (let t of e.split(",")) {
			let e = this.classes.get(t);
			e === void 0 && (e = {
				id: t,
				styles: [],
				textStyles: []
			}, this.classes.set(t, e));
			for (let t of n) t.includes("color") && e.textStyles.push(t.replace("fill", "bgFill")), e.styles.push(t);
		}
	}
	setDirection(e) {
		let t = e.trim();
		t.includes("<") && (t = "RL"), t.includes("^") && (t = "BT"), t.includes(">") && (t = "LR"), t.includes("v") && (t = "TB"), t === "TD" && (t = "TB"), this.direction = t;
	}
	setClass(e, t) {
		for (let n of e.split(",")) this.nodes.get(n)?.classes.push(t), this.edgeById.get(n)?.classes.push(t), this.subgraphLookup.get(n)?.classes.push(t);
	}
	setTooltip(e, t) {
		if (t !== void 0) for (let n of e.split(",")) this.tooltips.set(n, t);
	}
	setLink(e, t, n) {
		let r = t.trim();
		for (let t of e.split(",")) {
			let e = this.nodes.get(t);
			e !== void 0 && (e.link = r ? kt(r) : void 0, e.linkTarget = n);
		}
		this.setClass(e, "clickable");
	}
	setClickEvent(e, t, n) {
		this.setClass(e, "clickable");
	}
	setAccTitle(e) {
		this.accTitle = e.replace(/^\s+/g, "");
	}
	setAccDescription(e) {
		this.accDescr = e.replace(/\n\s+/g, "\n");
	}
	addSubGraph(e, t, n) {
		let r = e?.text.trim(), i = n?.text ?? "";
		e !== void 0 && e === n && /\s/.test(i) && (r = void 0);
		let a = /* @__PURE__ */ new Set(), o = [], s;
		for (let e of t) if (typeof e == "string") e.trim() !== "" && !a.has(e) && (a.add(e), o.push(e));
		else if (Array.isArray(e)) for (let t of e) t.trim() !== "" && !a.has(t) && (a.add(t), o.push(t));
		else s = e.value;
		s ??= this.options.inheritDir ? this.direction ?? this.options.direction : void 0, r ??= "subGraph" + this.subCount, i ||= "", this.subCount++;
		let c = {
			id: r,
			nodes: o,
			title: i.trim(),
			classes: [],
			dir: s,
			labelType: Mp(n?.type)
		}, l = this.members;
		c.nodes = o.filter((e) => !l.has(e) && e !== r);
		for (let e of c.nodes) l.add(e);
		let u = this.subgraphLookup.get(r);
		if (u) for (let e of c.nodes) u.nodes.push(e);
		else this.subgraphs.push(c);
		return this.subgraphLookup.set(r, u ?? c), r;
	}
	exists(e, t) {
		for (let n of e) if (n.nodes.includes(t)) return !0;
		return !1;
	}
	makeUniq(e, t) {
		let n = /* @__PURE__ */ new Set();
		for (let e of t) for (let t of e.nodes) n.add(t);
		return { nodes: e.nodes.filter((e) => !n.has(e)) };
	}
	destructLink(e, t) {
		let n = Ip(e);
		if (!t) return n;
		let r = Fp(t);
		if (r.stroke !== n.stroke) return {
			type: "INVALID",
			stroke: "INVALID"
		};
		if (r.type === "arrow_open") r.type = n.type;
		else {
			if (r.type !== n.type) return {
				type: "INVALID",
				stroke: "INVALID"
			};
			r.type = "double_" + r.type;
		}
		return r.type === "double_arrow" && (r.type = "double_arrow_point"), r.length = n.length, r;
	}
	subgraph(e) {
		return this.subgraphLookup.get(e);
	}
}, Rp = /* @__PURE__ */ "$end.INVALID.acc_title.acc_title_value.acc_descr.acc_descr_value.acc_descr_multiline_value.SHAPE_DATA.CALLBACKNAME.CALLBACKARGS.MD_STR.STR.STYLE.DEFAULT.LINKSTYLE.INTERPOLATE.CLASSDEF.CLASS.HREF.CLICK.GRAPH.subgraph.end.LINK_TARGET.NODIR.DIR.direction_tb.direction_bt.direction_rl.direction_lr.direction_td.LINK_ID.NUM.BRKT.STYLE_SEPARATOR.COLON.AMP.SEMI.COMMA.MULT.LINK.START_LINK.EDGE_TEXT.-).TEXT.(-.STADIUMEND.STADIUMSTART.SUBROUTINEEND.SUBROUTINESTART.VERTEX_WITH_PROPS_START.TAGEND.CYLINDEREND.CYLINDERSTART.DOUBLECIRCLEEND.DOUBLECIRCLESTART.TRAPEND.INVTRAPEND.TRAPSTART.INVTRAPSTART.TAGSTART.UP.SEP.DOWN.NODE_STRING.MINUS.UNICODE_TEXT.PIPE.PE.PS.SQE.SQS.DIAMOND_STOP.DIAMOND_START.NEWLINE.SPACE.EOF".split("."), zp = /* @__PURE__ */ new Uint8Array(128);
for (let e of "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'*+.`?\\_/") zp[e.charCodeAt(0)] = 1;
var Bp = /accTitle\s*:\s*/y, Vp = /accDescr\s*:\s*/y, Hp = /accDescr\s*\{\s*/y, Up = /call\s+/y, Wp = /click\s+/y, Gp = /(?:\r?\n)*\s*\n/y, Kp = /\s*(?:LR|RL|TB|BT|TD|BR)\b/y, qp = /\s*[<>^]/y, Jp = /\s*v\b/y, Yp = [
	/.*direction\s+TB[^\n]*/y,
	/.*direction\s+BT[^\n]*/y,
	/.*direction\s+RL[^\n]*/y,
	/.*direction\s+LR[^\n]*/y,
	/.*direction\s+TD[^\n]*/y
], Xp = /[\n\r\u2028\u2029]/g, Zp = /\s*[xo<]?--+[-xo>]\s*/y, Qp = /\s*[xo<]?--\s*/y, $p = /\s*[xo<]?==+[=xo>]\s*/y, em = /\s*[xo<]?==\s*/y, tm = /\s*[xo<]?-?\.+-[xo>]?\s*/y, nm = /\s*[xo<]?-\.\s*/y, rm = /\s*~~~+\s*/y, im = /(?:\r?\n)+/y, am = /[^\S\n\r]+/y, om = /\(\s*\)/y, sm = /\n\s*/g;
function cm(e) {
	let t = e.length, n = [], r = [], i = [], a = [], o = 0, s = 0, c = !0, l = e.indexOf("direction"), u = e.indexOf("@"), d = -1, f = 0, p = 0, m = -1, h = -1, g = -1, _ = (t, a, o) => {
		n.push(t), r.push(e.slice(a, o)), i.push(a), s = o;
	}, v = (e) => {
		a.push(o), o = e;
	}, y = () => {
		a.length > 0 && (o = a.pop());
	}, b = (t, n) => (t.lastIndex = n, t.test(e) ? t.lastIndex : -1), x = (t) => e.startsWith(t, s) && !J(e.charCodeAt(s + t.length)), S = (n) => {
		let r = n;
		if (n >= h && n <= g) r = g;
		else if (G(e.charCodeAt(n))) {
			for (; r < t && G(e.charCodeAt(r));) r++;
			h = n, g = r;
		}
		let i = e.charCodeAt(r);
		return i === 120 || i === 111 || i === 60 ? e.charCodeAt(r + 1) : i;
	}, C = (n) => {
		let r = n;
		if (n >= h && n <= g) r = g;
		else if (G(e.charCodeAt(n))) {
			for (; r < t && G(e.charCodeAt(r));) r++;
			h = n, g = r;
		}
		return e.charCodeAt(r) === 126;
	}, w = () => {
		e.charCodeAt(s + 1) === 96 ? (v(2), s += 2) : (v(1), s++);
	}, T = () => {
		if (!C(s)) return !1;
		let e = b(rm, s);
		return e < 0 ? !1 : (_(40, s, e), !0);
	}, E = (t) => {
		let n = e.charCodeAt(s + 1);
		return t === 40 ? (n === 45 ? (v(8), _(45, s, s + 2)) : n === 91 ? (v(7), _(47, s, s + 2)) : n === 40 && e.charCodeAt(s + 2) === 40 ? (v(7), _(55, s, s + 3)) : (v(7), _(69, s, s + 1)), !0) : t === 91 ? (n === 91 ? (v(7), _(49, s, s + 2)) : n === 40 ? (v(7), _(53, s, s + 2)) : n === 47 ? (v(9), _(58, s, s + 2)) : n === 92 ? (v(9), _(59, s, s + 2)) : (v(7), _(71, s, s + 1)), !0) : t === 124 ? (v(7), _(67, s, s + 1), !0) : t === 123 && (v(7), _(73, s, s + 1), !0);
	}, D = (e) => {
		c && (c = !1, v(6)), _(20, s, s + e);
	}, O = () => {
		let n = s;
		for (; n < t;) {
			let r = e.charCodeAt(n);
			if (r < 128 && zp[r] === 1) n++;
			else if (r === 45 && n + 1 < t) {
				let t = e.charCodeAt(n + 1);
				if (t === 62 || t === 45 || t === 46) break;
				n++;
			} else break;
		}
		return n !== s && (_(64, s, n), !0);
	}, k = (e) => {
		let t = S(s), n;
		if (t === 45) {
			if ((n = b(Zp, s)) >= 0) return _(40, s, n), !0;
			if ((n = b(Qp, s)) >= 0) return v(10), _(41, s, n), !0;
			if ((n = b(tm, s)) >= 0) return _(40, s, n), !0;
			if ((n = b(nm, s)) >= 0) return v(12), _(41, s, n), !0;
		} else if (t === 61) {
			if ((n = b($p, s)) >= 0) return _(40, s, n), !0;
			if ((n = b(em, s)) >= 0) return v(11), _(41, s, n), !0;
		} else if (t === 46 && (n = b(tm, s)) >= 0) return _(40, s, n), !0;
		return e !== 45 && e !== 61 && e !== 46 && T();
	}, A = (a) => {
		let o;
		switch (a) {
			case 97:
				if (e.startsWith("acc", s)) {
					if ((o = b(Bp, s)) >= 0) return v(3), _(2, s, o), !0;
					if ((o = b(Vp, s)) >= 0) return v(4), _(4, s, o), !0;
					if ((o = b(Hp, s)) >= 0) return v(5), s = o, !0;
				}
				break;
			case 64:
				if (e.charCodeAt(s + 1) === 123) return v(16), n.push(7), r.push(""), i.push(s), s += 2, !0;
				break;
			case 99:
				if ((o = b(Up, s)) >= 0) return v(14), s = o, !0;
				if (x("classDef")) return _(16, s, s + 8), !0;
				if (x("class")) return _(17, s, s + 5), !0;
				if ((o = b(Wp, s)) >= 0) return v(13), s = o, !0;
				break;
			case 34: return w(), !0;
			case 115:
				if (x("style")) return _(12, s, s + 5), !0;
				if (x("swimlane-beta")) return D(13), !0;
				if (x("subgraph")) return _(21, s, s + 8), !0;
				break;
			case 100:
				if (x("default")) return _(13, s, s + 7), !0;
				break;
			case 108:
				if (x("linkStyle")) return _(14, s, s + 9), !0;
				break;
			case 105:
				if (x("interpolate")) return _(15, s, s + 11), !0;
				break;
			case 104:
				if (e.startsWith("href", s) && G(e.charCodeAt(s + 4))) return _(18, s, s + 5), !0;
				break;
			case 102:
				if (x("flowchart-elk")) return D(13), !0;
				if (x("flowchart")) return D(9), !0;
				break;
			case 103:
				if (x("graph")) return D(5), !0;
				break;
			case 101:
				if (x("end")) {
					for (o = s + 3; o < t && G(e.charCodeAt(o));) o++;
					return _(22, s, o), !0;
				}
				break;
			case 95:
				if (x("_self")) return _(23, s, s + 5), !0;
				if (x("_blank")) return _(23, s, s + 6), !0;
				if (x("_parent")) return _(23, s, s + 7), !0;
				if (x("_top")) return _(23, s, s + 4), !0;
		}
		if (l !== -1 && s >= f && (l < s && (l = e.indexOf("direction", s)), l !== -1 && (d < s && (Xp.lastIndex = s, d = Xp.test(e) ? Xp.lastIndex - 1 : t), l < d))) {
			for (let e = 0; e < 5; e++) if ((o = b(Yp[e], s)) >= 0) return _(26 + e, s, o), !0;
			f = d;
		}
		if (u !== -1 && a !== 34 && !G(a)) {
			if (s >= p) {
				u < s && (u = e.indexOf("@", s));
				let n = s;
				for (; n < t;) {
					let t = e.charCodeAt(n);
					if (t === 34 || G(t)) break;
					n++;
				}
				if (p = n, m = -1, u !== -1 && u < n) for (let r = Math.min(n, t - 1) - 1; r >= u; r--) {
					if (e.charCodeAt(r) !== 64) continue;
					let t = e.charCodeAt(r + 1);
					if (t !== 123 && t !== 34) {
						m = r;
						break;
					}
				}
			}
			if (m > s) return _(31, s, m + 1), !0;
		}
		if (a >= 48 && a <= 57) {
			let n = s + 1;
			for (; n < t;) {
				let t = e.charCodeAt(n);
				if (t < 48 || t > 57) break;
				n++;
			}
			return _(32, s, n), !0;
		}
		switch (a) {
			case 35: return _(33, s, s + 1), !0;
			case 58: return e.charCodeAt(s + 1) === 58 && e.charCodeAt(s + 2) === 58 ? _(34, s, s + 3) : _(35, s, s + 1), !0;
			case 38: return _(36, s, s + 1), !0;
			case 59: return _(37, s, s + 1), !0;
			case 44: return _(38, s, s + 1), !0;
			case 42: return _(39, s, s + 1), !0;
			case 120:
			case 111: return k(a) || O();
			case 60: return k(a) || _(60, s, s + 1), !0;
			case 45: return k(a) || O() || _(65, s, s + 1), !0;
			case 61: return k(a);
			case 46: return k(a) || O();
			case 126: return T();
			case 40: return E(a);
			case 91: return e.charCodeAt(s + 1) === 124 ? (_(50, s, s + 2), !0) : E(a);
			case 124:
			case 123: return E(a);
			case 62: return v(7), _(51, s, s + 1), !0;
			case 94: return _(61, s, s + 1), !0;
			case 92: return e.charCodeAt(s + 1) === 124 ? (_(62, s, s + 2), !0) : O();
			case 118: return J(e.charCodeAt(s + 1)) ? O() : (_(63, s, s + 1), !0);
		}
		return G(a) ? k(a) ? !0 : (o = b(im, s)) >= 0 ? (_(74, s, o), !0) : (o = b(am, s)) >= 0 && (_(75, s, o), !0) : a < 128 ? O() : yn(a) ? (_(66, s, s + 1), !0) : !1;
	}, j = (n, r, i, a) => {
		if (n === 34) return w(), !0;
		let o = S(s);
		if (o === i || o === a) {
			let e = b(r, s);
			if (e >= 0) return y(), _(40, s, e), !0;
		}
		if (n === i && (i !== 45 || e.charCodeAt(s + 1) === 45)) return !1;
		let c = s + 1;
		for (; c < t;) {
			let t = e.charCodeAt(c);
			if (t === 34) break;
			if (t === i) {
				if (i !== 45 || e.charCodeAt(c + 1) === 45) break;
			} else if (t === 120 || t === 111 || t === 60 || t === a || G(t)) {
				let e = S(c);
				if ((e === i || e === a) && b(r, c) >= 0) break;
			}
			c++;
		}
		return _(42, s, c), !0;
	};
	e: for (;;) {
		if (s >= t) {
			let e = -1;
			switch (o) {
				case 0:
					e = 76;
					break;
				case 3:
					e = 3;
					break;
				case 4:
					e = 5;
					break;
				case 5:
					e = 6;
					break;
				case 13:
					e = 19;
					break;
				case 14:
					e = 8;
					break;
				case 15: e = 9;
			}
			e !== -1 && _(e, t, t);
			break;
		}
		let a = e.charCodeAt(s), c = !0;
		switch (o) {
			case 0:
				c = A(a);
				break;
			case 1:
				if (a === 34) e.charCodeAt(s + 1) === 96 ? (v(2), s += 2) : (y(), s++);
				else {
					let n = e.indexOf("\"", s);
					_(11, s, n === -1 ? t : n);
				}
				break;
			case 2:
				if (a === 96) e.charCodeAt(s + 1) === 34 ? (y(), s += 2) : c = !1;
				else if (a === 34) w();
				else {
					let n = s + 1;
					for (; n < t;) {
						let t = e.charCodeAt(n);
						if (t === 96 || t === 34) break;
						n++;
					}
					_(10, s, n);
				}
				break;
			case 3:
			case 4: {
				let n = e.indexOf("\n", s);
				n === -1 && (n = t);
				let r = o === 3 ? 3 : 5;
				y(), _(r, s, n);
				break;
			}
			case 5:
				if (a === 125) y(), s++;
				else {
					let n = e.indexOf("}", s);
					n === -1 && (n = t), _(6, s, n);
				}
				break;
			case 6: {
				let e;
				a === 34 ? w() : (e = b(Gp, s)) >= 0 ? (y(), _(24, s, e)) : (e = b(Kp, s)) >= 0 || (e = b(qp, s)) >= 0 || (e = b(Jp, s)) >= 0 ? (y(), _(25, s, e)) : c = T() || E(a);
				break;
			}
			case 7: {
				let n = e.charCodeAt(s + 1);
				switch (a) {
					case 34:
						w();
						break;
					case 40:
					case 91:
					case 123:
						E(a);
						break;
					case 93:
						y(), n === 41 ? _(46, s, s + 2) : n === 93 ? _(48, s, s + 2) : _(70, s, s + 1);
						break;
					case 41:
						y(), n === 93 ? _(52, s, s + 2) : n === 41 && e.charCodeAt(s + 2) === 41 ? _(54, s, s + 3) : _(68, s, s + 1);
						break;
					case 124:
						y(), _(67, s, s + 1);
						break;
					case 125:
						y(), _(72, s, s + 1);
						break;
					default: {
						if ((a === 126 || G(a)) && T()) break;
						let n = s + 1;
						for (; n < t;) {
							let t = e.charCodeAt(n);
							if (t === 91 || t === 93 || t === 40 || t === 41 || t === 123 || t === 125 || t === 124 || t === 34) break;
							n++;
						}
						_(44, s, n);
					}
				}
				break;
			}
			case 8: {
				let n = e.charCodeAt(s + 1);
				if (a === 34) w();
				else {
					if ((a === 126 || G(a)) && T()) break;
					if ((a === 45 || a === 47 || a === 41) && n === 41) y(), _(43, s, s + 2);
					else if (a === 40 || a === 91 || a === 123) E(a);
					else if (a === 41 || a === 93 || a === 125) c = !1;
					else {
						let n = s + 1;
						for (; n < t;) {
							let t = e.charCodeAt(n);
							if (t === 34 || t === 40 || t === 41 || t === 91 || t === 93 || t === 123 || t === 125 || (t === 45 || t === 47) && e.charCodeAt(n + 1) === 41 || (t === 126 || G(t)) && C(n) && b(rm, n) >= 0) break;
							n++;
						}
						_(44, s, n);
					}
				}
				break;
			}
			case 9: {
				let n = e.charCodeAt(s + 1);
				if (a === 34) {
					w();
					break;
				}
				if ((a === 126 || G(a)) && T()) break;
				switch (a) {
					case 40:
						n === 45 || n === 91 || n === 40 && e.charCodeAt(s + 2) === 40 ? E(a) : n === 93 ? (y(), _(56, s, s + 2)) : E(a);
						break;
					case 91:
					case 123:
						E(a);
						break;
					case 92:
						n === 93 ? (y(), _(56, s, s + 2)) : _(44, s, s + 1);
						break;
					case 47:
						n === 93 ? (y(), _(57, s, s + 2)) : _(44, s, s + 1);
						break;
					case 93:
					case 41:
						n === 93 ? (y(), _(56, s, s + 2)) : c = !1;
						break;
					case 125:
						c = !1;
						break;
					default: {
						if ((a === 63 || a === 61) && n === 93) {
							y(), _(56, s, s + 2);
							break;
						}
						let r = s + 1;
						for (; r < t;) {
							let t = e.charCodeAt(r);
							if (t === 92 || t === 91 || t === 93 || t === 40 || t === 41 || t === 123 || t === 125 || t === 47) break;
							r++;
						}
						_(44, s, r);
					}
				}
				break;
			}
			case 10:
				c = j(a, Zp, 45, -1);
				break;
			case 11:
				c = j(a, $p, 61, -1);
				break;
			case 12:
				c = j(a, tm, 46, 45);
				break;
			case 13:
				if (a === 34) w();
				else if (G(a)) y(), s++;
				else {
					let n = s + 1;
					for (; n < t && !G(e.charCodeAt(n));) n++;
					_(19, s, n);
				}
				break;
			case 14:
				if (a === 40) {
					let e = b(om, s);
					y(), e >= 0 ? s = e : (v(15), s++);
				} else {
					let n = e.indexOf("(", s);
					n === -1 && (n = t), _(8, s, n);
				}
				break;
			case 15:
				if (a === 41) y(), s++;
				else {
					let n = e.indexOf(")", s);
					n === -1 && (n = t), _(9, s, n);
				}
				break;
			case 16:
				if (a === 34) v(17), _(7, s, s + 1);
				else if (a === 125) y(), s++;
				else if (a === 94) c = !1;
				else {
					let n = s + 1;
					for (; n < t;) {
						let t = e.charCodeAt(n);
						if (t === 125 || t === 94 || t === 34) break;
						n++;
					}
					_(7, s, n);
				}
				break;
			case 17: if (a === 34) y(), _(7, s, s + 1);
			else {
				let a = e.indexOf("\"", s);
				a === -1 && (a = t), n.push(7), r.push(e.slice(s, a).replace(sm, "<br/>")), i.push(s), s = a;
			}
		}
		if (!c) return n.push(1), r.push(""), i.push(s), {
			types: n,
			texts: r,
			starts: i
		};
		continue e;
	}
	return n.push(0), r.push(""), i.push(t), {
		types: n,
		texts: r,
		starts: i
	};
}
var lm = /* @__PURE__ */ new Uint8Array(77);
for (let e of [
	32,
	64,
	63,
	65,
	13,
	38,
	35,
	36,
	33,
	39,
	66
]) lm[e] = 1;
var um = /* @__PURE__ */ new Uint8Array(77);
for (let e of [
	32,
	66,
	64,
	25,
	63,
	65,
	38,
	35,
	36,
	33,
	39
]) um[e] = 1;
var dm = /* @__PURE__ */ new Uint8Array(77);
for (let e of [
	32,
	64,
	75,
	65,
	36,
	66,
	35,
	39,
	33,
	12,
	14,
	16,
	17,
	19,
	20,
	25,
	21,
	22,
	63,
	61,
	41
]) dm[e] = 1;
var fm = /* @__PURE__ */ new Uint8Array(77);
for (let e of [
	32,
	64,
	35,
	75,
	33,
	12
]) fm[e] = 1;
var pm = "'UNICODE_TEXT', 'TEXT', 'TAGSTART'", mm = [], hm = /}\s*\n/g;
function gm(e, t) {
	let n = e.includes("}") ? e.replace(hm, "}\n") : e, { types: r, texts: a, starts: o } = cm(n), s = 0, c, l = (e) => {
		let t = r[s];
		throw t === 1 ? i("flowchart", n, o[s], "", !0) : i("flowchart", n, o[s], `Expecting ${e}, got '${Rp[t]}'`);
	}, u = (e, t = "") => (r[s] !== e && l(`'${Rp[e]}'${t ? ", " + t : ""}`), a[s++]), d = () => {
		let e = r[s];
		e !== 74 && e !== 37 && e !== 76 && l("'SEMI', 'NEWLINE', 'EOF'"), s++;
	}, f = () => {
		lm[r[s]] === 0 && l("'NODE_STRING'");
		let e = a[s++];
		for (; lm[r[s]] === 1;) e += a[s++];
		return e;
	}, p = () => {
		um[r[s]] === 0 && l("'NODE_STRING'");
		let e = a[s++];
		for (; um[r[s]] === 1;) e += a[s++];
		return e;
	}, m = () => {
		let e = r[s], t;
		if (e === 11) t = "string";
		else if (e === 10) t = "markdown";
		else if (e === 44 || e === 60 || e === 51 || e === 66) t = "text";
		else return l(`${pm}, 'TAGEND', 'STR', 'MD_STR'`);
		let n = a[s++];
		for (;;) {
			let e = r[s];
			if (e !== 44 && e !== 60 && e !== 51 && e !== 66) break;
			n += a[s++];
		}
		return {
			text: n,
			type: t
		};
	}, h = (e) => {
		u(e, pm);
	}, g = () => {
		let e = r[s], t;
		if (e === 11) t = "string";
		else if (e === 10) t = "markdown";
		else if (e === 42 || e === 66) t = "text";
		else return l("'EDGE_TEXT', 'STR', 'MD_STR'");
		let n = a[s++];
		for (; r[s] === 42 || r[s] === 66;) n += a[s++];
		return {
			text: n,
			type: t
		};
	}, _ = () => {
		let e = r[s], t;
		if (e === 11) t = "text";
		else if (e === 10) t = "markdown";
		else if (dm[e] === 1) t = "text";
		else return l("'NODE_STRING', 'STR', 'MD_STR'");
		let n = a[s++];
		for (; dm[r[s]] === 1;) n += a[s++];
		return {
			text: n,
			type: t
		};
	}, v = () => {
		let e = a[s++];
		for (; r[s] === 7;) e += a[s++];
		return e;
	}, y = () => {
		let e = f(), n;
		switch (r[s]) {
			case 71:
				s++, n = m(), h(70), t.addVertex(e, n, "square");
				break;
			case 55:
				s++, n = m(), h(54), t.addVertex(e, n, "doublecircle");
				break;
			case 69:
				s++, r[s] === 69 ? (s++, n = m(), h(68), u(68), t.addVertex(e, n, "circle")) : (n = m(), h(68), t.addVertex(e, n, "round"));
				break;
			case 45:
				s++, n = m(), h(43), t.addVertex(e, n, "ellipse");
				break;
			case 47:
				s++, n = m(), h(46), t.addVertex(e, n, "stadium");
				break;
			case 49:
				s++, n = m(), h(48), t.addVertex(e, n, "subroutine");
				break;
			case 50: {
				s++;
				let r = u(64);
				u(35);
				let i = u(64);
				u(67), n = m(), h(70), t.addVertex(e, n, "rect", void 0, void 0, void 0, { [r]: i });
				break;
			}
			case 53:
				s++, n = m(), h(52), t.addVertex(e, n, "cylinder");
				break;
			case 73:
				s++, r[s] === 73 ? (s++, n = m(), h(72), u(72), t.addVertex(e, n, "hexagon")) : (n = m(), h(72), t.addVertex(e, n, "diamond"));
				break;
			case 51:
				s++, n = m(), h(70), t.addVertex(e, n, "odd");
				break;
			case 58:
				s++, n = m(), r[s] === 57 ? (s++, t.addVertex(e, n, "lean_right")) : (h(56), t.addVertex(e, n, "trapezoid"));
				break;
			case 59:
				s++, n = m(), r[s] === 56 ? (s++, t.addVertex(e, n, "lean_left")) : (h(57), t.addVertex(e, n, "inv_trapezoid"));
				break;
			default: t.addVertex(e);
		}
		return e;
	}, b = () => {
		let e = y();
		return r[s] === 34 && (s++, t.setClass(e, f())), e;
	}, x = () => {
		let e = [b()];
		for (c = void 0;;) {
			let n = r[s] === 7 ? v() : void 0;
			if (r[s] !== 75) return c = n, e;
			do
				s++;
			while (r[s] === 75);
			if (r[s] !== 36) return n !== void 0 && l("'AMP'"), e;
			s++, r[s] !== 75 && l("'SPACE'");
			do
				s++;
			while (r[s] === 75);
			let i = b();
			n !== void 0 && t.addVertex(e[e.length - 1], void 0, void 0, void 0, void 0, void 0, void 0, n), e.push(i);
		}
	}, S = () => {
		let e;
		if (r[s] === 31 && (e = a[s++]), r[s] === 40) {
			let n = t.destructLink(a[s++]);
			return e !== void 0 && (n.id = e), r[s] === 67 && (s++, n.text = m(), h(67), r[s] === 75 && s++), n;
		}
		if (r[s] === 41) {
			let n = a[s++], r = g(), i = u(40, "'EDGE_TEXT'"), o = t.destructLink(i, n);
			return o.text = r, e !== void 0 && (o.id = e), o;
		}
		return l("'LINK', 'START_LINK'");
	}, C = (e) => {
		let n = x();
		c !== void 0 && t.addVertex(n[n.length - 1], void 0, void 0, void 0, void 0, void 0, void 0, c);
		let i = n;
		for (;;) {
			let a = r[s];
			if (a !== 40 && a !== 41 && a !== 31) return i;
			let o = S(), l = x();
			c !== void 0 && t.addVertex(l[l.length - 1], void 0, void 0, void 0, void 0, void 0, void 0, c), t.addLink(n, l, o), e && (i = l.concat(i)), n = l;
		}
	}, w = () => {
		fm[r[s]] === 0 && l("'NODE_STRING', 'NUM', 'COLON', 'BRKT'");
		let e = a[s++];
		for (; fm[r[s]] === 1;) e += a[s++];
		return e;
	}, T = () => {
		let e = [w()];
		for (; r[s] === 38;) s++, e.push(w());
		return e;
	}, E = () => {
		s++, u(75);
		let e;
		if (r[s] === 13) e = [a[s++]];
		else for (e = [u(32, "'DEFAULT'")]; r[s] === 38;) s++, e.push(u(32));
		if (u(75), r[s] !== 15) {
			t.updateLink(e, T());
			return;
		}
		s++, u(75);
		let n = p();
		if (r[s] === 75) {
			s++;
			let r = T();
			t.updateLinkInterpolate(e, n), t.updateLink(e, r);
		} else t.updateLinkInterpolate(e, n);
	}, D = (e, n) => {
		if (r[s] !== 75) {
			t.setLink(e, n);
			return;
		}
		if (s++, r[s] === 23) {
			t.setLink(e, n, a[s++]);
			return;
		}
		let i = u(11, "'LINK_TARGET'");
		r[s] === 75 ? (s++, t.setLink(e, n, u(23))) : t.setLink(e, n), t.setTooltip(e, i);
	}, O = () => {
		let e = a[s++];
		switch (r[s]) {
			case 8: {
				let n = a[s++], i = r[s] === 9, o = i ? a[s++] : void 0, c;
				r[s] === 75 && (s++, c = u(11)), i ? t.setClickEvent(e, n, o) : t.setClickEvent(e, n), c !== void 0 && t.setTooltip(e, c);
				return;
			}
			case 18:
				s++, D(e, u(11));
				return;
			case 11:
				D(e, a[s++]);
				return;
			default: {
				let n = p();
				if (r[s] === 75) {
					s++;
					let r = u(11);
					t.setClickEvent(e, n), t.setTooltip(e, r);
				} else t.setClickEvent(e, n);
			}
		}
	}, k = () => {
		s++;
		let e = r[s];
		if (e === 74 || e === 37 || e === 76) return s++, {
			id: void 0,
			title: void 0,
			list: [],
			collect: !1
		};
		u(75, "'SEMI', 'NEWLINE', 'EOF'");
		let t = _(), n = t;
		return r[s] === 71 && (s++, n = m(), h(70)), e = r[s], e !== 74 && e !== 37 && e !== 76 && l("'SEMI', 'NEWLINE', 'EOF', 'SQS'"), s++, {
			id: t,
			title: n,
			list: [],
			collect: !1
		};
	}, A = (e) => {
		let n = r[s];
		switch (n) {
			case 12: {
				s++, u(75);
				let e = f();
				return u(75), t.addVertex(e, void 0, void 0, T()), d(), mm;
			}
			case 14: return E(), d(), mm;
			case 16: {
				s++, u(75);
				let e = f();
				return u(75), t.addClass(e, T()), d(), mm;
			}
			case 17: {
				s++, u(75);
				let e = f();
				return u(75), t.setClass(e, f()), d(), mm;
			}
			case 19: return O(), d(), mm;
			case 26:
			case 27:
			case 28:
			case 29:
			case 30: return s++, {
				stmt: "dir",
				value: _m[n - 26]
			};
			case 2: {
				s++;
				let e = u(3).trim();
				return t.setAccTitle(e), e;
			}
			case 4: {
				s++;
				let e = u(5).trim();
				return t.setAccDescription(e), e;
			}
			case 6: {
				let e = a[s++].trim();
				return t.setAccDescription(e), e;
			}
			default: {
				lm[n] === 0 && l(vm);
				let t = C(e);
				return d(), t;
			}
		}
	}, j = () => {
		let e = [], n = [], i = !1;
		for (;;) {
			let o = r[s];
			if (o === 0) break;
			if (o === 22) {
				let r = e.pop();
				if (r === void 0) break;
				s++;
				let a = t.addSubGraph(r.id, n, r.title);
				n = r.list, i = r.collect, i && n.push(a);
			} else if (o === 37 || o === 74 || o === 75 || o === 76) i && n.push(a[s]), s++;
			else if (o === 21) {
				let t = k();
				t.list = n, t.collect = i, e.push(t), n = [], i = !0;
			} else {
				let e = A(i);
				i && (!Array.isArray(e) || e.length > 0) && n.push(e);
			}
		}
		e.length > 0 && l("'end'");
	};
	for (; r[s] === 75 || r[s] === 74;) s++;
	if (u(20, "'SPACE', 'NEWLINE'"), r[s] === 24) s++, t.setDirection("TB");
	else {
		let e = u(25, "'NODIR'"), n = r[s];
		if (n === 75) {
			do
				s++;
			while (r[s] === 75);
			n = r[s], n !== 74 && l("'NEWLINE', 'SPACE'");
		} else n !== 37 && n !== 74 && l("'SEMI', 'NEWLINE', 'SPACE'");
		s++, t.setDirection(e);
	}
	j(), r[s] !== 0 && l(vm);
}
var _m = [
	"TB",
	"BT",
	"RL",
	"LR",
	"TD"
], vm = "'SEMI', 'NEWLINE', 'SPACE', 'EOF', 'subgraph', 'acc_title', 'acc_descr', 'acc_descr_multiline_value', 'STYLE', 'LINKSTYLE', 'CLASSDEF', 'CLASS', 'CLICK', 'NODE_STRING'";
function ym(e) {
	if (e.img) return "imageSquare";
	if (e.icon) return e.form === "circle" ? "iconCircle" : e.form === "square" ? "iconSquare" : e.form === "rounded" ? "iconRounded" : "icon";
	switch (e.type) {
		case "square":
		case void 0: return "squareRect";
		case "round": return "roundedRect";
		default: return e.type;
	}
}
function bm(e) {
	switch (e) {
		case "arrow_point":
		case "arrow_circle":
		case "arrow_cross": return ["none", e];
		case "double_arrow_point":
		case "double_arrow_circle":
		case "double_arrow_cross": {
			let t = e.replace("double_", "");
			return [t, t];
		}
	}
	return ["none", "arrow_point"];
}
function xm(e, t) {
	let n = [], r = [], i = e.subgraphs, a = (t) => {
		let n = [];
		for (let r of t) {
			let t = e.classes.get(r);
			if (t !== void 0) {
				for (let e of t.styles) n.push(e.trim());
				for (let e of t.textStyles) n.push(e.trim());
			}
		}
		return n;
	}, o = /* @__PURE__ */ new Map();
	for (let t of i) for (let n of t.nodes) e.subgraph(n) && o.set(n, t.id);
	let s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
	for (let e of i) {
		let t = o.get(e.id);
		if (t === void 0) continue;
		let n = c.get(t);
		n ? n.push(e.id) : c.set(t, [e.id]);
	}
	let l = 0;
	for (let e of i) {
		if (o.has(e.id)) continue;
		let t = [e.id];
		for (; t.length > 0;) {
			let e = t.pop();
			if (s.has(e)) continue;
			s.set(e, l++);
			let n = c.get(e);
			if (n) for (let e = n.length - 1; e >= 0; e--) t.push(n[e]);
		}
	}
	let u = (t) => e.subgraph(t)?.metadata?.view === "collapsed", d = !1;
	for (let e of i) e.metadata?.view === "collapsed" && (d = !0);
	let f = /* @__PURE__ */ new Map(), p = (e) => {
		let t = [], n = /* @__PURE__ */ new Set(), r = e;
		for (; r !== void 0 && !f.has(r) && !n.has(r);) n.add(r), t.push(r), r = o.get(r);
		let i = r === void 0 ? void 0 : f.get(r);
		for (let e = t.length - 1; e >= 0; e--) i === void 0 && u(t[e]) && (i = t[e]), f.set(t[e], i);
		return i;
	}, m = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map();
	for (let e of d ? i : []) {
		let t = p(e.id);
		if (t !== void 0) {
			e.id !== t && (m.add(e.id), h.set(e.id, t));
			for (let n of e.nodes) n !== t && (m.add(n), h.set(n, t));
		}
	}
	let g = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Set();
	for (let e = i.length - 1; e >= 0; e--) {
		let t = i[e];
		if (!m.has(t.id)) {
			t.nodes.length > 0 && _.add(t.id);
			for (let e of t.nodes) g.set(e, t.id);
		}
	}
	let v = /* @__PURE__ */ new Map();
	for (let e = i.length - 1; e >= 0; e--) {
		let t = i[e];
		if (m.has(t.id)) continue;
		let r = t.metadata?.view === "collapsed", o = {
			id: t.id,
			label: t.title,
			labelType: t.labelType,
			parentId: g.get(t.id),
			cssStyles: [],
			cssCompiledStyles: a(t.classes),
			cssClasses: t.classes.join(" "),
			shape: r ? "collapsedGroup" : "rect",
			dir: t.dir,
			isGroup: !r,
			colorIndex: s.get(t.id)
		};
		r || (o.metadata = t.metadata), n.push(o), v.set(t.id, o);
	}
	for (let t of e.nodes.values()) {
		if (m.has(t.id)) continue;
		let r = v.get(t.id);
		if (r) {
			r.cssStyles = t.styles, r.cssCompiledStyles = a(t.classes), r.cssClasses = t.classes.join(" ");
			continue;
		}
		let i = _.has(t.id), o = {
			id: t.id,
			label: t.text,
			labelType: t.labelType,
			parentId: g.get(t.id),
			cssStyles: t.styles,
			cssCompiledStyles: a([
				"default",
				"node",
				...t.classes
			]),
			cssClasses: "default " + t.classes.join(" "),
			dir: t.dir,
			link: t.link,
			linkTarget: t.linkTarget,
			tooltip: e.tooltips.get(t.id),
			icon: t.icon,
			pos: t.pos,
			img: t.img,
			assetWidth: t.assetWidth,
			assetHeight: t.assetHeight,
			constraint: t.constraint,
			isGroup: i,
			shape: i ? "rect" : ym(t)
		};
		n.push(o);
	}
	return e.edges.forEach((n, i) => {
		let o = h.get(n.start) ?? n.start, s = h.get(n.end) ?? n.end;
		if (o === s && (h.has(n.start) || h.has(n.end))) return;
		let [c, l] = bm(n.type), u = [...e.defaultEdgeStyle ?? []];
		n.style && u.push(...n.style);
		let d = n.stroke === "invisible" || n.type === "arrow_open";
		r.push({
			id: n.id || `L_${o}_${s}_${i}`,
			isUserDefinedId: n.isUserDefinedId,
			start: o,
			end: s,
			type: n.type ?? "normal",
			label: n.text,
			labelType: n.labelType,
			thickness: n.stroke,
			pattern: n.stroke,
			minlen: n.length,
			classes: n.stroke === "invisible" ? "" : "edge-thickness-normal edge-pattern-solid flowchart-link",
			arrowTypeStart: d ? "none" : c,
			arrowTypeEnd: d ? "none" : l,
			cssCompiledStyles: a(n.classes),
			style: u,
			animate: n.animate,
			animation: n.animation,
			curve: n.interpolate || e.defaultInterpolate || t
		});
	}), {
		nodes: n,
		edges: r
	};
}
var Sm = 40, Cm = 16, wm = 48, Tm = 20, Em = 26, Dm = " fill=\"var(--_s)\" stroke=\"var(--_b)\"", Om = " stroke=\"var(--_b)\"";
function km(e, t, n) {
	let r = e[t];
	return typeof r == "number" && r > 0 ? Math.min(r, 2e3) : n;
}
function Am(e, t) {
	return e !== void 0 && e > 0 && e <= 4e3 ? e : t;
}
function jm(e, t, n, r) {
	let i = (i) => so(n, (a) => Mm(e, t, n, r, i, a));
	return oo(e.direction) ? ao(n, i) : i(!1);
}
function Mm(e, t, n, r, i, a) {
	let o = a ? 12 : Tm, s = r ? t[r.type] : void 0, c = typeof s == "object" && s && !Array.isArray(s) ? s : t.flowchart ?? {}, l = xm(e, typeof c.curve == "string" ? c.curve : void 0);
	r?.prepare(l);
	let u = n.fontSize ?? 16, d = Math.round(u * .875), f = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), m = Math.min(km(c, "wrappingWidth", 200), r && a ? 100 : 1 / 0), h = n.padding ?? 8, g = n.icons, _ = /* @__PURE__ */ new Map(), v = [], y = [];
	l.nodes.forEach((e, t) => _.set(e.id, t));
	for (let e of l.nodes) {
		let t = Ii(e.cssStyles.length > 0 ? e.cssCompiledStyles.concat(e.cssStyles) : e.cssCompiledStyles), i = +!!t.bold | (t.italic ? 2 : 0), s = e.labelType === "markdown", c = t.fontSize ?? u, l, d;
		if (e.isGroup) {
			let u = Q(e.label, s, f, c, r && a ? Math.max(80, no(n) / 2) : 4e3, i);
			l = {
				node: e,
				style: t,
				label: u,
				shape: "group",
				w: 0,
				h: 0,
				dy: 0,
				loops: 0
			}, d = ii(0, 0), d.isGroup = !0, d.dir = e.dir ? Br(e.dir) : void 0, d.padX = o, d.padTop = u.height > 0 ? u.height + 16 : Tm, d.padBottom = o, d.minW = u.width + 2 * o - 12;
		} else {
			let n = Kt(e.shape), r = Q(e.img || e.icon || ha(n) ? e.label : void 0, s, f, c, m, i), a, o, u = 0;
			if (e.img || e.icon) {
				let t = e.img ? 80 : 48, n = Am(e.assetWidth, t), i = Am(e.assetHeight, t);
				a = Math.max(n, r.width + 8), o = i + (r.height > 0 ? r.height + 6 : 0), u = e.pos === "t" ? -i / 2 : i / 2, r.height === 0 && (u = 0);
			} else {
				let e = da(n, r.width, r.height);
				a = e.w, o = e.h, u = e.dy;
			}
			l = {
				node: e,
				style: t,
				label: r,
				shape: n,
				w: a,
				h: o,
				dy: u,
				loops: 0
			}, d = ii(a, o);
		}
		d.seq = v.length, v.push(l), y.push(d);
	}
	l.nodes.forEach((e, t) => {
		y[t].parent = e.parentId === void 0 ? -1 : _.get(e.parentId) ?? -1;
	});
	let b = i ? "TB" : Br(e.direction), x = (e) => {
		let t;
		for (let n = y[e].parent, r = 0; n >= 0 && t === void 0 && r < 1e4; n = y[n].parent, r++) t = y[n].dir;
		return t ??= b, t === "LR" || t === "RL";
	};
	v.forEach((e, t) => {
		e.node.isGroup ? y[t].span = 1 / 0 : !e.node.img && !e.node.icon && (y[t].span = ma(e.shape, e.w, e.h, x(t)));
	});
	let S = [], C = [], w = [];
	for (let e of l.edges) {
		let t = _.get(e.start), n = _.get(e.end);
		if (t === void 0 || n === void 0) continue;
		let r = Q(e.label, e.labelType === "markdown", f, d, m);
		t === n && (v[t].loops++, x(t) ? y[t].h += 2 * (Em + (r.height > 0 ? r.height + 8 : 0)) : y[t].w += 2 * (Em + (r.width > 0 ? r.width + 12 : 0))), w.push(e), C.push(r), S.push({
			src: t,
			dst: n,
			minlen: e.minlen ?? 1,
			labelW: r.width > 0 ? r.width + 12 : 0,
			labelH: r.height > 0 ? r.height + 4 : 0,
			route: [],
			labelX: 0,
			labelY: 0
		});
	}
	let T = {
		nodeSep: km(c, "nodeSpacing", Sm) * (a ? .5 : 1),
		edgeSep: Cm,
		rankSep: km(c, "rankSpacing", wm) * (a ? .75 : 1),
		portSep: 20,
		tracks: typeof c.curve == "string" && /^step/.test(c.curve),
		straight: c.curve === "linear",
		headRoom: vi("arrow_point")
	}, E = r ? r.layout(y, S, b, T, a) : si(y, S, b, T), D = Xs(e.title, f, u, a ? no(n) : 4e3), O = D.height > 0 ? D.height + 12 : 0, k = Math.max(E.width, D.width);
	ri(y, S, h + (k - E.width) / 2, h + O);
	let A = Math.ceil(k + 2 * h), j = Math.ceil(E.height + O + 2 * h), M = [], N = /* @__PURE__ */ new Map(), P = !1;
	for (let e of y) e.isGroup && (P = !0);
	if (P) for (let e of S) ci(N, e.route);
	let F = "", I = "", L = "";
	for (let e = 0; e < v.length; e++) {
		let t = v[e], i = y[e], a = t.node, s = i.x, c = i.y, l = Ri(a.cssClasses.replace(/^default\s?/, "")), u = Y(a.id);
		if (i.isGroup && r?.drawGroup && i.parent < 0) {
			F += r.drawGroup(i, t.label, t.style, l, u, b, g);
			continue;
		}
		if (i.isGroup) {
			let n = li(i, t.label.width, N, o), r = c - i.h / 2 + 8 + t.label.height / 2, a = ` class="pele-cluster-label" fill="var(--_m)"${t.style.text}`, d = ui(i, t.label.width, n, N);
			d && (I += di(t.label, n, r, a, u, y, e, g)), F += `<g class="pele-cluster${l}" data-id="${u}"><rect x="${X(s - i.w / 2)}" y="${X(c - i.h / 2)}" width="${X(i.w)}" height="${X(i.h)}" fill="var(--_a)" fill-opacity="0.5" stroke="var(--_b)"${Ei(t.style.shape)}/>` + (d ? "" : Z(t.label, n, r, a, g)) + "</g>";
			continue;
		}
		let d = t.w, f = t.h, m;
		if (a.img) {
			let e = Am(a.assetWidth, 80), r = Am(a.assetHeight, 80), i = t.label.height > 0 ? a.pos === "t" ? f / 2 - r : -f / 2 : -r / 2, o = It(kt(a.img), n);
			m = o === void 0 ? "" : `<image href="${nt(o)}" x="${X(-e / 2)}" y="${X(i)}" width="${X(e)}" height="${X(r)}" preserveAspectRatio="${a.constraint === "on" ? "xMidYMid meet" : "none"}"/>`;
		} else if (a.icon) {
			let e = Am(a.assetHeight, 48), n = t.label.height > 0 ? a.pos === "t" ? f / 2 - e : -f / 2 : -e / 2, r = a.shape === "icon" ? "" : a.shape === "iconCircle" ? `<circle cy="${X(n + e / 2)}" r="${X(e / 2)}"${Dm}${t.style.shape}/>` : `<rect x="${X(-e / 2)}" y="${X(n)}" width="${X(e)}" height="${X(e)}" rx="${a.shape === "iconRounded" ? 8 : 0}"${Dm}${t.style.shape}/>`, i = e * .6;
			m = r + `<svg class="pele-icon" data-icon="${Y(a.icon)}" x="${X(-i / 2)}" y="${X(n + (e - i) / 2)}" width="${X(i)}" height="${X(i)}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${g?.(a.icon) ?? ""}</svg>`;
		} else m = fa(t.shape, d, f, Dm + t.style.shape, Om + t.style.line);
		let h = Z(t.label, 0, t.dy, ` class="pele-label"${t.style.text}`, g);
		if (/ internal-link(?: |$)/.test(l + " ") && a.label && n.links !== !1) {
			let e = p(a.label), t = Rt(e, n), r = nt(e);
			h = `<a class="internal-link"${t ? ` href="${r}"${Bt(n)}` : ""} data-href="${r}">${h}</a>`, M.push({
				id: a.id,
				href: e,
				internal: !0
			});
		}
		let _ = m + h;
		a.tooltip && (_ = `<title>${Y(a.tooltip)}</title>` + _), a.link && (_ = zt(_, a.link, a.id, M, n, a.linkTarget ? ` target="${nt(a.linkTarget)}"` : "")), L += `<g class="pele-node pele-shape-${t.shape}${l}" data-id="${u}" transform="translate(${X(s)},${X(c)})">${_}</g>`;
	}
	let R = gi();
	for (let e = 0; e < S.length; e++) {
		let t = S[e];
		t.src === t.dst || w[e].thickness === "invisible" || t.route.length < 6 || (R.add(t.src, ga(t.route, 0, y[t.src]), w[e].arrowTypeStart), R.add(t.dst, ga(t.route, t.route.length - 3, y[t.dst]), w[e].arrowTypeEnd));
	}
	let z = "", B = "", V = /* @__PURE__ */ new Map();
	for (let e = 0; e < S.length; e++) {
		let t = S[e], n = w[e], r = C[e], i = n.style.length > 0 || n.cssCompiledStyles.length > 0 ? Ii(n.cssCompiledStyles.concat(n.style)) : void 0;
		if (n.thickness !== "invisible") {
			let e = n.arrowTypeStart, r = n.arrowTypeEnd, a;
			if (t.src === t.dst) {
				let e = v[t.src], n = V.get(t.src) ?? 0;
				V.set(t.src, n + 1), a = xi(y[t.src], e.w, e.h, n, x(t.src), Em, vi(r), t);
			} else {
				let i = t.route.slice(), o = R.of(t.src, ga(i, 0, y[t.src])), s = R.of(t.dst, ga(i, i.length - 3, y[t.dst]));
				_a(i, 0, v[t.src], y[t.src]), _a(i, i.length - 3, v[t.dst], y[t.dst]), a = _i(i, n.curve, vi(e), vi(r), o, s);
			}
			let o = i?.stroke && n.thickness !== "invisible" ? nt(i.stroke) : "var(--_l)", s = "";
			n.thickness === "thick" ? s += " stroke-width=\"2.5\"" : n.thickness === "dotted" && (s += " stroke-dasharray=\"3 4\"");
			let c = Ri(n.classes.replace(/edge-thickness-normal|edge-pattern-solid|flowchart-link/g, ""));
			z += `<g class="pele-edge${c}" data-id="${Y(n.id)}"${i?.line ?? ""}><path d="${a.d}"${s}/>` + yi(e, a.sx, a.sy, a.sdx, a.sdy, o) + yi(r, a.ex, a.ey, a.edx, a.edy, o) + "</g>";
		}
		if (r.width > 0) {
			let e = t.labelX, a = t.labelY;
			B += bi(n.id, r, e, a, i?.text ?? "", g);
		}
	}
	return {
		svg: Ui(r?.type ?? "flowchart", A, j, u, n, e, Z(D, A / 2, h + D.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + (F ? `<g class="pele-clusters">${F}</g>` : "") + (z ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round">${z}</g>` : "") + (I ? `<g class="pele-cluster-titles">${I}</g>` : "") + (B ? `<g class="pele-edge-labels" font-size="${d}">${B}</g>` : "") + `<g class="pele-nodes">${L}</g>`),
		width: A,
		height: j,
		links: M
	};
}
var Nm = {
	type: "flowchart",
	math: !0,
	parse(e, t, n, r, i) {
		let a = new Lp({
			inheritDir: (t.flowchart ?? {}).inheritDir === !0,
			maxEdges: i.maxEdges
		});
		return n && (a.title = n), gm(e, a), a;
	},
	render: jm
}, Pm = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
], Fm = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
function Im(e) {
	return !Number.isNaN(e.getTime());
}
function Lm(e, t) {
	let n = String(e);
	return n.length >= t ? n : "0".repeat(t - n.length) + n;
}
function Rm(e) {
	let t = [
		"th",
		"st",
		"nd",
		"rd"
	], n = e % 100;
	return e + (t[(n - 20) % 10] || t[n] || t[0]);
}
function zm(e) {
	let t = -Math.round(e.getTimezoneOffset() / 15) * 15;
	return t === 0 ? 0 : t;
}
function Bm(e) {
	let t = zm(e), n = Math.abs(t);
	return (t >= 0 ? "+" : "-") + Lm(Math.floor(n / 60), 2) + ":" + Lm(n % 60, 2);
}
function Vm(e) {
	return e.getDay() || 7;
}
function Hm(e, t) {
	let n = new Date(e);
	return n.setDate(n.getDate() + t), n;
}
function Um(e) {
	let t = new Date(e.getFullYear(), e.getMonth() + 1, 0);
	return t.setHours(23, 59, 59, 999), t.getDate();
}
function Wm(e, t) {
	let n = new Date(e);
	return n.setDate(1), t(n), n.setDate(Math.min(e.getDate(), Um(n))), n;
}
function Gm(e, t, n) {
	switch (n) {
		case "M": return Wm(e, (n) => n.setMonth(e.getMonth() + t));
		case "y": return Wm(e, (n) => n.setFullYear(e.getFullYear() + t));
		case "d": return Hm(e, Math.round(t));
		case "w": return Hm(e, Math.round(7 * t));
		case "h": return new Date(e.getTime() + t * 36e5);
		case "m": return new Date(e.getTime() + t * 6e4);
		case "s": return new Date(e.getTime() + t * 1e3);
		default: return new Date(e.getTime() + t);
	}
}
function Km(e) {
	return Hm(e, 4 - Vm(e));
}
function qm(e) {
	let t = Km(e), n = new Date(t.getFullYear(), 0, 1), r = Vm(n), i = Hm(n, 4 - r + (r > 4 ? 7 : 0)), a = (zm(i) - zm(t)) * 6e4, o = (t.getTime() - i.getTime() - a) / 6048e5;
	return (o < 0 ? Math.ceil(o) || 0 : Math.floor(o)) + 1;
}
var Jm = /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, Ym = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, Xm = "YYYY-MM-DDTHH:mm:ssZ";
function Zm(e, t) {
	if (!Im(e)) return "Invalid Date";
	let n = t || Xm;
	if (n === "YYYY-MM-DD") return Qm(e);
	let r = !1, i = n.replace(Jm, (t) => {
		switch (t) {
			case "Q": return String(Math.ceil((e.getMonth() + 1) / 3));
			case "Do": return "[" + Rm(e.getDate()) + "]";
			case "GGGG": return String(Km(e).getFullYear());
			case "W": return String(qm(e));
			case "WW": return Lm(qm(e), 2);
			case "k": return String(e.getHours() || 24);
			case "kk": return Lm(e.getHours() || 24, 2);
			case "X": return String(Math.floor(e.getTime() / 1e3));
			case "x": return String(e.getTime());
			case "gggg":
			case "wo":
			case "w":
			case "ww":
			case "z":
			case "zzz": return r = !0, t;
			default: return t;
		}
	});
	if (r) return;
	let a = e.getHours();
	return i.replace(Ym, (t, n) => {
		if (n) return n;
		switch (t) {
			case "YY": return String(e.getFullYear()).slice(-2);
			case "YYYY": return Lm(e.getFullYear(), 4);
			case "M": return String(e.getMonth() + 1);
			case "MM": return Lm(e.getMonth() + 1, 2);
			case "MMM": return Pm[e.getMonth()].slice(0, 3);
			case "MMMM": return Pm[e.getMonth()];
			case "D": return String(e.getDate());
			case "DD": return Lm(e.getDate(), 2);
			case "d": return String(e.getDay());
			case "dd": return Fm[e.getDay()].slice(0, 2);
			case "ddd": return Fm[e.getDay()].slice(0, 3);
			case "dddd": return Fm[e.getDay()];
			case "H": return String(a);
			case "HH": return Lm(a, 2);
			case "h": return String(a % 12 || 12);
			case "hh": return Lm(a % 12 || 12, 2);
			case "a": return a < 12 ? "am" : "pm";
			case "A": return a < 12 ? "AM" : "PM";
			case "m": return String(e.getMinutes());
			case "mm": return Lm(e.getMinutes(), 2);
			case "s": return String(e.getSeconds());
			case "ss": return Lm(e.getSeconds(), 2);
			case "SSS": return Lm(e.getMilliseconds(), 3);
			case "Z": return Bm(e);
			default: return Bm(e).replace(":", "");
		}
	});
}
function Qm(e) {
	let t = e.getFullYear(), n = e.getMonth() + 1, r = e.getDate();
	return (t >= 1e3 && t <= 9999 ? t : Lm(t, 4)) + (n < 10 ? "-0" : "-") + n + (r < 10 ? "-0" : "-") + r;
}
var $m = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, eh = /\[[^\]]+]/g, th = /\d/, nh = /\d\d/, rh = /\d{3}/, ih = /\d{4}/, ah = /\d\d?/, oh = /[+-]?\d+/, sh = /[+-]\d\d:?(\d\d)?|Z/, ch = /\d*[^-_:/,()\s\d]+/;
function lh(e) {
	return (t, n) => (t[e] = +n, !0);
}
var uh = (e, t) => {
	if (t === "Z") return e.offset = 0, !0;
	let n = t.match(/([+-]|\d\d)/g), r = n[1] * 60 + (+n[2] || 0);
	return e.offset = r === 0 ? 0 : n[0] === "+" ? -r : r, !0;
};
function dh(e) {
	return (t, n) => {
		let r = e.indexOf(n) + 1;
		return r < 1 ? !1 : (t.month = r % 12 || r, !0);
	};
}
var fh = /* @__PURE__ */ new Map([
	["A", {
		re: ch,
		read: (e, t) => (e.afternoon = t === "PM", !0)
	}],
	["a", {
		re: ch,
		read: (e, t) => (e.afternoon = t === "pm", !0)
	}],
	["Q", {
		re: th,
		read: (e, t) => (e.month = (t - 1) * 3 + 1, !0)
	}],
	["S", {
		re: th,
		read: (e, t) => (e.milliseconds = t * 100, !0)
	}],
	["SS", {
		re: nh,
		read: (e, t) => (e.milliseconds = t * 10, !0)
	}],
	["SSS", {
		re: rh,
		read: (e, t) => (e.milliseconds = +t, !0)
	}],
	["s", {
		re: ah,
		read: lh("seconds")
	}],
	["ss", {
		re: ah,
		read: lh("seconds")
	}],
	["m", {
		re: ah,
		read: lh("minutes")
	}],
	["mm", {
		re: ah,
		read: lh("minutes")
	}],
	["H", {
		re: ah,
		read: lh("hours")
	}],
	["h", {
		re: ah,
		read: lh("hours")
	}],
	["HH", {
		re: ah,
		read: lh("hours")
	}],
	["hh", {
		re: ah,
		read: lh("hours")
	}],
	["D", {
		re: ah,
		read: lh("day")
	}],
	["DD", {
		re: nh,
		read: lh("day")
	}],
	["Do", {
		re: ch,
		read: (e, t) => {
			let n = t.match(/\d+/);
			if (!n) return !1;
			e.day = +n[0], e.dayGiven = !0;
			for (let n = 1; n <= 31; n++) Rm(n) === t && (e.day = n);
			return !0;
		}
	}],
	["w", {
		re: ah,
		read: lh("week")
	}],
	["ww", {
		re: nh,
		read: lh("week")
	}],
	["M", {
		re: ah,
		read: lh("month")
	}],
	["MM", {
		re: nh,
		read: lh("month")
	}],
	["MMM", {
		re: ch,
		read: dh(Pm.map((e) => e.slice(0, 3)))
	}],
	["MMMM", {
		re: ch,
		read: dh(Pm)
	}],
	["Y", {
		re: oh,
		read: lh("year")
	}],
	["YY", {
		re: nh,
		read: (e, t) => (e.year = +t + (+t > 68 ? 1900 : 2e3), !0)
	}],
	["YYYY", {
		re: ih,
		read: lh("year")
	}],
	["Z", {
		re: sh,
		read: uh
	}],
	["ZZ", {
		re: sh,
		read: uh
	}]
]), ph, mh = null;
function hh(e) {
	if (e === ph) return mh;
	if (ph = e, mh = null, /[Ll]/.test(e.replace(eh, ""))) return null;
	let t = e.match($m);
	return t ? (mh = t.map((e) => fh.get(e) ?? e.replace(/^\[|\]$/g, "")), mh) : null;
}
function gh(e, t, n) {
	if (t === "x" || t === "X") return /* @__PURE__ */ new Date((t === "X" ? 1e3 : 1) * Number(e));
	let r = hh(t);
	if (!r) return;
	let i = {}, a = e, o = 0;
	for (let e of r) {
		if (typeof e == "string") {
			o += e.length;
			continue;
		}
		let t = e.re.exec(a.slice(o));
		if (!t || !e.read(i, t[0])) return;
		a = a.replace(t[0], "");
	}
	i.afternoon !== void 0 && i.hours !== void 0 && (i.afternoon ? i.hours < 12 && (i.hours += 12) : i.hours === 12 && (i.hours = 0));
	let s = i.dayGiven || i.day ? i.day : !i.year && !i.month ? n.getDate() : 1, c = i.year || n.getFullYear(), l = 0;
	i.year && !i.month || (l = i.month > 0 ? i.month - 1 : n.getMonth());
	let u = i.hours || 0, d = i.minutes || 0, f = i.seconds || 0, p = i.milliseconds || 0;
	if (i.offset !== void 0) return new Date(Date.UTC(c, l, s, u, d, f, p + i.offset * 6e4));
	if (!i.week) return new Date(c, l, s, u, d, f, p);
}
function _h(e, t, n) {
	let r = gh(e, t, n);
	return r && Im(r) && Zm(r, t) === e ? r : void 0;
}
var vh = /^[YMDHhmsSZXx\-/.:, T]*$/, yh = /^\s*(active|done|crit|milestone|vert)\s*$/, bh = /^after\s+([\d\w- ]+)/, xh = /^until\s+([\d\w- ]+)/, Sh = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/, Ch = /[\s,]+/, wh = /^\d+$/, Th = new Set(Fm.map((e) => e.toLowerCase())), Eh = 4e8, Dh = 400, Oh = 200, kh = 400;
function Ah(e) {
	let t = e === void 0 ? NaN : +e;
	return Number.isFinite(t) ? t : Date.now();
}
function jh(e) {
	let t = Sh.exec(e.trim());
	return t ? [Number.parseFloat(t[1]), t[2]] : [NaN, "ms"];
}
function Mh(e, t) {
	let n = new Set(e);
	for (let e of t.toLowerCase().split(Ch)) e !== "" && n.add(e);
	return [...n];
}
var Nh = class {
	type = "gantt";
	title;
	accTitle;
	accDescr;
	dateFormat = "";
	axisFormat = "";
	tickInterval;
	todayMarker = "";
	includes = [];
	excludes = [];
	inclusiveEndDates = !1;
	topAxis = !1;
	displayMode = "";
	weekday;
	weekend = "saturday";
	sections = [];
	links = /* @__PURE__ */ new Map();
	tasks = [];
	byId = /* @__PURE__ */ new Map();
	currentSection = "";
	taskCount = 0;
	lastOrder = 0;
	lastTaskId;
	options;
	now = 0;
	work = 0;
	includeSet = /* @__PURE__ */ new Set();
	excludeSet = /* @__PURE__ */ new Set();
	excludedDays = [];
	datedTokens = !1;
	constructor(e = {}) {
		this.options = e;
	}
	setDateFormat(e) {
		this.dateFormat = e;
	}
	enableInclusiveEndDates() {
		this.inclusiveEndDates = !0;
	}
	TopAxis() {
		this.topAxis = !0;
	}
	setAxisFormat(e) {
		this.axisFormat = e;
	}
	setTickInterval(e) {
		this.tickInterval = e;
	}
	setTodayMarker(e) {
		this.todayMarker = e;
	}
	setIncludes(e) {
		this.includes = Mh(this.includes, e);
	}
	setExcludes(e) {
		this.excludes = Mh(this.excludes, e);
	}
	setWeekday(e) {
		this.weekday = e;
	}
	setWeekend(e) {
		this.weekend = e;
	}
	setDiagramTitle(e) {
		this.title = e;
	}
	setAccTitle(e) {
		this.accTitle = e.replace(/^\s+/g, "");
	}
	setAccDescription(e) {
		this.accDescr = e.replace(/\n\s+/g, "\n");
	}
	addSection(e) {
		this.currentSection = e, this.sections.push(e);
	}
	addTask(e, t) {
		let r = (t.startsWith(":") ? t.slice(1) : t).split(","), i = {
			id: "",
			task: e,
			section: this.currentSection,
			startTime: void 0,
			endTime: void 0,
			renderEndTime: null,
			manualEndTime: !1,
			processed: !1,
			active: !1,
			done: !1,
			crit: !1,
			milestone: !1,
			vert: !1,
			order: -1,
			classes: [],
			prevTaskId: this.lastTaskId,
			raw: {
				data: t,
				start: void 0,
				end: ""
			}
		}, a;
		for (; r.length > 0 && (a = yh.exec(r[0])) !== null;) i[a[1]] = !0, r.shift();
		if (r.length === 0) throw new n(`Task "${e.trim()}" needs a duration or an end date.`, "semantic", { type: "gantt" });
		if (r.length > 3) throw new n(`Task "${e.trim()}" has too many fields. A task takes an id, a start, and an end or duration.`, "semantic", { type: "gantt" });
		for (let e = 0; e < r.length; e++) r[e] = r[e].trim();
		r.length === 3 ? i.id = r[0] : (this.taskCount++, i.id = "task" + this.taskCount), r.length > 1 && (i.raw.start = r[r.length - 2]), i.raw.end = r[r.length - 1], i.vert || (i.order = this.lastOrder++), this.tasks.push(i), this.lastTaskId = i.id, this.byId.set(i.id, i);
	}
	setLink(e, t) {
		let n = kt(t);
		for (let t of e.split(",")) this.byId.has(t) && this.links.set(t, n);
		this.setClass(e, "clickable");
	}
	setClickEvent(e, t, n) {
		this.setClass(e, "clickable");
	}
	setClass(e, t) {
		for (let n of e.split(",")) this.byId.get(n)?.classes.push(t);
	}
	getTasks(e) {
		this.now = Ah(e), this.work = 0, this.includeSet = new Set(this.includes), this.excludeSet = new Set(this.excludes);
		let t = this.weekend === "friday" ? 5 : this.weekend === "saturday" ? 6 : NaN, n = this.excludeSet.has("weekends");
		this.excludedDays = Fm.map((e, r) => {
			let i = r || 7;
			return n && (i === t || i === t + 1) || this.excludeSet.has(e.toLowerCase());
		}), this.datedTokens = this.includes.length > 0 || !vh.test(this.dateFormat.trim());
		for (let e of this.excludes) e !== "weekends" && !Th.has(e) && (this.datedTokens = !0);
		for (let e of this.tasks) e.startTime = e.endTime = void 0, e.renderEndTime = null, e.processed = e.manualEndTime = !1;
		let r = this.compileTasks();
		for (let e = 0; !r && e < 10; e++) r = this.compileTasks();
		return this.tasks;
	}
	isInvalidDate(e) {
		let t = this.excludedDays[e.getDay()];
		if (!this.datedTokens) return t;
		let n = this.dateFormat.trim(), r = Qm(e), i = r;
		this.spend(Oh), n !== "YYYY-MM-DD" && (this.spend(kh + n.length * 8), i = Zm(e, n));
		let a = (e) => e.has(r) || i !== void 0 && e.has(i);
		return a(this.includeSet) ? !1 : t || a(this.excludeSet);
	}
	spend(e) {
		if (this.work += e, this.work > Eh) throw new n("The gantt chart takes too much work to schedule.", "limit", { type: "gantt" });
	}
	parse(e, t) {
		return this.spend((t.length + 1) * (e.length + 1)), _h(e, t, new Date(this.now));
	}
	today() {
		let e = new Date(this.now);
		return e.setHours(0, 0, 0, 0), e;
	}
	warn(e) {
		this.options.warn && this.options.warn(e());
	}
	compileTasks() {
		let e = !0;
		for (let t of this.tasks) this.compileTask(t), e &&= t.processed;
		return e;
	}
	compileTask(e) {
		let t = e.raw.start;
		if (t === void 0) {
			let t = e.prevTaskId === void 0 ? void 0 : this.byId.get(e.prevTaskId);
			e.startTime = t ? t.endTime : this.today();
		} else {
			let n = this.getStartDate(t);
			n && (e.startTime = n);
		}
		e.startTime && (e.endTime = this.getEndDate(e.startTime, e.raw.end), e.endTime && (e.processed = !0, e.manualEndTime = this.parse(e.raw.end, "YYYY-MM-DD") !== void 0, this.checkTaskDates(e)));
	}
	references(e, t) {
		let n = [], r;
		for (let e of t.split(" ")) {
			if (e === "") continue;
			let t = this.byId.get(e);
			t ? n.push(t) : (r ??= []).push(e);
		}
		if (r) {
			let t = r;
			this.warn(() => `Gantt: "${e}" refers to task ids that do not exist: ${t.join(", ")}.`);
		}
		return n;
	}
	getStartDate(e) {
		let t = e.trim(), r = this.dateFormat.trim();
		if ((r === "x" || r === "X") && wh.test(t)) return this.checked(new Date(Number(t)), t);
		let i = bh.exec(t);
		if (i !== null) {
			let e = this.references("after", i[1]), t;
			for (let n of e) (!t || n.endTime > t.endTime) && (t = n);
			return t ? t.endTime : this.today();
		}
		let a = this.parse(t, r);
		if (a) return a;
		let o = new Date(t);
		if (!Im(o) || o.getFullYear() < -1e4 || o.getFullYear() > 1e4) throw new n("Invalid date:" + t, "semantic", { type: "gantt" });
		return o;
	}
	checked(e, t) {
		if (!Im(e)) throw new n("Invalid date:" + t, "semantic", { type: "gantt" });
		return e;
	}
	getEndDate(e, t) {
		let n = t.trim(), r = xh.exec(n);
		if (r !== null) {
			let e = this.references("until", r[1]), t;
			for (let n of e) (!t || n.startTime < t.startTime) && (t = n);
			return t ? t.startTime : this.today();
		}
		let i = this.dateFormat.trim(), a = this.parse(n, i);
		if (a) return this.inclusiveEndDates ? Hm(a, 1) : a;
		let [o, s] = jh(n);
		if (Number.isNaN(o)) return this.warn(() => `Gantt: "${n}" is neither a date in the "${i}" format nor a duration such as "3d", so the task gets no duration.`), new Date(e);
		let c = Gm(e, o, s);
		return Im(c) ? c : new Date(e);
	}
	checkTaskDates(e) {
		if (this.excludes.length === 0 || e.manualEndTime) return;
		let t = Hm(e.startTime, 1), r = new Date(e.endTime), i = +Hm(r, 1e4), a = !1, o = null;
		for (; +t <= +r;) {
			if (this.spend(Dh), a || (o = +r), a = this.isInvalidDate(t), a && (r.setDate(r.getDate() + 1), +r > i)) throw new n("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.", "semantic", { type: "gantt" });
			t.setDate(t.getDate() + 1);
		}
		e.endTime = r, e.renderEndTime = o === null ? null : new Date(o);
	}
}, Ph = /* @__PURE__ */ "$end.INVALID.open_directive.acc_title.acc_title_value.acc_descr.acc_descr_value.acc_descr_multiline_value.NL.href.callbackname.callbackargs.click.gantt.dateFormat.inclusiveEndDates.topAxis.axisFormat.tickInterval.includes.excludes.todayMarker.weekday_monday.weekday_tuesday.weekday_wednesday.weekday_thursday.weekday_friday.weekday_saturday.weekday_sunday.weekend_friday.weekend_saturday.date.title.accDescription.section.taskTxt.taskData.:.EOF".split("."), Fh = /accTitle\s*:\s*/iy, Ih = /accDescr\s*:\s*/iy, Lh = /accDescr\s*\{\s*/iy, Rh = /href\s+"/iy, zh = /call\s+/iy, Bh = /click\s+/iy, Vh = /\(\s*\)/y, Hh = /weekday\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/iy, Uh = [
	"monday",
	"tuesday",
	"wednesday",
	"thursday",
	"friday",
	"saturday",
	"sunday"
], Wh = /weekend\s+(?:(friday)|saturday)\b/iy, Gh = /\d\d\d\d-\d\d-\d\d\b/y, Kh = /* @__PURE__ */ new Map([
	[97, [[/axisFormat\s[^#\n;]+/iy, 17], [/accDescription\s[^#\n;]+/iy, 33]]],
	[103, [[/gantt\b/iy, 13]]],
	[100, [[/dateFormat\s[^#\n;]+/iy, 14]]],
	[105, [[/inclusiveEndDates\b/iy, 15], [/includes\s[^#\n;]+/iy, 19]]],
	[116, [
		[/topAxis\b/iy, 16],
		[/tickInterval\s[^#\n;]+/iy, 18],
		[/todayMarker\s[^\n;]+/iy, 21],
		[/title\s[^\n]+/iy, 32]
	]],
	[101, [[/excludes\s[^#\n;]+/iy, 20]]],
	[115, [[/section\s[^\n]+/iy, 34]]]
]);
function qh(e) {
	let t = e.length, n = [], r = [], i = [], a = 0, o = 0, s = (t, a, s) => {
		n.push(t), r.push(e.slice(a, s)), i.push(a), o = s;
	}, c = (t) => (t.lastIndex = o, t.test(e) ? t.lastIndex : -1), l = (n, r) => {
		let i = e.indexOf(n, r);
		return i === -1 ? t : i;
	}, u = (t) => {
		let n;
		switch (t | 32) {
			case 97:
				if ((n = c(Fh)) >= 0) return a = 1, s(3, o, n), !0;
				if ((n = c(Ih)) >= 0) return a = 2, s(5, o, n), !0;
				if ((n = c(Lh)) >= 0) return a = 3, o = n, !0;
				break;
			case 104:
				if ((n = c(Rh)) >= 0) return a = 4, o = n, !0;
				break;
			case 99:
				if ((n = c(zh)) >= 0) return a = 5, o = n, !0;
				if ((n = c(Bh)) >= 0) return a = 7, o = n, !0;
				break;
			case 119: {
				Hh.lastIndex = o;
				let t = Hh.exec(e);
				if (t) return s(22 + Uh.indexOf(t[1].toLowerCase()), o, Hh.lastIndex), !0;
				if (Wh.lastIndex = o, t = Wh.exec(e), t) return s(t[1] === void 0 ? 30 : 29, o, Wh.lastIndex), !0;
				break;
			}
		}
		let r = Kh.get(t | 32);
		if (r) {
			for (let [e, t] of r) if ((n = c(e)) >= 0) return s(t, o, n), !0;
		}
		return !1;
	};
	for (;;) {
		if (o >= t) {
			let e = 38;
			switch (a) {
				case 1:
					e = 4;
					break;
				case 2:
					e = 6;
					break;
				case 3:
					e = 7;
					break;
				case 4:
					e = 9;
					break;
				case 5:
					e = 10;
					break;
				case 6:
					e = 11;
					break;
				case 7: e = 12;
			}
			s(e, t, t);
			break;
		}
		let d = e.charCodeAt(o);
		switch (a) {
			case 0: {
				let a = e.charCodeAt(o + 1);
				if (d === 37) {
					if (a !== 37) {
						let t = l("\n", o + 1);
						for (; e.charCodeAt(t) === 10;) t++;
						o = t;
					} else {
						if (e.charCodeAt(o + 2) === 123) return s(2, o, o + 3), s(1, o, o), {
							types: n,
							texts: r,
							starts: i
						};
						o = l("\n", o + 2);
					}
				} else if (d !== 125 && a === 37) o = l("\n", o + 2);
				else if (d === 10) {
					let t = o + 1;
					for (; e.charCodeAt(t) === 10;) t++;
					s(8, o, t);
				} else if (G(d)) for (o++; o < t && G(e.charCodeAt(o));) o++;
				else {
					if (u(d)) break;
					if (d >= 48 && d <= 57 && c(Gh) >= 0) s(31, o, o + 10);
					else if (d !== 58) {
						let n = o + 1;
						for (; n < t;) {
							let t = e.charCodeAt(n);
							if (t === 58 || t === 10) break;
							n++;
						}
						s(35, o, n);
					} else {
						let n = o + 1;
						for (; n < t;) {
							let t = e.charCodeAt(n);
							if (t === 35 || t === 10 || t === 59) break;
							n++;
						}
						s(n > o + 1 ? 36 : 37, o, n);
					}
				}
				break;
			}
			case 1:
			case 2: {
				let e = a === 1 ? 4 : 6;
				a = 0, s(e, o, l("\n", o));
				break;
			}
			case 3:
				d === 125 ? (a = 0, o++) : s(7, o, l("}", o));
				break;
			case 4:
				d === 34 ? (a = 0, o++) : s(9, o, l("\"", o));
				break;
			case 5:
				if (d === 40) {
					let e = c(Vh);
					e >= 0 ? (a = 0, o = e) : (a = 6, o++);
				} else s(10, o, l("(", o));
				break;
			case 6:
				d === 41 ? (a = 0, o++) : s(11, o, l(")", o));
				break;
			case 7: if (G(d)) a = 0, o++;
			else {
				let n = o + 1;
				for (; n < t && !G(e.charCodeAt(n));) n++;
				s(12, o, n);
			}
		}
	}
	return n.push(0), r.push(""), i.push(t), {
		types: n,
		texts: r,
		starts: i
	};
}
var Jh = [
	"monday",
	"tuesday",
	"wednesday",
	"thursday",
	"friday",
	"saturday",
	"sunday"
], Yh = "'EOF', 'SPACE', 'NL', 'weekday_monday', 'weekday_tuesday', 'weekday_wednesday', 'weekday_thursday', 'weekday_friday', 'weekday_saturday', 'weekday_sunday', 'weekend_friday', 'weekend_saturday', 'dateFormat', 'inclusiveEndDates', 'topAxis', 'axisFormat', 'tickInterval', 'excludes', 'includes', 'todayMarker', 'title', 'acc_title', 'acc_descr', 'acc_descr_multiline_value', 'section', 'taskTxt', 'click'", Xh = /* @__PURE__ */ new Uint8Array(39);
for (let e = 22; e <= 30; e++) Xh[e] = 1;
for (let e of [
	38,
	8,
	14,
	15,
	16,
	17,
	18,
	20,
	19,
	21,
	32,
	3,
	5,
	7,
	34,
	35,
	12
]) Xh[e] = 1;
function Zh(e, t) {
	let { types: n, texts: r, starts: a } = qh(e), o = 0, s = (t) => {
		let r = n[o];
		throw i("gantt", e, a[o], `Expecting ${t}, got '${r === 0 ? "1" : Ph[r]}'`);
	}, c = (e = "") => {
		Xh[n[o]] !== 1 && s(Yh + e);
	};
	for (n[o] !== 13 && s("'gantt'"), o++;;) {
		let e = n[o], i = r[o];
		switch (Xh[e] !== 1 && s(Yh), o++, e) {
			case 38:
				if (n[o] === 0) return;
				c();
				break;
			case 8: break;
			case 14:
				c(), t.setDateFormat(i.slice(11));
				break;
			case 15:
				c(), t.enableInclusiveEndDates();
				break;
			case 16:
				c(), t.TopAxis();
				break;
			case 17:
				c(), t.setAxisFormat(i.slice(11));
				break;
			case 18:
				c(), t.setTickInterval(i.slice(13));
				break;
			case 20:
				c(), t.setExcludes(i.slice(9));
				break;
			case 19:
				c(), t.setIncludes(i.slice(9));
				break;
			case 21:
				c(), t.setTodayMarker(i.slice(12));
				break;
			case 29:
				c(), t.setWeekend("friday");
				break;
			case 30:
				c(), t.setWeekend("saturday");
				break;
			case 32:
				c(), t.setDiagramTitle(i.slice(6));
				break;
			case 3: {
				n[o] !== 4 && s("'acc_title_value'");
				let e = r[o++];
				c(), t.setAccTitle(e.trim());
				break;
			}
			case 5: {
				n[o] !== 6 && s("'acc_descr_value'");
				let e = r[o++];
				c(), t.setAccDescription(e.trim());
				break;
			}
			case 7:
				c(), t.setAccDescription(i.trim());
				break;
			case 34:
				c(), t.addSection(i.slice(8));
				break;
			case 35: {
				n[o] !== 36 && s("'taskData'");
				let e = r[o++];
				c(), t.addTask(i, e);
				break;
			}
			case 12: {
				let e, a = null, l;
				n[o] === 10 ? (e = r[o++], n[o] === 11 && (a = r[o++]), n[o] === 9 ? (l = r[o++], c()) : c(a === null ? ", 'callbackargs', 'href'" : ", 'href'")) : n[o] === 9 ? (l = r[o++], n[o] === 10 ? (e = r[o++], n[o] === 11 ? (a = r[o++], c()) : c(", 'callbackargs'")) : c(", 'callbackname'")) : s("'callbackname', 'href'"), e !== void 0 && t.setClickEvent(i, e, a), l !== void 0 && t.setLink(i, l);
				break;
			}
			default: c(), t.setWeekday(Jh[e - 22]);
		}
	}
}
var Qh = 1e3, $h = 60 * Qh, eg = 60 * $h, tg = 24 * eg, ng = 7 * tg, rg = 30 * tg, ig = 365 * tg;
function ag(e) {
	e.setHours(0, 0, 0, 0);
}
function og(e) {
	return {
		floor(t) {
			t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), ag(t);
		},
		offset: (e, t) => e.setDate(e.getDate() + t * 7),
		cycle: 1 / 0,
		ms: ng
	};
}
var sg = {
	millisecond: {
		floor: () => {},
		offset: (e, t) => e.setTime(+e + t),
		cycle: 1 / 0,
		ms: 1
	},
	second: {
		floor: (e) => e.setTime(+e - e.getMilliseconds()),
		offset: (e, t) => e.setTime(+e + t * Qh),
		field: (e) => e.getUTCSeconds(),
		cycle: 60,
		ms: Qh
	},
	minute: {
		floor: (e) => e.setTime(+e - e.getMilliseconds() - e.getSeconds() * Qh),
		offset: (e, t) => e.setTime(+e + t * $h),
		field: (e) => e.getMinutes(),
		cycle: 60,
		ms: $h
	},
	hour: {
		floor: (e) => e.setTime(+e - e.getMilliseconds() - e.getSeconds() * Qh - e.getMinutes() * $h),
		offset: (e, t) => e.setTime(+e + t * eg),
		field: (e) => e.getHours(),
		cycle: 24,
		ms: eg
	},
	day: {
		floor: ag,
		offset: (e, t) => e.setDate(e.getDate() + t),
		field: (e) => e.getDate() - 1,
		cycle: 31,
		ms: tg
	},
	month: {
		floor(e) {
			e.setDate(1), ag(e);
		},
		offset: (e, t) => e.setMonth(e.getMonth() + t),
		field: (e) => e.getMonth(),
		cycle: 12,
		ms: rg
	},
	year: {
		floor(e) {
			e.setMonth(0, 1), ag(e);
		},
		offset: (e, t) => e.setFullYear(e.getFullYear() + t),
		cycle: 1 / 0,
		ms: ig
	}
};
function cg(e, t, n) {
	return Math.floor((+t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * $h) / n);
}
function lg(e, t) {
	return (e % t + t) % t;
}
function ug(e, t, n) {
	let r = e === "week" ? og(n) : sg[e];
	if (t <= 1) return r;
	if (e === "millisecond") return {
		...r,
		floor: (e) => e.setTime(Math.floor(+e / t) * t),
		offset: (e, n) => e.setTime(+e + n * t)
	};
	if (e === "year") return {
		...r,
		floor(e) {
			e.setFullYear(Math.floor(e.getFullYear() / t) * t), r.floor(e);
		},
		offset: (e, n) => e.setFullYear(e.getFullYear() + n * t)
	};
	if (e === "week") {
		let e = /* @__PURE__ */ new Date(0);
		return r.floor(e), {
			...r,
			floor(n) {
				r.floor(n), r.offset(n, -lg(cg(e, n, ng), t));
			},
			offset: (e, n) => r.offset(e, n * t)
		};
	}
	let i = r.field, a = (e) => i(e) % t === 0;
	return {
		...r,
		floor(e) {
			for (r.floor(e); Number.isFinite(+e) && !a(e); r.floor(e)) e.setTime(e - 1);
		},
		offset(e, t) {
			for (let n = 0; n < t && Number.isFinite(+e); n++) do
				r.offset(e, 1);
			while (Number.isFinite(+e) && !a(e));
		}
	};
}
function dg(e, t, n, r) {
	let i = /* @__PURE__ */ new Date(t - 1);
	e.floor(i), e.offset(i, 1), e.floor(i);
	let a = [], o = -1 / 0;
	for (; +i <= n && +i > o;) {
		if (a.length >= r) return;
		o = +i, a.push(o), e.offset(i, 1), e.floor(i);
	}
	return a;
}
function fg(e, t, n) {
	let r = (t - e) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / 10 ** i;
	return 10 ** i * (a >= Math.sqrt(50) ? 10 : a >= Math.sqrt(10) ? 5 : a >= Math.SQRT2 ? 2 : 1);
}
var pg = [
	[
		"second",
		1,
		Qh
	],
	[
		"second",
		5,
		5 * Qh
	],
	[
		"second",
		15,
		15 * Qh
	],
	[
		"second",
		30,
		30 * Qh
	],
	[
		"minute",
		1,
		$h
	],
	[
		"minute",
		5,
		5 * $h
	],
	[
		"minute",
		15,
		15 * $h
	],
	[
		"minute",
		30,
		30 * $h
	],
	[
		"hour",
		1,
		eg
	],
	[
		"hour",
		3,
		3 * eg
	],
	[
		"hour",
		6,
		6 * eg
	],
	[
		"hour",
		12,
		12 * eg
	],
	[
		"day",
		1,
		tg
	],
	[
		"day",
		2,
		2 * tg
	],
	[
		"week",
		1,
		ng
	],
	[
		"month",
		1,
		rg
	],
	[
		"month",
		3,
		3 * rg
	],
	[
		"year",
		1,
		ig
	]
];
function mg(e, t, n) {
	let r = (t - e) / n, i = 0;
	for (; i < pg.length && pg[i][2] <= r;) i++;
	let a;
	if (i === pg.length) a = ug("year", Math.max(1, fg(e / ig, t / ig, n)), 0);
	else if (i === 0) a = ug("millisecond", Math.max(fg(e, t, n), 1), 0);
	else {
		let [e, t] = pg[r / pg[i - 1][2] < pg[i][2] / r ? i - 1 : i];
		a = ug(e, t, 0);
	}
	return dg(a, e, t, 4 * n + 8) ?? [];
}
var hg = /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/, gg = [
	"sunday",
	"monday",
	"tuesday",
	"wednesday",
	"thursday",
	"friday",
	"saturday"
];
function _g(e, t, n, r, i) {
	let a = hg.exec(e);
	if (!a) return;
	let o = parseInt(a[1], 10), s = a[2], c = ug(s, o, Math.max(0, gg.indexOf(t)));
	if (!((r - n) / (Math.min(o, c.cycle) * c.ms) > i)) return dg(c, n, r, i);
}
function vg(e, t, n) {
	let r = e < 0 ? "-" : "", i = String(r ? -e : e);
	return r + (i.length < n ? t.repeat(n - i.length) + i : i);
}
function yg(e, t) {
	let n = /* @__PURE__ */ new Date(+e);
	return t.floor(n), n;
}
function bg(e, t) {
	let n = og(t), r = yg(e, sg.year);
	return cg(yg(/* @__PURE__ */ new Date(r - 1), n), yg(e, n), ng);
}
function xg(e) {
	let t = og(4), n = e.getDay(), r = yg(n >= 4 || n === 0 ? e : /* @__PURE__ */ new Date(e - 1), t);
	return n >= 4 || n === 0 || (t.offset(r, 1), t.floor(r)), r;
}
var Sg = /* @__PURE__ */ new Map([
	["-", ""],
	["_", " "],
	["0", "0"]
]);
function Cg(e, t) {
	let n = "", r = 0, i = e.length;
	for (let a = 0; a < i; a++) {
		if (e.charCodeAt(a) !== 37) continue;
		n += e.slice(r, a);
		let i = e.charAt(++a), o = Sg.get(i);
		o === void 0 ? o = i === "e" ? " " : "0" : i = e.charAt(++a), n += wg(i, t, o), r = a + 1;
	}
	return n + e.slice(r);
}
function wg(e, t, n) {
	switch (e) {
		case "a": return Fm[t.getDay()].slice(0, 3);
		case "A": return Fm[t.getDay()];
		case "b": return Pm[t.getMonth()].slice(0, 3);
		case "B": return Pm[t.getMonth()];
		case "c": return Cg("%x, %X", t);
		case "d":
		case "e": return vg(t.getDate(), n, 2);
		case "f": return vg(t.getMilliseconds(), n, 3) + "000";
		case "g": return vg(xg(t).getFullYear() % 100, n, 2);
		case "G": return vg(xg(t).getFullYear() % 1e4, n, 4);
		case "H": return vg(t.getHours(), n, 2);
		case "I": return vg(t.getHours() % 12 || 12, n, 2);
		case "j": return vg(1 + cg(yg(t, sg.year), yg(t, sg.day), tg), n, 3);
		case "L": return vg(t.getMilliseconds(), n, 3);
		case "m": return vg(t.getMonth() + 1, n, 2);
		case "M": return vg(t.getMinutes(), n, 2);
		case "p": return t.getHours() >= 12 ? "PM" : "AM";
		case "q": return String(1 + Math.floor(t.getMonth() / 3));
		case "Q": return String(+t);
		case "s": return String(Math.floor(t / 1e3));
		case "S": return vg(t.getSeconds(), n, 2);
		case "u": return String(t.getDay() || 7);
		case "U": return vg(bg(t, 0), n, 2);
		case "V": {
			let e = xg(t), r = yg(e, sg.year);
			return vg(cg(yg(r, og(4)), e, ng) + +(r.getDay() === 4), n, 2);
		}
		case "w": return String(t.getDay());
		case "W": return vg(bg(t, 1), n, 2);
		case "x": return Cg("%-m/%-d/%Y", t);
		case "X": return Cg("%-I:%M:%S %p", t);
		case "y": return vg(t.getFullYear() % 100, n, 2);
		case "Y": return vg(t.getFullYear() % 1e4, n, 4);
		case "Z": {
			let e = t.getTimezoneOffset(), n = Math.abs(e);
			return (e > 0 ? "-" : "+") + vg(Math.floor(n / 60), "0", 2) + vg(n % 60, "0", 2);
		}
		case "%": return "%";
		default: return e;
	}
}
var Tg = 800, Eg = 240, Dg = 8, Og = /<br\s*\/?>/gi;
function kg(e, t, n, r) {
	let i = e.gantt?.[t];
	return typeof i == "number" && Number.isFinite(i) ? Math.min(r, Math.max(n, i)) : void 0;
}
function Ag(e, t) {
	let n = e.gantt?.[t];
	return typeof n == "string" ? n : void 0;
}
function jg(e, t) {
	return e.gantt?.[t] === !0;
}
function Mg(e, t, n) {
	let r = Q(e.replace(Og, " "), !1, t, n, 4e3);
	return r.lines.length <= 1 ? r : {
		...r,
		lines: [r.lines[0]],
		widths: [r.widths[0]],
		width: r.widths[0],
		height: r.lineHeight
	};
}
function Ng(e) {
	return Number.isFinite(+e.startTime) && Number.isFinite(+e.endTime);
}
function Pg(e, t, n) {
	let r = e.filter(Ng).sort((e, t) => +e.startTime - t.startTime || e.order - t.order), i = [];
	for (let e of r) {
		let r = +e.startTime, a = 0;
		for (; a < i.length && r < i[a];) a++;
		i[a] = +e.endTime, n.set(e, t + a);
	}
	let a = i.length;
	for (let r of e) n.has(r) || n.set(r, t + a++);
	return Math.max(a, 1);
}
function Fg(e, t, n) {
	let r = n.fontSize ?? 16, i = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), a = n.padding ?? 8, o = Ah(n.now), s = kg(t, "fontSize", 4, 72) ?? Math.round(r * .8125), c = kg(t, "sectionFontSize", 4, 72) ?? s, l = Math.round(r * .75), u = kg(t, "barHeight", 4, 400) ?? Math.round(s * 1.85), d = u + (kg(t, "barGap", 0, 400) ?? Math.round(u / 4)), f = Math.round(kg(t, "numberSectionStyles", 1, 1e3) ?? 4), p = e.displayMode === "compact", m = e.topAxis || jg(t, "topAxis"), h = e.getTasks(o), g = h.filter((e) => !e.vert), _ = h.filter((e) => e.vert && Ng(e)), v = /* @__PURE__ */ new Map();
	for (let e of g) v.has(e.section) || v.set(e.section, v.size);
	let y = /* @__PURE__ */ new Map(), b = [];
	if (p) {
		let e = /* @__PURE__ */ new Map();
		for (let t of g) {
			let n = e.get(t.section);
			n ? n.push(t) : e.set(t.section, [t]);
		}
		for (let [t, n] of e) {
			let e = Pg(n, b.length, y);
			for (let n = 0; n < e; n++) b.push(t);
		}
	} else for (let e of g) y.set(e, b.length), b.push(e.section);
	let x = b.length, S = 1 / 0, C = -1 / 0;
	for (let e of h) Ng(e) && (S = Math.min(S, +e.startTime), C = Math.max(C, +e.endTime));
	let w = S <= C, T = Q(e.title, !1, i, r, 4e3, 1), E = T.height > 0 ? T.height + 16 : 0;
	if (!w) {
		let t = Math.ceil(Math.max(T.width, 1) + 2 * a), i = Math.ceil(Math.max(T.height, 1) + 2 * a);
		return {
			svg: Ui("gantt", t, i, r, n, e, Z(T, t / 2, a + T.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"")),
			width: t,
			height: i,
			links: []
		};
	}
	let D = /* @__PURE__ */ new Map(), O = 0;
	for (let e of v.keys()) {
		let t = Q(e, !1, i, c, 180);
		D.set(e, t), O = Math.max(O, t.width);
	}
	let k = e.axisFormat || (e.dateFormat === "D" ? "%d" : Ag(t, "axisFormat") ?? "%Y-%m-%d"), A = (e) => Cg(k, new Date(e)), j = Math.max(i.width(A(S), l, 0), i.width(A(C), l, 0)), M = a + (kg(t, "leftPadding", 0, 2e3) ?? Math.max(O > 0 ? O + 24 : 0, j / 2)), N = kg(t, "rightPadding", 0, 2e3) ?? Math.max(16, j / 2), P = ro(n, kg(t, "useWidth", 100, 2e4) ?? Tg, 280), F = Math.max(Eg, P - M - N - a), I = M + F, L = C > S ? F / (C - S) : 0, R = (e) => L === 0 ? M + F / 2 : M + (e - S) * L, z = Math.round(l * 1.75), B = kg(t, "topPadding", 0, 2e3), V = kg(t, "gridLineStartPadding", 0, 2e3), H = a + E + (m ? z : 0), U = Math.max(H, B ?? 0), ee = B !== void 0 && V !== void 0 ? Math.max(0, Math.min(B - V, U - H)) : 0, te = Math.max(x, 1) * d, W = U + te, ne = [], re = I + N;
	for (let e of g) {
		let t = Mg(e.task, i, s), n = y.get(e);
		if (!Ng(e)) {
			let r = M + Dg + t.width / 2;
			re = Math.max(re, r + t.width / 2), ne.push({
				task: e,
				label: t,
				row: n,
				x0: NaN,
				x1: NaN,
				labelX: r,
				inside: !1
			});
			continue;
		}
		let r = R(+e.startTime), a = Math.max(R(+(e.renderEndTime ?? e.endTime)), r + (e.milestone ? 0 : 2));
		if (e.milestone) {
			let t = r + (R(+e.endTime) - r) / 2;
			r = t - u / 2, a = t + u / 2;
		}
		let o = !e.milestone && t.width + 2 * Dg <= a - r, c = (r + a) / 2;
		if (!o) {
			let e = a + Dg + t.width <= I + N, n = r - Dg - t.width >= M;
			c = e || !n ? a + Dg + t.width / 2 : r - Dg - t.width / 2, re = Math.max(re, c + t.width / 2);
		}
		ne.push({
			task: e,
			label: t,
			row: n,
			x0: r,
			x1: a,
			labelX: c,
			inside: o
		});
	}
	let G = e.tickInterval || Ag(t, "tickInterval") || "", K = e.weekday ?? Ag(t, "weekday") ?? "sunday", ie = Math.max(2, Math.min(10, Math.floor(F / (j + 24)))), q = _g(G, K, S, C, Math.ceil(F / 3)) ?? mg(S, C, ie), ae = "", oe = "", J = "", se = -1 / 0, ce = "", le = W + z / 2 + 2, ue = U - ee - z / 2 - 2;
	for (let e of q) {
		let t = R(e);
		ae += `M${X(t)},${X(U - ee)}V${X(W)}`;
		let n = A(e), r = i.width(n, l, 0);
		if (t - r / 2 < se + 8 || n === ce) continue;
		se = t + r / 2, ce = n, re = Math.max(re, se);
		let a = `text-anchor="middle">${nt(n)}</text>`;
		oe += `<text x="${X(t)}" y="${X(le + l * .35)}" ${a}`, m && (J += `<text x="${X(t)}" y="${X(ue + l * .35)}" ${a}`);
	}
	let de = "", fe = "", pe = [], me = W + z + 4, he = Math.round(s * 1.5);
	for (let e of [..._].sort((e, t) => +e.startTime - t.startTime)) {
		let t = R(+e.startTime), n = Mg(e.task, i, s), r = Math.max(a + n.width / 2, t), o = 0;
		for (; o < pe.length && r - n.width / 2 < pe[o] + 8;) o++;
		pe[o] = r + n.width / 2, re = Math.max(re, pe[o]), de += `<path class="pele-vert" data-id="${Y(e.id)}" d="M${X(t)},${X(U - ee)}V${X(W)}"/>`, fe += Z(n, r, me + o * he + he / 2, ` class="pele-vert-label" data-id="${Y(e.id)}"`);
	}
	let ge = Math.ceil(Math.max(re, a + T.width) + a), _e = Math.ceil(W + z + (pe.length > 0 ? 4 + pe.length * he : 0) + a), ve = "", ye = "";
	for (let e = 0; e < x;) {
		let t = b[e], r = e + 1;
		for (; r < x && b[r] === t;) r++;
		let i = v.get(t) % f, o = U + e * d, s = (r - e) * d;
		(v.size > 1 || t !== "") && (ve += `<rect class="pele-section pele-section-${i}" x="0" y="${X(o)}" width="${ge}" height="${X(s)}" fill="${i % 2 == 0 ? "var(--_s)" : "none"}"/>`);
		let c = D.get(t);
		ye += Z(c, a + 8 + c.width / 2, o + s / 2, ` class="pele-section-label" data-id="${Y(t)}"`, n.icons), e = r;
	}
	let be = "";
	if ((e.excludes.length > 0 || e.includes.length > 0) && +Gm(new Date(S), 6, "y") > C) {
		let t, n, r = () => {
			if (!t || !n) return;
			let e = new Date(t);
			e.setHours(0, 0, 0, 0);
			let r = new Date(n);
			r.setHours(23, 59, 59, 999);
			let i = Math.max(M, R(+e)), a = Math.min(I, R(+r));
			a > i && (be += `<rect x="${X(i)}" y="${X(U)}" width="${X(a - i)}" height="${X(te)}"/>`), t = n = void 0;
		};
		for (let i = new Date(S); +i <= C; i = Hm(i, 1)) e.isInvalidDate(i) ? (t ??= i, n = i) : r();
		r();
	}
	let xe = [], Se = "";
	for (let t of ne) {
		let r = t.task, i = U + t.row * d + d / 2, a = r.active ? "active" : r.done ? "done" : "", o = "pele-task";
		a && (o += " pele-" + a), r.crit && (o += " pele-crit"), r.milestone && (o += " pele-milestone"), r.classes.includes("clickable") && (o += " pele-clickable");
		let s = "", c = "";
		if (Number.isNaN(t.x0)) o += " pele-unscheduled", c = " fill=\"var(--_m)\"";
		else {
			let e = r.crit ? Di : "var(--_c)", n = a === "done" ? "fill=\"var(--_a)\"" : a === "active" ? `fill="${e}" fill-opacity="0.25"` : `fill="${e}"`, o = `stroke="${a === "done" && !r.crit ? "var(--_b)" : e}"`;
			if (r.milestone) {
				let e = (t.x0 + t.x1) / 2, r = u / 2;
				s = `<path d="M${X(e)},${X(i - r)}L${X(e + r)},${X(i)}L${X(e)},${X(i + r)}L${X(e - r)},${X(i)}Z" ${n} ${o} stroke-linejoin="round"/>`;
			} else s = `<rect x="${X(t.x0)}" y="${X(i - u / 2)}" width="${X(t.x1 - t.x0)}" height="${X(u)}" ${n} ${o}${Ti}/>`;
			t.inside ? c = a === "" ? " fill=\"var(--_bg)\"" : "" : a === "done" && (c = " fill=\"var(--_m)\"");
		}
		let l = s + Z(t.label, t.labelX, i, ` class="pele-label"${c}`), f = e.links.get(r.id);
		f !== void 0 && (l = zt(l, f, r.id, xe, n)), Se += `<g class="${o}" data-id="${Y(r.id)}">${l}</g>`;
	}
	let Ce = "";
	if (e.todayMarker !== "off" && o >= S && o <= C && C > S) {
		let t = R(o), n = U - ee, r = e.todayMarker ? Ii(e.todayMarker.split(",")).line : "";
		Ce = `<g class="pele-today"><path d="M${X(t)},${X(n)}V${X(W)}" fill="none" stroke="var(--_c)" stroke-width="2"${r}/>` + (r ? "" : `<path d="M${X(t - 4)},${X(n - 5)}H${X(t + 4)}L${X(t)},${X(n + 1)}Z" fill="var(--_c)"/>`) + "</g>";
	}
	let we = `M${X(M)},${X(W)}H${X(I)}` + (m ? `M${X(M)},${X(U - ee)}H${X(I)}` : "");
	return {
		svg: Ui("gantt", ge, _e, r, n, e, Z(T, ge / 2, a + T.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + (ve ? `<g class="pele-sections">${ve}</g>` : "") + (be ? `<g class="pele-excluded" fill="var(--_a)">${be}</g>` : "") + `<g class="pele-grid" fill="none"><path d="${ae}" stroke="var(--_b)" stroke-dasharray="1 3"/><path d="${we}" stroke="var(--_b)"/></g>` + (de ? `<g class="pele-verts" fill="none" stroke="var(--_l)" stroke-width="1.5" stroke-dasharray="4 3">${de}</g>` : "") + Ce + `<g class="pele-tasks" font-size="${X(s)}">${Se}</g><g class="pele-section-labels" font-size="${X(c)}">${ye}</g><g class="pele-axis" font-size="${l}" fill="var(--_m)">${oe}${J}</g>` + (fe ? `<g class="pele-vert-labels" font-size="${X(s)}">${fe}</g>` : "")),
		width: ge,
		height: _e,
		links: xe
	};
}
var Ig = {
	type: "gantt",
	parse(e, t, n) {
		let r = new Nh();
		n && (r.title = n);
		let i = t.gantt?.displayMode;
		return typeof i == "string" && (r.displayMode = i), Zh(e, r), r;
	},
	render: Fg
}, Lg = {
	NORMAL: 0,
	REVERSE: 1,
	HIGHLIGHT: 2,
	MERGE: 3,
	CHERRY_PICK: 4
};
function Rg(e) {
	throw new n(e, "semantic", { type: "gitGraph" });
}
function zg(e) {
	return e === "REVERSE" ? Lg.REVERSE : e === "HIGHLIGHT" ? Lg.HIGHLIGHT : Lg.NORMAL;
}
function Bg(e, t) {
	e.dir && t.setDirection(e.dir);
	for (let n of e.statements) Vg(n, t);
}
function Vg(e, t) {
	switch (e.$type) {
		case "Commit":
			t.commit({
				id: e.id,
				msg: e.message ?? "",
				type: e.type === void 0 ? Lg.NORMAL : zg(e.type),
				tags: e.tags ?? void 0
			});
			break;
		case "Branch":
			t.branch({
				name: e.name,
				order: e.order ?? 0
			});
			break;
		case "Merge":
			t.merge({
				branch: e.branch,
				id: e.id ?? "",
				type: e.type === void 0 ? void 0 : zg(e.type),
				tags: e.tags ?? void 0
			});
			break;
		case "Checkout":
			t.checkout(e.branch);
			break;
		case "CherryPicking": t.cherryPick({
			id: e.id,
			targetId: "",
			tags: e.tags?.length === 0 ? void 0 : e.tags,
			parent: e.parent
		});
	}
}
function Hg(e, t, n) {
	let r = t.gitGraph, i = typeof r?.mainBranchName == "string" ? r.mainBranchName : "main", a = typeof r?.mainBranchOrder == "number" ? r.mainBranchOrder : 0, o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map([[i, null]]), c = /* @__PURE__ */ new Map([[i, a]]), l = [], u = null, d = i, f = "LR", p = 0, m = () => {
		for (let e = p + 1;; e += 2654435761) {
			let t = `${p}-${(Math.imul(e, 2654435761) >>> 0).toString(16).padStart(8, "0").slice(0, 7)}`;
			if (!o.has(t)) return t;
		}
	}, h = (e) => {
		u = e, o.set(e.id, e), s.set(d, e.id);
	}, g = (e) => {
		s.has(e) || Rg(`Trying to checkout branch which is not yet created. (Help try using "branch ${e}")`), d = e;
		let t = s.get(e);
		u = t ? o.get(t) ?? null : null;
	};
	Bg(e, {
		setDirection(e) {
			f = e;
		},
		commit({ msg: e, id: t, type: n, tags: r }) {
			let i = {
				id: t || m(),
				message: e,
				seq: p++,
				type: n ?? Lg.NORMAL,
				tags: r ? [...r] : [],
				parents: u === null ? [] : [u.id],
				branch: d
			};
			o.has(i.id) && l.push(`Commit ID ${i.id} already exists`), h(i);
		},
		branch({ name: e, order: t }) {
			s.has(e) && Rg(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${e}")`), s.set(e, u === null ? null : u.id), c.set(e, t), g(e);
		},
		merge({ branch: e, id: t, type: n, tags: r }) {
			let i = s.get(d), a = s.get(e), c = i ? o.get(i) : void 0, l = a ? o.get(a) : void 0;
			c && l && c.branch === e && Rg(`Cannot merge branch '${e}' into itself.`), d === e && Rg("Incorrect usage of \"merge\". Cannot merge a branch to itself"), c === void 0 && Rg(`Incorrect usage of "merge". Current branch (${d})has no commits`), s.has(e) || Rg(`Incorrect usage of "merge". Branch to be merged (${e}) does not exist`), l === void 0 && Rg(`Incorrect usage of "merge". Branch to be merged (${e}) has no commits`), c === l && Rg("Incorrect usage of \"merge\". Both branches have same head"), t && o.has(t) && Rg(`Incorrect usage of "merge". Commit with id:${t} already exists, use different custom id`), h({
				id: t || m(),
				message: `merged branch ${e} into ${d}`,
				seq: p++,
				parents: u === null ? [] : [u.id, a || ""],
				branch: d,
				type: Lg.MERGE,
				customType: n,
				customId: !!t,
				tags: r ? [...r] : []
			});
		},
		cherryPick({ id: e, targetId: t, tags: n, parent: r }) {
			let i = e ? o.get(e) : void 0;
			if (i === void 0 && Rg("Incorrect usage of \"cherryPick\". Source commit id should exist and provided"), r && !i.parents.includes(r) && Rg("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit."), i.type === Lg.MERGE && !r && Rg("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified."), t && o.has(t)) return;
			i.branch === d && Rg("Incorrect usage of \"cherryPick\". Source commit is already on current branch");
			let a = s.get(d);
			a && o.has(a) || Rg(`Incorrect usage of "cherry-pick". Current branch (${d})has no commits`), h({
				id: m(),
				message: `cherry-picked ${i.message} into ${d}`,
				seq: p++,
				parents: u === null ? [] : [u.id, i.id],
				branch: d,
				type: Lg.CHERRY_PICK,
				tags: n ? n.filter(Boolean) : [`cherry-pick:${i.id}${i.type === Lg.MERGE ? `|parent:${r}` : ""}`]
			});
		},
		checkout: g
	});
	let _ = [...c].map(([e, t], n) => ({
		name: e,
		order: t ?? parseFloat(`0.${n}`)
	})).sort((e, t) => e.order - t.order).map((e) => e.name);
	return {
		type: "gitGraph",
		title: e.title || n,
		accTitle: e.accTitle ? e.accTitle.replace(/^\s+/g, "") : void 0,
		accDescr: e.accDescr ? e.accDescr.replace(/\n\s+/g, "\n") : void 0,
		direction: f,
		commits: o,
		branches: s,
		lanes: _,
		currentBranch: d,
		head: u,
		warnings: l
	};
}
var Ug = {
	name: "REFERENCE",
	pattern: /\w([-\./\w]*[-\w])?/y
}, Wg = [Ug];
function Gg(e) {
	return {
		name: e,
		pattern: e,
		longer: Wg
	};
}
var Kg = [
	Gg("cherry-pick"),
	{
		name: "gitGraph:",
		pattern: "gitGraph:"
	},
	Gg("HIGHLIGHT"),
	{
		...Jo("gitGraph"),
		longer: Wg
	},
	Gg("checkout"),
	Gg("REVERSE"),
	{
		name: "parent:",
		pattern: "parent:"
	},
	Gg("commit"),
	Gg("NORMAL"),
	Gg("branch"),
	{
		name: "order:",
		pattern: "order:"
	},
	Gg("switch"),
	{
		name: "type:",
		pattern: "type:"
	},
	Gg("merge"),
	{
		name: "msg:",
		pattern: "msg:"
	},
	{
		name: "tag:",
		pattern: "tag:"
	},
	{
		name: "id:",
		pattern: "id:"
	},
	Gg("LR"),
	Gg("TB"),
	Gg("BT"),
	{
		name: ":",
		pattern: ":"
	},
	{
		...zo,
		opener: /[\t ]*accDescr\s*{/y
	},
	Bo,
	Vo,
	{
		name: "INT",
		pattern: /0|[1-9][0-9]*(?!\.)/y
	},
	Ho,
	Uo,
	Wo,
	Go,
	Ko,
	qo,
	Ug
];
function qg(e) {
	let t = new is(Ro(e, Kg, "gitGraph"), Kg, "gitGraph"), n = {
		$type: "GitGraph",
		statements: []
	}, r = () => {
		if (t.kind !== -1) for (t.kind !== 26 && t.fail("a line break or the end of input"); t.kind === 26;) t.i++;
	}, i = () => t.kind === 31 ? t.take() : t.kind === 25 ? rs(t.take()) : t.fail("a branch name"), a = () => rs(t.expect(25)), o = () => (t.kind !== 8 && t.kind !== 5 && t.kind !== 2 && t.fail("NORMAL, REVERSE, or HIGHLIGHT"), t.take());
	for (; t.kind === 26;) t.i++;
	if (!t.accept(1)) {
		t.expect(3);
		let e = t.kinds[t.i + 1];
		(t.kind === 17 || t.kind === 18 || t.kind === 19) && e === 20 ? (n.$type = "Direction", n.dir = t.take(), t.i++) : t.accept(20);
	}
	for (; t.kind !== -1;) switch (t.kind) {
		case 26:
			t.i++;
			break;
		case 21:
			n.accDescr = ts(t.take()), r();
			break;
		case 22:
			n.accTitle = es(t.take()), r();
			break;
		case 23:
			n.title = $o(t.take()), r();
			break;
		case 7: {
			t.i++;
			let e = {
				$type: "Commit",
				tags: []
			};
			for (;;) if (t.accept(16)) e.id = a();
			else if (t.accept(15)) e.tags.push(a());
			else if (t.accept(12)) e.type = o();
			else if (t.accept(14) || t.kinds[t.i] === 25) e.message = a();
			else break;
			r(), n.statements.push(e);
			break;
		}
		case 9: {
			t.i++;
			let e = {
				$type: "Branch",
				name: i()
			};
			t.accept(10) && (e.order = parseInt(t.expect(24))), r(), n.statements.push(e);
			break;
		}
		case 13: {
			t.i++;
			let e = {
				$type: "Merge",
				branch: i(),
				tags: []
			};
			for (;;) if (t.accept(16)) e.id = a();
			else if (t.accept(15)) e.tags.push(a());
			else if (t.accept(12)) e.type = o();
			else break;
			r(), n.statements.push(e);
			break;
		}
		case 4:
		case 11: {
			t.i++;
			let e = {
				$type: "Checkout",
				branch: i()
			};
			r(), n.statements.push(e);
			break;
		}
		case 0: {
			t.i++;
			let e = {
				$type: "CherryPicking",
				tags: []
			};
			for (;;) if (t.accept(16)) e.id = a();
			else if (t.accept(15)) e.tags.push(a());
			else if (t.accept(6)) e.parent = a();
			else break;
			r(), n.statements.push(e);
			break;
		}
		default: t.fail("a statement, a title, or a line break");
	}
	return n;
}
var Jg = /<(?!br\s*\/?>)/gi, Yg = /:fa-/g, Xg = /<br\s*\/?>|ﬂ°°?\w+¶ß|&#?\w+;|[\ud800-\udbff][\udc00-\udfff]|[\s\S]/gi;
function Zg(e, t, n, r, i = 0) {
	let a = e;
	return a !== void 0 && (a.includes("<") && (a = a.replace(Jg, "&lt;")), a.includes(":fa-") && (a = a.replace(Yg, "&colon;fa-"))), Q(a, !1, t, n, r, i);
}
function Qg(e, t, n, r, i = 0) {
	let a = Zg(e, t, n, r, i);
	if (e === void 0 || a.width <= r) return a;
	let o = "", s = 0;
	for (let a of e.match(Xg) ?? []) {
		if (a.trim() === "" || a.length > 2 && a[0] === "<") s = 0;
		else {
			let e = t.width(a.length > 2 ? "x" : a, n, i);
			s > 0 && s + e > r && (o += "\n", s = 0), s += e;
		}
		o += a;
	}
	return Zg(o, t, n, r, i);
}
var $g = 7, e_ = 44, t_ = 44, n_ = 36, r_ = 8, i_ = 20, a_ = 20, o_ = 7, s_ = 6, c_ = Math.SQRT1_2, l_ = [
	"normal",
	"reverse",
	"highlight",
	"merge",
	"cherry-pick"
];
function u_(e, t, n) {
	let r = e.gitGraph?.[t];
	return typeof r == "boolean" ? r : n;
}
function d_(e) {
	return o_ + 4 + e.width + 6;
}
function f_(e, t, n, r) {
	let i = `cx="${X(t)}" cy="${X(n)}"`;
	if (e === Lg.HIGHLIGHT) return `<rect x="${X(t - $g - 1)}" y="${X(n - $g - 1)}" width="${2 * $g + 2}" height="${2 * $g + 2}" rx="2" fill="${r}"/>`;
	if (e === Lg.MERGE) return `<circle ${i} r="${$g - 1}" fill="var(--_bg)" stroke="${r}" stroke-width="2"/><circle ${i} r="2.5" fill="${r}"/>`;
	let a = `<circle ${i} r="${$g}" fill="${r}"/>`;
	return e === Lg.REVERSE ? a + `<path d="M${X(t - 3)},${X(n - 3)}l6,6M${X(t - 3)},${X(n + 3)}l6,-6" fill="none" stroke="var(--_bg)" stroke-width="1.5" stroke-linecap="round"/>` : e === Lg.CHERRY_PICK ? a + `<path d="M${X(t - 2.6)},${X(n + 1)}L${X(t + .8)},${X(n - 4.2)}L${X(t + 2.6)},${X(n + 1)}" fill="none" stroke="var(--_bg)" stroke-linejoin="round"/><circle cx="${X(t - 2.6)}" cy="${X(n + 2.2)}" r="1.8" fill="var(--_bg)"/><circle cx="${X(t + 2.6)}" cy="${X(n + 2.2)}" r="1.8" fill="var(--_bg)"/>` : a;
}
function p_(e, t, n) {
	return e.direction === "LR" ? ao(n, (r) => m_(e, t, n, r ? "TB" : "LR")) : m_(e, t, n, e.direction);
}
function m_(e, t, n, r) {
	let i = n.fontSize ?? 16, a = Math.round(i * .75), o = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), s = n.padding ?? 8, c = u_(t, "showBranches", !0), l = u_(t, "showCommitLabel", !0), u = u_(t, "rotateCommitLabel", !0), d = u_(t, "parallelCommits", !1), f = r !== "LR", p = r === "BT", m = /* @__PURE__ */ new Map();
	e.lanes.forEach((e, t) => m.set(e, t));
	let h = e.lanes.length, g = Math.round(i * .875), _ = e.lanes.map((e) => Zg(c ? e : "", o, g, 4e3)), v = [], y = /* @__PURE__ */ new Map();
	for (let t of [...e.commits.values()].sort((e, t) => e.seq - t.seq)) {
		let e = l && t.type !== Lg.CHERRY_PICK && (t.type !== Lg.MERGE || t.customId === !0), n = [];
		for (let e of t.tags) {
			let t = Zg(e, o, a, 4e3);
			t.lines.length > 0 && n.push(t);
		}
		let r = {
			commit: t,
			index: v.length,
			lane: m.get(t.branch) ?? 0,
			m: 0,
			label: e ? Zg(t.id, o, a, 4e3) : void 0,
			tags: n
		};
		v.push(r), y.set(t.id, r);
	}
	let b = new Float64Array(v.length), x = new Float64Array(v.length), S = new Float64Array(h).fill($g), C = new Float64Array(h).fill($g);
	v.forEach((e, t) => {
		let { label: n, tags: r } = e, i = 0, a = 0;
		for (let e of r) {
			let t = d_(e);
			f ? (i = Math.max(i, e.height), a += t + 4) : (i = Math.max(i, t), a += e.height + 3);
		}
		let o = 0, s = 0;
		n !== void 0 && n.lines.length > 0 && (u ? s = 3 + c_ * (n.width + n.height) : (o = f ? n.height : n.width, s = 6 + (f ? n.width : n.height))), b[t] = Math.max($g, i / 2, o / 2), x[t] = i / 2;
		let c = $g + (r.length > 0 ? s_ + a : 0), l = $g + s, d = e.lane;
		S[d] = Math.max(S[d], f ? l : c), C[d] = Math.max(C[d], f ? c : l);
	});
	let w = new Float64Array(v.length);
	f || v.forEach((e, t) => {
		if (x[t] !== 0) for (let n of e.commit.parents) {
			let r = y.get(n);
			r !== void 0 && r.lane < e.lane && (w[t] = x[t] + 4);
		}
	});
	let T = (e, t) => Math.max(e_, b[e] + b[t] + r_, w[t] > 0 ? b[e] + n_ + w[t] : 0);
	v.forEach((e, t) => {
		if (!d) {
			e.m = t === 0 ? 0 : v[t - 1].m + T(t - 1, t);
			return;
		}
		let n = 0;
		for (let r of e.commit.parents) {
			let e = y.get(r);
			e === void 0 || e.index >= t || (n = Math.max(n, e.m + T(e.index, t)));
		}
		e.m = n;
	});
	let E = 0;
	for (let e of v) E = Math.max(E, e.m);
	let D = new Float64Array(h);
	for (let e = 0; e < h; e++) {
		let t = _[e], n = t.lines.length === 0 ? 0 : f ? t.width / 2 + 8 : t.height / 2 + 2;
		S[e] = Math.max(S[e], n), C[e] = Math.max(C[e], n), e > 0 && (D[e] = D[e - 1] + Math.max(t_, C[e - 1] + S[e] + r_));
	}
	let O = (e, t) => f ? t : e, k = (e, t) => f ? p ? -e : e : t, A = (e, t) => `${X(O(e, t))},${X(k(e, t))}`, j = 1 / 0, M = 1 / 0, N = -1 / 0, P = -1 / 0, F = (e, t, n, r) => {
		e < j && (j = e), t < M && (M = t), n > N && (N = n), r > P && (P = r);
	}, I = "";
	if (c) for (let t = 0; t < h; t++) {
		let n = _[t], r = Bi(t), i = D[t], a = n.width + 16, o = n.height + 4, s = n.lines.length === 0 ? -i_ : -i_ - (f ? o : a), c = O(s + (f ? o : a) / 2, i), l = k(s + (f ? o : a) / 2, i);
		F(O(-i_, i), k(-i_, i), O(-i_, i), k(-i_, i)), F(O(E + a_, i), k(E + a_, i), O(E + a_, i), k(E + a_, i)), I += `<g class="pele-branch" data-id="${Y(e.lanes[t])}"><path class="pele-lane" d="M${A(-i_, i)}L${A(E + a_, i)}" stroke="${r}" stroke-dasharray="2 4"/>`, n.lines.length > 0 && (F(c - a / 2, l - o / 2, c + a / 2, l + o / 2), I += `<rect x="${X(c - a / 2)}" y="${X(l - o / 2)}" width="${X(a)}" height="${X(o)}" fill="${r}"${Ti}/>` + Z(n, c, l, " class=\"pele-label\" fill=\"var(--_bg)\"")), I += "</g>";
	}
	let L = Array.from({ length: h }, () => []);
	for (let e of v) L[e.lane].push(e.m);
	if (d) for (let e of L) e.sort((e, t) => e - t);
	let R = (e, t, n) => {
		let r = L[e], i = 0, a = r.length;
		for (; i < a;) {
			let e = i + a >> 1;
			r[e] <= t ? i = e + 1 : a = e;
		}
		return i < r.length && r[i] < n;
	}, z = "", B = "";
	for (let e of v) {
		let { commit: t } = e, n = D[e.lane], r = e.m;
		for (let i = 0; i < t.parents.length; i++) {
			let a = y.get(t.parents[i]);
			if (a === void 0 || a === e) continue;
			let o = D[a.lane], s = a.m;
			if (a.lane === e.lane) {
				B += `<path class="pele-edge" d="M${A(s, o)}L${A(r, n)}" stroke="${Bi(e.lane)}"/>`;
				continue;
			}
			let c = i > 0 && t.type === Lg.MERGE, l = i > 0 && !c, u = `M${A(s, o)}`;
			if (r <= s) {
				let e = (s + r) / 2;
				u += `C${A(e, o)} ${A(e, n)} ${A(r, n)}`;
			} else if (!c && !R(e.lane, s, r)) {
				let e = Math.min(n_, r - s);
				u += `C${A(s + e / 2, o)} ${A(s + e / 2, n)} ${A(s + e, n)}L${A(r, n)}`;
			} else {
				let t = a.lane < e.lane && r - w[e.index] > s ? r - w[e.index] : r, i = Math.min(n_, t - s), l = o;
				(!c || R(a.lane, s, r)) && (l = o > n ? n + C[e.lane] + r_ / 2 : n - S[e.lane] - r_ / 2, i = Math.min(n_, (t - s) / 2), u += `C${A(s + i / 2, o)} ${A(s + i / 2, l)} ${A(s + i, l)}`), u += `L${A(t - i, l)}C${A(t - i / 2, l)} ${A(t - i / 2, n)} ${A(t, n)}`, t < r && (u += `L${A(r, n)}`);
			}
			z += `<path class="pele-edge${c ? " pele-edge-merge" : l ? " pele-edge-cherry-pick" : ""}" d="${u}" stroke="${Bi(c ? a.lane : e.lane)}"${l ? " stroke-dasharray=\"4 3\"" : ""}/>`;
		}
	}
	let V = "";
	for (let e of v) {
		let { commit: t, label: n, tags: r } = e, i = O(e.m, D[e.lane]), a = k(e.m, D[e.lane]), o = t.customType ?? t.type;
		F(i - $g - 1, a - $g - 1, i + $g + 1, a + $g + 1);
		let s = t.type < Lg.MERGE && t.message !== "" ? `<title>${Y(t.message)}</title>` : "";
		if (s += f_(o, i, a, Bi(e.lane)), n !== void 0 && n.lines.length > 0) {
			let e = n.width, t = n.height, r = (n, r) => `<rect x="${X(n - e / 2 - 2)}" y="${X(r - t / 2 + 2)}" width="${X(e + 4)}" height="${X(t - 4)}" rx="3" fill="var(--_bg)"/>`;
			if (u) {
				let o = c_ * t / 2, c = f ? i - $g - 3 - o : i + 3, l = f ? a : a + $g + 3 + o, u = c_ * e + o;
				F(c - u, p ? l - u : l - o, c + o, p ? l + o : l + u), s += `<g class="pele-commit-label" transform="rotate(${p ? 45 : -45} ${X(c)} ${X(l)})">` + r(c - e / 2, l) + Z(n, c - e / 2, l, "") + "</g>";
			} else {
				let o = f ? i - $g - 6 - e / 2 : i, c = f ? a : a + $g + 6 + t / 2;
				F(o - e / 2, c - t / 2, o + e / 2, c + t / 2), s += `<g class="pele-commit-label">${r(o, c)}${Z(n, o, c, "")}</g>`;
			}
		}
		let c = $g + s_;
		for (let e = f ? 0 : r.length - 1; e >= 0 && e < r.length; e += f ? 1 : -1) {
			let t = r[e], n = d_(t), o = t.height, l = f ? i + c : i - n / 2, u = f ? a : a - c - o / 2;
			c += f ? n + 4 : o + 3, F(l, u - o / 2, l + n, u + o / 2), s += `<g class="pele-tag"><path d="M${X(l)},${X(u)}L${X(l + o_)},${X(u - o / 2)}H${X(l + n)}V${X(u + o / 2)}H${X(l + o_)}Z" fill="var(--_s)" stroke="var(--_b)" stroke-linejoin="round"/><circle cx="${X(l + o_)}" cy="${X(u)}" r="1.5" fill="var(--_b)"/>` + Z(t, l + o_ + 4 + t.width / 2, u, " fill=\"var(--_fg)\"") + "</g>";
		}
		let l = t.type === Lg.MERGE && o !== Lg.MERGE ? " pele-commit-merge" : "";
		V += `<g class="pele-commit pele-commit-${l_[o] ?? l_[0]}${l}" data-id="${Y(t.id)}">${s}</g>`;
	}
	j > N && F(0, 0, 0, 0);
	let H = Q(e.title, !1, o, i, 4e3, 1), U = H.height > 0 ? H.height + 16 : 0, ee = Math.max(N - j, H.width), te = Math.ceil(ee + 2 * s), W = Math.ceil(P - M + U + 2 * s), ne = s - j + (ee - (N - j)) / 2, re = s + U - M;
	return {
		svg: Ui("gitGraph", te, W, i, n, e, Z(H, te / 2, s + H.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + `<g transform="translate(${X(ne)},${X(re)})">` + (I ? `<g class="pele-branches" fill="none" font-size="${g}">${I}</g>` : "") + (z || B ? `<g class="pele-edges" fill="none" stroke-width="2" stroke-linecap="round">${z}${B}</g>` : "") + (V ? `<g class="pele-commits" font-size="${a}" fill="var(--_m)">${V}</g>` : "") + "</g>"),
		width: te,
		height: W,
		links: []
	};
}
var h_ = {
	type: "gitGraph",
	parse: (e, t, n) => Hg(qg(e), t, n),
	render: p_
};
function g_(e, t) {
	return {
		type: "info",
		title: e.title || t,
		accTitle: e.accTitle ? e.accTitle.replace(/^\s+/g, "") : void 0,
		accDescr: e.accDescr ? e.accDescr.replace(/\n\s+/g, "\n") : void 0
	};
}
var __ = [
	Jo("showInfo"),
	Jo("info"),
	zo,
	Bo,
	Vo,
	Uo,
	Wo,
	Go,
	Ko,
	qo
];
function v_(e) {
	let t = new is(Ro(e, __, "info"), __, "info"), n = { $type: "Info" };
	for (; t.kind === 5;) t.i++;
	for (t.expect(1); t.kind === 5;) t.i++;
	if (t.accept(0)) for (; t.kind === 5;) t.i++;
	for (; t.kind !== -1;) {
		let e = t.kind;
		if (e === 2 ? n.accDescr = ts(t.take()) : e === 3 ? n.accTitle = es(t.take()) : e === 4 ? n.title = $o(t.take()) : t.fail("a title or the end of input"), t.kind === -1) break;
		for (t.kind !== 5 && t.fail("a line break or the end of input"); t.kind === 5;) t.i++;
	}
	return n;
}
var y_ = "1.9.1";
function b_(e, t, n) {
	let r = n.fontSize ?? 16, i = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), a = n.padding ?? 8, o = Q(e.title, !1, i, r, 4e3, 1), s = o.height > 0 ? o.height + 8 : 0, c = Q(`Pele v${y_}`, !1, i, r, 4e3), l = Math.ceil(Math.max(o.width, c.width) + 2 * a), u = Math.ceil(s + c.height + 2 * a);
	return {
		svg: Ui("info", l, u, r, n, e, Z(o, l / 2, a + o.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + Z(c, l / 2, a + s + c.height / 2, " class=\"pele-version\" fill=\"var(--_m)\"")),
		width: l,
		height: u,
		links: []
	};
}
var x_ = {
	type: "info",
	parse: (e, t, n) => g_(v_(e), n),
	render: b_
}, S_ = class {
	type = "ishikawa";
	title;
	root;
	stack = [];
	baseLevel;
	addNode(e, t) {
		let n = {
			text: t,
			children: []
		};
		if (!this.root) {
			this.root = n, this.stack = [{
				level: 0,
				node: n
			}];
			return;
		}
		this.baseLevel ??= e;
		let r = Math.max(e - this.baseLevel + 1, 1), i = this.stack;
		for (; i.length > 1 && i[i.length - 1].level >= r;) i.pop();
		i[i.length - 1].node.children.push(n), i.push({
			level: r,
			node: n
		});
	}
}, C_ = [
	"$end",
	"EOF",
	"SPACELINE",
	"NL",
	"ISHIKAWA",
	"SPACELIST",
	"TEXT"
];
function w_(e, t) {
	let n = 0;
	for (; n < 13;) {
		let r = e.charCodeAt(t + n), i = "ishikawa-beta".charCodeAt(n);
		if (r !== i && (r + 32 !== i || r < 65 || r > 90)) break;
		n++;
	}
	return n === 13 && !J(e.charCodeAt(t + 13)) ? 13 : n >= 8 && !J(e.charCodeAt(t + 8)) ? 8 : 0;
}
function T_(e) {
	let t = [], n = [], r = [], i = e.length, a = 0;
	for (; a < i;) {
		let o = a, s = -1;
		for (; o < i && G(e.charCodeAt(o));) e.charCodeAt(o) === 10 && (s = o), o++;
		let c, l;
		if (e.charCodeAt(o) === 37 && e.charCodeAt(o + 1) === 37) for (c = 2, l = o + 2; l < i;) {
			let t = e.charCodeAt(l);
			if (t === 10 || t === 13 || t === 8232 || t === 8233) break;
			l++;
		}
		else if (o === a) {
			let t = w_(e, a);
			t > 0 ? (c = 4, l = a + t) : (c = 6, l = e.indexOf("\n", a), l === -1 && (l = i));
		} else s > a ? (c = 2, l = s + 1) : s === a ? (c = 3, l = a + 1) : (c = 5, l = o);
		t.push(c), n.push(a), r.push(l), a = l;
	}
	return t.push(1, 0), n.push(i, i), r.push(i, i), {
		types: t,
		starts: n,
		ends: r
	};
}
var E_ = "'SPACELINE', 'NL', 'EOF'";
function D_(e, t) {
	let { types: n, starts: r, ends: a } = T_(e), o = 0, s = (t) => {
		throw i("ishikawa", e, r[o], `Expecting ${t}, got '${C_[n[o]]}'`);
	};
	if (n[o] === 2) {
		for (o++; n[o] === 2 || n[o] === 3;) o++;
		n[o] !== 4 && s("'SPACELINE', 'NL', 'ISHIKAWA'");
	} else n[o] !== 4 && s("'SPACELINE', 'ISHIKAWA'");
	for (o++, n[o] === 3 && o++;;) {
		let i = n[o];
		if (i === 6 || i === 5 && n[o + 1] === 6) {
			let c = i === 6 ? o : o + 1;
			o = c + 1, n[o] !== 2 && n[o] !== 3 && n[o] !== 1 && s(E_), t.addNode(i === 6 ? 0 : a[c - 1] - r[c - 1], e.slice(r[c], a[c]).trim());
		} else i === 2 || i === 5 ? (o++, n[o] !== 2 && n[o] !== 3 && n[o] !== 1 && s(i === 5 ? `${E_}, 'TEXT'` : E_)) : s("'SPACELINE', 'SPACELIST', 'TEXT'");
		for (o++; n[o] === 3 || n[o] === 1;) o++;
		if (n[o] === 0) return;
	}
}
var O_ = .5, k_ = Math.hypot(O_, 1), A_ = 14, j_ = 6, M_ = 8, N_ = 22, P_ = 18, F_ = 5, I_ = 26, L_ = 34, R_ = 28, z_ = 10, B_ = 5;
function V_(e, t, n, r, i) {
	let a = Q(e.text, !1, n, r, 180), o = Math.round(i * 1.5), s = [], c = [], l = [], u = (e, n, r) => {
		let i = e.length;
		for (let a = i - 1; a >= 0; a--) l.push({
			node: e[t ? i - 1 - a : a],
			depth: n,
			parent: r,
			slot: a,
			bone: -1
		});
	};
	for (u(e.children, 2, -1); l.length > 0;) {
		let e = l.pop();
		if (e.bone !== -1) {
			c.push(e.bone);
			continue;
		}
		let t = s.length;
		s.push({
			label: Q(e.node.text, !1, n, i, 200),
			depth: e.depth,
			parent: e.parent,
			slot: e.slot,
			kids: e.node.children.length,
			rise: 0,
			at: 0,
			textEnd: 0
		}), e.depth % 2 == 0 ? c.push(t) : (e.bone = t, l.push(e)), u(e.node.children, e.depth + 1, t);
	}
	let d = A_;
	for (let e of c) {
		let t = Math.max(s[e].label.height, o) + j_;
		s[e].rise = d + t / 2, d += t;
	}
	let f = a.width + 2 * z_, p = f / 2;
	for (let e of s) {
		let t = e.parent === -1 ? void 0 : s[e.parent];
		e.depth % 2 == 0 ? (e.at = t ? t.at : 0, e.textEnd = e.at - (e.kids > 0 ? (e.kids + 1) * N_ : P_) - F_) : (e.at = t.at - (t.kids - e.slot) * N_, e.textEnd = e.at - F_), p = Math.max(p, e.label.width - e.textEnd);
	}
	return {
		node: e,
		label: a,
		boxW: f,
		boxH: a.height + 2 * B_,
		bones: s,
		rise: d + M_,
		reach: p
	};
}
function H_(e, t, n) {
	return ao(n, (r) => U_(e, t, n, r));
}
function U_(e, t, n, r) {
	let i = n.fontSize ?? 16, a = Math.round(i * .875), o = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), s = n.padding ?? 8;
	if (r) return W_(e, n);
	let c = e.root, l = Q(e.title, !1, o, i, 4e3, 1), u = l.height > 0 ? l.height + 12 : 0, d = "", f = 0, p = 0, m = 0, h = 0;
	if (c) {
		let e = Q(c.text, !1, o, i, 200, 1), t = Math.max(e.height + 24, 48), n = e.width + 24 + t / 2, r = c.children.map((e, t) => V_(e, t % 2 == 0, o, i, a));
		for (let e of r) e.rise = Math.max(e.rise, t / 2 + 14);
		let s = [], l = -L_;
		for (let e = 0; e < r.length; e += 2) {
			if (e > 0) {
				let t = 0;
				for (let n = 0; n < 2; n++) {
					let i = r[e - 2 + n], a = r[e + n];
					i && (t = Math.max(t, i.reach + (a ? a.boxW / 2 : 0)));
				}
				l -= t + I_;
			}
			s.push(l, l);
		}
		let u = r.length > 0 ? l - R_ : -L_;
		p = n, f = u, m = -t / 2, h = t / 2;
		let g = "";
		r.forEach((e, t) => {
			let n = t % 2 == 0 ? -1 : 1, r = s[t], i = (e, t) => r + e - t * O_, o = i(0, e.rise), c = n * e.rise, l = fi - 1, u = `M${X(r - O_ / k_ * l)},${X(n * l / k_)}L${X(o)},${X(c)}`, d = "";
			for (let t of e.bones) {
				let r = n * t.rise;
				if (t.depth % 2 == 0) u += `M${X(i(t.at, t.rise))},${X(r)}H${X(i(t.textEnd + F_, t.rise))}`;
				else {
					let a = e.bones[t.parent].rise;
					u += `M${X(i(t.at, a))},${X(n * a)}L${X(i(t.at, t.rise))},${X(r)}`;
				}
				let a = i(t.textEnd, t.rise);
				d += Z(t.label, a - t.label.width / 2, r, t.depth > 2 ? " fill=\"var(--_m)\"" : ""), f = Math.min(f, a - t.label.width);
			}
			let _ = c + n * (e.boxH / 2);
			f = Math.min(f, o - e.boxW / 2), p = Math.max(p, o + e.boxW / 2), m = Math.min(m, _ - e.boxH / 2), h = Math.max(h, _ + e.boxH / 2), g += `<g class="pele-ishikawa-category" data-id="${Y(e.node.text)}"><path class="pele-ishikawa-bones" d="${u}" fill="none" stroke="var(--_l)"/>` + yi("arrow_point", r, 0, O_ / k_, -n / k_, "var(--_l)") + `<rect x="${X(o - e.boxW / 2)}" y="${X(_ - e.boxH / 2)}" width="${X(e.boxW)}" height="${X(e.boxH)}" fill="var(--_s)" stroke="var(--_b)"${Ti}/>` + Z(e.label, o, _, " class=\"pele-label\"") + (d ? `<g class="pele-ishikawa-causes" font-size="${a}">${d}</g>` : "") + "</g>";
		});
		let _ = t / 2;
		d = `<path class="pele-ishikawa-spine" d="M${X(u)},0H${X(-(fi - 1))}" fill="none" stroke="var(--_l)"/>` + yi("arrow_point", 0, 0, 1, 0, "var(--_l)") + g + `<g class="pele-ishikawa-head" data-id="${Y(c.text)}"><path d="M0,${X(-_)}H${X(n - _)}A${X(_)},${X(_)} 0 0 1 ${X(n - _)},${X(_)}H0Z" fill="var(--_s)" stroke="var(--_b)" stroke-linejoin="round"/>` + Z(e, 12 + e.width / 2, 0, " class=\"pele-label\" font-weight=\"var(--_hw)\"") + "</g>";
	}
	let g = Math.max(p - f, l.width), _ = Math.ceil(g + 2 * s), v = Math.ceil(h - m + u + 2 * s), y = s + (g - (p - f)) / 2 - f, b = s + u - m;
	return {
		svg: Ui("ishikawa", _, v, i, n, {}, Z(l, _ / 2, s + l.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + (d ? `<g transform="translate(${X(y)},${X(b)})">${d}</g>` : "")),
		width: _,
		height: v,
		links: []
	};
}
function W_(e, t) {
	let n = t.fontSize ?? 16, r = Math.round(n * .875), i = t.measurer ?? Be(t.fontFamily, t.fontFamilyMono), a = t.padding ?? 8, o = Math.max(140, (t.maxWidth ?? 320) - 2 * a), s = Q(e.title, !1, i, n, no(t), 1), c = [], l = e.root ? [{
		node: e.root,
		depth: 0,
		parent: -1
	}] : [], u = 0;
	for (; l.length;) {
		let e = l.pop(), t = c.length;
		c.push({
			...e,
			x: 0,
			y: 0,
			w: 0,
			h: 0
		}), u = Math.max(u, e.depth);
		for (let n = e.node.children.length - 1; n >= 0; n--) l.push({
			node: e.node.children[n],
			depth: e.depth + 1,
			parent: t
		});
	}
	let d = Math.min(20, Math.max(2, (o - 120) / Math.max(1, u))), f = a + (s.height ? s.height + 12 : 0), p = s.width, m = "", h = "";
	for (let e of c) {
		e.x = a + e.depth * d;
		let t = Math.max(60, o - e.depth * d - 20);
		e.label = dl(Q(e.node.text, !1, i, e.depth < 2 ? n : r, t, +(e.depth < 2)), i, t), e.w = e.label.width + 20, e.h = e.label.height + 12, e.y = f, f += e.h + 12, p = Math.max(p, e.x - a + e.w);
		let s = e.depth < 2;
		if (m += `<g class="pele-node ${e.depth === 0 ? "pele-ishikawa-head" : e.depth === 1 ? "pele-ishikawa-category" : "pele-ishikawa-cause"}" data-id="${Y(e.node.text)}">` + (s ? `<rect x="${X(e.x)}" y="${X(e.y)}" width="${X(e.w)}" height="${X(e.h)}" rx="${e.depth === 0 ? 12 : 4}" fill="var(--_s)" stroke="var(--_b)"/>` : "") + Z(e.label, e.x + e.w / 2, e.y + e.h / 2, ` class="pele-label"${e.depth < 2 ? " font-weight=\"var(--_hw)\"" : ""}${e.depth > 1 ? ` font-size="${r}"` : ""}`) + "</g>", e.parent >= 0) {
			let t = c[e.parent], n = t.x + d / 2;
			h += `<path class="pele-edge" d="M${X(n)},${X(t.y + t.h)}V${X(e.y + e.h / 2)}H${X(e.x)}" fill="none" stroke="var(--_b)"/>`;
		}
	}
	let g = Math.ceil(p + 2 * a), _ = Math.ceil(Math.max(a + s.height, f - 12) + a);
	return {
		svg: Ui("ishikawa", g, _, n, t, {}, Z(s, g / 2, a + s.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + h + m),
		width: g,
		height: _,
		links: []
	};
}
var G_ = {
	type: "ishikawa",
	parse(e, t, n) {
		let r = new S_();
		return r.title = n, D_(e, r), r;
	},
	render: H_
};
function K_(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) for (let e of n.people) t.add(e);
	return [...t].sort();
}
var q_ = class {
	type = "journey";
	title;
	accTitle;
	accDescr;
	sections = [];
	tasks = [];
	currentSection = "";
	setDiagramTitle(e) {
		this.title = e;
	}
	setAccTitle(e) {
		this.accTitle = e.replace(/^\s+/g, "");
	}
	setAccDescription(e) {
		this.accDescr = e.replace(/\n\s+/g, "\n");
	}
	addSection(e) {
		this.currentSection = e, this.sections.push(e);
	}
	addTask(e, t) {
		let n = t.substring(1).split(":"), r = n.length === 1 ? [] : n[1].split(",").map((e) => e.trim());
		this.tasks.push({
			task: e,
			score: Number(n[0]),
			people: r,
			section: this.currentSection
		});
	}
	getActors() {
		return K_(this.tasks);
	}
};
function J_(e, t) {
	let n = e.indexOf("\n", t);
	return n === -1 ? e.length : n;
}
function Y_(e, t, n) {
	for (let r = 0; r < n.length; r++) if ((e.charCodeAt(t + r) | 32) !== n.charCodeAt(r)) return !1;
	return !0;
}
function X_(e, t) {
	let n = e.length, r = t;
	for (; r < n;) {
		let t = e.charCodeAt(r);
		if (t === 37 && e.charCodeAt(r + 1) !== 123) r = J_(e, r);
		else if (t !== 125 && e.charCodeAt(r + 1) === 37 && e.charCodeAt(r + 2) === 37) r = J_(e, r + 3);
		else {
			if (t === 10) return r;
			if (G(t)) do
				r++;
			while (r < n && G(e.charCodeAt(r)));
			else if (t === 35) r = J_(e, r);
			else return r;
		}
	}
	return r;
}
function Z_(e, t) {
	let n = t;
	for (; G(e.charCodeAt(n));) n++;
	return n;
}
function Q_(e, t, n, r) {
	let i = Y_(e, t, "accdescr");
	if (!i && !Y_(e, t, "acctitle")) return t;
	let a = e.length, o = Z_(e, t + 8), s = e.charCodeAt(o), c = (t, r, i) => {
		n.types.push(t), n.texts.push(e.slice(r, i)), n.starts.push(r);
	};
	if (s === 58) {
		o = Z_(e, o + 1);
		let n = J_(e, o);
		return c(i ? r + 2 : r, t, o), c(i ? r + 3 : r + 1, o, n), n;
	}
	if (!i || s !== 123) return t;
	for (o = Z_(e, o + 1); e.charCodeAt(o) !== 125;) {
		let t = e.indexOf("}", o);
		if (t === -1 && (t = a), c(r + 4, o, t), o === a) return a;
		o = t;
	}
	return o + 1;
}
var $_ = [
	"$end",
	"EOF",
	"INVALID",
	"NEWLINE",
	"journey",
	"title",
	"acc_title",
	"acc_title_value",
	"acc_descr",
	"acc_descr_value",
	"acc_descr_multiline_value",
	"section",
	"taskName",
	"taskData",
	":"
];
function ev(e, t, n) {
	let r = e.length, i = t;
	for (; i < r; i++) {
		let t = e.charCodeAt(i);
		if (t === 35 || t === 10 || t === 59 || n && t === 58) break;
	}
	return i;
}
function tv(e) {
	let t = e.length, n = [], r = [], i = [], a = {
		types: n,
		texts: r,
		starts: i
	}, o = 0, s = (t, a) => {
		n.push(t), r.push(e.slice(o, a)), i.push(o), o = a;
	};
	for (; o = X_(e, o), !(o >= t);) {
		let t = e.charCodeAt(o), n = o + 1;
		if (t === 10) {
			for (; e.charCodeAt(n) === 10;) n++;
			s(3, n);
		} else Y_(e, o, "journey") && !J(e.charCodeAt(o + 7)) ? s(4, o + 7) : Y_(e, o, "title") && G(e.charCodeAt(o + 5)) && (n = ev(e, o + 6, !1), n > o + 6) ? s(5, n) : (n = Q_(e, o, a, 6), n === o ? Y_(e, o, "section") && G(e.charCodeAt(o + 7)) && (n = ev(e, o + 8, !0), n > o + 8) ? s(11, n) : t === 58 ? (n = ev(e, o + 1, !1), s(n > o + 1 ? 13 : 14, n > o + 1 ? n : o + 1)) : t === 59 ? s(2, o + 1) : s(12, ev(e, o + 1, !0)) : o = n);
	}
	return (i.length === 0 || i[i.length - 1] < t) && s(1, t), s(0, t), a;
}
var nv = "'EOF', 'SPACE', 'NEWLINE', 'title', 'acc_title', 'acc_descr', 'acc_descr_multiline_value', 'section', 'taskName'";
function rv(e, t) {
	let { types: n, texts: r, starts: a } = tv(e), o = (t, r) => {
		let o = n[t] === 0 ? "1" : $_[n[t]];
		throw i("journey", e, a[t], `Expecting ${r}, got '${o}'`);
	};
	n[0] !== 4 && o(0, "'journey'");
	for (let e = 1;; e++) {
		let i = r[e];
		switch (n[e]) {
			case 3: break;
			case 5:
				t.setDiagramTitle(i.substring(6));
				break;
			case 6:
				t.setAccTitle(r[++e].trim());
				break;
			case 8:
				t.setAccDescription(r[++e].trim());
				break;
			case 10:
				t.setAccDescription(i.trim());
				break;
			case 11:
				t.addSection(i.substring(8));
				break;
			case 12:
				n[++e] !== 13 && o(e, "'taskData'"), t.addTask(i, r[e]);
				break;
			case 1: return;
			default: o(e, nv);
		}
	}
}
var iv = 10, av = 8, ov = 124, sv = 200, cv = 12, lv = 6, uv = 24, dv = 26, fv = 11, pv = 5, mv = 13, hv = 20, gv = "<circle cx=\"-3.6\" cy=\"-2.8\" r=\"1.3\"/><circle cx=\"3.6\" cy=\"-2.8\" r=\"1.3\"/>", _v = {
	happy: "M-5,2A6,6 0 0 0 5,2",
	neutral: "M-4.5,4.5H4.5",
	sad: "M-5,6.5A6,6 0 0 1 5,6.5"
};
function vv(e, t, n) {
	return `<g class="pele-face pele-face-${n}" transform="translate(${X(e)},${X(t)})"><circle r="${fv}" fill="var(--_bg)" stroke="var(--_l)"/><g fill="var(--_l)">${gv}</g><path d="${_v[n]}" fill="none" stroke="var(--_l)" stroke-linecap="round"/></g>`;
}
function yv(e, t, n) {
	return ao(n, (r) => bv(e, t, n, r));
}
function bv(e, t, n, r) {
	let i = n.fontSize ?? 16, a = Math.round(i * .875), o = Math.round(i * .75), s = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), c = n.padding ?? 8;
	if (r) return xv(e, n);
	let l = e.tasks, u = l.length, d = K_(l).filter((e) => e !== ""), f = /* @__PURE__ */ new Map();
	d.forEach((e, t) => f.set(e, t));
	let p = ov, m = l.map((e) => Zg(e.task, s, a, p)), h = 0;
	for (let e of m) h = Math.max(h, e.width);
	h > p && (p = Math.min(Math.ceil(h), sv), m = l.map((e) => Qg(e.task, s, a, p)));
	let g = p + 2 * iv, _ = g + cv, v = u > 0 ? u * _ - cv : 0, y = Math.round(a * 1.5), b = Math.max(v, 240), x = [], S = 0, C = 0, w = 0;
	for (let e of d) {
		let t = Qg(e, s, a, b - 2 * pv - 6), n = 2 * pv + 6 + t.width;
		w > 0 && w + n > b && (w = 0, C += 4);
		let r = w > 0 ? x[x.length - 1].y : C, i = Math.max(t.height, y);
		x.push({
			name: e,
			label: t,
			x: w,
			y: r,
			h: i
		}), w += n, S = Math.max(S, w), C = Math.max(C, r + i), w += hv;
	}
	let T = u > 0 ? uv + v : 0, E = Qg(e.title, s, i, Math.max(T, 320), 1), D = E.height > 0 ? E.height + 16 : 0, O = Math.max(T, E.width, u > 0 ? uv + S : 0), k = c + (O - T) / 2 + uv, A = c + D, j = [], M = 0;
	for (let e = 0; e < u;) {
		let t = e + 1;
		for (; t < u && l[t].section === l[e].section;) t++;
		let n;
		l[e].section !== "" && (n = Qg(l[e].section, s, a, (t - e) * _ - cv - 2 * iv, 1), M = Math.max(M, Math.max(n.height, y) + 2 * lv)), j.push({
			start: e,
			count: t - e,
			label: n
		}), e = t;
	}
	let N = y;
	for (let e of m) N = Math.max(N, e.height);
	let P = d.length > 0 ? 2 * pv + 6 : 0, F = N + P + 2 * av, I = A + (M > 0 ? M + lv : 0), L = I + F + fv + 16, R = L + 4 * dv, z = k + v, B = "", V = A;
	if (u > 0) {
		let e = "", t = "";
		for (let n = 5; n >= 1; n--) {
			let r = L + (5 - n) * dv;
			e += `M${X(k - 6)},${X(r)}H${X(z)}`, t += `<text x="${X(k - 12)}" y="${X(r + o * .35)}">${n}</text>`;
		}
		B += `<path class="pele-grid" d="${e}" fill="none" stroke="var(--_a)"/><g class="pele-scale" font-size="${o}" text-anchor="end" fill="var(--_m)">${t}</g>`;
		let n = "", r = "", i = "", s = [];
		l.forEach((e, t) => {
			let o = k + t * _, c = o + g / 2, l = e.score, u = L + (5 - (Number.isNaN(l) ? 3 : Math.min(5, Math.max(1, l)))) * dv;
			n += `${t === 0 ? "M" : "L"}${X(c)},${X(u)}`, r += `M${X(c)},${X(I + F)}V${X(u - fv)}`, i += vv(c, u, l > 3 ? "happy" : l < 3 ? "sad" : "neutral");
			let d = "", p = e.people.filter((e) => e !== ""), h = Math.min(mv, (g - 2 * iv - 2 * pv) / Math.max(p.length - 1, 1));
			p.forEach((e, t) => {
				d += `<circle class="pele-actor" cx="${X(c + (t - (p.length - 1) / 2) * h)}" cy="${X(I + F - av - pv)}" r="${pv}" fill="${Bi(f.get(e) ?? 0)}" stroke="var(--_s)"><title>${Y(e)}</title></circle>`;
			}), s.push(`<g class="pele-node pele-task" data-id="${Y(e.task.trim())}"><rect x="${X(o)}" y="${X(I)}" width="${X(g)}" height="${X(F)}" fill="var(--_s)" stroke="var(--_b)"${Ti}/>` + Z(m[t], c, I + av + N / 2, ` font-size="${a}"`) + d + "</g>");
		}), B += `<path class="pele-stems" d="${r}" fill="none" stroke="var(--_b)" stroke-dasharray="2 3"/>` + (u > 1 ? `<path class="pele-edge" d="${n}" fill="none" stroke="var(--_l)" stroke-linejoin="round"/>` : "") + i;
		for (let e of j) {
			let t = s.slice(e.start, e.start + e.count).join("");
			if (!e.label) {
				B += t;
				continue;
			}
			let n = k + e.start * _, r = e.count * _ - cv;
			B += `<g class="pele-cluster pele-section" data-id="${Y(l[e.start].section.trim())}"><rect x="${X(n)}" y="${X(A)}" width="${X(r)}" height="${X(M)}" fill="var(--_a)"${Ti}/>` + Z(e.label, n + r / 2, A + M / 2, ` font-size="${a}" font-weight="var(--_hw)"`) + t + "</g>";
		}
		if (V = R + fv, x.length > 0) {
			let e = k + (v - S) / 2, t = V + 16, n = "";
			for (let r of x) {
				let i = t + r.y + r.h / 2;
				n += `<g class="pele-legend-item" data-id="${Y(r.name)}"><circle cx="${X(e + r.x + pv)}" cy="${X(i)}" r="${pv}" fill="${Bi(f.get(r.name) ?? 0)}"/>` + Z(r.label, e + r.x + 2 * pv + 6 + r.label.width / 2, i, "") + "</g>";
			}
			B += `<g class="pele-legend" font-size="${a}">${n}</g>`, V = t + C;
		}
	}
	let H = Math.ceil(O + 2 * c), U = Math.ceil(Math.max(V, c) + c);
	return {
		svg: Ui("journey", H, U, i, n, e, Z(E, c + O / 2, c + E.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + B),
		width: H,
		height: U,
		links: []
	};
}
function xv(e, t) {
	let n = t.fontSize ?? 16, r = Math.round(n * .875), i = t.measurer ?? Be(t.fontFamily, t.fontFamilyMono), a = t.padding ?? 8, o = Math.max(140, (t.maxWidth ?? 320) - 2 * a), s = Qg(e.title, i, n, o, 1), c = K_(e.tasks).filter((e) => e !== ""), l = new Map(c.map((e, t) => [e, t])), u = a + (s.height ? s.height + 16 : 0), d, f = "", p = s.width;
	e.tasks.forEach((t, s) => {
		if (t.section !== d) {
			d = t.section;
			let e = Qg(d, i, n, o - 16, 1);
			e.height && (f += Z(e, a + 8 + e.width / 2, u + e.height / 2, " class=\"pele-cluster-label\" font-weight=\"var(--_hw)\""), p = Math.max(p, e.width + 16), u += e.height + 8);
		}
		let c = Qg(t.task, i, r, o - 72), m = t.people.filter((e) => e !== "").map((e) => ({
			name: e,
			label: Qg(e, i, r, o - 44)
		})), h = Math.max(c.height, 42), g = 2 * av + h;
		for (let e of m) g += Math.max(16, e.label.height) + 4;
		let _ = Math.max(o, c.width + 72);
		f += `<g class="pele-node pele-journey-step" data-id="${s}"><rect x="${X(a)}" y="${X(u)}" width="${X(_)}" height="${X(g)}" fill="var(--_s)" stroke="var(--_b)"${Ti}/>`, f += Z(c, a + iv + c.width / 2, u + av + c.height / 2, " class=\"pele-label\"");
		let v = a + _ - 28;
		f += vv(v, u + av + fv, t.score > 3 ? "happy" : t.score < 3 ? "sad" : "neutral"), Number.isNaN(t.score) || (f += `<text class="pele-journey-score" x="${X(v)}" y="${X(u + av + 2 * fv + r)}" font-size="${r}" text-anchor="middle">${X(Math.min(5, Math.max(1, t.score)))}</text>`);
		let y = u + av + h + 4;
		for (let e of m) {
			let t = Math.max(16, e.label.height);
			f += `<circle class="pele-actor" cx="${X(a + 16)}" cy="${X(y + t / 2)}" r="${pv}" fill="${Bi(l.get(e.name))}"/>` + Z(e.label, a + 28 + e.label.width / 2, y + t / 2, ` class="pele-journey-actor" font-size="${r}"`), y += t + 4;
		}
		f += "</g>", u += g, s + 1 < e.tasks.length && (f += `<path class="pele-edge" d="M${X(a + _ / 2)},${X(u)}v16" fill="none" stroke="var(--_l)"/>`), u += 16, p = Math.max(p, _);
	});
	let m = Math.ceil(p + 2 * a), h = Math.ceil(Math.max(a + s.height, u - (e.tasks.length ? 16 : 0)) + a);
	return {
		svg: Ui("journey", m, h, n, t, e, Z(s, m / 2, a + s.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + f),
		width: m,
		height: h,
		links: []
	};
}
var Sv = {
	type: "journey",
	parse(e, t, n) {
		let r = new q_();
		return r.title = n, rv(e, r), r;
	},
	render: yv
}, Cv = [
	"1",
	"INVALID",
	"SPACELINE",
	"NL",
	"EOF",
	"",
	"SPACELIST",
	"ICON",
	"CLASS",
	"NODE_DSTART",
	"NODE_ID",
	"NODE_DESCR",
	"NODE_DEND",
	"SHAPE_DATA"
];
function wv(e, t) {
	return e === 5 ? t ? "KANBAN" : "MINDMAP" : Cv[e];
}
var Tv = {
	DEFAULT: 0,
	NO_BORDER: 0,
	ROUNDED_RECT: 1,
	RECT: 2,
	CIRCLE: 3,
	CLOUD: 4,
	BANG: 5,
	HEXAGON: 6
};
function Ev(e, t) {
	switch (e) {
		case "[": return Tv.RECT;
		case "(": return t === ")" ? Tv.ROUNDED_RECT : Tv.CLOUD;
		case "((": return Tv.CIRCLE;
		case ")": return Tv.CLOUD;
		case "))": return Tv.BANG;
		case "{{": return Tv.HEXAGON;
		default: return Tv.DEFAULT;
	}
}
var Dv = /\s+/y, Ov = /.+/y, kv = /[^([\n){}]+/y, Av = /[^([\n){}@]+/y, jv = /[^)\](}]+/y, Mv = /[^`"]+/y, Nv = /[^}^"]+/y, Pv = /\n\s*/g;
function Fv(e, t, n) {
	for (let r = 0; r < n.length; r++) if ((e.charCodeAt(t + r) | 32) !== n.charCodeAt(r)) return !1;
	return !0;
}
function Iv(e, t) {
	let n = e.length, r = [], i = [], a = [], o = t ? "kanban" : "mindmap", s = t ? Av : kv, c = 0, l = 0, u = -1, d = (e, t, n) => {
		r.push(e), i.push(t), a.push(l), l = n;
	}, f = (t, n, r) => {
		d(t, e.slice(l, n), n), c = r;
	}, p = (t, n) => (t.lastIndex = n, t.test(e) ? t.lastIndex : -1), m = (t) => {
		let r = e.indexOf(t, l);
		return r === -1 ? n : r;
	};
	for (; l < n;) {
		let n = e.charCodeAt(l), r = e.charCodeAt(l + 1), i;
		if (c === 0) {
			let a = n <= 32 || n >= 160 ? Math.max(p(Dv, l), l) : l;
			if (t && n === 64 && r === 123) d(13, "", l + 2), c = 6;
			else if (e.charCodeAt(a) === 37 && e.charCodeAt(a + 1) === 37) f(2, p(Ov, a), 0);
			else if (a > l) u < l && (u = m("\n")), u >= a ? f(6, a, 0) : (i = e.lastIndexOf("\n", a - 1)) > l ? f(2, i + 1, 0) : f(3, l + 1, 0);
			else if (Fv(e, l, o) && !J(e.charCodeAt(l + o.length))) f(5, l + o.length, 0);
			else if (n === 58 && r === 58 && e.charCodeAt(l + 2) === 58) l += 3, c = 1;
			else if (n === 58 && r === 58 && Fv(e, l + 2, "icon") && e.charCodeAt(l + 6) === 40) l += 7, c = 2;
			else if (n === 45 && r === 41 || n === 40 && (r === 45 || r === 40) || (n === 41 || n === 123) && r === n) f(9, l + 2, 3);
			else if (n === 41 || n === 40 || n === 91) f(9, l + 1, 3);
			else if ((i = p(s, l)) !== -1) f(10, i, 0);
			else break;
		} else if (c === 3) n === 34 ? (c = r === 96 ? 5 : 4, l += r === 96 ? 2 : 1) : n === 41 || n === 40 ? f(12, r === n || n === 40 && r === 45 ? l + 2 : l + 1, 0) : n === 93 ? f(12, l + 1, 0) : n === 125 && r === 125 || n === 45 && r === 41 ? f(12, l + 2, 0) : f(11, p(n === 125 ? Ov : jv, l), 3);
		else if (c === 4) n === 34 ? (l++, c = 3) : f(11, m("\""), 4);
		else if (c === 5) {
			if (n === 96 && r === 34) l += 2, c = 3;
			else if ((i = p(Mv, l)) !== -1) f(11, i, 5);
			else break;
		} else if (c === 1) {
			if ((i = p(Ov, l)) !== -1) f(8, i, 0);
			else if (n === 10) l++, c = 0;
			else break;
		} else if (c === 2) n === 41 ? (l++, c = 0) : f(7, m(")"), 2);
		else if (c === 6) {
			if (n === 34) f(13, l + 1, 7);
			else if (n === 125) l++, c = 0;
			else if ((i = p(Nv, l)) !== -1) f(13, i, 6);
			else break;
		} else n === 34 ? f(13, l + 1, 6) : (i = m("\""), d(13, e.slice(l, i).replace(Pv, "<br/>"), i));
	}
	return l < n ? d(1, "", l) : (c === 0 && d(4, "", n), d(0, "", n)), {
		types: r,
		texts: i,
		starts: a
	};
}
var Lv = "'SPACELINE', 'NL', 'EOF'", Rv = /* @__PURE__ */ new Uint8Array(14);
for (let e of [
	2,
	6,
	7,
	8,
	9,
	10
]) Rv[e] = 1;
function zv(e) {
	return e === 2 || e === 3 || e === 4;
}
function Bv(e, t, n) {
	let r = n ? "kanban" : "mindmap", { types: a, texts: o, starts: s } = Iv(e, n), c = n ? ", 'SHAPE_DATA'" : "", l = 0, u = (t) => {
		let o = a[l];
		throw o === 1 ? i(r, e, s[l], "", !0) : i(r, e, s[l], `Expecting ${t}, got '${wv(o, n)}'`);
	}, d = `'${wv(5, n)}'`;
	if (a[l] === 2) {
		for (l++; a[l] === 2 || a[l] === 3;) l++;
		a[l] !== 5 && u(`'SPACELINE', 'NL', ${d}`);
	} else a[l] !== 5 && u(`'SPACELINE', ${d}`);
	l++;
	let f = "'SPACELINE', 'NL', 'SPACELIST', 'ICON', 'CLASS', 'NODE_DSTART', 'NODE_ID'";
	for (a[l] === 3 && (l++, f = "'SPACELINE', 'SPACELIST', 'ICON', 'CLASS', 'NODE_DSTART', 'NODE_ID'");;) {
		let e = a[l], n = 0, r = e === 6;
		if (r && (n = o[l++].length, e = a[l]), e === 10 || e === 9) {
			let r, i, s = 0;
			if (e === 10 && (r = o[l++]), a[l] === 9) {
				let e = o[l++];
				a[l] !== 11 && u("'NODE_DESCR'"), i = o[l++], a[l] !== 12 && u("'NODE_DEND'");
				let n = o[l++];
				!zv(a[l]) && a[l] !== 13 && u(Lv + c), s = t.getType(e, n);
			} else !zv(a[l]) && a[l] !== 13 && u(Lv + ", 'NODE_DSTART'" + c), i = r;
			if (a[l] === 13) {
				let e = o[l++];
				for (; a[l] === 13;) e += o[l++];
				zv(a[l]) || u(Lv + c), t.addNode(n, r ?? i, i, s, e);
			} else t.addNode(n, r ?? i, i, s);
		} else if (e === 7 || e === 8) {
			let n = o[l++];
			zv(a[l]) || u(Lv), t.decorateNode(e === 7 ? { icon: n } : { class: n });
		} else r ? zv(e) || u(Lv + ", 'ICON', 'CLASS', 'NODE_DSTART', 'NODE_ID'") : e === 2 ? zv(a[++l]) || u(Lv) : u(f);
		for (l++; a[l] === 3 || a[l] === 4;) l++;
		if (a[l] === 0) return;
		Rv[a[l]] === 0 && u(Lv + ", 'SPACELIST', 'ICON', 'CLASS', 'NODE_DSTART', 'NODE_ID'");
	}
}
var Vv = class {
	type = "kanban";
	title;
	sections = [];
	getType = Ev;
	last;
	sectionLevel = 0;
	misplaced;
	addNode(e, t, r, i, a) {
		let o = {
			id: t,
			level: e,
			label: r
		};
		if (a !== void 0) {
			let e = a.includes("\n") ? a + "\n" : "{\n" + a + "\n}", t;
			try {
				t = re(e);
			} catch (e) {
				throw new n(`Metadata of "${o.id}" is not valid YAML. ${e.message}`, "syntax", { type: "kanban" });
			}
			if (typeof t == "object" && t && !Array.isArray(t)) {
				let e = t.shape ? String(t.shape) : "";
				if (e !== e.toLowerCase() || e.includes("_")) throw new n(`No such shape: ${e}. Shape names should be lowercase.`, "semantic", { type: "kanban" });
				t.label && (o.label = String(t.label)), t.icon && (o.icon = String(t.icon)), t.assigned && (o.assigned = String(t.assigned)), t.ticket && (o.ticket = String(t.ticket)), t.priority && (o.priority = String(t.priority));
			}
		}
		if (this.misplaced) throw new n(`Items without section detected, found section ("${this.misplaced.label}")`, "semantic", { type: "kanban" });
		let s = this.sections;
		if (s.length === 0 && (this.sectionLevel = e), this.last = o, e === this.sectionLevel) {
			let e = o;
			e.items = [], s.push(e);
		} else s[s.length - 1].items.push(o), e < this.sectionLevel && (this.misplaced = o);
	}
	decorateNode(e) {
		let t = this.last;
		!e || !t || (e.icon && (t.icon = e.icon), e.class && (t.cssClasses = e.class));
	}
};
function Hv(e, t) {
	Bv(e, t, !0);
}
function Uv(e, t, n, r, i) {
	return `<svg class="pele-icon" data-icon="${Y(e)}" x="${X(t)}" y="${X(n)}" width="${X(r)}" height="${X(r)}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${i?.(e) ?? ""}</svg>`;
}
var Wv = 12, Gv = 8, Kv = 10, qv = 8, Jv = 4, Yv = 6, Xv = /* @__PURE__ */ new Map([
	["very high", `stroke="${Di}"`],
	["high", `stroke="${Di}" opacity="0.5"`],
	["low", "stroke=\"var(--_m)\" opacity=\"0.5\""],
	["very low", "stroke=\"var(--_m)\""]
]);
function Zv(e, t, n, r, i, a = 0) {
	let o = Q(e, t, n, r, i, a);
	if (o.width <= i) return o;
	let s = [], c = [], l = 0, u = [], d = 0, f = () => {
		s.push(u), c.push(d), l = Math.max(l, d), u = [], d = 0;
	};
	for (let e = 0; e < o.lines.length; e++) if (o.widths[e] <= i) u = o.lines[e], d = o.widths[e], f();
	else {
		for (let t of o.lines[e]) {
			if (t.icon !== void 0 || t.math) {
				d > 0 && d + t.width > i && f(), u.push(t), d += t.width;
				continue;
			}
			let e = "", a = d;
			for (let o of t.text) {
				let s = n.width(o, r, t.style);
				d > 0 && d + s > i && (e && u.push({
					text: e,
					style: t.style,
					width: d - a
				}), f(), e = "", a = 0), e += o, d += s;
			}
			e && u.push({
				text: e,
				style: t.style,
				width: d - a
			});
		}
		f();
	}
	let p = {
		...o,
		lines: s,
		widths: c,
		width: l,
		height: s.length * o.lineHeight
	};
	return o.heights ? Za(p) : p;
}
function Qv(e, t, n, r, i, a = !1) {
	let o = "";
	for (let s = 0; s < e.lines.length; s++) {
		let c = e.lines[s], l = n + $a(e, s);
		if (c.length === 1 && c[0].icon === void 0 && c[0].math === void 0 && !(c[0].style & 56)) o += `<text${yt(r, c[0].style)} x="${X(t)}" y="${X(l + e.size * .35)}"${a ? " text-anchor=\"end\"" : ""}>${nt(c[0].text)}</text>`;
		else {
			let n = e.widths[s];
			o += Z(eo(e, s), t + (a ? -n : n) / 2, l, r, i);
		}
	}
	return o;
}
var $v = (e) => !!e && _(e) !== "";
function ey(e, t, n) {
	let r = n.fontSize ?? 16, i = Math.round(r * .875), a = Math.round(r * 1.5), o = Math.round(i * 1.5), s = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), c = n.padding ?? 8, l = n.icons, u = t.kanban ?? {}, d = u.sectionWidth, f = i * 1.25, p = 0, m = (e, t, n) => {
		if (e && e.includes("$$")) for (let r of Q(e, !0, s, t, 1 / 0).lines) for (let e of r) e.math && (p = Math.max(p, e.math.width + n));
	};
	for (let t of e.sections) {
		let e = s.width(String(t.items.length), i, 0);
		m(t.label, r, 2 * Gv + 8 + e + 12 + ($v(t.icon) ? f + Yv : 0));
		for (let e of t.items) {
			let t = 2 * (Gv + Kv);
			m(e.label, i, t + ($v(e.icon) ? f + Yv : 0)), m(e.ticket, i, t), m(e.assigned, i, t);
		}
	}
	let h = Math.max(typeof d == "number" && d > 0 ? Math.min(Math.max(d, 80), 2e3) : 200, Math.ceil(p)), g = n.maxWidth !== void 0 && n.maxWidth > 0 ? n.maxWidth - 2 * c : 1 / 0, _ = e.sections.length, v = _ * (h + Wv) - Wv <= g, y = v ? Math.max(_, 1) : Math.max(1, Math.floor((g + Wv) / (h + Wv))), b = v ? h : Math.max(Math.min(h, g), Math.min(Math.floor((g + Wv) / y) - Wv, h * 2), Math.ceil(p)), x = typeof u.ticketBaseUrl == "string" ? u.ticketBaseUrl : "", S = b - 2 * Gv, C = S - 2 * Kv, w = [], T = e.sections, E = [], D = [], O = [], k = a, A = [];
	for (let e of T) {
		let t = s.width(String(e.items.length), i, 0), n = t + 12 + ($v(e.icon) ? f + Yv : 0), a = Zv(e.label, !0, s, r, S - 8 - n, 1);
		k = Math.max(k, a.height), D.push(t), E.push(a);
		let c = [], l = 0;
		for (let t of e.items) {
			let e = Zv(t.label, !0, s, i, C - ($v(t.icon) ? f + Yv : 0)), n = Zv(t.ticket, !1, s, i, C), r = Zv(t.assigned, !1, s, i, C), a = n.width + r.width + 8 > C ? n.height + r.height : Math.max(n.height, r.height), u = 2 * Kv + Math.max(e.height, o) + (a ? Jv + a : 0);
			c.push({
				item: t,
				label: e,
				ticket: n,
				assigned: r,
				meta: a,
				height: u
			}), l += u + qv;
		}
		O.push(c), A.push(l);
	}
	k += 2 * Gv;
	let j = [], M = [];
	for (let e = 0, t = 0; e < T.length; e += y) {
		let n = qv;
		for (let t = e; t < Math.min(e + y, T.length); t++) n = Math.max(n, A[t]);
		M.push(t), j.push(k + n), t += k + n + Wv;
	}
	let N = j.length > 0 ? M[M.length - 1] + j[j.length - 1] : 0, P = Xs(e.title, s, r, no(n)), F = P.height > 0 ? P.height + 16 : 0, I = Math.max(Math.min(T.length, y) * (b + Wv) - Wv, 0), L = Math.max(I, P.width), R = c + (L - I) / 2, z = b - Gv - 4, B = "";
	for (let e = 0; e < T.length; e++) {
		let t = T[e], r = Math.floor(e / y), s = `<rect width="${b}" height="${X(j[r])}" fill="var(--_s)"${Ti}/>` + Qv(E[e], Gv + 4, Gv, " class=\"pele-cluster-label\" font-weight=\"var(--_hw)\"", l) + `<text class="pele-count" x="${z}" y="${X(Gv + a / 2 + i * .35)}" text-anchor="end" font-size="${i}" fill="var(--_m)">${t.items.length}</text>`;
		$v(t.icon) && (s += Uv(t.icon, z - D[e] - Yv - f, Gv + (a - f) / 2, f, l));
		let u = k;
		for (let t of O[e]) {
			let e = t.item, r = (e.priority ?? "").trim().toLowerCase(), a = Xv.get(r), c = `<rect width="${S}" height="${X(t.height)}" fill="var(--_bg)" stroke="var(--_b)"${Ti}/>`;
			a !== void 0 && (c += `<path class="pele-priority" d="M2.5,5V${X(t.height - 5)}" fill="none" ${a} stroke-width="3" stroke-linecap="round"/>`), c += Qv(t.label, Kv, Kv, " class=\"pele-label\"", l), $v(e.icon) && (c += Uv(e.icon, S - Kv - f, Kv + (o - f) / 2, f, l));
			let d = t.height - Kv;
			if (e.ticket) {
				let r = d - t.meta, i = x ? Ft(kt(x.replace("#TICKET#", () => e.ticket)), n) : void 0;
				i === void 0 ? c += Qv(t.ticket, Kv, r, " class=\"pele-ticket\" fill=\"var(--_m)\"", l) : (c += `<a href="${nt(i)}" target="_blank"${Bt(n)}>` + Qv(t.ticket, Kv, r, " class=\"pele-ticket\" fill=\"var(--_c)\"", l) + "</a>", w.push({
					id: e.id,
					href: i,
					internal: !1
				}));
			}
			e.assigned && (c += Qv(t.assigned, S - Kv, d - t.assigned.height, " class=\"pele-assigned\" fill=\"var(--_m)\"", l, !0)), s += `<g class="pele-node pele-card${a === void 0 ? "" : " pele-priority-" + r.replace(" ", "-")}${Ri(e.cssClasses ?? "")}" data-id="${Y(e.id)}" transform="translate(${Gv},${X(u)})" font-size="${i}">${c}</g>`, u += t.height + qv;
		}
		B += `<g class="pele-cluster pele-column${Ri(t.cssClasses ?? "")}" data-id="${Y(t.id)}" transform="translate(${X(R + e % y * (b + Wv))},${X(c + F + M[r])})">${s}</g>`;
	}
	let V = Math.ceil(L + 2 * c), H = Math.ceil(N + F + 2 * c);
	return {
		svg: Ui("kanban", V, H, r, n, {}, Z(P, V / 2, c + P.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + B),
		width: V,
		height: H,
		links: w
	};
}
var ty = {
	type: "kanban",
	math: !0,
	parse(e, t, n) {
		let r = new Vv();
		return r.title = n, Hv(e, r), r;
	},
	render: ey
}, ny = 11, ry = class {
	type = "mindmap";
	title;
	nodes = [];
	getType = Ev;
	baseLevel = 0;
	open = [];
	addNode(e, t, r, i) {
		let a = this.nodes.length === 0;
		a && (this.baseLevel = e), e -= this.baseLevel;
		let o = this.open, s = o.length;
		for (; s > 0 && o[s - 1].level >= e;) s--;
		let c = o[s - 1];
		if (!c && !a) throw new n(`There can be only one root. No parent could be found for ("${r}")`, "semantic", { type: "mindmap" });
		let l = {
			id: this.nodes.length,
			nodeId: t,
			level: e,
			descr: r,
			type: i,
			children: [],
			isRoot: a
		};
		c && (l.section = c.isRoot ? c.children.length % ny : c.section, c.children.push(l)), o.length = s, o.push(l), this.nodes.push(l);
	}
	decorateNode(e) {
		let t = this.nodes[this.nodes.length - 1];
		!e || !t || (e.icon && (t.icon = e.icon), e.class && (t.class = e.class));
	}
};
function iy(e, t) {
	Bv(e, t, !1);
}
var ay = [
	"",
	"rounded",
	"rect",
	"circle",
	"cloud",
	"bang",
	"hex"
], oy = "stadium", sy = 36, cy = 8, ly = 18, uy = 52, dy = 28, fy = 6, py = 12, my = .22, hy = 6, gy = 28, _y = 12, vy = 8, yy = 10;
function by(e, t, n, r) {
	if (e.lines.length < 2) return Z(e, t + e.width / 2, n, " class=\"pele-label\"", r);
	let i = "", a = n - e.height / 2;
	for (let n = 0; n < e.lines.length; n++) i += Z(eo(e, n), t + e.widths[n] / 2, a + $a(e, n), " class=\"pele-label\"", r);
	return i;
}
function xy(e, t, n) {
	return ao(n, (r) => Sy(e, t, n, r));
}
function Sy(e, t, n, r) {
	let i = n.fontSize ?? 16, a = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), o = n.padding ?? 8, s = n.icons, c = t.mindmap?.maxNodeWidth, l = typeof c == "number" && c > 0 ? Math.min(c, 2e3) : 200, u = i * 1.25, d = e.nodes, f = d.length, p = new Int32Array(f), m = new Int32Array(f);
	for (let e = 0; e < f; e++) for (let t of d[e].children) p[t.id] = e, m[t.id] = m[e] + 1;
	let h = r && n.maxWidth !== void 0 && n.maxWidth > 0 ? n.maxWidth - 2 * o : 1 / 0, g = Array(f), v = Array(f), y = new Float64Array(f), b = new Float64Array(f), x = new Float64Array(f), S = new Float64Array(f), C = new Uint8Array(f);
	for (let e = 0; e < f; e++) {
		let t = d[e];
		C[e] = +(t.icon !== void 0 && _(t.icon) !== "");
		let n = Math.min(l, Math.max(72, h - m[e] * gy - 2 * fy - (C[e] ? u + hy : 0))), o = g[e] = Q(t.descr, !0, a, i, n), s = o.width + (C[e] ? u + (o.width > 0 ? hy : 0) : 0), c = Math.max(o.height, Math.round(i * 1.5)), f = ay[t.type] || (e === 0 ? oy : "");
		if (r && e === 0 && f !== "rect" && f !== "rounded" && (f = oy), v[e] = f, f === "") {
			let n = t.children.length > 0;
			y[e] = s + 2 * (n ? py : fy), b[e] = c + (n ? 6 : 0), S[e] = b[e] / 2;
		} else {
			let t = da(f, s, c);
			y[e] = t.w, b[e] = t.h, x[e] = t.dy, S[e] = t.h / 2;
		}
	}
	let w = new Float64Array(f), T = new Float64Array(f), E = new Float64Array(f), D = new Float64Array(f), O = 0, k = (e, t, n, r) => {
		let i = 0, a = 0;
		for (let o = t; o < n; o++) {
			let t = e[o].id;
			T[t] = i, a = e[o].children.length > 0 || o + 1 < n && e[o + 1].children.length > 0 ? Math.max(r, ly) : r, i += w[t] + a;
		}
		O = i - a;
		let o = e[t].id, s = e[n - 1].id;
		return (T[o] + E[o] + S[o] + T[s] + E[s] + S[s]) / 2;
	};
	for (let e = f - 1; e > 0; e--) {
		let t = d[e].children;
		if (t.length === 0) {
			w[e] = b[e];
			continue;
		}
		let n = k(t, 0, t.length, cy) - S[e], r = Math.min(0, n);
		w[e] = Math.max(O, n + b[e]) - r, E[e] = n - r, D[e] = -r;
	}
	let A = new Float64Array(f), j = new Float64Array(f), M = new Float64Array(f), N = new Int8Array(f), P = new Float64Array(f);
	if (r) {
		let e = 0;
		for (let t = 0; t < f; t++) t > 0 && p[t] === 0 && (e += yy), A[t] = m[t] * gy + y[t] / 2, j[t] = e, e += b[t] + yy;
	} else if (f > 0) {
		let e = d[0].children, t = e.length, n = 0;
		for (let t of e) n += w[t.id];
		let r = t, i = 1 / 0, a = 0;
		for (let o = 1; o < t; o++) {
			a += w[e[o - 1].id];
			let s = Math.abs(2 * a - n + (2 * o - t) * dy);
			s < i && (i = s, r = o);
		}
		for (let n = 0, i = r, a = 1; n < t; n = i, i = t, a = -1) {
			let t = k(e, n, i, dy);
			for (let r = n; r < i; r++) {
				let n = e[r].id;
				M[n] = T[n] - t, N[n] = a;
			}
		}
		j[0] = -b[0] / 2;
		for (let e = 0; e < f; e++) {
			e > 0 && (j[e] = M[e] + E[e]);
			for (let t of d[e].children) {
				let n = t.id;
				e > 0 && (N[n] = N[e], M[n] = M[e] + D[e] + T[n]), A[n] = A[e] + N[n] * (y[e] / 2 + (e > 0 ? sy : uy) + y[n] / 2);
			}
		}
	}
	let F = 0, I = 0, L = 0, R = 0, z = "", B = "", V = "", H = "", U = (e) => {
		V !== "" && (z += `<g class="pele-branch pele-section-${e ?? 0}"><g class="pele-edges" fill="none" stroke="${H}" stroke-width="1.5">${B}</g>${V}</g>`, B = V = "");
	};
	for (let e = 1; e <= f; e++) {
		let t = e % f, n = d[t], i = v[t], a = g[t], o = A[t], c = j[t];
		if (F = Math.min(F, o - y[t] / 2), I = Math.max(I, o + y[t] / 2), L = Math.min(L, c), R = Math.max(R, c + b[t]), (t === 0 || p[t] === 0) && U(d[e - 1].section), t > 0 && r) {
			p[t] === 0 && (H = Bi(n.section ?? 0));
			let e = p[t], r = e === 0 ? Math.min(Math.max(_y, b[0] / 2), gy - vy) : _y, a = A[e] - y[e] / 2 + Math.min(r, y[e] / 2), s = P[e] || j[e] + b[e], l = o - y[t] / 2 + (i ? pa(i, y[t], b[t], 3) : 0), u = c + S[t], d = Math.max(0, Math.min(vy, l - a, u - s));
			P[e] = u - d, B += `<path class="pele-edge" d="M${X(a)},${X(s)}V${X(u - d)}Q${X(a)},${X(u)} ${X(a + d)},${X(u)}H${X(l)}"/>`;
		} else if (t > 0) {
			p[t] === 0 && (H = Bi(n.section ?? 0));
			let e = p[t], r = N[t], a = r > 0 ? 1 : 3, s = A[e] + r * (y[e] / 2 - (v[e] ? pa(v[e], y[e], b[e], a) : 0)), l = j[e] + S[e], u = o - r * y[t] / 2 + (i ? r * pa(i, y[t], b[t], 4 - a) : 0), d = c + S[t], f = X((s + u) / 2);
			B += `<path class="pele-edge" d="M${X(s)},${X(l)}C${f},${X(l)} ${f},${X(d)} ${X(u)},${X(d)}"/>`;
		}
		let l = !i && n.children.length > 0, m = ` fill="${H}" fill-opacity="${my}" stroke="${H}"`, h = "";
		i ? h = t > 0 ? fa(i, y[t], b[t], m, ` stroke="${H}"`) : fa(i, y[t], b[t], " fill=\"var(--_s)\" stroke=\"var(--_b)\"", " stroke=\"var(--_b)\"") : l && (h = `<rect x="${X(-y[t] / 2)}" y="${X(-b[t] / 2)}" width="${X(y[t])}" height="${X(b[t])}" rx="${X(b[t] / 2)}"${m}/>`);
		let _ = 0;
		n.icon && C[t] && (_ = (u + (a.width > 0 ? hy : 0)) / 2, h += Uv(n.icon, -_ - a.width / 2, x[t] - u / 2, u, s));
		let w = `<g class="pele-node pele-shape-${i || (l ? "branch" : "text")}${t > 0 ? "" : " pele-root"}${Ri(n.class ?? "")}" data-id="${Y(n.nodeId)}" transform="translate(${X(o)},${X(c + b[t] / 2)})">` + h + (r && !i ? by(a, _ - a.width / 2, x[t], s) : Z(a, _, x[t], " class=\"pele-label\"", s)) + "</g>";
		t > 0 ? V += w : z += w;
	}
	let ee = Xs(e.title, a, i, no(n)), te = ee.height > 0 ? ee.height + 16 : 0, W = Math.max(I - F, ee.width), ne = Math.ceil(W + 2 * o), re = Math.ceil(R - L + te + 2 * o);
	return {
		svg: Ui("mindmap", ne, re, i, n, {}, Z(ee, ne / 2, o + ee.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + `<g transform="translate(${X(o - F + (W - I + F) / 2)},${X(o + te - L)})">${z}</g>`),
		width: ne,
		height: re,
		links: []
	};
}
var Cy = {
	type: "mindmap",
	math: !0,
	parse(e, t, n) {
		let r = new ry();
		return r.title = n, iy(e, r), r;
	},
	render: xy
}, wy = 1e4;
function Ty(e, t, n, r, i) {
	let a = e.packet?.[t];
	return typeof a == "number" && a >= r ? Math.min(a, i) : n;
}
function Ey(e) {
	return new n(e, "semantic", { type: "packet" });
}
function Dy(e, t, n) {
	let r = Math.floor(Ty(t, "bitsPerRow", 32, 1, 4096)), i = [], a = -1, o = [], s = 1;
	for (let t of e.blocks) {
		let { start: e, end: n, bits: c } = t;
		if (e !== void 0 && n !== void 0 && n < e) throw Ey(`Packet block ${e} - ${n} is invalid. End must be greater than start.`);
		if (e ??= a + 1, e !== a + 1) throw Ey(`Packet block ${e} - ${n ?? e} is not contiguous. It should start from ${a + 1}.`);
		if (c === 0) throw Ey(`Packet block ${e} is invalid. Cannot have a zero bit field.`);
		for (n ??= e + (c ?? 1) - 1, c ??= n - e + 1, a = n; o.length <= r + 1 && i.length < wy;) {
			let a = s * r - 1;
			if (n <= a) {
				o.push({
					start: e,
					end: n,
					bits: c,
					label: t.label
				}), n === a && (i.push(o), o = [], s++);
				break;
			}
			o.push({
				start: e,
				end: a,
				bits: a - e,
				label: t.label
			}), i.push(o), o = [], s++, e = a + 1, c = n - e;
		}
	}
	return o.length > 0 && i.push(o), {
		type: "packet",
		title: e.title || n,
		accTitle: e.accTitle ? e.accTitle.replace(/^\s+/g, "") : void 0,
		accDescr: e.accDescr ? e.accDescr.replace(/\n\s+/g, "\n") : void 0,
		bitsPerRow: r,
		rows: i
	};
}
var Oy = [
	{
		name: "packet-beta",
		pattern: "packet-beta"
	},
	Jo("packet"),
	{
		name: "-",
		pattern: "-",
		longer: [Go]
	},
	{
		name: "+",
		pattern: "+"
	},
	{
		name: ":",
		pattern: ":"
	},
	zo,
	Bo,
	Vo,
	{
		name: "INT",
		pattern: /0|[1-9][0-9]*(?!\.)/y
	},
	Ho,
	Uo,
	Wo,
	Go,
	Ko,
	qo
];
function ky(e) {
	let t = new is(Ro(e, Oy, "packet"), Oy, "packet"), n = {
		$type: "Packet",
		blocks: []
	}, r = () => {
		if (t.kind !== -1) for (t.kind !== 10 && t.fail("a line break or the end of input"); t.kind === 10;) t.i++;
	};
	for (; t.kind === 10;) t.i++;
	for (t.accept(0) || t.expect(1); t.kind !== -1;) switch (t.kind) {
		case 10:
			t.i++;
			break;
		case 5:
			n.accDescr = ts(t.take()), r();
			break;
		case 6:
			n.accTitle = es(t.take()), r();
			break;
		case 7:
			n.title = $o(t.take()), r();
			break;
		case 8:
		case 3: {
			let e = {
				$type: "PacketBlock",
				label: ""
			};
			t.accept(3) ? e.bits = Number(t.expect(8)) : (e.start = Number(t.take()), t.accept(2) && (e.end = Number(t.expect(8)))), t.expect(4), e.label = rs(t.expect(9)), n.blocks.push(e), r();
			break;
		}
		default: t.fail("a field, a title, or a line break");
	}
	return n;
}
function Ay(e, t, n, r, i, a = 0) {
	if (e === "" || t <= 0) return;
	let o = i.width(e, n, a);
	if (o <= t) return {
		text: e,
		size: n,
		width: o
	};
	let s = Math.max(r, Math.floor(n * t / o));
	for (; s >= r;) {
		if (o = i.width(e, s, a), o <= t) return {
			text: e,
			size: s,
			width: o
		};
		s--;
	}
	let c = Array.from(e), l = 0, u = c.length - 1;
	for (; l < u;) {
		let e = l + u + 1 >> 1;
		i.width(c.slice(0, e).join("").trimEnd() + "…", r, a) <= t ? l = e : u = e - 1;
	}
	if (l === 0) return;
	let d = c.slice(0, l).join("").trimEnd() + "…";
	return o = i.width(d, r, a), o <= t ? {
		text: d,
		size: r,
		width: o
	} : void 0;
}
function jy(e, t, n) {
	return ao(n, (r) => My(e, t, n, r));
}
function My(e, t, n, r) {
	let i = n.fontSize ?? 16, a = Math.round(i * .875), o = Math.round(i * .625), s = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), c = n.padding ?? 8, l = t.packet ?? {}, u = Ty(t, "rowHeight", 32, 1, 400), d = Ty(t, "bitWidth", 32, 1, 400), f = Ty(t, "paddingX", 5, 0, 400), m = Ty(t, "paddingY", 5, 0, 400), h = l.showBits !== !1, g = l.bitOrder === "descending", _ = e.bitsPerRow, v = e.rows;
	if (r) {
		let t = Math.max(1, Math.floor(((n.maxWidth ?? 320) - 2 * c) / Math.min(d, 18)));
		_ = Math.min(_, Math.max(8, 2 ** Math.floor(Math.log2(t))));
		let r = e.rows[e.rows.length - 1], i = r?.[r.length - 1]?.end ?? 0;
		Math.ceil((i + 1) / _) > 1e4 && (_ = e.bitsPerRow), d = Math.min(d, Math.max(18, ((n.maxWidth ?? 320) - 2 * c) / _));
		let a = (e) => e.bits === e.end - e.start, o = [];
		for (let t of e.rows) for (let n of t) {
			let t = o[o.length - 1];
			t && a(t) && a(n) && t.label === n.label && n.start === t.end + 1 && n.start % e.bitsPerRow === 0 ? (t.end = n.end, t.bits = t.end - t.start) : o.push({ ...n });
		}
		v = [];
		for (let e of o) for (let t = e.start; t <= e.end;) {
			let n = Math.min(e.end, (Math.floor(t / _) + 1) * _ - 1), r = Math.floor(t / _);
			(v[r] ?? (v[r] = [])).push({
				...e,
				start: t,
				end: n
			}), t = n + 1;
		}
	}
	let y = /* @__PURE__ */ new Map();
	if (r) for (let e of v) for (let t of e) {
		let e = Math.max(1, (t.end - t.start + 1) * d - Math.min(f, d - 1) - 6), n = ul(p(t.label).trim(), s, a, e);
		y.set(t, n);
	}
	let b = h ? o + 4 : 0, x = v.map((e) => {
		let t = u;
		if (r) for (let n of e) t = Math.max(t, y.get(n).height + 10);
		return t;
	}), S = [], C = 0;
	for (let e of x) S.push(C), C += b + e + m;
	v.length && (C -= m);
	let w = Math.min(f, d - 1), T = v.length > 0 ? _ * d - w : 0, E = Q(e.title, !1, s, i, r ? no(n) : 4e3, 1), D = E.height > 0 ? E.height + (C > 0 ? 12 : 0) : 0, O = /* @__PURE__ */ new Map(), k = (e, t) => {
		let n = O.get(e);
		return n || O.set(e, n = /* @__PURE__ */ new Map()), n.has(t) || n.set(t, Ay(p(e).trim(), t, a, Math.round(i * .5), s)), n.get(t);
	}, A = c + Math.max(0, (E.width - T) / 2), j = "", M = "";
	v.forEach((e, t) => {
		let n = c + S[t] + b, i = x[t];
		for (let t of e) {
			let e = t.end - t.start + 1, o = t.start % _, s = A + (g ? _ - o - e : o) * d, c = e * d - w, l = r ? void 0 : k(t.label, c - 6);
			if (j += `<g class="pele-node" data-id="${t.start}-${t.end}"><rect x="${X(s)}" y="${X(n)}" width="${X(c)}" height="${X(i)}" fill="var(--_s)" stroke="var(--_b)"${Ti}/>` + (r ? Z(y.get(t), s + c / 2, n + i / 2, "") : l && l.size <= i ? `<text x="${X(s + c / 2)}" y="${X(n + i / 2 + l.size * .35)}"${l.size === a ? "" : ` font-size="${X(l.size)}"`}>${nt(l.text)}</text>` : "") + "</g>", !h) continue;
			let u = g ? t.end : t.start, f = g ? t.start : t.end;
			M += e === 1 ? `<text x="${X(s + c / 2)}" y="${X(n - 4)}" text-anchor="middle">${u}</text>` : `<text x="${X(s)}" y="${X(n - 4)}">${u}</text><text x="${X(s + c)}" y="${X(n - 4)}" text-anchor="end">${f}</text>`;
		}
	});
	let N = Math.ceil(Math.max(T, E.width) + 2 * c), P = Math.ceil(C + D + 2 * c);
	return {
		svg: Ui("packet", N, P, i, n, e, (j ? `<g class="pele-packet-fields" font-size="${a}" text-anchor="middle">${j}</g>` : "") + (M ? `<g class="pele-packet-bits" font-size="${o}" fill="var(--_m)">${M}</g>` : "") + Z(E, N / 2, P - c - E.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"")),
		width: N,
		height: P,
		links: []
	};
}
var Ny = {
	type: "packet",
	parse: (e, t, n) => Dy(ky(e), t, n),
	render: jy
};
function Py(e, t) {
	let r = /* @__PURE__ */ new Map();
	for (let { label: t, value: i } of e.sections) {
		if (i < 0) throw new n(`"${t}" has invalid value: ${i}. Negative values are not allowed in pie charts. All slice values must be >= 0.`, "semantic", { type: "pie" });
		r.has(t) || r.set(t, i);
	}
	return {
		type: "pie",
		title: e.title || t,
		accTitle: e.accTitle ? e.accTitle.replace(/^\s+/g, "") : void 0,
		accDescr: e.accDescr ? e.accDescr.replace(/\n\s+/g, "\n") : void 0,
		showData: e.showData,
		sections: r
	};
}
function Fy(e, t) {
	let n = t;
	for (let t = e.charCodeAt(n); t >= 48 && t <= 57; t = e.charCodeAt(n)) n++;
	return n;
}
function Iy() {
	let e = 0, t = 0, n = -1;
	return (r, i) => {
		let a = r.charCodeAt(i) === 45 ? i + 1 : i;
		if ((a < e || a >= t) && (e = a, t = Fy(r, a), n = -1, t > a && r.charCodeAt(t) === 46)) {
			let e = Fy(r, t + 1), i = e - t - 1;
			i > 0 && r.charCodeAt(e) !== 46 ? n = e : i > 1 && (n = e - 1);
		}
		return t === a ? -1 : n >= 0 ? n : r.charCodeAt(a) === 48 ? r.charCodeAt(a + 1) === 46 ? -1 : a + 1 : r.charCodeAt(t) === 46 ? t - 1 > a ? t - 1 : -1 : t;
	};
}
var Ly = [
	Jo("showData"),
	Jo("pie"),
	{
		name: ":",
		pattern: ":"
	},
	{
		name: "NUMBER_PIE",
		pattern: /(?:-?[0-9]+\.[0-9]+(?!\.))|(?:-?(0|[1-9][0-9]*)(?!\.))/y,
		scanner: Iy,
		first: "-0123456789"
	},
	zo,
	Bo,
	Vo,
	Ho,
	Uo,
	Wo,
	Go,
	Ko,
	qo
];
function Ry(e) {
	let t = new is(Ro(e, Ly, "pie"), Ly, "pie"), n = {
		$type: "Pie",
		showData: !1,
		sections: []
	}, r = () => {
		if (t.kind !== -1) for (t.kind !== 8 && t.fail("a line break or the end of input"); t.kind === 8;) t.i++;
	};
	for (; t.kind === 8;) t.i++;
	for (t.expect(1), n.showData = t.accept(0); t.kind !== -1;) switch (t.kind) {
		case 8:
			t.i++;
			break;
		case 4:
			n.accDescr = ts(t.take()), r();
			break;
		case 5:
			n.accTitle = es(t.take()), r();
			break;
		case 6:
			n.title = $o(t.take()), r();
			break;
		case 7: {
			let e = rs(t.take());
			t.expect(2);
			let i = Number(t.expect(3));
			n.sections.push({
				$type: "PieSection",
				label: e,
				value: i
			}), r();
			break;
		}
		default: t.fail("a section, a title, or a line break");
	}
	return n;
}
var zy = 120, By = 12, Vy = 26, Hy = 32, Uy = 28;
function Wy(e, t) {
	return e.pie?.[t];
}
function Gy(e, t) {
	return `${X(Math.sin(e) * t)},${X(-Math.cos(e) * t)}`;
}
function Ky(e, t, n, r) {
	if (t - e >= Math.PI * 2 - 1e-9) {
		let e = (e, t) => `M0,${X(-e)}A${X(e)},${X(e)} 0 1 ${t} 0,${X(e)}A${X(e)},${X(e)} 0 1 ${t} 0,${X(-e)}Z`;
		return e(n, 1) + (r > 0 ? e(r, 0) : "");
	}
	let i = +(t - e > Math.PI);
	return r <= 0 ? `M0,0L${Gy(e, n)}A${X(n)},${X(n)} 0 ${i} 1 ${Gy(t, n)}Z` : `M${Gy(e, n)}A${X(n)},${X(n)} 0 ${i} 1 ${Gy(t, n)}L${Gy(t, r)}A${X(r)},${X(r)} 0 ${i} 0 ${Gy(e, r)}Z`;
}
function qy(e, t, n) {
	return to(n, zy * 2, 140, (r, i) => Jy(e, t, n, r / 2, i));
}
function Jy(e, t, n, r, i) {
	let a = n.fontSize ?? 16, o = Math.round(a * .875), s = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), c = n.padding ?? 8, l = Wy(t, "textPosition"), u = typeof l == "number" && l >= 0 && l <= 1 ? l : .75, d = Wy(t, "donutHole"), f = typeof d == "number" && d > 0 && d <= .9 ? d * r : 0, p = String(Wy(t, "legendPosition") ?? "right"), m = i && (p === "left" || p === "right") ? "bottom" : p, h = [...e.sections], g = 0;
	for (let [, e] of h) g += e;
	let _ = h.map(([t, n]) => Q(e.showData ? `${t} [${n}]` : t, !1, s, o, 4e3)), v = 0;
	for (let e of _) v = Math.max(v, e.width);
	v += _.length > 0 ? By + 8 : 0;
	let y = _.length * Vy, b = Q(e.title, !1, s, a, no(n), 1), x = b.height > 0 ? b.height + 16 : 0, S = h.map(([, e]) => {
		let t = g > 0 ? e / g : 0;
		return t * 100 >= 1 && (t * 100).toFixed(0) !== "0" ? t : 0;
	}), C = S.map((e) => e === 0 || e >= .5 ? !1 : 2 * r * u * Math.sin(e * Math.PI) < s.width((e * 100).toFixed(0) + "%", o, 0) + 6), w = C.includes(!0) ? Uy : 0, T = m === "left" || m === "right" || m === "center" ? m : "", E = m === "top" || m === "bottom", D = (r + w) * 2, O = D, k = D;
	T === "left" || T === "right" ? (O += v > 0 ? Hy + v : 0, k = Math.max(k, y)) : E && (O = Math.max(O, v), k += y > 0 ? 20 + y : 0), O = Math.max(O, b.width);
	let A = c + (T === "left" ? v + Hy + D / 2 : T === "right" ? D / 2 : O / 2), j = c + x, M = j + (m === "top" ? y + 20 + D / 2 : E ? D / 2 : k / 2), N = "", P = "", F = "", I = 0, L = r + Uy / 2, R = [], z = (e, t, n) => R.every((r) => Math.abs(e - r.x) >= (n + r.width) / 2 + 2 || Math.abs(t - r.y) >= o + 2);
	h.forEach(([e], t) => {
		let n = S[t];
		if (n === 0) return;
		let i = I + n * Math.PI * 2;
		N += `<path class="pele-slice" data-id="${Y(e)}" d="${Ky(I, i, r, f)}" fill="${Bi(t)}"/>`;
		let a = (I + i) / 2, c = (n * 100).toFixed(0) + "%";
		if (C[t]) {
			let e = s.width(c, o, 0), t = a;
			for (let n = 0; n < 360 && !z(Math.sin(t) * L, -Math.cos(t) * L, e); n++) t += 2 / L;
			let n = Math.sin(t) * L, r = -Math.cos(t) * L;
			R.push({
				x: n,
				y: r,
				width: e
			}), F += `<text x="${X(n)}" y="${X(r + o * .35)}">${c}</text>`;
		} else {
			let e = r * u;
			P += `<text x="${X(Math.sin(a) * e)}" y="${X(-Math.cos(a) * e + o * .35)}">${c}</text>`;
		}
		I = i;
	}), N === "" && (N = `<circle class="pele-slice" r="${r}" fill="none" stroke="var(--_b)"/>`);
	let B = "", V, H;
	T === "right" ? (V = A + D / 2 + Hy, H = j + (k - y) / 2) : T === "left" ? (V = c, H = j + (k - y) / 2) : T === "center" ? (V = A - v / 2, H = M - y / 2) : (V = c + (O - v) / 2, H = m === "top" ? j : j + D + 20), _.forEach((e, t) => {
		let n = H + t * Vy + Vy / 2;
		B += `<g class="pele-legend-item" data-id="${Y(h[t][0])}"><rect x="${X(V)}" y="${X(n - By / 2)}" width="${By}" height="${By}" rx="2" fill="${Bi(t)}"/>` + Z(e, V + By + 8 + e.width / 2, n, "") + "</g>";
	});
	let U = Math.ceil(O + 2 * c), ee = Math.ceil(k + x + 2 * c);
	return {
		svg: Ui("pie", U, ee, a, n, e, Z(b, U / 2, c + b.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + `<g class="pele-slices" transform="translate(${X(A)},${X(M)})" stroke="var(--_bg)" stroke-width="1" stroke-linejoin="round">${N}</g>` + (P ? `<g class="pele-slice-labels" transform="translate(${X(A)},${X(M)})" font-size="${o}" text-anchor="middle" fill="var(--_bg)">${P}</g>` : "") + (F ? `<g class="pele-slice-labels" transform="translate(${X(A)},${X(M)})" font-size="${o}" text-anchor="middle">${F}</g>` : "") + (B ? `<g class="pele-legend" font-size="${o}">${B}</g>` : "")),
		width: U,
		height: ee,
		links: []
	};
}
var Yy = {
	type: "pie",
	parse: (e, t, n) => Py(Ry(e), n),
	render: qy
}, Xy = /^\d+$/, Zy = /^#?([\dA-Fa-f]{6}|[\dA-Fa-f]{3})$/, Qy = /^\d+px$/;
function $y(e, t, r) {
	return new n(`value for ${e} ${t} is invalid, please use a valid ${r}`, "semantic", { type: "quadrantChart" });
}
function eb(e) {
	let t = e.trim(), n = t.indexOf(":");
	if (n === -1) return [t, "undefined"];
	let r = t.slice(n + 1).trimStart(), i = r.indexOf(":");
	return [t.slice(0, n).trimEnd(), i === -1 ? r : r.slice(0, i).trimEnd()];
}
function tb(e) {
	let t = {};
	for (let r of e) {
		let [e, i] = eb(r);
		if (e === "radius") {
			if (!Xy.test(i)) throw $y(e, i, "number");
			t.radius = parseInt(i);
		} else if (e === "color") {
			if (!Zy.test(i)) throw $y(e, i, "hex code");
			t.color = i;
		} else if (e === "stroke-color") {
			if (!Zy.test(i)) throw $y(e, i, "hex code");
			t.strokeColor = i;
		} else if (e === "stroke-width") {
			if (!Qy.test(i)) throw $y(e, i, "number of pixels (eg. 10px)");
			t.strokeWidth = i;
		} else throw new n(`style named ${e} is not supported.`, "semantic", { type: "quadrantChart" });
	}
	return t;
}
function nb(e) {
	return {
		text: e.text.trim(),
		type: e.type
	};
}
var rb = class {
	type = "quadrantChart";
	title;
	accTitle;
	accDescr;
	quadrants = [
		void 0,
		void 0,
		void 0,
		void 0
	];
	xAxisLeft;
	xAxisRight;
	yAxisBottom;
	yAxisTop;
	points = [];
	classes = /* @__PURE__ */ new Map();
	setQuadrant1Text(e) {
		this.quadrants[0] = nb(e);
	}
	setQuadrant2Text(e) {
		this.quadrants[1] = nb(e);
	}
	setQuadrant3Text(e) {
		this.quadrants[2] = nb(e);
	}
	setQuadrant4Text(e) {
		this.quadrants[3] = nb(e);
	}
	setXAxisLeftText(e) {
		this.xAxisLeft = nb(e);
	}
	setXAxisRightText(e) {
		this.xAxisRight = nb(e);
	}
	setYAxisBottomText(e) {
		this.yAxisBottom = nb(e);
	}
	setYAxisTopText(e) {
		this.yAxisTop = nb(e);
	}
	addPoint(e, t, n, r, i) {
		this.points.push({
			x: Number(n),
			y: Number(r),
			text: nb(e),
			className: t,
			...tb(i)
		});
	}
	addClass(e, t) {
		this.classes.set(e, tb(t));
	}
	setDiagramTitle(e) {
		this.title = e;
	}
	setAccTitle(e) {
		this.accTitle = e.replace(/^\s+/g, "");
	}
	setAccDescription(e) {
		this.accDescr = e.replace(/\n\s+/g, "\n");
	}
};
function ib(e, t, n) {
	for (let r = 0; r < n.length; r++) {
		let i = e.charCodeAt(t + r), a = n.charCodeAt(r);
		if (i !== a && !(a >= 97 && a <= 122 && i === a - 32)) return !1;
	}
	return !0;
}
var ab = /* @__PURE__ */ "$end.INVALID.NEWLINE.title.title_value.acc_title.acc_title_value.acc_descr.acc_descr_value.acc_descr_multiline_value.X-AXIS.Y-AXIS.AXIS-TEXT-DELIMITER.QUADRANT_1.QUADRANT_2.QUADRANT_3.QUADRANT_4.CLASSDEF.MD_STR.STR.class_name.point_start.point_x.point_y.QUADRANT.ALPHA.UNICODE_TEXT.COLON.PLUS.COMMA.EQUALS.MULT.BRKT.UNDERSCORE.DOT.AMP.MINUS.NUM.SPACE.SEMI.PUNCTUATION.EOF".split("."), ob = [
	41,
	4,
	6,
	8,
	9,
	19
], sb = /* @__PURE__ */ new Uint8Array(128);
for (let [e, t] of [
	[":", 27],
	["+", 28],
	[",", 29],
	["=", 30],
	["*", 31],
	["#", 32],
	["_", 33],
	[".", 34],
	["&", 35],
	["-", 36],
	[" 	\v\f", 38],
	[";", 39],
	["!$%'`?\\/", 40]
]) for (let n = 0; n < e.length; n++) sb[e.charCodeAt(n)] = t;
function cb(e) {
	let t = e.length, n = [], r = [], i = [], a = [], o = 0, s = 0, c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = (t, a, o) => {
		n.push(t), r.push(e.slice(a, o)), i.push(a), s = o;
	}, _ = (e) => {
		a.push(o), o = e;
	}, v = () => {
		a.length > 0 && (o = a.pop());
	}, y = (n) => {
		let r = e.indexOf("\n", n);
		return r === -1 ? t : r;
	}, b = (t) => {
		for (; e.charCodeAt(t) === 32;) t++;
		return t;
	}, x = (n) => {
		for (; n < t && G(e.charCodeAt(n));) n++;
		return n;
	}, S = (n) => {
		let r = e.charCodeAt(n);
		if (r === 49) return n + 1;
		if (r !== 48) return -1;
		let i = n + 1;
		if (i < t && !ie(e.charCodeAt(i)) && q(e.charCodeAt(i + 1))) for (i += 2; q(e.charCodeAt(i));) i++;
		return i;
	};
	e: for (; s < t;) {
		let n = e.charCodeAt(s), r = e.charCodeAt(s + 1);
		switch (o) {
			case 0: break;
			case 1:
			case 2:
			case 3:
				g(ob[o], s, y(s)), v();
				continue;
			case 4:
				if (n === 125) s++, v();
				else {
					let n = e.indexOf("}", s);
					g(9, s, n === -1 ? t : n);
				}
				continue;
			case 5:
				if (n === 34) s++, v();
				else {
					let n = e.indexOf("\"", s);
					g(19, s, n === -1 ? t : n);
				}
				continue;
			case 6:
				if (n === 96 && r === 34) {
					s += 2, v();
					continue;
				}
				if (n !== 96 && n !== 34) {
					let n = s + 1;
					for (let r = e.charCodeAt(n); n < t && r !== 96 && r !== 34; r = e.charCodeAt(++n));
					g(18, s, n);
					continue;
				}
				break e;
			case 7:
				if (J(n)) {
					let t = s + 1;
					for (; J(e.charCodeAt(t));) t++;
					g(20, s, t), v();
					continue;
				}
				break e;
			case 8: {
				let t = S(s);
				if (t !== -1) {
					g(22, s, t), _(9);
					continue;
				}
				let n = x(s);
				if (e.charCodeAt(n) === 93) {
					s = b(n + 1), v();
					continue;
				}
				break e;
			}
			case 9: {
				let t = x(s);
				if (e.charCodeAt(t) === 44) {
					s = x(t + 1), o = 10;
					continue;
				}
				break e;
			}
			case 10: {
				let e = S(s);
				if (e !== -1) {
					g(23, s, e), v();
					continue;
				}
				break e;
			}
		}
		if (n === 37 && r === 37) {
			s = y(s + 2);
			continue;
		}
		if (n !== 125 && r === 37 && e.charCodeAt(s + 2) === 37) {
			s = y(s + 3);
			continue;
		}
		if (n === 10 || n === 13) {
			let t = s + 1;
			for (let n = e.charCodeAt(t); n === 10 || n === 13; n = e.charCodeAt(++t));
			g(2, s, t);
			continue;
		}
		let i = n | 32;
		if (i === 116 && ib(e, s, "title") && !J(e.charCodeAt(s + 5))) {
			g(3, s, s + 5), _(1);
			continue;
		}
		if (i === 97 && ib(e, s, "acc")) {
			let t = ib(e, s + 3, "descr");
			if (t || ib(e, s + 3, "title")) {
				let n = x(s + 8), r = e.charCodeAt(n);
				if (r === 58) {
					g(t ? 7 : 5, s, x(n + 1)), _(t ? 3 : 2);
					continue;
				}
				if (r === 123 && t) {
					s = x(n + 1), _(4);
					continue;
				}
			}
		}
		let a = s;
		n === 32 && ((s < c || s >= l) && (c = s, l = b(s)), a = l);
		let C = e.charCodeAt(a), w = C | 32, T = 0, E = 0;
		if (w === 120 && ib(e, a, "x-axis")) T = 10, E = a + 6;
		else if (w === 121 && ib(e, a, "y-axis")) T = 11, E = a + 6;
		else if (C === 45) {
			if (a < u || a >= d) for (u = a, d = a; e.charCodeAt(d) === 45;) d++;
			d - a >= 2 && e.charCodeAt(d) === 62 && (T = 12, E = d + 1);
		} else if (w === 113 && ib(e, a, "quadrant")) {
			let t = e.charCodeAt(a + 9);
			e.charCodeAt(a + 8) === 45 && t >= 49 && t <= 52 ? (T = 13 + t - 49, E = a + 10) : ib(e, a + 8, "chart") && (T = 24, E = a + 13);
		}
		if (T !== 0) g(T, s, b(E));
		else if (i === 99 && ib(e, s, "classdef") && !J(e.charCodeAt(s + 8))) g(17, s, s + 8);
		else if (n === 34) r === 96 ? (s += 2, _(6)) : (s++, _(5));
		else if (n === 58 && r === 58 && e.charCodeAt(s + 2) === 58) s += 3, _(7);
		else {
			if (n === 58 || G(n)) {
				let t = s;
				if (n !== 58 && ((s < f || s >= p) && (f = s, p = x(s)), t = p), e.charCodeAt(t) === 58 && ((t + 1 < m || t + 1 >= h) && (m = t + 1, h = x(t + 1)), e.charCodeAt(h) === 91)) {
					g(21, s, x(h + 1)), _(8);
					continue;
				}
			}
			if (ae(n)) {
				let t = s + 1;
				for (; ae(e.charCodeAt(t));) t++;
				g(25, s, t);
			} else if (n >= 128) {
				let t = s + 1;
				for (; e.charCodeAt(t) >= 128;) t++;
				g(26, s, t);
			} else if (q(n)) {
				let t = s + 1;
				for (; q(e.charCodeAt(t));) t++;
				g(37, s, t);
			} else if (sb[n] !== 0) g(sb[n], s, s + 1);
			else break;
		}
	}
	return s < t ? (n.push(1), r.push(""), i.push(s), {
		types: n,
		texts: r,
		starts: i
	}) : (o < ob.length && (n.push(ob[o]), r.push(""), i.push(t)), n.push(0), r.push(""), i.push(t), {
		types: n,
		texts: r,
		starts: i
	});
}
function lb(...e) {
	let t = /* @__PURE__ */ new Uint8Array(42);
	for (let n of e) t[n] = 1;
	return t;
}
var ub = lb(40, 35, 37, 25, 29, 28, 30, 31, 34, 32, 33, 26), db = lb(25, 37, 36, 29, 27, 35, 32, 31, 26), fb = lb(25, 37, 27, 38, 32, 36), pb = lb(2, 39, 41), mb = [
	"setQuadrant1Text",
	"setQuadrant2Text",
	"setQuadrant3Text",
	"setQuadrant4Text"
], hb = "'STR', 'MD_STR', 'ALPHA', 'NUM', 'UNICODE_TEXT', 'PUNCTUATION'";
function gb(e, t) {
	let { types: n, texts: r, starts: a } = cb(e), o = 0, s = (t) => {
		let r = n[o];
		throw r === 1 ? i("quadrantChart", e, a[o], "", !0) : i("quadrantChart", e, a[o], `Expecting ${t}, got '${ab[r]}'`);
	}, c = (e) => (n[o] !== e && s(`'${ab[e]}'`), r[o++]), l = (e) => e === 19 || e === 18 || ub[e] === 1, u = () => {
		let e = n[o];
		l(e) || s(hb);
		let t = r[o++];
		for (; ub[n[o]] === 1 || n[o] === 38 || n[o] === 36;) t += r[o++];
		return {
			text: t,
			type: e === 18 ? "markdown" : "text"
		};
	}, d = () => {
		let e = [];
		for (;;) {
			fb[n[o]] === 0 && s("'ALPHA', 'NUM', 'COLON', 'SPACE', 'BRKT', 'MINUS'");
			let t = r[o++];
			for (; fb[n[o]] === 1;) t += r[o++];
			if (e.push(t.trim()), n[o] !== 29) return e;
			o++;
		}
	};
	for (; pb[n[o]] === 1 || n[o] === 38;) o++;
	for (c(24); n[o] !== 0;) {
		for (; n[o] === 38;) o++;
		let e = n[o];
		switch (e) {
			case 17: {
				o++, c(38), db[n[o]] === 0 && s("'ALPHA', 'NUM', 'UNICODE_TEXT'");
				let e = r[o++];
				for (; db[n[o]] === 1;) e += r[o++];
				c(38), t.addClass(e, d());
				break;
			}
			case 10:
			case 11: {
				o++;
				let r = u(), i;
				n[o] === 12 && (o++, l(n[o]) ? i = u() : r.text += " ⟶ "), e === 10 ? (t.setXAxisLeftText(r), i && t.setXAxisRightText(i)) : (t.setYAxisBottomText(r), i && t.setYAxisTopText(i));
				break;
			}
			case 13:
			case 14:
			case 15:
			case 16:
				o++, t[mb[e - 13]](u());
				break;
			case 3:
				o++, t.setDiagramTitle(c(4).trim());
				break;
			case 5:
				o++, t.setAccTitle(c(6).trim());
				break;
			case 7:
				o++, t.setAccDescription(c(8).trim());
				break;
			case 9:
				t.setAccDescription(r[o++].trim());
				break;
			default: if (l(e)) {
				let e = u(), i = n[o] === 20 ? r[o++] : "";
				c(21);
				let a = c(22), s = c(23);
				t.addPoint(e, i, a, s, fb[n[o]] === 1 ? d() : []);
			}
		}
		pb[n[o]] === 0 && s("'NEWLINE', 'SEMI', 'EOF'"), o++;
	}
}
var _b = 4, vb = 300;
function yb(e, t) {
	return e.quadrantChart?.[t];
}
function bb(e, t, n, r) {
	let i = yb(e, t);
	return typeof i == "number" && i >= 0 ? Math.min(i, r) : n;
}
function xb(e) {
	return e.startsWith("#") ? e : "#" + e;
}
function Sb(e, t, n) {
	let r = n.fontSize ?? 16, i = Math.round(r * .875), a = Math.round(r * .75), o = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), s = Math.round(Math.max(100, bb(t, "chartWidth", 500, 4e3))), c = Math.round(ro(n, s, 280)), l = Math.round(Math.max(100, bb(t, "chartHeight", 500, 4e3)) * c / s), u = bb(t, "quadrantPadding", n.padding ?? 8, 200), d = bb(t, "xAxisLabelPadding", 5, 200), f = bb(t, "yAxisLabelPadding", 5, 200), p = e.points.length > 0, m = (e, t, n) => Q(e?.text, e?.type === "markdown", o, t, Math.max(n, 40)), h = Q(e.title, !1, o, r, Math.max(c - 2 * u, 40), 1), g = bb(t, "titlePadding", 10, 200), _ = h.height > 0 ? h.height + g : 0, v = !!(e.xAxisLeft?.text || e.xAxisRight?.text), y = !!(e.yAxisBottom?.text || e.yAxisTop?.text), b = p || yb(t, "xAxisPosition") === "bottom", x = yb(t, "yAxisPosition") === "right", S = c - 2 * u, C = m(e.xAxisLeft, i, e.xAxisRight ? S / 2 - 16 : S), w = m(e.xAxisRight, i, S / 2 - 16), T = Math.max(C.height, w.height), E = v ? T + d : 0, D = l - 2 * u - _ - E, O = m(e.yAxisBottom, i, e.yAxisTop ? D / 2 - 16 : D), k = m(e.yAxisTop, i, D / 2 - 16), A = Math.max(O.height, k.height), j = y ? A + f : 0, M = u + (x ? 0 : j), N = u + _ + (b ? 0 : E), P = Math.max(0, S - j), F = Math.max(0, D), I = Math.max(0, (P - _b) / 2), L = Math.max(0, (F - _b) / 2), R = [
		M + I,
		N,
		M + P - I,
		N + F,
		M,
		N + L,
		M + P,
		N + F - L
	], z = (e, t, n, r, i) => {
		for (let a = e; a < R.length; a += 4) if (t < R[a + 2] && r > R[a] && n < R[a + 3] && i > R[a + 1]) return !1;
		return !0;
	}, B = bb(t, "quadrantTextTopPadding", 5, 200), V = "";
	for (let t = 0; t < 4; t++) {
		let n = t === 0 || t === 3 ? M + P - I : M, i = t < 2 ? N : N + F - L, a = m(e.quadrants[t], r, I - 16), o = n + I / 2, s = p ? i + B + a.height / 2 : i + L / 2;
		R.push(o - a.width / 2, s - a.height / 2, o + a.width / 2, s + a.height / 2), V += `<g class="pele-quadrant" data-id="${t + 1}"><rect x="${X(n)}" y="${X(i)}" width="${X(I)}" height="${X(L)}"${Ti}/>` + Z(a, o, s, " class=\"pele-label\" fill=\"var(--_fg)\" stroke=\"none\"") + "</g>";
	}
	let H = "";
	if (v) {
		let e = b ? N + F + d + T / 2 : N - d - T / 2;
		H += Z(C, w.height > 0 ? M + P / 4 : M + C.width / 2, e, "") + Z(w, M + P * 3 / 4, e, "");
	}
	if (y) {
		let e = x ? M + P + f + A / 2 : M - f - A / 2, t = (t, n) => t.height > 0 ? `<g transform="translate(${X(e)},${X(n)}) rotate(-90)">${Z(t, 0, 0, "")}</g>` : "";
		H += t(O, k.height > 0 ? N + F * 3 / 4 : N + F - O.width / 2) + t(k, N + F / 4);
	}
	let U = bb(t, "pointRadius", 5, 200), ee = bb(t, "pointTextPadding", 5, 200), te = Bi(0), W = [], ne = [];
	for (let t of e.points) {
		if (!(t.x >= 0 && t.x <= 1 && t.y >= 0 && t.y <= 1)) continue;
		let n = e.classes.get(t.className), r = Math.min(t.radius ?? n?.radius ?? U, 2e3), i = t.color ?? n?.color, o = t.strokeColor ?? n?.strokeColor, s = t.strokeWidth ?? n?.strokeWidth, c = [];
		i && c.push("fill:" + xb(i)), s && (o && c.push("stroke:" + xb(o)), c.push("stroke-width:" + s));
		let l = M + t.x * P, u = N + (1 - t.y) * F;
		W.push({
			cx: l,
			cy: u,
			reach: r + (s ? Math.min(parseInt(s), 400) / 2 : 0),
			text: m(t.text, a, 200)
		}), ne.push(`<circle class="pele-point${Ri(t.className)}" data-id="${Y(t.text.text)}" cx="${X(l)}" cy="${X(u)}" r="${X(r)}"${s && !o ? ` stroke="${te}"` : ""}${Ii(c).shape}/>`);
	}
	let re = W.length <= vb;
	if (re) for (let { cx: e, cy: t, reach: n } of W) R.push(e - n, t - n, e + n, t + n);
	let G = "";
	for (let { cx: e, cy: t, reach: n, text: r } of W) {
		let i = r.width / 2, a = r.size * .6 + (r.height - r.lineHeight) / 2, o = n + ee, s = Math.min(o, Math.max(0, (I - r.width) / 2)), c = 8 + 4 * (e < M + P / 2 ? t < N + F / 2 ? 1 : 2 : t < N + F / 2 ? 0 : 3), l = Math.max(t + o, R[c + 3] + ee) + a, u = [
			e,
			t + o + a,
			e,
			t - o - a,
			e + o + i,
			t,
			e - o - i,
			t,
			e,
			l
		], d = e, f = u[1], p = !1;
		for (let e = 0; e < 20; e += 2) {
			let t = e % 10, n = t === 8 ? s : 0, o = (t < 4 || t === 8) && r.width < P ? Math.min(Math.max(u[t], M + i + n), M + P - i - n) : u[t], c = u[t + 1];
			if (o - i < M || o + i > M + P || c - a < N || c + a > N + F) continue;
			let l = !re || z(e < 10 ? 0 : 8, o - i, c - a, o + i, c + a);
			if ((!p || l) && (d = o, f = c, p = !0), l) break;
		}
		re && R.push(d - i, f - a, d + i, f + a), G += Z(r, d, f, " class=\"pele-label\"");
	}
	return {
		svg: Ui("quadrantChart", c, l, r, n, e, Z(h, c / 2, g / 2 + h.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + `<g class="pele-quadrants" fill="var(--_s)" stroke="var(--_b)">${V}</g>` + (H ? `<g class="pele-axis-labels" font-size="${i}" fill="var(--_m)">${H}</g>` : "") + (W.length > 0 ? `<g class="pele-points" fill="${te}">${ne.reverse().join("")}</g><g class="pele-point-labels" font-size="${a}">${G}</g>` : "")),
		width: c,
		height: l,
		links: []
	};
}
var Cb = {
	type: "quadrantChart",
	parse(e, t, n) {
		let r = new rb();
		return r.title = n, gb(e, r), r;
	},
	render: Sb
}, wb = 32;
function Tb(e) {
	return new n(e, "semantic", { type: "radar" });
}
function Eb(e, t) {
	let n = e.axes.map((e) => ({
		name: e.name,
		label: e.label ?? e.name
	})), r = e.curves.map((e) => {
		let t;
		if (e.entries[0].axis === void 0) t = e.entries.map((e) => e.value);
		else {
			if (n.length === 0) throw Tb("Axes must be populated before curves for reference entries");
			let r = /* @__PURE__ */ new Map();
			for (let t of e.entries) t.axis !== void 0 && !r.has(t.axis.$refText) && r.set(t.axis.$refText, t.value);
			t = n.map((e) => {
				let t = r.get(e.name);
				if (t === void 0) throw Tb("Missing entry for axis " + e.label);
				return t;
			});
		}
		return {
			name: e.name,
			label: e.label ?? e.name,
			entries: t
		};
	}), i = {
		showLegend: !0,
		ticks: 5,
		max: null,
		min: 0,
		graticule: "circle"
	};
	for (let t of e.options) t.name === "showLegend" ? i.showLegend = t.value : t.name === "graticule" ? i.graticule = t.value : i[t.name] = t.value;
	return i.ticks > wb && (i.ticks = wb), {
		type: "radar",
		title: e.title || t,
		accTitle: e.accTitle ? e.accTitle.replace(/^\s+/g, "") : void 0,
		accDescr: e.accDescr ? e.accDescr.replace(/\n\s+/g, "\n") : void 0,
		axes: n,
		curves: r,
		options: i
	};
}
var Db = 0, Ob = 0;
function kb(e, t) {
	let n = t;
	for (let t = e.charCodeAt(n); t >= 48 && t <= 57; t = e.charCodeAt(n)) n++;
	return n;
}
function Ab(e, t) {
	(t < Db || t >= Ob) && (Db = t, Ob = kb(e, t));
	let n = Ob;
	if (n === t) return -1;
	let r = e.charCodeAt(n) === 46;
	if (r) {
		let t = kb(e, n + 1), r = t - n - 1;
		if (r > 0 && e.charCodeAt(t) !== 46) return t;
		if (r > 1) return t - 1;
	}
	return e.charCodeAt(t) === 48 ? t + 1 : r ? n - 1 > t ? n - 1 : -1 : n;
}
var jb = zo.pattern, Mb = /[\t ]*accDescr\s*{/y, Nb = -2;
function Pb(e, t) {
	return Mb.lastIndex = t, Mb.test(e) && (Nb === -2 && (Nb = e.lastIndexOf("}")), Mb.lastIndex > Nb) ? -1 : (jb.lastIndex = t, jb.test(e) ? jb.lastIndex : -1);
}
var Fb = {
	name: "ID",
	pattern: /[\w]([-\w]*\w)?/y
}, Ib = (e) => ({
	name: e,
	pattern: e,
	longer: [Fb]
}), Lb = (e) => ({
	name: e,
	pattern: e
}), Rb = [
	Lb("radar-beta:"),
	{
		...Jo("radar-beta"),
		longer: [Fb]
	},
	Ib("showLegend"),
	Ib("graticule"),
	Ib("curve"),
	Ib("ticks"),
	Ib("axis"),
	Ib("max"),
	Ib("min"),
	Lb(":"),
	Lb(","),
	Lb("["),
	Lb("]"),
	Lb("{"),
	Lb("}"),
	{
		name: "GRATICULE",
		pattern: /circle|polygon/y
	},
	{
		name: "BOOLEAN",
		pattern: /true|false/y
	},
	{
		...zo,
		match: Pb
	},
	Bo,
	Vo,
	{
		name: "NUMBER",
		pattern: /(?:[0-9]+\.[0-9]+(?!\.))|(?:0|[1-9][0-9]*(?!\.))/y,
		match: Ab
	},
	Ho,
	Fb,
	Uo,
	Wo,
	Go,
	Ko,
	qo
];
function zb(e) {
	return Db = Ob = 0, Nb = -2, Ro(e, Rb, "radar");
}
function Bb(e) {
	let t = new is(zb(e), Rb, "radar"), n = {
		$type: "Radar",
		axes: [],
		curves: [],
		options: []
	}, r = () => {
		for (; t.kind === 23;) t.i++;
	}, i = () => {
		t.kind !== -1 && (t.kind !== 23 && t.fail("a line break or the end of input"), r());
	}, a = () => {
		if (!t.accept(11)) return;
		let e = rs(t.expect(21));
		return t.expect(12), e;
	}, o = (e) => {
		if (!e) return {
			$type: "Entry",
			value: Number(t.expect(20))
		};
		let n = { $refText: t.expect(22) };
		return t.accept(9), {
			$type: "Entry",
			axis: n,
			value: Number(t.expect(20))
		};
	}, s = () => {
		let e = t.expect(22), n = a(), i = {
			$type: "Curve",
			name: e,
			entries: []
		};
		n !== void 0 && (i.label = n), t.expect(13), r(), t.kind !== 20 && t.kind !== 22 && t.fail("a number or an axis name");
		let s = t.kind === 22;
		for (i.entries.push(o(s)); t.accept(10);) r(), i.entries.push(o(s));
		return r(), t.expect(14), i;
	}, c = () => {
		let e = {
			$type: "Axis",
			name: t.expect(22)
		}, n = a();
		return n !== void 0 && (e.label = n), e;
	}, l = () => {
		let e = t.kind, n = t.take(), r;
		return r = e === 2 ? t.expect(16) === "true" : e === 3 ? t.expect(15) : Number(t.expect(20)), {
			$type: "Option",
			name: n,
			value: r
		};
	}, u = () => t.kind === 2 || t.kind === 5 || t.kind === 7 || t.kind === 8 || t.kind === 3;
	for (r(), t.accept(0) || (t.expect(1), t.accept(9)), r(); t.kind !== -1;) switch (t.kind) {
		case 23:
			t.i++;
			break;
		case 17:
			n.accDescr = ts(t.take()), i();
			break;
		case 18:
			n.accTitle = es(t.take()), i();
			break;
		case 19:
			n.title = $o(t.take()), i();
			break;
		case 6:
			t.i++;
			do
				n.axes.push(c());
			while (t.accept(10));
			break;
		case 4:
			t.i++;
			do
				n.curves.push(s());
			while (t.accept(10));
			break;
		default: for (u() || t.fail("an axis, a curve, an option, a title, or a line break"), n.options.push(l()); t.accept(10);) u() || t.fail("an option"), n.options.push(l());
	}
	return n;
}
var Vb = 12, Hb = 26, Ub = 24;
function Wb(e, t, n, r, i) {
	let a = e.radar?.[t];
	return typeof a == "number" && a >= r ? Math.min(a, i) : n;
}
function Gb(e, t, n, r) {
	return r * (Math.min(Math.max(e, t), n) - t) / (n - t);
}
function Kb(e, t) {
	let n = e.length, r = `M${X(e[0].x)},${X(e[0].y)}`;
	for (let i = 0; i < n; i++) {
		let a = e[(i - 1 + n) % n], o = e[i], s = e[(i + 1) % n], c = e[(i + 2) % n];
		r += ` C${X(o.x + (s.x - a.x) * t)},${X(o.y + (s.y - a.y) * t)} ${X(s.x - (c.x - o.x) * t)},${X(s.y - (c.y - o.y) * t)} ${X(s.x)},${X(s.y)}`;
	}
	return r + " Z";
}
function qb(e) {
	let t = "";
	for (let n of e) t += (t ? " " : "") + X(n.x) + "," + X(n.y);
	return t;
}
function Jb(e, t, n) {
	let r = Wb(t, "width", 320, 1, 4e3);
	return to(n, r, 160, (i, a) => Yb(e, t, n, i, Wb(t, "height", 320, 1, 4e3) * i / r, a));
}
function Yb(e, t, n, r, i, a) {
	let o = n.fontSize ?? 16, s = Math.round(o * .875), c = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), l = n.padding ?? 8, u = Wb(t, "axisScaleFactor", 1, 0, 10), d = Wb(t, "axisLabelFactor", 1.05, 0, 10), f = Wb(t, "curveTension", .17, 0, 1), p = Math.min(r, i) / 2, { axes: m, curves: h } = e, { ticks: g, graticule: _, min: v } = e.options, y = m.length, b = m.map((e, t) => {
		let n = 2 * Math.PI * t / y - Math.PI / 2;
		return {
			x: Math.cos(n),
			y: Math.sin(n)
		};
	}), x = e.options.max;
	if (x === null) {
		x = -1 / 0;
		for (let e of h) for (let t of e.entries) t > x && (x = t);
	}
	let S = -r / 2 - Wb(t, "marginLeft", 16, 0, 2e3), C = r / 2 + Wb(t, "marginRight", 16, 0, 2e3), w = -i / 2 - Wb(t, "marginTop", 16, 0, 2e3), T = i / 2 + Wb(t, "marginBottom", 16, 0, 2e3), E = "";
	for (let e = 0; e < g; e++) {
		let t = Math.min(p, p * (e + 1) / g);
		E += _ === "circle" ? `<circle r="${X(t)}"/>` : `<polygon points="${qb(b.map((e) => ({
			x: e.x * t,
			y: e.y * t
		})))}"/>`;
	}
	let D = "", O = "";
	b.forEach((e, t) => {
		let n = p * u;
		D += `M0,0L${X(e.x * n)},${X(e.y * n)}`;
		let r = Q(m[t].label, !1, c, s, 4e3), i = p * d + 6, a = e.x * i + (e.x > .01 ? r.width / 2 : e.x < -.01 ? -r.width / 2 : 0), o = e.y * i + (e.y > .01 ? r.height / 2 : e.y < -.01 ? -r.height / 2 : 0);
		O += `<g class="pele-axis-label" data-id="${Y(m[t].name)}">${Z(r, a, o, "")}</g>`, S = Math.min(S, a - r.width / 2), C = Math.max(C, a + r.width / 2), w = Math.min(w, o - r.height / 2), T = Math.max(T, o + r.height / 2);
	});
	let k = "";
	h.forEach((e, t) => {
		if (e.entries.length !== y) return;
		let n = e.entries.map((e, t) => {
			let n = Gb(e, v, x, p), r = Number.isFinite(n) ? n : 0;
			return {
				x: b[t].x * r,
				y: b[t].y * r
			};
		}), r = Bi(t), i = ` class="pele-curve" data-id="${Y(e.name)}" fill="${r}" stroke="${r}"`;
		k += _ === "circle" ? `<path${i} d="${Kb(n, f)}"/>` : `<polygon${i} points="${qb(n)}"/>`;
	});
	let A = e.options.showLegend ? h.map((e) => Q(e.label, !1, c, s, 4e3)) : [], j = 0;
	for (let e of A) j = Math.max(j, e.width);
	let M = A.length * Hb, N = a ? -(Vb + 8 + j) / 2 : C + Ub, P = a ? T + Ub / 2 : -M / 2;
	A.length > 0 && a ? (S = Math.min(S, N), C = Math.max(C, -N), T = P + M) : A.length > 0 && (C = N + Vb + 8 + j, w = Math.min(w, -M / 2), T = Math.max(T, M / 2));
	let F = "";
	A.forEach((e, t) => {
		let n = P + t * Hb + Hb / 2, r = Bi(t);
		F += `<g class="pele-legend-item" data-id="${Y(h[t].name)}"><rect x="${X(N)}" y="${X(n - Vb / 2)}" width="${Vb}" height="${Vb}" rx="2" fill="${r}" fill-opacity="0.4" stroke="${r}"/>` + Z(e, N + Vb + 8 + e.width / 2, n, "") + "</g>";
	});
	let I = Q(e.title, !1, c, o, no(n), 1), L = I.height > 0 ? I.height + 8 : 0, R = Math.max(C - S, I.width), z = Math.ceil(R + 2 * l), B = Math.ceil(T - w + L + 2 * l), V = `translate(${X(l + (R - (C - S)) / 2 - S)},${X(l + L - w)})`;
	return {
		svg: Ui("radar", z, B, o, n, e, Z(I, z / 2, l + I.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + `<g transform="${V}">` + (E ? `<g class="pele-graticule" fill="none" stroke="var(--_a)">${E}</g>` : "") + (D ? `<path class="pele-axes" d="${D}" fill="none" stroke="var(--_b)"/>` : "") + (k ? `<g class="pele-curves" fill-opacity="0.2" stroke-width="1.5" stroke-linejoin="round">${k}</g>` : "") + (O ? `<g class="pele-axis-labels" font-size="${s}">${O}</g>` : "") + (F ? `<g class="pele-legend" font-size="${s}">${F}</g>` : "") + "</g>"),
		width: z,
		height: B,
		links: []
	};
}
var Xb = {
	type: "radar",
	parse: (e, t, n) => Eb(Bb(e), n),
	render: Jb
};
function Zb(e) {
	return e === 32 || e >= 9 && e <= 13 || e > 127 && /\s/.test(String.fromCharCode(e));
}
function Qb() {
	let e = 1 / 0;
	return (t, n) => {
		if (!t.startsWith("accDescr", n)) return -1;
		let r = t.length, i = n + 8;
		for (; i < r && (t.charCodeAt(i) === 32 || t.charCodeAt(i) === 9);) i++;
		if (t.charCodeAt(i) === 58) {
			for (i++; i < r; i++) {
				let e = t.charCodeAt(i);
				if (e === 10 || e === 13 || e === 37 && t.charCodeAt(i + 1) === 37) break;
			}
			return i;
		}
		for (; i < r && Zb(t.charCodeAt(i));) i++;
		if (t.charCodeAt(i) !== 123 || i >= e) return -1;
		let a = t.indexOf("}", i + 1);
		return a === -1 && (e = i), a + 1 || -1;
	};
}
var $b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", ex = {
	name: "TITLE",
	pattern: /title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/y,
	first: "t"
}, tx = {
	name: "ACC_TITLE",
	pattern: /accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/y,
	first: "a"
}, nx = {
	name: "ACC_DESCR",
	pattern: /accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/y,
	first: "a",
	scanner: Qb
};
function rx(e, t) {
	return {
		name: e,
		pattern: e,
		longer: t
	};
}
function ix(e, t) {
	return {
		...Jo(e),
		longer: [t]
	};
}
function ax(e) {
	return {
		name: e,
		pattern: /[A-Z_a-z][\w-]*/y,
		first: $b + "_"
	};
}
function ox(e) {
	return {
		name: e,
		pattern: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/y,
		first: "\"'"
	};
}
function sx(e) {
	return [
		{
			name: e + "_WHITESPACE",
			pattern: /[\t \r\n]+/y,
			hidden: !0,
			first: "	 \r\n"
		},
		{
			...Go,
			name: e + "_YAML",
			first: "-"
		},
		{
			...Ko,
			name: e + "_DIRECTIVE",
			first: "	 %"
		},
		{
			...qo,
			name: e + "_SINGLE_LINE_COMMENT",
			first: "	 %"
		}
	];
}
function cx(e) {
	if (!e.includes("\\")) return e.slice(1, -1);
	let t = e.length - 1, n = "";
	for (let r = 1; r < t; r++) {
		let i = e[r];
		i === "\\" && r + 1 < t ? (i = e[++r], n += i === "n" ? "\n" : i === "r" ? "\r" : i === "t" ? "	" : i) : n += i;
	}
	return n;
}
function lx(e, t, n, r, i, a) {
	let o = new is(Ro(e, t, "railroad"), t, "railroad"), s = {
		$type: n,
		rules: []
	};
	for (o.expect(0);;) {
		let e = o.kind;
		if (e === r) {
			let e = $o(o.take()), t = e[0];
			s.title = (t === "\"" || t === "'") && e.endsWith(t) ? i(e) : e;
		} else if (e === r + 1) s.accTitle = es(o.take());
		else if (e === r + 2) s.accDescr = ts(o.take());
		else break;
	}
	for (; o.kind !== -1;) s.rules.push(a(o));
	return s;
}
var ux = [];
function dx(e) {
	let t = e, n = t.element ?? t.primary ?? t.suffix, r = t.alternatives ?? t.elements ?? (n ? [n] : ux);
	if (t.base) {
		r = [t.base];
		for (let e of t.postfixes) e.except && r.push(e.except);
	}
	return r;
}
var fx = (e) => ({
	type: "terminal",
	value: e
}), px = (e) => ({
	type: "nonterminal",
	name: e
}), mx = (e) => ({
	type: "special",
	text: e
}), hx = (e) => ({
	type: "optional",
	element: e
}), gx = (e, t, n = 1 / 0) => ({
	type: "repetition",
	element: e,
	min: t,
	max: n
});
function _x(e) {
	return e.length === 1 ? e[0] : {
		type: "sequence",
		elements: e
	};
}
function vx(e) {
	return e.length === 1 ? e[0] : {
		type: "choice",
		alternatives: e
	};
}
function yx(e, t) {
	return e.rules.map((e) => ({
		name: e.name,
		definition: bx(e.definition, dx, t)
	}));
}
function bx(e, t, n) {
	let r = [e], i = [t(e)], a = [[]];
	for (;;) {
		let e = r.length - 1, o = a[e];
		if (o.length < i[e].length) {
			let n = i[e][o.length];
			r.push(n), i.push(t(n)), a.push([]);
		} else {
			let t = n(r[e], o);
			if (e === 0) return t;
			r.pop(), i.pop(), a.pop(), a[e - 1].push(t);
		}
	}
}
var xx = "0123456789", Sx = {
	name: "ABNF_RULENAME",
	pattern: /[A-Za-z][A-Za-z0-9-]*/y,
	first: $b
}, Cx = {
	name: "ABNF_COMMENT",
	pattern: /;[^\n\r]*/y,
	hidden: !0,
	first: ";"
}, wx = [
	ix("railroad-abnf-beta", Sx),
	rx("="),
	rx(";", [Cx]),
	rx("/"),
	rx("("),
	rx(")"),
	rx("["),
	rx("]"),
	ex,
	tx,
	nx,
	Sx,
	{
		name: "ABNF_STRING",
		pattern: /"[^"]*"/y,
		first: "\""
	},
	{
		name: "ABNF_NUMVAL",
		pattern: /%[xXdDbB][0-9A-Fa-f]+(?:-[0-9A-Fa-f]+|\.[0-9A-Fa-f]+)*/y,
		first: "%"
	},
	{
		name: "ABNF_REPEAT",
		pattern: /[0-9]*\*[0-9]*/y,
		first: xx + "*"
	},
	{
		name: "ABNF_EXACT_REPEAT",
		pattern: /[0-9]+/y,
		first: xx
	},
	...sx("ABNF"),
	Cx
];
function Tx(e, t, n, r) {
	let i = {
		$type: "AbnfConcatenation",
		elements: []
	};
	return t.alternatives.push(i), {
		alternation: t,
		concatenation: i,
		node: e,
		close: n,
		repeat: r
	};
}
function Ex(e) {
	let t = [], n = Tx(void 0, {
		$type: "AbnfAlternation",
		alternatives: []
	}, -2, void 0);
	for (;;) {
		let r = e.kind === 14 || e.kind === 15 ? e.take() : void 0, i, a = e.kind;
		switch (a) {
			case 12:
				i = {
					$type: "AbnfStringLiteral",
					value: e.take().slice(1, -1)
				};
				break;
			case 13:
				i = {
					$type: "AbnfNumVal",
					value: e.take()
				};
				break;
			case 11:
				i = {
					$type: "AbnfRuleName",
					name: e.take()
				};
				break;
			case 4:
			case 6: {
				e.i++;
				let i = {
					$type: "AbnfAlternation",
					alternatives: []
				};
				t.push(n), n = Tx({
					$type: a === 4 ? "AbnfGroup" : "AbnfOptionalGroup",
					element: i
				}, i, a + 1, r);
				continue;
			}
			default: e.fail("a string, a number, a name, or an opening bracket");
		}
		for (;;) {
			n.concatenation.elements.push(r === void 0 ? {
				$type: "AbnfElement",
				primary: i
			} : {
				$type: "AbnfElement",
				repeat: r,
				primary: i
			});
			let a = e.kind;
			if (a === n.close) e.i++, i = n.node, r = n.repeat, n = t.pop();
			else {
				if (a === 3) e.i++, n.concatenation = {
					$type: "AbnfConcatenation",
					elements: []
				}, n.alternation.alternatives.push(n.concatenation);
				else if (a !== 12 && a !== 13 && a !== 11 && a !== 4 && a !== 6 && a !== 14 && a !== 15) {
					if (t.length === 0) return n.alternation;
					e.fail(`token of type '${wx[n.close].name}'`);
				}
				break;
			}
		}
	}
}
function Dx(e) {
	return lx(e, wx, "RailroadAbnf", 8, (e) => e.slice(1, -1), (e) => {
		let t = e.expect(11);
		e.expect(1);
		let n = Ex(e);
		return e.expect(2), {
			$type: "AbnfRule",
			name: t,
			definition: n
		};
	});
}
function Ox(e, t) {
	switch (e.$type) {
		case "AbnfAlternation": return vx(t);
		case "AbnfConcatenation": return _x(t);
		case "AbnfElement": {
			let n = e.repeat;
			if (!n) return t[0];
			let r = n.indexOf("*"), i = r === -1, a = r > 0 || i ? parseInt(n, 10) : 0, o = i ? a : r < n.length - 1 ? parseInt(n.slice(r + 1), 10) : 1 / 0;
			return a === 0 && o === 1 ? hx(t[0]) : gx(t[0], a, o);
		}
		case "AbnfStringLiteral":
		case "AbnfNumVal": return fx(e.value);
		case "AbnfRuleName": return px(e.name);
		case "AbnfGroup": return t[0];
		case "AbnfOptionalGroup": return hx(t[0]);
	}
}
var kx = (e) => yx(e, Ox);
function Ax(e, t) {
	if (e.charCodeAt(t) !== 63) return -1;
	let n = !1;
	for (let r = t + 1; r < e.length; r++) {
		let t = e.charCodeAt(r);
		if (t === 63) return n ? r + 1 : -1;
		if (t === 59) return -1;
		n ||= !Zb(t);
	}
	return -1;
}
var jx = ax("EBNF_ID"), Mx = {
	name: "EBNF_SPECIAL_SEQUENCE",
	pattern: /\?(?=[^?;]*[^?\s;][^?;]*\?)[^?;]*\?/y,
	first: "?",
	scanner: () => Ax
}, Nx = sx("EBNF"), Px = {
	name: "EBNF_ISO_COMMENT",
	pattern: /\(\*[\s\S]*?\*\)/y,
	hidden: !0,
	first: "(",
	opener: /\(\*/y
}, Fx = [
	ix("railroad-ebnf-beta", jx),
	rx("::="),
	rx("="),
	rx(";"),
	rx("|"),
	rx(","),
	rx("(", [Px]),
	rx(")"),
	rx("["),
	rx("]"),
	rx("{"),
	rx("}"),
	rx("?", [Mx]),
	rx("*"),
	rx("+"),
	rx("-", [Nx[1]]),
	ex,
	tx,
	nx,
	jx,
	ox("EBNF_STRING"),
	Mx,
	...Nx,
	{
		name: "EBNF_BLOCK_COMMENT",
		pattern: /\/\*[\s\S]*?\*\//y,
		hidden: !0,
		first: "/",
		opener: /\/\*/y
	},
	Px
];
function Ix(e, t, n, r) {
	let i = {
		$type: "EbnfSequence",
		elements: []
	};
	return t.alternatives.push(i), {
		choice: t,
		sequence: i,
		term: void 0,
		node: e,
		close: n,
		except: r
	};
}
var Lx = [
	"EbnfGroup",
	"EbnfOptional",
	"EbnfRepetition"
];
function Rx(e) {
	let t = [], n = Ix(void 0, {
		$type: "EbnfChoice",
		alternatives: []
	}, -2, !1), r = !1;
	for (;;) {
		let i, a = e.kind;
		switch (a) {
			case 20:
				i = {
					$type: "EbnfTerminal",
					value: cx(e.take())
				};
				break;
			case 19:
				i = {
					$type: "EbnfNonTerminal",
					name: e.take()
				};
				break;
			case 21:
				i = {
					$type: "EbnfSpecial",
					text: e.take().slice(1, -1).trim()
				};
				break;
			case 6:
			case 8:
			case 10: {
				e.i++;
				let i = {
					$type: "EbnfChoice",
					alternatives: []
				};
				t.push(n), n = Ix({
					$type: Lx[a - 6 >> 1],
					element: i
				}, i, a + 1, r), r = !1;
				continue;
			}
			default: e.fail("a terminal, a name, or an opening bracket");
		}
		for (;;) {
			r ? (n.term.postfixes.push({
				$type: "EbnfExceptionPostfix",
				except: i
			}), r = !1) : (n.term = {
				$type: "EbnfTerm",
				base: i,
				postfixes: []
			}, n.sequence.elements.push(n.term));
			let a = n.term.postfixes;
			for (;;) {
				let t = e.kind;
				if (t === 12) a.push({
					$type: "EbnfOptionalPostfix",
					operator: e.take()
				});
				else if (t === 13) a.push({
					$type: "EbnfZeroOrMorePostfix",
					operator: e.take()
				});
				else if (t === 14) a.push({
					$type: "EbnfOneOrMorePostfix",
					operator: e.take()
				});
				else break;
			}
			let o = e.kind;
			if (o === n.close) e.i++, i = n.node, r = n.except, n = t.pop();
			else {
				if (o === 15) e.i++, r = !0;
				else if (o === 5) e.i++;
				else if (o === 4) e.i++, n.sequence = {
					$type: "EbnfSequence",
					elements: []
				}, n.choice.alternatives.push(n.sequence);
				else if (o !== 20 && o !== 19 && o !== 21 && o !== 6 && o !== 8 && o !== 10) {
					if (t.length === 0) return n.choice;
					e.fail(`token of type '${Fx[n.close].name}'`);
				}
				break;
			}
		}
	}
}
function zx(e) {
	return lx(e, Fx, "RailroadEbnf", 16, cx, (e) => {
		let t = e.expect(19);
		e.accept(2) || e.expect(1);
		let n = {
			$type: "EbnfRule",
			name: t,
			definition: Rx(e)
		};
		return e.expect(3), n;
	});
}
function Bx(e, t) {
	switch (e.$type) {
		case "EbnfChoice": return vx(t);
		case "EbnfSequence": return _x(t);
		case "EbnfTerm": {
			let n = t[0], r = 1;
			for (let i of e.postfixes) n = i.$type === "EbnfOptionalPostfix" ? hx(n) : i.$type === "EbnfExceptionPostfix" ? {
				type: "sequence",
				elements: [
					n,
					fx("-"),
					t[r++]
				]
			} : gx(n, +(i.$type === "EbnfOneOrMorePostfix"));
			return n;
		}
		case "EbnfTerminal": return fx(e.value);
		case "EbnfNonTerminal": return px(e.name);
		case "EbnfSpecial": return mx(e.text);
		case "EbnfGroup": return t[0];
		case "EbnfOptional": return hx(t[0]);
		case "EbnfRepetition": return gx(t[0], 0);
	}
}
var Vx = (e) => yx(e, Bx), Hx = ax("RR_ID"), Ux = (e) => rx(e, [Hx]), Wx = [
	ix("railroad-beta", Hx),
	Ux("nonterminal"),
	Ux("zeroOrMore"),
	Ux("oneOrMore"),
	Ux("sequence"),
	Ux("optional"),
	Ux("terminal"),
	Ux("special"),
	Ux("choice"),
	rx("="),
	rx(";"),
	rx("("),
	rx(","),
	rx(")"),
	ex,
	tx,
	nx,
	Hx,
	ox("RR_STRING"),
	...sx("RR"),
	{
		name: "RR_BLOCK_COMMENT",
		pattern: /\/\*[\s\S]*?\*\//y,
		hidden: !0,
		first: "/",
		opener: /\/\*/y
	}
];
function Gx(e) {
	e.i++, e.expect(11);
	let t = cx(e.expect(18));
	return e.expect(13), t;
}
function Kx(e) {
	return {
		$type: e,
		element: void 0
	};
}
function qx(e) {
	let t = [];
	for (;;) {
		let n;
		switch (e.kind) {
			case 6:
				n = {
					$type: "RailroadTerminalExpr",
					value: Gx(e)
				};
				break;
			case 1:
				n = {
					$type: "RailroadNonTerminalExpr",
					name: Gx(e)
				};
				break;
			case 7:
				n = {
					$type: "RailroadSpecialExpr",
					text: Gx(e)
				};
				break;
			case 4:
				n = {
					$type: "RailroadSequenceExpr",
					elements: []
				};
				break;
			case 8:
				n = {
					$type: "RailroadChoiceExpr",
					alternatives: []
				};
				break;
			case 5:
				n = Kx("RailroadOptionalExpr");
				break;
			case 3:
				n = Kx("RailroadOneOrMoreExpr");
				break;
			case 2:
				n = Kx("RailroadZeroOrMoreExpr");
				break;
			default: e.fail("an expression");
		}
		if ("elements" in n || "alternatives" in n || "element" in n) e.i++, e.expect(11), t.push(n);
		else for (;;) {
			let r = t[t.length - 1];
			if (r === void 0) return n;
			if ("element" in r) r.element = n;
			else if (("elements" in r ? r.elements : r.alternatives).push(n), e.accept(12)) break;
			e.expect(13), t.pop(), n = r;
		}
	}
}
function Jx(e) {
	return lx(e, Wx, "Railroad", 14, cx, (e) => {
		let t = e.expect(17);
		e.expect(9);
		let n = qx(e);
		return e.expect(10), {
			$type: "RailroadRule",
			name: t,
			definition: n
		};
	});
}
function Yx(e, t) {
	switch (e.$type) {
		case "RailroadTerminalExpr": return fx(e.value);
		case "RailroadNonTerminalExpr": return px(e.name);
		case "RailroadSpecialExpr": return mx(e.text);
		case "RailroadSequenceExpr": return _x(t);
		case "RailroadChoiceExpr": return vx(t);
		case "RailroadOptionalExpr": return hx(t[0]);
		default: return gx(t[0], +(e.$type === "RailroadOneOrMoreExpr"));
	}
}
var Xx = (e) => yx(e, Yx), Zx = ax("PEG_ID"), Qx = [
	ix("railroad-peg-beta", Zx),
	rx("<-"),
	rx(";"),
	rx("/"),
	rx("&"),
	rx("!"),
	rx("?"),
	rx("*"),
	rx("+"),
	rx("("),
	rx(")"),
	rx("."),
	ex,
	tx,
	nx,
	Zx,
	ox("PEG_STRING"),
	...sx("PEG"),
	{
		name: "PEG_LINE_COMMENT",
		pattern: /#[^\n\r]*/y,
		hidden: !0,
		first: "#"
	}
];
function $x(e, t, n) {
	let r = {
		$type: "PegSequence",
		elements: []
	};
	return t.alternatives.push(r), {
		choice: t,
		sequence: r,
		node: e,
		operator: n
	};
}
function eS(e) {
	let t = [], n = $x(void 0, {
		$type: "PegOrderedChoice",
		alternatives: []
	}, void 0);
	for (;;) {
		let r = e.kind === 4 || e.kind === 5 ? e.take() : void 0, i;
		switch (e.kind) {
			case 16:
				i = {
					$type: "PegLiteral",
					value: cx(e.take())
				};
				break;
			case 15:
				i = {
					$type: "PegIdentifier",
					name: e.take()
				};
				break;
			case 11:
				i = {
					$type: "PegAny",
					dot: e.take()
				};
				break;
			case 9: {
				e.i++;
				let i = {
					$type: "PegOrderedChoice",
					alternatives: []
				};
				t.push(n), n = $x({
					$type: "PegGroup",
					element: i
				}, i, r);
				continue;
			}
			default: e.fail("a literal, a name, a dot, or an opening parenthesis");
		}
		for (;;) {
			let a = {
				$type: "PegSuffix",
				primary: i
			};
			(e.kind === 6 || e.kind === 7 || e.kind === 8) && (a.operator = e.take()), n.sequence.elements.push(r === void 0 ? {
				$type: "PegPrefix",
				suffix: a
			} : {
				$type: "PegPrefix",
				operator: r,
				suffix: a
			});
			let o = e.kind;
			if (o === 10 && t.length > 0) e.i++, i = n.node, r = n.operator, n = t.pop();
			else {
				if (o === 3) e.i++, n.sequence = {
					$type: "PegSequence",
					elements: []
				}, n.choice.alternatives.push(n.sequence);
				else if (o !== 4 && o !== 5 && o !== 16 && o !== 15 && o !== 11 && o !== 9) {
					if (t.length === 0) return n.choice;
					e.fail("token of type ')'");
				}
				break;
			}
		}
	}
}
function tS(e) {
	return lx(e, Qx, "RailroadPeg", 12, cx, (e) => {
		let t = e.expect(15);
		e.expect(1);
		let n = {
			$type: "PegRule",
			name: t,
			definition: eS(e)
		};
		return e.expect(2), n;
	});
}
function nS(e) {
	switch (e.type) {
		case "terminal": return `"${e.value}"`;
		case "nonterminal": return e.name;
		case "special": return e.text;
		default: return "(...)";
	}
}
function rS(e, t) {
	let n = t[0];
	switch (e.$type) {
		case "PegOrderedChoice": return vx(t);
		case "PegSequence": return _x(t);
		case "PegPrefix": return e.operator ? mx(e.operator + nS(n)) : n;
		case "PegSuffix": return e.operator ? e.operator === "?" ? hx(n) : gx(n, +(e.operator === "+")) : n;
		case "PegLiteral": return fx(e.value);
		case "PegIdentifier": return px(e.name);
		case "PegAny": return mx(e.dot);
		case "PegGroup": return n;
	}
}
var iS = (e) => yx(e, rS), aS = class {
	type = "railroad";
	notation = "railroad";
	title;
	accTitle;
	accDescr;
	rules = [];
	byName = /* @__PURE__ */ new Map();
	setTitle(e) {
		this.title = e;
	}
	setAccTitle(e) {
		this.accTitle = e.replace(/^\s+/g, "");
	}
	setAccDescription(e) {
		this.accDescr = e.replace(/\n\s+/g, "\n");
	}
	addRule(e) {
		this.rules.push(e), this.byName.set(e.name, e);
	}
	getRule(e) {
		return this.byName.get(e);
	}
}, oS = /^\s*railroad-(ebnf-|abnf-|peg-)?beta/i;
function sS(e) {
	let t = oS.exec(e);
	if (t === null) return;
	let n = t[1]?.toLowerCase();
	return n === "ebnf-" ? "ebnf" : n === "abnf-" ? "abnf" : n === "peg-" ? "peg" : "railroad";
}
function cS(e, t) {
	switch (t) {
		case "ebnf": {
			let t = zx(e);
			return [t, Vx(t)];
		}
		case "abnf": {
			let t = Dx(e);
			return [t, kx(t)];
		}
		case "peg": {
			let t = tS(e);
			return [t, iS(t)];
		}
		default: {
			let t = Jx(e);
			return [t, Xx(t)];
		}
	}
}
function lS(e, t, n) {
	let [r, i] = cS(t, n);
	e.notation = n, r.accDescr && e.setAccDescription(r.accDescr), r.accTitle && e.setAccTitle(r.accTitle), r.title && e.setTitle(r.title);
	for (let t of i) e.addRule(t);
}
function uS(e, t) {
	let r = sS(e);
	if (r === void 0) throw new n("No railroad diagram keyword found.", "syntax", { type: "railroad" });
	let i = new aS();
	return t && (i.title = t), lS(i, e, r), i;
}
var dS = 12, fS = 6, pS = 18, mS = 12, hS = 7;
function gS(e, t, n, r) {
	let i = e.railroad?.[t];
	return typeof i == "number" && i >= 0 ? Math.min(i, r) : n;
}
var _S = /[\n\r\t]/g;
function vS(e) {
	return (e.includes("¶ß") ? p(e.replace(/&/g, "&amp;")) : e).replace(_S, (e) => e === "\n" ? "\\n" : e === "\r" ? "\\r" : "\\t");
}
function yS(e, t) {
	for (let n = t, r = e.length - 1; n < r; n++, r--) {
		let t = e[n];
		e[n] = e[r], e[r] = t;
	}
}
function bS(e) {
	return Math.ceil(e / 2) * 2;
}
function xS(e, t, n, r, i) {
	let a = i.height / 2;
	return {
		kind: e,
		width: Math.max(bS(i.measurer.width(t, i.size, r) + 2 * i.padding), i.height),
		up: a,
		down: a,
		kids: ux,
		text: t,
		id: n,
		reach: 0
	};
}
function SS(e, t) {
	if (t === 1 / 0 && e <= 1) return "";
	let n = (e) => Number.isFinite(e) ? String(e) : "∞";
	return e === t ? n(e) + "×" : t === 1 / 0 ? "≥" + n(e) + "×" : e === 0 ? "≤" + n(t) + "×" : n(e) + "–" + n(t) + "×";
}
function CS(e, t, n, r) {
	return Math.max(e + t.down + r.sep + n.up, 2 * r.arc);
}
function wS(e, t) {
	let n = Math.max(e.up + t.sep, 2 * t.arc);
	return {
		kind: 5,
		width: e.width + 4 * t.arc,
		up: n,
		down: e.down,
		kids: [e],
		text: "",
		id: "",
		reach: n
	};
}
function TS(e, t, n = 1 / 0) {
	let r = /* @__PURE__ */ new Map(), i = [[e, n]];
	for (let e = 0; n !== 1 / 0 && e < i.length; e++) {
		let [n, a] = i[e];
		r.set(n, a);
		let o = n.type === "choice" || n.type === "optional" ? 4 * t.arc : n.type === "repetition" ? (n.min === 0 ? 6 : 2) * t.arc : n.type === "sequence" ? 6 * t.arc : 0;
		for (let e of dx(n)) i.push([e, Math.max(40, a - o)]);
	}
	return bx(e, dx, (e, n) => {
		let i = r.get(e) ?? 1 / 0;
		switch (e.type) {
			case "terminal": {
				let n = vS(e.value);
				return xS(0, /^ +$/.test(n) ? "␣".repeat(n.length) : n, "", 4, t);
			}
			case "nonterminal": return xS(1, vS(e.name), e.name, 0, t);
			case "special": return xS(2, "? " + vS(e.text) + " ?", "", 2, t);
			case "sequence": {
				let e = Math.max(0, n.length - 1) * t.gap, r = 0, a = 0;
				for (let t of n) e += t.width, r = Math.max(r, t.up), a = Math.max(a, t.down);
				let o = {
					kind: 3,
					width: e,
					up: r,
					down: a,
					kids: n,
					text: "",
					id: "",
					reach: 0
				};
				if (e <= i || n.length < 2) return o;
				let s = [], c = [], l = 0, u = () => {
					let e = 0, t = 0;
					for (let n of c) e = Math.max(e, n.up), t = Math.max(t, n.down);
					s.push({
						kind: 3,
						width: l,
						up: e,
						down: t,
						kids: c,
						text: "",
						id: "",
						reach: 0
					}), c = [], l = 0;
				};
				for (let e of n) c.length && l + t.gap + e.width > Math.max(40, i - 6 * t.arc) && u(), l += (c.length ? t.gap : 0) + e.width, c.push(e);
				if (u(), s.length < 2) return o;
				let d = 0, f = 0;
				for (let e = 0; e < s.length; e++) d = Math.max(d, s[e].width), e && (f += s[e - 1].down + Math.max(t.sep, 2 * t.arc) + s[e].up);
				return {
					kind: 7,
					width: d + 6 * t.arc,
					up: s[0].up,
					down: f + s[s.length - 1].down,
					kids: s,
					text: "",
					id: "",
					reach: 0
				};
			}
			case "choice": {
				let e = 0, r = 0;
				for (let i = 0; i < n.length; i++) e = Math.max(e, n[i].width), i > 0 && (r = CS(r, n[i - 1], n[i], t));
				let i = n[n.length - 1];
				return {
					kind: 4,
					width: e + 4 * t.arc,
					up: n.length > 0 ? n[0].up : 0,
					down: i ? r + i.down : 0,
					kids: n,
					text: "",
					id: "",
					reach: 0
				};
			}
			case "optional": return wS(n[0], t);
			case "repetition": {
				let { min: r, max: i } = e, a = n[0];
				if (r === 1 && i === 1) return a;
				let o = SS(r, i), s = Math.max(a.down + t.sep, 2 * t.arc), c = o === "" ? 0 : bS(t.measurer.width(o, mS, 0)), l = {
					kind: 6,
					width: Math.max(a.width, c) + 2 * t.arc,
					up: a.up,
					down: s + (o === "" ? hS / 2 + 1 : mS + 6),
					kids: [a],
					text: o,
					id: "",
					reach: s
				};
				return r === 0 ? wS(l, t) : l;
			}
		}
	});
}
function ES(e, t, n) {
	return so(n, (r) => DS(e, t, n, r));
}
function DS(e, t, n, r) {
	let i = n.fontSize ?? 16, a = gS(t, "fontSize", 0, 200), o = a || Math.round(i * .875), s = a || i, c = gS(t, "padding", -1, 200), l = Math.round(o * 1.5), u = {
		measurer: n.measurer ?? Be(n.fontFamily, n.fontFamilyMono),
		size: o,
		padding: c < 0 ? 12 : c,
		height: bS(l + (c < 0 ? 9 : 2 * c)),
		gap: Math.min(gS(t, "horizontalSeparation", 16, 500), r ? 12 : 1 / 0),
		sep: gS(t, "verticalSeparation", 10, 500),
		arc: Math.min(gS(t, "arcRadius", 10, 200), r ? 6 : 1 / 0)
	}, d = t.railroad?.showMarkers === !1 ? 0 : gS(t, "markerRadius", 4, 50), f = gS(t, "strokeWidth", 0, 20), p = f > 0 ? ` stroke-width="${X(f)}"` : "", m = n.padding ?? 8, { arc: h } = u, g = X(h), _ = (e, t, n) => `a${g},${g} 0 0 ${e} ${t}${g},${n}${g}`, v = _(1, "", ""), y = _(0, "", ""), b = _(0, "", "-"), x = _(1, "", "-"), S = _(0, "-", ""), C = _(0, "-", "-"), w = Q(e.title, !1, u.measurer, i, r ? no(n) : 4e3, 1), T = w.height > 0 ? w.height + 16 : 0, E = Math.round(s * 1.5), D = o * .35, O = u.height / 2, k = "", A = "", j = "", M = (e, t, n) => {
		n > e && (k += `M${X(e)},${X(t)}H${X(n)}`);
	}, N = (e, t, n) => {
		let r = [e], i = [t, n];
		for (; r.length > 0;) {
			let e = r.pop(), t = i.pop(), n = i.pop(), a = e.kids, o = n + e.width;
			switch (e.kind) {
				case 3: {
					let e = o;
					for (let n = a.length - 1; n >= 0; n--) e -= a[n].width, r.push(a[n]), i.push(e, t), n > 0 && M(e - u.gap, t, e), e -= u.gap;
					break;
				}
				case 7: {
					let e = n + 2 * h, s = r.length, c = 0;
					M(n, t, e);
					for (let s = 0; s < a.length; s++) {
						let l = a[s], d = t + c;
						if (r.push(l), i.push(d, e), s + 1 < a.length) {
							let r = a[s + 1], i = c + l.down + Math.max(u.sep, 2 * h) + r.up, f = t + c + l.down + Math.max(u.sep, 2 * h) / 2;
							k += `M${X(e + l.width)},${X(d)}H${X(o - 2 * h)}V${X(f)}H${X(n + h)}V${X(t + i)}H${X(e)}`, A += `M${X(e - hS)},${X(t + i - hS / 2)}l${hS},${hS / 2}l${-hS},${hS / 2}z`, c = i;
						} else k += `M${X(e + l.width)},${X(d)}H${X(o - h)}V${X(t)}H${X(o)}`;
					}
					yS(r, s), yS(i, 2 * s);
					break;
				}
				case 4: {
					let s = e.width - 4 * h, c = n + h, l = o - h, d = r.length, f = 0;
					for (let e = 0; e < a.length; e++) {
						let d = a[e];
						e > 0 && (f = CS(f, a[e - 1], d, u));
						let p = t + f, m = n + 2 * h + (s - d.width) / 2, g = e === a.length - 1;
						e === 0 ? (M(n, t, m), M(m + d.width, t, o)) : k += (g ? `M${X(n)},${X(t)}${v}V${X(p - h)}` : `M${X(c)},${X(p - h)}`) + y + (m > c + h ? `H${X(m)}` : "") + `M${X(m + d.width)},${X(p)}` + (m > c + h ? `H${X(l - h)}` : "") + b + (g ? `V${X(t + h)}${x}` : ""), r.push(d), i.push(p, m);
					}
					yS(r, d), yS(i, 2 * d);
					break;
				}
				case 5: {
					let s = a[0], c = n + 2 * h;
					M(n, t, c), M(c + s.width, t, o), k += `M${X(n)},${X(t)}${b}V${X(t - e.reach + h)}${x}H${X(o - 2 * h)}${v}V${X(t - h)}${y}`, r.push(s), i.push(c, t);
					break;
				}
				case 6: {
					let s = a[0], c = n + (e.width - s.width) / 2, l = t + e.reach, u = n + e.width / 2;
					M(n, t, c), M(c + s.width, t, o), k += `M${X(n + h)},${X(t)}${S}V${X(l - h)}${y}H${X(o - h)}${b}V${X(t + h)}${C}`, A += `M${X(u - hS / 2)},${X(l)}l${hS},${-hS / 2}v${hS}z`, e.text !== "" && (j += `<text class="pele-edge-label pele-count" x="${X(u)}" y="${X(l + mS + 3)}" font-size="${mS}" fill="var(--_m)">${nt(e.text)}</text>`), r.push(s), i.push(c, t);
					break;
				}
				default: {
					let r = e.text, i = r.startsWith(" ") || r.endsWith(" ") || r.includes("  ") ? " xml:space=\"preserve\"" : "", a = `<rect x="${X(n)}" y="${X(t - O)}" width="${X(e.width)}" height="${X(u.height)}"`, o = `<text x="${X(n + e.width / 2)}" y="${X(t + D)}"${i}`;
					e.kind === 0 ? j += `<g class="pele-node pele-terminal">${a} rx="${X(O)}" fill="var(--_s)" stroke="var(--_b)"${p}/>${o} font-family="${Ci}">${nt(r)}</text></g>` : e.kind === 1 ? j += `<g class="pele-node pele-nonterminal" data-id="${Y(e.id)}">${a} fill="var(--_bg)" stroke="var(--_b)"${p}${Ti}/>${o}>${nt(r)}</text></g>` : j += `<g class="pele-node pele-special">${a} fill="var(--_bg)" stroke="var(--_b)" stroke-dasharray="4 3"${p}${Ti}/>${o} font-style="italic"><tspan fill="var(--_m)">? </tspan>${nt(r.slice(2, -2))}<tspan fill="var(--_m)"> ?</tspan></text></g>`;
				}
			}
		}
	}, P = "", F = w.width, I = m + T, L = m + w.height;
	for (let t of e.rules) {
		let e = TS(t.definition, u, r ? Math.max(80, (n.maxWidth ?? 320) - 2 * m - 4 * d - 2 * dS - 1) : 1 / 0), i = vS(t.name), a = I + E + fS + e.up, o = m + 2 * d, c = o + dS, l = c + e.width + dS;
		k = "", A = "", j = "", M(o, a, c), M(c + e.width, a, l), N(e, c, a);
		let f = d > 0 ? `<circle class="pele-marker pele-start" cx="${X(m + d)}" cy="${X(a)}" r="${X(d)}" fill="var(--_l)"/><circle class="pele-marker pele-end" cx="${X(l + d)}" cy="${X(a)}" r="${X(d)}" fill="var(--_l)"/>` : "";
		P += `<g class="pele-rule" data-id="${Y(t.name)}"><text class="pele-rule-name" x="${X(m)}" y="${X(I + E / 2 + s * .35)}" font-size="${X(s)}" font-weight="var(--_hw)" text-anchor="start">${nt(i)}</text><path class="pele-edge pele-track" d="${k}" fill="none" stroke="var(--_l)"${p}/>` + (A ? `<path class="pele-marker" d="${A}" fill="var(--_l)"/>` : "") + f + j + "</g>", F = Math.max(F, l + 2 * d - m, u.measurer.width(i, s, 1)), L = a + e.down, I = L + u.sep + pS;
	}
	let R = Math.ceil(F + 2 * m), z = Math.ceil(L + m);
	return {
		svg: Ui("railroad", R, z, i, n, e, Z(w, R / 2, m + w.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + (P ? `<g class="pele-rules" transform="translate(0.5,0.5)" font-size="${X(o)}" text-anchor="middle">${P}</g>` : "")),
		width: R,
		height: z,
		links: []
	};
}
var OS = {
	type: "railroad",
	parse: (e, t, n) => uS(e, n),
	render: ES
}, kS = {
	REQUIREMENT: "Requirement",
	FUNCTIONAL_REQUIREMENT: "Functional Requirement",
	INTERFACE_REQUIREMENT: "Interface Requirement",
	PERFORMANCE_REQUIREMENT: "Performance Requirement",
	PHYSICAL_REQUIREMENT: "Physical Requirement",
	DESIGN_CONSTRAINT: "Design Constraint"
}, AS = {
	LOW_RISK: "Low",
	MED_RISK: "Medium",
	HIGH_RISK: "High"
}, jS = {
	VERIFY_ANALYSIS: "Analysis",
	VERIFY_DEMONSTRATION: "Demonstration",
	VERIFY_INSPECTION: "Inspection",
	VERIFY_TEST: "Test"
}, MS = {
	CONTAINS: "contains",
	COPIES: "copies",
	DERIVES: "derives",
	SATISFIES: "satisfies",
	VERIFIES: "verifies",
	REFINES: "refines",
	TRACES: "traces"
}, NS = 1e6, PS = class {
	type = "requirement";
	direction = "TB";
	requirements = /* @__PURE__ */ new Map();
	elements = /* @__PURE__ */ new Map();
	relations = [];
	classes = /* @__PURE__ */ new Map();
	title;
	accTitle;
	accDescr;
	newId = "";
	newText = "";
	newRisk = "";
	newVerifyMethod = "";
	newElementType = "";
	newDocRef = "";
	styleCopies = 0;
	copy(e, t) {
		if (this.styleCopies += t.length, this.styleCopies > NS) throw new n("Requirement diagram applies too many style declarations.", "limit", { type: "requirement" });
		for (let n of t) e.push(n);
	}
	setDirection(e) {
		this.direction = e;
	}
	addRequirement(e, t) {
		let n = this.requirements.get(e);
		return n === void 0 && (n = {
			name: e,
			type: t,
			requirementId: this.newId,
			text: this.newText,
			risk: this.newRisk,
			verifyMethod: this.newVerifyMethod,
			cssStyles: [],
			classes: ["default"]
		}, this.requirements.set(e, n)), this.newId = this.newText = this.newRisk = this.newVerifyMethod = "", n;
	}
	setNewReqId(e) {
		this.newId = e;
	}
	setNewReqText(e) {
		this.newText = e;
	}
	setNewReqRisk(e) {
		this.newRisk = e;
	}
	setNewReqVerifyMethod(e) {
		this.newVerifyMethod = e;
	}
	addElement(e) {
		let t = this.elements.get(e);
		return t === void 0 && (t = {
			name: e,
			type: this.newElementType,
			docRef: this.newDocRef,
			cssStyles: [],
			classes: ["default"]
		}, this.elements.set(e, t)), this.newElementType = this.newDocRef = "", t;
	}
	setNewElementType(e) {
		this.newElementType = e;
	}
	setNewElementDocRef(e) {
		this.newDocRef = e;
	}
	addRelationship(e, t, n) {
		this.relations.push({
			type: e,
			src: t,
			dst: n
		});
	}
	node(e) {
		return this.requirements.get(e) ?? this.elements.get(e);
	}
	setCssStyle(e, t) {
		for (let n of e) {
			let e = this.node(n);
			if (!t || !e) return;
			for (let n of t) this.copy(e.cssStyles, n.includes(",") ? n.split(",") : [n]);
		}
	}
	setClass(e, t) {
		for (let n of e) {
			let e = this.node(n);
			if (e) for (let n of t) {
				e.classes.push(n);
				let t = this.classes.get(n)?.styles;
				t && this.copy(e.cssStyles, t);
			}
		}
	}
	defineClass(e, t) {
		for (let n of e) {
			let e = this.classes.get(n);
			e === void 0 && (e = {
				id: n,
				styles: [],
				textStyles: []
			}, this.classes.set(n, e));
			for (let n of t) n.includes("color") && e.textStyles.push(n.replace("fill", "bgFill")), e.styles.push(n);
			let r = t.flatMap((e) => e.split(","));
			for (let e of this.requirements.values()) e.classes.includes(n) && this.copy(e.cssStyles, r);
			for (let e of this.elements.values()) e.classes.includes(n) && this.copy(e.cssStyles, r);
		}
	}
	setAccTitle(e) {
		this.accTitle = e.replace(/^\s+/g, "");
	}
	setAccDescription(e) {
		this.accDescr = e.replace(/\n\s+/g, "\n");
	}
}, FS = /* @__PURE__ */ "$end.INVALID.title.acc_title.acc_title_value.acc_descr.acc_descr_value.acc_descr_multiline_value.direction_tb.direction_bt.direction_rl.direction_lr.NEWLINE.EOF.RD.STRUCT_START.STRUCT_STOP.STYLE_SEPARATOR.COLONSEP.ID.TEXT.RISK.VERIFYMTHD.REQUIREMENT.FUNCTIONAL_REQUIREMENT.INTERFACE_REQUIREMENT.PERFORMANCE_REQUIREMENT.PHYSICAL_REQUIREMENT.DESIGN_CONSTRAINT.LOW_RISK.MED_RISK.HIGH_RISK.VERIFY_ANALYSIS.VERIFY_DEMONSTRATION.VERIFY_INSPECTION.VERIFY_TEST.ELEMENT.CONTAINS.COPIES.DERIVES.SATISFIES.VERIFIES.REFINES.TRACES.TYPE.DOCREF.STYLE.CLASSDEF.CLASS.ALPHA.COLON.SEMICOLON.PERCENT.MINUS.BRKT.END_ARROW_L.END_ARROW_R.LINE.qString.unqString.COMMA".split("."), IS = /* @__PURE__ */ new Map([
	["requirementdiagram", 14],
	["id", 19],
	["text", 20],
	["risk", 21],
	["verifymethod", 22],
	["requirement", 23],
	["functionalrequirement", 24],
	["interfacerequirement", 25],
	["performancerequirement", 26],
	["physicalrequirement", 27],
	["designconstraint", 28],
	["low", 29],
	["medium", 30],
	["high", 31],
	["analysis", 32],
	["demonstration", 33],
	["inspection", 34],
	["test", 35],
	["element", 36],
	["contains", 37],
	["copies", 38],
	["derives", 39],
	["satisfies", 40],
	["verifies", 41],
	["refines", 42],
	["traces", 43],
	["type", 44],
	["docref", 45],
	["style", 46],
	["classdef", 47],
	["class", 48]
]), LS = /accTitle\s*:\s*/iy, RS = /accDescr\s*:\s*/iy, zS = /accDescr\s*\{\s*/iy, BS = /direction\s+(?:(TB)|(BT)|(RL)|LR)/gi, VS = /[\n\r\u2028\u2029]/g, HS = 22, US = /* @__PURE__ */ new Uint8Array(128);
for (let e of ":,\r\n{<>-=") US[e.charCodeAt(0)] = 1;
function WS(e) {
	let t = e.length, n = [], r = [], i = [], a = [], o = 0, s = 0, c = [
		[],
		[],
		[],
		[]
	], l = [
		[],
		[],
		[],
		[]
	], u = [
		0,
		0,
		0,
		0
	], d = !1, f = -1;
	BS.lastIndex = 0;
	for (let t = BS.exec(e); t !== null; t = BS.exec(e)) {
		let e = t[1] === void 0 ? t[2] === void 0 ? t[3] === void 0 ? 3 : 2 : 1 : 0;
		c[e].push(t.index), l[e].push(BS.lastIndex), d = !0;
	}
	let p = (t, a, o) => {
		n.push(t), r.push(e.slice(a, o)), i.push(a), s = o;
	}, m = (e) => {
		a.push(o), o = e;
	}, h = () => {
		a.length > 0 && (o = a.pop());
	}, g = (t, n) => (t.lastIndex = n, t.test(e) ? t.lastIndex : -1), _ = (n) => {
		let r = e.indexOf("\n", n);
		return r === -1 ? t : r;
	}, v = () => {
		if (f < s) {
			VS.lastIndex = s, f = VS.test(e) ? VS.lastIndex - 1 : t;
			for (let e = 0; e < 4; e++) {
				let t = c[e], n = u[e];
				for (; n < t.length && t[n] <= f;) n++;
				u[e] = n;
			}
		}
		for (let e = 0; e < 4; e++) {
			let t = u[e] - 1;
			if (t >= 0 && c[e][t] >= s) return p(8 + e, s, _(l[e][t])), !0;
		}
		return !1;
	}, y = (a) => {
		let o = a | 32;
		if (o === 116 && e.slice(s + 1, s + 5).toLowerCase() === "itle" && G(e.charCodeAt(s + 5))) {
			let n = s + 6;
			for (; n < t;) {
				let t = e.charCodeAt(n);
				if (t === 35 || t === 10 || t === 59) break;
				n++;
			}
			if (n > s + 6) return p(2, s, n), !0;
		}
		if (o === 97 && (e.charCodeAt(s + 1) | 32) == 99 && (e.charCodeAt(s + 2) | 32) == 99) {
			let e;
			if ((e = g(LS, s)) >= 0) return m(3), p(3, s, e), !0;
			if ((e = g(RS, s)) >= 0) return m(4), p(5, s, e), !0;
			if ((e = g(zS, s)) >= 0) return m(5), s = e, !0;
		}
		if (d && !ie(a) && v()) return !0;
		if (a === 10 || a === 13 && e.charCodeAt(s + 1) === 10) {
			let n = s;
			for (; n < t;) {
				let t = e.charCodeAt(n);
				if (t === 10) n++;
				else if (t === 13 && e.charCodeAt(n + 1) === 10) n += 2;
				else break;
			}
			return p(12, s, n), !0;
		}
		if (G(a)) {
			for (s++; s < t && G(e.charCodeAt(s));) s++;
			return !0;
		}
		if (a === 35 || a === 37) return s = _(s), !0;
		if (J(a)) {
			let a = s + 1;
			for (; a < t && J(e.charCodeAt(a));) a++;
			if (a - s <= HS) {
				let t = IS.get(e.slice(s, a).toLowerCase());
				if (t !== void 0) return (t === 46 || t === 47 || t === 48) && m(2), p(t, s, a), !0;
			}
			for (; a < t;) {
				let t = e.charCodeAt(a);
				if (t < 128 && US[t] === 1) break;
				a++;
			}
			return n.push(59), r.push(e.slice(s, a).trim()), i.push(s), s = a, !0;
		}
		switch (a) {
			case 123: return p(15, s, s + 1), !0;
			case 125: return p(16, s, s + 1), !0;
			case 58: return e.charCodeAt(s + 1) === 58 && e.charCodeAt(s + 2) === 58 ? p(17, s, s + 3) : p(18, s, s + 1), !0;
			case 60: return e.charCodeAt(s + 1) === 45 && (p(55, s, s + 2), !0);
			case 45: return e.charCodeAt(s + 1) === 62 ? p(56, s, s + 2) : p(57, s, s + 1), !0;
			case 34: return m(1), s++, !0;
			case 44: return p(60, s, s + 1), !0;
		}
		return !1;
	}, b = (n) => {
		if (J(n)) {
			let n = s + 1;
			for (; n < t && J(e.charCodeAt(n));) n++;
			return p(49, s, n), !0;
		}
		switch (n) {
			case 58: return p(50, s, s + 1), !0;
			case 59: return p(51, s, s + 1), !0;
			case 37: return p(52, s, s + 1), !0;
			case 45: return p(53, s, s + 1), !0;
			case 35: return p(54, s, s + 1), !0;
			case 32: return s++, !0;
			case 34: return m(1), s++, !0;
			case 10: return h(), s++, !0;
			case 44: return p(60, s, s + 1), !0;
		}
		return !1;
	};
	for (; s < t;) {
		let a = e.charCodeAt(s), c = !0;
		switch (o) {
			case 0:
				c = y(a);
				break;
			case 2:
				c = b(a);
				break;
			case 1:
				if (a === 34) h(), s++;
				else {
					let n = e.indexOf("\"", s);
					p(58, s, n === -1 ? t : n);
				}
				break;
			case 3:
				h(), p(4, s, _(s));
				break;
			case 4:
				h(), p(6, s, _(s));
				break;
			case 5: if (a === 125) h(), s++;
			else {
				let n = e.indexOf("}", s);
				p(7, s, n === -1 ? t : n);
			}
		}
		if (!c) return n.push(1), r.push(""), i.push(s), {
			types: n,
			texts: r,
			starts: i
		};
	}
	let x = o === 0 ? 13 : o === 1 ? 58 : o === 3 ? 4 : o === 4 ? 6 : o === 5 ? 7 : -1;
	return x !== -1 && p(x, t, t), p(0, t, t), {
		types: n,
		texts: r,
		starts: i
	};
}
var GS = [
	kS.REQUIREMENT,
	kS.FUNCTIONAL_REQUIREMENT,
	kS.INTERFACE_REQUIREMENT,
	kS.PERFORMANCE_REQUIREMENT,
	kS.PHYSICAL_REQUIREMENT,
	kS.DESIGN_CONSTRAINT,
	AS.LOW_RISK,
	AS.MED_RISK,
	AS.HIGH_RISK,
	jS.VERIFY_ANALYSIS,
	jS.VERIFY_DEMONSTRATION,
	jS.VERIFY_INSPECTION,
	jS.VERIFY_TEST,
	"",
	MS.CONTAINS,
	MS.COPIES,
	MS.DERIVES,
	MS.SATISFIES,
	MS.VERIFIES,
	MS.REFINES,
	MS.TRACES
];
function KS(e) {
	return e === 49 || e === 50 || e === 54 || e === 53 || e === 51;
}
function qS(e, t) {
	let { types: n, texts: r, starts: a } = WS(e), o = 0, s = [], c = [], l = (t, r = t, ...s) => {
		let c = n[o];
		if (c === 1) throw i("requirement", e, a[o], "", !0);
		for (let e = r; e >= t; e--) s.unshift(e);
		let l = s.map((e) => `'${FS[e]}'`).join(", ");
		throw i("requirement", e, a[o], `Expecting ${l}, got '${FS[c]}'`);
	}, u = (e) => (n[o] !== e && l(e), r[o++]), d = (e, t) => {
		let r = n[o];
		return (r < e || r > t) && l(e, t), o++, GS[r - 23];
	}, f = () => {
		let e = n[o];
		return e !== 59 && e !== 58 && l(58, 59), r[o++];
	}, p = () => {
		let e = n[o];
		if (e === 3) o++, t.setAccTitle(u(4).trim());
		else if (e === 5) o++, t.setAccDescription(u(6).trim());
		else if (e === 7) t.setAccDescription(r[o++].trim());
		else return !1;
		return !0;
	}, m = () => {
		let e = [];
		for (;;) {
			let t = n[o];
			if (t !== 49 && t !== 59 && t !== 58 && l(58, 59, 49), e.push(r[o++]), n[o] !== 60) return e;
			o++;
		}
	}, h = () => {
		let e = [];
		for (;;) {
			KS(n[o]) || l(49, 51, 53, 54);
			let t = r[o++];
			for (; KS(n[o]);) t += r[o++];
			if (e.push(t), n[o] !== 60) return e;
			o++;
		}
	}, g = () => {
		let e;
		return n[o] === 17 ? (o++, e = m(), u(15)) : n[o] === 15 ? o++ : l(15, 15, 17), u(12), e;
	}, _ = (e) => {
		for (s.length = 0, c.length = 0;;) {
			let t = n[o];
			if (t === 16) {
				o++;
				break;
			}
			t === 12 ? o++ : ((e ? t < 19 || t > 22 : t !== 44 && t !== 45) && (e && l(19, 22, 12, 16), l(44, 45, 12, 16)), o++, u(18), c.push(t === 21 ? d(29, 31) : t === 22 ? d(32, 35) : f()), s.push(t), u(12));
		}
		for (let e = s.length - 1; e >= 0; e--) {
			let n = c[e];
			switch (s[e]) {
				case 19:
					t.setNewReqId(n);
					break;
				case 20:
					t.setNewReqText(n);
					break;
				case 21:
					t.setNewReqRisk(n);
					break;
				case 22:
					t.setNewReqVerifyMethod(n);
					break;
				case 44:
					t.setNewElementType(n);
					break;
				default: t.setNewElementDocRef(n);
			}
		}
	};
	for (; p();) n[o] === 12 && o++;
	for (n[o] !== 14 && l(14, 14, 3, 5, 7), o++, u(12);;) {
		let e = n[o];
		if (e === 13) return;
		if (e === 12) o++;
		else {
			if (p()) continue;
			if (e >= 8 && e <= 11) o++, t.setDirection(e === 8 ? "TB" : e === 9 ? "BT" : e === 10 ? "RL" : "LR");
			else if (e >= 23 && e <= 28) {
				let e = d(23, 28), n = f(), r = g();
				_(!0), t.addRequirement(n, e), r && t.setClass([n], r);
			} else if (e === 36) {
				o++;
				let e = f(), n = g();
				_(!1), t.addElement(e), n && t.setClass([e], n);
			} else if (e === 46) {
				o++;
				let e = m();
				t.setCssStyle(e, h());
			} else if (e === 47) {
				o++;
				let e = m();
				t.defineClass(e, h());
			} else if (e === 48) {
				o++;
				let e = m();
				t.setClass(e, m());
			} else if (e === 59 || e === 58) {
				let e = r[o++], i = n[o];
				if (i === 17) o++, t.setClass([e], m());
				else if (i === 55 || i === 57) {
					o++;
					let n = d(37, 43);
					u(i === 57 ? 56 : 57);
					let r = f();
					i === 57 ? t.addRelationship(n, e, r) : t.addRelationship(n, r, e);
				} else l(17, 17, 55, 57);
			} else l(12, 13, 3, 5, 7, 8, 9, 10, 11, 23, 24, 25, 26, 27, 28, 36, 47, 48, 46, 59, 58);
		}
	}
}
function JS(e) {
	let t = [];
	for (let n of e.requirements.values()) t.push({
		id: n.name,
		requirement: n,
		element: void 0,
		cssStyles: n.cssStyles,
		cssClasses: n.classes.join(" ")
	});
	for (let n of e.elements.values()) t.push({
		id: n.name,
		requirement: void 0,
		element: n,
		cssStyles: n.cssStyles,
		cssClasses: n.classes.join(" ")
	});
	let n = (t) => e.requirements.has(t) || e.elements.has(t) ? t : void 0;
	return {
		nodes: t,
		edges: e.relations.map((e, t) => ({
			id: `${e.src}-${e.dst}-${t}`,
			start: n(e.src),
			end: n(e.dst),
			type: e.type,
			contains: e.type === MS.CONTAINS
		})),
		direction: e.direction
	};
}
var YS = 40, XS = 16, ZS = 56, QS = 14, $S = 10, eC = 2, tC = 12, nC = 120, rC = 280, iC = 240, aC = 26, oC = 6, sC = 9, cC = 4.5, lC = 28, uC = 14;
function dC(e, t, n) {
	if (t === 0 || e.lines.length === 0) return e;
	let r = 0, i = [], a = e.lines.map((a) => {
		let o = 0, s = a.map((r) => {
			let i = r.style | t, a = r.icon !== void 0 || r.math ? r.width : n.width(r.text, e.size, i);
			return o += a, {
				...r,
				style: i,
				width: a
			};
		});
		return i.push(o), o > r && (r = o), s;
	});
	return {
		...e,
		lines: a,
		widths: i,
		width: r
	};
}
function fC(e, t, n, r) {
	let i = vt(e), a = "", o = "";
	for (let s = 0; s < e.lines.length; s++) {
		let c = e.lines[s], l = n + $a(e, s);
		if (Qa(c)) {
			o += Z(eo(e, s), t + e.widths[s] / 2, l, r);
			continue;
		}
		let u = l + e.size * .35, d = !0;
		for (let e of c) e.icon !== void 0 || e.text === "" || (a += `<tspan${d ? ` x="${X(t)}" y="${X(u)}"` : ""}${_t(e.style & ~i)}>${nt(e.text)}</tspan>`, d = !1);
	}
	return (a === "" ? "" : `<text${yt(r, i)} text-anchor="start" xml:space="preserve">${a}</text>`) + o;
}
function pC(e, t, n, r) {
	let i = oC, a = e - n * i, o = t - r * i;
	return `<circle class="pele-marker" cx="${X(a)}" cy="${X(o)}" r="${i}"/><path class="pele-marker" d="M${X(a - n * i)},${X(o - r * i)}L${X(a + n * i)},${X(o + r * i)}M${X(a + r * i)},${X(o - n * i)}L${X(a - r * i)},${X(o + n * i)}"/>`;
}
function mC(e, t, n, r) {
	let i = e - n * sC, a = t - r * sC;
	return `<path class="pele-marker" d="M${X(i - r * cC)},${X(a + n * cC)}L${X(e)},${X(t)}L${X(i + r * cC)},${X(a - n * cC)}" stroke-linejoin="round"/>`;
}
function hC(e, t, n) {
	let r = /* @__PURE__ */ new Map();
	for (let n of t) {
		let t = n.route;
		if (!(n.src === n.dst || t.length < 6)) for (let i of [0, t.length - 3]) {
			let a = i === 0 ? n.src : n.dst, o = e[a], s = t[i] - o.x, c = t[i + 1] - o.y, l = i === 0 ? 3 : i - 3, u;
			if (Math.abs(Math.abs(c) - o.h / 2) < .5) u = c < 0 ? 0 : 2;
			else if (Math.abs(Math.abs(s) - o.w / 2) < .5) u = s < 0 ? 3 : 1;
			else continue;
			let d = a * 4 + u, f = {
				route: t,
				at: i,
				toward: t[u % 2 == 0 ? l : l + 1]
			}, p = r.get(d);
			p ? p.push(f) : r.set(d, [f]);
		}
	}
	for (let [t, i] of r) {
		if (i.length < 2) continue;
		let r = t >> 2, a = t % 2 == 1, o = (a ? n[r].h : n[r].w) - 2 * uC, s = Math.max(0, Math.min(lC, o / (i.length - 1)));
		i.sort((e, t) => e.toward - t.toward);
		for (let t = 0; t < i.length; t++) {
			let n = (t - (i.length - 1) / 2) * s;
			a ? i[t].route[i[t].at + 1] = e[r].y + n : i[t].route[i[t].at] = e[r].x + n;
		}
	}
}
function gC(e, t, n) {
	return oo(e.direction) ? ao(n, (r) => _C(e, t, n, r)) : _C(e, t, n, !1);
}
function _C(e, t, n, r) {
	let i = JS(e), a = n.fontSize ?? 16, o = Math.round(a * .875), s = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), c = n.padding ?? 8, l = /* @__PURE__ */ new Map(), u = [], d = [];
	for (let e of i.nodes) {
		let t = Ii(e.cssStyles), n = +!!t.bold | (t.italic ? 2 : 0), r = t.fontSize ?? a, i = t.fontSize ?? o, c = e.requirement, f = e.element, p = dC(Q(`«${c ? c.type : "Element"}»`, !1, s, i, 4e3), n, s), m = dC(Q(e.id, !0, s, r, rC), n | 1, s), h = c ? [
			["ID", c.requirementId],
			["Text", c.text],
			["Risk", c.risk],
			["Verification", c.verifyMethod]
		] : [["Type", f.type], ["Doc Ref", f.docRef]], g = [], _ = 0, v = 0, y = 0;
		for (let [e, t] of h) {
			if (!t) continue;
			let r = dC(Q(e, !1, s, i, 4e3), n, s), a = dC(Q(t, !0, s, i, iC), n, s), o = Math.max(r.height, a.height);
			g.push({
				key: r,
				value: a,
				height: o
			}), _ = Math.max(_, r.width), v = Math.max(v, a.width), y += o + eC;
		}
		g.length > 0 && (y += 2 * $S - eC);
		let b = 2 * $S + p.height + m.height, x = Math.max(nC, Math.max(p.width, m.width) + 2 * QS, g.length > 0 ? _ + tC + v + 2 * QS : 0);
		l.has(e.id) || l.set(e.id, u.length);
		let S = ii(x, b + y);
		S.seq = u.length, u.push({
			node: e,
			style: t,
			kind: p,
			name: m,
			rows: g,
			keyWidth: _,
			headHeight: b,
			w: x,
			h: b + y
		}), d.push(S);
	}
	let f = r ? "TB" : Br(i.direction), p = f === "LR" || f === "RL", m = [], h = [], g = [];
	for (let e of i.edges) {
		let t = e.start === void 0 ? void 0 : l.get(e.start), n = e.end === void 0 ? void 0 : l.get(e.end);
		if (t === void 0 || n === void 0) continue;
		let r = Q(`«${e.type}»`, !1, s, o, 4e3);
		t === n && (p ? d[t].h += 2 * (aC + r.height + 8) : d[t].w += 2 * (aC + r.width + 12)), g.push(e), h.push(r), m.push({
			src: t,
			dst: n,
			minlen: 1,
			labelW: r.width + 12,
			labelH: r.height + 4,
			route: [],
			labelX: 0,
			labelY: 0
		});
	}
	let _ = si(d, m, f, {
		nodeSep: YS,
		edgeSep: XS,
		rankSep: ZS,
		portSep: 20
	});
	hC(d, m, u);
	let v = Xs(e.title, s, a, 4e3), y = v.height > 0 ? v.height + 12 : 0, b = Math.max(_.width, v.width), x = c + (b - _.width) / 2, S = c + y, C = Math.ceil(b + 2 * c), w = Math.ceil(_.height + y + 2 * c), T = "";
	for (let e = 0; e < u.length; e++) {
		let t = u[e], { w: n, h: r, style: i } = t, a = -n / 2, o = -r / 2, s = `<rect x="${X(a)}" y="${X(o)}" width="${X(n)}" height="${X(r)}" fill="var(--_s)" stroke="var(--_b)"${Ei(i.shape)}/>` + Z(t.kind, 0, o + $S + t.kind.height / 2, ` class="pele-stereotype" font-size="${t.kind.size}" fill="var(--_m)"${i.text}`) + Z(t.name, 0, o + $S + t.kind.height + t.name.height / 2, ` class="pele-label" font-size="${t.name.size}" font-weight="var(--_hw)"${i.text}`);
		if (t.rows.length > 0) {
			let e = o + t.headHeight;
			s += `<path class="pele-divider" d="M${X(a)},${X(e)}H${X(-a)}" stroke="var(--_b)"${i.line}/>`;
			let n = e + $S, r = "";
			for (let e of t.rows) r += fC(e.key, a + QS, n, ` class="pele-field" fill="var(--_m)"${i.text}`) + fC(e.value, a + QS + t.keyWidth + tC, n, ` class="pele-value"${i.text}`), n += e.height + eC;
			s += `<g class="pele-fields" font-size="${t.rows[0].key.size}">${r}</g>`;
		}
		T += `<g class="pele-node ${t.node.requirement ? "pele-requirement" : "pele-element"}${Ri(t.node.cssClasses.replace(/^default\s?/, ""))}" data-id="${Y(t.node.id)}" transform="translate(${X(d[e].x + x)},${X(d[e].y + S)})">${s}</g>`;
	}
	let E = "", D = "", O = /* @__PURE__ */ new Map();
	for (let e = 0; e < m.length; e++) {
		let t = m[e], n = g[e], r = h[e], i = n.contains ? 2 * oC : 0, a, o = t.labelX + x, s = t.labelY + S;
		if (t.src === t.dst) {
			let e = u[t.src], n = d[t.src].x + x, r = d[t.src].y + S, c = O.get(t.src) ?? 0;
			O.set(t.src, c + 1);
			let l = (p ? e.w : e.h) / 2, f = Math.min(l - 4, 12 + c * 6), m = aC + c * 8, h = (t, i) => p ? `${X(n + i)},${X(r + e.h / 2 + t)}` : `${X(n + e.w / 2 + t)},${X(r + i)}`, g = m / .75;
			a = {
				d: `M${h(i, -f)}C${h(g, -f)} ${h(g, f)} ${h(0, f)}`,
				sx: p ? n - f : n + e.w / 2,
				sy: p ? r + e.h / 2 : r - f,
				sdx: p ? 0 : -1,
				sdy: p ? -1 : 0,
				ex: p ? n + f : n + e.w / 2,
				ey: p ? r + e.h / 2 : r + f,
				edx: p ? 0 : -1,
				edy: p ? -1 : 0
			}, p ? (o = n, s = r + e.h / 2 + m + 4 + t.labelH / 2) : (o = n + e.w / 2 + m + 4 + t.labelW / 2, s = r);
		} else {
			let e = t.route.slice();
			for (let t = 0; t < e.length; t += 3) e[t] += x, e[t + 1] += S;
			a = _i(e, void 0, i, 0);
		}
		E += `<g class="pele-edge pele-relationship-${n.contains ? "contains" : "arrow"}" data-id="${Y(n.id)}"><path d="${a.d}"${n.contains ? "" : " stroke-dasharray=\"5 4\""}/>` + (n.contains ? pC(a.sx, a.sy, a.sdx, a.sdy) : mC(a.ex, a.ey, a.edx, a.edy)) + "</g>", D += bi(n.id, r, o, s, "");
	}
	return {
		svg: Ui("requirement", C, w, a, n, e, Z(v, C / 2, c + v.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + (E ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round">${E}</g>` : "") + (D ? `<g class="pele-edge-labels" font-size="${o}" fill="var(--_m)">${D}</g>` : "") + `<g class="pele-nodes">${T}</g>`),
		width: C,
		height: w,
		links: []
	};
}
var vC = {
	type: "requirement",
	math: !0,
	parse(e, t, n) {
		let r = new PS();
		return n && (r.title = n), qS(e, r), r;
	},
	render: gC
}, yC = class {
	type = "sankey";
	nodes = [];
	links = [];
	title;
	accTitle;
	accDescr;
	lookup = /* @__PURE__ */ new Map();
	findOrCreateNode(e) {
		let t = this.lookup.get(e);
		return t === void 0 && (t = {
			id: e,
			index: this.nodes.length
		}, this.lookup.set(e, t), this.nodes.push(t)), t;
	}
	addLink(e, t, n) {
		this.links.push({
			source: e,
			target: t,
			value: n
		});
	}
}, bC = [
	"$end",
	"STUCK",
	"SANKEY",
	"NEWLINE",
	"COMMA",
	"DQUOTE",
	"NON_ESCAPED_TEXT",
	"ESCAPED_TEXT",
	"EOF"
];
function xC(e) {
	return e >= 32 && e <= 126 && e !== 34 && e !== 44 || e >= 160 && e <= 55295 || e >= 57344 && e <= 65533 || e >= 65536 && e <= 1114111;
}
function SC(e) {
	let t = e.length, n = [], r = [], i = [], a = [], o = 0, s = 0, c = (t, a, o) => {
		n.push(t), r.push(e.slice(a, o)), i.push(a), s = o;
	}, l = (t) => e.slice(s, s + t.length).toLowerCase() === t && !J(e.charCodeAt(s + t.length));
	for (; s < t;) {
		let u = e.charCodeAt(s), d = s, f = s;
		if (o === 2) {
			if (u === 34 && e.charCodeAt(s + 1) !== 34) {
				a.length > 0 && (o = a.pop()), c(5, s, s + 1);
				continue;
			}
			for (; f < t;) {
				let t = e.codePointAt(f);
				if (xC(t) || t === 44 || t === 13 || t === 10) f += t > 65535 ? 2 : 1;
				else if (t === 34 && e.charCodeAt(f + 1) === 34) f += 2;
				else break;
			}
			c(7, s, f);
		} else {
			if (o === 0 && (u | 32) == 115) {
				let e = l("sankey-beta") ? 11 : l("sankey") ? 6 : 0;
				if (e > 0) {
					a.push(o), o = 1, c(2, s, s + e);
					continue;
				}
			}
			if (u === 10 || u === 13 && e.charCodeAt(s + 1) === 10) {
				c(3, s, u === 10 ? s + 1 : s + 2);
				continue;
			}
			if (u === 44) {
				c(4, s, s + 1);
				continue;
			}
			if (u === 34) {
				a.push(o), o = 2, c(5, s, s + 1);
				continue;
			}
			for (; f < t;) {
				let t = e.codePointAt(f);
				if (!xC(t)) break;
				f += t > 65535 ? 2 : 1;
			}
			c(6, s, f);
		}
		if (f === d) return c(1, s, s), {
			types: n,
			texts: r,
			starts: i
		};
	}
	return c(o === 2 ? 7 : 8, t, t), c(0, t, t), {
		types: n,
		texts: r,
		starts: i
	};
}
var CC = /[\n\r]+/g, wC = /[\x00-\x08\x0b\x0c\x0e-\x1f\ud800-\udfff\ufffe\uffff]/u;
function TC(e) {
	return e === 10 || e === 13 ? !1 : e < 128 ? e === 32 || e === 9 || e === 11 || e === 12 : e === 160 || e === 5760 || e >= 8192 && e <= 8202 || e === 8232 || e === 8233 || e === 8239 || e === 8287 || e === 12288 || e === 65279;
}
function EC(e) {
	let t = 0, n = e.length;
	for (; t < n && TC(e.charCodeAt(t));) t++;
	for (; n > t && TC(e.charCodeAt(n - 1));) n--;
	return e.slice(t, n).replace(CC, "\n").trim();
}
function DC(e, t) {
	let { types: n, texts: r, starts: a } = SC(e), o = 0, s = (t) => {
		let r = n[o], s = r === 1 ? bC[n[o - 1]] : bC[r];
		throw i("sankey", e, a[o], `Expecting ${t}, got '${s}'`);
	}, c = (e, t = "") => {
		n[o] !== e && s(`'${bC[e]}'${t}`), o++;
	}, l = () => {
		if (n[o] === 6) return r[o++];
		n[o] !== 5 && s("'DQUOTE', 'NON_ESCAPED_TEXT'"), o++, n[o] !== 7 && s("'ESCAPED_TEXT'");
		let e = r[o++];
		return c(5), e;
	}, u = () => {
		let t = a[o], n = l().trim().replaceAll("\"\"", "\"");
		if (wC.test(p(n))) throw i("sankey", e, t, "Invalid XML character in node name");
		return n;
	};
	for (c(2), c(3);;) {
		let e = u();
		c(4, ", 'NEWLINE', 'EOF'");
		let r = u();
		c(4, ", 'NEWLINE', 'EOF'");
		let i = l(), a = t.findOrCreateNode(e), s = t.findOrCreateNode(r);
		if (t.addLink(a, s, parseFloat(i.trim())), n[o] !== 3) break;
		o++;
	}
	n[o] === 8 && o++, n[o] !== 0 && s("'NEWLINE', 'EOF'");
}
var OC = 6;
function kC(e, t) {
	if (e.length > 8) e.sort(t);
	else for (let n = 1; n < e.length; n++) {
		let r = e[n], i = n - 1;
		for (; i >= 0 && t(e[i], r) > 0;) e[i + 1] = e[i], i--;
		e[i + 1] = r;
	}
}
function AC(e, t) {
	let r = e.nodes.length, i = e.links.map((e) => ({
		source: e.source.index,
		target: e.target.index,
		value: Number.isFinite(e.value) && e.value > 0 ? e.value : 0,
		thickness: 0,
		sourceY: 0,
		targetY: 0
	})), a = [], o = [];
	for (let e = 0; e < r; e++) a.push([]), o.push([]);
	i.forEach((e, t) => {
		a[e.source].push(t), o[e.target].push(t);
	});
	let s = new Int32Array(r), c = new Int32Array(r), l = [];
	for (let e = 0; e < r; e++) c[e] = o[e].length, c[e] === 0 && l.push(e);
	for (let e = 0; e < l.length; e++) {
		let t = l[e];
		for (let e of a[t]) {
			let n = i[e].target;
			s[n] < s[t] + 1 && (s[n] = s[t] + 1), --c[n] === 0 && l.push(n);
		}
	}
	if (l.length < r) {
		let t = 0;
		for (; c[t] === 0;) t++;
		let a = new Uint8Array(r);
		for (; a[t] === 0;) {
			a[t] = 1;
			for (let e of o[t]) if (c[i[e].source] > 0) {
				t = i[e].source;
				break;
			}
		}
		throw new n(`Sankey diagrams cannot have circular links, and "${e.nodes[t].id}" is part of one.`, "semantic", { type: "sankey" });
	}
	let u = 1;
	for (let e = 0; e < r; e++) s[e] + 1 > u && (u = s[e] + 1);
	let d = new Int32Array(r);
	for (let e = r - 1; e >= 0; e--) {
		let t = l[e];
		for (let e of a[t]) d[t] < d[i[e].target] + 1 && (d[t] = d[i[e].target] + 1);
	}
	let f = 0;
	for (let e of i) e.value > f && (f = e.value);
	let p = f > 0 ? 1 / f : 0, m = [], h = new Float64Array(r), g = [];
	for (let e = 0; e < u; e++) g.push([]);
	let _ = u > 1 ? (t.width - t.nodeWidth) / (u - 1) : 0;
	for (let e = 0; e < r; e++) {
		let n;
		if (t.alignment === "left") n = s[e];
		else if (t.alignment === "right") n = u - 1 - d[e];
		else if (t.alignment === "center") {
			if (n = s[e], o[e].length === 0 && a[e].length > 0) {
				n = u;
				for (let t of a[e]) s[i[t].target] - 1 < n && (n = s[i[t].target] - 1);
			}
		} else n = a[e].length > 0 ? s[e] : u - 1;
		let r = 0, c = 0, l = 0, f = 0;
		for (let t of o[e]) r += i[t].value * p, l += i[t].value;
		for (let t of a[e]) c += i[t].value * p, f += i[t].value;
		h[e] = Math.max(r, c), m.push({
			layer: n,
			value: Math.max(l, f),
			x: n * _,
			y: 0,
			height: 0
		}), g[n].push(e);
	}
	let v = 1;
	for (let e of g) e.length > v && (v = e.length);
	let y = v > 1 ? Math.min(t.nodePadding, t.height / (v - 1)) : t.nodePadding, b = 1 / 0;
	for (let e of g) {
		let n = 0;
		for (let t of e) n += h[t];
		n > 0 && (b = Math.min(b, (t.height - (e.length - 1) * y) / n));
	}
	(!Number.isFinite(b) || b < 0) && (b = 0);
	let x = Math.max(0, t.labelHeight - y), S = (e) => {
		for (let n of g) {
			let r = (n.length - 1) * y;
			for (let t of n) r += Math.max(h[t] * e, x);
			if (r > t.height + 1e-6) return !1;
		}
		return !0;
	};
	if (x > 0 && !S(b)) {
		if (S(0)) {
			let e = 0;
			for (let t = 0; t < 40; t++) {
				let t = (e + b) / 2;
				S(t) ? e = t : b = t;
			}
			b = e;
		} else x = 0;
	}
	let C = new Float64Array(r);
	for (let e of i) e.thickness = e.value * p * b;
	for (let e of g) {
		let n = 0;
		for (let t of e) m[t].height = h[t] * b, C[t] = Math.max(0, x - m[t].height) / 2, m[t].y = n + C[t], n += m[t].height + 2 * C[t] + y;
		let r = (t.height - n + y) / (e.length + 1);
		e.forEach((e, t) => m[e].y += r * (t + 1));
	}
	let w = (e) => m[e].y + m[e].height / 2, T = new Float64Array(i.length), E = new Float64Array(i.length), D = (e, t) => w(i[e].target) - w(i[t].target) || e - t, O = (e, t) => w(i[e].source) - w(i[t].source) || e - t, k = (e, t) => w(e) - w(t) || e - t, A = (e) => {
		let t = 0;
		kC(a[e], D);
		for (let n of a[e]) T[n] = t + i[n].thickness / 2, t += i[n].thickness;
	}, j = (e) => {
		let t = 0;
		kC(o[e], O);
		for (let n of o[e]) E[n] = t + i[n].thickness / 2, t += i[n].thickness;
	}, M = () => {
		for (let e = 0; e < r; e++) A(e), j(e);
	}, N = (e, n, r) => {
		for (let t of e) {
			let e = r ? o[t] : a[t];
			if (e.length === 0) continue;
			r ? j(t) : A(t);
			let s = 0, c = 0, l = 0;
			for (let n of e) {
				let e = r ? m[i[n].source].y + T[n] - E[n] : m[i[n].target].y + E[n] - T[n];
				s += e * i[n].thickness, c += i[n].thickness, l += w(r ? i[n].source : i[n].target) - m[t].height / 2;
			}
			let u = c > 0 ? s / c : l / e.length;
			m[t].y += (u - m[t].y) * n;
		}
		kC(e, k);
		let s = 0;
		for (let t of e) m[t].y - C[t] < s && (m[t].y = s + C[t]), s = m[t].y + m[t].height + C[t] + y;
		s = t.height;
		for (let t = e.length - 1; t >= 0; t--) {
			let n = e[t];
			m[n].y + m[n].height + C[n] > s && (m[n].y = s - m[n].height - C[n]), s = m[n].y - C[n] - y;
		}
	};
	M();
	for (let e = 0; e < OC; e++) {
		let t = .99 ** e;
		for (let e = u - 2; e >= 0; e--) N(g[e], t, !1);
		M();
		for (let e = 1; e < u; e++) N(g[e], t, !0);
		M();
	}
	for (let e = 0; e < i.length; e++) i[e].sourceY = m[i[e].source].y + T[e], i[e].targetY = m[i[e].target].y + E[e];
	return {
		nodes: m,
		links: i
	};
}
var jC = 6, MC = 15, NC = 1.8, PC = 300;
function FC(e) {
	let t = 2166136261, n = 5381;
	for (let r = 0; r < e.length; r++) {
		let i = e.charCodeAt(r);
		t = Math.imul(t ^ i, 16777619), n = Math.imul(n, 33) + i | 0;
	}
	return (t >>> 0).toString(36) + (n >>> 0).toString(36);
}
function IC(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function LC(e, t, n, r, i) {
	let a = e[t];
	return typeof a == "number" && a >= r ? Math.min(a, i) : n;
}
function RC(e, t) {
	let n = e[t];
	return typeof n == "string" || typeof n == "number" && Number.isFinite(n) ? String(n) : "";
}
function zC(e) {
	return Math.abs(e) < 0x38d7ea4c68000 ? Math.round(e * 100) / 100 : e;
}
function BC(e) {
	return typeof e == "string" ? Ii([`fill:${e}`]).shape : "";
}
function VC(e, t, n) {
	let r = IC(t.sankey) ? t.sankey : {}, i = LC(r, "width", 600, 1, 1e4);
	return to(n, i, 160, (t) => HC(e, r, n, t, i));
}
function HC(e, t, n, r, i) {
	let a = n.fontSize ?? 16, o = Math.round(a * .625), s = Math.max(o, Math.round(a * .875 * Math.min(1, r / i))), c = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), l = n.padding ?? 8, u = LC(t, "height", 400, 1, 1e4), d = Math.min(LC(t, "nodeWidth", 10, 1, 200), r), f = t.showValues !== !1, m = RC(t, "prefix"), h = RC(t, "suffix"), g = t.labelStyle === "outlined", _ = t.nodeAlignment === "left" || t.nodeAlignment === "right" || t.nodeAlignment === "center" ? t.nodeAlignment : "justify", v = typeof t.linkColor == "string" ? t.linkColor : "gradient", y = (n) => AC(e, {
		width: r,
		height: u,
		nodeWidth: d,
		nodePadding: LC(t, "nodePadding", 12, 0, 200) + (f ? MC : 0),
		labelHeight: n * 1.15,
		alignment: _
	}), b = y(s), x = /* @__PURE__ */ new Map(), S = 1;
	for (let e of b.nodes) {
		let t = (x.get(e.layer) ?? 0) + 1;
		x.set(e.layer, t), t > S && (S = t);
	}
	let C = Math.max(o, Math.round(u / S / NC));
	C < s && (s = C, b = y(s));
	let { nodes: w, links: T } = b, E = s * 1.5, D = /* @__PURE__ */ new Map();
	if (IC(t.nodeColors)) for (let [e, n] of Object.entries(t.nodeColors)) {
		let t = BC(n);
		t && D.set(e, t);
	}
	let O = (t) => D.get(e.nodes[t].id) ?? "", k = (e) => /^ style="fill:(.*);"$/.exec(O(e))?.[1] ?? Bi(e), A = 0, j = 0;
	w.forEach((e) => {
		e.value > j && (j = e.value, A = e.layer);
	});
	let M = 0, N = r, P = 0, F = u, I = w.map((t, n) => {
		let i = p(e.nodes[n].id), a = f ? `${m}${zC(t.value)}${h}` : "", o = c.width(a ? `${i} ${a}` : i, s, 0), l = g ? t.layer >= A : t.x < r / 2, u = l ? t.x + d + jC : t.x - jC, _ = t.y + t.height / 2;
		return M = Math.min(M, l ? u : u - o), N = Math.max(N, l ? u + o : u), P = Math.min(P, _ - s * .75), F = Math.max(F, _ + s * .75), {
			value: a,
			width: o,
			after: l,
			left: l ? u : u - o,
			y: _
		};
	}), L = /* @__PURE__ */ new Map();
	if (w.length <= PC) for (let e of I) {
		let t = Math.floor(e.y / E);
		for (let n of [
			t - 2,
			t - 1,
			t,
			t + 1,
			t + 2
		]) {
			let t = L.get(n);
			t ? t.push(e) : L.set(n, [e]);
		}
	}
	let R = "", z = "";
	w.forEach((t, n) => {
		let r = e.nodes[n].id, i = p(r), a = Math.max(t.height, 1);
		z += `<rect class="pele-sankey-node" data-id="${Y(r)}" x="${X(t.x)}" y="${X(t.y)}" width="${X(d)}" height="${X(a)}" rx="${X(Math.min(2, a / 2))}" fill="${Bi(n)}"${O(n)}/>`;
		let o = I[n], c = (e, t) => (L.get(Math.floor(t / E)) ?? []).some((n) => n !== o && Math.abs(n.y - t) < E && e < n.left + n.width + jC && e + o.width > n.left - jC);
		if (w.length <= PC && c(o.left, o.y)) e: for (let e of [
			0,
			-E,
			E
		]) for (let r of [o.after, !o.after]) {
			let i = r ? t.x + d + jC : t.x - jC - o.width, a = o.y + e;
			if (c(i, a) || i < M || i + o.width > N || a - s * .75 < P || a + s * .75 > F || w.some((e, t) => t !== n && i < e.x + d + jC && i + o.width > e.x - jC && a - s * .75 < e.y + e.height && a + s * .75 > e.y)) continue;
			let l = Math.max(0, t.y - a, a - t.y - t.height);
			if (!w.some((e, r) => r !== n && e.x === t.x && Math.max(0, e.y - a, a - e.y - e.height) <= l)) {
				o.left = i, o.y = a, o.after = r;
				break e;
			}
		}
		let { value: l, after: u, y: f } = o, m = ` x="${X(u ? t.x + d + jC : t.x - jC)}" y="${X(f + s * .35)}" text-anchor="${u ? "start" : "end"}"`, h = nt(i) + (l ? ` <tspan class="pele-sankey-value" fill="var(--_m)">${nt(l)}</tspan>` : "");
		R += `<g class="pele-label" data-id="${Y(r)}">` + (g ? `<text${m} fill="none" stroke="var(--_bg)" stroke-width="3" stroke-linejoin="round">${nt(i)}${l ? " " + nt(l) : ""}</text>` : "") + `<text${m}>${h}</text></g>`;
	});
	let B = v === "gradient" || v === "source" || v === "target" ? "" : BC(v), V = n.idPrefix ?? "", H = v === "gradient" && /^[\w-]+$/.test(V), U = /* @__PURE__ */ new Map(), ee = "";
	for (let t of T) {
		let n = v === "target" ? t.target : t.source, r = Math.max(t.thickness, 1) / 2, i = w[t.source].x + d, a = w[t.target].x, o = `fill="${Bi(n)}"${B || O(n)}`;
		if (H) {
			let e = `x1="${X(i)}" x2="${X(a)}"><stop offset="0" stop-color="${k(t.source)}"/><stop offset="1" stop-color="${k(t.target)}"/>`, n = `${V}-sankey-${FC(e)}`;
			U.set(n, `<linearGradient id="${n}" gradientUnits="userSpaceOnUse" ${e}</linearGradient>`), o = `fill="url(#${n}) ${k(t.source)}"`;
		}
		let s = X((i + a) / 2), c = Y(e.nodes[t.source].id), l = Y(e.nodes[t.target].id);
		ee += `<path class="pele-sankey-link" data-id="${c}-&gt;${l}" d="M${X(i)},${X(t.sourceY - r)}C${s},${X(t.sourceY - r)} ${s},${X(t.targetY - r)} ${X(a)},${X(t.targetY - r)}L${X(a)},${X(t.targetY + r)}C${s},${X(t.targetY + r)} ${s},${X(t.sourceY + r)} ${X(i)},${X(t.sourceY + r)}Z" ${o}><title>${c} → ${l}: ${Y(m)}${zC(t.value)}${Y(h)}</title></path>`;
	}
	let te = Q(e.title, !1, c, a, no(n), 1), W = te.height > 0 ? te.height + 12 : 0, ne = Math.max(N - M, te.width), re = l - M + (ne - (N - M)) / 2, G = l + W - P, K = Math.ceil(ne + 2 * l), ie = Math.ceil(F - P + W + 2 * l);
	return {
		svg: Ui("sankey", K, ie, a, n, e, Z(te, K / 2, l + te.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + `<g transform="translate(${X(re)},${X(G)})">` + (U.size > 0 ? `<defs>${[...U.values()].join("")}</defs>` : "") + `<g class="pele-sankey-links" fill-opacity="0.4">${ee}</g><g class="pele-sankey-nodes">${z}</g><g class="pele-labels" font-size="${s}">${R}</g></g>`),
		width: K,
		height: ie,
		links: []
	};
}
var UC = {
	type: "sankey",
	parse(e, t, n) {
		let r = new yC();
		return n && (r.title = n), DC(EC(e), r), r;
	},
	render: VC
}, WC = "aliceblue antiquewhite aqua aquamarine azure beige bisque black blanchedalmond blue blueviolet brown burlywood cadetblue chartreuse chocolate coral cornflowerblue cornsilk crimson cyan darkblue darkcyan darkgoldenrod darkgray darkgreen darkgrey darkkhaki darkmagenta darkolivegreen darkorange darkorchid darkred darksalmon darkseagreen darkslateblue darkslategray darkslategrey darkturquoise darkviolet deeppink deepskyblue dimgray dimgrey dodgerblue firebrick floralwhite forestgreen fuchsia gainsboro ghostwhite gold goldenrod gray green greenyellow grey honeydew hotpink indianred indigo ivory khaki lavender lavenderblush lawngreen lemonchiffon lightblue lightcoral lightcyan lightgoldenrodyellow lightgray lightgreen lightgrey lightpink lightsalmon lightseagreen lightskyblue lightslategray lightslategrey lightsteelblue lightyellow lime limegreen linen magenta maroon mediumaquamarine mediumblue mediumorchid mediumpurple mediumseagreen mediumslateblue mediumspringgreen mediumturquoise mediumvioletred midnightblue mintcream mistyrose moccasin navajowhite navy oldlace olive olivedrab orange orangered orchid palegoldenrod palegreen paleturquoise palevioletred papayawhip peachpuff peru pink plum powderblue purple rebeccapurple red rosybrown royalblue saddlebrown salmon sandybrown seagreen seashell sienna silver skyblue slateblue slategray slategrey snow springgreen steelblue tan teal thistle tomato turquoise violet wheat white whitesmoke yellow yellowgreen transparent currentcolor inherit initial unset revert accentcolor accentcolortext activetext buttonborder buttonface buttontext canvas canvastext field fieldtext graytext highlight highlighttext linktext mark marktext selecteditem selecteditemtext visitedtext activeborder activecaption appworkspace background buttonhighlight buttonshadow captiontext inactiveborder inactivecaption inactivecaptiontext infobackground infotext menu menutext scrollbar threeddarkshadow threedface threedhighlight threedlightshadow threedshadow window windowframe windowtext", GC, KC = /^[+-]?(?:\d+(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?(%|deg|grad|rad|turn)?$/i;
function qC(e) {
	if (e.toLowerCase() === "none") return 4;
	let t = KC.exec(e);
	return t ? t[1] === void 0 ? 1 : t[1] === "%" ? 2 : 3 : 0;
}
function JC(e, t) {
	let n = qC(e);
	return n === 1 || n === 2 || t && n === 4;
}
function YC(e) {
	let t = e.startsWith("hsl"), n = e.indexOf("("), r = e.slice(0, n);
	if (r !== "rgb" && r !== "rgba" && r !== "hsl" && r !== "hsla" || e.length > 120 || e.indexOf(")") !== e.length - 1) return !1;
	let i = e.slice(n + 1, -1).trim(), a, o, s = i.includes(",");
	if (s) a = i.split(",").map((e) => e.trim()), a.length === 4 && (o = a.pop());
	else {
		let e = i.split("/");
		if (e.length > 2) return !1;
		a = e[0].trim().split(/\s+/), e.length === 2 && (o = e[1].trim());
	}
	if (a.length !== 3 || o !== void 0 && !JC(o, !s)) return !1;
	let c = a.map(qC);
	if (s) return t ? (c[0] === 1 || c[0] === 3) && c[1] === 2 && c[2] === 2 : (c[0] === 1 || c[0] === 2) && c[1] === c[0] && c[2] === c[0];
	for (let e = 0; e < 3; e++) {
		let n = c[e];
		if (!(n === 1 || n === 4 || (t && e === 0 ? n === 3 : n === 2))) return !1;
	}
	return !0;
}
function XC(e) {
	return e.includes("(") ? YC(e) : (GC ??= new Set(WC.split(" ")), GC.has(e.toLowerCase()));
}
var ZC = /^:?wrap:/, QC = /^:?nowrap:/, $C = /^:?(?:no)?wrap:/, ew = /^(?:rgba?|hsla?)\s*\(/, tw = /[\r\u2028\u2029]/, nw = /^\w*/;
function rw(e) {
	throw new n(e, "semantic", { type: "sequence" });
}
function iw(e) {
	let t = e.trim(), n = ZC.test(t) ? !0 : !QC.test(t) && void 0;
	return {
		text: (n === void 0 ? t : t.replace($C, "")).trim(),
		wrap: n
	};
}
function aw(e) {
	let t = ew.exec(e);
	if (t) {
		let n = e.lastIndexOf(")");
		if (n >= t[0].length) return tw.test(e.slice(t[0].length)) ? void 0 : [e.slice(0, n + 1), e.slice(n + 1)];
	}
	if (tw.test(e)) return;
	let n = nw.exec(e)[0];
	return [n, e.slice(n.length)];
}
function ow(e) {
	return typeof e == "string" ? [...e].map((e, t) => [String(t), e]) : typeof e == "object" && e ? Object.entries(e) : [];
}
var sw = class {
	type = "sequence";
	actors = /* @__PURE__ */ new Map();
	createdActors = /* @__PURE__ */ new Map();
	destroyedActors = /* @__PURE__ */ new Map();
	boxes = [];
	messages = [];
	notes = [];
	title;
	accTitle;
	accDescr;
	prevActor;
	currentBox;
	lastCreated;
	lastDestroyed;
	wrapEnabled;
	sequenceWrap;
	active = /* @__PURE__ */ new Map();
	constructor(e = {}) {
		this.wrapEnabled = e.wrap, this.sequenceWrap = e.sequenceWrap ?? !1;
	}
	autoWrap() {
		return this.wrapEnabled ?? this.sequenceWrap;
	}
	setAccTitle(e) {
		this.accTitle = e.replace(/^\s+/g, "");
	}
	setAccDescription(e) {
		this.accDescr = e.replace(/\n\s+/g, "\n");
	}
	setDiagramTitle(e) {
		this.title = e;
	}
	parseMessage(e) {
		return iw(e);
	}
	parseBoxData(e) {
		let t = aw(e), n = t?.[0] ? t[0].trim() : "transparent", r = t?.[1] ? t[1].trim() : void 0;
		if (XC(n) || (n = "transparent", r = e.trim()), r === void 0) return {
			text: void 0,
			color: n,
			wrap: void 0
		};
		let { text: i, wrap: a } = iw(r);
		return {
			text: i || void 0,
			color: n,
			wrap: a
		};
	}
	addBox(e) {
		this.currentBox = {
			name: e.text,
			wrap: e.wrap ?? this.autoWrap(),
			fill: e.color,
			actorKeys: []
		}, this.boxes.push(this.currentBox);
	}
	addActor(e, t, r, i, a) {
		let o = this.currentBox, s;
		if (a !== void 0) {
			let t;
			try {
				t = re(a.includes("\n") ? a + "\n" : "{\n" + a + "\n}");
			} catch (t) {
				throw new n(`Config of participant "${e}" is not valid YAML. ${t.message}`, "syntax", { type: "sequence" });
			}
			typeof t == "object" && t && !Array.isArray(t) && (s = t);
		}
		let c = s && Object.prototype.hasOwnProperty.call(s, "type") ? s.type : void 0, l = s && Object.prototype.hasOwnProperty.call(s, "alias") ? s.alias : void 0;
		c != null && (i = String(c)), l && (!r || r.text === t) && (r = {
			text: String(l),
			wrap: r?.wrap,
			type: i
		});
		let u = this.actors.get(e);
		if (!(u && (this.currentBox && u.box && this.currentBox !== u.box && rw(`A same participant should only be defined in one Box: ${u.name} can't be in '${u.box.name}' and in '${this.currentBox.name}' at the same time.`), o = u.box ? u.box : this.currentBox, u.box = o, t === u.name && r == null))) {
			if ((r?.text == null || i == null) && (r = {
				text: t,
				type: i
			}), this.actors.set(e, {
				box: o,
				name: t,
				description: r.text,
				wrap: r.wrap ?? this.autoWrap(),
				prevActor: this.prevActor,
				links: /* @__PURE__ */ new Map(),
				properties: /* @__PURE__ */ new Map(),
				type: i ?? "participant"
			}), this.prevActor) {
				let t = this.actors.get(this.prevActor);
				t && (t.nextActor = e);
			}
			this.currentBox && this.currentBox.actorKeys.push(e), this.prevActor = e;
		}
	}
	addMessage(e, t, n, r) {
		this.messages.push({
			id: String(this.messages.length),
			from: e,
			to: t,
			message: n.text,
			wrap: n.wrap ?? this.autoWrap(),
			answer: r
		});
	}
	addSignal(e, t, n, r, i = !1, a) {
		if (r === 18) {
			let t = e ? this.active.get(e) ?? 0 : 0;
			t < 1 && rw(`Trying to inactivate an inactive participant (${e})`), this.active.set(e, t - 1);
		} else r === 17 && e && this.active.set(e, (this.active.get(e) ?? 0) + 1);
		return this.messages.push({
			id: String(this.messages.length),
			from: e,
			to: t,
			message: n?.text ?? "",
			wrap: n?.wrap ?? this.autoWrap(),
			type: r,
			activate: i,
			centralConnection: a ?? 0
		}), !0;
	}
	addNote(e, t, n) {
		let r = n.wrap ?? this.autoWrap(), i = {
			actor: e,
			placement: t,
			message: n.text,
			wrap: r
		}, a = typeof e == "string" ? [e, e] : e;
		this.notes.push(i), this.messages.push({
			id: String(this.messages.length),
			from: a[0],
			to: a[1],
			message: n.text,
			wrap: r,
			type: 2,
			placement: t
		});
	}
	addLinks(e, t) {
		let n = this.actors.get(e);
		if (n) try {
			let e = JSON.parse(t.text);
			for (let [t, r] of ow(e)) n.links.set(t, r);
		} catch {
			return;
		}
	}
	addALink(e, t) {
		let n = this.actors.get(e);
		if (!n) return;
		let r = t.text.indexOf("@");
		n.links.set(t.text.slice(0, r - 1).trim(), t.text.slice(r + 1).trim());
	}
	addProperties(e, t) {
		let n = this.actors.get(e);
		if (n) try {
			let e = JSON.parse(t.text);
			for (let [t, r] of ow(e)) n.properties.set(t, r);
		} catch {
			return;
		}
	}
	addDetails(e, t) {
		let n = this.actors.get(e);
		n && (n.details = t.text);
	}
	apply(e) {
		let t = [], n = [], r = e;
		for (;;) {
			r !== void 0 && (Array.isArray(r) ? (t.push(r), n.push(0)) : typeof r != "string" && this.applyOne(r));
			let e = t.length - 1;
			if (e < 0) return;
			let i = t[e];
			n[e] < i.length ? r = i[n[e]++] : (t.pop(), n.pop(), r = void 0);
		}
	}
	applyOne(e) {
		let t = e.actor;
		switch (e.type) {
			case "sequenceIndex":
				this.messages.push({
					id: String(this.messages.length),
					from: void 0,
					to: void 0,
					message: {
						start: e.sequenceIndex,
						step: e.sequenceIndexStep,
						visible: e.sequenceVisible === !0
					},
					wrap: !1,
					type: e.signalType
				});
				break;
			case "addParticipant":
				this.addActor(t, t, e.description, e.draw, e.config);
				break;
			case "createParticipant":
				this.actors.has(t) && rw("It is not possible to have actors with the same id, even if one is destroyed before the next is created. Use 'AS' aliases to simulate the behavior"), this.lastCreated = t, this.addActor(t, t, e.description, e.draw, e.config), this.createdActors.set(t, this.messages.length);
				break;
			case "destroyParticipant":
				this.lastDestroyed = t, this.destroyedActors.set(t, this.messages.length);
				break;
			case "activeStart":
			case "activeEnd":
			case "centralConnection":
			case "centralConnectionReverse":
				this.addSignal(t, void 0, void 0, e.signalType);
				break;
			case "addNote":
				this.addNote(e.actor, e.placement, e.text);
				break;
			case "addLinks":
				this.addLinks(t, e.text);
				break;
			case "addALink":
				this.addALink(t, e.text);
				break;
			case "addProperties":
				this.addProperties(t, e.text);
				break;
			case "addDetails":
				this.addDetails(t, e.text);
				break;
			case "addMessage":
				this.lastCreated ? (e.to !== this.lastCreated && rw(`The created participant ${this.lastCreated} does not have an associated creating message after its declaration. Please check the sequence diagram.`), this.lastCreated = void 0) : this.lastDestroyed &&= (e.to !== this.lastDestroyed && e.from !== this.lastDestroyed && rw(`The destroyed participant ${this.lastDestroyed} does not have an associated destroying message after its declaration. Please check the sequence diagram.`), void 0), this.addSignal(e.from, e.to, e.msg, e.signalType, e.activate, e.centralConnection);
				break;
			case "boxStart":
				this.addBox(e.boxData);
				break;
			case "boxEnd":
				this.currentBox = void 0;
				break;
			case "loopStart":
				this.addSignal(void 0, void 0, e.loopText, e.signalType);
				break;
			case "rectStart":
				this.addSignal(void 0, void 0, e.color, e.signalType);
				break;
			case "optStart":
				this.addSignal(void 0, void 0, e.optText, e.signalType);
				break;
			case "altStart":
			case "else":
				this.addSignal(void 0, void 0, e.altText, e.signalType);
				break;
			case "parStart":
			case "and":
				this.addSignal(void 0, void 0, e.parText, e.signalType);
				break;
			case "criticalStart":
				this.addSignal(void 0, void 0, e.criticalText, e.signalType);
				break;
			case "option":
				this.addSignal(void 0, void 0, e.optionText, e.signalType);
				break;
			case "breakStart":
				this.addSignal(void 0, void 0, e.breakText, e.signalType);
				break;
			case "loopEnd":
			case "rectEnd":
			case "optEnd":
			case "altEnd":
			case "parEnd":
			case "criticalEnd":
			case "breakEnd": this.addSignal(void 0, void 0, void 0, e.signalType);
		}
	}
}, cw = /* @__PURE__ */ "$end.INVALID.INVALID.NEWLINE.SD.create.box.restOfLine.end.autonumber.NUM.off.activate.deactivate.title.legacy_title.acc_title.acc_title_value.acc_descr.acc_descr_value.acc_descr_multiline_value.loop.rect.opt.alt.par.par_over.critical.break.option.and.else.participant.AS.participant_actor.destroy.note.over.links.link.properties.details.,.left_of.right_of.+.-.().ACTOR.CONFIG_START.CONFIG_CONTENT.CONFIG_END.TXT.SOLID_OPEN_ARROW.DOTTED_OPEN_ARROW.SOLID_ARROW.BIDIRECTIONAL_SOLID_ARROW.DOTTED_ARROW.BIDIRECTIONAL_DOTTED_ARROW.SOLID_CROSS.DOTTED_CROSS.SOLID_POINT.DOTTED_POINT.SOLID_ARROW_TOP.SOLID_ARROW_BOTTOM.STICK_ARROW_TOP.STICK_ARROW_BOTTOM.SOLID_ARROW_TOP_DOTTED.SOLID_ARROW_BOTTOM_DOTTED.STICK_ARROW_TOP_DOTTED.STICK_ARROW_BOTTOM_DOTTED.SOLID_ARROW_TOP_REVERSE.SOLID_ARROW_BOTTOM_REVERSE.STICK_ARROW_TOP_REVERSE.STICK_ARROW_BOTTOM_REVERSE.SOLID_ARROW_TOP_REVERSE_DOTTED.SOLID_ARROW_BOTTOM_REVERSE_DOTTED.STICK_ARROW_TOP_REVERSE_DOTTED.STICK_ARROW_BOTTOM_REVERSE_DOTTED".split("."), lw = /* @__PURE__ */ new Uint8Array(128);
for (let e = 0; e < 128; e++) {
	let t = String.fromCharCode(e), n = e === 32 || e >= 9 && e <= 13, r = 0;
	"/\\+()<->:\n,;".includes(t) || (r |= 1), "+<->:\n,;".includes(t) || (r |= 2), "<>:\n,;@".includes(t) || (r |= 8 | (n ? 0 : 4)), "#\n;".includes(t) || (r |= 16), !"/\\+()<>:\n,;-".includes(t) && !n && (r |= 32), lw[e] = r;
}
function uw(e) {
	let t = e.length, n = [], r = [], i = [], a = [], o = 0, s = 0, c = -1, l = (t, a, o) => {
		n.push(t), r.push(e.slice(a, o)), i.push(a), s = o;
	}, u = (e, t, a, o) => {
		n.push(e), r.push(o), i.push(t), s = a;
	}, d = (e) => {
		a.push(o), o = e;
	}, f = () => {
		a.length > 0 && (o = a.pop());
	}, p = (n) => (c < n && (c = e.indexOf("\n", n), c === -1 && (c = t)), c), m = (t, n) => {
		let r = e.charCodeAt(t);
		return r < 128 ? (lw[r] & n) !== 0 : n === 4 || n === 32 ? !G(r) : !0;
	}, h = (t, n) => {
		for (let r = 0; r < n.length; r++) {
			let i = n.charCodeAt(r), a = e.charCodeAt(t + r);
			if (i >= 97 && i <= 122 ? (a | 32) !== i : a !== i) return !1;
		}
		return !0;
	}, g = (t) => h(s, t) && !J(e.charCodeAt(s + t.length)), _ = (n) => {
		for (; n < t && G(e.charCodeAt(n));) n++;
		return n;
	}, v = () => {
		let n = s;
		for (; n < t;) {
			let t = e.charCodeAt(n);
			if (t === 10 || !G(t)) break;
			n++;
		}
		return n !== s && (s = n, !0);
	}, y = (e) => {
		for (; e < t && m(e, 16);) e++;
		return e;
	}, b = (e, t, n) => {
		l(e, s, s + t), d(n);
	}, x = (e, t, n = -1) => g(e) ? (l(t, s, s + e.length), n >= 0 && d(n), !0) : !1, S = (n, r) => {
		if (!h(s, n)) return !1;
		let i = s + n.length, a = e.charCodeAt(i);
		if (a !== 32 && a !== 9) return !1;
		for (; a === 32 || a === 9;) a = e.charCodeAt(++i);
		return i >= t || !m(i, 32) ? !1 : (l(r, s, s + n.length), !0);
	}, C = (t) => {
		let n = e.charCodeAt(t), r = e.charCodeAt(t + 1);
		if (n === 45) {
			if (r === 120 || r === 88 || r === 41 || r === 92 || r === 47 || r === 45) return !0;
			let n = e.charCodeAt(t + 2);
			return r === 124 && (n === 92 || n === 47);
		}
		return n === 47 || n === 92 ? (r === 124 || r === n) && e.charCodeAt(t + 2) === 45 : n === 40 && r === 41;
	}, w = () => {
		let n = s + 1;
		for (; n < t && m(n, 1);) n++;
		for (; n < t && !C(n);) {
			let r = n;
			for (; e.charCodeAt(r) === 45;) r++;
			if (r >= t || !m(r, 2)) break;
			for (r++; r < t && m(r, 2);) r++;
			n = r;
		}
		u(48, s, n, e.slice(s, n).trim());
	}, T = () => {
		let t = s;
		for (; q(e.charCodeAt(t));) t++;
		let n = t > s;
		if (e.charCodeAt(t) === 46 && q(e.charCodeAt(t + 1))) {
			let n = q(e.charCodeAt(t + 2)) ? t + 3 : t + 2, r = e.charCodeAt(n);
			if (r === 32 || r === 10) return l(10, s, n), !0;
		}
		let r = e.charCodeAt(t);
		return n && (r === 32 || r === 10) ? (l(10, s, t), !0) : !1;
	}, E = () => {
		let t = e.charCodeAt(s + 1), n = e.charCodeAt(s + 2);
		if (t === 62) l(n === 62 ? 55 : 53, s, s + (n === 62 ? 3 : 2));
		else if (t === 120 || t === 88) l(59, s, s + 2);
		else if (t === 41) l(61, s, s + 2);
		else if (t === 124 && n === 92) l(63, s, s + 3);
		else if (t === 124 && n === 47) l(64, s, s + 3);
		else if (t === 92 && n === 92) l(65, s, s + 3);
		else if (t === 47 && n === 47) l(66, s, s + 3);
		else if (t === 45) {
			let t = e.charCodeAt(s + 3);
			n === 62 ? l(t === 62 ? 57 : 54, s, s + (t === 62 ? 4 : 3)) : n === 120 || n === 88 ? l(60, s, s + 3) : n === 41 ? l(62, s, s + 3) : n === 124 && t === 92 ? l(67, s, s + 4) : n === 124 && t === 47 ? l(68, s, s + 4) : n === 92 && t === 92 ? l(69, s, s + 4) : n === 47 && t === 47 ? l(70, s, s + 4) : l(46, s, s + 1);
		} else l(46, s, s + 1);
	}, D = (t) => {
		let n = e.charCodeAt(s + 1);
		if (n !== 124 && n !== t || e.charCodeAt(s + 2) !== 45) return !1;
		let r = e.charCodeAt(s + 3) === 45, i = t === 47, a;
		return a = n === 124 ? r ? i ? 75 : 76 : i ? 71 : 72 : r ? i ? 77 : 78 : i ? 73 : 74, l(a, s, s + (r ? 4 : 3)), !0;
	}, O = () => {
		if (!h(s, "title")) return !1;
		let n = s + 5, r = e.charCodeAt(n) === 58;
		return r && n++, !G(e.charCodeAt(n)) || n + 1 >= t || !m(n + 1, 16) ? !1 : (l(r ? 15 : 14, s, y(n + 1)), !0);
	}, k = () => {
		let t = h(s, "accdescr");
		if (!t && !h(s, "acctitle")) return !1;
		let n = _(s + 8), r = e.charCodeAt(n);
		return r === 58 ? (l(t ? 18 : 16, s, _(n + 1)), d(t ? 6 : 5), !0) : t && r === 123 ? (s = _(n + 1), d(7), !0) : !1;
	}, A = (e) => {
		switch (e | 32) {
			case 97: return x("actor", 34, 1) || x("alt", 24, 3) || x("and", 30, 3) || x("activate", 12, 1) || k() || x("autonumber", 9);
			case 98: return x("box", 6, 3) || x("break", 28, 3);
			case 99: return x("create", 5) || x("critical", 27, 3);
			case 100: return x("destroy", 35, 1) || S("details", 41) || x("deactivate", 13, 1);
			case 101: return x("else", 31, 3) || x("end", 8);
			case 108: return x("loop", 21, 3) || x("left of", 43) || S("links", 38) || S("link", 39);
			case 110: return x("note", 36);
			case 111: return x("opt", 23, 3) || x("option", 29, 3) || x("over", 37) || x("off", 11);
			case 112: return x("participant", 32, 1) || x("par", 25, 3) || x("par_over", 26, 3) || S("properties", 40);
			case 114: return x("rect", 22, 3) || x("right of", 44);
			case 115: return x("sequencediagram", 4);
			case 116: return O();
			default: return !1;
		}
	}, j = () => {
		let t = e.charCodeAt(s);
		if (t === 10) {
			let t = s + 1;
			for (; e.charCodeAt(t) === 10;) t++;
			l(3, s, t);
		} else if (G(t)) s = _(s + 1);
		else if (t === 35 || t === 37 && e.charCodeAt(s + 1) !== 123) s = p(s);
		else if (t !== 125 && e.charCodeAt(s + 1) === 37 && e.charCodeAt(s + 2) === 37) s = p(s);
		else if ((!q(t) && t !== 46 || !T()) && !(t < 128 && (t | 32) >= 97 && (t | 32) <= 122 && A(t))) {
			if (t === 44) l(42, s, s + 1);
			else if (t === 59) l(3, s, s + 1);
			else if (m(s, 1)) w();
			else if (t === 45) E();
			else if (t === 60 && e.startsWith("<<->>", s)) l(56, s, s + 5);
			else if (t === 60 && e.startsWith("<<-->>", s)) l(58, s, s + 6);
			else {
				if ((t === 47 || t === 92) && D(t)) return;
				t === 58 ? l(52, s, y(s + 1)) : t === 43 ? l(45, s, s + 1) : t === 40 && e.charCodeAt(s + 1) === 41 ? l(47, s, s + 2) : l(2, s, s + 1);
			}
		}
	}, M = () => {
		if (v()) return !0;
		let n = e.charCodeAt(s);
		if (n === 35) return s = p(s), !0;
		if (n === 64 && e.charCodeAt(s + 1) === 123) return b(49, 2, 4), !0;
		let r = s;
		for (; r < t && m(r, 4);) r++;
		if (r > s) {
			let t = _(r);
			if (e.charCodeAt(t) === 64 && e.charCodeAt(t + 1) === 123) return l(48, s, r), !0;
			if (t > r && h(t, "as") && G(e.charCodeAt(t + 2))) return l(48, s, r), d(2), !0;
		}
		let i = r;
		for (; i < t && m(i, 8);) i++;
		if (i > s) {
			let n = e.charCodeAt(i), r = i;
			if (i < t && n !== 10 && n !== 59) for (r--; r > s && e.charCodeAt(r) !== 35;) r--;
			if (r > s) return u(48, s, r, e.slice(s, r).trim()), f(), !0;
		}
		if (e.charCodeAt(i) === 60) return l(2, s, p(s)), f(), !0;
		if (n !== 10) {
			let t = p(s);
			return u(2, s, t, e.slice(s, t).trim()), f(), !0;
		}
		return !1;
	}, N = () => {
		switch (o) {
			case 0: return j(), !0;
			case 1: return M();
			case 2: return v() ? !0 : e.charCodeAt(s) === 35 ? (s = p(s), !0) : (f(), f(), g("as") ? b(33, 2, 3) : l(3, s, s), !0);
			case 3: return v() ? !0 : e.charCodeAt(s) === 35 ? (s = p(s), !0) : (l(7, s, y(s)), f(), !0);
			case 4:
				if (e.charCodeAt(s) !== 125) {
					let n = e.indexOf("}", s);
					return n === -1 && (n = t), l(50, s, n), !0;
				}
				{
					let t = _(s + 1), n = t > s + 1 && h(t, "as") && G(e.charCodeAt(t + 2));
					return l(51, s, s + 1), f(), n ? d(2) : f(), !0;
				}
			case 5:
			case 6: return l(o === 5 ? 17 : 19, s, p(s)), f(), !0;
			default:
				if (e.charCodeAt(s) === 125) s++, f();
				else {
					let n = e.indexOf("}", s);
					n === -1 && (n = t), l(20, s, n);
				}
				return !0;
		}
	};
	for (; s < t;) if (!N()) return n.push(1), r.push(""), i.push(s), {
		types: n,
		texts: r,
		starts: i
	};
	return o === 0 || o === 2 ? l(3, t, t) : o === 3 ? l(7, t, t) : o === 5 ? l(17, t, t) : o === 6 ? l(19, t, t) : o === 7 && l(20, t, t), n.push(0), r.push(""), i.push(t), {
		types: n,
		texts: r,
		starts: i
	};
}
var dw = (/* @__PURE__ */ new Int8Array(79)).fill(-1);
dw[53] = 5, dw[54] = 6, dw[55] = 0, dw[57] = 1, dw[56] = 33, dw[58] = 34, dw[59] = 3, dw[60] = 4, dw[61] = 24, dw[62] = 25, dw[63] = 41, dw[64] = 42, dw[65] = 43, dw[66] = 44, dw[67] = 51, dw[68] = 52, dw[69] = 53, dw[70] = 54, dw[71] = 45, dw[72] = 46, dw[73] = 47, dw[74] = 48, dw[75] = 55, dw[76] = 56, dw[77] = 57, dw[78] = 58;
var fw = (/* @__PURE__ */ new Int8Array(79)).fill(-1);
fw[21] = 2, fw[22] = 3, fw[23] = 4, fw[28] = 5, fw[24] = 6, fw[25] = 7, fw[26] = 7, fw[27] = 8, fw[6] = 1;
var pw = "'SOLID_OPEN_ARROW', 'DOTTED_OPEN_ARROW', 'SOLID_ARROW', 'DOTTED_ARROW', 'SOLID_CROSS', 'DOTTED_CROSS', 'SOLID_POINT', 'DOTTED_POINT'";
function mw(e, t) {
	let { types: n, texts: r, starts: a } = uw(e), o = 0, s = (t) => {
		let r = n[o];
		throw r === 1 ? i("sequence", e, a[o], "", !0) : i("sequence", e, a[o], `Expecting ${t}, got '${cw[r]}'`);
	}, c = (e) => (n[o] !== e && s(`'${cw[e]}'`), r[o++]), l = () => {
		let e = n[o];
		return e !== 48 && e !== 39 && s("'ACTOR'"), {
			type: "addParticipant",
			actor: r[o++]
		};
	}, u = () => t.parseMessage(c(52).trim().substring(1)), d = () => {
		let e = n[o++];
		if (e === 35) {
			let e = l();
			return c(3), e.type = "destroyParticipant", e;
		}
		let r = l();
		if (n[o] === 49 && n[o - 1] === 48) {
			o++;
			let e = c(50);
			c(51), r.config = e.trim();
		}
		if (r.draw = e === 32 ? "participant" : "actor", n[o] === 33) {
			o++;
			let e = c(7);
			c(3), r.description = t.parseMessage(e);
		} else n[o] === 3 ? o++ : s("'AS', 'NEWLINE'");
		return r;
	}, f = (e) => {
		let t = !1;
		n[o] === 47 && (t = !0, o++);
		let r = dw[n[o]];
		r < 0 && s(pw), o++;
		let i = n[o];
		i !== 47 && (t || i !== 45 && i !== 46) || o++;
		let a = l(), c = u(), d = {
			type: "addMessage",
			from: e.actor,
			to: a.actor,
			signalType: r,
			msg: c
		}, f = [
			e,
			a,
			d
		];
		if (t) {
			let t = i === 47;
			d.activate = t, d.centralConnection = t ? 61 : 60, t && f.push({
				type: "centralConnection",
				signalType: 59,
				actor: a.actor
			}), f.push({
				type: "centralConnectionReverse",
				signalType: 60,
				actor: e.actor
			});
		} else i === 45 ? (d.activate = !0, f.push({
			type: "activeStart",
			signalType: 17,
			actor: a.actor
		})) : i === 46 ? f.push({
			type: "activeEnd",
			signalType: 18,
			actor: e.actor
		}) : i === 47 && (d.activate = !0, d.centralConnection = 59, f.push({
			type: "centralConnection",
			signalType: 59,
			actor: a.actor
		}));
		return f;
	}, p = (e) => {
		o++;
		let t = l();
		return [t, {
			type: e,
			actor: t.actor,
			text: u()
		}];
	}, m = () => {
		o++;
		let e = n[o];
		if (e === 37) {
			o++;
			let e = l(), t = e, r = [e.actor, e.actor];
			if (n[o] === 42) {
				o++;
				let n = l();
				t = [e, n], r = [e.actor, n.actor];
			}
			return [t, {
				type: "addNote",
				placement: 2,
				actor: r,
				text: u()
			}];
		}
		e !== 43 && e !== 44 && s("'over', 'left_of', 'right_of'"), o++;
		let t = l();
		return [t, {
			type: "addNote",
			placement: e === 43 ? 0 : 1,
			actor: t.actor,
			text: u()
		}];
	}, h = () => {
		o++;
		let e = {
			type: "sequenceIndex",
			sequenceVisible: !0,
			signalType: 26
		};
		return n[o] === 10 ? (e.sequenceIndex = Number(r[o++]), e.sequenceIndexStep = n[o] === 10 ? Number(r[o++]) : 1) : n[o] === 11 && (o++, e.sequenceVisible = !1), n[o] !== 3 && s("'NEWLINE', 'NUM', 'off'"), o++, e;
	}, g = (e, n, r, i) => {
		let a = e.list, o = e.sections;
		if (o) for (let e = o.length - 2; e >= 0; e -= 2) {
			let s = {
				type: n,
				signalType: i
			};
			s[r] = t.parseMessage(o[e + 1]), a = o[e].concat([s, a]);
		}
		return a;
	}, _ = (e) => {
		let n = e.text, r = e.list;
		switch (e.kind) {
			case 1:
				r[0] = {
					type: "boxStart",
					boxData: t.parseBoxData(n)
				}, r.push({
					type: "boxEnd",
					boxText: n
				});
				break;
			case 2:
				r[0] = {
					type: "loopStart",
					loopText: t.parseMessage(n),
					signalType: 10
				}, r.push({
					type: "loopEnd",
					loopText: n,
					signalType: 11
				});
				break;
			case 3:
				r[0] = {
					type: "rectStart",
					color: t.parseMessage(n),
					signalType: 22
				}, r.push({
					type: "rectEnd",
					color: t.parseMessage(n),
					signalType: 23
				});
				break;
			case 4:
				r[0] = {
					type: "optStart",
					optText: t.parseMessage(n),
					signalType: 15
				}, r.push({
					type: "optEnd",
					optText: t.parseMessage(n),
					signalType: 16
				});
				break;
			case 5:
				r[0] = {
					type: "breakStart",
					breakText: t.parseMessage(n),
					signalType: 30
				}, r.push({
					type: "breakEnd",
					optText: t.parseMessage(n),
					signalType: 31
				});
				break;
			case 6:
				r = g(e, "else", "altText", 13), r[0] = {
					type: "altStart",
					altText: t.parseMessage(n),
					signalType: 12
				}, r.push({
					type: "altEnd",
					signalType: 14
				});
				break;
			case 7:
				r = g(e, "and", "parText", 20), r[0] = {
					type: "parStart",
					parText: t.parseMessage(n),
					signalType: e.startType
				}, r.push({
					type: "parEnd",
					signalType: 21
				});
				break;
			default: r = g(e, "option", "optionText", 28), r[0] = {
				type: "criticalStart",
				criticalText: t.parseMessage(n),
				signalType: 27
			}, r.push({
				type: "criticalEnd",
				signalType: 29
			});
		}
		return r;
	};
	for (; n[o] === 3;) o++;
	c(4);
	let v = [], y = {
		kind: 0,
		text: "",
		startType: 0,
		list: [],
		sections: void 0
	};
	for (;;) {
		let e = n[o], i = y.list;
		if (y.kind === 1) {
			if (e === 32 || e === 34 || e === 35) i.push(d());
			else if (e === 3) i.push([]), o++;
			else if (e === 8) {
				o++;
				let e = _(y);
				y = v.pop(), y.list.push(e);
			} else s("'end', 'NEWLINE', 'participant', 'participant_actor', 'destroy'");
		} else switch (e) {
			case 3:
			case 2:
				i.push([]), o++;
				break;
			case 32:
			case 34:
			case 35:
				i.push(d());
				break;
			case 5: {
				o++;
				let e = n[o];
				e !== 32 && e !== 34 && e !== 35 && s("'participant', 'participant_actor', 'destroy'");
				let t = d();
				t.type = "createParticipant", i.push(t);
				break;
			}
			case 48:
				i.push(f(l())), c(3);
				break;
			case 39: {
				let e = n[o + 1];
				i.push(e === 48 || e === 39 ? p("addALink") : f(l())), c(3);
				break;
			}
			case 38:
				i.push(p("addLinks")), c(3);
				break;
			case 40:
				i.push(p("addProperties")), c(3);
				break;
			case 41:
				i.push(p("addDetails")), c(3);
				break;
			case 36:
				i.push(m()), c(3);
				break;
			case 9:
				i.push(h());
				break;
			case 12:
			case 13: {
				o++;
				let t = l();
				c(3), i.push(e === 12 ? {
					type: "activeStart",
					signalType: 17,
					actor: t.actor
				} : {
					type: "activeEnd",
					signalType: 18,
					actor: t.actor
				});
				break;
			}
			case 14:
			case 15: {
				let n = r[o++].substring(e === 14 ? 6 : 7);
				t.setDiagramTitle(n), i.push(n);
				break;
			}
			case 16: {
				o++;
				let e = c(17).trim();
				t.setAccTitle(e), i.push(e);
				break;
			}
			case 18: {
				o++;
				let e = c(19).trim();
				t.setAccDescription(e), i.push(e);
				break;
			}
			case 20: {
				let e = r[o++].trim();
				t.setAccDescription(e), i.push(e);
				break;
			}
			case 21:
			case 22:
			case 23:
			case 28:
			case 24:
			case 25:
			case 26:
			case 27:
			case 6: {
				o++;
				let t = c(7);
				v.push(y), y = {
					kind: fw[e],
					text: t,
					startType: e === 26 ? 32 : 19,
					list: [[]],
					sections: void 0
				};
				break;
			}
			case 31:
			case 30:
			case 29: {
				y.kind !== (e === 31 ? 6 : e === 30 ? 7 : 8) && s("'end'"), o++;
				let t = c(7);
				(y.sections ??= []).push(i, t), y.list = [];
				break;
			}
			case 8: {
				y.kind === 0 && s("'NEWLINE', 'EOF'"), o++;
				let e = _(y);
				y = v.pop(), y.list.push(e);
				break;
			}
			case 0:
				y.kind !== 0 && s("'end'"), t.apply(i);
				return;
			default: s("'NEWLINE', 'ACTOR', 'participant', 'note', 'end'");
		}
	}
}
var hw = 16, gw = 10, _w = 34, vw = 4, yw = 5, bw = 6, xw = " fill=\"var(--_s)\" stroke=\"var(--_b)\"", Sw = " fill=\"none\" stroke=\"var(--_b)\"", Cw = /* @__PURE__ */ new Set([
	"participant",
	"actor",
	"boundary",
	"control",
	"entity",
	"database",
	"collections",
	"queue"
]), ww = /* @__PURE__ */ new Set([
	"actor",
	"boundary",
	"control",
	"entity",
	"database"
]);
function Tw(e) {
	return Cw.has(e) ? e : "participant";
}
function Ew(e) {
	return ww.has(e);
}
function Dw(e, t, n, r, i = hw) {
	if (Ew(e)) return {
		w: Math.max(40, t.width + 8),
		h: _w + (t.height > 0 ? vw + t.height : 0)
	};
	let a = e === "collections" ? yw : e === "queue" ? 2 * bw : 0;
	return {
		w: Math.max(n, t.width + 2 * i) + a,
		h: Math.max(r, t.height + 2 * gw) + (e === "collections" ? yw : 0)
	};
}
function Ow(e, t, n) {
	let r = X(t), i = (e) => X(n + e);
	switch (e) {
		case "actor": return `<circle cx="${r}" cy="${i(7)}" r="6"${xw}/><path d="M${r},${i(13)}V${i(24)}M${X(t - 10)},${i(17)}H${X(t + 10)}M${X(t - 8)},${i(34)}L${r},${i(24)}L${X(t + 8)},${i(34)}"${Sw}/>`;
		case "boundary": return `<path d="M${X(t - 19)},${i(6)}V${i(28)}M${X(t - 19)},${i(17)}H${X(t - 8)}"${Sw}/><circle cx="${X(t + 3)}" cy="${i(17)}" r="11"${xw}/>`;
		case "control": return `<circle cx="${r}" cy="${i(21)}" r="11"${xw}/><path d="M${X(t + 5)},${i(5)}L${X(t - 1)},${i(10)}L${X(t + 5)},${i(15)}"${Sw}/>`;
		case "entity": return `<circle cx="${r}" cy="${i(15)}" r="11"${xw}/><path d="M${X(t - 11)},${i(30)}H${X(t + 11)}"${Sw}/>`;
		default: {
			let e = X(t - 14), n = X(t + 14);
			return `<path d="M${e},${i(7)}V${i(27)}A14,5 0 0 0 ${n},${i(27)}V${i(7)}A14,5 0 0 0 ${e},${i(7)}Z"${xw}/><path d="M${e},${i(7)}A14,5 0 0 0 ${n},${i(7)}"${Sw}/>`;
		}
	}
}
function kw(e, t, n, r, i, a) {
	let { w: o, h: s } = r, c = " class=\"pele-label\"";
	if (Ew(e)) return Ow(e, t, n) + Z(i, t, n + _w + vw + i.height / 2, c, a);
	let l = t - o / 2;
	if (e === "collections") {
		let e = o - yw, t = s - yw;
		return `<rect x="${X(l + yw)}" y="${X(n)}" width="${X(e)}" height="${X(t)}"${xw}${Ti}/><rect x="${X(l)}" y="${X(n + yw)}" width="${X(e)}" height="${X(t)}"${xw}${Ti}/>` + Z(i, l + e / 2, n + yw + t / 2, c, a);
	}
	if (e === "queue") {
		let e = X(l + bw), r = X(l + o - bw), u = X(n + s), d = X(s / 2);
		return `<path d="M${e},${X(n)}H${r}A${bw},${d} 0 0 1 ${r},${u}H${e}A${bw},${d} 0 0 1 ${e},${X(n)}Z"${xw}/><path d="M${r},${X(n)}A${bw},${d} 0 0 0 ${r},${u}"${Sw}/>` + Z(i, t - bw / 2, n + s / 2, c, a);
	}
	return `<rect x="${X(l)}" y="${X(n)}" width="${X(o)}" height="${X(s)}"${xw}${Ti}/>` + Z(i, t, n + s / 2, c, a);
}
var Aw = [];
function jw(e, t, n, r = 1, i = !1) {
	Aw[e] = {
		dotted: t,
		head: n,
		atStart: r !== 1,
		atEnd: r !== 0,
		bottom: i
	};
}
jw(0, !1, 1), jw(1, !0, 1), jw(3, !1, 2), jw(4, !0, 2), jw(5, !1, 0), jw(6, !0, 0), jw(24, !1, 3), jw(25, !0, 3), jw(33, !1, 1, 2), jw(34, !0, 1, 2);
for (let e of [!1, !0]) {
	let t = e ? 10 : 0;
	jw(41 + t, e, 4), jw(42 + t, e, 4, 1, !0), jw(43 + t, e, 5), jw(44 + t, e, 5, 1, !0), jw(45 + t, e, 4, 0), jw(46 + t, e, 4, 0, !0), jw(47 + t, e, 5, 0), jw(48 + t, e, 5, 0, !0);
}
var Mw = /* @__PURE__ */ new Map([
	[10, "loop"],
	[12, "alt"],
	[15, "opt"],
	[19, "par"],
	[32, "par"],
	[27, "critical"],
	[30, "break"],
	[22, "rect"]
]), Nw = 12, Pw = 28, Fw = 22, Iw = 10, Lw = 4, Rw = 14, zw = 10, Bw = 16, Vw = 20, Hw = 10, Uw = 20, Ww = 240, Gw = 16, Kw = 4, qw = " stroke-dasharray=\"4 4\"";
function Jw(e) {
	return e !== void 0 && Aw[e] !== void 0;
}
function Yw(e, t) {
	let n = Array(e.length), r = Array(e.length), i = 1, a = 1, o = !1;
	for (let s = 0; s < e.length; s++) {
		let c = e[s];
		if (n[s] = NaN, r[s] = !1, c.type === 26) {
			let e = c.message;
			i = e.start || i, a = e.step || a, o = e.visible;
		} else Jw(c.type) && (n[s] = i, r[s] = o || t, i = Math.round((i + a) * 100) / 100);
	}
	return {
		index: n,
		shown: r,
		visible: o
	};
}
var Xw = {
	lines: [],
	widths: [],
	width: 0,
	height: 0,
	size: 0,
	lineHeight: 0
};
function Zw(e, t, n) {
	let r = e[t];
	return typeof r == "number" && r >= 0 && r <= 2e3 ? r : n;
}
function Qw(e, t, n, r, i) {
	let a = X(e - n * fi);
	return i ? `<path class="pele-marker" d="M${X(e)},${X(t)}L${a},${X(t + r * 5)}"/>` : `<path class="pele-marker" d="M${X(e)},${X(t)}L${a},${X(t + r * 4.5)}V${X(t)}Z" fill="var(--_l)" stroke="none"/>`;
}
function $w(e, t, n, r, i) {
	switch (e) {
		case 1: return yi("arrow_point", t, n, r, 0, "var(--_l)");
		case 2: return yi("arrow_cross", t, n, r, 0, "var(--_l)");
		case 3: return `<path class="pele-marker" d="M${X(t - r * fi)},${X(n - 4.5)}L${X(t)},${X(n)}L${X(t - r * fi)},${X(n + 4.5)}" stroke-linejoin="round"/>`;
		case 4: return Qw(t, n, r, i, !1);
		case 5: return Qw(t, n, r, i, !0);
		default: return "";
	}
}
function eT(e) {
	return e === 1 ? fi - 1 : e === 2 ? 4 : 0;
}
function tT(e, t, n) {
	return so(n, (r) => nT(e, t, n, r));
}
function nT(e, t, n, r) {
	let i = t.sequence ?? {}, a = n.fontSize ?? 16, o = Math.round(a * .875), s = Math.round(a * .75), c = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), l = n.icons, u = n.padding ?? 8, d = i.mirrorActors !== !1, f = i.rightAngles === !0, p = Math.min(Zw(i, "actorMargin", 40), r ? 8 : 1 / 0), m = Math.min(Zw(i, "width", 64), r ? 48 : 1 / 0), h = Zw(i, "height", Math.round(a * 1.5) + 20), g = Math.min(Zw(i, "width", 160), r ? Math.max(32, ((n.maxWidth ?? 320) - 2 * u) / Math.max(1, e.actors.size) - p - 24) : 1 / 0), _ = Math.max(4, 14 + Zw(i, "messageMargin", 35) - 35), v = Math.min(Zw(i, "noteMargin", 10), r ? 6 : 1 / 0), y = Math.min(Zw(i, "boxMargin", 10), r ? 6 : 1 / 0), b = i.messageAlign === "left" ? -1 : +(i.messageAlign === "right"), x = r ? 6 : Nw, S = r ? 8 : Bw, C = r ? 12 : Vw, w = r ? 6 : Hw, T = e.messages, E = T.length, D = Yw(T, i.showSequenceNumbers === !0), O = (e, t, n, i = g, a = 0) => {
		let o = Q(e, !1, c, t, r || n ? i : 1 / 0, a);
		return r ? dl(o, c, Math.max(120, i)) : o;
	}, k;
	if (i.hideUnusedParticipants === !0) {
		k = /* @__PURE__ */ new Set();
		for (let e of T) k.add(e.from).add(e.to);
	}
	let A = new Int32Array(E + 1);
	A[E] = -1;
	for (let e = E - 1; e >= 0; e--) A[e] = Jw(T[e].type) ? e : A[e + 1];
	let j = [], M = /* @__PURE__ */ new Map();
	for (let [t, n] of e.actors) {
		if (k && !k.has(t)) continue;
		let i = Tw(n.type), o = O(n.description, a, n.wrap), s = e.createdActors.get(t), c = e.destroyedActors.get(t), l = s === void 0 ? -1 : A[Math.min(s, E)];
		l >= 0 && T[l].to !== t && (l = -1);
		let u = c === void 0 ? -1 : A[Math.min(c, E)];
		u >= 0 && T[u].to !== t && T[u].from !== t && (u = -1), M.set(t, j.length), j.push({
			id: t,
			actor: n,
			kind: i,
			label: o,
			size: Dw(i, o, m, h, r ? 8 : void 0),
			x: 0,
			createAt: l,
			destroyAt: u,
			top: 0,
			lifeStart: 0,
			lifeEnd: -1,
			activations: []
		});
	}
	let N = j.length - 1, P = /* @__PURE__ */ new Map(), F = (e, t, n) => {
		if (e < 0 || t > N) return;
		let r = e * j.length + t;
		(P.get(r) ?? 0) < n && P.set(r, n);
	}, I = (e) => D.shown[e] ? Math.max(Gw, c.width(String(D.index[e]), s, 0) + 8) : 0, L = Array(E);
	for (let e = 0; e < E; e++) {
		let t = T[e], n = t.from === void 0 ? void 0 : M.get(t.from), i = t.to === void 0 ? void 0 : M.get(t.to);
		if (n !== void 0 && i !== void 0 && typeof t.message == "string") {
			if (t.type === 2) {
				let r = O(t.message, o, t.wrap), a = r.width + 2 * v;
				t.placement === 0 ? F(n - 1, n, a + 2 * zw + Iw) : t.placement === 1 ? F(n, n + 1, a + 2 * zw + Iw) : n === i ? (F(n - 1, n, a / 2 + zw), F(n, n + 1, a / 2 + zw)) : F(Math.min(n, i), Math.max(n, i), a - 2 * S), L[e] = {
					kind: 2,
					a: n,
					b: i,
					label: r,
					x: 0,
					w: a
				};
			} else if (Jw(t.type)) {
				let a = O(t.message, o, t.wrap), s = I(e);
				if (n === i) F(n, n + 1, Pw + 8 + a.width + 16 + Iw + s), L[e] = {
					kind: 1,
					a: n,
					b: i,
					label: a,
					x: 0,
					w: 0
				};
				else {
					let o = j[i].createAt === e ? j[i].size.w / 2 : 0, c = t.centralConnection ? 4 * Kw : 0;
					F(Math.min(n, i), Math.max(n, i), (r ? Math.min(a.width, Math.max(16, g - 16)) : a.width) + 2 * x + Iw + s + o + c), L[e] = {
						kind: 0,
						a: n,
						b: i,
						label: a,
						x: 0,
						w: 0
					};
				}
			}
		}
	}
	let R = [];
	for (let e = 0; e <= N; e++) {
		let t = j[e].actor.box, n = R[R.length - 1];
		t && n && n.box === t && n.last === e - 1 ? n.last = e : t && R.push({
			box: t,
			first: e,
			last: e,
			title: O(t.name, o, t.wrap),
			grow: 0
		});
	}
	let z = Array(Math.max(N, 0));
	for (let e = 0; e < N; e++) {
		let t = j[e], n = j[e + 1], r = t.actor.box === n.actor.box ? 0 : (t.actor.box ? y : 0) + (n.actor.box ? y : 0);
		z[e] = Math.max(t.size.w / 2 + n.size.w / 2 + p + r, P.get(e * j.length + e + 1) ?? 0);
	}
	let B = [];
	for (let [e, t] of P) {
		let n = Math.floor(e / j.length), r = e % j.length;
		r - n > 1 && B.push([
			n,
			r,
			t
		]);
	}
	B.sort((e, t) => e[1] - e[0] - (t[1] - t[0]) || e[0] - t[0]);
	for (let [e, t, n] of B) {
		let r = 0;
		for (let n = e; n < t; n++) r += z[n];
		if (r >= n) continue;
		let i = (n - r) / (t - e);
		for (let n = e; n < t; n++) z[n] += i;
	}
	let V = () => {
		for (let e = 1; e <= N; e++) j[e].x = j[e - 1].x + z[e - 1];
	};
	V();
	for (let e of R) {
		let t = j[e.last].x + j[e.last].size.w / 2 - (j[e.first].x - j[e.first].size.w / 2);
		e.grow = Math.max(0, (e.title.width - t) / 2), e.grow !== 0 && (e.first > 0 && (z[e.first - 1] += e.grow), e.last < N && (z[e.last] += e.grow));
	}
	V();
	let H = 1 / 0, U = -1 / 0, ee = (e, t) => {
		e < H && (H = e), t > U && (U = t);
	};
	for (let e of j) ee(e.x - e.size.w / 2, e.x + e.size.w / 2);
	for (let e of R) ee(j[e.first].x - j[e.first].size.w / 2 - y - e.grow, j[e.last].x + j[e.last].size.w / 2 + y + e.grow);
	let te = Array(E), W = [], ne = () => N < 0 ? [0, 120] : [j[0].x - C, j[N].x + C];
	for (let e = 0; e < E; e++) {
		let t = T[e], n = t.type, i = n === void 0 ? void 0 : Mw.get(n), a = L[e];
		if (i !== void 0) {
			let n = {
				kind: i,
				x0: 1 / 0,
				x1: -1 / 0,
				top: 0,
				title: Xw,
				tabW: 0,
				fill: i === "rect" && typeof t.message == "string" ? t.message : "",
				dividers: [e],
				dividerY: [],
				dividerLabels: []
			};
			te[e] = n, W.push(n);
		} else if (n === 13 || n === 20 || n === 28) W[W.length - 1]?.dividers.push(e);
		else if (n === 11 || n === 14 || n === 16 || n === 21 || n === 29 || n === 31 || n === 23) {
			let t = W.pop();
			if (!t) continue;
			if (te[e] = t, t.x0 > t.x1 && ([t.x0, t.x1] = ne()), t.kind !== "rect") {
				t.tabW = c.width(t.kind, s, 1) + 14;
				for (let e = 0; e < t.dividers.length; e++) {
					let n = T[t.dividers[e]].message, i = e === 0 ? t.tabW + 8 : 0, a = t.x1 - t.x0 - 16 - i, s = n ? O(`[${n}]`, o, !0, Math.max(a, r ? Math.min(Ww, g) : Ww)) : Xw;
					s.width > a && (t.x1 += s.width - a), e === 0 ? t.title = s : t.dividerLabels.push(s);
				}
			}
			ee(t.x0, t.x1);
			let n = W[W.length - 1];
			n && (n.x0 = Math.min(n.x0, t.x0 - w), n.x1 = Math.max(n.x1, t.x1 + w));
		} else if (a) {
			let n = j[a.a], i = j[a.b], s, c;
			if (a.kind === 2) {
				if (t.placement === 0) a.x = n.x - zw - a.w;
				else if (t.placement === 1) a.x = n.x + zw;
				else if (a.a === a.b) a.x = n.x - a.w / 2;
				else {
					let e = Math.min(n.x, i.x) - S, s = Math.max(n.x, i.x) + S;
					(r || t.wrap) && (a.label = O(t.message, o, !0, Math.max(g, s - e - 2 * v))), a.w = Math.max(s - e, a.label.width + 2 * v), a.x = (e + s - a.w) / 2;
				}
				s = a.x, c = a.x + a.w;
			} else a.kind === 1 ? (s = n.x, c = n.x + Iw + Pw + 8 + a.label.width + I(e)) : (s = Math.min(n.x, i.x), c = Math.max(n.x, i.x), (r || t.wrap) && (a.label = O(t.message, o, !0, Math.max(g, c - s - 2 * x - Iw))), i.createAt === e && (i.x > n.x ? c += i.size.w / 2 : s -= i.size.w / 2));
			ee(s, c);
			let l = W[W.length - 1];
			l && (l.x0 = Math.min(l.x0, s - C), l.x1 = Math.max(l.x1, c + C));
		}
	}
	let re = 0;
	for (let e of R) re = Math.max(re, e.title.height);
	let G = R.length > 0 ? y + (re > 0 ? re + 4 : 0) : 0, K = 0;
	for (let e of j) e.createAt < 0 && (K = Math.max(K, e.size.h));
	let ie = G + K;
	for (let e of j) e.top = ie - e.size.h, e.lifeStart = ie;
	let q = j.map((e) => e.x), ae = (e, t) => {
		let n = 0, r = q.length;
		for (; n < r;) {
			let t = n + r >> 1;
			q[t] <= e ? n = t + 1 : r = t;
		}
		return n < q.length && q[n] < t;
	}, oe = (e, t, n, r) => {
		if (e.width === 0) return "";
		let i = t - e.width / 2;
		return (ae(i, i + e.width) ? `<rect x="${X(i - 3)}" y="${X(n - e.height / 2 + 2)}" width="${X(e.width + 6)}" height="${X(e.height - 4)}" rx="3" fill="var(--_bg)" stroke="none"/>` : "") + Z(e, t, n, r, l);
	}, J = (e, t = 0) => e.activations.length + t > 0 ? e.x - Iw / 2 : e.x, se = (e, t = 0) => {
		let n = e.activations.length + t;
		return n > 0 ? e.x + Iw / 2 + (n - 1) * Lw : e.x;
	}, ce = [], le = [], ue = "", de = "", fe = "", pe = "", me = "", he = "", ge = (e, t) => {
		let n = e.activations.pop(), r = Math.max(t, n + Rw), i = e.x - Iw / 2 + e.activations.length * Lw;
		return ee(i, i + Iw), le.push(`<rect class="pele-activation" data-id="${Y(e.id)}" x="${X(i)}" y="${X(n)}" width="${Iw}" height="${X(r - n)}" rx="2"/>`), r;
	}, _e = (e, t) => {
		let n = e.x, r = t + 16;
		return e.lifeEnd = r, he += `<path class="pele-destroy" data-id="${Y(e.id)}" d="M${X(n - 6)},${X(r - 6)}L${X(n + 6)},${X(r + 6)}M${X(n + 6)},${X(r - 6)}L${X(n - 6)},${X(r + 6)}"/>`, r + 6;
	}, ve = (e, t, n) => {
		let r = e.actor.properties.get("class");
		return `<g class="pele-node pele-actor pele-actor-${e.kind}${n ? " pele-actor-footer" : ""}${typeof r == "string" ? Ri(r) : ""}" data-id="${Y(e.id)}">` + kw(e.kind, e.x, t, e.size, e.label, l) + "</g>";
	}, ye = (e, t, n, r) => `<g class="pele-sequence-number"><rect x="${X(t - r / 2)}" y="${X(n - Gw / 2)}" width="${X(r)}" height="${Gw}" rx="${Gw / 2}" fill="var(--_l)" stroke="none"/><text x="${X(t)}" y="${X(n + s * .35)}" text-anchor="middle" font-size="${s}" fill="var(--_bg)" stroke="none">${nt(String(D.index[e]))}</text></g>`, be = ie + 6, xe = [];
	for (let e = 0; e < E; e++) {
		let t = T[e], n = t.type, r = L[e], i = te[e];
		if (n === 17) {
			let e = t.from === void 0 ? void 0 : M.get(t.from);
			e !== void 0 && j[e].activations.push(be);
		} else if (n === 18) {
			let e = t.from === void 0 ? void 0 : M.get(t.from);
			e !== void 0 && j[e].activations.length > 0 && (be = Math.max(be, ge(j[e], be)));
		} else if (i && i.dividers[0] === e) xe.push(i), i.kind === "rect" ? (i.top = be + 8, be = i.top) : (i.top = be + 12, be = i.top + Math.max(Uw, i.title.height + 2));
		else if (i) {
			xe.pop();
			let e = be + 12, t = X(i.x0), n = X(i.x1 - i.x0);
			if (i.kind === "rect") {
				let r = i.fill ? Ii([`fill:${i.fill}`]).shape : "";
				ce.push(`<rect class="pele-rect" x="${t}" y="${X(i.top)}" width="${n}" height="${X(e - i.top)}"${Ei((r ? "" : " fill-opacity=\"0.5\"") + r)}/>`);
			} else {
				let r = `<rect x="${t}" y="${X(i.top)}" width="${n}" height="${X(e - i.top)}" fill="none"${Ti}/>`;
				for (let e = 0; e < i.dividerY.length; e++) {
					let n = i.dividerY[e], a = i.dividerLabels[e];
					r += `<path d="M${t},${X(n)}H${X(i.x1)}"${qw}/>` + oe(a, i.x0 + 8 + a.width / 2, n + 2 + a.height / 2, " class=\"pele-frame-label\" fill=\"var(--_m)\" stroke=\"none\"");
				}
				r += `<rect x="${t}" y="${X(i.top)}" width="${X(i.tabW)}" height="${Uw}" fill="var(--_s)"${Ti}/><text class="pele-frame-kind" x="${X(i.x0 + i.tabW / 2)}" y="${X(i.top + Uw / 2 + s * .35)}" text-anchor="middle" font-size="${s}" font-weight="var(--_hw)" fill="var(--_m)" stroke="none">${i.kind}</text>` + oe(i.title, i.x0 + i.tabW + 8 + i.title.width / 2, i.top + Math.max(Uw, i.title.height) / 2, " class=\"pele-frame-label\" fill=\"var(--_m)\" stroke=\"none\""), ue += `<g class="pele-frame pele-frame-${i.kind}">${r}</g>`;
			}
			be = e;
		} else if (n === 13 || n === 20 || n === 28) {
			let e = xe[xe.length - 1];
			if (e) {
				let t = e.dividerLabels[e.dividerY.length];
				e.dividerY.push(be + 12), be += 12 + (t.height > 0 ? t.height : 0);
			}
		} else if (r && r.kind === 2) {
			let e = j[r.a], n = r.label.height + 2 * Math.max(4, v - 4), i = be + 10, a = r.x;
			t.placement === 1 ? a += se(e) - e.x : t.placement === 0 && (a += J(e) - e.x), ee(a, a + r.w), pe += `<g class="pele-note" data-id="i${Y(t.id)}"><rect x="${X(a)}" y="${X(i)}" width="${X(r.w)}" height="${X(n)}"${Ti}/>` + Z(r.label, a + r.w / 2, i + n / 2, " class=\"pele-label\" stroke=\"none\" fill=\"var(--_fg)\"", l) + "</g>", be = i + n;
		} else if (r) {
			let i = Aw[n], a = j[r.a], o = j[r.b], s = r.label, c = I(e), u = 0;
			for (let n = e + 1; n < E; n++) {
				let e = T[n].type;
				if (e === 17) T[n].from === t.to && u++;
				else if (e !== 18 && e !== 59 && e !== 60) break;
			}
			let d = i.bottom ? 1 : -1, p = i.dotted ? qw : "", m = t.centralConnection, h = m === 59 || m === 61, g = m === 60 || m === 61, v = (e, t) => `<circle class="pele-central" cx="${X(e)}" cy="${X(t)}" r="${Kw}" fill="var(--_l)" stroke="none"/>`, y = i.atStart && !i.atEnd, S = eT(i.head), C = "", w;
			if (r.kind === 1) {
				let n = be + _ + Math.max(0, (s.height - Fw) / 2), r = n + Fw, o = g ? a.x + Kw : se(a), m = h ? a.x + Kw : se(a, u), b = Math.max(o, m) + Pw + c / 2;
				g && (C += v(a.x, n)), h && (C += v(a.x, r)), c > 0 && (C += ye(e, y ? m : o, y ? r : n, c), y ? m += c / 2 : o += c / 2);
				let x = (i.atStart ? $w(i.head, o, n, -1, d) : "") + (i.atEnd ? $w(i.head, m, r, -1, -d) : ""), T = X(o + (i.atStart ? S : 0)), E = X(m + (i.atEnd ? S : 0));
				C = `<path d="${f ? `M${T},${X(n)}H${X(b)}V${X(r)}H${E}` : `M${T},${X(n)}H${X(b - 6)}A6,6 0 0 1 ${X(b)},${X(n + 6)}V${X(r - 6)}A6,6 0 0 1 ${X(b - 6)},${X(r)}H${E}`}"${p}/>` + x + C, ee(a.x, b + 8 + s.width), s.width > 0 && (fe += `<g class="pele-edge-label" data-id="i${Y(t.id)}">${Z(s, b + 8 + s.width / 2, (n + r) / 2, "", l)}</g>`), w = Math.max(r, (n + r) / 2 + s.height / 2);
			} else {
				let n = o.x > a.x ? 1 : -1, r = o.createAt === e;
				w = be + _ + Math.max(s.height > 0 ? s.height + 2 : 6, r ? o.size.h / 2 - _ + 6 : 0);
				let l = n > 0 ? se(a) : J(a), f = n > 0 ? J(o, u) : se(o, u);
				if (r && (o.top = w - o.size.h / 2, o.lifeStart = o.top + o.size.h, f = o.x - n * (Ew(o.kind) ? 18 : o.size.w / 2 + 1)), g && (C += v(a.x, w), l = a.x + n * Kw), h && (C += v(o.x, w), f = o.x - n * Kw), c > 0) {
					if (y) {
						let t = h ? f - n * (c / 2 + 2) : f;
						C += ye(e, t, w, c), f = t - n * c / 2;
					} else {
						let t = g ? l + n * (c / 2 + 2) : l;
						C += ye(e, t, w, c), l = t + n * c / 2;
					}
				}
				let m = (i.atStart ? $w(i.head, l, w, -n, d * n) : "") + (i.atEnd ? $w(i.head, f, w, n, d * n) : ""), T = l + (i.atStart ? n * S : 0), E = f - (i.atEnd ? n * S : 0);
				if (C = `<path d="M${X(T)},${X(w)}H${X(E)}"${p}/>` + m + C, s.width > 0) {
					let e = Math.min(l, f), n = Math.max(l, f), r = b < 0 ? e + x + s.width / 2 : b > 0 ? n - x - s.width / 2 : (e + n) / 2;
					ee(r - s.width / 2, r + s.width / 2), fe += `<g class="pele-edge-label" data-id="i${Y(t.id)}">${oe(s, r, w - 4 - s.height / 2, "")}</g>`;
				}
				r && (be = w + o.size.h / 2 - 6);
			}
			de += `<g class="pele-edge pele-message" data-id="i${Y(t.id)}">${C}</g>`, be = Math.max(be, w), a.destroyAt === e && (be = Math.max(be, _e(a, w))), o.destroyAt === e && o !== a && (be = Math.max(be, _e(o, w)));
		}
	}
	be += 20;
	for (let e of j) for (; e.activations.length > 0;) ge(e, be);
	let Se = be;
	if (d) {
		let e = 0;
		for (let t of j) t.lifeEnd >= 0 || (e = Math.max(e, t.size.h), me += ve(t, be, !0));
		Se = be + e;
	}
	let Ce = "";
	for (let e of j) {
		me += ve(e, e.top, !1);
		let t = e.lifeEnd >= 0 ? e.lifeEnd : be;
		t > e.lifeStart && (Ce += `<path class="pele-lifeline" data-id="${Y(e.id)}" d="M${X(e.x)},${X(e.lifeStart)}V${X(t)}"/>`);
	}
	let we = "";
	for (let e of R) {
		let t = j[e.first].x - j[e.first].size.w / 2 - y - e.grow, n = j[e.last].x + j[e.last].size.w / 2 + y + e.grow, r = e.box.fill === "transparent" ? "" : Ii([`fill:${e.box.fill}`]).shape;
		we += `<g class="pele-cluster pele-box"${e.box.name ? ` data-id="${Y(e.box.name)}"` : ""}><rect x="${X(t)}" y="0" width="${X(n - t)}" height="${X(Se + y)}" fill="var(--_a)" stroke="var(--_b)"${Ei((r ? "" : " fill-opacity=\"0.5\"") + r)}/>` + Z(e.title, (t + n) / 2, y / 2 + 2 + e.title.height / 2, " class=\"pele-cluster-label\" fill=\"var(--_m)\"", l) + "</g>";
	}
	R.length > 0 && (Se += y);
	let Te = 0, Ee = "", De = no(n), Oe = Xs(e.title, c, a, r ? De : 1 / 0), ke = r ? dl(Oe, c, Math.max(120, De)) : Oe;
	if (H > U && ee(0, Math.max(ke.width, 40)), ke.width > 0) {
		let e = (H + U) / 2;
		ee(e - ke.width / 2, e + ke.width / 2), Te = -ke.height - 12, Ee = Z(ke, e, Te + ke.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"", l);
	}
	let Ae = Math.ceil(U - H + 2 * u), je = Math.ceil(Se - Te + 2 * u);
	return {
		svg: Ui("sequence", Ae, je, a, n, e, `<g transform="translate(${X(u - H)},${X(u - Te)})">` + Ee + (we ? `<g class="pele-boxes" font-size="${o}">${we}</g>` : "") + (ce.length > 0 ? `<g class="pele-rects" fill="var(--_a)">${ce.reverse().join("")}</g>` : "") + (Ce ? `<g class="pele-lifelines" fill="none" stroke="var(--_b)">${Ce}</g>` : "") + (le.length > 0 ? `<g class="pele-activations" fill="var(--_s)" stroke="var(--_b)">${le.reverse().join("")}</g>` : "") + (ue ? `<g class="pele-frames" font-size="${o}" stroke="var(--_b)">${ue}</g>` : "") + (de ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round">${de}</g>` : "") + (he ? `<g class="pele-destroys" fill="none" stroke="var(--_l)" stroke-width="1.5" stroke-linecap="round">${he}</g>` : "") + (fe ? `<g class="pele-edge-labels" font-size="${o}">${fe}</g>` : "") + (pe ? `<g class="pele-notes" font-size="${o}" fill="var(--_a)" stroke="var(--_b)">${pe}</g>` : "") + (me ? `<g class="pele-nodes">${me}</g>` : "") + "</g>"),
		width: Ae,
		height: je,
		links: []
	};
}
var rT = {
	type: "sequence",
	math: !0,
	parse(e, t, n) {
		let r = t.sequence ?? {}, i = new sw({
			wrap: typeof t.wrap == "boolean" ? t.wrap : void 0,
			sequenceWrap: r.wrap === !0
		});
		return n && i.setDiagramTitle(n), mw(e, i), i;
	},
	render: tT
};
function iT(e) {
	let t = "TB";
	for (let n of e) typeof n != "string" && n.stmt === "dir" && (t = n.value);
	return t;
}
function aT(e, t, r) {
	let i = [], a = [], o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = 0, u = 0, d = (e) => {
		if (!e.id || e.id === "</join></fork>" || e.id === "</choice>") return;
		if (e.cssClasses) {
			let t;
			for (let n of e.cssClasses.split(" ")) {
				let i = r.get(n);
				if (i) {
					t ??= e.cssCompiledStyles.slice();
					for (let e of i.styles) t.push(e);
				}
			}
			t && (e.cssCompiledStyles = t);
		}
		let t = o.get(e.id);
		if (t) {
			let n = e.parentId ?? t.parentId;
			Object.assign(t, e), n !== void 0 && (t.parentId = n);
		} else o.set(e.id, e), i.push(e);
	}, f = (e, n, r) => {
		let i = n.id;
		if (i === "root") return;
		let o = t.get(i), f = o?.classes?.join(" ") ?? "", p = o?.styles ?? [], m = s.get(i);
		if (!m) {
			let e = "rect";
			n.start === !0 ? e = "stateStart" : n.start === !1 && (e = "stateEnd"), n.type !== "default" && (e = n.type), m = {
				shape: e,
				description: i,
				cssClasses: `${f} statediagram-state`,
				cssStyles: p,
				type: void 0,
				dir: void 0,
				colorIndex: void 0
			}, s.set(i, m);
		}
		if (n.description && (Array.isArray(m.description) ? (m.shape = "rectWithTitle", m.description = m.description.concat(n.description)) : m.description.length > 0 ? (m.shape = "rectWithTitle", m.description = m.description === i ? [n.description].flat() : [m.description, n.description].flat()) : (m.shape = "rect", m.description = Array.isArray(n.description) ? n.description.slice() : n.description)), m.description.length === 1 && m.shape === "rectWithTitle" && (m.shape = m.type === "group" ? "roundedWithTitle" : "rect"), !m.type && n.doc) {
			if (m.type = "group", m.dir = iT(n.doc), m.shape = n.type === "divider" ? "divider" : "roundedWithTitle", m.shape === "divider" && e?.id !== void 0 && c.has(e.id)) m.colorIndex = c.get(e.id);
			else {
				let e = u++;
				m.colorIndex = f.trim() !== "" || p.length > 0 ? void 0 : e;
			}
			c.set(i, m.colorIndex), m.cssClasses = `${m.cssClasses} statediagram-cluster ${r ? "statediagram-cluster-alt" : ""}`;
		}
		let h = m.description, g = {
			id: i,
			shape: m.shape,
			label: Array.isArray(h) ? h[0] : h,
			description: Array.isArray(h) ? h.slice(1) : [],
			cssClasses: m.cssClasses,
			cssCompiledStyles: [],
			cssStyles: m.cssStyles,
			type: m.type,
			isGroup: m.type === "group",
			dir: m.dir,
			colorIndex: m.colorIndex
		};
		g.shape === "divider" && (g.label = ""), e && e.id !== "root" && (g.parentId = e.id);
		let _ = n.note;
		if (!_) {
			d(g);
			return;
		}
		let v = (e, t, n, r) => ({
			id: e,
			shape: t,
			label: _.text,
			description: [],
			cssClasses: n,
			cssCompiledStyles: [],
			cssStyles: [],
			type: r ? "group" : "node",
			isGroup: r,
			dir: void 0,
			position: _.position
		}), y = v(`${i}----note-${l++}`, "note", "statediagram-note", !1);
		y.parentId = `${i}----parent`, y.noteFor = i, d(v(y.parentId, "noteGroup", m.cssClasses, !0)), d(y), d(g);
		let b = _.position === "left of", x = b ? y.id : i, S = b ? i : y.id;
		a.push({
			id: `${x}-${S}`,
			start: x,
			end: S,
			label: "",
			classes: "transition note-edge",
			pattern: "dashed"
		});
	}, p = [{
		item: void 0,
		doc: e,
		at: 0,
		alt: !0
	}];
	for (; p.length > 0;) {
		let e = p[p.length - 1];
		if (e.at >= e.doc.length) {
			p.pop();
			continue;
		}
		let t = e.doc[e.at++];
		typeof t != "string" && (t.stmt === "state" ? (f(e.item, t, e.alt), t.doc && p.push({
			item: t,
			doc: t.doc,
			at: 0,
			alt: !e.alt
		})) : t.stmt === "relation" && (f(e.item, t.state1, e.alt), f(e.item, t.state2, e.alt), a.push({
			id: `edge${l++}`,
			start: t.state1.id,
			end: t.state2.id,
			label: t.description ?? "",
			classes: "transition"
		})));
	}
	for (let e of i) if (e.isGroup && e.description.length > 0) throw new n(`Group nodes can only have label. Remove the additional description for node [${e.id}]`, "semantic", { type: "state" });
	return {
		nodes: i,
		edges: a
	};
}
var oT = class {
	type = "state";
	rootDoc = [];
	states = /* @__PURE__ */ new Map();
	relations = [];
	classes = /* @__PURE__ */ new Map();
	links = /* @__PURE__ */ new Map();
	graph = {
		nodes: [],
		edges: []
	};
	title;
	accTitle;
	accDescr;
	dividerCount = 0;
	get direction() {
		let e = "TB";
		for (let t of this.rootDoc) typeof t != "string" && t.stmt === "dir" && (e = t.value);
		return e;
	}
	setRootDoc(e) {
		this.rootDoc = e, this.translate(), this.extract(e);
	}
	extract(e) {
		this.states = /* @__PURE__ */ new Map(), this.relations = [], this.classes = /* @__PURE__ */ new Map();
		let t = Array.isArray(e) ? e : e.doc;
		for (let e of t) if (typeof e != "string") switch (e.stmt) {
			case "state":
				this.addState(e.id.trim(), e.type, e.doc, e.description, e.note);
				break;
			case "relation":
				this.addRelation(e.state1, e.state2, e.description);
				break;
			case "classDef":
				this.addStyleClass(e.id.trim(), e.classes);
				break;
			case "style": {
				let t = e.styleClass.split(",").map((e) => e.replace(/;/g, "").trim());
				for (let n of this.named(e.id.trim())) n.styles = t.slice();
				break;
			}
			case "applyClass":
				this.setCssClass(e.id.trim(), e.styleClass);
				break;
			case "click": this.addLink(typeof e.id == "string" ? e.id : e.id.id, e.url, e.tooltip);
		}
		this.graph = aT(t, this.states, this.classes);
	}
	translate() {
		let e = [[
			"root",
			{
				stmt: "root",
				id: "root",
				doc: this.rootDoc
			},
			!0
		]];
		for (; e.length > 0;) {
			let [t, n, r] = e.pop();
			if (typeof n == "string") continue;
			if (n.stmt === "relation") {
				e.push([
					t,
					n.state2,
					!1
				], [
					t,
					n.state1,
					!0
				]);
				continue;
			}
			if (n.stmt === "state") n.id === "[*]" ? (n.id = t + (r ? "_start" : "_end"), n.start = r) : n.id = n.id.trim();
			else if (n.stmt !== "root") continue;
			if (!n.doc) continue;
			let i = [], a = [];
			for (let e of n.doc) typeof e != "string" && e.stmt === "state" && e.type === "divider" && !e.doc ? (i.push({
				...e,
				doc: a
			}), a = []) : a.push(e);
			i.length > 0 && (a.length > 0 && i.push({
				stmt: "state",
				id: this.getDividerId(),
				type: "divider",
				doc: a
			}), n.doc = i);
			for (let t = n.doc.length - 1; t >= 0; t--) e.push([
				n.id,
				n.doc[t],
				!0
			]);
		}
	}
	addState(e, t = "default", n, r, i, a) {
		let o = e.trim(), s = this.states.get(o);
		if (s ? (s.doc || (s.doc = n), s.type || (s.type = t)) : (s = {
			stmt: "state",
			id: o,
			descriptions: [],
			type: t,
			doc: n,
			note: i,
			classes: [],
			styles: [],
			textStyles: []
		}, this.states.set(o, s)), r) for (let e of Array.isArray(r) ? r : [r]) this.addDescription(o, e.trim());
		if (i && (s.note = i), a) for (let e of a) this.setCssClass(o, e.trim());
	}
	getState(e) {
		return this.states.get(e);
	}
	addLink(e, t, n) {
		this.links.set(e, {
			url: t,
			tooltip: n
		});
	}
	addRelation(e, t, n = "") {
		for (let n of [e, t]) this.addState(n.id, n.type, n.doc, n.description, n.note, n.classes);
		this.relations.push({
			id1: e.id.trim(),
			id2: t.id.trim(),
			relationTitle: n
		});
	}
	addDescription(e, t) {
		this.states.get(e)?.descriptions?.push(t.startsWith(":") ? t.replace(":", "").trim() : t);
	}
	getDividerId() {
		return `divider-id-${++this.dividerCount}`;
	}
	addStyleClass(e, t = "") {
		let n = this.classes.get(e);
		if (n || (n = {
			id: e,
			styles: [],
			textStyles: []
		}, this.classes.set(e, n)), t) for (let e of t.split(",")) {
			let t = e.replace(";", "").trim();
			e.includes("color") && n.textStyles.push(t.replace("fill", "bgFill").replace("color", "fill")), n.styles.push(t);
		}
	}
	setCssClass(e, t) {
		for (let n of this.named(e)) n.classes?.push(t);
	}
	getDirection() {
		for (let e of this.rootDoc) if (typeof e != "string" && e.stmt === "dir") return e.value;
		return "TB";
	}
	setDirection(e) {
		for (let t of this.rootDoc) if (typeof t != "string" && t.stmt === "dir") {
			t.value = e;
			return;
		}
		this.rootDoc.unshift({
			stmt: "dir",
			value: e
		});
	}
	trimColon(e) {
		return e.startsWith(":") ? e.slice(1).trim() : e.trim();
	}
	setAccTitle(e) {
		this.accTitle = e.replace(/^\s+/g, "");
	}
	setAccDescription(e) {
		this.accDescr = e.replace(/\n\s+/g, "\n");
	}
	named(e) {
		let t = [];
		for (let n of e.split(",")) {
			let e = this.states.get(n);
			e ||= (this.addState(n), this.states.get(n.trim())), e && t.push(e);
		}
		return t;
	}
}, sT = /* @__PURE__ */ "$end.INVALID.NL.SD.DESCR.-->.HIDE_EMPTY.scale.WIDTH.COMPOSIT_STATE.STRUCT_START.STRUCT_STOP.STATE_DESCR.AS.ID.FORK.JOIN.CHOICE.CONCURRENT.note.NOTE_TEXT.acc_title.acc_title_value.acc_descr.acc_descr_value.acc_descr_multiline_value.CLICK.STRING.HREF.classDef.CLASSDEF_ID.DEFAULT_CLASSDEF_ID.CLASSDEF_STYLEOPTS.DEFAULT.style.STYLE_IDS.STYLEDEF_STYLEOPTS.class.CLASSENTITY_IDS.STYLECLASS.direction_tb.direction_bt.direction_rl.direction_lr.EDGE_STATE.STYLE_SEPARATOR.left_of.right_of.INVALID".split("."), cT = /direction/gi, lT = /<<(?:fork|join|choice)>>|\[\[(?:fork|join|choice)\]\]/gi, uT = /[\n\r\u2028\u2029]/g, dT = /%%/g, fT = /\{/g;
function pT(e, t) {
	let n = 0, r = -2;
	return (i) => {
		if (r === -2 || i < n || r !== -1 && i > r) {
			e.lastIndex = i;
			let a = e.exec(t);
			r = a ? a.index : -1, n = i;
		}
		return r;
	};
}
function mT(e) {
	let t = e.length, n = [], r = [], i = [], a = [], o = 0, s = 0, c, l = pT(cT, e), u = pT(lT, e), d = pT(uT, e), f = pT(dT, e), p = pT(fT, e), m = -1, h = -1, g = [
		-1,
		-1,
		-1,
		-1
	], _ = [
		0,
		0,
		0,
		0
	], v = -1, y = -1, b = [
		-1,
		-1,
		-1,
		-1,
		-1,
		-1
	], x = (t, a, o) => {
		n.push(t), r.push(e.slice(a, o)), i.push(a), s = o;
	}, S = (e, t, a, o) => {
		n.push(e), r.push(t), i.push(a), s = o;
	}, C = (e) => {
		a.push(o), o = e;
	}, w = () => {
		a.length > 0 && (o = a.pop());
	}, T = (t, n) => {
		for (let r = 0; r < t.length; r++) {
			let i = t.charCodeAt(r), a = e.charCodeAt(n + r);
			if (a !== i && !(i >= 97 && i <= 122 && a === i - 32)) return !1;
		}
		return !0;
	}, E = (n) => {
		let r = n;
		for (; r < t && G(e.charCodeAt(r));) r++;
		return r;
	}, D = (n) => {
		let r = n;
		for (; r < t && J(e.charCodeAt(r));) r++;
		return r;
	}, O = (n) => {
		let r = e.indexOf("\n", n);
		return r === -1 ? t : r;
	}, k = (e) => {
		let n = d(e);
		return n === -1 ? t : n;
	}, A = (e) => {
		if (e < m || e > h) {
			let n = l(e), r = n === -1 ? t : k(e);
			m = e, h = r, g[0] = g[1] = g[2] = g[3] = -1;
			for (let e = n; e !== -1 && e < r; e = l(e + 1)) {
				let t = E(e + 9);
				if (t === e + 9) continue;
				let n = T("tb", t) ? 0 : T("bt", t) ? 1 : T("rl", t) ? 2 : T("lr", t) ? 3 : -1;
				n !== -1 && (g[n] = e, _[n] = t + 2);
			}
		}
		for (let t = 0; t < 4; t++) if (g[t] >= e) return t;
		return -1;
	}, j = (n) => {
		if (n < v || n > y) {
			let r = u(n), i = r === -1 ? t : k(n);
			v = n, y = i, b.fill(-1);
			for (let t = r; t !== -1 && t < i; t = u(t + 1)) {
				let n = e.charCodeAt(t + 2) | 32;
				b[(e.charCodeAt(t) === 60 ? 0 : 3) + (n === 102 ? 0 : n === 106 ? 1 : 2)] = t;
			}
		}
		for (let e = 0; e < 6; e++) if (b[e] >= n) return e;
		return -1;
	}, M = (e, t) => {
		let n = f(e);
		return n === -1 || n + 2 > t ? (x(14, e, t), !0) : n === e ? (s = t, !1) : (x(14, e, n), !0);
	}, N = (e) => (n.push(e), r.push(""), i.push(s), {
		types: n,
		texts: r,
		starts: i,
		error: c
	});
	for (;;) {
		if (s >= t) {
			switch (o) {
				case 0:
					x(2, t, t);
					break;
				case 6:
					x(22, t, t);
					break;
				case 7:
					x(24, t, t);
					break;
				case 8:
					x(25, t, t);
					break;
				case 10:
					x(32, t, t);
					break;
				case 12:
					x(39, t, t);
					break;
				case 14:
					x(36, t, t);
					break;
				case 3:
					x(12, t, t);
					break;
				case 18:
					x(20, t, t);
					break;
				case 4:
				case 19: x(14, t, t);
			}
			return N(0);
		}
		let n = e.charCodeAt(s);
		switch (o) {
			case 0:
			case 1: {
				let r = o === 0, i = n | 32;
				if (r) {
					if (i === 99 && T("click", s) && !J(e.charCodeAt(s + 5))) {
						x(26, s, s + 5);
						continue;
					}
					if (i === 104 && T("href", s) && !J(e.charCodeAt(s + 4))) {
						x(28, s, s + 4);
						continue;
					}
					if (n === 34) {
						let t = e.indexOf("\"", s + 1);
						if (t !== -1) {
							x(27, s, t + 1);
							continue;
						}
					}
					if (i === 100 && T("default", s) && !J(e.charCodeAt(s + 7))) {
						x(33, s, s + 7);
						continue;
					}
					let t = A(s);
					if (t !== -1) {
						x(40 + t, s, O(_[t]));
						continue;
					}
					if (n === 10) {
						let t = s + 1;
						for (; e.charCodeAt(t) === 10;) t++;
						x(2, s, t);
						continue;
					}
					if (G(n)) {
						s = E(s);
						continue;
					}
				} else if (n !== 10 && G(n)) {
					let n = s + 1;
					for (; n < t && e.charCodeAt(n) !== 10 && G(e.charCodeAt(n));) n++;
					s = n;
					continue;
				}
				if (n === 35 || n === 37 && e.charCodeAt(s + 1) === 37 && e.charCodeAt(s + 2) !== 123) {
					s = O(s);
					continue;
				}
				if (i === 115) {
					if (r && T("scale", s)) {
						let e = E(s + 5);
						if (e > s + 5) {
							x(7, s, e), C(5);
							continue;
						}
					}
					if (T("style", s)) {
						let e = E(s + 5);
						if (e > s + 5) {
							x(34, s, e), C(13);
							continue;
						}
					}
					if (T("state", s)) {
						let e = E(s + 5);
						if (e > s + 5) {
							s = e, C(2);
							continue;
						}
						if (r && T("diagram", s + 5)) {
							let t = T("-v2", s + 12) ? s + 15 : s + 12;
							if (e = E(t), e > t) {
								x(3, s, e);
								continue;
							}
						}
					}
				} else if (i === 99) {
					if (T("class", s)) {
						let e = T("def", s + 5), t = e ? s + 8 : s + 5, n = E(t);
						if (n > t) {
							x(e ? 29 : 37, s, n), C(e ? 9 : 11);
							continue;
						}
					}
				} else if (i === 97 && r && (T("acctitle", s) || T("accdescr", s))) {
					let t = (e.charCodeAt(s + 3) | 32) == 116, n = E(s + 8), r = e.charCodeAt(n);
					if (r === 58) {
						x(t ? 21 : 23, s, E(n + 1)), C(t ? 6 : 7);
						continue;
					}
					if (r === 123 && !t) {
						s = E(n + 1), C(8);
						continue;
					}
				}
				if (r) {
					if (n === 123) {
						x(10, s, s + 1), C(1);
						continue;
					}
				} else {
					let e = A(s);
					if (e !== -1) {
						x(40 + e, s, O(_[e]));
						continue;
					}
					if (n === 125) {
						x(11, s, s + 1), w();
						continue;
					}
					if (n === 10) {
						s++;
						continue;
					}
				}
				if (i === 110 && T("note", s)) {
					let e = E(s + 4);
					if (e > s + 4) {
						x(19, s, e), C(15);
						continue;
					}
				}
				if (r && i === 104 && T("hide empty description", s) && !J(e.charCodeAt(s + 22))) {
					x(6, s, s + 22);
					continue;
				}
				if (n === 91 && e.charCodeAt(s + 1) === 42 && e.charCodeAt(s + 2) === 93) {
					x(44, s, s + 3);
					continue;
				}
				let a = s;
				for (; a < t;) {
					let t = e.charCodeAt(a);
					if (t === 58 || t === 45 || t === 123 || G(t)) break;
					a++;
				}
				if (a > s) {
					M(s, a);
					continue;
				}
				if (n === 58) {
					for (a = s + 1; a < t;) {
						let n = e.charCodeAt(a);
						if (n === 10 || n === 59) break;
						if (n === 58) {
							let n = e.charCodeAt(a + 1);
							if (a + 1 >= t || n === 58 || n === 10 || n === 59) break;
							a++;
						}
						a++;
					}
					if (a > s + 1) {
						S(4, e.slice(s, a).trim(), s, a);
						continue;
					}
					if (e.charCodeAt(s + 1) === 58 && e.charCodeAt(s + 2) === 58) {
						x(45, s, s + 3);
						continue;
					}
				} else if (n === 45 && e.charCodeAt(s + 1) === 45) {
					if (e.charCodeAt(s + 2) === 62) {
						x(5, s, s + 3);
						continue;
					}
					if (!r) {
						x(18, s, s + 2);
						continue;
					}
				}
				if (!r) return N(1);
				x(48, s, s + 1);
				continue;
			}
			case 2: {
				if (n !== 10 && G(n)) {
					let n = s + 1;
					for (; n < t && e.charCodeAt(n) !== 10 && G(e.charCodeAt(n));) n++;
					s = n;
					continue;
				}
				if (n === 35 || n === 37 && e.charCodeAt(s + 1) === 37 && e.charCodeAt(s + 2) !== 123) {
					s = O(s);
					continue;
				}
				let r = j(s);
				if (r !== -1) {
					let t = b[r], n = r === 2 || r === 5;
					S(n ? 17 : r % 3 == 0 ? 15 : 16, e.slice(s, t).trim(), s, t + (n ? 10 : 8)), w();
					continue;
				}
				if (n === 34) {
					s++, C(3);
					continue;
				}
				let i = n === 10 ? E(s) : s;
				if (T("as", i)) {
					let e = E(i + 2);
					if (e > i + 2) {
						x(13, s, e), C(4);
						continue;
					}
				}
				if (n === 10) {
					s++, w();
					continue;
				}
				if (n === 123) {
					x(10, s, s + 1), w(), C(1);
					continue;
				}
				if (J(n)) {
					let t = D(s), n = E(t);
					if (n > t && J(e.charCodeAt(n))) {
						let t = p(n + 1);
						if (t !== -1 && t < k(n)) return c = `Error: State name must be a single word. Found: "${e.slice(s, t + 1).trim()}"`, N(1);
					}
				}
				let a = s + 1;
				for (; a < t;) {
					let t = e.charCodeAt(a);
					if (t === 123 || G(t)) break;
					a++;
				}
				x(9, s, a);
				continue;
			}
			case 3: {
				if (n === 34) {
					s++, w();
					continue;
				}
				let r = e.indexOf("\"", s);
				x(12, s, r === -1 ? t : r);
				continue;
			}
			case 4: {
				let n = s;
				for (; n < t;) {
					let t = e.charCodeAt(n);
					if (t === 10 || t === 123) break;
					n++;
				}
				M(s, n) && w();
				continue;
			}
			case 5: {
				if (n >= 48 && n <= 57) {
					let n = s + 1;
					for (; n < t && e.charCodeAt(n) >= 48 && e.charCodeAt(n) <= 57;) n++;
					x(8, s, n);
					continue;
				}
				let r = E(s);
				if (r > s && T("width", r) && !J(e.charCodeAt(r + 5))) {
					s = r + 5, w();
					continue;
				}
				return N(1);
			}
			case 6:
				x(22, s, O(s)), w();
				continue;
			case 7:
				x(24, s, O(s)), w();
				continue;
			case 8: {
				if (n === 125) {
					s++, w();
					continue;
				}
				let r = e.indexOf("}", s);
				x(25, s, r === -1 ? t : r);
				continue;
			}
			case 9: {
				let e = T("default", s) && E(s + 7) > s + 7, t = e ? s + 7 : D(s), n = E(t);
				if (t === s || n === t) return N(1);
				x(e ? 31 : 30, s, n), w(), C(10);
				continue;
			}
			case 10:
				x(32, s, O(s)), w();
				continue;
			case 11: {
				let t = D(s);
				if (t === s) return N(1);
				for (; e.charCodeAt(t) === 44;) {
					let e = E(t + 1), n = D(e);
					if (n === e) break;
					t = n;
				}
				x(38, s, t), w(), C(12);
				continue;
			}
			case 12:
				x(39, s, O(s)), w();
				continue;
			case 13: {
				let n = s;
				for (; n < t && (J(e.charCodeAt(n)) || e.charCodeAt(n) === 44);) n++;
				let r = E(n);
				if (n === s || r === n) return N(1);
				x(35, s, r), w(), C(14);
				continue;
			}
			case 14:
				x(36, s, O(s)), w();
				continue;
			case 15:
				if (T("left of", s) && !J(e.charCodeAt(s + 7))) {
					x(46, s, s + 7), w(), C(16);
					continue;
				}
				if (T("right of", s) && !J(e.charCodeAt(s + 8))) {
					x(47, s, s + 8), w(), C(16);
					continue;
				}
				if (n === 34) {
					s++, w(), C(18);
					continue;
				}
				return N(1);
			case 16: {
				let n = E(s), r = n;
				for (; r < t;) {
					let t = e.charCodeAt(r);
					if (t === 58 || t === 45 || G(t)) break;
					r++;
				}
				if (r === n) return N(1);
				M(s, r) && (w(), C(17));
				continue;
			}
			case 17: {
				let n = E(s);
				if (e.charCodeAt(n) === 58) {
					let r = n + 1;
					for (; r < t;) {
						let t = e.charCodeAt(r);
						if (t === 58 || t === 10 || t === 59) break;
						r++;
					}
					if (r > n + 1) {
						S(20, e.slice(s + 2, r).trim(), s, r), w();
						continue;
					}
				}
				let r = e.indexOf("\n", s), i = -1;
				for (; r !== -1 && (i = E(r), !T("end note", i) || J(e.charCodeAt(i + 8)));) r = e.indexOf("\n", i);
				if (r === -1) return N(1);
				S(20, e.slice(s, i).trim(), s, i + 8), w();
				continue;
			}
			case 18: {
				let r = E(s);
				if (T("as", r)) {
					x(13, s, E(r + 2)), w(), C(19);
					continue;
				}
				if (n === 34) {
					s++;
					continue;
				}
				let i = e.indexOf("\"", s);
				x(20, s, i === -1 ? t : i);
				continue;
			}
			case 19:
				M(s, O(s)) && w();
				continue;
		}
	}
}
var hT = [
	"TB",
	"BT",
	"RL",
	"LR"
], gT = "'NL', 'ID', 'HIDE_EMPTY', 'scale', 'COMPOSIT_STATE', 'STATE_DESCR', 'FORK', 'JOIN', 'CHOICE', 'CONCURRENT', 'note', 'acc_title', 'acc_descr', 'acc_descr_multiline_value', 'CLICK', 'classDef', 'style', 'class', 'direction_tb', 'direction_bt', 'direction_rl', 'direction_lr', 'EDGE_STATE'";
function _T(e, t) {
	let { types: a, texts: o, starts: s, error: c } = mT(e), l = 0, u = (t) => {
		let o = a[l];
		throw o === 1 ? c === void 0 ? i("state", e, s[l], "", !0) : new n(c, "syntax", {
			type: "state",
			...r(e, s[l])
		}) : i("state", e, s[l], `Expecting ${t}, got '${sT[o]}'`);
	}, d = (e) => (a[l] !== e && u(`'${sT[e]}'`), o[l++]), f = () => {
		let e = a[l];
		e !== 14 && e !== 44 && u("'ID', 'EDGE_STATE'");
		let t = o[l++].trim();
		return a[l] === 45 ? (l++, {
			stmt: "state",
			id: t,
			classes: [d(14).trim()],
			type: "default",
			description: ""
		}) : {
			stmt: "state",
			id: t,
			type: "default",
			description: ""
		};
	};
	for (; a[l] === 2;) l++;
	a[l] !== 3 && u("'NL', 'SD'"), l++;
	let p = [], m = [], h = (e) => {
		e !== "nl" && p.push(e);
	}, g = (e, t) => {
		l++;
		let n = [];
		p.push({
			stmt: "state",
			id: e,
			type: "default",
			description: t,
			doc: n
		}), m.push(p), p = n;
	};
	for (;;) {
		let e = a[l];
		switch (e) {
			case 2:
				l++;
				break;
			case 14:
			case 44: {
				let e = f();
				if (a[l] === 4) e.description = t.trimColon(o[l++]), h(e);
				else if (a[l] === 5) {
					l++;
					let n = f();
					a[l] === 4 ? h({
						stmt: "relation",
						state1: e,
						state2: n,
						description: t.trimColon(o[l++])
					}) : h({
						stmt: "relation",
						state1: e,
						state2: n
					});
				} else h(e);
				break;
			}
			case 6:
				h(o[l++]);
				break;
			case 7:
				l++, d(8), h(o[l - 2]);
				break;
			case 9:
				a[l + 1] === 10 ? g(o[l++], "") : h(o[l++]);
				break;
			case 12: {
				let e = o[l++];
				d(13);
				let t = d(14);
				if (a[l] === 10) g(t, e);
				else if (t.includes(":")) {
					let n = t.split(":");
					h({
						stmt: "state",
						id: n[0],
						type: "default",
						description: [e.trim(), n[1]]
					});
				} else h({
					stmt: "state",
					id: t,
					type: "default",
					description: e.trim()
				});
				break;
			}
			case 15:
				h({
					stmt: "state",
					id: o[l++],
					type: "fork"
				});
				break;
			case 16:
				h({
					stmt: "state",
					id: o[l++],
					type: "join"
				});
				break;
			case 17:
				h({
					stmt: "state",
					id: o[l++],
					type: "choice"
				});
				break;
			case 18:
				l++, h({
					stmt: "state",
					id: t.getDividerId(),
					type: "divider"
				});
				break;
			case 19: {
				let e = o[l++];
				if (a[l] === 46 || a[l] === 47) {
					let e = o[l++].trim();
					h({
						stmt: "state",
						id: d(14).trim(),
						note: {
							position: e,
							text: d(20).trim()
						}
					});
				} else a[l] !== 20 && u("'NOTE_TEXT', 'left_of', 'right_of'"), l++, d(13), d(14), h(e);
				break;
			}
			case 40:
			case 41:
			case 42:
			case 43: {
				let n = hT[e - 40];
				l++, t.setDirection(n), h({
					stmt: "dir",
					value: n
				});
				break;
			}
			case 21: {
				l++;
				let e = d(22).trim();
				t.setAccTitle(e), h(e);
				break;
			}
			case 23: {
				l++;
				let e = d(24).trim();
				t.setAccDescription(e), h(e);
				break;
			}
			case 25: {
				let e = o[l++].trim();
				t.setAccDescription(e), h(e);
				break;
			}
			case 26: {
				l++;
				let e = f(), t, n = "";
				a[l] === 28 ? (l++, t = d(27)) : (a[l] !== 27 && u("'STRING', 'HREF'"), t = o[l++], n = d(27)), d(2), h({
					stmt: "click",
					id: e,
					url: t,
					tooltip: n
				});
				break;
			}
			case 29:
				l++, h({
					stmt: "classDef",
					id: d(30).trim(),
					classes: d(32).trim()
				});
				break;
			case 34:
				l++, h({
					stmt: "style",
					id: d(35).trim(),
					styleClass: d(36).trim()
				});
				break;
			case 37:
				l++, h({
					stmt: "applyClass",
					id: d(38).trim(),
					styleClass: d(39).trim()
				});
				break;
			case 11:
				m.length === 0 && u(`'$end', ${gT}`), l++, p = m.pop();
				break;
			case 0: return m.length > 0 && u(`'STRUCT_STOP', ${gT}`), t.setRootDoc(p), p;
			default: u(m.length > 0 ? `'STRUCT_STOP', ${gT}` : `'$end', ${gT}`);
		}
	}
}
var vT = 40, yT = 16, bT = 44, xT = 16, ST = 10, CT = 16, wT = 10, TT = 26, ET = 8, DT = 320, OT = 10, kT = 8, AT = " fill=\"var(--_s)\" stroke=\"var(--_b)\"", jT = " fill=\"none\" stroke=\"var(--_b)\"", MT = /(?:^| )statediagram-(?:state|cluster-alt|cluster|note)(?= |$)/g, NT = /* @__PURE__ */ new Map([
	["rectWithTitle", 1],
	["stateStart", 2],
	["stateEnd", 3],
	["choice", 4],
	["fork", 5],
	["join", 6],
	["note", 7],
	["divider", 10]
]), PT = [
	"pele-node pele-state",
	"pele-node pele-state",
	"pele-node pele-state-start",
	"pele-node pele-state-end",
	"pele-node pele-state-choice",
	"pele-node pele-state-fork",
	"pele-node pele-state-join",
	"pele-note",
	"pele-cluster pele-state-composite"
];
function FT(e) {
	return e === "TB" || e === "BT";
}
function IT(e, t, n) {
	let r = e.state?.[t];
	return typeof r == "number" && r > 0 ? Math.min(r, 2e3) : n;
}
function LT(e) {
	let t = 0, n = e.length;
	for (; t < n && e.charCodeAt(t) === 34;) t++;
	for (; n > t && e.charCodeAt(n - 1) === 34;) n--;
	return e.slice(t, n);
}
function RT(e, t, n) {
	return e < t ? t : e > n ? n : e;
}
function zT(e, t, n, r, i) {
	return `<rect x="${X(e)}" y="${X(t)}" width="${X(n)}" height="${X(r)}"${i}/>`;
}
function BT(e, t, n, r) {
	let i = ii(0, 0);
	return i.isGroup = !0, i.dir = e, i.padX = t, i.padTop = n, i.padBottom = r, i;
}
function VT(e, t, n) {
	return oo(e.direction) ? ao(n, (r) => HT(e, t, n, r)) : HT(e, t, n, !1);
}
function HT(e, t, n, r) {
	let i = e.graph, a = t.flowchart?.curve, o = n.fontSize ?? 16, s = Math.round(o * .875), c = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), l = IT(t, "wrappingWidth", 200), u = n.padding ?? 8, d = n.icons, f = r ? "TB" : Br(e.direction), m = Q(void 0, !1, c, o, 0), h = (e, t, n, r = 0) => Q(e, !0, c, t, n, r), g = /* @__PURE__ */ new Map(), _ = [], v = [], y = (e, t, n) => (_.push({
		node: e,
		kind: t,
		style: void 0,
		label: m,
		lines: [],
		w: 0,
		h: 0,
		titleH: 0
	}), n && v.push(n), _.length - 1);
	for (let e of i.nodes) {
		if (e.shape === "noteGroup") continue;
		let t = e.isGroup ? e.shape === "divider" ? 9 : 8 : NT.get(e.shape) ?? 0;
		g.set(e.id, y(e, t, void 0));
	}
	let b = _.length, x = [];
	for (let e = 0; e < b; e++) {
		let t = _[e].node.parentId, n = t === void 0 ? void 0 : g.get(t);
		x.push(n !== void 0 && n !== e && _[n].node.isGroup ? n : -1);
	}
	{
		let e = [];
		for (let t = 0; t < b; t++) e.push([]);
		let t = [], n = new Uint8Array(b);
		for (let r = 0; r < b; r++) x[r] === -1 ? (n[r] = 1, t.push(r)) : e[x[r]].push(r);
		let r = 0, i = () => {
			for (; r < t.length; r++) for (let i of e[t[r]]) n[i] || (n[i] = 1, t.push(i));
		};
		i();
		let a = new Int32Array(b).fill(-1);
		for (let e = 0; e < b; e++) {
			if (n[e]) continue;
			let r = e;
			for (; a[r] !== e;) a[r] = e, r = x[r];
			x[r] = -1, n[r] = 1, t.push(r), i();
		}
	}
	let S = new Int32Array(b).fill(-1);
	for (let e = 0; e < b; e++) {
		let t = _[e].node.noteFor, n = t === void 0 ? void 0 : g.get(t);
		n !== void 0 && (S[e] = n, x[e] = x[n]);
	}
	let C = (e) => Br(_[e].node.dir), w = (e) => FT(x[e] === -1 ? f : C(x[e])), T = new Int32Array(b), E = new Uint8Array(b), D = Array(b).fill(1 / 0), O = 0, k = new Int32Array(2 * b);
	for (let e of i.edges) {
		let t = g.get(e.start), n = g.get(e.end);
		if (t !== void 0 && n !== void 0) {
			if (e.pattern === "dashed") {
				E[_[t].kind === 7 ? n : t] = 1;
				continue;
			}
			T[t] = Math.max(T[t], ++k[2 * t]), T[n] = Math.max(T[n], ++k[2 * n + 1]), D[t] === 1 / 0 && (D[t] = O++), D[n] === 1 / 0 && (D[n] = O++);
		}
	}
	for (let e = 0; e < b; e++) {
		let t = _[e], n = t.node, r = Ii(n.cssStyles.length > 0 ? n.cssCompiledStyles.concat(n.cssStyles) : n.cssCompiledStyles), i = +!!r.bold | (r.italic ? 2 : 0), a = r.fontSize ?? o;
		t.style = r;
		let c;
		switch (t.kind) {
			case 8:
				t.label = h(n.label, a, 4e3, i), t.titleH = t.label.height > 0 ? t.label.height + 12 : 0, c = BT(C(e), xT, t.titleH + xT, xT), c.minW = t.label.width + 2 * xT;
				break;
			case 9:
				c = BT(C(e), ST, ST, ST);
				break;
			case 2:
				t.w = t.h = 14;
				break;
			case 3:
				t.w = t.h = 18;
				break;
			case 4:
				t.w = t.h = 30;
				break;
			case 5:
			case 6: {
				let n = RT(40 * T[e] + 16, 72, 320);
				t.w = w(e) ? n : kT, t.h = w(e) ? kT : n;
				break;
			}
			case 10: break;
			case 7:
				t.label = h(n.label, s, Math.max(l, DT)), t.w = t.label.width + 24, t.h = t.label.height + 16;
				break;
			default: {
				t.label = h(n.label, a, l, i);
				let e = t.label.width, r = t.label.height + 2 * wT;
				if (t.kind === 1) {
					r += 14;
					for (let a of n.description) {
						let n = h(a === "" ? " " : a, s, l, i);
						t.lines.push(n), n.width > e && (e = n.width), r += n.height;
					}
				}
				t.w = Math.max(e + 2 * CT, 56), t.h = r;
			}
		}
		c ??= ii(t.w, t.h), (t.kind === 0 || t.kind === 1) && (c.span = (w(e) ? t.w : t.h) - 24), v.push(c);
	}
	let A = [], j = [], M = [], N = new Int32Array(b), P = new Float64Array(b), F = new Float64Array(b), I = /* @__PURE__ */ new Map(), L = (e, t) => {
		if (!v[e].isGroup) return !1;
		for (let n = x[t]; n !== -1; n = x[n]) if (n === e) return !0;
		return !1;
	}, R = (e, t) => (I.set(A.length, e), D.push(t ? -1 : 1 / 0), y(void 0, 10, ii(0, 0, e)));
	for (let e of i.edges) {
		let t = g.get(e.start), n = g.get(e.end);
		if (t === void 0 || n === void 0) continue;
		let r = h(e.label, s, l), i = r.width > 0 ? r.width + 12 : 0;
		t === n ? (N[t]++, P[t] = Math.max(P[t], i), F[t] += r.height) : L(t, n) ? t = R(t, !0) : L(n, t) && (n = R(n, !1)), M.push(e), j.push(r), A.push({
			src: t,
			dst: n,
			minlen: 1,
			labelW: i,
			labelH: r.height > 0 ? r.height + 4 : 0,
			route: [],
			labelX: 0,
			labelY: 0
		});
	}
	for (let e = 0; e < b; e++) {
		if (S[e] !== -1) continue;
		let t = v[e], n = 0;
		if (N[e] > 0) {
			let r = TT + (N[e] - 1) * 8;
			n = w(e) ? r + P[e] : r * .75 + 4 + F[e], t.isGroup || (w(e) ? (t.w += 2 * n, t.h = Math.max(t.h, F[e])) : (t.h += 2 * n, t.w = Math.max(t.w, P[e])), n = 0);
		}
		if (!E[e] && n === 0) {
			t.parent = x[e];
			continue;
		}
		let r = w(e) ? BT("LR", n, 0, 0) : BT("TB", 0, n, n);
		r.parent = x[e], D.push(D[e]), v[e].parent = y(void 0, 10, r);
	}
	for (let e = 0; e < b; e++) S[e] !== -1 && (v[e].parent = v[S[e]].parent);
	{
		let e = [];
		for (let t = 0; t < v.length; t++) e.push([]);
		let t = [];
		for (let n = 0; n < v.length; n++) {
			let r = v[n].parent;
			r >= 0 ? e[r].push(n) : t.push(n);
		}
		let n = (e) => _[e].kind === 2 ? 0 : 1, r = (e, t) => n(e) - n(t) || (D[e] === D[t] ? 0 : D[e] < D[t] ? -1 : 1) || e - t, i = 0, a = t.sort(r).reverse();
		for (; a.length > 0;) {
			let t = a.pop();
			v[t].seq = i++;
			let n = e[t].sort(r);
			for (let e = n.length - 1; e >= 0; e--) a.push(n[e]);
		}
	}
	let z = si(v, A, f, {
		nodeSep: IT(t, "nodeSpacing", vT),
		edgeSep: yT,
		rankSep: IT(t, "rankSpacing", bT),
		portSep: 20,
		tracks: a === "step" || a === "stepBefore" || a === "stepAfter",
		straight: a === "linear",
		headRoom: vi("arrow_point")
	}), B = Math.ceil(z.width + 2 * u), V = Math.ceil(z.height + 2 * u), H = [], U = /* @__PURE__ */ new Map();
	for (let e of A) {
		let t = e.route;
		for (let e = 3; e < t.length - 3; e += 3) {
			let n = Math.round(t[e + 1]), r = U.get(n);
			r ? r.push(t[e]) : U.set(n, [t[e]]);
		}
	}
	let ee = [];
	for (let e = 0; e < v.length; e++) ee.push([]);
	let te = [];
	for (let e = 0; e < v.length; e++) {
		let t = v[e].parent;
		t >= 0 ? ee[t].push(e) : te.push(e);
	}
	let W = te.slice();
	for (let e = 0; e < te.length; e++) for (let t of ee[te[e]]) te.push(t);
	let ne = "", re = "", G = "", K = "", ie = (e, t, n, r, i) => {
		let a = e.filter((e) => _[e].kind === 9);
		if (a.length < 2) return;
		let o = (e, t) => t ? v[e].x - v[e].w / 2 : v[e].y - v[e].h / 2, s = (e, t) => t ? v[e].x + v[e].w / 2 : v[e].y + v[e].h / 2;
		for (let e of [!0, !1]) {
			let c = a.slice().sort((t, n) => o(t, e) - o(n, e) || t - n), l = !0;
			for (let t = 1; t < c.length; t++) s(c[t - 1], e) > o(c[t], e) + .5 && (l = !1);
			if (l) {
				for (let a = 1; a < c.length; a++) {
					let l = X((s(c[a - 1], e) + o(c[a], e)) / 2 + u);
					re += `<path class="pele-divider" d="M${e ? `${l},${X(n)}V${X(i)}` : `${X(t)},${l}H${X(r)}`}"/>`;
				}
				return;
			}
		}
		for (let e of a) {
			let t = v[e];
			re += zT(t.x - t.w / 2 + u, t.y - t.h / 2 + u, t.w, t.h, ` class="pele-divider" rx="${OT}"`);
		}
	};
	ie(W, u / 2, u / 2, B - u / 2, V - u / 2);
	for (let t of te) {
		let r = _[t], i = r.node, a = r.style;
		if (i === void 0 || a === void 0 || r.kind >= 9) continue;
		let o = v[t], c = o.x + u, l = o.y + u, f = r.w, m = r.h, h = ` class="pele-label"${a.text}`, g;
		switch (r.kind) {
			case 8: {
				let e = c - o.w / 2, n = l - o.h / 2;
				g = zT(e, n, o.w, o.h, ` rx="${OT}" fill="var(--_a)" fill-opacity="0.5" stroke="var(--_b)"${a.shape}`), r.titleH > 0 && (g += `<path d="M${X(e)},${X(n + r.titleH)}H${X(e + o.w)}"${jT}${a.line}/>` + Z(r.label, UT(o, r.label.width, U) + u, n + r.titleH / 2, ` class="pele-cluster-label"${a.text}`, d)), ie(ee[t], e, n + r.titleH, e + o.w, n + o.h);
				break;
			}
			case 2:
				g = `<circle r="7" fill="var(--_l)"${a.shape}/>`;
				break;
			case 3:
				g = `<circle r="8.5" fill="var(--_bg)" stroke="var(--_l)"${a.line}/><circle r="5" fill="var(--_l)"${a.shape}/>`;
				break;
			case 4:
				g = `<polygon points="0,${X(-m / 2)} ${X(f / 2)},0 0,${X(m / 2)} ${X(-f / 2)},0"${AT}${a.shape}/>`;
				break;
			case 5:
			case 6:
				g = zT(-f / 2, -m / 2, f, m, ` rx="2" fill="var(--_l)"${a.shape}`);
				break;
			case 7: {
				let e = X(f / 2), t = X(m / 2), n = X(f / 2 - ET), i = X(ET - m / 2);
				g = `<path d="M-${e},-${t}H${n}L${e},${i}V${t}H-${e}Z" fill="var(--_bg)" stroke="var(--_b)"/><path d="M${n},-${t}V${i}H${e}"${jT}/>` + Z(r.label, 0, 0, ` class="pele-label" font-size="${s}" fill="var(--_m)"`, d);
				break;
			}
			default: {
				if (g = zT(-f / 2, -m / 2, f, m, ` rx="${X(Math.min(OT, m / 2))}"${AT}${a.shape}`), r.kind === 0) {
					g += Z(r.label, 0, 0, h, d);
					break;
				}
				let e = wT - m / 2 + r.label.height;
				g += `<path d="M${X(-f / 2)},${X(e + 6)}H${X(f / 2)}"${jT}${a.line}/>` + Z(r.label, 0, e - r.label.height / 2, h, d), e += 14;
				for (let t of r.lines) g += Z(t, 0, e + t.height / 2, ` class="pele-state-description" font-size="${s}"${a.text}`, d), e += t.height;
			}
		}
		let y = e.links.get(i.id);
		if (y) {
			let e = p(LT(y.tooltip));
			e && (g = `<title>${nt(e)}</title>` + g), g = zt(g, kt(LT(y.url)), i.id, H, n, " target=\"_blank\"");
		}
		let b = `<g class="${PT[r.kind]}${Ri(i.cssClasses.replace(MT, ""))}" data-id="${Y(i.id)}"`;
		r.kind === 8 ? ne += `${b}>${g}</g>` : r.kind === 7 ? K += `${b} transform="translate(${X(c)},${X(l)})">${g}</g>` : G += `${b} transform="translate(${X(c)},${X(l)})">${g}</g>`;
	}
	let q = (e, t, n) => {
		let r = v[n];
		if (r.isGroup) return;
		let i = _[n], a = i.kind === 5 || i.kind === 6, o = t === 0 ? 3 : t - 3;
		for (let n of [1, 0]) {
			let s = n ? r.h : r.w, c = n ? i.h : i.w, l = n ? i.w : i.h, d = (n ? r.y : r.x) + u, f = (n ? r.x : r.y) + u, p = e[t + n] - d;
			if (!(Math.abs(Math.abs(p) - s / 2) >= .5)) {
				e[t + n] -= Math.sign(p) * (s - c) / 2, a && l > c && (e[t + 1 - n] = RT(e[o + 1 - n], f - l / 2 + 6, f + l / 2 - 6));
				return;
			}
		}
	}, ae = gi();
	for (let e = 0; e < A.length; e++) {
		let t = A[e];
		t.src === t.dst || t.route.length < 6 || M[e].pattern === "dashed" || ae.add(t.dst, ga(t.route, t.route.length - 3, v[t.dst]), "arrow_point");
	}
	let oe = "", J = "", se = new Int32Array(b), ce = new Float64Array(b);
	for (let e = 0; e < A.length; e++) {
		let t = A[e], n = M[e], r = j[e], i = n.pattern === "dashed", o = i ? "none" : "arrow_point", s;
		if (t.src === t.dst) {
			let e = v[t.src], n = _[t.src], i = se[t.src]++, a = w(t.src), c = e.isGroup ? e.w : n.w, l = e.isGroup ? e.h : n.h, d = (a ? c : l) / 2, f = Math.max(Math.min((a ? l : c) / 2 - 4, 8 + i * 6), 2), p = TT + i * 8, m = vi(o) / (Math.hypot(p, f) || 1), h = (t, n) => e.x + u + (a ? d + t : -n), g = (t, n) => e.y + u + (a ? n : d + t), y = (e, t) => `${X(h(e, t))},${X(g(e, t))}`;
			s = {
				d: `M${y(0, -f)}C${y(p, -2 * f)} ${y(p, 2 * f)} ${y(p * m, f + f * m)}`,
				sx: 0,
				sy: 0,
				sdx: 0,
				sdy: 0,
				ex: h(0, f),
				ey: g(0, f),
				edx: h(-p, -f) - h(0, 0),
				edy: g(-p, -f) - g(0, 0)
			};
			let b = Math.hypot(s.edx, s.edy) || 1;
			s.edx /= b, s.edy /= b;
			let x = TT + (N[t.src] - 1) * 8, S = ce[t.src] + r.height / 2;
			ce[t.src] += r.height, t.labelX = a ? e.x + d + x + 4 + t.labelW / 2 : e.x, t.labelY = a ? e.y - F[t.src] / 2 + S : e.y + d + x * .75 + 4 + S;
		} else {
			let n = t.route.slice(), r = ae.of(t.src, ga(n, 0, v[t.src])), i = ae.of(t.dst, ga(n, n.length - 3, v[t.dst]));
			for (let e = 0; e < n.length; e += 3) n[e] += u, n[e + 1] += u;
			q(n, 0, t.src), q(n, n.length - 3, t.dst);
			let c = I.get(e);
			if (c !== void 0 && n.length >= 6) {
				let e = v[c], r = _[t.src].kind === 10, i = r ? 0 : n.length - 3, a = (e.dir === "TB" || e.dir === "LR") === r, o = FT(e.dir) ? [
					n[i],
					e.y + u + (a ? _[c].titleH - e.h / 2 : e.h / 2),
					0
				] : [
					e.x + u + (a ? -e.w / 2 : e.w / 2),
					n[i + 1],
					1
				];
				n = r ? o.concat(n) : n.concat(o);
			}
			s = _i(n, typeof a == "string" ? a : void 0, 0, vi(o), r, i);
		}
		if (oe += `<g class="pele-edge ${i ? "pele-note-edge\" stroke=\"var(--_b)\" stroke-dasharray=\"3 4" : "pele-transition"}" data-id="${Y(n.id)}"><path d="${s.d}"/>` + yi(o, s.ex, s.ey, s.edx, s.edy, "var(--_l)") + "</g>", r.width > 0) {
			let e = t.labelX + u, i = t.labelY + u;
			J += bi(n.id, r, e, i, "", d);
		}
	}
	let le = Zs(e.title, c, o, u, B, V, (ne ? `<g class="pele-clusters">${ne}</g>` : "") + (re ? `<g class="pele-dividers" stroke-dasharray="4 4"${jT}>${re}</g>` : "") + (oe ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round">${oe}</g>` : "") + (J ? `<g class="pele-edge-labels" font-size="${s}">${J}</g>` : "") + `<g class="pele-nodes">${G}${K}</g>`);
	return {
		svg: Ui("state", le.width, le.height, o, n, e, le.content),
		width: le.width,
		height: le.height,
		links: H
	};
}
function UT(e, t, n) {
	let r = n.get(Math.round(e.y - e.h / 2));
	if (r === void 0 || t === 0) return e.x;
	let i = e.x - e.w / 2, a = t / 2, o = e.x, s = -1;
	for (let t of [
		e.x,
		i + xT + a,
		i + e.w - xT - a
	]) {
		let n = 1 / 0;
		for (let o of r) o > i && o < i + e.w && (n = Math.min(n, Math.abs(o - t) - a));
		if (n >= 6) return t;
		n > s + .5 && (s = n, o = t);
	}
	return o;
}
var WT = {
	type: "state",
	math: !0,
	parse(e, t, n) {
		let r = new oT();
		return n && (r.title = n), _T(e, r), r;
	},
	render: VT
}, GT = 34, KT = 24, qT = 8, JT = 2e4, YT = 1e4, XT = 2e6, ZT = 4, QT = 3, $T = 8, eE = 20, tE = 20, nE = 14, rE = 3;
function iE(e, t, n, r, i = KT) {
	let a = e.length;
	if (a === 0) return {
		width: 0,
		height: 0
	};
	let o = n === "LR" || n === "RL", s = n === "BT" || n === "RL", c = [];
	for (let t = a - 1; t >= 0; t--) e[t].parent < 0 && e[t].isGroup && c.push(t);
	let l = Math.max(1, c.length), u = new Int32Array(a).fill(-1);
	c.forEach((e, t) => u[e] = t);
	let d = new Uint8Array(a);
	for (let t = 0; t < a; t++) e[t].parent >= 0 && (d[e[t].parent] = 1);
	let f = new Float64Array(l).fill(i), p = i, m = (t) => {
		let n = t, r = i;
		for (let t = 0; e[n].parent >= 0 && t < YT; t++) n = e[n].parent, u[n] < 0 && (r += Math.max(e[n].padX, e[n].padTop, e[n].padBottom));
		let a = Math.max(0, u[n]);
		return r > f[a] && (f[a] = r), r > p && (p = r), a;
	}, h = new Int32Array(a).fill(-1), g = [];
	for (let t = 0; t < a; t++) u[t] >= 0 || e[t].isGroup && d[t] || (h[t] = g.length, g.push(t));
	let _ = (e) => o ? e.w : e.h, v = (e) => o ? e.h : e.w, y = g.map((t) => Jn(v(e[t]), _(e[t]))), b = [], x = [], S = 1;
	{
		let e = /* @__PURE__ */ new Set();
		for (let n = 0; n < t.length; n++) {
			let r = t[n], i = h[r.src], a = h[r.dst];
			if (i < 0 || a < 0 || i === a) continue;
			let s = Math.min(i, a) * g.length + Math.max(i, a);
			(r.labelW > 0 || e.has(s)) && (S = 2), e.add(s), b.push(Yn(i, a, r.minlen, o ? r.labelH : r.labelW, o ? r.labelW : r.labelH)), x.push(n);
		}
	}
	Cr(y, b), wr(y, b, S);
	let C = b.length, w = Int32Array.from(g, m), T = (n, i) => {
		let d = f.map((e, t) => i[t] ? Math.max(e, tE) : e), m = new Uint8Array(l), _ = 0, v = new Int32Array(C);
		for (let e = 0; e < C; e++) v[e] = Math.abs(y[b[e].head].rank - y[b[e].tail].rank), n[e] || (_ += v[e] - 1);
		let T = _ > JT, E = g.length + (T ? 0 : _), D = new Int32Array(E), O = new Int32Array(E), k = new Float64Array(E), A = new Float64Array(E), j = new Uint8Array(E), M = 0;
		for (let e = 0; e < g.length; e++) D[e] = y[e].rank, O[e] = w[e], k[e] = y[e].w, A[e] = y[e].h, D[e] > M && (M = D[e]);
		let N = new Int32Array(C).fill(-1), P = new Int32Array(C).fill(-1), F = [];
		{
			let e = g.length;
			for (let t = 0; t < C; t++) {
				let r = b[t], i = r.reversed ? r.head : r.tail, a = r.reversed ? r.tail : r.head;
				if (T || v[t] < 2 || n[t]) {
					F.push(i, a);
					continue;
				}
				let o = D[i], s = D[a], c = -1;
				r.labelW > 0 && (c = o + (s - o >> 1), S === 2 && !(c & 1) && c--), N[t] = e;
				let l = i;
				for (let n = o + 1; n < s; n++) {
					let u = e++;
					D[u] = n, O[u] = O[i] + Math.round((O[a] - O[i]) * (n - o) / (s - o)), j[u] = 1, n === c && (k[u] = r.labelW, A[u] = r.labelH, P[t] = u), F.push(l, u), l = u;
				}
				F.push(l, a);
			}
		}
		let I = new Int32Array(E + 1), L = new Int32Array(E + 1);
		for (let e = 0; e < F.length; e += 2) L[F[e] + 1]++, I[F[e + 1] + 1]++;
		for (let e = 0; e < E; e++) I[e + 1] += I[e], L[e + 1] += L[e];
		let R = new Int32Array(F.length / 2), z = new Int32Array(F.length / 2);
		{
			let e = I.slice(0, E), t = L.slice(0, E);
			for (let n = 0; n < F.length; n += 2) z[t[F[n]]++] = F[n + 1], R[e[F[n + 1]]++] = F[n];
		}
		let B = [];
		for (let e = 0; e <= M; e++) B.push([]);
		for (let e = 0; e < E; e++) B[D[e]].push(e);
		let V = new Float64Array(E), H = new Float64Array(E), U = (e) => {
			e.sort((e, t) => O[e] - O[t] || H[e] - H[t] || e - t);
			for (let t = 0; t < e.length; t++) V[e[t]] = t;
		};
		for (let e of B) {
			for (let t = 0; t < e.length; t++) H[e[t]] = t;
			U(e);
		}
		for (let e = 0; e < qT && M > 0; e++) {
			let t = !(e & 1);
			for (let e = 1; e <= M; e++) {
				let n = B[t ? e : M - e], r = t ? I : L, i = t ? R : z;
				for (let e of n) {
					let t = 0, n = r[e + 1] - r[e];
					for (let n = r[e]; n < r[e + 1]; n++) t += V[i[n]];
					H[e] = n > 0 ? t / n : V[e];
				}
				U(n);
			}
		}
		let ee = (e, t) => j[e] || j[t] ? r.edgeSep : r.nodeSep, te = (e, t) => {
			let n = 0;
			for (; n < e.length;) {
				let r = n;
				for (; r + 1 < e.length && O[e[r + 1]] === O[e[n]];) r++;
				t(e, n, r), n = r + 1;
			}
		}, W = (e, t, n) => {
			let r = k[e[t]];
			for (let i = t; i < n; i++) r += ee(e[i], e[i + 1]) + k[e[i + 1]];
			return r;
		}, ne = new Float64Array(l), re = c.length > 0 ? GT : 0;
		for (let t = 0; t < c.length; t++) {
			let n = e[c[t]];
			ne[t] = Math.max(0, n.minW - 2 * d[t]), n.padTop > re && (re = n.padTop);
		}
		for (let e of B) te(e, (t, n, r) => {
			let i = W(e, n, r);
			i > ne[O[e[n]]] && (ne[O[e[n]]] = i);
		});
		let G = new Float64Array(l + 1);
		for (let e = 0; e < l; e++) G[e + 1] = G[e] + ne[e] + 2 * d[e];
		let K = new Float64Array(E), ie = new Float64Array(E), q = (e, t, n) => {
			let r = O[e[t]], i = (G[r] + d[r] + (G[r + 1] - d[r]) - W(e, t, n)) / 2;
			for (let r = t; r <= n; r++) K[e[r]] = i + k[e[r]] / 2, r < n && (i += k[e[r]] + ee(e[r], e[r + 1]));
		}, ae = (e, t, n) => {
			let r = O[e[t]], i = G[r] + d[r];
			for (let r = t; r <= n; r++) {
				let t = e[r];
				K[t] = Math.max(ie[t], i + k[t] / 2), r < n && (i = K[t] + k[t] / 2 + ee(t, e[r + 1]));
			}
			let a = G[r + 1] - d[r];
			for (let r = n; r >= t; r--) {
				let n = e[r];
				K[n] = Math.min(K[n], a - k[n] / 2), r > t && (a = K[n] - k[n] / 2 - ee(e[r - 1], n));
			}
		};
		for (let e of B) te(e, q);
		for (let e = 0; e < 4 && M > 0; e++) {
			let t = !(e & 1);
			for (let e = 1; e <= M; e++) {
				let n = B[t ? e : M - e], r = t ? I : L, i = t ? R : z;
				for (let e of n) {
					let t = 0, n = 0;
					for (let a = r[e]; a < r[e + 1]; a++) O[i[a]] === O[e] && (t += K[i[a]], n++);
					ie[e] = n > 0 ? t / n : K[e];
				}
				te(n, ae);
			}
		}
		let oe = new Float64Array(M + 1), J = new Float64Array(M + 1), se = new Float64Array(M + 1).fill(r.rankSep / S);
		if (n.some((e) => e === 1)) {
			let e = r.rankSep / S;
			se.fill(e / rE);
			for (let t = 0; t < C; t++) {
				let r = b[t], i = r.reversed ? r.head : r.tail, a = r.reversed ? r.tail : r.head;
				if (n[t]) {
					if (r.labelH <= 0 || v[t] > S) continue;
					let n = Math.min(e, (r.labelH + 2 * eE - Math.min(A[i], A[a]) / 2) / v[t]);
					for (let e = D[i]; e < D[a]; e++) n > se[e] && (se[e] = n);
					continue;
				}
				let o = N[t];
				if (o < 0 || v[t] <= S * r.minlen) for (let t = D[i]; t < D[a]; t++) se[t] = e;
				else for (let n = o - 1; n < o + v[t] - 1; n++) {
					let r = n < o ? i : n, s = n + 1 < o + v[t] - 1 ? n + 1 : a;
					(O[r] !== O[s] || Math.abs(K[r] - K[s]) >= .5) && (se[D[r]] = e);
				}
			}
		}
		let ce = re + p;
		for (let e = 0; e <= M; e++) {
			let t = 0;
			for (let n of B[e]) A[n] > t && (t = A[n]);
			oe[e] = ce, J[e] = ce + t, ce += t + (e === M ? 0 : se[e]);
		}
		let le = ce + p, ue = G[l], de = (e) => s ? re + le - e : e, fe = (e, t) => o ? de(t) : e, pe = (e, t) => o ? e : de(t), me = +!!o;
		for (let t = 0; t < g.length; t++) {
			let n = e[g[t]], r = (oe[D[t]] + J[D[t]]) / 2;
			n.x = fe(K[t], r), n.y = pe(K[t], r);
		}
		for (let t = 0; t < c.length; t++) {
			let n = e[c[t]], r = (G[t] + G[t + 1]) / 2, i = G[t + 1] - G[t];
			n.x = o ? le / 2 : r, n.y = o ? r : le / 2, n.w = o ? le : i, n.h = o ? i : le, n.padTop = re;
		}
		let he = new Int32Array(a), ge = [];
		for (let t = 0; t < a; t++) {
			if (!e[t].isGroup || u[t] >= 0 || h[t] >= 0) continue;
			let n = 0;
			for (let r = e[t].parent; r >= 0 && n < YT; r = e[r].parent) n++;
			he[t] = n, ge.push(t);
		}
		ge.sort((e, t) => he[t] - he[e] || e - t);
		let _e = new Float64Array(a * 4);
		for (let e = 0; e < a; e++) _e[e * 4] = 1 / 0, _e[e * 4 + 1] = 1 / 0, _e[e * 4 + 2] = -1 / 0, _e[e * 4 + 3] = -1 / 0;
		let ve = (e, t) => {
			t.x - t.w / 2 < _e[e * 4] && (_e[e * 4] = t.x - t.w / 2), t.y - t.h / 2 < _e[e * 4 + 1] && (_e[e * 4 + 1] = t.y - t.h / 2), t.x + t.w / 2 > _e[e * 4 + 2] && (_e[e * 4 + 2] = t.x + t.w / 2), t.y + t.h / 2 > _e[e * 4 + 3] && (_e[e * 4 + 3] = t.y + t.h / 2);
		};
		for (let t of g) e[t].parent >= 0 && u[e[t].parent] < 0 && ve(e[t].parent, e[t]);
		for (let t of ge) {
			let n = e[t];
			if (_e[t * 4] === 1 / 0) continue;
			let r = Math.max(_e[t * 4 + 2] - _e[t * 4] + 2 * n.padX, n.minW);
			n.x = (_e[t * 4] + _e[t * 4 + 2]) / 2, n.w = r, n.y = (_e[t * 4 + 1] - n.padTop + _e[t * 4 + 3] + n.padBottom) / 2, n.h = _e[t * 4 + 3] - _e[t * 4 + 1] + n.padTop + n.padBottom, n.parent >= 0 && u[n.parent] < 0 && ve(n.parent, n);
		}
		for (let e of t) e.route = [];
		for (let e = 0; e < C; e++) {
			let n = b[e], r = t[x[e]], i = n.reversed ? n.head : n.tail, a = n.reversed ? n.tail : n.head, o = [K[i], J[D[i]] - (J[D[i]] - oe[D[i]] - A[i]) / 2], s = N[e];
			if (s >= 0) for (let t = s; t < s + v[e] - 1; t++) o.push(K[t], oe[D[t]]), J[D[t]] > oe[D[t]] && o.push(K[t], J[D[t]]);
			o.push(K[a], oe[D[a]] + (J[D[a]] - oe[D[a]] - A[a]) / 2);
			let c = [];
			for (let e = 0; e < o.length; e += 2) c.push(fe(o[e], o[e + 1]), pe(o[e], o[e + 1]), me);
			if (n.reversed) for (let e = 0, t = c.length - 3; e < t; e += 3, t -= 3) for (let n = 0; n < 2; n++) {
				let r = c[e + n];
				c[e + n] = c[t + n], c[t + n] = r;
			}
			r.route = c;
			let l = P[e];
			if (l >= 0) {
				let e = (oe[D[l]] + J[D[l]]) / 2;
				r.labelX = fe(K[l], e), r.labelY = pe(K[l], e);
			} else r.labelX = (c[0] + c[c.length - 3]) / 2, r.labelY = (c[1] + c[c.length - 2]) / 2;
		}
		for (let n of t) {
			if (n.route.length > 0 || n.src === n.dst) continue;
			let t = e[n.src], r = e[n.dst], [i, a] = aE(t, r), [o, s] = aE(r, t), c = +(Math.abs(o - i) > Math.abs(s - a));
			n.route = [
				i,
				a,
				c,
				o,
				s,
				c
			], n.labelX = (i + o) / 2, n.labelY = (a + s) / 2;
		}
		let ye = new Uint8Array(C), be = t.reduce((e, t) => e + t.route.length / 3, 0), xe = C * (g.length + t.length + be);
		if (xe <= XT) {
			let e = (e) => (oe[D[e]] + J[D[e]]) / 2, n = t.map((e) => [o ? e.labelY : e.labelX, de(o ? e.labelX : e.labelY)]), r = (e, t, n, r, i, a, o, s) => n > i - o / 2 && e < i + o / 2 && r > a - s / 2 && t < a + s / 2, i = (i, a, s, c, l, u, d) => {
				for (let t = 0; t < g.length; t++) if (t !== l && t !== u && r(i, a, s, c, K[t], e(t), k[t] + 8, A[t] + 8)) return !1;
				for (let e = 0; e < t.length; e++) {
					let l = t[e];
					if (e !== d && l.labelW > 0 && l.src !== l.dst && r(i, a, s, c, n[e][0], n[e][1], o ? l.labelH : l.labelW, o ? l.labelW : l.labelH)) return !1;
				}
				return !0;
			}, a = (e, n, r, i, a) => {
				let o = 0;
				for (let s = 0; s < t.length; s++) {
					if (s === a) continue;
					let c = t[s].route;
					for (let t = 3; t < c.length; t += 3) if (Math.max(c[t - 3], c[t]) > e && Math.min(c[t - 3], c[t]) < r && Math.max(c[t - 2], c[t + 1]) > n && Math.min(c[t - 2], c[t + 1]) < i) {
						o++;
						break;
					}
				}
				return o;
			}, s = (e, n, r) => {
				let i = 0;
				for (let a = 0; a < t.length; a++) {
					let o = t[a].route;
					if (a === r || o.length === 0) continue;
					let s = o.length - 3;
					(Math.abs(o[0] - e) < 1 && Math.abs(o[1] - n) < 1 || Math.abs(o[s] - e) < 1 && Math.abs(o[s + 1] - n) < 1) && i++;
				}
				return i;
			}, c = (e, n, r, i, a) => {
				let o = Math.abs(r - e) < .5, s = o ? Math.min(n, i) : Math.min(e, r), c = o ? Math.max(n, i) : Math.max(e, r), l = o ? e : n;
				for (let e = 0; e < t.length; e++) {
					let n = t[e];
					if (e === a || n.src === t[a].src || n.dst === t[a].dst) continue;
					let r = n.route;
					for (let e = 3; e < r.length; e += 3) {
						let t = r[e - 3 + +!o], n = r[e + +!o];
						if (Math.abs(t - l) >= ZT || Math.abs(n - l) >= ZT) continue;
						let i = r[e - 3 + +!!o], a = r[e + +!!o];
						if (Math.min(c, Math.max(i, a)) - Math.max(s, Math.min(i, a)) > 1) return !0;
					}
				}
				return !1;
			};
			for (let r = 0; r < C; r++) {
				let o = b[r], l = x[r], u = t[l], f = o.tail, p = o.head;
				if (O[f] === O[p] || Math.abs(K[p] - K[f]) < 1) continue;
				let h = K[f], g = K[p], _ = e(f), v = e(p), y = Math.sign(g - h), S = Math.sign(v - _), C = (e, t) => {
					for (let n = 2; n < e.length; n += 2) if (!i(Math.min(e[n - 2], e[n]) - t, Math.min(e[n - 1], e[n + 1]) - t, Math.max(e[n - 2], e[n]) + t, Math.max(e[n - 1], e[n + 1]) + t, f, p, l) || c(fe(e[n - 2], e[n - 1]), pe(e[n - 2], e[n - 1]), fe(e[n], e[n + 1]), pe(e[n], e[n + 1]), l)) return !1;
					let s = 0, d = 0, m = -1;
					if (u.labelW > 0) {
						let t = o.labelW, n = o.labelH;
						for (let r = 2; r < e.length; r += 2) {
							let o = (e[r - 2] + e[r]) / 2, c = (e[r - 1] + e[r + 1]) / 2, f = Math.abs(e[r] - e[r - 2]), p = Math.abs(e[r + 1] - e[r - 1]), h = f + p;
							if (h <= m || (f > 0 ? f < t + 8 : p < n + 8) || o - t / 2 < 0 || o + t / 2 > ue || c - n / 2 < 0 || c + n / 2 > le || !i(o - t / 2, c - n / 2, o + t / 2, c + n / 2, -1, -1, l)) continue;
							let g = fe(o, c), _ = pe(o, c);
							a(g - u.labelW / 2, _ - u.labelH / 2, g + u.labelW / 2, _ + u.labelH / 2, l) > 0 || (s = o, d = c, m = h);
						}
						if (m < 0) return !1;
					}
					let h = [e[0], e[1]];
					for (let t = 2; t < e.length; t += 2) {
						let n = e[t] - e[t - 2], r = e[t + 1] - e[t - 1], i = Math.abs(n) + Math.abs(r), a = t > 2 ? eE : 0, o = t + 2 < e.length ? eE : 0;
						i > a + o + 1 && (a && h.push(e[t - 2] + n / i * a, e[t - 1] + r / i * a), o && h.push(e[t] - n / i * o, e[t + 1] - r / i * o)), h.push(e[t], e[t + 1]);
					}
					u.route = [];
					for (let e = 0; e < h.length; e += 2) {
						let t = e === 0 ? h[0] !== h[2] : h[e] !== h[e - 2];
						u.route.push(fe(h[e], h[e + 1]), pe(h[e], h[e + 1]), t ? 1 - me : me);
					}
					return u.labelW > 0 && (u.labelX = fe(s, d), u.labelY = pe(s, d), n[l] = [s, d]), ye[r] = 1, !0;
				};
				if (C([
					h + y * k[f] / 2,
					_,
					g,
					_,
					g,
					v - S * A[p] / 2
				], 2) || C([
					h,
					_ + S * A[f] / 2,
					h,
					v,
					g - y * k[p] / 2,
					v
				], 2) || xe > XT / $T) continue;
				let w = [];
				for (let e of O[f] < O[p] ? [O[p], O[f]] : [O[f], O[p]]) {
					let t = Math.max(d[e] - nE, Math.min(d[e] / 2, tE - nE));
					for (let n of [G[e] + t, G[e + 1] - t]) {
						if (Math.abs(n - h) < k[f] / 2 + 4 || Math.abs(n - g) < k[p] / 2 + 4) continue;
						let t = [
							h + Math.sign(n - h) * k[f] / 2,
							_,
							n,
							_,
							n,
							v,
							g + Math.sign(n - g) * k[p] / 2,
							v
						], r = (s(fe(t[0], t[1]), pe(t[0], t[1]), l) + s(fe(t[6], t[7]), pe(t[6], t[7]), l)) * 1e6;
						for (let e = 2; e < t.length; e += 2) {
							let n = fe(t[e - 2], t[e - 1]), i = pe(t[e - 2], t[e - 1]), o = fe(t[e], t[e + 1]), s = pe(t[e], t[e + 1]);
							r += a(Math.min(n, o), Math.min(i, s), Math.max(n, o), Math.max(i, s), l) * 1e6 + Math.abs(o - n) + Math.abs(s - i);
						}
						w.push({
							pts: t,
							cost: r,
							lane: e
						});
					}
				}
				w.sort((e, t) => e.cost - t.cost);
				for (let e of w) if (C(e.pts, 1)) {
					m[e.lane] = 1;
					break;
				}
			}
		}
		return {
			width: o ? le : ue,
			height: o ? ue : le,
			routed: ye,
			margins: m,
			work: xe
		};
	}, E = new Uint8Array(C), D = new Uint8Array(l), O = T(E, D);
	for (let e = 0; e < QT && O.work <= XT / $T; e++) {
		let t = e === 0 ? O.routed : E.map((e, t) => e & O.routed[t]);
		if (t.every((e, t) => e === E[t]) && O.margins.every((e, t) => e === D[t])) break;
		E = t, D = O.margins, O = T(E, D);
	}
	return E.some((e, t) => e && !O.routed[t]) && (O = T(new Uint8Array(C), new Uint8Array(l))), {
		width: O.width,
		height: O.height
	};
}
function aE(e, t) {
	let n = t.x - e.x, r = t.y - e.y, i = Math.max(e.w / 2, .5), a = Math.max(e.h / 2, .5);
	if (Math.abs(n) < i && Math.abs(r) < a) return i - Math.abs(n) < a - Math.abs(r) ? [e.x + (n < 0 ? -i : i), t.y] : [t.x, e.y + (r < 0 ? -a : a)];
	let o = Math.min(n === 0 ? 1 / 0 : i / Math.abs(n), r === 0 ? 1 / 0 : a / Math.abs(r));
	return [e.x + n * o, e.y + r * o];
}
var oE = "__swimlane_default__";
function sE(e) {
	let t = !1;
	for (let n of e.nodes) n.isGroup ? n.dir = void 0 : n.parentId === void 0 && (t = !0);
	if (t) {
		for (let t of e.nodes) !t.isGroup && t.parentId === void 0 && (t.parentId = oE);
		e.nodes.push({
			id: oE,
			label: void 0,
			labelType: "text",
			shape: "rect",
			isGroup: !0,
			parentId: void 0,
			cssStyles: [],
			cssCompiledStyles: [],
			cssClasses: "",
			dir: void 0
		});
	}
}
function cE(e, t, n, r, i, a, o) {
	let s = e.x - e.w / 2, c = e.y - e.h / 2, l = a === "LR" || a === "RL", u = l ? s + e.padTop / 2 : e.x, d = l ? e.y : c + e.padTop / 2, f = Z(t, u, d, ` class="pele-cluster-label" fill="var(--_m)"${n.text}`, o);
	return `<g class="pele-cluster pele-lane${r}" data-id="${i}"><rect x="${X(s)}" y="${X(c)}" width="${X(e.w)}" height="${X(e.h)}" fill="none" stroke="var(--_b)"/><rect x="${X(s)}" y="${X(c)}" width="${X(l ? e.padTop : e.w)}" height="${X(l ? e.h : e.padTop)}" fill="var(--_a)" stroke="var(--_b)"${n.shape}/>` + (l && f ? `<g transform="rotate(-90 ${X(u)} ${X(d)})">${f}</g>` : f) + "</g>";
}
var lE = {
	type: "swimlane",
	prepare: sE,
	layout: (e, t, n, r, i) => iE(e, t, n, r, i ? 12 : void 0),
	drawGroup: cE
}, uE = {
	type: "swimlane",
	math: !0,
	parse: Nm.parse,
	render: (e, t, n) => jm(e, t, n, lE)
}, dE = class {
	type = "timeline";
	title;
	accTitle;
	accDescr;
	direction = "LR";
	sections = [];
	periods = [];
	currentSection = "";
	getCommonDb() {
		return this;
	}
	setDiagramTitle(e) {
		this.title = e;
	}
	setAccTitle(e) {
		this.accTitle = e.replace(/^\s+/g, "");
	}
	setAccDescription(e) {
		this.accDescr = e.replace(/\n\s+/g, "\n");
	}
	setDirection(e) {
		this.direction = e;
	}
	addSection(e) {
		this.currentSection = e, this.sections.push(e);
	}
	addTask(e, t, n) {
		this.periods.push({
			text: e,
			events: n ? [n] : [],
			section: this.currentSection,
			sectionIndex: this.sections.length - 1
		});
	}
	addEvent(e) {
		let t = this.periods[this.periods.length - 1];
		if (!t) throw new n("An event needs a time period before it.", "semantic", { type: "timeline" });
		t.events.push(e);
	}
}, fE = [
	"$end",
	"EOF",
	"INVALID",
	"NEWLINE",
	"timeline",
	"timeline_lr",
	"timeline_td",
	"title",
	"acc_title",
	"acc_title_value",
	"acc_descr",
	"acc_descr_value",
	"acc_descr_multiline_value",
	"section",
	"period",
	"event"
];
function pE(e) {
	let t = e.length, n = [], r = [], i = [], a = {
		types: n,
		texts: r,
		starts: i
	}, o = 0, s = (t, a) => {
		n.push(t), r.push(e.slice(o, a)), i.push(o), o = a;
	};
	for (; o = X_(e, o), !(o >= t);) {
		let n = e.charCodeAt(o), r = o + 1;
		if (n === 10) {
			for (; e.charCodeAt(r) === 10;) r++;
			s(3, r);
		} else {
			if (Y_(e, o, "timeline")) {
				for (r = o + 8; e.charCodeAt(r) === 32 || e.charCodeAt(r) === 9;) r++;
				let t = Y_(e, r, "lr");
				if (r > o + 8 && (t || Y_(e, r, "td")) && !J(e.charCodeAt(r + 2))) {
					s(t ? 5 : 6, r + 2);
					continue;
				}
				if (!J(e.charCodeAt(o + 8))) {
					s(4, o + 8);
					continue;
				}
			}
			if (Y_(e, o, "title") && G(e.charCodeAt(o + 5)) && o + 6 < t && e.charCodeAt(o + 6) !== 10) s(7, J_(e, o + 6));
			else if (r = Q_(e, o, a, 8), r !== o) o = r;
			else {
				if (Y_(e, o, "section") && G(e.charCodeAt(o + 7))) {
					for (r = o + 8; r < t && e.charCodeAt(r) !== 58 && e.charCodeAt(r) !== 10;) r++;
					if (r > o + 8) {
						s(13, r);
						continue;
					}
				}
				if (n !== 58) {
					r = o + 1;
					for (let n = e.charCodeAt(r); r < t && n !== 35 && n !== 58 && n !== 10; n = e.charCodeAt(++r));
					s(14, r);
				} else {
					if (G(e.charCodeAt(o + 1))) {
						for (r = o + 2; r < t; r++) {
							let t = e.charCodeAt(r);
							if (t === 10 || t === 58 && G(e.charCodeAt(r + 1))) break;
						}
						if (r > o + 2) {
							s(15, r);
							continue;
						}
					}
					s(2, o + 1);
				}
			}
		}
	}
	return (i.length === 0 || i[i.length - 1] < t) && s(1, t), s(0, t), a;
}
var mE = "'EOF', 'SPACE', 'NEWLINE', 'title', 'acc_title', 'acc_descr', 'acc_descr_multiline_value', 'section', 'period', 'event'";
function hE(e, t) {
	let { types: n, texts: r, starts: a } = pE(e), o = (t, r) => {
		let o = n[t] === 0 ? "1" : fE[n[t]];
		throw i("timeline", e, a[t], `Expecting ${r}, got '${o}'`);
	}, s = n[0];
	s !== 4 && s !== 5 && s !== 6 && o(0, "'timeline', 'timeline_lr', 'timeline_td'"), s !== 4 && t.setDirection(s === 5 ? "LR" : "TD");
	for (let e = 1;; e++) {
		let i = r[e];
		switch (n[e]) {
			case 3: break;
			case 7:
				t.getCommonDb().setDiagramTitle(i.substring(6));
				break;
			case 8:
				t.getCommonDb().setAccTitle(r[++e].trim());
				break;
			case 10:
				t.getCommonDb().setAccDescription(r[++e].trim());
				break;
			case 12:
				t.getCommonDb().setAccDescription(i.trim());
				break;
			case 13:
				t.addSection(i.substring(8));
				break;
			case 14:
				t.addTask(i, 0, "");
				break;
			case 15:
				t.addEvent(i.substring(2));
				break;
			case 1: return;
			default: o(e, mE);
		}
	}
}
var gE = 12, _E = 8, vE = 152, yE = 216, bE = 264, xE = 20, SE = 20, CE = 14, wE = 8, TE = 8, EE = 12, DE = " fill=\"var(--_bg)\"", OE = " fill=\"none\" stroke=\"var(--_b)\"";
function kE(e, t, n, r, i) {
	return `<rect x="${X(e)}" y="${X(t)}" width="${X(n)}" height="${X(r)}"${Ei(i)}/>`;
}
function AE(e, t, n) {
	return e.direction === "TD" ? jE(e, t, n, !0) : ao(n, (r) => jE(e, t, n, r));
}
function jE(e, t, n, r) {
	let i = n.fontSize ?? 16, a = Math.round(i * .875), o = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), s = n.padding ?? 8, c = t.timeline?.disableMulticolor !== !0, l = e.periods, u = e.sections.length > 0, d = e.sections.map((e, t) => ({
		section: t,
		periods: []
	})), f = {
		section: -1,
		periods: []
	};
	l.forEach((e, t) => (d[e.sectionIndex] ?? f).periods.push(t)), f.periods.length > 0 && d.unshift(f);
	let p = r && n.maxWidth !== void 0 && n.maxWidth > 0 ? n.maxWidth - 2 * s : 1 / 0, m = SE + CE * 2 + 4 * gE, h = Math.min(vE, Math.max(80, Math.round((p - m) * .38))), g = Math.min(bE, Math.max(110, p - m - h)), _ = h, v = () => r ? g : _, y = l.map((e) => Zg(e.text, o, i, _)), b = l.map((e) => e.events.map((e) => Zg(e, o, a, v()))), x = 0;
	for (let e of y) x = Math.max(x, e.width);
	if (!r) for (let e of b) for (let t of e) x = Math.max(x, t.width);
	let S = x > _;
	if (r) for (let e of b) for (let t of e) S ||= t.width > g;
	S && (_ = Math.min(Math.max(Math.ceil(x), h), p === 1 / 0 ? yE : h), y = l.map((e) => Qg(e.text, o, i, _)), b = l.map((e) => e.events.map((e) => Qg(e, o, a, v()))));
	let C = Math.round(i * 1.5), w = _ + 2 * gE, T = v() + 2 * gE, E = (e) => Math.max(e.height, C) + 2 * _E, D = (e) => Math.max(e.height, Math.round(a * 1.5)) + 2 * _E, O = (e, t) => e.section >= 0 ? Bi(e.section) : u ? "var(--_m)" : Bi(c ? t : 0), k = !1;
	for (let e of b) e.length > 0 && (k = !0);
	let A = 0;
	for (let e of d) A += Math.max(e.periods.length, 1);
	let j = w + xE, M = l.length > 0, N = r ? w + (k ? SE + CE * 2 + T : M ? SE + EE : 0) : A > 0 ? A * j - xE + (M ? EE + fi : 0) : 0, P = Qg(e.title, o, i, Math.max(N, 320), 1), F = P.height > 0 ? P.height + 16 : 0, I = Math.max(N, P.width), L = s + (I - N) / 2, R = s + F, z = (t, n) => Qg(e.sections[t.section], o, i, n - 2 * gE, 1), B = (e, t, n, r, i, a) => kE(n, r, i, a, ` fill="${Bi(e.section)}"`) + Z(t, n + i / 2, r + a / 2, " font-weight=\"var(--_hw)\"" + DE), V = (e, t, n, r, i) => kE(n, r, w, i, ` fill="${t}"`) + Z(y[e], n + w / 2, r + i / 2, DE), H = (e, t, n, r, i) => "<g class=\"pele-node pele-event\">" + kE(n, r, T, i, ` fill="${t}" fill-opacity="0.16"`) + Z(e, n + T / 2, r + i / 2, ` font-size="${a}"`) + "</g>", U = (e, t, n) => `<circle class="pele-dot" cx="${X(e)}" cy="${X(t)}" r="4" fill="${n}" stroke="var(--_bg)" stroke-width="2"/>`, ee = (t) => t.section >= 0 ? `<g class="pele-cluster pele-section" data-id="${Y(e.sections[t.section].trim())}">` : "", te = (e) => `<g class="pele-node pele-period" data-id="${Y(l[e].text.trim())}">`, W = "", ne;
	if (r) {
		let e = L + w + SE, t = e + CE, n = t + CE, r = R;
		for (let i of d) {
			if (W += ee(i), i.section >= 0) {
				let e = z(i, N), t = E(e);
				W += B(i, e, L, r, N, t), r += t + TE + 4;
			}
			for (let a of i.periods) {
				let o = O(i, a), s = E(y[a]), c = b[a].length > 0 ? D(b[a][0]) : s, l = r + Math.max(s, c) / 2, u = `M${X(L + w)},${X(l)}H${X(e)}`, d = "", f = l - c / 2, p = l;
				for (let e of b[a]) {
					let r = D(e);
					p = f + r / 2, u += `M${X(t)},${X(p)}H${X(n)}`, d += H(e, o, n, f, r), f += r + wE;
				}
				d && (u += `M${X(e)},${X(l)}H${X(t)}V${X(p)}`), W += te(a) + V(a, o, L, l - s / 2, s) + `<path class="pele-edge" d="${u}"${OE}/>` + U(e, l, o) + d + "</g>", r = Math.max(l + s / 2, f - wE) + xE;
			}
			i.periods.length === 0 && (r += xE - TE - 4), i.section >= 0 && (W += "</g>");
		}
		if (d.length > 0 && (r -= xE), M) {
			let t = r + EE + fi;
			W = `<path class="pele-axis" d="M${X(e)},${X(R)}V${X(t - fi + 1)}" fill="none" stroke="var(--_l)"/>` + yi("arrow_point", e, t, 0, 1, "var(--_l)") + W, r = t;
		}
		ne = r + s;
	} else {
		let e = 0, t = d.map((t) => {
			if (t.section < 0) return;
			let n = z(t, Math.max(t.periods.length, 1) * j - xE);
			return e = Math.max(e, E(n)), n;
		}), n = 0;
		for (let e of y) n = Math.max(n, E(e));
		let r = R + (u ? e + TE : 0), i = r + n + (n > 0 ? SE : 0), a = i + SE, o = M ? i + EE : R + e, c = 0;
		if (d.forEach((s, l) => {
			let u = Math.max(s.periods.length, 1), d = L + c * j;
			W += ee(s);
			let f = t[l];
			f && (W += B(s, f, d, R, u * j - xE, e)), s.periods.forEach((e, t) => {
				let c = O(s, e), l = d + t * j, u = l + w / 2, f = `M${X(u)},${X(r + n)}V${X(b[e].length > 0 ? a : i)}`, p = "", m = a;
				for (let t of b[e]) {
					let e = D(t);
					m > a && (f += `M${X(u)},${X(m - wE)}V${X(m)}`), p += H(t, c, l, m, e), m += e + wE;
				}
				o = Math.max(o, m - wE), W += te(e) + V(e, c, l, r, n) + `<path class="pele-edge" d="${f}"${OE}/>` + U(u, i, c) + p + "</g>";
			}), s.section >= 0 && (W += "</g>"), c += u;
		}), M) {
			let e = L + N;
			W = `<path class="pele-axis" d="M${X(L)},${X(i)}H${X(e - fi + 1)}" fill="none" stroke="var(--_l)"/>` + yi("arrow_point", e, i, 1, 0, "var(--_l)") + W;
		}
		ne = o + s;
	}
	let re = Math.ceil(I + 2 * s), G = Math.ceil(Math.max(ne, s * 2));
	return {
		svg: Ui("timeline", re, G, i, n, e, Z(P, re / 2, s + P.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + W),
		width: re,
		height: G,
		links: []
	};
}
var ME = {
	type: "timeline",
	parse(e, t, n) {
		let r = new dE();
		return r.title = n, hE(e, r), r;
	},
	render: AE
}, NE = /[─━│┃└┗├┣]/, PE = /[└┗├┣]/, FE = /[─━]/, IE = /^[\s│┃]+$/, LE = /^[\s─━│┃└┗├┣]+$/, RE = /^\s*(title[\t ]|accTitle[\t ]*:|accDescr[\t ]*[:{])/, zE = /^\s*%%/, BE = "    ";
function VE(e) {
	return e.some((e) => NE.test(e));
}
function HE(e) {
	for (let t of e) {
		let e = PE.exec(t);
		if (e?.index && e.index > 0) return e.index;
	}
	return 4;
}
function UE(e, t) {
	return e.replace(/\bline\s+(\d+)\b/gi, (e, n) => {
		let r = t.get(parseInt(n, 10));
		return r ? `line ${r}` : e;
	});
}
function WE(e, t) {
	throw new n(`Line ${e}: ${t}`, "syntax", {
		type: "treeView",
		line: e
	});
}
function GE(e) {
	let t = /* @__PURE__ */ new Map();
	if (!NE.test(e)) return {
		text: e,
		lineMap: t
	};
	let n = e.split("\n"), r = -1;
	for (let e = 0; e < n.length; e++) if (n[e].trim() === "treeView-beta") {
		r = e;
		break;
	}
	if (r === -1) return {
		text: e,
		lineMap: t
	};
	let i = (e) => e.trim() === "" || zE.test(e) || RE.test(e), a = [];
	for (let e = r + 1; e < n.length; e++) {
		let t = n[e];
		i(t) || IE.test(t) || a.push(t.replace(/\t/g, "    "));
	}
	if (!VE(a)) return {
		text: e,
		lineMap: t
	};
	let o = HE(a), s = [], c = (e, n) => {
		s.push(e), t.set(s.length, n + 1);
	};
	for (let e = 0; e <= r; e++) c(n[e], e);
	for (let e = r + 1; e < n.length; e++) {
		let t = n[e];
		if (i(t)) {
			c(t, e);
			continue;
		}
		if (IE.test(t)) continue;
		let r = t.replace(/\t/g, "    "), a = PE.exec(r);
		if (a) {
			let t = Math.round(a.index / o) + 1, n = a.index + 1;
			for (; n < r.length && FE.test(r[n]);) n++;
			for (; n < r.length && r[n] === " ";) n++;
			let i = r.slice(n).trimEnd();
			i || WE(e + 1, "Empty node — expected a filename or directory name after the box-drawing prefix"), c(BE.repeat(t) + i, e);
		} else {
			if (LE.test(r)) continue;
			NE.test(r) ? c(t, e) : /^\s+/.test(r) ? WE(e + 1, "Unexpected indentation without box-drawing characters. In box-drawing format, use ├── or └── prefixes for indented nodes.") : c(t, e);
		}
	}
	return {
		text: s.join("\n"),
		lineMap: t
	};
}
function KE(e, t) {
	if (e.startsWith("##", t) || e.startsWith("icon(", t)) return !0;
	if (!e.startsWith(":::", t)) return !1;
	let n = t + 3;
	for (; K(e.charCodeAt(n));) n++;
	let r = e.charCodeAt(n);
	return r >= 65 && r <= 90 || r >= 97 && r <= 122 || r === 95;
}
function qE(e, t) {
	let n = e.charCodeAt(t);
	if (K(n) || n === 10 || n === 13 || n === 34 || n === 39 || e.startsWith(":::", t) || e.startsWith("icon(", t) || e.startsWith("##", t)) return -1;
	let r = e.length, i = t + 1;
	for (; i < r;) {
		let t = e.charCodeAt(i);
		if (t === 10 || t === 13) break;
		if (K(t)) {
			let t = i + 1;
			for (; K(e.charCodeAt(t));) t++;
			if (KE(e, t)) break;
			i = t;
		} else i++;
	}
	return i;
}
var JE = {
	name: "BARE_NAME",
	pattern: /(?!:::|icon\(|##)[^ \t\n\r"'](?:(?![ \t]+:::[ \t]*[A-Za-z_]|[ \t]+icon\(|[ \t]+##)[^\n\r])*/y,
	match: qE
}, YE = [
	{
		...Jo("treeView-beta"),
		longer: [JE]
	},
	Qf(),
	Bo,
	Vo,
	{
		name: "CLASS_ANNOTATION",
		pattern: /[ \t]+:::[ \t]*[A-Za-z_][\w-]*/y
	},
	{
		name: "ICON_ANNOTATION",
		pattern: /[ \t]+icon\([\w-]*(?::[\w-]+)?\)/y
	},
	{
		name: "DESC_ANNOTATION",
		pattern: /[ \t]+##[^\n\r]*/y
	},
	{
		name: "INDENTATION",
		pattern: /[ \t]{1,}/y
	},
	{
		name: "QUOTED_NAME",
		pattern: /"[^"]*"|'[^']*'/y
	},
	{
		name: "WS",
		pattern: /[ \t]+/y,
		hidden: !0
	},
	{
		name: "ML_COMMENT",
		pattern: /\%\%[^\n]*/y,
		hidden: !0
	},
	{
		name: "NL",
		pattern: /\r?\n/y,
		hidden: !0
	},
	JE
];
function XE(e) {
	let t = e.length;
	for (; t > 0 && K(e.charCodeAt(t - 1));) t--;
	return t === e.length ? e : e.slice(0, t);
}
function ZE(e, t) {
	switch (e) {
		case "INDENTATION": return t?.length || 0;
		case "QUOTED_NAME": return t.substring(1, t.length - 1);
		case "BARE_NAME": return XE(t);
		case "CLASS_ANNOTATION": return t.trim().substring(3).trim();
		case "ICON_ANNOTATION": {
			let e = t.trim();
			return e.substring(5, e.length - 1);
		}
		case "DESC_ANNOTATION": return t.trim().substring(2).trim();
		default: return;
	}
}
function QE(e) {
	let t = new is(Ro(e, YE, "treeView"), YE, "treeView"), n = {
		$type: "TreeView",
		nodes: []
	};
	for (t.expect(0);;) if (t.kind === 1) n.accDescr = ts(t.take());
	else if (t.kind === 2) n.accTitle = es(t.take());
	else if (t.kind === 3) n.title = $o(t.take());
	else break;
	for (; t.kind !== -1;) {
		let e = {
			$type: "TreeNode",
			name: ""
		};
		if (t.kind === 7 && (e.indent = t.take().length), t.kind === 8) {
			let n = t.take();
			e.name = n.substring(1, n.length - 1);
		} else t.kind === 12 ? e.name = XE(t.take()) : t.fail("a name");
		for (;;) if (t.kind === 4) e.classAnnotation = ZE("CLASS_ANNOTATION", t.take());
		else if (t.kind === 5) e.iconAnnotation = ZE("ICON_ANNOTATION", t.take());
		else if (t.kind === 6) e.descAnnotation = ZE("DESC_ANNOTATION", t.take());
		else break;
		n.nodes.push(e);
	}
	return n;
}
var $E = class {
	count = 1;
	root = {
		id: 0,
		level: -1,
		name: "/",
		nodeType: "directory",
		children: []
	};
	stack = [this.root];
	addNode(e, t, n, r, i, a) {
		let o = this.stack;
		for (; e <= o[o.length - 1].level;) o.pop();
		let s = {
			id: this.count++,
			level: e,
			name: t,
			nodeType: n,
			icon: i,
			cssClass: r,
			description: a,
			children: []
		};
		o[o.length - 1].children.push(s), o.push(s);
	}
};
function eD(e, t) {
	for (let n of e.nodes) {
		let e = typeof n.indent == "number" ? n.indent : 0, r = n.name, i = r.endsWith("/");
		i && (r = r.slice(0, -1));
		let a = n.iconAnnotation;
		t.addNode(e, r, i ? "directory" : "file", n.classAnnotation || void 0, a === void 0 ? void 0 : a || "none", n.descAnnotation || void 0);
	}
}
function tD(e) {
	let { text: t, lineMap: r } = GE(e);
	try {
		return QE(t);
	} catch (e) {
		if (r.size === 0 || !(e instanceof n)) throw e;
		let t = e.message.indexOf("\n");
		throw new n(t === -1 ? UE(e.message, r) : UE(e.message.slice(0, t), r) + e.message.slice(t), e.code, {
			type: e.type,
			line: r.get(e.line) ?? e.line,
			column: e.column,
			snippet: e.snippet
		});
	}
}
function nD(e, t) {
	let n = new $E();
	return eD(e, n), {
		type: "treeView",
		title: e.title || t,
		accTitle: e.accTitle ? e.accTitle.replace(/^\s+/g, "") : void 0,
		accDescr: e.accDescr ? e.accDescr.replace(/\n\s+/g, "\n") : void 0,
		root: n.root,
		count: n.count
	};
}
var rD = "mermaid-treeview", iD = /* @__PURE__ */ new Map([["folder", "M3 6.5A1.5 1.5 0 0 1 4.5 5h4.6l2.4 2.5h8A1.5 1.5 0 0 1 21 9v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18z"], ["file", "M6.5 3h7L19 8.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5v-15A1.5 1.5 0 0 1 6.5 3zM13.5 3v5.5H19"]]);
function aD(e, t) {
	if (e === void 0 || !Object.prototype.hasOwnProperty.call(e, t)) return;
	let n = e[t];
	return typeof n == "string" ? n : void 0;
}
function oD(e, t) {
	let n = aD(t?.filenameIcons, e);
	if (n) return n;
	let r = e.lastIndexOf(".");
	if (r > 0) {
		let n = e.substring(r).toLowerCase();
		return aD(t?.extensionIcons, n) ?? aD(t?.extensionIcons, n.slice(1));
	}
}
function sD(e, t) {
	return e.includes(":") ? e : iD.has(e) || !t ? `${rD}:${e}` : `${t}:${e}`;
}
function cD(e, t) {
	if (e.icon !== "none") {
		if (e.icon) return sD(e.icon, t.defaultIconPack);
		if (t.showIcons) {
			if (e.nodeType === "file") {
				let n = oD(e.name, t);
				if (n === "none") return;
				if (n) return sD(n, t.defaultIconPack);
			}
			return `${rD}:${e.nodeType === "directory" ? "folder" : "file"}`;
		}
	}
}
function lD(e) {
	let t = (e) => typeof e == "object" && e && !Array.isArray(e) ? e : void 0, n = t(e.treeView) ?? {};
	return {
		showIcons: !!n.showIcons,
		defaultIconPack: typeof n.defaultIconPack == "string" ? n.defaultIconPack : "",
		filenameIcons: t(n.filenameIcons),
		extensionIcons: t(n.extensionIcons)
	};
}
var uD = 6, dD = 16, fD = 7, pD = 4, mD = 4;
function hD(e, t, n, r, i) {
	let a = e.treeView?.[t];
	return typeof a == "number" && a >= r && a <= i ? a : n;
}
function gD(e) {
	return {
		paddingX: hD(e, "paddingX", 5, 0, 100),
		paddingY: hD(e, "paddingY", 2, 0, 100),
		rowIndent: hD(e, "rowIndent", 15, 0, 400),
		lineThickness: hD(e, "lineThickness", 1, .25, 12)
	};
}
function _D(e, t, n) {
	return so(n, (r) => vD(e, t, n, r));
}
function vD(e, t, n, r) {
	let i = n.fontSize ?? 16, a = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), o = n.padding ?? 8, s = lD(t), { paddingX: c, paddingY: l, rowIndent: u, lineThickness: d } = gD(t), f = 0, m = e.root.children.map((e) => [e, 0]);
	for (let e = 0; r && e < m.length; e++) {
		let [t, n] = m[e];
		f = Math.max(f, n);
		for (let e of t.children) m.push([e, n + 1]);
	}
	let h = r ? Math.min(u + c, Math.max(2, ((n.maxWidth ?? 320) - 120) / Math.max(1, f))) : u + c, g = Math.round(i * 1.5) + 2 * l, _ = i, v = Q(e.title, !1, a, i, r ? no(n) : 4e3, 1), y = v.height > 0 ? v.height + 12 : 0, b = (e) => e.some((e) => cD(e, s) !== void 0), x = [], S = /* @__PURE__ */ new Map(), C = [], w = (e, t) => {
		let n = b(e);
		for (let r = e.length - 1; r >= 0; r--) C.push([
			e[r],
			t,
			n
		]);
	};
	w(e.root.children, 0);
	let T = 0, E = !1, D = 0;
	for (; C.length > 0;) {
		let [e, t, c] = C.pop(), u = t * h, d = p(e.name), f = u + (c ? _ + uD : 0), m = Math.max(40, (n.maxWidth ?? 320) - 2 * o - 2 * mD - f), v = r ? ul(d, a, i, m, +(e.nodeType === "directory")) : void 0, y = r && e.description ? ul(p(e.description), a, i, m, 2) : void 0, b = v ? v.width : a.width(d, i, +(e.nodeType === "directory"));
		f + b > T && (T = f + b);
		let O = e.cssClass !== void 0 && e.cssClass.split(/\s+/).includes("highlight");
		O && (E = !0);
		let k = r ? Math.max(g, (v?.height ?? 0) + (y?.height ?? 0) + 2 * l) : g, A = {
			node: e,
			x: u,
			cy: D + (r ? l + Math.max(_, v?.height ?? 0) / 2 : k / 2),
			icon: cD(e, s),
			text: d,
			labelX: f,
			highlighted: O,
			label: v,
			description: y,
			top: D,
			height: k
		};
		D += k, x.push(A), S.set(e, A), w(e.children, t + 1);
	}
	let O = T + dD, k = T;
	for (let e of x) {
		let t = e.node.description;
		if (!t) continue;
		let n = e.description ? e.description.width : a.width(p(t), i, 2);
		k = Math.max(k, (r ? e.labelX : O) + n);
	}
	k = Math.max(k, v.width);
	let A = o + (E ? mD : 0), j = o + y, M = Math.ceil(k + 2 * A), N = Math.ceil(j + D + o), P = "";
	for (let e of x) {
		let t = e.node.children;
		if (t.length === 0) continue;
		let n = A + e.x + fD, r = Math.max(n, A + e.x + h - c), i = j + S.get(t[t.length - 1]).cy, a = Math.min(pD, r - n), o = `M${X(n)},${X(j + e.top + e.height - 2)}V${X(i - a)}`;
		a > 0 && (o += `Q${X(n)},${X(i)} ${X(n + a)},${X(i)}H${X(r)}`);
		for (let e = 0; e < t.length - 1 && r > n; e++) o += `M${X(n)},${X(j + S.get(t[e]).cy)}H${X(r)}`;
		P += `<path d="${o}"/>`;
	}
	let F = i * .35, I = "";
	for (let e of x) {
		let t = e.node, r = j + e.cy, i = t.nodeType === "directory", a = "";
		if (e.highlighted) {
			let t = A + e.x - mD;
			a += `<rect class="pele-tree-highlight" x="${X(t)}" y="${X(j + e.top + 1)}" width="${X(M - A + mD - t)}" height="${X(e.height - 2)}" fill="var(--_c)" fill-opacity="0.14"${Ti}/>`;
		}
		if (e.icon !== void 0) {
			let t = e.icon.startsWith(rD + ":") ? e.icon.slice(rD.length + 1) : "", o = iD.get(t) ?? iD.get(i ? "folder" : "file"), s = n.icons?.(e.icon) ?? `<path d="${o}" stroke="var(--_m)" stroke-width="1.5"/>`;
			a += `<svg class="pele-icon" data-icon="${Y(e.icon)}" x="${X(A + e.x)}" y="${X(r - _ / 2)}" width="${X(_)}" height="${X(_)}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${s}</svg>`;
		}
		e.label ? a += fl(e.label, A + e.labelX, j + e.top + l, ` class="pele-label"${i ? " font-weight=\"var(--_hw)\"" : ""}`) : e.text !== "" && (a += `<text class="pele-label" x="${X(A + e.labelX)}" y="${X(r + F)}"${i ? " font-weight=\"var(--_hw)\"" : ""} xml:space="preserve">${nt(e.text)}</text>`), e.description ? a += fl(e.description, A + e.labelX, j + e.top + l + (e.label?.height ?? 0), " class=\"pele-tree-description\" font-style=\"italic\" fill=\"var(--_m)\"") : t.description && (a += `<text class="pele-tree-description" x="${X(A + O)}" y="${X(r + F)}" font-style="italic" fill="var(--_m)" xml:space="preserve">${nt(p(t.description))}</text>`), I += `<g class="pele-node pele-tree-${i ? "dir" : "file"}${Ri(t.cssClass ?? "")}" data-id="${Y(t.name)}">${a}</g>`;
	}
	return {
		svg: Ui("treeView", M, N, i, n, e, Z(v, M / 2, o + v.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + (P ? `<g class="pele-tree-guides" fill="none" stroke="var(--_b)" stroke-width="${X(d)}">${P}</g>` : "") + I),
		width: M,
		height: N,
		links: []
	};
}
var yD = {
	type: "treeView",
	parse: (e, t, n) => nD(tD(e), n),
	render: _D
};
function bD(e) {
	let t = [], n = [];
	for (let r of e) {
		let e = r.type === "Leaf", i = {
			name: r.name,
			children: e ? void 0 : []
		};
		for (i.classSelector = r.classSelector, r.cssCompiledStyles && (i.cssCompiledStyles = r.cssCompiledStyles), e && r.value !== void 0 && (i.value = r.value); n.length > 0 && n[n.length - 1].level >= r.level;) n.pop();
		n.length === 0 ? t.push(i) : n[n.length - 1].node.children.push(i), e || n.push({
			node: i,
			level: r.level
		});
	}
	return t;
}
function xD(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let t of e.TreemapRows) {
		if (t.$type !== "ClassDefStatement") continue;
		let e = n.get(t.className);
		e || n.set(t.className, e = []);
		let r = (t.styleText ?? "").replace(/\\,/g, "§§§").replace(/,/g, ";").replace(/§§§/g, ",");
		for (let t of r.split(";")) e.push(t);
	}
	let r = [];
	for (let t of e.TreemapRows) {
		if (t.$type !== "TreemapRow") continue;
		let e = t.item, i = e.classSelector ? n.get(e.classSelector) : void 0;
		r.push({
			level: t.indent ?? 0,
			name: e.name,
			type: e.$type,
			value: e.$type === "Leaf" ? e.value : void 0,
			classSelector: e.classSelector,
			cssCompiledStyles: i && i.length > 0 ? i : void 0
		});
	}
	return {
		type: "treemap",
		title: e.title || t,
		accTitle: e.accTitle ? e.accTitle.replace(/^\s+/g, "") : void 0,
		accDescr: e.accDescr ? e.accDescr.replace(/\n\s+/g, "\n") : void 0,
		roots: bD(r),
		classes: n
	};
}
var SD = [
	zo,
	Bo,
	Vo,
	{
		name: "TREEMAP_KEYWORD",
		pattern: /treemap-beta|treemap/y
	},
	{
		name: "CLASS_DEF",
		pattern: /classDef\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\s+([^;\r\n]*))?(?:;)?/y
	},
	{
		name: "STYLE_SEPARATOR",
		pattern: /:::/y
	},
	{
		name: "SEPARATOR",
		pattern: /:/y
	},
	{
		name: "COMMA",
		pattern: /,/y
	},
	{
		name: "INDENTATION",
		pattern: /[ \t]{1,}/y
	},
	{
		name: "WS",
		pattern: /[ \t]+/y,
		hidden: !0
	},
	{
		name: "ML_COMMENT",
		pattern: /\%\%[^\n]*/y,
		hidden: !0
	},
	{
		name: "NL",
		pattern: /\r?\n/y,
		hidden: !0
	},
	{
		name: "ID2",
		pattern: /[a-zA-Z_][a-zA-Z0-9_]*/y
	},
	{
		name: "NUMBER2",
		pattern: /[0-9_\.\,]+/y
	},
	{
		name: "STRING2",
		pattern: /"[^"]*"|'[^']*'/y
	}
], CD = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/;
function wD(e) {
	let t = new is(Ro(e, SD, "treemap"), SD, "treemap"), n = t.kinds, r = {
		$type: "Treemap",
		TreemapRows: []
	}, i = () => t.accept(5) ? t.expect(12) : void 0;
	for (t.expect(3); t.kind !== -1;) {
		let e = t.kind;
		if (e === 0) {
			r.accDescr = ts(t.take());
			continue;
		}
		if (e === 1) {
			r.accTitle = es(t.take());
			continue;
		}
		if (e === 2) {
			r.title = $o(t.take());
			continue;
		}
		e !== 8 && e !== 14 && e !== 4 && t.fail("a node, a class definition, or a title");
		let a = e === 8 ? t.take().length : void 0;
		if (t.kind === 4) {
			let e = CD.exec(t.take()), n = {
				$type: "ClassDefStatement",
				className: e[1]
			};
			e[2] && (n.styleText = e[2]), a !== void 0 && (n.indent = a), r.TreemapRows.push(n);
			continue;
		}
		let o = t.expect(14).slice(1, -1), s = n[t.i] === 8 ? t.i + 1 : t.i, c;
		n[s] === 6 || n[s] === 7 ? (t.i = s + 1, t.accept(8), c = {
			$type: "Leaf",
			name: o,
			value: parseFloat(t.expect(13).replace(/,/g, ""))
		}) : c = {
			$type: "Section",
			name: o
		};
		let l = i();
		l !== void 0 && (c.classSelector = l);
		let u = {
			$type: "TreemapRow",
			item: c
		};
		a !== void 0 && (u.indent = a), r.TreemapRows.push(u);
	}
	return r;
}
var TD = /^(?:.?[<>=^])?([-+( ])?(\$)?0?\d*(,)?(?:\.(\d+))?(~)?([a-zA-Z%])?$/;
function ED(e) {
	let t = "";
	for (let n = e.length; n > 0; n -= 3) t = e.slice(Math.max(0, n - 3), n) + (t ? "," + t : "");
	return t;
}
function DD(e) {
	let t = TD.exec(e === "$0,0" ? "$," : e) ?? TD.exec(","), n = t[1] === "+", r = t[3] !== void 0, i = t[4] === void 0 ? void 0 : Math.min(Number(t[4]), 20), a = t[6] ?? "";
	return (e) => {
		let o = Math.abs(e), s, c = "";
		if (a === "f" ? s = o.toFixed(i ?? 6) : a === "%" ? (s = (o * 100).toFixed(i ?? 6), c = "%") : s = a === "d" ? Math.round(o).toFixed(0) : a === "e" ? o.toExponential(i ?? 6) : String(Number(o.toPrecision(Math.max(1, i ?? 12)))), t[5] && s.includes(".") && !s.includes("e") && (s = s.replace(/\.?0+$/, "")), r && !s.includes("e")) {
			let e = s.indexOf(".");
			s = e === -1 ? ED(s) : ED(s.slice(0, e)) + s.slice(e);
		}
		return (e < 0 ? "-" : n ? "+" : "") + (t[2] ?? "") + s + c;
	};
}
function OD(e, t, n) {
	return {
		node: e,
		parent: t,
		series: n,
		value: e.children === void 0 && Number.isFinite(e.value) && e.value > 0 ? e.value : 0,
		children: [],
		x: 0,
		y: 0,
		w: 0,
		h: 0
	};
}
function kD(e, t, n, r, i, a, o) {
	let s = t, c = 0;
	for (; c < e.length;) {
		let t = i * a / s, l = Math.min(i, a), u = e[c].value * t, d = u, f = Math.max(l * l * d / (u * u), u * u / (l * l * d)), p = c + 1;
		for (; p < e.length;) {
			let n = e[p].value * t, r = u + n, i = Math.max(l * l * d / (r * r), r * r / (l * l * n));
			if (i > f) break;
			f = i, u = r, p++;
		}
		let m = u / l, h = 0;
		for (let u = c; u < p; u++) {
			let c = e[u], d = u === p - 1 ? l - h : c.value * t / m, f = i >= a ? n : n + h, g = i >= a ? r + h : r, _ = Math.round(f + o / 2), v = Math.round(g + o / 2);
			c.x = _, c.y = v, c.w = Math.round(f + (i >= a ? m : d) - o / 2) - _, c.h = Math.round(g + (i >= a ? d : m) - o / 2) - v, h += d, s -= c.value;
		}
		i >= a ? (n += m, i -= m) : (r += m, a -= m), c = p;
	}
}
function AD(e, t, n, r) {
	let i = e.map((e, t) => OD(e, void 0, t)), a = i.slice();
	for (let e = 0; e < a.length; e++) {
		let t = a[e];
		for (let e of t.node.children ?? []) {
			let n = OD(e, t, t.series);
			t.children.push(n), a.push(n);
		}
	}
	for (let e = a.length - 1; e >= 0; e--) {
		let t = a[e];
		t.parent && (t.parent.value += t.value);
	}
	let { gap: o, header: s, side: c } = r, l = [], u = (e, t, n, r, i) => {
		if (r <= 0 || i <= 0) return;
		let a = e.filter((e) => e.value > 0).sort((e, t) => t.value - e.value), s = 0;
		for (let e of a) s += e.value;
		if (a.length !== 0 && Number.isFinite(s)) {
			kD(a, s, t - o / 2, n - o / 2, r + o, i + o, o);
			for (let e of a) e.w > 0 && e.h > 0 && l.push(e);
		}
	};
	u(i, 0, 0, t, n);
	for (let e = 0; e < l.length; e++) {
		let t = l[e];
		t.children.length > 0 && u(t.children, t.x + c, t.y + s, t.w - 2 * c, t.h - s - c);
	}
	return l;
}
var jD = 28, MD = 6, ND = 1.25;
function PD(e, t, n, r, i) {
	let a = e.treemap?.[t];
	return typeof a == "number" && a >= r ? Math.min(a, i) : n;
}
function FD(e, t, n) {
	let r = n.fontSize ?? 16, i = Math.round(r * .875), a = Math.round(r * .75), o = Math.round(r * .5625), s = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), c = t.treemap ?? {}, l = n.padding ?? PD(t, "diagramPadding", 8, 0, 2e3), u = Math.round(ro(n, PD(t, "nodeWidth", 64, 1, 400) * 10, 200, 2 * l)), d = Math.round(PD(t, "nodeHeight", 40, 1, 400) * 10), f = c.showValues !== !1, m = DD(typeof c.valueFormat == "string" ? c.valueFormat : ","), h = AD(e.roots, u, d, {
		gap: PD(t, "padding", 4, 0, 200),
		header: jD,
		side: MD
	}), g = Q(e.title, !1, s, r, no(n), 1), _ = g.height > 0 ? g.height + 8 : 0, v = l + Math.max(0, (g.width - u) / 2), y = l + _, b = "", x = "";
	for (let e of h) {
		let t = e.node, n = Ii(t.cssCompiledStyles ?? []), c = Bi(e.series), l = v + e.x, u = y + e.y, d = p(t.name).trim(), h = f ? m(e.value) : "", g = `data-id="${Y(t.name)}">`, _ = `<rect x="${X(l)}" y="${X(u)}" width="${X(e.w)}" height="${X(e.h)}" fill="${c}"`;
		if (t.children !== void 0) {
			let r = "";
			if (e.h >= jD) {
				let t = e.w - 2 * MD - 4, o = h ? s.width(h, a, 0) : 0, c = o > 0 && t - o - 12 >= 3 * i, f = Ay(d, c ? t - o - 12 : t, i, i, s, 1), p = u + jD / 2 + 1;
				f && (r += `<text x="${X(l + MD + 2)}" y="${X(p + i * .35)}" font-weight="var(--_hw)"${n.text}>${nt(f.text)}</text>`), c && (r += `<text class="pele-value" x="${X(l + e.w - MD - 2)}" y="${X(p + a * .35)}" font-size="${a}" text-anchor="end" fill="var(--_m)"${n.text}>${nt(h)}</text>`);
			}
			let o = /[";]fill:/.test(n.shape) ? "" : " fill-opacity=\"0.12\"";
			b += `<g class="pele-node pele-section${Ri(t.classSelector ?? "")}" ${g}${_}${Ei(`${o} stroke="${c}"${n.shape}`)}/>${r}</g>`;
			continue;
		}
		let S = "", C = e.w - 8, w = Math.min(r, Math.floor((e.h - 4) / ND)), T = w >= o ? Ay(d, C, w, o, s) : void 0;
		if (T) {
			let t = X(l + e.w / 2), r = u + e.h / 2, i = Math.max(o, Math.round(T.size * .8)), a = (T.size + i) * ND;
			if (h && a <= e.h - 4 && s.width(h, i, 0) <= C) {
				let e = r - a / 2 + T.size * ND / 2, o = r + a / 2 - i * ND / 2;
				S = `<text x="${t}" y="${X(e + T.size * .35)}" font-size="${X(T.size)}"${n.text}>${nt(T.text)}</text><text class="pele-value" x="${t}" y="${X(o + i * .35)}" font-size="${X(i)}"${n.text}>${nt(h)}</text>`;
			} else S = `<text x="${t}" y="${X(r + T.size * .35)}" font-size="${X(T.size)}"${n.text}>${nt(T.text)}</text>`;
		}
		x += `<g class="pele-node pele-leaf${Ri(t.classSelector ?? "")}" ${g}${_}${Ei(n.shape)}/>${S}</g>`;
	}
	let S = Math.ceil(Math.max(u, g.width) + 2 * l), C = Math.ceil(d + _ + 2 * l);
	return {
		svg: Ui("treemap", S, C, r, n, e, Z(g, S / 2, l + g.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + (b ? `<g class="pele-sections" font-size="${i}">${b}</g>` : "") + (x ? `<g class="pele-leaves" text-anchor="middle" fill="var(--_bg)">${x}</g>` : "")),
		width: S,
		height: C,
		links: []
	};
}
var ID = {
	type: "treemap",
	parse: (e, t, n) => xD(wD(e), n),
	render: FD
}, LD = "EOF USECASE ACTOR SYSTEM_BOUNDARY END DIRECTION TD TB BT LR RL NOTE FOR JSON CLASS_DEF CLASS STYLE INCLUDE EXTEND TRUE FALSE IDENTIFIER NUMBER AT COMMA COLON HASH_COLOR CSS_IDENTIFIER CSS_ESCAPED_COMMA DASH DOT PERCENT CSS_PUNCTUATION LABEL_PUNCTUATION LABEL_SYMBOL PLAIN_STRING MARKDOWN_STRING UNCLOSED_MARKDOWN_STRING COMMENT NEWLINE ACC_DESCR_BLOCK ACC_TITLE_LINE ACC_DESCR_LINE JSON_DECLARATION_START JSON_OBJECT_LITERAL UNCLOSED_JSON_OBJECT_LITERAL GENERALIZATION DEPENDENCY_ARROW STEREOTYPE_START STEREOTYPE_END STEREOTYPE_TEXT UNCLOSED_STEREOTYPE_TEXT CLASS_SEPARATOR FORWARD_SOLID BACKWARD_SOLID FORWARD_CIRCLE BACKWARD_CIRCLE FORWARD_CROSS BACKWARD_CROSS MARKERLESS_SOLID METADATA_START LBRACE RBRACE LBRACKET RBRACKET LPAREN RPAREN".split(" "), RD = 1, zD = 2, BD = /* @__PURE__ */ new Uint8Array(128);
for (let e = 48; e <= 57; e++) BD[e] = RD;
for (let e = 65; e <= 90; e++) BD[e] = BD[e + 32] = RD;
BD[95] = RD;
for (let e of "!#$&*+/=?^|~") BD[e.charCodeAt(0)] = zD;
var VD = [
	0,
	12,
	5,
	14,
	3,
	9,
	2,
	2,
	2,
	2,
	2,
	4,
	3,
	4,
	8,
	5,
	5,
	7,
	6,
	4,
	5
];
function HD(e) {
	return e < 128 && (BD[e] & RD) !== 0;
}
function UD(e, t, n) {
	for (let r = 0; r < n.length; r++) if ((e.charCodeAt(t + r) | 32) !== n.charCodeAt(r)) return !1;
	return !0;
}
function WD(e, t, n) {
	switch (n) {
		case 97: return e.startsWith("actor", t) ? 2 : 0;
		case 115: return e.startsWith("systemBoundary", t) ? 3 : e.startsWith("style", t) ? 16 : 0;
		case 101: return e.startsWith("end", t) ? 4 : UD(e, t, "extend") ? 18 : 0;
		case 69: return UD(e, t, "extend") ? 18 : 0;
		case 100: return e.startsWith("direction", t) ? 5 : 0;
		case 84: return e.startsWith("TD", t) ? 6 : e.startsWith("TB", t) ? 7 : 0;
		case 66: return e.startsWith("BT", t) ? 8 : 0;
		case 76: return e.startsWith("LR", t) ? 9 : 0;
		case 82: return e.startsWith("RL", t) ? 10 : 0;
		case 110: return e.startsWith("note", t) ? 11 : 0;
		case 102: return e.startsWith("for", t) ? 12 : e.startsWith("false", t) ? 20 : 0;
		case 106: return e.startsWith("json", t) ? 13 : 0;
		case 99: return e.startsWith("classDef", t) ? 14 : e.startsWith("class", t) ? 15 : 0;
		case 105:
		case 73: return UD(e, t, "include") ? 17 : 0;
		case 116: return e.startsWith("true", t) ? 19 : 0;
		case 117: return +!!e.startsWith("usecase-beta", t);
		default: return 0;
	}
}
function GD(e, t) {
	let n = 1, r = 0;
	for (let i = 0; i < t; i++) {
		let a = e.charCodeAt(i);
		a !== 10 && a !== 13 || (a === 13 && i + 1 < t && e.charCodeAt(i + 1) === 10 && i++, n++, r = i + 1);
	}
	return [n, t - r + 1];
}
function KD(e, t, n) {
	let [r, i] = GD(e, t);
	return `line ${r}, column ${i} [${t},${n})`;
}
function qD(e, t, n) {
	for (let r = t + 1; r < e.length; r++) {
		let t = e.charCodeAt(r);
		if (t === n) return r + 1;
		if (t === 10 || t === 13) return -1;
	}
	return -1;
}
function JD(e, t) {
	let n = e.charCodeAt(t);
	return n !== 34 && n !== 39 || n === 34 && e.charCodeAt(t + 1) === 96 || qD(e, t, n) !== -1;
}
function YD(e, t, r) {
	let [i, a] = GD(e, t);
	return new n(`Error lexing usecase diagram: unexpected character: ->${e.charAt(t)}<- at offset: ${t}, skipped ${r} characters. at line ${i}, column ${a} [${t},${t + r})`, "syntax", {
		type: "usecase",
		line: i,
		column: a
	});
}
function XD(e) {
	let t = [], n = [], r = [], i = e.length, a = 0, o = !0, s = !1;
	for (; a < i;) {
		let c = e.charCodeAt(a);
		if (c === 32 || c === 9) {
			a++;
			continue;
		}
		let l, u = a + 1, d = !1;
		if (c < 128 && (BD[c] & RD) !== 0) {
			if (l = 0, c === 97 && o && e.startsWith("acc", a)) {
				let t = e.startsWith("Descr", a + 3);
				if (t || e.startsWith("Title", a + 3)) {
					let n = a + 8;
					for (; K(e.charCodeAt(n));) n++;
					let r = e.charCodeAt(n);
					if (r === 58) for (l = t ? 42 : 41, u = n + 1; u < i && e.charCodeAt(u) !== 10 && e.charCodeAt(u) !== 13;) u++;
					else if (r === 123 && t && !s) {
						let t = e.indexOf("}", n + 1);
						t === -1 ? s = !0 : (l = 40, u = t + 1);
					}
				}
			} else if (c === 106 && e.startsWith("json", a) && K(e.charCodeAt(a + 4))) {
				let s = a + 5;
				for (; K(e.charCodeAt(s));) s++;
				let c = s;
				for (; HD(e.charCodeAt(s));) s++;
				if (s > c) {
					for (; K(e.charCodeAt(s));) s++;
					if (e.charCodeAt(s) === 64) {
						for (s++; K(e.charCodeAt(s));) s++;
						if (e.charCodeAt(s) === 123) {
							t.push(43), n.push(a), r.push(s), a = s;
							let c = 0, l = !1, u = !1, d = s;
							for (; d < i; d++) {
								let t = e.charCodeAt(d);
								if (l) u ? u = !1 : t === 92 ? u = !0 : t === 34 && (l = !1);
								else if (t === 34) l = !0;
								else if (t === 123) c++;
								else if (t === 125 && --c === 0) break;
							}
							t.push(d < i ? 44 : 45), n.push(s), a = d < i ? d + 1 : i, r.push(a), o = !1;
							continue;
						}
					}
				}
			}
			if (l === 0) {
				for (; u < i && HD(e.charCodeAt(u));) u++;
				let t = WD(e, a, c);
				if (t !== 0) t === 1 || u - a === VD[t] ? (l = t, u = a + VD[t]) : l = 21;
				else if ((c === 111 || c === 120) && e.charCodeAt(a + 1) === 45 && e.charCodeAt(a + 2) === 45) l = c === 111 ? 56 : 58, u = a + 3;
				else if (q(c)) {
					let t = a + 1;
					for (; q(e.charCodeAt(t));) t++;
					if (e.charCodeAt(t) === 46 && q(e.charCodeAt(t + 1))) {
						for (l = 22, u = t + 2; q(e.charCodeAt(u));) u++;
						for (; ae(e.charCodeAt(u));) u++;
					} else l = 21;
				} else for (l = 21; e.charCodeAt(u) === 45 && HD(e.charCodeAt(u + 1));) for (l = 27, u += 2; HD(e.charCodeAt(u));) u++;
			}
		} else if (c === 10) l = 39, d = !0;
		else if (c === 13) l = 39, d = !0, e.charCodeAt(u) === 10 && u++;
		else if (c === 34 || c === 39) {
			if (c === 34 && e.charCodeAt(a + 1) === 96) {
				let t = e.indexOf("`\"", a + 2);
				l = t === -1 ? 37 : 36, u = t === -1 ? i : t + 2;
			} else if (l = 35, u = qD(e, a, c), u === -1) {
				let t = a + 1;
				for (; t < i && !JD(e, t);) t++;
				throw YD(e, a, t - a);
			}
		} else if (c === 37) {
			if (o && e.charCodeAt(u) === 37) for (l = 38; u < i && e.charCodeAt(u) !== 10 && e.charCodeAt(u) !== 13;) u++;
			else l = 31;
		} else if (c === 45) {
			if (e.charCodeAt(u) !== 45) l = 29;
			else {
				for (; e.charCodeAt(u) === 45;) u++;
				let t = e.charCodeAt(u), n = u - a === 2;
				n && t === 124 && e.charCodeAt(u + 1) === 62 ? (l = 46, u += 2) : t === 62 ? (l = 53, u++) : n && (t === 111 || t === 120) ? (l = t === 111 ? 55 : 57, u++) : l = 59;
			}
		} else if (c === 46) {
			let t = e.charCodeAt(u);
			if (t === 46 && e.charCodeAt(u + 1) === 62) l = 47, u += 2;
			else if (q(t)) {
				for (l = 22; q(e.charCodeAt(u));) u++;
				for (; ae(e.charCodeAt(u));) u++;
			} else l = 30;
		} else if (c === 60) {
			if (e.charCodeAt(u) === 60) {
				if (t.push(48), n.push(a), r.push(a + 2), o = !1, a += 2, a >= i) break;
				if (e.charCodeAt(a) === 62 && e.charCodeAt(a + 1) === 62) l = 49, u = a + 2;
				else {
					let o = a, s = !1;
					for (; o < i; o++) {
						let t = e.charCodeAt(o);
						if (t === 10 || t === 13) break;
						if (t === 62 && e.charCodeAt(o + 1) === 62) {
							s = !0;
							break;
						}
					}
					if (s && e.slice(a, o).trim() !== "") t.push(50), n.push(a), r.push(o), l = 49, a = o, u = o + 2;
					else {
						for (; o < i && e.charCodeAt(o) !== 10 && e.charCodeAt(o) !== 13;) o++;
						if (o === a) {
							for (; o < i && (e.charCodeAt(o) === 10 || e.charCodeAt(o) === 13);) o++;
							throw YD(e, a, o - a);
						}
						l = 51, u = o;
					}
				}
			} else if (e.charCodeAt(u) === 45 && e.charCodeAt(u + 1) === 45) for (l = 54, u += 2; e.charCodeAt(u) === 45;) u++;
			else l = 33;
		} else if (c === 58) e.charCodeAt(u) === 58 && e.charCodeAt(u + 1) === 58 ? (l = 52, u += 2) : l = 25;
		else if (c === 64) e.charCodeAt(u) === 123 ? (l = 60, u++) : l = 23;
		else if (c === 123) l = 61;
		else if (c === 125) l = 62;
		else if (c === 91) l = 63;
		else if (c === 93) l = 64;
		else if (c === 40) l = 65;
		else if (c === 41) l = 66;
		else if (c === 44) l = 24;
		else if (c === 35) {
			for (; oe(e.charCodeAt(u));) u++;
			l = u > a + 1 ? 26 : 32;
		} else if (c === 92) e.charCodeAt(u) === 44 ? (l = 28, u++) : l = 33;
		else if (c < 127 && c > 32) l = (BD[c] & zD) === 0 ? 33 : 32;
		else for (l = 34; u < i;) {
			let t = e.charCodeAt(u);
			if (t >= 32 && t < 127 || t === 9 || t === 10 || t === 13) break;
			u++;
		}
		t.push(l), n.push(a), r.push(u), a = u, o = d;
	}
	for (let e = 0; e < 3; e++) t.push(0), n.push(i), r.push(i);
	return {
		types: t,
		starts: n,
		ends: r
	};
}
function ZD() {
	return {
		type: "usecase",
		actors: /* @__PURE__ */ new Map(),
		useCases: /* @__PURE__ */ new Map(),
		systemBoundaries: /* @__PURE__ */ new Map(),
		relationships: [],
		notes: /* @__PURE__ */ new Map(),
		jsonNodes: /* @__PURE__ */ new Map(),
		classDefs: /* @__PURE__ */ new Map(),
		direction: "LR",
		title: void 0,
		accTitle: "",
		accDescr: "",
		accDescription: "",
		source: "",
		headerSpan: [0, 0],
		statements: []
	};
}
function QD() {
	return {
		elements: [],
		boundaries: [],
		jsons: [],
		relationships: [],
		notes: [],
		metadata: [],
		classes: [],
		styles: [],
		classDefs: [],
		direction: void 0,
		accTitle: "",
		accDescription: ""
	};
}
function $D(e, t) {
	if (t.length === 0) return;
	let n = new Set(e);
	for (let r of t) n.has(r) || (n.add(r), e.push(r));
}
function eO(e) {
	let t = /* @__PURE__ */ new Set([
		"actor",
		"usecase",
		"boundary",
		"edge"
	]);
	for (let { key: n, value: r } of e) if (n === "icon") t.clear(), t.add("actor");
	else if (n === "animate" || n === "animation") t.clear(), t.add("edge");
	else if (n === "type") t.clear(), r === "rect" || r === "package" ? t.add("boundary") : (r === "normal" || r === "hollow" || r === "awesome") && t.add("actor");
	else if (n === "business") t.delete("boundary"), t.delete("edge");
	else return;
	return t.size === 1 ? [...t][0] : void 0;
}
function tO(e, t, r, i, a) {
	let o = ZD(), { actors: s, useCases: c, systemBoundaries: l } = o, u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), h = (t) => KD(e, t[0], t[1]), g = (t, r) => {
		let [i, a] = GD(e, r[0]);
		return new n(t, "semantic", {
			type: "usecase",
			line: i,
			column: a
		});
	}, _ = (e, t) => {
		throw g(`${e} at ${h(t)}`, t);
	}, v = (e, t, n, r, i) => {
		let a = (e) => e === void 0 ? "" : ` (label "${e}")`;
		throw g(`${e} at ${h(t)}${a(r)}; previous declaration at ${h(n)}${a(i)}`, t);
	}, y = (e, t, n) => _(`Metadata property '${n.key}' is invalid for ${t} '${e}'`, n.keySpan), b = (e, t) => {
		let n = m.get(e);
		(n === void 0 || t < n) && m.set(e, t);
	}, x = (e) => [...e].sort((e, t) => (m.get(e.id) ?? 0) - (m.get(t.id) ?? 0)), S = (e, t) => {
		u.set(e.id, {
			kind: t,
			span: e.span,
			generated: e.generated,
			label: e.label.text
		});
	}, C = (e, t) => {
		let n = u.get(e.id);
		if (!n) return;
		let r = e.generated ? e.label.text : void 0, i = n.generated ? n.label : void 0;
		n.kind !== t && v(`ID '${e.id}' is declared as both ${n.kind} and ${t}`, e.span, n.span, r, i), (n.generated || e.generated) && v(`Generated ID '${e.id}' collides with another declaration`, e.span, n.span, r, i);
	}, w = (e, t, n) => {
		let r = u.get(e);
		r && v(`ID '${e}' is declared more than once (${r.kind} and ${t})`, n, r.span, void 0, r.generated ? r.label : void 0), u.set(e, {
			kind: t,
			span: n,
			generated: !1
		});
	}, T = (e, t, n) => {
		let { key: r, value: i } = t, a = (a) => {
			!n && a !== void 0 && a !== i && v(`Actor '${e.id}' has conflicting ${r} metadata`, t.keySpan, e.span);
		};
		r === "type" && (i === "normal" || i === "hollow" || i === "awesome") ? (a(e.actorType), e.actorType = i) : r === "icon" && typeof i == "string" ? (a(e.icon), e.icon = i) : r === "business" && typeof i == "boolean" ? (a(e.business), e.business = i) : y(e.id, "actor", t);
	}, E = (e, t, n) => {
		for (let r of t ?? []) e.kind === "actor" ? T(e, r, n) : r.key === "business" && typeof r.value == "boolean" ? (!n && e.business !== void 0 && e.business !== r.value && v(`Use case '${e.id}' has conflicting business metadata`, r.keySpan, e.span), e.business = r.value) : y(e.id, "usecase", r);
	}, D = (e) => {
		let t;
		if (e.kind === "actor") {
			c.delete(e.id);
			let n = {
				id: e.id,
				label: e.label.text,
				labelType: e.label.type,
				business: e.business ?? !1,
				classes: [...e.classes],
				type: e.icon ? "icon" : e.actorType ?? "normal",
				styles: s.get(e.id)?.styles ?? []
			};
			e.icon && (n.icon = e.icon), s.set(e.id, n), t = n;
		} else s.delete(e.id), t = {
			id: e.id,
			label: e.label.text,
			labelType: e.label.type,
			business: e.business ?? !1,
			classes: [...e.classes],
			shape: e.shape ?? "ellipse",
			styles: c.get(e.id)?.styles ?? []
		}, c.set(e.id, t);
		e.stereotype && (t.stereotype = e.stereotype), e.parent?.id && (t.parentId = e.parent.id);
	}, O = (e) => {
		C(e, e.kind);
		let t = e.parent?.id ? e.parent : void 0, n = d.get(e.id);
		if (n) (n.label.text !== e.label.text || n.label.type !== e.label.type) && v(`ID '${e.id}' has conflicting labels`, e.span, n.span), e.shape && n.shape && e.shape !== n.shape && v(`Use case '${e.id}' has conflicting shapes`, e.span, n.span), t && n.parent?.id && t.id !== n.parent.id && v(`Element '${e.id}' belongs to more than one system boundary`, t.span, n.parent.span), e.stereotype && n.stereotype && e.stereotype !== n.stereotype && v(`Element '${e.id}' has conflicting stereotypes`, e.span, n.stereotypeSpan ?? n.span), n.shape ??= e.shape, n.parent ??= e.parent, n.stereotype ??= e.stereotype, n.stereotypeSpan ??= e.stereotype ? e.span : void 0, $D(n.classes, e.classes), E(n, e.metadata, !1);
		else {
			let n = {
				kind: e.kind,
				id: e.id,
				label: e.label,
				span: e.span,
				generated: e.generated,
				classes: [...e.classes],
				parent: t,
				shape: e.shape,
				stereotype: e.stereotype,
				stereotypeSpan: e.stereotype ? e.span : void 0
			};
			E(n, e.metadata, !1), d.set(e.id, n), S(e, e.kind);
		}
	}, k = (e) => {
		C(e, "boundary");
		let t = f.get(e.id);
		t ? ((t.label.text !== e.label.text || t.label.type !== e.label.type) && v(`Boundary '${e.id}' has conflicting titles`, e.span, t.span), $D(t.classes, e.classes)) : (f.set(e.id, {
			...e,
			classes: [...e.classes],
			members: []
		}), S(e, "boundary"));
	}, A = (e) => {
		e.classed && !e.declares && _(`Relationship endpoint '${e.id}' uses ::: without declaring the node`, e.span);
		let t = u.get(e.id);
		return t ? t.kind : (d.set(e.id, {
			...e,
			kind: "usecase",
			shape: "ellipse",
			classes: []
		}), S(e, "usecase"), b(e.id, e.span[0]), "usecase");
	}, j = (e, t) => {
		let n = u.get(e)?.kind;
		return (n === "actor" ? s.get(e) : n === "usecase" ? c.get(e) : n === "boundary" ? l.get(e) : n === "json" ? o.jsonNodes.get(e) : p.get(e)) ?? _(`Class/style target '${e}' is unresolved or anonymous`, t);
	}, M = [];
	for (let { source: e, target: n } of t.relationships) b(e.id, e.span[0]), b(n.id, n.span[0]);
	for (let e of t.elements) b(e.id, e.span[0]), M.push({
		offset: e.span[0],
		run: () => O(e)
	});
	for (let e of t.boundaries) b(e.id, e.span[0]), M.push({
		offset: e.span[0],
		run: () => k(e)
	});
	for (let e of t.jsons) b(e.id, e.span[0]), M.push({
		offset: e.span[0],
		run: () => w(e.id, "json", e.span)
	});
	for (let { id: e, idSpan: n } of t.relationships) e && n && M.push({
		offset: n[0],
		run: () => w(e, "edge", n)
	});
	M.sort((e, t) => e.offset - t.offset);
	for (let e of M) e.run();
	for (let e of x(d.values())) D(e);
	for (let e of x(f.values())) l.set(e.id, {
		id: e.id,
		label: e.label.text,
		labelType: e.label.type,
		type: "rect",
		members: [],
		classes: [],
		styles: []
	});
	for (let e of x(t.jsons)) o.jsonNodes.set(e.id, {
		id: e.id,
		value: e.value,
		propertyOrder: e.propertyOrder,
		classes: [...e.classes],
		styles: []
	});
	let N = 0;
	for (let e of t.relationships) {
		let { source: t, target: n, type: r } = e, i = A(t), a = A(n), s = (e) => e === "actor" || e === "usecase" || e === "json";
		s(i) || v(`Relationship source '${t.id}' cannot be ${i}`, t.span, u.get(t.id).span), s(a) || v(`Relationship target '${n.id}' cannot be ${a}`, n.span, u.get(n.id).span), r !== "include" && r !== "extend" || i === "usecase" && a === "usecase" || _(`${r} relationship requires use-case endpoints`, e.span), r === "generalization" && (i === "json" || i !== a) && _("Generalization requires actor-to-actor or use-case-to-use-case endpoints", e.span), r === "association" && (i === "json" || a === "json") && e.arrowType > 2 && _(`JSON relationship '${t.id}' to '${n.id}' permits only point, reversed-point, or markerless solid association`, e.span);
		let c = e.id ?? `edge-${N++}`, l = {
			id: c,
			explicitId: !!e.id,
			source: t.id,
			target: n.id,
			type: r,
			arrowType: e.arrowType,
			minlen: e.minlen,
			classes: [],
			styles: [],
			animate: !1
		};
		e.label && (l.label = e.label.text, l.labelType = e.label.type), o.relationships.push(l), p.set(c, l);
	}
	let P = new Map(s), F = new Map(c);
	s.clear(), c.clear();
	for (let e of x(d.values())) {
		let t = P.get(e.id), n = F.get(e.id);
		t ? s.set(e.id, t) : n ? c.set(e.id, n) : D(e);
	}
	for (let { target: e, span: n, properties: r, statement: i } of t.metadata) {
		let t = u.get(e);
		if (!t) {
			let t = eO(r);
			return _(`Metadata target '${e}' is unresolved${t ? ` (metadata implies ${t})` : ""}`, n);
		}
		let a = t.kind;
		a === "actor" || a === "usecase" ? E(d.get(e), r, !0) : a === "edge" && (i.kind = "edgeMetadata", i.edges = [{
			id: e,
			span: i.span,
			idSpan: n,
			metadata: i.metadata
		}], delete i.nodes);
		let o = f.get(e), s = p.get(e);
		for (let t of a === "actor" || a === "usecase" ? [] : r) {
			let { key: n, value: r } = t;
			a === "boundary" && o && n === "type" && (r === "rect" || r === "package") ? o.type = r : a === "edge" && s && n === "animate" && typeof r == "boolean" ? s.animate = r : a === "edge" && s && n === "animation" && (r === "fast" || r === "slow") ? (s.animation = r, s.animate = !0) : y(e, a, t);
		}
	}
	for (let e of o.relationships) e.animation && (e.animate = !0);
	for (let e of d.values()) e.kind === "actor" ? (e.icon && e.actorType && e.actorType !== "normal" && _(`Actor '${e.id}' cannot combine icon with type '${e.actorType}'`, e.span), e.business && (e.icon || e.actorType === "awesome") && _(`Business actor '${e.id}' must use normal or hollow geometry`, e.span)) : e.shape === "rect" && e.business && _(`Rectangular use case '${e.id}' cannot be a business use case`, e.span), D(e);
	for (let e of [...t.elements].sort((e, t) => e.span[0] - t.span[0])) {
		if (!e.parent?.id) continue;
		let t = f.get(e.parent.id).members;
		t.includes(e.id) || t.push(e.id);
	}
	for (let e of f.values()) {
		let t = l.get(e.id);
		t.type = e.type ?? "rect", t.members = e.members, t.classes = [...e.classes];
	}
	let I = 0;
	for (let e of t.notes) {
		let t = u.get(e.target);
		if (!t) return _(`Note target '${e.target}' is unresolved`, e.span);
		t.kind !== "actor" && t.kind !== "usecase" && v(`Note target '${e.target}' must be an actor or use case, not ${t.kind}`, e.span, t.span);
		let n = `note-${I++}`;
		o.notes.set(n, {
			id: n,
			target: e.target,
			label: e.label.text,
			labelType: e.label.type
		});
	}
	for (let e of t.classDefs) for (let t of e.ids) o.classDefs.set(t, {
		id: t,
		styles: [...e.styles]
	});
	for (let e of t.classes) for (let t of e.targets) $D(j(t.id, t.span).classes, e.classes);
	for (let e of t.styles) j(e.target, e.span).styles.push(...e.styles);
	return o.direction = t.direction ?? o.direction, o.title = a, o.accTitle = t.accTitle, o.accDescription = t.accDescription, o.accDescr = t.accDescription.replace(/\n\s+/g, "\n"), o.source = e, o.headerSpan = r, o.statements = i, o;
}
var nO = class extends Error {
	constructor(e) {
		super("Invalid JSON token"), this.offset = e;
	}
	offset;
};
function rO(e) {
	let t = /* @__PURE__ */ new Map(), n = [], r = [], i = e.length, a = 0, o = "", s = 0, c = () => {
		for (; a < i;) {
			let t = e.charCodeAt(a);
			if (t !== 32 && t !== 9 && t !== 10 && t !== 13) return;
			a++;
		}
	}, l = (t) => {
		a++;
		let n = "";
		for (; a < i;) {
			let r = a, i = e[a++];
			if (i === "\"") return n;
			if (i.charCodeAt(0) < 32) throw new nO(r);
			if (i !== "\\") {
				t && (n += i);
				continue;
			}
			let o = a, s = e[a++], c;
			if (s === "\"" || s === "\\" || s === "/") c = s;
			else if (s === "b") c = "\b";
			else if (s === "f") c = "\f";
			else if (s === "n") c = "\n";
			else if (s === "r") c = "\r";
			else if (s === "t") c = "	";
			else if (s === "u") {
				let t = e.slice(a, a + 4);
				if (!/^[\dA-Fa-f]{4}$/.test(t)) throw new nO(a);
				c = String.fromCharCode(parseInt(t, 16)), a += 4;
			} else throw new nO(o);
			t && (n += c);
		}
		throw new nO(a);
	}, u = (t) => {
		for (let n = 0; n < t.length; n++) if (e[a + n] !== t[n]) throw new nO(a + n);
		a += t.length;
	}, d = () => {
		if (e.charCodeAt(a) === 45 && a++, e.charCodeAt(a) === 48) a++;
		else if (q(e.charCodeAt(a))) for (; q(e.charCodeAt(a));) a++;
		else throw new nO(a);
		if (e.charCodeAt(a) === 46) {
			if (a++, !q(e.charCodeAt(a))) throw new nO(a);
			for (; q(e.charCodeAt(a));) a++;
		}
		if ((e.charCodeAt(a) | 32) == 101) {
			if (a++, (e.charCodeAt(a) === 43 || e.charCodeAt(a) === 45) && a++, !q(e.charCodeAt(a))) throw new nO(a);
			for (; q(e.charCodeAt(a));) a++;
		}
	};
	for (c();;) if (s === 0) {
		c();
		let i = e.charCodeAt(a);
		if (s = 2, i === 123) {
			a++;
			let i = [];
			t.set(o, i), n.push(o), c(), e.charCodeAt(a) === 125 ? a++ : (r.push({
				object: !0,
				pointer: o,
				keys: i,
				ranges: /* @__PURE__ */ new Map(),
				key: "",
				from: 0,
				index: 0
			}), s = 1);
		} else if (i === 91) a++, c(), e.charCodeAt(a) === 93 ? a++ : (r.push({
			object: !1,
			pointer: o,
			keys: [],
			ranges: /* @__PURE__ */ new Map(),
			key: "",
			from: 0,
			index: 0
		}), o += "/0", s = 0);
		else if (i === 34) l(!1);
		else if (i === 116) u("true");
		else if (i === 102) u("false");
		else if (i === 110) u("null");
		else if (i === 45 || q(i)) d();
		else throw new nO(a);
	} else if (s === 1) {
		let i = r[r.length - 1];
		if (e.charCodeAt(a) !== 34) throw new nO(a);
		let u = l(!0), d = i.ranges.get(u);
		if (d === void 0) i.keys.push(u);
		else for (let e = d[0]; e < d[1]; e++) t.delete(n[e]);
		if (i.key = u, i.from = n.length, c(), e.charCodeAt(a) !== 58) throw new nO(a);
		a++, o = `${i.pointer}/${u.replaceAll("~", "~0").replaceAll("/", "~1")}`, s = 0;
	} else {
		let t = r[r.length - 1];
		if (t === void 0) break;
		t.object ? t.ranges.set(t.key, [t.from, n.length]) : t.index++, c();
		let i = e.charCodeAt(a);
		if (i === (t.object ? 125 : 93)) a++, r.pop();
		else {
			if (i !== 44) throw new nO(a);
			a++, c(), o = `${t.pointer}/${t.index}`, s = +!!t.object;
		}
	}
	if (c(), a !== i) throw new nO(a);
	return t;
}
function iO(e, t, n, r) {
	let i = Math.min(Math.max(t, 0), e.length);
	for (let t = 0; t < i; t++) {
		let i = e.charCodeAt(t);
		i === 13 ? (n++, r = 1) : i === 10 ? (t === 0 || e.charCodeAt(t - 1) !== 13) && (n++, r = 1) : r++;
	}
	return [n, r];
}
function aO(e, t, n, r) {
	let i = /\bposition (\d+)\b/.exec(e);
	if (i) return iO(t, parseInt(i[1], 10), n, r);
	let a = /\bline (\d+) column (\d+)\b/.exec(e);
	if (a) {
		let e = parseInt(a[1], 10), t = parseInt(a[2], 10);
		return [n + e - 1, e === 1 ? r + t - 1 : t];
	}
	if (/unexpected end|end of json input/i.test(e)) return iO(t, t.length, n, r);
}
function oO(e, t, r) {
	return new n(`${e} (line ${t}, column ${r})`, "syntax", {
		type: "usecase",
		line: t,
		column: r
	});
}
function sO(e, t) {
	let n;
	try {
		n = JSON.parse(e);
	} catch (n) {
		let r = n instanceof Error ? n.message : String(n), [i, a] = t(), o = aO(r, e, i, a);
		if (!o) {
			let t = 0;
			try {
				rO(e);
			} catch (e) {
				e instanceof nO && (t = e.offset);
			}
			o = iO(e, t, i, a);
		}
		throw oO(`Invalid JSON: ${r}`, o[0], o[1]);
	}
	if (typeof n != "object" || !n || Array.isArray(n)) {
		let [e, n] = t();
		throw oO("JSON value must have an object root", e, n);
	}
	return {
		value: n,
		propertyOrder: rO(e)
	};
}
var cO = 1, lO = 2, uO = 4, dO = 8, fO = 16, pO = 32, mO = 64, hO = "DEPENDENCY_ARROW|GENERALIZATION|FORWARD_SOLID|BACKWARD_SOLID|MARKERLESS_SOLID|FORWARD_CIRCLE|BACKWARD_CIRCLE|FORWARD_CROSS|BACKWARD_CROSS", gO = "IDENTIFIER|PLAIN_STRING|MARKDOWN_STRING", _O = "PLAIN_STRING|MARKDOWN_STRING|LABEL_TEXT", vO = "ACC_TITLE_LINE|ACC_DESCR_LINE|ACC_DESCR_BLOCK|DIRECTION|ACTOR|SYSTEM_BOUNDARY|NOTE|JSON_DECLARATION_START|CLASS_DEF|CLASS|STYLE", yO = "WORD|PLAIN_STRING|NUMBER|HASH_COLOR|CSS_IDENTIFIER|CSS_ESCAPED_COMMA|DASH|DOT|PERCENT|CSS_PUNCTUATION|COLON|LPAREN|RPAREN|LBRACKET|RBRACKET|LBRACE|RBRACE|AT|MARKERLESS_SOLID", bO = /* @__PURE__ */ new Uint8Array(67);
function xO(e, t) {
	for (let n of e.split("|")) if (n === "WORD") for (let e = 1; e <= 21; e++) bO[e] |= t;
	else bO[LD.indexOf(n)] |= t;
}
xO(`NEWLINE|COMMENT|${vO}|${gO}`, cO), xO(`IDENTIFIER|${hO}`, lO), xO(yO, uO), xO(`STEREOTYPE_START|CLASS_SEPARATOR|IDENTIFIER|${hO}|NEWLINE|EOF`, dO), xO(`NEWLINE|COMMENT|ACTOR|${gO}`, fO), xO("FORWARD_SOLID|MARKERLESS_SOLID|FORWARD_CIRCLE|FORWARD_CROSS", pO), xO("NEWLINE|IDENTIFIER|PLAIN_STRING|RBRACE", mO);
var SO = /* @__PURE__ */ new Set([
	"allowmixing",
	"newpage",
	"package",
	"rectangle",
	"skinparam"
]), CO = "", wO = [], TO = [], EO = [], $ = 0, DO = 0, OO, kO, AO = [], jO = 0, MO = 0;
function NO(e) {
	return CO.slice(TO[e], EO[e]);
}
function PO(e) {
	return [TO[e], EO[e]];
}
function FO(e) {
	let [t, r] = GD(CO, TO[$]);
	throw new n(`Error parsing usecase diagram: ${e} at line ${t}, column ${r} [${TO[$]},${EO[$]})`, "syntax", {
		type: "usecase",
		line: t,
		column: r
	});
}
function IO(e) {
	FO(`Expecting token of type --> ${e} <-- but found --> '${NO($)}' <--`);
}
function LO(e) {
	return wO[$] !== e && IO(LD[e]), $++;
}
function RO(e) {
	FO(`Expecting: one of these possible Token sequences:
${e.split("|").map((e, t) => `  ${t + 1}. [${e}]`).join("\n")}
but found: '${NO($)}'`);
}
function zO() {
	let e = gO.split("|"), t = e.flatMap((e) => [
		"NEWLINE",
		"IDENTIFIER",
		"PLAIN_STRING",
		"RBRACE"
	].map((t) => `${e}, METADATA_START, ${t}`)), n = `STEREOTYPE_START|CLASS_SEPARATOR|IDENTIFIER|${hO}|NEWLINE|EOF`.split("|"), r = e.flatMap((e, t) => (t === 0 ? [
		"LPAREN",
		"LBRACKET",
		...n
	] : n).map((t) => `${e}, ${t}`));
	return [
		vO,
		...t,
		...r,
		...t
	].join("|");
}
function BO(e) {
	return e >= 1 && e <= 21;
}
function VO(e) {
	return e >= 1 && e <= 34;
}
function HO() {
	DO = EO[$ - 1], wO[$] === 39 ? $++ : wO[$] !== 0 && RO("NEWLINE|EOF");
}
function UO(e) {
	let t = wO[e] === 36 ? 2 : +(wO[e] === 35);
	return [TO[e] + t, EO[e] - t];
}
function WO(e) {
	let t = UO(e);
	return {
		text: CO.slice(t[0], t[1]),
		type: wO[e] === 36 ? "markdown" : "text",
		span: t
	};
}
function GO(e) {
	return e.replace(/\W/g, "_");
}
function KO() {
	let e = wO[$];
	if (e === 35 || e === 36) return WO($++);
	VO(e) || RO(_O);
	let t = $;
	for (; VO(wO[$]);) $++;
	let n = [TO[t], EO[$ - 1]];
	return {
		text: CO.slice(n[0], n[1]),
		type: "text",
		span: n
	};
}
function qO(e) {
	return e === 21 || e === 35;
}
function JO() {
	let e = $;
	qO(wO[$]) || RO("IDENTIFIER|PLAIN_STRING"), $++, LO(25);
	let t = $, n = wO[$];
	!qO(n) && n !== 19 && n !== 20 && RO("IDENTIFIER|PLAIN_STRING|TRUE|FALSE"), $++;
	let r = UO(e), i = UO(t);
	return {
		key: CO.slice(r[0], r[1]),
		value: n === 19 || n !== 20 && CO.slice(i[0], i[1]),
		span: [TO[e], EO[t]],
		keySpan: r,
		valueSpan: i
	};
}
function YO() {
	let e = wO[$], t = wO[$ + 1], n = wO[$ + 2];
	return e === 24 ? qO(t) || t === 39 && (n === 39 || qO(n)) : e === 39 ? t === 24 || qO(t) || t === 39 && (n === 39 || n === 24 || qO(n)) : !1;
}
function XO() {
	LO(60);
	let e = [];
	for (; wO[$] === 39;) $++;
	if (qO(wO[$])) {
		for (e.push(JO()); YO();) {
			if (wO[$] === 24) $++;
			else {
				for (; wO[$] === 39;) $++;
				wO[$] === 24 && $++;
			}
			for (; wO[$] === 39;) $++;
			e.push(JO());
		}
		for (wO[$] === 24 && $++; wO[$] === 39;) $++;
	}
	return LO(62), e;
}
function ZO(e) {
	return e.map(({ key: e, span: t, keySpan: n, valueSpan: r }) => ({
		key: e,
		span: t,
		keySpan: n,
		valueSpan: r
	}));
}
function QO(e, t) {
	do {
		$++;
		let n = LO(21);
		e.push(NO(n)), t.push(PO(n));
	} while (wO[$] === 24);
}
function $O(e) {
	let t = $, n = wO[$], r = {
		id: "",
		label: void 0,
		span: UO(t),
		generated: n !== 21,
		classes: [],
		classSpans: [],
		explicit: !1,
		nodeSpan: [0, 0]
	};
	if (n === 21) {
		$++, r.id = NO(t);
		let n = wO[$];
		n === 65 || e && n === 63 ? ($++, r.label = KO(), LO(n === 65 ? 66 : 64), r.shape = n === 65 ? "ellipse" : "rect") : r.label = WO(t);
	} else n === 35 || n === 36 ? ($++, r.label = WO(t), r.id = GO(r.label.text)) : RO(gO);
	return r;
}
function ek(e) {
	let t = $, n = $O(!e);
	if (e && (n.shape = void 0), wO[$] === 60 && (n.metadata = XO()), wO[$] === 48) {
		$++;
		let e = LO(50);
		LO(49), n.stereotype = NO(e).trim(), n.stereotypeSpan = PO(e);
	}
	return wO[$] === 52 && QO(n.classes, n.classSpans), n.explicit = !!(n.shape || n.metadata || n.stereotype), n.nodeSpan = [TO[t], EO[$ - 1]], n;
}
function tk(e, t) {
	return {
		id: e.id,
		kind: t,
		label: e.label,
		span: e.span,
		generated: e.generated,
		parent: kO,
		shape: e.shape,
		metadata: e.metadata,
		stereotype: e.stereotype,
		classes: e.classes
	};
}
function nk(e, t) {
	return {
		id: e.id,
		label: e.label,
		span: e.span,
		generated: e.generated,
		declares: t,
		classed: e.classes.length > 0
	};
}
function rk(e, t) {
	let n = {
		id: e.id,
		span: e.nodeSpan,
		idSpan: e.span,
		labelSpan: e.label.span
	};
	return t && (n.defines = !0), e.stereotypeSpan && (n.stereotypeSpan = e.stereotypeSpan), e.metadata && (n.metadata = ZO(e.metadata)), e.classSpans.length > 0 && (n.classSpans = e.classSpans), n;
}
function ik(e) {
	if (wO[$] < 1 || wO[$] > 36) return !1;
	for (let t = $ + 1;; t++) {
		let n = wO[t];
		if (n === 59 || (bO[n] & e) !== 0) return !0;
		if (n < 1 || n > 36) return !1;
	}
}
function ak(e) {
	let t = EO[e] - TO[e] - (wO[e] === 59 ? 0 : 1);
	return Math.max(1, t - 1);
}
function ok() {
	let e = $, t = {
		type: "association",
		arrowType: 0,
		minlen: 1,
		target: void 0,
		span: [0, 0]
	};
	wO[$] === 21 && wO[$ + 1] === 23 && (t.explicitId = NO($), t.explicitIdSpan = PO($), $ += 2);
	let n = $, r = wO[$++];
	if (r === 47) LO(25), wO[$] !== 17 && wO[$] !== 18 && RO("INCLUDE|EXTEND"), t.type = wO[$] === 17 ? "include" : "extend", t.label = {
		text: t.type,
		type: "text",
		span: PO($)
	}, $++;
	else if (r === 46) t.type = "generalization";
	else if (r === 53) t.minlen = ak(n);
	else if (r === 54) t.arrowType = 1, EO[n] - TO[n] === 3 && ik(0) ? (t.label = KO(), t.minlen = ak(LO(59))) : t.minlen = ak(n);
	else if (r === 59) {
		if (t.arrowType = 2, EO[n] - TO[n] === 2 && ik(pO)) {
			t.label = KO();
			let e = wO[$];
			e === 53 ? t.arrowType = 0 : e === 55 ? t.arrowType = 3 : e === 57 ? t.arrowType = 4 : e !== 59 && RO("FORWARD_SOLID|MARKERLESS_SOLID|FORWARD_CIRCLE|FORWARD_CROSS"), (t.arrowType === 0 || t.arrowType === 2) && (t.minlen = ak($)), $++;
		} else t.minlen = ak(n);
	} else r === 55 ? t.arrowType = 3 : r === 57 ? t.arrowType = 4 : r === 56 || r === 58 ? (t.arrowType = r === 56 ? 5 : 6, ik(0) && (t.label = KO(), LO(59))) : ($--, RO(hO));
	return t.target = ek(!1), t.span = [TO[e], EO[$ - 1]], t;
}
function sk(e) {
	return {
		kind: e,
		span: [0, 0]
	};
}
function ck(e, t, n, r) {
	let i = n.target;
	i.explicit && OO.elements.push(tk(i, "usecase")), OO.relationships.push({
		source: nk(e, t),
		target: nk(i, i.explicit),
		span: n.span,
		id: n.explicitId,
		idSpan: n.explicitIdSpan,
		type: n.type,
		arrowType: n.arrowType,
		label: n.label,
		minlen: n.minlen
	}), r.push(rk(i, i.explicit));
	let a = sk("edge");
	return a.nodes = r, a.edges = [{
		id: n.explicitId ?? `edge-${jO++}`,
		span: a.span
	}], n.explicitIdSpan && (a.edges[0].idSpan = n.explicitIdSpan), n.label && (a.edges[0].labelSpan = n.label.span), a;
}
function lk(e) {
	let t = sk("node");
	return t.nodes = e, t;
}
function uk(e) {
	$++;
	let t = [ek(!0)], n;
	if (wO[$] === 24) do
		$++, t.push(ek(!0));
	while (wO[$] === 24);
	else e && (bO[wO[$]] & lO) !== 0 && (n = ok());
	HO();
	for (let e of t) OO.elements.push(tk(e, "actor"));
	let r = t.map((e) => rk(e, !0));
	return n ? ck(t[0], !0, n, r) : lk(r);
}
function dk(e) {
	let t = ek(!1), n = e && (bO[wO[$]] & lO) !== 0 ? ok() : void 0;
	HO(), n || (t.explicit = !0, t.shape ??= "ellipse"), t.explicit && OO.elements.push(tk(t, "usecase"));
	let r = [rk(t, t.explicit)];
	return n ? ck(t, t.explicit, n, r) : lk(r);
}
function fk() {
	$++;
	let e = $O(!0), t = {
		id: e.id,
		label: e.label,
		span: e.span,
		generated: e.generated,
		classes: e.classes
	}, n = wO[$] === 60 ? XO() : void 0;
	wO[$] === 52 && QO(e.classes, e.classSpans), HO(), OO.boundaries.push(t), kO = t;
	let r = [];
	for (; (bO[wO[$]] & fO) !== 0;) r.push(vk(!1));
	kO = void 0;
	let i = LO(4);
	HO();
	let a = sk("group");
	return a.group = t.id, a.idSpan = t.span, a.titleSpan = t.label.span, a.endSpan = PO(i), a.classSpans = e.classSpans, r.length > 0 && (a.children = r), n && (a.metadata = ZO(n), OO.metadata.push({
		target: t.id,
		span: t.span,
		properties: n,
		statement: a
	})), a;
}
function pk() {
	let e = $, t = wO[$];
	for (BO(t) || t === 27 ? $++ : t === 59 ? ($++, BO(wO[$]) || IO("WORD"), $++) : RO("WORD|CSS_IDENTIFIER|MARKERLESS_SOLID"), LO(25), (bO[wO[$]] & uO) === 0 && FO(`Expecting: expecting at least one iteration which starts with one of these possible Token sequences::
  <[${yO.replaceAll("|", "] ,[")}]>
but found: '${NO($)}'`); (bO[wO[$]] & uO) !== 0;) $++;
	return CO.slice(TO[e], EO[$ - 1]).replaceAll("\\,", ",");
}
function mk() {
	let e = [pk()];
	for (; wO[$] === 24;) $++, e.push(pk());
	return e;
}
function hk() {
	let e = [LO(21)];
	for (; wO[$] === 24;) $++, e.push(LO(21));
	return e;
}
function gk(e) {
	let t = UO(e);
	return {
		id: NO(e),
		span: t,
		idSpan: t
	};
}
function _k() {
	let e = $, t = wO[$], n;
	if (t === 41 || t === 42 || t === 40) {
		$++;
		let r = NO(e);
		t === 40 ? OO.accDescription = r.slice(r.indexOf("{") + 1, r.lastIndexOf("}")).trim() : t === 42 ? OO.accDescription = r.slice(r.indexOf(":") + 1).trim() : OO.accTitle = r.slice(r.indexOf(":") + 1).trim(), n = sk(t === 41 ? "accTitle" : "accDescr");
	} else if (t === 5) {
		$++;
		let e = wO[$];
		(e < 6 || e > 10) && RO("TD|TB|BT|LR|RL"), OO.direction = e === 6 ? "TB" : NO($), $++, n = sk("direction");
	} else {
		if (t === 2) return uk(!0);
		if (t === 3) return fk();
		if (t === 11) {
			$++, LO(12);
			let e = LO(21), t = KO();
			OO.notes.push({
				target: NO(e),
				span: PO(e),
				label: t
			}), n = sk("note"), n.ref = `note-${MO++}`, n.refSpan = t.span, n.nodes = [gk(e)];
		} else if (t === 43) {
			$++;
			let t = LO(44), r = [], i = [];
			wO[$] === 52 && QO(r, i);
			let a = TO[e] + 4;
			for (; CO.charCodeAt(a) === 32 || CO.charCodeAt(a) === 9;) a++;
			let o = a;
			for (; /\w/.test(CO.charAt(o));) o++;
			let s = {
				id: CO.slice(a, o),
				value: {},
				propertyOrder: /* @__PURE__ */ new Map(),
				span: [a, o],
				classes: r
			};
			OO.jsons.push(s), AO.push([s, t]), n = sk("json"), n.nodes = [{
				id: s.id,
				span: s.span,
				idSpan: s.span,
				defines: !0,
				classSpans: i
			}], n.classSpans = i;
		} else if (t === 14) {
			$++;
			let e = hk();
			OO.classDefs.push({
				ids: e.map(NO),
				styles: mk()
			}), n = sk("classDef"), n.ref = NO(e[0]), n.refSpan = PO(e[0]);
		} else if (t === 15) {
			$++;
			let e = hk(), t = hk();
			OO.classes.push({
				targets: e.map((e) => ({
					id: NO(e),
					span: PO(e)
				})),
				classes: t.map(NO)
			}), n = sk("classAssign"), n.ref = NO(t[0]), n.refSpan = PO(t[0]), n.nodes = e.map(gk);
		} else if (t === 16) {
			$++;
			let e = LO(21);
			OO.styles.push({
				target: NO(e),
				span: PO(e),
				styles: mk()
			}), n = sk("style"), n.nodes = [gk(e)];
		} else {
			let r = wO[$ + 1];
			if (r === 60) {
				(bO[wO[$ + 2]] & mO) === 0 && RO(zO()), $++;
				let r = gk(e);
				t !== 21 && (r.id = GO(CO.slice(r.span[0], r.span[1])));
				let i = XO();
				n = sk("metadata"), n.nodes = [r], n.metadata = ZO(i), OO.metadata.push({
					target: r.id,
					span: r.span,
					properties: i,
					statement: n
				});
			} else return ((bO[r] & dO) === 0 && (t !== 21 || r !== 65 && r !== 63) || t === 21 && SO.has(NO(e).toLowerCase())) && RO(zO()), dk(!0);
		}
	}
	return HO(), n;
}
function vk(e) {
	let t = $, n = wO[$];
	if (n === 39) return $++, {
		kind: "blank",
		span: PO(t)
	};
	if (n === 38) return $++, HO(), {
		kind: "comment",
		span: PO(t)
	};
	let r = e ? _k() : n === 2 ? uk(!1) : dk(!1);
	if (r.span = [TO[t], DO], r.edges) for (let e of r.edges) e.span = r.span;
	return r;
}
function yk(e, t) {
	CO = e, {types: wO, starts: TO, ends: EO} = XD(e), $ = 0, OO = QD(), kO = void 0, AO = [], jO = 0, MO = 0;
	try {
		let n = LO(1);
		HO();
		let r = [];
		for (; (bO[wO[$]] & cO) !== 0;) r.push(vk(!0));
		wO[$] !== 0 && FO(`Redundant input, expecting EOF but found: ${NO($)}`);
		for (let [t, n] of AO) {
			let r = sO(NO(n), () => GD(e, TO[n]));
			t.value = r.value, t.propertyOrder = r.propertyOrder;
		}
		return tO(e, OO, PO(n), r, t);
	} finally {
		CO = "", wO = TO = EO = AO = [];
	}
}
var bk = {
	normal: "usecaseActor",
	hollow: "usecaseActorHollow",
	awesome: "usecaseActorAwesome",
	icon: "usecaseActorIcon"
}, xk = [
	["none", "arrow_point"],
	["arrow_point", "none"],
	["none", "none"],
	["none", "arrow_circle"],
	["none", "arrow_cross"],
	["arrow_circle", "none"],
	["arrow_cross", "none"]
];
function Sk(e) {
	return typeof e == "string" ? e : e === null ? "null" : String(e);
}
function Ck(e) {
	let t = [], n = [[
		e.value,
		"",
		""
	]], r = [];
	for (; n.length > 0;) {
		let [i, a, o] = n.pop();
		if (r.length = 0, Array.isArray(i)) i.length === 0 ? t.push({
			key: a,
			accessibleKey: a,
			value: "[]"
		}) : i.every((e) => typeof e != "object" || !e) ? i.forEach((e, n) => t.push({
			key: n === 0 ? a : "",
			accessibleKey: a,
			value: Sk(e)
		})) : i.forEach((e, t) => r.push([
			e,
			`${a}[${t}]`,
			`${o}/${t}`
		]));
		else if (typeof i == "object" && i) {
			let n = i, s = e.propertyOrder.get(o) ?? Object.keys(n);
			s.length === 0 && t.push({
				key: a,
				accessibleKey: a,
				value: "{}"
			});
			for (let e of s) r.push([
				Object.prototype.hasOwnProperty.call(n, e) ? n[e] : void 0,
				a ? `${a}.${e}` : e,
				`${o}/${e.replaceAll("~", "~0").replaceAll("/", "~1")}`
			]);
		} else t.push({
			key: a,
			accessibleKey: a,
			value: Sk(i)
		});
		for (let e = r.length - 1; e >= 0; e--) n.push(r[e]);
	}
	return t;
}
function wk(...e) {
	return e.filter(Boolean).join(" ");
}
function Tk(e) {
	return e.type === "generalization" ? ["none", "extension"] : e.type === "association" ? xk[e.arrowType] ?? xk[2] : xk[0];
}
function Ek(e) {
	let t = [], n = [], r = (t) => {
		let n = /* @__PURE__ */ new Map();
		for (let r of ["default", ...t]) {
			let t = e.classDefs.get(r);
			if (t) for (let e of t.styles) {
				let t = e.trim(), r = t.indexOf(":"), i = (r === -1 ? t : t.slice(0, r)).trim();
				i && n.set(i, t);
			}
		}
		return [...n.values()];
	};
	for (let n of e.actors.values()) t.push({
		id: n.id,
		label: n.label,
		labelType: n.labelType,
		shape: bk[n.type],
		isGroup: !1,
		padding: 10,
		cssClasses: wk("default", "usecase-actor", `usecase-actor-${n.type}`, n.business && "usecase-business", ...n.classes),
		cssStyles: [...n.styles],
		cssCompiledStyles: r(n.classes),
		actorType: n.type,
		business: n.business,
		icon: n.icon || void 0,
		stereotype: n.stereotype || void 0,
		parentId: n.parentId || void 0
	});
	for (let n of e.useCases.values()) {
		let e = n.shape === "ellipse";
		t.push({
			id: n.id,
			label: n.label,
			labelType: n.labelType,
			shape: e ? n.business ? "usecaseBusiness" : "usecaseEllipse" : "rect",
			isGroup: !1,
			padding: e ? 20 : 10,
			cssClasses: wk("default", "usecase-element", `usecase-${n.shape}`, n.business && "usecase-business", ...n.classes),
			cssStyles: [...n.styles],
			cssCompiledStyles: r(n.classes),
			business: n.business,
			stereotype: n.stereotype || void 0,
			parentId: n.parentId || void 0
		});
	}
	for (let n of e.notes.values()) t.push({
		id: n.id,
		label: n.label,
		labelType: n.labelType,
		shape: "note",
		isGroup: !1,
		padding: 10,
		cssClasses: "default usecase-note",
		cssStyles: [],
		cssCompiledStyles: r([]),
		noteTarget: n.target
	});
	for (let n of e.jsonNodes.values()) t.push({
		id: n.id,
		label: n.id,
		labelType: "text",
		shape: "usecaseJsonTable",
		isGroup: !1,
		padding: 10,
		cssClasses: wk("default", "usecase-json-table", ...n.classes),
		cssStyles: [...n.styles],
		cssCompiledStyles: r(n.classes),
		jsonRows: Ck(n)
	});
	for (let n of e.systemBoundaries.values()) t.push({
		id: n.id,
		label: n.label,
		labelType: n.labelType,
		shape: "usecaseSystemBoundary",
		isGroup: !0,
		padding: 20,
		cssClasses: wk("default", "system-boundary", `system-boundary-${n.type}`, ...n.classes),
		cssStyles: [...n.styles],
		cssCompiledStyles: r(n.classes),
		boundaryType: n.type
	});
	for (let t of e.relationships) {
		let e = t.type === "include" || t.type === "extend", [i, a] = Tk(t), o = t.animate || t.animation !== void 0, s = {
			id: t.id,
			start: t.source,
			end: t.target,
			relationshipType: t.type,
			pattern: e ? "dotted" : "solid",
			arrowTypeStart: i,
			arrowTypeEnd: a,
			classes: wk("default", "relationship", `relationship-${t.type}`, ...t.classes, o && `edge-animation-${t.animation ?? "fast"}`),
			style: [...t.styles],
			cssCompiledStyles: r(t.classes),
			animate: t.animate,
			animation: t.animation,
			minlen: t.minlen,
			explicitId: t.explicitId,
			internal: !1
		};
		e ? (s.label = t.type, s.labelType = "text") : t.type === "association" && (t.label && (s.label = t.label), t.labelType && (s.labelType = t.labelType)), n.push(s);
	}
	for (let t of e.notes.values()) n.push({
		id: `${t.id}-edge`,
		start: t.id,
		end: t.target,
		relationshipType: "note",
		pattern: "dotted",
		arrowTypeStart: "none",
		arrowTypeEnd: "none",
		classes: "default relationship relationship-note",
		style: [],
		cssCompiledStyles: r([]),
		animate: !1,
		minlen: 1,
		explicitId: !1,
		internal: !0
	});
	return {
		nodes: t,
		edges: n
	};
}
var Dk = 32, Ok = 16, kk = 72, Ak = 20, jk = 26, Mk = 40, Nk = 60, Pk = 6, Fk = 6, Ik = 10, Lk = 8, Rk = 9, zk = 12, Bk = 14, Vk = " fill=\"var(--_s)\" stroke=\"var(--_b)\"";
function Hk(e, t, n) {
	let r = e.usecase?.[t];
	return typeof r == "number" && r > 0 ? Math.min(r, 2e3) : n;
}
function Uk(e) {
	return e.replace(/[&<>\\]/g, (e) => `&#${e.charCodeAt(0)};`);
}
function Wk(e, t, n, r, i, a = 0) {
	return Q(e && !t ? Uk(e) : e, t, n, r, i, a);
}
function Gk(e, t, n, r) {
	let i = n === 1 || n === 2 ? 1 : -1, a = n === 1 || n === 3, o = (a ? e.w : e.h) / 2, s = 0;
	if (e.kind === 0) a ? (o = Mk / 2 + 3, s = (Nk - e.h) / 2) : o += 2;
	else if (e.kind === 1) {
		let t = (a ? e.h : e.w) / 2;
		o *= Math.sqrt(Math.max(1 - (r / t) ** 2, 0));
	}
	return a ? [t.x + i * o, t.y + s + r] : [t.x + r, t.y + i * o];
}
function Kk(e, t) {
	let n = t === 1 || t === 3;
	if (e.kind === 0) return n ? Nk * .5 : Mk * .6;
	let r = n ? e.h : e.w;
	return e.kind === 1 ? r * .6 : r - 16;
}
function qk(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i = (e, n, i, a) => {
		let o = t[e];
		if (o.isGroup) return;
		let s = n[i] - o.x, c = n[i + 1] - o.y, l;
		if (Math.abs(Math.abs(c) - o.h / 2) < .5) l = c < 0 ? 0 : 2;
		else if (Math.abs(Math.abs(s) - o.w / 2) < .5) l = s < 0 ? 3 : 1;
		else return;
		let u = e * 4 + l, d = {
			route: n,
			at: i,
			toward: n[a + (l & 1 ? 1 : 0)]
		}, f = r.get(u);
		f ? f.push(d) : r.set(u, [d]);
	};
	for (let t of e) {
		let e = t.route.length - 3;
		t.src === t.dst || e < 3 || (i(t.src, t.route, 0, 3), i(t.dst, t.route, e, e - 3));
	}
	for (let [e, i] of r) {
		let r = e >> 2, a = e & 3, o = n[r], s = i.length > 1 ? Math.min(Bk, Kk(o, a) / (i.length - 1)) : 0;
		i.sort((e, t) => e.toward - t.toward);
		for (let e = 0; e < i.length; e++) {
			let [n, c] = Gk(o, t[r], a, (e - (i.length - 1) / 2) * s);
			i[e].route[i[e].at] = n, i[e].route[i[e].at + 1] = c;
		}
	}
}
function Jk(e, t, n, r, i) {
	let a = e - n * zk, o = t - r * zk, s = zk * .5;
	return `<path class="pele-marker" d="M${X(e)},${X(t)}L${X(a - r * s)},${X(o + n * s)}L${X(a + r * s)},${X(o - n * s)}Z" fill="var(--_bg)" stroke="${i}" stroke-linejoin="round"/>`;
}
function Yk(e) {
	return e === "extension" ? zk : vi(e);
}
function Xk(e, t, n, r, i, a) {
	return e === "extension" ? Jk(t, n, r, i, a) : yi(e, t, n, r, i, a);
}
function Zk(e, t) {
	let n = e.node, r = e.style.shape, i = ` fill="none" stroke="var(--_b)"${e.style.line}`, a = -21, o = 9, s;
	return n.actorType === "hollow" ? (o = 8, s = `<circle cy="-21" r="8" fill="var(--_bg)" stroke="var(--_b)"${r}/><path d="M-20,-9H20V0H5.5L20,15.5L12,25.5L0,12L-12,25.5L-20,15.5L-5.5,0H-20Z" fill="var(--_bg)" stroke="var(--_b)" stroke-linejoin="round"${r}/>`) : n.actorType === "awesome" ? s = `<path d="M0,-30A11,11 0 1 1 0,-8A11,11 0 1 1 0,-30ZM-20,25C-20,9 -12,-3 0,-3C12,-3 20,9 20,25C20,28 18,30 15,30H-15C-18,30 -20,28 -20,25Z" fill="var(--_b)"${r}/>` : n.actorType === "icon" ? (a = -14, o = 12, s = `<rect x="-22" y="-26" width="44" height="44"${Ei(Vk + r)}/><svg class="pele-icon" data-icon="${Y(n.icon ?? "")}" x="-14" y="-18" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${t?.(n.icon ?? "") ?? ""}</svg>`) : s = `<circle cy="-21" r="9"${Vk}${r}/><path d="M0,-12V10M-14,-3H14M0,10L-12,30M0,10L12,30"${i}/>`, n.business && (s += `<path class="pele-business" d="M${X(.12 * o)},${X(a + .99 * o)}L${X(.92 * o)},${X(a - .39 * o)}"${i}/>`), s;
}
function Qk(e, t, n) {
	return oo(e.direction) ? ao(n, (r) => $k(e, t, n, r)) : $k(e, t, n, !1);
}
function $k(e, t, n, r) {
	let i = Ek(e), a = n.fontSize ?? 16, o = Math.round(a * .875), s = Math.round(a * .8125), c = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), l = n.padding ?? 8, u = n.icons, d = r ? "TB" : Br(e.direction), f = d === "LR" || d === "RL", p = /* @__PURE__ */ new Map(), m = [], h = [];
	i.nodes.forEach((e, t) => p.set(e.id, t));
	for (let e of i.nodes) {
		let t = Ii(e.cssStyles.length > 0 ? e.cssCompiledStyles.concat(e.cssStyles) : e.cssCompiledStyles), n = +!!t.bold | (t.italic ? 2 : 0), r = t.fontSize ?? a, i = e.labelType === "markdown", l = Wk(e.stereotype && `«${e.stereotype}»`, !1, c, s, 200, n), u = {
			node: e,
			kind: 2,
			style: t,
			label: l,
			stereotype: l,
			w: 0,
			h: 0,
			rows: [],
			keyW: 0,
			headH: 0,
			loops: 0
		}, d;
		if (e.isGroup) {
			u.kind = 4, u.label = Wk(e.label, i, c, r, 4e3, n);
			let t = u.label.height;
			d = ii(0, 0), d.isGroup = !0, d.padX = Ak, d.padBottom = Ak, d.padTop = e.boundaryType === "package" ? t + 2 * Fk + 16 : t > 0 ? t + 16 : Ak, d.minW = u.label.width + 2 * Ak;
		} else {
			if (e.jsonRows) {
				u.kind = 3, u.label = Wk(e.label, !1, c, r, 4e3, n | 1);
				let t = 0;
				for (let r of e.jsonRows) {
					let e = Wk(r.key, !1, c, o, 4e3, n), i = Wk(r.value, !1, c, o, 260, n);
					u.rows.push([e, i]), u.keyW = Math.max(u.keyW, e.width), t = Math.max(t, i.width), u.h += Math.max(e.height, i.height, Math.round(o * 1.5)) + Lk;
				}
				u.keyW > 0 && (u.keyW += 2 * Ik), u.headH = Math.max(u.label.height, Math.round(r * 1.5)) + Lk, u.w = Math.max(u.label.width + 2 * Ik, u.rows.length > 0 ? u.keyW + t + 2 * Ik : 0, 72), u.h += u.headH;
			} else if (e.actorType) u.kind = 0, u.label = Wk(e.label, i, c, r, 140, n), u.w = Math.max(Mk, u.label.width, l.width), u.h = Nk + Pk + l.height + u.label.height;
			else {
				u.label = Wk(e.label, i, c, e.shape === "note" ? o : r, 180, n);
				let t = Math.max(u.label.width, l.width), a = u.label.height + l.height;
				e.shape === "usecaseEllipse" || e.shape === "usecaseBusiness" ? (u.kind = 1, u.w = Math.max(t + 2 * e.padding + (e.business ? 16 : 4), 88), u.h = Math.max(a + 28, 48)) : e.shape === "note" ? (u.w = t + 2 * e.padding + 6, u.h = a + 18) : (u.w = Math.max(t + 2 * e.padding + 12, 80), u.h = Math.max(a + 24, 44));
			}
			d = ii(u.w, u.h);
		}
		d.seq = m.length, m.push(u), h.push(d);
	}
	i.nodes.forEach((e, t) => {
		h[t].parent = e.parentId === void 0 ? -1 : p.get(e.parentId) ?? -1;
	});
	let g = [], _ = [], v = [];
	for (let e of i.edges) {
		let t = p.get(e.start), n = p.get(e.end);
		if (t === void 0 || n === void 0) continue;
		let r = Wk(e.relationshipType === "include" || e.relationshipType === "extend" ? `«${e.label}»` : e.label, e.labelType === "markdown", c, o, 200);
		t === n && (m[t].loops++, f ? h[t].h += 2 * (jk + (r.height > 0 ? r.height + 8 : 0)) : h[t].w += 2 * (jk + (r.width > 0 ? r.width + 12 : 0))), v.push(e), _.push(r), g.push({
			src: t,
			dst: n,
			minlen: e.minlen,
			labelW: r.width > 0 ? r.width + 12 : 0,
			labelH: r.height > 0 ? r.height + 4 : 0,
			route: [],
			labelX: 0,
			labelY: 0
		});
	}
	let y = si(h, g, d, {
		nodeSep: Hk(t, "nodeSpacing", Dk),
		edgeSep: Ok,
		rankSep: Hk(t, "rankSpacing", kk),
		portSep: 20
	}), b = Xs(e.title, c, a, 4e3), x = b.height > 0 ? b.height + 12 : 0, S = Math.max(y.width, b.width);
	ri(h, g, l + (S - y.width) / 2, l + x);
	let C = Math.ceil(S + 2 * l), w = Math.ceil(y.height + x + 2 * l), T = /* @__PURE__ */ new Map();
	for (let e of g) ci(T, e.route);
	qk(g, h, m);
	let E = "", D = "";
	for (let e = 0; e < m.length; e++) {
		let t = m[e], n = h[e], r = t.node, i = Ri(r.cssClasses.replace(/^default\s?/, "")), a = Y(r.id), c = t.style.text, l = t.style.shape, d = t.w, f = t.h;
		if (t.kind === 4) {
			let e = n.x - n.w / 2, o = n.y - n.h / 2, s = ` fill="var(--_a)" fill-opacity="0.5" stroke="var(--_b)"${l}`, d = ` class="pele-cluster-label" fill="var(--_m)"${c}`, f;
			if (r.boundaryType === "package") {
				let r = Math.min(t.label.width + 2 * Fk + 8, n.w), i = t.label.height + 2 * Fk;
				f = `<rect class="pele-boundary-tab" x="${X(e)}" y="${X(o)}" width="${X(r)}" height="${X(i)}"${s}/><rect x="${X(e)}" y="${X(o + i)}" width="${X(n.w)}" height="${X(n.h - i)}"${s}/>` + Z(t.label, e + r / 2, o + i / 2, d, u);
			} else f = `<rect x="${X(e)}" y="${X(o)}" width="${X(n.w)}" height="${X(n.h)}"${Ei(s)}/>` + Z(t.label, eA(n, t.label.width, T), o + 8 + t.label.height / 2, d, u);
			E += `<g class="pele-cluster pele-boundary${i}" data-id="${a}">${f}</g>`;
			continue;
		}
		let p, g;
		if (t.kind === 0) {
			g = "pele-actor";
			let e = -f / 2, n = e + Nk + Pk + t.stereotype.height / 2;
			p = `<g class="pele-actor-figure" transform="translate(0,${X(e + Nk / 2)})">${Zk(t, u)}</g>` + Z(t.stereotype, 0, n, ` class="pele-stereotype" font-size="${s}" fill="var(--_m)"`, u) + Z(t.label, 0, f / 2 - t.label.height / 2, ` class="pele-label"${c}`, u);
		} else if (t.kind === 3) {
			g = "pele-json";
			let e = -d / 2, n = -f / 2 + t.headH, r = "", i = `M${X(e)},${X(n)}H${X(e + d)}`;
			t.keyW > 0 && (i += `M${X(e + t.keyW)},${X(n)}V${X(f / 2)}`);
			for (let [i, a] of t.rows) {
				let s = Math.max(i.height, a.height, Math.round(o * 1.5)) + Lk;
				r += Z(i, e + Ik + i.width / 2, n + s / 2, " class=\"pele-json-key\" fill=\"var(--_m)\"", u) + tA(a, e + t.keyW + Ik, n + s / 2, ` class="pele-json-value"${c}`, u), n += s;
			}
			p = `<rect x="${X(e)}" y="${X(-f / 2)}" width="${X(d)}" height="${X(f)}"${Ei(Vk + l)}/><path class="pele-json-lines" d="${i}" fill="none" stroke="var(--_b)"${t.style.line}/>` + Z(t.label, 0, -f / 2 + t.headH / 2, ` class="pele-label" font-weight="var(--_hw)"${c}`, u) + `<g font-size="${o}">${r}</g>`;
		} else {
			let e = t.stereotype.height / 2, n;
			if (t.kind === 1) {
				if (g = "pele-usecase", n = `<ellipse rx="${X(d / 2)}" ry="${X(f / 2)}"${Vk}${l}/>`, r.business) {
					let e = d / 2 - 15, r = d / 2 - 5, i = (e) => f / 2 * Math.sqrt(1 - (e / (d / 2)) ** 2);
					n += `<path class="pele-business" d="M${X(e)},${X(i(e))}L${X(r)},${X(-i(r))}" fill="none" stroke="var(--_b)"${t.style.line}/>`;
				}
			} else if (r.shape === "note") {
				g = "pele-note";
				let e = d / 2, r = f / 2;
				n = `<path d="M${X(-e)},${X(-r)}H${X(e - Rk)}L${X(e)},${X(Rk - r)}V${X(r)}H${X(-e)}Z" fill="var(--_a)" stroke="var(--_b)" stroke-linejoin="round"${l}/><path d="M${X(e - Rk)},${X(-r)}V${X(Rk - r)}H${X(e)}" fill="none" stroke="var(--_b)" stroke-linejoin="round"${t.style.line}/>`;
			} else g = "pele-usecase", n = `<rect x="${X(-d / 2)}" y="${X(-f / 2)}" width="${X(d)}" height="${X(f)}"${Ei(Vk + l)}/>`;
			p = n + Z(t.stereotype, 0, -t.label.height / 2, ` class="pele-stereotype" font-size="${s}" fill="var(--_m)"`, u) + Z(t.label, 0, e, ` class="pele-label"${r.shape === "note" ? ` font-size="${o}"` : ""}${c}`, u);
		}
		D += `<g class="pele-node ${g}${i}" data-id="${a}" transform="translate(${X(n.x)},${X(n.y)})">${p}</g>`;
	}
	let O = "", k = "", A = /* @__PURE__ */ new Map();
	for (let e = 0; e < g.length; e++) {
		let t = g[e], n = v[e], r = _[e], i = n.style.length > 0 || n.cssCompiledStyles.length > 0 ? Ii(n.cssCompiledStyles.concat(n.style)) : void 0, a = n.arrowTypeStart, o = n.arrowTypeEnd, s;
		if (t.src === t.dst) {
			let e = h[t.src], n = m[t.src], i = A.get(t.src) ?? 0;
			A.set(t.src, i + 1);
			let c = f ? 2 : 1, l = Math.min(Kk(n, c) / 2, 8 + i * 6), u = jk + i * 8, [d, p] = Gk(n, e, c, -l), [g, _] = Gk(n, e, c, l), v = Math.hypot(u, l) || 1, y = f ? l / v : u / v, b = f ? u / v : l / v, x = Yk(a), S = Yk(o), C = (e, t, n, r) => f ? `${X(e + n * l * +!!r)},${X(t + r)}` : `${X(e + r)},${X(t + n * l * +!!r)}`, w = f ? d - y * x : d + y * x, T = f ? p + b * x : p - b * x, E = g + y * S, D = _ + b * S;
			s = {
				d: `M${X(w)},${X(T)}C${C(d, p, -1, u)} ${C(g, _, 1, u)} ${X(E)},${X(D)}`,
				sx: d,
				sy: p,
				sdx: f ? y : -y,
				sdy: f ? -b : b,
				ex: g,
				ey: _,
				edx: -y,
				edy: -b
			}, f ? (t.labelX = e.x, t.labelY = Math.max(p, _) + u * .75 + 6 + r.height / 2) : (t.labelX = Math.max(d, g) + u * .75 + 8 + r.width / 2, t.labelY = e.y);
		} else {
			if (t.route.length < 6) continue;
			s = _i(t.route, void 0, Yk(a), Yk(o));
		}
		let c = i?.stroke ? nt(i.stroke) : "var(--_l)", l = n.internal ? "2 3" : n.pattern === "dotted" ? "5 4" : n.animate ? "9 5" : "";
		if (O += `<g class="pele-edge pele-${n.relationshipType}${Ri(n.classes.replace(/^default relationship relationship-\S+\s?/, ""))}" data-id="${Y(n.id)}"${i?.line ?? ""}><path d="${s.d}"${l ? ` stroke-dasharray="${l}"` : ""}/>` + Xk(a, s.sx, s.sy, s.sdx, s.sdy, c) + Xk(o, s.ex, s.ey, s.edx, s.edy, c) + "</g>", r.width > 0) {
			let e = t.labelX, a = t.labelY, o = n.relationshipType === "include" || n.relationshipType === "extend";
			k += bi(n.id, r, e, a, (o ? " fill=\"var(--_m)\"" : "") + (i?.text ?? ""), u);
		}
	}
	return {
		svg: Ui("usecase", C, w, a, n, e, Z(b, C / 2, l + b.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + (E ? `<g class="pele-clusters">${E}</g>` : "") + (O ? `<g class="pele-edges" fill="none" stroke="var(--_l)" stroke-linecap="round">${O}</g>` : "") + (k ? `<g class="pele-edge-labels" font-size="${o}">${k}</g>` : "") + `<g class="pele-nodes">${D}</g>`),
		width: C,
		height: w,
		links: []
	};
}
function eA(e, t, n) {
	let r = n.get(Math.round(e.y - e.h / 2));
	if (t === 0 || r === void 0) return e.x;
	let i = e.x - e.w / 2 + 6, a = e.x + e.w / 2 - 6, o = r.filter((e) => e > i && e < a).sort((e, t) => e - t);
	o.push(a);
	let s = t / 2 + 6, c = e.x, l = 1 / 0, u = 0, d = i;
	for (let t of o) {
		if (t - d >= 2 * s) {
			let n = Math.min(Math.max(e.x, d + s), t - s);
			Math.abs(n - e.x) < l && (l = Math.abs(n - e.x), c = n);
		} else l === 1 / 0 && t - d > u && (u = t - d, c = (d + t) / 2);
		d = t;
	}
	return c;
}
function tA(e, t, n, r, i) {
	if (e.lines.length < 2) return Z(e, t + e.width / 2, n, r, i);
	let a = "";
	for (let o = 0; o < e.lines.length; o++) a += Z(eo(e, o), t + e.widths[o] / 2, n - e.height / 2 + $a(e, o), r, i);
	return a;
}
var nA = {
	type: "usecase",
	math: !0,
	parse: (e, t, n) => yk(e, n),
	render: Qk
};
function rA(e) {
	let t = e.trim();
	return t.length >= 2 && t.startsWith("\"") && t.endsWith("\"") ? t.slice(1, -1) : t;
}
function iA(e) {
	return e.map(rA).sort();
}
var aA = class {
	type = "venn";
	title;
	subsets = [];
	textNodes = [];
	styles = [];
	known = /* @__PURE__ */ new Set();
	current;
	indent = !1;
	setDiagramTitle(e) {
		this.title = e;
	}
	addSubsetData(e, t, n) {
		let r = iA(e);
		this.current = r, r.length === 1 && this.known.add(r[0]), this.subsets.push({
			sets: r,
			size: n ?? 10 / e.length ** 2,
			label: t ? rA(t) : void 0
		});
	}
	addTextData(e, t, n) {
		this.textNodes.push({
			sets: iA(e),
			id: rA(t),
			label: n ? rA(n) : void 0
		});
	}
	addStyleData(e, t) {
		let n = /* @__PURE__ */ new Map();
		for (let [e, r] of t) n.set(e, r && rA(r));
		this.styles.push({
			targets: iA(e),
			styles: n
		});
	}
	validateUnionIdentifiers(e) {
		let t = e.map(rA).filter((e) => !this.known.has(e));
		if (t.length > 0) throw new n(`unknown set identifier: ${t.join(", ")}`, "semantic", { type: "venn" });
	}
	getCurrentSets() {
		return this.current;
	}
	getIndentMode() {
		return this.indent;
	}
	setIndentMode(e) {
		this.indent = e;
	}
}, oA = [
	"$end",
	"INVALID",
	"EOF",
	"NEWLINE",
	"VENN",
	"TITLE",
	"SET",
	"UNION",
	"TEXT",
	"INDENT_TEXT",
	"STYLE",
	"BRACKET_LABEL",
	"NUMERIC",
	"HEXCOLOR",
	"RGBCOLOR",
	"RGBACOLOR",
	"IDENTIFIER",
	"STRING",
	"COMMA",
	"COLON"
], sA = [
	["venn-beta", 4],
	["set", 6],
	["union", 7],
	["text", 8],
	["style", 10]
], cA = class {
	constructor(e, t) {
		this.src = e, this.host = t;
	}
	src;
	host;
	text = "";
	start = 0;
	at = 0;
	lineStart = !1;
	ended = !1;
	word(e, t) {
		let n = this.src;
		for (let r = 0; r < t.length; r++) {
			let i = n.charCodeAt(e + r), a = t.charCodeAt(r);
			if (i !== a && (i + 32 !== a || i < 65 || i > 90)) return !1;
		}
		return !0;
	}
	keyword(e, t) {
		return this.word(e, t) && !J(this.src.charCodeAt(e + t.length));
	}
	color(e, t) {
		let n = this.src, r = e + 1;
		for (let e = 0; e < t; e++) {
			for (; G(n.charCodeAt(r));) r++;
			let i = r;
			for (; q(n.charCodeAt(r)) || n.charCodeAt(r) === 46;) r++;
			if (r === i) return -1;
			for (; G(n.charCodeAt(r));) r++;
			if (n.charCodeAt(r) !== (e === t - 1 ? 41 : 44)) return -1;
			r++;
		}
		return r;
	}
	lineEnd(e) {
		let t = this.src.indexOf("\n", e);
		return t === -1 ? this.src.length : t;
	}
	next() {
		let e = this.src, t = e.length;
		for (;;) {
			let n = this.at;
			if (this.start = n, this.text = "", n >= t) return this.ended ? 0 : (this.ended = !0, 2);
			let r = e.charCodeAt(n);
			if (r === 37 && e.charCodeAt(n + 1) === 37 && e.charCodeAt(n + 2) !== 123 || r !== 125 && e.charCodeAt(n + 1) === 37 && e.charCodeAt(n + 2) === 37) this.at = this.lineEnd(n + 2);
			else {
				if (this.lineStart) {
					if (r === 32 || r === 9) {
						let t = n + 1;
						for (; e.charCodeAt(t) === 32 || e.charCodeAt(t) === 9;) t++;
						if (this.at = t, this.keyword(t, "text") && this.host.getIndentMode()) return this.at = t + 4, this.lineStart = !1, this.text = e.slice(n, t), 9;
						continue;
					}
					r !== 10 && r !== 13 && (this.host.setIndentMode(!1), this.lineStart = !1);
				}
				if (r === 10 || r === 13) {
					for (n++; e.charCodeAt(n) === 10 || e.charCodeAt(n) === 13;) n++;
					return this.lineStart = !0, this.token(3, n);
				}
				if (r === 37 && e.charCodeAt(n + 1) === 37) this.at = this.lineEnd(n);
				else if (r === 32 || r === 9) {
					for (n++; e.charCodeAt(n) === 32 || e.charCodeAt(n) === 9;) n++;
					this.at = n;
				} else {
					if ((r | 32) >= 97 && (r | 32) <= 122 || r === 95) {
						if (this.word(n, "title") && G(e.charCodeAt(n + 5))) {
							let r = n + 6;
							for (; r < t;) {
								let t = e.charCodeAt(r);
								if (t === 35 || t === 10 || t === 59) break;
								r++;
							}
							if (r > n + 6) return this.token(5, r);
						}
						for (let [e, t] of sA) if (this.keyword(n, e)) return this.token(t, n + e.length);
						if (this.word(n, "rgb")) {
							let t = (e.charCodeAt(n + 3) | 32) == 97, r = n + (t ? 4 : 3), i = e.charCodeAt(r) === 40 ? this.color(r, t ? 4 : 3) : -1;
							if (i !== -1) return this.token(t ? 15 : 14, i);
						}
						for (n++; J(e.charCodeAt(n)) || e.charCodeAt(n) === 45;) n++;
						return this.token(16, n);
					}
					if (r === 91) {
						if (e.charCodeAt(n + 1) === 34) {
							let t = e.indexOf("\"", n + 2);
							return t === -1 || e.charCodeAt(t + 1) !== 93 ? 1 : (this.at = t + 2, this.text = e.slice(n + 2, t), 11);
						}
						let r = n + 1;
						for (; r < t && e.charCodeAt(r) !== 93 && e.charCodeAt(r) !== 34;) r++;
						return r === n + 1 || e.charCodeAt(r) !== 93 ? 1 : (this.at = r + 1, this.text = e.slice(n + 1, r).trim(), 11);
					}
					if (q(r) || r === 46 || r === 43 || r === 45) {
						(r === 43 || r === 45) && n++;
						let t = n;
						for (; q(e.charCodeAt(n));) n++;
						if (n > t) {
							if (e.charCodeAt(n) === 46 && q(e.charCodeAt(n + 1))) for (n += 2; q(e.charCodeAt(n));) n++;
						} else if (e.charCodeAt(n) === 46 && q(e.charCodeAt(n + 1))) for (n += 2; q(e.charCodeAt(n));) n++;
						else return 1;
						return this.token(12, n);
					}
					if (r === 35) {
						let t = n + 1;
						for (; t < n + 9 && oe(e.charCodeAt(t));) t++;
						return t >= n + 4 ? this.token(13, t) : 1;
					}
					if (r === 34) {
						let t = e.indexOf("\"", n + 1);
						return t === -1 ? 1 : this.token(17, t + 1);
					}
					return r === 44 ? this.token(18, n + 1) : r === 58 ? this.token(19, n + 1) : 1;
				}
			}
		}
	}
	token(e, t) {
		return this.text = this.src.slice(this.at, t), this.at = t, e;
	}
}, lA = "'EOF', 'NEWLINE', 'TITLE', 'SET', 'UNION', 'TEXT', 'INDENT_TEXT', 'STYLE'", uA = "'NUMERIC', 'IDENTIFIER', 'STRING', 'HEXCOLOR', 'RGBCOLOR', 'RGBACOLOR'";
function dA(e, t) {
	let r = new cA(e, t), a = -1, o = () => a === -1 ? a = r.next() : a, s = (t) => {
		throw o() === 1 ? i("venn", e, r.start, "", !0) : i("venn", e, r.start, `Expecting ${t}, got '${oA[a]}'`);
	}, c = () => (a = -1, r.text), l = (e) => (o() !== e && s(`'${oA[e]}'`), c()), u = () => (o() !== 16 && a !== 17 && s("'IDENTIFIER', 'STRING'"), c()), d = () => {
		let e = [u()];
		for (; o() === 18;) c(), e.push(u());
		return e;
	}, f = (e, r) => {
		let i = o() === 11 ? c() : void 0, a;
		if (o() === 19 && (c(), a = parseFloat(l(12))), r) {
			if (e.length < 2) throw new n("union requires multiple identifiers", "semantic", { type: "venn" });
			t.validateUnionIdentifiers(e);
		}
		t.addSubsetData(e, i, a), t.setIndentMode(!0);
	}, p = (e) => {
		let n = o();
		n !== 16 && n !== 17 && n !== 12 && s("'NUMERIC', 'IDENTIFIER', 'STRING'");
		let r = c(), i = n !== 12 && o() === 11 ? c() : void 0;
		t.addTextData(e(), r, i);
	}, m = () => {
		let e = d(), n = [];
		for (;;) {
			let e = l(16);
			l(19);
			let t;
			if (o() === 17) t = c();
			else {
				let e = [];
				for (; o() === 16 || a >= 12 && a <= 15;) e.push(c());
				e.length === 0 && s(uA), t = e.join(" ");
			}
			if (n.push([e, t]), o() !== 18) break;
			c();
		}
		t.addStyleData(e, n);
	};
	for (; o() === 3;) c();
	for (l(4);;) {
		let e = o();
		if (e === 2) return;
		if ((e < 3 || e > 10 || e === 4) && s(lA), c(), e === 5) t.setDiagramTitle(r.text.slice(6));
		else if (e === 6) f([u()], !1);
		else if (e === 7) f(d(), !0);
		else if (e === 8) {
			let e = d();
			p(() => e);
		} else e === 9 ? p(() => {
			let e = t.getCurrentSets();
			if (!e) throw new n("text requires set", "semantic", { type: "venn" });
			return e;
		}) : e === 10 && m();
	}
}
var fA = Math.PI * 2;
function pA(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map();
	for (let r of e) t.add(JSON.stringify([...r.sets].sort())), r.sets.length === 1 && n.set(r.sets[0], r.size);
	let r = [];
	for (let i of e) {
		if (i.sets.length < 3) continue;
		let e = [...i.sets].sort();
		for (let i = 0; i < e.length - 1; i++) for (let a = i + 1; a < e.length; a++) {
			let o = [e[i], e[a]], s = JSON.stringify(o);
			if (t.has(s)) continue;
			t.add(s);
			let c = n.get(o[0]), l = n.get(o[1]);
			r.push({
				sets: o,
				size: c !== void 0 && l !== void 0 ? Math.min(c, l) / 4 : 2.5,
				label: ""
			});
		}
	}
	return r.length > 0 ? [...e, ...r] : e;
}
function mA(e, t, n) {
	if (n >= e + t) return 0;
	let r = Math.min(e, t);
	if (n <= Math.abs(e - t)) return Math.PI * r * r;
	let i = e * e * Math.acos((n * n + e * e - t * t) / (2 * n * e)), a = t * t * Math.acos((n * n + t * t - e * e) / (2 * n * t)), o = .5 * Math.sqrt(Math.max((-n + e + t) * (n + e - t) * (n - e + t) * (n + e + t), 0));
	return i + a - o;
}
function hA(e, t, n) {
	let r = Math.abs(e - t), i = e + t;
	if (!(n > 0)) return i;
	if (n >= Math.PI * Math.min(e, t) ** 2) return r;
	for (let a = 0; a < 48; a++) {
		let a = (r + i) / 2;
		mA(e, t, a) > n ? r = a : i = a;
	}
	return (r + i) / 2;
}
function gA(e, t, n, r, i, a) {
	let o = 1 / 0;
	for (let n of t) {
		let t = e[n], s = r - t.x, c = i - t.y, l = t.r - Math.sqrt(s * s + c * c);
		if (l < o) {
			if (l < a) return l;
			o = l;
		}
	}
	for (let t of n) {
		let n = e[t], s = r - n.x, c = i - n.y, l = Math.sqrt(s * s + c * c) - n.r;
		if (l < o) {
			if (l < a) return l;
			o = l;
		}
	}
	return o;
}
function _A(e, t, n) {
	let r = 0, i = 0, a = e[t[0]];
	for (let n of t) {
		let o = e[n];
		r += o.x / t.length, i += o.y / t.length, o.r < a.r && (a = o);
	}
	let o = a.r, s = r, c = i, l = gA(e, t, n, s, c, -1 / 0), u = 0, d = (a, d) => {
		let f = gA(e, t, n, a, d, l - o * 1e-9);
		if (!(f > l - o * 1e-9)) return !1;
		let p = Math.hypot(a - r, d - i);
		return f > l + o * 1e-9 || p < u - o * 1e-9 ? (l = f, u = p, s = a, c = d, !0) : !1;
	};
	for (let e = -10; e <= 10; e++) for (let t = -10; t <= 10; t++) t * t + e * e <= 100 && d(a.x + t * o / 10, a.y + e * o / 10);
	let f = o / 10;
	for (let e = 0; e < 40 && f > o * 1e-6; e++) {
		let e = !1;
		for (let t = 0; t < 8; t++) {
			let n = t * fA / 8;
			d(s + Math.cos(n) * f, c + Math.sin(n) * f) && (e = !0);
		}
		e || (f /= 2);
	}
	return {
		x: s,
		y: c,
		margin: l
	};
}
function vA(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) for (let e of n.sets) t.has(e) || t.set(e, 10);
	for (let n of e) n.sets.length === 1 && t.set(n.sets[0], n.size);
	let n = /* @__PURE__ */ new Map(), r = [], i = 0;
	for (let e of t.values()) Number.isFinite(e) && e > i && (i = e);
	i === 0 && (i = 10);
	let a = Math.sqrt(i / Math.PI);
	for (let [e, i] of t) {
		n.set(e, r.length);
		let t = Number.isFinite(i) && i > 0 ? Math.sqrt(i / Math.PI) : 0;
		r.push({
			id: e,
			x: 0,
			y: 0,
			r: Math.max(t, a * .3)
		});
	}
	let o = r.length;
	if (o < 2) return r;
	let s = /* @__PURE__ */ new Map();
	for (let t of pA(e)) {
		if (t.sets.length !== 2) continue;
		let e = n.get(t.sets[0]), r = n.get(t.sets[1]);
		e !== r && s.set(Math.min(e, r) * o + Math.max(e, r), t.size);
	}
	let c = /* @__PURE__ */ new Map();
	for (let [e, t] of s) c.set(e, hA(r[Math.floor(e / o)].r, r[e % o].r, t));
	let l = a * .15, u = (e, t) => c.get(e * o + t) ?? r[e].r + r[t].r + l;
	if (o === 2) return r[1].x = u(0, 1), r;
	if (o === 3) {
		let t = u(0, 1), n = u(0, 2), i = u(1, 2), o = e.some((e) => new Set(e.sets).size === 3);
		for (let e = 0; e < 40; e++) {
			let e = t > 0 ? (t * t + n * n - i * i) / (2 * t) : 0;
			if (r[1].x = t, r[2].x = Math.max(-n, Math.min(n, e)), r[2].y = Math.sqrt(Math.max(n * n - e * e, 0)), !o || _A(r, [
				0,
				1,
				2
			], []).margin > a * .12) break;
			t *= .94, n *= .94, i *= .94;
		}
		return r;
	}
	let d = 0;
	for (let e of r) d += 2 * e.r + l;
	let f = Math.min(300, Math.floor(3e6 / (o * o)));
	if (o <= 64) {
		let e = d / fA;
		r.forEach((t, n) => {
			let r = n * fA / o - Math.PI / 2;
			t.x = Math.cos(r) * e, t.y = Math.sin(r) * e;
		});
	} else {
		let e = Math.ceil(Math.sqrt(o)), t = 2 * a + l;
		r.forEach((n, r) => {
			n.x = r % e * t, n.y = Math.floor(r / e) * t;
		});
	}
	let p = new Float64Array(o), m = new Float64Array(o), h = new Int32Array(o);
	for (let e = 0; e < f; e++) {
		p.fill(0), m.fill(0), h.fill(0);
		for (let e = 0; e < o; e++) for (let t = e + 1; t < o; t++) {
			let n = c.get(e * o + t), i = r[e].r + r[t].r + l, a = r[t].x - r[e].x, s = r[t].y - r[e].y, u = Math.hypot(a, s);
			if (n === void 0 && u >= i) continue;
			u < 1e-9 && (a = Math.cos(e + t), s = Math.sin(e + t), u = 1);
			let d = (u - (n ?? i)) / 2 / u;
			p[e] += a * d, m[e] += s * d, p[t] -= a * d, m[t] -= s * d, h[e]++, h[t]++;
		}
		for (let e = 0; e < o; e++) h[e] !== 0 && (r[e].x += p[e] / h[e], r[e].y += m[e] / h[e]);
	}
	return r;
}
function yA(e, t) {
	let n = (e) => `M${t(e.x - e.r)},${t(e.y)}A${t(e.r)},${t(e.r)} 0 1 1 ${t(e.x + e.r)},${t(e.y)}A${t(e.r)},${t(e.r)} 0 1 1 ${t(e.x - e.r)},${t(e.y)}Z`;
	if (e.length === 1) return n(e[0]);
	let r = (t, n, r, i) => {
		for (let a of e) if (a !== r && a !== i && Math.hypot(t - a.x, n - a.y) > a.r * (1 + 1e-9)) return !1;
		return !0;
	}, i = [];
	for (let t = 0; t < e.length; t++) for (let n = t + 1; n < e.length; n++) {
		let a = e[t], o = e[n], s = Math.hypot(o.x - a.x, o.y - a.y);
		if (s >= a.r + o.r || s <= Math.abs(a.r - o.r) || s === 0) continue;
		let c = (a.r * a.r - o.r * o.r + s * s) / (2 * s), l = Math.sqrt(Math.max(a.r * a.r - c * c, 0)), u = a.x + (o.x - a.x) * c / s, d = a.y + (o.y - a.y) * c / s;
		for (let e of [1, -1]) {
			let t = u + e * l * (o.y - a.y) / s, n = d - e * l * (o.x - a.x) / s;
			r(t, n, a, o) && i.push({
				x: t,
				y: n,
				a,
				b: o
			});
		}
	}
	if (i.length < 2) {
		let t = e[0];
		for (let n of e) n.r < t.r && (t = n);
		for (let n of e) if (n !== t && Math.hypot(n.x - t.x, n.y - t.y) + t.r > n.r * (1 + 1e-9)) return "";
		return n(t);
	}
	let a = 0, o = 0;
	for (let e of i) a += e.x / i.length, o += e.y / i.length;
	i.sort((e, t) => Math.atan2(e.y - o, e.x - a) - Math.atan2(t.y - o, t.x - a));
	let s = "";
	for (let e = 0; e < i.length; e++) {
		let n = i[e], r = i[(e + 1) % i.length];
		e === 0 && (s = `M${t(n.x)},${t(n.y)}`);
		let a, o = 0, c = 1 / 0;
		for (let e of [n.a, n.b]) {
			if (e !== r.a && e !== r.b) continue;
			let t = Math.atan2(n.y - e.y, n.x - e.x), i = Math.atan2(r.y - e.y, r.x - e.x) - t;
			i <= 0 && (i += fA);
			let s = e.x + e.r * Math.cos(t + i / 2), l = e.y + e.r * Math.sin(t + i / 2), u = Math.hypot(s - (n.x + r.x) / 2, l - (n.y + r.y) / 2);
			u < c && (c = u, a = e, o = +(i > Math.PI));
		}
		s += a === void 0 ? `L${t(r.x)},${t(r.y)}` : `A${t(a.r)},${t(a.r)} 0 ${o} 1 ${t(r.x)},${t(r.y)}`;
	}
	return s + "Z";
}
var bA = 100, xA = 1.6, SA = Ii([]);
function CA(e) {
	return e.length === 1 ? e[0] : JSON.stringify(e);
}
function wA(e, t, n) {
	let r = n.fontSize ?? 16, i = Math.round(r * .875), a = Math.round(r * .8125), o = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), s = n.padding ?? 8, c = vA(e.subsets), l = /* @__PURE__ */ new Map();
	c.forEach((e, t) => l.set(e.id, t));
	let u = /* @__PURE__ */ new Map();
	for (let { targets: t, styles: n } of e.styles) {
		let e = CA(t), r = u.get(e);
		r || u.set(e, r = /* @__PURE__ */ new Map());
		for (let [e, t] of n) r.set(e, t);
	}
	let d = (e) => {
		let t = u.get(e);
		if (!t) return SA;
		let n = [];
		for (let [e, r] of t) n.push(`${e}:${r}`);
		return Ii(n);
	}, f = c.map(() => []);
	for (let e = 0; e < c.length; e++) for (let t = e + 1; t < c.length; t++) Math.hypot(c[e].x - c[t].x, c[e].y - c[t].y) < c[e].r + c[t].r && (f[e].push(t), f[t].push(e));
	let p = /* @__PURE__ */ new Map();
	for (let t of e.subsets) p.set(CA(t.sets), t);
	let m = /* @__PURE__ */ new Map();
	for (let [e, t] of p) {
		let n = [...new Set(t.sets)], a = n.map((e) => l.get(e)), s = new Set(a), u = a[0];
		for (let e of a) c[e].r < c[u].r && (u = e);
		let p = d(e), h = t.label ?? (t.sets.length === 1 ? t.sets[0] : void 0), g = +!!p.bold | (p.italic ? 2 : 0), _ = _A(c, a, f[u].filter((e) => !s.has(e)));
		_.margin < c[u].r * .2 && (_ = _A(c, a, []));
		let v = {
			sets: n,
			inside: a,
			spot: _,
			lines: [],
			style: p
		};
		if (h) {
			let e = n.length === 1 ? r : i;
			v.lines.push({
				id: void 0,
				raw: h,
				size: e,
				base: g,
				label: Q(h, !1, o, e, 4e3, g)
			});
		}
		m.set(e, v);
	}
	for (let t of e.textNodes) {
		let e = t.label ?? t.id;
		m.get(CA(t.sets))?.lines.push({
			id: t.id,
			raw: e,
			size: a,
			base: 0,
			label: Q(e, !1, o, a, 4e3)
		});
	}
	let h = 0;
	for (let e of c) e.r > h && (h = e.r);
	let g = h > 0 ? bA / h : 1, _ = 1;
	for (let e of m.values()) {
		if (e.spot.margin <= 0) continue;
		let t = 0, n = 0;
		for (let r of e.lines) t = Math.max(t, r.label.width), n += r.label.height;
		let r = Math.hypot(t, n) / 2 + 4;
		_ = Math.max(_, Math.min(r / (e.spot.margin * g), xA));
	}
	g *= _;
	for (let e of m.values()) {
		let t = Math.max(e.spot.margin * g * 1.8, 72);
		for (let n of e.lines) n.label.width > t && (n.label = Q(n.raw, !1, o, n.size, t, n.base));
	}
	let v = 1 / 0, y = 1 / 0, b = -1 / 0, x = -1 / 0;
	for (let e of c) v = Math.min(v, (e.x - e.r) * g), y = Math.min(y, (e.y - e.r) * g), b = Math.max(b, (e.x + e.r) * g), x = Math.max(x, (e.y + e.r) * g);
	for (let e of m.values()) {
		let t = 0, n = 0;
		for (let r of e.lines) t = Math.max(t, r.label.width), n += r.label.height;
		v = Math.min(v, e.spot.x * g - t / 2), b = Math.max(b, e.spot.x * g + t / 2), y = Math.min(y, e.spot.y * g - n / 2), x = Math.max(x, e.spot.y * g + n / 2);
	}
	c.length === 0 && (v = y = b = x = 0);
	let S = Q(e.title && rA(e.title), !1, o, r, 4e3, 1), C = S.height > 0 ? S.height + 12 : 0, w = Math.max(b - v, S.width), T = s + (w - (b - v)) / 2 - v, E = s + C - y, D = Math.ceil(w + 2 * s), O = Math.ceil(x - y + C + 2 * s), k = c.map((e) => ({
		id: e.id,
		x: e.x * g + T,
		y: e.y * g + E,
		r: e.r * g
	})), A = "";
	k.forEach((e, t) => {
		let n = Bi(t), r = m.get(e.id)?.style ?? SA;
		A += `<circle class="pele-venn-set" data-id="${Y(e.id)}" cx="${X(e.x)}" cy="${X(e.y)}" r="${X(e.r)}" fill="${n}" fill-opacity="0.2" stroke="${n}"${r.shape}/>`;
	});
	let j = "", M = "";
	for (let e of m.values()) {
		let t = Y(e.sets.join("|"));
		if (e.sets.length > 1 && e.style.shape !== "") {
			let n = yA(e.inside.map((e) => k[e]), X);
			n !== "" && (j += `<path class="pele-venn-overlap" data-id="${t}" d="${n}" fill="none"${e.style.shape}/>`);
		}
		let n = 0;
		for (let t of e.lines) n += t.label.height;
		if (n === 0) continue;
		let i = e.spot.x * g + T, o = e.spot.y * g + E - n / 2, s = "";
		for (let t of e.lines) {
			let n = t.id === void 0 ? ` class="pele-label"${t.size === r ? "" : ` font-size="${t.size}"`}${e.style.text}` : ` class="pele-venn-text" data-id="${Y(t.id)}" font-size="${a}" fill="var(--_m)"${d(t.id).text}`;
			s += Z(t.label, i, o + t.label.height / 2, n), o += t.label.height;
		}
		M += `<g class="pele-venn-region" data-id="${t}">${s}</g>`;
	}
	return {
		svg: Ui("venn", D, O, r, n, {}, Z(S, D / 2, s + S.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + `<g class="pele-venn-sets">${A}</g>` + (j ? `<g class="pele-venn-overlaps">${j}</g>` : "") + (M ? `<g class="pele-venn-labels">${M}</g>` : "")),
		width: D,
		height: O,
		links: []
	};
}
var TA = {
	type: "venn",
	parse(e, t, n) {
		let r = new aA();
		return n && (r.title = n), dA(e, r), r;
	},
	render: wA
}, EA = class {
	nodes = /* @__PURE__ */ new Map();
	labels;
	links = [];
	trends = /* @__PURE__ */ new Map();
	pipelines = /* @__PURE__ */ new Map();
	annotations = [];
	notes = [];
	accelerators = [];
	deaccelerators = [];
	annotationsBox;
	axes = {};
	size;
	addNode(e) {
		let t = this.nodes.get(e.id) ?? {
			id: e.id,
			label: e.label
		};
		this.nodes.set(e.id, {
			...t,
			...e,
			className: e.className ?? t.className,
			labelOffsetX: e.labelOffsetX ?? t.labelOffsetX,
			labelOffsetY: e.labelOffsetY ?? t.labelOffsetY
		}), this.labels = void 0;
	}
	addLink(e) {
		this.links.push(e);
	}
	addTrend(e) {
		this.trends.set(e.nodeId, e);
	}
	startPipeline(e) {
		this.pipelines.set(e, {
			nodeId: e,
			componentIds: []
		});
		let t = this.nodes.get(e);
		t && (t.isPipelineParent = !0);
	}
	addPipelineComponent(e, t) {
		this.pipelines.get(e)?.componentIds.push(t);
		let n = this.nodes.get(t);
		n && (n.inPipeline = !0);
	}
	addAnnotation(e) {
		this.annotations.push(e);
	}
	addNote(e) {
		this.notes.push(e);
	}
	addAccelerator(e) {
		this.accelerators.push(e);
	}
	addDeaccelerator(e) {
		this.deaccelerators.push(e);
	}
	setAnnotationsBox(e, t) {
		this.annotationsBox = {
			x: e,
			y: t
		};
	}
	setAxes(e) {
		this.axes = {
			...this.axes,
			...e
		};
	}
	setSize(e, t) {
		this.size = {
			width: e,
			height: t
		};
	}
	getNode(e) {
		return this.nodes.get(e);
	}
	resolveNodeId(e) {
		if (this.nodes.has(e)) return e;
		if (!this.labels) {
			this.labels = /* @__PURE__ */ new Map();
			for (let [e, t] of this.nodes) this.labels.has(t.label) || this.labels.set(t.label, e);
		}
		return this.labels.get(e) ?? e;
	}
	build() {
		let e = [];
		for (let t of this.nodes.values()) {
			if (typeof t.x != "number" || typeof t.y != "number") throw new n(`Node "${t.label}" is missing coordinates`, "semantic", { type: "wardley" });
			e.push(t);
		}
		return {
			nodes: e,
			links: [...this.links],
			trends: [...this.trends.values()],
			pipelines: [...this.pipelines.values()],
			annotations: [...this.annotations],
			notes: [...this.notes],
			accelerators: [...this.accelerators],
			deaccelerators: [...this.deaccelerators],
			annotationsBox: this.annotationsBox,
			axes: { ...this.axes },
			size: this.size
		};
	}
};
function DA(e, t) {
	let r = e <= 1 ? e * 100 : e;
	if (r < 0 || r > 100) throw new n(`${t} must be between 0-1 (decimal) or 0-100 (percentage). Received: ${e}`, "semantic", { type: "wardley" });
	return r;
}
function OA(e, t, n) {
	return {
		x: DA(t, `${n} evolution`),
		y: DA(e, `${n} visibility`)
	};
}
function kA(e) {
	return e === "+<>" ? "bidirectional" : e === "+<" ? "backward" : e === "+>" ? "forward" : void 0;
}
function AA(e) {
	if (!e?.startsWith("+")) return {};
	let t = e.indexOf("'", 2), n = e[1] === "'" && t !== -1 ? e.slice(2, t) : void 0;
	return e.includes("<>") ? {
		flow: "bidirectional",
		label: n
	} : e.includes("<") ? {
		flow: "backward",
		label: n
	} : e.includes(">") ? {
		flow: "forward",
		label: n
	} : { label: n };
}
function jA(e) {
	return e ? [(e.negX ? -1 : 1) * e.offsetX, (e.negY ? -1 : 1) * e.offsetY] : [void 0, void 0];
}
function MA(e, t) {
	e.size && t.setSize(e.size.width, e.size.height), e.evolution && t.setAxes({
		stages: e.evolution.stages.map((e) => e.secondName ? `${e.name.trim()} / ${e.secondName.trim()}` : e.name.trim()),
		stageBoundaries: e.evolution.stages.filter((e) => e.boundary !== void 0).map((e) => e.boundary)
	});
	for (let n of e.anchors) {
		let e = OA(n.visibility, n.evolution, `Anchor "${n.name}"`);
		t.addNode({
			id: n.name,
			label: n.name,
			x: e.x,
			y: e.y,
			className: "anchor"
		});
	}
	for (let n of e.components) {
		let e = OA(n.visibility, n.evolution, `Component "${n.name}"`), [r, i] = jA(n.label);
		t.addNode({
			id: n.name,
			label: n.name,
			x: e.x,
			y: e.y,
			className: "component",
			labelOffsetX: r,
			labelOffsetY: i,
			inertia: n.inertia,
			sourceStrategy: n.decorator?.strategy
		});
	}
	for (let n of e.notes) {
		let e = OA(n.visibility, n.evolution, `Note "${n.text}"`);
		t.addNote({
			text: n.text,
			x: e.x,
			y: e.y
		});
	}
	for (let r of e.pipelines) {
		let e = t.getNode(r.parent);
		if (!e || typeof e.y != "number") throw new n(`Pipeline "${r.parent}" must reference an existing component with coordinates.`, "semantic", { type: "wardley" });
		let i = e.y;
		t.startPipeline(r.parent);
		for (let e of r.components) {
			let n = `${r.parent}_${e.name}`, [a, o] = jA(e.label), s = DA(e.evolution, `Pipeline component "${e.name}" evolution`);
			t.addNode({
				id: n,
				label: e.name,
				x: s,
				y: i,
				className: "pipeline-component",
				labelOffsetX: a,
				labelOffsetY: o,
				inertia: void 0,
				sourceStrategy: void 0
			}), t.addPipelineComponent(r.parent, n);
		}
	}
	for (let n of e.links) {
		let e = !!n.arrow && (n.arrow.includes("-.->") || n.arrow.includes(".-.")), r = AA(n.arrow), i = kA(n.fromPort) ?? kA(n.toPort) ?? r.flow;
		t.addLink({
			source: t.resolveNodeId(n.from),
			target: t.resolveNodeId(n.to),
			dashed: e,
			label: r.label ?? n.linkLabel,
			flow: i
		});
	}
	for (let n of e.evolves) {
		let e = t.getNode(n.component);
		e?.y !== void 0 && t.addTrend({
			nodeId: n.component,
			targetX: DA(n.target, `Evolve target for "${n.component}"`),
			targetY: e.y
		});
	}
	if (e.annotations.length > 0) {
		let n = OA(e.annotations[0].x, e.annotations[0].y, "Annotations box");
		t.setAnnotationsBox(n.x, n.y);
	}
	for (let n of e.annotation) {
		let e = OA(n.x, n.y, `Annotation ${n.number}`);
		t.addAnnotation({
			number: n.number,
			coordinates: [{
				x: e.x,
				y: e.y
			}],
			text: n.text
		});
	}
	for (let n of e.accelerators) {
		let e = OA(n.x, n.y, `Accelerator "${n.name}"`);
		t.addAccelerator({
			name: n.name,
			x: e.x,
			y: e.y
		});
	}
	for (let n of e.deaccelerators) {
		let e = OA(n.x, n.y, `Deaccelerator "${n.name}"`);
		t.addDeaccelerator({
			name: n.name,
			x: e.x,
			y: e.y
		});
	}
}
function NA(e, t) {
	let n = new EA();
	return MA(e, n), {
		type: "wardley",
		title: e.title || t,
		accTitle: e.accTitle ? e.accTitle.replace(/^\s+/g, "") : void 0,
		accDescr: e.accDescr ? e.accDescr.replace(/\n\s+/g, "\n") : void 0,
		...n.build()
	};
}
function PA(e, t) {
	let n = t;
	for (let t = e.charCodeAt(n); t >= 48 && t <= 57; t = e.charCodeAt(n)) n++;
	return n;
}
function FA() {
	let e = 0, t = 0;
	return (n, r) => {
		if ((r < e || r >= t) && (e = r, t = PA(n, r)), t === r || n.charCodeAt(t) !== 46) return -1;
		let i = PA(n, t + 1);
		return i > t + 1 ? i : -1;
	};
}
var IA = {
	name: "ARROW",
	pattern: /->/y,
	first: "-"
}, LA = {
	name: "LINK_ARROW",
	pattern: /-->|-\.->|>|\+'[^']*'<>|\+'[^']*'<|\+'[^']*'>/y,
	first: "->+"
}, RA = (e, t) => ({
	name: e,
	pattern: new RegExp(t, "y"),
	first: t[0]
}), zA = [
	{
		name: "[",
		pattern: "["
	},
	{
		name: ",",
		pattern: ","
	},
	{
		name: "]",
		pattern: "]"
	},
	{
		name: "@",
		pattern: "@"
	},
	{
		name: "/",
		pattern: "/"
	},
	{
		name: "(",
		pattern: "("
	},
	{
		name: ")",
		pattern: ")"
	},
	{
		name: "-",
		pattern: "-",
		longer: [
			IA,
			LA,
			Go
		]
	},
	{
		name: "{",
		pattern: "{"
	},
	{
		name: "}",
		pattern: "}"
	},
	{
		name: "WARDLEY_NUMBER",
		pattern: /[0-9]+\.[0-9]+/y,
		first: "0123456789",
		scanner: FA
	},
	IA,
	{
		name: "LINK_PORT",
		pattern: /\+<>|\+>|\+</y,
		first: "+"
	},
	LA,
	{
		name: "LINK_LABEL",
		pattern: /;[^\n\r]+/y,
		first: ";"
	},
	{
		name: "STRATEGY",
		pattern: /build|buy|outsource|market/y,
		first: "bom"
	},
	RA("KW_WARDLEY", "wardley-beta"),
	RA("KW_SIZE", "size"),
	RA("KW_EVOLUTION", "evolution"),
	RA("KW_ANCHOR", "anchor"),
	RA("KW_COMPONENT", "component"),
	RA("KW_LABEL", "label"),
	RA("KW_INERTIA", "inertia"),
	RA("KW_EVOLVE", "evolve"),
	RA("KW_PIPELINE", "pipeline"),
	RA("KW_NOTE", "note"),
	RA("KW_ANNOTATIONS", "annotations"),
	RA("KW_ANNOTATION", "annotation"),
	RA("KW_ACCELERATOR", "accelerator"),
	RA("KW_DEACCELERATOR", "deaccelerator"),
	{
		name: "NAME_WITH_SPACES",
		pattern: /(?!title\s|accTitle|accDescr)[A-Za-z](?:[A-Za-z0-9_()&]|-(?!>))*(?:[ \t]+[A-Za-z(](?:[A-Za-z0-9_()&]|-(?!>))*)*/y,
		first: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
	},
	{
		name: "WS",
		pattern: /[ \t]+/y,
		hidden: !0,
		first: "	 "
	},
	Qf(),
	Bo,
	Vo,
	{
		name: "INT",
		pattern: /0|[1-9][0-9]*(?!\.)/y,
		first: "0123456789"
	},
	Ho,
	{
		name: "ID",
		pattern: /[\w]([-\w]*\w)?/y,
		first: "_0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
	},
	Uo,
	Wo,
	Go,
	Ko,
	qo
];
function BA(e) {
	let t = new is(Ro(e, zA, "wardley"), zA, "wardley"), n = {
		$type: "Wardley",
		anchors: [],
		components: [],
		links: [],
		evolves: [],
		pipelines: [],
		notes: [],
		annotations: [],
		annotation: [],
		accelerators: [],
		deaccelerators: []
	}, r = (e) => t.kinds[t.i] === e, i = () => r(36) || r(37) || r(30), a = () => r(36) ? rs(t.take()) : r(37) || r(30) ? t.take() : t.fail("a name"), o = () => Number(t.expect(10)), s = () => parseInt(t.expect(35)), c = () => r(10) ? Number(t.take()) : parseInt(t.expect(35)), l = () => {
		if (!r(-1)) for (r(38) || t.fail("a line break or the end of input"); r(38);) t.i++;
	}, u = (e) => {
		t.expect(0);
		let n = e();
		t.expect(1);
		let r = e();
		return t.expect(2), [n, r];
	}, d = () => {
		t.expect(21), t.expect(0);
		let e = t.accept(7), n = s();
		t.expect(1);
		let r = t.accept(7), i = s();
		return t.expect(2), {
			$type: "Label",
			negX: e,
			offsetX: n,
			negY: r,
			offsetY: i
		};
	}, f = () => {
		let e = {
			$type: "EvolutionStage",
			name: a()
		};
		return t.accept(3) && (e.boundary = o()), t.accept(4) && (e.secondName = a()), e;
	};
	for (; r(38);) t.i++;
	for (t.expect(16); !r(-1);) switch (t.kind) {
		case 38:
			t.i++;
			break;
		case 32:
			n.accDescr = ts(t.take()), l();
			break;
		case 33:
			n.accTitle = es(t.take()), l();
			break;
		case 34:
			n.title = $o(t.take()), l();
			break;
		case 17: {
			t.i++;
			let [e, r] = u(s);
			l(), n.size = {
				$type: "Size",
				width: e,
				height: r
			};
			break;
		}
		case 18: {
			t.i++;
			let e = [f()];
			for (t.expect(11), e.push(f()); t.accept(11);) e.push(f());
			l(), n.evolution = {
				$type: "Evolution",
				stages: e
			};
			break;
		}
		case 19: {
			t.i++;
			let e = a(), [r, i] = u(o);
			l(), n.anchors.push({
				$type: "Anchor",
				name: e,
				visibility: r,
				evolution: i
			});
			break;
		}
		case 20: {
			t.i++;
			let e = {
				$type: "Component",
				name: a(),
				visibility: 0,
				evolution: 0,
				inertia: !1
			};
			[e.visibility, e.evolution] = u(o), r(21) && (e.label = d()), r(5) && t.kinds[t.i + 1] === 15 && (t.i++, e.decorator = {
				$type: "Decorator",
				strategy: t.take()
			}, t.expect(6)), t.accept(22) ? e.inertia = !0 : t.accept(5) && (t.expect(22), t.expect(6), e.inertia = !0), l(), n.components.push(e);
			break;
		}
		case 23: {
			t.i++;
			let e = a(), r = o();
			l(), n.evolves.push({
				$type: "Evolve",
				component: e,
				target: r
			});
			break;
		}
		case 24: {
			t.i++;
			let e = a();
			for (t.expect(8), t.expect(38); r(38);) t.i++;
			let i = [];
			do {
				t.expect(20);
				let e = {
					$type: "PipelineComponent",
					name: a(),
					evolution: 0
				};
				t.expect(0), e.evolution = o(), t.expect(2), r(21) && (e.label = d()), l(), i.push(e);
			} while (r(20));
			t.expect(9), l(), n.pipelines.push({
				$type: "Pipeline",
				parent: e,
				components: i
			});
			break;
		}
		case 25: {
			t.i++;
			let e = rs(t.expect(36)), [r, i] = u(o);
			l(), n.notes.push({
				$type: "Note",
				text: e,
				visibility: r,
				evolution: i
			});
			break;
		}
		case 26: {
			t.i++;
			let [e, r] = u(c);
			l(), n.annotations.push({
				$type: "Annotations",
				x: e,
				y: r
			});
			break;
		}
		case 27: {
			t.i++;
			let e = s();
			t.expect(1);
			let [r, i] = u(c), a = rs(t.expect(36));
			l(), n.annotation.push({
				$type: "Annotation",
				number: e,
				x: r,
				y: i,
				text: a
			});
			break;
		}
		case 28:
		case 29: {
			let e = t.kind === 29;
			t.i++;
			let r = a(), [i, s] = u(o);
			l(), e ? n.deaccelerators.push({
				$type: "Deaccelerator",
				name: r,
				x: i,
				y: s
			}) : n.accelerators.push({
				$type: "Accelerator",
				name: r,
				x: i,
				y: s
			});
			break;
		}
		default: {
			i() || t.fail("a statement");
			let e = {
				$type: "Link",
				from: a(),
				to: ""
			};
			r(12) && (e.fromPort = t.take()), (r(13) || r(11)) && (e.arrow = t.take()), e.to = a(), r(12) && (e.toPort = t.take()), r(14) && (e.linkLabel = t.take().substring(1).trim()), l(), n.links.push(e);
		}
	}
	return n;
}
var VA = [
	"Genesis",
	"Custom Built",
	"Product",
	"Commodity"
], HA = 48, UA = 6, WA = 10, GA = 8, KA = 15, qA = 60, JA = 30, YA = 20, XA = "var(--_c)", ZA = "var(--_l)";
function QA(e, t, n, r, i) {
	let a = e["wardley-beta"]?.[t];
	return typeof a == "number" && a >= r && a <= i ? a : n;
}
function $A(e, t, n) {
	return e < t ? t : e > n ? n : e;
}
function ej(e, t, n, r) {
	let i = vt(e), a = "", o = n;
	for (let n of e.lines) {
		let r = !0;
		for (let e of n) {
			if (e.icon !== void 0) continue;
			let n = _t(e.style & ~i);
			a += `<tspan${r ? ` x="${X(t)}" y="${X(o)}"` : ""}${n}>${nt(e.text)}</tspan>`, r = !1;
		}
		o += e.lineHeight;
	}
	return a === "" ? "" : `<text${yt(r, i)} xml:space="preserve">${a}</text>`;
}
function tj(e, t, n, r) {
	return $A(typeof t == "number" && Number.isFinite(t) ? t : QA(e, n, r, 1, 1e6), 200, 1e4) - 2 * HA;
}
function nj(e, t, n) {
	let r = tj(t, e.size?.width, "width", 900);
	return to(n, r, 160, (i, a) => rj(e, t, n, i, r, a));
}
function rj(e, t, n, r, i, a) {
	let o = n.fontSize ?? 16, s = Math.round(o * .8125), c = Math.round(o * .6875), l = n.measurer ?? Be(n.fontFamily, n.fontFamilyMono), u = n.padding ?? 8, d = tj(t, e.size?.height, "height", 600) * Math.max(.75, r / i), f = t["wardley-beta"]?.showGrid === !0, p = 0, m = 0, h = r, g = d, _ = (e, t, n, r) => {
		e < p && (p = e), t < m && (m = t), n > h && (h = n), r > g && (g = r);
	}, v = (e, t, r, i) => (_(t - e.width / 2, r - e.height / 2, t + e.width / 2, r + e.height / 2), Z(e, t, r, i, n.icons)), y = (e, t, n, r) => (_(t, n - e.size, t + e.width, n - e.size + e.height + 4), ej(e, t, n, r)), b = (e, t, n = a ? Math.max(64, Math.min(120, r / 2)) : 4e3, i = 0) => Q(e, !1, l, t, n, i), x = (e) => e / 100 * r, S = (e) => d - e / 100 * d, C = e.axes.stages && e.axes.stages.length > 0 ? e.axes.stages : VA, w = e.axes.stageBoundaries, T = w !== void 0 && w.length === C.length, E = "", D = "", O = d, k = 0;
	if (C.forEach((e, t) => {
		let n = T ? k : t / C.length, i = T ? $A(w[t], 0, 1) : (t + 1) / C.length;
		k = i, t > 0 && (E += `<path class="pele-wardley-stage" d="M${X(n * r)},0V${X(d)}" stroke="var(--_b)" stroke-dasharray="4 4"/>`);
		let a = b(e, s, Math.max(48, Math.abs(i - n) * r - 12));
		D += v(a, (n + i) / 2 * r, d + 8 + a.height / 2, ` class="pele-wardley-stage-label" font-size="${s}" fill="var(--_m)"`), O = Math.max(O, d + 8 + a.height);
	}), f) for (let e = 1; e < 4; e++) E += `<path class="pele-wardley-grid" d="M${X(r * e / 4)},0V${X(d)}M0,${X(d * e / 4)}H${X(r)}" stroke="var(--_b)" stroke-dasharray="2 6"/>`;
	E += `<path class="pele-wardley-axis" d="M0,0V${X(d)}H${X(r)}" stroke="${ZA}"/>`;
	let A = b(e.axes.xLabel ?? "Evolution", s), j = b(e.axes.yLabel ?? "Visibility", s), M = ` class="pele-wardley-axis-label" font-size="${s}" font-weight="var(--_hw)"`, N = v(A, r / 2, O + 6 + A.height / 2, M) + Z(j, -16, d / 2, `${M} transform="rotate(-90 -16 ${X(d / 2)})"`);
	_(-16 - j.height / 2, 0, 0, 0);
	let P = O + 6 + A.height + 10, F = /* @__PURE__ */ new Map();
	for (let t of e.nodes) F.set(t.id, {
		x: x(t.x),
		y: S(t.y),
		node: t
	});
	let I = "", L = /* @__PURE__ */ new Map();
	for (let t of e.pipelines) {
		L.set(t.nodeId, new Set(t.componentIds));
		let e = [];
		for (let n of t.componentIds) {
			let t = F.get(n);
			t && e.push(t);
		}
		if (e.length === 0) continue;
		e.sort((e, t) => e.x - t.x);
		let n = e[0].x, r = e[e.length - 1].x, i = e[0].y, a = i - 2 * UA, o = F.get(t.nodeId);
		o && (o.x = (n + r) / 2, o.y = a - WA / 6), _(n - KA, a, r + KA, a + 4 * UA), I += `<g class="pele-wardley-pipeline" data-id="${Y(t.nodeId)}"><rect x="${X(n - KA)}" y="${X(a)}" width="${X(r - n + 2 * KA)}" height="${X(4 * UA)}" fill="var(--_s)" stroke="var(--_b)"${Ti}/>` + (e.length > 1 ? `<path d="M${X(n)},${X(i)}H${X(r)}" stroke="${ZA}" stroke-dasharray="4 4"/>` : "") + "</g>";
	}
	let R = /* @__PURE__ */ new Map(), z = (e, t, n) => {
		let i = e.node;
		if (i.className === "anchor") {
			let e = R.get(i);
			return e || R.set(i, e = b(i.label, s, a ? Math.max(64, r / 2) : 4e3, 1)), 1 / Math.hypot(t / (e.width / 2 + 5), n / (s * .8));
		}
		return i.isPipelineParent ? WA / Math.SQRT2 : i.sourceStrategy ? 2 * UA : UA;
	}, B = /* @__PURE__ */ new Map(), V = (e, t, n) => {
		Math.abs(t) < .25 || Math.abs(n) < .25 || B.set(e, (B.get(e) ?? 0) | (t > 0 ? n < 0 ? 1 : 2 : n < 0 ? 4 : 8));
	}, H = "";
	for (let t of e.links) {
		let e = F.get(t.source), n = F.get(t.target);
		if (!e || !n || e === n || L.get(t.target)?.has(t.source)) continue;
		let r = n.x - e.x, i = n.y - e.y, a = Math.hypot(r, i);
		if (a < .01) continue;
		let o = r / a, s = i / a, l = z(e, o, s), u = z(n, o, s);
		if (l + u >= a) continue;
		V(e, o, s), V(n, -o, -s);
		let d = e.x + o * l, f = e.y + s * l, p = n.x - o * u, m = n.y - s * u, h = "";
		(t.flow === "forward" || t.flow === "bidirectional") && (h += yi("arrow_point", p, m, o, s, ZA), p -= o * vi("arrow_point"), m -= s * vi("arrow_point")), (t.flow === "backward" || t.flow === "bidirectional") && (h += yi("arrow_point", d, f, -o, -s, ZA), d += o * vi("arrow_point"), f += s * vi("arrow_point"));
		let g = "";
		if (t.label) {
			let r = b(t.label, c + 1, 200), i = o >= 0 ? 1 : -1, a = s * i, l = -o * i, u = 5 + Math.abs(a) * r.width / 2 + Math.abs(l) * r.height / 2;
			g = v(r, (e.x + n.x) / 2 + a * u, (e.y + n.y) / 2 + l * u, ` class="pele-edge-label" font-size="${c + 1}" fill="var(--_m)"`);
		}
		H += `<g class="pele-edge${t.dashed ? " pele-wardley-dashed" : ""}" data-id="${Y(t.source)}-${Y(t.target)}"><path d="M${X(d)},${X(f)}L${X(p)},${X(m)}" stroke="${ZA}"${t.dashed ? " stroke-dasharray=\"6 6\"" : ""}/>` + h + g + "</g>";
	}
	let U = "";
	for (let t of e.trends) {
		let e = F.get(t.nodeId);
		if (!e) continue;
		let n = x(t.targetX), r = S(t.targetY), i = n - e.x, a = r - e.y, o = Math.hypot(i, a), s = "", c = o > 0 ? z(e, i / o, a / o) : 0;
		if (o > c + UA + 4) {
			let t = i / o, l = a / o, u = n - t * (UA + 2), d = r - l * (UA + 2);
			s = `<path d="M${X(e.x + t * c)},${X(e.y + l * c)}L${X(u - t * vi("arrow_point"))},${X(d - l * vi("arrow_point"))}" stroke="${XA}" stroke-dasharray="4 4"/>` + yi("arrow_point", u, d, t, l, XA);
		}
		_(n - UA, r - UA, n + UA, r + UA), U += `<g class="pele-wardley-trend" data-id="${Y(t.nodeId)}">${s}<circle cx="${X(n)}" cy="${X(r)}" r="${UA}" fill="var(--_bg)" stroke="${XA}"/></g>`;
	}
	let ee = "", te = 1.2 * UA, W = .7 * UA;
	for (let e of F.values()) {
		let t = e.node, { x: n, y: i } = e, o = t.className === "anchor", c = t.sourceStrategy, l = "";
		if (c) {
			let e = c === "outsource" ? "var(--_m)" : c === "buy" ? "var(--_a)" : c === "build" ? "var(--_s)" : "var(--_bg)";
			l += `<circle class="pele-wardley-${c}" cx="${X(n)}" cy="${X(i)}" r="${2 * UA}" fill="${e}" stroke="${ZA}"/>`;
		}
		if (c === "market") {
			let e = te * Math.cos(Math.PI / 6), t = i + te * Math.sin(Math.PI / 6);
			l += `<path d="M${X(n)},${X(i - te)}L${X(n - e)},${X(t)}H${X(n + e)}Z" fill="none" stroke="${ZA}"/>`;
			for (let [r, a] of [
				[n, i - te],
				[n - e, t],
				[n + e, t]
			]) l += `<circle cx="${X(r)}" cy="${X(a)}" r="${X(W)}" fill="var(--_bg)" stroke="${ZA}"/>`;
		} else t.isPipelineParent ? l += `<rect x="${X(n - WA / 2)}" y="${X(i - WA / 2)}" width="${WA}" height="${WA}" fill="var(--_bg)" stroke="${ZA}"/>` : o || (l += `<circle cx="${X(n)}" cy="${X(i)}" r="${UA}" fill="var(--_bg)" stroke="${ZA}"/>`);
		if (t.inertia === !0) {
			let e = (t.isPipelineParent ? WA / 2 : UA) + 10 + (c ? UA + 4 : 0);
			l += `<rect class="pele-wardley-inertia" x="${X(n + e)}" y="${X(i - UA)}" width="4" height="${2 * UA}" fill="${ZA}"/>`;
		}
		let u = t.labelOffsetX === void 0 ? void 0 : $A(t.labelOffsetX, -5e3, 5e3), d = t.labelOffsetY === void 0 ? void 0 : $A(t.labelOffsetY, -5e3, 5e3), f;
		if (o) f = v(R.get(t) ?? b(t.label, s, a ? Math.max(64, r / 2) : 4e3, 1), n + (u ?? 0), i + (d ?? -3), ` class="pele-label" font-size="${s}" font-weight="var(--_hw)"`);
		else {
			let r = b(t.label, s), a = ` class="pele-label" font-size="${s}"`, o = GA + (c ? 10 : 0);
			if (u !== void 0 || d !== void 0) f = y(r, n + (u ?? o), i + (d ?? -o), a);
			else if (t.inPipeline) f = v(r, n, i + 2 * UA + 4 + r.height / 2, a);
			else {
				let t = B.get(e) ?? 0, c = t & 1 ? t & 2 ? t & 4 ? t & 8 ? 1 : 8 : 4 : 2 : 1, l = c === 1 || c === 2, u = c === 1 || c === 4;
				f = y(r, l ? n + o : n - o - r.width, u ? i - o : i + o + s * .75, a);
			}
		}
		_(n - 2 * UA, i - 2 * UA, n + 2 * UA + 20, i + 2 * UA), ee += `<g class="pele-node pele-wardley-${o ? "anchor" : t.isPipelineParent ? "pipeline-parent" : t.inPipeline ? "pipeline-component" : "component"}" data-id="${Y(t.id)}">${l}${f}</g>`;
	}
	let ne = "";
	for (let t of e.annotations) {
		let e = b(String(t.number), c, 4e3, 1), n = "";
		for (let r of t.coordinates) {
			let t = x(r.x), i = S(r.y), a = Math.max(10, e.width / 2 + 4);
			_(t - a, i - a, t + a, i + a), n += `<circle cx="${X(t)}" cy="${X(i)}" r="${X(a)}" fill="var(--_bg)" stroke="${ZA}"/>` + Z(e, t, i, ` font-size="${c}" font-weight="var(--_hw)"`);
		}
		ne += `<g class="pele-wardley-annotation" data-id="${Y(String(t.number))}">${n}</g>`;
	}
	let re = e.annotations.filter((e) => e.text).sort((e, t) => e.number - t.number);
	if (re.length > 0) {
		let t = re.map((e) => b(`${e.number}. ${e.text}`, s, a ? Math.max(80, r - 20) : 320)), n = 0, i = 0;
		for (let e of t) n = Math.max(n, e.width), i += e.height;
		n += 20, i += 14;
		let o = e.annotationsBox, c = o ? $A(x(o.x), 0, Math.max(0, r - n)) : 0, l = o ? $A(S(o.y), 0, Math.max(0, d - i)) : P;
		_(c, l, c + n, l + i);
		let u = "", f = l + 7;
		for (let e of t) u += ej(e, c + 10, f + e.lineHeight / 2 + s * .35, ` font-size="${s}"`), f += e.height;
		ne += `<g class="pele-wardley-annotations"><rect x="${X(c)}" y="${X(l)}" width="${X(n)}" height="${X(i)}" fill="var(--_bg)" stroke="var(--_b)"${Ti}/>${u}</g>`;
	}
	let G = "";
	for (let t of e.notes) G += y(b(t.text, s, Math.min(360, r * .6), 1), x(t.x), S(t.y), ` class="pele-wardley-note" font-size="${s}" font-weight="var(--_hw)"`);
	let K = "", ie = (e, t, n, r) => {
		let i = x(t), a = S(n), o = JA / 2, s = r ? i + qA : i, l = r ? i : i + qA, u = r ? i + qA - YA : i + YA, d = `M${X(l)},${X(a - o)}H${X(u)}V${X(a - o - 8)}L${X(s)},${X(a)}L${X(u)},${X(a + o + 8)}V${X(a + o)}H${X(l)}Z`;
		_(i, a - o - 8, i + qA, a + o + 8), K += `<g class="pele-wardley-${r ? "accelerator" : "deaccelerator"}" data-id="${Y(e)}"><path d="${d}" fill="var(--_s)" stroke="${ZA}"/>` + v(b(e, c + 1, 160, 1), i + qA / 2, a + o + 8 + 12, ` font-size="${c + 1}" font-weight="var(--_hw)"`) + "</g>";
	};
	for (let t of e.accelerators) ie(t.name, t.x, t.y, !0);
	for (let t of e.deaccelerators) ie(t.name, t.x, t.y, !1);
	let q = Q(e.title, !1, l, o, a ? Math.max(80, r) : 4e3, 1), ae = q.height > 0 ? q.height + 12 : 0, oe = Math.min(p, r / 2 - q.width / 2), J = Math.max(h, r / 2 + q.width / 2), se = u - oe, ce = u + ae - m, le = Math.ceil(J - oe + 2 * u), ue = Math.ceil(g - m + ae + 2 * u);
	return {
		svg: Ui("wardley", le, ue, o, n, e, Z(q, se + r / 2, u + q.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + `<g transform="translate(${X(se)},${X(ce)})"><g class="pele-wardley-frame" fill="none">${E}</g>` + D + N + I + (H ? `<g class="pele-edges" fill="none">${H}</g>` : "") + (U ? `<g class="pele-wardley-trends" fill="none">${U}</g>` : "") + ee + ne + G + K + "</g>"),
		width: le,
		height: ue,
		links: []
	};
}
var ij = {
	type: "wardley",
	section: "wardley-beta",
	parse: (e, t, n) => NA(BA(e), n),
	render: nj
}, aj = class {
	type = "xychart";
	title;
	accTitle;
	accDescr;
	orientation;
	xAxis = {
		type: "band",
		title: "",
		categories: []
	};
	yAxis = {
		type: "linear",
		title: "",
		min: 1 / 0,
		max: -1 / 0
	};
	hasSetXAxis = !1;
	hasSetYAxis = !1;
	plots = [];
	setOrientation(e) {
		this.orientation = e === "horizontal" ? "horizontal" : "vertical";
	}
	setXAxisTitle(e) {
		this.xAxis.title = e.text.trim();
	}
	setXAxisRangeData(e, t) {
		this.xAxis = {
			type: "linear",
			title: this.xAxis.title,
			min: e,
			max: t
		}, this.hasSetXAxis = !0;
	}
	setXAxisBand(e) {
		this.xAxis = {
			type: "band",
			title: this.xAxis.title,
			categories: e.map((e) => e.text.trim())
		}, this.hasSetXAxis = !0;
	}
	setYAxisTitle(e) {
		this.yAxis.title = e.text.trim();
	}
	setYAxisRangeData(e, t) {
		this.yAxis = {
			type: "linear",
			title: this.yAxis.title,
			min: e,
			max: t
		}, this.hasSetYAxis = !0;
	}
	plotData(e) {
		if (e.length === 0) return [];
		this.hasSetXAxis || this.setXAxisRangeData(1, e.length);
		let t = this.xAxis;
		if (t.type === "band" && e.length > t.categories.length && (e = e.slice(0, t.categories.length)), !this.hasSetYAxis) {
			let { min: t, max: n } = this.yAxis;
			for (let r of e) r < t && (t = r), r > n && (n = r);
			this.yAxis = {
				type: "linear",
				title: this.yAxis.title,
				min: t,
				max: n
			};
		}
		if (t.type === "band") return t.categories.map((t, n) => [t, e[n]]);
		if (e.length === 1) return [[`${t.min}`, e[0]]];
		let n = (t.max - t.min) / (e.length - 1);
		return e.map((e, r) => [`${t.min + r * n}`, e]);
	}
	addPlot(e, t, n) {
		let r = {
			type: e,
			title: t.text.trim(),
			data: this.plotData(n.map((e) => e.value))
		};
		e === "line" && n.some((e) => e.label.trim() !== "") && (r.pointLabels = n.map((e) => e.label.trim())), this.plots.push(r);
	}
	setLineData(e, t) {
		this.addPlot("line", e, t);
	}
	setBarData(e, t) {
		this.addPlot("bar", e, t);
	}
	setDiagramTitle(e) {
		this.title = e;
	}
	setAccTitle(e) {
		this.accTitle = e.replace(/^\s+/g, "");
	}
	setAccDescription(e) {
		this.accDescr = e.replace(/\n\s+/g, "\n");
	}
}, oj = /* @__PURE__ */ "$end.INVALID.NEWLINE.title.acc_title.acc_title_value.acc_descr.acc_descr_value.acc_descr_multiline_value.XYCHART.CHART_ORIENTATION.X_AXIS.Y_AXIS.ARROW_DELIMITER.LINE.BAR.NUMBER_WITH_DECIMAL.SQUARE_BRACES_START.SQUARE_BRACES_END.STR.ALPHA.COLON.PLUS.COMMA.EQUALS.MULT.BRKT.UNDERSCORE.DOT.AMP.MINUS.NUM.SEMI.EOF".split("."), sj = [
	33,
	33,
	33,
	33,
	33,
	19,
	5,
	7,
	8
], cj = "`)" + " ".repeat(36) + "{ this.pushstate(md_string); }\n<md_string>(?:(?!`\").)+" + " ".repeat(18) + "{ return md_str; }\n<md_string>(?:`", lj = /* @__PURE__ */ new Uint8Array(128);
for (let [e, t] of [
	[":", 21],
	["+", 22],
	[",", 23],
	["=", 24],
	["*", 25],
	["#", 26],
	["_", 27],
	[".", 28],
	["&", 29],
	["-", 30],
	[";", 32]
]) lj[e.charCodeAt(0)] = t;
function uj(e) {
	let t = e.length, n = [], r = [], i = [], a = [], o = 0, s = 0, c = (t, a, o) => {
		n.push(t), r.push(e.slice(a, o)), i.push(a), s = o;
	}, l = (e) => {
		a.push(o), o = e;
	}, u = () => {
		a.length > 0 && (o = a.pop());
	}, d = (n) => {
		let r = e.indexOf("\n", n);
		return r === -1 ? t : r;
	}, f = (n) => {
		for (; n < t && G(e.charCodeAt(n));) n++;
		return n;
	}, p = (t) => {
		for (; q(e.charCodeAt(t));) t++;
		return t;
	}, m = (t) => ib(e, s, t) && !J(e.charCodeAt(s + t.length));
	for (; s < t;) {
		let n = e.charCodeAt(s);
		if (o === 5) {
			if (n === 34) s++, u();
			else {
				let n = e.indexOf("\"", s);
				c(19, s, n === -1 ? t : n);
			}
			continue;
		}
		if (o === 6 || o === 7) {
			c(sj[o], s, d(s)), u();
			continue;
		}
		if (o === 8) {
			if (n === 125) s++, u();
			else {
				let n = e.indexOf("}", s);
				c(8, s, n === -1 ? t : n);
			}
			continue;
		}
		let r = e.charCodeAt(s + 1);
		if (n === 37 && r === 37) s = d(s + 2);
		else if (n !== 125 && r === 37 && e.charCodeAt(s + 2) === 37) s = d(s + 3);
		else if (n === 10 || n === 13) {
			if ((o === 1 || o === 3) && (n === 10 || r === 10)) {
				c(2, s, n === 10 ? s + 1 : s + 2), u();
				continue;
			}
			let t = s + 1;
			for (let n = e.charCodeAt(t); n === 10 || n === 13; n = e.charCodeAt(++t));
			c(2, s, t);
		} else {
			switch (n | 32) {
				case 116:
					if (m("title")) {
						c(3, s, s + 5);
						continue;
					}
					break;
				case 97:
					if (ib(e, s, "acc")) {
						let t = ib(e, s + 3, "descr");
						if (t || ib(e, s + 3, "title")) {
							let n = f(s + 8), r = e.charCodeAt(n);
							if (r === 58) {
								c(t ? 6 : 4, s, f(n + 1)), l(t ? 7 : 6);
								continue;
							}
							if (r === 123 && t) {
								s = f(n + 1), l(8);
								continue;
							}
						}
					}
					break;
				case 120:
					if (m("xychart-beta")) {
						c(9, s, s + 12);
						continue;
					}
					if (m("xychart")) {
						c(9, s, s + 7);
						continue;
					}
					if (m("x-axis")) {
						c(11, s, s + 6), l(1);
						continue;
					}
					break;
				case 121:
					if (m("y-axis")) {
						c(12, s, s + 6), l(1);
						continue;
					}
					break;
				case 118:
					if (ib(e, s, "vertical")) {
						c(10, s, s + 8);
						continue;
					}
					break;
				case 104:
					if (ib(e, s, "horizontal")) {
						c(10, s, s + 10);
						continue;
					}
					break;
				case 108:
					if (m("line")) {
						c(14, s, s + 4), l(3);
						continue;
					}
					break;
				case 98: if (m("bar")) {
					c(15, s, s + 3), l(3);
					continue;
				}
			}
			if (n === 91) o === 1 ? l(2) : o === 3 && l(4), c(17, s, s + 1);
			else if (n === 93) (o === 4 || o === 2) && u(), c(18, s, s + 1);
			else if (o === 1 && n === 45 && r === 45 && e.charCodeAt(s + 2) === 62) c(13, s, s + 3);
			else {
				if (o === 1 || o === 4) {
					let t = n === 43 || n === 45 ? s + 1 : s, r = e.charCodeAt(t), i = -1;
					if (q(r) ? (i = p(t + 1), e.charCodeAt(i) === 46 && q(e.charCodeAt(i + 1)) && (i = p(i + 2))) : r === 46 && q(e.charCodeAt(t + 1)) && (i = p(t + 2)), i !== -1) {
						c(16, s, i);
						continue;
					}
				}
				if (n === 96 && ib(e, s, cj)) s += cj.length, u();
				else if (n === 34) s++, l(5);
				else if (ae(n)) {
					let t = s + 1;
					for (; ae(e.charCodeAt(t));) t++;
					c(20, s, t);
				} else if (q(n)) c(31, s, p(s + 1));
				else if (G(n)) s = f(s + 1);
				else if (n < 128 && lj[n] !== 0) c(lj[n], s, s + 1);
				else break;
			}
		}
	}
	return s < t ? (n.push(1), r.push(""), i.push(s), {
		types: n,
		texts: r,
		starts: i
	}) : (n.push(sj[o]), r.push(""), i.push(t), n.push(0), r.push(""), i.push(t), {
		types: n,
		texts: r,
		starts: i
	});
}
function dj(...e) {
	let t = /* @__PURE__ */ new Uint8Array(34);
	for (let n of e) t[n] = 1;
	return t;
}
var fj = dj(29, 31, 20, 22, 24, 25, 28, 26, 30, 27), pj = dj(2, 32, 33);
function mj(e, t) {
	let { types: n, texts: r, starts: a } = uj(e), o = 0, s = (t) => {
		let r = n[o];
		throw r === 1 ? i("xychart", e, a[o], "", !0) : i("xychart", e, a[o], `Expecting ${t}, got '${oj[r]}'`);
	}, c = (e) => (n[o] !== e && s(`'${oj[e]}'`), r[o++]), l = (e) => e === 19 || fj[e] === 1, u = () => {
		l(n[o]) || s("'STR', 'ALPHA', 'NUM'");
		let e = r[o++];
		if (n[o - 1] !== 19) for (; fj[n[o]] === 1;) e += r[o++];
		return {
			text: e,
			type: "text"
		};
	}, d = () => {
		let e = Number(c(16));
		return c(13), [e, Number(c(16))];
	}, f = () => {
		let e = [];
		for (c(17);;) {
			let t = Number(c(16));
			if (e.push({
				value: t,
				label: n[o] === 19 ? r[o++] : ""
			}), n[o] !== 23) break;
			o++;
		}
		return c(18), e;
	};
	for (;;) if (pj[n[o]] === 1) o++;
	else {
		if (n[o] !== 9) break;
		n[++o] === 10 && t.setOrientation(r[o++]);
	}
	for (; n[o] !== 0;) {
		let e = n[o++];
		switch (e) {
			case 3:
				t.setDiagramTitle(u().text.trim());
				break;
			case 11:
			case 12: {
				let r = l(n[o]) ? u() : void 0;
				if (e === 11 && n[o] === 17) {
					let e = [];
					do
						o++, e.push(u());
					while (n[o] === 23);
					c(18), t.setXAxisBand(e);
				} else if (n[o] === 16 || r === void 0) {
					let [n, r] = d();
					e === 11 ? t.setXAxisRangeData(n, r) : t.setYAxisRangeData(n, r);
				}
				e === 11 ? t.setXAxisTitle(r ?? {
					type: "text",
					text: ""
				}) : t.setYAxisTitle(r ?? {
					type: "text",
					text: ""
				});
				break;
			}
			case 14:
			case 15: {
				let r = n[o] === 17 ? {
					text: "",
					type: "text"
				} : u(), i = f();
				e === 14 ? t.setLineData(r, i) : t.setBarData(r, i);
				break;
			}
			case 4:
				t.setAccTitle(c(5).trim());
				break;
			case 6:
				t.setAccDescription(c(7).trim());
				break;
			case 8:
				t.setAccDescription(r[o - 1].trim());
				break;
			default: o--, s("'title', 'X_AXIS', 'Y_AXIS', 'LINE', 'BAR', 'acc_title', 'acc_descr', 'acc_descr_multiline_value'");
		}
		for (; pj[n[o]] === 1;) o++;
	}
}
function hj(e, t) {
	let n = e / Math.max(t, 1), r = Math.floor(Math.log10(n)), i = n / 10 ** r, a = i >= 7.07 ? 10 : i >= 3.16 ? 5 : i >= 1.41 ? 2 : 1;
	return r < 0 ? -(10 ** -r) / a : a * 10 ** r;
}
function gj(e, t) {
	return e > 0 ? t / e : t * -e;
}
function _j(e, t) {
	return e > 0 ? t * e : t / -e;
}
function vj(e, t, n) {
	let r = Math.round(gj(n, e));
	_j(n, r) < e && r++;
	let i = Math.round(gj(n, t));
	_j(n, i) > t && i--;
	let a = [];
	for (let e = r; e <= i && a.length < 100; e++) a.push(_j(n, e));
	return a;
}
var yj = 4, bj = 12, xj = 26, Sj = 24, Cj = 1e300;
function wj(e) {
	return typeof e == "object" && e && !Array.isArray(e) ? e : {};
}
function Tj(e, t, n = !0) {
	let r = e[t];
	return typeof r == "boolean" ? r : n;
}
function Ej(e, t) {
	return typeof e == "number" && e > 0 ? Math.round(Math.min(Math.max(e, 100), 4e3)) : t;
}
function Dj(e) {
	return typeof e == "number" && isFinite(e) ? Math.min(Math.max(e, -Cj), Cj) : void 0;
}
function Oj(e) {
	let t = 0;
	for (let n of e) t = Math.max(t, n.label.width);
	return t;
}
function kj(e, t, n, r) {
	let i = e.lines.length === 1 ? e.lines[0] : void 0;
	return i && i.length === 1 && i[0].icon === void 0 && i[0].style === 0 ? `<text x="${X(t)}" y="${X(n + e.size * .35)}" text-anchor="${r}">${nt(i[0].text)}</text>` : Z(e, t + (r === "start" ? e.width / 2 : r === "end" ? -e.width / 2 : 0), n, "");
}
function Aj(e, t, r) {
	if (e.plots.length === 0) throw new n("No Plot to render, please provide a plot with some data", "semantic", { type: "xychart" });
	let i = wj(t.xyChart), a = r.fontSize ?? 16, o = Math.round(a * .875), s = Math.round(a * .75), c = r.measurer ?? Be(r.fontFamily, r.fontFamilyMono), l = r.padding ?? 8, u = Ej(i.width, 700), d = ro(r, u, 240), f = Math.round(Ej(i.height, 500) * Math.max(.6, d / u)), p = (e.orientation ?? i.chartOrientation) === "horizontal", m = Tj(i, "showDataLabel", !1), h = e.xAxis, g = e.plots, _ = (e, t, n) => Q(e, !1, c, t, n), v = _("0", o, 4e3).height, y = _("0", s, 4e3).height, b = Q(Tj(i, "showTitle") ? e.title : void 0, !1, c, a, d - 2 * l, 1), x = b.height > 0 ? b.height + 12 : 0, S = [], C = 0;
	Tj(i, "showLegend") && g.forEach((e, t) => {
		if (e.title === "") return;
		let n = _(e.title, o, d * .3);
		S.push({
			index: t,
			label: n
		}), C = Math.max(C, n.width + bj + 8);
	});
	let w = S.length > 0 ? C + Sj : 0, T = g.filter((e) => e.type === "bar").length, E = e.yAxis.min, D = e.yAxis.max, O = e.hasSetYAxis && isFinite(E) && isFinite(D) && E !== D;
	if (O) E = Dj(E), D = Dj(D);
	else {
		E = 1 / 0, D = -1 / 0;
		for (let e of g) for (let [, t] of e.data) {
			let e = Dj(t);
			e !== void 0 && (e < E && (E = e), e > D && (D = e));
		}
		E > D && (E = D = 0), T > 0 && (E = Math.min(E, 0), D = Math.max(D, 0)), E === D && (E === 0 ? D = 1 : (E -= Math.abs(E) / 2, D += Math.abs(D) / 2));
	}
	let k = (e, t) => {
		let n = hj(Math.abs(D - E), Math.max(2, Math.min(10, Math.floor(e / t))));
		return O || (E = _j(n, Math.floor(gj(n, E) + 1e-9)), D = _j(n, Math.ceil(gj(n, D) - 1e-9))), vj(Math.min(E, D), Math.max(E, D), n).map((e) => ({
			at: (e - E) / (D - E),
			label: _(String(e), o, 4e3)
		}));
	}, A = 1;
	if (h.type === "band") A = Math.max(h.categories.length, 1);
	else for (let e of g) A = Math.max(A, e.data.length);
	let j = 1 / A, M = h.type === "band" || T > 0 ? j / 2 : 0, N = Dj(h.type === "linear" ? h.min : void 0), P = Dj(h.type === "linear" ? h.max : void 0), F = N !== void 0 && P !== void 0 && N !== P, I = (e, t) => h.type === "band" ? (e + .5) * j : M + (t > 1 ? e / (t - 1) : F ? 0 : .5) * (1 - 2 * M), L = wj(i.xAxis), R = wj(i.yAxis), z = p ? L : R, B = p ? R : L, V = _(Tj(z, "showTitle") ? p ? h.title : e.yAxis.title : void 0, o, f * .8), H = _(Tj(B, "showTitle") ? p ? e.yAxis.title : h.title : void 0, o, d * .8), U = Tj(z, "showTick") ? yj : 0, ee = Tj(B, "showTick") ? yj : 0, te = Tj(z, "showLabel"), W = Tj(B, "showLabel"), ne = p ? d * .3 : Math.max(48, (d - 2 * l - 64 - w) * j - 8), re = h.type === "band" && Tj(L, "showLabel") ? h.categories.map((e) => _(e, o, ne)) : [], G = 0, K = 0;
	for (let e of re) G = Math.max(G, e.width), K = Math.max(K, e.height);
	let ie = (e) => {
		let t = [];
		if (h.type === "band") {
			let n = re.length === 0 ? 8 : p ? K : G + 12, r = Math.max(1, Math.ceil(n / (e * j)));
			for (let e = 0; e < h.categories.length; e += r) t.push({
				at: (e + .5) * j,
				label: re[e] ?? _(void 0, o, 0)
			});
		} else if (F) {
			let n = hj(Math.abs(P - N), Math.max(2, Math.min(10, Math.floor(e / (p ? 32 : 80)))));
			for (let e of vj(Math.min(N, P), Math.max(N, P), n)) t.push({
				at: M + (e - N) / (P - N) * (1 - 2 * M),
				label: _(String(e), o, 4e3)
			});
		} else N !== void 0 && t.push({
			at: .5,
			label: _(String(N), o, 4e3)
		});
		return t;
	}, q = 0, ae = 0;
	for (let e of g) {
		for (let t of e.pointLabels ?? []) q = Math.max(q, c.width(t, s, 0));
		if (m && p && e.type === "bar") for (let [, t] of e.data) ae = Math.max(ae, c.width(String(Dj(t) ?? ""), s, 0));
	}
	let oe = W ? p || h.type !== "band" ? v : K : 0, J = ee + (oe > 0 ? oe + 4 : 0) + (H.height > 0 ? H.height + 4 : 0), se = p ? 0 : q > 0 || m ? y + 4 : te ? v / 2 : 0, ce = l + x + se, le = Math.max(1, f - l - J - ce), ue = ce + le, de = p ? ie(le) : k(le, 56), fe = te ? Oj(de) : 0, pe = l + (V.height > 0 ? V.height + 6 : 0) + (fe > 0 ? fe + 6 : 0) + U, me = Math.max(q > 0 ? q + 12 : 0, ae > 0 ? ae + 8 : 0), he = p ? Math.min(d * .25, me) : 0, ge = Math.max(1, d - l - pe - w - he), _e = p ? k(ge, 80) : ie(ge);
	if (W && w + he === 0) {
		let e = 0;
		for (let t of _e) e = Math.max(e, t.at * ge + t.label.width / 2 - ge);
		ge = Math.max(1, ge - e);
	}
	let ve = pe + ge, ye = (e, t) => p ? pe + t * ge : pe + e * ge, be = (e, t) => p ? ce + e * le : ue - t * le, xe = (e) => (e - E) / (D - E), Se = (e) => Math.min(Math.max(e, 0), 1), Ce = (e) => p ? `M${X(ye(0, e))},${X(ce)}V${X(ue)}` : `M${X(pe)},${X(be(0, e))}H${X(ve)}`, we = "";
	for (let e of p ? _e : de) we += Ce(e.at);
	let Te = "", Ee = "";
	Tj(z, "showAxisLine") && (Te += `M${X(pe)},${X(ce)}V${X(ue)}`), Tj(B, "showAxisLine") && (Te += `M${X(pe)},${X(ue)}H${X(ve)}`);
	for (let e of de) {
		let t = p ? ce + e.at * le : ue - e.at * le;
		U && (Te += `M${X(pe)},${X(t)}h${-U}`), te && (Ee += kj(e.label, pe - U - 6, t, "end"));
	}
	for (let e of _e) {
		let t = pe + e.at * ge;
		ee && (Te += `M${X(t)},${X(ue)}v${ee}`), W && (Ee += kj(e.label, t, ue + ee + 4 + e.label.height / 2, "middle"));
	}
	let De = (p ? le : ge) * j, Oe = De * .7 / Math.max(T, 1), ke = T > 1 ? Math.min(2, Oe * .2) : 0, Ae = Se(xe(0));
	T > 0 && Ae > 0 && Ae < 1 && (Te += Ce(Ae));
	let je = "", Me = "", Ne = "", Pe = "", Fe = 0;
	g.forEach((e, t) => {
		let n = Bi(t), r = e.title ? ` data-id="${Y(e.title)}"` : "", i = h.type === "band" ? Math.min(e.data.length, A) : e.data.length;
		if (e.type === "bar") {
			let t = (Fe++ - (T - 1) / 2) * Oe - (Oe - ke) / 2, a = "";
			for (let n = 0; n < i; n++) {
				let r = Dj(e.data[n][1]);
				if (r === void 0) continue;
				let o = I(n, i), l = Se(xe(r)), u = Math.min(Ae, l), d = Math.max(Ae, l), f = p ? ye(o, u) : ye(o, 0) + t, h = p ? be(o, 0) + t : be(o, d), g = p ? (d - u) * ge : Oe - ke, _ = p ? Oe - ke : (d - u) * le;
				if (a += `<rect x="${X(f)}" y="${X(h)}" width="${X(g)}" height="${X(_)}"/>`, !m) continue;
				let v = String(r), b = c.width(v, s, 0), x = l >= Ae ? 1 : -1, S = f + g / 2, C = h + _ / 2, w = "middle";
				if (p) {
					if (_ < s) continue;
					S = (x > 0 ? f + g : f) + x * 6, w = x > 0 ? "start" : "end";
				} else {
					if (b + 2 > De / T) continue;
					C = (x > 0 ? h : h + _) - x * (y / 2 + 2);
				}
				Ne += `<text x="${X(S)}" y="${X(C + s * .35)}" text-anchor="${w}">${v}</text>`;
			}
			je += `<g class="pele-series pele-bars"${r} fill="${n}">${a}</g>`;
			return;
		}
		let a = "", o = "", l = !1, u = 0, d = NaN;
		for (let t = 0; t < i; t++) {
			let n = Dj(e.data[t][1]);
			if (n === void 0) {
				d = NaN;
				continue;
			}
			let r = I(t, i), c = xe(n), f = c >= 0 && c <= 1;
			if (d !== d) f && (a += `M${X(ye(r, c))},${X(be(r, c))}`), l = f;
			else {
				let e = c - d, t = 0, n = 1;
				if (e !== 0) {
					let r = -d / e, i = (1 - d) / e;
					t = Math.max(t, Math.min(r, i)), n = Math.min(n, Math.max(r, i));
				} else f || (t = 2);
				if (t <= n) {
					let i = u + (r - u) * t, o = d + e * t, s = u + (r - u) * n, c = d + e * n;
					(!l || t > 0) && (a += `M${X(ye(i, o))},${X(be(i, o))}`), a += `L${X(ye(s, c))},${X(be(s, c))}`;
				}
				l = f;
			}
			if (u = r, d = c, !f) continue;
			let m = ye(r, c), h = be(r, c);
			De >= 12 && (o += `<circle cx="${X(m)}" cy="${X(h)}" r="3"/>`);
			let g = _(e.pointLabels?.[t], s, 4e3);
			if (g.height > 0) {
				let e = g.width / 2;
				Pe += p ? kj(g, m + 10, h, "start") : kj(g, Math.max(Math.min(m, ve - e), pe + e), h - 6 - g.height / 2, "middle");
			}
		}
		Me += `<g class="pele-series pele-line"${r} fill="${n}">` + (a ? `<path d="${a}" fill="none" stroke="${n}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>` : "") + o + "</g>";
	});
	let Ie = "";
	V.height > 0 && (Ie += `<g transform="translate(${X(l + V.height / 2)},${X(ce + le / 2)}) rotate(-90)">${Z(V, 0, 0, "")}</g>`), Ie += Z(H, pe + ge / 2, f - l - H.height / 2, "");
	let Le = "", Re = 0;
	for (let e of S) Re += Math.max(xj, e.label.height + 6);
	let ze = ce + Math.max(0, (le - Re) / 2), Ve = ve + he + Sj;
	for (let { index: e, label: t } of S) {
		let n = Math.max(xj, t.height + 6);
		if (ze + n > f) break;
		let r = ze + n / 2, i = Bi(e);
		Le += `<g class="pele-legend-item" data-id="${Y(g[e].title)}">` + (g[e].type === "bar" ? `<rect x="${X(Ve)}" y="${X(r - bj / 2)}" width="${bj}" height="${bj}" rx="2" fill="${i}"/>` : `<path d="M${X(Ve)},${X(r)}h${bj}" stroke="${i}" stroke-width="2" stroke-linecap="round"/>`) + Z(t, Ve + bj + 8 + t.width / 2, r, "") + "</g>", ze += n;
	}
	return {
		svg: Ui("xychart", d, f, a, r, e, Z(b, d / 2, l + b.height / 2, " class=\"pele-title\" font-weight=\"var(--_tw)\"") + (we ? `<path class="pele-grid" d="${we}" stroke="var(--_a)"/>` : "") + `<g class="pele-plot">${je}${Me}</g>` + (Te ? `<path class="pele-axis" d="${Te}" fill="none" stroke="var(--_b)"/>` : "") + (Ee ? `<g class="pele-axis-labels" font-size="${o}" fill="var(--_m)">${Ee}</g>` : "") + (Ie ? `<g class="pele-axis-titles" font-size="${o}">${Ie}</g>` : "") + (Ne ? `<g class="pele-data-labels" font-size="${s}">${Ne}</g>` : "") + (Pe ? `<g class="pele-point-labels" font-size="${s}">${Pe}</g>` : "") + (Le ? `<g class="pele-legend" font-size="${o}">${Le}</g>` : "")),
		width: d,
		height: f,
		links: []
	};
}
He(Nm, Yy, Wf, Cy, ty, ME, Sv, ud, Cb, {
	type: "xychart",
	section: "xyChart",
	parse(e, t, n) {
		let r = new aj();
		return r.title = n, mj(e, r), r;
	},
	render: Aj
}, WT, Ig, Ps, vC, UC, Ny, Xb, ID, x_, rT, h_, fu, Hc, OS, Mo, yD, zd, ij, jp, nA, TA, G_, uE);
export { Ze as render };
