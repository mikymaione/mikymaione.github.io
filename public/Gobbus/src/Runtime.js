var za = "function" == typeof Object.defineProperties ? Object.defineProperty : function(M, oa, u)
	{
		if (u.get || u.set) throw new TypeError("ES3 does not support getters and setters.");
		M != Array.prototype && M != Object.prototype && (M[oa] = u.value)
	},
	Za = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

function lb()
{
	lb = function() {};
	Za.Symbol || (Za.Symbol = mb)
}
var nb = 0;

function mb(M)
{
	return "jscomp_symbol_" + (M || "") + nb++
}

function Od()
{
	lb();
	var M = Za.Symbol.iterator;
	M || (M = Za.Symbol.iterator = Za.Symbol("iterator"));
	"function" != typeof Array.prototype[M] && za(Array.prototype, M,
	{
		configurable: !0,
		writable: !0,
		value: function()
		{
			return Pd(this)
		}
	});
	Od = function() {}
}

function Pd(M)
{
	var oa = 0;
	return Qd(function()
	{
		return oa < M.length ?
		{
			done: !1,
			value: M[oa++]
		} :
		{
			done: !0
		}
	})
}

function Qd(M)
{
	Od();
	M = {
		next: M
	};
	M[Za.Symbol.iterator] = function()
	{
		return this
	};
	return M
}

function Rd(M, oa)
{
	Od();
	M instanceof String && (M += "");
	var u = 0,
		U = {
			next: function()
			{
				if (u < M.length)
				{
					var W = u++;
					return {
						value: oa(W, M[W]),
						done: !1
					}
				}
				U.next = function()
				{
					return {
						done: !0,
						value: void 0
					}
				};
				return U.next()
			}
		};
	U[Symbol.iterator] = function()
	{
		return U
	};
	return U
}

function Sd(M, oa)
{
	if (oa)
	{
		for (var u = Za, U = M.split("."), W = 0; W < U.length - 1; W++)
		{
			var L = U[W];
			L in u || (u[L] = {});
			u = u[L]
		}
		U = U[U.length - 1];
		W = u[U];
		L = oa(W);
		L != W && null != L && za(u, U,
		{
			configurable: !0,
			writable: !0,
			value: L
		})
	}
}
Sd("Array.prototype.values", function(M)
{
	return M ? M : function()
	{
		return Rd(this, function(M, u)
		{
			return u
		})
	}
});
Sd("Array.prototype.fill", function(M)
{
	return M ? M : function(M, u, U)
	{
		var W = this.length || 0;
		0 > u && (u = Math.max(0, W + u));
		if (null == U || U > W) U = W;
		U = Number(U);
		0 > U && (U = Math.max(0, W + U));
		for (u = Number(u || 0); u < U; u++) this[u] = M;
		return this
	}
});
window.Runtime = function(M, oa)
{
	function u(a, b)
	{
		this.files = {};
		this.root = "";
		a && this.load(a, b)
	}

	function U(a, b, c)
	{
		this.x = a;
		this.y = b;
		this.text = c
	}

	function W()
	{
		this.dd = "";
		this.offset = this.da = 0;
		this.ef = !1
	}

	function L()
	{
		this.Wd = []
	}

	function Y(a, b, c, d)
	{
		this.left = a ? a : 0;
		this.top = b ? b : 0;
		this.right = c ? c : 0;
		this.bottom = d ? d : 0
	}

	function pa()
	{
		this.y = this.x = 0
	}

	function $a()
	{
		this.Sb = 12;
		this.te = 400;
		this.se = 0;
		this.re = "Arial";
		this.xi = !1
	}

	function Oa(a, b)
	{
		this.app = a;
		this.Ya = b;
		this.Gg = new L
	}

	function ia(a, b, c)
	{
		this.app = a;
		this.width =
			b;
		this.height = c;
		this.canvas = document.createElement("canvas");
		this.canvas.width = b;
		this.canvas.height = c;
		this.Fd = this.canvas.getContext("2d")
	}

	function Da()
	{
		this.SG = !!window.opr && !!opr.BN || !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/");
		this.RG = "undefined" !== typeof InstallTrigger;
		this.VG = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") || "[object SafariRemoteNotification]" === (!window.safari || safari.pushNotification).toString();
		this.qn = !!document.documentMode;
		this.PG = !this.qn && !!window.StyleMedia;
		(this.Rz = !!window.chrome && !!window.chrome.webstore) || this.PG || this.qn || this.RG || this.SG || this.VG || this.WB(Da.NF);
		this.version = this.XB(navigator.userAgent) || this.XB(navigator.appVersion) || "Unknown version";
		this.WB(Da.PF)
	}

	function va()
	{
		this.It = null;
		this.height = this.width = 0;
		this.fg = null;
		this.Ya = this.color = 0;
		this.iG = null;
		this.Uq = this.wu = this.OG = this.mz = this.td = 0;
		this.Ht = null;
		this.xi = !0
	}

	function S()
	{}

	function ob()
	{
		this.Ya = 0;
		this.name = null;
		this.index = 0
	}

	function ea()
	{}

	function pb()
	{}

	function qb()
	{}

	function rb()
	{}

	function sb()
	{}

	function tb()
	{}

	function ub()
	{}

	function vb()
	{}

	function Pa()
	{}

	function wb()
	{}

	function xb()
	{}

	function yb()
	{}

	function Pa()
	{}

	function zb()
	{}

	function Ab()
	{}

	function Bb()
	{}

	function Cb()
	{}

	function Db()
	{}

	function Eb()
	{}

	function Fb()
	{}

	function Gb()
	{}

	function Hb()
	{}

	function Ib()
	{}

	function Jb()
	{}

	function Kb()
	{}

	function Lb()
	{}

	function Mb()
	{}

	function Nb()
	{}

	function Ob()
	{}

	function Pb()
	{}

	function Qb()
	{}

	function Rb()
	{}

	function Sb()
	{}

	function J()
	{}

	function ta()
	{}

	function ab()
	{}

	function J()
	{}

	function Tb()
	{}

	function Ub()
	{}

	function Vb()
	{}

	function Wb()
	{}

	function Xb()
	{}

	function Yb()
	{}

	function Zb()
	{}

	function bb()
	{}

	function $b()
	{}

	function ac()
	{}

	function bc()
	{}

	function cc()
	{}

	function dc()
	{}

	function ec()
	{}

	function fc()
	{}

	function ca()
	{}

	function cb()
	{}

	function ua()
	{}

	function db()
	{}

	function gc()
	{}

	function hc()
	{}

	function ic()
	{}

	function jc()
	{}

	function kc()
	{}

	function lc()
	{}

	function mc()
	{}

	function nc()
	{}

	function eb()
	{
		la.Jc.kH()
	}

	function oc()
	{
		la.Jc.pH()
	}

	function l(a, b, c, d)
	{
		(this.Tz = !0 ===
			d) ? (this.canvas = a.canvas, this.er = a.er) : "string" === typeof a ? (this.canvas = document.getElementById(a), this.er = this.canvas.parentElement) : a instanceof HTMLElement && (this.canvas = document.createElement("canvas"), this.er = a);
		a = this.Mt = a.Mt || document.createElement("div");
		a.appendChild(this.canvas);
		this.er.appendChild(a);
		a.style.overflow = "hidden";
		a.style.position = "relative";
		a.style.transform = "translateZ(0)";
		a.style.margin = "0";
		a.style.padding = "0";
		a.style.display = "block";
		a.style.boxSizing = "content-box";
		a.className =
			"MMFDiv";
		this.nz = this.oz = this.gu = null;
		this.ll = 0;
		this.appName = this.hu = null;
		this.xl = 0;
		this.pu = this.Iz = null;
		this.Fn = 0;
		this.xo = this.Qc = this.Fg = this.Gb = this.ca = this.Ic = this.ou = null;
		this.Sa = this.rC = 0;
		this.Zm = this.$m = this.lB = this.uo = this.un = null;
		this.ne = this.tb = this.ww = 0;
		this.ta = this.file = this.frame = null;
		this.Dv = this.Ev = this.ak = 0;
		this.Ih = this.G = null;
		this.Nu = !1;
		this.rz = this.mf = this.qz = this.sz = this.tz = this.oa = this.ja = this.bn = this.an = this.If = this.Hf = 0;
		this.Xm = this.Fv = this.kB = null;
		this.wf = this.vf = this.MF = this.LF =
			this.Ym = 0;
		this.Uc = null;
		this.Jy = 0;
		this.cursor = "auto";
		this.qr = !1;
		this.Xt = this.au = null;
		this.ef = !1;
		this.fj = this.ej = 0;
		this.$u = this.yA = null;
		this.Aa = this.alpha = this.Id = this.Hd = this.Ny = 0;
		this.file = b;
		this.Ui = "";
		this.path = c;
		b = c.lastIndexOf("/");
		0 <= b && (this.Ui = c.substring(0, b + 1));
		this.Zf = 0;
		this.G = null;
		this.oh = this.ph = this.Ae = 0;
		this.Pj = !1;
		this.bb = [];
		this.Wn = -1;
		this.kr = this.dk = this.pB = this.rB = this.qB = this.oB = this.nB = 0;
		this.Gf = this.$c = this.Bw = this.transition = null;
		this.yt = !1;
		this.Mp = new Da;
		this.Kg = this.Jg = this.We =
			null;
		this.An = l.uj;
		this.pa = null;
		this.Cm = this.rh = 0;
		this.lt = null;
		this.dh = this.bh = this.wj = this.vj = 0;
		this.Zb = this.$b = 1;
		this.hasFocus = !0;
		this.nn = this.zt = !1;
		this.qu = this.lr = null;
		this.uq = -1;
		this.pn = null;
		this.on = 1E9;
		this.tq = null;
		0 <= window.location.href.indexOf("192.") && (b = window.location.href.indexOf("21700/"), 0 <= b && (this.tq = window.location.href.substring(0, b + 6), this.uq = -1, this.on = 25));
		this.Uf = !1;
		this.OF = 3;
		this.Mm = new L;
		this.Zp = new L;
		this.Bb = [];
		this.Nd = 0;
		this.ze = null;
		this.Su = "Please touch the screen to start";
		this.fullScreen = !1;
		this.IC = "***version***";
		this.Gw = this.Do = 0;
		this.uf = null
	}

	function Qa(a, b, c)
	{
		this.changedTouches = Array(1);
		this.changedTouches[0] = {
			pageX: a,
			pageY: b,
			target: c,
			identifier: l.ex
		}
	}

	function E(a)
	{
		this.app = a;
		this.l = null;
		this.Vz = this.kc = this.fd = 0;
		this.Aq = !1;
		this.Hb = 0;
		this.Bq = null;
		this.sn = this.tn = 0;
		this.pz = null;
		this.yc = 0;
		this.Tm = this.md = this.fb = null;
		this.bA = this.Nq = this.Fu = this.Eu = this.zi = this.yi = this.lg = 0;
		this.jd = this.hd = this.yn = this.cu = this.Vm = null;
		this.ln = this.pa = this.Nd = 0
	}

	function Z(a)
	{
		this.app =
			a;
		this.qb = null;
		this.ut = !1;
		this.Zx = !0;
		this.Gm = this.gs = null;
		this.eA = 0;
		this.Ej = null;
		this.Qt = !1;
		this.qb = Array(Z.pd);
		this.gs = Array(Z.pd);
		this.Gm = Array(Z.pd);
		this.ut = this.Zx = !0;
		var b;
		for (b = 0; b < Z.pd; b++) this.qb[b] = null, this.gs[b] = 100, this.Gm[b] = !1;
		this.eA = 100;
		b = new Audio;
		var c = Array(4);
		c[0] = b.canPlayType("audio/ogg");
		c[1] = b.canPlayType("audio/x-m4a");
		c[2] = b.canPlayType("audio/mpeg");
		c[3] = b.canPlayType("audio/wav");
		for (b = this.Tu = this.Lv = 0; 4 > b; b++) "probably" == c[b] && (this.Lv |= 1 << b), "maybe" == c[b] && (this.Tu |=
			1 << b);
		for (; null != a.ta;) a = a.ta;
		this.context = a.xo;
		this.el = a.rC;
		null == this.context && ("undefined" !== typeof AudioContext ? (this.context = new AudioContext, this.el = 1) : "undefined" !== typeof webkitAudioContext && (this.context = new webkitAudioContext, this.el = 0), a.xo = this.context, a.rC = this.el)
	}

	function pc(a)
	{
		this.app = a
	}

	function qc(a)
	{
		this.app = a;
		this.Bu = !1;
		this.B = null;
		this.context = this.app.context;
		this.Ne = this.app.qB;
		this.color = this.app.pB;
		this.Vh = this.app.nB;
		0 > this.Vh && (this.Vh = this.app.ja / 2);
		this.Wh = this.app.oB;
		0 > this.Wh && (this.Wh = this.app.oa / 2);
		this.size = this.app.rB;
		this.wv = 0;
		this.Sp = 25;
		this.we = 0;
		this.fg = new Image;
		var b = this;
		this.fg.onload = function()
		{
			b.Bu = !0
		};
		this.fg.src = this.app.Ui + "Preloader.png"
	}

	function rc(a)
	{
		this.app = a;
		this.context = this.app.context;
		this.width = 100;
		this.height = 12;
		this.position = 0;
		this.qF = 10526880;
		this.borderColor = 8421504;
		this.rF = 0;
		this.rect = new Y;
		this.rect.left = this.app.ja / 2 - this.width / 2;
		this.rect.top = this.app.oa / 2 - this.height / 2;
		this.rect.right = this.rect.left + this.width;
		this.rect.bottom =
			this.rect.top + this.height;
		this.reset()
	}

	function sc(a)
	{
		this.app = a;
		this.Bu = !1;
		this.vc = new Aa;
		this.B = new l(this.app, this.app.file, this.app.path, !0);
		this.B.$B(this.app, this.app.kr, 0, this.vc, this.app.ja, this.app.oa);
		this.B.digest();
		this.B.Nu = !1;
		this.B.Th = !1;
		this.B.Aa &= ~l.Xh;
		this.B.vw();
		this.B.Tr(0, 0);
		this.B.yo();
		this.vc.x = this.app.ja / 2 - this.B.frame.fd / 2;
		this.vc.y = this.app.oa / 2 - this.B.frame.kc / 2;
		this.WI = 0 != (this.app.Aa & l.QC);
		this.app.bb.push(this.B);
		this.Fj = 0
	}

	function r(a)
	{
		this.app = a;
		this.lz = this.kz = this.Kd =
			this.sd = this.zq = this.Rb = null;
		this.Nb = Array(3);
		this.Ob = Array(3);
		this.Ya = this.pa = this.rf = this.qf = 0;
		this.touches = Array(3);
		this.wt = !1;
		this.Sz = !0;
		this.He = this.gg = this.Uz = 0
	}

	function h(a)
	{
		this.h = a;
		this.A = null;
		this.zg = this.hb = this.am = this.mw = this.ib = this.Pc = this.Cc = this.lw = this.ie = 0;
		this.j = this.P = null;
		this.sk = this.mo = this.oo = this.tk = this.Xi = this.Yb = this.kw = this.Rh = this.no = this.uk = this.ia = this.ea = this.he = this.ge = 0;
		this.zr = this.bw = this.Ar = null;
		this.Gr = this.cw = this.Vl = this.Rl = this.Xl = this.Tl = this.Ul = this.Ql =
			this.Wl = this.Sl = this.dw = this.Wc = this.fw = this.ew = this.pk = this.nk = this.MB = this.Df = this.jo = this.io = this.eo = this.lk = 0;
		this.qk = null;
		this.wb = this.$l = this.Jr = this.Ir = this.gw = this.hw = this.PB = 0;
		this.Fr = this.Zl = this.Xc = null;
		this.Ef = 0;
		this.Er = this.lo = null;
		this.Yl = 0;
		this.rk = null;
		this.pc = 0;
		this.F = this.pr = null;
		this.xu = Array(2);
		this.jl = !1;
		this.gz = 0;
		this.jw = 255;
		this.rr = this.CH = !1
	}

	function tc()
	{
		this.xF = null;
		this.sy = this.ry = this.qy = this.zF = this.yF = this.Km = 0
	}

	function H()
	{
		this.vv = this.uv = this.gb = this.Ad = this.nb = this.Nc =
			0;
		this.Af = !1;
		this.Sn = this.eB = this.fB = this.gB = this.Cl = this.zd = this.dr = this.ce = this.be = this.Ni = this.qg = this.Mi = this.sv = this.rv = this.rg = 0;
		this.Dl = this.El = null;
		this.tv = 0;
		this.Li = null
	}

	function Td()
	{
		this.zf = this.name = null
	}

	function Ud()
	{
		this.value = null;
		this.Mr = this.Nr = this.Ec = this.ab = 0
	}

	function Vd()
	{
		this.text = null;
		this.ab = 0
	}

	function Wd()
	{
		this.Gg = this.values = null;
		this.Ya = 0
	}

	function aa()
	{
		this.xH = 0;
		this.vH = null;
		this.wH = 0;
		this.Xb = this.Y = null
	}

	function v()
	{
		this.li = this.eh = this.Ed = null
	}

	function Ka()
	{
		this.bf = 0;
		this.ki = this.cf = null
	}

	function uc()
	{
		this.Vk = this.Tx = this.Sx = this.mt = this.nt = 0;
		this.xj = null
	}

	function Ea()
	{
		this.a = null;
		this.gk = this.tr = this.vg = 0;
		this.co = !1;
		this.Jh = 0;
		this.ee = null;
		this.ur = this.sr = 0;
		this.bo = null;
		this.Ll = this.Jl = this.de = this.wg = this.zB = this.fk = this.Il = this.ao = this.yB = this.Kl = this.Qi = this.Sv = 0;
		this.AB = -1
	}

	function vc(a, b)
	{
		this.ca = a;
		this.app = a.app;
		this.handle = b
	}

	function wc(a)
	{
		this.app = a;
		this.images = this.file = null;
		this.Ke = this.Ci = this.sb = 0;
		this.Fh = this.Bb = this.Gh = this.yj = this.Oj = this.Kh = this.Ja =
			this.va = this.Yj = null
	}

	function fa()
	{
		this.app = null;
		this.Ja = this.Og = this.Ng = this.xa = this.ya = this.height = this.width = this.handle = 0;
		this.th = this.rl = this.jg = this.kb = null;
		this.jd = this.hd = this.lb = 0
	}

	function xc(a)
	{
		this.app = a;
		this.br = this.fonts = this.file = null;
		this.uh = 0;
		this.va = null;
		this.kg = this.Md = 0;
		this.Ja = null;
		this.Jn = new wa;
		this.Jn.Vp()
	}

	function wa()
	{
		this.se = this.te = this.Sb = this.handle = this.Ja = 0;
		this.font = this.re = null;
		this.xi = !1
	}

	function yc(a)
	{
		this.app = a;
		this.xk = null;
		this.Hn = this.Ci = this.sb = 0;
		this.file = this.Ja =
			this.va = this.cr = null
	}

	function Ra(a)
	{
		this.Jc = a;
		this.context = a.Qc.context;
		this.el = a.Qc.el;
		this.kG = a.Qc.kG;
		this.type = 0;
		this.file = a.file;
		this.handle = -1;
		this.pb = this.source = null;
		this.Ja = 0;
		this.Im = !1;
		this.vh = 0;
		this.name = null;
		this.ni = this.Lp = this.fh = !1;
		this.frequency = 0;
		this.gain = this.response = null
	}

	function zc(a)
	{
		this.name = a;
		this.XH = [];
		this.position = 0;
		this.aA = !1
	}

	function N(a)
	{
		this.Jc = a;
		this.l = null;
		this.UA = this.lg = 0;
		this.hv = Array(p.Ud + p.zx);
		this.En = this.wh = 0;
		this.Qj = this.Xf = this.hc = this.Tb = this.Pb = this.Jd =
			this.ug = null;
		this.xe = Array(p.Ud + 1);
		this.SB = !1;
		this.Ee = null;
		this.Yn = this.$n = this.Xn = this.Zn = 0;
		this.ko = !1;
		this.Se = null;
		this.Kr = 0;
		this.Hr = Array(4);
		this.fo = this.jk = this.ik = !1;
		this.Dr = this.Nh = this.hk = this.Ac = 0;
		this.Pl = this.Qh = !1;
		this.xg = null;
		this.ho = this.Re = this.yg = 0;
		this.kk = this.Oh = null;
		this.Yf = 0;
		this.zc = !1;
		this.LB = this.RB = this.Bc = this.QB = 0;
		this.Hm = !1;
		this.Vi = null;
		this.KB = 0;
		this.mk = null;
		this.Dt = !1;
		this.iA = 0
	}

	function D()
	{
		this.il = this.Ij = this.Ka = this.oe = this.Jb = 0;
		this.Wa = null
	}

	function Q()
	{}

	function Xd()
	{
		this.dz =
			this.id = 0
	}

	function Yd()
	{
		this.nr = this.mr = 0
	}

	function Zd(a, b, c, d, e)
	{
		this.xI = a;
		this.code = b;
		this.OH = c;
		this.NH = d;
		this.Ch = e
	}

	function $d()
	{
		this.Nv = this.Mv = this.Oi = this.Hl = this.Pi = this.sg = 0;
		this.Ov = this.Bf = !1;
		this.Ba = null
	}

	function fb()
	{
		this.next = null;
		this.type = 0;
		this.name = null;
		this.index = this.Fq = this.zo = this.$I = this.Ae = 0;
		this.tt = !1
	}

	function xa()
	{
		this.Dq = this.Wz = this.Hu = this.Ju = this.Iu = this.sf = this.Ai = 0;
		this.Gu = null;
		this.Gu = Array(4);
		var a;
		for (a = 0; 4 > a; a++) this.Gu[a] = null
	}

	function Ac()
	{
		this.va = this.list = null;
		this.Cq = this.xf = 0
	}

	function R(a)
	{
		this.app = a;
		this.cq = this.bq = this.y = this.x = 0;
		this.Ip = this.Gl = this.Fl = null;
		this.Xd = !1;
		this.$j = null;
		this.cy = this.by = this.ey = this.dy = this.ay = this.Id = this.Hd = this.Vq = this.Tq = this.mm = this.lm = this.Aa = this.iv = 0;
		this.Ha = this.Cb = this.Vb = null;
		this.angle = 0;
		this.scale = this.Zb = this.$b = 1;
		this.ya = this.Eo = 320;
		this.xa = this.Go = 240
	}

	function ga(a, b, c, d, e, f)
	{
		this.app = a;
		this.hH = d;
		this.Le = this.type = 0;
		this.x = b;
		this.y = c;
		this.height = this.width = 0;
		this.Od = null;
		this.Zk = !1;
		this.Tc = null;
		this.borderWidth =
			0;
		this.borderColor = this.Jt = this.Bj = null;
		this.Id = this.Hd = 0;
		this.Y = this.body = null;
		if (d)
			if (this.Od = this.app.Ic.Mj(d.sf), this.type = this.Od.ve, this.Le = this.Od.fc.$A, this.borderWidth = this.Od.fc.ar, this.Jz = this.Od.fc.Nn, this.Hd = this.Od.ov, this.Id = this.Od.pv, this.width = this.Od.fc.XA, this.height = this.Od.fc.YA, this.Zk = 0 != this.Od.fc.WA, this.Bj = this.Od.fc.mg, this.Jt = this.Od.fc.zl, this.borderColor = this.Od.fc.$q, 1 == this.type) this.Tc = this.app.ca.Mb(this.Od.fc.yh), this.width = this.Tc.width, this.height = this.Tc.height;
			else
			{
				if (32 <= this.type)
				{
					a = this.app.G;
					b = null;
					for (e = c = 0; e < a.hb; e++)
					{
						for (; null == a.F[c];) c++;
						b = a.F[c];
						c++;
						if (b.iH == d) break
					}
					this.Y = b
				}
			}
		else
		{
			this.type = p.Ax;
			this.Tc = e;
			this.width = this.Tc.width;
			this.height = this.Tc.height;
			this.x -= this.Tc.ya;
			this.y -= this.Tc.xa;
			switch (f)
			{
				case 0:
					this.Le = X.Dx;
					break;
				case 1:
					this.Le = X.pp;
					break;
				case 2:
					this.Le = X.Rf;
					break;
				case 3:
					this.Le = X.dt
			}
			this.Zk = !1
		}
	}

	function p()
	{
		this.pv = this.ov = this.Dh = this.ve = this.Qn = 0;
		this.fc = this.qv = null;
		this.dB = this.cB = 0
	}

	function Bc()
	{
		this.pg = this.nc = this.Ki = 0;
		this.Ji = this.Rn = this.Eh = null;
		this.Yp = 0
	}

	function X()
	{}

	function Cc()
	{
		this.yh = 0
	}

	function Fa()
	{
		this.yh = this.Nn = this.zl = this.mg = this.On = this.Gi = this.zh = this.$q = this.ar = 0
	}

	function z()
	{
		this.og = 0;
		this.lv = null;
		this.mc = this.Hi = 0;
		this.Mc = this.Za = this.Fi = this.Pn = this.Bl = this.ng = null;
		this.aB = this.ZA = 0;
		this.Mn = this.Al = null
	}

	function Dc()
	{
		this.yd = this.bB = this.Bh = this.Ah = 0;
		this.mv = null
	}

	function Ec()
	{
		this.Dy = this.Ey = this.Cy = 0
	}

	function ha()
	{
		this.wl = this.Nn = this.zl = this.mg = this.On = this.Gi = this.zh = this.$q = this.ar = this.Ii =
			this.Xj = this.Me = this.nv = this.Bh = this.Ah = 0;
		this.frames = null
	}

	function Fc()
	{
		this.Bh = this.Ah = this.yd = 0;
		this.text = null
	}

	function ma()
	{
		this.Cw = this.Co = this.im = 0;
		this.Uh = null
	}

	function Gc()
	{
		this.Zj = this.Cv = this.Bv = 0;
		this.Ib = null
	}

	function F()
	{
		this.xc = this.yb = 0;
		this.c = null;
		this.kn = this.wa = this.Qb = this.eg = this.zb = this.qq = 0;
		this.jc = null;
		this.ru = 0;
		this.pq = this.Lz = null;
		this.rq = this.ol = 0;
		this.M = this.nl = null;
		this.IG = this.Ge = this.ud = this.uu = this.W = this.ka = this.J = this.K = this.ga = this.fa = this.u = this.dg = this.v = this.cg =
			0;
		this.jn = !1;
		this.D = this.R = this.U = this.w = this.b = null
	}

	function Hc()
	{
		this.tw = !1;
		this.fg = null;
		this.na = !1;
		this.qa = null;
		this.Xd = !0;
		this.$b = this.Zb = 1;
		this.y = this.x = this.angle = 0;
		this.Bk = null
	}

	function I()
	{
		this.yd = this.Ya = 0;
		this.B = null;
		this.Av = this.zv = 0;
		this.hB = this.level = -1;
		this.rn = null;
		this.Xd = !0
	}

	function Ic()
	{
		this.fe = this.Oc = this.Mh = 0;
		this.Ia = -1;
		this.vb = this.ub = 1;
		this.Ua = this.Lh = this.Z = this.Ma = this.$a = 0;
		this.La = this.L = !1;
		this.Si = this.Ri = 0;
		this.wr = -1;
		this.Xv = this.Vv = this.Wv = this.Uv = this.Tv = this.vr = 0
	}

	function ba()
	{
		this.Zc =
			this.Yc = this.Ec = this.ab = this.ra = this.type = 0;
		this.$x = this.na = !1;
		this.qd = this.xf = this.Bg = this.ro = this.qc = 0;
		this.zj = !1;
		this.qa = this.ha = null;
		this.td = 0;
		this.font = null;
		this.Gd = this.Ga = !1
	}

	function Jc()
	{
		this.type = this.qc = this.sc = this.Zc = this.Yc = this.ra = this.Sh = 0;
		this.na = !0;
		this.xf = 0;
		this.ha = null;
		this.qd = 0;
		this.qa = null;
		this.td = 0;
		this.alpha = 1;
		this.Cj = "source-over";
		this.Gd = !1
	}

	function Kc()
	{
		this.type = this.qc = this.sc = this.Zc = this.Yc = this.ra = this.Sh = 0;
		this.na = !0;
		this.xf = 0;
		this.ha = null;
		this.qd = 0;
		this.qa = null;
		this.td =
			0;
		this.alpha = 1;
		this.Cj = "source-over";
		this.Gd = !1
	}

	function Lc()
	{
		this.dm = null;
		this.to = this.sc = this.ab = this.Ec = 0;
		this.font = null;
		this.na = !0;
		this.UB = this.Ya = 0;
		this.ha = this.qa = null;
		this.Ga = !1;
		this.rect = new Y;
		this.Zc = this.Yc = this.deltaY = 0;
		this.cb = null;
		this.Gd = !1
	}

	function Mc()
	{
		this.Zc = this.Yc = 0;
		this.Bd = null;
		this.Dj = 0;
		this.Hg = []
	}

	function Nc(a, b)
	{
		this.ext = b.h.au.$z(a);
		this.jv = !1;
		this.kv = this.Ln = this.Kv = 0;
		this.Ga = !1;
		this.na = !0;
		this.ha = this.qa = null
	}

	function Sa()
	{}

	function Ga()
	{
		this.rn = this.dir = this.y = this.x = 0;
		this.vt = !1
	}

	function Oc(a)
	{
		a.file.o();
		this.HC = a.file.o()
	}

	function ae(a)
	{
		this.Ae = a.file.s();
		this.Fq = a.file.s();
		this.bl = a.file.o()
	}

	function be(a)
	{
		this.color = a.file.Vc()
	}

	function ce(a)
	{
		this.Fj = a.file.s();
		this.dl = a.file.s()
	}

	function na(a)
	{
		this.bl = a.file.o();
		for (var b = a.file.da, c = 0, d;;)
		{
			c++;
			d = a.file.s();
			if (0 == d) break;
			d = a.file.o();
			6 < d && a.file.ma(d - 6)
		}
		a.file.seek(b);
		this.Da = Array(c);
		for (b = 0; b < c; b++) this.Da[b] = ca.create(a.file)
	}

	function de(a)
	{
		var b = a.file.o();
		a.file.ma(4);
		this.data = 0;
		6 < b && (this.data = a.file.da,
			a.file.ma(b - 6))
	}

	function ja(a)
	{
		this.bg = a.file.o();
		this.CG = a.file.o()
	}

	function ee(a)
	{
		a.file.ma(4);
		this.da = 0;
		this.id = a.file.o()
	}

	function Ha(a)
	{
		this.value = a.file.s();
		this.HC = 0
	}

	function Pc(a)
	{
		this.key = a.file.o()
	}

	function fe(a)
	{
		this.ec = a.file.S();
		this.Ch = a.file.S();
		this.type = a.file.S()
	}

	function ka()
	{}

	function Qc(a)
	{
		this.Un = a.file.S();
		this.ck = a.file.S();
		this.ir = a.file.S();
		this.jr = a.file.S();
		this.gr = a.file.S();
		this.Gv = a.file.S();
		this.fr = a.file.s();
		this.hr = a.file.S();
		this.Vn = a.file.S();
		this.Hv = a.file.S()
	}

	function gb(a)
	{
		this.Un = a.file.S();
		this.ck = a.file.S();
		this.ir = a.file.S();
		this.jr = a.file.S();
		this.gr = a.file.S();
		this.Gv = a.file.S();
		this.fr = a.file.s();
		this.hr = a.file.S();
		this.Vn = a.file.S();
		this.Hv = a.file.S();
		this.Jm = a.file.o();
		this.Ft = a.file.o()
	}

	function Rc(a)
	{
		this.Un = a.file.S();
		this.ck = a.file.S();
		this.ir = a.file.S();
		this.jr = a.file.S();
		this.gr = a.file.S();
		this.Gv = a.file.S();
		this.fr = a.file.s();
		this.hr = a.file.S();
		this.Vn = a.file.S();
		this.Hv = a.file.S();
		this.Jm = a.file.S();
		this.Ft = a.file.S();
		a.file.ma(4);
		this.OI =
			a.file.o()
	}

	function La(a)
	{
		this.uw = a.file.o();
		this.qC = a.file.o()
	}

	function da(a)
	{
		this.value = a.file.o()
	}

	function Ta(a)
	{
		this.Fb = a.file.Wb()
	}

	function ge(a)
	{
		this.Ae = a.file.s();
		this.Fq = a.file.s()
	}

	function he(a)
	{
		a.file.S();
		a.file.S();
		a.file.S();
		a.file.S()
	}

	function Ua()
	{
		this.Aj = []
	}

	function Ba(a)
	{
		this.Ho = this.Fo = 1;
		this.xv = -1;
		this.yv = this.tw = !1;
		this.Hj = this.Gj = 0;
		if (!(this.Fa = a.getContext("2d"))) throw Error("Failed to init standard renderer");
	}

	function ra()
	{
		this.Nm = "";
		this.Ky = this.Ao = this.Bo = this.BC = this.CC =
			0
	}

	function Sc()
	{}

	function t()
	{
		this.i = this.wn = this.vn = this.Iq = 0;
		this.la = this.cA = !1;
		this.ih = this.Oy = this.m = this.T = null
	}

	function Tc(a)
	{
		this.app = a
	}

	function Ma()
	{}

	function Uc()
	{
		this.dA = this.f = this.g = this.Ta = 0
	}

	function Vc()
	{
		this.f = this.g = this.Ta = 0
	}

	function Wc()
	{
		this.mb = this.lc = this.Bt = this.ff = 0;
		this.yH = null
	}

	function Xc()
	{
		this.f = this.g = this.aq = this.Oa = 0
	}

	function Yc()
	{
		this.mb = this.lc = this.Bi = 0
	}

	function Zc()
	{}

	function $c()
	{
		this.f = this.g = this.Pm = this.Ta = this.Oa = 0
	}

	function ad()
	{
		this.Ru;
		this.Tj = this.Vj = this.ig =
			this.ue = this.I = 0;
		this.Zd = null
	}

	function bd()
	{
		this.f = this.g = this.Ta = 0
	}

	function cd()
	{
		this.Qu = this.f = this.g = this.Ta = 0
	}

	function dd()
	{
		this.Bi;
		this.lc;
		this.mb
	}

	function ed()
	{
		this.f = this.g = this.Yy = this.Oa = this.Ta = 0
	}

	function fd()
	{
		this.f = this.g = this.Ta = 0
	}

	function gd()
	{
		this.Ub = this.f = this.g = this.Ta = 0
	}

	function hd()
	{
		this.Sj = this.Rj = this.f = this.g = this.Ta = 0
	}

	function id()
	{
		this.ql = this.f = this.g = this.Xy = this.Om = this.Oa = 0
	}

	function jd()
	{
		this.Hq = this.f = this.g = this.Om = this.Oa = 0
	}

	function kd()
	{
		this.Gq = this.Lq = this.Mq = this.Jq =
			this.gd = this.Pu = this.ba = this.aa = this.Tj = this.Vj = this.ig = this.ue = this.I = this.LC = this.ms = this.Hw = 0
	}

	function ld()
	{
		this.tf = this.Uj = this.f = this.g = this.Oa = this.Ta = 0
	}

	function md()
	{}

	function nd()
	{
		this.f = this.g = this.Oa = 0
	}

	function od(a, b)
	{
		var c = new W;
		la.Jc = new l(a, c, b);
		c.getFile(b, pd)
	}

	function pd()
	{
		la.Jc.load()
	}

	function Va()
	{
		la.Jc.yo()
	}

	function Aa()
	{
		this.y = this.x = 0;
		this.visible = !0;
		this.children = [];
		this.Uf = !1
	}

	function qa()
	{}

	function B()
	{
		this.O = null;
		this.lineWidth = this.xa = this.ya = this.width = this.height = this.lineWidth =
			0
	}

	function ie()
	{
		this.O = null;
		this.angle = 0;
		this.$b = this.Zb = 1;
		this.Aw = 0
	}

	function w()
	{
		this.a = null;
		this.V = this.rc = this.Dc = this.Or = this.cm = this.Lr = this.so = 0;
		this.Cg = null
	}

	function qd()
	{
		this.Wq = 0;
		this.Gg = null
	}

	function rd()
	{
		this.Xq = 0;
		this.values = null;
		this.Ya = 0
	}

	function Ca()
	{
		this.Pr = 0;
		this.ke = this.Na = null
	}

	function Na(a)
	{
		this.app = a;
		this.eq = null;
		this.DH = 0
	}

	function Ia()
	{
		this.Xb = this.Y = null
	}

	function sd()
	{}

	function td()
	{}

	function ud()
	{}

	function O()
	{
		this.gv = 100;
		this.Sq = this.SA = this.TA = this.vl = 0
	}

	function vd()
	{
		this.Gn =
			0;
		this.wd = null
	}

	function wd()
	{
		this.lA = this.mA = this.jA = this.kA = this.xn = 0
	}

	function xd()
	{
		this.sA = this.rA = this.qA = this.tA = 0
	}

	function yd()
	{
		this.xA = this.vA = this.wA = this.uA = 0
	}

	function zd()
	{
		this.RA = this.PA = this.fv = this.MA = this.NA = this.ul = 0;
		this.Ra = null
	}

	function Ad()
	{
		this.Yu = this.oA = this.Zu = this.Uu = this.Xu = this.Wu = this.Vu = this.pA = 0;
		this.ae = null
	}

	function Bd()
	{
		this.EA = this.DA = this.FA = this.CA = this.BA = this.GA = 0
	}

	function Cd()
	{
		this.IA = this.HA = this.JA = this.ev = this.dv = this.KA = 0
	}

	function Dd()
	{}

	function Ed()
	{
		this.Lc =
			null;
		this.data = 0
	}

	function G()
	{
		this.a = null;
		this.Zi = this.je = this.Ag = this.Db = this.Pd = this.qo = this.po = 0
	}

	function sa()
	{
		this.Os = this.bp = this.Kk = this.px = this.Jk = this.cp = this.ap = 0;
		this.ci = !1
	}

	function Fd()
	{
		this.ep = !1;
		this.Lk = null
	}

	function Gd()
	{}

	function Hd()
	{
		this.Qs = this.Pf = this.Rs = this.Ug = 0
	}

	function Id()
	{
		this.fp = this.gp = this.Vs = this.Us = this.Ts = this.Ss = 0
	}

	function Jd()
	{
		this.Td = this.pj = this.oj = this.$g = this.Zg = this.kp = this.wm = this.xm = this.uc = 0;
		this.bd = !1;
		this.za = null;
		this.Yg = this.mp = this.lp = this.Xg = 0;
		this.Qk =
			null;
		this.jp = !1
	}

	function K()
	{
		this.Nk = this.tx = this.di = this.$e = this.Ze = this.nd = this.sx = this.Ws = this.Cd = this.eb = 0;
		this.Ok = null;
		this.Ys = this.Xs = 0;
		this.mj = !1
	}

	function Wa()
	{
		this.ux = this.Zs = this.vx = this.$s = this.nj = this.Pk = this.at = this.od = this.Wg = 0
	}

	function Xa()
	{}

	function ya()
	{
		this.nw = 0;
		this.$ = null;
		this.ow = 0;
		this.N = !1;
		this.$i = 0;
		this.Yi = !1;
		this.bm = 0
	}
	var la = this,
		n = {
			extend: function(a, b)
			{
				var c = Object.create(a.prototype || a);
				if (void 0 !== b && (b = b.prototype || b))
					for (var d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
				return c
			},
			Vo: function(a)
			{
				return a >> 16
			},
			rE: function(a)
			{
				return a & 65535
			},
			sE: function(a, b)
			{
				return b << 16 | a & 65535
			},
			AO: function(a)
			{
				return a >>> 16 & 255
			},
			tO: function(a)
			{
				return a >>> 8 & 255
			},
			mO: function(a)
			{
				return a & 255
			},
			MM: function(a, b, c)
			{
				return (a & 255) << 16 | (b & 255) << 8 | c & 255
			},
			kP: function(a)
			{
				return (a & 255) << 16 | (a >>> 8 & 255) << 8 | a >>> 16 & 255
			},
			LN: function(a, b, c)
			{
				return Math.min(Math.max(a, b), c)
			},
			nf: function(a)
			{
				var b = (a >>> 16 & 255).toString(16),
					c = (a >>> 8 & 255).toString(16);
				for (a = (a & 255).toString(16); 2 > b.length;) b = "0" + b;
				for (; 2 > c.length;) c =
					"0" + c;
				for (; 2 > a.length;) a = "0" + a;
				return "#" + b + c + a
			},
			pe: function(a)
			{
				return 0 > a ? Math.ceil(a) : Math.floor(a)
			},
			DN: function(a)
			{
				return Math.round(a)
			},
			Au: function(a)
			{
				return Math.ceil(a) == a
			},
			Wp: function(a, b, c, d, e)
			{
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
				a.bezierCurveTo(xm - ox, ye, b, ym + oy, b, ym);
				a.closePath()
			},
			aO: function(a, b)
			{
				a.beginPath();
				a.moveTo(b.left,
					b.top);
				a.lineTo(b.right, b.top);
				a.lineTo(b.right, b.bottom);
				a.lineTo(b.left, b.bottom);
				a.lineTo(b.left, b.top);
				a.closePath();
				a.stroke()
			},
			$N: function(a, b, c, d, e)
			{
				a.beginPath();
				a.moveTo(b, c);
				a.lineTo(d, e);
				a.closePath();
				a.stroke()
			},
			Wm: function(a, b)
			{
				for (var c = a.toString(); 4 > c.length;) c = "0" + c;
				return c + ("." + b)
			},
			xb: function(a, b)
			{
				if (a == b) return !0;
				a = a.toLowerCase();
				b = b.toLowerCase();
				return a == b
			},
			LO: function(a)
			{
				var b = a.lastIndexOf("\\");
				0 < b && (a = a.substring(b + 1));
				return a
			},
			tE: 40,
			fF: [0, 1, 2, 3, 5, 7, 8, 9, 11, 12, 13, 15, 16,
				17, 19, 20, 21, 23, 24, 25, 27, 28, 29, 31, 32, 33, 35, 36, 37, 39, 40, 41, 43, 44, 45, 47, 48, 49, 51, 52
			],
			EO: function(a)
			{
				return a < n.tE ? n.fF[a] : Math.round(96 * a / 72)
			},
			Oo: 0,
			Po: 0,
			lj: 1,
			us: 2,
			No: 8,
			Yh: 4,
			zD: 32,
			ts: 1024,
			AD: 2048,
			Wy: function(a, b, c, d, e, f)
			{
				if (0 == b.length) return 0 != (c & 1024) && (d.right = d.left, d.bottom = d.top), 0;
				e.xi || (a.font = e.$f());
				var g = 0,
					m = String.fromCharCode(10),
					q = String.fromCharCode(13),
					V = b.indexOf(m);
				if (0 <= V)
				{
					var h = new Y;
					h.yy(d);
					var l, k = 0,
						p = 0,
						r;
					do l = -1, k < b.length && (l = b.indexOf(q, k)), r = Math.max(V, l), l == V - 1 && V--, V = b.substring(k,
						V), l = n.gl(a, V, c, h, f, e), p = Math.max(p, h.right - h.left), g += l, h.top += l, h.bottom = d.bottom, h.right = d.right, k = r + 1, V = -1, k < b.length ? V = b.indexOf(m, k) : (l = n.gl(a, "", c, h, f, e), p = Math.max(p, h.right - h.left), g += l, h.top += l, h.bottom = d.bottom, h.right = d.right); while (0 <= V);
					k < b.length && (V = b.substring(k), l = n.gl(a, V, c, h, f, e), p = Math.max(p, h.right - h.left), g += l);
					0 != (c & n.ts) && (d.right = d.left + p, d.bottom = h.bottom);
					return g
				}
				return g = n.gl(a, b, c | n.AD, d, f, e)
			},
			js: null,
			gl: function(a, b, c, d, e, f)
			{
				0 == b.length && (b = " ");
				var g, m;
				g = f.Fe();
				m =
					f.xi ? f.measureText(" ") : a.measureText(" ").width;
				var q = d.right - d.left,
					h = 0,
					l = 0,
					p, k, r, t = 0,
					z = 0,
					v;
				null == n.js && (n.js = Array(100));
				var w, A, P = !1,
					C = !1,
					u = d.top;
				k = g;
				0 != (k & 1) && k++;
				var E = u;
				do {
					k = h;
					r = v = 0;
					z += g;
					do {
						n.js[v] = r;
						v += 1;
						p = l;
						l = -1;
						k < b.length && (l = b.indexOf(" ", k)); - 1 == l && (l = b.length);
						if (l < k)
						{
							r -= m;
							break
						}
						A = b.substring(k, l);
						w = f.xi ? f.measureText(A) : a.measureText(A).width;
						if (r + w > q)
						{
							v--;
							if (0 < v)
							{
								r -= m;
								l = p;
								break
							}
							for (p = k; p < l; p++)
							{
								w = f.xi ? f.measureText(b.substring(p, p + 1)) : a.measureText(b.substring(p, p + 1)).width;
								if (r + w >=
									q)
								{
									p--;
									if (0 < p)
									{
										t = Math.max(r, t);
										0 == (c & n.ts) && (r = 0 != (c & n.lj) ? d.left + (d.right - d.left) / 2 - r / 2 : 0 != (c & n.us) ? d.right - r : d.left, A = b.substring(k, p), e.push(new U(r, u, A)));
										l = p - 1;
										C = P = !0;
										break
									}
									l = p < b.length ? b.indexOf(" ", p) : -1;
									P = !0;
									0 <= l && (C = !0);
									break
								}
								r += w
							}
						}
						if (P) break;
						r += w;
						if (r + m > q) break;
						r += m;
						k = l + 1
					} while (1);
					if (0 == C)
					{
						if (P) break;
						t = Math.max(r, t);
						if (0 == (c & n.ts))
							for (r = 0 != (c & n.lj) ? d.left + (d.right - d.left) / 2 - r / 2 : 0 != (c & n.us) ? d.right - r : d.left, k = h, h = 0; h < v; h++)
							{
								l = -1;
								k < b.length && (l = b.indexOf(" ", k)); - 1 == l && (l = b.length);
								if (l < k) break;
								A = b.substring(k, l);
								e.push(new U(r + n.js[h], u, A));
								k = l + 1
							}
					}
					C = P = !1;
					u += g;
					h = l + 1
				} while (h < b.length);
				d.right = d.left + t;
				d.bottom = E + z;
				return z
			},
			jh: function(a, b, c, d, e, f)
			{
				var g;
				if (e.xi)
					for (f = 0; f < d.length; f++) g = d[f], e.fillText(a, g.text, b + g.x, c + g.y);
				else
					for (a.font = e.$f(), a.fillStyle = n.nf(f), a.textAlign = "left", a.textBaseline = "top", f = 0; f < d.length; f++) g = d[f], a.fillText(g.text, b + g.x, c + g.y)
			},
			wi: function(a, b)
			{
				var c = a.toString();
				if (0 != (b & ba.Xw))
				{
					var d = b & ba.Xw;
					if (c.length > d) c = c.substring(c.length - d);
					else
						for (; c.length < d;) c =
							"0" + c
				}
				return c
			},
			Ut: function(a, b)
			{
				var c;
				if (0 == (b & ba.qD)) c = a.toString();
				else
				{
					var d = Math.floor(((b & ba.oD) >> ba.pD) + 1);
					c = -1;
					0 != (b & ba.sD) ? c = (b & ba.mD) >> ba.nD : 0 != a && -1 < a && 1 > a && (c = d);
					c = 0 > c ? a.toPrecision(d) : a.toFixed(c);
					var e, f, g;
					if (0 != (b & ba.rD))
						for (f = e = 0; f < c.length; f++) g = c.charAt(f), "." != g && "+" != g && "-" != g && "e" != g && "E" != g && e++;
					f = !1;
					"-" == c.charAt(0) && (f = !0, c = c.substr(1));
					for (; e < d;) c = "0" + c, e++;
					f && (c = "-" + c)
				}
				return c
			},
			jP: function(a, b)
			{
				for (var c = a, d = b, e = d.indexOf("\\"); 0 <= e;) c.substring(0, e) == d.substring(0, e) &&
					(d = d.substring(e + 1), c = c.substring(e + 1)), e = d.indexOf("\\", e + 1);
				return c
			}
		},
		Kd = !1,
		Ya = !1,
		hb = !1,
		ib = window.XMLHttpRequest ? new XMLHttpRequest : null;
	if (ib && ib.overrideMimeType) try
	{
		Ya = "string" === typeof(new XMLHttpRequest).responseType, 0 <= navigator.userAgent.toLowerCase().indexOf("safari") && (Ya = !1)
	}
	catch (a)
	{}
	else
	{
		var Kd = !0,
			jb = document.createElement("script");
		jb.type = "text/vbscript";
		jb.innerHTML = 'Function BinFileReaderImpl_IE_VBAjaxLoader(fileName)\n\r\n\t                Dim xhr\n\r\n\t                Set xhr = CreateObject("Microsoft.XMLHTTP")\n\r\n\t                xhr.Open "GET", fileName, False\n\r\n\t                xhr.setRequestHeader "Accept-Charset", "x-user-defined"\n\r\n\t                xhr.send\n\r\n\t                Dim byteArray()\n\r\n\t                if xhr.Status = 200 Then\n\r\n\t                    Dim byteString\n\r\n\t                    Dim i\n\r\n\t                    byteString=xhr.responseBody\n\r\n\t                    ReDim byteArray(LenB(byteString))\n\r\n\t                    For i = 1 To LenB(byteString)\n\r\n\t                        byteArray(i-1) = AscB(MidB(byteString, i, 1))\n\r\n\t                    Next\n\r\n\t                End If\n\r\n\t                BinFileReaderImpl_IE_VBAjaxLoader=byteArray\n\r\n\t            End Function';
		document.head.appendChild(jb)
	}
	if (Ya)
	{
		var Ld = new FileReader;
		try
		{
			Ld.readAsBinaryString && (hb = !0)
		}
		catch (a)
		{}
		Ld = null
	}
	ib = null;
	W.prototype = {
		Ca: function()
		{
			return this.dd.charCodeAt(this.da++) & 255
		},
		getFile: function(a, b, c)
		{
			this.Et = b;
			if (Kd) try
			{
				var d = BinFileReaderImpl_IE_VBAjaxLoader(a).toArray(),
					e, f = d.length;
				f > c && (f = c);
				for (e = 0; e < f; e++) this.dd += String.fromCharCode(d[e]);
				this.end = this.dd.length;
				this.Et()
			}
			catch (q)
			{}
			else
			{
				var g = new XMLHttpRequest;
				g.open("GET", a, !0);
				var m = this;
				Ya ? (g.responseType = "blob", g.onload = function()
				{
					if (4 ==
						g.readyState && 200 == g.status)
					{
						var a = new FileReader;
						a.onloadend = function()
						{
							if (hb) m.dd += a.result;
							else
							{
								var b = new Uint8Array(a.result),
									c;
								for (c = 0; c < b.length; c++) m.dd += String.fromCharCode(b[c])
							}
							m.end = m.dd.length;
							m.Et()
						};
						hb ? a.readAsBinaryString(g.response) : a.readAsArrayBuffer(g.response)
					}
				}) : (g.overrideMimeType("text/plain; charset=x-user-defined"), g.onload = function()
				{
					4 == g.readyState && 200 == g.status && (m.dd += g.responseText, m.end = m.dd.length, m.Et())
				});
				g.send(null)
			}
		},
		GI: function(a)
		{
			this.dd = a;
			this.end = a.length;
			var b = this;
			this.Ca = function()
			{
				return b.dd.charCodeAt(b.da++) & 255
			}
		},
		Wf: function(a, b)
		{
			var c = new W;
			c.dd = this.dd;
			c.offset = a;
			c.da = a;
			c.end = a + b;
			c.ef = this.ef;
			return c
		},
		fC: function(a)
		{
			this.ef = a
		},
		ma: function(a)
		{
			this.da += a
		},
		xq: function()
		{
			return this.da >= this.end
		},
		ob: function()
		{
			return this.Ca()
		},
		o: function()
		{
			var a;
			a = this.Ca();
			return 256 * this.Ca() + a
		},
		S: function()
		{
			var a;
			a = this.Ca();
			a = 256 * this.Ca() + a;
			return 32768 > a ? a : a - 65536
		},
		Yv: function()
		{
			var a;
			a = this.Ca();
			return 256 * this.Ca() + a
		},
		s: function()
		{
			var a, b, c;
			a = this.Ca();
			b = this.Ca();
			c = this.Ca();
			a = 16777216 * this.Ca() + 65536 * c + 256 * b + a;
			return 2147483647 >= a ? a : a - 4294967296
		},
		Vc: function()
		{
			var a, b, c;
			a = this.Ca();
			b = this.Ca();
			c = this.Ca();
			this.Ca();
			return 65536 * a + 256 * b + c
		},
		BB: function()
		{
			var a, b, c;
			a = this.Ca();
			b = this.Ca();
			c = this.Ca();
			a = 16777216 * this.Ca() + 65536 * c + 256 * b + a;
			2147483648 < a && (a -= 4294967295);
			return a / 65536
		},
		dI: function()
		{
			var a, b, c, d, e, f, g;
			a = this.Ca();
			b = this.Ca();
			c = this.Ca();
			d = this.Ca();
			e = this.Ca();
			f = this.Ca();
			g = this.Ca();
			a = 72057594037927936 * this.Ca() + 281474976710656 * g + 1099511627776 *
				f + 4294967296 * e + 16777216 * d + 65536 * c + 256 * b + a;
			0x7fffffffffffffff < a && (a -= 1.8446744073709552E19);
			return a / 4294967296
		},
		Wb: function(a)
		{
			var b = "";
			if (this.ef)
				if (1 > arguments.length)
				{
					if (this.xq()) return b;
					c = this.da;
					for (b = this.Yv(); b && !this.xq();) b = this.Yv();
					b = (this.da - c - 2) / 2;
					this.da = c;
					b = this.Wb(b);
					this.Ca();
					this.Ca()
				}
			else
			{
				b = "";
				c = this.da;
				for (e = 0; e < a; e++)
				{
					d = this.Yv();
					if (0 == d) break;
					b += String.fromCharCode(d)
				}
				this.da = c + 2 * a
			}
			else if (1 > arguments.length)
			{
				if (this.xq()) return b;
				for (var c = this.da, b = this.Ca(); b && !this.xq();) b =
					this.Ca();
				b = this.da - c - 1;
				this.da = c;
				b = this.Wb(b);
				this.Ca()
			}
			else
			{
				for (var d, c = this.da, e = 0; e < a; ++e)
				{
					d = this.Ca();
					if (0 == d) break;
					b += String.fromCharCode(d)
				}
				this.da = c + a
			}
			return b
		},
		seek: function(a)
		{
			a >= this.end && (a = this.end);
			this.da = a
		},
		QI: function(a)
		{
			var b = this.da,
				b = b - a;
			0 > b && (b = 0);
			this.da = b
		},
		hI: function(a)
		{
			var b, c = a.length;
			for (b = 0; b < c; b++) a[b] = this.Ca()
		},
		CB: function(a)
		{
			var b = [],
				c;
			for (c = 0; c < a; c++) b[c] = this.Ca();
			return b
		}
	};
	L.prototype = {
		add: function(a)
		{
			this.Wd.push(a)
		},
		get: function(a)
		{
			return a < this.Wd.length ? this.Wd[a] :
				null
		},
		put: function(a, b)
		{
			this.Wd[a] = b
		},
		set: function(a, b)
		{
			a < this.Wd.length && (this.Wd[a] = b)
		},
		DB: function(a)
		{
			a < this.Wd.length && this.Wd.splice(a, 1)
		},
		indexOf: function(a)
		{
			return this.Wd.indexOf(a)
		},
		contains: function(a)
		{
			return 0 <= this.Wd.indexOf(a)
		},
		EB: function(a)
		{
			a = this.Wd.indexOf(a);
			0 <= a && this.Wd.splice(a, 1)
		},
		size: function()
		{
			return this.Wd.length
		},
		clear: function()
		{
			this.Wd.length = 0
		}
	};
	Y.prototype = {
		load: function(a)
		{
			this.left = a.s();
			this.top = a.s();
			this.right = a.s();
			this.bottom = a.s()
		},
		yy: function(a)
		{
			this.left =
				a.left;
			this.right = a.right;
			this.top = a.top;
			this.bottom = a.bottom
		}
	};
	$a.prototype = {
		$f: function()
		{
			var a;
			a = this.se ? "italic " : "normal ";
			var b = 100 * Math.floor(this.te / 100),
				b = Math.max(b, 100),
				b = Math.min(b, 900);
			a = a + (b + " ") + (this.Sb + "px ");
			return a += this.re
		},
		Fe: function()
		{
			return this.Sb + Math.ceil(this.Sb / 8)
		},
		X: function()
		{
			this.re = "Arial";
			this.Sb = 13;
			this.te = 400;
			this.se = 0
		}
	};
	Oa.separator = "{@24}";
	Oa.qL = 1;
	Oa.pL = 2;
	Oa.prototype = {};
	ia.prototype = {
		measureText: function(a, b)
		{
			b = this.app.ku(b);
			if (b.xi) return b.measureText(a);
			this.Fd.font = b.$f();
			return this.Fd.measureText(a).width
		},
		Vr: function(a, b, c, d, e)
		{
			if (a == this.gH && b == this.cH && c == this.fH && d == this.dH && e == this.bH) return this.eH;
			var f = this.Fd;
			f.clearRect(0, 0, this.width, this.height);
			c || (c = new Y(0, 0, this.width, this.height));
			var g = [];
			d = this.app.ku(d);
			var m = n.Wy(f, a, b, c, d, g);
			if (0 != m)
			{
				var q = 0;
				0 != (b & n.No) ? q = this.height - m : 0 != (b & n.Yh) && (q = this.height / 2 - m / 2);
				n.jh(f, 0, q, g, d, e, 0, 0)
			}
			this.gH = a;
			this.cH = b;
			this.fH = c;
			this.dH = d;
			this.bH = e;
			return this.eH = m
		},
		hA: function(a)
		{
			a ? (this.Fd.fillStyle =
				n.nf(a), this.Fd.fillRect(0, 0, this.width, this.height)) : this.Fd.clearRect(0, 0, this.width, this.height)
		},
		Pq: function(a, b, c, d, e, f, g)
		{
			var m = [];
			c || (c = new Y(0, 0, this.width, this.height));
			e = this.app.ku(e);
			a = n.Wy(this.Fd, a, b, c, e, m);
			if (0 != a) switch (c = 0, 0 != (b & n.No) ? c = this.height - a : 0 != (b & n.Yh) && (c = this.height / 2 - a / 2), f)
			{
				case 1:
					n.jh(this.Fd, 1, c + 1, m, e, g, 0, 0);
					n.jh(this.Fd, 0, c, m, e, d, 0, 0);
					break;
				case 2:
					n.jh(this.Fd, 1, c, m, e, g, 0, 0);
					n.jh(this.Fd, 1, c + 2, m, e, g, 0, 0);
					n.jh(this.Fd, 0, c + 1, m, e, g, 0, 0);
					n.jh(this.Fd, 2, c + 1, m, e, g, 0, 0);
					n.jh(this.Fd, 1, c + 1, m, e, d, 0, 0);
					break;
				case 0:
					n.jh(this.Fd, 0, c, m, e, d, 0, 0)
			}
		},
		resize: function(a, b)
		{
			if (a != this.width || b != this.height) this.width = a, this.height = b, this.canvas.width = a, this.canvas.height = b
		},
		rb: function(a, b, c, d, e)
		{
			a.Ti(this.canvas, b, c, this.width, this.height, d, e)
		}
	};
	Da.NF = [
	{
		Fb: navigator.userAgent,
		Rc: "Chrome",
		dc: "Chrome"
	},
	{
		Fb: navigator.userAgent,
		Rc: "OmniWeb",
		km: "OmniWeb/",
		dc: "OmniWeb"
	},
	{
		Fb: navigator.vendor,
		Rc: "Apple",
		dc: "Safari",
		km: "Version"
	},
	{
		ZH: window.opera,
		dc: "Opera",
		km: "Version"
	},
	{
		Fb: navigator.vendor,
		Rc: "iCab",
		dc: "iCab"
	},
	{
		Fb: navigator.vendor,
		Rc: "KDE",
		dc: "Konqueror"
	},
	{
		Fb: navigator.userAgent,
		Rc: "Firefox",
		dc: "Firefox"
	},
	{
		Fb: navigator.vendor,
		Rc: "Camino",
		dc: "Camino"
	},
	{
		Fb: navigator.userAgent,
		Rc: "Netscape",
		dc: "Netscape"
	},
	{
		Fb: navigator.userAgent,
		Rc: "MSIE",
		dc: "Explorer",
		km: "MSIE"
	},
	{
		Fb: navigator.userAgent,
		Rc: "Gecko",
		dc: "Mozilla",
		km: "rv"
	},
	{
		Fb: navigator.userAgent,
		Rc: "Mozilla",
		dc: "Netscape",
		km: "Mozilla"
	}];
	Da.PF = [
	{
		Fb: navigator.platform,
		Rc: "Win",
		dc: "Windows"
	},
	{
		Fb: navigator.platform,
		Rc: "Mac",
		dc: "MacOS"
	},
	{
		Fb: navigator.userAgent,
		Rc: "iPhone",
		dc: "iOS"
	},
	{
		Fb: navigator.userAgent,
		Rc: "iPod",
		dc: "iOS"
	},
	{
		Fb: navigator.userAgent,
		Rc: "iPad",
		dc: "iOS"
	},
	{
		Fb: navigator.userAgent,
		Rc: "Android",
		dc: "Android"
	},
	{
		Fb: navigator.platform,
		Rc: "Windows Phone",
		dc: "Windows Phone"
	},
	{
		Fb: navigator.platform,
		Rc: "Linux",
		dc: "Linux"
	}];
	Da.prototype = {
		WB: function(a)
		{
			for (var b = 0; b < a.length; b++)
			{
				var c = a[b].Fb,
					d = a[b].ZH;
				this.JC = a[b].km || a[b].dc;
				if (c)
				{
					if (-1 != c.indexOf(a[b].Rc)) return a[b].dc
				}
				else if (d) return a[b].dc
			}
		},
		XB: function(a)
		{
			var b = a.indexOf(this.JC);
			if (-1 != b) return parseFloat(a.substring(b +
				this.JC.length + 1))
		}
	};
	n.MO = function(a, b, c, d)
	{
		var e = document.createElement("canvas");
		e.width = b.width;
		e.height = b.height;
		var f = e.getContext("2d");
		0 == b.lb ? f.drawImage(b.kb, 0, 0) : f.drawImage(a.ca.Bb[b.lb], b.hd, b.jd, b.width, b.height, 0, 0, b.width, b.height);
		var g = f.getImageData(0, 0, b.width, b.height),
			m = d >> 16 & 255,
			q = d >> 8 & 255;
		d &= 255;
		var h = c >> 16 & 255,
			l = c >> 8 & 255;
		c &= 255;
		var n, k, p;
		for (p = 0; p < b.height; p++)
			for (k = 0; k < b.width; k++) n = 4 * (p * b.width + k), g.data[n] == h && g.data[n + 1] == l && g.data[n + 2] == c && (g.data[n] = m, g.data[n + 1] = q, g.data[n +
				2] = d);
		f.putImageData(g, 0, 0);
		f = new fa;
		f.app = a;
		f.width = b.width;
		f.height = b.height;
		f.ya = b.ya;
		f.xa = b.xa;
		f.Ng = b.Ng;
		f.Og = b.Og;
		f.Ja = 0;
		f.kb = e;
		f.jg = b.jg;
		f.rl = b.rl;
		f.th = b.th;
		return f
	};
	va.MD = 1;
	va.XK = 2;
	va.LD = 4;
	va.ID = 8;
	va.prototype = {
		AF: function(a)
		{
			if (this.iG != a.re || this.td != a.Sb) return !1;
			var b = 0 != (this.mz & va.MD),
				c = 0 != a.se;
			if (b != c) return !1;
			b = 0 != (this.mz & va.LD);
			c = 400 < a.te;
			return b != c ? !1 : !0
		},
		Fe: function()
		{
			return this.height + this.OG
		},
		measureText: function(a)
		{
			var b = 0,
				c = a.length,
				d, e;
			for (d = 0; d < c; d++) e = this.It.indexOf(a.charAt(d)),
				b = 0 <= e ? b + (this.Ht[e] + this.wu) : b + this.width;
			return b
		},
		fillText: function(a, b, c, d)
		{
			var e = b.length,
				f, g, m, q, h = this.fg;
			if (0 == (this.Ya & va.ID))
				for (f = 0; f < e; f++) q = this.It.indexOf(b.charAt(f)), 0 <= q ? (m = Math.floor(q / this.Uq), g = q - m * this.Uq, m *= this.height + 1, g *= this.width + 1, 0 == h.lb ? a.drawImage(h.kb, g, m, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height) : a.drawImage(h.app.ca.Bb[h.lb], g + h.hd, m + h.jd, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height), c += this.Ht[q] + this.wu) :
					(a.fillStyle = n.nf(this.color), a.fillRect(c, d, this.width, this.height), c += this.width);
			else
				for (c += this.measureText(b), f = e - 1; 0 <= f; f--) q = this.It.indexOf(b.charAt(f)), 0 <= q ? (c -= this.Ht[q] + this.wu, m = q / this.Uq, g = q - m * this.Uq, m *= this.height + 1, g *= this.width + 1, 0 == h.lb ? a.drawImage(h.kb, g, m, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height) : a.drawImage(h.app.ca.Bb[h.lb], g + h.hd, m + h.jd, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height)) : (c -= this.width, a.fillStyle = n.nf(this.color),
					a.fillRect(c, d, this.width, this.height))
		}
	};
	S.gj = 1;
	S.wJ = 17408;
	S.vJ = 17664;
	S.pJ = 17920;
	S.nJ = 18176;
	S.oJ = 18432;
	S.qJ = 18688;
	S.yJ = 18944;
	S.tJ = 19200;
	S.rJ = 19456;
	S.sJ = 19712;
	S.zJ = 19968;
	S.AJ = 20224;
	S.uJ = 20480;
	S.xJ = 20736;
	S.MC = 983039;
	S.create = function(a)
	{
		var b = !1,
			c = !1,
			d = !1,
			e = !1,
			f = !1,
			g = !1,
			m = !1,
			q = !1,
			h = !1,
			l = a.file.da,
			n = a.file.o(),
			k, p = a.file.s();
		switch (p)
		{
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
				k = new pb;
				break;
			case 131070:
				k = new ACT_STOPSAMPLE;
				break;
			case 327678:
				k = new qb;
				break;
			case 458750:
				k = new ACT_STOPSPESAMPLE;
				break;
			case 524286:
				k = new ACT_PAUSESAMPLE;
				break;
			case 589822:
				k =
					new ACT_RESUMESAMPLE;
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
				k = new ea;
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
				k = new rb;
				break;
			case 131069:
				k = new ACT_PREVLEVEL;
				break;
			case 196605:
				k = new sb;
				break;
			case 262141:
				k = new ACT_PAUSEKEY;
				break;
			case 327677:
				k = new tb;
				break;
			case 393213:
				k = new ub;
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
				k = new vb;
				break;
			case 131065:
				k = new wb;
				break;
			case 196601:
				k = new ACT_NOINPUT;
				break;
			case 262137:
				k = new ACT_RESTINPUT;
				break;
			case 327673:
				k = new ACT_ADDSCORE;
				break;
			case 393209:
				k = new xb;
				break;
			case 458745:
				k = new yb;
				break;
			case 524281:
				k = new Pa;
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
				k = new zb;
				break;
			case 131067:
				k = new ACT_CREATEBYNAME;
				break;
			case 5242883:
				k = new ACT_STRDESTROY;
				break;
			case 5308419:
				k = new Ab;
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
				k =
					new ACT_QASK;
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
				k =
					new ACT_CCARESUMEAPP;
				break;
			case 6094857:
				k = new ACT_CCASETWIDTH;
				break;
			case 6160393:
				k = new ACT_CCASETHEIGHT;
				break;
			default:
				switch (p & 4294901760)
				{
					case 65536:
						k = new Bb;
						break;
					case 131072:
						k = new ACT_EXTSETX;
						break;
					case 196608:
						k = new ACT_EXTSETY;
						break;
					case 262144:
						k = new Cb;
						break;
					case 327680:
						k = new Db;
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
						k = new Eb;
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
						k = new ACT_EXTLOOKAT;
						break;
					case 983040:
						k = new Fb;
						break;
					case 1048576:
						k = new Gb;
						break;
					case 1114112:
						k = new Hb;
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
						k = new Ib;
						break;
					case 1638400:
						k = new ACT_EXTSHUFFLE;
						break;
					case 1703936:
						k = new Jb;
						break;
					case 1769472:
						k = new Kb;
						break;
					case 1835008:
						k = new ACT_EXTDISPLAYDURING;
						break;
					case 1900544:
						k = new Lb;
						break;
					case 1966080:
						k = new Mb;
						break;
					case 2031616:
						k = new Nb;
						e = !0;
						break;
					case 2097152:
						k = new Pb;
						f = !0;
						break;
					case 2162688:
						k = new Rb;
						g = !0;
						break;
					case 2228224:
						k = new ACT_EXTDISPATCHVAR;
						break;
					case 2293760:
						k = new ACT_EXTSETFLAG;
						m = !0;
						break;
					case 2359296:
						k = new ACT_EXTCLRFLAG;
						q = !0;
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
						k =
							new ACT_EXTSETFONTSIZE;
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
						k = new ACT_EXTAPPLYFORCE;
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
						k = new td
				}
		}
		if (null != k)
		{
			k.sa = p;
			k.Kb = a.file.S();
			k.Xa = a.file.S();
			k.Qa = a.file.ob();
			k.lf = a.file.ob();
			k.rd = a.file.ob();
			k.Sm = a.file.ob();
			if (0 < k.rd)
				for (k.H = Array(k.rd), p = 0; p < k.rd; p++) k.H[p] = Sa.create(a);
			if (b || c || d) c = k.H[0], k.kd = c.value, c = k.H[1], k.value = c.Da[0].value;
			if (e || f || g) b = null, c = k.H[0], 53 != c.code && (d = c.value, c = k.H[1], 0 <= d &&
				2 == c.Da.length && (0 >= c.Da[1].code || 1310720 <= c.Da[1].code) && (65535 == c.Da[0].code || 1572863 == c.Da[0].code) && (e ? (b = new Ob, b.kd = d, b.value = c.Da[0].value) : f ? (b = new Qb, b.kd = d, b.value = c.Da[0].value) : g && (b = new Sb, b.kd = d, b.value = c.Da[0].value)), null != b && (b.sa = k.sa, b.Kb = k.Kb, b.Xa = k.Xa, b.Qa = k.Qa, b.lf = k.lf, b.rd = k.rd, b.Sm = k.Sm, b.H = k.H, k = b));
			if (m || q || h) b = null, e = k.H[0], 2 == e.Da.length && (0 >= e.Da[1].code || 1310720 <= e.Da[1].code) && 65535 == e.Da[0].code && (m ? (b = new ACT_EXTSETFLAGCONST, b.O = 1 << e.Da[0].value) : q ? (b = new ACT_EXTCLRFLAGCONST,
				b.O = 1 << e.Da[0].value) : h && (b = new ACT_EXTCHGFLAGCONST, b.O = 1 << e.Da[0].value)), null != b && (b.sa = k.sa, b.Kb = k.Kb, b.Xa = k.Xa, b.Qa = k.Qa, b.lf = k.lf, b.rd = k.rd, b.Sm = k.Sm, b.H = k.H, k = b)
		}
		a.file.seek(l + n);
		return k
	};
	ob.TK = 1;
	ea.prototype = {
		Ea: function() {}
	};
	pb.prototype = {
		Ea: function(a)
		{
			var b = this.H[0];
			a.h.Qc.play(b.uw, 1, -1, 0 != (b.qC & La.UE))
		}
	};
	qb.prototype = {
		Ea: function(a)
		{
			var b = this.H[0],
				c = a.Ld(this.H[1]);
			a.h.Qc.play(b.uw, c, -1, 0 != (b.qC & La.UE))
		}
	};
	rb.prototype = {
		Ea: function(a)
		{
			a.ib = h.Zo;
			a.h.Th = !0
		}
	};
	sb.prototype = {
		Ea: function(a)
		{
			var b;
			if (26 == this.H[0].code)
			{
				if (b = this.H[0].value, -1 == a.h.YD(b)) return
			}
			else
			{
				b = a.Ld(this.H[0]) - 1;
				if (0 > b || 4096 <= b) return;
				a.h.FN && b++;
				b |= 32768
			}
			a.ib = h.Yo;
			a.am = b;
			a.h.Th = !0
		}
	};
	tb.prototype = {
		Ea: function(a)
		{
			a.h.Th = !0;
			a.h.Tz && (a.ib = h.Xo)
		}
	};
	ub.prototype = {
		Ea: function(a)
		{
			a.ib = h.Ks
		}
	};
	vb.prototype = {
		Ea: function(a)
		{
			var b = a.Ld(this.H[0]),
				c = this.Kb,
				d = a.h.cn();
			d[c] = b;
			a.Fw(c, p.op, d[c])
		}
	};
	Pa.prototype = {
		Ea: function(a)
		{
			var b = a.Ld(this.H[0]),
				c = this.Kb,
				b = a.h.Lj()[c] - b;
			a.Dp(c, b)
		}
	};
	wb.prototype = {
		Ea: function(a)
		{
			var b = a.Ld(this.H[0]);
			a.Dp(this.Kb, b)
		}
	};
	xb.prototype = {
		Ea: function(a)
		{
			var b = a.Ld(this.H[0]),
				c = this.Kb,
				b = a.h.Lj()[c] + b;
			a.Dp(c, b)
		}
	};
	yb.prototype = {
		Ea: function(a)
		{
			var b = a.Ld(this.H[0]),
				c = this.Kb,
				d = a.h.cn();
			d[c] -= b;
			0 > d[c] && (d[c] = 0);
			a.Fw(c, p.op, d[c])
		}
	};
	Pa.prototype = {
		Ea: function(a)
		{
			var b = a.Ld(this.H[0]),
				c = this.Kb,
				b = a.h.Lj()[c] - b;
			a.Dp(c, b)
		}
	};
	zb.prototype = {
		Ea: function(a)
		{
			var b = this.H[0],
				c = new Ga;
			b.Ml(a, 17, c) && (c.vt ? (this.Qa |= S.gj, a.j.ik = !0) : this.Qa &= ~S.gj, b = a.Um(b.Jm, b.Ft, c.x, c.y, c.dir, 0, c.rn, -1), 0 <= b && (b = a.F[b], a.j.lh(b), b && 32 <=
				b.wa && a.kF(b), a.To(b) || null != a.ZO && a.Ph.bI(b)))
		}
	};
	Ab.prototype = {
		Ea: function(a)
		{
			a.bJ(this, this.H[1].value)
		}
	};
	Bb.prototype = {
		Ea: function(a)
		{
			var b = a.j.Kc(this);
			if (null != b)
			{
				var c = new Ga;
				this.H[0].Ml(a, 1, c) && (h.ac(b, c.x), h.bc(b, c.y), -1 != c.dir && (c = c.dir &= 31, a.Lb(b) != c && (b.b.Ma = c, b.b.L = !0, b.w.$.Te(c), 2 == b.wa && b.U.Xk(0))))
			}
		}
	};
	Cb.prototype = {
		Ea: function(a)
		{
			a = a.j.Kc(this);
			null != a && null != a.w && a.w.$.stop()
		}
	};
	Db.prototype = {
		Ea: function(a)
		{
			a = a.j.Kc(this);
			null != a && null != a.w && a.w.$.start()
		}
	};
	Eb.prototype = {
		Ea: function(a)
		{
			a =
				a.j.Kc(this);
			null != a && null != a.w && null != a.w.$.De && a.w.$.De()
		}
	};
	Fb.prototype = {
		Ea: function(a)
		{
			a = a.j.Kc(this);
			null != a && (a.U.co = !0)
		}
	};
	Gb.prototype = {
		Ea: function(a)
		{
			a = a.j.Kc(this);
			null != a && (a.U.co = !1)
		}
	};
	Hb.prototype = {
		Ea: function(a)
		{
			var b = a.j.Kc(this);
			null != b && (a = 10 == this.H[0].code ? this.H[0].value : a.Ld(this.H[0]), b.U.Em(a), b.b.L = !0)
		}
	};
	Ib.prototype = {
		Ea: function(a)
		{
			var b = a.j.Kc(this);
			null != b && (3 == b.wa ? 0 != (b.UB & h.ss) ? (b.D.Kn(), b.D.V &= ~w.Sf, b.W |= F.Kf) : (b.W |= F.Tg, a.kf(b.yb)) : 0 == (b.W & F.Tg) && (b.W |= F.Tg, 0 != (b.ka &
				z.ei) || 0 != (b.ka & z.fi) ? a.Qz(b) : (b.jn = !1, a.kf(b.yb))))
		}
	};
	Jb.prototype = {
		Ea: function(a)
		{
			a = a.j.Kc(this);
			null != a && h.FH(a)
		}
	};
	Kb.prototype = {
		Ea: function(a)
		{
			a = a.j.Kc(this);
			null != a && h.GH(a)
		}
	};
	Lb.prototype = {
		Ea: function(a)
		{
			var b = a.j.Kc(this);
			if (null != b)
			{
				var c = this.H[0],
					d = new Ga;
				c.Ml(a, 17, d) && b.oC(c, d.x, d.y, d.dir)
			}
		}
	};
	Mb.prototype = {
		Ea: function(a)
		{
			var b = a.j.Kc(this);
			if (null != b)
			{
				var c = new Ga;
				if (this.H[0].Ml(a, 17, c))
				{
					var d = new Ga;
					this.H[1].Ml(a, 0, d) && b.oC(this.H[0], c.x, c.y, h.yG(d.x - c.x, d.y - c.y))
				}
			}
		}
	};
	Nb.prototype = {
		Ea: function(a)
		{
			var b =
				a.j.Kc(this);
			if (null != b)
			{
				var c;
				c = 53 == this.H[0].code ? a.Ld(this.H[0]) : this.H[0].value;
				0 <= c && null != b.R && (c >= b.R.Na.length && b.R.ui(c + 10), a = a.fn(this.H[1]), b.R.Na[c] = a)
			}
		}
	};
	Ob.prototype = {
		Ea: function(a)
		{
			a = a.j.Kc(this);
			null != a && 0 <= this.kd && null != a.R && (this.kd >= a.R.Na.length && a.R.ui(this.kd + 10), a.R.Na[this.kd] = this.value)
		}
	};
	Pb.prototype = {
		Ea: function(a)
		{
			var b = a.j.Kc(this);
			if (null != b)
			{
				var c;
				c = 53 == this.H[0].code ? a.Ld(this.H[0]) : this.H[0].value;
				0 <= c && null != b.R && (c >= b.R.Na.length && b.R.ui(c + 10), a = a.fn(this.H[1]),
					b.R.Na[c] += a)
			}
		}
	};
	Qb.prototype = {
		Ea: function(a)
		{
			a = a.j.Kc(this);
			null != a && 0 <= this.kd && null != a.R && (this.kd >= a.R.Na.length && a.R.ui(this.kd + 10), a.R.Na[this.kd] += this.value)
		}
	};
	Rb.prototype = {
		Ea: function(a)
		{
			var b = a.j.Kc(this);
			if (null != b)
			{
				var c;
				c = 53 == this.H[0].code ? a.Ld(this.H[0]) : this.H[0].value;
				0 <= c && null != b.R && (c >= b.R.Na.length && b.R.ui(c + 10), a = a.fn(this.H[1]), b.R.Na[c] -= a)
			}
		}
	};
	Sb.prototype = {
		Ea: function(a)
		{
			a = a.j.Kc(this);
			null != a && 0 <= this.kd && null != a.R && (this.kd >= a.R.Na.length && a.R.ui(this.kd + 10), a.R.Na[this.kd] -=
				this.value)
		}
	};
	J.xx = 6;
	J.gD = -983041;
	J.hD = -1507329;
	J.iD = -1572865;
	J.create = function(a)
	{
		var b = a.file.da,
			c = a.file.o(),
			d, e = a.file.s();
		switch (e)
		{
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
				d = new ta;
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
				d = new ab;
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
				d =
					new CND_NOSAMPLAYING;
				break;
			case -2:
				d = new CND_NOSPSAMPLAYING;
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
				d = new ab;
				break;
			case -3:
				d = new Tb;
				break;
			case -458756:
				d = new CND_EVERY2;
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
				d =
					new Ub;
				break;
			case -131076:
				d = new CND_TIMER;
				break;
			case -65540:
				d = new CND_TIMERINF;
				break;
			case -4:
				d = new CND_TIMERSUP;
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
				d = new CND_MCLICK;
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
				d = new Vb;
				break;
			case -327687:
				d = new CND_JOYPUSHED;
				break;
			case -262151:
				d = new Wb;
				break;
			case -196615:
				d = new CND_JOYPRESSED;
				break;
			case -131079:
				d = new CND_LIVE;
				break;
			case -65543:
				d = new Xb;
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
				d =
					new CND_CHOOSEALLINZONE;
				break;
			case -1048581:
				d = new CND_CHOOSEALL;
				break;
			case -983045:
				d = new CND_CHOOSEZONE;
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
				switch (e & 4294901760)
				{
					case -2818048:
						d = new bb;
						break;
					case -2752512:
						d = new bb;
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
						d = new Yb;
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
						d = new Zb;
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
						d = new CND_EXTCMPX;
						break;
					case -1048576:
						d = new CND_EXTCMPY;
						break;
					case -983040:
						d = new CND_EXTCMPSPEED;
						break;
					case -917504:
						d = new $b;
						break;
					case -851968:
						d = new ac;
						break;
					case -786432:
						d = new bc;
						break;
					case -720896:
						d = new CND_EXTINPLAYFIELD;
						break;
					case -655360:
						d = new cc;
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
						d = new dc;
						break;
					case -196608:
						d = new ec;
						break;
					case -131072:
						d = new fc;
						break;
					case -65536:
						d = new CND_EXTCMPFRAME;
						break;
					default:
						d = new ud
				}
		}
		if (null != d && (d.sa = e, d.Kb = a.file.S(), d.Xa = a.file.S(), d.Qa = a.file.ob(), d.lf = a.file.ob(), d.rd = a.file.ob(), d.Sm = a.file.ob(), d.Zt = a.file.o(), 0 < d.rd))
			for (d.H = Array(d.rd), e = 0; e < d.rd; e++) d.H[e] = Sa.create(a);
		a.file.seek(b + c);
		return d
	};
	J.Yq = function(a)
	{
		return a.lf & Q.Fk ? !1 : !0
	};
	J.Di = function(a)
	{
		return a.lf & Q.Fk ? !0 : !1
	};
	J.VA =
		function(a, b)
		{
			return a.lf & Q.Fk ? !b : b
		};
	J.EF = function(a)
	{
		var b = a.j.Se,
			c = b.Ij;
		a = b.Ij = a.Yb;
		if (a == c) return !1;
		a--;
		return a == c ? !1 : !0
	};
	J.Lt = function(a, b)
	{
		var c, d = b.pq;
		if (null == d) d = new L, b.pq = d;
		else
			for (c = 0; c < d.size(); c++)
				if (d.get(c) == a) return !1;
		d.add(a);
		d = b.Lz;
		if (null == d) return !0;
		for (c = 0; c < d.size(); c++)
			if (d.get(c) == a) return !1;
		return !0
	};
	J.KN = function(a, b)
	{
		return 0 == b ? !1 : b == a.Yb || b == a.Yb - 1 ? !0 : !1
	};
	ta.prototype = {
		wc: function()
		{
			return !1
		},
		jb: function()
		{
			return !1
		}
	};
	ab.prototype = {
		wc: function()
		{
			return !0
		},
		jb: function()
		{
			return !0
		}
	};
	J.prototype = {
		uy: function(a)
		{
			return J.Lt(this.Zt, a)
		},
		bz: function(a, b)
		{
			var c = a.j.mh(this.Xa),
				d = a.j.Yf,
				e = this.H[0],
				f;
			f = e.Da[0];
			if (f.code != ca.dx && f.code != ca.HD || 0 != e.Da[1].code)
				for (; null != c;) f = a.Ld(e), 0 == b.Yt(c, f, e.bl) && (d--, a.j.Yd()), c = a.j.nh();
			else
				for (f = f.value; null != c;) 0 == b.Yt(c, f, e.bl) && (d--, a.j.Yd()), c = a.j.nh();
			return 0 != d ? !0 : !1
		},
		hl: function(a, b)
		{
			for (var c = a.j.mh(this.Xa), d = a.j.Yf; null != c;) 0 == b.Rm(c) && (d--, a.j.Yd()), c = a.j.nh();
			return 0 != d ? !0 : !1
		},
		yu: function(a)
		{
			if (a.j.Qh) return a.j.mh(this.Xa), a.j.mh(this.H[0].ec),
				!1;
			var b = !1;
			0 != (this.lf & Q.Fk) && (b = !0);
			var c = a.j.mh(this.Xa);
			if (null == c) return J.Di(this);
			var d = a.j.Yf,
				e = this.H[0].Ch;
			0 <= e ? (a.xu[0] = e, a.xu[1] = this.H[0].ec, e = a.xu) : e = a.j.Pb[this.H[0].ec & 32767].Ba;
			var f, g = new L,
				m, q;
			do {
				f = a.yl(c, c.b.Ia, c.b.$a, c.b.ub, c.b.vb, c.v, c.u, e);
				if (null == f) 0 == b && (d--, a.j.Yd());
				else
				{
					c = !1;
					for (m = 0; m < f.size(); m++) q = f.get(m), 0 == (q.W & F.Tg) && (g.add(q), c = !0);
					1 == b ? 1 == c && (d--, a.j.Yd()) : 0 == c && (d--, a.j.Yd())
				}
				c = a.j.nh()
			} while (null != c);
			if (0 == d) return !1;
			c = a.j.mh(this.H[0].ec);
			if (null == c) return !1;
			d = a.j.Yf;
			if (0 == b)
			{
				do {
					for (m = 0; m < g.size() && (q = g.get(m), c != q); m++);
					m == g.size() && (d--, a.j.Yd());
					c = a.j.nh()
				} while (null != c);
				return 0 != d ? !0 : !1
			}
			do {
				for (m = 0; m < g.size(); m++)
					if (q = g.get(m), c == q)
					{
						d--;
						a.j.Yd();
						break
					} c = a.j.nh()
			} while (null != c);
			return 0 != d ? !0 : !1
		}
	};
	Tb.prototype = {
		wc: function(a)
		{
			return 2 < a.Yb ? !1 : !0
		},
		jb: function(a)
		{
			return 2 < a.Yb ? !1 : !0
		}
	};
	Ub.prototype = {
		wc: function(a)
		{
			return this.jb(a)
		},
		jb: function(a)
		{
			var b = this.H[0];
			b.dl -= a.oo;
			if (0 < b.dl) return !1;
			b.dl += b.Fj;
			return !0
		}
	};
	Vb.prototype = {
		wc: function(a)
		{
			return this.jb(a)
		},
		jb: function(a)
		{
			return 0 == a.h.Uc[this.H[0].key] ? J.Di(this) : J.EF(a) ? J.Yq(this) : J.Di(this)
		}
	};
	Wb.prototype = {
		wc: function(a)
		{
			return this.jb(a)
		},
		jb: function(a)
		{
			return 0 != a.h.Lj()[this.Kb] ? !1 : !0
		}
	};
	Xb.prototype = {
		wc: function(a)
		{
			return this.jb(a)
		},
		jb: function(a)
		{
			var b = a.h.cn();
			a = a.fn(this.H[0]);
			return h.Kt(b[this.Kb], a, this.H[0].bl)
		}
	};
	Yb.prototype = {
		wc: function(a, b)
		{
			return null == b ? this.jb(a) : 0 <= this.Kb ? b.zb != this.Kb ? !1 : !0 : this.cz(a, 1)
		},
		jb: function(a)
		{
			return this.cz(a, 0)
		},
		cz: function(a, b)
		{
			var c = this.Xa;
			if (0 ==
				(c & 32768)) return c = a.P[c], 0 == c.rg ? !0 : !1;
			if (32767 == (c & 32767)) return !1;
			var d = a.j.Pb[c & 32767],
				e = 0,
				f;
			for (f = 0; f < d.Ba.length; f += 2) c = a.P[d.Ba[f + 1]], e += c.rg;
			return 0 == e - b ? !0 : !1
		}
	};
	Zb.prototype = {
		wc: function(a)
		{
			return this.jb(a)
		},
		jb: function(a)
		{
			var b = a.j.mh(this.Xa);
			if (null == b) return !1;
			var c = a.j.Yf,
				d, e = this.H[1];
			do d = 53 == this.H[0].code ? a.Ld(this.H[0]) : this.H[0].value, 0 <= d && null != b.R ? (b = d < b.R.Na.length ? b.R.mq(d) : 0, d = a.fn(e), 0 == h.Kt(b, d, e.bl) && (c--, a.j.Yd())) : (c--, a.j.Yd()), b = a.j.nh(); while (null != b);
			return 0 !=
				c
		}
	};
	bb.prototype = {
		wc: function(a)
		{
			return this.jb(a)
		},
		jb: function(a)
		{
			var b = a.j.mh(this.Xa);
			if (null == b) return !1;
			var c = a.j.Yf,
				d = this.H[0].value,
				e = this.H[1],
				f = e.Da[0].value;
			do 0 <= d && null != b.R ? (b = d < b.R.Na.length ? b.R.mq(d) : 0, 0 == h.Kt(b, f, e.bl) && (c--, a.j.Yd())) : (c--, a.j.Yd()), b = a.j.nh(); while (null != b);
			return 0 != c
		}
	};
	$b.prototype = n.extend(new J,
	{
		wc: function(a, b)
		{
			for (var c = a.F[a.j.KB], d = this.Kb, e = this.H[0], f = e.Ch;;)
			{
				if (d == b.zb)
				{
					if (f == c.zb) break;
					if (0 <= f) return !1;
					if (this.$k(a, e.ec, c.zb)) break;
					return !1
				}
				if (f == b.zb)
				{
					if (d ==
						c.zb) break;
					if (0 <= d) return !1;
					if (this.$k(a, this.Xa, c.zb)) break;
					return !1
				}
				if (0 > d)
				{
					if (0 > f)
					{
						if (this.$k(a, this.Xa, b.zb))
						{
							if (this.$k(a, e.ec, c.zb)) break;
							if (0 == this.$k(a, e.ec, b.zb)) return !1
						}
						if (this.$k(a, this.Xa, c.zb)) break
					}
					else if (f == c.zb) break;
					return !1
				}
				if (0 <= f || d != c.zb) return !1;
				break
			}
			d = c.kn << 16 | this.Zt & 65535;
			if (0 == J.Lt(d, b))
			{
				if (0 == (a.j.Se.Ka & D.Gk)) return !1;
				a.j.Pl = !0
			}
			d = b.kn << 16 | this.Zt & 65535;
			if (0 == J.Lt(d, c))
			{
				if (0 == (a.j.Se.Ka & D.Gk)) return !1;
				a.j.Pl = !0
			}
			a.j.lh(b);
			a.j.lh(c);
			c.w.$.Pd == a.Wc ? b.w.$.Pd = a.Wc : b.w.$.Pd ==
				a.Wc && (c.w.$.Pd = a.Wc);
			return !0
		},
		jb: function(a)
		{
			return this.yu(a)
		},
		$k: function(a, b, c)
		{
			if (-1 == b) return !1;
			a = a.j.Pb[b & 32767];
			for (b = 0; b < a.Ba.length; b += 2)
				if (a.Ba[b] == c) return !0;
			return !1
		}
	});
	ac.prototype = n.extend(new J,
	{
		wc: function(a, b)
		{
			return this.uy(b) ? (a.j.lh(b), !0) : 0 == (a.j.Se.Ka & D.Gk) ? !1 : a.j.Pl = !0
		},
		jb: function(a)
		{
			return J.VA(this, this.hl(a, this))
		},
		Rm: function(a)
		{
			return a.c.al(a, a.b.Ia, a.b.$a, a.b.ub, a.b.vb, a.v, a.u, 0, qa.Sd)
		}
	});
	bc.prototype = n.extend(new J,
	{
		wc: function(a, b)
		{
			return 0 == (this.H[0].value & a.j.Bc) ?
				!1 : this.uy(b) ? (a.j.lh(b), !0) : 0 == (a.j.Se.Ka & D.Gk) ? !1 : a.j.Pl = !0
		},
		jb: function(a)
		{
			return this.hl(a, this)
		},
		Rm: function(a)
		{
			return J.VA(this, 0 != (a.w.bm & ya.Zw))
		}
	});
	cc.prototype = n.extend(new J,
	{
		wc: function(a)
		{
			return this.hl(a, this)
		},
		jb: function(a)
		{
			return this.hl(a, this)
		},
		Rm: function(a)
		{
			var b = a.v - a.fa,
				c = a.u - a.ga;
			return 0 != a.c.or(b, c, b + a.K, c + a.J) ? J.Yq(this) : J.Di(this)
		}
	});
	dc.prototype = n.extend(new J,
	{
		wc: function(a)
		{
			return this.yu(a)
		},
		jb: function(a)
		{
			return this.yu(a)
		}
	});
	ec.prototype = n.extend(new J,
	{
		wc: function(a)
		{
			return this.jb(a)
		},
		jb: function(a)
		{
			return 10 == this.H[0].code ? this.hl(a, this) : this.bz(a, this)
		},
		Rm: function(a)
		{
			return this.H[0].value != a.U.Jh ? J.Di(this) : 0 != a.U.de ? J.Yq(this) : J.Di(this)
		},
		Yt: function(a, b)
		{
			return b != a.U.Jh ? J.Di(this) : 0 != a.U.de ? J.Yq(this) : J.Di(this)
		}
	});
	fc.prototype = n.extend(new J,
	{
		wc: function(a, b)
		{
			if ((10 == this.H[0].code ? this.H[0].value : a.Ld(this.H[0])) != a.j.Bc) return !1;
			a.j.lh(b);
			return !0
		},
		jb: function(a)
		{
			return 10 == this.H[0].code ? this.hl(a, this) : this.bz(a, this)
		},
		Rm: function(a)
		{
			return this.H[0].value != a.U.Jh ?
				!1 : 0 == a.U.de ? !0 : !1
		},
		Yt: function(a, b)
		{
			return b != a.U.Jh ? !1 : 0 == a.U.de ? !0 : !1
		}
	});
	ca.PK = 8960;
	ca.RK = 9216;
	ca.OK = 9472;
	ca.SK = 9728;
	ca.MK = 9984;
	ca.QK = 10752;
	ca.NK = 11008;
	ca.Cs = 262143;
	ca.dx = 65535;
	ca.HD = 1572863;
	ca.create = function(a)
	{
		var b = a.da,
			c, d = a.s();
		switch (d)
		{
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
				c =
					new EXP_OR;
				break;
			case 1179648:
				c = new EXP_XOR;
				break;
			case 65535:
				c = new db;
				break;
			case 131071:
				c = new EXP_RANDOM;
				break;
			case 196607:
				c = new EXP_VARGLO;
				break;
			case 262143:
				c = new lc;
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
				c = new cb;
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
				c =
					new EXP_HEX;
				break;
			case 1179647:
				c = new EXP_BIN;
				break;
			case 1245183:
				c = new EXP_EXP;
				break;
			case 1310719:
				c = new EXP_LEFT;
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
				c = new gc;
				break;
			case 1638399:
				c = new kc;
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
				c = new jc;
				break;
			case 3407871:
				c = new EXP_LOWER;
				break;
			case 3473407:
				c = new EXP_UPPER;
				break;
			case 3538943:
				c =
					new EXP_FIND;
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
				c = new cb;
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
				c =
					new EXP_GETSAMPLEMAINVOL;
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
				c =
					new EXP_GETFRAMEBKDCOLOR;
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
				c = new EXP_YMOUSE;
				break;
			case 196602:
				c =
					new EXP_MOUSEWHEELDELTA;
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
				c = new EXP_CVALUE;
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
				switch (d & 4294901760)
				{
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
						c = new EXP_EXTDEC;
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
						c = new hc;
						break;
					case 1114112:
						c = new EXP_EXTGETSEMITRANSPARENCY;
						break;
					case 1179648:
						c = new EXP_EXTNMOVE;
						break;
					case 1245184:
						c = new ic;
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
						c = new mc;
						break;
					case 2031616:
						c = new nc;
						break;
					case 2097152:
						c = new EXP_EXTDISTANCE;
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
						c = new EXP_EXTGETNAME;
						break;
					default:
						c = new sd
				}
		}
		if (null != c && (c.code = d, 0 != d))
		{
			var e = a.o(),
				f;
			switch (d)
			{
				case 262143:
					c.Fb = a.Wb();
					break;
				case 65535:
					c.value = a.s();
					break;
				case 1572863:
					c.value = a.dI();
					break;
				case 1638399:
					a.ma(4);
					c.xh = a.o();
					break;
				case 3342335:
					a.ma(4);
					c.xh = a.o();
					break;
				default:
					if (f = d & 65535, 0 != (f & 32768) && (f -= 65536), 2 <= f || f == p.Bx) switch (c.Ch = a.S(), c.ec = a.S(), d & 4294901760)
					{
						case 1048576:
							c.xh = a.o();
							break;
						case 1245184:
							c.xh = a.o()
					}
			}
			a.seek(b + e)
		}
		return c
	};
	cb.prototype = {
		evaluate: function(a)
		{
			a.Xc[a.wb] = ""
		}
	};
	ua.prototype = {
		evaluate: function(a)
		{
			a.Xc[a.wb] = 0
		}
	};
	db.prototype = {
		evaluate: function(a)
		{
			a.Xc[a.wb] = this.value
		}
	};
	gc.prototype = {
		evaluate: function(a)
		{
			a.Xc[a.wb] = this.value;
			a.jl = !0
		}
	};
	hc.prototype = {
		evaluate: function(a)
		{
			var b = a.j.gn(this.ec);
			null == b ? a.Xc[a.wb] = 0 : (b = null != b.R ? b.R.mq(this.xh) : 0, n.Au(b) || (a.jl = !0), a.Xc[a.wb] = b)
		}
	};
	ic.prototype = {
		evaluate: function(a)
		{
			var b = a.j.gn(this.ec);
			a.Xc[a.wb] = null == b ? "" :
				b.R.Cz(this.xh)
		}
	};
	jc.prototype = {
		evaluate: function(a)
		{
			a.Xc[a.wb] = a.h.vz(this.xh)
		}
	};
	kc.prototype = {
		evaluate: function(a)
		{
			a.Xc[a.wb] = a.h.wz(this.xh)
		}
	};
	lc.prototype = {
		evaluate: function(a)
		{
			a.Xc[a.wb] = this.Fb
		}
	};
	mc.prototype = {
		evaluate: function(a)
		{
			var b = a.j.gn(this.ec);
			a.Ef++;
			var c = a.Hz();
			null != b && null != b.R && 0 <= c && c < b.R.Na.length ? (b = b.R.mq(c), n.Au(b) || (a.jl = !0), a.Xc[a.wb] = b) : a.Xc[a.wb] = 0
		}
	};
	nc.prototype = {
		evaluate: function(a)
		{
			var b = a.j.gn(this.ec);
			a.Ef++;
			var c = a.Hz();
			a.Xc[a.wb] = null != b && null != b.R && 0 <= c && c < Ca.Lx ?
				b.R.Cz(c) : ""
		}
	};
	la.FusionVersion = "Clickteam Fusion HTML5 Exporter Build 291.2";
	l.Of = 4;
	l.RM = 770;
	l.um = 8;
	l.iL = 2;
	l.WD = 4;
	l.jL = 8;
	l.hx = 16;
	l.hL = 128;
	l.gL = 256;
	l.fL = 512;
	l.VD = 1024;
	l.eL = 2048;
	l.TD = 1;
	l.RD = 4;
	l.SD = 8;
	l.bL = 64;
	l.$K = 128;
	l.ZK = 512;
	l.aL = 1024;
	l.UD = 4096;
	l.dL = 4096;
	l.cL = 8192;
	l.QM = 1;
	l.zp = 0;
	l.Uk = 1;
	l.ht = 2;
	l.Sk = 3;
	l.yp = 4;
	l.xp = 5;
	l.Tk = 6;
	l.UM = 7;
	l.ox = 203;
	l.hN = 37;
	l.tN = 39;
	l.wN = 38;
	l.eN = 40;
	l.af = 200;
	l.kt = 201;
	l.Cp = 202;
	l.jN = 96;
	l.kN = 97;
	l.lN = 98;
	l.mN = 99;
	l.nN = 100;
	l.oN = 101;
	l.pN = 102;
	l.qN = 103;
	l.rN = 104;
	l.sN = 105;
	l.uN = 83;
	l.dN = 68;
	l.fN =
		69;
	l.xN = 88;
	l.gN = 123;
	l.vN = 16;
	l.cN = 17;
	l.iN = 18;
	l.vK = 0;
	l.qK = 1;
	l.rK = 2;
	l.sK = 3;
	l.tK = 4;
	l.uK = 5;
	l.Mw = 4;
	l.SJ = 128;
	l.OC = 1;
	l.Iw = 4;
	l.DJ = 65536;
	l.ns = 32768;
	l.RC = 1048576;
	l.QC = 8388608;
	l.Xh = 16777216;
	l.PC = 33554432;
	l.NC = 67108864;
	l.ad = 10;
	l.ex = 592880741;
	l.uj = 1770410840;
	l.uE = 300;
	la.loadApplication = eb;
	la.loadInfo = oc;
	l.prototype = {
		pH: function()
		{
			var a = this.pn.s();
			0 > this.uq && (this.uq = a);
			a != this.uq && (this.pn.fC(!0), a = this.pn.Wb(), window.open(this.tq + a, "_self"));
			this.on = 25
		},
		load: function()
		{
			this.EH = this.file.o();
			this.Xp = 1;
			this.Eq = new W;
			
			var a = this.file.s();
			var parti = this.path.split('/');
			var filePath = parti[0] + '/' + this.Xp + parti[1];

			this.Eq.getFile(filePath, eb, a)
		},
		kH: function()
		{
			this.Xp++;
			if (this.Xp > this.EH)
			{
				var a = (new u(this.Eq.dd, "content")).file("Application.ccj").Wx();
				this.Eq = null;
				this.file = new W;
				this.file.GI(a);
				this.digest();
				this.vw()
			}
			else 
			{
				var parti = this.path.split('/');
				var filePath = parti[0] + '/' + this.Xp + parti[1];

				a = this.file.s(), this.Eq.getFile(filePath, eb, a)
			}
		},
		digest: function()
		{
			this.file.seek(0);
			var a = this.file.CB(4);
			this.ef = !1;
			80 == a[0] && 65 == a[1] && 77 == a[2] && 85 == a[3] &&
				(this.ef = !0);
			this.file.fC(this.ef);
			this.file.ma(8);
			this.file.ma(4);
			this.Ic = new Bc;
			this.ca = new wc(this);
			this.Gb = new xc(this);
			this.Fg = new yc(this);
			this.Qc = new Z(this);
			for (var b, c = 0; 32639 != c;)
				if (c = this.file.o(), this.file.o(), b = this.file.s(), 0 != b)
				{
					a = this.file.da + b;
					switch (c)
					{
						case 8739:
							this.jH();
							this.gu = Array(this.mf);
							this.oz = Array(this.mf);
							this.nz = Array(this.mf);
							this.hu = Array(this.mf);
							for (b = 0; b < this.mf; b++) this.hu[b] = null;
							break;
						case 8773:
							this.Aa = this.file.s();
							this.file.s();
							this.file.s();
							this.file.o();
							this.file.o();
							break;
						case 8740:
							this.appName = this.file.Wb();
							break;
						case 8774:
							this.file.s();
							break;
						case 8750:
							this.file.Wb();
							break;
						case 8782:
							this.Su = this.file.Wb();
							break;
						case 8754:
							this.oH();
							break;
						case 8755:
							this.nH();
							break;
						case 8745:
						case 8767:
							this.au = new Na(this);
							this.Ic.Hh(this.file);
							break;
						case 8747:
							this.lH(b);
							break;
						case 8778:
							this.Wn = this.file.s();
							this.nB = this.file.s();
							this.oB = this.file.s();
							this.qB = this.file.s();
							this.rB = this.file.s();
							this.pB = this.file.Vc();
							this.dk = this.file.s(); - 1 != this.dk && (this.file.QI(4),
								this.dk = this.file.Vc());
							this.kr = this.file.s();
							this.Nu = !0;
							break;
						case 13107:
							this.gu[this.ll] = this.file.da;
							for (var d = 0; 32639 != d;)
								if (d = this.file.o(), this.file.o(), b = this.file.s(), 0 != b)
								{
									var e = this.file.da + b;
									switch (d)
									{
										case 13108:
											0 == this.ll && (this.file.ma(8), this.file.Vc());
											break;
										case 13110:
											this.hu[this.ll] = this.file.Wb();
											break;
										case 13129:
											this.oz[this.ll] = this.file.s();
											this.nz[this.ll] = this.file.s();
											break;
										case 13128:
											var f = b / 6;
											for (b = 0; b < f; b++)
											{
												var g = this.file.o();
												this.file.ma(4);
												0 != g && (this.Bb[g] = 1, this.Nd =
													Math.max(this.Nd, g + 1))
											}
									}
									this.file.seek(e)
								} this.ll++;
							break;
						case 8760:
							d = this.file.s();
							this.Xt = Array(d);
							for (b = 0; b < d; b++) this.Xt[b] = new pc(this), this.Xt[b].Hh();
							break;
						case 26214:
							this.ca.Hh(this.file);
							break;
						case 26215:
							this.Gb.Hh(this.file);
							break;
						case 26216:
							this.Fg.Hh(this.file)
					}
					this.file.seek(a)
				} this.context = new Ba(this.canvas);
			this.Qc.LI(0 != (this.an & l.VD));
			null == this.ta && (this.$d = new Aa)
		},
		$B: function(a, b, c, d, e, f)
		{
			this.ta = a;
			this.ak = c;
			this.$d = d;
			this.ww = b;
			this.Ev = e;
			this.Dv = f
		},
		NG: function()
		{
			this.Uf = !1;
			this.VB =
				0;
			this.zI = this.AI = 1;
			this.CI = this.BI = this.ja / 2;
			this.EI = this.DI = this.oa / 2
		},
		Wr: function()
		{
			window.setTimeout(Va.bind(this), 20)
		},
		vw: function()
		{
			(this.nn = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent) || /iPod/i.test(navigator.userAgent)) && 0 < this.Fg.sb && (this.ze = new Ra(this), this.ze.sH());
			this.Ol();
			this.Uc = Array(l.ox);
			var a;
			for (a = 0; a < l.ox; a++) this.Uc[a] = !1;
			this.canvas.Jc = this;
			if (null == this.ta)
			{
				var b = this;
				window.addEventListener("keypress", function(a)
				{
					b.VF(a)
				}, !1);
				window.addEventListener("keydown",
					function(a)
					{
						b.Ty(a)
					}, !1);
				window.addEventListener("keyup", function(a)
				{
					b.Uy(a)
				}, !1);
				window.addEventListener("blur", function()
				{
					b.hasFocus = !1
				}, !1);
				window.addEventListener("focus", function()
				{
					b.hasFocus = !0
				}, !1);
				if (window !== window.top) try
				{
					var c = window.top;
					c.addEventListener("focus", function()
					{
						b.hasFocus = !0;
						b.canvas.focus()
					});
					c.addEventListener("blur", function()
					{
						b.hasFocus = !1
					})
				}
				catch (d)
				{}
				window.addEventListener("resize", function()
				{
					b.Ol()
				}, !1);
				document.addEventListener("blur", function()
				{
					b.hasFocus = !1
				}, !1);
				document.addEventListener("focus", function()
				{
					b.hasFocus = !0
				}, !1);
				document.addEventListener("fullscreenchange", function()
				{
					b.fullScreen = document.iO;
					b.Ol()
				}, !1);
				document.addEventListener("mozfullscreenchange", function()
				{
					b.fullScreen = document.mozFullScreen;
					b.Ol()
				}, !1);
				document.addEventListener("webkitfullscreenchange", function()
				{
					b.fullScreen = document.webkitIsFullScreen;
					b.Ol()
				}, !1);
				window.PointerEvent ? ("undefined" !== typeof CRunMultipleTouch && (this.canvas.setAttribute("style", "-ms-touch-action: none;"),
					this.canvas.setAttribute("style", "touch-action: none;")), this.canvas.addEventListener("pointerdown", function(a)
				{
					switch (a.pointerType)
					{
						case "mouse":
						case "pen":
							b.av(a, !0);
							break;
						case "touch":
							b.as(a, !0)
					}
					a.preventDefault && a.preventDefault()
				}, !1), this.canvas.addEventListener("pointermove", function(a)
				{
					switch (a.pointerType)
					{
						case "mouse":
						case "pen":
							b.zn(a, b.canvas);
							break;
						case "touch":
							b.$r(a, !0)
					}
					a.preventDefault && a.preventDefault()
				}, !1), this.canvas.addEventListener("pointerup", function(a)
				{
					switch (a.pointerType)
					{
						case "mouse":
						case "pen":
							b.bv(a);
							break;
						case "touch":
							b.zk(a, !0)
					}
					a.preventDefault && a.preventDefault()
				}, !1), this.canvas.addEventListener("pointercancel", function(a)
				{
					switch (a.pointerType)
					{
						case "touch":
							b.zk(a, !0)
					}
					a.preventDefault && a.preventDefault()
				}, !1)) : (this.canvas.addEventListener("mousemove", function(a)
				{
					b.zn(a, b.canvas);
					a.preventDefault && a.preventDefault()
				}, !1), this.canvas.addEventListener("mousedown", function(a)
				{
					b.av(a, !1);
					a.preventDefault && a.preventDefault()
				}, !1), this.canvas.addEventListener("mouseup", function(a)
				{
					b.bv(a);
					a.preventDefault &&
						a.preventDefault()
				}, !1), this.canvas.addEventListener("mouseout", function(a)
				{
					b.zA(a);
					a.preventDefault && a.preventDefault()
				}, !1), this.canvas.addEventListener("click", function(a)
				{
					b.click(a);
					a.preventDefault && a.preventDefault()
				}, !1), this.canvas.addEventListener("dblclick", function(a)
				{
					b.Ly(a);
					a.preventDefault && a.preventDefault()
				}, !1));
				this.canvas.addEventListener("contextmenu", function(a)
				{
					a.preventDefault && a.preventDefault()
				}, !1);
				a = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel";
				document.attachEvent ?
					document.attachEvent("on" + a, function(a)
					{
						b.AA(a)
					}) : document.addEventListener && document.addEventListener(a, function(a)
					{
						b.AA(a)
					}, !1);
				document.onselectstart = function()
				{
					return !1
				};
				this.canvas.onselectstart = function(a)
				{
					a.preventDefault && a.preventDefault();
					return !1
				};
				this.dj = this.WG();
				this.Ve = new L;
				this.We = Array(l.ad);
				this.oi = Array(l.ad);
				this.hm = Array(l.ad);
				this.Jg = Array(l.ad);
				this.Kg = Array(l.ad);
				for (a = 0; a < l.ad; a++) this.We[a] = l.uj, this.Jg[a] = 0, this.Kg[a] = 0, this.oi[a] = !1, this.hm[a] = 0;
				this.dj && !window.PointerEvent &&
					(this.canvas.addEventListener("touchstart", function(a)
					{
						b.as(a, !1);
						a.preventDefault && a.preventDefault()
					}, !1), this.canvas.addEventListener("touchmove", function(a)
					{
						b.$r(a, !1);
						a.preventDefault && a.preventDefault()
					}, !1), this.canvas.addEventListener("touchend", function(a)
					{
						b.zk(a, !1);
						a.preventDefault && a.preventDefault()
					}, !1), this.canvas.addEventListener("touchcancel", function(a)
					{
						b.zk(a, !1);
						a.preventDefault && a.preventDefault()
					}, !1));
				window.focus();
				this.Wr()
			}
			else
				for (this.dj = this.ta.dj, this.Ve = new L, this.We =
					Array(l.ad), this.oi = Array(l.ad), this.hm = Array(l.ad), this.Jg = Array(l.ad), this.Kg = Array(l.ad), a = 0; a < l.ad; a++) this.We[a] = l.uj, this.Jg[a] = 0, this.Kg[a] = 0, this.oi[a] = !1, this.hm[a] = 0;
			this.Sa = this.fj = this.ej = 0;
			this.ne = -2;
			this.G = new h(this)
		},
		Ol: function()
		{
			var a = this.ja,
				b = this.oa,
				c, d;
			this.fullScreen || this.an & l.hx ? (c = window.innerWidth, d = window.innerHeight, document.documentElement.style.overflow = "hidden", document.body.scroll = "no") : (c = a, d = b);
			c /= a;
			d /= b;
			if (this.Aa & l.OC || this.an & l.hx && this.an & l.WD) c = d = Math.min(c,
				d);
			if (c != this.Zb || d != this.$b) this.Zb = c, this.$b = d, this.canvas.width = Math.floor(this.Zb * a), this.canvas.height = Math.floor(this.$b * b), this.context.cC(this.Zb, this.$b);
			this.G && this.G.mi()
		},
		WG: function()
		{
			var a = "Android;webOS;iPhone;iPad;iPod;Blackberry;Windows Phone;Touch".split(";"),
				b = navigator.userAgent,
				c;
			for (c in a)
				if (0 <= b.indexOf(a[c])) return !0;
			return "ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? !0 : !1
		},
		si: function(a)
		{
			this.Zp.EB(a);
			this.oh++
		},
		Dm: function(a)
		{
			this.Mm.add(a);
			this.ph++;
			this.hg = !0
		},
		yo: function()
		{
			this.tq && (this.on--, 0 > this.on && (this.on = 1E9, this.pn = new W, this.pn.getFile(this.tq + "info.dat", oc)));
			this.Ae = (new Date).getTime();
			if (this.WH(!1))
			{
				if (this.hg)
				{
					if (null == this.Ih)
					{
						var a = this.Zf;
						this.Nu ? (this.Ih = 0 == this.Wn ? new qc(this) : new sc(this), 0 == this.Wn && -1 != this.dk && (a = this.dk)) : this.Ih = new rc(this);
						this.sB = !1;
						this.aw = !0;
						null == this.ta && (this.frame.Aq ? this.context.Pp(0, 0, this.canvas.width, this.canvas.height) : this.context.oc(0, 0, this.ja, this.oa, a), this.Wr());
						return
					}
					if (null !=
						this.Ih && 0 == this.sB)
					{
						this.sB = this.Ih.load();
						null == this.ta && this.Wr();
						return
					}
					for (; 0 < this.Mm.size() && this.Zp.size() < this.OF;) a = this.Mm.get(0), this.Zp.add(a), this.Mm.DB(0), a.St();
					this.Qc.QF();
					a = !1;
					0 == this.Mm.size() && 0 == this.Zp.size() && (a = !0);
					null == this.Ih || 0 == (this.Aa & l.Xh) && 0 == (this.frame.ln & E.$D) || (this.aw || (this.Ih.reset(), this.aw = !0), this.Ih.step(), a = this.Ih.zu());
					a && (this.aw = !1, this.G.resume(), this.G.hh(), this.hg = !1, this.ca.Qe(), this.Fg.Qe(), this.Gb.Qe(), this.oh = this.ph = 0, this.yt && (this.yt = !1, 0 !=
						this.G.Tt() ? this.Sa = l.xp : (this.Sa = l.Sk, this.uC(this.Gf), this.Gf = null)));
					null == this.ta && this.Wr()
				}
				else null == this.ta && (null == this.$c ? (this.context.yr(0 != (this.Aa & l.Iw)), this.lr ? this.context.Ti(this.lr, 0, 0, this.ja, this.oa, 0, 0) : this.frame.Aq ? this.context.Pp(0, 0, this.ja, this.oa) : this.context.oc(0, 0, this.ja, this.oa, this.Zf), a = this.context.Fa, this.Uf && (bRestore = !0, a.save(), a.translate(this.BI, this.DI), 0 != this.VB && a.rotate(.0174532925 * -this.VB), a.scale(Math.max(.001, this.zI), Math.max(.001, this.AI)), a.translate(-this.CI,
					-this.EI)), this.$d.rb(this.context, 0, 0), this.Uf && a.restore(), this.rh && this.pa.rb(this.context), this.Gw && (this.Gw--, this.fs || (a = new wa, a.Vp(), a.Sb = 16, this.fs = new ia(this, this.ja, 30), this.fs.hA(16711680), this.fs.Pq(window.FusionVersion, n.lj | n.Yh, null, 16777215, a, 1, 10526880)), this.fs.rb(this.context, 0, 0, 0, 0))) : (this.context.yr(), this.context.Ti(this.$c, 0, 0, this.ja, this.oa, 0, 0)), 0 != (this.bn & l.UD) && window.requestAnimationFrame ? window.requestAnimationFrame(Va) : (a = (new Date).getTime() - this.Ae, a = Math.max(1E3 /
					this.rz - a, 1), window.setTimeout(Va, a)));
				return !0
			}
			this.$y();
			return !1
		},
		Vy: function(a, b, c, d)
		{
			this.hg || (this.context.yr(0 != (this.Aa & l.Iw)), null == this.$c ? (d || this.context.oc(b, c, this.Ev, this.Dv, this.Zf), this.context.clip(b, c, this.Ev, this.Dv), this.$d.rb(this.context, 0, 0), this.context.eJ()) : (this.context.yr(), this.context.Ti(this.$c, b, c, this.ja, this.oa, 0, 0)))
		},
		uF: function()
		{
			0 == (this.Aa & l.RC) && (this.hasFocus ? this.zt && (this.G.resume(), this.zt = !1) : (this.G.pause(this.bn & l.SD), this.zt = !0))
		},
		WH: function(a)
		{
			this.uF();
			var b = !0,
				c = !0;
			do switch (this.Sa)
			{
				case l.zp:
					if (this.LG(), this.tb = this.ww, this.Sa = 1, this.ZG(), a)
					{
						b = !1;
						break
					}
				case l.Uk:
					this.VI();
					break;
				case l.ht:
					0 == this.tH() ? (this.ZF(), this.Sa != l.Tk && this.Sa != l.zp || this.Qm()) : b = !1;
					break;
				case l.Sk:
					this.G.Tt();
					0 != this.G.ib ? this.TI() ? this.Sa = l.yp : this.Qm() : b = !1;
					break;
				case l.yp:
					0 == this.uH() ? (this.az(), this.Sa != l.Tk && this.Sa != l.zp || this.Qm()) : b = !1;
					break;
				case l.xp:
					this.Qm();
					break;
				default:
					b = !1
			}
			while (1 == b);
			this.Sa == l.Tk && (c = !1);
			return c
		},
		$y: function()
		{
			null != this.Qc && this.Qc.xw()
		},
		VI: function()
		{
			this.tb != this.ne && (this.frame = new E(this), this.frame.mH(this.tb));
			this.Zf = this.frame.Vz;
			this.ne = this.tb;
			this.frame.yi = this.frame.zi = 0;
			this.frame.Eu = this.frame.Fu = 0;
			this.frame.TB = !1;
			this.NG();
			var a;
			null != this.ta ? this.If = this.Hf = 0 : (this.Hf = this.ja / 2 - this.frame.tn / 2, this.If = this.oa / 2 - this.frame.sn / 2);
			for (a = 0; a < this.frame.yc; a++) this.frame.fb[a].IF(this.Hf, this.If);
			this.frame.Hb & E.kE && (document.title = this.frame.pz);
			this.lr = null;
			this.frame.Hb & E.lE && (this.lr = this.Gf);
			this.frame.Hb & E.mE && (this.frame.Aq = !0);
			this.G.HI(this.frame);
			this.G.MG(null != this.frame.Vm);
			this.Sa = l.Sk;
			null != this.frame.Vm ? this.hg ? this.yt = !0 : 0 != this.G.Tt() ? this.Sa = l.xp : (this.Sa = l.Sk, this.uC(this.Gf), this.Gf = null) : this.Gf = null;
			this.hg ? this.G.pause(!0) : this.G.hh()
		},
		JB: function()
		{
			null != this.ta ? this.If = this.Hf = 0 : (this.Hf = this.ja / 2 - this.frame.tn / 2, this.If = this.oa / 2 - this.frame.sn / 2);
			var a;
			for (a = 0; a < this.frame.yc; a++) this.frame.fb[a].vI(this.Hf, this.If)
		},
		Qm: function()
		{
			var a;
			a = this.G.$G(!1);
			if (0 != (this.bn & l.RD)) this.Sa = l.Tk;
			else switch (n.rE(a))
			{
				case 1:
					this.tb =
						this.ne + 1;
					1 == this.Wn && this.tb == this.kr && this.tb++;
					this.Sa = l.Uk;
					this.tb >= this.mf && (this.Sa = l.Tk);
					break;
				case 2:
					this.tb = Math.max(0, this.ne - 1);
					1 == this.Wn && this.tb == this.kr && (0 == this.tb ? this.tb = this.ne : this.tb--);
					this.Sa = l.Uk;
					break;
				case 3:
					this.Sa = l.Uk;
					0 != (n.Vo(a) & 32768) ? (this.tb = n.Vo(a) & 32767, this.tb >= this.mf && (this.tb = this.mf - 1), 0 > this.tb && (this.tb = 0)) : n.Vo(a) < this.Ym ? (this.tb = this.Xm[n.Vo(a)], -1 == this.tb && (this.tb = this.ne + 1)) : this.tb = this.ne + 1;
					break;
				case 4:
					this.Sa = l.zp;
					this.tb = this.ww;
					break;
				default:
					this.Sa =
						l.Tk
			}
			this.Sa == l.Uk && (0 > this.tb || this.tb >= this.mf) && (this.Sa = this.ne);
			if (this.Sa != l.Uk || this.tb != this.ne)
			{
				for (a = 0; a < this.frame.yc; a++) this.frame.fb[a].My();
				this.frame = null;
				this.ne = -1
			}
		},
		mu: function()
		{
			null == this.Bw && (this.Bw = new Tc(this));
			return this.Bw
		},
		uC: function(a)
		{
			var b, c, d = this.frame.Vm;
			if (null != d)
			{
				b = document.createElement("canvas");
				b.width = this.ja;
				b.height = this.oa;
				c = document.createElement("canvas");
				c.width = this.ja;
				c.height = this.oa;
				var e = new Ba(c);
				e.oc(0, 0, this.ja, this.oa, this.Zf);
				this.$d.rb(e,
					0, 0);
				e = new Ba(b);
				0 != (d.Bo & ra.Ap) ? e.oc(0, 0, this.ja, this.oa, d.Ao) : (e.oc(0, 0, this.ja, this.oa, this.qz), null != a && e.Ti(a, 0, 0, a.width, a.height, 0, 0));
				this.$c = document.createElement("canvas");
				this.$c.width = this.ja;
				this.$c.height = this.oa;
				this.$c.getContext("2d").drawImage(b, 0, 0);
				this.transition = this.mu().fl(d, this.$c, b, c);
				if (null != this.transition) return this.Sa = l.ht, !0
			}
			this.$c = null;
			this.Sa = l.Sk;
			this.G.By();
			return !1
		},
		tH: function()
		{
			if (null != this.transition)
			{
				if (this.transition.wq()) return !1;
				this.transition.Eb(t.jt);
				return !0
			}
			return !1
		},
		ZF: function()
		{
			null != this.transition && (this.transition.end(), this.$c = this.transition = null, this.Sa == l.ht && (this.Sa = l.Sk), this.G.By());
			return !0
		},
		TI: function()
		{
			var a, b, c = this.frame.cu;
			if (null != c)
			{
				a = document.createElement("canvas");
				a.width = this.ja;
				a.height = this.oa;
				b = document.createElement("canvas");
				b.width = this.ja;
				b.height = this.oa;
				var d = new Ba(a);
				d.oc(0, 0, this.ja, this.oa, this.Zf);
				this.$d.rb(d, 0, 0);
				d = new Ba(b);
				0 != (c.Bo & ra.Ap) ? d.oc(0, 0, this.ja, this.oa, c.Ao) : d.oc(0, 0, this.ja, this.oa, 0);
				this.$c = document.createElement("canvas");
				this.$c.width = this.ja;
				this.$c.height = this.oa;
				this.$c.getContext("2d").drawImage(a, 0, 0);
				this.transition = this.mu().fl(c, this.$c, a, b);
				if (null != this.transition) return this.Sa = l.yp, !0
			}
			this.$c = null;
			return !1
		},
		uH: function()
		{
			if (null != this.transition)
			{
				if (this.transition.wq()) return this.az(), !1;
				this.transition.Eb(t.Bp)
			}
			return !0
		},
		az: function()
		{
			null != this.transition && (this.Gf = this.transition.m, this.transition.end(), this.$c = this.transition = null, this.Sa == l.yp && (this.Sa =
				l.xp));
			return !0
		},
		jH: function()
		{
			this.file.ma(4);
			this.an = this.file.o();
			this.bn = this.file.o();
			this.file.o();
			this.file.o();
			this.ja = this.file.o();
			this.oa = this.file.o();
			this.tz = this.file.s();
			this.sz = this.file.s();
			var a, b;
			this.kB = Array(l.Of);
			for (a = 0; a < l.Of; a++) this.kB[a] = this.file.o();
			this.Fv = Array(l.Of * l.um);
			for (a = 0; a < l.Of; a++)
				for (b = 0; b < l.um; b++) this.Fv[a * l.um + b] = this.file.o();
			this.qz = this.file.Vc();
			this.mf = this.file.s();
			this.rz = this.file.s();
			this.file.ma(1);
			this.file.ma(3)
		},
		oH: function()
		{
			this.xl = this.file.o();
			this.pu = Array(this.xl);
			this.Iz = Array(this.xl);
			var a;
			for (a = 0; a < this.xl; a++) this.pu[a] = this.file.s();
			this.file.hI(this.Iz)
		},
		nH: function()
		{
			this.Fn = this.file.s();
			this.ou = Array(this.Fn);
			var a;
			for (a = 0; a < this.Fn; a++) this.ou[a] = this.file.Wb()
		},
		lH: function(a)
		{
			this.Ym = a / 2;
			this.Xm = Array(this.Ym);
			for (a = 0; a < this.Ym; a++) this.Xm[a] = this.file.o()
		},
		YD: function(a)
		{
			return null == this.Xm || -1 == a || a >= this.Ym ? -1 : this.Xm[a]
		},
		ku: function(a)
		{
			if (this.qu)
			{
				var b;
				for (b = 0; b < this.qu.size(); b++)
					if (gFont = this.qu.get(b), gFont.AF(a)) return gFont
			}
			return a
		},
		ZG: function()
		{
			this.ji = null
		},
		LG: function()
		{
			var a;
			if (null == this.ta || null != this.ta && 0 == (this.ak & I.aD))
				for (this.un = Array(l.Of), a = 0; a < l.Of; a++) this.un[a] = this.sz ^ 4294967295;
			else this.un = null;
			if (null == this.ta || null != this.ta && 0 == (this.ak & I.cD))
				for (this.uo = Array(l.Of), a = 0; a < l.Of; a++) this.uo[a] = this.tz ^ 4294967295;
			else this.uo = null;
			this.lB = Array(l.Of);
			for (a = 0; a < l.Of; a++) this.lB[a] = "";
			if (null == this.ta || null != this.ta && 0 == (this.ak & I.Qw))
				for (this.$m = Array(this.xl), a = 0; a < this.xl; a++) this.$m[a] = this.pu[a];
			else this.$m =
				null;
			if (null == this.ta || null != this.ta && 0 == (this.ak & I.Qw))
				for (this.Zm = Array(this.Fn), a = 0; a < this.Fn; a++) this.Zm[a] = this.ou[a];
			else this.Zm = null
		},
		Lj: function()
		{
			for (var a = this; null == a.un;) a = this.ta;
			return a.un
		},
		cn: function()
		{
			for (var a = this; null == a.uo;) a = this.ta;
			return a.uo
		},
		mG: function()
		{
			for (var a = this; null != a.ta && 0 != (a.ak & I.bD);) a = a.ta;
			return a.Fv
		},
		rG: function()
		{
			for (var a = this; null == a.$m;) a = a.ta;
			return a.$m
		},
		qG: function()
		{
			for (var a = this; null == a.Zm;) a = a.ta;
			return a.Zm
		},
		ny: function(a)
		{
			var b = this.rG();
			if (0 >
				a || 1E3 < a) return null;
			var c = b.length;
			if (a + 1 > c)
				for (; c < a + 1; c++) b.push(0);
			return b
		},
		wz: function(a)
		{
			var b = this.ny(a);
			return null != b ? b[a] : 0
		},
		JI: function(a, b)
		{
			var c = this.ny(a);
			null != c && (c[a] = b)
		},
		my: function(a)
		{
			var b = this.qG();
			if (0 > a || 1E3 < a) return null;
			var c = b.length;
			if (a + 1 > c)
				for (; c < a + 1; c++) b.push("");
			return b
		},
		vz: function(a)
		{
			var b = this.my(a);
			return null != b ? b[a] : ""
		},
		II: function(a, b)
		{
			var c = this.my(a);
			null != c && (c[a] = b)
		},
		VF: function(a)
		{
			a && (this.IC.charCodeAt(this.Do) == a.charCode ? (this.Do++, this.Do == this.IC.length &&
				(this.Gw = 250, this.Do = 0)) : this.Do = 0)
		},
		Ty: function(a)
		{
			if (a)
			{
				var b = a.keyCode;
				this.Pj = this.Uc[b] = !0;
				null != this.G && null != this.G.j && this.G.j.KH(b);
				for (b = 0; b < this.bb.length; b++) this.bb[b].Ty(a)
			}
		},
		Uy: function(a)
		{
			if (a)
			{
				this.Uc[a.keyCode] = !1;
				var b;
				for (b = 0; b < this.bb.length; b++) this.bb[b].Uy(a)
			}
		},
		Tr: function(a, b)
		{
			this.ej = a;
			this.fj = b
		},
		zn: function(a, b, c)
		{
			a.pageX ? (this.vf = a.pageX, this.wf = a.pageY) : a.clientY && (this.vf = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, this.wf = a.clientY + document.body.scrollTop +
				document.documentElement.scrollTop);
			for (var d = 0, e = 0, f = b; f && "BODY" != f.tagName;) d += f.offsetTop, e += f.offsetLeft, f = f.offsetParent;
			this.vf -= e + this.ej;
			this.wf -= d + this.fj;
			this.vf = Math.floor(this.vf / this.Zb);
			this.wf = Math.floor(this.wf / this.$b);
			null != this.G && null != this.G.j && this.G.j.iB();
			for (d = 0; d < this.bb.length; d++) this.bb[d].zn(a, b);
			this.dj || 305419896 == c || this.$r(new Qa(a.pageX, a.pageY, this.canvas), !1)
		},
		Rx: function(a)
		{
			if (a.which) switch (a.which)
			{
				case 2:
					return l.kt;
				case 3:
					return l.Cp;
				default:
					return l.af
			}
			else switch (a.button)
			{
				case 2:
					return l.Cp;
				case 4:
					return l.kt;
				default:
					return l.af
			}
		},
		bv: function(a)
		{
			var b = this.Rx(a);
			this.zn(a, this.canvas, 305419896);
			this.Uc[b] = !1;
			for (b = 0; b < this.bb.length; b++) this.bb[b].bv(a);
			this.dj || this.zk(new Qa(a.pageX, a.pageY, this.canvas), !1)
		},
		av: function(a, b)
		{
			var c = this.Rx(a);
			this.zn(a, this.canvas, 305419896);
			this.Pj = !0;
			this.Uc[c] = !0;
			this.Zy();
			if (null != this.G && null != this.G.j)
				if (b)
				{
					var d = Date.now(),
						e = null !== this.$u && this.yA == c && d - this.$u <= l.uE ? 2 : 1;
					this.yA = c;
					this.$u = d;
					this.G.j.Tn(c - l.af, e)
				}
			else this.Mp.qn ? this.G.j.Tn(c -
				l.af, 1) : this.G.j.Tn(c - l.af, 0 == a.detail % 2 ? 2 : 1);
			for (c = 0; c < this.bb.length; c++) this.bb[c].av(a, b);
			this.dj || this.as(new Qa(a.pageX, a.pageY, this.canvas), !1);
			window.focus()
		},
		zA: function(a)
		{
			this.Uc[l.af] = !1;
			this.Uc[l.kt] = !1;
			this.Uc[l.Cp] = !1;
			var b;
			for (b = 0; b < this.bb.length; b++) this.bb[b].zA(a);
			this.dj || this.zk(new Qa(a.pageX, a.pageY, this.canvas), !1)
		},
		click: function(a)
		{
			if (this.Mp.qn)
			{
				var b;
				for (b = 0; b < this.bb.length; b++) this.bb[b].click(a)
			}
		},
		Ly: function(a)
		{
			if (this.Mp.qn)
			{
				null != this.G && null != this.G.j && this.G.j.Tn(0,
					2);
				var b;
				for (b = 0; b < this.bb.length; b++) this.bb[b].Ly(a)
			}
		},
		AA: function(a)
		{
			this.Ny = "undefined" != typeof a.wheelDelta ? a.wheelDelta / 40 : -a.detail;
			null != this.G && null != this.G.j && this.G.LH(this.Ny)
		},
		Zy: function()
		{
			this.Mp.Rz && null != this.xo && "suspended" == this.xo.state && this.xo.resume()
		},
		as: function(a, b)
		{
			this.Zy();
			!this.nn && this.ze && (this.ze.bk(), this.ze = null);
			if (null != this.We)
			{
				var c, d, e = b ? 1 : a.changedTouches.length;
				for (c = 0; c < e; c++)
				{
					var f;
					b ? (f = a, f.identifier = a.pointerId) : f = a.changedTouches[c];
					for (d = 0; d < l.ad; d++)
						if (this.We[d] ==
							l.uj)
						{
							this.We[d] = f.identifier;
							this.oi[d] = !1;
							for (o = 0; o < this.Ve.size(); o++)
								if (this.Ve.get(o).aJ(f))
								{
									this.oi[d] = !0;
									this.hm[d] = o;
									break
								} if (!this.oi[d] && (this.Jg[d] = this.dn(f), this.Kg[d] = this.en(f), this.An == l.uj && f.identifier != l.ex))
								for (this.An = d, this.vf = this.Jg[d], this.wf = this.Kg[d], this.Pj = !0, this.Uc[l.af] = !0, null != this.G && null != this.G.j && this.G.j.Tn(0, 1), d = 0; d < this.bb.length; d++) this.bb[d].as(a, b);
							break
						}
				}
			}
		},
		$r: function(a, b)
		{
			if (null != this.We)
			{
				var c, d, e, f = b ? 1 : a.changedTouches.length;
				for (c = 0; c < f; c++)
				{
					var g;
					b ? (g = a, g.identifier = a.pointerId) : g = a.changedTouches[c];
					for (d = 0; d < l.ad; d++)
						if (this.We[d] == g.identifier)
						{
							if (this.oi[d]) this.Ve.get(this.hm[d]).AC(g);
							else
							{
								for (e = 0; e < this.Ve.size(); e++) this.Ve.get(e).AC(g);
								this.Jg[d] = this.dn(g);
								this.Kg[d] = this.en(g)
							}
							if (this.An == d)
								for (this.vf = this.Jg[d], this.wf = this.Kg[d], null != this.G && null != this.G.j && this.G.j.iB(), d = 0; d < this.bb.length; d++) this.bb[d].$r(a, b);
							break
						}
				}
			}
		},
		zk: function(a, b)
		{
			this.nn && this.ze && (this.ze.bk(), this.ze = null);
			if (null != this.We)
			{
				var c, d, e, f = b ? 1 : a.changedTouches.length;
				for (c = 0; c < f; c++)
				{
					var g;
					b ? (g = a, g.identifier = a.pointerId) : g = a.changedTouches[c];
					for (d = 0; d < l.ad; d++)
						if (this.We[d] == g.identifier)
						{
							this.We[d] = l.uj;
							if (this.oi[d]) this.Ve.get(this.hm[d]).yC(g);
							else
							{
								for (e = 0; e < this.Ve.size(); e++) this.Ve.get(e).yC(g);
								this.Jg[d] = this.dn(g);
								this.Kg[d] = this.en(g)
							}
							if (d == this.An)
								for (this.vf = this.Jg[d], this.wf = this.Kg[d], this.An = l.uj, this.Uc[l.af] = !1, e = 0; e < this.bb.length; e++) this.bb[e].zk(a, b)
						}
				}
			}
		},
		dn: function(a)
		{
			var b = a.pageX;
			for (a = a.target; a && "BODY" != a.tagName;) b -= a.offsetLeft,
				a = a.offsetParent;
			return Math.floor((b - this.ej) / this.Zb)
		},
		en: function(a)
		{
			var b = a.pageY;
			for (a = a.target; a && "BODY" != a.tagName;) b -= a.offsetTop, a = a.offsetParent;
			return Math.floor((b - this.fj) / this.$b)
		},
		sw: function(a)
		{
			this.Jy = a;
			this.canvas.style.cursor = 0 <= this.Jy ? this.cursor : "none"
		},
		vC: function(a, b)
		{
			null == this.pa && (this.pa = new r(this), this.pa.Yz(), this.pa.reset(b), this.rh = 1, 0 > this.Ve.indexOf(this.pa) && this.Ve.add(this.pa))
		},
		RI: function()
		{
			this.SI();
			this.rh = 2
		},
		$F: function()
		{
			null != this.pa && (1 == this.rh && this.Ve.EB(this.pa),
				this.pa = null);
			2 == this.rh && this.XF();
			this.rh = 0
		},
		SI: function()
		{
			0 == this.Cm && window.DeviceMotionEvent && (this.lt = this.eF.bind(this), window.addEventListener("devicemotion", this.lt));
			this.Cm++
		},
		eF: function(a)
		{
			var b = a.acceleration.x / 9.780318,
				c = a.acceleration.y / 9.780318,
				d = a.accelerationIncludingGravity.x / 9.780318;
			a = a.accelerationIncludingGravity.y / 9.780318;
			this.vj = b;
			this.wj = c;
			this.bh = d;
			this.dh = a;
			switch (window.orientation)
			{
				case 0:
					this.vj = -b;
					this.wj = c;
					this.bh = -d;
					this.dh = a;
					break;
				case 90:
					this.vj = c;
					this.wj = b;
					this.bh =
						a;
					this.dh = d;
					break;
				case 180:
					this.vj = b;
					this.wj = -c;
					this.bh = d;
					this.dh = -a;
					break;
				case -90:
					this.vj = -c, this.wj = -b, this.bh = -a, this.dh = -d
			}
			this.nn && (this.vj = -this.vj, this.wj = -this.wj, this.bh = -this.bh, this.dh = -this.dh)
		},
		XF: function()
		{
			this.Cm--;
			0 >= this.Cm && (window.DeviceMotionEvent && window.removeEventListener("devicemotion", this.lt), this.Cm = 0)
		},
		lq: function()
		{
			var a = 0; - .2 > this.bh && (a |= 4);
			.2 < this.bh && (a |= 8); - .2 > this.dh && (a |= 1);
			.2 < this.dh && (a |= 2);
			return a
		},
		Vt: function(a)
		{
			if (a.Ak)
			{
				null == this.ze && (a.zC = 2);
				switch (a.zC)
				{
					case 0:
						0 <
							a.Ff && (a.Ff -= 2, 0 > a.Ff && (a.Ff = 0, phase++));
						break;
					case 2:
						128 > a.Ff && (a.Ff += 4, 128 <= a.Ff && (a.Ff = 128, a.Zr = !0))
				}
				this.context.oc(a.Qd.left, a.Qd.top, a.Qd.right - a.Qd.left, a.Qd.bottom - a.Qd.top, this.Zf, 0, 0);
				a.Ak.rb(this.context, a.Qd.left, a.Qd.top, w.Xe, a.Ff);
				a.Zr && (a.Ak = null, a.Qd = null, a.gm = null)
			}
			else if (a.Zr = !0, null != this.ze && 0 != (this.Aa & l.PC))
			{
				a.gm = new wa;
				a.gm.Vp();
				a.gm.Sb = 24;
				var b = a.gm.Sb + 6;
				a.Ak = new ia(this, 120, b);
				var c = a.Ak.measureText(this.Su, a.gm) + 64;
				a.Ak.resize(c, b);
				a.Ak.hA();
				a.Ak.Pq(this.Su, n.Yh | n.lj, null,
					16776960, a.gm, 2, 0);
				a.Qd = new Y;
				a.Qd.left = this.ja / 2 - c / 2;
				a.Qd.top = this.oa / 2 - b / 2;
				a.Qd.right = a.Qd.left + c;
				a.Qd.bottom = a.Qd.top + b;
				a.Ff = 128;
				a.zC = 0;
				a.Zr = !1;
				this.context.oc(0, 0, this.ja, this.oa, this.Zf, 0, 0)
			}
			return a.Zr
		}
	};
	E.kE = 1;
	E.sL = 2;
	E.lE = 4;
	E.mx = 32;
	E.uL = 256;
	E.tL = 2048;
	E.Hc = 32768;
	E.mE = 131072;
	E.Mo = 0;
	E.Sd = 1;
	E.eD = 1;
	E.fD = 2;
	E.Uo = 6;
	E.$D = 256;
	E.aE = 1;
	E.bE = 2;
	E.cE = 4;
	E.gE = 0;
	E.hE = 1;
	E.eE = 2;
	E.fE = 3;
	E.prototype = {
		mH: function(a)
		{
			this.app.file.seek(this.app.gu[a]);
			this.Tm = new N(this.app);
			this.md = new Ac;
			this.Bq = new Y;
			a = 0;
			var b;
			for (this.Nq = -1; 32639 != a;)
				if (a = this.app.file.o(), this.app.file.o(), b = this.app.file.s(), 0 != b)
				{
					this.YH = this.app.file.da + b;
					switch (a)
					{
						case 13108:
							this.Lu();
							null != this.app.ta && 0 != (this.app.ak & I.$C) ? (this.tn = this.app.LF, this.sn = this.app.MF) : (this.tn = Math.min(this.app.ja, this.fd), this.sn = Math.min(this.app.oa, this.kc));
							break;
						case 13128:
							var c = b / 6;
							this.yn = Array(c);
							this.hd = Array(c);
							this.jd = Array(c);
							for (b = this.Nd = 0; b < c; b++) this.yn[b] = this.app.file.o(), this.Nd = Math.max(this.Nd, this.yn[b]), this.hd[b] = this.app.file.o(), this.jd[b] =
								this.app.file.o();
							this.Nd++;
							break;
						case 13130:
							this.pa = this.app.file.o();
							this.ln = this.app.file.o();
							break;
						case 13122:
							this.Bq.load(this.app.file);
							break;
						case 13124:
							this.Nq = this.app.file.o();
							break;
						case 13127:
							this.bA = this.app.file.s();
							break;
						case 13109:
							this.pz = this.app.file.Wb();
							break;
						case 13115:
							this.Vm = new ra;
							this.Vm.load(this.app.file);
							break;
						case 13116:
							this.cu = new ra;
							this.cu.load(this.app.file);
							break;
						case 13121:
							this.rH();
							break;
						case 13125:
							this.qH();
							break;
						case 13112:
							this.md.load(this.app);
							break;
						case 13117:
							this.Tm.load(this.app),
								this.lg = this.Tm.lg
					}
					this.app.file.seek(this.YH)
				} this.app.Ic.Qe();
			for (b = 0; b < this.md.xf; b++) this.app.Ic.aj(this.md.xz(b).sf);
			this.app.ca.Qe();
			this.app.Fg.Qe();
			this.app.Gb.Qe();
			this.app.Ic.load(this.app.file);
			this.app.Ic.cc(this.app.ca, this.app.Gb);
			this.app.Aa & l.Xh && (this.app.Gb.vo(), this.app.Fg.vo(), 0 == this.app.Nd && this.app.ca.vo());
			this.app.ca.load(this.app.file);
			this.app.Gb.load(this.app.file);
			this.Tm.bG(this.app.Fg);
			this.app.Fg.load();
			this.app.Ic.uI();
			for (b = 0; b < this.md.xf; b++) a = this.md.list[b], a.Dq >=
				p.Be && this.app.Ic.MI(a.sf)
		},
		rH: function()
		{
			this.yc = this.app.file.s();
			this.fb = Array(this.yc);
			var a;
			for (a = 0; a < this.yc; a++) this.fb[a] = new R(this.app), this.fb[a].load(this.app.file)
		},
		qH: function()
		{
			var a;
			for (a = 0; a < this.yc; a++) this.fb[a].Hd = this.app.file.s(), this.fb[a].Id = this.app.file.s(), this.app.file.ma(12)
		},
		Lu: function()
		{
			this.fd = this.app.file.s();
			this.kc = this.app.file.s();
			this.Vz = this.app.file.Vc();
			this.Hb = this.app.file.s()
		}
	};
	Z.pd = 32;
	Z.prototype = {
		hF: function(a)
		{
			null == this.Ej && (this.Ej = new L);
			this.Ej.add(a)
		},
		QF: function()
		{
			if (null != this.Ej && 0 < this.Ej.size() && !this.Qt)
			{
				var a = this.Ej.get(0);
				this.Ej.DB(0);
				this.Qt = !0;
				var b = this;
				b.context.decodeAudioData(a.response, function(c)
				{
					a.buffer = c;
					a.response = null;
					b.app.si(a);
					b.Qt = !1
				})
			}
		},
		reset: function()
		{
			var a;
			for (a = 0; a < Z.pd; a++) this.Gm[a] = !1
		},
		play: function(a, b, c, d)
		{
			if (0 != this.Zx)
			{
				var e = this.app.Fg.vG(a);
				if (null != e)
				{
					0 == this.ut && (c = 0);
					if (0 > c)
					{
						for (a = 0; a < Z.pd && (null != this.qb[a] || 0 != this.Gm[a]); a++);
						if (a == Z.pd)
							for (a = 0; a < Z.pd && (0 != this.Gm[a] || null == this.qb[a] || 0 != this.qb[a].Im); a++);
						c = a;
						0 <= c && c < Z.pd && (this.gs[c] = this.eA)
					}
					if (!(0 > c || c >= Z.pd))
					{
						if (null != this.qb[c])
						{
							if (1 == this.qb[c].Im) return;
							this.qb[c] != e && (this.qb[c].stop(), this.qb[c] = null)
						}
						for (a = 0; a < Z.pd; a++) this.qb[a] == e && (this.qb[a].stop(), this.qb[a] = null);
						this.qb[c] = e;
						e.play(b, d, this.gs[c])
					}
				}
			}
		},
		LI: function(a)
		{
			this.ut = a
		},
		YG: function()
		{
			var a;
			for (a = 0; a < Z.pd; a++) null != this.qb[a] && this.qb[a].UG() && this.app.Fg.aj(this.qb[a].handle)
		},
		xw: function()
		{
			var a;
			for (a = 0; a < Z.pd; a++) null != this.qb[a] && (this.qb[a].stop(), this.qb[a] = null)
		},
		pause: function()
		{
			var a;
			for (a = 0; a < Z.pd; a++) null != this.qb[a] && this.qb[a].zG()
		},
		resume: function()
		{
			var a;
			for (a = 0; a < Z.pd; a++) null != this.qb[a] && this.qb[a].AG()
		},
		wF: function()
		{
			var a;
			for (a = 0; a < Z.pd; a++) null != this.qb[a] && this.qb[a].vF() && (this.qb[a] = null)
		}
	};
	pc.prototype = {
		Hh: function()
		{
			var a = this.app.file.o();
			this.path = this.app.file.Wb(a);
			a = this.path.lastIndexOf("\\");
			0 <= a && (this.path = this.path.substring(a + 1));
			this.length = this.app.file.s();
			this.offset = this.app.file.da;
			this.app.file.ma(this.length)
		},
		open: function()
		{
			return this.app.file.Wf(this.offset,
				this.length)
		}
	};
	qc.prototype = {
		load: function()
		{
			return this.Bu
		},
		reset: function()
		{
			this.wv = this.we = 0;
			this.Sp = 25
		},
		step: function()
		{
			switch (this.we)
			{
				case 0:
					-1 != this.app.dk ? this.context.oc(0, 0, this.app.ja, this.app.oa, this.app.dk) : this.context.Pp(0, 0, this.app.ja, this.app.oa);
					this.context.Ti(this.fg, this.Vh - this.fg.width / 2, this.Wh - this.fg.height / 2, this.fg.width, this.fg.height, 0, 0);
					this.we++;
					break;
				case 1:
					this.angle = this.app.oh / this.app.ph * 2 * Math.PI;
					this.gl(this.angle);
					this.app.oh == this.app.ph && this.we++;
					break;
				case 2:
					0 < this.Sp && this.Sp--;
					0 == this.Sp && this.we++;
					break;
				case 3:
					this.app.Vt(this) && this.we++
			}
		},
		zu: function()
		{
			return 4 == this.we
		},
		gl: function(a)
		{
			var b, c, d, e, f;
			for (b = this.wv; b <= a; b += .005)
			{
				c = this.Vh + Math.cos(b) * (this.Ne - this.size);
				d = this.Wh - Math.sin(b) * (this.Ne - this.size);
				e = this.Vh + Math.cos(b) * this.Ne;
				f = this.Wh - Math.sin(b) * this.Ne;
				this.context.ld(c, d, e, f, this.color, 1, 0, 0);
				var g;
				for (g = 0; 3 > g; g++) c = this.Vh + Math.cos(b) * (this.Ne - this.size - g), d = this.Wh - Math.sin(b) * (this.Ne - this.size - g), e = this.Vh + Math.cos(b) *
					(this.Ne - this.size - g - 1), f = this.Wh - Math.sin(b) * (this.Ne - this.size - g - 1), this.context.ld(c, d, e, f, this.color, 1, 0, 0), c = this.Vh + Math.cos(b) * (this.Ne + g), d = this.Wh - Math.sin(b) * (this.Ne + g), e = this.Vh + Math.cos(b) * (this.Ne + g + 1), f = this.Wh - Math.sin(b) * (this.Ne + g + 1), this.context.ld(c, d, e, f, this.color, 1, 0, 0)
			}
			this.wv = a
		}
	};
	rc.prototype = {
		load: function()
		{
			return !0
		},
		reset: function()
		{
			this.qr = !1;
			this.we = 0;
			this.alpha = 128;
			this.position = 0
		},
		step: function()
		{
			if (this.app.oh < this.app.ph) switch (this.we)
			{
				case 0:
					0 < this.alpha && (this.alpha -=
						2, 0 >= this.alpha && (this.alpha = 0, this.we++))
			}
			else switch (this.we)
			{
				case 0:
				case 1:
					this.we = 2;
					break;
				case 2:
					128 > this.alpha && (this.alpha += 4);
					128 <= this.alpha && (this.alpha = 128, null == this.app.ze ? this.qr = !0 : this.we++);
					break;
				default:
					this.qr = this.app.Vt(this);
					return
			}
			this.context.oc(this.rect.left, this.rect.top, this.width, this.height, this.qF, w.Xe, this.alpha);
			this.context.xr(this.rect.left, this.rect.top, this.width, this.height, this.borderColor, 1, w.Xe, this.alpha);
			this.position = this.app.oh / this.app.ph * (this.width - 2);
			this.context.oc(this.rect.left + 1, this.rect.top + 1, this.position, this.height - 2, this.rF, w.Xe, this.alpha)
		},
		zu: function()
		{
			return this.qr && this.app.oh == this.app.ph
		}
	};
	sc.prototype = {
		load: function()
		{
			this.step();
			return !this.B.hg
		},
		reset: function()
		{
			this.B.G.fz();
			this.B.G.Cu();
			this.B.G.ls(!1);
			this.B.G.Nl(-1, !1);
			this.B.G.j.ds();
			this.B.G.iu();
			this.B.G.ju();
			this.B.G.A.yi = this.B.G.A.Eu = this.B.G.nk = 0;
			this.B.G.A.zi = this.B.G.A.Fu = this.B.G.pk = 0;
			this.B.JB();
			this.B.G.qt();
			this.B.G.vu();
			this.B.G.Nl(-1, !1);
			this.B.G.Iv();
			this.B.G.Nt(!1);
			this.B.G.Wt();
			this.B.G.Ku();
			this.B.G.j.Jv();
			this.B.G.j.Kp(this.B.G);
			this.B.G.bu();
			this.B.G.Np();
			this.B.G.ib = 0;
			this.B.G.am = 0;
			this.B.Th = !1;
			this.app.bb.push(this.B);
			this.Fj = 0
		},
		step: function()
		{
			this.B.Th || (this.WI && (this.B.Th = this.app.oh == this.app.ph), 0 == this.B.yo() && (this.B.Th = !0), this.B.Vy(this.context, this.vc.x, this.vc.y, !1));
			this.B.Th && this.app.ze && this.app.Vt(this)
		},
		zu: function()
		{
			var a = this.B.Th;
			this.app.ze && (a = !1);
			if (a)
			{
				if (0 < this.Fj && (this.Fj--, 0 < this.Fj)) return !1;
				var b;
				for (b = 0; b <
					this.app.bb.length; b++)
					if (this.app.bb[b] == this.B)
					{
						this.app.bb.splice(b, 1);
						break
					}
			}
			return a
		}
	};
	r.gc = 0;
	r.Fc = 1;
	r.Gc = 2;
	r.lx = -1;
	r.ad = 3;
	r.bi = 1;
	r.Lf = 2;
	r.Mf = 4;
	r.kx = 8;
	r.rL = 2147483648;
	r.iE = 70;
	r.yD = 60;
	r.wD = .5;
	r.prototype = {
		Yz: function()
		{
			null == this.Rb && (this.Rb = fa.Wf(this.app, "joyback.png"), this.zq = fa.Wf(this.app, "joyfront.png"), this.sd = fa.Wf(this.app, "fire1U.png"), this.Kd = fa.Wf(this.app, "fire2U.png"), this.kz = fa.Wf(this.app, "fire1D.png"), this.lz = fa.Wf(this.app, "fire2D.png"))
		},
		reset: function(a)
		{
			this.Ya = a;
			null != this.Rb &&
				0 != this.Rb.width ? this.aC() : this.wt = !0;
			this.gg = this.Sz ? r.iE * Math.PI / 180 : r.yD * Math.PI / 180
		},
		aC: function()
		{
			var a, b;
			a = this.app.ja;
			b = this.app.oa;
			0 == (this.Ya & r.kx) ? (0 != (this.Ya & r.bi) && (this.Nb[r.gc] = 16 + this.Rb.width / 2, this.Ob[r.gc] = b - 16 - this.Rb.height / 2), 0 != (this.Ya & r.Lf) && 0 != (this.Ya & r.Mf) ? (this.Nb[r.Fc] = a - this.sd.width / 2 - 32, this.Ob[r.Fc] = b - this.sd.height / 2 - 16, this.Nb[r.Gc] = a - this.Kd.width / 2 - 16, this.Ob[r.Gc] = b - this.Kd.height / 2 - this.sd.height - 24) : 0 != (this.Ya & r.Lf) ? (this.Nb[r.Fc] = a - this.sd.width / 2 - 16, this.Ob[r.Fc] =
				b - this.sd.height / 2 - 16) : 0 != (this.Ya & r.Mf) && (this.Nb[r.Gc] = a - this.Kd.width / 2 - 16, this.Ob[r.Gc] = b - this.Kd.height / 2 - 16)) : (0 != (this.Ya & r.bi) && (this.Nb[r.gc] = a - 16 - this.Rb.width / 2, this.Ob[r.gc] = b - 16 - this.Rb.height / 2), 0 != (this.Ya & r.Lf) && 0 != (this.Ya & r.Mf) ? (this.Nb[r.Fc] = this.sd.width / 2 + 16 + 2 * this.Kd.width / 3, this.Ob[r.Fc] = b - this.sd.height / 2 - 16, this.Nb[r.Gc] = this.Kd.width / 2 + 16, this.Ob[r.Gc] = b - this.Kd.height / 2 - this.sd.height - 24) : 0 != (this.Ya & r.Lf) ? (this.Nb[r.Fc] = this.sd.width / 2 + 16, this.Ob[r.Fc] = b - this.sd.height /
				2 - 16) : 0 != (this.Ya & r.Mf) && (this.Nb[r.Gc] = this.Kd.width / 2 + 16, this.Ob[r.Gc] = b - this.Kd.height / 2 - 16))
		},
		ac: function(a, b)
		{
			0 != (a & r.bi) ? this.Nb[r.gc] = b : 0 != (a & r.Lf) ? this.Nb[r.Fc] = b : 0 != (a & r.Mf) && (this.Nb[r.Gc] = b)
		},
		bc: function(a, b)
		{
			0 != (a & r.bi) ? this.Ob[r.gc] = b : 0 != (a & r.Lf) ? this.Ob[r.Fc] = b : 0 != (a & r.Mf) && (this.Ob[r.Gc] = b)
		},
		rb: function(a)
		{
			this.wt && (this.wt = !1, this.aC());
			var b, c;
			0 != (this.Ya & r.bi) && (b = this.Nb[r.gc] - this.Rb.width / 2, c = this.Ob[r.gc] - this.Rb.height / 2, a.Pe(this.Rb, b, c, 0, 1, 1, 0, 0), b = this.Nb[r.gc] + this.qf - this.zq.width /
				2, c = this.Ob[r.gc] + this.rf - this.zq.height / 2, a.Pe(this.zq, b, c, 0, 1, 1, 0, 0));
			if (0 != (this.Ya & r.Lf))
			{
				var d = 0 == (this.pa & 16) ? this.sd : this.kz;
				b = this.Nb[r.Fc] - d.width / 2;
				c = this.Ob[r.Fc] - d.height / 2;
				a.Pe(d, b, c, 0, 1, 1, 0, 0)
			}
			0 != (this.Ya & r.Mf) && (d = 0 == (this.pa & 32) ? this.Kd : this.lz, b = this.Nb[r.Gc] - d.width / 2, c = this.Ob[r.Gc] - d.height / 2, a.Pe(d, b, c, 0, 1, 1, 0, 0))
		},
		aJ: function(a)
		{
			var b = !1,
				c = this.app.dn(a),
				d = this.app.en(a);
			this.Uz = r.wD * Math.ceil(Math.sqrt(this.Rb.width / 2 * this.Rb.width / 2 + this.Rb.height / 2 * this.Rb.height / 2));
			this.He =
				Math.ceil(Math.sqrt(this.Rb.width / 4 * this.Rb.width / 4 + this.Rb.height / 4 * this.Rb.height / 4));
			c = this.getKey(c, d);
			c != r.lx && (this.touches[c] = a.identifier, c == r.gc && (this.pa &= 240, b = !0), c == r.Fc ? (this.pa |= 16, b = !0) : c == r.Gc && (this.pa |= 32, b = !0));
			return b
		},
		AC: function(a)
		{
			var b = this.app.dn(a),
				c = this.app.en(a);
			if (this.getKey(b, c) == r.gc && a.identifier == this.touches[r.gc] && (this.qf = b - this.Nb[r.gc], this.rf = c - this.Ob[r.gc], a = (2 * Math.PI - Math.atan2(this.rf, this.qf)) % (2 * Math.PI), this.pa &= 240, b = Math.sqrt(this.qf * this.qf + this.rf *
					this.rf), this.Sz ? (this.qf = Math.cos(a) * this.He, this.rf = Math.sin(a) * -this.He) : (this.qf < -this.He && (this.qf = -this.He), this.qf > this.He && (this.qf = this.He), this.rf < -this.He && (this.rf = -this.He), this.rf > this.He && (this.rf = this.He)), b > this.Uz && b < 3 * this.He))
			{
				b = 0;
				if (0 <= a)
					for (;;)
					{
						if (this.qh(a, 0, this.gg) || this.qh(a, 2 * Math.PI, this.gg))
						{
							b = 8;
							break
						}
						if (this.qh(a, Math.PI / 2, this.gg))
						{
							b = 1;
							break
						}
						if (this.qh(a, Math.PI, this.gg))
						{
							b = 4;
							break
						}
						if (this.qh(a, Math.PI / 4 * 6, this.gg))
						{
							b = 2;
							break
						}
						if (this.qh(a, Math.PI / 4, Math.PI / 2 - this.gg))
						{
							b =
								9;
							break
						}
						if (this.qh(a, Math.PI / 4 * 3, Math.PI / 2 - this.gg))
						{
							b = 5;
							break
						}
						if (this.qh(a, Math.PI / 4 * 5, Math.PI / 2 - this.gg))
						{
							b = 6;
							break
						}
						if (this.qh(a, Math.PI / 4 * 7, Math.PI / 2 - this.gg))
						{
							b = 10;
							break
						}
						break
					}
				this.pa |= b
			}
		},
		qh: function(a, b, c)
		{
			return a > b - c / 2 && a < b + c / 2
		},
		yC: function(a)
		{
			var b;
			for (b = 0; b < r.ad; b++)
				if (this.touches[b] == a.identifier)
				{
					this.touches[b] = 0;
					switch (b)
					{
						case r.gc:
							this.rf = this.qf = 0;
							this.pa &= 240;
							break;
						case r.Fc:
							this.pa &= -17;
							break;
						case r.Gc:
							this.pa &= -33
					}
					break
				}
		},
		getKey: function(a, b)
		{
			return 0 != (this.Ya & r.bi) && a >= this.Nb[r.gc] -
				this.Rb.width / 2 && a < this.Nb[r.gc] + this.Rb.width / 2 && b > this.Ob[r.gc] - this.Rb.height / 2 && b < this.Ob[r.gc] + this.Rb.height / 2 ? r.gc : 0 != (this.Ya & r.Lf) && a >= this.Nb[r.Fc] - this.sd.width / 2 && a < this.Nb[r.Fc] + this.sd.width / 2 && b > this.Ob[r.Fc] - this.sd.height / 2 && b < this.Ob[r.Fc] + this.sd.height / 2 ? r.Fc : 0 != (this.Ya & r.Mf) && a >= this.Nb[r.Gc] - this.Kd.width / 2 && a < this.Nb[r.Gc] + this.Kd.width / 2 && b > this.Ob[r.Gc] - this.Kd.height / 2 && b < this.Ob[r.Gc] + this.Kd.height / 2 ? r.Gc : r.lx
		},
		lq: function()
		{
			return this.pa
		}
	};
	h.YK = 2;
	h.ND = 4;
	h.tm = 16;
	h.OD =
		32;
	h.QD = 64;
	h.PD = 128;
	h.Gs = 512;
	h.yK = 2;
	h.AK = 4;
	h.CK = 8;
	h.zK = 16;
	h.xK = 32;
	h.DK = 64;
	h.BK = 128;
	h.EK = 256;
	h.fx = 480;
	h.gx = 300;
	h.om = 64;
	h.pm = 16;
	h.yN = 1;
	h.AN = 2;
	h.zN = 4;
	h.XE = 1;
	h.OM = 2;
	h.NM = 4;
	h.PM = 8;
	h.Dx = 0;
	h.pp = 1;
	h.Rf = 2;
	h.dt = 3;
	h.HE = 4;
	h.Vw = 1;
	h.Dk = 2;
	h.ss = 4;
	h.Uw = 8;
	h.$o = 10;
	h.Zo = 1;
	h.Ls = 2;
	h.Yo = 3;
	h.Ks = 4;
	h.xL = 5;
	h.yL = 6;
	h.vL = 7;
	h.zL = 8;
	h.wL = 9;
	h.Xo = -2;
	h.pE = 100;
	h.qE = 101;
	h.Qg = 1;
	h.Rg = 2;
	h.Sg = 4;
	h.Pg = 8;
	h.YC = 15;
	h.Ns = 128;
	h.Ye = 2147483647;
	h.Ds = 1110591041;
	h.it = 1110594637;
	h.TE = 1110600435;
	h.Ms = 1110874198;
	h.wp = 1110634490;
	h.nm = 1110590791;
	h.UH = [0, 0,
		0, 0, 255, 0, 0, 0, 255, 255, 0, 0, 255, 255, 255, 0, 255, 255, 255, 255
	];
	h.Px = [0, h.Qg, h.Rg, 0, h.Sg, h.Sg + h.Qg, h.Sg + h.Rg, 0, h.Pg, h.Pg + h.Qg, h.Pg + h.Rg, 0, 0, 0, 0, 0];
	h.Yx = !1;
	h.Kt = function(a, b, c)
	{
		switch (c)
		{
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
	h.NN = function(a, b, c)
	{
		switch (c)
		{
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
	h.xO = function(a)
	{
		a = a.wa >= p.Nf ? a.ext.Bz() : a.$f();
		null == a && (a = new $a);
		return a
	};
	h.gP = function(a, b, c)
	{
		a.wa >= p.Nf ? a.ext.bC(b, c) : a.vk(b, c)
	};
	h.zO = function(a)
	{
		return a.wa >= p.Nf ? 0 : a.jq()
	};
	h.hP = function(a, b)
	{
		a.wa >= p.Nf || a.Rr(b)
	};
	h.GH = function(a)
	{
		null != a.D && (a.D.Zq(), a.D.V |= w.Sf, a.D.so = 0)
	};
	h.FH = function(a)
	{
		null != a.D && (a.D.Kn(), a.D.V &= ~w.Sf, a.D.so = 0)
	};
	h.ac = function(a, b)
	{
		null != a.w ? a.w.$.ac(b) : a.v != b && (a.v = b, null != a.b && (a.b.L = !0, a.b.La = !0))
	};
	h.bc = function(a, b)
	{
		null != a.w ? a.w.$.bc(b) : a.u != b && (a.u = b, null != a.b && (a.b.L = !0, a.b.La = !0))
	};
	h.yG = function(a, b)
	{
		if (0 == a) return 0 <=
			b ? 24 : 8;
		if (0 == b) return 0 <= a ? 0 : 16;
		var c, d = !1,
			e = !1;
		0 > a && (d = !0, a = -a);
		0 > b && (e = !0, b = -b);
		c = 256 * a / b;
		var f;
		for (f = 0; !(c >= G.Ek[f]); f += 2);
		c = G.Ek[f + 1];
		e && (c = -c + 32 & 31);
		d && (c = (-(c - 8 & 31) & 31) + 8 & 31);
		return c
	};
	h.prototype = {
		HI: function(a)
		{
			this.A = a
		},
		qt: function()
		{
			this.F = Array(this.A.lg);
			this.j = this.A.Tm;
			this.ie = 0;
			var a;
			for (a = this.h.Ic.uz(); null != a; a = this.h.Ic.yz()) a.ve >= p.Be && this.ie++;
			this.cw = -1 == this.A.Nq ? this.h.Ae & 65535 : this.A.Nq;
			this.rk = Array(Math.round(this.A.lg / 32 + 1));
			this.qk = new L;
			this.zg = this.A.lg;
			this.lw = this.j.UA;
			this.A.yi = 0;
			this.A.zi = 0;
			this.ea = this.A.yi;
			this.ia = this.A.zi;
			this.Jr = this.Ir = 0;
			this.ge = this.A.Bq.right; - 1 == this.ge && (this.ge = 2147479552);
			this.he = this.A.Bq.bottom; - 1 == this.he && (this.he = 2147479552);
			this.mw = this.ib = this.hb = 0;
			this.Cc &= h.PD;
			this.Cc |= h.ND;
			this.Yl = 0;
			this.Er = Array(h.$o);
			this.Wi = null;
			this.Cc |= h.QD;
			this.Xc = Array(h.Ns);
			this.Zl = Array(h.Ns);
			this.Fr = new ua;
			this.Fr.code = 0;
			this.Ar = Array(4);
			this.bw = Array(4);
			this.zr = Array(4);
			this.Pc = Array(4);
			for (a = this.pc = 0; a < h.$o; a++) this.Er[a] = 50;
			this.At = this.rr = !1;
			this.A.TB = !0
		},
		ju: function()
		{
			this.A.TB = !1;
			this.Wi = this.qk = this.rk = this.P = this.F = null;
			var a;
			for (a = 0; a < h.Ns; a++) this.Xc[a] = 0;
			this.Fr = null
		},
		MG: function(a)
		{
			this.qt();
			this.h.rh = 0;
			if (null == this.h.ta && this.h.dj)
				if (this.A.pa == E.fE) null == this.h.pa && (this.h.pa = new r(this.h), this.h.pa.Yz()), this.h.pa.reset(0), this.h.vC();
				else if (this.A.pa != E.gE)
			{
				var b = 0;
				0 != (this.A.ln & E.aE) && (b = r.Lf);
				0 != (this.A.ln & E.bE) && (b |= r.Mf);
				0 != (this.A.ln & E.cE) && (b |= r.kx);
				this.A.pa == E.hE && (b |= r.bi);
				0 != (b & (r.Lf | r.Mf | r.bi)) && (this.h.vC(b),
					this.h.pa.reset(b));
				this.A.pa == E.eE && this.h.RI()
			}
			this.jw = 255;
			a && (this.Cc |= h.tm);
			this.vu();
			this.Nl(-1, !1);
			this.Iv();
			this.Yb = 0;
			this.Nt(a);
			this.Wt();
			this.HG();
			this.Ku();
			this.j.Jv();
			this.j.Kp(this);
			this.nC();
			this.Np();
			this.am = 0;
			this.bu();
			this.At = !1
		},
		Tt: function()
		{
			if (0 < this.Df && null == this.h.uf) this.rr && (1 == this.h.Pj && (0 <= this.Gr ? this.h.Uc[this.Gr] && (this.resume(), this.ib = 0, this.j.qe(-458755)) : this.h.Pj && (this.resume(), this.ib = 0, this.j.qe(-458755))), this.h.Pj = !1), null != this.pr && this.pr.DG(), a = this.ib;
			else
			{
				this.h.st |=
					l.Mw;
				var a = this.gG();
				this.h.st &= ~l.Mw;
				0 != (this.Cc & h.tm) && (this.gz = (new Date).getTime() - this.tk, this.ls(!0), this.j.ds())
			}
			if (a == h.Zo || a == h.Ls || a == h.Yo)
			{
				this.h.Gf = document.createElement("canvas");
				this.h.Gf.width = this.h.ja;
				this.h.Gf.height = this.h.oa;
				var b = new Ba(this.h.Gf);
				this.h.frame.Aq ? b.Pp(0, 0, this.ja, this.oa) : b.oc(0, 0, this.ja, this.oa, this.Zf);
				b.oc(0, 0, this.h.ja, this.h.oa, this.h.Zf);
				this.h.$d.rb(b, 0, 0)
			}
			if (0 != a) switch (a)
			{
				case 5:
					this.pause();
					this.h.Pj = !1;
					this.rr = !0;
					a = 0;
					break;
				case 101:
					if (this.A.dO) break;
					this.fz();
					this.Cu();
					this.ls(!1);
					this.Nl(-1, !1);
					this.j.ds();
					this.iu();
					this.ju();
					this.A.yi = this.A.Eu = this.nk = 0;
					this.A.zi = this.A.Fu = this.pk = 0;
					this.h.JB();
					this.qt();
					this.vu();
					this.Nl(-1, !1);
					this.Iv();
					this.Nt(!1);
					this.Wt();
					this.Ku();
					this.j.Jv();
					this.j.Kp(this);
					this.bu();
					this.nC();
					this.Np();
					this.am = a = 0;
					break;
				case 100:
				case -2:
					this.j.qe(-196611)
			}
			return this.ib = a
		},
		$G: function(a)
		{
			var b;
			100 < this.ib && (this.ib = h.Xo);
			b = this.am;
			this.yI();
			this.Cu();
			this.ls(a);
			this.j.ds();
			this.ju();
			this.iu();
			this.Nl(-1, !0);
			this.h.$F();
			return n.sE(this.ib, b)
		},
		vu: function()
		{
			var a;
			for (a = 0; a < this.zg; a++) this.F[a] = null
		},
		Iv: function()
		{
			var a, b;
			this.Cc |= h.OD;
			this.Cc |= h.Gs;
			var c = this.eo = 0;
			this.P = Array(this.ie);
			this.sk = 0;
			for (a = this.h.Ic.uz(); null != a; a = this.h.Ic.yz())
				if (b = a.ve, b >= p.Be)
				{
					this.P[c] = new H;
					this.P[c].HF(a);
					this.P[c].Sn = -1;
					if (b == p.Qf || b == p.Cx)
						for (b = this.A.md.hq(); null != b; b = this.A.md.In())
							if (b.sf == this.P[c].Nc)
							{
								this.P[c].Sn = b.Ai;
								break
							} c++;
					a = a.fc;
					if (0 != (a.og & z.ah) && null != a.ng)
						for (b = 0; b < a.ng.Gn; b++)
						{
							var d = a.ng.wd[b];
							d.gv == O.zE && (this.sk |=
								1 << d.vl - 1)
						}
				} for (c = 0; c < this.A.yc; c++) this.A.fb[c].iv = 1;
			return 0
		},
		By: function()
		{
			var a, b, c, d, e;
			this.Cc &= ~h.tm;
			c = 0;
			for (e = this.A.md.hq(); null != e; c++, e = this.A.md.In())
				if (a = this.h.Ic.Mj(e.sf), b = a.fc, a = a.ve, !(a < p.Nf) && 0 == (b.og & z.Hx) && (d = h.Uw, e.Hu == xa.Jx))
				{
					if (0 == (b.Hi & z.qp))
					{
						if (a != p.Qf) continue;
						d |= h.Dk
					}
					0 == (b.og & z.Ex) && this.Um(e.Ai, e.sf, 2147483648, 2147483648, -1, d, -1, -1)
				} this.j.Kp(this);
			this.tk = (new Date).getTime() - this.gz
		},
		Nt: function(a)
		{
			var b, c, d, e, f;
			d = 0;
			for (f = this.A.md.hq(); null != f; d++, f = this.A.md.In())
				if (b =
					this.h.Ic.Mj(f.sf), c = b.fc, b = b.ve, e = h.Uw, f.Hu == xa.Jx)
				{
					b == p.Qf && (e |= h.ss);
					if (0 == (c.Hi & z.qp))
					{
						if (b == p.Cx) continue;
						e |= h.Dk
					}
					a && b >= p.Nf && 0 == (c.og & z.Hx) || 0 == (c.og & z.Ex) && this.Um(f.Ai, f.sf, 2147483648, 2147483648, -1, e, -1, -1)
				} this.Cc &= ~h.Gs
		},
		Cu: function()
		{
			var a;
			for (a = 0; a < this.zg && 0 != this.hb; a++)
				if (null != this.F[a])
				{
					var b = this.F[a];
					(32 > b.wa || b.M.mc != h.nm) && this.gq(a, !0)
				} for (a = 0; a < this.zg && 0 != this.hb; a++) null != this.F[a] && (b = this.F[a], 32 <= b.wa && b.M.mc == h.nm && this.gq(a, !0))
		},
		ls: function(a)
		{
			a || (0 == (this.h.bn & l.TD) ?
				this.h.Qc.xw() : this.h.Qc.YG())
		},
		Nl: function(a, b)
		{
			var c, d;
			d = -1 == a ? this.A.yc : a + 1;
			for (c = 0; c < d; c++)
			{
				var e = this.A.fb[c];
				e.reset();
				e.SF();
				b && e.My()
			}
		},
		Np: function()
		{
			0 != this.sk && this.YB(-1)
		},
		iu: function()
		{
			0 != this.sk && this.YB(0)
		},
		YB: function(a)
		{
			0 <= a ? this.h.sw(1) : this.h.sw(-1)
		},
		nC: function()
		{
			this.h.sw(1)
		},
		ot: function(a)
		{
			var b, c;
			for (c = 0; c < this.qk.size() && (b = this.qk.get(c), !n.xb(b.name, a)); c++);
			c == this.qk.size() && (b = new ob, this.qk.add(b), c = this.qk.size() - 1, b.name = a, b.Ya = 0);
			return c
		},
		yI: function()
		{
			var a, b, c, d,
				e, f;
			for (c = 0; c < this.P.length; c++)
				if (b = this.P[c], f = b.gb, 32767 != b.Nc && 0 == (f & 2147483648) && (d = this.h.Ic.Mj(b.Nc), 0 != (d.Dh & p.Ix) && (a = this.F[f], b.Ad == p.Qf || b.Ad == p.zm || null != a.R)))
				{
					e = b.Dl + b.Ad.toString();
					null == this.h.ji && (this.h.ji = new L);
					var g = !1;
					d = null;
					for (a = 0; a < this.h.ji.size(); a++)
						if (d = this.h.ji.get(a), e == d.name)
						{
							g = !0;
							break
						} 0 == g ? (d = new Td, d.name = e, d.zf = new L, this.h.ji.add(d)) : d.zf.clear();
					for (;;)
					{
						a = this.F[f];
						if (b.Ad == p.Qf) f = new Vd, f.text = a.dm, f.ab = a.ab, d.zf.add(f);
						else if (b.Ad == p.zm) f = new Ud, f.value =
							a.ra, f.ab = a.ab, f.Ec = a.Ec, f.Nr = a.Nr, f.Mr = a.Mr, d.zf.add(f);
						else
						{
							e = new Wd;
							e.Ya = a.R.Pr;
							e.values = Array(a.R.Na.length);
							for (f = 0; f < a.R.Na.length; f++) e.values[f] = a.R.Na[f];
							e.Gg = Array(a.R.ke.length);
							for (f = 0; f < a.R.ke.length; f++) e.Gg[f] = a.R.ke[f];
							d.zf.add(e)
						}
						f = a.Qb;
						if (0 != (f & 2147483648)) break
					}
				}
		},
		Ku: function()
		{
			var a, b, c, d, e, f;
			if (null != this.h.ji)
				for (c = 0; c < this.P.length; c++)
					if (b = this.P[c], a = b.gb, 32767 != b.Nc && 0 <= a && (e = this.h.Ic.Mj(b.Nc), 0 != (e.Dh & p.Ix)))
						for (f = b.Dl + b.Ad.toString(), d = 0; d < this.h.ji.size(); d++)
							if (e = this.h.ji.get(d),
								f == e.name)
							{
								for (d = 0;;)
								{
									a = this.F[a];
									if (b.Ad == p.Qf) f = e.zf.get(d), a.dm = f.text, a.ab = f.ab, a.b.L = !0, a.GN = !0;
									else if (b.Ad == p.zm) f = e.zf.get(d), a.ra = f.value, a.ab = f.ab, a.Ec = f.Ec, a.Nr = f.Nr, a.Mr = f.Mr, a.EN = !0, a.b.L = !0;
									else
									{
										f = e.zf.get(d);
										a.R.Pr = f.Ya;
										a.R.ui(f.values.length);
										a.R.BG(f.Gg.length);
										var g;
										for (g = 0; g < f.values.length; g++) a.R.Na[g] = f.values[g];
										for (g = 0; g < f.Gg.length; g++) a.R.ke[g] = f.Gg[g]
									}
									a = a.Qb;
									if (0 != (a & 2147483648)) break;
									d++;
									if (d >= e.zf.size()) break
								}
								break
							}
		},
		Um: function(a, b, c, d, e, f, g, m)
		{
			for (;;)
			{
				var q = new tc,
					l = null; - 1 != a && (l = this.A.md.sG(a));
				var n = this.h.Ic.Mj(b),
					p = n.fc;
				0 == (p.Hi & z.qp) && (f |= h.Dk);
				if (this.hb >= this.zg) break;
				var k = null,
					r = new F;
				switch (n.ve)
				{
					case 2:
						k = new Hc;
						break;
					case 3:
						k = new Lc;
						break;
					case 4:
						k = new Mc;
						break;
					case 5:
						k = new Jc;
						break;
					case 6:
						k = new Kc;
						break;
					case 7:
						k = new ba;
						break;
					case 8:
						break;
					case 9:
						k = new I;
						break;
					default:
						k = new Nc(n.ve, this), null == k.ext && (k = null)
				}
				if (null == k) break;
				k.prototype = r;
				k.iH = l;
				if (0 > m)
					for (m = 0; m < this.zg && null != this.F[m]; m++);
				if (m >= this.zg) break;
				this.F[m] = k;
				this.hb++;
				k.IG = p.mc;
				k.ka =
					p.og;
				m > this.PB && this.hw++;
				k.yb = m;
				this.eo++;
				0 == this.eo && (this.eo = 1);
				k.kn = this.eo;
				k.zb = b;
				k.qq = a;
				k.wa = n.ve;
				this.IH(k);
				k.c = this;
				k.jn = !0;
				k.M = p;
				0 == (k.ka & z.Fx) && (k.ka &= ~z.rj, 0 != (k.Ge & H.sp) && 0 != (this.A.Hb & E.mx) && (k.ka |= z.rj), 0 != (k.Ge & (H.Dd | H.tp)) && (k.ka |= z.rj));
				a = c;
				2147483648 == a && (a = l.Iu);
				q.yF = a;
				k.v = a;
				2147483648 == d && (d = l.Ju);
				q.zF = d;
				k.u = d;
				null != l && -1 == g && (g = l.Wz);
				q.ry = g;
				k.ud = g;
				g = this.A.fb[g];
				g.iv++;
				q.sy = g.iv;
				q.Km = f;
				q.qy = e;
				q.xF = l;
				k.b = null;
				0 != (k.ka & (z.ei | z.ah | z.fi)) && (k.b = new Ic, k.b.X());
				k.w = null;
				0 != (k.ka & z.ah) &&
					(k.w = new ya, 0 == (q.Km & h.Vw) && k.w.X(0, k, p, q, -1));
				k.U = null;
				0 != (k.ka & z.ei) && (k.U = new Ea, k.U.X(k));
				k.D = null;
				0 != (k.ka & z.fi) && (k.D = new w, k.D.JG(k, p, q));
				k.R = null;
				0 != (k.ka & z.OE) && (k.R = new Ca, k.R.X(k, p, q));
				k.X(p, q);
				0 != (k.ka & z.fi) && k.D.vq(!0);
				1 <= this.Yb && k.hh();
				return m
			}
			return -1
		},
		gq: function(a, b)
		{
			var c = this.F[a];
			if (null != c)
			{
				if (1 != b || 0 != c.kn) this.aH(c), null != c.w && c.w.Ab(b), null != c.R && c.R.Ab(b), null != c.D && c.D.Ab(b), null != c.b && c.b.Ab(b), c.Ab(b), this.HH(c);
				this.F[a] = null;
				this.hb--
			}
		},
		kf: function(a)
		{
			this.rk[Math.floor(a /
				32)] |= 1 << (a & 31);
			this.mo++
		},
		TF: function()
		{
			if (0 != this.mo)
				for (var a = 0, b, c; a < this.zg;)
				{
					b = this.rk[a / 32];
					if (0 != b)
					{
						for (c = this.rk[a / 32] = 0; 0 != b && 32 > c; c++)
						{
							if (0 != (b & 1))
							{
								var d = this.F[a + c];
								null != d && 1 == d.jc.rg && this.j.ed(d, d.wa | -2162688);
								this.gq(a + c, !1);
								this.mo--
							}
							b >>= 1
						}
						if (0 == this.mo) break
					}
					a += 32
				}
		},
		aH: function(a)
		{
			var b = 0,
				c, d;
			for (c = 0; c < this.hb; c++)
			{
				for (; null == this.F[b];) b++;
				d = this.F[b];
				b++;
				null != d.w && d.b.Oc == O.wx && (d = d.w.$, d.Lk == a && 1 == d.ep && d.sC())
			}
		},
		hh: function()
		{
			var a, b, c;
			for (c = a = 0; a < this.hb; a++)
			{
				for (; null == this.F[c];) c++;
				c++
			}
			for (c = a = 0; a < this.hb; a++)
			{
				for (; null == this.F[c];) c++;
				b = this.F[c];
				c++;
				b.hh()
			}
		},
		IH: function(a)
		{
			var b = a.zb,
				c;
			for (c = 0; c < this.ie && this.P[c].Nc != b; c++);
			b = this.P[c];
			0 != (b.gb & 2147483648) ? (b.gb = a.yb, a.eg = c | 2147483648, a.Qb = 2147483648) : (c = this.F[b.gb], a.eg = c.eg, c.eg = a.yb, a.Qb = c.yb, b.gb = a.yb);
			a.ru = b.uv;
			a.jc = b;
			a.Ge = b.zd; - 1 == a.qq ? a.qq = b.Sn : -1 == b.Sn && (b.Sn = a.qq);
			b.rg += 1
		},
		HH: function(a)
		{
			var b = a.jc;
			--b.rg;
			var c;
			0 == (a.eg & 2147483648) ? (c = this.F[a.eg], 0 == (a.Qb & 2147483648) ? (b = this.F[a.Qb], null != c && (c.Qb = a.Qb), null !=
				b && (b.eg = a.eg)) : null != c && (c.Qb = 2147483648)) : 0 == (a.Qb & 2147483648) ? (c = this.F[a.Qb], null != c && (c.eg = a.eg, b.gb = c.yb)) : b.gb = 2147483648
		},
		vD: function()
		{
			var a = this.ix();
			if (null != a)
			{
				var b = 0,
					c;
				for (c = 0; c < this.hb; b++, c++)
				{
					for (; null == this.F[b];) b++;
					var d = this.F[b];
					32 <= d.wa && (d.M.mc == h.Ds || d.M.mc == h.it || d.M.mc == h.TE || d.M.mc == h.wp || d.M.mc == h.Ms ? d.ext.cI() : d.M.mc == h.nm && d.ext.cI())
				}
				for (c = b = 0; c < this.hb; b++, c++)
				{
					for (; null == this.F[b];) b++;
					d = this.F[b];
					if (0 != (d.ka & z.ah))
					{
						var e = !1;
						if (d.b.Oc == O.qj)
						{
							var f = d.M.ng.wd[d.w.nw];
							if (n.xb(f.Lc, "box2d8directions") || n.xb(f.Lc, "box2dspring") || n.xb(f.Lc, "box2dspaceship") || n.xb(f.Lc, "box2dstatic") || n.xb(f.Lc, "box2dracecar") || n.xb(f.Lc, "box2daxial") || n.xb(f.Lc, "box2dplatform") || n.xb(f.Lc, "box2dbouncingball") || n.xb(f.Lc, "box2dbackground")) e = !0
						}
						0 == e && 2 == d.wa && a.bI(d)
					}
				}
				for (c = b = 0; c < this.hb; b++, c++)
					for (; null == this.F[b];) b++
			}
		},
		ix: function()
		{
			if (0 == this.NB)
			{
				this.NB = !0;
				this.Ph = null;
				var a = 0,
					b;
				for (b = 0; b < this.hb; a++, b++)
				{
					for (; null == this.F[a];) a++;
					var c = this.F[a];
					if (32 <= c.wa && c.M.mc == h.nm)
					{
						this.Ph =
							c.ext;
						break
					}
				}
			}
			return this.Ph
		},
		To: function(a)
		{
			if (a && 0 == (a.W & F.Tg) && 0 != (a.ka & z.ah) && a.b.Oc == O.qj)
			{
				var b = a.M.ng.wd[a.w.nw];
				if (n.xb(b.Lc, "box2d8directions") || n.xb(b.Lc, "box2dspring") || n.xb(b.Lc, "box2dspaceship") || n.xb(b.Lc, "box2dstatic") || n.xb(b.Lc, "box2dracecar") || n.xb(b.Lc, "box2daxial") || n.xb(b.Lc, "box2dplatform") || n.xb(b.Lc, "box2dbouncingball") || n.xb(b.Lc, "box2dbackground")) return a.w.$.xd
			}
			return null
		},
		kF: function(a)
		{
			if (a.M.mc == h.Ds || a.M.mc == h.it || a.M.mc == h.Ms || a.M.mc == h.wp)
			{
				var b = 0,
					c;
				for (c = 0; c < this.hb; b++,
					c++)
				{
					for (; null == this.F[b];) b++;
					var d = this.F[b];
					32 <= d.wa && d.M.mc == h.nm && (a.M.mc == h.Ds ? a.ext.identifier == d.ext.identifier && d.ext.eO.add(a.ext) : a.M.mc == h.it ? a.ext.identifier == d.ext.identifier && d.ext.lP.add(a.ext) : a.M.mc == h.Ms ? a.ext.identifier == d.ext.identifier && d.ext.HO.add(a.ext) : a.M.mc == h.wp && a.ext.identifier == d.ext.identifier && d.ext.$O.add(a.ext))
				}
				if (a.M.mc != h.wp)
					for (c = b = 0; c < this.hb; b++, c++)
					{
						for (; null == this.F[b];) b++;
						d = this.F[b];
						d.wa == p.Be && (d = this.To(d)) && a.ext.RO(d)
					}
			}
		},
		Lb: function(a)
		{
			return null !=
				a.w && null != a.w.$ ? a.w.$.Lb() : a.b.Ma
		},
		pause: function(a)
		{
			if (0 == this.Df)
			{
				this.Df = 1;
				this.MB = this.h.Ae;
				var b = 0,
					c;
				for (c = 0; c < this.hb; c++)
				{
					for (; null == this.F[b];) b++;
					b++
				}
				a || this.h.Qc.pause()
			}
		},
		resume: function()
		{
			if (!this.CH && 0 != this.Df)
			{
				this.Df = 0;
				this.Np();
				var a = 0,
					b;
				for (b = 0; b < this.hb; b++)
				{
					for (; null == this.F[a];) a++;
					a++
				}
				this.h.Qc.resume();
				a = this.h.Ae;
				a -= this.MB;
				this.tk += a;
				this.Gr = 0;
				this.rr = !1
			}
		},
		fz: function()
		{
			this.h.Qc.xw()
		},
		mi: function()
		{
			var a = 0,
				b;
			for (b = 0; b < this.hb; b++)
			{
				for (; null == this.F[a];) a++;
				var c = this.F[a];
				a++;
				c.mi()
			}
		},
		Vf: function(a, b, c)
		{
			a = this.jJ(a, b, c);
			return null != a ? a.top : h.Ye
		},
		jJ: function(a, b, c)
		{
			b -= this.ea;
			c -= this.ia;
			var d; - 1 == a ? (d = 0, a = this.A.yc) : (d = a, a += 1);
			for (; d < a; d++)
			{
				var e = this.A.fb[d].tG(b, c);
				if (null != e) return e
			}
			return null
		},
		bu: function()
		{
			this.tk = this.h.Ae;
			this.mo = this.mw = this.ib = this.Yb = this.Xi = 0;
			var a;
			for (a = 0; a < (this.zg + 31) / 32; a++) this.rk[a] = 0;
			this.ew = this.A.tn;
			this.fw = this.A.sn;
			this.Tl = -h.fx;
			this.Xl = -h.gx;
			this.Rl = this.ge + h.fx;
			this.Vl = this.he + h.gx;
			this.nk = a = this.ea;
			a -= h.om;
			0 > a && (a = this.Tl);
			this.Sl = a;
			this.pk = a = this.ia;
			a -= h.pm;
			0 > a && (a = this.Xl);
			this.Wl = a;
			a = this.ea;
			a += this.ew + h.om;
			a > this.ge && (a = this.Rl);
			this.Ql = a;
			a = this.ia;
			a += this.fw + h.pm;
			a > this.he && (a = this.Vl);
			this.Ul = a;
			for (a = this.Df = this.$l = this.gw = this.dw = 0; 4 > a; a++) this.Pc[a] = 0, this.Ar[a] = 0, this.zr[a] = 255;
			this.lk = 0;
			this.j.Dt = !1;
			this.j.ko = !1;
			this.Gr = 0;
			this.Ph = null;
			this.NB = !1;
			this.iw = this.Cr = this.Br = this.OB = null;
			for (a = 0; a < h.$o; a++) this.Er[a] = 20;
			this.Yl = 0
		},
		gG: function()
		{
			this.h.Qc.wF();
			if (null != this.h.ta && this.h.hg) return this.tk = this.h.Ae,
				this.Xi = 0, this.ib;
			if (null != this.h.uf) return this.h.uf.handle(), 0;
			this.At || (this.vD(), this.At = !0);
			var a = this.h.Ae - this.tk,
				b = this.Xi;
			this.Xi = a;
			this.oo = a -= b;
			this.$l += a;
			this.Yb += 1;
			this.pc = this.oo * this.A.bA / 1E3;
			this.Er[this.Yl] = a;
			this.Yl++;
			this.Yl >= h.$o && (this.Yl = 0);
			for (a = 0; 4 > a; a++) this.Ar[a] = this.Pc[a];
			this.XG();
			1 == this.h.rh ? this.Pc[0] |= this.h.pa.lq() & this.jw : 2 == this.h.rh && (this.Pc[0] |= this.h.lq() & this.jw);
			if (0 != this.sk)
				for (this.lu(), this.lk = 0, this.h.Uc[l.af] && (this.lk |= 16), this.h.Uc[l.Cp] && (this.lk |=
						32), a = 0; a < this.lw; a++) 0 != (this.IO & 1) && (b = this.Pc[a] & 207, b |= this.lk, this.Pc[a] = b);
			else this.lu();
			for (a = 0; 4 > a; a++)
				if (b = this.Pc[a] & h.UH[4 * this.lw + a], b &= this.zr[a], this.Pc[a] = b, b ^= this.Ar[a], this.bw[a] = b, 0 != b)
					if (b &= this.Pc[a], 0 != (b & 240)) this.j.QB = a, b = this.bw[a], 0 != (b & 240) && (this.j.Bc = b, this.j.qe(-196615)), 0 != (b & 15) && (this.j.Bc = b, this.j.qe(-196615));
					else
					{
						var c = this.j.Tb[this.j.xe[-p.Bx] + 4];
						0 != c && (this.j.Bc = b, this.j.hf(c, null))
					} if (0 != this.hb)
			{
				a = this.hb;
				b = 0;
				do {
					for (this.hw = 0; null == this.F[b];) b++;
					c = this.F[b];
					c.Lz = c.pq;
					c.pq = null;
					c.jn && (this.PB = b, c.handle());
					a += this.hw;
					b++;
					a--
				} while (0 != a)
			}
			this.Wc++;
			this.j.FF();
			this.j.GG();
			this.j.SB && 0 == (this.Cc & h.tm) && this.j.hf(0, null);
			this.j.FG();
			this.TF();
			this.doScroll();
			this.j.LB = -1;
			this.gw++;
			if (0 == this.ib) return this.mw;
			this.ib != h.Zo && this.ib != h.Ls && this.ib != h.Xo && this.ib != h.Yo && this.ib != h.pE && this.ib != h.Ks || this.j.qe(-65539);
			return this.ib
		},
		XG: function()
		{
			var a;
			for (a = 0; 4 > a; a++) this.Pc[a] = 0;
			var b = this.h.mG();
			for (a = 0; 4 > a; a++)
			{
				var c;
				for (c = 0; c < l.um; c++) this.h.Uc[b[a * l.um +
					c]] && (this.Pc[a] |= 1 << c)
			}
		},
		lu: function()
		{
			this.io = this.h.vf + this.ea - this.h.Hf;
			this.jo = this.h.wf + this.ia - this.h.If
		},
		yf: function(a)
		{
			a.w.N = !1;
			h.Yx = !1;
			a.w.bm = 0;
			var b, c;
			0 != (a.Ge & H.tp) && (b = this.or(a.b.Uv, a.b.Wv, a.b.Vv, a.b.Xv), 0 != b && (c = this.or(a.v - a.fa, a.u - a.ga, a.v - a.fa + a.K, a.u - a.ga + a.J), 0 == c && (b ^= c, 0 != b && (a.w.bm |= ya.BD, this.j.Bc = b, this.j.ed(a, -720896 | a.wa & 65535)))), b = this.or(a.v - a.fa, a.u - a.ga, a.v - a.fa + a.K, a.u - a.ga + a.J), 0 != (b & a.w.ow) && (c = a.w.N, 0 != (b & h.Qg) ? a.w.$.ac(a.v + this.ge) : 0 != (b & h.Rg) && a.w.$.ac(a.v - this.ge),
				0 != (b & h.Sg) ? a.w.$.bc(a.u + this.he) : 0 != (b & h.Pg) && a.w.$.bc(a.u - this.he), a.b.Oc != O.bt && a.b.Oc != O.qj && (a.w.N = c)), b = this.ek(a.b.Uv, a.b.Wv, a.b.Vv, a.b.Xv), b != h.YC && (c = this.ek(a.v - a.fa, a.u - a.ga, a.v - a.fa + a.K, a.u - a.ga + a.J), b = ~b & c, 0 != b && (a.w.bm |= ya.Zw, this.j.Bc = b, this.j.ed(a, -786432 | a.wa & 65535))));
			0 != (a.Ge & H.sp) && (a.b.Oc == O.bt ? a.w.$.BH() : this.al(a, a.b.Ia, a.b.$a, a.b.ub, a.b.vb, a.v, a.u, 0, E.Sd) && this.j.ed(a, -851968 | a.wa & 65535));
			if (0 != (a.Ge & H.Bm) && (b = this.yl(a, a.b.Ia, a.b.$a, a.b.ub, a.b.vb, a.v, a.u, a.jc.Li), null != b))
				for (c =
					0; c < b.size(); c++)
				{
					var d = b.get(c);
					if (0 == (d.W & F.Tg))
					{
						var e = a.wa,
							f = a,
							g = d;
						f.wa > g.wa && (f = d, g = a, e = f.wa);
						this.j.Bc = g.zb;
						this.j.KB = g.yb;
						this.j.ed(f, -917504 | e & 65535)
					}
				}
			return h.Yx
		},
		yl: function(a, b, c, d, e, f, g, m)
		{
			var q = null;
			f -= a.fa;
			var h = f + a.K;
			g -= a.ga;
			var l = g + a.J,
				n, k;
			if (0 != (a.W & F.Kf) || 0 != (a.W & F.Tg)) return q;
			var r = !1,
				t = null,
				z = -1;
			a.wa == p.Be && 0 == (a.D.V & w.Rk) && (r = !0);
			a.wa == p.Be && (z = a.D.cm);
			var v = a.W;
			a.W |= F.Kf;
			var u = 0,
				A, P, C;
			if (null != m)
				for (u = 0; u < m.length; u += 2)
					for (var E = this.P[m[u + 1]].gb; 0 == (E & 2147483648);)
					{
						if (A = this.F[E],
							E = A.Qb, 0 == (A.W & F.Kf) && 0 == (A.W & F.Tg) && (P = A.v - A.fa, C = A.u - A.ga, P < h && P + A.K > f && C < l && C + A.J > g)) switch (A.wa)
						{
							case p.Be:
								(0 > z || 0 <= z && z == A.D.cm) && 0 != (A.D.V & w.sj) && (0 == r || 0 != (A.D.V & w.Rk) ? (null == q && (q = new L), q.add(A)) : (null == t && (k = this.h.ca.Mb(b), null != k && (t = k.ag(0, c, d, e))), k = this.h.ca.Mb(A.b.Ia), null != k && (n = k.ag(0, A.b.$a, A.b.ub, A.b.vb)), null != t && null != n && t.bj(f, g, 0, n, P, C, 0) && (null == q && (q = new L), q.add(A))));
								break;
							case p.Qf:
							case p.zm:
							case p.ct:
							case p.op:
							case p.yx:
								null == q && (q = new L);
								q.add(A);
								break;
							default:
								null ==
									q && (q = new L), q.add(A)
						}
					}
			else
				for (m = 0; m < this.hb; m++)
				{
					for (; null == this.F[u];) u++;
					A = this.F[u];
					u++;
					if (0 == (A.W & F.Kf) && (P = A.v - A.fa, C = A.u - A.ga, P < h && P + A.K > f && C < l && C + A.J > g)) switch (A.wa)
					{
						case p.Be:
							(0 > z || 0 <= z && z == A.D.cm) && 0 != (A.D.V & w.sj) && (0 == r || 0 != (A.D.V & w.Rk) ? (null == q && (q = new L), q.add(A)) : (null == t && (k = this.h.ca.Mb(b), null != k && (t = k.ag(0, c, d, e))), k = this.h.ca.Mb(A.b.Ia), null != k && (n = k.ag(0, A.b.$a, A.b.ub, A.b.vb)), null != t && null != n && t.bj(f, g, 0, n, P, C, 0) && (null == q && (q = new L), q.add(A))));
							break;
						case p.Qf:
						case p.zm:
						case p.ct:
						case p.op:
						case p.yx:
							null ==
								q && (q = new L);
							q.add(A);
							break;
						default:
							null == q && (q = new L), q.add(A)
					}
				}
			a.W = v;
			return q
		},
		al: function(a, b, c, d, e, f, g, m, q)
		{
			b = this.A.fb[a.ud];
			switch (a.wa)
			{
				case p.Be:
					if (0 == (a.D.V & w.Rk))
					{
						if (a = this.h.ca.Mb(a.b.Ia), null != a) return a = a.ag(B.Hk, c, d, e), null != b.bj(a, f - this.ea, g - this.ia, m, q)
					}
					else return f = f - a.fa - this.ea, g = g - a.ga - this.ia, c = f + a.K, a = g + a.J, m = null != b.Yr(f, g, c, a, m, q);
					return !1;
				default:
					return f = f - a.fa - this.ea, g = g - a.ga - this.ia, c = f + a.K, a = g + a.J, m = null != b.Yr(f, g, c, a, m, q)
			}
		},
		ek: function(a, b, c, d)
		{
			var e = 0;
			0 > a && (e |= h.Qg);
			0 > b && (e |= h.Sg);
			c > this.ge && (e |= h.Rg);
			d > this.he && (e |= h.Pg);
			return h.Px[e]
		},
		or: function(a, b, c, d)
		{
			var e = 15;
			a < this.ge && (e &= ~h.Rg);
			b < this.he && (e &= ~h.Pg);
			0 < c && (e &= ~h.Qg);
			0 < d && (e &= ~h.Sg);
			return h.Px[e]
		},
		random: function(a)
		{
			var b = 31415 * this.cw + 1;
			this.cw = b &= 65535;
			return b * a >>> 16
		},
		Gz: function(a)
		{
			if (0 == a || -1 == a) return this.random(32);
			var b, c = 0,
				d = 0,
				e = a;
			for (b = 0; 32 > b; b++) 0 != (e & 1) && (d++, c = b), e >>>= 1;
			if (1 == d) return c;
			d = this.random(d);
			e = a;
			for (b = 0; 32 > b; b++)
			{
				if (0 != (e & 1) && (d--, 0 > d)) return b;
				e >>>= 1
			}
			return 0
		},
		fn: function(a)
		{
			this.lo =
				a.Da;
			this.Ef = 0;
			this.jl = !1;
			return this.getExpression()
		},
		Ld: function(a)
		{
			this.lo = a.Da;
			this.Ef = 0;
			this.jl = !1;
			return this.getExpression()
		},
		Hz: function()
		{
			this.jl = !1;
			var a = this.getExpression();
			return 0 > a ? Math.ceil(a) : Math.floor(a)
		},
		getExpression: function()
		{
			var a, b = this.wb;
			this.Zl[this.wb] = this.Fr;
			do {
				this.wb++;
				this.lo[this.Ef].evaluate(this);
				this.Ef++;
				do
					if (a = this.lo[this.Ef], 0 < a.code && 1310720 > a.code) a.code > this.Zl[this.wb - 1].code ? (this.Zl[this.wb] = a, this.Ef++, this.wb++, this.lo[this.Ef].evaluate(this), this.Ef++) :
						(this.wb--, this.Zl[this.wb].evaluate(this));
					else
					{
						this.wb--;
						if (this.wb == b) break;
						this.Zl[this.wb].evaluate(this)
					} while (1)
			} while (this.wb > b + 1);
			return this.Xc[b + 1]
		},
		Fw: function(a, b, c)
		{
			a++;
			var d = 0,
				e;
			for (e = 0; e < this.hb; e++)
			{
				for (; null == this.F[d];) d++;
				var f = this.F[d];
				if (f.wa == b) switch (b)
				{
					case 5:
						f.Sh == a && f.Xr(c);
						break;
					case 6:
						f.Sh == a && f.Xr(c)
				}
				d++
			}
		},
		Dp: function(a, b)
		{
			var c = this.h.Lj();
			b != c[a] && (0 == b && 0 != c[a] && this.j.uB(0, -262151, 0, null, a), c[a] = b, this.Fw(a, p.ct, b))
		},
		EC: function(a, b, c)
		{
			var d = new Ga;
			if (a.H[0].Ml(this,
					16, d))
			{
				a = 0;
				var e;
				for (e = 0; e < this.hb; e++)
				{
					for (; null == this.F[a];) a++;
					var f = this.F[a];
					a++;
					if (f.wa == p.Qf && f.zb == b && f.v == d.x && f.u == d.y) return f.D.Zq(), f.W &= ~F.Kf, f.ab = -2, f.DC(c), f.D.so = 0, f.D.V |= w.Sf, f.yb
				}
				b = this.Um(-1, b, d.x, d.y, 0, 0, this.A.yc - 1, -1);
				if (0 <= b) return this.F[b].DC(c), b
			}
			return -1
		},
		bJ: function(a, b)
		{
			if (0 == (a.Xa & 32768)) return this.EC(a, a.Kb, b);
			if (32767 == (a.Xa & 32767)) return -1;
			for (var c = this.j.Pb[a.Xa & 32767], d = 0; d < c.Ba.length;) this.EC(a, c.Ba[d], b), d += 2;
			return -1
		},
		Qz: function(a)
		{
			var b = !1,
				c = 0;
			if (0 != (a.ka &
					z.ei))
			{
				if (null != a.D && a.D.KG()) return;
				null != a.U && a.U.Tf(v.Ck) && (c = 1)
			}
			0 == c && (b = !0);
			b ? (a.jn = !1, this.kf(a.yb)) : (null != a.D && (a.D.Qr(!1), a.W |= F.Kf), null != a.w && (a.w.Ab(!1), a.w.Oz(a, O.yE, !1), a.b.Z = 0), 0 != (c & 1) && (a.U.Em(v.Ck), a.U.Jp()))
		},
		Wt: function()
		{
			var a, b = new Y,
				c;
			for (c = 0; c < this.A.yc; c++)
			{
				var d = this.A.fb[c],
					e = 0 != (d.Aa & R.Es),
					f = 0 != (d.Aa & R.Fs),
					g = d.Tq,
					m;
				for (m = 0; m < g; m++)
				{
					a = this.A.md.xz(d.Vq + m);
					a.Dq < p.Be && (b.left = a.Iu, b.top = a.Ju);
					var q;
					q = new ga(this.h, b.left, b.top, a, null, 0);
					q.cd(0, d);
					e ? (q = new ga(this.h, this.A.fd +
						b.left, b.top, a, null, 0), q.cd(1, d), b.left + q.width > this.A.fd && (q = new ga(this.h, b.left - this.A.fd, b.top, a, null, 0), q.cd(4, d)), f && (q = new ga(this.h, b.left, this.A.kc + b.top, a, null, 0), q.cd(2, d), q = new ga(this.h, this.A.fd + b.left, this.A.kc + b.top, a, null, 0), q.cd(3, d), b.top + q.height > this.A.kc && (q = new ga(this.h, b.left, b.top - this.A.kc, a, null, 0), q.cd(5, d)))) : f && (q = new ga(this.h, b.left, this.A.kc + b.top, a, null, 0), q.cd(2, d), b.top + q.height > this.A.kc && (q = new ga(this.h, b.left, b.top - this.A.kc, a, null, 0), q.cd(5, d)))
				}
			}
		},
		FI: function()
		{
			var a,
				b, c = this.nk,
				d = this.pk,
				e, f;
			for (a = 0; a < this.A.yc; a++)
			{
				b = this.A.fb[a];
				e = c * b.lm + b.bq;
				f = d * b.mm + b.cq;
				var g = 0 != (b.Aa & R.Fs);
				0 != (b.Aa & R.Es) && (0 > e && (e = e % this.A.fd + this.A.fd), e > this.A.fd && (e %= this.A.fd));
				g && (0 > f && (f = f % this.A.kc + this.A.kc), f > this.A.kc && (f %= this.A.kc));
				b.x = e;
				b.y = f;
				b.Vb.x = -e + this.h.Hf;
				b.Vb.y = -f + this.h.If;
				b.Cb.x = -e + this.h.Hf;
				b.Cb.y = -f + this.h.If;
				b.Ha.x = -e + this.h.Hf;
				b.Ha.y = -f + this.h.If
			}
			this.A.yi = this.nk;
			this.A.zi = this.pk
		},
		HG: function()
		{
			var a;
			for (a = 0; a < this.A.yc; a++)
			{
				var b = this.A.fb[a];
				b.Aa & R.rm && b.oq()
			}
		},
		hJ: function(a, b)
		{
			var c = 0;
			this.Ir = a - this.ea;
			0 != this.Ir && c++;
			this.Jr = b - this.ia;
			0 != this.Jr && c++;
			var d, e;
			if (0 == c)
				for (e = 0; e < this.A.yc; e++)
					if (d = this.A.fb[e], 0 != d.bq || 0 != d.cq)
					{
						c++;
						break
					} e = this.ea;
			var f = this.ia,
				g = this.Ir,
				m = this.Jr;
			this.ea = a;
			this.Sl = a - h.om;
			0 > this.Sl && (this.Sl = this.Tl);
			this.ia = b;
			this.Wl = b - h.pm;
			0 > this.Wl && (this.Wl = this.Xl);
			this.Ql = a + this.ew + h.om;
			this.Ql > this.ge && (this.Ql = this.Rl);
			this.Ul = b + this.fw + h.pm;
			this.Ul > this.he && (this.Ul = this.Vl);
			var q = 0,
				l;
			for (l = 0; l < this.hb; l++)
			{
				for (; null == this.F[q];) q++;
				var n = this.F[q];
				q++;
				if (0 != c)
					if (0 != (n.ka & z.NE))
					{
						d = g;
						var p = m;
						null == n.w ? (n.v += d, n.u += p) : (d += n.v, p += n.u, n.w.$.ac(d), n.w.$.bc(p))
					}
				else if (d = n.ud, d < this.A.yc)
				{
					var k = e,
						p = f,
						r = a,
						t = b;
					d = this.A.fb[d];
					0 != (d.Aa & R.JD) && (k *= d.lm, r *= d.lm);
					0 != (d.Aa & R.KD) && (p *= d.mm, t *= d.mm);
					k = n.v + k - r + g - d.bq;
					d = n.u + p - t + m - d.cq;
					0 == (n.ka & z.ah) ? (n.v = k, n.u = d) : (n.w.$.ac(k), n.w.$.bc(d));
					n.kl()
				}
			}
		},
		doScroll: function()
		{
			if (0 != (this.dw & h.XE))
			{
				this.dw = 0;
				if (this.A.yi != this.nk || this.A.zi != this.pk) this.FI(), this.hJ(this.A.yi, this.A.zi);
				this.nk = this.ea;
				this.pk = this.ia
			}
		},
		Ep: function(a, b, c, d, e, f)
		{
			d = this.A.fb[d];
			var g = new ga(this.h, b - this.ea + d.x, c - this.ea + d.y, null, a, e);
			g.cd(0, d);
			!f || e != X.pp && e != X.Rf || null == this.Ph || (g.body = this.Ph.QO(pHo.v - this.ea + d.x, pHo.u - this.ia + d.y, pHo.b.Ia, e));
			f = 0 != (d.Aa & R.Fs);
			0 != (d.Aa & R.Es) ? (g = new ga(this.h, this.A.fd + b - this.ea + d.x, c - this.ia + d.y, null, a, e), g.cd(1, d), b + g.width > this.A.fd && (g = new ga(this.h, b - this.ea + d.x - this.A.fd, c - this.ia + d.y, null, a, e), g.cd(4, d)), f && (g = new ga(this.h, b - this.ea + d.x, this.A.kc + c - this.ia + d.y, null, a, e),
				g.cd(2, d), g = new ga(this.h, this.A.fd + b - this.ea + d.x, this.A.kc + c - this.ia + d.y, null, a, e), g.cd(3, d), c + g.height > this.A.kc && (g = new ga(this.h, b - this.ea + d.x, c - this.ia + d.y - this.A.kc, null, a, e), g.cd(5, d)))) : f && (g = new ga(this.h, b - this.ea + d.x, this.A.kc + c - this.ia + d.y, null, a, e), g.cd(2, d), c + g.height > this.A.kc && (g = new ga(this.h, b - this.ea + d.x, c - this.ia + d.y - this.A.kc, null, a, e), g.cd(5, d)))
		},
		LH: function(a)
		{
			0 > a ? this.j.qe(-720902) : this.j.qe(-655366)
		},
		iz: function(a)
		{
			var b, c;
			if (0 != this.hb)
				for (b = 0; b < this.zg; b++)
					if ((c = this.F[b]) &&
						c.jc.Dl == a) return this.eu = c.jc.rg - 1, c;
			return null
		},
		jz: function(a)
		{
			if (a && this.eu)
			{
				var b = a.yb + 1;
				a = a.jc.Dl;
				for (var c;;)
				{
					c = this.F[b];
					if (null != c && c.jc.Dl == a) return this.eu--, c;
					b++
				}
			}
			this.eu = 0;
			return null
		}
	};
	tc.Dk = 2;
	H.FM = 15;
	H.RE = 16;
	H.Bm = 128;
	H.Dd = 256;
	H.sp = 512;
	H.tp = 1024;
	H.GM = 2048;
	H.up = 4096;
	H.QE = 65535;
	H.prototype = {
		HF: function(a)
		{
			this.Nc = a.Qn;
			this.Ad = a.ve;
			var b = a.fc;
			this.gB = b.Hi;
			this.fB = a.ov;
			this.eB = a.pv;
			this.dr = b.og;
			this.be = 0;
			this.gb = -1;
			this.zd = H.QE;
			null != a.qv && (this.Dl = a.qv);
			this.El = Array(8);
			for (a = 0; 8 > a; a++) this.El[a] =
				b.lv[a]
		}
	};
	aa.xE = 0;
	aa.ML = 1;
	aa.PL = 2;
	aa.NL = 3;
	aa.JL = 4;
	aa.KL = 5;
	aa.LL = 6;
	aa.IL = 7;
	aa.OL = 8;
	aa.QL = 9;
	aa.FL = 0;
	aa.DL = 1;
	aa.HL = 2;
	aa.EL = 3;
	aa.GL = 4;
	aa.EJ = 123456789;
	aa.prototype = {
		dE: function()
		{
			m_currentAngle = 0
		},
		X: function(a)
		{
			this.Y = a;
			this.Xb = this.Y.c
		},
		Ab: function() {},
		move: function()
		{
			return !1
		},
		setPosition: function() {},
		ac: function() {},
		bc: function() {},
		stop: function() {},
		De: function() {},
		reverse: function() {},
		start: function() {},
		Ue: function() {},
		Dg: function() {},
		Te: function() {},
		Ur: function() {},
		Sr: function() {},
		Rt: function(a)
		{
			return this.Y.w.Rt(this.Y,
				a, 32)
		},
		Fm: function(a)
		{
			this.Y.b.fe = a;
			null != this.Y.U && this.Y.U.Ce()
		},
		lq: function(a)
		{
			return this.Y.c.Pc[a]
		},
		pw: function() {}
	};
	v.Rd = 0;
	v.tc = 1;
	v.me = 2;
	v.Io = 3;
	v.Ck = 4;
	v.SC = 5;
	v.Jo = 6;
	v.Lw = 7;
	v.Kw = 8;
	v.Jw = 9;
	v.os = 10;
	v.Ko = 11;
	v.FJ = 12;
	v.YI = [0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	v.prototype = {
		load: function(a)
		{
			var b = a.da,
				c = Array(32),
				d;
			for (d = 0; 32 > d; d++) c[d] = a.o();
			this.Ed = Array(32);
			this.eh = Array(32);
			this.li = Array(32);
			for (d = 0; 32 > d; d++) this.Ed[d] = null, this.eh[d] = 0, this.li[d] = 0, 0 != c[d] && (this.Ed[d] = new uc, a.seek(b + c[d]), this.Ed[d].load(a))
		},
		cc: function(a)
		{
			var b;
			for (b = 0; 32 > b; b++) null != this.Ed[b] && this.Ed[b].cc(a)
		},
		pF: function(a)
		{
			var b, c, d, e, f;
			for (b = 0; 32 > b; b++)
				if (null == this.Ed[b])
				{
					c = 0;
					for (e = b + 1; 32 > c; c++, e++)
						if (e &= 31, null != this.Ed[e])
						{
							this.eh[b] = e;
							break
						} d = 0;
					for (f = b - 1; 32 > d; d++, f--)
						if (f &= 31, null != this.Ed[f])
						{
							this.li[b] = f;
							break
						} e == f || c < d ? this.eh[b] |= 64 : d < c && (this.li[b] |= 64)
				}
			else 16 > a && 0 == v.YI[a] && (this.Ed[b].nt = this.Ed[b].mt)
		}
	};
	Ka.xC = [v.Io, v.tc, v.me, 0, v.me, v.Rd, 0, 0, v.tc, v.Rd, 0, 0, v.Rd, v.tc, v.me, 0, v.Rd, 0, 0, 0, v.Rd, v.tc, v.me, 0, v.Rd, v.tc, v.me,
		0, v.tc, v.me, v.Rd, 0, v.Rd, v.tc, v.me, 0, v.tc, v.me, v.Rd, 0, v.Rd, v.tc, v.me, 0, v.Rd, v.tc, v.me, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	];
	Ka.prototype = {
		load: function(a)
		{
			var b = a.da;
			a.ma(2);
			this.bf = a.o();
			var c = Array(this.bf),
				d;
			for (d = 0; d < this.bf; d++) c[d] = a.o();
			this.cf = Array(this.bf);
			this.ki = Array(this.bf);
			for (d = 0; d < this.bf; d++) this.cf[d] = null, this.ki[d] = 0, 0 != c[d] && (this.cf[d] = new v, a.seek(b + c[d]), this.cf[d].load(a), this.ki[d] = 1);
			for (a = 0; a < this.bf; a++)
				if (0 == this.ki[a])
				{
					b = !1;
					if (12 > a)
						for (d = 0; 4 > d; d++)
							if (0 != this.ki[Ka.xC[4 *
									a + d]])
							{
								this.cf[a] = this.cf[Ka.xC[4 * a + d]];
								b = !0;
								break
							} if (0 == b)
						for (d = 0; d < this.bf; d++)
							if (0 != this.ki[d])
							{
								this.cf[a] = this.cf[d];
								break
							}
				}
			else this.cf[a].pF(a)
		},
		cc: function(a)
		{
			var b;
			for (b = 0; b < this.bf; b++) 0 != this.ki[b] && this.cf[b].cc(a)
		}
	};
	uc.prototype = {
		load: function(a)
		{
			this.nt = a.ob();
			this.mt = a.ob();
			this.Sx = a.o();
			this.Tx = a.o();
			this.Vk = a.o();
			this.xj = Array(this.Vk);
			var b;
			for (b = 0; b < this.Vk; b++) this.xj[b] = a.o()
		},
		cc: function(a)
		{
			var b;
			for (b = 0; b < this.Vk; b++)
				if (null != a)
				{
					var c = a.kh(this.xj[b]); - 1 != c && (this.xj[b] = c)
				}
		}
	};
	Ea.rt = [v.Rd, v.tc, v.me, v.SC, v.Jo, v.Lw, v.Kw, v.Jw, v.os, v.Ko, 12, 13, 14, 15, -1];
	Ea.prototype = {
		X: function(a)
		{
			this.a = a;
			this.Ll = 0;
			this.Pz(v.tc);
			if (this.Tf(v.Io)) this.Ll = 1, this.Em(v.Io), this.Jp(), this.Fm();
			else
			{
				for (a = 0; 0 <= Ea.rt[a] && !this.Tf(Ea.rt[a]); a++);
				0 > Ea.rt[a] && this.Tf(v.Ck) && (this.Ll = 2, this.Em(v.Ck), this.Jp(), this.Fm())
			}
		},
		Pz: function(a)
		{
			this.a.b.fe = a;
			this.co = !1;
			this.wg = this.ao = this.Jl = this.gk = this.tr = this.vg = 0;
			this.ur = this.Qi = this.Jh = -1;
			this.bo = this.ee = null;
			this.Fm()
		},
		Ce: function()
		{
			switch (this.Ll)
			{
				case 0:
					return this.Fm();
				case 1:
					this.mF();
					break;
				case 2:
					this.nF()
			}
			return !1
		},
		Fm: function()
		{
			var a = this.a.v;
			this.a.b.Ri = a;
			a -= this.a.fa;
			this.a.b.Uv = a;
			a += this.a.K;
			this.a.b.Vv = a;
			a = this.a.u;
			this.a.b.Si = a;
			a -= this.a.ga;
			this.a.b.Wv = a;
			a += this.a.J;
			this.a.b.Xv = a;
			this.a.b.wr = this.a.b.Ia;
			this.a.b.vr = this.a.b.$a;
			return this.Xk(1)
		},
		Xk: function(a)
		{
			var b = this.a.M,
				c = this.a.b.Z,
				d = this.a.b.fe;
			0 != this.gk && (c = this.gk - 1);
			d == v.tc && (0 == c && (d = v.Rd), 75 <= c && (d = v.me));
			0 != this.vg && (d = this.vg - 1);
			d != this.Jh && (this.Jh = d, d >= b.Fi.bf && (d = b.Fi.bf - 1), b = b.Fi.cf[d],
				b != this.ee && (this.ee = b, this.sr = -1, this.wg = 0, 0 == (this.a.ka & z.ME) && (this.ao = 0)));
			var e = this.a.b.Ma % 32,
				b = !1;
			0 != this.tr && (e = this.tr - 1);
			if (this.sr != e && (this.sr = e, d = this.ee.Ed[e], null == d ? 0 != (this.ee.li[e] & 64) ? e = this.ee.li[e] & 63 : 0 != (this.ee.eh[e] & 64) ? e = this.ee.eh[e] & 63 : (d = e, 0 > this.ur ? e = this.ee.eh[e] & 63 : (e -= this.ur, e = 15 < (e & 31) ? this.ee.eh[d] & 63 : this.ee.li[d] & 63)) : this.ur = e, d = this.ee.Ed[e], null != this.ee.Ed[0] && 0 != (this.a.M.Hi & z.IE) && (this.a.b.$a = 360 * this.sr / 32, d = this.ee.Ed[0], this.bo = null, b = !0), this.bo != d))
			{
				this.bo =
					d;
				this.fk = d.Sx;
				this.zB = d.Tx;
				var e = d.nt,
					f = d.mt;
				if (e != this.Qi || f != this.Kl) this.Qi = e, this.Kl = f, this.yB = f - e, this.Il = e, this.Sv = -1;
				this.de = d.Vk;
				0 != this.Jl && this.Jl - 1 >= this.de && (this.Jl = 0);
				this.wg >= this.de && (this.wg = 0);
				d = d.xj[this.wg];
				0 == this.co && (this.a.b.Ia = d, d = this.a.c.h.ca.Kj(d, this.a.b.$a, this.a.b.ub, this.a.b.vb), null != d && (this.a.K = d.width, this.a.J = d.height, this.a.fa = d.ya, this.a.ga = d.xa, this.a.su = d.Ng, this.a.tu = d.Og), this.a.b.L = !0, this.a.b.La = !0);
				if (1 == this.de)
				{
					0 == this.Qi && (this.de = 0);
					d = this.a.b.Ia;
					if (0 == d) return !1;
					d = this.a.c.h.ca.Kj(d, this.a.b.$a, this.a.b.ub, this.a.b.vb);
					null != d && (this.a.K = d.width, this.a.J = d.height, this.a.fa = d.ya, this.a.ga = d.xa, this.a.su = d.Ng, this.a.tu = d.Og);
					return !1
				}
			}
			if (0 == a && 0 == this.Jl || 0 == b && 0 == this.de) return !1;
			a = this.yB;
			c != this.Sv && (this.Sv = c, 0 == a ? (this.Il = this.Qi, 0 != this.gk && (this.Il = this.gk - 1)) : (d = this.a.b.Ua - this.a.b.Lh, 0 == d ? 0 != this.gk ? (a = a * c / 100 + this.Qi, a > this.Kl && (a = this.Kl)) : (a /= 2, a += this.Qi) : (a = a * c / d + this.Qi, a > this.Kl && (a = this.Kl)), this.Il = a));
			d = this.bo;
			a = this.Jl;
			if (0 == a)
			{
				if (0 == this.Il || this.co) return !1;
				c = this.ao;
				a = this.wg;
				e = this.Il;
				0 != (this.a.c.A.Hb & E.Hc) && (e = Math.round(e * this.a.c.pc));
				for (c += e; 100 < c;)
					if (c -= 100, a++, a >= this.de && (a = this.zB, 0 != this.fk && (this.fk--, 0 == this.fk)))
					{
						this.wg = this.de - 1;
						this.de = 0;
						0 != this.vg && (this.gk = this.tr = this.vg = 0);
						this.wg < d.Vk && (d = d.xj[this.wg], d != this.a.b.Ia && (this.a.b.Ia = d, this.a.b.L = !0, this.a.b.La = !0));
						this.ao = c;
						if (0 != (this.a.c.Cc & h.Gs)) return !1;
						b && (this.a.b.L = !0, this.a.b.La = !0, d = this.a.c.h.ca.Kj(this.a.b.Ia, this.a.b.$a, this.a.b.ub,
							this.a.b.vb), null != d && (this.a.K = d.width, this.a.J = d.height, this.a.fa = d.ya, this.a.ga = d.xa, this.a.su = d.Ng, this.a.tu = d.Og));
						c = -131072;
						c |= this.a.wa & 65535;
						this.a.c.j.Bc = this.a.U.Jh;
						return this.a.c.j.ed(this.a, c)
					} this.ao = c
			}
			else a--;
			this.wg = a;
			this.a.b.L = !0;
			this.a.b.La = !0;
			d = d.xj[a];
			if (this.a.b.Ia != d || this.AB != this.a.b.$a) this.a.b.Ia = d, this.AB = this.a.b.$a, 0 <= d && (d = this.a.c.h.ca.Kj(d, this.a.b.$a, this.a.b.ub, this.a.b.vb), null != d && (this.a.K = d.width, this.a.J = d.height, this.a.fa = d.ya, this.a.ga = d.xa, this.a.su = d.Ng,
				this.a.tu = d.Og));
			return !1
		},
		Tf: function(a)
		{
			return 0 == this.a.M.Fi.ki[a] ? !1 : !0
		},
		Jp: function()
		{
			0 == this.fk && (this.fk = 1)
		},
		Em: function(a)
		{
			this.vg = a + 1;
			this.Xk(0)
		},
		oF: function()
		{
			this.vg = 0;
			this.Xk(0)
		},
		mF: function()
		{
			this.Xk(1);
			this.vg != v.Io + 1 && (this.Tf(v.Rd) || this.Tf(v.tc) || this.Tf(v.me) ? (this.Ll = 0, this.oF()) : (this.Ll = 2, this.a.c.Qz(this.a)))
		},
		nF: function()
		{
			0 == (this.a.W & F.ai) && (this.Xk(1), this.vg != v.Ck + 1 && this.a.c.kf(this.a.yb))
		}
	};
	vc.prototype = {
		St: function()
		{
			var a = this.app.Ui + "M" + n.Wm(this.handle, "png"),
				b = new Image;
			this.ca.Bb[this.handle] = b;
			var c = this;
			b.onload = function()
			{
				c.app.si(c)
			};
			b.onerror = function()
			{
				c.app.si(c)
			};
			b.src = a
		}
	};
	wc.prototype = {
		Hh: function(a)
		{
			this.file = a;
			this.sb = this.file.o();
			this.Yj = Array(this.sb);
			a = this.file.o();
			var b, c, d = new fa;
			for (b = 0; b < a; b++) c = this.file.da, d.pl(this.file), this.Yj[d.handle] = c;
			this.Ja = Array(this.sb);
			for (b = 0; b < this.sb; b++) this.Ja[b] = 0;
			this.va = null;
			this.Ci = this.sb;
			this.Ke = 0;
			this.images = null
		},
		Mb: function(a)
		{
			return 0 <= a && a < this.Ci && -1 != this.va[a] ? this.images[this.va[a]] : null
		},
		vo: function()
		{
			var a;
			for (a = 0; a < this.sb; a++) this.Yj[a] && (this.Ja[a] = 1)
		},
		Qe: function()
		{
			if (0 == (this.app.Aa & l.Xh) && 0 == (this.app.Aa & l.ns))
			{
				var a;
				for (a = 0; a < this.sb; a++) this.Ja[a] = 0
			}
			this.Fh = null
		},
		aj: function(a)
		{
			this.Ja[a]++
		},
		kh: function(a)
		{
			this.aj(a);
			return -1
		},
		Zz: function(a)
		{
			null == this.Bb[a] && (null != this.Fh && a < this.Fh.length && null != this.Fh[a] ? this.Bb[a] = this.Fh[a] : (this.Bb[a] = new vc(this, a), this.app.Dm(this.Bb[a])))
		},
		load: function(a)
		{
			var b;
			if (0 < this.app.Nd)
				if (null == this.Bb)
				{
					if (this.Bb = Array(this.app.Nd), this.app.Aa & l.Xh)
						for (b =
							0; b < this.app.Nd; b++) this.app.Bb[b] && this.Zz(b)
				}
			else if (0 == (this.app.Aa & l.Xh))
			{
				this.Fh = Array(this.app.Nd);
				for (b = 0; b < this.app.Nd; b++) this.Fh[b] = this.Bb[b];
				this.Bb = Array(this.app.Nd);
				for (b = 0; b < this.app.Nd; b++) this.Bb[b] = null
			}
			for (b = this.Ke = 0; b < this.sb; b++) 0 != this.Ja[b] && this.Ke++;
			b = Array(this.Ke);
			var c = 0,
				d;
			for (d = 0; d < this.sb; d++)
				if (0 != this.Ja[d])
				{
					if (null != this.images && -1 != this.va[d] && null != this.images[this.va[d]])
					{
						if (b[c] = this.images[this.va[d]], b[c].Ja = this.Ja[d], null != this.Bb && null != this.Fh)
						{
							var e = b[c].lb;
							0 < e && (this.Bb[e] = this.Fh[e])
						}
					}
					else 0 != this.Yj[d] && (b[c] = new fa, a.seek(this.Yj[d]), b[c].load(this.app), b[c].Ja = this.Ja[d]);
					c++
				} this.images = b;
			this.va = Array(this.sb);
			for (b = 0; b < this.sb; b++) this.va[b] = -1;
			for (b = 0; b < this.Ke; b++) this.images[b] && (this.va[this.images[b].handle] = b);
			this.Ci = this.sb
		},
		Xz: function(a)
		{
			var b;
			for (b = 0; b < a.length; b++)
				if (0 <= a[b] && a[b] < this.Ci && 0 != this.Yj[a[b]] && null == this.Mb(a[b]))
				{
					var c, d = -1;
					for (c = 0; c < this.Ke; c++)
						if (null == this.images[c])
						{
							d = c;
							break
						} if (-1 == d)
					{
						var e = Array(this.Ke + 10);
						for (c =
							0; c < this.Ke; c++) e[c] = this.images[c];
						for (; c < this.Ke + 10; c++) e[c] = null;
						d = this.Ke;
						this.Ke += 10;
						this.images = e
					}
					this.va[a[b]] = d;
					this.images[d] = new fa;
					this.images[d].Ja = 1;
					this.file.seek(this.Yj[a[b]]);
					this.images[d].load(this.app)
				}
		},
		Kj: function(a, b, c, d)
		{
			var e;
			null == this.Gh && (this.Gh = new fa);
			e = this.Mb(a);
			if (null != e)
			{
				a = e.width;
				var f = e.height,
					g = e.ya,
					m = e.xa,
					q = e.Ng;
				e = e.Og;
				0 == b ? (1 != c && (g *= c, q *= c, a *= c), 1 != d && (m *= d, e *= d, f *= d)) : (1 != c && (g *= c, q *= c, a *= c), 1 != d && (m *= d, e *= d, f *= d), null == this.Kh && (this.Kh = new Y), null == this.Oj &&
					(this.Oj = new pa), null == this.yj && (this.yj = new pa), this.Oj.x = g, this.Oj.y = m, this.yj.x = q, this.yj.y = e, this.Kh.left = this.Kh.top = 0, this.Kh.right = a, this.Kh.bottom = f, this.WF(this.Kh, this.Oj, this.yj, b), a = this.Kh.right, f = this.Kh.bottom, g = this.Oj.x, m = this.Oj.y, q = this.yj.x, e = this.yj.y);
				this.Gh.width = a;
				this.Gh.height = f;
				this.Gh.ya = g;
				this.Gh.xa = m;
				this.Gh.Ng = q;
				this.Gh.Og = e;
				return this.Gh
			}
			return e
		},
		WF: function(a, b, c, d)
		{
			var e, f, g;
			90 == d ? (d = 0, g = 1) : 180 == d ? (d = -1, g = 0) : 270 == d ? (d = 0, g = -1) : (g = d * Math.PI / 180, d = Math.cos(g), g = Math.sin(g));
			var m, q, h, l, n;
			null == b ? m = q = n = f = 0 : (h = -b.x * d, l = -b.x * g, n = -b.y * d, f = -b.y * g, m = h + f, q = n - l);
			e = null == b ? a.right : a.right - b.x;
			h = e * d;
			l = e * g;
			e = h + f;
			n -= l;
			var k;
			f = null == b ? a.bottom : a.bottom - b.y;
			k = h + f * g;
			f = f * d - l;
			var p, r;
			p = m + k - e;
			r = q + f - n;
			h = Math.min(m, Math.min(e, Math.min(k, p)));
			l = Math.min(q, Math.min(n, Math.min(f, r)));
			m = Math.max(m, Math.max(e, Math.max(k, p)));
			q = Math.max(q, Math.max(n, Math.max(f, r)));
			null != c && (null == b ? (e = c.x, f = c.y) : (e = c.x - b.x, f = c.y - b.y), c.x = e * d + f * g - h, c.y = f * d - e * g - l);
			null != b && (b.x = -h, b.y = -l);
			a.right = m - h;
			a.bottom =
				q - l
		}
	};
	fa.zH = 10;
	fa.Wf = function(a, b)
	{
		var c = new fa;
		c.app = a;
		c.kb = new Image;
		c.kb.onload = function()
		{
			c.app.oh++;
			c.width = c.kb.width;
			c.height = c.kb.height
		};
		a.ph++;
		a.hg = !0;
		c.kb.src = a.Ui + b;
		return c
	};
	fa.prototype = {
		pl: function(a)
		{
			this.handle = a.o();
			a.ma(12)
		},
		St: function()
		{
			this.kb = new Image;
			var a = this;
			this.kb.onload = function()
			{
				a.app.si(a)
			};
			this.kb.onerror = function()
			{
				a.app.si(a)
			};
			this.kb.src = this.app.Ui + n.Wm(this.handle, "png")
		},
		load: function(a)
		{
			this.app = a;
			this.handle = a.file.o();
			this.width = a.file.o();
			this.height = a.file.o();
			this.ya = a.file.S();
			this.xa = a.file.S();
			this.Ng = a.file.S();
			this.Og = a.file.S();
			this.lb = 0;
			this.kb = null;
			null != this.app.frame.yn ? (this.lb = this.app.frame.yn[this.handle], 0 != this.lb ? (this.app.ca.Zz(this.lb), this.hd = this.app.frame.hd[this.handle], this.jd = this.app.frame.jd[this.handle]) : this.app.Dm(this)) : this.app.Dm(this)
		},
		createElement: function()
		{
			var a = document.createElement("div");
			a.style.width = this.width + "px";
			a.style.height = this.height + "px";
			a.style.backgroundRepeat = "no-repeat";
			0 == this.lb ? a.style.backgroundImage =
				"url('" + this.kb.src + "')" : (a.style.backgroundPosition = "-" + this.hd + "px -" + this.jd + "px", a.style.backgroundImage = "url('" + this.app.Ui + "M" + n.Wm(this.lb, "png") + "')");
			return a
		},
		ag: function(a, b, c, d)
		{
			if (0 == (a & B.Ik))
			{
				null == this.jg && (this.jg = new B, this.jg.Ot(this.app, this, a));
				if (0 == b && 1 == c && 1 == d) return this.jg;
				null == this.th && (this.th = new L);
				var e, f = 2147483647,
					g = -1;
				for (e = 0; e < this.th.size(); e++)
				{
					a = this.th.get(e);
					if (b == a.angle && c == a.Zb && d == a.$b) return a.O;
					a.Aw < f && (f = a.Aw, g = e)
				}
				this.th.size() < this.zH && (g = -1);
				a = new ie;
				a.O = new B;
				a.O.JF(this.jg, b, c, d);
				a.angle = b;
				a.Zb = c;
				a.$b = d;
				a.Aw = this.app.Ae;
				0 > g ? this.th.add(a) : this.th.set(g, a);
				return a.O
			}
			null == this.rl && (null == this.jg && (this.jg = new B, this.jg.Ot(this.app, this, 0)), this.rl = new B, this.rl.Ot(this.app, this, a));
			return this.rl
		}
	};
	xc.prototype = {
		Hh: function(a)
		{
			var b = a.s(),
				c;
			this.Md = 0;
			var d = a.da,
				e = new wa;
			for (c = 0; c < b; c++) e.pl(a), this.Md = Math.max(this.Md, e.handle + 1);
			a.seek(d);
			this.br = Array(this.Md);
			for (c = 0; c < b; c++) d = a.da, e.pl(a), this.br[e.handle] = d;
			this.Ja = Array(this.Md);
			for (c =
				0; c < this.Md; c++) this.Ja[c] = 0;
			this.va = null;
			this.kg = this.Md;
			this.uh = 0;
			this.fonts = null
		},
		load: function(a)
		{
			var b;
			for (b = this.uh = 0; b < this.Md; b++) 0 != this.Ja[b] && this.uh++;
			b = Array(this.uh);
			var c = 0,
				d;
			for (d = 0; d < this.Md; d++) 0 != this.Ja[d] && (null != this.fonts && -1 != this.va[d] && null != this.fonts[this.va[d]] ? b[c] = this.fonts[this.va[d]] : (b[c] = new wa, a.seek(this.br[d]), b[c].load(a)), b[c].Ja = this.Ja[d], c++);
			this.fonts = b;
			this.va = Array(this.Md);
			for (b = 0; b < this.Md; b++) this.va[b] = -1;
			for (b = 0; b < this.uh; b++) this.va[this.fonts[b].handle] =
				b;
			this.kg = this.Md
		},
		pf: function(a)
		{
			return -1 == a ? this.Jn : 0 <= a && a < this.kg && -1 != this.va[a] ? this.fonts[this.va[a]] : null
		},
		kq: function(a)
		{
			return this.pf(a).pG()
		},
		Qe: function()
		{
			if (0 == (this.app.bO & l.Xh) && 0 == (this.app.Aa & l.ns))
			{
				var a;
				for (a = 0; a < this.Md; a++) this.Ja[a] = 0
			}
		},
		vo: function()
		{
			var a;
			for (a = 0; a < this.Md; a++) this.br[a] && (this.Ja[a] = 1)
		},
		aj: function(a)
		{
			-1 == a ? null == this.Jn && (this.Jn = new wa, this.Jn.Vp()) : this.Ja[a]++
		},
		kh: function(a)
		{
			this.aj(a);
			return -1
		},
		Hp: function(a)
		{
			var b, c;
			for (c = 0; c < this.uh && (null == this.fonts[c] ||
					this.fonts[c].Sb != a.Sb || this.fonts[c].te != a.te || this.fonts[c].se != a.se || this.fonts[c].re != a.re); c++);
			if (c < this.uh) return this.fonts[c].handle;
			c = -1;
			for (b = this.Md; b < this.kg && -1 != this.va[b]; b++);
			if (-1 == c)
			{
				var d = Array(this.kg + 10);
				for (b = 0; b < this.kg; b++) d[b] = this.va[b];
				for (; b < this.kg + 10; b++) d[b] = -1;
				c = this.kg;
				this.kg += 10;
				this.va = d
			}
			d = -1;
			for (b = 0; b < this.uh; b++)
				if (null == this.fonts[b])
				{
					d = b;
					break
				} - 1 == d && (d = this.uh, this.fonts.push(null));
			this.va[c] = d;
			this.fonts[d] = new wa;
			this.fonts[d].handle = c;
			this.fonts[d].Sb =
				a.Sb;
			this.fonts[d].te = a.te;
			this.fonts[d].se = a.se;
			this.fonts[d].re = a.re;
			return c
		}
	};
	wa.prototype = {
		pl: function(a)
		{
			this.handle = a.s();
			0 == a.ef ? a.ma(72) : a.ma(104)
		},
		load: function(a)
		{
			this.handle = a.s();
			var b = a.da;
			a.ma(12);
			this.Sb = a.s();
			0 > this.Sb && (this.Sb = -this.Sb);
			a.s();
			a.s();
			a.s();
			this.te = a.s();
			this.se = a.ob();
			a.ob();
			a.ob();
			a.ob();
			a.ob();
			a.ob();
			a.ob();
			a.ob();
			this.re = a.Wb();
			0 == a.ef ? a.seek(b + 72) : a.seek(b + 104)
		},
		pG: function()
		{
			var a = new $a;
			a.Sb = this.Sb;
			a.te = this.te;
			a.se = this.se;
			a.re = this.re;
			return a
		},
		Vp: function()
		{
			this.re =
				"Arial";
			this.Sb = 13;
			this.te = 400;
			this.se = 0
		},
		Fe: function()
		{
			return this.Sb + Math.ceil(this.Sb / 8)
		},
		$f: function()
		{
			if (null == this.font)
			{
				this.font = this.se ? "italic " : "normal ";
				var a = 100 * Math.floor(this.te / 100),
					a = Math.max(a, 100),
					a = Math.min(a, 900);
				this.font += a + " ";
				this.font += this.Sb + "px ";
				this.font += this.re
			}
			return this.font
		}
	};
	yc.prototype = {
		Hh: function(a)
		{
			this.file = a;
			this.sb = this.file.o();
			this.cr = Array(this.sb);
			this.Ja = Array(this.sb);
			this.va = Array(this.sb);
			for (a = 0; a < this.sb; a++) this.Ja[a] = 0, this.va[a] = -1;
			var b =
				this.file.o(),
				c = new Ra(this.app),
				d;
			for (a = 0; a < b; a++) d = this.file.da, c.pl(), this.cr[c.handle] = d;
			this.Ci = this.sb;
			this.Hn = 0;
			this.xk = null
		},
		vG: function(a)
		{
			return 0 <= a && a < this.Ci && -1 != this.va[a] ? this.xk[this.va[a]] : null
		},
		Qe: function()
		{
			if (0 == (this.app.Aa & l.Xh) && 0 == (this.app.Aa & l.ns))
			{
				var a;
				for (a = 0; a < this.sb; a++) this.Ja[a] = 0
			}
		},
		vo: function()
		{
			var a;
			for (a = 0; a < this.sb; a++) this.cr[a] && (this.Ja[a] = 1)
		},
		aj: function(a)
		{
			this.Ja[a]++
		},
		kh: function(a)
		{
			this.aj(a);
			return -1
		},
		load: function()
		{
			var a;
			for (a = this.Hn = 0; a < this.sb; a++) 0 !=
				this.Ja[a] && this.Hn++;
			a = Array(this.Hn);
			var b = 0,
				c;
			for (c = 0; c < this.sb; c++) 0 != this.Ja[c] && (null != this.xk && -1 != this.va[c] && null != this.xk[this.va[c]] ? a[b] = this.xk[this.va[c]] : (a[b] = new Ra(this.app), this.file.seek(this.cr[c]), a[b].load()), a[b].Ja = this.Ja[c], b++);
			this.xk = a;
			this.va = Array(this.sb);
			for (a = 0; a < this.sb; a++) this.va[a] = -1;
			for (a = 0; a < this.Hn; a++) this.va[this.xk[a].handle] = a;
			this.Ci = this.sb;
			this.Qe()
		}
	};
	Ra.prototype = {
		pl: function()
		{
			this.handle = this.file.o();
			this.file.ma(5);
			var a = this.file.o();
			0 == this.file.ef ?
				this.file.ma(a) : this.file.ma(2 * a)
		},
		St: function()
		{
			var a, b = this.Jc.Qc.Lv & this.type;
			0 == b && (b = this.Jc.Qc.Tu & this.type);
			for (a = 0; 4 > a && !(b & 1 << a); a++);
			if (4 > a)
			{
				b = "";
				switch (a)
				{
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
				if (this.context)
				{
					var c = this,
						d = new XMLHttpRequest;
					d.open("GET", this.Jc.Ui + n.Wm(this.handle, b), !0);
					d.responseType = "arraybuffer";
					d.addEventListener("load", function()
					{
						c.response = d.response;
						c.Jc.Qc.hF(c)
					});
					d.send()
				}
				else this.pb = new Audio, this.pb.NO = "auto", c = this,
					this.pb.addEventListener("loadeddata", function(a)
					{
						c.Jc.si(c);
						c.pb.removeEventListener("loadeddata", arguments.callee, !1)
					}, !1), this.pb.addEventListener("error", function()
					{
						c.Jc.si(c);
						c.pb = null
					}, !1), this.pb.src = this.Jc.Ui + n.Wm(this.handle, b), this.pb.load(), this.pb.autoplay = !1
			}
			else this.Jc.si(this)
		},
		load: function()
		{
			this.handle = this.file.o();
			this.type = this.file.ob();
			this.Lm = this.frequency = this.file.s();
			var a = this.file.o();
			this.name = this.file.Wb(a);
			this.pb = null;
			this.Jc.Dm(this)
		},
		sH: function()
		{
			this.handle =
				9999;
			this.type = 4;
			this.Lm = this.frequency = 4E4;
			this.name = "";
			this.pb = null;
			this.Jc.Dm(this)
		},
		bk: function(a, b)
		{
			a || (a = 0);
			b || (b = this.frequency);
			if (this.pb) this.pb.volume = this.volume / 100, this.Lm = b, this.pb.playbackRate = b / this.frequency, this.pb.duration && (this.pb.currentTime = 0), this.pb.play();
			else if (this.buffer)
			{
				this.source = this.context.createBufferSource();
				this.source.buffer = this.buffer;
				0 == this.el ? (this.source.gain.value = this.volume / 100, this.source.connect(this.context.destination)) : (this.gain = this.context.createGain(),
					this.source.connect(this.gain), this.gain.connect(this.context.destination), this.gain.gain.value = this.volume / 100);
				a || (a = 0);
				b || (b = this.frequency);
				this.Lm = b;
				this.source.playbackRate.value = b / this.frequency;
				this.startTime = Date.now() - a;
				"undefined" !== typeof this.source.start ? this.source.start(0, a / 1E3) : this.source.noteOn(a);
				var c = this;
				this.source.onended = function()
				{
					c.Xx = !0
				}
			}
			this.fh = !1;
			this.ni = !0;
			this.Xx = !1
		},
		play: function(a, b, c)
		{
			this.vh = a;
			0 == this.vh && (this.vh = 1E7);
			this.volume = c;
			this.bk()
		},
		stop: function()
		{
			this.pb ?
				this.pb.pause() : this.source && this.ni && ("undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0), this.source.onended = null);
			this.ni = this.Im = !1
		},
		pause: function()
		{
			this.fh || (this.pb ? this.pb.pause() : this.source && (this.source.onended = null, "undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0), this.RH = Date.now() - this.startTime), this.fh = !0)
		},
		zG: function()
		{
			this.fh ? this.Lp = !1 : (this.pause(), this.Lp = !0)
		},
		resume: function()
		{
			this.fh && (this.pb ? this.pb.play() : this.source &&
				this.bk(this.RH), this.fh = !1)
		},
		AG: function()
		{
			this.Lp && (this.resume(), this.Lp = !1)
		},
		TG: function()
		{
			return this.fh
		},
		UG: function()
		{
			return (this.pb || this.source) && this.ni ? !this.fh : !1
		},
		setPosition: function(a)
		{
			this.pb ? this.pb.currentTime = a / 1E3 : this.source && (this.ni && (this.source.onended = null, "undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0)), this.bk(a))
		},
		vF: function()
		{
			if (1 == this.ni && 0 == this.fh)
				if (this.pb)
				{
					if (this.pb.ended)
					{
						if (0 < this.vh && (this.vh--, 0 < this.vh)) return this.bk(0,
							this.Lm), !1;
						this.ni = this.Im = !1;
						return !0
					}
				}
			else if (this.source && (3 == this.source.playbackState || this.Xx))
			{
				if (0 < this.vh && (this.vh--, 0 < this.vh)) return this.bk(0, this.Lm), !1;
				this.ni = this.Im = !1;
				return !0
			}
			return !1
		}
	};
	zc.prototype = {
		TC: function(a)
		{
			this.XH[this.position++] = a
		}
	};
	N.Zh = 80;
	N.SE = 256;
	N.IN = function(a, b)
	{
		var c = b >> 5,
			d = 1 << (b & 31),
			e = 0 != (a[c] & d);
		a[c] |= d;
		return e
	};
	N.cG = function(a)
	{
		return a.Jb + 0
	};
	N.Jf = function(a)
	{
		a &= 65535;
		return 0 != (a & 32768) ? a - 65536 : a
	};
	N.Bs = function(a)
	{
		return a >> 16
	};
	N.iq = function(a)
	{
		return a &
			4294901760
	};
	N.prototype = {
		mh: function(a)
		{
			var b;
			this.Yf = 0;
			this.xg = null;
			this.yg = -1;
			if (0 != (a & 32768)) return 32767 == (a & 32767) ? null : this.$H(a);
			var c = this.l.P[a];
			if (c.be == this.Ac)
			{
				if (0 != (c.nb & 2147483648)) return null;
				b = this.l.F[c.nb];
				this.Oh = null;
				this.kk = c;
				this.Re = b;
				this.ho = a
			}
			else
			{
				c.be = this.Ac;
				if (this.Qh) return c.nb = -1, c.ce = 0, null;
				c.nb = c.gb;
				if (0 != (c.gb & 2147483648)) return c.ce = 0, null;
				var d = c.gb;
				do b = this.l.F[d], d = b.Qb, b.xc = d; while (0 == (d & 2147483648));
				b = this.l.F[c.gb];
				this.Oh = null;
				this.kk = c;
				this.Re = b;
				this.ho =
					a;
				c.ce = c.rg
			}
			this.Yf = c.ce;
			return b
		},
		$H: function(a)
		{
			var b, c, d = 0,
				e = 0;
			for (a = this.Pb[a & 32767]; e < a.Ba.length;)
			{
				c = a.Ba[e + 1];
				c = this.l.P[c];
				if (c.be == this.Ac) b = 0, 0 == (c.nb & 2147483648) && (b = c.ce, null == this.xg && (this.xg = a, this.yg = e));
				else if (b = 0, c.be = this.Ac, this.Qh) c.nb = -1, c.ce = 0;
				else if (c.nb = c.gb, 0 != (c.gb & 2147483648)) c.ce = 0;
				else
				{
					null == this.xg && (this.xg = a, this.yg = e);
					b = c.gb;
					do b = this.l.F[b], b = b.xc = b.Qb; while (0 == (b & 2147483648));
					b = c.ce = c.rg
				}
				d += b;
				e += 2
			}
			a = this.xg;
			return null != a ? (c = this.l.P[a.Ba[this.yg + 1]], this.Oh =
				null, this.kk = c, this.Re = b = this.l.F[c.nb], this.ho = a.Ba[this.yg + 1], this.Yf = d, b) : null
		},
		nh: function()
		{
			var a = this.Re,
				b;
			if (null == a && (b = this.l.P[this.ho], 0 == (b.nb & 2147483648))) return a = this.l.F[b.nb], this.Oh = null, this.kk = b, this.Re = a;
			if (null != a && 0 == (a.xc & 2147483648)) return this.Oh = a, this.kk = null, this.Re = a = this.l.F[a.xc];
			if (null == this.xg) return null;
			do {
				this.yg += 2;
				if (this.yg >= this.xg.Ba.length) return null;
				b = this.l.P[this.xg.Ba[this.yg + 1]]
			} while (0 != (b.nb & 2147483648));
			this.Oh = null;
			this.kk = b;
			this.Re = a = this.l.F[b.nb];
			this.ho = this.xg.Ba[this.yg + 1];
			return a
		},
		Yd: function()
		{
			--this.Re.jc.ce;
			null != this.Oh ? (this.Oh.xc = this.Re.xc, this.Re = this.Oh) : (this.kk.nb = this.Re.xc, this.Re = null)
		},
		lh: function(a)
		{
			var b = a.jc;
			if (b.be != this.Ac) b.be = this.Ac, b.nb = a.yb, b.ce = 1, a.xc = -1;
			else
			{
				var c = b.nb;
				if (0 != (c & 2147483648)) b.nb = a.yb, b.ce += 1, a.xc = -1;
				else
				{
					do {
						if (a.yb == c) return;
						b = this.l.F[c];
						c = b.xc
					} while (0 == (c & 2147483648));
					b.xc = a.yb;
					a.xc = -1;
					a.jc.ce += 1
				}
			}
		},
		ez: function()
		{
			var a, b, c;
			for (b = 0; b < this.l.ie; b++)
				if (c = this.l.P[b], c.be == this.Ac)
				{
					if (c.tv != this.Dr)
						for (c.tv =
							this.Dr, a = c.gb; 0 == (a & 2147483648);) a = this.l.F[a], a.uu = 0, a = a.Qb;
					for (a = c.nb; 0 == (a & 2147483648);) a = this.l.F[a], a.uu = 1, a = a.xc
				}
		},
		dG: function()
		{
			var a, b, c, d, e;
			for (d = 0; d < this.l.ie; d++)
				if (e = this.l.P[d], e.tv == this.Dr)
					for (e.be = this.Ac, a = e.gb, c = null; 0 == (a & 2147483648);) b = this.l.F[a], 0 != b.uu && (null != c ? c.xc = a : e.nb = a, b.xc = -1, c = b), a = b.Qb
		},
		gn: function(a)
		{
			if (this.jk) return this.fo = !1, a = this.nu(a);
			if (0 == (a & 32768)) return a = this.l.P[a], a.be == this.Ac && 0 == (a.nb & 2147483648) ? this.l.F[a.nb] : 0 == (a.gb & 2147483648) ? this.l.F[a.gb] :
				null;
			var b = this.Pb[a & 32767],
				c = 0;
			if (c >= b.Ba.length) return null;
			do {
				a = this.l.P[b.Ba[c + 1]];
				if (a.be == this.Ac && 0 == (a.nb & 2147483648)) return this.l.F[a.nb];
				c += 2
			} while (c < b.Ba.length);
			c = 0;
			do {
				a = this.l.P[b.Ba[c + 1]];
				if (0 == (a.gb & 2147483648)) return this.l.F[a.gb];
				c += 2
			} while (c < b.Ba.length);
			return null
		},
		Kc: function(a)
		{
			a.Qa &= ~Q.qm;
			this.fo = !0;
			var b = this.nu(a.Xa);
			if (null != b) return 0 != this.zc && (a.Qa |= S.gj, this.ik = !0), b;
			a.Qa |= Q.qm;
			return b
		},
		nu: function(a)
		{
			return 0 == (a & 32768) ? this.wG(a) : this.xG(a)
		},
		wG: function(a)
		{
			var b =
				this.l.P[a];
			if (b.rv != this.hk)
			{
				b.rv = this.hk;
				b.sv = this.Nh;
				if (b.be == this.Ac && 0 == (b.nb & 2147483648))
				{
					b.qg = b.nb;
					a = this.l.F[b.nb];
					b.Ni = a.xc;
					if (0 != (a.xc & 2147483648)) return b.Af = !1, b.Mi = 1, this.zc = !1, a;
					b.Af = !0;
					b.Mi = 2;
					this.zc = !0;
					return a
				}
				if (this.fo && b.be == this.Ac) return b.Mi = 0, b.qg = -1, null;
				if (0 == (b.gb & 2147483648))
				{
					b.qg = b.gb;
					a = this.l.F[b.gb];
					if (null == a) return b.Mi = 0, b.qg = -1, null;
					if (0 == (a.Qb & 2147483648)) return b.Ni = a.Qb, b.Af = !0, b.Mi = 3, this.zc = !0, a;
					b.Af = !1;
					b.Mi = 1;
					this.zc = !1;
					return a
				}
				b.Mi = 0;
				b.qg = -1;
				return null
			}
			if (b.sv !=
				this.Nh)
			{
				var c;
				b.sv = this.Nh;
				switch (b.Mi)
				{
					case 0:
						return this.zc = b.Af, null;
					case 1:
						return a = this.l.F[b.qg], this.zc = b.Af, a;
					case 2:
						b.qg = b.Ni;
						a = this.l.F[b.Ni];
						if (null == a) return null;
						c = a.xc;
						0 != (c & 2147483648) && (b.Af = !1, c = b.nb);
						b.Ni = c;
						this.zc = b.Af;
						return a;
					case 3:
						b.qg = b.Ni;
						a = this.l.F[b.Ni];
						if (null == a) return null;
						c = a.Qb;
						0 != (c & 2147483648) && (b.Af = !1, c = b.gb);
						b.Ni = c;
						this.zc = b.Af;
						return a
				}
			}
			if (0 > b.qg) return null;
			a = this.l.F[b.qg];
			this.zc = b.Af;
			return a
		},
		xG: function(a)
		{
			var b, c = this.Pb[a & 32767];
			if (c.Mv != this.hk)
			{
				c.Mv =
					this.hk;
				c.Nv = this.Nh;
				b = this.wB(c);
				if (0 <= b)
				{
					c.sg = b;
					a = this.l.F[b];
					if (null == a) return c.Oi = 0, c.sg = -1, null;
					b = a.xc;
					if (0 != (b & 2147483648) && (b = this.Qv(c), 0 > b)) return c.Oi = 1, this.zc = c.Bf = !1, a;
					c.Pi = b;
					c.Oi = 2;
					this.zc = c.Bf = !0;
					return a
				}
				if (this.fo && c.Ov) return c.Oi = 0, c.sg = -1, null;
				b = this.vB(c);
				if (0 <= b && (c.sg = b, a = this.l.F[b], null != a))
				{
					b = a.Qb;
					if (0 != (b & 2147483648) && (b = this.Pv(c), 0 != (b & 2147483648))) return c.Oi = 1, this.zc = c.Bf = !1, a;
					c.Pi = b;
					c.Oi = 3;
					this.zc = c.Bf = !0;
					return a
				}
				c.Oi = 0;
				c.sg = -1;
				return null
			}
			if (c.Nv != this.Nh) switch (c.Nv =
				this.Nh, c.Oi)
			{
				case 0:
					return this.zc = c.Bf, null;
				case 1:
					return a = this.l.F[c.sg], this.zc = c.Bf, a;
				case 2:
					return c.sg = c.Pi, a = this.l.F[c.Pi], null != a && (b = a.xc, 0 != (b & 2147483648) && (b = this.Qv(c), 0 > b && (c.Bf = !1, b = this.wB(c))), c.Pi = b), this.zc = c.Bf, a;
				case 3:
					return c.sg = c.Pi, a = this.l.F[c.Pi], null != a && (b = a.Qb, 0 != (b & 2147483648) && (b = this.Pv(c), 0 != (b & 2147483648) && (c.Bf = !1, b = this.vB(c))), c.Pi = b), this.zc = c.Bf, a
			}
			if (0 > c.sg) return null;
			a = this.l.F[c.sg];
			this.zc = c.Bf;
			return a
		},
		Qv: function(a)
		{
			for (var b = a.Hl, c; b < a.Ba.length;)
			{
				c =
					a.Ba[b + 1];
				c = this.l.P[c];
				if (c.be == this.Ac && (a.Ov = !0, 0 == (c.nb & 2147483648))) return a.Hl = b + 2, c.nb;
				b += 2
			}
			return -1
		},
		wB: function(a)
		{
			a.Hl = 0;
			a.Ov = !1;
			return this.Qv(a)
		},
		Pv: function(a)
		{
			for (var b = a.Hl, c; b < a.Ba.length;)
			{
				c = a.Ba[b + 1];
				c = this.l.P[c];
				if (0 == (c.gb & 2147483648)) return a.Hl = b + 2, c.gb;
				b += 2
			}
			return -1
		},
		vB: function(a)
		{
			a.Hl = 0;
			return this.Pv(a)
		},
		YF: function()
		{
			this.Dt = !1;
			for (var a = this.l.Br, b = this.l.Cr;;)
			{
				for (var c = null, d = null, e = this.l.OB; null != e;)
				{
					if (0 > e.index)
					{
						(c = e.next) && (n.xb(e.name, c.name) || (c = null));
						break
					}
					d =
						e;
					e = e.next
				}
				if (null == e) break;
				e.stop = !1;
				for (e.index = 0; e.index < e.xh; e.index++)
				{
					this.l.Br = e;
					if (this.l.Cr = c) c.index = e.index;
					this.jk = 0;
					this.ed(e.zf[e.index], -2686976);
					if (e.stop) break
				}
				if (c)
					for (c.index = 0; c.index < c.xh; c.index++)
					{
						this.l.Br = c;
						if (this.l.Cr = e) e.index = c.index;
						this.jk = 0;
						this.ed(c.zf[c.index], -2686976);
						if (c.stop) break
					}
				c && (e.next = c.next);
				null == d ? this.l.OB = e.next : d.next = e.next
			}
			this.l.Br = a;
			this.l.Cr = b
		},
		qe: function(a)
		{
			var b = a & 65535;
			0 != (b & 32768) && (b = 65536 - b);
			a = this.Tb[this.xe[b] + -(a >> 16)];
			0 != a && this.hf(a,
				null)
		},
		ed: function(a, b)
		{
			this.Kr = b;
			var c = this.Tb[a.ru + -(b >> 16)];
			return 0 != c ? (this.hf(c, a), !0) : !1
		},
		GG: function()
		{
			for (var a = !1, b = this.l.iw; b;)
			{
				if (this.l.Xi >= b.Ae)
					if (b.type == fb.aF)
					{
						this.l.j.Bc = b.name;
						var c = this.Tb[this.xe[-p.Am] + J.xx];
						0 != c && this.hf(c, null);
						a = b.tt = !0
					}
				else
					for (0 == b.zo && (b.zo = this.l.Xi); this.l.Xi >= b.zo;)
					{
						this.l.j.Bc = b.name;
						this.l.j.RB = b.index;
						c = this.Tb[this.xe[-p.Am] + J.xx];
						0 != c && this.hf(c, null);
						b.index++;
						b.Fq--;
						if (0 == b.Fq)
						{
							a = b.tt = !0;
							break
						}
						b.zo += b.$I
					}
				b = b.next
			}
			if (a)
				for (b = this.l.iw, a = null; b;) c =
					b.next, b.tt ? null == a ? this.l.iw = c : a.next = c : a = b, b = c
		},
		FF: function()
		{
			var a;
			if (0 != (this.l.Cc & h.tm)) a = this.Tb[this.xe[-p.np] + 1], 0 != a && (this.Tb[this.xe[-p.np] + 1] = -1, this.hf(a, null), this.ko = !0);
			else
			{
				a = this.Tb[this.xe[-p.Am] + 3];
				0 != a && this.hf(a, null);
				a = this.Tb[this.xe[-p.np] + 1];
				var b, c, d, e, f;
				if (0 != a)
				{
					if (this.ko)
					{
						e = null;
						b = a;
						do {
							d = this.hc[b];
							if (d != e)
								for (e = d, c = d.Jb; c < d.Jb + d.oe; c++) f = d.Wa[c], 0 == (f.Qa & Q.qm) && (f.Qa |= Q.Qo);
							b++
						} while (null != this.hc[b])
					}
					this.hf(a, null);
					this.Tb[this.xe[-p.np] + 1] = 0;
					if (this.ko)
					{
						e = null;
						b =
							a;
						do {
							d = this.hc[b];
							if (d != e)
								for (e = d, c = d.Jb; c < d.Jb + d.oe; c++) f = d.Wa[c], f.Qa &= ~Q.Qo;
							b++
						} while (null != this.hc[b]);
						this.ko = !1
					}
				}
				a = this.Tb[this.xe[-p.Am] + 2];
				0 != a && this.hf(a, null);
				a = this.Tb[this.xe[-p.Am] + 1];
				0 != a && this.hf(a, null)
			}
		},
		hf: function(a, b)
		{
			var c, d, e;
			this.Pl = !1;
			do
				if (d = this.hc[a], 0 == (d.Ka & D.ws))
					if (this.Se = d, this.Hr[0] = 0, this.Hr[1] = 0, this.Hr[2] = 0, this.Hr[3] = 0, 0 == (d.Ka & D.ys))
					{
						this.Ac += 1;
						this.Qh = !1;
						e = 0;
						if (d.Wa[e].wc(this.l, b))
							for (e++; e < d.Jb && 0 != d.Wa[e].jb(this.l); e++);
						e == d.Jb && (this.Pl ? null != b && this.tF(b) :
							this.iy(d));
						a++
					}
			else
			{
				this.Dr++;
				if (0 == (d.Ka & D.cx))
				{
					c = !1;
					do {
						this.Ac++;
						this.Qh = !1;
						e = this.Xf[a];
						0 == d.Wa[e].wc(this.l, b) && (this.Qh = !0);
						for (e++; e < d.Jb && -1507329 != d.Wa[e].sa;) 0 == d.Wa[e].jb(this.l) && (this.Qh = !0), e++;
						this.ez();
						0 == this.Qh && (c = !0);
						a++;
						d = this.hc[a];
						if (null == d) break
					} while (d == this.Se)
				}
				else
				{
					var f;
					c = this.Qh = !1;
					do {
						this.Ac++;
						f = !1;
						e = this.Xf[a];
						if (d.Wa[e].wc(this.l, b))
							for (e++; e < d.Jb && -1572865 != d.Wa[e].sa;)
							{
								if (0 == d.Wa[e].jb(this.l))
								{
									f = !0;
									break
								}
								e++
							}
						else f = !0;
						0 == f && (this.ez(), c = !0);
						a++;
						d = this.hc[a];
						if (null ==
							d) break
					} while (d == this.Se)
				}
				c && (this.Ac++, this.dG(), this.iy(this.Se))
			}
			else if (a++, null != this.hc[a])
				for (c = this.hc[a]; c == d;)
				{
					a++;
					if (null == this.hc[a]) break;
					c = this.hc[a]
				}
			while (null != this.hc[a])
		},
		iy: function(a)
		{
			if (0 != (a.Ka & D.ax))
			{
				0 != (a.Ka & D.As) && (this.Vi = new L);
				if (0 != (a.Ka & D.xs))
				{
					var b = this.l.Yb,
						c = a.Ij;
					a.Ij = b;
					if (b == c || b - 1 == c) return
				}
				if (0 != (a.Ka & D.zs))
					if (0 != a.il) a.il--;
					else return;
				if (0 != (a.Ka & D.So))
				{
					b = this.l.Xi / 10;
					c = a.il;
					if (0 != c && b < c) return;
					a.il = b + a.Ij
				}
			}
			this.hk++;
			this.ik = !1;
			this.Nh = 0;
			this.jk = !0;
			b = 0;
			do c = a.Wa[b +
				a.Jb], 0 == (c.Qa & (Q.$w | Q.Qo)) && (c.Qa &= ~S.gj, c.Ea(this.l)), b++; while (b < a.oe);
			if (this.ik)
			{
				do
					for (this.ik = !1, this.Nh++, b = 0; b < a.oe; b++) c = a.Wa[b + a.Jb], 0 != (c.Qa & S.gj) && (c.Qa &= ~S.gj, c.Ea(this.l)); while (this.ik)
			}
			this.jk = !1;
			null != this.Vi && this.aG();
			this.Dt && this.YF()
		},
		tF: function(a)
		{
			var b;
			b = a.zb;
			this.Ac += 1;
			this.lh(a);
			this.hk++;
			this.ik = !1;
			this.Nh = 0;
			this.jk = !0;
			var c = 0,
				d;
			do {
				a = this.Se.Wa[this.Se.Jb + c];
				d = a.sa & 4294901760;
				if (262144 == d || 589824 == d)
					if (b == a.Kb) a.Ea(this.l);
					else if (d = a.Xa, 0 != (d & 32768))
				{
					var e = this.Pb[d &
						32767];
					for (d = 0; d < e.Ba.length;)
					{
						if (e.Ba[d] == b)
						{
							a.Ea(this.l);
							break
						}
						d += 2
					}
				}
				c++
			} while (c < this.Se.oe);
			this.jk = !1
		},
		aG: function()
		{
			if (!(1 >= this.Vi.size()))
			{
				var a = this.l.random(this.Vi.size()),
					b;
				do b = this.l.random(this.Vi.size()); while (a == b);
				a = this.Vi.get(a);
				b = this.Vi.get(b);
				var c = a.v,
					d = a.u,
					e = b.u;
				h.ac(a, b.v);
				h.bc(a, e);
				h.ac(b, c);
				h.bc(b, d);
				this.Vi = null
			}
		},
		Tn: function(a, b)
		{
			var c;
			this.l.lu();
			if (null != this.l && 0 == this.l.Df && 0 != this.Hm && (c = a, 2 == b && (c += N.SE), this.l.$l = 0, 0 == this.l.sk))
			{
				this.LB = this.Bc = c;
				this.qe(-262150);
				this.qe(-327686);
				c = 0;
				var d, e, f, g, m, q, h = new L;
				for (d = 0; d < this.l.hb; d++)
				{
					for (; null == this.l.F[c];) c++;
					e = this.l.F[c];
					c++;
					f = e.v - e.fa;
					g = e.u - e.ga;
					m = f + e.K;
					q = g + e.J;
					this.l.io >= f && this.l.io < m && this.l.jo >= g && this.l.jo < q && 0 != (e.Ge & H.Dd) && 0 == (e.W & F.Tg) && (e.wa == p.Be ? 0 == (e.D.V & w.Rk) ? this.Jc.ca.Mb(e.b.Ia).ag(B.Hk, 0, 1, 1).ZI(this.l.io - e.v, this.l.jo - e.u, e.b.$a, e.b.ub, e.b.vb) && h.add(e) : h.add(e) : h.add(e))
				}
				for (c = 0; c < h.size(); c++) e = h.get(c), this.RB = e.zb, this.qe(-393222)
			}
		},
		KH: function()
		{
			null != this.l && 0 != this.Hm && (this.l.$l =
				0, this.qe(-524294))
		},
		iB: function()
		{
			0 != this.Hm && 0 == this.l.Df && (this.l.$l = 0)
		},
		uB: function(a, b, c, d, e)
		{
			a = new Zd(a, b, c, d, e);
			null == this.mk && (this.mk = new L);
			this.mk.add(a)
		},
		FG: function()
		{
			if (null != this.mk)
			{
				var a;
				for (a = 0; a < this.mk.size(); a++)
				{
					var b = this.mk.get(a);
					if (null != b && 0 != b.code) switch (this.Bc = b.OH, this.QB = b.Ch, b.xI)
					{
						case 0:
							this.qe(b.code);
							break;
						case 1:
							this.ed(b.NH, b.code)
					}
				}
				this.mk.clear()
			}
		},
		load: function(a)
		{
			for (var b, c, d = 0;;)
				if (b = a.file.CB(4), 69 == b[0] && 82 == b[1] && 62 == b[2] && 62 == b[3])
				{
					this.lg = a.file.o();
					300 > this.lg && (this.lg = 300);
					a.file.o();
					this.UA = a.file.o();
					for (c = 0; c < 7 + p.zx; c++) this.hv[c] = a.file.o();
					this.wh = a.file.o();
					if (0 < this.wh)
						for (this.ug = Array(this.wh), c = 0; c < this.wh; c++) this.ug[c] = new Yd, this.ug[c].mr = a.file.S(), this.ug[c].nr = a.file.S()
				}
			else if (69 == b[0] && 82 == b[1] && 101 == b[2] && 115 == b[3]) a.file.s(), this.En = a.file.s(), this.Jd = Array(this.En);
			else if (69 == b[0] && 82 == b[1] && 101 == b[2] && 118 == b[3])
				for (a.file.s(), b = a.file.s(), c = 0; c < b; c++) this.Jd[d] = D.create(a), d++;
			else if (60 == b[0] && 60 == b[1] && 69 == b[2] &&
				82 == b[3]) break;
			this.iA = Math.max(this.iA, d)
		},
		Nz: function(a)
		{
			var b, c;
			c = this.Jd[a];
			c.Ka &= D.Ro;
			c.Ka |= D.ws;
			a++;
			for (b = !1;;)
			{
				c = this.Jd[a];
				c.Ka &= D.Ro;
				c.Ka |= D.ws;
				c = c.Wa[0];
				switch (c.sa)
				{
					case -589825:
						c = c.H[0];
						c.bg |= ja.Is;
						a = this.Nz(a);
						continue;
					case -655361:
						b = !0, a++
				}
				if (b) break;
				a++
			}
			return a
		},
		Jv: function()
		{
			var a, b, c, d, e, f, g = new L,
				m;
			for (d = 0; d < this.Jd.length;) a = this.Jd[d], a.Ka &= D.Ro, b = a.Wa[0], -589825 == b.sa && (a = b.H[0], m = new Xd, m.id = a.CG, m.dz = d, g.add(m), a.bg &= ~(ja.Is | ja.Hs), 0 != (a.bg & ja.XD) && (a.bg |= ja.Hs)), d++;
			for (d =
				0; d < this.Jd.length;)
			{
				a = this.Jd[d];
				a.Ka &= D.Ro;
				b = a.Wa[0];
				if (-589825 == b.sa && (a = b.H[0], a.bg &= ~ja.Is, 0 != (a.bg & ja.Hs)))
				{
					d = this.Nz(d);
					continue
				}
				d++
			}
			for (d = 0; d < this.Jd.length; d++) switch (a = this.Jd[d], b = a.Wa[0], b.sa)
			{
				case -589825:
				case -655361:
					break;
				default:
					for (a.Ij = 0, e = a.il = 0; e < a.Jb + a.oe; e++)
						if (b = a.Wa[e], b.Qa = 0 > b.sa ? b.Qa & Q.DD : b.Qa & ~(S.gj | Q.qm), 0 != b.rd)
							for (f = 0; f < b.rd; f++) switch (c = b.H[f], c.code)
							{
								case 25:
									c.HC = 0;
									break;
								case 13:
									c.dl = c.Fj;
									break;
								case 39:
									var q;
									for (q = 0; q < g.size(); q++)
										if (m = g.get(q), m.id == c.id)
										{
											c.da = m.dz;
											break
										}
							}
			}
		},
		Kp: function(a)
		{
			var b, c, d, e, f, g, m, q, h, l, r, k, t;
			this.l = a;
			for (g = a = t = this.hk = 0; g < this.l.ie; g++) - 1 != this.l.P[g].Nc && (this.l.P[g].rv = -1, this.l.P[g].zd = 0, this.l.P[g].Cl = -1, a++, this.l.P[g].Nc + 1 > t && (t = this.l.P[g].Nc + 1));
			this.Pb = null;
			var v;
			if (0 < this.wh)
			{
				c = Array(this.wh);
				for (b = 0; b < this.wh; b++)
					for (f = this.ug[b].mr & 32767, v = c[b] = 0; v < this.l.ie; v++)
						if (this.l.P[v].Ad == this.ug[b].nr)
							for (g = 0; 8 > g && -1 != this.l.P[v].El[g]; g++) f == this.l.P[v].El[g] && c[b]++;
				this.Pb = Array(this.wh);
				for (b = 0; b < this.wh; b++)
				{
					this.Pb[b] =
						new $d;
					0 != c[b] && (this.Pb[b].Ba = Array(2 * c[b]));
					a = 0;
					f = this.ug[b].mr & 32767;
					for (v = 0; v < this.l.ie; v++)
						if (this.l.P[v].Ad == this.ug[b].nr)
							for (g = 0; 8 > g && -1 != this.l.P[v].El[g]; g++) f == this.l.P[v].El[g] && (this.Pb[b].Ba[2 * a] = this.l.P[v].Nc, this.Pb[b].Ba[2 * a + 1] = v, a++);
					this.Pb[b].Mv = -1
				}
			}
			this.Ee = Array(200 * t + 1);
			a = 0;
			var u = [];
			for (v = 0; v < this.Jd.length; v++)
			{
				b = this.Jd[v];
				for (k = 0; k < b.oe + b.Jb; k++)
				{
					c = b.Wa[k];
					c.Qa &= ~Q.$w;
					0 <= N.Jf(c.sa) && (c.Xa = this.hn(c.Kb, N.Jf(c.sa)));
					if (c.sa == S.MC) g = c.H[0], g.Da[0].code == ca.Cs && 0 == g.Da[1].code &&
						(m = {}, m.lF = c.H[0], m.name = g.Da[0].Fb, u.push(m), this.l.ot(g.Da[0].Fb));
					else if (c.sa == S.CJ || c.sa == S.BJ) g = c.H[0], g.Da[0].code == ca.Cs && 0 == g.Da[1].code && (g.Da[0] = new db, g.Da[0].code = ca.dx, g.Da[0].value = this.l.ot(g.Da[0].Fb));
					if (0 < c.rd)
						for (m = 0; m < c.rd; m++) switch (d = c.H[m], d.code)
						{
							case 25:
								d.value = 0;
								break;
							case 21:
								if (0 == (c.Kb & p.ft))
									for (g = this.l.A.md.hq(); null != g; g = this.l.A.md.In())
									{
										if (c.Kb == g.sf)
										{
											d.Jm = g.Ai;
											break
										}
									}
								else d.Jm = -1;
								f = d.Un; - 1 != f && (d.Vn = this.hn(f, d.hr));
								break;
							case 9:
							case 18:
							case 16:
								f = d.Un; - 1 != f && (d.Vn =
									this.hn(f, d.hr));
								break;
							case 1:
								d.ec = this.hn(d.Ch, d.type);
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
								for (q = d, g = 0; g < q.Da.length; g++) 0 < N.Jf(q.Da[g].code) && (f = q.Da[g], f.ec = this.hn(f.Ch, N.Jf(f.code)))
						}
				}
				m = 0;
				q = D.bx | D.ax | D.Gk;
				for (k = 0; k < b.Jb + b.oe; k++)
				{
					c = b.Wa[k];
					e = N.Jf(c.sa);
					r = c.sa;
					l = h = g = 0;
					d = null;
					if (e >= p.Be) switch (N.iq(r))
					{
						case 262144:
						case 589824:
							m |= D.Gk;
							f = c.Kb;
							if (0 != (f & p.ft))
								for (e = this.aI(c.Xa); - 1 != e; e = this.xB()) a = this.fA(b, a, this.l.P[e].Nc);
							else a =
								this.fA(b, a, f);
							break;
						case 1638400:
							m |= D.As;
							break;
						case -917504:
							d = c.H[0];
							g = c.H[0];
							this.Gp(c.Xa, c.Kb, g.ec, g.Ch);
							this.Gp(g.ec, g.Ch, c.Xa, c.Kb);
							f = N.Jf(c.sa);
							l = this.yq(f) ? H.Dd | H.Bm : H.Dd | H.up | H.Bm;
							g = g.type;
							h = this.yq(g) ? H.Dd | H.Bm : H.Dd | H.up | H.Bm;
							g = 3;
							break;
						case -262144:
							f = N.Jf(c.sa);
							l = this.yq(f) ? H.Dd : H.Dd | H.up;
							d = c.H[0];
							g = c.H[0].type;
							h = this.yq(g) ? H.Dd : H.Dd | H.up;
							g = 3;
							break;
						case -720896:
						case -786432:
							h = H.tp;
							g = 1;
							break;
						case -851968:
							h = H.sp, g = 1
					}
					else switch (r)
					{
						case -327681:
							q &= ~D.bx;
							break;
						case -393217:
							q |= D.So;
							break;
						case -262145:
							q |=
								D.So;
							break;
						case -196609:
							q |= D.xs + D.zs;
							break;
						case -196614:
							l = H.Dd;
							d = c.H[0];
							g = 2;
							break;
						case -393222:
							l = H.Dd, d = c.H[1], g = 2
					}
					if (0 != (g & 1))
						for (e = this.tg(c.Xa); - 1 != e; e = this.Cf()) this.l.P[e].zd |= h;
					if (0 != (g & 2))
						for (e = this.tg(d.ec); - 1 != e; e = this.Cf()) this.l.P[e].zd |= l
				}
				b.Ka &= ~q;
				b.Ka |= m
			}
			this.Ee[a] = -1;
			m = Array(p.Ud + t + 1);
			b = k = 0;
			for (e = -p.Ud; 0 > e; e++, b++) m[b] = k, k += this.hv[p.Ud + e];
			for (v = 0; v < this.l.ie; v++, b++) m[b] = k, k = this.l.P[v].Ad < p.Nf ? k + (this.hv[p.Ud + this.l.P[v].Ad] + N.Zh + 1) : k + (this.Jc.au.zz(this.l.P[v].Ad) + N.Zh + 1);
			h = k;
			this.Tb =
				Array(h);
			for (g = 0; g < h; g++) this.Tb[g] = 0;
			q = 0;
			f = Array(this.l.A.lg);
			for (v = 0; v < this.En; v++)
				for (b = this.Jd[v], b.Ka &= ~D.ys, d = !0, k = l = 0; k < b.Jb; k++)
				{
					c = b.Wa[k];
					e = N.Jf(c.sa);
					r = c.sa;
					g = -N.Bs(r);
					if (d)
						if (0 != (c.Qa & Q.vs) && q++, 0 > e) this.Tb[m[7 + e] + g]++;
						else
						{
							d = 0;
							for (e = this.tg(c.Xa); - 1 != e; e = this.Cf()) this.Tb[m[p.Ud + e] + g]++, f[d++] = e;
							f[d] = -1;
							if (-917504 == N.iq(r))
								for (d = c.H[0], e = this.tg(d.ec); - 1 != e; e = this.Cf())
								{
									for (d = 0; f[d] != e && -1 != f[d];) d++; - 1 == f[d] && this.Tb[m[p.Ud + e] + g]++
								}
						} d = !1;
					if (-1507329 == c.sa || -1572865 == c.sa) d = !0, b.Ka |= D.ys,
						0 == l ? l = c.sa : c.sa = l, -1572865 == l && (b.Ka |= D.cx)
				}
			c = q + 1;
			for (b = 0; b < h; b++) 0 != this.Tb[b] && (k = this.Tb[b], this.Tb[b] = c, c += k + 1);
			this.hc = Array(c);
			this.Xf = Array(c);
			for (g = 0; g < c; g++) this.hc[g] = null, this.Xf[g] = 0;
			l = Array(h);
			for (g = 0; g < h; g++) l[g] = this.Tb[g];
			this.l.Wi = null;
			q = h = 0;
			var w;
			for (v = 0; v < this.En; v++)
				for (b = this.Jd[v], d = !0, k = 0; k < b.Jb; k++)
				{
					c = b.Wa[k];
					e = N.Jf(c.sa);
					r = c.sa;
					g = -N.Bs(r);
					if (d)
						if (0 != (c.Qa & Q.vs) && (q++, this.hc[h] = b, this.Xf[h] = k, h++), 0 > e)
						{
							if (w = m[p.Ud + e] + g, this.hc[l[w]] = b, this.Xf[l[w]] = k, l[w]++, c.sa == J.gD)
							{
								d = !1;
								for (g = 0; g < b.Jb && b.Wa[g].sa != J.hD && b.Wa[g].sa != J.iD; g++);
								g < b.Jb && (d = !0);
								g = c.H[0];
								if (g.Da[0].code == ca.Cs && 0 == g.Da[1].code)
									for (e = g.Da[0].Fb, this.l.ot(e), g = 0; g < u.length; g++)
										if (r = u[g], n.xb(r.name, e))
										{
											this.l.Wi || (this.l.Wi = []);
											w = null;
											for (g = 0; g < this.l.Wi.length; g++)
												if (n.xb(e, this.l.Wi[g].name))
												{
													w = this.l.Wi[g];
													break
												} w || (w = new zc(e), this.l.Wi.push(w));
											w.TC(b);
											w.aA |= d;
											r.lF.fO = g + 1;
											break
										}
							}
						}
					else
					{
						d = 0;
						for (e = this.tg(c.Xa); - 1 != e; e = this.Cf()) w = m[p.Ud + e] + g, this.hc[l[w]] = b, this.Xf[l[w]] = k, l[w]++, f[d++] = e;
						f[d] = -1;
						if (-917504 == N.iq(r))
							for (d = c.H[0], e = this.tg(d.ec); - 1 != e; e = this.Cf())
							{
								for (d = 0; f[d] != e && -1 != f[d];) d++; - 1 == f[d] && (w = m[p.Ud + e] + g, this.hc[l[w]] = b, this.Xf[l[w]] = k, l[w]++)
							}
					}
					d = !1;
					if (-1507329 == c.sa || -1572865 == c.sa) d = !0
				}
			this.Qj = Array(t + 1 + a / 2);
			for (v = u = 0; v < this.l.ie; v++)
				if (t = this.l.P[v], b = m[p.Ud + v], t.uv = b, 0 != (t.dr & z.ah))
				{
					a = 0;
					k = this.Tb[b - N.Bs(-786432)];
					if (0 != k)
						for (; null != this.hc[k];)
						{
							b = this.hc[k];
							c = b.Wa[this.Xf[k]];
							f = c.H[0].value;
							d = N.cG(b);
							for (g = b.oe; 0 < g; g--, d++) c = b.Wa[d], c.sa == (524288 | t.Ad & 65535) && (a |= f);
							k++
						}
					t.vv =
						a;
					b = t.Nc;
					for (g = a = 0; - 1 != this.Ee[a]; a += 2)
						if (this.Ee[a] == b)
							if (c = this.Ee[a + 1], 0 != (c & 32768)) t.zd |= c;
							else
							{
								for (k = 0; k < g && this.Qj[u + k] != c;) k++;
								k == g && (this.Qj[u + g++] = c)
							} 0 < g && (t.Cl = u, this.Qj[u + g++] = -1, u += g)
				} this.xe[0] = 0;
			for (g = 1; g <= p.Ud; g++) this.xe[g] = m[p.Ud - g];
			for (v = 0; v < this.l.ie; v++)
				if (t = this.l.P[v], e = t.gb, 0 == (e & 2147483648))
				{
					do a = this.l.F[e], a.ru = t.uv, a.jc = t, a.Ge = t.zd, 0 != (a.ka & z.ah) && (a.w.ow = t.vv), 0 != (a.ka & z.fi) && 0 == (a.Ge & H.Dd) && a.D.Qr(!1), 0 == (a.ka & z.Fx) && (a.ka &= ~z.rj, 0 != (a.Ge & H.sp) && 0 != (this.l.A.Hb & E.mx) &&
						(a.ka |= z.rj), 0 != (a.Ge & (H.Dd | H.tp)) && (a.ka |= z.rj)), e = a.Qb; while (0 == (e & 2147483648))
				} this.SB = 0 != q ? !0 : !1;
			this.Ee = null;
			this.Hm = !0
		},
		ds: function()
		{
			this.Hm = !1;
			this.Xf = this.hc = this.Tb = this.Qj = this.Pb = null
		},
		hn: function(a, b)
		{
			if (0 != (a & p.ft))
			{
				var c;
				for (c = 0; a != this.ug[c].mr || b != this.ug[c].nr;) c++;
				return c | 32768
			}
			for (c = 0; c < this.l.ie && this.l.P[c].Nc != a;) c++;
			return c
		},
		yq: function(a)
		{
			var b;
			for (b = 0; b < this.l.ie; b++)
				if (-1 != this.l.P[b].Nc && this.l.P[b].Ad == a)
					if (0 != (this.l.P[b].dr & z.fi) && 0 == (this.l.P[b].dr & z.et)) break;
					else return !1;
			return !0
		},
		tg: function(a)
		{
			if (0 == (a & 32768)) return this.Zn = -1, a;
			if (-1 == a) return -1;
			this.Zn = a & 32767;
			this.Xn = 0;
			return this.Cf()
		},
		Cf: function()
		{
			var a;
			if (-1 == this.Zn || this.Xn >= this.Pb[this.Zn].Ba.length) return -1;
			a = this.Pb[this.Zn].Ba[this.Xn + 1];
			this.Xn += 2;
			return a
		},
		aI: function(a)
		{
			if (0 == (a & 32768)) return this.$n = -1, a;
			if (-1 == a) return -1;
			this.$n = a & 32767;
			this.Yn = 0;
			return this.xB()
		},
		xB: function()
		{
			var a;
			if (-1 == this.$n || this.Yn >= this.Pb[this.$n].Ba.length) return -1;
			a = this.Pb[this.$n].Ba[this.Yn + 1];
			this.Yn += 2;
			return a
		},
		Gp: function(a, b, c, d)
		{
			var e, f;
			if (0 > b)
			{
				if (null != this.Pb)
					for (e = this.Pb[a & 32767], f = 0; f < e.Ba.length;) this.Gp(e.Ba[f + 1], e.Ba[f], c, d), f += 2
			}
			else if (0 > d)
			{
				if (null != this.Pb)
					for (e = this.Pb[c & 32767], f = 0; f < e.Ba.length;) this.Gp(a, b, e.Ba[f + 1], e.Ba[f]), f += 2
			}
			else
			{
				a = this.l.P[a];
				if (null == a.Li) a.Li = [], a = a.Li;
				else
					for (a = a.Li, b = 0; b < a.length; b += 2)
						if (d == a[b]) return;
				a.push(d);
				a.push(c)
			}
		},
		fA: function(a, b, c)
		{
			var d, e, f, g, m;
			for (m = 0; m < a.Jb; m++)
				if (g = a.Wa[m], 2 <= N.Jf(g.sa)) switch (e = 32768 + H.RE, f = N.iq(g.sa), f)
				{
					case -917504:
						f = g.H[0];
						for (d = this.tg(g.Xa); - 1 != d; d = this.Cf()) d = this.l.P[d].Nc, c == d && (e = 0, b = this.gA(b, c, f.ec));
						if (0 == e) break;
						for (d = this.tg(f.ec); - 1 != d; d = this.Cf()) d = this.l.P[d].Nc, c == d && (b = this.gA(b, c, g.Xa));
						break;
					case -786432:
						f = g.H[0], e = 32768 + f.value;
					case -851968:
						for (d = this.tg(g.Xa); - 1 != d; d = this.Cf()) d = this.l.P[d].Nc, c == d && (this.Ee[b++] = c, this.Ee[b++] = e)
				}
			return b
		},
		gA: function(a, b, c)
		{
			for (c = this.tg(c); - 1 != c; c = this.Cf())
			{
				c = this.l.P[c].Nc;
				var d;
				for (d = 0; d < a && (this.Ee[d] != b || this.Ee[d + 1] != c); d += 2);
				d == a && (this.Ee[a++] = b, this.Ee[a++] =
					c)
			}
			return a
		},
		bG: function(a)
		{
			var b, c, d, e, f, g;
			for (d = 0; d < this.En; d++)
				for (b = this.Jd[d], e = 0; e < b.Jb + b.oe; e++)
					for (c = b.Wa[e], f = 0; f < c.rd; f++) switch (c.H[f].code)
					{
						case 6:
						case 35:
							g = c.H[f], a.kh(g.uw)
					}
		}
	};
	D.bx = 1;
	D.xs = 2;
	D.zs = 4;
	D.So = 8;
	D.As = 16;
	D.LK = 64;
	D.JK = 128;
	D.FD = 256;
	D.IK = 512;
	D.ys = 1024;
	D.Gk = 2048;
	D.cx = 4096;
	D.GD = 8192;
	D.ws = 16384;
	D.KK = 32768;
	D.ax = D.As + D.xs + D.zs + D.So;
	D.Ro = D.FD + D.GD;
	D.create = function(a)
	{
		var b = a.file.da,
			c = a.file.S(),
			d = new D;
		d.Jb = a.file.ob();
		d.oe = a.file.ob();
		d.Ka = a.file.o();
		a.file.ma(2);
		d.Ij = a.file.s();
		d.il =
			a.file.s();
		d.Wa = Array(d.Jb + d.oe);
		var e, f = 0;
		for (e = 0; e < d.Jb; e++) d.Wa[f++] = J.create(a);
		for (e = 0; e < d.oe; e++) d.Wa[f++] = S.create(a);
		a.file.seek(b - c);
		return d
	};
	Q.ED = 1;
	Q.HK = 2;
	Q.CD = 4;
	Q.Qo = 8;
	Q.qm = 16;
	Q.vs = 32;
	Q.GK = 64;
	Q.$w = 128;
	Q.DD = Q.vs + Q.ED + Q.CD + Q.Qo + Q.qm;
	Q.Fk = 1;
	fb.aF = 0;
	fb.XM = 1;
	xa.Jx = 0;
	xa.IM = 1;
	xa.JM = 2;
	xa.KM = 3;
	xa.prototype = {
		load: function(a)
		{
			this.Ai = a.o();
			this.sf = a.o();
			this.Iu = a.s();
			this.Ju = a.s();
			this.Hu = a.o();
			a.o();
			this.Wz = a.o();
			a.ma(2)
		},
		cd: function(a, b)
		{
			this.Gu[a] = b
		}
	};
	Ac.prototype = {
		load: function(a)
		{
			this.xf = a.file.s();
			this.list = Array(this.xf);
			var b, c = 0;
			for (b = 0; b < this.xf; b++) this.list[b] = new xa, this.list[b].load(a.file), this.list[b].Ai + 1 > c && (c = this.list[b].Ai + 1), this.list[b].Dq = a.Ic.Mj(this.list[b].sf).ve;
			this.va = Array(c);
			for (b = 0; b < this.xf; b++) this.va[this.list[b].Ai] = b
		},
		xz: function(a)
		{
			return this.list[a]
		},
		sG: function(a)
		{
			return a < this.va.length ? this.list[this.va[a]] : null
		},
		In: function()
		{
			var a;
			if (this.Cq < this.xf)
			{
				do
					if (a = this.list[this.Cq++], 2 <= a.Dq) return a; while (this.Cq < this.xf)
			}
			return null
		},
		hq: function()
		{
			this.Cq =
				0;
			return this.In()
		}
	};
	R.JD = 1;
	R.KD = 2;
	R.UK = 4;
	R.sm = 16;
	R.Es = 32;
	R.Fs = 64;
	R.VK = 65536;
	R.rm = 131072;
	R.WK = 262144;
	R.prototype = {
		load: function(a)
		{
			this.Aa = a.s();
			this.lm = a.BB();
			this.mm = a.BB();
			this.Tq = a.s();
			this.Vq = a.s();
			a.Wb();
			this.ay = this.Aa;
			this.dy = this.lm;
			this.ey = this.mm;
			this.by = this.Tq;
			this.cy = this.Vq
		},
		reset: function()
		{
			this.Aa = this.ay;
			this.lm = this.dy;
			this.mm = this.ey;
			this.Tq = this.by;
			this.Vq = this.cy;
			this.x = this.y = this.bq = this.cq = 0;
			this.Ip = this.$j = this.Gl = this.Fl = null;
			this.pw(0);
			this.scale = 1;
			this.dC(1);
			this.eC(1);
			this.iC(this.app.ja / 2);
			this.lC(this.app.oa / 2);
			this.hC(this.app.ja / 2);
			this.kC(this.app.oa / 2);
			this.mC(!1);
			this.Aa & R.rm ? (this.Xd = !0, this.oq()) : (this.Xd = !1, this.show())
		},
		SF: function()
		{
			this.Vb.sI()
		},
		jF: function(a)
		{
			null == this.Fl && (this.Fl = new L);
			this.Fl.add(a)
		},
		Ux: function(a)
		{
			null == this.Gl && (this.Gl = new L);
			this.Gl.add(a)
		},
		Ep: function(a)
		{
			null == this.Ip && (this.Ip = new L);
			this.Ip.add(a)
		},
		IF: function(a, b)
		{
			this.Vb = new Aa;
			this.Vb.x = a;
			this.Vb.y = b;
			this.Cb = new Aa;
			this.Cb.x = a;
			this.Cb.y = b;
			this.Ha = new Aa;
			this.Ha.x = a;
			this.Ha.y = b;
			this.pw(0);
			this.scale = 1;
			this.dC(1);
			this.eC(1);
			this.iC(this.app.ja / 2);
			this.lC(this.app.oa / 2);
			this.hC(this.app.ja / 2);
			this.kC(this.app.oa / 2);
			this.mC(!1);
			this.app.$d.Vd(this.Vb);
			this.app.$d.Vd(this.Cb);
			this.app.$d.Vd(this.Ha);
			this.NI()
		},
		pw: function(a)
		{
			this.angle = a;
			this.Vb.angle = a;
			this.Cb.angle = a;
			this.Ha.angle = a
		},
		dC: function(a)
		{
			this.Zb = a;
			this.Vb.Zb = a;
			this.Cb.Zb = a;
			this.Ha.Zb = a
		},
		eC: function(a)
		{
			this.$b = a;
			this.Vb.$b = a;
			this.Cb.$b = a;
			this.Ha.$b = a
		},
		iC: function(a)
		{
			this.ya = a;
			this.Vb.ya = a;
			this.Cb.ya =
				a;
			this.Ha.ya = a
		},
		lC: function(a)
		{
			this.xa = a;
			this.Vb.xa = a;
			this.Cb.xa = a;
			this.Ha.xa = a
		},
		hC: function(a)
		{
			this.Eo = a = this.app.ja - a;
			this.Vb.Eo = a;
			this.Cb.Eo = a;
			this.Ha.Eo = a
		},
		kC: function(a)
		{
			this.Go = a = this.app.oa - a;
			this.Vb.Go = a;
			this.Cb.Go = a;
			this.Ha.Go = a
		},
		mC: function(a)
		{
			this.Uf = a;
			this.Vb.Uf = a;
			this.Cb.Uf = a;
			this.Ha.Uf = a
		},
		vI: function(a, b)
		{
			this.Vb.x = a;
			this.Vb.y = b;
			this.Cb.x = a;
			this.Cb.y = b;
			this.Ha.x = a;
			this.Ha.y = b;
			this.show()
		},
		NI: function()
		{
			this.Aa & R.sm ? this.show() : this.oq()
		},
		oq: function()
		{
			this.Aa &= ~R.rm;
			this.Xd && (this.Vb.visible = !1, this.Cb.visible = !1, this.Xd = this.Ha.visible = !1)
		},
		show: function()
		{
			0 == this.Xd && (this.Vb.visible = !0, this.Cb.visible = !0, this.Xd = this.Ha.visible = !0)
		},
		My: function()
		{
			null != this.Vb && (this.app.$d.removeChild(this.Vb), this.Vb = null);
			null != this.Cb && (this.app.$d.removeChild(this.Cb), this.Cb = null);
			null != this.Ha && (this.app.$d.removeChild(this.Ha), this.Ha = null)
		},
		iF: function(a, b, c, d)
		{
			var e = new Y;
			e.left = a;
			e.top = b;
			e.right = c;
			e.bottom = d;
			null == this.$j && (this.$j = new L);
			this.$j.add(e)
		},
		tG: function(a, b)
		{
			a += this.x;
			b += this.y;
			if (null != this.$j)
			{
				var c, d;
				for (c = 0; c < this.$j.size(); c++)
					if (d = this.$j.get(c), a >= d.left && b >= d.top && a < d.right && b < d.bottom) return d
			}
			return null
		},
		bj: function(a, b, c, d, e)
		{
			b = b + this.x - a.ya;
			c = c + this.y - a.xa;
			var f = b + a.width,
				g = c + a.height,
				m = c;
			0 != d && (m = g - d);
			var q, h;
			h = e == qa.Mo ? this.Fl : this.Gl;
			if (null == h) return null;
			for (e = 0; e < h.size(); e++)
				if (q = h.get(e), q.x < f && q.x + q.width > b && q.y < g && q.y + q.height > m && q.bj(a, b, c, d)) return q;
			return null
		},
		Yr: function(a, b, c, d, e, f)
		{
			f = f == qa.Mo ? this.Fl : this.Gl;
			if (null == f) return null;
			a += this.x;
			b += this.y;
			c += this.x;
			d += this.y;
			0 != e && (b = d - e);
			for (e = 0; e < f.size(); e++)
			{
				var g = f.get(e);
				if (g.x < c && g.x + g.width > a && g.y < d && g.y + g.height > b && g.Yr(a, b, c, d)) return g
			}
			return null
		}
	};
	ga.prototype = {
		rb: function(a, b, c)
		{
			if (null != this.hH)
				if (this.type == p.GE)
				{
					var d = this.Od.fc,
						e;
					switch (d.Gi)
					{
						case 1:
							switch (d.zh)
							{
								case 1:
									a.ld(b + this.x, c + this.y, this.width, this.height, this.Bj, this.Hd, this.Id);
									break;
								case 2:
									a.oc(b + this.x, c + this.y, this.width, this.height, this.Bj, this.Hd, this.Id);
									break;
								case 3:
									a.$v(b + this.x, c + this.y, this.width, this.height,
										this.Bj, this.Hd, this.Id)
							}
							break;
						case 2:
							switch (d.zh)
							{
								case 1:
									a.ld(b + this.x, c + this.y, this.width, this.height, this.Bj, this.Hd, this.Id);
									break;
								case 2:
									a.Zv(b + this.x, c + this.y, this.width, this.height, this.Bj, this.Jt, 0 != this.Jz, this.Hd, this.Id);
									break;
								case 3:
									a.GB(b + this.x, c + this.y, this.width, this.height, this.Bj, this.Jt, 0 != this.Jz, this.Hd, this.Id)
							}
							break;
						case 3:
							switch (d.zh)
							{
								case 2:
									e = this.app.ca.Mb(d.yh);
									a.HB(e, b + this.x, c + this.y, this.width, this.height, this.Hd, this.Id);
									break;
								case 3:
									e = this.app.ca.Mb(d.yh), a.IB(e, b +
										this.x, c + this.y, this.width, this.height, this.Hd, this.Id)
							}
					}
					if (0 < this.borderWidth) switch (d.zh)
					{
						case 1:
							var f = e = 0,
								g = this.width,
								m = this.height;
							0 != (d.On & Fa.nE) && (e += g, g = -g);
							0 != (d.On & Fa.oE) && (f += m, m = -m);
							a.ld(b + this.x + e, c + this.y + f, b + this.x + e + g, c + this.y + f + m, this.borderColor, this.borderWidth);
							break;
						case 2:
							a.xr(b + this.x, c + this.y, this.width, this.height, this.borderColor, this.borderWidth);
							break;
						case 3:
							a.FB(b + this.x, c + this.y, this.width, this.height, 1, this.borderColor, this.borderWidth)
					}
				}
			else this.type == p.FE ? a.tI(this.Tc,
				b + this.x + this.Tc.ya, c + this.y + this.Tc.xa, 0, 1, 1, this.Hd, this.Id) : null != this.Y && this.Y.rb(a, b, c);
			else a.Pe(this.Tc, b + this.x + this.Tc.ya, c + this.y + this.Tc.xa, 0, 1, 1, this.Hd, this.Id)
		},
		ZB: function(a, b)
		{
			this.Hd = a;
			this.Id = b
		},
		cd: function(a, b)
		{
			b.Vb.Vd(this);
			this.type == p.Ax && b.Ep(this);
			switch (this.Le)
			{
				case X.pp:
					b.jF(this);
					b.Ux(this);
					break;
				case X.Rf:
					b.Ux(this);
					break;
				case X.dt:
					b.iF(this.x, this.y, this.x + this.width, this.y + this.height)
			}
		},
		bj: function(a, b, c, d)
		{
			var e;
			switch (this.type)
			{
				case 0:
					return e = this.height, this.Le ==
						X.Rf && (e = E.Uo), a.zw(b, c, d, this.x, this.y, this.width, e, 0);
				case 1:
					if (0 != this.Zk) return !0;
					e = B.Hk;
					this.Le == X.Rf && (e = B.Ik);
					e = this.Tc.ag(e, 0, 1, 1);
					return a.bj(b, c, d, e, this.x, this.y, 0);
				case 11:
					if (0 != this.Zk) return !0;
					e = B.Hk;
					this.Le == X.Rf && (e = B.Ik);
					e = this.Tc.ag(e, 0, 1, 1);
					return a.bj(b, c, d, e, this.x, this.y, 0)
			}
			return !1
		},
		Yr: function(a, b, c, d)
		{
			var e;
			switch (this.type)
			{
				case 0:
					if (this.Le == X.Rf)
					{
						a = this.y + Math.min(this.height, E.Uo);
						if (this.y < d && a > b) return !0;
						break
					}
					return !0;
				case 1:
					if (0 != this.Zk) return !0;
					e = B.Hk;
					this.Le == X.Rf &&
						(e = B.Ik);
					e = this.Tc.ag(e, 0, 1, 1);
					return e.zw(this.x, this.y, 0, a, b, c, d, 0);
				case 11:
					if (0 != this.Zk) return !0;
					e = B.Hk;
					this.Le == X.Rf && (e = B.Ik);
					e = this.Tc.ag(e, 0, 1, 1);
					return e.zw(this.x, this.y, 0, a, b, c, d, 0)
			}
			return !1
		}
	};
	p.CM = 1;
	p.AM = 2;
	p.EM = 4;
	p.DM = 8;
	p.rp = 16;
	p.PE = 32;
	p.BM = 64;
	p.zM = 1;
	p.yM = 2;
	p.Ix = 4;
	p.Ud = 7;
	p.Bx = -7;
	p.XL = -6;
	p.WL = -5;
	p.Am = -4;
	p.np = -3;
	p.ZL = -2;
	p.$L = -1;
	p.GE = 0;
	p.FE = 1;
	p.Be = 2;
	p.Qf = 3;
	p.Cx = 4;
	p.op = 5;
	p.ct = 6;
	p.zm = 7;
	p.YL = 8;
	p.yx = 9;
	p.VL = 10;
	p.Ax = 11;
	p.zx = 10;
	p.Nf = 32;
	p.ft = 32768;
	p.prototype = {
		Lu: function(a)
		{
			this.Qn = a.o();
			this.ve =
				a.o();
			this.Dh = a.o();
			a.ma(2);
			this.ov = a.s();
			this.pv = a.s()
		},
		load: function(a)
		{
			a.seek(this.cB);
			switch (this.ve)
			{
				case 0:
					this.fc = new Fa;
					break;
				case 1:
					this.fc = new Cc;
					break;
				default:
					this.fc = new z
			}
			this.fc.load(a, this.ve);
			this.dB = 0
		},
		fJ: function()
		{
			this.fc = null
		},
		cc: function(a, b)
		{
			this.fc.cc(a, b)
		}
	};
	Bc.prototype = {
		Hh: function(a)
		{
			this.Ki = a.s();
			this.nc = Array(this.Ki);
			var b;
			for (b = this.pg = 0; b < this.Ki; b++)
				for (var c = 0, d; 32639 != c;)
					if (c = a.o(), a.o(), d = a.s(), 0 != d)
					{
						d = a.da + d;
						switch (c)
						{
							case 17476:
								this.nc[b] = new p;
								this.nc[b].Lu(a);
								this.nc[b].Qn >= this.pg && (this.pg = this.nc[b].Qn + 1);
								break;
							case 17477:
								this.nc[b].qv = a.Wb();
								break;
							case 17478:
								this.nc[b].cB = a.da
						}
						a.seek(d)
					} this.Eh = Array(this.pg);
			for (b = 0; b < this.Ki; b++) this.Eh[this.nc[b].Qn] = b;
			this.Rn = Array(this.pg);
			this.Ji = Array(this.pg);
			for (a = 0; a < this.pg; a++) this.Rn[a] = 0, this.Ji[a] = 0
		},
		Mj: function(a)
		{
			return this.nc[this.Eh[a]]
		},
		uI: function()
		{
			var a;
			for (a = 0; a < this.Ki; a++) this.nc[a].Dh &= ~p.rp
		},
		MI: function(a)
		{
			this.nc[this.Eh[a]].Dh |= p.rp
		},
		uz: function()
		{
			var a;
			for (a = 0; a < this.Ki; a++)
				if (0 != (this.nc[a].Dh &
						p.rp)) return this.Yp = a, this.nc[a];
			return null
		},
		yz: function()
		{
			if (this.Yp < this.Ki)
			{
				var a;
				for (a = this.Yp + 1; a < this.Ki; a++)
					if (0 != (this.nc[a].Dh & p.rp)) return this.Yp = a, this.nc[a]
			}
			return null
		},
		Qe: function()
		{
			var a;
			for (a = 0; a < this.pg; a++) this.Rn[a] = 0
		},
		aj: function(a)
		{
			this.Rn[a] = 1
		},
		load: function(a)
		{
			var b;
			for (b = 0; b < this.pg; b++)
				if (0 != this.Rn[b])
				{
					if (0 == this.Ji[b] || 0 != this.Ji[b] && 0 != (this.nc[this.Eh[b]].dB & p.PE)) this.nc[this.Eh[b]].load(a), this.Ji[b] = 1
				}
			else 0 != this.Ji[b] && (this.nc[this.Eh[b]].fJ(), this.Ji[b] = 0);
			this.Qe()
		},
		cc: function(a, b)
		{
			var c;
			for (c = 0; c < this.pg; c++) 0 != this.Ji[c] && this.nc[this.Eh[c]].cc(a, b)
		}
	};
	X.Dx = 0;
	X.pp = 1;
	X.Rf = 2;
	X.dt = 3;
	X.HE = 4;
	Cc.prototype = {
		load: function(a)
		{
			a.ma(4);
			this.$A = a.o();
			this.WA = a.o();
			this.XA = a.s();
			this.YA = a.s();
			this.yh = a.o()
		},
		cc: function(a)
		{
			null != a && (a = a.kh(this.yh), -1 != a && (this.yh = a))
		}
	};
	Fa.nE = 1;
	Fa.oE = 2;
	Fa.prototype = {
		load: function(a)
		{
			a.ma(4);
			this.$A = a.o();
			this.WA = a.o();
			this.XA = a.s();
			this.YA = a.s();
			this.ar = a.o();
			this.$q = a.Vc();
			this.zh = a.o();
			this.Gi = a.o();
			if (1 == this.zh) this.On = a.o();
			else switch (this.Gi)
			{
				case 1:
					this.mg =
						this.zl = a.Vc();
					break;
				case 2:
					this.mg = a.Vc();
					this.zl = a.Vc();
					this.Nn = a.s();
					break;
				case 3:
					this.yh = a.o()
			}
		},
		cc: function(a)
		{
			3 == this.Gi && null != a && (a = a.kh(this.yh), -1 != a && (ocImage = a))
		}
	};
	z.iM = 1;
	z.hM = 2;
	z.LE = 4;
	z.Hx = 8;
	z.ah = 16;
	z.ei = 32;
	z.kM = 64;
	z.mM = 128;
	z.OE = 256;
	z.fi = 512;
	z.jM = 1024;
	z.NE = 2048;
	z.et = 4096;
	z.Gx = 8192;
	z.rj = 16384;
	z.Fx = 32768;
	z.lM = 65536;
	z.Ex = 131072;
	z.ME = 1048576;
	z.aM = 1;
	z.gM = 2;
	z.JE = 4;
	z.qp = 8;
	z.cM = 4;
	z.bM = 48;
	z.fM = 16;
	z.eM = 32;
	z.dM = 48;
	z.IE = 64;
	z.KE = 128;
	z.oM = 1;
	z.vM = 2;
	z.uM = 4;
	z.wM = 8;
	z.tM = 16;
	z.qM = 32;
	z.nM = 64;
	z.sM = 128;
	z.rM =
		256;
	z.xM = 512;
	z.pM = 1024;
	z.prototype = X;
	z.prototype = {
		load: function(a, b)
		{
			var c = a.da;
			this.lv = Array(8);
			var d;
			a.ma(4);
			a.ma(2);
			var e = a.o();
			a.ma(2);
			var f = a.o(),
				g = a.o(),
				m = a.o();
			this.og = a.s();
			for (d = 0; 8 > d; d++) this.lv[d] = a.S();
			a.o();
			var q = a.o(),
				h = a.o();
			this.Hi = a.o();
			var l = a.o();
			this.mc = a.s();
			a.Vc();
			d = a.s();
			var n = a.s();
			this.Mn = this.Al = null;
			0 != m && (a.seek(c + m), this.ng = new vd, this.ng.load(a));
			0 != q && (a.seek(c + q), this.Bl = new rd, this.Bl.load(a, 0 != (this.Hi & z.KE)));
			0 != h && (a.seek(c + h), this.Pn = new qd, this.Pn.load(a));
			0 !=
				g && (a.seek(c + g), this.Fi = new Ka, this.Fi.load(a));
			0 != f && (a.seek(c + f), this.Mc = new Ec, this.Mc.load(a));
			0 != l && (a.seek(c + l), f = a.s(), a.ma(4), a.s(), a.s(), this.aB = a.s(), 0 != f - 20 && (this.ZA = a.da));
			0 != d && (a.seek(c + d), this.Al = new ra, this.Al.load(a));
			0 != n && (a.seek(c + n), this.Mn = new ra, this.Mn.load(a));
			if (0 != e) switch (a.seek(c + e), b)
			{
				case 3:
				case 4:
					this.Mc = new Gc;
					this.Mc.load(a);
					break;
				case 5:
				case 6:
				case 7:
					this.Za = new ha;
					this.Za.load(a);
					break;
				case 8:
					this.Mc = new Fc;
					this.Mc.load(a);
					this.og &= ~(z.fi | z.et | z.LE);
					break;
				case 9:
					this.Mc =
						new Dc, this.Mc.load(a)
			}
		},
		cc: function(a, b)
		{
			null != this.Fi && this.Fi.cc(a);
			null != this.Mc && this.Mc.cc(a, b);
			null != this.Za && this.Za.cc(a, b)
		}
	};
	Dc.prototype = {
		load: function(a)
		{
			a.ma(4);
			this.Ah = a.s();
			this.Bh = a.s();
			a.o();
			this.bB = a.o();
			this.yd = a.s();
			a.ma(8);
			this.mv = a.Wb()
		},
		cc: function() {}
	};
	Ec.prototype = {
		load: function(a)
		{
			a.ma(2);
			this.Cy = a.s();
			this.Ey = a.s();
			this.Dy = a.s()
		},
		cc: function() {}
	};
	ha.oK = 0;
	ha.nK = 1;
	ha.uD = 2;
	ha.tD = 3;
	ha.mK = 4;
	ha.pK = 5;
	ha.ps = 256;
	ha.prototype = {
		load: function(a)
		{
			a.ma(4);
			this.Ah = a.s();
			this.Bh = a.s();
			this.nv = a.o();
			this.Me = a.o();
			this.Xj = a.o();
			this.Ii = a.o();
			switch (this.Me)
			{
				case 1:
				case 4:
					this.wl = a.o();
					this.frames = Array(this.wl);
					var b;
					for (b = 0; b < this.wl; b++) this.frames[b] = a.o();
					break;
				case 2:
				case 3:
				case 5:
					if (this.ar = a.o(), this.$q = a.Vc(), this.zh = a.o(), this.Gi = a.o(), 1 == this.zh) this.On = a.o();
					else switch (this.Gi)
					{
						case 1:
							this.mg = a.Vc();
							break;
						case 2:
							this.mg = a.Vc(), this.zl = a.Vc(), this.Nn = a.s()
					}
			}
		},
		cc: function(a, b)
		{
			switch (this.Me)
			{
				case 1:
				case 4:
					var c;
					for (c = 0; c < this.wl; c++) null != a && a.kh(this.frames[c]);
					break;
				case 5:
					null != b && b.kh(this.Ii)
			}
		}
	};
	Fc.prototype = {
		load: function(a)
		{
			a.s();
			a.s();
			this.yd = a.s();
			a.Vc();
			this.Ah = a.s();
			this.Bh = a.s();
			a.ma(4);
			var b = a.s();
			this.text = a.Wb(b)
		},
		cc: function() {}
	};
	ma.$M = 0;
	ma.ZM = 1;
	ma.aN = 2;
	ma.bN = 4;
	ma.YM = 15;
	ma.bF = 256;
	ma.Ox = 512;
	ma.prototype = {
		load: function(a)
		{
			this.im = a.S();
			this.Co = a.o();
			this.Cw = a.Vc();
			this.Uh = a.Wb()
		},
		cc: function(a, b)
		{
			null != b && b.kh(this.im)
		}
	};
	Gc.prototype = {
		load: function(a)
		{
			var b = a.da;
			a.ma(4);
			this.Bv = a.s();
			this.Cv = a.s();
			this.Zj = a.s();
			this.Ib = Array(this.Zj);
			var c = Array(this.Zj),
				d;
			for (d = 0; d < this.Zj; d++) c[d] = a.s();
			for (d = 0; d < this.Zj; d++) this.Ib[d] = new ma, a.seek(b + c[d]), this.Ib[d].load(a)
		},
		cc: function(a, b)
		{
			var c;
			for (c = 0; c < this.Zj; c++) this.Ib[c].cc(a, b)
		}
	};
	F.Tg = 1;
	F.jx = 2;
	F.nL = 4;
	F.$h = 8;
	F.ai = 16;
	F.ZD = 32;
	F.Kf = 8192;
	F.mL = 16384;
	F.oL = 32768;
	F.prototype = {
		cC: function(a, b)
		{
			if (this.b.ub != a || this.b.vb != b)
			{
				0 <= a && (this.b.ub = a);
				0 <= b && (this.b.vb = b);
				this.b.L = !0;
				var c = this.c.h.ca.Kj(this.b.Ia, this.b.$a, this.b.ub, this.b.vb);
				this.K = c.width;
				this.J = c.height;
				this.fa = c.ya;
				this.ga = c.xa
			}
		},
		oC: function(a, b,
			c, d)
		{
			var e = this.ud;
			b = this.c.Um(a.Jm, a.Ft, b, c, d, h.Vw | h.Dk, e, -1);
			0 <= b && (b = this.c.F[b], null != b.w ? (b.b.Ma = d, b.w.Oz(b, O.wx, !1), b.b.Z = a.OI, b.w.$.vq(this), -1 != e && 0 != (b.ka & z.fi) && (this.c.A.fb[e].Aa & (R.rm | R.sm)) != R.sm && b.D.Kn(), this.c.j.lh(b), 0 != (this.ka & z.ei) && this.U.Tf(v.Jo) && (this.U.Em(v.Jo), this.U.Jp())) : this.c.kf(b.yb))
		},
		X: function() {},
		handle: function() {},
		hh: function() {},
		Ay: function() {},
		display: function() {},
		Ab: function() {},
		lG: function()
		{
			return null
		},
		ZB: function() {},
		pt: function() {},
		Wk: function() {},
		ti: function()
		{
			return 0
		},
		wk: function() {},
		Nj: function() {},
		fm: function() {},
		Sc: function()
		{
			return -1
		},
		ml: function()
		{
			return 0
		},
		le: function() {},
		mi: function() {},
		kl: function() {}
	};
	Hc.prototype = n.extend(new F,
	{
		handle: function()
		{
			this.D.handle();
			this.b.L && (this.b.L = !1)
		},
		pt: function(a, b, c, d, e)
		{
			this.qa = this.c.A.fb[d];
			this.na = e;
			this.qa.Ha.Vd(this)
		},
		rb: function(a, b, c)
		{
			if (this.na && (0 == (this.W & F.$h) || this.D.Cg))
			{
				var d = this.D.Dc;
				this.D.V & w.ZE && (d |= w.Nw);
				var e = this.c.h.ca.Mb(this.b.Ia);
				e && (this.Bk ? a.Ti(this.Bk, b + this.v - this.c.ea + this.qa.x - e.ya,
					c + this.u - this.c.ia + this.qa.y - e.xa, this.Bk.width * this.b.ub, this.Bk.height * this.b.vb, d, this.D.rc) : a.Pe(e, b + this.v - this.c.ea + this.qa.x, c + this.u - this.c.ia + this.qa.y, this.b.$a, this.b.ub, this.b.vb, d, this.D.rc))
			}
		},
		ti: function()
		{
			return this.qa.Ha.removeChild(this)
		},
		wk: function()
		{
			this.na = !0
		},
		Nj: function()
		{
			this.na = !1
		},
		Sc: function()
		{
			return this.qa.Ha.Sc(this)
		},
		ml: function()
		{
			return this.qa.Ha.children.length
		},
		le: function(a)
		{
			a >= this.qa.Ha.children.length && (a = this.qa.Ha.children.length);
			0 > a && (a = 0);
			this.qa.Ha.le(this,
				a)
		},
		fm: function(a)
		{
			this.D.Dc = w.Xe;
			this.D.rc = a
		}
	});
	I.Qw = 1;
	I.aD = 2;
	I.cD = 4;
	I.iK = 8;
	I.dD = 16;
	I.gK = 32;
	I.UJ = 64;
	I.kK = 128;
	I.TJ = 256;
	I.lK = 512;
	I.jK = 1024;
	I.XJ = 2048;
	I.Lo = 4096;
	I.WJ = 8192;
	I.Pw = 16384;
	I.cK = 32768;
	I.ZC = 65536;
	I.dK = 131072;
	I.VJ = 262144;
	I.bD = 524288;
	I.eK = 1048576;
	I.$C = 2097152;
	I.bK = 12582912;
	I.ZJ = 0;
	I.aK = 4194304;
	I.$J = 8388608;
	I.YJ = 12582912;
	I.hK = 16777216;
	I.fK = 33554432;
	I.prototype = n.extend(new F,
	{
		tC: function(a, b, c)
		{
			b = a.Mc;
			this.K = b.Ah;
			this.J = b.Bh;
			this.yd = b.yd;
			0 != (this.yd & I.dD) && (this.yd |= I.ZC); - 1 == c && (c = 0, 0 != (this.yd &
				I.Pw) && (c = b.bB));
			null == b.mv || 0 != b.mv.length || 0 == (this.yd & I.Pw) || c >= this.c.h.mf || c == this.c.h.ne || (this.Xd = 0 != (a.Hi & z.qp) ? !0 : !1, this.vc = new Aa, this.vc.x = this.v - this.c.ea, this.vc.y = this.u - this.c.ia, this.c.h.$d.Vd(this), this.zv = this.v, this.Av = this.u, this.B = new l(this.c.h, this.c.h.file, this.c.h.path, !0), this.B.$B(this.c.h, c, this.yd, this.vc, this.K, this.J), this.B.digest(), 0 != (this.yd & I.Lo) && null == this.c.h.uf && (this.c.h.uf = this, this.c.h.G.pause()), this.B.vw(), this.B.Tr((this.c.h.ej + this.vc.x) * this.c.h.Zb,
				(this.c.h.fj + this.vc.y) * this.c.h.$b), this.B.yo(), this.c.h.bb.push(this.B))
		},
		X: function(a)
		{
			this.tC(a, !0, -1)
		},
		handle: function()
		{
			this.w.move();
			if (null != this.B)
			{
				if (this.zv != this.v || this.Av != this.u) this.vc.x = this.v - this.c.ea, this.vc.y = this.u - this.c.ia, this.zv = this.v, this.Av = this.u, this.B.Tr(this.vc.x * this.c.h.Zb, this.vc.y * this.c.h.$b), this.gJ();
				0 == this.B.yo() ? (this.$p(), 0 != (this.yd & I.Lo) && null != this.B.ta && this.B.ta.uf == this && (this.B.ta.uf = null, this.B.ta.G.resume()), this.B = null) : (this.hB = this.level, this.level =
					this.B.ne)
			}
		},
		rb: function(a)
		{
			this.Xd && null != this.B && this.B.Vy(a, this.vc.x, this.vc.y)
		},
		Ab: function()
		{
			if (null != this.B)
			{
				switch (this.B.Sa)
				{
					case 3:
						this.B.Qm()
				}
				this.$p();
				this.B.$y();
				0 != (this.yd & I.Lo) && null != this.B.ta && this.B.ta.uf == this && (this.B.ta.uf = null, this.B.ta.G.resume());
				this.B = null
			}
		},
		$p: function()
		{
			var a;
			for (a = 0; a < this.c.h.bb.length; a++)
				if (this.c.h.bb[a] == this.B)
				{
					this.c.h.bb.splice(a, 1);
					break
				} this.c.h.$d.removeChild(this.vc)
		},
		XO: function()
		{
			if (null != this.B)
			{
				if (null != this.B.G)
				{
					this.B.G.ib = h.Ks;
					return
				}
				this.Ab(!0)
			}
			this.tC(this.M,
				!1, -1)
		},
		cO: function()
		{
			null != this.B && (null != this.B.G && (this.B.G.ib = h.Xo), 0 != (this.yd & I.Lo) && null != this.B.ta && this.B.ta.uf == this && (this.B.ta.uf = null, this.B.ta.G.resume()))
		},
		oq: function()
		{
			this.Xd = !1
		},
		show: function()
		{
			this.Xd = !0
		},
		GO: function(a)
		{
			null != this.B && null != this.B.G && 0 <= a && 4096 > a && (this.B.G.ib = h.Yo, this.B.G.am = 32768 | a)
		},
		tb: function()
		{
			null != this.B && null != this.B.G && (this.B.G.ib = h.Zo)
		},
		OO: function()
		{
			null != this.B && null != this.B.G && (this.B.G.ib = h.Ls)
		},
		YO: function()
		{
			null != this.B && null != this.B.G && (this.B.G.ib =
				h.qE)
		},
		pause: function()
		{
			null != this.B && null != this.B.G && this.B.G.pause()
		},
		resume: function()
		{
			null != this.B && null != this.B.G && this.B.G.resume()
		},
		fP: function(a, b)
		{
			null != this.B && this.B.JI(a, b)
		},
		eP: function(a, b)
		{
			null != this.B && this.B.II(a, b)
		},
		TG: function()
		{
			return null != this.B && null != this.B.G ? 0 != this.B.G.Df : !1
		},
		CN: function()
		{
			return null == this.B
		},
		FO: function()
		{
			return this.Xd
		},
		hO: function()
		{
			return this.level != this.hB
		},
		uO: function(a)
		{
			return null != this.B ? this.B.vz(a) : ""
		},
		vO: function(a)
		{
			return null != this.B ? this.B.wz(a) :
				0
		},
		sO: function()
		{
			return this.level + 1
		},
		rw: function() {},
		qw: function() {},
		HN: function()
		{
			null != this.B && this.Xd && (hoAdRunHeader.h.VH.removeChild(this), hoAdRunHeader.h.VH.Vd(this))
		},
		gJ: function()
		{
			if (null != this.B && null != this.B.G)
			{
				var a = this.B.G,
					b = 0,
					c;
				for (c = 0; c < a.hb; c++)
				{
					for (; null == a.F[b];) b++;
					var d = a.F[b];
					b++;
					d.kl()
				}
			}
		},
		mi: function()
		{
			this.B.Tr((this.c.h.ej + this.vc.x) * this.c.h.Zb, (this.c.h.fj + this.vc.y) * this.c.h.$b);
			null != this.B && this.B.Ol()
		}
	});
	Ic.prototype = {
		X: function()
		{
			this.vb = this.ub = 1;
			this.$a = 0;
			this.Oc = -1
		},
		Ab: function() {}
	};
	ba.Xw = 15;
	ba.oD = 240;
	ba.pD = 4;
	ba.mD = 61440;
	ba.nD = 12;
	ba.qD = 512;
	ba.sD = 1024;
	ba.rD = 2048;
	ba.prototype = n.extend(new F,
	{
		X: function()
		{
			this.sc = -1;
			this.ro = this.qc = 0;
			this.K = this.J = 1;
			if (null == this.M.Za) this.J = this.Zc = this.K = this.Yc = 1;
			else
			{
				var a = this.M.Za;
				this.K = this.Yc = a.Ah;
				this.J = this.Zc = a.Bh;
				this.qd = a.Xj;
				this.type = a.Me;
				switch (this.type)
				{
					case 5:
						var b = this.sc; - 1 == b && (b = a.Ii);
						this.font = this.c.h.Gb.pf(b);
						this.td = this.font.Fe();
						this.qc = a.mg;
						break;
					case 2:
					case 3:
						this.qc = a.mg, this.ro = a.zl
				}
			}
			a = this.M.Mc;
			this.ab = a.Ey;
			this.Ec = a.Dy;
			this.ra = a.Cy;
			this.zj = !1
		},
		Ab: function() {},
		handle: function()
		{
			this.D.handle();
			this.b.L && (this.b.L = !1)
		},
		$f: function()
		{
			var a = this.M.Za;
			if (5 == this.type)
			{
				var b = rsFont; - 1 == b && (b = a.Ii);
				return this.c.h.Gb.kq(b)
			}
			return null
		},
		vk: function(a, b)
		{
			5 == this.type && (this.sc = this.c.h.Gb.Hp(a), this.font = this.c.h.Gb.pf(this.sc), this.td = this.font.Fe(), null != b && (this.K = this.Yc = b.right - b.left, this.J = this.Zc = b.bottom - b.top), this.Va())
		},
		jq: function()
		{
			return this.qc
		},
		Rr: function(a)
		{
			this.qc = a;
			this.Va()
		},
		zy: function(a)
		{
			0 != this.zj || n.Au(a) || (this.zj = !0)
		},
		Tp: function(a)
		{
			0 == this.zj ? (a = n.pe(a), a < this.ab && (a = this.ab), a > this.Ec && (a = this.Ec), a != Math.round(this.ra) && (this.ra = a, this.b.L = !0, this.Va())) : (a < this.ab && (a = this.ab), a > this.Ec && (a = this.Ec), a != this.ra && (this.ra = a, this.b.L = !0, this.Va()))
		},
		ON: function(a)
		{
			this.zy(a);
			this.Tp(this.ra + a)
		},
		YN: function(a)
		{
			this.zy(a);
			this.Tp(this.ra - a)
		},
		XN: function(a)
		{
			this.ab = a;
			this.Tp(this.ra)
		},
		WN: function(a)
		{
			this.Ec = a;
			this.Tp(this.ra)
		},
		UN: function(a)
		{
			this.qc = a;
			this.Va()
		},
		VN: function(a)
		{
			this.ro = a;
			this.Va()
		},
		TN: function()
		{
			return this.ra
		},
		SN: function()
		{
			return this.ab
		},
		RN: function()
		{
			return this.Ec
		},
		PN: function()
		{
			return this.qc
		},
		QN: function()
		{
			return this.ro
		},
		Wk: function(a, b, c, d, e, f)
		{
			null != this.M.Za && 1 != this.Ga && (this.Ga = !0, this.$x = d, this.na = e, this.qa = this.c.A.fb[c], this.ha = this.$x ? this.qa.Cb : this.qa.Ha, 0 > f ? this.ha.Vd(this) : this.ha.Fp(this, f), 5 != this.type && this.Va())
		},
		ti: function()
		{
			if (null == this.M.Za || 0 == this.Ga) return -1;
			this.Ga = !1;
			var a = this.ha.Sc(this);
			this.ha.removeChild(this);
			return a
		},
		Sc: function()
		{
			return this.Ga ? this.ha.Sc(this) : -1
		},
		ml: function()
		{
			return this.Ga ? this.ha.children.length : -1
		},
		le: function(a)
		{
			this.Ga && this.ha.le(this, a)
		},
		wk: function()
		{
			null != this.M.Za && 0 == this.na && (this.na = !0, this.Va())
		},
		Nj: function()
		{
			null != this.M.Za && 1 == this.na && (this.na = !1)
		},
		hh: function()
		{
			this.Gd || this.Va()
		},
		Va: function()
		{
			var a, b = this.M.Za;
			switch (this.type)
			{
				case 4:
					this.Bg = this.Ec <= this.ab ? 0 : Math.floor((this.ra - this.ab) * b.wl / (this.Ec - this.ab));
					this.Bg = Math.min(this.Bg, b.wl - 1);
					a = this.c.h.ca.Mb(b.frames[Math.max(this.Bg,
						0)]);
					this.K = a.width;
					this.J = a.height;
					this.fa = a.ya;
					this.ga = a.xa;
					break;
				case 2:
				case 3:
					a = this.Yc;
					b.Me == ha.uD && (a = this.Zc);
					this.Bg = this.Ec <= this.ab ? 0 : (this.ra - this.ab) * a / (this.Ec - this.ab);
					b.Me == ha.tD ? (this.ga = 0, this.J = this.Zc, this.K = this.Bg, this.fa = 0 != (b.Xj & ha.ps) ? this.Bg - this.Yc : 0) : (this.fa = 0, this.K = this.Yc, this.J = this.Bg, this.ga = 0 != (b.Xj & ha.ps) ? this.Bg - this.Zc : 0);
					break;
				case 1:
					a = 0 == this.zj ? n.wi(this.ra, this.qd) : n.Ut(this.ra, this.qd);
					var c, d, e, f = 0,
						g = 0;
					for (c = a.length - 1; 0 <= c; c--) d = a.charCodeAt(c), e = 0, 45 ==
						d ? e = b.frames[10] : 46 == d ? e = b.frames[12] : 43 == d ? e = b.frames[11] : 101 == d || 69 == d ? e = b.frames[13] : 48 <= d && 57 >= d && (e = b.frames[d - 48]), 0 <= e && (d = this.c.h.ca.Mb(e), null != d ? (f += d.width, g = Math.max(g, d.height)) : toto = 2);
					this.fa = f;
					this.ga = g;
					this.K = f;
					this.J = g;
					break;
				case 5:
					a = 0 == this.zj ? n.wi(this.ra, this.qd) : n.Ut(this.ra, this.qd), this.fa = b = null != this.cb ? this.cb.measureText(a, this.font) : (new ia(this.c.h, 16, 16)).measureText(a, this.font), this.ga = this.Zc / 2 + this.td / 2, this.K = b, this.J = this.td, null == this.cb ? this.cb = new ia(this.c.h,
						this.K, this.J) : (this.K > this.cb.width || this.J > this.cb.height) && this.cb.resize(this.K, this.J), this.cb.Vr(a, n.Oo | n.Po, new Y(0, 0, 1E3, 1E3), this.font, this.qc)
			}
			this.Gd = !0
		},
		rb: function(a, b, c)
		{
			if (this.na && this.Gd)
			{
				var d, e, f;
				d = this.M.Za;
				b = b + this.v - this.fa - this.c.ea + this.qa.x;
				c = c + this.u - this.ga - this.c.ia + this.qa.y;
				var g = this.K,
					m = this.J;
				switch (this.type)
				{
					case 4:
						d = this.c.h.ca.Mb(d.frames[Math.max(this.Bg, 0)]);
						a.Pe(d, b + d.ya, c + d.xa, 0, 1, 1, this.D.Dc, this.D.rc);
						break;
					case 2:
					case 3:
						e = this.qc;
						f = this.ro;
						switch (d.Gi)
						{
							case 1:
								a.oc(b,
									c, g, m, e, this.D.Dc, this.D.rc);
								break;
							case 2:
								0 != (d.Xj & ha.ps) && (dl = e, e = f, f = dl), a.Zv(b, c, g, m, e, f, 0 != d.Nn, this.D.Dc, this.D.rc)
						}
						break;
					case 1:
						e = 0 == this.zj ? n.wi(this.ra, this.qd) : n.Ut(this.ra, this.qd);
						for (f = 0; f < e.length; f++) m = e.charCodeAt(f), g = 0, 45 == m ? g = d.frames[10] : 46 == m || 44 == m ? g = d.frames[12] : 43 == m ? g = d.frames[11] : 69 == m || 101 == m ? g = d.frames[13] : 48 <= m && 57 >= m && (g = d.frames[m - 48]), g = this.c.h.ca.Mb(g), null != g && (a.Pe(g, b + g.ya, c + g.xa, 0, 1, 1, this.D.Dc, this.D.rc), b += g.width);
						break;
					case 5:
						this.cb.rb(a, b, c, this.D.Dc, this.D.rc)
				}
			}
		},
		fm: function(a)
		{
			this.D.Dc = w.Xe;
			this.D.rc = a
		}
	});
	Jc.prototype = n.extend(new F,
	{
		X: function()
		{
			this.sc = -1;
			this.qc = 0;
			var a = this.M.Za;
			this.K = this.Yc = a.Ah;
			this.J = this.Zc = a.Bh;
			this.type = a.Me;
			this.qc = a.mg;
			this.Sh = a.nv;
			this.ra = this.c.h.cn()[this.Sh - 1];
			this.qd = a.Xj;
			if (5 == this.type)
			{
				var b = this.sc; - 1 == b && (b = a.Ii);
				this.font = this.c.h.Gb.pf(b);
				this.td = this.font.Fe()
			}
		},
		Ab: function() {},
		handle: function()
		{
			var a = this.c.h.cn()[this.Sh - 1];
			a != this.ra && (this.ra = a, this.Va());
			this.D.handle();
			this.b.L && (this.b.L = !1)
		},
		$f: function()
		{
			var a =
				this.M.Za;
			if (5 == a.Me)
			{
				var b = this.sc; - 1 == b && (b = a.Ii);
				return this.c.h.Gb.kq(b)
			}
			return null
		},
		vk: function(a, b)
		{
			5 == type && (this.sc = hoAdRunHeader.h.Gb.Hp(a), a = this.c.h.Gb.pf(this.sc), this.td = a.Fe(), null != b && (this.K = this.Yc = b.right - b.left, this.J = this.Zc = b.bottom - b.top), this.Va())
		},
		jq: function()
		{
			return this.qc
		},
		Rr: function(a)
		{
			this.qc = a;
			this.Va()
		},
		Wk: function(a, b, c, d, e, f)
		{
			null != this.M.Za && 1 != this.Ga && (this.Ga = !0, this.na = e, this.qa = this.c.A.fb[c], this.ha = d ? this.qa.Cb : this.qa.Ha, 0 > f ? this.ha.Vd(this) : this.ha.Fp(this,
				f), 5 != this.type && this.Va())
		},
		ti: function()
		{
			if (null == this.M.Za || 0 == this.Ga) return -1;
			this.Ga = !1;
			var a = this.ha.Sc(this);
			this.ha.removeChild(this);
			return a
		},
		Sc: function()
		{
			return this.Ga ? this.ha.Sc(this) : -1
		},
		ml: function()
		{
			return this.Ga ? this.ha.children.length : -1
		},
		le: function(a)
		{
			this.Ga && this.ha.le(this, a)
		},
		wk: function()
		{
			null != this.M.Za && 0 == this.na && (this.na = !0, this.Va())
		},
		Nj: function()
		{
			null != this.M.Za && 1 == this.na && (this.na = !1)
		},
		Xr: function(a)
		{
			a != this.ra && (this.ra = a, this.Va())
		},
		hh: function()
		{
			this.Gd ||
				this.Va()
		},
		Va: function()
		{
			this.Gd = !0;
			this.K = this.J = 1;
			if (null != this.M.Za)
			{
				var a = this.M.Za,
					b, c = n.wi(this.ra, this.qd);
				switch (a.Me)
				{
					case 1:
						var d, e, f = 0,
							g = 0;
						for (d = c.length - 1; 0 <= d; d--) e = c.charCodeAt(d), b = 0, 45 == e ? b = a.frames[10] : 46 == e ? b = a.frames[12] : 43 == e ? b = a.frames[11] : 101 == e || 69 == e ? b = a.frames[13] : 48 <= e && 57 >= e && (b = a.frames[e - 48]), 0 <= b && (b = this.c.h.ca.Mb(b), f += b.width, g = Math.max(g, b.height));
						this.fa = f;
						this.ga = g;
						this.K = f;
						this.J = g;
						break;
					case 5:
						this.fa = a = null != this.cb ? this.cb.measureText(c, this.font) : (new ia(this.c.h,
							8, 8)).measureText(c, this.font), this.ga = this.Zc / 2 + this.td / 2, this.K = a, this.J = this.td, null == this.cb ? this.cb = new ia(this.c.h, this.K, this.J) : (this.K > this.cb.width || this.J > this.cb.height) && this.cb.resize(this.K, this.J), this.cb.Vr(c, n.Oo | n.Po, new Y(0, 0, 1E3, 1E3), this.font, this.qc)
				}
			}
		},
		rb: function(a, b, c)
		{
			if (this.na && this.Gd)
			{
				this.globalAlpha = this.alpha;
				this.globalCompositeOperation = this.Cj;
				var d = this.M.Za;
				b = b + this.v - this.fa - this.c.ea + this.qa.x;
				var e = c + this.u - this.ga - this.c.ia + this.qa.y;
				c = n.wi(this.ra, this.qd);
				switch (this.type)
				{
					case 1:
						var f, g;
						for (f = 0; f < c.length; f++)
						{
							var m = c.charCodeAt(f);
							g = 0;
							45 == m ? g = d.frames[10] : 46 == m || 44 == m ? g = d.frames[12] : 43 == m ? g = d.frames[11] : 69 == m || 101 == m ? g = d.frames[13] : 48 <= m && 57 >= m && (g = d.frames[m - 48]);
							g = this.c.h.ca.Mb(g);
							a.Pe(g, b + g.ya, e + g.xa, 0, 1, 1, this.D.Dc, this.D.rc);
							b += g.width
						}
						break;
					case 5:
						this.cb.rb(a, b, e, this.D.Dc, this.D.rc)
				}
			}
		},
		fm: function(a)
		{
			this.D.Dc = w.Xe;
			this.D.rc = a
		}
	});
	Kc.prototype = n.extend(new F,
	{
		X: function()
		{
			this.sc = -1;
			this.qc = 0;
			var a = this.M.Za;
			this.K = this.Yc = a.Ah;
			this.J = this.Zc =
				a.Bh;
			this.type = a.Me;
			this.qc = a.mg;
			this.Sh = a.nv;
			this.ra = this.c.h.Lj()[this.Sh - 1];
			this.qd = a.Xj;
			if (5 == this.type)
			{
				var b = this.sc; - 1 == b && (b = a.Ii);
				this.font = this.c.h.Gb.pf(b);
				this.td = this.font.Fe()
			}
		},
		Ab: function() {},
		handle: function()
		{
			var a = this.c.h.Lj()[this.Sh - 1];
			a != this.ra && (this.ra = a, this.Va());
			this.D.handle();
			this.b.L && (this.b.L = !1)
		},
		$f: function()
		{
			var a = this.M.Za;
			if (5 == a.Me)
			{
				var b = this.sc; - 1 == b && (b = a.Ii);
				return this.c.h.Gb.kq(b)
			}
			return null
		},
		vk: function(a, b)
		{
			5 == type && (this.sc = hoAdRunHeader.h.Gb.Hp(a),
				a = this.c.h.Gb.pf(this.sc), this.td = a.Fe(), null != b && (this.K = this.Yc = b.right - b.left, this.J = this.Zc = b.bottom - b.top), this.Va())
		},
		jq: function()
		{
			return this.qc
		},
		Rr: function(a)
		{
			this.qc = a;
			this.Va()
		},
		Wk: function(a, b, c, d, e, f)
		{
			null != this.M.Za && 1 != this.Ga && (this.Ga = !0, this.na = e, this.qa = this.c.A.fb[c], this.ha = d ? this.qa.Cb : this.qa.Ha, 0 > f ? this.ha.Vd(this) : this.ha.Fp(this, f), 5 != this.type && this.Va())
		},
		ti: function()
		{
			if (null == this.M.Za || 0 == this.Ga) return -1;
			this.Ga = !1;
			var a = this.ha.Sc(this);
			this.ha.removeChild(this);
			return a
		},
		Sc: function()
		{
			return this.Ga ? this.ha.Sc(this) : -1
		},
		ml: function()
		{
			return this.Ga ? this.ha.children.length : -1
		},
		le: function(a)
		{
			this.Ga && this.ha.le(this, a)
		},
		wk: function()
		{
			null != this.M.Za && 0 == this.na && (this.na = !0, this.Va())
		},
		Nj: function()
		{
			null != this.M.Za && 1 == this.na && (this.na = !1)
		},
		Xr: function(a)
		{
			a != this.ra && (this.ra = a, this.Va())
		},
		hh: function()
		{
			this.Gd || this.Va()
		},
		Va: function()
		{
			this.Gd = !0;
			this.K = this.J = 1;
			if (null != this.M.Za)
			{
				var a = this.M.Za;
				switch (a.Me)
				{
					case 4:
						if (0 != this.ra)
						{
							var b = this.c.h.ca.Mb(a.frames[0]),
								c = this.ra * b.width;
							c <= this.Yc ? (this.K = c, this.J = b.height) : (this.K = this.Yc, this.J = (this.Yc / b.width + this.ra - 1) * b.height);
							break
						}
						this.K = this.J = 1;
						break;
					case 1:
						var d, e, b, f = 0,
							g = 0,
							c = n.wi(this.ra, this.qd);
						for (d = c.length - 1; 0 <= d; d--) b = c.charCodeAt(d), e = 0, 45 == b ? e = a.frames[10] : 46 == b ? e = a.frames[12] : 43 == b ? e = a.frames[11] : 101 == b || 69 == b ? e = a.frames[13] : 48 <= b && 57 >= b && (e = a.frames[b - 48]), 0 <= e && (b = this.c.h.ca.Mb(e), f += b.width, g = Math.max(g, b.height));
						this.fa = f;
						this.ga = g;
						this.K = f;
						this.J = g;
						break;
					case 5:
						c = n.wi(this.ra, this.qd),
							this.fa = a = null != this.cb ? this.cb.measureText(c, this.font) : (new ia(this.c.h, 8, 8)).measureText(c, this.font), this.ga = this.Zc / 2 + this.td / 2, this.K = a, this.J = this.td, null == this.cb ? this.cb = new ia(this.c.h, this.K, this.J) : (this.K > this.cb.width || this.J > this.cb.height) && this.cb.resize(this.K, this.J), this.cb.Vr(c, n.Oo | n.Po, new Y(0, 0, 1E3, 1E3), this.font, this.qc)
				}
			}
		},
		rb: function(a, b, c)
		{
			if (this.na && this.Gd)
			{
				this.globalAlpha = this.alpha;
				this.globalCompositeOperation = this.Cj;
				var d, e = this.M.Za;
				b = b + this.v - this.fa - this.c.ea +
					this.qa.x;
				c = c + this.u - this.ga - this.c.ia + this.qa.y;
				switch (this.type)
				{
					case 1:
						var f, g;
						d = n.wi(this.ra, this.qd);
						for (f = 0; f < d.length; f++)
						{
							var m = d.charCodeAt(f);
							g = 0;
							45 == m ? g = e.frames[10] : 46 == m || 44 == m ? g = e.frames[12] : 43 == m ? g = e.frames[11] : 69 == m || 101 == m ? g = e.frames[13] : 48 <= m && 57 >= m && (g = e.frames[m - 48]);
							g = this.c.h.ca.Mb(g);
							a.Pe(g, b + g.ya, c + g.xa, 0, 1, 1, this.D.Dc, this.D.rc);
							b += g.width
						}
						break;
					case 4:
						if (0 != this.ra)
						{
							d = b + this.K;
							f = c + this.J;
							var m = b,
								q = this.ra;
							for (g = this.c.h.ca.Mb(e.frames[0]); c < f && 0 < q; c += g.height)
								for (b = m; b < d &&
									0 < q; b += g.width, --q) a.Pe(g, b + g.ya, c + g.xa, 0, 1, 1, this.D.Dc, this.D.rc)
						}
						break;
					case 5:
						this.cb.rb(a, b, c, this.D.Dc, this.D.rc)
				}
			}
		},
		fm: function(a)
		{
			this.D.Dc = w.Xe;
			this.D.rc = a
		}
	});
	Lc.prototype = n.extend(new F,
	{
		X: function(a, b)
		{
			var c = a.Mc;
			this.K = c.Bv;
			this.J = c.Cv;
			this.Yc = c.Bv;
			this.Zc = c.Cv;
			this.Ec = c.Zj;
			this.to = 0;
			0 < c.Ib.length && (this.to = c.Ib[0].Cw);
			this.dm = null;
			this.sc = -1;
			this.ab = 0;
			this.na = !0;
			this.UB = b.Km;
			0 != (b.Km & h.ss) && 0 < c.Ib.length && (this.dm = c.Ib[0].Uh);
			var d = this.sc; - 1 == d && 0 < c.Ib.length && (d = c.Ib[0].im);
			this.font =
				this.c.h.Gb.pf(d);
			this.cb = new ia(this.c.h, this.K, this.J)
		},
		Ab: function() {},
		handle: function()
		{
			this.D.handle();
			this.b.L && (this.b.L = !1)
		},
		$f: function()
		{
			var a = this.sc; - 1 == a && (a = this.M.Mc.Ib[0].im);
			return this.c.h.Gb.kq(a)
		},
		vk: function(a, b)
		{
			this.sc = this.c.h.Gb.Hp(a);
			this.font = this.c.h.Gb.pf(this.sc);
			null != b && (this.K = b.right - b.left, this.J = b.bottom - b.top, this.cb.resize(this.K, this.J));
			this.b.L = !0;
			this.Va()
		},
		jq: function()
		{
			return this.to
		},
		Rr: function(a)
		{
			this.to = a;
			this.Va()
		},
		Wk: function(a, b, c, d, e, f)
		{
			1 != this.Ga &&
				(this.Ga = !0, this.na = e, this.qa = this.c.A.fb[c], this.ha = d ? this.qa.Cb : this.qa.Ha, 0 > f ? this.ha.Vd(this) : this.ha.Fp(this, f))
		},
		ti: function()
		{
			if (0 == this.Ga) return -1;
			this.Ga = !1;
			var a = this.ha.Sc(this);
			this.ha.removeChild(this);
			return a
		},
		Sc: function()
		{
			return this.Ga ? this.ha.Sc(this) : -1
		},
		ml: function()
		{
			return this.Ga ? this.ha.children.length : -1
		},
		le: function(a)
		{
			this.Ga && this.ha.le(this, a)
		},
		wk: function()
		{
			0 == this.na && (this.na = !0)
		},
		Nj: function()
		{
			1 == this.na && (this.na = !1)
		},
		DC: function(a)
		{
			-1 > a && (a = -1);
			a >= this.Ec && (a = this.Ec -
				1);
			if (a == this.ab) return !1;
			this.ab = a;
			0 <= a && this.cJ(this.M.Mc.Ib[this.ab].Uh);
			this.Va();
			return 0 != (this.D.V & w.gi) ? !1 : !0
		},
		cJ: function(a)
		{
			this.dm = a;
			this.Va()
		},
		hh: function()
		{
			this.Gd || this.Va()
		},
		Va: function()
		{
			this.Gd = !0;
			var a = this.M.Mc,
				b = a.Ib[0].Co;
			this.ga = this.fa = 0;
			this.rect.left = 0;
			this.rect.top = 0;
			this.rect.right = this.K;
			this.rect.bottom = this.J;
			0 <= this.ab ? a = a.Ib[this.ab].Uh : (a = this.dm, null == a && (a = ""));
			b &= n.Oo | n.lj | n.us | n.Po | n.No | n.Yh | n.zD;
			a = this.cb.Vr(a, b, this.rect, this.font, this.to);
			0 == (b & (n.No | n.Yh)) &&
				(this.J = a)
		},
		fm: function(a)
		{
			this.D.Dc = w.Xe;
			this.D.rc = a
		},
		rb: function(a, b, c)
		{
			this.na && this.Gd && this.cb.rb(a, b + this.v - this.c.ea + this.qa.x, c + this.u - this.c.ia + this.qa.y, this.D.Dc, this.D.rc)
		}
	});
	Mc.prototype = n.extend(new F,
	{
		X: function() {},
		Ab: function() {},
		handle: function()
		{
			this.c.pause();
			this.c.pr = this;
			this.c.A.fb[this.c.A.yc - 1].Ha.Vd(this);
			this.DF()
		},
		$p: function()
		{
			this.c.A.fb[this.c.A.yc - 1].Ha.removeChild(this)
		},
		DG: function()
		{
			var a;
			a = this.c.h.vf - this.c.h.Hf;
			var b = this.c.h.wf - this.c.h.If;
			0 == this.Dj ? this.c.h.Uc[l.af] &&
				(a = this.Az(a, b), 0 != a && (this.Dj = a)) : this.c.h.Uc[l.af] || (this.Az(a, b) == this.Dj ? (this.c.j.Bc = this.Dj, this.c.j.ed(this, -5439484), 0 != (this.M.Mc.Ib[this.Dj].Co & ma.bF) ? this.c.j.ed(this, -5308412) : this.c.j.ed(this, -5373948), this.$p(), this.c.pr = null, this.c.resume(), this.c.gq(this.yb, !0)) : this.Dj = 0)
		},
		Az: function(a, b)
		{
			var c;
			if (null != this.Bd)
				for (c = 1; c < this.Bd.length; c++)
					if (a >= this.Bd[c].left && a < this.Bd[c].right && b > this.Bd[c].top && b < this.Bd[c].bottom) return c;
			return 0
		},
		gy: function(a, b, c)
		{
			var d, e;
			c ? (d = 8421504, e =
				16777215) : (e = 8421504, d = 16777215);
			a.xr(b.left, b.top, b.right - b.left, b.bottom - b.top, 0, 1);
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
			a.ld(f[0].x, f[0].y, f[1].x, f[1].y, d, 1);
			a.ld(f[1].x, f[1].y, f[2].x, f[2].y, d, 1);
			0 == c && --f[0].x;
			f[0].y += 1;
			f[1].x += 1;
			f[1].y += 1;
			f[2].x += 1;
			0 == c && --f[2].y;
			a.ld(f[0].x, f[0].y, f[1].x, f[1].y, d, 1);
			a.ld(f[1].x, f[1].y, f[2].x, f[2].y, d, 1);
			0 == c && (f[0].x += 2, f[1].x =
				b.right - 1, f[1].y = b.bottom - 1, f[2].y = b.bottom - 1, --f[2].x, a.ld(f[0].x, f[0].y, f[1].x, f[1].y, e, 1), a.ld(f[1].x, f[1].y, f[2].x, f[2].y, e, 1), --f[0].x, f[0].y += 1, --f[1].x, --f[1].y, f[2].x += 1, --f[2].y, a.ld(f[0].x, f[0].y, f[1].x, f[1].y, e, 1), a.ld(f[1].x, f[1].y, f[2].x, f[2].y, e, 1))
		},
		qI: function(a, b, c)
		{
			var d = new Y;
			d.yy(this.Bd[b]);
			this.gy(a, this.Bd[b], c);
			d.left += 2;
			d.top += 2;
			d.right -= 4;
			d.bottom -= 4;
			c && (d.left += 2, d.top += 2);
			this.Hg[b].rb(a, (d.left + d.right) / 2 - this.Hg[b].width / 2, (d.top + d.bottom) / 2 - this.Hg[b].height / 2, 0, 0)
		},
		DF: function()
		{
			this.Qq = new ia(this.c.h, 8, 8);
			var a = this.M.Mc,
				b = this.c,
				c = a.Ib[1],
				d = c.Cw,
				e = 0 != (c.Co & ma.Ox),
				f = b.h.Gb.pf(c.im);
			this.ks = Math.floor(3 * this.Qq.measureText("X", f) / 2);
			this.vi = 4;
			this.vd = 64;
			var g;
			for (g = 1; g < a.Ib.length; g++) c = a.Ib[g], 0 < c.Uh.length && (c = this.Qq.measureText(c.Uh, f), this.vd = Math.max(this.vd, c + 2 * this.ks + 4), this.vi = Math.max(this.vi, Math.floor(3 * f.Fe() / 2)));
			this.sq = Math.max(Math.floor(this.vi / 4), 2);
			this.vd += 2 * this.ks + 4;
			var m = new Y;
			for (g = 1; g < a.Ib.length; g++) c = a.Ib[g], this.Hg[g] = new ia(b.h,
				this.vd, this.vi), m.right = this.vd, m.bottom = this.vi, this.Hg[g].Pq(c.Uh, n.lj | n.Yh, m, d, f, e ? 1 : 0, 16777215);
			a = a.Ib[0];
			e = 0 != (a.Co & ma.Ox);
			f = b.h.Gb.pf(a.im);
			g = Math.floor(3 * this.Qq.measureText("X", f) / 2);
			c = this.Qq.measureText(a.Uh, f);
			this.mn = Math.floor(3 * f.Fe() / 2);
			this.vd = Math.max(this.vd, c + 2 * g + 4);
			this.vd > b.h.ja ? this.vd = b.h.ja : this.vd > b.A.fd && (this.vd = b.A.fd);
			m.right = this.vd;
			m.bottom = this.mn;
			this.Hg[0] = new ia(b.h, this.vd, this.mn);
			this.Hg[0].Pq(a.Uh, n.lj | n.Yh, m, d, f, e ? 1 : 0, 16777215)
		},
		rb: function(a)
		{
			var b = this.M.Mc,
				c = this.c,
				d = this.v - c.ea,
				c = this.u - c.ia,
				e = new Y;
			e.left = d;
			e.top = c;
			var f = this.mn + 1 + (this.vi + this.sq) * (b.Ib.length - 1) + this.sq + 4;
			e.right = d + this.vd;
			e.bottom = c + f;
			a.oc(e.left, e.top, e.right - e.left, e.bottom - e.top, 12632256, 0, 0);
			this.gy(a, e, !1);
			e.left += 2;
			e.top += 2;
			e.right -= 2;
			e.bottom = e.top + this.mn;
			this.Hg[0].rb(a, (e.left + e.right) / 2 - this.Hg[0].width / 2, (e.top + e.bottom) / 2 - this.Hg[0].height / 2, 0, 0);
			e.top = e.bottom;
			a.ld(e.left, e.top, e.right, e.bottom, 8421504, 1, 0, 0);
			e.top += 1;
			e.bottom += 1;
			a.ld(e.left, e.top, e.right, e.bottom,
				16777215, 1, 0, 0);
			if (null == this.Bd)
				for (this.Bd = Array(b.Ib.length), i = 1; i < b.Ib.length; i++) this.Bd[i] = new Y, this.Bd[i].left = d + 2 + this.ks, this.Bd[i].right = d + this.vd - 2 - this.ks, this.Bd[i].top = c + 2 + this.mn + 1 + this.sq + (this.vi + this.sq) * (i - 1), this.Bd[i].bottom = this.Bd[i].top + this.vi;
			for (i = 1; i < b.Ib.length; i++) this.qI(a, i, this.Dj == i)
		}
	});
	Nc.prototype = n.extend(new F,
	{
		X: function(a)
		{
			this.ext.X(this);
			this.c.h.file.Wf(a.ZA);
			this.Kv = a.aB
		},
		pt: function(a, b, c, d, e)
		{
			this.qa = this.c.A.fb[d];
			this.na = e;
			1 != this.Ga && (this.Ga = !0, this.ha =
				this.qa.Ha, this.ha.Vd(this))
		},
		Wk: function(a, b, c, d, e)
		{
			this.qa = this.c.A.fb[c];
			this.na = e;
			1 != this.Ga && (this.Ga = !0, this.ha = d ? this.qa.Cb : this.qa.Ha, this.ha.Vd(this))
		},
		ti: function()
		{
			if (0 == this.Ga) return -1;
			this.Ga = !1;
			var a = this.ha.Sc(this);
			this.ha.removeChild(this);
			return a
		},
		handle: function()
		{
			0 != (this.ka & 512) ? this.D.handle() : 16 == (this.ka & 48) || 48 == (this.ka & 48) ? this.w.move() : 32 == (this.ka & 48) && this.U.Ce();
			var a = 0;
			0 == this.jv && (a = this.ext.Kz());
			0 != (a & Ia.Kx) && (this.jv = !0);
			null != this.b && this.b.L && (this.b.L = !1)
		},
		mi: function()
		{
			this.ext.mi()
		},
		Ay: function() {},
		rb: function() {},
		Ab: function(a)
		{
			this.ext.Py(a)
		},
		lG: function()
		{
			return null
		},
		Rp: function(a, b)
		{
			return this.ext.Rp(a, b)
		},
		action: function(a, b)
		{
			this.ext.action(a, b)
		},
		$t: function(a)
		{
			return this.ext.$t(a)
		},
		fm: function(a)
		{
			this.D.Dc = w.Xe;
			this.D.rc = a
		},
		dP: function() {},
		wk: function()
		{
			this.na = !0
		},
		Nj: function()
		{
			this.na = !1
		},
		Sc: function()
		{
			return this.ha.Sc(this)
		},
		ml: function()
		{
			return this.ha.children.length
		},
		le: function(a)
		{
			a >= this.ha.children.length && (a = this.ha.children.length);
			0 > a && (a = 0);
			this.ha.le(this, a)
		},
		QH: function() {},
		GF: function() {},
		kl: function()
		{
			this.ext.kl()
		},
		Xz: function(a)
		{
			this.c.h.ca.Xz(a)
		},
		wO: function(a)
		{
			return this.c.h.ca.Mb(a)
		},
		lO: function()
		{
			return this.c.h
		},
		CO: function()
		{
			return this.v
		},
		DO: function()
		{
			return this.u
		},
		BO: function()
		{
			return this.K
		},
		Fe: function()
		{
			return this.J
		},
		gC: function(a)
		{
			null != this.w ? this.w.$.ac(a) : (this.v = a, null != this.b && (this.b.L = !0, this.b.La = !0))
		},
		jC: function(a)
		{
			null != this.w ? this.w.$.bc(a) : (this.u = a, null != this.b && (this.b.L = !0, this.b.La = !0))
		},
		rw: function(a)
		{
			this.K = a
		},
		qw: function(a)
		{
			this.J = a
		},
		wo: function(a, b)
		{
			this.K = a;
			this.J = b
		},
		UO: function()
		{
			this.jv = !1
		},
		kO: function(a, b)
		{
			if (0 == this.c.Df)
			{
				var c = this.c.j.Bc;
				this.c.j.Bc = b;
				a = -(a + N.Zh + 1) << 16;
				a |= this.wa & 65535;
				this.c.j.ed(this, a);
				this.c.j.Bc = c
			}
		},
		PO: function(a, b)
		{
			0 == this.c.Df && (a = -(a + N.Zh + 1) << 16, a |= this.wa & 65535, this.c.j.uB(1, a, b, this, this.zb))
		},
		pause: function()
		{
			this.c.pause()
		},
		resume: function()
		{
			this.c.resume()
		},
		VO: function() {},
		ZN: function()
		{
			this.c.kf(this.yb)
		},
		setPosition: function(a, b)
		{
			null != this.w ?
				(this.w.$.ac(a), this.w.$.bc(b)) : (this.v = a, this.u = b, null != this.b && (this.b.L = !0, this.b.La = !0))
		},
		qO: function()
		{
			return this.Kv
		},
		cP: function(a)
		{
			this.Kv = a
		},
		Ep: function(a, b, c, d, e)
		{
			this.c.Ep(a, b, c, e, d, !0)
		},
		nO: function()
		{
			return this.c.gw
		},
		pO: function()
		{
			this.c.Ef++;
			return this.c.getExpression()
		},
		oO: function()
		{
			return this.c.j.Bc
		},
		hy: function(a, b, c)
		{
			return 0 != (a.ka & z.ah) && a.b.Oc == O.qj ? a.w.$.hy(b, c) : 0
		},
		rO: function()
		{
			this.kv = this.Ln = 0;
			return this.uG()
		},
		uG: function()
		{
			if (this.kv < this.c.hb)
			{
				for (; null == this.c.F[this.Ln];) this.Ln++;
				var a = this.c.F[this.Ln];
				this.kv++;
				this.Ln++;
				return a
			}
			return null
		},
		yO: function(a)
		{
			var b = 0,
				c;
			for (c = 0; c < this.c.hb; c++)
			{
				for (; null == this.c.F[b];) b++;
				var d = this.c.F[b];
				b++;
				if ((d.kn << 16 | d.yb & 65535) == a) return d
			}
			return null
		},
		iz: function(a)
		{
			return this.c.iz(a)
		},
		jz: function(a)
		{
			return this.c.jz(a)
		},
		MH: function(a)
		{
			return hoAdRunHeader.h.MH(a)
		},
		MN: function() {}
	});
	Sa.HM = 22;
	Sa.create = function(a)
	{
		var b = a.file.da,
			c = null,
			d = a.file.o(),
			e = a.file.o();
		switch (e)
		{
			case 1:
				c = new fe(a);
				break;
			case 2:
				c = new ge(a);
				break;
			case 3:
				c = new da(a);
				break;
			case 4:
				c = new da(a);
				break;
			case 5:
				c = new Ha(a);
				break;
			case 6:
				c = new La(a);
				break;
			case 9:
				c = new gb(a);
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
				c = new ce(a);
				break;
			case 14:
				c = new Pc(a);
				break;
			case 15:
				c = new na(a);
				break;
			case 16:
				c = new Qc(a);
				break;
			case 17:
				c = new da(a);
				break;
			case 18:
				c = new Rc(a);
				break;
			case 19:
				c = new he(a);
				break;
			case 21:
				c = new gb(a);
				break;
			case 22:
				c = new na(a);
				break;
			case 23:
				c = new na(a);
				break;
			case 24:
				c = new be(a);
				break;
			case 25:
				c = new Ha(a);
				break;
			case 26:
				c =
					new da(a);
				break;
			case 27:
				c = new na(a);
				break;
			case 28:
				c = new na(a);
				break;
			case 29:
				c = new Ha(a);
				break;
			case 31:
				c = new da(a);
				break;
			case 32:
				c = new da(a);
				break;
			case 34:
				c = new Ha(a);
				break;
			case 35:
				c = new La(a);
				break;
			case 36:
				c = new La(a);
				break;
			case 37:
				c = new da(a);
				break;
			case 38:
				c = new ja(a);
				break;
			case 39:
				c = new ee(a);
				break;
			case 40:
				c = new Ta(a);
				break;
			case 41:
				c = new Ta(a);
				break;
			case 42:
				c = new ae(a);
				break;
			case 43:
				c = new da(a);
				break;
			case 44:
				c = new Pc(a);
				break;
			case 45:
				c = new na(a);
				break;
			case 46:
				c = new na(a);
				break;
			case 47:
				c = new Oc(a);
				break;
			case 48:
				c = new Ha(a);
				break;
			case 49:
				c = new da(a);
				break;
			case 50:
				c = new da(a);
				break;
			case 51:
				c = new Oc(a);
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
				c = new de(a);
				break;
			case 56:
				c = new Ha(a);
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
				c = new Ta(a);
				break;
			case 64:
				c = new Ta(a);
				break;
			case 67:
				c = new da(a)
		}
		c.code = e;
		a.file.seek(b + d);
		return c
	};
	ja.XD = 1;
	ja.kL = 2;
	ja.Is = 4;
	ja.Hs = 8;
	ja.lL = 16;
	ka.kD = 1;
	ka.jD = 2;
	ka.lD = 4;
	ka.Ww = 8;
	ka.prototype = {
		Ml: function(a, b, c)
		{
			c.rn = -1;
			if (-1 == this.Un)
			{
				0 != b && (c.dir = -1, 0 == (this.ck & ka.Ww) && (c.dir = a.Gz(this.fr)));
				c.x = this.ir;
				c.y = this.jr;
				var d = this.Hv;
				d > a.A.yc - 1 && (d = a.A.yc - 1);
				c.rn = d;
				c.vt = !1
			}
			else
			{
				a.j.fo = !1;
				d = a.j.nu(this.Vn);
				c.vt = a.j.zc;
				if (null == d) return !1;
				c.x = d.v;
				c.y = d.u;
				c.rn = d.ud;
				if (0 != (this.ck & ka.jD) && 0 != (d.ka & z.ei) && 0 <= d.b.Ia)
				{
					var e;
					e = d.b.$a;
					null != a.To(d) && (e = 0);
					e = a.h.ca.Kj(d.b.Ia, e, d.b.ub, d.b.vb);
					c.x += e.Ng - e.ya;
					c.y += e.Og -
						e.xa
				}
				if (0 != (this.ck & ka.kD))
				{
					e = this.Gv + d.c.Lb(d) & 31;
					var f = G.oG(this.gr, e);
					c.x += G.nG(this.gr, e);
					c.y += f
				}
				else c.x += this.ir, c.y += this.jr;
				0 != (b & 1) && (c.dir = 0 != (this.ck & ka.Ww) ? -1 : 0 != (this.ck & ka.lD) ? d.c.Lb(d) : a.Gz(this.fr))
			}
			return 0 != (b & 2) && (c.x < a.Tl || c.x > a.Rl || c.y < a.Xl || c.y > a.Vl) ? !1 : !0
		}
	};
	Qc.prototype = n.extend(new ka,
	{});
	gb.prototype = n.extend(new ka,
	{});
	Rc.prototype = n.extend(new ka,
	{});
	Ua.prototype = {
		oc: function() {},
		$v: function() {},
		Zv: function() {},
		GB: function() {},
		Pe: function() {},
		Ti: function() {},
		HB: function() {},
		IB: function() {},
		ld: function() {},
		xr: function() {},
		FB: function() {},
		tB: function(a, b, c, d)
		{
			var e = this.Aj[this.Aj.length - 1];
			e && (a < e.x && (a = e.x), b < e.y && (b = e.y), a + c > e.x + e.hs && (c = e.x + e.hs - a), b + d > e.y + e.nq && (d = e.y + e.nq - b));
			a = {
				x: a,
				y: b,
				hs: c,
				nq: d
			};
			this.Aj.push(a);
			return a
		},
		mB: function()
		{
			this.Aj.pop()
		}
	};
	Ba.prototype = n.extend(new Ua,
	{
		yr: function(a)
		{
			this.yv = this.tw = a;
			this.Fa.imageSmoothingEnabled = a;
			this.Fa.webkitImageSmoothingEnabled = a;
			this.Fa.mozImageSmoothingEnabled = a;
			this.Fa.msImageSmoothingEnabled = a;
			this.xv = -1;
			this.ye(0, 0)
		},
		cC: function(a, b)
		{
			this.Fa.scale(a, b);
			this.Fo = a;
			this.Ho = b;
			this.Hj = this.Gj = 0;
			1 < this.Fo ? this.Gj = 1 : 0 < this.Fo && 1 > this.Fo && (this.Gj = 1 / this.Fo);
			1 < this.Ho && (this.Hj = 1);
			0 < this.Ho && 1 > this.Ho && (this.Hj = 1 / this.Ho)
		},
		Pp: function(a, b, c, d)
		{
			this.Fa.clearRect(a, b, c, d)
		},
		oc: function(a, b, c, d, e, f, g)
		{
			var m = this.Fa;
			this.ye(f, g);
			m.fillStyle = n.nf(e);
			m.fillRect(a, b, c, d)
		},
		$v: function(a, b, c, d, e, f, g)
		{
			var m = this.Fa;
			this.ye(f, g);
			m.fillStyle = n.nf(e);
			n.Wp(m, a, b, c, d);
			m.fill()
		},
		Zv: function(a, b, c, d, e, f, g, m, q)
		{
			if (e == f) return this.oc(a,
				b, c, d, e, m, q);
			var h = this.Fa;
			this.ye(m, q);
			this.vy(a, b, c, d, g, e, f);
			h.fillRect(a, b, c, d)
		},
		GB: function(a, b, c, d, e, f, g, m, q)
		{
			if (e == f) return this.$v(a, b, c, d, e, m, q);
			var h = this.Fa;
			this.ye(m, q);
			this.vy(a, b, c, d, g, e, f);
			n.Wp(h, a, b, c, d);
			this.Fa.fill()
		},
		Pe: function(a, b, c, d, e, f, g, m)
		{
			var q = this.Fa,
				h = b - a.ya,
				l = c - a.xa;
			this.ye(g, m);
			0 == d && 1 == e && 1 == f ? 0 == a.lb ? null != a.kb && q.drawImage(a.kb, h, l) : q.drawImage(a.app.ca.Bb[a.lb], a.hd, a.jd, a.width, a.height, h, l, a.width, a.height) : (q.save(), q.translate(b, c), 0 != d && q.rotate(.0174532925 *
				-d), q.scale(Math.max(.001, e), Math.max(.001, f)), q.translate(-a.ya, -a.xa), 0 == a.lb ? null != a.kb && 0 != a.width && 0 != a.height && q.drawImage(a.kb, 0, 0, a.width, a.height, 0, 0, a.width, a.height) : q.drawImage(a.app.ca.Bb[a.lb], a.hd, a.jd, a.width, a.height, 0, 0, a.width, a.height), q.restore())
		},
		tI: function(a, b, c, d, e, f, g, m)
		{
			var q = this.Fa,
				h = b - a.ya,
				l = c - a.xa;
			this.ye(g, m);
			0 == d && 1 == e && 1 == f ? 0 == a.lb ? null != a.kb && q.drawImage(a.kb, 0, 0, a.width, a.height, h, l, a.width + this.Gj, a.height + this.Hj) : q.drawImage(a.app.ca.Bb[a.lb], a.hd, a.jd, a.width,
				a.height, h, l, a.width + this.Gj, a.height + this.Hj) : (q.save(), q.translate(b, c), 0 != d && q.rotate(.0174532925 * -d), q.scale(Math.max(.001, e), Math.max(.001, f)), q.translate(-a.ya, -a.xa), 0 == a.lb ? null != a.kb && q.drawImage(a.kb, 0, 0, a.width, a.height, 0, 0, a.width, a.height) : q.drawImage(a.app.ca.Bb[a.lb], a.hd, a.jd, a.width, a.height, 0, 0, a.width, a.height), q.restore())
		},
		Ti: function(a, b, c, d, e, f, g)
		{
			this.ye(f, g);
			this.Fa.drawImage(a, b, c, d, e)
		},
		HB: function(a, b, c, d, e, f, g)
		{
			var m = this.Fa;
			this.ye(f, g);
			m.save();
			m.beginPath();
			m.moveTo(b,
				c);
			m.lineTo(b + d, c);
			m.lineTo(b + d, c + e);
			m.lineTo(b, c + e);
			m.lineTo(b, c);
			m.clip();
			f = a.width;
			g = a.height;
			d = Math.floor(d / f) + 1;
			e = Math.floor(e / g) + 1;
			var q, h;
			for (q = 0; q < d; q++)
				for (h = 0; h < e; h++) 0 == a.lb ? null != a.kb && m.drawImage(a.kb, 0, 0, a.width, a.height, b + q * f, c + h * g, a.width + this.Gj, a.height + this.Hj) : m.drawImage(a.app.ca.Bb[a.lb], a.hd, a.jd, a.width, a.height, b + q * f, c + h * g, a.width + this.Gj, a.height + this.Hj);
			m.restore()
		},
		IB: function(a, b, c, d, e, f, g)
		{
			if (!(a instanceof fa)) throw Error("renderPatternEllipse: bad image type: " + typeof a);
			var m = this.Fa;
			this.ye(f, g);
			0 == a.lb ? null != a.kb && (m.fillStyle = m.createPattern(a.kb, "repeat")) : (a.pattern || (a.pattern = document.createElement("canvas"), a.pattern.width = a.width, a.pattern.height = a.height, m = a.pattern.getContext("2d"), m.drawImage(a.app.ca.Bb[a.lb], a.hd, a.jd, a.width, a.height, 0, 0, a.width, a.height)), m.fillStyle = m.createPattern(a.pattern, "repeat"));
			n.Wp(m, b, c, d, e);
			this.Fa.fill()
		},
		ld: function(a, b, c, d, e, f, g, m)
		{
			var q = this.Fa;
			this.ye(g, m);
			q.strokeStyle = n.nf(e);
			q.lineCap = "round";
			q.lineWidth = f;
			q.beginPath();
			q.moveTo(a, b);
			q.lineTo(c, d);
			q.closePath();
			q.stroke()
		},
		xr: function(a, b, c, d, e, f, g, m)
		{
			var q = this.Fa;
			this.ye(g, m);
			q.strokeStyle = n.nf(e);
			q.lineWidth = f;
			q.strokeRect(a, b, c, d)
		},
		FB: function(a, b, c, d, e, f, g, m)
		{
			var q = this.Fa;
			this.ye(g, m);
			q.lineWidth = e;
			q.strokeStyle = n.nf(f);
			n.Wp(q, a, b, c, d);
			this.Fa.stroke()
		},
		clip: function(a, b, c, d)
		{
			var e = this.Fa;
			e.save();
			e.beginPath();
			e.rect(a, b, c, d);
			e.clip()
		},
		eJ: function()
		{
			this.Fa.restore()
		},
		tB: function()
		{
			var a = this.Fa,
				b = Ua.prototype.tB.apply(this, arguments);
			a.beginPath();
			a.rect(b.x,
				b.y, b.hs, b.nq);
			a.clip()
		},
		mB: function()
		{
			var a = this.Fa;
			Ua.prototype.mB.apply(this, arguments);
			if (0 < this.Aj.length)
			{
				var b = this.Aj[this.Aj.length - 1];
				a.beginPath();
				a.rect(b.x, b.y, b.hs, b.nq);
				a.clip()
			}
			else a.WO()
		},
		ye: function(a, b)
		{
			var c = this.Fa;
			if ("undefined" == typeof a) c.globalAlpha = 1, c.Cj = "source-over";
			else if (a != this.xv || b != this.JH)
			{
				this.xv = a;
				this.JH = b;
				var d = a & w.VC,
					e = 0 != (a & w.Nw) | this.tw;
				e != this.yv && (this.yv = e, c.imageSmoothingEnabled = e, c.webkitImageSmoothingEnabled = e, c.mozImageSmoothingEnabled = e, c.msImageSmoothingEnabled =
					e);
				c.globalAlpha = 0 != (a & w.WC) ? (b >>> 24 & 255) / 255 : d == w.Xe ? (128 - b) / 128 : 1;
				switch (d)
				{
					case w.UC:
						c.Cj = "lighter";
						break;
					case w.XC:
						c.Cj = "xor";
						break;
					default:
						c.Cj = "source-over"
				}
			}
		},
		vy: function(a, b, c, d, e, f, g)
		{
			a = e ? this.Fa.createLinearGradient(a, b, a, b + d) : this.Fa.createLinearGradient(a, b, a + c, b);
			a.addColorStop(0, n.nf(f));
			a.addColorStop(1, n.nf(g));
			this.Fa.fillStyle = a
		}
	});
	ra.Ap = 1;
	ra.prototype = {
		load: function(a)
		{
			var b = a.da;
			a.ma(4);
			this.CC = a.s();
			this.BC = a.s();
			this.Bo = a.s();
			this.Ao = a.Vc();
			var c = a.s(),
				d = a.s();
			a.seek(b + c);
			this.Nm =
				a.Wb();
			this.Nm = this.Nm.substr(0, this.Nm.indexOf("."));
			this.Ky = b + d
		}
	};
	Sc.prototype = {
		Dz: function()
		{
			return null
		}
	};
	t.Wo = 0;
	t.vp = 1;
	t.Nx = 2;
	t.Ow = 3;
	t.qs = 0;
	t.Js = 1;
	t.Sw = 2;
	t.Mx = 3;
	t.hi = 0;
	t.ii = 1;
	t.ij = 2;
	t.jj = 3;
	t.Rw = 4;
	t.Yw = 0;
	t.xD = 1;
	t.jt = 1;
	t.Bp = 2;
	t.prototype = {
		start: function(a, b, c, d)
		{
			this.Oy = b;
			this.ih = this.Oy.getContext("2d");
			this.T = c;
			this.m = d;
			this.Iq = (new Date).getTime();
			this.i = a.BC;
			0 == this.i && (this.i = 1);
			this.vn = this.Iq;
			this.wn = this.Iq + this.i;
			this.la = this.cA = !0
		},
		finish: function() {},
		wq: function()
		{
			if (this.cA)
			{
				var a =
					new Date;
				return a.getTime() >= this.wn ? !0 : a.getTime() >= this.wn
			}
			return !0
		},
		ic: function()
		{
			this.vn = (new Date).getTime();
			this.vn > this.wn && (this.vn = this.wn);
			return this.vn - this.Iq
		},
		C: function(a, b, c, d, e, f, g)
		{
			this.Kq && (this.ih.globalCompositeOperation = "source-atop");
			1 == arguments.length ? this.ih.drawImage(a, 0, 0) : 0 < f && 0 < g && this.ih.drawImage(a, d, e, f, g, b, c, f, g)
		},
		stretch: function(a, b, c, d, e, f, g, m, q)
		{
			this.Kq && (this.ih.globalCompositeOperation = "source-atop");
			0 < d && 0 < e && 0 < m && 0 < q && this.ih.drawImage(a, f, g, m, q, b, c, d, e)
		},
		Eb: function() {},
		end: function() {},
		X: function() {}
	};
	Tc.prototype = {
		UI: function(a, b)
		{
			var c = a.M.Al;
			b && (c = a.M.Mn);
			var d = null,
				e;
			if (0 != (a.ka & z.ei))
			{
				var f = this.app.ca.Mb(a.b.Ia),
					d = document.createElement("canvas");
				d.width = f.width;
				d.height = f.height;
				e = d.getContext("2d");
				0 == f.lb ? e.drawImage(f.kb, 0, 0) : e.drawImage(this.app.ca.Bb[f.lb], f.hd, f.jd, f.width, f.height, 0, 0, f.width, f.height)
			}
			else 32 <= a.wa && (d = document.createElement("canvas"), d.width = a.K, d.height = a.J, new StandardRendered(d), d = null);
			if (null == d) return null;
			e = d.width;
			var g = d.height,
				f = document.createElement("canvas");
			f.width = e;
			f.height = g;
			var m = document.createElement("canvas");
			m.width = e;
			m.height = g;
			var q = document.createElement("canvas");
			q.width = e;
			q.height = g;
			b ? (e = m.getContext("2d"), e.drawImage(d, 0, 0), e = f.getContext("2d"), e.drawImage(d, 0, 0), 0 != (c.Bo & ra.Ap) && this.xy(q, d, c.Ao)) : (e = q.getContext("2d"), e.drawImage(d, 0, 0), 0 != (c.Bo & ra.Ap) && this.xy(m, d, c.Ao));
			c = this.fl(c, f, m, q);
			null != c && (d = 0, 0 != (a.W & F.ai) ? (c.Kq = !0, d |= t.Bp) : (c.Kq = !1, d |= t.jt), a.Bk = f, c.Eb(d));
			return c
		},
		xy: function(a, b, c)
		{
			a = a.getContext("2d");
			a.drawImage(b, 0, 0);
			var d = b.width;
			b = b.height;
			var e = a.getImageData(0, 0, d, b),
				f, g = (c & 16711680) >> 16,
				m = (c & 65280) >> 8,
				q = c & 255;
			for (f = 0; f < b; f++)
				for (c = 0; c < d; c++) 0 != e.data[4 * (f * d + c) + 3] && (e.data[4 * (f * d + c)] = g, e.data[4 * (f * d + c) + 1] = m, e.data[4 * (f * d + c) + 2] = q);
			a.putImageData(e, 0, 0)
		},
		fl: function(a, b, c, d)
		{
			var e = null;
			"cctrans" == a.Nm.toLowerCase() && (e = new Ma);
			return null != e ? (e = e.Dz(a), this.app.file.seek(a.Ky), e.Kq = !1, e.X(a, this.app.file, b, c, d), e) : null
		}
	};
	Ma.Mz = "BAND SE00 SE10 SE12 DOOR SE03 MOSA SE05 SE06 SCRL SE01 SE07 SE09 SE13 SE08 SE02 ZIGZ SE04 ZOOM SE11 FADE".split(" ");
	Ma.prototype = n.extend(new Sc,
	{
		Dz: function(a)
		{
			var b = a.CC;
			a = "" + String.fromCharCode(b & 255);
			b >>= 8;
			a += String.fromCharCode(b & 255);
			b >>= 8;
			a += String.fromCharCode(b & 255);
			a += String.fromCharCode(b >> 8 & 255);
			for (b = 0; b < Ma.Mz.length && a != Ma.Mz[b]; b++);
			a = null;
			switch (b)
			{
				case 0:
					a = new Wc;
					break;
				case 1:
					a = new Uc;
					break;
				case 2:
					a = new Vc;
					break;
				case 3:
					a = new Xc;
					break;
				case 4:
					a = new Yc;
					break;
				case 5:
					a = new $c;
					break;
				case 6:
					a = new ad;
					break;
				case 7:
					a = new bd;
					break;
				case 8:
					a = new cd;
					break;
				case 9:
					a = new dd;
					break;
				case 10:
					a = new ed;
					break;
				case 11:
					a =
						new fd;
					break;
				case 12:
					a = new gd;
					break;
				case 13:
					a = new hd;
					break;
				case 14:
					a = new id;
					break;
				case 15:
					a = new jd;
					break;
				case 16:
					a = new kd;
					break;
				case 17:
					a = new ld;
					break;
				case 18:
					a = new md;
					break;
				case 19:
					a = new nd;
					break;
				case 20:
					a = new Zc
			}
			return a
		}
	});
	Uc.prototype = n.extend(new t,
	{
		X: function(a, b, c, d, e)
		{
			this.Ta = b.s();
			this.start(a, c, d, e)
		},
		Eb: function()
		{
			this.la && (this.la = !1, this.g = this.m.width, this.f = this.m.height, this.dA = 8 != this.Ta ? this.Ta : Math.floor(8 * Math.random()));
			var a = this.ic();
			if (1 < a / this.i) this.C(this.m);
			else
			{
				var b, c;
				switch (this.dA)
				{
					case 0:
						b = this.g / 3 * a / this.i;
						c = this.f;
						this.C(this.m, 0, 0, this.g / 3 - b, 0, b, c);
						this.C(this.m, this.g - b, 0, 2 * this.g / 3, 0, b, c);
						b = this.g / 3;
						c = this.f * a / this.i;
						this.C(this.m, b, 0, b, this.f - c, b, c);
						break;
					case 1:
						b = this.g / 3 * a / this.i;
						c = this.f;
						this.C(this.m, 0, 0, this.g / 3 - b, 0, b, c);
						this.C(this.m, this.g - b, 0, 2 * this.g / 3, 0, b, c);
						b = this.g / 3;
						c = this.f * a / this.i;
						this.C(this.m, b, this.f - c, b, 0, b, c);
						break;
					case 2:
						b = this.g / 3 * a / this.i;
						c = this.f;
						this.C(this.m, 0, 0, this.g / 3 - b, 0, b, c);
						this.C(this.m, this.g - b, 0, 2 * this.g / 3, 0, b, c);
						b =
							this.g / 3;
						c = this.f * a / this.i;
						this.C(this.m, b, 0, b, 0, b, c);
						break;
					case 3:
						b = this.g / 3 * a / this.i;
						c = this.f;
						this.C(this.m, 0, 0, this.g / 3 - b, 0, b, c);
						this.C(this.m, this.g - b, 0, 2 * this.g / 3, 0, b, c);
						b = this.g / 3;
						c = this.f * a / this.i;
						this.C(this.m, b, this.f - c, b, this.f - c, b, c);
						break;
					case 4:
						b = this.g / 3 * a / this.i;
						c = this.f;
						this.C(this.m, 0, 0, this.g / 3 - b, 0, b, c);
						this.C(this.m, this.g - b, 0, 2 * this.g / 3, 0, b, c);
						b = this.g / 3;
						c = this.f / 2 * a / this.i;
						this.C(this.m, b, 0, b, this.f / 2 - c, b, c);
						this.C(this.m, b, this.f - c, b, this.f / 2, b, c);
						break;
					case 5:
						b = this.g / 3 * a / this.i;
						c = this.f;
						this.C(this.m, 0, 0, this.g / 3 - b, 0, b, c);
						this.C(this.m, this.g - b, 0, 2 * this.g / 3, 0, b, c);
						b = this.g / 3;
						c = this.f / 2 * a / this.i;
						this.C(this.m, b, 0, b, 0, b, c);
						this.C(this.m, b, this.f - c, b, this.f - c, b, c);
						break;
					case 6:
						b = this.g / 3;
						c = this.f * a / this.i;
						this.C(this.m, 0, this.f - c, 0, 0, b, c);
						this.C(this.m, b, 0, b, this.f - c, b, c);
						this.C(this.m, 2 * b, this.f - c, 2 * b, 0, b, c);
						break;
					case 7:
						b = this.g / 7;
						c = this.f * a / this.i;
						this.C(this.m, 0, this.f - c, 0, 0, b, c);
						this.C(this.m, b, 0, b, this.f - c, b, c);
						this.C(this.m, 2 * b, this.f - c, 2 * b, 0, b, c);
						this.C(this.m, 3 * b,
							0, 3 * b, this.f - c, b, c);
						this.C(this.m, 4 * b, this.f - c, 4 * b, 0, b, c);
						this.C(this.m, 5 * b, 0, 5 * b, this.f - c, b, c);
						this.C(this.m, 6 * b, this.f - c, 6 * b, 0, 2 * b, c);
						break;
					default:
						this.C(this.m)
				}
			}
			return null
		},
		end: function()
		{
			this.finish()
		}
	});
	Vc.prototype = n.extend(new t,
	{
		X: function(a, b, c, d, e)
		{
			this.Ta = b.s();
			this.start(a, c, d, e)
		},
		Eb: function()
		{
			this.la && (this.la = !1, this.g = this.m.width, this.f = this.m.height);
			var a = this.ic();
			if (1 < a / this.i) this.C(this.m);
			else
			{
				var b, c;
				this.C(this.m);
				switch (this.Ta)
				{
					case 0:
						b = this.g / 2 * a / this.i;
						b = this.g / 2 -
							b;
						c = this.f / 2 * a / this.i;
						c = this.f / 2 - c;
						this.stretch(this.T, 0, 0, b, c, 0, 0, this.g / 2, this.f / 2);
						b = this.g / 2 * a / this.i;
						c = this.f / 2 * a / this.i;
						c = this.f / 2 - c;
						this.stretch(this.T, this.g / 2 + b, 0, this.g / 2 - b, c, this.g / 2, 0, this.g / 2, this.f / 2);
						b = this.g / 2 * a / this.i;
						b = this.g / 2 - b;
						c = this.f / 2 * a / this.i;
						this.stretch(this.T, 0, this.f / 2 + c, b, this.f / 2 - c, 0, this.f / 2, this.g / 2, this.f / 2);
						b = this.g / 2 * a / this.i;
						c = this.f / 2 * a / this.i;
						this.stretch(this.T, this.g / 2 + b, this.f / 2 + c, this.g / 2 - b, this.f / 2 - c, this.g / 2, this.f / 2, this.g / 2, this.f / 2);
						break;
					case 1:
						b = this.g *
							a / this.i;
						b = this.g - b;
						c = this.f * a / this.i;
						c = this.f - c;
						this.C(this.T, 0, 0, this.g - b, this.f - c, b, c);
						break;
					case 2:
						b = this.g * a / this.i;
						c = this.f * a / this.i;
						c = this.f - c;
						this.C(this.T, b, 0, 0, this.f - c, this.g - b, c);
						break;
					case 3:
						b = this.g * a / this.i;
						b = this.g - b;
						c = this.f * a / this.i;
						this.C(this.T, 0, c, this.g - b, 0, b, this.f - c);
						break;
					case 4:
						b = this.g * a / this.i;
						c = this.f * a / this.i;
						this.C(this.T, b, c, 0, 0, this.g - b, this.f - c);
						break;
					case 5:
						b = this.g / 2 * a / this.i;
						b = this.g / 2 - b;
						c = this.f / 2 * a / this.i;
						c = this.f / 2 - c;
						this.C(this.T, b - this.g / 2, c - this.f / 2, 0, 0,
							this.g / 2, this.f / 2);
						b = this.g / 2 * a / this.i;
						c = this.f / 2 * a / this.i;
						c = this.f / 2 - c;
						this.C(this.T, this.g / 2 + b, c - this.f / 2, this.g / 2, 0, this.g / 2, this.f / 2);
						b = this.g / 2 * a / this.i;
						b = this.g / 2 - b;
						c = this.f / 2 * a / this.i;
						this.C(this.T, b - this.g / 2, this.f / 2 + c, 0, this.f / 2, this.g / 2, this.f / 2);
						b = this.g / 2 * a / this.i;
						c = this.f / 2 * a / this.i;
						this.C(this.T, this.g / 2 + b, this.f / 2 + c, this.g / 2, this.f / 2, this.g / 2, this.f / 2);
						break;
					case 6:
						c = this.f / 2 * a / this.i;
						c = this.f / 2 - c;
						this.C(this.T, 0, c - this.f / 2, 0, 0, this.g, this.f / 2);
						this.C(this.T, 0, this.f - c, 0, this.f / 2, this.g,
							this.f / 2);
						break;
					case 7:
						b = this.g / 2 * a / this.i, b = this.g / 2 - b, this.C(this.T, b - this.g / 2, 0, 0, 0, this.g / 2, this.f), this.C(this.T, this.g - b, 0, this.g / 2, 0, this.g / 2, this.f)
				}
			}
			return null
		},
		end: function()
		{
			this.finish()
		}
	});
	Wc.prototype = n.extend(new t,
	{
		X: function(a, b, c, d, e)
		{
			this.ff = b.o();
			this.Bt = b.o();
			this.start(a, c, d, e)
		},
		Eb: function()
		{
			var a = this.T.width,
				b = this.T.height,
				c;
			if (this.la)
			{
				0 == this.ff && (this.ff = 1);
				switch (this.Bt)
				{
					case t.Wo:
					case t.vp:
						this.lc = (a + this.ff - 1) / this.ff;
						0 == this.lc && (this.lc = 1, this.ff = a);
						break;
					default:
						this.lc =
							(b + this.ff - 1) / this.ff, 0 == this.lc && (this.lc = 1, this.ff = b)
				}
				this.mb = 0;
				this.la = !1
			}
			if (0 >= this.ff || 0 >= this.lc || 0 == this.i) this.C(this.m);
			else
			{
				var d = this.lc * this.ic() / this.i;
				if (d > this.mb)
				{
					var e = 0,
						f = 0,
						g = 0,
						m = 0;
					for (c = 0; c < this.ff; c++)
					{
						switch (this.Bt)
						{
							case t.Wo:
								e = this.mb + c * this.lc;
								f = 0;
								g = d - this.mb;
								m = b;
								break;
							case t.vp:
								e = a - (this.mb + c * this.lc) - (d - this.mb);
								f = 0;
								g = d - this.mb;
								m = b;
								break;
							case t.Nx:
								e = 0;
								f = this.mb + c * this.lc;
								g = a;
								m = d - this.mb;
								break;
							case t.Ow:
								e = 0, f = b - (this.mb + c * this.lc) - (d - this.mb), g = a, m = d - this.mb
						}
						this.C(this.m,
							e, f, e, f, g, m)
					}
				}
				this.mb = d
			}
			return this.yH
		},
		end: function()
		{
			this.finish()
		}
	});
	Xc.prototype = n.extend(new t,
	{
		X: function(a, b, c, d, e)
		{
			this.Oa = b.s();
			this.aq = b.s();
			this.start(a, c, d, e)
		},
		Eb: function()
		{
			this.la && (this.la = !1, this.g = this.m.width, this.f = this.m.height);
			var a = this.ic();
			if (1 < a / this.i) this.C(this.m);
			else
			{
				var b, c, d, e, f, g, m, q, h, l;
				h = this.g / this.Oa;
				l = this.f / this.aq;
				d = this.g / this.Oa;
				e = this.f / this.aq;
				for (f = 0; f < this.Oa; f++)
					for (g = 0; g < this.aq; g++) b = f * h, c = g * l, m = d * a / this.i, q = e * a / this.i, this.stretch(this.m, b + (d - m) /
						2, c + (e - q) / 2, m, q, b + (d - m) / 2, c + (e - q) / 2, m, q)
			}
			return null
		},
		end: function()
		{
			this.finish()
		}
	});
	Yc.prototype = n.extend(new t,
	{
		X: function(a, b, c, d, e)
		{
			this.Bi = b.o();
			this.start(a, c, d, e)
		},
		Eb: function()
		{
			if (this.la)
			{
				switch (this.Bi)
				{
					case t.qs:
					case t.Js:
						this.lc = this.T.width / 2;
						break;
					default:
						this.lc = this.T.height / 2
				}
				this.mb = 0;
				this.la = !1
			}
			if (0 == this.lc) this.C(this.m);
			else
			{
				var a = 0,
					b = 0,
					c = 0,
					d = 0,
					e = this.lc * this.ic() / this.i;
				if (e > this.mb)
				{
					switch (this.Bi)
					{
						case t.qs:
							a = this.T.width / 2 - e;
							b = 0;
							c = e - this.mb;
							d = this.m.height;
							break;
						case t.Js:
							a =
								this.mb;
							b = 0;
							c = e - this.mb;
							d = this.m.height;
							break;
						case t.Sw:
							a = 0;
							b = this.T.height / 2 - e;
							c = this.m.width;
							d = e - this.mb;
							break;
						case t.Mx:
							a = 0, b = this.mb, c = this.m.width, d = e - this.mb
					}
					this.C(this.m, a, b, a, b, c, d);
					switch (this.Bi)
					{
						case t.qs:
							a = this.T.width / 2 + this.mb;
							break;
						case t.Js:
							a = this.T.width - e;
							break;
						case t.Sw:
							b = this.T.height / 2 + this.mb;
							break;
						case t.Mx:
							b = this.T.height - e
					}
					this.C(this.m, a, b, a, b, c, d)
				}
			}
			return null
		},
		end: function()
		{
			this.finish()
		}
	});
	Zc.prototype = n.extend(new t,
	{
		X: function(a, b, c, d, e)
		{
			this.start(a, c, d, e)
		},
		Eb: function()
		{
			this.la &&
				(this.la = !1);
			var a;
			this.ih.globalAlpha = 1;
			this.C(this.T);
			a = this.ic() / this.i;
			this.ih.globalAlpha = a;
			this.C(this.m);
			return null
		},
		end: function()
		{
			this.ih.globalAlpha = 1;
			this.finish()
		}
	});
	$c.prototype = n.extend(new t,
	{
		X: function(a, b, c, d, e)
		{
			this.Oa = b.s();
			this.Ta = b.s();
			this.Pm = b.s();
			this.start(a, c, d, e)
		},
		Eb: function()
		{
			this.la && (this.la = !1, this.g = this.m.width, this.f = this.m.height);
			var a = this.ic();
			if (1 < a / this.i) this.C(this.m);
			else
			{
				var b, c, d, e, f;
				b = 0;
				var g;
				if (0 == this.Ta)
					for (g = this.f / this.Oa, f = 0; f < this.Oa; f++) 0 == b ?
						(b = 0, c = f * g, d = this.g * a / this.i, e = f == this.Oa - 1 ? this.f : g + 1, 0 == this.Pm ? this.C(this.m, b, c, b, c, d, e) : this.C(this.m, b, c, this.g - d, c, d, e), b = 1) : (c = f * g, d = this.g * a / this.i, b = this.g - d, e = f == this.Oa - 1 ? this.f : g + 1, 0 == this.Pm ? this.C(this.m, b, c, b, c, d, e) : this.C(this.m, b, c, 0, c, d, e), b = 0);
				else
					for (g = this.g / this.Oa, f = 0; f < this.Oa; f++) 0 == b ? (b = f * g, c = 0, e = this.f * a / this.i, d = f == this.Oa - 1 ? this.g : g + 1, 0 == this.Pm ? this.C(this.m, b, c, b, c, d, e) : this.C(this.m, b, c, b, this.f - e, d, e), b = 1) : (b = f * g, e = this.f * a / this.i, c = this.f - e, d = f == this.Oa - 1 ? this.g :
						g + 1, 0 == this.Pm ? this.C(this.m, b, c, b, c, d, e) : this.C(this.m, b, c, b, 0, d, e), b = 0)
			}
			return null
		},
		end: function()
		{
			this.finish()
		}
	});
	ad.prototype = n.extend(new t,
	{
		X: function(a, b, c, d, e)
		{
			this.Ru = b.s();
			this.start(a, c, d, e)
		},
		Eb: function()
		{
			if (this.la)
			{
				var a = this.T.width,
					b = this.T.height;
				this.I = Math.floor((a * this.Ru / 100 + b * this.Ru / 100) / 2);
				0 == this.I && (this.I = 1);
				this.ue = (a + this.I - 1) / this.I;
				this.ig = (b + this.I - 1) / this.I;
				this.Vj = this.ue * this.ig;
				a = Math.floor((this.Vj + 7) / 8 + 2);
				this.Tj = 0;
				this.Zd = Array(a);
				for (b = 0; b < a; b++) this.Zd[b] =
					0;
				this.la = !1
			}
			if (null == this.Zd || 2 > this.ue || 2 > this.ig || 0 == this.i) this.C(this.m);
			else
			{
				var c, d, b = a = 0;
				c = Math.floor(this.Vj * this.ic() / this.i);
				var e = c - this.Tj;
				if (0 != e)
					for (this.Tj = c, d = 0; d < e; d++)
					{
						for (c = 0; 1 > c; c++)
						{
							var a = Math.floor(this.ue * Math.random()),
								b = Math.floor(this.ig * Math.random()),
								f, g;
							f = b * this.ue + a;
							g = Math.floor(f / 8);
							f = 1 << (f & 7);
							if (0 == (this.Zd[g] & f))
							{
								this.Zd[g] |= f;
								break
							}
							var m = g,
								q = (this.Vj + 7) / 8,
								h, l = !1;
							for (h = g; h < q; h++, m++)
								if (-1 != this.Zd[m])
								{
									b = Math.floor(8 * h / this.ue);
									a = Math.floor(8 * h % this.ue);
									for (f = 1; 0 !=
										f; f <<= 1)
									{
										if (0 == (this.Zd[m] & f))
										{
											this.Zd[m] |= f;
											l = !0;
											break
										}
										if (++a >= this.ue && (a = 0, ++b >= this.ig)) break
									}
									if (l) break
								} if (l) break;
							for (h = m = 0; h < g; h++, m++)
							{
								if (255 != this.Zd[m])
								{
									b = Math.floor(8 * h / m_nbBlockPerLine);
									a = Math.floor(8 * h % m_nbBlockPerLine);
									for (f = 1; 0 != f; f <<= 1)
									{
										if (0 == (this.Zd[m] & f))
										{
											this.Zd[m] |= f;
											l = !0;
											break
										}
										if (++a >= this.ue && (a = 0, ++b >= this.ig)) break
									}
									if (l) break
								}
								if (l) break;
								l = !1
							}
						}
						1 > c && this.C(this.m, Math.floor(a * this.I), Math.floor(b * this.I), Math.floor(a * this.I), Math.floor(b * this.I), this.I, this.I)
					}
			}
			return null
		},
		end: function()
		{
			this.finish()
		}
	});
	bd.prototype = n.extend(new t,
	{
		X: function(a, b, c, d, e)
		{
			this.Ta = b.s();
			this.start(a, c, d, e)
		},
		Eb: function()
		{
			this.la && (this.la = !1, this.g = this.m.width, this.f = this.m.height);
			var a = this.ic(),
				b = a / this.i;
			if (1 < b) this.C(this.m);
			else
			{
				var c, d, e;
				.25 > b ? (d = 2 * this.g * a / this.i, d *= 2, e = this.f / 7, b = this.g / 2 - d / 2, c = this.f / 2 - e / 2, this.C(this.m, b, c, b, c, d, e), d = this.g / 7, e = 2 * this.f * a / this.i, e *= 2, b = this.g / 2 - d / 2, c = this.f / 2 - e / 2) : (b = this.g / 2, d = this.g * a / this.i - b, e = this.f / 2, c = 0, this.C(this.m, b, c, b, c, d, e), c =
					this.f / 2, e = this.f * a / this.i - c, b = d = this.g / 2, this.C(this.m, b, c, b, c, d, e), d = this.g * a / this.i - this.g / 2, b = this.g / 2 - d, c = e = this.f / 2, this.C(this.m, b, c, b, c, d, e), e = this.f * a / this.i - this.f / 2, c = this.f / 2 - e, d = this.g / 2, b = 0);
				this.C(this.m, b, c, b, c, d, e)
			}
			return null
		},
		end: function()
		{
			this.finish()
		}
	});
	cd.prototype = n.extend(new t,
	{
		X: function(a, b, c, d, e)
		{
			this.Ta = b.s();
			this.start(a, c, d, e)
		},
		Eb: function()
		{
			this.la && (this.la = !1, this.g = this.m.width, this.f = this.m.height, this.Qu = !1);
			var a = this.ic(),
				b = a / this.i;
			if (1 < b) this.C(this.m);
			else
			{
				var c,
					d, e, f;
				if (.5 >= b) switch (this.Ta)
				{
					case 0:
						e = this.g * a / this.i * 2;
						f = this.f / 2;
						c = this.g - e;
						d = this.f / 2;
						this.C(this.m, 0, 0, c, d, e, f);
						break;
					case 1:
						e = this.g * a / this.i * 2;
						f = this.f / 2;
						c = this.g - e;
						d = this.f / 2;
						this.C(this.m, c, 0, 0, d, e, f);
						break;
					case 2:
						e = this.g * a / this.i * 2;
						f = this.f / 2;
						c = this.g - e;
						d = this.f / 2;
						this.C(this.m, 0, d, c, 0, e, f);
						break;
					case 3:
						e = this.g * a / this.i * 2, f = this.f / 2, c = this.g - e, d = this.f / 2, this.C(this.m, c, d, 0, 0, e, f)
				}
				if (.5 < b) switch (0 == this.Qu && (1 >= this.Ta ? this.C(this.m, 0, 0, 0, this.f / 2, this.g, this.f / 2) : this.C(this.m, 0, this.f /
					2, 0, 0, this.g, this.f / 2), this.Qu = !0), b = a - this.i / 2, b /= this.i / 2, f = this.f / 2 * 1E3 * b / 1E3, this.Ta)
				{
					case 0:
					case 1:
						this.stretch(this.m, 0, f, this.g, this.f / 2, 0, this.f / 2, this.g, this.f / 2);
						this.stretch(this.m, 0, 0, this.g, f, 0, this.f / 2 - f, this.g, f);
						break;
					case 2:
					case 3:
						this.stretch(this.m, 0, this.f / 2 - f, this.g, this.f / 2, 0, 0, this.g, this.f / 2), this.stretch(this.m, 0, this.f - f, this.g, f, 0, this.f / 2, this.g, f)
				}
			}
			return null
		},
		end: function()
		{
			this.finish()
		}
	});
	dd.prototype = n.extend(new t,
	{
		X: function(a, b, c, d, e)
		{
			this.Bi = b.s();
			this.start(a,
				c, d, e)
		},
		Eb: function()
		{
			var a = this.T.width,
				b = this.T.height;
			if (this.la)
			{
				switch (this.Bi)
				{
					case t.Wo:
					case t.vp:
						this.lc = a;
						break;
					default:
						this.lc = b
				}
				this.mb = 0;
				this.la = !1
			}
			if (0 == this.i) this.C(this.m);
			else
			{
				var c = this.lc * this.ic() / this.i;
				if (c > this.mb)
				{
					var d = 0,
						e = 0;
					switch (this.Bi)
					{
						case t.Wo:
							d = c - a;
							e = 0;
							break;
						case t.vp:
							d = a - c;
							e = 0;
							break;
						case t.Nx:
							d = 0;
							e = c - b;
							break;
						case t.Ow:
							d = 0, e = b - c
					}
					this.C(this.m, d, e, 0, 0, a, b);
					this.mb = c
				}
			}
			return null
		},
		end: function()
		{
			this.finish()
		}
	});
	ed.prototype = n.extend(new t,
	{
		X: function(a, b, c, d, e)
		{
			this.Ta =
				b.s();
			this.Oa = b.s();
			this.Yy = b.s();
			this.start(a, c, d, e)
		},
		Eb: function()
		{
			this.la && (this.la = !1, this.g = this.m.width, this.f = this.m.height);
			var a = this.ic();
			if (1 < a / this.i) this.C(this.m);
			else
			{
				var b, c, d, e, f, g;
				f = this.g * this.Oa / 100;
				g = this.f * this.Oa / 100;
				d = f * a / this.i;
				e = g * a / this.i;
				b = this.g / 2 - d / 2;
				c = this.f / 2 - e / 2;
				0 == this.Yy ? this.C(this.m, b, c, b, c, d, e) : this.stretch(this.m, b, c, d, e, this.g / 2 - f / 2, this.f / 2 - g / 2, f, g);
				b = 100 - this.Oa;
				f = this.g * b / 100;
				g = this.f * b / 100;
				d = f / 2 * a / this.i;
				e = g / 2 * a / this.i;
				this.C(this.m, 0, 0, 0, 0, this.g, e);
				this.C(this.m,
					0, 0, 0, 0, d, this.f);
				this.C(this.m, 0, this.f - e, 0, this.f - e, this.g, e);
				this.C(this.m, this.g - d, 0, this.g - d, 0, d, this.f)
			}
			return null
		},
		end: function()
		{
			this.finish()
		}
	});
	fd.prototype = n.extend(new t,
	{
		X: function(a, b, c, d, e)
		{
			this.Ta = b.s();
			this.start(a, c, d, e)
		},
		Eb: function()
		{
			this.la && (this.la = !1, this.g = this.m.width, this.f = this.m.height);
			var a = this.ic();
			if (1 < a / this.i) this.C(this.m);
			else
			{
				var b, c;
				switch (this.Ta)
				{
					case 0:
						b = this.g * a / this.i;
						c = this.f * a / this.i;
						this.stretch(this.m, 0, 0, b, c, 0, 0, this.g, this.f);
						break;
					case 1:
						b = this.g *
							a / this.i;
						c = this.f * a / this.i;
						this.stretch(this.m, this.g - b, 0, b, c, 0, 0, this.g, this.f);
						break;
					case 2:
						b = this.g * a / this.i;
						c = this.f * a / this.i;
						this.stretch(this.m, 0, this.f - c, b, c, 0, 0, this.g, this.f);
						break;
					case 3:
						b = this.g * a / this.i;
						c = this.f * a / this.i;
						this.stretch(this.m, this.g - b, this.f - c, b, c, 0, 0, this.g, this.f);
						break;
					case 4:
						b = this.g / 2 * a / this.i;
						c = this.f / 2 * a / this.i;
						5 > c && (c = 5);
						this.stretch(this.m, 0, 0, b, c, 0, 0, this.T.width / 2, this.T.height / 2);
						b = this.g / 2 * a / this.i;
						c = this.f / 2 * a / this.i;
						5 > c && (c = 5);
						this.stretch(this.m, this.g - b,
							0, b, c, this.g / 2, 0, this.g / 2, this.f / 2);
						b = this.g / 2 * a / this.i;
						c = this.f / 2 * a / this.i;
						this.stretch(this.m, 0, this.f - c, b, c, 0, this.f / 2, this.g / 2, this.f / 2);
						b = this.g / 2 * a / this.i;
						c = this.f / 2 * a / this.i;
						this.stretch(this.m, this.g - b, this.f - c, b, c, this.g / 2, this.f / 2, this.g / 2, this.f / 2);
						break;
					case 5:
						b = this.g / 2 * a / this.i;
						c = this.f / 2 * a / this.i;
						5 > c && (c = 5);
						this.stretch(this.m, this.g / 2 - b, this.f / 2 - c, b, c, 0, 0, this.T.width / 2, this.T.height / 2);
						b = this.g / 2 * a / this.i;
						c = this.f / 2 * a / this.i;
						5 > c && (c = 5);
						this.stretch(this.m, this.g / 2, this.f / 2 - c, b, c,
							this.g / 2, 0, this.g / 2, this.f / 2);
						b = this.g / 2 * a / this.i;
						c = this.f / 2 * a / this.i;
						this.stretch(this.m, this.g / 2 - b, this.f / 2, b, c, 0, this.f / 2, this.g / 2, this.f / 2);
						b = this.g / 2 * a / this.i;
						c = this.f / 2 * a / this.i;
						this.stretch(this.m, this.g / 2, this.f / 2, b, c, this.g / 2, this.f / 2, this.g / 2, this.f / 2);
						break;
					case 6:
						b = this.g;
						c = this.f * a / this.i;
						this.stretch(this.m, 0, 0, b, c, 0, 0, this.g, this.f);
						break;
					case 7:
						b = this.g * a / this.i;
						c = this.f;
						this.stretch(this.m, 0, 0, b, c, 0, 0, this.g, this.f);
						break;
					case 8:
						b = this.g * a / this.i;
						c = this.f;
						this.stretch(this.m, this.g -
							b, 0, b, c, 0, 0, this.g, this.f);
						break;
					case 9:
						b = this.g, c = this.f * a / this.i, this.stretch(this.m, 0, this.f - c, b, c, 0, 0, this.g, this.f)
				}
			}
			return null
		},
		end: function()
		{
			this.finish()
		}
	});
	gd.prototype = n.extend(new t,
	{
		X: function(a, b, c, d, e)
		{
			this.Ta = b.s();
			this.start(a, c, d, e)
		},
		Eb: function()
		{
			this.la && (this.la = !1, this.g = this.m.width, this.f = this.m.height, this.Ub = 0);
			var a = this.ic();
			if (1 < a / this.i) this.C(this.m);
			else
			{
				var b, c;
				switch (this.Ta)
				{
					case 0:
						0 == this.Ub ? (b = 2 * this.g * a / this.i, b = this.g - b, c = 2 * this.f * a / this.i, c = this.f - c, this.stretch(this.T,
							0, 0, b, c, 0, 0, this.g, this.f), a >= this.i / 2 && (this.Ub = 1)) : (b = 2 * this.g * a / this.i, b -= this.g, c = 2 * this.f * a / this.i, c -= this.f, this.stretch(this.m, 0, 0, b, c, 0, 0, this.g, this.f));
						break;
					case 1:
						0 == this.Ub ? (b = this.g, c = 2 * this.f * a / this.i, c = this.f - c, this.stretch(this.T, 0, 0, b, c, 0, 0, this.g, this.f), a >= this.i / 2 && (this.Ub = 1)) : (b = this.g, c = 2 * this.f * a / this.i, c -= this.f, this.stretch(this.m, 0, 0, b, c, 0, 0, this.g, this.f));
						break;
					case 2:
						0 == this.Ub ? (b = 2 * this.g * a / this.i, b = this.g - b, c = 2 * this.f * a / this.i, c = this.f - c, this.stretch(this.T, this.g -
							b, 0, b, c, 0, 0, this.g, this.f), a >= this.i / 2 && (this.Ub = 1)) : (b = 2 * this.g * a / this.i, b -= this.g, c = 2 * this.f * a / this.i, c -= this.f, this.stretch(this.m, this.g - b, 0, b, c, 0, 0, this.g, this.f));
						break;
					case 3:
						0 == this.Ub ? (b = 2 * this.g * a / this.i, b = this.g - b, c = this.f, this.stretch(this.T, 0, 0, b, c, 0, 0, this.g, this.f), a >= this.i / 2 && (this.Ub = 1)) : (b = 2 * this.g * a / this.i, b -= this.g, c = this.f, this.stretch(this.m, 0, 0, b, c, 0, 0, this.g, this.f));
						break;
					case 4:
						0 == this.Ub ? (b = 2 * this.g * a / this.i, b = this.g - b, c = this.f, this.stretch(this.T, this.g / 2 - b / 2, 0, b, c, 0,
							0, this.g, this.f), a >= this.i / 2 && (this.Ub = 1)) : (b = 2 * this.g * a / this.i, b -= this.g, c = this.f, this.stretch(this.m, this.g / 2 - b / 2, 0, b, c, 0, 0, this.g, this.f));
						break;
					case 5:
						0 == this.Ub ? (c = 2 * this.f * a / this.i, c = this.f - c, b = this.g, this.stretch(this.T, 0, this.f / 2 - c / 2, b, c, 0, 0, this.g, this.f), a >= this.i / 2 && (this.Ub = 1)) : (c = 2 * this.f * a / this.i, c -= this.f, b = this.g, this.stretch(this.m, 0, this.f / 2 - c / 2, b, c, 0, 0, this.g, this.f));
						break;
					case 6:
						0 == this.Ub ? (b = 2 * this.g * a / this.i, b = this.g - b, c = 2 * this.f * a / this.i, c = this.f - c, this.stretch(this.T, this.g /
							2 - b / 2, this.f / 2 - c / 2, b, c, 0, 0, this.g, this.f), a >= this.i / 2 && (this.Ub = 1)) : (b = 2 * this.g * a / this.i, b -= this.g, c = 2 * this.f * a / this.i, c -= this.f, this.stretch(this.m, this.g / 2 - b / 2, this.f / 2 - c / 2, b, c, 0, 0, this.g, this.f));
						break;
					case 7:
						0 == this.Ub ? (b = 2 * this.g * a / this.i, b = this.g - b, c = this.f, this.stretch(this.T, this.g - b, 0, b, c, 0, 0, this.g, this.f), a >= this.i / 2 && (this.Ub = 1)) : (b = 2 * this.g * a / this.i, b -= this.g, c = this.f, this.stretch(this.m, this.f - b, 0, b, c, 0, 0, this.g, this.f));
						break;
					case 8:
						0 == this.Ub ? (b = 2 * this.g * a / this.i, b = this.g - b, c = 2 * this.f *
							a / this.i, c = this.f - c, this.stretch(this.T, 0, this.f - c, b, c, 0, 0, this.g, this.f), a >= this.i / 2 && (this.Ub = 1)) : (b = 2 * this.g * a / this.i, b -= this.g, c = 2 * this.f * a / this.i, c -= this.f, this.stretch(this.m, 0, this.f - c, b, c, 0, 0, this.g, this.f));
						break;
					case 9:
						0 == this.Ub ? (b = this.g, c = 2 * this.f * a / this.i, c = this.f - c, this.stretch(this.T, 0, this.f - c, b, c, 0, 0, this.g, this.f), a >= this.i / 2 && (this.Ub = 1)) : (b = this.g, c = 2 * this.f * a / this.i, c -= this.f, this.stretch(this.m, 0, this.f - c, b, c, 0, 0, this.g, this.f));
						break;
					case 10:
						0 == this.Ub ? (b = 2 * this.g * a / this.i,
							b = this.g - b, c = 2 * this.f * a / this.i, c = this.f - c, this.stretch(this.T, this.g - b, this.f - c, b, c, 0, 0, this.g, this.f), a >= this.i / 2 && (this.Ub = 1)) : (b = 2 * this.g * a / this.i, b -= this.g, c = 2 * this.f * a / this.i, c -= this.f, this.stretch(this.m, this.g - b, this.f - c, b, c, 0, 0, this.g, this.f))
				}
			}
			return null
		},
		end: function()
		{
			this.finish()
		}
	});
	hd.prototype = n.extend(new t,
	{
		X: function(a, b, c, d, e)
		{
			this.Ta = b.s();
			this.start(a, c, d, e)
		},
		Eb: function()
		{
			this.la && (this.la = !1, this.g = this.m.width, this.f = this.m.height, this.Sj = this.Rj = 0);
			var a = this.ic();
			if (1 < a /
				this.i) this.C(this.m);
			else
			{
				var b, c, d, e;
				b = this.f * a / this.i;
				a = this.g * a / this.i;
				if (0 == this.Ta)
				{
					e = b % 2;
					for (c = 0; c < this.g; c += 2)
					{
						for (d = this.Rj; d < b; d++) this.C(this.m, c, d, c, d, 1, 1);
						for (d = this.f - b - e; d < this.f - this.Rj; d++) this.C(this.m, c + 1, d + 1, c + 1, d + 1, 1, 1)
					}
					this.Rj = 0 == b % 2 ? b : b - 1
				}
				if (1 == this.Ta)
				{
					e = a % 2;
					for (d = 0; d < this.f; d++)
					{
						for (c = this.Sj; c < a; c += 2) this.C(this.m, c + 1, d, c + 1, d, 1, 1);
						for (c = this.g - a - e; c < this.g - this.Sj; c += 2) this.C(this.m, c, d + 1, c, d + 1, 1, 1)
					}
					this.Sj = 0 == a % 2 ? a : a - 1
				}
				if (2 == this.Ta)
				{
					e = b % 2;
					for (c = 0; c < this.g; c += 2)
					{
						for (d = this.Rj; d <
							b; d += 2) this.C(this.m, c, d, c, d, 1, 1);
						for (d = this.f - b - e; d < this.f - this.Rj; d += 2) this.C(this.m, c + 1, d + 1, c + 1, d + 1, 1, 1)
					}
					e = a % 2;
					for (d = 0; d < this.f; d += 2)
					{
						for (c = this.Sj; c < a; c += 2) this.C(this.m, c + 1, d, c + 1, d, 1, 1);
						for (c = this.g - a - e; c < this.g - this.Sj; c += 2) this.C(this.m, c, d + 1, c, d + 1, 1, 1)
					}
					this.Rj = 0 == b % 2 ? b : b - 1;
					this.Sj = 0 == a % 2 ? a : a - 1
				}
			}
			return null
		},
		end: function()
		{
			this.finish()
		}
	});
	id.prototype = n.extend(new t,
	{
		X: function(a, b, c, d, e)
		{
			this.Oa = b.s();
			this.Om = b.s();
			this.Xy = b.s();
			this.start(a, c, d, e)
		},
		Eb: function()
		{
			this.la && (this.la = !1, this.g =
				this.m.width, this.f = this.m.height, this.ql = 0);
			var a = this.ic();
			if (1 < a / this.i) this.C(this.m);
			else
			{
				var b, c, d;
				b = this.g / 2;
				d = this.f / 2;
				this.ql = 6.28318 * this.Oa * a / this.i;
				1 == this.Xy && (this.ql = 6.28318 - this.ql);
				c = this.g / 2 - this.g / 2 * a / this.i;
				b = Math.floor(b + Math.cos(this.ql) * c);
				c = Math.floor(d + Math.sin(this.ql) * c);
				d = this.g * a / this.i;
				a = this.f * a / this.i;
				this.stretch(this.T, 0, 0, this.g, this.f, 0, 0, this.T.width, this.T.height);
				1 == this.mP ? this.stretch(this.m, b - d / 2, c - a / 2, d, a, 0, 0, this.g, this.f) : this.stretch(this.m, b - d / 2, c - a /
					2, d, a, this.g - d, this.f - a, d, a)
			}
			return null
		},
		end: function()
		{
			this.finish()
		}
	});
	jd.prototype = n.extend(new t,
	{
		X: function(a, b, c, d, e)
		{
			this.Oa = b.s();
			this.Om = b.s();
			this.start(a, c, d, e)
		},
		Eb: function()
		{
			this.la && (this.la = !1, this.g = this.m.width, this.f = this.m.height, this.Hq = 0);
			var a = this.ic();
			if (1 < a / this.i) this.C(this.m);
			else
			{
				var b, c, d;
				b = this.g / 2;
				c = this.f / 2;
				d = 6.28318 * this.Oa * a / this.i;
				d -= 6.28318 * this.Hq;
				1 == this.Om && (d = 6.28318 - d);
				a = this.g * a / this.i;
				b = Math.floor(b + Math.cos(d) * a);
				c = Math.floor(c + Math.sin(d) * a);
				this.C(this.m);
				this.C(this.T, b - this.g / 2, c - this.f / 2, 0, 0, this.g, this.f);
				0 == this.Om ? 6.28318 <= d && this.Hq++ : 0 >= d && this.Hq++
			}
			return null
		},
		end: function()
		{
			this.finish()
		}
	});
	kd.prototype = n.extend(new t,
	{
		X: function(a, b, c, d, e)
		{
			this.Hw = b.s();
			this.ms = b.o();
			this.LC = b.o();
			this.start(a, c, d, e)
		},
		Eb: function()
		{
			var a = this.T.width,
				b = this.T.height;
			if (this.la)
			{
				this.I = Math.floor((a * this.Hw / 100 + b * this.Hw / 100) / 2);
				0 == this.I && (this.I = 1);
				this.ue = (a + this.I - 1) / this.I;
				this.ig = (b + this.I - 1) / this.I;
				this.Pu = this.LC;
				this.gd = this.ms;
				switch (this.ms)
				{
					case t.hi:
						this.aa =
							this.ba = 0;
						break;
					case t.ii:
						this.aa = a - this.I;
						this.ba = 0;
						break;
					case t.ij:
						this.aa = 0;
						this.ba = b - this.I;
						break;
					case t.jj:
						this.aa = a - this.I;
						this.ba = b - this.I;
						break;
					case t.Rw:
						this.aa = a / 2 - this.I, this.ba = b / 2 - this.I, this.gd = this.Pu == t.Yw ? t.hi : t.ii, this.Jq = this.aa - this.I, this.Mq = this.ba - this.I, this.Gq = this.ba + 2 * this.I, this.Lq = this.aa + 2 * this.I, this.ue = 2 + 2 * (this.aa + this.I - 1) / this.I, this.ig = 2 + 2 * (this.ba + this.I - 1) / this.I
				}
				this.Vj = Math.floor(this.ue * this.ig);
				this.Tj = 0;
				this.la = !1
			}
			if (this.I >= a || this.I >= b) this.C(this.m);
			else
			{
				var c;
				c = Math.floor(this.Vj * this.ic() / this.i);
				var d = c - this.Tj;
				if (0 != d)
					for (this.Tj = c, c = 0; c < d; c++)
						if (this.C(this.m, this.aa, this.ba, this.aa, this.ba, this.I, this.I), this.ms == t.Rw) switch (this.gd)
						{
							case t.hi:
								this.aa += this.I;
								this.aa >= this.Lq && (this.aa -= this.I, this.ba += this.I, this.gd = t.ii, this.Lq += this.I);
								break;
							case t.ii:
								this.ba += this.I;
								this.ba >= this.Gq && (this.ba -= this.I, this.aa -= this.I, this.gd = t.jj, this.Gq += this.I);
								break;
							case t.jj:
								this.aa -= this.I;
								this.aa + this.I <= this.Jq && (this.aa += this.I, this.ba -= this.I, this.gd =
									t.ij, this.Jq -= this.I);
								break;
							case t.ij:
								this.ba -= this.I, this.ba + this.I <= this.Mq && (this.ba += this.I, this.aa += this.I, this.gd = t.hi, this.Mq -= this.I)
						}
				else switch (this.Pu)
				{
					case t.Yw:
						switch (this.gd)
						{
							case t.hi:
								this.aa += this.I;
								this.aa >= a && (this.aa -= this.I, this.ba += this.I, this.gd = t.ii);
								break;
							case t.ii:
								this.aa -= this.I;
								0 >= this.aa + this.I && (this.aa += this.I, this.ba += this.I, this.gd = t.hi);
								break;
							case t.ij:
								this.aa += this.I;
								this.aa >= a && (this.aa -= this.I, this.ba -= this.I, this.gd = t.jj);
								break;
							case t.jj:
								this.aa -= this.I, 0 >= this.aa +
									this.I && (this.aa += this.I, this.ba -= this.I, this.gd = t.ij)
						}
						break;
					case t.xD:
						switch (this.gd)
						{
							case t.hi:
								this.ba += this.I;
								this.ba >= b && (this.ba -= this.I, this.aa += this.I, this.gd = t.ij);
								break;
							case t.ii:
								this.ba += this.I;
								this.ba >= b && (this.ba -= this.I, this.aa -= this.I, this.gd = t.jj);
								break;
							case t.ij:
								this.ba -= this.I;
								0 >= this.ba + this.I && (this.ba += this.I, this.aa += this.I, this.gd = t.hi);
								break;
							case t.jj:
								this.ba -= this.I, 0 >= this.ba + this.I && (this.ba += this.I, this.aa -= this.I, this.gd = t.ii)
						}
				}
			}
			return null
		},
		end: function()
		{
			this.finish()
		}
	});
	ld.prototype = n.extend(new t,
	{
		X: function(a, b, c, d, e)
		{
			this.Ta = b.s();
			this.Oa = b.s();
			this.start(a, c, d, e)
		},
		Eb: function()
		{
			this.la && (this.la = !1, this.g = this.m.width, this.f = this.m.height, this.tf = this.Uj = 0);
			var a = this.ic();
			if (1 < a / this.i) this.C(this.m);
			else
			{
				var b, c, d, e;
				0 == this.Ta ? (b = this.f / this.Oa, e = Math.floor(this.Uj * b) + Math.floor(b), c = 0, d = this.g * a / this.i, d = d * this.Oa / 2, d -= this.g * this.Uj, b = 0 == this.tf ? 0 : this.g - d, this.C(this.m, b, c, b, c, d, e), c = this.f - e, b = 1 == this.tf ? 0 : this.g - d, this.C(this.m, b, c, b, c, d, e), d >= this.g &&
					(this.Uj++, this.tf++, 2 == this.tf && (this.tf = 0))) : (b = this.g / this.Oa, d = Math.floor(this.Uj * b) + Math.floor(b), b = 0, e = this.f * a / this.i, e = e * this.Oa / 2, e -= this.f * this.Uj, c = 0 == this.tf ? 0 : this.f - e, this.C(this.m, b, c, b, c, d, e), b = this.g - d, c = 1 == this.tf ? 0 : this.f - e, this.C(this.m, b, c, b, c, d, e), e >= this.f && (this.Uj++, this.tf++, 2 == this.tf && (this.tf = 0)))
			}
			return null
		},
		end: function()
		{
			this.finish()
		}
	});
	md.prototype = n.extend(new t,
	{
		X: function(a, b, c, d, e)
		{
			this.start(a, c, d, e)
		},
		Eb: function(a)
		{
			var b = this.T.width,
				c = this.T.height;
			this.la &&
				(this.la = !1);
			if (0 == this.i) this.C(this.m);
			else
			{
				var d;
				d = this.ic();
				0 != (a & t.Bp) ? (a = Math.floor(b - b * d / this.i), d = Math.floor(c - c * d / this.i), this.C(this.m), this.stretch(this.T, (b - a) / 2, (c - d) / 2, a, d, 0, 0, b, c)) : (a = Math.floor(b * d / this.i), d = Math.floor(c * d / this.i), this.C(this.T), this.stretch(this.m, (b - a) / 2, (c - d) / 2, a, d, 0, 0, b, c))
			}
			return null
		},
		end: function()
		{
			this.finish()
		}
	});
	nd.prototype = n.extend(new t,
	{
		X: function(a, b, c, d, e)
		{
			this.Oa = b.s();
			this.start(a, c, d, e)
		},
		Eb: function()
		{
			this.la && (this.la = !1, this.g = this.m.width, this.f =
				this.m.height);
			var a = this.ic();
			if (1 < a / this.i) this.C(this.m);
			else
			{
				var b, c, d;
				0 == this.Oa ? (c = this.g * a / this.i, d = this.f * a / this.i, a = this.g / 2 - c / 2, b = this.f / 2 - d / 2, this.stretch(this.m, 0, 0, this.g, this.f, a, b, c, d)) : (c = this.g * a / this.i, c = this.g - c, d = this.f * a / this.i, d = this.f - d, a = this.g / 2 - c / 2, b = this.f / 2 - d / 2, this.stretch(this.T, 0, 0, this.g, this.f, a, b, c, d))
			}
			return null
		},
		end: function()
		{
			this.finish()
		}
	});
	u.Eg = {
		nx: "PK\u0003\u0004",
		Tw: "PK\u0001\u0002",
		rs: "PK\u0005\u0006",
		Qx: "PK\u0006\u0007",
		dF: "PK\u0006\u0006",
		wK: "PK\u0007\b"
	};
	u.RF = {
		gh: !1,
		pi: !1,
		dir: !1,
		jf: null,
		cl: null
	};
	u.prototype = function()
	{
		function a(d)
		{
			"/" != d.slice(-1) && (d += "/");
			if (!this.files[d])
			{
				var e = b(d);
				e && a.call(this, e);
				c.call(this, d, null,
				{
					dir: !0
				})
			}
			return this.files[d]
		}

		function b(a)
		{
			"/" == a.slice(-1) && (a = a.substring(0, a.length - 1));
			var b = a.lastIndexOf("/");
			return 0 < b ? a.substring(0, b) : ""
		}

		function c(c, e, q)
		{
			var g = b(c);
			g && a.call(this, g);
			q = q ||
			{};
			!0 === q.gh && null == q.pi && (q.pi = !0);
			q = d(q, u.RF);
			q.jf = q.jf || new Date;
			null !== q.cl && (q.cl = q.cl.toUpperCase());
			q.dir || null === e || "undefined" ===
				typeof e ? (q.gh = !1, q.pi = !1, e = null) : u.yk.cs && e instanceof Uint8Array ? (q.gh = !1, q.pi = !0, e = u.Mg.bs(e)) : u.yk.Vx && e instanceof ArrayBuffer ? (q.gh = !1, q.pi = !0, e = new Uint8Array(e), e = u.Mg.bs(e)) : q.pi && !q.gh && (!0 !== q.jB && (e = u.Mg.wC(e)), delete q.jB);
			return this.files[c] = new f(c, e, q)
		}

		function d()
		{
			var a = {},
				b, c;
			for (b = 0; b < arguments.length; b++)
				for (c in arguments[b]) arguments[b].hasOwnProperty(c) && "undefined" === typeof a[c] && (a[c] = arguments[b][c]);
			return a
		}

		function e(a, b)
		{
			var c = "",
				d;
			for (d = 0; d < b; d++) c += String.fromCharCode(a &
				255), a >>>= 8;
			return c
		}

		function f(a, b, c)
		{
			this.name = a;
			this.data = b;
			this.options = c
		}
		f.prototype = {
			Wx: function()
			{
				var a = this.data;
				if (null === a || "undefined" === typeof a) return "";
				this.options.gh && (a = kb.decode(a));
				this.options.pi || (a = u.prototype.GC(a));
				return a
			}
		};
		return {
			load: function()
			{
				throw Error("Load method is not defined. Is the file jszip-load.js included ?");
			},
			filter: function(a)
			{
				var b = [],
					c, e, g;
				for (c in this.files) this.files.hasOwnProperty(c) && (e = this.files[c], g = new f(e.name, e.data, d(e.options)), e = c.slice(this.root.length,
					c.length), c.slice(0, this.root.length) === this.root && a(e, g) && b.push(g));
				return b
			},
			file: function(a, b, d)
			{
				if (1 === arguments.length)
				{
					if (a instanceof RegExp)
					{
						var e = a;
						return this.filter(function(a, b)
						{
							return !b.options.dir && e.test(a)
						})
					}
					return this.filter(function(b, c)
					{
						return !c.options.dir && b === a
					})[0] || null
				}
				a = this.root + a;
				c.call(this, a, b, d);
				return this
			},
			gO: function(b)
			{
				if (!b) return this;
				if (b instanceof RegExp) return this.filter(function(a, c)
				{
					return c.options.dir && b.test(a)
				});
				var c = a.call(this, this.root + b),
					d = this.clone();
				d.root = c.name;
				return d
			},
			remove: function(a)
			{
				a = this.root + a;
				var b = this.files[a];
				b || ("/" != a.slice(-1) && (a += "/"), b = this.files[a]);
				if (b)
					if (b.options.dir)
						for (var b = this.filter(function(b, c)
							{
								return c.name.slice(0, a.length) === a
							}), c = 0; c < b.length; c++) delete this.files[b[c].name];
					else delete this.files[a];
				return this
			},
			jO: function(a)
			{
				var b, c;
				a = d(a ||
				{},
				{
					gh: !0,
					cl: "STORE",
					type: "base64"
				});
				var f = a.cl.toUpperCase();
				if (!u.gf[f]) throw f + " is not a valid compression method !";
				var g = [],
					h = [],
					k = 0,
					l;
				for (l in this.files)
					if (this.files.hasOwnProperty(l))
					{
						b =
							this.files[l];
						var n = this.GC(b.name),
							p, r, t;
						r = b;
						b = n;
						var v = f;
						p = b !== r.name;
						c = r.Wx();
						var z = r.options;
						t = z.jf.getHours();
						t = t << 6 | z.jf.getMinutes();
						t = t << 5 | z.jf.getSeconds() / 2;
						r = z.jf.getFullYear() - 1980;
						r = r << 4 | z.jf.getMonth() + 1;
						r = r << 5 | z.jf.getDate();
						var w = null !== c && 0 !== c.length,
							v = z.cl || v;
						if (!u.gf[v]) throw v + " is not a valid compression method !";
						z = u.gf[v];
						v = w ? z.BF(c) : "";
						p = "\n\x00" + (p ? "\x00\b" : "\x00\x00") + (w ? z.Oq : u.gf.STORE.Oq);
						p += e(t, 2);
						p += e(r, 2);
						p += w ? e(this.Up(c), 4) : "\x00\x00\x00\x00";
						p += w ? e(v.length, 4) : "\x00\x00\x00\x00";
						p += w ? e(c.length, 4) : "\x00\x00\x00\x00";
						p += e(b.length, 2);
						b = p += "\x00\x00";
						c = v;
						c = u.Eg.nx + b + n + c;
						n = u.Eg.Tw + "\u0014\x00" + b + "\x00\x00\x00\x00\x00\x00" + (!0 === this.files[l].options.dir ? "\u0010\x00\x00\x00" : "\x00\x00\x00\x00") + e(k, 4) + n;
						k += c.length;
						h.push(c);
						g.push(n)
					} f = h.join("");
				g = g.join("");
				h = f + g + (u.Eg.rs + "\x00\x00\x00\x00" + e(h.length, 2) + e(h.length, 2) + e(g.length, 4) + e(f.length, 4) + "\x00\x00");
				switch (a.type.toLowerCase())
				{
					case "uint8array":
						return u.Mg.yw(h);
					case "arraybuffer":
						return u.Mg.yw(h).buffer;
					case "blob":
						return u.Mg.XI(h);
					case "base64":
						return a.gh ? kb.encode(h) : h;
					default:
						return h
				}
			},
			Up: function(a, b)
			{
				if ("" === a || "undefined" === typeof a) return 0;
				var c = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242,
					1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368,
					4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646,
					62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804,
					3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701,
					2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117
				];
				"undefined" == typeof b && (b = 0);
				var d;
				b ^= -1;
				for (var e = 0, f = a.length; e < f; e++) d = (b ^ a.charCodeAt(e)) & 255, d = c[d], b = b >>> 8 ^ d;
				return b ^ -1
			},
			clone: function()
			{
				var a = new u,
					b;
				for (b in this) "function" !== typeof this[b] && (a[b] = this[b]);
				return a
			},
			GC: function(a)
			{
				for (var b = "", c = 0; c < a.length; c++)
				{
					var d = a.charCodeAt(c);
					128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d & 63 | 128))
				}
				return b
			},
			FC: function(a)
			{
				for (var b = "", c = 0, d, e, f; c < a.length;) d = a.charCodeAt(c), 128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (e = a.charCodeAt(c + 1), b += String.fromCharCode((d &
					31) << 6 | e & 63), c += 2) : (e = a.charCodeAt(c + 1), f = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | f & 63), c += 3);
				return b
			}
		}
	}();
	u.gf = {
		STORE:
		{
			Oq: "\x00\x00",
			BF: function(a)
			{
				return a
			},
			Dw: function(a)
			{
				return a
			}
		}
	};
	u.yk = {
		Vx: "undefined" !== typeof ArrayBuffer && "undefined" !== typeof Uint8Array,
		cs: "undefined" !== typeof Uint8Array,
		blob: function()
		{
			if ("undefined" === typeof ArrayBuffer) return !1;
			var a = new ArrayBuffer(0);
			try
			{
				return 0 === (new Blob([a],
				{
					type: "application/zip"
				})).size
			}
			catch (c)
			{}
			try
			{
				var b = new(window.BlobBuilder ||
					window.WebKitBlobBuilder || window.DE || window.wE);
				b.append(a);
				return 0 === b.getBlob("application/zip").size
			}
			catch (c)
			{}
			return !1
		}()
	};
	u.Mg = {
		wC: function(a)
		{
			for (var b = "", c = 0; c < a.length; c++) b += String.fromCharCode(a.charCodeAt(c) & 255);
			return b
		},
		yw: function(a)
		{
			if (!u.yk.cs) throw Error("Uint8Array is not supported by this browser");
			for (var b = new ArrayBuffer(a.length), b = new Uint8Array(b), c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
			return b
		},
		bs: function(a)
		{
			if (!u.yk.cs) throw Error("Uint8Array is not supported by this browser");
			for (var b = "", c = 0; c < a.length; c++) b += String.fromCharCode(a[c]);
			return b
		},
		XI: function(a)
		{
			if (!u.yk.blob) throw Error("Blob is not supported by this browser");
			a = u.Mg.yw(a).buffer;
			try
			{
				return new Blob([a],
				{
					type: "application/zip"
				})
			}
			catch (c)
			{}
			try
			{
				var b = new(window.BlobBuilder || window.WebKitBlobBuilder || window.DE || window.wE);
				b.append(a);
				return b.getBlob("application/zip")
			}
			catch (c)
			{}
			throw Error("Bug : can't construct the Blob.");
		}
	};
	var kb = function()
	{
		return {
			encode: function(a)
			{
				for (var b = "", c, d, e, f, g, m, h = 0; h < a.length;) c =
					a.charCodeAt(h++), d = a.charCodeAt(h++), e = a.charCodeAt(h++), f = c >> 2, c = (c & 3) << 4 | d >> 4, g = (d & 15) << 2 | e >> 6, m = e & 63, isNaN(d) ? g = m = 64 : isNaN(e) && (m = 64), b = b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(m);
				return b
			},
			decode: function(a)
			{
				var b = "",
					c, d, e, f, g,
					m = 0;
				for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); m < a.length;) c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(m++)), d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(m++)), f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(m++)), g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(m++)), c = c << 2 | d >> 4, d = (d & 15) << 4 | f >> 2, e = (f & 3) << 6 | g, b += String.fromCharCode(c), 64 !=
					f && (b += String.fromCharCode(d)), 64 != g && (b += String.fromCharCode(e));
				return b
			}
		}
	}();
	if (!u) throw "JSZip not defined";
	(function()
	{
		function a()
		{
			this.list = this.next = null
		}

		function b()
		{
			this.n = this.df = this.e = 0;
			this.t = null
		}

		function c(c, d, e, f, g, k)
		{
			this.hj = 16;
			this.EE = 288;
			this.status = 0;
			this.root = null;
			this.sh = 0;
			var m = Array(this.hj + 1),
				h, l, q, n, p, r, t, v = Array(this.hj + 1),
				A, z, w, u = new b,
				C = Array(this.hj);
			n = Array(this.EE);
			var P, E = Array(this.hj + 1),
				B, D, Ja;
			Ja = this.root = null;
			for (p = 0; p < m.length; p++) m[p] = 0;
			for (p = 0; p < v.length; p++) v[p] =
				0;
			for (p = 0; p < C.length; p++) C[p] = null;
			for (p = 0; p < n.length; p++) n[p] = 0;
			for (p = 0; p < E.length; p++) E[p] = 0;
			h = 256 < d ? c[256] : this.hj;
			A = c;
			z = 0;
			p = d;
			do m[A[z]]++, z++; while (0 < --p);
			if (m[0] == d) this.root = null, this.status = this.sh = 0;
			else
			{
				for (r = 1; r <= this.hj && 0 == m[r]; r++);
				t = r;
				k < r && (k = r);
				for (p = this.hj; 0 != p && 0 == m[p]; p--);
				q = p;
				k > p && (k = p);
				for (B = 1 << r; r < p; r++, B <<= 1)
					if (0 > (B -= m[r]))
					{
						this.status = 2;
						this.sh = k;
						return
					} if (0 > (B -= m[p])) this.status = 2, this.sh = k;
				else
				{
					m[p] += B;
					E[1] = r = 0;
					A = m;
					z = 1;
					for (w = 2; 0 < --p;) E[w++] = r += A[z++];
					A = c;
					p = z = 0;
					do 0 != (r =
						A[z++]) && (n[E[r]++] = p); while (++p < d);
					d = E[q];
					E[0] = p = 0;
					A = n;
					z = 0;
					n = -1;
					P = v[0] = 0;
					w = null;
					for (D = 0; t <= q; t++)
						for (c = m[t]; 0 < c--;)
						{
							for (; t > P + v[1 + n];)
							{
								P += v[1 + n];
								n++;
								D = (D = q - P) > k ? k : D;
								if ((l = 1 << (r = t - P)) > c + 1)
									for (l -= c + 1, w = t; ++r < D && !((l <<= 1) <= m[++w]);) l -= m[w];
								P + r > h && P < h && (r = h - P);
								D = 1 << r;
								v[1 + n] = r;
								w = Array(D);
								for (l = 0; l < D; l++) w[l] = new b;
								Ja = null == Ja ? this.root = new a : Ja.next = new a;
								Ja.next = null;
								Ja.list = w;
								C[n] = w;
								0 < n && (E[n] = p, u.df = v[n], u.e = 16 + r, u.t = w, r = (p & (1 << P) - 1) >> P - v[n], C[n - 1][r].e = u.e, C[n - 1][r].df = u.df, C[n - 1][r].n = u.n, C[n - 1][r].t =
									u.t)
							}
							u.df = t - P;
							z >= d ? u.e = 99 : A[z] < e ? (u.e = 256 > A[z] ? 16 : 15, u.n = A[z++]) : (u.e = g[A[z] - e], u.n = f[A[z++] - e]);
							l = 1 << t - P;
							for (r = p >> P; r < D; r += l) w[r].e = u.e, w[r].df = u.df, w[r].n = u.n, w[r].t = u.t;
							for (r = 1 << t - 1; 0 != (p & r); r >>= 1) p ^= r;
							for (p ^= r;
								(p & (1 << P) - 1) != E[n];) P -= v[n], n--
						}
					this.sh = v[1];
					this.status = 0 != B && 1 != q ? 1 : 0
				}
			}
		}

		function d(a)
		{
			for (; w < a;) z |= (H.length == I ? -1 : H.charCodeAt(I++) & 255) << w, w += 8
		}

		function e(a)
		{
			return z & J[a]
		}

		function f(a)
		{
			z >>= a;
			w -= a
		}

		function g(a, b, c)
		{
			var g, m, h;
			if (0 == c) return 0;
			for (h = 0;;)
			{
				d(D);
				m = B.list[e(D)];
				for (g = m.e; 16 <
					g;)
				{
					if (99 == g) return -1;
					f(m.df);
					g -= 16;
					d(g);
					m = m.t[e(g)];
					g = m.e
				}
				f(m.df);
				if (16 == g) k &= 32767, a[b + h++] = p[k++] = m.n;
				else
				{
					if (15 == g) break;
					d(g);
					C = m.n + e(g);
					f(g);
					d(F);
					m = G.list[e(F)];
					for (g = m.e; 16 < g;)
					{
						if (99 == g) return -1;
						f(m.df);
						g -= 16;
						d(g);
						m = m.t[e(g)];
						g = m.e
					}
					f(m.df);
					d(g);
					E = k - m.n - e(g);
					for (f(g); 0 < C && h < c;) C--, E &= 32767, k &= 32767, a[b + h++] = p[k++] = p[E++]
				}
				if (h == c) return c
			}
			A = -1;
			return h
		}

		function m(a, b, k)
		{
			var m, h, l, q, n, p, r, t = Array(316);
			for (m = 0; m < t.length; m++) t[m] = 0;
			d(5);
			p = 257 + e(5);
			f(5);
			d(5);
			r = 1 + e(5);
			f(5);
			d(4);
			m = 4 + e(4);
			f(4);
			if (286 <
				p || 30 < r) return -1;
			for (h = 0; h < m; h++) d(3), t[O[h]] = e(3), f(3);
			for (; 19 > h; h++) t[O[h]] = 0;
			D = 7;
			h = new c(t, 19, 19, null, null, D);
			if (0 != h.status) return -1;
			B = h.root;
			D = h.sh;
			q = p + r;
			for (m = l = 0; m < q;)
				if (d(D), n = B.list[e(D)], h = n.df, f(h), h = n.n, 16 > h) t[m++] = l = h;
				else if (16 == h)
			{
				d(2);
				h = 3 + e(2);
				f(2);
				if (m + h > q) return -1;
				for (; 0 < h--;) t[m++] = l
			}
			else
			{
				17 == h ? (d(3), h = 3 + e(3), f(3)) : (d(7), h = 11 + e(7), f(7));
				if (m + h > q) return -1;
				for (; 0 < h--;) t[m++] = 0;
				l = 0
			}
			D = 9;
			h = new c(t, p, 257, K, L, D);
			0 == D && (h.status = 1);
			if (0 != h.status) return -1;
			B = h.root;
			D = h.sh;
			for (m = 0; m < r; m++) t[m] =
				t[m + p];
			F = 6;
			h = new c(t, r, 0, M, N, F);
			G = h.root;
			F = h.sh;
			return 0 == F && 257 < p || 0 != h.status ? -1 : g(a, b, k)
		}

		function h(a, b)
		{
			var h, l;
			for (h = 0; h < b && (!P || -1 != A);)
			{
				if (0 < C)
				{
					if (0 != A)
						for (; 0 < C && h < b;) C--, E &= 32767, k &= 32767, a[0 + h++] = p[k++] = p[E++];
					else
					{
						for (; 0 < C && h < b;) C--, k &= 32767, d(8), a[0 + h++] = p[k++] = e(8), f(8);
						0 == C && (A = -1)
					}
					if (h == b) break
				}
				if (-1 == A)
				{
					if (P) break;
					d(1);
					0 != e(1) && (P = !0);
					f(1);
					d(2);
					A = e(2);
					f(2);
					B = null;
					C = 0
				}
				switch (A)
				{
					case 0:
						var q = a,
							u = 0 + h,
							V = b - h;
						l = w & 7;
						f(l);
						d(16);
						l = e(16);
						f(16);
						d(16);
						if (l != (~z & 65535)) l = -1;
						else
						{
							f(16);
							C = l;
							for (l =
								0; 0 < C && l < V;) C--, k &= 32767, d(8), q[u + l++] = p[k++] = e(8), f(8);
							0 == C && (A = -1)
						}
						break;
					case 1:
						if (null != B) l = g(a, 0 + h, b - h);
						else a:
						{
							var T;l = a;q = 0 + h;u = b - h;
							if (null == r)
							{
								V = Array(288);
								for (T = 0; 144 > T; T++) V[T] = 8;
								for (; 256 > T; T++) V[T] = 9;
								for (; 280 > T; T++) V[T] = 7;
								for (; 288 > T; T++) V[T] = 8;
								t = 7;
								T = new c(V, 288, 257, K, L, t);
								if (0 != T.status)
								{
									alert("HufBuild error: " + T.status);
									l = -1;
									break a
								}
								r = T.root;
								t = T.sh;
								for (T = 0; 30 > T; T++) V[T] = 5;
								n = 5;
								T = new c(V, 30, 0, M, N, n);
								if (1 < T.status)
								{
									r = null;
									alert("HufBuild error: " + T.status);
									l = -1;
									break a
								}
								v = T.root;
								n = T.sh
							}
							B =
							r;G = v;D = t;F = n;l = g(l, q, u)
						}
						break;
					case 2:
						l = null != B ? g(a, 0 + h, b - h) : m(a, 0 + h, b - h);
						break;
					default:
						l = -1
				}
				if (-1 == l) return P ? 0 : -1;
				h += l
			}
			return h
		}

		function l(a)
		{
			var b, c, d;
			null == p && (p = Array(65536));
			w = z = k = 0;
			A = -1;
			P = !1;
			C = E = 0;
			B = null;
			H = a;
			I = 0;
			b = Array(1024);
			for (a = ""; 0 < (c = h(b, b.length));)
				for (d = 0; d < c; d++) a += String.fromCharCode(b[d]);
			H = null;
			return a
		}
		var n, p, k, r = null,
			v, t, z, w, A, P, C, E, B, G, D, F, H, I, J = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535],
			K = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83,
				99, 115, 131, 163, 195, 227, 258, 0, 0
			],
			L = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99],
			M = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
			N = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
			O = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
		u.gf.DEFLATE ? u.gf.DEFLATE.Dw = l : u.gf.DEFLATE = {
			Oq: "\b\x00",
			Dw: l
		}
	})();
	(function()
	{
		function a(a)
		{
			var b = "",
				c, d;
			for (d = 0; d < (a || "").length; d++) c = a.charCodeAt(d), b += "\\x" +
				(16 > c ? "0" : "") + c.toString(16).toUpperCase();
			return b
		}

		function b(a)
		{
			this.stream = "";
			u.yk.cs && a instanceof Uint8Array ? this.stream = u.Mg.bs(a) : u.yk.Vx && a instanceof ArrayBuffer ? (a = new Uint8Array(a), this.stream = u.Mg.bs(a)) : this.stream = u.Mg.wC(a);
			this.index = 0
		}

		function c(a, b)
		{
			this.options = a;
			this.Mu = b
		}

		function d(a, b)
		{
			this.files = [];
			this.Mu = b;
			a && this.load(a)
		}
		b.prototype = {
			py: function(a)
			{
				this.oy(this.index + a)
			},
			oy: function(a)
			{
				if (this.stream.length < a || 0 > a) throw Error("End of stream reached (stream length = " + this.stream.length +
					", asked index = " + a + "). Corrupted zip ?");
			},
			em: function(a)
			{
				this.oy(a);
				this.index = a
			},
			pC: function(a)
			{
				this.em(this.index + a)
			},
			sF: function(a)
			{
				return this.stream.charCodeAt(a)
			},
			ua: function(a)
			{
				var b = 0,
					c;
				this.py(a);
				for (c = this.index + a - 1; c >= this.index; c--) b = (b << 8) + this.sF(c);
				this.index += a;
				return b
			},
			Oe: function(a)
			{
				this.py(a);
				var b = this.stream.slice(this.index, this.index + a);
				this.index += a;
				return b
			},
			kI: function()
			{
				var a = this.ua(4);
				return new Date((a >> 25 & 127) + 1980, (a >> 21 & 15) - 1, a >> 16 & 31, a >> 11 & 31, a >> 5 & 63, (a & 31) <<
					1)
			}
		};
		c.prototype = {
			QG: function()
			{
				return 1 === (this.fy & 1)
			},
			iJ: function()
			{
				return 2048 === (this.fy & 2048)
			},
			oI: function(b)
			{
				var c, d;
				b.pC(22);
				this.du = b.ua(2);
				d = b.ua(2);
				this.fileName = b.Oe(this.du);
				b.pC(d);
				if (-1 == this.Qp || -1 == this.es) throw Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");
				this.CF = b.Oe(this.Qp);
				a:
				{
					b = this.ty;
					for (c in u.gf)
						if (u.gf.hasOwnProperty(c) && u.gf[c].Oq === b)
						{
							c = u.gf[c];
							break a
						} c = null
				}
				if (null === c) throw Error("Corrupted zip : compression " +
					a(this.ty) + " unknown (inner file : " + this.fileName + ")");
				this.Ew = c.Dw(this.CF);
				if (this.Ew.length !== this.es) throw Error("Bug : uncompressed data size mismatch");
				if (this.Mu.JN && u.prototype.Up(this.Ew) !== this.Up) throw Error("Corrupted zip : CRC32 mismatch");
			},
			jI: function(a)
			{
				a.Oe(2);
				a.ua(2);
				this.fy = a.ua(2);
				this.ty = a.Oe(2);
				this.jf = a.kI();
				this.Up = a.ua(4);
				this.Qp = a.ua(4);
				this.es = a.ua(4);
				this.du = a.ua(2);
				this.fG = a.ua(2);
				this.hG = a.ua(2);
				this.Ry = a.ua(2);
				a.ua(2);
				this.eG = a.ua(4);
				this.Ou = a.ua(4);
				if (this.QG()) throw Error("Encrypted zip are not supported");
				this.fileName = a.Oe(this.du);
				this.mI(a);
				this.PH(a);
				this.hz = a.Oe(this.hG);
				this.dir = this.eG & 16 ? !0 : !1
			},
			PH: function()
			{
				if (this.fq[1])
				{
					var a = new b(this.fq[1].value); - 1 === this.es && (this.es = a.ua(8)); - 1 === this.Qp && (this.Qp = a.ua(8)); - 1 === this.Ou && (this.Ou = a.ua(8)); - 1 === this.Ry && (this.Ry = a.ua(4))
				}
			},
			mI: function(a)
			{
				var b = a.index,
					c, d, e;
				for (this.fq = this.fq ||
					{}; a.index < b + this.fG;) c = a.ua(2), d = a.ua(2), e = a.Oe(d), this.fq[c] = {
					id: c,
					length: d,
					value: e
				}
			},
			EG: function()
			{
				this.iJ() && (this.fileName = u.prototype.FC(this.fileName),
					this.hz = u.prototype.FC(this.hz))
			}
		};
		d.prototype = {
			Op: function(b)
			{
				var c = this.Pa.Oe(4);
				if (c !== b) throw Error("Corrupted zip or bug : unexpected signature (" + a(c) + ", expected " + a(b) + ")");
			},
			eI: function()
			{
				this.Qy = this.Pa.ua(2);
				this.Sy = this.Pa.ua(2);
				this.ky = this.Pa.ua(2);
				this.jy = this.Pa.ua(2);
				this.ly = this.Pa.ua(4);
				this.Gt = this.Pa.ua(4);
				this.mJ = this.Pa.ua(2);
				this.Pa.Oe(this.mJ)
			},
			fI: function()
			{
				this.kJ = this.Pa.ua(8);
				this.Pa.Oe(2);
				this.Pa.ua(2);
				this.Qy = this.Pa.ua(4);
				this.Sy = this.Pa.ua(4);
				this.ky = this.Pa.ua(8);
				this.jy = this.Pa.ua(8);
				this.ly = this.Pa.ua(8);
				this.Gt = this.Pa.ua(8);
				this.lJ = {};
				for (var a = this.kJ - 44, b, c, d; 0 < a;) b = this.Pa.ua(2), c = this.Pa.ua(4), d = this.Pa.Oe(c), this.lJ[b] = {
					id: b,
					length: c,
					value: d
				}
			},
			gI: function()
			{
				this.Pa.ua(4);
				this.rI = this.Pa.ua(8);
				this.UF = this.Pa.ua(4);
				if (1 < this.UF) throw Error("Multi-volumes zip are not supported");
			},
			nI: function()
			{
				var a, b;
				for (a = 0; a < this.files.length; a++) b = this.files[a], this.Pa.em(b.Ou), this.Op(u.Eg.nx), b.oI(this.Pa), b.EG()
			},
			iI: function()
			{
				var a;
				for (this.Pa.em(this.Gt); this.Pa.Oe(4) ===
					u.Eg.Tw;) a = new c(
				{
					KC: this.KC
				}, this.Mu), a.jI(this.Pa), this.files.push(a)
			},
			lI: function()
			{
				var a = this.Pa.stream.lastIndexOf(u.Eg.rs);
				if (-1 === a) throw Error("Corrupted zip : can't find end of central directory");
				this.Pa.em(a);
				this.Op(u.Eg.rs);
				this.eI();
				if (65535 === this.Qy || 65535 === this.Sy || 65535 === this.ky || 65535 === this.jy || -1 === this.ly || -1 === this.Gt)
				{
					this.KC = !0;
					a = this.Pa.stream.lastIndexOf(u.Eg.Qx);
					if (-1 === a) throw Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
					this.Pa.em(a);
					this.Op(u.Eg.Qx);
					this.gI();
					this.Pa.em(this.rI);
					this.Op(u.Eg.dF);
					this.fI()
				}
			},
			load: function(a)
			{
				this.Pa = new b(a);
				this.lI();
				this.iI();
				this.nI()
			}
		};
		u.prototype.load = function(a, b)
		{
			var c, e, f;
			b = b ||
			{};
			b.gh && (a = kb.decode(a));
			c = (new d(a, b)).files;
			for (e = 0; e < c.length; e++) f = c[e], this.file(f.fileName, f.Ew,
			{
				pi: !0,
				jB: !0,
				jf: f.jf,
				dir: f.dir
			});
			return this
		}
	})();
	var Md = document.getElementsByTagName("script"),
		Nd = Md[Md.length - 1].src;
	document.iP = Nd.substring(0, Nd.lastIndexOf("/") + 1);
	la.Runtime = od;
	la.headerLoaded = pd;
	la.dJ = "updateApplication";
	la[window.dJ] = Va;
	Aa.prototype = {
		rb: function(a, b, c)
		{
			if (this.visible)
			{
				this.Uf && (a.Fa.save(), a.Fa.translate(this.Eo, this.Go), 0 != this.angle && a.Fa.rotate(.0174532925 * -this.angle), a.Fa.scale(Math.max(.001, this.Zb), Math.max(.001, this.$b)), a.Fa.translate(-this.ya, -this.xa));
				var d;
				for (d = 0; d < this.children.length; d++) this.children[d].rb(a, b + this.x, c + this.y);
				this.Uf && a.Fa.restore()
			}
		},
		Vd: function(a)
		{
			this.children.push(a)
		},
		Fp: function(a, b)
		{
			b >= this.children.length ? this.children.push(a) : (0 > b && (b = 0), this.children.splice(b,
				0, a))
		},
		sI: function()
		{
			this.children.length = 0
		},
		removeChild: function(a)
		{
			var b;
			for (b = 0; b < this.children.length; b++)
				if (this.children[b] == a) return this.children.splice(b, 1), b;
			return -1
		},
		Sc: function(a)
		{
			var b;
			for (b = 0; b < this.children.length; b++)
				if (this.children[b] == a) return b;
			return -1
		},
		le: function(a, b)
		{
			var c, d = null;
			for (c = 0; c < this.children.length; c++)
				if (this.children[c] == a)
				{
					d = this.children[c];
					break
				} null != d && (this.children.splice(c, 1), b > c && b--, 0 > b && (b = 0), b >= this.children.length ? this.children.push(a) : this.children.splice(b,
				0, a))
		}
	};
	qa.Mo = 0;
	qa.Sd = 1;
	qa.eD = 1;
	qa.fD = 2;
	qa.om = 64;
	qa.pm = 16;
	qa.Uo = 6;
	B.SM = 0;
	B.TM = 1;
	B.Hk = 0;
	B.Ik = 1;
	B.Du = [65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1];
	B.Rv = [0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535];
	B.Ig = new pa;
	B.cj = new pa;
	B.Yk = new pa;
	B.ri = new pa;
	B.prototype = {
		Ot: function(a, b, c)
		{
			var d, e;
			this.width = b.width;
			this.height = b.height;
			this.ya = b.ya;
			this.xa = b.xa;
			var f = Math.floor((this.width + 15 & 4294967280) / 16);
			this.lineWidth = f;
			e = f * this.height +
				1;
			if ("undefined" != typeof ArrayBuffer) this.O = new Uint16Array(new ArrayBuffer(2 * e));
			else
				for (this.O = Array(e), d = 0; d < e; d++) this.O[d] = 0;
			d = document.createElement("canvas");
			d.width = b.width;
			d.height = b.height;
			d = d.getContext("2d");
			0 == b.lb ? d.drawImage(b.kb, 0, 0) : d.drawImage(a.ca.Bb[b.lb], b.hd, b.jd, b.width, b.height, 0, 0, b.width, b.height);
			a = d.getImageData(0, 0, this.width, this.height);
			if (0 == (c & B.Ik))
				for (c = 0; c < this.height; c++)
				{
					e = c * b.width * 4 + 3;
					var g = c * f,
						m = 32768;
					for (d = 0; d < this.width; d++) 0 != a.data[e] && (this.O[g] |= m),
						e += 4, m >>>= 1, 0 == m && (m = 32768, g++)
				}
			else
				for (d = 0; d < this.width; d++)
				{
					for (c = 0; c < this.height && 0 == a.data[4 * (c * b.width + d) + 3]; c++);
					if (c < this.height)
						for (g = Math.min(this.height, c + qa.Uo), m = 32768 >> (d & 15); c < g; c++) 0 != a.data[4 * (c * b.width + d) + 3] && (e = Math.floor(c * f + (d & 4294967280) / 16), this.O[e] |= m)
				}
		},
		wI: function(a, b, c)
		{
			var d, e, f;
			90 == c ? (c = 0, f = 1) : 180 == c ? (c = -1, f = 0) : 270 == c ? (c = 0, f = -1) : (f = c * Math.PI / 180, c = Math.cos(f), f = Math.sin(f));
			var g, m;
			null == b ? (e = m = 0, B.Ig.x = B.Ig.y = 0) : (g = -b.x * c, d = -b.x * f, e = -b.y * c, m = -b.y * f, B.Ig.x = Math.floor(g +
				m), B.Ig.y = Math.floor(e - d));
			d = null == b ? a.right : a.right - b.x;
			g = d * c;
			d *= f;
			B.cj.x = Math.floor(g + m);
			B.cj.y = Math.floor(e - d);
			e = null == b ? a.bottom : a.bottom - b.y;
			B.ri.x = Math.floor(g + e * f);
			B.ri.y = Math.floor(e * c - d);
			B.Yk.x = B.Ig.x + B.ri.x - B.cj.x;
			B.Yk.y = B.Ig.y + B.ri.y - B.cj.y;
			c = Math.min(B.Ig.x, Math.min(B.cj.x, Math.min(B.ri.x, B.Yk.x)));
			f = Math.min(B.Ig.y, Math.min(B.cj.y, Math.min(B.ri.y, B.Yk.y)));
			g = Math.max(B.Ig.x, Math.max(B.cj.x, Math.max(B.ri.x, B.Yk.x)));
			d = Math.max(B.Ig.y, Math.max(B.cj.y, Math.max(B.ri.y, B.Yk.y)));
			null != b &&
				(b.x = -c, b.y = -f);
			a.right = g - c;
			a.bottom = d - f
		},
		JF: function(a, b, c, d)
		{
			var e, f, g = a.width;
			e = a.height;
			var m = new Y;
			m.right = Math.floor(a.width * c);
			m.bottom = Math.floor(a.height * d);
			var h = new pa;
			h.x = Math.floor(a.ya * c);
			h.y = Math.floor(a.xa * d);
			this.wI(m, h, b);
			var l = m.right,
				m = m.bottom;
			if (0 >= l || 0 >= m) return !1;
			var n = a.lineWidth,
				p = (l + 15 & 2147483632) / 16;
			this.O = "undefined" != typeof ArrayBuffer ? new Uint16Array(new ArrayBuffer(2 * (p * m + 1))) : Array(p * m + 1);
			var k;
			for (k = p * m; 0 <= k; k--) this.O[k] = 0;
			this.lineWidth = p;
			this.width = l;
			this.height =
				m;
			this.ya = h.x;
			this.xa = h.y;
			b *= .017453292;
			f = Math.cos(b);
			var r = Math.sin(b);
			b = 0;
			h = Math.floor(65536 * (g / 2 - (l / 2 * f - m / 2 * r) / c));
			k = Math.floor(65536 * (e / 2 - (l / 2 * r + m / 2 * f) / d));
			var t = Math.floor(65536 * f / c),
				v = Math.floor(65536 * r / d),
				z = l / 16,
				l = l % 16;
			d = Math.floor(65536 * f / d);
			c = Math.floor(65536 * r / c);
			var g = 65536 * g,
				r = 65536 * e,
				w, A;
			for (f = 0; f < m; f++)
			{
				var u = h,
					C = k,
					E = b,
					B;
				for (e = 0; e < z; e++)
				{
					var D = 0;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.O[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 32768));
					u += t;
					C +=
						v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.O[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 16384));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.O[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 8192));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.O[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 4096));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>>
						B % 16, A = a.O[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 2048));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.O[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 1024));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.O[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 512));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.O[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 256));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C &&
						C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.O[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 128));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.O[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 64));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.O[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 32));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.O[Math.floor(A *
						n + B / 16)], 0 != (A & w) && (D |= 16));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.O[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 8));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.O[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 4));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C / 65536), w = 32768 >>> B % 16, A = a.O[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 2));
					u += t;
					C += v;
					0 <= u && u < g && 0 <= C && C < r && (B = Math.floor(u / 65536), A = Math.floor(C /
						65536), w = 32768 >>> B % 16, A = a.O[Math.floor(A * n + B / 16)], 0 != (A & w) && (D |= 1));
					u += t;
					C += v;
					this.O[E++] = D
				}
				if (0 != l)
				{
					D = 32768;
					for (e = B = 0; e < l; e++, D = D >> 1 & 32767)
					{
						if (0 <= u && u < g && 0 <= C && C < r)
						{
							A = Math.floor(u / 65536);
							var F = Math.floor(C / 65536);
							w = 32768 >>> A % 16;
							A = a.O[Math.floor(F * n + A / 16)];
							0 != (A & w) && (B |= D)
						}
						u += t;
						C += v
					}
					this.O[E] = B
				}
				b += p;
				h -= c;
				k += d
			}
			return !0
		},
		bj: function(a, b, c, d, e, f, g)
		{
			var m, h, l;
			a <= e ? (m = this, l = Math.floor(c), c = Math.floor(g), h = Math.floor(a), g = Math.floor(b), a = Math.floor(e), b = Math.floor(f)) : (m = d, d = this, l = Math.floor(g), c = Math.floor(c),
				h = Math.floor(e), g = Math.floor(f), a = Math.floor(a), b = Math.floor(b));
			f = m.height;
			var n = 0;
			0 != l && (f = l, g += m.height - l, n = m.height - l);
			e = d.height;
			var p = 0;
			0 != c && (e = c, b += d.height - c, p = d.height - c);
			if (h >= a + d.width || h + m.width <= a || g >= b + e || g + f < b) return !1;
			c = a - h;
			l = Math.floor(c / 16);
			c %= 16;
			h = Math.min(h + m.width - a, d.width);
			h = Math.floor((h + 15) / 16);
			g <= b ? (a = b - g + n, n = p, g = Math.min(g + f, b + e) - b) : (a = n, n = g - b + p, g = Math.min(g + f, b + e) - g);
			b = a * m.lineWidth;
			e = n * d.lineWidth;
			if (0 != c) switch (h)
			{
				case 1:
					for (a = 0; a < g; a++)
					{
						n = m.O[b + l] << c;
						if (0 != (n & d.O[e]) ||
							l + 1 < m.lineWidth && (n = m.O[b + l + 1] << c, n >>>= 16, 0 != (n & d.O[e]))) return !0;
						b += m.lineWidth;
						e += d.lineWidth
					}
					break;
				case 2:
					for (a = 0; a < g; a++)
					{
						n = m.O[b + l] << c;
						if (0 != (n & d.O[e])) return !0;
						n = m.O[b + l + 1] << c;
						p = n >>> 16;
						if (0 != (p & d.O[e]) || 0 != (n & d.O[e + 1]) || l + 2 < m.lineWidth && (n = m.O[b + l + 2] << c, n >>>= 16, 0 != (n & d.O[e + 1]))) return !0;
						b += m.lineWidth;
						e += d.lineWidth
					}
					break;
				default:
					for (a = 0; a < g; a++)
					{
						n = m.O[b + l] << c;
						if (0 != (n & d.O[e])) return !0;
						for (f = 0; f < h - 1; f++)
							if (n = m.O[b + l + f + 1] << c, p = n >>> 16, 0 != (p & d.O[e + f]) || 0 != (n & d.O[e + f + 1])) return !0;
						if (l + f + 1 < m.lineWidth &&
							(n = m.O[b + l + f + 1] << c, n >>>= 16, 0 != (n & d.O[e + f]))) return !0;
						b += m.lineWidth;
						e += d.lineWidth
					}
			}
			else
				for (a = 0; a < g; a++)
				{
					for (f = 0; f < h; f++)
						if (n = m.O[b + l + f], 0 != (d.O[e + f] & n)) return !0;
					b += m.lineWidth;
					e += d.lineWidth
				}
			return !1
		},
		zw: function(a, b, c, d, e, f, g, h)
		{
			a = Math.floor(a);
			b = Math.floor(b);
			d = Math.floor(d);
			e = Math.floor(e);
			var m = 0,
				l = this.height;
			0 < c && (m = this.height - c, b += m, l = c);
			c = g;
			0 < h && (e += g - h, c = h);
			if (a >= d + f || a + this.width <= d || b >= e + c || b + l < e) return !1;
			a <= d ? (g = d - a, a = Math.min(this.width - g, f)) : (g = 0, a = Math.min(d + f - a, this.width));
			b <=
				e ? (m = e - b + m, b = Math.min(b + l, e + c) - e) : b = Math.min(b + l, e + c) - b;
			e = Math.floor(g / 8);
			l = Math.floor((g + a + 15) / 16) - Math.floor(g / 16);
			for (f = 0; f < b; f++) switch (d = (f + m) * this.lineWidth, l)
			{
				case 1:
					c = B.Du[g & 15] & B.Rv[(g + a - 1 & 15) + 1];
					if (0 != (this.O[d + e] & c)) return !0;
					break;
				case 2:
					c = B.Du[g & 15];
					if (0 != (this.O[d + e] & c)) return !0;
					c = B.Rv[(g + a - 1 & 15) + 1];
					if (0 != (this.O[d + e + 1] & c)) return !0;
					break;
				default:
					c = B.Du[g & 15];
					if (0 != (this.O[d + e] & c)) return !0;
					for (h = 1; h < l - 1; h++)
						if (0 != this.O[d + e + h]) return !0;
					c = B.Rv[(g + a - 1 & 15) + 1];
					if (0 != (this.O[d + e + h] & c)) return !0
			}
			return !1
		},
		ZI: function(a, b, c, d, e)
		{
			a = Math.floor(a);
			b = Math.floor(b);
			var f = a,
				g = b;
			if (0 == c)
			{
				if (1 != d || 1 != e) f = Math.floor(f / d), g = Math.floor(g / e)
			}
			else if (f = 3.141592653589 * c / 180, c = Math.cos(f), g = Math.sin(f), f = a * c - b * g, g = b * c + a * g, 1 != d || 1 != e) f /= d, g /= e;
			f += this.ya;
			g += this.xa;
			a = Math.floor(f);
			b = Math.floor(g);
			return 0 > a || a >= this.width || 0 > b || b >= this.height ? !1 : 0 != (this.O[b * this.lineWidth + Math.floor(a / 16)] & 32768 >>> (a & 15)) ? !0 : !1
		}
	};
	w.gi = 1;
	w.YE = 2;
	w.gt = 4;
	w.ZE = 16;
	w.Sf = 32;
	w.sj = 64;
	w.Rk = 128;
	w.WM = 0;
	w.VM = 1;
	w.KJ = 0;
	w.Xe = 1;
	w.NJ = 2;
	w.XC = 3;
	w.GJ =
		4;
	w.QJ = 5;
	w.JJ = 6;
	w.LJ = 7;
	w.HJ = 8;
	w.UC = 9;
	w.PJ = 10;
	w.RJ = 11;
	w.IJ = 12;
	w.MJ = 13;
	w.OJ = 13;
	w.VC = 4095;
	w.WC = 4096;
	w.Nw = 8192;
	w.prototype = {
		JG: function(a, b, c)
		{
			this.a = a;
			this.cm = c.ry;
			this.Or = c.sy;
			this.V = 0;
			this.V |= w.sj;
			0 == (this.a.Ge & H.Dd) && (this.V &= ~w.sj);
			0 != (this.a.jc.gB & z.JE) && (this.V |= w.Rk);
			0 != (c.Km & h.Dk) ? (this.V |= w.gi, this.a.wa == p.Qf && (this.a.W |= F.Kf, this.V &= ~w.sj)) : this.V |= w.Sf;
			this.Dc = this.a.jc.fB;
			this.rc = this.a.jc.eB;
			this.a.b.Oc == O.BE && (this.V |= w.YE)
		},
		vq: function(a)
		{
			this.KF(a);
			a && this.a.M.Al && (this.a.W |= F.$h)
		},
		handle: function()
		{
			var a =
				this.a.c,
				b, c, d, e;
			0 != (this.a.W & F.$h) ? (this.Cg || this.fl(!1), this.SH()) : 0 != (this.a.W & F.ai) ? this.TH() : 0 == (this.V & w.gt) ? (0 != this.so && (this.Lr -= a.oo, 0 > this.Lr && (this.Lr = this.so, 0 == (this.V & w.Sf) ? (this.V |= w.Sf, this.Zq()) : (this.V &= ~w.Sf, this.Kn()))), null != this.a.w && this.a.w.move(), 0 == this.a.b.Mh && (0 != (this.a.ka & z.rj) ? 0 == (this.a.ka & z.Gx) && 0 != (a.h.Aa & l.NC) && (b = this.a.v - this.a.fa, c = this.a.u - this.a.ga, d = b + this.a.K, e = c + this.a.J, (d < a.Tl || b > a.Rl || e < a.Xl || c > a.Vl) && a.kf(this.a.yb)) : (b = this.a.v - this.a.fa, c = this.a.u -
				this.a.ga, d = b + this.a.K, e = c + this.a.J, d >= a.Sl && b <= a.Ql && e >= a.Wl && c <= a.Ul || (d >= a.Tl && b <= a.Rl && e >= a.Xl && c <= a.Vl ? (this.V |= w.gt, this.Or = this.a.ti()) : 0 == (this.a.ka & z.Gx) && a.kf(this.a.yb))))) : (b = this.a.v - this.a.fa, c = this.a.u - this.a.ga, d = b + this.a.K, e = c + this.a.J, d >= a.Sl && b <= a.Ql && e >= a.Wl && c <= a.Ul && (this.V &= ~w.gt, this.vq(!1), this.a.le(this.Or)))
		},
		KF: function()
		{
			0 != (this.a.ka & z.ei) ? this.a.pt(this.a.v - this.a.c.ea, this.a.u - this.a.c.ia, this.a.b.Ia, this.cm, 0 == (this.V & w.gi)) : (this.a.W |= F.ZD, this.a.Wk(this.a.v - this.a.c.ea,
				this.a.u - this.a.c.ia, this.cm, 0 != (this.a.ka & z.et), 0 == (this.V & w.gi), -1));
			this.a.ZB(this.Dc, this.rc)
		},
		fl: function(a)
		{
			this.a.W &= ~(F.$h | F.ai);
			if (0 == a)
			{
				if (!this.a.M.Al) return !1;
				this.a.W |= F.$h
			}
			else
			{
				if (!this.a.M.Mn) return !1;
				this.a.W |= F.ai
			}
			this.Cg = this.a.c.h.mu().UI(this.a, a);
			return this.Cg ? !0 : (this.a.W &= ~(F.$h | F.ai), !1)
		},
		SH: function()
		{
			if (0 != (this.a.W & F.$h))
			{
				if (this.Cg.wq()) return this.a.W &= ~F.$h, this.Cg = this.a.Bk = null, !1;
				this.Cg.Eb(t.jt);
				return !0
			}
			return !1
		},
		TH: function()
		{
			if (0 != (this.a.W & F.ai))
			{
				if (this.Cg.wq()) return this.Bk =
					this.Cg = null, this.a.c.kf(this.a.yb), !1;
				this.Cg.Eb(t.Bp);
				return !0
			}
			return !1
		},
		KG: function()
		{
			return this.fl(!0) ? (this.a.W |= F.Kf, !0) : !1
		},
		Ab: function()
		{
			this.Or = this.a.ti()
		},
		Kn: function()
		{
			0 == (this.V & w.gi) && (this.V |= w.gi, this.a.b.L = !0, this.a.Nj())
		},
		Zq: function()
		{
			0 != (this.V & w.gi) && (this.a.c.A.fb[this.a.ud].Aa & (R.rm | R.sm)) == R.sm && (this.V &= ~w.gi, this.a.W &= ~F.Kf, this.a.b.L = !0, this.a.wk())
		},
		Qr: function(a)
		{
			this.V = a ? this.V | w.sj : this.V & ~w.sj
		}
	};
	qd.prototype = {
		load: function(a)
		{
			this.Wq = a.o();
			this.Gg = Array(this.Wq);
			var b;
			for (b = 0; b < this.Wq; b++) this.Gg[b] = a.Wb()
		}
	};
	rd.prototype = {
		load: function(a, b)
		{
			this.Xq = a.o();
			this.values = Array(this.Xq);
			var c;
			for (c = 0; c < this.Xq; c++) this.values[c] = a.s();
			b && (this.Ya = a.s())
		}
	};
	Ca.cF = 26;
	Ca.Lx = 10;
	Ca.prototype = {
		X: function(a, b)
		{
			this.Pr = 0;
			this.Na = Array(Ca.cF);
			this.ke = Array(Ca.Lx);
			var c;
			for (c = 0; c < this.Na.length; c++) this.Na[c] = 0;
			for (c = 0; c < this.ke.length; c++) this.ke[c] = "";
			if (null != b.Bl)
				for (this.Pr = b.Bl.Ya, c = 0; c < b.Bl.Xq; c++) this.Na[c] = b.Bl.values[c];
			if (null != b.Pn)
				for (c = 0; c < b.Pn.Wq; c++) this.ke[c] =
					b.Pn.Gg[c]
		},
		Ab: function()
		{
			var a;
			for (a = 0; a < this.Na.length; a++) this.Na[a] = 0;
			for (a = 0; a < this.ke.length; a++) this.ke[a] = null
		},
		mq: function(a)
		{
			return a < this.Na.length ? this.Na[a] : 0
		},
		Cz: function(a)
		{
			return a < this.ke.length ? this.ke[a] : ""
		},
		Xr: function(a, b)
		{
			a > this.R.Na.length && this.ui(a + 10);
			this.Na[a] = b
		},
		ui: function(a)
		{
			if (a >= this.Na.length)
			{
				var b;
				for (b = 0; b < a; b++) this.Na[b] = 0
			}
		},
		BG: function(a)
		{
			if (a >= this.ke.length)
			{
				var b;
				for (b = 0; b < a; b++) this.ke[b] = ""
			}
		}
	};
	Na.Nf = 32;
	Na.prototype = {
		$z: function(a)
		{
			a -= Na.Nf;
			var b = null;
			a <
				this.eq.length && null != this.eq[a] && (b = this.eq[a].$z());
			return b
		},
		zz: function(a)
		{
			a -= Na.Nf;
			return a < this.eq.length ? this.DH[a] : 0
		}
	};
	Ia.LM = 1;
	Ia.Kx = 2;
	Ia.prototype = {
		X: function(a)
		{
			this.Y = a;
			this.Xb = a.c
		},
		zz: function()
		{
			return 0
		},
		Kz: function()
		{
			return Ia.Kx
		},
		Py: function() {},
		Ay: function() {},
		QH: function() {},
		GF: function() {},
		Rp: function()
		{
			return !1
		},
		action: function() {},
		$t: function()
		{
			return null
		},
		Bz: function()
		{
			return null
		},
		bC: function() {},
		mi: function() {},
		kl: function() {}
	};
	sd.prototype = {
		evaluate: function(a)
		{
			var b = a.j.gn(this.ec);
			if (null == b) a.Xc[a.wb] = 0;
			else
			{
				var c = (this.code >> 16) - N.Zh;
				a.Pt = this;
				a.Xc[a.wb] = b.$t(c)
			}
		}
	};
	td.prototype = {
		Ea: function(a)
		{
			var b = a.j.Kc(this);
			if (null != b)
			{
				var c = (this.sa >>> 16) - N.Zh;
				a.Pt = this;
				b.action(c, this)
			}
		}
	};
	ud.prototype = {
		wc: function(a, b)
		{
			if (null == b) return this.jb(a);
			b.W |= F.jx;
			var c = -(this.sa >> 16) - N.Zh - 1;
			a.Pt = this;
			return b.Rp(c, this) ? (a.j.lh(b), !0) : !1
		},
		jb: function(a)
		{
			var b = a.j.mh(this.Xa),
				c = a.j.Yf,
				d = -(this.sa >> 16) - N.Zh - 1;
			for (a.Pt = this; null != b;) b.W &= ~F.jx, b.Rp(d, this) ? 0 != (this.lf & Q.Fk) && (c--, a.j.Yd()) :
				0 == (this.lf & Q.Fk) && (c--, a.j.Yd()), b = a.j.nh();
			return 0 != c ? !0 : !1
		}
	};
	(function()
	{
		this.element = null;
		this.wy = !1
	}).prototype = n.extend(new Ia,
	{
		kl: function()
		{
			this.setPosition(this.Y.v, this.Y.u)
		},
		mi: function()
		{
			this.setPosition(this.Y.v, this.Y.u);
			this.wo(this.Y.K, this.Y.J)
		},
		bP: function(a, b)
		{
			this.element = a;
			a.style.position = "absolute";
			this.wo(this.Y.K, this.Y.J);
			this.setPosition(this.Y.v, this.Y.u);
			this.fu && this.vk(this.fu);
			this.xt = this.Y.na = b;
			this.Xb.h.hg ? (a.style.visibility = "hidden", this.xt = !1) : a.style.visibility =
				b ? "visible" : "hidden";
			this.Xb.h.Mt.appendChild(a)
		},
		Ez: function()
		{
			return this.Xb.h.canvas ? this.Xb.h.canvas.offsetLeft : 0
		},
		Fz: function()
		{
			return this.Xb.h.canvas ? this.Xb.h.canvas.offsetTop : 0
		},
		gC: function(a)
		{
			this.Hy = a;
			this.Y.gC(a);
			this.element && (this.element.style.left = this.Ez() + this.Xb.h.ej + (this.Y.v - this.Y.c.ea) * this.Xb.h.Zb + "px")
		},
		jC: function(a)
		{
			this.Iy = a;
			this.Y.jC(a);
			this.element && (this.element.style.top = this.Fz() + this.Xb.h.fj + (this.Y.u - this.Y.c.ia) * this.Xb.h.$b + "px")
		},
		setPosition: function(a, b)
		{
			this.Hy =
				a;
			this.Iy = b;
			this.Y.setPosition(a, b);
			this.element && (this.element.style.left = this.Ez() + this.Xb.h.ej + (this.Y.v - this.Y.c.ea) * this.Xb.h.Zb + "px", this.element.style.top = this.Fz() + this.Xb.h.fj + (this.Y.u - this.Y.c.ia) * this.Xb.h.$b + "px")
		},
		rw: function(a)
		{
			this.Gy = a;
			this.Y.rw(a);
			this.element && (this.element.style.width = this.Y.K * this.Xb.h.Zb + "px")
		},
		qw: function(a)
		{
			this.Fy = a;
			this.Y.qw(a);
			this.element && !this.wy && (this.element.style.height = this.Y.J * this.Xb.h.$b + "px")
		},
		wo: function(a, b)
		{
			this.Gy = a;
			this.Fy = b;
			this.Y.wo(a,
				b);
			this.element && (this.element.style.width = this.Y.K * this.Xb.h.Zb + "px", this.wy || (this.element.style.height = this.Y.J * this.Xb.h.$b + "px"))
		},
		vk: function(a)
		{
			this.fu = a;
			this.element && (this.element.style.font = a.$f())
		},
		Py: function()
		{
			this.element && this.Xb.h.Mt.removeChild(this.element)
		},
		Bz: function()
		{
			return this.fu
		},
		bC: function(a)
		{
			this.vk(a)
		},
		Kz: function()
		{
			this.Xb.h.hg || this.Y.na == this.xt || (this.xt = this.Y.na, this.element.style.visibility = this.Y.na ? "visible" : "hidden");
			this.Y.v == this.Hy && this.Y.u == this.Iy || this.setPosition(this.Y.v,
				this.Y.u);
			this.Y.K == this.Gy && this.Y.J == this.Fy || this.wo(this.Y.K, this.Y.J);
			return 0
		}
	});
	O.BE = 0;
	O.zE = 1;
	O.AE = 2;
	O.TL = 3;
	O.SL = 4;
	O.UL = 5;
	O.bt = 9;
	O.yE = 11;
	O.RL = 12;
	O.wx = 13;
	O.qj = 14;
	O.prototype = {
		setData: function(a, b, c, d, e)
		{
			this.gv = a;
			this.vl = b;
			this.TA = c;
			this.SA = d;
			this.Sq = e
		}
	};
	vd.prototype = {
		load: function(a)
		{
			var b = a.da;
			this.Gn = a.s();
			this.wd = Array(this.Gn);
			var c;
			for (c = 0; c < this.Gn; c++)
			{
				a.seek(b + 4 + 16 * c);
				var d = a.s(),
					e = a.s(),
					f = a.s(),
					g = a.s();
				a.seek(b + f);
				var f = a.o(),
					h = a.o(),
					l = a.ob(),
					n = a.ob();
				a.ma(2);
				var p = a.s();
				switch (h)
				{
					case 0:
						this.wd[c] =
							new Dd;
						break;
					case 1:
						this.wd[c] = new yd;
						break;
					case 2:
						this.wd[c] = new Cd;
						break;
					case 3:
						this.wd[c] = new xd;
						break;
					case 4:
						this.wd[c] = new wd;
						break;
					case 5:
						this.wd[c] = new zd;
						break;
					case 9:
						this.wd[c] = new Bd;
						break;
					case 14:
						this.wd[c] = new Ed
				}
				this.wd[c].setData(h, f, l, p, n);
				this.wd[c].load(a, g - 12);
				14 == h && (a.seek(b + d), d = a.Wb(), d = d.substring(0, d.length - 4), d = d.toLowerCase(), this.wd[c].KI(d, e))
			}
		}
	};
	wd.prototype = n.extend(new O,
	{
		load: function(a)
		{
			this.xn = a.o();
			this.kA = a.o();
			this.jA = a.o();
			this.mA = a.o();
			this.lA = a.o()
		}
	});
	xd.prototype =
		n.extend(new O,
		{
			load: function(a)
			{
				this.tA = a.o();
				this.qA = a.o();
				this.rA = a.o();
				a.o();
				this.sA = a.s()
			}
		});
	yd.prototype = n.extend(new O,
	{
		load: function(a)
		{
			this.uA = a.S();
			this.wA = a.S();
			this.vA = a.S();
			this.xA = a.S();
			a.o()
		}
	});
	zd.prototype = n.extend(new O,
	{
		load: function(a)
		{
			this.ul = a.o();
			this.NA = a.o();
			this.MA = a.o();
			this.fv = a.ob();
			this.PA = a.ob();
			this.RA = a.ob();
			a.ma(1);
			this.Ra = Array(this.ul);
			var b, c, d;
			for (b = 0; b < this.ul; b++) d = a.da, this.Ra[b] = new Ad, a.Ca(), c = a.Ca(), this.Ra[b].load(a), a.seek(d + c)
		}
	});
	Ad.prototype = {
		load: function(a)
		{
			this.pA =
				a.ob();
			this.Vu = a.ob();
			this.Wu = a.S();
			this.Xu = a.S();
			this.Uu = a.S();
			this.Zu = a.S();
			this.oA = a.o();
			this.Yu = a.o();
			a = a.Wb();
			0 < a.length && (this.ae = a)
		}
	};
	Bd.prototype = n.extend(new O,
	{
		load: function(a)
		{
			this.GA = a.o();
			this.BA = a.o();
			this.CA = a.o();
			this.FA = a.o();
			this.DA = a.o();
			this.EA = a.o()
		}
	});
	Cd.prototype = n.extend(new O,
	{
		load: function(a)
		{
			this.KA = a.o();
			this.dv = a.o();
			this.ev = a.o();
			this.JA = a.o();
			a.o();
			this.HA = a.o();
			this.IA = a.o()
		}
	});
	Dd.prototype = n.extend(new O,
	{
		load: function() {}
	});
	Ed.prototype = n.extend(new O,
	{
		load: function(a)
		{
			a.ma(14);
			this.data = a.da
		},
		KI: function(a)
		{
			this.Lc = a
		}
	});
	G.kj = [256, 251, 236, 212, 181, 142, 97, 49, 0, -49, -97, -142, -181, -212, -236, -251, -256, -251, -236, -212, -181, -142, -97, -49, 0, 49, 97, 142, 181, 212, 236, 251];
	G.tj = [0, -49, -97, -142, -181, -212, -236, -251, -256, -251, -236, -212, -181, -142, -97, -49, 0, 49, 97, 142, 181, 212, 236, 251, 256, 251, 236, 212, 181, 142, 97, 49];
	G.gF = [2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 144, 160, 176, 192, 208, 224, 240, 256, 272, 288, 320, 336, 352, 368, 384, 400, 416, 432, 448, 480, 512, 544, 560, 592, 624, 640, 672, 688, 720, 736,
		768, 784, 816, 848, 864, 896, 928, 944, 976, 992, 1024, 1120, 1216, 1312, 1440, 1536, 1632, 1728, 1824, 1952, 2048, 2240, 2432, 2688, 2880, 3072, 3264, 3456, 3712, 3904, 4096, 6544, 4914, 5216, 5732, 6144, 6553, 6962, 7366, 7780, 8192, 9836, 11672, 13316, 14960, 16604, 18248, 19892, 21504, 25600, 25600
	];
	G.jE = [-1, 8, 24, -1, 16, 12, 20, 16, 0, 4, 28, 0, -1, 8, 24, -1];
	G.Ek = [2599, 0, 844, 31, 479, 30, 312, 29, 210, 28, 137, 27, 78, 26, 25, 25, 0, 24];
	G.Je = [0, -2, 0, 2, 0, -4, 0, 4, 0, -8, 0, 8, -4, 0, -8, 0, 0, 0, -2, -2, 2, 2, -4, -4, 4, 4, -8, -8, 8, 8, -4, 4, -8, 8, 0, 0, -2, 0, 2, 0, -4, 0, 4, 0, -8, 0, 8, 0, 0, 4, 0, 8, 0, 0,
		-2, 2, 2, -2, -4, 4, 4, -4, -8, 8, 8, -8, 4, 4, 8, 8, 0, 0, 0, 2, 0, -2, 0, 4, 0, -4, 0, 8, 0, -8, 4, 0, 8, 0, 0, 0, 2, 2, -2, -2, 4, 4, -4, -4, 8, 8, -8, -8, 4, -4, 8, -8, 0, 0, 2, 0, -2, 0, 4, 0, -4, 0, 8, 0, -8, 0, 0, -4, 0, -8, 0, 0, 2, -2, -2, 2, 4, -4, -4, 4, 8, -8, -8, 8, -4, -4, -8, -8, 0, 0
	];
	G.ym = 1;
	G.nG = function(a, b)
	{
		return a * G.kj[b] / 256
	};
	G.oG = function(a, b)
	{
		return a * G.tj[b] / 256
	};
	G.prototype = {
		Ei: function(a, b)
		{
			this.a.c.Wc++;
			this.Pd = this.a.c.Wc;
			this.a.w.N = !1;
			if (0 == a) return this.a.c.yf(this.a), !1;
			var c, d, e;
			for (e = 0 != (this.a.c.A.Hb & E.Hc) ? Math.floor(a * this.a.c.pc * 32) : a << 5; 2048 < e;)
			{
				c =
					65536 * this.a.v + (this.a.cg & 65535);
				d = 65536 * this.a.u + (this.a.dg & 65535);
				c += 2048 * G.kj[b];
				d += 2048 * G.tj[b];
				this.a.cg = c & 65535;
				this.a.v = Math.floor(c / 65536);
				this.a.dg = d & 65535;
				this.a.u = Math.floor(d / 65536);
				if (this.a.c.yf(this.a)) return !0;
				if (this.a.w.N) break;
				e -= 2048
			}
			if (!this.a.w.N && (c = 65536 * this.a.v + (this.a.cg & 65535), d = 65536 * this.a.u + (this.a.dg & 65535), c += G.kj[b] * e, d += G.tj[b] * e, this.a.cg = c & 65535, this.a.v = Math.floor(c / 65536), this.a.dg = d & 65535, this.a.u = Math.floor(d / 65536), this.a.c.yf(this.a))) return !0;
			this.a.b.L = !0;
			this.a.w.N || (this.a.c.uk = 0);
			return this.a.w.N
		},
		Bn: function(a)
		{
			0 == a.TA && this.stop()
		},
		Jj: function(a)
		{
			return 100 >= a ? G.gF[a] : a << 8
		},
		Cn: function(a)
		{
			if (a) this.nA(!1);
			else switch (this.a.c.j.Kr & 4294901760)
			{
				case -786432:
					a = this.a.v - this.a.fa;
					var b = this.a.u - this.a.ga,
						c = this.a.c.ek(a, b, a + this.a.K, b + this.a.J);
					a = this.a.v;
					b = this.a.u;
					0 != (c & h.Qg) && (a = this.a.fa);
					0 != (c & h.Rg) && (a = this.a.c.ge - this.a.K + this.a.fa);
					0 != (c & h.Sg) && (b = this.a.ga);
					0 != (c & h.Pg) && (b = this.a.c.he - this.a.J + this.a.ga);
					this.a.v = a;
					this.a.u = b;
					break;
				case -851968:
				case -917504:
					a =
						18 * (this.a.c.Lb(this.a) >> 2);
					do {
						if (this.Lg(this.a.v + G.Je[a], this.a.u + G.Je[a + 1], !1))
						{
							this.a.v += G.Je[a];
							this.a.u += G.Je[a + 1];
							return
						}
						a += 2
					} while (0 != G.Je[a] || 0 != G.Je[a + 1]);
					this.a.v = this.a.b.Ri;
					this.a.u = this.a.b.Si;
					this.a.b.Ia = this.a.b.wr;
					this.a.b.$a = this.a.b.vr
			}
		},
		nA: function(a)
		{
			switch (this.a.c.j.Kr & 4294901760)
			{
				case -786432:
					a = this.a.v - this.a.fa;
					var b = this.a.u - this.a.ga,
						c = this.a.c.ek(a, b, a + this.a.K, b + this.a.J);
					a = this.a.v;
					b = this.a.u;
					0 != (c & h.Qg) && (a = this.a.fa);
					0 != (c & h.Rg) && (a = this.a.c.ge - this.a.K + this.a.fa);
					0 != (c & h.Sg) && (b = this.a.ga);
					0 != (c & h.Pg) && (b = this.a.c.he - this.a.J + this.a.ga);
					this.a.v = a;
					this.a.u = b;
					break;
				case -851968:
				case -917504:
					if (b = new pa, this.AH(this.a.v, this.a.u, this.a.b.Ri, this.a.b.Si, a, b)) this.a.v = b.x, this.a.u = b.y;
					else
					{
						b = 18 * (this.a.c.Lb(this.a) >> 2);
						do {
							if (this.Lg(this.a.v + G.Je[b], this.a.u + G.Je[b + 1], a))
							{
								this.a.v += G.Je[b];
								this.a.u += G.Je[b + 1];
								return
							}
							b += 2
						} while (0 != G.Je[b] || 0 != G.Je[b + 1]);
						0 == a && (this.a.v = this.a.b.Ri, this.a.u = this.a.b.Si, this.a.b.Ia = this.a.b.wr, this.a.b.$a = this.a.b.vr)
					}
			}
		},
		jm: function(a,
			b, c, d, e)
		{
			var f;
			f = -1;
			e && (f = this.a.zb);
			e = this.a.jc;
			if (0 != (e.zd & 15))
			{
				var g = a - this.a.fa,
					h = b - this.a.ga;
				if (0 != (this.a.c.ek(g, h, g + this.a.K, h + this.a.J) & e.zd)) return !1
			}
			if (0 != (e.zd & 16) && this.a.c.al(this.a, this.a.b.Ia, this.a.b.$a, this.a.b.ub, this.a.b.vb, a, b, c, d)) return !1;
			if (-1 == e.Cl) return !0;
			a = this.a.c.yl(this.a, this.a.b.Ia, this.a.b.$a, this.a.b.ub, this.a.b.vb, a, b, e.Li);
			if (null == a) return !0;
			b = this.a.c.j.Qj;
			for (c = 0; c < a.size(); c++)
				if (d = a.get(c).zb, d != f)
					for (g = e.Cl; 0 <= b[g]; g++)
						if (b[g] == d) return !1;
			return !0
		},
		Lg: function(a,
			b, c)
		{
			var d;
			d = -1;
			c && (d = this.a.zb);
			c = this.a.jc;
			if (0 != (c.zd & 15))
			{
				var e = a - this.a.fa,
					f = b - this.a.ga;
				if (0 != (this.a.c.ek(e, f, e + this.a.K, f + this.a.J) & c.zd)) return !1
			}
			if (0 != (c.zd & 16) && this.a.c.al(this.a, this.a.b.Ia, this.a.b.$a, this.a.b.ub, this.a.b.vb, a, b, 0, E.Sd)) return !1;
			if (-1 == c.Cl) return !0;
			a = this.a.c.yl(this.a, this.a.b.Ia, this.a.b.$a, this.a.b.ub, this.a.b.vb, a, b, c.Li);
			if (null == a) return !0;
			b = this.a.c.j.Qj;
			for (e = 0; e < a.size(); e++)
				if (f = a.get(e).zb, f != d)
				{
					var g;
					for (g = c.Cl; 0 <= b[g]; g++)
						if (b[g] == f) return !1
				} return !0
		},
		sl: function(a, b, c, d, e, f, g)
		{
			var h = n.pe((a + c) / 2),
				l = n.pe((b + d) / 2),
				p, r;
			do
				if (this.jm(h + this.a.c.ea, l + this.a.c.ia, e, f, !1))
				{
					if (c = h, d = l, p = h, r = l, h = n.pe((c + a) / 2), l = n.pe((d + b) / 2), h == p && l == r) return c == a && d == b || !this.jm(a + this.a.c.ea, b + this.a.c.ia, e, f, !1) || (h = a, l = b), g.x = h, g.y = l, !0
				}
			else
			if (a = h, b = l, p = h, r = l, h = n.pe((c + a) / 2), l = n.pe((d + b) / 2), h == p && l == r)
			{
				if ((c != a || d != b) && this.jm(c + this.a.c.ea, d + this.a.c.ia, e, f, !1)) return g.x = c, g.y = d, !0;
				g.x = h;
				g.y = l;
				return !1
			}
			while (1)
		},
		AH: function(a, b, c, d, e, f)
		{
			var g = n.pe((a + c) / 2),
				h = n.pe((b +
					d) / 2),
				l, p;
			do
				if (this.Lg(g, h, e))
				{
					if (c = g, d = h, l = g, p = h, g = n.pe((c + a) / 2), h = n.pe((d + b) / 2), g == l && h == p) return c == a && d == b || !this.Lg(a, b, e) || (g = a, h = b), f.x = g, f.y = h, !0
				}
			else
			if (a = g, b = h, l = g, p = h, g = n.pe((c + a) / 2), h = n.pe((d + b) / 2), g == l && h == p)
			{
				if ((c != a || d != b) && this.Lg(c, d, e)) return f.x = c, f.y = d, !0;
				f.x = g;
				f.y = h;
				return !1
			}
			while (1)
		},
		Ur: function(a)
		{
			this.a.b.Oc == O.AE && (250 < a && (a = 250), 0 > a && (a = 0), this.Ur(a));
			this.a.b.Oc == O.qj && this.xd.Ur(a)
		},
		Sr: function(a)
		{
			this.a.b.Oc == O.bt && (250 < a && (a = 250), 0 > a && (a = 0), this.Sr(a));
			this.a.b.Oc ==
				O.qj && this.xd.Sr(a)
		},
		Lb: function()
		{
			return this.a.b.Oc == O.qj && this.xd.Lb ? this.xd.Lb() : this.a.b.Ma
		},
		Ab: function() {},
		start: function() {}
	};
	sa.pI = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 30, 31, 0, 1, 4, 3, 2, 1, 0, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 24, 25, 26, 27, 27, 28, 28, 28, 28, 29, 29, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 16, 17, 18, 19, 19, 20, 20, 20, 20, 21, 21, 22, 23, 24, 25, 28, 27, 26, 25, 0, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 20, 21, 22, 22, 23, 24, 24, 24, 24, 25, 26, 27, 28,
		29, 30, 8, 7, 6, 5, 4, 8, 9, 10, 11, 11, 12, 12, 12, 12, 13, 13, 14, 15, 16, 17, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 16, 15, 14, 13, 12, 11, 10, 9, 8, 12, 13, 14, 15, 15, 16, 16, 16, 16, 17, 17, 18, 19, 20, 21, 24, 23, 22, 21, 20, 19, 18, 17, 16, 17, 18, 19, 20, 21, 22, 23, 24, 23, 22, 21, 20, 19, 18, 17, 16, 17, 18, 19, 20, 21, 22, 23, 24, 23, 22, 21, 20, 19, 18, 17, 3, 3, 4, 4, 4, 4, 5, 5, 6, 7, 8, 9, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 31, 30, 29, 28, 0, 1, 2, 0, 0, 1, 1, 2, 3, 4, 5, 8, 7, 6, 5, 4, 3, 2, 1, 0, 31, 30, 29, 28, 27, 26, 25, 24, 28,
		29, 30, 31, 31, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 31, 30, 29, 28, 27, 26, 25, 24, 25, 26, 27, 28, 29, 30, 31, 0, 31, 30, 29, 28, 27, 25, 25, 24, 25, 26, 27, 28, 29, 30, 31, 0, 4, 5, 6, 7, 7, 8, 8, 8, 8, 9, 9, 10, 11, 12, 13, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 16, 15, 14, 13, 12, 11, 10, 9, 8, 9, 10, 11, 12, 13, 14, 15, 16, 15, 14, 13, 12, 11, 10, 9, 8, 9, 10, 11, 12, 13, 14, 15, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
		29, 30, 31
	];
	sa.CE = [4294967292, 4294967294, 4294967295];
	sa.VE = [-4, 4, -2, 2, -1, 1];
	sa.WE = [-4, 4, -4, 4, -4, 4];
	sa.prototype = n.extend(new G,
	{
		X: function(a, b)
		{
			this.a = a;
			this.a.cg = 0;
			this.a.dg = 0;
			this.a.b.Z = b.xn;
			this.a.b.Ua = b.xn;
			this.a.b.Lh = b.xn;
			this.Kk = b.xn << 8;
			var c = b.lA;
			0 != c && (c = this.Jj(c), this.a.b.Lh = 0);
			this.je = c;
			this.px = b.kA;
			this.ap = b.jA;
			this.bp = sa.CE[this.ap];
			this.ci = !1;
			this.Os = -1;
			this.Jk = this.cp = (100 - b.mA) / 8;
			this.Bn(b);
			this.a.b.L = !0
		},
		move: function()
		{
			this.a.w.Yi = !1;
			this.a.c.uk = 1;
			this.a.b.fe = v.tc;
			null != this.a.U &&
				this.a.U.Ce();
			if (0 != this.je)
			{
				var a = this.Kk;
				if (0 < a)
				{
					var b = this.je;
					0 != (this.a.c.A.Hb & E.Hc) && (b *= this.a.c.pc);
					a -= b;
					0 > a && (a = 0);
					this.Kk = a;
					this.a.b.Z = a >> 8
				}
			}
			this.Ei(this.a.b.Z, this.a.c.Lb(this.a))
		},
		stop: function()
		{
			0 == this.Db && (this.Db = this.a.b.Z | 32768, this.Kk = this.a.b.Z = 0, this.a.w.N = !0)
		},
		start: function()
		{
			var a = this.Db;
			0 != a && (a &= 32767, this.a.b.Z = a, this.Kk = a << 8, this.Db = 0, this.a.w.N = !0)
		},
		De: function()
		{
			if (0 == this.Db && this.a.c.Yb != this.Os)
			{
				this.Os = this.a.c.Yb;
				this.Pd == this.a.c.Wc && this.nA(this.ci);
				var a = this.a.v,
					b = this.a.u,
					c = 0,
					a = a - 8,
					b = b - 8;
				0 == this.Lg(a, b, this.ci) && (c |= 1);
				a += 16;
				0 == this.Lg(a, b, this.ci) && (c |= 2);
				b += 16;
				0 == this.Lg(a, b, this.ci) && (c |= 4);
				0 == this.Lg(a - 16, b, this.ci) && (c |= 8);
				a = sa.pI[32 * c + this.a.c.Lb(this.a)];
				a &= this.bp;
				if (!this.Dn(a))
				{
					var c = b = sa.WE[2 * this.ap + 1],
						d = !1;
					do {
						a -= b;
						a &= 31;
						if (this.Dn(a))
						{
							d = !0;
							break
						}
						a += 2 * b;
						a &= 31;
						if (this.Dn(a))
						{
							d = !0;
							break
						}
						a -= b;
						a &= 31;
						b += c
					} while (16 >= b);
					if (0 == d)
					{
						this.ci = !0;
						this.a.b.Ma = this.a.c.random(32) & this.bp;
						this.a.w.Yi = !0;
						this.a.w.N = !0;
						return
					}
				}
				this.ci = !1;
				this.a.b.Ma = a;
				a = this.a.c.random(100);
				if (a < this.px && (a >>= 2, 25 > a && (a = a - 12 & 31 & this.bp, this.Dn(a))))
				{
					this.a.b.Ma = a;
					this.a.w.Yi = !0;
					this.a.w.N = !0;
					return
				}
				a = this.a.c.Lb(this.a) & 7;
				12 != this.Jk && (0 == a ? (this.Jk--, 0 > this.Jk && (a = this.a.c.Lb(this.a) + sa.VE[this.a.c.random(2) + 2 * this.ap], a &= 31, this.Dn(a) && (this.a.b.Ma = a, this.Jk = this.cp))) : this.Jk = this.cp);
				this.a.w.Yi = !0;
				this.a.w.N = !0
			}
		},
		Dn: function(a)
		{
			var b = 2048 * G.kj[a] + (65536 * this.a.v + (this.a.cg & 65535));
			a = 2048 * G.tj[a] + (65536 * this.a.u + (this.a.dg & 65535));
			b = Math.floor(b / 65536);
			a = Math.floor(a / 65536);
			return this.Lg(b,
				a, !1)
		},
		Te: function() {},
		Ue: function(a)
		{
			0 > a && (a = 0);
			250 < a && (a = 250);
			this.a.b.Z = a;
			this.Kk = a << 8;
			this.Db = 0;
			this.a.w.N = !0
		},
		Dg: function(a)
		{
			this.Ue(a)
		},
		reverse: function()
		{
			0 == this.Db && (this.a.w.N = !0, this.a.b.Ma += 16, this.a.b.Ma &= 31)
		},
		ac: function(a)
		{
			this.a.v != a && (this.a.v = a, this.a.w.N = !0, this.a.b.L = !0, this.a.b.La = !0)
		},
		bc: function(a)
		{
			this.a.u != a && (this.a.u = a, this.a.w.N = !0, this.a.b.L = !0, this.a.b.La = !0)
		}
	});
	Fd.prototype = n.extend(new G,
	{
		X: function(a)
		{
			this.a = a;
			this.l = a.c;
			this.l.ix();
			null != this.a.D && this.a.D.Qr(!1);
			null != this.a.D && (this.a.D.V &= ~w.Sf, this.a.D.Kn());
			this.ep = !0;
			this.a.cg = 0;
			this.a.dg = 0;
			null != this.a.U && this.a.U.Pz(v.tc);
			this.a.b.Z = 0;
			this.a.b.La = !0;
			this.a.b.L = !0
		},
		vq: function(a)
		{
			this.a.b.Ua = this.a.b.Z;
			this.a.b.Lh = this.a.b.Z;
			this.Lk = a
		},
		Ab: function()
		{
			this.jG(this.a)
		},
		move: function()
		{
			if (this.ep)
			{
				if (null != this.Lk.U && this.Lk.U.Jh == v.Jo) return;
				this.sC()
			}
			null != this.a.U && this.a.U.Ce();
			this.Ei(this.a.b.Z, this.a.c.Lb(this.a));
			if (-64 > this.a.v || this.a.v > this.a.c.ge + 64 || -64 > this.a.u || this.a.u > this.a.c.he + 64) this.a.jn = !1, this.a.c.kf(this.a.yb);
			this.a.b.La && (this.a.b.La = !1, this.a.c.yf(this.a))
		},
		sC: function()
		{
			null != this.a.D && this.a.D.Qr(!0);
			null != this.a.D && (this.a.D.V |= w.Sf, this.a.D.Zq());
			if (null != this.l.Ph)
			{
				var a = this.l.To(this.Lk);
				if (null != a)
				{
					var b = this.l.Ph,
						c = new aa;
					this.Ps = c;
					c.dE(this.a, aa.xE);
					c.xH = b.identifier;
					this.vm = b.SO(a.wH, this.a.b.Z / 250 * 50, c);
					c.vH = this.vm;
					null == this.vm && (this.Ps = null)
				}
			}
			this.ep = !1;
			this.Lk = null
		},
		jG: function()
		{
			null != this.vm && (pBase = this.a.c.Ph, pBase.TO(this.vm), this.vm = null);
			null != this.Ps &&
				(this.Ps = null)
		},
		ac: function(a)
		{
			this.a.v != a && (this.a.v = a, this.a.w.N = !0, this.a.b.L = !0, this.a.b.La = !0)
		},
		bc: function(a)
		{
			this.a.u != a && (this.a.u = a, this.a.w.N = !0, this.a.b.L = !0, this.a.b.La = !0)
		},
		Te: function() {},
		reverse: function() {},
		stop: function() {},
		start: function() {},
		De: function() {},
		Ue: function() {},
		Dg: function() {}
	});
	Gd.prototype = n.extend(new G,
	{
		X: function(a)
		{
			this.a = a
		},
		move: function()
		{
			0 == (this.a.W & F.ai) && null != this.a.U && (this.a.U.Ce(), this.a.U.vg != v.Ck + 1 && this.a.c.kf(this.a.yb))
		},
		ac: function(a)
		{
			this.a.v !=
				a && (this.a.v = a, this.a.w.N = !0, this.a.b.L = !0)
		},
		bc: function(a)
		{
			this.a.u != a && (this.a.u = a, this.a.w.N = !0, this.a.b.L = !0)
		},
		Te: function() {},
		reverse: function() {},
		stop: function() {},
		start: function() {},
		De: function() {},
		Ue: function() {},
		Dg: function() {}
	});
	Hd.prototype = n.extend(new G,
	{
		X: function(a, b)
		{
			this.a = a;
			this.a.cg = 0;
			this.Pf = this.a.dg = 0;
			this.Ug = this.a.b.Z = 0;
			this.Qs = -1;
			this.a.b.Mh = b.vl;
			this.po = b.qA;
			this.Ag = this.Jj(this.po);
			this.qo = b.rA;
			this.je = this.Jj(this.qo);
			this.a.b.Ua = b.tA;
			this.a.b.Lh = 0;
			this.Rs = b.sA;
			this.Zi =
				b.Sq;
			this.a.b.L = !0
		},
		move: function()
		{
			var a, b, c, d;
			this.a.c.uk = 1;
			a = this.a.c.Lb(this.a);
			this.a.b.Tv = a;
			if (0 == this.Ug)
			{
				this.a.w.Yi = !1;
				b = 0;
				c = this.a.c.Pc[this.a.b.Mh - 1] & 15;
				0 != c && (d = G.jE[c], -1 != d && 0 != (1 << d & this.Rs) && (b = 1, a = d));
				c = this.Pf;
				0 == b ? 0 != c && (b = this.je, 0 != (this.a.c.A.Hb & E.Hc) && (b *= this.a.c.pc), c -= b, 0 >= c && (c = 0)) : c >> 8 < this.a.b.Ua && (b = this.Ag, 0 != (this.a.c.A.Hb & E.Hc) && (b *= this.a.c.pc), c += b, c >> 8 > this.a.b.Ua && (c = this.a.b.Ua << 8));
				this.Pf = c;
				this.a.b.Z = c >> 8;
				this.a.b.Ma = a;
				this.a.b.fe = v.tc;
				null != this.a.U && this.a.U.Ce();
				if (0 == this.Ei(this.a.b.Z, this.a.c.Lb(this.a))) return;
				if (0 == this.a.b.Z)
				{
					c = this.Pf;
					if (0 == c || this.a.b.Tv == this.a.c.Lb(this.a)) return;
					this.a.b.Z = c >> 8;
					this.a.b.Ma = this.a.b.Tv;
					if (0 == this.Ei(this.a.b.Z, this.a.c.Lb(this.a))) return
				}
			}
			for (; 0 != this.Ug && 0 != this.a.c.uk;)
				if (c = this.Pf, c -= this.je, 0 < c)
				{
					if (this.Pf = c, c >>= 8, this.a.b.Z = c, d = this.a.c.Lb(this.a), 0 != this.Ug && (d += 16, d &= 31), 0 == this.Ei(c, d)) break
				}
			else
			{
				this.Pf = 0;
				this.Ug = this.a.b.Z = 0;
				break
			}
		},
		De: function()
		{
			this.Pd == this.a.c.Wc && this.Cn(0 != (this.Zi & G.ym));
			this.a.c.Yb !=
				this.Qs && (this.Qs = this.a.c.Yb, this.Ug++, 12 <= this.Ug ? this.stop() : (this.a.w.Yi = !0, this.a.w.N = !0))
		},
		reverse: function() {},
		Te: function() {},
		stop: function()
		{
			this.Pf = this.Ug = this.a.b.Z = 0;
			this.a.w.N = !0;
			this.Pd == this.a.c.Wc && (this.Cn(0 != (this.Zi & G.ym)), this.Ug = 0)
		},
		start: function()
		{
			this.a.w.N = !0;
			this.Db = 0
		},
		Dg: function(a)
		{
			0 > a && (a = 0);
			250 < a && (a = 250);
			this.a.b.Ua = a;
			this.a.b.Z > a && (this.a.b.Z = a, this.Pf = a << 8);
			this.a.w.N = !0
		},
		Ue: function(a)
		{
			0 > a && (a = 0);
			250 < a && (a = 250);
			a > this.a.b.Ua && (a = this.a.b.Ua);
			this.a.b.Z = a;
			this.Pf =
				a << 8;
			this.a.w.N = !0
		},
		ac: function(a)
		{
			this.a.v != a && (this.a.v = a, this.a.w.N = !0, this.a.b.L = !0, this.a.b.La = !0)
		},
		bc: function(a)
		{
			this.a.u != a && (this.a.u = a, this.a.w.N = !0, this.a.b.L = !0, this.a.b.La = !0)
		},
		aP: function(a)
		{
			this.Rs = a
		}
	});
	Id.prototype = n.extend(new G,
	{
		X: function(a, b)
		{
			this.a = a;
			this.a.b.Mh = b.vl;
			this.Ss = b.uA + this.a.v;
			this.Ts = b.vA + this.a.u;
			this.Us = b.wA + this.a.v;
			this.Vs = b.xA + this.a.u;
			this.gp = this.fp = this.a.b.Z = 0;
			this.a.b.Lh = 0;
			this.a.b.Ua = 100;
			this.Zi = b.Sq;
			this.Bn(b);
			this.a.b.L = !0
		},
		move: function()
		{
			var a = this.a.v,
				b = this.a.u,
				c, d, e, f;
			if (0 == this.Db && 0 != this.a.c.zr[this.a.b.Mh - 1] && (a = this.a.c.io, a < this.Ss && (a = this.Ss), a > this.Us && (a = this.Us), b = this.a.c.jo, b < this.Ts && (b = this.Ts), b > this.Vs && (b = this.Vs), c = a - this.a.v, d = b - this.a.u, e = 0, 0 > c && (c = -c, e |= 1), 0 > d && (d = -d, e |= 2), f = c + d << 2, 250 < f && (f = 250), this.a.b.Z = f, 0 != f))
			{
				0 == d && (d = 1);
				c = (c << 8) / d;
				for (d = 0; !(c >= G.Ek[d]); d += 2);
				c = G.Ek[d + 1];
				0 != (e & 2) && (c = -c + 32 & 31);
				0 != (e & 1) && (c = (-(c - 8 & 31) & 31) + 8 & 31);
				this.a.b.Ma = c
			}
			0 != this.a.b.Z && (this.gp = 0, this.fp = this.a.b.Z);
			this.gp++;
			10 < this.gp && (this.fp =
				0);
			this.a.b.Z = this.fp;
			null != this.a.U && this.a.U.Ce();
			this.a.v = a;
			this.a.u = b;
			this.a.b.L = !0;
			this.a.c.Wc++;
			this.Pd = this.a.c.Wc;
			this.a.c.yf(this.a)
		},
		stop: function()
		{
			this.Pd == this.a.c.Wc && this.Cn(0 != (this.Zi & G.ym));
			this.a.b.Z = 0
		},
		start: function()
		{
			this.Db = 0;
			this.a.w.N = !0
		},
		De: function()
		{
			this.stop()
		},
		reverse: function() {},
		Te: function() {},
		ac: function(a)
		{
			this.a.v != a && (this.a.v = a, this.a.w.N = !0, this.a.b.L = !0, this.a.b.La = !0)
		},
		bc: function(a)
		{
			this.a.u != a && (this.a.u = a, this.a.w.N = !0, this.a.b.L = !0, this.a.b.La = !0)
		}
	});
	Jd.prototype =
		n.extend(new G,
		{
			X: function(a, b)
			{
				this.a = a;
				this.lp = this.a.v;
				this.mp = this.a.u;
				this.bd = !1;
				this.Yg = 0;
				this.a.ol = 0;
				this.za = b;
				this.a.b.Lh = b.NA;
				this.a.b.Ua = b.MA;
				this.Xg = 0;
				this.Qk = null;
				this.Wj(0);
				this.Bn(b);
				this.a.b.Z = this.uc;
				this.a.b.L = !0;
				0 == this.za.Ra.length && this.stop()
			},
			move: function()
			{
				this.a.ol = 0;
				this.a.b.fe = v.tc;
				null != this.a.U && this.a.U.Ce();
				if (0 == this.uc)
				{
					var a = this.Yg;
					if (0 == a)
					{
						this.a.b.Z = 0;
						this.a.c.yf(this.a);
						return
					}
					a -= this.a.c.oo;
					if (0 < a)
					{
						this.Yg = a;
						this.a.b.Z = 0;
						this.a.c.yf(this.a);
						return
					}
					this.Yg = 0;
					this.uc = this.Db & 32767;
					this.Db = 0;
					this.a.b.Z = this.uc
				}
				a = 0 != (this.a.c.A.Hb & E.Hc) ? 256 * this.a.c.pc : 256;
				this.a.c.Rh = a;
				for (var b;;)
				{
					b = !1;
					this.a.c.no = a;
					a *= this.uc;
					a <<= 5;
					524288 >= a ? this.a.c.kw = a : (a = 16384, a /= this.uc, this.a.c.no = a, this.a.c.kw = 524288);
					for (;;)
					{
						this.jp = !1;
						if (1 == this.OA(this.a.c.kw) && 0 == this.jp)
						{
							b = !0;
							break
						}
						if (this.a.c.Rh == this.a.c.no)
						{
							b = !0;
							break
						}
						if (this.a.c.Rh > this.a.c.no)
						{
							this.a.c.Rh -= this.a.c.no;
							a = this.a.c.Rh;
							break
						}
						a = this.a.c.Rh * MT_Speed;
						a <<= 5;
						this.OA(a);
						b = !0;
						break
					}
					if (b) break
				}
			},
			OA: function(a)
			{
				a +=
					this.Xg;
				var b = a >>> 16;
				if (b < this.kp) return this.Xg = a, a = b * this.xm / 16384 + this.$g, this.a.v = b * this.wm / 16384 + this.Zg, this.a.u = a, this.a.b.L = !0, this.a.c.yf(this.a), this.a.w.N;
				b -= this.kp;
				a = b << 16 | a & 65535;
				0 != this.uc && (a /= this.uc);
				this.a.c.Rh += a >> 5 & 65535;
				this.a.v = this.oj;
				this.a.u = this.pj;
				this.a.b.L = !0;
				this.a.c.yf(this.a);
				if (this.a.w.N) return !0;
				this.a.ol = this.a.c.Yb;
				this.a.nl = null;
				b = this.Td;
				this.Xg = 0;
				if (0 == this.bd)
				{
					b++;
					if (b < this.za.ul)
					{
						this.a.nl = this.za.Ra[b].ae;
						if (null != this.Qk && null != this.za.Ra[b].ae && n.xb(this.Qk,
								this.za.Ra[b].ae)) return this.Td = b, this.Ie(), this.Rq();
						this.Wj(b);
						this.Ie();
						return this.a.w.N
					}
					this.a.rq = this.a.c.Yb;
					this.Td = b;
					if (this.bd) return this.Ie(), this.a.w.N;
					if (0 != this.za.RA) return this.bd = !0, b--, this.a.nl = this.za.Ra[b].ae, this.tl(b), this.Ie(), this.a.w.N;
					this.QA();
					if (0 == this.za.fv) return this.Rq(), this.Ie(), this.a.w.N;
					b = 0
				}
				else
				{
					if (null != this.Qk && null != this.za.Ra[b].ae && n.xb(this.Qk, this.za.Ra[b].ae)) return this.Ie(), this.Rq();
					this.a.nl = this.za.Ra[b].ae;
					this.Yg = this.za.Ra[b].Yu;
					b--;
					if (0 <= b) return this.tl(b),
						this.Ie(), this.a.w.N;
					this.QA();
					if (0 == this.bd) return this.Ie(), this.a.w.N;
					if (0 == this.za.fv) return this.Rq(), this.Ie(), this.a.w.N;
					b = 0;
					this.bd = !1
				}
				this.Wj(b);
				this.Ie();
				return this.a.w.N
			},
			Wj: function(a)
			{
				a >= this.za.Ra.length ? this.stop() : (this.bd = !1, this.Td = a, this.Yg = this.za.Ra[a].Yu, this.wm = this.za.Ra[a].Uu, this.xm = this.za.Ra[a].Zu, this.Zg = this.a.v, this.$g = this.a.u, this.oj = this.a.v + this.za.Ra[a].Wu, this.pj = this.a.u + this.za.Ra[a].Xu, this.a.b.Ma = this.za.Ra[a].Vu, this.LA())
			},
			tl: function(a)
			{
				a >= this.za.Ra.length ?
					this.stop() : (this.bd = !0, this.Td = a, this.wm = -this.za.Ra[a].Uu, this.xm = -this.za.Ra[a].Zu, this.Zg = this.a.v, this.$g = this.a.u, this.oj = this.a.v - this.za.Ra[a].Wu, this.pj = this.a.u - this.za.Ra[a].Xu, this.a.b.Ma = this.za.Ra[a].Vu + 16 & 31, this.LA())
			},
			LA: function()
			{
				this.kp = this.za.Ra[this.Td].oA;
				var a = this.za.Ra[this.Td].pA,
					b = this.Yg;
				0 != b && (this.Yg = 20 * b, this.Db = a |= 32768);
				0 != this.Db && (a = 0);
				if (a != this.uc || 0 != a) this.uc = a, this.jp = this.a.w.N = !0;
				this.a.b.Z = this.uc
			},
			Ie: function()
			{
				this.a.ol == this.a.c.Yb && (this.a.c.j.Bc = 0,
					this.a.c.j.ed(this.a, -1310720 | this.a.wa & 65535), this.a.c.j.ed(this.a, -2293760 | this.a.wa & 65535));
				this.a.rq == this.a.c.Yb && (this.a.c.j.Bc = 0, this.a.c.j.ed(this.a, -1376256 | this.a.wa & 65535))
			},
			Rq: function()
			{
				this.Db = this.uc = 0;
				this.a.w.N = !0;
				this.jp = !1;
				return !0
			},
			QA: function()
			{
				0 != this.za.PA && (this.a.v = this.lp, this.a.u = this.mp, this.a.b.L = !0)
			},
			JO: function(a)
			{
				var b;
				for (b = 0; b < this.za.ul; b++)
					if (null != this.za.Ra[b].ae && n.xb(a, this.za.Ra[b].ae))
					{
						0 == this.bd ? (this.Wj(b), this.a.ol = this.a.c.Yb, this.a.nl = this.za.Ra[b].ae,
							this.a.rq = 0, this.Ie()) : 0 < b && (b--, this.tl(b), this.a.ol = this.a.c.Yb, this.a.nl = this.za.Ra[b].ae, this.a.rq = 0, this.Ie());
						this.a.w.N = !0;
						break
					}
			},
			KO: function(a)
			{
				var b;
				for (b = 0; b < this.za.ul; b++)
					if (null != this.za.Ra[b].ae && n.xb(a, this.za.Ra[b].ae))
					{
						if (b == this.Td && 0 == this.Xg) break;
						this.Qk = a;
						if (0 == this.bd)
							if (b > this.Td)
							{
								if (0 != this.uc) break;
								0 != (this.Db & 32768) ? this.start() : this.Wj(this.Td)
							}
						else
						{
							if (0 != this.uc)
							{
								this.reverse();
								break
							}
							0 != (this.Db & 32768) ? (this.start(), this.reverse()) : this.tl(MT_MoveNumber - 1)
						}
						else if (b <=
							this.Td)
						{
							if (0 != this.uc) break;
							0 != (this.Db & 32768) ? this.start() : this.tl(this.Td - 1)
						}
						else
						{
							if (0 != this.uc)
							{
								this.reverse();
								break
							}
							0 != (this.Db & 32768) ? (this.start(), this.reverse()) : this.Wj(this.Td)
						}
						break
					}
			},
			stop: function()
			{
				0 == this.Db && (this.Db = this.uc | 32768);
				this.uc = 0;
				this.a.w.N = !0
			},
			start: function()
			{
				0 != (this.Db & 32768) && (this.uc = this.Db & 32767, this.Db = this.Yg = 0, this.a.w.N = !0)
			},
			reverse: function()
			{
				if (0 == this.Db)
				{
					this.a.w.N = !0;
					var a = this.Td;
					if (0 == this.Xg)(this.bd = !this.bd) ? 0 == a ? this.bd = !this.bd : (a--, this.tl(a)) : this.Wj(a);
					else
					{
						this.bd = !this.bd;
						this.wm = -this.wm;
						this.xm = -this.xm;
						var a = this.Zg,
							b = this.oj;
						this.Zg = b;
						this.oj = a;
						a = this.$g;
						this.$g = b = this.pj;
						this.pj = a;
						this.a.b.Ma += 16;
						this.a.b.Ma &= 31;
						a = this.Xg >>> 16;
						a = this.kp - a;
						this.Xg = a << 16 | this.Xg & 65535
					}
				}
			},
			ac: function(a)
			{
				var b = this.a.v;
				this.a.v = a;
				b -= this.Zg;
				a -= b;
				this.oj = b = this.oj - this.Zg + a;
				b = this.Zg;
				this.Zg = a;
				this.lp -= b - a;
				this.a.w.N = !0;
				this.a.b.L = !0;
				this.a.b.La = !0
			},
			bc: function(a)
			{
				var b = this.a.u;
				this.a.u = a;
				b -= this.$g;
				a -= b;
				this.pj = b = this.pj - this.$g + a;
				b = this.$g;
				this.$g = a;
				this.mp -=
					b - a;
				this.a.w.N = !0;
				this.a.b.L = !0;
				this.a.b.La = !0
			},
			Ue: function(a)
			{
				0 > a && (a = 0);
				250 < a && (a = 250);
				this.uc = a;
				this.a.b.Z = a;
				this.a.w.N = !0
			},
			Dg: function(a)
			{
				this.Ue(a)
			},
			Te: function() {}
		});
	K.CL = 0;
	K.vE = 1;
	K.AL = 2;
	K.BL = 3;
	K.Vg = 0;
	K.Mk = 1;
	K.ip = 2;
	K.hp = 3;
	K.qx = 4;
	K.rx = 5;
	K.prototype = n.extend(new G,
	{
		X: function(a, b)
		{
			this.a = a;
			this.l = this.a.c;
			this.a.cg = 0;
			this.Cd = this.a.dg = 0;
			this.a.b.Z = 0;
			this.a.b.Mh = b.vl;
			this.po = b.BA;
			this.Ag = this.Jj(this.po);
			this.qo = b.CA;
			this.je = this.Jj(this.qo);
			this.a.b.Ua = b.GA;
			this.a.b.Lh = 0;
			this.Ws = b.DA;
			this.sx =
				b.EA;
			var c = b.FA;
			3 < c && (c = K.vE);
			this.tx = c;
			this.Nk = this.nd = 0;
			this.Ok = null;
			this.Bn(b);
			this.a.b.L = !0;
			this.eb = K.Vg
		},
		move: function()
		{
			var a, b;
			this.a.c.uk = 1;
			a = this.a.c.Pc[this.a.b.Mh - 1];
			this.Ct();
			b = this.Cd;
			var c;
			0 == this.Nk && (0 >= b && (0 != (a & 4) ? (c = this.Ag, 0 != (this.a.c.A.Hb & E.Hc) && (c *= this.a.c.pc), b -= c, b / 256 < -this.a.b.Ua && (b = 256 * -this.a.b.Ua)) : 0 > b && (c = this.je, 0 != (this.a.c.A.Hb & E.Hc) && (c *= this.a.c.pc), b += c, 0 < b && (b = 0)), 0 != (a & 8) && (b = -b)), 0 <= b && (0 != (a & 8) ? (c = this.Ag, 0 != (this.a.c.A.Hb & E.Hc) && (c *= this.a.c.pc), b += c, b /
				256 > this.a.b.Ua && (b = 256 * this.a.b.Ua)) : 0 < b && (c = this.je, 0 != (this.a.c.A.Hb & E.Hc) && (c *= this.a.c.pc), b -= c, 0 > b && (b = 0)), 0 != (a & 4) && (b = -b)), this.Cd = b);
			var d = this.nd;
			for (c = !1;;)
			{
				switch (this.eb)
				{
					case 2:
					case 3:
						c = this.Ws << 5;
						0 != (this.a.c.A.Hb & E.Hc) && (c *= this.a.c.pc);
						d += c;
						64E3 < d && (d = 64E3);
						break;
					case 0:
						if (0 != (a & 1))
						{
							if (this.l.Vf(this.a.ud, this.a.v + this.Ze, this.a.u + this.$e - 4) == h.Ye) break;
							this.eb = K.Mk;
							c = !0;
							continue
						}
						if (0 != (a & 2) && this.l.Vf(this.a.ud, this.a.v + this.Ze, this.a.u + this.$e + 4) != h.Ye)
						{
							this.eb = K.Mk;
							c = !0;
							continue
						}
						break;
					case 1:
						if (0 == c && (this.Nk = 0, this.l.Vf(this.a.ud, this.a.v + this.Ze, this.a.u + this.$e) == h.Ye && this.l.Vf(this.a.ud, this.a.v + this.Ze, this.a.u + this.$e - 4) == h.Ye)) break;
						0 >= d && (0 != (a & 1) ? (c = this.Ag, 0 != (this.a.c.A.Hb & E.Hc) && (c *= this.a.c.pc), d -= c, c = d / 256, c < -this.a.b.Ua && (d = 256 * -this.a.b.Ua)) : (c = this.je, 0 != (this.a.c.A.Hb & E.Hc) && (c *= this.a.c.pc), d += c, 0 < d && (d = 0)), 0 != (a & 2) && (d = -d));
						0 <= d && (0 != (a & 2) ? (c = this.Ag, 0 != (this.a.c.A.Hb & E.Hc) && (c *= this.a.c.pc), d += c, c = d / 256, c > this.a.b.Ua && (d = 256 * this.a.b.Ua)) : (c = this.je, 0 != (this.a.c.A.Hb &
							E.Hc) && (c *= this.a.c.pc), d -= c, 0 > d && (d = 0)), 0 != (a & 1) && (d = -d))
				}
				break
			}
			this.nd = d;
			var e = 0;
			0 > b && (e = 16);
			c = b;
			var f = d;
			if (0 != f)
			{
				var g = 0;
				0 > c && (g |= 1, c = -c);
				0 > f && (g |= 2, f = -f);
				c = (c << 8) / f;
				for (e = 0; !(c >= G.Ek[e]); e += 2);
				e = G.Ek[e + 1];
				0 != (g & 2) && (e = -e + 32 & 31);
				0 != (g & 1) && (e = (-(e - 8 & 31) & 31) + 8 & 31)
			}
			c = b;
			g = G.kj[e];
			f = G.tj[e];
			0 > g && (g = -g);
			0 > f && (f = -f);
			g < f && (g = f, c = d);
			0 > c && (c = -c);
			c /= g;
			250 < c && (c = 250);
			this.a.b.Z = c;
			switch (this.eb)
			{
				case 1:
					0 > d ? this.a.b.Ma = 8 : 0 < d && (this.a.b.Ma = 24);
					break;
				case 3:
					this.a.b.Ma = e;
					break;
				default:
					0 > b ? this.a.b.Ma = 16 : 0 < b &&
						(this.a.b.Ma = 0)
			}
			switch (this.eb)
			{
				case 4:
					this.a.b.fe = v.os;
					break;
				case 5:
					this.a.b.fe = v.Ko;
					break;
				case 3:
					this.a.b.fe = v.Kw;
					break;
				case 2:
					this.a.b.fe = v.Lw;
					break;
				case 1:
					this.a.b.fe = v.Jw;
					break;
				default:
					this.a.b.fe = v.tc
			}
			null != this.a.U && this.a.U.Ce();
			this.Ct();
			this.Ei(this.a.b.Z, e);
			this.eb != K.Vg && this.eb != K.Mk || 0 != this.mj || (b = !1, d = this.tx, 0 != d && (d--, 0 == d ? (5 == (a & 5) && (b = !0), 9 == (a & 9) && (b = !0)) : 0 != (a & d << 4) && (b = !0)), b && (this.nd = -this.sx << 8, this.eb = K.ip));
			switch (this.eb)
			{
				case 2:
					0 <= this.nd && (this.eb = K.hp);
					break;
				case 3:
					this.l.Vf(this.a.ud,
						this.a.v + this.Ze, this.a.u + this.$e) != h.Ye && (this.nd = 0, this.eb = K.Mk, this.a.b.Ma = 8);
					break;
				case 0:
					if (0 != (a & 3) && 0 == (a & 12) && this.l.Vf(this.a.ud, this.a.v + this.Ze, this.a.u + this.$e) != h.Ye)
					{
						this.eb = K.Mk;
						this.Cd = 0;
						break
					}
					0 != (a & 2) && null != this.a.U && this.a.U.Tf(v.os) && (this.Cd = 0, this.eb = K.qx);
					if (this.l.Vf(this.a.ud, this.a.v + this.Ze, this.a.u + this.$e) != h.Ye) break;
					0 == this.jm(this.a.v, this.a.u + 10, this.di, E.Sd, !0) ? (a = this.a.v - this.a.c.ea, b = this.a.u - this.a.c.ia, d = new pa, this.sl(a, b + this.di - 1, a, b, this.di, E.Sd, d), this.a.v =
						d.x + this.a.c.ea, this.a.u = d.y + this.a.c.ia, this.mj = !1) : this.eb = K.hp;
					break;
				case 1:
					if (this.l.Vf(this.a.ud, this.a.v + this.Ze, this.a.u + this.$e) == h.Ye)
					{
						if (0 > this.nd)
							for (f = 0; 32 > f; f++)
								if (this.l.Vf(this.a.ud, this.a.v + this.Ze, this.a.u + this.$e + f) != h.Ye)
								{
									this.a.u += f;
									break
								} this.nd = 0
					}
					0 != (a & 12) && (this.eb = K.Vg, this.nd = 0);
					break;
				case 4:
					0 == (a & 2) && (null != hoPtr.U && this.a.U.Tf(v.Ko) ? (this.eb = K.rx, this.a.b.fe = v.Ko, this.a.U.Ce(), this.a.U.fk = 1) : this.eb = K.Vg);
					break;
				case 5:
					null != this.a.U && 0 == this.a.U.de && (this.eb = K.Vg)
			}
			if (this.eb ==
				K.Vg || this.eb == K.qx || this.eb == K.rx)
			{
				do {
					a = null;
					null != this.a.jc && (a = this.a.jc.Li);
					if (null == this.a.c.yl(this.a, this.a.b.Ia, this.a.b.$a, this.a.b.ub, this.a.b.vb, this.a.v, this.a.u, a) && (a = this.a.c.yl(this.a, this.a.b.Ia, this.a.b.$a, this.a.b.ub, this.a.b.vb, this.a.v, this.a.u + 1, a), null != a && 1 == a.size()))
					{
						a = a.get(0);
						if ((null == this.Ok || this.Ok != a) && this.a.zb != a.zb)
						{
							this.Ok = a;
							this.Xs = a.v;
							this.Ys = a.u;
							break
						}
						b = a.v - this.Xs;
						d = a.u - this.Ys;
						this.Xs = a.v;
						this.Ys = a.u;
						this.a.v += b;
						this.a.u += d;
						this.a.c.yf(this.a);
						this.a.b.L = !0;
						break
					}
					this.Ok = null
				} while (0)
			}
			else this.Ok = null
		},
		cv: function()
		{
			this.nd = this.Cd = this.a.b.Z = 0
		},
		De: function()
		{
			this.stop()
		},
		stop: function()
		{
			if (this.Pd != this.a.c.Wc) this.cv();
			else
			{
				this.a.w.N = !0;
				var a = this.a.v - this.a.c.ea,
					b = this.a.u - this.a.c.ia,
					c;
				switch (this.a.c.j.Kr & 4294901760)
				{
					case -786432:
						a = this.a.v - this.a.fa;
						b = this.a.u - this.a.ga;
						c = this.a.c.ek(a, b, a + this.a.K, b + this.a.J);
						a = this.a.v;
						b = this.a.u;
						0 != (c & h.Qg) && (a = this.a.fa, this.Cd = 0, this.mj = !0);
						0 != (c & h.Rg) && (a = this.a.c.ge - this.a.K + this.a.fa, this.Cd = 0, this.mj = !0);
						0 != (c & h.Sg) && (b = this.a.ga, this.nd = 0, this.mj = !1);
						0 != (c & h.Pg) && (b = this.a.c.he - this.a.J + this.a.ga, this.nd = 0, this.mj = !1);
						this.a.v = a;
						this.a.u = b;
						this.eb = this.eb == K.ip ? K.hp : K.Vg;
						this.Nk = 0;
						break;
					case -851968:
					case -917504:
						if (this.mj = !1, c = new pa, this.eb == K.hp) this.sl(a, b, this.a.b.Ri - this.a.c.ea, this.a.b.Si - this.a.c.ia, this.di, E.Sd, c), this.a.v = c.x + this.a.c.ea, this.a.u = c.y + this.a.c.ia, this.eb = K.Vg, this.a.b.L = !0, this.jm(this.a.v, this.a.u + 1, 0, E.Sd, !0) ? this.Cd = this.a.b.Z = 0 : (this.Nk = 0, this.a.b.Z = Math.abs(this.Cd /
							256), this.nd = 0);
						else
						{
							if (this.eb == K.Vg)
							{
								if (this.sl(a, b, a, b - this.di, 0, E.Sd, c))
								{
									this.a.v = c.x + this.a.c.ea;
									this.a.u = c.y + this.a.c.ia;
									this.a.b.L = !0;
									break
								}
								if (this.sl(a, b, this.a.b.Ri - this.a.c.ea, this.a.b.Si - this.a.c.ia, 0, E.Sd, c))
								{
									this.a.v = c.x + this.a.c.ea;
									this.a.u = c.y + this.a.c.ia;
									this.a.b.L = !0;
									this.cv();
									break
								}
							}
							if (this.eb == K.ip)
							{
								if (this.sl(a, b, a, b - this.di, 0, E.Sd, c))
								{
									this.a.v = c.x + this.a.c.ea;
									this.a.u = c.y + this.a.c.ia;
									this.a.b.L = !0;
									break
								}
								this.Nk = 1;
								this.Cd = 0
							}
							this.eb == K.Mk && this.sl(a, b, this.a.b.Ri - this.a.c.ea, this.a.b.Si -
								this.a.c.ia, 0, E.Sd, c) ? (this.a.v = c.x + this.a.c.ea, this.a.u = c.y + this.a.c.ia, this.a.b.L = !0, this.cv()) : (this.a.b.Ia = this.a.b.wr, this.a.b.$a = this.a.b.vr, this.jm(this.a.v, this.a.u, 0, E.Sd, !0) || (this.a.v = this.a.b.Ri, this.a.u = this.a.b.Si, this.a.b.L = !0))
						}
				}
			}
		},
		ac: function(a)
		{
			this.a.v != a && (this.a.v = a, this.a.w.N = !0, this.a.b.L = !0, this.a.b.La = !0)
		},
		bc: function(a)
		{
			this.a.u != a && (this.a.u = a, this.a.w.N = !0, this.a.b.L = !0, this.a.b.La = !0)
		},
		Ue: function(a)
		{
			0 > a && (a = 0);
			250 < a && (a = 250);
			a > this.a.b.Ua && (a = this.a.b.Ua);
			this.a.b.Z =
				a;
			this.Cd = this.a.b.Z * G.kj[this.a.c.Lb(this.a)];
			this.nd = this.a.b.Z * G.tj[this.a.c.Lb(this.a)];
			this.a.w.N = !0
		},
		Dg: function(a)
		{
			0 > a && (a = 0);
			250 < a && (a = 250);
			this.a.b.Ua = a;
			a <<= 8;
			this.Cd > a && (this.Cd = a);
			this.a.w.N = !0
		},
		Sr: function(a)
		{
			this.Ws = a
		},
		Te: function(a)
		{
			this.a.b.Ma = a;
			this.Cd = this.a.b.Z * G.kj[a];
			this.nd = this.a.b.Z * G.tj[a]
		},
		Ct: function()
		{
			var a;
			0 < this.a.b.Ia ? a = this.a.c.h.ca.Kj(this.a.b.Ia, this.a.b.$a, this.a.b.ub, this.a.b.vb) : (a = new fa, a.width = this.a.K, a.height = this.a.J, a.ya = this.a.fa, a.xa = this.a.ga);
			this.Ze =
				0;
			this.$e = a.height - a.xa;
			this.di = 2 * a.height + a.height >>> 3
		},
		BH: function()
		{
			this.Ct();
			this.l.Vf(this.a.ud, this.a.v + this.Ze, this.a.u + this.$e) == h.Ye && (0 == this.a.c.al(this.a, this.a.b.Ia, this.a.b.$a, this.a.b.ub, this.a.b.vb, this.a.v, this.a.u, 0, E.Mo) && (this.eb == K.ip && 0 > this.nd || 0 == this.a.c.al(this.a, this.a.b.Ia, this.a.b.$a, this.a.b.ub, this.a.b.vb, this.a.v, this.a.u, this.di, E.Sd)) || this.a.c.j.ed(this.a, -851968 | this.a.wa & 65535))
		}
	});
	Wa.$E = [4294967288, 4294967292, 4294967294, 4294967295];
	Wa.prototype = n.extend(new G,
	{
		X: function(a, b)
		{
			this.a = a;
			this.od = 0;
			this.Wg = this.a.b.Z = 0;
			this.ux = -1;
			this.a.b.Mh = b.vl;
			this.po = b.dv;
			this.Ag = this.Jj(b.dv);
			this.qo = b.ev;
			this.je = this.Jj(b.ev);
			this.a.b.Ua = b.KA;
			this.a.b.Lh = 0;
			this.vx = b.IA;
			this.a.w.$i = 0;
			this.Zi = b.Sq;
			this.Zs = 0;
			this.$s = Wa.$E[b.HA];
			this.at = b.JA;
			this.Pk = 0;
			this.nj = this.a.c.Lb(this.a);
			this.a.cg = 0;
			this.a.dg = 0;
			this.Bn(b);
			this.a.b.L = !0
		},
		move: function()
		{
			var a, b, c;
			this.a.c.uk = 1;
			if (0 == this.Wg)
			{
				this.a.w.Yi = !1;
				a = this.a.c.Pc[this.a.b.Mh - 1] & 15;
				b = 0;
				0 != (a & 8) && (b = -1);
				0 != (a & 4) && (b = 1);
				if (0 !=
					b)
				{
					c = this.at;
					0 != (this.a.c.A.Hb & E.Hc) && (c *= this.a.c.pc);
					for (this.Pk += c; 100 < this.Pk;) this.Pk -= 100, this.nj += b, this.nj &= 31, this.a.b.Ma = this.nj & this.$s;
					this.a.b.L = !0
				}
				c = 0;
				0 != this.a.w.$i ? (0 != (a & 1) && (c = 1), 0 != (a & 2) && (c = 2)) : (0 != (a & 1) && (c = 2), 0 != (a & 2) && (c = 1));
				for (b = this.od;;)
				{
					if (0 != (c & 1))
					{
						if (0 == this.od)
						{
							if (0 == this.vx) break;
							if (0 != (this.Zs & 3)) break;
							this.a.w.$i ^= 1;
							c = this.Ag;
							0 != (this.a.c.A.Hb & E.Hc) && (c *= this.a.c.pc);
							b += c;
							c = b >> 8;
							c > this.a.b.Ua && (this.od = b = this.a.b.Ua << 8);
							this.od = b;
							break
						}
						c = this.je;
						0 != (this.a.c.A.Hb &
							E.Hc) && (c *= this.a.c.pc);
						b -= c;
						0 > b && (b = 0);
						this.od = b
					}
					else 0 != (c & 2) && (c = this.Ag, 0 != (this.a.c.A.Hb & E.Hc) && (c *= this.a.c.pc), b += c, c = b >> 8, c > this.a.b.Ua && (this.od = b = this.a.b.Ua << 8), this.od = b);
					break
				}
				this.Zs = a;
				this.a.b.Z = this.od >> 8;
				this.a.b.fe = v.tc;
				null != this.a.U && this.a.U.Ce();
				a = this.a.c.Lb(this.a);
				0 != this.a.w.$i && (a = a + 16 & 31);
				if (0 == this.Ei(this.a.b.Z, a)) return
			}
			do {
				if (0 == this.Wg) break;
				if (0 == this.a.c.uk) break;
				b = this.od;
				b -= this.je;
				if (0 >= b)
				{
					this.Wg = this.od = 0;
					break
				}
				this.od = b;
				b >>= 8;
				a = this.a.c.Lb(this.a);
				0 != this.Wg &&
					(a += 16, a &= 31);
				if (0 == this.Ei(b, a)) break
			} while (1)
		},
		reverse: function() {},
		stop: function()
		{
			this.od = this.Wg = 0;
			this.a.w.$i = 0;
			this.Pd == this.a.c.Wc && (this.Cn(0 != (this.Zi & G.ym)), this.a.w.N = !0)
		},
		start: function()
		{
			this.Db = 0;
			this.a.w.N = !0
		},
		De: function()
		{
			this.Pd == this.a.c.Wc && this.Cn(0 != (this.Zi & G.ym));
			this.a.c.Yb != this.ux && (this.Wg = this.a.w.$i, this.a.w.$i = 0, this.Wg++, 16 <= this.Wg ? this.stop() : (this.a.w.N = !0, this.a.w.Yi = !0))
		},
		Ue: function(a)
		{
			0 > a && (a = 0);
			250 < a && (a = 250);
			a > this.a.b.Ua && (a = this.a.b.Ua);
			this.od = a << 8;
			this.a.w.N = !0
		},
		Dg: function(a)
		{
			0 > a && (a = 0);
			250 < a && (a = 250);
			this.a.b.Ua = a;
			a <<= 8;
			this.od > a && (this.od = a);
			this.a.w.N = !0
		},
		Ur: function(a)
		{
			this.at = a
		},
		ac: function(a)
		{
			this.a.v != a && (this.a.v = a, this.a.w.N = !0, this.a.b.L = !0, this.a.b.La = !0)
		},
		bc: function(a)
		{
			this.a.u != a && (this.a.u = a, this.a.w.N = !0, this.a.b.L = !0, this.a.b.La = !0)
		},
		Te: function(a)
		{
			this.nj = a;
			this.a.b.Ma = a & this.$s
		}
	});
	Xa.prototype = n.extend(new G,
	{
		X: function(a)
		{
			this.a = a;
			this.a.b.Z = 0;
			this.a.b.La = !0;
			this.a.b.L = !0
		},
		move: function()
		{
			null != this.a.U && this.a.U.Ce();
			this.a.b.La &&
				(this.a.b.La = !1, this.a.c.yf(this.a))
		},
		ac: function(a)
		{
			this.a.v != a && (this.a.v = a, this.a.w.N = !0, this.a.b.L = !0);
			this.a.b.La = !0
		},
		bc: function(a)
		{
			this.a.u != a && (this.a.u = a, this.a.w.N = !0, this.a.b.L = !0);
			this.a.b.La = !0
		},
		Te: function() {},
		reverse: function() {},
		stop: function() {},
		start: function() {},
		De: function() {},
		Ue: function() {},
		Dg: function() {}
	});
	(function(a)
	{
		this.xd = a
	}).prototype = n.extend(new G,
	{
		X: function(a, b)
		{
			this.a = a;
			a.c.h.file.Wf(b.data);
			this.a.b.La = !0;
			this.a.b.L = !0
		},
		Ab: function()
		{
			this.xd.Ab()
		},
		move: function()
		{
			this.xd.move() &&
				(this.a.b.L = !0)
		},
		stop: function()
		{
			this.xd.stop(this.Pd == this.a.c.Wc)
		},
		start: function()
		{
			this.xd.start()
		},
		De: function()
		{
			this.xd.De(this.Pd == this.a.c.Wc)
		},
		Ue: function(a)
		{
			this.xd.Ue(a)
		},
		Dg: function(a)
		{
			this.xd.Dg(a)
		},
		reverse: function()
		{
			this.xd.reverse()
		},
		ac: function(a)
		{
			this.xd.ac(a);
			this.a.b.L = !0;
			this.a.b.La = !0
		},
		bc: function(a)
		{
			this.xd.bc(a);
			this.a.b.L = !0;
			this.a.b.La = !0
		},
		Te: function(a)
		{
			this.xd.Te(a);
			this.a.b.L = !0;
			this.a.b.La = !0
		},
		hy: function()
		{
			return 0
		}
	});
	ya.BD = 1;
	ya.Zw = 2;
	ya.FK = 4;
	ya.prototype = {
		X: function(a,
			b, c, d, e)
		{
			null != this.$ && this.$.Ab();
			null != d && (b.b.Ma = d.qy);
			this.ow = b.jc.vv;
			b.b.Oc = -1;
			if (null != c.ng && a < c.ng.Gn)
			{
				c = c.ng.wd[a];
				this.nw = a; - 1 == e && (e = c.gv);
				b.b.Oc = e;
				switch (e)
				{
					case 0:
						this.$ = new Xa;
						break;
					case 1:
						this.$ = new Id;
						break;
					case 2:
						this.$ = new Wa;
						break;
					case 3:
						this.$ = new Hd;
						break;
					case 4:
						this.$ = new sa;
						break;
					case 5:
						this.$ = new Jd;
						break;
					case 9:
						this.$ = new K;
						break;
					case 14:
						this.$ = null, null == this.$ && (this.$ = new Xa)
				}
				b.b.Ma = this.Rt(b, c.SA, b.b.Ma);
				this.$.X(b, c)
			} - 1 == b.b.Oc && (b.b.Oc = 0, this.$ = new Xa, this.$.X(b, null),
				b.b.Ma = 0)
		},
		Oz: function(a, b, c)
		{
			null != this.$ && this.$.Ab();
			a.b.Oc = b;
			switch (b)
			{
				case 11:
					this.$ = new Gd;
					break;
				case 13:
					this.$ = new Fd
			}
			this.$.a = a;
			0 == c && this.$.X(a, null)
		},
		Ab: function()
		{
			this.$.Ab()
		},
		move: function()
		{
			this.$.move()
		},
		Rt: function(a, b, c)
		{
			if (0 > c || 32 <= c)
			{
				var d = 0,
					e = b,
					f;
				for (c = 0; 32 > c; c++) f = e, e >>= 1, 0 != (f & 1) && d++;
				if (0 == d) c = 0;
				else
					for (d = a.c.random(d), e = b, c = 0; !(f = e, e >>= 1, 0 != (f & 1) && (d--, 0 > d)); c++);
			}
			return c
		}
	};
	od(M, oa)
};
