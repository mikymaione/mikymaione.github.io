var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c)
	{
		if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");
		a != Array.prototype && a != Object.prototype && (a[b] = c.value)
	},
	ba = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

function ca()
{
	ca = function() {};
	ba.Symbol || (ba.Symbol = da)
}
var ea = 0;

function da(a)
{
	return "jscomp_symbol_" + (a || "") + ea++
}

function fa()
{
	ca();
	var a = ba.Symbol.iterator;
	a || (a = ba.Symbol.iterator = ba.Symbol("iterator"));
	"function" != typeof Array.prototype[a] && aa(Array.prototype, a,
	{
		configurable: !0,
		writable: !0,
		value: function()
		{
			return ga(this)
		}
	});
	fa = function() {}
}

function ga(a)
{
	var b = 0;
	return ja(function()
	{
		return b < a.length ?
		{
			done: !1,
			value: a[b++]
		} :
		{
			done: !0
		}
	})
}

function ja(a)
{
	fa();
	a = {
		next: a
	};
	a[ba.Symbol.iterator] = function()
	{
		return this
	};
	return a
}

function ka(a, b)
{
	fa();
	a instanceof String && (a += "");
	var c = 0,
		d = {
			next: function()
			{
				if (c < a.length)
				{
					var e = c++;
					return {
						value: b(e, a[e]),
						done: !1
					}
				}
				d.next = function()
				{
					return {
						done: !0,
						value: void 0
					}
				};
				return d.next()
			}
		};
	d[Symbol.iterator] = function()
	{
		return d
	};
	return d
}

function la(a, b)
{
	if (b)
	{
		for (var c = ba, d = a.split("."), e = 0; e < d.length - 1; e++)
		{
			var f = d[e];
			f in c || (c[f] = {});
			c = c[f]
		}
		d = d[d.length - 1];
		e = c[d];
		f = b(e);
		f != e && null != f && aa(c, d,
		{
			configurable: !0,
			writable: !0,
			value: f
		})
	}
}
la("Array.prototype.values", function(a)
{
	return a ? a : function()
	{
		return ka(this, function(a, c)
		{
			return c
		})
	}
});
la("Array.prototype.fill", function(a)
{
	return a ? a : function(a, c, d)
	{
		var b = this.length || 0;
		0 > c && (c = Math.max(0, b + c));
		if (null == d || d > b) d = b;
		d = Number(d);
		0 > d && (d = Math.max(0, b + d));
		for (c = Number(c || 0); c < d; c++) this[c] = a;
		return this
	}
});

function m(a, b)
{
	var c = Object.create(a.prototype || a);
	if (void 0 !== b && (b = b.prototype || b))
		for (var d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
	return c
}

function ma(a)
{
	var b = (a >>> 16 & 255).toString(16),
		c = (a >>> 8 & 255).toString(16);
	for (a = (a & 255).toString(16); 2 > b.length;) b = "0" + b;
	for (; 2 > c.length;) c = "0" + c;
	for (; 2 > a.length;) a = "0" + a;
	return "#" + b + c + a
}

function na(a)
{
	return 0 > a ? Math.ceil(a) : Math.floor(a)
}

function oa(a, b, c, d, e)
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
}

function pa(a, b)
{
	for (var c = a.toString(); 4 > c.length;) c = "0" + c;
	return c + ("." + b)
}

function E(a, b)
{
	if (a == b) return !0;
	a = a.toLowerCase();
	b = b.toLowerCase();
	return a == b
}

function qa(a, b, c, d, e, f)
{
	if (0 == b.length) return 0 != (c & 1024) && (d.right = d.left, d.bottom = d.top), 0;
	e.oo || (a.font = e.dl());
	var g = 0,
		k = String.fromCharCode(10),
		h = String.fromCharCode(13),
		p = b.indexOf(k);
	if (0 <= p)
	{
		var l = new ra;
		sa(l, d);
		var r, u = 0,
			q = 0,
			v;
		do r = -1, u < b.length && (r = b.indexOf(h, u)), v = Math.max(p, r), r == p - 1 && p--, p = b.substring(u, p), r = ta(a, p, c, l, f, e), q = Math.max(q, l.right - l.left), g += r, l.top += r, l.bottom = d.bottom, l.right = d.right, u = v + 1, p = -1, u < b.length ? p = b.indexOf(k, u) : (r = ta(a, "", c, l, f, e), q = Math.max(q, l.right - l.left),
			g += r, l.top += r, l.bottom = d.bottom, l.right = d.right); while (0 <= p);
		u < b.length && (p = b.substring(u), r = ta(a, p, c, l, f, e), q = Math.max(q, l.right - l.left), g += r);
		0 != (c & 1024) && (d.right = d.left + q, d.bottom = l.bottom);
		return g
	}
	return g = ta(a, b, c | 2048, d, f, e)
}
var wa = null;

function ta(a, b, c, d, e, f)
{
	0 == b.length && (b = " ");
	var g, k;
	g = f.Ui();
	k = f.oo ? f.measureText(" ") : a.measureText(" ").width;
	var h = d.right - d.left,
		p = 0,
		l = 0,
		r, u, q, v = 0,
		n = 0,
		w;
	null == wa && (wa = Array(100));
	var D, z, A = !1,
		I = !1,
		G = d.top;
	u = g;
	0 != (u & 1) && u++;
	var R = G;
	do {
		u = p;
		q = w = 0;
		n += g;
		do {
			wa[w] = q;
			w += 1;
			r = l;
			l = -1;
			u < b.length && (l = b.indexOf(" ", u)); - 1 == l && (l = b.length);
			if (l < u)
			{
				q -= k;
				break
			}
			z = b.substring(u, l);
			D = f.oo ? f.measureText(z) : a.measureText(z).width;
			if (q + D > h)
			{
				w--;
				if (0 < w)
				{
					q -= k;
					l = r;
					break
				}
				for (r = u; r < l; r++)
				{
					D = f.oo ? f.measureText(b.substring(r,
						r + 1)) : a.measureText(b.substring(r, r + 1)).width;
					if (q + D >= h)
					{
						r--;
						if (0 < r)
						{
							v = Math.max(q, v);
							0 == (c & 1024) && (q = 0 != (c & 1) ? d.left + (d.right - d.left) / 2 - q / 2 : 0 != (c & 2) ? d.right - q : d.left, z = b.substring(u, r), e.push(new xa(q, G, z)));
							l = r - 1;
							I = A = !0;
							break
						}
						l = r < b.length ? b.indexOf(" ", r) : -1;
						A = !0;
						0 <= l && (I = !0);
						break
					}
					q += D
				}
			}
			if (A) break;
			q += D;
			if (q + k > h) break;
			q += k;
			u = l + 1
		} while (1);
		if (0 == I)
		{
			if (A) break;
			v = Math.max(q, v);
			if (0 == (c & 1024))
				for (q = 0 != (c & 1) ? d.left + (d.right - d.left) / 2 - q / 2 : 0 != (c & 2) ? d.right - q : d.left, u = p, p = 0; p < w; p++)
				{
					l = -1;
					u < b.length && (l = b.indexOf(" ",
						u)); - 1 == l && (l = b.length);
					if (l < u) break;
					z = b.substring(u, l);
					e.push(new xa(q + wa[p], G, z));
					u = l + 1
				}
		}
		I = A = !1;
		G += g;
		p = l + 1
	} while (p < b.length);
	d.right = d.left + v;
	d.bottom = R + n;
	return n
}

function ya(a, b, c, d, e, f)
{
	var g;
	if (e.oo)
		for (f = 0; f < d.length; f++) g = d[f], e.fillText(a, g.text, b + g.x, c + g.y);
	else
		for (a.font = e.dl(), a.fillStyle = ma(f), a.textAlign = "left", a.textBaseline = "top", f = 0; f < d.length; f++) g = d[f], a.fillText(g.text, b + g.x, c + g.y)
}

function za(a, b)
{
	var c = a.toString();
	if (0 != (b & Aa))
	{
		var d = b & Aa;
		if (c.length > d) c = c.substring(c.length - d);
		else
			for (; c.length < d;) c = "0" + c
	}
	return c
}

function Ba(a, b)
{
	var c;
	if (0 == (b & Ca)) c = a.toString();
	else
	{
		var d = Math.floor(((b & Da) >> Ea) + 1);
		c = -1;
		0 != (b & Fa) ? c = (b & Ga) >> Ha : 0 != a && -1 < a && 1 > a && (c = d);
		c = 0 > c ? a.toPrecision(d) : a.toFixed(c);
		var e, f, g;
		if (0 != (b & Ia))
			for (f = e = 0; f < c.length; f++) g = c.charAt(f), "." != g && "+" != g && "-" != g && "e" != g && "E" != g && e++;
		f = !1;
		"-" == c.charAt(0) && (f = !0, c = c.substr(1));
		for (; e < d;) c = "0" + c, e++;
		f && (c = "-" + c)
	}
	return c
}

function xa(a, b, c)
{
	this.x = a;
	this.y = b;
	this.text = c
}
var Ja = !1,
	Ka = !1,
	La = !1,
	Ma = window.XMLHttpRequest ? new XMLHttpRequest : null;
if (Ma && Ma.overrideMimeType) try
{
	Ka = "string" === typeof(new XMLHttpRequest).responseType, 0 <= navigator.userAgent.toLowerCase().indexOf("safari") && (Ka = !1)
}
catch (a)
{}
else
{
	var Ja = !0,
		Na = document.createElement("script");
	Na.type = "text/vbscript";
	Na.innerHTML = 'Function BinFileReaderImpl_IE_VBAjaxLoader(fileName)\n\r\n                Dim xhr\n\r\n                Set xhr = CreateObject("Microsoft.XMLHTTP")\n\r\n                xhr.Open "GET", fileName, False\n\r\n                xhr.setRequestHeader "Accept-Charset", "x-user-defined"\n\r\n                xhr.send\n\r\n                Dim byteArray()\n\r\n                if xhr.Status = 200 Then\n\r\n                    Dim byteString\n\r\n                    Dim i\n\r\n                    byteString=xhr.responseBody\n\r\n                    ReDim byteArray(LenB(byteString))\n\r\n                    For i = 1 To LenB(byteString)\n\r\n                        byteArray(i-1) = AscB(MidB(byteString, i, 1))\n\r\n                    Next\n\r\n                End If\n\r\n                BinFileReaderImpl_IE_VBAjaxLoader=byteArray\n\r\n            End Function';
	document.head.appendChild(Na)
}
if (Ka)
{
	var Oa = new FileReader;
	try
	{
		Oa.readAsBinaryString && (La = !0)
	}
	catch (a)
	{}
	Oa = null
}
Ma = null;

function Pa()
{
	this.Lf = "";
	this.offset = this.Ga = 0;
	this.Sh = !1
}
Pa.prototype = {
	oa: function()
	{
		return this.Lf.charCodeAt(this.Ga++) & 255
	},
	getFile: function(a, b, c)
	{
		this.bA = b;
		if (Ja) try
		{
			var d = BinFileReaderImpl_IE_VBAjaxLoader(a).toArray(),
				e, f = d.length;
			f > c && (f = c);
			for (e = 0; e < f; e++) this.Lf += String.fromCharCode(d[e]);
			this.end = this.Lf.length;
			this.bA()
		}
		catch (h)
		{}
		else
		{
			var g = new XMLHttpRequest;
			g.open("GET", a, !0);
			var k = this;
			Ka ? (g.responseType = "blob", g.onload = function()
			{
				if (4 == g.readyState && 200 == g.status)
				{
					var a = new FileReader;
					a.onloadend = function()
					{
						if (La) k.Lf += a.result;
						else
						{
							var b =
								new Uint8Array(a.result),
								c;
							for (c = 0; c < b.length; c++) k.Lf += String.fromCharCode(b[c])
						}
						k.end = k.Lf.length;
						k.bA()
					};
					La ? a.readAsBinaryString(g.response) : a.readAsArrayBuffer(g.response)
				}
			}) : (g.overrideMimeType("text/plain; charset=x-user-defined"), g.onload = function()
			{
				4 == g.readyState && 200 == g.status && (k.Lf += g.responseText, k.end = k.Lf.length, k.bA())
			});
			g.send(null)
		}
	},
	ed: function(a)
	{
		var b = "";
		if (this.Sh)
			if (1 > arguments.length)
			{
				if (this.Ga >= this.end) return b;
				c = this.Ga;
				for (b = Qa(this); b && !(this.Ga >= this.end);) b = Qa(this);
				b = (this.Ga - c - 2) / 2;
				this.Ga = c;
				b = this.ed(b);
				this.oa();
				this.oa()
			}
		else
		{
			b = "";
			c = this.Ga;
			for (e = 0; e < a; e++)
			{
				d = Qa(this);
				if (0 == d) break;
				b += String.fromCharCode(d)
			}
			this.Ga = c + 2 * a
		}
		else if (1 > arguments.length)
		{
			if (this.Ga >= this.end) return b;
			for (var c = this.Ga, b = this.oa(); b && !(this.Ga >= this.end);) b = this.oa();
			b = this.Ga - c - 1;
			this.Ga = c;
			b = this.ed(b);
			this.oa()
		}
		else
		{
			for (var d, c = this.Ga, e = 0; e < a; ++e)
			{
				d = this.oa();
				if (0 == d) break;
				b += String.fromCharCode(d)
			}
			this.Ga = c + a
		}
		return b
	},
	seek: function(a)
	{
		a >= this.end && (a = this.end);
		this.Ga = a
	}
};

function Ra(a)
{
	var b = [],
		c;
	for (c = 0; 4 > c; c++) b[c] = a.oa();
	return b
}

function Sa(a)
{
	var b, c, d;
	b = a.oa();
	c = a.oa();
	d = a.oa();
	a = 16777216 * a.oa() + 65536 * d + 256 * c + b;
	2147483648 < a && (a -= 4294967295);
	return a / 65536
}

function Ta(a)
{
	var b, c, d;
	b = a.oa();
	c = a.oa();
	d = a.oa();
	a.oa();
	return 65536 * b + 256 * c + d
}

function F(a)
{
	var b, c, d;
	b = a.oa();
	c = a.oa();
	d = a.oa();
	a = 16777216 * a.oa() + 65536 * d + 256 * c + b;
	return 2147483647 >= a ? a : a - 4294967296
}

function Qa(a)
{
	var b;
	b = a.oa();
	return 256 * a.oa() + b
}

function S(a)
{
	var b;
	b = a.oa();
	a = 256 * a.oa() + b;
	return 32768 > a ? a : a - 65536
}

function T(a)
{
	var b;
	b = a.oa();
	return 256 * a.oa() + b
}

function V(a, b)
{
	a.Ga += b
}

function Ua(a, b, c)
{
	var d = new Pa;
	d.Lf = a.Lf;
	d.offset = b;
	d.Ga = b;
	d.end = b + c;
	d.Sh = a.Sh;
	return d
}

function Va(a, b)
{
	a.Lf = b;
	a.end = b.length;
	a.oa = function()
	{
		return a.Lf.charCodeAt(a.Ga++) & 255
	}
}

function W()
{
	this.Ug = []
}
W.prototype = {
	add: function(a)
	{
		this.Ug.push(a)
	},
	get: function(a)
	{
		return a < this.Ug.length ? this.Ug[a] : null
	},
	put: function(a, b)
	{
		this.Ug[a] = b
	},
	set: function(a, b)
	{
		a < this.Ug.length && (this.Ug[a] = b)
	},
	indexOf: function(a)
	{
		return this.Ug.indexOf(a)
	},
	contains: function(a)
	{
		return 0 <= this.Ug.indexOf(a)
	},
	size: function()
	{
		return this.Ug.length
	},
	clear: function()
	{
		this.Ug.length = 0
	}
};

function Wa(a, b)
{
	var c = a.Ug.indexOf(b);
	0 <= c && a.Ug.splice(c, 1)
}

function Xa(a, b)
{
	b < a.Ug.length && a.Ug.splice(b, 1)
}

function ra(a, b, c, d)
{
	this.left = a ? a : 0;
	this.top = b ? b : 0;
	this.right = c ? c : 0;
	this.bottom = d ? d : 0
}
ra.prototype = {
	load: function(a)
	{
		this.left = F(a);
		this.top = F(a);
		this.right = F(a);
		this.bottom = F(a)
	}
};

function sa(a, b)
{
	a.left = b.left;
	a.right = b.right;
	a.top = b.top;
	a.bottom = b.bottom
}

function Ya()
{
	this.y = this.x = 0
}

function Za()
{
	this.le = 12;
	this.ai = 400;
	this.$h = 0;
	this.Zh = "Arial";
	this.oo = !1
}
Za.prototype = {
	dl: function()
	{
		var a;
		a = this.$h ? "italic " : "normal ";
		var b = 100 * Math.floor(this.ai / 100),
			b = Math.max(b, 100),
			b = Math.min(b, 900);
		a = a + (b + " ") + (this.le + "px ");
		return a += this.Zh
	},
	Ui: function()
	{
		return this.le + Math.ceil(this.le / 8)
	},
	za: function()
	{
		this.Zh = "Arial";
		this.le = 13;
		this.ai = 400;
		this.$h = 0
	}
};

function $a(a, b, c)
{
	this.app = a;
	this.width = b;
	this.height = c;
	this.canvas = document.createElement("canvas");
	this.canvas.width = b;
	this.canvas.height = c;
	this.zg = this.canvas.getContext("2d")
}
$a.prototype = {
	measureText: function(a, b)
	{
		b = ab(this.app, b);
		if (b.oo) return b.measureText(a);
		this.zg.font = b.dl();
		return this.zg.measureText(a).width
	},
	resize: function(a, b)
	{
		if (a != this.width || b != this.height) this.width = a, this.height = b, this.canvas.width = a, this.canvas.height = b
	},
	$c: function(a, b, c, d, e)
	{
		a.an(this.canvas, b, c, this.width, this.height, d, e)
	}
};

function bb(a, b, c, d, e, f, g)
{
	var k = [];
	c || (c = new ra(0, 0, a.width, a.height));
	e = ab(a.app, e);
	b = qa(a.zg, b, 5, c, e, k);
	if (0 != b) switch (b = a.height / 2 - b / 2, f)
	{
		case 1:
			ya(a.zg, 1, b + 1, k, e, g);
			ya(a.zg, 0, b, k, e, d);
			break;
		case 2:
			ya(a.zg, 1, b, k, e, g);
			ya(a.zg, 1, b + 2, k, e, g);
			ya(a.zg, 0, b + 1, k, e, g);
			ya(a.zg, 2, b + 1, k, e, g);
			ya(a.zg, 1, b + 1, k, e, d);
			break;
		case 0:
			ya(a.zg, 0, b, k, e, d)
	}
}

function cb(a, b)
{
	b ? (a.zg.fillStyle = ma(b), a.zg.fillRect(0, 0, a.width, a.height)) : a.zg.clearRect(0, 0, a.width, a.height)
}

function db(a, b, c, d, e, f)
{
	if (b == a.NL && c == a.JL && d == a.ML && e == a.KL && f == a.IL) return a.LL;
	var g = a.zg;
	g.clearRect(0, 0, a.width, a.height);
	d || (d = new ra(0, 0, a.width, a.height));
	var k = [];
	e = ab(a.app, e);
	var h = qa(g, b, c, d, e, k);
	if (0 != h)
	{
		var p = 0;
		0 != (c & 8) ? p = a.height - h : 0 != (c & 4) && (p = a.height / 2 - h / 2);
		ya(g, 0, p, k, e, f)
	}
	a.NL = b;
	a.JL = c;
	a.ML = d;
	a.KL = e;
	a.IL = f;
	return a.LL = h
}
var eb = [
	{
		pd: navigator.userAgent,
		mf: "Chrome",
		Oe: "Chrome"
	},
	{
		pd: navigator.userAgent,
		mf: "OmniWeb",
		Gr: "OmniWeb/",
		Oe: "OmniWeb"
	},
	{
		pd: navigator.vendor,
		mf: "Apple",
		Oe: "Safari",
		Gr: "Version"
	},
	{
		IM: window.opera,
		Oe: "Opera",
		Gr: "Version"
	},
	{
		pd: navigator.vendor,
		mf: "iCab",
		Oe: "iCab"
	},
	{
		pd: navigator.vendor,
		mf: "KDE",
		Oe: "Konqueror"
	},
	{
		pd: navigator.userAgent,
		mf: "Firefox",
		Oe: "Firefox"
	},
	{
		pd: navigator.vendor,
		mf: "Camino",
		Oe: "Camino"
	},
	{
		pd: navigator.userAgent,
		mf: "Netscape",
		Oe: "Netscape"
	},
	{
		pd: navigator.userAgent,
		mf: "MSIE",
		Oe: "Explorer",
		Gr: "MSIE"
	},
	{
		pd: navigator.userAgent,
		mf: "Gecko",
		Oe: "Mozilla",
		Gr: "rv"
	},
	{
		pd: navigator.userAgent,
		mf: "Mozilla",
		Oe: "Netscape",
		Gr: "Mozilla"
	}],
	fb = [
	{
		pd: navigator.platform,
		mf: "Win",
		Oe: "Windows"
	},
	{
		pd: navigator.platform,
		mf: "Mac",
		Oe: "MacOS"
	},
	{
		pd: navigator.userAgent,
		mf: "iPhone",
		Oe: "iOS"
	},
	{
		pd: navigator.userAgent,
		mf: "iPod",
		Oe: "iOS"
	},
	{
		pd: navigator.userAgent,
		mf: "iPad",
		Oe: "iOS"
	},
	{
		pd: navigator.userAgent,
		mf: "Android",
		Oe: "Android"
	},
	{
		pd: navigator.platform,
		mf: "Windows Phone",
		Oe: "Windows Phone"
	},
	{
		pd: navigator.platform,
		mf: "Linux",
		Oe: "Linux"
	}];

function gb()
{
	this.EL = !!window.opr && !!opr.tO || !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/");
	this.DL = "undefined" !== typeof InstallTrigger;
	this.FL = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") || "[object SafariRemoteNotification]" === (!window.safari || safari.pushNotification).toString();
	this.lt = !!document.documentMode;
	this.BL = !this.lt && !!window.StyleMedia;
	(this.JF = !!window.chrome && !!window.chrome.webstore) || this.BL || this.lt || this.DL || this.EL || this.FL || hb(this, eb);
	this.version = ib(this, navigator.userAgent) || ib(this, navigator.appVersion) || "Unknown version";
	hb(this, fb)
}
gb.prototype = {};

function ib(a, b)
{
	var c = b.indexOf(a.CI);
	if (-1 != c) return parseFloat(b.substring(c + a.CI.length + 1))
}

function hb(a, b)
{
	for (var c = 0; c < b.length; c++)
	{
		var d = b[c].pd,
			e = b[c].IM;
		a.CI = b[c].Gr || b[c].Oe;
		if (d)
		{
			if (-1 != d.indexOf(b[c].mf)) break
		}
		else if (e) break
	}
};

function jb()
{}

function kb()
{
	this.Vb = 0;
	this.name = null;
	this.index = 0
}

function lb()
{}
lb.prototype = {
	Ic: function() {}
};

function mb()
{}
mb.prototype = {
	Ic: function(a)
	{
		var b;
		b = 52 == this.S[0].code ? nb(a, this.S[0]) - 1 : this.S[0].value;
		var c = ob(a, this.S[1]);
		pb(a.m, b, c)
	}
};

function qb()
{}
qb.prototype = {
	Ic: function(a)
	{
		pb(a.m, this.Km, this.value)
	}
};

function rb()
{}
rb.prototype = {
	Ic: function(a)
	{
		var b = this.S[0];
		a.m.Ed.play(b.ly, 1, -1, 0 != (b.iI & sb.nJ))
	}
};

function tb()
{}
tb.prototype = {
	Ic: function(a)
	{
		ub(a.m.Ed)
	}
};

function vb()
{}
vb.prototype = {
	Ic: function(a)
	{
		var b = this.S[0],
			c = 0 != (b.iI & sb.nJ),
			d = nb(a, this.S[1]),
			e = nb(a, this.S[2]);
		a.m.Ed.play(b.ly, e, d - 1, c)
	}
};

function wb()
{}
wb.prototype = {
	Ic: function(a)
	{
		var b = nb(a, this.S[0]),
			c = nb(a, this.S[1]);
		0 <= c && 100 >= c && (a = a.m.Ed, --b, 0 > c && (c = 0), 100 < c && (c = 100), 0 <= b && b < xb && (a.Qu[b] = c, null != a.rc[b] && (a = a.rc[b], a.volume = c, a.Pc ? a.Pc.volume = c / 100 : a.source && (a.gain ? a.gain.gain.value = c / 100 : a.source.gain.value = c / 100))))
	}
};

function yb()
{}
yb.prototype = {
	Ic: function(a)
	{
		a.Tc = zb;
		a.m.pn = !0
	}
};

function Ab()
{}
Ab.prototype = {
	Ic: function(a)
	{
		var b;
		if (26 == this.S[0].code)
		{
			b = this.S[0].value;
			var c = a.m;
			if (-1 == (null == c.Zs || -1 == b || b >= c.$s ? -1 : c.Zs[b])) return
		}
		else
		{
			b = nb(a, this.S[0]) - 1;
			if (0 > b || 4096 <= b) return;
			a.m.EO && b++;
			b |= 32768
		}
		a.Tc = Bb;
		a.rr = b;
		a.m.pn = !0
	}
};

function Cb()
{}
Cb.prototype = {
	Ic: function(a)
	{
		a.Tc = Db
	}
};

function Eb()
{}
Eb.prototype = {
	Ic: function(a)
	{
		var b = new Fb;
		Gb(this.S[0], a, 0, b);
		var c = b.x,
			d = b.y,
			b = b.sq,
			c = c - Math.floor(a.dr / 2),
			d = d - Math.floor(a.er / 2); - 1 != b && b < a.N.We && (b = a.N.kc[b], 1 < b.sn && (c -= a.Ha, c /= b.sn, c = na(a.Ha + c)), 1 < b.tn && (d -= a.Oa, d /= b.tn, d = na(a.Oa + d)));
		0 > c && (c = 0);
		0 > d && (d = 0);
		var b = c + a.dr,
			e = d + a.er;
		b > a.Md && (b = a.Md - a.dr, 0 > b && (b = 0), c = b);
		e > a.Nd && (e = a.Nd - a.er, 0 > e && (e = 0), d = e);
		c != a.Ha && (a.en = c, a.ip |= 1);
		d != a.Oa && (a.fn = d, a.ip |= 1)
	}
};

function Hb()
{}
Hb.prototype = {
	Ic: function(a)
	{
		a.vu[this.Me] = 0
	}
};

function Ib()
{}
Ib.prototype = {
	Ic: function(a)
	{
		var b = nb(a, this.S[0]);
		if (!(8 <= b))
		{
			var c = this.Me;
			4 <= c || (a.m.ux[c * Jb + b] = this.S[1].key)
		}
	}
};

function Kb()
{}
Kb.prototype = {
	Ic: function(a)
	{
		var b = this.S[0],
			c = new Fb;
		if (Gb(b, a, 17, c) && (c.Sz ? (this.Ib |= 1, a.u.cn = !0) : this.Ib &= -2, b = Lb(a, b.Hs, b.cA, c.x, c.y, c.dir, 0, c.sq), 0 <= b))
		{
			b = a.W[b];
			Mb(a.u, b);
			if (b && 32 <= b.rb && (1110591041 == b.ga.Mc || 1110594637 == b.ga.Mc || 1110874198 == b.ga.Mc || 1110634490 == b.ga.Mc))
			{
				var c = 0,
					d;
				for (d = 0; d < a.Tb; c++, d++)
				{
					for (; null == a.W[c];) c++;
					var e = a.W[c];
					32 <= e.rb && 1110590791 == e.ga.Mc && (1110591041 == b.ga.Mc ? b.ext.identifier == e.ext.identifier && e.ext.mq.add(b.ext) : 1110594637 == b.ga.Mc ? b.ext.identifier == e.ext.identifier &&
						e.ext.Er.add(b.ext) : 1110874198 == b.ga.Mc ? b.ext.identifier == e.ext.identifier && e.ext.Hq.add(b.ext) : 1110634490 == b.ga.Mc && b.ext.identifier == e.ext.identifier && e.ext.cy.add(b.ext))
				}
				if (1110634490 != b.ga.Mc)
					for (d = c = 0; d < a.Tb; c++, d++)
					{
						for (; null == a.W[c];) c++;
						e = a.W[c];
						e.rb == Nb && (e = a.Yb(e)) && b.ext.lC(e)
					}
			}(c = a.Yb(b)) ? c.yj(): null != a.dQ && a.Nl.xH(b)
		}
	}
};

function Ob()
{}
Ob.prototype = {
	Ic: function(a)
	{
		var b = Pb(a.u, this);
		null != b && (a = ob(a, this.S[0]), b.YK(a))
	}
};

function Qb()
{}
Qb.prototype = {
	Ic: function(a)
	{
		var b = Pb(a.u, this);
		if (null != b)
		{
			var c = new Fb;
			Gb(this.S[0], a, 1, c) && (Rb(b, c.x), Sb(b, c.y), -1 != c.dir && (c = c.dir &= 31, a.hd(b) != c && (b.b.wa = c, b.b.fa = !0, b.J.xa.qh(c), 2 == b.rb && Tb(b.Ca, 0))))
		}
	}
};

function Ub()
{}
Ub.prototype = {
	Ic: function(a)
	{
		var b = Pb(a.u, this);
		null != b && (a = nb(a, this.S[0]), Rb(b, Math.floor(a)))
	}
};

function Vb()
{}
Vb.prototype = {
	Ic: function(a)
	{
		var b = Pb(a.u, this);
		null != b && (a = nb(a, this.S[0]), Sb(b, Math.floor(a)))
	}
};

function Wb()
{}
Wb.prototype = {
	Ic: function(a)
	{
		a = Pb(a.u, this);
		null != a && null != a.J && a.J.xa.stop()
	}
};

function Xb()
{}
Xb.prototype = {
	Ic: function(a)
	{
		a = Pb(a.u, this);
		null != a && null != a.J && a.J.xa.start()
	}
};

function Yb()
{}
Yb.prototype = {
	Ic: function(a)
	{
		a = Pb(a.u, this);
		null != a && null != a.J && null != a.J.xa.wh && a.J.xa.wh()
	}
};

function Zb()
{}
Zb.prototype = {
	Ic: function(a)
	{
		var b = Pb(a.u, this);
		null != b && (a = 10 == this.S[0].code ? this.S[0].value : nb(a, this.S[0]), $b(b.Ca, a), b.b.fa = !0)
	}
};

function ac()
{}
ac.prototype = {
	Ic: function(a)
	{
		var b = Pb(a.u, this);
		null != b && (3 == b.rb ? 0 != (b.XH & bc) ? (cc(b.ea), b.ea.Ja &= ~dc, b.Aa |= ec) : (b.Aa |= fc, gc(a, b.zc)) : 0 == (b.Aa & fc) && (b.Aa |= fc, 0 != (b.Ya & hc) || 0 != (b.Ya & ic) ? jc(a, b) : (b.et = !1, gc(a, b.zc))))
	}
};

function kc()
{}
kc.prototype = {
	Ic: function(a)
	{
		var b = Pb(a.u, this);
		if (null != b)
		{
			var c = this.S[0],
				d = new Fb;
			if (Gb(c, a, 17, d))
			{
				a = d.dir;
				var e = b.ig,
					d = Lb(b.c, c.Hs, c.cA, d.x, d.y, a, 3, e);
				0 <= d && (d = b.c.W[d], null != d.J ? (d.b.wa = a, lc(d.J, d, mc), d.b.ra = c.GN, d.J.xa.Aw(b), -1 != e && 0 != (d.Ya & ic) && 16 != (b.c.N.kc[e].Bb & (nc | 16)) && cc(d.ea), Mb(b.c.u, d), 0 != (b.Ya & hc) && oc(b.Ca, 6) && ($b(b.Ca, 6), pc(b.Ca))) : gc(b.c, d.zc))
			}
		}
	}
};

function qc()
{}
qc.prototype = {
	Ic: function(a)
	{
		var b = Pb(a.u, this);
		if (null != b)
		{
			var c;
			c = 53 == this.S[0].code ? nb(a, this.S[0]) : this.S[0].value;
			0 <= c && null != b.ub && (c >= b.ub.ee.length && rc(b.ub, c + 10), a = ob(a, this.S[1]), b.ub.ee[c] = a)
		}
	}
};

function sc()
{}
sc.prototype = {
	Ic: function(a)
	{
		a = Pb(a.u, this);
		null != a && 0 <= this.Km && null != a.ub && (this.Km >= a.ub.ee.length && rc(a.ub, this.Km + 10), a.ub.ee[this.Km] = this.value)
	}
};
X.AD = 6;
X.HI = -983041;
X.II = -1507329;
X.JI = -1572865;

function X()
{}
X.create = function(a)
{
	var b = a.file.Ga,
		c = T(a.file),
		d, e = F(a.file);
	switch (e)
	{
		case -2555905:
			d = new CND_RUNNINGAS;
			break;
		case -2490369:
			d = new tc;
			break;
		case -2424833:
			d = new uc;
			break;
		case -2359297:
			d = new vc;
			break;
		case -2293761:
			d = new wc;
			break;
		case -2228225:
			d = new xc;
			break;
		case -2162689:
			d = new yc;
			break;
		case -2097153:
			d = new tc;
			break;
		case -2031617:
			d = new uc;
			break;
		case -1966081:
			d = new vc;
			break;
		case -1900545:
			d = new wc;
			break;
		case -1835009:
			d = new xc;
			break;
		case -1769473:
			d = new yc;
			break;
		case -1703937:
			d = new zc;
			break;
		case -1638401:
			d =
				new CND_CHANCE;
			break;
		case -1572865:
			d = new zc;
			break;
		case -1507329:
			d = new zc;
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
			d = new zc;
			break;
		case -589825:
			d = new zc;
			break;
		case -524289:
			d = new zc;
			break;
		case -458753:
			d = new Ac;
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
			d = new zc;
			break;
		case -1:
			d = new Bc;
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
			d = new Cc;
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
			d =
				new zc;
			break;
		case -65539:
			d = new Bc;
			break;
		case -3:
			d = new Dc;
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
			d = new CND_EVERY;
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
			d = new Ec;
			break;
		case -327687:
			d = new Fc;
			break;
		case -262151:
			d = new CND_NOMORELIVE;
			break;
		case -196615:
			d = new Gc;
			break;
		case -131079:
			d = new CND_LIVE;
			break;
		case -65543:
			d = new CND_SCORE;
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
			d = new Hc;
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
					d = new Ic;
					break;
				case -2752512:
					d = new Ic;
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
					d = new Jc;
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
					d = new Kc;
					break;
				case -1703936:
					d = new CND_EXTCMPVARFIXED;
					break;
				case -1638400:
					d = new CND_EXTFLAGSET;
					break;
				case -1572864:
					d =
						new CND_EXTFLAGRESET;
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
					d = new Lc;
					break;
				case -1048576:
					d = new Mc;
					break;
				case -983040:
					d = new CND_EXTCMPSPEED;
					break;
				case -917504:
					d = new Nc;
					break;
				case -851968:
					d = new Oc;
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
					d = new Pc;
					break;
				case -65536:
					d = new CND_EXTCMPFRAME;
					break;
				default:
					d = new Qc
			}
	}
	if (null != d && (d.qb = e, d.Me = S(a.file), d.Rc = S(a.file), d.Ib = a.file.oa(), d.Ri = a.file.oa(), d.gg =
			a.file.oa(), d.Ws = a.file.oa(), d.tA = T(a.file), 0 < d.gg))
		for (d.S = Array(d.gg), e = 0; e < d.gg; e++) d.S[e] = Rc(a);
	a.file.seek(b + c);
	return d
};
X.GB = function(a)
{
	return a.Ri & Sc ? !1 : !0
};
X.Yt = function(a)
{
	return a.Ri & Sc ? !0 : !1
};
X.sM = function(a, b)
{
	return a.Ri & Sc ? !b : b
};
X.WK = function(a)
{
	var b = a.u.qj,
		c = b.ho;
	a = b.ho = a.de;
	if (a == c) return !1;
	a--;
	return a == c ? !1 : !0
};
X.fA = function(a, b)
{
	var c, d = b.vw;
	if (null == d) d = new W, b.vw = d;
	else
		for (c = 0; c < d.size(); c++)
			if (d.get(c) == a) return !1;
	d.add(a);
	d = b.IF;
	if (null == d) return !0;
	for (c = 0; c < d.size(); c++)
		if (d.get(c) == a) return !1;
	return !0
};
X.IO = function(a, b)
{
	return 0 == b ? !1 : b == a.de || b == a.de - 1 ? !0 : !1
};

function zc()
{}
zc.prototype = {
	gd: function()
	{
		return !1
	},
	pb: function()
	{
		return !1
	}
};

function Bc()
{}
Bc.prototype = {
	gd: function()
	{
		return !0
	},
	pb: function()
	{
		return !0
	}
};

function X()
{}
X.prototype = {};

function Tc(a, b)
{
	if (b.u.Ol) return Uc(b.u, a.Rc), Uc(b.u, a.S[0].Zd), !1;
	var c = !1;
	0 != (a.Ri & Sc) && (c = !0);
	var d = Uc(b.u, a.Rc);
	if (null == d) return X.Yt(a);
	var e = b.u.Si,
		f = a.S[0].Bl;
	0 <= f ? (b.NA[0] = f, b.NA[1] = a.S[0].Zd, f = b.NA) : f = b.u.ae[a.S[0].Zd & 32767].Qb;
	var g, k = new W,
		h, p;
	do {
		g = Vc(b, d, d.b.Jb, d.b.ac, d.b.bc, d.b.cc, d.A, d.w, f);
		if (null == g) 0 == c && (e--, Wc(b.u));
		else
		{
			d = !1;
			for (h = 0; h < g.size(); h++) p = g.get(h), 0 == (p.Aa & fc) && (k.add(p), d = !0);
			1 == c ? 1 == d && (e--, Wc(b.u)) : 0 == d && (e--, Wc(b.u))
		}
		d = Xc(b.u)
	} while (null != d);
	if (0 == e) return !1;
	d =
		Uc(b.u, a.S[0].Zd);
	if (null == d) return !1;
	e = b.u.Si;
	if (0 == c)
	{
		do {
			for (h = 0; h < k.size() && (p = k.get(h), d != p); h++);
			h == k.size() && (e--, Wc(b.u));
			d = Xc(b.u)
		} while (null != d);
		return 0 != e ? !0 : !1
	}
	do {
		for (h = 0; h < k.size(); h++)
			if (p = k.get(h), d == p)
			{
				e--;
				Wc(b.u);
				break
			} d = Xc(b.u)
	} while (null != d);
	return 0 != e ? !0 : !1
}

function Yc(a, b, c)
{
	a = Uc(b.u, a.Rc);
	for (var d = b.u.Si; null != a;) 0 == c.lF(a) && (d--, Wc(b.u)), a = Xc(b.u);
	return 0 != d ? !0 : !1
}

function Zc(a, b, c)
{
	var d = Uc(b.u, a.Rc),
		e = b.u.Si;
	a = a.S[0];
	var f;
	f = a.ab[0];
	if (f.code != $c && f.code != ad || 0 != a.ab[1].code)
		for (; null != d;) f = nb(b, a), 0 == c.jw(d, f, a.Xn) && (e--, Wc(b.u)), d = Xc(b.u);
	else
		for (f = f.value; null != d;) 0 == c.jw(d, f, a.Xn) && (e--, Wc(b.u)), d = Xc(b.u);
	return 0 != e ? !0 : !1
}

function Ac()
{}
Ac.prototype = {
	gd: function(a)
	{
		return this.pb(a)
	},
	pb: function(a)
	{
		var b;
		b = 52 == this.S[0].code ? nb(a, this.S[0]) - 1 : this.S[0].value;
		b = bd(a.m, b);
		a = ob(a, this.S[1]);
		return cd(b, a, this.S[1].Xn)
	}
};

function yc()
{}
yc.prototype = {
	gd: function(a)
	{
		return this.pb(a)
	},
	pb: function(a)
	{
		return bd(a.m, this.S[0].value) == this.S[1].ab[0].value
	}
};

function xc()
{}
xc.prototype = {
	gd: function(a)
	{
		return this.pb(a)
	},
	pb: function(a)
	{
		return bd(a.m, this.S[0].value) != this.S[1].ab[0].value
	}
};

function wc()
{}
wc.prototype = {
	gd: function(a)
	{
		return this.pb(a)
	},
	pb: function(a)
	{
		return bd(a.m, this.S[0].value) <= this.S[1].ab[0].value
	}
};

function vc()
{}
vc.prototype = {
	gd: function(a)
	{
		return this.pb(a)
	},
	pb: function(a)
	{
		return bd(a.m, this.S[0].value) < this.S[1].ab[0].value
	}
};

function uc()
{}
uc.prototype = {
	gd: function(a)
	{
		return this.pb(a)
	},
	pb: function(a)
	{
		return bd(a.m, this.S[0].value) >= this.S[1].ab[0].value
	}
};

function tc()
{}
tc.prototype = {
	gd: function(a)
	{
		return this.pb(a)
	},
	pb: function(a)
	{
		return bd(a.m, this.S[0].value) > this.S[1].ab[0].value
	}
};

function Cc()
{}
Cc.prototype = {
	gd: function(a)
	{
		return this.pb(a)
	},
	pb: function(a)
	{
		a:
		{
			a = a.m.Ed;
			var b;
			for (b = 0; b < xb; b++)
				if (null != a.rc[b] && a.rc[b].handle == this.S[0].ly)
				{
					a = dd(a.rc[b]);
					break a
				} a = !1
		}
		return a ? X.Yt(this) : X.GB(this)
	}
};

function Dc()
{}
Dc.prototype = {
	gd: function(a)
	{
		return 2 < a.de ? !1 : !0
	},
	pb: function(a)
	{
		return 2 < a.de ? !1 : !0
	}
};

function Ec()
{}
Ec.prototype = {
	gd: function(a)
	{
		return this.pb(a)
	},
	pb: function(a)
	{
		return 0 == a.m.vf[this.S[0].key] ? X.Yt(this) : X.WK(a) ? X.GB(this) : X.Yt(this)
	}
};

function Fc()
{}
Fc.prototype = {
	gd: function(a)
	{
		return this.pb(a)
	},
	pb: function(a)
	{
		a = a.pe[this.Me];
		a &= this.S[0].value;
		return a != this.S[0].value ? X.Yt(this) : X.GB(this)
	}
};

function Gc()
{}
Gc.prototype = {
	gd: function(a)
	{
		if (this.Me != a.u.EC) return !1;
		a = a.u.Ld;
		a &= this.S[0].value;
		return a != this.S[0].value ? !1 : !0
	},
	pb: function(a)
	{
		var b = this.Me;
		a = a.Qx[b] & a.pe[b];
		a &= this.S[0].value;
		return this.S[0].value != a ? !1 : !0
	}
};

function Hc()
{}
Hc.prototype = {
	gd: function(a)
	{
		return this.pb(a)
	},
	pb: function(a)
	{
		for (var b = Uc(a.u, this.Rc), c = a.u.Si, d; null != b;) b = b.hb, d = ob(a, this.S[0]), 0 == cd(b, d, this.S[0].Xn) && (c--, Wc(a.u)), b = Xc(a.u);
		return 0 != c
	}
};

function Jc()
{}
Jc.prototype = {
	gd: function(a, b)
	{
		return null == b ? this.pb(a) : 0 <= this.Me ? b.jc != this.Me ? !1 : !0 : ed(this, a, 1)
	},
	pb: function(a)
	{
		return ed(this, a, 0)
	}
};

function ed(a, b, c)
{
	a = a.Rc;
	if (0 == (a & 32768)) return a = b.ua[a], 0 == a.mk ? !0 : !1;
	if (32767 == (a & 32767)) return !1;
	var d = b.u.ae[a & 32767],
		e = 0,
		f;
	for (f = 0; f < d.Qb.length; f += 2) a = b.ua[d.Qb[f + 1]], e += a.mk;
	return 0 == e - c ? !0 : !1
}

function Kc()
{}
Kc.prototype = {
	gd: function(a)
	{
		return this.pb(a)
	},
	pb: function(a)
	{
		var b = Uc(a.u, this.Rc);
		if (null == b) return !1;
		var c = a.u.Si,
			d, e = this.S[1];
		do d = 53 == this.S[0].code ? nb(a, this.S[0]) : this.S[0].value, 0 <= d && null != b.ub ? (b = d < b.ub.ee.length ? fd(b.ub, d) : 0, d = ob(a, e), 0 == cd(b, d, e.Xn) && (c--, Wc(a.u))) : (c--, Wc(a.u)), b = Xc(a.u); while (null != b);
		return 0 != c
	}
};

function Ic()
{}
Ic.prototype = {
	gd: function(a)
	{
		return this.pb(a)
	},
	pb: function(a)
	{
		var b = Uc(a.u, this.Rc);
		if (null == b) return !1;
		var c = a.u.Si,
			d = this.S[0].value,
			e = this.S[1],
			f = e.ab[0].value;
		do 0 <= d && null != b.ub ? (b = d < b.ub.ee.length ? fd(b.ub, d) : 0, 0 == cd(b, f, e.Xn) && (c--, Wc(a.u))) : (c--, Wc(a.u)), b = Xc(a.u); while (null != b);
		return 0 != c
	}
};

function Lc()
{}
Lc.prototype = m(new X,
{
	gd: function(a)
	{
		return Zc(this, a, this)
	},
	pb: function(a)
	{
		return Zc(this, a, this)
	},
	jw: function(a, b, c)
	{
		return gd(a.A, b, c)
	}
});

function Mc()
{}
Mc.prototype = m(new X,
{
	gd: function(a)
	{
		return Zc(this, a, this)
	},
	pb: function(a)
	{
		return Zc(this, a, this)
	},
	jw: function(a, b, c)
	{
		return gd(a.w, b, c)
	}
});

function Nc()
{}
Nc.prototype = m(new X,
{
	gd: function(a, b)
	{
		for (var c = a.W[a.u.su], d = this.Me, e = this.S[0], f = e.Bl;;)
		{
			if (d == b.jc)
			{
				if (f == c.jc) break;
				if (0 <= f) return !1;
				if (this.bq(a, e.Zd, c.jc)) break;
				return !1
			}
			if (f == b.jc)
			{
				if (d == c.jc) break;
				if (0 <= d) return !1;
				if (this.bq(a, this.Rc, c.jc)) break;
				return !1
			}
			if (0 > d)
			{
				if (0 > f)
				{
					if (this.bq(a, this.Rc, b.jc))
					{
						if (this.bq(a, e.Zd, c.jc)) break;
						if (0 == this.bq(a, e.Zd, b.jc)) return !1
					}
					if (this.bq(a, this.Rc, c.jc)) break
				}
				else if (f == c.jc) break;
				return !1
			}
			if (0 <= f || d != c.jc) return !1;
			break
		}
		d = c.um << 16 | this.tA & 65535;
		if (0 ==
			X.fA(d, b))
		{
			if (0 == (a.u.qj.$b & hd)) return !1;
			a.u.yu = !0
		}
		d = b.um << 16 | this.tA & 65535;
		if (0 == X.fA(d, c))
		{
			if (0 == (a.u.qj.$b & hd)) return !1;
			a.u.yu = !0
		}
		Mb(a.u, b);
		Mb(a.u, c);
		c.J.xa.sg == a.Ye ? b.J.xa.sg = a.Ye : b.J.xa.sg == a.Ye && (c.J.xa.sg = a.Ye);
		return !0
	},
	pb: function(a)
	{
		return Tc(this, a)
	},
	bq: function(a, b, c)
	{
		if (-1 == b) return !1;
		a = a.u.ae[b & 32767];
		for (b = 0; b < a.Qb.length; b += 2)
			if (a.Qb[b] == c) return !0;
		return !1
	}
});

function Oc()
{}
Oc.prototype = m(new X,
{
	gd: function(a, b)
	{
		return X.fA(this.tA, b) ? (Mb(a.u, b), !0) : 0 == (a.u.qj.$b & hd) ? !1 : a.u.yu = !0
	},
	pb: function(a)
	{
		return X.sM(this, Yc(this, a, this))
	},
	lF: function(a)
	{
		return id(a.c, a, a.b.ac, a.b.bc, a.b.cc, a.A, a.w, 0, jd)
	}
});

function Pc()
{}
Pc.prototype = m(new X,
{
	gd: function(a, b)
	{
		if ((10 == this.S[0].code ? this.S[0].value : nb(a, this.S[0])) != a.u.Ld) return !1;
		Mb(a.u, b);
		return !0
	},
	pb: function(a)
	{
		return 10 == this.S[0].code ? Yc(this, a, this) : Zc(this, a, this)
	},
	lF: function(a)
	{
		return this.S[0].value != a.Ca.$o ? !1 : 0 == a.Ca.oi ? !0 : !1
	},
	jw: function(a, b)
	{
		return b != a.Ca.$o ? !1 : 0 == a.Ca.oi ? !0 : !1
	}
});
var $c = 65535,
	ad = 1572863;

function kd()
{}
kd.prototype = {
	evaluate: function(a)
	{
		a.Bf[a.fd] = ""
	}
};

function ld()
{}
ld.prototype = {
	evaluate: function(a)
	{
		a.Bf[a.fd] = 0
	}
};

function md()
{}
md.prototype = {
	evaluate: function(a)
	{
		a.Bf[a.fd] = this.value
	}
};

function nd()
{}
nd.prototype = {
	evaluate: function(a)
	{
		a.Bf[a.fd] = this.value;
		a.jo = !0
	}
};

function od()
{}
od.prototype = {
	evaluate: function(a)
	{
		var b = pd(a.u, this.Zd);
		null == b ? a.Bf[a.fd] = 0 : (b = null != b.ub ? fd(b.ub, this.xl) : 0, Math.ceil(b) != b && (a.jo = !0), a.Bf[a.fd] = b)
	}
};

function qd()
{}
qd.prototype = {
	evaluate: function(a)
	{
		var b = pd(a.u, this.Zd);
		a.Bf[a.fd] = null == b ? "" : rd(b.ub, this.xl)
	}
};

function sd()
{}
sd.prototype = {
	evaluate: function(a)
	{
		a.Bf[a.fd] = td(a.m, this.xl)
	}
};

function ud()
{}
ud.prototype = {
	evaluate: function(a)
	{
		a.Bf[a.fd] = bd(a.m, this.xl)
	}
};

function vd()
{}
vd.prototype = {
	evaluate: function(a)
	{
		a.Bf[a.fd] = this.pd
	}
};

function wd()
{}
wd.prototype = {
	evaluate: function(a)
	{
		var b = pd(a.u, this.Zd);
		a.ui++;
		var c = xd(a);
		null != b && null != b.ub && 0 <= c && c < b.ub.ee.length ? (b = fd(b.ub, c), Math.ceil(b) != b && (a.jo = !0), a.Bf[a.fd] = b) : a.Bf[a.fd] = 0
	}
};

function yd()
{}
yd.prototype = {
	evaluate: function(a)
	{
		var b = pd(a.u, this.Zd);
		a.ui++;
		var c = xd(a);
		a.Bf[a.fd] = null != b && null != b.ub && 0 <= c && c < zd ? rd(b.ub, c) : ""
	}
};
window.FusionVersion = "Clickteam Fusion HTML5 Exporter Build 291.2";
var Jb = 8;

function Ad()
{
	var a = window.df;
	a.aw++;
	if (a.aw > a.vM)
	{
		var b = (new Bd(a.Jw.Lf, "content")).file("Application.ccj").WD();
		a.Jw = null;
		a.file = new Pa;
		Va(a.file, b);
		a.digest();
		Cd(a)
	}
	else
	{
		var parti = a.path.split('/');
		var filePath = parti[0] + '/' + a.aw + parti[1];

		b = F(a.file), a.Jw.getFile(filePath, Ad, b)
	}
}

function Dd()
{
	var a = window.df,
		b = F(a.kt);
	0 > a.zw && (a.zw = b);
	b != a.zw && (a.kt.Sh = !0, b = a.kt.ed(), window.open(a.yw + b, "_self"));
	a.jt = 25
}
window.loadApplication = Ad;
window.loadInfo = Dd;

function Ed(a, b, c, d)
{
	(this.HL = !0 === d) ? (this.canvas = a.canvas, this.tx = a.tx) : "string" === typeof a ? (this.canvas = document.getElementById(a), this.tx = this.canvas.parentElement) : a instanceof HTMLElement && (this.canvas = document.createElement("canvas"), this.tx = a);
	a = this.gA = a.gA || document.createElement("div");
	a.appendChild(this.canvas);
	this.tx.appendChild(a);
	a.style.overflow = "hidden";
	a.style.position = "relative";
	a.style.transform = "translateZ(0)";
	a.style.margin = "0";
	a.style.padding = "0";
	a.style.display = "block";
	a.style.boxSizing =
		"content-box";
	a.className = "MMFDiv";
	this.uF = this.vF = this.yA = null;
	this.oq = 0;
	this.appName = this.zA = null;
	this.Mq = 0;
	this.FA = this.FF = null;
	this.Vt = 0;
	this.Ku = this.Ed = this.Dk = this.td = this.Ba = this.Ke = this.EA = null;
	this.qc = this.jI = 0;
	this.at = this.bt = this.nH = this.Gu = this.ot = null;
	this.yh = this.cd = this.my = 0;
	this.nb = this.file = this.frame = null;
	this.rx = this.sx = this.Um = 0;
	this.Il = this.Z = null;
	this.YA = !1;
	this.AA = this.Ti = this.xF = this.yF = this.zF = this.fb = this.$a = this.dt = this.ct = this.xj = this.vj = 0;
	this.Zs = this.ux = this.mH = null;
	this.ij = this.hj = this.bL = this.aL = this.$s = 0;
	this.vf = null;
	this.RE = 0;
	this.cursor = "auto";
	this.Gx = !1;
	this.sA = this.lw = null;
	this.Sh = !1;
	this.wj = this.uj = 0;
	this.yB = this.CG = null;
	this.Bb = this.alpha = this.Cg = this.Bg = this.TE = 0;
	this.file = b;
	this.bn = "";
	this.path = c;
	b = c.lastIndexOf("/");
	0 <= b && (this.bn = c.substring(0, b + 1));
	this.Jj = 0;
	this.Z = null;
	this.el = this.fl = this.vi = 0;
	this.ro = !1;
	this.Dc = [];
	this.ju = -1;
	this.Bx = this.Xo = this.rH = this.tH = this.sH = this.qH = this.pH = 0;
	this.tj = this.Ef = this.WC = this.transition = null;
	this.Vz = !1;
	this.Tv =
		new gb;
	this.Hk = this.Gk = this.xi = null;
	this.Qt = 1770410840;
	this.jb = null;
	this.ds = this.hl = 0;
	this.jz = null;
	this.Sk = this.Rk = this.Hn = this.Gn = 0;
	this.fe = this.ge = 1;
	this.hasFocus = !0;
	this.it = this.Wz = !1;
	this.GA = this.Cx = null;
	this.zw = -1;
	this.kt = null;
	this.jt = 1E9;
	this.yw = null;
	0 <= window.location.href.indexOf("192.") && (b = window.location.href.indexOf("21700/"), 0 <= b && (this.yw = window.location.href.substring(0, b + 6), this.zw = -1, this.jt = 25));
	this.Ej = !1;
	this.cL = 3;
	this.Ms = new W;
	this.cw = new W;
	this.Yd = [];
	this.Kg = 0;
	this.Nh = null;
	this.nB =
		"Please touch the screen to start";
	this.fullScreen = !1;
	this.BI = "***version***";
	this.$C = this.Pu = 0;
	this.gj = null
}
Ed.prototype = {
	load: function()
	{
		this.vM = T(this.file);
		this.aw = 1;
		this.Jw = new Pa;
		var a = F(this.file);

		var parti = this.path.split('/');
		var filePath = parti[0] + '/' + this.aw + parti[1];

		this.Jw.getFile(filePath, Ad, a)
	},
	digest: function()
	{
		this.file.seek(0);
		var a = Ra(this.file);
		this.Sh = !1;
		80 == a[0] && 65 == a[1] && 77 == a[2] && 85 == a[3] && (this.Sh = !0);
		this.file.Sh = this.Sh;
		V(this.file, 8);
		V(this.file, 4);
		this.Ke = new Fd;
		this.Ba = new Gd(this);
		this.td = new Hd(this);
		this.Dk = new Id(this);
		this.Ed = new Jd(this);
		for (var b, c = 0; 32639 != c;)
			if (c = T(this.file), T(this.file),
				b = F(this.file), 0 != b)
			{
				a = this.file.Ga + b;
				switch (c)
				{
					case 8739:
						var d;
						V(this.file, 4);
						this.ct = T(this.file);
						this.dt = T(this.file);
						T(this.file);
						T(this.file);
						this.$a = T(this.file);
						this.fb = T(this.file);
						this.zF = F(this.file);
						this.yF = F(this.file);
						this.mH = Array(4);
						for (d = 0; 4 > d; d++) this.mH[d] = T(this.file);
						this.ux = Array(4 * Jb);
						for (d = 0; 4 > d; d++)
							for (b = 0; b < Jb; b++) this.ux[d * Jb + b] = T(this.file);
						this.xF = Ta(this.file);
						this.Ti = F(this.file);
						this.AA = F(this.file);
						V(this.file, 1);
						V(this.file, 3);
						this.yA = Array(this.Ti);
						this.vF = Array(this.Ti);
						this.uF = Array(this.Ti);
						this.zA = Array(this.Ti);
						for (b = 0; b < this.Ti; b++) this.zA[b] = null;
						break;
					case 8773:
						this.Bb = F(this.file);
						F(this.file);
						F(this.file);
						T(this.file);
						T(this.file);
						break;
					case 8740:
						this.appName = this.file.ed();
						break;
					case 8774:
						F(this.file);
						break;
					case 8750:
						this.file.ed();
						break;
					case 8782:
						this.nB = this.file.ed();
						break;
					case 8754:
						this.Mq = T(this.file);
						this.FA = Array(this.Mq);
						this.FF = Array(this.Mq);
						for (b = 0; b < this.Mq; b++) this.FA[b] = F(this.file);
						d = this.file;
						var e = this.FF,
							f = e.length;
						for (b = 0; b < f; b++) e[b] =
							d.oa();
						break;
					case 8755:
						this.Vt = F(this.file);
						this.EA = Array(this.Vt);
						for (b = 0; b < this.Vt; b++) this.EA[b] = this.file.ed();
						break;
					case 8745:
					case 8767:
						b = this.lw = new Kd(this);
						b.io = Array(1);
						b.lx = Array(1);
						for (d = 0; 1 > d; d++) b.io[d] = null, b.lx[d] = 0;
						d = new Ld;
						d.handle = 0;
						e = d.Iw();
						null != e && (b.io[d.handle] = d, b.lx[d.handle] = e.pw());
						this.Ke.Hl(this.file);
						break;
					case 8747:
						this.$s = b / 2;
						this.Zs = Array(this.$s);
						for (b = 0; b < this.$s; b++) this.Zs[b] = T(this.file);
						break;
					case 8778:
						this.ju = F(this.file);
						this.pH = F(this.file);
						this.qH = F(this.file);
						this.sH = F(this.file);
						this.tH = F(this.file);
						this.rH = Ta(this.file);
						this.Xo = F(this.file); - 1 != this.Xo && (b = this.file, d = b.Ga, d -= 4, 0 > d && (d = 0), b.Ga = d, this.Xo = Ta(this.file));
						this.Bx = F(this.file);
						this.YA = !0;
						break;
					case 13107:
						this.yA[this.oq] = this.file.Ga;
						for (d = 0; 32639 != d;)
							if (d = T(this.file), T(this.file), b = F(this.file), 0 != b)
							{
								e = this.file.Ga + b;
								switch (d)
								{
									case 13108:
										0 == this.oq && (V(this.file, 8), Ta(this.file));
										break;
									case 13110:
										this.zA[this.oq] = this.file.ed();
										break;
									case 13129:
										this.vF[this.oq] = F(this.file);
										this.uF[this.oq] =
											F(this.file);
										break;
									case 13128:
										for (f = b / 6, b = 0; b < f; b++)
										{
											var g = T(this.file);
											V(this.file, 4);
											0 != g && (this.Yd[g] = 1, this.Kg = Math.max(this.Kg, g + 1))
										}
								}
								this.file.seek(e)
							} this.oq++;
						break;
					case 8760:
						d = F(this.file);
						this.sA = Array(d);
						for (b = 0; b < d; b++) this.sA[b] = new Md(this), this.sA[b].Hl();
						break;
					case 26214:
						this.Ba.Hl(this.file);
						break;
					case 26215:
						this.td.Hl(this.file);
						break;
					case 26216:
						this.Dk.Hl(this.file)
				}
				this.file.seek(a)
			} this.context = new Nd(this.canvas);
		this.Ed.Rz = 0 != (this.ct & 1024);
		null == this.nb && (this.Ig = new Od)
	},
	click: function(a)
	{
		if (this.Tv.lt)
		{
			var b;
			for (b = 0; b < this.Dc.length; b++) this.Dc[b].click(a)
		}
	},
	oK: function(a)
	{
		var b = a.acceleration.x / 9.780318,
			c = a.acceleration.y / 9.780318,
			d = a.accelerationIncludingGravity.x / 9.780318;
		a = a.accelerationIncludingGravity.y / 9.780318;
		this.Gn = b;
		this.Hn = c;
		this.Rk = d;
		this.Sk = a;
		switch (window.orientation)
		{
			case 0:
				this.Gn = -b;
				this.Hn = c;
				this.Rk = -d;
				this.Sk = a;
				break;
			case 90:
				this.Gn = c;
				this.Hn = b;
				this.Rk = a;
				this.Sk = d;
				break;
			case 180:
				this.Gn = b;
				this.Hn = -c;
				this.Rk = d;
				this.Sk = -a;
				break;
			case -90:
				this.Gn = -c, this.Hn = -b, this.Rk = -a, this.Sk = -d
		}
		this.it && (this.Gn = -this.Gn, this.Hn = -this.Hn, this.Rk = -this.Rk, this.Sk = -this.Sk)
	},
	ow: function()
	{
		var a = 0; - .2 > this.Rk && (a |= 4);
		.2 < this.Rk && (a |= 8); - .2 > this.Sk && (a |= 1);
		.2 < this.Sk && (a |= 2);
		return a
	}
};

function Pd(a, b)
{
	if (b.up)
	{
		null == a.Nh && (b.oI = 2);
		switch (b.oI)
		{
			case 0:
				0 < b.sj && (b.sj -= 2, 0 > b.sj && (b.sj = 0, phase++));
				break;
			case 2:
				128 > b.sj && (b.sj += 4, 128 <= b.sj && (b.sj = 128, b.py = !0))
		}
		a.context.Ae(b.Og.left, b.Og.top, b.Og.right - b.Og.left, b.Og.bottom - b.Og.top, a.Jj, 0, 0);
		b.up.$c(a.context, b.Og.left, b.Og.top, Qd, b.sj);
		b.py && (b.up = null, b.Og = null, b.Cr = null)
	}
	else if (b.py = !0, null != a.Nh && 0 != (a.Bb & 33554432))
	{
		b.Cr = new Rd;
		Sd(b.Cr);
		b.Cr.le = 24;
		var c = b.Cr.le + 6;
		b.up = new $a(a, 120, c);
		var d = b.up.measureText(a.nB, b.Cr) + 64;
		b.up.resize(d,
			c);
		cb(b.up);
		bb(b.up, a.nB, null, 16776960, b.Cr, 2, 0);
		b.Og = new ra;
		b.Og.left = a.$a / 2 - d / 2;
		b.Og.top = a.fb / 2 - c / 2;
		b.Og.right = b.Og.left + d;
		b.Og.bottom = b.Og.top + c;
		b.sj = 128;
		b.oI = 0;
		b.py = !1;
		a.context.Ae(0, 0, a.$a, a.fb, a.Jj, 0, 0)
	}
	return b.py
}

function Td(a)
{
	null == a.jb && (a.jb = new Ud(a), Vd(a.jb), a.jb.reset(void 0), a.hl = 1, 0 > a.wi.indexOf(a.jb) && a.wi.add(a.jb))
}

function Wd(a, b)
{
	a.RE = b;
	a.canvas.style.cursor = 0 <= a.RE ? a.cursor : "none"
}

function Xd(a, b)
{
	for (var c = b.pageY, d = b.target; d && "BODY" != d.tagName;) c -= d.offsetTop, d = d.offsetParent;
	return Math.floor((c - a.wj) / a.ge)
}

function Yd(a, b)
{
	for (var c = b.pageX, d = b.target; d && "BODY" != d.tagName;) c -= d.offsetLeft, d = d.offsetParent;
	return Math.floor((c - a.uj) / a.fe)
}

function Zd(a, b, c)
{
	a.it && a.Nh && ($d(a.Nh), a.Nh = null);
	if (null != a.xi)
	{
		var d, e, f, g = c ? 1 : b.changedTouches.length;
		for (d = 0; d < g; d++)
		{
			var k;
			c ? (k = b, k.identifier = b.pointerId) : k = b.changedTouches[d];
			for (e = 0; 10 > e; e++)
				if (a.xi[e] == k.identifier)
				{
					a.xi[e] = 1770410840;
					if (a.pm[e]) ae(a.wi.get(a.Dr[e]), k);
					else
					{
						for (f = 0; f < a.wi.size(); f++) ae(a.wi.get(f), k);
						a.Gk[e] = Yd(a, k);
						a.Hk[e] = Xd(a, k)
					}
					if (e == a.Qt)
						for (a.hj = a.Gk[e], a.ij = a.Hk[e], a.Qt = 1770410840, a.vf[200] = !1, f = 0; f < a.Dc.length; f++) Zd(a.Dc[f], b, c)
				}
		}
	}
}

function be(a, b, c)
{
	if (null != a.xi)
	{
		var d, e, f, g = c ? 1 : b.changedTouches.length;
		for (d = 0; d < g; d++)
		{
			var k;
			c ? (k = b, k.identifier = b.pointerId) : k = b.changedTouches[d];
			for (e = 0; 10 > e; e++)
				if (a.xi[e] == k.identifier)
				{
					if (a.pm[e]) ce(a.wi.get(a.Dr[e]), k);
					else
					{
						for (f = 0; f < a.wi.size(); f++) ce(a.wi.get(f), k);
						a.Gk[e] = Yd(a, k);
						a.Hk[e] = Xd(a, k)
					}
					if (a.Qt == e)
						for (a.hj = a.Gk[e], a.ij = a.Hk[e], null != a.Z && null != a.Z.u && de(a.Z.u), e = 0; e < a.Dc.length; e++) be(a.Dc[e], b, c);
					break
				}
		}
	}
}

function ee(a, b, c)
{
	fe(a);
	!a.it && a.Nh && ($d(a.Nh), a.Nh = null);
	if (null != a.xi)
	{
		var d, e, f = c ? 1 : b.changedTouches.length;
		for (d = 0; d < f; d++)
		{
			var g;
			c ? (g = b, g.identifier = b.pointerId) : g = b.changedTouches[d];
			for (e = 0; 10 > e; e++)
				if (1770410840 == a.xi[e])
				{
					a.xi[e] = g.identifier;
					a.pm[e] = !1;
					for (o = 0; o < a.wi.size(); o++)
					{
						var k = a.wi.get(o),
							h = g,
							p = !1,
							l = Yd(k.app, h),
							r = Xd(k.app, h);
						k.LF = .5 * Math.ceil(Math.sqrt(k.Sd.width / 2 * k.Sd.width / 2 + k.Sd.height / 2 * k.Sd.height / 2));
						k.Yh = Math.ceil(Math.sqrt(k.Sd.width / 4 * k.Sd.width / 4 + k.Sd.height / 4 * k.Sd.height /
							4));
						l = k.getKey(l, r); - 1 != l && (k.touches[l] = h.identifier, 0 == l && (k.jb &= 240, p = !0), 1 == l ? (k.jb |= 16, p = !0) : 2 == l && (k.jb |= 32, p = !0));
						if (p)
						{
							a.pm[e] = !0;
							a.Dr[e] = o;
							break
						}
					}
					if (!a.pm[e] && (a.Gk[e] = Yd(a, g), a.Hk[e] = Xd(a, g), 1770410840 == a.Qt && 592880741 != g.identifier))
						for (a.Qt = e, a.hj = a.Gk[e], a.ij = a.Hk[e], a.ro = !0, a.vf[200] = !0, null != a.Z && null != a.Z.u && ge(a.Z.u, 0, 1), e = 0; e < a.Dc.length; e++) ee(a.Dc[e], b, c);
					break
				}
		}
	}
}

function fe(a)
{
	a.Tv.JF && null != a.Ku && "suspended" == a.Ku.state && a.Ku.resume()
}

function he(a, b)
{
	a.TE = "undefined" != typeof b.wheelDelta ? b.wheelDelta / 40 : -b.detail;
	if (null != a.Z && null != a.Z.u)
	{
		var c = a.Z;
		0 > a.TE ? ie(c.u, -720902) : ie(c.u, -655366)
	}
}

function je(a, b)
{
	if (a.Tv.lt)
	{
		null != a.Z && null != a.Z.u && ge(a.Z.u, 0, 2);
		var c;
		for (c = 0; c < a.Dc.length; c++) je(a.Dc[c], b)
	}
}

function ke(a, b)
{
	a.vf[200] = !1;
	a.vf[201] = !1;
	a.vf[202] = !1;
	var c;
	for (c = 0; c < a.Dc.length; c++) ke(a.Dc[c], b);
	a.rn || Zd(a, new le(b.pageX, b.pageY, a.canvas), !1)
}

function me(a, b, c)
{
	var d = ne(b);
	oe(a, b, a.canvas, 305419896);
	a.ro = !0;
	a.vf[d] = !0;
	fe(a);
	if (null != a.Z && null != a.Z.u)
		if (c)
		{
			var e = Date.now(),
				f = null !== a.yB && a.CG == d && 300 >= e - a.yB ? 2 : 1;
			a.CG = d;
			a.yB = e;
			ge(a.Z.u, d - 200, f)
		}
	else a.Tv.lt ? ge(a.Z.u, d - 200, 1) : ge(a.Z.u, d - 200, 0 == b.detail % 2 ? 2 : 1);
	for (d = 0; d < a.Dc.length; d++) me(a.Dc[d], b, c);
	a.rn || ee(a, new le(b.pageX, b.pageY, a.canvas), !1);
	window.focus()
}

function pe(a, b)
{
	var c = ne(b);
	oe(a, b, a.canvas, 305419896);
	a.vf[c] = !1;
	for (c = 0; c < a.Dc.length; c++) pe(a.Dc[c], b);
	a.rn || Zd(a, new le(b.pageX, b.pageY, a.canvas), !1)
}

function ne(a)
{
	if (a.which) switch (a.which)
	{
		case 2:
			return 201;
		case 3:
			return 202;
		default:
			return 200
	}
	else switch (a.button)
	{
		case 2:
			return 202;
		case 4:
			return 201;
		default:
			return 200
	}
}

function oe(a, b, c, d)
{
	b.pageX ? (a.hj = b.pageX, a.ij = b.pageY) : b.clientY && (a.hj = b.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, a.ij = b.clientY + document.body.scrollTop + document.documentElement.scrollTop);
	for (var e = 0, f = 0, g = c; g && "BODY" != g.tagName;) e += g.offsetTop, f += g.offsetLeft, g = g.offsetParent;
	a.hj -= f + a.uj;
	a.ij -= e + a.wj;
	a.hj = Math.floor(a.hj / a.fe);
	a.ij = Math.floor(a.ij / a.ge);
	null != a.Z && null != a.Z.u && de(a.Z.u);
	for (e = 0; e < a.Dc.length; e++) oe(a.Dc[e], b, c);
	a.rn || 305419896 == d || be(a, new le(b.pageX,
		b.pageY, a.canvas), !1)
}

function qe(a, b)
{
	if (b)
	{
		a.vf[b.keyCode] = !1;
		var c;
		for (c = 0; c < a.Dc.length; c++) qe(a.Dc[c], b)
	}
}

function re(a, b)
{
	if (b)
	{
		a.vf[b.keyCode] = !0;
		a.ro = !0;
		if (null != a.Z && null != a.Z.u)
		{
			var c = a.Z.u;
			null != c.D && 0 != c.Ds && (c.D.pr = 0, ie(c, -524294))
		}
		for (c = 0; c < a.Dc.length; c++) re(a.Dc[c], b)
	}
}

function td(a, b)
{
	var c = se(a, b);
	return null != c ? c[b] : ""
}

function se(a, b)
{
	var c;
	for (c = a; null == c.at;) c = c.nb;
	c = c.at;
	if (0 > b || 1E3 < b) return null;
	var d = c.length;
	if (b + 1 > d)
		for (; d < b + 1; d++) c.push("");
	return c
}

function pb(a, b, c)
{
	a = te(a, b);
	null != a && (a[b] = c)
}

function bd(a, b)
{
	var c = te(a, b);
	return null != c ? c[b] : 0
}

function te(a, b)
{
	var c;
	for (c = a; null == c.bt;) c = c.nb;
	c = c.bt;
	if (0 > b || 1E3 < b) return null;
	var d = c.length;
	if (b + 1 > d)
		for (; d < b + 1; d++) c.push(0);
	return c
}

function ue(a)
{
	for (var b = a; null == b.Gu;) b = a.nb;
	return b.Gu
}

function ve(a)
{
	for (var b = a; null == b.ot;) b = a.nb;
	return b.ot
}

function ab(a, b)
{
	if (a.GA)
	{
		var c;
		for (c = 0; c < a.GA.size(); c++)
			if (gFont = a.GA.get(c), gFont.MO(b)) return gFont
	}
	return b
}

function we(a)
{
	null != a.transition && (a.tj = a.transition.F, a.transition.end(), a.transition = null, a.Ef = null, 4 == a.qc && (a.qc = 5))
}

function ze(a, b)
{
	var c, d, e = a.frame.Ys;
	if (null != e)
	{
		c = document.createElement("canvas");
		c.width = a.$a;
		c.height = a.fb;
		d = document.createElement("canvas");
		d.width = a.$a;
		d.height = a.fb;
		var f = new Nd(d);
		f.Ae(0, 0, a.$a, a.fb, a.Jj);
		a.Ig.$c(f, 0, 0);
		f = new Nd(c);
		0 != (e.Mu & Ae) ? f.Ae(0, 0, a.$a, a.fb, e.Lu) : (f.Ae(0, 0, a.$a, a.fb, a.xF), null != b && f.an(b, 0, 0, b.width, b.height, 0, 0));
		a.Ef = document.createElement("canvas");
		a.Ef.width = a.$a;
		a.Ef.height = a.fb;
		a.Ef.getContext("2d").drawImage(c, 0, 0);
		a.transition = Be(a).fq(e, a.Ef, c, d);
		if (null !=
			a.transition)
		{
			a.qc = 2;
			return
		}
	}
	a.Ef = null;
	a.qc = 3;
	Ce(a.Z)
}

function Be(a)
{
	null == a.WC && (a.WC = new De(a));
	return a.WC
}

function Ee(a)
{
	var b;
	b = a.Z;
	var c;
	100 < b.Tc && (b.Tc = -2);
	c = b.rr;
	var d, e, f, g, k, h;
	for (f = 0; f < b.ua.length; f++)
		if (e = b.ua[f], h = e.Nc, 32767 != e.lf && 0 == (h & 2147483648) && (g = Fe(b.m.Ke, e.lf), 0 != (g.Cl & Ge) && (d = b.W[h], e.pg == He || e.pg == Ie || null != d.ub)))
		{
			k = e.To + e.pg.toString();
			null == b.m.im && (b.m.im = new W);
			var p = !1;
			g = null;
			for (d = 0; d < b.m.im.size(); d++)
				if (g = b.m.im.get(d), k == g.name)
				{
					p = !0;
					break
				} 0 == p ? (g = new Je, g.name = k, g.ye = new W, b.m.im.add(g)) : g.ye.clear();
			for (;;)
			{
				d = b.W[h];
				if (e.pg == He) h = new Ke, h.text = d.vr, h.Oc = d.Oc, g.ye.add(h);
				else if (e.pg == Ie) h = new Le, h.value = d.hb, h.Oc = d.Oc, h.af = d.af, h.fy = d.fy, h.ey = d.ey, g.ye.add(h);
				else
				{
					k = new Me;
					k.Vb = d.ub.hy;
					k.values = Array(d.ub.ee.length);
					for (h = 0; h < d.ub.ee.length; h++) k.values[h] = d.ub.ee[h];
					k.Ql = Array(d.ub.oh.length);
					for (h = 0; h < d.ub.oh.length; h++) k.Ql[h] = d.ub.oh[h];
					g.ye.add(k)
				}
				h = d.Rd;
				if (0 != (h & 2147483648)) break
			}
		} Ne(b);
	Oe(b, !1);
	Pe(b.u);
	Qe(b);
	Re(b);
	Se(b, !0);
	e = b.m;
	null != e.jb && (1 == e.hl && Wa(e.wi, e.jb), e.jb = null);
	2 == e.hl && (e.ds--, 0 >= e.ds && (window.DeviceMotionEvent && window.removeEventListener("devicemotion",
		e.jz), e.ds = 0));
	e.hl = 0;
	b = c << 16 | b.Tc & 65535;
	if (0 != (a.dt & 4)) a.qc = 6;
	else switch (b & 65535)
	{
		case 1:
			a.cd = a.yh + 1;
			1 == a.ju && a.cd == a.Bx && a.cd++;
			a.qc = 1;
			a.cd >= a.Ti && (a.qc = 6);
			break;
		case 2:
			a.cd = Math.max(0, a.yh - 1);
			1 == a.ju && a.cd == a.Bx && (0 == a.cd ? a.cd = a.yh : a.cd--);
			a.qc = 1;
			break;
		case 3:
			a.qc = 1;
			0 != (b >> 16 & 32768) ? (a.cd = b >> 16 & 32767, a.cd >= a.Ti && (a.cd = a.Ti - 1), 0 > a.cd && (a.cd = 0)) : b >> 16 < a.$s ? (a.cd = a.Zs[b >> 16], -1 == a.cd && (a.cd = a.yh + 1)) : a.cd = a.yh + 1;
			break;
		case 4:
			a.qc = 0;
			a.cd = a.my;
			break;
		default:
			a.qc = 6
	}
	1 == a.qc && (0 > a.cd || a.cd >= a.Ti) && (a.qc =
		a.yh);
	if (1 != a.qc || a.cd != a.yh)
	{
		for (b = 0; b < a.frame.We; b++) Te(a.frame.kc[b]);
		a.frame = null;
		a.yh = -1
	}
}

function Ue(a)
{
	null != a.nb ? (a.vj = 0, a.xj = 0) : (a.vj = a.$a / 2 - a.frame.nt / 2, a.xj = a.fb / 2 - a.frame.mt / 2);
	var b;
	for (b = 0; b < a.frame.We; b++)
	{
		var c = a.frame.kc[b],
			d = a.vj,
			e = a.xj;
		c.$d.x = d;
		c.$d.y = e;
		c.ld.x = d;
		c.ld.y = e;
		c.Pb.x = d;
		c.Pb.y = e;
		c.show()
	}
}

function Ve(a, b, c, d)
{
	a.Qj || (a.context.Px(0 != (a.Bb & 4)), null == a.Ef ? (d || a.context.Ae(b, c, a.sx, a.rx, a.Jj), a.context.clip(b, c, a.sx, a.rx), a.Ig.$c(a.context, 0, 0), a.context.MN()) : (a.context.Px(), a.context.an(a.Ef, b, c, a.$a, a.fb, 0, 0)))
}

function We(a)
{
	a.yw && (a.jt--, 0 > a.jt && (a.jt = 1E9, a.kt = new Pa, a.kt.getFile(a.yw + "info.dat", Dd)));
	a.vi = (new Date).getTime();
	0 == (a.Bb & 1048576) && (a.hasFocus ? a.Wz && (a.Z.resume(), a.Wz = !1) : (a.Z.pause(a.dt & 8), a.Wz = !0));
	var b = !0,
		c = !0;
	do switch (a.qc)
	{
		case 0:
			var d, e = a;
			if (null == e.nb || null != e.nb && 0 == (e.Um & Xe))
				for (e.ot = Array(4), d = 0; 4 > d; d++) e.ot[d] = e.yF ^ 4294967295;
			else e.ot = null;
			if (null == e.nb || null != e.nb && 0 == (e.Um & Ye))
				for (e.Gu = Array(4), d = 0; 4 > d; d++) e.Gu[d] = e.zF ^ 4294967295;
			else e.Gu = null;
			e.nH = Array(4);
			for (d = 0; 4 > d; d++) e.nH[d] =
				"";
			if (null == e.nb || null != e.nb && 0 == (e.Um & Ze))
				for (e.bt = Array(e.Mq), d = 0; d < e.Mq; d++) e.bt[d] = e.FA[d];
			else e.bt = null;
			if (null == e.nb || null != e.nb && 0 == (e.Um & Ze))
				for (e.at = Array(e.Vt), d = 0; d < e.Vt; d++) e.at[d] = e.EA[d];
			else e.at = null;
			a.cd = a.my;
			a.qc = 1;
			a.im = null;
		case 1:
			d = a;
			if (d.cd != d.yh)
			{
				d.frame = new $e(d);
				var f, g, k, h, p, l, e = d.frame;
				e.app.file.seek(e.app.yA[d.cd]);
				e.Xs = new af(e.app);
				e.Gf = new bf;
				e.Ew = new ra;
				f = 0;
				for (e.dx = -1; 32639 != f;)
					if (f = T(e.app.file), T(e.app.file), g = F(e.app.file), 0 != g)
					{
						e.HM = e.app.file.Ga + g;
						switch (f)
						{
							case 13108:
								e.WA();
								null != e.app.nb && 0 != (e.app.Um & cf) ? (e.nt = e.app.aL, e.mt = e.app.bL) : (e.nt = Math.min(e.app.$a, e.Mf), e.mt = Math.min(e.app.fb, e.ue));
								break;
							case 13128:
								k = g / 6;
								e.Ot = Array(k);
								e.hh = Array(k);
								e.ih = Array(k);
								for (g = e.Kg = 0; g < k; g++) e.Ot[g] = T(e.app.file), e.Kg = Math.max(e.Kg, e.Ot[g]), e.hh[g] = T(e.app.file), e.ih[g] = T(e.app.file);
								e.Kg++;
								break;
							case 13130:
								e.jb = T(e.app.file);
								e.gt = T(e.app.file);
								break;
							case 13122:
								e.Ew.load(e.app.file);
								break;
							case 13124:
								e.dx = T(e.app.file);
								break;
							case 13127:
								e.YF = F(e.app.file);
								break;
							case 13109:
								e.wF = e.app.file.ed();
								break;
							case 13115:
								e.Ys = new qf;
								e.Ys.load(e.app.file);
								break;
							case 13116:
								e.uA = new qf;
								e.uA.load(e.app.file);
								break;
							case 13121:
								k = e;
								k.We = F(k.app.file);
								k.kc = Array(k.We);
								for (g = 0; g < k.We; g++) k.kc[g] = new rf(k.app), k.kc[g].load(k.app.file);
								break;
							case 13125:
								k = e;
								for (g = 0; g < k.We; g++) k.kc[g].Bg = F(k.app.file), k.kc[g].Cg = F(k.app.file), V(k.app.file, 12);
								break;
							case 13112:
								e.Gf.load(e.app);
								break;
							case 13117:
								e.Xs.load(e.app), e.gk = e.Xs.gk
						}
						e.app.file.seek(e.HM)
					} e.app.Ke.si();
				for (g = 0; g < e.Gf.jj; g++) e.app.Ke.on(e.Gf.list[g].bi);
				e.app.Ba.si();
				e.app.Dk.si();
				e.app.td.si();
				e.app.Ke.load(e.app.file);
				e.app.Ke.je(e.app.Ba, e.app.td);
				e.app.Bb & 16777216 && (e.app.td.Hu(), e.app.Dk.Hu(), 0 == e.app.Kg && e.app.Ba.Hu());
				e.app.Ba.load(e.app.file);
				e.app.td.load(e.app.file);
				var r = e.Xs,
					u = e.app.Dk;
				for (h = 0; h < r.Tt; h++)
					for (l = r.Dg[h], k = 0; k < l.Gd + l.zh; k++)
						for (p = l.yc[k], g = 0; g < p.gg; g++) switch (p.S[g].code)
						{
							case 6:
							case 35:
								f = p.S[g], u.cl(f.ly)
						}
				e.app.Dk.load();
				g = e.app.Ke;
				for (f = 0; f < g.Qm; f++) g.ze[f].Cl &= -17;
				for (g = 0; g < e.Gf.jj; g++) k = e.Gf.list[g], k.pt >= Nb && (f = e.app.Ke, k = k.bi, f.ze[f.Dl[k]].Cl |=
					16)
			}
			d.Jj = d.frame.MF;
			d.yh = d.cd;
			d.frame.xm = d.frame.ym = 0;
			d.frame.QA = d.frame.RA = 0;
			d.frame.VH = !1;
			e = d;
			e.Ej = !1;
			e.bI = 0;
			e.yN = e.zN = 1;
			e.BN = e.AN = e.$a / 2;
			e.DN = e.CN = e.fb / 2;
			null != d.nb ? (d.vj = 0, d.xj = 0) : (d.vj = d.$a / 2 - d.frame.nt / 2, d.xj = d.fb / 2 - d.frame.mt / 2);
			for (e = 0; e < d.frame.We; e++) f = d.frame.kc[e], g = d.vj, k = d.xj, f.$d = new Od, f.$d.x = g, f.$d.y = k, f.ld = new Od, f.ld.x = g, f.ld.y = k, f.Pb = new Od, f.Pb.x = g, f.Pb.y = k, f.rp(0), f.scale = 1, sf(f), Tf(f), Uf(f, f.app.$a / 2), Vf(f, f.app.fb / 2), Wf(f, f.app.$a / 2), Xf(f, f.app.fb / 2), Yf(f), Zf(f.app.Ig, f.$d),
				Zf(f.app.Ig, f.ld), Zf(f.app.Ig, f.Pb), f.Bb & 16 ? f.show() : f.uw();
			d.frame.vd & $f && (document.title = d.frame.wF);
			d.Cx = null;
			d.frame.vd & ag && (d.Cx = d.tj);
			d.frame.vd & bg && (d.frame.Dw = !0);
			d.Z.N = d.frame;
			e = d.Z;
			f = null != d.frame.Ys;
			cg(e);
			e.m.hl = 0;
			null == e.m.nb && e.m.rn && (3 == e.N.jb ? (null == e.m.jb && (e.m.jb = new Ud(e.m), Vd(e.m.jb)), e.m.jb.reset(0), Td(e.m)) : 0 != e.N.jb && (g = 0, 0 != (e.N.gt & 1) && (g = 2), 0 != (e.N.gt & 2) && (g |= 4), 0 != (e.N.gt & 4) && (g |= 8), 1 == e.N.jb && (g |= 1), 0 != (g & 7) && (Td(e.m), e.m.jb.reset(g)), 2 == e.N.jb && (g = e.m, 0 == g.ds && window.DeviceMotionEvent &&
				(g.jz = g.oK.bind(g), window.addEventListener("devicemotion", g.jz)), g.ds++, g.hl = 2)));
			e.FC = 255;
			f && (e.Ze |= 16);
			dg(e);
			Se(e, !1);
			eg(e);
			e.de = 0;
			fg(e, f);
			gg(e);
			for (f = 0; f < e.N.We; f++) g = e.N.kc[f], g.Bb & nc && g.uw();
			hg(e);
			ig(e.u);
			jg(e.u, e);
			Wd(e.m, 1);
			kg(e);
			e.rr = 0;
			lg(e);
			e.Yz = !1;
			d.qc = 3;
			null != d.frame.Ys ? d.Qj ? d.Vz = !0 : 0 != mg(d.Z) ? d.qc = 5 : (d.qc = 3, ze(d, d.tj), d.tj = null) : d.tj = null;
			d.Qj ? d.Z.pause(!0) : d.Z.Yk();
			break;
		case 2:
			null != a.transition ? ng(a.transition) ? d = !1 : (a.transition.od(og), d = !0) : d = !1;
			0 == d ? (d = a, null != d.transition && (d.transition.end(),
				d.transition = null, d.Ef = null, 2 == d.qc && (d.qc = 3), Ce(d.Z)), 6 != a.qc && 0 != a.qc || Ee(a)) : b = !1;
			break;
		case 3:
			mg(a.Z);
			if (0 != a.Z.Tc)
			{
				a:
				{
					f = a;g = f.frame.uA;
					if (null != g && (e = document.createElement("canvas"), e.width = f.$a, e.height = f.fb, d = document.createElement("canvas"), d.width = f.$a, d.height = f.fb, k = new Nd(e), k.Ae(0, 0, f.$a, f.fb, f.Jj), f.Ig.$c(k, 0, 0), k = new Nd(d), 0 != (g.Mu & Ae) ? k.Ae(0, 0, f.$a, f.fb, g.Lu) : k.Ae(0, 0, f.$a, f.fb, 0), f.Ef = document.createElement("canvas"), f.Ef.width = f.$a, f.Ef.height = f.fb, f.Ef.getContext("2d").drawImage(e,
							0, 0), f.transition = Be(f).fq(g, f.Ef, e, d), null != f.transition))
					{
						f.qc = 4;
						d = !0;
						break a
					}
					f.Ef = null;d = !1
				}
				d ? a.qc = 4 : Ee(a)
			}
			else b = !1;
			break;
		case 4:
			a:
			{
				d = a;
				if (null != d.transition)
				{
					if (ng(d.transition))
					{
						we(d);
						d = !1;
						break a
					}
					d.transition.od(pg)
				}
				d = !0
			}
			0 == d ? (we(a), 6 != a.qc && 0 != a.qc || Ee(a)) : b = !1;
			break;
		case 5:
			Ee(a);
			break;
		default:
			b = !1
	}
	while (1 == b);
	6 == a.qc && (c = !1);
	if (c)
	{
		if (a.Qj)
		{
			if (null == a.Il)
			{
				b = a.Jj;
				a.YA ? (a.Il = 0 == a.ju ? new qg(a) : new rg(a), 0 == a.ju && -1 != a.Xo && (b = a.Xo)) : a.Il = new sg(a);
				a.uH = !1;
				a.AC = !0;
				null == a.nb && (a.frame.Dw ? a.context.Vv(0,
					0, a.canvas.width, a.canvas.height) : a.context.Ae(0, 0, a.$a, a.fb, b), tg());
				return
			}
			if (null != a.Il && 0 == a.uH)
			{
				a.uH = a.Il.load();
				null == a.nb && tg();
				return
			}
			for (; 0 < a.Ms.size() && a.cw.size() < a.cL;) b = a.Ms.get(0), a.cw.add(b), Xa(a.Ms, 0), b.lA();
			ug(a.Ed);
			b = !1;
			0 == a.Ms.size() && 0 == a.cw.size() && (b = !0);
			null == a.Il || 0 == (a.Bb & 16777216) && 0 == (a.frame.gt & vg) || (a.AC || (a.Il.reset(), a.AC = !0), a.Il.step(), b = a.Il.OA());
			b && (a.AC = !1, a.Z.resume(), a.Z.Yk(), a.Qj = !1, a.Ba.si(), a.Dk.si(), a.td.si(), a.fl = 0, a.el = 0, a.Vz && (a.Vz = !1, 0 != mg(a.Z) ? a.qc =
				5 : (a.qc = 3, ze(a, a.tj), a.tj = null)));
			null == a.nb && tg()
		}
		else null == a.nb && (null == a.Ef ? (a.context.Px(0 != (a.Bb & 4)), a.Cx ? a.context.an(a.Cx, 0, 0, a.$a, a.fb, 0, 0) : a.frame.Dw ? a.context.Vv(0, 0, a.$a, a.fb) : a.context.Ae(0, 0, a.$a, a.fb, a.Jj), b = a.context.Lb, a.Ej && (bRestore = !0, b.save(), b.translate(a.AN, a.CN), 0 != a.bI && b.rotate(.0174532925 * -a.bI), b.scale(Math.max(.001, a.yN), Math.max(.001, a.zN)), b.translate(-a.BN, -a.DN)), a.Ig.$c(a.context, 0, 0), a.Ej && b.restore(), a.hl && a.jb.$c(a.context), a.$C && (a.$C--, a.sy || (b = new Rd, Sd(b),
			b.le = 16, a.sy = new $a(a, a.$a, 30), cb(a.sy, 16711680), bb(a.sy, window.FusionVersion, null, 16777215, b, 1, 10526880)), a.sy.$c(a.context, 0, 0, 0, 0))) : (a.context.Px(), a.context.an(a.Ef, 0, 0, a.$a, a.fb, 0, 0)), 0 != (a.dt & 4096) && window.requestAnimationFrame ? window.requestAnimationFrame(wg) : (b = (new Date).getTime() - a.vi, b = Math.max(1E3 / a.AA - b, 1), window.setTimeout(wg, b)));
		return !0
	}
	null != a.Ed && ub(a.Ed);
	return !1
}

function xg(a, b)
{
	a.Ms.add(b);
	a.fl++;
	a.Qj = !0
}

function yg(a, b)
{
	Wa(a.cw, b);
	a.el++
}

function zg()
{
	var a = "Android;webOS;iPhone;iPad;iPod;Blackberry;Windows Phone;Touch".split(";"),
		b = navigator.userAgent,
		c;
	for (c in a)
		if (0 <= b.indexOf(a[c])) return !0;
	return "ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? !0 : !1
}

function Ag(a)
{
	var b = a.$a,
		c = a.fb,
		d, e;
	a.fullScreen || a.ct & 16 ? (d = window.innerWidth, e = window.innerHeight, document.documentElement.style.overflow = "hidden", document.body.scroll = "no") : (d = b, e = c);
	d /= b;
	e /= c;
	if (a.Bb & 1 || a.ct & 16 && a.ct & 4) d = e = Math.min(d, e);
	if (d != a.fe || e != a.ge) a.fe = d, a.ge = e, a.canvas.width = Math.floor(a.fe * b), a.canvas.height = Math.floor(a.ge * c), a.context.dI(a.fe, a.ge);
	a.Z && a.Z.km()
}

function Cd(a)
{
	a.it = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent) || /iPod/i.test(navigator.userAgent);
	a.it && 0 < a.Dk.bd && (a.Nh = new Bg(a), Cg(a.Nh));
	Ag(a);
	a.vf = Array(203);
	var b;
	for (b = 0; 203 > b; b++) a.vf[b] = !1;
	a.canvas.df = a;
	if (null == a.nb)
	{
		window.addEventListener("keypress", function(b)
		{
			b && (a.BI.charCodeAt(a.Pu) == b.charCode ? (a.Pu++, a.Pu == a.BI.length && (a.$C = 250, a.Pu = 0)) : a.Pu = 0)
		}, !1);
		window.addEventListener("keydown", function(b)
		{
			re(a, b)
		}, !1);
		window.addEventListener("keyup", function(b)
		{
			qe(a,
				b)
		}, !1);
		window.addEventListener("blur", function()
		{
			a.hasFocus = !1
		}, !1);
		window.addEventListener("focus", function()
		{
			a.hasFocus = !0
		}, !1);
		if (window !== window.top) try
		{
			var c = window.top;
			c.addEventListener("focus", function()
			{
				a.hasFocus = !0;
				a.canvas.focus()
			});
			c.addEventListener("blur", function()
			{
				a.hasFocus = !1
			})
		}
		catch (d)
		{}
		window.addEventListener("resize", function()
		{
			Ag(a)
		}, !1);
		document.addEventListener("blur", function()
		{
			a.hasFocus = !1
		}, !1);
		document.addEventListener("focus", function()
		{
			a.hasFocus = !0
		}, !1);
		document.addEventListener("fullscreenchange",
			function()
			{
				a.fullScreen = document.nP;
				Ag(a)
			}, !1);
		document.addEventListener("mozfullscreenchange", function()
		{
			a.fullScreen = document.mozFullScreen;
			Ag(a)
		}, !1);
		document.addEventListener("webkitfullscreenchange", function()
		{
			a.fullScreen = document.webkitIsFullScreen;
			Ag(a)
		}, !1);
		window.PointerEvent ? ("undefined" !== typeof CRunMultipleTouch && (a.canvas.setAttribute("style", "-ms-touch-action: none;"), a.canvas.setAttribute("style", "touch-action: none;")), a.canvas.addEventListener("pointerdown", function(b)
		{
			switch (b.pointerType)
			{
				case "mouse":
				case "pen":
					me(a,
						b, !0);
					break;
				case "touch":
					ee(a, b, !0)
			}
			b.preventDefault && b.preventDefault()
		}, !1), a.canvas.addEventListener("pointermove", function(b)
		{
			switch (b.pointerType)
			{
				case "mouse":
				case "pen":
					oe(a, b, a.canvas);
					break;
				case "touch":
					be(a, b, !0)
			}
			b.preventDefault && b.preventDefault()
		}, !1), a.canvas.addEventListener("pointerup", function(b)
		{
			switch (b.pointerType)
			{
				case "mouse":
				case "pen":
					pe(a, b);
					break;
				case "touch":
					Zd(a, b, !0)
			}
			b.preventDefault && b.preventDefault()
		}, !1), a.canvas.addEventListener("pointercancel", function(b)
		{
			switch (b.pointerType)
			{
				case "touch":
					Zd(a,
						b, !0)
			}
			b.preventDefault && b.preventDefault()
		}, !1)) : (a.canvas.addEventListener("mousemove", function(b)
		{
			oe(a, b, a.canvas);
			b.preventDefault && b.preventDefault()
		}, !1), a.canvas.addEventListener("mousedown", function(b)
		{
			me(a, b, !1);
			b.preventDefault && b.preventDefault()
		}, !1), a.canvas.addEventListener("mouseup", function(b)
		{
			pe(a, b);
			b.preventDefault && b.preventDefault()
		}, !1), a.canvas.addEventListener("mouseout", function(b)
		{
			ke(a, b);
			b.preventDefault && b.preventDefault()
		}, !1), a.canvas.addEventListener("click", function(b)
		{
			a.click(b);
			b.preventDefault && b.preventDefault()
		}, !1), a.canvas.addEventListener("dblclick", function(b)
		{
			je(a, b);
			b.preventDefault && b.preventDefault()
		}, !1));
		a.canvas.addEventListener("contextmenu", function(a)
		{
			a.preventDefault && a.preventDefault()
		}, !1);
		b = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel";
		document.attachEvent ? document.attachEvent("on" + b, function(b)
		{
			he(a, b)
		}) : document.addEventListener && document.addEventListener(b, function(b)
		{
			he(a, b)
		}, !1);
		document.onselectstart = function()
		{
			return !1
		};
		a.canvas.onselectstart =
			function(a)
			{
				a.preventDefault && a.preventDefault();
				return !1
			};
		a.rn = zg();
		a.wi = new W;
		a.xi = Array(10);
		a.pm = Array(10);
		a.Dr = Array(10);
		a.Gk = Array(10);
		a.Hk = Array(10);
		for (b = 0; 10 > b; b++) a.xi[b] = 1770410840, a.Gk[b] = 0, a.Hk[b] = 0, a.pm[b] = !1, a.Dr[b] = 0;
		a.rn && !window.PointerEvent && (a.canvas.addEventListener("touchstart", function(b)
		{
			ee(a, b, !1);
			b.preventDefault && b.preventDefault()
		}, !1), a.canvas.addEventListener("touchmove", function(b)
		{
			be(a, b, !1);
			b.preventDefault && b.preventDefault()
		}, !1), a.canvas.addEventListener("touchend",
			function(b)
			{
				Zd(a, b, !1);
				b.preventDefault && b.preventDefault()
			}, !1), a.canvas.addEventListener("touchcancel", function(b)
		{
			Zd(a, b, !1);
			b.preventDefault && b.preventDefault()
		}, !1));
		window.focus();
		tg()
	}
	else
		for (a.rn = a.nb.rn, a.wi = new W, a.xi = Array(10), a.pm = Array(10), a.Dr = Array(10), a.Gk = Array(10), a.Hk = Array(10), b = 0; 10 > b; b++) a.xi[b] = 1770410840, a.Gk[b] = 0, a.Hk[b] = 0, a.pm[b] = !1, a.Dr[b] = 0;
	a.uj = 0;
	a.wj = 0;
	a.qc = 0;
	a.yh = -2;
	a.Z = new Dg(a)
}

function tg()
{
	window.setTimeout(window.tI + "()", 20)
}

function le(a, b, c)
{
	this.changedTouches = Array(1);
	this.changedTouches[0] = {
		pageX: a,
		pageY: b,
		target: c,
		identifier: 592880741
	}
}
var $f = 1,
	ag = 4,
	bg = 131072,
	vg = 256;

function $e(a)
{
	this.app = a;
	this.D = null;
	this.MF = this.ue = this.Mf = 0;
	this.Dw = !1;
	this.vd = 0;
	this.Ew = null;
	this.mt = this.nt = 0;
	this.wF = null;
	this.We = 0;
	this.Xs = this.Gf = this.kc = null;
	this.YF = this.dx = this.RA = this.QA = this.ym = this.xm = this.gk = 0;
	this.ih = this.hh = this.Ot = this.uA = this.Ys = null;
	this.gt = this.jb = this.Kg = 0
}
$e.prototype = {
	WA: function()
	{
		this.Mf = F(this.app.file);
		this.ue = F(this.app.file);
		this.MF = Ta(this.app.file);
		this.vd = F(this.app.file)
	}
};
var xb = 32;

function Jd(a)
{
	this.app = a;
	this.rc = null;
	this.Rz = !1;
	this.fE = !0;
	this.Cs = this.Qu = null;
	this.kG = 0;
	this.ao = null;
	this.iA = !1;
	this.rc = Array(xb);
	this.Qu = Array(xb);
	this.Cs = Array(xb);
	this.Rz = this.fE = !0;
	var b;
	for (b = 0; b < xb; b++) this.rc[b] = null, this.Qu[b] = 100, this.Cs[b] = !1;
	this.kG = 100;
	b = new Audio;
	var c = Array(4);
	c[0] = b.canPlayType("audio/ogg");
	c[1] = b.canPlayType("audio/x-m4a");
	c[2] = b.canPlayType("audio/mpeg");
	c[3] = b.canPlayType("audio/wav");
	for (b = this.rB = this.gC = 0; 4 > b; b++) "probably" == c[b] && (this.gC |= 1 << b), "maybe" ==
		c[b] && (this.rB |= 1 << b);
	for (; null != a.nb;) a = a.nb;
	this.context = a.Ku;
	this.eq = a.jI;
	null == this.context && ("undefined" !== typeof AudioContext ? (this.context = new AudioContext, this.eq = 1) : "undefined" !== typeof webkitAudioContext && (this.context = new webkitAudioContext, this.eq = 0), a.Ku = this.context, a.jI = this.eq)
}
Jd.prototype = {
	reset: function()
	{
		var a;
		for (a = 0; a < xb; a++) this.Cs[a] = !1
	},
	play: function(a, b, c, d)
	{
		if (0 != this.fE)
		{
			var e;
			e = this.app.Dk;
			e = 0 <= a && a < e.Jm && -1 != e.xb[a] ? e.tp[e.xb[a]] : null;
			if (null != e)
			{
				0 == this.Rz && (c = 0);
				if (0 > c)
				{
					for (a = 0; a < xb && (null != this.rc[a] || 0 != this.Cs[a]); a++);
					if (a == xb)
						for (a = 0; a < xb && (0 != this.Cs[a] || null == this.rc[a] || 0 != this.rc[a].Es); a++);
					c = a;
					0 <= c && c < xb && (this.Qu[c] = this.kG)
				}
				if (!(0 > c || c >= xb))
				{
					if (null != this.rc[c])
					{
						if (1 == this.rc[c].Es) return;
						this.rc[c] != e && (this.rc[c].stop(), this.rc[c] = null)
					}
					for (a =
						0; a < xb; a++) this.rc[a] == e && (this.rc[a].stop(), this.rc[a] = null);
					this.rc[c] = e;
					e.play(b, d, this.Qu[c])
				}
			}
		}
	},
	pause: function()
	{
		var a;
		for (a = 0; a < xb; a++)
			if (null != this.rc[a])
			{
				var b = this.rc[a];
				b.yg ? b.Sv = !1 : (b.pause(), b.Sv = !0)
			}
	},
	resume: function()
	{
		var a;
		for (a = 0; a < xb; a++)
			if (null != this.rc[a])
			{
				var b = this.rc[a];
				b.Sv && (b.resume(), b.Sv = !1)
			}
	}
};

function ub(a)
{
	var b;
	for (b = 0; b < xb; b++) null != a.rc[b] && (a.rc[b].stop(), a.rc[b] = null)
}

function ug(a)
{
	if (null != a.ao && 0 < a.ao.size() && !a.iA)
	{
		var b = a.ao.get(0);
		Xa(a.ao, 0);
		a.iA = !0;
		a.context.decodeAudioData(b.response, function(c)
		{
			b.buffer = c;
			b.response = null;
			yg(a.app, b);
			a.iA = !1
		})
	}
}

function Md(a)
{
	this.app = a
}
Md.prototype = {
	Hl: function()
	{
		var a = T(this.app.file);
		this.path = this.app.file.ed(a);
		a = this.path.lastIndexOf("\\");
		0 <= a && (this.path = this.path.substring(a + 1));
		this.length = F(this.app.file);
		this.offset = this.app.file.Ga;
		V(this.app.file, this.length)
	},
	open: function()
	{
		return Ua(this.app.file, this.offset, this.length)
	}
};

function qg(a)
{
	this.app = a;
	this.PA = !1;
	this.P = null;
	this.context = this.app.context;
	this.qg = this.app.sH;
	this.color = this.app.rH;
	this.Tl = this.app.pH;
	0 > this.Tl && (this.Tl = this.app.$a / 2);
	this.Vl = this.app.qH;
	0 > this.Vl && (this.Vl = this.app.fb / 2);
	this.size = this.app.tH;
	this.XB = 0;
	this.Yv = 25;
	this.Kh = 0;
	this.wm = new Image;
	var b = this;
	this.wm.onload = function()
	{
		b.PA = !0
	};
	this.wm.src = this.app.bn + "Preloader.png"
}
qg.prototype = {
	load: function()
	{
		return this.PA
	},
	reset: function()
	{
		this.XB = this.Kh = 0;
		this.Yv = 25
	},
	step: function()
	{
		switch (this.Kh)
		{
			case 0:
				-1 != this.app.Xo ? this.context.Ae(0, 0, this.app.$a, this.app.fb, this.app.Xo) : this.context.Vv(0, 0, this.app.$a, this.app.fb);
				this.context.an(this.wm, this.Tl - this.wm.width / 2, this.Vl - this.wm.height / 2, this.wm.width, this.wm.height, 0, 0);
				this.Kh++;
				break;
			case 1:
				var a = this.angle = this.app.el / this.app.fl * 2 * Math.PI,
					b, c, d, e, f;
				for (b = this.XB; b <= a; b += .005)
				{
					c = this.Tl + Math.cos(b) * (this.qg - this.size);
					d = this.Vl - Math.sin(b) * (this.qg - this.size);
					e = this.Tl + Math.cos(b) * this.qg;
					f = this.Vl - Math.sin(b) * this.qg;
					this.context.Xf(c, d, e, f, this.color, 1, 0, 0);
					var g;
					for (g = 0; 3 > g; g++) c = this.Tl + Math.cos(b) * (this.qg - this.size - g), d = this.Vl - Math.sin(b) * (this.qg - this.size - g), e = this.Tl + Math.cos(b) * (this.qg - this.size - g - 1), f = this.Vl - Math.sin(b) * (this.qg - this.size - g - 1), this.context.Xf(c, d, e, f, this.color, 1, 0, 0), c = this.Tl + Math.cos(b) * (this.qg + g), d = this.Vl - Math.sin(b) * (this.qg + g), e = this.Tl + Math.cos(b) * (this.qg + g + 1), f = this.Vl -
						Math.sin(b) * (this.qg + g + 1), this.context.Xf(c, d, e, f, this.color, 1, 0, 0)
				}
				this.XB = a;
				this.app.el == this.app.fl && this.Kh++;
				break;
			case 2:
				0 < this.Yv && this.Yv--;
				0 == this.Yv && this.Kh++;
				break;
			case 3:
				Pd(this.app, this) && this.Kh++
		}
	},
	OA: function()
	{
		return 4 == this.Kh
	}
};

function sg(a)
{
	this.app = a;
	this.context = this.app.context;
	this.width = 100;
	this.height = 12;
	this.position = 0;
	this.KK = 10526880;
	this.borderColor = 8421504;
	this.LK = 0;
	this.rect = new ra;
	this.rect.left = this.app.$a / 2 - this.width / 2;
	this.rect.top = this.app.fb / 2 - this.height / 2;
	this.rect.right = this.rect.left + this.width;
	this.rect.bottom = this.rect.top + this.height;
	this.reset()
}
sg.prototype = {
	load: function()
	{
		return !0
	},
	reset: function()
	{
		this.Gx = !1;
		this.Kh = 0;
		this.alpha = 128;
		this.position = 0
	},
	step: function()
	{
		if (this.app.el < this.app.fl) switch (this.Kh)
		{
			case 0:
				0 < this.alpha && (this.alpha -= 2, 0 >= this.alpha && (this.alpha = 0, this.Kh++))
		}
		else switch (this.Kh)
		{
			case 0:
			case 1:
				this.Kh = 2;
				break;
			case 2:
				128 > this.alpha && (this.alpha += 4);
				128 <= this.alpha && (this.alpha = 128, null == this.app.Nh ? this.Gx = !0 : this.Kh++);
				break;
			default:
				this.Gx = Pd(this.app, this);
				return
		}
		this.context.Ae(this.rect.left, this.rect.top,
			this.width, this.height, this.KK, Qd, this.alpha);
		this.context.Ox(this.rect.left, this.rect.top, this.width, this.height, this.borderColor, 1, Qd, this.alpha);
		this.position = this.app.el / this.app.fl * (this.width - 2);
		this.context.Ae(this.rect.left + 1, this.rect.top + 1, this.position, this.height - 2, this.LK, Qd, this.alpha)
	},
	OA: function()
	{
		return this.Gx && this.app.el == this.app.fl
	}
};

function rg(a)
{
	this.app = a;
	this.PA = !1;
	this.Le = new Od;
	a = this.P = new Ed(this.app, this.app.file, this.app.path, !0);
	var b = this.app.Bx,
		c = this.Le,
		d = this.app.$a,
		e = this.app.fb;
	a.nb = this.app;
	a.Um = 0;
	a.Ig = c;
	a.my = b;
	a.sx = d;
	a.rx = e;
	this.P.digest();
	this.P.YA = !1;
	this.P.pn = !1;
	this.P.Bb &= -16777217;
	Cd(this.P);
	a = this.P;
	a.uj = 0;
	a.wj = 0;
	We(this.P);
	this.Le.x = this.app.$a / 2 - this.P.frame.Mf / 2;
	this.Le.y = this.app.fb / 2 - this.P.frame.ue / 2;
	this.HN = 0 != (this.app.Bb & 8388608);
	this.app.Dc.push(this.P);
	this.gq = 0
}
rg.prototype = {
	load: function()
	{
		this.step();
		return !this.P.Qj
	},
	reset: function()
	{
		ub(this.P.Z.m.Ed);
		Ne(this.P.Z);
		Oe(this.P.Z, !1);
		Se(this.P.Z, !1);
		Pe(this.P.Z.u);
		Re(this.P.Z);
		Qe(this.P.Z);
		this.P.Z.N.xm = this.P.Z.N.QA = this.P.Z.en = 0;
		this.P.Z.N.ym = this.P.Z.N.RA = this.P.Z.fn = 0;
		Ue(this.P);
		cg(this.P.Z);
		dg(this.P.Z);
		Se(this.P.Z, !1);
		eg(this.P.Z);
		fg(this.P.Z, !1);
		gg(this.P.Z);
		hg(this.P.Z);
		ig(this.P.Z.u);
		jg(this.P.Z.u, this.P.Z);
		lg(this.P.Z);
		kg(this.P.Z);
		this.P.Z.Tc = 0;
		this.P.Z.rr = 0;
		this.P.pn = !1;
		this.app.Dc.push(this.P);
		this.gq = 0
	},
	step: function()
	{
		this.P.pn || (this.HN && (this.P.pn = this.app.el == this.app.fl), 0 == We(this.P) && (this.P.pn = !0), Ve(this.P, this.Le.x, this.Le.y, !1));
		this.P.pn && this.app.Nh && Pd(this.app, this)
	},
	OA: function()
	{
		var a = this.P.pn;
		this.app.Nh && (a = !1);
		if (a)
		{
			if (0 < this.gq && (this.gq--, 0 < this.gq)) return !1;
			var b;
			for (b = 0; b < this.app.Dc.length; b++)
				if (this.app.Dc[b] == this.P)
				{
					this.app.Dc.splice(b, 1);
					break
				}
		}
		return a
	}
};

function Ud(a)
{
	this.app = a;
	this.sF = this.rF = this.Eg = this.hg = this.Cw = this.Sd = null;
	this.Hd = Array(3);
	this.Id = Array(3);
	this.Vb = this.jb = this.Yi = this.Xi = 0;
	this.touches = Array(3);
	this.Tz = !1;
	this.KF = !0;
	this.Yh = this.Pj = this.LF = 0
}
Ud.prototype = {
	reset: function(a)
	{
		this.Vb = a;
		null != this.Sd && 0 != this.Sd.width ? Eg(this) : this.Tz = !0;
		this.Pj = this.KF ? 70 * Math.PI / 180 : 60 * Math.PI / 180
	},
	Fe: function(a, b)
	{
		0 != (a & 1) ? this.Hd[0] = b : 0 != (a & 2) ? this.Hd[1] = b : 0 != (a & 4) && (this.Hd[2] = b)
	},
	Ge: function(a, b)
	{
		0 != (a & 1) ? this.Id[0] = b : 0 != (a & 2) ? this.Id[1] = b : 0 != (a & 4) && (this.Id[2] = b)
	},
	$c: function(a)
	{
		this.Tz && (this.Tz = !1, Eg(this));
		var b, c;
		0 != (this.Vb & 1) && (b = this.Hd[0] - this.Sd.width / 2, c = this.Id[0] - this.Sd.height / 2, a.ri(this.Sd, b, c, 0, 1, 1, 0, 0), b = this.Hd[0] + this.Xi - this.Cw.width /
			2, c = this.Id[0] + this.Yi - this.Cw.height / 2, a.ri(this.Cw, b, c, 0, 1, 1, 0, 0));
		if (0 != (this.Vb & 2))
		{
			var d = 0 == (this.jb & 16) ? this.hg : this.rF;
			b = this.Hd[1] - d.width / 2;
			c = this.Id[1] - d.height / 2;
			a.ri(d, b, c, 0, 1, 1, 0, 0)
		}
		0 != (this.Vb & 4) && (d = 0 == (this.jb & 32) ? this.Eg : this.sF, b = this.Hd[2] - d.width / 2, c = this.Id[2] - d.height / 2, a.ri(d, b, c, 0, 1, 1, 0, 0))
	},
	getKey: function(a, b)
	{
		return 0 != (this.Vb & 1) && a >= this.Hd[0] - this.Sd.width / 2 && a < this.Hd[0] + this.Sd.width / 2 && b > this.Id[0] - this.Sd.height / 2 && b < this.Id[0] + this.Sd.height / 2 ? 0 : 0 != (this.Vb & 2) &&
			a >= this.Hd[1] - this.hg.width / 2 && a < this.Hd[1] + this.hg.width / 2 && b > this.Id[1] - this.hg.height / 2 && b < this.Id[1] + this.hg.height / 2 ? 1 : 0 != (this.Vb & 4) && a >= this.Hd[2] - this.Eg.width / 2 && a < this.Hd[2] + this.Eg.width / 2 && b > this.Id[2] - this.Eg.height / 2 && b < this.Id[2] + this.Eg.height / 2 ? 2 : -1
	},
	ow: function()
	{
		return this.jb
	}
};

function ae(a, b)
{
	var c;
	for (c = 0; 3 > c; c++)
		if (a.touches[c] == b.identifier)
		{
			a.touches[c] = 0;
			switch (c)
			{
				case 0:
					a.Xi = 0;
					a.Yi = 0;
					a.jb &= 240;
					break;
				case 1:
					a.jb &= -17;
					break;
				case 2:
					a.jb &= -33
			}
			break
		}
}

function Fg(a, b, c)
{
	return a > b - c / 2 && a < b + c / 2
}

function ce(a, b)
{
	var c = Yd(a.app, b),
		d = Xd(a.app, b);
	if (0 == a.getKey(c, d) && b.identifier == a.touches[0] && (a.Xi = c - a.Hd[0], a.Yi = d - a.Id[0], c = (2 * Math.PI - Math.atan2(a.Yi, a.Xi)) % (2 * Math.PI), a.jb &= 240, d = Math.sqrt(a.Xi * a.Xi + a.Yi * a.Yi), a.KF ? (a.Xi = Math.cos(c) * a.Yh, a.Yi = Math.sin(c) * -a.Yh) : (a.Xi < -a.Yh && (a.Xi = -a.Yh), a.Xi > a.Yh && (a.Xi = a.Yh), a.Yi < -a.Yh && (a.Yi = -a.Yh), a.Yi > a.Yh && (a.Yi = a.Yh)), d > a.LF && d < 3 * a.Yh))
	{
		d = 0;
		if (0 <= c)
			for (;;)
			{
				if (Fg(c, 0, a.Pj) || Fg(c, 2 * Math.PI, a.Pj))
				{
					d = 8;
					break
				}
				if (Fg(c, Math.PI / 2, a.Pj))
				{
					d = 1;
					break
				}
				if (Fg(c,
						Math.PI, a.Pj))
				{
					d = 4;
					break
				}
				if (Fg(c, Math.PI / 4 * 6, a.Pj))
				{
					d = 2;
					break
				}
				if (Fg(c, Math.PI / 4, Math.PI / 2 - a.Pj))
				{
					d = 9;
					break
				}
				if (Fg(c, Math.PI / 4 * 3, Math.PI / 2 - a.Pj))
				{
					d = 5;
					break
				}
				if (Fg(c, Math.PI / 4 * 5, Math.PI / 2 - a.Pj))
				{
					d = 6;
					break
				}
				if (Fg(c, Math.PI / 4 * 7, Math.PI / 2 - a.Pj))
				{
					d = 10;
					break
				}
				break
			}
		a.jb |= d
	}
}

function Eg(a)
{
	var b, c;
	b = a.app.$a;
	c = a.app.fb;
	0 == (a.Vb & 8) ? (0 != (a.Vb & 1) && (a.Hd[0] = 16 + a.Sd.width / 2, a.Id[0] = c - 16 - a.Sd.height / 2), 0 != (a.Vb & 2) && 0 != (a.Vb & 4) ? (a.Hd[1] = b - a.hg.width / 2 - 32, a.Id[1] = c - a.hg.height / 2 - 16, a.Hd[2] = b - a.Eg.width / 2 - 16, a.Id[2] = c - a.Eg.height / 2 - a.hg.height - 24) : 0 != (a.Vb & 2) ? (a.Hd[1] = b - a.hg.width / 2 - 16, a.Id[1] = c - a.hg.height / 2 - 16) : 0 != (a.Vb & 4) && (a.Hd[2] = b - a.Eg.width / 2 - 16, a.Id[2] = c - a.Eg.height / 2 - 16)) : (0 != (a.Vb & 1) && (a.Hd[0] = b - 16 - a.Sd.width / 2, a.Id[0] = c - 16 - a.Sd.height / 2), 0 != (a.Vb & 2) && 0 != (a.Vb & 4) ? (a.Hd[1] =
		a.hg.width / 2 + 16 + 2 * a.Eg.width / 3, a.Id[1] = c - a.hg.height / 2 - 16, a.Hd[2] = a.Eg.width / 2 + 16, a.Id[2] = c - a.Eg.height / 2 - a.hg.height - 24) : 0 != (a.Vb & 2) ? (a.Hd[1] = a.hg.width / 2 + 16, a.Id[1] = c - a.hg.height / 2 - 16) : 0 != (a.Vb & 4) && (a.Hd[2] = a.Eg.width / 2 + 16, a.Id[2] = c - a.Eg.height / 2 - 16))
}

function Vd(a)
{
	null == a.Sd && (a.Sd = Gg(a.app, "joyback.png"), a.Cw = Gg(a.app, "joyfront.png"), a.hg = Gg(a.app, "fire1U.png"), a.Eg = Gg(a.app, "fire2U.png"), a.rF = Gg(a.app, "fire1D.png"), a.sF = Gg(a.app, "fire2D.png"))
};
var bc = 4,
	zb = 1,
	Bb = 3,
	Db = 4,
	Hg = !1,
	Ig = [0, 0, 0, 0, 255, 0, 0, 0, 255, 255, 0, 0, 255, 255, 255, 0, 255, 255, 255, 255],
	Jg = [0, 1, 2, 0, 4, 5, 6, 0, 8, 9, 10, 0, 0, 0, 0, 0],
	Kg = !1;

function cd(a, b, c)
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
}

function gd(a, b, c)
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
}

function Dg(a)
{
	this.m = a;
	this.N = null;
	this.zk = this.Tb = this.rr = this.IC = this.Tc = this.pe = this.Ze = this.HC = this.nh = 0;
	this.u = this.ua = null;
	this.mp = this.Au = this.by = this.np = this.hn = this.de = this.GC = this.Pl = this.Bu = this.op = this.Oa = this.Ha = this.Nd = this.Md = 0;
	this.vu = this.Qx = this.Rx = null;
	this.Xx = this.BC = this.kr = this.gr = this.mr = this.ir = this.jr = this.fr = this.lr = this.hr = this.ip = this.Ye = this.er = this.dr = this.fn = this.en = this.PH = this.pj = this.xu = this.wu = this.tu = this.gp = 0;
	this.kp = null;
	this.fd = this.pr = this.$x = this.Zx = this.jp =
		this.CC = this.SH = 0;
	this.Wx = this.or = this.Bf = null;
	this.ui = 0;
	this.Vx = this.qr = null;
	this.nr = 0;
	this.lp = null;
	this.ce = 0;
	this.W = this.Fx = null;
	this.NA = Array(2);
	this.jo = !1;
	this.nF = 0;
	this.FC = 255;
	this.Hx = this.tM = !1
}

function Rb(a, b)
{
	null != a.J ? a.J.xa.Fe(b) : a.A != b && (a.A = b, null != a.b && (a.b.fa = !0, a.b.Wb = !0))
}

function Sb(a, b)
{
	null != a.J ? a.J.xa.Ge(b) : a.w != b && (a.w = b, null != a.b && (a.b.fa = !0, a.b.Wb = !0))
}
Dg.prototype = {
	Yk: function()
	{
		var a, b, c;
		for (c = a = 0; a < this.Tb; a++)
		{
			for (; null == this.W[c];) c++;
			c++
		}
		for (c = a = 0; a < this.Tb; a++)
		{
			for (; null == this.W[c];) c++;
			b = this.W[c];
			c++;
			b.Yk()
		}
	},
	zj: function()
	{
		if (0 == this.QH)
		{
			this.QH = !0;
			this.Nl = null;
			var a = 0,
				b;
			for (b = 0; b < this.Tb; a++, b++)
			{
				for (; null == this.W[a];) a++;
				var c = this.W[a];
				if (32 <= c.rb && 1110590791 == c.ga.Mc)
				{
					this.Nl = c.ext;
					break
				}
			}
		}
		return this.Nl
	},
	Yb: function(a)
	{
		if (a && 0 == (a.Aa & fc) && 0 != (a.Ya & Lg) && a.b.md == Mg)
		{
			var b = a.ga.ji.Af[a.J.Du];
			if (E(b.Gb, "box2d8directions") || E(b.Gb, "box2dspring") ||
				E(b.Gb, "box2dspaceship") || E(b.Gb, "box2dstatic") || E(b.Gb, "box2dracecar") || E(b.Gb, "box2daxial") || E(b.Gb, "box2dplatform") || E(b.Gb, "box2dbouncingball") || E(b.Gb, "box2dbackground")) return a.J.xa.Bd
		}
		return null
	},
	hd: function(a)
	{
		return null != a.J && null != a.J.xa ? a.J.xa.hd() : a.b.wa
	},
	pause: function(a)
	{
		if (0 == this.pj)
		{
			this.pj = 1;
			this.PH = this.m.vi;
			var b = 0,
				c;
			for (c = 0; c < this.Tb; c++)
			{
				for (; null == this.W[b];) b++;
				b++
			}
			a || this.m.Ed.pause()
		}
	},
	resume: function()
	{
		if (!this.tM && 0 != this.pj)
		{
			this.pj = 0;
			kg(this);
			var a = 0,
				b;
			for (b = 0; b < this.Tb; b++)
			{
				for (; null ==
					this.W[a];) a++;
				a++
			}
			this.m.Ed.resume();
			a = this.m.vi;
			a -= this.PH;
			this.np += a;
			this.Xx = 0;
			this.Hx = !1
		}
	},
	km: function()
	{
		var a = 0,
			b;
		for (b = 0; b < this.Tb; b++)
		{
			for (; null == this.W[a];) a++;
			var c = this.W[a];
			a++;
			c.km()
		}
	},
	random: function(a)
	{
		var b = 31415 * this.BC + 1;
		this.BC = b &= 65535;
		return b * a >>> 16
	},
	getExpression: function()
	{
		var a, b = this.fd;
		this.or[this.fd] = this.Wx;
		do {
			this.fd++;
			this.qr[this.ui].evaluate(this);
			this.ui++;
			do
				if (a = this.qr[this.ui], 0 < a.code && 1310720 > a.code) a.code > this.or[this.fd - 1].code ? (this.or[this.fd] = a, this.ui++,
					this.fd++, this.qr[this.ui].evaluate(this), this.ui++) : (this.fd--, this.or[this.fd].evaluate(this));
				else
				{
					this.fd--;
					if (this.fd == b) break;
					this.or[this.fd].evaluate(this)
				} while (1)
		} while (this.fd > b + 1);
		return this.Bf[b + 1]
	},
	doScroll: function()
	{
		if (0 != (this.ip & 1))
		{
			this.ip = 0;
			if (this.N.xm != this.en || this.N.ym != this.fn)
			{
				var a, b, c = this.en,
					d = this.fn,
					e, f;
				for (a = 0; a < this.N.We; a++)
				{
					b = this.N.kc[a];
					e = c * b.sn + b.fw;
					f = d * b.tn + b.gw;
					var g = 0 != (b.Bb & Ng);
					0 != (b.Bb & Og) && (0 > e && (e = e % this.N.Mf + this.N.Mf), e > this.N.Mf && (e %= this.N.Mf));
					g &&
						(0 > f && (f = f % this.N.ue + this.N.ue), f > this.N.ue && (f %= this.N.ue));
					b.x = e;
					b.y = f;
					b.$d.x = -e + this.m.vj;
					b.$d.y = -f + this.m.xj;
					b.ld.x = -e + this.m.vj;
					b.ld.y = -f + this.m.xj;
					b.Pb.x = -e + this.m.vj;
					b.Pb.y = -f + this.m.xj
				}
				this.N.xm = this.en;
				this.N.ym = this.fn;
				a = this.N.xm;
				b = this.N.ym;
				c = 0;
				this.Zx = a - this.Ha;
				0 != this.Zx && c++;
				this.$x = b - this.Oa;
				0 != this.$x && c++;
				var k;
				if (0 == c)
					for (d = 0; d < this.N.We; d++)
						if (k = this.N.kc[d], 0 != k.fw || 0 != k.gw)
						{
							c++;
							break
						} d = this.Ha;
				e = this.Oa;
				f = this.Zx;
				g = this.$x;
				this.Ha = a;
				this.hr = a - 64;
				0 > this.hr && (this.hr = this.ir);
				this.Oa = b;
				this.lr = b - 16;
				0 > this.lr && (this.lr = this.mr);
				this.fr = a + this.dr + 64;
				this.fr > this.Md && (this.fr = this.gr);
				this.jr = b + this.er + 16;
				this.jr > this.Nd && (this.jr = this.kr);
				var h = 0,
					p;
				for (p = 0; p < this.Tb; p++)
				{
					for (; null == this.W[h];) h++;
					var l = this.W[h];
					h++;
					if (0 != c)
						if (0 != (l.Ya & Pg))
						{
							k = f;
							var r = g;
							null == l.J ? (l.A += k, l.w += r) : (k += l.A, r += l.w, l.J.xa.Fe(k), l.J.xa.Ge(r))
						}
					else if (k = l.ig, k < this.N.We)
					{
						var u = d,
							r = e,
							q = a,
							v = b;
						k = this.N.kc[k];
						0 != (k.Bb & Qg) && (u *= k.sn, q *= k.sn);
						0 != (k.Bb & Rg) && (r *= k.tn, v *= k.tn);
						u = l.A + u - q + f - k.fw;
						k = l.w + r - v +
							g - k.gw;
						0 == (l.Ya & Lg) ? (l.A = u, l.w = k) : (l.J.xa.Fe(u), l.J.xa.Ge(k));
						l.nq()
					}
				}
			}
			this.en = this.Ha;
			this.fn = this.Oa
		}
	},
	zv: function(a, b, c, d, e, f)
	{
		d = this.N.kc[d];
		var g = new Sg(this.m, b - this.Ha + d.x, c - this.Ha + d.y, null, a, e);
		g.Kf(0, d);
		!f || e != Tg.Kp && e != Tg.Bj || null == this.Nl || (g.body = this.Nl.JM(pHo.A - this.Ha + d.x, pHo.w - this.Oa + d.y, pHo.b.Jb, e));
		f = 0 != (d.Bb & Ng);
		0 != (d.Bb & Og) ? (g = new Sg(this.m, this.N.Mf + b - this.Ha + d.x, c - this.Oa + d.y, null, a, e), g.Kf(1, d), b + g.width > this.N.Mf && (g = new Sg(this.m, b - this.Ha + d.x - this.N.Mf, c - this.Oa + d.y, null,
			a, e), g.Kf(4, d)), f && (g = new Sg(this.m, b - this.Ha + d.x, this.N.ue + c - this.Oa + d.y, null, a, e), g.Kf(2, d), g = new Sg(this.m, this.N.Mf + b - this.Ha + d.x, this.N.ue + c - this.Oa + d.y, null, a, e), g.Kf(3, d), c + g.height > this.N.ue && (g = new Sg(this.m, b - this.Ha + d.x, c - this.Oa + d.y - this.N.ue, null, a, e), g.Kf(5, d)))) : f && (g = new Sg(this.m, b - this.Ha + d.x, this.N.ue + c - this.Oa + d.y, null, a, e), g.Kf(2, d), c + g.height > this.N.ue && (g = new Sg(this.m, b - this.Ha + d.x, c - this.Oa + d.y - this.N.ue, null, a, e), g.Kf(5, d)))
	},
	pF: function(a)
	{
		var b, c;
		if (0 != this.Tb)
			for (b = 0; b <
				this.zk; b++)
				if ((c = this.W[b]) && c.ke.To == a) return this.wA = c.ke.mk - 1, c;
		return null
	},
	qF: function(a)
	{
		if (a && this.wA)
		{
			var b = a.zc + 1;
			a = a.ke.To;
			for (var c;;)
			{
				c = this.W[b];
				if (null != c && c.ke.To == a) return this.wA--, c;
				b++
			}
		}
		this.wA = 0;
		return null
	}
};

function gg(a)
{
	var b, c = new ra,
		d;
	for (d = 0; d < a.N.We; d++)
	{
		var e = a.N.kc[d],
			f = 0 != (e.Bb & Og),
			g = 0 != (e.Bb & Ng),
			k = e.St,
			h;
		for (h = 0; h < k; h++)
		{
			b = a.N.Gf.list[e.Ut + h];
			b.pt < Nb && (c.left = b.Gw, c.top = b.Hw);
			var p;
			p = new Sg(a.m, c.left, c.top, b, null, 0);
			p.Kf(0, e);
			f ? (p = new Sg(a.m, a.N.Mf + c.left, c.top, b, null, 0), p.Kf(1, e), c.left + p.width > a.N.Mf && (p = new Sg(a.m, c.left - a.N.Mf, c.top, b, null, 0), p.Kf(4, e)), g && (p = new Sg(a.m, c.left, a.N.ue + c.top, b, null, 0), p.Kf(2, e), p = new Sg(a.m, a.N.Mf + c.left, a.N.ue + c.top, b, null, 0), p.Kf(3, e), c.top + p.height > a.N.ue &&
				(p = new Sg(a.m, c.left, c.top - a.N.ue, b, null, 0), p.Kf(5, e)))) : g && (p = new Sg(a.m, c.left, a.N.ue + c.top, b, null, 0), p.Kf(2, e), c.top + p.height > a.N.ue && (p = new Sg(a.m, c.left, c.top - a.N.ue, b, null, 0), p.Kf(5, e)))
		}
	}
}

function jc(a, b)
{
	var c = !1,
		d = 0;
	if (0 != (b.Ya & hc))
	{
		var e;
		if (e = null != b.ea) e = b.ea, e.fq(!0) ? (e.a.Aa |= ec, e = !0) : e = !1;
		if (e) return;
		null != b.Ca && oc(b.Ca, Ug) && (d = 1)
	}
	0 == d && (c = !0);
	c ? (b.et = !1, gc(a, b.zc)) : (null != b.ea && (Vg(b.ea, !1), b.Aa |= ec), null != b.J && (b.J.Vc(!1), lc(b.J, b, Wg), b.b.ra = 0), 0 != (d & 1) && ($b(b.Ca, Ug), pc(b.Ca)))
}

function xd(a)
{
	a.jo = !1;
	a = a.getExpression();
	return 0 > a ? Math.ceil(a) : Math.floor(a)
}

function Xg(a, b)
{
	a.qr = b.ab;
	a.ui = 0;
	a.jo = !1;
	return a.getExpression()
}

function nb(a, b)
{
	a.qr = b.ab;
	a.ui = 0;
	a.jo = !1;
	return a.getExpression()
}

function ob(a, b)
{
	a.qr = b.ab;
	a.ui = 0;
	a.jo = !1;
	return a.getExpression()
}

function Yg(a, b)
{
	if (0 == b || -1 == b) return a.random(32);
	var c, d = 0,
		e = 0,
		f = b;
	for (c = 0; 32 > c; c++) 0 != (f & 1) && (e++, d = c), f >>>= 1;
	if (1 == e) return d;
	e = a.random(e);
	f = b;
	for (c = 0; 32 > c; c++)
	{
		if (0 != (f & 1) && (e--, 0 > e)) return c;
		f >>>= 1
	}
	return 0
}

function Zg(a, b, c, d, e)
{
	var f = 15;
	b < a.Md && (f &= -3);
	c < a.Nd && (f &= -9);
	0 < d && (f &= -2);
	0 < e && (f &= -5);
	return Jg[f]
}

function $g(a, b, c, d, e)
{
	var f = 0;
	0 > b && (f |= 1);
	0 > c && (f |= 4);
	d > a.Md && (f |= 2);
	e > a.Nd && (f |= 8);
	return Jg[f]
}

function id(a, b, c, d, e, f, g, k, h)
{
	var p = a.N.kc[b.ig];
	switch (b.rb)
	{
		case Nb:
			if (0 == (b.ea.Ja & ah))
			{
				if (b = Y(a.m.Ba, b.b.Jb), null != b) return b = bh(b, ch, c, d, e), null != p.qn(b, f - a.Ha, g - a.Oa, k, h)
			}
			else return f = f - b.Wa - a.Ha, a = g - b.Xa - a.Oa, g = f + b.da, b = a + b.ca, k = null != p.ny(f, a, g, b, k, h);
			return !1;
		default:
			return f = f - b.Wa - a.Ha, a = g - b.Xa - a.Oa, g = f + b.da, b = a + b.ca, k = null != p.ny(f, a, g, b, k, h)
	}
}

function Vc(a, b, c, d, e, f, g, k, h)
{
	var p = null;
	g -= b.Wa;
	var l = g + b.da;
	k -= b.Xa;
	var r = k + b.ca,
		u, q;
	if (0 != (b.Aa & ec) || 0 != (b.Aa & fc)) return p;
	var v = !1,
		n = null,
		w = -1;
	b.rb == Nb && 0 == (b.ea.Ja & ah) && (v = !0);
	b.rb == Nb && (w = b.ea.ur);
	var D = b.Aa;
	b.Aa |= ec;
	var z = 0,
		A, I, G;
	if (null != h)
		for (z = 0; z < h.length; z += 2)
			for (var R = a.ua[h[z + 1]].Nc; 0 == (R & 2147483648);)
			{
				if (A = a.W[R], R = A.Rd, 0 == (A.Aa & ec) && 0 == (A.Aa & fc) && (I = A.A - A.Wa, G = A.w - A.Xa, I < l && I + A.da > g && G < r && G + A.ca > k)) switch (A.rb)
				{
					case Nb:
						(0 > w || 0 <= w && w == A.ea.ur) && 0 != (A.ea.Ja & dh) && (0 == v || 0 != (A.ea.Ja &
							ah) ? (null == p && (p = new W), p.add(A)) : (null == n && (q = Y(a.m.Ba, c), null != q && (n = bh(q, 0, d, e, f))), q = Y(a.m.Ba, A.b.Jb), null != q && (u = bh(q, 0, A.b.ac, A.b.bc, A.b.cc)), null != n && null != u && n.qn(g, k, 0, u, I, G, 0) && (null == p && (p = new W), p.add(A))));
						break;
					case He:
					case Ie:
					case eh:
					case fh:
					case gh:
						null == p && (p = new W);
						p.add(A);
						break;
					default:
						null == p && (p = new W), p.add(A)
				}
			}
	else
		for (h = 0; h < a.Tb; h++)
		{
			for (; null == a.W[z];) z++;
			A = a.W[z];
			z++;
			if (0 == (A.Aa & ec) && (I = A.A - A.Wa, G = A.w - A.Xa, I < l && I + A.da > g && G < r && G + A.ca > k)) switch (A.rb)
			{
				case Nb:
					(0 > w || 0 <= w && w ==
						A.ea.ur) && 0 != (A.ea.Ja & dh) && (0 == v || 0 != (A.ea.Ja & ah) ? (null == p && (p = new W), p.add(A)) : (null == n && (q = Y(a.m.Ba, c), null != q && (n = bh(q, 0, d, e, f))), q = Y(a.m.Ba, A.b.Jb), null != q && (u = bh(q, 0, A.b.ac, A.b.bc, A.b.cc)), null != n && null != u && n.qn(g, k, 0, u, I, G, 0) && (null == p && (p = new W), p.add(A))));
					break;
				case He:
				case Ie:
				case eh:
				case fh:
				case gh:
					null == p && (p = new W);
					p.add(A);
					break;
				default:
					null == p && (p = new W), p.add(A)
			}
		}
	b.Aa = D;
	return p
}

function hh(a, b)
{
	Kg = b.J.sa = !1;
	b.J.Cu = 0;
	var c, d;
	0 != (b.Vh & ih) && (c = Zg(a, b.b.uC, b.b.wC, b.b.vC, b.b.xC), 0 != c && (d = Zg(a, b.A - b.Wa, b.w - b.Xa, b.A - b.Wa + b.da, b.w - b.Xa + b.ca), 0 == d && (c ^= d, 0 != c && (b.J.Cu |= jh, a.u.Ld = c, kh(a.u, b, -720896 | b.rb & 65535)))), c = Zg(a, b.A - b.Wa, b.w - b.Xa, b.A - b.Wa + b.da, b.w - b.Xa + b.ca), 0 != (c & b.J.JC) && (d = b.J.sa, 0 != (c & 1) ? b.J.xa.Fe(b.A + a.Md) : 0 != (c & 2) && b.J.xa.Fe(b.A - a.Md), 0 != (c & 4) ? b.J.xa.Ge(b.w + a.Nd) : 0 != (c & 8) && b.J.xa.Ge(b.w - a.Nd), b.b.md != lh && b.b.md != Mg && (b.J.sa = d)), c = $g(a, b.b.uC, b.b.wC, b.b.vC, b.b.xC), 15 !=
		c && (d = $g(a, b.A - b.Wa, b.w - b.Xa, b.A - b.Wa + b.da, b.w - b.Xa + b.ca), c = ~c & d, 0 != c && (b.J.Cu |= mh, a.u.Ld = c, kh(a.u, b, -786432 | b.rb & 65535))));
	0 != (b.Vh & nh) && (b.b.md == lh ? b.J.xa.rM() : id(a, b, b.b.ac, b.b.bc, b.b.cc, b.A, b.w, 0, 1) && kh(a.u, b, -851968 | b.rb & 65535));
	if (0 != (b.Vh & oh) && (c = Vc(a, b, b.b.Jb, b.b.ac, b.b.bc, b.b.cc, b.A, b.w, b.ke.Rm), null != c))
		for (d = 0; d < c.size(); d++)
		{
			var e = c.get(d);
			if (0 == (e.Aa & fc))
			{
				var f = b.rb,
					g = b,
					k = e;
				g.rb > k.rb && (g = e, k = b, f = g.rb);
				a.u.Ld = k.jc;
				a.u.su = k.zc;
				kh(a.u, g, -917504 | f & 65535)
			}
		}
	return Kg
}

function ph(a)
{
	a.wu = a.m.hj + a.Ha - a.m.vj;
	a.xu = a.m.ij + a.Oa - a.m.xj
}

function qh(a)
{
	var b = a.m.Ed,
		c;
	for (c = 0; c < xb; c++) null != b.rc[c] && rh(b.rc[c]) && (b.rc[c] = null);
	if (null != a.m.nb && a.m.Qj) return a.np = a.m.vi, a.hn = 0, a.Tc;
	if (null != a.m.gj) return a.m.gj.handle(), 0;
	if (!a.Yz)
	{
		b = a.zj();
		if (null != b)
		{
			c = 0;
			var d;
			for (d = 0; d < a.Tb; c++, d++)
			{
				for (; null == a.W[c];) c++;
				var e = a.W[c];
				32 <= e.rb && (1110591041 == e.ga.Mc || 1110594637 == e.ga.Mc || 1110600435 == e.ga.Mc || 1110634490 == e.ga.Mc || 1110874198 == e.ga.Mc ? e.ext.qC() : 1110590791 == e.ga.Mc && e.ext.qC())
			}
			for (d = c = 0; d < a.Tb; c++, d++)
			{
				for (; null == a.W[c];) c++;
				e = a.W[c];
				if (0 != (e.Ya & Lg))
				{
					var f = !1;
					if (e.b.md == Mg)
					{
						var g = e.ga.ji.Af[e.J.Du];
						if (E(g.Gb, "box2d8directions") || E(g.Gb, "box2dspring") || E(g.Gb, "box2dspaceship") || E(g.Gb, "box2dstatic") || E(g.Gb, "box2dracecar") || E(g.Gb, "box2daxial") || E(g.Gb, "box2dplatform") || E(g.Gb, "box2dbouncingball") || E(g.Gb, "box2dbackground")) e.J.xa.Bd.yj(), f = !0
					}
					0 == f && 2 == e.rb && b.xH(e)
				}
			}
			for (d = c = 0; d < a.Tb; c++, d++)
			{
				for (; null == a.W[c];) c++;
				e = a.W[c];
				0 != (e.Ya & Lg) && e.b.md == Mg && (g = e.ga.ji.Af[e.J.Du], (E(g.Gb, "box2d8directions") || E(g.Gb, "box2dspring") || E(g.Gb,
					"box2dspaceship") || E(g.Gb, "box2dstatic") || E(g.Gb, "box2dracecar") || E(g.Gb, "box2daxial") || E(g.Gb, "box2dplatform") || E(g.Gb, "box2dbouncingball") || E(g.Gb, "box2dbackground")) && e.J.xa.Bd.fc())
			}
		}
		a.Yz = !0
	}
	b = a.m.vi - a.np;
	c = a.hn;
	a.hn = b;
	b -= c;
	a.by = b;
	a.pr += b;
	a.de += 1;
	a.ce = a.by * a.N.YF / 1E3;
	a.Vx[a.nr] = b;
	a.nr++;
	10 <= a.nr && (a.nr = 0);
	for (b = 0; 4 > b; b++) a.Rx[b] = a.pe[b];
	for (b = 0; 4 > b; b++) a.pe[b] = 0;
	for (b = a.m; null != b.nb && 0 != (b.Um & sh);) b = b.nb;
	c = b.ux;
	for (b = 0; 4 > b; b++)
		for (d = 0; d < Jb; d++) a.m.vf[c[b * Jb + d]] && (a.pe[b] |= 1 << d);
	1 == a.m.hl ? a.pe[0] |=
		a.m.jb.ow() & a.FC : 2 == a.m.hl && (a.pe[0] |= a.m.ow() & a.FC);
	if (0 != a.mp)
		for (ph(a), a.gp = 0, a.m.vf[200] && (a.gp |= 16), a.m.vf[202] && (a.gp |= 32), b = 0; b < a.HC; b++) 0 != (a.IP & 1) && (c = a.pe[b] & 207, c |= a.gp, a.pe[b] = c);
	else ph(a);
	for (b = 0; 4 > b; b++) c = a.pe[b] & Ig[4 * a.HC + b], c &= a.vu[b], a.pe[b] = c, c ^= a.Rx[b], a.Qx[b] = c, 0 != c && (c &= a.pe[b], 0 != (c & 240) ? (a.u.EC = b, c = a.Qx[b], 0 != (c & 240) && (a.u.Ld = c, ie(a.u, -196615)), 0 != (c & 15) && (a.u.Ld = c, ie(a.u, -196615))) : (d = a.u.Td[a.u.Lh[-th] + 4], 0 != d && (a.u.Ld = c, uh(a.u, d, null))));
	if (0 != a.Tb)
	{
		b = a.Tb;
		c = 0;
		do {
			for (a.CC =
				0; null == a.W[c];) c++;
			d = a.W[c];
			d.IF = d.vw;
			d.vw = null;
			d.et && (a.SH = c, d.handle());
			b += a.CC;
			c++;
			b--
		} while (0 != b)
	}
	a.Ye++;
	b = a.u;
	if (0 != (b.D.Ze & 16)) c = b.Td[b.Lh[-vh] + 1], 0 != c && (b.Td[b.Lh[-vh] + 1] = -1, uh(b, c, null), b.zu = !0);
	else
	{
		c = b.Td[b.Lh[-wh] + 3];
		0 != c && uh(b, c, null);
		c = b.Td[b.Lh[-vh] + 1];
		var k;
		if (0 != c)
		{
			if (b.zu)
			{
				g = null;
				d = c;
				do {
					f = b.se[d];
					if (f != g)
						for (g = f, e = f.Gd; e < f.Gd + f.zh; e++) k = f.yc[e], 0 == (k.Ib & xh) && (k.Ib |= yh);
					d++
				} while (null != b.se[d])
			}
			uh(b, c, null);
			b.Td[b.Lh[-vh] + 1] = 0;
			if (b.zu)
			{
				g = null;
				d = c;
				do {
					f = b.se[d];
					if (f != g)
						for (g = f, e = f.Gd; e <
							f.Gd + f.zh; e++) k = f.yc[e], k.Ib &= ~yh;
					d++
				} while (null != b.se[d]);
				b.zu = !1
			}
		}
		c = b.Td[b.Lh[-wh] + 2];
		0 != c && uh(b, c, null);
		c = b.Td[b.Lh[-wh] + 1];
		0 != c && uh(b, c, null)
	}
	b = a.u;
	d = !1;
	for (c = b.D.DC; c;)
	{
		if (b.D.hn >= c.vi)
			if (c.type == zh) b.D.u.Ld = c.name, e = b.Td[b.Lh[-wh] + X.AD], 0 != e && uh(b, e, null), d = c.dE = !0;
			else
				for (0 == c.oy && (c.oy = b.D.hn); b.D.hn >= c.oy;)
				{
					b.D.u.Ld = c.name;
					b.D.u.TH = c.index;
					e = b.Td[b.Lh[-wh] + X.AD];
					0 != e && uh(b, e, null);
					c.index++;
					c.$A--;
					if (0 == c.$A)
					{
						d = c.dE = !0;
						break
					}
					c.oy += c.pQ
				}
		c = c.next
	}
	if (d)
		for (c = b.D.DC, d = null; c;) e = c.next, c.dE ?
			null == d ? b.D.DC = e : d.next = e : d = c, c = e;
	a.u.UH && 0 == (a.Ze & 16) && uh(a.u, 0, null);
	b = a.u;
	if (null != b.hp)
	{
		for (c = 0; c < b.hp.size(); c++)
			if (d = b.hp.get(c), null != d && 0 != d.code) switch (b.Ld = d.AM, b.EC = d.Bl, d.eN)
			{
				case 0:
					ie(b, d.code);
					break;
				case 1:
					kh(b, d.zM, d.code)
			}
		b.hp.clear()
	}
	if (0 != a.Au)
		for (b = 0; b < a.zk;)
		{
			c = a.lp[b / 32];
			if (0 != c)
			{
				for (d = a.lp[b / 32] = 0; 0 != c && 32 > d; d++) 0 != (c & 1) && (e = a.W[b + d], null != e && 1 == e.ke.mk && kh(a.u, e, e.rb | -2162688), Ah(a, b + d, !1), a.Au--), c >>= 1;
				if (0 == a.Au) break
			}
			b += 32
		}
	a.doScroll();
	a.u.OH = -1;
	a.jp++;
	if (0 == a.Tc) return a.IC;
	a.Tc != zb && 2 != a.Tc && -2 != a.Tc && a.Tc != Bb && 100 != a.Tc && a.Tc != Db || ie(a.u, -65539);
	return a.Tc
}

function lg(a)
{
	a.np = a.m.vi;
	a.hn = 0;
	a.de = 0;
	a.Tc = 0;
	a.IC = 0;
	a.Au = 0;
	var b;
	for (b = 0; b < (a.zk + 31) / 32; b++) a.lp[b] = 0;
	a.dr = a.N.nt;
	a.er = a.N.mt;
	a.ir = -480;
	a.mr = -300;
	a.gr = a.Md + 480;
	a.kr = a.Nd + 300;
	b = a.Ha;
	a.en = b;
	b -= 64;
	0 > b && (b = a.ir);
	a.hr = b;
	b = a.Oa;
	a.fn = b;
	b -= 16;
	0 > b && (b = a.mr);
	a.lr = b;
	b = a.Ha;
	b += a.dr + 64;
	b > a.Md && (b = a.gr);
	a.fr = b;
	b = a.Oa;
	b += a.er + 16;
	b > a.Nd && (b = a.kr);
	a.jr = b;
	a.ip = 0;
	a.jp = 0;
	a.pr = 0;
	for (b = a.pj = 0; 4 > b; b++) a.pe[b] = 0, a.Rx[b] = 0, a.vu[b] = 255;
	a.gp = 0;
	a.u.aA = !1;
	a.u.zu = !1;
	a.Xx = 0;
	a.Nl = null;
	a.QH = !1;
	a.RH = null;
	a.Sx = null;
	a.Tx = null;
	a.DC =
		null;
	for (b = 0; 10 > b; b++) a.Vx[b] = 20;
	a.nr = 0
}

function Bh(a, b, c, d)
{
	a:
	{
		c -= a.Ha;d -= a.Oa;
		var e; - 1 == b ? (e = 0, b = a.N.We) : (e = b, b += 1);
		for (; e < b; e++)
		{
			var f;
			b:
			{
				var g, k = a.N.kc[e],
					h = c,
					p = d,
					h = h + k.x,
					p = p + k.y;
				if (null != k.Vo)
					for (g = 0; g < k.Vo.size(); g++)
						if (f = k.Vo.get(g), h >= f.left && p >= f.top && h < f.right && p < f.bottom) break b;f = null
			}
			if (null != f)
			{
				a = f;
				break a
			}
		}
		a = null
	}
	return null != a ? a.top : 2147483647
}

function gc(a, b)
{
	a.lp[Math.floor(b / 32)] |= 1 << (b & 31);
	a.Au++
}

function Ah(a, b, c)
{
	var d = a.W[b];
	if (null != d)
	{
		if (1 != c || 0 != d.um)
		{
			var e = 0,
				f, g;
			for (f = 0; f < a.Tb; f++)
			{
				for (; null == a.W[e];) e++;
				g = a.W[e];
				e++;
				null != g.J && g.b.md == mc && (g = g.J.xa, g.Fp == d && 1 == g.kv && g.kI())
			}
			null != d.J && d.J.Vc(c);
			null != d.ub && d.ub.Vc(c);
			null != d.ea && d.ea.Vc(c);
			null != d.b && d.b.Vc(c);
			d.Vc(c);
			e = d.ke;
			--e.mk;
			0 == (d.Oj & 2147483648) ? (c = a.W[d.Oj], 0 == (d.Rd & 2147483648) ? (e = a.W[d.Rd], null != c && (c.Rd = d.Rd), null != e && (e.Oj = d.Oj)) : null != c && (c.Rd = 2147483648)) : 0 == (d.Rd & 2147483648) ? (c = a.W[d.Rd], null != c && (c.Oj = d.Oj, e.Nc = c.zc)) :
				e.Nc = 2147483648
		}
		a.W[b] = null;
		a.Tb--
	}
}

function Lb(a, b, c, d, e, f, g, k)
{
	for (var h = -1;;)
	{
		var p = new Ch,
			l = null;
		if (-1 != b) var r = a.N.Gf,
			l = b < r.xb.length ? r.list[r.xb[b]] : null;
		var u = Fe(a.m.Ke, c),
			r = u.Kd;
		0 == (r.Nm & Dh) && (g |= 2);
		if (a.Tb >= a.zk) break;
		var q = null,
			v = new Eh;
		switch (u.Ih)
		{
			case 2:
				q = new Fh;
				break;
			case 3:
				q = new Gh;
				break;
			case 4:
				q = new Hh;
				break;
			case 5:
				q = new Ih;
				break;
			case 6:
				q = new Jh;
				break;
			case 7:
				q = new Kh;
				break;
			case 8:
				break;
			case 9:
				q = new Lh;
				break;
			default:
				q = new Mh(u.Ih, a), null == q.ext && (q = null)
		}
		if (null == q) break;
		q.prototype = v;
		q.QL = l;
		if (0 > h)
			for (h = 0; h < a.zk && null !=
				a.W[h]; h++);
		if (h >= a.zk) break;
		a.W[h] = q;
		a.Tb++;
		q.wL = r.Mc;
		q.Ya = r.jk;
		h > a.SH && a.CC++;
		q.zc = h;
		a.tu++;
		0 == a.tu && (a.tu = 1);
		q.um = a.tu;
		q.jc = c;
		q.ft = b;
		q.rb = u.Ih;
		u = a;
		b = q;
		v = b.jc;
		for (c = 0; c < u.nh && u.ua[c].lf != v; c++);
		v = u.ua[c];
		0 != (v.Nc & 2147483648) ? (v.Nc = b.zc, b.Oj = c | 2147483648, b.Rd = 2147483648) : (c = u.W[v.Nc], b.Oj = c.Oj, c.Oj = b.zc, b.Rd = c.zc, v.Nc = b.zc);
		b.IA = v.VB;
		b.ke = v;
		b.Vh = v.og; - 1 == b.ft ? b.ft = v.gu : -1 == v.gu && (v.gu = b.ft);
		v.mk += 1;
		q.c = a;
		q.et = !0;
		q.ga = r;
		0 == (q.Ya & Nh) && (q.Ya &= ~Oh, 0 != (q.Vh & nh) && 0 != (a.N.vd & 32) && (q.Ya |= Oh), 0 != (q.Vh & (Ph |
			ih)) && (q.Ya |= Oh));
		2147483648 == d && (d = l.Gw);
		p.OK = d;
		q.A = d;
		2147483648 == e && (e = l.Hw);
		p.PK = e;
		q.w = e;
		null != l && -1 == k && (k = l.PF);
		p.BE = k;
		q.ig = k;
		k = a.N.kc[k];
		k.FB++;
		p.CE = k.FB;
		p.Is = g;
		p.AE = f;
		p.NK = l;
		q.b = null;
		0 != (q.Ya & (hc | Lg | ic)) && (q.b = new Qh, q.b.za());
		q.J = null;
		0 != (q.Ya & Lg) && (q.J = new Rh, 0 == (p.Is & 1) && q.J.za(0, q, r, p, -1));
		q.Ca = null;
		0 != (q.Ya & hc) && (q.Ca = new Sh, q.Ca.za(q));
		q.ea = null;
		0 != (q.Ya & ic) && (q.ea = new Th, f = q.ea, g = p, f.a = q, f.ur = g.BE, f.gy = g.CE, f.Ja = 0, f.Ja |= dh, 0 == (f.a.Vh & Ph) && (f.Ja &= ~dh), 0 != (f.a.ke.hH & 4) && (f.Ja |= ah), 0 !=
			(g.Is & 2) ? (f.Ja |= Uh, f.a.rb == He && (f.a.Aa |= ec, f.Ja &= ~dh)) : f.Ja |= dc, f.$e = f.a.ke.gH, f.De = f.a.ke.fH, f.a.b.md == Vh && (f.Ja |= 2));
		q.ub = null;
		0 != (q.Ya & Wh) && (q.ub = new Xh, q.ub.za(q, r, p));
		q.za(r, p);
		0 != (q.Ya & ic) && q.ea.Aw(!0);
		1 <= a.de && q.Yk();
		return h
	}
	return -1
}

function hg(a)
{
	var b, c, d, e, f, g;
	if (null != a.m.im)
		for (d = 0; d < a.ua.length; d++)
			if (c = a.ua[d], b = c.Nc, 32767 != c.lf && 0 <= b && (f = Fe(a.m.Ke, c.lf), 0 != (f.Cl & Ge)))
				for (g = c.To + c.pg.toString(), e = 0; e < a.m.im.size(); e++)
					if (f = a.m.im.get(e), g == f.name)
					{
						for (e = 0;;)
						{
							b = a.W[b];
							if (c.pg == He) g = f.ye.get(e), b.vr = g.text, b.Oc = g.Oc, b.b.fa = !0, b.FO = !0;
							else if (c.pg == Ie) g = f.ye.get(e), b.hb = g.value, b.Oc = g.Oc, b.af = g.af, b.fy = g.fy, b.ey = g.ey, b.DO = !0, b.b.fa = !0;
							else
							{
								g = f.ye.get(e);
								b.ub.hy = g.Vb;
								rc(b.ub, g.values.length);
								var k, h = b.ub,
									p = g.Ql.length;
								if (p >=
									h.oh.length)
									for (k = 0; k < p; k++) h.oh[k] = "";
								for (k = 0; k < g.values.length; k++) b.ub.ee[k] = g.values[k];
								for (k = 0; k < g.Ql.length; k++) b.ub.oh[k] = g.Ql[k]
							}
							b = b.Rd;
							if (0 != (b & 2147483648)) break;
							e++;
							if (e >= f.ye.size()) break
						}
						break
					}
}

function Yh(a, b)
{
	var c, d;
	for (d = 0; d < a.kp.size() && (c = a.kp.get(d), !E(c.name, b)); d++);
	d == a.kp.size() && (c = new kb, a.kp.add(c), d = a.kp.size() - 1, c.name = b, c.Vb = 0);
	return d
}

function Re(a)
{
	0 != a.mp && Wd(a.m, 1)
}

function kg(a)
{
	0 != a.mp && Wd(a.m, -1)
}

function Se(a, b)
{
	var c, d;
	d = a.N.We;
	for (c = 0; c < d; c++)
	{
		var e = a.N.kc[c];
		e.reset();
		e.$d.children.length = 0;
		b && Te(e)
	}
}

function Oe(a, b)
{
	if (!b)
		if (0 == (a.m.dt & 1)) ub(a.m.Ed);
		else
		{
			var c = a.m.Ed,
				d;
			for (d = 0; d < xb; d++) null != c.rc[d] && dd(c.rc[d]) && c.app.Dk.on(c.rc[d].handle)
		}
}

function Ne(a)
{
	var b;
	for (b = 0; b < a.zk && 0 != a.Tb; b++)
		if (null != a.W[b])
		{
			var c = a.W[b];
			(32 > c.rb || 1110590791 != c.ga.Mc) && Ah(a, b, !0)
		} for (b = 0; b < a.zk && 0 != a.Tb; b++) null != a.W[b] && (c = a.W[b], 32 <= c.rb && 1110590791 == c.ga.Mc && Ah(a, b, !0))
}

function fg(a, b)
{
	var c, d, e, f, g;
	e = 0;
	for (g = Zh(a.N.Gf); null != g; e++, g = $h(a.N.Gf))
		if (c = Fe(a.m.Ke, g.bi), d = c.Kd, c = c.Ih, f = 8, g.VA == ai)
		{
			c == He && (f |= bc);
			if (0 == (d.Nm & Dh))
			{
				if (c == bi) continue;
				f |= 2
			}
			b && c >= ci && 0 == (d.jk & di) || 0 == (d.jk & ei) && Lb(a, g.zm, g.bi, 2147483648, 2147483648, -1, f, -1)
		} a.Ze &= -513
}

function Ce(a)
{
	var b, c, d, e, f;
	a.Ze &= -17;
	d = 0;
	for (f = Zh(a.N.Gf); null != f; d++, f = $h(a.N.Gf))
		if (b = Fe(a.m.Ke, f.bi), c = b.Kd, b = b.Ih, !(b < ci) && 0 == (c.jk & di) && (e = 8, f.VA == ai))
		{
			if (0 == (c.Nm & Dh))
			{
				if (b != He) continue;
				e |= 2
			}
			0 == (c.jk & ei) && Lb(a, f.zm, f.bi, 2147483648, 2147483648, -1, e, -1)
		} jg(a.u, a);
	a.np = (new Date).getTime() - a.nF
}

function eg(a)
{
	var b, c;
	a.Ze |= 32;
	a.Ze |= 512;
	var d = a.tu = 0;
	a.ua = Array(a.nh);
	a.mp = 0;
	for (b = fi(a.m.Ke); null != b; b = gi(a.m.Ke))
		if (c = b.Ih, c >= Nb)
		{
			a.ua[d] = new hi;
			var e, f = a.ua[d];
			e = b;
			f.lf = e.eu;
			f.pg = e.Ih;
			var g = e.Kd;
			f.hH = g.Nm;
			f.gH = e.PB;
			f.fH = e.QB;
			f.qx = g.jk;
			f.jh = 0;
			f.Nc = -1;
			f.og = 65535;
			null != e.RB && (f.To = e.RB);
			f.Tq = Array(8);
			for (e = 0; 8 > e; e++) f.Tq[e] = g.MB[e];
			a.ua[d].gu = -1;
			if (c == He || c == bi)
				for (c = Zh(a.N.Gf); null != c; c = $h(a.N.Gf))
					if (c.bi == a.ua[d].lf)
					{
						a.ua[d].gu = c.zm;
						break
					} d++;
			b = b.Kd;
			if (0 != (b.jk & Lg) && null != b.ji)
				for (c = 0; c < b.ji.Wt; c++) f =
					b.ji.Af[c], f.DB == ii && (a.mp |= 1 << f.Kq - 1)
		} for (d = 0; d < a.N.We; d++) a.N.kc[d].FB = 1
}

function dg(a)
{
	var b;
	for (b = 0; b < a.zk; b++) a.W[b] = null
}

function mg(a)
{
	if (0 < a.pj && null == a.m.gj) a.Hx && (1 == a.m.ro && (0 <= a.Xx ? a.m.vf[a.Xx] && (a.resume(), a.Tc = 0, ie(a.u, -458755)) : a.m.ro && (a.resume(), a.Tc = 0, ie(a.u, -458755))), a.m.ro = !1), null != a.Fx && a.Fx.uL(), b = a.Tc;
	else
	{
		a.m.oz |= 4;
		var b = qh(a);
		a.m.oz &= -5;
		0 != (a.Ze & 16) && (a.nF = (new Date).getTime() - a.np, Oe(a, !0), Pe(a.u))
	}
	if (b == zb || 2 == b || b == Bb)
	{
		a.m.tj = document.createElement("canvas");
		a.m.tj.width = a.m.$a;
		a.m.tj.height = a.m.fb;
		var c = new Nd(a.m.tj);
		a.m.frame.Dw ? c.Vv(0, 0, a.$a, a.fb) : c.Ae(0, 0, a.$a, a.fb, a.Jj);
		c.Ae(0, 0, a.m.$a,
			a.m.fb, a.m.Jj);
		a.m.Ig.$c(c, 0, 0)
	}
	if (0 != b) switch (b)
	{
		case 5:
			a.pause();
			a.m.ro = !1;
			a.Hx = !0;
			b = 0;
			break;
		case 101:
			if (a.N.iP) break;
			ub(a.m.Ed);
			Ne(a);
			Oe(a, !1);
			Se(a, !1);
			Pe(a.u);
			Re(a);
			Qe(a);
			a.N.xm = a.N.QA = a.en = 0;
			a.N.ym = a.N.RA = a.fn = 0;
			Ue(a.m);
			cg(a);
			dg(a);
			Se(a, !1);
			eg(a);
			fg(a, !1);
			gg(a);
			hg(a);
			ig(a.u);
			jg(a.u, a);
			lg(a);
			Wd(a.m, 1);
			kg(a);
			b = 0;
			a.rr = 0;
			break;
		case 100:
		case -2:
			ie(a.u, -196611)
	}
	return a.Tc = b
}

function Qe(a)
{
	a.N.VH = !1;
	a.W = null;
	a.ua = null;
	a.lp = null;
	a.kp = null;
	a.gn = null;
	var b;
	for (b = 0; 128 > b; b++) a.Bf[b] = 0;
	a.Wx = null
}

function cg(a)
{
	a.W = Array(a.N.gk);
	a.u = a.N.Xs;
	a.nh = 0;
	var b;
	for (b = fi(a.m.Ke); null != b; b = gi(a.m.Ke)) b.Ih >= Nb && a.nh++;
	a.BC = -1 == a.N.dx ? a.m.vi & 65535 : a.N.dx;
	a.lp = Array(Math.round(a.N.gk / 32 + 1));
	a.kp = new W;
	a.zk = a.N.gk;
	a.HC = a.u.WG;
	a.N.xm = 0;
	a.N.ym = 0;
	a.Ha = a.N.xm;
	a.Oa = a.N.ym;
	a.Zx = 0;
	a.$x = 0;
	a.Md = a.N.Ew.right; - 1 == a.Md && (a.Md = 2147479552);
	a.Nd = a.N.Ew.bottom; - 1 == a.Nd && (a.Nd = 2147479552);
	a.Tb = 0;
	a.Tc = 0;
	a.IC = 0;
	a.Ze &= 128;
	a.Ze |= 4;
	a.nr = 0;
	a.Vx = Array(10);
	a.gn = null;
	a.Ze |= 64;
	a.Bf = Array(128);
	a.or = Array(128);
	a.Wx = new ld;
	a.Wx.code =
		0;
	a.Rx = Array(4);
	a.Qx = Array(4);
	a.vu = Array(4);
	a.pe = Array(4);
	for (b = a.ce = 0; 10 > b; b++) a.Vx[b] = 50;
	a.Hx = !1;
	a.Yz = !1;
	a.N.VH = !0
}

function Ch()
{
	this.NK = null;
	this.CE = this.BE = this.AE = this.PK = this.OK = this.Is = 0
}
var oh = 128,
	Ph = 256,
	nh = 512,
	ih = 1024;

function hi()
{
	this.WB = this.VB = this.Nc = this.pg = this.Yc = this.lf = 0;
	this.kj = !1;
	this.gu = this.fH = this.gH = this.hH = this.Sq = this.og = this.qx = this.kh = this.jh = this.Tm = this.lk = this.Sm = this.TB = this.SB = this.mk = 0;
	this.To = this.Tq = null;
	this.UB = 0;
	this.Rm = null
}
hi.prototype = {};

function Je()
{
	this.ye = this.name = null
}

function Le()
{
	this.value = null;
	this.ey = this.fy = this.af = this.Oc = 0
}

function Ke()
{
	this.text = null;
	this.Oc = 0
}

function Me()
{
	this.Ql = this.values = null;
	this.Vb = 0
}

function ji()
{
	this.yq = this.ha = 0;
	this.zf = !1;
	this.s = this.Qa = null;
	this.Tw = this.Kc = 0;
	this.I = this.v = null;
	this.be = new ra;
	this.Cm = this.Bm = 0;
	this.Am = !1;
	this.bx = this.ax = 0;
	this.$w = !1;
	this.zq = -1;
	this.TL = !1
}
ji.prototype = {
	yj: function()
	{
		return !1
	},
	fc: function() {},
	cm: function() {},
	em: function() {},
	dm: function() {},
	Lp: function() {},
	za: function(a)
	{
		this.v = a;
		this.I = this.v.c
	},
	MA: function() {},
	Vc: function() {},
	move: function()
	{
		return !1
	},
	setPosition: function() {},
	Fe: function() {},
	Ge: function() {},
	stop: function() {},
	wh: function() {},
	reverse: function() {},
	start: function() {},
	rh: function() {},
	Ck: function() {},
	qh: function() {},
	NC: function() {},
	ky: function() {},
	Iu: function() {},
	zr: function() {},
	kz: function()
	{
		return 0
	},
	qw: function()
	{
		return 0
	},
	pL: function()
	{
		return 0
	},
	AF: function()
	{
		return 0
	},
	nw: function()
	{
		return 0
	},
	kA: function(a)
	{
		return this.v.J.kA(this.v, a, 32)
	},
	Ln: function(a)
	{
		this.v.b.lh = a;
		null != this.v.Ca && ki(this.v.Ca)
	},
	ow: function(a)
	{
		return this.v.c.pe[a]
	},
	BA: function()
	{
		return 0
	},
	rp: function() {}
};

function li(a)
{
	return a.v.J.xa.uE
}

function mi(a)
{
	a.v.c.Ye++;
	a.v.J.xa.sg = a.v.c.Ye;
	hh(a.v.c, a.v)
}

function ni(a)
{
	a.zf = !1;
	a.Tw = a.Qa.c.jp
}

function oi(a, b, c)
{
	a.Qa = b;
	a.ha = c;
	a.zf = !1;
	m_currentAngle = 0
};
var Ug = 4,
	pi = [0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

function qi()
{
	this.Li = this.th = this.dg = null
}
qi.prototype = {
	load: function(a)
	{
		var b = a.Ga,
			c = Array(32),
			d;
		for (d = 0; 32 > d; d++) c[d] = T(a);
		this.dg = Array(32);
		this.th = Array(32);
		this.Li = Array(32);
		for (d = 0; 32 > d; d++) this.dg[d] = null, this.th[d] = 0, this.Li[d] = 0, 0 != c[d] && (this.dg[d] = new ri, a.seek(b + c[d]), this.dg[d].load(a))
	},
	je: function(a)
	{
		var b;
		for (b = 0; 32 > b; b++) null != this.dg[b] && this.dg[b].je(a)
	}
};
var si = [3, 1, 2, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 1, 2, 0, 1, 2, 0, 0, 0, 1, 2, 0, 1, 2, 0, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function ti()
{
	this.Ji = 0;
	this.jm = this.Ki = null
}
ti.prototype = {
	load: function(a)
	{
		var b = a.Ga;
		V(a, 2);
		this.Ji = T(a);
		var c = Array(this.Ji),
			d;
		for (d = 0; d < this.Ji; d++) c[d] = T(a);
		this.Ki = Array(this.Ji);
		this.jm = Array(this.Ji);
		for (d = 0; d < this.Ji; d++) this.Ki[d] = null, this.jm[d] = 0, 0 != c[d] && (this.Ki[d] = new qi, a.seek(b + c[d]), this.Ki[d].load(a), this.jm[d] = 1);
		for (a = 0; a < this.Ji; a++)
			if (0 == this.jm[a])
			{
				b = !1;
				if (12 > a)
					for (d = 0; 4 > d; d++)
						if (0 != this.jm[si[4 * a + d]])
						{
							this.Ki[a] = this.Ki[si[4 * a + d]];
							b = !0;
							break
						} if (0 == b)
					for (d = 0; d < this.Ji; d++)
						if (0 != this.jm[d])
						{
							this.Ki[a] = this.Ki[d];
							break
						}
			}
		else
		{
			var e,
				f, g = this.Ki[a],
				k = a;
			for (f = 0; 32 > f; f++)
				if (null == g.dg[f])
				{
					e = 0;
					for (b = f + 1; 32 > e; e++, b++)
						if (b &= 31, null != g.dg[b])
						{
							g.th[f] = b;
							break
						} c = 0;
					for (d = f - 1; 32 > c; c++, d--)
						if (d &= 31, null != g.dg[d])
						{
							g.Li[f] = d;
							break
						} b == d || e < c ? g.th[f] |= 64 : c < e && (g.Li[f] |= 64)
				}
			else 16 > k && 0 == pi[k] && (g.dg[f].mz = g.dg[f].lz)
		}
	},
	je: function(a)
	{
		var b;
		for (b = 0; b < this.Ji; b++) 0 != this.jm[b] && this.Ki[b].je(a)
	}
};

function ri()
{
	this.Np = this.VD = this.UD = this.lz = this.mz = 0;
	this.In = null
}
ri.prototype = {
	load: function(a)
	{
		this.mz = a.oa();
		this.lz = a.oa();
		this.UD = T(a);
		this.VD = T(a);
		this.Np = T(a);
		this.In = Array(this.Np);
		var b;
		for (b = 0; b < this.Np; b++) this.In[b] = T(a)
	},
	je: function(a)
	{
		var b;
		for (b = 0; b < this.Np; b++)
			if (null != a)
			{
				var c = a.cl(this.In[b]); - 1 != c && (this.In[b] = c)
			}
	}
};
var ui = [0, 1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, -1];

function Sh()
{
	this.a = null;
	this.bp = this.Lx = this.tk = 0;
	this.sC = !1;
	this.$o = 0;
	this.oe = null;
	this.ar = this.Kx = 0;
	this.ru = null;
	this.br = this.Zq = this.oi = this.uk = this.IH = this.ap = this.Yq = this.qu = this.HH = this.$q = this.Xm = this.rC = 0;
	this.JH = -1
}
Sh.prototype = {
	za: function(a)
	{
		this.a = a;
		this.br = 0;
		vi(this);
		if (oc(this, 3)) this.br = 1, $b(this, 3), pc(this), this.Ln();
		else
		{
			for (a = 0; 0 <= ui[a] && !oc(this, ui[a]); a++);
			0 > ui[a] && oc(this, Ug) && (this.br = 2, $b(this, Ug), pc(this), this.Ln())
		}
	},
	Ln: function()
	{
		var a = this.a.A;
		this.a.b.Ym = a;
		a -= this.a.Wa;
		this.a.b.uC = a;
		a += this.a.da;
		this.a.b.vC = a;
		a = this.a.w;
		this.a.b.Zm = a;
		a -= this.a.Xa;
		this.a.b.wC = a;
		a += this.a.ca;
		this.a.b.xC = a;
		this.a.b.Nx = this.a.b.Jb;
		this.a.b.Mx = this.a.b.ac;
		return Tb(this, 1)
	}
};

function $b(a, b)
{
	a.tk = b + 1;
	Tb(a, 0)
}

function pc(a)
{
	0 == a.ap && (a.ap = 1)
}

function oc(a, b)
{
	return 0 == a.a.ga.Lm.jm[b] ? !1 : !0
}

function Tb(a, b)
{
	var c = a.a.ga,
		d = a.a.b.ra,
		e = a.a.b.lh;
	0 != a.bp && (d = a.bp - 1);
	1 == e && (0 == d && (e = 0), 75 <= d && (e = 2));
	0 != a.tk && (e = a.tk - 1);
	e != a.$o && (a.$o = e, e >= c.Lm.Ji && (e = c.Lm.Ji - 1), c = c.Lm.Ki[e], c != a.oe && (a.oe = c, a.Kx = -1, a.uk = 0, 0 == (a.a.Ya & wi) && (a.qu = 0)));
	var f;
	f = a.a.b.wa % 32;
	c = !1;
	0 != a.Lx && (f = a.Lx - 1);
	if (a.Kx != f && (a.Kx = f, e = a.oe.dg[f], null == e ? 0 != (a.oe.Li[f] & 64) ? f = a.oe.Li[f] & 63 : 0 != (a.oe.th[f] & 64) ? f = a.oe.th[f] & 63 : (e = f, 0 > a.ar ? f = a.oe.th[f] & 63 : (f -= a.ar, f = 15 < (f & 31) ? a.oe.th[e] & 63 : a.oe.Li[e] & 63)) : a.ar = f, e = a.oe.dg[f], null !=
			a.oe.dg[0] && 0 != (a.a.ga.Nm & xi) && (a.a.b.ac = 360 * a.Kx / 32, e = a.oe.dg[0], a.ru = null, c = !0), a.ru != e))
	{
		a.ru = e;
		a.ap = e.UD;
		a.IH = e.VD;
		f = e.mz;
		var g = e.lz;
		if (f != a.Xm || g != a.$q) a.Xm = f, a.$q = g, a.HH = g - f, a.Yq = f, a.rC = -1;
		a.oi = e.Np;
		0 != a.Zq && a.Zq - 1 >= a.oi && (a.Zq = 0);
		a.uk >= a.oi && (a.uk = 0);
		e = e.In[a.uk];
		0 == a.sC && (a.a.b.Jb = e, e = yi(a.a.c.m.Ba, e, a.a.b.ac, a.a.b.bc, a.a.b.cc), null != e && (a.a.da = e.width, a.a.ca = e.height, a.a.Wa = e.Hb, a.a.Xa = e.Cb, a.a.JA = e.Sl, a.a.KA = e.Ul), a.a.b.fa = !0, a.a.b.Wb = !0);
		if (1 == a.oi)
		{
			0 == a.Xm && (a.oi = 0);
			e = a.a.b.Jb;
			if (0 == e) return !1;
			e = yi(a.a.c.m.Ba, e, a.a.b.ac, a.a.b.bc, a.a.b.cc);
			null != e && (a.a.da = e.width, a.a.ca = e.height, a.a.Wa = e.Hb, a.a.Xa = e.Cb, a.a.JA = e.Sl, a.a.KA = e.Ul);
			return !1
		}
	}
	if (0 == b && 0 == a.Zq || 0 == c && 0 == a.oi) return !1;
	e = a.HH;
	d != a.rC && (a.rC = d, 0 == e ? (a.Yq = a.Xm, 0 != a.bp && (a.Yq = a.bp - 1)) : (f = a.a.b.nc - a.a.b.vk, 0 == f ? 0 != a.bp ? (e = e * d / 100 + a.Xm, e > a.$q && (e = a.$q)) : (e /= 2, e += a.Xm) : (e = e * d / f + a.Xm, e > a.$q && (e = a.$q)), a.Yq = e));
	e = a.ru;
	f = a.Zq;
	if (0 == f)
	{
		if (0 == a.Yq || a.sC) return !1;
		d = a.qu;
		f = a.uk;
		g = a.Yq;
		0 != (a.a.c.N.vd & 32768) && (g = Math.round(g * a.a.c.ce));
		for (d +=
			g; 100 < d;)
			if (d -= 100, f++, f >= a.oi && (f = a.IH, 0 != a.ap && (a.ap--, 0 == a.ap)))
			{
				a.uk = a.oi - 1;
				a.oi = 0;
				0 != a.tk && (a.tk = 0, a.Lx = 0, a.bp = 0);
				a.uk < e.Np && (e = e.In[a.uk], e != a.a.b.Jb && (a.a.b.Jb = e, a.a.b.fa = !0, a.a.b.Wb = !0));
				a.qu = d;
				if (0 != (a.a.c.Ze & 512)) return !1;
				c && (a.a.b.fa = !0, a.a.b.Wb = !0, e = yi(a.a.c.m.Ba, a.a.b.Jb, a.a.b.ac, a.a.b.bc, a.a.b.cc), null != e && (a.a.da = e.width, a.a.ca = e.height, a.a.Wa = e.Hb, a.a.Xa = e.Cb, a.a.JA = e.Sl, a.a.KA = e.Ul));
				d = -131072;
				d |= a.a.rb & 65535;
				a.a.c.u.Ld = a.a.Ca.$o;
				return kh(a.a.c.u, a.a, d)
			} a.qu = d
	}
	else f--;
	a.uk = f;
	a.a.b.fa = !0;
	a.a.b.Wb = !0;
	e = e.In[f];
	if (a.a.b.Jb != e || a.JH != a.a.b.ac) a.a.b.Jb = e, a.JH = a.a.b.ac, 0 <= e && (e = yi(a.a.c.m.Ba, e, a.a.b.ac, a.a.b.bc, a.a.b.cc), null != e && (a.a.da = e.width, a.a.ca = e.height, a.a.Wa = e.Hb, a.a.Xa = e.Cb, a.a.JA = e.Sl, a.a.KA = e.Ul));
	return !1
}

function ki(a)
{
	switch (a.br)
	{
		case 0:
			a.Ln();
			break;
		case 1:
			Tb(a, 1);
			4 != a.tk && (oc(a, 0) || oc(a, 1) || oc(a, 2) ? (a.br = 0, a.tk = 0, Tb(a, 0)) : (a.br = 2, jc(a.a.c, a.a)));
			break;
		case 2:
			0 == (a.a.Aa & zi) && (Tb(a, 1), a.tk != Ug + 1 && gc(a.a.c, a.a.zc))
	}
}

function vi(a)
{
	a.a.b.lh = 1;
	a.sC = !1;
	a.tk = 0;
	a.Lx = 0;
	a.bp = 0;
	a.Zq = 0;
	a.qu = 0;
	a.uk = 0;
	a.$o = -1;
	a.Xm = -1;
	a.ar = -1;
	a.oe = null;
	a.ru = null;
	a.Ln()
};

function Ai(a, b)
{
	this.Ba = a;
	this.app = a.app;
	this.handle = b
}
Ai.prototype = {
	lA: function()
	{
		var a = this.app.bn + "M" + pa(this.handle, "png"),
			b = new Image;
		this.Ba.Yd[this.handle] = b;
		var c = this;
		b.onload = function()
		{
			yg(c.app, c)
		};
		b.onerror = function()
		{
			yg(c.app, c)
		};
		b.src = a
	}
};

function Gd(a)
{
	this.app = a;
	this.images = this.file = null;
	this.hi = this.Jm = this.bd = 0;
	this.El = this.Yd = this.Fl = this.Mn = this.no = this.Jl = this.Xb = this.xb = this.So = null
}
Gd.prototype = {
	Hl: function(a)
	{
		this.file = a;
		this.bd = T(this.file);
		this.So = Array(this.bd);
		a = T(this.file);
		var b, c, d = new Bi;
		for (b = 0; b < a; b++) c = this.file.Ga, d.tq(this.file), this.So[d.handle] = c;
		this.Xb = Array(this.bd);
		for (b = 0; b < this.bd; b++) this.Xb[b] = 0;
		this.xb = null;
		this.Jm = this.bd;
		this.hi = 0;
		this.images = null
	},
	Hu: function()
	{
		var a;
		for (a = 0; a < this.bd; a++) this.So[a] && (this.Xb[a] = 1)
	},
	si: function()
	{
		if (0 == (this.app.Bb & 16777216) && 0 == (this.app.Bb & 32768))
		{
			var a;
			for (a = 0; a < this.bd; a++) this.Xb[a] = 0
		}
		this.El = null
	},
	on: function(a)
	{
		this.Xb[a]++
	},
	cl: function(a)
	{
		this.on(a);
		return -1
	},
	load: function(a)
	{
		var b;
		if (0 < this.app.Kg)
			if (null == this.Yd)
			{
				if (this.Yd = Array(this.app.Kg), this.app.Bb & 16777216)
					for (b = 0; b < this.app.Kg; b++) this.app.Yd[b] && Ci(this, b)
			}
		else if (0 == (this.app.Bb & 16777216))
		{
			this.El = Array(this.app.Kg);
			for (b = 0; b < this.app.Kg; b++) this.El[b] = this.Yd[b];
			this.Yd = Array(this.app.Kg);
			for (b = 0; b < this.app.Kg; b++) this.Yd[b] = null
		}
		for (b = this.hi = 0; b < this.bd; b++) 0 != this.Xb[b] && this.hi++;
		b = Array(this.hi);
		var c = 0,
			d;
		for (d = 0; d < this.bd; d++)
			if (0 != this.Xb[d])
			{
				if (null !=
					this.images && -1 != this.xb[d] && null != this.images[this.xb[d]])
				{
					if (b[c] = this.images[this.xb[d]], b[c].Xb = this.Xb[d], null != this.Yd && null != this.El)
					{
						var e = b[c].Xd;
						0 < e && (this.Yd[e] = this.El[e])
					}
				}
				else 0 != this.So[d] && (b[c] = new Bi, a.seek(this.So[d]), b[c].load(this.app), b[c].Xb = this.Xb[d]);
				c++
			} this.images = b;
		this.xb = Array(this.bd);
		for (b = 0; b < this.bd; b++) this.xb[b] = -1;
		for (b = 0; b < this.hi; b++) this.images[b] && (this.xb[this.images[b].handle] = b);
		this.Jm = this.bd
	},
	QF: function(a)
	{
		var b;
		for (b = 0; b < a.length; b++)
			if (0 <= a[b] && a[b] <
				this.Jm && 0 != this.So[a[b]] && null == Y(this, a[b]))
			{
				var c, d = -1;
				for (c = 0; c < this.hi; c++)
					if (null == this.images[c])
					{
						d = c;
						break
					} if (-1 == d)
				{
					var e = Array(this.hi + 10);
					for (c = 0; c < this.hi; c++) e[c] = this.images[c];
					for (; c < this.hi + 10; c++) e[c] = null;
					d = this.hi;
					this.hi += 10;
					this.images = e
				}
				this.xb[a[b]] = d;
				this.images[d] = new Bi;
				this.images[d].Xb = 1;
				this.file.seek(this.So[a[b]]);
				this.images[d].load(this.app)
			}
	}
};

function yi(a, b, c, d, e)
{
	var f;
	null == a.Fl && (a.Fl = new Bi);
	f = Y(a, b);
	if (null != f)
	{
		b = f.width;
		var g = f.height,
			k = f.Hb,
			h = f.Cb,
			p = f.Sl;
		f = f.Ul;
		if (0 == c) 1 != d && (k *= d, p *= d, b *= d), 1 != e && (h *= e, f *= e, g *= e);
		else
		{
			1 != d && (k *= d, p *= d, b *= d);
			1 != e && (h *= e, f *= e, g *= e);
			null == a.Jl && (a.Jl = new ra);
			null == a.no && (a.no = new Ya);
			null == a.Mn && (a.Mn = new Ya);
			a.no.x = k;
			a.no.y = h;
			a.Mn.x = p;
			a.Mn.y = f;
			a.Jl.left = a.Jl.top = 0;
			a.Jl.right = b;
			a.Jl.bottom = g;
			d = a.Jl;
			e = a.no;
			b = a.Mn;
			var l;
			90 == c ? (c = 0, g = 1) : 180 == c ? (c = -1, g = 0) : 270 == c ? (c = 0, g = -1) : (g = c * Math.PI / 180, c = Math.cos(g),
				g = Math.sin(g));
			var r, u;
			null == e ? h = k = f = l = 0 : (r = -e.x * c, u = -e.x * g, f = -e.y * c, l = -e.y * g, h = r + l, k = f - u);
			p = null == e ? d.right : d.right - e.x;
			r = p * c;
			u = p * g;
			p = r + l;
			f -= u;
			var q;
			l = null == e ? d.bottom : d.bottom - e.y;
			q = r + l * g;
			l = l * c - u;
			var v, n;
			v = h + q - p;
			n = k + l - f;
			r = Math.min(h, Math.min(p, Math.min(q, v)));
			u = Math.min(k, Math.min(f, Math.min(l, n)));
			h = Math.max(h, Math.max(p, Math.max(q, v)));
			k = Math.max(k, Math.max(f, Math.max(l, n)));
			null != b && (null == e ? (p = b.x, l = b.y) : (p = b.x - e.x, l = b.y - e.y), b.x = p * c + l * g - r, b.y = l * c - p * g - u);
			null != e && (e.x = -r, e.y = -u);
			d.right = h - r;
			d.bottom = k - u;
			b = a.Jl.right;
			g = a.Jl.bottom;
			k = a.no.x;
			h = a.no.y;
			p = a.Mn.x;
			f = a.Mn.y
		}
		a.Fl.width = b;
		a.Fl.height = g;
		a.Fl.Hb = k;
		a.Fl.Cb = h;
		a.Fl.Sl = p;
		a.Fl.Ul = f;
		return a.Fl
	}
	return f
}

function Ci(a, b)
{
	null == a.Yd[b] && (null != a.El && b < a.El.length && null != a.El[b] ? a.Yd[b] = a.El[b] : (a.Yd[b] = new Ai(a, b), xg(a.app, a.Yd[b])))
}

function Y(a, b)
{
	return 0 <= b && b < a.Jm && -1 != a.xb[b] ? a.images[a.xb[b]] : null
}

function Bi()
{
	this.app = null;
	this.Xb = this.Ul = this.Sl = this.Cb = this.Hb = this.height = this.width = this.handle = 0;
	this.Po = this.fx = this.Im = this.ud = null;
	this.ih = this.hh = this.Xd = 0
}

function Gg(a, b)
{
	var c = new Bi;
	c.app = a;
	c.ud = new Image;
	c.ud.onload = function()
	{
		c.app.el++;
		c.width = c.ud.width;
		c.height = c.ud.height
	};
	a.fl++;
	a.Qj = !0;
	c.ud.src = a.bn + b;
	return c
}
Bi.prototype = {
	tq: function(a)
	{
		this.handle = T(a);
		V(a, 12)
	},
	lA: function()
	{
		this.ud = new Image;
		var a = this;
		this.ud.onload = function()
		{
			yg(a.app, a)
		};
		this.ud.onerror = function()
		{
			yg(a.app, a)
		};
		this.ud.src = this.app.bn + pa(this.handle, "png")
	},
	load: function(a)
	{
		this.app = a;
		this.handle = T(a.file);
		this.width = T(a.file);
		this.height = T(a.file);
		this.Hb = S(a.file);
		this.Cb = S(a.file);
		this.Sl = S(a.file);
		this.Ul = S(a.file);
		this.Xd = 0;
		this.ud = null;
		null != this.app.frame.Ot ? (this.Xd = this.app.frame.Ot[this.handle], 0 != this.Xd ? (Ci(this.app.Ba,
			this.Xd), this.hh = this.app.frame.hh[this.handle], this.ih = this.app.frame.ih[this.handle]) : xg(this.app, this)) : xg(this.app, this)
	},
	createElement: function()
	{
		var a = document.createElement("div");
		a.style.width = this.width + "px";
		a.style.height = this.height + "px";
		a.style.backgroundRepeat = "no-repeat";
		0 == this.Xd ? a.style.backgroundImage = "url('" + this.ud.src + "')" : (a.style.backgroundPosition = "-" + this.hh + "px -" + this.ih + "px", a.style.backgroundImage = "url('" + this.app.bn + "M" + pa(this.Xd, "png") + "')");
		return a
	}
};

function bh(a, b, c, d, e)
{
	if (0 == (b & Di))
	{
		null == a.Im && (a.Im = new Ei, Fi(a.Im, a.app, a, b));
		if (0 == c && 1 == d && 1 == e) return a.Im;
		null == a.Po && (a.Po = new W);
		var f, g = 2147483647,
			k = -1;
		for (f = 0; f < a.Po.size(); f++)
		{
			b = a.Po.get(f);
			if (c == b.angle && d == b.fe && e == b.ge) return b.qa;
			b.VC < g && (g = b.VC, k = f)
		}
		a.Po.size() < a.HP && (k = -1);
		b = new Gi;
		b.qa = new Ei;
		f = b.qa;
		var g = a.Im,
			h, p, l = g.width;
		h = g.height;
		var r = new ra;
		r.right = Math.floor(g.width * d);
		r.bottom = Math.floor(g.height * e);
		var u = new Ya;
		u.x = Math.floor(g.Hb * d);
		u.y = Math.floor(g.Cb * e);
		var q, v, n,
			w;
		90 == c ? (n = 0, w = 1) : 180 == c ? (n = -1, w = 0) : 270 == c ? (n = 0, w = -1) : (w = c * Math.PI / 180, n = Math.cos(w), w = Math.sin(w));
		var D, z;
		null == u ? (v = z = 0, Hi.x = Hi.y = 0) : (D = -u.x * n, q = -u.x * w, v = -u.y * n, z = -u.y * w, Hi.x = Math.floor(D + z), Hi.y = Math.floor(v - q));
		q = null == u ? r.right : r.right - u.x;
		D = q * n;
		q *= w;
		Ii.x = Math.floor(D + z);
		Ii.y = Math.floor(v - q);
		v = null == u ? r.bottom : r.bottom - u.y;
		Ji.x = Math.floor(D + v * w);
		Ji.y = Math.floor(v * n - q);
		Ki.x = Hi.x + Ji.x - Ii.x;
		Ki.y = Hi.y + Ji.y - Ii.y;
		n = Math.min(Hi.x, Math.min(Ii.x, Math.min(Ji.x, Ki.x)));
		w = Math.min(Hi.y, Math.min(Ii.y, Math.min(Ji.y,
			Ki.y)));
		D = Math.max(Hi.x, Math.max(Ii.x, Math.max(Ji.x, Ki.x)));
		q = Math.max(Hi.y, Math.max(Ii.y, Math.max(Ji.y, Ki.y)));
		null != u && (u.x = -n, u.y = -w);
		r.right = D - n;
		r.bottom = q - w;
		var A = r.right,
			r = r.bottom;
		if (!(0 >= A || 0 >= r))
		{
			n = g.lineWidth;
			w = (A + 15 & 2147483632) / 16;
			f.qa = "undefined" != typeof ArrayBuffer ? new Uint16Array(new ArrayBuffer(2 * (w * r + 1))) : Array(w * r + 1);
			for (D = w * r; 0 <= D; D--) f.qa[D] = 0;
			f.lineWidth = w;
			f.width = A;
			f.height = r;
			f.Hb = u.x;
			f.Cb = u.y;
			var u = .017453292 * c,
				I = Math.cos(u),
				G = Math.sin(u),
				u = 0;
			D = Math.floor(65536 * (l / 2 - (A / 2 * I - r /
				2 * G) / d));
			q = Math.floor(65536 * (h / 2 - (A / 2 * G + r / 2 * I) / e));
			v = Math.floor(65536 * I / d);
			z = Math.floor(65536 * G / e);
			var R = A / 16,
				A = A % 16,
				I = Math.floor(65536 * I / e),
				G = Math.floor(65536 * G / d),
				l = 65536 * l,
				O = 65536 * h,
				K, L;
			for (p = 0; p < r; p++)
			{
				var M = D,
					N = q,
					t = u,
					C;
				for (h = 0; h < R; h++)
				{
					var B = 0;
					0 <= M && M < l && 0 <= N && N < O && (C = Math.floor(M / 65536), L = Math.floor(N / 65536), K = 32768 >>> C % 16, L = g.qa[Math.floor(L * n + C / 16)], 0 != (L & K) && (B |= 32768));
					M += v;
					N += z;
					0 <= M && M < l && 0 <= N && N < O && (C = Math.floor(M / 65536), L = Math.floor(N / 65536), K = 32768 >>> C % 16, L = g.qa[Math.floor(L * n + C / 16)],
						0 != (L & K) && (B |= 16384));
					M += v;
					N += z;
					0 <= M && M < l && 0 <= N && N < O && (C = Math.floor(M / 65536), L = Math.floor(N / 65536), K = 32768 >>> C % 16, L = g.qa[Math.floor(L * n + C / 16)], 0 != (L & K) && (B |= 8192));
					M += v;
					N += z;
					0 <= M && M < l && 0 <= N && N < O && (C = Math.floor(M / 65536), L = Math.floor(N / 65536), K = 32768 >>> C % 16, L = g.qa[Math.floor(L * n + C / 16)], 0 != (L & K) && (B |= 4096));
					M += v;
					N += z;
					0 <= M && M < l && 0 <= N && N < O && (C = Math.floor(M / 65536), L = Math.floor(N / 65536), K = 32768 >>> C % 16, L = g.qa[Math.floor(L * n + C / 16)], 0 != (L & K) && (B |= 2048));
					M += v;
					N += z;
					0 <= M && M < l && 0 <= N && N < O && (C = Math.floor(M / 65536),
						L = Math.floor(N / 65536), K = 32768 >>> C % 16, L = g.qa[Math.floor(L * n + C / 16)], 0 != (L & K) && (B |= 1024));
					M += v;
					N += z;
					0 <= M && M < l && 0 <= N && N < O && (C = Math.floor(M / 65536), L = Math.floor(N / 65536), K = 32768 >>> C % 16, L = g.qa[Math.floor(L * n + C / 16)], 0 != (L & K) && (B |= 512));
					M += v;
					N += z;
					0 <= M && M < l && 0 <= N && N < O && (C = Math.floor(M / 65536), L = Math.floor(N / 65536), K = 32768 >>> C % 16, L = g.qa[Math.floor(L * n + C / 16)], 0 != (L & K) && (B |= 256));
					M += v;
					N += z;
					0 <= M && M < l && 0 <= N && N < O && (C = Math.floor(M / 65536), L = Math.floor(N / 65536), K = 32768 >>> C % 16, L = g.qa[Math.floor(L * n + C / 16)], 0 != (L & K) && (B |=
						128));
					M += v;
					N += z;
					0 <= M && M < l && 0 <= N && N < O && (C = Math.floor(M / 65536), L = Math.floor(N / 65536), K = 32768 >>> C % 16, L = g.qa[Math.floor(L * n + C / 16)], 0 != (L & K) && (B |= 64));
					M += v;
					N += z;
					0 <= M && M < l && 0 <= N && N < O && (C = Math.floor(M / 65536), L = Math.floor(N / 65536), K = 32768 >>> C % 16, L = g.qa[Math.floor(L * n + C / 16)], 0 != (L & K) && (B |= 32));
					M += v;
					N += z;
					0 <= M && M < l && 0 <= N && N < O && (C = Math.floor(M / 65536), L = Math.floor(N / 65536), K = 32768 >>> C % 16, L = g.qa[Math.floor(L * n + C / 16)], 0 != (L & K) && (B |= 16));
					M += v;
					N += z;
					0 <= M && M < l && 0 <= N && N < O && (C = Math.floor(M / 65536), L = Math.floor(N / 65536),
						K = 32768 >>> C % 16, L = g.qa[Math.floor(L * n + C / 16)], 0 != (L & K) && (B |= 8));
					M += v;
					N += z;
					0 <= M && M < l && 0 <= N && N < O && (C = Math.floor(M / 65536), L = Math.floor(N / 65536), K = 32768 >>> C % 16, L = g.qa[Math.floor(L * n + C / 16)], 0 != (L & K) && (B |= 4));
					M += v;
					N += z;
					0 <= M && M < l && 0 <= N && N < O && (C = Math.floor(M / 65536), L = Math.floor(N / 65536), K = 32768 >>> C % 16, L = g.qa[Math.floor(L * n + C / 16)], 0 != (L & K) && (B |= 2));
					M += v;
					N += z;
					0 <= M && M < l && 0 <= N && N < O && (C = Math.floor(M / 65536), L = Math.floor(N / 65536), K = 32768 >>> C % 16, L = g.qa[Math.floor(L * n + C / 16)], 0 != (L & K) && (B |= 1));
					M += v;
					N += z;
					f.qa[t++] = B
				}
				if (0 !=
					A)
				{
					B = 32768;
					for (h = C = 0; h < A; h++, B = B >> 1 & 32767)
					{
						if (0 <= M && M < l && 0 <= N && N < O)
						{
							L = Math.floor(M / 65536);
							var J = Math.floor(N / 65536);
							K = 32768 >>> L % 16;
							L = g.qa[Math.floor(J * n + L / 16)];
							0 != (L & K) && (C |= B)
						}
						M += v;
						N += z
					}
					f.qa[t] = C
				}
				u += w;
				D -= G;
				q += I
			}
		}
		b.angle = c;
		b.fe = d;
		b.ge = e;
		b.VC = a.app.vi;
		0 > k ? a.Po.add(b) : a.Po.set(k, b);
		return b.qa
	}
	null == a.fx && (null == a.Im && (a.Im = new Ei, Fi(a.Im, a.app, a, 0)), a.fx = new Ei, Fi(a.fx, a.app, a, b));
	return a.fx
}

function Hd(a)
{
	this.app = a;
	this.ox = this.fonts = this.file = null;
	this.tl = 0;
	this.xb = null;
	this.fk = this.Jg = 0;
	this.Xb = null;
	this.Zt = new Rd;
	Sd(this.Zt)
}
Hd.prototype = {
	Hl: function(a)
	{
		var b = F(a),
			c;
		this.Jg = 0;
		var d = a.Ga,
			e = new Rd;
		for (c = 0; c < b; c++) e.tq(a), this.Jg = Math.max(this.Jg, e.handle + 1);
		a.seek(d);
		this.ox = Array(this.Jg);
		for (c = 0; c < b; c++) d = a.Ga, e.tq(a), this.ox[e.handle] = d;
		this.Xb = Array(this.Jg);
		for (c = 0; c < this.Jg; c++) this.Xb[c] = 0;
		this.xb = null;
		this.fk = this.Jg;
		this.tl = 0;
		this.fonts = null
	},
	load: function(a)
	{
		var b;
		for (b = this.tl = 0; b < this.Jg; b++) 0 != this.Xb[b] && this.tl++;
		b = Array(this.tl);
		var c = 0,
			d;
		for (d = 0; d < this.Jg; d++) 0 != this.Xb[d] && (null != this.fonts && -1 != this.xb[d] &&
			null != this.fonts[this.xb[d]] ? b[c] = this.fonts[this.xb[d]] : (b[c] = new Rd, a.seek(this.ox[d]), b[c].load(a)), b[c].Xb = this.Xb[d], c++);
		this.fonts = b;
		this.xb = Array(this.Jg);
		for (b = 0; b < this.Jg; b++) this.xb[b] = -1;
		for (b = 0; b < this.tl; b++) this.xb[this.fonts[b].handle] = b;
		this.fk = this.Jg
	},
	si: function()
	{
		if (0 == (this.app.YO & 16777216) && 0 == (this.app.Bb & 32768))
		{
			var a;
			for (a = 0; a < this.Jg; a++) this.Xb[a] = 0
		}
	},
	Hu: function()
	{
		var a;
		for (a = 0; a < this.Jg; a++) this.ox[a] && (this.Xb[a] = 1)
	},
	on: function(a)
	{
		-1 == a ? null == this.Zt && (this.Zt = new Rd,
			Sd(this.Zt)) : this.Xb[a]++
	},
	cl: function(a)
	{
		this.on(a);
		return -1
	}
};

function Li(a, b)
{
	var c, d;
	for (d = 0; d < a.tl && (null == a.fonts[d] || a.fonts[d].le != b.le || a.fonts[d].ai != b.ai || a.fonts[d].$h != b.$h || a.fonts[d].Zh != b.Zh); d++);
	if (d < a.tl) return a.fonts[d].handle;
	d = -1;
	for (c = a.Jg; c < a.fk && -1 != a.xb[c]; c++);
	if (-1 == d)
	{
		var e = Array(a.fk + 10);
		for (c = 0; c < a.fk; c++) e[c] = a.xb[c];
		for (; c < a.fk + 10; c++) e[c] = -1;
		d = a.fk;
		a.fk += 10;
		a.xb = e
	}
	e = -1;
	for (c = 0; c < a.tl; c++)
		if (null == a.fonts[c])
		{
			e = c;
			break
		} - 1 == e && (e = a.tl, a.fonts.push(null));
	a.xb[d] = e;
	a.fonts[e] = new Rd;
	a.fonts[e].handle = d;
	a.fonts[e].le = b.le;
	a.fonts[e].ai =
		b.ai;
	a.fonts[e].$h = b.$h;
	a.fonts[e].Zh = b.Zh;
	return d
}

function Mi(a, b)
{
	return -1 == b ? a.Zt : 0 <= b && b < a.fk && -1 != a.xb[b] ? a.fonts[a.xb[b]] : null
}

function Rd()
{
	this.$h = this.ai = this.le = this.handle = this.Xb = 0;
	this.font = this.Zh = null;
	this.oo = !1
}
Rd.prototype = {
	tq: function(a)
	{
		this.handle = F(a);
		0 == a.Sh ? V(a, 72) : V(a, 104)
	},
	load: function(a)
	{
		this.handle = F(a);
		var b = a.Ga;
		V(a, 12);
		this.le = F(a);
		0 > this.le && (this.le = -this.le);
		F(a);
		F(a);
		F(a);
		this.ai = F(a);
		this.$h = a.oa();
		a.oa();
		a.oa();
		a.oa();
		a.oa();
		a.oa();
		a.oa();
		a.oa();
		this.Zh = a.ed();
		0 == a.Sh ? a.seek(b + 72) : a.seek(b + 104)
	},
	Ui: function()
	{
		return this.le + Math.ceil(this.le / 8)
	},
	dl: function()
	{
		if (null == this.font)
		{
			this.font = this.$h ? "italic " : "normal ";
			var a = 100 * Math.floor(this.ai / 100),
				a = Math.max(a, 100),
				a = Math.min(a, 900);
			this.font += a + " ";
			this.font += this.le + "px ";
			this.font += this.Zh
		}
		return this.font
	}
};

function Sd(a)
{
	a.Zh = "Arial";
	a.le = 13;
	a.ai = 400;
	a.$h = 0
}

function Ni(a)
{
	var b = new Za;
	b.le = a.le;
	b.ai = a.ai;
	b.$h = a.$h;
	b.Zh = a.Zh;
	return b
}

function Id(a)
{
	this.app = a;
	this.tp = null;
	this.Xt = this.Jm = this.bd = 0;
	this.file = this.Xb = this.xb = this.px = null
}
Id.prototype = {
	Hl: function(a)
	{
		this.file = a;
		this.bd = T(this.file);
		this.px = Array(this.bd);
		this.Xb = Array(this.bd);
		this.xb = Array(this.bd);
		for (a = 0; a < this.bd; a++) this.Xb[a] = 0, this.xb[a] = -1;
		var b = T(this.file),
			c = new Bg(this.app),
			d;
		for (a = 0; a < b; a++) d = this.file.Ga, c.tq(), this.px[c.handle] = d;
		this.Jm = this.bd;
		this.Xt = 0;
		this.tp = null
	},
	si: function()
	{
		if (0 == (this.app.Bb & 16777216) && 0 == (this.app.Bb & 32768))
		{
			var a;
			for (a = 0; a < this.bd; a++) this.Xb[a] = 0
		}
	},
	Hu: function()
	{
		var a;
		for (a = 0; a < this.bd; a++) this.px[a] && (this.Xb[a] = 1)
	},
	on: function(a)
	{
		this.Xb[a]++
	},
	cl: function(a)
	{
		this.on(a);
		return -1
	},
	load: function()
	{
		var a;
		for (a = this.Xt = 0; a < this.bd; a++) 0 != this.Xb[a] && this.Xt++;
		a = Array(this.Xt);
		var b = 0,
			c;
		for (c = 0; c < this.bd; c++) 0 != this.Xb[c] && (null != this.tp && -1 != this.xb[c] && null != this.tp[this.xb[c]] ? a[b] = this.tp[this.xb[c]] : (a[b] = new Bg(this.app), this.file.seek(this.px[c]), a[b].load()), a[b].Xb = this.Xb[c], b++);
		this.tp = a;
		this.xb = Array(this.bd);
		for (a = 0; a < this.bd; a++) this.xb[a] = -1;
		for (a = 0; a < this.Xt; a++) this.xb[this.tp[a].handle] = a;
		this.Jm = this.bd;
		this.si()
	}
};

function Bg(a)
{
	this.df = a;
	this.context = a.Ed.context;
	this.eq = a.Ed.eq;
	this.nL = a.Ed.nL;
	this.type = 0;
	this.file = a.file;
	this.handle = -1;
	this.Pc = this.source = null;
	this.Xb = 0;
	this.Es = !1;
	this.ul = 0;
	this.name = null;
	this.om = this.Sv = this.yg = !1;
	this.frequency = 0;
	this.gain = this.response = null
}
Bg.prototype = {
	tq: function()
	{
		this.handle = T(this.file);
		V(this.file, 5);
		var a = T(this.file);
		0 == this.file.Sh ? V(this.file, a) : V(this.file, 2 * a)
	},
	lA: function()
	{
		var a, b = this.df.Ed.gC & this.type;
		0 == b && (b = this.df.Ed.rB & this.type);
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
				d.open("GET", this.df.bn + pa(this.handle, b), !0);
				d.responseType = "arraybuffer";
				d.addEventListener("load", function()
				{
					c.response =
						d.response;
					var a = c.df.Ed,
						b = c;
					null == a.ao && (a.ao = new W);
					a.ao.add(b)
				});
				d.send()
			}
			else this.Pc = new Audio, this.Pc.NP = "auto", c = this, this.Pc.addEventListener("loadeddata", function(a)
			{
				yg(c.df, c);
				c.Pc.removeEventListener("loadeddata", arguments.callee, !1)
			}, !1), this.Pc.addEventListener("error", function()
			{
				yg(c.df, c);
				c.Pc = null
			}, !1), this.Pc.src = this.df.bn + pa(this.handle, b), this.Pc.load(), this.Pc.autoplay = !1
		}
		else yg(this.df, this)
	},
	load: function()
	{
		this.handle = T(this.file);
		this.type = this.file.oa();
		this.Ls = this.frequency =
			F(this.file);
		var a = T(this.file);
		this.name = this.file.ed(a);
		this.Pc = null;
		xg(this.df, this)
	},
	play: function(a, b, c)
	{
		this.ul = a;
		0 == this.ul && (this.ul = 1E7);
		this.volume = c;
		$d(this)
	},
	stop: function()
	{
		this.Pc ? this.Pc.pause() : this.source && this.om && ("undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0), this.source.onended = null);
		this.om = this.Es = !1
	},
	pause: function()
	{
		this.yg || (this.Pc ? this.Pc.pause() : this.source && (this.source.onended = null, "undefined" !== typeof this.source.stop ? this.source.stop(0) :
			this.source.noteOff(0), this.DM = Date.now() - this.startTime), this.yg = !0)
	},
	resume: function()
	{
		this.yg && (this.Pc ? this.Pc.play() : this.source && $d(this, this.DM), this.yg = !1)
	},
	Bw: function()
	{
		return this.yg
	},
	setPosition: function(a)
	{
		this.Pc ? this.Pc.currentTime = a / 1E3 : this.source && (this.om && (this.source.onended = null, "undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0)), $d(this, a))
	}
};

function rh(a)
{
	if (1 == a.om && 0 == a.yg)
		if (a.Pc)
		{
			if (a.Pc.ended)
			{
				if (0 < a.ul && (a.ul--, 0 < a.ul)) return $d(a, 0, a.Ls), !1;
				a.Es = !1;
				a.om = !1;
				return !0
			}
		}
	else if (a.source && (3 == a.source.playbackState || a.eE))
	{
		if (0 < a.ul && (a.ul--, 0 < a.ul)) return $d(a, 0, a.Ls), !1;
		a.Es = !1;
		a.om = !1;
		return !0
	}
	return !1
}

function dd(a)
{
	return (a.Pc || a.source) && a.om ? !a.yg : !1
}

function $d(a, b, c)
{
	b || (b = 0);
	c || (c = a.frequency);
	a.Pc ? (a.Pc.volume = a.volume / 100, a.Ls = c, a.Pc.playbackRate = c / a.frequency, a.Pc.duration && (a.Pc.currentTime = 0), a.Pc.play()) : a.buffer && (a.source = a.context.createBufferSource(), a.source.buffer = a.buffer, 0 == a.eq ? (a.source.gain.value = a.volume / 100, a.source.connect(a.context.destination)) : (a.gain = a.context.createGain(), a.source.connect(a.gain), a.gain.connect(a.context.destination), a.gain.gain.value = a.volume / 100), b || (b = 0), c || (c = a.frequency), a.Ls = c, a.source.playbackRate.value =
		c / a.frequency, a.startTime = Date.now() - b, "undefined" !== typeof a.source.start ? a.source.start(0, b / 1E3) : a.source.noteOn(b), a.source.onended = function()
		{
			a.eE = !0
		});
	a.yg = !1;
	a.om = !0;
	a.eE = !1
}

function Cg(a)
{
	a.handle = 9999;
	a.type = 4;
	a.frequency = 4E4;
	a.Ls = a.frequency;
	a.name = "";
	a.Pc = null;
	xg(a.df, a)
};

function Oi(a)
{
	this.name = a;
	this.FM = [];
	this.position = 0;
	this.TF = !1
}
Oi.prototype = {};

function Pi(a)
{
	a &= 65535;
	return 0 != (a & 32768) ? a - 65536 : a
}

function af(a)
{
	this.df = a;
	this.D = null;
	this.WG = this.gk = 0;
	this.EB = Array(Qi + Ri);
	this.Tt = this.vl = 0;
	this.so = this.Ij = this.se = this.Td = this.ae = this.Dg = this.rk = null;
	this.Lh = Array(Qi + 1);
	this.UH = !1;
	this.Th = null;
	this.nu = this.pu = this.mu = this.ou = 0;
	this.zu = !1;
	this.qj = null;
	this.ay = 0;
	this.Yx = Array(4);
	this.cr = this.ep = this.cn = !1;
	this.Ux = this.Ll = this.cp = this.Xe = 0;
	this.yu = this.Ol = !1;
	this.xk = null;
	this.uu = this.ti = this.yk = 0;
	this.fp = this.Ml = null;
	this.Si = 0;
	this.Be = !1;
	this.OH = this.TH = this.Ld = this.EC = 0;
	this.Ds = !1;
	this.dn = null;
	this.su = 0;
	this.hp = null;
	this.aA = !1;
	this.lG = 0
}
af.prototype = {
	load: function(a)
	{
		for (var b, c, d = 0;;)
			if (b = Ra(a.file), 69 == b[0] && 82 == b[1] && 62 == b[2] && 62 == b[3])
			{
				this.gk = T(a.file);
				300 > this.gk && (this.gk = 300);
				T(a.file);
				this.WG = T(a.file);
				for (c = 0; c < 7 + Ri; c++) this.EB[c] = T(a.file);
				this.vl = T(a.file);
				if (0 < this.vl)
					for (this.rk = Array(this.vl), c = 0; c < this.vl; c++) this.rk[c] = new Si, this.rk[c].Dx = S(a.file), this.rk[c].Ex = S(a.file)
			}
		else if (69 == b[0] && 82 == b[1] && 101 == b[2] && 115 == b[3]) F(a.file), this.Tt = F(a.file), this.Dg = Array(this.Tt);
		else if (69 == b[0] && 82 == b[1] && 101 == b[2] && 118 ==
			b[3])
			for (F(a.file), b = F(a.file), c = 0; c < b; c++)
			{
				var e = this.Dg,
					f = d,
					g, k = a,
					h = k.file.Ga,
					p = S(k.file),
					l = new Ti;
				l.Gd = k.file.oa();
				l.zh = k.file.oa();
				l.$b = T(k.file);
				V(k.file, 2);
				l.ho = F(k.file);
				l.lq = F(k.file);
				l.yc = Array(l.Gd + l.zh);
				var r = 0;
				for (g = 0; g < l.Gd; g++) l.yc[r++] = X.create(k);
				for (g = 0; g < l.zh; g++)
				{
					var u = l.yc,
						q = r++,
						v, n, w = k,
						D = !1,
						z = !1,
						A = !1,
						I = !1,
						G = !1,
						R = !1,
						O = !1,
						K = !1,
						L = !1,
						M = w.file.Ga,
						N = T(w.file);
					v = F(w.file);
					switch (v)
					{
						case 65535:
							n = new lb;
							break;
						case 131071:
							n = new lb;
							break;
						case 262143:
							n = new mb;
							break;
						case 327679:
							n = new ACT_SUBVARG;
							break;
						case 393215:
							n = new ACT_ADDVARG;
							break;
						case 458751:
							n = new ACT_GRPACTIVATE;
							break;
						case 524287:
							n = new ACT_GRPDEACTIVATE;
							break;
						case 983039:
							n = new ACT_STARTLOOP;
							break;
						case 1048575:
							n = new ACT_STOPLOOP;
							break;
						case 1114111:
							n = new ACT_SETLOOPINDEX;
							break;
						case 1179647:
							n = new ACT_RANDOMIZE;
							break;
						case 1310719:
							n = new ACT_SETGLOBALSTRING;
							break;
						case 1572863:
							n = new lb;
							break;
						case 1638399:
							n = new lb;
							break;
						case 1835007:
							n = new qb;
							D = !0;
							break;
						case 1900543:
							n = new mb;
							break;
						case 1966079:
							n = new qb;
							D = !0;
							break;
						case 2031615:
							n = new mb;
							break;
						case 2097151:
							n = new ACT_ADDVARGCONST;
							z = !0;
							break;
						case 2162687:
							n = new ACT_ADDVARG;
							break;
						case 2228223:
							n = new ACT_ADDVARGCONST;
							z = !0;
							break;
						case 2293759:
							n = new ACT_ADDVARG;
							break;
						case 2359295:
							n = new ACT_SUBVARGCONST;
							A = !0;
							break;
						case 2424831:
							n = new ACT_SUBVARG;
							break;
						case 2490367:
							n = new ACT_SUBVARGCONST;
							A = !0;
							break;
						case 2555903:
							n = new ACT_SUBVARG;
							break;
						case 65534:
							n = new rb;
							break;
						case 131070:
							n = new tb;
							break;
						case 327678:
							n = new ACT_PLAYLOOPSAMPLE;
							break;
						case 458750:
							n = new ACT_STOPSPESAMPLE;
							break;
						case 524286:
							n = new ACT_PAUSESAMPLE;
							break;
						case 589822:
							n = new ACT_RESUMESAMPLE;
							break;
						case 786430:
							n = new ACT_PLAYCHANNEL;
							break;
						case 851966:
							n = new vb;
							break;
						case 917502:
							n = new ACT_PAUSECHANNEL;
							break;
						case 983038:
							n = new ACT_RESUMECHANNEL;
							break;
						case 1048574:
							n = new ACT_STOPCHANNEL;
							break;
						case 1114110:
							n = new ACT_SETCHANNELPOS;
							break;
						case 1179646:
							n = new wb;
							break;
						case 1245182:
							n = new lb;
							break;
						case 1310718:
							n = new ACT_SETSAMPLEPOS;
							break;
						case 1376254:
							n = new ACT_SETSAMPLEMAINVOL;
							break;
						case 1441790:
							n = new ACT_SETSAMPLEVOL;
							break;
						case 1507326:
							n = new lb;
							break;
						case 1572862:
							n =
								new lb;
							break;
						case 1638398:
							n = new ACT_PAUSEALLCHANNELS;
							break;
						case 1703934:
							n = new ACT_RESUMEALLCHANNELS;
							break;
						case 2031614:
							n = new ACT_LOCKCHANNEL;
							break;
						case 2097150:
							n = new ACT_UNLOCKCHANNEL;
							break;
						case 2162686:
							n = new ACT_SETCHANNELFREQ;
							break;
						case 2228222:
							n = new ACT_SETSAMPLEFREQ;
							break;
						case 65533:
							n = new yb;
							break;
						case 131069:
							n = new ACT_PREVLEVEL;
							break;
						case 196605:
							n = new Ab;
							break;
						case 262141:
							n = new ACT_PAUSEKEY;
							break;
						case 327677:
							n = new ACT_ENDGAME;
							break;
						case 393213:
							n = new Cb;
							break;
						case 458749:
							n = new ACT_RESTARTLEVEL;
							break;
						case 524285:
							n = new Eb;
							break;
						case 589821:
							n = new ACT_CDISPLAYX;
							break;
						case 655357:
							n = new ACT_CDISPLAYY;
							break;
						case 983037:
							n = new ACT_FULLSCREENMODE;
							break;
						case 1048573:
							n = new ACT_WINDOWEDMODE;
							break;
						case 1114109:
							n = new ACT_SETFRAMERATE;
							break;
						case 1179645:
							n = new ACT_PAUSEKEY;
							break;
						case 1245181:
							n = new ACT_PAUSEANYKEY;
							break;
						case 1310717:
							n = new ACT_SETVSYNCON;
							break;
						case 1376253:
							n = new ACT_SETVSYNCOFF;
							break;
						case 1441789:
							n = new ACT_SETVIRTUALWIDTH;
							break;
						case 1507325:
							n = new ACT_SETVIRTUALHEIGHT;
							break;
						case 1572861:
							n =
								new ACT_SETFRAMEBDKCOLOR;
							break;
						case 1638397:
							n = new ACT_DELCREATEDBKDAT;
							break;
						case 1703933:
							n = new ACT_DELALLCREATEDBKD;
							break;
						case 1769469:
							n = new ACT_SETFRAMEWIDTH;
							break;
						case 1835005:
							n = new ACT_SETFRAMEHEIGHT;
							break;
						case 2097149:
							n = new ACT_PLAYDEMO;
							break;
						case 2162685:
							n = new lb;
							break;
						case 2228221:
							n = new lb;
							break;
						case 2293757:
							n = new lb;
							break;
						case 2359293:
							n = new lb;
							break;
						case 2424829:
							n = new lb;
							break;
						case 65532:
							n = new ACT_SETTIMER;
							break;
						case 131068:
							n = new ACT_EVENTAFTER;
							break;
						case 196604:
							n = new ACT_NEVENTSAFTER;
							break;
						case 65530:
							n = new ACT_HIDECURSOR;
							break;
						case 131066:
							n = new ACT_SHOWCURSOR;
							break;
						case 65529:
							n = new ACT_SETSCORE;
							break;
						case 131065:
							n = new ACT_SETLIVES;
							break;
						case 196601:
							n = new Hb;
							break;
						case 262137:
							n = new ACT_RESTINPUT;
							break;
						case 327673:
							n = new ACT_ADDSCORE;
							break;
						case 393209:
							n = new ACT_ADDLIVES;
							break;
						case 458745:
							n = new ACT_SUBSCORE;
							break;
						case 524281:
							n = new ACT_SUBLIVES;
							break;
						case 589817:
							n = new ACT_SETINPUT;
							break;
						case 655353:
							n = new Ib;
							break;
						case 720889:
							n = new ACT_SETPLAYERNAME;
							break;
						case 65531:
							n = new Kb;
							break;
						case 131067:
							n =
								new ACT_CREATEBYNAME;
							break;
						case 5242883:
							n = new ACT_STRDESTROY;
							break;
						case 5308419:
							n = new ACT_STRDISPLAY;
							break;
						case 5373955:
							n = new ACT_STRDISPLAYDURING;
							break;
						case 5439491:
							n = new ACT_STRSETCOLOUR;
							break;
						case 5505027:
							n = new ACT_STRSET;
							break;
						case 5570563:
							n = new ACT_STRPREV;
							break;
						case 5636099:
							n = new ACT_STRNEXT;
							break;
						case 5701635:
							n = new ACT_STRDISPLAYSTRING;
							break;
						case 5767171:
							n = new ACT_STRSETSTRING;
							break;
						case 5242882:
							n = new ACT_SPRPASTE;
							break;
						case 5308418:
							n = new ACT_SPRFRONT;
							break;
						case 5373954:
							n = new ACT_SPRBACK;
							break;
						case 5439490:
							n = new ACT_SPRADDBKD;
							break;
						case 5505026:
							n = new ACT_SPRREPLACECOLOR;
							break;
						case 5570562:
							n = new ACT_SPRSETSCALE;
							break;
						case 5636098:
							n = new ACT_SPRSETSCALEX;
							break;
						case 5701634:
							n = new ACT_SPRSETSCALEY;
							break;
						case 5767170:
							n = new ACT_SPRSETANGLE;
							break;
						case 5242887:
							n = new ACT_CSETVALUE;
							break;
						case 5308423:
							n = new ACT_CADDVALUE;
							break;
						case 5373959:
							n = new Ob;
							break;
						case 5439495:
							n = new ACT_CSETMIN;
							break;
						case 5505031:
							n = new ACT_CSETMAX;
							break;
						case 5570567:
							n = new ACT_CSETCOLOR1;
							break;
						case 5636103:
							n = new ACT_CSETCOLOR2;
							break;
						case 5242884:
							n = new ACT_QASK;
							break;
						case 5242889:
							n = new ACT_CCARESTARTAPP;
							break;
						case 5308425:
							n = new ACT_CCARESTARTFRAME;
							break;
						case 5373961:
							n = new ACT_CCANEXTFRAME;
							break;
						case 5439497:
							n = new ACT_CCAPREVIOUSFRAME;
							break;
						case 5505033:
							n = new ACT_CCAENDAPP;
							break;
						case 5636105:
							n = new ACT_CCAJUMPFRAME;
							break;
						case 5701641:
							n = new ACT_CCASETGLOBALVALUE;
							break;
						case 5767177:
							n = new ACT_CCASHOW;
							break;
						case 5832713:
							n = new ACT_CCAHIDE;
							break;
						case 5898249:
							n = new ACT_CCASETGLOBALSTRING;
							break;
						case 5963785:
							n = new ACT_CCAPAUSEAPP;
							break;
						case 6029321:
							n = new ACT_CCARESUMEAPP;
							break;
						case 6094857:
							n = new ACT_CCASETWIDTH;
							break;
						case 6160393:
							n = new ACT_CCASETHEIGHT;
							break;
						default:
							switch (v & 4294901760)
							{
								case 65536:
									n = new Qb;
									break;
								case 131072:
									n = new Ub;
									break;
								case 196608:
									n = new Vb;
									break;
								case 262144:
									n = new Wb;
									break;
								case 327680:
									n = new Xb;
									break;
								case 393216:
									n = new ACT_EXTSPEED;
									break;
								case 458752:
									n = new ACT_EXTMAXSPEED;
									break;
								case 524288:
									n = new ACT_EXTWRAP;
									break;
								case 589824:
									n = new Yb;
									break;
								case 655360:
									n = new ACT_EXTREVERSE;
									break;
								case 720896:
									n = new ACT_EXTNEXTMOVE;
									break;
								case 786432:
									n = new ACT_EXTPREVMOVE;
									break;
								case 851968:
									n = new ACT_EXTSELMOVE;
									break;
								case 917504:
									n = new ACT_EXTLOOKAT;
									break;
								case 983040:
									n = new ACT_EXTSTOPANIM;
									break;
								case 1048576:
									n = new ACT_EXTSTARTANIM;
									break;
								case 1114112:
									n = new Zb;
									break;
								case 1179648:
									n = new ACT_EXTFORCEDIR;
									break;
								case 1245184:
									n = new ACT_EXTFORCESPEED;
									break;
								case 1310720:
									n = new ACT_EXTRESTANIM;
									break;
								case 1376256:
									n = new ACT_EXTRESTDIR;
									break;
								case 1441792:
									n = new ACT_EXTRESTSPEED;
									break;
								case 1507328:
									n = new ACT_EXTSETDIR;
									break;
								case 1572864:
									n = new ac;
									break;
								case 1638400:
									n = new ACT_EXTSHUFFLE;
									break;
								case 1703936:
									n = new ACT_EXTHIDE;
									break;
								case 1769472:
									n = new ACT_EXTSHOW;
									break;
								case 1835008:
									n = new ACT_EXTDISPLAYDURING;
									break;
								case 1900544:
									n = new kc;
									break;
								case 1966080:
									n = new ACT_EXTSHOOTTOWARD;
									break;
								case 2031616:
									n = new qc;
									I = !0;
									break;
								case 2097152:
									n = new ACT_EXTADDVAR;
									G = !0;
									break;
								case 2162688:
									n = new ACT_EXTSUBVAR;
									R = !0;
									break;
								case 2228224:
									n = new ACT_EXTDISPATCHVAR;
									break;
								case 2293760:
									n = new ACT_EXTSETFLAG;
									O = !0;
									break;
								case 2359296:
									n = new ACT_EXTCLRFLAG;
									K = !0;
									break;
								case 2424832:
									n =
										new ACT_EXTCHGFLAG;
									L = !0;
									break;
								case 2490368:
									n = new ACT_EXTINKEFFECT;
									break;
								case 2555904:
									n = new ACT_EXTSETSEMITRANSPARENCY;
									break;
								case 2621440:
									n = new ACT_EXTFORCEFRAME;
									break;
								case 2686976:
									n = new ACT_EXTRESTFRAME;
									break;
								case 2752512:
									n = new ACT_EXTSETACCELERATION;
									break;
								case 2818048:
									n = new ACT_EXTSETDECELERATION;
									break;
								case 2883584:
									n = new ACT_EXTSETROTATINGSPEED;
									break;
								case 2949120:
									n = new ACT_EXTSETDIRECTIONS;
									break;
								case 3014656:
									n = new ACT_EXTBRANCHNODE;
									break;
								case 3080192:
									n = new ACT_EXTSETGRAVITY;
									break;
								case 3145728:
									n =
										new ACT_EXTGOTONODE;
									break;
								case 3211264:
									n = new ACT_EXTSETVARSTRING;
									break;
								case 3276800:
									n = new ACT_EXTSETFONTNAME;
									break;
								case 3342336:
									n = new ACT_EXTSETFONTSIZE;
									break;
								case 3407872:
									n = new ACT_EXTSETBOLD;
									break;
								case 3473408:
									n = new ACT_EXTSETITALIC;
									break;
								case 3538944:
									n = new ACT_EXTSETUNDERLINE;
									break;
								case 3604480:
									n = new lb;
									break;
								case 3670016:
									n = new ACT_EXTSETTEXTCOLOR;
									break;
								case 3735552:
									n = new ACT_EXTSPRFRONT;
									break;
								case 3801088:
									n = new ACT_EXTSPRBACK;
									break;
								case 3866624:
									n = new ACT_EXTMOVEBEFORE;
									break;
								case 3932160:
									n = new ACT_EXTMOVEAFTER;
									break;
								case 3997696:
									n = new ACT_EXTMOVETOLAYER;
									break;
								case 4063232:
									n = new lb;
									break;
								case 4128768:
									n = new ACT_EXTSETEFFECT;
									break;
								case 4194304:
									n = new lb;
									break;
								case 4259840:
									n = new ACT_EXTSETALPHACOEF;
									break;
								case 4325376:
									n = new ACT_EXTSETRGBCOEF;
									break;
								case 4390912:
									n = new lb;
									break;
								case 4456448:
									n = new ACT_EXTSETFRICTION;
									break;
								case 4521984:
									n = new ACT_EXTSETELASTICITY;
									break;
								case 4587520:
									n = new ACT_EXTAPPLYIMPULSE;
									break;
								case 4653056:
									n = new ACT_EXTAPPLYANGULARIMPULSE;
									break;
								case 4718592:
									n = new ACT_EXTAPPLYFORCE;
									break;
								case 4784128:
									n =
										new ACT_EXTAPPLYTORQUE;
									break;
								case 4849664:
									n = new ACT_EXTSETLINEARVELOCITY;
									break;
								case 4915200:
									n = new ACT_EXTSETANGULARVELOCITY;
									break;
								case 4980736:
									n = new ACT_EXTFOREACH;
									break;
								case 5046272:
									n = new ACT_EXTFOREACH2;
									break;
								case 5111808:
									n = new ACT_EXTSTOPFORCE;
									break;
								case 5177344:
									n = new ACT_EXTSTOPTORQUE;
									break;
								default:
									n = new Ui
							}
					}
					if (null != n)
					{
						n.qb = v;
						n.Me = S(w.file);
						n.Rc = S(w.file);
						n.Ib = w.file.oa();
						n.Ri = w.file.oa();
						n.gg = w.file.oa();
						n.Ws = w.file.oa();
						if (0 < n.gg)
							for (n.S = Array(n.gg), v = 0; v < n.gg; v++) n.S[v] = Rc(w);
						if (D || z || A) z =
							n.S[0], n.Km = z.value, z = n.S[1], n.value = z.ab[0].value;
						if (I || G || R) D = null, z = n.S[0], 53 != z.code && (A = z.value, z = n.S[1], 0 <= A && 2 == z.ab.length && (0 >= z.ab[1].code || 1310720 <= z.ab[1].code) && (65535 == z.ab[0].code || 1572863 == z.ab[0].code) && (I ? (D = new sc, D.Km = A, D.value = z.ab[0].value) : G ? (D = new ACT_EXTADDVARCONST, D.Km = A, D.value = z.ab[0].value) : R && (D = new ACT_EXTSUBVARCONST, D.Km = A, D.value = z.ab[0].value)), null != D && (D.qb = n.qb, D.Me = n.Me, D.Rc = n.Rc, D.Ib = n.Ib, D.Ri = n.Ri, D.gg = n.gg, D.Ws = n.Ws, D.S = n.S, n = D));
						if (O || K || L) D = null, I = n.S[0],
							2 == I.ab.length && (0 >= I.ab[1].code || 1310720 <= I.ab[1].code) && 65535 == I.ab[0].code && (O ? (D = new ACT_EXTSETFLAGCONST, D.qa = 1 << I.ab[0].value) : K ? (D = new ACT_EXTCLRFLAGCONST, D.qa = 1 << I.ab[0].value) : L && (D = new ACT_EXTCHGFLAGCONST, D.qa = 1 << I.ab[0].value)), null != D && (D.qb = n.qb, D.Me = n.Me, D.Rc = n.Rc, D.Ib = n.Ib, D.Ri = n.Ri, D.gg = n.gg, D.Ws = n.Ws, D.S = n.S, n = D)
					}
					w.file.seek(M + N);
					u[q] = n
				}
				k.file.seek(h - p);
				e[f] = l;
				d++
			}
		else if (60 == b[0] && 60 == b[1] && 69 == b[2] && 82 == b[3]) break;
		this.lG = Math.max(this.lG, d)
	}
};

function Vi(a, b, c, d)
{
	for (d = Wi(a, d); - 1 != d; d = Xi(a))
	{
		d = a.D.ua[d].lf;
		var e;
		for (e = 0; e < b && (a.Th[e] != c || a.Th[e + 1] != d); e += 2);
		e == b && (a.Th[b++] = c, a.Th[b++] = d)
	}
	return b
}

function Yi(a, b, c, d)
{
	var e, f, g, k, h;
	for (h = 0; h < b.Gd; h++)
		if (k = b.yc[h], 2 <= Pi(k.qb)) switch (f = 32784, g = k.qb & 4294901760, g)
		{
			case -917504:
				g = k.S[0];
				for (e = Wi(a, k.Rc); - 1 != e; e = Xi(a)) e = a.D.ua[e].lf, d == e && (f = 0, c = Vi(a, c, d, g.Zd));
				if (0 == f) break;
				for (e = Wi(a, g.Zd); - 1 != e; e = Xi(a)) e = a.D.ua[e].lf, d == e && (c = Vi(a, c, d, k.Rc));
				break;
			case -786432:
				g = k.S[0], f = 32768 + g.value;
			case -851968:
				for (e = Wi(a, k.Rc); - 1 != e; e = Xi(a)) e = a.D.ua[e].lf, d == e && (a.Th[c++] = d, a.Th[c++] = f)
		}
	return c
}

function Zi(a, b, c, d, e)
{
	var f, g;
	if (0 > c)
	{
		if (null != a.ae)
			for (f = a.ae[b & 32767], g = 0; g < f.Qb.length;) Zi(a, f.Qb[g + 1], f.Qb[g], d, e), g += 2
	}
	else if (0 > e)
	{
		if (null != a.ae)
			for (f = a.ae[d & 32767], g = 0; g < f.Qb.length;) Zi(a, b, c, f.Qb[g + 1], f.Qb[g]), g += 2
	}
	else
	{
		a = a.D.ua[b];
		if (null == a.Rm) a.Rm = [], a = a.Rm;
		else
			for (a = a.Rm, b = 0; b < a.length; b += 2)
				if (e == a[b]) return;
		a.push(e);
		a.push(d)
	}
}

function $i(a)
{
	var b;
	if (-1 == a.pu || a.nu >= a.ae[a.pu].Qb.length) return -1;
	b = a.ae[a.pu].Qb[a.nu + 1];
	a.nu += 2;
	return b
}

function Xi(a)
{
	var b;
	if (-1 == a.ou || a.mu >= a.ae[a.ou].Qb.length) return -1;
	b = a.ae[a.ou].Qb[a.mu + 1];
	a.mu += 2;
	return b
}

function Wi(a, b)
{
	if (0 == (b & 32768)) return a.ou = -1, b;
	if (-1 == b) return -1;
	a.ou = b & 32767;
	a.mu = 0;
	return Xi(a)
}

function aj(a, b)
{
	var c;
	for (c = 0; c < a.D.nh; c++)
		if (-1 != a.D.ua[c].lf && a.D.ua[c].pg == b)
			if (0 != (a.D.ua[c].qx & ic) && 0 == (a.D.ua[c].qx & bj)) break;
			else return !1;
	return !0
}

function cj(a, b, c)
{
	if (0 != (b & dj))
	{
		var d;
		for (d = 0; b != a.rk[d].Dx || c != a.rk[d].Ex;) d++;
		return d | 32768
	}
	for (c = 0; c < a.D.nh && a.D.ua[c].lf != b;) c++;
	return c
}

function Pe(a)
{
	a.Ds = !1;
	a.ae = null;
	a.so = null;
	a.Td = null;
	a.se = null;
	a.Ij = null
}

function jg(a, b)
{
	var c, d, e, f, g, k, h, p, l, r, u, q, v, n;
	a.D = b;
	for (h = k = n = a.cp = 0; h < a.D.nh; h++) - 1 != a.D.ua[h].lf && (a.D.ua[h].SB = -1, a.D.ua[h].og = 0, a.D.ua[h].Sq = -1, k++, a.D.ua[h].lf + 1 > n && (n = a.D.ua[h].lf + 1));
	a.ae = null;
	var w;
	if (0 < a.vl)
	{
		d = Array(a.vl);
		for (c = 0; c < a.vl; c++)
			for (g = a.rk[c].Dx & 32767, w = d[c] = 0; w < a.D.nh; w++)
				if (a.D.ua[w].pg == a.rk[c].Ex)
					for (h = 0; 8 > h && -1 != a.D.ua[w].Tq[h]; h++) g == a.D.ua[w].Tq[h] && d[c]++;
		a.ae = Array(a.vl);
		for (c = 0; c < a.vl; c++)
		{
			a.ae[c] = new ej;
			0 != d[c] && (a.ae[c].Qb = Array(2 * d[c]));
			k = 0;
			g = a.rk[c].Dx & 32767;
			for (w = 0; w < a.D.nh; w++)
				if (a.D.ua[w].pg == a.rk[c].Ex)
					for (h = 0; 8 > h && -1 != a.D.ua[w].Tq[h]; h++) g == a.D.ua[w].Tq[h] && (a.ae[c].Qb[2 * k] = a.D.ua[w].lf, a.ae[c].Qb[2 * k + 1] = w, k++);
			a.ae[c].iC = -1
		}
	}
	a.Th = Array(200 * n + 1);
	k = 0;
	var D = [];
	for (w = 0; w < a.Dg.length; w++)
	{
		c = a.Dg[w];
		for (v = 0; v < c.zh + c.Gd; v++)
		{
			d = c.yc[v];
			d.Ib &= ~fj;
			0 <= Pi(d.qb) && (d.Rc = cj(a, d.Me, Pi(d.qb)));
			if (983039 == d.qb) h = d.S[0], 262143 == h.ab[0].code && 0 == h.ab[1].code && (l = {}, l.pK = d.S[0], l.name = h.ab[0].pd, D.push(l), Yh(a.D, h.ab[0].pd));
			else if (d.qb == jb.UN || d.qb == jb.TN) h = d.S[0],
				262143 == h.ab[0].code && 0 == h.ab[1].code && (h.ab[0] = new md, h.ab[0].code = $c, h.ab[0].value = Yh(a.D, h.ab[0].pd));
			if (0 < d.gg)
				for (l = 0; l < d.gg; l++) switch (e = d.S[l], e.code)
				{
					case 25:
						e.value = 0;
						break;
					case 21:
						if (0 == (d.Me & dj))
							for (h = Zh(a.D.N.Gf); null != h; h = $h(a.D.N.Gf))
							{
								if (d.Me == h.bi)
								{
									e.Hs = h.zm;
									break
								}
							}
						else e.Hs = -1;
						g = e.hu; - 1 != g && (e.iu = cj(a, g, e.yx));
						break;
					case 9:
					case 18:
					case 16:
						g = e.hu; - 1 != g && (e.iu = cj(a, g, e.yx));
						break;
					case 1:
						e.Zd = cj(a, e.Bl, e.type);
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
						for (r =
							e, h = 0; h < r.ab.length; h++) 0 < Pi(r.ab[h].code) && (p = r.ab[h], p.Zd = cj(a, p.Bl, Pi(p.code)))
				}
		}
		l = 0;
		r = gj | hj | hd;
		for (v = 0; v < c.Gd + c.zh; v++)
		{
			d = c.yc[v];
			f = Pi(d.qb);
			q = d.qb;
			p = u = h = 0;
			e = null;
			if (f >= Nb) switch (q & 4294901760)
			{
				case 262144:
				case 589824:
					l |= hd;
					g = d.Me;
					if (0 != (g & dj))
						for (g = a, f = d.Rc, 0 == (f & 32768) ? g.pu = -1 : -1 == f ? f = -1 : (g.pu = f & 32767, g.nu = 0, f = $i(g)); - 1 != f; f = $i(a)) k = Yi(a, c, k, a.D.ua[f].lf);
					else k = Yi(a, c, k, g);
					break;
				case 1638400:
					l |= ij;
					break;
				case -917504:
					e = d.S[0];
					h = d.S[0];
					Zi(a, d.Rc, d.Me, h.Zd, h.Bl);
					Zi(a, h.Zd, h.Bl, d.Rc, d.Me);
					p = Pi(d.qb);
					p = aj(a, p) ? Ph | oh : Ph | 4096 | oh;
					h = h.type;
					u = aj(a, h) ? Ph | oh : Ph | 4096 | oh;
					h = 3;
					break;
				case -262144:
					p = Pi(d.qb);
					p = aj(a, p) ? Ph : Ph | 4096;
					e = d.S[0];
					h = d.S[0].type;
					u = aj(a, h) ? Ph : Ph | 4096;
					h = 3;
					break;
				case -720896:
				case -786432:
					u = ih;
					h = 1;
					break;
				case -851968:
					u = nh, h = 1
			}
			else switch (q)
			{
				case -327681:
					r &= ~gj;
					break;
				case -393217:
					r |= jj;
					break;
				case -262145:
					r |= jj;
					break;
				case -196609:
					r |= kj + lj;
					break;
				case -196614:
					p = Ph;
					e = d.S[0];
					h = 2;
					break;
				case -393222:
					p = Ph, e = d.S[1], h = 2
			}
			if (0 != (h & 1))
				for (f = Wi(a, d.Rc); - 1 != f; f = Xi(a)) a.D.ua[f].og |= u;
			if (0 != (h & 2))
				for (f = Wi(a,
						e.Zd); - 1 != f; f = Xi(a)) a.D.ua[f].og |= p
		}
		c.$b &= ~r;
		c.$b |= l
	}
	a.Th[k] = -1;
	l = Array(Qi + n + 1);
	c = v = 0;
	for (f = -Qi; 0 > f; f++, c++) l[c] = v, v += a.EB[Qi + f];
	for (w = 0; w < a.D.nh; w++, c++) l[c] = v, v = a.D.ua[w].pg < ci ? v + (a.EB[Qi + a.D.ua[w].pg] + 80 + 1) : v + (a.df.lw.pw(a.D.ua[w].pg) + 80 + 1);
	u = v;
	a.Td = Array(u);
	for (h = 0; h < u; h++) a.Td[h] = 0;
	r = 0;
	p = Array(a.D.N.gk);
	for (w = 0; w < a.Tt; w++)
		for (c = a.Dg[w], c.$b &= ~mj, e = !0, v = g = 0; v < c.Gd; v++)
		{
			d = c.yc[v];
			f = Pi(d.qb);
			q = d.qb;
			h = -(q >> 16);
			if (e)
				if (0 != (d.Ib & nj) && r++, 0 > f) a.Td[l[7 + f] + h]++;
				else
				{
					e = 0;
					for (f = Wi(a, d.Rc); - 1 != f; f = Xi(a)) a.Td[l[Qi +
						f] + h]++, p[e++] = f;
					p[e] = -1;
					if (-917504 == (q & 4294901760))
						for (e = d.S[0], f = Wi(a, e.Zd); - 1 != f; f = Xi(a))
						{
							for (e = 0; p[e] != f && -1 != p[e];) e++; - 1 == p[e] && a.Td[l[Qi + f] + h]++
						}
				} e = !1;
			if (-1507329 == d.qb || -1572865 == d.qb) e = !0, c.$b |= mj, 0 == g ? g = d.qb : d.qb = g, -1572865 == g && (c.$b |= oj)
		}
	d = r + 1;
	for (c = 0; c < u; c++) 0 != a.Td[c] && (v = a.Td[c], a.Td[c] = d, d += v + 1);
	a.se = Array(d);
	a.Ij = Array(d);
	for (h = 0; h < d; h++) a.se[h] = null, a.Ij[h] = 0;
	g = Array(u);
	for (h = 0; h < u; h++) g[h] = a.Td[h];
	a.D.gn = null;
	r = u = 0;
	var z;
	for (w = 0; w < a.Tt; w++)
		for (c = a.Dg[w], e = !0, v = 0; v < c.Gd; v++)
		{
			d = c.yc[v];
			f = Pi(d.qb);
			q = d.qb;
			h = -(q >> 16);
			if (e)
				if (0 != (d.Ib & nj) && (r++, a.se[u] = c, a.Ij[u] = v, u++), 0 > f)
				{
					if (z = l[Qi + f] + h, a.se[g[z]] = c, a.Ij[g[z]] = v, g[z]++, d.qb == X.HI)
					{
						e = !1;
						for (h = 0; h < c.Gd && c.yc[h].qb != X.II && c.yc[h].qb != X.JI; h++);
						h < c.Gd && (e = !0);
						h = d.S[0];
						if (262143 == h.ab[0].code && 0 == h.ab[1].code)
							for (z = h.ab[0].pd, Yh(a.D, z), h = 0; h < D.length; h++)
								if (f = D[h], E(f.name, z))
								{
									a.D.gn || (a.D.gn = []);
									q = null;
									for (h = 0; h < a.D.gn.length; h++)
										if (E(z, a.D.gn[h].name))
										{
											q = a.D.gn[h];
											break
										} q || (q = new Oi(z), a.D.gn.push(q));
									z = c;
									q.FM[q.position++] = z;
									q.TF |=
										e;
									f.pK.jP = h + 1;
									break
								}
					}
				}
			else
			{
				e = 0;
				for (f = Wi(a, d.Rc); - 1 != f; f = Xi(a)) z = l[Qi + f] + h, a.se[g[z]] = c, a.Ij[g[z]] = v, g[z]++, p[e++] = f;
				p[e] = -1;
				if (-917504 == (q & 4294901760))
					for (e = d.S[0], f = Wi(a, e.Zd); - 1 != f; f = Xi(a))
					{
						for (e = 0; p[e] != f && -1 != p[e];) e++; - 1 == p[e] && (z = l[Qi + f] + h, a.se[g[z]] = c, a.Ij[g[z]] = v, g[z]++)
					}
			}
			e = !1;
			if (-1507329 == d.qb || -1572865 == d.qb) e = !0
		}
	a.so = Array(n + 1 + k / 2);
	for (w = D = 0; w < a.D.nh; w++)
		if (n = a.D.ua[w], c = l[Qi + w], n.VB = c, 0 != (n.qx & Lg))
		{
			k = 0;
			v = a.Td[c - -12];
			if (0 != v)
				for (; null != a.se[v];)
				{
					c = a.se[v];
					d = c.yc[a.Ij[v]];
					p = d.S[0].value;
					e = c.Gd + 0;
					for (h = c.zh; 0 < h; h--, e++) d = c.yc[e], d.qb == (524288 | n.pg & 65535) && (k |= p);
					v++
				}
			n.WB = k;
			c = n.lf;
			for (h = k = 0; - 1 != a.Th[k]; k += 2)
				if (a.Th[k] == c)
					if (d = a.Th[k + 1], 0 != (d & 32768)) n.og |= d;
					else
					{
						for (v = 0; v < h && a.so[D + v] != d;) v++;
						v == h && (a.so[D + h++] = d)
					} 0 < h && (n.Sq = D, a.so[D + h++] = -1, D += h)
		} a.Lh[0] = 0;
	for (h = 1; h <= Qi; h++) a.Lh[h] = l[Qi - h];
	for (w = 0; w < a.D.nh; w++)
		if (n = a.D.ua[w], f = n.Nc, 0 == (f & 2147483648))
		{
			do k = a.D.W[f], k.IA = n.VB, k.ke = n, k.Vh = n.og, 0 != (k.Ya & Lg) && (k.J.JC = n.WB), 0 != (k.Ya & ic) && 0 == (k.Vh & Ph) && Vg(k.ea, !1), 0 == (k.Ya & Nh) && (k.Ya &= ~Oh,
				0 != (k.Vh & nh) && 0 != (a.D.N.vd & 32) && (k.Ya |= Oh), 0 != (k.Vh & (Ph | ih)) && (k.Ya |= Oh)), f = k.Rd; while (0 == (f & 2147483648))
		} a.UH = 0 != r ? !0 : !1;
	a.Th = null;
	a.Ds = !0
}

function ig(a)
{
	var b, c, d, e, f, g, k = new W,
		h;
	for (e = 0; e < a.Dg.length;) b = a.Dg[e], b.$b &= pj, c = b.yc[0], -589825 == c.qb && (b = c.S[0], h = new qj, h.id = b.tL, h.mF = e, k.add(h), b.Lj &= ~(rj | sj), 0 != (b.Lj & tj) && (b.Lj |= sj)), e++;
	for (e = 0; e < a.Dg.length;)
	{
		b = a.Dg[e];
		b.$b &= pj;
		c = b.yc[0];
		if (-589825 == c.qb && (b = c.S[0], b.Lj &= ~rj, 0 != (b.Lj & sj)))
		{
			e = uj(a, e);
			continue
		}
		e++
	}
	for (e = 0; e < a.Dg.length; e++) switch (b = a.Dg[e], c = b.yc[0], c.qb)
	{
		case -589825:
		case -655361:
			break;
		default:
			for (b.ho = 0, f = b.lq = 0; f < b.Gd + b.zh; f++)
				if (c = b.yc[f], c.Ib = 0 > c.qb ? c.Ib & vj : c.Ib & ~(1 |
						xh), 0 != c.gg)
					for (g = 0; g < c.gg; g++) switch (d = c.S[g], d.code)
					{
						case 25:
							d.zI = 0;
							break;
						case 13:
							d.SK = d.gq;
							break;
						case 39:
							var p;
							for (p = 0; p < k.size(); p++)
								if (h = k.get(p), h.id == d.id)
								{
									d.Ga = h.mF;
									break
								}
					}
	}
}

function uj(a, b)
{
	var c, d;
	d = a.Dg[b];
	d.$b &= pj;
	d.$b |= wj;
	b++;
	for (c = !1;;)
	{
		d = a.Dg[b];
		d.$b &= pj;
		d.$b |= wj;
		d = d.yc[0];
		switch (d.qb)
		{
			case -589825:
				d = d.S[0];
				d.Lj |= rj;
				b = uj(a, b);
				continue;
			case -655361:
				c = !0, b++
		}
		if (c) break;
		b++
	}
	return b
}

function de(a)
{
	0 != a.Ds && 0 == a.D.pj && (a.D.pr = 0)
}

function ge(a, b, c)
{
	ph(a.D);
	if (null != a.D && 0 == a.D.pj && 0 != a.Ds && (2 == c && (b += 256), a.D.pr = 0, 0 == a.D.mp))
	{
		a.Ld = b;
		a.OH = b;
		ie(a, -262150);
		ie(a, -327686);
		c = 0;
		var d, e, f, g, k, h = new W;
		for (b = 0; b < a.D.Tb; b++)
		{
			for (; null == a.D.W[c];) c++;
			d = a.D.W[c];
			c++;
			e = d.A - d.Wa;
			f = d.w - d.Xa;
			g = e + d.da;
			k = f + d.ca;
			if (a.D.wu >= e && a.D.wu < g && a.D.xu >= f && a.D.xu < k && 0 != (d.Vh & Ph) && 0 == (d.Aa & fc))
				if (d.rb == Nb)
					if (0 == (d.ea.Ja & ah))
					{
						e = bh(Y(a.df.Ba, d.b.Jb), ch, 0, 1, 1);
						var p = d.b.ac;
						f = d.b.bc;
						g = d.b.cc;
						k = Math.floor(a.D.wu - d.A);
						var l = Math.floor(a.D.xu - d.w),
							r = k,
							u = l;
						if (0 ==
							p)
						{
							if (1 != f || 1 != g) r = Math.floor(r / f), u = Math.floor(u / g)
						}
						else if (r = 3.141592653589 * p / 180, p = Math.cos(r), u = Math.sin(r), r = k * p - l * u, u = l * p + k * u, 1 != f || 1 != g) r /= f, u /= g;
						r += e.Hb;
						u += e.Cb;
						k = Math.floor(r);
						l = Math.floor(u);
						e = 0 > k || k >= e.width || 0 > l || l >= e.height ? !1 : 0 != (e.qa[l * e.lineWidth + Math.floor(k / 16)] & 32768 >>> (k & 15)) ? !0 : !1;
						e && h.add(d)
					}
			else h.add(d);
			else h.add(d)
		}
		for (c = 0; c < h.size(); c++) d = h.get(c), a.TH = d.jc, ie(a, -393222)
	}
}

function xj(a, b)
{
	if (0 != (b.$b & hj))
	{
		0 != (b.$b & ij) && (a.dn = new W);
		if (0 != (b.$b & kj))
		{
			var c = a.D.de,
				d = b.ho;
			b.ho = c;
			if (c == d || c - 1 == d) return
		}
		if (0 != (b.$b & lj))
			if (0 != b.lq) b.lq--;
			else return;
		if (0 != (b.$b & jj))
		{
			c = a.D.hn / 10;
			d = b.lq;
			if (0 != d && c < d) return;
			b.lq = c + b.ho
		}
	}
	a.cp++;
	a.cn = !1;
	a.Ll = 0;
	a.ep = !0;
	c = 0;
	do d = b.yc[c + b.Gd], 0 == (d.Ib & (fj | yh)) && (d.Ib &= -2, d.Ic(a.D)), c++; while (c < b.zh);
	if (a.cn)
	{
		do
			for (a.cn = !1, a.Ll++, c = 0; c < b.zh; c++) d = b.yc[c + b.Gd], 0 != (d.Ib & 1) && (d.Ib &= -2, d.Ic(a.D)); while (a.cn)
	}
	a.ep = !1;
	if (null != a.dn && !(1 >= a.dn.size()))
	{
		c =
			a.D.random(a.dn.size());
		do d = a.D.random(a.dn.size()); while (c == d);
		var c = a.dn.get(c),
			d = a.dn.get(d),
			e = c.A,
			f = c.w,
			g = d.w;
		Rb(c, d.A);
		Sb(c, g);
		Rb(d, e);
		Sb(d, f);
		a.dn = null
	}
	if (a.aA)
	{
		a.aA = !1;
		c = a.D.Sx;
		for (d = a.D.Tx;;)
		{
			f = e = null;
			for (g = a.D.RH; null != g;)
			{
				if (0 > g.index)
				{
					(e = g.next) && (E(g.name, e.name) || (e = null));
					break
				}
				f = g;
				g = g.next
			}
			if (null == g) break;
			g.stop = !1;
			for (g.index = 0; g.index < g.xl; g.index++)
			{
				a.D.Sx = g;
				if (a.D.Tx = e) e.index = g.index;
				a.ep = 0;
				kh(a, g.ye[g.index], -2686976);
				if (g.stop) break
			}
			if (e)
				for (e.index = 0; e.index < e.xl; e.index++)
				{
					a.D.Sx =
						e;
					if (a.D.Tx = g) g.index = e.index;
					a.ep = 0;
					kh(a, e.ye[e.index], -2686976);
					if (e.stop) break
				}
			e && (g.next = e.next);
			null == f ? a.D.RH = g.next : f.next = g.next
		}
		a.D.Sx = c;
		a.D.Tx = d
	}
}

function uh(a, b, c)
{
	var d, e, f;
	a.yu = !1;
	do
		if (e = a.se[b], 0 == (e.$b & wj))
			if (a.qj = e, a.Yx[0] = 0, a.Yx[1] = 0, a.Yx[2] = 0, a.Yx[3] = 0, 0 == (e.$b & mj))
			{
				a.Xe += 1;
				a.Ol = !1;
				f = 0;
				if (e.yc[f].gd(a.D, c))
					for (f++; f < e.Gd && 0 != e.yc[f].pb(a.D); f++);
				if (f == e.Gd)
					if (a.yu)
					{
						if (null != c)
						{
							var g;
							d = a;
							f = c;
							e = f.jc;
							d.Xe += 1;
							Mb(d, f);
							d.cp++;
							d.cn = !1;
							d.Ll = 0;
							d.ep = !0;
							var k = 0;
							do {
								f = d.qj.yc[d.qj.Gd + k];
								g = f.qb & 4294901760;
								if (262144 == g || 589824 == g)
									if (e == f.Me) f.Ic(d.D);
									else if (g = f.Rc, 0 != (g & 32768))
								{
									var h = d.ae[g & 32767];
									for (g = 0; g < h.Qb.length;)
									{
										if (h.Qb[g] == e)
										{
											f.Ic(d.D);
											break
										}
										g += 2
									}
								}
								k++
							} while (k < d.qj.zh);
							d.ep = !1
						}
					}
				else xj(a, e);
				b++
			}
	else
	{
		a.Ux++;
		if (0 == (e.$b & oj))
		{
			d = !1;
			do {
				a.Xe++;
				a.Ol = !1;
				f = a.Ij[b];
				0 == e.yc[f].gd(a.D, c) && (a.Ol = !0);
				for (f++; f < e.Gd && -1507329 != e.yc[f].qb;) 0 == e.yc[f].pb(a.D) && (a.Ol = !0), f++;
				yj(a);
				0 == a.Ol && (d = !0);
				b++;
				e = a.se[b];
				if (null == e) break
			} while (e == a.qj)
		}
		else
		{
			d = a.Ol = !1;
			do {
				a.Xe++;
				k = !1;
				f = a.Ij[b];
				if (e.yc[f].gd(a.D, c))
					for (f++; f < e.Gd && -1572865 != e.yc[f].qb;)
					{
						if (0 == e.yc[f].pb(a.D))
						{
							k = !0;
							break
						}
						f++
					}
				else k = !0;
				0 == k && (yj(a), d = !0);
				b++;
				e = a.se[b];
				if (null == e) break
			} while (e == a.qj)
		}
		if (d)
		{
			a.Xe++;
			h = a;
			for (d = 0; d < h.D.nh; d++)
				if (e = h.D.ua[d], e.UB == h.Ux)
					for (e.jh = h.Xe, g = e.Nc, f = null; 0 == (g & 2147483648);) k = h.D.W[g], 0 != k.LA && (null != f ? f.Ne = g : e.Yc = g, k.Ne = -1, f = k), g = k.Rd;
			xj(a, a.qj)
		}
	}
	else if (b++, null != a.se[b])
		for (d = a.se[b]; d == e;)
		{
			b++;
			if (null == a.se[b]) break;
			d = a.se[b]
		}
	while (null != a.se[b])
}

function kh(a, b, c)
{
	a.ay = c;
	c = a.Td[b.IA + -(c >> 16)];
	return 0 != c ? (uh(a, c, b), !0) : !1
}

function ie(a, b)
{
	var c = b & 65535;
	0 != (c & 32768) && (c = 65536 - c);
	c = a.Td[a.Lh[c] + -(b >> 16)];
	0 != c && uh(a, c, null)
}

function zj(a, b)
{
	for (var c = b.Yo, d; c < b.Qb.length;)
	{
		d = b.Qb[c + 1];
		d = a.D.ua[d];
		if (0 == (d.Nc & 2147483648)) return b.Yo = c + 2, d.Nc;
		c += 2
	}
	return -1
}

function Aj(a, b)
{
	b.Yo = 0;
	b.kC = !1;
	return Bj(a, b)
}

function Bj(a, b)
{
	for (var c = b.Yo, d; c < b.Qb.length;)
	{
		d = b.Qb[c + 1];
		d = a.D.ua[d];
		if (d.jh == a.Xe && (b.kC = !0, 0 == (d.Yc & 2147483648))) return b.Yo = c + 2, d.Yc;
		c += 2
	}
	return -1
}

function Cj(a, b)
{
	var c, d, e = a.ae[b & 32767];
	if (e.iC != a.cp)
	{
		e.iC = a.cp;
		e.jC = a.Ll;
		d = Aj(a, e);
		if (0 <= d)
		{
			e.qk = d;
			c = a.D.W[d];
			if (null == c) return e.Vm = 0, e.qk = -1, null;
			d = c.Ne;
			if (0 != (d & 2147483648) && (d = Bj(a, e), 0 > d)) return e.Vm = 1, e.nj = !1, a.Be = !1, c;
			e.Wm = d;
			e.Vm = 2;
			e.nj = !0;
			a.Be = !0;
			return c
		}
		if (a.cr && e.kC) return e.Vm = 0, e.qk = -1, null;
		e.Yo = 0;
		d = zj(a, e);
		if (0 <= d && (e.qk = d, c = a.D.W[d], null != c))
		{
			d = c.Rd;
			if (0 != (d & 2147483648) && (d = zj(a, e), 0 != (d & 2147483648))) return e.Vm = 1, e.nj = !1, a.Be = !1, c;
			e.Wm = d;
			e.Vm = 3;
			e.nj = !0;
			a.Be = !0;
			return c
		}
		e.Vm = 0;
		e.qk = -1;
		return null
	}
	if (e.jC != a.Ll) switch (e.jC = a.Ll, e.Vm)
	{
		case 0:
			return a.Be = e.nj, null;
		case 1:
			return c = a.D.W[e.qk], a.Be = e.nj, c;
		case 2:
			return e.qk = e.Wm, c = a.D.W[e.Wm], null != c && (d = c.Ne, 0 != (d & 2147483648) && (d = Bj(a, e), 0 > d && (e.nj = !1, d = Aj(a, e))), e.Wm = d), a.Be = e.nj, c;
		case 3:
			return e.qk = e.Wm, c = a.D.W[e.Wm], null != c && (d = c.Rd, 0 != (d & 2147483648) && (d = zj(a, e), 0 != (d & 2147483648) && (e.nj = !1, e.Yo = 0, d = zj(a, e))), e.Wm = d), a.Be = e.nj, c
	}
	if (0 > e.qk) return null;
	c = a.D.W[e.qk];
	a.Be = e.nj;
	return c
}

function Dj(a, b)
{
	var c, d = a.D.ua[b];
	if (d.SB != a.cp)
	{
		d.SB = a.cp;
		d.TB = a.Ll;
		if (d.jh == a.Xe && 0 == (d.Yc & 2147483648))
		{
			d.lk = d.Yc;
			c = a.D.W[d.Yc];
			d.Tm = c.Ne;
			if (0 != (c.Ne & 2147483648)) return d.kj = !1, d.Sm = 1, a.Be = !1, c;
			d.kj = !0;
			d.Sm = 2;
			a.Be = !0;
			return c
		}
		if (a.cr && d.jh == a.Xe) return d.Sm = 0, d.lk = -1, null;
		if (0 == (d.Nc & 2147483648))
		{
			d.lk = d.Nc;
			c = a.D.W[d.Nc];
			if (null == c) return d.Sm = 0, d.lk = -1, null;
			if (0 == (c.Rd & 2147483648)) return d.Tm = c.Rd, d.kj = !0, d.Sm = 3, a.Be = !0, c;
			d.kj = !1;
			d.Sm = 1;
			a.Be = !1;
			return c
		}
		d.Sm = 0;
		d.lk = -1;
		return null
	}
	if (d.TB != a.Ll)
	{
		var e;
		d.TB = a.Ll;
		switch (d.Sm)
		{
			case 0:
				return a.Be = d.kj, null;
			case 1:
				return c = a.D.W[d.lk], a.Be = d.kj, c;
			case 2:
				d.lk = d.Tm;
				c = a.D.W[d.Tm];
				if (null == c) return null;
				e = c.Ne;
				0 != (e & 2147483648) && (d.kj = !1, e = d.Yc);
				d.Tm = e;
				a.Be = d.kj;
				return c;
			case 3:
				d.lk = d.Tm;
				c = a.D.W[d.Tm];
				if (null == c) return null;
				e = c.Rd;
				0 != (e & 2147483648) && (d.kj = !1, e = d.Nc);
				d.Tm = e;
				a.Be = d.kj;
				return c
		}
	}
	if (0 > d.lk) return null;
	c = a.D.W[d.lk];
	a.Be = d.kj;
	return c
}

function Ej(a, b)
{
	return 0 == (b & 32768) ? Dj(a, b) : Cj(a, b)
}

function Pb(a, b)
{
	b.Ib &= ~xh;
	a.cr = !0;
	var c = Ej(a, b.Rc);
	if (null != c) return 0 != a.Be && (b.Ib |= 1, a.cn = !0), c;
	b.Ib |= xh;
	return c
}

function pd(a, b)
{
	var c;
	if (a.ep) return a.cr = !1, c = Ej(a, b);
	if (0 == (b & 32768)) return c = a.D.ua[b], c.jh == a.Xe && 0 == (c.Yc & 2147483648) ? a.D.W[c.Yc] : 0 == (c.Nc & 2147483648) ? a.D.W[c.Nc] : null;
	var d = a.ae[b & 32767],
		e = 0;
	if (e >= d.Qb.length) return null;
	do {
		c = a.D.ua[d.Qb[e + 1]];
		if (c.jh == a.Xe && 0 == (c.Yc & 2147483648)) return a.D.W[c.Yc];
		e += 2
	} while (e < d.Qb.length);
	e = 0;
	do {
		c = a.D.ua[d.Qb[e + 1]];
		if (0 == (c.Nc & 2147483648)) return a.D.W[c.Nc];
		e += 2
	} while (e < d.Qb.length);
	return null
}

function yj(a)
{
	var b, c, d;
	for (c = 0; c < a.D.nh; c++)
		if (d = a.D.ua[c], d.jh == a.Xe)
		{
			if (d.UB != a.Ux)
				for (d.UB = a.Ux, b = d.Nc; 0 == (b & 2147483648);) b = a.D.W[b], b.LA = 0, b = b.Rd;
			for (b = d.Yc; 0 == (b & 2147483648);) b = a.D.W[b], b.LA = 1, b = b.Ne
		}
}

function Mb(a, b)
{
	var c = b.ke;
	if (c.jh != a.Xe) c.jh = a.Xe, c.Yc = b.zc, c.kh = 1, b.Ne = -1;
	else
	{
		var d = c.Yc;
		if (0 != (d & 2147483648)) c.Yc = b.zc, c.kh += 1, b.Ne = -1;
		else
		{
			do {
				if (b.zc == d) return;
				c = a.D.W[d];
				d = c.Ne
			} while (0 == (d & 2147483648));
			c.Ne = b.zc;
			b.Ne = -1;
			b.ke.kh += 1
		}
	}
}

function Wc(a)
{
	--a.ti.ke.kh;
	null != a.Ml ? (a.Ml.Ne = a.ti.Ne, a.ti = a.Ml) : (a.fp.Yc = a.ti.Ne, a.ti = null)
}

function Xc(a)
{
	var b = a.ti,
		c;
	if (null == b && (c = a.D.ua[a.uu], 0 == (c.Yc & 2147483648))) return b = a.D.W[c.Yc], a.Ml = null, a.fp = c, a.ti = b;
	if (null != b && 0 == (b.Ne & 2147483648)) return a.Ml = b, a.fp = null, b = a.D.W[b.Ne], a.ti = b;
	if (null == a.xk) return null;
	do {
		a.yk += 2;
		if (a.yk >= a.xk.Qb.length) return null;
		c = a.D.ua[a.xk.Qb[a.yk + 1]]
	} while (0 != (c.Yc & 2147483648));
	a.Ml = null;
	a.fp = c;
	b = a.D.W[c.Yc];
	a.ti = b;
	a.uu = a.xk.Qb[a.yk + 1];
	return b
}

function Uc(a, b)
{
	var c;
	a.Si = 0;
	a.xk = null;
	a.yk = -1;
	if (0 != (b & 32768))
	{
		if (32767 == (b & 32767)) c = null;
		else
		{
			for (var d, e, f = c = 0, g = a.ae[b & 32767]; f < g.Qb.length;)
			{
				e = g.Qb[f + 1];
				e = a.D.ua[e];
				if (e.jh == a.Xe) d = 0, 0 == (e.Yc & 2147483648) && (d = e.kh, null == a.xk && (a.xk = g, a.yk = f));
				else if (d = 0, e.jh = a.Xe, a.Ol) e.Yc = -1, e.kh = 0;
				else if (e.Yc = e.Nc, 0 != (e.Nc & 2147483648)) e.kh = 0;
				else
				{
					null == a.xk && (a.xk = g, a.yk = f);
					d = e.Nc;
					do d = a.D.W[d], d = d.Ne = d.Rd; while (0 == (d & 2147483648));
					d = e.kh = e.mk
				}
				c += d;
				f += 2
			}
			g = a.xk;
			null != g ? (e = a.D.ua[g.Qb[a.yk + 1]], a.Ml = null, a.fp =
				e, d = a.D.W[e.Yc], a.ti = d, a.uu = g.Qb[a.yk + 1], a.Si = c, c = d) : c = null
		}
		return c
	}
	f = a.D.ua[b];
	if (f.jh == a.Xe)
	{
		if (0 != (f.Yc & 2147483648)) return null;
		c = a.D.W[f.Yc];
		a.Ml = null;
		a.fp = f;
		a.ti = c;
		a.uu = b
	}
	else
	{
		f.jh = a.Xe;
		if (a.Ol) return f.Yc = -1, f.kh = 0, null;
		f.Yc = f.Nc;
		if (0 != (f.Nc & 2147483648)) return f.kh = 0, null;
		g = f.Nc;
		do c = a.D.W[g], g = c.Rd, c.Ne = g; while (0 == (g & 2147483648));
		c = a.D.W[f.Nc];
		a.Ml = null;
		a.fp = f;
		a.ti = c;
		a.uu = b;
		f.kh = f.mk
	}
	a.Si = f.kh;
	return c
}
var gj = 1,
	kj = 2,
	lj = 4,
	jj = 8,
	ij = 16,
	mj = 1024,
	hd = 2048,
	oj = 4096,
	wj = 16384,
	hj = ij + kj + lj + jj,
	pj = 8448;

function Ti()
{
	this.lq = this.ho = this.$b = this.zh = this.Gd = 0;
	this.yc = null
}
var yh = 8,
	xh = 16,
	nj = 32,
	fj = 128,
	vj = nj + 1 + 4 + yh + xh,
	Sc = 1;

function qj()
{
	this.mF = this.id = 0
}

function Si()
{
	this.Ex = this.Dx = 0
}

function Fj(a, b, c, d)
{
	this.eN = 1;
	this.code = a;
	this.AM = b;
	this.zM = c;
	this.Bl = d
}

function ej()
{
	this.jC = this.iC = this.Vm = this.Yo = this.Wm = this.qk = 0;
	this.kC = this.nj = !1;
	this.Qb = null
}
var zh = 0;
var ai = 0;

function Gj()
{
	this.pt = this.PF = this.VA = this.Hw = this.Gw = this.bi = this.zm = 0;
	this.UA = null;
	this.UA = Array(4);
	var a;
	for (a = 0; 4 > a; a++) this.UA[a] = null
}
Gj.prototype = {
	load: function(a)
	{
		this.zm = T(a);
		this.bi = T(a);
		this.Gw = F(a);
		this.Hw = F(a);
		this.VA = T(a);
		T(a);
		this.PF = T(a);
		V(a, 2)
	},
	Kf: function(a, b)
	{
		this.UA[a] = b
	}
};

function bf()
{
	this.xb = this.list = null;
	this.Fw = this.jj = 0
}
bf.prototype = {
	load: function(a)
	{
		this.jj = F(a.file);
		this.list = Array(this.jj);
		var b, c = 0;
		for (b = 0; b < this.jj; b++) this.list[b] = new Gj, this.list[b].load(a.file), this.list[b].zm + 1 > c && (c = this.list[b].zm + 1), this.list[b].pt = Fe(a.Ke, this.list[b].bi).Ih;
		this.xb = Array(c);
		for (b = 0; b < this.jj; b++) this.xb[this.list[b].zm] = b
	}
};

function Zh(a)
{
	a.Fw = 0;
	return $h(a)
}

function $h(a)
{
	var b;
	if (a.Fw < a.jj)
	{
		do
			if (b = a.list[a.Fw++], 2 <= b.pt) return b; while (a.Fw < a.jj)
	}
	return null
}
var Qg = 1,
	Rg = 2,
	Og = 32,
	Ng = 64,
	nc = 131072;

function rf(a)
{
	this.app = a;
	this.gw = this.fw = this.y = this.x = 0;
	this.Av = this.Gl = this.Uq = null;
	this.Yg = !1;
	this.Vo = null;
	this.jE = this.iE = this.lE = this.kE = this.hE = this.Cg = this.Bg = this.Ut = this.St = this.tn = this.sn = this.Bb = this.FB = 0;
	this.Pb = this.ld = this.$d = null;
	this.angle = 0;
	this.scale = this.fe = this.ge = 1;
	this.Hb = this.Ru = 320;
	this.Cb = this.Vu = 240
}
rf.prototype = {
	load: function(a)
	{
		this.Bb = F(a);
		this.sn = Sa(a);
		this.tn = Sa(a);
		this.St = F(a);
		this.Ut = F(a);
		a.ed();
		this.hE = this.Bb;
		this.kE = this.sn;
		this.lE = this.tn;
		this.iE = this.St;
		this.jE = this.Ut
	},
	reset: function()
	{
		this.Bb = this.hE;
		this.sn = this.kE;
		this.tn = this.lE;
		this.St = this.iE;
		this.Ut = this.jE;
		this.x = this.y = this.fw = this.gw = 0;
		this.Av = this.Vo = this.Gl = this.Uq = null;
		this.rp(0);
		this.scale = 1;
		sf(this);
		Tf(this);
		Uf(this, this.app.$a / 2);
		Vf(this, this.app.fb / 2);
		Wf(this, this.app.$a / 2);
		Xf(this, this.app.fb / 2);
		Yf(this);
		this.Bb &
			nc ? (this.Yg = !0, this.uw()) : (this.Yg = !1, this.show())
	},
	zv: function(a)
	{
		null == this.Av && (this.Av = new W);
		this.Av.add(a)
	},
	rp: function(a)
	{
		this.angle = a;
		this.$d.angle = a;
		this.ld.angle = a;
		this.Pb.angle = a
	},
	uw: function()
	{
		this.Bb &= ~nc;
		this.Yg && (this.$d.visible = !1, this.ld.visible = !1, this.Yg = this.Pb.visible = !1)
	},
	show: function()
	{
		0 == this.Yg && (this.$d.visible = !0, this.ld.visible = !0, this.Yg = this.Pb.visible = !0)
	},
	qn: function(a, b, c, d, e)
	{
		b = b + this.x - a.Hb;
		c = c + this.y - a.Cb;
		var f = b + a.width,
			g = c + a.height,
			k = c;
		0 != d && (k = g - d);
		var h, p;
		p = e == Hj ? this.Uq : this.Gl;
		if (null == p) return null;
		for (e = 0; e < p.size(); e++)
			if (h = p.get(e), h.x < f && h.x + h.width > b && h.y < g && h.y + h.height > k && h.qn(a, b, c, d)) return h;
		return null
	},
	ny: function(a, b, c, d, e, f)
	{
		f = f == Hj ? this.Uq : this.Gl;
		if (null == f) return null;
		a += this.x;
		b += this.y;
		c += this.x;
		d += this.y;
		0 != e && (b = d - e);
		for (e = 0; e < f.size(); e++)
		{
			var g = f.get(e);
			if (g.x < c && g.x + g.width > a && g.y < d && g.y + g.height > b && g.ny(a, b, c, d)) return g
		}
		return null
	}
};

function Te(a)
{
	null != a.$d && (a.app.Ig.removeChild(a.$d), a.$d = null);
	null != a.ld && (a.app.Ig.removeChild(a.ld), a.ld = null);
	null != a.Pb && (a.app.Ig.removeChild(a.Pb), a.Pb = null)
}

function Yf(a)
{
	a.Ej = !1;
	a.$d.Ej = !1;
	a.ld.Ej = !1;
	a.Pb.Ej = !1
}

function Xf(a, b)
{
	b = a.app.fb - b;
	a.Vu = b;
	a.$d.Vu = b;
	a.ld.Vu = b;
	a.Pb.Vu = b
}

function Wf(a, b)
{
	b = a.app.$a - b;
	a.Ru = b;
	a.$d.Ru = b;
	a.ld.Ru = b;
	a.Pb.Ru = b
}

function Vf(a, b)
{
	a.Cb = b;
	a.$d.Cb = b;
	a.ld.Cb = b;
	a.Pb.Cb = b
}

function Uf(a, b)
{
	a.Hb = b;
	a.$d.Hb = b;
	a.ld.Hb = b;
	a.Pb.Hb = b
}

function Tf(a)
{
	a.ge = 1;
	a.$d.ge = 1;
	a.ld.ge = 1;
	a.Pb.ge = 1
}

function sf(a)
{
	a.fe = 1;
	a.$d.fe = 1;
	a.ld.fe = 1;
	a.Pb.fe = 1
}

function Sg(a, b, c, d, e, f)
{
	this.app = a;
	this.OL = d;
	this.ii = this.type = 0;
	this.x = b;
	this.y = c;
	this.height = this.width = 0;
	this.Mg = null;
	this.aq = !1;
	this.uf = null;
	this.borderWidth = 0;
	this.borderColor = this.eA = this.Wn = null;
	this.Cg = this.Bg = 0;
	this.v = this.body = null;
	if (d)
		if (this.Mg = Fe(this.app.Ke, d.bi), this.type = this.Mg.Ih, this.ii = this.Mg.Kd.LB, this.borderWidth = this.Mg.Kd.nx, this.GF = this.Mg.Kd.bu, this.Bg = this.Mg.PB, this.Cg = this.Mg.QB, this.width = this.Mg.Kd.JB, this.height = this.Mg.Kd.KB, this.aq = 0 != this.Mg.Kd.ZG, this.Wn = this.Mg.Kd.hk,
			this.eA = this.Mg.Kd.Pq, this.borderColor = this.Mg.Kd.mx, 1 == this.type) this.uf = Y(this.app.Ba, this.Mg.Kd.ik), this.width = this.uf.width, this.height = this.uf.height;
		else
		{
			if (32 <= this.type)
			{
				a = this.app.Z;
				b = null;
				for (e = c = 0; e < a.Tb; e++)
				{
					for (; null == a.W[c];) c++;
					b = a.W[c];
					c++;
					if (b.QL == d) break
				}
				this.v = b
			}
		}
	else
	{
		this.type = Ij;
		this.uf = e;
		this.width = this.uf.width;
		this.height = this.uf.height;
		this.x -= this.uf.Hb;
		this.y -= this.uf.Cb;
		switch (f)
		{
			case 0:
				this.ii = Tg.mJ;
				break;
			case 1:
				this.ii = Tg.Kp;
				break;
			case 2:
				this.ii = Tg.Bj;
				break;
			case 3:
				this.ii =
					Tg.CD
		}
		this.aq = !1
	}
}
Sg.prototype = {
	$c: function(a, b, c)
	{
		if (null != this.OL)
			if (this.type == Jj)
			{
				var d = this.Mg.Kd,
					e;
				switch (d.Mm)
				{
					case 1:
						switch (d.yl)
						{
							case 1:
								a.Xf(b + this.x, c + this.y, this.width, this.height, this.Wn, this.Bg, this.Cg);
								break;
							case 2:
								a.Ae(b + this.x, c + this.y, this.width, this.height, this.Wn, this.Bg, this.Cg);
								break;
							case 3:
								a.zC(b + this.x, c + this.y, this.width, this.height, this.Wn, this.Bg, this.Cg)
						}
						break;
					case 2:
						switch (d.yl)
						{
							case 1:
								a.Xf(b + this.x, c + this.y, this.width, this.height, this.Wn, this.Bg, this.Cg);
								break;
							case 2:
								a.yC(b + this.x, c + this.y,
									this.width, this.height, this.Wn, this.eA, 0 != this.GF, this.Bg, this.Cg);
								break;
							case 3:
								a.LH(b + this.x, c + this.y, this.width, this.height, this.Wn, this.eA, 0 != this.GF, this.Bg, this.Cg)
						}
						break;
					case 3:
						switch (d.yl)
						{
							case 2:
								e = Y(this.app.Ba, d.ik);
								a.MH(e, b + this.x, c + this.y, this.width, this.height, this.Bg, this.Cg);
								break;
							case 3:
								e = Y(this.app.Ba, d.ik), a.NH(e, b + this.x, c + this.y, this.width, this.height, this.Bg, this.Cg)
						}
				}
				if (0 < this.borderWidth) switch (d.yl)
				{
					case 1:
						var f = e = 0,
							g = this.width,
							k = this.height;
						0 != (d.cu & Kj) && (e += g, g = -g);
						0 != (d.cu &
							Lj) && (f += k, k = -k);
						a.Xf(b + this.x + e, c + this.y + f, b + this.x + e + g, c + this.y + f + k, this.borderColor, this.borderWidth);
						break;
					case 2:
						a.Ox(b + this.x, c + this.y, this.width, this.height, this.borderColor, this.borderWidth);
						break;
					case 3:
						a.KH(b + this.x, c + this.y, this.width, this.height, 1, this.borderColor, this.borderWidth)
				}
			}
		else this.type == Mj ? a.dN(this.uf, b + this.x + this.uf.Hb, c + this.y + this.uf.Cb, 0, 1, 1, this.Bg, this.Cg) : null != this.v && this.v.$c(a, b, c);
		else a.ri(this.uf, b + this.x + this.uf.Hb, c + this.y + this.uf.Cb, 0, 1, 1, this.Bg, this.Cg)
	},
	cI: function(a, b)
	{
		this.Bg = a;
		this.Cg = b
	},
	Kf: function(a, b)
	{
		Zf(b.$d, this);
		this.type == Ij && b.zv(this);
		switch (this.ii)
		{
			case Tg.Kp:
				null == b.Uq && (b.Uq = new W);
				b.Uq.add(this);
				null == b.Gl && (b.Gl = new W);
				b.Gl.add(this);
				break;
			case Tg.Bj:
				null == b.Gl && (b.Gl = new W);
				b.Gl.add(this);
				break;
			case Tg.CD:
				var c = this.y,
					d = this.x + this.width,
					e = this.y + this.height,
					f = new ra;
				f.left = this.x;
				f.top = c;
				f.right = d;
				f.bottom = e;
				null == b.Vo && (b.Vo = new W);
				b.Vo.add(f)
		}
	},
	qn: function(a, b, c, d)
	{
		var e;
		switch (this.type)
		{
			case 0:
				return e = this.height, this.ii ==
					Tg.Bj && (e = 6), Nj(a, b, c, d, this.x, this.y, this.width, e);
			case 1:
				if (0 != this.aq) return !0;
				e = ch;
				this.ii == Tg.Bj && (e = Di);
				e = bh(this.uf, e, 0, 1, 1);
				return a.qn(b, c, d, e, this.x, this.y, 0);
			case 11:
				if (0 != this.aq) return !0;
				e = ch;
				this.ii == Tg.Bj && (e = Di);
				e = bh(this.uf, e, 0, 1, 1);
				return a.qn(b, c, d, e, this.x, this.y, 0)
		}
		return !1
	},
	ny: function(a, b, c, d)
	{
		var e;
		switch (this.type)
		{
			case 0:
				if (this.ii == Tg.Bj)
				{
					a = this.y + Math.min(this.height, 6);
					if (this.y < d && a > b) return !0;
					break
				}
				return !0;
			case 1:
				if (0 != this.aq) return !0;
				e = ch;
				this.ii == Tg.Bj && (e = Di);
				e =
					bh(this.uf, e, 0, 1, 1);
				return Nj(e, this.x, this.y, 0, a, b, c, d);
			case 11:
				if (0 != this.aq) return !0;
				e = ch;
				this.ii == Tg.Bj && (e = Di);
				e = bh(this.uf, e, 0, 1, 1);
				return Nj(e, this.x, this.y, 0, a, b, c, d)
		}
		return !1
	}
};
var Ge = 4,
	Qi = 7,
	th = -7,
	wh = -4,
	vh = -3,
	Jj = 0,
	Mj = 1,
	Nb = 2,
	He = 3,
	bi = 4,
	fh = 5,
	eh = 6,
	Ie = 7,
	gh = 9,
	Ij = 11,
	Ri = 10,
	ci = 32,
	dj = 32768;

function Oj()
{
	this.QB = this.PB = this.Cl = this.Ih = this.eu = 0;
	this.Kd = this.RB = null;
	this.eH = this.dH = 0
}
Oj.prototype = {
	WA: function(a)
	{
		this.eu = T(a);
		this.Ih = T(a);
		this.Cl = T(a);
		V(a, 2);
		this.PB = F(a);
		this.QB = F(a)
	},
	load: function(a)
	{
		a.seek(this.dH);
		switch (this.Ih)
		{
			case 0:
				this.Kd = new Pj;
				break;
			case 1:
				this.Kd = new Qj;
				break;
			default:
				this.Kd = new Rj
		}
		this.Kd.load(a, this.Ih);
		this.eH = 0
	},
	je: function(a, b)
	{
		this.Kd.je(a, b)
	}
};

function Fd()
{
	this.kk = this.ze = this.Qm = 0;
	this.Pm = this.fu = this.Dl = null;
	this.bw = 0
}
Fd.prototype = {
	Hl: function(a)
	{
		this.Qm = F(a);
		this.ze = Array(this.Qm);
		var b;
		for (b = this.kk = 0; b < this.Qm; b++)
			for (var c = 0, d; 32639 != c;)
				if (c = T(a), T(a), d = F(a), 0 != d)
				{
					d = a.Ga + d;
					switch (c)
					{
						case 17476:
							this.ze[b] = new Oj;
							this.ze[b].WA(a);
							this.ze[b].eu >= this.kk && (this.kk = this.ze[b].eu + 1);
							break;
						case 17477:
							this.ze[b].RB = a.ed();
							break;
						case 17478:
							this.ze[b].dH = a.Ga
					}
					a.seek(d)
				} this.Dl = Array(this.kk);
		for (b = 0; b < this.Qm; b++) this.Dl[this.ze[b].eu] = b;
		this.fu = Array(this.kk);
		this.Pm = Array(this.kk);
		for (a = 0; a < this.kk; a++) this.fu[a] =
			0, this.Pm[a] = 0
	},
	si: function()
	{
		var a;
		for (a = 0; a < this.kk; a++) this.fu[a] = 0
	},
	on: function(a)
	{
		this.fu[a] = 1
	},
	load: function(a)
	{
		var b;
		for (b = 0; b < this.kk; b++)
			if (0 != this.fu[b])
			{
				if (0 == this.Pm[b] || 0 != this.Pm[b] && 0 != (this.ze[this.Dl[b]].eH & 32)) this.ze[this.Dl[b]].load(a), this.Pm[b] = 1
			}
		else 0 != this.Pm[b] && (this.ze[this.Dl[b]].Kd = null, this.Pm[b] = 0);
		this.si()
	},
	je: function(a, b)
	{
		var c;
		for (c = 0; c < this.kk; c++) 0 != this.Pm[c] && this.ze[this.Dl[c]].je(a, b)
	}
};

function gi(a)
{
	if (a.bw < a.Qm)
	{
		var b;
		for (b = a.bw + 1; b < a.Qm; b++)
			if (0 != (a.ze[b].Cl & 16)) return a.bw = b, a.ze[b]
	}
	return null
}

function fi(a)
{
	var b;
	for (b = 0; b < a.Qm; b++)
		if (0 != (a.ze[b].Cl & 16)) return a.bw = b, a.ze[b];
	return null
}

function Fe(a, b)
{
	return a.ze[a.Dl[b]]
}
Tg.mJ = 0;
Tg.Kp = 1;
Tg.Bj = 2;
Tg.CD = 3;
Tg.lO = 4;

function Tg()
{}

function Qj()
{
	this.ik = 0
}
Qj.prototype = {
	load: function(a)
	{
		V(a, 4);
		this.LB = T(a);
		this.ZG = T(a);
		this.JB = F(a);
		this.KB = F(a);
		this.ik = T(a)
	},
	je: function(a)
	{
		null != a && (a = a.cl(this.ik), -1 != a && (this.ik = a))
	}
};
var Kj = 1,
	Lj = 2;

function Pj()
{
	this.ik = this.bu = this.Pq = this.hk = this.cu = this.Mm = this.yl = this.mx = this.nx = 0
}
Pj.prototype = {
	load: function(a)
	{
		V(a, 4);
		this.LB = T(a);
		this.ZG = T(a);
		this.JB = F(a);
		this.KB = F(a);
		this.nx = T(a);
		this.mx = Ta(a);
		this.yl = T(a);
		this.Mm = T(a);
		if (1 == this.yl) this.cu = T(a);
		else switch (this.Mm)
		{
			case 1:
				this.hk = this.Pq = Ta(a);
				break;
			case 2:
				this.hk = Ta(a);
				this.Pq = Ta(a);
				this.bu = F(a);
				break;
			case 3:
				this.ik = T(a)
		}
	},
	je: function(a)
	{
		3 == this.Mm && null != a && (a = a.cl(this.ik), -1 != a && (ocImage = a))
	}
};
var di = 8,
	Lg = 16,
	hc = 32,
	Wh = 256,
	ic = 512,
	Pg = 2048,
	bj = 4096,
	Oh = 16384,
	Nh = 32768,
	ei = 131072,
	wi = 1048576,
	Dh = 8,
	xi = 64;
Rj.prototype = Tg;

function Rj()
{
	this.jk = 0;
	this.MB = null;
	this.Mc = this.Nm = 0;
	this.kf = this.Cc = this.Lm = this.du = this.Rq = this.ji = null;
	this.aH = this.bH = this.$G = 0;
	this.au = this.Qq = null
}
Rj.prototype = {
	load: function(a, b)
	{
		var c = a.Ga;
		this.MB = Array(8);
		var d;
		V(a, 4);
		V(a, 2);
		var e = T(a);
		V(a, 2);
		var f = T(a),
			g = T(a),
			k = T(a);
		this.jk = F(a);
		for (d = 0; 8 > d; d++) this.MB[d] = S(a);
		T(a);
		var h = T(a),
			p = T(a);
		this.Nm = T(a);
		var l = T(a);
		this.Mc = F(a);
		Ta(a);
		d = F(a);
		var r = F(a);
		this.au = this.Qq = null;
		0 != k && (a.seek(c + k), this.ji = new Sj, this.ji.load(a));
		0 != h && (a.seek(c + h), this.Rq = new Tj, this.Rq.load(a, 0 != (this.Nm & 128)));
		0 != p && (a.seek(c + p), this.du = new Uj, this.du.load(a));
		0 != g && (a.seek(c + g), this.Lm = new ti, this.Lm.load(a));
		0 != f &&
			(a.seek(c + f), this.kf = new Vj, this.kf.load(a));
		0 != l && (a.seek(c + l), f = F(a), V(a, 4), this.bH = F(a), F(a), this.aH = F(a), 0 != f - 20 && (this.$G = a.Ga));
		0 != d && (a.seek(c + d), this.Qq = new qf, this.Qq.load(a));
		0 != r && (a.seek(c + r), this.au = new qf, this.au.load(a));
		if (0 != e) switch (a.seek(c + e), b)
		{
			case 3:
			case 4:
				this.kf = new Wj;
				this.kf.load(a);
				break;
			case 5:
			case 6:
			case 7:
				this.Cc = new Xj;
				this.Cc.load(a);
				break;
			case 8:
				this.kf = new Yj;
				this.kf.load(a);
				this.jk &= ~(ic | bj | 4);
				break;
			case 9:
				this.kf = new Zj, this.kf.load(a)
		}
	},
	je: function(a, b)
	{
		null !=
			this.Lm && this.Lm.je(a);
		null != this.kf && this.kf.je(a, b);
		null != this.Cc && this.Cc.je(a, b)
	}
};

function Zj()
{
	this.ng = this.cH = this.Al = this.zl = 0;
	this.NB = null
}
Zj.prototype = {
	load: function(a)
	{
		V(a, 4);
		this.zl = F(a);
		this.Al = F(a);
		T(a);
		this.cH = T(a);
		this.ng = F(a);
		V(a, 8);
		this.NB = a.ed()
	},
	je: function() {}
};

function Vj()
{
	this.LE = this.ME = this.KE = 0
}
Vj.prototype = {
	load: function(a)
	{
		V(a, 2);
		this.KE = F(a);
		this.ME = F(a);
		this.LE = F(a)
	},
	je: function() {}
};

function Xj()
{
	this.Lq = this.bu = this.Pq = this.hk = this.cu = this.Mm = this.yl = this.mx = this.nx = this.Om = this.Ro = this.ki = this.OB = this.Al = this.zl = 0;
	this.frames = null
}
Xj.prototype = {
	load: function(a)
	{
		V(a, 4);
		this.zl = F(a);
		this.Al = F(a);
		this.OB = T(a);
		this.ki = T(a);
		this.Ro = T(a);
		this.Om = T(a);
		switch (this.ki)
		{
			case 1:
			case 4:
				this.Lq = T(a);
				this.frames = Array(this.Lq);
				var b;
				for (b = 0; b < this.Lq; b++) this.frames[b] = T(a);
				break;
			case 2:
			case 3:
			case 5:
				if (this.nx = T(a), this.mx = Ta(a), this.yl = T(a), this.Mm = T(a), 1 == this.yl) this.cu = T(a);
				else switch (this.Mm)
				{
					case 1:
						this.hk = Ta(a);
						break;
					case 2:
						this.hk = Ta(a), this.Pq = Ta(a), this.bu = F(a)
				}
		}
	},
	je: function(a, b)
	{
		switch (this.ki)
		{
			case 1:
			case 4:
				var c;
				for (c = 0; c <
					this.Lq; c++) null != a && a.cl(this.frames[c]);
				break;
			case 5:
				null != b && b.cl(this.Om)
		}
	}
};

function Yj()
{
	this.Al = this.zl = this.ng = 0;
	this.text = null
}
Yj.prototype = {
	load: function(a)
	{
		F(a);
		F(a);
		this.ng = F(a);
		Ta(a);
		this.zl = F(a);
		this.Al = F(a);
		V(a, 4);
		var b = F(a);
		this.text = a.ed(b)
	},
	je: function() {}
};

function ak()
{
	this.XC = this.Nu = this.Fr = 0;
	this.Rl = null
}
ak.prototype = {
	load: function(a)
	{
		this.Fr = S(a);
		this.Nu = T(a);
		this.XC = Ta(a);
		this.Rl = a.ed()
	},
	je: function(a, b)
	{
		null != b && b.cl(this.Fr)
	}
};

function Wj()
{
	this.Uo = this.cC = this.bC = 0;
	this.Cd = null
}
Wj.prototype = {
	load: function(a)
	{
		var b = a.Ga;
		V(a, 4);
		this.bC = F(a);
		this.cC = F(a);
		this.Uo = F(a);
		this.Cd = Array(this.Uo);
		var c = Array(this.Uo),
			d;
		for (d = 0; d < this.Uo; d++) c[d] = F(a);
		for (d = 0; d < this.Uo; d++) this.Cd[d] = new ak, a.seek(b + c[d]), this.Cd[d].load(a)
	},
	je: function(a, b)
	{
		var c;
		for (c = 0; c < this.Uo; c++) this.Cd[c].je(a, b)
	}
};
var fc = 1,
	zi = 16,
	ec = 8192;

function Eh()
{
	this.Ne = this.zc = 0;
	this.c = null;
	this.um = this.rb = this.Rd = this.Oj = this.jc = this.ft = 0;
	this.ke = null;
	this.IA = 0;
	this.vw = this.IF = null;
	this.ww = this.rq = 0;
	this.ga = this.qq = null;
	this.wL = this.Vh = this.ig = this.LA = this.Aa = this.Ya = this.ca = this.da = this.Xa = this.Wa = this.w = this.Nj = this.A = this.Mj = 0;
	this.et = !1;
	this.ea = this.ub = this.Ca = this.J = this.b = null
}
Eh.prototype = {
	dI: function(a, b)
	{
		if (this.b.bc != a || this.b.cc != b)
		{
			0 <= a && (this.b.bc = a);
			0 <= b && (this.b.cc = b);
			this.b.fa = !0;
			var c = yi(this.c.m.Ba, this.b.Jb, this.b.ac, this.b.bc, this.b.cc);
			this.da = c.width;
			this.ca = c.height;
			this.Wa = c.Hb;
			this.Xa = c.Cb
		}
	},
	za: function() {},
	handle: function() {},
	Yk: function() {},
	IE: function() {},
	display: function() {},
	Vc: function() {},
	qL: function()
	{
		return null
	},
	cI: function() {},
	nz: function() {},
	Op: function() {},
	rm: function()
	{
		return 0
	},
	sp: function() {},
	mo: function() {},
	Br: function() {},
	sf: function()
	{
		return -1
	},
	pq: function()
	{
		return 0
	},
	ph: function() {},
	km: function() {},
	nq: function() {}
};

function Fh()
{
	this.RC = !1;
	this.wm = null;
	this.ib = !1;
	this.mb = null;
	this.Yg = !0;
	this.ge = this.fe = 1;
	this.y = this.x = this.angle = 0;
	this.vp = null
}
Fh.prototype = m(new Eh,
{
	handle: function()
	{
		this.ea.handle();
		this.b.fa && (this.b.fa = !1)
	},
	nz: function(a, b, c, d, e)
	{
		this.mb = this.c.N.kc[d];
		this.ib = e;
		Zf(this.mb.Pb, this)
	},
	$c: function(a, b, c)
	{
		if (this.ib && (0 == (this.Aa & 8) || this.ea.Bk))
		{
			var d = this.ea.$e;
			this.ea.Ja & bk && (d |= ck);
			var e = Y(this.c.m.Ba, this.b.Jb);
			e && (this.vp ? a.an(this.vp, b + this.A - this.c.Ha + this.mb.x - e.Hb, c + this.w - this.c.Oa + this.mb.y - e.Cb, this.vp.width * this.b.bc, this.vp.height * this.b.cc, d, this.ea.De) : a.ri(e, b + this.A - this.c.Ha + this.mb.x, c + this.w - this.c.Oa +
				this.mb.y, this.b.ac, this.b.bc, this.b.cc, d, this.ea.De))
		}
	},
	rm: function()
	{
		return this.mb.Pb.removeChild(this)
	},
	sp: function()
	{
		this.ib = !0
	},
	mo: function()
	{
		this.ib = !1
	},
	sf: function()
	{
		return this.mb.Pb.sf(this)
	},
	pq: function()
	{
		return this.mb.Pb.children.length
	},
	ph: function(a)
	{
		a >= this.mb.Pb.children.length && (a = this.mb.Pb.children.length);
		0 > a && (a = 0);
		this.mb.Pb.ph(this, a)
	},
	Br: function(a)
	{
		this.ea.$e = Qd;
		this.ea.De = a
	}
});
var Ze = 1,
	Xe = 2,
	Ye = 4,
	sh = 524288,
	cf = 2097152;

function Lh()
{
	this.ng = this.Vb = 0;
	this.P = null;
	this.aC = this.$B = 0;
	this.iH = this.level = -1;
	this.sq = null;
	this.Yg = !0
}
Lh.prototype = m(new Eh,
{
	lI: function(a, b, c)
	{
		b = a.kf;
		this.da = b.zl;
		this.ca = b.Al;
		this.ng = b.ng;
		0 != (this.ng & 16) && (this.ng |= 65536); - 1 == c && (c = 0, 0 != (this.ng & 16384) && (c = b.cH));
		if (null != b.NB && 0 == b.NB.length && 0 != (this.ng & 16384) && !(c >= this.c.m.Ti) && c != this.c.m.yh)
		{
			this.Yg = 0 != (a.Nm & Dh) ? !0 : !1;
			this.Le = new Od;
			this.Le.x = this.A - this.c.Ha;
			this.Le.y = this.w - this.c.Oa;
			Zf(this.c.m.Ig, this);
			this.$B = this.A;
			this.aC = this.w;
			a = this.P = new Ed(this.c.m, this.c.m.file, this.c.m.path, !0);
			b = this.ng;
			var d = this.Le,
				e = this.da,
				f = this.ca;
			a.nb =
				this.c.m;
			a.Um = b;
			a.Ig = d;
			a.my = c;
			a.sx = e;
			a.rx = f;
			this.P.digest();
			0 != (this.ng & 4096) && null == this.c.m.gj && (this.c.m.gj = this, this.c.m.Z.pause());
			Cd(this.P);
			c = this.P;
			a = (this.c.m.wj + this.Le.y) * this.c.m.ge;
			c.uj = (this.c.m.uj + this.Le.x) * this.c.m.fe;
			c.wj = a;
			We(this.P);
			this.c.m.Dc.push(this.P)
		}
	},
	za: function(a)
	{
		this.lI(a, !0, -1)
	},
	handle: function()
	{
		this.J.move();
		if (null != this.P)
		{
			if (this.$B != this.A || this.aC != this.w)
			{
				this.Le.x = this.A - this.c.Ha;
				this.Le.y = this.w - this.c.Oa;
				this.$B = this.A;
				this.aC = this.w;
				var a = this.P,
					b = this.Le.y *
					this.c.m.ge;
				a.uj = this.Le.x * this.c.m.fe;
				a.wj = b;
				this.NN()
			}
			0 == We(this.P) ? (this.dw(), 0 != (this.ng & 4096) && null != this.P.nb && this.P.nb.gj == this && (this.P.nb.gj = null, this.P.nb.Z.resume()), this.P = null) : (this.iH = this.level, this.level = this.P.yh)
		}
	},
	$c: function()
	{
		this.Yg && null != this.P && Ve(this.P, this.Le.x, this.Le.y)
	},
	Vc: function()
	{
		if (null != this.P)
		{
			switch (this.P.qc)
			{
				case 3:
					Ee(this.P)
			}
			this.dw();
			var a = this.P;
			null != a.Ed && ub(a.Ed);
			0 != (this.ng & 4096) && null != this.P.nb && this.P.nb.gj == this && (this.P.nb.gj = null, this.P.nb.Z.resume());
			this.P = null
		}
	},
	dw: function()
	{
		var a;
		for (a = 0; a < this.c.m.Dc.length; a++)
			if (this.c.m.Dc[a] == this.P)
			{
				this.c.m.Dc.splice(a, 1);
				break
			} this.c.m.Ig.removeChild(this.Le)
	},
	bQ: function()
	{
		if (null != this.P)
		{
			if (null != this.P.Z)
			{
				this.P.Z.Tc = Db;
				return
			}
			this.Vc(!0)
		}
		this.lI(this.ga, !1, -1)
	},
	hP: function()
	{
		null != this.P && (null != this.P.Z && (this.P.Z.Tc = -2), 0 != (this.ng & 4096) && null != this.P.nb && this.P.nb.gj == this && (this.P.nb.gj = null, this.P.nb.Z.resume()))
	},
	uw: function()
	{
		this.Yg = !1
	},
	show: function()
	{
		this.Yg = !0
	},
	EP: function(a)
	{
		null !=
			this.P && null != this.P.Z && 0 <= a && 4096 > a && (this.P.Z.Tc = Bb, this.P.Z.rr = 32768 | a)
	},
	cd: function()
	{
		null != this.P && null != this.P.Z && (this.P.Z.Tc = zb)
	},
	OP: function()
	{
		null != this.P && null != this.P.Z && (this.P.Z.Tc = 2)
	},
	cQ: function()
	{
		null != this.P && null != this.P.Z && (this.P.Z.Tc = 101)
	},
	pause: function()
	{
		null != this.P && null != this.P.Z && this.P.Z.pause()
	},
	resume: function()
	{
		null != this.P && null != this.P.Z && this.P.Z.resume()
	},
	nQ: function(a, b)
	{
		null != this.P && pb(this.P, a, b)
	},
	mQ: function(a, b)
	{
		if (null != this.P)
		{
			var c = se(this.P, a);
			null != c &&
				(c[a] = b)
		}
	},
	Bw: function()
	{
		return null != this.P && null != this.P.Z ? 0 != this.P.Z.pj : !1
	},
	uO: function()
	{
		return null == this.P
	},
	CP: function()
	{
		return this.Yg
	},
	mP: function()
	{
		return this.level != this.iH
	},
	vP: function(a)
	{
		return null != this.P ? td(this.P, a) : ""
	},
	wP: function(a)
	{
		return null != this.P ? bd(this.P, a) : 0
	},
	uP: function()
	{
		return this.level + 1
	},
	QC: function() {},
	PC: function() {},
	GO: function()
	{
		null != this.P && this.Yg && (hoAdRunHeader.m.EM.removeChild(this), Zf(hoAdRunHeader.m.EM, this))
	},
	NN: function()
	{
		if (null != this.P && null != this.P.Z)
		{
			var a =
				this.P.Z,
				b = 0,
				c;
			for (c = 0; c < a.Tb; c++)
			{
				for (; null == a.W[b];) b++;
				var d = a.W[b];
				b++;
				d.nq()
			}
		}
	},
	km: function()
	{
		var a = this.P,
			b = (this.c.m.wj + this.Le.y) * this.c.m.ge;
		a.uj = (this.c.m.uj + this.Le.x) * this.c.m.fe;
		a.wj = b;
		null != this.P && Ag(this.P)
	}
});

function Qh()
{
	this.lh = this.md = this.Kl = 0;
	this.Jb = -1;
	this.cc = this.bc = 1;
	this.nc = this.vk = this.ra = this.wa = this.ac = 0;
	this.Wb = this.fa = !1;
	this.Zm = this.Ym = 0;
	this.Nx = -1;
	this.xC = this.vC = this.wC = this.uC = this.tC = this.Mx = 0
}
Qh.prototype = {
	za: function()
	{
		this.cc = this.bc = 1;
		this.ac = 0;
		this.md = -1
	},
	Vc: function() {}
};
var Aa = 15,
	Da = 240,
	Ea = 4,
	Ga = 61440,
	Ha = 12,
	Ca = 512,
	Fa = 1024,
	Ia = 2048;

function Kh()
{
	this.Df = this.Cf = this.af = this.Oc = this.hb = this.type = 0;
	this.gE = this.ib = !1;
	this.eg = this.jj = this.Ak = this.Eu = this.Ce = 0;
	this.Tn = !1;
	this.mb = this.Ta = null;
	this.Zg = 0;
	this.font = null;
	this.Ag = this.Mb = !1
}
Kh.prototype = m(new Eh,
{
	za: function()
	{
		this.Ee = -1;
		this.Eu = this.Ce = 0;
		this.da = this.ca = 1;
		if (null == this.ga.Cc) this.ca = this.Df = this.da = this.Cf = 1;
		else
		{
			var a = this.ga.Cc;
			this.da = this.Cf = a.zl;
			this.ca = this.Df = a.Al;
			this.eg = a.Ro;
			this.type = a.ki;
			switch (this.type)
			{
				case 5:
					var b = this.Ee; - 1 == b && (b = a.Om);
					this.font = Mi(this.c.m.td, b);
					this.Zg = this.font.Ui();
					this.Ce = a.hk;
					break;
				case 2:
				case 3:
					this.Ce = a.hk, this.Eu = a.Pq
			}
		}
		a = this.ga.kf;
		this.Oc = a.ME;
		this.af = a.LE;
		this.hb = a.KE;
		this.Tn = !1
	},
	Vc: function() {},
	handle: function()
	{
		this.ea.handle();
		this.b.fa && (this.b.fa = !1)
	},
	dl: function()
	{
		var a = this.ga.Cc;
		if (5 == this.type)
		{
			var b = rsFont; - 1 == b && (b = a.Om);
			return Ni(Mi(this.c.m.td, b))
		}
		return null
	},
	yr: function(a, b)
	{
		5 == this.type && (this.Ee = Li(this.c.m.td, a), this.font = Mi(this.c.m.td, this.Ee), this.Zg = this.font.Ui(), null != b && (this.da = this.Cf = b.right - b.left, this.ca = this.Df = b.bottom - b.top), this.xc())
	},
	DA: function()
	{
		return this.Ce
	},
	OC: function(a)
	{
		this.Ce = a;
		this.xc()
	},
	GE: function(a)
	{
		0 == this.Tn && Math.ceil(a) != a && (this.Tn = !0)
	},
	Zv: function(a)
	{
		0 == this.Tn ? (a = na(a),
			a < this.Oc && (a = this.Oc), a > this.af && (a = this.af), a != Math.round(this.hb) && (this.hb = a, this.b.fa = !0, this.xc())) : (a < this.Oc && (a = this.Oc), a > this.af && (a = this.af), a != this.hb && (this.hb = a, this.b.fa = !0, this.xc()))
	},
	NO: function(a)
	{
		this.GE(a);
		this.Zv(this.hb + a)
	},
	YK: function(a)
	{
		this.GE(a);
		this.Zv(this.hb - a)
	},
	WO: function(a)
	{
		this.Oc = a;
		this.Zv(this.hb)
	},
	VO: function(a)
	{
		this.af = a;
		this.Zv(this.hb)
	},
	TO: function(a)
	{
		this.Ce = a;
		this.xc()
	},
	UO: function(a)
	{
		this.Eu = a;
		this.xc()
	},
	SO: function()
	{
		return this.hb
	},
	RO: function()
	{
		return this.Oc
	},
	QO: function()
	{
		return this.af
	},
	OO: function()
	{
		return this.Ce
	},
	PO: function()
	{
		return this.Eu
	},
	Op: function(a, b, c, d, e, f)
	{
		null != this.ga.Cc && 1 != this.Mb && (this.Mb = !0, this.gE = d, this.ib = e, this.mb = this.c.N.kc[c], this.Ta = this.gE ? this.mb.ld : this.mb.Pb, 0 > f ? Zf(this.Ta, this) : dk(this.Ta, this, f), 5 != this.type && this.xc())
	},
	rm: function()
	{
		if (null == this.ga.Cc || 0 == this.Mb) return -1;
		this.Mb = !1;
		var a = this.Ta.sf(this);
		this.Ta.removeChild(this);
		return a
	},
	sf: function()
	{
		return this.Mb ? this.Ta.sf(this) : -1
	},
	pq: function()
	{
		return this.Mb ?
			this.Ta.children.length : -1
	},
	ph: function(a)
	{
		this.Mb && this.Ta.ph(this, a)
	},
	sp: function()
	{
		null != this.ga.Cc && 0 == this.ib && (this.ib = !0, this.xc())
	},
	mo: function()
	{
		null != this.ga.Cc && 1 == this.ib && (this.ib = !1)
	},
	Yk: function()
	{
		this.Ag || this.xc()
	},
	xc: function()
	{
		var a, b = this.ga.Cc;
		switch (this.type)
		{
			case 4:
				this.Ak = this.af <= this.Oc ? 0 : Math.floor((this.hb - this.Oc) * b.Lq / (this.af - this.Oc));
				this.Ak = Math.min(this.Ak, b.Lq - 1);
				a = Y(this.c.m.Ba, b.frames[Math.max(this.Ak, 0)]);
				this.da = a.width;
				this.ca = a.height;
				this.Wa = a.Hb;
				this.Xa =
					a.Cb;
				break;
			case 2:
			case 3:
				a = this.Cf;
				2 == b.ki && (a = this.Df);
				this.Ak = this.af <= this.Oc ? 0 : (this.hb - this.Oc) * a / (this.af - this.Oc);
				3 == b.ki ? (this.Xa = 0, this.ca = this.Df, this.da = this.Ak, this.Wa = 0 != (b.Ro & 256) ? this.Ak - this.Cf : 0) : (this.Wa = 0, this.da = this.Cf, this.ca = this.Ak, this.Xa = 0 != (b.Ro & 256) ? this.Ak - this.Df : 0);
				break;
			case 1:
				a = 0 == this.Tn ? za(this.hb, this.eg) : Ba(this.hb, this.eg);
				var c, d, e, f = 0,
					g = 0;
				for (c = a.length - 1; 0 <= c; c--) d = a.charCodeAt(c), e = 0, 45 == d ? e = b.frames[10] : 46 == d ? e = b.frames[12] : 43 == d ? e = b.frames[11] : 101 == d || 69 ==
					d ? e = b.frames[13] : 48 <= d && 57 >= d && (e = b.frames[d - 48]), 0 <= e && (d = Y(this.c.m.Ba, e), null != d ? (f += d.width, g = Math.max(g, d.height)) : toto = 2);
				this.Wa = f;
				this.Xa = g;
				this.da = f;
				this.ca = g;
				break;
			case 5:
				a = 0 == this.Tn ? za(this.hb, this.eg) : Ba(this.hb, this.eg), this.Wa = b = null != this.Ec ? this.Ec.measureText(a, this.font) : (new $a(this.c.m, 16, 16)).measureText(a, this.font), this.Xa = this.Df / 2 + this.Zg / 2, this.da = b, this.ca = this.Zg, null == this.Ec ? this.Ec = new $a(this.c.m, this.da, this.ca) : (this.da > this.Ec.width || this.ca > this.Ec.height) && this.Ec.resize(this.da,
					this.ca), db(this.Ec, a, 0, new ra(0, 0, 1E3, 1E3), this.font, this.Ce)
		}
		this.Ag = !0
	},
	$c: function(a, b, c)
	{
		if (this.ib && this.Ag)
		{
			var d, e, f;
			d = this.ga.Cc;
			b = b + this.A - this.Wa - this.c.Ha + this.mb.x;
			c = c + this.w - this.Xa - this.c.Oa + this.mb.y;
			var g = this.da,
				k = this.ca;
			switch (this.type)
			{
				case 4:
					d = Y(this.c.m.Ba, d.frames[Math.max(this.Ak, 0)]);
					a.ri(d, b + d.Hb, c + d.Cb, 0, 1, 1, this.ea.$e, this.ea.De);
					break;
				case 2:
				case 3:
					e = this.Ce;
					f = this.Eu;
					switch (d.Mm)
					{
						case 1:
							a.Ae(b, c, g, k, e, this.ea.$e, this.ea.De);
							break;
						case 2:
							0 != (d.Ro & 256) && (dl = e, e = f, f = dl),
								a.yC(b, c, g, k, e, f, 0 != d.bu, this.ea.$e, this.ea.De)
					}
					break;
				case 1:
					e = 0 == this.Tn ? za(this.hb, this.eg) : Ba(this.hb, this.eg);
					for (f = 0; f < e.length; f++) k = e.charCodeAt(f), g = 0, 45 == k ? g = d.frames[10] : 46 == k || 44 == k ? g = d.frames[12] : 43 == k ? g = d.frames[11] : 69 == k || 101 == k ? g = d.frames[13] : 48 <= k && 57 >= k && (g = d.frames[k - 48]), g = Y(this.c.m.Ba, g), null != g && (a.ri(g, b + g.Hb, c + g.Cb, 0, 1, 1, this.ea.$e, this.ea.De), b += g.width);
					break;
				case 5:
					this.Ec.$c(a, b, c, this.ea.$e, this.ea.De)
			}
		}
	},
	Br: function(a)
	{
		this.ea.$e = Qd;
		this.ea.De = a
	}
});

function Ih()
{
	this.type = this.Ce = this.Ee = this.Df = this.Cf = this.hb = this.pp = 0;
	this.ib = !0;
	this.jj = 0;
	this.Ta = null;
	this.eg = 0;
	this.mb = null;
	this.Zg = 0;
	this.alpha = 1;
	this.Yn = "source-over";
	this.Ag = !1
}
Ih.prototype = m(new Eh,
{
	za: function()
	{
		this.Ee = -1;
		this.Ce = 0;
		var a = this.ga.Cc;
		this.da = this.Cf = a.zl;
		this.ca = this.Df = a.Al;
		this.type = a.ki;
		this.Ce = a.hk;
		this.pp = a.OB;
		this.hb = ue(this.c.m)[this.pp - 1];
		this.eg = a.Ro;
		if (5 == this.type)
		{
			var b = this.Ee; - 1 == b && (b = a.Om);
			this.font = Mi(this.c.m.td, b);
			this.Zg = this.font.Ui()
		}
	},
	Vc: function() {},
	handle: function()
	{
		var a = ue(this.c.m)[this.pp - 1];
		a != this.hb && (this.hb = a, this.xc());
		this.ea.handle();
		this.b.fa && (this.b.fa = !1)
	},
	dl: function()
	{
		var a = this.ga.Cc;
		if (5 == a.ki)
		{
			var b = this.Ee; -
			1 == b && (b = a.Om);
			return Ni(Mi(this.c.m.td, b))
		}
		return null
	},
	yr: function(a, b)
	{
		5 == type && (this.Ee = Li(hoAdRunHeader.m.td, a), a = Mi(this.c.m.td, this.Ee), this.Zg = a.Ui(), null != b && (this.da = this.Cf = b.right - b.left, this.ca = this.Df = b.bottom - b.top), this.xc())
	},
	DA: function()
	{
		return this.Ce
	},
	OC: function(a)
	{
		this.Ce = a;
		this.xc()
	},
	Op: function(a, b, c, d, e, f)
	{
		null != this.ga.Cc && 1 != this.Mb && (this.Mb = !0, this.ib = e, this.mb = this.c.N.kc[c], this.Ta = d ? this.mb.ld : this.mb.Pb, 0 > f ? Zf(this.Ta, this) : dk(this.Ta, this, f), 5 != this.type && this.xc())
	},
	rm: function()
	{
		if (null == this.ga.Cc || 0 == this.Mb) return -1;
		this.Mb = !1;
		var a = this.Ta.sf(this);
		this.Ta.removeChild(this);
		return a
	},
	sf: function()
	{
		return this.Mb ? this.Ta.sf(this) : -1
	},
	pq: function()
	{
		return this.Mb ? this.Ta.children.length : -1
	},
	ph: function(a)
	{
		this.Mb && this.Ta.ph(this, a)
	},
	sp: function()
	{
		null != this.ga.Cc && 0 == this.ib && (this.ib = !0, this.xc())
	},
	mo: function()
	{
		null != this.ga.Cc && 1 == this.ib && (this.ib = !1)
	},
	eI: function(a)
	{
		a != this.hb && (this.hb = a, this.xc())
	},
	Yk: function()
	{
		this.Ag || this.xc()
	},
	xc: function()
	{
		this.Ag = !0;
		this.da = this.ca = 1;
		if (null != this.ga.Cc)
		{
			var a = this.ga.Cc,
				b, c = za(this.hb, this.eg);
			switch (a.ki)
			{
				case 1:
					var d, e, f = 0,
						g = 0;
					for (d = c.length - 1; 0 <= d; d--) e = c.charCodeAt(d), b = 0, 45 == e ? b = a.frames[10] : 46 == e ? b = a.frames[12] : 43 == e ? b = a.frames[11] : 101 == e || 69 == e ? b = a.frames[13] : 48 <= e && 57 >= e && (b = a.frames[e - 48]), 0 <= b && (b = Y(this.c.m.Ba, b), f += b.width, g = Math.max(g, b.height));
					this.Wa = f;
					this.Xa = g;
					this.da = f;
					this.ca = g;
					break;
				case 5:
					this.Wa = a = null != this.Ec ? this.Ec.measureText(c, this.font) : (new $a(this.c.m, 8, 8)).measureText(c, this.font),
						this.Xa = this.Df / 2 + this.Zg / 2, this.da = a, this.ca = this.Zg, null == this.Ec ? this.Ec = new $a(this.c.m, this.da, this.ca) : (this.da > this.Ec.width || this.ca > this.Ec.height) && this.Ec.resize(this.da, this.ca), db(this.Ec, c, 0, new ra(0, 0, 1E3, 1E3), this.font, this.Ce)
			}
		}
	},
	$c: function(a, b, c)
	{
		if (this.ib && this.Ag)
		{
			this.globalAlpha = this.alpha;
			this.globalCompositeOperation = this.Yn;
			var d = this.ga.Cc;
			b = b + this.A - this.Wa - this.c.Ha + this.mb.x;
			var e = c + this.w - this.Xa - this.c.Oa + this.mb.y;
			c = za(this.hb, this.eg);
			switch (this.type)
			{
				case 1:
					var f,
						g;
					for (f = 0; f < c.length; f++)
					{
						var k = c.charCodeAt(f);
						g = 0;
						45 == k ? g = d.frames[10] : 46 == k || 44 == k ? g = d.frames[12] : 43 == k ? g = d.frames[11] : 69 == k || 101 == k ? g = d.frames[13] : 48 <= k && 57 >= k && (g = d.frames[k - 48]);
						g = Y(this.c.m.Ba, g);
						a.ri(g, b + g.Hb, e + g.Cb, 0, 1, 1, this.ea.$e, this.ea.De);
						b += g.width
					}
					break;
				case 5:
					this.Ec.$c(a, b, e, this.ea.$e, this.ea.De)
			}
		}
	},
	Br: function(a)
	{
		this.ea.$e = Qd;
		this.ea.De = a
	}
});

function Jh()
{
	this.type = this.Ce = this.Ee = this.Df = this.Cf = this.hb = this.pp = 0;
	this.ib = !0;
	this.jj = 0;
	this.Ta = null;
	this.eg = 0;
	this.mb = null;
	this.Zg = 0;
	this.alpha = 1;
	this.Yn = "source-over";
	this.Ag = !1
}
Jh.prototype = m(new Eh,
{
	za: function()
	{
		this.Ee = -1;
		this.Ce = 0;
		var a = this.ga.Cc;
		this.da = this.Cf = a.zl;
		this.ca = this.Df = a.Al;
		this.type = a.ki;
		this.Ce = a.hk;
		this.pp = a.OB;
		this.hb = ve(this.c.m)[this.pp - 1];
		this.eg = a.Ro;
		if (5 == this.type)
		{
			var b = this.Ee; - 1 == b && (b = a.Om);
			this.font = Mi(this.c.m.td, b);
			this.Zg = this.font.Ui()
		}
	},
	Vc: function() {},
	handle: function()
	{
		var a = ve(this.c.m)[this.pp - 1];
		a != this.hb && (this.hb = a, this.xc());
		this.ea.handle();
		this.b.fa && (this.b.fa = !1)
	},
	dl: function()
	{
		var a = this.ga.Cc;
		if (5 == a.ki)
		{
			var b = this.Ee; -
			1 == b && (b = a.Om);
			return Ni(Mi(this.c.m.td, b))
		}
		return null
	},
	yr: function(a, b)
	{
		5 == type && (this.Ee = Li(hoAdRunHeader.m.td, a), a = Mi(this.c.m.td, this.Ee), this.Zg = a.Ui(), null != b && (this.da = this.Cf = b.right - b.left, this.ca = this.Df = b.bottom - b.top), this.xc())
	},
	DA: function()
	{
		return this.Ce
	},
	OC: function(a)
	{
		this.Ce = a;
		this.xc()
	},
	Op: function(a, b, c, d, e, f)
	{
		null != this.ga.Cc && 1 != this.Mb && (this.Mb = !0, this.ib = e, this.mb = this.c.N.kc[c], this.Ta = d ? this.mb.ld : this.mb.Pb, 0 > f ? Zf(this.Ta, this) : dk(this.Ta, this, f), 5 != this.type && this.xc())
	},
	rm: function()
	{
		if (null == this.ga.Cc || 0 == this.Mb) return -1;
		this.Mb = !1;
		var a = this.Ta.sf(this);
		this.Ta.removeChild(this);
		return a
	},
	sf: function()
	{
		return this.Mb ? this.Ta.sf(this) : -1
	},
	pq: function()
	{
		return this.Mb ? this.Ta.children.length : -1
	},
	ph: function(a)
	{
		this.Mb && this.Ta.ph(this, a)
	},
	sp: function()
	{
		null != this.ga.Cc && 0 == this.ib && (this.ib = !0, this.xc())
	},
	mo: function()
	{
		null != this.ga.Cc && 1 == this.ib && (this.ib = !1)
	},
	eI: function(a)
	{
		a != this.hb && (this.hb = a, this.xc())
	},
	Yk: function()
	{
		this.Ag || this.xc()
	},
	xc: function()
	{
		this.Ag = !0;
		this.da = this.ca = 1;
		if (null != this.ga.Cc)
		{
			var a = this.ga.Cc;
			switch (a.ki)
			{
				case 4:
					if (0 != this.hb)
					{
						var b = Y(this.c.m.Ba, a.frames[0]),
							c = this.hb * b.width;
						c <= this.Cf ? (this.da = c, this.ca = b.height) : (this.da = this.Cf, this.ca = (this.Cf / b.width + this.hb - 1) * b.height);
						break
					}
					this.da = this.ca = 1;
					break;
				case 1:
					var d, e, b, f = 0,
						g = 0,
						c = za(this.hb, this.eg);
					for (d = c.length - 1; 0 <= d; d--) b = c.charCodeAt(d), e = 0, 45 == b ? e = a.frames[10] : 46 == b ? e = a.frames[12] : 43 == b ? e = a.frames[11] : 101 == b || 69 == b ? e = a.frames[13] : 48 <= b && 57 >= b && (e = a.frames[b - 48]), 0 <=
						e && (b = Y(this.c.m.Ba, e), f += b.width, g = Math.max(g, b.height));
					this.Wa = f;
					this.Xa = g;
					this.da = f;
					this.ca = g;
					break;
				case 5:
					c = za(this.hb, this.eg), this.Wa = a = null != this.Ec ? this.Ec.measureText(c, this.font) : (new $a(this.c.m, 8, 8)).measureText(c, this.font), this.Xa = this.Df / 2 + this.Zg / 2, this.da = a, this.ca = this.Zg, null == this.Ec ? this.Ec = new $a(this.c.m, this.da, this.ca) : (this.da > this.Ec.width || this.ca > this.Ec.height) && this.Ec.resize(this.da, this.ca), db(this.Ec, c, 0, new ra(0, 0, 1E3, 1E3), this.font, this.Ce)
			}
		}
	},
	$c: function(a, b,
		c)
	{
		if (this.ib && this.Ag)
		{
			this.globalAlpha = this.alpha;
			this.globalCompositeOperation = this.Yn;
			var d, e = this.ga.Cc;
			b = b + this.A - this.Wa - this.c.Ha + this.mb.x;
			c = c + this.w - this.Xa - this.c.Oa + this.mb.y;
			switch (this.type)
			{
				case 1:
					var f, g;
					d = za(this.hb, this.eg);
					for (f = 0; f < d.length; f++)
					{
						var k = d.charCodeAt(f);
						g = 0;
						45 == k ? g = e.frames[10] : 46 == k || 44 == k ? g = e.frames[12] : 43 == k ? g = e.frames[11] : 69 == k || 101 == k ? g = e.frames[13] : 48 <= k && 57 >= k && (g = e.frames[k - 48]);
						g = Y(this.c.m.Ba, g);
						a.ri(g, b + g.Hb, c + g.Cb, 0, 1, 1, this.ea.$e, this.ea.De);
						b += g.width
					}
					break;
				case 4:
					if (0 != this.hb)
					{
						d = b + this.da;
						f = c + this.ca;
						var k = b,
							h = this.hb;
						for (g = Y(this.c.m.Ba, e.frames[0]); c < f && 0 < h; c += g.height)
							for (b = k; b < d && 0 < h; b += g.width, --h) a.ri(g, b + g.Hb, c + g.Cb, 0, 1, 1, this.ea.$e, this.ea.De)
					}
					break;
				case 5:
					this.Ec.$c(a, b, c, this.ea.$e, this.ea.De)
			}
		}
	},
	Br: function(a)
	{
		this.ea.$e = Qd;
		this.ea.De = a
	}
});

function Gh()
{
	this.vr = null;
	this.Fu = this.Ee = this.Oc = this.af = 0;
	this.font = null;
	this.ib = !0;
	this.XH = this.Vb = 0;
	this.Ta = this.mb = null;
	this.Mb = !1;
	this.rect = new ra;
	this.Df = this.Cf = this.deltaY = 0;
	this.Ec = null;
	this.Ag = !1
}
Gh.prototype = m(new Eh,
{
	za: function(a, b)
	{
		var c = a.kf;
		this.da = c.bC;
		this.ca = c.cC;
		this.Cf = c.bC;
		this.Df = c.cC;
		this.af = c.Uo;
		this.Fu = 0;
		0 < c.Cd.length && (this.Fu = c.Cd[0].XC);
		this.vr = null;
		this.Ee = -1;
		this.Oc = 0;
		this.ib = !0;
		this.XH = b.Is;
		0 != (b.Is & bc) && 0 < c.Cd.length && (this.vr = c.Cd[0].Rl);
		var d = this.Ee; - 1 == d && 0 < c.Cd.length && (d = c.Cd[0].Fr);
		this.font = Mi(this.c.m.td, d);
		this.Ec = new $a(this.c.m, this.da, this.ca)
	},
	Vc: function() {},
	handle: function()
	{
		this.ea.handle();
		this.b.fa && (this.b.fa = !1)
	},
	dl: function()
	{
		var a = this.Ee; - 1 ==
			a && (a = this.ga.kf.Cd[0].Fr);
		return Ni(Mi(this.c.m.td, a))
	},
	yr: function(a, b)
	{
		this.Ee = Li(this.c.m.td, a);
		this.font = Mi(this.c.m.td, this.Ee);
		null != b && (this.da = b.right - b.left, this.ca = b.bottom - b.top, this.Ec.resize(this.da, this.ca));
		this.b.fa = !0;
		this.xc()
	},
	DA: function()
	{
		return this.Fu
	},
	OC: function(a)
	{
		this.Fu = a;
		this.xc()
	},
	Op: function(a, b, c, d, e, f)
	{
		1 != this.Mb && (this.Mb = !0, this.ib = e, this.mb = this.c.N.kc[c], this.Ta = d ? this.mb.ld : this.mb.Pb, 0 > f ? Zf(this.Ta, this) : dk(this.Ta, this, f))
	},
	rm: function()
	{
		if (0 == this.Mb) return -1;
		this.Mb = !1;
		var a = this.Ta.sf(this);
		this.Ta.removeChild(this);
		return a
	},
	sf: function()
	{
		return this.Mb ? this.Ta.sf(this) : -1
	},
	pq: function()
	{
		return this.Mb ? this.Ta.children.length : -1
	},
	ph: function(a)
	{
		this.Mb && this.Ta.ph(this, a)
	},
	sp: function()
	{
		0 == this.ib && (this.ib = !0)
	},
	mo: function()
	{
		1 == this.ib && (this.ib = !1)
	},
	qQ: function(a)
	{
		-1 > a && (a = -1);
		a >= this.af && (a = this.af - 1);
		if (a == this.Oc) return !1;
		this.Oc = a;
		0 <= a && this.LN(this.ga.kf.Cd[this.Oc].Rl);
		this.xc();
		return 0 != (this.ea.Ja & Uh) ? !1 : !0
	},
	LN: function(a)
	{
		this.vr = a;
		this.xc()
	},
	Yk: function()
	{
		this.Ag || this.xc()
	},
	xc: function()
	{
		this.Ag = !0;
		var a = this.ga.kf,
			b = a.Cd[0].Nu;
		this.Xa = this.Wa = 0;
		this.rect.left = 0;
		this.rect.top = 0;
		this.rect.right = this.da;
		this.rect.bottom = this.ca;
		0 <= this.Oc ? a = a.Cd[this.Oc].Rl : (a = this.vr, null == a && (a = ""));
		b &= 47;
		a = db(this.Ec, a, b, this.rect, this.font, this.Fu);
		0 == (b & 12) && (this.ca = a)
	},
	Br: function(a)
	{
		this.ea.$e = Qd;
		this.ea.De = a
	},
	$c: function(a, b, c)
	{
		this.ib && this.Ag && this.Ec.$c(a, b + this.A - this.c.Ha + this.mb.x, c + this.w - this.c.Oa + this.mb.y, this.ea.$e, this.ea.De)
	}
});

function Hh()
{
	this.Df = this.Cf = 0;
	this.rg = null;
	this.Zn = 0;
	this.Fk = []
}
Hh.prototype = m(new Eh,
{
	za: function() {},
	Vc: function() {},
	handle: function()
	{
		this.c.pause();
		this.c.Fx = this;
		Zf(this.c.N.kc[this.c.N.We - 1].Pb, this);
		this.VK()
	},
	dw: function()
	{
		this.c.N.kc[this.c.N.We - 1].Pb.removeChild(this)
	},
	uL: function()
	{
		var a;
		a = this.c.m.hj - this.c.m.vj;
		var b = this.c.m.ij - this.c.m.xj;
		0 == this.Zn ? this.c.m.vf[200] && (a = this.BF(a, b), 0 != a && (this.Zn = a)) : this.c.m.vf[200] || (this.BF(a, b) == this.Zn ? (this.c.u.Ld = this.Zn, kh(this.c.u, this, -5439484), 0 != (this.ga.kf.Cd[this.Zn].Nu & 256) ? kh(this.c.u, this, -5308412) :
			kh(this.c.u, this, -5373948), this.dw(), this.c.Fx = null, this.c.resume(), Ah(this.c, this.zc, !0)) : this.Zn = 0)
	},
	BF: function(a, b)
	{
		var c;
		if (null != this.rg)
			for (c = 1; c < this.rg.length; c++)
				if (a >= this.rg[c].left && a < this.rg[c].right && b > this.rg[c].top && b < this.rg[c].bottom) return c;
		return 0
	},
	nE: function(a, b, c)
	{
		var d, e;
		c ? (d = 8421504, e = 16777215) : (e = 8421504, d = 16777215);
		a.Ox(b.left, b.top, b.right - b.left, b.bottom - b.top, 0, 1);
		var f = Array(3),
			g;
		for (g = 0; 3 > g; g++) f[g] = new Ya;
		f[0].x = b.right - 1;
		0 == c && --f[0].x;
		f[0].y = b.top + 1;
		f[1].y = b.top +
			1;
		f[1].x = b.left + 1;
		f[2].x = b.left + 1;
		f[2].y = b.bottom;
		0 == c && --f[2].y;
		a.Xf(f[0].x, f[0].y, f[1].x, f[1].y, d, 1);
		a.Xf(f[1].x, f[1].y, f[2].x, f[2].y, d, 1);
		0 == c && --f[0].x;
		f[0].y += 1;
		f[1].x += 1;
		f[1].y += 1;
		f[2].x += 1;
		0 == c && --f[2].y;
		a.Xf(f[0].x, f[0].y, f[1].x, f[1].y, d, 1);
		a.Xf(f[1].x, f[1].y, f[2].x, f[2].y, d, 1);
		0 == c && (f[0].x += 2, f[1].x = b.right - 1, f[1].y = b.bottom - 1, f[2].y = b.bottom - 1, --f[2].x, a.Xf(f[0].x, f[0].y, f[1].x, f[1].y, e, 1), a.Xf(f[1].x, f[1].y, f[2].x, f[2].y, e, 1), --f[0].x, f[0].y += 1, --f[1].x, --f[1].y, f[2].x += 1, --f[2].y, a.Xf(f[0].x,
			f[0].y, f[1].x, f[1].y, e, 1), a.Xf(f[1].x, f[1].y, f[2].x, f[2].y, e, 1))
	},
	aN: function(a, b, c)
	{
		var d = new ra;
		sa(d, this.rg[b]);
		this.nE(a, this.rg[b], c);
		d.left += 2;
		d.top += 2;
		d.right -= 4;
		d.bottom -= 4;
		c && (d.left += 2, d.top += 2);
		this.Fk[b].$c(a, (d.left + d.right) / 2 - this.Fk[b].width / 2, (d.top + d.bottom) / 2 - this.Fk[b].height / 2, 0, 0)
	},
	VK: function()
	{
		this.gx = new $a(this.c.m, 8, 8);
		var a = this.ga.kf,
			b = this.c,
			c = a.Cd[1],
			d = c.XC,
			e = 0 != (c.Nu & 512),
			f = Mi(b.m.td, c.Fr);
		this.ty = Math.floor(3 * this.gx.measureText("X", f) / 2);
		this.vm = 4;
		this.jg = 64;
		var g;
		for (g = 1; g < a.Cd.length; g++) c = a.Cd[g], 0 < c.Rl.length && (c = this.gx.measureText(c.Rl, f), this.jg = Math.max(this.jg, c + 2 * this.ty + 4), this.vm = Math.max(this.vm, Math.floor(3 * f.Ui() / 2)));
		this.xw = Math.max(Math.floor(this.vm / 4), 2);
		this.jg += 2 * this.ty + 4;
		var k = new ra;
		for (g = 1; g < a.Cd.length; g++) c = a.Cd[g], this.Fk[g] = new $a(b.m, this.jg, this.vm), k.right = this.jg, k.bottom = this.vm, bb(this.Fk[g], c.Rl, k, d, f, e ? 1 : 0, 16777215);
		a = a.Cd[0];
		e = 0 != (a.Nu & 512);
		f = Mi(b.m.td, a.Fr);
		g = Math.floor(3 * this.gx.measureText("X", f) / 2);
		c = this.gx.measureText(a.Rl,
			f);
		this.ht = Math.floor(3 * f.Ui() / 2);
		this.jg = Math.max(this.jg, c + 2 * g + 4);
		this.jg > b.m.$a ? this.jg = b.m.$a : this.jg > b.N.Mf && (this.jg = b.N.Mf);
		k.right = this.jg;
		k.bottom = this.ht;
		this.Fk[0] = new $a(b.m, this.jg, this.ht);
		bb(this.Fk[0], a.Rl, k, d, f, e ? 1 : 0, 16777215)
	},
	$c: function(a)
	{
		var b = this.ga.kf,
			c = this.c,
			d = this.A - c.Ha,
			c = this.w - c.Oa,
			e = new ra;
		e.left = d;
		e.top = c;
		var f = this.ht + 1 + (this.vm + this.xw) * (b.Cd.length - 1) + this.xw + 4;
		e.right = d + this.jg;
		e.bottom = c + f;
		a.Ae(e.left, e.top, e.right - e.left, e.bottom - e.top, 12632256, 0, 0);
		this.nE(a,
			e, !1);
		e.left += 2;
		e.top += 2;
		e.right -= 2;
		e.bottom = e.top + this.ht;
		this.Fk[0].$c(a, (e.left + e.right) / 2 - this.Fk[0].width / 2, (e.top + e.bottom) / 2 - this.Fk[0].height / 2, 0, 0);
		e.top = e.bottom;
		a.Xf(e.left, e.top, e.right, e.bottom, 8421504, 1, 0, 0);
		e.top += 1;
		e.bottom += 1;
		a.Xf(e.left, e.top, e.right, e.bottom, 16777215, 1, 0, 0);
		if (null == this.rg)
			for (this.rg = Array(b.Cd.length), ek = 1; ek < b.Cd.length; ek++) this.rg[ek] = new ra, this.rg[ek].left = d + 2 + this.ty, this.rg[ek].right = d + this.jg - 2 - this.ty, this.rg[ek].top = c + 2 + this.ht + 1 + this.xw + (this.vm + this.xw) *
				(ek - 1), this.rg[ek].bottom = this.rg[ek].top + this.vm;
		for (ek = 1; ek < b.Cd.length; ek++) this.aN(a, ek, this.Zn == ek)
	}
});

function Mh(a, b)
{
	this.ext = b.m.lw.Iw(a);
	this.HB = !1;
	this.IB = this.$t = this.fC = 0;
	this.Mb = !1;
	this.ib = !0;
	this.Ta = this.mb = null
}
Mh.prototype = m(new Eh,
{
	za: function(a, b)
	{
		this.ext.za(this);
		var c = Ua(this.c.m.file, a.$G);
		this.fC = a.aH;
		this.ext.JE(c, b, a.bH)
	},
	nz: function(a, b, c, d, e)
	{
		this.mb = this.c.N.kc[d];
		this.ib = e;
		1 != this.Mb && (this.Mb = !0, this.Ta = this.mb.Pb, Zf(this.Ta, this))
	},
	Op: function(a, b, c, d, e)
	{
		this.mb = this.c.N.kc[c];
		this.ib = e;
		1 != this.Mb && (this.Mb = !0, this.Ta = d ? this.mb.ld : this.mb.Pb, Zf(this.Ta, this))
	},
	rm: function()
	{
		if (0 == this.Mb) return -1;
		this.Mb = !1;
		var a = this.Ta.sf(this);
		this.Ta.removeChild(this);
		return a
	},
	handle: function()
	{
		0 != (this.Ya &
			512) ? this.ea.handle() : 16 == (this.Ya & 48) || 48 == (this.Ya & 48) ? this.J.move() : 32 == (this.Ya & 48) && ki(this.Ca);
		var a = 0;
		0 == this.HB && (a = this.ext.HA());
		0 != (a & fk) && (this.HB = !0);
		null != this.b && this.b.fa && (this.b.fa = !1)
	},
	km: function()
	{
		this.ext.km()
	},
	IE: function() {},
	$c: function() {},
	Vc: function(a)
	{
		this.ext.jA(a)
	},
	qL: function()
	{
		return null
	},
	Xv: function(a, b)
	{
		return this.ext.Xv(a, b)
	},
	action: function(a, b)
	{
		this.ext.action(a, b)
	},
	kw: function(a)
	{
		return this.ext.kw(a)
	},
	Br: function(a)
	{
		this.ea.$e = Qd;
		this.ea.De = a
	},
	lQ: function() {},
	sp: function()
	{
		this.ib = !0
	},
	mo: function()
	{
		this.ib = !1
	},
	sf: function()
	{
		return this.Ta.sf(this)
	},
	pq: function()
	{
		return this.Ta.children.length
	},
	ph: function(a)
	{
		a >= this.Ta.children.length && (a = this.Ta.children.length);
		0 > a && (a = 0);
		this.Ta.ph(this, a)
	},
	CM: function() {},
	XK: function() {},
	nq: function()
	{
		this.ext.nq()
	},
	QF: function(a)
	{
		this.c.m.Ba.QF(a)
	},
	xP: function(a)
	{
		return Y(this.c.m.Ba, a)
	},
	pP: function()
	{
		return this.c.m
	},
	AP: function()
	{
		return this.A
	},
	BP: function()
	{
		return this.w
	},
	zP: function()
	{
		return this.da
	},
	Ui: function()
	{
		return this.ca
	},
	fI: function(a)
	{
		null != this.J ? this.J.xa.Fe(a) : (this.A = a, null != this.b && (this.b.fa = !0, this.b.Wb = !0))
	},
	gI: function(a)
	{
		null != this.J ? this.J.xa.Ge(a) : (this.w = a, null != this.b && (this.b.fa = !0, this.b.Wb = !0))
	},
	QC: function(a)
	{
		this.da = a
	},
	PC: function(a)
	{
		this.ca = a
	},
	Ju: function(a, b)
	{
		this.da = a;
		this.ca = b
	},
	ZP: function()
	{
		this.HB = !1
	},
	te: function(a, b)
	{
		if (0 == this.c.pj)
		{
			var c = this.c.u.Ld;
			this.c.u.Ld = b;
			a = -(a + 80 + 1) << 16 | this.rb & 65535;
			kh(this.c.u, this, a);
			this.c.u.Ld = c
		}
	},
	PP: function(a, b)
	{
		if (0 == this.c.pj)
		{
			a = -(a + 80 + 1) << 16 | this.rb &
				65535;
			var c = this.c.u,
				d = new Fj(a, b, this, this.jc);
			null == c.hp && (c.hp = new W);
			c.hp.add(d)
		}
	},
	pause: function()
	{
		this.c.pause()
	},
	resume: function()
	{
		this.c.resume()
	},
	$P: function() {},
	XO: function()
	{
		gc(this.c, this.zc)
	},
	setPosition: function(a, b)
	{
		null != this.J ? (this.J.xa.Fe(a), this.J.xa.Ge(b)) : (this.A = a, this.w = b, null != this.b && (this.b.fa = !0, this.b.Wb = !0))
	},
	sP: function()
	{
		return this.fC
	},
	kQ: function(a)
	{
		this.fC = a
	},
	zv: function(a, b, c, d, e)
	{
		this.c.zv(a, b, c, e, d, !0)
	},
	qP: function()
	{
		return this.c.jp
	},
	Kj: function()
	{
		this.c.ui++;
		return this.c.getExpression()
	},
	rP: function()
	{
		return this.c.u.Ld
	},
	tE: function(a, b, c)
	{
		return 0 != (a.Ya & Lg) && a.b.md == Mg ? a.J.xa.tE(b, c) : 0
	},
	tP: function()
	{
		this.IB = this.$t = 0;
		return this.rL()
	},
	rL: function()
	{
		if (this.IB < this.c.Tb)
		{
			for (; null == this.c.W[this.$t];) this.$t++;
			var a = this.c.W[this.$t];
			this.IB++;
			this.$t++;
			return a
		}
		return null
	},
	yP: function(a)
	{
		var b = 0,
			c;
		for (c = 0; c < this.c.Tb; c++)
		{
			for (; null == this.c.W[b];) b++;
			var d = this.c.W[b];
			b++;
			if ((d.um << 16 | d.zc & 65535) == a) return d
		}
		return null
	},
	pF: function(a)
	{
		return this.c.pF(a)
	},
	qF: function(a)
	{
		return this.c.qF(a)
	},
	yM: function(a)
	{
		return hoAdRunHeader.m.yM(a)
	},
	LO: function() {}
});

function Rc(a)
{
	var b = a.file.Ga,
		c = null,
		d = T(a.file),
		e = T(a.file);
	switch (e)
	{
		case 1:
			c = new gk(a);
			break;
		case 2:
			c = new hk(a);
			break;
		case 3:
			c = new qk(a);
			break;
		case 4:
			c = new qk(a);
			break;
		case 5:
			c = new rk(a);
			break;
		case 6:
			c = new sb(a);
			break;
		case 9:
			c = new sk(a);
			break;
		case 10:
			c = new qk(a);
			break;
		case 11:
			c = new qk(a);
			break;
		case 12:
			c = new qk(a);
			break;
		case 13:
			c = new tk(a);
			break;
		case 14:
			c = new uk(a);
			break;
		case 15:
			c = new vk(a);
			break;
		case 16:
			c = new wk(a);
			break;
		case 17:
			c = new qk(a);
			break;
		case 18:
			c = new xk(a);
			break;
		case 19:
			c = new yk(a);
			break;
		case 21:
			c = new sk(a);
			break;
		case 22:
			c = new vk(a);
			break;
		case 23:
			c = new vk(a);
			break;
		case 24:
			c = new zk(a);
			break;
		case 25:
			c = new rk(a);
			break;
		case 26:
			c = new qk(a);
			break;
		case 27:
			c = new vk(a);
			break;
		case 28:
			c = new vk(a);
			break;
		case 29:
			c = new rk(a);
			break;
		case 31:
			c = new qk(a);
			break;
		case 32:
			c = new qk(a);
			break;
		case 34:
			c = new rk(a);
			break;
		case 35:
			c = new sb(a);
			break;
		case 36:
			c = new sb(a);
			break;
		case 37:
			c = new qk(a);
			break;
		case 38:
			c = new Ak(a);
			break;
		case 39:
			c = new Bk(a);
			break;
		case 40:
			c = new Ck(a);
			break;
		case 41:
			c = new Ck(a);
			break;
		case 42:
			c =
				new Dk(a);
			break;
		case 43:
			c = new qk(a);
			break;
		case 44:
			c = new uk(a);
			break;
		case 45:
			c = new vk(a);
			break;
		case 46:
			c = new vk(a);
			break;
		case 47:
			c = new Ek(a);
			break;
		case 48:
			c = new rk(a);
			break;
		case 49:
			c = new qk(a);
			break;
		case 50:
			c = new qk(a);
			break;
		case 51:
			c = new Ek(a);
			break;
		case 52:
			c = new vk(a);
			break;
		case 53:
			c = new vk(a);
			break;
		case 54:
			c = new vk(a);
			break;
		case 55:
			c = new Fk(a);
			break;
		case 56:
			c = new rk(a);
			break;
		case 57:
			c = new qk(a);
			break;
		case 58:
			c = new qk(a);
			break;
		case 59:
			c = new vk(a);
			break;
		case 60:
			c = new qk(a);
			break;
		case 61:
			c = new qk(a);
			break;
		case 62:
			c = new vk(a);
			break;
		case 63:
			c = new Ck(a);
			break;
		case 64:
			c = new Ck(a);
			break;
		case 67:
			c = new qk(a)
	}
	c.code = e;
	a.file.seek(b + d);
	return c
}

function Fb()
{
	this.sq = this.dir = this.y = this.x = 0;
	this.Sz = !1
}

function Ek(a)
{
	T(a.file);
	this.zI = T(a.file)
}

function Dk(a)
{
	this.vi = F(a.file);
	this.$A = F(a.file);
	this.Xn = T(a.file)
}

function zk(a)
{
	this.color = Ta(a.file)
}

function tk(a)
{
	this.gq = F(a.file);
	this.SK = F(a.file)
}

function vk(a)
{
	this.Xn = T(a.file);
	for (var b = a.file.Ga, c = 0, d;;)
	{
		c++;
		d = F(a.file);
		if (0 == d) break;
		d = T(a.file);
		6 < d && V(a.file, d - 6)
	}
	a.file.seek(b);
	this.ab = Array(c);
	for (b = 0; b < c; b++)
	{
		d = this.ab;
		var e = b,
			f, g = a.file,
			k = g.Ga,
			h, p = F(g);
		switch (p)
		{
			case 0:
				h = new ld;
				break;
			case 131072:
				h = new EXP_PLUS;
				break;
			case 262144:
				h = new EXP_MINUS;
				break;
			case 393216:
				h = new EXP_MULT;
				break;
			case 524288:
				h = new EXP_DIV;
				break;
			case 655360:
				h = new EXP_MOD;
				break;
			case 786432:
				h = new EXP_POW;
				break;
			case 917504:
				h = new EXP_AND;
				break;
			case 1048576:
				h = new EXP_OR;
				break;
			case 1179648:
				h = new EXP_XOR;
				break;
			case 65535:
				h = new md;
				break;
			case 131071:
				h = new EXP_RANDOM;
				break;
			case 196607:
				h = new EXP_VARGLO;
				break;
			case 262143:
				h = new vd;
				break;
			case 327679:
				h = new EXP_STR;
				break;
			case 393215:
				h = new EXP_VAL;
				break;
			case 458751:
			case 524287:
			case 589823:
			case 655359:
				h = new kd;
				break;
			case 720895:
				h = new EXP_SIN;
				break;
			case 786431:
				h = new EXP_COS;
				break;
			case 851967:
				h = new EXP_TAN;
				break;
			case 917503:
				h = new EXP_SQR;
				break;
			case 983039:
				h = new EXP_LOG;
				break;
			case 1048575:
				h = new EXP_LN;
				break;
			case 1114111:
				h = new EXP_HEX;
				break;
			case 1179647:
				h = new EXP_BIN;
				break;
			case 1245183:
				h = new EXP_EXP;
				break;
			case 1310719:
				h = new EXP_LEFT;
				break;
			case 1376255:
				h = new EXP_RIGHT;
				break;
			case 1441791:
				h = new EXP_MID;
				break;
			case 1507327:
				h = new EXP_LEN;
				break;
			case 1572863:
				h = new nd;
				break;
			case 1638399:
				h = new ud;
				break;
			case 1900543:
				h = new EXP_INT;
				break;
			case 1966079:
				h = new EXP_ABS;
				break;
			case 2031615:
				h = new EXP_CEIL;
				break;
			case 2097151:
				h = new EXP_FLOOR;
				break;
			case 2162687:
				h = new EXP_ACOS;
				break;
			case 2228223:
				h = new EXP_ASIN;
				break;
			case 2293759:
				h = new EXP_ATAN;
				break;
			case 2359295:
				h =
					new EXP_NOT;
				break;
			case 2686975:
				h = new EXP_MIN;
				break;
			case 2752511:
				h = new EXP_MAX;
				break;
			case 2818047:
				h = new EXP_GETRGB;
				break;
			case 2883583:
				h = new EXP_GETRED;
				break;
			case 2949119:
				h = new EXP_GETGREEN;
				break;
			case 3014655:
				h = new EXP_GETBLUE;
				break;
			case 3080191:
				h = new EXP_LOOPINDEX;
				break;
			case 3145727:
				h = new EXP_NEWLINE;
				break;
			case 3211263:
				h = new EXP_ROUND;
				break;
			case 3276799:
				h = new EXP_STRINGGLO;
				break;
			case 3342335:
				h = new sd;
				break;
			case 3407871:
				h = new EXP_LOWER;
				break;
			case 3473407:
				h = new EXP_UPPER;
				break;
			case 3538943:
				h = new EXP_FIND;
				break;
			case 3604479:
				h = new EXP_REVERSEFIND;
				break;
			case 3866623:
				h = new EXP_FLOATTOSTRING;
				break;
			case 3932159:
				h = new EXP_ATAN2;
				break;
			case 3997695:
				h = new ld;
				break;
			case 4063231:
				h = new kd;
				break;
			case 4128767:
				h = new EXP_DISTANCE;
				break;
			case 4194303:
				h = new EXP_ANGLE;
				break;
			case 4259839:
				h = new EXP_RANGE;
				break;
			case 4325375:
				h = new EXP_RANDOMRANGE;
				break;
			case 4456447:
				h = new EXP_RUNTIMENAME;
				break;
			case -1:
				h = new EXP_PARENTH1;
				break;
			case -65537:
				h = new EXP_PARENTH2;
				break;
			case -131073:
				h = new EXP_VIRGULE;
				break;
			case 65534:
				h = new EXP_GETSAMPLEMAINVOL;
				break;
			case 131070:
				h = new EXP_GETSAMPLEVOL;
				break;
			case 196606:
				h = new EXP_GETCHANNELVOL;
				break;
			case 262142:
				h = new ld;
				break;
			case 327678:
				h = new EXP_GETSAMPLEPAN;
				break;
			case 393214:
				h = new EXP_GETCHANNELPAN;
				break;
			case 458750:
				h = new EXP_GETSAMPLEPOS;
				break;
			case 524286:
				h = new EXP_GETCHANNELPOS;
				break;
			case 589822:
				h = new EXP_GETSAMPLEDUR;
				break;
			case 655358:
				h = new EXP_GETCHANNELDUR;
				break;
			case 720894:
				h = new EXP_GETSAMPLEFREQ;
				break;
			case 786430:
				h = new EXP_GETCHANNELFREQ;
				break;
			case 65533:
				h = new EXP_GAMLEVEL;
				break;
			case 131069:
				h = new EXP_GAMNPLAYER;
				break;
			case 196605:
				h = new EXP_PLAYXLEFT;
				break;
			case 262141:
				h = new EXP_PLAYXRIGHT;
				break;
			case 327677:
				h = new EXP_PLAYYTOP;
				break;
			case 393213:
				h = new EXP_PLAYYBOTTOM;
				break;
			case 458749:
				h = new EXP_PLAYWIDTH;
				break;
			case 524285:
				h = new EXP_PLAYHEIGHT;
				break;
			case 589821:
				h = new EXP_GAMLEVELNEW;
				break;
			case 655357:
				h = new EXP_GETCOLLISIONMASK;
				break;
			case 720893:
				h = new EXP_FRAMERATE;
				break;
			case 786429:
				h = new EXP_GETVIRTUALWIDTH;
				break;
			case 851965:
				h = new EXP_GETVIRTUALHEIGHT;
				break;
			case 917501:
				h = new EXP_GETFRAMEBKDCOLOR;
				break;
			case 983037:
				h =
					new ld;
				break;
			case 1048573:
				h = new ld;
				break;
			case 1114109:
				h = new EXP_FRAMEALPHACOEF;
				break;
			case 1179645:
				h = new EXP_FRAMERGBCOEF;
				break;
			case 1245181:
				h = new ld;
				break;
			case 65532:
				h = new EXP_TIMVALUE;
				break;
			case 131068:
				h = new EXP_TIMCENT;
				break;
			case 196604:
				h = new EXP_TIMSECONDS;
				break;
			case 262140:
				h = new EXP_TIMHOURS;
				break;
			case 327676:
				h = new EXP_TIMMINITS;
				break;
			case 393212:
				h = new EXP_EVENTAFTER;
				break;
			case 65530:
				h = new EXP_XMOUSE;
				break;
			case 131066:
				h = new EXP_YMOUSE;
				break;
			case 196602:
				h = new EXP_MOUSEWHEELDELTA;
				break;
			case 65529:
				h =
					new EXP_PLASCORE;
				break;
			case 131065:
				h = new EXP_PLALIVES;
				break;
			case 196601:
				h = new EXP_GETINPUT;
				break;
			case 262137:
				h = new EXP_GETINPUTKEY;
				break;
			case 327673:
				h = new EXP_GETPLAYERNAME;
				break;
			case 65531:
				h = new EXP_CRENUMBERALL;
				break;
			case 5242883:
				h = new EXP_STRNUMBER;
				break;
			case 5308419:
				h = new EXP_STRGETCURRENT;
				break;
			case 5373955:
				h = new EXP_STRGETNUMBER;
				break;
			case 5439491:
				h = new EXP_STRGETNUMERIC;
				break;
			case 5505027:
				h = new EXP_STRGETNPARA;
				break;
			case 5242882:
				h = new EXP_GETRGBAT;
				break;
			case 5308418:
				h = new EXP_GETSCALEX;
				break;
			case 5373954:
				h = new EXP_GETSCALEY;
				break;
			case 5439490:
				h = new EXP_GETANGLE;
				break;
			case 5242887:
				h = new EXP_CVALUE;
				break;
			case 5308423:
				h = new EXP_CGETMIN;
				break;
			case 5373959:
				h = new EXP_CGETMAX;
				break;
			case 5439495:
				h = new EXP_CGETCOLOR1;
				break;
			case 5505031:
				h = new EXP_CGETCOLOR2;
				break;
			case 5242889:
				h = new EXP_CCAGETFRAMENUMBER;
				break;
			case 5308425:
				h = new EXP_CCAGETGLOBALVALUE;
				break;
			case 5373961:
				h = new EXP_CCAGETGLOBALSTRING;
				break;
			default:
				switch (p & 4294901760)
				{
					case 65536:
						h = new EXP_EXTYSPR;
						break;
					case 131072:
						h = new EXP_EXTISPR;
						break;
					case 196608:
						h = new EXP_EXTSPEED;
						break;
					case 262144:
						h = new EXP_EXTACC;
						break;
					case 327680:
						h = new EXP_EXTDEC;
						break;
					case 393216:
						h = new EXP_EXTDIR;
						break;
					case 458752:
						h = new EXP_EXTXLEFT;
						break;
					case 524288:
						h = new EXP_EXTXRIGHT;
						break;
					case 589824:
						h = new EXP_EXTYTOP;
						break;
					case 655360:
						h = new EXP_EXTYBOTTOM;
						break;
					case 720896:
						h = new EXP_EXTXSPR;
						break;
					case 786432:
						h = new EXP_EXTIDENTIFIER;
						break;
					case 851968:
						h = new EXP_EXTFLAG;
						break;
					case 917504:
						h = new EXP_EXTNANI;
						break;
					case 983040:
						h = new EXP_EXTNOBJECTS;
						break;
					case 1048576:
						h =
							new od;
						break;
					case 1114112:
						h = new EXP_EXTGETSEMITRANSPARENCY;
						break;
					case 1179648:
						h = new EXP_EXTNMOVE;
						break;
					case 1245184:
						h = new qd;
						break;
					case 1310720:
						h = new EXP_EXTGETFONTNAME;
						break;
					case 1376256:
						h = new EXP_EXTGETFONTSIZE;
						break;
					case 1441792:
						h = new EXP_EXTGETFONTCOLOR;
						break;
					case 1507328:
						h = new EXP_EXTGETLAYER;
						break;
					case 1572864:
						h = new EXP_EXTGETGRAVITY;
						break;
					case 1638400:
						h = new EXP_EXTXAP;
						break;
					case 1703936:
						h = new EXP_EXTYAP;
						break;
					case 1769472:
						h = new EXP_EXTALPHACOEF;
						break;
					case 1835008:
						h = new EXP_EXTRGBCOEF;
						break;
					case 1900544:
						h = new ld;
						break;
					case 1966080:
						h = new wd;
						break;
					case 2031616:
						h = new yd;
						break;
					case 2097152:
						h = new EXP_EXTDISTANCE;
						break;
					case 2162688:
						h = new EXP_EXTANGLE;
						break;
					case 2228224:
						h = new EXP_EXTLOOPINDEX;
						break;
					case 2293760:
						h = new EXP_EXTGETFRICTION;
						break;
					case 2359296:
						h = new EXP_EXTGETRESTITUTION;
						break;
					case 2424832:
						h = new EXP_EXTGETDENSITY;
						break;
					case 2490368:
						h = new EXP_EXTGETVELOCITY;
						break;
					case 2555904:
						h = new EXP_EXTGETANGLE;
						break;
					case 2621440:
						h = new EXP_EXTWIDTH;
						break;
					case 2686976:
						h = new EXP_EXTHEIGHT;
						break;
					case 2752512:
						h = new EXP_EXTGETMASS;
						break;
					case 2818048:
						h = new EXP_EXTGETANGULARVELOCITY;
						break;
					case 2883584:
						h = new EXP_EXTGETNAME;
						break;
					default:
						h = new Gk
				}
		}
		if (null != h && (h.code = p, 0 != p))
		{
			var l = T(g);
			switch (p)
			{
				case 262143:
					h.pd = g.ed();
					break;
				case 65535:
					h.value = F(g);
					break;
				case 1572863:
					f = h;
					var r, u, q, v, n, w, D = g;
					w = D.oa();
					n = D.oa();
					v = D.oa();
					q = D.oa();
					u = D.oa();
					r = D.oa();
					p = D.oa();
					p = 72057594037927936 * D.oa() + 281474976710656 * p + 1099511627776 * r + 4294967296 * u + 16777216 * q + 65536 * v + 256 * n + w;
					0x7fffffffffffffff < p && (p -= 1.8446744073709552E19);
					f.value = p / 4294967296;
					break;
				case 1638399:
					V(g, 4);
					h.xl = T(g);
					break;
				case 3342335:
					V(g, 4);
					h.xl = T(g);
					break;
				default:
					if (f = p & 65535, 0 != (f & 32768) && (f -= 65536), 2 <= f || f == th) switch (h.Bl = S(g), h.Zd = S(g), p & 4294901760)
					{
						case 1048576:
							h.xl = T(g);
							break;
						case 1245184:
							h.xl = T(g)
					}
			}
			g.seek(k + l)
		}
		d[e] = h
	}
}

function Fk(a)
{
	var b = T(a.file);
	V(a.file, 4);
	this.data = 0;
	6 < b && (this.data = a.file.Ga, V(a.file, b - 6))
}
var tj = 1,
	rj = 4,
	sj = 8;

function Ak(a)
{
	this.Lj = T(a.file);
	this.tL = T(a.file)
}

function Bk(a)
{
	V(a.file, 4);
	this.Ga = 0;
	this.id = T(a.file)
}

function rk(a)
{
	this.value = F(a.file);
	this.zI = 0
}

function uk(a)
{
	this.key = T(a.file)
}

function gk(a)
{
	this.Zd = S(a.file);
	this.Bl = S(a.file);
	this.type = S(a.file)
}

function Hk()
{}
Hk.prototype = {};

function Gb(a, b, c, d)
{
	d.sq = -1;
	if (-1 == a.hu) 0 != c && (d.dir = -1, 0 == (a.Wo & 8) && (d.dir = Yg(b, a.wx))), d.x = a.zx, d.y = a.Ax, a = a.eC, a > b.N.We - 1 && (a = b.N.We - 1), d.sq = a, d.Sz = !1;
	else
	{
		b.u.cr = !1;
		var e;
		e = Ej(b.u, a.iu);
		d.Sz = b.u.Be;
		if (null == e) return !1;
		d.x = e.A;
		d.y = e.w;
		d.sq = e.ig;
		if (0 != (a.Wo & 2) && 0 != (e.Ya & hc) && 0 <= e.b.Jb)
		{
			var f;
			f = e.b.ac;
			var g = b.Yb(e);
			null != g && (f = g.BA());
			f = yi(b.m.Ba, e.b.Jb, f, e.b.bc, e.b.cc);
			d.x += f.Sl - f.Hb;
			d.y += f.Ul - f.Cb
		}
		0 != (a.Wo & 1) ? (f = a.dC + e.c.hd(e) & 31, g = a.xx * Ik[f] / 256, d.x += a.xx * Jk[f] / 256, d.y += g) : (d.x += a.zx, d.y += a.Ax);
		0 != (c & 1) && (d.dir = 0 != (a.Wo & 8) ? -1 : 0 != (a.Wo & 4) ? e.c.hd(e) : Yg(b, a.wx))
	}
	return 0 != (c & 2) && (d.x < b.ir || d.x > b.gr || d.y < b.mr || d.y > b.kr) ? !1 : !0
}

function wk(a)
{
	this.hu = S(a.file);
	this.Wo = S(a.file);
	this.zx = S(a.file);
	this.Ax = S(a.file);
	this.xx = S(a.file);
	this.dC = S(a.file);
	this.wx = F(a.file);
	this.yx = S(a.file);
	this.iu = S(a.file);
	this.eC = S(a.file)
}
wk.prototype = m(new Hk,
{});

function sk(a)
{
	this.hu = S(a.file);
	this.Wo = S(a.file);
	this.zx = S(a.file);
	this.Ax = S(a.file);
	this.xx = S(a.file);
	this.dC = S(a.file);
	this.wx = F(a.file);
	this.yx = S(a.file);
	this.iu = S(a.file);
	this.eC = S(a.file);
	this.Hs = T(a.file);
	this.cA = T(a.file)
}
sk.prototype = m(new Hk,
{});

function xk(a)
{
	this.hu = S(a.file);
	this.Wo = S(a.file);
	this.zx = S(a.file);
	this.Ax = S(a.file);
	this.xx = S(a.file);
	this.dC = S(a.file);
	this.wx = F(a.file);
	this.yx = S(a.file);
	this.iu = S(a.file);
	this.eC = S(a.file);
	this.Hs = S(a.file);
	this.cA = S(a.file);
	V(a.file, 4);
	this.GN = T(a.file)
}
xk.prototype = m(new Hk,
{});

function sb(a)
{
	this.ly = T(a.file);
	this.iI = T(a.file)
}

function qk(a)
{
	this.value = T(a.file)
}

function Ck(a)
{
	this.pd = a.file.ed()
}

function hk(a)
{
	this.vi = F(a.file);
	this.$A = F(a.file)
}

function yk(a)
{
	this.Hr = S(a.file);
	this.Tu = S(a.file);
	this.Ir = S(a.file);
	this.Uu = S(a.file)
};

function Kk()
{
	this.Vn = []
}
Kk.prototype = {
	Ae: function() {},
	zC: function() {},
	yC: function() {},
	LH: function() {},
	ri: function() {},
	an: function() {},
	MH: function() {},
	NH: function() {},
	Xf: function() {},
	Ox: function() {},
	KH: function() {},
	wH: function(a, b, c, d)
	{
		var e = this.Vn[this.Vn.length - 1];
		e && (a < e.x && (a = e.x), b < e.y && (b = e.y), a + c > e.x + e.Zc && (c = e.x + e.Zc - a), b + d > e.y + e.tw && (d = e.y + e.tw - b));
		a = {
			x: a,
			y: b,
			Zc: c,
			tw: d
		};
		this.Vn.push(a);
		return a
	},
	oH: function()
	{
		this.Vn.pop()
	}
};

function Nd(a)
{
	this.Wu = this.Su = 1;
	this.YB = -1;
	this.ZB = this.RC = !1;
	this.eo = this.co = 0;
	if (!(this.Lb = a.getContext("2d"))) throw Error("Failed to init standard renderer");
}
Nd.prototype = m(new Kk,
{
	Px: function(a)
	{
		this.ZB = this.RC = a;
		this.Lb.imageSmoothingEnabled = a;
		this.Lb.webkitImageSmoothingEnabled = a;
		this.Lb.mozImageSmoothingEnabled = a;
		this.Lb.msImageSmoothingEnabled = a;
		this.YB = -1;
		this.Mh(0, 0)
	},
	dI: function(a, b)
	{
		this.Lb.scale(a, b);
		this.Su = a;
		this.Wu = b;
		this.eo = this.co = 0;
		1 < this.Su ? this.co = 1 : 0 < this.Su && 1 > this.Su && (this.co = 1 / this.Su);
		1 < this.Wu && (this.eo = 1);
		0 < this.Wu && 1 > this.Wu && (this.eo = 1 / this.Wu)
	},
	Vv: function(a, b, c, d)
	{
		this.Lb.clearRect(a, b, c, d)
	},
	Ae: function(a, b, c, d, e, f, g)
	{
		var k =
			this.Lb;
		this.Mh(f, g);
		k.fillStyle = ma(e);
		k.fillRect(a, b, c, d)
	},
	zC: function(a, b, c, d, e, f, g)
	{
		var k = this.Lb;
		this.Mh(f, g);
		k.fillStyle = ma(e);
		oa(k, a, b, c, d);
		k.fill()
	},
	yC: function(a, b, c, d, e, f, g, k, h)
	{
		if (e == f) return this.Ae(a, b, c, d, e, k, h);
		var p = this.Lb;
		this.Mh(k, h);
		this.EE(a, b, c, d, g, e, f);
		p.fillRect(a, b, c, d)
	},
	LH: function(a, b, c, d, e, f, g, k, h)
	{
		if (e == f) return this.zC(a, b, c, d, e, k, h);
		var p = this.Lb;
		this.Mh(k, h);
		this.EE(a, b, c, d, g, e, f);
		oa(p, a, b, c, d);
		this.Lb.fill()
	},
	ri: function(a, b, c, d, e, f, g, k)
	{
		var h = this.Lb,
			p = b - a.Hb,
			l = c -
			a.Cb;
		this.Mh(g, k);
		0 == d && 1 == e && 1 == f ? 0 == a.Xd ? null != a.ud && h.drawImage(a.ud, p, l) : h.drawImage(a.app.Ba.Yd[a.Xd], a.hh, a.ih, a.width, a.height, p, l, a.width, a.height) : (h.save(), h.translate(b, c), 0 != d && h.rotate(.0174532925 * -d), h.scale(Math.max(.001, e), Math.max(.001, f)), h.translate(-a.Hb, -a.Cb), 0 == a.Xd ? null != a.ud && 0 != a.width && 0 != a.height && h.drawImage(a.ud, 0, 0, a.width, a.height, 0, 0, a.width, a.height) : h.drawImage(a.app.Ba.Yd[a.Xd], a.hh, a.ih, a.width, a.height, 0, 0, a.width, a.height), h.restore())
	},
	dN: function(a, b, c, d, e,
		f, g, k)
	{
		var h = this.Lb,
			p = b - a.Hb,
			l = c - a.Cb;
		this.Mh(g, k);
		0 == d && 1 == e && 1 == f ? 0 == a.Xd ? null != a.ud && h.drawImage(a.ud, 0, 0, a.width, a.height, p, l, a.width + this.co, a.height + this.eo) : h.drawImage(a.app.Ba.Yd[a.Xd], a.hh, a.ih, a.width, a.height, p, l, a.width + this.co, a.height + this.eo) : (h.save(), h.translate(b, c), 0 != d && h.rotate(.0174532925 * -d), h.scale(Math.max(.001, e), Math.max(.001, f)), h.translate(-a.Hb, -a.Cb), 0 == a.Xd ? null != a.ud && h.drawImage(a.ud, 0, 0, a.width, a.height, 0, 0, a.width, a.height) : h.drawImage(a.app.Ba.Yd[a.Xd], a.hh,
			a.ih, a.width, a.height, 0, 0, a.width, a.height), h.restore())
	},
	an: function(a, b, c, d, e, f, g)
	{
		this.Mh(f, g);
		this.Lb.drawImage(a, b, c, d, e)
	},
	MH: function(a, b, c, d, e, f, g)
	{
		var k = this.Lb;
		this.Mh(f, g);
		k.save();
		k.beginPath();
		k.moveTo(b, c);
		k.lineTo(b + d, c);
		k.lineTo(b + d, c + e);
		k.lineTo(b, c + e);
		k.lineTo(b, c);
		k.clip();
		f = a.width;
		g = a.height;
		d = Math.floor(d / f) + 1;
		e = Math.floor(e / g) + 1;
		var h, p;
		for (h = 0; h < d; h++)
			for (p = 0; p < e; p++) 0 == a.Xd ? null != a.ud && k.drawImage(a.ud, 0, 0, a.width, a.height, b + h * f, c + p * g, a.width + this.co, a.height + this.eo) : k.drawImage(a.app.Ba.Yd[a.Xd],
				a.hh, a.ih, a.width, a.height, b + h * f, c + p * g, a.width + this.co, a.height + this.eo);
		k.restore()
	},
	NH: function(a, b, c, d, e, f, g)
	{
		if (!(a instanceof Bi)) throw Error("renderPatternEllipse: bad image type: " + typeof a);
		var k = this.Lb;
		this.Mh(f, g);
		0 == a.Xd ? null != a.ud && (k.fillStyle = k.createPattern(a.ud, "repeat")) : (a.pattern || (a.pattern = document.createElement("canvas"), a.pattern.width = a.width, a.pattern.height = a.height, k = a.pattern.getContext("2d"), k.drawImage(a.app.Ba.Yd[a.Xd], a.hh, a.ih, a.width, a.height, 0, 0, a.width, a.height)),
			k.fillStyle = k.createPattern(a.pattern, "repeat"));
		oa(k, b, c, d, e);
		this.Lb.fill()
	},
	Xf: function(a, b, c, d, e, f, g, k)
	{
		var h = this.Lb;
		this.Mh(g, k);
		h.strokeStyle = ma(e);
		h.lineCap = "round";
		h.lineWidth = f;
		h.beginPath();
		h.moveTo(a, b);
		h.lineTo(c, d);
		h.closePath();
		h.stroke()
	},
	Ox: function(a, b, c, d, e, f, g, k)
	{
		var h = this.Lb;
		this.Mh(g, k);
		h.strokeStyle = ma(e);
		h.lineWidth = f;
		h.strokeRect(a, b, c, d)
	},
	KH: function(a, b, c, d, e, f, g, k)
	{
		var h = this.Lb;
		this.Mh(g, k);
		h.lineWidth = e;
		h.strokeStyle = ma(f);
		oa(h, a, b, c, d);
		this.Lb.stroke()
	},
	clip: function(a,
		b, c, d)
	{
		var e = this.Lb;
		e.save();
		e.beginPath();
		e.rect(a, b, c, d);
		e.clip()
	},
	MN: function()
	{
		this.Lb.restore()
	},
	wH: function()
	{
		var a = this.Lb,
			b = Kk.prototype.wH.apply(this, arguments);
		a.beginPath();
		a.rect(b.x, b.y, b.Zc, b.tw);
		a.clip()
	},
	oH: function()
	{
		var a = this.Lb;
		Kk.prototype.oH.apply(this, arguments);
		if (0 < this.Vn.length)
		{
			var b = this.Vn[this.Vn.length - 1];
			a.beginPath();
			a.rect(b.x, b.y, b.Zc, b.tw);
			a.clip()
		}
		else a.aQ()
	},
	Mh: function(a, b)
	{
		var c = this.Lb;
		if ("undefined" == typeof a) c.globalAlpha = 1, c.Yn = "source-over";
		else if (a !=
			this.YB || b != this.xM)
		{
			this.YB = a;
			this.xM = b;
			var d = a & Lk,
				e = 0 != (a & ck) | this.RC;
			e != this.ZB && (this.ZB = e, c.imageSmoothingEnabled = e, c.webkitImageSmoothingEnabled = e, c.mozImageSmoothingEnabled = e, c.msImageSmoothingEnabled = e);
			c.globalAlpha = 0 != (a & Mk) ? (b >>> 24 & 255) / 255 : d == Qd ? (128 - b) / 128 : 1;
			switch (d)
			{
				case Nk:
					c.Yn = "lighter";
					break;
				case Ok:
					c.Yn = "xor";
					break;
				default:
					c.Yn = "source-over"
			}
		}
	},
	EE: function(a, b, c, d, e, f, g)
	{
		a = e ? this.Lb.createLinearGradient(a, b, a, b + d) : this.Lb.createLinearGradient(a, b, a + c, b);
		a.addColorStop(0, ma(f));
		a.addColorStop(1, ma(g));
		this.Lb.fillStyle = a
	}
});
var Ae = 1;

function qf()
{
	this.Ns = "";
	this.SE = this.Lu = this.Mu = this.pI = this.qI = 0
}
qf.prototype = {
	load: function(a)
	{
		var b = a.Ga;
		V(a, 4);
		this.qI = F(a);
		this.pI = F(a);
		this.Mu = F(a);
		this.Lu = Ta(a);
		var c = F(a),
			d = F(a);
		a.seek(b + c);
		this.Ns = a.ed();
		this.Ns = this.Ns.substr(0, this.Ns.indexOf("."));
		this.SE = b + d
	}
};

function Pk()
{}
Pk.prototype = {
	CF: function()
	{
		return null
	}
};
var og = 1,
	pg = 2;

function Qk()
{
	this.B = this.xt = this.ut = this.Uw = 0;
	this.gb = this.hG = !1;
	this.al = this.UE = this.F = this.ya = null
}
Qk.prototype = {
	start: function(a, b, c, d)
	{
		this.UE = b;
		this.al = this.UE.getContext("2d");
		this.ya = c;
		this.F = d;
		this.Uw = (new Date).getTime();
		this.B = a.pI;
		0 == this.B && (this.B = 1);
		this.ut = this.Uw;
		this.xt = this.Uw + this.B;
		this.gb = this.hG = !0
	},
	V: function(a, b, c, d, e, f, g)
	{
		this.Ww && (this.al.globalCompositeOperation = "source-atop");
		1 == arguments.length ? this.al.drawImage(a, 0, 0) : 0 < f && 0 < g && this.al.drawImage(a, d, e, f, g, b, c, f, g)
	},
	stretch: function(a, b, c, d, e, f, g, k, h)
	{
		this.Ww && (this.al.globalCompositeOperation = "source-atop");
		0 < d && 0 < e &&
			0 < k && 0 < h && this.al.drawImage(a, f, g, k, h, b, c, d, e)
	},
	od: function() {},
	end: function() {},
	za: function() {}
};

function il(a)
{
	a.ut = (new Date).getTime();
	a.ut > a.xt && (a.ut = a.xt);
	return a.ut - a.Uw
}

function ng(a)
{
	if (a.hG)
	{
		var b = new Date;
		return b.getTime() >= a.xt ? !0 : b.getTime() >= a.xt
	}
	return !0
}

function De(a)
{
	this.app = a
}
De.prototype = {
	fq: function(a, b, c, d)
	{
		var e = null;
		"cctrans" == a.Ns.toLowerCase() && (e = new jl);
		return null != e ? (e = e.CF(a), this.app.file.seek(a.SE), e.Ww = !1, e.za(a, this.app.file, b, c, d), e) : null
	}
};

function kl(a, b, c)
{
	a = a.getContext("2d");
	a.drawImage(b, 0, 0);
	var d = b.width;
	b = b.height;
	var e = a.getImageData(0, 0, d, b),
		f, g = (c & 16711680) >> 16,
		k = (c & 65280) >> 8,
		h = c & 255;
	for (f = 0; f < b; f++)
		for (c = 0; c < d; c++) 0 != e.data[4 * (f * d + c) + 3] && (e.data[4 * (f * d + c)] = g, e.data[4 * (f * d + c) + 1] = k, e.data[4 * (f * d + c) + 2] = h);
	a.putImageData(e, 0, 0)
};
var ll = "BAND SE00 SE10 SE12 DOOR SE03 MOSA SE05 SE06 SCRL SE01 SE07 SE09 SE13 SE08 SE02 ZIGZ SE04 ZOOM SE11 FADE".split(" ");

function jl()
{}
jl.prototype = m(new Pk,
{
	CF: function(a)
	{
		var b = a.qI;
		a = "" + String.fromCharCode(b & 255);
		b >>= 8;
		a += String.fromCharCode(b & 255);
		b >>= 8;
		a += String.fromCharCode(b & 255);
		a += String.fromCharCode(b >> 8 & 255);
		for (b = 0; b < ll.length && a != ll[b]; b++);
		a = null;
		switch (b)
		{
			case 0:
				a = new ml;
				break;
			case 1:
				a = new nl;
				break;
			case 2:
				a = new ol;
				break;
			case 3:
				a = new pl;
				break;
			case 4:
				a = new ql;
				break;
			case 5:
				a = new rl;
				break;
			case 6:
				a = new sl;
				break;
			case 7:
				a = new tl;
				break;
			case 8:
				a = new ul;
				break;
			case 9:
				a = new vl;
				break;
			case 10:
				a = new wl;
				break;
			case 11:
				a = new xl;
				break;
			case 12:
				a = new yl;
				break;
			case 13:
				a = new zl;
				break;
			case 14:
				a = new Al;
				break;
			case 15:
				a = new Bl;
				break;
			case 16:
				a = new Cl;
				break;
			case 17:
				a = new Dl;
				break;
			case 18:
				a = new El;
				break;
			case 19:
				a = new Fl;
				break;
			case 20:
				a = new Gl
		}
		return a
	}
});

function nl()
{
	this.iG = this.j = this.l = this.sc = 0
}
nl.prototype = m(new Qk,
{
	za: function(a, b, c, d, e)
	{
		this.sc = F(b);
		this.start(a, c, d, e)
	},
	od: function()
	{
		this.gb && (this.gb = !1, this.l = this.F.width, this.j = this.F.height, this.iG = 8 != this.sc ? this.sc : Math.floor(8 * Math.random()));
		var a = il(this);
		if (1 < a / this.B) this.V(this.F);
		else
		{
			var b, c;
			switch (this.iG)
			{
				case 0:
					b = this.l / 3 * a / this.B;
					c = this.j;
					this.V(this.F, 0, 0, this.l / 3 - b, 0, b, c);
					this.V(this.F, this.l - b, 0, 2 * this.l / 3, 0, b, c);
					b = this.l / 3;
					c = this.j * a / this.B;
					this.V(this.F, b, 0, b, this.j - c, b, c);
					break;
				case 1:
					b = this.l / 3 * a / this.B;
					c = this.j;
					this.V(this.F, 0, 0, this.l / 3 - b, 0, b, c);
					this.V(this.F, this.l - b, 0, 2 * this.l / 3, 0, b, c);
					b = this.l / 3;
					c = this.j * a / this.B;
					this.V(this.F, b, this.j - c, b, 0, b, c);
					break;
				case 2:
					b = this.l / 3 * a / this.B;
					c = this.j;
					this.V(this.F, 0, 0, this.l / 3 - b, 0, b, c);
					this.V(this.F, this.l - b, 0, 2 * this.l / 3, 0, b, c);
					b = this.l / 3;
					c = this.j * a / this.B;
					this.V(this.F, b, 0, b, 0, b, c);
					break;
				case 3:
					b = this.l / 3 * a / this.B;
					c = this.j;
					this.V(this.F, 0, 0, this.l / 3 - b, 0, b, c);
					this.V(this.F, this.l - b, 0, 2 * this.l / 3, 0, b, c);
					b = this.l / 3;
					c = this.j * a / this.B;
					this.V(this.F, b, this.j - c, b, this.j -
						c, b, c);
					break;
				case 4:
					b = this.l / 3 * a / this.B;
					c = this.j;
					this.V(this.F, 0, 0, this.l / 3 - b, 0, b, c);
					this.V(this.F, this.l - b, 0, 2 * this.l / 3, 0, b, c);
					b = this.l / 3;
					c = this.j / 2 * a / this.B;
					this.V(this.F, b, 0, b, this.j / 2 - c, b, c);
					this.V(this.F, b, this.j - c, b, this.j / 2, b, c);
					break;
				case 5:
					b = this.l / 3 * a / this.B;
					c = this.j;
					this.V(this.F, 0, 0, this.l / 3 - b, 0, b, c);
					this.V(this.F, this.l - b, 0, 2 * this.l / 3, 0, b, c);
					b = this.l / 3;
					c = this.j / 2 * a / this.B;
					this.V(this.F, b, 0, b, 0, b, c);
					this.V(this.F, b, this.j - c, b, this.j - c, b, c);
					break;
				case 6:
					b = this.l / 3;
					c = this.j * a / this.B;
					this.V(this.F,
						0, this.j - c, 0, 0, b, c);
					this.V(this.F, b, 0, b, this.j - c, b, c);
					this.V(this.F, 2 * b, this.j - c, 2 * b, 0, b, c);
					break;
				case 7:
					b = this.l / 7;
					c = this.j * a / this.B;
					this.V(this.F, 0, this.j - c, 0, 0, b, c);
					this.V(this.F, b, 0, b, this.j - c, b, c);
					this.V(this.F, 2 * b, this.j - c, 2 * b, 0, b, c);
					this.V(this.F, 3 * b, 0, 3 * b, this.j - c, b, c);
					this.V(this.F, 4 * b, this.j - c, 4 * b, 0, b, c);
					this.V(this.F, 5 * b, 0, 5 * b, this.j - c, b, c);
					this.V(this.F, 6 * b, this.j - c, 6 * b, 0, 2 * b, c);
					break;
				default:
					this.V(this.F)
			}
		}
		return null
	},
	end: function() {}
});

function ol()
{
	this.j = this.l = this.sc = 0
}
ol.prototype = m(new Qk,
{
	za: function(a, b, c, d, e)
	{
		this.sc = F(b);
		this.start(a, c, d, e)
	},
	od: function()
	{
		this.gb && (this.gb = !1, this.l = this.F.width, this.j = this.F.height);
		var a = il(this);
		if (1 < a / this.B) this.V(this.F);
		else
		{
			var b, c;
			this.V(this.F);
			switch (this.sc)
			{
				case 0:
					b = this.l / 2 * a / this.B;
					b = this.l / 2 - b;
					c = this.j / 2 * a / this.B;
					c = this.j / 2 - c;
					this.stretch(this.ya, 0, 0, b, c, 0, 0, this.l / 2, this.j / 2);
					b = this.l / 2 * a / this.B;
					c = this.j / 2 * a / this.B;
					c = this.j / 2 - c;
					this.stretch(this.ya, this.l / 2 + b, 0, this.l / 2 - b, c, this.l / 2, 0, this.l / 2, this.j / 2);
					b =
						this.l / 2 * a / this.B;
					b = this.l / 2 - b;
					c = this.j / 2 * a / this.B;
					this.stretch(this.ya, 0, this.j / 2 + c, b, this.j / 2 - c, 0, this.j / 2, this.l / 2, this.j / 2);
					b = this.l / 2 * a / this.B;
					c = this.j / 2 * a / this.B;
					this.stretch(this.ya, this.l / 2 + b, this.j / 2 + c, this.l / 2 - b, this.j / 2 - c, this.l / 2, this.j / 2, this.l / 2, this.j / 2);
					break;
				case 1:
					b = this.l * a / this.B;
					b = this.l - b;
					c = this.j * a / this.B;
					c = this.j - c;
					this.V(this.ya, 0, 0, this.l - b, this.j - c, b, c);
					break;
				case 2:
					b = this.l * a / this.B;
					c = this.j * a / this.B;
					c = this.j - c;
					this.V(this.ya, b, 0, 0, this.j - c, this.l - b, c);
					break;
				case 3:
					b = this.l *
						a / this.B;
					b = this.l - b;
					c = this.j * a / this.B;
					this.V(this.ya, 0, c, this.l - b, 0, b, this.j - c);
					break;
				case 4:
					b = this.l * a / this.B;
					c = this.j * a / this.B;
					this.V(this.ya, b, c, 0, 0, this.l - b, this.j - c);
					break;
				case 5:
					b = this.l / 2 * a / this.B;
					b = this.l / 2 - b;
					c = this.j / 2 * a / this.B;
					c = this.j / 2 - c;
					this.V(this.ya, b - this.l / 2, c - this.j / 2, 0, 0, this.l / 2, this.j / 2);
					b = this.l / 2 * a / this.B;
					c = this.j / 2 * a / this.B;
					c = this.j / 2 - c;
					this.V(this.ya, this.l / 2 + b, c - this.j / 2, this.l / 2, 0, this.l / 2, this.j / 2);
					b = this.l / 2 * a / this.B;
					b = this.l / 2 - b;
					c = this.j / 2 * a / this.B;
					this.V(this.ya, b - this.l /
						2, this.j / 2 + c, 0, this.j / 2, this.l / 2, this.j / 2);
					b = this.l / 2 * a / this.B;
					c = this.j / 2 * a / this.B;
					this.V(this.ya, this.l / 2 + b, this.j / 2 + c, this.l / 2, this.j / 2, this.l / 2, this.j / 2);
					break;
				case 6:
					c = this.j / 2 * a / this.B;
					c = this.j / 2 - c;
					this.V(this.ya, 0, c - this.j / 2, 0, 0, this.l, this.j / 2);
					this.V(this.ya, 0, this.j - c, 0, this.j / 2, this.l, this.j / 2);
					break;
				case 7:
					b = this.l / 2 * a / this.B, b = this.l / 2 - b, this.V(this.ya, b - this.l / 2, 0, 0, 0, this.l / 2, this.j), this.V(this.ya, this.l - b, 0, this.l / 2, 0, this.l / 2, this.j)
			}
		}
		return null
	},
	end: function() {}
});

function ml()
{
	this.Xc = this.we = this.Zz = this.Ni = 0;
	this.gM = null
}
ml.prototype = m(new Qk,
{
	za: function(a, b, c, d, e)
	{
		this.Ni = T(b);
		this.Zz = T(b);
		this.start(a, c, d, e)
	},
	od: function()
	{
		var a = this.ya.width,
			b = this.ya.height,
			c;
		if (this.gb)
		{
			0 == this.Ni && (this.Ni = 1);
			switch (this.Zz)
			{
				case 0:
				case 1:
					this.we = (a + this.Ni - 1) / this.Ni;
					0 == this.we && (this.we = 1, this.Ni = a);
					break;
				default:
					this.we = (b + this.Ni - 1) / this.Ni, 0 == this.we && (this.we = 1, this.Ni = b)
			}
			this.Xc = 0;
			this.gb = !1
		}
		if (0 >= this.Ni || 0 >= this.we || 0 == this.B) this.V(this.F);
		else
		{
			var d = this.we * il(this) / this.B;
			if (d > this.Xc)
			{
				var e = 0,
					f = 0,
					g = 0,
					k = 0;
				for (c =
					0; c < this.Ni; c++)
				{
					switch (this.Zz)
					{
						case 0:
							e = this.Xc + c * this.we;
							f = 0;
							g = d - this.Xc;
							k = b;
							break;
						case 1:
							e = a - (this.Xc + c * this.we) - (d - this.Xc);
							f = 0;
							g = d - this.Xc;
							k = b;
							break;
						case 2:
							e = 0;
							f = this.Xc + c * this.we;
							g = a;
							k = d - this.Xc;
							break;
						case 3:
							e = 0, f = b - (this.Xc + c * this.we) - (d - this.Xc), g = a, k = d - this.Xc
					}
					this.V(this.F, e, f, e, f, g, k)
				}
			}
			this.Xc = d
		}
		return this.gM
	},
	end: function() {}
});

function pl()
{
	this.j = this.l = this.ew = this.Zb = 0
}
pl.prototype = m(new Qk,
{
	za: function(a, b, c, d, e)
	{
		this.Zb = F(b);
		this.ew = F(b);
		this.start(a, c, d, e)
	},
	od: function()
	{
		this.gb && (this.gb = !1, this.l = this.F.width, this.j = this.F.height);
		var a = il(this);
		if (1 < a / this.B) this.V(this.F);
		else
		{
			var b, c, d, e, f, g, k, h, p, l;
			p = this.l / this.Zb;
			l = this.j / this.ew;
			d = this.l / this.Zb;
			e = this.j / this.ew;
			for (f = 0; f < this.Zb; f++)
				for (g = 0; g < this.ew; g++) b = f * p, c = g * l, k = d * a / this.B, h = e * a / this.B, this.stretch(this.F, b + (d - k) / 2, c + (e - h) / 2, k, h, b + (d - k) / 2, c + (e - h) / 2, k, h)
		}
		return null
	},
	end: function() {}
});

function ql()
{
	this.Xc = this.we = this.Qf = 0
}
ql.prototype = m(new Qk,
{
	za: function(a, b, c, d, e)
	{
		this.Qf = T(b);
		this.start(a, c, d, e)
	},
	od: function()
	{
		if (this.gb)
		{
			switch (this.Qf)
			{
				case 0:
				case 1:
					this.we = this.ya.width / 2;
					break;
				default:
					this.we = this.ya.height / 2
			}
			this.Xc = 0;
			this.gb = !1
		}
		if (0 == this.we) this.V(this.F);
		else
		{
			var a = 0,
				b = 0,
				c = 0,
				d = 0,
				e = this.we * il(this) / this.B;
			if (e > this.Xc)
			{
				switch (this.Qf)
				{
					case 0:
						a = this.ya.width / 2 - e;
						b = 0;
						c = e - this.Xc;
						d = this.F.height;
						break;
					case 1:
						a = this.Xc;
						b = 0;
						c = e - this.Xc;
						d = this.F.height;
						break;
					case 2:
						a = 0;
						b = this.ya.height / 2 - e;
						c = this.F.width;
						d = e -
							this.Xc;
						break;
					case 3:
						a = 0, b = this.Xc, c = this.F.width, d = e - this.Xc
				}
				this.V(this.F, a, b, a, b, c, d);
				switch (this.Qf)
				{
					case 0:
						a = this.ya.width / 2 + this.Xc;
						break;
					case 1:
						a = this.ya.width - e;
						break;
					case 2:
						b = this.ya.height / 2 + this.Xc;
						break;
					case 3:
						b = this.ya.height - e
				}
				this.V(this.F, a, b, a, b, c, d)
			}
		}
		return null
	},
	end: function() {}
});

function Gl()
{}
Gl.prototype = m(new Qk,
{
	za: function(a, b, c, d, e)
	{
		this.start(a, c, d, e)
	},
	od: function()
	{
		this.gb && (this.gb = !1);
		var a;
		this.al.globalAlpha = 1;
		this.V(this.ya);
		a = il(this) / this.B;
		this.al.globalAlpha = a;
		this.V(this.F);
		return null
	},
	end: function()
	{
		this.al.globalAlpha = 1
	}
});

function rl()
{
	this.j = this.l = this.Ps = this.sc = this.Zb = 0
}
rl.prototype = m(new Qk,
{
	za: function(a, b, c, d, e)
	{
		this.Zb = F(b);
		this.sc = F(b);
		this.Ps = F(b);
		this.start(a, c, d, e)
	},
	od: function()
	{
		this.gb && (this.gb = !1, this.l = this.F.width, this.j = this.F.height);
		var a = il(this);
		if (1 < a / this.B) this.V(this.F);
		else
		{
			var b, c, d, e, f;
			b = 0;
			var g;
			if (0 == this.sc)
				for (g = this.j / this.Zb, f = 0; f < this.Zb; f++) 0 == b ? (b = 0, c = f * g, d = this.l * a / this.B, e = f == this.Zb - 1 ? this.j : g + 1, 0 == this.Ps ? this.V(this.F, b, c, b, c, d, e) : this.V(this.F, b, c, this.l - d, c, d, e), b = 1) : (c = f * g, d = this.l * a / this.B, b = this.l - d, e = f == this.Zb - 1 ? this.j :
					g + 1, 0 == this.Ps ? this.V(this.F, b, c, b, c, d, e) : this.V(this.F, b, c, 0, c, d, e), b = 0);
			else
				for (g = this.l / this.Zb, f = 0; f < this.Zb; f++) 0 == b ? (b = f * g, c = 0, e = this.j * a / this.B, d = f == this.Zb - 1 ? this.l : g + 1, 0 == this.Ps ? this.V(this.F, b, c, b, c, d, e) : this.V(this.F, b, c, b, this.j - e, d, e), b = 1) : (b = f * g, e = this.j * a / this.B, c = this.j - e, d = f == this.Zb - 1 ? this.l : g + 1, 0 == this.Ps ? this.V(this.F, b, c, b, c, d, e) : this.V(this.F, b, c, b, 0, d, e), b = 0)
		}
		return null
	},
	end: function() {}
});

function sl()
{
	this.lB;
	this.Bo = this.Eo = this.bk = this.Fh = this.ba = 0;
	this.bh = null
}
sl.prototype = m(new Qk,
{
	za: function(a, b, c, d, e)
	{
		this.lB = F(b);
		this.start(a, c, d, e)
	},
	od: function()
	{
		if (this.gb)
		{
			var a = this.ya.width,
				b = this.ya.height;
			this.ba = Math.floor((a * this.lB / 100 + b * this.lB / 100) / 2);
			0 == this.ba && (this.ba = 1);
			this.Fh = (a + this.ba - 1) / this.ba;
			this.bk = (b + this.ba - 1) / this.ba;
			this.Eo = this.Fh * this.bk;
			a = Math.floor((this.Eo + 7) / 8 + 2);
			this.Bo = 0;
			this.bh = Array(a);
			for (b = 0; b < a; b++) this.bh[b] = 0;
			this.gb = !1
		}
		if (null == this.bh || 2 > this.Fh || 2 > this.bk || 0 == this.B) this.V(this.F);
		else
		{
			var c, d, b = a = 0;
			c = Math.floor(this.Eo *
				il(this) / this.B);
			var e = c - this.Bo;
			if (0 != e)
				for (this.Bo = c, d = 0; d < e; d++)
				{
					for (c = 0; 1 > c; c++)
					{
						var a = Math.floor(this.Fh * Math.random()),
							b = Math.floor(this.bk * Math.random()),
							f, g;
						f = b * this.Fh + a;
						g = Math.floor(f / 8);
						f = 1 << (f & 7);
						if (0 == (this.bh[g] & f))
						{
							this.bh[g] |= f;
							break
						}
						var k = g,
							h = (this.Eo + 7) / 8,
							p, l = !1;
						for (p = g; p < h; p++, k++)
							if (-1 != this.bh[k])
							{
								b = Math.floor(8 * p / this.Fh);
								a = Math.floor(8 * p % this.Fh);
								for (f = 1; 0 != f; f <<= 1)
								{
									if (0 == (this.bh[k] & f))
									{
										this.bh[k] |= f;
										l = !0;
										break
									}
									if (++a >= this.Fh && (a = 0, ++b >= this.bk)) break
								}
								if (l) break
							} if (l) break;
						for (p = k = 0; p < g; p++, k++)
						{
							if (255 != this.bh[k])
							{
								b = Math.floor(8 * p / m_nbBlockPerLine);
								a = Math.floor(8 * p % m_nbBlockPerLine);
								for (f = 1; 0 != f; f <<= 1)
								{
									if (0 == (this.bh[k] & f))
									{
										this.bh[k] |= f;
										l = !0;
										break
									}
									if (++a >= this.Fh && (a = 0, ++b >= this.bk)) break
								}
								if (l) break
							}
							if (l) break;
							l = !1
						}
					}
					1 > c && this.V(this.F, Math.floor(a * this.ba), Math.floor(b * this.ba), Math.floor(a * this.ba), Math.floor(b * this.ba), this.ba, this.ba)
				}
		}
		return null
	},
	end: function() {}
});

function tl()
{
	this.j = this.l = this.sc = 0
}
tl.prototype = m(new Qk,
{
	za: function(a, b, c, d, e)
	{
		this.sc = F(b);
		this.start(a, c, d, e)
	},
	od: function()
	{
		this.gb && (this.gb = !1, this.l = this.F.width, this.j = this.F.height);
		var a = il(this),
			b = a / this.B;
		if (1 < b) this.V(this.F);
		else
		{
			var c, d, e;
			.25 > b ? (d = 2 * this.l * a / this.B, d *= 2, e = this.j / 7, b = this.l / 2 - d / 2, c = this.j / 2 - e / 2, this.V(this.F, b, c, b, c, d, e), d = this.l / 7, e = 2 * this.j * a / this.B, e *= 2, b = this.l / 2 - d / 2, c = this.j / 2 - e / 2) : (b = this.l / 2, d = this.l * a / this.B - b, e = this.j / 2, c = 0, this.V(this.F, b, c, b, c, d, e), c = this.j / 2, e = this.j * a / this.B - c, b = d = this.l /
				2, this.V(this.F, b, c, b, c, d, e), d = this.l * a / this.B - this.l / 2, b = this.l / 2 - d, c = e = this.j / 2, this.V(this.F, b, c, b, c, d, e), e = this.j * a / this.B - this.j / 2, c = this.j / 2 - e, d = this.l / 2, b = 0);
			this.V(this.F, b, c, b, c, d, e)
		}
		return null
	},
	end: function() {}
});

function ul()
{
	this.kB = this.j = this.l = this.sc = 0
}
ul.prototype = m(new Qk,
{
	za: function(a, b, c, d, e)
	{
		this.sc = F(b);
		this.start(a, c, d, e)
	},
	od: function()
	{
		this.gb && (this.gb = !1, this.l = this.F.width, this.j = this.F.height, this.kB = !1);
		var a = il(this),
			b = a / this.B;
		if (1 < b) this.V(this.F);
		else
		{
			var c, d, e, f;
			if (.5 >= b) switch (this.sc)
			{
				case 0:
					e = this.l * a / this.B * 2;
					f = this.j / 2;
					c = this.l - e;
					d = this.j / 2;
					this.V(this.F, 0, 0, c, d, e, f);
					break;
				case 1:
					e = this.l * a / this.B * 2;
					f = this.j / 2;
					c = this.l - e;
					d = this.j / 2;
					this.V(this.F, c, 0, 0, d, e, f);
					break;
				case 2:
					e = this.l * a / this.B * 2;
					f = this.j / 2;
					c = this.l - e;
					d = this.j /
						2;
					this.V(this.F, 0, d, c, 0, e, f);
					break;
				case 3:
					e = this.l * a / this.B * 2, f = this.j / 2, c = this.l - e, d = this.j / 2, this.V(this.F, c, d, 0, 0, e, f)
			}
			if (.5 < b) switch (0 == this.kB && (1 >= this.sc ? this.V(this.F, 0, 0, 0, this.j / 2, this.l, this.j / 2) : this.V(this.F, 0, this.j / 2, 0, 0, this.l, this.j / 2), this.kB = !0), b = a - this.B / 2, b /= this.B / 2, f = this.j / 2 * 1E3 * b / 1E3, this.sc)
			{
				case 0:
				case 1:
					this.stretch(this.F, 0, f, this.l, this.j / 2, 0, this.j / 2, this.l, this.j / 2);
					this.stretch(this.F, 0, 0, this.l, f, 0, this.j / 2 - f, this.l, f);
					break;
				case 2:
				case 3:
					this.stretch(this.F, 0, this.j /
						2 - f, this.l, this.j / 2, 0, 0, this.l, this.j / 2), this.stretch(this.F, 0, this.j - f, this.l, f, 0, this.j / 2, this.l, f)
			}
		}
		return null
	},
	end: function() {}
});

function vl()
{
	this.Qf;
	this.we;
	this.Xc
}
vl.prototype = m(new Qk,
{
	za: function(a, b, c, d, e)
	{
		this.Qf = F(b);
		this.start(a, c, d, e)
	},
	od: function()
	{
		var a = this.ya.width,
			b = this.ya.height;
		if (this.gb)
		{
			switch (this.Qf)
			{
				case 0:
				case 1:
					this.we = a;
					break;
				default:
					this.we = b
			}
			this.Xc = 0;
			this.gb = !1
		}
		if (0 == this.B) this.V(this.F);
		else
		{
			var c = this.we * il(this) / this.B;
			if (c > this.Xc)
			{
				var d = 0,
					e = 0;
				switch (this.Qf)
				{
					case 0:
						d = c - a;
						e = 0;
						break;
					case 1:
						d = a - c;
						e = 0;
						break;
					case 2:
						d = 0;
						e = c - b;
						break;
					case 3:
						d = 0, e = b - c
				}
				this.V(this.F, d, e, 0, 0, a, b);
				this.Xc = c
			}
		}
		return null
	},
	end: function() {}
});

function wl()
{
	this.j = this.l = this.$E = this.Zb = this.sc = 0
}
wl.prototype = m(new Qk,
{
	za: function(a, b, c, d, e)
	{
		this.sc = F(b);
		this.Zb = F(b);
		this.$E = F(b);
		this.start(a, c, d, e)
	},
	od: function()
	{
		this.gb && (this.gb = !1, this.l = this.F.width, this.j = this.F.height);
		var a = il(this);
		if (1 < a / this.B) this.V(this.F);
		else
		{
			var b, c, d, e, f, g;
			f = this.l * this.Zb / 100;
			g = this.j * this.Zb / 100;
			d = f * a / this.B;
			e = g * a / this.B;
			b = this.l / 2 - d / 2;
			c = this.j / 2 - e / 2;
			0 == this.$E ? this.V(this.F, b, c, b, c, d, e) : this.stretch(this.F, b, c, d, e, this.l / 2 - f / 2, this.j / 2 - g / 2, f, g);
			b = 100 - this.Zb;
			f = this.l * b / 100;
			g = this.j * b / 100;
			d = f / 2 * a / this.B;
			e = g / 2 * a / this.B;
			this.V(this.F, 0, 0, 0, 0, this.l, e);
			this.V(this.F, 0, 0, 0, 0, d, this.j);
			this.V(this.F, 0, this.j - e, 0, this.j - e, this.l, e);
			this.V(this.F, this.l - d, 0, this.l - d, 0, d, this.j)
		}
		return null
	},
	end: function() {}
});

function xl()
{
	this.j = this.l = this.sc = 0
}
xl.prototype = m(new Qk,
{
	za: function(a, b, c, d, e)
	{
		this.sc = F(b);
		this.start(a, c, d, e)
	},
	od: function()
	{
		this.gb && (this.gb = !1, this.l = this.F.width, this.j = this.F.height);
		var a = il(this);
		if (1 < a / this.B) this.V(this.F);
		else
		{
			var b, c;
			switch (this.sc)
			{
				case 0:
					b = this.l * a / this.B;
					c = this.j * a / this.B;
					this.stretch(this.F, 0, 0, b, c, 0, 0, this.l, this.j);
					break;
				case 1:
					b = this.l * a / this.B;
					c = this.j * a / this.B;
					this.stretch(this.F, this.l - b, 0, b, c, 0, 0, this.l, this.j);
					break;
				case 2:
					b = this.l * a / this.B;
					c = this.j * a / this.B;
					this.stretch(this.F, 0, this.j -
						c, b, c, 0, 0, this.l, this.j);
					break;
				case 3:
					b = this.l * a / this.B;
					c = this.j * a / this.B;
					this.stretch(this.F, this.l - b, this.j - c, b, c, 0, 0, this.l, this.j);
					break;
				case 4:
					b = this.l / 2 * a / this.B;
					c = this.j / 2 * a / this.B;
					5 > c && (c = 5);
					this.stretch(this.F, 0, 0, b, c, 0, 0, this.ya.width / 2, this.ya.height / 2);
					b = this.l / 2 * a / this.B;
					c = this.j / 2 * a / this.B;
					5 > c && (c = 5);
					this.stretch(this.F, this.l - b, 0, b, c, this.l / 2, 0, this.l / 2, this.j / 2);
					b = this.l / 2 * a / this.B;
					c = this.j / 2 * a / this.B;
					this.stretch(this.F, 0, this.j - c, b, c, 0, this.j / 2, this.l / 2, this.j / 2);
					b = this.l / 2 * a / this.B;
					c = this.j / 2 * a / this.B;
					this.stretch(this.F, this.l - b, this.j - c, b, c, this.l / 2, this.j / 2, this.l / 2, this.j / 2);
					break;
				case 5:
					b = this.l / 2 * a / this.B;
					c = this.j / 2 * a / this.B;
					5 > c && (c = 5);
					this.stretch(this.F, this.l / 2 - b, this.j / 2 - c, b, c, 0, 0, this.ya.width / 2, this.ya.height / 2);
					b = this.l / 2 * a / this.B;
					c = this.j / 2 * a / this.B;
					5 > c && (c = 5);
					this.stretch(this.F, this.l / 2, this.j / 2 - c, b, c, this.l / 2, 0, this.l / 2, this.j / 2);
					b = this.l / 2 * a / this.B;
					c = this.j / 2 * a / this.B;
					this.stretch(this.F, this.l / 2 - b, this.j / 2, b, c, 0, this.j / 2, this.l / 2, this.j / 2);
					b = this.l / 2 * a / this.B;
					c = this.j / 2 * a / this.B;
					this.stretch(this.F, this.l / 2, this.j / 2, b, c, this.l / 2, this.j / 2, this.l / 2, this.j / 2);
					break;
				case 6:
					b = this.l;
					c = this.j * a / this.B;
					this.stretch(this.F, 0, 0, b, c, 0, 0, this.l, this.j);
					break;
				case 7:
					b = this.l * a / this.B;
					c = this.j;
					this.stretch(this.F, 0, 0, b, c, 0, 0, this.l, this.j);
					break;
				case 8:
					b = this.l * a / this.B;
					c = this.j;
					this.stretch(this.F, this.l - b, 0, b, c, 0, 0, this.l, this.j);
					break;
				case 9:
					b = this.l, c = this.j * a / this.B, this.stretch(this.F, 0, this.j - c, b, c, 0, 0, this.l, this.j)
			}
		}
		return null
	},
	end: function() {}
});

function yl()
{
	this.Ud = this.j = this.l = this.sc = 0
}
yl.prototype = m(new Qk,
{
	za: function(a, b, c, d, e)
	{
		this.sc = F(b);
		this.start(a, c, d, e)
	},
	od: function()
	{
		this.gb && (this.gb = !1, this.l = this.F.width, this.j = this.F.height, this.Ud = 0);
		var a = il(this);
		if (1 < a / this.B) this.V(this.F);
		else
		{
			var b, c;
			switch (this.sc)
			{
				case 0:
					0 == this.Ud ? (b = 2 * this.l * a / this.B, b = this.l - b, c = 2 * this.j * a / this.B, c = this.j - c, this.stretch(this.ya, 0, 0, b, c, 0, 0, this.l, this.j), a >= this.B / 2 && (this.Ud = 1)) : (b = 2 * this.l * a / this.B, b -= this.l, c = 2 * this.j * a / this.B, c -= this.j, this.stretch(this.F, 0, 0, b, c, 0, 0, this.l, this.j));
					break;
				case 1:
					0 == this.Ud ? (b = this.l, c = 2 * this.j * a / this.B, c = this.j - c, this.stretch(this.ya, 0, 0, b, c, 0, 0, this.l, this.j), a >= this.B / 2 && (this.Ud = 1)) : (b = this.l, c = 2 * this.j * a / this.B, c -= this.j, this.stretch(this.F, 0, 0, b, c, 0, 0, this.l, this.j));
					break;
				case 2:
					0 == this.Ud ? (b = 2 * this.l * a / this.B, b = this.l - b, c = 2 * this.j * a / this.B, c = this.j - c, this.stretch(this.ya, this.l - b, 0, b, c, 0, 0, this.l, this.j), a >= this.B / 2 && (this.Ud = 1)) : (b = 2 * this.l * a / this.B, b -= this.l, c = 2 * this.j * a / this.B, c -= this.j, this.stretch(this.F, this.l - b, 0, b, c, 0, 0, this.l,
						this.j));
					break;
				case 3:
					0 == this.Ud ? (b = 2 * this.l * a / this.B, b = this.l - b, c = this.j, this.stretch(this.ya, 0, 0, b, c, 0, 0, this.l, this.j), a >= this.B / 2 && (this.Ud = 1)) : (b = 2 * this.l * a / this.B, b -= this.l, c = this.j, this.stretch(this.F, 0, 0, b, c, 0, 0, this.l, this.j));
					break;
				case 4:
					0 == this.Ud ? (b = 2 * this.l * a / this.B, b = this.l - b, c = this.j, this.stretch(this.ya, this.l / 2 - b / 2, 0, b, c, 0, 0, this.l, this.j), a >= this.B / 2 && (this.Ud = 1)) : (b = 2 * this.l * a / this.B, b -= this.l, c = this.j, this.stretch(this.F, this.l / 2 - b / 2, 0, b, c, 0, 0, this.l, this.j));
					break;
				case 5:
					0 ==
						this.Ud ? (c = 2 * this.j * a / this.B, c = this.j - c, b = this.l, this.stretch(this.ya, 0, this.j / 2 - c / 2, b, c, 0, 0, this.l, this.j), a >= this.B / 2 && (this.Ud = 1)) : (c = 2 * this.j * a / this.B, c -= this.j, b = this.l, this.stretch(this.F, 0, this.j / 2 - c / 2, b, c, 0, 0, this.l, this.j));
					break;
				case 6:
					0 == this.Ud ? (b = 2 * this.l * a / this.B, b = this.l - b, c = 2 * this.j * a / this.B, c = this.j - c, this.stretch(this.ya, this.l / 2 - b / 2, this.j / 2 - c / 2, b, c, 0, 0, this.l, this.j), a >= this.B / 2 && (this.Ud = 1)) : (b = 2 * this.l * a / this.B, b -= this.l, c = 2 * this.j * a / this.B, c -= this.j, this.stretch(this.F, this.l /
						2 - b / 2, this.j / 2 - c / 2, b, c, 0, 0, this.l, this.j));
					break;
				case 7:
					0 == this.Ud ? (b = 2 * this.l * a / this.B, b = this.l - b, c = this.j, this.stretch(this.ya, this.l - b, 0, b, c, 0, 0, this.l, this.j), a >= this.B / 2 && (this.Ud = 1)) : (b = 2 * this.l * a / this.B, b -= this.l, c = this.j, this.stretch(this.F, this.j - b, 0, b, c, 0, 0, this.l, this.j));
					break;
				case 8:
					0 == this.Ud ? (b = 2 * this.l * a / this.B, b = this.l - b, c = 2 * this.j * a / this.B, c = this.j - c, this.stretch(this.ya, 0, this.j - c, b, c, 0, 0, this.l, this.j), a >= this.B / 2 && (this.Ud = 1)) : (b = 2 * this.l * a / this.B, b -= this.l, c = 2 * this.j * a / this.B,
						c -= this.j, this.stretch(this.F, 0, this.j - c, b, c, 0, 0, this.l, this.j));
					break;
				case 9:
					0 == this.Ud ? (b = this.l, c = 2 * this.j * a / this.B, c = this.j - c, this.stretch(this.ya, 0, this.j - c, b, c, 0, 0, this.l, this.j), a >= this.B / 2 && (this.Ud = 1)) : (b = this.l, c = 2 * this.j * a / this.B, c -= this.j, this.stretch(this.F, 0, this.j - c, b, c, 0, 0, this.l, this.j));
					break;
				case 10:
					0 == this.Ud ? (b = 2 * this.l * a / this.B, b = this.l - b, c = 2 * this.j * a / this.B, c = this.j - c, this.stretch(this.ya, this.l - b, this.j - c, b, c, 0, 0, this.l, this.j), a >= this.B / 2 && (this.Ud = 1)) : (b = 2 * this.l * a / this.B,
						b -= this.l, c = 2 * this.j * a / this.B, c -= this.j, this.stretch(this.F, this.l - b, this.j - c, b, c, 0, 0, this.l, this.j))
			}
		}
		return null
	},
	end: function() {}
});

function zl()
{
	this.zo = this.yo = this.j = this.l = this.sc = 0
}
zl.prototype = m(new Qk,
{
	za: function(a, b, c, d, e)
	{
		this.sc = F(b);
		this.start(a, c, d, e)
	},
	od: function()
	{
		this.gb && (this.gb = !1, this.l = this.F.width, this.j = this.F.height, this.zo = this.yo = 0);
		var a = il(this);
		if (1 < a / this.B) this.V(this.F);
		else
		{
			var b, c, d, e;
			b = this.j * a / this.B;
			a = this.l * a / this.B;
			if (0 == this.sc)
			{
				e = b % 2;
				for (c = 0; c < this.l; c += 2)
				{
					for (d = this.yo; d < b; d++) this.V(this.F, c, d, c, d, 1, 1);
					for (d = this.j - b - e; d < this.j - this.yo; d++) this.V(this.F, c + 1, d + 1, c + 1, d + 1, 1, 1)
				}
				this.yo = 0 == b % 2 ? b : b - 1
			}
			if (1 == this.sc)
			{
				e = a % 2;
				for (d = 0; d < this.j; d++)
				{
					for (c =
						this.zo; c < a; c += 2) this.V(this.F, c + 1, d, c + 1, d, 1, 1);
					for (c = this.l - a - e; c < this.l - this.zo; c += 2) this.V(this.F, c, d + 1, c, d + 1, 1, 1)
				}
				this.zo = 0 == a % 2 ? a : a - 1
			}
			if (2 == this.sc)
			{
				e = b % 2;
				for (c = 0; c < this.l; c += 2)
				{
					for (d = this.yo; d < b; d += 2) this.V(this.F, c, d, c, d, 1, 1);
					for (d = this.j - b - e; d < this.j - this.yo; d += 2) this.V(this.F, c + 1, d + 1, c + 1, d + 1, 1, 1)
				}
				e = a % 2;
				for (d = 0; d < this.j; d += 2)
				{
					for (c = this.zo; c < a; c += 2) this.V(this.F, c + 1, d, c + 1, d, 1, 1);
					for (c = this.l - a - e; c < this.l - this.zo; c += 2) this.V(this.F, c, d + 1, c, d + 1, 1, 1)
				}
				this.yo = 0 == b % 2 ? b : b - 1;
				this.zo = 0 == a % 2 ? a : a - 1
			}
		}
		return null
	},
	end: function() {}
});

function Al()
{
	this.ah = this.j = this.l = this.ZE = this.Os = this.Zb = 0
}
Al.prototype = m(new Qk,
{
	za: function(a, b, c, d, e)
	{
		this.Zb = F(b);
		this.Os = F(b);
		this.ZE = F(b);
		this.start(a, c, d, e)
	},
	od: function()
	{
		this.gb && (this.gb = !1, this.l = this.F.width, this.j = this.F.height, this.ah = 0);
		var a = il(this);
		if (1 < a / this.B) this.V(this.F);
		else
		{
			var b, c, d;
			b = this.l / 2;
			d = this.j / 2;
			this.ah = 6.28318 * this.Zb * a / this.B;
			1 == this.ZE && (this.ah = 6.28318 - this.ah);
			c = this.l / 2 - this.l / 2 * a / this.B;
			b = Math.floor(b + Math.cos(this.ah) * c);
			c = Math.floor(d + Math.sin(this.ah) * c);
			d = this.l * a / this.B;
			a = this.j * a / this.B;
			this.stretch(this.ya,
				0, 0, this.l, this.j, 0, 0, this.ya.width, this.ya.height);
			1 == this.rQ ? this.stretch(this.F, b - d / 2, c - a / 2, d, a, 0, 0, this.l, this.j) : this.stretch(this.F, b - d / 2, c - a / 2, d, a, this.l - d, this.j - a, d, a)
		}
		return null
	},
	end: function() {}
});

function Bl()
{
	this.Rw = this.j = this.l = this.Os = this.Zb = 0
}
Bl.prototype = m(new Qk,
{
	za: function(a, b, c, d, e)
	{
		this.Zb = F(b);
		this.Os = F(b);
		this.start(a, c, d, e)
	},
	od: function()
	{
		this.gb && (this.gb = !1, this.l = this.F.width, this.j = this.F.height, this.Rw = 0);
		var a = il(this);
		if (1 < a / this.B) this.V(this.F);
		else
		{
			var b, c, d;
			b = this.l / 2;
			c = this.j / 2;
			d = 6.28318 * this.Zb * a / this.B;
			d -= 6.28318 * this.Rw;
			1 == this.Os && (d = 6.28318 - d);
			a = this.l * a / this.B;
			b = Math.floor(b + Math.cos(d) * a);
			c = Math.floor(c + Math.sin(d) * a);
			this.V(this.F);
			this.V(this.ya, b - this.l / 2, c - this.j / 2, 0, 0, this.l, this.j);
			0 == this.Os ? 6.28318 <=
				d && this.Rw++ : 0 >= d && this.Rw++
		}
		return null
	},
	end: function() {}
});

function Cl()
{
	this.Qw = this.Yw = this.cx = this.Vw = this.Pf = this.cB = this.Fa = this.Ea = this.Bo = this.Eo = this.bk = this.Fh = this.ba = this.EI = this.uy = this.aD = 0
}
Cl.prototype = m(new Qk,
{
	za: function(a, b, c, d, e)
	{
		this.aD = F(b);
		this.uy = T(b);
		this.EI = T(b);
		this.start(a, c, d, e)
	},
	od: function()
	{
		var a = this.ya.width,
			b = this.ya.height;
		if (this.gb)
		{
			this.ba = Math.floor((a * this.aD / 100 + b * this.aD / 100) / 2);
			0 == this.ba && (this.ba = 1);
			this.Fh = (a + this.ba - 1) / this.ba;
			this.bk = (b + this.ba - 1) / this.ba;
			this.cB = this.EI;
			this.Pf = this.uy;
			switch (this.uy)
			{
				case 0:
					this.Ea = this.Fa = 0;
					break;
				case 1:
					this.Ea = a - this.ba;
					this.Fa = 0;
					break;
				case 2:
					this.Ea = 0;
					this.Fa = b - this.ba;
					break;
				case 3:
					this.Ea = a - this.ba;
					this.Fa = b -
						this.ba;
					break;
				case 4:
					this.Ea = a / 2 - this.ba, this.Fa = b / 2 - this.ba, this.Pf = 0 == this.cB ? 0 : 1, this.Vw = this.Ea - this.ba, this.cx = this.Fa - this.ba, this.Qw = this.Fa + 2 * this.ba, this.Yw = this.Ea + 2 * this.ba, this.Fh = 2 + 2 * (this.Ea + this.ba - 1) / this.ba, this.bk = 2 + 2 * (this.Fa + this.ba - 1) / this.ba
			}
			this.Eo = Math.floor(this.Fh * this.bk);
			this.Bo = 0;
			this.gb = !1
		}
		if (this.ba >= a || this.ba >= b) this.V(this.F);
		else
		{
			var c;
			c = Math.floor(this.Eo * il(this) / this.B);
			var d = c - this.Bo;
			if (0 != d)
				for (this.Bo = c, c = 0; c < d; c++)
					if (this.V(this.F, this.Ea, this.Fa, this.Ea,
							this.Fa, this.ba, this.ba), 4 == this.uy) switch (this.Pf)
					{
						case 0:
							this.Ea += this.ba;
							this.Ea >= this.Yw && (this.Ea -= this.ba, this.Fa += this.ba, this.Pf = 1, this.Yw += this.ba);
							break;
						case 1:
							this.Fa += this.ba;
							this.Fa >= this.Qw && (this.Fa -= this.ba, this.Ea -= this.ba, this.Pf = 3, this.Qw += this.ba);
							break;
						case 3:
							this.Ea -= this.ba;
							this.Ea + this.ba <= this.Vw && (this.Ea += this.ba, this.Fa -= this.ba, this.Pf = 2, this.Vw -= this.ba);
							break;
						case 2:
							this.Fa -= this.ba, this.Fa + this.ba <= this.cx && (this.Fa += this.ba, this.Ea += this.ba, this.Pf = 0, this.cx -= this.ba)
					}
			else switch (this.cB)
			{
				case 0:
					switch (this.Pf)
					{
						case 0:
							this.Ea +=
								this.ba;
							this.Ea >= a && (this.Ea -= this.ba, this.Fa += this.ba, this.Pf = 1);
							break;
						case 1:
							this.Ea -= this.ba;
							0 >= this.Ea + this.ba && (this.Ea += this.ba, this.Fa += this.ba, this.Pf = 0);
							break;
						case 2:
							this.Ea += this.ba;
							this.Ea >= a && (this.Ea -= this.ba, this.Fa -= this.ba, this.Pf = 3);
							break;
						case 3:
							this.Ea -= this.ba, 0 >= this.Ea + this.ba && (this.Ea += this.ba, this.Fa -= this.ba, this.Pf = 2)
					}
					break;
				case 1:
					switch (this.Pf)
					{
						case 0:
							this.Fa += this.ba;
							this.Fa >= b && (this.Fa -= this.ba, this.Ea += this.ba, this.Pf = 2);
							break;
						case 1:
							this.Fa += this.ba;
							this.Fa >= b && (this.Fa -=
								this.ba, this.Ea -= this.ba, this.Pf = 3);
							break;
						case 2:
							this.Fa -= this.ba;
							0 >= this.Fa + this.ba && (this.Fa += this.ba, this.Ea += this.ba, this.Pf = 0);
							break;
						case 3:
							this.Fa -= this.ba, 0 >= this.Fa + this.ba && (this.Fa += this.ba, this.Ea -= this.ba, this.Pf = 1)
					}
			}
		}
		return null
	},
	end: function() {}
});

function Dl()
{
	this.aj = this.Co = this.j = this.l = this.Zb = this.sc = 0
}
Dl.prototype = m(new Qk,
{
	za: function(a, b, c, d, e)
	{
		this.sc = F(b);
		this.Zb = F(b);
		this.start(a, c, d, e)
	},
	od: function()
	{
		this.gb && (this.gb = !1, this.l = this.F.width, this.j = this.F.height, this.aj = this.Co = 0);
		var a = il(this);
		if (1 < a / this.B) this.V(this.F);
		else
		{
			var b, c, d, e;
			0 == this.sc ? (b = this.j / this.Zb, e = Math.floor(this.Co * b) + Math.floor(b), c = 0, d = this.l * a / this.B, d = d * this.Zb / 2, d -= this.l * this.Co, b = 0 == this.aj ? 0 : this.l - d, this.V(this.F, b, c, b, c, d, e), c = this.j - e, b = 1 == this.aj ? 0 : this.l - d, this.V(this.F, b, c, b, c, d, e), d >= this.l && (this.Co++,
				this.aj++, 2 == this.aj && (this.aj = 0))) : (b = this.l / this.Zb, d = Math.floor(this.Co * b) + Math.floor(b), b = 0, e = this.j * a / this.B, e = e * this.Zb / 2, e -= this.j * this.Co, c = 0 == this.aj ? 0 : this.j - e, this.V(this.F, b, c, b, c, d, e), b = this.l - d, c = 1 == this.aj ? 0 : this.j - e, this.V(this.F, b, c, b, c, d, e), e >= this.j && (this.Co++, this.aj++, 2 == this.aj && (this.aj = 0)))
		}
		return null
	},
	end: function() {}
});

function El()
{}
El.prototype = m(new Qk,
{
	za: function(a, b, c, d, e)
	{
		this.start(a, c, d, e)
	},
	od: function(a)
	{
		var b = this.ya.width,
			c = this.ya.height;
		this.gb && (this.gb = !1);
		if (0 == this.B) this.V(this.F);
		else
		{
			var d;
			d = il(this);
			0 != (a & pg) ? (a = Math.floor(b - b * d / this.B), d = Math.floor(c - c * d / this.B), this.V(this.F), this.stretch(this.ya, (b - a) / 2, (c - d) / 2, a, d, 0, 0, b, c)) : (a = Math.floor(b * d / this.B), d = Math.floor(c * d / this.B), this.V(this.ya), this.stretch(this.F, (b - a) / 2, (c - d) / 2, a, d, 0, 0, b, c))
		}
		return null
	},
	end: function() {}
});

function Fl()
{
	this.j = this.l = this.Zb = 0
}
Fl.prototype = m(new Qk,
{
	za: function(a, b, c, d, e)
	{
		this.Zb = F(b);
		this.start(a, c, d, e)
	},
	od: function()
	{
		this.gb && (this.gb = !1, this.l = this.F.width, this.j = this.F.height);
		var a = il(this);
		if (1 < a / this.B) this.V(this.F);
		else
		{
			var b, c, d;
			0 == this.Zb ? (c = this.l * a / this.B, d = this.j * a / this.B, a = this.l / 2 - c / 2, b = this.j / 2 - d / 2, this.stretch(this.F, 0, 0, this.l, this.j, a, b, c, d)) : (c = this.l * a / this.B, c = this.l - c, d = this.j * a / this.B, d = this.j - d, a = this.l / 2 - c / 2, b = this.j / 2 - d / 2, this.stretch(this.ya, 0, 0, this.l, this.j, a, b, c, d))
		}
		return null
	},
	end: function() {}
});

function Bd(a, b)
{
	this.files = {};
	this.root = "";
	a && this.load(a, b)
}
var Hl = {
	Xk: !1,
	qm: !1,
	dir: !1,
	Pi: null,
	cq: null
};
Bd.prototype = function()
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

	function c(c, e, h)
	{
		var g = b(c);
		g && a.call(this, g);
		h = h ||
		{};
		!0 === h.Xk && null == h.qm && (h.qm = !0);
		h = d(h, Hl);
		h.Pi = h.Pi || new Date;
		null !== h.cq && (h.cq = h.cq.toUpperCase());
		h.dir || null === e || "undefined" === typeof e ? (h.Xk = !1, h.qm = !1, e = null) :
			Il && e instanceof Uint8Array ? (h.Xk = !1, h.qm = !0, e = Jl(e)) : Kl && e instanceof ArrayBuffer ? (h.Xk = !1, h.qm = !0, e = new Uint8Array(e), e = Jl(e)) : h.qm && !h.Xk && (!0 !== h.jH && (e = Ll(e)), delete h.jH);
		return this.files[c] = new f(c, e, h)
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
		for (d = 0; d < b; d++) c += String.fromCharCode(a & 255), a >>>= 8;
		return c
	}

	function f(a, b, c)
	{
		this.name = a;
		this.data =
			b;
		this.options = c
	}
	f.prototype = {
		WD: function()
		{
			var a = this.data;
			if (null === a || "undefined" === typeof a) return "";
			this.options.Xk && (a = Ml.decode(a));
			this.options.qm || (a = Bd.prototype.yI(a));
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
			for (c in this.files) this.files.hasOwnProperty(c) && (e = this.files[c], g = new f(e.name, e.data, d(e.options)), e = c.slice(this.root.length, c.length), c.slice(0, this.root.length) === this.root &&
				a(e, g) && b.push(g));
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
		lP: function(b)
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
			a =
				this.root + a;
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
		oP: function(a)
		{
			var b, c;
			a = d(a ||
			{},
			{
				Xk: !0,
				cq: "STORE",
				type: "base64"
			});
			var f = a.cq.toUpperCase();
			if (!Nl[f]) throw f + " is not a valid compression method !";
			var g = [],
				r = [],
				u = 0,
				q;
			for (q in this.files)
				if (this.files.hasOwnProperty(q))
				{
					b = this.files[q];
					var v = this.yI(b.name),
						n, w, D;
					w = b;
					b = v;
					var z = f;
					n = b !== w.name;
					c = w.WD();
					var A = w.options;
					D = A.Pi.getHours();
					D = D << 6 | A.Pi.getMinutes();
					D = D << 5 | A.Pi.getSeconds() / 2;
					w = A.Pi.getFullYear() - 1980;
					w = w << 4 | A.Pi.getMonth() + 1;
					w = w << 5 | A.Pi.getDate();
					var I = null !== c && 0 !== c.length,
						z = A.cq || z;
					if (!Nl[z]) throw z + " is not a valid compression method !";
					A = Nl[z];
					z = I ? A.QK(c) : "";
					n = "\n\x00" + (n ? "\x00\b" : "\x00\x00") + (I ? A.ex : Nl.STORE.ex);
					n += e(D, 2);
					n += e(w, 2);
					n += I ? e(this.$v(c), 4) : "\x00\x00\x00\x00";
					n += I ? e(z.length, 4) : "\x00\x00\x00\x00";
					n +=
						I ? e(c.length, 4) : "\x00\x00\x00\x00";
					n += e(b.length, 2);
					b = n += "\x00\x00";
					c = z;
					c = "PK\u0003\u0004" + b + v + c;
					v = "PK\u0001\u0002\u0014\x00" + b + "\x00\x00\x00\x00\x00\x00" + (!0 === this.files[q].options.dir ? "\u0010\x00\x00\x00" : "\x00\x00\x00\x00") + e(u, 4) + v;
					u += c.length;
					r.push(c);
					g.push(v)
				} f = r.join("");
			g = g.join("");
			r = f + g + ("PK\u0005\u0006\x00\x00\x00\x00" + e(r.length, 2) + e(r.length, 2) + e(g.length, 4) + e(f.length, 4) + "\x00\x00");
			switch (a.type.toLowerCase())
			{
				case "uint8array":
					return Ol(r);
				case "arraybuffer":
					return Ol(r).buffer;
				case "blob":
					var G;
					a:
					{
						if (!Pl) throw Error("Blob is not supported by this browser");a = Ol(r).buffer;
						try
						{
							G = new Blob([a],
							{
								type: "application/zip"
							});
							break a
						}
						catch (O)
						{}
						try
						{
							var R = new(window.BlobBuilder || window.WebKitBlobBuilder || window.iJ || window.fJ);
							R.append(a);
							G = R.getBlob("application/zip");
							break a
						}
						catch (O)
						{}
						throw Error("Bug : can't construct the Blob.");
					}
					return G;
				case "base64":
					return a.Xk ? Ml.encode(r) : r;
				default:
					return r
			}
		},
		$v: function(a, b)
		{
			if ("" === a || "undefined" === typeof a) return 0;
			var c = [0, 1996959894, 3993919788,
				2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546,
				3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960,
				984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377,
				4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403,
				1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918E3, 2847714899, 3736837829,
				1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117
			];
			"undefined" == typeof b && (b = 0);
			var d;
			b ^= -1;
			for (var e = 0, f = a.length; e < f; e++) d = (b ^ a.charCodeAt(e)) & 255, d = c[d], b = b >>> 8 ^ d;
			return b ^ -1
		},
		clone: function()
		{
			var a = new Bd,
				b;
			for (b in this) "function" !== typeof this[b] && (a[b] = this[b]);
			return a
		},
		yI: function(a)
		{
			for (var b = "", c = 0; c < a.length; c++)
			{
				var d = a.charCodeAt(c);
				128 > d ? b +=
					String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d & 63 | 128))
			}
			return b
		},
		xI: function(a)
		{
			for (var b = "", c = 0, d, e, f; c < a.length;) d = a.charCodeAt(c), 128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (e = a.charCodeAt(c + 1), b += String.fromCharCode((d & 31) << 6 | e & 63), c += 2) : (e = a.charCodeAt(c + 1), f = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | f & 63), c += 3);
			return b
		}
	}
}();
var Nl = {
		STORE:
		{
			ex: "\x00\x00",
			QK: function(a)
			{
				return a
			},
			YC: function(a)
			{
				return a
			}
		}
	},
	Kl = "undefined" !== typeof ArrayBuffer && "undefined" !== typeof Uint8Array,
	Il = "undefined" !== typeof Uint8Array,
	Pl = function()
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
			var b = new(window.BlobBuilder || window.WebKitBlobBuilder || window.iJ || window.fJ);
			b.append(a);
			return 0 === b.getBlob("application/zip").size
		}
		catch (c)
		{}
		return !1
	}();

function Ll(a)
{
	for (var b = "", c = 0; c < a.length; c++) b += String.fromCharCode(a.charCodeAt(c) & 255);
	return b
}

function Ol(a)
{
	if (!Il) throw Error("Uint8Array is not supported by this browser");
	for (var b = new ArrayBuffer(a.length), b = new Uint8Array(b), c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
	return b
}

function Jl(a)
{
	if (!Il) throw Error("Uint8Array is not supported by this browser");
	for (var b = "", c = 0; c < a.length; c++) b += String.fromCharCode(a[c]);
	return b
}
var Ml = {
	encode: function(a)
	{
		for (var b = "", c, d, e, f, g, k, h = 0; h < a.length;) c = a.charCodeAt(h++), d = a.charCodeAt(h++), e = a.charCodeAt(h++), f = c >> 2, c = (c & 3) << 4 | d >> 4, g = (d & 15) << 2 | e >> 6, k = e & 63, isNaN(d) ? g = k = 64 : isNaN(e) && (k = 64), b = b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(k);
		return b
	},
	decode: function(a)
	{
		var b = "",
			c, d, e, f, g, k = 0;
		for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); k < a.length;) c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(k++)), d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(k++)), f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(k++)), g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(k++)), c = c << 2 | d >> 4, d = (d & 15) << 4 |
			f >> 2, e = (f & 3) << 6 | g, b += String.fromCharCode(c), 64 != f && (b += String.fromCharCode(d)), 64 != g && (b += String.fromCharCode(e));
		return b
	}
};
if (!Bd) throw "JSZip not defined";
(function()
{
	function a()
	{
		this.list = this.next = null
	}

	function b()
	{
		this.n = this.Mi = this.e = 0;
		this.t = null
	}

	function c(c, d, e, f, g, k)
	{
		this.un = 16;
		this.lJ = 288;
		this.status = 0;
		this.root = null;
		this.il = 0;
		var t = Array(this.un + 1),
			h, C, B, J, P, H, l, Q = Array(this.un + 1),
			U, p, n, ia = new b,
			q = Array(this.un);
		J = Array(this.lJ);
		var w, r = Array(this.un + 1),
			ua, va, ha;
		ha = this.root = null;
		for (P = 0; P < t.length; P++) t[P] = 0;
		for (P = 0; P < Q.length; P++) Q[P] = 0;
		for (P = 0; P < q.length; P++) q[P] = null;
		for (P = 0; P < J.length; P++) J[P] = 0;
		for (P = 0; P < r.length; P++) r[P] = 0;
		h = 256 <
			d ? c[256] : this.un;
		U = c;
		p = 0;
		P = d;
		do t[U[p]]++, p++; while (0 < --P);
		if (t[0] == d) this.root = null, this.status = this.il = 0;
		else
		{
			for (H = 1; H <= this.un && 0 == t[H]; H++);
			l = H;
			k < H && (k = H);
			for (P = this.un; 0 != P && 0 == t[P]; P--);
			B = P;
			k > P && (k = P);
			for (ua = 1 << H; H < P; H++, ua <<= 1)
				if (0 > (ua -= t[H]))
				{
					this.status = 2;
					this.il = k;
					return
				} if (0 > (ua -= t[P])) this.status = 2, this.il = k;
			else
			{
				t[P] += ua;
				r[1] = H = 0;
				U = t;
				p = 1;
				for (n = 2; 0 < --P;) r[n++] = H += U[p++];
				U = c;
				P = p = 0;
				do 0 != (H = U[p++]) && (J[r[H]++] = P); while (++P < d);
				d = r[B];
				r[0] = P = 0;
				U = J;
				p = 0;
				J = -1;
				w = Q[0] = 0;
				n = null;
				for (va = 0; l <= B; l++)
					for (c =
						t[l]; 0 < c--;)
					{
						for (; l > w + Q[1 + J];)
						{
							w += Q[1 + J];
							J++;
							va = (va = B - w) > k ? k : va;
							if ((C = 1 << (H = l - w)) > c + 1)
								for (C -= c + 1, n = l; ++H < va && !((C <<= 1) <= t[++n]);) C -= t[n];
							w + H > h && w < h && (H = h - w);
							va = 1 << H;
							Q[1 + J] = H;
							n = Array(va);
							for (C = 0; C < va; C++) n[C] = new b;
							ha = null == ha ? this.root = new a : ha.next = new a;
							ha.next = null;
							ha.list = n;
							q[J] = n;
							0 < J && (r[J] = P, ia.Mi = Q[J], ia.e = 16 + H, ia.t = n, H = (P & (1 << w) - 1) >> w - Q[J], q[J - 1][H].e = ia.e, q[J - 1][H].Mi = ia.Mi, q[J - 1][H].n = ia.n, q[J - 1][H].t = ia.t)
						}
						ia.Mi = l - w;
						p >= d ? ia.e = 99 : U[p] < e ? (ia.e = 256 > U[p] ? 16 : 15, ia.n = U[p++]) : (ia.e = g[U[p] - e],
							ia.n = f[U[p++] - e]);
						C = 1 << l - w;
						for (H = P >> w; H < va; H += C) n[H].e = ia.e, n[H].Mi = ia.Mi, n[H].n = ia.n, n[H].t = ia.t;
						for (H = 1 << l - 1; 0 != (P & H); H >>= 1) P ^= H;
						for (P ^= H;
							(P & (1 << w) - 1) != r[J];) w -= Q[J], J--
					}
				this.il = Q[1];
				this.status = 0 != ua && 1 != B ? 1 : 0
			}
		}
	}

	function d(a)
	{
		for (; D < a;) w |= (M.length == N ? -1 : M.charCodeAt(N++) & 255) << D, D += 8
	}

	function e(a)
	{
		return w & t[a]
	}

	function f(a)
	{
		w >>= a;
		D -= a
	}

	function g(a, b, c)
	{
		var g, k, t;
		if (0 == c) return 0;
		for (t = 0;;)
		{
			d(K);
			k = R.list[e(K)];
			for (g = k.e; 16 < g;)
			{
				if (99 == g) return -1;
				f(k.Mi);
				g -= 16;
				d(g);
				k = k.t[e(g)];
				g = k.e
			}
			f(k.Mi);
			if (16 ==
				g) u &= 32767, a[b + t++] = r[u++] = k.n;
			else
			{
				if (15 == g) break;
				d(g);
				I = k.n + e(g);
				f(g);
				d(L);
				k = O.list[e(L)];
				for (g = k.e; 16 < g;)
				{
					if (99 == g) return -1;
					f(k.Mi);
					g -= 16;
					d(g);
					k = k.t[e(g)];
					g = k.e
				}
				f(k.Mi);
				d(g);
				G = u - k.n - e(g);
				for (f(g); 0 < I && t < c;) I--, G &= 32767, u &= 32767, a[b + t++] = r[u++] = r[G++]
			}
			if (t == c) return c
		}
		z = -1;
		return t
	}

	function k(a, b, k)
	{
		var t, h, l, p, Q, n, q, w = Array(316);
		for (t = 0; t < w.length; t++) w[t] = 0;
		d(5);
		n = 257 + e(5);
		f(5);
		d(5);
		q = 1 + e(5);
		f(5);
		d(4);
		t = 4 + e(4);
		f(4);
		if (286 < n || 30 < q) return -1;
		for (h = 0; h < t; h++) d(3), w[U[h]] = e(3), f(3);
		for (; 19 > h; h++) w[U[h]] =
			0;
		K = 7;
		h = new c(w, 19, 19, null, null, K);
		if (0 != h.status) return -1;
		R = h.root;
		K = h.il;
		p = n + q;
		for (t = l = 0; t < p;)
			if (d(K), Q = R.list[e(K)], h = Q.Mi, f(h), h = Q.n, 16 > h) w[t++] = l = h;
			else if (16 == h)
		{
			d(2);
			h = 3 + e(2);
			f(2);
			if (t + h > p) return -1;
			for (; 0 < h--;) w[t++] = l
		}
		else
		{
			17 == h ? (d(3), h = 3 + e(3), f(3)) : (d(7), h = 11 + e(7), f(7));
			if (t + h > p) return -1;
			for (; 0 < h--;) w[t++] = 0;
			l = 0
		}
		K = 9;
		h = new c(w, n, 257, C, B, K);
		0 == K && (h.status = 1);
		if (0 != h.status) return -1;
		R = h.root;
		K = h.il;
		for (t = 0; t < q; t++) w[t] = w[t + n];
		L = 6;
		h = new c(w, q, 0, J, H, L);
		O = h.root;
		L = h.il;
		return 0 == L && 257 < n || 0 !=
			h.status ? -1 : g(a, b, k)
	}

	function h(a, b)
	{
		var t, h;
		for (t = 0; t < b && (!A || -1 != z);)
		{
			if (0 < I)
			{
				if (0 != z)
					for (; 0 < I && t < b;) I--, G &= 32767, u &= 32767, a[0 + t++] = r[u++] = r[G++];
				else
				{
					for (; 0 < I && t < b;) I--, u &= 32767, d(8), a[0 + t++] = r[u++] = e(8), f(8);
					0 == I && (z = -1)
				}
				if (t == b) break
			}
			if (-1 == z)
			{
				if (A) break;
				d(1);
				0 != e(1) && (A = !0);
				f(1);
				d(2);
				z = e(2);
				f(2);
				R = null;
				I = 0
			}
			switch (z)
			{
				case 0:
					var P = a,
						p = 0 + t,
						U = b - t;
					h = D & 7;
					f(h);
					d(16);
					h = e(16);
					f(16);
					d(16);
					if (h != (~w & 65535)) h = -1;
					else
					{
						f(16);
						I = h;
						for (h = 0; 0 < I && h < U;) I--, u &= 32767, d(8), P[p + h++] = r[u++] = e(8), f(8);
						0 == I && (z = -1)
					}
					break;
				case 1:
					if (null != R) h = g(a, 0 + t, b - t);
					else a:
					{
						var Q;h = a;P = 0 + t;p = b - t;
						if (null == q)
						{
							U = Array(288);
							for (Q = 0; 144 > Q; Q++) U[Q] = 8;
							for (; 256 > Q; Q++) U[Q] = 9;
							for (; 280 > Q; Q++) U[Q] = 7;
							for (; 288 > Q; Q++) U[Q] = 8;
							n = 7;
							Q = new c(U, 288, 257, C, B, n);
							if (0 != Q.status)
							{
								alert("HufBuild error: " + Q.status);
								h = -1;
								break a
							}
							q = Q.root;
							n = Q.il;
							for (Q = 0; 30 > Q; Q++) U[Q] = 5;
							l = 5;
							Q = new c(U, 30, 0, J, H, l);
							if (1 < Q.status)
							{
								q = null;
								alert("HufBuild error: " + Q.status);
								h = -1;
								break a
							}
							v = Q.root;
							l = Q.il
						}
						R = q;O = v;K = n;L = l;h = g(h, P, p)
					}
					break;
				case 2:
					h = null != R ? g(a, 0 + t, b - t) : k(a, 0 + t, b - t);
					break;
				default:
					h = -1
			}
			if (-1 == h) return A ? 0 : -1;
			t += h
		}
		return t
	}

	function p(a)
	{
		var b, c, d;
		null == r && (r = Array(65536));
		D = w = u = 0;
		z = -1;
		A = !1;
		I = G = 0;
		R = null;
		M = a;
		N = 0;
		b = Array(1024);
		for (a = ""; 0 < (c = h(b, b.length));)
			for (d = 0; d < c; d++) a += String.fromCharCode(b[d]);
		M = null;
		return a
	}
	var l, r, u, q = null,
		v, n, w, D, z, A, I, G, R, O, K, L, M, N, t = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535],
		C = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
		B = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4,
			4, 4, 5, 5, 5, 5, 0, 99, 99
		],
		J = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
		H = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
		U = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
	Nl.DEFLATE ? Nl.DEFLATE.YC = p : Nl.DEFLATE = {
		ex: "\b\x00",
		YC: p
	}
})();
(function()
{
	function a(a)
	{
		var b = "",
			c, d;
		for (d = 0; d < (a || "").length; d++) c = a.charCodeAt(d), b += "\\x" + (16 > c ? "0" : "") + c.toString(16).toUpperCase();
		return b
	}

	function b(a)
	{
		this.stream = "";
		Il && a instanceof Uint8Array ? this.stream = Jl(a) : Kl && a instanceof ArrayBuffer ? (a = new Uint8Array(a), this.stream = Jl(a)) : this.stream = Ll(a);
		this.index = 0
	}

	function c(a, b)
	{
		this.options = a;
		this.XA = b
	}

	function d(a, b)
	{
		this.files = [];
		this.XA = b;
		a && this.load(a)
	}
	b.prototype = {
		zE: function(a)
		{
			this.yE(this.index + a)
		},
		yE: function(a)
		{
			if (this.stream.length <
				a || 0 > a) throw Error("End of stream reached (stream length = " + this.stream.length + ", asked index = " + a + "). Corrupted zip ?");
		},
		Ar: function(a)
		{
			this.yE(a);
			this.index = a
		},
		hI: function(a)
		{
			this.Ar(this.index + a)
		},
		MK: function(a)
		{
			return this.stream.charCodeAt(a)
		},
		tb: function(a)
		{
			var b = 0,
				c;
			this.zE(a);
			for (c = this.index + a - 1; c >= this.index; c--) b = (b << 8) + this.MK(c);
			this.index += a;
			return b
		},
		pi: function(a)
		{
			this.zE(a);
			var b = this.stream.slice(this.index, this.index + a);
			this.index += a;
			return b
		},
		WM: function()
		{
			var a = this.tb(4);
			return new Date((a >> 25 & 127) + 1980, (a >> 21 & 15) - 1, a >> 16 & 31, a >> 11 & 31, a >> 5 & 63, (a & 31) << 1)
		}
	};
	c.prototype = {
		CL: function()
		{
			return 1 === (this.mE & 1)
		},
		ON: function()
		{
			return 2048 === (this.mE & 2048)
		},
		$M: function(b)
		{
			var c, d;
			b.hI(22);
			this.vA = b.tb(2);
			d = b.tb(2);
			this.fileName = b.pi(this.vA);
			b.hI(d);
			if (-1 == this.Wv || -1 == this.qy) throw Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");
			this.RK = b.pi(this.Wv);
			a:
			{
				b = this.DE;
				for (c in Nl)
					if (Nl.hasOwnProperty(c) &&
						Nl[c].ex === b)
					{
						c = Nl[c];
						break a
					} c = null
			}
			if (null === c) throw Error("Corrupted zip : compression " + a(this.DE) + " unknown (inner file : " + this.fileName + ")");
			this.ZC = c.YC(this.RK);
			if (this.ZC.length !== this.qy) throw Error("Bug : uncompressed data size mismatch");
			if (this.XA.HO && Bd.prototype.$v(this.ZC) !== this.$v) throw Error("Corrupted zip : CRC32 mismatch");
		},
		VM: function(a)
		{
			a.pi(2);
			a.tb(2);
			this.mE = a.tb(2);
			this.DE = a.pi(2);
			this.Pi = a.WM();
			this.$v = a.tb(4);
			this.Wv = a.tb(4);
			this.qy = a.tb(4);
			this.vA = a.tb(2);
			this.kL = a.tb(2);
			this.lL = a.tb(2);
			this.XE = a.tb(2);
			a.tb(2);
			this.jL = a.tb(4);
			this.ZA = a.tb(4);
			if (this.CL()) throw Error("Encrypted zip are not supported");
			this.fileName = a.pi(this.vA);
			this.YM(a);
			this.BM(a);
			this.oF = a.pi(this.lL);
			this.dir = this.jL & 16 ? !0 : !1
		},
		BM: function()
		{
			if (this.mw[1])
			{
				var a = new b(this.mw[1].value); - 1 === this.qy && (this.qy = a.tb(8)); - 1 === this.Wv && (this.Wv = a.tb(8)); - 1 === this.ZA && (this.ZA = a.tb(8)); - 1 === this.XE && (this.XE = a.tb(4))
			}
		},
		YM: function(a)
		{
			var b = a.index,
				c, d, e;
			for (this.mw = this.mw ||
				{}; a.index < b + this.kL;) c = a.tb(2),
				d = a.tb(2), e = a.pi(d), this.mw[c] = {
					id: c,
					length: d,
					value: e
				}
		},
		vL: function()
		{
			this.ON() && (this.fileName = Bd.prototype.xI(this.fileName), this.oF = Bd.prototype.xI(this.oF))
		}
	};
	d.prototype = {
		Uv: function(b)
		{
			var c = this.dc.pi(4);
			if (c !== b) throw Error("Corrupted zip or bug : unexpected signature (" + a(c) + ", expected " + a(b) + ")");
		},
		RM: function()
		{
			this.WE = this.dc.tb(2);
			this.YE = this.dc.tb(2);
			this.wE = this.dc.tb(2);
			this.vE = this.dc.tb(2);
			this.xE = this.dc.tb(4);
			this.dA = this.dc.tb(4);
			this.SN = this.dc.tb(2);
			this.dc.pi(this.SN)
		},
		SM: function()
		{
			this.QN =
				this.dc.tb(8);
			this.dc.pi(2);
			this.dc.tb(2);
			this.WE = this.dc.tb(4);
			this.YE = this.dc.tb(4);
			this.wE = this.dc.tb(8);
			this.vE = this.dc.tb(8);
			this.xE = this.dc.tb(8);
			this.dA = this.dc.tb(8);
			this.RN = {};
			for (var a = this.QN - 44, b, c, d; 0 < a;) b = this.dc.tb(2), c = this.dc.tb(4), d = this.dc.pi(c), this.RN[b] = {
				id: b,
				length: c,
				value: d
			}
		},
		TM: function()
		{
			this.dc.tb(4);
			this.cN = this.dc.tb(8);
			this.eL = this.dc.tb(4);
			if (1 < this.eL) throw Error("Multi-volumes zip are not supported");
		},
		ZM: function()
		{
			var a, b;
			for (a = 0; a < this.files.length; a++) b = this.files[a],
				this.dc.Ar(b.ZA), this.Uv("PK\u0003\u0004"), b.$M(this.dc), b.vL()
		},
		UM: function()
		{
			var a;
			for (this.dc.Ar(this.dA);
				"PK\u0001\u0002" === this.dc.pi(4);) a = new c(
			{
				DI: this.DI
			}, this.XA), a.VM(this.dc), this.files.push(a)
		},
		XM: function()
		{
			var a = this.dc.stream.lastIndexOf("PK\u0005\u0006");
			if (-1 === a) throw Error("Corrupted zip : can't find end of central directory");
			this.dc.Ar(a);
			this.Uv("PK\u0005\u0006");
			this.RM();
			if (65535 === this.WE || 65535 === this.YE || 65535 === this.wE || 65535 === this.vE || -1 === this.xE || -1 === this.dA)
			{
				this.DI = !0;
				a = this.dc.stream.lastIndexOf("PK\u0006\u0007");
				if (-1 === a) throw Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
				this.dc.Ar(a);
				this.Uv("PK\u0006\u0007");
				this.TM();
				this.dc.Ar(this.cN);
				this.Uv("PK\u0006\u0006");
				this.SM()
			}
		},
		load: function(a)
		{
			this.dc = new b(a);
			this.XM();
			this.UM();
			this.ZM()
		}
	};
	Bd.prototype.load = function(a, b)
	{
		var c, e, f;
		b = b ||
		{};
		b.Xk && (a = Ml.decode(a));
		c = (new d(a, b)).files;
		for (e = 0; e < c.length; e++) f = c[e], this.file(f.fileName, f.ZC,
		{
			qm: !0,
			jH: !0,
			Pi: f.Pi,
			dir: f.dir
		});
		return this
	}
})();
var Ql = document.getElementsByTagName("script"),
	Rl = Ql[Ql.length - 1].src;
document.oQ = Rl.substring(0, Rl.lastIndexOf("/") + 1);

function Sl()
{
	window.df.load()
}

function wg()
{
	We(window.df)
}
window.Runtime = function(a, b)
{
	var c = new Pa;
	window.df = new Ed(a, c, b);
	c.getFile(b, Sl)
};
window.headerLoaded = Sl;
window.tI = "updateApplication";
window[window.tI] = wg;

function Od()
{
	this.y = this.x = 0;
	this.visible = !0;
	this.children = [];
	this.Ej = !1
}
Od.prototype = {
	$c: function(a, b, c)
	{
		if (this.visible)
		{
			this.Ej && (a.Lb.save(), a.Lb.translate(this.Ru, this.Vu), 0 != this.angle && a.Lb.rotate(.0174532925 * -this.angle), a.Lb.scale(Math.max(.001, this.fe), Math.max(.001, this.ge)), a.Lb.translate(-this.Hb, -this.Cb));
			var d;
			for (d = 0; d < this.children.length; d++) this.children[d].$c(a, b + this.x, c + this.y);
			this.Ej && a.Lb.restore()
		}
	},
	removeChild: function(a)
	{
		var b;
		for (b = 0; b < this.children.length; b++)
			if (this.children[b] == a) return this.children.splice(b, 1), b;
		return -1
	},
	sf: function(a)
	{
		var b;
		for (b = 0; b < this.children.length; b++)
			if (this.children[b] == a) return b;
		return -1
	},
	ph: function(a, b)
	{
		var c, d = null;
		for (c = 0; c < this.children.length; c++)
			if (this.children[c] == a)
			{
				d = this.children[c];
				break
			} null != d && (this.children.splice(c, 1), b > c && b--, 0 > b && (b = 0), b >= this.children.length ? this.children.push(a) : this.children.splice(b, 0, a))
	}
};

function dk(a, b, c)
{
	c >= a.children.length ? a.children.push(b) : (0 > c && (c = 0), a.children.splice(c, 0, b))
}

function Zf(a, b)
{
	a.children.push(b)
}
var Hj = 0,
	jd = 1,
	ch = 0,
	Di = 1,
	Tl = [65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1],
	Ul = [0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535],
	Hi = new Ya,
	Ii = new Ya,
	Ki = new Ya,
	Ji = new Ya;

function Ei()
{
	this.qa = null;
	this.lineWidth = this.Cb = this.Hb = this.width = this.height = this.lineWidth = 0
}
Ei.prototype = {
	qn: function(a, b, c, d, e, f, g)
	{
		var k, h, p;
		a <= e ? (k = this, p = Math.floor(c), c = Math.floor(g), h = Math.floor(a), g = Math.floor(b), a = Math.floor(e), b = Math.floor(f)) : (k = d, d = this, p = Math.floor(g), c = Math.floor(c), h = Math.floor(e), g = Math.floor(f), a = Math.floor(a), b = Math.floor(b));
		f = k.height;
		var l = 0;
		0 != p && (f = p, g += k.height - p, l = k.height - p);
		e = d.height;
		var r = 0;
		0 != c && (e = c, b += d.height - c, r = d.height - c);
		if (h >= a + d.width || h + k.width <= a || g >= b + e || g + f < b) return !1;
		c = a - h;
		p = Math.floor(c / 16);
		c %= 16;
		h = Math.min(h + k.width - a, d.width);
		h = Math.floor((h + 15) / 16);
		g <= b ? (a = b - g + l, l = r, g = Math.min(g + f, b + e) - b) : (a = l, l = g - b + r, g = Math.min(g + f, b + e) - g);
		b = a * k.lineWidth;
		e = l * d.lineWidth;
		if (0 != c) switch (h)
		{
			case 1:
				for (a = 0; a < g; a++)
				{
					l = k.qa[b + p] << c;
					if (0 != (l & d.qa[e]) || p + 1 < k.lineWidth && (l = k.qa[b + p + 1] << c, l >>>= 16, 0 != (l & d.qa[e]))) return !0;
					b += k.lineWidth;
					e += d.lineWidth
				}
				break;
			case 2:
				for (a = 0; a < g; a++)
				{
					l = k.qa[b + p] << c;
					if (0 != (l & d.qa[e])) return !0;
					l = k.qa[b + p + 1] << c;
					r = l >>> 16;
					if (0 != (r & d.qa[e]) || 0 != (l & d.qa[e + 1]) || p + 2 < k.lineWidth && (l = k.qa[b + p + 2] << c, l >>>= 16, 0 != (l & d.qa[e + 1]))) return !0;
					b += k.lineWidth;
					e += d.lineWidth
				}
				break;
			default:
				for (a = 0; a < g; a++)
				{
					l = k.qa[b + p] << c;
					if (0 != (l & d.qa[e])) return !0;
					for (f = 0; f < h - 1; f++)
						if (l = k.qa[b + p + f + 1] << c, r = l >>> 16, 0 != (r & d.qa[e + f]) || 0 != (l & d.qa[e + f + 1])) return !0;
					if (p + f + 1 < k.lineWidth && (l = k.qa[b + p + f + 1] << c, l >>>= 16, 0 != (l & d.qa[e + f]))) return !0;
					b += k.lineWidth;
					e += d.lineWidth
				}
		}
		else
			for (a = 0; a < g; a++)
			{
				for (f = 0; f < h; f++)
					if (l = k.qa[b + p + f], 0 != (d.qa[e + f] & l)) return !0;
				b += k.lineWidth;
				e += d.lineWidth
			}
		return !1
	}
};

function Nj(a, b, c, d, e, f, g, k)
{
	b = Math.floor(b);
	c = Math.floor(c);
	e = Math.floor(e);
	f = Math.floor(f);
	var h = 0,
		p = a.height;
	0 < d && (h = a.height - d, c += h, p = d);
	if (b >= e + g || b + a.width <= e || c >= f + k || c + p < f) return !1;
	b <= e ? (d = e - b, b = Math.min(a.width - d, g)) : (d = 0, b = Math.min(e + g - b, a.width));
	c <= f ? (h = f - c + h, c = Math.min(c + p, f + k) - f) : c = Math.min(c + p, f + k) - c;
	f = Math.floor(d / 8);
	k = Math.floor((d + b + 15) / 16) - Math.floor(d / 16);
	var l;
	for (g = 0; g < c; g++) switch (e = (g + h) * a.lineWidth, k)
	{
		case 1:
			p = Tl[d & 15] & Ul[(d + b - 1 & 15) + 1];
			if (0 != (a.qa[e + f] & p)) return !0;
			break;
		case 2:
			p =
				Tl[d & 15];
			if (0 != (a.qa[e + f] & p)) return !0;
			p = Ul[(d + b - 1 & 15) + 1];
			if (0 != (a.qa[e + f + 1] & p)) return !0;
			break;
		default:
			p = Tl[d & 15];
			if (0 != (a.qa[e + f] & p)) return !0;
			for (l = 1; l < k - 1; l++)
				if (0 != a.qa[e + f + l]) return !0;
			p = Ul[(d + b - 1 & 15) + 1];
			if (0 != (a.qa[e + f + l] & p)) return !0
	}
	return !1
}

function Fi(a, b, c, d)
{
	var e, f;
	a.width = c.width;
	a.height = c.height;
	a.Hb = c.Hb;
	a.Cb = c.Cb;
	var g = Math.floor((a.width + 15 & 4294967280) / 16);
	a.lineWidth = g;
	f = g * a.height + 1;
	if ("undefined" != typeof ArrayBuffer) a.qa = new Uint16Array(new ArrayBuffer(2 * f));
	else
		for (a.qa = Array(f), e = 0; e < f; e++) a.qa[e] = 0;
	e = document.createElement("canvas");
	e.width = c.width;
	e.height = c.height;
	e = e.getContext("2d");
	0 == c.Xd ? e.drawImage(c.ud, 0, 0) : e.drawImage(b.Ba.Yd[c.Xd], c.hh, c.ih, c.width, c.height, 0, 0, c.width, c.height);
	b = e.getImageData(0, 0, a.width,
		a.height);
	if (0 == (d & Di))
		for (d = 0; d < a.height; d++)
		{
			f = d * c.width * 4 + 3;
			var k = d * g,
				h = 32768;
			for (e = 0; e < a.width; e++) 0 != b.data[f] && (a.qa[k] |= h), f += 4, h >>>= 1, 0 == h && (h = 32768, k++)
		}
	else
		for (e = 0; e < a.width; e++)
		{
			for (d = 0; d < a.height && 0 == b.data[4 * (d * c.width + e) + 3]; d++);
			if (d < a.height)
				for (k = Math.min(a.height, d + 6), h = 32768 >> (e & 15); d < k; d++) 0 != b.data[4 * (d * c.width + e) + 3] && (f = Math.floor(d * g + (e & 4294967280) / 16), a.qa[f] |= h)
		}
}

function Gi()
{
	this.qa = null;
	this.angle = 0;
	this.ge = this.fe = 1;
	this.VC = 0
}
var Uh = 1,
	bk = 16,
	dc = 32,
	dh = 64,
	ah = 128,
	Qd = 1,
	Ok = 3,
	Nk = 9,
	Lk = 4095,
	Mk = 4096,
	ck = 8192;

function Th()
{
	this.a = null;
	this.Ja = this.De = this.$e = this.gy = this.ur = this.dy = this.WH = 0;
	this.Bk = null
}
Th.prototype = {
	Aw: function(a)
	{
		0 != (this.a.Ya & hc) ? this.a.nz(this.a.A - this.a.c.Ha, this.a.w - this.a.c.Oa, this.a.b.Jb, this.ur, 0 == (this.Ja & Uh)) : (this.a.Aa |= 32, this.a.Op(this.a.A - this.a.c.Ha, this.a.w - this.a.c.Oa, this.ur, 0 != (this.a.Ya & bj), 0 == (this.Ja & Uh), -1));
		this.a.cI(this.$e, this.De);
		a && this.a.ga.Qq && (this.a.Aa |= 8)
	},
	handle: function()
	{
		var a = this.a.c,
			b, c, d, e;
		0 != (this.a.Aa & 8) ? (this.Bk || this.fq(!1), 0 != (this.a.Aa & 8) && (ng(this.Bk) ? (this.a.Aa &= -9, this.Bk = this.a.vp = null) : this.Bk.od(og))) : 0 != (this.a.Aa & zi) ? 0 != (this.a.Aa &
			zi) && (ng(this.Bk) ? (this.vp = this.Bk = null, gc(this.a.c, this.a.zc)) : this.Bk.od(pg)) : 0 == (this.Ja & 4) ? (0 != this.WH && (this.dy -= a.by, 0 > this.dy && (this.dy = this.WH, 0 == (this.Ja & dc) ? (this.Ja |= dc, Vl(this)) : (this.Ja &= ~dc, cc(this)))), null != this.a.J && this.a.J.move(), 0 == this.a.b.Kl && (0 != (this.a.Ya & Oh) ? 0 == (this.a.Ya & 8192) && 0 != (a.m.Bb & 67108864) && (b = this.a.A - this.a.Wa, c = this.a.w - this.a.Xa, d = b + this.a.da, e = c + this.a.ca, (d < a.ir || b > a.gr || e < a.mr || c > a.kr) && gc(a, this.a.zc)) : (b = this.a.A - this.a.Wa, c = this.a.w - this.a.Xa, d = b + this.a.da,
			e = c + this.a.ca, d >= a.hr && b <= a.fr && e >= a.lr && c <= a.jr || (d >= a.ir && b <= a.gr && e >= a.mr && c <= a.kr ? (this.Ja |= 4, this.gy = this.a.rm()) : 0 == (this.a.Ya & 8192) && gc(a, this.a.zc))))) : (b = this.a.A - this.a.Wa, c = this.a.w - this.a.Xa, d = b + this.a.da, e = c + this.a.ca, d >= a.hr && b <= a.fr && e >= a.lr && c <= a.jr && (this.Ja &= -5, this.Aw(!1), this.a.ph(this.gy)))
	},
	fq: function(a)
	{
		this.a.Aa &= ~(8 | zi);
		if (0 == a)
		{
			if (!this.a.ga.Qq) return !1;
			this.a.Aa |= 8
		}
		else
		{
			if (!this.a.ga.au) return !1;
			this.a.Aa |= zi
		}
		var b;
		var c = Be(this.a.c.m);
		b = this.a;
		var d = b.ga.Qq;
		a && (d = b.ga.au);
		var e = null,
			f;
		if (0 != (b.Ya & hc))
		{
			var g = Y(c.app.Ba, b.b.Jb),
				e = document.createElement("canvas");
			e.width = g.width;
			e.height = g.height;
			f = e.getContext("2d");
			0 == g.Xd ? f.drawImage(g.ud, 0, 0) : f.drawImage(c.app.Ba.Yd[g.Xd], g.hh, g.ih, g.width, g.height, 0, 0, g.width, g.height)
		}
		else 32 <= b.rb && (e = document.createElement("canvas"), e.width = b.da, e.height = b.ca, new StandardRendered(e), e = null);
		if (null == e) b = null;
		else
		{
			f = e.width;
			var k = e.height,
				g = document.createElement("canvas");
			g.width = f;
			g.height = k;
			var h = document.createElement("canvas");
			h.width = f;
			h.height = k;
			var p = document.createElement("canvas");
			p.width = f;
			p.height = k;
			a ? (f = h.getContext("2d"), f.drawImage(e, 0, 0), f = g.getContext("2d"), f.drawImage(e, 0, 0), 0 != (d.Mu & Ae) && kl(p, e, d.Lu)) : (f = p.getContext("2d"), f.drawImage(e, 0, 0), 0 != (d.Mu & Ae) && kl(h, e, d.Lu));
			a = c.fq(d, g, h, p);
			null != a && (c = 0, 0 != (b.Aa & zi) ? (a.Ww = !0, c |= pg) : (a.Ww = !1, c |= og), b.vp = g, a.od(c));
			b = a
		}
		this.Bk = b;
		return this.Bk ? !0 : (this.a.Aa &= ~(8 | zi), !1)
	},
	Vc: function()
	{
		this.gy = this.a.rm()
	}
};

function Vg(a, b)
{
	a.Ja = b ? a.Ja | dh : a.Ja & ~dh
}

function Vl(a)
{
	0 != (a.Ja & Uh) && 16 == (a.a.c.N.kc[a.a.ig].Bb & (nc | 16)) && (a.Ja &= ~Uh, a.a.Aa &= ~ec, a.a.b.fa = !0, a.a.sp())
}

function cc(a)
{
	0 == (a.Ja & Uh) && (a.Ja |= Uh, a.a.b.fa = !0, a.a.mo())
};

function Uj()
{
	this.jx = 0;
	this.Ql = null
}
Uj.prototype = {
	load: function(a)
	{
		this.jx = T(a);
		this.Ql = Array(this.jx);
		var b;
		for (b = 0; b < this.jx; b++) this.Ql[b] = a.ed()
	}
};

function Tj()
{
	this.kx = 0;
	this.values = null;
	this.Vb = 0
}
Tj.prototype = {
	load: function(a, b)
	{
		this.kx = T(a);
		this.values = Array(this.kx);
		var c;
		for (c = 0; c < this.kx; c++) this.values[c] = F(a);
		b && (this.Vb = F(a))
	}
};
var zd = 10;

function Xh()
{
	this.hy = 0;
	this.oh = this.ee = null
}
Xh.prototype = {
	za: function(a, b)
	{
		this.hy = 0;
		this.ee = Array(26);
		this.oh = Array(zd);
		var c;
		for (c = 0; c < this.ee.length; c++) this.ee[c] = 0;
		for (c = 0; c < this.oh.length; c++) this.oh[c] = "";
		if (null != b.Rq)
			for (this.hy = b.Rq.Vb, c = 0; c < b.Rq.kx; c++) this.ee[c] = b.Rq.values[c];
		if (null != b.du)
			for (c = 0; c < b.du.jx; c++) this.oh[c] = b.du.Ql[c]
	},
	Vc: function()
	{
		var a;
		for (a = 0; a < this.ee.length; a++) this.ee[a] = 0;
		for (a = 0; a < this.oh.length; a++) this.oh[a] = null
	},
	eI: function(a, b)
	{
		a > this.ub.ee.length && rc(this, a + 10);
		this.ee[a] = b
	}
};

function rc(a, b)
{
	if (b >= a.ee.length)
	{
		var c;
		for (c = 0; c < b; c++) a.ee[c] = 0
	}
}

function rd(a, b)
{
	return b < a.oh.length ? a.oh[b] : ""
}

function fd(a, b)
{
	return b < a.ee.length ? a.ee[b] : 0
};

function Kd(a)
{
	this.app = a;
	this.io = null;
	this.lx = 0
}
Kd.prototype = {
	Iw: function(a)
	{
		a -= 32;
		var b = null;
		a < this.io.length && null != this.io[a] && (b = this.io[a].Iw());
		return b
	},
	pw: function(a)
	{
		a -= 32;
		return a < this.io.length ? this.lx[a] : 0
	}
};

function Ld()
{
	this.handle = 0
}
Ld.prototype = {
	Iw: function()
	{
		switch (this.handle)
		{
			case 0:
				return new Wl
		}
		return null
	}
};
var fk = 2;

function Xl()
{
	this.I = this.v = null
}
Xl.prototype = {
	za: function(a)
	{
		this.v = a;
		this.I = a.c
	},
	pw: function()
	{
		return 0
	},
	JE: function()
	{
		return !1
	},
	HA: function()
	{
		return fk
	},
	jA: function() {},
	IE: function() {},
	CM: function() {},
	XK: function() {},
	Xv: function()
	{
		return !1
	},
	action: function() {},
	kw: function()
	{
		return null
	},
	sL: function()
	{
		return null
	},
	FN: function() {},
	km: function() {},
	nq: function() {}
};

function Gk()
{}
Gk.prototype = {
	evaluate: function(a)
	{
		var b = pd(a.u, this.Zd);
		if (null == b) a.Bf[a.fd] = 0;
		else
		{
			var c = (this.code >> 16) - 80;
			a.hA = this;
			a.Bf[a.fd] = b.kw(c)
		}
	}
};

function Ui()
{}
Ui.prototype = {
	Ic: function(a)
	{
		var b = Pb(a.u, this);
		if (null != b)
		{
			var c = (this.qb >>> 16) - 80;
			a.hA = this;
			b.action(c, this)
		}
	},
	Sc: function(a, b)
	{
		var c = a.u,
			d = this.S[b].Zd;
		c.cr = !0;
		d = Ej(c, d);
		null != d ? 0 != c.Be && (this.Ib |= 1, c.cn = !0) : this.Ib |= xh;
		return d
	},
	wb: function(a, b)
	{
		return nb(a, this.S[b])
	},
	tf: function(a, b)
	{
		return Xg(a, this.S[b])
	}
};

function Qc()
{}
Qc.prototype = {
	gd: function(a, b)
	{
		if (null == b) return this.pb(a);
		b.Aa |= 2;
		var c = -(this.qb >> 16) - 80 - 1;
		a.hA = this;
		return b.Xv(c, this) ? (Mb(a.u, b), !0) : !1
	},
	pb: function(a)
	{
		var b = Uc(a.u, this.Rc),
			c = a.u.Si,
			d = -(this.qb >> 16) - 80 - 1;
		for (a.hA = this; null != b;) b.Aa &= -3, b.Xv(d, this) ? 0 != (this.Ri & Sc) && (c--, Wc(a.u)) : 0 == (this.Ri & Sc) && (c--, Wc(a.u)), b = Xc(a.u);
		return 0 != c ? !0 : !1
	},
	Sc: function(a, b)
	{
		return this.S[b]
	},
	wb: function(a, b)
	{
		return nb(a, this.S[b])
	},
	tf: function(a, b)
	{
		return Xg(a, this.S[b])
	}
};
(function()
{
	this.element = null;
	this.FE = !1
}).prototype = m(new Xl,
{
	nq: function()
	{
		this.setPosition(this.v.A, this.v.w)
	},
	km: function()
	{
		this.setPosition(this.v.A, this.v.w);
		this.Ju(this.v.da, this.v.ca)
	},
	jQ: function(a, b)
	{
		this.element = a;
		a.style.position = "absolute";
		this.Ju(this.v.da, this.v.ca);
		this.setPosition(this.v.A, this.v.w);
		this.xA && this.yr(this.xA);
		this.Uz = this.v.ib = b;
		this.I.m.Qj ? (a.style.visibility = "hidden", this.Uz = !1) : a.style.visibility = b ? "visible" : "hidden";
		this.I.m.gA.appendChild(a)
	},
	DF: function()
	{
		return this.I.m.canvas ?
			this.I.m.canvas.offsetLeft : 0
	},
	EF: function()
	{
		return this.I.m.canvas ? this.I.m.canvas.offsetTop : 0
	},
	fI: function(a)
	{
		this.PE = a;
		this.v.fI(a);
		this.element && (this.element.style.left = this.DF() + this.I.m.uj + (this.v.A - this.v.c.Ha) * this.I.m.fe + "px")
	},
	gI: function(a)
	{
		this.QE = a;
		this.v.gI(a);
		this.element && (this.element.style.top = this.EF() + this.I.m.wj + (this.v.w - this.v.c.Oa) * this.I.m.ge + "px")
	},
	setPosition: function(a, b)
	{
		this.PE = a;
		this.QE = b;
		this.v.setPosition(a, b);
		this.element && (this.element.style.left = this.DF() + this.I.m.uj +
			(this.v.A - this.v.c.Ha) * this.I.m.fe + "px", this.element.style.top = this.EF() + this.I.m.wj + (this.v.w - this.v.c.Oa) * this.I.m.ge + "px")
	},
	QC: function(a)
	{
		this.OE = a;
		this.v.QC(a);
		this.element && (this.element.style.width = this.v.da * this.I.m.fe + "px")
	},
	PC: function(a)
	{
		this.NE = a;
		this.v.PC(a);
		this.element && !this.FE && (this.element.style.height = this.v.ca * this.I.m.ge + "px")
	},
	Ju: function(a, b)
	{
		this.OE = a;
		this.NE = b;
		this.v.Ju(a, b);
		this.element && (this.element.style.width = this.v.da * this.I.m.fe + "px", this.FE || (this.element.style.height =
			this.v.ca * this.I.m.ge + "px"))
	},
	yr: function(a)
	{
		this.xA = a;
		this.element && (this.element.style.font = a.dl())
	},
	jA: function()
	{
		this.element && this.I.m.gA.removeChild(this.element)
	},
	sL: function()
	{
		return this.xA
	},
	FN: function(a)
	{
		this.yr(a)
	},
	HA: function()
	{
		this.I.m.Qj || this.v.ib == this.Uz || (this.Uz = this.v.ib, this.element.style.visibility = this.v.ib ? "visible" : "hidden");
		this.v.A == this.PE && this.v.w == this.QE || this.setPosition(this.v.A, this.v.w);
		this.v.da == this.OE && this.v.ca == this.NE || this.Ju(this.v.da, this.v.ca);
		return 0
	}
});
var Vh = 0,
	ii = 1,
	lh = 9,
	Wg = 11,
	mc = 13,
	Mg = 14;

function Yl()
{
	this.DB = 100;
	this.ix = this.UG = this.VG = this.Kq = 0
}
Yl.prototype = {
	setData: function(a, b, c, d, e)
	{
		this.DB = a;
		this.Kq = b;
		this.VG = c;
		this.UG = d;
		this.ix = e
	}
};

function Sj()
{
	this.Wt = 0;
	this.Af = null
}
Sj.prototype = {
	load: function(a)
	{
		var b = a.Ga;
		this.Wt = F(a);
		this.Af = Array(this.Wt);
		var c;
		for (c = 0; c < this.Wt; c++)
		{
			a.seek(b + 4 + 16 * c);
			var d = F(a),
				e = F(a),
				f = F(a),
				g = F(a);
			a.seek(b + f);
			var f = T(a),
				k = T(a),
				h = a.oa(),
				p = a.oa();
			V(a, 2);
			var l = F(a);
			switch (k)
			{
				case 0:
					this.Af[c] = new Zl;
					break;
				case 1:
					this.Af[c] = new $l;
					break;
				case 2:
					this.Af[c] = new am;
					break;
				case 3:
					this.Af[c] = new bm;
					break;
				case 4:
					this.Af[c] = new cm;
					break;
				case 5:
					this.Af[c] = new dm;
					break;
				case 9:
					this.Af[c] = new em;
					break;
				case 14:
					this.Af[c] = new fm
			}
			this.Af[c].setData(k, f, h, l,
				p);
			this.Af[c].load(a, g - 12);
			14 == k && (a.seek(b + d), d = a.ed(), d = d.substring(0, d.length - 4), d = d.toLowerCase(), this.Af[c].EN(d, e))
		}
	}
};

function cm()
{
	this.qG = this.rG = this.oG = this.pG = this.Nt = 0
}
cm.prototype = m(new Yl,
{
	load: function(a)
	{
		this.Nt = T(a);
		this.pG = T(a);
		this.oG = T(a);
		this.rG = T(a);
		this.qG = T(a)
	}
});

function bm()
{
	this.wG = this.vG = this.uG = this.xG = 0
}
bm.prototype = m(new Yl,
{
	load: function(a)
	{
		this.xG = T(a);
		this.uG = T(a);
		this.vG = T(a);
		T(a);
		this.wG = F(a)
	}
});

function $l()
{
	this.BG = this.zG = this.AG = this.yG = 0
}
$l.prototype = m(new Yl,
{
	load: function(a)
	{
		this.yG = S(a);
		this.AG = S(a);
		this.zG = S(a);
		this.BG = S(a);
		T(a)
	}
});

function dm()
{
	this.TG = this.RG = this.CB = this.OG = this.PG = this.Jq = 0;
	this.oc = null
}
dm.prototype = m(new Yl,
{
	load: function(a)
	{
		this.Jq = T(a);
		this.PG = T(a);
		this.OG = T(a);
		this.CB = a.oa();
		this.RG = a.oa();
		this.TG = a.oa();
		V(a, 1);
		this.oc = Array(this.Jq);
		var b, c, d;
		for (b = 0; b < this.Jq; b++) d = a.Ga, this.oc[b] = new gm, a.oa(), c = a.oa(), this.oc[b].load(a), a.seek(d + c)
	}
});

function gm()
{
	this.wB = this.sG = this.xB = this.sB = this.vB = this.uB = this.tB = this.tG = 0;
	this.gh = null
}
gm.prototype = {
	load: function(a)
	{
		this.tG = a.oa();
		this.tB = a.oa();
		this.uB = S(a);
		this.vB = S(a);
		this.sB = S(a);
		this.xB = S(a);
		this.sG = T(a);
		this.wB = T(a);
		a = a.ed();
		0 < a.length && (this.gh = a)
	}
};

function em()
{
	this.GG = this.FG = this.HG = this.EG = this.DG = this.IG = 0
}
em.prototype = m(new Yl,
{
	load: function(a)
	{
		this.IG = T(a);
		this.DG = T(a);
		this.EG = T(a);
		this.HG = T(a);
		this.FG = T(a);
		this.GG = T(a)
	}
});

function am()
{
	this.KG = this.JG = this.LG = this.BB = this.AB = this.MG = 0
}
am.prototype = m(new Yl,
{
	load: function(a)
	{
		this.MG = T(a);
		this.AB = T(a);
		this.BB = T(a);
		this.LG = T(a);
		T(a);
		this.JG = T(a);
		this.KG = T(a)
	}
});

function Zl()
{}
Zl.prototype = m(new Yl,
{
	load: function() {}
});

function fm()
{
	this.Gb = null;
	this.data = 0
}
fm.prototype = m(new Yl,
{
	load: function(a)
	{
		V(a, 14);
		this.data = a.Ga
	},
	EN: function(a)
	{
		this.Gb = a
	}
});
var Jk = [256, 251, 236, 212, 181, 142, 97, 49, 0, -49, -97, -142, -181, -212, -236, -251, -256, -251, -236, -212, -181, -142, -97, -49, 0, 49, 97, 142, 181, 212, 236, 251],
	Ik = [0, -49, -97, -142, -181, -212, -236, -251, -256, -251, -236, -212, -181, -142, -97, -49, 0, 49, 97, 142, 181, 212, 236, 251, 256, 251, 236, 212, 181, 142, 97, 49],
	hm = [2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 144, 160, 176, 192, 208, 224, 240, 256, 272, 288, 320, 336, 352, 368, 384, 400, 416, 432, 448, 480, 512, 544, 560, 592, 624, 640, 672, 688, 720, 736, 768, 784, 816, 848, 864, 896, 928, 944, 976, 992, 1024,
		1120, 1216, 1312, 1440, 1536, 1632, 1728, 1824, 1952, 2048, 2240, 2432, 2688, 2880, 3072, 3264, 3456, 3712, 3904, 4096, 6544, 4914, 5216, 5732, 6144, 6553, 6962, 7366, 7780, 8192, 9836, 11672, 13316, 14960, 16604, 18248, 19892, 21504, 25600, 25600
	],
	im = [-1, 8, 24, -1, 16, 12, 20, 16, 0, 4, 28, 0, -1, 8, 24, -1],
	jm = [2599, 0, 844, 31, 479, 30, 312, 29, 210, 28, 137, 27, 78, 26, 25, 25, 0, 24],
	km = [0, -2, 0, 2, 0, -4, 0, 4, 0, -8, 0, 8, -4, 0, -8, 0, 0, 0, -2, -2, 2, 2, -4, -4, 4, 4, -8, -8, 8, 8, -4, 4, -8, 8, 0, 0, -2, 0, 2, 0, -4, 0, 4, 0, -8, 0, 8, 0, 0, 4, 0, 8, 0, 0, -2, 2, 2, -2, -4, 4, 4, -4, -8, 8, 8, -8, 4, 4, 8, 8, 0, 0, 0, 2, 0, -2,
		0, 4, 0, -4, 0, 8, 0, -8, 4, 0, 8, 0, 0, 0, 2, 2, -2, -2, 4, 4, -4, -4, 8, 8, -8, -8, 4, -4, 8, -8, 0, 0, 2, 0, -2, 0, 4, 0, -4, 0, 8, 0, -8, 0, 0, -4, 0, -8, 0, 0, 2, -2, -2, 2, 4, -4, -4, 4, 8, -8, -8, 8, -4, -4, -8, -8, 0, 0
	];

function lm()
{
	this.a = null;
	this.kn = this.Ng = this.rj = this.nd = this.sg = this.tr = this.sr = 0
}
lm.prototype = {
	NC: function(a)
	{
		this.sr = a;
		this.rj = mm(a);
		this.a.b.md == Mg && this.Bd.NC(a)
	},
	ky: function(a)
	{
		this.tr = a;
		this.Ng = mm(a);
		this.a.b.md == Mg && this.Bd.ky(a)
	},
	Iu: function(a)
	{
		2 == this.a.b.md && (250 < a && (a = 250), 0 > a && (a = 0), this.Iu(a));
		this.a.b.md == Mg && this.Bd.Iu(a)
	},
	zr: function(a)
	{
		this.a.b.md == lh && (250 < a && (a = 250), 0 > a && (a = 0), this.zr(a));
		this.a.b.md == Mg && this.Bd.zr(a)
	},
	qw: function()
	{
		return this.a.b.md == Mg ? this.Bd.qw() : this.a.b.ra
	},
	hd: function()
	{
		return this.a.b.md == Mg && this.Bd.hd ? this.Bd.hd() : this.a.b.wa
	},
	nw: function()
	{
		return this.a.b.md ==
			lh ? this.JP.nv : this.a.b.md == Mg ? this.Bd.nw() : 0
	},
	Vc: function() {},
	start: function() {}
};

function nm(a, b, c, d, e, f, g)
{
	var k = na((b + d) / 2),
		h = na((c + e) / 2),
		p, l;
	do
		if (om(a, k + a.a.c.Ha, h + a.a.c.Oa, f, !1))
		{
			if (d = k, e = h, p = k, l = h, k = na((d + b) / 2), h = na((e + c) / 2), k == p && h == l) return d == b && e == c || !om(a, b + a.a.c.Ha, c + a.a.c.Oa, f, !1) || (k = b, h = c), g.x = k, g.y = h, !0
		}
	else
	if (b = k, c = h, p = k, l = h, k = na((d + b) / 2), h = na((e + c) / 2), k == p && h == l)
	{
		if ((d != b || e != c) && om(a, d + a.a.c.Ha, e + a.a.c.Oa, f, !1)) return g.x = d, g.y = e, !0;
		g.x = k;
		g.y = h;
		return !1
	}
	while (1)
}

function pm(a, b, c, d)
{
	var e;
	e = -1;
	d && (e = a.a.jc);
	d = a.a.ke;
	if (0 != (d.og & 15))
	{
		var f = b - a.a.Wa,
			g = c - a.a.Xa;
		if (0 != ($g(a.a.c, f, g, f + a.a.da, g + a.a.ca) & d.og)) return !1
	}
	if (0 != (d.og & 16) && id(a.a.c, a.a, a.a.b.ac, a.a.b.bc, a.a.b.cc, b, c, 0, 1)) return !1;
	if (-1 == d.Sq) return !0;
	b = Vc(a.a.c, a.a, a.a.b.Jb, a.a.b.ac, a.a.b.bc, a.a.b.cc, b, c, d.Rm);
	if (null == b) return !0;
	a = a.a.c.u.so;
	for (c = 0; c < b.size(); c++)
		if (f = b.get(c).jc, f != e)
			for (g = d.Sq; 0 <= a[g]; g++)
				if (a[g] == f) return !1;
	return !0
}

function om(a, b, c, d, e)
{
	var f;
	f = -1;
	e && (f = a.a.jc);
	e = a.a.ke;
	if (0 != (e.og & 15))
	{
		var g = b - a.a.Wa,
			k = c - a.a.Xa;
		if (0 != ($g(a.a.c, g, k, g + a.a.da, k + a.a.ca) & e.og)) return !1
	}
	if (0 != (e.og & 16) && id(a.a.c, a.a, a.a.b.ac, a.a.b.bc, a.a.b.cc, b, c, d, 1)) return !1;
	if (-1 == e.Sq) return !0;
	b = Vc(a.a.c, a.a, a.a.b.Jb, a.a.b.ac, a.a.b.bc, a.a.b.cc, b, c, e.Rm);
	if (null == b) return !0;
	a = a.a.c.u.so;
	for (c = 0; c < b.size(); c++)
		if (d = b.get(c).jc, d != f)
			for (g = e.Sq; 0 <= a[g]; g++)
				if (a[g] == d) return !1;
	return !0
}

function qm(a, b)
{
	switch (a.a.c.u.ay & 4294901760)
	{
		case -786432:
			var c = a.a.A - a.a.Wa,
				d = a.a.w - a.a.Xa,
				e = $g(a.a.c, c, d, c + a.a.da, d + a.a.ca),
				c = a.a.A,
				d = a.a.w;
			0 != (e & 1) && (c = a.a.Wa);
			0 != (e & 2) && (c = a.a.c.Md - a.a.da + a.a.Wa);
			0 != (e & 4) && (d = a.a.Xa);
			0 != (e & 8) && (d = a.a.c.Nd - a.a.ca + a.a.Xa);
			a.a.A = c;
			a.a.w = d;
			break;
		case -851968:
		case -917504:
			c = new Ya;
			a:
			{
				var d = a.a.A,
					e = a.a.w,
					f = a.a.b.Ym,
					g = a.a.b.Zm,
					k = na((d + f) / 2),
					h = na((e + g) / 2),
					p, l;do
					if (pm(a, k, h, b))
					{
						if (f = k, g = h, p = k, l = h, k = na((f + d) / 2), h = na((g + e) / 2), k == p && h == l)
						{
							f == d && g == e || !pm(a, d, e, b) || (k =
								d, h = e);
							c.x = k;
							c.y = h;
							d = !0;
							break a
						}
					}
				else
				if (d = k, e = h, p = k, l = h, k = na((f + d) / 2), h = na((g + e) / 2), k == p && h == l)
				{
					if ((f != d || g != e) && pm(a, f, g, b))
					{
						c.x = f;
						c.y = g;
						d = !0;
						break a
					}
					c.x = k;
					c.y = h;
					d = !1;
					break a
				}
				while (1);d = void 0
			}
			if (d) a.a.A = c.x, a.a.w = c.y;
			else
			{
				c = 18 * (a.a.c.hd(a.a) >> 2);
				do {
					if (pm(a, a.a.A + km[c], a.a.w + km[c + 1], b))
					{
						a.a.A += km[c];
						a.a.w += km[c + 1];
						return
					}
					c += 2
				} while (0 != km[c] || 0 != km[c + 1]);
				0 == b && (a.a.A = a.a.b.Ym, a.a.w = a.a.b.Zm, a.a.b.Jb = a.a.b.Nx, a.a.b.ac = a.a.b.Mx)
			}
	}
}

function rm(a, b)
{
	if (b) qm(a, !1);
	else switch (a.a.c.u.ay & 4294901760)
	{
		case -786432:
			var c = a.a.A - a.a.Wa,
				d = a.a.w - a.a.Xa,
				e = $g(a.a.c, c, d, c + a.a.da, d + a.a.ca),
				c = a.a.A,
				d = a.a.w;
			0 != (e & 1) && (c = a.a.Wa);
			0 != (e & 2) && (c = a.a.c.Md - a.a.da + a.a.Wa);
			0 != (e & 4) && (d = a.a.Xa);
			0 != (e & 8) && (d = a.a.c.Nd - a.a.ca + a.a.Xa);
			a.a.A = c;
			a.a.w = d;
			break;
		case -851968:
		case -917504:
			c = 18 * (a.a.c.hd(a.a) >> 2);
			do {
				if (pm(a, a.a.A + km[c], a.a.w + km[c + 1], !1))
				{
					a.a.A += km[c];
					a.a.w += km[c + 1];
					return
				}
				c += 2
			} while (0 != km[c] || 0 != km[c + 1]);
			a.a.A = a.a.b.Ym;
			a.a.w = a.a.b.Zm;
			a.a.b.Jb = a.a.b.Nx;
			a.a.b.ac = a.a.b.Mx
	}
}

function mm(a)
{
	return 100 >= a ? hm[a] : a << 8
}

function sm(a, b)
{
	0 == b.VG && a.stop()
}

function tm(a, b, c)
{
	a.a.c.Ye++;
	a.sg = a.a.c.Ye;
	a.a.J.sa = !1;
	if (0 == b) return hh(a.a.c, a.a), !1;
	var d, e;
	for (e = 0 != (a.a.c.N.vd & 32768) ? Math.floor(b * a.a.c.ce * 32) : b << 5; 2048 < e;)
	{
		b = 65536 * a.a.A + (a.a.Mj & 65535);
		d = 65536 * a.a.w + (a.a.Nj & 65535);
		b += 2048 * Jk[c];
		d += 2048 * Ik[c];
		a.a.Mj = b & 65535;
		a.a.A = Math.floor(b / 65536);
		a.a.Nj = d & 65535;
		a.a.w = Math.floor(d / 65536);
		if (hh(a.a.c, a.a)) return !0;
		if (a.a.J.sa) break;
		e -= 2048
	}
	if (!a.a.J.sa && (b = 65536 * a.a.A + (a.a.Mj & 65535), d = 65536 * a.a.w + (a.a.Nj & 65535), b += Jk[c] * e, d += Ik[c] * e, a.a.Mj = b & 65535, a.a.A = Math.floor(b /
			65536), a.a.Nj = d & 65535, a.a.w = Math.floor(d / 65536), hh(a.a.c, a.a))) return !0;
	a.a.b.fa = !0;
	a.a.J.sa || (a.a.c.op = 0);
	return a.a.J.sa
}
var um = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 30, 31, 0, 1, 4, 3, 2, 1, 0, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 24, 25, 26, 27, 27, 28, 28, 28, 28, 29, 29, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 16, 17, 18, 19, 19, 20, 20, 20, 20, 21, 21, 22, 23, 24, 25, 28, 27, 26, 25, 0, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 20, 21, 22, 22, 23, 24, 24, 24, 24, 25, 26, 27, 28, 29, 30, 8, 7, 6, 5, 4, 8, 9, 10, 11, 11, 12, 12, 12, 12, 13, 13, 14, 15, 16, 17, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
		17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 16, 15, 14, 13, 12, 11, 10, 9, 8, 12, 13, 14, 15, 15, 16, 16, 16, 16, 17, 17, 18, 19, 20, 21, 24, 23, 22, 21, 20, 19, 18, 17, 16, 17, 18, 19, 20, 21, 22, 23, 24, 23, 22, 21, 20, 19, 18, 17, 16, 17, 18, 19, 20, 21, 22, 23, 24, 23, 22, 21, 20, 19, 18, 17, 3, 3, 4, 4, 4, 4, 5, 5, 6, 7, 8, 9, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 31, 30, 29, 28, 0, 1, 2, 0, 0, 1, 1, 2, 3, 4, 5, 8, 7, 6, 5, 4, 3, 2, 1, 0, 31, 30, 29, 28, 27, 26, 25, 24, 28, 29, 30, 31, 31, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 31, 30, 29, 28, 27, 26, 25, 24, 25, 26,
		27, 28, 29, 30, 31, 0, 31, 30, 29, 28, 27, 25, 25, 24, 25, 26, 27, 28, 29, 30, 31, 0, 4, 5, 6, 7, 7, 8, 8, 8, 8, 9, 9, 10, 11, 12, 13, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 16, 15, 14, 13, 12, 11, 10, 9, 8, 9, 10, 11, 12, 13, 14, 15, 16, 15, 14, 13, 12, 11, 10, 9, 8, 9, 10, 11, 12, 13, 14, 15, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
	],
	vm = [4294967292, 4294967294, 4294967295],
	wm = [-4, 4, -2, 2, -1, 1],
	zm = [-4, 4, -4, 4, -4, 4];

function Am()
{
	this.My = this.iv = this.Ep = this.tD = this.Dp = this.jv = this.hv = 0;
	this.$l = !1
}
Am.prototype = m(new lm,
{
	za: function(a, b)
	{
		this.a = a;
		this.a.Mj = 0;
		this.a.Nj = 0;
		this.a.b.ra = b.Nt;
		this.a.b.nc = b.Nt;
		this.a.b.vk = b.Nt;
		this.Ep = b.Nt << 8;
		var c = b.qG;
		0 != c && (c = mm(c), this.a.b.vk = 0);
		this.Ng = c;
		this.tD = b.pG;
		this.hv = b.oG;
		this.iv = vm[this.hv];
		this.$l = !1;
		this.My = -1;
		this.Dp = this.jv = (100 - b.rG) / 8;
		sm(this, b);
		this.a.b.fa = !0
	},
	move: function()
	{
		this.a.J.jn = !1;
		this.a.c.op = 1;
		this.a.b.lh = 1;
		null != this.a.Ca && ki(this.a.Ca);
		if (0 != this.Ng)
		{
			var a = this.Ep;
			if (0 < a)
			{
				var b = this.Ng;
				0 != (this.a.c.N.vd & 32768) && (b *= this.a.c.ce);
				a -=
					b;
				0 > a && (a = 0);
				this.Ep = a;
				this.a.b.ra = a >> 8
			}
		}
		tm(this, this.a.b.ra, this.a.c.hd(this.a))
	},
	stop: function()
	{
		0 == this.nd && (this.nd = this.a.b.ra | 32768, this.Ep = this.a.b.ra = 0, this.a.J.sa = !0)
	},
	start: function()
	{
		var a = this.nd;
		0 != a && (a &= 32767, this.a.b.ra = a, this.Ep = a << 8, this.nd = 0, this.a.J.sa = !0)
	},
	wh: function()
	{
		if (0 == this.nd && this.a.c.de != this.My)
		{
			this.My = this.a.c.de;
			this.sg == this.a.c.Ye && qm(this, this.$l);
			var a = this.a.A,
				b = this.a.w,
				c = 0,
				a = a - 8,
				b = b - 8;
			0 == pm(this, a, b, this.$l) && (c |= 1);
			a += 16;
			0 == pm(this, a, b, this.$l) && (c |= 2);
			b +=
				16;
			0 == pm(this, a, b, this.$l) && (c |= 4);
			0 == pm(this, a - 16, b, this.$l) && (c |= 8);
			a = um[32 * c + this.a.c.hd(this.a)];
			a &= this.iv;
			if (!this.Rt(a))
			{
				var c = b = zm[2 * this.hv + 1],
					d = !1;
				do {
					a -= b;
					a &= 31;
					if (this.Rt(a))
					{
						d = !0;
						break
					}
					a += 2 * b;
					a &= 31;
					if (this.Rt(a))
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
					this.$l = !0;
					this.a.b.wa = this.a.c.random(32) & this.iv;
					this.a.J.jn = !0;
					this.a.J.sa = !0;
					return
				}
			}
			this.$l = !1;
			this.a.b.wa = a;
			a = this.a.c.random(100);
			if (a < this.tD && (a >>= 2, 25 > a && (a = a - 12 & 31 & this.iv, this.Rt(a))))
			{
				this.a.b.wa = a;
				this.a.J.jn = !0;
				this.a.J.sa = !0;
				return
			}
			a = this.a.c.hd(this.a) & 7;
			12 != this.Dp && (0 == a ? (this.Dp--, 0 > this.Dp && (a = this.a.c.hd(this.a) + wm[this.a.c.random(2) + 2 * this.hv], a &= 31, this.Rt(a) && (this.a.b.wa = a, this.Dp = this.jv))) : this.Dp = this.jv);
			this.a.J.jn = !0;
			this.a.J.sa = !0
		}
	},
	Rt: function(a)
	{
		var b = 2048 * Jk[a] + (65536 * this.a.A + (this.a.Mj & 65535));
		a = 2048 * Ik[a] + (65536 * this.a.w + (this.a.Nj & 65535));
		b = Math.floor(b / 65536);
		a = Math.floor(a / 65536);
		return pm(this, b, a, !1)
	},
	qh: function() {},
	rh: function(a)
	{
		0 > a && (a = 0);
		250 < a && (a = 250);
		this.a.b.ra = a;
		this.Ep = a << 8;
		this.nd =
			0;
		this.a.J.sa = !0
	},
	Ck: function(a)
	{
		this.rh(a)
	},
	reverse: function()
	{
		0 == this.nd && (this.a.J.sa = !0, this.a.b.wa += 16, this.a.b.wa &= 31)
	},
	Fe: function(a)
	{
		this.a.A != a && (this.a.A = a, this.a.J.sa = !0, this.a.b.fa = !0, this.a.b.Wb = !0)
	},
	Ge: function(a)
	{
		this.a.w != a && (this.a.w = a, this.a.J.sa = !0, this.a.b.fa = !0, this.a.b.Wb = !0)
	}
});

function Bm()
{
	this.kv = !1;
	this.Fp = null
}
Bm.prototype = m(new lm,
{
	za: function(a)
	{
		this.a = a;
		this.D = a.c;
		this.D.zj();
		null != this.a.ea && Vg(this.a.ea, !1);
		null != this.a.ea && (this.a.ea.Ja &= ~dc, cc(this.a.ea));
		this.kv = !0;
		this.a.Mj = 0;
		this.a.Nj = 0;
		null != this.a.Ca && vi(this.a.Ca);
		this.a.b.ra = 0;
		this.a.b.Wb = !0;
		this.a.b.fa = !0
	},
	Aw: function(a)
	{
		this.a.b.nc = this.a.b.ra;
		this.a.b.vk = this.a.b.ra;
		this.Fp = a
	},
	Vc: function()
	{
		this.mL(this.a)
	},
	move: function()
	{
		if (this.kv)
		{
			if (null != this.Fp.Ca && 6 == this.Fp.Ca.$o) return;
			this.kI()
		}
		null != this.a.Ca && ki(this.a.Ca);
		tm(this, this.a.b.ra,
			this.a.c.hd(this.a));
		if (-64 > this.a.A || this.a.A > this.a.c.Md + 64 || -64 > this.a.w || this.a.w > this.a.c.Nd + 64) this.a.et = !1, gc(this.a.c, this.a.zc);
		this.a.b.Wb && (this.a.b.Wb = !1, hh(this.a.c, this.a))
	},
	kI: function()
	{
		null != this.a.ea && Vg(this.a.ea, !0);
		null != this.a.ea && (this.a.ea.Ja |= dc, Vl(this.a.ea));
		if (null != this.D.Nl)
		{
			var a = this.D.Yb(this.Fp);
			if (null != a)
			{
				var b = this.D.Nl,
					c = new ji;
				this.Ny = c;
				oi(c, this.a, 0);
				c.yq = b.identifier;
				this.Vr = b.OM(a.Kc, this.a.b.ra / 250 * 50, c);
				c.s = this.Vr;
				null == this.Vr && (this.Ny = null)
			}
		}
		this.kv = !1;
		this.Fp = null
	},
	mL: function()
	{
		null != this.Vr && (pBase = this.a.c.Nl, pBase.Wq(this.Vr), this.Vr = null);
		null != this.Ny && (this.Ny = null)
	},
	Fe: function(a)
	{
		this.a.A != a && (this.a.A = a, this.a.J.sa = !0, this.a.b.fa = !0, this.a.b.Wb = !0)
	},
	Ge: function(a)
	{
		this.a.w != a && (this.a.w = a, this.a.J.sa = !0, this.a.b.fa = !0, this.a.b.Wb = !0)
	},
	qh: function() {},
	reverse: function() {},
	stop: function() {},
	start: function() {},
	wh: function() {},
	rh: function() {},
	Ck: function() {}
});

function Cm()
{}
Cm.prototype = m(new lm,
{
	za: function(a)
	{
		this.a = a
	},
	move: function()
	{
		0 == (this.a.Aa & zi) && null != this.a.Ca && (ki(this.a.Ca), this.a.Ca.tk != Ug + 1 && gc(this.a.c, this.a.zc))
	},
	Fe: function(a)
	{
		this.a.A != a && (this.a.A = a, this.a.J.sa = !0, this.a.b.fa = !0)
	},
	Ge: function(a)
	{
		this.a.w != a && (this.a.w = a, this.a.J.sa = !0, this.a.b.fa = !0)
	},
	qh: function() {},
	reverse: function() {},
	stop: function() {},
	start: function() {},
	wh: function() {},
	rh: function() {},
	Ck: function() {}
});

function Dm()
{
	this.Oy = this.Aj = this.Py = this.Lk = 0
}
Dm.prototype = m(new lm,
{
	za: function(a, b)
	{
		this.a = a;
		this.a.Mj = 0;
		this.Aj = this.a.Nj = 0;
		this.Lk = this.a.b.ra = 0;
		this.Oy = -1;
		this.a.b.Kl = b.Kq;
		this.sr = b.uG;
		this.rj = mm(this.sr);
		this.tr = b.vG;
		this.Ng = mm(this.tr);
		this.a.b.nc = b.xG;
		this.a.b.vk = 0;
		this.Py = b.wG;
		this.kn = b.ix;
		this.a.b.fa = !0
	},
	move: function()
	{
		var a, b, c, d;
		this.a.c.op = 1;
		a = this.a.c.hd(this.a);
		this.a.b.tC = a;
		if (0 == this.Lk)
		{
			this.a.J.jn = !1;
			b = 0;
			c = this.a.c.pe[this.a.b.Kl - 1] & 15;
			0 != c && (d = im[c], -1 != d && 0 != (1 << d & this.Py) && (b = 1, a = d));
			c = this.Aj;
			0 == b ? 0 != c && (b = this.Ng, 0 !=
				(this.a.c.N.vd & 32768) && (b *= this.a.c.ce), c -= b, 0 >= c && (c = 0)) : c >> 8 < this.a.b.nc && (b = this.rj, 0 != (this.a.c.N.vd & 32768) && (b *= this.a.c.ce), c += b, c >> 8 > this.a.b.nc && (c = this.a.b.nc << 8));
			this.Aj = c;
			this.a.b.ra = c >> 8;
			this.a.b.wa = a;
			this.a.b.lh = 1;
			null != this.a.Ca && ki(this.a.Ca);
			if (0 == tm(this, this.a.b.ra, this.a.c.hd(this.a))) return;
			if (0 == this.a.b.ra)
			{
				c = this.Aj;
				if (0 == c || this.a.b.tC == this.a.c.hd(this.a)) return;
				this.a.b.ra = c >> 8;
				this.a.b.wa = this.a.b.tC;
				if (0 == tm(this, this.a.b.ra, this.a.c.hd(this.a))) return
			}
		}
		for (; 0 != this.Lk &&
			0 != this.a.c.op;)
			if (c = this.Aj, c -= this.Ng, 0 < c)
			{
				if (this.Aj = c, c >>= 8, this.a.b.ra = c, d = this.a.c.hd(this.a), 0 != this.Lk && (d += 16, d &= 31), 0 == tm(this, c, d)) break
			}
		else
		{
			this.Aj = 0;
			this.Lk = this.a.b.ra = 0;
			break
		}
	},
	wh: function()
	{
		this.sg == this.a.c.Ye && rm(this, 0 != (this.kn & 1));
		this.a.c.de != this.Oy && (this.Oy = this.a.c.de, this.Lk++, 12 <= this.Lk ? this.stop() : (this.a.J.jn = !0, this.a.J.sa = !0))
	},
	reverse: function() {},
	qh: function() {},
	stop: function()
	{
		this.Aj = this.Lk = this.a.b.ra = 0;
		this.a.J.sa = !0;
		this.sg == this.a.c.Ye && (rm(this, 0 != (this.kn &
			1)), this.Lk = 0)
	},
	start: function()
	{
		this.a.J.sa = !0;
		this.nd = 0
	},
	Ck: function(a)
	{
		0 > a && (a = 0);
		250 < a && (a = 250);
		this.a.b.nc = a;
		this.a.b.ra > a && (this.a.b.ra = a, this.Aj = a << 8);
		this.a.J.sa = !0
	},
	rh: function(a)
	{
		0 > a && (a = 0);
		250 < a && (a = 250);
		a > this.a.b.nc && (a = this.a.b.nc);
		this.a.b.ra = a;
		this.Aj = a << 8;
		this.a.J.sa = !0
	},
	Fe: function(a)
	{
		this.a.A != a && (this.a.A = a, this.a.J.sa = !0, this.a.b.fa = !0, this.a.b.Wb = !0)
	},
	Ge: function(a)
	{
		this.a.w != a && (this.a.w = a, this.a.J.sa = !0, this.a.b.fa = !0, this.a.b.Wb = !0)
	},
	iQ: function(a)
	{
		this.Py = a
	}
});

function Em()
{
	this.lv = this.mv = this.Ty = this.Sy = this.Ry = this.Qy = 0
}
Em.prototype = m(new lm,
{
	za: function(a, b)
	{
		this.a = a;
		this.a.b.Kl = b.Kq;
		this.Qy = b.yG + this.a.A;
		this.Ry = b.zG + this.a.w;
		this.Sy = b.AG + this.a.A;
		this.Ty = b.BG + this.a.w;
		this.mv = this.lv = this.a.b.ra = 0;
		this.a.b.vk = 0;
		this.a.b.nc = 100;
		this.kn = b.ix;
		sm(this, b);
		this.a.b.fa = !0
	},
	move: function()
	{
		var a = this.a.A,
			b = this.a.w,
			c, d, e, f;
		if (0 == this.nd && 0 != this.a.c.vu[this.a.b.Kl - 1] && (a = this.a.c.wu, a < this.Qy && (a = this.Qy), a > this.Sy && (a = this.Sy), b = this.a.c.xu, b < this.Ry && (b = this.Ry), b > this.Ty && (b = this.Ty), c = a - this.a.A, d = b - this.a.w, e = 0,
				0 > c && (c = -c, e |= 1), 0 > d && (d = -d, e |= 2), f = c + d << 2, 250 < f && (f = 250), this.a.b.ra = f, 0 != f))
		{
			0 == d && (d = 1);
			c = (c << 8) / d;
			for (d = 0; !(c >= jm[d]); d += 2);
			c = jm[d + 1];
			0 != (e & 2) && (c = -c + 32 & 31);
			0 != (e & 1) && (c = (-(c - 8 & 31) & 31) + 8 & 31);
			this.a.b.wa = c
		}
		0 != this.a.b.ra && (this.mv = 0, this.lv = this.a.b.ra);
		this.mv++;
		10 < this.mv && (this.lv = 0);
		this.a.b.ra = this.lv;
		null != this.a.Ca && ki(this.a.Ca);
		this.a.A = a;
		this.a.w = b;
		this.a.b.fa = !0;
		this.a.c.Ye++;
		this.sg = this.a.c.Ye;
		hh(this.a.c, this.a)
	},
	stop: function()
	{
		this.sg == this.a.c.Ye && rm(this, 0 != (this.kn & 1));
		this.a.b.ra =
			0
	},
	start: function()
	{
		this.nd = 0;
		this.a.J.sa = !0
	},
	wh: function()
	{
		this.stop()
	},
	reverse: function() {},
	qh: function() {},
	Fe: function(a)
	{
		this.a.A != a && (this.a.A = a, this.a.J.sa = !0, this.a.b.fa = !0, this.a.b.Wb = !0)
	},
	Ge: function(a)
	{
		this.a.w != a && (this.a.w = a, this.a.J.sa = !0, this.a.b.fa = !0, this.a.b.Wb = !0)
	}
});

function Fm()
{
	this.Qg = this.Bn = this.An = this.Qk = this.Pk = this.pv = this.Wr = this.Xr = this.Je = 0;
	this.Hf = !1;
	this.Db = null;
	this.Ok = this.rv = this.qv = this.Nk = 0;
	this.Jp = null;
	this.ov = !1
}
Fm.prototype = m(new lm,
{
	za: function(a, b)
	{
		this.a = a;
		this.qv = this.a.A;
		this.rv = this.a.w;
		this.Hf = !1;
		this.Ok = 0;
		this.a.rq = 0;
		this.Db = b;
		this.a.b.vk = b.PG;
		this.a.b.nc = b.OG;
		this.Nk = 0;
		this.Jp = null;
		this.Qo(0);
		sm(this, b);
		this.a.b.ra = this.Je;
		this.a.b.fa = !0;
		0 == this.Db.oc.length && this.stop()
	},
	move: function()
	{
		this.a.rq = 0;
		this.a.b.lh = 1;
		null != this.a.Ca && ki(this.a.Ca);
		if (0 == this.Je)
		{
			var a = this.Ok;
			if (0 == a)
			{
				this.a.b.ra = 0;
				hh(this.a.c, this.a);
				return
			}
			a -= this.a.c.by;
			if (0 < a)
			{
				this.Ok = a;
				this.a.b.ra = 0;
				hh(this.a.c, this.a);
				return
			}
			this.Ok =
				0;
			this.Je = this.nd & 32767;
			this.nd = 0;
			this.a.b.ra = this.Je
		}
		a = 0 != (this.a.c.N.vd & 32768) ? 256 * this.a.c.ce : 256;
		this.a.c.Pl = a;
		for (var b;;)
		{
			b = !1;
			this.a.c.Bu = a;
			a *= this.Je;
			a <<= 5;
			524288 >= a ? this.a.c.GC = a : (a = 16384, a /= this.Je, this.a.c.Bu = a, this.a.c.GC = 524288);
			for (;;)
			{
				this.ov = !1;
				if (1 == this.QG(this.a.c.GC) && 0 == this.ov)
				{
					b = !0;
					break
				}
				if (this.a.c.Pl == this.a.c.Bu)
				{
					b = !0;
					break
				}
				if (this.a.c.Pl > this.a.c.Bu)
				{
					this.a.c.Pl -= this.a.c.Bu;
					a = this.a.c.Pl;
					break
				}
				a = this.a.c.Pl * MT_Speed;
				a <<= 5;
				this.QG(a);
				b = !0;
				break
			}
			if (b) break
		}
	},
	QG: function(a)
	{
		a +=
			this.Nk;
		var b = a >>> 16;
		if (b < this.pv) return this.Nk = a, a = b * this.Xr / 16384 + this.Qk, this.a.A = b * this.Wr / 16384 + this.Pk, this.a.w = a, this.a.b.fa = !0, hh(this.a.c, this.a), this.a.J.sa;
		b -= this.pv;
		a = b << 16 | a & 65535;
		0 != this.Je && (a /= this.Je);
		this.a.c.Pl += a >> 5 & 65535;
		this.a.A = this.An;
		this.a.w = this.Bn;
		this.a.b.fa = !0;
		hh(this.a.c, this.a);
		if (this.a.J.sa) return !0;
		this.a.rq = this.a.c.de;
		this.a.qq = null;
		b = this.Qg;
		this.Nk = 0;
		if (0 == this.Hf)
		{
			b++;
			if (b < this.Db.Jq)
			{
				this.a.qq = this.Db.oc[b].gh;
				if (null != this.Jp && null != this.Db.oc[b].gh && E(this.Jp,
						this.Db.oc[b].gh)) return this.Qg = b, this.gi(), this.hx();
				this.Qo(b);
				this.gi();
				return this.a.J.sa
			}
			this.a.ww = this.a.c.de;
			this.Qg = b;
			if (this.Hf) return this.gi(), this.a.J.sa;
			if (0 != this.Db.TG) return this.Hf = !0, b--, this.a.qq = this.Db.oc[b].gh, this.Iq(b), this.gi(), this.a.J.sa;
			this.SG();
			if (0 == this.Db.CB) return this.hx(), this.gi(), this.a.J.sa;
			b = 0
		}
		else
		{
			if (null != this.Jp && null != this.Db.oc[b].gh && E(this.Jp, this.Db.oc[b].gh)) return this.gi(), this.hx();
			this.a.qq = this.Db.oc[b].gh;
			this.Ok = this.Db.oc[b].wB;
			b--;
			if (0 <= b) return this.Iq(b),
				this.gi(), this.a.J.sa;
			this.SG();
			if (0 == this.Hf) return this.gi(), this.a.J.sa;
			if (0 == this.Db.CB) return this.hx(), this.gi(), this.a.J.sa;
			b = 0;
			this.Hf = !1
		}
		this.Qo(b);
		this.gi();
		return this.a.J.sa
	},
	Qo: function(a)
	{
		a >= this.Db.oc.length ? this.stop() : (this.Hf = !1, this.Qg = a, this.Ok = this.Db.oc[a].wB, this.Wr = this.Db.oc[a].sB, this.Xr = this.Db.oc[a].xB, this.Pk = this.a.A, this.Qk = this.a.w, this.An = this.a.A + this.Db.oc[a].uB, this.Bn = this.a.w + this.Db.oc[a].vB, this.a.b.wa = this.Db.oc[a].tB, this.NG())
	},
	Iq: function(a)
	{
		a >= this.Db.oc.length ?
			this.stop() : (this.Hf = !0, this.Qg = a, this.Wr = -this.Db.oc[a].sB, this.Xr = -this.Db.oc[a].xB, this.Pk = this.a.A, this.Qk = this.a.w, this.An = this.a.A - this.Db.oc[a].uB, this.Bn = this.a.w - this.Db.oc[a].vB, this.a.b.wa = this.Db.oc[a].tB + 16 & 31, this.NG())
	},
	NG: function()
	{
		this.pv = this.Db.oc[this.Qg].sG;
		var a = this.Db.oc[this.Qg].tG,
			b = this.Ok;
		0 != b && (this.Ok = 20 * b, this.nd = a |= 32768);
		0 != this.nd && (a = 0);
		if (a != this.Je || 0 != a) this.Je = a, this.ov = this.a.J.sa = !0;
		this.a.b.ra = this.Je
	},
	gi: function()
	{
		this.a.rq == this.a.c.de && (this.a.c.u.Ld =
			0, kh(this.a.c.u, this.a, -1310720 | this.a.rb & 65535), kh(this.a.c.u, this.a, -2293760 | this.a.rb & 65535));
		this.a.ww == this.a.c.de && (this.a.c.u.Ld = 0, kh(this.a.c.u, this.a, -1376256 | this.a.rb & 65535))
	},
	hx: function()
	{
		this.nd = this.Je = 0;
		this.a.J.sa = !0;
		this.ov = !1;
		return !0
	},
	SG: function()
	{
		0 != this.Db.RG && (this.a.A = this.qv, this.a.w = this.rv, this.a.b.fa = !0)
	},
	KP: function(a)
	{
		var b;
		for (b = 0; b < this.Db.Jq; b++)
			if (null != this.Db.oc[b].gh && E(a, this.Db.oc[b].gh))
			{
				0 == this.Hf ? (this.Qo(b), this.a.rq = this.a.c.de, this.a.qq = this.Db.oc[b].gh,
					this.a.ww = 0, this.gi()) : 0 < b && (b--, this.Iq(b), this.a.rq = this.a.c.de, this.a.qq = this.Db.oc[b].gh, this.a.ww = 0, this.gi());
				this.a.J.sa = !0;
				break
			}
	},
	LP: function(a)
	{
		var b;
		for (b = 0; b < this.Db.Jq; b++)
			if (null != this.Db.oc[b].gh && E(a, this.Db.oc[b].gh))
			{
				if (b == this.Qg && 0 == this.Nk) break;
				this.Jp = a;
				if (0 == this.Hf)
					if (b > this.Qg)
					{
						if (0 != this.Je) break;
						0 != (this.nd & 32768) ? this.start() : this.Qo(this.Qg)
					}
				else
				{
					if (0 != this.Je)
					{
						this.reverse();
						break
					}
					0 != (this.nd & 32768) ? (this.start(), this.reverse()) : this.Iq(MT_MoveNumber - 1)
				}
				else if (b <= this.Qg)
				{
					if (0 !=
						this.Je) break;
					0 != (this.nd & 32768) ? this.start() : this.Iq(this.Qg - 1)
				}
				else
				{
					if (0 != this.Je)
					{
						this.reverse();
						break
					}
					0 != (this.nd & 32768) ? (this.start(), this.reverse()) : this.Qo(this.Qg)
				}
				break
			}
	},
	stop: function()
	{
		0 == this.nd && (this.nd = this.Je | 32768);
		this.Je = 0;
		this.a.J.sa = !0
	},
	start: function()
	{
		0 != (this.nd & 32768) && (this.Je = this.nd & 32767, this.nd = this.Ok = 0, this.a.J.sa = !0)
	},
	reverse: function()
	{
		if (0 == this.nd)
		{
			this.a.J.sa = !0;
			var a = this.Qg;
			if (0 == this.Nk)(this.Hf = !this.Hf) ? 0 == a ? this.Hf = !this.Hf : (a--, this.Iq(a)) : this.Qo(a);
			else
			{
				this.Hf = !this.Hf;
				this.Wr = -this.Wr;
				this.Xr = -this.Xr;
				var a = this.Pk,
					b = this.An;
				this.Pk = b;
				this.An = a;
				a = this.Qk;
				this.Qk = b = this.Bn;
				this.Bn = a;
				this.a.b.wa += 16;
				this.a.b.wa &= 31;
				a = this.Nk >>> 16;
				a = this.pv - a;
				this.Nk = a << 16 | this.Nk & 65535
			}
		}
	},
	Fe: function(a)
	{
		var b = this.a.A;
		this.a.A = a;
		b -= this.Pk;
		a -= b;
		this.An = b = this.An - this.Pk + a;
		b = this.Pk;
		this.Pk = a;
		this.qv -= b - a;
		this.a.J.sa = !0;
		this.a.b.fa = !0;
		this.a.b.Wb = !0
	},
	Ge: function(a)
	{
		var b = this.a.w;
		this.a.w = a;
		b -= this.Qk;
		a -= b;
		this.Bn = b = this.Bn - this.Qk + a;
		b = this.Qk;
		this.Qk = a;
		this.rv -= b - a;
		this.a.J.sa = !0;
		this.a.b.fa = !0;
		this.a.b.Wb = !0
	},
	rh: function(a)
	{
		0 > a && (a = 0);
		250 < a && (a = 250);
		this.Je = a;
		this.a.b.ra = a;
		this.a.J.sa = !0
	},
	Ck: function(a)
	{
		this.rh(a)
	},
	qh: function() {}
});

function Gm()
{
	this.Gp = this.vD = this.am = this.Ii = this.Hi = this.ag = this.uD = this.nv = this.ug = this.Gc = 0;
	this.Hp = null;
	this.Vy = this.Uy = 0;
	this.yn = !1
}
Gm.prototype = m(new lm,
{
	za: function(a, b)
	{
		this.a = a;
		this.D = this.a.c;
		this.a.Mj = 0;
		this.ug = this.a.Nj = 0;
		this.a.b.ra = 0;
		this.a.b.Kl = b.Kq;
		this.sr = b.DG;
		this.rj = mm(this.sr);
		this.tr = b.EG;
		this.Ng = mm(this.tr);
		this.a.b.nc = b.IG;
		this.a.b.vk = 0;
		this.nv = b.FG;
		this.uD = b.GG;
		var c = b.HG;
		3 < c && (c = 1);
		this.vD = c;
		this.Gp = this.ag = 0;
		this.Hp = null;
		sm(this, b);
		this.a.b.fa = !0;
		this.Gc = 0
	},
	move: function()
	{
		var a, b;
		this.a.c.op = 1;
		a = this.a.c.pe[this.a.b.Kl - 1];
		this.$z();
		b = this.ug;
		var c;
		0 == this.Gp && (0 >= b && (0 != (a & 4) ? (c = this.rj, 0 != (this.a.c.N.vd &
			32768) && (c *= this.a.c.ce), b -= c, b / 256 < -this.a.b.nc && (b = 256 * -this.a.b.nc)) : 0 > b && (c = this.Ng, 0 != (this.a.c.N.vd & 32768) && (c *= this.a.c.ce), b += c, 0 < b && (b = 0)), 0 != (a & 8) && (b = -b)), 0 <= b && (0 != (a & 8) ? (c = this.rj, 0 != (this.a.c.N.vd & 32768) && (c *= this.a.c.ce), b += c, b / 256 > this.a.b.nc && (b = 256 * this.a.b.nc)) : 0 < b && (c = this.Ng, 0 != (this.a.c.N.vd & 32768) && (c *= this.a.c.ce), b -= c, 0 > b && (b = 0)), 0 != (a & 4) && (b = -b)), this.ug = b);
		var d = this.ag;
		for (c = !1;;)
		{
			switch (this.Gc)
			{
				case 2:
				case 3:
					c = this.nv << 5;
					0 != (this.a.c.N.vd & 32768) && (c *= this.a.c.ce);
					d +=
						c;
					64E3 < d && (d = 64E3);
					break;
				case 0:
					if (0 != (a & 1))
					{
						if (2147483647 == Bh(this.D, this.a.ig, this.a.A + this.Hi, this.a.w + this.Ii - 4)) break;
						this.Gc = 1;
						c = !0;
						continue
					}
					if (0 != (a & 2) && 2147483647 != Bh(this.D, this.a.ig, this.a.A + this.Hi, this.a.w + this.Ii + 4))
					{
						this.Gc = 1;
						c = !0;
						continue
					}
					break;
				case 1:
					if (0 == c && (this.Gp = 0, 2147483647 == Bh(this.D, this.a.ig, this.a.A + this.Hi, this.a.w + this.Ii) && 2147483647 == Bh(this.D, this.a.ig, this.a.A + this.Hi, this.a.w + this.Ii - 4))) break;
					0 >= d && (0 != (a & 1) ? (c = this.rj, 0 != (this.a.c.N.vd & 32768) && (c *= this.a.c.ce),
						d -= c, c = d / 256, c < -this.a.b.nc && (d = 256 * -this.a.b.nc)) : (c = this.Ng, 0 != (this.a.c.N.vd & 32768) && (c *= this.a.c.ce), d += c, 0 < d && (d = 0)), 0 != (a & 2) && (d = -d));
					0 <= d && (0 != (a & 2) ? (c = this.rj, 0 != (this.a.c.N.vd & 32768) && (c *= this.a.c.ce), d += c, c = d / 256, c > this.a.b.nc && (d = 256 * this.a.b.nc)) : (c = this.Ng, 0 != (this.a.c.N.vd & 32768) && (c *= this.a.c.ce), d -= c, 0 > d && (d = 0)), 0 != (a & 1) && (d = -d))
			}
			break
		}
		this.ag = d;
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
			for (e = 0; !(c >= jm[e]); e += 2);
			e = jm[e + 1];
			0 != (g & 2) &&
				(e = -e + 32 & 31);
			0 != (g & 1) && (e = (-(e - 8 & 31) & 31) + 8 & 31)
		}
		c = b;
		g = Jk[e];
		f = Ik[e];
		0 > g && (g = -g);
		0 > f && (f = -f);
		g < f && (g = f, c = d);
		0 > c && (c = -c);
		c /= g;
		250 < c && (c = 250);
		this.a.b.ra = c;
		switch (this.Gc)
		{
			case 1:
				0 > d ? this.a.b.wa = 8 : 0 < d && (this.a.b.wa = 24);
				break;
			case 3:
				this.a.b.wa = e;
				break;
			default:
				0 > b ? this.a.b.wa = 16 : 0 < b && (this.a.b.wa = 0)
		}
		switch (this.Gc)
		{
			case 4:
				this.a.b.lh = 10;
				break;
			case 5:
				this.a.b.lh = 11;
				break;
			case 3:
				this.a.b.lh = 8;
				break;
			case 2:
				this.a.b.lh = 7;
				break;
			case 1:
				this.a.b.lh = 9;
				break;
			default:
				this.a.b.lh = 1
		}
		null != this.a.Ca && ki(this.a.Ca);
		this.$z();
		tm(this, this.a.b.ra, e);
		0 != this.Gc && 1 != this.Gc || 0 != this.yn || (b = !1, d = this.vD, 0 != d && (d--, 0 == d ? (5 == (a & 5) && (b = !0), 9 == (a & 9) && (b = !0)) : 0 != (a & d << 4) && (b = !0)), b && (this.ag = -this.uD << 8, this.Gc = 2));
		switch (this.Gc)
		{
			case 2:
				0 <= this.ag && (this.Gc = 3);
				break;
			case 3:
				2147483647 != Bh(this.D, this.a.ig, this.a.A + this.Hi, this.a.w + this.Ii) && (this.ag = 0, this.Gc = 1, this.a.b.wa = 8);
				break;
			case 0:
				if (0 != (a & 3) && 0 == (a & 12) && 2147483647 != Bh(this.D, this.a.ig, this.a.A + this.Hi, this.a.w + this.Ii))
				{
					this.Gc = 1;
					this.ug = 0;
					break
				}
				0 != (a & 2) && null !=
					this.a.Ca && oc(this.a.Ca, 10) && (this.ug = 0, this.Gc = 4);
				if (2147483647 != Bh(this.D, this.a.ig, this.a.A + this.Hi, this.a.w + this.Ii)) break;
				0 == om(this, this.a.A, this.a.w + 10, this.am, !0) ? (a = this.a.A - this.a.c.Ha, b = this.a.w - this.a.c.Oa, d = new Ya, nm(this, a, b + this.am - 1, a, b, this.am, d), this.a.A = d.x + this.a.c.Ha, this.a.w = d.y + this.a.c.Oa, this.yn = !1) : this.Gc = 3;
				break;
			case 1:
				if (2147483647 == Bh(this.D, this.a.ig, this.a.A + this.Hi, this.a.w + this.Ii))
				{
					if (0 > this.ag)
						for (f = 0; 32 > f; f++)
							if (2147483647 != Bh(this.D, this.a.ig, this.a.A + this.Hi,
									this.a.w + this.Ii + f))
							{
								this.a.w += f;
								break
							} this.ag = 0
				}
				0 != (a & 12) && (this.ag = this.Gc = 0);
				break;
			case 4:
				0 == (a & 2) && (null != hoPtr.Ca && oc(this.a.Ca, 11) ? (this.Gc = 5, this.a.b.lh = 11, ki(this.a.Ca), this.a.Ca.ap = 1) : this.Gc = 0);
				break;
			case 5:
				null != this.a.Ca && 0 == this.a.Ca.oi && (this.Gc = 0)
		}
		if (0 == this.Gc || 4 == this.Gc || 5 == this.Gc)
		{
			do {
				a = null;
				null != this.a.ke && (a = this.a.ke.Rm);
				if (null == Vc(this.a.c, this.a, this.a.b.Jb, this.a.b.ac, this.a.b.bc, this.a.b.cc, this.a.A, this.a.w, a) && (a = Vc(this.a.c, this.a, this.a.b.Jb, this.a.b.ac, this.a.b.bc,
						this.a.b.cc, this.a.A, this.a.w + 1, a), null != a && 1 == a.size()))
				{
					a = a.get(0);
					if ((null == this.Hp || this.Hp != a) && this.a.jc != a.jc)
					{
						this.Hp = a;
						this.Uy = a.A;
						this.Vy = a.w;
						break
					}
					b = a.A - this.Uy;
					d = a.w - this.Vy;
					this.Uy = a.A;
					this.Vy = a.w;
					this.a.A += b;
					this.a.w += d;
					hh(this.a.c, this.a);
					this.a.b.fa = !0;
					break
				}
				this.Hp = null
			} while (0)
		}
		else this.Hp = null
	},
	zB: function()
	{
		this.ag = this.ug = this.a.b.ra = 0
	},
	wh: function()
	{
		this.stop()
	},
	stop: function()
	{
		if (this.sg != this.a.c.Ye) this.zB();
		else
		{
			this.a.J.sa = !0;
			var a = this.a.A - this.a.c.Ha,
				b = this.a.w - this.a.c.Oa,
				c;
			switch (this.a.c.u.ay & 4294901760)
			{
				case -786432:
					a = this.a.A - this.a.Wa;
					b = this.a.w - this.a.Xa;
					c = $g(this.a.c, a, b, a + this.a.da, b + this.a.ca);
					a = this.a.A;
					b = this.a.w;
					0 != (c & 1) && (a = this.a.Wa, this.ug = 0, this.yn = !0);
					0 != (c & 2) && (a = this.a.c.Md - this.a.da + this.a.Wa, this.ug = 0, this.yn = !0);
					0 != (c & 4) && (b = this.a.Xa, this.ag = 0, this.yn = !1);
					0 != (c & 8) && (b = this.a.c.Nd - this.a.ca + this.a.Xa, this.ag = 0, this.yn = !1);
					this.a.A = a;
					this.a.w = b;
					this.Gc = 2 == this.Gc ? 3 : 0;
					this.Gp = 0;
					break;
				case -851968:
				case -917504:
					if (this.yn = !1, c = new Ya, 3 == this.Gc) nm(this,
						a, b, this.a.b.Ym - this.a.c.Ha, this.a.b.Zm - this.a.c.Oa, this.am, c), this.a.A = c.x + this.a.c.Ha, this.a.w = c.y + this.a.c.Oa, this.Gc = 0, this.a.b.fa = !0, om(this, this.a.A, this.a.w + 1, 0, !0) ? this.ug = this.a.b.ra = 0 : (this.Gp = 0, this.a.b.ra = Math.abs(this.ug / 256), this.ag = 0);
					else
					{
						if (0 == this.Gc)
						{
							if (nm(this, a, b, a, b - this.am, 0, c))
							{
								this.a.A = c.x + this.a.c.Ha;
								this.a.w = c.y + this.a.c.Oa;
								this.a.b.fa = !0;
								break
							}
							if (nm(this, a, b, this.a.b.Ym - this.a.c.Ha, this.a.b.Zm - this.a.c.Oa, 0, c))
							{
								this.a.A = c.x + this.a.c.Ha;
								this.a.w = c.y + this.a.c.Oa;
								this.a.b.fa = !0;
								this.zB();
								break
							}
						}
						if (2 == this.Gc)
						{
							if (nm(this, a, b, a, b - this.am, 0, c))
							{
								this.a.A = c.x + this.a.c.Ha;
								this.a.w = c.y + this.a.c.Oa;
								this.a.b.fa = !0;
								break
							}
							this.Gp = 1;
							this.ug = 0
						}
						1 == this.Gc && nm(this, a, b, this.a.b.Ym - this.a.c.Ha, this.a.b.Zm - this.a.c.Oa, 0, c) ? (this.a.A = c.x + this.a.c.Ha, this.a.w = c.y + this.a.c.Oa, this.a.b.fa = !0, this.zB()) : (this.a.b.Jb = this.a.b.Nx, this.a.b.ac = this.a.b.Mx, om(this, this.a.A, this.a.w, 0, !0) || (this.a.A = this.a.b.Ym, this.a.w = this.a.b.Zm, this.a.b.fa = !0))
					}
			}
		}
	},
	Fe: function(a)
	{
		this.a.A != a && (this.a.A = a, this.a.J.sa = !0, this.a.b.fa = !0, this.a.b.Wb = !0)
	},
	Ge: function(a)
	{
		this.a.w != a && (this.a.w = a, this.a.J.sa = !0, this.a.b.fa = !0, this.a.b.Wb = !0)
	},
	rh: function(a)
	{
		0 > a && (a = 0);
		250 < a && (a = 250);
		a > this.a.b.nc && (a = this.a.b.nc);
		this.a.b.ra = a;
		this.ug = this.a.b.ra * Jk[this.a.c.hd(this.a)];
		this.ag = this.a.b.ra * Ik[this.a.c.hd(this.a)];
		this.a.J.sa = !0
	},
	Ck: function(a)
	{
		0 > a && (a = 0);
		250 < a && (a = 250);
		this.a.b.nc = a;
		a <<= 8;
		this.ug > a && (this.ug = a);
		this.a.J.sa = !0
	},
	zr: function(a)
	{
		this.nv = a
	},
	qh: function(a)
	{
		this.a.b.wa = a;
		this.ug = this.a.b.ra * Jk[a];
		this.ag =
			this.a.b.ra * Ik[a]
	},
	$z: function()
	{
		var a;
		0 < this.a.b.Jb ? a = yi(this.a.c.m.Ba, this.a.b.Jb, this.a.b.ac, this.a.b.bc, this.a.b.cc) : (a = new Bi, a.width = this.a.da, a.height = this.a.ca, a.Hb = this.a.Wa, a.Cb = this.a.Xa);
		this.Hi = 0;
		this.Ii = a.height - a.Cb;
		this.am = 2 * a.height + a.height >>> 3
	},
	rM: function()
	{
		this.$z();
		2147483647 == Bh(this.D, this.a.ig, this.a.A + this.Hi, this.a.w + this.Ii) && (0 == id(this.a.c, this.a, this.a.b.ac, this.a.b.bc, this.a.b.cc, this.a.A, this.a.w, 0, 0) && (2 == this.Gc && 0 > this.ag || 0 == id(this.a.c, this.a, this.a.b.ac, this.a.b.bc,
			this.a.b.cc, this.a.A, this.a.w, this.am, 1)) || kh(this.a.c.u, this.a, -851968 | this.a.rb & 65535))
	}
});
var Hm = [4294967288, 4294967292, 4294967294, 4294967295];

function Im()
{
	this.wD = this.Wy = this.xD = this.Xy = this.zn = this.Ip = this.Yy = this.bg = this.Mk = 0
}
Im.prototype = m(new lm,
{
	za: function(a, b)
	{
		this.a = a;
		this.bg = 0;
		this.Mk = this.a.b.ra = 0;
		this.wD = -1;
		this.a.b.Kl = b.Kq;
		this.sr = b.AB;
		this.rj = mm(b.AB);
		this.tr = b.BB;
		this.Ng = mm(b.BB);
		this.a.b.nc = b.MG;
		this.a.b.vk = 0;
		this.xD = b.KG;
		this.a.J.ln = 0;
		this.kn = b.ix;
		this.Wy = 0;
		this.Xy = Hm[b.JG];
		this.Yy = b.LG;
		this.Ip = 0;
		this.zn = this.a.c.hd(this.a);
		this.a.Mj = 0;
		this.a.Nj = 0;
		sm(this, b);
		this.a.b.fa = !0
	},
	move: function()
	{
		var a, b, c;
		this.a.c.op = 1;
		if (0 == this.Mk)
		{
			this.a.J.jn = !1;
			a = this.a.c.pe[this.a.b.Kl - 1] & 15;
			b = 0;
			0 != (a & 8) && (b = -1);
			0 != (a & 4) &&
				(b = 1);
			if (0 != b)
			{
				c = this.Yy;
				0 != (this.a.c.N.vd & 32768) && (c *= this.a.c.ce);
				for (this.Ip += c; 100 < this.Ip;) this.Ip -= 100, this.zn += b, this.zn &= 31, this.a.b.wa = this.zn & this.Xy;
				this.a.b.fa = !0
			}
			c = 0;
			0 != this.a.J.ln ? (0 != (a & 1) && (c = 1), 0 != (a & 2) && (c = 2)) : (0 != (a & 1) && (c = 2), 0 != (a & 2) && (c = 1));
			for (b = this.bg;;)
			{
				if (0 != (c & 1))
				{
					if (0 == this.bg)
					{
						if (0 == this.xD) break;
						if (0 != (this.Wy & 3)) break;
						this.a.J.ln ^= 1;
						c = this.rj;
						0 != (this.a.c.N.vd & 32768) && (c *= this.a.c.ce);
						b += c;
						c = b >> 8;
						c > this.a.b.nc && (this.bg = b = this.a.b.nc << 8);
						this.bg = b;
						break
					}
					c = this.Ng;
					0 !=
						(this.a.c.N.vd & 32768) && (c *= this.a.c.ce);
					b -= c;
					0 > b && (b = 0);
					this.bg = b
				}
				else 0 != (c & 2) && (c = this.rj, 0 != (this.a.c.N.vd & 32768) && (c *= this.a.c.ce), b += c, c = b >> 8, c > this.a.b.nc && (this.bg = b = this.a.b.nc << 8), this.bg = b);
				break
			}
			this.Wy = a;
			this.a.b.ra = this.bg >> 8;
			this.a.b.lh = 1;
			null != this.a.Ca && ki(this.a.Ca);
			a = this.a.c.hd(this.a);
			0 != this.a.J.ln && (a = a + 16 & 31);
			if (0 == tm(this, this.a.b.ra, a)) return
		}
		do {
			if (0 == this.Mk) break;
			if (0 == this.a.c.op) break;
			b = this.bg;
			b -= this.Ng;
			if (0 >= b)
			{
				this.Mk = this.bg = 0;
				break
			}
			this.bg = b;
			b >>= 8;
			a = this.a.c.hd(this.a);
			0 != this.Mk && (a += 16, a &= 31);
			if (0 == tm(this, b, a)) break
		} while (1)
	},
	reverse: function() {},
	stop: function()
	{
		this.bg = this.Mk = 0;
		this.a.J.ln = 0;
		this.sg == this.a.c.Ye && (rm(this, 0 != (this.kn & 1)), this.a.J.sa = !0)
	},
	start: function()
	{
		this.nd = 0;
		this.a.J.sa = !0
	},
	wh: function()
	{
		this.sg == this.a.c.Ye && rm(this, 0 != (this.kn & 1));
		this.a.c.de != this.wD && (this.Mk = this.a.J.ln, this.a.J.ln = 0, this.Mk++, 16 <= this.Mk ? this.stop() : (this.a.J.sa = !0, this.a.J.jn = !0))
	},
	rh: function(a)
	{
		0 > a && (a = 0);
		250 < a && (a = 250);
		a > this.a.b.nc && (a = this.a.b.nc);
		this.bg =
			a << 8;
		this.a.J.sa = !0
	},
	Ck: function(a)
	{
		0 > a && (a = 0);
		250 < a && (a = 250);
		this.a.b.nc = a;
		a <<= 8;
		this.bg > a && (this.bg = a);
		this.a.J.sa = !0
	},
	Iu: function(a)
	{
		this.Yy = a
	},
	Fe: function(a)
	{
		this.a.A != a && (this.a.A = a, this.a.J.sa = !0, this.a.b.fa = !0, this.a.b.Wb = !0)
	},
	Ge: function(a)
	{
		this.a.w != a && (this.a.w = a, this.a.J.sa = !0, this.a.b.fa = !0, this.a.b.Wb = !0)
	},
	qh: function(a)
	{
		this.zn = a;
		this.a.b.wa = a & this.Xy
	}
});

function Jm()
{}
Jm.prototype = m(new lm,
{
	za: function(a)
	{
		this.a = a;
		this.a.b.ra = 0;
		this.a.b.Wb = !0;
		this.a.b.fa = !0
	},
	move: function()
	{
		null != this.a.Ca && ki(this.a.Ca);
		this.a.b.Wb && (this.a.b.Wb = !1, hh(this.a.c, this.a))
	},
	Fe: function(a)
	{
		this.a.A != a && (this.a.A = a, this.a.J.sa = !0, this.a.b.fa = !0);
		this.a.b.Wb = !0
	},
	Ge: function(a)
	{
		this.a.w != a && (this.a.w = a, this.a.J.sa = !0, this.a.b.fa = !0);
		this.a.b.Wb = !0
	},
	qh: function() {},
	reverse: function() {},
	stop: function() {},
	start: function() {},
	wh: function() {},
	rh: function() {},
	Ck: function() {}
});

function Km(a)
{
	this.Bd = a;
	this.uE = 0
}
Km.prototype = m(new lm,
{
	za: function(a, b)
	{
		this.a = a;
		var c = Ua(a.c.m.file, b.data);
		this.Bd.MA(c);
		this.a.b.Wb = !0;
		this.a.b.fa = !0
	},
	Vc: function()
	{
		this.Bd.Vc()
	},
	move: function()
	{
		this.Bd.move() && (this.a.b.fa = !0)
	},
	stop: function()
	{
		this.Bd.stop(this.sg == this.a.c.Ye)
	},
	start: function()
	{
		this.Bd.start()
	},
	wh: function()
	{
		this.Bd.wh(this.sg == this.a.c.Ye)
	},
	rh: function(a)
	{
		this.Bd.rh(a)
	},
	Ck: function(a)
	{
		this.Bd.Ck(a)
	},
	reverse: function()
	{
		this.Bd.reverse()
	},
	Fe: function(a)
	{
		this.Bd.Fe(a);
		this.a.b.fa = !0;
		this.a.b.Wb = !0
	},
	Ge: function(a)
	{
		this.Bd.Ge(a);
		this.a.b.fa = !0;
		this.a.b.Wb = !0
	},
	qh: function(a)
	{
		this.Bd.qh(a);
		this.a.b.fa = !0;
		this.a.b.Wb = !0
	},
	tE: function(a, b)
	{
		this.uE = b;
		return this.Bd.kz(a)
	}
});
var jh = 1,
	mh = 2;

function Rh()
{
	this.Du = 0;
	this.xa = null;
	this.JC = 0;
	this.sa = !1;
	this.ln = 0;
	this.jn = !1;
	this.Cu = 0
}
Rh.prototype = {
	za: function(a, b, c, d, e)
	{
		null != this.xa && this.xa.Vc();
		null != d && (b.b.wa = d.AE);
		this.JC = b.ke.WB;
		b.b.md = -1;
		if (null != c.ji && a < c.ji.Wt)
		{
			c = c.ji.Af[a];
			this.Du = a; - 1 == e && (e = c.DB);
			b.b.md = e;
			switch (e)
			{
				case 0:
					this.xa = new Jm;
					break;
				case 1:
					this.xa = new Em;
					break;
				case 2:
					this.xa = new Im;
					break;
				case 3:
					this.xa = new Dm;
					break;
				case 4:
					this.xa = new Am;
					break;
				case 5:
					this.xa = new Fm;
					break;
				case 9:
					this.xa = new Gm;
					break;
				case 14:
					a = c.Gb, e = null, "box2dspaceship" == a && (e = new Lm), "box2dbouncingball" == a && (e = new Mm), null != e ? (e.za(b), a =
						new Km(e)) : a = null, this.xa = a, null == this.xa && (this.xa = new Jm)
			}
			b.b.wa = this.kA(b, c.UG, b.b.wa);
			this.xa.za(b, c)
		} - 1 == b.b.md && (b.b.md = 0, this.xa = new Jm, this.xa.za(b, null), b.b.wa = 0)
	},
	Vc: function()
	{
		this.xa.Vc()
	},
	move: function()
	{
		this.xa.move()
	},
	kA: function(a, b, c)
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

function lc(a, b, c)
{
	null != a.xa && a.xa.Vc();
	b.b.md = c;
	switch (c)
	{
		case 11:
			a.xa = new Cm;
			break;
		case 13:
			a.xa = new Bm
	}
	a.xa.a = b;
	a.xa.za(b, null)
};

function Wl()
{
	this.Vb = 0;
	this.ec = null;
	this.mh = this.$g = this.ni = this.yi = this.Jk = this.Ik = this.Bv = this.angle = this.ta = this.Ah = 0;
	this.Ks = null;
	this.TC = !1;
	this.mq = new W;
	this.Er = new W;
	this.Hq = new W;
	this.cy = new W;
	this.qE = this.sE = this.pE = this.rE = 0;
	this.ye = new W;
	this.Oq = new W;
	this.Wi = new W;
	this.YG = this.XG = 0;
	this.Fs = new W;
	this.yg = this.Un = !1
}
Wl.prototype = m(new Xl,
{
	ZI: function()
	{
		var a = this.v.c,
			b = 0,
			c;
		for (c = 0; c < a.Tb; b++, c++)
		{
			for (; 0 == a.W[b];) b++;
			var d = a.W[b];
			32 <= d.rb && (1110591041 == d.ga.Mc && d.ext.identifier == this.identifier && this.mq.add(d.ext), 1110874198 == d.ga.Mc && d.ext.identifier == this.identifier && this.Hq.add(d.ext), 1110594637 == d.ga.Mc && d.ext.identifier == this.identifier && this.Er.add(d.ext), 1110634490 == d.ga.Mc && d.ext.identifier == this.identifier && this.cy.add(d.ext))
		}
		return null
	},
	QM: function(a)
	{
		a.x = a.x * this.ta - this.Ik;
		a.y = this.Jk - a.y * this.ta
	},
	UP: function(a)
	{
		a.x = (this.Ik + a.x) / this.ta;
		a.y = (this.Jk - a.y) / this.ta
	},
	VP: function(a, b, c)
	{
		b = b * Z.K.ma.Za / 180;
		c = c * Z.K.ma.Za / 180;
		b > c ? a.vn(!1) : (a.vn(!0), a.$r(b, c))
	},
	WP: function(a, b, c)
	{
		b = b / 100 * 20;
		c = c / 100 * 10;
		var d = !0;
		0 == b && 0 == c && (d = !1);
		a.Nr(d);
		a.OD(b);
		a.as(c)
	},
	YP: function(a, b, c, d)
	{
		a.Kb(b, c, d);
		return this.ec.fc(a)
	},
	Xq: function(a, b, c, d, e, f, g)
	{
		if (0 == b) return null;
		var k = 0,
			h, p = null,
			l = 1E7;
		for (h = 0; h < this.I.Tb; k++, h++)
		{
			for (; null == this.I.W[k];) k++;
			var r = this.I.W[k];
			if (E(r.ke.To, e) && (r = this.Yb(r), null != r))
			{
				var u = r.Qa.A -
					a.Qa.A,
					q = r.Qa.w - a.Qa.w,
					u = Math.sqrt(u * u + q * q);
				u <= l && (l = u, p = r)
			}
		}
		if (null != p && (d = this.fc(d), null != d)) switch (b)
		{
			case 1:
				b = new Z.i.O.Wk;
				b.rf = !0;
				f > g ? b.bl = !1 : (b.bl = !0, b.RF = f, b.uI = g);
				var v;
				switch (c)
				{
					case 0:
						v = a.s.L.position;
						break;
					case 1:
						v = this.Ph(a)
				}
				b.Kb(a.s, p.s, v);
				Nm(d, 2, this.ec.fc(b));
				return d.Jd;
			case 2:
				b = new Z.i.O.Cj;
				b.rf = !0;
				b.ko = f;
				b.$n = g;
				var n, w;
				switch (c)
				{
					case 0:
						n = a.s.L.position;
						w = p.s.L.position;
						break;
					case 1:
						n = this.Ph(a), w = this.Ph(p)
				}
				b.Kb(a.s, p.s, n, w);
				Nm(d, 1, this.ec.fc(b));
				return d.Jd;
			case 3:
				b = new Z.i.O.Vk;
				b.rf = !0;
				f > g ? b.bl = !1 : (b.bl = !0, b.Lw = f / this.ta, b.ry = g / this.ta);
				switch (c)
				{
					case 0:
						n = a.s.L.position;
						w = p.s.L.position;
						break;
					case 1:
						n = this.Ph(a), w = this.Ph(p)
				}
				c = new Z.K.Math.Ua(w.x - n.x, w.y - n.y);
				b.Kb(a.s, p.s, n, c);
				Nm(d, 3, this.ec.fc(b));
				return d.Jd
		}
		return null
	},
	oj: function(a, b, c, d, e, f, g, k)
	{
		if (null != f && a != Z.i.Qc.Pd && 9 != f.ha && 8 != f.ha)
		{
			var h;
			for (h = 0; h < this.mq.size(); h++) this.mq.get(h).lC(f);
			for (h = 0; h < this.Hq.size(); h++) this.Hq.get(h).lC(f);
			for (h = 0; h < this.Er.size(); h++) this.Er.get(h).lC(f)
		}
		h = new Z.i.Nn;
		h.type = a;
		h.position.Set((this.Ik + b) / this.ta, (this.Jk - c) / this.ta);
		h.angle = d * Z.K.ma.Za / 180;
		h.HF = e;
		h.Pg = f;
		g & 1 && (h.tF = !0);
		g & 2 && (h.oE = !0);
		g & 4 && (h.NF = k);
		return this.ec.yj(h)
	},
	Wq: function(a)
	{
		this.Un || this.ec.Zr(this.Ks);
		if (this.Ks.Xz) this.Fs.add(a);
		else
		{
			var b = a.Ei();
			if (null != b)
			{
				if (9 != b.ha && 8 != b.ha)
				{
					var c;
					for (c = 0; c < this.mq.size(); c++) this.mq.get(c).pC(b);
					for (c = 0; c < this.Hq.size(); c++) this.Hq.get(c).pC(b);
					for (c = 0; c < this.Er.size(); c++) this.Er.get(c).pC(b);
					for (c = 0; c < this.cy.size(); c++) this.cy.get(c).pC(b)
				}
				a.cz(null)
			}
			this.dL(a);
			this.ec.kD(a);
			this.Un || this.ec.Zr(null)
		}
	},
	BH: function(a, b)
	{
		a.TI(b)
	},
	sk: function(a, b, c, d, e, f, g, k, h)
	{
		--e;
		--f;
		null != b && (b.be.left = -e / 2, b.be.right = e / 2, b.be.top = -f / 2, b.be.bottom = f / 2);
		b = new Z.H.cb.vh;
		c = new Z.K.Math.Ua((this.Ik + c) / this.ta, (this.Jk - d) / this.ta);
		b.HD(e / 2 / this.ta, f / 2 / this.ta, a.Zf(c));
		e = new Z.i.Dj;
		e.shape = b;
		e.sm = g;
		e.$g = k;
		e.mh = h;
		e.Pg = this;
		return a.Bi(e)
	},
	mC: function(a, b, c, d, e, f, g, k)
	{
		null != b && (b.be.left = -e, b.be.right = e, b.be.top = -e, b.be.bottom = e);
		b = new Z.H.cb.lm;
		b.sb = e / this.ta;
		c = new Z.K.Math.Ua((this.Ik +
			c) / this.ta, (this.Jk - d) / this.ta);
		c = a.Zf(c);
		b.Te.Set(c.x, c.y);
		c = new Z.i.Dj;
		c.shape = b;
		c.sm = f;
		c.$g = g;
		c.mh = k;
		c.Pg = this;
		return a.Bi(c)
	},
	SP: function(a, b, c, d, e, f)
	{
		var g = new Z.K.Math.Ua(a.L.position.x, a.L.position.y);
		g.x += e / this.ta;
		g.y += f / this.ta;
		e = new Z.K.Math.Ua(b.L.position.x, b.L.position.y);
		f = new Z.i.O.Cj;
		f.rf = !1;
		f.ko = d;
		f.$n = c;
		f.Kb(a, b, g, e);
		this.ec.fc(f)
	},
	zH: function(a, b, c)
	{
		new Z.K.Math.Ua(a.L.position.x, a.L.position.y);
		b = new Z.K.Math.Ua(b * Math.cos(c * Z.K.ma.Za / 180), b * Math.sin(c * Z.K.ma.Za / 180));
		a.Xl(b)
	},
	FH: function(a)
	{
		a.aK()
	},
	LM: function(a, b)
	{
		a.wy(b)
	},
	NM: function(a, b)
	{
		a.wy(b)
	},
	GH: function(a)
	{
		a.bK()
	},
	nC: function(a, b)
	{
		a.cK(b)
	},
	yH: function(a, b, c)
	{
		var d = a.o;
		d.x += b;
		d.y += c;
		a.Qh(d)
	},
	AH: function(a, b, c)
	{
		var d = a.o;
		360 < c && (c -= 360);
		b = new Z.K.Math.Ua(b * Math.cos(c * Z.K.ma.Za / 180), b * Math.sin(c * Z.K.ma.Za / 180));
		d.x += b.x / a.aa;
		d.y += b.y / a.aa;
		a.Qh(d)
	},
	MM: function(a, b, c)
	{
		var d = new Z.K.Math.Ua(a.L.position.x, a.L.position.y);
		b = new Z.K.Math.Ua(b * Math.cos(c * Z.K.ma.Za / 180), b * Math.sin(c * Z.K.ma.Za / 180));
		a.GI(b, d)
	},
	CH: function(a)
	{
		return 180 *
			a.Di() / Z.K.ma.Za
	},
	Vq: function(a, b, c)
	{
		var d = a.Di(),
			e = new Z.K.Math.Ua(a.L.position.x, a.L.position.y);
		1448633650 != b && (e.x = (this.Ik + b) / this.ta);
		1448633650 != c && (e.y = (this.Jk - c) / this.ta);
		a.vv(e, d)
	},
	Ix: function(a, b)
	{
		var c = new Z.K.Math.Ua(a.L.position.x, a.L.position.y);
		a.vv(c, b * Z.K.ma.Za / 180)
	},
	Jx: function(a, b, c)
	{
		b = new Z.K.Math.Ua(b * Math.cos(c * Z.K.ma.Za / 180), b * Math.sin(c * Z.K.ma.Za / 180));
		a.Qh(b)
	},
	KM: function(a, b, c)
	{
		b = new Z.K.Math.Ua(b * Math.cos(c * Z.K.ma.Za / 180), b * Math.sin(c * Z.K.ma.Za / 180));
		c = a.o;
		c.x += b.x;
		c.y +=
			b.y;
		a.Qh(c)
	},
	EH: function(a, b, c, d, e)
	{
		b = new Z.K.Math.Ua(b * Math.cos(c * Z.K.ma.Za / 180) + d, b * Math.sin(c * Z.K.ma.Za / 180) + e);
		a.Qh(b)
	},
	Xh: function(a, b, c)
	{
		return 0 != (a.qa[c * a.lineWidth + Math.floor(b / 16)] & 32768 >>> (b & 15))
	},
	Dn: function(a, b, c, d, e)
	{
		var f = e.angle;
		e.angle = 57.2957795 * Math.atan2(b - d, a - c);
		return f == e.angle ? !1 : !0
	},
	Zo: function(a, b, c, d, e, f, g, k, h, p)
	{
		new Z.H.cb.vh;
		var l = bh(Y(this.I.m.Ba, e), 0, 0, 1, 1),
			r = l.width,
			u = l.height,
			q, v, n, w;
		e = [];
		var D = [],
			z, A, I, G = 0;
		null != b && (b.be.left = -r / 2 * h, b.be.right = r / 2 * h, b.be.top = -u / 2 *
			p, b.be.bottom = u / 2 * p);
		var R = !1;
		0 > f && (R = !0, f = 0);
		v = u - 1;
		for (z = -1; 0 <= v; v--)
			for (q = r - 1; 0 <= q; q--)
				if (this.Xh(l, q, v))
				{
					q > z && (z = q, A = v);
					break
				} if (0 > z) return this.sk(a, b, c, d, l.width, l.height, f, g, k);
		n = e[G] = z;
		w = D[G] = A;
		G++;
		v = 0;
		for (z = -1; v < u; v++)
			for (q = r - 1; 0 <= q; q--)
				if (this.Xh(l, q, v))
				{
					q > z && (z = q, A = v);
					break
				} I = {
			angle: 1E3
		};
		if (this.Dn(z, A, n, w, I))
		{
			for (q = 0; q < G && (e[q] != z || D[q] != A); q++);
			q == G && (n = e[G] = z, w = D[G++] = A)
		}
		q = r - 1;
		for (A = 1E4; 0 <= q; q--)
			for (v = 0; v < u; v++)
				if (this.Xh(l, q, v))
				{
					v < A && (z = q, A = v);
					break
				} for (q = 0; q < G && (e[q] != z || D[q] != A); q++);
		q == G && (this.Dn(z, A, n, w, I) || G--, n = e[G] = z, w = D[G++] = A);
		q = 0;
		for (A = 1E4; q < r; q++)
			for (v = 0; v < u; v++)
				if (this.Xh(l, q, v))
				{
					v < A && (z = q, A = v);
					break
				} for (q = 0; q < G && (e[q] != z || D[q] != A); q++);
		q == G && (this.Dn(z, A, n, w, I) || G--, n = e[G] = z, w = D[G++] = A);
		v = 0;
		for (z = 1E4; v < u; v++)
			for (q = 0; q < r; q++)
				if (this.Xh(l, q, v))
				{
					q < z && (z = q, A = v);
					break
				} for (q = 0; q < G && (e[q] != z || D[q] != A); q++);
		q == G && (this.Dn(z, A, n, w, I) || G--, n = e[G] = z, w = D[G++] = A);
		v = u - 1;
		for (z = 1E4; 0 <= v; v--)
			for (q = 0; q < r; q++)
				if (this.Xh(l, q, v))
				{
					q < z && (z = q, A = v);
					break
				} for (q = 0; q < G && (e[q] != z || D[q] != A); q++);
		q == G && (this.Dn(z, A, n, w, I) || G--, n = e[G] = z, w = D[G++] = A);
		q = 0;
		for (A = -1; q < r; q++)
			for (v = u - 1; 0 <= v; v--)
				if (this.Xh(l, q, v))
				{
					v > A && (z = q, A = v);
					break
				} for (q = 0; q < G && (e[q] != z || D[q] != A); q++);
		q == G && (this.Dn(z, A, n, w, I) || G--, n = e[G] = z, w = D[G++] = A);
		q = r - 1;
		for (A = -1; 0 <= q; q--)
			for (v = u - 1; 0 <= v; v--)
				if (this.Xh(l, q, v))
				{
					v > A && (z = q, A = v);
					break
				} for (q = 0; q < G && (e[q] != z || D[q] != A); q++);
		q == G && (this.Dn(z, A, n, w, I) || G--, e[G] = z, D[G++] = A);
		if (1 >= G) return this.sk(a, b, c, d, l.width, l.height, f, g, k);
		2 == G && (G = [], b = [], e[0] != e[1] ? (G[0] = e[0], b[0] = D[0] + 1, G[1] = e[0],
			b[1] = D[0], G[2] = e[1], b[2] = D[1], G[3] = e[1], b[3] = D[1] + 1) : (G[0] = e[0], b[0] = D[0], G[1] = e[1], b[1] = D[1], G[2] = e[1] - 1, b[2] = D[1], G[3] = e[0] - 1, b[3] = D[0]), e = G, D = b, G = 4);
		c = b = 0;
		if (R) b = r / 2, c = u / 2;
		else
		{
			for (u = 0; u < G; u++) b += e[u], c += D[u];
			b /= G;
			c /= G
		}
		r = [];
		for (u = 0; u < G; u++) r[u] = new Z.K.Math.Ua(0, 0), r[u].Set((e[u] - b) / this.ta * h * 1, (c - D[u]) / this.ta * p * 1);
		p = new Z.i.Dj;
		h = new Z.H.cb.vh;
		h.sv(r, G);
		p.shape = h;
		p.sm = f;
		p.$g = g;
		p.mh = k;
		p.Pg = this;
		return a.Bi(p)
	},
	OM: function(a, b, c)
	{
		if (0 == (this.Vb & 2)) return null;
		var d = c.Qa,
			e = new Z.i.Nn;
		e.type = Z.i.Qc.re;
		e.position.Set((this.Ik + d.A) / this.ta, (this.Jk - d.w) / this.ta);
		e.angle = a * Z.K.ma.Za / 180;
		e.HF = this.rE;
		e.Pg = c;
		pBody = this.ec.yj(e);
		this.Zo(pBody, c, d.A, d.w, d.b.Jb, this.pE, this.qE, this.sE, d.b.bc, d.b.cc);
		a = new Z.K.Math.Ua(b * Math.cos(a * Z.K.ma.Za / 180), b * Math.sin(a * Z.K.ma.Za / 180));
		pBody.Qh(a);
		return pBody
	},
	DH: function(a)
	{
		a.bz()
	},
	RP: function(a, b, c)
	{
		a.vv(b, c)
	},
	oC: function(a, b)
	{
		var c = a.L.position,
			c = new Z.K.Math.Ua(c.x, c.y);
		this.QM(c);
		b.x = na(c.x);
		b.y = na(c.y);
		b.angle = na(180 * a.Di() / Z.K.ma.Za)
	},
	PM: function(a, b)
	{
		var c =
			bh(Y(this.I.m.Ba, a), 0, 0, 1, 1),
			d, e;
		b.Tu = 0;
		b.Uu = c.height - 1;
		var f;
		e = 0;
		for (f = !1; e < c.height; e++)
		{
			for (d = 0; d < c.width; d++)
				if (this.Xh(c, d, e))
				{
					b.Tu = e;
					f = !0;
					break
				} if (f) break
		}
		e = c.height - 1;
		for (f = !1; 0 <= e; e--)
		{
			for (d = 0; d < c.width; d++)
				if (this.Xh(c, d, e))
				{
					b.Uu = e;
					f = !0;
					break
				} if (f) break
		}
		b.Hr = 0;
		b.Ir = c.width - 1;
		d = 0;
		for (f = !1; d < c.width; d++)
		{
			for (e = 0; e < c.height; e++)
				if (this.Xh(c, d, e))
				{
					b.Hr = d;
					f = !0;
					break
				} if (f) break
		}
		d = c.width - 1;
		for (f = !1; 0 <= d; d--)
		{
			for (e = c.height - 1; 0 <= e; e--)
				if (this.Xh(c, d, e))
				{
					b.Ir = d;
					f = !0;
					break
				} if (f) break
		}
	},
	QP: function(a,
		b, c, d, e, f, g, k, h, p, l, r)
	{
		d = {};
		this.PM(c, d);
		d.Hr *= p;
		d.Ir *= p;
		d.Tu *= l;
		d.Uu *= l;
		r = Math.max(r, .1);
		bh(Y(this.I.m.Ba, c), 0, 0, 1, 1);
		c = [];
		for (p = 0; 6 > p; p++) c[p] = new Z.K.Math.Ua(0, 0);
		p = d.Ir - d.Hr;
		l = (d.Hr + d.Ir) / 2;
		e = (d.Tu + d.Uu) / 2;
		d = 0;
		c[0].Set(-p / 4 * r / this.ta, d / this.ta);
		c[1].Set(p / 4 * r / this.ta, d / this.ta);
		c[2].Set(p / 2 * r / this.ta, (0 + e / 8) / this.ta);
		d = 0 + 2 * e;
		c[3].Set(p / 2 * r / this.ta, d / this.ta);
		c[4].Set(-p / 2 * r / this.ta, d / this.ta);
		c[5].Set(-p / 2 * r / this.ta, (0 + e / 8) / this.ta);
		h.offsetX = p;
		h.offsetY = e;
		b.be.left = -l * r;
		b.be.right = l * r;
		b.be.top = -e;
		b.be.bottom = e;
		b = new Z.H.cb.vh;
		b.sv(c, 6);
		r = new Z.i.Dj;
		r.shape = b;
		r.sm = f;
		r.$g = g;
		r.mh = k;
		r.Pg = this;
		h.MP = a.Bi(r)
	},
	UK: function()
	{
		for (var a = this.v.c, b = 0, c = new W, d, e = 0; e < a.Tb; e++)
		{
			for (; 0 == a.W[b];) b++;
			var f = a.W[b];
			b++;
			if (32 <= f.rb && 1110593103 == f.ga.Mc)
			{
				var g = f.ext;
				if (g.identifier == this.identifier)
				{
					var k;
					for (k = 0; k < c.size() && c.get(k) != f.ga; k++);
					if (k == c.size())
					{
						c.add(f.ga);
						d = f.ga;
						var h = g.wM,
							p = g.direction,
							l = b,
							r = new W;
						r.add(g);
						for (var u = e + 1; u < a.Tb; u++)
						{
							for (; 0 == a.W[l];) l++;
							f = a.W[l];
							l++;
							32 <= f.rb && 1110593103 == f.ga.Mc &&
								f.ga == d && (f = f.ext, f.identifier == this.identifier && f.wM == h && f.direction == p && r.add(f))
						}
						if (1 < r.size())
						{
							var q;
							do {
								q = !1;
								d = 0;
								do {
									k = r.get(d);
									var v = r.get(d + 1),
										f = k.v.A + 8,
										l = v.v.A + 8,
										u = k.v.w + 8,
										n = v.v.w + 8;
									switch (p)
									{
										case 0:
											l < f && (f = k, r.set(d, v), r.set(d + 1, f), q = !0);
											break;
										case 1:
											l > f && (f = k, r.set(d, v), r.set(d + 1, f), q = !0);
											break;
										case 2:
											n < u && (f = k, r.set(d, v), r.set(d + 1, f), q = !0);
											break;
										case 3:
											n > u && (f = k, r.set(d, v), r.set(d + 1, f), q = !0)
									}
									d++
								} while (d < r.size() - 1)
							} while (q);
							for (d = 0; d < r.size() - 1; d++)
							{
								k = r.get(d);
								v = r.get(d + 1);
								f = k.v.A + 8;
								l = v.v.A +
									8;
								u = k.v.w + 8;
								n = v.v.w + 8;
								k = l - f;
								var w = Math.abs(n - u),
									v = (f + l) / 2;
								q = (u + n) / 2;
								p = new ji;
								oi(p, null, 0 == h ? 8 : 9);
								p.s = this.oj(Z.i.Qc.Pd, v, q, 0, 0, p, 0);
								p.be.left = -k;
								p.be.right = k;
								p.be.top = -w;
								p.be.bottom = w;
								w = [];
								for (k = 0; 4 > k; k++) w[k] = new Z.K.Math.Ua(0, 0);
								w[0].Set((f - v) / this.ta, (q - u) / this.ta);
								w[1].Set((f - v) / this.ta, (q - u - 8) / this.ta);
								w[2].Set((l - v) / this.ta, (q - n - 8) / this.ta);
								w[3].Set((l - v) / this.ta, (q - n) / this.ta);
								f = new Z.H.cb.vh;
								f.sv(w, 4);
								l = new Z.i.Dj;
								l.shape = f;
								l.sm = 1;
								l.$g = g.$g;
								l.mh = g.mh;
								l.Pg = this;
								p.s.Bi(l)
							}
						}
					}
				}
			}
		}
	},
	ZK: function()
	{
		var a =
			new ji;
		oi(a, null, 7);
		a.s = this.oj(Z.i.Qc.Pd, this.I.Md / 2, this.I.Nd + 8, 0, 0, a, 0, 0);
		this.sk(a.s, a, this.I.Md / 2, this.I.Nd + 8, this.I.Md, 16, 0, 1, 0);
		a = new ji;
		oi(a, null, 4);
		a.s = this.oj(Z.i.Qc.Pd, -8, this.I.Nd / 2, 0, 0, a, 0, 0);
		this.sk(a.s, a, -8, this.I.Nd / 2, 16, this.I.Nd, 0, 1, 0);
		a = new ji;
		oi(a, null, 5);
		a.s = this.oj(Z.i.Qc.Pd, this.I.Md + 8, this.I.Nd / 2, 0, 0, a, 0, 0);
		this.sk(a.s, a, this.I.Md + 8, this.I.Nd / 2, 16, this.I.Nd, 0, 1, 0);
		a = new ji;
		oi(a, null, 6);
		a.s = this.oj(Z.i.Qc.Pd, this.I.Md / 2, -8, 0, 0, a, 0, 0);
		this.sk(a.s, a, this.I.Md / 2, -8, this.I.Md, 16,
			0, 1, 0)
	},
	eO: function(a, b)
	{
		for (var c = 0, d = 0; d < b.Tb; d++)
		{
			for (; 0 == b.W[c];) c++;
			var e = b.W[c];
			if (a == e.ft) return e;
			c++
		}
		return null
	},
	TK: function()
	{
		var a = this.I,
			b = a.N,
			a = a.m,
			c, d, e;
		for (c = 0; c < b.kc.length; c++)
		{
			var f = b.kc[c];
			if (0 != (f.Bb & 16))
			{
				var g;
				d = f.Ut;
				for (g = 0; g < f.St; d++, g++)
				{
					e = this.I.N.Gf.list[d];
					var k, h, p = e.pt,
						l, r, u;
					if (!(p >= Nb) && (k = e.Gw, h = e.Hw, e = Fe(a.Ke, e.bi), null != e && null != e.Kd && (e = e.Kd, l = e.JB, r = e.KB, u = e.LB, u == Tg.Kp || u == Tg.Bj)))
					{
						var q = new ji;
						oi(q, null, u == Tg.Kp ? 8 : 9);
						q.s = this.oj(Z.i.Qc.Pd, k + l / 2, h + r / 2, 0, 0, q, 0,
							0);
						p == Jj ? this.sk(q.s, q, k + l / 2, h + r / 2, l, r, 0, this.$g, this.mh) : this.Zo(q.s, q, k + l / 2, h + r / 2, e.ik, -1, this.$g, this.mh, 1, 1)
					}
				}
			}
		}
	},
	pw: function()
	{
		return 0
	},
	KI: function()
	{
		var a = 0,
			b;
		for (b = 0; b < this.I.Tb; a++, b++)
		{
			for (; null == this.I.W[a];) a++;
			var c = this.I.W[a];
			if (32 <= c.rb && 1110590791 == c.ga.Mc && c != this.v && c.ext.identifier == this.identifier) return !0
		}
		return !1
	},
	Bw: function()
	{
		return this.yg
	},
	qC: function()
	{
		0 == this.TC && (this.TC = !0, this.ZI(), this.UK(), this.Vb & 1 && this.TK(this));
		return !1
	},
	JE: function(a)
	{
		this.Ik = 0;
		this.Jk = this.I.m.fb;
		this.Vb = F(a);
		this.yi = F(a);
		this.ni = F(a);
		V(a, 4);
		this.angle = F(a) * Z.K.ma.Za / 16;
		this.ta = F(a);
		this.$g = F(a) / 100;
		this.mh = F(a) / 100;
		this.qE = F(a) / 100;
		this.sE = F(a) / 100;
		this.rE = F(a) / 100;
		this.pE = F(a) / 100;
		this.Ah = Sa(a);
		this.identifier = F(a);
		this.XG = F(a) / 100;
		this.YG = F(a) / 100;
		a = new Z.K.Math.Ua(this.Ah * Math.cos(this.angle), this.Ah * Math.sin(this.angle));
		this.ec = new Z.i.xg(a, !1);
		this.Ks = new Om;
		this.ec.Zr(this.Ks);
		this.TC = !1;
		this.Un = !0;
		this.yg = !1;
		this.KI() && (this.identifier = 1E3 + this.v.zc);
		this.ZK();
		return 0
	},
	jA: function()
	{
		this.ec =
			null
	},
	XI: function(a)
	{
		var b = this.I.W[a & 65535];
		return null != b && b.um == a >> 16 ? b : null
	},
	CA: function(a, b)
	{
		var c = a.Ca;
		if (null != c.oe.dg[b]) return b;
		if (0 != (c.oe.Li[b] & 64)) b = c.oe.Li[b] & 63;
		else if (0 != (c.oe.th[b] & 64)) b = c.oe.th[b] & 63;
		else
		{
			var d = b;
			0 > c.ar ? b = c.oe.th[b] & 63 : (b -= c.ar, b = 15 < (b & 31) ? c.oe.th[d] & 63 : c.oe.Li[d] & 63)
		}
		return b
	},
	HA: function()
	{
		this.qC(this);
		if (this.yg) return this.Un && this.ec.Zr(null), this.Un = !1, 0;
		this.Un || this.ec.Zr(this.Ks);
		this.Un = !0;
		var a;
		for (a = 0; a < this.Oq.size(); a++)
		{
			var b = this.Oq.get(a),
				b = this.XI(b),
				c = this.ye.get(a);
			null != b && c.Qa != b && (b = null);
			if (null == b) this.Wq(c.s), Xa(this.Oq, a), Xa(this.ye, a), a--;
			else
			{
				var d = new Z.K.Math.Ua((this.Ik + b.A) / this.ta, (this.Jk - b.w) / this.ta);
				c.s.vv(d, this.CA(b, b.b.wa) * Z.K.ma.Za / 16)
			}
		}
		null != this.ec && this.ec.fm(1 / this.I.m.AA, this.yi, this.ni);
		if (0 < this.Fs.size())
		{
			for (a = 0; a < this.Fs.size(); a++) this.Wq(this.Fs.get(a));
			this.Fs.clear()
		}
		return 0
	},
	Yb: function(a)
	{
		if (null == a || null == a.J || 0 != (a.Aa & fc)) return null;
		if (a.b.md == Mg)
		{
			var b = a.ga.ji.Af[a.J.Du];
			if (E(b.Gb, "box2d8directions") ||
				E(b.Gb, "box2dspring") || E(b.Gb, "box2dspaceship") || E(b.Gb, "box2dstatic") || E(b.Gb, "box2dracecar") || E(b.Gb, "box2daxial") || E(b.Gb, "box2dplatform") || E(b.Gb, "box2dbouncingball") || E(b.Gb, "box2dbackground"))
				if (a = a.J.xa.Bd, a.yq == this.identifier) return a
		}
		return null
	},
	IJ: function(a)
	{
		var b = a.Sc(this.I, 0),
			b = this.Yb(b);
		null != b && (a = a.wb(this.I, 1), b.Lp(a))
	},
	KJ: function(a)
	{
		var b = a.Sc(this.I, 0),
			b = this.Yb(b);
		null != b && (a = a.wb(this.I, 1), b.cm(a))
	},
	JJ: function(a)
	{
		var b = a.Sc(this.I, 0),
			b = this.Yb(b);
		null != b && (a = a.wb(this.I,
			1), b.em(a))
	},
	LJ: function(a)
	{
		var b = a.Sc(this.I, 0),
			b = this.Yb(b);
		null != b && (a = a.wb(this.I, 1), b.dm(a))
	},
	uJ: function()
	{
		this.yg = !0
	},
	CJ: function()
	{
		this.yg = !1
	},
	OJ: function(a)
	{
		this.yi = a.wb(this.I, 0);
		this.ni = a.wb(this.I, 1)
	},
	NJ: function(a)
	{
		this.Ah = ob(this.I, a.S[0]);
		a = new Z.K.Math.Ua(this.Ah * Math.cos(this.angle), this.Ah * Math.sin(this.angle));
		this.ec.dm(a)
	},
	MJ: function(a)
	{
		this.Bv = a.wb(this.I, 0);
		this.angle = this.Bv * Z.K.ma.Za / 180;
		a = new Z.K.Math.Ua(this.Ah * Math.cos(this.angle), this.Ah * Math.sin(this.angle));
		this.ec.dm(a)
	},
	fc: function(a)
	{
		a = new Pm(this, a);
		this.Wi.add(a);
		return a
	},
	Ie: function(a, b, c)
	{
		var d, e = 0;
		if (null != a)
		{
			e = this.Wi.indexOf(a);
			if (0 > e) return null;
			e++
		}
		for (a = e; a < this.Wi.size() && (d = this.Wi.get(a), !E(d.fG, b)); a++);
		return a < this.Wi.size() && (0 == c || c == d.ha) ? d : null
	},
	Ph: function(a)
	{
		var b = a.Qa,
			c = b.A,
			d = b.w;
		if (-1 != a.zq)
		{
			var b = b.b.ac,
				e = Y(this.I.m.Ba, a.zq),
				b = Z.K.ma.Za / 180 * b;
			a = e.Sl - e.Hb;
			e = e.Ul - e.Cb;
			c += a * Math.cos(b) - e * Math.sin(b);
			d += a * Math.sin(b) + e * Math.cos(b)
		}
		return new Z.K.Math.Ua((this.Ik + c) / this.ta, (this.Jk - d) / this.ta)
	},
	rJ: function(a)
	{
		var b = a.tf(this.I, 0),
			c = this.Yb(a.Sc(this.I, 1));
		a = this.Yb(a.Sc(this.I, 2));
		if (null != c && null != a)
		{
			var b = this.fc(b),
				d = new Z.i.O.Cj;
			d.rf = !0;
			var e = new Z.K.Math.Ua(c.s.L.position.x, c.s.L.position.y),
				f = new Z.K.Math.Ua(a.s.L.position.x, a.s.L.position.y);
			d.Kb(c.s, a.s, e, f);
			Nm(b, 1, this.ec.fc(d))
		}
		return !0
	},
	qJ: function(a)
	{
		var b = a.tf(this.I, 0),
			c = this.Yb(a.Sc(this.I, 1));
		a = this.Yb(a.Sc(this.I, 2));
		if (null != c && null != a)
		{
			var b = this.fc(b),
				d = new Z.i.O.Cj;
			d.rf = !0;
			d.ko = 0;
			d.$n = 0;
			var e = this.Ph(c),
				f = this.Ph(a);
			d.Kb(c.s, a.s, e, f);
			Nm(b, 1, this.ec.fc(d))
		}
	},
	tJ: function(a)
	{
		var b = a.tf(this.I, 0),
			c = ob(this.I, a.S[1]);
		a = a.wb(this.I, 2) / 100;
		for (var d = this.Ie(null, b, 1); null != d;)
		{
			var e = d.Jd;
			e.LD(c);
			e.KD(a);
			d = this.Ie(d, b, 1)
		}
	},
	Qr: function(a, b, c)
	{
		a = a.s.L.position;
		a.x += b / this.ta;
		a.y -= c / this.ta;
		return a
	},
	sJ: function(a)
	{
		var b = a.tf(this.I, 0),
			c = this.Yb(a.Sc(this.I, 1)),
			d = a.wb(this.I, 2),
			e = a.wb(this.I, 3),
			f = this.Yb(a.Sc(this.I, 4)),
			g = a.wb(this.I, 5);
		a = a.wb(this.I, 6);
		null != c && null != f && (b = this.fc(b), d = this.Qr(c, d, e), g = this.Qr(f, g, a),
			e = new Z.i.O.Cj, e.rf = !0, e.Kb(c.s, f.s, d, g), Nm(b, 1, this.ec.fc(e)))
	},
	EJ: function(a)
	{
		var b = a.tf(this.I, 0),
			c = this.Yb(a.Sc(this.I, 1));
		a = this.Yb(a.Sc(this.I, 2));
		if (null != c && null != a)
		{
			var b = this.fc(b),
				d = new Z.i.O.Wk;
			d.rf = !0;
			d.Kb(c.s, a.s, c.s.L.position);
			Nm(b, 2, this.ec.fc(d))
		}
	},
	DJ: function(a)
	{
		var b = a.tf(this.I, 0),
			c = this.Yb(a.Sc(this.I, 1));
		a = this.Yb(a.Sc(this.I, 2));
		if (null != c && null != a)
		{
			var b = this.fc(b),
				d = new Z.i.O.Wk;
			d.rf = !0;
			var e = this.Ph(c);
			d.Kb(c.s, a.s, e);
			Nm(b, 2, this.ec.fc(d))
		}
	},
	FJ: function(a)
	{
		var b = a.tf(this.I,
				0),
			c = this.Yb(a.Sc(this.I, 1)),
			d = a.wb(this.I, 2),
			e = a.wb(this.I, 3);
		a = this.Yb(a.Sc(this.I, 4));
		if (null != c && null != a)
		{
			var b = this.fc(b),
				f = new Z.i.O.Wk;
			f.rf = !0;
			d = this.Qr(c, d, e);
			f.Kb(c.s, a.s, d);
			Nm(b, 2, this.ec.fc(f))
		}
	},
	GJ: function(a)
	{
		var b = a.tf(this.I, 0),
			c = a.wb(this.I, 1) * Z.K.ma.Za / 180;
		a = a.wb(this.I, 2) * Z.K.ma.Za / 180;
		for (var d = this.Ie(null, b, 2); null != d;)
		{
			var e = d.Jd;
			c > a ? e.vn(!1) : (e.vn(!0), e.$r(c, a));
			d = this.Ie(d, b, 2)
		}
	},
	HJ: function(a)
	{
		var b = a.tf(this.I, 0),
			c = a.wb(this.I, 1) / 100 * 20;
		a = a.wb(this.I, 2) / 100 * 10;
		for (var d =
				this.Ie(null, b, 2); null != d;)
		{
			var e = d.Jd,
				f = !0;
			0 == c && 0 == a && (f = !1);
			e.Nr(f);
			e.OD(c);
			e.as(-a);
			d = this.Ie(d, b, 2)
		}
	},
	wJ: function(a)
	{
		var b = a.tf(this.I, 0),
			c = this.Yb(a.Sc(this.I, 1));
		a = this.Yb(a.Sc(this.I, 2));
		if (null != c && null != a)
		{
			var b = this.fc(b),
				d = new Z.i.O.Vk;
			d.rf = !0;
			var e = c.s.L.position,
				f = a.s.L.position,
				f = new Z.K.Math.Ua(f.x - e.x, f.y - e.y);
			d.Kb(c.s, a.s, e, f);
			Nm(b, 3, this.ec.fc(d))
		}
	},
	vJ: function(a)
	{
		var b = a.tf(this.I, 0),
			c = this.Yb(a.Sc(this.I, 1));
		a = this.Yb(a.Sc(this.I, 2));
		if (null != c && null != a)
		{
			var b = this.fc(b),
				d = new Z.i.O.Vk;
			d.rf = !0;
			var e = this.Ph(c),
				f = this.Ph(a),
				f = new Z.K.Math.Ua(f.x - e.x, f.y - e.y);
			d.Kb(c.s, a.s, e, f);
			Nm(b, 3, this.ec.fc(d))
		}
	},
	xJ: function(a)
	{
		var b = a.tf(this.I, 0),
			c = this.Yb(a.Sc(this.I, 1)),
			d = a.wb(this.I, 2),
			e = a.wb(this.I, 3),
			f = this.Yb(a.Sc(this.I, 4)),
			g = a.wb(this.I, 5),
			k = a.wb(this.I, 6);
		null != c && null != f && (b = this.fc(b), a = new Z.i.O.Vk, a.rf = !0, d = this.Qr(c, d, e), g = this.Qr(c, g, k), g = new Z.K.Math.Ua(g.x - d.x, g.y - d.y), a.Kb(c.s, f.s, d, g), Nm(b, 3, this.ec.fc(a)))
	},
	yJ: function(a)
	{
		var b = a.tf(this.I, 0),
			c = a.wb(this.I, 1) / this.ta;
		a = a.wb(this.I,
			2) / this.ta;
		for (var d = this.Ie(null, b, 3); null != d;)
		{
			var e = d.Jd,
				f = !0;
			c > a && (f = !1);
			e.vn(f);
			e.$r(c, a);
			d = this.Ie(d, b, 3)
		}
	},
	zJ: function(a)
	{
		var b = a.tf(this.I, 0),
			c = a.wb(this.I, 1) / 100 * 20;
		a = a.wb(this.I, 2) / 100 * 10;
		for (var d = this.Ie(null, b, 3); null != d;)
		{
			var e = d.Jd,
				f = !0;
			0 == c && 0 == a && (f = !1);
			e.Nr(f);
			e.ND(c);
			e.as(a);
			d = this.Ie(d, b, 3)
		}
	},
	BJ: function(a)
	{
		var b = a.tf(this.I, 0),
			c = this.Yb(a.Sc(this.I, 1)),
			d = this.Yb(a.Sc(this.I, 2));
		if (null != c && null != d)
		{
			var b = this.fc(b),
				e = new Z.i.O.Qn;
			e.rf = !0;
			var f = c.s.L.position,
				g = d.s.L.position,
				k = a.wb(this.I, 3) / this.ta,
				h = a.wb(this.I, 4) * Z.K.ma.Za / 180,
				p = a.wb(this.I, 5) / this.ta,
				l = a.wb(this.I, 6) * Z.K.ma.Za / 180;
			a = a.wb(this.I, 7) / 100;
			k = new Z.K.Math.Ua(f.x + k * Math.cos(h), f.y + k * Math.sin(h));
			p = new Z.K.Math.Ua(g.x + p * Math.cos(l), g.y + p * Math.sin(l));
			e.Kb(c.s, d.s, k, p, f, g, a);
			Nm(b, 4, this.ec.fc(e))
		}
	},
	AJ: function(a)
	{
		var b = a.tf(this.I, 0),
			c = this.Yb(a.Sc(this.I, 1)),
			d = this.Yb(a.Sc(this.I, 2));
		if (null != c && null != d)
		{
			var b = this.fc(b),
				e = new Z.i.O.Qn;
			e.rf = !0;
			var f = this.Ph(c),
				g = this.Ph(d),
				k = a.wb(this.I, 3) / this.ta,
				h = a.wb(this.I,
					4) * Z.K.ma.Za / 180,
				p = a.wb(this.I, 5) / this.ta,
				l = a.wb(this.I, 6) * Z.K.ma.Za / 180;
			a = a.wb(this.I, 7) / 100;
			k = new Z.K.Math.Ua(f.x + k * Math.cos(h), f.y + k * Math.sin(h));
			p = new Z.K.Math.Ua(g.x + p * Math.cos(l), g.y + p * Math.sin(l));
			e.Kb(c.s, d.s, k, p, f, g, a);
			Nm(b, 4, this.ec.fc(e))
		}
	},
	pJ: function(a)
	{
		var b = a.tf(this.I, 0);
		for (a = 0; a < this.Wi.size(); a++)
		{
			var c = this.Wi.get(a);
			E(c.fG, b) && (this.ec.Mr(c.Jd), Xa(this.Wi, a), a--)
		}
	},
	dL: function(a)
	{
		var b;
		for (b = 0; b < this.Wi.size(); b++)
		{
			var c = this.Wi.get(b);
			if (c.Jd.Pa == a || c.Jd.Da == a) Xa(this.Wi, b),
				b--
		}
	},
	TP: function(a)
	{
		this.ec.Mr(a)
	},
	xH: function(a)
	{
		if (this.Vb & 4 && 0 > this.ye.indexOf(a) && 2 == a.rb && null == this.Yb(a))
		{
			var b = new ji;
			oi(b, a, 3);
			b.s = this.oj(Z.i.Qc.Pd, a.A, a.w, 11.25 * this.CA(a, a.b.wa), 0, b, 0, 0);
			this.Zo(b.s, b, a.A, a.w, a.b.Jb, this.XG, this.YG, 0, a.b.bc, a.b.cc);
			this.ye.add(b);
			this.Oq.add(a.um << 16 | a.zc & 65535)
		}
	},
	JM: function(a, b, c, d)
	{
		if (this.Vb & 1)
		{
			var e = Y(this.I.m.Ba, c),
				f = new ji;
			oi(f, null, d == Tg.Kp ? 8 : 9);
			f.s = this.oj(Z.i.Qc.Pd, a + e.width / 2, b + e.height / 2, 0, 0, f, 0, 0);
			this.Zo(f.s, f, a + e.width / 2, b + e.height / 2, c,
				-1, this.$g, this.mh, 1, 1);
			return f.s
		}
		return null
	},
	XP: function(a)
	{
		this.ec.kD(a)
	},
	oJ: function(a)
	{
		var b = a.Sc(this.I, 0);
		if (0 > this.ye.indexOf(b) && null != b.J && null != b.Ca && null == this.Yb(b))
		{
			var c = new ji;
			oi(c, b, 3);
			var d = 11.25 * this.CA(b, b.b.wa),
				e = a.wb(this.I, 1) / 100,
				f = a.wb(this.I, 2) / 100;
			a = a.wb(this.I, 3);
			c.s = this.oj(Z.i.Qc.Pd, b.A, b.w, d, 0, c, 0, 0);
			switch (a)
			{
				case 0:
					this.sk(c.s, c, b.A, b.w, b.da, b.ca, e, f, 0);
					break;
				case 1:
					this.mC(c.s, c, b.A, b.w, b.da / 4, e, f, 0);
					break;
				default:
					this.Zo(c.s, c, b.A, b.w, b.b.Jb, e, f, 0, b.b.bc, b.b.cc)
			}
			this.ye.add(c);
			this.Oq.add(b.um << 16 | b.zc & 65535)
		}
	},
	PJ: function(a)
	{
		a = a.Sc(this.I, 0);
		a = this.ye.indexOf(a);
		if (0 <= a)
		{
			var b = this.ye.get(a);
			this.Wq(b.s);
			Xa(this.ye, a);
			Xa(this.Oq, a)
		}
	},
	action: function(a, b)
	{
		switch (a)
		{
			case 0:
				this.NJ(b);
				break;
			case 1:
				this.MJ(b);
				break;
			case 8:
				this.rJ(b);
				break;
			case 9:
				this.qJ(b);
				break;
			case 10:
				this.sJ(b);
				break;
			case 11:
				this.EJ(b);
				break;
			case 12:
				this.DJ(b);
				break;
			case 13:
				this.FJ(b);
				break;
			case 14:
				this.wJ(b);
				break;
			case 15:
				this.vJ(b);
				break;
			case 16:
				this.xJ(b);
				break;
			case 23:
				this.oJ(b);
				break;
			case 24:
				this.PJ(b);
				break;
			case 29:
				this.tJ(b);
				break;
			case 30:
				this.GJ(b);
				break;
			case 31:
				this.HJ(b);
				break;
			case 32:
				this.yJ(b);
				break;
			case 33:
				this.zJ(b);
				break;
			case 34:
				this.BJ(b);
				break;
			case 35:
				this.AJ(b);
				break;
			case 38:
				this.pJ(b);
				break;
			case 39:
				this.OJ(b);
				break;
			case 25:
				this.IJ(b);
				break;
			case 26:
				this.KJ(b);
				break;
			case 27:
				this.JJ(b);
				break;
			case 28:
				this.LJ(b);
				break;
			case 40:
				this.uJ(b);
				break;
			case 41:
				this.CJ(b)
		}
	},
	nO: function()
	{
		return this.Ah
	},
	mO: function()
	{
		return this.Bv
	},
	pO: function()
	{
		return this.yi
	},
	oO: function()
	{
		return this.ni
	},
	RJ: function()
	{
		var a =
			this.v.Kj(),
			a = this.Ie(null, a, 1);
		return null != a ? a.Jd.Fm : 0
	},
	QJ: function()
	{
		var a = this.v.Kj(),
			a = this.Ie(null, a, 1);
		return null != a ? 100 * a.Jd.xq : 0
	},
	SJ: function()
	{
		var a = this.v.Kj(),
			a = this.Ie(null, a, 2);
		if (null != a) return 180 * a.Jd.cv() / Z.K.ma.Za
	},
	YJ: function()
	{
		var a = this.v.Kj(),
			a = this.Ie(null, a, 2);
		return null != a ? 180 * a.Jd.dv() / Z.K.ma.Za : 0
	},
	VJ: function()
	{
		var a = this.v.Kj(),
			a = this.Ie(null, a, 2);
		return null != a ? 100 * a.Jd.fO() / 20 : 0
	},
	UJ: function()
	{
		var a = this.v.Kj(),
			a = this.Ie(null, a, 2);
		return null != a ? 100 * a.Jd.ak / 10 : 0
	},
	TJ: function()
	{
		var a = this.v.Kj(),
			a = this.Ie(null, a, 3);
		return null != a ? a.Jd.cv() * this.ta : 0
	},
	ZJ: function()
	{
		var a = this.v.Kj(),
			a = this.Ie(null, a, 3);
		return null != a ? a.Jd.dv() * this.ta : 0
	},
	XJ: function()
	{
		var a = this.v.Kj(),
			a = this.Ie(null, a, 3);
		return null != a ? 100 * a.Jd.Cq / 20 : 0
	},
	WJ: function()
	{
		var a = this.v.Kj(),
			a = this.Ie(null, a, 3);
		return null != a ? 100 * a.Jd.ak / 10 : 0
	},
	kw: function(a)
	{
		switch (a)
		{
			case 0:
				return this.Ah;
			case 1:
				return this.Bv;
			case 2:
				return this.yi;
			case 3:
				return this.ni;
			case 4:
				return this.RJ();
			case 5:
				return this.QJ();
			case 6:
				return this.SJ();
			case 7:
				return this.YJ();
			case 8:
				return this.VJ();
			case 9:
				return this.UJ();
			case 10:
				return this.TJ();
			case 11:
				return this.ZJ();
			case 12:
				return this.XJ();
			case 13:
				return this.WJ()
		}
		return 0
	}
});

function Om()
{
	this.Xz = !1
}
Om.prototype = {
	DD: function(a)
	{
		this.Xz = !0;
		var b = new Z.H.Rn;
		a.bJ(b);
		var c = a.Wc.s,
			d = a.ad.s,
			e = a.Wc.Ei().v.c,
			f = c.Ei(),
			g = d.Ei();
		if (null == f || null == g) a.bb();
		else if (4 == f.ha || 4 == g.ha) switch (b = 4 == f.ha ? g : f, f = b.Qa, b.ha)
		{
			case 0:
				ni(b);
				f = b.Qa;
				e.u.Ld = 1;
				kh(e.u, f, -786432);
				b.zf || a.bb();
				break;
			case 3:
				a.bb();
				break;
			case 2:
				c = b;
				e = c.parent;
				e.Fj = c;
				e.Gj = null;
				e.vb = !1;
				f.te(2, 0);
				e.vb || a.bb();
				break;
			case 1:
				c = b, e = c.parent, e.$k = c, e.vb = !1, f.te(2, 0), e.vb || a.bb()
		}
		else if (5 == f.ha || 5 == g.ha) switch (b = 5 == f.ha ? g : f, f = b.Qa, b.ha)
		{
			case 0:
				ni(b);
				f = b.Qa;
				e.u.Ld = 2;
				kh(e.u, f, -786432);
				b.zf || a.bb();
				break;
			case 3:
				a.bb();
				break;
			case 2:
				c = b;
				e = c.parent;
				e.Fj = c;
				e.Gj = null;
				e.vb = !1;
				f.te(3, 0);
				e.vb || a.bb();
				break;
			case 1:
				c = b, e = c.parent, e.$k = c, e.vb = !1, f.te(3, 0), e.vb || a.bb()
		}
		else if (6 == f.ha || 6 == g.ha) switch (b = 6 == f.ha ? g : f, f = b.Qa, b.ha)
		{
			case 0:
				ni(b);
				f = b.Qa;
				e.u.Ld = 4;
				kh(e.u, f, -786432);
				b.zf || a.bb();
				break;
			case 3:
				a.bb();
				break;
			case 2:
				c = b;
				e = c.parent;
				e.Fj = c;
				e.Gj = null;
				e.vb = !1;
				f.te(4, 0);
				e.vb || a.bb();
				break;
			case 1:
				c = b, e = c.parent, e.$k = c, e.vb = !1, f.te(4, 0), e.vb || a.bb()
		}
		else if (7 ==
			f.ha || 7 == g.ha) switch (b = 7 == f.ha ? g : f, f = b.Qa, b.ha)
		{
			case 0:
				ni(b);
				f = b.Qa;
				e.u.Ld = 8;
				kh(e.u, f, -786432);
				b.zf || a.bb();
				break;
			case 3:
				a.bb();
				break;
			case 2:
				c = b;
				e = c.parent;
				e.Fj = c;
				e.Gj = null;
				e.vb = !1;
				f.te(5, 0);
				e.vb || a.bb();
				break;
			case 1:
				c = b, e = c.parent, e.$k = c, e.vb = !1, f.te(5, 0), e.vb || a.bb()
		}
		else if (8 == f.ha || 8 == g.ha) switch (b = 8 == f.ha ? g : f, f = b.Qa, b.ha)
		{
			case 0:
				ni(b);
				f = b.Qa;
				kh(e.u, f, -851968);
				b.zf || a.bb();
				break;
			case 3:
				a.bb();
				break;
			case 2:
				c = b;
				e = c.parent;
				e.Fj = c;
				e.Gj = null;
				e.vb = !1;
				f.te(7, 0);
				e.vb || a.bb();
				break;
			case 1:
				c = b, e = c.parent,
					e.$k = c, e.vb = !1, f.te(7, 0), e.vb || a.bb()
		}
		else if (9 == f.ha || 9 == g.ha) switch (9 == f.ha ? (b = g, g = f, c = d.o) : (b = f, c = c.o), f = b.Qa, b.ha)
		{
			case 0:
				ni(b);
				kh(e.u, f, -851968);
				if (b.zf)
				{
					e = !1;
					if (null != b.la)
					{
						d = {};
						b.la.oC(g.s, d);
						var b = d.x + g.be.right,
							k = d.y + g.be.bottom;
						f.A >= d.x + g.be.left && f.A <= b && f.w <= k && (e = !0)
					}
					e || 0 <= c.y && a.bb()
				}
				else a.bb();
				break;
			case 3:
				a.bb();
				break;
			case 2:
				c = b;
				e = c.parent;
				e.Fj = c;
				e.Gj = null;
				e.vb = !1;
				c = c.s.o;
				f.te(7, 0);
				e.vb ? 0 <= c.y && a.bb() : a.bb();
				break;
			case 1:
				c = b, e = c.parent, e.$k = c, e.vb = !1, c = c.s.o, f.te(7, 0), e.vb ? 0 <= c.y &&
					a.bb() : a.bb()
		}
		else switch (obstacle = b = f, b.ha)
		{
			case 0:
				switch (g.ha)
				{
					case 0:
						b.TL && (f = b, b = g, g = f);
						ni(b);
						ni(g);
						f = b.Qa;
						c = g.Qa;
						e.u.su = c.zc;
						kh(e.u, f, -917504);
						b.zf || g.zf || a.bb();
						break;
					case 3:
						ni(b);
						f = b.Qa;
						c = g.Qa;
						e.u.su = c.zc;
						kh(e.u, f, -917504);
						b.zf || a.bb();
						break;
					case 2:
						c = g;
						e = c.parent;
						e.Fj = c;
						e.Gj = null;
						e.vb = !1;
						e.Js = b.Qa;
						ni(b);
						c.Qa.te(1, obstacle.Qa.jc);
						e.vb || a.bb();
						break;
					case 1:
						c = g, f = c.parent, f.$K = obstacle, f.$k = c, f.vb = !1, f.Js = b.Qa, ni(b), c.Qa.te(1, obstacle.Qa.jc), b.zf || f.vb || a.bb()
				}
				break;
			case 3:
				switch (g.ha)
				{
					case 0:
						ni(g);
						e.u.su = b.Qa.zc;
						kh(e.u, g.Qa, -917504);
						g.zf || a.bb();
						break;
					case 3:
						a.bb();
						break;
					case 2:
						c = g;
						e = c.parent;
						e.Fj = c;
						e.Gj = null;
						e.vb = !1;
						e.Js = b.Qa;
						ni(b);
						c.Qa.te(1, obstacle.Qa.jc);
						e.vb || a.bb();
						break;
					case 1:
						c = g, f = c.parent, f.$K = obstacle, f.$k = c, f.vb = !1, f.Js = b.Qa, ni(b), c.Qa.te(1, obstacle.Qa.jc), f.vb || a.bb()
				}
				break;
			case 2:
				switch (g.ha)
				{
					case 0:
						c = b;
						e = c.parent;
						e.Fj = c;
						e.Gj = null;
						e.vb = !1;
						e.Js = g.Qa;
						ni(g);
						b.Qa.te(1, g.Qa.jc);
						e.vb || a.bb();
						break;
					case 3:
						c = b;
						e = c.parent;
						e.Fj = c;
						e.Gj = null;
						e.vb = !1;
						ni(g);
						b.Qa.te(1, g.Qa.jc);
						e.vb || a.bb();
						break;
					case 2:
						e = b.parent;
						e.Fj = f;
						e.Gj = g;
						e.vb = !1;
						b.Qa.te(6, 0);
						e.vb || a.bb();
						break;
					case 1:
						a.bb()
				}
				break;
			case 1:
				switch (g.ha)
				{
					case 0:
						c = b;
						e = c.parent;
						e.$k = c;
						e.vb = !1;
						e.Js = g.Qa;
						ni(g);
						f.Qa.te(1, g.Qa.jc);
						g.zf || e.vb || a.bb();
						break;
					case 3:
						c = b;
						e = c.parent;
						e.$k = c;
						e.vb = !1;
						ni(g);
						f.Qa.te(1, g.Qa.jc);
						g.zf || e.vb || a.bb();
						break;
					case 2:
						a.bb();
						break;
					case 1:
						a.bb()
				}
		}
		this.Xz = !1
	}
};

function Pm(a, b)
{
	this.hM = a;
	this.fG = b;
	this.ha = 0;
	this.Jd = null
}
Pm.prototype = {
	Mr: function()
	{
		null != this.Jd && this.hM.ec.Mr(this.Jd)
	}
};

function Nm(a, b, c)
{
	a.ha = b;
	a.Jd = c
}
var Z = {};
(function(a, b)
{
	function c()
	{}!(Object.prototype.defineProperty instanceof Function) && Object.prototype.__defineGetter__ instanceof Function && Object.prototype.__defineSetter__ instanceof Function && (Object.defineProperty = function(a, b, c)
	{
		c.get instanceof Function && a.__defineGetter__(b, c.get);
		c.set instanceof Function && a.__defineSetter__(b, c.set)
	});
	a.tc = function(a, b)
	{
		c.prototype = b.prototype;
		a.prototype = new c;
		a.prototype.constructor = a
	};
	a.oL = function(a, b)
	{
		return function()
		{
			b.apply(a, arguments)
		}
	};
	a.kJ = function(a)
	{
		a ===
			b && (a = 0);
		for (var c = Array(a || 0), d = 0; d < a; ++d) c[d] = 0;
		return c
	};
	a.is = function(a, c)
	{
		return null === a ? !1 : c instanceof Function && a instanceof c || a.constructor.ez != b && a.constructor.ez[c] ? !0 : !1
	};
	a.li = function(a)
	{
		return Math.abs(parseInt(a))
	}
})(Z);
var Qm = Array,
	Rm = Z.kJ;
"undefined" === typeof Z && (Z = {});
"undefined" === typeof Z.H && (Z.H = {});
"undefined" === typeof Z.H.cb && (Z.H.cb = {});
"undefined" === typeof Z.K && (Z.K = {});
"undefined" === typeof Z.K.Math && (Z.K.Math = {});
"undefined" === typeof Z.i && (Z.i = {});
"undefined" === typeof Z.i.pa && (Z.i.pa = {});
"undefined" === typeof Z.i.Fc && (Z.i.Fc = {});
"undefined" === typeof Z.i.O && (Z.i.O = {});
(function()
{
	function a()
	{
		a.Cv.apply(this, arguments)
	}

	function b()
	{
		b.pz.apply(this, arguments)
	}

	function c()
	{
		c.es.apply(this, arguments);
		this.constructor === c && this.es.apply(this, arguments)
	}

	function d()
	{
		d.ef.apply(this, arguments)
	}

	function e()
	{
		e.Rp.apply(this, arguments);
		this.constructor === e && this.Rp.apply(this, arguments)
	}

	function f()
	{
		f.Fv.apply(this, arguments)
	}

	function g()
	{
		g.On.apply(this, arguments)
	}

	function k()
	{
		k.Gv.apply(this, arguments)
	}

	function h()
	{
		h.Hv.apply(this, arguments)
	}

	function p()
	{
		p.Iv.apply(this,
			arguments)
	}

	function l()
	{
		l.hs.apply(this, arguments);
		this.constructor === l && this.hs.apply(this, arguments)
	}

	function r()
	{
		r.Jv.apply(this, arguments)
	}

	function u()
	{
		u.Bz.apply(this, arguments)
	}

	function q()
	{
		q.Cz.apply(this, arguments)
	}

	function v()
	{
		v.Tk.apply(this, arguments);
		this.constructor === v && this.Tk.apply(this, arguments)
	}

	function n()
	{
		n.ss.apply(this, arguments);
		this.constructor === n && this.ss.apply(this, arguments)
	}

	function w()
	{
		w.Iz.apply(this, arguments)
	}

	function D()
	{
		D.xs.apply(this, arguments);
		this.constructor ===
			D && this.xs.apply(this, arguments)
	}

	function z()
	{
		z.Mz.apply(this, arguments)
	}

	function A()
	{
		A.Nz.apply(this, arguments)
	}

	function I()
	{
		I.Xp.apply(this, arguments)
	}

	function G()
	{
		G.ys.apply(this, arguments);
		this.constructor === G && this.ys.apply(this, arguments)
	}

	function R()
	{
		R.Lv.apply(this, arguments)
	}

	function O()
	{
		O.Oz.apply(this, arguments)
	}

	function K()
	{
		K.wg.apply(this, arguments)
	}

	function L()
	{
		L.Mv.apply(this, arguments)
	}

	function M()
	{
		M.Rn.apply(this, arguments);
		this.constructor === M && this.Rn.apply(this, arguments)
	}

	function N()
	{
		N.yy.apply(this,
			arguments)
	}

	function t()
	{
		t.Cy.apply(this, arguments)
	}

	function C()
	{
		C.lm.apply(this, arguments);
		this.constructor === C && this.lm.apply(this, arguments)
	}

	function B()
	{
		B.js.apply(this, arguments);
		this.constructor === B && this.js.apply(this, arguments)
	}

	function J()
	{
		J.ks.apply(this, arguments);
		this.constructor === J && this.ks.apply(this, arguments)
	}

	function H()
	{
		H.Kv.apply(this, arguments)
	}

	function U()
	{
		U.vh.apply(this, arguments);
		this.constructor === U && this.vh.apply(this, arguments)
	}

	function Q()
	{
		Q.Hc.apply(this, arguments);
		this.constructor ===
			Q && this.Hc.apply(this, arguments)
	}

	function ua()
	{
		ua.Pp.apply(this, arguments);
		this.constructor === ua && this.Pp.apply(this, arguments)
	}

	function ha()
	{
		ha.ma.apply(this, arguments)
	}

	function va()
	{
		va.Uk.apply(this, arguments);
		this.constructor === va && this.Uk.apply(this, arguments)
	}

	function P()
	{
		P.Up.apply(this, arguments);
		this.constructor === P && this.Up.apply(this, arguments)
	}

	function ia()
	{
		ia.uh.apply(this, arguments)
	}

	function ik()
	{
		ik.zs.apply(this, arguments)
	}

	function ef()
	{
		ef.nm.apply(this, arguments);
		this.constructor ===
			ef && this.nm.apply(this, arguments)
	}

	function ff()
	{
		ff.Ua.apply(this, arguments);
		this.constructor === ff && this.Ua.apply(this, arguments)
	}

	function gf()
	{
		gf.Yp.apply(this, arguments);
		this.constructor === gf && this.Yp.apply(this, arguments)
	}

	function hf()
	{
		hf.Qc.apply(this, arguments);
		this.constructor === hf && this.Qc.apply(this, arguments)
	}

	function jf()
	{
		jf.Nn.apply(this, arguments);
		this.constructor === jf && this.Nn.apply(this, arguments)
	}

	function jk()
	{
		jk.Dv.apply(this, arguments)
	}

	function kk()
	{
		kk.wz.apply(this, arguments)
	}

	function lk()
	{
		lk.Ev.apply(this,
			arguments)
	}

	function kf()
	{
		kf.Sp.apply(this, arguments);
		this.constructor === kf && this.Sp.apply(this, arguments)
	}

	function lf()
	{
		lf.Vg.apply(this, arguments);
		this.constructor === lf && this.Vg.apply(this, arguments)
	}

	function mk()
	{
		mk.Az.apply(this, arguments)
	}

	function nk()
	{
		nk.Ez.apply(this, arguments)
	}

	function mf()
	{
		mf.ls.apply(this, arguments);
		this.constructor === mf && this.ls.apply(this, arguments)
	}

	function nf()
	{
		nf.Dj.apply(this, arguments);
		this.constructor === nf && this.Dj.apply(this, arguments)
	}

	function of ()
	{
		of .Tp.apply(this,
			arguments);
		this.constructor === of && this.Tp.apply(this, arguments)
	}

	function ok()
	{
		ok.Nv.apply(this, arguments)
	}

	function pf()
	{
		pf.xg.apply(this, arguments);
		this.constructor === pf && this.xg.apply(this, arguments)
	}

	function pk()
	{
		pk.rz.apply(this, arguments)
	}

	function tf()
	{
		tf.Ab.apply(this, arguments);
		this.constructor === tf && this.Ab.apply(this, arguments)
	}

	function uf()
	{
		uf.fs.apply(this, arguments);
		this.constructor === uf && this.fs.apply(this, arguments)
	}

	function Rk()
	{
		Rk.uz.apply(this, arguments)
	}

	function Sk()
	{
		Sk.vz.apply(this,
			arguments)
	}

	function vf()
	{
		vf.Qp.apply(this, arguments);
		this.constructor === vf && this.Qp.apply(this, arguments)
	}

	function Tk()
	{
		Tk.xz.apply(this, arguments)
	}

	function Uk()
	{
		Uk.yz.apply(this, arguments)
	}

	function wf()
	{
		wf.mm.apply(this, arguments);
		this.constructor === wf && this.mm.apply(this, arguments)
	}

	function Vk()
	{
		Vk.Dz.apply(this, arguments)
	}

	function xf()
	{
		xf.vs.apply(this, arguments);
		this.constructor === xf && this.vs.apply(this, arguments)
	}

	function Wk()
	{
		Wk.Jz.apply(this, arguments)
	}

	function Xk()
	{
		Xk.Kz.apply(this, arguments)
	}

	function Yk()
	{
		Yk.Lz.apply(this, arguments)
	}

	function yf()
	{
		yf.Pn.apply(this, arguments);
		this.constructor === yf && this.Pn.apply(this, arguments)
	}

	function Zk()
	{
		Zk.qz.apply(this, arguments)
	}

	function $k()
	{
		$k.sz.apply(this, arguments)
	}

	function al()
	{
		al.tz.apply(this, arguments)
	}

	function bl()
	{
		bl.Od.apply(this, arguments)
	}

	function cl()
	{
		cl.zz.apply(this, arguments)
	}

	function el()
	{
		el.Fz.apply(this, arguments)
	}

	function fl()
	{
		fl.Pz.apply(this, arguments)
	}

	function zf()
	{
		zf.gs.apply(this, arguments);
		this.constructor === zf && this.gs.apply(this,
			arguments)
	}

	function Af()
	{
		Af.Cj.apply(this, arguments);
		this.constructor === Af && this.Cj.apply(this, arguments)
	}

	function Bf()
	{
		Bf.ms.apply(this, arguments);
		this.constructor === Bf && this.ms.apply(this, arguments)
	}

	function Cf()
	{
		Cf.ns.apply(this, arguments);
		this.constructor === Cf && this.ns.apply(this, arguments)
	}

	function Df()
	{
		Df.os.apply(this, arguments);
		this.constructor === Df && this.os.apply(this, arguments)
	}

	function Ef()
	{
		Ef.ps.apply(this, arguments);
		this.constructor === Ef && this.ps.apply(this, arguments)
	}

	function gl()
	{
		gl.Gz.apply(this,
			arguments)
	}

	function Ff()
	{
		Ff.na.apply(this, arguments);
		this.constructor === Ff && this.na.apply(this, arguments)
	}

	function Gf()
	{
		Gf.Ka.apply(this, arguments);
		this.constructor === Gf && this.Ka.apply(this, arguments)
	}

	function hl()
	{
		hl.Hz.apply(this, arguments)
	}

	function Hf()
	{
		Hf.qs.apply(this, arguments);
		this.constructor === Hf && this.qs.apply(this, arguments)
	}

	function If()
	{
		If.rs.apply(this, arguments);
		this.constructor === If && this.rs.apply(this, arguments)
	}

	function Jf()
	{
		Jf.ts.apply(this, arguments);
		this.constructor === Jf && this.ts.apply(this,
			arguments)
	}

	function Kf()
	{
		Kf.us.apply(this, arguments);
		this.constructor === Kf && this.us.apply(this, arguments)
	}

	function Lf()
	{
		Lf.ws.apply(this, arguments);
		this.constructor === Lf && this.ws.apply(this, arguments)
	}

	function Mf()
	{
		Mf.Vk.apply(this, arguments);
		this.constructor === Mf && this.Vk.apply(this, arguments)
	}

	function Nf()
	{
		Nf.Vp.apply(this, arguments);
		this.constructor === Nf && this.Vp.apply(this, arguments)
	}

	function Of()
	{
		Of.Qn.apply(this, arguments);
		this.constructor === Of && this.Qn.apply(this, arguments)
	}

	function Pf()
	{
		Pf.Wp.apply(this,
			arguments);
		this.constructor === Pf && this.Wp.apply(this, arguments)
	}

	function Qf()
	{
		Qf.Wk.apply(this, arguments);
		this.constructor === Qf && this.Wk.apply(this, arguments)
	}

	function Rf()
	{
		Rf.As.apply(this, arguments);
		this.constructor === Rf && this.As.apply(this, arguments)
	}

	function Sf()
	{
		Sf.Bs.apply(this, arguments);
		this.constructor === Sf && this.Bs.apply(this, arguments)
	}
	Z.H.cJ = "Box2D.Collision.IBroadPhase";
	Z.H.Cv = a;
	Z.H.pz = b;
	Z.H.es = c;
	Z.H.ef = d;
	Z.H.Rp = e;
	Z.H.Fv = f;
	Z.H.On = g;
	Z.H.Gv = k;
	Z.H.Hv = h;
	Z.H.Iv = p;
	Z.H.hs = l;
	Z.H.Jv = r;
	Z.H.Bz =
		u;
	Z.H.Cz = q;
	Z.H.Tk = v;
	Z.H.ss = n;
	Z.H.Iz = w;
	Z.H.xs = D;
	Z.H.Mz = z;
	Z.H.Nz = A;
	Z.H.Xp = I;
	Z.H.ys = G;
	Z.H.Lv = R;
	Z.H.Oz = O;
	Z.H.wg = K;
	Z.H.Mv = L;
	Z.H.Rn = M;
	Z.H.yy = N;
	Z.H.Cy = t;
	Z.H.cb.lm = C;
	Z.H.cb.js = B;
	Z.H.cb.ks = J;
	Z.H.cb.Kv = H;
	Z.H.cb.vh = U;
	Z.H.cb.Hc = Q;
	Z.K.CO = "Box2D.Common.b2internal";
	Z.K.Pp = ua;
	Z.K.ma = ha;
	Z.K.Math.Uk = va;
	Z.K.Math.Up = P;
	Z.K.Math.uh = ia;
	Z.K.Math.zs = ik;
	Z.K.Math.nm = ef;
	Z.K.Math.Ua = ff;
	Z.K.Math.Yp = gf;
	Z.i.Qc = hf;
	Z.i.Nn = jf;
	Z.i.Dv = jk;
	Z.i.wz = kk;
	Z.i.Ev = lk;
	Z.i.Sp = kf;
	Z.i.Vg = lf;
	Z.i.Az = mk;
	Z.i.Ez = nk;
	Z.i.ls = mf;
	Z.i.Dj = nf;
	Z.i.Tp = of ;
	Z.i.Nv =
		ok;
	Z.i.xg = pf;
	Z.i.pa.rz = pk;
	Z.i.pa.Ab = tf;
	Z.i.pa.fs = uf;
	Z.i.pa.uz = Rk;
	Z.i.pa.vz = Sk;
	Z.i.pa.Qp = vf;
	Z.i.pa.xz = Tk;
	Z.i.pa.yz = Uk;
	Z.i.pa.mm = wf;
	Z.i.pa.Dz = Vk;
	Z.i.pa.vs = xf;
	Z.i.pa.Jz = Wk;
	Z.i.pa.Kz = Xk;
	Z.i.pa.Lz = Yk;
	Z.i.pa.Pn = yf;
	Z.i.Fc.qz = Zk;
	Z.i.Fc.sz = $k;
	Z.i.Fc.tz = al;
	Z.i.Fc.Od = bl;
	Z.i.Fc.zz = cl;
	Z.i.Fc.Fz = el;
	Z.i.Fc.Pz = fl;
	Z.i.O.gs = zf;
	Z.i.O.Cj = Af;
	Z.i.O.ms = Bf;
	Z.i.O.ns = Cf;
	Z.i.O.os = Df;
	Z.i.O.ps = Ef;
	Z.i.O.Gz = gl;
	Z.i.O.na = Ff;
	Z.i.O.Ka = Gf;
	Z.i.O.Hz = hl;
	Z.i.O.qs = Hf;
	Z.i.O.rs = If;
	Z.i.O.ts = Jf;
	Z.i.O.us = Kf;
	Z.i.O.ws = Lf;
	Z.i.O.Vk = Mf;
	Z.i.O.Vp = Nf;
	Z.i.O.Qn = Of;
	Z.i.O.Wp = Pf;
	Z.i.O.Wk = Qf;
	Z.i.O.As = Rf;
	Z.i.O.Bs = Sf
})();
Z.Dd = [];
(function()
{
	var a = Z.H.cb.lm,
		b = Z.H.cb.vh,
		c = Z.H.cb.Hc,
		d = Z.K.ma,
		e = Z.K.Math.uh,
		f = Z.K.Math.zs,
		g = Z.K.Math.nm,
		k = Z.K.Math.Ua,
		h = Z.H.Cv,
		p = Z.H.pz,
		l = Z.H.es,
		r = Z.H.ef,
		u = Z.H.Rp,
		q = Z.H.Fv,
		v = Z.H.On,
		n = Z.H.Gv,
		w = Z.H.Hv,
		D = Z.H.Iv,
		z = Z.H.hs,
		A = Z.H.Jv,
		I = Z.H.Bz,
		G = Z.H.Cz,
		R = Z.H.Tk,
		O = Z.H.ss,
		K = Z.H.Iz,
		L = Z.H.xs,
		M = Z.H.Mz,
		N = Z.H.Nz,
		t = Z.H.Xp,
		C = Z.H.ys,
		B = Z.H.Lv,
		J = Z.H.Oz,
		H = Z.H.wg,
		U = Z.H.Mv,
		Q = Z.H.Rn,
		ua = Z.H.yy,
		ha = Z.H.Cy,
		va = Z.H.cJ;
	h.Cv = function()
	{
		this.lowerBound = new k;
		this.upperBound = new k
	};
	h.prototype.Cp = function()
	{
		var a = this.upperBound.y -
			this.lowerBound.y;
		return a = (a = 0 <= this.upperBound.x - this.lowerBound.x && 0 <= a) && this.lowerBound.Cp() && this.upperBound.Cp()
	};
	h.prototype.WI = function()
	{
		return new k((this.lowerBound.x + this.upperBound.x) / 2, (this.lowerBound.y + this.upperBound.y) / 2)
	};
	h.prototype.zy = function(a)
	{
		var b;
		return b = (b = (b = (b = this.lowerBound.x <= a.lowerBound.x) && this.lowerBound.y <= a.lowerBound.y) && a.upperBound.x <= this.upperBound.x) && a.upperBound.y <= this.upperBound.y
	};
	h.prototype.gm = function(a)
	{
		var b = a.lowerBound.y - this.upperBound.y,
			c = this.lowerBound.y - a.upperBound.y;
		return 0 < a.lowerBound.x - this.upperBound.x || 0 < b || 0 < this.lowerBound.x - a.upperBound.x || 0 < c ? !1 : !0
	};
	h.xp = function(a, b)
	{
		var c = new h;
		c.xp(a, b);
		return c
	};
	h.prototype.xp = function(a, b)
	{
		this.lowerBound.x = Math.min(a.lowerBound.x, b.lowerBound.x);
		this.lowerBound.y = Math.min(a.lowerBound.y, b.lowerBound.y);
		this.upperBound.x = Math.max(a.upperBound.x, b.upperBound.x);
		this.upperBound.y = Math.max(a.upperBound.y, b.upperBound.y)
	};
	p.pz = function() {};
	p.prototype.iK = function(a)
	{
		var b = this.value,
			c = this.hC,
			d = this.SC;
		this.value = a.value;
		this.hC = a.hC;
		this.SC = a.SC;
		a.value = b;
		a.hC = c;
		a.SC = d
	};
	l.es = function() {};
	l.prototype.es = function()
	{
		this.SF = new Rm;
		this.SF[0] = 0;
		this.SF[1] = 0;
		this.vI = new Rm;
		this.vI[0] = 0;
		this.vI[1] = 0
	};
	r.ef = function() {};
	r.iD = function(a, b, c, d)
	{
		void 0 === d && (d = 0);
		var e, f = 0;
		e = b[0];
		var g = e.Oh;
		e = b[1];
		var k = e.Oh,
			t = c.x * g.x + c.y * g.y - d;
		e = c.x * k.x + c.y * k.y - d;
		0 >= t && a[f++].Set(b[0]);
		0 >= e && a[f++].Set(b[1]);
		0 > t * e && (c = t / (t - e), e = a[f], e = e.Oh, e.x = g.x + c * (k.x - g.x), e.y = g.y + c * (k.y - g.y), e = a[f], e.id = (0 < t ? b[0] :
			b[1]).id, ++f);
		return f
	};
	r.Zu = function(a, b, c, d, e)
	{
		void 0 === c && (c = 0);
		var f = a.ka,
			g = a.kd;
		a = parseInt(d.Lc);
		d = d.ka;
		var k, t;
		k = b.M;
		t = g[c];
		var g = k.g.x * t.x + k.h.x * t.y,
			h = k.g.y * t.x + k.h.y * t.y;
		k = e.M;
		var C = k.g.x * g + k.g.y * h;
		k = k.h.x * g + k.h.y * h;
		for (var B = 0, J = Number.MAX_VALUE, P = 0; P < a; ++P) t = d[P], t = t.x * C + t.y * k, t < J && (J = t, B = P);
		t = f[c];
		k = b.M;
		c = b.position.x + (k.g.x * t.x + k.h.x * t.y);
		b = b.position.y + (k.g.y * t.x + k.h.y * t.y);
		t = d[B];
		k = e.M;
		return (e.position.x + (k.g.x * t.x + k.h.x * t.y) - c) * g + (e.position.y + (k.g.y * t.x + k.h.y * t.y) - b) * h
	};
	r.lD = function(a,
		b, c, d, e)
	{
		var f = parseInt(b.Lc),
			k = b.kd,
			g, t;
		t = e.M;
		g = d.kl;
		var h = e.position.x + (t.g.x * g.x + t.h.x * g.y),
			C = e.position.y + (t.g.y * g.x + t.h.y * g.y);
		t = c.M;
		g = b.kl;
		h -= c.position.x + (t.g.x * g.x + t.h.x * g.y);
		C -= c.position.y + (t.g.y * g.x + t.h.y * g.y);
		t = h * c.M.g.x + C * c.M.g.y;
		for (var C = h * c.M.h.x + C * c.M.h.y, h = 0, B = -Number.MAX_VALUE, J = 0; J < f; ++J) g = k[J], g = g.x * t + g.y * C, g > B && (B = g, h = J);
		k = r.Zu(b, c, h, d, e);
		B = parseInt(0 <= h - 1 ? h - 1 : f - 1);
		t = r.Zu(b, c, B, d, e);
		J = parseInt(h + 1 < f ? h + 1 : 0);
		C = r.Zu(b, c, J, d, e);
		if (t > k && t > C) g = -1;
		else if (C > k) g = 1, B = J, t = C;
		else return a[0] =
			h, k;
		for (;;)
			if (h = -1 == g ? 0 <= B - 1 ? B - 1 : f - 1 : B + 1 < f ? B + 1 : 0, k = r.Zu(b, c, h, d, e), k > t) B = h, t = k;
			else break;
		a[0] = B;
		return t
	};
	r.VI = function(a, b, c, d, e, f)
	{
		void 0 === d && (d = 0);
		var g = b.kd,
			t = parseInt(e.Lc);
		b = e.ka;
		e = e.kd;
		var k;
		k = c.M;
		c = g[d];
		var g = k.g.x * c.x + k.h.x * c.y,
			h = k.g.y * c.x + k.h.y * c.y;
		k = f.M;
		c = k.g.x * g + k.g.y * h;
		h = k.h.x * g + k.h.y * h;
		g = c;
		k = 0;
		for (var C = Number.MAX_VALUE, B = 0; B < t; ++B) c = e[B], c = g * c.x + h * c.y, c < C && (C = c, k = B);
		e = parseInt(k);
		g = parseInt(e + 1 < t ? e + 1 : 0);
		t = a[0];
		c = b[e];
		k = f.M;
		t.Oh.x = f.position.x + (k.g.x * c.x + k.h.x * c.y);
		t.Oh.y = f.position.y +
			(k.g.y * c.x + k.h.y * c.y);
		t.id.Uh.bN = d;
		t.id.Uh.xL = e;
		t.id.Uh.yL = 0;
		t = a[1];
		c = b[g];
		k = f.M;
		t.Oh.x = f.position.x + (k.g.x * c.x + k.h.x * c.y);
		t.Oh.y = f.position.y + (k.g.y * c.x + k.h.y * c.y);
		t.id.Uh.bN = d;
		t.id.Uh.xL = g;
		t.id.Uh.yL = 1
	};
	r.Zy = function()
	{
		var a = new Qm(2);
		a[0] = new ua;
		a[1] = new ua;
		return a
	};
	r.OI = function(a, b, c, e, f)
	{
		a.Vd = 0;
		var k = b.sb + e.sb,
			t;
		r.LC[0] = 0;
		var g = r.lD(r.LC, b, c, e, f);
		t = r.LC[0];
		if (!(g > k))
		{
			var h;
			r.MC[0] = 0;
			var C = r.lD(r.MC, e, f, b, c);
			h = r.MC[0];
			if (!(C > k))
			{
				C > .98 * g + .001 ? (g = e, e = b, b = f, a.ha = R.fo, t = 1) : (g = b, b = c, c = f, h = t, a.ha =
					R.Qi, t = 0);
				f = r.hN;
				r.VI(f, g, b, h, e, c);
				C = g.ka;
				e = C[h];
				var B;
				B = h + 1 < parseInt(g.Lc) ? C[parseInt(h + 1)] : C[0];
				g = r.jN;
				g.Set(B.x - e.x, B.y - e.y);
				g.vg();
				C = r.iN;
				C.x = g.y;
				C.y = -g.x;
				var J = r.lN;
				J.Set(.5 * (e.x + B.x), .5 * (e.y + B.y));
				var P = r.rN;
				h = b.M;
				P.x = h.g.x * g.x + h.h.x * g.y;
				P.y = h.g.y * g.x + h.h.y * g.y;
				var H = r.sN;
				H.x = -P.x;
				H.y = -P.y;
				g = r.kN;
				g.x = P.y;
				g.y = -P.x;
				var l = r.vN,
					Q = r.wN;
				l.x = b.position.x + (h.g.x * e.x + h.h.x * e.y);
				l.y = b.position.y + (h.g.y * e.x + h.h.y * e.y);
				Q.x = b.position.x + (h.g.x * B.x + h.h.x * B.y);
				Q.y = b.position.y + (h.g.y * B.x + h.h.y * B.y);
				b = g.x *
					l.x + g.y * l.y;
				h = P.x * Q.x + P.y * Q.y + k;
				B = r.fN;
				e = r.gN;
				f = r.iD(B, f, H, -P.x * l.x - P.y * l.y + k);
				if (!(2 > f || (f = r.iD(e, B, P, h), 2 > f)))
				{
					a.jf.T(C);
					a.zb.T(J);
					for (J = C = 0; J < d.Xg; ++J) f = e[J], g.x * f.Oh.x + g.y * f.Oh.y - b <= k && (P = a.Fb[C], h = c.M, H = f.Oh.x - c.position.x, l = f.Oh.y - c.position.y, P.zb.x = H * h.g.x + l * h.g.y, P.zb.y = H * h.h.x + l * h.h.y, P.nl.Set(f.id), P.nl.Uh.kP = t, ++C);
					a.Vd = C
				}
			}
		}
	};
	r.MI = function(a, b, c, d, e)
	{
		a.Vd = 0;
		var f, g;
		f = c.M;
		g = b.Te;
		var k = c.position.x + (f.g.x * g.x + f.h.x * g.y);
		c = c.position.y + (f.g.y * g.x + f.h.y * g.y);
		f = e.M;
		g = d.Te;
		k = e.position.x + (f.g.x *
			g.x + f.h.x * g.y) - k;
		e = e.position.y + (f.g.y * g.x + f.h.y * g.y) - c;
		f = b.sb + d.sb;
		k * k + e * e > f * f || (a.ha = R.oA, a.zb.T(b.Te), a.jf.eb(), a.Vd = 1, a.Fb[0].zb.T(d.Te), a.Fb[0].nl.key = 0)
	};
	r.NI = function(a, b, c, d, e)
	{
		a.Vd = 0;
		var f, g, k, t;
		t = e.M;
		k = d.Te;
		var h = e.position.y + (t.g.y * k.x + t.h.y * k.y);
		f = e.position.x + (t.g.x * k.x + t.h.x * k.y) - c.position.x;
		g = h - c.position.y;
		t = c.M;
		c = f * t.g.x + g * t.g.y;
		t = f * t.h.x + g * t.h.y;
		var C = 0;
		e = -Number.MAX_VALUE;
		var h = b.sb + d.sb,
			B = parseInt(b.Lc),
			J = b.ka;
		b = b.kd;
		for (var H = 0; H < B; ++H)
		{
			k = J[H];
			f = c - k.x;
			g = t - k.y;
			k = b[H];
			k = k.x * f +
				k.y * g;
			if (k > h) return;
			k > e && (e = k, C = H)
		}
		k = parseInt(C);
		f = J[k];
		B = J[parseInt(k + 1 < B ? k + 1 : 0)];
		if (e < Number.MIN_VALUE) a.Vd = 1, a.ha = R.Qi, a.jf.T(b[C]), a.zb.x = .5 * (f.x + B.x), a.zb.y = .5 * (f.y + B.y);
		else if (e = (c - B.x) * (f.x - B.x) + (t - B.y) * (f.y - B.y), 0 >= (c - f.x) * (B.x - f.x) + (t - f.y) * (B.y - f.y))
		{
			if ((c - f.x) * (c - f.x) + (t - f.y) * (t - f.y) > h * h) return;
			a.Vd = 1;
			a.ha = R.Qi;
			a.jf.x = c - f.x;
			a.jf.y = t - f.y;
			a.jf.vg();
			a.zb.T(f)
		}
		else if (0 >= e)
		{
			if ((c - B.x) * (c - B.x) + (t - B.y) * (t - B.y) > h * h) return;
			a.Vd = 1;
			a.ha = R.Qi;
			a.jf.x = c - B.x;
			a.jf.y = t - B.y;
			a.jf.vg();
			a.zb.T(B)
		}
		else
		{
			C = .5 *
				(f.x + B.x);
			f = .5 * (f.y + B.y);
			e = (c - C) * b[k].x + (t - f) * b[k].y;
			if (e > h) return;
			a.Vd = 1;
			a.ha = R.Qi;
			a.jf.x = b[k].x;
			a.jf.y = b[k].y;
			a.jf.vg();
			a.zb.Set(C, f)
		}
		a.Fb[0].zb.T(d.Te);
		a.Fb[0].nl.key = 0
	};
	r.gm = function(a, b)
	{
		var c = b.lowerBound,
			d = a.upperBound,
			e = c.x - d.x,
			f = c.y - d.y,
			c = a.lowerBound,
			d = b.upperBound,
			k = c.y - d.y;
		return 0 < e || 0 < f || 0 < c.x - d.x || 0 < k ? !1 : !0
	};
	Z.Dd.push(function()
	{
		Z.H.ef.hN = r.Zy();
		Z.H.ef.fN = r.Zy();
		Z.H.ef.gN = r.Zy();
		Z.H.ef.LC = new Rm(1);
		Z.H.ef.MC = new Rm(1);
		Z.H.ef.jN = new k;
		Z.H.ef.iN = new k;
		Z.H.ef.lN = new k;
		Z.H.ef.kN = new k;
		Z.H.ef.rN = new k;
		Z.H.ef.sN = new k;
		Z.H.ef.vN = new k;
		Z.H.ef.wN = new k;
		Z.H.ef.wO = new k;
		Z.H.ef.AO = 255
	});
	u.Rp = function()
	{
		this.Uh = new ha
	};
	u.prototype.Rp = function()
	{
		this.Uh.hm = this
	};
	u.prototype.Set = function(a)
	{
		this.key = a.Tg
	};
	u.prototype.nf = function()
	{
		var a = new u;
		a.key = this.key;
		return a
	};
	Object.defineProperty(u.prototype, "key",
	{
		enumerable: !1,
		configurable: !0,
		get: function()
		{
			return this.Tg
		}
	});
	Object.defineProperty(u.prototype, "key",
	{
		enumerable: !1,
		configurable: !0,
		set: function(a)
		{
			void 0 === a && (a = 0);
			this.Tg = a;
			this.Uh.iz =
				this.Tg & 255;
			this.Uh.gz = (this.Tg & 65280) >> 8 & 255;
			this.Uh.hz = (this.Tg & 16711680) >> 16 & 255;
			this.Uh.fz = (this.Tg & 4278190080) >> 24 & 255
		}
	});
	q.Fv = function()
	{
		this.position = new k;
		this.AI = new k;
		this.Hh = new k;
		this.id = new u
	};
	v.On = function() {};
	v.By = function(a, b, c)
	{
		++v.yO;
		var d = c.nk,
			f = c.pk,
			g = c.rI,
			t = c.sI,
			h = v.pN;
		h.$J(b, d, g, f, t);
		var B = h.ka,
			C = v.nN,
			J = v.oN,
			H;
		h.oD();
		for (var l, P = 0; 20 > P;)
		{
			H = h.Jc;
			for (l = 0; l < H; l++) C[l] = B[l].Qe, J[l] = B[l].Re;
			switch (h.Jc)
			{
				case 2:
					h.gK();
					break;
				case 3:
					h.hK()
			}
			if (3 == h.Jc) break;
			h.oD();
			l = h.$I();
			if (l.Ly() <
				Number.MIN_VALUE * Number.MIN_VALUE) break;
			var Q = B[h.Jc];
			Q.Qe = d.Hy(e.bm(g.M, l.Zl()));
			Q.Ff = e.qe(g, d.qf(Q.Qe));
			Q.Re = f.Hy(e.bm(t.M, l));
			Q.zi = e.qe(t, f.qf(Q.Re));
			Q.Zc = e.qd(Q.zi, Q.Ff);
			++P;
			++v.zO;
			var U = !1;
			for (l = 0; l < H; l++)
				if (Q.Qe == C[l] && Q.Re == J[l])
				{
					U = !0;
					break
				} if (U) break;
			++h.Jc
		}
		v.BK = e.If(v.BK, P);
		h.aJ(a.lj, a.mj);
		a.bo = e.qd(a.lj, a.mj).Kk();
		a.DP = P;
		h.nK(b);
		c.wI && (b = d.sb, f = f.sb, a.bo > b + f && a.bo > Number.MIN_VALUE ? (a.bo -= b + f, c = e.qd(a.mj, a.lj), c.vg(), a.lj.x += b * c.x, a.lj.y += b * c.y, a.mj.x -= f * c.x, a.mj.y -= f * c.y) : (f = new k, f.x = .5 *
			(a.lj.x + a.mj.x), f.y = .5 * (a.lj.y + a.mj.y), a.lj.x = a.mj.x = f.x, a.lj.y = a.mj.y = f.y, a.bo = 0))
	};
	Z.Dd.push(function()
	{
		Z.H.On.pN = new C;
		Z.H.On.nN = new Rm(3);
		Z.H.On.oN = new Rm(3)
	});
	n.Gv = function() {};
	w.Hv = function()
	{
		this.lj = new k;
		this.mj = new k
	};
	D.Iv = function() {};
	D.prototype.Set = function(d)
	{
		switch (d.Uc())
		{
			case c.hq:
				d = d instanceof a ? d : null;
				this.ka = new Qm(1, !0);
				this.ka[0] = d.Te;
				this.Jc = 1;
				this.sb = d.sb;
				break;
			case c.iq:
				d = d instanceof b ? d : null, this.ka = d.ka, this.Jc = d.Lc, this.sb = d.sb
		}
	};
	D.prototype.Hy = function(a)
	{
		for (var b = 0,
				c = this.ka[0].x * a.x + this.ka[0].y * a.y, d = 1; d < this.Jc; ++d)
		{
			var e = this.ka[d].x * a.x + this.ka[d].y * a.y;
			e > c && (b = d, c = e)
		}
		return b
	};
	D.prototype.Sr = function(a)
	{
		for (var b = 0, c = this.ka[0].x * a.x + this.ka[0].y * a.y, d = 1; d < this.Jc; ++d)
		{
			var e = this.ka[d].x * a.x + this.ka[d].y * a.y;
			e > c && (b = d, c = e)
		}
		return this.ka[b]
	};
	D.prototype.qf = function(a)
	{
		void 0 === a && (a = 0);
		return this.ka[a]
	};
	z.hs = function() {};
	z.prototype.hs = function()
	{
		this.yt = this.dk = null
	};
	z.prototype.Lr = function(a, b)
	{
		var c = this.gD(),
			e = d.Ov,
			f = d.Ov;
		c.gc.lowerBound.x = a.lowerBound.x -
			e;
		c.gc.lowerBound.y = a.lowerBound.y - f;
		c.gc.upperBound.x = a.upperBound.x + e;
		c.gc.upperBound.y = a.upperBound.y + f;
		c.Pg = b;
		this.sD(c);
		return c
	};
	z.prototype.Ap = function(a)
	{
		this.FD(a);
		this.Ey(a)
	};
	z.prototype.$y = function(a, b, c)
	{
		if (a.gc.zy(b)) return !1;
		this.FD(a);
		var e = d.Ov + d.XD * (0 < c.x ? c.x : -c.x);
		c = d.Ov + d.XD * (0 < c.y ? c.y : -c.y);
		a.gc.lowerBound.x = b.lowerBound.x - e;
		a.gc.lowerBound.y = b.lowerBound.y - c;
		a.gc.upperBound.x = b.upperBound.x + e;
		a.gc.upperBound.y = b.upperBound.y + c;
		this.sD(a);
		return !0
	};
	z.prototype.Pr = function(a)
	{
		return a.gc
	};
	z.prototype.Ei = function(a)
	{
		return a.Pg
	};
	z.prototype.az = function(a, b)
	{
		if (null != this.dk)
		{
			var c = new Qm,
				d = 0;
			for (c[d++] = this.dk; 0 < d;)
			{
				var e = c[--d];
				if (e.gc.gm(b))
					if (e.Jy())
					{
						if (!a(e)) break
					}
				else c[d++] = e.xh, c[d++] = e.Zk
			}
		}
	};
	z.prototype.gD = function()
	{
		if (this.yt)
		{
			var a = this.yt;
			this.yt = a.parent;
			a.parent = null;
			a.xh = null;
			a.Zk = null;
			return a
		}
		return new I
	};
	z.prototype.Ey = function(a)
	{
		a.parent = this.yt;
		this.yt = a
	};
	z.prototype.sD = function(a)
	{
		if (null == this.dk) this.dk = a, this.dk.parent = null;
		else
		{
			var b = a.gc.WI(),
				c = this.dk;
			if (0 ==
				c.Jy())
			{
				do var d = c.xh,
					c = c.Zk,
					c = Math.abs((d.gc.lowerBound.x + d.gc.upperBound.x) / 2 - b.x) + Math.abs((d.gc.lowerBound.y + d.gc.upperBound.y) / 2 - b.y) < Math.abs((c.gc.lowerBound.x + c.gc.upperBound.x) / 2 - b.x) + Math.abs((c.gc.lowerBound.y + c.gc.upperBound.y) / 2 - b.y) ? d : c; while (0 == c.Jy())
			}
			b = c.parent;
			d = this.gD();
			d.parent = b;
			d.Pg = null;
			d.gc.xp(a.gc, c.gc);
			if (b)
			{
				c.parent.xh == c ? b.xh = d : b.Zk = d;
				d.xh = c;
				d.Zk = a;
				c.parent = d;
				a.parent = d;
				do {
					if (b.gc.zy(d.gc)) break;
					b.gc.xp(b.xh.gc, b.Zk.gc);
					d = b;
					b = b.parent
				} while (b)
			}
			else d.xh = c, d.Zk = a, c.parent =
				d, this.dk = a.parent = d
		}
	};
	z.prototype.FD = function(a)
	{
		if (a == this.dk) this.dk = null;
		else
		{
			var b = a.parent,
				c = b.parent;
			a = b.xh == a ? b.Zk : b.xh;
			if (c)
				for (c.xh == b ? c.xh = a : c.Zk = a, a.parent = c, this.Ey(b); c;)
				{
					b = c.gc;
					c.gc = h.xp(c.xh.gc, c.Zk.gc);
					if (b.zy(c.gc)) break;
					c = c.parent
				}
			else this.dk = a, a.parent = null, this.Ey(b)
		}
	};
	A.Jv = function()
	{
		this.fi = new z;
		this.Do = new Qm;
		this.Ft = new Qm;
		this.Go = 0
	};
	A.prototype.Lr = function(a, b)
	{
		var c = this.fi.Lr(a, b);
		this.hD(c);
		return c
	};
	A.prototype.Ap = function(a)
	{
		this.lK(a);
		this.fi.Ap(a)
	};
	A.prototype.$y =
		function(a, b, c)
		{
			this.fi.$y(a, b, c) && this.hD(a)
		};
	A.prototype.gm = function(a, b)
	{
		return this.fi.Pr(a).gm(this.fi.Pr(b))
	};
	A.prototype.Ei = function(a)
	{
		return this.fi.Ei(a)
	};
	A.prototype.Pr = function(a)
	{
		return this.fi.Pr(a)
	};
	A.prototype.mK = function(a)
	{
		for (var b = this, c = b.Go = 0, d, c = 0; c < b.Do.length; ++c) d = b.Do[c], b.fi.az(function(a)
		{
			if (a == d) return !0;
			b.Go == b.Ft.length && (b.Ft[b.Go] = new G);
			var c = b.Ft[b.Go];
			c.nk = a < d ? a : d;
			c.pk = a >= d ? a : d;
			++b.Go;
			return !0
		}, b.fi.Pr(d));
		for (c = b.Do.length = 0; c < b.Go;)
		{
			var e = b.Ft[c];
			a(b.fi.Ei(e.nk),
				b.fi.Ei(e.pk));
			for (++c; c < b.Go;)
			{
				var f = b.Ft[c];
				if (f.nk != e.nk || f.pk != e.pk) break;
				++c
			}
		}
	};
	A.prototype.az = function(a, b)
	{
		this.fi.az(a, b)
	};
	A.prototype.hD = function(a)
	{
		this.Do[this.Do.length] = a
	};
	A.prototype.lK = function(a)
	{
		this.Do.splice(parseInt(this.Do.indexOf(a)), 1)
	};
	A.ez = {};
	A.ez[va] = !0;
	I.Bz = function()
	{
		this.gc = new h
	};
	I.prototype.Jy = function()
	{
		return null == this.xh
	};
	G.Cz = function() {};
	R.Tk = function()
	{
		this.Vd = 0
	};
	R.prototype.Tk = function()
	{
		this.Fb = new Qm(d.Xg);
		for (var a = 0; a < d.Xg; a++) this.Fb[a] = new O;
		this.jf = new k;
		this.zb = new k
	};
	R.prototype.Jf = function()
	{
		for (var a = 0; a < d.Xg; a++)(this.Fb[a] instanceof O ? this.Fb[a] : null).Jf();
		this.jf.eb();
		this.zb.eb();
		this.Vd = this.ha = 0
	};
	R.prototype.Set = function(a)
	{
		this.Vd = a.Vd;
		for (var b = 0; b < d.Xg; b++)(this.Fb[b] instanceof O ? this.Fb[b] : null).Set(a.Fb[b]);
		this.jf.T(a.jf);
		this.zb.T(a.zb);
		this.ha = a.ha
	};
	R.prototype.nf = function()
	{
		var a = new R;
		a.Set(this);
		return a
	};
	Z.Dd.push(function()
	{
		Z.H.Tk.oA = 1;
		Z.H.Tk.Qi = 2;
		Z.H.Tk.fo = 4
	});
	O.ss = function()
	{
		this.zb = new k;
		this.nl = new u
	};
	O.prototype.ss = function()
	{
		this.Jf()
	};
	O.prototype.Jf = function()
	{
		this.zb.eb();
		this.Oo = this.Fo = 0;
		this.nl.key = 0
	};
	O.prototype.Set = function(a)
	{
		this.zb.T(a.zb);
		this.Fo = a.Fo;
		this.Oo = a.Oo;
		this.nl.Set(a.nl)
	};
	K.Iz = function()
	{
		this.p = new k
	};
	L.xs = function()
	{
		this.kH = new k;
		this.lH = new k
	};
	L.prototype.xs = function(a, b)
	{
		void 0 === a && (a = null);
		void 0 === b && (b = null);
		a && this.kH.T(a);
		b && this.lH.T(b)
	};
	M.Mz = function()
	{
		this.Hh = new k
	};
	N.Nz = function()
	{
		this.kH = new k;
		this.lH = new k
	};
	t.Xp = function()
	{
		this.zb = new k;
		this.ia = new k
	};
	t.prototype.Kb = function(a, b, c, d, f)
	{
		this.Gm =
			b;
		this.Hm = d;
		var g, h, B, C, J;
		if (1 == parseInt(a.count)) this.ha = t.hF, g = this.Gm.qf(a.Qe[0]), h = this.Hm.qf(a.Re[0]), C = g, B = c.M, g = c.position.x + (B.g.x * C.x + B.h.x * C.y), c = c.position.y + (B.g.y * C.x + B.h.y * C.y), C = h, B = f.M, h = f.position.x + (B.g.x * C.x + B.h.x * C.y), f = f.position.y + (B.g.y * C.x + B.h.y * C.y), this.ia.x = h - g, this.ia.y = f - c, this.ia.vg();
		else
		{
			if (a.Re[0] == a.Re[1]) this.ha = t.Qi, b = this.Gm.qf(a.Qe[0]), d = this.Gm.qf(a.Qe[1]), h = this.Hm.qf(a.Re[0]), this.zb.x = .5 * (b.x + d.x), this.zb.y = .5 * (b.y + d.y), this.ia = e.Yl(e.qd(d, b), 1), this.ia.vg(),
				C = this.ia, B = c.M, b = B.g.x * C.x + B.h.x * C.y, d = B.g.y * C.x + B.h.y * C.y, C = this.zb, B = c.M, g = c.position.x + (B.g.x * C.x + B.h.x * C.y), c = c.position.y + (B.g.y * C.x + B.h.y * C.y), C = h, B = f.M, h = f.position.x + (B.g.x * C.x + B.h.x * C.y), f = f.position.y + (B.g.y * C.x + B.h.y * C.y), J = (h - g) * b + (f - c) * d;
			else if (a.Qe[0] == a.Qe[0]) this.ha = t.fo, B = this.Hm.qf(a.Re[0]), C = this.Hm.qf(a.Re[1]), g = this.Gm.qf(a.Qe[0]), this.zb.x = .5 * (B.x + C.x), this.zb.y = .5 * (B.y + C.y), this.ia = e.Yl(e.qd(C, B), 1), this.ia.vg(), C = this.ia, B = f.M, b = B.g.x * C.x + B.h.x * C.y, d = B.g.y * C.x + B.h.y * C.y,
				C = this.zb, B = f.M, h = f.position.x + (B.g.x * C.x + B.h.x * C.y), f = f.position.y + (B.g.y * C.x + B.h.y * C.y), C = g, B = c.M, g = c.position.x + (B.g.x * C.x + B.h.x * C.y), c = c.position.y + (B.g.y * C.x + B.h.y * C.y), J = (g - h) * b + (c - f) * d;
			else
			{
				b = this.Gm.qf(a.Qe[0]);
				d = this.Gm.qf(a.Qe[1]);
				B = this.Hm.qf(a.Re[0]);
				C = this.Hm.qf(a.Re[1]);
				e.qe(c, g);
				J = e.cf(c.M, e.qd(d, b));
				e.qe(f, h);
				var H = e.cf(f.M, e.qd(C, B));
				h = J.x * J.x + J.y * J.y;
				g = H.x * H.x + H.y * H.y;
				var l = e.qd(H, J);
				a = J.x * l.x + J.y * l.y;
				var l = H.x * l.x + H.y * l.y,
					H = J.x * H.x + J.y * H.y,
					Q = h * g - H * H;
				J = 0;
				0 != Q && (J = e.pc((H * l - a * g) /
					Q, 0, 1));
				0 > (H * J + l) / g && (J = e.pc((H - a) / h, 0, 1));
				g = new k;
				g.x = b.x + J * (d.x - b.x);
				g.y = b.y + J * (d.y - b.y);
				h = new k;
				h.x = B.x + J * (C.x - B.x);
				h.y = B.y + J * (C.y - B.y);
				0 == J || 1 == J ? (this.ha = t.fo, this.ia = e.Yl(e.qd(C, B), 1), this.ia.vg(), this.zb = h) : (this.ha = t.Qi, this.ia = e.Yl(e.qd(d, b), 1), this.zb = g)
			}
			0 > J && this.ia.BD()
		}
	};
	t.prototype.Ci = function(a, b)
	{
		var c, d, f;
		switch (this.ha)
		{
			case t.hF:
				return c = e.bm(a.M, this.ia), d = e.bm(b.M, this.ia.Zl()), c = this.Gm.Sr(c), d = this.Hm.Sr(d), c = e.qe(a, c), d = e.qe(b, d), f = (d.x - c.x) * this.ia.x + (d.y - c.y) * this.ia.y;
			case t.Qi:
				return f =
					e.cf(a.M, this.ia), c = e.qe(a, this.zb), d = e.bm(b.M, f.Zl()), d = this.Hm.Sr(d), d = e.qe(b, d), f = (d.x - c.x) * f.x + (d.y - c.y) * f.y;
			case t.fo:
				return f = e.cf(b.M, this.ia), d = e.qe(b, this.zb), c = e.bm(a.M, f.Zl()), c = this.Gm.Sr(c), c = e.qe(a, c), f = (c.x - d.x) * f.x + (c.y - d.y) * f.y;
			default:
				return 0
		}
	};
	Z.Dd.push(function()
	{
		Z.H.Xp.hF = 1;
		Z.H.Xp.Qi = 2;
		Z.H.Xp.fo = 4
	});
	C.ys = function()
	{
		this.Ra = new J;
		this.lb = new J;
		this.fh = new J;
		this.ka = new Qm(3)
	};
	C.prototype.ys = function()
	{
		this.ka[0] = this.Ra;
		this.ka[1] = this.lb;
		this.ka[2] = this.fh
	};
	C.prototype.$J = function(a,
		b, c, d, f)
	{
		var g, k;
		this.Jc = a.count;
		for (var t = this.ka, h = 0; h < this.Jc; h++)
		{
			var B = t[h];
			B.Qe = a.Qe[h];
			B.Re = a.Re[h];
			g = b.qf(B.Qe);
			k = d.qf(B.Re);
			B.Ff = e.qe(c, g);
			B.zi = e.qe(f, k);
			B.Zc = e.qd(B.zi, B.Ff);
			B.X = 0
		}
		1 < this.Jc && (a = a.qM, g = this.rD(), g < .5 * a || 2 * a < g || g < Number.MIN_VALUE) && (this.Jc = 0);
		0 == this.Jc && (B = t[0], B.Qe = 0, B.Re = 0, g = b.qf(0), k = d.qf(0), B.Ff = e.qe(c, g), B.zi = e.qe(f, k), B.Zc = e.qd(B.zi, B.Ff), this.Jc = 1)
	};
	C.prototype.nK = function(a)
	{
		a.qM = this.rD();
		a.count = Z.li(this.Jc);
		for (var b = this.ka, c = 0; c < this.Jc; c++) a.Qe[c] = Z.li(b[c].Qe),
			a.Re[c] = Z.li(b[c].Re)
	};
	C.prototype.$I = function()
	{
		switch (this.Jc)
		{
			case 1:
				return this.Ra.Zc.Zl();
			case 2:
				var a = e.qd(this.lb.Zc, this.Ra.Zc);
				return 0 < e.zp(a, this.Ra.Zc.Zl()) ? e.jD(1, a) : e.Yl(a, 1);
			default:
				return new k
		}
	};
	C.prototype.oD = function()
	{
		switch (this.Jc)
		{
			case 0:
				new k;
				break;
			case 1:
				break;
			case 2:
				new k(this.Ra.X * this.Ra.Zc.x + this.lb.X * this.lb.Zc.x, this.Ra.X * this.Ra.Zc.y + this.lb.X * this.lb.Zc.y);
				break;
			default:
				new k
		}
	};
	C.prototype.aJ = function(a, b)
	{
		switch (this.Jc)
		{
			case 1:
				a.T(this.Ra.Ff);
				b.T(this.Ra.zi);
				break;
			case 2:
				a.x = this.Ra.X * this.Ra.Ff.x + this.lb.X * this.lb.Ff.x;
				a.y = this.Ra.X * this.Ra.Ff.y + this.lb.X * this.lb.Ff.y;
				b.x = this.Ra.X * this.Ra.zi.x + this.lb.X * this.lb.zi.x;
				b.y = this.Ra.X * this.Ra.zi.y + this.lb.X * this.lb.zi.y;
				break;
			case 3:
				b.x = a.x = this.Ra.X * this.Ra.Ff.x + this.lb.X * this.lb.Ff.x + this.fh.X * this.fh.Ff.x, b.y = a.y = this.Ra.X * this.Ra.Ff.y + this.lb.X * this.lb.Ff.y + this.fh.X * this.fh.Ff.y
		}
	};
	C.prototype.rD = function()
	{
		switch (this.Jc)
		{
			case 0:
				return 0;
			case 1:
				return 0;
			case 2:
				return e.qd(this.Ra.Zc, this.lb.Zc).Kk();
			case 3:
				return e.zp(e.qd(this.lb.Zc,
					this.Ra.Zc), e.qd(this.fh.Zc, this.Ra.Zc));
			default:
				return 0
		}
	};
	C.prototype.gK = function()
	{
		var a = this.Ra.Zc,
			b = this.lb.Zc,
			c = e.qd(b, a),
			a = -(a.x * c.x + a.y * c.y);
		0 >= a ? this.Jc = this.Ra.X = 1 : (b = b.x * c.x + b.y * c.y, 0 >= b ? (this.Jc = this.lb.X = 1, this.Ra.Set(this.lb)) : (c = 1 / (b + a), this.Ra.X = b * c, this.lb.X = a * c, this.Jc = 2))
	};
	C.prototype.hK = function()
	{
		var a = this.Ra.Zc,
			b = this.lb.Zc,
			c = this.fh.Zc,
			d = e.qd(b, a),
			f = e.pf(b, d),
			g = -e.pf(a, d),
			k = e.qd(c, a),
			t = e.pf(c, k),
			h = -e.pf(a, k),
			B = e.qd(c, b),
			C = e.pf(c, B),
			B = -e.pf(b, B),
			k = e.zp(d, k),
			d = k * e.zp(b, c),
			c =
			k * e.zp(c, a),
			a = k * e.zp(a, b);
		0 >= g && 0 >= h ? this.Jc = this.Ra.X = 1 : 0 < f && 0 < g && 0 >= a ? (t = 1 / (f + g), this.Ra.X = f * t, this.lb.X = g * t, this.Jc = 2) : 0 < t && 0 < h && 0 >= c ? (f = 1 / (t + h), this.Ra.X = t * f, this.fh.X = h * f, this.Jc = 2, this.lb.Set(this.fh)) : 0 >= f && 0 >= B ? (this.Jc = this.lb.X = 1, this.Ra.Set(this.lb)) : 0 >= t && 0 >= C ? (this.Jc = this.fh.X = 1, this.Ra.Set(this.fh)) : 0 < C && 0 < B && 0 >= d ? (f = 1 / (C + B), this.lb.X = C * f, this.fh.X = B * f, this.Jc = 2, this.Ra.Set(this.fh)) : (f = 1 / (d + c + a), this.Ra.X = d * f, this.lb.X = c * f, this.fh.X = a * f, this.Jc = 3)
	};
	B.Lv = function()
	{
		this.Qe = new Rm(3);
		this.Re = new Rm(3)
	};
	J.Oz = function() {};
	J.prototype.Set = function(a)
	{
		this.Ff.T(a.Ff);
		this.zi.T(a.zi);
		this.Zc.T(a.Zc);
		this.X = a.X;
		this.Qe = a.Qe;
		this.Re = a.Re
	};
	H.wg = function() {};
	H.kK = function(a)
	{
		++H.GK;
		var b = a.nk,
			c = a.pk,
			d = a.mI,
			f = a.nI,
			g = b.sb + c.sb;
		a = a.KN;
		var k = 0,
			t = 0,
			h = 0;
		H.KC.count = 0;
		for (H.wr.wI = !1;;)
		{
			d.$f(H.mn, k);
			f.$f(H.nn, k);
			H.wr.nk = b;
			H.wr.pk = c;
			H.wr.rI = H.mn;
			H.wr.sI = H.nn;
			v.By(H.$H, H.KC, H.wr);
			if (0 >= H.$H.bo)
			{
				k = 1;
				break
			}
			H.iy.Kb(H.KC, b, H.mn, c, H.nn);
			var B = H.iy.Ci(H.mn, H.nn);
			if (0 >= B)
			{
				k = 1;
				break
			}
			0 == t && (h = B > g ? e.If(g -
				a, .75 * g) : e.If(B - a, .02 * g));
			if (B - h < .5 * a)
			{
				if (0 == t)
				{
					k = 1;
					break
				}
				break
			}
			var C = k,
				J = k,
				l = 1;
			d.$f(H.mn, l);
			f.$f(H.nn, l);
			var Q = H.iy.Ci(H.mn, H.nn);
			if (Q >= h)
			{
				k = 1;
				break
			}
			for (var U = 0;;)
			{
				var p;
				p = U & 1 ? J + (h - B) * (l - J) / (Q - B) : .5 * (J + l);
				d.$f(H.mn, p);
				f.$f(H.nn, p);
				var n = H.iy.Ci(H.mn, H.nn);
				if (e.He(n - h) < .025 * a)
				{
					C = p;
					break
				}
				n > h ? (J = p, B = n) : (l = p, Q = n);
				++U;
				++H.IK;
				if (50 == U) break
			}
			H.cE = e.If(H.cE, U);
			if (C < (1 + 100 * Number.MIN_VALUE) * k) break;
			k = C;
			t++;
			++H.HK;
			if (1E3 == t) break
		}
		H.bE = e.If(H.bE, t);
		return k
	};
	Z.Dd.push(function()
	{
		Z.H.wg.GK = 0;
		Z.H.wg.HK = 0;
		Z.H.wg.bE =
			0;
		Z.H.wg.IK = 0;
		Z.H.wg.cE = 0;
		Z.H.wg.KC = new B;
		Z.H.wg.wr = new n;
		Z.H.wg.mn = new g;
		Z.H.wg.nn = new g;
		Z.H.wg.iy = new t;
		Z.H.wg.$H = new w
	});
	U.Mv = function()
	{
		this.nk = new D;
		this.pk = new D;
		this.mI = new f;
		this.nI = new f
	};
	Q.Rn = function()
	{
		this.kb = new k
	};
	Q.prototype.Rn = function()
	{
		this.Fb = new Qm(d.Xg);
		for (var a = 0; a < d.Xg; a++) this.Fb[a] = new k
	};
	Q.prototype.Kb = function(a, b, c, d, e)
	{
		void 0 === c && (c = 0);
		void 0 === e && (e = 0);
		if (0 != a.Vd)
		{
			var f, g, k, t, h, B, C, J;
			switch (a.ha)
			{
				case R.oA:
					k = b.M;
					g = a.zb;
					f = b.position.x + k.g.x * g.x + k.h.x * g.y;
					b = b.position.y +
						k.g.y * g.x + k.h.y * g.y;
					k = d.M;
					g = a.Fb[0].zb;
					a = d.position.x + k.g.x * g.x + k.h.x * g.y;
					d = d.position.y + k.g.y * g.x + k.h.y * g.y;
					g = a - f;
					k = d - b;
					t = g * g + k * k;
					t > Number.MIN_VALUE * Number.MIN_VALUE ? (t = Math.sqrt(t), this.kb.x = g / t, this.kb.y = k / t) : (this.kb.x = 1, this.kb.y = 0);
					g = b + c * this.kb.y;
					d -= e * this.kb.y;
					this.Fb[0].x = .5 * (f + c * this.kb.x + (a - e * this.kb.x));
					this.Fb[0].y = .5 * (g + d);
					break;
				case R.Qi:
					k = b.M;
					g = a.jf;
					t = k.g.x * g.x + k.h.x * g.y;
					h = k.g.y * g.x + k.h.y * g.y;
					k = b.M;
					g = a.zb;
					B = b.position.x + k.g.x * g.x + k.h.x * g.y;
					C = b.position.y + k.g.y * g.x + k.h.y * g.y;
					this.kb.x =
						t;
					this.kb.y = h;
					for (f = 0; f < a.Vd; f++) k = d.M, g = a.Fb[f].zb, J = d.position.x + k.g.x * g.x + k.h.x * g.y, g = d.position.y + k.g.y * g.x + k.h.y * g.y, this.Fb[f].x = J + .5 * (c - (J - B) * t - (g - C) * h - e) * t, this.Fb[f].y = g + .5 * (c - (J - B) * t - (g - C) * h - e) * h;
					break;
				case R.fo:
					for (k = d.M, g = a.jf, t = k.g.x * g.x + k.h.x * g.y, h = k.g.y * g.x + k.h.y * g.y, k = d.M, g = a.zb, B = d.position.x + k.g.x * g.x + k.h.x * g.y, C = d.position.y + k.g.y * g.x + k.h.y * g.y, this.kb.x = -t, this.kb.y = -h, f = 0; f < a.Vd; f++) k = b.M, g = a.Fb[f].zb, J = b.position.x + k.g.x * g.x + k.h.x * g.y, g = b.position.y + k.g.y * g.x + k.h.y * g.y, this.Fb[f].x =
						J + .5 * (e - (J - B) * t - (g - C) * h - c) * t, this.Fb[f].y = g + .5 * (e - (J - B) * t - (g - C) * h - c) * h
			}
		}
	};
	ua.yy = function()
	{
		this.Oh = new k;
		this.id = new u
	};
	ua.prototype.Set = function(a)
	{
		this.Oh.T(a.Oh);
		this.id.Set(a.id)
	};
	ha.Cy = function() {};
	Object.defineProperty(ha.prototype, "referenceEdge",
	{
		enumerable: !1,
		configurable: !0,
		get: function()
		{
			return this.iz
		}
	});
	Object.defineProperty(ha.prototype, "referenceEdge",
	{
		enumerable: !1,
		configurable: !0,
		set: function(a)
		{
			void 0 === a && (a = 0);
			this.iz = a;
			this.hm.Tg = this.hm.Tg & 4294967040 | this.iz & 255
		}
	});
	Object.defineProperty(ha.prototype,
		"incidentEdge",
		{
			enumerable: !1,
			configurable: !0,
			get: function()
			{
				return this.gz
			}
		});
	Object.defineProperty(ha.prototype, "incidentEdge",
	{
		enumerable: !1,
		configurable: !0,
		set: function(a)
		{
			void 0 === a && (a = 0);
			this.gz = a;
			this.hm.Tg = this.hm.Tg & 4294902015 | this.gz << 8 & 65280
		}
	});
	Object.defineProperty(ha.prototype, "incidentVertex",
	{
		enumerable: !1,
		configurable: !0,
		get: function()
		{
			return this.hz
		}
	});
	Object.defineProperty(ha.prototype, "incidentVertex",
	{
		enumerable: !1,
		configurable: !0,
		set: function(a)
		{
			void 0 === a && (a = 0);
			this.hz = a;
			this.hm.Tg =
				this.hm.Tg & 4278255615 | this.hz << 16 & 16711680
		}
	});
	Object.defineProperty(ha.prototype, "flip",
	{
		enumerable: !1,
		configurable: !0,
		get: function()
		{
			return this.fz
		}
	});
	Object.defineProperty(ha.prototype, "flip",
	{
		enumerable: !1,
		configurable: !0,
		set: function(a)
		{
			void 0 === a && (a = 0);
			this.fz = a;
			this.hm.Tg = this.hm.Tg & 16777215 | this.fz << 24 & 4278190080
		}
	})
})();
(function()
{
	var a = Z.K.ma,
		b = Z.H.cb.lm,
		c = Z.H.cb.js,
		d = Z.H.cb.ks,
		e = Z.H.cb.Kv,
		f = Z.H.cb.vh,
		g = Z.H.cb.Hc,
		k = Z.K.Math.Uk,
		h = Z.K.Math.uh,
		p = Z.K.Math.nm,
		l = Z.K.Math.Ua,
		r = Z.H.On,
		u = Z.H.Gv,
		q = Z.H.Hv,
		v = Z.H.Iv,
		n = Z.H.Lv;
	Z.tc(b, Z.H.cb.Hc);
	b.prototype.va = Z.H.cb.Hc.prototype;
	b.lm = function()
	{
		Z.H.cb.Hc.Hc.apply(this, arguments);
		this.Te = new l
	};
	b.prototype.nf = function()
	{
		var a = new b;
		a.Set(this);
		return a
	};
	b.prototype.Set = function(a)
	{
		this.va.Set.call(this, a);
		Z.is(a, b) && this.Te.T((a instanceof b ? a : null).Te)
	};
	b.prototype.yp = function(a,
		b)
	{
		var c = b.M,
			d = b.position.x + (c.g.x * this.Te.x + c.h.x * this.Te.y),
			c = b.position.y + (c.g.y * this.Te.x + c.h.y * this.Te.y);
		a.lowerBound.Set(d - this.sb, c - this.sb);
		a.upperBound.Set(d + this.sb, c + this.sb)
	};
	b.prototype.Kr = function(b, c)
	{
		void 0 === c && (c = 0);
		b.ek = c * a.Za * this.sb * this.sb;
		b.Oi.T(this.Te);
		b.Bp = b.ek * (.5 * this.sb * this.sb + (this.Te.x * this.Te.x + this.Te.y * this.Te.y))
	};
	b.prototype.Yu = function(a, b, c, d)
	{
		void 0 === b && (b = 0);
		c = h.qe(c, this.Te);
		var e = -(h.pf(a, c) - b);
		if (e < -this.sb + Number.MIN_VALUE) return 0;
		if (e > this.sb) return d.T(c),
			Math.PI * this.sb * this.sb;
		b = this.sb * this.sb;
		var f = e * e,
			e = b * (Math.asin(e / this.sb) + Math.PI / 2) + e * Math.sqrt(b - f);
		b = -2 / 3 * Math.pow(b - f, 1.5) / e;
		d.x = c.x + a.x * b;
		d.y = c.y + a.y * b;
		return e
	};
	b.prototype.lm = function(a)
	{
		void 0 === a && (a = 0);
		this.va.Hc.call(this);
		this.ha = g.hq;
		this.sb = a
	};
	c.js = function() {};
	c.prototype.js = function() {};
	Z.tc(d, Z.H.cb.Hc);
	d.prototype.va = Z.H.cb.Hc.prototype;
	d.ks = function()
	{
		Z.H.cb.Hc.Hc.apply(this, arguments);
		new l;
		this.Ra = new l;
		this.lb = new l;
		this.WL = new l;
		this.XL = new l;
		this.kb = new l;
		this.Qf = new l;
		new l;
		this.YL = new l
	};
	d.prototype.yp = function(a, b)
	{
		var c = b.M,
			d = b.position.x + (c.g.x * this.Ra.x + c.h.x * this.Ra.y),
			e = b.position.y + (c.g.y * this.Ra.x + c.h.y * this.Ra.y),
			f = b.position.x + (c.g.x * this.lb.x + c.h.x * this.lb.y),
			c = b.position.y + (c.g.y * this.lb.x + c.h.y * this.lb.y);
		d < f ? (a.lowerBound.x = d, a.upperBound.x = f) : (a.lowerBound.x = f, a.upperBound.x = d);
		e < c ? (a.lowerBound.y = e, a.upperBound.y = c) : (a.lowerBound.y = c, a.upperBound.y = e)
	};
	d.prototype.Kr = function(a)
	{
		a.ek = 0;
		a.Oi.T(this.Ra);
		a.Bp = 0
	};
	d.prototype.Yu = function(a, b, c, d)
	{
		void 0 ===
			b && (b = 0);
		var e = new l(a.x * b, a.y * b),
			f = h.qe(c, this.Ra);
		c = h.qe(c, this.lb);
		var g = h.pf(a, f) - b;
		a = h.pf(a, c) - b;
		if (0 < g)
		{
			if (0 < a) return 0;
			f.x = -a / (g - a) * f.x + g / (g - a) * c.x;
			f.y = -a / (g - a) * f.y + g / (g - a) * c.y
		}
		else 0 < a && (c.x = -a / (g - a) * f.x + g / (g - a) * c.x, c.y = -a / (g - a) * f.y + g / (g - a) * c.y);
		d.x = (e.x + f.x + c.x) / 3;
		d.y = (e.y + f.y + c.y) / 3;
		return .5 * ((f.x - e.x) * (c.y - e.y) - (f.y - e.y) * (c.x - e.x))
	};
	d.prototype.ks = function(b, c)
	{
		this.va.Hc.call(this);
		this.ha = g.pA;
		this.Ra = b;
		this.lb = c;
		this.Qf.Set(this.lb.x - this.Ra.x, this.lb.y - this.Ra.y);
		this.fB = this.Qf.vg();
		this.kb.Set(this.Qf.y, -this.Qf.x);
		this.WL.Set(-a.Rv * (this.kb.x - this.Qf.x) + this.Ra.x, -a.Rv * (this.kb.y - this.Qf.y) + this.Ra.y);
		this.XL.Set(-a.Rv * (this.kb.x + this.Qf.x) + this.lb.x, -a.Rv * (this.kb.y + this.Qf.y) + this.lb.y);
		this.YL.Set(-this.kb.x, -this.kb.y)
	};
	e.Kv = function()
	{
		this.ek = 0;
		this.Oi = new l(0, 0);
		this.Bp = 0
	};
	Z.tc(f, Z.H.cb.Hc);
	f.prototype.va = Z.H.cb.Hc.prototype;
	f.vh = function()
	{
		Z.H.cb.Hc.Hc.apply(this, arguments)
	};
	f.prototype.nf = function()
	{
		var a = new f;
		a.Set(this);
		return a
	};
	f.prototype.Set = function(a)
	{
		this.va.Set.call(this,
			a);
		if (Z.is(a, f))
		{
			a = a instanceof f ? a : null;
			this.kl.T(a.kl);
			this.Lc = a.Lc;
			this.Yr(this.Lc);
			for (var b = 0; b < this.Lc; b++) this.ka[b].T(a.ka[b]), this.kd[b].T(a.kd[b])
		}
	};
	f.prototype.sv = function(a, b)
	{
		void 0 === b && (b = 0);
		var c = new Qm,
			d, e;
		for (d = 0; d < a.length; ++d) e = a[d], c.push(e);
		this.ID(c, b)
	};
	f.XN = function(a, b)
	{
		void 0 === b && (b = 0);
		var c = new f;
		c.sv(a, b);
		return c
	};
	f.prototype.ID = function(a, b)
	{
		void 0 === b && (b = 0);
		0 == b && (b = a.length);
		this.Lc = b;
		this.Yr(b);
		var c;
		for (c = 0; c < this.Lc; c++) this.ka[c].T(a[c]);
		for (c = 0; c < this.Lc; ++c)
		{
			var d =
				h.qd(this.ka[parseInt(c + 1 < this.Lc ? c + 1 : 0)], this.ka[parseInt(c)]);
			this.kd[c].T(h.Yl(d, 1));
			this.kd[c].vg()
		}
		this.kl = f.RI(this.ka, this.Lc)
	};
	f.aO = function(a, b)
	{
		void 0 === b && (b = 0);
		var c = new f;
		c.ID(a, b);
		return c
	};
	f.prototype.HD = function(a, b)
	{
		void 0 === a && (a = 0);
		void 0 === b && (b = 0);
		this.Lc = 4;
		this.Yr(4);
		this.ka[0].Set(-a, -b);
		this.ka[1].Set(a, -b);
		this.ka[2].Set(a, b);
		this.ka[3].Set(-a, b);
		this.kd[0].Set(0, -1);
		this.kd[1].Set(1, 0);
		this.kd[2].Set(0, 1);
		this.kd[3].Set(-1, 0);
		this.kl.eb()
	};
	f.YN = function(a, b)
	{
		void 0 === a &&
			(a = 0);
		void 0 === b && (b = 0);
		var c = new f;
		c.HD(a, b);
		return c
	};
	f.prototype.eK = function(a, b, c, d)
	{
		void 0 === a && (a = 0);
		void 0 === b && (b = 0);
		void 0 === c && (c = null);
		void 0 === d && (d = 0);
		this.Lc = 4;
		this.Yr(4);
		this.ka[0].Set(-a, -b);
		this.ka[1].Set(a, -b);
		this.ka[2].Set(a, b);
		this.ka[3].Set(-a, b);
		this.kd[0].Set(0, -1);
		this.kd[1].Set(1, 0);
		this.kd[2].Set(0, 1);
		this.kd[3].Set(-1, 0);
		this.kl = c;
		a = new p;
		a.position = c;
		a.M.Set(d);
		for (c = 0; c < this.Lc; ++c) this.ka[c] = h.qe(a, this.ka[c]), this.kd[c] = h.cf(a.M, this.kd[c])
	};
	f.$N = function(a, b, c, d)
	{
		void 0 ===
			a && (a = 0);
		void 0 === b && (b = 0);
		void 0 === c && (c = null);
		void 0 === d && (d = 0);
		var e = new f;
		e.eK(a, b, c, d);
		return e
	};
	f.prototype.dK = function(a, b)
	{
		this.Lc = 2;
		this.Yr(2);
		this.ka[0].T(a);
		this.ka[1].T(b);
		this.kl.x = .5 * (a.x + b.x);
		this.kl.y = .5 * (a.y + b.y);
		this.kd[0] = h.Yl(h.qd(b, a), 1);
		this.kd[0].vg();
		this.kd[1].x = -this.kd[0].x;
		this.kd[1].y = -this.kd[0].y
	};
	f.ZN = function(a, b)
	{
		var c = new f;
		c.dK(a, b);
		return c
	};
	f.prototype.yp = function(a, b)
	{
		for (var c = b.M, d = this.ka[0], e = b.position.x + (c.g.x * d.x + c.h.x * d.y), f = b.position.y + (c.g.y * d.x + c.h.y *
				d.y), g = e, k = f, h = 1; h < this.Lc; ++h) var d = this.ka[h],
			l = b.position.x + (c.g.x * d.x + c.h.x * d.y),
			d = b.position.y + (c.g.y * d.x + c.h.y * d.y),
			e = e < l ? e : l,
			f = f < d ? f : d,
			g = g > l ? g : l,
			k = k > d ? k : d;
		a.lowerBound.x = e - this.sb;
		a.lowerBound.y = f - this.sb;
		a.upperBound.x = g + this.sb;
		a.upperBound.y = k + this.sb
	};
	f.prototype.Kr = function(a, b)
	{
		void 0 === b && (b = 0);
		if (2 == this.Lc) a.Oi.x = .5 * (this.ka[0].x + this.ka[1].x), a.Oi.y = .5 * (this.ka[0].y + this.ka[1].y), a.ek = 0, a.Bp = 0;
		else
		{
			for (var c = 0, d = 0, e = 0, f = 0, g = 1 / 3, k = 0; k < this.Lc; ++k) var h = this.ka[k],
				l = k + 1 < this.Lc ? this.ka[parseInt(k +
					1)] : this.ka[0],
				p = h.x - 0,
				n = h.y - 0,
				t = l.x - 0,
				C = l.y - 0,
				B = p * C - n * t,
				J = .5 * B,
				e = e + J,
				c = c + J * g * (0 + h.x + l.x),
				d = d + J * g * (0 + h.y + l.y),
				h = p,
				f = f + B * (g * (.25 * (h * h + t * h + t * t) + (0 * h + 0 * t)) + 0 + (g * (.25 * (n * n + C * n + C * C) + (0 * n + 0 * C)) + 0));
			a.ek = b * e;
			a.Oi.Set(1 / e * c, 1 / e * d);
			a.Bp = b * f
		}
	};
	f.prototype.Yu = function(a, b, c, d)
	{
		void 0 === b && (b = 0);
		var f = h.bm(c.M, a),
			g = b - h.pf(a, c.position),
			k = new Rm,
			p = 0,
			n = -1;
		b = -1;
		var q = !1;
		for (a = 0; a < this.Lc; ++a)
		{
			k[a] = h.pf(f, this.ka[a]) - g;
			var r = k[a] < -Number.MIN_VALUE;
			0 < a && (r ? q || (n = a - 1, p++) : q && (b = a - 1, p++));
			q = r
		}
		switch (p)
		{
			case 0:
				return q ?
					(a = new e, this.Kr(a, 1), d.T(h.qe(c, a.Oi)), a.ek) : 0;
			case 1:
				-1 == n ? n = this.Lc - 1 : b = this.Lc - 1
		}
		a = parseInt((n + 1) % this.Lc);
		f = parseInt((b + 1) % this.Lc);
		g = (0 - k[n]) / (k[a] - k[n]);
		k = (0 - k[b]) / (k[f] - k[b]);
		n = new l(this.ka[n].x * (1 - g) + this.ka[a].x * g, this.ka[n].y * (1 - g) + this.ka[a].y * g);
		b = new l(this.ka[b].x * (1 - k) + this.ka[f].x * k, this.ka[b].y * (1 - k) + this.ka[f].y * k);
		k = 0;
		g = new l;
		for (p = this.ka[a]; a != f;) a = (a + 1) % this.Lc, q = a == f ? b : this.ka[a], r = .5 * ((p.x - n.x) * (q.y - n.y) - (p.y - n.y) * (q.x - n.x)), k += r, g.x += r * (n.x + p.x + q.x) / 3, g.y += r * (n.y + p.y + q.y) /
			3, p = q;
		g.cg(1 / k);
		d.T(h.qe(c, g));
		return k
	};
	f.prototype.Hy = function(a)
	{
		for (var b = 0, c = this.ka[0].x * a.x + this.ka[0].y * a.y, d = 1; d < this.Lc; ++d)
		{
			var e = this.ka[d].x * a.x + this.ka[d].y * a.y;
			e > c && (b = d, c = e)
		}
		return b
	};
	f.prototype.Sr = function(a)
	{
		for (var b = 0, c = this.ka[0].x * a.x + this.ka[0].y * a.y, d = 1; d < this.Lc; ++d)
		{
			var e = this.ka[d].x * a.x + this.ka[d].y * a.y;
			e > c && (b = d, c = e)
		}
		return this.ka[b]
	};
	f.prototype.vh = function()
	{
		this.va.Hc.call(this);
		this.ha = g.iq;
		this.kl = new l;
		this.ka = new Qm;
		this.kd = new Qm
	};
	f.prototype.Yr = function(a)
	{
		void 0 ===
			a && (a = 0);
		for (var b = parseInt(this.ka.length); b < a; b++) this.ka[b] = new l, this.kd[b] = new l
	};
	f.RI = function(a, b)
	{
		void 0 === b && (b = 0);
		for (var c = new l, d = 0, e = 1 / 3, f = 0; f < b; ++f)
		{
			var g = a[f],
				k = f + 1 < b ? a[parseInt(f + 1)] : a[0],
				h = .5 * ((g.x - 0) * (k.y - 0) - (g.y - 0) * (k.x - 0)),
				d = d + h;
			c.x += h * e * (0 + g.x + k.x);
			c.y += h * e * (0 + g.y + k.y)
		}
		c.x *= 1 / d;
		c.y *= 1 / d;
		return c
	};
	f.cO = function(a, b, c)
	{
		void 0 === c && (c = 0);
		var d, e = new Qm(c + 1);
		for (d = 0; d < c; ++d) e[d] = b[d];
		e[c] = e[0];
		b = Number.MAX_VALUE;
		for (d = 1; d <= c; ++d)
		{
			for (var f = e[parseInt(d - 1)], g = e[d].x - f.x, k = e[d].y - f.y,
					h = Math.sqrt(g * g + k * k), g = g / h, k = k / h, l = -k, p = g, n = h = Number.MAX_VALUE, t = -Number.MAX_VALUE, C = -Number.MAX_VALUE, B = 0; B < c; ++B)
			{
				var J = e[B].x - f.x,
					H = e[B].y - f.y,
					U = g * J + k * H,
					J = l * J + p * H;
				U < h && (h = U);
				J < n && (n = J);
				U > t && (t = U);
				J > C && (C = J)
			}
			B = (t - h) * (C - n);
			B < .95 * b && (b = B, a.M.g.x = g, a.M.g.y = k, a.M.h.x = l, a.M.h.y = p, g = .5 * (h + t), k = .5 * (n + C), l = a.M, a.Oi.x = f.x + (l.g.x * g + l.h.x * k), a.Oi.y = f.y + (l.g.y * g + l.h.y * k), a.iL.x = .5 * (t - h), a.iL.y = .5 * (C - n))
		}
	};
	Z.Dd.push(function()
	{
		Z.H.cb.vh.gQ = new k
	});
	g.Hc = function() {};
	g.prototype.nf = function()
	{
		return null
	};
	g.prototype.Set =
		function(a)
		{
			this.sb = a.sb
		};
	g.prototype.Uc = function()
	{
		return this.ha
	};
	g.prototype.yp = function() {};
	g.prototype.Kr = function() {};
	g.prototype.Yu = function()
	{
		return 0
	};
	g.gm = function(a, b, c, d)
	{
		var e = new u;
		e.nk = new v;
		e.nk.Set(a);
		e.pk = new v;
		e.pk.Set(c);
		e.rI = b;
		e.sI = d;
		e.wI = !0;
		a = new n;
		a.count = 0;
		b = new q;
		r.By(b, a, e);
		return b.bo < 10 * Number.MIN_VALUE
	};
	g.prototype.Hc = function()
	{
		this.ha = g.gL;
		this.sb = a.hc
	};
	Z.Dd.push(function()
	{
		Z.H.cb.Hc.gL = -1;
		Z.H.cb.Hc.hq = 0;
		Z.H.cb.Hc.iq = 1;
		Z.H.cb.Hc.pA = 2;
		Z.H.cb.Hc.iw = 3;
		Z.H.cb.Hc.bP = 1;
		Z.H.cb.Hc.dP =
			0;
		Z.H.cb.Hc.gP = -1
	})
})();
(function()
{
	var a = Z.K.Pp,
		b = Z.K.ma,
		c = Z.K.Math.uh;
	a.Pp = function()
	{
		this.wv = this.xv = this.yv = 0
	};
	a.prototype.Pp = function(a, b, f)
	{
		void 0 === a && (a = 0);
		void 0 === b && (b = 0);
		void 0 === f && (f = 0);
		this.yv = Z.li(255 * c.pc(a, 0, 1));
		this.xv = Z.li(255 * c.pc(b, 0, 1));
		this.wv = Z.li(255 * c.pc(f, 0, 1))
	};
	a.prototype.Set = function(a, b, f)
	{
		void 0 === a && (a = 0);
		void 0 === b && (b = 0);
		void 0 === f && (f = 0);
		this.yv = Z.li(255 * c.pc(a, 0, 1));
		this.xv = Z.li(255 * c.pc(b, 0, 1));
		this.wv = Z.li(255 * c.pc(f, 0, 1))
	};
	Object.defineProperty(a.prototype, "r",
	{
		enumerable: !1,
		configurable: !0,
		set: function(a)
		{
			void 0 === a && (a = 0);
			this.yv = Z.li(255 * c.pc(a, 0, 1))
		}
	});
	Object.defineProperty(a.prototype, "g",
	{
		enumerable: !1,
		configurable: !0,
		set: function(a)
		{
			void 0 === a && (a = 0);
			this.xv = Z.li(255 * c.pc(a, 0, 1))
		}
	});
	Object.defineProperty(a.prototype, "b",
	{
		enumerable: !1,
		configurable: !0,
		set: function(a)
		{
			void 0 === a && (a = 0);
			this.wv = Z.li(255 * c.pc(a, 0, 1))
		}
	});
	Object.defineProperty(a.prototype, "color",
	{
		enumerable: !1,
		configurable: !0,
		get: function()
		{
			return this.yv << 16 | this.xv << 8 | this.wv
		}
	});
	b.ma = function() {};
	b.wK = function(a,
		b)
	{
		void 0 === a && (a = 0);
		void 0 === b && (b = 0);
		return Math.sqrt(a * b)
	};
	b.xK = function(a, b)
	{
		void 0 === a && (a = 0);
		void 0 === b && (b = 0);
		return a > b ? a : b
	};
	b.vO = function() {};
	Z.Dd.push(function()
	{
		Z.K.ma.VERSION = "2.1alpha";
		Z.K.ma.sO = 65535;
		Z.K.ma.Za = Math.PI;
		Z.K.ma.Xg = 2;
		Z.K.ma.Ov = .1;
		Z.K.ma.XD = 2;
		Z.K.ma.BO = 2 * b.hc;
		Z.K.ma.hc = .005;
		Z.K.ma.Sn = 2 / 180 * b.Za;
		Z.K.ma.Rv = 8 * b.hc;
		Z.K.ma.DK = 32;
		Z.K.ma.EK = 32;
		Z.K.ma.JK = 1;
		Z.K.ma.Wg = .2;
		Z.K.ma.Pv = 8 / 180 * b.Za;
		Z.K.ma.$p = 2;
		Z.K.ma.aE = b.$p * b.$p;
		Z.K.ma.Zp = .5 * b.Za;
		Z.K.ma.$D = b.Zp * b.Zp;
		Z.K.ma.Qz = .2;
		Z.K.ma.FK =
			.5;
		Z.K.ma.ZD = .01;
		Z.K.ma.YD = 2 / 180 * b.Za
	})
})();
(function()
{
	var a = Z.K.Math.Uk,
		b = Z.K.Math.Up,
		c = Z.K.Math.uh,
		d = Z.K.Math.zs,
		e = Z.K.Math.nm,
		f = Z.K.Math.Ua,
		g = Z.K.Math.Yp;
	a.Uk = function()
	{
		this.g = new f;
		this.h = new f
	};
	a.prototype.Uk = function()
	{
		this.uv()
	};
	a.av = function(b)
	{
		void 0 === b && (b = 0);
		var c = new a;
		c.Set(b);
		return c
	};
	a.Or = function(b, c)
	{
		var d = new a;
		d.fK(b, c);
		return d
	};
	a.prototype.Set = function(a)
	{
		void 0 === a && (a = 0);
		var b = Math.cos(a);
		a = Math.sin(a);
		this.g.x = b;
		this.h.x = -a;
		this.g.y = a;
		this.h.y = b
	};
	a.prototype.fK = function(a, b)
	{
		this.g.T(a);
		this.h.T(b)
	};
	a.prototype.nf =
		function()
		{
			var b = new a;
			b.En(this);
			return b
		};
	a.prototype.En = function(a)
	{
		this.g.T(a.g);
		this.h.T(a.h)
	};
	a.prototype.Xu = function(a)
	{
		this.g.x += a.g.x;
		this.g.y += a.g.y;
		this.h.x += a.h.x;
		this.h.y += a.h.y
	};
	a.prototype.uv = function()
	{
		this.g.x = 1;
		this.h.x = 0;
		this.g.y = 0;
		this.h.y = 1
	};
	a.prototype.eb = function()
	{
		this.g.x = 0;
		this.h.x = 0;
		this.g.y = 0;
		this.h.y = 0
	};
	a.prototype.Di = function()
	{
		return Math.atan2(this.g.y, this.g.x)
	};
	a.prototype.Fy = function(a)
	{
		var b = this.g.x,
			c = this.h.x,
			d = this.g.y,
			e = this.h.y,
			f = b * e - c * d;
		0 != f && (f = 1 / f);
		a.g.x =
			f * e;
		a.h.x = -f * c;
		a.g.y = -f * d;
		a.h.y = f * b
	};
	a.prototype.Fn = function(a, b, c)
	{
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		var d = this.g.x,
			e = this.h.x,
			f = this.g.y,
			g = this.h.y,
			k = d * g - e * f;
		0 != k && (k = 1 / k);
		a.x = k * (g * b - e * c);
		a.y = k * (d * c - f * b);
		return a
	};
	a.prototype.He = function()
	{
		this.g.He();
		this.h.He()
	};
	b.Up = function()
	{
		this.g = new g;
		this.h = new g;
		this.Va = new g
	};
	b.prototype.Up = function(a, b, c)
	{
		void 0 === a && (a = null);
		void 0 === b && (b = null);
		void 0 === c && (c = null);
		a || b || c ? (this.g.T(a), this.h.T(b), this.Va.T(c)) : (this.g.eb(), this.h.eb(), this.Va.eb())
	};
	b.prototype.nf = function()
	{
		return new b(this.g, this.h, this.Va)
	};
	b.prototype.En = function(a)
	{
		this.g.T(a.g);
		this.h.T(a.h);
		this.Va.T(a.Va)
	};
	b.prototype.Xu = function(a)
	{
		this.g.x += a.g.x;
		this.g.y += a.g.y;
		this.g.z += a.g.z;
		this.h.x += a.h.x;
		this.h.y += a.h.y;
		this.h.z += a.h.z;
		this.Va.x += a.Va.x;
		this.Va.y += a.Va.y;
		this.Va.z += a.Va.z
	};
	b.prototype.uv = function()
	{
		this.g.x = 1;
		this.h.x = 0;
		this.Va.x = 0;
		this.g.y = 0;
		this.h.y = 1;
		this.Va.y = 0;
		this.g.z = 0;
		this.h.z = 0;
		this.Va.z = 1
	};
	b.prototype.eb = function()
	{
		this.g.x = 0;
		this.h.x = 0;
		this.Va.x = 0;
		this.g.y = 0;
		this.h.y = 0;
		this.Va.y = 0;
		this.g.z = 0;
		this.h.z = 0;
		this.Va.z = 0
	};
	b.prototype.Mp = function(a, b, c)
	{
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		var d = this.g.x,
			e = this.h.x,
			f = this.g.y,
			g = this.h.y,
			k = d * g - e * f;
		0 != k && (k = 1 / k);
		a.x = k * (g * b - e * c);
		a.y = k * (d * c - f * b);
		return a
	};
	b.prototype.cs = function(a, b, c, d)
	{
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		void 0 === d && (d = 0);
		var e = this.g.x,
			f = this.g.y,
			g = this.g.z,
			k = this.h.x,
			h = this.h.y,
			l = this.h.z,
			p = this.Va.x,
			z = this.Va.y,
			A = this.Va.z,
			I = e * (h * A - l * z) + f * (l * p - k * A) + g * (k * z - h * p);
		0 != I && (I = 1 / I);
		a.x = I *
			(b * (h * A - l * z) + c * (l * p - k * A) + d * (k * z - h * p));
		a.y = I * (e * (c * A - d * z) + f * (d * p - b * A) + g * (b * z - c * p));
		a.z = I * (e * (h * d - l * c) + f * (l * b - k * d) + g * (k * c - h * b));
		return a
	};
	c.uh = function() {};
	c.Cp = function(a)
	{
		void 0 === a && (a = 0);
		return isFinite(a)
	};
	c.pf = function(a, b)
	{
		return a.x * b.x + a.y * b.y
	};
	c.zp = function(a, b)
	{
		return a.x * b.y - a.y * b.x
	};
	c.Yl = function(a, b)
	{
		void 0 === b && (b = 0);
		return new f(b * a.y, -b * a.x)
	};
	c.jD = function(a, b)
	{
		void 0 === a && (a = 0);
		return new f(-a * b.y, a * b.x)
	};
	c.cf = function(a, b)
	{
		return new f(a.g.x * b.x + a.h.x * b.y, a.g.y * b.x + a.h.y * b.y)
	};
	c.bm =
		function(a, b)
		{
			return new f(c.pf(b, a.g), c.pf(b, a.h))
		};
	c.qe = function(a, b)
	{
		var d = c.cf(a.M, b);
		d.x += a.position.x;
		d.y += a.position.y;
		return d
	};
	c.jJ = function(a, b)
	{
		var d = c.qd(b, a.position),
			e = d.x * a.M.g.x + d.y * a.M.g.y;
		d.y = d.x * a.M.h.x + d.y * a.M.h.y;
		d.x = e;
		return d
	};
	c.fD = function(a, b)
	{
		return new f(a.x + b.x, a.y + b.y)
	};
	c.qd = function(a, b)
	{
		return new f(a.x - b.x, a.y - b.y)
	};
	c.By = function(a, b)
	{
		var c = a.x - b.x,
			d = a.y - b.y;
		return Math.sqrt(c * c + d * d)
	};
	c.dO = function(a, b)
	{
		var c = a.x - b.x,
			d = a.y - b.y;
		return c * c + d * d
	};
	c.hO = function(a, b)
	{
		void 0 ===
			a && (a = 0);
		return new f(a * b.x, a * b.y)
	};
	c.WN = function(b, d)
	{
		return a.Or(c.fD(b.g, d.g), c.fD(b.h, d.h))
	};
	c.iO = function(b, d)
	{
		return a.Or(c.cf(b, d.g), c.cf(b, d.h))
	};
	c.jO = function(b, d)
	{
		var e = new f(c.pf(b.g, d.g), c.pf(b.h, d.g)),
			g = new f(c.pf(b.g, d.h), c.pf(b.h, d.h));
		return a.Or(e, g)
	};
	c.He = function(a)
	{
		void 0 === a && (a = 0);
		return 0 < a ? a : -a
	};
	c.cD = function(a)
	{
		return new f(c.He(a.x), c.He(a.y))
	};
	c.VN = function(b)
	{
		return a.Or(c.cD(b.g), c.cD(b.h))
	};
	c.Cn = function(a, b)
	{
		void 0 === a && (a = 0);
		void 0 === b && (b = 0);
		return a < b ? a : b
	};
	c.zD = function(a,
		b)
	{
		return new f(c.Cn(a.x, b.x), c.Cn(a.y, b.y))
	};
	c.If = function(a, b)
	{
		void 0 === a && (a = 0);
		void 0 === b && (b = 0);
		return a > b ? a : b
	};
	c.yD = function(a, b)
	{
		return new f(c.If(a.x, b.x), c.If(a.y, b.y))
	};
	c.pc = function(a, b, c)
	{
		void 0 === a && (a = 0);
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		return a < b ? b : a > c ? c : a
	};
	c.bO = function(a, b, d)
	{
		return c.yD(b, c.zD(a, d))
	};
	c.iK = function(a, b)
	{
		var c = a[0];
		a[0] = b[0];
		b[0] = c
	};
	c.qO = function()
	{
		return 2 * Math.random() - 1
	};
	c.rO = function(a, b)
	{
		void 0 === a && (a = 0);
		void 0 === b && (b = 0);
		return (b - a) * Math.random() + a
	};
	c.kO =
		function(a)
		{
			void 0 === a && (a = 0);
			a |= a >> 1 & 2147483647;
			a |= a >> 2 & 1073741823;
			a |= a >> 4 & 268435455;
			a |= a >> 8 & 16777215;
			return (a | a >> 16 & 65535) + 1
		};
	c.gO = function(a)
	{
		void 0 === a && (a = 0);
		return 0 < a && 0 == (a & a - 1)
	};
	Z.Dd.push(function()
	{
		Z.K.Math.uh.yK = new f(0, 0);
		Z.K.Math.uh.vK = a.Or(new f(1, 0), new f(0, 1));
		Z.K.Math.uh.xO = new e(c.yK, c.vK)
	});
	d.zs = function()
	{
		this.$ = new f;
		this.ff = new f;
		this.G = new f
	};
	d.prototype.Set = function(a)
	{
		this.$.T(a.$);
		this.ff.T(a.ff);
		this.G.T(a.G);
		this.Rh = a.Rh;
		this.X = a.X;
		this.Yf = a.Yf
	};
	d.prototype.nf = function()
	{
		var a =
			new d;
		a.$.T(this.$);
		a.ff.T(this.ff);
		a.G.T(this.G);
		a.Rh = this.Rh;
		a.X = this.X;
		a.Yf = this.Yf;
		return a
	};
	d.prototype.$f = function(a, b)
	{
		void 0 === b && (b = 0);
		a.position.x = (1 - b) * this.ff.x + b * this.G.x;
		a.position.y = (1 - b) * this.ff.y + b * this.G.y;
		a.M.Set((1 - b) * this.Rh + b * this.X);
		var c = a.M;
		a.position.x -= c.g.x * this.$.x + c.h.x * this.$.y;
		a.position.y -= c.g.y * this.$.x + c.h.y * this.$.y
	};
	d.prototype.Wl = function(a)
	{
		void 0 === a && (a = 0);
		if (this.Yf < a && 1 - this.Yf > Number.MIN_VALUE)
		{
			var b = (a - this.Yf) / (1 - this.Yf);
			this.ff.x = (1 - b) * this.ff.x + b * this.G.x;
			this.ff.y = (1 - b) * this.ff.y + b * this.G.y;
			this.Rh = (1 - b) * this.Rh + b * this.X;
			this.Yf = a
		}
	};
	e.nm = function()
	{
		this.position = new f;
		this.M = new a
	};
	e.prototype.nm = function(a, b)
	{
		void 0 === a && (a = null);
		void 0 === b && (b = null);
		a && (this.position.T(a), this.M.En(b))
	};
	e.prototype.Kb = function(a, b)
	{
		this.position.T(a);
		this.M.En(b)
	};
	e.prototype.uv = function()
	{
		this.position.eb();
		this.M.uv()
	};
	e.prototype.Set = function(a)
	{
		this.position.T(a.position);
		this.M.En(a.M)
	};
	e.prototype.Di = function()
	{
		return Math.atan2(this.M.g.y, this.M.g.x)
	};
	f.Ua =
		function() {};
	f.prototype.Ua = function(a, b)
	{
		void 0 === a && (a = 0);
		void 0 === b && (b = 0);
		this.x = a;
		this.y = b
	};
	f.prototype.eb = function()
	{
		this.y = this.x = 0
	};
	f.prototype.Set = function(a, b)
	{
		void 0 === a && (a = 0);
		void 0 === b && (b = 0);
		this.x = a;
		this.y = b
	};
	f.prototype.T = function(a)
	{
		this.x = a.x;
		this.y = a.y
	};
	f.prototype.Zl = function()
	{
		return new f(-this.x, -this.y)
	};
	f.prototype.BD = function()
	{
		this.x = -this.x;
		this.y = -this.y
	};
	f.hJ = function()
	{
		var a = 0,
			b = 0;
		void 0 === a && (a = 0);
		void 0 === b && (b = 0);
		return new f(a, b)
	};
	f.prototype.nf = function()
	{
		return new f(this.x,
			this.y)
	};
	f.prototype.wp = function(a)
	{
		this.x += a.x;
		this.y += a.y
	};
	f.prototype.QD = function(a)
	{
		this.x -= a.x;
		this.y -= a.y
	};
	f.prototype.cg = function(a)
	{
		void 0 === a && (a = 0);
		this.x *= a;
		this.y *= a
	};
	f.prototype.Yl = function(a)
	{
		void 0 === a && (a = 0);
		var b = this.x;
		this.x = a * this.y;
		this.y = -a * b
	};
	f.prototype.jD = function(a)
	{
		void 0 === a && (a = 0);
		var b = this.x;
		this.x = -a * this.y;
		this.y = a * b
	};
	f.prototype.zD = function(a)
	{
		this.x = this.x < a.x ? this.x : a.x;
		this.y = this.y < a.y ? this.y : a.y
	};
	f.prototype.yD = function(a)
	{
		this.x = this.x > a.x ? this.x : a.x;
		this.y =
			this.y > a.y ? this.y : a.y
	};
	f.prototype.He = function()
	{
		0 > this.x && (this.x = -this.x);
		0 > this.y && (this.y = -this.y)
	};
	f.prototype.Kk = function()
	{
		return Math.sqrt(this.x * this.x + this.y * this.y)
	};
	f.prototype.Ly = function()
	{
		return this.x * this.x + this.y * this.y
	};
	f.prototype.vg = function()
	{
		var a = Math.sqrt(this.x * this.x + this.y * this.y);
		if (a < Number.MIN_VALUE) return 0;
		var b = 1 / a;
		this.x *= b;
		this.y *= b;
		return a
	};
	f.prototype.Cp = function()
	{
		return c.Cp(this.x) && c.Cp(this.y)
	};
	g.Yp = function() {};
	g.prototype.Yp = function(a, b, c)
	{
		void 0 === a &&
			(a = 0);
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		this.x = a;
		this.y = b;
		this.z = c
	};
	g.prototype.eb = function()
	{
		this.x = this.y = this.z = 0
	};
	g.prototype.Set = function(a, b, c)
	{
		void 0 === a && (a = 0);
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		this.x = a;
		this.y = b;
		this.z = c
	};
	g.prototype.T = function(a)
	{
		this.x = a.x;
		this.y = a.y;
		this.z = a.z
	};
	g.prototype.Zl = function()
	{
		return new g(-this.x, -this.y, -this.z)
	};
	g.prototype.BD = function()
	{
		this.x = -this.x;
		this.y = -this.y;
		this.z = -this.z
	};
	g.prototype.nf = function()
	{
		return new g(this.x, this.y, this.z)
	};
	g.prototype.wp =
		function(a)
		{
			this.x += a.x;
			this.y += a.y;
			this.z += a.z
		};
	g.prototype.QD = function(a)
	{
		this.x -= a.x;
		this.y -= a.y;
		this.z -= a.z
	};
	g.prototype.cg = function(a)
	{
		void 0 === a && (a = 0);
		this.x *= a;
		this.y *= a;
		this.z *= a
	}
})();
(function()
{
	var a = Z.K.Math.uh,
		b = Z.K.Math.zs,
		c = Z.K.Math.nm,
		d = Z.K.Math.Ua,
		e = Z.K.Pp,
		f = Z.K.ma,
		g = Z.H.Cv,
		k = Z.H.Fv,
		h = Z.H.Jv,
		p = Z.H.cb.Kv,
		l = Z.i.Qc,
		r = Z.i.Nn,
		u = Z.i.Dv,
		q = Z.i.wz,
		v = Z.i.Ev,
		n = Z.i.Sp,
		w = Z.i.Vg,
		D = Z.i.Az,
		z = Z.i.Ez,
		A = Z.i.ls,
		I = Z.i.Dj,
		G = Z.i.Tp,
		R = Z.i.Nv,
		O = Z.i.xg,
		K = Z.i.pa.Ab,
		L = Z.i.pa.Qp,
		M = Z.i.pa.mm,
		N = Z.i.O.na;
	l.Qc = function()
	{
		this.L = new c;
		this.f = new b;
		this.o = new d;
		this.Wj = new d
	};
	l.prototype.Bi = function(a)
	{
		if (1 == this.Wd.Tr()) return null;
		var b = new A;
		b.tg(this, this.L, a);
		this.U & l.Qs && b.Lr(this.Wd.Of.uo, this.L);
		b.Na = this.Vj;
		this.Vj = b;
		++this.dB;
		b.s = this;
		0 < b.hf && this.bz();
		this.Wd.U |= O.rA;
		return b
	};
	l.prototype.TI = function(a)
	{
		if (1 != this.Wd.Tr())
		{
			for (var b = this.Vj, c = null; null != b;)
			{
				if (b == a)
				{
					c ? c.Na = a.Na : this.Vj = a.Na;
					break
				}
				c = b;
				b = b.Na
			}
			for (b = this.uc; b;)
			{
				var c = b.sd,
					b = b.next,
					d = c.ad;
				a != c.Wc && a != d || this.Wd.Of.he(c)
			}
			this.U & l.Qs && a.Ap(this.Wd.Of.uo);
			a.he();
			a.s = null;
			a.Na = null;
			--this.dB;
			this.bz()
		}
	};
	l.prototype.vv = function(a, b)
	{
		void 0 === b && (b = 0);
		var c;
		if (1 != this.Wd.Tr())
		{
			this.L.M.Set(b);
			this.L.position.T(a);
			c = this.L.M;
			var d =
				this.f.$;
			this.f.G.x = c.g.x * d.x + c.h.x * d.y;
			this.f.G.y = c.g.y * d.x + c.h.y * d.y;
			this.f.G.x += this.L.position.x;
			this.f.G.y += this.L.position.y;
			this.f.ff.T(this.f.G);
			this.f.Rh = this.f.X = b;
			d = this.Wd.Of.uo;
			for (c = this.Vj; c; c = c.Na) c.RD(d, this.L, this.L);
			this.Wd.Of.$u()
		}
	};
	l.prototype.$f = function()
	{
		return this.L
	};
	l.prototype.Di = function()
	{
		return this.f.X
	};
	l.prototype.Qh = function(a)
	{
		this.ha != l.Pd && this.o.T(a)
	};
	l.prototype.cK = function(a)
	{
		void 0 === a && (a = 0);
		this.ha != l.Pd && (this.R = a)
	};
	l.prototype.Xl = function(a)
	{
		this.ha == l.re &&
			(0 == this.ie() && this.Eb(!0), this.Wj.x += a.x, this.Wj.y += a.y)
	};
	l.prototype.aK = function()
	{
		this.ha == l.re && (0 == this.ie() && this.Eb(!0), this.Wj.x = 0, this.Wj.y = 0)
	};
	l.prototype.wy = function(a)
	{
		void 0 === a && (a = 0);
		this.ha == l.re && (0 == this.ie() && this.Eb(!0), this.Kt += a)
	};
	l.prototype.bK = function()
	{
		this.ha == l.re && (0 == this.ie() && this.Eb(!0), this.Kt = 0)
	};
	l.prototype.GI = function(a, b)
	{
		this.ha == l.re && (0 == this.ie() && this.Eb(!0), this.o.x += this.Y * a.x, this.o.y += this.Y * a.y, this.R += this.ja * ((b.x - this.f.G.x) * a.y - (b.y - this.f.G.y) *
			a.x))
	};
	l.prototype.qD = function(a)
	{
		a.ek = this.aa;
		a.Bp = this.ci;
		a.Oi.T(this.f.$)
	};
	l.prototype.bz = function()
	{
		this.ja = this.ci = this.Y = this.aa = 0;
		this.f.$.eb();
		if (this.ha != l.Pd && this.ha != l.CK)
		{
			for (var b = d.hJ(), c = this.Vj; c; c = c.Na)
				if (0 != c.hf)
				{
					var e = c.qD();
					this.aa += e.ek;
					b.x += e.Oi.x * e.ek;
					b.y += e.Oi.y * e.ek;
					this.ci += e.Bp
				} 0 < this.aa ? (this.Y = 1 / this.aa, b.x *= this.Y, b.y *= this.Y) : this.Y = this.aa = 1;
			0 < this.ci && 0 == (this.U & l.bF) ? (this.ci -= this.aa * (b.x * b.x + b.y * b.y), this.ci *= this.bM, this.ja = 1 / this.ci) : this.ja = this.ci = 0;
			c = this.f.G.nf();
			this.f.$.T(b);
			this.f.ff.T(a.qe(this.L, this.f.$));
			this.f.G.T(this.f.ff);
			this.o.x += this.R * -(this.f.G.y - c.y);
			this.o.y += this.R * +(this.f.G.x - c.x)
		}
	};
	l.prototype.ev = function(a)
	{
		var b = this.L.M;
		a = new d(b.g.x * a.x + b.h.x * a.y, b.g.y * a.x + b.h.y * a.y);
		a.x += this.L.position.x;
		a.y += this.L.position.y;
		return a
	};
	l.prototype.Iy = function(b)
	{
		return a.cf(this.L.M, b)
	};
	l.prototype.Zf = function(b)
	{
		return a.jJ(this.L, b)
	};
	l.prototype.Gy = function(b)
	{
		return a.bm(this.L.M, b)
	};
	l.prototype.YI = function(a)
	{
		return new d(this.o.x - this.R * (a.y -
			this.f.G.y), this.o.y + this.R * (a.x - this.f.G.x))
	};
	l.prototype.MD = function(a)
	{
		void 0 === a && (a = 0);
		this.bG = a
	};
	l.prototype.Uc = function()
	{
		return this.ha
	};
	l.prototype.fv = function()
	{
		return (this.U & l.nA) == l.nA
	};
	l.prototype.Eb = function(a)
	{
		a ? (this.U |= l.Rs, this.No = 0) : (this.U &= ~l.Rs, this.No = 0, this.o.eb(), this.R = 0, this.Wj.eb(), this.Kt = 0)
	};
	l.prototype.ie = function()
	{
		return (this.U & l.Rs) == l.Rs
	};
	l.prototype.wn = function()
	{
		return (this.U & l.Qs) == l.Qs
	};
	l.prototype.Ei = function()
	{
		return this.sl
	};
	l.prototype.cz = function(a)
	{
		this.sl =
			a
	};
	l.prototype.Qc = function(a, b)
	{
		this.U = 0;
		a.oE && (this.U |= l.nA);
		a.tF && (this.U |= l.bF);
		a.qK && (this.U |= l.mA);
		a.uK && (this.U |= l.Rs);
		a.active && (this.U |= l.Qs);
		this.Wd = b;
		this.L.position.T(a.position);
		this.L.M.Set(a.angle);
		this.f.$.eb();
		this.f.Yf = 1;
		this.f.Rh = this.f.X = a.angle;
		var c = this.L.M,
			d = this.f.$;
		this.f.G.x = c.g.x * d.x + c.h.x * d.y;
		this.f.G.y = c.g.y * d.x + c.h.y * d.y;
		this.f.G.x += this.L.position.x;
		this.f.G.y += this.L.position.y;
		this.f.ff.T(this.f.G);
		this.uc = this.Em = this.zd = null;
		this.bB = 0;
		this.Na = this.Ue = null;
		this.o.T(a.OF);
		this.R = a.tK;
		this.bG = a.NF;
		this.SL = a.rK;
		this.eB = a.HF;
		this.Wj.Set(0, 0);
		this.No = this.Kt = 0;
		this.ha = a.type;
		this.Y = this.ha == l.re ? this.aa = 1 : this.aa = 0;
		this.ja = this.ci = 0;
		this.bM = a.zL;
		this.sl = a.Pg;
		this.Vj = null;
		this.dB = 0
	};
	l.prototype.tv = function(a)
	{
		this.eB = a
	};
	l.prototype.SD = function()
	{
		var a = l.xN;
		a.M.Set(this.f.Rh);
		var b = a.M,
			c = this.f.$;
		a.position.x = this.f.ff.x - (b.g.x * c.x + b.h.x * c.y);
		a.position.y = this.f.ff.y - (b.g.y * c.x + b.h.y * c.y);
		c = this.Wd.Of.uo;
		for (b = this.Vj; b; b = b.Na) b.RD(c, a, this.L)
	};
	l.prototype.rd = function()
	{
		this.L.M.Set(this.f.X);
		var a = this.L.M,
			b = this.f.$;
		this.L.position.x = this.f.G.x - (a.g.x * b.x + a.h.x * b.y);
		this.L.position.y = this.f.G.y - (a.g.y * b.x + a.h.y * b.y)
	};
	l.prototype.bs = function(a)
	{
		if (this.ha != l.re && a.ha != l.re) return !1;
		for (var b = this.zd; b; b = b.next)
			if (b.Jh == a && 0 == b.gl.VF) return !1;
		return !0
	};
	l.prototype.Wl = function(a)
	{
		void 0 === a && (a = 0);
		this.f.Wl(a);
		this.f.G.T(this.f.ff);
		this.f.X = this.f.Rh;
		this.rd()
	};
	Z.Dd.push(function()
	{
		Z.i.Qc.xN = new c;
		Z.i.Qc.Qd = 1;
		Z.i.Qc.Rs = 2;
		Z.i.Qc.mA = 4;
		Z.i.Qc.nA = 8;
		Z.i.Qc.bF = 16;
		Z.i.Qc.Qs = 32;
		Z.i.Qc.Pd = 0;
		Z.i.Qc.CK =
			1;
		Z.i.Qc.re = 2
	});
	r.Nn = function()
	{
		this.position = new d;
		this.OF = new d
	};
	r.prototype.Nn = function()
	{
		this.Pg = null;
		this.position.Set(0, 0);
		this.angle = 0;
		this.OF.Set(0, 0);
		this.rK = this.NF = this.tK = 0;
		this.uK = this.qK = !0;
		this.oE = this.tF = !1;
		this.type = l.Pd;
		this.active = !0;
		this.zL = 1
	};
	u.Dv = function() {};
	u.prototype.bs = function(a, b)
	{
		var c = a.pD(),
			d = b.pD();
		return c.lo == d.lo && 0 != c.lo ? 0 < c.lo : 0 != (c.Mt & d.Gs) && 0 != (c.Gs & d.Mt)
	};
	Z.Dd.push(function()
	{
		Z.i.Dv.zK = new u
	});
	q.wz = function()
	{
		this.uM = new Rm(f.Xg);
		this.IN = new Rm(f.Xg)
	};
	v.Ev =
		function() {};
	v.prototype.DD = function() {};
	Z.Dd.push(function()
	{
		Z.i.Ev.AK = new v
	});
	n.Sp = function() {};
	n.prototype.Sp = function()
	{
		this.Wd = null;
		this.di = 0;
		this.XF = u.zK;
		this.tt = v.AK;
		this.WF = new L(this.Dm);
		this.uo = new h
	};
	n.prototype.FI = function(a, b)
	{
		var c = a instanceof A ? a : null,
			d = b instanceof A ? b : null,
			e = c.s,
			f = d.s;
		if (e != f)
		{
			for (var g = f.uc; g;)
			{
				if (g.Jh == e)
				{
					var t = g.sd.Wc,
						h = g.sd.ad;
					if (t == c && h == d || t == d && h == c) return
				}
				g = g.next
			}
			0 != f.bs(e) && 0 != this.XF.bs(c, d) && (g = this.WF.tg(c, d), c = g.Wc, d = g.ad, e = c.s, f = d.s, g.Ue = null, g.Na =
				this.Wd.uc, null != this.Wd.uc && (this.Wd.uc.Ue = g), this.Wd.uc = g, g.xf.sd = g, g.xf.Jh = f, g.xf.dd = null, g.xf.next = e.uc, null != e.uc && (e.uc.dd = g.xf), e.uc = g.xf, g.yf.sd = g, g.yf.Jh = e, g.yf.dd = null, g.yf.next = f.uc, null != f.uc && (f.uc.dd = g.yf), f.uc = g.yf, ++this.Wd.di)
		}
	};
	n.prototype.$u = function()
	{
		this.uo.mK(Z.oL(this, this.FI))
	};
	n.prototype.he = function(a)
	{
		var b = a.Wc.s,
			c = a.ad.s;
		a.Ue && (a.Ue.Na = a.Na);
		a.Na && (a.Na.Ue = a.Ue);
		a == this.Wd.uc && (this.Wd.uc = a.Na);
		a.xf.dd && (a.xf.dd.next = a.xf.next);
		a.xf.next && (a.xf.next.dd = a.xf.dd);
		a.xf ==
			b.uc && (b.uc = a.xf.next);
		a.yf.dd && (a.yf.dd.next = a.yf.next);
		a.yf.next && (a.yf.next.dd = a.yf.dd);
		a.yf == c.uc && (c.uc = a.yf.next);
		this.WF.he(a);
		--this.di
	};
	n.prototype.LI = function()
	{
		for (var a = this.Wd.uc; a;)
		{
			var b = a.Wc,
				c = a.ad,
				d = b.s,
				e = c.s;
			if (0 == d.ie() && 0 == e.ie()) a = a.Na;
			else
			{
				if (a.U & K.qA)
				{
					if (0 == e.bs(d))
					{
						b = a;
						a = b.Na;
						this.he(b);
						continue
					}
					if (0 == this.XF.bs(b, c))
					{
						b = a;
						a = b.Na;
						this.he(b);
						continue
					}
					a.U &= ~K.qA
				}
				0 == this.uo.gm(b.Ko, c.Ko) ? (b = a, a = b.Na, this.he(b)) : (a.TD(this.tt), a = a.Na)
			}
		}
	};
	Z.Dd.push(function()
	{
		Z.i.Sp.eQ = new k
	});
	w.Vg =
		function() {};
	w.prototype.Vg = function() {};
	Z.Dd.push(function()
	{
		Z.i.Vg.fP = 1;
		Z.i.Vg.cP = 2;
		Z.i.Vg.ZO = 4;
		Z.i.Vg.eP = 8;
		Z.i.Vg.$O = 16;
		Z.i.Vg.aP = 32
	});
	D.Az = function() {};
	z.Ez = function()
	{
		this.Gs = 1;
		this.Mt = 65535;
		this.lo = 0
	};
	z.prototype.nf = function()
	{
		var a = new z;
		a.Gs = this.Gs;
		a.Mt = this.Mt;
		a.lo = this.lo;
		return a
	};
	A.ls = function()
	{
		this.ZF = new z
	};
	A.prototype.Uc = function()
	{
		return this.Ob.Uc()
	};
	A.prototype.xn = function()
	{
		return this.cM
	};
	A.prototype.pD = function()
	{
		return this.ZF.nf()
	};
	A.prototype.Ei = function()
	{
		return this.sl
	};
	A.prototype.cz = function(a)
	{
		this.sl = a
	};
	A.prototype.qD = function(a)
	{
		void 0 === a && (a = null);
		null == a && (a = new p);
		this.Ob.Kr(a, this.hf);
		return a
	};
	A.prototype.Lp = function(a)
	{
		void 0 === a && (a = 0);
		this.hf = a
	};
	A.prototype.cm = function(a)
	{
		void 0 === a && (a = 0);
		this.Se = a
	};
	A.prototype.em = function(a)
	{
		void 0 === a && (a = 0);
		this.Ve = a
	};
	A.prototype.ls = function()
	{
		this.uq = new g;
		this.Ob = this.Na = this.s = this.sl = null;
		this.Ve = this.Se = this.hf = 0
	};
	A.prototype.tg = function(a, b, c)
	{
		this.sl = c.Pg;
		this.Se = c.$g;
		this.Ve = c.mh;
		this.s = a;
		this.Na = null;
		this.ZF =
			c.filter.nf();
		this.cM = c.GL;
		this.Ob = c.shape.nf();
		this.hf = c.sm
	};
	A.prototype.he = function()
	{
		this.Ob = null
	};
	A.prototype.Lr = function(a, b)
	{
		this.Ob.yp(this.uq, b);
		this.Ko = a.Lr(this.uq, this)
	};
	A.prototype.Ap = function(a)
	{
		null != this.Ko && (a.Ap(this.Ko), this.Ko = null)
	};
	A.prototype.RD = function(b, c, d)
	{
		if (this.Ko)
		{
			var e = new g,
				f = new g;
			this.Ob.yp(e, c);
			this.Ob.yp(f, d);
			this.uq.xp(e, f);
			c = a.qd(d.position, c.position);
			b.$y(this.Ko, this.uq, c)
		}
	};
	I.Dj = function()
	{
		this.filter = new z
	};
	I.prototype.Dj = function()
	{
		this.Pg = this.shape = null;
		this.$g = .2;
		this.sm = this.mh = 0;
		this.filter.Gs = 1;
		this.filter.Mt = 65535;
		this.filter.lo = 0;
		this.GL = !1
	};
	G.Tp = function() {};
	G.prototype.Tp = function()
	{
		this.Sj = new Qm;
		this.wq = new Qm;
		this.dj = new Qm
	};
	G.prototype.Kb = function(a, b, c, d, e, f)
	{
		void 0 === a && (a = 0);
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		this.UL = b;
		this.dM = c;
		this.Gg = this.di = this.Nf = 0;
		this.Dm = d;
		this.eM = e;
		this.vo = f;
		for (d = this.Sj.length; d < a; d++) this.Sj[d] = null;
		for (d = this.wq.length; d < b; d++) this.wq[d] = null;
		for (d = this.dj.length; d < c; d++) this.dj[d] = null
	};
	G.prototype.xy =
		function()
		{
			this.Gg = this.di = this.Nf = 0
		};
	G.prototype.Fn = function(b, c, d)
	{
		var e, g, h;
		for (e = 0; e < this.Nf; ++e) g = this.Sj[e], g.Uc() == l.re && (g.o.x += b.ob * (c.x * g.eB + g.Y * g.Wj.x), g.o.y += b.ob * (c.y * g.eB + g.Y * g.Wj.y), g.R += b.ob * g.ja * g.Kt, g.o.cg(a.pc(1 - b.ob * g.bG, 0, 1)), g.R *= a.pc(1 - b.ob * g.SL, 0, 1));
		this.vo.Kb(b, this.wq, this.di, this.Dm);
		c = this.vo;
		c.sh(b);
		for (e = 0; e < this.Gg; ++e) h = this.dj[e], h.sh(b);
		for (e = 0; e < b.yi; ++e)
		{
			for (g = 0; g < this.Gg; ++g) h = this.dj[g], h.Sg(b);
			c.Sg()
		}
		for (e = 0; e < this.Gg; ++e) h = this.dj[e], h.Dy();
		c.Dy();
		for (e = 0; e <
			this.Nf; ++e)
			if (g = this.Sj[e], g.Uc() != l.Pd)
			{
				var k = b.ob * g.o.x,
					t = b.ob * g.o.y;
				k * k + t * t > f.aE && (g.o.vg(), g.o.x = g.o.x * f.$p * b.Wh, g.o.y = g.o.y * f.$p * b.Wh);
				k = b.ob * g.R;
				k * k > f.$D && (g.R = 0 > g.R ? -f.Zp * b.Wh : f.Zp * b.Wh);
				g.f.ff.T(g.f.G);
				g.f.Rh = g.f.X;
				g.f.G.x += b.ob * g.o.x;
				g.f.G.y += b.ob * g.o.y;
				g.f.X += b.ob * g.R;
				g.rd()
			} for (e = 0; e < b.ni; ++e)
		{
			k = c.Rg(f.Qz);
			t = !0;
			for (g = 0; g < this.Gg; ++g) h = this.dj[g], h = h.Rg(f.Qz), t = t && h;
			if (k && t) break
		}
		this.GD(c.Tj);
		if (d)
		{
			d = Number.MAX_VALUE;
			c = f.ZD * f.ZD;
			k = f.YD * f.YD;
			for (e = 0; e < this.Nf; ++e) g = this.Sj[e], g.Uc() != l.Pd &&
				(0 == (g.U & l.mA) && (d = g.No = 0), 0 == (g.U & l.mA) || g.R * g.R > k || a.pf(g.o, g.o) > c ? d = g.No = 0 : (g.No += b.ob, d = a.Cn(d, g.No)));
			if (d >= f.FK)
				for (e = 0; e < this.Nf; ++e) g = this.Sj[e], g.Eb(!1)
		}
	};
	G.prototype.dz = function(a)
	{
		var b, c;
		this.vo.Kb(a, this.wq, this.di, this.Dm);
		var d = this.vo;
		for (b = 0; b < this.Gg; ++b) this.dj[b].sh(a);
		for (b = 0; b < a.yi; ++b)
			for (d.Sg(), c = 0; c < this.Gg; ++c) this.dj[c].Sg(a);
		for (b = 0; b < this.Nf; ++b)
			if (c = this.Sj[b], c.Uc() != l.Pd)
			{
				var e = a.ob * c.o.x,
					g = a.ob * c.o.y;
				e * e + g * g > f.aE && (c.o.vg(), c.o.x = c.o.x * f.$p * a.Wh, c.o.y = c.o.y * f.$p * a.Wh);
				e = a.ob * c.R;
				e * e > f.$D && (c.R = 0 > c.R ? -f.Zp * a.Wh : f.Zp * a.Wh);
				c.f.ff.T(c.f.G);
				c.f.Rh = c.f.X;
				c.f.G.x += a.ob * c.o.x;
				c.f.G.y += a.ob * c.o.y;
				c.f.X += a.ob * c.R;
				c.rd()
			} for (b = 0; b < a.ni; ++b)
		{
			e = d.Rg(.75);
			g = !0;
			for (c = 0; c < this.Gg; ++c) var h = this.dj[c].Rg(f.Qz),
				g = g && h;
			if (e && g) break
		}
		this.GD(d.Tj)
	};
	G.prototype.GD = function(a)
	{
		if (null != this.eM)
			for (var b = 0; b < this.di; ++b)
				for (var c = a[b], d = 0; d < c.mi; ++d) G.aI.uM[d] = c.Wf[d].xe, G.aI.IN[d] = c.Wf[d].Ek
	};
	G.prototype.vy = function(a)
	{
		a.GP = this.Nf;
		this.Sj[this.Nf++] = a
	};
	G.prototype.dD = function(a)
	{
		this.wq[this.di++] =
			a
	};
	G.prototype.eD = function(a)
	{
		this.dj[this.Gg++] = a
	};
	Z.Dd.push(function()
	{
		Z.i.Tp.aI = new q
	});
	R.Nv = function() {};
	R.prototype.Set = function(a)
	{
		this.ob = a.ob;
		this.Wh = a.Wh;
		this.ni = a.ni;
		this.yi = a.yi;
		this.Ai = a.Ai
	};
	O.xg = function()
	{
		this.qN = new Qm;
		this.Of = new n;
		this.vo = new M;
		this.aG = new G
	};
	O.prototype.xg = function(a, b)
	{
		this.Em = this.zd = this.uc = this.wd = null;
		this.bB = this.Gg = this.di = this.Nf = 0;
		O.mM = !0;
		O.VL = !0;
		this.RL = b;
		this.wf = a;
		this.$F = 0;
		this.Of.Wd = this;
		var c = new r;
		this.aM = this.yj(c)
	};
	O.prototype.Zr = function(a)
	{
		this.Of.tt =
			a
	};
	O.prototype.yj = function(a)
	{
		if (1 == this.Tr()) return null;
		a = new l(a, this);
		a.Ue = null;
		if (a.Na = this.wd) this.wd.Ue = a;
		this.wd = a;
		++this.Nf;
		return a
	};
	O.prototype.kD = function(a)
	{
		if (1 != this.Tr())
		{
			for (var b = a.zd; b;)
			{
				var c = b,
					b = b.next;
				this.Mr(c.gl)
			}
			for (b = a.Em; b;) c = b, b = b.wl, c.controller.ED(a);
			for (b = a.uc; b;) c = b, b = b.next, this.Of.he(c.sd);
			a.uc = null;
			for (b = a.Vj; b;) c = b, b = b.Na, c.Ap(this.Of.uo), c.he();
			a.Vj = null;
			a.dB = 0;
			a.Ue && (a.Ue.Na = a.Na);
			a.Na && (a.Na.Ue = a.Ue);
			a == this.wd && (this.wd = a.Na);
			--this.Nf
		}
	};
	O.prototype.fc = function(a)
	{
		var b =
			N.tg(a, null);
		b.Ue = null;
		if (b.Na = this.zd) this.zd.Ue = b;
		this.zd = b;
		++this.Gg;
		b.kg.gl = b;
		b.kg.Jh = b.Da;
		b.kg.dd = null;
		if (b.kg.next = b.Pa.zd) b.Pa.zd.dd = b.kg;
		b.Pa.zd = b.kg;
		b.lg.gl = b;
		b.lg.Jh = b.Pa;
		b.lg.dd = null;
		if (b.lg.next = b.Da.zd) b.Da.zd.dd = b.lg;
		b.Da.zd = b.lg;
		var c = a.Ub,
			d = a.ic;
		if (0 == a.rf)
			for (a = d.uc; a;) a.Jh == c && a.sd.mD(), a = a.next;
		return b
	};
	O.prototype.Mr = function(a)
	{
		var b = a.VF;
		a.Ue && (a.Ue.Na = a.Na);
		a.Na && (a.Na.Ue = a.Ue);
		a == this.zd && (this.zd = a.Na);
		var c = a.Pa,
			d = a.Da;
		c.Eb(!0);
		d.Eb(!0);
		a.kg.dd && (a.kg.dd.next = a.kg.next);
		a.kg.next && (a.kg.next.dd = a.kg.dd);
		a.kg == c.zd && (c.zd = a.kg.next);
		a.kg.dd = null;
		a.kg.next = null;
		a.lg.dd && (a.lg.dd.next = a.lg.next);
		a.lg.next && (a.lg.next.dd = a.lg.dd);
		a.lg == d.zd && (d.zd = a.lg.next);
		a.lg.dd = null;
		a.lg.next = null;
		N.he(a, null);
		--this.Gg;
		if (0 == b)
			for (a = d.uc; a;) a.Jh == c && a.sd.mD(), a = a.next
	};
	O.prototype.dm = function(a)
	{
		this.wf = a
	};
	O.prototype.fm = function(a, b, c)
	{
		void 0 === a && (a = 0);
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		this.U & O.rA && (this.Of.$u(), this.U &= ~O.rA);
		var d = O.uN;
		d.ob = a;
		d.yi = b;
		d.ni = c;
		d.Wh = 0 < a ? 1 / a : 0;
		d.Fd = this.$F * a;
		d.Ai = O.mM;
		this.Of.LI();
		0 < d.ob && this.Fn(d);
		O.VL && 0 < d.ob && this.dz(d);
		0 < d.ob && (this.$F = d.Wh);
		this.U &= ~O.fF
	};
	O.prototype.Tr = function()
	{
		return 0 < (this.U & O.fF)
	};
	O.prototype.Fn = function(a)
	{
		for (var b, c = this.Em; c; c = c.Na) c.fm(a);
		c = this.aG;
		c.Kb(this.Nf, this.di, this.Gg, null, this.Of.tt, this.vo);
		for (b = this.wd; b; b = b.Na) b.U &= ~l.Qd;
		for (var d = this.uc; d; d = d.Na) d.U &= ~K.Qd;
		for (d = this.zd; d; d = d.Na) d.Ao = !1;
		for (var d = this.qN, e = this.wd; e; e = e.Na)
			if (!(e.U & l.Qd) && 0 != e.ie() && 0 != e.wn() && e.Uc() != l.Pd)
			{
				c.xy();
				var f =
					0;
				d[f++] = e;
				for (e.U |= l.Qd; 0 < f;)
					if (b = d[--f], c.vy(b), 0 == b.ie() && b.Eb(!0), b.Uc() != l.Pd)
					{
						for (var g, h = b.uc; h; h = h.next) h.sd.U & K.Qd || 1 == h.sd.xn() || 0 == h.sd.gv() || 0 == h.sd.Ky() || (c.dD(h.sd), h.sd.U |= K.Qd, g = h.Jh, g.U & l.Qd || (d[f++] = g, g.U |= l.Qd));
						for (b = b.zd; b; b = b.next) 1 != b.gl.Ao && (g = b.Jh, 0 != g.wn() && (c.eD(b.gl), b.gl.Ao = !0, g.U & l.Qd || (d[f++] = g, g.U |= l.Qd)))
					} c.Fn(a, this.wf, this.RL);
				for (f = 0; f < c.Nf; ++f) b = c.Sj[f], b.Uc() == l.Pd && (b.U &= ~l.Qd)
			} for (f = 0; f < d.length && d[f]; ++f) d[f] = null;
		for (b = this.wd; b; b = b.Na) 0 != b.ie() && 0 != b.wn() &&
			b.Uc() != l.Pd && b.SD();
		this.Of.$u()
	};
	O.prototype.dz = function(a)
	{
		var b, c, d, e = this.aG;
		e.Kb(this.Nf, f.DK, f.EK, null, this.Of.tt, this.vo);
		var g = O.mN;
		for (b = this.wd; b; b = b.Na) b.U &= ~l.Qd, b.f.Yf = 0;
		for (d = this.uc; d; d = d.Na) d.U &= ~(K.jq | K.Qd);
		for (d = this.zd; d; d = d.Na) d.Ao = !1;
		for (;;)
		{
			var h = null,
				k = 1;
			for (d = this.uc; d; d = d.Na)
				if (1 != d.xn() && 0 != d.gv() && 0 != d.eJ())
				{
					if (d.U & K.jq) b = d.lM;
					else
					{
						b = d.Wc;
						c = d.ad;
						b = b.s;
						c = c.s;
						if (!(b.Uc() == l.re && 0 != b.ie() || c.Uc() == l.re && 0 != c.ie())) continue;
						var t = b.f.Yf;
						b.f.Yf < c.f.Yf ? (t = c.f.Yf, b.f.Wl(t)) : c.f.Yf <
							b.f.Yf && (t = b.f.Yf, c.f.Wl(t));
						b = d.SI(b.f, c.f);
						0 < b && 1 > b && (b = (1 - b) * t + b, 1 < b && (b = 1));
						d.lM = b;
						d.U |= K.jq
					}
					Number.MIN_VALUE < b && b < k && (h = d, k = b)
				} if (null == h || 1 - 100 * Number.MIN_VALUE < k) break;
			b = h.Wc;
			c = h.ad;
			b = b.s;
			c = c.s;
			O.YH.Set(b.f);
			O.ZH.Set(c.f);
			b.Wl(k);
			c.Wl(k);
			h.TD(this.Of.tt);
			h.U &= ~K.jq;
			if (1 == h.xn() || 0 == h.gv()) b.f.Set(O.YH), c.f.Set(O.ZH), b.rd(), c.rd();
			else if (0 != h.Ky())
			{
				b.Uc() != l.re && (b = c);
				e.xy();
				h = d = 0;
				g[d + h++] = b;
				for (b.U |= l.Qd; 0 < h;)
					if (b = g[d++], --h, e.vy(b), 0 == b.ie() && b.Eb(!0), b.Uc() == l.re)
					{
						for (c = b.uc; c && e.di != e.UL; c =
							c.next) c.sd.U & K.Qd || 1 == c.sd.xn() || 0 == c.sd.gv() || 0 == c.sd.Ky() || (e.dD(c.sd), c.sd.U |= K.Qd, t = c.Jh, t.U & l.Qd || (t.Uc() != l.Pd && (t.Wl(k), t.Eb(!0)), g[d + h] = t, ++h, t.U |= l.Qd));
						for (b = b.zd; b; b = b.next) e.Gg != e.dM && 1 != b.gl.Ao && (t = b.Jh, 0 != t.wn() && (e.eD(b.gl), b.gl.Ao = !0, t.U & l.Qd || (t.Uc() != l.Pd && (t.Wl(k), t.Eb(!0)), g[d + h] = t, ++h, t.U |= l.Qd)))
					} d = O.tN;
				d.Ai = !1;
				d.ob = (1 - k) * a.ob;
				d.Wh = 1 / d.ob;
				d.Fd = 0;
				d.yi = a.yi;
				d.ni = a.ni;
				e.dz(d);
				for (k = 0; k < e.Nf; ++k)
					if (b = e.Sj[k], b.U &= ~l.Qd, 0 != b.ie() && b.Uc() == l.re)
						for (b.SD(), c = b.uc; c; c = c.next) c.sd.U &=
							~K.jq;
				for (k = 0; k < e.di; ++k) d = e.wq[k], d.U &= ~(K.jq | K.Qd);
				for (k = 0; k < e.Gg; ++k) d = e.dj[k], d.Ao = !1;
				this.Of.$u()
			}
		}
	};
	Z.Dd.push(function()
	{
		Z.i.xg.uN = new R;
		Z.i.xg.hQ = new c;
		Z.i.xg.YH = new b;
		Z.i.xg.ZH = new b;
		Z.i.xg.tN = new R;
		Z.i.xg.mN = new Qm;
		Z.i.xg.fQ = new e(.5, .8, .8);
		Z.i.xg.rA = 1;
		Z.i.xg.fF = 2
	})
})();
(function()
{
	var a = Z.H.cb.lm,
		b = Z.H.cb.vh,
		c = Z.H.cb.Hc,
		d = Z.i.pa.rz,
		e = Z.i.pa.Ab,
		f = Z.i.pa.fs,
		g = Z.i.pa.uz,
		k = Z.i.pa.vz,
		h = Z.i.pa.Qp,
		p = Z.i.pa.xz,
		l = Z.i.pa.yz,
		r = Z.i.pa.mm,
		u = Z.i.pa.Dz,
		q = Z.i.pa.vs,
		v = Z.i.pa.Jz,
		n = Z.i.pa.Kz,
		w = Z.i.pa.Lz,
		D = Z.i.pa.Pn,
		z = Z.i.Qc,
		A = Z.i.Nv,
		I = Z.K.ma,
		G = Z.K.Math.Uk,
		R = Z.K.Math.uh,
		O = Z.K.Math.Ua,
		K = Z.H.ef,
		L = Z.H.Rp,
		M = Z.H.Tk,
		N = Z.H.wg,
		t = Z.H.Mv,
		C = Z.H.Rn;
	Z.tc(d, Z.i.pa.Ab);
	d.prototype.va = Z.i.pa.Ab.prototype;
	d.rz = function()
	{
		Z.i.pa.Ab.Ab.apply(this, arguments)
	};
	d.tg = function()
	{
		return new d
	};
	d.he = function() {};
	d.prototype.Jf = function(a, b)
	{
		this.va.Jf.call(this, a, b)
	};
	d.prototype.Ci = function()
	{
		K.MI(this.eh, this.Wc.Ob instanceof a ? this.Wc.Ob : null, this.Wc.s.L, this.ad.Ob instanceof a ? this.ad.Ob : null, this.ad.s.L)
	};
	e.Ab = function()
	{
		this.xf = new k;
		this.yf = new k;
		this.eh = new M;
		this.Ct = new M
	};
	e.prototype.bJ = function(a)
	{
		var b = this.ad.s,
			c = this.Wc.Ob,
			d = this.ad.Ob;
		a.Kb(this.eh, this.Wc.s.$f(), c.sb, b.$f(), d.sb)
	};
	e.prototype.Ky = function()
	{
		return (this.U & e.kq) == e.kq
	};
	e.prototype.eJ = function()
	{
		return (this.U & e.Ss) == e.Ss
	};
	e.prototype.xn =
		function()
		{
			return (this.U & e.Us) == e.Us
		};
	e.prototype.bb = function()
	{
		this.U &= ~e.Ts
	};
	e.prototype.gv = function()
	{
		return (this.U & e.Ts) == e.Ts
	};
	e.prototype.mD = function()
	{
		this.U |= e.qA
	};
	e.prototype.Ab = function() {};
	e.prototype.Jf = function(a, b)
	{
		void 0 === a && (a = null);
		void 0 === b && (b = null);
		this.U = e.Ts;
		if (a && b)
		{
			if (a.xn() || b.xn()) this.U |= e.Us;
			var c = a.s,
				d = b.s;
			if (c.Uc() != z.re || c.fv() || d.Uc() != z.re || d.fv()) this.U |= e.Ss;
			this.Wc = a;
			this.ad = b;
			this.eh.Vd = 0;
			this.Na = this.Ue = null;
			this.xf.sd = null;
			this.xf.dd = null;
			this.xf.next = null;
			this.xf.Jh = null;
			this.yf.sd = null;
			this.yf.dd = null;
			this.yf.next = null;
			this.yf.Jh = null
		}
		else this.ad = this.Wc = null
	};
	e.prototype.TD = function(a)
	{
		var b = this.Ct;
		this.Ct = this.eh;
		this.eh = b;
		this.U |= e.Ts;
		var d = !1,
			f = (this.U & e.kq) == e.kq,
			g = this.Wc.s,
			b = this.ad.s,
			h = this.Wc.uq.gm(this.ad.uq);
		if (this.U & e.Us) h && (d = this.Wc.Ob, f = this.ad.Ob, g = g.$f(), b = b.$f(), d = c.gm(d, g, f, b)), this.eh.Vd = 0;
		else
		{
			this.U = g.Uc() != z.re || g.fv() || b.Uc() != z.re || b.fv() ? this.U | e.Ss : this.U & ~e.Ss;
			if (h)
				for (this.Ci(), d = 0 < this.eh.Vd, h = 0; h < this.eh.Vd; ++h)
				{
					var k =
						this.eh.Fb[h];
					k.Fo = 0;
					k.Oo = 0;
					for (var t = k.nl, B = 0; B < this.Ct.Vd; ++B)
					{
						var C = this.Ct.Fb[B];
						if (C.nl.key == t.key)
						{
							k.Fo = C.Fo;
							k.Oo = C.Oo;
							break
						}
					}
				}
			else this.eh.Vd = 0;
			d != f && (g.Eb(!0), b.Eb(!0))
		}
		this.U = d ? this.U | e.kq : this.U & ~e.kq;
		0 == (this.U & e.Us) && a.DD(this, this.Ct)
	};
	e.prototype.Ci = function() {};
	e.prototype.SI = function(a, b)
	{
		e.xr.nk.Set(this.Wc.Ob);
		e.xr.pk.Set(this.ad.Ob);
		e.xr.mI = a;
		e.xr.nI = b;
		e.xr.KN = I.hc;
		return N.kK(e.xr)
	};
	Z.Dd.push(function()
	{
		Z.i.pa.Ab.Us = 1;
		Z.i.pa.Ab.Ss = 2;
		Z.i.pa.Ab.Qd = 4;
		Z.i.pa.Ab.jq = 8;
		Z.i.pa.Ab.kq = 16;
		Z.i.pa.Ab.Ts = 32;
		Z.i.pa.Ab.qA = 64;
		Z.i.pa.Ab.xr = new t
	});
	f.fs = function()
	{
		this.Kw = new O;
		this.Rj = new O;
		this.Hh = new O;
		this.Nq = new G;
		this.bf = new G
	};
	f.prototype.fs = function()
	{
		this.Wf = new Qm(I.Xg);
		for (var a = 0; a < I.Xg; a++) this.Wf[a] = new g
	};
	g.uz = function()
	{
		this.Rj = new O;
		this.Rb = new O;
		this.Sb = new O
	};
	k.vz = function() {};
	h.Qp = function() {};
	h.prototype.Qp = function(a)
	{
		this.Dm = a;
		this.dJ()
	};
	h.prototype.Jr = function(a, b, c, d)
	{
		void 0 === c && (c = 0);
		void 0 === d && (d = 0);
		this.ck[c][d].HE = a;
		this.ck[c][d].VE = b;
		this.ck[c][d].vH = !0;
		c !=
			d && (this.ck[d][c].HE = a, this.ck[d][c].VE = b, this.ck[d][c].vH = !1)
	};
	h.prototype.dJ = function()
	{
		this.ck = new Qm(c.iw);
		for (var a = 0; a < c.iw; a++)
		{
			this.ck[a] = new Qm(c.iw);
			for (var b = 0; b < c.iw; b++) this.ck[a][b] = new p
		}
		this.Jr(d.tg, d.he, c.hq, c.hq);
		this.Jr(v.tg, v.he, c.iq, c.hq);
		this.Jr(w.tg, w.he, c.iq, c.iq);
		this.Jr(u.tg, u.he, c.pA, c.hq);
		this.Jr(n.tg, n.he, c.iq, c.pA)
	};
	h.prototype.tg = function(a, b)
	{
		var c = this.ck[parseInt(a.Uc())][parseInt(b.Uc())],
			d;
		if (c.vx) return d = c.vx, c.vx = d.Na, c.GM--, d.Jf(a, b), d;
		d = c.HE;
		return null != d ?
			(c.vH ? (d = d(this.Dm), d.Jf(a, b)) : (d = d(this.Dm), d.Jf(b, a)), d) : null
	};
	h.prototype.he = function(a)
	{
		0 < a.eh.Vd && (a.Wc.s.Eb(!0), a.ad.s.Eb(!0));
		var b = this.ck[parseInt(a.Wc.Uc())][parseInt(a.ad.Uc())];
		b.GM++;
		a.Na = b.vx;
		b.vx = a;
		b = b.VE;
		b(a, this.Dm)
	};
	p.xz = function() {};
	l.yz = function()
	{
		this.position = new O;
		this.Hh = new O;
		this.id = new L
	};
	r.mm = function()
	{
		this.kM = new A;
		this.Tj = new Qm
	};
	r.prototype.mm = function() {};
	r.prototype.Kb = function(a, b, c, d)
	{
		void 0 === c && (c = 0);
		var e;
		this.kM.Set(a);
		this.Dm = d;
		for (this.st = c; this.Tj.length <
			this.st;) this.Tj[this.Tj.length] = new f;
		for (a = 0; a < c; ++a)
		{
			e = b[a];
			d = e.Wc;
			var g = e.ad,
				h = d.Ob.sb,
				k = g.Ob.sb,
				t = d.s,
				B = g.s,
				C = e.eh,
				l = I.wK(d.Se, g.Se),
				J = I.xK(d.Ve, g.Ve),
				n = t.o.x,
				p = t.o.y,
				H = B.o.x,
				q = B.o.y,
				U = t.R,
				u = B.R;
			r.qp.Kb(C, t.L, h, B.L, k);
			g = r.qp.kb.x;
			e = r.qp.kb.y;
			d = this.Tj[a];
			d.Ub = t;
			d.ic = B;
			d.nM = C;
			d.Hh.x = g;
			d.Hh.y = e;
			d.mi = C.Vd;
			d.$g = l;
			d.mh = J;
			d.Kw.x = C.jf.x;
			d.Kw.y = C.jf.y;
			d.Rj.x = C.zb.x;
			d.Rj.y = C.zb.y;
			d.qg = h + k;
			d.type = C.ha;
			for (h = 0; h < d.mi; ++h)
			{
				l = C.Fb[h];
				k = d.Wf[h];
				k.xe = l.Fo;
				k.Ek = l.Oo;
				k.Rj.T(l.zb);
				var l = k.Rb.x = r.qp.Fb[h].x - t.f.G.x,
					J = k.Rb.y = r.qp.Fb[h].y - t.f.G.y,
					v = k.Sb.x = r.qp.Fb[h].x - B.f.G.x,
					w = k.Sb.y = r.qp.Fb[h].y - B.f.G.y,
					z = l * e - J * g,
					A = v * e - w * g,
					z = z * z,
					A = A * A;
				k.Nq = 1 / (t.Y + B.Y + t.ja * z + B.ja * A);
				var D = t.aa * t.Y + B.aa * B.Y,
					D = D + (t.aa * t.ja * z + B.aa * B.ja * A);
				k.hL = 1 / D;
				A = e;
				D = -g;
				z = l * D - J * A;
				A = v * D - w * A;
				z *= z;
				A *= A;
				k.JN = 1 / (t.Y + B.Y + t.ja * z + B.ja * A);
				k.Ou = 0;
				l = d.Hh.x * (H + -u * w - n - -U * J) + d.Hh.y * (q + u * v - p - U * l);
				l < -I.JK && (k.Ou += -d.mh * l)
			}
			2 == d.mi && (q = d.Wf[0], H = d.Wf[1], C = t.Y, t = t.ja, n = B.Y, B = B.ja, p = q.Rb.x * e - q.Rb.y * g, q = q.Sb.x * e - q.Sb.y * g, U = H.Rb.x * e - H.Rb.y * g, H = H.Sb.x * e - H.Sb.y * g,
				g = C + n + t * p * p + B * q * q, e = C + n + t * U * U + B * H * H, B = C + n + t * p * U + B * q * H, g * g < 100 * (g * e - B * B) ? (d.bf.g.Set(g, B), d.bf.h.Set(B, e), d.bf.Fy(d.Nq)) : d.mi = 1)
		}
	};
	r.prototype.sh = function(a)
	{
		for (var b = 0; b < this.st; ++b)
		{
			var c = this.Tj[b],
				d = c.Ub,
				e = c.ic,
				f = d.Y,
				g = d.ja,
				h = e.Y,
				k = e.ja,
				t = c.Hh.x,
				B = c.Hh.y,
				C = B,
				l = -t,
				n, p;
			if (a.Ai)
				for (p = c.mi, n = 0; n < p; ++n)
				{
					var q = c.Wf[n];
					q.xe *= a.Fd;
					q.Ek *= a.Fd;
					var r = q.xe * t + q.Ek * C,
						u = q.xe * B + q.Ek * l;
					d.R -= g * (q.Rb.x * u - q.Rb.y * r);
					d.o.x -= f * r;
					d.o.y -= f * u;
					e.R += k * (q.Sb.x * u - q.Sb.y * r);
					e.o.x += h * r;
					e.o.y += h * u
				}
			else
				for (p = c.mi, n = 0; n < p; ++n) d =
					c.Wf[n], d.xe = 0, d.Ek = 0
		}
	};
	r.prototype.Sg = function()
	{
		for (var a, b, c, d, e, f, g, h, k, t, C = 0; C < this.st; ++C)
		{
			e = this.Tj[C];
			var l = e.Ub,
				n = e.ic,
				q = l.R,
				p = n.R,
				r = l.o,
				u = n.o,
				v = l.Y,
				w = l.ja,
				z = n.Y,
				A = n.ja;
			h = e.Hh.x;
			var D = k = e.Hh.y;
			t = -h;
			g = e.$g;
			for (a = 0; a < e.mi; a++) b = e.Wf[a], c = u.x - p * b.Sb.y - r.x + q * b.Rb.y, d = u.y + p * b.Sb.x - r.y - q * b.Rb.x, c = c * D + d * t, c = b.JN * -c, d = g * b.xe, d = R.pc(b.Ek + c, -d, d), c = d - b.Ek, f = c * D, c *= t, r.x -= v * f, r.y -= v * c, q -= w * (b.Rb.x * c - b.Rb.y * f), u.x += z * f, u.y += z * c, p += A * (b.Sb.x * c - b.Sb.y * f), b.Ek = d;
			if (1 == e.mi) b = e.Wf[0], c = u.x + -p * b.Sb.y - r.x -
				-q * b.Rb.y, d = u.y + p * b.Sb.x - r.y - q * b.Rb.x, e = c * h + d * k, c = -b.Nq * (e - b.Ou), d = b.xe + c, d = 0 < d ? d : 0, c = d - b.xe, f = c * h, c *= k, r.x -= v * f, r.y -= v * c, q -= w * (b.Rb.x * c - b.Rb.y * f), u.x += z * f, u.y += z * c, p += A * (b.Sb.x * c - b.Sb.y * f), b.xe = d;
			else
			{
				b = e.Wf[0];
				a = e.Wf[1];
				c = b.xe;
				g = a.xe;
				var G = (u.x - p * b.Sb.y - r.x + q * b.Rb.y) * h + (u.y + p * b.Sb.x - r.y - q * b.Rb.x) * k,
					I = (u.x - p * a.Sb.y - r.x + q * a.Rb.y) * h + (u.y + p * a.Sb.x - r.y - q * a.Rb.x) * k;
				d = G - b.Ou;
				f = I - a.Ou;
				t = e.bf;
				d -= t.g.x * c + t.h.x * g;
				for (f -= t.g.y * c + t.h.y * g;;)
				{
					t = e.Nq;
					D = -(t.g.x * d + t.h.x * f);
					t = -(t.g.y * d + t.h.y * f);
					if (0 <= D && 0 <= t)
					{
						c = D -
							c;
						g = t - g;
						e = c * h;
						c *= k;
						h *= g;
						k *= g;
						r.x -= v * (e + h);
						r.y -= v * (c + k);
						q -= w * (b.Rb.x * c - b.Rb.y * e + a.Rb.x * k - a.Rb.y * h);
						u.x += z * (e + h);
						u.y += z * (c + k);
						p += A * (b.Sb.x * c - b.Sb.y * e + a.Sb.x * k - a.Sb.y * h);
						b.xe = D;
						a.xe = t;
						break
					}
					D = -b.Nq * d;
					t = 0;
					I = e.bf.g.y * D + f;
					if (0 <= D && 0 <= I)
					{
						c = D - c;
						g = t - g;
						e = c * h;
						c *= k;
						h *= g;
						k *= g;
						r.x -= v * (e + h);
						r.y -= v * (c + k);
						q -= w * (b.Rb.x * c - b.Rb.y * e + a.Rb.x * k - a.Rb.y * h);
						u.x += z * (e + h);
						u.y += z * (c + k);
						p += A * (b.Sb.x * c - b.Sb.y * e + a.Sb.x * k - a.Sb.y * h);
						b.xe = D;
						a.xe = t;
						break
					}
					D = 0;
					t = -a.Nq * f;
					G = e.bf.h.x * t + d;
					if (0 <= t && 0 <= G)
					{
						c = D - c;
						g = t - g;
						e = c * h;
						c *= k;
						h *= g;
						k *= g;
						r.x -=
							v * (e + h);
						r.y -= v * (c + k);
						q -= w * (b.Rb.x * c - b.Rb.y * e + a.Rb.x * k - a.Rb.y * h);
						u.x += z * (e + h);
						u.y += z * (c + k);
						p += A * (b.Sb.x * c - b.Sb.y * e + a.Sb.x * k - a.Sb.y * h);
						b.xe = D;
						a.xe = t;
						break
					}
					t = D = 0;
					G = d;
					I = f;
					if (0 <= G && 0 <= I)
					{
						c = D - c;
						g = t - g;
						e = c * h;
						c *= k;
						h *= g;
						k *= g;
						r.x -= v * (e + h);
						r.y -= v * (c + k);
						q -= w * (b.Rb.x * c - b.Rb.y * e + a.Rb.x * k - a.Rb.y * h);
						u.x += z * (e + h);
						u.y += z * (c + k);
						p += A * (b.Sb.x * c - b.Sb.y * e + a.Sb.x * k - a.Sb.y * h);
						b.xe = D;
						a.xe = t;
						break
					}
					break
				}
			}
			l.R = q;
			n.R = p
		}
	};
	r.prototype.Dy = function()
	{
		for (var a = 0; a < this.st; ++a)
			for (var b = this.Tj[a], c = b.nM, d = 0; d < b.mi; ++d)
			{
				var e = c.Fb[d],
					f = b.Wf[d];
				e.Fo = f.xe;
				e.Oo = f.Ek
			}
	};
	r.prototype.Rg = function(a)
	{
		void 0 === a && (a = 0);
		for (var b = 0, c = 0; c < this.st; c++)
		{
			var d = this.Tj[c],
				e = d.Ub,
				f = d.ic,
				g = e.aa * e.Y,
				h = e.aa * e.ja,
				k = f.aa * f.Y,
				t = f.aa * f.ja;
			r.jy.Kb(d);
			for (var B = r.jy.kb, C = 0; C < d.mi; C++)
			{
				var l = d.Wf[C],
					n = r.jy.Fb[C],
					q = r.jy.Zw[C],
					p = n.x - e.f.G.x,
					u = n.y - e.f.G.y,
					v = n.x - f.f.G.x,
					n = n.y - f.f.G.y,
					b = b < q ? b : q,
					q = -l.hL * R.pc(a * (q + I.hc), -I.Wg, 0),
					l = q * B.x,
					q = q * B.y;
				e.f.G.x -= g * l;
				e.f.G.y -= g * q;
				e.f.X -= h * (p * q - u * l);
				e.rd();
				f.f.G.x += k * l;
				f.f.G.y += k * q;
				f.f.X += t * (v * q - n * l);
				f.rd()
			}
		}
		return b > -1.5 *
			I.hc
	};
	Z.Dd.push(function()
	{
		Z.i.pa.mm.qp = new C;
		Z.i.pa.mm.jy = new D
	});
	Z.tc(u, Z.i.pa.Ab);
	u.prototype.va = Z.i.pa.Ab.prototype;
	u.Dz = function()
	{
		Z.i.pa.Ab.Ab.apply(this, arguments)
	};
	u.tg = function()
	{
		return new u
	};
	u.he = function() {};
	u.prototype.Jf = function(a, b)
	{
		this.va.Jf.call(this, a, b)
	};
	u.prototype.Ci = function() {};
	Z.tc(q, Z.i.pa.Ab);
	q.prototype.va = Z.i.pa.Ab.prototype;
	q.vs = function()
	{
		Z.i.pa.Ab.Ab.apply(this, arguments)
	};
	q.prototype.vs = function()
	{
		this.va.Ab.call(this)
	};
	q.prototype.Ci = function() {};
	Z.tc(v, Z.i.pa.Ab);
	v.prototype.va = Z.i.pa.Ab.prototype;
	v.Jz = function()
	{
		Z.i.pa.Ab.Ab.apply(this, arguments)
	};
	v.tg = function()
	{
		return new v
	};
	v.he = function() {};
	v.prototype.Jf = function(a, b)
	{
		this.va.Jf.call(this, a, b)
	};
	v.prototype.Ci = function()
	{
		K.NI(this.eh, this.Wc.Ob instanceof b ? this.Wc.Ob : null, this.Wc.s.L, this.ad.Ob instanceof a ? this.ad.Ob : null, this.ad.s.L)
	};
	Z.tc(n, Z.i.pa.Ab);
	n.prototype.va = Z.i.pa.Ab.prototype;
	n.Kz = function()
	{
		Z.i.pa.Ab.Ab.apply(this, arguments)
	};
	n.tg = function()
	{
		return new n
	};
	n.he = function() {};
	n.prototype.Jf =
		function(a, b)
		{
			this.va.Jf.call(this, a, b)
		};
	n.prototype.Ci = function() {};
	Z.tc(w, Z.i.pa.Ab);
	w.prototype.va = Z.i.pa.Ab.prototype;
	w.Lz = function()
	{
		Z.i.pa.Ab.Ab.apply(this, arguments)
	};
	w.tg = function()
	{
		return new w
	};
	w.he = function() {};
	w.prototype.Jf = function(a, b)
	{
		this.va.Jf.call(this, a, b)
	};
	w.prototype.Ci = function()
	{
		K.OI(this.eh, this.Wc.Ob instanceof b ? this.Wc.Ob : null, this.Wc.s.L, this.ad.Ob instanceof b ? this.ad.Ob : null, this.ad.s.L)
	};
	D.Pn = function() {};
	D.prototype.Pn = function()
	{
		this.kb = new O;
		this.Zw = new Rm(I.Xg);
		this.Fb = new Qm(I.Xg);
		for (var a = 0; a < I.Xg; a++) this.Fb[a] = new O
	};
	D.prototype.Kb = function(a)
	{
		var b, c, d, e, f, g;
		switch (a.type)
		{
			case M.oA:
				e = a.Ub.L.M;
				d = a.Rj;
				b = a.Ub.L.position.x + (e.g.x * d.x + e.h.x * d.y);
				c = a.Ub.L.position.y + (e.g.y * d.x + e.h.y * d.y);
				e = a.ic.L.M;
				d = a.Wf[0].Rj;
				f = a.ic.L.position.x + (e.g.x * d.x + e.h.x * d.y);
				e = a.ic.L.position.y + (e.g.y * d.x + e.h.y * d.y);
				d = f - b;
				g = e - c;
				var h = d * d + g * g;
				h > Number.MIN_VALUE * Number.MIN_VALUE ? (h = Math.sqrt(h), this.kb.x = d / h, this.kb.y = g / h) : (this.kb.x = 1, this.kb.y = 0);
				this.Fb[0].x = .5 * (b + f);
				this.Fb[0].y =
					.5 * (c + e);
				this.Zw[0] = d * this.kb.x + g * this.kb.y - a.qg;
				break;
			case M.Qi:
				e = a.Ub.L.M;
				d = a.Kw;
				this.kb.x = e.g.x * d.x + e.h.x * d.y;
				this.kb.y = e.g.y * d.x + e.h.y * d.y;
				e = a.Ub.L.M;
				d = a.Rj;
				f = a.Ub.L.position.x + (e.g.x * d.x + e.h.x * d.y);
				g = a.Ub.L.position.y + (e.g.y * d.x + e.h.y * d.y);
				e = a.ic.L.M;
				for (b = 0; b < a.mi; ++b) d = a.Wf[b].Rj, c = a.ic.L.position.x + (e.g.x * d.x + e.h.x * d.y), d = a.ic.L.position.y + (e.g.y * d.x + e.h.y * d.y), this.Zw[b] = (c - f) * this.kb.x + (d - g) * this.kb.y - a.qg, this.Fb[b].x = c, this.Fb[b].y = d;
				break;
			case M.fo:
				e = a.ic.L.M;
				d = a.Kw;
				this.kb.x = e.g.x * d.x +
					e.h.x * d.y;
				this.kb.y = e.g.y * d.x + e.h.y * d.y;
				e = a.ic.L.M;
				d = a.Rj;
				f = a.ic.L.position.x + (e.g.x * d.x + e.h.x * d.y);
				g = a.ic.L.position.y + (e.g.y * d.x + e.h.y * d.y);
				e = a.Ub.L.M;
				for (b = 0; b < a.mi; ++b) d = a.Wf[b].Rj, c = a.Ub.L.position.x + (e.g.x * d.x + e.h.x * d.y), d = a.Ub.L.position.y + (e.g.y * d.x + e.h.y * d.y), this.Zw[b] = (c - f) * this.kb.x + (d - g) * this.kb.y - a.qg, this.Fb[b].Set(c, d);
				this.kb.x *= -1;
				this.kb.y *= -1
		}
	};
	Z.Dd.push(function()
	{
		Z.i.pa.Pn.JO = new O;
		Z.i.pa.Pn.KO = new O
	})
})();
(function()
{
	var a = Z.K.Math.Uk,
		b = Z.K.Math.uh,
		c = Z.K.Math.Ua,
		d = Z.i.Fc.qz,
		e = Z.i.Fc.sz,
		f = Z.i.Fc.tz,
		g = Z.i.Fc.Od,
		k = Z.i.Fc.zz,
		h = Z.i.Fc.Fz,
		p = Z.i.Fc.Pz;
	Z.tc(d, Z.i.Fc.Od);
	d.prototype.va = Z.i.Fc.Od.prototype;
	d.qz = function()
	{
		Z.i.Fc.Od.Od.apply(this, arguments);
		this.Hh = new c(0, -1);
		this.sm = this.offset = 0;
		this.AI = new c(0, 0);
		this.PL = 2;
		this.sK = 1;
		this.PN = !0;
		this.Ah = null
	};
	d.prototype.fm = function()
	{
		if (this.wd)
		{
			this.PN && (this.Ah = this.Wd.wf.nf());
			for (var a = this.wd; a; a = a.Lg)
			{
				var b = a.body;
				if (0 != b.ie())
				{
					for (var d = new c, e = new c,
							f = 0, g = 0, h = b.Vj; h; h = h.Na)
					{
						var k = new c,
							p = h.Ob.Yu(this.Hh, this.offset, b.$f(), k),
							f = f + p;
						d.x += p * k.x;
						d.y += p * k.y;
						g += 1 * p;
						e.x += p * k.x * 1;
						e.y += p * k.y * 1
					}
					d.x /= f;
					d.y /= f;
					e.x /= g;
					e.y /= g;
					f < Number.MIN_VALUE || (e = this.Ah.Zl(), e.cg(this.sm * f), b.Xl(e), d = b.YI(d), d.QD(this.AI), d.cg(-this.PL * f), b.Xl(d), b.wy(-b.ci / b.aa * f * b.R * this.sK))
				}
			}
		}
	};
	Z.tc(e, Z.i.Fc.Od);
	e.prototype.va = Z.i.Fc.Od.prototype;
	e.sz = function()
	{
		Z.i.Fc.Od.Od.apply(this, arguments);
		this.bD = new c(0, 0)
	};
	e.prototype.fm = function(a)
	{
		a = new c(this.bD.x * a.ob, this.bD.y * a.ob);
		for (var b = this.wd; b; b = b.Lg)
		{
			var d = b.body;
			d.ie() && d.Qh(new c(d.o.x + a.x, d.o.y + a.y))
		}
	};
	Z.tc(f, Z.i.Fc.Od);
	f.prototype.va = Z.i.Fc.Od.prototype;
	f.tz = function()
	{
		Z.i.Fc.Od.Od.apply(this, arguments);
		this.UI = new c(0, 0)
	};
	f.prototype.fm = function()
	{
		for (var a = this.wd; a; a = a.Lg)
		{
			var b = a.body;
			b.ie() && b.Xl(this.UI)
		}
	};
	g.Od = function() {};
	g.prototype.fm = function() {};
	g.prototype.vy = function(a)
	{
		var b = new k;
		b.controller = this;
		b.body = a;
		b.Lg = this.wd;
		b.ku = null;
		this.wd = b;
		b.Lg && (b.Lg.ku = b);
		this.Nf++;
		b.wl = a.Em;
		b.lu = null;
		a.Em = b;
		b.wl &&
			(b.wl.lu = b);
		a.bB++
	};
	g.prototype.ED = function(a)
	{
		for (var b = a.Em; b && b.controller != this;) b = b.wl;
		b.ku && (b.ku.Lg = b.Lg);
		b.Lg && (b.Lg.ku = b.ku);
		b.wl && (b.wl.lu = b.lu);
		b.lu && (b.lu.wl = b.wl);
		this.wd == b && (this.wd = b.Lg);
		a.Em == b && (a.Em = b.wl);
		a.bB--;
		this.Nf--
	};
	g.prototype.xy = function()
	{
		for (; this.wd;) this.ED(this.wd.body)
	};
	k.zz = function() {};
	Z.tc(h, Z.i.Fc.Od);
	h.prototype.va = Z.i.Fc.Od.prototype;
	h.Fz = function()
	{
		Z.i.Fc.Od.Od.apply(this, arguments);
		this.nD = 1;
		this.AL = !0
	};
	h.prototype.fm = function()
	{
		var a, b, d, e, f, g, h, k, p;
		if (this.AL)
			for (a =
				this.wd; a; a = a.Lg)
				for (b = a.body, d = b.f.G, e = b.aa, f = this.wd; f != a; f = f.Lg) g = f.body, h = g.f.G, k = h.x - d.x, p = h.y - d.y, h = k * k + p * p, h < Number.MIN_VALUE || (k = new c(k, p), k.cg(this.nD / h / Math.sqrt(h) * e * g.aa), b.ie() && b.Xl(k), k.cg(-1), g.ie() && g.Xl(k));
		else
			for (a = this.wd; a; a = a.Lg)
				for (b = a.body, d = b.f.G, e = b.aa, f = this.wd; f != a; f = f.Lg) g = f.body, h = g.f.G, k = h.x - d.x, p = h.y - d.y, h = k * k + p * p, h < Number.MIN_VALUE || (k = new c(k, p), k.cg(this.nD / h * e * g.aa), b.ie() && b.Xl(k), k.cg(-1), g.ie() && g.Xl(k))
	};
	Z.tc(p, Z.i.Fc.Od);
	p.prototype.va = Z.i.Fc.Od.prototype;
	p.Pz = function()
	{
		Z.i.Fc.Od.Od.apply(this, arguments);
		this.jK = new a;
		this.qB = 0
	};
	p.prototype.fm = function(a)
	{
		a = a.ob;
		if (!(a <= Number.MIN_VALUE))
		{
			a > this.qB && 0 < this.qB && (a = this.qB);
			for (var d = this.wd; d; d = d.Lg)
			{
				var e = d.body;
				if (e.ie())
				{
					var f = e.Iy(b.cf(this.jK, e.Gy(e.o)));
					e.Qh(new c(e.o.x + f.x * a, e.o.y + f.y * a))
				}
			}
		}
	}
})();
(function()
{
	var a = Z.K.ma,
		b = Z.K.Math.Uk,
		c = Z.K.Math.Up,
		d = Z.K.Math.uh,
		e = Z.K.Math.Ua,
		f = Z.K.Math.Yp,
		g = Z.i.O.gs,
		k = Z.i.O.Cj,
		h = Z.i.O.ms,
		p = Z.i.O.ns,
		l = Z.i.O.os,
		r = Z.i.O.ps,
		u = Z.i.O.Gz,
		q = Z.i.O.na,
		v = Z.i.O.Ka,
		n = Z.i.O.Hz,
		w = Z.i.O.qs,
		D = Z.i.O.rs,
		z = Z.i.O.ts,
		A = Z.i.O.us,
		I = Z.i.O.ws,
		G = Z.i.O.Vk,
		R = Z.i.O.Vp,
		O = Z.i.O.Qn,
		K = Z.i.O.Wp,
		L = Z.i.O.Wk,
		M = Z.i.O.As,
		N = Z.i.O.Bs;
	Z.tc(g, Z.i.O.na);
	g.prototype.va = Z.i.O.na.prototype;
	g.gs = function()
	{
		Z.i.O.na.na.apply(this, arguments);
		this.La = new e;
		this.Ma = new e;
		this.ve = new e
	};
	g.prototype.LD = function(a)
	{
		void 0 ===
			a && (a = 0);
		this.Fm = a
	};
	g.prototype.KD = function(a)
	{
		void 0 === a && (a = 0);
		this.xq = a
	};
	g.prototype.gs = function(a)
	{
		this.va.na.call(this, a);
		this.La.T(a.me);
		this.Ma.T(a.ne);
		this.fB = a.length;
		this.Fm = a.ko;
		this.xq = a.$n;
		this.UF = this.Rf = this.C = 0
	};
	g.prototype.sh = function(b)
	{
		var c, d, e = this.Pa,
			f = this.Da;
		c = e.L.M;
		var g = this.La.x - e.f.$.x,
			h = this.La.y - e.f.$.y;
		d = c.g.x * g + c.h.x * h;
		h = c.g.y * g + c.h.y * h;
		g = d;
		c = f.L.M;
		var k = this.Ma.x - f.f.$.x,
			t = this.Ma.y - f.f.$.y;
		d = c.g.x * k + c.h.x * t;
		t = c.g.y * k + c.h.y * t;
		k = d;
		this.ve.x = f.f.G.x + k - e.f.G.x - g;
		this.ve.y =
			f.f.G.y + t - e.f.G.y - h;
		d = Math.sqrt(this.ve.x * this.ve.x + this.ve.y * this.ve.y);
		d > a.hc ? this.ve.cg(1 / d) : this.ve.eb();
		c = g * this.ve.y - h * this.ve.x;
		var l = k * this.ve.y - t * this.ve.x;
		c = e.Y + e.ja * c * c + f.Y + f.ja * l * l;
		this.aa = 0 != c ? 1 / c : 0;
		if (0 < this.Fm)
		{
			d -= this.fB;
			var l = 2 * Math.PI * this.Fm,
				n = this.aa * l * l;
			this.Rf = b.ob * (2 * this.aa * this.xq * l + b.ob * n);
			this.Rf = 0 != this.Rf ? 1 / this.Rf : 0;
			this.UF = d * b.ob * n * this.Rf;
			this.aa = c + this.Rf;
			this.aa = 0 != this.aa ? 1 / this.aa : 0
		}
		b.Ai ? (this.C *= b.Fd, b = this.C * this.ve.x, c = this.C * this.ve.y, e.o.x -= e.Y * b, e.o.y -= e.Y *
			c, e.R -= e.ja * (g * c - h * b), f.o.x += f.Y * b, f.o.y += f.Y * c, f.R += f.ja * (k * c - t * b)) : this.C = 0
	};
	g.prototype.Sg = function()
	{
		var a, b = this.Pa,
			c = this.Da;
		a = b.L.M;
		var d = this.La.x - b.f.$.x,
			e = this.La.y - b.f.$.y,
			f = a.g.x * d + a.h.x * e,
			e = a.g.y * d + a.h.y * e,
			d = f;
		a = c.L.M;
		var g = this.Ma.x - c.f.$.x,
			h = this.Ma.y - c.f.$.y,
			f = a.g.x * g + a.h.x * h,
			h = a.g.y * g + a.h.y * h,
			g = f,
			f = -this.aa * (this.ve.x * (c.o.x + -c.R * h - (b.o.x + -b.R * e)) + this.ve.y * (c.o.y + c.R * g - (b.o.y + b.R * d)) + this.UF + this.Rf * this.C);
		this.C += f;
		a = f * this.ve.x;
		f *= this.ve.y;
		b.o.x -= b.Y * a;
		b.o.y -= b.Y * f;
		b.R -= b.ja *
			(d * f - e * a);
		c.o.x += c.Y * a;
		c.o.y += c.Y * f;
		c.R += c.ja * (g * f - h * a)
	};
	g.prototype.Rg = function()
	{
		var b;
		if (0 < this.Fm) return !0;
		var c = this.Pa,
			e = this.Da;
		b = c.L.M;
		var f = this.La.x - c.f.$.x,
			g = this.La.y - c.f.$.y,
			h = b.g.x * f + b.h.x * g,
			g = b.g.y * f + b.h.y * g,
			f = h;
		b = e.L.M;
		var k = this.Ma.x - e.f.$.x,
			l = this.Ma.y - e.f.$.y,
			h = b.g.x * k + b.h.x * l,
			l = b.g.y * k + b.h.y * l,
			k = h,
			n = e.f.G.x + k - c.f.G.x - f,
			p = e.f.G.y + l - c.f.G.y - g,
			q = Math.sqrt(n * n + p * p);
		b = q - this.fB;
		b = d.pc(b, -a.Wg, a.Wg);
		h = -this.aa * b;
		this.ve.Set(n / q, p / q);
		n = h * this.ve.x;
		h *= this.ve.y;
		c.f.G.x -= c.Y * n;
		c.f.G.y -=
			c.Y * h;
		c.f.X -= c.ja * (f * h - g * n);
		e.f.G.x += e.Y * n;
		e.f.G.y += e.Y * h;
		e.f.X += e.ja * (k * h - l * n);
		c.rd();
		e.rd();
		return d.He(b) < a.hc
	};
	Z.tc(k, Z.i.O.Ka);
	k.prototype.va = Z.i.O.Ka.prototype;
	k.Cj = function()
	{
		Z.i.O.Ka.Ka.apply(this, arguments);
		this.me = new e;
		this.ne = new e
	};
	k.prototype.Cj = function()
	{
		this.va.Ka.call(this);
		this.type = q.aF;
		this.length = 1;
		this.$n = this.ko = 0
	};
	k.prototype.Kb = function(a, b, c, d)
	{
		this.Ub = a;
		this.ic = b;
		this.me.T(this.Ub.Zf(c));
		this.ne.T(this.ic.Zf(d));
		a = d.x - c.x;
		c = d.y - c.y;
		this.length = Math.sqrt(a * a + c * c);
		this.$n =
			this.ko = 0
	};
	Z.tc(h, Z.i.O.na);
	h.prototype.va = Z.i.O.na.prototype;
	h.ms = function()
	{
		Z.i.O.na.na.apply(this, arguments);
		this.Dh = new e;
		this.Eh = new e;
		this.iB = new b;
		this.Ch = new e
	};
	h.prototype.ms = function(a)
	{
		this.va.na.call(this, a);
		this.Dh.T(a.me);
		this.Eh.T(a.ne);
		this.iB.eb();
		this.qt = 0;
		this.Ch.eb();
		this.jl = 0;
		this.jB = a.oB;
		this.fM = a.pM
	};
	h.prototype.sh = function(a)
	{
		var c, d, e = this.Pa,
			f = this.Da;
		c = e.L.M;
		var g = this.Dh.x - e.f.$.x,
			h = this.Dh.y - e.f.$.y;
		d = c.g.x * g + c.h.x * h;
		h = c.g.y * g + c.h.y * h;
		g = d;
		c = f.L.M;
		var k = this.Eh.x - f.f.$.x,
			t = this.Eh.y - f.f.$.y;
		d = c.g.x * k + c.h.x * t;
		t = c.g.y * k + c.h.y * t;
		k = d;
		c = e.Y;
		d = f.Y;
		var l = e.ja,
			n = f.ja,
			p = new b;
		p.g.x = c + d;
		p.h.x = 0;
		p.g.y = 0;
		p.h.y = c + d;
		p.g.x += l * h * h;
		p.h.x += -l * g * h;
		p.g.y += -l * g * h;
		p.h.y += l * g * g;
		p.g.x += n * t * t;
		p.h.x += -n * k * t;
		p.g.y += -n * k * t;
		p.h.y += n * k * k;
		p.Fy(this.iB);
		this.qt = l + n;
		0 < this.qt && (this.qt = 1 / this.qt);
		a.Ai ? (this.Ch.x *= a.Fd, this.Ch.y *= a.Fd, this.jl *= a.Fd, a = this.Ch, e.o.x -= c * a.x, e.o.y -= c * a.y, e.R -= l * (g * a.y - h * a.x + this.jl), f.o.x += d * a.x, f.o.y += d * a.y, f.R += n * (k * a.y - t * a.x + this.jl)) : (this.Ch.eb(), this.jl = 0)
	};
	h.prototype.Sg =
		function(a)
		{
			var b, c, f = this.Pa,
				g = this.Da,
				h = f.o,
				k = f.R,
				t = g.o,
				l = g.R,
				n = f.Y,
				p = g.Y,
				q = f.ja,
				r = g.ja;
			b = f.L.M;
			var u = this.Dh.x - f.f.$.x,
				v = this.Dh.y - f.f.$.y;
			c = b.g.x * u + b.h.x * v;
			v = b.g.y * u + b.h.y * v;
			u = c;
			b = g.L.M;
			var w = this.Eh.x - g.f.$.x,
				z = this.Eh.y - g.f.$.y;
			c = b.g.x * w + b.h.x * z;
			z = b.g.y * w + b.h.y * z;
			w = c;
			c = -this.qt * (l - k);
			var A = this.jl;
			b = a.ob * this.fM;
			this.jl = d.pc(this.jl + c, -b, b);
			c = this.jl - A;
			k -= q * c;
			l += r * c;
			b = d.cf(this.iB, new e(-(t.x - l * z - h.x + k * v), -(t.y + l * w - h.y - k * u)));
			c = this.Ch.nf();
			this.Ch.wp(b);
			b = a.ob * this.jB;
			this.Ch.Ly() > b * b && (this.Ch.vg(),
				this.Ch.cg(b));
			b = d.qd(this.Ch, c);
			h.x -= n * b.x;
			h.y -= n * b.y;
			k -= q * (u * b.y - v * b.x);
			t.x += p * b.x;
			t.y += p * b.y;
			l += r * (w * b.y - z * b.x);
			f.R = k;
			g.R = l
		};
	h.prototype.Rg = function()
	{
		return !0
	};
	Z.tc(p, Z.i.O.Ka);
	p.prototype.va = Z.i.O.Ka.prototype;
	p.ns = function()
	{
		Z.i.O.Ka.Ka.apply(this, arguments);
		this.me = new e;
		this.ne = new e
	};
	p.prototype.ns = function()
	{
		this.va.Ka.call(this);
		this.type = q.cF;
		this.pM = this.oB = 0
	};
	p.prototype.Kb = function(a, b, c)
	{
		this.Ub = a;
		this.ic = b;
		this.me.T(this.Ub.Zf(c));
		this.ne.T(this.ic.Zf(c))
	};
	Z.tc(l, Z.i.O.na);
	l.prototype.va =
		Z.i.O.na.prototype;
	l.os = function()
	{
		Z.i.O.na.na.apply(this, arguments);
		this.ll = new e;
		this.ml = new e;
		this.La = new e;
		this.Ma = new e;
		this.jd = new u
	};
	l.prototype.os = function(a)
	{
		this.va.na.call(this, a);
		var b = parseInt(a.po.ha),
			c = parseInt(a.qo.ha);
		this.Fq = this.Mo = this.Eq = this.Lo = null;
		this.ZL = a.po.Pa;
		this.Pa = a.po.Da;
		b == q.hw ? (this.Lo = a.po instanceof K ? a.po : null, this.ll.T(this.Lo.La), this.La.T(this.Lo.Ma), b = this.Lo.bv()) : (this.Eq = a.po instanceof I ? a.po : null, this.ll.T(this.Eq.La), this.La.T(this.Eq.Ma), b = this.Eq.Rr());
		this.$L = a.qo.Pa;
		this.Da = a.qo.Da;
		c == q.hw ? (this.Mo = a.qo instanceof K ? a.qo : null, this.ml.T(this.Mo.La), this.Ma.T(this.Mo.Ma), c = this.Mo.bv()) : (this.Fq = a.qo instanceof I ? a.qo : null, this.ml.T(this.Fq.La), this.Ma.T(this.Fq.Ma), c = this.Fq.Rr());
		this.Ad = a.ratio;
		this.vq = b + this.Ad * c;
		this.C = 0
	};
	l.prototype.sh = function(a)
	{
		var b = this.ZL,
			c = this.$L,
			d = this.Pa,
			e = this.Da,
			f, g, h, k, t, l = 0;
		this.jd.eb();
		this.Lo ? (this.jd.Jn = -1, l += d.ja) : (k = b.L.M, f = this.Eq.Hg, b = k.g.x * f.x + k.h.x * f.y, f = k.g.y * f.x + k.h.y * f.y, k = d.L.M, g = this.La.x - d.f.$.x,
			h = this.La.y - d.f.$.y, t = k.g.x * g + k.h.x * h, h = k.g.y * g + k.h.y * h, k = t * f - h * b, this.jd.Zi.Set(-b, -f), this.jd.Jn = -k, l += d.Y + d.ja * k * k);
		this.Mo ? (this.jd.Kn = -this.Ad, l += this.Ad * this.Ad * e.ja) : (k = c.L.M, f = this.Fq.Hg, b = k.g.x * f.x + k.h.x * f.y, f = k.g.y * f.x + k.h.y * f.y, k = e.L.M, g = this.Ma.x - e.f.$.x, h = this.Ma.y - e.f.$.y, t = k.g.x * g + k.h.x * h, h = k.g.y * g + k.h.y * h, k = t * f - h * b, this.jd.$i.Set(-this.Ad * b, -this.Ad * f), this.jd.Kn = -this.Ad * k, l += this.Ad * this.Ad * (e.Y + e.ja * k * k));
		this.aa = 0 < l ? 1 / l : 0;
		a.Ai ? (d.o.x += d.Y * this.C * this.jd.Zi.x, d.o.y += d.Y * this.C *
			this.jd.Zi.y, d.R += d.ja * this.C * this.jd.Jn, e.o.x += e.Y * this.C * this.jd.$i.x, e.o.y += e.Y * this.C * this.jd.$i.y, e.R += e.ja * this.C * this.jd.Kn) : this.C = 0
	};
	l.prototype.Sg = function()
	{
		var a = this.Pa,
			b = this.Da,
			c = -this.aa * this.jd.QI(a.o, a.R, b.o, b.R);
		this.C += c;
		a.o.x += a.Y * c * this.jd.Zi.x;
		a.o.y += a.Y * c * this.jd.Zi.y;
		a.R += a.ja * c * this.jd.Jn;
		b.o.x += b.Y * c * this.jd.$i.x;
		b.o.y += b.Y * c * this.jd.$i.y;
		b.R += b.ja * c * this.jd.Kn
	};
	l.prototype.Rg = function()
	{
		var b = this.Pa,
			c = this.Da,
			d, e;
		d = this.Lo ? this.Lo.bv() : this.Eq.Rr();
		e = this.Mo ? this.Mo.bv() :
			this.Fq.Rr();
		d = -this.aa * (this.vq - (d + this.Ad * e));
		b.f.G.x += b.Y * d * this.jd.Zi.x;
		b.f.G.y += b.Y * d * this.jd.Zi.y;
		b.f.X += b.ja * d * this.jd.Jn;
		c.f.G.x += c.Y * d * this.jd.$i.x;
		c.f.G.y += c.Y * d * this.jd.$i.y;
		c.f.X += c.ja * d * this.jd.Kn;
		b.rd();
		c.rd();
		return 0 < a.hc
	};
	Z.tc(r, Z.i.O.Ka);
	r.prototype.va = Z.i.O.Ka.prototype;
	r.ps = function()
	{
		Z.i.O.Ka.Ka.apply(this, arguments)
	};
	r.prototype.ps = function()
	{
		this.va.Ka.call(this);
		this.type = q.dF;
		this.qo = this.po = null;
		this.ratio = 1
	};
	u.Gz = function()
	{
		this.Zi = new e;
		this.$i = new e
	};
	u.prototype.eb = function()
	{
		this.Zi.eb();
		this.Jn = 0;
		this.$i.eb();
		this.Kn = 0
	};
	u.prototype.Set = function(a, b, c, d)
	{
		void 0 === b && (b = 0);
		void 0 === d && (d = 0);
		this.Zi.T(a);
		this.Jn = b;
		this.$i.T(c);
		this.Kn = d
	};
	u.prototype.QI = function(a, b, c, d)
	{
		void 0 === b && (b = 0);
		void 0 === d && (d = 0);
		return this.Zi.x * a.x + this.Zi.y * a.y + this.Jn * b + (this.$i.x * c.x + this.$i.y * c.y) + this.Kn * d
	};
	q.na = function()
	{
		this.kg = new n;
		this.lg = new n;
		this.Zj = new e;
		this.$j = new e
	};
	q.prototype.Uc = function()
	{
		return this.ha
	};
	q.prototype.Ei = function()
	{
		return this.sl
	};
	q.prototype.cz = function(a)
	{
		this.sl = a
	};
	q.prototype.wn = function()
	{
		return this.Pa.wn() && this.Da.wn()
	};
	q.tg = function(a)
	{
		var b = null;
		switch (a.type)
		{
			case q.aF:
				b = new g(a instanceof k ? a : null);
				break;
			case q.gF:
				b = new z(a instanceof A ? a : null);
				break;
			case q.iF:
				b = new I(a instanceof G ? a : null);
				break;
			case q.hw:
				b = new K(a instanceof L ? a : null);
				break;
			case q.jF:
				b = new R(a instanceof O ? a : null);
				break;
			case q.dF:
				b = new l(a instanceof r ? a : null);
				break;
			case q.eF:
				b = new w(a instanceof D ? a : null);
				break;
			case q.kF:
				b = new M(a instanceof N ? a : null);
				break;
			case q.cF:
				b = new h(a instanceof p ? a : null)
		}
		return b
	};
	q.he = function() {};
	q.prototype.na = function(a)
	{
		this.ha = a.type;
		this.Na = this.Ue = null;
		this.Pa = a.Ub;
		this.Da = a.ic;
		this.VF = a.rf;
		this.Ao = !1;
		this.sl = a.Pg
	};
	q.prototype.sh = function() {};
	q.prototype.Sg = function() {};
	q.prototype.Dy = function() {};
	q.prototype.Rg = function()
	{
		return !1
	};
	Z.Dd.push(function()
	{
		Z.i.O.na.fL = 0;
		Z.i.O.na.hw = 1;
		Z.i.O.na.iF = 2;
		Z.i.O.na.aF = 3;
		Z.i.O.na.jF = 4;
		Z.i.O.na.gF = 5;
		Z.i.O.na.dF = 6;
		Z.i.O.na.eF = 7;
		Z.i.O.na.kF = 8;
		Z.i.O.na.cF = 9;
		Z.i.O.na.fg = 0;
		Z.i.O.na.Hj = 1;
		Z.i.O.na.gf = 2;
		Z.i.O.na.tm = 3
	});
	v.Ka = function() {};
	v.prototype.Ka = function()
	{
		this.type = q.fL;
		this.ic = this.Ub = this.Pg = null;
		this.rf = !1
	};
	n.Hz = function() {};
	Z.tc(w, Z.i.O.na);
	w.prototype.va = Z.i.O.na.prototype;
	w.qs = function()
	{
		Z.i.O.na.na.apply(this, arguments);
		this.La = new e;
		this.Ma = new e;
		this.Hg = new e;
		this.rl = new e;
		this.ia = new e;
		this.Sa = new e;
		this.Ia = new b;
		this.C = new e
	};
	w.prototype.Rr = function()
	{
		var a = this.Pa,
			b = this.Da,
			c = a.ev(this.La),
			d = b.ev(this.Ma),
			b = d.x - c.x,
			c = d.y - c.y,
			a = a.Iy(this.Hg);
		return a.x * b + a.y * c
	};
	w.prototype.vn = function(a)
	{
		this.Pa.Eb(!0);
		this.Da.Eb(!0);
		this.dh = a
	};
	w.prototype.cv = function()
	{
		return this.Uf
	};
	w.prototype.dv = function()
	{
		return this.Vf
	};
	w.prototype.$r = function(a, b)
	{
		void 0 === a && (a = 0);
		void 0 === b && (b = 0);
		this.Pa.Eb(!0);
		this.Da.Eb(!0);
		this.Uf = a;
		this.Vf = b
	};
	w.prototype.Nr = function(a)
	{
		this.Pa.Eb(!0);
		this.Da.Eb(!0);
		this.bj = a
	};
	w.prototype.as = function(a)
	{
		void 0 === a && (a = 0);
		this.Pa.Eb(!0);
		this.Da.Eb(!0);
		this.ak = a
	};
	w.prototype.ND = function(a)
	{
		void 0 === a && (a = 0);
		this.Pa.Eb(!0);
		this.Da.Eb(!0);
		this.Cq = a
	};
	w.prototype.qs = function(a)
	{
		this.va.na.call(this,
			a);
		this.La.T(a.me);
		this.Ma.T(a.ne);
		this.Hg.T(a.to);
		this.rl.x = -this.Hg.y;
		this.rl.y = this.Hg.x;
		this.C.eb();
		this.Nb = this.mg = 0;
		this.Uf = a.Lw;
		this.Vf = a.ry;
		this.Cq = a.pB;
		this.ak = a.Pt;
		this.dh = a.bl;
		this.bj = a.Vs;
		this.yb = q.fg;
		this.ia.eb();
		this.Sa.eb()
	};
	w.prototype.sh = function(b)
	{
		var c = this.Pa,
			e = this.Da,
			f, g;
		this.Zj.T(c.f.$);
		this.$j.T(e.f.$);
		var h = c.$f();
		e.$f();
		f = c.L.M;
		var k = this.La.x - this.Zj.x,
			t = this.La.y - this.Zj.y;
		g = f.g.x * k + f.h.x * t;
		t = f.g.y * k + f.h.y * t;
		k = g;
		f = e.L.M;
		var l = this.Ma.x - this.$j.x,
			n = this.Ma.y - this.$j.y;
		g = f.g.x * l + f.h.x * n;
		n = f.g.y * l + f.h.y * n;
		l = g;
		f = e.f.G.x + l - c.f.G.x - k;
		g = e.f.G.y + n - c.f.G.y - t;
		this.xd = c.Y;
		this.yd = e.Y;
		this.Sf = c.ja;
		this.Tf = e.ja;
		this.ia.T(d.cf(h.M, this.Hg));
		this.lc = (f + k) * this.ia.y - (g + t) * this.ia.x;
		this.mc = l * this.ia.y - n * this.ia.x;
		this.mg = this.xd + this.yd + this.Sf * this.lc * this.lc + this.Tf * this.mc * this.mc;
		this.mg = this.mg > Number.MIN_VALUE ? 1 / this.mg : 0;
		this.Sa.T(d.cf(h.M, this.rl));
		this.vc = (f + k) * this.Sa.y - (g + t) * this.Sa.x;
		this.wc = l * this.Sa.y - n * this.Sa.x;
		h = this.xd;
		k = this.yd;
		t = this.Sf;
		l = this.Tf;
		this.Ia.g.x =
			h + k + t * this.vc * this.vc + l * this.wc * this.wc;
		this.Ia.g.y = t * this.vc * this.lc + l * this.wc * this.mc;
		this.Ia.h.x = this.Ia.g.y;
		this.Ia.h.y = h + k + t * this.lc * this.lc + l * this.mc * this.mc;
		this.dh ? (f = this.ia.x * f + this.ia.y * g, d.He(this.Vf - this.Uf) < 2 * a.hc ? this.yb = q.tm : f <= this.Uf ? this.yb != q.Hj && (this.yb = q.Hj, this.C.y = 0) : f >= this.Vf ? this.yb != q.gf && (this.yb = q.gf, this.C.y = 0) : (this.yb = q.fg, this.C.y = 0)) : this.yb = q.fg;
		0 == this.bj && (this.Nb = 0);
		b.Ai ? (this.C.x *= b.Fd, this.C.y *= b.Fd, this.Nb *= b.Fd, b = this.C.x * this.Sa.x + (this.Nb + this.C.y) * this.ia.x,
			f = this.C.x * this.Sa.y + (this.Nb + this.C.y) * this.ia.y, g = this.C.x * this.vc + (this.Nb + this.C.y) * this.lc, h = this.C.x * this.wc + (this.Nb + this.C.y) * this.mc, c.o.x -= this.xd * b, c.o.y -= this.xd * f, c.R -= this.Sf * g, e.o.x += this.yd * b, e.o.y += this.yd * f, e.R += this.Tf * h) : (this.C.eb(), this.Nb = 0)
	};
	w.prototype.Sg = function(a)
	{
		var b = this.Pa,
			c = this.Da,
			f = b.o,
			g = b.R,
			h = c.o,
			k = c.R,
			t, l, n;
		this.bj && this.yb != q.tm && (n = this.mg * (this.ak - (this.ia.x * (h.x - f.x) + this.ia.y * (h.y - f.y) + this.mc * k - this.lc * g)), t = this.Nb, a = a.ob * this.Cq, this.Nb = d.pc(this.Nb + n,
			-a, a), n = this.Nb - t, t = n * this.ia.x, a = n * this.ia.y, l = n * this.lc, n *= this.mc, f.x -= this.xd * t, f.y -= this.xd * a, g -= this.Sf * l, h.x += this.yd * t, h.y += this.yd * a, k += this.Tf * n);
		a = this.Sa.x * (h.x - f.x) + this.Sa.y * (h.y - f.y) + this.wc * k - this.vc * g;
		this.dh && this.yb != q.fg ? (l = this.ia.x * (h.x - f.x) + this.ia.y * (h.y - f.y) + this.mc * k - this.lc * g, t = this.C.nf(), n = this.Ia.Fn(new e, -a, -l), this.C.wp(n), this.yb == q.Hj ? this.C.y = d.If(this.C.y, 0) : this.yb == q.gf && (this.C.y = d.Cn(this.C.y, 0)), a = -a - (this.C.y - t.y) * this.Ia.h.x, this.C.x = 0 != this.Ia.g.x ? a / this.Ia.g.x +
			t.x : t.x, n.x = this.C.x - t.x, n.y = this.C.y - t.y, t = n.x * this.Sa.x + n.y * this.ia.x, a = n.x * this.Sa.y + n.y * this.ia.y, l = n.x * this.vc + n.y * this.lc, n = n.x * this.wc + n.y * this.mc) : (n = 0 != this.Ia.g.x ? -a / this.Ia.g.x : 0, this.C.x += n, t = n * this.Sa.x, a = n * this.Sa.y, l = n * this.vc, n *= this.wc);
		f.x -= this.xd * t;
		f.y -= this.xd * a;
		g -= this.Sf * l;
		h.x += this.yd * t;
		h.y += this.yd * a;
		k += this.Tf * n;
		b.o.T(f);
		b.R = g;
		c.o.T(h);
		c.R = k
	};
	w.prototype.Rg = function()
	{
		var c = this.Pa,
			f = this.Da,
			g = c.f.G,
			h = c.f.X,
			k = f.f.G,
			l = f.f.X,
			n, p, q, r, u, v, w = 0;
		q = !1;
		var z = 0,
			A = b.av(h);
		u = b.av(l);
		n = A;
		var D = this.La.x - this.Zj.x;
		r = this.La.y - this.Zj.y;
		p = n.g.x * D + n.h.x * r;
		r = n.g.y * D + n.h.y * r;
		D = p;
		n = u;
		u = this.Ma.x - this.$j.x;
		v = this.Ma.y - this.$j.y;
		p = n.g.x * u + n.h.x * v;
		v = n.g.y * u + n.h.y * v;
		u = p;
		n = k.x + u - g.x - D;
		p = k.y + v - g.y - r;
		if (this.dh)
		{
			this.ia = d.cf(A, this.Hg);
			this.lc = (n + D) * this.ia.y - (p + r) * this.ia.x;
			this.mc = u * this.ia.y - v * this.ia.x;
			var G = this.ia.x * n + this.ia.y * p;
			d.He(this.Vf - this.Uf) < 2 * a.hc ? (z = d.pc(G, -a.Wg, a.Wg), w = d.He(G), q = !0) : G <= this.Uf ? (z = d.pc(G - this.Uf + a.hc, -a.Wg, 0), w = this.Uf - G, q = !0) : G >= this.Vf && (z = d.pc(G - this.Vf +
				a.hc, 0, a.Wg), w = G - this.Vf, q = !0)
		}
		this.Sa = d.cf(A, this.rl);
		this.vc = (n + D) * this.Sa.y - (p + r) * this.Sa.x;
		this.wc = u * this.Sa.y - v * this.Sa.x;
		A = new e;
		D = this.Sa.x * n + this.Sa.y * p;
		w = d.If(w, d.He(D));
		q ? (q = this.xd, r = this.yd, u = this.Sf, v = this.Tf, this.Ia.g.x = q + r + u * this.vc * this.vc + v * this.wc * this.wc, this.Ia.g.y = u * this.vc * this.lc + v * this.wc * this.mc, this.Ia.h.x = this.Ia.g.y, this.Ia.h.y = q + r + u * this.lc * this.lc + v * this.mc * this.mc, this.Ia.Fn(A, -D, -z)) : (q = this.xd, r = this.yd, u = this.Sf, v = this.Tf, z = q + r + u * this.vc * this.vc + v * this.wc * this.wc,
			A.x = 0 != z ? -D / z : 0, A.y = 0);
		z = A.x * this.Sa.x + A.y * this.ia.x;
		q = A.x * this.Sa.y + A.y * this.ia.y;
		D = A.x * this.vc + A.y * this.lc;
		A = A.x * this.wc + A.y * this.mc;
		g.x -= this.xd * z;
		g.y -= this.xd * q;
		h -= this.Sf * D;
		k.x += this.yd * z;
		k.y += this.yd * q;
		l += this.Tf * A;
		c.f.X = h;
		f.f.X = l;
		c.rd();
		f.rd();
		return w <= a.hc && 0 <= a.Sn
	};
	Z.tc(D, Z.i.O.Ka);
	D.prototype.va = Z.i.O.Ka.prototype;
	D.rs = function()
	{
		Z.i.O.Ka.Ka.apply(this, arguments);
		this.me = new e;
		this.ne = new e;
		this.to = new e
	};
	D.prototype.rs = function()
	{
		this.va.Ka.call(this);
		this.type = q.eF;
		this.to.Set(1, 0);
		this.bl = !1;
		this.ry = this.Lw = 0;
		this.Vs = !1;
		this.Pt = this.pB = 0
	};
	D.prototype.Kb = function(a, b, c, d)
	{
		this.Ub = a;
		this.ic = b;
		this.me = this.Ub.Zf(c);
		this.ne = this.ic.Zf(c);
		this.to = this.Ub.Gy(d)
	};
	Z.tc(z, Z.i.O.na);
	z.prototype.va = Z.i.O.na.prototype;
	z.ts = function()
	{
		Z.i.O.na.na.apply(this, arguments);
		this.bf = new b;
		this.Fi = new b;
		this.Gi = new b;
		this.Aq = new e;
		this.Jt = new e;
		this.C = new e;
		this.aa = new b;
		this.Mw = new e
	};
	z.prototype.LD = function(a)
	{
		void 0 === a && (a = 0);
		this.Fm = a
	};
	z.prototype.KD = function(a)
	{
		void 0 === a && (a = 0);
		this.xq = a
	};
	z.prototype.ts =
		function(a)
		{
			this.va.na.call(this, a);
			this.Jt.T(a.target);
			var b = this.Jt.x - this.Da.L.position.x,
				c = this.Jt.y - this.Da.L.position.y,
				d = this.Da.L.M;
			this.Aq.x = b * d.g.x + c * d.g.y;
			this.Aq.y = b * d.h.x + c * d.h.y;
			this.jB = a.oB;
			this.C.eb();
			this.Fm = a.ko;
			this.xq = a.$n;
			this.Rf = this.aB = 0
		};
	z.prototype.sh = function(a)
	{
		var b = this.Da,
			c = b.aa,
			d = 2 * Math.PI * this.Fm,
			e = c * d * d;
		this.Rf = a.ob * (2 * c * this.xq * d + a.ob * e);
		this.Rf = 0 != this.Rf ? 1 / this.Rf : 0;
		this.aB = a.ob * e * this.Rf;
		var e = b.L.M,
			c = this.Aq.x - b.f.$.x,
			d = this.Aq.y - b.f.$.y,
			f = e.g.x * c + e.h.x * d,
			d = e.g.y *
			c + e.h.y * d,
			c = f,
			e = b.Y,
			f = b.ja;
		this.Fi.g.x = e;
		this.Fi.h.x = 0;
		this.Fi.g.y = 0;
		this.Fi.h.y = e;
		this.Gi.g.x = f * d * d;
		this.Gi.h.x = -f * c * d;
		this.Gi.g.y = -f * c * d;
		this.Gi.h.y = f * c * c;
		this.bf.En(this.Fi);
		this.bf.Xu(this.Gi);
		this.bf.g.x += this.Rf;
		this.bf.h.y += this.Rf;
		this.bf.Fy(this.aa);
		this.Mw.x = b.f.G.x + c - this.Jt.x;
		this.Mw.y = b.f.G.y + d - this.Jt.y;
		b.R *= .98;
		this.C.x *= a.Fd;
		this.C.y *= a.Fd;
		b.o.x += e * this.C.x;
		b.o.y += e * this.C.y;
		b.R += f * (c * this.C.y - d * this.C.x)
	};
	z.prototype.Sg = function(a)
	{
		var b = this.Da,
			c, d, e;
		c = b.L.M;
		var f = this.Aq.x - b.f.$.x,
			g = this.Aq.y - b.f.$.y;
		d = c.g.x * f + c.h.x * g;
		g = c.g.y * f + c.h.y * g;
		f = d;
		d = b.o.x + -b.R * g;
		var h = b.o.y + b.R * f;
		c = this.aa;
		d = d + this.aB * this.Mw.x + this.Rf * this.C.x;
		e = h + this.aB * this.Mw.y + this.Rf * this.C.y;
		h = -(c.g.x * d + c.h.x * e);
		e = -(c.g.y * d + c.h.y * e);
		c = this.C.x;
		d = this.C.y;
		this.C.x += h;
		this.C.y += e;
		a = a.ob * this.jB;
		this.C.Ly() > a * a && this.C.cg(a / this.C.Kk());
		h = this.C.x - c;
		e = this.C.y - d;
		b.o.x += b.Y * h;
		b.o.y += b.Y * e;
		b.R += b.ja * (f * e - g * h)
	};
	z.prototype.Rg = function()
	{
		return !0
	};
	Z.tc(A, Z.i.O.Ka);
	A.prototype.va = Z.i.O.Ka.prototype;
	A.us = function()
	{
		Z.i.O.Ka.Ka.apply(this,
			arguments);
		this.target = new e
	};
	A.prototype.us = function()
	{
		this.va.Ka.call(this);
		this.type = q.gF;
		this.oB = 0;
		this.ko = 5;
		this.$n = .7
	};
	Z.tc(I, Z.i.O.na);
	I.prototype.va = Z.i.O.na.prototype;
	I.ws = function()
	{
		Z.i.O.na.na.apply(this, arguments);
		this.La = new e;
		this.Ma = new e;
		this.Hg = new e;
		this.rl = new e;
		this.ia = new e;
		this.Sa = new e;
		this.Ia = new c;
		this.C = new f
	};
	I.prototype.Rr = function()
	{
		var a = this.Pa,
			b = this.Da,
			c = a.ev(this.La),
			d = b.ev(this.Ma),
			b = d.x - c.x,
			c = d.y - c.y,
			a = a.Iy(this.Hg);
		return a.x * b + a.y * c
	};
	I.prototype.vn = function(a)
	{
		this.Pa.Eb(!0);
		this.Da.Eb(!0);
		this.dh = a
	};
	I.prototype.cv = function()
	{
		return this.Uf
	};
	I.prototype.dv = function()
	{
		return this.Vf
	};
	I.prototype.$r = function(a, b)
	{
		void 0 === a && (a = 0);
		void 0 === b && (b = 0);
		this.Pa.Eb(!0);
		this.Da.Eb(!0);
		this.Uf = a;
		this.Vf = b
	};
	I.prototype.Nr = function(a)
	{
		this.Pa.Eb(!0);
		this.Da.Eb(!0);
		this.bj = a
	};
	I.prototype.as = function(a)
	{
		void 0 === a && (a = 0);
		this.Pa.Eb(!0);
		this.Da.Eb(!0);
		this.ak = a
	};
	I.prototype.ND = function(a)
	{
		void 0 === a && (a = 0);
		this.Pa.Eb(!0);
		this.Da.Eb(!0);
		this.Cq = a
	};
	I.prototype.ws = function(a)
	{
		this.va.na.call(this,
			a);
		this.La.T(a.me);
		this.Ma.T(a.ne);
		this.Hg.T(a.to);
		this.rl.x = -this.Hg.y;
		this.rl.y = this.Hg.x;
		this.iM = a.$m;
		this.C.eb();
		this.Nb = this.mg = 0;
		this.Uf = a.Lw;
		this.Vf = a.ry;
		this.Cq = a.pB;
		this.ak = a.Pt;
		this.dh = a.bl;
		this.bj = a.Vs;
		this.yb = q.fg;
		this.ia.eb();
		this.Sa.eb()
	};
	I.prototype.sh = function(b)
	{
		var c = this.Pa,
			e = this.Da,
			f, g;
		this.Zj.T(c.f.$);
		this.$j.T(e.f.$);
		var h = c.$f();
		e.$f();
		f = c.L.M;
		var k = this.La.x - this.Zj.x,
			t = this.La.y - this.Zj.y;
		g = f.g.x * k + f.h.x * t;
		t = f.g.y * k + f.h.y * t;
		k = g;
		f = e.L.M;
		var l = this.Ma.x - this.$j.x,
			n = this.Ma.y -
			this.$j.y;
		g = f.g.x * l + f.h.x * n;
		n = f.g.y * l + f.h.y * n;
		l = g;
		f = e.f.G.x + l - c.f.G.x - k;
		g = e.f.G.y + n - c.f.G.y - t;
		this.xd = c.Y;
		this.yd = e.Y;
		this.Sf = c.ja;
		this.Tf = e.ja;
		this.ia.T(d.cf(h.M, this.Hg));
		this.lc = (f + k) * this.ia.y - (g + t) * this.ia.x;
		this.mc = l * this.ia.y - n * this.ia.x;
		this.mg = this.xd + this.yd + this.Sf * this.lc * this.lc + this.Tf * this.mc * this.mc;
		this.mg > Number.MIN_VALUE && (this.mg = 1 / this.mg);
		this.Sa.T(d.cf(h.M, this.rl));
		this.vc = (f + k) * this.Sa.y - (g + t) * this.Sa.x;
		this.wc = l * this.Sa.y - n * this.Sa.x;
		h = this.xd;
		k = this.yd;
		t = this.Sf;
		l = this.Tf;
		this.Ia.g.x = h + k + t * this.vc * this.vc + l * this.wc * this.wc;
		this.Ia.g.y = t * this.vc + l * this.wc;
		this.Ia.g.z = t * this.vc * this.lc + l * this.wc * this.mc;
		this.Ia.h.x = this.Ia.g.y;
		this.Ia.h.y = t + l;
		this.Ia.h.z = t * this.lc + l * this.mc;
		this.Ia.Va.x = this.Ia.g.z;
		this.Ia.Va.y = this.Ia.h.z;
		this.Ia.Va.z = h + k + t * this.lc * this.lc + l * this.mc * this.mc;
		this.dh ? (f = this.ia.x * f + this.ia.y * g, d.He(this.Vf - this.Uf) < 2 * a.hc ? this.yb = q.tm : f <= this.Uf ? this.yb != q.Hj && (this.yb = q.Hj, this.C.z = 0) : f >= this.Vf ? this.yb != q.gf && (this.yb = q.gf, this.C.z = 0) : (this.yb = q.fg,
			this.C.z = 0)) : this.yb = q.fg;
		0 == this.bj && (this.Nb = 0);
		b.Ai ? (this.C.x *= b.Fd, this.C.y *= b.Fd, this.Nb *= b.Fd, b = this.C.x * this.Sa.x + (this.Nb + this.C.z) * this.ia.x, f = this.C.x * this.Sa.y + (this.Nb + this.C.z) * this.ia.y, g = this.C.x * this.vc + this.C.y + (this.Nb + this.C.z) * this.lc, h = this.C.x * this.wc + this.C.y + (this.Nb + this.C.z) * this.mc, c.o.x -= this.xd * b, c.o.y -= this.xd * f, c.R -= this.Sf * g, e.o.x += this.yd * b, e.o.y += this.yd * f, e.R += this.Tf * h) : (this.C.eb(), this.Nb = 0)
	};
	I.prototype.Sg = function(a)
	{
		var b = this.Pa,
			c = this.Da,
			g = b.o,
			h = b.R,
			k = c.o,
			l = c.R,
			t, n, p;
		this.bj && this.yb != q.tm && (p = this.mg * (this.ak - (this.ia.x * (k.x - g.x) + this.ia.y * (k.y - g.y) + this.mc * l - this.lc * h)), t = this.Nb, a = a.ob * this.Cq, this.Nb = d.pc(this.Nb + p, -a, a), p = this.Nb - t, t = p * this.ia.x, a = p * this.ia.y, n = p * this.lc, p *= this.mc, g.x -= this.xd * t, g.y -= this.xd * a, h -= this.Sf * n, k.x += this.yd * t, k.y += this.yd * a, l += this.Tf * p);
		n = this.Sa.x * (k.x - g.x) + this.Sa.y * (k.y - g.y) + this.wc * l - this.vc * h;
		a = l - h;
		this.dh && this.yb != q.fg ? (p = this.ia.x * (k.x - g.x) + this.ia.y * (k.y - g.y) + this.mc * l - this.lc * h, t = this.C.nf(), p = this.Ia.cs(new f,
			-n, -a, -p), this.C.wp(p), this.yb == q.Hj ? this.C.z = d.If(this.C.z, 0) : this.yb == q.gf && (this.C.z = d.Cn(this.C.z, 0)), n = -n - (this.C.z - t.z) * this.Ia.Va.x, a = -a - (this.C.z - t.z) * this.Ia.Va.y, a = this.Ia.Mp(new e, n, a), a.x += t.x, a.y += t.y, this.C.x = a.x, this.C.y = a.y, p.x = this.C.x - t.x, p.y = this.C.y - t.y, p.z = this.C.z - t.z, t = p.x * this.Sa.x + p.z * this.ia.x, a = p.x * this.Sa.y + p.z * this.ia.y, n = p.x * this.vc + p.y + p.z * this.lc, p = p.x * this.wc + p.y + p.z * this.mc) : (p = this.Ia.Mp(new e, -n, -a), this.C.x += p.x, this.C.y += p.y, t = p.x * this.Sa.x, a = p.x * this.Sa.y, n =
			p.x * this.vc + p.y, p = p.x * this.wc + p.y);
		g.x -= this.xd * t;
		g.y -= this.xd * a;
		h -= this.Sf * n;
		k.x += this.yd * t;
		k.y += this.yd * a;
		l += this.Tf * p;
		b.o.T(g);
		b.R = h;
		c.o.T(k);
		c.R = l
	};
	I.prototype.Rg = function()
	{
		var c = this.Pa,
			g = this.Da,
			h = c.f.G,
			k = c.f.X,
			l = g.f.G,
			n = g.f.X,
			p, q, r, u, v = 0,
			w;
		r = !1;
		var z = 0,
			A = b.av(k),
			D = b.av(n);
		p = A;
		w = this.La.x - this.Zj.x;
		var G = this.La.y - this.Zj.y;
		q = p.g.x * w + p.h.x * G;
		G = p.g.y * w + p.h.y * G;
		w = q;
		p = D;
		D = this.Ma.x - this.$j.x;
		u = this.Ma.y - this.$j.y;
		q = p.g.x * D + p.h.x * u;
		u = p.g.y * D + p.h.y * u;
		D = q;
		p = l.x + D - h.x - w;
		q = l.y + u - h.y - G;
		if (this.dh)
		{
			this.ia =
				d.cf(A, this.Hg);
			this.lc = (p + w) * this.ia.y - (q + G) * this.ia.x;
			this.mc = D * this.ia.y - u * this.ia.x;
			var I = this.ia.x * p + this.ia.y * q;
			d.He(this.Vf - this.Uf) < 2 * a.hc ? (z = d.pc(I, -a.Wg, a.Wg), v = d.He(I), r = !0) : I <= this.Uf ? (z = d.pc(I - this.Uf + a.hc, -a.Wg, 0), v = this.Uf - I, r = !0) : I >= this.Vf && (z = d.pc(I - this.Vf + a.hc, 0, a.Wg), v = I - this.Vf, r = !0)
		}
		this.Sa = d.cf(A, this.rl);
		this.vc = (p + w) * this.Sa.y - (q + G) * this.Sa.x;
		this.wc = D * this.Sa.y - u * this.Sa.x;
		A = new f;
		G = this.Sa.x * p + this.Sa.y * q;
		D = n - k - this.iM;
		v = d.If(v, d.He(G));
		w = d.He(D);
		r ? (r = this.xd, u = this.yd,
			p = this.Sf, q = this.Tf, this.Ia.g.x = r + u + p * this.vc * this.vc + q * this.wc * this.wc, this.Ia.g.y = p * this.vc + q * this.wc, this.Ia.g.z = p * this.vc * this.lc + q * this.wc * this.mc, this.Ia.h.x = this.Ia.g.y, this.Ia.h.y = p + q, this.Ia.h.z = p * this.lc + q * this.mc, this.Ia.Va.x = this.Ia.g.z, this.Ia.Va.y = this.Ia.h.z, this.Ia.Va.z = r + u + p * this.lc * this.lc + q * this.mc * this.mc, this.Ia.cs(A, -G, -D, -z)) : (r = this.xd, u = this.yd, p = this.Sf, q = this.Tf, z = p * this.vc + q * this.wc, I = p + q, this.Ia.g.Set(r + u + p * this.vc * this.vc + q * this.wc * this.wc, z, 0), this.Ia.h.Set(z, I, 0), z =
			this.Ia.Mp(new e, -G, -D), A.x = z.x, A.y = z.y, A.z = 0);
		z = A.x * this.Sa.x + A.z * this.ia.x;
		r = A.x * this.Sa.y + A.z * this.ia.y;
		G = A.x * this.vc + A.y + A.z * this.lc;
		A = A.x * this.wc + A.y + A.z * this.mc;
		h.x -= this.xd * z;
		h.y -= this.xd * r;
		k -= this.Sf * G;
		l.x += this.yd * z;
		l.y += this.yd * r;
		n += this.Tf * A;
		c.f.X = k;
		g.f.X = n;
		c.rd();
		g.rd();
		return v <= a.hc && w <= a.Sn
	};
	Z.tc(G, Z.i.O.Ka);
	G.prototype.va = Z.i.O.Ka.prototype;
	G.Vk = function()
	{
		Z.i.O.Ka.Ka.apply(this, arguments);
		this.me = new e;
		this.ne = new e;
		this.to = new e
	};
	G.prototype.Vk = function()
	{
		this.va.Ka.call(this);
		this.type =
			q.iF;
		this.to.Set(1, 0);
		this.$m = 0;
		this.bl = !1;
		this.ry = this.Lw = 0;
		this.Vs = !1;
		this.Pt = this.pB = 0
	};
	G.prototype.Kb = function(a, b, c, d)
	{
		this.Ub = a;
		this.ic = b;
		this.me = this.Ub.Zf(c);
		this.ne = this.ic.Zf(c);
		this.to = this.Ub.Gy(d);
		this.$m = this.ic.Di() - this.Ub.Di()
	};
	Z.tc(R, Z.i.O.na);
	R.prototype.va = Z.i.O.na.prototype;
	R.Vp = function()
	{
		Z.i.O.na.na.apply(this, arguments);
		this.ll = new e;
		this.ml = new e;
		this.La = new e;
		this.Ma = new e;
		this.Ac = new e;
		this.Bc = new e
	};
	R.prototype.Vp = function(a)
	{
		this.va.na.call(this, a);
		this.ei = this.Pa.Wd.aM;
		this.ll.x = a.rw.x - this.ei.L.position.x;
		this.ll.y = a.rw.y - this.ei.L.position.y;
		this.ml.x = a.sw.x - this.ei.L.position.x;
		this.ml.y = a.sw.y - this.ei.L.position.y;
		this.La.T(a.me);
		this.Ma.T(a.ne);
		this.Ad = a.ratio;
		this.vq = a.SA + this.Ad * a.TA;
		this.cG = d.Cn(a.mG, this.vq - this.Ad * R.Qv);
		this.dG = d.Cn(a.nG, (this.vq - R.Qv) / this.Ad);
		this.Yj = this.Xj = this.C = 0
	};
	R.prototype.sh = function(b)
	{
		var c = this.Pa,
			d = this.Da,
			e;
		e = c.L.M;
		var f = this.La.x - c.f.$.x,
			g = this.La.y - c.f.$.y,
			h = e.g.x * f + e.h.x * g,
			g = e.g.y * f + e.h.y * g,
			f = h;
		e = d.L.M;
		var k = this.Ma.x -
			d.f.$.x,
			l = this.Ma.y - d.f.$.y,
			h = e.g.x * k + e.h.x * l,
			l = e.g.y * k + e.h.y * l,
			k = h;
		e = d.f.G.x + k;
		var h = d.f.G.y + l,
			n = this.ei.L.position.x + this.ml.x,
			t = this.ei.L.position.y + this.ml.y;
		this.Ac.Set(c.f.G.x + f - (this.ei.L.position.x + this.ll.x), c.f.G.y + g - (this.ei.L.position.y + this.ll.y));
		this.Bc.Set(e - n, h - t);
		e = this.Ac.Kk();
		h = this.Bc.Kk();
		e > a.hc ? this.Ac.cg(1 / e) : this.Ac.eb();
		h > a.hc ? this.Bc.cg(1 / h) : this.Bc.eb();
		0 < this.vq - e - this.Ad * h ? (this.mB = q.fg, this.C = 0) : this.mB = q.gf;
		e < this.cG ? (this.gB = q.fg, this.Xj = 0) : this.gB = q.gf;
		h < this.dG ?
			(this.hB = q.fg, this.Yj = 0) : this.hB = q.gf;
		e = f * this.Ac.y - g * this.Ac.x;
		h = k * this.Bc.y - l * this.Bc.x;
		this.At = c.Y + c.ja * e * e;
		this.Bt = d.Y + d.ja * h * h;
		this.Xw = this.At + this.Ad * this.Ad * this.Bt;
		this.At = 1 / this.At;
		this.Bt = 1 / this.Bt;
		this.Xw = 1 / this.Xw;
		b.Ai ? (this.C *= b.Fd, this.Xj *= b.Fd, this.Yj *= b.Fd, b = (-this.C - this.Xj) * this.Ac.x, e = (-this.C - this.Xj) * this.Ac.y, h = (-this.Ad * this.C - this.Yj) * this.Bc.x, n = (-this.Ad * this.C - this.Yj) * this.Bc.y, c.o.x += c.Y * b, c.o.y += c.Y * e, c.R += c.ja * (f * e - g * b), d.o.x += d.Y * h, d.o.y += d.Y * n, d.R += d.ja * (k * n - l * h)) :
			this.Yj = this.Xj = this.C = 0
	};
	R.prototype.Sg = function()
	{
		var a = this.Pa,
			b = this.Da,
			c;
		c = a.L.M;
		var e = this.La.x - a.f.$.x,
			f = this.La.y - a.f.$.y,
			g = c.g.x * e + c.h.x * f,
			f = c.g.y * e + c.h.y * f,
			e = g;
		c = b.L.M;
		var h = this.Ma.x - b.f.$.x,
			k = this.Ma.y - b.f.$.y,
			g = c.g.x * h + c.h.x * k,
			k = c.g.y * h + c.h.y * k,
			h = g,
			l, n;
		this.mB == q.gf && (c = a.o.x + -a.R * f, g = a.o.y + a.R * e, l = b.o.x + -b.R * k, n = b.o.y + b.R * h, c = -(this.Ac.x * c + this.Ac.y * g) - this.Ad * (this.Bc.x * l + this.Bc.y * n), n = this.Xw * -c, c = this.C, this.C = d.If(0, this.C + n), n = this.C - c, c = -n * this.Ac.x, g = -n * this.Ac.y, l = -this.Ad *
			n * this.Bc.x, n = -this.Ad * n * this.Bc.y, a.o.x += a.Y * c, a.o.y += a.Y * g, a.R += a.ja * (e * g - f * c), b.o.x += b.Y * l, b.o.y += b.Y * n, b.R += b.ja * (h * n - k * l));
		this.gB == q.gf && (c = a.o.x + -a.R * f, g = a.o.y + a.R * e, c = -(this.Ac.x * c + this.Ac.y * g), n = -this.At * c, c = this.Xj, this.Xj = d.If(0, this.Xj + n), n = this.Xj - c, c = -n * this.Ac.x, g = -n * this.Ac.y, a.o.x += a.Y * c, a.o.y += a.Y * g, a.R += a.ja * (e * g - f * c));
		this.hB == q.gf && (l = b.o.x + -b.R * k, n = b.o.y + b.R * h, c = -(this.Bc.x * l + this.Bc.y * n), n = -this.Bt * c, c = this.Yj, this.Yj = d.If(0, this.Yj + n), n = this.Yj - c, l = -n * this.Bc.x, n = -n * this.Bc.y,
			b.o.x += b.Y * l, b.o.y += b.Y * n, b.R += b.ja * (h * n - k * l))
	};
	R.prototype.Rg = function()
	{
		var b = this.Pa,
			c = this.Da,
			e, f = this.ei.L.position.x + this.ll.x,
			g = this.ei.L.position.y + this.ll.y,
			h = this.ei.L.position.x + this.ml.x,
			k = this.ei.L.position.y + this.ml.y,
			l, n, p, r, u, v, w, z = 0;
		this.mB == q.gf && (e = b.L.M, l = this.La.x - b.f.$.x, n = this.La.y - b.f.$.y, u = e.g.x * l + e.h.x * n, n = e.g.y * l + e.h.y * n, l = u, e = c.L.M, p = this.Ma.x - c.f.$.x, r = this.Ma.y - c.f.$.y, u = e.g.x * p + e.h.x * r, r = e.g.y * p + e.h.y * r, p = u, e = b.f.G.x + l, u = b.f.G.y + n, v = c.f.G.x + p, w = c.f.G.y + r, this.Ac.Set(e -
			f, u - g), this.Bc.Set(v - h, w - k), e = this.Ac.Kk(), u = this.Bc.Kk(), e > a.hc ? this.Ac.cg(1 / e) : this.Ac.eb(), u > a.hc ? this.Bc.cg(1 / u) : this.Bc.eb(), e = this.vq - e - this.Ad * u, z = d.If(z, -e), e = d.pc(e + a.hc, -a.Wg, 0), w = -this.Xw * e, e = -w * this.Ac.x, u = -w * this.Ac.y, v = -this.Ad * w * this.Bc.x, w = -this.Ad * w * this.Bc.y, b.f.G.x += b.Y * e, b.f.G.y += b.Y * u, b.f.X += b.ja * (l * u - n * e), c.f.G.x += c.Y * v, c.f.G.y += c.Y * w, c.f.X += c.ja * (p * w - r * v), b.rd(), c.rd());
		this.gB == q.gf && (e = b.L.M, l = this.La.x - b.f.$.x, n = this.La.y - b.f.$.y, u = e.g.x * l + e.h.x * n, n = e.g.y * l + e.h.y * n, l = u, e =
			b.f.G.x + l, u = b.f.G.y + n, this.Ac.Set(e - f, u - g), e = this.Ac.Kk(), e > a.hc ? (this.Ac.x *= 1 / e, this.Ac.y *= 1 / e) : this.Ac.eb(), e = this.cG - e, z = d.If(z, -e), e = d.pc(e + a.hc, -a.Wg, 0), w = -this.At * e, e = -w * this.Ac.x, u = -w * this.Ac.y, b.f.G.x += b.Y * e, b.f.G.y += b.Y * u, b.f.X += b.ja * (l * u - n * e), b.rd());
		this.hB == q.gf && (e = c.L.M, p = this.Ma.x - c.f.$.x, r = this.Ma.y - c.f.$.y, u = e.g.x * p + e.h.x * r, r = e.g.y * p + e.h.y * r, p = u, v = c.f.G.x + p, w = c.f.G.y + r, this.Bc.Set(v - h, w - k), u = this.Bc.Kk(), u > a.hc ? (this.Bc.x *= 1 / u, this.Bc.y *= 1 / u) : this.Bc.eb(), e = this.dG - u, z = d.If(z, -e),
			e = d.pc(e + a.hc, -a.Wg, 0), w = -this.Bt * e, v = -w * this.Bc.x, w = -w * this.Bc.y, c.f.G.x += c.Y * v, c.f.G.y += c.Y * w, c.f.X += c.ja * (p * w - r * v), c.rd());
		return z < a.hc
	};
	Z.Dd.push(function()
	{
		Z.i.O.Vp.Qv = 2
	});
	Z.tc(O, Z.i.O.Ka);
	O.prototype.va = Z.i.O.Ka.prototype;
	O.Qn = function()
	{
		Z.i.O.Ka.Ka.apply(this, arguments);
		this.rw = new e;
		this.sw = new e;
		this.me = new e;
		this.ne = new e
	};
	O.prototype.Qn = function()
	{
		this.va.Ka.call(this);
		this.type = q.jF;
		this.rw.Set(-1, 1);
		this.sw.Set(1, 1);
		this.me.Set(-1, 0);
		this.ne.Set(1, 0);
		this.nG = this.TA = this.mG = this.SA =
			0;
		this.ratio = 1;
		this.rf = !0
	};
	O.prototype.Kb = function(a, b, c, d, e, f, g)
	{
		void 0 === g && (g = 0);
		this.Ub = a;
		this.ic = b;
		this.rw.T(c);
		this.sw.T(d);
		this.me = this.Ub.Zf(e);
		this.ne = this.ic.Zf(f);
		a = e.x - c.x;
		c = e.y - c.y;
		this.SA = Math.sqrt(a * a + c * c);
		c = f.x - d.x;
		d = f.y - d.y;
		this.TA = Math.sqrt(c * c + d * d);
		this.ratio = g;
		g = this.SA + this.ratio * this.TA;
		this.mG = g - this.ratio * R.Qv;
		this.nG = (g - R.Qv) / this.ratio
	};
	Z.tc(K, Z.i.O.na);
	K.prototype.va = Z.i.O.na.prototype;
	K.Wp = function()
	{
		Z.i.O.na.na.apply(this, arguments);
		this.bf = new b;
		this.Fi = new b;
		this.Gi =
			new b;
		this.Ur = new b;
		this.Pe = new f;
		this.Vi = new e;
		this.wk = new e;
		this.La = new e;
		this.Ma = new e;
		this.C = new f;
		this.aa = new c
	};
	K.prototype.bv = function()
	{
		return this.Da.f.X - this.Pa.f.X - this.It
	};
	K.prototype.vn = function(a)
	{
		this.dh = a
	};
	K.prototype.cv = function()
	{
		return this.Bq
	};
	K.prototype.dv = function()
	{
		return this.Lt
	};
	K.prototype.$r = function(a, b)
	{
		void 0 === a && (a = 0);
		void 0 === b && (b = 0);
		this.Bq = a;
		this.Lt = b
	};
	K.prototype.Nr = function(a)
	{
		this.bj = a
	};
	K.prototype.as = function(a)
	{
		void 0 === a && (a = 0);
		this.Pa.Eb(!0);
		this.Da.Eb(!0);
		this.ak = a
	};
	K.prototype.OD = function(a)
	{
		void 0 === a && (a = 0);
		this.eG = a
	};
	K.prototype.Wp = function(a)
	{
		this.va.na.call(this, a);
		this.La.T(a.me);
		this.Ma.T(a.ne);
		this.It = a.$m;
		this.C.eb();
		this.Nb = 0;
		this.Bq = a.RF;
		this.Lt = a.uI;
		this.eG = a.oM;
		this.ak = a.Pt;
		this.dh = a.bl;
		this.bj = a.Vs;
		this.yb = q.fg
	};
	K.prototype.sh = function(b)
	{
		var c = this.Pa,
			e = this.Da,
			f, g;
		f = c.L.M;
		var h = this.La.x - c.f.$.x,
			k = this.La.y - c.f.$.y;
		g = f.g.x * h + f.h.x * k;
		k = f.g.y * h + f.h.y * k;
		h = g;
		f = e.L.M;
		var l = this.Ma.x - e.f.$.x,
			n = this.Ma.y - e.f.$.y;
		g = f.g.x * l + f.h.x * n;
		n = f.g.y *
			l + f.h.y * n;
		l = g;
		f = c.Y;
		g = e.Y;
		var p = c.ja,
			t = e.ja;
		this.aa.g.x = f + g + k * k * p + n * n * t;
		this.aa.h.x = -k * h * p - n * l * t;
		this.aa.Va.x = -k * p - n * t;
		this.aa.g.y = this.aa.h.x;
		this.aa.h.y = f + g + h * h * p + l * l * t;
		this.aa.Va.y = h * p + l * t;
		this.aa.g.z = this.aa.Va.x;
		this.aa.h.z = this.aa.Va.y;
		this.aa.Va.z = p + t;
		this.mg = 1 / (p + t);
		0 == this.bj && (this.Nb = 0);
		if (this.dh)
		{
			var r = e.f.X - c.f.X - this.It;
			d.He(this.Lt - this.Bq) < 2 * a.Sn ? this.yb = q.tm : r <= this.Bq ? (this.yb != q.Hj && (this.C.z = 0), this.yb = q.Hj) : r >= this.Lt ? (this.yb != q.gf && (this.C.z = 0), this.yb = q.gf) : (this.yb = q.fg,
				this.C.z = 0)
		}
		else this.yb = q.fg;
		b.Ai ? (this.C.x *= b.Fd, this.C.y *= b.Fd, this.Nb *= b.Fd, b = this.C.x, r = this.C.y, c.o.x -= f * b, c.o.y -= f * r, c.R -= p * (h * r - k * b + this.Nb + this.C.z), e.o.x += g * b, e.o.y += g * r, e.R += t * (l * r - n * b + this.Nb + this.C.z)) : (this.C.eb(), this.Nb = 0)
	};
	K.prototype.Sg = function(a)
	{
		var b = this.Pa,
			c = this.Da,
			e, f, g, h, k, l = b.o,
			n = b.R,
			p = c.o,
			t = c.R,
			r = b.Y,
			u = c.Y,
			v = b.ja,
			w = c.ja;
		this.bj && this.yb != q.tm && (g = this.mg * -(t - n - this.ak), h = this.Nb, a = a.ob * this.eG, this.Nb = d.pc(this.Nb + g, -a, a), g = this.Nb - h, n -= v * g, t += w * g);
		if (this.dh && this.yb !=
			q.fg)
		{
			e = b.L.M;
			g = this.La.x - b.f.$.x;
			h = this.La.y - b.f.$.y;
			f = e.g.x * g + e.h.x * h;
			h = e.g.y * g + e.h.y * h;
			g = f;
			e = c.L.M;
			a = this.Ma.x - c.f.$.x;
			k = this.Ma.y - c.f.$.y;
			f = e.g.x * a + e.h.x * k;
			k = e.g.y * a + e.h.y * k;
			a = f;
			f = p.x + -t * k - l.x - -n * h;
			var z = p.y + t * a - l.y - n * g;
			this.aa.cs(this.Pe, -f, -z, -(t - n));
			this.yb == q.tm ? this.C.wp(this.Pe) : this.yb == q.Hj ? (e = this.C.z + this.Pe.z, 0 > e && (this.aa.Mp(this.wk, -f, -z), this.Pe.x = this.wk.x, this.Pe.y = this.wk.y, this.Pe.z = -this.C.z, this.C.x += this.wk.x, this.C.y += this.wk.y, this.C.z = 0)) : this.yb == q.gf && (e = this.C.z + this.Pe.z,
				0 < e && (this.aa.Mp(this.wk, -f, -z), this.Pe.x = this.wk.x, this.Pe.y = this.wk.y, this.Pe.z = -this.C.z, this.C.x += this.wk.x, this.C.y += this.wk.y, this.C.z = 0));
			l.x -= r * this.Pe.x;
			l.y -= r * this.Pe.y;
			n -= v * (g * this.Pe.y - h * this.Pe.x + this.Pe.z);
			p.x += u * this.Pe.x;
			p.y += u * this.Pe.y;
			t += w * (a * this.Pe.y - k * this.Pe.x + this.Pe.z)
		}
		else e = b.L.M, g = this.La.x - b.f.$.x, h = this.La.y - b.f.$.y, f = e.g.x * g + e.h.x * h, h = e.g.y * g + e.h.y * h, g = f, e = c.L.M, a = this.Ma.x - c.f.$.x, k = this.Ma.y - c.f.$.y, f = e.g.x * a + e.h.x * k, k = e.g.y * a + e.h.y * k, a = f, this.aa.Mp(this.Vi, -(p.x +
			-t * k - l.x - -n * h), -(p.y + t * a - l.y - n * g)), this.C.x += this.Vi.x, this.C.y += this.Vi.y, l.x -= r * this.Vi.x, l.y -= r * this.Vi.y, n -= v * (g * this.Vi.y - h * this.Vi.x), p.x += u * this.Vi.x, p.y += u * this.Vi.y, t += w * (a * this.Vi.y - k * this.Vi.x);
		b.o.T(l);
		b.R = n;
		c.o.T(p);
		c.R = t
	};
	K.prototype.Rg = function()
	{
		var b, c, e = this.Pa,
			f = this.Da,
			g = 0,
			h, k, l;
		if (this.dh && this.yb != q.fg)
		{
			b = f.f.X - e.f.X - this.It;
			var n = 0;
			this.yb == q.tm ? (b = d.pc(b - this.Bq, -a.Pv, a.Pv), n = -this.mg * b, g = d.He(b)) : this.yb == q.Hj ? (b -= this.Bq, g = -b, b = d.pc(b + a.Sn, -a.Pv, 0), n = -this.mg * b) : this.yb ==
				q.gf && (g = b -= this.Lt, b = d.pc(b - a.Sn, 0, a.Pv), n = -this.mg * b);
			e.f.X -= e.ja * n;
			f.f.X += f.ja * n;
			e.rd();
			f.rd()
		}
		c = e.L.M;
		n = this.La.x - e.f.$.x;
		b = this.La.y - e.f.$.y;
		h = c.g.x * n + c.h.x * b;
		b = c.g.y * n + c.h.y * b;
		n = h;
		c = f.L.M;
		var p = this.Ma.x - f.f.$.x,
			r = this.Ma.y - f.f.$.y;
		h = c.g.x * p + c.h.x * r;
		r = c.g.y * p + c.h.y * r;
		p = h;
		k = f.f.G.x + p - e.f.G.x - n;
		l = f.f.G.y + r - e.f.G.y - b;
		var u = k * k + l * l;
		c = Math.sqrt(u);
		h = e.Y;
		var v = f.Y,
			w = e.ja,
			z = f.ja,
			A = 10 * a.hc;
		u > A * A && (u = 1 / (h + v), k = u * -k, l = u * -l, e.f.G.x -= .5 * h * k, e.f.G.y -= .5 * h * l, f.f.G.x += .5 * v * k, f.f.G.y += .5 * v * l, k = f.f.G.x + p - e.f.G.x -
			n, l = f.f.G.y + r - e.f.G.y - b);
		this.Fi.g.x = h + v;
		this.Fi.h.x = 0;
		this.Fi.g.y = 0;
		this.Fi.h.y = h + v;
		this.Gi.g.x = w * b * b;
		this.Gi.h.x = -w * n * b;
		this.Gi.g.y = -w * n * b;
		this.Gi.h.y = w * n * n;
		this.Ur.g.x = z * r * r;
		this.Ur.h.x = -z * p * r;
		this.Ur.g.y = -z * p * r;
		this.Ur.h.y = z * p * p;
		this.bf.En(this.Fi);
		this.bf.Xu(this.Gi);
		this.bf.Xu(this.Ur);
		this.bf.Fn(K.UC, -k, -l);
		k = K.UC.x;
		l = K.UC.y;
		e.f.G.x -= e.Y * k;
		e.f.G.y -= e.Y * l;
		e.f.X -= e.ja * (n * l - b * k);
		f.f.G.x += f.Y * k;
		f.f.G.y += f.Y * l;
		f.f.X += f.ja * (p * l - r * k);
		e.rd();
		f.rd();
		return c <= a.hc && g <= a.Sn
	};
	Z.Dd.push(function()
	{
		Z.i.O.Wp.UC =
			new e
	});
	Z.tc(L, Z.i.O.Ka);
	L.prototype.va = Z.i.O.Ka.prototype;
	L.Wk = function()
	{
		Z.i.O.Ka.Ka.apply(this, arguments);
		this.me = new e;
		this.ne = new e
	};
	L.prototype.Wk = function()
	{
		this.va.Ka.call(this);
		this.type = q.hw;
		this.me.Set(0, 0);
		this.ne.Set(0, 0);
		this.Pt = this.oM = this.uI = this.RF = this.$m = 0;
		this.Vs = this.bl = !1
	};
	L.prototype.Kb = function(a, b, c)
	{
		this.Ub = a;
		this.ic = b;
		this.me = this.Ub.Zf(c);
		this.ne = this.ic.Zf(c);
		this.$m = this.ic.Di() - this.Ub.Di()
	};
	Z.tc(M, Z.i.O.na);
	M.prototype.va = Z.i.O.na.prototype;
	M.As = function()
	{
		Z.i.O.na.na.apply(this,
			arguments);
		this.Dh = new e;
		this.Eh = new e;
		this.C = new f;
		this.aa = new c
	};
	M.prototype.As = function(a)
	{
		this.va.na.call(this, a);
		this.Dh.T(a.me);
		this.Eh.T(a.ne);
		this.It = a.$m;
		this.C.eb();
		this.aa = new c
	};
	M.prototype.sh = function(a)
	{
		var b, c, d = this.Pa,
			e = this.Da;
		b = d.L.M;
		var f = this.Dh.x - d.f.$.x,
			g = this.Dh.y - d.f.$.y;
		c = b.g.x * f + b.h.x * g;
		g = b.g.y * f + b.h.y * g;
		f = c;
		b = e.L.M;
		var h = this.Eh.x - e.f.$.x,
			k = this.Eh.y - e.f.$.y;
		c = b.g.x * h + b.h.x * k;
		k = b.g.y * h + b.h.y * k;
		h = c;
		b = d.Y;
		c = e.Y;
		var l = d.ja,
			n = e.ja;
		this.aa.g.x = b + c + g * g * l + k * k * n;
		this.aa.h.x = -g *
			f * l - k * h * n;
		this.aa.Va.x = -g * l - k * n;
		this.aa.g.y = this.aa.h.x;
		this.aa.h.y = b + c + f * f * l + h * h * n;
		this.aa.Va.y = f * l + h * n;
		this.aa.g.z = this.aa.Va.x;
		this.aa.h.z = this.aa.Va.y;
		this.aa.Va.z = l + n;
		a.Ai ? (this.C.x *= a.Fd, this.C.y *= a.Fd, this.C.z *= a.Fd, d.o.x -= b * this.C.x, d.o.y -= b * this.C.y, d.R -= l * (f * this.C.y - g * this.C.x + this.C.z), e.o.x += c * this.C.x, e.o.y += c * this.C.y, e.R += n * (h * this.C.y - k * this.C.x + this.C.z)) : this.C.eb()
	};
	M.prototype.Sg = function()
	{
		var a, b, c = this.Pa,
			d = this.Da,
			e = c.o,
			g = c.R,
			h = d.o,
			k = d.R,
			l = c.Y,
			n = d.Y,
			p = c.ja,
			q = d.ja;
		a = c.L.M;
		var r = this.Dh.x - c.f.$.x,
			u = this.Dh.y - c.f.$.y;
		b = a.g.x * r + a.h.x * u;
		u = a.g.y * r + a.h.y * u;
		r = b;
		a = d.L.M;
		var v = this.Eh.x - d.f.$.x,
			w = this.Eh.y - d.f.$.y;
		b = a.g.x * v + a.h.x * w;
		w = a.g.y * v + a.h.y * w;
		v = b;
		a = h.x - k * w - e.x + g * u;
		b = h.y + k * v - e.y - g * r;
		var z = k - g,
			A = new f;
		this.aa.cs(A, -a, -b, -z);
		this.C.wp(A);
		e.x -= l * A.x;
		e.y -= l * A.y;
		g -= p * (r * A.y - u * A.x + A.z);
		h.x += n * A.x;
		h.y += n * A.y;
		k += q * (v * A.y - w * A.x + A.z);
		c.R = g;
		d.R = k
	};
	M.prototype.Rg = function()
	{
		var b, c, e = this.Pa,
			g = this.Da;
		b = e.L.M;
		var h = this.Dh.x - e.f.$.x,
			k = this.Dh.y - e.f.$.y;
		c = b.g.x * h + b.h.x * k;
		k = b.g.y *
			h + b.h.y * k;
		h = c;
		b = g.L.M;
		var l = this.Eh.x - g.f.$.x,
			n = this.Eh.y - g.f.$.y;
		c = b.g.x * l + b.h.x * n;
		n = b.g.y * l + b.h.y * n;
		l = c;
		b = e.Y;
		c = g.Y;
		var p = e.ja,
			q = g.ja,
			r = g.f.G.x + l - e.f.G.x - h,
			u = g.f.G.y + n - e.f.G.y - k,
			v = g.f.X - e.f.X - this.It,
			w = 10 * a.hc,
			z = Math.sqrt(r * r + u * u),
			A = d.He(v);
		z > w && (p *= 1, q *= 1);
		this.aa.g.x = b + c + k * k * p + n * n * q;
		this.aa.h.x = -k * h * p - n * l * q;
		this.aa.Va.x = -k * p - n * q;
		this.aa.g.y = this.aa.h.x;
		this.aa.h.y = b + c + h * h * p + l * l * q;
		this.aa.Va.y = h * p + l * q;
		this.aa.g.z = this.aa.Va.x;
		this.aa.h.z = this.aa.Va.y;
		this.aa.Va.z = p + q;
		w = new f;
		this.aa.cs(w, -r, -u,
			-v);
		e.f.G.x -= b * w.x;
		e.f.G.y -= b * w.y;
		e.f.X -= p * (h * w.y - k * w.x + w.z);
		g.f.G.x += c * w.x;
		g.f.G.y += c * w.y;
		g.f.X += q * (l * w.y - n * w.x + w.z);
		e.rd();
		g.rd();
		return z <= a.hc && A <= a.Sn
	};
	Z.tc(N, Z.i.O.Ka);
	N.prototype.va = Z.i.O.Ka.prototype;
	N.Bs = function()
	{
		Z.i.O.Ka.Ka.apply(this, arguments);
		this.me = new e;
		this.ne = new e
	};
	N.prototype.Bs = function()
	{
		this.va.Ka.call(this);
		this.type = q.kF;
		this.$m = 0
	};
	N.prototype.Kb = function(a, b, c)
	{
		this.Ub = a;
		this.ic = b;
		this.me.T(this.Ub.Zf(c));
		this.ne.T(this.ic.Zf(c));
		this.$m = this.ic.Di() - this.Ub.Di()
	}
})();
(function()
{
	var a = Z.i.Vg;
	a.Vg = function() {};
	a.prototype.Vg = function() {}
})();
var ek;
for (ek = 0; ek < Z.Dd.length; ++ek) Z.Dd[ek]();
delete Z.Dd;

function Lm()
{
	this.ha = Wl.gJ;
	this.Ho = this.$w = this.bx = this.ax = this.Am = this.Cm = this.Bm = this.gG = this.Jo = this.Io = this.Pw = this.Ow = this.Nw = this.U = this.Ob = this.Uj = this.zt = this.jG = this.Dq = this.Ve = this.hf = this.wf = this.Se = this.ah = 0;
	this.Fg = null;
	this.fj = this.ej = 1;
	this.Et = this.Dt = this.vt = this.wt = this.Ht = this.Gt = this.ol = this.cj = this.wo = this.xo = 0;
	this.ql = this.pl = null;
	this.Gh = !1
}
Lm.prototype = m(new ji,
{
	Ay: function(a)
	{
		for (var b = 0, c = a, d, e = 0; 32 > e; e++) d = c, c >>= 1, d & 1 && b++;
		if (0 == b) a = 0;
		else
			for (b = this.I.random(b), c = a, a = 0; !(d = c, c >>= 1, d & 1 && (b--, 0 > b)); a++);
		return a
	},
	MA: function(a)
	{
		V(a, 1);
		this.Kc = 180 * this.Ay(F(a)) / 16;
		this.Se = F(a) / 100;
		this.wf = F(a) / 100;
		this.hf = F(a) / 100;
		this.Ve = F(a) / 100;
		this.U = F(a);
		this.Ob = T(a);
		var b = F(a);
		this.Dq = b / 20;
		this.jG = T(a);
		this.Nw = 50 * F(a) / 300;
		this.zt = F(a) / 100 * 10;
		this.Uj = F(a) / 750;
		this.gG = T(a);
		this.yq = F(a);
		this.cj = T(a);
		this.ol = T(a);
		this.pl = a.ed(24);
		this.ql = a.ed(24);
		this.Gt = F(a) * Z.K.ma.Za / 180;
		this.Ht = F(a) * Z.K.ma.Za / 180;
		this.wt = F(a);
		this.vt = F(a) / 100;
		this.Dt = F(a);
		this.Et = F(a);
		this.Pw = this.Ow = !1;
		this.v.b.vk = 0;
		this.v.b.nc = b;
		this.Cm = this.Bm = 0;
		this.Am = !1;
		this.bx = this.ax = 0;
		this.$w = !1;
		this.Ho = -1;
		this.Gh = !1;
		this.la = this.zj();
		this.s = null;
		oi(this, this.v, 0)
	},
	Vc: function()
	{
		var a = this.zj();
		null != a && a.Wq(this.s)
	},
	zj: function()
	{
		var a = 0,
			b;
		for (b = 0; b < this.I.Tb; a++, b++)
		{
			for (; null == this.I.W[a];) a++;
			var c = this.I.W[a];
			if (32 <= c.rb && 1110590791 == c.ga.Mc && c.ext.identifier == this.yq) return c.ext
		}
		return null
	},
	yj: function()
	{
		if (null != this.s) return !0;
		null == this.la && (this.la = this.zj(), null != this.la || Hg || (alert("Please drop a Physics - Engine object in the frame."), Hg = !0));
		if (null == this.la) return !1;
		this.s = this.la.oj(Z.i.Qc.re, this.v.A, this.v.w, this.Kc, this.wf, this, 0, 0);
		if (this.v.Ca)
		{
			this.zq = this.v.b.Jb;
			var a = Y(this.I.m.Ba, this.zq);
			this.xo = a.width;
			this.wo = a.height
		}
		else this.Ob = 0, this.xo = this.v.da, this.wo = this.v.ca;
		this.Bi();
		a = this.s.aa;
		this.Dq = 2 * this.Dq * a;
		this.zt = 2 * this.zt * a;
		0 < this.zt && this.la.MM(this.s, this.zt,
			this.Kc + 180);
		this.s.MD(this.Uj);
		a = this.s.L.position;
		this.Io = a.x;
		this.Jo = a.y;
		return !0
	},
	Bi: function()
	{
		null != this.Fg && this.la.BH(this.s, this.Fg);
		this.ej = this.v.b.bc;
		this.fj = this.v.b.cc;
		switch (this.Ob)
		{
			case 0:
				this.Fg = this.la.sk(this.s, this, this.v.A, this.v.w, this.xo * this.ej, this.wo * this.fj, this.hf, this.Se, this.Ve);
				break;
			case 1:
				this.Fg = this.la.mC(this.s, this, this.v.A, this.v.w, (this.v.da + this.v.ca) / 4 * (this.ej + this.fj) / 2, this.hf, this.Se, this.Ve);
				break;
			case 2:
				this.Fg = this.la.Zo(this.s, this, this.v.A, this.v.w,
					this.v.b.Jb, this.hf, this.Se, this.Ve, this.ej, this.fj)
		}
	},
	fc: function()
	{
		switch (this.cj)
		{
			case 1:
				this.la.Xq(this, this.cj, this.ol, this.pl, this.ql, this.Gt, this.Ht);
				break;
			case 2:
				this.la.Xq(this, this.cj, this.ol, this.pl, this.ql, this.wt, this.vt);
				break;
			case 3:
				this.la.Xq(this, this.cj, this.ol, this.pl, this.ql, this.Dt, this.Et)
		}
	},
	move: function()
	{
		if (!this.yj() || this.la.Bw()) return !1;
		this.v.b.bc == this.ej && this.v.b.cc == this.fj || this.Bi();
		var a = this.I.pe[this.gG];
		this.Kc = this.la.CH(this.s);
		if (0 != (a & 15) || this.Pw || this.Ow)
		{
			if (a &
				4 || this.Ow) this.Ow = !1, this.Kc += this.Nw, this.la.nC(this.s, 0);
			if (a & 8 || this.Pw) this.Pw = !1, this.Kc -= this.Nw, this.la.nC(this.s, 0)
		}
		360 < this.Kc && (this.Kc -= 360);
		0 > this.Kc && (this.Kc += 360);
		this.la.Ix(this.s, this.Kc);
		var b = 1;
		switch (this.jG)
		{
			case 0:
				b = 1;
				break;
			case 1:
				b = 16;
				break;
			case 2:
				b = 32
		}
		var c = 0;
		a & b && (this.la.KM(this.s, this.Dq, this.Kc), c = 1);
		this.la.yH(this.s, this.Bm + this.ax, this.Cm + this.bx);
		this.Am && (this.Am = !1, this.Cm = this.Bm = 0);
		this.$w && (this.$w = !1, this.bx = this.ax = 0);
		a = {};
		this.la.oC(this.s, a);
		if (a.x != this.v.A ||
			a.y != this.v.w) this.v.A = a.x, this.v.w = a.y, this.Gh = !0, this.v.b.fa = !0;
		this.JD();
		var a = this.s.L.position,
			b = (a.x - this.Io) * this.la.ta,
			d = (a.y - this.Jo) * this.la.ta;
		this.Io = a.x;
		this.Jo = a.y;
		this.v.b.ra = Math.floor(50 * Math.sqrt(b * b + d * d) / 7 * this.I.ce);
		this.v.b.ra = Math.min(this.v.b.ra, 250);
		this.Ln(c);
		this.U & 4 && mi(this);
		return this.v.b.fa
	},
	JD: function()
	{
		if (this.Kc != this.Ho)
			if (this.Ho = this.Kc, this.v.b.fa = !0, this.U & 1) this.v.b.ac = this.Kc, this.v.b.wa = 0;
			else
			{
				for (this.v.b.wa = Math.floor(this.Kc / 11.25); 0 > this.v.b.wa;) this.v.b.wa +=
					32;
				for (; 32 <= this.v.b.wa;) this.v.b.wa -= 32
			}
	},
	cm: function(a)
	{
		this.Se = a / 100;
		this.Fg.cm(this.Se)
	},
	dm: function()
	{
		this.FP / 100;
		this.s.tv(this.wf)
	},
	Lp: function(a)
	{
		this.hf = a / 100;
		this.la.DH(this.s)
	},
	em: function(a)
	{
		this.Ve = a / 100;
		this.Fg.em(this.Ve)
	},
	setPosition: function(a, b)
	{
		if (a != this.v.A || b != this.v.w) this.Gh || (this.v.A = a, this.v.w = b), this.la.Vq(this.s, a, b)
	},
	Fe: function(a)
	{
		a != this.v.A && (this.Gh || (this.v.A = a), this.la.Vq(this.s, a, 1448633650))
	},
	Ge: function(a)
	{
		a != this.v.w && (this.Gh || (this.v.w = a), this.la.Vq(this.s,
			1448633650, a))
	},
	rp: function(a)
	{
		this.la.Ix(this.s, a);
		this.Gh || (this.Kc = a, this.JD())
	},
	BA: function()
	{
		if (this.U & 1)
		{
			for (var a = this.Kc; 360 <= a;) a -= 360;
			for (; 0 > a;) a += 360;
			return a
		}
		return 123456789
	},
	stop: function()
	{
		this.zf = !0;
		this.Tw != this.I.jp && this.la.EH(this.s, 0, 0, 0, 0)
	},
	qh: function(a)
	{
		this.rp(11.25 * a)
	},
	hd: function()
	{
		return this.U & 1 ? Math.floor(this.Kc / 11.25) : this.v.b.wa
	},
	NC: function(a)
	{
		this.Dq = a / 20
	},
	ky: function(a)
	{
		this.Uj = a / 750
	},
	Iu: function(a)
	{
		this.Nw = 50 * a / 300
	},
	zr: function(a)
	{
		this.wf = a / 100;
		this.s.tv(this.wf)
	},
	qw: function()
	{
		return this.v.b.ra
	},
	rh: function(a)
	{
		this.la.Jx(this.s, a / 100 * 20.5, this.la.CH(this.s))
	},
	nw: function()
	{
		return 100 * this.wf
	},
	pL: function()
	{
		return Math.floor(20 * this.Dq)
	},
	AF: function()
	{
		return Math.floor(750 * this.Uj)
	},
	kz: function(a)
	{
		if (null == this.la) return 0;
		switch (a)
		{
			case 20736:
				this.dm(li(this));
				break;
			case 17408:
				this.cm(li(this));
				break;
			case 17664:
				this.em(li(this));
				break;
			case 20480:
				this.Lp(li(this));
				break;
			case 17920:
				a = li(this)[0] / 100 * 19;
				var b = li(this)[1];
				this.la.AH(this.s, a, b);
				break;
			case 18432:
				a =
					li(this)[0] / 100 * 5;
				b = li(this)[1];
				this.la.zH(this.s, a, b);
				break;
			case 18944:
				a = li(this)[0] / 100 * 20.5;
				b = li(this)[1];
				this.la.Jx(this.s, a, b);
				break;
			case 19968:
				this.la.FH(this.s);
				break;
			case 20224:
				this.la.GH(this.s);
				break;
			case 8960:
				return 100 * this.Se;
			case 9216:
				return 100 * this.Ve;
			case 9472:
				return 100 * this.hf;
			case 9728:
				return a = this.s.o, a = 100 * Math.sqrt(a.x * a.x + a.y * a.y) / 20.5, .001 > a && (a = 0), a;
			case 9984:
				a = this.s.o;
				if (.001 > Math.abs(a.x) && .001 > Math.abs(a.y)) return -1;
				b = 180 * Math.atan2(a.y, a.x) / 3.141592653589;
				0 > b && (b = 360 +
					b);
				return b;
			case 10752:
				return this.s.aa;
			case 11008:
				return 100 * this.s.R / 15
		}
		return 0
	}
});

function Mm()
{
	this.ha = Wl.gJ;
	this.Ho = this.Uj = this.Gq = this.Am = this.Cm = this.Bm = this.Jo = this.Io = this.U = this.Ob = this.Ve = this.hf = this.wf = this.Se = this.ah = 0;
	this.Fg = null;
	this.fj = this.ej = 1;
	this.Et = this.Dt = this.vt = this.wt = this.Ht = this.Gt = this.ol = this.cj = this.rt = this.Sw = this.wo = this.xo = 0;
	this.ql = this.pl = null;
	this.Gh = !1;
	this.Bh = 0
}
Mm.prototype = m(new ji,
{
	Ay: function(a)
	{
		for (var b = 0, c = a, d, e = 0; 32 > e; e++) d = c, c >>= 1, d & 1 && b++;
		if (0 == b) a = 0;
		else
			for (b = this.I.random(b), c = a, a = 0; !(d = c, c >>= 1, d & 1 && (b--, 0 > b)); a++);
		return a
	},
	MA: function(a)
	{
		V(a, 1);
		this.v.b.wa = this.Ay(F(a));
		this.ah = 180 * this.v.b.wa / 16;
		this.Se = F(a) / 100;
		this.wf = F(a) / 100;
		this.hf = F(a) / 100;
		this.Ve = F(a) / 100;
		this.U = F(a) | 2;
		this.Ob = T(a);
		this.jM = F(a);
		this.Gq = .195 * this.jM;
		this.Sw = F(a);
		this.Uj = .08 * this.Sw;
		this.yq = F(a);
		this.cj = T(a);
		this.ol = T(a);
		this.pl = a.ed(24);
		this.ql = a.ed(24);
		this.Gt = F(a) *
			Z.K.ma.Za / 180;
		this.Ht = F(a) * Z.K.ma.Za / 180;
		this.wt = F(a);
		this.vt = F(a) / 100;
		this.Dt = F(a);
		this.Et = F(a);
		this.Bm = this.Cm = this.rt = 0;
		this.Am = !1;
		this.Ho = -1;
		this.Gh = !1;
		this.la = this.zj();
		this.s = null;
		oi(this, this.v, 0)
	},
	Vc: function()
	{
		var a = this.zj();
		null != a && a.Wq(this.s)
	},
	zj: function()
	{
		var a = 0,
			b;
		for (b = 0; b < this.I.Tb; a++, b++)
		{
			for (; null == this.I.W[a];) a++;
			var c = this.I.W[a];
			if (32 <= c.rb && 1110590791 == c.ga.Mc && c.ext.identifier == this.yq) return c.ext
		}
		return null
	},
	yj: function()
	{
		if (null != this.s) return !0;
		null == this.la && (this.la =
			this.zj(), null != this.la || Hg || (alert("Please drop a Physics - Engine object in the frame."), Hg = !0));
		if (null == this.la) return !1;
		var a = 4;
		this.U & 8 && (a |= 2);
		this.s = this.la.oj(Z.i.Qc.re, this.v.A, this.v.w, this.ah, this.wf, this, a, this.Uj);
		this.v.Ca ? (this.zq = this.v.b.Jb, a = Y(this.I.m.Ba, this.zq), this.xo = a.width, this.wo = a.height) : (this.Ob = 0, this.xo = this.v.da, this.wo = this.v.ca);
		this.Bi();
		a = this.s.L.position;
		this.Io = a.x;
		this.Jo = a.y;
		this.Kc = this.ah;
		this.U & 2 ? (a = this.ah * Z.K.ma.Za / 180, a = new Z.K.Math.Ua(this.Gq * Math.cos(a),
			this.Gq * Math.sin(a)), this.s.Qh(a), this.Bh = 0 == this.Gq ? this.ah : 123456789) : this.Bh = this.ah;
		return !0
	},
	Bi: function()
	{
		null != this.Fg && this.la.BH(this.s, this.Fg);
		this.ej = this.v.b.bc;
		this.fj = this.v.b.cc;
		switch (this.Ob)
		{
			case 0:
				this.Fg = this.la.sk(this.s, this, this.v.A, this.v.w, this.xo * this.ej, this.wo * this.fj, this.hf, this.Se, this.Ve);
				break;
			case 1:
				this.Fg = this.la.mC(this.s, this, this.v.A, this.v.w, (this.v.da + this.v.ca) / 4 * (this.ej + this.fj) / 2, this.hf, this.Se, this.Ve);
				break;
			case 2:
				this.Fg = this.la.Zo(this.s, this, this.v.A,
					this.v.w, this.v.b.Jb, this.hf, this.Se, this.Ve, this.ej, this.fj)
		}
	},
	fc: function()
	{
		switch (this.cj)
		{
			case 1:
				this.la.Xq(this, this.cj, this.ol, this.pl, this.ql, this.Gt, this.Ht);
				break;
			case 2:
				this.la.Xq(this, this.cj, this.ol, this.pl, this.ql, this.wt, this.vt);
				break;
			case 3:
				this.la.Xq(this, this.cj, this.ol, this.pl, this.ql, this.Dt, this.Et)
		}
	},
	move: function()
	{
		if (!this.yj() || this.la.Bw()) return !1;
		this.v.b.bc == this.ej && this.v.b.cc == this.fj || this.Bi();
		this.la.yH(this.s, this.Bm, this.Cm);
		this.Am ? this.Am = !1 : this.Cm = this.Bm =
			0;
		if (this.U & 16)
		{
			var a = this.s.o,
				b = 180 * Math.atan2(a.y, a.x) / 3.141592653589;
			123456789 != this.Bh && .01 > Math.abs(a.x) && .01 > Math.abs(a.y) && (b = this.Bh);
			this.la.Ix(this.s, b)
		}
		b = {};
		this.la.oC(this.s, b);
		this.Kc = b.angle;
		if (b.x != this.v.A || b.y != this.v.w) this.v.A = b.x, this.v.w = b.y, this.Gh = !0, this.v.b.fa = !0;
		this.Kc != this.Ho && this.PD(this.Kc);
		if (0 == this.Uj && 0 < this.rt && (this.rt--, 0 == this.rt))
		{
			var a = this.s.o,
				b = Math.atan2(a.y, a.x),
				c = Math.sqrt(a.x * a.x + a.y * a.y);
			a.x = Math.max(this.Gq, c) * Math.cos(b);
			a.y = Math.max(this.Gq, c) * Math.sin(b);
			this.s.Qh(a)
		}
		b = this.s.L.position;
		a = (b.x - this.Io) * this.la.ta;
		c = (b.y - this.Jo) * this.la.ta;
		this.Io = b.x;
		this.Jo = b.y;
		c = Math.sqrt(a * a + c * c);
		this.v.b.ra = Math.floor(50 * c / 7 * this.I.ce);
		this.v.b.ra = Math.min(this.v.b.ra, 250);
		b = 0;
		0 < this.v.b.ra && (b = 1);
		this.Ln(b);
		this.Vb & 32 && mi(this);
		return 0 != this.v.b.fa
	},
	PD: function(a)
	{
		this.Ho = a;
		this.v.b.fa = !0;
		if (this.U & 1) this.v.b.ac = a, this.v.b.wa = 0;
		else
		{
			for (this.v.b.wa = Math.floor(a / 11.25); 0 > this.v.b.wa;) this.v.b.wa += 32;
			for (; 32 <= this.v.b.wa;) this.v.b.wa -= 32
		}
	},
	cm: function(a)
	{
		this.Se =
			a / 100;
		this.Fg.cm(this.Se)
	},
	dm: function(a)
	{
		this.wf = a / 100;
		this.s.tv(this.wf)
	},
	Lp: function(a)
	{
		this.hf = a / 100;
		this.la.DH(this.s)
	},
	em: function(a)
	{
		this.Ve = a / 100;
		this.Fg.em(this.Ve)
	},
	rp: function(a)
	{
		123456789 != this.Bh && (this.Bh = a);
		this.la.Ix(this.s, a);
		if (!this.Gh)
		{
			this.PD(a);
			var b = this.s.o,
				c = Math.sqrt(b.x * b.x + b.y * b.y);
			b.x = c * Math.cos(a * Z.K.ma.Za / 180);
			b.y = c * Math.sin(a * Z.K.ma.Za / 180);
			this.s.Qh(b)
		}
	},
	BA: function()
	{
		if (this.U & 1)
		{
			for (var a = this.Kc; 360 <= a;) a -= 360;
			for (; 0 > a;) a += 360;
			return a
		}
		return 123456789
	},
	setPosition: function(a,
		b)
	{
		if (a != this.v.A || b != this.v.w) this.Gh || (this.v.A = a, this.v.w = b), this.la.Vq(this.s, a, b)
	},
	Fe: function(a)
	{
		a != this.v.A && (this.Gh || (this.v.A = a), this.la.Vq(this.s, a, 1448633650))
	},
	Ge: function(a)
	{
		a != this.v.w && (this.Gh || (this.v.w = a), this.la.Vq(this.s, 1448633650, a))
	},
	stop: function()
	{
		this.zf = !0;
		if (this.Tw != this.I.jp)
		{
			if (123456789 == this.Bh)
			{
				var a = this.s.o;
				this.Bh = 180 * Math.atan2(a.y, a.x) / 3.141592653589
			}
			this.la.EH(this.s, 0, 0, 0, 0)
		}
	},
	wh: function()
	{
		this.zf = !0;
		this.rt = 1;
		if (this.Tw != this.v.c.jp)
		{
			var a = this.s.o;
			a.x = -a.x;
			a.y = -a.y;
			this.s.Qh(a)
		}
	},
	qh: function(a)
	{
		this.rp(11.25 * a)
	},
	hd: function()
	{
		return this.U & 1 ? Math.floor(this.Kc / 11.25) : this.v.b.wa
	},
	zr: function(a)
	{
		this.wf = a / 100;
		this.s.tv(this.wf)
	},
	rh: function(a)
	{
		var b = this.s.o,
			c = 180 * Math.atan2(b.y, b.x) / 3.141592653589;
		0 == a ? 123456789 == this.Bh && (this.Bh = c) : (123456789 != this.Bh && .01 > Math.abs(b.x) && .01 > Math.abs(b.y) && (c = this.Bh), this.Bh = 123456789);
		this.la.Jx(this.s, .195 * a, c)
	},
	qw: function()
	{
		return this.v.b.ra
	},
	nw: function()
	{
		return 100 * this.wf
	},
	ky: function(a)
	{
		this.Sw = a;
		this.Uj =
			.08 * a;
		this.s.MD(this.Uj)
	},
	AF: function()
	{
		return this.Sw
	},
	kz: function(a)
	{
		if (null == this.la) return 0;
		switch (a)
		{
			case 20736:
				this.dm(li(this));
				break;
			case 17408:
				this.cm(li(this));
				break;
			case 17664:
				this.em(li(this));
				break;
			case 20480:
				this.Lp(li(this));
				break;
			case 17920:
				a = li(this)[0] / 100 * 19;
				var b = li(this)[1];
				this.la.AH(this.s, a, b);
				break;
			case 18176:
				a = li(this) / 100 * .1;
				this.la.LM(this.s, a);
				break;
			case 18432:
				a = li(this)[0] / 100 * 5;
				b = li(this)[1];
				this.la.zH(this.s, a, b);
				break;
			case 18688:
				a = li(this) / 100 * 1;
				this.la.NM(this.s,
					a);
				break;
			case 18944:
				a = li(this)[0] / 100 * 20.5;
				b = li(this)[1];
				this.la.Jx(this.s, a, b);
				break;
			case 19200:
				a = li(this) / 100 * 15;
				this.la.nC(this.s, a);
				break;
			case 19968:
				this.la.FH(this.s);
				break;
			case 20224:
				this.la.GH(this.s);
				break;
			case 8960:
				return 100 * this.Se;
			case 9216:
				return 100 * this.Ve;
			case 9472:
				return 100 * this.hf;
			case 9728:
				return a = this.s.o, a = 100 * Math.sqrt(a.x * a.x + a.y * a.y) / 20.5, .001 > a && (a = 0), a;
			case 9984:
				a = this.s.o;
				if (.001 > Math.abs(a.x) && .001 > Math.abs(a.y)) return -1;
				b = 180 * Math.atan2(a.y, a.x) / 3.141592653589;
				0 > b &&
					(b = 360 + b);
				return b;
			case 10752:
				return this.s.aa;
			case 11008:
				return 100 * this.s.R / 15
		}
		return 0
	}
});