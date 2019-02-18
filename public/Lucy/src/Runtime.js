var ya = "function" == typeof Object.defineProperties ? Object.defineProperty : function (M, oa, u) {
	if (u.get || u.set) throw new TypeError("ES3 does not support getters and setters.");
	M != Array.prototype && M != Object.prototype && (M[oa] = u.value)
},
	Xa = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

function ib() {
	ib = function () { };
	Xa.Symbol || (Xa.Symbol = jb)
}
var kb = 0;

function jb(M) {
	return "jscomp_symbol_" + (M || "") + kb++
}

function sd() {
	ib();
	var M = Xa.Symbol.iterator;
	M || (M = Xa.Symbol.iterator = Xa.Symbol("iterator"));
	"function" != typeof Array.prototype[M] && ya(Array.prototype, M, {
		configurable: !0,
		writable: !0,
		value: function () {
			return td(this)
		}
	});
	sd = function () { }
}

function td(M) {
	var oa = 0;
	return ud(function () {
		return oa < M.length ? {
			done: !1,
			value: M[oa++]
		} : {
				done: !0
			}
	})
}

function ud(M) {
	sd();
	M = {
		next: M
	};
	M[Xa.Symbol.iterator] = function () {
		return this
	};
	return M
}

function vd(M, oa) {
	sd();
	M instanceof String && (M += "");
	var u = 0,
		T = {
			next: function () {
				if (u < M.length) {
					var W = u++;
					return {
						value: oa(W, M[W]),
						done: !1
					}
				}
				T.next = function () {
					return {
						done: !0,
						value: void 0
					}
				};
				return T.next()
			}
		};
	T[Symbol.iterator] = function () {
		return T
	};
	return T
}

function wd(M, oa) {
	if (oa) {
		for (var u = Xa, T = M.split("."), W = 0; W < T.length - 1; W++) {
			var L = T[W];
			L in u || (u[L] = {});
			u = u[L]
		}
		T = T[T.length - 1];
		W = u[T];
		L = oa(W);
		L != W && null != L && ya(u, T, {
			configurable: !0,
			writable: !0,
			value: L
		})
	}
}
wd("Array.prototype.values", function (M) {
	return M ? M : function () {
		return vd(this, function (M, u) {
			return u
		})
	}
});
wd("Array.prototype.fill", function (M) {
	return M ? M : function (M, u, T) {
		var W = this.length || 0;
		0 > u && (u = Math.max(0, W + u));
		if (null == T || T > W) T = W;
		T = Number(T);
		0 > T && (T = Math.max(0, W + T));
		for (u = Number(u || 0); u < T; u++) this[u] = M;
		return this
	}
});

window.Runtime = function (M, oa) {
	function u(a, b) {
		this.files = {};
		this.root = "";
		a && this.load(a, b)
	}

	function T(a, b, c) {
		this.x = a;
		this.y = b;
		this.text = c
	}

	function W() {
		this.$c = "";
		this.offset = this.ba = 0;
		this.Xe = !1
	}

	function L() {
		this.Rd = []
	}

	function Z(a, b, c, d) {
		this.left = a ? a : 0;
		this.top = b ? b : 0;
		this.right = c ? c : 0;
		this.bottom = d ? d : 0
	}

	function pa() {
		this.y = this.x = 0
	}

	function Ya() {
		this.Ob = 12;
		this.oe = 400;
		this.ne = 0;
		this.me = "Arial";
		this.li = !1
	}

	function Na(a, b) {
		this.app = a;
		this.Ua = b;
		this.xg = new L
	}

	function ia(a, b, c) {
		this.app = a;
		this.width =
			b;
		this.height = c;
		this.canvas = document.createElement("canvas");
		this.canvas.width = b;
		this.canvas.height = c;
		this.Bd = this.canvas.getContext("2d")
	}

	function Da() {
		this.KG = !!window.opr && !!opr.sN || !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/");
		this.JG = "undefined" !== typeof InstallTrigger;
		this.MG = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") || "[object SafariRemoteNotification]" === (!window.safari || safari.pushNotification).toString();
		this.$m = !!document.documentMode;
		this.HG = !this.$m && !!window.StyleMedia;
		(this.Ez = !!window.chrome && !!window.chrome.webstore) || this.HG || this.$m || this.JG || this.KG || this.MG || this.IB(Da.DF);
		this.version = this.JB(navigator.userAgent) || this.JB(navigator.appVersion) || "Unknown version";
		this.IB(Da.FF)
	}

	function va() {
		this.st = null;
		this.height = this.width = 0;
		this.Wf = null;
		this.Ua = this.color = 0;
		this.ZF = null;
		this.Fq = this.du = this.FG = this.Xy = this.pd = 0;
		this.rt = null;
		this.li = !0
	}

	function U() { }

	function lb() {
		this.Ua = 0;
		this.name = null;
		this.index = 0
	}

	function ea() { }

	function mb() { }

	function nb() { }

	function ob() { }

	function pb() { }

	function qb() { }

	function rb() { }

	function sb() { }

	function tb() { }

	function ub() { }

	function vb() { }

	function wb() { }

	function xb() { }

	function yb() { }

	function zb() { }

	function Ab() { }

	function Bb() { }

	function V() { }

	function ta() { }

	function Za() { }

	function V() { }

	function Cb() { }

	function Db() { }

	function Eb() { }

	function Fb() { }

	function Gb() { }

	function Hb() { }

	function Ib() { }

	function Jb() { }

	function ca() { }

	function $a() { }

	function ua() { }

	function ab() { }

	function Kb() { }

	function Lb() { }

	function Mb() { }

	function Nb() { }

	function Ob() { }

	function Pb() { }

	function Qb() { }

	function Rb() { }

	function Sb() { }

	function bb() {
		la.Dc.dH()
	}

	function Tb() {
		la.Dc.iH()
	}

	function m(a, b, c, d) {
		(this.OG = !0 === d) ? (this.canvas = a.canvas, this.Oq = a.Oq) : "string" === typeof a ? (this.canvas = document.getElementById(a), this.Oq = this.canvas.parentElement) : a instanceof HTMLElement && (this.canvas = document.createElement("canvas"), this.Oq = a);
		a = this.ut = a.ut || document.createElement("div");
		a.appendChild(this.canvas);
		this.Oq.appendChild(a);
		a.style.overflow =
			"hidden";
		a.style.position = "relative";
		a.style.transform = "translateZ(0)";
		a.style.margin = "0";
		a.style.padding = "0";
		a.style.display = "block";
		a.style.boxSizing = "content-box";
		a.className = "MMFDiv";
		this.Yy = this.Zy = this.Ot = null;
		this.Zk = 0;
		this.appName = this.Pt = null;
		this.kl = 0;
		this.Xt = this.uz = null;
		this.on = 0;
		this.ho = this.cc = this.wg = this.Ab = this.$ = this.Cc = this.Wt = null;
		this.Pa = this.dC = 0;
		this.Jm = this.Km = this.ZA = this.bo = this.cn = null;
		this.he = this.ob = this.fw = 0;
		this.sa = this.file = this.frame = null;
		this.lv = this.mv = this.Sj = 0;
		this.Bh = this.D = null;
		this.tu = !1;
		this.bz = this.df = this.az = this.cz = this.dz = this.na = this.ia = this.Mm = this.Lm = this.Bf = this.Af = 0;
		this.Hm = this.nv = this.YA = null;
		this.nf = this.mf = this.CF = this.BF = this.Im = 0;
		this.bd = null;
		this.sy = 0;
		this.cursor = "auto";
		this.Zq = !1;
		this.Ft = this.Ht = null;
		this.Xe = !1;
		this.Yi = this.Xi = 0;
		this.Gu = this.lA = null;
		this.ya = this.alpha = this.Ed = this.Dd = this.wy = 0;
		this.file = b;
		this.Ji = "";
		this.path = c;
		b = c.lastIndexOf("/");
		0 <= b && (this.Ji = c.substring(0, b + 1));
		this.Pf = 0;
		this.D = null;
		this.hh = this.ih = this.Ld = 0;
		this.Gj = !1;
		this.Wa = [];
		this.Fn = -1;
		this.Uq = this.Vj = this.cB = this.eB = this.dB = this.bB = this.aB = 0;
		this.zf = this.Wc = this.jw = this.transition = null;
		this.jt = !1;
		this.vp = new Da;
		this.Bg = this.Ag = this.Ne = null;
		this.jn = m.lj;
		this.oa = null;
		this.om = this.kh = 0;
		this.Ys = null;
		this.Xg = this.Wg = this.nj = this.mj = 0;
		this.Vb = this.Wb = 1;
		this.hasFocus = !0;
		this.Xm = this.kt = !1;
		this.Yt = this.Vq = null;
		this.eq = -1;
		this.Zm = null;
		this.Ym = 1E9;
		this.cq = null;
		0 <= window.location.href.indexOf("192.") && (b = window.location.href.indexOf("21700/"), 0 <= b && (this.cq = window.location.href.substring(0,
			b + 6), this.eq = -1, this.Ym = 25));
		this.Kf = !1;
		this.EF = 3;
		this.xm = new L;
		this.Kp = new L;
		this.tb = [];
		this.Id = 0;
		this.ve = null;
		this.yu = "Please touch the screen to start";
		this.fullScreen = !1;
		this.rC = "***version***";
		this.ow = this.no = 0;
		this.lf = null
	}

	function Oa(a, b, c) {
		this.changedTouches = Array(1);
		this.changedTouches[0] = {
			pageX: a,
			pageY: b,
			target: c,
			identifier: m.Mw
		}
	}

	function D(a) {
		this.app = a;
		this.j = null;
		this.Iz = this.ic = this.cd = 0;
		this.lq = !1;
		this.Db = 0;
		this.mq = null;
		this.an = this.bn = 0;
		this.$y = null;
		this.Fc = 0;
		this.Dm = this.jd = this.Za =
			null;
		this.Pz = this.yq = this.lu = this.ku = this.ni = this.mi = this.bg = 0;
		this.fd = this.ed = this.gn = this.Kt = this.Fm = null;
		this.Vm = this.oa = this.Id = 0
	}

	function X(a) {
		this.app = a;
		this.Ja = null;
		this.gt = !1;
		this.Gx = !0;
		this.rm = this.Ur = null;
		this.Sz = 0;
		this.vj = null;
		this.yt = !1;
		this.Ja = Array(X.Nc);
		this.Ur = Array(X.Nc);
		this.rm = Array(X.Nc);
		this.gt = this.Gx = !0;
		var b;
		for (b = 0; b < X.Nc; b++) this.Ja[b] = null, this.Ur[b] = 100, this.rm[b] = !1;
		this.Sz = 100;
		b = new Audio;
		var c = Array(4);
		c[0] = b.canPlayType("audio/ogg");
		c[1] = b.canPlayType("audio/x-m4a");
		c[2] = b.canPlayType("audio/mpeg");
		c[3] = b.canPlayType("audio/wav");
		for (b = this.zu = this.tv = 0; 4 > b; b++) "probably" == c[b] && (this.tv |= 1 << b), "maybe" == c[b] && (this.zu |= 1 << b);
		for (; null != a.sa;) a = a.sa;
		this.context = a.ho;
		this.Qk = a.dC;
		null == this.context && ("undefined" !== typeof AudioContext ? (this.context = new AudioContext, this.Qk = 1) : "undefined" !== typeof webkitAudioContext && (this.context = new webkitAudioContext, this.Qk = 0), a.ho = this.context, a.dC = this.Qk)
	}

	function Ub(a) {
		this.app = a
	}

	function Vb(a) {
		this.app = a;
		this.hu = !1;
		this.B =
			null;
		this.context = this.app.context;
		this.Ge = this.app.dB;
		this.color = this.app.cB;
		this.Lh = this.app.aB;
		0 > this.Lh && (this.Lh = this.app.ia / 2);
		this.Mh = this.app.bB;
		0 > this.Mh && (this.Mh = this.app.na / 2);
		this.size = this.app.eB;
		this.ev = 0;
		this.Dp = 25;
		this.re = 0;
		this.Wf = new Image;
		var b = this;
		this.Wf.onload = function () {
			b.hu = !0
		};
		this.Wf.src = this.app.Ji + "Preloader.png"
	}

	function Wb(a) {
		this.app = a;
		this.context = this.app.context;
		this.width = 100;
		this.height = 12;
		this.position = 0;
		this.eF = 10526880;
		this.borderColor = 8421504;
		this.fF = 0;
		this.rect =
			new Z;
		this.rect.left = this.app.ia / 2 - this.width / 2;
		this.rect.top = this.app.na / 2 - this.height / 2;
		this.rect.right = this.rect.left + this.width;
		this.rect.bottom = this.rect.top + this.height;
		this.reset()
	}

	function Xb(a) {
		this.app = a;
		this.hu = !1;
		this.sc = new za;
		this.B = new m(this.app, this.app.file, this.app.path, !0);
		this.B.MB(this.app, this.app.Uq, 0, this.sc, this.app.ia, this.app.na);
		this.B.digest();
		this.B.tu = !1;
		this.B.Ti = !1;
		this.B.ya &= ~m.Nh;
		this.B.ew();
		this.B.Er(0, 0);
		this.B.io();
		this.sc.x = this.app.ia / 2 - this.B.frame.cd / 2;
		this.sc.y =
			this.app.na / 2 - this.B.frame.ic / 2;
		this.MI = 0 != (this.app.ya & m.zC);
		this.app.Wa.push(this.B);
		this.Sk = 0
	}

	function r(a) {
		this.app = a;
		this.Wy = this.Vy = this.Gd = this.od = this.jq = this.Nb = null;
		this.Jb = Array(3);
		this.Kb = Array(3);
		this.Ua = this.oa = this.hf = this.gf = 0;
		this.touches = Array(3);
		this.ht = !1;
		this.Fz = !0;
		this.Ae = this.Xf = this.Hz = 0
	}

	function h(a) {
		this.h = a;
		this.A = null;
		this.qg = this.pb = this.Ol = this.Yv = this.gb = this.Lc = this.wc = this.Xv = this.be = 0;
		this.v = this.O = null;
		this.Ni = this.Un = this.Wn = this.hk = this.Oi = this.Ub = this.Wv = this.Ih =
			this.Vn = this.ik = this.ea = this.ca = this.ae = this.$d = 0;
		this.hr = this.Nv = this.ir = null;
		this.pr = this.Ov = this.Il = this.El = this.Kl = this.Gl = this.Hl = this.Dl = this.Jl = this.Fl = this.Pv = this.Tc = this.Rv = this.Qv = this.ek = this.dk = this.yB = this.wf = this.Cl = this.Rn = this.On = this.bk = 0;
		this.fk = null;
		this.kb = this.Nl = this.sr = this.rr = this.Sv = this.Tv = this.BB = 0;
		this.or = this.Ml = this.Jc = null;
		this.xf = 0;
		this.nr = this.Tn = null;
		this.Ll = 0;
		this.gk = null;
		this.mc = 0;
		this.G = this.Yq = null;
		this.eu = Array(2);
		this.Xk = !1;
		this.Ry = 0;
		this.Vv = 255;
		this.$q = this.wH = !1
	}

	function Yb() {
		this.lF = null;
		this.by = this.ay = this.$x = this.nF = this.mF = this.um = 0
	}

	function I() {
		this.dv = this.cv = this.$a = this.wd = this.ib = this.Hc = 0;
		this.tf = !1;
		this.Bn = this.SA = this.TA = this.UA = this.pl = this.vd = this.Nq = this.Xd = this.Wd = this.Ci = this.gg = this.Ai = this.av = this.$u = this.Bi = 0;
		this.ql = this.rl = null;
		this.bv = 0;
		this.zi = null
	}

	function xd() {
		this.rf = this.name = null
	}

	function yd() {
		this.value = null;
		this.wr = this.xr = this.yc = this.bb = 0
	}

	function zd() {
		this.text = null;
		this.bb = 0
	}

	function Ad() {
		this.xg = this.values = null;
		this.Ua =
			0
	}

	function aa() {
		this.qH = 0;
		this.oH = null;
		this.pH = 0;
		this.Tb = this.V = null
	}

	function t() {
		this.bi = this.Yg = this.Ad = null
	}

	function Ia() {
		this.Ue = 0;
		this.ai = this.Ve = null
	}

	function Zb() {
		this.Jk = this.Ax = this.zx = this.Zs = this.$s = 0;
		this.oj = null
	}

	function Ea() {
		this.a = null;
		this.Yj = this.br = this.kg = 0;
		this.Cv = !1;
		this.Mn = 0;
		this.Yd = null;
		this.cr = this.ar = 0;
		this.Ln = null;
		this.yl = this.wl = this.mg = this.lg = this.mB = this.Xj = this.vl = this.Kn = this.lB = this.xl = this.Fi = this.Bv = 0;
		this.nB = -1
	}

	function $b(a, b) {
		this.$ = a;
		this.app = a.app;
		this.handle =
			b
	}

	function ac(a) {
		this.app = a;
		this.images = this.file = null;
		this.De = this.ri = this.nb = 0;
		this.yh = this.tb = this.zh = this.pj = this.Fj = this.Ch = this.Ga = this.ua = this.Pj = null
	}

	function fa() {
		this.app = null;
		this.Ga = this.Fg = this.Eg = this.va = this.wa = this.height = this.width = this.handle = 0;
		this.mh = this.el = this.$f = this.eb = null;
		this.fd = this.ed = this.fb = 0
	}

	function bc(a) {
		this.app = a;
		this.Lq = this.fonts = this.file = null;
		this.nh = 0;
		this.ua = null;
		this.ag = this.Hd = 0;
		this.Ga = null;
		this.sn = new wa;
		this.sn.Gp()
	}

	function wa() {
		this.ne = this.oe = this.Ob =
			this.handle = this.Ga = 0;
		this.font = this.me = null;
		this.li = !1
	}

	function cc(a) {
		this.app = a;
		this.lk = null;
		this.qn = this.ri = this.nb = 0;
		this.file = this.Ga = this.ua = this.Mq = null
	}

	function Pa(a) {
		this.Dc = a;
		this.context = a.cc.context;
		this.Qk = a.cc.Qk;
		this.aG = a.cc.aG;
		this.type = 0;
		this.file = a.file;
		this.handle = -1;
		this.lb = this.source = null;
		this.Ga = 0;
		this.tm = !1;
		this.oh = 0;
		this.name = null;
		this.di = this.up = this.Zg = !1;
		this.frequency = 0;
		this.gain = this.response = null
	}

	function dc(a) {
		this.name = a;
		this.PH = [];
		this.position = 0;
		this.Oz = !1
	}

	function N(a) {
		this.Dc =
			a;
		this.j = null;
		this.HA = this.bg = 0;
		this.Ou = Array(q.Pd + q.gx);
		this.nn = this.ph = 0;
		this.Hj = this.Of = this.ec = this.Pb = this.bc = this.Fd = this.jg = null;
		this.se = Array(q.Pd + 1);
		this.EB = !1;
		this.xe = null;
		this.Hn = this.Jn = this.Gn = this.In = 0;
		this.Sn = !1;
		this.pg = null;
		this.tr = 0;
		this.qr = Array(4);
		this.Pn = this.$j = this.Bl = !1;
		this.mr = this.Fh = this.Zj = this.vc = 0;
		this.jr = this.Hh = !1;
		this.ng = null;
		this.Qn = this.Ke = this.og = 0;
		this.ak = this.Gh = null;
		this.zj = 0;
		this.uc = !1;
		this.Mv = this.DB = this.Kc = this.CB = 0;
		this.sm = !1;
		this.Ki = null;
		this.xB = 0;
		this.ck =
			null;
		this.ot = !1;
		this.Wz = 0
	}

	function G() {
		this.Uk = this.yj = this.Na = this.je = this.Fb = 0;
		this.Ta = null
	}

	function Q() { }

	function Bd() {
		this.Ny = this.id = 0
	}

	function Cd() {
		this.Xq = this.Wq = 0
	}

	function Dd(a, b, c, d, e) {
		this.oI = a;
		this.code = b;
		this.GH = c;
		this.FH = d;
		this.vh = e
	}

	function Ed() {
		this.vv = this.uv = this.Di = this.ul = this.Ei = this.hg = 0;
		this.wv = this.uf = !1;
		this.La = null
	}

	function cb() {
		this.next = null;
		this.type = 0;
		this.name = null;
		this.index = this.qq = this.jo = this.SI = this.Ld = 0;
		this.ft = !1
	}

	function xa() {
		this.oq = this.Jz = this.nu = this.pu =
			this.ou = this.jf = this.oi = 0;
		this.mu = null;
		this.mu = Array(4);
		var a;
		for (a = 0; 4 > a; a++) this.mu[a] = null
	}

	function ec() {
		this.ua = this.list = null;
		this.nq = this.pf = 0
	}

	function S(a) {
		this.app = a;
		this.Op = this.Np = this.y = this.x = 0;
		this.qp = this.tl = this.sl = null;
		this.Sd = !1;
		this.Rj = null;
		this.Lx = this.Kx = this.Nx = this.Mx = this.Jx = this.Ed = this.Dd = this.Gq = this.Eq = this.Zl = this.Yl = this.ya = this.Pu = 0;
		this.Ea = this.ub = this.Rb = null;
		this.angle = 0;
		this.scale = this.Vb = this.Wb = 1;
		this.wa = this.oo = 320;
		this.va = this.qo = 240
	}

	function ga(a, b, c, d, e, f) {
		this.app =
			a;
		this.aH = d;
		this.Ee = this.type = 0;
		this.x = b;
		this.y = c;
		this.height = this.width = 0;
		this.Jd = null;
		this.Nk = !1;
		this.Rc = null;
		this.borderWidth = 0;
		this.borderColor = this.tt = this.sj = null;
		this.Ed = this.Dd = 0;
		this.V = this.body = null;
		if (d)
			if (this.Jd = this.app.Cc.Cj(d.jf), this.type = this.Jd.qe, this.Ee = this.Jd.ac.NA, this.borderWidth = this.Jd.ac.Kq, this.vz = this.Jd.ac.wn, this.Dd = this.Jd.Xu, this.Ed = this.Jd.Yu, this.width = this.Jd.ac.KA, this.height = this.Jd.ac.LA, this.Nk = 0 != this.Jd.ac.JA, this.sj = this.Jd.ac.cg, this.tt = this.Jd.ac.ml, this.borderColor =
				this.Jd.ac.Jq, 1 == this.type) this.Rc = this.app.$.Hb(this.Jd.ac.rh), this.width = this.Rc.width, this.height = this.Rc.height;
			else {
				if (32 <= this.type) {
					a = this.app.D;
					b = null;
					for (e = c = 0; e < a.pb; e++) {
						for (; null == a.G[c];) c++;
						b = a.G[c];
						c++;
						if (b.bH == d) break
					}
					this.V = b
				}
			}
		else {
			this.type = q.hx;
			this.Rc = e;
			this.width = this.Rc.width;
			this.height = this.Rc.height;
			this.x -= this.Rc.wa;
			this.y -= this.Rc.va;
			switch (f) {
				case 0:
					this.Ee = Y.kx;
					break;
				case 1:
					this.Ee = Y.Zo;
					break;
				case 2:
					this.Ee = Y.If;
					break;
				case 3:
					this.Ee = Y.Rs
			}
			this.Nk = !1
		}
	}

	function q() {
		this.Yu =
			this.Xu = this.wh = this.qe = this.zn = 0;
		this.ac = this.Zu = null;
		this.RA = this.QA = 0
	}

	function fc() {
		this.fg = this.kc = this.yi = 0;
		this.xi = this.An = this.xh = null;
		this.Jp = 0
	}

	function Y() { }

	function gc() {
		this.rh = 0
	}

	function Fa() {
		this.rh = this.wn = this.ml = this.cg = this.xn = this.ui = this.sh = this.Jq = this.Kq = 0
	}

	function z() {
		this.eg = 0;
		this.Uu = null;
		this.sf = this.vi = 0;
		this.Gc = this.Va = this.ti = this.yn = this.ol = this.dg = null;
		this.OA = this.MA = 0;
		this.vn = this.nl = null
	}

	function hc() {
		this.ud = this.PA = this.uh = this.th = 0;
		this.Vu = null
	}

	function ic() {
		this.my =
			this.ny = this.ly = 0
	}

	function ha() {
		this.jl = this.wn = this.ml = this.cg = this.xn = this.ui = this.sh = this.Jq = this.Kq = this.wi = this.Oj = this.Fe = this.Wu = this.uh = this.th = 0;
		this.frames = null
	}

	function jc() {
		this.uh = this.th = this.ud = 0;
		this.text = null
	}

	function ma() {
		this.kw = this.mo = this.Vl = 0;
		this.Kh = null
	}

	function kc() {
		this.Qj = this.kv = this.jv = 0;
		this.Eb = null
	}

	function E() {
		this.tc = this.Cb = 0;
		this.c = null;
		this.Um = this.Da = this.Mb = this.Vf = this.Ib = this.$p = 0;
		this.hc = null;
		this.Zt = 0;
		this.Zp = this.yz = null;
		this.aq = this.bl = 0;
		this.T = this.al =
			null;
		this.zG = this.ze = this.qd = this.bu = this.W = this.ja = this.I = this.J = this.ga = this.fa = this.s = this.Uf = this.u = this.Tf = 0;
		this.Tm = !1;
		this.F = this.qb = this.ha = this.w = this.b = null
	}

	function lc() {
		this.dw = !1;
		this.Wf = null;
		this.ma = !1;
		this.pa = null;
		this.Sd = !0;
		this.Wb = this.Vb = 1;
		this.y = this.x = this.angle = 0;
		this.qk = null
	}

	function J() {
		this.ud = this.Ua = 0;
		this.B = null;
		this.iv = this.hv = 0;
		this.VA = this.level = -1;
		this.kq = null;
		this.Sd = !0
	}

	function mc() {
		this.Zd = this.Ic = this.Eh = 0;
		this.Ia = -1;
		this.wb = this.vb = 1;
		this.Ra = this.Dh = this.X = this.Fa =
			this.ab = 0;
		this.Ha = this.K = !1;
		this.Hi = this.Gi = 0;
		this.er = -1;
		this.Hv = this.Fv = this.Gv = this.Ev = this.Dv = this.dr = 0
	}

	function ba() {
		this.Vc = this.Uc = this.yc = this.bb = this.qa = this.type = 0;
		this.Hx = this.ma = !1;
		this.md = this.pf = this.sg = this.$n = this.nc = 0;
		this.qj = !1;
		this.pa = this.da = null;
		this.pd = 0;
		this.font = null;
		this.Cd = this.Ca = !1
	}

	function nc() {
		this.type = this.nc = this.pc = this.Vc = this.Uc = this.qa = this.Jh = 0;
		this.ma = !0;
		this.pf = 0;
		this.da = null;
		this.md = 0;
		this.pa = null;
		this.pd = 0;
		this.alpha = 1;
		this.tj = "source-over";
		this.Cd = !1
	}

	function oc() {
		this.type =
			this.nc = this.pc = this.Vc = this.Uc = this.qa = this.Jh = 0;
		this.ma = !0;
		this.pf = 0;
		this.da = null;
		this.md = 0;
		this.pa = null;
		this.pd = 0;
		this.alpha = 1;
		this.tj = "source-over";
		this.Cd = !1
	}

	function pc() {
		this.Ql = null;
		this.ao = this.pc = this.bb = this.yc = 0;
		this.font = null;
		this.ma = !0;
		this.GB = this.Ua = 0;
		this.da = this.pa = null;
		this.Ca = !1;
		this.rect = new Z;
		this.Vc = this.Uc = this.deltaY = 0;
		this.Xa = null;
		this.Cd = !1
	}

	function qc() {
		this.Vc = this.Uc = 0;
		this.xd = null;
		this.uj = 0;
		this.yg = []
	}

	function rc(a, b) {
		this.ext = b.h.Ht.Nz(a);
		this.Qu = !1;
		this.Tu = this.un =
			this.sv = 0;
		this.Ca = !1;
		this.ma = !0;
		this.da = this.pa = null
	}

	function Qa() { }

	function Ja() {
		this.kq = this.dir = this.y = this.x = 0;
		this.Ix = !1
	}

	function sc(a) {
		a.file.m();
		this.Sr = a.file.m()
	}

	function Fd(a) {
		this.Ld = a.file.o();
		this.qq = a.file.o();
		this.Ap = a.file.m()
	}

	function Gd(a) {
		this.color = a.file.Sc()
	}

	function Hd(a) {
		this.Sk = a.file.o();
		this.tF = a.file.o()
	}

	function na(a) {
		this.Ap = a.file.m();
		for (var b = a.file.ba, c = 0, d; ;) {
			c++;
			d = a.file.o();
			if (0 == d) break;
			d = a.file.m();
			6 < d && a.file.la(d - 6)
		}
		a.file.seek(b);
		this.Aa = Array(c);
		for (b = 0; b <
			c; b++) this.Aa[b] = ca.create(a.file)
	}

	function Id(a) {
		var b = a.file.m();
		a.file.la(4);
		this.data = 0;
		6 < b && (this.data = a.file.ba, a.file.la(b - 6))
	}

	function ja(a) {
		this.Sf = a.file.m();
		this.tG = a.file.m()
	}

	function Jd(a) {
		a.file.la(4);
		this.ba = 0;
		this.id = a.file.m()
	}

	function Ga(a) {
		this.value = a.file.o();
		this.Sr = 0
	}

	function tc(a) {
		this.key = a.file.m()
	}

	function Kd(a) {
		this.$b = a.file.P();
		this.vh = a.file.P();
		this.type = a.file.P()
	}

	function ka() { }

	function uc(a) {
		this.Dn = a.file.P();
		this.Uj = a.file.P();
		this.Sq = a.file.P();
		this.Tq = a.file.P();
		this.Qq = a.file.P();
		this.ov = a.file.P();
		this.Pq = a.file.o();
		this.Rq = a.file.P();
		this.En = a.file.P();
		this.pv = a.file.P()
	}

	function db(a) {
		this.Dn = a.file.P();
		this.Uj = a.file.P();
		this.Sq = a.file.P();
		this.Tq = a.file.P();
		this.Qq = a.file.P();
		this.ov = a.file.P();
		this.Pq = a.file.o();
		this.Rq = a.file.P();
		this.En = a.file.P();
		this.pv = a.file.P();
		this.xp = a.file.m();
		this.Sx = a.file.m()
	}

	function vc(a) {
		this.Dn = a.file.P();
		this.Uj = a.file.P();
		this.Sq = a.file.P();
		this.Tq = a.file.P();
		this.Qq = a.file.P();
		this.ov = a.file.P();
		this.Pq = a.file.o();
		this.Rq = a.file.P();
		this.En = a.file.P();
		this.pv = a.file.P();
		this.xp = a.file.P();
		this.Sx = a.file.P();
		a.file.la(4);
		this.FI = a.file.m()
	}

	function Ka(a) {
		this.fo = a.file.m();
		this.cC = a.file.m()
	}

	function da(a) {
		this.value = a.file.m()
	}

	function Ra(a) {
		this.zb = a.file.Sb()
	}

	function Ld(a) {
		this.Ld = a.file.o();
		this.qq = a.file.o()
	}

	function Md(a) {
		a.file.P();
		a.file.P();
		a.file.P();
		a.file.P()
	}

	function Sa() {
		this.rj = []
	}

	function Aa(a) {
		this.ro = this.po = 1;
		this.fv = -1;
		this.gv = this.dw = !1;
		this.xj = this.wj = 0;
		if (!(this.Ba = a.getContext("2d"))) throw Error("Failed to init standard renderer");
	}

	function qa() {
		this.ym = "";
		this.ty = this.ko = this.lo = this.nC = this.oC = 0
	}

	function wc() { }

	function v() {
		this.i = this.en = this.dn = this.tq = 0;
		this.ka = this.Qz = !1;
		this.bh = this.xy = this.l = this.R = null
	}

	function xc(a) {
		this.app = a
	}

	function La() { }

	function yc() {
		this.Rz = this.f = this.g = this.Qa = 0
	}

	function zc() {
		this.f = this.g = this.Qa = 0
	}

	function Ac() {
		this.hb = this.jc = this.mt = this.Ye = 0;
		this.rH = null
	}

	function Bc() {
		this.f = this.g = this.Mp = this.Ka = 0
	}

	function Cc() {
		this.hb = this.jc = this.pi = 0
	}

	function Dc() { }

	function Ec() {
		this.f = this.g = this.Am =
			this.Qa = this.Ka = 0
	}

	function Fc() {
		this.xu;
		this.Kj = this.Mj = this.Zf = this.pe = this.H = 0;
		this.Td = null
	}

	function Gc() {
		this.f = this.g = this.Qa = 0
	}

	function Hc() {
		this.wu = this.f = this.g = this.Qa = 0
	}

	function Ic() {
		this.pi;
		this.jc;
		this.hb
	}

	function Jc() {
		this.f = this.g = this.Hy = this.Ka = this.Qa = 0
	}

	function Kc() {
		this.f = this.g = this.Qa = 0
	}

	function Lc() {
		this.Qb = this.f = this.g = this.Qa = 0
	}

	function Mc() {
		this.Jj = this.Ij = this.f = this.g = this.Qa = 0
	}

	function Nc() {
		this.dl = this.f = this.g = this.Gy = this.zm = this.Ka = 0
	}

	function Oc() {
		this.sq = this.f = this.g =
			this.zm = this.Ka = 0
	}

	function Pc() {
		this.rq = this.wq = this.xq = this.uq = this.dd = this.vu = this.Z = this.Y = this.Kj = this.Mj = this.Zf = this.pe = this.H = this.uC = this.Zr = this.pw = 0
	}

	function Qc() {
		this.kf = this.Lj = this.f = this.g = this.Ka = this.Qa = 0
	}

	function Rc() { }

	function Sc() {
		this.f = this.g = this.Ka = 0
	}

	function Tc(a, b) {
		var c = new W;
		la.Dc = new m(a, c, b);
		c.getFile(b, Uc)
	}

	function Uc() {
		la.Dc.load()
	}

	function Ta() {
		la.Dc.io()
	}

	function za() {
		this.y = this.x = 0;
		this.visible = !0;
		this.children = [];
		this.Kf = !1
	}

	function ra() { }

	function B() {
		this.N = null;
		this.lineWidth = this.va = this.wa = this.width = this.height = this.lineWidth = 0
	}

	function Nd() {
		this.N = null;
		this.angle = 0;
		this.Wb = this.Vb = 1;
		this.iw = 0
	}

	function w() {
		this.a = null;
		this.U = this.oc = this.xc = this.yr = this.Pl = this.vr = this.ur = 0;
		this.tg = null
	}

	function Vc() {
		this.Hq = 0;
		this.xg = null
	}

	function Wc() {
		this.Iq = 0;
		this.values = null;
		this.Ua = 0
	}

	function Ba() {
		this.zr = 0;
		this.de = this.hd = null
	}

	function Ma(a) {
		this.app = a;
		this.Pp = null;
		this.xH = 0
	}

	function Ha() {
		this.Tb = this.V = null
	}

	function Xc() { }

	function Yc() { }

	function Zc() { }

	function O() {
		this.Nu =
			100;
		this.Dq = this.FA = this.GA = this.il = 0
	}

	function $c() {
		this.pn = 0;
		this.sd = null
	}

	function ad() {
		this.Zz = this.$z = this.Xz = this.Yz = this.fn = 0
	}

	function bd() {
		this.fA = this.eA = this.dA = this.gA = 0
	}

	function cd() {
		this.kA = this.iA = this.jA = this.hA = 0
	}

	function dd() {
		this.EA = this.CA = this.Mu = this.zA = this.AA = this.hl = 0;
		this.Oa = null
	}

	function ed() {
		this.Eu = this.bA = this.Fu = this.Au = this.Du = this.Cu = this.Bu = this.cA = 0;
		this.Vd = null
	}

	function fd() {
		this.rA = this.qA = this.sA = this.pA = this.oA = this.tA = 0
	}

	function gd() {
		this.vA = this.uA = this.wA = this.Lu =
			this.Ku = this.xA = 0
	}

	function hd() { }

	function id() {
		this.Ec = null;
		this.data = 0
	}

	function F() {
		this.a = null;
		this.Qi = this.ce = this.rg = this.xb = this.Kd = this.Yn = this.Xn = 0
	}

	function sa() {
		this.Bs = this.Mo = this.yk = this.Xw = this.xk = this.No = this.Lo = 0;
		this.Th = !1
	}

	function jd() {
		this.Oo = !1;
		this.zk = null
	}

	function kd() { }

	function ld() {
		this.Ds = this.Hf = this.Es = this.Mg = 0
	}

	function md() {
		this.Po = this.Qo = this.Is = this.Hs = this.Gs = this.Fs = 0
	}

	function nd() {
		this.Od = this.gj = this.fj = this.Sg = this.Rg = this.Uo = this.im = this.jm = this.rc = 0;
		this.Yc = !1;
		this.xa = null;
		this.Qg = this.Wo = this.Vo = this.Pg = 0;
		this.Ek = null;
		this.To = !1
	}

	function K() {
		this.Bk = this.ax = this.Uh = this.Re = this.Qe = this.kd = this.$w = this.Js = this.yd = this.Ya = 0;
		this.Ck = null;
		this.Ls = this.Ks = 0;
		this.dj = !1
	}

	function Ua() {
		this.bx = this.Ms = this.cx = this.Ns = this.ej = this.Dk = this.Os = this.ld = this.Og = 0
	}

	function Va() { }

	function Ca() {
		this.Zv = 0;
		this.aa = null;
		this.$v = 0;
		this.M = !1;
		this.Ri = 0;
		this.Pi = !1;
		this.Zn = 0
	}
	var la = this,
		n = {
			extend: function (a, b) {
				var c = Object.create(a.prototype || a);
				if (void 0 !== b && (b = b.prototype ||
					b))
					for (var d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
				return c
			},
			Go: function (a) {
				return a >> 16
			},
			cE: function (a) {
				return a & 65535
			},
			eE: function (a, b) {
				return b << 16 | a & 65535
			},
			qO: function (a) {
				return a >>> 16 & 255
			},
			jO: function (a) {
				return a >>> 8 & 255
			},
			cO: function (a) {
				return a & 255
			},
			DM: function (a, b, c) {
				return (a & 255) << 16 | (b & 255) << 8 | c & 255
			},
			aP: function (a) {
				return (a & 255) << 16 | (a >>> 8 & 255) << 8 | a >>> 16 & 255
			},
			CN: function (a, b, c) {
				return Math.min(Math.max(a, b), c)
			},
			ef: function (a) {
				var b = (a >>> 16 & 255).toString(16),
					c = (a >>> 8 & 255).toString(16);
				for (a =
					(a & 255).toString(16); 2 > b.length;) b = "0" + b;
				for (; 2 > c.length;) c = "0" + c;
				for (; 2 > a.length;) a = "0" + a;
				return "#" + b + c + a
			},
			ke: function (a) {
				return 0 > a ? Math.ceil(a) : Math.floor(a)
			},
			uN: function (a) {
				return Math.round(a)
			},
			gu: function (a) {
				return Math.ceil(a) == a
			},
			Hp: function (a, b, c, d, e) {
				ox = d / 2 * .5522848;
				oy = e / 2 * .5522848;
				xe = b + d;
				ye = c + e;
				xm = b + d / 2;
				ym = c + e / 2;
				a.beginPath();
				a.moveTo(b, ym);
				a.bezierCurveTo(b, ym - oy, xm - ox, c, xm, c);
				a.bezierCurveTo(xm + ox, c, xe, ym - oy, xe, ym);
				a.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
				a.bezierCurveTo(xm - ox, ye, b, ym +
					oy, b, ym);
				a.closePath()
			},
			SN: function (a, b) {
				a.beginPath();
				a.moveTo(b.left, b.top);
				a.lineTo(b.right, b.top);
				a.lineTo(b.right, b.bottom);
				a.lineTo(b.left, b.bottom);
				a.lineTo(b.left, b.top);
				a.closePath();
				a.stroke()
			},
			RN: function (a, b, c, d, e) {
				a.beginPath();
				a.moveTo(b, c);
				a.lineTo(d, e);
				a.closePath();
				a.stroke()
			},
			Gm: function (a, b) {
				for (var c = a.toString(); 4 > c.length;) c = "0" + c;
				return c + ("." + b)
			},
			rb: function (a, b) {
				if (a == b) return !0;
				a = a.toLowerCase();
				b = b.toLowerCase();
				return a == b
			},
			DO: function (a) {
				var b = a.lastIndexOf("\\");
				0 < b &&
					(a = a.substring(b + 1));
				return a
			},
			fE: 40,
			UE: [0, 1, 2, 3, 5, 7, 8, 9, 11, 12, 13, 15, 16, 17, 19, 20, 21, 23, 24, 25, 27, 28, 29, 31, 32, 33, 35, 36, 37, 39, 40, 41, 43, 44, 45, 47, 48, 49, 51, 52],
			uO: function (a) {
				return a < n.fE ? n.UE[a] : Math.round(96 * a / 72)
			},
			zo: 0,
			Ao: 0,
			cj: 1,
			gs: 2,
			yo: 8,
			Oh: 4,
			iD: 32,
			fs: 1024,
			jD: 2048,
			Fy: function (a, b, c, d, e, f) {
				if (0 == b.length) return 0 != (c & 1024) && (d.right = d.left, d.bottom = d.top), 0;
				e.li || (a.font = e.Qf());
				var g = 0,
					l = String.fromCharCode(10),
					p = String.fromCharCode(13),
					H = b.indexOf(l);
				if (0 <= H) {
					var P = new Z;
					P.hy(d);
					var h, k = 0,
						m = 0,
						q;
					do h = -1, k < b.length && (h = b.indexOf(p, k)), q = Math.max(H, h), h == H - 1 && H-- , H = b.substring(k, H), h = n.Tk(a, H, c, P, f, e), m = Math.max(m, P.right - P.left), g += h, P.top += h, P.bottom = d.bottom, P.right = d.right, k = q + 1, H = -1, k < b.length ? H = b.indexOf(l, k) : (h = n.Tk(a, "", c, P, f, e), m = Math.max(m, P.right - P.left), g += h, P.top += h, P.bottom = d.bottom, P.right = d.right); while (0 <= H);
					k < b.length && (H = b.substring(k), h = n.Tk(a, H, c, P, f, e), m = Math.max(m, P.right - P.left), g += h);
					0 != (c & n.fs) && (d.right = d.left + m, d.bottom = P.bottom);
					return g
				}
				return g = n.Tk(a, b, c | n.jD, d, f,
					e)
			},
			Wr: null,
			Tk: function (a, b, c, d, e, f) {
				0 == b.length && (b = " ");
				var g, l;
				g = f.ye();
				l = f.li ? f.measureText(" ") : a.measureText(" ").width;
				var p = d.right - d.left,
					H = 0,
					h = 0,
					m, k, q, r = 0,
					v = 0,
					z;
				null == n.Wr && (n.Wr = Array(100));
				var t, A, R = !1,
					C = !1,
					w = d.top;
				k = g;
				0 != (k & 1) && k++;
				var u = w;
				do {
					k = H;
					q = z = 0;
					v += g;
					do {
						n.Wr[z] = q;
						z += 1;
						m = h;
						h = -1;
						k < b.length && (h = b.indexOf(" ", k)); - 1 == h && (h = b.length);
						if (h < k) {
							q -= l;
							break
						}
						A = b.substring(k, h);
						t = f.li ? f.measureText(A) : a.measureText(A).width;
						if (q + t > p) {
							z--;
							if (0 < z) {
								q -= l;
								h = m;
								break
							}
							for (m = k; m < h; m++) {
								t = f.li ? f.measureText(b.substring(m,
									m + 1)) : a.measureText(b.substring(m, m + 1)).width;
								if (q + t >= p) {
									m--;
									if (0 < m) {
										r = Math.max(q, r);
										0 == (c & n.fs) && (q = 0 != (c & n.cj) ? d.left + (d.right - d.left) / 2 - q / 2 : 0 != (c & n.gs) ? d.right - q : d.left, A = b.substring(k, m), e.push(new T(q, w, A)));
										h = m - 1;
										C = R = !0;
										break
									}
									h = m < b.length ? b.indexOf(" ", m) : -1;
									R = !0;
									0 <= h && (C = !0);
									break
								}
								q += t
							}
						}
						if (R) break;
						q += t;
						if (q + l > p) break;
						q += l;
						k = h + 1
					} while (1);
					if (0 == C) {
						if (R) break;
						r = Math.max(q, r);
						if (0 == (c & n.fs))
							for (q = 0 != (c & n.cj) ? d.left + (d.right - d.left) / 2 - q / 2 : 0 != (c & n.gs) ? d.right - q : d.left, k = H, H = 0; H < z; H++) {
								h = -1;
								k < b.length &&
									(h = b.indexOf(" ", k)); - 1 == h && (h = b.length);
								if (h < k) break;
								A = b.substring(k, h);
								e.push(new T(q + n.Wr[H], w, A));
								k = h + 1
							}
					}
					C = R = !1;
					w += g;
					H = h + 1
				} while (H < b.length);
				d.right = d.left + r;
				d.bottom = u + v;
				return v
			},
			dh: function (a, b, c, d, e, f) {
				var g;
				if (e.li)
					for (f = 0; f < d.length; f++) g = d[f], e.fillText(a, g.text, b + g.x, c + g.y);
				else
					for (a.font = e.Qf(), a.fillStyle = n.ef(f), a.textAlign = "left", a.textBaseline = "top", f = 0; f < d.length; f++) g = d[f], a.fillText(g.text, b + g.x, c + g.y)
			},
			ki: function (a, b) {
				var c = a.toString();
				if (0 != (b & ba.Fw)) {
					var d = b & ba.Fw;
					if (c.length >
						d) c = c.substring(c.length - d);
					else
						for (; c.length < d;) c = "0" + c
				}
				return c
			},
			Ct: function (a, b) {
				var c;
				if (0 == (b & ba.$C)) c = a.toString();
				else {
					var d = Math.floor(((b & ba.YC) >> ba.ZC) + 1);
					c = -1;
					0 != (b & ba.bD) ? c = (b & ba.WC) >> ba.XC : 0 != a && -1 < a && 1 > a && (c = d);
					c = 0 > c ? a.toPrecision(d) : a.toFixed(c);
					var e, f, g;
					if (0 != (b & ba.aD))
						for (f = e = 0; f < c.length; f++) g = c.charAt(f), "." != g && "+" != g && "-" != g && "e" != g && "E" != g && e++;
					f = !1;
					"-" == c.charAt(0) && (f = !0, c = c.substr(1));
					for (; e < d;) c = "0" + c, e++;
					f && (c = "-" + c)
				}
				return c
			},
			$O: function (a, b) {
				for (var c = a, d = b, e = d.indexOf("\\"); 0 <=
					e;) c.substring(0, e) == d.substring(0, e) && (d = d.substring(e + 1), c = c.substring(e + 1)), e = d.indexOf("\\", e + 1);
				return c
			}
		},
		od = !1,
		Wa = !1,
		eb = !1,
		fb = window.XMLHttpRequest ? new XMLHttpRequest : null;
	if (fb && fb.overrideMimeType) try {
		Wa = "string" === typeof (new XMLHttpRequest).responseType, 0 <= navigator.userAgent.toLowerCase().indexOf("safari") && (Wa = !1)
	} catch (a) { } else {
		var od = !0,
			gb = document.createElement("script");
		gb.type = "text/vbscript";
		gb.innerHTML = 'Function BinFileReaderImpl_IE_VBAjaxLoader(fileName)\n\r\n\t                Dim xhr\n\r\n\t                Set xhr = CreateObject("Microsoft.XMLHTTP")\n\r\n\t                xhr.Open "GET", fileName, False\n\r\n\t                xhr.setRequestHeader "Accept-Charset", "x-user-defined"\n\r\n\t                xhr.send\n\r\n\t                Dim byteArray()\n\r\n\t                if xhr.Status = 200 Then\n\r\n\t                    Dim byteString\n\r\n\t                    Dim i\n\r\n\t                    byteString=xhr.responseBody\n\r\n\t                    ReDim byteArray(LenB(byteString))\n\r\n\t                    For i = 1 To LenB(byteString)\n\r\n\t                        byteArray(i-1) = AscB(MidB(byteString, i, 1))\n\r\n\t                    Next\n\r\n\t                End If\n\r\n\t                BinFileReaderImpl_IE_VBAjaxLoader=byteArray\n\r\n\t            End Function';
		document.head.appendChild(gb)
	}
	if (Wa) {
		var pd = new FileReader;
		try {
			pd.readAsBinaryString && (eb = !0)
		} catch (a) { }
		pd = null
	}
	fb = null;
	W.prototype = {
		za: function () {
			return this.$c.charCodeAt(this.ba++) & 255
		},
		getFile: function (a, b, c) {
			this.pt = b;
			
			if (od) 
				try
				{
					var d = BinFileReaderImpl_IE_VBAjaxLoader(a).toArray(),	e, f = d.length;
					
					f > c && (f = c);
					
					for (e = 0; e < f; e++)
						this.$c += String.fromCharCode(d[e]);
						
					this.end = this.$c.length;
					this.pt()
				}
				catch (p)
				{ 
				
				} 
			else 
			{
				var g = new XMLHttpRequest;
				g.open("GET", a, !0);
				var l = this;

				Wa ? (g.responseType = "blob", g.onload = 
					function() 
					{						
						if (4 == g.readyState && 200 == g.status)
						{
							var a = new FileReader;
							
							a.onloadend = function () 
							{								
								if (eb)
								{
									l.$c += a.result;
								}
								else 
								{
									var b = new Uint8Array(a.result), c;

									for (c = 0; c < b.length; c++)
										l.$c += String.fromCharCode(b[c])
								}

								l.end = l.$c.length;
								l.pt()
							};

							eb ? a.readAsBinaryString(g.response) : a.readAsArrayBuffer(g.response)
						}
					}) : (g.overrideMimeType("text/plain; charset=x-user-defined"), g.onload = 
						function() 
						{							
							4 == g.readyState && 200 == g.status && (l.$c += g.responseText, l.end = l.$c.length, l.pt())
						});

				g.send(null)
			}
		},
		xI: function (a) {
			this.$c = a;
			this.end = a.length;
			
			var b = this;

			this.za = function () {
				return b.$c.charCodeAt(b.ba++) & 255
			}
		},
		Nf: function (a, b) {
			var c = new W;
			c.$c = this.$c;
			c.offset = a;
			c.ba = a;
			c.end = a + b;
			c.Xe = this.Xe;
			return c
		},
		SB: function (a) {
			this.Xe = a
		},
		la: function (a) {
			this.ba += a
		},
		hq: function () {
			return this.ba >= this.end
		},
		jb: function () {
			return this.za()
		},
		m: function () {
			var a;
			a = this.za();
			return 256 * this.za() + a
		},
		P: function () {
			var a;
			a = this.za();
			a = 256 * this.za() + a;
			return 32768 > a ? a : a - 65536
		},
		Iv: function () {
			var a;
			a = this.za();
			return 256 * this.za() + a
		},
		o: function () {
			var a, b, c;
			a = this.za();
			b = this.za();
			c = this.za();
			a = 16777216 * this.za() + 65536 * c + 256 * b + a;
			return 2147483647 >= a ? a : a - 4294967296
		},
		Sc: function () {
			var a, b, c;
			a = this.za();
			b = this.za();
			c = this.za();
			this.za();
			return 65536 * a + 256 * b + c
		},
		oB: function () {
			var a, b, c;
			a = this.za();
			b = this.za();
			c = this.za();
			a = 16777216 * this.za() + 65536 * c + 256 * b + a;
			2147483648 < a && (a -= 4294967295);
			return a / 65536
		},
		VH: function () {
			var a, b, c, d, e, f, g;
			a = this.za();
			b = this.za();
			c = this.za();
			d = this.za();
			e = this.za();
			f = this.za();
			g = this.za();
			a = 72057594037927936 * this.za() + 281474976710656 * g + 1099511627776 *
				f + 4294967296 * e + 16777216 * d + 65536 * c + 256 * b + a;
			0x7fffffffffffffff < a && (a -= 1.8446744073709552E19);
			return a / 4294967296
		},
		Sb: function (a) {
			var b = "";
			if (this.Xe)
				if (1 > arguments.length) {
					if (this.hq()) return b;
					c = this.ba;
					for (b = this.Iv(); b && !this.hq();) b = this.Iv();
					b = (this.ba - c - 2) / 2;
					this.ba = c;
					b = this.Sb(b);
					this.za();
					this.za()
				} else {
					b = "";
					c = this.ba;
					for (e = 0; e < a; e++) {
						d = this.Iv();
						if (0 == d) break;
						b += String.fromCharCode(d)
					}
					this.ba = c + 2 * a
				}
			else if (1 > arguments.length) {
				if (this.hq()) return b;
				for (var c = this.ba, b = this.za(); b && !this.hq();) b =
					this.za();
				b = this.ba - c - 1;
				this.ba = c;
				b = this.Sb(b);
				this.za()
			} else {
				for (var d, c = this.ba, e = 0; e < a; ++e) {
					d = this.za();
					if (0 == d) break;
					b += String.fromCharCode(d)
				}
				this.ba = c + a
			}
			return b
		},
		seek: function (a) {
			a >= this.end && (a = this.end);
			this.ba = a
		},
		GI: function (a) {
			var b = this.ba,
				b = b - a;
			0 > b && (b = 0);
			this.ba = b
		},
		ZH: function (a) {
			var b, c = a.length;
			for (b = 0; b < c; b++) a[b] = this.za()
		},
		pB: function (a) {
			var b = [],
				c;
			for (c = 0; c < a; c++) b[c] = this.za();
			return b
		}
	};
	L.prototype = {
		add: function (a) {
			this.Rd.push(a)
		},
		get: function (a) {
			return a < this.Rd.length ? this.Rd[a] :
				null
		},
		put: function (a, b) {
			this.Rd[a] = b
		},
		set: function (a, b) {
			a < this.Rd.length && (this.Rd[a] = b)
		},
		qB: function (a) {
			a < this.Rd.length && this.Rd.splice(a, 1)
		},
		indexOf: function (a) {
			return this.Rd.indexOf(a)
		},
		contains: function (a) {
			return 0 <= this.Rd.indexOf(a)
		},
		rB: function (a) {
			a = this.Rd.indexOf(a);
			0 <= a && this.Rd.splice(a, 1)
		},
		size: function () {
			return this.Rd.length
		},
		clear: function () {
			this.Rd.length = 0
		}
	};
	Z.prototype = {
		load: function (a) {
			this.left = a.o();
			this.top = a.o();
			this.right = a.o();
			this.bottom = a.o()
		},
		hy: function (a) {
			this.left =
				a.left;
			this.right = a.right;
			this.top = a.top;
			this.bottom = a.bottom
		}
	};
	Ya.prototype = {
		Qf: function () {
			var a;
			a = this.ne ? "italic " : "normal ";
			var b = 100 * Math.floor(this.oe / 100),
				b = Math.max(b, 100),
				b = Math.min(b, 900);
			a = a + (b + " ") + (this.Ob + "px ");
			return a += this.me
		},
		ye: function () {
			return this.Ob + Math.ceil(this.Ob / 8)
		},
		S: function () {
			this.me = "Arial";
			this.Ob = 13;
			this.oe = 400;
			this.ne = 0
		}
	};
	Na.separator = "{@24}";
	Na.hL = 1;
	Na.gL = 2;
	Na.prototype = {};
	ia.prototype = {
		measureText: function (a, b) {
			b = this.app.St(b);
			if (b.li) return b.measureText(a);
			this.Bd.font = b.Qf();
			return this.Bd.measureText(a).width
		},
		Gr: function (a, b, c, d, e) {
			if (a == this.$G && b == this.WG && c == this.ZG && d == this.XG && e == this.VG) return this.YG;
			var f = this.Bd;
			f.clearRect(0, 0, this.width, this.height);
			c || (c = new Z(0, 0, this.width, this.height));
			var g = [];
			d = this.app.St(d);
			var l = n.Fy(f, a, b, c, d, g);
			if (0 != l) {
				var p = 0;
				0 != (b & n.yo) ? p = this.height - l : 0 != (b & n.Oh) && (p = this.height / 2 - l / 2);
				n.dh(f, 0, p, g, d, e, 0, 0)
			}
			this.$G = a;
			this.WG = b;
			this.ZG = c;
			this.XG = d;
			this.VG = e;
			return this.YG = l
		},
		Vz: function (a) {
			a ? (this.Bd.fillStyle =
				n.ef(a), this.Bd.fillRect(0, 0, this.width, this.height)) : this.Bd.clearRect(0, 0, this.width, this.height)
		},
		Aq: function (a, b, c, d, e, f, g) {
			var l = [];
			c || (c = new Z(0, 0, this.width, this.height));
			e = this.app.St(e);
			a = n.Fy(this.Bd, a, b, c, e, l);
			if (0 != a) switch (c = 0, 0 != (b & n.yo) ? c = this.height - a : 0 != (b & n.Oh) && (c = this.height / 2 - a / 2), f) {
				case 1:
					n.dh(this.Bd, 1, c + 1, l, e, g, 0, 0);
					n.dh(this.Bd, 0, c, l, e, d, 0, 0);
					break;
				case 2:
					n.dh(this.Bd, 1, c, l, e, g, 0, 0);
					n.dh(this.Bd, 1, c + 2, l, e, g, 0, 0);
					n.dh(this.Bd, 0, c + 1, l, e, g, 0, 0);
					n.dh(this.Bd, 2, c + 1, l, e, g, 0, 0);
					n.dh(this.Bd, 1, c + 1, l, e, d, 0, 0);
					break;
				case 0:
					n.dh(this.Bd, 0, c, l, e, d, 0, 0)
			}
		},
		resize: function (a, b) {
			if (a != this.width || b != this.height) this.width = a, this.height = b, this.canvas.width = a, this.canvas.height = b
		},
		mb: function (a, b, c, d, e) {
			a.Ii(this.canvas, b, c, this.width, this.height, d, e)
		}
	};
	Da.DF = [{
		zb: navigator.userAgent,
		Mc: "Chrome",
		Zb: "Chrome"
	}, {
		zb: navigator.userAgent,
		Mc: "OmniWeb",
		Xl: "OmniWeb/",
		Zb: "OmniWeb"
	}, {
		zb: navigator.vendor,
		Mc: "Apple",
		Zb: "Safari",
		Xl: "Version"
	}, {
		RH: window.opera,
		Zb: "Opera",
		Xl: "Version"
	}, {
		zb: navigator.vendor,
		Mc: "iCab",
		Zb: "iCab"
	}, {
		zb: navigator.vendor,
		Mc: "KDE",
		Zb: "Konqueror"
	}, {
		zb: navigator.userAgent,
		Mc: "Firefox",
		Zb: "Firefox"
	}, {
		zb: navigator.vendor,
		Mc: "Camino",
		Zb: "Camino"
	}, {
		zb: navigator.userAgent,
		Mc: "Netscape",
		Zb: "Netscape"
	}, {
		zb: navigator.userAgent,
		Mc: "MSIE",
		Zb: "Explorer",
		Xl: "MSIE"
	}, {
		zb: navigator.userAgent,
		Mc: "Gecko",
		Zb: "Mozilla",
		Xl: "rv"
	}, {
		zb: navigator.userAgent,
		Mc: "Mozilla",
		Zb: "Netscape",
		Xl: "Mozilla"
	}];
	Da.FF = [{
		zb: navigator.platform,
		Mc: "Win",
		Zb: "Windows"
	}, {
		zb: navigator.platform,
		Mc: "Mac",
		Zb: "MacOS"
	}, {
		zb: navigator.userAgent,
		Mc: "iPhone",
		Zb: "iOS"
	}, {
		zb: navigator.userAgent,
		Mc: "iPod",
		Zb: "iOS"
	}, {
		zb: navigator.userAgent,
		Mc: "iPad",
		Zb: "iOS"
	}, {
		zb: navigator.userAgent,
		Mc: "Android",
		Zb: "Android"
	}, {
		zb: navigator.platform,
		Mc: "Windows Phone",
		Zb: "Windows Phone"
	}, {
		zb: navigator.platform,
		Mc: "Linux",
		Zb: "Linux"
	}];
	Da.prototype = {
		IB: function (a) {
			for (var b = 0; b < a.length; b++) {
				var c = a[b].zb,
					d = a[b].RH;
				this.sC = a[b].Xl || a[b].Zb;
				if (c) {
					if (-1 != c.indexOf(a[b].Mc)) return a[b].Zb
				} else if (d) return a[b].Zb
			}
		},
		JB: function (a) {
			var b = a.indexOf(this.sC);
			if (-1 != b) return parseFloat(a.substring(b +
				this.sC.length + 1))
		}
	};
	n.EO = function (a, b, c, d) {
		var e = document.createElement("canvas");
		e.width = b.width;
		e.height = b.height;
		var f = e.getContext("2d");
		0 == b.fb ? f.drawImage(b.eb, 0, 0) : f.drawImage(a.$.tb[b.fb], b.ed, b.fd, b.width, b.height, 0, 0, b.width, b.height);
		var g = f.getImageData(0, 0, b.width, b.height),
			l = d >> 16 & 255,
			p = d >> 8 & 255;
		d &= 255;
		var h = c >> 16 & 255,
			m = c >> 8 & 255;
		c &= 255;
		var n, k, q;
		for (q = 0; q < b.height; q++)
			for (k = 0; k < b.width; k++) n = 4 * (q * b.width + k), g.data[n] == h && g.data[n + 1] == m && g.data[n + 2] == c && (g.data[n] = l, g.data[n + 1] = p, g.data[n +
				2] = d);
		f.putImageData(g, 0, 0);
		f = new fa;
		f.app = a;
		f.width = b.width;
		f.height = b.height;
		f.wa = b.wa;
		f.va = b.va;
		f.Eg = b.Eg;
		f.Fg = b.Fg;
		f.Ga = 0;
		f.eb = e;
		f.$f = b.$f;
		f.el = b.el;
		f.mh = b.mh;
		return f
	};
	va.xD = 1;
	va.OK = 2;
	va.wD = 4;
	va.tD = 8;
	va.prototype = {
		oF: function (a) {
			if (this.ZF != a.me || this.pd != a.Ob) return !1;
			var b = 0 != (this.Xy & va.xD),
				c = 0 != a.ne;
			if (b != c) return !1;
			b = 0 != (this.Xy & va.wD);
			c = 400 < a.oe;
			return b != c ? !1 : !0
		},
		ye: function () {
			return this.height + this.FG
		},
		measureText: function (a) {
			var b = 0,
				c = a.length,
				d, e;
			for (d = 0; d < c; d++) e = this.st.indexOf(a.charAt(d)),
				b = 0 <= e ? b + (this.rt[e] + this.du) : b + this.width;
			return b
		},
		fillText: function (a, b, c, d) {
			var e = b.length,
				f, g, l, p, h = this.Wf;
			if (0 == (this.Ua & va.tD))
				for (f = 0; f < e; f++) p = this.st.indexOf(b.charAt(f)), 0 <= p ? (l = Math.floor(p / this.Fq), g = p - l * this.Fq, l *= this.height + 1, g *= this.width + 1, 0 == h.fb ? a.drawImage(h.eb, g, l, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height) : a.drawImage(h.app.$.tb[h.fb], g + h.ed, l + h.fd, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height), c += this.rt[p] + this.du) :
					(a.fillStyle = n.ef(this.color), a.fillRect(c, d, this.width, this.height), c += this.width);
			else
				for (c += this.measureText(b), f = e - 1; 0 <= f; f--) p = this.st.indexOf(b.charAt(f)), 0 <= p ? (c -= this.rt[p] + this.du, l = p / this.Fq, g = p - l * this.Fq, l *= this.height + 1, g *= this.width + 1, 0 == h.fb ? a.drawImage(h.eb, g, l, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height) : a.drawImage(h.app.$.tb[h.fb], g + h.ed, l + h.fd, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height)) : (c -= this.width, a.fillStyle = n.ef(this.color),
					a.fillRect(c, d, this.width, this.height))
		}
	};
	U.$l = 1;
	U.nJ = 17408;
	U.mJ = 17664;
	U.gJ = 17920;
	U.eJ = 18176;
	U.fJ = 18432;
	U.hJ = 18688;
	U.pJ = 18944;
	U.kJ = 19200;
	U.iJ = 19456;
	U.jJ = 19712;
	U.qJ = 19968;
	U.rJ = 20224;
	U.lJ = 20480;
	U.oJ = 20736;
	U.vC = 983039;
	U.create = function (a) {
		var b = !1,
			c = !1,
			d = !1,
			e = !1,
			f = !1,
			g = !1,
			l = !1,
			p = !1,
			h = !1,
			m = a.file.ba,
			n = a.file.m(),
			k, q = a.file.o();
		switch (q) {
			case 65535:
				k = new ea;
				break;
			case 131071:
				k = new ea;
				break;
			case 262143:
				k = new ACT_SETVARG;
				break;
			case 327679:
				k = new ACT_SUBVARG;
				break;
			case 393215:
				k = new ACT_ADDVARG;
				break;
			case 458751:
				k =
					new ACT_GRPACTIVATE;
				break;
			case 524287:
				k = new ACT_GRPDEACTIVATE;
				break;
			case 983039:
				k = new ACT_STARTLOOP;
				break;
			case 1048575:
				k = new ACT_STOPLOOP;
				break;
			case 1114111:
				k = new ACT_SETLOOPINDEX;
				break;
			case 1179647:
				k = new ACT_RANDOMIZE;
				break;
			case 1310719:
				k = new ACT_SETGLOBALSTRING;
				break;
			case 1572863:
				k = new ea;
				break;
			case 1638399:
				k = new ea;
				break;
			case 1835007:
				k = new ACT_SETVARGCONST;
				b = !0;
				break;
			case 1900543:
				k = new ACT_SETVARG;
				break;
			case 1966079:
				k = new ACT_SETVARGCONST;
				b = !0;
				break;
			case 2031615:
				k = new ACT_SETVARG;
				break;
			case 2097151:
				k =
					new ACT_ADDVARGCONST;
				c = !0;
				break;
			case 2162687:
				k = new ACT_ADDVARG;
				break;
			case 2228223:
				k = new ACT_ADDVARGCONST;
				c = !0;
				break;
			case 2293759:
				k = new ACT_ADDVARG;
				break;
			case 2359295:
				k = new ACT_SUBVARGCONST;
				d = !0;
				break;
			case 2424831:
				k = new ACT_SUBVARG;
				break;
			case 2490367:
				k = new ACT_SUBVARGCONST;
				d = !0;
				break;
			case 2555903:
				k = new ACT_SUBVARG;
				break;
			case 65534:
				k = new mb;
				break;
			case 131070:
				k = new nb;
				break;
			case 327678:
				k = new ob;
				break;
			case 458750:
				k = new pb;
				break;
			case 524286:
				k = new ACT_PAUSESAMPLE;
				break;
			case 589822:
				k = new ACT_RESUMESAMPLE;
				break;
			case 786430:
				k = new ACT_PLAYCHANNEL;
				break;
			case 851966:
				k = new ACT_PLAYLOOPCHANNEL;
				break;
			case 917502:
				k = new ACT_PAUSECHANNEL;
				break;
			case 983038:
				k = new ACT_RESUMECHANNEL;
				break;
			case 1048574:
				k = new ACT_STOPCHANNEL;
				break;
			case 1114110:
				k = new ACT_SETCHANNELPOS;
				break;
			case 1179646:
				k = new ACT_SETCHANNELVOL;
				break;
			case 1245182:
				k = new ea;
				break;
			case 1310718:
				k = new ACT_SETSAMPLEPOS;
				break;
			case 1376254:
				k = new ACT_SETSAMPLEMAINVOL;
				break;
			case 1441790:
				k = new ACT_SETSAMPLEVOL;
				break;
			case 1507326:
				k = new ea;
				break;
			case 1572862:
				k =
					new ea;
				break;
			case 1638398:
				k = new ACT_PAUSEALLCHANNELS;
				break;
			case 1703934:
				k = new ACT_RESUMEALLCHANNELS;
				break;
			case 2031614:
				k = new ACT_LOCKCHANNEL;
				break;
			case 2097150:
				k = new ACT_UNLOCKCHANNEL;
				break;
			case 2162686:
				k = new ACT_SETCHANNELFREQ;
				break;
			case 2228222:
				k = new ACT_SETSAMPLEFREQ;
				break;
			case 65533:
				k = new qb;
				break;
			case 131069:
				k = new ACT_PREVLEVEL;
				break;
			case 196605:
				k = new rb;
				break;
			case 262141:
				k = new ACT_PAUSEKEY;
				break;
			case 327677:
				k = new ACT_ENDGAME;
				break;
			case 393213:
				k = new sb;
				break;
			case 458749:
				k = new ACT_RESTARTLEVEL;
				break;
			case 524285:
				k = new ACT_CDISPLAY;
				break;
			case 589821:
				k = new ACT_CDISPLAYX;
				break;
			case 655357:
				k = new ACT_CDISPLAYY;
				break;
			case 983037:
				k = new ACT_FULLSCREENMODE;
				break;
			case 1048573:
				k = new ACT_WINDOWEDMODE;
				break;
			case 1114109:
				k = new ACT_SETFRAMERATE;
				break;
			case 1179645:
				k = new ACT_PAUSEKEY;
				break;
			case 1245181:
				k = new ACT_PAUSEANYKEY;
				break;
			case 1310717:
				k = new ACT_SETVSYNCON;
				break;
			case 1376253:
				k = new ACT_SETVSYNCOFF;
				break;
			case 1441789:
				k = new ACT_SETVIRTUALWIDTH;
				break;
			case 1507325:
				k = new ACT_SETVIRTUALHEIGHT;
				break;
			case 1572861:
				k =
					new ACT_SETFRAMEBDKCOLOR;
				break;
			case 1638397:
				k = new ACT_DELCREATEDBKDAT;
				break;
			case 1703933:
				k = new ACT_DELALLCREATEDBKD;
				break;
			case 1769469:
				k = new ACT_SETFRAMEWIDTH;
				break;
			case 1835005:
				k = new ACT_SETFRAMEHEIGHT;
				break;
			case 2097149:
				k = new ACT_PLAYDEMO;
				break;
			case 2162685:
				k = new ea;
				break;
			case 2228221:
				k = new ea;
				break;
			case 2293757:
				k = new ea;
				break;
			case 2359293:
				k = new ea;
				break;
			case 2424829:
				k = new ea;
				break;
			case 65532:
				k = new ACT_SETTIMER;
				break;
			case 131068:
				k = new ACT_EVENTAFTER;
				break;
			case 196604:
				k = new ACT_NEVENTSAFTER;
				break;
			case 65530:
				k = new ACT_HIDECURSOR;
				break;
			case 131066:
				k = new ACT_SHOWCURSOR;
				break;
			case 65529:
				k = new ACT_SETSCORE;
				break;
			case 131065:
				k = new ACT_SETLIVES;
				break;
			case 196601:
				k = new ACT_NOINPUT;
				break;
			case 262137:
				k = new ACT_RESTINPUT;
				break;
			case 327673:
				k = new tb;
				break;
			case 393209:
				k = new ACT_ADDLIVES;
				break;
			case 458745:
				k = new ub;
				break;
			case 524281:
				k = new vb;
				break;
			case 589817:
				k = new ACT_SETINPUT;
				break;
			case 655353:
				k = new ACT_SETINPUTKEY;
				break;
			case 720889:
				k = new ACT_SETPLAYERNAME;
				break;
			case 65531:
				k = new ACT_CREATE;
				break;
			case 131067:
				k =
					new ACT_CREATEBYNAME;
				break;
			case 5242883:
				k = new ACT_STRDESTROY;
				break;
			case 5308419:
				k = new ACT_STRDISPLAY;
				break;
			case 5373955:
				k = new ACT_STRDISPLAYDURING;
				break;
			case 5439491:
				k = new ACT_STRSETCOLOUR;
				break;
			case 5505027:
				k = new ACT_STRSET;
				break;
			case 5570563:
				k = new ACT_STRPREV;
				break;
			case 5636099:
				k = new ACT_STRNEXT;
				break;
			case 5701635:
				k = new ACT_STRDISPLAYSTRING;
				break;
			case 5767171:
				k = new ACT_STRSETSTRING;
				break;
			case 5242882:
				k = new ACT_SPRPASTE;
				break;
			case 5308418:
				k = new ACT_SPRFRONT;
				break;
			case 5373954:
				k = new ACT_SPRBACK;
				break;
			case 5439490:
				k = new ACT_SPRADDBKD;
				break;
			case 5505026:
				k = new ACT_SPRREPLACECOLOR;
				break;
			case 5570562:
				k = new ACT_SPRSETSCALE;
				break;
			case 5636098:
				k = new ACT_SPRSETSCALEX;
				break;
			case 5701634:
				k = new ACT_SPRSETSCALEY;
				break;
			case 5767170:
				k = new ACT_SPRSETANGLE;
				break;
			case 5242887:
				k = new ACT_CSETVALUE;
				break;
			case 5308423:
				k = new ACT_CADDVALUE;
				break;
			case 5373959:
				k = new ACT_CSUBVALUE;
				break;
			case 5439495:
				k = new ACT_CSETMIN;
				break;
			case 5505031:
				k = new ACT_CSETMAX;
				break;
			case 5570567:
				k = new ACT_CSETCOLOR1;
				break;
			case 5636103:
				k = new ACT_CSETCOLOR2;
				break;
			case 5242884:
				k = new ACT_QASK;
				break;
			case 5242889:
				k = new ACT_CCARESTARTAPP;
				break;
			case 5308425:
				k = new ACT_CCARESTARTFRAME;
				break;
			case 5373961:
				k = new ACT_CCANEXTFRAME;
				break;
			case 5439497:
				k = new ACT_CCAPREVIOUSFRAME;
				break;
			case 5505033:
				k = new ACT_CCAENDAPP;
				break;
			case 5636105:
				k = new ACT_CCAJUMPFRAME;
				break;
			case 5701641:
				k = new ACT_CCASETGLOBALVALUE;
				break;
			case 5767177:
				k = new ACT_CCASHOW;
				break;
			case 5832713:
				k = new ACT_CCAHIDE;
				break;
			case 5898249:
				k = new ACT_CCASETGLOBALSTRING;
				break;
			case 5963785:
				k = new ACT_CCAPAUSEAPP;
				break;
			case 6029321:
				k = new ACT_CCARESUMEAPP;
				break;
			case 6094857:
				k = new ACT_CCASETWIDTH;
				break;
			case 6160393:
				k = new ACT_CCASETHEIGHT;
				break;
			default:
				switch (q & 4294901760) {
					case 65536:
						k = new wb;
						break;
					case 131072:
						k = new ACT_EXTSETX;
						break;
					case 196608:
						k = new xb;
						break;
					case 262144:
						k = new ACT_EXTSTOP;
						break;
					case 327680:
						k = new ACT_EXTSTART;
						break;
					case 393216:
						k = new ACT_EXTSPEED;
						break;
					case 458752:
						k = new ACT_EXTMAXSPEED;
						break;
					case 524288:
						k = new ACT_EXTWRAP;
						break;
					case 589824:
						k = new ACT_EXTBOUNCE;
						break;
					case 655360:
						k = new ACT_EXTREVERSE;
						break;
					case 720896:
						k = new ACT_EXTNEXTMOVE;
						break;
					case 786432:
						k = new ACT_EXTPREVMOVE;
						break;
					case 851968:
						k = new ACT_EXTSELMOVE;
						break;
					case 917504:
						k = new yb;
						break;
					case 983040:
						k = new ACT_EXTSTOPANIM;
						break;
					case 1048576:
						k = new ACT_EXTSTARTANIM;
						break;
					case 1114112:
						k = new ACT_EXTFORCEANIM;
						break;
					case 1179648:
						k = new ACT_EXTFORCEDIR;
						break;
					case 1245184:
						k = new ACT_EXTFORCESPEED;
						break;
					case 1310720:
						k = new ACT_EXTRESTANIM;
						break;
					case 1376256:
						k = new ACT_EXTRESTDIR;
						break;
					case 1441792:
						k = new ACT_EXTRESTSPEED;
						break;
					case 1507328:
						k = new ACT_EXTSETDIR;
						break;
					case 1572864:
						k = new zb;
						break;
					case 1638400:
						k = new ACT_EXTSHUFFLE;
						break;
					case 1703936:
						k = new ACT_EXTHIDE;
						break;
					case 1769472:
						k = new ACT_EXTSHOW;
						break;
					case 1835008:
						k = new ACT_EXTDISPLAYDURING;
						break;
					case 1900544:
						k = new Ab;
						break;
					case 1966080:
						k = new Bb;
						break;
					case 2031616:
						k = new ACT_EXTSETVAR;
						e = !0;
						break;
					case 2097152:
						k = new ACT_EXTADDVAR;
						f = !0;
						break;
					case 2162688:
						k = new ACT_EXTSUBVAR;
						g = !0;
						break;
					case 2228224:
						k = new ACT_EXTDISPATCHVAR;
						break;
					case 2293760:
						k = new ACT_EXTSETFLAG;
						l = !0;
						break;
					case 2359296:
						k = new ACT_EXTCLRFLAG;
						p = !0;
						break;
					case 2424832:
						k = new ACT_EXTCHGFLAG;
						h = !0;
						break;
					case 2490368:
						k = new ACT_EXTINKEFFECT;
						break;
					case 2555904:
						k = new ACT_EXTSETSEMITRANSPARENCY;
						break;
					case 2621440:
						k = new ACT_EXTFORCEFRAME;
						break;
					case 2686976:
						k = new ACT_EXTRESTFRAME;
						break;
					case 2752512:
						k = new ACT_EXTSETACCELERATION;
						break;
					case 2818048:
						k = new ACT_EXTSETDECELERATION;
						break;
					case 2883584:
						k = new ACT_EXTSETROTATINGSPEED;
						break;
					case 2949120:
						k = new ACT_EXTSETDIRECTIONS;
						break;
					case 3014656:
						k = new ACT_EXTBRANCHNODE;
						break;
					case 3080192:
						k = new ACT_EXTSETGRAVITY;
						break;
					case 3145728:
						k = new ACT_EXTGOTONODE;
						break;
					case 3211264:
						k = new ACT_EXTSETVARSTRING;
						break;
					case 3276800:
						k = new ACT_EXTSETFONTNAME;
						break;
					case 3342336:
						k = new ACT_EXTSETFONTSIZE;
						break;
					case 3407872:
						k = new ACT_EXTSETBOLD;
						break;
					case 3473408:
						k = new ACT_EXTSETITALIC;
						break;
					case 3538944:
						k = new ACT_EXTSETUNDERLINE;
						break;
					case 3604480:
						k = new ea;
						break;
					case 3670016:
						k = new ACT_EXTSETTEXTCOLOR;
						break;
					case 3735552:
						k = new ACT_EXTSPRFRONT;
						break;
					case 3801088:
						k = new ACT_EXTSPRBACK;
						break;
					case 3866624:
						k = new ACT_EXTMOVEBEFORE;
						break;
					case 3932160:
						k = new ACT_EXTMOVEAFTER;
						break;
					case 3997696:
						k = new ACT_EXTMOVETOLAYER;
						break;
					case 4063232:
						k = new ea;
						break;
					case 4128768:
						k = new ACT_EXTSETEFFECT;
						break;
					case 4194304:
						k = new ea;
						break;
					case 4259840:
						k = new ACT_EXTSETALPHACOEF;
						break;
					case 4325376:
						k = new ACT_EXTSETRGBCOEF;
						break;
					case 4390912:
						k = new ea;
						break;
					case 4456448:
						k = new ACT_EXTSETFRICTION;
						break;
					case 4521984:
						k = new ACT_EXTSETELASTICITY;
						break;
					case 4587520:
						k = new ACT_EXTAPPLYIMPULSE;
						break;
					case 4653056:
						k = new ACT_EXTAPPLYANGULARIMPULSE;
						break;
					case 4718592:
						k =
							new ACT_EXTAPPLYFORCE;
						break;
					case 4784128:
						k = new ACT_EXTAPPLYTORQUE;
						break;
					case 4849664:
						k = new ACT_EXTSETLINEARVELOCITY;
						break;
					case 4915200:
						k = new ACT_EXTSETANGULARVELOCITY;
						break;
					case 4980736:
						k = new ACT_EXTFOREACH;
						break;
					case 5046272:
						k = new ACT_EXTFOREACH2;
						break;
					case 5111808:
						k = new ACT_EXTSTOPFORCE;
						break;
					case 5177344:
						k = new ACT_EXTSTOPTORQUE;
						break;
					default:
						k = new Yc
				}
		}
		if (null != k) {
			k.ra = q;
			k.Pc = a.file.P();
			k.Gb = a.file.P();
			k.cb = a.file.jb();
			k.cf = a.file.jb();
			k.nd = a.file.jb();
			k.Cm = a.file.jb();
			if (0 < k.nd)
				for (k.L = Array(k.nd),
					q = 0; q < k.nd; q++) k.L[q] = Qa.create(a);
			if (b || c || d) c = k.L[0], k.Ru = c.value, c = k.L[1], k.value = c.Aa[0].value;
			if (e || f || g) b = null, c = k.L[0], 53 != c.code && (d = c.value, c = k.L[1], 0 <= d && 2 == c.Aa.length && (0 >= c.Aa[1].code || 1310720 <= c.Aa[1].code) && (65535 == c.Aa[0].code || 1572863 == c.Aa[0].code) && (e ? (b = new ACT_EXTSETVARCONST, b.Ru = d, b.value = c.Aa[0].value) : f ? (b = new ACT_EXTADDVARCONST, b.Ru = d, b.value = c.Aa[0].value) : g && (b = new ACT_EXTSUBVARCONST, b.Ru = d, b.value = c.Aa[0].value)), null != b && (b.ra = k.ra, b.Pc = k.Pc, b.Gb = k.Gb, b.cb = k.cb, b.cf = k.cf,
				b.nd = k.nd, b.Cm = k.Cm, b.L = k.L, k = b));
			if (l || p || h) b = null, e = k.L[0], 2 == e.Aa.length && (0 >= e.Aa[1].code || 1310720 <= e.Aa[1].code) && 65535 == e.Aa[0].code && (l ? (b = new ACT_EXTSETFLAGCONST, b.N = 1 << e.Aa[0].value) : p ? (b = new ACT_EXTCLRFLAGCONST, b.N = 1 << e.Aa[0].value) : h && (b = new ACT_EXTCHGFLAGCONST, b.N = 1 << e.Aa[0].value)), null != b && (b.ra = k.ra, b.Pc = k.Pc, b.Gb = k.Gb, b.cb = k.cb, b.cf = k.cf, b.nd = k.nd, b.Cm = k.Cm, b.L = k.L, k = b)
		}
		a.file.seek(m + n);
		return k
	};
	lb.KK = 1;
	ea.prototype = {
		fc: function () { }
	};
	mb.prototype = {
		fc: function (a) {
			var b = this.L[0];
			a.h.cc.play(b.fo,
				1, -1, 0 != (b.cC & Ka.GE))
		}
	};
	nb.prototype = {
		fc: function (a) {
			a.h.cc.Jr()
		}
	};
	ob.prototype = {
		fc: function (a) {
			var b = this.L[0],
				c = a.gh(this.L[1]);
			a.h.cc.play(b.fo, c, -1, 0 != (b.cC & Ka.GE))
		}
	};
	pb.prototype = {
		fc: function (a) {
			a.h.cc.NI(this.L[0].fo)
		}
	};
	qb.prototype = {
		fc: function (a) {
			a.gb = h.Jo;
			a.h.Ti = !0
		}
	};
	rb.prototype = {
		fc: function (a) {
			var b;
			if (26 == this.L[0].code) {
				if (b = this.L[0].value, -1 == a.h.JD(b)) return
			} else {
				b = a.gh(this.L[0]) - 1;
				if (0 > b || 4096 <= b) return;
				a.h.wN && b++;
				b |= 32768
			}
			a.gb = h.Io;
			a.Ol = b;
			a.h.Ti = !0
		}
	};
	sb.prototype = {
		fc: function (a) {
			a.gb =
				h.ys
		}
	};
	tb.prototype = {
		fc: function (a) {
			var b = a.gh(this.L[0]),
				c = this.Pc,
				d = a.h.Om();
			d[c] += b;
			a.nw(c, q.Yo, d[c])
		}
	};
	ub.prototype = {
		fc: function (a) {
			var b = a.gh(this.L[0]),
				c = this.Pc,
				d = a.h.Om();
			d[c] -= b;
			0 > d[c] && (d[c] = 0);
			a.nw(c, q.Yo, d[c])
		}
	};
	vb.prototype = {
		fc: function (a) {
			var b = a.gh(this.L[0]),
				c = this.Pc,
				b = a.h.Nm()[c] - b;
			a.WE(c, b)
		}
	};
	wb.prototype = {
		fc: function (a) {
			var b = a.v.Dj(this);
			if (null != b) {
				var c = new Ja;
				this.L[0].Nn(a, 1, c) && (h.Xb(b, c.x), h.Lb(b, c.y), -1 != c.dir && (c = c.dir &= 31, a.Bb(b) != c && (b.b.Fa = c, b.b.K = !0, b.w.aa.te(c), 2 ==
					b.Da && b.ha.Lk(0))))
			}
		}
	};
	xb.prototype = {
		fc: function (a) {
			var b = a.v.Dj(this);
			null != b && (a = a.gh(this.L[0]), h.Lb(b, Math.floor(a)))
		}
	};
	yb.prototype = {
		fc: function (a) {
			var b = a.v.Dj(this);
			if (null != b) {
				var c = new Ja;
				if (this.L[0].Nn(a, 0, c)) {
					var d = c.x,
						e = c.y,
						d = d - b.u,
						e = e - b.s,
						c = a.vs(b);
					null == c ? (d = h.rz(d, e), d &= 31, a.Bb(b) != d && (b.b.Fa = d, b.b.K = !0, b.w.aa.te(d))) : (a = 180 * Math.atan2(-e, d) / 3.141592653589, 0 > a && (a = 360 + a), c.Ar(a))
				}
			}
		}
	};
	zb.prototype = {
		fc: function (a) {
			var b = a.v.Dj(this);
			null != b && (3 == b.Da ? 0 != (b.GB & h.es) ? (b.F.tn(), b.F.U &=
				~w.Vg, b.W |= E.Lg) : (b.W |= E.Kg, a.bf(b.Cb)) : 0 == (b.W & E.Kg) && (b.W |= E.Kg, 0 != (b.ja & z.Vh) || 0 != (b.ja & z.Wh) ? a.Dz(b) : (b.Tm = !1, a.bf(b.Cb))))
		}
	};
	Ab.prototype = {
		fc: function (a) {
			var b = a.v.Dj(this);
			if (null != b) {
				var c = this.L[0],
					d = new Ja;
				c.Nn(a, 17, d) && b.aC(c, d.x, d.y, d.dir)
			}
		}
	};
	Bb.prototype = {
		fc: function (a) {
			var b = a.v.Dj(this);
			if (null != b) {
				var c = new Ja;
				if (this.L[0].Nn(a, 17, c)) {
					var d = new Ja;
					this.L[1].Nn(a, 0, d) && b.aC(this.L[0], c.x, c.y, h.rz(d.x - c.x, d.y - c.y))
				}
			}
		}
	};
	V.ex = 6;
	V.QC = -983041;
	V.RC = -1507329;
	V.SC = -1572865;
	V.create = function (a) {
		var b =
			a.file.ba,
			c = a.file.m(),
			d, e = a.file.o();
		switch (e) {
			case -2555905:
				d = new CND_RUNNINGAS;
				break;
			case -2490369:
				d = new CND_COMPAREGCONST_GT;
				break;
			case -2424833:
				d = new CND_COMPAREGCONST_GE;
				break;
			case -2359297:
				d = new CND_COMPAREGCONST_LT;
				break;
			case -2293761:
				d = new CND_COMPAREGCONST_LE;
				break;
			case -2228225:
				d = new CND_COMPAREGCONST_NE;
				break;
			case -2162689:
				d = new CND_COMPAREGCONST_EQ;
				break;
			case -2097153:
				d = new CND_COMPAREGCONST_GT;
				break;
			case -2031617:
				d = new CND_COMPAREGCONST_GE;
				break;
			case -1966081:
				d = new CND_COMPAREGCONST_LT;
				break;
			case -1900545:
				d = new CND_COMPAREGCONST_LE;
				break;
			case -1835009:
				d = new CND_COMPAREGCONST_NE;
				break;
			case -1769473:
				d = new CND_COMPAREGCONST_EQ;
				break;
			case -1703937:
				d = new ta;
				break;
			case -1638401:
				d = new CND_CHANCE;
				break;
			case -1572865:
				d = new ta;
				break;
			case -1507329:
				d = new ta;
				break;
			case -1441793:
				d = new CND_GROUPSTART;
				break;
			case -1245185:
				d = new CND_COMPAREGSTRING;
				break;
			case -983041:
				d = new CND_ONLOOP;
				break;
			case -720897:
				d = new CND_GROUPACTIVATED;
				break;
			case -655361:
				d = new ta;
				break;
			case -589825:
				d = new ta;
				break;
			case -524289:
				d =
					new ta;
				break;
			case -458753:
				d = new CND_COMPAREG;
				break;
			case -393217:
				d = new CND_NOTALWAYS;
				break;
			case -327681:
				d = new CND_ONCE;
				break;
			case -262145:
				d = new CND_REPEAT;
				break;
			case -196609:
				d = new CND_NOMORE;
				break;
			case -131073:
				d = new CND_COMPARE;
				break;
			case -65537:
				d = new ta;
				break;
			case -1:
				d = new Za;
				break;
			case -524290:
				d = new CND_SPCHANNELPAUSED;
				break;
			case -458754:
				d = new CND_NOSPCHANNELPLAYING;
				break;
			case -327682:
				d = new CND_SPSAMPAUSED;
				break;
			case -131074:
				d = new CND_NOSAMPLAYING;
				break;
			case -2:
				d = new Cb;
				break;
			case -458755:
				d = new CND_ENDOFPAUSE;
				break;
			case -393219:
				d = new CND_ISVSYNCON;
				break;
			case -327683:
				d = new CND_ISLADDER;
				break;
			case -262147:
				d = new CND_ISOBSTACLE;
				break;
			case -196611:
				d = new CND_QUITAPPLICATION;
				break;
			case -131075:
				d = new ta;
				break;
			case -65539:
				d = new Za;
				break;
			case -3:
				d = new Db;
				break;
			case -458756:
				d = new Hb;
				break;
			case -393220:
				d = new CND_TIMEREQUALS;
				break;
			case -327684:
				d = new CND_ONEVENT;
				break;
			case -262148:
				d = new CND_TIMEOUT;
				break;
			case -196612:
				d = new CND_EVERY;
				break;
			case -131076:
				d = new CND_TIMER;
				break;
			case -65540:
				d = new CND_TIMERINF;
				break;
			case -4:
				d =
					new CND_TIMERSUP;
				break;
			case -720902:
				d = new CND_ONMOUSEWHEELDOWN;
				break;
			case -655366:
				d = new CND_ONMOUSEWHEELUP;
				break;
			case -589830:
				d = new CND_MOUSEON;
				break;
			case -524294:
				d = new CND_ANYKEY;
				break;
			case -458758:
				d = new CND_MKEYDEPRESSED;
				break;
			case -393222:
				d = new CND_MCLICKONOBJECT;
				break;
			case -327686:
				d = new CND_MCLICKINZONE;
				break;
			case -262150:
				d = new Eb;
				break;
			case -196614:
				d = new CND_MONOBJECT;
				break;
			case -131078:
				d = new CND_MINZONE;
				break;
			case -65542:
				d = new CND_KBKEYDEPRESSED;
				break;
			case -6:
				d = new CND_KBPRESSKEY;
				break;
			case -327687:
				d =
					new CND_JOYPUSHED;
				break;
			case -262151:
				d = new Fb;
				break;
			case -196615:
				d = new CND_JOYPRESSED;
				break;
			case -131079:
				d = new CND_LIVE;
				break;
			case -65543:
				d = new Gb;
				break;
			case -7:
				d = new CND_PLAYERPLAYING;
				break;
			case -1441797:
				d = new CND_CHOOSEALLINLINE;
				break;
			case -1376261:
				d = new CND_CHOOSEFLAGRESET;
				break;
			case -1310725:
				d = new CND_CHOOSEFLAGSET;
				break;
			case -1245189:
				d = new CND_CHOOSEVALUE;
				break;
			case -1179653:
				d = new CND_PICKFROMID;
				break;
			case -1114117:
				d = new CND_CHOOSEALLINZONE;
				break;
			case -1048581:
				d = new CND_CHOOSEALL;
				break;
			case -983045:
				d =
					new CND_CHOOSEZONE;
				break;
			case -917509:
				d = new CND_NUMOFALLOBJECT;
				break;
			case -851973:
				d = new CND_NUMOFALLZONE;
				break;
			case -786437:
				d = new CND_NOMOREALLZONE;
				break;
			case -720901:
				d = new CND_CHOOSEFLAGRESET_OLD;
				break;
			case -655365:
				d = new CND_CHOOSEFLAGSET_OLD;
				break;
			case -458757:
				d = new CND_CHOOSEVALUE_OLD;
				break;
			case -393221:
				d = new CND_PICKFROMID_OLD;
				break;
			case -327685:
				d = new CND_CHOOSEALLINZONE_OLD;
				break;
			case -262149:
				d = new CND_CHOOSEALL_OLD;
				break;
			case -196613:
				d = new CND_CHOOSEZONE_OLD;
				break;
			case -131077:
				d = new CND_NUMOFALLOBJECT_OLD;
				break;
			case -65541:
				d = new CND_NUMOFALLZONE_OLD;
				break;
			case -5:
				d = new CND_NOMOREALLZONE_OLD;
				break;
			case -5308409:
				d = new CND_CCOUNTER;
				break;
			case -5439484:
				d = new CND_QEQUAL;
				break;
			case -5373948:
				d = new CND_QFALSE;
				break;
			case -5308412:
				d = new CND_QEXACT;
				break;
			case -5505015:
				d = new CND_CCAISPAUSED;
				break;
			case -5439479:
				d = new CND_CCAISVISIBLE;
				break;
			case -5373943:
				d = new CND_CCAAPPFINISHED;
				break;
			case -5308407:
				d = new CND_CCAFRAMECHANGED;
				break;
			default:
				switch (e & 4294901760) {
					case -2818048:
						d = new CND_EXTCMPVARCONST;
						break;
					case -2752512:
						d =
							new CND_EXTCMPVARCONST;
						break;
					case -2686976:
						d = new CND_EXTONLOOP;
						break;
					case -2621440:
						d = new CND_EXTISSTRIKEOUT;
						break;
					case -2555904:
						d = new CND_EXTISUNDERLINE;
						break;
					case -2490368:
						d = new CND_EXTISITALIC;
						break;
					case -2424832:
						d = new CND_EXTISBOLD;
						break;
					case -2359296:
						d = new CND_EXTCMPVARSTRING;
						break;
					case -2293760:
						d = new CND_EXTPATHNODENAME;
						break;
					case -2228224:
						d = new CND_EXTCHOOSE;
						break;
					case -2162688:
						d = new CND_EXTNOMOREOBJECT;
						break;
					case -2097152:
						d = new CND_EXTNUMOFOBJECT;
						break;
					case -2031616:
						d = new CND_EXTNOMOREZONE;
						break;
					case -1966080:
						d = new CND_EXTNUMBERZONE;
						break;
					case -1900544:
						d = new CND_EXTSHOWN;
						break;
					case -1835008:
						d = new CND_EXTHIDDEN;
						break;
					case -1769472:
						d = new CND_EXTCMPVAR;
						break;
					case -1703936:
						d = new CND_EXTCMPVARFIXED;
						break;
					case -1638400:
						d = new CND_EXTFLAGSET;
						break;
					case -1572864:
						d = new CND_EXTFLAGRESET;
						break;
					case -1507328:
						d = new CND_EXTISCOLBACK;
						break;
					case -1441792:
						d = new CND_EXTNEARBORDERS;
						break;
					case -1376256:
						d = new CND_EXTENDPATH;
						break;
					case -1310720:
						d = new CND_EXTPATHNODE;
						break;
					case -1245184:
						d = new CND_EXTCMPACC;
						break;
					case -1179648:
						d = new CND_EXTCMPDEC;
						break;
					case -1114112:
						d = new Ib;
						break;
					case -1048576:
						d = new CND_EXTCMPY;
						break;
					case -983040:
						d = new CND_EXTCMPSPEED;
						break;
					case -917504:
						d = new Jb;
						break;
					case -851968:
						d = new CND_EXTCOLBACK;
						break;
					case -786432:
						d = new CND_EXTOUTPLAYFIELD;
						break;
					case -720896:
						d = new CND_EXTINPLAYFIELD;
						break;
					case -655360:
						d = new CND_EXTISOUT;
						break;
					case -589824:
						d = new CND_EXTISIN;
						break;
					case -524288:
						d = new CND_EXTFACING;
						break;
					case -458752:
						d = new CND_EXTSTOPPED;
						break;
					case -393216:
						d = new CND_EXTBOUNCING;
						break;
					case -327680:
						d = new CND_EXTREVERSED;
						break;
					case -262144:
						d = new CND_EXTISCOLLIDING;
						break;
					case -196608:
						d = new CND_EXTANIMPLAYING;
						break;
					case -131072:
						d = new CND_EXTANIMENDOF;
						break;
					case -65536:
						d = new CND_EXTCMPFRAME;
						break;
					default:
						d = new Zc
				}
		}
		if (null != d && (d.ra = e, d.Pc = a.file.P(), d.Gb = a.file.P(), d.cb = a.file.jb(), d.cf = a.file.jb(), d.nd = a.file.jb(), d.Cm = a.file.jb(), d.Oy = a.file.m(), 0 < d.nd))
			for (d.L = Array(d.nd), e = 0; e < d.nd; e++) d.L[e] = Qa.create(a);
		a.file.seek(b + c);
		return d
	};
	V.vH = function (a) {
		return a.cf & Q.uk ? !1 : !0
	};
	V.IA =
		function (a) {
			return a.cf & Q.uk ? !0 : !1
		};
	V.AO = function (a, b) {
		return a.cf & Q.uk ? !b : b
	};
	V.EN = function (a) {
		var b = a.v.pg,
			c = b.yj;
		a = b.yj = a.Ub;
		if (a == c) return !1;
		a--;
		return a == c ? !1 : !0
	};
	V.dy = function (a, b) {
		var c, d = b.Zp;
		if (null == d) d = new L, b.Zp = d;
		else
			for (c = 0; c < d.size(); c++)
				if (d.get(c) == a) return !1;
		d.add(a);
		d = b.yz;
		if (null == d) return !0;
		for (c = 0; c < d.size(); c++)
			if (d.get(c) == a) return !1;
		return !0
	};
	V.BN = function (a, b) {
		return 0 == b ? !1 : b == a.Ub || b == a.Ub - 1 ? !0 : !1
	};
	ta.prototype = {
		ie: function () {
			return !1
		},
		Oc: function () {
			return !1
		}
	};
	Za.prototype = {
		ie: function () {
			return !0
		},
		Oc: function () {
			return !0
		}
	};
	V.prototype = {
		Ly: function (a, b) {
			var c = a.v.Vk(this.Gb),
				d = a.v.zj,
				e = this.L[0],
				f;
			f = e.Aa[0];
			if (f.code != ca.Lw && f.code != ca.rD || 0 != e.Aa[1].code)
				for (; null != c;) f = a.gh(e), 0 == b.My(c, f, e.Ap) && (d-- , a.v.fh()), c = a.v.Wk();
			else
				for (f = f.value; null != c;) 0 == b.My(c, f, e.Ap) && (d-- , a.v.fh()), c = a.v.Wk();
			return 0 != d ? !0 : !1
		},
		GG: function (a) {
			if (a.v.Hh) return a.v.Vk(this.Gb), a.v.Vk(this.L[0].$b), !1;
			var b = !1;
			0 != (this.cf & Q.uk) && (b = !0);
			var c = a.v.Vk(this.Gb);
			if (null == c) return V.IA(this);
			var d = a.v.zj,
				e = this.L[0].vh;
			0 <= e ? (a.eu[0] = e, a.eu[1] = this.L[0].$b, e = a.eu) : e = a.v.bc[this.L[0].$b & 32767].La;
			var f, g = new L,
				l, p;
			do {
				f = a.ll(c, c.b.Ia, c.b.ab, c.b.vb, c.b.wb, c.u, c.s, e);
				if (null == f) 0 == b && (d-- , a.v.fh());
				else {
					c = !1;
					for (l = 0; l < f.size(); l++) p = f.get(l), 0 == (p.W & E.Kg) && (g.add(p), c = !0);
					1 == b ? 1 == c && (d-- , a.v.fh()) : 0 == c && (d-- , a.v.fh())
				}
				c = a.v.Wk()
			} while (null != c);
			if (0 == d) return !1;
			c = a.v.Vk(this.L[0].$b);
			if (null == c) return !1;
			d = a.v.zj;
			if (0 == b) {
				do {
					for (l = 0; l < g.size() && (p = g.get(l), c != p); l++);
					l == g.size() && (d-- , a.v.fh());
					c = a.v.Wk()
				} while (null != c);
				return 0 != d ? !0 : !1
			}
			do {
				for (l = 0; l < g.size(); l++)
					if (p = g.get(l), c == p) {
						d--;
						a.v.fh();
						break
					} c = a.v.Wk()
			} while (null != c);
			return 0 != d ? !0 : !1
		}
	};
	Cb.prototype = {
		ie: function (a) {
			return this.Oc(a)
		},
		Oc: function (a) {
			return a.h.cc.NG(this.L[0].fo) ? V.IA(this) : V.vH(this)
		}
	};
	Db.prototype = {
		ie: function (a) {
			return 2 < a.Ub ? !1 : !0
		},
		Oc: function (a) {
			return 2 < a.Ub ? !1 : !0
		}
	};
	Eb.prototype = {
		ie: function (a) {
			return this.L[0].value != a.v.Kc ? !1 : !0
		},
		Oc: function (a) {
			return this.L[0].value == a.v.Mv ? !0 : !1
		}
	};
	Fb.prototype = {
		ie: function (a) {
			return this.Oc(a)
		},
		Oc: function (a) {
			return 0 != a.h.Nm()[this.Pc] ? !1 : !0
		}
	};
	Gb.prototype = {
		ie: function (a) {
			return this.Oc(a)
		},
		Oc: function (a) {
			var b = a.h.Om();
			a = a.pG(this.L[0]);
			return h.qF(b[this.Pc], a, this.L[0].Ap)
		}
	};
	Hb.prototype = {
		ie: function (a) {
			return this.Oc(a)
		},
		Oc: function (a) {
			var b = this.L[1];
			if (0 == b.Sr) a = 22 == this.L[0].code ? a.gh(this.L[0]) : this.L[0].Ld, b.value = a, b.Sr = -1;
			else if (b.value -= a.Wn, 0 >= b.value) return a = 22 == this.L[0].code ? a.gh(this.L[0]) : this.L[0].Ld, b.value += a, !0;
			return !1
		}
	};
	Ib.prototype = n.extend(new V, {
		ie: function (a) {
			return this.Ly(a,
				this)
		},
		Oc: function (a) {
			return this.Ly(a, this)
		},
		My: function (a, b, c) {
			return h.pF(a.u, b, c)
		}
	});
	Jb.prototype = n.extend(new V, {
		ie: function (a, b) {
			for (var c = a.G[a.v.xB], d = this.Pc, e = this.L[0], f = e.vh; ;) {
				if (d == b.Ib) {
					if (f == c.Ib) break;
					if (0 <= f) return !1;
					if (this.Ok(a, e.$b, c.Ib)) break;
					return !1
				}
				if (f == b.Ib) {
					if (d == c.Ib) break;
					if (0 <= d) return !1;
					if (this.Ok(a, this.Gb, c.Ib)) break;
					return !1
				}
				if (0 > d) {
					if (0 > f) {
						if (this.Ok(a, this.Gb, b.Ib)) {
							if (this.Ok(a, e.$b, c.Ib)) break;
							if (0 == this.Ok(a, e.$b, b.Ib)) return !1
						}
						if (this.Ok(a, this.Gb, c.Ib)) break
					} else if (f ==
						c.Ib) break;
					return !1
				}
				if (0 <= f || d != c.Ib) return !1;
				break
			}
			d = c.Um << 16 | this.Oy & 65535;
			if (0 == V.dy(d, b)) {
				if (0 == (a.v.pg.Na & G.Eo)) return !1;
				a.v.jr = !0
			}
			d = b.Um << 16 | this.Oy & 65535;
			if (0 == V.dy(d, c)) {
				if (0 == (a.v.pg.Na & G.Eo)) return !1;
				a.v.jr = !0
			}
			a.v.Em(b);
			a.v.Em(c);
			c.w.aa.Kd == a.Tc ? b.w.aa.Kd = a.Tc : b.w.aa.Kd == a.Tc && (c.w.aa.Kd = a.Tc);
			return !0
		},
		Oc: function (a) {
			return this.GG(a)
		},
		Ok: function (a, b, c) {
			if (-1 == b) return !1;
			a = a.v.bc[b & 32767];
			for (b = 0; b < a.La.length; b += 2)
				if (a.La[b] == c) return !0;
			return !1
		}
	});
	ca.GK = 8960;
	ca.IK = 9216;
	ca.FK = 9472;
	ca.JK = 9728;
	ca.DK = 9984;
	ca.HK = 10752;
	ca.EK = 11008;
	ca.ps = 262143;
	ca.Lw = 65535;
	ca.rD = 1572863;
	ca.create = function (a) {
		var b = a.ba,
			c, d = a.o();
		switch (d) {
			case 0:
				c = new ua;
				break;
			case 131072:
				c = new EXP_PLUS;
				break;
			case 262144:
				c = new EXP_MINUS;
				break;
			case 393216:
				c = new EXP_MULT;
				break;
			case 524288:
				c = new EXP_DIV;
				break;
			case 655360:
				c = new EXP_MOD;
				break;
			case 786432:
				c = new EXP_POW;
				break;
			case 917504:
				c = new EXP_AND;
				break;
			case 1048576:
				c = new EXP_OR;
				break;
			case 1179648:
				c = new EXP_XOR;
				break;
			case 65535:
				c = new ab;
				break;
			case 131071:
				c = new EXP_RANDOM;
				break;
			case 196607:
				c = new EXP_VARGLO;
				break;
			case 262143:
				c = new Pb;
				break;
			case 327679:
				c = new EXP_STR;
				break;
			case 393215:
				c = new EXP_VAL;
				break;
			case 458751:
			case 524287:
			case 589823:
			case 655359:
				c = new $a;
				break;
			case 720895:
				c = new EXP_SIN;
				break;
			case 786431:
				c = new EXP_COS;
				break;
			case 851967:
				c = new EXP_TAN;
				break;
			case 917503:
				c = new EXP_SQR;
				break;
			case 983039:
				c = new EXP_LOG;
				break;
			case 1048575:
				c = new EXP_LN;
				break;
			case 1114111:
				c = new EXP_HEX;
				break;
			case 1179647:
				c = new EXP_BIN;
				break;
			case 1245183:
				c = new EXP_EXP;
				break;
			case 1310719:
				c =
					new EXP_LEFT;
				break;
			case 1376255:
				c = new EXP_RIGHT;
				break;
			case 1441791:
				c = new EXP_MID;
				break;
			case 1507327:
				c = new EXP_LEN;
				break;
			case 1572863:
				c = new Kb;
				break;
			case 1638399:
				c = new Ob;
				break;
			case 1900543:
				c = new EXP_INT;
				break;
			case 1966079:
				c = new EXP_ABS;
				break;
			case 2031615:
				c = new EXP_CEIL;
				break;
			case 2097151:
				c = new EXP_FLOOR;
				break;
			case 2162687:
				c = new EXP_ACOS;
				break;
			case 2228223:
				c = new EXP_ASIN;
				break;
			case 2293759:
				c = new EXP_ATAN;
				break;
			case 2359295:
				c = new EXP_NOT;
				break;
			case 2686975:
				c = new EXP_MIN;
				break;
			case 2752511:
				c = new EXP_MAX;
				break;
			case 2818047:
				c = new EXP_GETRGB;
				break;
			case 2883583:
				c = new EXP_GETRED;
				break;
			case 2949119:
				c = new EXP_GETGREEN;
				break;
			case 3014655:
				c = new EXP_GETBLUE;
				break;
			case 3080191:
				c = new EXP_LOOPINDEX;
				break;
			case 3145727:
				c = new EXP_NEWLINE;
				break;
			case 3211263:
				c = new EXP_ROUND;
				break;
			case 3276799:
				c = new EXP_STRINGGLO;
				break;
			case 3342335:
				c = new Nb;
				break;
			case 3407871:
				c = new EXP_LOWER;
				break;
			case 3473407:
				c = new EXP_UPPER;
				break;
			case 3538943:
				c = new EXP_FIND;
				break;
			case 3604479:
				c = new EXP_REVERSEFIND;
				break;
			case 3866623:
				c = new EXP_FLOATTOSTRING;
				break;
			case 3932159:
				c = new EXP_ATAN2;
				break;
			case 3997695:
				c = new ua;
				break;
			case 4063231:
				c = new $a;
				break;
			case 4128767:
				c = new EXP_DISTANCE;
				break;
			case 4194303:
				c = new EXP_ANGLE;
				break;
			case 4259839:
				c = new EXP_RANGE;
				break;
			case 4325375:
				c = new EXP_RANDOMRANGE;
				break;
			case 4456447:
				c = new EXP_RUNTIMENAME;
				break;
			case -1:
				c = new EXP_PARENTH1;
				break;
			case -65537:
				c = new EXP_PARENTH2;
				break;
			case -131073:
				c = new EXP_VIRGULE;
				break;
			case 65534:
				c = new EXP_GETSAMPLEMAINVOL;
				break;
			case 131070:
				c = new EXP_GETSAMPLEVOL;
				break;
			case 196606:
				c = new EXP_GETCHANNELVOL;
				break;
			case 262142:
				c = new ua;
				break;
			case 327678:
				c = new EXP_GETSAMPLEPAN;
				break;
			case 393214:
				c = new EXP_GETCHANNELPAN;
				break;
			case 458750:
				c = new EXP_GETSAMPLEPOS;
				break;
			case 524286:
				c = new EXP_GETCHANNELPOS;
				break;
			case 589822:
				c = new EXP_GETSAMPLEDUR;
				break;
			case 655358:
				c = new EXP_GETCHANNELDUR;
				break;
			case 720894:
				c = new EXP_GETSAMPLEFREQ;
				break;
			case 786430:
				c = new EXP_GETCHANNELFREQ;
				break;
			case 65533:
				c = new EXP_GAMLEVEL;
				break;
			case 131069:
				c = new EXP_GAMNPLAYER;
				break;
			case 196605:
				c = new EXP_PLAYXLEFT;
				break;
			case 262141:
				c = new EXP_PLAYXRIGHT;
				break;
			case 327677:
				c = new EXP_PLAYYTOP;
				break;
			case 393213:
				c = new EXP_PLAYYBOTTOM;
				break;
			case 458749:
				c = new EXP_PLAYWIDTH;
				break;
			case 524285:
				c = new EXP_PLAYHEIGHT;
				break;
			case 589821:
				c = new EXP_GAMLEVELNEW;
				break;
			case 655357:
				c = new EXP_GETCOLLISIONMASK;
				break;
			case 720893:
				c = new EXP_FRAMERATE;
				break;
			case 786429:
				c = new EXP_GETVIRTUALWIDTH;
				break;
			case 851965:
				c = new EXP_GETVIRTUALHEIGHT;
				break;
			case 917501:
				c = new EXP_GETFRAMEBKDCOLOR;
				break;
			case 983037:
				c = new ua;
				break;
			case 1048573:
				c = new ua;
				break;
			case 1114109:
				c = new EXP_FRAMEALPHACOEF;
				break;
			case 1179645:
				c = new EXP_FRAMERGBCOEF;
				break;
			case 1245181:
				c = new ua;
				break;
			case 65532:
				c = new EXP_TIMVALUE;
				break;
			case 131068:
				c = new EXP_TIMCENT;
				break;
			case 196604:
				c = new EXP_TIMSECONDS;
				break;
			case 262140:
				c = new EXP_TIMHOURS;
				break;
			case 327676:
				c = new EXP_TIMMINITS;
				break;
			case 393212:
				c = new EXP_EVENTAFTER;
				break;
			case 65530:
				c = new EXP_XMOUSE;
				break;
			case 131066:
				c = new Sb;
				break;
			case 196602:
				c = new EXP_MOUSEWHEELDELTA;
				break;
			case 65529:
				c = new EXP_PLASCORE;
				break;
			case 131065:
				c = new EXP_PLALIVES;
				break;
			case 196601:
				c = new EXP_GETINPUT;
				break;
			case 262137:
				c = new EXP_GETINPUTKEY;
				break;
			case 327673:
				c = new EXP_GETPLAYERNAME;
				break;
			case 65531:
				c = new EXP_CRENUMBERALL;
				break;
			case 5242883:
				c = new EXP_STRNUMBER;
				break;
			case 5308419:
				c = new EXP_STRGETCURRENT;
				break;
			case 5373955:
				c = new EXP_STRGETNUMBER;
				break;
			case 5439491:
				c = new EXP_STRGETNUMERIC;
				break;
			case 5505027:
				c = new EXP_STRGETNPARA;
				break;
			case 5242882:
				c = new EXP_GETRGBAT;
				break;
			case 5308418:
				c = new EXP_GETSCALEX;
				break;
			case 5373954:
				c = new EXP_GETSCALEY;
				break;
			case 5439490:
				c = new EXP_GETANGLE;
				break;
			case 5242887:
				c =
					new EXP_CVALUE;
				break;
			case 5308423:
				c = new EXP_CGETMIN;
				break;
			case 5373959:
				c = new EXP_CGETMAX;
				break;
			case 5439495:
				c = new EXP_CGETCOLOR1;
				break;
			case 5505031:
				c = new EXP_CGETCOLOR2;
				break;
			case 5242889:
				c = new EXP_CCAGETFRAMENUMBER;
				break;
			case 5308425:
				c = new EXP_CCAGETGLOBALVALUE;
				break;
			case 5373961:
				c = new EXP_CCAGETGLOBALSTRING;
				break;
			default:
				switch (d & 4294901760) {
					case 65536:
						c = new EXP_EXTYSPR;
						break;
					case 131072:
						c = new EXP_EXTISPR;
						break;
					case 196608:
						c = new EXP_EXTSPEED;
						break;
					case 262144:
						c = new EXP_EXTACC;
						break;
					case 327680:
						c =
							new EXP_EXTDEC;
						break;
					case 393216:
						c = new EXP_EXTDIR;
						break;
					case 458752:
						c = new EXP_EXTXLEFT;
						break;
					case 524288:
						c = new EXP_EXTXRIGHT;
						break;
					case 589824:
						c = new EXP_EXTYTOP;
						break;
					case 655360:
						c = new EXP_EXTYBOTTOM;
						break;
					case 720896:
						c = new EXP_EXTXSPR;
						break;
					case 786432:
						c = new EXP_EXTIDENTIFIER;
						break;
					case 851968:
						c = new EXP_EXTFLAG;
						break;
					case 917504:
						c = new EXP_EXTNANI;
						break;
					case 983040:
						c = new EXP_EXTNOBJECTS;
						break;
					case 1048576:
						c = new Lb;
						break;
					case 1114112:
						c = new EXP_EXTGETSEMITRANSPARENCY;
						break;
					case 1179648:
						c = new EXP_EXTNMOVE;
						break;
					case 1245184:
						c = new Mb;
						break;
					case 1310720:
						c = new EXP_EXTGETFONTNAME;
						break;
					case 1376256:
						c = new EXP_EXTGETFONTSIZE;
						break;
					case 1441792:
						c = new EXP_EXTGETFONTCOLOR;
						break;
					case 1507328:
						c = new EXP_EXTGETLAYER;
						break;
					case 1572864:
						c = new EXP_EXTGETGRAVITY;
						break;
					case 1638400:
						c = new EXP_EXTXAP;
						break;
					case 1703936:
						c = new EXP_EXTYAP;
						break;
					case 1769472:
						c = new EXP_EXTALPHACOEF;
						break;
					case 1835008:
						c = new EXP_EXTRGBCOEF;
						break;
					case 1900544:
						c = new ua;
						break;
					case 1966080:
						c = new Qb;
						break;
					case 2031616:
						c = new Rb;
						break;
					case 2097152:
						c =
							new EXP_EXTDISTANCE;
						break;
					case 2162688:
						c = new EXP_EXTANGLE;
						break;
					case 2228224:
						c = new EXP_EXTLOOPINDEX;
						break;
					case 2293760:
						c = new EXP_EXTGETFRICTION;
						break;
					case 2359296:
						c = new EXP_EXTGETRESTITUTION;
						break;
					case 2424832:
						c = new EXP_EXTGETDENSITY;
						break;
					case 2490368:
						c = new EXP_EXTGETVELOCITY;
						break;
					case 2555904:
						c = new EXP_EXTGETANGLE;
						break;
					case 2621440:
						c = new EXP_EXTWIDTH;
						break;
					case 2686976:
						c = new EXP_EXTHEIGHT;
						break;
					case 2752512:
						c = new EXP_EXTGETMASS;
						break;
					case 2818048:
						c = new EXP_EXTGETANGULARVELOCITY;
						break;
					case 2883584:
						c =
							new EXP_EXTGETNAME;
						break;
					default:
						c = new Xc
				}
		}
		if (null != c && (c.code = d, 0 != d)) {
			var e = a.m(),
				f;
			switch (d) {
				case 262143:
					c.zb = a.Sb();
					break;
				case 65535:
					c.value = a.o();
					break;
				case 1572863:
					c.value = a.VH();
					break;
				case 1638399:
					a.la(4);
					c.qh = a.m();
					break;
				case 3342335:
					a.la(4);
					c.qh = a.m();
					break;
				default:
					if (f = d & 65535, 0 != (f & 32768) && (f -= 65536), 2 <= f || f == q.ix) switch (c.vh = a.P(), c.$b = a.P(), d & 4294901760) {
						case 1048576:
							c.qh = a.m();
							break;
						case 1245184:
							c.qh = a.m()
					}
			}
			a.seek(b + e)
		}
		return c
	};
	$a.prototype = {
		evaluate: function (a) {
			a.Jc[a.kb] = ""
		}
	};
	ua.prototype = {
		evaluate: function (a) {
			a.Jc[a.kb] = 0
		}
	};
	ab.prototype = {
		evaluate: function (a) {
			a.Jc[a.kb] = this.value
		}
	};
	Kb.prototype = {
		evaluate: function (a) {
			a.Jc[a.kb] = this.value;
			a.Xk = !0
		}
	};
	Lb.prototype = {
		evaluate: function (a) {
			var b = a.v.Rm(this.$b);
			null == b ? a.Jc[a.kb] = 0 : (b = null != b.qb ? b.qb.oz(this.qh) : 0, n.gu(b) || (a.Xk = !0), a.Jc[a.kb] = b)
		}
	};
	Mb.prototype = {
		evaluate: function (a) {
			var b = a.v.Rm(this.$b);
			a.Jc[a.kb] = null == b ? "" : b.qb.mz(this.qh)
		}
	};
	Nb.prototype = {
		evaluate: function (a) {
			a.Jc[a.kb] = a.h.fz(this.qh)
		}
	};
	Ob.prototype = {
		evaluate: function (a) {
			a.Jc[a.kb] =
				a.h.gz(this.qh)
		}
	};
	Pb.prototype = {
		evaluate: function (a) {
			a.Jc[a.kb] = this.zb
		}
	};
	Qb.prototype = {
		evaluate: function (a) {
			var b = a.v.Rm(this.$b);
			a.xf++;
			var c = a.tz();
			null != b && null != b.qb && 0 <= c && c < b.qb.hd.length ? (b = b.qb.oz(c), n.gu(b) || (a.Xk = !0), a.Jc[a.kb] = b) : a.Jc[a.kb] = 0
		}
	};
	Rb.prototype = {
		evaluate: function (a) {
			var b = a.v.Rm(this.$b);
			a.xf++;
			var c = a.tz();
			a.Jc[a.kb] = null != b && null != b.qb && 0 <= c && c < Ba.sx ? b.qb.mz(c) : ""
		}
	};
	Sb.prototype = {
		evaluate: function (a) {
			a.Jc[a.kb] = a.mG()
		}
	};
	la.FusionVersion = "Clickteam Fusion HTML5 Exporter Build 291.2";
	m.Gf = 4;
	m.IM = 770;
	m.gm = 8;
	m.$K = 2;
	m.HD = 4;
	m.aL = 8;
	m.Pw = 16;
	m.ZK = 128;
	m.YK = 256;
	m.XK = 512;
	m.GD = 1024;
	m.WK = 2048;
	m.ED = 1;
	m.CD = 4;
	m.DD = 8;
	m.TK = 64;
	m.RK = 128;
	m.QK = 512;
	m.SK = 1024;
	m.FD = 4096;
	m.VK = 4096;
	m.UK = 8192;
	m.HM = 1;
	m.ip = 0;
	m.Ik = 1;
	m.Vs = 2;
	m.Gk = 3;
	m.hp = 4;
	m.gp = 5;
	m.Hk = 6;
	m.LM = 7;
	m.Ww = 203;
	m.ZM = 37;
	m.kN = 39;
	m.nN = 38;
	m.WM = 40;
	m.Te = 200;
	m.Xs = 201;
	m.lp = 202;
	m.aN = 96;
	m.bN = 97;
	m.cN = 98;
	m.dN = 99;
	m.eN = 100;
	m.fN = 101;
	m.gN = 102;
	m.hN = 103;
	m.iN = 104;
	m.jN = 105;
	m.lN = 83;
	m.VM = 68;
	m.XM = 69;
	m.oN = 88;
	m.YM = 123;
	m.mN = 16;
	m.UM = 17;
	m.$M = 18;
	m.mK = 0;
	m.hK = 1;
	m.iK = 2;
	m.jK = 3;
	m.kK = 4;
	m.lK = 5;
	m.uw = 4;
	m.JJ = 128;
	m.xC = 1;
	m.qw = 4;
	m.uJ = 65536;
	m.$r = 32768;
	m.AC = 1048576;
	m.zC = 8388608;
	m.Nh = 16777216;
	m.yC = 33554432;
	m.wC = 67108864;
	m.Xc = 10;
	m.Mw = 592880741;
	m.lj = 1770410840;
	m.gE = 300;
	la.loadApplication = bb;
	la.loadInfo = Tb;
	m.prototype = {
		iH: function () {
			var a = this.Zm.o();
			0 > this.eq && (this.eq = a);
			a != this.eq && (this.Zm.SB(!0), a = this.Zm.Sb(), window.open(this.cq + a, "_self"));
			this.Ym = 25
		},
		load: function () {
			this.yH = this.file.m();
			this.Ip = 1;
			this.pq = new W;
			var a = this.file.o();
			
			var parti = this.path.split('/');
			var filePath = parti[0] + '/' + this.Ip + parti[1];
			
			this.pq.getFile(filePath, bb, a)
		},
		dH: function () {
			this.Ip++;
			if (this.Ip > this.yH) 
			{
				var a = (new u(this.pq.$c, "content")).file("Application.ccj").Dx();
				this.pq = null;
				this.file = new W;
				this.file.xI(a);
				this.digest();
				this.ew()
			} 
			else 
			{				
				var parti = this.path.split('/');
				var filePath = parti[0] + '/' + this.Ip + parti[1];
				
				a = this.file.o(), this.pq.getFile(filePath, bb, a)
			}
		},
		digest: function () {
			this.file.seek(0);
			var a = this.file.pB(4);
			this.Xe = !1;
			80 == a[0] && 65 == a[1] && 77 == a[2] && 85 == a[3] && (this.Xe = !0);
			this.file.SB(this.Xe);
			this.file.la(8);
			this.file.la(4);
			this.Cc = new fc;
			this.$ = new ac(this);
			this.Ab = new bc(this);
			this.wg = new cc(this);
			this.cc = new X(this);
			for (var b, c = 0; 32639 != c;)
				if (c = this.file.m(), this.file.m(), b = this.file.o(), 0 != b) {
					a = this.file.ba + b;
					switch (c) {
						case 8739:
							this.cH();
							this.Ot = Array(this.df);
							this.Zy = Array(this.df);
							this.Yy = Array(this.df);
							this.Pt = Array(this.df);
							for (b = 0; b < this.df; b++) this.Pt[b] = null;
							break;
						case 8773:
							this.ya = this.file.o();
							this.file.o();
							this.file.o();
							this.file.m();
							this.file.m();
							break;
						case 8740:
							this.appName = this.file.Sb();
							break;
						case 8774:
							this.file.o();
							break;
						case 8750:
							this.file.Sb();
							break;
						case 8782:
							this.yu = this.file.Sb();
							break;
						case 8754:
							this.hH();
							break;
						case 8755:
							this.gH();
							break;
						case 8745:
						case 8767:
							this.Ht = new Ma(this);
							this.Cc.Ah(this.file);
							break;
						case 8747:
							this.eH(b);
							break;
						case 8778:
							this.Fn = this.file.o();
							this.aB = this.file.o();
							this.bB = this.file.o();
							this.dB = this.file.o();
							this.eB = this.file.o();
							this.cB = this.file.Sc();
							this.Vj = this.file.o(); - 1 != this.Vj && (this.file.GI(4), this.Vj = this.file.Sc());
							this.Uq = this.file.o();
							this.tu = !0;
							break;
						case 13107:
							this.Ot[this.Zk] =
								this.file.ba;
							for (var d = 0; 32639 != d;)
								if (d = this.file.m(), this.file.m(), b = this.file.o(), 0 != b) {
									var e = this.file.ba + b;
									switch (d) {
										case 13108:
											0 == this.Zk && (this.file.la(8), this.file.Sc());
											break;
										case 13110:
											this.Pt[this.Zk] = this.file.Sb();
											break;
										case 13129:
											this.Zy[this.Zk] = this.file.o();
											this.Yy[this.Zk] = this.file.o();
											break;
										case 13128:
											var f = b / 6;
											for (b = 0; b < f; b++) {
												var g = this.file.m();
												this.file.la(4);
												0 != g && (this.tb[g] = 1, this.Id = Math.max(this.Id, g + 1))
											}
									}
									this.file.seek(e)
								} this.Zk++;
							break;
						case 8760:
							d = this.file.o();
							this.Ft =
								Array(d);
							for (b = 0; b < d; b++) this.Ft[b] = new Ub(this), this.Ft[b].Ah();
							break;
						case 26214:
							this.$.Ah(this.file);
							break;
						case 26215:
							this.Ab.Ah(this.file);
							break;
						case 26216:
							this.wg.Ah(this.file)
					}
					this.file.seek(a)
				} this.context = new Aa(this.canvas);
			this.cc.CI(0 != (this.Lm & m.GD));
			null == this.sa && (this.Ud = new za)
		},
		MB: function (a, b, c, d, e, f) {
			this.sa = a;
			this.Sj = c;
			this.Ud = d;
			this.fw = b;
			this.mv = e;
			this.lv = f
		},
		EG: function () {
			this.Kf = !1;
			this.HB = 0;
			this.qI = this.rI = 1;
			this.tI = this.sI = this.ia / 2;
			this.vI = this.uI = this.na / 2
		},
		Hr: function () {
			window.setTimeout(Ta.bind(this),
				20)
		},
		ew: function () {
			(this.Xm = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent) || /iPod/i.test(navigator.userAgent)) && 0 < this.wg.nb && (this.ve = new Pa(this), this.ve.lH());
			this.Al();
			this.bd = Array(m.Ww);
			var a;
			for (a = 0; a < m.Ww; a++) this.bd[a] = !1;
			this.canvas.Dc = this;
			if (null == this.sa) {
				var b = this;
				window.addEventListener("keypress", function (a) {
					b.LF(a)
				}, !1);
				window.addEventListener("keydown", function (a) {
					b.Cy(a)
				}, !1);
				window.addEventListener("keyup", function (a) {
					b.Dy(a)
				}, !1);
				window.addEventListener("blur",
					function () {
						b.hasFocus = !1
					}, !1);
				window.addEventListener("focus", function () {
					b.hasFocus = !0
				}, !1);
				if (window !== window.top) try {
					var c = window.top;
					c.addEventListener("focus", function () {
						b.hasFocus = !0;
						b.canvas.focus()
					});
					c.addEventListener("blur", function () {
						b.hasFocus = !1
					})
				} catch (d) { }
				window.addEventListener("resize", function () {
					b.Al()
				}, !1);
				document.addEventListener("blur", function () {
					b.hasFocus = !1
				}, !1);
				document.addEventListener("focus", function () {
					b.hasFocus = !0
				}, !1);
				document.addEventListener("fullscreenchange", function () {
					b.fullScreen =
						document.ZN;
					b.Al()
				}, !1);
				document.addEventListener("mozfullscreenchange", function () {
					b.fullScreen = document.mozFullScreen;
					b.Al()
				}, !1);
				document.addEventListener("webkitfullscreenchange", function () {
					b.fullScreen = document.webkitIsFullScreen;
					b.Al()
				}, !1);
				window.PointerEvent ? ("undefined" !== typeof CRunMultipleTouch && (this.canvas.setAttribute("style", "-ms-touch-action: none;"), this.canvas.setAttribute("style", "touch-action: none;")), this.canvas.addEventListener("pointerdown", function (a) {
					switch (a.pointerType) {
						case "mouse":
						case "pen":
							b.Hu(a,
								!0);
							break;
						case "touch":
							b.Nr(a, !0)
					}
					a.preventDefault && a.preventDefault()
				}, !1), this.canvas.addEventListener("pointermove", function (a) {
					switch (a.pointerType) {
						case "mouse":
						case "pen":
							b.hn(a, b.canvas);
							break;
						case "touch":
							b.Mr(a, !0)
					}
					a.preventDefault && a.preventDefault()
				}, !1), this.canvas.addEventListener("pointerup", function (a) {
					switch (a.pointerType) {
						case "mouse":
						case "pen":
							b.Iu(a);
							break;
						case "touch":
							b.nk(a, !0)
					}
					a.preventDefault && a.preventDefault()
				}, !1), this.canvas.addEventListener("pointercancel", function (a) {
					switch (a.pointerType) {
						case "touch":
							b.nk(a,
								!0)
					}
					a.preventDefault && a.preventDefault()
				}, !1)) : (this.canvas.addEventListener("mousemove", function (a) {
					b.hn(a, b.canvas);
					a.preventDefault && a.preventDefault()
				}, !1), this.canvas.addEventListener("mousedown", function (a) {
					b.Hu(a, !1);
					a.preventDefault && a.preventDefault()
				}, !1), this.canvas.addEventListener("mouseup", function (a) {
					b.Iu(a);
					a.preventDefault && a.preventDefault()
				}, !1), this.canvas.addEventListener("mouseout", function (a) {
					b.mA(a);
					a.preventDefault && a.preventDefault()
				}, !1), this.canvas.addEventListener("click",
					function (a) {
						b.click(a);
						a.preventDefault && a.preventDefault()
					}, !1), this.canvas.addEventListener("dblclick", function (a) {
						b.uy(a);
						a.preventDefault && a.preventDefault()
					}, !1));
				this.canvas.addEventListener("contextmenu", function (a) {
					a.preventDefault && a.preventDefault()
				}, !1);
				a = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel";
				document.attachEvent ? document.attachEvent("on" + a, function (a) {
					b.nA(a)
				}) : document.addEventListener && document.addEventListener(a, function (a) {
					b.nA(a)
				}, !1);
				document.onselectstart =
					function () {
						return !1
					};
				this.canvas.onselectstart = function (a) {
					a.preventDefault && a.preventDefault();
					return !1
				};
				this.Wi = this.PG();
				this.Me = new L;
				this.Ne = Array(m.Xc);
				this.ei = Array(m.Xc);
				this.Ul = Array(m.Xc);
				this.Ag = Array(m.Xc);
				this.Bg = Array(m.Xc);
				for (a = 0; a < m.Xc; a++) this.Ne[a] = m.lj, this.Ag[a] = 0, this.Bg[a] = 0, this.ei[a] = !1, this.Ul[a] = 0;
				this.Wi && !window.PointerEvent && (this.canvas.addEventListener("touchstart", function (a) {
					b.Nr(a, !1);
					a.preventDefault && a.preventDefault()
				}, !1), this.canvas.addEventListener("touchmove",
					function (a) {
						b.Mr(a, !1);
						a.preventDefault && a.preventDefault()
					}, !1), this.canvas.addEventListener("touchend", function (a) {
						b.nk(a, !1);
						a.preventDefault && a.preventDefault()
					}, !1), this.canvas.addEventListener("touchcancel", function (a) {
						b.nk(a, !1);
						a.preventDefault && a.preventDefault()
					}, !1));
				window.focus();
				this.Hr()
			} else
				for (this.Wi = this.sa.Wi, this.Me = new L, this.Ne = Array(m.Xc), this.ei = Array(m.Xc), this.Ul = Array(m.Xc), this.Ag = Array(m.Xc), this.Bg = Array(m.Xc), a = 0; a < m.Xc; a++) this.Ne[a] = m.lj, this.Ag[a] = 0, this.Bg[a] =
					0, this.ei[a] = !1, this.Ul[a] = 0;
			this.Pa = this.Yi = this.Xi = 0;
			this.he = -2;
			this.D = new h(this)
		},
		Al: function () {
			var a = this.ia,
				b = this.na,
				c, d;
			this.fullScreen || this.Lm & m.Pw ? (c = window.innerWidth, d = window.innerHeight, document.documentElement.style.overflow = "hidden", document.body.scroll = "no") : (c = a, d = b);
			c /= a;
			d /= b;
			if (this.ya & m.xC || this.Lm & m.Pw && this.Lm & m.HD) c = d = Math.min(c, d);
			if (c != this.Vb || d != this.Wb) this.Vb = c, this.Wb = d, this.canvas.width = Math.floor(this.Vb * a), this.canvas.height = Math.floor(this.Wb * b), this.context.PB(this.Vb,
				this.Wb);
			this.D && this.D.ci()
		},
		PG: function () {
			var a = "Android;webOS;iPhone;iPad;iPod;Blackberry;Windows Phone;Touch".split(";"),
				b = navigator.userAgent,
				c;
			for (c in a)
				if (0 <= b.indexOf(a[c])) return !0;
			return "ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? !0 : !1
		},
		hi: function (a) {
			this.Kp.rB(a);
			this.hh++
		},
		pm: function (a) {
			this.xm.add(a);
			this.ih++;
			this.Yf = !0
		},
		io: function () {
			this.cq && (this.Ym-- , 0 > this.Ym && (this.Ym = 1E9, this.Zm = new W, this.Zm.getFile(this.cq + "info.dat", Tb)));
			this.Ld = (new Date).getTime();
			if (this.OH(!1)) {
				if (this.Yf) {
					if (null == this.Bh) {
						var a = this.Pf;
						this.tu ? (this.Bh = 0 == this.Fn ? new Vb(this) : new Xb(this), 0 == this.Fn && -1 != this.Vj && (a = this.Vj)) : this.Bh = new Wb(this);
						this.fB = !1;
						this.Lv = !0;
						null == this.sa && (this.frame.lq ? this.context.zp(0, 0, this.canvas.width, this.canvas.height) : this.context.lc(0, 0, this.ia, this.na, a), this.Hr());
						return
					}
					if (null != this.Bh && 0 == this.fB) {
						this.fB = this.Bh.load();
						null == this.sa && this.Hr();
						return
					}
					for (; 0 < this.xm.size() && this.Kp.size() < this.EF;) a = this.xm.get(0), this.Kp.add(a),
						this.xm.qB(0), a.At();
					this.cc.GF();
					a = !1;
					0 == this.xm.size() && 0 == this.Kp.size() && (a = !0);
					null == this.Bh || 0 == (this.ya & m.Nh) && 0 == (this.frame.Vm & D.LD) || (this.Lv || (this.Bh.reset(), this.Lv = !0), this.Bh.step(), a = this.Bh.fu());
					a && (this.Lv = !1, this.D.resume(), this.D.ah(), this.Yf = !1, this.$.Je(), this.wg.Je(), this.Ab.Je(), this.hh = this.ih = 0, this.jt && (this.jt = !1, 0 != this.D.Bt() ? this.Pa = m.gp : (this.Pa = m.Gk, this.gC(this.zf), this.zf = null)));
					null == this.sa && this.Hr()
				} else null == this.sa && (null == this.Wc ? (this.context.gr(0 != (this.ya &
					m.qw)), this.Vq ? this.context.Ii(this.Vq, 0, 0, this.ia, this.na, 0, 0) : this.frame.lq ? this.context.zp(0, 0, this.ia, this.na) : this.context.lc(0, 0, this.ia, this.na, this.Pf), a = this.context.Ba, this.Kf && (bRestore = !0, a.save(), a.translate(this.sI, this.uI), 0 != this.HB && a.rotate(.0174532925 * -this.HB), a.scale(Math.max(.001, this.qI), Math.max(.001, this.rI)), a.translate(-this.tI, -this.vI)), this.Ud.mb(this.context, 0, 0), this.Kf && a.restore(), this.kh && this.oa.mb(this.context), this.ow && (this.ow-- , this.Tr || (a = new wa, a.Gp(), a.Ob =
						16, this.Tr = new ia(this, this.ia, 30), this.Tr.Vz(16711680), this.Tr.Aq(window.FusionVersion, n.cj | n.Oh, null, 16777215, a, 1, 10526880)), this.Tr.mb(this.context, 0, 0, 0, 0))) : (this.context.gr(), this.context.Ii(this.Wc, 0, 0, this.ia, this.na, 0, 0)), 0 != (this.Mm & m.FD) && window.requestAnimationFrame ? window.requestAnimationFrame(Ta) : (a = (new Date).getTime() - this.Ld, a = Math.max(1E3 / this.bz - a, 1), window.setTimeout(Ta, a)));
				return !0
			}
			this.Jy();
			return !1
		},
		Ey: function (a, b, c, d) {
			this.Yf || (this.context.gr(0 != (this.ya & m.qw)), null == this.Wc ?
				(d || this.context.lc(b, c, this.mv, this.lv, this.Pf), this.context.clip(b, c, this.mv, this.lv), this.Ud.mb(this.context, 0, 0), this.context.WI()) : (this.context.gr(), this.context.Ii(this.Wc, b, c, this.ia, this.na, 0, 0)))
		},
		iF: function () {
			0 == (this.ya & m.AC) && (this.hasFocus ? this.kt && (this.D.resume(), this.kt = !1) : (this.D.pause(this.Mm & m.DD), this.kt = !0))
		},
		OH: function (a) {
			this.iF();
			var b = !0,
				c = !0;
			do switch (this.Pa) {
				case m.ip:
					if (this.CG(), this.ob = this.fw, this.Pa = 1, this.SG(), a) {
						b = !1;
						break
					}
				case m.Ik:
					this.LI();
					break;
				case m.Vs:
					0 ==
						this.mH() ? (this.PF(), this.Pa != m.Hk && this.Pa != m.ip || this.Bm()) : b = !1;
					break;
				case m.Gk:
					this.D.Bt();
					0 != this.D.gb ? this.JI() ? this.Pa = m.hp : this.Bm() : b = !1;
					break;
				case m.hp:
					0 == this.nH() ? (this.Ky(), this.Pa != m.Hk && this.Pa != m.ip || this.Bm()) : b = !1;
					break;
				case m.gp:
					this.Bm();
					break;
				default:
					b = !1
			}
			while (1 == b);
			this.Pa == m.Hk && (c = !1);
			return c
		},
		Jy: function () {
			null != this.cc && this.cc.Jr()
		},
		LI: function () {
			this.ob != this.he && (this.frame = new D(this), this.frame.fH(this.ob));
			this.Pf = this.frame.Iz;
			this.he = this.ob;
			this.frame.mi = this.frame.ni =
				0;
			this.frame.ku = this.frame.lu = 0;
			this.frame.FB = !1;
			this.EG();
			var a;
			null != this.sa ? this.Bf = this.Af = 0 : (this.Af = this.ia / 2 - this.frame.bn / 2, this.Bf = this.na / 2 - this.frame.an / 2);
			for (a = 0; a < this.frame.Fc; a++) this.frame.Za[a].yF(this.Af, this.Bf);
			this.frame.Db & D.WD && (document.title = this.frame.$y);
			this.Vq = null;
			this.frame.Db & D.XD && (this.Vq = this.zf);
			this.frame.Db & D.YD && (this.frame.lq = !0);
			this.D.yI(this.frame);
			this.D.DG(null != this.frame.Fm);
			this.Pa = m.Gk;
			null != this.frame.Fm ? this.Yf ? this.jt = !0 : 0 != this.D.Bt() ? this.Pa =
				m.gp : (this.Pa = m.Gk, this.gC(this.zf), this.zf = null) : this.zf = null;
			this.Yf ? this.D.pause(!0) : this.D.ah()
		},
		wB: function () {
			null != this.sa ? this.Bf = this.Af = 0 : (this.Af = this.ia / 2 - this.frame.bn / 2, this.Bf = this.na / 2 - this.frame.an / 2);
			var a;
			for (a = 0; a < this.frame.Fc; a++) this.frame.Za[a].mI(this.Af, this.Bf)
		},
		Bm: function () {
			var a;
			a = this.D.TG(!1);
			if (0 != (this.Mm & m.CD)) this.Pa = m.Hk;
			else switch (n.cE(a)) {
				case 1:
					this.ob = this.he + 1;
					1 == this.Fn && this.ob == this.Uq && this.ob++;
					this.Pa = m.Ik;
					this.ob >= this.df && (this.Pa = m.Hk);
					break;
				case 2:
					this.ob =
						Math.max(0, this.he - 1);
					1 == this.Fn && this.ob == this.Uq && (0 == this.ob ? this.ob = this.he : this.ob--);
					this.Pa = m.Ik;
					break;
				case 3:
					this.Pa = m.Ik;
					0 != (n.Go(a) & 32768) ? (this.ob = n.Go(a) & 32767, this.ob >= this.df && (this.ob = this.df - 1), 0 > this.ob && (this.ob = 0)) : n.Go(a) < this.Im ? (this.ob = this.Hm[n.Go(a)], -1 == this.ob && (this.ob = this.he + 1)) : this.ob = this.he + 1;
					break;
				case 4:
					this.Pa = m.ip;
					this.ob = this.fw;
					break;
				default:
					this.Pa = m.Hk
			}
			this.Pa == m.Ik && (0 > this.ob || this.ob >= this.df) && (this.Pa = this.he);
			if (this.Pa != m.Ik || this.ob != this.he) {
				for (a =
					0; a < this.frame.Fc; a++) this.frame.Za[a].vy();
				this.frame = null;
				this.he = -1
			}
		},
		Ut: function () {
			null == this.jw && (this.jw = new xc(this));
			return this.jw
		},
		gC: function (a) {
			var b, c, d = this.frame.Fm;
			if (null != d) {
				b = document.createElement("canvas");
				b.width = this.ia;
				b.height = this.na;
				c = document.createElement("canvas");
				c.width = this.ia;
				c.height = this.na;
				var e = new Aa(c);
				e.lc(0, 0, this.ia, this.na, this.Pf);
				this.Ud.mb(e, 0, 0);
				e = new Aa(b);
				0 != (d.lo & qa.jp) ? e.lc(0, 0, this.ia, this.na, d.ko) : (e.lc(0, 0, this.ia, this.na, this.az), null != a && e.Ii(a,
					0, 0, a.width, a.height, 0, 0));
				this.Wc = document.createElement("canvas");
				this.Wc.width = this.ia;
				this.Wc.height = this.na;
				this.Wc.getContext("2d").drawImage(b, 0, 0);
				this.transition = this.Ut().Rk(d, this.Wc, b, c);
				if (null != this.transition) return this.Pa = m.Vs, !0
			}
			this.Wc = null;
			this.Pa = m.Gk;
			this.D.ky();
			return !1
		},
		mH: function () {
			if (null != this.transition) {
				if (this.transition.gq()) return !1;
				this.transition.yb(v.Ws);
				return !0
			}
			return !1
		},
		PF: function () {
			null != this.transition && (this.transition.end(), this.Wc = this.transition = null,
				this.Pa == m.Vs && (this.Pa = m.Gk), this.D.ky());
			return !0
		},
		JI: function () {
			var a, b, c = this.frame.Kt;
			if (null != c) {
				a = document.createElement("canvas");
				a.width = this.ia;
				a.height = this.na;
				b = document.createElement("canvas");
				b.width = this.ia;
				b.height = this.na;
				var d = new Aa(a);
				d.lc(0, 0, this.ia, this.na, this.Pf);
				this.Ud.mb(d, 0, 0);
				d = new Aa(b);
				0 != (c.lo & qa.jp) ? d.lc(0, 0, this.ia, this.na, c.ko) : d.lc(0, 0, this.ia, this.na, 0);
				this.Wc = document.createElement("canvas");
				this.Wc.width = this.ia;
				this.Wc.height = this.na;
				this.Wc.getContext("2d").drawImage(a,
					0, 0);
				this.transition = this.Ut().Rk(c, this.Wc, a, b);
				if (null != this.transition) return this.Pa = m.hp, !0
			}
			this.Wc = null;
			return !1
		},
		nH: function () {
			if (null != this.transition) {
				if (this.transition.gq()) return this.Ky(), !1;
				this.transition.yb(v.kp)
			}
			return !0
		},
		Ky: function () {
			null != this.transition && (this.zf = this.transition.l, this.transition.end(), this.Wc = this.transition = null, this.Pa == m.hp && (this.Pa = m.gp));
			return !0
		},
		cH: function () {
			this.file.la(4);
			this.Lm = this.file.m();
			this.Mm = this.file.m();
			this.file.m();
			this.file.m();
			this.ia =
				this.file.m();
			this.na = this.file.m();
			this.dz = this.file.o();
			this.cz = this.file.o();
			var a, b;
			this.YA = Array(m.Gf);
			for (a = 0; a < m.Gf; a++) this.YA[a] = this.file.m();
			this.nv = Array(m.Gf * m.gm);
			for (a = 0; a < m.Gf; a++)
				for (b = 0; b < m.gm; b++) this.nv[a * m.gm + b] = this.file.m();
			this.az = this.file.Sc();
			this.df = this.file.o();
			this.bz = this.file.o();
			this.file.la(1);
			this.file.la(3)
		},
		hH: function () {
			this.kl = this.file.m();
			this.Xt = Array(this.kl);
			this.uz = Array(this.kl);
			var a;
			for (a = 0; a < this.kl; a++) this.Xt[a] = this.file.o();
			this.file.ZH(this.uz)
		},
		gH: function () {
			this.on = this.file.o();
			this.Wt = Array(this.on);
			var a;
			for (a = 0; a < this.on; a++) this.Wt[a] = this.file.Sb()
		},
		eH: function (a) {
			this.Im = a / 2;
			this.Hm = Array(this.Im);
			for (a = 0; a < this.Im; a++) this.Hm[a] = this.file.m()
		},
		JD: function (a) {
			return null == this.Hm || -1 == a || a >= this.Im ? -1 : this.Hm[a]
		},
		St: function (a) {
			if (this.Yt) {
				var b;
				for (b = 0; b < this.Yt.size(); b++)
					if (gFont = this.Yt.get(b), gFont.oF(a)) return gFont
			}
			return a
		},
		SG: function () {
			this.$h = null
		},
		CG: function () {
			var a;
			if (null == this.sa || null != this.sa && 0 == (this.Sj & J.KC))
				for (this.cn =
					Array(m.Gf), a = 0; a < m.Gf; a++) this.cn[a] = this.cz ^ 4294967295;
			else this.cn = null;
			if (null == this.sa || null != this.sa && 0 == (this.Sj & J.MC))
				for (this.bo = Array(m.Gf), a = 0; a < m.Gf; a++) this.bo[a] = this.dz ^ 4294967295;
			else this.bo = null;
			this.ZA = Array(m.Gf);
			for (a = 0; a < m.Gf; a++) this.ZA[a] = "";
			if (null == this.sa || null != this.sa && 0 == (this.Sj & J.yw))
				for (this.Km = Array(this.kl), a = 0; a < this.kl; a++) this.Km[a] = this.Xt[a];
			else this.Km = null;
			if (null == this.sa || null != this.sa && 0 == (this.Sj & J.yw))
				for (this.Jm = Array(this.on), a = 0; a < this.on; a++) this.Jm[a] =
					this.Wt[a];
			else this.Jm = null
		},
		Nm: function () {
			for (var a = this; null == a.cn;) a = this.sa;
			return a.cn
		},
		Om: function () {
			for (var a = this; null == a.bo;) a = this.sa;
			return a.bo
		},
		cG: function () {
			for (var a = this; null != a.sa && 0 != (a.Sj & J.LC);) a = a.sa;
			return a.nv
		},
		hG: function () {
			for (var a = this; null == a.Km;) a = a.sa;
			return a.Km
		},
		gG: function () {
			for (var a = this; null == a.Jm;) a = a.sa;
			return a.Jm
		},
		Xx: function (a) {
			var b = this.hG();
			if (0 > a || 1E3 < a) return null;
			var c = b.length;
			if (a + 1 > c)
				for (; c < a + 1; c++) b.push(0);
			return b
		},
		gz: function (a) {
			var b = this.Xx(a);
			return null != b ? b[a] : 0
		},
		AI: function (a, b) {
			var c = this.Xx(a);
			null != c && (c[a] = b)
		},
		Wx: function (a) {
			var b = this.gG();
			if (0 > a || 1E3 < a) return null;
			var c = b.length;
			if (a + 1 > c)
				for (; c < a + 1; c++) b.push("");
			return b
		},
		fz: function (a) {
			var b = this.Wx(a);
			return null != b ? b[a] : ""
		},
		zI: function (a, b) {
			var c = this.Wx(a);
			null != c && (c[a] = b)
		},
		LF: function (a) {
			a && (this.rC.charCodeAt(this.no) == a.charCode ? (this.no++ , this.no == this.rC.length && (this.ow = 250, this.no = 0)) : this.no = 0)
		},
		Cy: function (a) {
			if (a) {
				var b = a.keyCode;
				this.Gj = this.bd[b] = !0;
				null != this.D &&
					null != this.D.v && this.D.v.CH(b);
				for (b = 0; b < this.Wa.length; b++) this.Wa[b].Cy(a)
			}
		},
		Dy: function (a) {
			if (a) {
				this.bd[a.keyCode] = !1;
				var b;
				for (b = 0; b < this.Wa.length; b++) this.Wa[b].Dy(a)
			}
		},
		Er: function (a, b) {
			this.Xi = a;
			this.Yi = b
		},
		hn: function (a, b, c) {
			a.pageX ? (this.mf = a.pageX, this.nf = a.pageY) : a.clientY && (this.mf = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, this.nf = a.clientY + document.body.scrollTop + document.documentElement.scrollTop);
			for (var d = 0, e = 0, f = b; f && "BODY" != f.tagName;) d += f.offsetTop,
				e += f.offsetLeft, f = f.offsetParent;
			this.mf -= e + this.Xi;
			this.nf -= d + this.Yi;
			this.mf = Math.floor(this.mf / this.Vb);
			this.nf = Math.floor(this.nf / this.Wb);
			null != this.D && null != this.D.v && this.D.v.WA();
			for (d = 0; d < this.Wa.length; d++) this.Wa[d].hn(a, b);
			this.Wi || 305419896 == c || this.Mr(new Oa(a.pageX, a.pageY, this.canvas), !1)
		},
		yx: function (a) {
			if (a.which) switch (a.which) {
				case 2:
					return m.Xs;
				case 3:
					return m.lp;
				default:
					return m.Te
			} else switch (a.button) {
				case 2:
					return m.lp;
				case 4:
					return m.Xs;
				default:
					return m.Te
			}
		},
		Iu: function (a) {
			var b =
				this.yx(a);
			this.hn(a, this.canvas, 305419896);
			this.bd[b] = !1;
			for (b = 0; b < this.Wa.length; b++) this.Wa[b].Iu(a);
			this.Wi || this.nk(new Oa(a.pageX, a.pageY, this.canvas), !1)
		},
		Hu: function (a, b) {
			var c = this.yx(a);
			this.hn(a, this.canvas, 305419896);
			this.Gj = !0;
			this.bd[c] = !0;
			this.Iy();
			if (null != this.D && null != this.D.v)
				if (b) {
					var d = Date.now(),
						e = null !== this.Gu && this.lA == c && d - this.Gu <= m.gE ? 2 : 1;
					this.lA = c;
					this.Gu = d;
					this.D.v.Cn(c - m.Te, e)
				} else this.vp.$m ? this.D.v.Cn(c - m.Te, 1) : this.D.v.Cn(c - m.Te, 0 == a.detail % 2 ? 2 : 1);
			for (c = 0; c < this.Wa.length; c++) this.Wa[c].Hu(a,
				b);
			this.Wi || this.Nr(new Oa(a.pageX, a.pageY, this.canvas), !1);
			window.focus()
		},
		mA: function (a) {
			this.bd[m.Te] = !1;
			this.bd[m.Xs] = !1;
			this.bd[m.lp] = !1;
			var b;
			for (b = 0; b < this.Wa.length; b++) this.Wa[b].mA(a);
			this.Wi || this.nk(new Oa(a.pageX, a.pageY, this.canvas), !1)
		},
		click: function (a) {
			if (this.vp.$m) {
				var b;
				for (b = 0; b < this.Wa.length; b++) this.Wa[b].click(a)
			}
		},
		uy: function (a) {
			if (this.vp.$m) {
				null != this.D && null != this.D.v && this.D.v.Cn(0, 2);
				var b;
				for (b = 0; b < this.Wa.length; b++) this.Wa[b].uy(a)
			}
		},
		nA: function (a) {
			this.wy = "undefined" !=
				typeof a.wheelDelta ? a.wheelDelta / 40 : -a.detail;
			null != this.D && null != this.D.v && this.D.DH(this.wy)
		},
		Iy: function () {
			this.vp.Ez && null != this.ho && "suspended" == this.ho.state && this.ho.resume()
		},
		Nr: function (a, b) {
			this.Iy();
			!this.Xm && this.ve && (this.ve.Tj(), this.ve = null);
			if (null != this.Ne) {
				var c, d, e = b ? 1 : a.changedTouches.length;
				for (c = 0; c < e; c++) {
					var f;
					b ? (f = a, f.identifier = a.pointerId) : f = a.changedTouches[c];
					for (d = 0; d < m.Xc; d++)
						if (this.Ne[d] == m.lj) {
							this.Ne[d] = f.identifier;
							this.ei[d] = !1;
							for (o = 0; o < this.Me.size(); o++)
								if (this.Me.get(o).TI(f)) {
									this.ei[d] = !0;
									this.Ul[d] = o;
									break
								} if (!this.ei[d] && (this.Ag[d] = this.Pm(f), this.Bg[d] = this.Qm(f), this.jn == m.lj && f.identifier != m.Mw))
								for (this.jn = d, this.mf = this.Ag[d], this.nf = this.Bg[d], this.Gj = !0, this.bd[m.Te] = !0, null != this.D && null != this.D.v && this.D.v.Cn(0, 1), d = 0; d < this.Wa.length; d++) this.Wa[d].Nr(a, b);
							break
						}
				}
			}
		},
		Mr: function (a, b) {
			if (null != this.Ne) {
				var c, d, e, f = b ? 1 : a.changedTouches.length;
				for (c = 0; c < f; c++) {
					var g;
					b ? (g = a, g.identifier = a.pointerId) : g = a.changedTouches[c];
					for (d = 0; d < m.Xc; d++)
						if (this.Ne[d] == g.identifier) {
							if (this.ei[d]) this.Me.get(this.Ul[d]).mC(g);
							else {
								for (e = 0; e < this.Me.size(); e++) this.Me.get(e).mC(g);
								this.Ag[d] = this.Pm(g);
								this.Bg[d] = this.Qm(g)
							}
							if (this.jn == d)
								for (this.mf = this.Ag[d], this.nf = this.Bg[d], null != this.D && null != this.D.v && this.D.v.WA(), d = 0; d < this.Wa.length; d++) this.Wa[d].Mr(a, b);
							break
						}
				}
			}
		},
		nk: function (a, b) {
			this.Xm && this.ve && (this.ve.Tj(), this.ve = null);
			if (null != this.Ne) {
				var c, d, e, f = b ? 1 : a.changedTouches.length;
				for (c = 0; c < f; c++) {
					var g;
					b ? (g = a, g.identifier = a.pointerId) : g = a.changedTouches[c];
					for (d = 0; d < m.Xc; d++)
						if (this.Ne[d] == g.identifier) {
							this.Ne[d] =
								m.lj;
							if (this.ei[d]) this.Me.get(this.Ul[d]).kC(g);
							else {
								for (e = 0; e < this.Me.size(); e++) this.Me.get(e).kC(g);
								this.Ag[d] = this.Pm(g);
								this.Bg[d] = this.Qm(g)
							}
							if (d == this.jn)
								for (this.mf = this.Ag[d], this.nf = this.Bg[d], this.jn = m.lj, this.bd[m.Te] = !1, e = 0; e < this.Wa.length; e++) this.Wa[e].nk(a, b)
						}
				}
			}
		},
		Pm: function (a) {
			var b = a.pageX;
			for (a = a.target; a && "BODY" != a.tagName;) b -= a.offsetLeft, a = a.offsetParent;
			return Math.floor((b - this.Xi) / this.Vb)
		},
		Qm: function (a) {
			var b = a.pageY;
			for (a = a.target; a && "BODY" != a.tagName;) b -= a.offsetTop,
				a = a.offsetParent;
			return Math.floor((b - this.Yi) / this.Wb)
		},
		cw: function (a) {
			this.sy = a;
			this.canvas.style.cursor = 0 <= this.sy ? this.cursor : "none"
		},
		hC: function (a, b) {
			null == this.oa && (this.oa = new r(this), this.oa.Lz(), this.oa.reset(b), this.kh = 1, 0 > this.Me.indexOf(this.oa) && this.Me.add(this.oa))
		},
		HI: function () {
			this.II();
			this.kh = 2
		},
		QF: function () {
			null != this.oa && (1 == this.kh && this.Me.rB(this.oa), this.oa = null);
			2 == this.kh && this.NF();
			this.kh = 0
		},
		II: function () {
			0 == this.om && window.DeviceMotionEvent && (this.Ys = this.TE.bind(this),
				window.addEventListener("devicemotion", this.Ys));
			this.om++
		},
		TE: function (a) {
			var b = a.acceleration.x / 9.780318,
				c = a.acceleration.y / 9.780318,
				d = a.accelerationIncludingGravity.x / 9.780318;
			a = a.accelerationIncludingGravity.y / 9.780318;
			this.mj = b;
			this.nj = c;
			this.Wg = d;
			this.Xg = a;
			switch (window.orientation) {
				case 0:
					this.mj = -b;
					this.nj = c;
					this.Wg = -d;
					this.Xg = a;
					break;
				case 90:
					this.mj = c;
					this.nj = b;
					this.Wg = a;
					this.Xg = d;
					break;
				case 180:
					this.mj = b;
					this.nj = -c;
					this.Wg = d;
					this.Xg = -a;
					break;
				case -90:
					this.mj = -c, this.nj = -b, this.Wg = -a, this.Xg = -d
			}
			this.Xm && (this.mj = -this.mj, this.nj = -this.nj, this.Wg = -this.Wg, this.Xg = -this.Xg)
		},
		NF: function () {
			this.om--;
			0 >= this.om && (window.DeviceMotionEvent && window.removeEventListener("devicemotion", this.Ys), this.om = 0)
		},
		Wp: function () {
			var a = 0; - .2 > this.Wg && (a |= 4);
			.2 < this.Wg && (a |= 8); - .2 > this.Xg && (a |= 1);
			.2 < this.Xg && (a |= 2);
			return a
		},
		Dt: function (a) {
			if (a.pk) {
				null == this.ve && (a.lC = 2);
				switch (a.lC) {
					case 0:
						0 < a.yf && (a.yf -= 2, 0 > a.yf && (a.yf = 0, phase++));
						break;
					case 2:
						128 > a.yf && (a.yf += 4, 128 <= a.yf && (a.yf = 128, a.Lr = !0))
				}
				this.context.lc(a.Md.left,
					a.Md.top, a.Md.right - a.Md.left, a.Md.bottom - a.Md.top, this.Pf, 0, 0);
				a.pk.mb(this.context, a.Md.left, a.Md.top, w.Oe, a.yf);
				a.Lr && (a.pk = null, a.Md = null, a.Tl = null)
			} else if (a.Lr = !0, null != this.ve && 0 != (this.ya & m.yC)) {
				a.Tl = new wa;
				a.Tl.Gp();
				a.Tl.Ob = 24;
				var b = a.Tl.Ob + 6;
				a.pk = new ia(this, 120, b);
				var c = a.pk.measureText(this.yu, a.Tl) + 64;
				a.pk.resize(c, b);
				a.pk.Vz();
				a.pk.Aq(this.yu, n.Oh | n.cj, null, 16776960, a.Tl, 2, 0);
				a.Md = new Z;
				a.Md.left = this.ia / 2 - c / 2;
				a.Md.top = this.na / 2 - b / 2;
				a.Md.right = a.Md.left + c;
				a.Md.bottom = a.Md.top + b;
				a.yf =
					128;
				a.lC = 0;
				a.Lr = !1;
				this.context.lc(0, 0, this.ia, this.na, this.Pf, 0, 0)
			}
			return a.Lr
		}
	};
	D.WD = 1;
	D.jL = 2;
	D.XD = 4;
	D.Uw = 32;
	D.lL = 256;
	D.kL = 2048;
	D.Bc = 32768;
	D.YD = 131072;
	D.xo = 0;
	D.ge = 1;
	D.OC = 1;
	D.PC = 2;
	D.Fo = 6;
	D.LD = 256;
	D.MD = 1;
	D.ND = 2;
	D.OD = 4;
	D.SD = 0;
	D.TD = 1;
	D.QD = 2;
	D.RD = 3;
	D.prototype = {
		fH: function (a) {
			this.app.file.seek(this.app.Ot[a]);
			this.Dm = new N(this.app);
			this.jd = new ec;
			this.mq = new Z;
			a = 0;
			var b;
			for (this.yq = -1; 32639 != a;)
				if (a = this.app.file.m(), this.app.file.m(), b = this.app.file.o(), 0 != b) {
					this.QH = this.app.file.ba + b;
					switch (a) {
						case 13108:
							this.ru();
							null != this.app.sa && 0 != (this.app.Sj & J.JC) ? (this.bn = this.app.BF, this.an = this.app.CF) : (this.bn = Math.min(this.app.ia, this.cd), this.an = Math.min(this.app.na, this.ic));
							break;
						case 13128:
							var c = b / 6;
							this.gn = Array(c);
							this.ed = Array(c);
							this.fd = Array(c);
							for (b = this.Id = 0; b < c; b++) this.gn[b] = this.app.file.m(), this.Id = Math.max(this.Id, this.gn[b]), this.ed[b] = this.app.file.m(), this.fd[b] = this.app.file.m();
							this.Id++;
							break;
						case 13130:
							this.oa = this.app.file.m();
							this.Vm = this.app.file.m();
							break;
						case 13122:
							this.mq.load(this.app.file);
							break;
						case 13124:
							this.yq = this.app.file.m();
							break;
						case 13127:
							this.Pz = this.app.file.o();
							break;
						case 13109:
							this.$y = this.app.file.Sb();
							break;
						case 13115:
							this.Fm = new qa;
							this.Fm.load(this.app.file);
							break;
						case 13116:
							this.Kt = new qa;
							this.Kt.load(this.app.file);
							break;
						case 13121:
							this.kH();
							break;
						case 13125:
							this.jH();
							break;
						case 13112:
							this.jd.load(this.app);
							break;
						case 13117:
							this.Dm.load(this.app), this.bg = this.Dm.bg
					}
					this.app.file.seek(this.QH)
				} this.app.Cc.Je();
			for (b = 0; b < this.jd.pf; b++) this.app.Cc.Si(this.jd.hz(b).jf);
			this.app.$.Je();
			this.app.wg.Je();
			this.app.Ab.Je();
			this.app.Cc.load(this.app.file);
			this.app.Cc.Yb(this.app.$, this.app.Ab);
			this.app.ya & m.Nh && (this.app.Ab.co(), this.app.wg.co(), 0 == this.app.Id && this.app.$.co());
			this.app.$.load(this.app.file);
			this.app.Ab.load(this.app.file);
			this.Dm.SF(this.app.wg);
			this.app.wg.load();
			this.app.Cc.lI();
			for (b = 0; b < this.jd.pf; b++) a = this.jd.list[b], a.oq >= q.Se && this.app.Cc.DI(a.jf)
		},
		kH: function () {
			this.Fc = this.app.file.o();
			this.Za = Array(this.Fc);
			var a;
			for (a = 0; a < this.Fc; a++) this.Za[a] =
				new S(this.app), this.Za[a].load(this.app.file)
		},
		jH: function () {
			var a;
			for (a = 0; a < this.Fc; a++) this.Za[a].Dd = this.app.file.o(), this.Za[a].Ed = this.app.file.o(), this.app.file.la(12)
		},
		ru: function () {
			this.cd = this.app.file.o();
			this.ic = this.app.file.o();
			this.Iz = this.app.file.Sc();
			this.Db = this.app.file.o()
		}
	};
	X.Nc = 32;
	X.prototype = {
		XE: function (a) {
			null == this.vj && (this.vj = new L);
			this.vj.add(a)
		},
		GF: function () {
			if (null != this.vj && 0 < this.vj.size() && !this.yt) {
				var a = this.vj.get(0);
				this.vj.qB(0);
				this.yt = !0;
				var b = this;
				b.context.decodeAudioData(a.response,
					function (c) {
						a.buffer = c;
						a.response = null;
						b.app.hi(a);
						b.yt = !1
					})
			}
		},
		reset: function () {
			var a;
			for (a = 0; a < X.Nc; a++) this.rm[a] = !1
		},
		play: function (a, b, c, d) {
			if (0 != this.Gx) {
				var e = this.app.wg.lG(a);
				if (null != e) {
					0 == this.gt && (c = 0);
					if (0 > c) {
						for (a = 0; a < X.Nc && (null != this.Ja[a] || 0 != this.rm[a]); a++);
						if (a == X.Nc)
							for (a = 0; a < X.Nc && (0 != this.rm[a] || null == this.Ja[a] || 0 != this.Ja[a].tm); a++);
						c = a;
						0 <= c && c < X.Nc && (this.Ur[c] = this.Sz)
					}
					if (!(0 > c || c >= X.Nc)) {
						if (null != this.Ja[c]) {
							if (1 == this.Ja[c].tm) return;
							this.Ja[c] != e && (this.Ja[c].stop(), this.Ja[c] =
								null)
						}
						for (a = 0; a < X.Nc; a++) this.Ja[a] == e && (this.Ja[a].stop(), this.Ja[a] = null);
						this.Ja[c] = e;
						e.play(b, d, this.Ur[c])
					}
				}
			}
		},
		CI: function (a) {
			this.gt = a
		},
		RG: function () {
			var a;
			for (a = 0; a < X.Nc; a++) null != this.Ja[a] && this.Ja[a].Gz() && this.app.wg.Si(this.Ja[a].handle)
		},
		Jr: function () {
			var a;
			for (a = 0; a < X.Nc; a++) null != this.Ja[a] && (this.Ja[a].stop(), this.Ja[a] = null)
		},
		NI: function (a) {
			var b;
			for (b = 0; b < X.Nc; b++) null != this.Ja[b] && this.Ja[b].handle == a && (this.Ja[b].stop(), this.Ja[b] = null)
		},
		NG: function (a) {
			var b;
			for (b = 0; b < X.Nc; b++)
				if (null !=
					this.Ja[b] && this.Ja[b].handle == a) return this.Ja[b].Gz();
			return !1
		},
		pause: function () {
			var a;
			for (a = 0; a < X.Nc; a++) null != this.Ja[a] && this.Ja[a].qG()
		},
		resume: function () {
			var a;
			for (a = 0; a < X.Nc; a++) null != this.Ja[a] && this.Ja[a].rG()
		},
		kF: function () {
			var a;
			for (a = 0; a < X.Nc; a++) null != this.Ja[a] && this.Ja[a].jF() && (this.Ja[a] = null)
		}
	};
	Ub.prototype = {
		Ah: function () {
			var a = this.app.file.m();
			this.path = this.app.file.Sb(a);
			a = this.path.lastIndexOf("\\");
			0 <= a && (this.path = this.path.substring(a + 1));
			this.length = this.app.file.o();
			this.offset =
				this.app.file.ba;
			this.app.file.la(this.length)
		},
		open: function () {
			return this.app.file.Nf(this.offset, this.length)
		}
	};
	Vb.prototype = {
		load: function () {
			return this.hu
		},
		reset: function () {
			this.ev = this.re = 0;
			this.Dp = 25
		},
		step: function () {
			switch (this.re) {
				case 0:
					-1 != this.app.Vj ? this.context.lc(0, 0, this.app.ia, this.app.na, this.app.Vj) : this.context.zp(0, 0, this.app.ia, this.app.na);
					this.context.Ii(this.Wf, this.Lh - this.Wf.width / 2, this.Mh - this.Wf.height / 2, this.Wf.width, this.Wf.height, 0, 0);
					this.re++;
					break;
				case 1:
					this.angle =
						this.app.hh / this.app.ih * 2 * Math.PI;
					this.Tk(this.angle);
					this.app.hh == this.app.ih && this.re++;
					break;
				case 2:
					0 < this.Dp && this.Dp--;
					0 == this.Dp && this.re++;
					break;
				case 3:
					this.app.Dt(this) && this.re++
			}
		},
		fu: function () {
			return 4 == this.re
		},
		Tk: function (a) {
			var b, c, d, e, f;
			for (b = this.ev; b <= a; b += .005) {
				c = this.Lh + Math.cos(b) * (this.Ge - this.size);
				d = this.Mh - Math.sin(b) * (this.Ge - this.size);
				e = this.Lh + Math.cos(b) * this.Ge;
				f = this.Mh - Math.sin(b) * this.Ge;
				this.context.gd(c, d, e, f, this.color, 1, 0, 0);
				var g;
				for (g = 0; 3 > g; g++) c = this.Lh + Math.cos(b) *
					(this.Ge - this.size - g), d = this.Mh - Math.sin(b) * (this.Ge - this.size - g), e = this.Lh + Math.cos(b) * (this.Ge - this.size - g - 1), f = this.Mh - Math.sin(b) * (this.Ge - this.size - g - 1), this.context.gd(c, d, e, f, this.color, 1, 0, 0), c = this.Lh + Math.cos(b) * (this.Ge + g), d = this.Mh - Math.sin(b) * (this.Ge + g), e = this.Lh + Math.cos(b) * (this.Ge + g + 1), f = this.Mh - Math.sin(b) * (this.Ge + g + 1), this.context.gd(c, d, e, f, this.color, 1, 0, 0)
			}
			this.ev = a
		}
	};
	Wb.prototype = {
		load: function () {
			return !0
		},
		reset: function () {
			this.Zq = !1;
			this.re = 0;
			this.alpha = 128;
			this.position =
				0
		},
		step: function () {
			if (this.app.hh < this.app.ih) switch (this.re) {
				case 0:
					0 < this.alpha && (this.alpha -= 2, 0 >= this.alpha && (this.alpha = 0, this.re++))
			} else switch (this.re) {
				case 0:
				case 1:
					this.re = 2;
					break;
				case 2:
					128 > this.alpha && (this.alpha += 4);
					128 <= this.alpha && (this.alpha = 128, null == this.app.ve ? this.Zq = !0 : this.re++);
					break;
				default:
					this.Zq = this.app.Dt(this);
					return
			}
			this.context.lc(this.rect.left, this.rect.top, this.width, this.height, this.eF, w.Oe, this.alpha);
			this.context.fr(this.rect.left, this.rect.top, this.width, this.height,
				this.borderColor, 1, w.Oe, this.alpha);
			this.position = this.app.hh / this.app.ih * (this.width - 2);
			this.context.lc(this.rect.left + 1, this.rect.top + 1, this.position, this.height - 2, this.fF, w.Oe, this.alpha)
		},
		fu: function () {
			return this.Zq && this.app.hh == this.app.ih
		}
	};
	Xb.prototype = {
		load: function () {
			this.step();
			return !this.B.Yf
		},
		reset: function () {
			this.B.D.Qy();
			this.B.D.iu();
			this.B.D.Yr(!1);
			this.B.D.zl(-1, !1);
			this.B.D.v.Qr();
			this.B.D.Qt();
			this.B.D.Rt();
			this.B.D.A.mi = this.B.D.A.ku = this.B.D.dk = 0;
			this.B.D.A.ni = this.B.D.A.lu =
				this.B.D.ek = 0;
			this.B.wB();
			this.B.D.ct();
			this.B.D.cu();
			this.B.D.zl(-1, !1);
			this.B.D.qv();
			this.B.D.vt(!1);
			this.B.D.Et();
			this.B.D.qu();
			this.B.D.v.rv();
			this.B.D.v.tp(this.B.D);
			this.B.D.Jt();
			this.B.D.wp();
			this.B.D.gb = 0;
			this.B.D.Ol = 0;
			this.B.Ti = !1;
			this.app.Wa.push(this.B);
			this.Sk = 0
		},
		step: function () {
			this.B.Ti || (this.MI && (this.B.Ti = this.app.hh == this.app.ih), 0 == this.B.io() && (this.B.Ti = !0), this.B.Ey(this.context, this.sc.x, this.sc.y, !1));
			this.B.Ti && this.app.ve && this.app.Dt(this)
		},
		fu: function () {
			var a = this.B.Ti;
			this.app.ve && (a = !1);
			if (a) {
				if (0 < this.Sk && (this.Sk-- , 0 < this.Sk)) return !1;
				var b;
				for (b = 0; b < this.app.Wa.length; b++)
					if (this.app.Wa[b] == this.B) {
						this.app.Wa.splice(b, 1);
						break
					}
			}
			return a
		}
	};
	r.dc = 0;
	r.zc = 1;
	r.Ac = 2;
	r.Tw = -1;
	r.Xc = 3;
	r.Sh = 1;
	r.Df = 2;
	r.Ef = 4;
	r.Sw = 8;
	r.iL = 2147483648;
	r.UD = 70;
	r.hD = 60;
	r.fD = .5;
	r.prototype = {
		Lz: function () {
			null == this.Nb && (this.Nb = fa.Nf(this.app, "joyback.png"), this.jq = fa.Nf(this.app, "joyfront.png"), this.od = fa.Nf(this.app, "fire1U.png"), this.Gd = fa.Nf(this.app, "fire2U.png"), this.Vy = fa.Nf(this.app, "fire1D.png"),
				this.Wy = fa.Nf(this.app, "fire2D.png"))
		},
		reset: function (a) {
			this.Ua = a;
			null != this.Nb && 0 != this.Nb.width ? this.NB() : this.ht = !0;
			this.Xf = this.Fz ? r.UD * Math.PI / 180 : r.hD * Math.PI / 180
		},
		NB: function () {
			var a, b;
			a = this.app.ia;
			b = this.app.na;
			0 == (this.Ua & r.Sw) ? (0 != (this.Ua & r.Sh) && (this.Jb[r.dc] = 16 + this.Nb.width / 2, this.Kb[r.dc] = b - 16 - this.Nb.height / 2), 0 != (this.Ua & r.Df) && 0 != (this.Ua & r.Ef) ? (this.Jb[r.zc] = a - this.od.width / 2 - 32, this.Kb[r.zc] = b - this.od.height / 2 - 16, this.Jb[r.Ac] = a - this.Gd.width / 2 - 16, this.Kb[r.Ac] = b - this.Gd.height /
				2 - this.od.height - 24) : 0 != (this.Ua & r.Df) ? (this.Jb[r.zc] = a - this.od.width / 2 - 16, this.Kb[r.zc] = b - this.od.height / 2 - 16) : 0 != (this.Ua & r.Ef) && (this.Jb[r.Ac] = a - this.Gd.width / 2 - 16, this.Kb[r.Ac] = b - this.Gd.height / 2 - 16)) : (0 != (this.Ua & r.Sh) && (this.Jb[r.dc] = a - 16 - this.Nb.width / 2, this.Kb[r.dc] = b - 16 - this.Nb.height / 2), 0 != (this.Ua & r.Df) && 0 != (this.Ua & r.Ef) ? (this.Jb[r.zc] = this.od.width / 2 + 16 + 2 * this.Gd.width / 3, this.Kb[r.zc] = b - this.od.height / 2 - 16, this.Jb[r.Ac] = this.Gd.width / 2 + 16, this.Kb[r.Ac] = b - this.Gd.height / 2 - this.od.height -
					24) : 0 != (this.Ua & r.Df) ? (this.Jb[r.zc] = this.od.width / 2 + 16, this.Kb[r.zc] = b - this.od.height / 2 - 16) : 0 != (this.Ua & r.Ef) && (this.Jb[r.Ac] = this.Gd.width / 2 + 16, this.Kb[r.Ac] = b - this.Gd.height / 2 - 16))
		},
		Xb: function (a, b) {
			0 != (a & r.Sh) ? this.Jb[r.dc] = b : 0 != (a & r.Df) ? this.Jb[r.zc] = b : 0 != (a & r.Ef) && (this.Jb[r.Ac] = b)
		},
		Lb: function (a, b) {
			0 != (a & r.Sh) ? this.Kb[r.dc] = b : 0 != (a & r.Df) ? this.Kb[r.zc] = b : 0 != (a & r.Ef) && (this.Kb[r.Ac] = b)
		},
		mb: function (a) {
			this.ht && (this.ht = !1, this.NB());
			var b, c;
			0 != (this.Ua & r.Sh) && (b = this.Jb[r.dc] - this.Nb.width / 2,
				c = this.Kb[r.dc] - this.Nb.height / 2, a.Ie(this.Nb, b, c, 0, 1, 1, 0, 0), b = this.Jb[r.dc] + this.gf - this.jq.width / 2, c = this.Kb[r.dc] + this.hf - this.jq.height / 2, a.Ie(this.jq, b, c, 0, 1, 1, 0, 0));
			if (0 != (this.Ua & r.Df)) {
				var d = 0 == (this.oa & 16) ? this.od : this.Vy;
				b = this.Jb[r.zc] - d.width / 2;
				c = this.Kb[r.zc] - d.height / 2;
				a.Ie(d, b, c, 0, 1, 1, 0, 0)
			}
			0 != (this.Ua & r.Ef) && (d = 0 == (this.oa & 32) ? this.Gd : this.Wy, b = this.Jb[r.Ac] - d.width / 2, c = this.Kb[r.Ac] - d.height / 2, a.Ie(d, b, c, 0, 1, 1, 0, 0))
		},
		TI: function (a) {
			var b = !1,
				c = this.app.Pm(a),
				d = this.app.Qm(a);
			this.Hz =
				r.fD * Math.ceil(Math.sqrt(this.Nb.width / 2 * this.Nb.width / 2 + this.Nb.height / 2 * this.Nb.height / 2));
			this.Ae = Math.ceil(Math.sqrt(this.Nb.width / 4 * this.Nb.width / 4 + this.Nb.height / 4 * this.Nb.height / 4));
			c = this.getKey(c, d);
			c != r.Tw && (this.touches[c] = a.identifier, c == r.dc && (this.oa &= 240, b = !0), c == r.zc ? (this.oa |= 16, b = !0) : c == r.Ac && (this.oa |= 32, b = !0));
			return b
		},
		mC: function (a) {
			var b = this.app.Pm(a),
				c = this.app.Qm(a);
			if (this.getKey(b, c) == r.dc && a.identifier == this.touches[r.dc] && (this.gf = b - this.Jb[r.dc], this.hf = c - this.Kb[r.dc],
				a = (2 * Math.PI - Math.atan2(this.hf, this.gf)) % (2 * Math.PI), this.oa &= 240, b = Math.sqrt(this.gf * this.gf + this.hf * this.hf), this.Fz ? (this.gf = Math.cos(a) * this.Ae, this.hf = Math.sin(a) * -this.Ae) : (this.gf < -this.Ae && (this.gf = -this.Ae), this.gf > this.Ae && (this.gf = this.Ae), this.hf < -this.Ae && (this.hf = -this.Ae), this.hf > this.Ae && (this.hf = this.Ae)), b > this.Hz && b < 3 * this.Ae)) {
				b = 0;
				if (0 <= a)
					for (; ;) {
						if (this.jh(a, 0, this.Xf) || this.jh(a, 2 * Math.PI, this.Xf)) {
							b = 8;
							break
						}
						if (this.jh(a, Math.PI / 2, this.Xf)) {
							b = 1;
							break
						}
						if (this.jh(a, Math.PI, this.Xf)) {
							b =
								4;
							break
						}
						if (this.jh(a, Math.PI / 4 * 6, this.Xf)) {
							b = 2;
							break
						}
						if (this.jh(a, Math.PI / 4, Math.PI / 2 - this.Xf)) {
							b = 9;
							break
						}
						if (this.jh(a, Math.PI / 4 * 3, Math.PI / 2 - this.Xf)) {
							b = 5;
							break
						}
						if (this.jh(a, Math.PI / 4 * 5, Math.PI / 2 - this.Xf)) {
							b = 6;
							break
						}
						if (this.jh(a, Math.PI / 4 * 7, Math.PI / 2 - this.Xf)) {
							b = 10;
							break
						}
						break
					}
				this.oa |= b
			}
		},
		jh: function (a, b, c) {
			return a > b - c / 2 && a < b + c / 2
		},
		kC: function (a) {
			var b;
			for (b = 0; b < r.Xc; b++)
				if (this.touches[b] == a.identifier) {
					this.touches[b] = 0;
					switch (b) {
						case r.dc:
							this.hf = this.gf = 0;
							this.oa &= 240;
							break;
						case r.zc:
							this.oa &=
								-17;
							break;
						case r.Ac:
							this.oa &= -33
					}
					break
				}
		},
		getKey: function (a, b) {
			return 0 != (this.Ua & r.Sh) && a >= this.Jb[r.dc] - this.Nb.width / 2 && a < this.Jb[r.dc] + this.Nb.width / 2 && b > this.Kb[r.dc] - this.Nb.height / 2 && b < this.Kb[r.dc] + this.Nb.height / 2 ? r.dc : 0 != (this.Ua & r.Df) && a >= this.Jb[r.zc] - this.od.width / 2 && a < this.Jb[r.zc] + this.od.width / 2 && b > this.Kb[r.zc] - this.od.height / 2 && b < this.Kb[r.zc] + this.od.height / 2 ? r.zc : 0 != (this.Ua & r.Ef) && a >= this.Jb[r.Ac] - this.Gd.width / 2 && a < this.Jb[r.Ac] + this.Gd.width / 2 && b > this.Kb[r.Ac] - this.Gd.height /
				2 && b < this.Kb[r.Ac] + this.Gd.height / 2 ? r.Ac : r.Tw
		},
		Wp: function () {
			return this.oa
		}
	};
	h.PK = 2;
	h.yD = 4;
	h.fm = 16;
	h.zD = 32;
	h.BD = 64;
	h.AD = 128;
	h.ss = 512;
	h.pK = 2;
	h.rK = 4;
	h.tK = 8;
	h.qK = 16;
	h.oK = 32;
	h.uK = 64;
	h.sK = 128;
	h.vK = 256;
	h.Nw = 480;
	h.Ow = 300;
	h.am = 64;
	h.bm = 16;
	h.pN = 1;
	h.rN = 2;
	h.qN = 4;
	h.JE = 1;
	h.FM = 2;
	h.EM = 4;
	h.GM = 8;
	h.kx = 0;
	h.Zo = 1;
	h.If = 2;
	h.Rs = 3;
	h.tE = 4;
	h.Dw = 1;
	h.sk = 2;
	h.es = 4;
	h.Cw = 8;
	h.Ko = 10;
	h.Jo = 1;
	h.zs = 2;
	h.Io = 3;
	h.ys = 4;
	h.oL = 5;
	h.pL = 6;
	h.mL = 7;
	h.qL = 8;
	h.nL = 9;
	h.xs = -2;
	h.aE = 100;
	h.bE = 101;
	h.Hg = 1;
	h.Ig = 2;
	h.Jg = 4;
	h.Gg = 8;
	h.HC = 15;
	h.As = 128;
	h.Pe = 2147483647;
	h.sD = 1110591041;
	h.PE = 1110594637;
	h.FE = 1110600435;
	h.dE = 1110874198;
	h.KE = 1110634490;
	h.vo = 1110590791;
	h.MH = [0, 0, 0, 0, 255, 0, 0, 0, 255, 255, 0, 0, 255, 255, 255, 0, 255, 255, 255, 255];
	h.wx = [0, h.Hg, h.Ig, 0, h.Jg, h.Jg + h.Hg, h.Jg + h.Ig, 0, h.Gg, h.Gg + h.Hg, h.Gg + h.Ig, 0, 0, 0, 0, 0];
	h.Fx = !1;
	h.qF = function (a, b, c) {
		switch (c) {
			case 0:
				return a == b;
			case 1:
				return a != b;
			case 2:
				return a <= b;
			case 3:
				return a < b;
			case 4:
				return a >= b;
			case 5:
				return a > b
		}
		return !1
	};
	h.pF = function (a, b, c) {
		switch (c) {
			case 0:
				return a == b;
			case 1:
				return a != b;
			case 2:
				return a <= b;
			case 3:
				return a <
					b;
			case 4:
				return a >= b;
			case 5:
				return a > b
		}
		return !1
	};
	h.nO = function (a) {
		a = a.Da >= q.Ff ? a.ext.lz() : a.Qf();
		null == a && (a = new Ya);
		return a
	};
	h.XO = function (a, b, c) {
		a.Da >= q.Ff ? a.ext.OB(b, c) : a.jk(b, c)
	};
	h.pO = function (a) {
		return a.Da >= q.Ff ? 0 : a.Up()
	};
	h.YO = function (a, b) {
		a.Da >= q.Ff || a.Cr(b)
	};
	h.CO = function (a) {
		null != a.F && (a.F.Su(), a.F.U |= w.Vg, a.F.ur = 0)
	};
	h.BO = function (a) {
		null != a.F && (a.F.tn(), a.F.U &= ~w.Vg, a.F.ur = 0)
	};
	h.Xb = function (a, b) {
		null != a.w ? a.w.aa.Xb(b) : a.u != b && (a.u = b, null != a.b && (a.b.K = !0, a.b.Ha = !0))
	};
	h.Lb = function (a, b) {
		null !=
			a.w ? a.w.aa.Lb(b) : a.s != b && (a.s = b, null != a.b && (a.b.K = !0, a.b.Ha = !0))
	};
	h.rz = function (a, b) {
		if (0 == a) return 0 <= b ? 24 : 8;
		if (0 == b) return 0 <= a ? 0 : 16;
		var c, d = !1,
			e = !1;
		0 > a && (d = !0, a = -a);
		0 > b && (e = !0, b = -b);
		c = 256 * a / b;
		var f;
		for (f = 0; !(c >= F.tk[f]); f += 2);
		c = F.tk[f + 1];
		e && (c = -c + 32 & 31);
		d && (c = (-(c - 8 & 31) & 31) + 8 & 31);
		return c
	};
	h.prototype = {
		yI: function (a) {
			this.A = a
		},
		ct: function () {
			this.G = Array(this.A.bg);
			this.v = this.A.Dm;
			this.be = 0;
			var a;
			for (a = this.h.Cc.ez(); null != a; a = this.h.Cc.iz()) a.qe >= q.Se && this.be++;
			this.Ov = -1 == this.A.yq ? this.h.Ld &
				65535 : this.A.yq;
			this.gk = Array(Math.round(this.A.bg / 32 + 1));
			this.fk = new L;
			this.qg = this.A.bg;
			this.Xv = this.v.HA;
			this.A.mi = 0;
			this.A.ni = 0;
			this.ca = this.A.mi;
			this.ea = this.A.ni;
			this.sr = this.rr = 0;
			this.$d = this.A.mq.right; - 1 == this.$d && (this.$d = 2147479552);
			this.ae = this.A.mq.bottom; - 1 == this.ae && (this.ae = 2147479552);
			this.Yv = this.gb = this.pb = 0;
			this.wc &= h.AD;
			this.wc |= h.yD;
			this.Ll = 0;
			this.nr = Array(h.Ko);
			this.Mi = null;
			this.wc |= h.BD;
			this.Jc = Array(h.As);
			this.Ml = Array(h.As);
			this.or = new ua;
			this.or.code = 0;
			this.ir = Array(4);
			this.Nv = Array(4);
			this.hr = Array(4);
			this.Lc = Array(4);
			for (a = this.mc = 0; a < h.Ko; a++) this.nr[a] = 50;
			this.lt = this.$q = !1;
			this.A.FB = !0
		},
		Rt: function () {
			this.A.FB = !1;
			this.Mi = this.fk = this.gk = this.O = this.G = null;
			var a;
			for (a = 0; a < h.As; a++) this.Jc[a] = 0;
			this.or = null
		},
		DG: function (a) {
			this.ct();
			this.h.kh = 0;
			if (null == this.h.sa && this.h.Wi)
				if (this.A.oa == D.RD) null == this.h.oa && (this.h.oa = new r(this.h), this.h.oa.Lz()), this.h.oa.reset(0), this.h.hC();
				else if (this.A.oa != D.SD) {
					var b = 0;
					0 != (this.A.Vm & D.MD) && (b = r.Df);
					0 != (this.A.Vm & D.ND) &&
						(b |= r.Ef);
					0 != (this.A.Vm & D.OD) && (b |= r.Sw);
					this.A.oa == D.TD && (b |= r.Sh);
					0 != (b & (r.Df | r.Ef | r.Sh)) && (this.h.hC(b), this.h.oa.reset(b));
					this.A.oa == D.QD && this.h.HI()
				}
			this.Vv = 255;
			a && (this.wc |= h.fm);
			this.cu();
			this.zl(-1, !1);
			this.qv();
			this.Ub = 0;
			this.vt(a);
			this.Et();
			this.yG();
			this.qu();
			this.v.rv();
			this.v.tp(this);
			this.$B();
			this.wp();
			this.Ol = 0;
			this.Jt();
			this.lt = !1
		},
		Bt: function () {
			if (0 < this.wf && null == this.h.lf) this.$q && (1 == this.h.Gj && (0 <= this.pr ? this.h.bd[this.pr] && (this.resume(), this.gb = 0, this.v.le(-458755)) : this.h.Gj &&
				(this.resume(), this.gb = 0, this.v.le(-458755))), this.h.Gj = !1), null != this.Yq && this.Yq.uG(), a = this.gb;
			else {
				this.h.et |= m.uw;
				var a = this.XF();
				this.h.et &= ~m.uw;
				0 != (this.wc & h.fm) && (this.Ry = (new Date).getTime() - this.hk, this.Yr(!0), this.v.Qr())
			}
			if (a == h.Jo || a == h.zs || a == h.Io) {
				this.h.zf = document.createElement("canvas");
				this.h.zf.width = this.h.ia;
				this.h.zf.height = this.h.na;
				var b = new Aa(this.h.zf);
				this.h.frame.lq ? b.zp(0, 0, this.ia, this.na) : b.lc(0, 0, this.ia, this.na, this.Pf);
				b.lc(0, 0, this.h.ia, this.h.na, this.h.Pf);
				this.h.Ud.mb(b,
					0, 0)
			}
			if (0 != a) switch (a) {
				case 5:
					this.pause();
					this.h.Gj = !1;
					this.$q = !0;
					a = 0;
					break;
				case 101:
					if (this.A.VN) break;
					this.Qy();
					this.iu();
					this.Yr(!1);
					this.zl(-1, !1);
					this.v.Qr();
					this.Qt();
					this.Rt();
					this.A.mi = this.A.ku = this.dk = 0;
					this.A.ni = this.A.lu = this.ek = 0;
					this.h.wB();
					this.ct();
					this.cu();
					this.zl(-1, !1);
					this.qv();
					this.vt(!1);
					this.Et();
					this.qu();
					this.v.rv();
					this.v.tp(this);
					this.Jt();
					this.$B();
					this.wp();
					this.Ol = a = 0;
					break;
				case 100:
				case -2:
					this.v.le(-196611)
			}
			return this.gb = a
		},
		TG: function (a) {
			var b;
			100 < this.gb && (this.gb =
				h.xs);
			b = this.Ol;
			this.pI();
			this.iu();
			this.Yr(a);
			this.v.Qr();
			this.Rt();
			this.Qt();
			this.zl(-1, !0);
			this.h.QF();
			return n.eE(this.gb, b)
		},
		cu: function () {
			var a;
			for (a = 0; a < this.qg; a++) this.G[a] = null
		},
		qv: function () {
			var a, b;
			this.wc |= h.zD;
			this.wc |= h.ss;
			var c = this.On = 0;
			this.O = Array(this.be);
			this.Ni = 0;
			for (a = this.h.Cc.ez(); null != a; a = this.h.Cc.iz())
				if (b = a.qe, b >= q.Se) {
					this.O[c] = new I;
					this.O[c].xF(a);
					this.O[c].Bn = -1;
					if (b == q.Tg || b == q.jx)
						for (b = this.A.jd.Sp(); null != b; b = this.A.jd.rn())
							if (b.jf == this.O[c].Hc) {
								this.O[c].Bn =
									b.oi;
								break
							} c++;
					a = a.ac;
					if (0 != (a.eg & z.Ug) && null != a.dg)
						for (b = 0; b < a.dg.pn; b++) {
							var d = a.dg.sd[b];
							d.Nu == O.lE && (this.Ni |= 1 << d.il - 1)
						}
				} for (c = 0; c < this.A.Fc; c++) this.A.Za[c].Pu = 1;
			return 0
		},
		ky: function () {
			var a, b, c, d, e;
			this.wc &= ~h.fm;
			c = 0;
			for (e = this.A.jd.Sp(); null != e; c++ , e = this.A.jd.rn())
				if (a = this.h.Cc.Cj(e.jf), b = a.ac, a = a.qe, !(a < q.Ff) && 0 == (b.eg & z.ox) && (d = h.Cw, e.nu == xa.qx)) {
					if (0 == (b.vi & z.$o)) {
						if (a != q.Tg) continue;
						d |= h.sk
					}
					0 == (b.eg & z.lx) && this.It(e.oi, e.jf, 2147483648, 2147483648, -1, d, -1, -1)
				} this.v.tp(this);
			this.hk =
				(new Date).getTime() - this.Ry
		},
		vt: function (a) {
			var b, c, d, e, f;
			d = 0;
			for (f = this.A.jd.Sp(); null != f; d++ , f = this.A.jd.rn())
				if (b = this.h.Cc.Cj(f.jf), c = b.ac, b = b.qe, e = h.Cw, f.nu == xa.qx) {
					b == q.Tg && (e |= h.es);
					if (0 == (c.vi & z.$o)) {
						if (b == q.jx) continue;
						e |= h.sk
					}
					a && b >= q.Ff && 0 == (c.eg & z.ox) || 0 == (c.eg & z.lx) && this.It(f.oi, f.jf, 2147483648, 2147483648, -1, e, -1, -1)
				} this.wc &= ~h.ss
		},
		iu: function () {
			var a;
			for (a = 0; a < this.qg && 0 != this.pb; a++)
				if (null != this.G[a]) {
					var b = this.G[a];
					(32 > b.Da || b.T.sf != h.vo) && this.Rp(a, !0)
				} for (a = 0; a < this.qg && 0 != this.pb; a++) null !=
					this.G[a] && (b = this.G[a], 32 <= b.Da && b.T.sf == h.vo && this.Rp(a, !0))
		},
		Yr: function (a) {
			a || (0 == (this.h.Mm & m.ED) ? this.h.cc.Jr() : this.h.cc.RG())
		},
		zl: function (a, b) {
			var c, d;
			d = -1 == a ? this.A.Fc : a + 1;
			for (c = 0; c < d; c++) {
				var e = this.A.Za[c];
				e.reset();
				e.IF();
				b && e.vy()
			}
		},
		wp: function () {
			0 != this.Ni && this.KB(-1)
		},
		Qt: function () {
			0 != this.Ni && this.KB(0)
		},
		KB: function (a) {
			0 <= a ? this.h.cw(1) : this.h.cw(-1)
		},
		$B: function () {
			this.h.cw(1)
		},
		at: function (a) {
			var b, c;
			for (c = 0; c < this.fk.size() && (b = this.fk.get(c), !n.rb(b.name, a)); c++);
			c == this.fk.size() &&
				(b = new lb, this.fk.add(b), c = this.fk.size() - 1, b.name = a, b.Ua = 0);
			return c
		},
		pI: function () {
			var a, b, c, d, e, f;
			for (c = 0; c < this.O.length; c++)
				if (b = this.O[c], f = b.$a, 32767 != b.Hc && 0 == (f & 2147483648) && (d = this.h.Cc.Cj(b.Hc), 0 != (d.wh & q.px) && (a = this.G[f], b.wd == q.Tg || b.wd == q.lm || null != a.qb))) {
					e = b.ql + b.wd.toString();
					null == this.h.$h && (this.h.$h = new L);
					var g = !1;
					d = null;
					for (a = 0; a < this.h.$h.size(); a++)
						if (d = this.h.$h.get(a), e == d.name) {
							g = !0;
							break
						} 0 == g ? (d = new xd, d.name = e, d.rf = new L, this.h.$h.add(d)) : d.rf.clear();
					for (; ;) {
						a = this.G[f];
						if (b.wd == q.Tg) f = new zd, f.text = a.Ql, f.bb = a.bb, d.rf.add(f);
						else if (b.wd == q.lm) f = new yd, f.value = a.qa, f.bb = a.bb, f.yc = a.yc, f.xr = a.xr, f.wr = a.wr, d.rf.add(f);
						else {
							e = new Ad;
							e.Ua = a.qb.zr;
							e.values = Array(a.qb.hd.length);
							for (f = 0; f < a.qb.hd.length; f++) e.values[f] = a.qb.hd[f];
							e.xg = Array(a.qb.de.length);
							for (f = 0; f < a.qb.de.length; f++) e.xg[f] = a.qb.de[f];
							d.rf.add(e)
						}
						f = a.Mb;
						if (0 != (f & 2147483648)) break
					}
				}
		},
		qu: function () {
			var a, b, c, d, e, f;
			if (null != this.h.$h)
				for (c = 0; c < this.O.length; c++)
					if (b = this.O[c], a = b.$a, 32767 != b.Hc && 0 <= a &&
						(e = this.h.Cc.Cj(b.Hc), 0 != (e.wh & q.px)))
						for (f = b.ql + b.wd.toString(), d = 0; d < this.h.$h.size(); d++)
							if (e = this.h.$h.get(d), f == e.name) {
								for (d = 0; ;) {
									a = this.G[a];
									if (b.wd == q.Tg) f = e.rf.get(d), a.Ql = f.text, a.bb = f.bb, a.b.K = !0, a.xN = !0;
									else if (b.wd == q.lm) f = e.rf.get(d), a.qa = f.value, a.bb = f.bb, a.yc = f.yc, a.xr = f.xr, a.wr = f.wr, a.vN = !0, a.b.K = !0;
									else {
										f = e.rf.get(d);
										a.qb.zr = f.Ua;
										a.qb.wz(f.values.length);
										a.qb.sG(f.xg.length);
										var g;
										for (g = 0; g < f.values.length; g++) a.qb.hd[g] = f.values[g];
										for (g = 0; g < f.xg.length; g++) a.qb.de[g] = f.xg[g]
									}
									a =
										a.Mb;
									if (0 != (a & 2147483648)) break;
									d++;
									if (d >= e.rf.size()) break
								}
								break
							}
		},
		It: function (a, b, c, d, e, f, g, l) {
			for (; ;) {
				var p = new Yb,
					m = null; - 1 != a && (m = this.A.jd.iG(a));
				var n = this.h.Cc.Cj(b),
					q = n.ac;
				0 == (q.vi & z.$o) && (f |= h.sk);
				if (this.pb >= this.qg) break;
				var k = null,
					r = new E;
				switch (n.qe) {
					case 2:
						k = new lc;
						break;
					case 3:
						k = new pc;
						break;
					case 4:
						k = new qc;
						break;
					case 5:
						k = new nc;
						break;
					case 6:
						k = new oc;
						break;
					case 7:
						k = new ba;
						break;
					case 8:
						break;
					case 9:
						k = new J;
						break;
					default:
						k = new rc(n.qe, this), null == k.ext && (k = null)
				}
				if (null == k) break;
				k.prototype =
					r;
				k.bH = m;
				if (0 > l)
					for (l = 0; l < this.qg && null != this.G[l]; l++);
				if (l >= this.qg) break;
				this.G[l] = k;
				this.pb++;
				k.zG = q.sf;
				k.ja = q.eg;
				l > this.BB && this.Tv++;
				k.Cb = l;
				this.On++;
				0 == this.On && (this.On = 1);
				k.Um = this.On;
				k.Ib = b;
				k.$p = a;
				k.Da = n.qe;
				this.AH(k);
				k.c = this;
				k.Tm = !0;
				k.T = q;
				0 == (k.ja & z.mx) && (k.ja &= ~z.ij, 0 != (k.ze & I.bp) && 0 != (this.A.Db & D.Uw) && (k.ja |= z.ij), 0 != (k.ze & (I.zd | I.cp)) && (k.ja |= z.ij));
				a = c;
				2147483648 == a && (a = m.ou);
				p.mF = a;
				k.u = a;
				2147483648 == d && (d = m.pu);
				p.nF = d;
				k.s = d;
				null != m && -1 == g && (g = m.Jz);
				p.ay = g;
				k.qd = g;
				g = this.A.Za[g];
				g.Pu++;
				p.by = g.Pu;
				p.um = f;
				p.$x = e;
				p.lF = m;
				k.b = null;
				0 != (k.ja & (z.Vh | z.Ug | z.Wh)) && (k.b = new mc, k.b.S());
				k.w = null;
				0 != (k.ja & z.Ug) && (k.w = new Ca, 0 == (p.um & h.Dw) && k.w.S(0, k, q, p, -1));
				k.ha = null;
				0 != (k.ja & z.Vh) && (k.ha = new Ea, k.ha.S(k));
				k.F = null;
				0 != (k.ja & z.Wh) && (k.F = new w, k.F.AG(k, q, p));
				k.qb = null;
				0 != (k.ja & z.AE) && (k.qb = new Ba, k.qb.S(k, q, p));
				k.S(q, p);
				0 != (k.ja & z.Wh) && k.F.fq(!0);
				1 <= this.Ub && k.ah();
				return l
			}
			return -1
		},
		Rp: function (a, b) {
			var c = this.G[a];
			if (null != c) {
				if (1 != b || 0 != c.Um) this.UG(c), null != c.w && c.w.sb(b), null != c.qb && c.qb.sb(b),
					null != c.F && c.F.sb(b), null != c.b && c.b.sb(b), c.sb(b), this.zH(c);
				this.G[a] = null;
				this.pb--
			}
		},
		bf: function (a) {
			this.gk[Math.floor(a / 32)] |= 1 << (a & 31);
			this.Un++
		},
		JF: function () {
			if (0 != this.Un)
				for (var a = 0, b, c; a < this.qg;) {
					b = this.gk[a / 32];
					if (0 != b) {
						for (c = this.gk[a / 32] = 0; 0 != b && 32 > c; c++) {
							if (0 != (b & 1)) {
								var d = this.G[a + c];
								null != d && 1 == d.hc.Bi && this.v.ad(d, d.Da | -2162688);
								this.Rp(a + c, !1);
								this.Un--
							}
							b >>= 1
						}
						if (0 == this.Un) break
					}
					a += 32
				}
		},
		UG: function (a) {
			var b = 0,
				c, d;
			for (c = 0; c < this.pb; c++) {
				for (; null == this.G[b];) b++;
				d = this.G[b];
				b++;
				null != d.w && d.b.Ic == O.dx && (d = d.w.aa, d.zk == a && 1 == d.Oo && d.eC())
			}
		},
		ah: function () {
			var a, b, c;
			for (c = a = 0; a < this.pb; a++) {
				for (; null == this.G[c];) c++;
				c++
			}
			for (c = a = 0; a < this.pb; a++) {
				for (; null == this.G[c];) c++;
				b = this.G[c];
				c++;
				b.ah()
			}
		},
		AH: function (a) {
			var b = a.Ib,
				c;
			for (c = 0; c < this.be && this.O[c].Hc != b; c++);
			b = this.O[c];
			0 != (b.$a & 2147483648) ? (b.$a = a.Cb, a.Vf = c | 2147483648, a.Mb = 2147483648) : (c = this.G[b.$a], a.Vf = c.Vf, c.Vf = a.Cb, a.Mb = c.Cb, b.$a = a.Cb);
			a.Zt = b.cv;
			a.hc = b;
			a.ze = b.vd; - 1 == a.$p ? a.$p = b.Bn : -1 == b.Bn && (b.Bn = a.$p);
			b.Bi += 1
		},
		zH: function (a) {
			var b =
				a.hc;
			--b.Bi;
			var c;
			0 == (a.Vf & 2147483648) ? (c = this.G[a.Vf], 0 == (a.Mb & 2147483648) ? (b = this.G[a.Mb], null != c && (c.Mb = a.Mb), null != b && (b.Vf = a.Vf)) : null != c && (c.Mb = 2147483648)) : 0 == (a.Mb & 2147483648) ? (c = this.G[a.Mb], null != c && (c.Vf = a.Vf, b.$a = c.Cb)) : b.$a = 2147483648
		},
		eD: function () {
			var a = this.Qw();
			if (null != a) {
				var b = 0,
					c;
				for (c = 0; c < this.pb; b++ , c++) {
					for (; null == this.G[b];) b++;
					var d = this.G[b];
					32 <= d.Da && (d.T.sf == h.sD || d.T.sf == h.PE || d.T.sf == h.FE || d.T.sf == h.KE || d.T.sf == h.dE ? d.ext.UH() : d.T.sf == h.vo && d.ext.UH())
				}
				for (c = b = 0; c < this.pb; b++ ,
					c++) {
					for (; null == this.G[b];) b++;
					d = this.G[b];
					if (0 != (d.ja & z.Ug)) {
						var e = !1;
						if (d.b.Ic == O.hj) {
							var f = d.T.dg.sd[d.w.Zv];
							if (n.rb(f.Ec, "box2d8directions") || n.rb(f.Ec, "box2dspring") || n.rb(f.Ec, "box2dspaceship") || n.rb(f.Ec, "box2dstatic") || n.rb(f.Ec, "box2dracecar") || n.rb(f.Ec, "box2daxial") || n.rb(f.Ec, "box2dplatform") || n.rb(f.Ec, "box2dbouncingball") || n.rb(f.Ec, "box2dbackground")) e = !0
						}
						0 == e && 2 == d.Da && a.JO(d)
					}
				}
				for (c = b = 0; c < this.pb; b++ , c++)
					for (; null == this.G[b];) b++
			}
		},
		Qw: function () {
			if (0 == this.zB) {
				this.zB = !0;
				this.Li =
					null;
				var a = 0,
					b;
				for (b = 0; b < this.pb; a++ , b++) {
					for (; null == this.G[a];) a++;
					var c = this.G[a];
					if (32 <= c.Da && c.T.sf == h.vo) {
						this.Li = c.ext;
						break
					}
				}
			}
			return this.Li
		},
		vs: function (a) {
			if (a && 0 == (a.W & E.Kg) && 0 != (a.ja & z.Ug) && a.b.Ic == O.hj) {
				var b = a.T.dg.sd[a.w.Zv];
				if (n.rb(b.Ec, "box2d8directions") || n.rb(b.Ec, "box2dspring") || n.rb(b.Ec, "box2dspaceship") || n.rb(b.Ec, "box2dstatic") || n.rb(b.Ec, "box2dracecar") || n.rb(b.Ec, "box2daxial") || n.rb(b.Ec, "box2dplatform") || n.rb(b.Ec, "box2dbouncingball") || n.rb(b.Ec, "box2dbackground")) return a.w.aa.td
			}
			return null
		},
		Bb: function (a) {
			return null != a.w && null != a.w.aa ? a.w.aa.Bb() : a.b.Fa
		},
		pause: function (a) {
			if (0 == this.wf) {
				this.wf = 1;
				this.yB = this.h.Ld;
				var b = 0,
					c;
				for (c = 0; c < this.pb; c++) {
					for (; null == this.G[b];) b++;
					b++
				}
				a || this.h.cc.pause()
			}
		},
		resume: function () {
			if (!this.wH && 0 != this.wf) {
				this.wf = 0;
				this.wp();
				var a = 0,
					b;
				for (b = 0; b < this.pb; b++) {
					for (; null == this.G[a];) a++;
					a++
				}
				this.h.cc.resume();
				a = this.h.Ld;
				a -= this.yB;
				this.hk += a;
				this.pr = 0;
				this.$q = !1
			}
		},
		Qy: function () {
			this.h.cc.Jr()
		},
		ci: function () {
			var a = 0,
				b;
			for (b = 0; b < this.pb; b++) {
				for (; null ==
					this.G[a];) a++;
				var c = this.G[a];
				a++;
				c.ci()
			}
		},
		Mf: function (a, b, c) {
			a = this.aJ(a, b, c);
			return null != a ? a.top : h.Pe
		},
		aJ: function (a, b, c) {
			b -= this.ca;
			c -= this.ea;
			var d; - 1 == a ? (d = 0, a = this.A.Fc) : (d = a, a += 1);
			for (; d < a; d++) {
				var e = this.A.Za[d].jG(b, c);
				if (null != e) return e
			}
			return null
		},
		Jt: function () {
			this.hk = this.h.Ld;
			this.Un = this.Yv = this.gb = this.Ub = this.Oi = 0;
			var a;
			for (a = 0; a < (this.qg + 31) / 32; a++) this.gk[a] = 0;
			this.Qv = this.A.bn;
			this.Rv = this.A.an;
			this.Gl = -h.Nw;
			this.Kl = -h.Ow;
			this.El = this.$d + h.Nw;
			this.Il = this.ae + h.Ow;
			this.dk = a =
				this.ca;
			a -= h.am;
			0 > a && (a = this.Gl);
			this.Fl = a;
			this.ek = a = this.ea;
			a -= h.bm;
			0 > a && (a = this.Kl);
			this.Jl = a;
			a = this.ca;
			a += this.Qv + h.am;
			a > this.$d && (a = this.El);
			this.Dl = a;
			a = this.ea;
			a += this.Rv + h.bm;
			a > this.ae && (a = this.Il);
			this.Hl = a;
			for (a = this.wf = this.Nl = this.Sv = this.Pv = 0; 4 > a; a++) this.Lc[a] = 0, this.ir[a] = 0, this.hr[a] = 255;
			this.bk = 0;
			this.v.ot = !1;
			this.v.Sn = !1;
			this.pr = 0;
			this.Li = null;
			this.zB = !1;
			this.Uv = this.lr = this.kr = this.AB = null;
			for (a = 0; a < h.Ko; a++) this.nr[a] = 20;
			this.Ll = 0
		},
		XF: function () {
			this.h.cc.kF();
			if (null != this.h.sa &&
				this.h.Yf) return this.hk = this.h.Ld, this.Oi = 0, this.gb;
			if (null != this.h.lf) return this.h.lf.handle(), 0;
			this.lt || (this.eD(), this.lt = !0);
			var a = this.h.Ld - this.hk,
				b = this.Oi;
			this.Oi = a;
			this.Wn = a -= b;
			this.Nl += a;
			this.Ub += 1;
			this.mc = this.Wn * this.A.Pz / 1E3;
			this.nr[this.Ll] = a;
			this.Ll++;
			this.Ll >= h.Ko && (this.Ll = 0);
			for (a = 0; 4 > a; a++) this.ir[a] = this.Lc[a];
			this.QG();
			1 == this.h.kh ? this.Lc[0] |= this.h.oa.Wp() & this.Vv : 2 == this.h.kh && (this.Lc[0] |= this.h.Wp() & this.Vv);
			if (0 != this.Ni)
				for (this.Tt(), this.bk = 0, this.h.bd[m.Te] && (this.bk |=
					16), this.h.bd[m.lp] && (this.bk |= 32), a = 0; a < this.Xv; a++) 0 != (this.xO & 1) && (b = this.Lc[a] & 207, b |= this.bk, this.Lc[a] = b);
			else this.Tt();
			for (a = 0; 4 > a; a++)
				if (b = this.Lc[a] & h.MH[4 * this.Xv + a], b &= this.hr[a], this.Lc[a] = b, b ^= this.ir[a], this.Nv[a] = b, 0 != b)
					if (b &= this.Lc[a], 0 != (b & 240)) this.v.CB = a, b = this.Nv[a], 0 != (b & 240) && (this.v.Kc = b, this.v.le(-196615)), 0 != (b & 15) && (this.v.Kc = b, this.v.le(-196615));
					else {
						var c = this.v.Pb[this.v.se[-q.ix] + 4];
						0 != c && (this.v.Kc = b, this.v.$e(c, null))
					} if (0 != this.pb) {
						a = this.pb;
						b = 0;
						do {
							for (this.Tv =
								0; null == this.G[b];) b++;
							c = this.G[b];
							c.yz = c.Zp;
							c.Zp = null;
							c.Tm && (this.BB = b, c.handle());
							a += this.Tv;
							b++;
							a--
						} while (0 != a)
					}
			this.Tc++;
			this.v.vF();
			this.v.xG();
			this.v.EB && 0 == (this.wc & h.fm) && this.v.$e(0, null);
			this.v.wG();
			this.JF();
			this.doScroll();
			this.v.Mv = -1;
			this.Sv++;
			if (0 == this.gb) return this.Yv;
			this.gb != h.Jo && this.gb != h.zs && this.gb != h.xs && this.gb != h.Io && this.gb != h.aE && this.gb != h.ys || this.v.le(-65539);
			return this.gb
		},
		QG: function () {
			var a;
			for (a = 0; 4 > a; a++) this.Lc[a] = 0;
			var b = this.h.cG();
			for (a = 0; 4 > a; a++) {
				var c;
				for (c = 0; c < m.gm; c++) this.h.bd[b[a * m.gm + c]] && (this.Lc[a] |= 1 << c)
			}
		},
		Tt: function () {
			this.Rn = this.h.mf + this.ca - this.h.Af;
			this.Cl = this.h.nf + this.ea - this.h.Bf
		},
		qf: function (a) {
			a.w.M = !1;
			h.Fx = !1;
			a.w.Zn = 0;
			var b, c;
			0 != (a.ze & I.cp) && (b = this.zv(a.b.Ev, a.b.Gv, a.b.Fv, a.b.Hv), 0 != b && (c = this.zv(a.u - a.fa, a.s - a.ga, a.u - a.fa + a.J, a.s - a.ga + a.I), 0 == c && (b ^= c, 0 != b && (a.w.Zn |= Ca.kD, this.v.Kc = b, this.v.ad(a, -720896 | a.Da & 65535)))), b = this.zv(a.u - a.fa, a.s - a.ga, a.u - a.fa + a.J, a.s - a.ga + a.I), 0 != (b & a.w.$v) && (c = a.w.M, 0 != (b & h.Hg) ? a.w.aa.Xb(a.u +
				this.$d) : 0 != (b & h.Ig) && a.w.aa.Xb(a.u - this.$d), 0 != (b & h.Jg) ? a.w.aa.Lb(a.s + this.ae) : 0 != (b & h.Gg) && a.w.aa.Lb(a.s - this.ae), a.b.Ic != O.Ps && a.b.Ic != O.hj && (a.w.M = c)), b = this.Wj(a.b.Ev, a.b.Gv, a.b.Fv, a.b.Hv), b != h.HC && (c = this.Wj(a.u - a.fa, a.s - a.ga, a.u - a.fa + a.J, a.s - a.ga + a.I), b = ~b & c, 0 != b && (a.w.Zn |= Ca.lD, this.v.Kc = b, this.v.ad(a, -786432 | a.Da & 65535))));
			0 != (a.ze & I.bp) && (a.b.Ic == O.Ps ? a.w.aa.uH() : this.vm(a, a.b.Ia, a.b.ab, a.b.vb, a.b.wb, a.u, a.s, 0, D.ge) && this.v.ad(a, -851968 | a.Da & 65535));
			if (0 != (a.ze & I.nm) && (b = this.ll(a, a.b.Ia,
				a.b.ab, a.b.vb, a.b.wb, a.u, a.s, a.hc.zi), null != b))
				for (c = 0; c < b.size(); c++) {
					var d = b.get(c);
					if (0 == (d.W & E.Kg)) {
						var e = a.Da,
							f = a,
							g = d;
						f.Da > g.Da && (f = d, g = a, e = f.Da);
						this.v.Kc = g.Ib;
						this.v.xB = g.Cb;
						this.v.ad(f, -917504 | e & 65535)
					}
				}
			return h.Fx
		},
		ll: function (a, b, c, d, e, f, g, l) {
			var p = null;
			f -= a.fa;
			var h = f + a.J;
			g -= a.ga;
			var m = g + a.I,
				n, k;
			if (0 != (a.W & E.Lg) || 0 != (a.W & E.Kg)) return p;
			var r = !1,
				v = null,
				z = -1;
			a.Da == q.Se && 0 == (a.F.U & w.Fk) && (r = !0);
			a.Da == q.Se && (z = a.F.Pl);
			var t = a.W;
			a.W |= E.Lg;
			var u = 0,
				A, R, C;
			if (null != l)
				for (u = 0; u < l.length; u += 2)
					for (var D =
						this.O[l[u + 1]].$a; 0 == (D & 2147483648);) {
						if (A = this.G[D], D = A.Mb, 0 == (A.W & E.Lg) && 0 == (A.W & E.Kg) && (R = A.u - A.fa, C = A.s - A.ga, R < h && R + A.J > f && C < m && C + A.I > g)) switch (A.Da) {
							case q.Se:
								(0 > z || 0 <= z && z == A.F.Pl) && 0 != (A.F.U & w.jj) && (0 == r || 0 != (A.F.U & w.Fk) ? (null == p && (p = new L), p.add(A)) : (null == v && (k = this.h.$.Hb(b), null != k && (v = k.Rf(0, c, d, e))), k = this.h.$.Hb(A.b.Ia), null != k && (n = k.Rf(0, A.b.ab, A.b.vb, A.b.wb)), null != v && null != n && v.Ui(f, g, 0, n, R, C, 0) && (null == p && (p = new L), p.add(A))));
								break;
							case q.Tg:
							case q.lm:
							case q.Qs:
							case q.Yo:
							case q.fx:
								null ==
									p && (p = new L);
								p.add(A);
								break;
							default:
								null == p && (p = new L), p.add(A)
						}
					} else
				for (l = 0; l < this.pb; l++) {
					for (; null == this.G[u];) u++;
					A = this.G[u];
					u++;
					if (0 == (A.W & E.Lg) && (R = A.u - A.fa, C = A.s - A.ga, R < h && R + A.J > f && C < m && C + A.I > g)) switch (A.Da) {
						case q.Se:
							(0 > z || 0 <= z && z == A.F.Pl) && 0 != (A.F.U & w.jj) && (0 == r || 0 != (A.F.U & w.Fk) ? (null == p && (p = new L), p.add(A)) : (null == v && (k = this.h.$.Hb(b), null != k && (v = k.Rf(0, c, d, e))), k = this.h.$.Hb(A.b.Ia), null != k && (n = k.Rf(0, A.b.ab, A.b.vb, A.b.wb)), null != v && null != n && v.Ui(f, g, 0, n, R, C, 0) && (null == p && (p = new L), p.add(A))));
							break;
						case q.Tg:
						case q.lm:
						case q.Qs:
						case q.Yo:
						case q.fx:
							null == p && (p = new L);
							p.add(A);
							break;
						default:
							null == p && (p = new L), p.add(A)
					}
				}
			a.W = t;
			return p
		},
		vm: function (a, b, c, d, e, f, g, l, p) {
			b = this.A.Za[a.qd];
			switch (a.Da) {
				case q.Se:
					if (0 == (a.F.U & w.Fk)) {
						if (a = this.h.$.Hb(a.b.Ia), null != a) return a = a.Rf(B.vk, c, d, e), null != b.Ui(a, f - this.ca, g - this.ea, l, p)
					} else return f = f - a.fa - this.ca, g = g - a.ga - this.ea, c = f + a.J, a = g + a.I, l = null != b.Kr(f, g, c, a, l, p);
					return !1;
				default:
					return f = f - a.fa - this.ca, g = g - a.ga - this.ea, c = f + a.J, a = g + a.I, l = null !=
						b.Kr(f, g, c, a, l, p)
			}
		},
		Wj: function (a, b, c, d) {
			var e = 0;
			0 > a && (e |= h.Hg);
			0 > b && (e |= h.Jg);
			c > this.$d && (e |= h.Ig);
			d > this.ae && (e |= h.Gg);
			return h.wx[e]
		},
		zv: function (a, b, c, d) {
			var e = 15;
			a < this.$d && (e &= ~h.Ig);
			b < this.ae && (e &= ~h.Gg);
			0 < c && (e &= ~h.Hg);
			0 < d && (e &= ~h.Jg);
			return h.wx[e]
		},
		random: function (a) {
			var b = 31415 * this.Ov + 1;
			this.Ov = b &= 65535;
			return b * a >>> 16
		},
		sz: function (a) {
			if (0 == a || -1 == a) return this.random(32);
			var b, c = 0,
				d = 0,
				e = a;
			for (b = 0; 32 > b; b++) 0 != (e & 1) && (d++ , c = b), e >>>= 1;
			if (1 == d) return c;
			d = this.random(d);
			e = a;
			for (b = 0; 32 > b; b++) {
				if (0 !=
					(e & 1) && (d-- , 0 > d)) return b;
				e >>>= 1
			}
			return 0
		},
		pG: function (a) {
			this.Tn = a.Aa;
			this.xf = 0;
			this.Xk = !1;
			return this.getExpression()
		},
		gh: function (a) {
			this.Tn = a.Aa;
			this.xf = 0;
			this.Xk = !1;
			return this.getExpression()
		},
		tz: function () {
			this.Xk = !1;
			var a = this.getExpression();
			return 0 > a ? Math.ceil(a) : Math.floor(a)
		},
		getExpression: function () {
			var a, b = this.kb;
			this.Ml[this.kb] = this.or;
			do {
				this.kb++;
				this.Tn[this.xf].evaluate(this);
				this.xf++;
				do
					if (a = this.Tn[this.xf], 0 < a.code && 1310720 > a.code) a.code > this.Ml[this.kb - 1].code ? (this.Ml[this.kb] =
						a, this.xf++ , this.kb++ , this.Tn[this.xf].evaluate(this), this.xf++) : (this.kb-- , this.Ml[this.kb].evaluate(this));
					else {
						this.kb--;
						if (this.kb == b) break;
						this.Ml[this.kb].evaluate(this)
					} while (1)
			} while (this.kb > b + 1);
			return this.Jc[b + 1]
		},
		nw: function (a, b, c) {
			a++;
			var d = 0,
				e;
			for (e = 0; e < this.pb; e++) {
				for (; null == this.G[d];) d++;
				var f = this.G[d];
				if (f.Da == b) switch (b) {
					case 5:
						f.Jh == a && f.Ir(c);
						break;
					case 6:
						f.Jh == a && f.Ir(c)
				}
				d++
			}
		},
		WE: function (a, b) {
			var c = this.h.Nm();
			b != c[a] && (0 == b && 0 != c[a] && this.v.hB(0, -262151, 0, null, a), c[a] = b,
				this.nw(a, q.Qs, b))
		},
		Dz: function (a) {
			var b = !1,
				c = 0;
			if (0 != (a.ja & z.Vh)) {
				if (null != a.F && a.F.BG()) return;
				null != a.ha && a.ha.Jf(t.rk) && (c = 1)
			}
			0 == c && (b = !0);
			b ? (a.Tm = !1, this.bf(a.Cb)) : (null != a.F && (a.F.Br(!1), a.W |= E.Lg), null != a.w && (a.w.sb(!1), a.w.Bz(a, O.kE, !1), a.b.X = 0), 0 != (c & 1) && (a.ha.rp(t.rk), a.ha.sp()))
		},
		Et: function () {
			var a, b = new Z,
				c;
			for (c = 0; c < this.A.Fc; c++) {
				var d = this.A.Za[c],
					e = 0 != (d.ya & S.qs),
					f = 0 != (d.ya & S.rs),
					g = d.Eq,
					l;
				for (l = 0; l < g; l++) {
					a = this.A.jd.hz(d.Gq + l);
					a.oq < q.Se && (b.left = a.ou, b.top = a.pu);
					var p;
					p = new ga(this.h,
						b.left, b.top, a, null, 0);
					p.Zc(0, d);
					e ? (p = new ga(this.h, this.A.cd + b.left, b.top, a, null, 0), p.Zc(1, d), b.left + p.width > this.A.cd && (p = new ga(this.h, b.left - this.A.cd, b.top, a, null, 0), p.Zc(4, d)), f && (p = new ga(this.h, b.left, this.A.ic + b.top, a, null, 0), p.Zc(2, d), p = new ga(this.h, this.A.cd + b.left, this.A.ic + b.top, a, null, 0), p.Zc(3, d), b.top + p.height > this.A.ic && (p = new ga(this.h, b.left, b.top - this.A.ic, a, null, 0), p.Zc(5, d)))) : f && (p = new ga(this.h, b.left, this.A.ic + b.top, a, null, 0), p.Zc(2, d), b.top + p.height > this.A.ic && (p = new ga(this.h,
						b.left, b.top - this.A.ic, a, null, 0), p.Zc(5, d)))
				}
			}
		},
		wI: function () {
			var a, b, c = this.dk,
				d = this.ek,
				e, f;
			for (a = 0; a < this.A.Fc; a++) {
				b = this.A.Za[a];
				e = c * b.Yl + b.Np;
				f = d * b.Zl + b.Op;
				var g = 0 != (b.ya & S.rs);
				0 != (b.ya & S.qs) && (0 > e && (e = e % this.A.cd + this.A.cd), e > this.A.cd && (e %= this.A.cd));
				g && (0 > f && (f = f % this.A.ic + this.A.ic), f > this.A.ic && (f %= this.A.ic));
				b.x = e;
				b.y = f;
				b.Rb.x = -e + this.h.Af;
				b.Rb.y = -f + this.h.Bf;
				b.ub.x = -e + this.h.Af;
				b.ub.y = -f + this.h.Bf;
				b.Ea.x = -e + this.h.Af;
				b.Ea.y = -f + this.h.Bf
			}
			this.A.mi = this.dk;
			this.A.ni = this.ek
		},
		yG: function () {
			var a;
			for (a = 0; a < this.A.Fc; a++) {
				var b = this.A.Za[a];
				b.ya & S.dm && b.Yp()
			}
		},
		ZI: function (a, b) {
			var c = 0;
			this.rr = a - this.ca;
			0 != this.rr && c++;
			this.sr = b - this.ea;
			0 != this.sr && c++;
			var d, e;
			if (0 == c)
				for (e = 0; e < this.A.Fc; e++)
					if (d = this.A.Za[e], 0 != d.Np || 0 != d.Op) {
						c++;
						break
					} e = this.ca;
			var f = this.ea,
				g = this.rr,
				l = this.sr;
			this.ca = a;
			this.Fl = a - h.am;
			0 > this.Fl && (this.Fl = this.Gl);
			this.ea = b;
			this.Jl = b - h.bm;
			0 > this.Jl && (this.Jl = this.Kl);
			this.Dl = a + this.Qv + h.am;
			this.Dl > this.$d && (this.Dl = this.El);
			this.Hl = b + this.Rv + h.bm;
			this.Hl > this.ae && (this.Hl =
				this.Il);
			var p = 0,
				m;
			for (m = 0; m < this.pb; m++) {
				for (; null == this.G[p];) p++;
				var n = this.G[p];
				p++;
				if (0 != c)
					if (0 != (n.ja & z.zE)) {
						d = g;
						var q = l;
						null == n.w ? (n.u += d, n.s += q) : (d += n.u, q += n.s, n.w.aa.Xb(d), n.w.aa.Lb(q))
					} else if (d = n.qd, d < this.A.Fc) {
						var k = e,
							q = f,
							r = a,
							v = b;
						d = this.A.Za[d];
						0 != (d.ya & S.uD) && (k *= d.Yl, r *= d.Yl);
						0 != (d.ya & S.vD) && (q *= d.Zl, v *= d.Zl);
						k = n.u + k - r + g - d.Np;
						d = n.s + q - v + l - d.Op;
						0 == (n.ja & z.Ug) ? (n.u = k, n.s = d) : (n.w.aa.Xb(k), n.w.aa.Lb(d));
						n.Yk()
					}
			}
		},
		doScroll: function () {
			if (0 != (this.Pv & h.JE)) {
				this.Pv = 0;
				if (this.A.mi != this.dk ||
					this.A.ni != this.ek) this.wI(), this.ZI(this.A.mi, this.A.ni);
				this.dk = this.ca;
				this.ek = this.ea
			}
		},
		mp: function (a, b, c, d, e, f) {
			d = this.A.Za[d];
			var g = new ga(this.h, b - this.ca + d.x, c - this.ca + d.y, null, a, e);
			g.Zc(0, d);
			!f || e != Y.Zo && e != Y.If || null == this.Li || (g.body = this.Li.IO(pHo.u - this.ca + d.x, pHo.s - this.ea + d.y, pHo.b.Ia, e));
			f = 0 != (d.ya & S.rs);
			0 != (d.ya & S.qs) ? (g = new ga(this.h, this.A.cd + b - this.ca + d.x, c - this.ea + d.y, null, a, e), g.Zc(1, d), b + g.width > this.A.cd && (g = new ga(this.h, b - this.ca + d.x - this.A.cd, c - this.ea + d.y, null, a, e), g.Zc(4,
				d)), f && (g = new ga(this.h, b - this.ca + d.x, this.A.ic + c - this.ea + d.y, null, a, e), g.Zc(2, d), g = new ga(this.h, this.A.cd + b - this.ca + d.x, this.A.ic + c - this.ea + d.y, null, a, e), g.Zc(3, d), c + g.height > this.A.ic && (g = new ga(this.h, b - this.ca + d.x, c - this.ea + d.y - this.A.ic, null, a, e), g.Zc(5, d)))) : f && (g = new ga(this.h, b - this.ca + d.x, this.A.ic + c - this.ea + d.y, null, a, e), g.Zc(2, d), c + g.height > this.A.ic && (g = new ga(this.h, b - this.ca + d.x, c - this.ea + d.y - this.A.ic, null, a, e), g.Zc(5, d)))
		},
		mG: function () {
			return 0 != this.Ni ? 0 : this.Cl
		},
		DH: function (a) {
			0 >
				a ? this.v.le(-720902) : this.v.le(-655366)
		},
		Ty: function (a) {
			var b, c;
			if (0 != this.pb)
				for (b = 0; b < this.qg; b++)
					if ((c = this.G[b]) && c.hc.ql == a) return this.Mt = c.hc.Bi - 1, c;
			return null
		},
		Uy: function (a) {
			if (a && this.Mt) {
				var b = a.Cb + 1;
				a = a.hc.ql;
				for (var c; ;) {
					c = this.G[b];
					if (null != c && c.hc.ql == a) return this.Mt-- , c;
					b++
				}
			}
			this.Mt = 0;
			return null
		}
	};
	Yb.sk = 2;
	I.wM = 15;
	I.DE = 16;
	I.nm = 128;
	I.zd = 256;
	I.bp = 512;
	I.cp = 1024;
	I.xM = 2048;
	I.ep = 4096;
	I.CE = 65535;
	I.prototype = {
		xF: function (a) {
			this.Hc = a.zn;
			this.wd = a.qe;
			var b = a.ac;
			this.UA = b.vi;
			this.TA = a.Xu;
			this.SA = a.Yu;
			this.Nq = b.eg;
			this.Wd = 0;
			this.$a = -1;
			this.vd = I.CE;
			null != a.Zu && (this.ql = a.Zu);
			this.rl = Array(8);
			for (a = 0; 8 > a; a++) this.rl[a] = b.Uu[a]
		}
	};
	aa.jE = 0;
	aa.DL = 1;
	aa.GL = 2;
	aa.EL = 3;
	aa.AL = 4;
	aa.BL = 5;
	aa.CL = 6;
	aa.zL = 7;
	aa.FL = 8;
	aa.HL = 9;
	aa.wL = 0;
	aa.uL = 1;
	aa.yL = 2;
	aa.vL = 3;
	aa.xL = 4;
	aa.vJ = 123456789;
	aa.prototype = {
		PD: function () {
			m_currentAngle = 0
		},
		S: function (a) {
			this.V = a;
			this.Tb = this.V.c
		},
		sb: function () { },
		move: function () {
			return !1
		},
		setPosition: function () { },
		Xb: function () { },
		Lb: function () { },
		stop: function () { },
		Lf: function () { },
		reverse: function () { },
		start: function () { },
		Le: function () { },
		ug: function () { },
		te: function () { },
		Fr: function () { },
		Dr: function () { },
		zt: function (a) {
			return this.V.w.zt(this.V, a, 32)
		},
		qm: function (a) {
			this.V.b.Zd = a;
			null != this.V.ha && this.V.ha.we()
		},
		Wp: function (a) {
			return this.V.c.Lc[a]
		},
		Ar: function () { }
	};
	t.Nd = 0;
	t.qc = 1;
	t.fe = 2;
	t.so = 3;
	t.rk = 4;
	t.BC = 5;
	t.to = 6;
	t.tw = 7;
	t.sw = 8;
	t.rw = 9;
	t.as = 10;
	t.uo = 11;
	t.wJ = 12;
	t.QI = [0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	t.prototype = {
		load: function (a) {
			var b = a.ba,
				c = Array(32),
				d;
			for (d = 0; 32 > d; d++) c[d] = a.m();
			this.Ad = Array(32);
			this.Yg =
				Array(32);
			this.bi = Array(32);
			for (d = 0; 32 > d; d++) this.Ad[d] = null, this.Yg[d] = 0, this.bi[d] = 0, 0 != c[d] && (this.Ad[d] = new Zb, a.seek(b + c[d]), this.Ad[d].load(a))
		},
		Yb: function (a) {
			var b;
			for (b = 0; 32 > b; b++) null != this.Ad[b] && this.Ad[b].Yb(a)
		},
		dF: function (a) {
			var b, c, d, e, f;
			for (b = 0; 32 > b; b++)
				if (null == this.Ad[b]) {
					c = 0;
					for (e = b + 1; 32 > c; c++ , e++)
						if (e &= 31, null != this.Ad[e]) {
							this.Yg[b] = e;
							break
						} d = 0;
					for (f = b - 1; 32 > d; d++ , f--)
						if (f &= 31, null != this.Ad[f]) {
							this.bi[b] = f;
							break
						} e == f || c < d ? this.Yg[b] |= 64 : d < c && (this.bi[b] |= 64)
				} else 16 > a && 0 == t.QI[a] &&
					(this.Ad[b].$s = this.Ad[b].Zs)
		}
	};
	Ia.jC = [t.so, t.qc, t.fe, 0, t.fe, t.Nd, 0, 0, t.qc, t.Nd, 0, 0, t.Nd, t.qc, t.fe, 0, t.Nd, 0, 0, 0, t.Nd, t.qc, t.fe, 0, t.Nd, t.qc, t.fe, 0, t.qc, t.fe, t.Nd, 0, t.Nd, t.qc, t.fe, 0, t.qc, t.fe, t.Nd, 0, t.Nd, t.qc, t.fe, 0, t.Nd, t.qc, t.fe, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	Ia.prototype = {
		load: function (a) {
			var b = a.ba;
			a.la(2);
			this.Ue = a.m();
			var c = Array(this.Ue),
				d;
			for (d = 0; d < this.Ue; d++) c[d] = a.m();
			this.Ve = Array(this.Ue);
			this.ai = Array(this.Ue);
			for (d = 0; d < this.Ue; d++) this.Ve[d] = null, this.ai[d] = 0, 0 != c[d] && (this.Ve[d] =
				new t, a.seek(b + c[d]), this.Ve[d].load(a), this.ai[d] = 1);
			for (a = 0; a < this.Ue; a++)
				if (0 == this.ai[a]) {
					b = !1;
					if (12 > a)
						for (d = 0; 4 > d; d++)
							if (0 != this.ai[Ia.jC[4 * a + d]]) {
								this.Ve[a] = this.Ve[Ia.jC[4 * a + d]];
								b = !0;
								break
							} if (0 == b)
						for (d = 0; d < this.Ue; d++)
							if (0 != this.ai[d]) {
								this.Ve[a] = this.Ve[d];
								break
							}
				} else this.Ve[a].dF(a)
		},
		Yb: function (a) {
			var b;
			for (b = 0; b < this.Ue; b++) 0 != this.ai[b] && this.Ve[b].Yb(a)
		}
	};
	Zb.prototype = {
		load: function (a) {
			this.$s = a.jb();
			this.Zs = a.jb();
			this.zx = a.m();
			this.Ax = a.m();
			this.Jk = a.m();
			this.oj = Array(this.Jk);
			var b;
			for (b = 0; b < this.Jk; b++) this.oj[b] = a.m()
		},
		Yb: function (a) {
			var b;
			for (b = 0; b < this.Jk; b++)
				if (null != a) {
					var c = a.eh(this.oj[b]); - 1 != c && (this.oj[b] = c)
				}
		}
	};
	Ea.dt = [t.Nd, t.qc, t.fe, t.BC, t.to, t.tw, t.sw, t.rw, t.as, t.uo, 12, 13, 14, 15, -1];
	Ea.prototype = {
		S: function (a) {
			this.a = a;
			this.yl = 0;
			this.Cz(t.qc);
			if (this.Jf(t.so)) this.yl = 1, this.rp(t.so), this.sp(), this.qm();
			else {
				for (a = 0; 0 <= Ea.dt[a] && !this.Jf(Ea.dt[a]); a++);
				0 > Ea.dt[a] && this.Jf(t.rk) && (this.yl = 2, this.rp(t.rk), this.sp(), this.qm())
			}
		},
		Cz: function (a) {
			this.a.b.Zd = a;
			this.Cv = !1;
			this.lg = this.Kn = this.wl = this.Yj = this.br = this.kg = 0;
			this.cr = this.Fi = this.Mn = -1;
			this.Ln = this.Yd = null;
			this.qm()
		},
		we: function () {
			switch (this.yl) {
				case 0:
					return this.qm();
				case 1:
					this.aF();
					break;
				case 2:
					this.bF()
			}
			return !1
		},
		qm: function () {
			var a = this.a.u;
			this.a.b.Gi = a;
			a -= this.a.fa;
			this.a.b.Ev = a;
			a += this.a.J;
			this.a.b.Fv = a;
			a = this.a.s;
			this.a.b.Hi = a;
			a -= this.a.ga;
			this.a.b.Gv = a;
			a += this.a.I;
			this.a.b.Hv = a;
			this.a.b.er = this.a.b.Ia;
			this.a.b.dr = this.a.b.ab;
			return this.Lk(1)
		},
		Lk: function (a) {
			var b = this.a.T,
				c = this.a.b.X,
				d = this.a.b.Zd;
			0 != this.Yj && (c = this.Yj - 1);
			d == t.qc && (0 == c && (d = t.Nd), 75 <= c && (d = t.fe));
			0 != this.kg && (d = this.kg - 1);
			d != this.Mn && (this.Mn = d, d >= b.ti.Ue && (d = b.ti.Ue - 1), b = b.ti.Ve[d], b != this.Yd && (this.Yd = b, this.ar = -1, this.lg = 0, 0 == (this.a.ja & z.yE) && (this.Kn = 0)));
			var e = this.a.b.Fa % 32,
				b = !1;
			0 != this.br && (e = this.br - 1);
			if (this.ar != e && (this.ar = e, d = this.Yd.Ad[e], null == d ? 0 != (this.Yd.bi[e] & 64) ? e = this.Yd.bi[e] & 63 : 0 != (this.Yd.Yg[e] & 64) ? e = this.Yd.Yg[e] & 63 : (d = e, 0 > this.cr ? e = this.Yd.Yg[e] & 63 : (e -= this.cr, e = 15 < (e & 31) ? this.Yd.Yg[d] & 63 : this.Yd.bi[d] &
				63)) : this.cr = e, d = this.Yd.Ad[e], null != this.Yd.Ad[0] && 0 != (this.a.T.vi & z.uE) && (this.a.b.ab = 360 * this.ar / 32, d = this.Yd.Ad[0], this.Ln = null, b = !0), this.Ln != d)) {
				this.Ln = d;
				this.Xj = d.zx;
				this.mB = d.Ax;
				var e = d.$s,
					f = d.Zs;
				if (e != this.Fi || f != this.xl) this.Fi = e, this.xl = f, this.lB = f - e, this.vl = e, this.Bv = -1;
				this.mg = d.Jk;
				0 != this.wl && this.wl - 1 >= this.mg && (this.wl = 0);
				this.lg >= this.mg && (this.lg = 0);
				d = d.oj[this.lg];
				0 == this.Cv && (this.a.b.Ia = d, d = this.a.c.h.$.Bj(d, this.a.b.ab, this.a.b.vb, this.a.b.wb), null != d && (this.a.J = d.width, this.a.I =
					d.height, this.a.fa = d.wa, this.a.ga = d.va, this.a.$t = d.Eg, this.a.au = d.Fg), this.a.b.K = !0, this.a.b.Ha = !0);
				if (1 == this.mg) {
					0 == this.Fi && (this.mg = 0);
					d = this.a.b.Ia;
					if (0 == d) return !1;
					d = this.a.c.h.$.Bj(d, this.a.b.ab, this.a.b.vb, this.a.b.wb);
					null != d && (this.a.J = d.width, this.a.I = d.height, this.a.fa = d.wa, this.a.ga = d.va, this.a.$t = d.Eg, this.a.au = d.Fg);
					return !1
				}
			}
			if (0 == a && 0 == this.wl || 0 == b && 0 == this.mg) return !1;
			a = this.lB;
			c != this.Bv && (this.Bv = c, 0 == a ? (this.vl = this.Fi, 0 != this.Yj && (this.vl = this.Yj - 1)) : (d = this.a.b.Ra - this.a.b.Dh,
				0 == d ? 0 != this.Yj ? (a = a * c / 100 + this.Fi, a > this.xl && (a = this.xl)) : (a /= 2, a += this.Fi) : (a = a * c / d + this.Fi, a > this.xl && (a = this.xl)), this.vl = a));
			d = this.Ln;
			a = this.wl;
			if (0 == a) {
				if (0 == this.vl || this.Cv) return !1;
				c = this.Kn;
				a = this.lg;
				e = this.vl;
				0 != (this.a.c.A.Db & D.Bc) && (e = Math.round(e * this.a.c.mc));
				for (c += e; 100 < c;)
					if (c -= 100, a++ , a >= this.mg && (a = this.mB, 0 != this.Xj && (this.Xj-- , 0 == this.Xj))) {
						this.lg = this.mg - 1;
						this.mg = 0;
						0 != this.kg && (this.Yj = this.br = this.kg = 0);
						this.lg < d.Jk && (d = d.oj[this.lg], d != this.a.b.Ia && (this.a.b.Ia = d, this.a.b.K = !0, this.a.b.Ha = !0));
						this.Kn = c;
						if (0 != (this.a.c.wc & h.ss)) return !1;
						b && (this.a.b.K = !0, this.a.b.Ha = !0, d = this.a.c.h.$.Bj(this.a.b.Ia, this.a.b.ab, this.a.b.vb, this.a.b.wb), null != d && (this.a.J = d.width, this.a.I = d.height, this.a.fa = d.wa, this.a.ga = d.va, this.a.$t = d.Eg, this.a.au = d.Fg));
						c = -131072;
						c |= this.a.Da & 65535;
						this.a.c.v.Kc = this.a.ha.Mn;
						return this.a.c.v.ad(this.a, c)
					} this.Kn = c
			} else a--;
			this.lg = a;
			this.a.b.K = !0;
			this.a.b.Ha = !0;
			d = d.oj[a];
			if (this.a.b.Ia != d || this.nB != this.a.b.ab) this.a.b.Ia = d, this.nB = this.a.b.ab, 0 <=
				d && (d = this.a.c.h.$.Bj(d, this.a.b.ab, this.a.b.vb, this.a.b.wb), null != d && (this.a.J = d.width, this.a.I = d.height, this.a.fa = d.wa, this.a.ga = d.va, this.a.$t = d.Eg, this.a.au = d.Fg));
			return !1
		},
		Jf: function (a) {
			return 0 == this.a.T.ti.ai[a] ? !1 : !0
		},
		sp: function () {
			0 == this.Xj && (this.Xj = 1)
		},
		rp: function (a) {
			this.kg = a + 1;
			this.Lk(0)
		},
		cF: function () {
			this.kg = 0;
			this.Lk(0)
		},
		aF: function () {
			this.Lk(1);
			this.kg != t.so + 1 && (this.Jf(t.Nd) || this.Jf(t.qc) || this.Jf(t.fe) ? (this.yl = 0, this.cF()) : (this.yl = 2, this.a.c.Dz(this.a)))
		},
		bF: function () {
			0 ==
				(this.a.W & E.Rh) && (this.Lk(1), this.kg != t.rk + 1 && this.a.c.bf(this.a.Cb))
		}
	};
	$b.prototype = {
		At: function () {
			var a = this.app.Ji + "M" + n.Gm(this.handle, "png"),
				b = new Image;
			this.$.tb[this.handle] = b;
			var c = this;
			b.onload = function () {
				c.app.hi(c)
			};
			b.onerror = function () {
				c.app.hi(c)
			};
			b.src = a
		}
	};
	ac.prototype = {
		Ah: function (a) {
			this.file = a;
			this.nb = this.file.m();
			this.Pj = Array(this.nb);
			a = this.file.m();
			var b, c, d = new fa;
			for (b = 0; b < a; b++) c = this.file.ba, d.cl(this.file), this.Pj[d.handle] = c;
			this.Ga = Array(this.nb);
			for (b = 0; b < this.nb; b++) this.Ga[b] =
				0;
			this.ua = null;
			this.ri = this.nb;
			this.De = 0;
			this.images = null
		},
		Hb: function (a) {
			return 0 <= a && a < this.ri && -1 != this.ua[a] ? this.images[this.ua[a]] : null
		},
		co: function () {
			var a;
			for (a = 0; a < this.nb; a++) this.Pj[a] && (this.Ga[a] = 1)
		},
		Je: function () {
			if (0 == (this.app.ya & m.Nh) && 0 == (this.app.ya & m.$r)) {
				var a;
				for (a = 0; a < this.nb; a++) this.Ga[a] = 0
			}
			this.yh = null
		},
		Si: function (a) {
			this.Ga[a]++
		},
		eh: function (a) {
			this.Si(a);
			return -1
		},
		Mz: function (a) {
			null == this.tb[a] && (null != this.yh && a < this.yh.length && null != this.yh[a] ? this.tb[a] = this.yh[a] :
				(this.tb[a] = new $b(this, a), this.app.pm(this.tb[a])))
		},
		load: function (a) {
			var b;
			if (0 < this.app.Id)
				if (null == this.tb) {
					if (this.tb = Array(this.app.Id), this.app.ya & m.Nh)
						for (b = 0; b < this.app.Id; b++) this.app.tb[b] && this.Mz(b)
				} else if (0 == (this.app.ya & m.Nh)) {
					this.yh = Array(this.app.Id);
					for (b = 0; b < this.app.Id; b++) this.yh[b] = this.tb[b];
					this.tb = Array(this.app.Id);
					for (b = 0; b < this.app.Id; b++) this.tb[b] = null
				}
			for (b = this.De = 0; b < this.nb; b++) 0 != this.Ga[b] && this.De++;
			b = Array(this.De);
			var c = 0,
				d;
			for (d = 0; d < this.nb; d++)
				if (0 != this.Ga[d]) {
					if (null !=
						this.images && -1 != this.ua[d] && null != this.images[this.ua[d]]) {
						if (b[c] = this.images[this.ua[d]], b[c].Ga = this.Ga[d], null != this.tb && null != this.yh) {
							var e = b[c].fb;
							0 < e && (this.tb[e] = this.yh[e])
						}
					} else 0 != this.Pj[d] && (b[c] = new fa, a.seek(this.Pj[d]), b[c].load(this.app), b[c].Ga = this.Ga[d]);
					c++
				} this.images = b;
			this.ua = Array(this.nb);
			for (b = 0; b < this.nb; b++) this.ua[b] = -1;
			for (b = 0; b < this.De; b++) this.images[b] && (this.ua[this.images[b].handle] = b);
			this.ri = this.nb
		},
		Kz: function (a) {
			var b;
			for (b = 0; b < a.length; b++)
				if (0 <= a[b] && a[b] <
					this.ri && 0 != this.Pj[a[b]] && null == this.Hb(a[b])) {
					var c, d = -1;
					for (c = 0; c < this.De; c++)
						if (null == this.images[c]) {
							d = c;
							break
						} if (-1 == d) {
							var e = Array(this.De + 10);
							for (c = 0; c < this.De; c++) e[c] = this.images[c];
							for (; c < this.De + 10; c++) e[c] = null;
							d = this.De;
							this.De += 10;
							this.images = e
						}
					this.ua[a[b]] = d;
					this.images[d] = new fa;
					this.images[d].Ga = 1;
					this.file.seek(this.Pj[a[b]]);
					this.images[d].load(this.app)
				}
		},
		Bj: function (a, b, c, d) {
			var e;
			null == this.zh && (this.zh = new fa);
			e = this.Hb(a);
			if (null != e) {
				a = e.width;
				var f = e.height,
					g = e.wa,
					l = e.va,
					p = e.Eg;
				e = e.Fg;
				0 == b ? (1 != c && (g *= c, p *= c, a *= c), 1 != d && (l *= d, e *= d, f *= d)) : (1 != c && (g *= c, p *= c, a *= c), 1 != d && (l *= d, e *= d, f *= d), null == this.Ch && (this.Ch = new Z), null == this.Fj && (this.Fj = new pa), null == this.pj && (this.pj = new pa), this.Fj.x = g, this.Fj.y = l, this.pj.x = p, this.pj.y = e, this.Ch.left = this.Ch.top = 0, this.Ch.right = a, this.Ch.bottom = f, this.MF(this.Ch, this.Fj, this.pj, b), a = this.Ch.right, f = this.Ch.bottom, g = this.Fj.x, l = this.Fj.y, p = this.pj.x, e = this.pj.y);
				this.zh.width = a;
				this.zh.height = f;
				this.zh.wa = g;
				this.zh.va = l;
				this.zh.Eg =
					p;
				this.zh.Fg = e;
				return this.zh
			}
			return e
		},
		MF: function (a, b, c, d) {
			var e, f, g;
			90 == d ? (d = 0, g = 1) : 180 == d ? (d = -1, g = 0) : 270 == d ? (d = 0, g = -1) : (g = d * Math.PI / 180, d = Math.cos(g), g = Math.sin(g));
			var l, p, h, m, n;
			null == b ? l = p = n = f = 0 : (h = -b.x * d, m = -b.x * g, n = -b.y * d, f = -b.y * g, l = h + f, p = n - m);
			e = null == b ? a.right : a.right - b.x;
			h = e * d;
			m = e * g;
			e = h + f;
			n -= m;
			var k;
			f = null == b ? a.bottom : a.bottom - b.y;
			k = h + f * g;
			f = f * d - m;
			var q, r;
			q = l + k - e;
			r = p + f - n;
			h = Math.min(l, Math.min(e, Math.min(k, q)));
			m = Math.min(p, Math.min(n, Math.min(f, r)));
			l = Math.max(l, Math.max(e, Math.max(k, q)));
			p = Math.max(p, Math.max(n, Math.max(f, r)));
			null != c && (null == b ? (e = c.x, f = c.y) : (e = c.x - b.x, f = c.y - b.y), c.x = e * d + f * g - h, c.y = f * d - e * g - m);
			null != b && (b.x = -h, b.y = -m);
			a.right = l - h;
			a.bottom = p - m
		}
	};
	fa.sH = 10;
	fa.Nf = function (a, b) {
		var c = new fa;
		c.app = a;
		c.eb = new Image;
		c.eb.onload = function () {
			c.app.hh++;
			c.width = c.eb.width;
			c.height = c.eb.height
		};
		a.ih++;
		a.Yf = !0;
		c.eb.src = a.Ji + b;
		return c
	};
	fa.prototype = {
		cl: function (a) {
			this.handle = a.m();
			a.la(12)
		},
		At: function () {
			this.eb = new Image;
			var a = this;
			this.eb.onload = function () {
				a.app.hi(a)
			};
			this.eb.onerror =
				function () {
					a.app.hi(a)
				};
			this.eb.src = this.app.Ji + n.Gm(this.handle, "png")
		},
		load: function (a) {
			this.app = a;
			this.handle = a.file.m();
			this.width = a.file.m();
			this.height = a.file.m();
			this.wa = a.file.P();
			this.va = a.file.P();
			this.Eg = a.file.P();
			this.Fg = a.file.P();
			this.fb = 0;
			this.eb = null;
			null != this.app.frame.gn ? (this.fb = this.app.frame.gn[this.handle], 0 != this.fb ? (this.app.$.Mz(this.fb), this.ed = this.app.frame.ed[this.handle], this.fd = this.app.frame.fd[this.handle]) : this.app.pm(this)) : this.app.pm(this)
		},
		createElement: function () {
			var a =
				document.createElement("div");
			a.style.width = this.width + "px";
			a.style.height = this.height + "px";
			a.style.backgroundRepeat = "no-repeat";
			0 == this.fb ? a.style.backgroundImage = "url('" + this.eb.src + "')" : (a.style.backgroundPosition = "-" + this.ed + "px -" + this.fd + "px", a.style.backgroundImage = "url('" + this.app.Ji + "M" + n.Gm(this.fb, "png") + "')");
			return a
		},
		Rf: function (a, b, c, d) {
			if (0 == (a & B.wk)) {
				null == this.$f && (this.$f = new B, this.$f.wt(this.app, this, a));
				if (0 == b && 1 == c && 1 == d) return this.$f;
				null == this.mh && (this.mh = new L);
				var e,
					f = 2147483647,
					g = -1;
				for (e = 0; e < this.mh.size(); e++) {
					a = this.mh.get(e);
					if (b == a.angle && c == a.Vb && d == a.Wb) return a.N;
					a.iw < f && (f = a.iw, g = e)
				}
				this.mh.size() < this.sH && (g = -1);
				a = new Nd;
				a.N = new B;
				a.N.zF(this.$f, b, c, d);
				a.angle = b;
				a.Vb = c;
				a.Wb = d;
				a.iw = this.app.Ld;
				0 > g ? this.mh.add(a) : this.mh.set(g, a);
				return a.N
			}
			null == this.el && (null == this.$f && (this.$f = new B, this.$f.wt(this.app, this, 0)), this.el = new B, this.el.wt(this.app, this, a));
			return this.el
		}
	};
	bc.prototype = {
		Ah: function (a) {
			var b = a.o(),
				c;
			this.Hd = 0;
			var d = a.ba,
				e = new wa;
			for (c =
				0; c < b; c++) e.cl(a), this.Hd = Math.max(this.Hd, e.handle + 1);
			a.seek(d);
			this.Lq = Array(this.Hd);
			for (c = 0; c < b; c++) d = a.ba, e.cl(a), this.Lq[e.handle] = d;
			this.Ga = Array(this.Hd);
			for (c = 0; c < this.Hd; c++) this.Ga[c] = 0;
			this.ua = null;
			this.ag = this.Hd;
			this.nh = 0;
			this.fonts = null
		},
		load: function (a) {
			var b;
			for (b = this.nh = 0; b < this.Hd; b++) 0 != this.Ga[b] && this.nh++;
			b = Array(this.nh);
			var c = 0,
				d;
			for (d = 0; d < this.Hd; d++) 0 != this.Ga[d] && (null != this.fonts && -1 != this.ua[d] && null != this.fonts[this.ua[d]] ? b[c] = this.fonts[this.ua[d]] : (b[c] = new wa, a.seek(this.Lq[d]),
				b[c].load(a)), b[c].Ga = this.Ga[d], c++);
			this.fonts = b;
			this.ua = Array(this.Hd);
			for (b = 0; b < this.Hd; b++) this.ua[b] = -1;
			for (b = 0; b < this.nh; b++) this.ua[this.fonts[b].handle] = b;
			this.ag = this.Hd
		},
		ff: function (a) {
			return -1 == a ? this.sn : 0 <= a && a < this.ag && -1 != this.ua[a] ? this.fonts[this.ua[a]] : null
		},
		Vp: function (a) {
			return this.ff(a).fG()
		},
		Je: function () {
			if (0 == (this.app.TN & m.Nh) && 0 == (this.app.ya & m.$r)) {
				var a;
				for (a = 0; a < this.Hd; a++) this.Ga[a] = 0
			}
		},
		co: function () {
			var a;
			for (a = 0; a < this.Hd; a++) this.Lq[a] && (this.Ga[a] = 1)
		},
		Si: function (a) {
			-1 ==
				a ? null == this.sn && (this.sn = new wa, this.sn.Gp()) : this.Ga[a]++
		},
		eh: function (a) {
			this.Si(a);
			return -1
		},
		pp: function (a) {
			var b, c;
			for (c = 0; c < this.nh && (null == this.fonts[c] || this.fonts[c].Ob != a.Ob || this.fonts[c].oe != a.oe || this.fonts[c].ne != a.ne || this.fonts[c].me != a.me); c++);
			if (c < this.nh) return this.fonts[c].handle;
			c = -1;
			for (b = this.Hd; b < this.ag && -1 != this.ua[b]; b++);
			if (-1 == c) {
				var d = Array(this.ag + 10);
				for (b = 0; b < this.ag; b++) d[b] = this.ua[b];
				for (; b < this.ag + 10; b++) d[b] = -1;
				c = this.ag;
				this.ag += 10;
				this.ua = d
			}
			d = -1;
			for (b = 0; b <
				this.nh; b++)
				if (null == this.fonts[b]) {
					d = b;
					break
				} - 1 == d && (d = this.nh, this.fonts.push(null));
			this.ua[c] = d;
			this.fonts[d] = new wa;
			this.fonts[d].handle = c;
			this.fonts[d].Ob = a.Ob;
			this.fonts[d].oe = a.oe;
			this.fonts[d].ne = a.ne;
			this.fonts[d].me = a.me;
			return c
		}
	};
	wa.prototype = {
		cl: function (a) {
			this.handle = a.o();
			0 == a.Xe ? a.la(72) : a.la(104)
		},
		load: function (a) {
			this.handle = a.o();
			var b = a.ba;
			a.la(12);
			this.Ob = a.o();
			0 > this.Ob && (this.Ob = -this.Ob);
			a.o();
			a.o();
			a.o();
			this.oe = a.o();
			this.ne = a.jb();
			a.jb();
			a.jb();
			a.jb();
			a.jb();
			a.jb();
			a.jb();
			a.jb();
			this.me = a.Sb();
			0 == a.Xe ? a.seek(b + 72) : a.seek(b + 104)
		},
		fG: function () {
			var a = new Ya;
			a.Ob = this.Ob;
			a.oe = this.oe;
			a.ne = this.ne;
			a.me = this.me;
			return a
		},
		Gp: function () {
			this.me = "Arial";
			this.Ob = 13;
			this.oe = 400;
			this.ne = 0
		},
		ye: function () {
			return this.Ob + Math.ceil(this.Ob / 8)
		},
		Qf: function () {
			if (null == this.font) {
				this.font = this.ne ? "italic " : "normal ";
				var a = 100 * Math.floor(this.oe / 100),
					a = Math.max(a, 100),
					a = Math.min(a, 900);
				this.font += a + " ";
				this.font += this.Ob + "px ";
				this.font += this.me
			}
			return this.font
		}
	};
	cc.prototype = {
		Ah: function (a) {
			this.file =
				a;
			this.nb = this.file.m();
			this.Mq = Array(this.nb);
			this.Ga = Array(this.nb);
			this.ua = Array(this.nb);
			for (a = 0; a < this.nb; a++) this.Ga[a] = 0, this.ua[a] = -1;
			var b = this.file.m(),
				c = new Pa(this.app),
				d;
			for (a = 0; a < b; a++) d = this.file.ba, c.cl(), this.Mq[c.handle] = d;
			this.ri = this.nb;
			this.qn = 0;
			this.lk = null
		},
		lG: function (a) {
			return 0 <= a && a < this.ri && -1 != this.ua[a] ? this.lk[this.ua[a]] : null
		},
		Je: function () {
			if (0 == (this.app.ya & m.Nh) && 0 == (this.app.ya & m.$r)) {
				var a;
				for (a = 0; a < this.nb; a++) this.Ga[a] = 0
			}
		},
		co: function () {
			var a;
			for (a = 0; a < this.nb; a++) this.Mq[a] &&
				(this.Ga[a] = 1)
		},
		Si: function (a) {
			this.Ga[a]++
		},
		eh: function (a) {
			this.Si(a);
			return -1
		},
		load: function () {
			var a;
			for (a = this.qn = 0; a < this.nb; a++) 0 != this.Ga[a] && this.qn++;
			a = Array(this.qn);
			var b = 0,
				c;
			for (c = 0; c < this.nb; c++) 0 != this.Ga[c] && (null != this.lk && -1 != this.ua[c] && null != this.lk[this.ua[c]] ? a[b] = this.lk[this.ua[c]] : (a[b] = new Pa(this.app), this.file.seek(this.Mq[c]), a[b].load()), a[b].Ga = this.Ga[c], b++);
			this.lk = a;
			this.ua = Array(this.nb);
			for (a = 0; a < this.nb; a++) this.ua[a] = -1;
			for (a = 0; a < this.qn; a++) this.ua[this.lk[a].handle] =
				a;
			this.ri = this.nb;
			this.Je()
		}
	};
	Pa.prototype = {
		cl: function () {
			this.handle = this.file.m();
			this.file.la(5);
			var a = this.file.m();
			0 == this.file.Xe ? this.file.la(a) : this.file.la(2 * a)
		},
		At: function () {
			var a, b = this.Dc.cc.tv & this.type;
			0 == b && (b = this.Dc.cc.zu & this.type);
			for (a = 0; 4 > a && !(b & 1 << a); a++);
			if (4 > a) {
				b = "";
				switch (a) {
					case 0:
						b = "ogg";
						break;
					case 1:
						b = "m4a";
						break;
					case 2:
						b = "mp3";
						break;
					case 3:
						b = "wav"
				}
				if (this.context) {
					var c = this, d = new XMLHttpRequest;
					
					d.open("GET", this.Dc.Ji + n.Gm(this.handle, b), !0);
					d.responseType = "arraybuffer";
					d.addEventListener("load", function () {
						c.response = d.response;
						c.Dc.cc.XE(c)
					});
					d.send()
				} else this.lb = new Audio, this.lb.FO = "auto", c = this, this.lb.addEventListener("loadeddata", function (a) {
					c.Dc.hi(c);
					c.lb.removeEventListener("loadeddata", arguments.callee, !1)
				}, !1), this.lb.addEventListener("error", function () {
					c.Dc.hi(c);
					c.lb = null
				}, !1), this.lb.src = this.Dc.Ji + n.Gm(this.handle, b), this.lb.load(), this.lb.autoplay = !1
			} else this.Dc.hi(this)
		},
		load: function () {
			this.handle = this.file.m();
			this.type = this.file.jb();
			this.wm =
				this.frequency = this.file.o();
			var a = this.file.m();
			this.name = this.file.Sb(a);
			this.lb = null;
			this.Dc.pm(this)
		},
		lH: function () {
			this.handle = 9999;
			this.type = 4;
			this.wm = this.frequency = 4E4;
			this.name = "";
			this.lb = null;
			this.Dc.pm(this)
		},
		Tj: function (a, b) {
			a || (a = 0);
			b || (b = this.frequency);
			if (this.lb) this.lb.volume = this.volume / 100, this.wm = b, this.lb.playbackRate = b / this.frequency, this.lb.duration && (this.lb.currentTime = 0), this.lb.play();
			else if (this.buffer) {
				this.source = this.context.createBufferSource();
				this.source.buffer =
					this.buffer;
				0 == this.Qk ? (this.source.gain.value = this.volume / 100, this.source.connect(this.context.destination)) : (this.gain = this.context.createGain(), this.source.connect(this.gain), this.gain.connect(this.context.destination), this.gain.gain.value = this.volume / 100);
				a || (a = 0);
				b || (b = this.frequency);
				this.wm = b;
				this.source.playbackRate.value = b / this.frequency;
				this.startTime = Date.now() - a;
				"undefined" !== typeof this.source.start ? this.source.start(0, a / 1E3) : this.source.noteOn(a);
				var c = this;
				this.source.onended = function () {
					c.Ex = !0
				}
			}
			this.Zg = !1;
			this.di = !0;
			this.Ex = !1
		},
		play: function (a, b, c) {
			this.oh = a;
			0 == this.oh && (this.oh = 1E7);
			this.volume = c;
			this.Tj()
		},
		stop: function () {
			this.lb ? this.lb.pause() : this.source && this.di && ("undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0), this.source.onended = null);
			this.di = this.tm = !1
		},
		pause: function () {
			this.Zg || (this.lb ? this.lb.pause() : this.source && (this.source.onended = null, "undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0), this.JH = Date.now() - this.startTime),
				this.Zg = !0)
		},
		qG: function () {
			this.Zg ? this.up = !1 : (this.pause(), this.up = !0)
		},
		resume: function () {
			this.Zg && (this.lb ? this.lb.play() : this.source && this.Tj(this.JH), this.Zg = !1)
		},
		rG: function () {
			this.up && (this.resume(), this.up = !1)
		},
		LG: function () {
			return this.Zg
		},
		Gz: function () {
			return (this.lb || this.source) && this.di ? !this.Zg : !1
		},
		setPosition: function (a) {
			this.lb ? this.lb.currentTime = a / 1E3 : this.source && (this.di && (this.source.onended = null, "undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0)),
				this.Tj(a))
		},
		jF: function () {
			if (1 == this.di && 0 == this.Zg)
				if (this.lb) {
					if (this.lb.ended) {
						if (0 < this.oh && (this.oh-- , 0 < this.oh)) return this.Tj(0, this.wm), !1;
						this.di = this.tm = !1;
						return !0
					}
				} else if (this.source && (3 == this.source.playbackState || this.Ex)) {
					if (0 < this.oh && (this.oh-- , 0 < this.oh)) return this.Tj(0, this.wm), !1;
					this.di = this.tm = !1;
					return !0
				}
			return !1
		}
	};
	dc.prototype = {
		CC: function (a) {
			this.PH[this.position++] = a
		}
	};
	N.Ph = 80;
	N.EE = 256;
	N.zN = function (a, b) {
		var c = b >> 5,
			d = 1 << (b & 31),
			e = 0 != (a[c] & d);
		a[c] |= d;
		return e
	};
	N.TF = function (a) {
		return a.Fb +
			0
	};
	N.Cf = function (a) {
		a &= 65535;
		return 0 != (a & 32768) ? a - 65536 : a
	};
	N.os = function (a) {
		return a >> 16
	};
	N.Tp = function (a) {
		return a & 4294901760
	};
	N.prototype = {
		Vk: function (a) {
			var b;
			this.zj = 0;
			this.ng = null;
			this.og = -1;
			if (0 != (a & 32768)) return 32767 == (a & 32767) ? null : this.SH(a);
			var c = this.j.O[a];
			if (c.Wd == this.vc) {
				if (0 != (c.ib & 2147483648)) return null;
				b = this.j.G[c.ib];
				this.Gh = null;
				this.ak = c;
				this.Ke = b;
				this.Qn = a
			} else {
				c.Wd = this.vc;
				if (this.Hh) return c.ib = -1, c.Xd = 0, null;
				c.ib = c.$a;
				if (0 != (c.$a & 2147483648)) return c.Xd = 0, null;
				var d = c.$a;
				do b = this.j.G[d], d = b.Mb, b.tc = d; while (0 == (d & 2147483648));
				b = this.j.G[c.$a];
				this.Gh = null;
				this.ak = c;
				this.Ke = b;
				this.Qn = a;
				c.Xd = c.Bi
			}
			this.zj = c.Xd;
			return b
		},
		SH: function (a) {
			var b, c, d = 0,
				e = 0;
			for (a = this.bc[a & 32767]; e < a.La.length;) {
				c = a.La[e + 1];
				c = this.j.O[c];
				if (c.Wd == this.vc) b = 0, 0 == (c.ib & 2147483648) && (b = c.Xd, null == this.ng && (this.ng = a, this.og = e));
				else if (b = 0, c.Wd = this.vc, this.Hh) c.ib = -1, c.Xd = 0;
				else if (c.ib = c.$a, 0 != (c.$a & 2147483648)) c.Xd = 0;
				else {
					null == this.ng && (this.ng = a, this.og = e);
					b = c.$a;
					do b = this.j.G[b], b = b.tc =
						b.Mb; while (0 == (b & 2147483648));
					b = c.Xd = c.Bi
				}
				d += b;
				e += 2
			}
			a = this.ng;
			return null != a ? (c = this.j.O[a.La[this.og + 1]], this.Gh = null, this.ak = c, this.Ke = b = this.j.G[c.ib], this.Qn = a.La[this.og + 1], this.zj = d, b) : null
		},
		Wk: function () {
			var a = this.Ke,
				b;
			if (null == a && (b = this.j.O[this.Qn], 0 == (b.ib & 2147483648))) return a = this.j.G[b.ib], this.Gh = null, this.ak = b, this.Ke = a;
			if (null != a && 0 == (a.tc & 2147483648)) return this.Gh = a, this.ak = null, this.Ke = a = this.j.G[a.tc];
			if (null == this.ng) return null;
			do {
				this.og += 2;
				if (this.og >= this.ng.La.length) return null;
				b = this.j.O[this.ng.La[this.og + 1]]
			} while (0 != (b.ib & 2147483648));
			this.Gh = null;
			this.ak = b;
			this.Ke = a = this.j.G[b.ib];
			this.Qn = this.ng.La[this.og + 1];
			return a
		},
		fh: function () {
			--this.Ke.hc.Xd;
			null != this.Gh ? (this.Gh.tc = this.Ke.tc, this.Ke = this.Gh) : (this.ak.ib = this.Ke.tc, this.Ke = null)
		},
		Em: function (a) {
			var b = a.hc;
			if (b.Wd != this.vc) b.Wd = this.vc, b.ib = a.Cb, b.Xd = 1, a.tc = -1;
			else {
				var c = b.ib;
				if (0 != (c & 2147483648)) b.ib = a.Cb, b.Xd += 1, a.tc = -1;
				else {
					do {
						if (a.Cb == c) return;
						b = this.j.G[c];
						c = b.tc
					} while (0 == (c & 2147483648));
					b.tc = a.Cb;
					a.tc = -1;
					a.hc.Xd += 1
				}
			}
		},
		Py: function () {
			var a, b, c;
			for (b = 0; b < this.j.be; b++)
				if (c = this.j.O[b], c.Wd == this.vc) {
					if (c.bv != this.mr)
						for (c.bv = this.mr, a = c.$a; 0 == (a & 2147483648);) a = this.j.G[a], a.bu = 0, a = a.Mb;
					for (a = c.ib; 0 == (a & 2147483648);) a = this.j.G[a], a.bu = 1, a = a.tc
				}
		},
		UF: function () {
			var a, b, c, d, e;
			for (d = 0; d < this.j.be; d++)
				if (e = this.j.O[d], e.bv == this.mr)
					for (e.Wd = this.vc, a = e.$a, c = null; 0 == (a & 2147483648);) b = this.j.G[a], 0 != b.bu && (null != c ? c.tc = a : e.ib = a, b.tc = -1, c = b), a = b.Mb
		},
		Rm: function (a) {
			if (this.$j) return this.Pn = !1, a = this.Vt(a);
			if (0 == (a & 32768)) return a = this.j.O[a], a.Wd == this.vc && 0 == (a.ib & 2147483648) ? this.j.G[a.ib] : 0 == (a.$a & 2147483648) ? this.j.G[a.$a] : null;
			var b = this.bc[a & 32767],
				c = 0;
			if (c >= b.La.length) return null;
			do {
				a = this.j.O[b.La[c + 1]];
				if (a.Wd == this.vc && 0 == (a.ib & 2147483648)) return this.j.G[a.ib];
				c += 2
			} while (c < b.La.length);
			c = 0;
			do {
				a = this.j.O[b.La[c + 1]];
				if (0 == (a.$a & 2147483648)) return this.j.G[a.$a];
				c += 2
			} while (c < b.La.length);
			return null
		},
		Dj: function (a) {
			a.cb &= ~Q.cm;
			this.Pn = !0;
			var b = this.Vt(a.Gb);
			if (null != b) return 0 != this.uc && (a.cb |=
				U.$l, this.Bl = !0), b;
			a.cb |= Q.cm;
			return b
		},
		Vt: function (a) {
			return 0 == (a & 32768) ? this.nG(a) : this.oG(a)
		},
		nG: function (a) {
			var b = this.j.O[a];
			if (b.$u != this.Zj) {
				b.$u = this.Zj;
				b.av = this.Fh;
				if (b.Wd == this.vc && 0 == (b.ib & 2147483648)) {
					b.gg = b.ib;
					a = this.j.G[b.ib];
					b.Ci = a.tc;
					if (0 != (a.tc & 2147483648)) return b.tf = !1, b.Ai = 1, this.uc = !1, a;
					b.tf = !0;
					b.Ai = 2;
					this.uc = !0;
					return a
				}
				if (this.Pn && b.Wd == this.vc) return b.Ai = 0, b.gg = -1, null;
				if (0 == (b.$a & 2147483648)) {
					b.gg = b.$a;
					a = this.j.G[b.$a];
					if (null == a) return b.Ai = 0, b.gg = -1, null;
					if (0 == (a.Mb &
						2147483648)) return b.Ci = a.Mb, b.tf = !0, b.Ai = 3, this.uc = !0, a;
					b.tf = !1;
					b.Ai = 1;
					this.uc = !1;
					return a
				}
				b.Ai = 0;
				b.gg = -1;
				return null
			}
			if (b.av != this.Fh) {
				var c;
				b.av = this.Fh;
				switch (b.Ai) {
					case 0:
						return this.uc = b.tf, null;
					case 1:
						return a = this.j.G[b.gg], this.uc = b.tf, a;
					case 2:
						b.gg = b.Ci;
						a = this.j.G[b.Ci];
						if (null == a) return null;
						c = a.tc;
						0 != (c & 2147483648) && (b.tf = !1, c = b.ib);
						b.Ci = c;
						this.uc = b.tf;
						return a;
					case 3:
						b.gg = b.Ci;
						a = this.j.G[b.Ci];
						if (null == a) return null;
						c = a.Mb;
						0 != (c & 2147483648) && (b.tf = !1, c = b.$a);
						b.Ci = c;
						this.uc = b.tf;
						return a
				}
			}
			if (0 >
				b.gg) return null;
			a = this.j.G[b.gg];
			this.uc = b.tf;
			return a
		},
		oG: function (a) {
			var b, c = this.bc[a & 32767];
			if (c.uv != this.Zj) {
				c.uv = this.Zj;
				c.vv = this.Fh;
				b = this.jB(c);
				if (0 <= b) {
					c.hg = b;
					a = this.j.G[b];
					if (null == a) return c.Di = 0, c.hg = -1, null;
					b = a.tc;
					if (0 != (b & 2147483648) && (b = this.yv(c), 0 > b)) return c.Di = 1, this.uc = c.uf = !1, a;
					c.Ei = b;
					c.Di = 2;
					this.uc = c.uf = !0;
					return a
				}
				if (this.Pn && c.wv) return c.Di = 0, c.hg = -1, null;
				b = this.iB(c);
				if (0 <= b && (c.hg = b, a = this.j.G[b], null != a)) {
					b = a.Mb;
					if (0 != (b & 2147483648) && (b = this.xv(c), 0 != (b & 2147483648))) return c.Di =
						1, this.uc = c.uf = !1, a;
					c.Ei = b;
					c.Di = 3;
					this.uc = c.uf = !0;
					return a
				}
				c.Di = 0;
				c.hg = -1;
				return null
			}
			if (c.vv != this.Fh) switch (c.vv = this.Fh, c.Di) {
				case 0:
					return this.uc = c.uf, null;
				case 1:
					return a = this.j.G[c.hg], this.uc = c.uf, a;
				case 2:
					return c.hg = c.Ei, a = this.j.G[c.Ei], null != a && (b = a.tc, 0 != (b & 2147483648) && (b = this.yv(c), 0 > b && (c.uf = !1, b = this.jB(c))), c.Ei = b), this.uc = c.uf, a;
				case 3:
					return c.hg = c.Ei, a = this.j.G[c.Ei], null != a && (b = a.Mb, 0 != (b & 2147483648) && (b = this.xv(c), 0 != (b & 2147483648) && (c.uf = !1, b = this.iB(c))), c.Ei = b), this.uc = c.uf,
						a
			}
			if (0 > c.hg) return null;
			a = this.j.G[c.hg];
			this.uc = c.uf;
			return a
		},
		yv: function (a) {
			for (var b = a.ul, c; b < a.La.length;) {
				c = a.La[b + 1];
				c = this.j.O[c];
				if (c.Wd == this.vc && (a.wv = !0, 0 == (c.ib & 2147483648))) return a.ul = b + 2, c.ib;
				b += 2
			}
			return -1
		},
		jB: function (a) {
			a.ul = 0;
			a.wv = !1;
			return this.yv(a)
		},
		xv: function (a) {
			for (var b = a.ul, c; b < a.La.length;) {
				c = a.La[b + 1];
				c = this.j.O[c];
				if (0 == (c.$a & 2147483648)) return a.ul = b + 2, c.$a;
				b += 2
			}
			return -1
		},
		iB: function (a) {
			a.ul = 0;
			return this.xv(a)
		},
		OF: function () {
			this.ot = !1;
			for (var a = this.j.kr, b = this.j.lr; ;) {
				for (var c =
					null, d = null, e = this.j.AB; null != e;) {
					if (0 > e.index) {
						(c = e.next) && (n.rb(e.name, c.name) || (c = null));
						break
					}
					d = e;
					e = e.next
				}
				if (null == e) break;
				e.stop = !1;
				for (e.index = 0; e.index < e.qh; e.index++) {
					this.j.kr = e;
					if (this.j.lr = c) c.index = e.index;
					this.$j = 0;
					this.ad(e.rf[e.index], -2686976);
					if (e.stop) break
				}
				if (c)
					for (c.index = 0; c.index < c.qh; c.index++) {
						this.j.kr = c;
						if (this.j.lr = e) e.index = c.index;
						this.$j = 0;
						this.ad(c.rf[c.index], -2686976);
						if (c.stop) break
					}
				c && (e.next = c.next);
				null == d ? this.j.AB = e.next : d.next = e.next
			}
			this.j.kr = a;
			this.j.lr =
				b
		},
		le: function (a) {
			var b = a & 65535;
			0 != (b & 32768) && (b = 65536 - b);
			a = this.Pb[this.se[b] + -(a >> 16)];
			0 != a && this.$e(a, null)
		},
		ad: function (a, b) {
			this.tr = b;
			var c = this.Pb[a.Zt + -(b >> 16)];
			return 0 != c ? (this.$e(c, a), !0) : !1
		},
		xG: function () {
			for (var a = !1, b = this.j.Uv; b;) {
				if (this.j.Oi >= b.Ld)
					if (b.type == cb.OE) {
						this.j.v.Kc = b.name;
						var c = this.Pb[this.se[-q.mm] + V.ex];
						0 != c && this.$e(c, null);
						a = b.ft = !0
					} else
						for (0 == b.jo && (b.jo = this.j.Oi); this.j.Oi >= b.jo;) {
							this.j.v.Kc = b.name;
							this.j.v.DB = b.index;
							c = this.Pb[this.se[-q.mm] + V.ex];
							0 != c && this.$e(c,
								null);
							b.index++;
							b.qq--;
							if (0 == b.qq) {
								a = b.ft = !0;
								break
							}
							b.jo += b.SI
						}
				b = b.next
			}
			if (a)
				for (b = this.j.Uv, a = null; b;) c = b.next, b.ft ? null == a ? this.j.Uv = c : a.next = c : a = b, b = c
		},
		vF: function () {
			var a;
			if (0 != (this.j.wc & h.fm)) a = this.Pb[this.se[-q.Xo] + 1], 0 != a && (this.Pb[this.se[-q.Xo] + 1] = -1, this.$e(a, null), this.Sn = !0);
			else {
				a = this.Pb[this.se[-q.mm] + 3];
				0 != a && this.$e(a, null);
				a = this.Pb[this.se[-q.Xo] + 1];
				var b, c, d, e, f;
				if (0 != a) {
					if (this.Sn) {
						e = null;
						b = a;
						do {
							d = this.ec[b];
							if (d != e)
								for (e = d, c = d.Fb; c < d.Fb + d.je; c++) f = d.Ta[c], 0 == (f.cb & Q.cm) && (f.cb |=
									Q.Bo);
							b++
						} while (null != this.ec[b])
					}
					this.$e(a, null);
					this.Pb[this.se[-q.Xo] + 1] = 0;
					if (this.Sn) {
						e = null;
						b = a;
						do {
							d = this.ec[b];
							if (d != e)
								for (e = d, c = d.Fb; c < d.Fb + d.je; c++) f = d.Ta[c], f.cb &= ~Q.Bo;
							b++
						} while (null != this.ec[b]);
						this.Sn = !1
					}
				}
				a = this.Pb[this.se[-q.mm] + 2];
				0 != a && this.$e(a, null);
				a = this.Pb[this.se[-q.mm] + 1];
				0 != a && this.$e(a, null)
			}
		},
		$e: function (a, b) {
			var c, d, e;
			this.jr = !1;
			do
				if (d = this.ec[a], 0 == (d.Na & G.js))
					if (this.pg = d, this.qr[0] = 0, this.qr[1] = 0, this.qr[2] = 0, this.qr[3] = 0, 0 == (d.Na & G.ls)) {
						this.vc += 1;
						this.Hh = !1;
						e = 0;
						if (d.Ta[e].ie(this.j,
							b))
							for (e++; e < d.Fb && 0 != d.Ta[e].Oc(this.j); e++);
						e == d.Fb && (this.jr ? null != b && this.hF(b) : this.Rx(d));
						a++
					} else {
						this.mr++;
						if (0 == (d.Na & G.Kw)) {
							c = !1;
							do {
								this.vc++;
								this.Hh = !1;
								e = this.Of[a];
								0 == d.Ta[e].ie(this.j, b) && (this.Hh = !0);
								for (e++; e < d.Fb && -1507329 != d.Ta[e].ra;) 0 == d.Ta[e].Oc(this.j) && (this.Hh = !0), e++;
								this.Py();
								0 == this.Hh && (c = !0);
								a++;
								d = this.ec[a];
								if (null == d) break
							} while (d == this.pg)
						} else {
							var f;
							c = this.Hh = !1;
							do {
								this.vc++;
								f = !1;
								e = this.Of[a];
								if (d.Ta[e].ie(this.j, b))
									for (e++; e < d.Fb && -1572865 != d.Ta[e].ra;) {
										if (0 == d.Ta[e].Oc(this.j)) {
											f = !0;
											break
										}
										e++
									} else f = !0;
								0 == f && (this.Py(), c = !0);
								a++;
								d = this.ec[a];
								if (null == d) break
							} while (d == this.pg)
						}
						c && (this.vc++ , this.UF(), this.Rx(this.pg))
					}
				else
					if (a++ , null != this.ec[a])
						for (c = this.ec[a]; c == d;) {
							a++;
							if (null == this.ec[a]) break;
							c = this.ec[a]
						}
			while (null != this.ec[a])
		},
		Rx: function (a) {
			if (0 != (a.Na & G.Iw)) {
				0 != (a.Na & G.ns) && (this.Ki = new L);
				if (0 != (a.Na & G.ks)) {
					var b = this.j.Ub,
						c = a.yj;
					a.yj = b;
					if (b == c || b - 1 == c) return
				}
				if (0 != (a.Na & G.ms))
					if (0 != a.Uk) a.Uk--;
					else return;
				if (0 != (a.Na & G.Do)) {
					b = this.j.Oi / 10;
					c = a.Uk;
					if (0 != c && b < c) return;
					a.Uk = b + a.yj
				}
			}
			this.Zj++;
			this.Bl = !1;
			this.Fh = 0;
			this.$j = !0;
			b = 0;
			do c = a.Ta[b + a.Fb], 0 == (c.cb & (Q.Hw | Q.Bo)) && (c.cb &= ~U.$l, c.fc(this.j)), b++; while (b < a.je);
			if (this.Bl) {
				do
					for (this.Bl = !1, this.Fh++ , b = 0; b < a.je; b++) c = a.Ta[b + a.Fb], 0 != (c.cb & U.$l) && (c.cb &= ~U.$l, c.fc(this.j)); while (this.Bl)
			}
			this.$j = !1;
			null != this.Ki && this.RF();
			this.ot && this.OF()
		},
		hF: function (a) {
			var b;
			b = a.Ib;
			this.vc += 1;
			this.Em(a);
			this.Zj++;
			this.Bl = !1;
			this.Fh = 0;
			this.$j = !0;
			var c = 0,
				d;
			do {
				a = this.pg.Ta[this.pg.Fb + c];
				d = a.ra & 4294901760;
				if (262144 == d || 589824 ==
					d)
					if (b == a.Pc) a.fc(this.j);
					else if (d = a.Gb, 0 != (d & 32768)) {
						var e = this.bc[d & 32767];
						for (d = 0; d < e.La.length;) {
							if (e.La[d] == b) {
								a.fc(this.j);
								break
							}
							d += 2
						}
					}
				c++
			} while (c < this.pg.je);
			this.$j = !1
		},
		RF: function () {
			if (!(1 >= this.Ki.size())) {
				var a = this.j.random(this.Ki.size()),
					b;
				do b = this.j.random(this.Ki.size()); while (a == b);
				a = this.Ki.get(a);
				b = this.Ki.get(b);
				var c = a.u,
					d = a.s,
					e = b.s;
				h.Xb(a, b.u);
				h.Lb(a, e);
				h.Xb(b, c);
				h.Lb(b, d);
				this.Ki = null
			}
		},
		Cn: function (a, b) {
			var c;
			this.j.Tt();
			if (null != this.j && 0 == this.j.wf && 0 != this.sm && (c = a, 2 ==
				b && (c += N.EE), this.j.Nl = 0, 0 == this.j.Ni)) {
				this.Mv = this.Kc = c;
				this.le(-262150);
				this.le(-327686);
				c = 0;
				var d, e, f, g, l, p, h = new L;
				for (d = 0; d < this.j.pb; d++) {
					for (; null == this.j.G[c];) c++;
					e = this.j.G[c];
					c++;
					f = e.u - e.fa;
					g = e.s - e.ga;
					l = f + e.J;
					p = g + e.I;
					this.j.Rn >= f && this.j.Rn < l && this.j.Cl >= g && this.j.Cl < p && 0 != (e.ze & I.zd) && 0 == (e.W & E.Kg) && (e.Da == q.Se ? 0 == (e.F.U & w.Fk) ? this.Dc.$.Hb(e.b.Ia).Rf(B.vk, 0, 1, 1).RI(this.j.Rn - e.u, this.j.Cl - e.s, e.b.ab, e.b.vb, e.b.wb) && h.add(e) : h.add(e) : h.add(e))
				}
				for (c = 0; c < h.size(); c++) e = h.get(c), this.DB =
					e.Ib, this.le(-393222)
			}
		},
		CH: function () {
			null != this.j && 0 != this.sm && (this.j.Nl = 0, this.le(-524294))
		},
		WA: function () {
			0 != this.sm && 0 == this.j.wf && (this.j.Nl = 0)
		},
		hB: function (a, b, c, d, e) {
			a = new Dd(a, b, c, d, e);
			null == this.ck && (this.ck = new L);
			this.ck.add(a)
		},
		wG: function () {
			if (null != this.ck) {
				var a;
				for (a = 0; a < this.ck.size(); a++) {
					var b = this.ck.get(a);
					if (null != b && 0 != b.code) switch (this.Kc = b.GH, this.CB = b.vh, b.oI) {
						case 0:
							this.le(b.code);
							break;
						case 1:
							this.ad(b.FH, b.code)
					}
				}
				this.ck.clear()
			}
		},
		load: function (a) {
			for (var b, c, d = 0; ;)
				if (b =
					a.file.pB(4), 69 == b[0] && 82 == b[1] && 62 == b[2] && 62 == b[3]) {
					this.bg = a.file.m();
					300 > this.bg && (this.bg = 300);
					a.file.m();
					this.HA = a.file.m();
					for (c = 0; c < 7 + q.gx; c++) this.Ou[c] = a.file.m();
					this.ph = a.file.m();
					if (0 < this.ph)
						for (this.jg = Array(this.ph), c = 0; c < this.ph; c++) this.jg[c] = new Cd, this.jg[c].Wq = a.file.P(), this.jg[c].Xq = a.file.P()
				} else if (69 == b[0] && 82 == b[1] && 101 == b[2] && 115 == b[3]) a.file.o(), this.nn = a.file.o(), this.Fd = Array(this.nn);
				else if (69 == b[0] && 82 == b[1] && 101 == b[2] && 118 == b[3])
					for (a.file.o(), b = a.file.o(), c = 0; c <
						b; c++) this.Fd[d] = G.create(a), d++;
				else if (60 == b[0] && 60 == b[1] && 69 == b[2] && 82 == b[3]) break;
			this.Wz = Math.max(this.Wz, d)
		},
		Az: function (a) {
			var b, c;
			c = this.Fd[a];
			c.Na &= G.Co;
			c.Na |= G.js;
			a++;
			for (b = !1; ;) {
				c = this.Fd[a];
				c.Na &= G.Co;
				c.Na |= G.js;
				c = c.Ta[0];
				switch (c.ra) {
					case -589825:
						c = c.L[0];
						c.Sf |= ja.us;
						a = this.Az(a);
						continue;
					case -655361:
						b = !0, a++
				}
				if (b) break;
				a++
			}
			return a
		},
		rv: function () {
			var a, b, c, d, e, f, g = new L,
				l;
			for (d = 0; d < this.Fd.length;) a = this.Fd[d], a.Na &= G.Co, b = a.Ta[0], -589825 == b.ra && (a = b.L[0], l = new Bd, l.id = a.tG, l.Ny = d,
				g.add(l), a.Sf &= ~(ja.us | ja.ts), 0 != (a.Sf & ja.ID) && (a.Sf |= ja.ts)), d++;
			for (d = 0; d < this.Fd.length;) {
				a = this.Fd[d];
				a.Na &= G.Co;
				b = a.Ta[0];
				if (-589825 == b.ra && (a = b.L[0], a.Sf &= ~ja.us, 0 != (a.Sf & ja.ts))) {
					d = this.Az(d);
					continue
				}
				d++
			}
			for (d = 0; d < this.Fd.length; d++) switch (a = this.Fd[d], b = a.Ta[0], b.ra) {
				case -589825:
				case -655361:
					break;
				default:
					for (a.yj = 0, e = a.Uk = 0; e < a.Fb + a.je; e++)
						if (b = a.Ta[e], b.cb = 0 > b.ra ? b.cb & Q.nD : b.cb & ~(U.$l | Q.cm), 0 != b.nd)
							for (f = 0; f < b.nd; f++) switch (c = b.L[f], c.code) {
								case 25:
									c.Sr = 0;
									break;
								case 13:
									c.tF = c.Sk;
									break;
								case 39:
									var p;
									for (p = 0; p < g.size(); p++)
										if (l = g.get(p), l.id == c.id) {
											c.ba = l.Ny;
											break
										}
							}
			}
		},
		tp: function (a) {
			var b, c, d, e, f, g, l, p, h, m, r, k, v;
			this.j = a;
			for (g = a = v = this.Zj = 0; g < this.j.be; g++) - 1 != this.j.O[g].Hc && (this.j.O[g].$u = -1, this.j.O[g].vd = 0, this.j.O[g].pl = -1, a++ , this.j.O[g].Hc + 1 > v && (v = this.j.O[g].Hc + 1));
			this.bc = null;
			var t;
			if (0 < this.ph) {
				c = Array(this.ph);
				for (b = 0; b < this.ph; b++)
					for (f = this.jg[b].Wq & 32767, t = c[b] = 0; t < this.j.be; t++)
						if (this.j.O[t].wd == this.jg[b].Xq)
							for (g = 0; 8 > g && -1 != this.j.O[t].rl[g]; g++) f == this.j.O[t].rl[g] &&
								c[b]++;
				this.bc = Array(this.ph);
				for (b = 0; b < this.ph; b++) {
					this.bc[b] = new Ed;
					0 != c[b] && (this.bc[b].La = Array(2 * c[b]));
					a = 0;
					f = this.jg[b].Wq & 32767;
					for (t = 0; t < this.j.be; t++)
						if (this.j.O[t].wd == this.jg[b].Xq)
							for (g = 0; 8 > g && -1 != this.j.O[t].rl[g]; g++) f == this.j.O[t].rl[g] && (this.bc[b].La[2 * a] = this.j.O[t].Hc, this.bc[b].La[2 * a + 1] = t, a++);
					this.bc[b].uv = -1
				}
			}
			this.xe = Array(200 * v + 1);
			a = 0;
			var u = [];
			for (t = 0; t < this.Fd.length; t++) {
				b = this.Fd[t];
				for (k = 0; k < b.je + b.Fb; k++) {
					c = b.Ta[k];
					c.cb &= ~Q.Hw;
					0 <= N.Cf(c.ra) && (c.Gb = this.Sm(c.Pc, N.Cf(c.ra)));
					if (c.ra == U.vC) g = c.L[0], g.Aa[0].code == ca.ps && 0 == g.Aa[1].code && (l = {}, l.$E = c.L[0], l.name = g.Aa[0].zb, u.push(l), this.j.at(g.Aa[0].zb));
					else if (c.ra == U.tJ || c.ra == U.sJ) g = c.L[0], g.Aa[0].code == ca.ps && 0 == g.Aa[1].code && (g.Aa[0] = new ab, g.Aa[0].code = ca.Lw, g.Aa[0].value = this.j.at(g.Aa[0].zb));
					if (0 < c.nd)
						for (l = 0; l < c.nd; l++) switch (d = c.L[l], d.code) {
							case 25:
								d.value = 0;
								break;
							case 21:
								if (0 == (c.Pc & q.Ts))
									for (g = this.j.A.jd.Sp(); null != g; g = this.j.A.jd.rn()) {
										if (c.Pc == g.jf) {
											d.xp = g.oi;
											break
										}
									} else d.xp = -1;
								f = d.Dn; - 1 != f && (d.En = this.Sm(f,
									d.Rq));
								break;
							case 9:
							case 18:
							case 16:
								f = d.Dn; - 1 != f && (d.En = this.Sm(f, d.Rq));
								break;
							case 1:
								d.$b = this.Sm(d.vh, d.type);
								break;
							case 15:
							case 27:
							case 28:
							case 45:
							case 46:
							case 22:
							case 23:
							case 52:
							case 59:
							case 53:
							case 62:
							case 54:
								for (p = d, g = 0; g < p.Aa.length; g++) 0 < N.Cf(p.Aa[g].code) && (f = p.Aa[g], f.$b = this.Sm(f.vh, N.Cf(f.code)))
						}
				}
				l = 0;
				p = G.Jw | G.Iw | G.Eo;
				for (k = 0; k < b.Fb + b.je; k++) {
					c = b.Ta[k];
					e = N.Cf(c.ra);
					r = c.ra;
					m = h = g = 0;
					d = null;
					if (e >= q.Se) switch (N.Tp(r)) {
						case 262144:
						case 589824:
							l |= G.Eo;
							f = c.Pc;
							if (0 != (f & q.Ts))
								for (e = this.TH(c.Gb); - 1 !=
									e; e = this.kB()) a = this.Tz(b, a, this.j.O[e].Hc);
							else a = this.Tz(b, a, f);
							break;
						case 1638400:
							l |= G.ns;
							break;
						case -917504:
							d = c.L[0];
							g = c.L[0];
							this.op(c.Gb, c.Pc, g.$b, g.vh);
							this.op(g.$b, g.vh, c.Gb, c.Pc);
							f = N.Cf(c.ra);
							m = this.iq(f) ? I.zd | I.nm : I.zd | I.ep | I.nm;
							g = g.type;
							h = this.iq(g) ? I.zd | I.nm : I.zd | I.ep | I.nm;
							g = 3;
							break;
						case -262144:
							f = N.Cf(c.ra);
							m = this.iq(f) ? I.zd : I.zd | I.ep;
							d = c.L[0];
							g = c.L[0].type;
							h = this.iq(g) ? I.zd : I.zd | I.ep;
							g = 3;
							break;
						case -720896:
						case -786432:
							h = I.cp;
							g = 1;
							break;
						case -851968:
							h = I.bp, g = 1
					} else switch (r) {
						case -327681:
							p &=
								~G.Jw;
							break;
						case -393217:
							p |= G.Do;
							break;
						case -262145:
							p |= G.Do;
							break;
						case -196609:
							p |= G.ks + G.ms;
							break;
						case -196614:
							m = I.zd;
							d = c.L[0];
							g = 2;
							break;
						case -393222:
							m = I.zd, d = c.L[1], g = 2
					}
					if (0 != (g & 1))
						for (e = this.ig(c.Gb); - 1 != e; e = this.vf()) this.j.O[e].vd |= h;
					if (0 != (g & 2))
						for (e = this.ig(d.$b); - 1 != e; e = this.vf()) this.j.O[e].vd |= m
				}
				b.Na &= ~p;
				b.Na |= l
			}
			this.xe[a] = -1;
			l = Array(q.Pd + v + 1);
			b = k = 0;
			for (e = -q.Pd; 0 > e; e++ , b++) l[b] = k, k += this.Ou[q.Pd + e];
			for (t = 0; t < this.j.be; t++ , b++) l[b] = k, k = this.j.O[t].wd < q.Ff ? k + (this.Ou[q.Pd + this.j.O[t].wd] + N.Ph +
				1) : k + (this.Dc.Ht.jz(this.j.O[t].wd) + N.Ph + 1);
			h = k;
			this.Pb = Array(h);
			for (g = 0; g < h; g++) this.Pb[g] = 0;
			p = 0;
			f = Array(this.j.A.bg);
			for (t = 0; t < this.nn; t++)
				for (b = this.Fd[t], b.Na &= ~G.ls, d = !0, k = m = 0; k < b.Fb; k++) {
					c = b.Ta[k];
					e = N.Cf(c.ra);
					r = c.ra;
					g = -N.os(r);
					if (d)
						if (0 != (c.cb & Q.hs) && p++ , 0 > e) this.Pb[l[7 + e] + g]++;
						else {
							d = 0;
							for (e = this.ig(c.Gb); - 1 != e; e = this.vf()) this.Pb[l[q.Pd + e] + g]++ , f[d++] = e;
							f[d] = -1;
							if (-917504 == N.Tp(r))
								for (d = c.L[0], e = this.ig(d.$b); - 1 != e; e = this.vf()) {
									for (d = 0; f[d] != e && -1 != f[d];) d++; - 1 == f[d] && this.Pb[l[q.Pd + e] + g]++
								}
						} d = !1;
					if (-1507329 == c.ra || -1572865 == c.ra) d = !0, b.Na |= G.ls, 0 == m ? m = c.ra : c.ra = m, -1572865 == m && (b.Na |= G.Kw)
				}
			c = p + 1;
			for (b = 0; b < h; b++) 0 != this.Pb[b] && (k = this.Pb[b], this.Pb[b] = c, c += k + 1);
			this.ec = Array(c);
			this.Of = Array(c);
			for (g = 0; g < c; g++) this.ec[g] = null, this.Of[g] = 0;
			m = Array(h);
			for (g = 0; g < h; g++) m[g] = this.Pb[g];
			this.j.Mi = null;
			p = h = 0;
			var w;
			for (t = 0; t < this.nn; t++)
				for (b = this.Fd[t], d = !0, k = 0; k < b.Fb; k++) {
					c = b.Ta[k];
					e = N.Cf(c.ra);
					r = c.ra;
					g = -N.os(r);
					if (d)
						if (0 != (c.cb & Q.hs) && (p++ , this.ec[h] = b, this.Of[h] = k, h++), 0 > e) {
							if (w = l[q.Pd + e] + g,
								this.ec[m[w]] = b, this.Of[m[w]] = k, m[w]++ , c.ra == V.QC) {
								d = !1;
								for (g = 0; g < b.Fb && b.Ta[g].ra != V.RC && b.Ta[g].ra != V.SC; g++);
								g < b.Fb && (d = !0);
								g = c.L[0];
								if (g.Aa[0].code == ca.ps && 0 == g.Aa[1].code)
									for (e = g.Aa[0].zb, this.j.at(e), g = 0; g < u.length; g++)
										if (r = u[g], n.rb(r.name, e)) {
											this.j.Mi || (this.j.Mi = []);
											w = null;
											for (g = 0; g < this.j.Mi.length; g++)
												if (n.rb(e, this.j.Mi[g].name)) {
													w = this.j.Mi[g];
													break
												} w || (w = new dc(e), this.j.Mi.push(w));
											w.CC(b);
											w.Oz |= d;
											r.$E.WN = g + 1;
											break
										}
							}
						} else {
							d = 0;
							for (e = this.ig(c.Gb); - 1 != e; e = this.vf()) w = l[q.Pd + e] + g, this.ec[m[w]] =
								b, this.Of[m[w]] = k, m[w]++ , f[d++] = e;
							f[d] = -1;
							if (-917504 == N.Tp(r))
								for (d = c.L[0], e = this.ig(d.$b); - 1 != e; e = this.vf()) {
									for (d = 0; f[d] != e && -1 != f[d];) d++; - 1 == f[d] && (w = l[q.Pd + e] + g, this.ec[m[w]] = b, this.Of[m[w]] = k, m[w]++)
								}
						} d = !1;
					if (-1507329 == c.ra || -1572865 == c.ra) d = !0
				}
			this.Hj = Array(v + 1 + a / 2);
			for (t = u = 0; t < this.j.be; t++)
				if (v = this.j.O[t], b = l[q.Pd + t], v.cv = b, 0 != (v.Nq & z.Ug)) {
					a = 0;
					k = this.Pb[b - N.os(-786432)];
					if (0 != k)
						for (; null != this.ec[k];) {
							b = this.ec[k];
							c = b.Ta[this.Of[k]];
							f = c.L[0].value;
							d = N.TF(b);
							for (g = b.je; 0 < g; g-- , d++) c = b.Ta[d],
								c.ra == (524288 | v.wd & 65535) && (a |= f);
							k++
						}
					v.dv = a;
					b = v.Hc;
					for (g = a = 0; - 1 != this.xe[a]; a += 2)
						if (this.xe[a] == b)
							if (c = this.xe[a + 1], 0 != (c & 32768)) v.vd |= c;
							else {
								for (k = 0; k < g && this.Hj[u + k] != c;) k++;
								k == g && (this.Hj[u + g++] = c)
							} 0 < g && (v.pl = u, this.Hj[u + g++] = -1, u += g)
				} this.se[0] = 0;
			for (g = 1; g <= q.Pd; g++) this.se[g] = l[q.Pd - g];
			for (t = 0; t < this.j.be; t++)
				if (v = this.j.O[t], e = v.$a, 0 == (e & 2147483648)) {
					do a = this.j.G[e], a.Zt = v.cv, a.hc = v, a.ze = v.vd, 0 != (a.ja & z.Ug) && (a.w.$v = v.dv), 0 != (a.ja & z.Wh) && 0 == (a.ze & I.zd) && a.F.Br(!1), 0 == (a.ja & z.mx) && (a.ja &= ~z.ij,
						0 != (a.ze & I.bp) && 0 != (this.j.A.Db & D.Uw) && (a.ja |= z.ij), 0 != (a.ze & (I.zd | I.cp)) && (a.ja |= z.ij)), e = a.Mb; while (0 == (e & 2147483648))
				} this.EB = 0 != p ? !0 : !1;
			this.xe = null;
			this.sm = !0
		},
		Qr: function () {
			this.sm = !1;
			this.Of = this.ec = this.Pb = this.Hj = this.bc = null
		},
		Sm: function (a, b) {
			if (0 != (a & q.Ts)) {
				var c;
				for (c = 0; a != this.jg[c].Wq || b != this.jg[c].Xq;) c++;
				return c | 32768
			}
			for (c = 0; c < this.j.be && this.j.O[c].Hc != a;) c++;
			return c
		},
		iq: function (a) {
			var b;
			for (b = 0; b < this.j.be; b++)
				if (-1 != this.j.O[b].Hc && this.j.O[b].wd == a)
					if (0 != (this.j.O[b].Nq & z.Wh) &&
						0 == (this.j.O[b].Nq & z.Ss)) break;
					else return !1;
			return !0
		},
		ig: function (a) {
			if (0 == (a & 32768)) return this.In = -1, a;
			if (-1 == a) return -1;
			this.In = a & 32767;
			this.Gn = 0;
			return this.vf()
		},
		vf: function () {
			var a;
			if (-1 == this.In || this.Gn >= this.bc[this.In].La.length) return -1;
			a = this.bc[this.In].La[this.Gn + 1];
			this.Gn += 2;
			return a
		},
		TH: function (a) {
			if (0 == (a & 32768)) return this.Jn = -1, a;
			if (-1 == a) return -1;
			this.Jn = a & 32767;
			this.Hn = 0;
			return this.kB()
		},
		kB: function () {
			var a;
			if (-1 == this.Jn || this.Hn >= this.bc[this.Jn].La.length) return -1;
			a = this.bc[this.Jn].La[this.Hn +
				1];
			this.Hn += 2;
			return a
		},
		op: function (a, b, c, d) {
			var e, f;
			if (0 > b) {
				if (null != this.bc)
					for (e = this.bc[a & 32767], f = 0; f < e.La.length;) this.op(e.La[f + 1], e.La[f], c, d), f += 2
			} else if (0 > d) {
				if (null != this.bc)
					for (e = this.bc[c & 32767], f = 0; f < e.La.length;) this.op(a, b, e.La[f + 1], e.La[f]), f += 2
			} else {
				a = this.j.O[a];
				if (null == a.zi) a.zi = [], a = a.zi;
				else
					for (a = a.zi, b = 0; b < a.length; b += 2)
						if (d == a[b]) return;
				a.push(d);
				a.push(c)
			}
		},
		Tz: function (a, b, c) {
			var d, e, f, g, l;
			for (l = 0; l < a.Fb; l++)
				if (g = a.Ta[l], 2 <= N.Cf(g.ra)) switch (e = 32768 + I.DE, f = N.Tp(g.ra), f) {
					case -917504:
						f =
							g.L[0];
						for (d = this.ig(g.Gb); - 1 != d; d = this.vf()) d = this.j.O[d].Hc, c == d && (e = 0, b = this.Uz(b, c, f.$b));
						if (0 == e) break;
						for (d = this.ig(f.$b); - 1 != d; d = this.vf()) d = this.j.O[d].Hc, c == d && (b = this.Uz(b, c, g.Gb));
						break;
					case -786432:
						f = g.L[0], e = 32768 + f.value;
					case -851968:
						for (d = this.ig(g.Gb); - 1 != d; d = this.vf()) d = this.j.O[d].Hc, c == d && (this.xe[b++] = c, this.xe[b++] = e)
				}
			return b
		},
		Uz: function (a, b, c) {
			for (c = this.ig(c); - 1 != c; c = this.vf()) {
				c = this.j.O[c].Hc;
				var d;
				for (d = 0; d < a && (this.xe[d] != b || this.xe[d + 1] != c); d += 2);
				d == a && (this.xe[a++] =
					b, this.xe[a++] = c)
			}
			return a
		},
		SF: function (a) {
			var b, c, d, e, f, g;
			for (d = 0; d < this.nn; d++)
				for (b = this.Fd[d], e = 0; e < b.Fb + b.je; e++)
					for (c = b.Ta[e], f = 0; f < c.nd; f++) switch (c.L[f].code) {
						case 6:
						case 35:
							g = c.L[f], a.eh(g.fo)
					}
		}
	};
	G.Jw = 1;
	G.ks = 2;
	G.ms = 4;
	G.Do = 8;
	G.ns = 16;
	G.CK = 64;
	G.AK = 128;
	G.pD = 256;
	G.zK = 512;
	G.ls = 1024;
	G.Eo = 2048;
	G.Kw = 4096;
	G.qD = 8192;
	G.js = 16384;
	G.BK = 32768;
	G.Iw = G.ns + G.ks + G.ms + G.Do;
	G.Co = G.pD + G.qD;
	G.create = function (a) {
		var b = a.file.ba,
			c = a.file.P(),
			d = new G;
		d.Fb = a.file.jb();
		d.je = a.file.jb();
		d.Na = a.file.m();
		a.file.la(2);
		d.yj =
			a.file.o();
		d.Uk = a.file.o();
		d.Ta = Array(d.Fb + d.je);
		var e, f = 0;
		for (e = 0; e < d.Fb; e++) d.Ta[f++] = V.create(a);
		for (e = 0; e < d.je; e++) d.Ta[f++] = U.create(a);
		a.file.seek(b - c);
		return d
	};
	Q.oD = 1;
	Q.yK = 2;
	Q.mD = 4;
	Q.Bo = 8;
	Q.cm = 16;
	Q.hs = 32;
	Q.xK = 64;
	Q.Hw = 128;
	Q.nD = Q.hs + Q.oD + Q.mD + Q.Bo + Q.cm;
	Q.uk = 1;
	cb.OE = 0;
	cb.OM = 1;
	xa.qx = 0;
	xa.zM = 1;
	xa.AM = 2;
	xa.BM = 3;
	xa.prototype = {
		load: function (a) {
			this.oi = a.m();
			this.jf = a.m();
			this.ou = a.o();
			this.pu = a.o();
			this.nu = a.m();
			a.m();
			this.Jz = a.m();
			a.la(2)
		},
		Zc: function (a, b) {
			this.mu[a] = b
		}
	};
	ec.prototype = {
		load: function (a) {
			this.pf =
				a.file.o();
			this.list = Array(this.pf);
			var b, c = 0;
			for (b = 0; b < this.pf; b++) this.list[b] = new xa, this.list[b].load(a.file), this.list[b].oi + 1 > c && (c = this.list[b].oi + 1), this.list[b].oq = a.Cc.Cj(this.list[b].jf).qe;
			this.ua = Array(c);
			for (b = 0; b < this.pf; b++) this.ua[this.list[b].oi] = b
		},
		hz: function (a) {
			return this.list[a]
		},
		iG: function (a) {
			return a < this.ua.length ? this.list[this.ua[a]] : null
		},
		rn: function () {
			var a;
			if (this.nq < this.pf) {
				do
					if (a = this.list[this.nq++], 2 <= a.oq) return a; while (this.nq < this.pf)
			}
			return null
		},
		Sp: function () {
			this.nq =
				0;
			return this.rn()
		}
	};
	S.uD = 1;
	S.vD = 2;
	S.LK = 4;
	S.em = 16;
	S.qs = 32;
	S.rs = 64;
	S.MK = 65536;
	S.dm = 131072;
	S.NK = 262144;
	S.prototype = {
		load: function (a) {
			this.ya = a.o();
			this.Yl = a.oB();
			this.Zl = a.oB();
			this.Eq = a.o();
			this.Gq = a.o();
			a.Sb();
			this.Jx = this.ya;
			this.Mx = this.Yl;
			this.Nx = this.Zl;
			this.Kx = this.Eq;
			this.Lx = this.Gq
		},
		reset: function () {
			this.ya = this.Jx;
			this.Yl = this.Mx;
			this.Zl = this.Nx;
			this.Eq = this.Kx;
			this.Gq = this.Lx;
			this.x = this.y = this.Np = this.Op = 0;
			this.qp = this.Rj = this.tl = this.sl = null;
			this.Ar(0);
			this.scale = 1;
			this.QB(1);
			this.RB(1);
			this.VB(this.app.ia / 2);
			this.YB(this.app.na / 2);
			this.UB(this.app.ia / 2);
			this.XB(this.app.na / 2);
			this.ZB(!1);
			this.ya & S.dm ? (this.Sd = !0, this.Yp()) : (this.Sd = !1, this.show())
		},
		IF: function () {
			this.Rb.jI()
		},
		ZE: function (a) {
			null == this.sl && (this.sl = new L);
			this.sl.add(a)
		},
		Bx: function (a) {
			null == this.tl && (this.tl = new L);
			this.tl.add(a)
		},
		mp: function (a) {
			null == this.qp && (this.qp = new L);
			this.qp.add(a)
		},
		yF: function (a, b) {
			this.Rb = new za;
			this.Rb.x = a;
			this.Rb.y = b;
			this.ub = new za;
			this.ub.x = a;
			this.ub.y = b;
			this.Ea = new za;
			this.Ea.x = a;
			this.Ea.y = b;
			this.Ar(0);
			this.scale = 1;
			this.QB(1);
			this.RB(1);
			this.VB(this.app.ia / 2);
			this.YB(this.app.na / 2);
			this.UB(this.app.ia / 2);
			this.XB(this.app.na / 2);
			this.ZB(!1);
			this.app.Ud.Qd(this.Rb);
			this.app.Ud.Qd(this.ub);
			this.app.Ud.Qd(this.Ea);
			this.EI()
		},
		Ar: function (a) {
			this.angle = a;
			this.Rb.angle = a;
			this.ub.angle = a;
			this.Ea.angle = a
		},
		QB: function (a) {
			this.Vb = a;
			this.Rb.Vb = a;
			this.ub.Vb = a;
			this.Ea.Vb = a
		},
		RB: function (a) {
			this.Wb = a;
			this.Rb.Wb = a;
			this.ub.Wb = a;
			this.Ea.Wb = a
		},
		VB: function (a) {
			this.wa = a;
			this.Rb.wa = a;
			this.ub.wa =
				a;
			this.Ea.wa = a
		},
		YB: function (a) {
			this.va = a;
			this.Rb.va = a;
			this.ub.va = a;
			this.Ea.va = a
		},
		UB: function (a) {
			this.oo = a = this.app.ia - a;
			this.Rb.oo = a;
			this.ub.oo = a;
			this.Ea.oo = a
		},
		XB: function (a) {
			this.qo = a = this.app.na - a;
			this.Rb.qo = a;
			this.ub.qo = a;
			this.Ea.qo = a
		},
		ZB: function (a) {
			this.Kf = a;
			this.Rb.Kf = a;
			this.ub.Kf = a;
			this.Ea.Kf = a
		},
		mI: function (a, b) {
			this.Rb.x = a;
			this.Rb.y = b;
			this.ub.x = a;
			this.ub.y = b;
			this.Ea.x = a;
			this.Ea.y = b;
			this.show()
		},
		EI: function () {
			this.ya & S.em ? this.show() : this.Yp()
		},
		Yp: function () {
			this.ya &= ~S.dm;
			this.Sd && (this.Rb.visible = !1, this.ub.visible = !1, this.Sd = this.Ea.visible = !1)
		},
		show: function () {
			0 == this.Sd && (this.Rb.visible = !0, this.ub.visible = !0, this.Sd = this.Ea.visible = !0)
		},
		vy: function () {
			null != this.Rb && (this.app.Ud.removeChild(this.Rb), this.Rb = null);
			null != this.ub && (this.app.Ud.removeChild(this.ub), this.ub = null);
			null != this.Ea && (this.app.Ud.removeChild(this.Ea), this.Ea = null)
		},
		YE: function (a, b, c, d) {
			var e = new Z;
			e.left = a;
			e.top = b;
			e.right = c;
			e.bottom = d;
			null == this.Rj && (this.Rj = new L);
			this.Rj.add(e)
		},
		jG: function (a, b) {
			a += this.x;
			b += this.y;
			if (null != this.Rj) {
				var c, d;
				for (c = 0; c < this.Rj.size(); c++)
					if (d = this.Rj.get(c), a >= d.left && b >= d.top && a < d.right && b < d.bottom) return d
			}
			return null
		},
		Ui: function (a, b, c, d, e) {
			b = b + this.x - a.wa;
			c = c + this.y - a.va;
			var f = b + a.width,
				g = c + a.height,
				l = c;
			0 != d && (l = g - d);
			var p, h;
			h = e == ra.xo ? this.sl : this.tl;
			if (null == h) return null;
			for (e = 0; e < h.size(); e++)
				if (p = h.get(e), p.x < f && p.x + p.width > b && p.y < g && p.y + p.height > l && p.Ui(a, b, c, d)) return p;
			return null
		},
		Kr: function (a, b, c, d, e, f) {
			f = f == ra.xo ? this.sl : this.tl;
			if (null == f) return null;
			a += this.x;
			b += this.y;
			c += this.x;
			d += this.y;
			0 != e && (b = d - e);
			for (e = 0; e < f.size(); e++) {
				var g = f.get(e);
				if (g.x < c && g.x + g.width > a && g.y < d && g.y + g.height > b && g.Kr(a, b, c, d)) return g
			}
			return null
		}
	};
	ga.prototype = {
		mb: function (a, b, c) {
			if (null != this.aH)
				if (this.type == q.sE) {
					var d = this.Jd.ac,
						e;
					switch (d.ui) {
						case 1:
							switch (d.sh) {
								case 1:
									a.gd(b + this.x, c + this.y, this.width, this.height, this.sj, this.Dd, this.Ed);
									break;
								case 2:
									a.lc(b + this.x, c + this.y, this.width, this.height, this.sj, this.Dd, this.Ed);
									break;
								case 3:
									a.Kv(b + this.x, c + this.y, this.width, this.height,
										this.sj, this.Dd, this.Ed)
							}
							break;
						case 2:
							switch (d.sh) {
								case 1:
									a.gd(b + this.x, c + this.y, this.width, this.height, this.sj, this.Dd, this.Ed);
									break;
								case 2:
									a.Jv(b + this.x, c + this.y, this.width, this.height, this.sj, this.tt, 0 != this.vz, this.Dd, this.Ed);
									break;
								case 3:
									a.tB(b + this.x, c + this.y, this.width, this.height, this.sj, this.tt, 0 != this.vz, this.Dd, this.Ed)
							}
							break;
						case 3:
							switch (d.sh) {
								case 2:
									e = this.app.$.Hb(d.rh);
									a.uB(e, b + this.x, c + this.y, this.width, this.height, this.Dd, this.Ed);
									break;
								case 3:
									e = this.app.$.Hb(d.rh), a.vB(e, b + this.x,
										c + this.y, this.width, this.height, this.Dd, this.Ed)
							}
					}
					if (0 < this.borderWidth) switch (d.sh) {
						case 1:
							var f = e = 0,
								g = this.width,
								l = this.height;
							0 != (d.xn & Fa.ZD) && (e += g, g = -g);
							0 != (d.xn & Fa.$D) && (f += l, l = -l);
							a.gd(b + this.x + e, c + this.y + f, b + this.x + e + g, c + this.y + f + l, this.borderColor, this.borderWidth);
							break;
						case 2:
							a.fr(b + this.x, c + this.y, this.width, this.height, this.borderColor, this.borderWidth);
							break;
						case 3:
							a.sB(b + this.x, c + this.y, this.width, this.height, 1, this.borderColor, this.borderWidth)
					}
				} else this.type == q.rE ? a.kI(this.Rc, b +
					this.x + this.Rc.wa, c + this.y + this.Rc.va, 0, 1, 1, this.Dd, this.Ed) : null != this.V && this.V.mb(a, b, c);
			else a.Ie(this.Rc, b + this.x + this.Rc.wa, c + this.y + this.Rc.va, 0, 1, 1, this.Dd, this.Ed)
		},
		LB: function (a, b) {
			this.Dd = a;
			this.Ed = b
		},
		Zc: function (a, b) {
			b.Rb.Qd(this);
			this.type == q.hx && b.mp(this);
			switch (this.Ee) {
				case Y.Zo:
					b.ZE(this);
					b.Bx(this);
					break;
				case Y.If:
					b.Bx(this);
					break;
				case Y.Rs:
					b.YE(this.x, this.y, this.x + this.width, this.y + this.height)
			}
		},
		Ui: function (a, b, c, d) {
			var e;
			switch (this.type) {
				case 0:
					return e = this.height, this.Ee ==
						Y.If && (e = D.Fo), a.hw(b, c, d, this.x, this.y, this.width, e, 0);
				case 1:
					if (0 != this.Nk) return !0;
					e = B.vk;
					this.Ee == Y.If && (e = B.wk);
					e = this.Rc.Rf(e, 0, 1, 1);
					return a.Ui(b, c, d, e, this.x, this.y, 0);
				case 11:
					if (0 != this.Nk) return !0;
					e = B.vk;
					this.Ee == Y.If && (e = B.wk);
					e = this.Rc.Rf(e, 0, 1, 1);
					return a.Ui(b, c, d, e, this.x, this.y, 0)
			}
			return !1
		},
		Kr: function (a, b, c, d) {
			var e;
			switch (this.type) {
				case 0:
					if (this.Ee == Y.If) {
						a = this.y + Math.min(this.height, D.Fo);
						if (this.y < d && a > b) return !0;
						break
					}
					return !0;
				case 1:
					if (0 != this.Nk) return !0;
					e = B.vk;
					this.Ee == Y.If &&
						(e = B.wk);
					e = this.Rc.Rf(e, 0, 1, 1);
					return e.hw(this.x, this.y, 0, a, b, c, d, 0);
				case 11:
					if (0 != this.Nk) return !0;
					e = B.vk;
					this.Ee == Y.If && (e = B.wk);
					e = this.Rc.Rf(e, 0, 1, 1);
					return e.hw(this.x, this.y, 0, a, b, c, d, 0)
			}
			return !1
		}
	};
	q.tM = 1;
	q.rM = 2;
	q.vM = 4;
	q.uM = 8;
	q.ap = 16;
	q.BE = 32;
	q.sM = 64;
	q.qM = 1;
	q.pM = 2;
	q.px = 4;
	q.Pd = 7;
	q.ix = -7;
	q.OL = -6;
	q.NL = -5;
	q.mm = -4;
	q.Xo = -3;
	q.QL = -2;
	q.RL = -1;
	q.sE = 0;
	q.rE = 1;
	q.Se = 2;
	q.Tg = 3;
	q.jx = 4;
	q.Yo = 5;
	q.Qs = 6;
	q.lm = 7;
	q.PL = 8;
	q.fx = 9;
	q.ML = 10;
	q.hx = 11;
	q.gx = 10;
	q.Ff = 32;
	q.Ts = 32768;
	q.prototype = {
		ru: function (a) {
			this.zn = a.m();
			this.qe =
				a.m();
			this.wh = a.m();
			a.la(2);
			this.Xu = a.o();
			this.Yu = a.o()
		},
		load: function (a) {
			a.seek(this.QA);
			switch (this.qe) {
				case 0:
					this.ac = new Fa;
					break;
				case 1:
					this.ac = new gc;
					break;
				default:
					this.ac = new z
			}
			this.ac.load(a, this.qe);
			this.RA = 0
		},
		XI: function () {
			this.ac = null
		},
		Yb: function (a, b) {
			this.ac.Yb(a, b)
		}
	};
	fc.prototype = {
		Ah: function (a) {
			this.yi = a.o();
			this.kc = Array(this.yi);
			var b;
			for (b = this.fg = 0; b < this.yi; b++)
				for (var c = 0, d; 32639 != c;)
					if (c = a.m(), a.m(), d = a.o(), 0 != d) {
						d = a.ba + d;
						switch (c) {
							case 17476:
								this.kc[b] = new q;
								this.kc[b].ru(a);
								this.kc[b].zn >= this.fg && (this.fg = this.kc[b].zn + 1);
								break;
							case 17477:
								this.kc[b].Zu = a.Sb();
								break;
							case 17478:
								this.kc[b].QA = a.ba
						}
						a.seek(d)
					} this.xh = Array(this.fg);
			for (b = 0; b < this.yi; b++) this.xh[this.kc[b].zn] = b;
			this.An = Array(this.fg);
			this.xi = Array(this.fg);
			for (a = 0; a < this.fg; a++) this.An[a] = 0, this.xi[a] = 0
		},
		Cj: function (a) {
			return this.kc[this.xh[a]]
		},
		lI: function () {
			var a;
			for (a = 0; a < this.yi; a++) this.kc[a].wh &= ~q.ap
		},
		DI: function (a) {
			this.kc[this.xh[a]].wh |= q.ap
		},
		ez: function () {
			var a;
			for (a = 0; a < this.yi; a++)
				if (0 != (this.kc[a].wh &
					q.ap)) return this.Jp = a, this.kc[a];
			return null
		},
		iz: function () {
			if (this.Jp < this.yi) {
				var a;
				for (a = this.Jp + 1; a < this.yi; a++)
					if (0 != (this.kc[a].wh & q.ap)) return this.Jp = a, this.kc[a]
			}
			return null
		},
		Je: function () {
			var a;
			for (a = 0; a < this.fg; a++) this.An[a] = 0
		},
		Si: function (a) {
			this.An[a] = 1
		},
		load: function (a) {
			var b;
			for (b = 0; b < this.fg; b++)
				if (0 != this.An[b]) {
					if (0 == this.xi[b] || 0 != this.xi[b] && 0 != (this.kc[this.xh[b]].RA & q.BE)) this.kc[this.xh[b]].load(a), this.xi[b] = 1
				} else 0 != this.xi[b] && (this.kc[this.xh[b]].XI(), this.xi[b] = 0);
			this.Je()
		},
		Yb: function (a, b) {
			var c;
			for (c = 0; c < this.fg; c++) 0 != this.xi[c] && this.kc[this.xh[c]].Yb(a, b)
		}
	};
	Y.kx = 0;
	Y.Zo = 1;
	Y.If = 2;
	Y.Rs = 3;
	Y.tE = 4;
	gc.prototype = {
		load: function (a) {
			a.la(4);
			this.NA = a.m();
			this.JA = a.m();
			this.KA = a.o();
			this.LA = a.o();
			this.rh = a.m()
		},
		Yb: function (a) {
			null != a && (a = a.eh(this.rh), -1 != a && (this.rh = a))
		}
	};
	Fa.ZD = 1;
	Fa.$D = 2;
	Fa.prototype = {
		load: function (a) {
			a.la(4);
			this.NA = a.m();
			this.JA = a.m();
			this.KA = a.o();
			this.LA = a.o();
			this.Kq = a.m();
			this.Jq = a.Sc();
			this.sh = a.m();
			this.ui = a.m();
			if (1 == this.sh) this.xn = a.m();
			else switch (this.ui) {
				case 1:
					this.cg =
						this.ml = a.Sc();
					break;
				case 2:
					this.cg = a.Sc();
					this.ml = a.Sc();
					this.wn = a.o();
					break;
				case 3:
					this.rh = a.m()
			}
		},
		Yb: function (a) {
			3 == this.ui && null != a && (a = a.eh(this.rh), -1 != a && (ocImage = a))
		}
	};
	z.$L = 1;
	z.ZL = 2;
	z.xE = 4;
	z.ox = 8;
	z.Ug = 16;
	z.Vh = 32;
	z.bM = 64;
	z.dM = 128;
	z.AE = 256;
	z.Wh = 512;
	z.aM = 1024;
	z.zE = 2048;
	z.Ss = 4096;
	z.nx = 8192;
	z.ij = 16384;
	z.mx = 32768;
	z.cM = 65536;
	z.lx = 131072;
	z.yE = 1048576;
	z.SL = 1;
	z.YL = 2;
	z.vE = 4;
	z.$o = 8;
	z.UL = 4;
	z.TL = 48;
	z.XL = 16;
	z.WL = 32;
	z.VL = 48;
	z.uE = 64;
	z.wE = 128;
	z.fM = 1;
	z.mM = 2;
	z.lM = 4;
	z.nM = 8;
	z.kM = 16;
	z.hM = 32;
	z.eM = 64;
	z.jM = 128;
	z.iM = 256;
	z.oM = 512;
	z.gM = 1024;
	z.prototype = Y;
	z.prototype = {
		load: function (a, b) {
			var c = a.ba;
			this.Uu = Array(8);
			var d;
			a.la(4);
			a.la(2);
			var e = a.m();
			a.la(2);
			var f = a.m(),
				g = a.m(),
				l = a.m();
			this.eg = a.o();
			for (d = 0; 8 > d; d++) this.Uu[d] = a.P();
			a.m();
			var p = a.m(),
				h = a.m();
			this.vi = a.m();
			var m = a.m();
			this.sf = a.o();
			a.Sc();
			d = a.o();
			var n = a.o();
			this.vn = this.nl = null;
			0 != l && (a.seek(c + l), this.dg = new $c, this.dg.load(a));
			0 != p && (a.seek(c + p), this.ol = new Wc, this.ol.load(a, 0 != (this.vi & z.wE)));
			0 != h && (a.seek(c + h), this.yn = new Vc, this.yn.load(a));
			0 !=
				g && (a.seek(c + g), this.ti = new Ia, this.ti.load(a));
			0 != f && (a.seek(c + f), this.Gc = new ic, this.Gc.load(a));
			0 != m && (a.seek(c + m), f = a.o(), a.la(4), a.o(), a.o(), this.OA = a.o(), 0 != f - 20 && (this.MA = a.ba));
			0 != d && (a.seek(c + d), this.nl = new qa, this.nl.load(a));
			0 != n && (a.seek(c + n), this.vn = new qa, this.vn.load(a));
			if (0 != e) switch (a.seek(c + e), b) {
				case 3:
				case 4:
					this.Gc = new kc;
					this.Gc.load(a);
					break;
				case 5:
				case 6:
				case 7:
					this.Va = new ha;
					this.Va.load(a);
					break;
				case 8:
					this.Gc = new jc;
					this.Gc.load(a);
					this.eg &= ~(z.Wh | z.Ss | z.xE);
					break;
				case 9:
					this.Gc =
						new hc, this.Gc.load(a)
			}
		},
		Yb: function (a, b) {
			null != this.ti && this.ti.Yb(a);
			null != this.Gc && this.Gc.Yb(a, b);
			null != this.Va && this.Va.Yb(a, b)
		}
	};
	hc.prototype = {
		load: function (a) {
			a.la(4);
			this.th = a.o();
			this.uh = a.o();
			a.m();
			this.PA = a.m();
			this.ud = a.o();
			a.la(8);
			this.Vu = a.Sb()
		},
		Yb: function () { }
	};
	ic.prototype = {
		load: function (a) {
			a.la(2);
			this.ly = a.o();
			this.ny = a.o();
			this.my = a.o()
		},
		Yb: function () { }
	};
	ha.fK = 0;
	ha.eK = 1;
	ha.dD = 2;
	ha.cD = 3;
	ha.dK = 4;
	ha.gK = 5;
	ha.bs = 256;
	ha.prototype = {
		load: function (a) {
			a.la(4);
			this.th = a.o();
			this.uh = a.o();
			this.Wu = a.m();
			this.Fe = a.m();
			this.Oj = a.m();
			this.wi = a.m();
			switch (this.Fe) {
				case 1:
				case 4:
					this.jl = a.m();
					this.frames = Array(this.jl);
					var b;
					for (b = 0; b < this.jl; b++) this.frames[b] = a.m();
					break;
				case 2:
				case 3:
				case 5:
					if (this.Kq = a.m(), this.Jq = a.Sc(), this.sh = a.m(), this.ui = a.m(), 1 == this.sh) this.xn = a.m();
					else switch (this.ui) {
						case 1:
							this.cg = a.Sc();
							break;
						case 2:
							this.cg = a.Sc(), this.ml = a.Sc(), this.wn = a.o()
					}
			}
		},
		Yb: function (a, b) {
			switch (this.Fe) {
				case 1:
				case 4:
					var c;
					for (c = 0; c < this.jl; c++) null != a && a.eh(this.frames[c]);
					break;
				case 5:
					null != b && b.eh(this.wi)
			}
		}
	};
	jc.prototype = {
		load: function (a) {
			a.o();
			a.o();
			this.ud = a.o();
			a.Sc();
			this.th = a.o();
			this.uh = a.o();
			a.la(4);
			var b = a.o();
			this.text = a.Sb(b)
		},
		Yb: function () { }
	};
	ma.RM = 0;
	ma.QM = 1;
	ma.SM = 2;
	ma.TM = 4;
	ma.PM = 15;
	ma.QE = 256;
	ma.vx = 512;
	ma.prototype = {
		load: function (a) {
			this.Vl = a.P();
			this.mo = a.m();
			this.kw = a.Sc();
			this.Kh = a.Sb()
		},
		Yb: function (a, b) {
			null != b && b.eh(this.Vl)
		}
	};
	kc.prototype = {
		load: function (a) {
			var b = a.ba;
			a.la(4);
			this.jv = a.o();
			this.kv = a.o();
			this.Qj = a.o();
			this.Eb = Array(this.Qj);
			var c = Array(this.Qj),
				d;
			for (d = 0; d < this.Qj; d++) c[d] = a.o();
			for (d = 0; d < this.Qj; d++) this.Eb[d] = new ma, a.seek(b + c[d]), this.Eb[d].load(a)
		},
		Yb: function (a, b) {
			var c;
			for (c = 0; c < this.Qj; c++) this.Eb[c].Yb(a, b)
		}
	};
	E.Kg = 1;
	E.Rw = 2;
	E.eL = 4;
	E.Qh = 8;
	E.Rh = 16;
	E.KD = 32;
	E.Lg = 8192;
	E.dL = 16384;
	E.fL = 32768;
	E.prototype = {
		PB: function (a, b) {
			if (this.b.vb != a || this.b.wb != b) {
				0 <= a && (this.b.vb = a);
				0 <= b && (this.b.wb = b);
				this.b.K = !0;
				var c = this.c.h.$.Bj(this.b.Ia, this.b.ab, this.b.vb, this.b.wb);
				this.J = c.width;
				this.I = c.height;
				this.fa = c.wa;
				this.ga = c.va
			}
		},
		aC: function (a, b,
			c, d) {
			var e = this.qd;
			b = this.c.It(a.xp, a.Sx, b, c, d, h.Dw | h.sk, e, -1);
			0 <= b && (b = this.c.G[b], null != b.w ? (b.b.Fa = d, b.w.Bz(b, O.dx, !1), b.b.X = a.FI, b.w.aa.fq(this), -1 != e && 0 != (b.ja & z.Wh) && (this.c.A.Za[e].ya & (S.dm | S.em)) != S.em && b.F.tn(), this.c.v.Em(b), 0 != (this.ja & z.Vh) && this.ha.Jf(t.to) && (this.ha.rp(t.to), this.ha.sp())) : this.c.bf(b.Cb))
		},
		S: function () { },
		handle: function () { },
		ah: function () { },
		jy: function () { },
		display: function () { },
		sb: function () { },
		bG: function () {
			return null
		},
		LB: function () { },
		bt: function () { },
		Kk: function () { },
		ii: function () {
			return 0
		},
		kk: function () { },
		Ej: function () { },
		Sl: function () { },
		Qc: function () {
			return -1
		},
		$k: function () {
			return 0
		},
		ee: function () { },
		ci: function () { },
		Yk: function () { }
	};
	lc.prototype = n.extend(new E, {
		handle: function () {
			this.F.handle();
			this.b.K && (this.b.K = !1)
		},
		bt: function (a, b, c, d, e) {
			this.pa = this.c.A.Za[d];
			this.ma = e;
			this.pa.Ea.Qd(this)
		},
		mb: function (a, b, c) {
			if (this.ma && (0 == (this.W & E.Qh) || this.F.tg)) {
				var d = this.F.xc;
				this.F.U & w.ME && (d |= w.vw);
				var e = this.c.h.$.Hb(this.b.Ia);
				e && (this.qk ? a.Ii(this.qk, b + this.u -
					this.c.ca + this.pa.x - e.wa, c + this.s - this.c.ea + this.pa.y - e.va, this.qk.width * this.b.vb, this.qk.height * this.b.wb, d, this.F.oc) : a.Ie(e, b + this.u - this.c.ca + this.pa.x, c + this.s - this.c.ea + this.pa.y, this.b.ab, this.b.vb, this.b.wb, d, this.F.oc))
			}
		},
		ii: function () {
			return this.pa.Ea.removeChild(this)
		},
		kk: function () {
			this.ma = !0
		},
		Ej: function () {
			this.ma = !1
		},
		Qc: function () {
			return this.pa.Ea.Qc(this)
		},
		$k: function () {
			return this.pa.Ea.children.length
		},
		ee: function (a) {
			a >= this.pa.Ea.children.length && (a = this.pa.Ea.children.length);
			0 > a && (a = 0);
			this.pa.Ea.ee(this, a)
		},
		Sl: function (a) {
			this.F.xc = w.Oe;
			this.F.oc = a
		}
	});
	J.yw = 1;
	J.KC = 2;
	J.MC = 4;
	J.$J = 8;
	J.NC = 16;
	J.YJ = 32;
	J.LJ = 64;
	J.bK = 128;
	J.KJ = 256;
	J.cK = 512;
	J.aK = 1024;
	J.OJ = 2048;
	J.wo = 4096;
	J.NJ = 8192;
	J.xw = 16384;
	J.UJ = 32768;
	J.IC = 65536;
	J.VJ = 131072;
	J.MJ = 262144;
	J.LC = 524288;
	J.WJ = 1048576;
	J.JC = 2097152;
	J.TJ = 12582912;
	J.QJ = 0;
	J.SJ = 4194304;
	J.RJ = 8388608;
	J.PJ = 12582912;
	J.ZJ = 16777216;
	J.XJ = 33554432;
	J.prototype = n.extend(new E, {
		fC: function (a, b, c) {
			b = a.Gc;
			this.J = b.th;
			this.I = b.uh;
			this.ud = b.ud;
			0 != (this.ud & J.NC) && (this.ud |=
				J.IC); - 1 == c && (c = 0, 0 != (this.ud & J.xw) && (c = b.PA));
			null == b.Vu || 0 != b.Vu.length || 0 == (this.ud & J.xw) || c >= this.c.h.df || c == this.c.h.he || (this.Sd = 0 != (a.vi & z.$o) ? !0 : !1, this.sc = new za, this.sc.x = this.u - this.c.ca, this.sc.y = this.s - this.c.ea, this.c.h.Ud.Qd(this), this.hv = this.u, this.iv = this.s, this.B = new m(this.c.h, this.c.h.file, this.c.h.path, !0), this.B.MB(this.c.h, c, this.ud, this.sc, this.J, this.I), this.B.digest(), 0 != (this.ud & J.wo) && null == this.c.h.lf && (this.c.h.lf = this, this.c.h.D.pause()), this.B.ew(), this.B.Er((this.c.h.Xi +
				this.sc.x) * this.c.h.Vb, (this.c.h.Yi + this.sc.y) * this.c.h.Wb), this.B.io(), this.c.h.Wa.push(this.B))
		},
		S: function (a) {
			this.fC(a, !0, -1)
		},
		handle: function () {
			this.w.move();
			if (null != this.B) {
				if (this.hv != this.u || this.iv != this.s) this.sc.x = this.u - this.c.ca, this.sc.y = this.s - this.c.ea, this.hv = this.u, this.iv = this.s, this.B.Er(this.sc.x * this.c.h.Vb, this.sc.y * this.c.h.Wb), this.YI();
				0 == this.B.io() ? (this.Lp(), 0 != (this.ud & J.wo) && null != this.B.sa && this.B.sa.lf == this && (this.B.sa.lf = null, this.B.sa.D.resume()), this.B = null) :
					(this.VA = this.level, this.level = this.B.he)
			}
		},
		mb: function (a) {
			this.Sd && null != this.B && this.B.Ey(a, this.sc.x, this.sc.y)
		},
		sb: function () {
			if (null != this.B) {
				switch (this.B.Pa) {
					case 3:
						this.B.Bm()
				}
				this.Lp();
				this.B.Jy();
				0 != (this.ud & J.wo) && null != this.B.sa && this.B.sa.lf == this && (this.B.sa.lf = null, this.B.sa.D.resume());
				this.B = null
			}
		},
		Lp: function () {
			var a;
			for (a = 0; a < this.c.h.Wa.length; a++)
				if (this.c.h.Wa[a] == this.B) {
					this.c.h.Wa.splice(a, 1);
					break
				} this.c.h.Ud.removeChild(this.sc)
		},
		PO: function () {
			if (null != this.B) {
				if (null !=
					this.B.D) {
					this.B.D.gb = h.ys;
					return
				}
				this.sb(!0)
			}
			this.fC(this.T, !1, -1)
		},
		UN: function () {
			null != this.B && (null != this.B.D && (this.B.D.gb = h.xs), 0 != (this.ud & J.wo) && null != this.B.sa && this.B.sa.lf == this && (this.B.sa.lf = null, this.B.sa.D.resume()))
		},
		Yp: function () {
			this.Sd = !1
		},
		show: function () {
			this.Sd = !0
		},
		wO: function (a) {
			null != this.B && null != this.B.D && 0 <= a && 4096 > a && (this.B.D.gb = h.Io, this.B.D.Ol = 32768 | a)
		},
		ob: function () {
			null != this.B && null != this.B.D && (this.B.D.gb = h.Jo)
		},
		GO: function () {
			null != this.B && null != this.B.D && (this.B.D.gb =
				h.zs)
		},
		QO: function () {
			null != this.B && null != this.B.D && (this.B.D.gb = h.bE)
		},
		pause: function () {
			null != this.B && null != this.B.D && this.B.D.pause()
		},
		resume: function () {
			null != this.B && null != this.B.D && this.B.D.resume()
		},
		WO: function (a, b) {
			null != this.B && this.B.AI(a, b)
		},
		VO: function (a, b) {
			null != this.B && this.B.zI(a, b)
		},
		LG: function () {
			return null != this.B && null != this.B.D ? 0 != this.B.D.wf : !1
		},
		tN: function () {
			return null == this.B
		},
		vO: function () {
			return this.Sd
		},
		YN: function () {
			return this.level != this.VA
		},
		kO: function (a) {
			return null !=
				this.B ? this.B.fz(a) : ""
		},
		lO: function (a) {
			return null != this.B ? this.B.gz(a) : 0
		},
		iO: function () {
			return this.level + 1
		},
		bw: function () { },
		aw: function () { },
		yN: function () {
			null != this.B && this.Sd && (hoAdRunHeader.h.NH.removeChild(this), hoAdRunHeader.h.NH.Qd(this))
		},
		YI: function () {
			if (null != this.B && null != this.B.D) {
				var a = this.B.D,
					b = 0,
					c;
				for (c = 0; c < a.pb; c++) {
					for (; null == a.G[b];) b++;
					var d = a.G[b];
					b++;
					d.Yk()
				}
			}
		},
		ci: function () {
			this.B.Er((this.c.h.Xi + this.sc.x) * this.c.h.Vb, (this.c.h.Yi + this.sc.y) * this.c.h.Wb);
			null != this.B && this.B.Al()
		}
	});
	mc.prototype = {
		S: function () {
			this.wb = this.vb = 1;
			this.ab = 0;
			this.Ic = -1
		},
		sb: function () { }
	};
	ba.Fw = 15;
	ba.YC = 240;
	ba.ZC = 4;
	ba.WC = 61440;
	ba.XC = 12;
	ba.$C = 512;
	ba.bD = 1024;
	ba.aD = 2048;
	ba.prototype = n.extend(new E, {
		S: function () {
			this.pc = -1;
			this.$n = this.nc = 0;
			this.J = this.I = 1;
			if (null == this.T.Va) this.I = this.Vc = this.J = this.Uc = 1;
			else {
				var a = this.T.Va;
				this.J = this.Uc = a.th;
				this.I = this.Vc = a.uh;
				this.md = a.Oj;
				this.type = a.Fe;
				switch (this.type) {
					case 5:
						var b = this.pc; - 1 == b && (b = a.wi);
						this.font = this.c.h.Ab.ff(b);
						this.pd = this.font.ye();
						this.nc =
							a.cg;
						break;
					case 2:
					case 3:
						this.nc = a.cg, this.$n = a.ml
				}
			}
			a = this.T.Gc;
			this.bb = a.ny;
			this.yc = a.my;
			this.qa = a.ly;
			this.qj = !1
		},
		sb: function () { },
		handle: function () {
			this.F.handle();
			this.b.K && (this.b.K = !1)
		},
		Qf: function () {
			var a = this.T.Va;
			if (5 == this.type) {
				var b = rsFont; - 1 == b && (b = a.wi);
				return this.c.h.Ab.Vp(b)
			}
			return null
		},
		jk: function (a, b) {
			5 == this.type && (this.pc = this.c.h.Ab.pp(a), this.font = this.c.h.Ab.ff(this.pc), this.pd = this.font.ye(), null != b && (this.J = this.Uc = b.right - b.left, this.I = this.Vc = b.bottom - b.top), this.Sa())
		},
		Up: function () {
			return this.nc
		},
		Cr: function (a) {
			this.nc = a;
			this.Sa()
		},
		iy: function (a) {
			0 != this.qj || n.gu(a) || (this.qj = !0)
		},
		Ep: function (a) {
			0 == this.qj ? (a = n.ke(a), a < this.bb && (a = this.bb), a > this.yc && (a = this.yc), a != Math.round(this.qa) && (this.qa = a, this.b.K = !0, this.Sa())) : (a < this.bb && (a = this.bb), a > this.yc && (a = this.yc), a != this.qa && (this.qa = a, this.b.K = !0, this.Sa()))
		},
		FN: function (a) {
			this.iy(a);
			this.Ep(this.qa + a)
		},
		PN: function (a) {
			this.iy(a);
			this.Ep(this.qa - a)
		},
		ON: function (a) {
			this.bb = a;
			this.Ep(this.qa)
		},
		NN: function (a) {
			this.yc =
				a;
			this.Ep(this.qa)
		},
		LN: function (a) {
			this.nc = a;
			this.Sa()
		},
		MN: function (a) {
			this.$n = a;
			this.Sa()
		},
		KN: function () {
			return this.qa
		},
		JN: function () {
			return this.bb
		},
		IN: function () {
			return this.yc
		},
		GN: function () {
			return this.nc
		},
		HN: function () {
			return this.$n
		},
		Kk: function (a, b, c, d, e, f) {
			null != this.T.Va && 1 != this.Ca && (this.Ca = !0, this.Hx = d, this.ma = e, this.pa = this.c.A.Za[c], this.da = this.Hx ? this.pa.ub : this.pa.Ea, 0 > f ? this.da.Qd(this) : this.da.np(this, f), 5 != this.type && this.Sa())
		},
		ii: function () {
			if (null == this.T.Va || 0 == this.Ca) return -1;
			this.Ca = !1;
			var a = this.da.Qc(this);
			this.da.removeChild(this);
			return a
		},
		Qc: function () {
			return this.Ca ? this.da.Qc(this) : -1
		},
		$k: function () {
			return this.Ca ? this.da.children.length : -1
		},
		ee: function (a) {
			this.Ca && this.da.ee(this, a)
		},
		kk: function () {
			null != this.T.Va && 0 == this.ma && (this.ma = !0, this.Sa())
		},
		Ej: function () {
			null != this.T.Va && 1 == this.ma && (this.ma = !1)
		},
		ah: function () {
			this.Cd || this.Sa()
		},
		Sa: function () {
			var a, b = this.T.Va;
			switch (this.type) {
				case 4:
					this.sg = this.yc <= this.bb ? 0 : Math.floor((this.qa - this.bb) * b.jl / (this.yc -
						this.bb));
					this.sg = Math.min(this.sg, b.jl - 1);
					a = this.c.h.$.Hb(b.frames[Math.max(this.sg, 0)]);
					this.J = a.width;
					this.I = a.height;
					this.fa = a.wa;
					this.ga = a.va;
					break;
				case 2:
				case 3:
					a = this.Uc;
					b.Fe == ha.dD && (a = this.Vc);
					this.sg = this.yc <= this.bb ? 0 : (this.qa - this.bb) * a / (this.yc - this.bb);
					b.Fe == ha.cD ? (this.ga = 0, this.I = this.Vc, this.J = this.sg, this.fa = 0 != (b.Oj & ha.bs) ? this.sg - this.Uc : 0) : (this.fa = 0, this.J = this.Uc, this.I = this.sg, this.ga = 0 != (b.Oj & ha.bs) ? this.sg - this.Vc : 0);
					break;
				case 1:
					a = 0 == this.qj ? n.ki(this.qa, this.md) : n.Ct(this.qa,
						this.md);
					var c, d, e, f = 0,
						g = 0;
					for (c = a.length - 1; 0 <= c; c--) d = a.charCodeAt(c), e = 0, 45 == d ? e = b.frames[10] : 46 == d ? e = b.frames[12] : 43 == d ? e = b.frames[11] : 101 == d || 69 == d ? e = b.frames[13] : 48 <= d && 57 >= d && (e = b.frames[d - 48]), 0 <= e && (d = this.c.h.$.Hb(e), null != d ? (f += d.width, g = Math.max(g, d.height)) : toto = 2);
					this.fa = f;
					this.ga = g;
					this.J = f;
					this.I = g;
					break;
				case 5:
					a = 0 == this.qj ? n.ki(this.qa, this.md) : n.Ct(this.qa, this.md), this.fa = b = null != this.Xa ? this.Xa.measureText(a, this.font) : (new ia(this.c.h, 16, 16)).measureText(a, this.font), this.ga =
						this.Vc / 2 + this.pd / 2, this.J = b, this.I = this.pd, null == this.Xa ? this.Xa = new ia(this.c.h, this.J, this.I) : (this.J > this.Xa.width || this.I > this.Xa.height) && this.Xa.resize(this.J, this.I), this.Xa.Gr(a, n.zo | n.Ao, new Z(0, 0, 1E3, 1E3), this.font, this.nc)
			}
			this.Cd = !0
		},
		mb: function (a, b, c) {
			if (this.ma && this.Cd) {
				var d, e, f;
				d = this.T.Va;
				b = b + this.u - this.fa - this.c.ca + this.pa.x;
				c = c + this.s - this.ga - this.c.ea + this.pa.y;
				var g = this.J,
					l = this.I;
				switch (this.type) {
					case 4:
						d = this.c.h.$.Hb(d.frames[Math.max(this.sg, 0)]);
						a.Ie(d, b + d.wa, c + d.va,
							0, 1, 1, this.F.xc, this.F.oc);
						break;
					case 2:
					case 3:
						e = this.nc;
						f = this.$n;
						switch (d.ui) {
							case 1:
								a.lc(b, c, g, l, e, this.F.xc, this.F.oc);
								break;
							case 2:
								0 != (d.Oj & ha.bs) && (dl = e, e = f, f = dl), a.Jv(b, c, g, l, e, f, 0 != d.wn, this.F.xc, this.F.oc)
						}
						break;
					case 1:
						e = 0 == this.qj ? n.ki(this.qa, this.md) : n.Ct(this.qa, this.md);
						for (f = 0; f < e.length; f++) l = e.charCodeAt(f), g = 0, 45 == l ? g = d.frames[10] : 46 == l || 44 == l ? g = d.frames[12] : 43 == l ? g = d.frames[11] : 69 == l || 101 == l ? g = d.frames[13] : 48 <= l && 57 >= l && (g = d.frames[l - 48]), g = this.c.h.$.Hb(g), null != g && (a.Ie(g, b + g.wa,
							c + g.va, 0, 1, 1, this.F.xc, this.F.oc), b += g.width);
						break;
					case 5:
						this.Xa.mb(a, b, c, this.F.xc, this.F.oc)
				}
			}
		},
		Sl: function (a) {
			this.F.xc = w.Oe;
			this.F.oc = a
		}
	});
	nc.prototype = n.extend(new E, {
		S: function () {
			this.pc = -1;
			this.nc = 0;
			var a = this.T.Va;
			this.J = this.Uc = a.th;
			this.I = this.Vc = a.uh;
			this.type = a.Fe;
			this.nc = a.cg;
			this.Jh = a.Wu;
			this.qa = this.c.h.Om()[this.Jh - 1];
			this.md = a.Oj;
			if (5 == this.type) {
				var b = this.pc; - 1 == b && (b = a.wi);
				this.font = this.c.h.Ab.ff(b);
				this.pd = this.font.ye()
			}
		},
		sb: function () { },
		handle: function () {
			var a = this.c.h.Om()[this.Jh -
				1];
			a != this.qa && (this.qa = a, this.Sa());
			this.F.handle();
			this.b.K && (this.b.K = !1)
		},
		Qf: function () {
			var a = this.T.Va;
			if (5 == a.Fe) {
				var b = this.pc; - 1 == b && (b = a.wi);
				return this.c.h.Ab.Vp(b)
			}
			return null
		},
		jk: function (a, b) {
			5 == type && (this.pc = hoAdRunHeader.h.Ab.pp(a), a = this.c.h.Ab.ff(this.pc), this.pd = a.ye(), null != b && (this.J = this.Uc = b.right - b.left, this.I = this.Vc = b.bottom - b.top), this.Sa())
		},
		Up: function () {
			return this.nc
		},
		Cr: function (a) {
			this.nc = a;
			this.Sa()
		},
		Kk: function (a, b, c, d, e, f) {
			null != this.T.Va && 1 != this.Ca && (this.Ca = !0, this.ma = e, this.pa = this.c.A.Za[c], this.da = d ? this.pa.ub : this.pa.Ea, 0 > f ? this.da.Qd(this) : this.da.np(this, f), 5 != this.type && this.Sa())
		},
		ii: function () {
			if (null == this.T.Va || 0 == this.Ca) return -1;
			this.Ca = !1;
			var a = this.da.Qc(this);
			this.da.removeChild(this);
			return a
		},
		Qc: function () {
			return this.Ca ? this.da.Qc(this) : -1
		},
		$k: function () {
			return this.Ca ? this.da.children.length : -1
		},
		ee: function (a) {
			this.Ca && this.da.ee(this, a)
		},
		kk: function () {
			null != this.T.Va && 0 == this.ma && (this.ma = !0, this.Sa())
		},
		Ej: function () {
			null != this.T.Va &&
				1 == this.ma && (this.ma = !1)
		},
		Ir: function (a) {
			a != this.qa && (this.qa = a, this.Sa())
		},
		ah: function () {
			this.Cd || this.Sa()
		},
		Sa: function () {
			this.Cd = !0;
			this.J = this.I = 1;
			if (null != this.T.Va) {
				var a = this.T.Va,
					b, c = n.ki(this.qa, this.md);
				switch (a.Fe) {
					case 1:
						var d, e, f = 0,
							g = 0;
						for (d = c.length - 1; 0 <= d; d--) e = c.charCodeAt(d), b = 0, 45 == e ? b = a.frames[10] : 46 == e ? b = a.frames[12] : 43 == e ? b = a.frames[11] : 101 == e || 69 == e ? b = a.frames[13] : 48 <= e && 57 >= e && (b = a.frames[e - 48]), 0 <= b && (b = this.c.h.$.Hb(b), f += b.width, g = Math.max(g, b.height));
						this.fa = f;
						this.ga =
							g;
						this.J = f;
						this.I = g;
						break;
					case 5:
						this.fa = a = null != this.Xa ? this.Xa.measureText(c, this.font) : (new ia(this.c.h, 8, 8)).measureText(c, this.font), this.ga = this.Vc / 2 + this.pd / 2, this.J = a, this.I = this.pd, null == this.Xa ? this.Xa = new ia(this.c.h, this.J, this.I) : (this.J > this.Xa.width || this.I > this.Xa.height) && this.Xa.resize(this.J, this.I), this.Xa.Gr(c, n.zo | n.Ao, new Z(0, 0, 1E3, 1E3), this.font, this.nc)
				}
			}
		},
		mb: function (a, b, c) {
			if (this.ma && this.Cd) {
				this.globalAlpha = this.alpha;
				this.globalCompositeOperation = this.tj;
				var d = this.T.Va;
				b = b + this.u - this.fa - this.c.ca + this.pa.x;
				var e = c + this.s - this.ga - this.c.ea + this.pa.y;
				c = n.ki(this.qa, this.md);
				switch (this.type) {
					case 1:
						var f, g;
						for (f = 0; f < c.length; f++) {
							var l = c.charCodeAt(f);
							g = 0;
							45 == l ? g = d.frames[10] : 46 == l || 44 == l ? g = d.frames[12] : 43 == l ? g = d.frames[11] : 69 == l || 101 == l ? g = d.frames[13] : 48 <= l && 57 >= l && (g = d.frames[l - 48]);
							g = this.c.h.$.Hb(g);
							a.Ie(g, b + g.wa, e + g.va, 0, 1, 1, this.F.xc, this.F.oc);
							b += g.width
						}
						break;
					case 5:
						this.Xa.mb(a, b, e, this.F.xc, this.F.oc)
				}
			}
		},
		Sl: function (a) {
			this.F.xc = w.Oe;
			this.F.oc = a
		}
	});
	oc.prototype =
		n.extend(new E, {
			S: function () {
				this.pc = -1;
				this.nc = 0;
				var a = this.T.Va;
				this.J = this.Uc = a.th;
				this.I = this.Vc = a.uh;
				this.type = a.Fe;
				this.nc = a.cg;
				this.Jh = a.Wu;
				this.qa = this.c.h.Nm()[this.Jh - 1];
				this.md = a.Oj;
				if (5 == this.type) {
					var b = this.pc; - 1 == b && (b = a.wi);
					this.font = this.c.h.Ab.ff(b);
					this.pd = this.font.ye()
				}
			},
			sb: function () { },
			handle: function () {
				var a = this.c.h.Nm()[this.Jh - 1];
				a != this.qa && (this.qa = a, this.Sa());
				this.F.handle();
				this.b.K && (this.b.K = !1)
			},
			Qf: function () {
				var a = this.T.Va;
				if (5 == a.Fe) {
					var b = this.pc; - 1 == b && (b = a.wi);
					return this.c.h.Ab.Vp(b)
				}
				return null
			},
			jk: function (a, b) {
				5 == type && (this.pc = hoAdRunHeader.h.Ab.pp(a), a = this.c.h.Ab.ff(this.pc), this.pd = a.ye(), null != b && (this.J = this.Uc = b.right - b.left, this.I = this.Vc = b.bottom - b.top), this.Sa())
			},
			Up: function () {
				return this.nc
			},
			Cr: function (a) {
				this.nc = a;
				this.Sa()
			},
			Kk: function (a, b, c, d, e, f) {
				null != this.T.Va && 1 != this.Ca && (this.Ca = !0, this.ma = e, this.pa = this.c.A.Za[c], this.da = d ? this.pa.ub : this.pa.Ea, 0 > f ? this.da.Qd(this) : this.da.np(this, f), 5 != this.type && this.Sa())
			},
			ii: function () {
				if (null ==
					this.T.Va || 0 == this.Ca) return -1;
				this.Ca = !1;
				var a = this.da.Qc(this);
				this.da.removeChild(this);
				return a
			},
			Qc: function () {
				return this.Ca ? this.da.Qc(this) : -1
			},
			$k: function () {
				return this.Ca ? this.da.children.length : -1
			},
			ee: function (a) {
				this.Ca && this.da.ee(this, a)
			},
			kk: function () {
				null != this.T.Va && 0 == this.ma && (this.ma = !0, this.Sa())
			},
			Ej: function () {
				null != this.T.Va && 1 == this.ma && (this.ma = !1)
			},
			Ir: function (a) {
				a != this.qa && (this.qa = a, this.Sa())
			},
			ah: function () {
				this.Cd || this.Sa()
			},
			Sa: function () {
				this.Cd = !0;
				this.J = this.I = 1;
				if (null != this.T.Va) {
					var a = this.T.Va;
					switch (a.Fe) {
						case 4:
							if (0 != this.qa) {
								var b = this.c.h.$.Hb(a.frames[0]),
									c = this.qa * b.width;
								c <= this.Uc ? (this.J = c, this.I = b.height) : (this.J = this.Uc, this.I = (this.Uc / b.width + this.qa - 1) * b.height);
								break
							}
							this.J = this.I = 1;
							break;
						case 1:
							var d, e, b, f = 0,
								g = 0,
								c = n.ki(this.qa, this.md);
							for (d = c.length - 1; 0 <= d; d--) b = c.charCodeAt(d), e = 0, 45 == b ? e = a.frames[10] : 46 == b ? e = a.frames[12] : 43 == b ? e = a.frames[11] : 101 == b || 69 == b ? e = a.frames[13] : 48 <= b && 57 >= b && (e = a.frames[b - 48]), 0 <= e && (b = this.c.h.$.Hb(e), f += b.width,
								g = Math.max(g, b.height));
							this.fa = f;
							this.ga = g;
							this.J = f;
							this.I = g;
							break;
						case 5:
							c = n.ki(this.qa, this.md), this.fa = a = null != this.Xa ? this.Xa.measureText(c, this.font) : (new ia(this.c.h, 8, 8)).measureText(c, this.font), this.ga = this.Vc / 2 + this.pd / 2, this.J = a, this.I = this.pd, null == this.Xa ? this.Xa = new ia(this.c.h, this.J, this.I) : (this.J > this.Xa.width || this.I > this.Xa.height) && this.Xa.resize(this.J, this.I), this.Xa.Gr(c, n.zo | n.Ao, new Z(0, 0, 1E3, 1E3), this.font, this.nc)
					}
				}
			},
			mb: function (a, b, c) {
				if (this.ma && this.Cd) {
					this.globalAlpha =
						this.alpha;
					this.globalCompositeOperation = this.tj;
					var d, e = this.T.Va;
					b = b + this.u - this.fa - this.c.ca + this.pa.x;
					c = c + this.s - this.ga - this.c.ea + this.pa.y;
					switch (this.type) {
						case 1:
							var f, g;
							d = n.ki(this.qa, this.md);
							for (f = 0; f < d.length; f++) {
								var l = d.charCodeAt(f);
								g = 0;
								45 == l ? g = e.frames[10] : 46 == l || 44 == l ? g = e.frames[12] : 43 == l ? g = e.frames[11] : 69 == l || 101 == l ? g = e.frames[13] : 48 <= l && 57 >= l && (g = e.frames[l - 48]);
								g = this.c.h.$.Hb(g);
								a.Ie(g, b + g.wa, c + g.va, 0, 1, 1, this.F.xc, this.F.oc);
								b += g.width
							}
							break;
						case 4:
							if (0 != this.qa) {
								d = b + this.J;
								f = c + this.I;
								var l = b,
									p = this.qa;
								for (g = this.c.h.$.Hb(e.frames[0]); c < f && 0 < p; c += g.height)
									for (b = l; b < d && 0 < p; b += g.width, --p) a.Ie(g, b + g.wa, c + g.va, 0, 1, 1, this.F.xc, this.F.oc)
							}
							break;
						case 5:
							this.Xa.mb(a, b, c, this.F.xc, this.F.oc)
					}
				}
			},
			Sl: function (a) {
				this.F.xc = w.Oe;
				this.F.oc = a
			}
		});
	pc.prototype = n.extend(new E, {
		S: function (a, b) {
			var c = a.Gc;
			this.J = c.jv;
			this.I = c.kv;
			this.Uc = c.jv;
			this.Vc = c.kv;
			this.yc = c.Qj;
			this.ao = 0;
			0 < c.Eb.length && (this.ao = c.Eb[0].kw);
			this.Ql = null;
			this.pc = -1;
			this.bb = 0;
			this.ma = !0;
			this.GB = b.um;
			0 != (b.um & h.es) &&
				0 < c.Eb.length && (this.Ql = c.Eb[0].Kh);
			var d = this.pc; - 1 == d && 0 < c.Eb.length && (d = c.Eb[0].Vl);
			this.font = this.c.h.Ab.ff(d);
			this.Xa = new ia(this.c.h, this.J, this.I)
		},
		sb: function () { },
		handle: function () {
			this.F.handle();
			this.b.K && (this.b.K = !1)
		},
		Qf: function () {
			var a = this.pc; - 1 == a && (a = this.T.Gc.Eb[0].Vl);
			return this.c.h.Ab.Vp(a)
		},
		jk: function (a, b) {
			this.pc = this.c.h.Ab.pp(a);
			this.font = this.c.h.Ab.ff(this.pc);
			null != b && (this.J = b.right - b.left, this.I = b.bottom - b.top, this.Xa.resize(this.J, this.I));
			this.b.K = !0;
			this.Sa()
		},
		Up: function () {
			return this.ao
		},
		Cr: function (a) {
			this.ao = a;
			this.Sa()
		},
		Kk: function (a, b, c, d, e, f) {
			1 != this.Ca && (this.Ca = !0, this.ma = e, this.pa = this.c.A.Za[c], this.da = d ? this.pa.ub : this.pa.Ea, 0 > f ? this.da.Qd(this) : this.da.np(this, f))
		},
		ii: function () {
			if (0 == this.Ca) return -1;
			this.Ca = !1;
			var a = this.da.Qc(this);
			this.da.removeChild(this);
			return a
		},
		Qc: function () {
			return this.Ca ? this.da.Qc(this) : -1
		},
		$k: function () {
			return this.Ca ? this.da.children.length : -1
		},
		ee: function (a) {
			this.Ca && this.da.ee(this, a)
		},
		kk: function () {
			0 == this.ma && (this.ma = !0)
		},
		Ej: function () {
			1 ==
				this.ma && (this.ma = !1)
		},
		bP: function (a) {
			-1 > a && (a = -1);
			a >= this.yc && (a = this.yc - 1);
			if (a == this.bb) return !1;
			this.bb = a;
			0 <= a && this.UI(this.T.Gc.Eb[this.bb].Kh);
			this.Sa();
			return 0 != (this.F.U & w.Xh) ? !1 : !0
		},
		UI: function (a) {
			this.Ql = a;
			this.Sa()
		},
		ah: function () {
			this.Cd || this.Sa()
		},
		Sa: function () {
			this.Cd = !0;
			var a = this.T.Gc,
				b = a.Eb[0].mo;
			this.ga = this.fa = 0;
			this.rect.left = 0;
			this.rect.top = 0;
			this.rect.right = this.J;
			this.rect.bottom = this.I;
			0 <= this.bb ? a = a.Eb[this.bb].Kh : (a = this.Ql, null == a && (a = ""));
			b &= n.zo | n.cj | n.gs | n.Ao | n.yo |
				n.Oh | n.iD;
			a = this.Xa.Gr(a, b, this.rect, this.font, this.ao);
			0 == (b & (n.yo | n.Oh)) && (this.I = a)
		},
		Sl: function (a) {
			this.F.xc = w.Oe;
			this.F.oc = a
		},
		mb: function (a, b, c) {
			this.ma && this.Cd && this.Xa.mb(a, b + this.u - this.c.ca + this.pa.x, c + this.s - this.c.ea + this.pa.y, this.F.xc, this.F.oc)
		}
	});
	qc.prototype = n.extend(new E, {
		S: function () { },
		sb: function () { },
		handle: function () {
			this.c.pause();
			this.c.Yq = this;
			this.c.A.Za[this.c.A.Fc - 1].Ea.Qd(this);
			this.uF()
		},
		Lp: function () {
			this.c.A.Za[this.c.A.Fc - 1].Ea.removeChild(this)
		},
		uG: function () {
			var a;
			a = this.c.h.mf - this.c.h.Af;
			var b = this.c.h.nf - this.c.h.Bf;
			0 == this.uj ? this.c.h.bd[m.Te] && (a = this.kz(a, b), 0 != a && (this.uj = a)) : this.c.h.bd[m.Te] || (this.kz(a, b) == this.uj ? (this.c.v.Kc = this.uj, this.c.v.ad(this, -5439484), 0 != (this.T.Gc.Eb[this.uj].mo & ma.QE) ? this.c.v.ad(this, -5308412) : this.c.v.ad(this, -5373948), this.Lp(), this.c.Yq = null, this.c.resume(), this.c.Rp(this.Cb, !0)) : this.uj = 0)
		},
		kz: function (a, b) {
			var c;
			if (null != this.xd)
				for (c = 1; c < this.xd.length; c++)
					if (a >= this.xd[c].left && a < this.xd[c].right && b > this.xd[c].top &&
						b < this.xd[c].bottom) return c;
			return 0
		},
		Px: function (a, b, c) {
			var d, e;
			c ? (d = 8421504, e = 16777215) : (e = 8421504, d = 16777215);
			a.fr(b.left, b.top, b.right - b.left, b.bottom - b.top, 0, 1);
			var f = Array(3),
				g;
			for (g = 0; 3 > g; g++) f[g] = new pa;
			f[0].x = b.right - 1;
			0 == c && --f[0].x;
			f[0].y = b.top + 1;
			f[1].y = b.top + 1;
			f[1].x = b.left + 1;
			f[2].x = b.left + 1;
			f[2].y = b.bottom;
			0 == c && --f[2].y;
			a.gd(f[0].x, f[0].y, f[1].x, f[1].y, d, 1);
			a.gd(f[1].x, f[1].y, f[2].x, f[2].y, d, 1);
			0 == c && --f[0].x;
			f[0].y += 1;
			f[1].x += 1;
			f[1].y += 1;
			f[2].x += 1;
			0 == c && --f[2].y;
			a.gd(f[0].x, f[0].y,
				f[1].x, f[1].y, d, 1);
			a.gd(f[1].x, f[1].y, f[2].x, f[2].y, d, 1);
			0 == c && (f[0].x += 2, f[1].x = b.right - 1, f[1].y = b.bottom - 1, f[2].y = b.bottom - 1, --f[2].x, a.gd(f[0].x, f[0].y, f[1].x, f[1].y, e, 1), a.gd(f[1].x, f[1].y, f[2].x, f[2].y, e, 1), --f[0].x, f[0].y += 1, --f[1].x, --f[1].y, f[2].x += 1, --f[2].y, a.gd(f[0].x, f[0].y, f[1].x, f[1].y, e, 1), a.gd(f[1].x, f[1].y, f[2].x, f[2].y, e, 1))
		},
		hI: function (a, b, c) {
			var d = new Z;
			d.hy(this.xd[b]);
			this.Px(a, this.xd[b], c);
			d.left += 2;
			d.top += 2;
			d.right -= 4;
			d.bottom -= 4;
			c && (d.left += 2, d.top += 2);
			this.yg[b].mb(a, (d.left +
				d.right) / 2 - this.yg[b].width / 2, (d.top + d.bottom) / 2 - this.yg[b].height / 2, 0, 0)
		},
		uF: function () {
			this.Bq = new ia(this.c.h, 8, 8);
			var a = this.T.Gc,
				b = this.c,
				c = a.Eb[1],
				d = c.kw,
				e = 0 != (c.mo & ma.vx),
				f = b.h.Ab.ff(c.Vl);
			this.Xr = Math.floor(3 * this.Bq.measureText("X", f) / 2);
			this.ji = 4;
			this.rd = 64;
			var g;
			for (g = 1; g < a.Eb.length; g++) c = a.Eb[g], 0 < c.Kh.length && (c = this.Bq.measureText(c.Kh, f), this.rd = Math.max(this.rd, c + 2 * this.Xr + 4), this.ji = Math.max(this.ji, Math.floor(3 * f.ye() / 2)));
			this.bq = Math.max(Math.floor(this.ji / 4), 2);
			this.rd += 2 * this.Xr +
				4;
			var l = new Z;
			for (g = 1; g < a.Eb.length; g++) c = a.Eb[g], this.yg[g] = new ia(b.h, this.rd, this.ji), l.right = this.rd, l.bottom = this.ji, this.yg[g].Aq(c.Kh, n.cj | n.Oh, l, d, f, e ? 1 : 0, 16777215);
			a = a.Eb[0];
			e = 0 != (a.mo & ma.vx);
			f = b.h.Ab.ff(a.Vl);
			g = Math.floor(3 * this.Bq.measureText("X", f) / 2);
			c = this.Bq.measureText(a.Kh, f);
			this.Wm = Math.floor(3 * f.ye() / 2);
			this.rd = Math.max(this.rd, c + 2 * g + 4);
			this.rd > b.h.ia ? this.rd = b.h.ia : this.rd > b.A.cd && (this.rd = b.A.cd);
			l.right = this.rd;
			l.bottom = this.Wm;
			this.yg[0] = new ia(b.h, this.rd, this.Wm);
			this.yg[0].Aq(a.Kh,
				n.cj | n.Oh, l, d, f, e ? 1 : 0, 16777215)
		},
		mb: function (a) {
			var b = this.T.Gc,
				c = this.c,
				d = this.u - c.ca,
				c = this.s - c.ea,
				e = new Z;
			e.left = d;
			e.top = c;
			var f = this.Wm + 1 + (this.ji + this.bq) * (b.Eb.length - 1) + this.bq + 4;
			e.right = d + this.rd;
			e.bottom = c + f;
			a.lc(e.left, e.top, e.right - e.left, e.bottom - e.top, 12632256, 0, 0);
			this.Px(a, e, !1);
			e.left += 2;
			e.top += 2;
			e.right -= 2;
			e.bottom = e.top + this.Wm;
			this.yg[0].mb(a, (e.left + e.right) / 2 - this.yg[0].width / 2, (e.top + e.bottom) / 2 - this.yg[0].height / 2, 0, 0);
			e.top = e.bottom;
			a.gd(e.left, e.top, e.right, e.bottom, 8421504,
				1, 0, 0);
			e.top += 1;
			e.bottom += 1;
			a.gd(e.left, e.top, e.right, e.bottom, 16777215, 1, 0, 0);
			if (null == this.xd)
				for (this.xd = Array(b.Eb.length), i = 1; i < b.Eb.length; i++) this.xd[i] = new Z, this.xd[i].left = d + 2 + this.Xr, this.xd[i].right = d + this.rd - 2 - this.Xr, this.xd[i].top = c + 2 + this.Wm + 1 + this.bq + (this.ji + this.bq) * (i - 1), this.xd[i].bottom = this.xd[i].top + this.ji;
			for (i = 1; i < b.Eb.length; i++) this.hI(a, i, this.uj == i)
		}
	});
	rc.prototype = n.extend(new E, {
		S: function (a) {
			this.ext.S(this);
			this.c.h.file.Nf(a.MA);
			this.sv = a.OA
		},
		bt: function (a, b, c,
			d, e) {
			this.pa = this.c.A.Za[d];
			this.ma = e;
			1 != this.Ca && (this.Ca = !0, this.da = this.pa.Ea, this.da.Qd(this))
		},
		Kk: function (a, b, c, d, e) {
			this.pa = this.c.A.Za[c];
			this.ma = e;
			1 != this.Ca && (this.Ca = !0, this.da = d ? this.pa.ub : this.pa.Ea, this.da.Qd(this))
		},
		ii: function () {
			if (0 == this.Ca) return -1;
			this.Ca = !1;
			var a = this.da.Qc(this);
			this.da.removeChild(this);
			return a
		},
		handle: function () {
			0 != (this.ja & 512) ? this.F.handle() : 16 == (this.ja & 48) || 48 == (this.ja & 48) ? this.w.move() : 32 == (this.ja & 48) && this.ha.we();
			var a = 0;
			0 == this.Qu && (a = this.ext.xz());
			0 != (a & Ha.rx) && (this.Qu = !0);
			null != this.b && this.b.K && (this.b.K = !1)
		},
		ci: function () {
			this.ext.ci()
		},
		jy: function () { },
		mb: function () { },
		sb: function (a) {
			this.ext.yy(a)
		},
		bG: function () {
			return null
		},
		Cp: function (a, b) {
			return this.ext.Cp(a, b)
		},
		action: function (a, b) {
			this.ext.action(a, b)
		},
		Gt: function (a) {
			return this.ext.Gt(a)
		},
		Sl: function (a) {
			this.F.xc = w.Oe;
			this.F.oc = a
		},
		UO: function () { },
		kk: function () {
			this.ma = !0
		},
		Ej: function () {
			this.ma = !1
		},
		Qc: function () {
			return this.da.Qc(this)
		},
		$k: function () {
			return this.da.children.length
		},
		ee: function (a) {
			a >= this.da.children.length && (a = this.da.children.length);
			0 > a && (a = 0);
			this.da.ee(this, a)
		},
		IH: function () { },
		wF: function () { },
		Yk: function () {
			this.ext.Yk()
		},
		Kz: function (a) {
			this.c.h.$.Kz(a)
		},
		mO: function (a) {
			return this.c.h.$.Hb(a)
		},
		bO: function () {
			return this.c.h
		},
		sO: function () {
			return this.u
		},
		tO: function () {
			return this.s
		},
		rO: function () {
			return this.J
		},
		ye: function () {
			return this.I
		},
		TB: function (a) {
			null != this.w ? this.w.aa.Xb(a) : (this.u = a, null != this.b && (this.b.K = !0, this.b.Ha = !0))
		},
		WB: function (a) {
			null !=
				this.w ? this.w.aa.Lb(a) : (this.s = a, null != this.b && (this.b.K = !0, this.b.Ha = !0))
		},
		bw: function (a) {
			this.J = a
		},
		aw: function (a) {
			this.I = a
		},
		eo: function (a, b) {
			this.J = a;
			this.I = b
		},
		MO: function () {
			this.Qu = !1
		},
		aO: function (a, b) {
			if (0 == this.c.wf) {
				var c = this.c.v.Kc;
				this.c.v.Kc = b;
				a = -(a + N.Ph + 1) << 16;
				a |= this.Da & 65535;
				this.c.v.ad(this, a);
				this.c.v.Kc = c
			}
		},
		HO: function (a, b) {
			0 == this.c.wf && (a = -(a + N.Ph + 1) << 16, a |= this.Da & 65535, this.c.v.hB(1, a, b, this, this.Ib))
		},
		pause: function () {
			this.c.pause()
		},
		resume: function () {
			this.c.resume()
		},
		NO: function () { },
		QN: function () {
			this.c.bf(this.Cb)
		},
		setPosition: function (a, b) {
			null != this.w ? (this.w.aa.Xb(a), this.w.aa.Lb(b)) : (this.u = a, this.s = b, null != this.b && (this.b.K = !0, this.b.Ha = !0))
		},
		gO: function () {
			return this.sv
		},
		TO: function (a) {
			this.sv = a
		},
		mp: function (a, b, c, d, e) {
			this.c.mp(a, b, c, e, d, !0)
		},
		dO: function () {
			return this.c.Sv
		},
		fO: function () {
			this.c.xf++;
			return this.c.getExpression()
		},
		eO: function () {
			return this.c.v.Kc
		},
		Qx: function (a, b, c) {
			return 0 != (a.ja & z.Ug) && a.b.Ic == O.hj ? a.w.aa.Qx(b, c) : 0
		},
		hO: function () {
			this.Tu = this.un = 0;
			return this.kG()
		},
		kG: function () {
			if (this.Tu < this.c.pb) {
				for (; null == this.c.G[this.un];) this.un++;
				var a = this.c.G[this.un];
				this.Tu++;
				this.un++;
				return a
			}
			return null
		},
		oO: function (a) {
			var b = 0,
				c;
			for (c = 0; c < this.c.pb; c++) {
				for (; null == this.c.G[b];) b++;
				var d = this.c.G[b];
				b++;
				if ((d.Um << 16 | d.Cb & 65535) == a) return d
			}
			return null
		},
		Ty: function (a) {
			return this.c.Ty(a)
		},
		Uy: function (a) {
			return this.c.Uy(a)
		},
		EH: function (a) {
			return hoAdRunHeader.h.EH(a)
		},
		DN: function () { }
	});
	Qa.yM = 22;
	Qa.create = function (a) {
		var b = a.file.ba,
			c = null,
			d =
				a.file.m(),
			e = a.file.m();
		switch (e) {
			case 1:
				c = new Kd(a);
				break;
			case 2:
				c = new Ld(a);
				break;
			case 3:
				c = new da(a);
				break;
			case 4:
				c = new da(a);
				break;
			case 5:
				c = new Ga(a);
				break;
			case 6:
				c = new Ka(a);
				break;
			case 9:
				c = new db(a);
				break;
			case 10:
				c = new da(a);
				break;
			case 11:
				c = new da(a);
				break;
			case 12:
				c = new da(a);
				break;
			case 13:
				c = new Hd(a);
				break;
			case 14:
				c = new tc(a);
				break;
			case 15:
				c = new na(a);
				break;
			case 16:
				c = new uc(a);
				break;
			case 17:
				c = new da(a);
				break;
			case 18:
				c = new vc(a);
				break;
			case 19:
				c = new Md(a);
				break;
			case 21:
				c = new db(a);
				break;
			case 22:
				c =
					new na(a);
				break;
			case 23:
				c = new na(a);
				break;
			case 24:
				c = new Gd(a);
				break;
			case 25:
				c = new Ga(a);
				break;
			case 26:
				c = new da(a);
				break;
			case 27:
				c = new na(a);
				break;
			case 28:
				c = new na(a);
				break;
			case 29:
				c = new Ga(a);
				break;
			case 31:
				c = new da(a);
				break;
			case 32:
				c = new da(a);
				break;
			case 34:
				c = new Ga(a);
				break;
			case 35:
				c = new Ka(a);
				break;
			case 36:
				c = new Ka(a);
				break;
			case 37:
				c = new da(a);
				break;
			case 38:
				c = new ja(a);
				break;
			case 39:
				c = new Jd(a);
				break;
			case 40:
				c = new Ra(a);
				break;
			case 41:
				c = new Ra(a);
				break;
			case 42:
				c = new Fd(a);
				break;
			case 43:
				c = new da(a);
				break;
			case 44:
				c = new tc(a);
				break;
			case 45:
				c = new na(a);
				break;
			case 46:
				c = new na(a);
				break;
			case 47:
				c = new sc(a);
				break;
			case 48:
				c = new Ga(a);
				break;
			case 49:
				c = new da(a);
				break;
			case 50:
				c = new da(a);
				break;
			case 51:
				c = new sc(a);
				break;
			case 52:
				c = new na(a);
				break;
			case 53:
				c = new na(a);
				break;
			case 54:
				c = new na(a);
				break;
			case 55:
				c = new Id(a);
				break;
			case 56:
				c = new Ga(a);
				break;
			case 57:
				c = new da(a);
				break;
			case 58:
				c = new da(a);
				break;
			case 59:
				c = new na(a);
				break;
			case 60:
				c = new da(a);
				break;
			case 61:
				c = new da(a);
				break;
			case 62:
				c = new na(a);
				break;
			case 63:
				c =
					new Ra(a);
				break;
			case 64:
				c = new Ra(a);
				break;
			case 67:
				c = new da(a)
		}
		c.code = e;
		a.file.seek(b + d);
		return c
	};
	ja.ID = 1;
	ja.bL = 2;
	ja.us = 4;
	ja.ts = 8;
	ja.cL = 16;
	ka.UC = 1;
	ka.TC = 2;
	ka.VC = 4;
	ka.Ew = 8;
	ka.prototype = {
		Nn: function (a, b, c) {
			c.kq = -1;
			if (-1 == this.Dn) {
				0 != b && (c.dir = -1, 0 == (this.Uj & ka.Ew) && (c.dir = a.sz(this.Pq)));
				c.x = this.Sq;
				c.y = this.Tq;
				var d = this.pv;
				d > a.A.Fc - 1 && (d = a.A.Fc - 1);
				c.kq = d;
				c.Ix = !1
			} else {
				a.v.Pn = !1;
				d = a.v.Vt(this.En);
				c.Ix = a.v.uc;
				if (null == d) return !1;
				c.x = d.u;
				c.y = d.s;
				c.kq = d.qd;
				if (0 != (this.Uj & ka.TC) && 0 != (d.ja & z.Vh) && 0 <= d.b.Ia) {
					var e;
					e = d.b.ab;
					null != a.vs(d) && (e = 0);
					e = a.h.$.Bj(d.b.Ia, e, d.b.vb, d.b.wb);
					c.x += e.Eg - e.wa;
					c.y += e.Fg - e.va
				}
				if (0 != (this.Uj & ka.UC)) {
					e = this.ov + d.c.Bb(d) & 31;
					var f = F.eG(this.Qq, e);
					c.x += F.dG(this.Qq, e);
					c.y += f
				} else c.x += this.Sq, c.y += this.Tq;
				0 != (b & 1) && (c.dir = 0 != (this.Uj & ka.Ew) ? -1 : 0 != (this.Uj & ka.VC) ? d.c.Bb(d) : a.sz(this.Pq))
			}
			return 0 != (b & 2) && (c.x < a.Gl || c.x > a.El || c.y < a.Kl || c.y > a.Il) ? !1 : !0
		}
	};
	uc.prototype = n.extend(new ka, {});
	db.prototype = n.extend(new ka, {});
	vc.prototype = n.extend(new ka, {});
	Sa.prototype = {
		lc: function () { },
		Kv: function () { },
		Jv: function () { },
		tB: function () { },
		Ie: function () { },
		Ii: function () { },
		uB: function () { },
		vB: function () { },
		gd: function () { },
		fr: function () { },
		sB: function () { },
		gB: function (a, b, c, d) {
			var e = this.rj[this.rj.length - 1];
			e && (a < e.x && (a = e.x), b < e.y && (b = e.y), a + c > e.x + e.Vr && (c = e.x + e.Vr - a), b + d > e.y + e.Xp && (d = e.y + e.Xp - b));
			a = {
				x: a,
				y: b,
				Vr: c,
				Xp: d
			};
			this.rj.push(a);
			return a
		},
		$A: function () {
			this.rj.pop()
		}
	};
	Aa.prototype = n.extend(new Sa, {
		gr: function (a) {
			this.gv = this.dw = a;
			this.Ba.imageSmoothingEnabled = a;
			this.Ba.webkitImageSmoothingEnabled = a;
			this.Ba.mozImageSmoothingEnabled = a;
			this.Ba.msImageSmoothingEnabled = a;
			this.fv = -1;
			this.ue(0, 0)
		},
		PB: function (a, b) {
			this.Ba.scale(a, b);
			this.po = a;
			this.ro = b;
			this.xj = this.wj = 0;
			1 < this.po ? this.wj = 1 : 0 < this.po && 1 > this.po && (this.wj = 1 / this.po);
			1 < this.ro && (this.xj = 1);
			0 < this.ro && 1 > this.ro && (this.xj = 1 / this.ro)
		},
		zp: function (a, b, c, d) {
			this.Ba.clearRect(a, b, c, d)
		},
		lc: function (a, b, c, d, e, f, g) {
			var l = this.Ba;
			this.ue(f, g);
			l.fillStyle = n.ef(e);
			l.fillRect(a, b, c, d)
		},
		Kv: function (a, b, c, d, e, f, g) {
			var l = this.Ba;
			this.ue(f, g);
			l.fillStyle =
				n.ef(e);
			n.Hp(l, a, b, c, d);
			l.fill()
		},
		Jv: function (a, b, c, d, e, f, g, l, p) {
			if (e == f) return this.lc(a, b, c, d, e, l, p);
			var h = this.Ba;
			this.ue(l, p);
			this.ey(a, b, c, d, g, e, f);
			h.fillRect(a, b, c, d)
		},
		tB: function (a, b, c, d, e, f, g, l, p) {
			if (e == f) return this.Kv(a, b, c, d, e, l, p);
			var h = this.Ba;
			this.ue(l, p);
			this.ey(a, b, c, d, g, e, f);
			n.Hp(h, a, b, c, d);
			this.Ba.fill()
		},
		Ie: function (a, b, c, d, e, f, g, l) {
			var p = this.Ba,
				h = b - a.wa,
				m = c - a.va;
			this.ue(g, l);
			0 == d && 1 == e && 1 == f ? 0 == a.fb ? null != a.eb && p.drawImage(a.eb, h, m) : p.drawImage(a.app.$.tb[a.fb], a.ed, a.fd, a.width,
				a.height, h, m, a.width, a.height) : (p.save(), p.translate(b, c), 0 != d && p.rotate(.0174532925 * -d), p.scale(Math.max(.001, e), Math.max(.001, f)), p.translate(-a.wa, -a.va), 0 == a.fb ? null != a.eb && 0 != a.width && 0 != a.height && p.drawImage(a.eb, 0, 0, a.width, a.height, 0, 0, a.width, a.height) : p.drawImage(a.app.$.tb[a.fb], a.ed, a.fd, a.width, a.height, 0, 0, a.width, a.height), p.restore())
		},
		kI: function (a, b, c, d, e, f, g, l) {
			var p = this.Ba,
				h = b - a.wa,
				m = c - a.va;
			this.ue(g, l);
			0 == d && 1 == e && 1 == f ? 0 == a.fb ? null != a.eb && p.drawImage(a.eb, 0, 0, a.width, a.height,
				h, m, a.width + this.wj, a.height + this.xj) : p.drawImage(a.app.$.tb[a.fb], a.ed, a.fd, a.width, a.height, h, m, a.width + this.wj, a.height + this.xj) : (p.save(), p.translate(b, c), 0 != d && p.rotate(.0174532925 * -d), p.scale(Math.max(.001, e), Math.max(.001, f)), p.translate(-a.wa, -a.va), 0 == a.fb ? null != a.eb && p.drawImage(a.eb, 0, 0, a.width, a.height, 0, 0, a.width, a.height) : p.drawImage(a.app.$.tb[a.fb], a.ed, a.fd, a.width, a.height, 0, 0, a.width, a.height), p.restore())
		},
		Ii: function (a, b, c, d, e, f, g) {
			this.ue(f, g);
			this.Ba.drawImage(a, b, c, d, e)
		},
		uB: function (a,
			b, c, d, e, f, g) {
			var l = this.Ba;
			this.ue(f, g);
			l.save();
			l.beginPath();
			l.moveTo(b, c);
			l.lineTo(b + d, c);
			l.lineTo(b + d, c + e);
			l.lineTo(b, c + e);
			l.lineTo(b, c);
			l.clip();
			f = a.width;
			g = a.height;
			d = Math.floor(d / f) + 1;
			e = Math.floor(e / g) + 1;
			var p, h;
			for (p = 0; p < d; p++)
				for (h = 0; h < e; h++) 0 == a.fb ? null != a.eb && l.drawImage(a.eb, 0, 0, a.width, a.height, b + p * f, c + h * g, a.width + this.wj, a.height + this.xj) : l.drawImage(a.app.$.tb[a.fb], a.ed, a.fd, a.width, a.height, b + p * f, c + h * g, a.width + this.wj, a.height + this.xj);
			l.restore()
		},
		vB: function (a, b, c, d, e, f, g) {
			if (!(a instanceof fa)) throw Error("renderPatternEllipse: bad image type: " + typeof a);
			var l = this.Ba;
			this.ue(f, g);
			0 == a.fb ? null != a.eb && (l.fillStyle = l.createPattern(a.eb, "repeat")) : (a.pattern || (a.pattern = document.createElement("canvas"), a.pattern.width = a.width, a.pattern.height = a.height, l = a.pattern.getContext("2d"), l.drawImage(a.app.$.tb[a.fb], a.ed, a.fd, a.width, a.height, 0, 0, a.width, a.height)), l.fillStyle = l.createPattern(a.pattern, "repeat"));
			n.Hp(l, b, c, d, e);
			this.Ba.fill()
		},
		gd: function (a, b, c, d, e, f, g, l) {
			var p = this.Ba;
			this.ue(g,
				l);
			p.strokeStyle = n.ef(e);
			p.lineCap = "round";
			p.lineWidth = f;
			p.beginPath();
			p.moveTo(a, b);
			p.lineTo(c, d);
			p.closePath();
			p.stroke()
		},
		fr: function (a, b, c, d, e, f, g, l) {
			var p = this.Ba;
			this.ue(g, l);
			p.strokeStyle = n.ef(e);
			p.lineWidth = f;
			p.strokeRect(a, b, c, d)
		},
		sB: function (a, b, c, d, e, f, g, l) {
			var p = this.Ba;
			this.ue(g, l);
			p.lineWidth = e;
			p.strokeStyle = n.ef(f);
			n.Hp(p, a, b, c, d);
			this.Ba.stroke()
		},
		clip: function (a, b, c, d) {
			var e = this.Ba;
			e.save();
			e.beginPath();
			e.rect(a, b, c, d);
			e.clip()
		},
		WI: function () {
			this.Ba.restore()
		},
		gB: function () {
			var a =
				this.Ba,
				b = Sa.prototype.gB.apply(this, arguments);
			a.beginPath();
			a.rect(b.x, b.y, b.Vr, b.Xp);
			a.clip()
		},
		$A: function () {
			var a = this.Ba;
			Sa.prototype.$A.apply(this, arguments);
			if (0 < this.rj.length) {
				var b = this.rj[this.rj.length - 1];
				a.beginPath();
				a.rect(b.x, b.y, b.Vr, b.Xp);
				a.clip()
			} else a.OO()
		},
		ue: function (a, b) {
			var c = this.Ba;
			if ("undefined" == typeof a) c.globalAlpha = 1, c.tj = "source-over";
			else if (a != this.fv || b != this.BH) {
				this.fv = a;
				this.BH = b;
				var d = a & w.EC,
					e = 0 != (a & w.vw) | this.dw;
				e != this.gv && (this.gv = e, c.imageSmoothingEnabled =
					e, c.webkitImageSmoothingEnabled = e, c.mozImageSmoothingEnabled = e, c.msImageSmoothingEnabled = e);
				c.globalAlpha = 0 != (a & w.FC) ? (b >>> 24 & 255) / 255 : d == w.Oe ? (128 - b) / 128 : 1;
				switch (d) {
					case w.DC:
						c.tj = "lighter";
						break;
					case w.GC:
						c.tj = "xor";
						break;
					default:
						c.tj = "source-over"
				}
			}
		},
		ey: function (a, b, c, d, e, f, g) {
			a = e ? this.Ba.createLinearGradient(a, b, a, b + d) : this.Ba.createLinearGradient(a, b, a + c, b);
			a.addColorStop(0, n.ef(f));
			a.addColorStop(1, n.ef(g));
			this.Ba.fillStyle = a
		}
	});
	qa.jp = 1;
	qa.prototype = {
		load: function (a) {
			var b = a.ba;
			a.la(4);
			this.oC =
				a.o();
			this.nC = a.o();
			this.lo = a.o();
			this.ko = a.Sc();
			var c = a.o(),
				d = a.o();
			a.seek(b + c);
			this.ym = a.Sb();
			this.ym = this.ym.substr(0, this.ym.indexOf("."));
			this.ty = b + d
		}
	};
	wc.prototype = {
		nz: function () {
			return null
		}
	};
	v.Ho = 0;
	v.fp = 1;
	v.ux = 2;
	v.ww = 3;
	v.cs = 0;
	v.ws = 1;
	v.Aw = 2;
	v.tx = 3;
	v.Yh = 0;
	v.Zh = 1;
	v.$i = 2;
	v.aj = 3;
	v.zw = 4;
	v.Gw = 0;
	v.gD = 1;
	v.Ws = 1;
	v.kp = 2;
	v.prototype = {
		start: function (a, b, c, d) {
			this.xy = b;
			this.bh = this.xy.getContext("2d");
			this.R = c;
			this.l = d;
			this.tq = (new Date).getTime();
			this.i = a.nC;
			0 == this.i && (this.i = 1);
			this.dn = this.tq;
			this.en =
				this.tq + this.i;
			this.ka = this.Qz = !0
		},
		finish: function () { },
		gq: function () {
			if (this.Qz) {
				var a = new Date;
				return a.getTime() >= this.en ? !0 : a.getTime() >= this.en
			}
			return !0
		},
		gc: function () {
			this.dn = (new Date).getTime();
			this.dn > this.en && (this.dn = this.en);
			return this.dn - this.tq
		},
		C: function (a, b, c, d, e, f, g) {
			this.vq && (this.bh.globalCompositeOperation = "source-atop");
			1 == arguments.length ? this.bh.drawImage(a, 0, 0) : 0 < f && 0 < g && this.bh.drawImage(a, d, e, f, g, b, c, f, g)
		},
		stretch: function (a, b, c, d, e, f, g, l, p) {
			this.vq && (this.bh.globalCompositeOperation =
				"source-atop");
			0 < d && 0 < e && 0 < l && 0 < p && this.bh.drawImage(a, f, g, l, p, b, c, d, e)
		},
		yb: function () { },
		end: function () { },
		S: function () { }
	};
	xc.prototype = {
		KI: function (a, b) {
			var c = a.T.nl;
			b && (c = a.T.vn);
			var d = null,
				e;
			if (0 != (a.ja & z.Vh)) {
				var f = this.app.$.Hb(a.b.Ia),
					d = document.createElement("canvas");
				d.width = f.width;
				d.height = f.height;
				e = d.getContext("2d");
				0 == f.fb ? e.drawImage(f.eb, 0, 0) : e.drawImage(this.app.$.tb[f.fb], f.ed, f.fd, f.width, f.height, 0, 0, f.width, f.height)
			} else 32 <= a.Da && (d = document.createElement("canvas"), d.width = a.J,
				d.height = a.I, new StandardRendered(d), d = null);
			if (null == d) return null;
			e = d.width;
			var g = d.height,
				f = document.createElement("canvas");
			f.width = e;
			f.height = g;
			var l = document.createElement("canvas");
			l.width = e;
			l.height = g;
			var p = document.createElement("canvas");
			p.width = e;
			p.height = g;
			b ? (e = l.getContext("2d"), e.drawImage(d, 0, 0), e = f.getContext("2d"), e.drawImage(d, 0, 0), 0 != (c.lo & qa.jp) && this.gy(p, d, c.ko)) : (e = p.getContext("2d"), e.drawImage(d, 0, 0), 0 != (c.lo & qa.jp) && this.gy(l, d, c.ko));
			c = this.Rk(c, f, l, p);
			null != c && (d = 0, 0 !=
				(a.W & E.Rh) ? (c.vq = !0, d |= v.kp) : (c.vq = !1, d |= v.Ws), a.qk = f, c.yb(d));
			return c
		},
		gy: function (a, b, c) {
			a = a.getContext("2d");
			a.drawImage(b, 0, 0);
			var d = b.width;
			b = b.height;
			var e = a.getImageData(0, 0, d, b),
				f, g = (c & 16711680) >> 16,
				l = (c & 65280) >> 8,
				p = c & 255;
			for (f = 0; f < b; f++)
				for (c = 0; c < d; c++) 0 != e.data[4 * (f * d + c) + 3] && (e.data[4 * (f * d + c)] = g, e.data[4 * (f * d + c) + 1] = l, e.data[4 * (f * d + c) + 2] = p);
			a.putImageData(e, 0, 0)
		},
		Rk: function (a, b, c, d) {
			var e = null;
			"cctrans" == a.ym.toLowerCase() && (e = new La);
			return null != e ? (e = e.nz(a), this.app.file.seek(a.ty),
				e.vq = !1, e.S(a, this.app.file, b, c, d), e) : null
		}
	};
	La.zz = "BAND SE00 SE10 SE12 DOOR SE03 MOSA SE05 SE06 SCRL SE01 SE07 SE09 SE13 SE08 SE02 ZIGZ SE04 ZOOM SE11 FADE".split(" ");
	La.prototype = n.extend(new wc, {
		nz: function (a) {
			var b = a.oC;
			a = "" + String.fromCharCode(b & 255);
			b >>= 8;
			a += String.fromCharCode(b & 255);
			b >>= 8;
			a += String.fromCharCode(b & 255);
			a += String.fromCharCode(b >> 8 & 255);
			for (b = 0; b < La.zz.length && a != La.zz[b]; b++);
			a = null;
			switch (b) {
				case 0:
					a = new Ac;
					break;
				case 1:
					a = new yc;
					break;
				case 2:
					a = new zc;
					break;
				case 3:
					a = new Bc;
					break;
				case 4:
					a = new Cc;
					break;
				case 5:
					a = new Ec;
					break;
				case 6:
					a = new Fc;
					break;
				case 7:
					a = new Gc;
					break;
				case 8:
					a = new Hc;
					break;
				case 9:
					a = new Ic;
					break;
				case 10:
					a = new Jc;
					break;
				case 11:
					a = new Kc;
					break;
				case 12:
					a = new Lc;
					break;
				case 13:
					a = new Mc;
					break;
				case 14:
					a = new Nc;
					break;
				case 15:
					a = new Oc;
					break;
				case 16:
					a = new Pc;
					break;
				case 17:
					a = new Qc;
					break;
				case 18:
					a = new Rc;
					break;
				case 19:
					a = new Sc;
					break;
				case 20:
					a = new Dc
			}
			return a
		}
	});
	yc.prototype = n.extend(new v, {
		S: function (a, b, c, d, e) {
			this.Qa = b.o();
			this.start(a, c, d, e)
		},
		yb: function () {
			this.ka &&
				(this.ka = !1, this.g = this.l.width, this.f = this.l.height, this.Rz = 8 != this.Qa ? this.Qa : Math.floor(8 * Math.random()));
			var a = this.gc();
			if (1 < a / this.i) this.C(this.l);
			else {
				var b, c;
				switch (this.Rz) {
					case 0:
						b = this.g / 3 * a / this.i;
						c = this.f;
						this.C(this.l, 0, 0, this.g / 3 - b, 0, b, c);
						this.C(this.l, this.g - b, 0, 2 * this.g / 3, 0, b, c);
						b = this.g / 3;
						c = this.f * a / this.i;
						this.C(this.l, b, 0, b, this.f - c, b, c);
						break;
					case 1:
						b = this.g / 3 * a / this.i;
						c = this.f;
						this.C(this.l, 0, 0, this.g / 3 - b, 0, b, c);
						this.C(this.l, this.g - b, 0, 2 * this.g / 3, 0, b, c);
						b = this.g / 3;
						c = this.f *
							a / this.i;
						this.C(this.l, b, this.f - c, b, 0, b, c);
						break;
					case 2:
						b = this.g / 3 * a / this.i;
						c = this.f;
						this.C(this.l, 0, 0, this.g / 3 - b, 0, b, c);
						this.C(this.l, this.g - b, 0, 2 * this.g / 3, 0, b, c);
						b = this.g / 3;
						c = this.f * a / this.i;
						this.C(this.l, b, 0, b, 0, b, c);
						break;
					case 3:
						b = this.g / 3 * a / this.i;
						c = this.f;
						this.C(this.l, 0, 0, this.g / 3 - b, 0, b, c);
						this.C(this.l, this.g - b, 0, 2 * this.g / 3, 0, b, c);
						b = this.g / 3;
						c = this.f * a / this.i;
						this.C(this.l, b, this.f - c, b, this.f - c, b, c);
						break;
					case 4:
						b = this.g / 3 * a / this.i;
						c = this.f;
						this.C(this.l, 0, 0, this.g / 3 - b, 0, b, c);
						this.C(this.l,
							this.g - b, 0, 2 * this.g / 3, 0, b, c);
						b = this.g / 3;
						c = this.f / 2 * a / this.i;
						this.C(this.l, b, 0, b, this.f / 2 - c, b, c);
						this.C(this.l, b, this.f - c, b, this.f / 2, b, c);
						break;
					case 5:
						b = this.g / 3 * a / this.i;
						c = this.f;
						this.C(this.l, 0, 0, this.g / 3 - b, 0, b, c);
						this.C(this.l, this.g - b, 0, 2 * this.g / 3, 0, b, c);
						b = this.g / 3;
						c = this.f / 2 * a / this.i;
						this.C(this.l, b, 0, b, 0, b, c);
						this.C(this.l, b, this.f - c, b, this.f - c, b, c);
						break;
					case 6:
						b = this.g / 3;
						c = this.f * a / this.i;
						this.C(this.l, 0, this.f - c, 0, 0, b, c);
						this.C(this.l, b, 0, b, this.f - c, b, c);
						this.C(this.l, 2 * b, this.f - c, 2 * b, 0, b,
							c);
						break;
					case 7:
						b = this.g / 7;
						c = this.f * a / this.i;
						this.C(this.l, 0, this.f - c, 0, 0, b, c);
						this.C(this.l, b, 0, b, this.f - c, b, c);
						this.C(this.l, 2 * b, this.f - c, 2 * b, 0, b, c);
						this.C(this.l, 3 * b, 0, 3 * b, this.f - c, b, c);
						this.C(this.l, 4 * b, this.f - c, 4 * b, 0, b, c);
						this.C(this.l, 5 * b, 0, 5 * b, this.f - c, b, c);
						this.C(this.l, 6 * b, this.f - c, 6 * b, 0, 2 * b, c);
						break;
					default:
						this.C(this.l)
				}
			}
			return null
		},
		end: function () {
			this.finish()
		}
	});
	zc.prototype = n.extend(new v, {
		S: function (a, b, c, d, e) {
			this.Qa = b.o();
			this.start(a, c, d, e)
		},
		yb: function () {
			this.ka && (this.ka = !1,
				this.g = this.l.width, this.f = this.l.height);
			var a = this.gc();
			if (1 < a / this.i) this.C(this.l);
			else {
				var b, c;
				this.C(this.l);
				switch (this.Qa) {
					case 0:
						b = this.g / 2 * a / this.i;
						b = this.g / 2 - b;
						c = this.f / 2 * a / this.i;
						c = this.f / 2 - c;
						this.stretch(this.R, 0, 0, b, c, 0, 0, this.g / 2, this.f / 2);
						b = this.g / 2 * a / this.i;
						c = this.f / 2 * a / this.i;
						c = this.f / 2 - c;
						this.stretch(this.R, this.g / 2 + b, 0, this.g / 2 - b, c, this.g / 2, 0, this.g / 2, this.f / 2);
						b = this.g / 2 * a / this.i;
						b = this.g / 2 - b;
						c = this.f / 2 * a / this.i;
						this.stretch(this.R, 0, this.f / 2 + c, b, this.f / 2 - c, 0, this.f / 2, this.g /
							2, this.f / 2);
						b = this.g / 2 * a / this.i;
						c = this.f / 2 * a / this.i;
						this.stretch(this.R, this.g / 2 + b, this.f / 2 + c, this.g / 2 - b, this.f / 2 - c, this.g / 2, this.f / 2, this.g / 2, this.f / 2);
						break;
					case 1:
						b = this.g * a / this.i;
						b = this.g - b;
						c = this.f * a / this.i;
						c = this.f - c;
						this.C(this.R, 0, 0, this.g - b, this.f - c, b, c);
						break;
					case 2:
						b = this.g * a / this.i;
						c = this.f * a / this.i;
						c = this.f - c;
						this.C(this.R, b, 0, 0, this.f - c, this.g - b, c);
						break;
					case 3:
						b = this.g * a / this.i;
						b = this.g - b;
						c = this.f * a / this.i;
						this.C(this.R, 0, c, this.g - b, 0, b, this.f - c);
						break;
					case 4:
						b = this.g * a / this.i;
						c = this.f *
							a / this.i;
						this.C(this.R, b, c, 0, 0, this.g - b, this.f - c);
						break;
					case 5:
						b = this.g / 2 * a / this.i;
						b = this.g / 2 - b;
						c = this.f / 2 * a / this.i;
						c = this.f / 2 - c;
						this.C(this.R, b - this.g / 2, c - this.f / 2, 0, 0, this.g / 2, this.f / 2);
						b = this.g / 2 * a / this.i;
						c = this.f / 2 * a / this.i;
						c = this.f / 2 - c;
						this.C(this.R, this.g / 2 + b, c - this.f / 2, this.g / 2, 0, this.g / 2, this.f / 2);
						b = this.g / 2 * a / this.i;
						b = this.g / 2 - b;
						c = this.f / 2 * a / this.i;
						this.C(this.R, b - this.g / 2, this.f / 2 + c, 0, this.f / 2, this.g / 2, this.f / 2);
						b = this.g / 2 * a / this.i;
						c = this.f / 2 * a / this.i;
						this.C(this.R, this.g / 2 + b, this.f / 2 + c,
							this.g / 2, this.f / 2, this.g / 2, this.f / 2);
						break;
					case 6:
						c = this.f / 2 * a / this.i;
						c = this.f / 2 - c;
						this.C(this.R, 0, c - this.f / 2, 0, 0, this.g, this.f / 2);
						this.C(this.R, 0, this.f - c, 0, this.f / 2, this.g, this.f / 2);
						break;
					case 7:
						b = this.g / 2 * a / this.i, b = this.g / 2 - b, this.C(this.R, b - this.g / 2, 0, 0, 0, this.g / 2, this.f), this.C(this.R, this.g - b, 0, this.g / 2, 0, this.g / 2, this.f)
				}
			}
			return null
		},
		end: function () {
			this.finish()
		}
	});
	Ac.prototype = n.extend(new v, {
		S: function (a, b, c, d, e) {
			this.Ye = b.m();
			this.mt = b.m();
			this.start(a, c, d, e)
		},
		yb: function () {
			var a = this.R.width,
				b = this.R.height,
				c;
			if (this.ka) {
				0 == this.Ye && (this.Ye = 1);
				switch (this.mt) {
					case v.Ho:
					case v.fp:
						this.jc = (a + this.Ye - 1) / this.Ye;
						0 == this.jc && (this.jc = 1, this.Ye = a);
						break;
					default:
						this.jc = (b + this.Ye - 1) / this.Ye, 0 == this.jc && (this.jc = 1, this.Ye = b)
				}
				this.hb = 0;
				this.ka = !1
			}
			if (0 >= this.Ye || 0 >= this.jc || 0 == this.i) this.C(this.l);
			else {
				var d = this.jc * this.gc() / this.i;
				if (d > this.hb) {
					var e = 0,
						f = 0,
						g = 0,
						l = 0;
					for (c = 0; c < this.Ye; c++) {
						switch (this.mt) {
							case v.Ho:
								e = this.hb + c * this.jc;
								f = 0;
								g = d - this.hb;
								l = b;
								break;
							case v.fp:
								e = a - (this.hb + c * this.jc) -
									(d - this.hb);
								f = 0;
								g = d - this.hb;
								l = b;
								break;
							case v.ux:
								e = 0;
								f = this.hb + c * this.jc;
								g = a;
								l = d - this.hb;
								break;
							case v.ww:
								e = 0, f = b - (this.hb + c * this.jc) - (d - this.hb), g = a, l = d - this.hb
						}
						this.C(this.l, e, f, e, f, g, l)
					}
				}
				this.hb = d
			}
			return this.rH
		},
		end: function () {
			this.finish()
		}
	});
	Bc.prototype = n.extend(new v, {
		S: function (a, b, c, d, e) {
			this.Ka = b.o();
			this.Mp = b.o();
			this.start(a, c, d, e)
		},
		yb: function () {
			this.ka && (this.ka = !1, this.g = this.l.width, this.f = this.l.height);
			var a = this.gc();
			if (1 < a / this.i) this.C(this.l);
			else {
				var b, c, d, e, f, g, l, p, h, m;
				h = this.g /
					this.Ka;
				m = this.f / this.Mp;
				d = this.g / this.Ka;
				e = this.f / this.Mp;
				for (f = 0; f < this.Ka; f++)
					for (g = 0; g < this.Mp; g++) b = f * h, c = g * m, l = d * a / this.i, p = e * a / this.i, this.stretch(this.l, b + (d - l) / 2, c + (e - p) / 2, l, p, b + (d - l) / 2, c + (e - p) / 2, l, p)
			}
			return null
		},
		end: function () {
			this.finish()
		}
	});
	Cc.prototype = n.extend(new v, {
		S: function (a, b, c, d, e) {
			this.pi = b.m();
			this.start(a, c, d, e)
		},
		yb: function () {
			if (this.ka) {
				switch (this.pi) {
					case v.cs:
					case v.ws:
						this.jc = this.R.width / 2;
						break;
					default:
						this.jc = this.R.height / 2
				}
				this.hb = 0;
				this.ka = !1
			}
			if (0 == this.jc) this.C(this.l);
			else {
				var a = 0,
					b = 0,
					c = 0,
					d = 0,
					e = this.jc * this.gc() / this.i;
				if (e > this.hb) {
					switch (this.pi) {
						case v.cs:
							a = this.R.width / 2 - e;
							b = 0;
							c = e - this.hb;
							d = this.l.height;
							break;
						case v.ws:
							a = this.hb;
							b = 0;
							c = e - this.hb;
							d = this.l.height;
							break;
						case v.Aw:
							a = 0;
							b = this.R.height / 2 - e;
							c = this.l.width;
							d = e - this.hb;
							break;
						case v.tx:
							a = 0, b = this.hb, c = this.l.width, d = e - this.hb
					}
					this.C(this.l, a, b, a, b, c, d);
					switch (this.pi) {
						case v.cs:
							a = this.R.width / 2 + this.hb;
							break;
						case v.ws:
							a = this.R.width - e;
							break;
						case v.Aw:
							b = this.R.height / 2 + this.hb;
							break;
						case v.tx:
							b = this.R.height -
								e
					}
					this.C(this.l, a, b, a, b, c, d)
				}
			}
			return null
		},
		end: function () {
			this.finish()
		}
	});
	Dc.prototype = n.extend(new v, {
		S: function (a, b, c, d, e) {
			this.start(a, c, d, e)
		},
		yb: function () {
			this.ka && (this.ka = !1);
			var a;
			this.bh.globalAlpha = 1;
			this.C(this.R);
			a = this.gc() / this.i;
			this.bh.globalAlpha = a;
			this.C(this.l);
			return null
		},
		end: function () {
			this.bh.globalAlpha = 1;
			this.finish()
		}
	});
	Ec.prototype = n.extend(new v, {
		S: function (a, b, c, d, e) {
			this.Ka = b.o();
			this.Qa = b.o();
			this.Am = b.o();
			this.start(a, c, d, e)
		},
		yb: function () {
			this.ka && (this.ka = !1, this.g =
				this.l.width, this.f = this.l.height);
			var a = this.gc();
			if (1 < a / this.i) this.C(this.l);
			else {
				var b, c, d, e, f;
				b = 0;
				var g;
				if (0 == this.Qa)
					for (g = this.f / this.Ka, f = 0; f < this.Ka; f++) 0 == b ? (b = 0, c = f * g, d = this.g * a / this.i, e = f == this.Ka - 1 ? this.f : g + 1, 0 == this.Am ? this.C(this.l, b, c, b, c, d, e) : this.C(this.l, b, c, this.g - d, c, d, e), b = 1) : (c = f * g, d = this.g * a / this.i, b = this.g - d, e = f == this.Ka - 1 ? this.f : g + 1, 0 == this.Am ? this.C(this.l, b, c, b, c, d, e) : this.C(this.l, b, c, 0, c, d, e), b = 0);
				else
					for (g = this.g / this.Ka, f = 0; f < this.Ka; f++) 0 == b ? (b = f * g, c = 0, e = this.f * a /
						this.i, d = f == this.Ka - 1 ? this.g : g + 1, 0 == this.Am ? this.C(this.l, b, c, b, c, d, e) : this.C(this.l, b, c, b, this.f - e, d, e), b = 1) : (b = f * g, e = this.f * a / this.i, c = this.f - e, d = f == this.Ka - 1 ? this.g : g + 1, 0 == this.Am ? this.C(this.l, b, c, b, c, d, e) : this.C(this.l, b, c, b, 0, d, e), b = 0)
			}
			return null
		},
		end: function () {
			this.finish()
		}
	});
	Fc.prototype = n.extend(new v, {
		S: function (a, b, c, d, e) {
			this.xu = b.o();
			this.start(a, c, d, e)
		},
		yb: function () {
			if (this.ka) {
				var a = this.R.width,
					b = this.R.height;
				this.H = Math.floor((a * this.xu / 100 + b * this.xu / 100) / 2);
				0 == this.H && (this.H =
					1);
				this.pe = (a + this.H - 1) / this.H;
				this.Zf = (b + this.H - 1) / this.H;
				this.Mj = this.pe * this.Zf;
				a = Math.floor((this.Mj + 7) / 8 + 2);
				this.Kj = 0;
				this.Td = Array(a);
				for (b = 0; b < a; b++) this.Td[b] = 0;
				this.ka = !1
			}
			if (null == this.Td || 2 > this.pe || 2 > this.Zf || 0 == this.i) this.C(this.l);
			else {
				var c, d, b = a = 0;
				c = Math.floor(this.Mj * this.gc() / this.i);
				var e = c - this.Kj;
				if (0 != e)
					for (this.Kj = c, d = 0; d < e; d++) {
						for (c = 0; 1 > c; c++) {
							var a = Math.floor(this.pe * Math.random()),
								b = Math.floor(this.Zf * Math.random()),
								f, g;
							f = b * this.pe + a;
							g = Math.floor(f / 8);
							f = 1 << (f & 7);
							if (0 == (this.Td[g] &
								f)) {
								this.Td[g] |= f;
								break
							}
							var l = g,
								p = (this.Mj + 7) / 8,
								h, m = !1;
							for (h = g; h < p; h++ , l++)
								if (-1 != this.Td[l]) {
									b = Math.floor(8 * h / this.pe);
									a = Math.floor(8 * h % this.pe);
									for (f = 1; 0 != f; f <<= 1) {
										if (0 == (this.Td[l] & f)) {
											this.Td[l] |= f;
											m = !0;
											break
										}
										if (++a >= this.pe && (a = 0, ++b >= this.Zf)) break
									}
									if (m) break
								} if (m) break;
							for (h = l = 0; h < g; h++ , l++) {
								if (255 != this.Td[l]) {
									b = Math.floor(8 * h / m_nbBlockPerLine);
									a = Math.floor(8 * h % m_nbBlockPerLine);
									for (f = 1; 0 != f; f <<= 1) {
										if (0 == (this.Td[l] & f)) {
											this.Td[l] |= f;
											m = !0;
											break
										}
										if (++a >= this.pe && (a = 0, ++b >= this.Zf)) break
									}
									if (m) break
								}
								if (m) break;
								m = !1
							}
						}
						1 > c && this.C(this.l, Math.floor(a * this.H), Math.floor(b * this.H), Math.floor(a * this.H), Math.floor(b * this.H), this.H, this.H)
					}
			}
			return null
		},
		end: function () {
			this.finish()
		}
	});
	Gc.prototype = n.extend(new v, {
		S: function (a, b, c, d, e) {
			this.Qa = b.o();
			this.start(a, c, d, e)
		},
		yb: function () {
			this.ka && (this.ka = !1, this.g = this.l.width, this.f = this.l.height);
			var a = this.gc(),
				b = a / this.i;
			if (1 < b) this.C(this.l);
			else {
				var c, d, e;
				.25 > b ? (d = 2 * this.g * a / this.i, d *= 2, e = this.f / 7, b = this.g / 2 - d / 2, c = this.f / 2 - e / 2, this.C(this.l, b, c, b, c, d, e), d = this.g /
					7, e = 2 * this.f * a / this.i, e *= 2, b = this.g / 2 - d / 2, c = this.f / 2 - e / 2) : (b = this.g / 2, d = this.g * a / this.i - b, e = this.f / 2, c = 0, this.C(this.l, b, c, b, c, d, e), c = this.f / 2, e = this.f * a / this.i - c, b = d = this.g / 2, this.C(this.l, b, c, b, c, d, e), d = this.g * a / this.i - this.g / 2, b = this.g / 2 - d, c = e = this.f / 2, this.C(this.l, b, c, b, c, d, e), e = this.f * a / this.i - this.f / 2, c = this.f / 2 - e, d = this.g / 2, b = 0);
				this.C(this.l, b, c, b, c, d, e)
			}
			return null
		},
		end: function () {
			this.finish()
		}
	});
	Hc.prototype = n.extend(new v, {
		S: function (a, b, c, d, e) {
			this.Qa = b.o();
			this.start(a, c, d, e)
		},
		yb: function () {
			this.ka &&
				(this.ka = !1, this.g = this.l.width, this.f = this.l.height, this.wu = !1);
			var a = this.gc(),
				b = a / this.i;
			if (1 < b) this.C(this.l);
			else {
				var c, d, e, f;
				if (.5 >= b) switch (this.Qa) {
					case 0:
						e = this.g * a / this.i * 2;
						f = this.f / 2;
						c = this.g - e;
						d = this.f / 2;
						this.C(this.l, 0, 0, c, d, e, f);
						break;
					case 1:
						e = this.g * a / this.i * 2;
						f = this.f / 2;
						c = this.g - e;
						d = this.f / 2;
						this.C(this.l, c, 0, 0, d, e, f);
						break;
					case 2:
						e = this.g * a / this.i * 2;
						f = this.f / 2;
						c = this.g - e;
						d = this.f / 2;
						this.C(this.l, 0, d, c, 0, e, f);
						break;
					case 3:
						e = this.g * a / this.i * 2, f = this.f / 2, c = this.g - e, d = this.f / 2, this.C(this.l,
							c, d, 0, 0, e, f)
				}
				if (.5 < b) switch (0 == this.wu && (1 >= this.Qa ? this.C(this.l, 0, 0, 0, this.f / 2, this.g, this.f / 2) : this.C(this.l, 0, this.f / 2, 0, 0, this.g, this.f / 2), this.wu = !0), b = a - this.i / 2, b /= this.i / 2, f = this.f / 2 * 1E3 * b / 1E3, this.Qa) {
					case 0:
					case 1:
						this.stretch(this.l, 0, f, this.g, this.f / 2, 0, this.f / 2, this.g, this.f / 2);
						this.stretch(this.l, 0, 0, this.g, f, 0, this.f / 2 - f, this.g, f);
						break;
					case 2:
					case 3:
						this.stretch(this.l, 0, this.f / 2 - f, this.g, this.f / 2, 0, 0, this.g, this.f / 2), this.stretch(this.l, 0, this.f - f, this.g, f, 0, this.f / 2, this.g, f)
				}
			}
			return null
		},
		end: function () {
			this.finish()
		}
	});
	Ic.prototype = n.extend(new v, {
		S: function (a, b, c, d, e) {
			this.pi = b.o();
			this.start(a, c, d, e)
		},
		yb: function () {
			var a = this.R.width,
				b = this.R.height;
			if (this.ka) {
				switch (this.pi) {
					case v.Ho:
					case v.fp:
						this.jc = a;
						break;
					default:
						this.jc = b
				}
				this.hb = 0;
				this.ka = !1
			}
			if (0 == this.i) this.C(this.l);
			else {
				var c = this.jc * this.gc() / this.i;
				if (c > this.hb) {
					var d = 0,
						e = 0;
					switch (this.pi) {
						case v.Ho:
							d = c - a;
							e = 0;
							break;
						case v.fp:
							d = a - c;
							e = 0;
							break;
						case v.ux:
							d = 0;
							e = c - b;
							break;
						case v.ww:
							d = 0, e = b - c
					}
					this.C(this.l, d, e, 0, 0, a, b);
					this.hb = c
				}
			}
			return null
		},
		end: function () {
			this.finish()
		}
	});
	Jc.prototype = n.extend(new v, {
		S: function (a, b, c, d, e) {
			this.Qa = b.o();
			this.Ka = b.o();
			this.Hy = b.o();
			this.start(a, c, d, e)
		},
		yb: function () {
			this.ka && (this.ka = !1, this.g = this.l.width, this.f = this.l.height);
			var a = this.gc();
			if (1 < a / this.i) this.C(this.l);
			else {
				var b, c, d, e, f, g;
				f = this.g * this.Ka / 100;
				g = this.f * this.Ka / 100;
				d = f * a / this.i;
				e = g * a / this.i;
				b = this.g / 2 - d / 2;
				c = this.f / 2 - e / 2;
				0 == this.Hy ? this.C(this.l, b, c, b, c, d, e) : this.stretch(this.l, b, c, d, e, this.g / 2 - f / 2, this.f / 2 - g /
					2, f, g);
				b = 100 - this.Ka;
				f = this.g * b / 100;
				g = this.f * b / 100;
				d = f / 2 * a / this.i;
				e = g / 2 * a / this.i;
				this.C(this.l, 0, 0, 0, 0, this.g, e);
				this.C(this.l, 0, 0, 0, 0, d, this.f);
				this.C(this.l, 0, this.f - e, 0, this.f - e, this.g, e);
				this.C(this.l, this.g - d, 0, this.g - d, 0, d, this.f)
			}
			return null
		},
		end: function () {
			this.finish()
		}
	});
	Kc.prototype = n.extend(new v, {
		S: function (a, b, c, d, e) {
			this.Qa = b.o();
			this.start(a, c, d, e)
		},
		yb: function () {
			this.ka && (this.ka = !1, this.g = this.l.width, this.f = this.l.height);
			var a = this.gc();
			if (1 < a / this.i) this.C(this.l);
			else {
				var b,
					c;
				switch (this.Qa) {
					case 0:
						b = this.g * a / this.i;
						c = this.f * a / this.i;
						this.stretch(this.l, 0, 0, b, c, 0, 0, this.g, this.f);
						break;
					case 1:
						b = this.g * a / this.i;
						c = this.f * a / this.i;
						this.stretch(this.l, this.g - b, 0, b, c, 0, 0, this.g, this.f);
						break;
					case 2:
						b = this.g * a / this.i;
						c = this.f * a / this.i;
						this.stretch(this.l, 0, this.f - c, b, c, 0, 0, this.g, this.f);
						break;
					case 3:
						b = this.g * a / this.i;
						c = this.f * a / this.i;
						this.stretch(this.l, this.g - b, this.f - c, b, c, 0, 0, this.g, this.f);
						break;
					case 4:
						b = this.g / 2 * a / this.i;
						c = this.f / 2 * a / this.i;
						5 > c && (c = 5);
						this.stretch(this.l,
							0, 0, b, c, 0, 0, this.R.width / 2, this.R.height / 2);
						b = this.g / 2 * a / this.i;
						c = this.f / 2 * a / this.i;
						5 > c && (c = 5);
						this.stretch(this.l, this.g - b, 0, b, c, this.g / 2, 0, this.g / 2, this.f / 2);
						b = this.g / 2 * a / this.i;
						c = this.f / 2 * a / this.i;
						this.stretch(this.l, 0, this.f - c, b, c, 0, this.f / 2, this.g / 2, this.f / 2);
						b = this.g / 2 * a / this.i;
						c = this.f / 2 * a / this.i;
						this.stretch(this.l, this.g - b, this.f - c, b, c, this.g / 2, this.f / 2, this.g / 2, this.f / 2);
						break;
					case 5:
						b = this.g / 2 * a / this.i;
						c = this.f / 2 * a / this.i;
						5 > c && (c = 5);
						this.stretch(this.l, this.g / 2 - b, this.f / 2 - c, b, c, 0, 0, this.R.width /
							2, this.R.height / 2);
						b = this.g / 2 * a / this.i;
						c = this.f / 2 * a / this.i;
						5 > c && (c = 5);
						this.stretch(this.l, this.g / 2, this.f / 2 - c, b, c, this.g / 2, 0, this.g / 2, this.f / 2);
						b = this.g / 2 * a / this.i;
						c = this.f / 2 * a / this.i;
						this.stretch(this.l, this.g / 2 - b, this.f / 2, b, c, 0, this.f / 2, this.g / 2, this.f / 2);
						b = this.g / 2 * a / this.i;
						c = this.f / 2 * a / this.i;
						this.stretch(this.l, this.g / 2, this.f / 2, b, c, this.g / 2, this.f / 2, this.g / 2, this.f / 2);
						break;
					case 6:
						b = this.g;
						c = this.f * a / this.i;
						this.stretch(this.l, 0, 0, b, c, 0, 0, this.g, this.f);
						break;
					case 7:
						b = this.g * a / this.i;
						c = this.f;
						this.stretch(this.l, 0, 0, b, c, 0, 0, this.g, this.f);
						break;
					case 8:
						b = this.g * a / this.i;
						c = this.f;
						this.stretch(this.l, this.g - b, 0, b, c, 0, 0, this.g, this.f);
						break;
					case 9:
						b = this.g, c = this.f * a / this.i, this.stretch(this.l, 0, this.f - c, b, c, 0, 0, this.g, this.f)
				}
			}
			return null
		},
		end: function () {
			this.finish()
		}
	});
	Lc.prototype = n.extend(new v, {
		S: function (a, b, c, d, e) {
			this.Qa = b.o();
			this.start(a, c, d, e)
		},
		yb: function () {
			this.ka && (this.ka = !1, this.g = this.l.width, this.f = this.l.height, this.Qb = 0);
			var a = this.gc();
			if (1 < a / this.i) this.C(this.l);
			else {
				var b,
					c;
				switch (this.Qa) {
					case 0:
						0 == this.Qb ? (b = 2 * this.g * a / this.i, b = this.g - b, c = 2 * this.f * a / this.i, c = this.f - c, this.stretch(this.R, 0, 0, b, c, 0, 0, this.g, this.f), a >= this.i / 2 && (this.Qb = 1)) : (b = 2 * this.g * a / this.i, b -= this.g, c = 2 * this.f * a / this.i, c -= this.f, this.stretch(this.l, 0, 0, b, c, 0, 0, this.g, this.f));
						break;
					case 1:
						0 == this.Qb ? (b = this.g, c = 2 * this.f * a / this.i, c = this.f - c, this.stretch(this.R, 0, 0, b, c, 0, 0, this.g, this.f), a >= this.i / 2 && (this.Qb = 1)) : (b = this.g, c = 2 * this.f * a / this.i, c -= this.f, this.stretch(this.l, 0, 0, b, c, 0, 0, this.g, this.f));
						break;
					case 2:
						0 == this.Qb ? (b = 2 * this.g * a / this.i, b = this.g - b, c = 2 * this.f * a / this.i, c = this.f - c, this.stretch(this.R, this.g - b, 0, b, c, 0, 0, this.g, this.f), a >= this.i / 2 && (this.Qb = 1)) : (b = 2 * this.g * a / this.i, b -= this.g, c = 2 * this.f * a / this.i, c -= this.f, this.stretch(this.l, this.g - b, 0, b, c, 0, 0, this.g, this.f));
						break;
					case 3:
						0 == this.Qb ? (b = 2 * this.g * a / this.i, b = this.g - b, c = this.f, this.stretch(this.R, 0, 0, b, c, 0, 0, this.g, this.f), a >= this.i / 2 && (this.Qb = 1)) : (b = 2 * this.g * a / this.i, b -= this.g, c = this.f, this.stretch(this.l, 0, 0, b, c, 0, 0, this.g, this.f));
						break;
					case 4:
						0 == this.Qb ? (b = 2 * this.g * a / this.i, b = this.g - b, c = this.f, this.stretch(this.R, this.g / 2 - b / 2, 0, b, c, 0, 0, this.g, this.f), a >= this.i / 2 && (this.Qb = 1)) : (b = 2 * this.g * a / this.i, b -= this.g, c = this.f, this.stretch(this.l, this.g / 2 - b / 2, 0, b, c, 0, 0, this.g, this.f));
						break;
					case 5:
						0 == this.Qb ? (c = 2 * this.f * a / this.i, c = this.f - c, b = this.g, this.stretch(this.R, 0, this.f / 2 - c / 2, b, c, 0, 0, this.g, this.f), a >= this.i / 2 && (this.Qb = 1)) : (c = 2 * this.f * a / this.i, c -= this.f, b = this.g, this.stretch(this.l, 0, this.f / 2 - c / 2, b, c, 0, 0, this.g, this.f));
						break;
					case 6:
						0 == this.Qb ? (b = 2 * this.g * a / this.i, b = this.g - b, c = 2 * this.f * a / this.i, c = this.f - c, this.stretch(this.R, this.g / 2 - b / 2, this.f / 2 - c / 2, b, c, 0, 0, this.g, this.f), a >= this.i / 2 && (this.Qb = 1)) : (b = 2 * this.g * a / this.i, b -= this.g, c = 2 * this.f * a / this.i, c -= this.f, this.stretch(this.l, this.g / 2 - b / 2, this.f / 2 - c / 2, b, c, 0, 0, this.g, this.f));
						break;
					case 7:
						0 == this.Qb ? (b = 2 * this.g * a / this.i, b = this.g - b, c = this.f, this.stretch(this.R, this.g - b, 0, b, c, 0, 0, this.g, this.f), a >= this.i / 2 && (this.Qb = 1)) : (b = 2 * this.g * a / this.i, b -= this.g, c = this.f, this.stretch(this.l,
							this.f - b, 0, b, c, 0, 0, this.g, this.f));
						break;
					case 8:
						0 == this.Qb ? (b = 2 * this.g * a / this.i, b = this.g - b, c = 2 * this.f * a / this.i, c = this.f - c, this.stretch(this.R, 0, this.f - c, b, c, 0, 0, this.g, this.f), a >= this.i / 2 && (this.Qb = 1)) : (b = 2 * this.g * a / this.i, b -= this.g, c = 2 * this.f * a / this.i, c -= this.f, this.stretch(this.l, 0, this.f - c, b, c, 0, 0, this.g, this.f));
						break;
					case 9:
						0 == this.Qb ? (b = this.g, c = 2 * this.f * a / this.i, c = this.f - c, this.stretch(this.R, 0, this.f - c, b, c, 0, 0, this.g, this.f), a >= this.i / 2 && (this.Qb = 1)) : (b = this.g, c = 2 * this.f * a / this.i, c -= this.f,
							this.stretch(this.l, 0, this.f - c, b, c, 0, 0, this.g, this.f));
						break;
					case 10:
						0 == this.Qb ? (b = 2 * this.g * a / this.i, b = this.g - b, c = 2 * this.f * a / this.i, c = this.f - c, this.stretch(this.R, this.g - b, this.f - c, b, c, 0, 0, this.g, this.f), a >= this.i / 2 && (this.Qb = 1)) : (b = 2 * this.g * a / this.i, b -= this.g, c = 2 * this.f * a / this.i, c -= this.f, this.stretch(this.l, this.g - b, this.f - c, b, c, 0, 0, this.g, this.f))
				}
			}
			return null
		},
		end: function () {
			this.finish()
		}
	});
	Mc.prototype = n.extend(new v, {
		S: function (a, b, c, d, e) {
			this.Qa = b.o();
			this.start(a, c, d, e)
		},
		yb: function () {
			this.ka &&
				(this.ka = !1, this.g = this.l.width, this.f = this.l.height, this.Jj = this.Ij = 0);
			var a = this.gc();
			if (1 < a / this.i) this.C(this.l);
			else {
				var b, c, d, e;
				b = this.f * a / this.i;
				a = this.g * a / this.i;
				if (0 == this.Qa) {
					e = b % 2;
					for (c = 0; c < this.g; c += 2) {
						for (d = this.Ij; d < b; d++) this.C(this.l, c, d, c, d, 1, 1);
						for (d = this.f - b - e; d < this.f - this.Ij; d++) this.C(this.l, c + 1, d + 1, c + 1, d + 1, 1, 1)
					}
					this.Ij = 0 == b % 2 ? b : b - 1
				}
				if (1 == this.Qa) {
					e = a % 2;
					for (d = 0; d < this.f; d++) {
						for (c = this.Jj; c < a; c += 2) this.C(this.l, c + 1, d, c + 1, d, 1, 1);
						for (c = this.g - a - e; c < this.g - this.Jj; c += 2) this.C(this.l,
							c, d + 1, c, d + 1, 1, 1)
					}
					this.Jj = 0 == a % 2 ? a : a - 1
				}
				if (2 == this.Qa) {
					e = b % 2;
					for (c = 0; c < this.g; c += 2) {
						for (d = this.Ij; d < b; d += 2) this.C(this.l, c, d, c, d, 1, 1);
						for (d = this.f - b - e; d < this.f - this.Ij; d += 2) this.C(this.l, c + 1, d + 1, c + 1, d + 1, 1, 1)
					}
					e = a % 2;
					for (d = 0; d < this.f; d += 2) {
						for (c = this.Jj; c < a; c += 2) this.C(this.l, c + 1, d, c + 1, d, 1, 1);
						for (c = this.g - a - e; c < this.g - this.Jj; c += 2) this.C(this.l, c, d + 1, c, d + 1, 1, 1)
					}
					this.Ij = 0 == b % 2 ? b : b - 1;
					this.Jj = 0 == a % 2 ? a : a - 1
				}
			}
			return null
		},
		end: function () {
			this.finish()
		}
	});
	Nc.prototype = n.extend(new v, {
		S: function (a, b, c, d, e) {
			this.Ka =
				b.o();
			this.zm = b.o();
			this.Gy = b.o();
			this.start(a, c, d, e)
		},
		yb: function () {
			this.ka && (this.ka = !1, this.g = this.l.width, this.f = this.l.height, this.dl = 0);
			var a = this.gc();
			if (1 < a / this.i) this.C(this.l);
			else {
				var b, c, d;
				b = this.g / 2;
				d = this.f / 2;
				this.dl = 6.28318 * this.Ka * a / this.i;
				1 == this.Gy && (this.dl = 6.28318 - this.dl);
				c = this.g / 2 - this.g / 2 * a / this.i;
				b = Math.floor(b + Math.cos(this.dl) * c);
				c = Math.floor(d + Math.sin(this.dl) * c);
				d = this.g * a / this.i;
				a = this.f * a / this.i;
				this.stretch(this.R, 0, 0, this.g, this.f, 0, 0, this.R.width, this.R.height);
				1 == this.cP ? this.stretch(this.l, b - d / 2, c - a / 2, d, a, 0, 0, this.g, this.f) : this.stretch(this.l, b - d / 2, c - a / 2, d, a, this.g - d, this.f - a, d, a)
			}
			return null
		},
		end: function () {
			this.finish()
		}
	});
	Oc.prototype = n.extend(new v, {
		S: function (a, b, c, d, e) {
			this.Ka = b.o();
			this.zm = b.o();
			this.start(a, c, d, e)
		},
		yb: function () {
			this.ka && (this.ka = !1, this.g = this.l.width, this.f = this.l.height, this.sq = 0);
			var a = this.gc();
			if (1 < a / this.i) this.C(this.l);
			else {
				var b, c, d;
				b = this.g / 2;
				c = this.f / 2;
				d = 6.28318 * this.Ka * a / this.i;
				d -= 6.28318 * this.sq;
				1 == this.zm && (d = 6.28318 -
					d);
				a = this.g * a / this.i;
				b = Math.floor(b + Math.cos(d) * a);
				c = Math.floor(c + Math.sin(d) * a);
				this.C(this.l);
				this.C(this.R, b - this.g / 2, c - this.f / 2, 0, 0, this.g, this.f);
				0 == this.zm ? 6.28318 <= d && this.sq++ : 0 >= d && this.sq++
			}
			return null
		},
		end: function () {
			this.finish()
		}
	});
	Pc.prototype = n.extend(new v, {
		S: function (a, b, c, d, e) {
			this.pw = b.o();
			this.Zr = b.m();
			this.uC = b.m();
			this.start(a, c, d, e)
		},
		yb: function () {
			var a = this.R.width,
				b = this.R.height;
			if (this.ka) {
				this.H = Math.floor((a * this.pw / 100 + b * this.pw / 100) / 2);
				0 == this.H && (this.H = 1);
				this.pe =
					(a + this.H - 1) / this.H;
				this.Zf = (b + this.H - 1) / this.H;
				this.vu = this.uC;
				this.dd = this.Zr;
				switch (this.Zr) {
					case v.Yh:
						this.Y = this.Z = 0;
						break;
					case v.Zh:
						this.Y = a - this.H;
						this.Z = 0;
						break;
					case v.$i:
						this.Y = 0;
						this.Z = b - this.H;
						break;
					case v.aj:
						this.Y = a - this.H;
						this.Z = b - this.H;
						break;
					case v.zw:
						this.Y = a / 2 - this.H, this.Z = b / 2 - this.H, this.dd = this.vu == v.Gw ? v.Yh : v.Zh, this.uq = this.Y - this.H, this.xq = this.Z - this.H, this.rq = this.Z + 2 * this.H, this.wq = this.Y + 2 * this.H, this.pe = 2 + 2 * (this.Y + this.H - 1) / this.H, this.Zf = 2 + 2 * (this.Z + this.H - 1) / this.H
				}
				this.Mj =
					Math.floor(this.pe * this.Zf);
				this.Kj = 0;
				this.ka = !1
			}
			if (this.H >= a || this.H >= b) this.C(this.l);
			else {
				var c;
				c = Math.floor(this.Mj * this.gc() / this.i);
				var d = c - this.Kj;
				if (0 != d)
					for (this.Kj = c, c = 0; c < d; c++)
						if (this.C(this.l, this.Y, this.Z, this.Y, this.Z, this.H, this.H), this.Zr == v.zw) switch (this.dd) {
							case v.Yh:
								this.Y += this.H;
								this.Y >= this.wq && (this.Y -= this.H, this.Z += this.H, this.dd = v.Zh, this.wq += this.H);
								break;
							case v.Zh:
								this.Z += this.H;
								this.Z >= this.rq && (this.Z -= this.H, this.Y -= this.H, this.dd = v.aj, this.rq += this.H);
								break;
							case v.aj:
								this.Y -=
									this.H;
								this.Y + this.H <= this.uq && (this.Y += this.H, this.Z -= this.H, this.dd = v.$i, this.uq -= this.H);
								break;
							case v.$i:
								this.Z -= this.H, this.Z + this.H <= this.xq && (this.Z += this.H, this.Y += this.H, this.dd = v.Yh, this.xq -= this.H)
						} else switch (this.vu) {
							case v.Gw:
								switch (this.dd) {
									case v.Yh:
										this.Y += this.H;
										this.Y >= a && (this.Y -= this.H, this.Z += this.H, this.dd = v.Zh);
										break;
									case v.Zh:
										this.Y -= this.H;
										0 >= this.Y + this.H && (this.Y += this.H, this.Z += this.H, this.dd = v.Yh);
										break;
									case v.$i:
										this.Y += this.H;
										this.Y >= a && (this.Y -= this.H, this.Z -= this.H,
											this.dd = v.aj);
										break;
									case v.aj:
										this.Y -= this.H, 0 >= this.Y + this.H && (this.Y += this.H, this.Z -= this.H, this.dd = v.$i)
								}
								break;
							case v.gD:
								switch (this.dd) {
									case v.Yh:
										this.Z += this.H;
										this.Z >= b && (this.Z -= this.H, this.Y += this.H, this.dd = v.$i);
										break;
									case v.Zh:
										this.Z += this.H;
										this.Z >= b && (this.Z -= this.H, this.Y -= this.H, this.dd = v.aj);
										break;
									case v.$i:
										this.Z -= this.H;
										0 >= this.Z + this.H && (this.Z += this.H, this.Y += this.H, this.dd = v.Yh);
										break;
									case v.aj:
										this.Z -= this.H, 0 >= this.Z + this.H && (this.Z += this.H, this.Y -= this.H, this.dd = v.Zh)
								}
						}
			}
			return null
		},
		end: function () {
			this.finish()
		}
	});
	Qc.prototype = n.extend(new v, {
		S: function (a, b, c, d, e) {
			this.Qa = b.o();
			this.Ka = b.o();
			this.start(a, c, d, e)
		},
		yb: function () {
			this.ka && (this.ka = !1, this.g = this.l.width, this.f = this.l.height, this.kf = this.Lj = 0);
			var a = this.gc();
			if (1 < a / this.i) this.C(this.l);
			else {
				var b, c, d, e;
				0 == this.Qa ? (b = this.f / this.Ka, e = Math.floor(this.Lj * b) + Math.floor(b), c = 0, d = this.g * a / this.i, d = d * this.Ka / 2, d -= this.g * this.Lj, b = 0 == this.kf ? 0 : this.g - d, this.C(this.l, b, c, b, c, d, e), c = this.f - e, b = 1 == this.kf ? 0 : this.g - d, this.C(this.l,
					b, c, b, c, d, e), d >= this.g && (this.Lj++ , this.kf++ , 2 == this.kf && (this.kf = 0))) : (b = this.g / this.Ka, d = Math.floor(this.Lj * b) + Math.floor(b), b = 0, e = this.f * a / this.i, e = e * this.Ka / 2, e -= this.f * this.Lj, c = 0 == this.kf ? 0 : this.f - e, this.C(this.l, b, c, b, c, d, e), b = this.g - d, c = 1 == this.kf ? 0 : this.f - e, this.C(this.l, b, c, b, c, d, e), e >= this.f && (this.Lj++ , this.kf++ , 2 == this.kf && (this.kf = 0)))
			}
			return null
		},
		end: function () {
			this.finish()
		}
	});
	Rc.prototype = n.extend(new v, {
		S: function (a, b, c, d, e) {
			this.start(a, c, d, e)
		},
		yb: function (a) {
			var b = this.R.width,
				c = this.R.height;
			this.ka && (this.ka = !1);
			if (0 == this.i) this.C(this.l);
			else {
				var d;
				d = this.gc();
				0 != (a & v.kp) ? (a = Math.floor(b - b * d / this.i), d = Math.floor(c - c * d / this.i), this.C(this.l), this.stretch(this.R, (b - a) / 2, (c - d) / 2, a, d, 0, 0, b, c)) : (a = Math.floor(b * d / this.i), d = Math.floor(c * d / this.i), this.C(this.R), this.stretch(this.l, (b - a) / 2, (c - d) / 2, a, d, 0, 0, b, c))
			}
			return null
		},
		end: function () {
			this.finish()
		}
	});
	Sc.prototype = n.extend(new v, {
		S: function (a, b, c, d, e) {
			this.Ka = b.o();
			this.start(a, c, d, e)
		},
		yb: function () {
			this.ka && (this.ka = !1,
				this.g = this.l.width, this.f = this.l.height);
			var a = this.gc();
			if (1 < a / this.i) this.C(this.l);
			else {
				var b, c, d;
				0 == this.Ka ? (c = this.g * a / this.i, d = this.f * a / this.i, a = this.g / 2 - c / 2, b = this.f / 2 - d / 2, this.stretch(this.l, 0, 0, this.g, this.f, a, b, c, d)) : (c = this.g * a / this.i, c = this.g - c, d = this.f * a / this.i, d = this.f - d, a = this.g / 2 - c / 2, b = this.f / 2 - d / 2, this.stretch(this.R, 0, 0, this.g, this.f, a, b, c, d))
			}
			return null
		},
		end: function () {
			this.finish()
		}
	});
	u.vg = {
		Vw: "PK\u0003\u0004",
		Bw: "PK\u0001\u0002",
		ds: "PK\u0005\u0006",
		xx: "PK\u0006\u0007",
		SE: "PK\u0006\u0006",
		nK: "PK\u0007\b"
	};
	u.HF = {
		$g: !1,
		fi: !1,
		dir: !1,
		af: null,
		Pk: null
	};
	u.prototype = function () {
		function a(d) {
			"/" != d.slice(-1) && (d += "/");
			if (!this.files[d]) {
				var e = b(d);
				e && a.call(this, e);
				c.call(this, d, null, {
					dir: !0
				})
			}
			return this.files[d]
		}

		function b(a) {
			"/" == a.slice(-1) && (a = a.substring(0, a.length - 1));
			var b = a.lastIndexOf("/");
			return 0 < b ? a.substring(0, b) : ""
		}

		function c(c, e, p) {
			var g = b(c);
			g && a.call(this, g);
			p = p || {};
			!0 === p.$g && null == p.fi && (p.fi = !0);
			p = d(p, u.HF);
			p.af = p.af || new Date;
			null !== p.Pk && (p.Pk = p.Pk.toUpperCase());
			p.dir ||
				null === e || "undefined" === typeof e ? (p.$g = !1, p.fi = !1, e = null) : u.mk.Pr && e instanceof Uint8Array ? (p.$g = !1, p.fi = !0, e = u.Dg.Or(e)) : u.mk.Cx && e instanceof ArrayBuffer ? (p.$g = !1, p.fi = !0, e = new Uint8Array(e), e = u.Dg.Or(e)) : p.fi && !p.$g && (!0 !== p.XA && (e = u.Dg.iC(e)), delete p.XA);
			return this.files[c] = new f(c, e, p)
		}

		function d() {
			var a = {},
				b, c;
			for (b = 0; b < arguments.length; b++)
				for (c in arguments[b]) arguments[b].hasOwnProperty(c) && "undefined" === typeof a[c] && (a[c] = arguments[b][c]);
			return a
		}

		function e(a, b) {
			var c = "",
				d;
			for (d = 0; d <
				b; d++) c += String.fromCharCode(a & 255), a >>>= 8;
			return c
		}

		function f(a, b, c) {
			this.name = a;
			this.data = b;
			this.options = c
		}
		f.prototype = {
			Dx: function () {
				var a = this.data;
				if (null === a || "undefined" === typeof a) return "";
				this.options.$g && (a = hb.decode(a));
				this.options.fi || (a = u.prototype.qC(a));
				return a
			}
		};
		return {
			load: function () {
				throw Error("Load method is not defined. Is the file jszip-load.js included ?");
			},
			filter: function (a) {
				var b = [],
					c, e, g;
				for (c in this.files) this.files.hasOwnProperty(c) && (e = this.files[c], g = new f(e.name,
					e.data, d(e.options)), e = c.slice(this.root.length, c.length), c.slice(0, this.root.length) === this.root && a(e, g) && b.push(g));
				return b
			},
			file: function (a, b, d) {
				if (1 === arguments.length) {
					if (a instanceof RegExp) {
						var e = a;
						return this.filter(function (a, b) {
							return !b.options.dir && e.test(a)
						})
					}
					return this.filter(function (b, c) {
						return !c.options.dir && b === a
					})[0] || null
				}
				a = this.root + a;
				c.call(this, a, b, d);
				return this
			},
			XN: function (b) {
				if (!b) return this;
				if (b instanceof RegExp) return this.filter(function (a, c) {
					return c.options.dir &&
						b.test(a)
				});
				var c = a.call(this, this.root + b),
					d = this.clone();
				d.root = c.name;
				return d
			},
			remove: function (a) {
				a = this.root + a;
				var b = this.files[a];
				b || ("/" != a.slice(-1) && (a += "/"), b = this.files[a]);
				if (b)
					if (b.options.dir)
						for (var b = this.filter(function (b, c) {
							return c.name.slice(0, a.length) === a
						}), c = 0; c < b.length; c++) delete this.files[b[c].name];
					else delete this.files[a];
				return this
			},
			$N: function (a) {
				var b, c;
				a = d(a || {}, {
					$g: !0,
					Pk: "STORE",
					type: "base64"
				});
				var f = a.Pk.toUpperCase();
				if (!u.Ze[f]) throw f + " is not a valid compression method !";
				var g = [],
					h = [],
					k = 0,
					m;
				for (m in this.files)
					if (this.files.hasOwnProperty(m)) {
						b = this.files[m];
						var n = this.qC(b.name),
							q, r, t;
						r = b;
						b = n;
						var v = f;
						q = b !== r.name;
						c = r.Dx();
						var z = r.options;
						t = z.af.getHours();
						t = t << 6 | z.af.getMinutes();
						t = t << 5 | z.af.getSeconds() / 2;
						r = z.af.getFullYear() - 1980;
						r = r << 4 | z.af.getMonth() + 1;
						r = r << 5 | z.af.getDate();
						var w = null !== c && 0 !== c.length,
							v = z.Pk || v;
						if (!u.Ze[v]) throw v + " is not a valid compression method !";
						z = u.Ze[v];
						v = w ? z.rF(c) : "";
						q = "\n\x00" + (q ? "\x00\b" : "\x00\x00") + (w ? z.zq : u.Ze.STORE.zq);
						q += e(t,
							2);
						q += e(r, 2);
						q += w ? e(this.Fp(c), 4) : "\x00\x00\x00\x00";
						q += w ? e(v.length, 4) : "\x00\x00\x00\x00";
						q += w ? e(c.length, 4) : "\x00\x00\x00\x00";
						q += e(b.length, 2);
						b = q += "\x00\x00";
						c = v;
						c = u.vg.Vw + b + n + c;
						n = u.vg.Bw + "\u0014\x00" + b + "\x00\x00\x00\x00\x00\x00" + (!0 === this.files[m].options.dir ? "\u0010\x00\x00\x00" : "\x00\x00\x00\x00") + e(k, 4) + n;
						k += c.length;
						h.push(c);
						g.push(n)
					} f = h.join("");
				g = g.join("");
				h = f + g + (u.vg.ds + "\x00\x00\x00\x00" + e(h.length, 2) + e(h.length, 2) + e(g.length, 4) + e(f.length, 4) + "\x00\x00");
				switch (a.type.toLowerCase()) {
					case "uint8array":
						return u.Dg.gw(h);
					case "arraybuffer":
						return u.Dg.gw(h).buffer;
					case "blob":
						return u.Dg.OI(h);
					case "base64":
						return a.$g ? hb.encode(h) : h;
					default:
						return h
				}
			},
			Fp: function (a, b) {
				if ("" === a || "undefined" === typeof a) return 0;
				var c = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487,
					1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040,
					2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450,
					3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148,
					906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934,
					4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117
				];
				"undefined" == typeof b && (b = 0);
				var d;
				b ^= -1;
				for (var e = 0, f = a.length; e < f; e++) d = (b ^ a.charCodeAt(e)) &
					255, d = c[d], b = b >>> 8 ^ d;
				return b ^ -1
			},
			clone: function () {
				var a = new u,
					b;
				for (b in this) "function" !== typeof this[b] && (a[b] = this[b]);
				return a
			},
			qC: function (a) {
				for (var b = "", c = 0; c < a.length; c++) {
					var d = a.charCodeAt(c);
					128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d & 63 | 128))
				}
				return b
			},
			pC: function (a) {
				for (var b = "", c = 0, d, e, f; c < a.length;) d = a.charCodeAt(c), 128 > d ? (b += String.fromCharCode(d), c++) :
					191 < d && 224 > d ? (e = a.charCodeAt(c + 1), b += String.fromCharCode((d & 31) << 6 | e & 63), c += 2) : (e = a.charCodeAt(c + 1), f = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | f & 63), c += 3);
				return b
			}
		}
	}();
	u.Ze = {
		STORE: {
			zq: "\x00\x00",
			rF: function (a) {
				return a
			},
			lw: function (a) {
				return a
			}
		}
	};
	u.mk = {
		Cx: "undefined" !== typeof ArrayBuffer && "undefined" !== typeof Uint8Array,
		Pr: "undefined" !== typeof Uint8Array,
		blob: function () {
			if ("undefined" === typeof ArrayBuffer) return !1;
			var a = new ArrayBuffer(0);
			try {
				return 0 === (new Blob([a], {
					type: "application/zip"
				})).size
			} catch (c) { }
			try {
				var b =
					new (window.BlobBuilder || window.WebKitBlobBuilder || window.pE || window.iE);
				b.append(a);
				return 0 === b.getBlob("application/zip").size
			} catch (c) { }
			return !1
		}()
	};
	u.Dg = {
		iC: function (a) {
			for (var b = "", c = 0; c < a.length; c++) b += String.fromCharCode(a.charCodeAt(c) & 255);
			return b
		},
		gw: function (a) {
			if (!u.mk.Pr) throw Error("Uint8Array is not supported by this browser");
			for (var b = new ArrayBuffer(a.length), b = new Uint8Array(b), c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
			return b
		},
		Or: function (a) {
			if (!u.mk.Pr) throw Error("Uint8Array is not supported by this browser");
			for (var b = "", c = 0; c < a.length; c++) b += String.fromCharCode(a[c]);
			return b
		},
		OI: function (a) {
			if (!u.mk.blob) throw Error("Blob is not supported by this browser");
			a = u.Dg.gw(a).buffer;
			try {
				return new Blob([a], {
					type: "application/zip"
				})
			} catch (c) { }
			try {
				var b = new (window.BlobBuilder || window.WebKitBlobBuilder || window.pE || window.iE);
				b.append(a);
				return b.getBlob("application/zip")
			} catch (c) { }
			throw Error("Bug : can't construct the Blob.");
		}
	};
	var hb = function () {
		return {
			encode: function (a) {
				for (var b = "", c, d, e, f, g, l, h = 0; h < a.length;) c =
					a.charCodeAt(h++), d = a.charCodeAt(h++), e = a.charCodeAt(h++), f = c >> 2, c = (c & 3) << 4 | d >> 4, g = (d & 15) << 2 | e >> 6, l = e & 63, isNaN(d) ? g = l = 64 : isNaN(e) && (l = 64), b = b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(l);
				return b
			},
			decode: function (a) {
				var b = "",
					c, d, e, f, g,
					l = 0;
				for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < a.length;) c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(l++)), d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(l++)), f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(l++)), g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(l++)), c = c << 2 | d >> 4, d = (d & 15) << 4 | f >> 2, e = (f & 3) << 6 | g, b += String.fromCharCode(c), 64 !=
					f && (b += String.fromCharCode(d)), 64 != g && (b += String.fromCharCode(e));
				return b
			}
		}
	}();
	if (!u) throw "JSZip not defined";
	(function () {
		function a() {
			this.list = this.next = null
		}

		function b() {
			this.n = this.We = this.e = 0;
			this.t = null
		}

		function c(c, d, e, f, g, k) {
			this.Zi = 16;
			this.qE = 288;
			this.status = 0;
			this.root = null;
			this.lh = 0;
			var l = Array(this.Zi + 1),
				h, p, m, n, q, r, t, v = Array(this.Zi + 1),
				z, A, w, u = new b,
				C = Array(this.Zi);
			n = Array(this.qE);
			var R, D = Array(this.Zi + 1),
				B, P, H;
			H = this.root = null;
			for (q = 0; q < l.length; q++) l[q] = 0;
			for (q = 0; q < v.length; q++) v[q] =
				0;
			for (q = 0; q < C.length; q++) C[q] = null;
			for (q = 0; q < n.length; q++) n[q] = 0;
			for (q = 0; q < D.length; q++) D[q] = 0;
			h = 256 < d ? c[256] : this.Zi;
			z = c;
			A = 0;
			q = d;
			do l[z[A]]++ , A++; while (0 < --q);
			if (l[0] == d) this.root = null, this.status = this.lh = 0;
			else {
				for (r = 1; r <= this.Zi && 0 == l[r]; r++);
				t = r;
				k < r && (k = r);
				for (q = this.Zi; 0 != q && 0 == l[q]; q--);
				m = q;
				k > q && (k = q);
				for (B = 1 << r; r < q; r++ , B <<= 1)
					if (0 > (B -= l[r])) {
						this.status = 2;
						this.lh = k;
						return
					} if (0 > (B -= l[q])) this.status = 2, this.lh = k;
				else {
					l[q] += B;
					D[1] = r = 0;
					z = l;
					A = 1;
					for (w = 2; 0 < --q;) D[w++] = r += z[A++];
					z = c;
					q = A = 0;
					do 0 != (r =
						z[A++]) && (n[D[r]++] = q); while (++q < d);
					d = D[m];
					D[0] = q = 0;
					z = n;
					A = 0;
					n = -1;
					R = v[0] = 0;
					w = null;
					for (P = 0; t <= m; t++)
						for (c = l[t]; 0 < c--;) {
							for (; t > R + v[1 + n];) {
								R += v[1 + n];
								n++;
								P = (P = m - R) > k ? k : P;
								if ((p = 1 << (r = t - R)) > c + 1)
									for (p -= c + 1, w = t; ++r < P && !((p <<= 1) <= l[++w]);) p -= l[w];
								R + r > h && R < h && (r = h - R);
								P = 1 << r;
								v[1 + n] = r;
								w = Array(P);
								for (p = 0; p < P; p++) w[p] = new b;
								H = null == H ? this.root = new a : H.next = new a;
								H.next = null;
								H.list = w;
								C[n] = w;
								0 < n && (D[n] = q, u.We = v[n], u.e = 16 + r, u.t = w, r = (q & (1 << R) - 1) >> R - v[n], C[n - 1][r].e = u.e, C[n - 1][r].We = u.We, C[n - 1][r].n = u.n, C[n - 1][r].t =
									u.t)
							}
							u.We = t - R;
							A >= d ? u.e = 99 : z[A] < e ? (u.e = 256 > z[A] ? 16 : 15, u.n = z[A++]) : (u.e = g[z[A] - e], u.n = f[z[A++] - e]);
							p = 1 << t - R;
							for (r = q >> R; r < P; r += p) w[r].e = u.e, w[r].We = u.We, w[r].n = u.n, w[r].t = u.t;
							for (r = 1 << t - 1; 0 != (q & r); r >>= 1) q ^= r;
							for (q ^= r;
								(q & (1 << R) - 1) != D[n];) R -= v[n], n--
						}
					this.lh = v[1];
					this.status = 0 != B && 1 != m ? 1 : 0
				}
			}
		}

		function d(a) {
			for (; w < a;) z |= (I.length == J ? -1 : I.charCodeAt(J++) & 255) << w, w += 8
		}

		function e(a) {
			return z & K[a]
		}

		function f(a) {
			z >>= a;
			w -= a
		}

		function g(a, b, c) {
			var g, l, h;
			if (0 == c) return 0;
			for (h = 0; ;) {
				d(E);
				l = B.list[e(E)];
				for (g = l.e; 16 <
					g;) {
					if (99 == g) return -1;
					f(l.We);
					g -= 16;
					d(g);
					l = l.t[e(g)];
					g = l.e
				}
				f(l.We);
				if (16 == g) k &= 32767, a[b + h++] = q[k++] = l.n;
				else {
					if (15 == g) break;
					d(g);
					C = l.n + e(g);
					f(g);
					d(G);
					l = F.list[e(G)];
					for (g = l.e; 16 < g;) {
						if (99 == g) return -1;
						f(l.We);
						g -= 16;
						d(g);
						l = l.t[e(g)];
						g = l.e
					}
					f(l.We);
					d(g);
					D = k - l.n - e(g);
					for (f(g); 0 < C && h < c;) C-- , D &= 32767, k &= 32767, a[b + h++] = q[k++] = q[D++]
				}
				if (h == c) return c
			}
			A = -1;
			return h
		}

		function l(a, b, k) {
			var l, h, p, m, n, q, r, t = Array(316);
			for (l = 0; l < t.length; l++) t[l] = 0;
			d(5);
			q = 257 + e(5);
			f(5);
			d(5);
			r = 1 + e(5);
			f(5);
			d(4);
			l = 4 + e(4);
			f(4);
			if (286 <
				q || 30 < r) return -1;
			for (h = 0; h < l; h++) d(3), t[Q[h]] = e(3), f(3);
			for (; 19 > h; h++) t[Q[h]] = 0;
			E = 7;
			h = new c(t, 19, 19, null, null, E);
			if (0 != h.status) return -1;
			B = h.root;
			E = h.lh;
			m = q + r;
			for (l = p = 0; l < m;)
				if (d(E), n = B.list[e(E)], h = n.We, f(h), h = n.n, 16 > h) t[l++] = p = h;
				else if (16 == h) {
					d(2);
					h = 3 + e(2);
					f(2);
					if (l + h > m) return -1;
					for (; 0 < h--;) t[l++] = p
				} else {
					17 == h ? (d(3), h = 3 + e(3), f(3)) : (d(7), h = 11 + e(7), f(7));
					if (l + h > m) return -1;
					for (; 0 < h--;) t[l++] = 0;
					p = 0
				}
			E = 9;
			h = new c(t, q, 257, L, M, E);
			0 == E && (h.status = 1);
			if (0 != h.status) return -1;
			B = h.root;
			E = h.lh;
			for (l = 0; l < r; l++) t[l] =
				t[l + q];
			G = 6;
			h = new c(t, r, 0, N, O, G);
			F = h.root;
			G = h.lh;
			return 0 == G && 257 < q || 0 != h.status ? -1 : g(a, b, k)
		}

		function h(a, b) {
			var h, p;
			for (h = 0; h < b && (!R || -1 != A);) {
				if (0 < C) {
					if (0 != A)
						for (; 0 < C && h < b;) C-- , D &= 32767, k &= 32767, a[0 + h++] = q[k++] = q[D++];
					else {
						for (; 0 < C && h < b;) C-- , k &= 32767, d(8), a[0 + h++] = q[k++] = e(8), f(8);
						0 == C && (A = -1)
					}
					if (h == b) break
				}
				if (-1 == A) {
					if (R) break;
					d(1);
					0 != e(1) && (R = !0);
					f(1);
					d(2);
					A = e(2);
					f(2);
					B = null;
					C = 0
				}
				switch (A) {
					case 0:
						var m = a,
							u = 0 + h,
							P = b - h;
						p = w & 7;
						f(p);
						d(16);
						p = e(16);
						f(16);
						d(16);
						if (p != (~z & 65535)) p = -1;
						else {
							f(16);
							C = p;
							for (p =
								0; 0 < C && p < P;) C-- , k &= 32767, d(8), m[u + p++] = q[k++] = e(8), f(8);
							0 == C && (A = -1)
						}
						break;
					case 1:
						if (null != B) p = g(a, 0 + h, b - h);
						else a: {
							var H; p = a; m = 0 + h; u = b - h;
							if (null == r) {
								P = Array(288);
								for (H = 0; 144 > H; H++) P[H] = 8;
								for (; 256 > H; H++) P[H] = 9;
								for (; 280 > H; H++) P[H] = 7;
								for (; 288 > H; H++) P[H] = 8;
								t = 7;
								H = new c(P, 288, 257, L, M, t);
								if (0 != H.status) {
									alert("HufBuild error: " + H.status);
									p = -1;
									break a
								}
								r = H.root;
								t = H.lh;
								for (H = 0; 30 > H; H++) P[H] = 5;
								n = 5;
								H = new c(P, 30, 0, N, O, n);
								if (1 < H.status) {
									r = null;
									alert("HufBuild error: " + H.status);
									p = -1;
									break a
								}
								v = H.root;
								n = H.lh
							}
							B =
								r; F = v; E = t; G = n; p = g(p, m, u)
						}
						break;
					case 2:
						p = null != B ? g(a, 0 + h, b - h) : l(a, 0 + h, b - h);
						break;
					default:
						p = -1
				}
				if (-1 == p) return R ? 0 : -1;
				h += p
			}
			return h
		}

		function m(a) {
			var b, c, d;
			null == q && (q = Array(65536));
			w = z = k = 0;
			A = -1;
			R = !1;
			C = D = 0;
			B = null;
			I = a;
			J = 0;
			b = Array(1024);
			for (a = ""; 0 < (c = h(b, b.length));)
				for (d = 0; d < c; d++) a += String.fromCharCode(b[d]);
			I = null;
			return a
		}
		var n, q, k, r = null,
			v, t, z, w, A, R, C, D, B, F, E, G, I, J, K = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535],
			L = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83,
				99, 115, 131, 163, 195, 227, 258, 0, 0
			],
			M = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99],
			N = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
			O = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
			Q = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
		u.Ze.DEFLATE ? u.Ze.DEFLATE.lw = m : u.Ze.DEFLATE = {
			zq: "\b\x00",
			lw: m
		}
	})();
	(function () {
		function a(a) {
			var b = "",
				c, d;
			for (d = 0; d < (a || "").length; d++) c = a.charCodeAt(d), b += "\\x" +
				(16 > c ? "0" : "") + c.toString(16).toUpperCase();
			return b
		}

		function b(a) {
			this.stream = "";
			u.mk.Pr && a instanceof Uint8Array ? this.stream = u.Dg.Or(a) : u.mk.Cx && a instanceof ArrayBuffer ? (a = new Uint8Array(a), this.stream = u.Dg.Or(a)) : this.stream = u.Dg.iC(a);
			this.index = 0
		}

		function c(a, b) {
			this.options = a;
			this.su = b
		}

		function d(a, b) {
			this.files = [];
			this.su = b;
			a && this.load(a)
		}
		b.prototype = {
			Zx: function (a) {
				this.Yx(this.index + a)
			},
			Yx: function (a) {
				if (this.stream.length < a || 0 > a) throw Error("End of stream reached (stream length = " + this.stream.length +
					", asked index = " + a + "). Corrupted zip ?");
			},
			Rl: function (a) {
				this.Yx(a);
				this.index = a
			},
			bC: function (a) {
				this.Rl(this.index + a)
			},
			gF: function (a) {
				return this.stream.charCodeAt(a)
			},
			ta: function (a) {
				var b = 0,
					c;
				this.Zx(a);
				for (c = this.index + a - 1; c >= this.index; c--) b = (b << 8) + this.gF(c);
				this.index += a;
				return b
			},
			He: function (a) {
				this.Zx(a);
				var b = this.stream.slice(this.index, this.index + a);
				this.index += a;
				return b
			},
			bI: function () {
				var a = this.ta(4);
				return new Date((a >> 25 & 127) + 1980, (a >> 21 & 15) - 1, a >> 16 & 31, a >> 11 & 31, a >> 5 & 63, (a & 31) <<
					1)
			}
		};
		c.prototype = {
			IG: function () {
				return 1 === (this.Ox & 1)
			},
			$I: function () {
				return 2048 === (this.Ox & 2048)
			},
			fI: function (b) {
				var c, d;
				b.bC(22);
				this.Lt = b.ta(2);
				d = b.ta(2);
				this.fileName = b.He(this.Lt);
				b.bC(d);
				if (-1 == this.Bp || -1 == this.Rr) throw Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");
				this.sF = b.He(this.Bp);
				a: {
					b = this.cy;
					for (c in u.Ze)
						if (u.Ze.hasOwnProperty(c) && u.Ze[c].zq === b) {
							c = u.Ze[c];
							break a
						} c = null
				}
				if (null === c) throw Error("Corrupted zip : compression " +
					a(this.cy) + " unknown (inner file : " + this.fileName + ")");
				this.mw = c.lw(this.sF);
				if (this.mw.length !== this.Rr) throw Error("Bug : uncompressed data size mismatch");
				if (this.su.AN && u.prototype.Fp(this.mw) !== this.Fp) throw Error("Corrupted zip : CRC32 mismatch");
			},
			aI: function (a) {
				a.He(2);
				a.ta(2);
				this.Ox = a.ta(2);
				this.cy = a.He(2);
				this.af = a.bI();
				this.Fp = a.ta(4);
				this.Bp = a.ta(4);
				this.Rr = a.ta(4);
				this.Lt = a.ta(2);
				this.WF = a.ta(2);
				this.YF = a.ta(2);
				this.Ay = a.ta(2);
				a.ta(2);
				this.VF = a.ta(4);
				this.uu = a.ta(4);
				if (this.IG()) throw Error("Encrypted zip are not supported");
				this.fileName = a.He(this.Lt);
				this.dI(a);
				this.HH(a);
				this.Sy = a.He(this.YF);
				this.dir = this.VF & 16 ? !0 : !1
			},
			HH: function () {
				if (this.Qp[1]) {
					var a = new b(this.Qp[1].value); - 1 === this.Rr && (this.Rr = a.ta(8)); - 1 === this.Bp && (this.Bp = a.ta(8)); - 1 === this.uu && (this.uu = a.ta(8)); - 1 === this.Ay && (this.Ay = a.ta(4))
				}
			},
			dI: function (a) {
				var b = a.index,
					c, d, e;
				for (this.Qp = this.Qp || {}; a.index < b + this.WF;) c = a.ta(2), d = a.ta(2), e = a.He(d), this.Qp[c] = {
					id: c,
					length: d,
					value: e
				}
			},
			vG: function () {
				this.$I() && (this.fileName = u.prototype.pC(this.fileName),
					this.Sy = u.prototype.pC(this.Sy))
			}
		};
		d.prototype = {
			yp: function (b) {
				var c = this.Ma.He(4);
				if (c !== b) throw Error("Corrupted zip or bug : unexpected signature (" + a(c) + ", expected " + a(b) + ")");
			},
			WH: function () {
				this.zy = this.Ma.ta(2);
				this.By = this.Ma.ta(2);
				this.Ux = this.Ma.ta(2);
				this.Tx = this.Ma.ta(2);
				this.Vx = this.Ma.ta(4);
				this.qt = this.Ma.ta(4);
				this.dJ = this.Ma.ta(2);
				this.Ma.He(this.dJ)
			},
			XH: function () {
				this.bJ = this.Ma.ta(8);
				this.Ma.He(2);
				this.Ma.ta(2);
				this.zy = this.Ma.ta(4);
				this.By = this.Ma.ta(4);
				this.Ux = this.Ma.ta(8);
				this.Tx = this.Ma.ta(8);
				this.Vx = this.Ma.ta(8);
				this.qt = this.Ma.ta(8);
				this.cJ = {};
				for (var a = this.bJ - 44, b, c, d; 0 < a;) b = this.Ma.ta(2), c = this.Ma.ta(4), d = this.Ma.He(c), this.cJ[b] = {
					id: b,
					length: c,
					value: d
				}
			},
			YH: function () {
				this.Ma.ta(4);
				this.iI = this.Ma.ta(8);
				this.KF = this.Ma.ta(4);
				if (1 < this.KF) throw Error("Multi-volumes zip are not supported");
			},
			eI: function () {
				var a, b;
				for (a = 0; a < this.files.length; a++) b = this.files[a], this.Ma.Rl(b.uu), this.yp(u.vg.Vw), b.fI(this.Ma), b.vG()
			},
			$H: function () {
				var a;
				for (this.Ma.Rl(this.qt); this.Ma.He(4) ===
					u.vg.Bw;) a = new c({
						tC: this.tC
					}, this.su), a.aI(this.Ma), this.files.push(a)
			},
			cI: function () {
				var a = this.Ma.stream.lastIndexOf(u.vg.ds);
				if (-1 === a) throw Error("Corrupted zip : can't find end of central directory");
				this.Ma.Rl(a);
				this.yp(u.vg.ds);
				this.WH();
				if (65535 === this.zy || 65535 === this.By || 65535 === this.Ux || 65535 === this.Tx || -1 === this.Vx || -1 === this.qt) {
					this.tC = !0;
					a = this.Ma.stream.lastIndexOf(u.vg.xx);
					if (-1 === a) throw Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
					this.Ma.Rl(a);
					this.yp(u.vg.xx);
					this.YH();
					this.Ma.Rl(this.iI);
					this.yp(u.vg.SE);
					this.XH()
				}
			},
			load: function (a) {
				this.Ma = new b(a);
				this.cI();
				this.$H();
				this.eI()
			}
		};
		u.prototype.load = function (a, b) {
			var c, e, f;
			b = b || {};
			b.$g && (a = hb.decode(a));
			c = (new d(a, b)).files;
			for (e = 0; e < c.length; e++) f = c[e], this.file(f.fileName, f.mw, {
				fi: !0,
				XA: !0,
				af: f.af,
				dir: f.dir
			});
			return this
		}
	})();
	var qd = document.getElementsByTagName("script"),
		rd = qd[qd.length - 1].src;
	document.ZO = rd.substring(0, rd.lastIndexOf("/") + 1);
	la.Runtime = Tc;
	la.headerLoaded = Uc;
	la.VI = "updateApplication";
	la[window.VI] = Ta;
	za.prototype = {
		mb: function (a, b, c) {
			if (this.visible) {
				this.Kf && (a.Ba.save(), a.Ba.translate(this.oo, this.qo), 0 != this.angle && a.Ba.rotate(.0174532925 * -this.angle), a.Ba.scale(Math.max(.001, this.Vb), Math.max(.001, this.Wb)), a.Ba.translate(-this.wa, -this.va));
				var d;
				for (d = 0; d < this.children.length; d++) this.children[d].mb(a, b + this.x, c + this.y);
				this.Kf && a.Ba.restore()
			}
		},
		Qd: function (a) {
			this.children.push(a)
		},
		np: function (a, b) {
			b >= this.children.length ? this.children.push(a) : (0 > b && (b = 0), this.children.splice(b,
				0, a))
		},
		jI: function () {
			this.children.length = 0
		},
		removeChild: function (a) {
			var b;
			for (b = 0; b < this.children.length; b++)
				if (this.children[b] == a) return this.children.splice(b, 1), b;
			return -1
		},
		Qc: function (a) {
			var b;
			for (b = 0; b < this.children.length; b++)
				if (this.children[b] == a) return b;
			return -1
		},
		ee: function (a, b) {
			var c, d = null;
			for (c = 0; c < this.children.length; c++)
				if (this.children[c] == a) {
					d = this.children[c];
					break
				} null != d && (this.children.splice(c, 1), b > c && b-- , 0 > b && (b = 0), b >= this.children.length ? this.children.push(a) : this.children.splice(b,
					0, a))
		}
	};
	ra.xo = 0;
	ra.ge = 1;
	ra.OC = 1;
	ra.PC = 2;
	ra.am = 64;
	ra.bm = 16;
	ra.Fo = 6;
	B.JM = 0;
	B.KM = 1;
	B.vk = 0;
	B.wk = 1;
	B.ju = [65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1];
	B.Av = [0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535];
	B.zg = new pa;
	B.Vi = new pa;
	B.Mk = new pa;
	B.gi = new pa;
	B.prototype = {
		wt: function (a, b, c) {
			var d, e;
			this.width = b.width;
			this.height = b.height;
			this.wa = b.wa;
			this.va = b.va;
			var f = Math.floor((this.width + 15 & 4294967280) / 16);
			this.lineWidth = f;
			e = f * this.height +
				1;
			if ("undefined" != typeof ArrayBuffer) this.N = new Uint16Array(new ArrayBuffer(2 * e));
			else
				for (this.N = Array(e), d = 0; d < e; d++) this.N[d] = 0;
			d = document.createElement("canvas");
			d.width = b.width;
			d.height = b.height;
			d = d.getContext("2d");
			0 == b.fb ? d.drawImage(b.eb, 0, 0) : d.drawImage(a.$.tb[b.fb], b.ed, b.fd, b.width, b.height, 0, 0, b.width, b.height);
			a = d.getImageData(0, 0, this.width, this.height);
			if (0 == (c & B.wk))
				for (c = 0; c < this.height; c++) {
					e = c * b.width * 4 + 3;
					var g = c * f,
						l = 32768;
					for (d = 0; d < this.width; d++) 0 != a.data[e] && (this.N[g] |= l), e +=
						4, l >>>= 1, 0 == l && (l = 32768, g++)
				} else
				for (d = 0; d < this.width; d++) {
					for (c = 0; c < this.height && 0 == a.data[4 * (c * b.width + d) + 3]; c++);
					if (c < this.height)
						for (g = Math.min(this.height, c + ra.Fo), l = 32768 >> (d & 15); c < g; c++) 0 != a.data[4 * (c * b.width + d) + 3] && (e = Math.floor(c * f + (d & 4294967280) / 16), this.N[e] |= l)
				}
		},
		nI: function (a, b, c) {
			var d, e, f;
			90 == c ? (c = 0, f = 1) : 180 == c ? (c = -1, f = 0) : 270 == c ? (c = 0, f = -1) : (f = c * Math.PI / 180, c = Math.cos(f), f = Math.sin(f));
			var g, l;
			null == b ? (e = l = 0, B.zg.x = B.zg.y = 0) : (g = -b.x * c, d = -b.x * f, e = -b.y * c, l = -b.y * f, B.zg.x = Math.floor(g +
				l), B.zg.y = Math.floor(e - d));
			d = null == b ? a.right : a.right - b.x;
			g = d * c;
			d *= f;
			B.Vi.x = Math.floor(g + l);
			B.Vi.y = Math.floor(e - d);
			e = null == b ? a.bottom : a.bottom - b.y;
			B.gi.x = Math.floor(g + e * f);
			B.gi.y = Math.floor(e * c - d);
			B.Mk.x = B.zg.x + B.gi.x - B.Vi.x;
			B.Mk.y = B.zg.y + B.gi.y - B.Vi.y;
			c = Math.min(B.zg.x, Math.min(B.Vi.x, Math.min(B.gi.x, B.Mk.x)));
			f = Math.min(B.zg.y, Math.min(B.Vi.y, Math.min(B.gi.y, B.Mk.y)));
			g = Math.max(B.zg.x, Math.max(B.Vi.x, Math.max(B.gi.x, B.Mk.x)));
			d = Math.max(B.zg.y, Math.max(B.Vi.y, Math.max(B.gi.y, B.Mk.y)));
			null != b &&
				(b.x = -c, b.y = -f);
			a.right = g - c;
			a.bottom = d - f
		},
		zF: function (a, b, c, d) {
			var e, f, g = a.width;
			e = a.height;
			var l = new Z;
			l.right = Math.floor(a.width * c);
			l.bottom = Math.floor(a.height * d);
			var h = new pa;
			h.x = Math.floor(a.wa * c);
			h.y = Math.floor(a.va * d);
			this.nI(l, h, b);
			var m = l.right,
				l = l.bottom;
			if (0 >= m || 0 >= l) return !1;
			var n = a.lineWidth,
				q = (m + 15 & 2147483632) / 16;
			this.N = "undefined" != typeof ArrayBuffer ? new Uint16Array(new ArrayBuffer(2 * (q * l + 1))) : Array(q * l + 1);
			var k;
			for (k = q * l; 0 <= k; k--) this.N[k] = 0;
			this.lineWidth = q;
			this.width = m;
			this.height =
				l;
			this.wa = h.x;
			this.va = h.y;
			b *= .017453292;
			f = Math.cos(b);
			var r = Math.sin(b);
			b = 0;
			h = Math.floor(65536 * (g / 2 - (m / 2 * f - l / 2 * r) / c));
			k = Math.floor(65536 * (e / 2 - (m / 2 * r + l / 2 * f) / d));
			var t = Math.floor(65536 * f / c),
				v = Math.floor(65536 * r / d),
				z = m / 16,
				m = m % 16;
			d = Math.floor(65536 * f / d);
			c = Math.floor(65536 * r / c);
			var g = 65536 * g,
				r = 65536 * e,
				w, A;
			for (f = 0; f < l; f++) {
				var u = h,
					C = k,
					D = b,
					B;
				for (e = 0; e < z; e++) {
					var E = 0;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.N[Math.floor(A * n + B / 16)], 0 != (A & w) && (E |= 32768));
					u += t;
					C +=
						v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.N[Math.floor(A * n + B / 16)], 0 != (A & w) && (E |= 16384));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.N[Math.floor(A * n + B / 16)], 0 != (A & w) && (E |= 8192));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.N[Math.floor(A * n + B / 16)], 0 != (A & w) && (E |= 4096));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>>
						B % 16, A = a.N[Math.floor(A * n + B / 16)], 0 != (A & w) && (E |= 2048));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.N[Math.floor(A * n + B / 16)], 0 != (A & w) && (E |= 1024));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.N[Math.floor(A * n + B / 16)], 0 != (A & w) && (E |= 512));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.N[Math.floor(A * n + B / 16)], 0 != (A & w) && (E |= 256));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C &&
						C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.N[Math.floor(A * n + B / 16)], 0 != (A & w) && (E |= 128));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.N[Math.floor(A * n + B / 16)], 0 != (A & w) && (E |= 64));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.N[Math.floor(A * n + B / 16)], 0 != (A & w) && (E |= 32));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.N[Math.floor(A *
						n + B / 16)], 0 != (A & w) && (E |= 16));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.N[Math.floor(A * n + B / 16)], 0 != (A & w) && (E |= 8));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.N[Math.floor(A * n + B / 16)], 0 != (A & w) && (E |= 4));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.N[Math.floor(A * n + B / 16)], 0 != (A & w) && (E |= 2));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C /
						65536), w = 32768 >>> B % 16, A = a.N[Math.floor(A * n + B / 16)], 0 != (A & w) && (E |= 1));
					u += t;
					C += v;
					this.N[D++] = E
				}
				if (0 != m) {
					E = 32768;
					for (e = B = 0; e < m; e++ , E = E >> 1 & 32767) {
						if (0 <= u && u < g && 0 <= C && C < r) {
							A = Math.floor(u / 65536);
							var F = Math.floor(C / 65536);
							w = 32768 >>> A % 16;
							A = a.N[Math.floor(F * n + A / 16)];
							0 != (A & w) && (B |= E)
						}
						u += t;
						C += v
					}
					this.N[D] = B
				}
				b += q;
				h -= c;
				k += d
			}
			return !0
		},
		Ui: function (a, b, c, d, e, f, g) {
			var l, h, m;
			a <= e ? (l = this, m = Math.floor(c), c = Math.floor(g), h = Math.floor(a), g = Math.floor(b), a = Math.floor(e), b = Math.floor(f)) : (l = d, d = this, m = Math.floor(g), c = Math.floor(c),
				h = Math.floor(e), g = Math.floor(f), a = Math.floor(a), b = Math.floor(b));
			f = l.height;
			var n = 0;
			0 != m && (f = m, g += l.height - m, n = l.height - m);
			e = d.height;
			var q = 0;
			0 != c && (e = c, b += d.height - c, q = d.height - c);
			if (h >= a + d.width || h + l.width <= a || g >= b + e || g + f < b) return !1;
			c = a - h;
			m = Math.floor(c / 16);
			c %= 16;
			h = Math.min(h + l.width - a, d.width);
			h = Math.floor((h + 15) / 16);
			g <= b ? (a = b - g + n, n = q, g = Math.min(g + f, b + e) - b) : (a = n, n = g - b + q, g = Math.min(g + f, b + e) - g);
			b = a * l.lineWidth;
			e = n * d.lineWidth;
			if (0 != c) switch (h) {
				case 1:
					for (a = 0; a < g; a++) {
						n = l.N[b + m] << c;
						if (0 != (n & d.N[e]) ||
							m + 1 < l.lineWidth && (n = l.N[b + m + 1] << c, n >>>= 16, 0 != (n & d.N[e]))) return !0;
						b += l.lineWidth;
						e += d.lineWidth
					}
					break;
				case 2:
					for (a = 0; a < g; a++) {
						n = l.N[b + m] << c;
						if (0 != (n & d.N[e])) return !0;
						n = l.N[b + m + 1] << c;
						q = n >>> 16;
						if (0 != (q & d.N[e]) || 0 != (n & d.N[e + 1]) || m + 2 < l.lineWidth && (n = l.N[b + m + 2] << c, n >>>= 16, 0 != (n & d.N[e + 1]))) return !0;
						b += l.lineWidth;
						e += d.lineWidth
					}
					break;
				default:
					for (a = 0; a < g; a++) {
						n = l.N[b + m] << c;
						if (0 != (n & d.N[e])) return !0;
						for (f = 0; f < h - 1; f++)
							if (n = l.N[b + m + f + 1] << c, q = n >>> 16, 0 != (q & d.N[e + f]) || 0 != (n & d.N[e + f + 1])) return !0;
						if (m + f + 1 < l.lineWidth &&
							(n = l.N[b + m + f + 1] << c, n >>>= 16, 0 != (n & d.N[e + f]))) return !0;
						b += l.lineWidth;
						e += d.lineWidth
					}
			} else
				for (a = 0; a < g; a++) {
					for (f = 0; f < h; f++)
						if (n = l.N[b + m + f], 0 != (d.N[e + f] & n)) return !0;
					b += l.lineWidth;
					e += d.lineWidth
				}
			return !1
		},
		hw: function (a, b, c, d, e, f, g, h) {
			a = Math.floor(a);
			b = Math.floor(b);
			d = Math.floor(d);
			e = Math.floor(e);
			var l = 0,
				m = this.height;
			0 < c && (l = this.height - c, b += l, m = c);
			c = g;
			0 < h && (e += g - h, c = h);
			if (a >= d + f || a + this.width <= d || b >= e + c || b + m < e) return !1;
			a <= d ? (g = d - a, a = Math.min(this.width - g, f)) : (g = 0, a = Math.min(d + f - a, this.width));
			b <=
				e ? (l = e - b + l, b = Math.min(b + m, e + c) - e) : b = Math.min(b + m, e + c) - b;
			e = Math.floor(g / 8);
			m = Math.floor((g + a + 15) / 16) - Math.floor(g / 16);
			for (f = 0; f < b; f++) switch (d = (f + l) * this.lineWidth, m) {
				case 1:
					c = B.ju[g & 15] & B.Av[(g + a - 1 & 15) + 1];
					if (0 != (this.N[d + e] & c)) return !0;
					break;
				case 2:
					c = B.ju[g & 15];
					if (0 != (this.N[d + e] & c)) return !0;
					c = B.Av[(g + a - 1 & 15) + 1];
					if (0 != (this.N[d + e + 1] & c)) return !0;
					break;
				default:
					c = B.ju[g & 15];
					if (0 != (this.N[d + e] & c)) return !0;
					for (h = 1; h < m - 1; h++)
						if (0 != this.N[d + e + h]) return !0;
					c = B.Av[(g + a - 1 & 15) + 1];
					if (0 != (this.N[d + e + h] & c)) return !0
			}
			return !1
		},
		RI: function (a, b, c, d, e) {
			a = Math.floor(a);
			b = Math.floor(b);
			var f = a,
				g = b;
			if (0 == c) {
				if (1 != d || 1 != e) f = Math.floor(f / d), g = Math.floor(g / e)
			} else if (f = 3.141592653589 * c / 180, c = Math.cos(f), g = Math.sin(f), f = a * c - b * g, g = b * c + a * g, 1 != d || 1 != e) f /= d, g /= e;
			f += this.wa;
			g += this.va;
			a = Math.floor(f);
			b = Math.floor(g);
			return 0 > a || a >= this.width || 0 > b || b >= this.height ? !1 : 0 != (this.N[b * this.lineWidth + Math.floor(a / 16)] & 32768 >>> (a & 15)) ? !0 : !1
		}
	};
	w.Xh = 1;
	w.LE = 2;
	w.Us = 4;
	w.ME = 16;
	w.Vg = 32;
	w.jj = 64;
	w.Fk = 128;
	w.NM = 0;
	w.MM = 1;
	w.BJ = 0;
	w.Oe = 1;
	w.EJ = 2;
	w.GC = 3;
	w.xJ =
		4;
	w.HJ = 5;
	w.AJ = 6;
	w.CJ = 7;
	w.yJ = 8;
	w.DC = 9;
	w.GJ = 10;
	w.IJ = 11;
	w.zJ = 12;
	w.DJ = 13;
	w.FJ = 13;
	w.EC = 4095;
	w.FC = 4096;
	w.vw = 8192;
	w.prototype = {
		AG: function (a, b, c) {
			this.a = a;
			this.Pl = c.ay;
			this.yr = c.by;
			this.U = 0;
			this.U |= w.jj;
			0 == (this.a.ze & I.zd) && (this.U &= ~w.jj);
			0 != (this.a.hc.UA & z.vE) && (this.U |= w.Fk);
			0 != (c.um & h.sk) ? (this.U |= w.Xh, this.a.Da == q.Tg && (this.a.W |= E.Lg, this.U &= ~w.jj)) : this.U |= w.Vg;
			this.xc = this.a.hc.TA;
			this.oc = this.a.hc.SA;
			this.a.b.Ic == O.nE && (this.U |= w.LE)
		},
		fq: function (a) {
			this.AF(a);
			a && this.a.T.nl && (this.a.W |= E.Qh)
		},
		handle: function () {
			var a =
				this.a.c,
				b, c, d, e;
			0 != (this.a.W & E.Qh) ? (this.tg || this.Rk(!1), this.KH()) : 0 != (this.a.W & E.Rh) ? this.LH() : 0 == (this.U & w.Us) ? (0 != this.ur && (this.vr -= a.Wn, 0 > this.vr && (this.vr = this.ur, 0 == (this.U & w.Vg) ? (this.U |= w.Vg, this.Su()) : (this.U &= ~w.Vg, this.tn()))), null != this.a.w && this.a.w.move(), 0 == this.a.b.Eh && (0 != (this.a.ja & z.ij) ? 0 == (this.a.ja & z.nx) && 0 != (a.h.ya & m.wC) && (b = this.a.u - this.a.fa, c = this.a.s - this.a.ga, d = b + this.a.J, e = c + this.a.I, (d < a.Gl || b > a.El || e < a.Kl || c > a.Il) && a.bf(this.a.Cb)) : (b = this.a.u - this.a.fa, c = this.a.s -
				this.a.ga, d = b + this.a.J, e = c + this.a.I, d >= a.Fl && b <= a.Dl && e >= a.Jl && c <= a.Hl || (d >= a.Gl && b <= a.El && e >= a.Kl && c <= a.Il ? (this.U |= w.Us, this.yr = this.a.ii()) : 0 == (this.a.ja & z.nx) && a.bf(this.a.Cb))))) : (b = this.a.u - this.a.fa, c = this.a.s - this.a.ga, d = b + this.a.J, e = c + this.a.I, d >= a.Fl && b <= a.Dl && e >= a.Jl && c <= a.Hl && (this.U &= ~w.Us, this.fq(!1), this.a.ee(this.yr)))
		},
		AF: function () {
			0 != (this.a.ja & z.Vh) ? this.a.bt(this.a.u - this.a.c.ca, this.a.s - this.a.c.ea, this.a.b.Ia, this.Pl, 0 == (this.U & w.Xh)) : (this.a.W |= E.KD, this.a.Kk(this.a.u - this.a.c.ca,
				this.a.s - this.a.c.ea, this.Pl, 0 != (this.a.ja & z.Ss), 0 == (this.U & w.Xh), -1));
			this.a.LB(this.xc, this.oc)
		},
		Rk: function (a) {
			this.a.W &= ~(E.Qh | E.Rh);
			if (0 == a) {
				if (!this.a.T.nl) return !1;
				this.a.W |= E.Qh
			} else {
				if (!this.a.T.vn) return !1;
				this.a.W |= E.Rh
			}
			this.tg = this.a.c.h.Ut().KI(this.a, a);
			return this.tg ? !0 : (this.a.W &= ~(E.Qh | E.Rh), !1)
		},
		KH: function () {
			if (0 != (this.a.W & E.Qh)) {
				if (this.tg.gq()) return this.a.W &= ~E.Qh, this.tg = this.a.qk = null, !1;
				this.tg.yb(v.Ws);
				return !0
			}
			return !1
		},
		LH: function () {
			if (0 != (this.a.W & E.Rh)) {
				if (this.tg.gq()) return this.qk =
					this.tg = null, this.a.c.bf(this.a.Cb), !1;
				this.tg.yb(v.kp);
				return !0
			}
			return !1
		},
		BG: function () {
			return this.Rk(!0) ? (this.a.W |= E.Lg, !0) : !1
		},
		sb: function () {
			this.yr = this.a.ii()
		},
		tn: function () {
			0 == (this.U & w.Xh) && (this.U |= w.Xh, this.a.b.K = !0, this.a.Ej())
		},
		Su: function () {
			0 != (this.U & w.Xh) && (this.a.c.A.Za[this.a.qd].ya & (S.dm | S.em)) == S.em && (this.U &= ~w.Xh, this.a.W &= ~E.Lg, this.a.b.K = !0, this.a.kk())
		},
		Br: function (a) {
			this.U = a ? this.U | w.jj : this.U & ~w.jj
		}
	};
	Vc.prototype = {
		load: function (a) {
			this.Hq = a.m();
			this.xg = Array(this.Hq);
			var b;
			for (b = 0; b < this.Hq; b++) this.xg[b] = a.Sb()
		}
	};
	Wc.prototype = {
		load: function (a, b) {
			this.Iq = a.m();
			this.values = Array(this.Iq);
			var c;
			for (c = 0; c < this.Iq; c++) this.values[c] = a.o();
			b && (this.Ua = a.o())
		}
	};
	Ba.RE = 26;
	Ba.sx = 10;
	Ba.prototype = {
		S: function (a, b) {
			this.zr = 0;
			this.hd = Array(Ba.RE);
			this.de = Array(Ba.sx);
			var c;
			for (c = 0; c < this.hd.length; c++) this.hd[c] = 0;
			for (c = 0; c < this.de.length; c++) this.de[c] = "";
			if (null != b.ol)
				for (this.zr = b.ol.Ua, c = 0; c < b.ol.Iq; c++) this.hd[c] = b.ol.values[c];
			if (null != b.yn)
				for (c = 0; c < b.yn.Hq; c++) this.de[c] =
					b.yn.xg[c]
		},
		sb: function () {
			var a;
			for (a = 0; a < this.hd.length; a++) this.hd[a] = 0;
			for (a = 0; a < this.de.length; a++) this.de[a] = null
		},
		oz: function (a) {
			return a < this.hd.length ? this.hd[a] : 0
		},
		mz: function (a) {
			return a < this.de.length ? this.de[a] : ""
		},
		Ir: function (a, b) {
			a > this.qb.hd.length && this.wz(a + 10);
			this.hd[a] = b
		},
		wz: function (a) {
			if (a >= this.hd.length) {
				var b;
				for (b = 0; b < a; b++) this.hd[b] = 0
			}
		},
		sG: function (a) {
			if (a >= this.de.length) {
				var b;
				for (b = 0; b < a; b++) this.de[b] = ""
			}
		}
	};
	Ma.Ff = 32;
	Ma.prototype = {
		Nz: function (a) {
			a -= Ma.Ff;
			var b = null;
			a < this.Pp.length && null != this.Pp[a] && (b = this.Pp[a].Nz());
			return b
		},
		jz: function (a) {
			a -= Ma.Ff;
			return a < this.Pp.length ? this.xH[a] : 0
		}
	};
	Ha.CM = 1;
	Ha.rx = 2;
	Ha.prototype = {
		S: function (a) {
			this.V = a;
			this.Tb = a.c
		},
		jz: function () {
			return 0
		},
		xz: function () {
			return Ha.rx
		},
		yy: function () { },
		jy: function () { },
		IH: function () { },
		wF: function () { },
		Cp: function () {
			return !1
		},
		action: function () { },
		Gt: function () {
			return null
		},
		lz: function () {
			return null
		},
		OB: function () { },
		ci: function () { },
		Yk: function () { }
	};
	Xc.prototype = {
		evaluate: function (a) {
			var b = a.v.Rm(this.$b);
			if (null == b) a.Jc[a.kb] = 0;
			else {
				var c = (this.code >> 16) - N.Ph;
				a.xt = this;
				a.Jc[a.kb] = b.Gt(c)
			}
		}
	};
	Yc.prototype = {
		fc: function (a) {
			var b = a.v.Dj(this);
			if (null != b) {
				var c = (this.ra >>> 16) - N.Ph;
				a.xt = this;
				b.action(c, this)
			}
		}
	};
	Zc.prototype = {
		ie: function (a, b) {
			if (null == b) return this.Oc(a);
			b.W |= E.Rw;
			var c = -(this.ra >> 16) - N.Ph - 1;
			a.xt = this;
			return b.Cp(c, this) ? (a.v.Em(b), !0) : !1
		},
		Oc: function (a) {
			var b = a.v.Vk(this.Gb),
				c = a.v.zj,
				d = -(this.ra >> 16) - N.Ph - 1;
			for (a.xt = this; null != b;) b.W &= ~E.Rw, b.Cp(d, this) ? 0 != (this.cf & Q.uk) && (c-- , a.v.fh()) :
				0 == (this.cf & Q.uk) && (c-- , a.v.fh()), b = a.v.Wk();
			return 0 != c ? !0 : !1
		}
	};
	(function () {
		this.element = null;
		this.fy = !1
	}).prototype = n.extend(new Ha, {
		Yk: function () {
			this.setPosition(this.V.u, this.V.s)
		},
		ci: function () {
			this.setPosition(this.V.u, this.V.s);
			this.eo(this.V.J, this.V.I)
		},
		SO: function (a, b) {
			this.element = a;
			a.style.position = "absolute";
			this.eo(this.V.J, this.V.I);
			this.setPosition(this.V.u, this.V.s);
			this.Nt && this.jk(this.Nt);
			this.it = this.V.ma = b;
			this.Tb.h.Yf ? (a.style.visibility = "hidden", this.it = !1) : a.style.visibility =
				b ? "visible" : "hidden";
			this.Tb.h.ut.appendChild(a)
		},
		pz: function () {
			return this.Tb.h.canvas ? this.Tb.h.canvas.offsetLeft : 0
		},
		qz: function () {
			return this.Tb.h.canvas ? this.Tb.h.canvas.offsetTop : 0
		},
		TB: function (a) {
			this.qy = a;
			this.V.TB(a);
			this.element && (this.element.style.left = this.pz() + this.Tb.h.Xi + (this.V.u - this.V.c.ca) * this.Tb.h.Vb + "px")
		},
		WB: function (a) {
			this.ry = a;
			this.V.WB(a);
			this.element && (this.element.style.top = this.qz() + this.Tb.h.Yi + (this.V.s - this.V.c.ea) * this.Tb.h.Wb + "px")
		},
		setPosition: function (a, b) {
			this.qy =
				a;
			this.ry = b;
			this.V.setPosition(a, b);
			this.element && (this.element.style.left = this.pz() + this.Tb.h.Xi + (this.V.u - this.V.c.ca) * this.Tb.h.Vb + "px", this.element.style.top = this.qz() + this.Tb.h.Yi + (this.V.s - this.V.c.ea) * this.Tb.h.Wb + "px")
		},
		bw: function (a) {
			this.py = a;
			this.V.bw(a);
			this.element && (this.element.style.width = this.V.J * this.Tb.h.Vb + "px")
		},
		aw: function (a) {
			this.oy = a;
			this.V.aw(a);
			this.element && !this.fy && (this.element.style.height = this.V.I * this.Tb.h.Wb + "px")
		},
		eo: function (a, b) {
			this.py = a;
			this.oy = b;
			this.V.eo(a,
				b);
			this.element && (this.element.style.width = this.V.J * this.Tb.h.Vb + "px", this.fy || (this.element.style.height = this.V.I * this.Tb.h.Wb + "px"))
		},
		jk: function (a) {
			this.Nt = a;
			this.element && (this.element.style.font = a.Qf())
		},
		yy: function () {
			this.element && this.Tb.h.ut.removeChild(this.element)
		},
		lz: function () {
			return this.Nt
		},
		OB: function (a) {
			this.jk(a)
		},
		xz: function () {
			this.Tb.h.Yf || this.V.ma == this.it || (this.it = this.V.ma, this.element.style.visibility = this.V.ma ? "visible" : "hidden");
			this.V.u == this.qy && this.V.s == this.ry || this.setPosition(this.V.u,
				this.V.s);
			this.V.J == this.py && this.V.I == this.oy || this.eo(this.V.J, this.V.I);
			return 0
		}
	});
	O.nE = 0;
	O.lE = 1;
	O.mE = 2;
	O.KL = 3;
	O.JL = 4;
	O.LL = 5;
	O.Ps = 9;
	O.kE = 11;
	O.IL = 12;
	O.dx = 13;
	O.hj = 14;
	O.prototype = {
		setData: function (a, b, c, d, e) {
			this.Nu = a;
			this.il = b;
			this.GA = c;
			this.FA = d;
			this.Dq = e
		}
	};
	$c.prototype = {
		load: function (a) {
			var b = a.ba;
			this.pn = a.o();
			this.sd = Array(this.pn);
			var c;
			for (c = 0; c < this.pn; c++) {
				a.seek(b + 4 + 16 * c);
				var d = a.o(),
					e = a.o(),
					f = a.o(),
					g = a.o();
				a.seek(b + f);
				var f = a.m(),
					h = a.m(),
					m = a.jb(),
					n = a.jb();
				a.la(2);
				var q = a.o();
				switch (h) {
					case 0:
						this.sd[c] =
							new hd;
						break;
					case 1:
						this.sd[c] = new cd;
						break;
					case 2:
						this.sd[c] = new gd;
						break;
					case 3:
						this.sd[c] = new bd;
						break;
					case 4:
						this.sd[c] = new ad;
						break;
					case 5:
						this.sd[c] = new dd;
						break;
					case 9:
						this.sd[c] = new fd;
						break;
					case 14:
						this.sd[c] = new id
				}
				this.sd[c].setData(h, f, m, q, n);
				this.sd[c].load(a, g - 12);
				14 == h && (a.seek(b + d), d = a.Sb(), d = d.substring(0, d.length - 4), d = d.toLowerCase(), this.sd[c].BI(d, e))
			}
		}
	};
	ad.prototype = n.extend(new O, {
		load: function (a) {
			this.fn = a.m();
			this.Yz = a.m();
			this.Xz = a.m();
			this.$z = a.m();
			this.Zz = a.m()
		}
	});
	bd.prototype =
		n.extend(new O, {
			load: function (a) {
				this.gA = a.m();
				this.dA = a.m();
				this.eA = a.m();
				a.m();
				this.fA = a.o()
			}
		});
	cd.prototype = n.extend(new O, {
		load: function (a) {
			this.hA = a.P();
			this.jA = a.P();
			this.iA = a.P();
			this.kA = a.P();
			a.m()
		}
	});
	dd.prototype = n.extend(new O, {
		load: function (a) {
			this.hl = a.m();
			this.AA = a.m();
			this.zA = a.m();
			this.Mu = a.jb();
			this.CA = a.jb();
			this.EA = a.jb();
			a.la(1);
			this.Oa = Array(this.hl);
			var b, c, d;
			for (b = 0; b < this.hl; b++) d = a.ba, this.Oa[b] = new ed, a.za(), c = a.za(), this.Oa[b].load(a), a.seek(d + c)
		}
	});
	ed.prototype = {
		load: function (a) {
			this.cA =
				a.jb();
			this.Bu = a.jb();
			this.Cu = a.P();
			this.Du = a.P();
			this.Au = a.P();
			this.Fu = a.P();
			this.bA = a.m();
			this.Eu = a.m();
			a = a.Sb();
			0 < a.length && (this.Vd = a)
		}
	};
	fd.prototype = n.extend(new O, {
		load: function (a) {
			this.tA = a.m();
			this.oA = a.m();
			this.pA = a.m();
			this.sA = a.m();
			this.qA = a.m();
			this.rA = a.m()
		}
	});
	gd.prototype = n.extend(new O, {
		load: function (a) {
			this.xA = a.m();
			this.Ku = a.m();
			this.Lu = a.m();
			this.wA = a.m();
			a.m();
			this.uA = a.m();
			this.vA = a.m()
		}
	});
	hd.prototype = n.extend(new O, {
		load: function () { }
	});
	id.prototype = n.extend(new O, {
		load: function (a) {
			a.la(14);
			this.data = a.ba
		},
		BI: function (a) {
			this.Ec = a
		}
	});
	F.bj = [256, 251, 236, 212, 181, 142, 97, 49, 0, -49, -97, -142, -181, -212, -236, -251, -256, -251, -236, -212, -181, -142, -97, -49, 0, 49, 97, 142, 181, 212, 236, 251];
	F.kj = [0, -49, -97, -142, -181, -212, -236, -251, -256, -251, -236, -212, -181, -142, -97, -49, 0, 49, 97, 142, 181, 212, 236, 251, 256, 251, 236, 212, 181, 142, 97, 49];
	F.VE = [2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 144, 160, 176, 192, 208, 224, 240, 256, 272, 288, 320, 336, 352, 368, 384, 400, 416, 432, 448, 480, 512, 544, 560, 592, 624, 640, 672, 688, 720, 736,
		768, 784, 816, 848, 864, 896, 928, 944, 976, 992, 1024, 1120, 1216, 1312, 1440, 1536, 1632, 1728, 1824, 1952, 2048, 2240, 2432, 2688, 2880, 3072, 3264, 3456, 3712, 3904, 4096, 6544, 4914, 5216, 5732, 6144, 6553, 6962, 7366, 7780, 8192, 9836, 11672, 13316, 14960, 16604, 18248, 19892, 21504, 25600, 25600
	];
	F.VD = [-1, 8, 24, -1, 16, 12, 20, 16, 0, 4, 28, 0, -1, 8, 24, -1];
	F.tk = [2599, 0, 844, 31, 479, 30, 312, 29, 210, 28, 137, 27, 78, 26, 25, 25, 0, 24];
	F.Ce = [0, -2, 0, 2, 0, -4, 0, 4, 0, -8, 0, 8, -4, 0, -8, 0, 0, 0, -2, -2, 2, 2, -4, -4, 4, 4, -8, -8, 8, 8, -4, 4, -8, 8, 0, 0, -2, 0, 2, 0, -4, 0, 4, 0, -8, 0, 8, 0, 0, 4, 0, 8, 0, 0,
		-2, 2, 2, -2, -4, 4, 4, -4, -8, 8, 8, -8, 4, 4, 8, 8, 0, 0, 0, 2, 0, -2, 0, 4, 0, -4, 0, 8, 0, -8, 4, 0, 8, 0, 0, 0, 2, 2, -2, -2, 4, 4, -4, -4, 8, 8, -8, -8, 4, -4, 8, -8, 0, 0, 2, 0, -2, 0, 4, 0, -4, 0, 8, 0, -8, 0, 0, -4, 0, -8, 0, 0, 2, -2, -2, 2, 4, -4, -4, 4, 8, -8, -8, 8, -4, -4, -8, -8, 0, 0
	];
	F.km = 1;
	F.dG = function (a, b) {
		return a * F.bj[b] / 256
	};
	F.eG = function (a, b) {
		return a * F.kj[b] / 256
	};
	F.prototype = {
		si: function (a, b) {
			this.a.c.Tc++;
			this.Kd = this.a.c.Tc;
			this.a.w.M = !1;
			if (0 == a) return this.a.c.qf(this.a), !1;
			var c, d, e;
			for (e = 0 != (this.a.c.A.Db & D.Bc) ? Math.floor(a * this.a.c.mc * 32) : a << 5; 2048 < e;) {
				c =
					65536 * this.a.u + (this.a.Tf & 65535);
				d = 65536 * this.a.s + (this.a.Uf & 65535);
				c += 2048 * F.bj[b];
				d += 2048 * F.kj[b];
				this.a.Tf = c & 65535;
				this.a.u = Math.floor(c / 65536);
				this.a.Uf = d & 65535;
				this.a.s = Math.floor(d / 65536);
				if (this.a.c.qf(this.a)) return !0;
				if (this.a.w.M) break;
				e -= 2048
			}
			if (!this.a.w.M && (c = 65536 * this.a.u + (this.a.Tf & 65535), d = 65536 * this.a.s + (this.a.Uf & 65535), c += F.bj[b] * e, d += F.kj[b] * e, this.a.Tf = c & 65535, this.a.u = Math.floor(c / 65536), this.a.Uf = d & 65535, this.a.s = Math.floor(d / 65536), this.a.c.qf(this.a))) return !0;
			this.a.b.K = !0;
			this.a.w.M || (this.a.c.ik = 0);
			return this.a.w.M
		},
		kn: function (a) {
			0 == a.GA && this.stop()
		},
		Aj: function (a) {
			return 100 >= a ? F.VE[a] : a << 8
		},
		ln: function (a) {
			if (a) this.aA(!1);
			else switch (this.a.c.v.tr & 4294901760) {
				case -786432:
					a = this.a.u - this.a.fa;
					var b = this.a.s - this.a.ga,
						c = this.a.c.Wj(a, b, a + this.a.J, b + this.a.I);
					a = this.a.u;
					b = this.a.s;
					0 != (c & h.Hg) && (a = this.a.fa);
					0 != (c & h.Ig) && (a = this.a.c.$d - this.a.J + this.a.fa);
					0 != (c & h.Jg) && (b = this.a.ga);
					0 != (c & h.Gg) && (b = this.a.c.ae - this.a.I + this.a.ga);
					this.a.u = a;
					this.a.s = b;
					break;
				case -851968:
				case -917504:
					a =
						18 * (this.a.c.Bb(this.a) >> 2);
					do {
						if (this.Cg(this.a.u + F.Ce[a], this.a.s + F.Ce[a + 1], !1)) {
							this.a.u += F.Ce[a];
							this.a.s += F.Ce[a + 1];
							return
						}
						a += 2
					} while (0 != F.Ce[a] || 0 != F.Ce[a + 1]);
					this.a.u = this.a.b.Gi;
					this.a.s = this.a.b.Hi;
					this.a.b.Ia = this.a.b.er;
					this.a.b.ab = this.a.b.dr
			}
		},
		aA: function (a) {
			switch (this.a.c.v.tr & 4294901760) {
				case -786432:
					a = this.a.u - this.a.fa;
					var b = this.a.s - this.a.ga,
						c = this.a.c.Wj(a, b, a + this.a.J, b + this.a.I);
					a = this.a.u;
					b = this.a.s;
					0 != (c & h.Hg) && (a = this.a.fa);
					0 != (c & h.Ig) && (a = this.a.c.$d - this.a.J + this.a.fa);
					0 != (c & h.Jg) && (b = this.a.ga);
					0 != (c & h.Gg) && (b = this.a.c.ae - this.a.I + this.a.ga);
					this.a.u = a;
					this.a.s = b;
					break;
				case -851968:
				case -917504:
					if (b = new pa, this.tH(this.a.u, this.a.s, this.a.b.Gi, this.a.b.Hi, a, b)) this.a.u = b.x, this.a.s = b.y;
					else {
						b = 18 * (this.a.c.Bb(this.a) >> 2);
						do {
							if (this.Cg(this.a.u + F.Ce[b], this.a.s + F.Ce[b + 1], a)) {
								this.a.u += F.Ce[b];
								this.a.s += F.Ce[b + 1];
								return
							}
							b += 2
						} while (0 != F.Ce[b] || 0 != F.Ce[b + 1]);
						0 == a && (this.a.u = this.a.b.Gi, this.a.s = this.a.b.Hi, this.a.b.Ia = this.a.b.er, this.a.b.ab = this.a.b.dr)
					}
			}
		},
		Wl: function (a,
			b, c, d, e) {
			var f;
			f = -1;
			e && (f = this.a.Ib);
			e = this.a.hc;
			if (0 != (e.vd & 15)) {
				var g = a - this.a.fa,
					h = b - this.a.ga;
				if (0 != (this.a.c.Wj(g, h, g + this.a.J, h + this.a.I) & e.vd)) return !1
			}
			if (0 != (e.vd & 16) && this.a.c.vm(this.a, this.a.b.Ia, this.a.b.ab, this.a.b.vb, this.a.b.wb, a, b, c, d)) return !1;
			if (-1 == e.pl) return !0;
			a = this.a.c.ll(this.a, this.a.b.Ia, this.a.b.ab, this.a.b.vb, this.a.b.wb, a, b, e.zi);
			if (null == a) return !0;
			b = this.a.c.v.Hj;
			for (c = 0; c < a.size(); c++)
				if (d = a.get(c).Ib, d != f)
					for (g = e.pl; 0 <= b[g]; g++)
						if (b[g] == d) return !1;
			return !0
		},
		Cg: function (a,
			b, c) {
			var d;
			d = -1;
			c && (d = this.a.Ib);
			c = this.a.hc;
			if (0 != (c.vd & 15)) {
				var e = a - this.a.fa,
					f = b - this.a.ga;
				if (0 != (this.a.c.Wj(e, f, e + this.a.J, f + this.a.I) & c.vd)) return !1
			}
			if (0 != (c.vd & 16) && this.a.c.vm(this.a, this.a.b.Ia, this.a.b.ab, this.a.b.vb, this.a.b.wb, a, b, 0, D.ge)) return !1;
			if (-1 == c.pl) return !0;
			a = this.a.c.ll(this.a, this.a.b.Ia, this.a.b.ab, this.a.b.vb, this.a.b.wb, a, b, c.zi);
			if (null == a) return !0;
			b = this.a.c.v.Hj;
			for (e = 0; e < a.size(); e++)
				if (f = a.get(e).Ib, f != d) {
					var g;
					for (g = c.pl; 0 <= b[g]; g++)
						if (b[g] == f) return !1
				} return !0
		},
		fl: function (a, b, c, d, e, f, g) {
			var h = n.ke((a + c) / 2),
				m = n.ke((b + d) / 2),
				q, r;
			do
				if (this.Wl(h + this.a.c.ca, m + this.a.c.ea, e, f, !1)) {
					if (c = h, d = m, q = h, r = m, h = n.ke((c + a) / 2), m = n.ke((d + b) / 2), h == q && m == r) return c == a && d == b || !this.Wl(a + this.a.c.ca, b + this.a.c.ea, e, f, !1) || (h = a, m = b), g.x = h, g.y = m, !0
				} else if (a = h, b = m, q = h, r = m, h = n.ke((c + a) / 2), m = n.ke((d + b) / 2), h == q && m == r) {
					if ((c != a || d != b) && this.Wl(c + this.a.c.ca, d + this.a.c.ea, e, f, !1)) return g.x = c, g.y = d, !0;
					g.x = h;
					g.y = m;
					return !1
				} while (1)
		},
		tH: function (a, b, c, d, e, f) {
			var g = n.ke((a + c) / 2),
				h = n.ke((b +
					d) / 2),
				m, q;
			do
				if (this.Cg(g, h, e)) {
					if (c = g, d = h, m = g, q = h, g = n.ke((c + a) / 2), h = n.ke((d + b) / 2), g == m && h == q) return c == a && d == b || !this.Cg(a, b, e) || (g = a, h = b), f.x = g, f.y = h, !0
				} else if (a = g, b = h, m = g, q = h, g = n.ke((c + a) / 2), h = n.ke((d + b) / 2), g == m && h == q) {
					if ((c != a || d != b) && this.Cg(c, d, e)) return f.x = c, f.y = d, !0;
					f.x = g;
					f.y = h;
					return !1
				} while (1)
		},
		Fr: function (a) {
			this.a.b.Ic == O.mE && (250 < a && (a = 250), 0 > a && (a = 0), this.Fr(a));
			this.a.b.Ic == O.hj && this.td.Fr(a)
		},
		Dr: function (a) {
			this.a.b.Ic == O.Ps && (250 < a && (a = 250), 0 > a && (a = 0), this.Dr(a));
			this.a.b.Ic ==
				O.hj && this.td.Dr(a)
		},
		Bb: function () {
			return this.a.b.Ic == O.hj && this.td.Bb ? this.td.Bb() : this.a.b.Fa
		},
		sb: function () { },
		start: function () { }
	};
	sa.gI = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 30, 31, 0, 1, 4, 3, 2, 1, 0, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 24, 25, 26, 27, 27, 28, 28, 28, 28, 29, 29, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 16, 17, 18, 19, 19, 20, 20, 20, 20, 21, 21, 22, 23, 24, 25, 28, 27, 26, 25, 0, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 20, 21, 22, 22, 23, 24, 24, 24, 24, 25, 26, 27, 28,
		29, 30, 8, 7, 6, 5, 4, 8, 9, 10, 11, 11, 12, 12, 12, 12, 13, 13, 14, 15, 16, 17, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 16, 15, 14, 13, 12, 11, 10, 9, 8, 12, 13, 14, 15, 15, 16, 16, 16, 16, 17, 17, 18, 19, 20, 21, 24, 23, 22, 21, 20, 19, 18, 17, 16, 17, 18, 19, 20, 21, 22, 23, 24, 23, 22, 21, 20, 19, 18, 17, 16, 17, 18, 19, 20, 21, 22, 23, 24, 23, 22, 21, 20, 19, 18, 17, 3, 3, 4, 4, 4, 4, 5, 5, 6, 7, 8, 9, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 31, 30, 29, 28, 0, 1, 2, 0, 0, 1, 1, 2, 3, 4, 5, 8, 7, 6, 5, 4, 3, 2, 1, 0, 31, 30, 29, 28, 27, 26, 25, 24, 28,
		29, 30, 31, 31, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 31, 30, 29, 28, 27, 26, 25, 24, 25, 26, 27, 28, 29, 30, 31, 0, 31, 30, 29, 28, 27, 25, 25, 24, 25, 26, 27, 28, 29, 30, 31, 0, 4, 5, 6, 7, 7, 8, 8, 8, 8, 9, 9, 10, 11, 12, 13, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 16, 15, 14, 13, 12, 11, 10, 9, 8, 9, 10, 11, 12, 13, 14, 15, 16, 15, 14, 13, 12, 11, 10, 9, 8, 9, 10, 11, 12, 13, 14, 15, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
		29, 30, 31
	];
	sa.oE = [4294967292, 4294967294, 4294967295];
	sa.HE = [-4, 4, -2, 2, -1, 1];
	sa.IE = [-4, 4, -4, 4, -4, 4];
	sa.prototype = n.extend(new F, {
		S: function (a, b) {
			this.a = a;
			this.a.Tf = 0;
			this.a.Uf = 0;
			this.a.b.X = b.fn;
			this.a.b.Ra = b.fn;
			this.a.b.Dh = b.fn;
			this.yk = b.fn << 8;
			var c = b.Zz;
			0 != c && (c = this.Aj(c), this.a.b.Dh = 0);
			this.ce = c;
			this.Xw = b.Yz;
			this.Lo = b.Xz;
			this.Mo = sa.oE[this.Lo];
			this.Th = !1;
			this.Bs = -1;
			this.xk = this.No = (100 - b.$z) / 8;
			this.kn(b);
			this.a.b.K = !0
		},
		move: function () {
			this.a.w.Pi = !1;
			this.a.c.ik = 1;
			this.a.b.Zd = t.qc;
			null != this.a.ha &&
				this.a.ha.we();
			if (0 != this.ce) {
				var a = this.yk;
				if (0 < a) {
					var b = this.ce;
					0 != (this.a.c.A.Db & D.Bc) && (b *= this.a.c.mc);
					a -= b;
					0 > a && (a = 0);
					this.yk = a;
					this.a.b.X = a >> 8
				}
			}
			this.si(this.a.b.X, this.a.c.Bb(this.a))
		},
		stop: function () {
			0 == this.xb && (this.xb = this.a.b.X | 32768, this.yk = this.a.b.X = 0, this.a.w.M = !0)
		},
		start: function () {
			var a = this.xb;
			0 != a && (a &= 32767, this.a.b.X = a, this.yk = a << 8, this.xb = 0, this.a.w.M = !0)
		},
		Lf: function () {
			if (0 == this.xb && this.a.c.Ub != this.Bs) {
				this.Bs = this.a.c.Ub;
				this.Kd == this.a.c.Tc && this.aA(this.Th);
				var a = this.a.u,
					b = this.a.s,
					c = 0,
					a = a - 8,
					b = b - 8;
				0 == this.Cg(a, b, this.Th) && (c |= 1);
				a += 16;
				0 == this.Cg(a, b, this.Th) && (c |= 2);
				b += 16;
				0 == this.Cg(a, b, this.Th) && (c |= 4);
				0 == this.Cg(a - 16, b, this.Th) && (c |= 8);
				a = sa.gI[32 * c + this.a.c.Bb(this.a)];
				a &= this.Mo;
				if (!this.mn(a)) {
					var c = b = sa.IE[2 * this.Lo + 1],
						d = !1;
					do {
						a -= b;
						a &= 31;
						if (this.mn(a)) {
							d = !0;
							break
						}
						a += 2 * b;
						a &= 31;
						if (this.mn(a)) {
							d = !0;
							break
						}
						a -= b;
						a &= 31;
						b += c
					} while (16 >= b);
					if (0 == d) {
						this.Th = !0;
						this.a.b.Fa = this.a.c.random(32) & this.Mo;
						this.a.w.Pi = !0;
						this.a.w.M = !0;
						return
					}
				}
				this.Th = !1;
				this.a.b.Fa = a;
				a = this.a.c.random(100);
				if (a < this.Xw && (a >>= 2, 25 > a && (a = a - 12 & 31 & this.Mo, this.mn(a)))) {
					this.a.b.Fa = a;
					this.a.w.Pi = !0;
					this.a.w.M = !0;
					return
				}
				a = this.a.c.Bb(this.a) & 7;
				12 != this.xk && (0 == a ? (this.xk-- , 0 > this.xk && (a = this.a.c.Bb(this.a) + sa.HE[this.a.c.random(2) + 2 * this.Lo], a &= 31, this.mn(a) && (this.a.b.Fa = a, this.xk = this.No))) : this.xk = this.No);
				this.a.w.Pi = !0;
				this.a.w.M = !0
			}
		},
		mn: function (a) {
			var b = 2048 * F.bj[a] + (65536 * this.a.u + (this.a.Tf & 65535));
			a = 2048 * F.kj[a] + (65536 * this.a.s + (this.a.Uf & 65535));
			b = Math.floor(b / 65536);
			a = Math.floor(a / 65536);
			return this.Cg(b,
				a, !1)
		},
		te: function () { },
		Le: function (a) {
			0 > a && (a = 0);
			250 < a && (a = 250);
			this.a.b.X = a;
			this.yk = a << 8;
			this.xb = 0;
			this.a.w.M = !0
		},
		ug: function (a) {
			this.Le(a)
		},
		reverse: function () {
			0 == this.xb && (this.a.w.M = !0, this.a.b.Fa += 16, this.a.b.Fa &= 31)
		},
		Xb: function (a) {
			this.a.u != a && (this.a.u = a, this.a.w.M = !0, this.a.b.K = !0, this.a.b.Ha = !0)
		},
		Lb: function (a) {
			this.a.s != a && (this.a.s = a, this.a.w.M = !0, this.a.b.K = !0, this.a.b.Ha = !0)
		}
	});
	jd.prototype = n.extend(new F, {
		S: function (a) {
			this.a = a;
			this.j = a.c;
			this.j.Qw();
			null != this.a.F && this.a.F.Br(!1);
			null != this.a.F && (this.a.F.U &= ~w.Vg, this.a.F.tn());
			this.Oo = !0;
			this.a.Tf = 0;
			this.a.Uf = 0;
			null != this.a.ha && this.a.ha.Cz(t.qc);
			this.a.b.X = 0;
			this.a.b.Ha = !0;
			this.a.b.K = !0
		},
		fq: function (a) {
			this.a.b.Ra = this.a.b.X;
			this.a.b.Dh = this.a.b.X;
			this.zk = a
		},
		sb: function () {
			this.$F(this.a)
		},
		move: function () {
			if (this.Oo) {
				if (null != this.zk.ha && this.zk.ha.Mn == t.to) return;
				this.eC()
			}
			null != this.a.ha && this.a.ha.we();
			this.si(this.a.b.X, this.a.c.Bb(this.a));
			if (-64 > this.a.u || this.a.u > this.a.c.$d + 64 || -64 > this.a.s || this.a.s > this.a.c.ae +
				64) this.a.Tm = !1, this.a.c.bf(this.a.Cb);
			this.a.b.Ha && (this.a.b.Ha = !1, this.a.c.qf(this.a))
		},
		eC: function () {
			null != this.a.F && this.a.F.Br(!0);
			null != this.a.F && (this.a.F.U |= w.Vg, this.a.F.Su());
			if (null != this.j.Li) {
				var a = this.j.vs(this.zk);
				if (null != a) {
					var b = this.j.Li,
						c = new aa;
					this.Cs = c;
					c.PD(this.a, aa.jE);
					c.qH = b.identifier;
					this.hm = b.KO(a.pH, this.a.b.X / 250 * 50, c);
					c.oH = this.hm;
					null == this.hm && (this.Cs = null)
				}
			}
			this.Oo = !1;
			this.zk = null
		},
		$F: function () {
			null != this.hm && (pBase = this.a.c.Li, pBase.LO(this.hm), this.hm = null);
			null != this.Cs && (this.Cs = null)
		},
		Xb: function (a) {
			this.a.u != a && (this.a.u = a, this.a.w.M = !0, this.a.b.K = !0, this.a.b.Ha = !0)
		},
		Lb: function (a) {
			this.a.s != a && (this.a.s = a, this.a.w.M = !0, this.a.b.K = !0, this.a.b.Ha = !0)
		},
		te: function () { },
		reverse: function () { },
		stop: function () { },
		start: function () { },
		Lf: function () { },
		Le: function () { },
		ug: function () { }
	});
	kd.prototype = n.extend(new F, {
		S: function (a) {
			this.a = a
		},
		move: function () {
			0 == (this.a.W & E.Rh) && null != this.a.ha && (this.a.ha.we(), this.a.ha.kg != t.rk + 1 && this.a.c.bf(this.a.Cb))
		},
		Xb: function (a) {
			this.a.u !=
				a && (this.a.u = a, this.a.w.M = !0, this.a.b.K = !0)
		},
		Lb: function (a) {
			this.a.s != a && (this.a.s = a, this.a.w.M = !0, this.a.b.K = !0)
		},
		te: function () { },
		reverse: function () { },
		stop: function () { },
		start: function () { },
		Lf: function () { },
		Le: function () { },
		ug: function () { }
	});
	ld.prototype = n.extend(new F, {
		S: function (a, b) {
			this.a = a;
			this.a.Tf = 0;
			this.Hf = this.a.Uf = 0;
			this.Mg = this.a.b.X = 0;
			this.Ds = -1;
			this.a.b.Eh = b.il;
			this.Xn = b.dA;
			this.rg = this.Aj(this.Xn);
			this.Yn = b.eA;
			this.ce = this.Aj(this.Yn);
			this.a.b.Ra = b.gA;
			this.a.b.Dh = 0;
			this.Es = b.fA;
			this.Qi =
				b.Dq;
			this.a.b.K = !0
		},
		move: function () {
			var a, b, c, d;
			this.a.c.ik = 1;
			a = this.a.c.Bb(this.a);
			this.a.b.Dv = a;
			if (0 == this.Mg) {
				this.a.w.Pi = !1;
				b = 0;
				c = this.a.c.Lc[this.a.b.Eh - 1] & 15;
				0 != c && (d = F.VD[c], -1 != d && 0 != (1 << d & this.Es) && (b = 1, a = d));
				c = this.Hf;
				0 == b ? 0 != c && (b = this.ce, 0 != (this.a.c.A.Db & D.Bc) && (b *= this.a.c.mc), c -= b, 0 >= c && (c = 0)) : c >> 8 < this.a.b.Ra && (b = this.rg, 0 != (this.a.c.A.Db & D.Bc) && (b *= this.a.c.mc), c += b, c >> 8 > this.a.b.Ra && (c = this.a.b.Ra << 8));
				this.Hf = c;
				this.a.b.X = c >> 8;
				this.a.b.Fa = a;
				this.a.b.Zd = t.qc;
				null != this.a.ha && this.a.ha.we();
				if (0 == this.si(this.a.b.X, this.a.c.Bb(this.a))) return;
				if (0 == this.a.b.X) {
					c = this.Hf;
					if (0 == c || this.a.b.Dv == this.a.c.Bb(this.a)) return;
					this.a.b.X = c >> 8;
					this.a.b.Fa = this.a.b.Dv;
					if (0 == this.si(this.a.b.X, this.a.c.Bb(this.a))) return
				}
			}
			for (; 0 != this.Mg && 0 != this.a.c.ik;)
				if (c = this.Hf, c -= this.ce, 0 < c) {
					if (this.Hf = c, c >>= 8, this.a.b.X = c, d = this.a.c.Bb(this.a), 0 != this.Mg && (d += 16, d &= 31), 0 == this.si(c, d)) break
				} else {
					this.Hf = 0;
					this.Mg = this.a.b.X = 0;
					break
				}
		},
		Lf: function () {
			this.Kd == this.a.c.Tc && this.ln(0 != (this.Qi & F.km));
			this.a.c.Ub !=
				this.Ds && (this.Ds = this.a.c.Ub, this.Mg++ , 12 <= this.Mg ? this.stop() : (this.a.w.Pi = !0, this.a.w.M = !0))
		},
		reverse: function () { },
		te: function () { },
		stop: function () {
			this.Hf = this.Mg = this.a.b.X = 0;
			this.a.w.M = !0;
			this.Kd == this.a.c.Tc && (this.ln(0 != (this.Qi & F.km)), this.Mg = 0)
		},
		start: function () {
			this.a.w.M = !0;
			this.xb = 0
		},
		ug: function (a) {
			0 > a && (a = 0);
			250 < a && (a = 250);
			this.a.b.Ra = a;
			this.a.b.X > a && (this.a.b.X = a, this.Hf = a << 8);
			this.a.w.M = !0
		},
		Le: function (a) {
			0 > a && (a = 0);
			250 < a && (a = 250);
			a > this.a.b.Ra && (a = this.a.b.Ra);
			this.a.b.X = a;
			this.Hf =
				a << 8;
			this.a.w.M = !0
		},
		Xb: function (a) {
			this.a.u != a && (this.a.u = a, this.a.w.M = !0, this.a.b.K = !0, this.a.b.Ha = !0)
		},
		Lb: function (a) {
			this.a.s != a && (this.a.s = a, this.a.w.M = !0, this.a.b.K = !0, this.a.b.Ha = !0)
		},
		RO: function (a) {
			this.Es = a
		}
	});
	md.prototype = n.extend(new F, {
		S: function (a, b) {
			this.a = a;
			this.a.b.Eh = b.il;
			this.Fs = b.hA + this.a.u;
			this.Gs = b.iA + this.a.s;
			this.Hs = b.jA + this.a.u;
			this.Is = b.kA + this.a.s;
			this.Qo = this.Po = this.a.b.X = 0;
			this.a.b.Dh = 0;
			this.a.b.Ra = 100;
			this.Qi = b.Dq;
			this.kn(b);
			this.a.b.K = !0
		},
		move: function () {
			var a = this.a.u,
				b = this.a.s,
				c, d, e, f;
			if (0 == this.xb && 0 != this.a.c.hr[this.a.b.Eh - 1] && (a = this.a.c.Rn, a < this.Fs && (a = this.Fs), a > this.Hs && (a = this.Hs), b = this.a.c.Cl, b < this.Gs && (b = this.Gs), b > this.Is && (b = this.Is), c = a - this.a.u, d = b - this.a.s, e = 0, 0 > c && (c = -c, e |= 1), 0 > d && (d = -d, e |= 2), f = c + d << 2, 250 < f && (f = 250), this.a.b.X = f, 0 != f)) {
				0 == d && (d = 1);
				c = (c << 8) / d;
				for (d = 0; !(c >= F.tk[d]); d += 2);
				c = F.tk[d + 1];
				0 != (e & 2) && (c = -c + 32 & 31);
				0 != (e & 1) && (c = (-(c - 8 & 31) & 31) + 8 & 31);
				this.a.b.Fa = c
			}
			0 != this.a.b.X && (this.Qo = 0, this.Po = this.a.b.X);
			this.Qo++;
			10 < this.Qo && (this.Po =
				0);
			this.a.b.X = this.Po;
			null != this.a.ha && this.a.ha.we();
			this.a.u = a;
			this.a.s = b;
			this.a.b.K = !0;
			this.a.c.Tc++;
			this.Kd = this.a.c.Tc;
			this.a.c.qf(this.a)
		},
		stop: function () {
			this.Kd == this.a.c.Tc && this.ln(0 != (this.Qi & F.km));
			this.a.b.X = 0
		},
		start: function () {
			this.xb = 0;
			this.a.w.M = !0
		},
		Lf: function () {
			this.stop()
		},
		reverse: function () { },
		te: function () { },
		Xb: function (a) {
			this.a.u != a && (this.a.u = a, this.a.w.M = !0, this.a.b.K = !0, this.a.b.Ha = !0)
		},
		Lb: function (a) {
			this.a.s != a && (this.a.s = a, this.a.w.M = !0, this.a.b.K = !0, this.a.b.Ha = !0)
		}
	});
	nd.prototype = n.extend(new F, {
		S: function (a, b) {
			this.a = a;
			this.Vo = this.a.u;
			this.Wo = this.a.s;
			this.Yc = !1;
			this.Qg = 0;
			this.a.bl = 0;
			this.xa = b;
			this.a.b.Dh = b.AA;
			this.a.b.Ra = b.zA;
			this.Pg = 0;
			this.Ek = null;
			this.Nj(0);
			this.kn(b);
			this.a.b.X = this.rc;
			this.a.b.K = !0;
			0 == this.xa.Oa.length && this.stop()
		},
		move: function () {
			this.a.bl = 0;
			this.a.b.Zd = t.qc;
			null != this.a.ha && this.a.ha.we();
			if (0 == this.rc) {
				var a = this.Qg;
				if (0 == a) {
					this.a.b.X = 0;
					this.a.c.qf(this.a);
					return
				}
				a -= this.a.c.Wn;
				if (0 < a) {
					this.Qg = a;
					this.a.b.X = 0;
					this.a.c.qf(this.a);
					return
				}
				this.Qg =
					0;
				this.rc = this.xb & 32767;
				this.xb = 0;
				this.a.b.X = this.rc
			}
			a = 0 != (this.a.c.A.Db & D.Bc) ? 256 * this.a.c.mc : 256;
			this.a.c.Ih = a;
			for (var b; ;) {
				b = !1;
				this.a.c.Vn = a;
				a *= this.rc;
				a <<= 5;
				524288 >= a ? this.a.c.Wv = a : (a = 16384, a /= this.rc, this.a.c.Vn = a, this.a.c.Wv = 524288);
				for (; ;) {
					this.To = !1;
					if (1 == this.BA(this.a.c.Wv) && 0 == this.To) {
						b = !0;
						break
					}
					if (this.a.c.Ih == this.a.c.Vn) {
						b = !0;
						break
					}
					if (this.a.c.Ih > this.a.c.Vn) {
						this.a.c.Ih -= this.a.c.Vn;
						a = this.a.c.Ih;
						break
					}
					a = this.a.c.Ih * MT_Speed;
					a <<= 5;
					this.BA(a);
					b = !0;
					break
				}
				if (b) break
			}
		},
		BA: function (a) {
			a +=
				this.Pg;
			var b = a >>> 16;
			if (b < this.Uo) return this.Pg = a, a = b * this.jm / 16384 + this.Sg, this.a.u = b * this.im / 16384 + this.Rg, this.a.s = a, this.a.b.K = !0, this.a.c.qf(this.a), this.a.w.M;
			b -= this.Uo;
			a = b << 16 | a & 65535;
			0 != this.rc && (a /= this.rc);
			this.a.c.Ih += a >> 5 & 65535;
			this.a.u = this.fj;
			this.a.s = this.gj;
			this.a.b.K = !0;
			this.a.c.qf(this.a);
			if (this.a.w.M) return !0;
			this.a.bl = this.a.c.Ub;
			this.a.al = null;
			b = this.Od;
			this.Pg = 0;
			if (0 == this.Yc) {
				b++;
				if (b < this.xa.hl) {
					this.a.al = this.xa.Oa[b].Vd;
					if (null != this.Ek && null != this.xa.Oa[b].Vd && n.rb(this.Ek,
						this.xa.Oa[b].Vd)) return this.Od = b, this.Be(), this.Cq();
					this.Nj(b);
					this.Be();
					return this.a.w.M
				}
				this.a.aq = this.a.c.Ub;
				this.Od = b;
				if (this.Yc) return this.Be(), this.a.w.M;
				if (0 != this.xa.EA) return this.Yc = !0, b-- , this.a.al = this.xa.Oa[b].Vd, this.gl(b), this.Be(), this.a.w.M;
				this.DA();
				if (0 == this.xa.Mu) return this.Cq(), this.Be(), this.a.w.M;
				b = 0
			} else {
				if (null != this.Ek && null != this.xa.Oa[b].Vd && n.rb(this.Ek, this.xa.Oa[b].Vd)) return this.Be(), this.Cq();
				this.a.al = this.xa.Oa[b].Vd;
				this.Qg = this.xa.Oa[b].Eu;
				b--;
				if (0 <= b) return this.gl(b),
					this.Be(), this.a.w.M;
				this.DA();
				if (0 == this.Yc) return this.Be(), this.a.w.M;
				if (0 == this.xa.Mu) return this.Cq(), this.Be(), this.a.w.M;
				b = 0;
				this.Yc = !1
			}
			this.Nj(b);
			this.Be();
			return this.a.w.M
		},
		Nj: function (a) {
			a >= this.xa.Oa.length ? this.stop() : (this.Yc = !1, this.Od = a, this.Qg = this.xa.Oa[a].Eu, this.im = this.xa.Oa[a].Au, this.jm = this.xa.Oa[a].Fu, this.Rg = this.a.u, this.Sg = this.a.s, this.fj = this.a.u + this.xa.Oa[a].Cu, this.gj = this.a.s + this.xa.Oa[a].Du, this.a.b.Fa = this.xa.Oa[a].Bu, this.yA())
		},
		gl: function (a) {
			a >= this.xa.Oa.length ?
				this.stop() : (this.Yc = !0, this.Od = a, this.im = -this.xa.Oa[a].Au, this.jm = -this.xa.Oa[a].Fu, this.Rg = this.a.u, this.Sg = this.a.s, this.fj = this.a.u - this.xa.Oa[a].Cu, this.gj = this.a.s - this.xa.Oa[a].Du, this.a.b.Fa = this.xa.Oa[a].Bu + 16 & 31, this.yA())
		},
		yA: function () {
			this.Uo = this.xa.Oa[this.Od].bA;
			var a = this.xa.Oa[this.Od].cA,
				b = this.Qg;
			0 != b && (this.Qg = 20 * b, this.xb = a |= 32768);
			0 != this.xb && (a = 0);
			if (a != this.rc || 0 != a) this.rc = a, this.To = this.a.w.M = !0;
			this.a.b.X = this.rc
		},
		Be: function () {
			this.a.bl == this.a.c.Ub && (this.a.c.v.Kc = 0,
				this.a.c.v.ad(this.a, -1310720 | this.a.Da & 65535), this.a.c.v.ad(this.a, -2293760 | this.a.Da & 65535));
			this.a.aq == this.a.c.Ub && (this.a.c.v.Kc = 0, this.a.c.v.ad(this.a, -1376256 | this.a.Da & 65535))
		},
		Cq: function () {
			this.xb = this.rc = 0;
			this.a.w.M = !0;
			this.To = !1;
			return !0
		},
		DA: function () {
			0 != this.xa.CA && (this.a.u = this.Vo, this.a.s = this.Wo, this.a.b.K = !0)
		},
		yO: function (a) {
			var b;
			for (b = 0; b < this.xa.hl; b++)
				if (null != this.xa.Oa[b].Vd && n.rb(a, this.xa.Oa[b].Vd)) {
					0 == this.Yc ? (this.Nj(b), this.a.bl = this.a.c.Ub, this.a.al = this.xa.Oa[b].Vd,
						this.a.aq = 0, this.Be()) : 0 < b && (b-- , this.gl(b), this.a.bl = this.a.c.Ub, this.a.al = this.xa.Oa[b].Vd, this.a.aq = 0, this.Be());
					this.a.w.M = !0;
					break
				}
		},
		zO: function (a) {
			var b;
			for (b = 0; b < this.xa.hl; b++)
				if (null != this.xa.Oa[b].Vd && n.rb(a, this.xa.Oa[b].Vd)) {
					if (b == this.Od && 0 == this.Pg) break;
					this.Ek = a;
					if (0 == this.Yc)
						if (b > this.Od) {
							if (0 != this.rc) break;
							0 != (this.xb & 32768) ? this.start() : this.Nj(this.Od)
						} else {
							if (0 != this.rc) {
								this.reverse();
								break
							}
							0 != (this.xb & 32768) ? (this.start(), this.reverse()) : this.gl(MT_MoveNumber - 1)
						}
					else if (b <=
						this.Od) {
						if (0 != this.rc) break;
						0 != (this.xb & 32768) ? this.start() : this.gl(this.Od - 1)
					} else {
						if (0 != this.rc) {
							this.reverse();
							break
						}
						0 != (this.xb & 32768) ? (this.start(), this.reverse()) : this.Nj(this.Od)
					}
					break
				}
		},
		stop: function () {
			0 == this.xb && (this.xb = this.rc | 32768);
			this.rc = 0;
			this.a.w.M = !0
		},
		start: function () {
			0 != (this.xb & 32768) && (this.rc = this.xb & 32767, this.xb = this.Qg = 0, this.a.w.M = !0)
		},
		reverse: function () {
			if (0 == this.xb) {
				this.a.w.M = !0;
				var a = this.Od;
				if (0 == this.Pg) (this.Yc = !this.Yc) ? 0 == a ? this.Yc = !this.Yc : (a-- , this.gl(a)) : this.Nj(a);
				else {
					this.Yc = !this.Yc;
					this.im = -this.im;
					this.jm = -this.jm;
					var a = this.Rg,
						b = this.fj;
					this.Rg = b;
					this.fj = a;
					a = this.Sg;
					this.Sg = b = this.gj;
					this.gj = a;
					this.a.b.Fa += 16;
					this.a.b.Fa &= 31;
					a = this.Pg >>> 16;
					a = this.Uo - a;
					this.Pg = a << 16 | this.Pg & 65535
				}
			}
		},
		Xb: function (a) {
			var b = this.a.u;
			this.a.u = a;
			b -= this.Rg;
			a -= b;
			this.fj = b = this.fj - this.Rg + a;
			b = this.Rg;
			this.Rg = a;
			this.Vo -= b - a;
			this.a.w.M = !0;
			this.a.b.K = !0;
			this.a.b.Ha = !0
		},
		Lb: function (a) {
			var b = this.a.s;
			this.a.s = a;
			b -= this.Sg;
			a -= b;
			this.gj = b = this.gj - this.Sg + a;
			b = this.Sg;
			this.Sg = a;
			this.Wo -=
				b - a;
			this.a.w.M = !0;
			this.a.b.K = !0;
			this.a.b.Ha = !0
		},
		Le: function (a) {
			0 > a && (a = 0);
			250 < a && (a = 250);
			this.rc = a;
			this.a.b.X = a;
			this.a.w.M = !0
		},
		ug: function (a) {
			this.Le(a)
		},
		te: function () { }
	});
	K.tL = 0;
	K.hE = 1;
	K.rL = 2;
	K.sL = 3;
	K.Ng = 0;
	K.Ak = 1;
	K.So = 2;
	K.Ro = 3;
	K.Yw = 4;
	K.Zw = 5;
	K.prototype = n.extend(new F, {
		S: function (a, b) {
			this.a = a;
			this.j = this.a.c;
			this.a.Tf = 0;
			this.yd = this.a.Uf = 0;
			this.a.b.X = 0;
			this.a.b.Eh = b.il;
			this.Xn = b.oA;
			this.rg = this.Aj(this.Xn);
			this.Yn = b.pA;
			this.ce = this.Aj(this.Yn);
			this.a.b.Ra = b.tA;
			this.a.b.Dh = 0;
			this.Js = b.qA;
			this.$w =
				b.rA;
			var c = b.sA;
			3 < c && (c = K.hE);
			this.ax = c;
			this.Bk = this.kd = 0;
			this.Ck = null;
			this.kn(b);
			this.a.b.K = !0;
			this.Ya = K.Ng
		},
		move: function () {
			var a, b;
			this.a.c.ik = 1;
			a = this.a.c.Lc[this.a.b.Eh - 1];
			this.nt();
			b = this.yd;
			var c;
			0 == this.Bk && (0 >= b && (0 != (a & 4) ? (c = this.rg, 0 != (this.a.c.A.Db & D.Bc) && (c *= this.a.c.mc), b -= c, b / 256 < -this.a.b.Ra && (b = 256 * -this.a.b.Ra)) : 0 > b && (c = this.ce, 0 != (this.a.c.A.Db & D.Bc) && (c *= this.a.c.mc), b += c, 0 < b && (b = 0)), 0 != (a & 8) && (b = -b)), 0 <= b && (0 != (a & 8) ? (c = this.rg, 0 != (this.a.c.A.Db & D.Bc) && (c *= this.a.c.mc), b += c, b /
				256 > this.a.b.Ra && (b = 256 * this.a.b.Ra)) : 0 < b && (c = this.ce, 0 != (this.a.c.A.Db & D.Bc) && (c *= this.a.c.mc), b -= c, 0 > b && (b = 0)), 0 != (a & 4) && (b = -b)), this.yd = b);
			var d = this.kd;
			for (c = !1; ;) {
				switch (this.Ya) {
					case 2:
					case 3:
						c = this.Js << 5;
						0 != (this.a.c.A.Db & D.Bc) && (c *= this.a.c.mc);
						d += c;
						64E3 < d && (d = 64E3);
						break;
					case 0:
						if (0 != (a & 1)) {
							if (this.j.Mf(this.a.qd, this.a.u + this.Qe, this.a.s + this.Re - 4) == h.Pe) break;
							this.Ya = K.Ak;
							c = !0;
							continue
						}
						if (0 != (a & 2) && this.j.Mf(this.a.qd, this.a.u + this.Qe, this.a.s + this.Re + 4) != h.Pe) {
							this.Ya = K.Ak;
							c = !0;
							continue
						}
						break;
					case 1:
						if (0 == c && (this.Bk = 0, this.j.Mf(this.a.qd, this.a.u + this.Qe, this.a.s + this.Re) == h.Pe && this.j.Mf(this.a.qd, this.a.u + this.Qe, this.a.s + this.Re - 4) == h.Pe)) break;
						0 >= d && (0 != (a & 1) ? (c = this.rg, 0 != (this.a.c.A.Db & D.Bc) && (c *= this.a.c.mc), d -= c, c = d / 256, c < -this.a.b.Ra && (d = 256 * -this.a.b.Ra)) : (c = this.ce, 0 != (this.a.c.A.Db & D.Bc) && (c *= this.a.c.mc), d += c, 0 < d && (d = 0)), 0 != (a & 2) && (d = -d));
						0 <= d && (0 != (a & 2) ? (c = this.rg, 0 != (this.a.c.A.Db & D.Bc) && (c *= this.a.c.mc), d += c, c = d / 256, c > this.a.b.Ra && (d = 256 * this.a.b.Ra)) : (c = this.ce, 0 != (this.a.c.A.Db &
							D.Bc) && (c *= this.a.c.mc), d -= c, 0 > d && (d = 0)), 0 != (a & 1) && (d = -d))
				}
				break
			}
			this.kd = d;
			var e = 0;
			0 > b && (e = 16);
			c = b;
			var f = d;
			if (0 != f) {
				var g = 0;
				0 > c && (g |= 1, c = -c);
				0 > f && (g |= 2, f = -f);
				c = (c << 8) / f;
				for (e = 0; !(c >= F.tk[e]); e += 2);
				e = F.tk[e + 1];
				0 != (g & 2) && (e = -e + 32 & 31);
				0 != (g & 1) && (e = (-(e - 8 & 31) & 31) + 8 & 31)
			}
			c = b;
			g = F.bj[e];
			f = F.kj[e];
			0 > g && (g = -g);
			0 > f && (f = -f);
			g < f && (g = f, c = d);
			0 > c && (c = -c);
			c /= g;
			250 < c && (c = 250);
			this.a.b.X = c;
			switch (this.Ya) {
				case 1:
					0 > d ? this.a.b.Fa = 8 : 0 < d && (this.a.b.Fa = 24);
					break;
				case 3:
					this.a.b.Fa = e;
					break;
				default:
					0 > b ? this.a.b.Fa = 16 : 0 < b &&
						(this.a.b.Fa = 0)
			}
			switch (this.Ya) {
				case 4:
					this.a.b.Zd = t.as;
					break;
				case 5:
					this.a.b.Zd = t.uo;
					break;
				case 3:
					this.a.b.Zd = t.sw;
					break;
				case 2:
					this.a.b.Zd = t.tw;
					break;
				case 1:
					this.a.b.Zd = t.rw;
					break;
				default:
					this.a.b.Zd = t.qc
			}
			null != this.a.ha && this.a.ha.we();
			this.nt();
			this.si(this.a.b.X, e);
			this.Ya != K.Ng && this.Ya != K.Ak || 0 != this.dj || (b = !1, d = this.ax, 0 != d && (d-- , 0 == d ? (5 == (a & 5) && (b = !0), 9 == (a & 9) && (b = !0)) : 0 != (a & d << 4) && (b = !0)), b && (this.kd = -this.$w << 8, this.Ya = K.So));
			switch (this.Ya) {
				case 2:
					0 <= this.kd && (this.Ya = K.Ro);
					break;
				case 3:
					this.j.Mf(this.a.qd,
						this.a.u + this.Qe, this.a.s + this.Re) != h.Pe && (this.kd = 0, this.Ya = K.Ak, this.a.b.Fa = 8);
					break;
				case 0:
					if (0 != (a & 3) && 0 == (a & 12) && this.j.Mf(this.a.qd, this.a.u + this.Qe, this.a.s + this.Re) != h.Pe) {
						this.Ya = K.Ak;
						this.yd = 0;
						break
					}
					0 != (a & 2) && null != this.a.ha && this.a.ha.Jf(t.as) && (this.yd = 0, this.Ya = K.Yw);
					if (this.j.Mf(this.a.qd, this.a.u + this.Qe, this.a.s + this.Re) != h.Pe) break;
					0 == this.Wl(this.a.u, this.a.s + 10, this.Uh, D.ge, !0) ? (a = this.a.u - this.a.c.ca, b = this.a.s - this.a.c.ea, d = new pa, this.fl(a, b + this.Uh - 1, a, b, this.Uh, D.ge, d), this.a.u =
						d.x + this.a.c.ca, this.a.s = d.y + this.a.c.ea, this.dj = !1) : this.Ya = K.Ro;
					break;
				case 1:
					if (this.j.Mf(this.a.qd, this.a.u + this.Qe, this.a.s + this.Re) == h.Pe) {
						if (0 > this.kd)
							for (f = 0; 32 > f; f++)
								if (this.j.Mf(this.a.qd, this.a.u + this.Qe, this.a.s + this.Re + f) != h.Pe) {
									this.a.s += f;
									break
								} this.kd = 0
					}
					0 != (a & 12) && (this.Ya = K.Ng, this.kd = 0);
					break;
				case 4:
					0 == (a & 2) && (null != hoPtr.ha && this.a.ha.Jf(t.uo) ? (this.Ya = K.Zw, this.a.b.Zd = t.uo, this.a.ha.we(), this.a.ha.Xj = 1) : this.Ya = K.Ng);
					break;
				case 5:
					null != this.a.ha && 0 == this.a.ha.mg && (this.Ya = K.Ng)
			}
			if (this.Ya ==
				K.Ng || this.Ya == K.Yw || this.Ya == K.Zw) {
				do {
					a = null;
					null != this.a.hc && (a = this.a.hc.zi);
					if (null == this.a.c.ll(this.a, this.a.b.Ia, this.a.b.ab, this.a.b.vb, this.a.b.wb, this.a.u, this.a.s, a) && (a = this.a.c.ll(this.a, this.a.b.Ia, this.a.b.ab, this.a.b.vb, this.a.b.wb, this.a.u, this.a.s + 1, a), null != a && 1 == a.size())) {
						a = a.get(0);
						if ((null == this.Ck || this.Ck != a) && this.a.Ib != a.Ib) {
							this.Ck = a;
							this.Ks = a.u;
							this.Ls = a.s;
							break
						}
						b = a.u - this.Ks;
						d = a.s - this.Ls;
						this.Ks = a.u;
						this.Ls = a.s;
						this.a.u += b;
						this.a.s += d;
						this.a.c.qf(this.a);
						this.a.b.K = !0;
						break
					}
					this.Ck = null
				} while (0)
			} else this.Ck = null
		},
		Ju: function () {
			this.kd = this.yd = this.a.b.X = 0
		},
		Lf: function () {
			this.stop()
		},
		stop: function () {
			if (this.Kd != this.a.c.Tc) this.Ju();
			else {
				this.a.w.M = !0;
				var a = this.a.u - this.a.c.ca,
					b = this.a.s - this.a.c.ea,
					c;
				switch (this.a.c.v.tr & 4294901760) {
					case -786432:
						a = this.a.u - this.a.fa;
						b = this.a.s - this.a.ga;
						c = this.a.c.Wj(a, b, a + this.a.J, b + this.a.I);
						a = this.a.u;
						b = this.a.s;
						0 != (c & h.Hg) && (a = this.a.fa, this.yd = 0, this.dj = !0);
						0 != (c & h.Ig) && (a = this.a.c.$d - this.a.J + this.a.fa, this.yd = 0, this.dj = !0);
						0 != (c & h.Jg) && (b = this.a.ga, this.kd = 0, this.dj = !1);
						0 != (c & h.Gg) && (b = this.a.c.ae - this.a.I + this.a.ga, this.kd = 0, this.dj = !1);
						this.a.u = a;
						this.a.s = b;
						this.Ya = this.Ya == K.So ? K.Ro : K.Ng;
						this.Bk = 0;
						break;
					case -851968:
					case -917504:
						if (this.dj = !1, c = new pa, this.Ya == K.Ro) this.fl(a, b, this.a.b.Gi - this.a.c.ca, this.a.b.Hi - this.a.c.ea, this.Uh, D.ge, c), this.a.u = c.x + this.a.c.ca, this.a.s = c.y + this.a.c.ea, this.Ya = K.Ng, this.a.b.K = !0, this.Wl(this.a.u, this.a.s + 1, 0, D.ge, !0) ? this.yd = this.a.b.X = 0 : (this.Bk = 0, this.a.b.X = Math.abs(this.yd /
							256), this.kd = 0);
						else {
							if (this.Ya == K.Ng) {
								if (this.fl(a, b, a, b - this.Uh, 0, D.ge, c)) {
									this.a.u = c.x + this.a.c.ca;
									this.a.s = c.y + this.a.c.ea;
									this.a.b.K = !0;
									break
								}
								if (this.fl(a, b, this.a.b.Gi - this.a.c.ca, this.a.b.Hi - this.a.c.ea, 0, D.ge, c)) {
									this.a.u = c.x + this.a.c.ca;
									this.a.s = c.y + this.a.c.ea;
									this.a.b.K = !0;
									this.Ju();
									break
								}
							}
							if (this.Ya == K.So) {
								if (this.fl(a, b, a, b - this.Uh, 0, D.ge, c)) {
									this.a.u = c.x + this.a.c.ca;
									this.a.s = c.y + this.a.c.ea;
									this.a.b.K = !0;
									break
								}
								this.Bk = 1;
								this.yd = 0
							}
							this.Ya == K.Ak && this.fl(a, b, this.a.b.Gi - this.a.c.ca, this.a.b.Hi -
								this.a.c.ea, 0, D.ge, c) ? (this.a.u = c.x + this.a.c.ca, this.a.s = c.y + this.a.c.ea, this.a.b.K = !0, this.Ju()) : (this.a.b.Ia = this.a.b.er, this.a.b.ab = this.a.b.dr, this.Wl(this.a.u, this.a.s, 0, D.ge, !0) || (this.a.u = this.a.b.Gi, this.a.s = this.a.b.Hi, this.a.b.K = !0))
						}
				}
			}
		},
		Xb: function (a) {
			this.a.u != a && (this.a.u = a, this.a.w.M = !0, this.a.b.K = !0, this.a.b.Ha = !0)
		},
		Lb: function (a) {
			this.a.s != a && (this.a.s = a, this.a.w.M = !0, this.a.b.K = !0, this.a.b.Ha = !0)
		},
		Le: function (a) {
			0 > a && (a = 0);
			250 < a && (a = 250);
			a > this.a.b.Ra && (a = this.a.b.Ra);
			this.a.b.X =
				a;
			this.yd = this.a.b.X * F.bj[this.a.c.Bb(this.a)];
			this.kd = this.a.b.X * F.kj[this.a.c.Bb(this.a)];
			this.a.w.M = !0
		},
		ug: function (a) {
			0 > a && (a = 0);
			250 < a && (a = 250);
			this.a.b.Ra = a;
			a <<= 8;
			this.yd > a && (this.yd = a);
			this.a.w.M = !0
		},
		Dr: function (a) {
			this.Js = a
		},
		te: function (a) {
			this.a.b.Fa = a;
			this.yd = this.a.b.X * F.bj[a];
			this.kd = this.a.b.X * F.kj[a]
		},
		nt: function () {
			var a;
			0 < this.a.b.Ia ? a = this.a.c.h.$.Bj(this.a.b.Ia, this.a.b.ab, this.a.b.vb, this.a.b.wb) : (a = new fa, a.width = this.a.J, a.height = this.a.I, a.wa = this.a.fa, a.va = this.a.ga);
			this.Qe =
				0;
			this.Re = a.height - a.va;
			this.Uh = 2 * a.height + a.height >>> 3
		},
		uH: function () {
			this.nt();
			this.j.Mf(this.a.qd, this.a.u + this.Qe, this.a.s + this.Re) == h.Pe && (0 == this.a.c.vm(this.a, this.a.b.Ia, this.a.b.ab, this.a.b.vb, this.a.b.wb, this.a.u, this.a.s, 0, D.xo) && (this.Ya == K.So && 0 > this.kd || 0 == this.a.c.vm(this.a, this.a.b.Ia, this.a.b.ab, this.a.b.vb, this.a.b.wb, this.a.u, this.a.s, this.Uh, D.ge)) || this.a.c.v.ad(this.a, -851968 | this.a.Da & 65535))
		}
	});
	Ua.NE = [4294967288, 4294967292, 4294967294, 4294967295];
	Ua.prototype = n.extend(new F, {
		S: function (a, b) {
			this.a = a;
			this.ld = 0;
			this.Og = this.a.b.X = 0;
			this.bx = -1;
			this.a.b.Eh = b.il;
			this.Xn = b.Ku;
			this.rg = this.Aj(b.Ku);
			this.Yn = b.Lu;
			this.ce = this.Aj(b.Lu);
			this.a.b.Ra = b.xA;
			this.a.b.Dh = 0;
			this.cx = b.vA;
			this.a.w.Ri = 0;
			this.Qi = b.Dq;
			this.Ms = 0;
			this.Ns = Ua.NE[b.uA];
			this.Os = b.wA;
			this.Dk = 0;
			this.ej = this.a.c.Bb(this.a);
			this.a.Tf = 0;
			this.a.Uf = 0;
			this.kn(b);
			this.a.b.K = !0
		},
		move: function () {
			var a, b, c;
			this.a.c.ik = 1;
			if (0 == this.Og) {
				this.a.w.Pi = !1;
				a = this.a.c.Lc[this.a.b.Eh - 1] & 15;
				b = 0;
				0 != (a & 8) && (b = -1);
				0 != (a & 4) && (b = 1);
				if (0 !=
					b) {
					c = this.Os;
					0 != (this.a.c.A.Db & D.Bc) && (c *= this.a.c.mc);
					for (this.Dk += c; 100 < this.Dk;) this.Dk -= 100, this.ej += b, this.ej &= 31, this.a.b.Fa = this.ej & this.Ns;
					this.a.b.K = !0
				}
				c = 0;
				0 != this.a.w.Ri ? (0 != (a & 1) && (c = 1), 0 != (a & 2) && (c = 2)) : (0 != (a & 1) && (c = 2), 0 != (a & 2) && (c = 1));
				for (b = this.ld; ;) {
					if (0 != (c & 1)) {
						if (0 == this.ld) {
							if (0 == this.cx) break;
							if (0 != (this.Ms & 3)) break;
							this.a.w.Ri ^= 1;
							c = this.rg;
							0 != (this.a.c.A.Db & D.Bc) && (c *= this.a.c.mc);
							b += c;
							c = b >> 8;
							c > this.a.b.Ra && (this.ld = b = this.a.b.Ra << 8);
							this.ld = b;
							break
						}
						c = this.ce;
						0 != (this.a.c.A.Db &
							D.Bc) && (c *= this.a.c.mc);
						b -= c;
						0 > b && (b = 0);
						this.ld = b
					} else 0 != (c & 2) && (c = this.rg, 0 != (this.a.c.A.Db & D.Bc) && (c *= this.a.c.mc), b += c, c = b >> 8, c > this.a.b.Ra && (this.ld = b = this.a.b.Ra << 8), this.ld = b);
					break
				}
				this.Ms = a;
				this.a.b.X = this.ld >> 8;
				this.a.b.Zd = t.qc;
				null != this.a.ha && this.a.ha.we();
				a = this.a.c.Bb(this.a);
				0 != this.a.w.Ri && (a = a + 16 & 31);
				if (0 == this.si(this.a.b.X, a)) return
			}
			do {
				if (0 == this.Og) break;
				if (0 == this.a.c.ik) break;
				b = this.ld;
				b -= this.ce;
				if (0 >= b) {
					this.Og = this.ld = 0;
					break
				}
				this.ld = b;
				b >>= 8;
				a = this.a.c.Bb(this.a);
				0 != this.Og &&
					(a += 16, a &= 31);
				if (0 == this.si(b, a)) break
			} while (1)
		},
		reverse: function () { },
		stop: function () {
			this.ld = this.Og = 0;
			this.a.w.Ri = 0;
			this.Kd == this.a.c.Tc && (this.ln(0 != (this.Qi & F.km)), this.a.w.M = !0)
		},
		start: function () {
			this.xb = 0;
			this.a.w.M = !0
		},
		Lf: function () {
			this.Kd == this.a.c.Tc && this.ln(0 != (this.Qi & F.km));
			this.a.c.Ub != this.bx && (this.Og = this.a.w.Ri, this.a.w.Ri = 0, this.Og++ , 16 <= this.Og ? this.stop() : (this.a.w.M = !0, this.a.w.Pi = !0))
		},
		Le: function (a) {
			0 > a && (a = 0);
			250 < a && (a = 250);
			a > this.a.b.Ra && (a = this.a.b.Ra);
			this.ld = a << 8;
			this.a.w.M = !0
		},
		ug: function (a) {
			0 > a && (a = 0);
			250 < a && (a = 250);
			this.a.b.Ra = a;
			a <<= 8;
			this.ld > a && (this.ld = a);
			this.a.w.M = !0
		},
		Fr: function (a) {
			this.Os = a
		},
		Xb: function (a) {
			this.a.u != a && (this.a.u = a, this.a.w.M = !0, this.a.b.K = !0, this.a.b.Ha = !0)
		},
		Lb: function (a) {
			this.a.s != a && (this.a.s = a, this.a.w.M = !0, this.a.b.K = !0, this.a.b.Ha = !0)
		},
		te: function (a) {
			this.ej = a;
			this.a.b.Fa = a & this.Ns
		}
	});
	Va.prototype = n.extend(new F, {
		S: function (a) {
			this.a = a;
			this.a.b.X = 0;
			this.a.b.Ha = !0;
			this.a.b.K = !0
		},
		move: function () {
			null != this.a.ha && this.a.ha.we();
			this.a.b.Ha &&
				(this.a.b.Ha = !1, this.a.c.qf(this.a))
		},
		Xb: function (a) {
			this.a.u != a && (this.a.u = a, this.a.w.M = !0, this.a.b.K = !0);
			this.a.b.Ha = !0
		},
		Lb: function (a) {
			this.a.s != a && (this.a.s = a, this.a.w.M = !0, this.a.b.K = !0);
			this.a.b.Ha = !0
		},
		te: function () { },
		reverse: function () { },
		stop: function () { },
		start: function () { },
		Lf: function () { },
		Le: function () { },
		ug: function () { }
	});
	(function (a) {
		this.td = a
	}).prototype = n.extend(new F, {
		S: function (a, b) {
			this.a = a;
			a.c.h.file.Nf(b.data);
			this.a.b.Ha = !0;
			this.a.b.K = !0
		},
		sb: function () {
			this.td.sb()
		},
		move: function () {
			this.td.move() &&
				(this.a.b.K = !0)
		},
		stop: function () {
			this.td.stop(this.Kd == this.a.c.Tc)
		},
		start: function () {
			this.td.start()
		},
		Lf: function () {
			this.td.Lf(this.Kd == this.a.c.Tc)
		},
		Le: function (a) {
			this.td.Le(a)
		},
		ug: function (a) {
			this.td.ug(a)
		},
		reverse: function () {
			this.td.reverse()
		},
		Xb: function (a) {
			this.td.Xb(a);
			this.a.b.K = !0;
			this.a.b.Ha = !0
		},
		Lb: function (a) {
			this.td.Lb(a);
			this.a.b.K = !0;
			this.a.b.Ha = !0
		},
		te: function (a) {
			this.td.te(a);
			this.a.b.K = !0;
			this.a.b.Ha = !0
		},
		Qx: function () {
			return 0
		}
	});
	Ca.kD = 1;
	Ca.lD = 2;
	Ca.wK = 4;
	Ca.prototype = {
		S: function (a,
			b, c, d, e) {
			null != this.aa && this.aa.sb();
			null != d && (b.b.Fa = d.$x);
			this.$v = b.hc.dv;
			b.b.Ic = -1;
			if (null != c.dg && a < c.dg.pn) {
				c = c.dg.sd[a];
				this.Zv = a; - 1 == e && (e = c.Nu);
				b.b.Ic = e;
				switch (e) {
					case 0:
						this.aa = new Va;
						break;
					case 1:
						this.aa = new md;
						break;
					case 2:
						this.aa = new Ua;
						break;
					case 3:
						this.aa = new ld;
						break;
					case 4:
						this.aa = new sa;
						break;
					case 5:
						this.aa = new nd;
						break;
					case 9:
						this.aa = new K;
						break;
					case 14:
						this.aa = null, null == this.aa && (this.aa = new Va)
				}
				b.b.Fa = this.zt(b, c.FA, b.b.Fa);
				this.aa.S(b, c)
			} - 1 == b.b.Ic && (b.b.Ic = 0, this.aa = new Va, this.aa.S(b,
				null), b.b.Fa = 0)
		},
		Bz: function (a, b, c) {
			null != this.aa && this.aa.sb();
			a.b.Ic = b;
			switch (b) {
				case 11:
					this.aa = new kd;
					break;
				case 13:
					this.aa = new jd
			}
			this.aa.a = a;
			0 == c && this.aa.S(a, null)
		},
		sb: function () {
			this.aa.sb()
		},
		move: function () {
			this.aa.move()
		},
		zt: function (a, b, c) {
			if (0 > c || 32 <= c) {
				var d = 0,
					e = b,
					f;
				for (c = 0; 32 > c; c++) f = e, e >>= 1, 0 != (f & 1) && d++;
				if (0 == d) c = 0;
				else
					for (d = a.c.random(d), e = b, c = 0; !(f = e, e >>= 1, 0 != (f & 1) && (d-- , 0 > d)); c++);
			}
			return c
		}
	};
	Tc(M, oa)
};