//#region node_modules/.pnpm/@noble+hashes@2.4.0/node_modules/@noble/hashes/_u64.js
var e = (e) => e / 2 ** 32 | 0, t = (e) => e >>> 0;
function n(n, r, i, a) {
	let o = e(i), s = t(i);
	n.setUint32(r, a ? s : o, a), n.setUint32(r + 4, a ? o : s, a);
}
//#endregion
//#region node_modules/.pnpm/@noble+hashes@2.4.0/node_modules/@noble/hashes/utils.js
function r(e) {
	return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in e && e.BYTES_PER_ELEMENT === 1;
}
var i = (e) => e ? `"${e}" ` : "";
function a(e, t = "") {
	if (typeof e != "number") throw TypeError(i(t) + "expected number, got " + typeof e);
	if (!Number.isSafeInteger(e) || e < 0) throw RangeError(i(t) + "expected integer >= 0, got " + e);
	return e;
}
function o(e, t, n = "") {
	if (r(e) && (t === void 0 || e.length === t)) return e;
	t !== void 0 && a(t, "length");
	let o = r(e), s = t === void 0 ? "" : ` of length ${t}`, c = o ? `length=${e.length}` : `type=${typeof e}`, l = i(n) + "expected Uint8Array" + s + ", got " + c;
	throw o ? RangeError(l) : TypeError(l);
}
var s = (e, t) => {
	if (typeof e != "object" || !e || Array.isArray(e)) throw TypeError((t === "object" ? "" : `"${t}" `) + "expected object, got type=" + typeof e);
}, c = (e, t) => {
	s(e, t);
	let n = Object.getPrototypeOf(e);
	if (n !== Object.prototype && n !== null) throw TypeError(`"${t}" expected plain object`);
	if (Object.hasOwn(e, "__proto__")) throw TypeError(`"${t}.__proto__" is not allowed`);
};
function l(e, t = !0) {
	if (e.destroyed) throw Error("hash was destroyed");
	if (t && e.finished) throw Error("digest() was already called");
}
function u(e, t) {
	o(e, void 0, "output");
	let n = t.outputLen;
	if (!(e.length >= n)) throw RangeError("\"output\" expected length >= " + n);
}
function d(...e) {
	for (let t = 0; t < e.length; t++) e[t].fill(0);
}
function f(e) {
	return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function p(e, t) {
	return e << 32 - t | e >>> t;
}
var m = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", h = /* @__PURE__ */ Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function g(e) {
	if (o(e), m) return e.toHex();
	let t = "";
	for (let n = 0; n < e.length; n++) t += h[e[n]];
	return t;
}
function _(e, t, n = "opts") {
	return c(e, "defaults"), t !== void 0 && c(t, n), Object.assign(Object.create(null), e, t);
}
function v(e, t = {}) {
	if (typeof e != "function") throw TypeError("\"hashCons\" expected function, got type=" + typeof e);
	t = _({}, t, "info");
	let n = (t, n) => e(n).update(t).digest(), r = e(void 0);
	return n.outputLen = r.outputLen, n.blockLen = r.blockLen, n.canXOF = r.canXOF, n.create = (t) => e(t), Object.assign(n, t), Object.freeze(n);
}
var y = (e) => ({ oid: Uint8Array.from([
	6,
	9,
	96,
	134,
	72,
	1,
	101,
	3,
	4,
	2,
	e
]) });
//#endregion
//#region node_modules/.pnpm/@noble+hashes@2.4.0/node_modules/@noble/hashes/_md.js
function b(e, t, n) {
	return e & t ^ ~e & n;
}
function x(e, t, n) {
	return e & t ^ e & n ^ t & n;
}
var S = class {
	blockLen;
	outputLen;
	canXOF = !1;
	padOffset;
	isLE;
	buffer;
	view;
	finished = !1;
	length = 0;
	pos = 0;
	destroyed = !1;
	constructor(e, t, n, r) {
		this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = r, this.buffer = new Uint8Array(e), this.view = f(this.buffer);
	}
	update(e) {
		l(this), o(e);
		let { view: t, buffer: n, blockLen: r } = this, i = e.length, a = !1;
		for (let o = 0; o < i;) {
			let s = Math.min(r - this.pos, i - o);
			if (s === r) {
				let t = f(e);
				for (; r <= i - o; o += r) this.process(t, o);
				a = !0;
				continue;
			}
			n.set(o === 0 && s === i ? e : e.subarray(o, o + s), this.pos), this.pos += s, o += s, this.pos === r && (this.process(t, 0), this.pos = 0, a = !0);
		}
		return this.length += e.length, a && this.roundClean(), this;
	}
	digestInto(e) {
		l(this), u(e, this), this.finished = !0;
		let { buffer: t, view: r, blockLen: i, isLE: a } = this, { pos: o } = this;
		t[o++] = 128, t.fill(0, o), this.padOffset > i - o && (this.process(r, 0), t.fill(0)), n(r, i - 8, this.length * 8, a), this.process(r, 0), this.roundClean();
		let s = e === t ? r : f(e), c = this.outputLen, d = c / 4, p = this.get();
		if (c % 4 || d > p.length) throw Error("invalid outputLen");
		for (let e = 0; e < d; e++) s.setUint32(4 * e, p[e], a);
	}
	digest() {
		let { buffer: e, outputLen: t } = this;
		this.digestInto(e);
		let n = e.slice(0, t);
		return this.destroy(), n;
	}
	_cloneIntoMeta(e) {
		let { buffer: t, length: n, finished: r, destroyed: i, pos: a } = this;
		return e.destroyed = i, e.finished = r, e.length = n, e.pos = a, a && e.buffer.set(t), e;
	}
	clone() {
		return this._cloneInto();
	}
}, C = /* @__PURE__ */ Uint32Array.from([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), w = /* @__PURE__ */ Uint32Array.from([
	1116352408,
	1899447441,
	3049323471,
	3921009573,
	961987163,
	1508970993,
	2453635748,
	2870763221,
	3624381080,
	310598401,
	607225278,
	1426881987,
	1925078388,
	2162078206,
	2614888103,
	3248222580,
	3835390401,
	4022224774,
	264347078,
	604807628,
	770255983,
	1249150122,
	1555081692,
	1996064986,
	2554220882,
	2821834349,
	2952996808,
	3210313671,
	3336571891,
	3584528711,
	113926993,
	338241895,
	666307205,
	773529912,
	1294757372,
	1396182291,
	1695183700,
	1986661051,
	2177026350,
	2456956037,
	2730485921,
	2820302411,
	3259730800,
	3345764771,
	3516065817,
	3600352804,
	4094571909,
	275423344,
	430227734,
	506948616,
	659060556,
	883997877,
	958139571,
	1322822218,
	1537002063,
	1747873779,
	1955562222,
	2024104815,
	2227730452,
	2361852424,
	2428436474,
	2756734187,
	3204031479,
	3329325298
]), T = /* @__PURE__ */ new Uint32Array(64), E = class extends S {
	A = 0;
	B = 0;
	C = 0;
	D = 0;
	E = 0;
	F = 0;
	G = 0;
	H = 0;
	constructor(e, t) {
		super(64, e, 8, !1), this.A = t[0] | 0, this.B = t[1] | 0, this.C = t[2] | 0, this.D = t[3] | 0, this.E = t[4] | 0, this.F = t[5] | 0, this.G = t[6] | 0, this.H = t[7] | 0;
	}
	get() {
		let { A: e, B: t, C: n, D: r, E: i, F: a, G: o, H: s } = this;
		return [
			e,
			t,
			n,
			r,
			i,
			a,
			o,
			s
		];
	}
	set(e, t, n, r, i, a, o, s) {
		this.A = e | 0, this.B = t | 0, this.C = n | 0, this.D = r | 0, this.E = i | 0, this.F = a | 0, this.G = o | 0, this.H = s | 0;
	}
	_cloneInto(e) {
		return (e ||= new this.constructor()).set(...this.get()), this._cloneIntoMeta(e);
	}
	process(e, t) {
		for (let n = 0; n < 16; n++, t += 4) T[n] = e.getUint32(t, !1);
		for (let e = 16; e < 64; e++) {
			let t = T[e - 15], n = T[e - 2], r = p(t, 7) ^ p(t, 18) ^ t >>> 3, i = p(n, 17) ^ p(n, 19) ^ n >>> 10;
			T[e] = i + T[e - 7] + r + T[e - 16] | 0;
		}
		let { A: n, B: r, C: i, D: a, E: o, F: s, G: c, H: l } = this;
		for (let e = 0; e < 64; e++) {
			let t = p(o, 6) ^ p(o, 11) ^ p(o, 25), u = l + t + b(o, s, c) + w[e] + T[e] | 0, d = (p(n, 2) ^ p(n, 13) ^ p(n, 22)) + x(n, r, i) | 0;
			l = c, c = s, s = o, o = a + u | 0, a = i, i = r, r = n, n = u + d | 0;
		}
		n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, a = a + this.D | 0, o = o + this.E | 0, s = s + this.F | 0, c = c + this.G | 0, l = l + this.H | 0, this.set(n, r, i, a, o, s, c, l);
	}
	roundClean() {
		d(T);
	}
	destroy() {
		this.destroyed = !0, this.set(0, 0, 0, 0, 0, 0, 0, 0), d(this.buffer);
	}
}, D = class extends E {
	constructor() {
		super(32, C);
	}
}, O = /* @__PURE__ */ v(() => new D(), /* @__PURE__ */ y(1)), k = (e) => {
	let t = [];
	for (let n of e) {
		let e = n.codePointAt(0);
		e < 128 ? t.push(e) : e < 2048 ? t.push(192 | e >> 6, 128 | e & 63) : e < 65536 ? t.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : t.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63);
	}
	return Uint8Array.from(t);
}, A = (e) => g(O(k(e)));
//#endregion
export { A as sha256Hex };
