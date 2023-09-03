! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = !!a && "length" in a && a.length,
            c = fa.type(a);
        return "function" !== c && !fa.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }

    function d(a, b, c) {
        if (fa.isFunction(b)) return fa.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return fa.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (ma.test(b)) return fa.filter(b, a, c);
            b = fa.filter(b, a)
        }
        return fa.grep(a, function(a) {
            return _.call(b, a) > -1 !== c
        })
    }

    function e(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function f(a) {
        var b = {};
        return fa.each(a.match(ra) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function g() {
        X.removeEventListener("DOMContentLoaded", g), a.removeEventListener("load", g), fa.ready()
    }

    function h() {
        this.expando = fa.expando + h.uid++
    }

    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(ya, "-$&").toLowerCase(), "string" == typeof(c = a.getAttribute(d))) {
                try {
                    c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : xa.test(c) ? fa.parseJSON(c) : c)
                } catch (a) {}
                wa.set(a, b, c)
            } else c = void 0;
        return c
    }

    function j(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return fa.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (fa.cssNumber[b] ? "" : "px"),
            k = (fa.cssNumber[b] || "px" !== j && +i) && Aa.exec(fa.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do {
                f = f || ".5", k /= f, fa.style(a, b, k + j)
            } while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }

    function k(a, b) {
        var c = void 0 !== a.getElementsByTagName ? a.getElementsByTagName(b || "*") : void 0 !== a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && fa.nodeName(a, b) ? fa.merge([a], c) : c
    }

    function l(a, b) {
        for (var c = 0, d = a.length; d > c; c++) va.set(a[c], "globalEval", !b || va.get(b[c], "globalEval"))
    }

    function m(a, b, c, d, e) {
        for (var f, g, h, i, j, m, n = b.createDocumentFragment(), o = [], p = 0, q = a.length; q > p; p++)
            if ((f = a[p]) || 0 === f)
                if ("object" === fa.type(f)) fa.merge(o, f.nodeType ? [f] : f);
                else if (Ha.test(f)) {
            for (g = g || n.appendChild(b.createElement("div")), h = (Ea.exec(f) || ["", ""])[1].toLowerCase(), i = Ga[h] || Ga._default, g.innerHTML = i[1] + fa.htmlPrefilter(f) + i[2], m = i[0]; m--;) g = g.lastChild;
            fa.merge(o, g.childNodes), g = n.firstChild, g.textContent = ""
        } else o.push(b.createTextNode(f));
        for (n.textContent = "", p = 0; f = o[p++];)
            if (d && fa.inArray(f, d) > -1) e && e.push(f);
            else if (j = fa.contains(f.ownerDocument, f), g = k(n.appendChild(f), "script"), j && l(g), c)
            for (m = 0; f = g[m++];) Fa.test(f.type || "") && c.push(f);
        return n
    }

    function n() {
        return !0
    }

    function o() {
        return !1
    }

    function p() {
        try {
            return X.activeElement
        } catch (a) {}
    }

    function q(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) q(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), !1 === e) e = o;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return fa().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = fa.guid++)), a.each(function() {
            fa.event.add(this, b, e, d, c)
        })
    }

    function r(a, b) {
        return fa.nodeName(a, "table") && fa.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function s(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function t(a) {
        var b = Na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function u(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (va.hasData(a) && (f = va.access(a), g = va.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) fa.event.add(b, e, j[e][c])
            }
            wa.hasData(a) && (h = wa.access(a), i = fa.extend({}, h), wa.set(b, i))
        }
    }

    function v(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && Da.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function w(a, b, c, d) {
        b = Z.apply([], b);
        var e, f, g, h, i, j, l = 0,
            n = a.length,
            o = n - 1,
            p = b[0],
            q = fa.isFunction(p);
        if (q || n > 1 && "string" == typeof p && !da.checkClone && Ma.test(p)) return a.each(function(e) {
            var f = a.eq(e);
            q && (b[0] = p.call(this, e, f.html())), w(f, b, c, d)
        });
        if (n && (e = m(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (g = fa.map(k(e, "script"), s), h = g.length; n > l; l++) i = e, l !== o && (i = fa.clone(i, !0, !0), h && fa.merge(g, k(i, "script"))), c.call(a[l], i, l);
            if (h)
                for (j = g[g.length - 1].ownerDocument, fa.map(g, t), l = 0; h > l; l++) i = g[l], Fa.test(i.type || "") && !va.access(i, "globalEval") && fa.contains(j, i) && (i.src ? fa._evalUrl && fa._evalUrl(i.src) : fa.globalEval(i.textContent.replace(Oa, "")))
        }
        return a
    }

    function x(a, b, c) {
        for (var d, e = b ? fa.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || fa.cleanData(k(d)), d.parentNode && (c && fa.contains(d.ownerDocument, d) && l(k(d, "script")), d.parentNode.removeChild(d));
        return a
    }

    function y(a, b) {
        var c = fa(b.createElement(a)).appendTo(b.body),
            d = fa.css(c[0], "display");
        return c.detach(), d
    }

    function z(a) {
        var b = X,
            c = Qa[a];
        return c || (c = y(a, b), "none" !== c && c || (Pa = (Pa || fa("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Pa[0].contentDocument, b.write(), b.close(), c = y(a, b), Pa.detach()), Qa[a] = c), c
    }

    function A(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ta(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || fa.contains(a.ownerDocument, a) || (g = fa.style(a, b)), c && !da.pixelMarginRight() && Sa.test(g) && Ra.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g
    }

    function B(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function C(a) {
        if (a in $a) return a;
        for (var b = a[0].toUpperCase() + a.slice(1), c = Za.length; c--;)
            if ((a = Za[c] + b) in $a) return a
    }

    function D(a, b, c) {
        var d = Aa.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function E(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += fa.css(a, c + Ba[f], !0, e)), d ? ("content" === c && (g -= fa.css(a, "padding" + Ba[f], !0, e)), "margin" !== c && (g -= fa.css(a, "border" + Ba[f] + "Width", !0, e))) : (g += fa.css(a, "padding" + Ba[f], !0, e), "padding" !== c && (g += fa.css(a, "border" + Ba[f] + "Width", !0, e)));
        return g
    }

    function F(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ta(a),
            g = "border-box" === fa.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = A(a, b, f), (0 > e || null == e) && (e = a.style[b]), Sa.test(e)) return e;
            d = g && (da.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function G(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = va.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ca(d) && (f[g] = va.access(d, "olddisplay", z(d.nodeName)))) : (e = Ca(d), "none" === c && e || va.set(d, "olddisplay", e ? c : fa.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function H(a, b, c, d, e) {
        return new H.prototype.init(a, b, c, d, e)
    }

    function I() {
        return a.setTimeout(function() {
            _a = void 0
        }), _a = fa.now()
    }

    function J(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = Ba[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function K(a, b, c) {
        for (var d, e = (N.tweeners[b] || []).concat(N.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function L(a, b, c) {
        var d, e, f, g, h, i, j, k = this,
            l = {},
            m = a.style,
            n = a.nodeType && Ca(a),
            o = va.get(a, "fxshow");
        c.queue || (h = fa._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, k.always(function() {
            k.always(function() {
                h.unqueued--, fa.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], j = fa.css(a, "display"), "inline" === ("none" === j ? va.get(a, "olddisplay") || z(a.nodeName) : j) && "none" === fa.css(a, "float") && (m.display = "inline-block")), c.overflow && (m.overflow = "hidden", k.always(function() {
            m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], bb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (n ? "hide" : "show")) {
                    if ("show" !== e || !o || void 0 === o[d]) continue;
                    n = !0
                }
                l[d] = o && o[d] || fa.style(a, d)
            } else j = void 0;
        if (fa.isEmptyObject(l)) "inline" === ("none" === j ? z(a.nodeName) : j) && (m.display = j);
        else {
            o ? "hidden" in o && (n = o.hidden) : o = va.access(a, "fxshow", {}), f && (o.hidden = !n), n ? fa(a).show() : k.done(function() {
                fa(a).hide()
            }), k.done(function() {
                var b;
                va.remove(a, "fxshow");
                for (b in l) fa.style(a, b, l[b])
            });
            for (d in l) g = K(n ? o[d] : 0, d, k), d in o || (o[d] = g.start, n && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function M(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = fa.camelCase(c), e = b[d], f = a[c], fa.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), (g = fa.cssHooks[d]) && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function N(a, b, c) {
        var d, e, f = 0,
            g = N.prefilters.length,
            h = fa.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = _a || I(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: fa.extend({}, b),
                opts: fa.extend(!0, {
                    specialEasing: {},
                    easing: fa.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: _a || I(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = fa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (M(k, j.opts.specialEasing); g > f; f++)
            if (d = N.prefilters[f].call(j, a, k, j.opts)) return fa.isFunction(d.stop) && (fa._queueHooks(j.elem, j.opts.queue).stop = fa.proxy(d.stop, d)), d;
        return fa.map(k, K, j), fa.isFunction(j.opts.start) && j.opts.start.call(a, j), fa.fx.timer(fa.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function O(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }

    function P(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(ra) || [];
            if (fa.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Q(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, fa.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {},
            g = a === rb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function R(a, b) {
        var c, d, e = fa.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && fa.extend(!0, a, d), a
    }

    function S(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function T(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (!(g = j[i + " " + f] || j["* " + f]))
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        !0 === g ? g = j[e] : !0 !== j[e] && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (!0 !== g)
                if (g && a.throws) b = g(b);
                else try {
                    b = g(b)
                } catch (a) {
                    return {
                        state: "parsererror",
                        error: g ? a : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function U(a, b, c, d) {
        var e;
        if (fa.isArray(b)) fa.each(b, function(b, e) {
            c || ub.test(a) ? d(a, e) : U(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== fa.type(b)) d(a, b);
        else
            for (e in b) U(a + "[" + e + "]", b[e], c, d)
    }

    function V(a) {
        return fa.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var W = [],
        X = a.document,
        Y = W.slice,
        Z = W.concat,
        $ = W.push,
        _ = W.indexOf,
        aa = {},
        ba = aa.toString,
        ca = aa.hasOwnProperty,
        da = {},
        ea = "2.2.4",
        fa = function(a, b) {
            return new fa.fn.init(a, b)
        },
        ga = function(a, b) {
            return b.toUpperCase()
        };
    fa.fn = fa.prototype = {
        jquery: ea,
        constructor: fa,
        selector: "",
        length: 0,
        toArray: function() {
            return Y.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : Y.call(this)
        },
        pushStack: function(a) {
            var b = fa.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return fa.each(this, a)
        },
        map: function(a) {
            return this.pushStack(fa.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(Y.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: $,
        sort: W.sort,
        splice: W.splice
    }, fa.extend = fa.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || fa.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (fa.isPlainObject(d) || (e = fa.isArray(d))) ? (e ? (e = !1, f = c && fa.isArray(c) ? c : []) : f = c && fa.isPlainObject(c) ? c : {}, g[b] = fa.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, fa.extend({
        expando: "jQuery" + (ea + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === fa.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !fa.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isPlainObject: function(a) {
            var b;
            if ("object" !== fa.type(a) || a.nodeType || fa.isWindow(a)) return !1;
            if (a.constructor && !ca.call(a, "constructor") && !ca.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (b in a);
            return void 0 === b || ca.call(a, b)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? aa[ba.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            (a = fa.trim(a)) && (1 === a.indexOf("use strict") ? (b = X.createElement("script"), b.text = a, X.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, ga)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var d, e = 0;
            if (c(a))
                for (d = a.length; d > e && !1 !== b.call(a[e], e, a[e]); e++);
            else
                for (e in a)
                    if (!1 === b.call(a[e], e, a[e])) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? fa.merge(d, "string" == typeof a ? [a] : a) : $.call(d, a)), d
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : _.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d = [], e = 0, f = a.length, g = !c; f > e; e++) !b(a[e], e) !== g && d.push(a[e]);
            return d
        },
        map: function(a, b, d) {
            var e, f, g = 0,
                h = [];
            if (c(a))
                for (e = a.length; e > g; g++) null != (f = b(a[g], g, d)) && h.push(f);
            else
                for (g in a) null != (f = b(a[g], g, d)) && h.push(f);
            return Z.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), fa.isFunction(a) ? (d = Y.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(Y.call(arguments)))
            }, e.guid = a.guid = a.guid || fa.guid++, e) : void 0
        },
        now: Date.now,
        support: da
    }), "function" == typeof Symbol && (fa.fn[Symbol.iterator] = W[Symbol.iterator]), fa.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        aa["[object " + b + "]"] = b.toLowerCase()
    });
    var ha = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, j, l, m, n, o = b && b.ownerDocument,
                p = b ? b.nodeType : 9;
            if (c = c || [], "string" != typeof a || !a || 1 !== p && 9 !== p && 11 !== p) return c;
            if (!d && ((b ? b.ownerDocument || b : M) !== E && D(b), b = b || E, G)) {
                if (11 !== p && (l = pa.exec(a)))
                    if (e = l[1]) {
                        if (9 === p) {
                            if (!(g = b.getElementById(e))) return c;
                            if (g.id === e) return c.push(g), c
                        } else if (o && (g = o.getElementById(e)) && K(b, g) && g.id === e) return c.push(g), c
                    } else {
                        if (l[2]) return Y.apply(c, b.getElementsByTagName(a)), c;
                        if ((e = l[3]) && t.getElementsByClassName && b.getElementsByClassName) return Y.apply(c, b.getElementsByClassName(e)), c
                    }
                if (t.qsa && !R[a + " "] && (!H || !H.test(a))) {
                    if (1 !== p) o = b, n = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        for ((h = b.getAttribute("id")) ? h = h.replace(ra, "\\$&") : b.setAttribute("id", h = L), m = x(a), f = m.length, j = ka.test(h) ? "#" + h : "[id='" + h + "']"; f--;) m[f] = j + " " + k(m[f]);
                        n = m.join(","), o = qa.test(a) && i(b.parentNode) || b
                    }
                    if (n) try {
                        return Y.apply(c, o.querySelectorAll(n)), c
                    } catch (a) {} finally {
                        h === L && b.removeAttribute("id")
                    }
                }
            }
            return z(a.replace(fa, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > u.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            return a[L] = !0, a
        }

        function e(a) {
            var b = E.createElement("div");
            try {
                return !!a(b)
            } catch (a) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = c.length; d--;) u.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || T) - (~a.sourceIndex || T);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function i(a) {
            return a && void 0 !== a.getElementsByTagName && a
        }

        function j() {}

        function k(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function l(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = O++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [N, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (j = b[L] || (b[L] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === N && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function m(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function n(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }

        function o(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function p(a, b, c, e, f, g) {
            return e && !e[L] && (e = p(e)), f && !f[L] && (f = p(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [],
                    p = [],
                    q = g.length,
                    r = d || n(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? r : o(r, m, a, h, i),
                    t = c ? f || (d ? a : q || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = o(t, p), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[p[k]] = !(s[p[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? $(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = o(t === g ? t.splice(q, t.length) : t), f ? f(null, g, t, i) : Y.apply(g, t)
            })
        }

        function q(a) {
            for (var b, c, d, e = a.length, f = u.relative[a[0].type], g = f || u.relative[" "], h = f ? 1 : 0, i = l(function(a) {
                    return a === b
                }, g, !0), j = l(function(a) {
                    return $(b, a) > -1
                }, g, !0), n = [function(a, c, d) {
                    var e = !f && (d || c !== A) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null, e
                }]; e > h; h++)
                if (c = u.relative[a[h].type]) n = [l(m(n), c)];
                else {
                    if (c = u.filter[a[h].type].apply(null, a[h].matches), c[L]) {
                        for (d = ++h; e > d && !u.relative[a[d].type]; d++);
                        return p(h > 1 && m(n), h > 1 && k(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(fa, "$1"), c, d > h && q(a.slice(h, d)), e > d && q(a = a.slice(d)), e > d && k(a))
                    }
                    n.push(c)
                }
            return m(n)
        }

        function r(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function(d, g, h, i, j) {
                    var k, l, m, n = 0,
                        p = "0",
                        q = d && [],
                        r = [],
                        s = A,
                        t = d || f && u.find.TAG("*", j),
                        v = N += null == s ? 1 : Math.random() || .1,
                        w = t.length;
                    for (j && (A = g === E || g || j); p !== w && null != (k = t[p]); p++) {
                        if (f && k) {
                            for (l = 0, g || k.ownerDocument === E || (D(k), h = !G); m = a[l++];)
                                if (m(k, g || E, h)) {
                                    i.push(k);
                                    break
                                }
                            j && (N = v)
                        }
                        e && ((k = !m && k) && n--, d && q.push(k))
                    }
                    if (n += p, e && p !== n) {
                        for (l = 0; m = c[l++];) m(q, r, g, h);
                        if (d) {
                            if (n > 0)
                                for (; p--;) q[p] || r[p] || (r[p] = W.call(i));
                            r = o(r)
                        }
                        Y.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (N = v, A = s), q
                };
            return e ? d(g) : g
        }
        var s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L = "sizzle" + 1 * new Date,
            M = a.document,
            N = 0,
            O = 0,
            P = c(),
            Q = c(),
            R = c(),
            S = function(a, b) {
                return a === b && (C = !0), 0
            },
            T = 1 << 31,
            U = {}.hasOwnProperty,
            V = [],
            W = V.pop,
            X = V.push,
            Y = V.push,
            Z = V.slice,
            $ = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            _ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            aa = "[\\x20\\t\\r\\n\\f]",
            ba = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ca = "\\[" + aa + "*(" + ba + ")(?:" + aa + "*([*^$|!~]?=)" + aa + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ba + "))|)" + aa + "*\\]",
            da = ":(" + ba + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ca + ")*)|.*)\\)|)",
            ea = new RegExp(aa + "+", "g"),
            fa = new RegExp("^" + aa + "+|((?:^|[^\\\\])(?:\\\\.)*)" + aa + "+$", "g"),
            ga = new RegExp("^" + aa + "*," + aa + "*"),
            ha = new RegExp("^" + aa + "*([>+~]|" + aa + ")" + aa + "*"),
            ia = new RegExp("=" + aa + "*([^\\]'\"]*?)" + aa + "*\\]", "g"),
            ja = new RegExp(da),
            ka = new RegExp("^" + ba + "$"),
            la = {
                ID: new RegExp("^#(" + ba + ")"),
                CLASS: new RegExp("^\\.(" + ba + ")"),
                TAG: new RegExp("^(" + ba + "|[*])"),
                ATTR: new RegExp("^" + ca),
                PSEUDO: new RegExp("^" + da),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + aa + "*(even|odd|(([+-]|)(\\d*)n|)" + aa + "*(?:([+-]|)" + aa + "*(\\d+)|))" + aa + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + _ + ")$", "i"),
                needsContext: new RegExp("^" + aa + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + aa + "*((?:-\\d)?\\d*)" + aa + "*\\)|)(?=[^-]|$)", "i")
            },
            ma = /^(?:input|select|textarea|button)$/i,
            na = /^h\d$/i,
            oa = /^[^{]+\{\s*\[native \w/,
            pa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            qa = /[+~]/,
            ra = /'|\\/g,
            sa = new RegExp("\\\\([\\da-f]{1,6}" + aa + "?|(" + aa + ")|.)", "ig"),
            ta = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            ua = function() {
                D()
            };
        try {
            Y.apply(V = Z.call(M.childNodes), M.childNodes), V[M.childNodes.length].nodeType
        } catch (a) {
            Y = {
                apply: V.length ? function(a, b) {
                    X.apply(a, Z.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        t = b.support = {}, w = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, D = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : M;
            return d !== E && 9 === d.nodeType && d.documentElement ? (E = d, F = E.documentElement, G = !w(E), (c = E.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", ua, !1) : c.attachEvent && c.attachEvent("onunload", ua)), t.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), t.getElementsByTagName = e(function(a) {
                return a.appendChild(E.createComment("")), !a.getElementsByTagName("*").length
            }), t.getElementsByClassName = oa.test(E.getElementsByClassName), t.getById = e(function(a) {
                return F.appendChild(a).id = L, !E.getElementsByName || !E.getElementsByName(L).length
            }), t.getById ? (u.find.ID = function(a, b) {
                if (void 0 !== b.getElementById && G) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, u.filter.ID = function(a) {
                var b = a.replace(sa, ta);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete u.find.ID, u.filter.ID = function(a) {
                var b = a.replace(sa, ta);
                return function(a) {
                    var c = void 0 !== a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), u.find.TAG = t.getElementsByTagName ? function(a, b) {
                return void 0 !== b.getElementsByTagName ? b.getElementsByTagName(a) : t.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, u.find.CLASS = t.getElementsByClassName && function(a, b) {
                return void 0 !== b.getElementsByClassName && G ? b.getElementsByClassName(a) : void 0
            }, I = [], H = [], (t.qsa = oa.test(E.querySelectorAll)) && (e(function(a) {
                F.appendChild(a).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + aa + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || H.push("\\[" + aa + "*(?:value|" + _ + ")"), a.querySelectorAll("[id~=" + L + "-]").length || H.push("~="), a.querySelectorAll(":checked").length || H.push(":checked"), a.querySelectorAll("a#" + L + "+*").length || H.push(".#.+[+~]")
            }), e(function(a) {
                var b = E.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && H.push("name" + aa + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), H.push(",.*:")
            })), (t.matchesSelector = oa.test(J = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && e(function(a) {
                t.disconnectedMatch = J.call(a, "div"), J.call(a, "[s!='']:x"), I.push("!=", da)
            }), H = H.length && new RegExp(H.join("|")), I = I.length && new RegExp(I.join("|")), b = oa.test(F.compareDocumentPosition), K = b || oa.test(F.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, S = b ? function(a, b) {
                if (a === b) return C = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c || (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !t.sortDetached && b.compareDocumentPosition(a) === c ? a === E || a.ownerDocument === M && K(M, a) ? -1 : b === E || b.ownerDocument === M && K(M, b) ? 1 : B ? $(B, a) - $(B, b) : 0 : 4 & c ? -1 : 1)
            } : function(a, b) {
                if (a === b) return C = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === E ? -1 : b === E ? 1 : e ? -1 : f ? 1 : B ? $(B, a) - $(B, b) : 0;
                if (e === f) return g(a, b);
                for (c = a; c = c.parentNode;) h.unshift(c);
                for (c = b; c = c.parentNode;) i.unshift(c);
                for (; h[d] === i[d];) d++;
                return d ? g(h[d], i[d]) : h[d] === M ? -1 : i[d] === M ? 1 : 0
            }, E) : E
        }, b.matches = function(a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== E && D(a), c = c.replace(ia, "='$1']"), t.matchesSelector && G && !R[c + " "] && (!I || !I.test(c)) && (!H || !H.test(c))) try {
                var d = J.call(a, c);
                if (d || t.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (a) {}
            return b(c, E, null, [a]).length > 0
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== E && D(a), K(a, b)
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== E && D(a);
            var c = u.attrHandle[b.toLowerCase()],
                d = c && U.call(u.attrHandle, b.toLowerCase()) ? c(a, b, !G) : void 0;
            return void 0 !== d ? d : t.attributes || !G ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (C = !t.detectDuplicates, B = !t.sortStable && a.slice(0), a.sort(S), C) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return B = null, a
        }, v = b.getText = function(a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += v(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d++];) c += v(b);
            return c
        }, u = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: la,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(sa, ta), a[3] = (a[3] || a[4] || a[5] || "").replace(sa, ta), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return la.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ja.test(c) && (b = x(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(sa, ta).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = P[a + " "];
                    return b || (b = new RegExp("(^|" + aa + ")" + a + "(" + aa + "|$)")) && P(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || void 0 !== a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ea, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (m = b; m = m[p];)
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (m = q, l = m[L] || (m[L] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === N && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [N, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[L] || (m[L] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === N && j[1], t = n), !1 === t)
                                for (;
                                    (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[L] || (m[L] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [N, t]), m !== b)););
                            return (t -= e) === d || t % d == 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = u.pseudos[a] || u.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[L] ? f(c) : f.length > 1 ? (e = [a, a, "", c], u.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = $(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        e = y(a.replace(fa, "$1"));
                    return e[L] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return a = a.replace(sa, ta),
                        function(b) {
                            return (b.textContent || b.innerText || v(b)).indexOf(a) > -1
                        }
                }),
                lang: d(function(a) {
                    return ka.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(sa, ta).toLowerCase(),
                        function(b) {
                            var c;
                            do {
                                if (c = G ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-")
                            } while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === F
                },
                focus: function(a) {
                    return a === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return !1 === a.disabled
                },
                disabled: function(a) {
                    return !0 === a.disabled
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !u.pseudos.empty(a)
                },
                header: function(a) {
                    return na.test(a.nodeName)
                },
                input: function(a) {
                    return ma.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: h(function() {
                    return [0]
                }),
                last: h(function(a, b) {
                    return [b - 1]
                }),
                eq: h(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: h(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: h(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: h(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: h(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, u.pseudos.nth = u.pseudos.eq;
        for (s in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) u.pseudos[s] = function(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }(s);
        for (s in {
                submit: !0,
                reset: !0
            }) u.pseudos[s] = function(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }(s);
        return j.prototype = u.filters = u.pseudos, u.setFilters = new j, x = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = Q[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = u.preFilter; h;) {
                d && !(e = ga.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ha.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(fa, " ")
                }), h = h.slice(d.length));
                for (g in u.filter) !(e = la[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : Q(a, i).slice(0)
        }, y = b.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = R[a + " "];
            if (!f) {
                for (b || (b = x(a)), c = b.length; c--;) f = q(b[c]), f[L] ? d.push(f) : e.push(f);
                f = R(a, r(e, d)), f.selector = a
            }
            return f
        }, z = b.select = function(a, b, c, d) {
            var e, f, g, h, j, l = "function" == typeof a && a,
                m = !d && x(a = l.selector || a);
            if (c = c || [], 1 === m.length) {
                if (f = m[0] = m[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && t.getById && 9 === b.nodeType && G && u.relative[f[1].type]) {
                    if (!(b = (u.find.ID(g.matches[0].replace(sa, ta), b) || [])[0])) return c;
                    l && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = la.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !u.relative[h = g.type]);)
                    if ((j = u.find[h]) && (d = j(g.matches[0].replace(sa, ta), qa.test(f[0].type) && i(b.parentNode) || b))) {
                        if (f.splice(e, 1), !(a = d.length && k(f))) return Y.apply(c, d), c;
                        break
                    }
            }
            return (l || y(a, m))(d, b, !G, c, !b || qa.test(a) && i(b.parentNode) || b), c
        }, t.sortStable = L.split("").sort(S).join("") === L, t.detectDuplicates = !!C, D(), t.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(E.createElement("div"))
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), t.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(_, function(a, b, c) {
            var d;
            return c ? void 0 : !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    fa.find = ha, fa.expr = ha.selectors, fa.expr[":"] = fa.expr.pseudos, fa.uniqueSort = fa.unique = ha.uniqueSort, fa.text = ha.getText, fa.isXMLDoc = ha.isXML, fa.contains = ha.contains;
    var ia = function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && fa(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        ja = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        ka = fa.expr.match.needsContext,
        la = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        ma = /^.[^:#\[\.,]*$/;
    fa.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? fa.find.matchesSelector(d, a) ? [d] : [] : fa.find.matches(a, fa.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, fa.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(fa(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (fa.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) fa.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? fa.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && ka.test(a) ? fa(a) : a || [], !1).length
        }
    });
    var na, oa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (fa.fn.init = function(a, b, c) {
        var d, e;
        if (!a) return this;
        if (c = c || na, "string" == typeof a) {
            if (!(d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : oa.exec(a)) || !d[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (d[1]) {
                if (b = b instanceof fa ? b[0] : b, fa.merge(this, fa.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : X, !0)), la.test(d[1]) && fa.isPlainObject(b))
                    for (d in b) fa.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                return this
            }
            return e = X.getElementById(d[2]), e && e.parentNode && (this.length = 1, this[0] = e), this.context = X, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fa.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(fa) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), fa.makeArray(a, this))
    }).prototype = fa.fn, na = fa(X);
    var pa = /^(?:parents|prev(?:Until|All))/,
        qa = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    fa.fn.extend({
        has: function(a) {
            var b = fa(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (fa.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = ka.test(a) || "string" != typeof a ? fa(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fa.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? fa.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? _.call(fa(a), this[0]) : _.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(fa.uniqueSort(fa.merge(this.get(), fa(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), fa.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return ia(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return ia(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return ia(a, "nextSibling")
        },
        prevAll: function(a) {
            return ia(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return ia(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return ia(a, "previousSibling", c)
        },
        siblings: function(a) {
            return ja((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return ja(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || fa.merge([], a.childNodes)
        }
    }, function(a, b) {
        fa.fn[a] = function(c, d) {
            var e = fa.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fa.filter(d, e)), this.length > 1 && (qa[a] || fa.uniqueSort(e), pa.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var ra = /\S+/g;
    fa.Callbacks = function(a) {
        a = "string" == typeof a ? f(a) : fa.extend({}, a);
        var b, c, d, e, g = [],
            h = [],
            i = -1,
            j = function() {
                for (e = a.once, d = b = !0; h.length; i = -1)
                    for (c = h.shift(); ++i < g.length;) !1 === g[i].apply(c[0], c[1]) && a.stopOnFalse && (i = g.length, c = !1);
                a.memory || (c = !1), b = !1, e && (g = c ? [] : "")
            },
            k = {
                add: function() {
                    return g && (c && !b && (i = g.length - 1, h.push(c)), function b(c) {
                        fa.each(c, function(c, d) {
                            fa.isFunction(d) ? a.unique && k.has(d) || g.push(d) : d && d.length && "string" !== fa.type(d) && b(d)
                        })
                    }(arguments), c && !b && j()), this
                },
                remove: function() {
                    return fa.each(arguments, function(a, b) {
                        for (var c;
                            (c = fa.inArray(b, g, c)) > -1;) g.splice(c, 1), i >= c && i--
                    }), this
                },
                has: function(a) {
                    return a ? fa.inArray(a, g) > -1 : g.length > 0
                },
                empty: function() {
                    return g && (g = []), this
                },
                disable: function() {
                    return e = h = [], g = c = "", this
                },
                disabled: function() {
                    return !g
                },
                lock: function() {
                    return e = h = [], c || (g = c = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], h.push(c), b || j()), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return k
    }, fa.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", fa.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", fa.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", fa.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return fa.Deferred(function(c) {
                            fa.each(b, function(b, f) {
                                var g = fa.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && fa.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? fa.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, fa.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = Y.call(arguments),
                g = f.length,
                h = 1 !== g || a && fa.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : fa.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? Y.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && fa.isFunction(f[e].promise) ? f[e].promise().progress(j(e, c, b)).done(j(e, d, f)).fail(i.reject) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var sa;
    fa.fn.ready = function(a) {
        return fa.ready.promise().done(a), this
    }, fa.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? fa.readyWait++ : fa.ready(!0)
        },
        ready: function(a) {
            (!0 === a ? --fa.readyWait : fa.isReady) || (fa.isReady = !0, !0 !== a && --fa.readyWait > 0 || (sa.resolveWith(X, [fa]), fa.fn.triggerHandler && (fa(X).triggerHandler("ready"), fa(X).off("ready"))))
        }
    }), fa.ready.promise = function(b) {
        return sa || (sa = fa.Deferred(), "complete" === X.readyState || "loading" !== X.readyState && !X.documentElement.doScroll ? a.setTimeout(fa.ready) : (X.addEventListener("DOMContentLoaded", g), a.addEventListener("load", g))), sa.promise(b)
    }, fa.ready.promise();
    var ta = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === fa.type(c)) {
                e = !0;
                for (h in c) ta(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, fa.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(fa(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        ua = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };
    h.uid = 1, h.prototype = {
        register: function(a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }), a[this.expando]
        },
        cache: function(a) {
            if (!ua(a)) return {};
            var b = a[this.expando];
            return b || (b = {}, ua(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[b] = c;
            else
                for (d in b) e[d] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, fa.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) this.register(a);
                else {
                    fa.isArray(b) ? d = b.concat(b.map(fa.camelCase)) : (e = fa.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(ra) || [])), c = d.length;
                    for (; c--;) delete f[d[c]]
                }(void 0 === b || fa.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !fa.isEmptyObject(b)
        }
    };
    var va = new h,
        wa = new h,
        xa = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ya = /[A-Z]/g;
    fa.extend({
        hasData: function(a) {
            return wa.hasData(a) || va.hasData(a)
        },
        data: function(a, b, c) {
            return wa.access(a, b, c)
        },
        removeData: function(a, b) {
            wa.remove(a, b)
        },
        _data: function(a, b, c) {
            return va.access(a, b, c)
        },
        _removeData: function(a, b) {
            va.remove(a, b)
        }
    }), fa.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = wa.get(f), 1 === f.nodeType && !va.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = fa.camelCase(d.slice(5)), i(f, d, e[d])));
                    va.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                wa.set(this, a)
            }) : ta(this, function(b) {
                var c, d;
                if (f && void 0 === b) {
                    if (void 0 !== (c = wa.get(f, a) || wa.get(f, a.replace(ya, "-$&").toLowerCase()))) return c;
                    if (d = fa.camelCase(a), void 0 !== (c = wa.get(f, d))) return c;
                    if (void 0 !== (c = i(f, d, void 0))) return c
                } else d = fa.camelCase(a), this.each(function() {
                    var c = wa.get(this, d);
                    wa.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && wa.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                wa.remove(this, a)
            })
        }
    }), fa.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = va.get(a, b), c && (!d || fa.isArray(c) ? d = va.access(a, b, fa.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = fa.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = fa._queueHooks(a, b),
                g = function() {
                    fa.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return va.get(a, c) || va.access(a, c, {
                empty: fa.Callbacks("once memory").add(function() {
                    va.remove(a, [b + "queue", c])
                })
            })
        }
    }), fa.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? fa.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = fa.queue(this, a, b);
                fa._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && fa.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                fa.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = fa.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;)(c = va.get(f[g], a + "queueHooks")) && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var za = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Aa = new RegExp("^(?:([+-])=|)(" + za + ")([a-z%]*)$", "i"),
        Ba = ["Top", "Right", "Bottom", "Left"],
        Ca = function(a, b) {
            return a = b || a, "none" === fa.css(a, "display") || !fa.contains(a.ownerDocument, a)
        },
        Da = /^(?:checkbox|radio)$/i,
        Ea = /<([\w:-]+)/,
        Fa = /^$|\/(?:java|ecma)script/i,
        Ga = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ga.optgroup = Ga.option, Ga.tbody = Ga.tfoot = Ga.colgroup = Ga.caption = Ga.thead, Ga.th = Ga.td;
    var Ha = /<|&#?\w+;/;
    ! function() {
        var a = X.createDocumentFragment(),
            b = a.appendChild(X.createElement("div")),
            c = X.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), da.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", da.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var Ia = /^key/,
        Ja = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ka = /^([^.]*)(?:\.(.+)|)/;
    fa.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = va.get(a);
            if (q)
                for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = fa.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                        return void 0 !== fa && fa.event.triggered !== b.type ? fa.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(ra) || [""], j = b.length; j--;) h = Ka.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = fa.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = fa.event.special[n] || {}, k = fa.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && fa.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && !1 !== l.setup.call(a, d, o, g) || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), fa.event.global[n] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = va.hasData(a) && va.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(ra) || [""], j = b.length; j--;)
                    if (h = Ka.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = fa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && !1 !== l.teardown.call(a, o, q.handle) || fa.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) fa.event.remove(a, n + b[j], c, d, !0);
                fa.isEmptyObject(i) && va.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            a = fa.event.fix(a);
            var b, c, d, e, f, g = [],
                h = Y.call(arguments),
                i = (va.get(this, "events") || {})[a.type] || [],
                j = fa.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || !1 !== j.preDispatch.call(this, a)) {
                for (g = fa.event.handlers.call(this, a, i), b = 0;
                    (e = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(f.namespace) || (a.handleObj = f, a.data = f.data, void 0 !== (d = ((fa.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h)) && !1 === (a.result = d) && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (!0 !== i.disabled || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? fa(e, this).index(i) > -1 : fa.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || X, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[fa.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ja.test(e) ? this.mouseHooks : Ia.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new fa.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = X), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== p() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && fa.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return fa.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, fa.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, fa.Event = function(a, b) {
        return this instanceof fa.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? n : o) : this.type = a, b && fa.extend(this, b), this.timeStamp = a && a.timeStamp || fa.now(), void(this[fa.expando] = !0)) : new fa.Event(a, b)
    }, fa.Event.prototype = {
        constructor: fa.Event,
        isDefaultPrevented: o,
        isPropagationStopped: o,
        isImmediatePropagationStopped: o,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = n, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = n, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = n, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, fa.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        fa.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || fa.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), fa.fn.extend({
        on: function(a, b, c, d) {
            return q(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return q(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, fa(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = o), this.each(function() {
                fa.event.remove(this, a, c, b)
            })
        }
    });
    var La = /<script|<style|<link/i,
        Ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Na = /^true\/(.*)/,
        Oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    fa.extend({
        htmlPrefilter: function(a) {
            return a.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = fa.contains(a.ownerDocument, a);
            if (!(da.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fa.isXMLDoc(a)))
                for (g = k(h), f = k(a), d = 0, e = f.length; e > d; d++) v(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || k(a), g = g || k(h), d = 0, e = f.length; e > d; d++) u(f[d], g[d]);
                else u(a, h);
            return g = k(h, "script"), g.length > 0 && l(g, !i && k(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = fa.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (ua(c)) {
                    if (b = c[va.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? fa.event.remove(c, d) : fa.removeEvent(c, d, b.handle);
                        c[va.expando] = void 0
                    }
                    c[wa.expando] && (c[wa.expando] = void 0)
                }
        }
    }), fa.fn.extend({
        domManip: w,
        detach: function(a) {
            return x(this, a, !0)
        },
        remove: function(a) {
            return x(this, a)
        },
        text: function(a) {
            return ta(this, function(a) {
                return void 0 === a ? fa.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return w(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    r(this, a).appendChild(a)
                }
            })
        },
        prepend: function() {
            return w(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = r(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return w(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return w(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (fa.cleanData(k(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return fa.clone(this, a, b)
            })
        },
        html: function(a) {
            return ta(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !La.test(a) && !Ga[(Ea.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = fa.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (fa.cleanData(k(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (a) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return w(this, arguments, function(b) {
                var c = this.parentNode;
                fa.inArray(this, a) < 0 && (fa.cleanData(k(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), fa.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        fa.fn[a] = function(a) {
            for (var c, d = [], e = fa(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), fa(e[g])[b](c), $.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Pa, Qa = {
            HTML: "block",
            BODY: "block"
        },
        Ra = /^margin/,
        Sa = new RegExp("^(" + za + ")(?!px)[a-z%]+$", "i"),
        Ta = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        },
        Ua = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Va = X.documentElement;
    ! function() {
        function b() {
            h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Va.appendChild(g);
            var b = a.getComputedStyle(h);
            c = "1%" !== b.top, f = "2px" === b.marginLeft, d = "4px" === b.width, h.style.marginRight = "50%", e = "4px" === b.marginRight, Va.removeChild(g)
        }
        var c, d, e, f, g = X.createElement("div"),
            h = X.createElement("div");
        h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", da.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h), fa.extend(da, {
            pixelPosition: function() {
                return b(), c
            },
            boxSizingReliable: function() {
                return null == d && b(), d
            },
            pixelMarginRight: function() {
                return null == d && b(), e
            },
            reliableMarginLeft: function() {
                return null == d && b(), f
            },
            reliableMarginRight: function() {
                var b, c = h.appendChild(X.createElement("div"));
                return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Va.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Va.removeChild(g), h.removeChild(c), b
            }
        }))
    }();
    var Wa = /^(none|table(?!-c[ea]).+)/,
        Xa = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ya = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Za = ["Webkit", "O", "Moz", "ms"],
        $a = X.createElement("div").style;
    fa.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = A(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = fa.camelCase(b),
                    i = a.style;
                return b = fa.cssProps[h] || (fa.cssProps[h] = C(h) || h), g = fa.cssHooks[b] || fa.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Aa.exec(c)) && e[1] && (c = j(a, b, e), f = "number"), void(null != c && c === c && ("number" === f && (c += e && e[3] || (fa.cssNumber[h] ? "" : "px")), da.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = fa.camelCase(b);
            return b = fa.cssProps[h] || (fa.cssProps[h] = C(h) || h), g = fa.cssHooks[b] || fa.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = A(a, b, d)), "normal" === e && b in Ya && (e = Ya[b]), "" === c || c ? (f = parseFloat(e), !0 === c || isFinite(f) ? f || 0 : e) : e
        }
    }), fa.each(["height", "width"], function(a, b) {
        fa.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Wa.test(fa.css(a, "display")) && 0 === a.offsetWidth ? Ua(a, Xa, function() {
                    return F(a, b, d)
                }) : F(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e, f = d && Ta(a),
                    g = d && E(a, b, d, "border-box" === fa.css(a, "boxSizing", !1, f), f);
                return g && (e = Aa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = fa.css(a, b)), D(a, c, g)
            }
        }
    }), fa.cssHooks.marginLeft = B(da.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(A(a, "marginLeft")) || a.getBoundingClientRect().left - Ua(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }), fa.cssHooks.marginRight = B(da.reliableMarginRight, function(a, b) {
        return b ? Ua(a, {
            display: "inline-block"
        }, A, [a, "marginRight"]) : void 0
    }), fa.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        fa.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Ba[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Ra.test(a) || (fa.cssHooks[a + b].set = D)
    }), fa.fn.extend({
        css: function(a, b) {
            return ta(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (fa.isArray(b)) {
                    for (d = Ta(a), e = b.length; e > g; g++) f[b[g]] = fa.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? fa.style(a, b, c) : fa.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return G(this, !0)
        },
        hide: function() {
            return G(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                Ca(this) ? fa(this).show() : fa(this).hide()
            })
        }
    }), fa.Tween = H, H.prototype = {
        constructor: H,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || fa.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (fa.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = H.propHooks[this.prop];
            return a && a.get ? a.get(this) : H.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = H.propHooks[this.prop];
            return this.options.duration ? this.pos = b = fa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = fa.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                fa.fx.step[a.prop] ? fa.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[fa.cssProps[a.prop]] && !fa.cssHooks[a.prop] ? a.elem[a.prop] = a.now : fa.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, fa.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, fa.fx = H.prototype.init, fa.fx.step = {};
    var _a, ab, bb = /^(?:toggle|show|hide)$/,
        cb = /queueHooks$/;
    fa.Animation = fa.extend(N, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return j(c.elem, a, Aa.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                fa.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(ra);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], N.tweeners[c] = N.tweeners[c] || [], N.tweeners[c].unshift(b)
            },
            prefilters: [L],
            prefilter: function(a, b) {
                b ? N.prefilters.unshift(a) : N.prefilters.push(a)
            }
        }), fa.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? fa.extend({}, a) : {
                complete: c || !c && b || fa.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !fa.isFunction(b) && b
            };
            return d.duration = fa.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fa.fx.speeds ? fa.fx.speeds[d.duration] : fa.fx.speeds._default, null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                fa.isFunction(d.old) && d.old.call(this), d.queue && fa.dequeue(this, d.queue)
            }, d
        }, fa.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(Ca).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = fa.isEmptyObject(a),
                    f = fa.speed(b, c, d),
                    g = function() {
                        var b = N(this, fa.extend({}, a), f);
                        (e || va.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = fa.timers,
                        g = va.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && cb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || fa.dequeue(this, a)
                })
            },
            finish: function(a) {
                return !1 !== a && (a = a || "fx"), this.each(function() {
                    var b, c = va.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = fa.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, fa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), fa.each(["toggle", "show", "hide"], function(a, b) {
            var c = fa.fn[b];
            fa.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(J(b, !0), a, d, e)
            }
        }), fa.each({
            slideDown: J("show"),
            slideUp: J("hide"),
            slideToggle: J("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            fa.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), fa.timers = [], fa.fx.tick = function() {
            var a, b = 0,
                c = fa.timers;
            for (_a = fa.now(); b < c.length; b++)(a = c[b])() || c[b] !== a || c.splice(b--, 1);
            c.length || fa.fx.stop(), _a = void 0
        }, fa.fx.timer = function(a) {
            fa.timers.push(a), a() ? fa.fx.start() : fa.timers.pop()
        }, fa.fx.interval = 13,
        fa.fx.start = function() {
            ab || (ab = a.setInterval(fa.fx.tick, fa.fx.interval))
        }, fa.fx.stop = function() {
            a.clearInterval(ab), ab = null
        }, fa.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, fa.fn.delay = function(b, c) {
            return b = fa.fx ? fa.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a = X.createElement("input"),
                b = X.createElement("select"),
                c = b.appendChild(X.createElement("option"));
            a.type = "checkbox", da.checkOn = "" !== a.value, da.optSelected = c.selected, b.disabled = !0, da.optDisabled = !c.disabled, a = X.createElement("input"), a.value = "t", a.type = "radio", da.radioValue = "t" === a.value
        }();
    var db, eb = fa.expr.attrHandle;
    fa.fn.extend({
        attr: function(a, b) {
            return ta(this, fa.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                fa.removeAttr(this, a)
            })
        }
    }), fa.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return void 0 === a.getAttribute ? fa.prop(a, b, c) : (1 === f && fa.isXMLDoc(a) || (b = b.toLowerCase(), e = fa.attrHooks[b] || (fa.expr.match.bool.test(b) ? db : void 0)), void 0 !== c ? null === c ? void fa.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = fa.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!da.radioValue && "radio" === b && fa.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(ra);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = fa.propFix[c] || c, fa.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }
    }), db = {
        set: function(a, b, c) {
            return !1 === b ? fa.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, fa.each(fa.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = eb[b] || fa.find.attr;
        eb[b] = function(a, b, d) {
            var e, f;
            return d || (f = eb[b], eb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, eb[b] = f), e
        }
    });
    var fb = /^(?:input|select|textarea|button)$/i,
        gb = /^(?:a|area)$/i;
    fa.fn.extend({
        prop: function(a, b) {
            return ta(this, fa.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[fa.propFix[a] || a]
            })
        }
    }), fa.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && fa.isXMLDoc(a) || (b = fa.propFix[b] || b, e = fa.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = fa.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : fb.test(a.nodeName) || gb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), da.optSelected || (fa.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), fa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        fa.propFix[this.toLowerCase()] = this
    });
    var hb = /[\t\r\n\f]/g;
    fa.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (fa.isFunction(a)) return this.each(function(b) {
                fa(this).addClass(a.call(this, b, O(this)))
            });
            if ("string" == typeof a && a)
                for (b = a.match(ra) || []; c = this[i++];)
                    if (e = O(c), d = 1 === c.nodeType && (" " + e + " ").replace(hb, " ")) {
                        for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = fa.trim(d), e !== h && c.setAttribute("class", h)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (fa.isFunction(a)) return this.each(function(b) {
                fa(this).removeClass(a.call(this, b, O(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a)
                for (b = a.match(ra) || []; c = this[i++];)
                    if (e = O(c), d = 1 === c.nodeType && (" " + e + " ").replace(hb, " ")) {
                        for (g = 0; f = b[g++];)
                            for (; d.indexOf(" " + f + " ") > -1;) d = d.replace(" " + f + " ", " ");
                        h = fa.trim(d), e !== h && c.setAttribute("class", h)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : fa.isFunction(a) ? this.each(function(c) {
                fa(this).toggleClass(a.call(this, c, O(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c)
                    for (d = 0, e = fa(this), f = a.match(ra) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else void 0 !== a && "boolean" !== c || (b = O(this), b && va.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || !1 === a ? "" : va.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            for (b = " " + a + " "; c = this[d++];)
                if (1 === c.nodeType && (" " + O(c) + " ").replace(hb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    fa.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = fa.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, fa(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : fa.isArray(e) && (e = fa.map(e, function(a) {
                    return null == a ? "" : a + ""
                })), (b = fa.valHooks[this.type] || fa.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = fa.valHooks[e.type] || fa.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(/\r/g, "") : null == c ? "" : c)) : void 0
        }
    }), fa.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = fa.find.attr(a, "value");
                    return null != b ? b : fa.trim(fa.text(a)).replace(/[\x20\t\r\n\f]+/g, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (da.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !fa.nodeName(c.parentNode, "optgroup"))) {
                            if (b = fa(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = fa.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = fa.inArray(fa.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), fa.each(["radio", "checkbox"], function() {
        fa.valHooks[this] = {
            set: function(a, b) {
                return fa.isArray(b) ? a.checked = fa.inArray(fa(a).val(), b) > -1 : void 0
            }
        }, da.checkOn || (fa.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var ib = /^(?:focusinfocus|focusoutblur)$/;
    fa.extend(fa.event, {
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || X],
                n = ca.call(b, "type") ? b.type : b,
                o = ca.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || X, 3 !== d.nodeType && 8 !== d.nodeType && !ib.test(n + fa.event.triggered) && (n.indexOf(".") > -1 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[fa.expando] ? b : new fa.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : fa.makeArray(c, [b]), l = fa.event.special[n] || {}, e || !l.trigger || !1 !== l.trigger.apply(d, c))) {
                if (!e && !l.noBubble && !fa.isWindow(d)) {
                    for (i = l.delegateType || n, ib.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                    h === (d.ownerDocument || X) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0;
                    (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (va.get(g, "events") || {})[b.type] && va.get(g, "handle"), k && k.apply(g, c), (k = j && g[j]) && k.apply && ua(g) && (b.result = k.apply(g, c), !1 === b.result && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && !1 !== l._default.apply(m.pop(), c) || !ua(d) || j && fa.isFunction(d[n]) && !fa.isWindow(d) && (h = d[j], h && (d[j] = null), fa.event.triggered = n, d[n](), fa.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = fa.extend(new fa.Event, c, {
                type: a,
                isSimulated: !0
            });
            fa.event.trigger(d, null, b)
        }
    }), fa.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                fa.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? fa.event.trigger(a, b, c, !0) : void 0
        }
    }), fa.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        fa.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), fa.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), da.focusin = "onfocusin" in a, da.focusin || fa.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            fa.event.simulate(b, a.target, fa.event.fix(a))
        };
        fa.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = va.access(d, b);
                e || d.addEventListener(a, c, !0), va.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = va.access(d, b) - 1;
                e ? va.access(d, b, e) : (d.removeEventListener(a, c, !0), va.remove(d, b))
            }
        }
    });
    var jb = a.location,
        kb = fa.now(),
        lb = /\?/;
    fa.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, fa.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (a) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || fa.error("Invalid XML: " + b), c
    };
    var mb = /([?&])_=[^&]*/,
        nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        pb = /^(?:GET|HEAD)$/,
        qb = {},
        rb = {},
        sb = "*/".concat("*"),
        tb = X.createElement("a");
    tb.href = jb.href, fa.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jb.href,
            type: "GET",
            isLocal: ob.test(jb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": sb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": fa.parseJSON,
                "text xml": fa.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? R(R(a, fa.ajaxSettings), b) : R(fa.ajaxSettings, a)
        },
        ajaxPrefilter: P(qb),
        ajaxTransport: P(rb),
        ajax: function(b, c) {
            function d(b, c, d, h) {
                var j, l, s, t, v, x = c;
                2 !== u && (u = 2, i && a.clearTimeout(i), e = void 0, g = h || "", w.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (t = S(m, w, d)), t = T(m, t, w, j), j ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (fa.lastModified[f] = v), (v = w.getResponseHeader("etag")) && (fa.etag[f] = v)), 204 === b || "HEAD" === m.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, j = !s)) : (s = x, !b && x || (x = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = void 0, k && o.trigger(j ? "ajaxSuccess" : "ajaxError", [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --fa.active || fa.event.trigger("ajaxStop")))
            }
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m = fa.ajaxSetup({}, c),
                n = m.context || m,
                o = m.context && (n.nodeType || n.jquery) ? fa(n) : fa.event,
                p = fa.Deferred(),
                q = fa.Callbacks("once memory"),
                r = m.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!h)
                                for (h = {}; b = nb.exec(g);) h[b[1].toLowerCase()] = b[2];
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return u || (m.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || v;
                        return e && e.abort(b), d(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((b || m.url || jb.href) + "").replace(/#.*$/, "").replace(/^\/\//, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = fa.trim(m.dataType || "*").toLowerCase().match(ra) || [""], null == m.crossDomain) {
                j = X.createElement("a");
                try {
                    j.href = m.url, j.href = j.href, m.crossDomain = tb.protocol + "//" + tb.host != j.protocol + "//" + j.host
                } catch (a) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = fa.param(m.data, m.traditional)), Q(qb, m, c, w), 2 === u) return w;
            k = fa.event && m.global, k && 0 == fa.active++ && fa.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !pb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = mb.test(f) ? f.replace(mb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (fa.lastModified[f] && w.setRequestHeader("If-Modified-Since", fa.lastModified[f]), fa.etag[f] && w.setRequestHeader("If-None-Match", fa.etag[f])), (m.data && m.hasContent && !1 !== m.contentType || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + sb + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (!1 === m.beforeSend.call(n, w, m) || 2 === u)) return w.abort();
            v = "abort";
            for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[l](m[l]);
            if (e = Q(rb, m, c, w)) {
                if (w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), 2 === u) return w;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    u = 1, e.send(s, d)
                } catch (a) {
                    if (!(2 > u)) throw a;
                    d(-1, a)
                }
            } else d(-1, "No Transport");
            return w
        },
        getJSON: function(a, b, c) {
            return fa.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return fa.get(a, void 0, b, "script")
        }
    }), fa.each(["get", "post"], function(a, b) {
        fa[b] = function(a, c, d, e) {
            return fa.isFunction(c) && (e = e || d, d = c, c = void 0), fa.ajax(fa.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, fa.isPlainObject(a) && a))
        }
    }), fa._evalUrl = function(a) {
        return fa.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, fa.fn.extend({
        wrapAll: function(a) {
            var b;
            return fa.isFunction(a) ? this.each(function(b) {
                fa(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = fa(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return fa.isFunction(a) ? this.each(function(b) {
                fa(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = fa(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = fa.isFunction(a);
            return this.each(function(c) {
                fa(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                fa.nodeName(this, "body") || fa(this).replaceWith(this.childNodes)
            }).end()
        }
    }), fa.expr.filters.hidden = function(a) {
        return !fa.expr.filters.visible(a)
    }, fa.expr.filters.visible = function(a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
    };
    var ub = /\[\]$/,
        vb = /^(?:submit|button|image|reset|file)$/i,
        wb = /^(?:input|select|textarea|keygen)/i;
    fa.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = fa.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = fa.ajaxSettings && fa.ajaxSettings.traditional), fa.isArray(a) || a.jquery && !fa.isPlainObject(a)) fa.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) U(c, a[c], b, e);
        return d.join("&").replace(/%20/g, "+")
    }, fa.fn.extend({
        serialize: function() {
            return fa.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = fa.prop(this, "elements");
                return a ? fa.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !fa(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !Da.test(a))
            }).map(function(a, b) {
                var c = fa(this).val();
                return null == c ? null : fa.isArray(c) ? fa.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(/\r?\n/g, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(/\r?\n/g, "\r\n")
                }
            }).get()
        }
    }), fa.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (a) {}
    };
    var xb = {
            0: 200,
            1223: 204
        },
        yb = fa.ajaxSettings.xhr();
    da.cors = !!yb && "withCredentials" in yb, da.ajax = yb = !!yb, fa.ajaxTransport(function(b) {
        var c, d;
        return da.cors || yb && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(xb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (a) {
                    if (c) throw a
                }
            },
            abort: function() {
                c && c()
            }
        } : void 0
    }), fa.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return fa.globalEval(a), a
            }
        }
    }), fa.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), fa.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = fa("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), X.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var zb = [],
        Ab = /(=)\?(?=&|$)|\?\?/;
    fa.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = zb.pop() || fa.expando + "_" + kb++;
            return this[a] = !0, a
        }
    }), fa.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = !1 !== b.jsonp && (Ab.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ab.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = fa.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ab, "$1" + e) : !1 !== b.jsonp && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || fa.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? fa(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, zb.push(e)), g && fa.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), fa.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || X;
        var d = la.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m([a], b, e), e && e.length && fa(e).remove(), fa.merge([], d.childNodes))
    };
    var Bb = fa.fn.load;
    fa.fn.load = function(a, b, c) {
        if ("string" != typeof a && Bb) return Bb.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = fa.trim(a.slice(h)), a = a.slice(0, h)), fa.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && fa.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? fa("<div>").append(fa.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, fa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        fa.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), fa.expr.filters.animated = function(a) {
        return fa.grep(fa.timers, function(b) {
            return a === b.elem
        }).length
    }, fa.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = fa.css(a, "position"),
                l = fa(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = fa.css(a, "top"), i = fa.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), fa.isFunction(b) && (b = b.call(a, c, fa.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, fa.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                fa.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            return f ? (b = f.documentElement, fa.contains(b, d) ? (e = d.getBoundingClientRect(), c = V(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e) : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === fa.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), fa.nodeName(a[0], "html") || (d = a.offset()), d.top += fa.css(a[0], "borderTopWidth", !0), d.left += fa.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - fa.css(c, "marginTop", !0),
                    left: b.left - d.left - fa.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent; a && "static" === fa.css(a, "position");) a = a.offsetParent;
                return a || Va
            })
        }
    }), fa.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        fa.fn[a] = function(d) {
            return ta(this, function(a, d, e) {
                var f = V(a);
                return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), fa.each(["top", "left"], function(a, b) {
        fa.cssHooks[b] = B(da.pixelPosition, function(a, c) {
            return c ? (c = A(a, b), Sa.test(c) ? fa(a).position()[b] + "px" : c) : void 0
        })
    }), fa.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        fa.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            fa.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (!0 === d || !0 === e ? "margin" : "border");
                return ta(this, function(b, c, d) {
                    var e;
                    return fa.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? fa.css(b, c, g) : fa.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), fa.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        size: function() {
            return this.length
        }
    }), fa.fn.andSelf = fa.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return fa
    });
    var Cb = a.jQuery,
        Db = a.$;
    return fa.noConflict = function(b) {
        return a.$ === fa && (a.$ = Db), b && a.jQuery === fa && (a.jQuery = Cb), fa
    }, b || (a.jQuery = a.$ = fa), fa
}), "object" != typeof JSON && (JSON = {}),
    function() {
        "use strict";

        function f(a) {
            return a < 10 ? "0" + a : a
        }

        function quote(a) {
            return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
                var b = meta[a];
                return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }

        function str(a, b) {
            var c, d, e, f, g, h = gap,
                i = b[a];
            switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
                case "string":
                    return quote(i);
                case "number":
                    return isFinite(i) ? String(i) : "null";
                case "boolean":
                case "null":
                    return String(i);
                case "object":
                    if (!i) return "null";
                    if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                        for (f = i.length, c = 0; c < f; c += 1) g[c] = str(c, i) || "null";
                        return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]", gap = h, e
                    }
                    if (rep && "object" == typeof rep)
                        for (f = rep.length, c = 0; c < f; c += 1) "string" == typeof rep[c] && (d = rep[c], (e = str(d, i)) && g.push(quote(d) + (gap ? ": " : ":") + e));
                    else
                        for (d in i) Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i)) && g.push(quote(d) + (gap ? ": " : ":") + e);
                    return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}", gap = h, e
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(a) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(a, b, c) {
            var d;
            if (gap = "", indent = "", "number" == typeof c)
                for (d = 0; d < c; d += 1) indent += " ";
            else "string" == typeof c && (indent = c);
            if (rep = b, !b || "function" == typeof b || "object" == typeof b && "number" == typeof b.length) return str("", {
                "": a
            });
            throw new Error("JSON.stringify")
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(a, b) {
                var c, d, e = a[b];
                if (e && "object" == typeof e)
                    for (c in e) Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
                return reviver.call(a, b, e)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function(a, b) {
        "use strict";
        var c = a.History = a.History || {},
            d = a.jQuery;
        if (void 0 !== c.Adapter) throw new Error("History.js Adapter has already been loaded...");
        c.Adapter = {
            bind: function(a, b, c) {
                d(a).bind(b, c)
            },
            trigger: function(a, b, c) {
                d(a).trigger(b, c)
            },
            extractEventData: function(a, b, c) {
                return b && b.originalEvent && b.originalEvent[a] || c && c[a] || void 0
            },
            onDomLoad: function(a) {
                d(a)
            }
        }, void 0 !== c.init && c.init()
    }(window),
    function(a, b) {
        "use strict";
        var c = a.document,
            d = a.setTimeout || d,
            e = a.clearTimeout || e,
            f = a.setInterval || f,
            g = a.History = a.History || {};
        if (void 0 !== g.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
        g.initHtml4 = function() {
            if (void 0 !== g.initHtml4.initialized) return !1;
            g.initHtml4.initialized = !0, g.enabled = !0, g.savedHashes = [], g.isLastHash = function(a) {
                var b = g.getHashByIndex();
                return a === b
            }, g.isHashEqual = function(a, b) {
                return a = encodeURIComponent(a).replace(/%25/g, "%"), b = encodeURIComponent(b).replace(/%25/g, "%"), a === b
            }, g.saveHash = function(a) {
                return !g.isLastHash(a) && (g.savedHashes.push(a), !0)
            }, g.getHashByIndex = function(a) {
                return void 0 === a ? g.savedHashes[g.savedHashes.length - 1] : a < 0 ? g.savedHashes[g.savedHashes.length + a] : g.savedHashes[a]
            }, g.discardedHashes = {}, g.discardedStates = {}, g.discardState = function(a, b, c) {
                var d, e = g.getHashByState(a);
                return d = {
                    discardedState: a,
                    backState: c,
                    forwardState: b
                }, g.discardedStates[e] = d, !0
            }, g.discardHash = function(a, b, c) {
                var d = {
                    discardedHash: a,
                    backState: c,
                    forwardState: b
                };
                return g.discardedHashes[a] = d, !0
            }, g.discardedState = function(a) {
                var b = g.getHashByState(a);
                return g.discardedStates[b] || !1
            }, g.discardedHash = function(a) {
                return g.discardedHashes[a] || !1
            }, g.recycleState = function(a) {
                var b = g.getHashByState(a);
                return g.discardedState(a) && delete g.discardedStates[b], !0
            }, g.emulated.hashChange && (g.hashChangeInit = function() {
                g.checkerFunction = null;
                var b, d, e, h, i = "",
                    j = Boolean(g.getHash());
                return g.isInternetExplorer() ? (b = "historyjs-iframe", d = c.createElement("iframe"), d.setAttribute("id", b), d.setAttribute("src", "#"), d.style.display = "none", c.body.appendChild(d), d.contentWindow.document.open(), d.contentWindow.document.close(), e = "", h = !1, g.checkerFunction = function() {
                    if (h) return !1;
                    h = !0;
                    var b = g.getHash(),
                        c = g.getHash(d.contentWindow.document);
                    return b !== i ? (i = b, c !== b && (e = c = b, d.contentWindow.document.open(), d.contentWindow.document.close(), d.contentWindow.document.location.hash = g.escapeHash(b)), g.Adapter.trigger(a, "hashchange")) : c !== e && (e = c, j && "" === c ? g.back() : g.setHash(c, !1)), h = !1, !0
                }) : g.checkerFunction = function() {
                    var b = g.getHash() || "";
                    return b !== i && (i = b, g.Adapter.trigger(a, "hashchange")), !0
                }, g.intervalList.push(f(g.checkerFunction, g.options.hashChangeInterval)), !0
            }, g.Adapter.onDomLoad(g.hashChangeInit)), g.emulated.pushState && (g.onHashChange = function(b) {
                var c, d = b && b.newURL || g.getLocationHref(),
                    e = g.getHashByUrl(d),
                    f = null;
                return g.isLastHash(e) ? (g.busy(!1), !1) : (g.doubleCheckComplete(), g.saveHash(e), e && g.isTraditionalAnchor(e) ? (g.Adapter.trigger(a, "anchorchange"), g.busy(!1), !1) : (f = g.extractState(g.getFullUrl(e || g.getLocationHref()), !0), g.isLastSavedState(f) ? (g.busy(!1), !1) : (g.getHashByState(f), c = g.discardedState(f), c ? (g.getHashByIndex(-2) === g.getHashByState(c.forwardState) ? g.back(!1) : g.forward(!1), !1) : (g.pushState(f.data, f.title, encodeURI(f.url), !1), !0))))
            }, g.Adapter.bind(a, "hashchange", g.onHashChange), g.pushState = function(b, c, d, e) {
                if (d = encodeURI(d).replace(/%25/g, "%"), g.getHashByUrl(d)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (!1 !== e && g.busy()) return g.pushQueue({
                    scope: g,
                    callback: g.pushState,
                    args: arguments,
                    queue: e
                }), !1;
                g.busy(!0);
                var f = g.createStateObject(b, c, d),
                    h = g.getHashByState(f),
                    i = g.getState(!1),
                    j = g.getHashByState(i),
                    k = g.getHash(),
                    l = g.expectedStateId == f.id;
                return g.storeState(f), g.expectedStateId = f.id, g.recycleState(f), g.setTitle(f), h === j ? (g.busy(!1), !1) : (g.saveState(f), l || g.Adapter.trigger(a, "statechange"), !g.isHashEqual(h, k) && !g.isHashEqual(h, g.getShortUrl(g.getLocationHref())) && g.setHash(h, !1), g.busy(!1), !0)
            }, g.replaceState = function(b, c, d, e) {
                if (d = encodeURI(d).replace(/%25/g, "%"), g.getHashByUrl(d)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (!1 !== e && g.busy()) return g.pushQueue({
                    scope: g,
                    callback: g.replaceState,
                    args: arguments,
                    queue: e
                }), !1;
                g.busy(!0);
                var f = g.createStateObject(b, c, d),
                    h = g.getHashByState(f),
                    i = g.getState(!1),
                    j = g.getHashByState(i),
                    k = g.getStateByIndex(-2);
                return g.discardState(i, f, k), h === j ? (g.storeState(f), g.expectedStateId = f.id, g.recycleState(f), g.setTitle(f), g.saveState(f), g.Adapter.trigger(a, "statechange"), g.busy(!1)) : g.pushState(f.data, f.title, f.url, !1), !0
            }), g.emulated.pushState && g.getHash() && !g.emulated.hashChange && g.Adapter.onDomLoad(function() {
                g.Adapter.trigger(a, "hashchange")
            })
        }, void 0 !== g.init && g.init()
    }(window),
    function(a, b) {
        "use strict";
        var c = a.console || b,
            d = a.document,
            e = a.navigator,
            f = a.sessionStorage || !1,
            g = a.setTimeout,
            h = a.clearTimeout,
            i = a.setInterval,
            j = a.clearInterval,
            k = a.JSON,
            l = a.alert,
            m = a.History = a.History || {},
            n = a.history;
        try {
            f.setItem("TEST", "1"), f.removeItem("TEST")
        } catch (a) {
            f = !1
        }
        if (k.stringify = k.stringify || k.encode, k.parse = k.parse || k.decode, void 0 !== m.init) throw new Error("History.js Core has already been loaded...");
        m.init = function(a) {
            return void 0 !== m.Adapter && (void 0 !== m.initCore && m.initCore(), void 0 !== m.initHtml4 && m.initHtml4(), !0)
        }, m.initCore = function(o) {
            if (void 0 !== m.initCore.initialized) return !1;
            if (m.initCore.initialized = !0, m.options = m.options || {}, m.options.hashChangeInterval = m.options.hashChangeInterval || 100, m.options.safariPollInterval = m.options.safariPollInterval || 500, m.options.doubleCheckInterval = m.options.doubleCheckInterval || 500, m.options.disableSuid = m.options.disableSuid || !1, m.options.storeInterval = m.options.storeInterval || 1e3, m.options.busyDelay = m.options.busyDelay || 250, m.options.debug = m.options.debug || !1, m.options.initialTitle = m.options.initialTitle || d.title, m.options.html4Mode = m.options.html4Mode || !1, m.options.delayInit = m.options.delayInit || !1, m.intervalList = [], m.clearAllIntervals = function() {
                    var a, b = m.intervalList;
                    if (void 0 !== b && null !== b) {
                        for (a = 0; a < b.length; a++) j(b[a]);
                        m.intervalList = null
                    }
                }, m.debug = function() {
                    (m.options.debug || !1) && m.log.apply(m, arguments)
                }, m.log = function() {
                    var a, b, e, f, g, h = void 0 !== c && void 0 !== c.log && void 0 !== c.log.apply,
                        i = d.getElementById("log");
                    for (h ? (f = Array.prototype.slice.call(arguments), a = f.shift(), void 0 !== c.debug ? c.debug.apply(c, [a, f]) : c.log.apply(c, [a, f])) : a = "\n" + arguments[0] + "\n", b = 1, e = arguments.length; b < e; ++b) {
                        if ("object" == typeof(g = arguments[b]) && void 0 !== k) try {
                            g = k.stringify(g)
                        } catch (a) {}
                        a += "\n" + g + "\n"
                    }
                    return i ? (i.value += a + "\n-----\n", i.scrollTop = i.scrollHeight - i.clientHeight) : h || l(a), !0
                }, m.getInternetExplorerMajorVersion = function() {
                    return m.getInternetExplorerMajorVersion.cached = void 0 !== m.getInternetExplorerMajorVersion.cached ? m.getInternetExplorerMajorVersion.cached : function() {
                        for (var a = 3, b = d.createElement("div"), c = b.getElementsByTagName("i");
                            (b.innerHTML = "<!--[if gt IE " + ++a + "]><i></i><![endif]-->") && c[0];);
                        return a > 4 && a
                    }()
                }, m.isInternetExplorer = function() {
                    return m.isInternetExplorer.cached = void 0 !== m.isInternetExplorer.cached ? m.isInternetExplorer.cached : Boolean(m.getInternetExplorerMajorVersion())
                }, m.options.html4Mode ? m.emulated = {
                    pushState: !0,
                    hashChange: !0
                } : m.emulated = {
                    pushState: !Boolean(a.history && a.history.pushState && a.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(e.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(e.userAgent)),
                    hashChange: Boolean(!("onhashchange" in a || "onhashchange" in d) || m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 8)
                }, m.enabled = !m.emulated.pushState, m.bugs = {
                    setHash: Boolean(!m.emulated.pushState && "Apple Computer, Inc." === e.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),
                    safariPoll: Boolean(!m.emulated.pushState && "Apple Computer, Inc." === e.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),
                    ieDoubleCheck: Boolean(m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 8),
                    hashEscape: Boolean(m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 7)
                }, m.isEmptyObject = function(a) {
                    for (var b in a)
                        if (a.hasOwnProperty(b)) return !1;
                    return !0
                }, m.cloneObject = function(a) {
                    var b, c;
                    return a ? (b = k.stringify(a), c = k.parse(b)) : c = {}, c
                }, m.getRootUrl = function() {
                    var a = d.location.protocol + "//" + (d.location.hostname || d.location.host);
                    return d.location.port && (a += ":" + d.location.port), a += "/"
                }, m.getBaseHref = function() {
                    var a = d.getElementsByTagName("base"),
                        b = null,
                        c = "";
                    return 1 === a.length && (b = a[0], c = b.href.replace(/[^\/]+$/, "")), c = c.replace(/\/+$/, ""), c && (c += "/"), c
                }, m.getBaseUrl = function() {
                    return m.getBaseHref() || m.getBasePageUrl() || m.getRootUrl()
                }, m.getPageUrl = function() {
                    var a = m.getState(!1, !1),
                        b = (a || {}).url || m.getLocationHref();
                    return b.replace(/\/+$/, "").replace(/[^\/]+$/, function(a, b, c) {
                        return /\./.test(a) ? a : a + "/"
                    })
                }, m.getBasePageUrl = function() {
                    return m.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(a, b, c) {
                        return /[^\/]$/.test(a) ? "" : a
                    }).replace(/\/+$/, "") + "/"
                }, m.getFullUrl = function(a, b) {
                    var c = a,
                        d = a.substring(0, 1);
                    return b = void 0 === b || b, /[a-z]+\:\/\//.test(a) || (c = "/" === d ? m.getRootUrl() + a.replace(/^\/+/, "") : "#" === d ? m.getPageUrl().replace(/#.*/, "") + a : "?" === d ? m.getPageUrl().replace(/[\?#].*/, "") + a : b ? m.getBaseUrl() + a.replace(/^(\.\/)+/, "") : m.getBasePageUrl() + a.replace(/^(\.\/)+/, "")), c.replace(/\#$/, "")
                }, m.getShortUrl = function(a) {
                    var b = a,
                        c = m.getBaseUrl(),
                        d = m.getRootUrl();
                    return m.emulated.pushState && (b = b.replace(c, "")), b = b.replace(d, "/"), m.isTraditionalAnchor(b) && (b = "./" + b), b = b.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
                }, m.getLocationHref = function(a) {
                    return a = a || d, a.URL === a.location.href ? a.location.href : a.location.href === decodeURIComponent(a.URL) ? a.URL : a.location.hash && decodeURIComponent(a.location.href.replace(/^[^#]+/, "")) === a.location.hash ? a.location.href : -1 == a.URL.indexOf("#") && -1 != a.location.href.indexOf("#") ? a.location.href : a.URL || a.location.href
                }, m.store = {}, m.idToState = m.idToState || {}, m.stateToId = m.stateToId || {}, m.urlToId = m.urlToId || {}, m.storedStates = m.storedStates || [], m.savedStates = m.savedStates || [], m.normalizeStore = function() {
                    m.store.idToState = m.store.idToState || {}, m.store.urlToId = m.store.urlToId || {}, m.store.stateToId = m.store.stateToId || {}
                }, m.getState = function(a, b) {
                    void 0 === a && (a = !0), void 0 === b && (b = !0);
                    var c = m.getLastSavedState();
                    return !c && b && (c = m.createStateObject()), a && (c = m.cloneObject(c), c.url = c.cleanUrl || c.url), c
                }, m.getIdByState = function(a) {
                    var b, c = m.extractId(a.url);
                    if (!c)
                        if (b = m.getStateString(a), void 0 !== m.stateToId[b]) c = m.stateToId[b];
                        else if (void 0 !== m.store.stateToId[b]) c = m.store.stateToId[b];
                    else {
                        for (; c = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), void 0 !== m.idToState[c] || void 0 !== m.store.idToState[c];);
                        m.stateToId[b] = c, m.idToState[c] = a
                    }
                    return c
                }, m.normalizeState = function(a) {
                    var b, c;
                    return a && "object" == typeof a || (a = {}), void 0 !== a.normalized ? a : (a.data && "object" == typeof a.data || (a.data = {}), b = {}, b.normalized = !0, b.title = a.title || "", b.url = m.getFullUrl(a.url ? a.url : m.getLocationHref()), b.hash = m.getShortUrl(b.url), b.data = m.cloneObject(a.data), b.id = m.getIdByState(b), b.cleanUrl = b.url.replace(/\??\&_suid.*/, ""), b.url = b.cleanUrl, c = !m.isEmptyObject(b.data), (b.title || c) && !0 !== m.options.disableSuid && (b.hash = m.getShortUrl(b.url).replace(/\??\&_suid.*/, ""), /\?/.test(b.hash) || (b.hash += "?"), b.hash += "&_suid=" + b.id), b.hashedUrl = m.getFullUrl(b.hash), (m.emulated.pushState || m.bugs.safariPoll) && m.hasUrlDuplicate(b) && (b.url = b.hashedUrl), b)
                }, m.createStateObject = function(a, b, c) {
                    var d = {
                        data: a,
                        title: b,
                        url: c
                    };
                    return d = m.normalizeState(d)
                }, m.getStateById = function(a) {
                    return a = String(a), m.idToState[a] || m.store.idToState[a] || b
                }, m.getStateString = function(a) {
                    var b, c;
                    return b = m.normalizeState(a), c = {
                        data: b.data,
                        title: a.title,
                        url: a.url
                    }, k.stringify(c)
                }, m.getStateId = function(a) {
                    var b;
                    return b = m.normalizeState(a), b.id
                }, m.getHashByState = function(a) {
                    var b;
                    return b = m.normalizeState(a), b.hash
                }, m.extractId = function(a) {
                    var b, c;
                    return c = -1 != a.indexOf("#") ? a.split("#")[0] : a, b = /(.*)\&_suid=([0-9]+)$/.exec(c), b ? b[1] || a : a, (b ? String(b[2] || "") : "") || !1
                }, m.isTraditionalAnchor = function(a) {
                    return !/[\/\?\.]/.test(a)
                }, m.extractState = function(a, b) {
                    var c, d, e = null;
                    return b = b || !1, c = m.extractId(a), c && (e = m.getStateById(c)), e || (d = m.getFullUrl(a), c = m.getIdByUrl(d) || !1, c && (e = m.getStateById(c)), !e && b && !m.isTraditionalAnchor(a) && (e = m.createStateObject(null, null, d))), e
                }, m.getIdByUrl = function(a) {
                    return m.urlToId[a] || m.store.urlToId[a] || b
                }, m.getLastSavedState = function() {
                    return m.savedStates[m.savedStates.length - 1] || b
                }, m.getLastStoredState = function() {
                    return m.storedStates[m.storedStates.length - 1] || b
                }, m.hasUrlDuplicate = function(a) {
                    var b;
                    return b = m.extractState(a.url), b && b.id !== a.id
                }, m.storeState = function(a) {
                    return m.urlToId[a.url] = a.id, m.storedStates.push(m.cloneObject(a)), a
                }, m.isLastSavedState = function(a) {
                    var b, c, d, e = !1;
                    return m.savedStates.length && (b = a.id, c = m.getLastSavedState(), d = c.id, e = b === d), e
                }, m.saveState = function(a) {
                    return !m.isLastSavedState(a) && (m.savedStates.push(m.cloneObject(a)), !0)
                }, m.getStateByIndex = function(a) {
                    return void 0 === a ? m.savedStates[m.savedStates.length - 1] : a < 0 ? m.savedStates[m.savedStates.length + a] : m.savedStates[a]
                }, m.getCurrentIndex = function() {
                    return m.savedStates.length < 1 ? 0 : m.savedStates.length - 1
                }, m.getHash = function(a) {
                    var b = m.getLocationHref(a);
                    return m.getHashByUrl(b)
                }, m.unescapeHash = function(a) {
                    var b = m.normalizeHash(a);
                    return b = decodeURIComponent(b)
                }, m.normalizeHash = function(a) {
                    return a.replace(/[^#]*#/, "").replace(/#.*/, "")
                }, m.setHash = function(a, b) {
                    var c, e;
                    return !1 !== b && m.busy() ? (m.pushQueue({
                        scope: m,
                        callback: m.setHash,
                        args: arguments,
                        queue: b
                    }), !1) : (m.busy(!0), c = m.extractState(a, !0), c && !m.emulated.pushState ? m.pushState(c.data, c.title, c.url, !1) : m.getHash() !== a && (m.bugs.setHash ? (e = m.getPageUrl(), m.pushState(null, null, e + "#" + a, !1)) : d.location.hash = a), m)
                }, m.escapeHash = function(b) {
                    var c = m.normalizeHash(b);
                    return c = a.encodeURIComponent(c), m.bugs.hashEscape || (c = c.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), c
                }, m.getHashByUrl = function(a) {
                    var b = String(a).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                    return b = m.unescapeHash(b)
                }, m.setTitle = function(a) {
                    var b, c = a.title;
                    c || (b = m.getStateByIndex(0)) && b.url === a.url && (c = b.title || m.options.initialTitle);
                    try {
                        d.getElementsByTagName("title")[0].innerHTML = c.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                    } catch (a) {}
                    return d.title = c, m
                }, m.queues = [], m.busy = function(a) {
                    if (void 0 !== a ? m.busy.flag = a : void 0 === m.busy.flag && (m.busy.flag = !1), !m.busy.flag) {
                        h(m.busy.timeout);
                        var b = function() {
                            var a, c, d;
                            if (!m.busy.flag)
                                for (a = m.queues.length - 1; a >= 0; --a) c = m.queues[a], 0 !== c.length && (d = c.shift(), m.fireQueueItem(d), m.busy.timeout = g(b, m.options.busyDelay))
                        };
                        m.busy.timeout = g(b, m.options.busyDelay)
                    }
                    return m.busy.flag
                }, m.busy.flag = !1, m.fireQueueItem = function(a) {
                    return a.callback.apply(a.scope || m, a.args || [])
                }, m.pushQueue = function(a) {
                    return m.queues[a.queue || 0] = m.queues[a.queue || 0] || [], m.queues[a.queue || 0].push(a), m
                }, m.queue = function(a, b) {
                    return "function" == typeof a && (a = {
                        callback: a
                    }), void 0 !== b && (a.queue = b), m.busy() ? m.pushQueue(a) : m.fireQueueItem(a), m
                }, m.clearQueue = function() {
                    return m.busy.flag = !1, m.queues = [], m
                }, m.stateChanged = !1, m.doubleChecker = !1, m.doubleCheckComplete = function() {
                    return m.stateChanged = !0, m.doubleCheckClear(), m
                }, m.doubleCheckClear = function() {
                    return m.doubleChecker && (h(m.doubleChecker), m.doubleChecker = !1), m
                }, m.doubleCheck = function(a) {
                    return m.stateChanged = !1, m.doubleCheckClear(), m.bugs.ieDoubleCheck && (m.doubleChecker = g(function() {
                        return m.doubleCheckClear(), m.stateChanged || a(), !0
                    }, m.options.doubleCheckInterval)), m
                }, m.safariStatePoll = function() {
                    var b, c = m.extractState(m.getLocationHref());
                    if (!m.isLastSavedState(c)) return b = c, b || (b = m.createStateObject()), m.Adapter.trigger(a, "popstate"), m
                }, m.back = function(a) {
                    return !1 !== a && m.busy() ? (m.pushQueue({
                        scope: m,
                        callback: m.back,
                        args: arguments,
                        queue: a
                    }), !1) : (m.busy(!0), m.doubleCheck(function() {
                        m.back(!1)
                    }), n.go(-1), !0)
                }, m.forward = function(a) {
                    return !1 !== a && m.busy() ? (m.pushQueue({
                        scope: m,
                        callback: m.forward,
                        args: arguments,
                        queue: a
                    }), !1) : (m.busy(!0), m.doubleCheck(function() {
                        m.forward(!1)
                    }), n.go(1), !0)
                }, m.go = function(a, b) {
                    var c;
                    if (a > 0)
                        for (c = 1; c <= a; ++c) m.forward(b);
                    else {
                        if (!(a < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                        for (c = -1; c >= a; --c) m.back(b)
                    }
                    return m
                }, m.emulated.pushState) {
                var p = function() {};
                m.pushState = m.pushState || p, m.replaceState = m.replaceState || p
            } else m.onPopState = function(b, c) {
                var d, e, f = !1,
                    g = !1;
                return m.doubleCheckComplete(), d = m.getHash(), d ? (e = m.extractState(d || m.getLocationHref(), !0), e ? m.replaceState(e.data, e.title, e.url, !1) : (m.Adapter.trigger(a, "anchorchange"), m.busy(!1)), m.expectedStateId = !1, !1) : (f = m.Adapter.extractEventData("state", b, c) || !1, g = f ? m.getStateById(f) : m.expectedStateId ? m.getStateById(m.expectedStateId) : m.extractState(m.getLocationHref()), g || (g = m.createStateObject(null, null, m.getLocationHref())), m.expectedStateId = !1, m.isLastSavedState(g) ? (m.busy(!1), !1) : (m.storeState(g), m.saveState(g), m.setTitle(g), m.Adapter.trigger(a, "statechange"), m.busy(!1), !0))
            }, m.Adapter.bind(a, "popstate", m.onPopState), m.pushState = function(b, c, d, e) {
                if (m.getHashByUrl(d) && m.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (!1 !== e && m.busy()) return m.pushQueue({
                    scope: m,
                    callback: m.pushState,
                    args: arguments,
                    queue: e
                }), !1;
                m.busy(!0);
                var f = m.createStateObject(b, c, d);
                return m.isLastSavedState(f) ? m.busy(!1) : (m.storeState(f), m.expectedStateId = f.id, n.pushState(f.id, f.title, f.url), m.Adapter.trigger(a, "popstate")), !0
            }, m.replaceState = function(b, c, d, e) {
                if (m.getHashByUrl(d) && m.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (!1 !== e && m.busy()) return m.pushQueue({
                    scope: m,
                    callback: m.replaceState,
                    args: arguments,
                    queue: e
                }), !1;
                m.busy(!0);
                var f = m.createStateObject(b, c, d);
                return m.isLastSavedState(f) ? m.busy(!1) : (m.storeState(f), m.expectedStateId = f.id, n.replaceState(f.id, f.title, f.url), m.Adapter.trigger(a, "popstate")), !0
            };
            if (f) {
                try {
                    m.store = k.parse(f.getItem("History.store")) || {}
                } catch (a) {
                    m.store = {}
                }
                m.normalizeStore()
            } else m.store = {}, m.normalizeStore();
            m.Adapter.bind(a, "unload", m.clearAllIntervals), m.saveState(m.storeState(m.extractState(m.getLocationHref(), !0))), f && (m.onUnload = function() {
                var a, b, c;
                try {
                    a = k.parse(f.getItem("History.store")) || {}
                } catch (b) {
                    a = {}
                }
                a.idToState = a.idToState || {}, a.urlToId = a.urlToId || {}, a.stateToId = a.stateToId || {};
                for (b in m.idToState) m.idToState.hasOwnProperty(b) && (a.idToState[b] = m.idToState[b]);
                for (b in m.urlToId) m.urlToId.hasOwnProperty(b) && (a.urlToId[b] = m.urlToId[b]);
                for (b in m.stateToId) m.stateToId.hasOwnProperty(b) && (a.stateToId[b] = m.stateToId[b]);
                m.store = a, m.normalizeStore(), c = k.stringify(a);
                try {
                    f.setItem("History.store", c)
                } catch (a) {
                    if (a.code !== DOMException.QUOTA_EXCEEDED_ERR) throw a;
                    f.length && (f.removeItem("History.store"), f.setItem("History.store", c))
                }
            }, m.intervalList.push(i(m.onUnload, m.options.storeInterval)), m.Adapter.bind(a, "beforeunload", m.onUnload), m.Adapter.bind(a, "unload", m.onUnload)), m.emulated.pushState || (m.bugs.safariPoll && m.intervalList.push(i(m.safariStatePoll, m.options.safariPollInterval)), "Apple Computer, Inc." !== e.vendor && "Mozilla" !== (e.appCodeName || "") || (m.Adapter.bind(a, "hashchange", function() {
                m.Adapter.trigger(a, "popstate")
            }), m.getHash() && m.Adapter.onDomLoad(function() {
                m.Adapter.trigger(a, "hashchange")
            })))
        }, (!m.options || !m.options.delayInit) && m.init()
    }(window),
    function(a, b) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", b) : "object" == typeof module && module.exports ? module.exports = b() : a.EvEmitter = b()
    }("undefined" != typeof window ? window : this, function() {
        function a() {}
        var b = a.prototype;
        return b.on = function(a, b) {
            if (a && b) {
                var c = this._events = this._events || {},
                    d = c[a] = c[a] || [];
                return -1 == d.indexOf(b) && d.push(b), this
            }
        }, b.once = function(a, b) {
            if (a && b) {
                this.on(a, b);
                var c = this._onceEvents = this._onceEvents || {};
                return (c[a] = c[a] || {})[b] = !0, this
            }
        }, b.off = function(a, b) {
            var c = this._events && this._events[a];
            if (c && c.length) {
                var d = c.indexOf(b);
                return -1 != d && c.splice(d, 1), this
            }
        }, b.emitEvent = function(a, b) {
            var c = this._events && this._events[a];
            if (c && c.length) {
                var d = 0,
                    e = c[d];
                b = b || [];
                for (var f = this._onceEvents && this._onceEvents[a]; e;) {
                    var g = f && f[e];
                    g && (this.off(a, e), delete f[e]), e.apply(this, b), d += g ? 0 : 1, e = c[d]
                }
                return this
            }
        }, a
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(c) {
            return b(a, c)
        }) : "object" == typeof module && module.exports ? module.exports = b(a, require("ev-emitter")) : a.imagesLoaded = b(a, a.EvEmitter)
    }(window, function(a, b) {
        function c(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function d(a) {
            var b = [];
            if (Array.isArray(a)) b = a;
            else if ("number" == typeof a.length)
                for (var c = 0; c < a.length; c++) b.push(a[c]);
            else b.push(a);
            return b
        }

        function e(a, b, f) {
            return this instanceof e ? ("string" == typeof a && (a = document.querySelectorAll(a)), this.elements = d(a), this.options = c({}, this.options), "function" == typeof b ? f = b : c(this.options, b), f && this.on("always", f), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(function() {
                this.check()
            }.bind(this))) : new e(a, b, f)
        }

        function f(a) {
            this.img = a
        }

        function g(a, b) {
            this.url = a, this.element = b, this.img = new Image
        }
        var h = a.jQuery,
            i = a.console;
        e.prototype = Object.create(b.prototype), e.prototype.options = {}, e.prototype.getImages = function() {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, e.prototype.addElementImages = function(a) {
            "IMG" == a.nodeName && this.addImage(a), !0 === this.options.background && this.addElementBackgroundImages(a);
            var b = a.nodeType;
            if (b && j[b]) {
                for (var c = a.querySelectorAll("img"), d = 0; d < c.length; d++) {
                    var e = c[d];
                    this.addImage(e)
                }
                if ("string" == typeof this.options.background) {
                    var f = a.querySelectorAll(this.options.background);
                    for (d = 0; d < f.length; d++) {
                        var g = f[d];
                        this.addElementBackgroundImages(g)
                    }
                }
            }
        };
        var j = {
            1: !0,
            9: !0,
            11: !0
        };
        return e.prototype.addElementBackgroundImages = function(a) {
            var b = getComputedStyle(a);
            if (b)
                for (var c = /url\((['"])?(.*?)\1\)/gi, d = c.exec(b.backgroundImage); null !== d;) {
                    var e = d && d[2];
                    e && this.addBackground(e, a), d = c.exec(b.backgroundImage)
                }
        }, e.prototype.addImage = function(a) {
            var b = new f(a);
            this.images.push(b)
        }, e.prototype.addBackground = function(a, b) {
            var c = new g(a, b);
            this.images.push(c)
        }, e.prototype.check = function() {
            function a(a, c, d) {
                setTimeout(function() {
                    b.progress(a, c, d)
                })
            }
            var b = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(b) {
                b.once("progress", a), b.check()
            }) : void this.complete()
        }, e.prototype.progress = function(a, b, c) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded, this.emitEvent("progress", [this, a, b]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, a), this.progressedCount == this.images.length && this.complete(), this.options.debug && i && i.log("progress: " + c, a, b)
        }, e.prototype.complete = function() {
            var a = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(a, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var b = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[b](this)
            }
        }, f.prototype = Object.create(b.prototype), f.prototype.check = function() {
            return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
        }, f.prototype.getIsImageComplete = function() {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, f.prototype.confirm = function(a, b) {
            this.isLoaded = a, this.emitEvent("progress", [this, this.img, b])
        }, f.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, f.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, f.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, f.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, g.prototype = Object.create(f.prototype), g.prototype.check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, g.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, g.prototype.confirm = function(a, b) {
            this.isLoaded = a, this.emitEvent("progress", [this, this.element, b])
        }, e.makeJQueryPlugin = function(b) {
            (b = b || a.jQuery) && (h = b, h.fn.imagesLoaded = function(a, b) {
                return new e(this, a, b).jqDeferred.promise(h(this))
            })
        }, e.makeJQueryPlugin(), e
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(c) {
            return b(a, c)
        }) : "object" == typeof module && module.exports ? module.exports = b(a, require("jquery")) : a.jQueryBridget = b(a, a.jQuery)
    }(window, function(a, b) {
        "use strict";

        function c(c, f, h) {
            function i(a, b, d) {
                var e, f = "$()." + c + '("' + b + '")';
                return a.each(function(a, i) {
                    var j = h.data(i, c);
                    if (!j) return void g(c + " not initialized. Cannot call methods, i.e. " + f);
                    var k = j[b];
                    if (!k || "_" == b.charAt(0)) return void g(f + " is not a valid method");
                    var l = k.apply(j, d);
                    e = void 0 === e ? l : e
                }), void 0 !== e ? e : a
            }

            function j(a, b) {
                a.each(function(a, d) {
                    var e = h.data(d, c);
                    e ? (e.option(b), e._init()) : (e = new f(d, b), h.data(d, c, e))
                })
            }(h = h || b || a.jQuery) && (f.prototype.option || (f.prototype.option = function(a) {
                h.isPlainObject(a) && (this.options = h.extend(!0, this.options, a))
            }), h.fn[c] = function(a) {
                if ("string" == typeof a) {
                    return i(this, a, e.call(arguments, 1))
                }
                return j(this, a), this
            }, d(h))
        }

        function d(a) {
            !a || a && a.bridget || (a.bridget = c)
        }
        var e = Array.prototype.slice,
            f = a.console,
            g = void 0 === f ? function() {} : function(a) {
                f.error(a)
            };
        return d(b || a.jQuery), c
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", b) : "object" == typeof module && module.exports ? module.exports = b() : a.EvEmitter = b()
    }("undefined" != typeof window ? window : this, function() {
        function a() {}
        var b = a.prototype;
        return b.on = function(a, b) {
            if (a && b) {
                var c = this._events = this._events || {},
                    d = c[a] = c[a] || [];
                return -1 == d.indexOf(b) && d.push(b), this
            }
        }, b.once = function(a, b) {
            if (a && b) {
                this.on(a, b);
                var c = this._onceEvents = this._onceEvents || {};
                return (c[a] = c[a] || {})[b] = !0, this
            }
        }, b.off = function(a, b) {
            var c = this._events && this._events[a];
            if (c && c.length) {
                var d = c.indexOf(b);
                return -1 != d && c.splice(d, 1), this
            }
        }, b.emitEvent = function(a, b) {
            var c = this._events && this._events[a];
            if (c && c.length) {
                var d = 0,
                    e = c[d];
                b = b || [];
                for (var f = this._onceEvents && this._onceEvents[a]; e;) {
                    var g = f && f[e];
                    g && (this.off(a, e), delete f[e]), e.apply(this, b), d += g ? 0 : 1, e = c[d]
                }
                return this
            }
        }, a
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
            return b()
        }) : "object" == typeof module && module.exports ? module.exports = b() : a.getSize = b()
    }(window, function() {
        "use strict";

        function a(a) {
            var b = parseFloat(a);
            return -1 == a.indexOf("%") && !isNaN(b) && b
        }

        function b() {}

        function c() {
            for (var a = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, b = 0; j > b; b++) {
                a[i[b]] = 0
            }
            return a
        }

        function d(a) {
            var b = getComputedStyle(a);
            return b || h("Style returned " + b + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), b
        }

        function e() {
            if (!k) {
                k = !0;
                var b = document.createElement("div");
                b.style.width = "200px", b.style.padding = "1px 2px 3px 4px", b.style.borderStyle = "solid", b.style.borderWidth = "1px 2px 3px 4px", b.style.boxSizing = "border-box";
                var c = document.body || document.documentElement;
                c.appendChild(b);
                var e = d(b);
                f.isBoxSizeOuter = g = 200 == a(e.width), c.removeChild(b)
            }
        }

        function f(b) {
            if (e(), "string" == typeof b && (b = document.querySelector(b)), b && "object" == typeof b && b.nodeType) {
                var f = d(b);
                if ("none" == f.display) return c();
                var h = {};
                h.width = b.offsetWidth, h.height = b.offsetHeight;
                for (var k = h.isBorderBox = "border-box" == f.boxSizing, l = 0; j > l; l++) {
                    var m = i[l],
                        n = f[m],
                        o = parseFloat(n);
                    h[m] = isNaN(o) ? 0 : o
                }
                var p = h.paddingLeft + h.paddingRight,
                    q = h.paddingTop + h.paddingBottom,
                    r = h.marginLeft + h.marginRight,
                    s = h.marginTop + h.marginBottom,
                    t = h.borderLeftWidth + h.borderRightWidth,
                    u = h.borderTopWidth + h.borderBottomWidth,
                    v = k && g,
                    w = a(f.width);
                !1 !== w && (h.width = w + (v ? 0 : p + t));
                var x = a(f.height);
                return !1 !== x && (h.height = x + (v ? 0 : q + u)), h.innerWidth = h.width - (p + t), h.innerHeight = h.height - (q + u), h.outerWidth = h.width + r, h.outerHeight = h.height + s, h
            }
        }
        var g, h = "undefined" == typeof console ? b : function(a) {
                console.error(a)
            },
            i = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            j = i.length,
            k = !1;
        return f
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", b) : "object" == typeof module && module.exports ? module.exports = b() : a.matchesSelector = b()
    }(window, function() {
        "use strict";
        var a = function() {
            var a = Element.prototype;
            if (a.matches) return "matches";
            if (a.matchesSelector) return "matchesSelector";
            for (var b = ["webkit", "moz", "ms", "o"], c = 0; c < b.length; c++) {
                var d = b[c],
                    e = d + "MatchesSelector";
                if (a[e]) return e
            }
        }();
        return function(b, c) {
            return b[a](c)
        }
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(c) {
            return b(a, c)
        }) : "object" == typeof module && module.exports ? module.exports = b(a, require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.matchesSelector)
    }(window, function(a, b) {
        var c = {};
        c.extend = function(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }, c.modulo = function(a, b) {
            return (a % b + b) % b
        }, c.makeArray = function(a) {
            var b = [];
            if (Array.isArray(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var c = 0; c < a.length; c++) b.push(a[c]);
            else b.push(a);
            return b
        }, c.removeFrom = function(a, b) {
            var c = a.indexOf(b); - 1 != c && a.splice(c, 1)
        }, c.getParent = function(a, c) {
            for (; a != document.body;)
                if (a = a.parentNode, b(a, c)) return a
        }, c.getQueryElement = function(a) {
            return "string" == typeof a ? document.querySelector(a) : a
        }, c.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, c.filterFindElements = function(a, d) {
            a = c.makeArray(a);
            var e = [];
            return a.forEach(function(a) {
                if (a instanceof HTMLElement) {
                    if (!d) return void e.push(a);
                    b(a, d) && e.push(a);
                    for (var c = a.querySelectorAll(d), f = 0; f < c.length; f++) e.push(c[f])
                }
            }), e
        }, c.debounceMethod = function(a, b, c) {
            var d = a.prototype[b],
                e = b + "Timeout";
            a.prototype[b] = function() {
                var a = this[e];
                a && clearTimeout(a);
                var b = arguments,
                    f = this;
                this[e] = setTimeout(function() {
                    d.apply(f, b), delete f[e]
                }, c || 100)
            }
        }, c.docReady = function(a) {
            var b = document.readyState;
            "complete" == b || "interactive" == b ? a() : document.addEventListener("DOMContentLoaded", a)
        }, c.toDashed = function(a) {
            return a.replace(/(.)([A-Z])/g, function(a, b, c) {
                return b + "-" + c
            }).toLowerCase()
        };
        var d = a.console;
        return c.htmlInit = function(b, e) {
            c.docReady(function() {
                var f = c.toDashed(e),
                    g = "data-" + f,
                    h = document.querySelectorAll("[" + g + "]"),
                    i = document.querySelectorAll(".js-" + f),
                    j = c.makeArray(h).concat(c.makeArray(i)),
                    k = g + "-options",
                    l = a.jQuery;
                j.forEach(function(a) {
                    var c, f = a.getAttribute(g) || a.getAttribute(k);
                    try {
                        c = f && JSON.parse(f)
                    } catch (b) {
                        return void(d && d.error("Error parsing " + g + " on " + a.className + ": " + b))
                    }
                    var h = new b(a, c);
                    l && l.data(a, e, h)
                })
            })
        }, c
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], b) : "object" == typeof module && module.exports ? module.exports = b(require("ev-emitter"), require("get-size")) : (a.Outlayer = {}, a.Outlayer.Item = b(a.EvEmitter, a.getSize))
    }(window, function(a, b) {
        "use strict";

        function c(a) {
            for (var b in a) return !1;
            return null, !0
        }

        function d(a, b) {
            a && (this.element = a, this.layout = b, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var e = document.documentElement.style,
            f = "string" == typeof e.transition ? "transition" : "WebkitTransition",
            g = "string" == typeof e.transform ? "transform" : "WebkitTransform",
            h = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[f],
            i = {
                transform: g,
                transition: f,
                transitionDuration: f + "Duration",
                transitionProperty: f + "Property",
                transitionDelay: f + "Delay"
            },
            j = d.prototype = Object.create(a.prototype);
        j.constructor = d, j._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, j.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, j.getSize = function() {
            this.size = b(this.element)
        }, j.css = function(a) {
            var b = this.element.style;
            for (var c in a) {
                b[i[c] || c] = a[c]
            }
        }, j.getPosition = function() {
            var a = getComputedStyle(this.element),
                b = this.layout._getOption("originLeft"),
                c = this.layout._getOption("originTop"),
                d = a[b ? "left" : "right"],
                e = a[c ? "top" : "bottom"],
                f = this.layout.size,
                g = -1 != d.indexOf("%") ? parseFloat(d) / 100 * f.width : parseInt(d, 10),
                h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * f.height : parseInt(e, 10);
            g = isNaN(g) ? 0 : g, h = isNaN(h) ? 0 : h, g -= b ? f.paddingLeft : f.paddingRight, h -= c ? f.paddingTop : f.paddingBottom, this.position.x = g, this.position.y = h
        }, j.layoutPosition = function() {
            var a = this.layout.size,
                b = {},
                c = this.layout._getOption("originLeft"),
                d = this.layout._getOption("originTop"),
                e = c ? "paddingLeft" : "paddingRight",
                f = c ? "left" : "right",
                g = c ? "right" : "left",
                h = this.position.x + a[e];
            b[f] = this.getXValue(h), b[g] = "";
            var i = d ? "paddingTop" : "paddingBottom",
                j = d ? "top" : "bottom",
                k = d ? "bottom" : "top",
                l = this.position.y + a[i];
            b[j] = this.getYValue(l), b[k] = "", this.css(b), this.emitEvent("layout", [this])
        }, j.getXValue = function(a) {
            var b = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !b ? a / this.layout.size.width * 100 + "%" : a + "px"
        }, j.getYValue = function(a) {
            var b = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && b ? a / this.layout.size.height * 100 + "%" : a + "px"
        }, j._transitionTo = function(a, b) {
            this.getPosition();
            var c = this.position.x,
                d = this.position.y,
                e = parseInt(a, 10),
                f = parseInt(b, 10),
                g = e === this.position.x && f === this.position.y;
            if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
            var h = a - c,
                i = b - d,
                j = {};
            j.transform = this.getTranslate(h, i), this.transition({
                to: j,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, j.getTranslate = function(a, b) {
            var c = this.layout._getOption("originLeft"),
                d = this.layout._getOption("originTop");
            return a = c ? a : -a, b = d ? b : -b, "translate3d(" + a + "px, " + b + "px, 0)"
        }, j.goTo = function(a, b) {
            this.setPosition(a, b), this.layoutPosition()
        }, j.moveTo = j._transitionTo, j.setPosition = function(a, b) {
            this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
        }, j._nonTransition = function(a) {
            this.css(a.to), a.isCleaning && this._removeStyles(a.to);
            for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
        }, j.transition = function(a) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
            var b = this._transn;
            for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
            for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
            if (a.from) {
                this.css(a.from);
                this.element.offsetHeight;
                null
            }
            this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
        };
        var k = "opacity," + function(a) {
            return a.replace(/([A-Z])/g, function(a) {
                return "-" + a.toLowerCase()
            })
        }(g);
        j.enableTransition = function() {
            if (!this.isTransitioning) {
                var a = this.layout.options.transitionDuration;
                a = "number" == typeof a ? a + "ms" : a, this.css({
                    transitionProperty: k,
                    transitionDuration: a,
                    transitionDelay: this.staggerDelay || 0
                }), this.element.addEventListener(h, this, !1)
            }
        }, j.onwebkitTransitionEnd = function(a) {
            this.ontransitionend(a)
        }, j.onotransitionend = function(a) {
            this.ontransitionend(a)
        };
        var l = {
            "-webkit-transform": "transform"
        };
        j.ontransitionend = function(a) {
            if (a.target === this.element) {
                var b = this._transn,
                    d = l[a.propertyName] || a.propertyName;
                if (delete b.ingProperties[d], c(b.ingProperties) && this.disableTransition(), d in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[d]), d in b.onEnd) {
                    b.onEnd[d].call(this), delete b.onEnd[d]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, j.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1
        }, j._removeStyles = function(a) {
            var b = {};
            for (var c in a) b[c] = "";
            this.css(b)
        };
        var m = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return j.removeTransitionStyles = function() {
            this.css(m)
        }, j.stagger = function(a) {
            a = isNaN(a) ? 0 : a, this.staggerDelay = a + "ms"
        }, j.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, j.remove = function() {
            return f && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
                this.removeElem()
            }), void this.hide()) : void this.removeElem()
        }, j.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {};
            b[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
                from: a.hiddenStyle,
                to: a.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, j.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, j.getHideRevealTransitionEndProperty = function(a) {
            var b = this.layout.options[a];
            if (b.opacity) return "opacity";
            for (var c in b) return c
        }, j.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {};
            b[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
                from: a.visibleStyle,
                to: a.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, j.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, j.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, d
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(c, d, e, f) {
            return b(a, c, d, e, f)
        }) : "object" == typeof module && module.exports ? module.exports = b(a, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.EvEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
    }(window, function(a, b, c, d, e) {
        "use strict";

        function f(a, b) {
            var c = d.getQueryElement(a);
            if (!c) return void(i && i.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
            this.element = c, j && (this.$element = j(this.element)), this.options = d.extend({}, this.constructor.defaults), this.option(b);
            var e = ++l;
            this.element.outlayerGUID = e, m[e] = this, this._create(), this._getOption("initLayout") && this.layout()
        }

        function g(a) {
            function b() {
                a.apply(this, arguments)
            }
            return b.prototype = Object.create(a.prototype), b.prototype.constructor = b, b
        }

        function h(a) {
            if ("number" == typeof a) return a;
            var b = a.match(/(^\d*\.?\d*)(\w*)/),
                c = b && b[1],
                d = b && b[2];
            return c.length ? (c = parseFloat(c)) * (o[d] || 1) : 0
        }
        var i = a.console,
            j = a.jQuery,
            k = function() {},
            l = 0,
            m = {};
        f.namespace = "outlayer", f.Item = e, f.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var n = f.prototype;
        d.extend(n, b.prototype), n.option = function(a) {
            d.extend(this.options, a)
        }, n._getOption = function(a) {
            var b = this.constructor.compatOptions[a];
            return b && void 0 !== this.options[b] ? this.options[b] : this.options[a]
        }, f.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, n._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp),
                d.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
        }, n.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, n._itemize = function(a) {
            for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0; e < b.length; e++) {
                var f = b[e],
                    g = new c(f, this);
                d.push(g)
            }
            return d
        }, n._filterFindItemElements = function(a) {
            return d.filterFindElements(a, this.options.itemSelector)
        }, n.getItemElements = function() {
            return this.items.map(function(a) {
                return a.element
            })
        }, n.layout = function() {
            this._resetLayout(), this._manageStamps();
            var a = this._getOption("layoutInstant"),
                b = void 0 !== a ? a : !this._isLayoutInited;
            this.layoutItems(this.items, b), this._isLayoutInited = !0
        }, n._init = n.layout, n._resetLayout = function() {
            this.getSize()
        }, n.getSize = function() {
            this.size = c(this.element)
        }, n._getMeasurement = function(a, b) {
            var d, e = this.options[a];
            e ? ("string" == typeof e ? d = this.element.querySelector(e) : e instanceof HTMLElement && (d = e), this[a] = d ? c(d)[b] : e) : this[a] = 0
        }, n.layoutItems = function(a, b) {
            a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
        }, n._getItemsForLayout = function(a) {
            return a.filter(function(a) {
                return !a.isIgnored
            })
        }, n._layoutItems = function(a, b) {
            if (this._emitCompleteOnItems("layout", a), a && a.length) {
                var c = [];
                a.forEach(function(a) {
                    var d = this._getItemLayoutPosition(a);
                    d.item = a, d.isInstant = b || a.isLayoutInstant, c.push(d)
                }, this), this._processLayoutQueue(c)
            }
        }, n._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, n._processLayoutQueue = function(a) {
            this.updateStagger(), a.forEach(function(a, b) {
                this._positionItem(a.item, a.x, a.y, a.isInstant, b)
            }, this)
        }, n.updateStagger = function() {
            var a = this.options.stagger;
            return null === a || void 0 === a ? void(this.stagger = 0) : (this.stagger = h(a), this.stagger)
        }, n._positionItem = function(a, b, c, d, e) {
            d ? a.goTo(b, c) : (a.stagger(e * this.stagger), a.moveTo(b, c))
        }, n._postLayout = function() {
            this.resizeContainer()
        }, n.resizeContainer = function() {
            if (this._getOption("resizeContainer")) {
                var a = this._getContainerSize();
                a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
            }
        }, n._getContainerSize = k, n._setContainerMeasure = function(a, b) {
            if (void 0 !== a) {
                var c = this.size;
                c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
            }
        }, n._emitCompleteOnItems = function(a, b) {
            function c() {
                e.dispatchEvent(a + "Complete", null, [b])
            }

            function d() {
                ++g == f && c()
            }
            var e = this,
                f = b.length;
            if (!b || !f) return void c();
            var g = 0;
            b.forEach(function(b) {
                b.once(a, d)
            })
        }, n.dispatchEvent = function(a, b, c) {
            var d = b ? [b].concat(c) : c;
            if (this.emitEvent(a, d), j)
                if (this.$element = this.$element || j(this.element), b) {
                    var e = j.Event(b);
                    e.type = a, this.$element.trigger(e, c)
                } else this.$element.trigger(a, c)
        }, n.ignore = function(a) {
            var b = this.getItem(a);
            b && (b.isIgnored = !0)
        }, n.unignore = function(a) {
            var b = this.getItem(a);
            b && delete b.isIgnored
        }, n.stamp = function(a) {
            (a = this._find(a)) && (this.stamps = this.stamps.concat(a), a.forEach(this.ignore, this))
        }, n.unstamp = function(a) {
            (a = this._find(a)) && a.forEach(function(a) {
                d.removeFrom(this.stamps, a), this.unignore(a)
            }, this)
        }, n._find = function(a) {
            return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = d.makeArray(a)) : void 0
        }, n._manageStamps = function() {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, n._getBoundingRect = function() {
            var a = this.element.getBoundingClientRect(),
                b = this.size;
            this._boundingRect = {
                left: a.left + b.paddingLeft + b.borderLeftWidth,
                top: a.top + b.paddingTop + b.borderTopWidth,
                right: a.right - (b.paddingRight + b.borderRightWidth),
                bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
            }
        }, n._manageStamp = k, n._getElementOffset = function(a) {
            var b = a.getBoundingClientRect(),
                d = this._boundingRect,
                e = c(a);
            return {
                left: b.left - d.left - e.marginLeft,
                top: b.top - d.top - e.marginTop,
                right: d.right - b.right - e.marginRight,
                bottom: d.bottom - b.bottom - e.marginBottom
            }
        }, n.handleEvent = d.handleEvent, n.bindResize = function() {
            a.addEventListener("resize", this), this.isResizeBound = !0
        }, n.unbindResize = function() {
            a.removeEventListener("resize", this), this.isResizeBound = !1
        }, n.onresize = function() {
            this.resize()
        }, d.debounceMethod(f, "onresize", 100), n.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, n.needsResizeLayout = function() {
            var a = c(this.element);
            return this.size && a && a.innerWidth !== this.size.innerWidth
        }, n.addItems = function(a) {
            var b = this._itemize(a);
            return b.length && (this.items = this.items.concat(b)), b
        }, n.appended = function(a) {
            var b = this.addItems(a);
            b.length && (this.layoutItems(b, !0), this.reveal(b))
        }, n.prepended = function(a) {
            var b = this._itemize(a);
            if (b.length) {
                var c = this.items.slice(0);
                this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
            }
        }, n.reveal = function(a) {
            if (this._emitCompleteOnItems("reveal", a), a && a.length) {
                var b = this.updateStagger();
                a.forEach(function(a, c) {
                    a.stagger(c * b), a.reveal()
                })
            }
        }, n.hide = function(a) {
            if (this._emitCompleteOnItems("hide", a), a && a.length) {
                var b = this.updateStagger();
                a.forEach(function(a, c) {
                    a.stagger(c * b), a.hide()
                })
            }
        }, n.revealItemElements = function(a) {
            var b = this.getItems(a);
            this.reveal(b)
        }, n.hideItemElements = function(a) {
            var b = this.getItems(a);
            this.hide(b)
        }, n.getItem = function(a) {
            for (var b = 0; b < this.items.length; b++) {
                var c = this.items[b];
                if (c.element == a) return c
            }
        }, n.getItems = function(a) {
            a = d.makeArray(a);
            var b = [];
            return a.forEach(function(a) {
                var c = this.getItem(a);
                c && b.push(c)
            }, this), b
        }, n.remove = function(a) {
            var b = this.getItems(a);
            this._emitCompleteOnItems("remove", b), b && b.length && b.forEach(function(a) {
                a.remove(), d.removeFrom(this.items, a)
            }, this)
        }, n.destroy = function() {
            var a = this.element.style;
            a.height = "", a.position = "", a.width = "", this.items.forEach(function(a) {
                a.destroy()
            }), this.unbindResize();
            var b = this.element.outlayerGUID;
            delete m[b], delete this.element.outlayerGUID, j && j.removeData(this.element, this.constructor.namespace)
        }, f.data = function(a) {
            a = d.getQueryElement(a);
            var b = a && a.outlayerGUID;
            return b && m[b]
        }, f.create = function(a, b) {
            var c = g(f);
            return c.defaults = d.extend({}, f.defaults), d.extend(c.defaults, b), c.compatOptions = d.extend({}, f.compatOptions), c.namespace = a, c.data = f.data, c.Item = g(e), d.htmlInit(c, a), j && j.bridget && j.bridget(a, c), c
        };
        var o = {
            ms: 1,
            s: 1e3
        };
        return f.Item = e, f
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], b) : "object" == typeof module && module.exports ? module.exports = b(require("outlayer"), require("get-size")) : a.Masonry = b(a.Outlayer, a.getSize)
    }(window, function(a, b) {
        var c = a.create("masonry");
        return c.compatOptions.fitWidth = "isFitWidth", c.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var a = 0; a < this.cols; a++) this.colYs.push(0);
            this.maxY = 0
        }, c.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var a = this.items[0],
                    c = a && a.element;
                this.columnWidth = c && b(c).outerWidth || this.containerWidth
            }
            var d = this.columnWidth += this.gutter,
                e = this.containerWidth + this.gutter,
                f = e / d,
                g = d - e % d,
                h = g && 1 > g ? "round" : "floor";
            f = Math[h](f), this.cols = Math.max(f, 1)
        }, c.prototype.getContainerWidth = function() {
            var a = this._getOption("fitWidth"),
                c = a ? this.element.parentNode : this.element,
                d = b(c);
            this.containerWidth = d && d.innerWidth
        }, c.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = a.size.outerWidth % this.columnWidth,
                c = b && 1 > b ? "round" : "ceil",
                d = Math[c](a.size.outerWidth / this.columnWidth);
            d = Math.min(d, this.cols);
            for (var e = this._getColGroup(d), f = Math.min.apply(Math, e), g = e.indexOf(f), h = {
                    x: this.columnWidth * g,
                    y: f
                }, i = f + a.size.outerHeight, j = this.cols + 1 - e.length, k = 0; j > k; k++) this.colYs[g + k] = i;
            return h
        }, c.prototype._getColGroup = function(a) {
            if (2 > a) return this.colYs;
            for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                var e = this.colYs.slice(d, d + a);
                b[d] = Math.max.apply(Math, e)
            }
            return b
        }, c.prototype._manageStamp = function(a) {
            var c = b(a),
                d = this._getElementOffset(a),
                e = this._getOption("originLeft"),
                f = e ? d.left : d.right,
                g = f + c.outerWidth,
                h = Math.floor(f / this.columnWidth);
            h = Math.max(0, h);
            var i = Math.floor(g / this.columnWidth);
            i -= g % this.columnWidth ? 0 : 1, i = Math.min(this.cols - 1, i);
            for (var j = this._getOption("originTop"), k = (j ? d.top : d.bottom) + c.outerHeight, l = h; i >= l; l++) this.colYs[l] = Math.max(k, this.colYs[l])
        }, c.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var a = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (a.width = this._getContainerFitWidth()), a
        }, c.prototype._getContainerFitWidth = function() {
            for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
            return (this.cols - a) * this.columnWidth - this.gutter
        }, c.prototype.needsResizeLayout = function() {
            var a = this.containerWidth;
            return this.getContainerWidth(), a != this.containerWidth
        }, c
    }),
    function(a) {
        "use strict";
        a.fn.fitVids = function(b) {
            var c = {
                customSelector: null,
                ignore: null
            };
            if (!document.getElementById("fit-vids-style")) {
                var d = document.head || document.getElementsByTagName("head")[0],
                    e = document.createElement("div");
                e.innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>', d.appendChild(e.childNodes[1])
            }
            return b && a.extend(c, b), this.each(function() {
                var b = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
                c.customSelector && b.push(c.customSelector);
                var d = ".fitvidsignore";
                c.ignore && (d = d + ", " + c.ignore);
                var e = a(this).find(b.join(","));
                e = e.not("object object"), e = e.not(d), e.each(function() {
                    var b = a(this);
                    if (!(b.parents(d).length > 0 || "embed" === this.tagName.toLowerCase() && b.parent("object").length || b.parent(".fluid-width-video-wrapper").length)) {
                        b.css("height") || b.css("width") || !isNaN(b.attr("height")) && !isNaN(b.attr("width")) || (b.attr("height", 9), b.attr("width", 16));
                        var c = "object" === this.tagName.toLowerCase() || b.attr("height") && !isNaN(parseInt(b.attr("height"), 10)) ? parseInt(b.attr("height"), 10) : b.height(),
                            e = isNaN(parseInt(b.attr("width"), 10)) ? b.width() : parseInt(b.attr("width"), 10),
                            f = c / e;
                        if (!b.attr("name")) {
                            var g = "fitvid" + a.fn.fitVids._count;
                            b.attr("name", g), a.fn.fitVids._count++
                        }
                        b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * f + "%"), b.removeAttr("height").removeAttr("width")
                    }
                })
            })
        }, a.fn.fitVids._count = 0
    }(window.jQuery || window.Zepto),
    function(a, b) {
        "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.NProgress = b()
    }(this, function() {
        function a(a, b, c) {
            return a < b ? b : a > c ? c : a
        }

        function b(a) {
            return 100 * (-1 + a)
        }

        function c(a, c, d) {
            var e;
            return e = "translate3d" === j.positionUsing ? {
                transform: "translate3d(" + b(a) + "%,0,0)"
            } : "translate" === j.positionUsing ? {
                transform: "translate(" + b(a) + "%,0)"
            } : {
                "margin-left": b(a) + "%"
            }, e.transition = "all " + c + "ms " + d, e
        }

        function d(a, b) {
            return ("string" == typeof a ? a : g(a)).indexOf(" " + b + " ") >= 0
        }

        function e(a, b) {
            var c = g(a),
                e = c + b;
            d(c, b) || (a.className = e.substring(1))
        }

        function f(a, b) {
            var c, e = g(a);
            d(a, b) && (c = e.replace(" " + b + " ", " "), a.className = c.substring(1, c.length - 1))
        }

        function g(a) {
            return (" " + (a.className || "") + " ").replace(/\s+/gi, " ")
        }

        function h(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        }
        var i = {};
        i.version = "0.2.0";
        var j = i.settings = {
            minimum: .08,
            easing: "ease",
            positionUsing: "",
            speed: 200,
            trickle: !0,
            trickleRate: .02,
            trickleSpeed: 800,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: "body",
            template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        };
        i.configure = function(a) {
                var b, c;
                for (b in a) void 0 !== (c = a[b]) && a.hasOwnProperty(b) && (j[b] = c);
                return this
            }, i.status = null, i.set = function(b) {
                var d = i.isStarted();
                b = a(b, j.minimum, 1), i.status = 1 === b ? null : b;
                var e = i.render(!d),
                    f = e.querySelector(j.barSelector),
                    g = j.speed,
                    h = j.easing;
                return e.offsetWidth, k(function(a) {
                    "" === j.positionUsing && (j.positionUsing = i.getPositioningCSS()), l(f, c(b, g, h)), 1 === b ? (l(e, {
                        transition: "none",
                        opacity: 1
                    }), e.offsetWidth, setTimeout(function() {
                        l(e, {
                            transition: "all " + g + "ms linear",
                            opacity: 0
                        }), setTimeout(function() {
                            i.remove(), a()
                        }, g)
                    }, g)) : setTimeout(a, g)
                }), this
            }, i.isStarted = function() {
                return "number" == typeof i.status
            }, i.start = function() {
                i.status || i.set(0);
                var a = function() {
                    setTimeout(function() {
                        i.status && (i.trickle(), a())
                    }, j.trickleSpeed)
                };
                return j.trickle && a(), this
            }, i.done = function(a) {
                return a || i.status ? i.inc(.3 + .5 * Math.random()).set(1) : this
            }, i.inc = function(b) {
                var c = i.status;
                return c ? ("number" != typeof b && (b = (1 - c) * a(Math.random() * c, .1, .95)), c = a(c + b, 0, .994), i.set(c)) : i.start()
            }, i.trickle = function() {
                return i.inc(Math.random() * j.trickleRate)
            },
            function() {
                var a = 0,
                    b = 0;
                i.promise = function(c) {
                    return c && "resolved" !== c.state() ? (0 === b && i.start(), a++, b++, c.always(function() {
                        b--, 0 === b ? (a = 0, i.done()) : i.set((a - b) / a)
                    }), this) : this
                }
            }(), i.render = function(a) {
                if (i.isRendered()) return document.getElementById("nprogress");
                e(document.documentElement, "nprogress-busy");
                var c = document.createElement("div");
                c.id = "nprogress", c.innerHTML = j.template;
                var d, f = c.querySelector(j.barSelector),
                    g = a ? "-100" : b(i.status || 0),
                    k = document.querySelector(j.parent);
                return l(f, {
                    transition: "all 0 linear",
                    transform: "translate3d(" + g + "%,0,0)"
                }), j.showSpinner || (d = c.querySelector(j.spinnerSelector)) && h(d), k != document.body && e(k, "nprogress-custom-parent"), k.appendChild(c), c
            }, i.remove = function() {
                f(document.documentElement, "nprogress-busy"), f(document.querySelector(j.parent), "nprogress-custom-parent");
                var a = document.getElementById("nprogress");
                a && h(a)
            }, i.isRendered = function() {
                return !!document.getElementById("nprogress")
            }, i.getPositioningCSS = function() {
                var a = document.body.style,
                    b = "WebkitTransform" in a ? "Webkit" : "MozTransform" in a ? "Moz" : "msTransform" in a ? "ms" : "OTransform" in a ? "O" : "";
                return b + "Perspective" in a ? "translate3d" : b + "Transform" in a ? "translate" : "margin"
            };
        var k = function() {
                function a() {
                    var c = b.shift();
                    c && c(a)
                }
                var b = [];
                return function(c) {
                    b.push(c), 1 == b.length && a()
                }
            }(),
            l = function() {
                function a(a) {
                    return a.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(a, b) {
                        return b.toUpperCase()
                    })
                }

                function b(a) {
                    var b = document.body.style;
                    if (a in b) return a;
                    for (var c, d = e.length, f = a.charAt(0).toUpperCase() + a.slice(1); d--;)
                        if ((c = e[d] + f) in b) return c;
                    return a
                }

                function c(c) {
                    return c = a(c), f[c] || (f[c] = b(c))
                }

                function d(a, b, d) {
                    b = c(b), a.style[b] = d
                }
                var e = ["Webkit", "O", "Moz", "ms"],
                    f = {};
                return function(a, b) {
                    var c, e, f = arguments;
                    if (2 == f.length)
                        for (c in b) void 0 !== (e = b[c]) && b.hasOwnProperty(c) && d(a, c, e);
                    else d(a, f[1], f[2])
                }
            }();
        return i
    }),
    function(a) {
        "use strict";

        function b(a) {
            var b, c, d = [];
            if ("number" == typeof a) d.push(a);
            else {
                c = a.split(",");
                for (var e = 0; e < c.length; e++)
                    if (b = c[e].split("-"), 2 === b.length)
                        for (var f = parseInt(b[0], 10); f <= b[1]; f++) d.push(f);
                    else 1 === b.length && d.push(parseInt(b[0], 10))
            }
            return d
        }
        var c = {};
        a.fn.gist = function(d) {
            return this.each(function() {
                function e(c) {
                    var d, e, f, g, h;
                    c && c.div ? (c.stylesheet && (0 === c.stylesheet.indexOf("<link") ? c.stylesheet = c.stylesheet.replace(/\\/g, "").match(/href=\"([^\s]*)\"/)[1] : 0 !== c.stylesheet.indexOf("http") && (0 !== c.stylesheet.indexOf("/") && (c.stylesheet = "/" + c.stylesheet), c.stylesheet = "https://gist.github.com" + c.stylesheet)), c.stylesheet && 0 === a('link[href="' + c.stylesheet + '"]').length && (d = document.createElement("link"), e = document.getElementsByTagName("head")[0], d.type = "text/css", d.rel = "stylesheet", d.href = c.stylesheet, e.insertBefore(d, e.firstChild)), h = a(c.div), h.removeAttr("id"), s.html("").append(h), m && (g = b(m), h.find("td.line-data").css({
                        width: "100%"
                    }), h.find(".js-file-line").each(function(b) {
                        -1 !== a.inArray(b + 1, g) && a(this).css({
                            "background-color": "rgb(255, 255, 204)"
                        })
                    })), k && (f = b(k), h.find(".js-file-line").each(function(b) {
                        -1 === a.inArray(b + 1, f) && a(this).parent().remove()
                    })), n && (h.find(".gist-meta").remove(), h.find(".gist-data").css("border-bottom", "0px"), h.find(".gist-file").css("border-bottom", "1px solid #ddd")), o && h.find(".js-line-number").remove()) : s.html("Failed loading gist " + i)
                }

                function f(a) {
                    s.html("Failed loading gist " + i + ": " + a)
                }

                function g() {
                    "function" == typeof d && d()
                }
                var h, i, j, k, l, m, n, o, p, q, r, s = a(this),
                    t = {};
                return s.css("display", "block"), h = s.data("gist-id") || "", j = s.data("gist-file"), n = !0 === s.data("gist-hide-footer"), o = !0 === s.data("gist-hide-line-numbers"), k = s.data("gist-line"), m = s.data("gist-highlight-line"), q = !0 === s.data("gist-show-spinner"), p = !q && (void 0 === s.data("gist-show-loading") || s.data("gist-show-loading")), j && (t.file = j), !!h && (i = "https://gist.github.com/" + h + ".json", r = !0 === s.data("gist-enable-cache") || c[i], l = "Loading gist " + i + (t.file ? ", file: " + t.file : "") + "...", p && s.html(l), q && s.html('<img style="display:block;margin-left:auto;margin-right:auto"  alt="' + l + '" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif">'), void a.ajax({
                    url: i,
                    data: t,
                    dataType: "jsonp",
                    timeout: 2e4,
                    beforeSend: function() {
                        if (r) {
                            if (c[i]) return c[i].then(function(a) {
                                e(a), g()
                            }, function(a) {
                                f(a)
                            }), !1;
                            c[i] = a.Deferred()
                        }
                    },
                    success: function(a) {
                        r && c[i] && c[i].resolve(a), e(a)
                    },
                    error: function(a, b) {
                        f(b)
                    },
                    complete: function() {
                        g()
                    }
                }))
            })
        }, a(function() {
            a("[data-gist-id]").gist()
        })
    }(jQuery);
jQuery(function(s) {
    var i = s("html"),
        o = s("body");
    o.on("click", '[data-action="menu"], [data-action="toc"]', function() {
        s(this).data("action");
        a(s('[data-target="' + s(this).data("target") + '"]').not("[data-action]"))
    });
    var t = !1;

    function a(a) {
        t ? (a.removeClass("active"), i.removeClass("menu-active"), setTimeout(function() {
            a.removeClass("initial"), i.removeClass("menu-initial")
        }, 300), t = !1) : (i.addClass("menu-initial"), a.addClass("initial"), setTimeout(function() {
            i.addClass("menu-active"), a.addClass("active")
        }, 1), t = !0)
    }

    function d() {
        s(".menu-list-item a").each(function() {
            var a = s(this);
            a.removeClass("current"), a.attr("href") == window.location.href && a.addClass("current")
        })
    }

    function c() {
        var a = s(".post-list .post .post-image img").length,
            e = 0;
        s(".post-list .post .post-image img").each(function() {
            var a = s(this),
                t = new Image;
            t.src = s(this).attr("src"), t.onload = function() {
                e++
            }, a.load(function() {
                a.parents(".post-image").css({
                    height: "0",
                    "padding-bottom": 100 / a.width() * a.height() + "%"
                })
            })
        });
        var t = window.setInterval(function() {
                a <= e && (window.clearInterval(t), n())
            }, 100),
            n = function() {
                var a = s(".post-list").masonry({
                    itemSelector: ".post",
                    isAnimated: !1,
                    gutter: 0,
                    columnWidth: 1,
                    transitionDuration: 0
                }).imagesLoaded().always(function() {
                    a.masonry("layout")
                })
            }
    }

    function r() {
        s("#wrapper").fitVids()
    }

    function l() {
        s("[data-gist-id]").gist()
    }

    function u() {
        s('a[href^="' + window.location.origin + '"], .post-image a, .post-title a, .post-more a, .post-meta a, .post-tags a, #pagination a').each(function() {
            var a = s(this);
            a.hasClass("rss") || (a.addClass("js-ajax-link"), -1 < a.attr("href").indexOf("page") && a.addClass("js-archive-index"), a.attr("href") == window.location.origin && a.addClass("js-show-index"), -1 < a.attr("href").indexOf("tag") && a.addClass("js-tag-index"), -1 < a.attr("href").indexOf("author") && a.addClass("js-author-index"))
        })
    }

    function m() {
        s(".blured-image").each(function() {
            var a = s(this),
                t = new Image;
            t.onload = function() {
                a.css("background-image", "url(" + t.src + ")").addClass("blurUp").removeClass("filter-blur-15")
            }, t.src = a.data("src")
        })
    }
    o.on("click", "#menu a", function() {
        i.hasClass("menu-active") && a(s('[data-target="menu"]').not("[data-action]"))
    }), o.on("click", "#tocMenu a", function() {
        i.hasClass("menu-active") && a(s('[data-target="toc"]').not("[data-action]"))
    }), o.on("click", ".overlay", function() {
        i.hasClass("menu-active") && a(s('[data-target="menu"].active,[data-target="toc"].active').not("[data-action]"))
    }), d(), c(), r(), l(), u(), m();
    var e = window.History,
        f = s("#ajax-container");
    if (s(document).ready(function() {
            var a = document.createElement("link");
            a.href = config.baseUrl + "css/main.css", a.rel = "stylesheet", a.type = "text/css", a.media = "bogus", a.onload = function() {
                a.media = "all"
            }, document.getElementsByTagName("head")[0].appendChild(a), s("#loader-wrapper").fadeOut(300), s("#wrapper").fadeIn(800)
        }), !e.enabled) return !1;
    e.Adapter.bind(window, "statechange", function() {
        i.addClass("loading");
        var a = e.getState();
        s.get(a.url, function(a) {
            var t = s(a),
                e = s("#ajax-container", t).contents(),
                n = a.match(/<title>(.*?)<\/title>/)[1];
            f.fadeOut(500, function() {
                i.hasClass("push-next") && (i.removeClass("push-next"), i.addClass("pushed-next")), i.hasClass("push-prev") && (i.removeClass("push-prev"), i.addClass("pushed-prev")), document.title = s("<textarea/>").html(n).text(), f.html(e), o.removeClass(), o.addClass(s("#body-class").attr("class")), NProgress.done(), f.fadeIn(500), s(document).scrollTop(0), setTimeout(function() {
                    i.removeClass("loading")
                }, 50), c(), u(), r(), l(), d(), m(), !1
            })
        })
    }), s("body").on("click", ".js-ajax-link", function(a) {}), s("body").on("click", "#post-index .post .js-ajax-link", function() {
        var a = s(this).parents(".post");
        a.addClass("initial"), setTimeout(function() {
            a.addClass("active")
        }, 1)
    })
});