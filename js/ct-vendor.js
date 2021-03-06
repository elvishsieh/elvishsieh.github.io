! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    var t = [],
        k = C.document,
        c = t.slice,
        g = t.concat,
        a = t.push,
        i = t.indexOf,
        n = {},
        r = n.toString,
        h = n.hasOwnProperty,
        v = {},
        o = "2.2.4",
        E = function(e, t) {
            return new E.fn.init(e, t)
        },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        u = /^-ms-/,
        l = /-([\da-z])/gi,
        f = function(e, t) {
            return t.toUpperCase()
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = E.type(e);
        return "function" !== n && !E.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    E.fn = E.prototype = {
        jquery: o,
        constructor: E,
        selector: "",
        length: 0,
        toArray: function() {
            return c.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
        },
        pushStack: function(e) {
            var t = E.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return E.each(this, e)
        },
        map: function(n) {
            return this.pushStack(E.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(c.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: t.sort,
        splice: t.splice
    }, E.extend = E.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || E.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], s !== (r = e[t]) && (l && r && (E.isPlainObject(r) || (i = E.isArray(r))) ? (i ? (i = !1, o = n && E.isArray(n) ? n : []) : o = n && E.isPlainObject(n) ? n : {}, s[t] = E.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, E.extend({
        expando: "jQuery" + (o + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === E.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !E.isArray(e) && 0 <= t - parseFloat(t) + 1
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== E.type(e) || e.nodeType || E.isWindow(e)) return !1;
            if (e.constructor && !h.call(e, "constructor") && !h.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e);
            return void 0 === t || h.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[r.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = E.trim(e)) && (1 === e.indexOf("use strict") ? ((t = k.createElement("script")).text = e, k.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(u, "ms-").replace(l, f)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(s, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) !== s && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                s = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return g.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), E.isFunction(e) ? (r = c.call(arguments, 2), (i = function() {
                return e.apply(t || this, r.concat(c.call(arguments)))
            }).guid = e.guid = e.guid || E.guid++, i) : void 0
        },
        now: Date.now,
        support: v
    }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, h, b, o, i, g, f, v, w, u, l, T, C, s, k, m, a, c, y, E = "sizzle" + 1 * new Date,
            x = n.document,
            N = 0,
            r = 0,
            p = ie(),
            d = ie(),
            S = ie(),
            j = function(e, t) {
                return e === t && (l = !0), 0
            },
            D = {}.hasOwnProperty,
            t = [],
            A = t.pop,
            q = t.push,
            L = t.push,
            H = t.slice,
            O = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            M = "\\[" + P + "*(" + R + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + P + "*\\]",
            I = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            W = new RegExp(P + "+", "g"),
            $ = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            B = new RegExp("^" + P + "*," + P + "*"),
            _ = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            X = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
            z = new RegExp(I),
            U = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + I),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + F + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = /'|\\/g,
            ee = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
            te = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            ne = function() {
                T()
            };
        try {
            L.apply(t = H.call(x.childNodes), x.childNodes), t[x.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: t.length ? function(e, t) {
                    q.apply(e, H.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function re(e, t, n, r) {
            var i, o, s, a, u, l, c, f, p = t && t.ownerDocument,
                d = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!r && ((t ? t.ownerDocument || t : x) !== C && T(t), t = t || C, k)) {
                if (11 !== d && (l = J.exec(e)))
                    if (i = l[1]) {
                        if (9 === d) {
                            if (!(s = t.getElementById(i))) return n;
                            if (s.id === i) return n.push(s), n
                        } else if (p && (s = p.getElementById(i)) && y(t, s) && s.id === i) return n.push(s), n
                    } else {
                        if (l[2]) return L.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = l[3]) && h.getElementsByClassName && t.getElementsByClassName) return L.apply(n, t.getElementsByClassName(i)), n
                    }
                if (h.qsa && !S[e + " "] && (!m || !m.test(e))) {
                    if (1 !== d) p = t, f = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(Z, "\\$&") : t.setAttribute("id", a = E), o = (c = g(e)).length, u = U.test(a) ? "#" + a : "[id='" + a + "']"; o--;) c[o] = u + " " + he(c[o]);
                        f = c.join(","), p = K.test(e) && pe(t.parentNode) || t
                    }
                    if (f) try {
                        return L.apply(n, p.querySelectorAll(f)), n
                    } catch (e) {} finally {
                        a === E && t.removeAttribute("id")
                    }
                }
            }
            return v(e.replace($, "$1"), t, n, r)
        }

        function ie() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function oe(e) {
            return e[E] = !0, e
        }

        function se(e) {
            var t = C.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ae(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
        }

        function ue(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function le(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function ce(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function fe(s) {
            return oe(function(o) {
                return o = +o, oe(function(e, t) {
                    for (var n, r = s([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function pe(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in h = re.support = {}, i = re.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, T = re.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : x;
                return r !== C && 9 === r.nodeType && r.documentElement && (s = (C = r).documentElement, k = !i(C), (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ne, !1) : n.attachEvent && n.attachEvent("onunload", ne)), h.attributes = se(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), h.getElementsByTagName = se(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), h.getElementsByClassName = Q.test(C.getElementsByClassName), h.getById = se(function(e) {
                    return s.appendChild(e).id = E, !C.getElementsByName || !C.getElementsByName(E).length
                }), h.getById ? (b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && k) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, b.filter.ID = function(e) {
                    var t = e.replace(ee, te);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete b.find.ID, b.filter.ID = function(e) {
                    var n = e.replace(ee, te);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }), b.find.TAG = h.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = h.getElementsByClassName && function(e, t) {
                    return void 0 !== t.getElementsByClassName && k ? t.getElementsByClassName(e) : void 0
                }, a = [], m = [], (h.qsa = Q.test(C.querySelectorAll)) && (se(function(e) {
                    s.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + F + ")"), e.querySelectorAll("[id~=" + E + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + E + "+*").length || m.push(".#.+[+~]")
                }), se(function(e) {
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (h.matchesSelector = Q.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && se(function(e) {
                    h.disconnectedMatch = c.call(e, "div"), c.call(e, "[s!='']:x"), a.push("!=", I)
                }), m = m.length && new RegExp(m.join("|")), a = a.length && new RegExp(a.join("|")), t = Q.test(s.compareDocumentPosition), y = t || Q.test(s.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, j = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === x && y(x, e) ? -1 : t === C || t.ownerDocument === x && y(x, t) ? 1 : u ? O(u, e) - O(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? O(u, e) - O(u, t) : 0;
                    if (i === o) return ue(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[r] === a[r];) r++;
                    return r ? ue(s[r], a[r]) : s[r] === x ? -1 : a[r] === x ? 1 : 0
                }), C
            }, re.matches = function(e, t) {
                return re(e, null, null, t)
            }, re.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && T(e), t = t.replace(X, "='$1']"), h.matchesSelector && k && !S[t + " "] && (!a || !a.test(t)) && (!m || !m.test(t))) try {
                    var n = c.call(e, t);
                    if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < re(t, C, null, [e]).length
            }, re.contains = function(e, t) {
                return (e.ownerDocument || e) !== C && T(e), y(e, t)
            }, re.attr = function(e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !k) : void 0;
                return void 0 !== r ? r : h.attributes || !k ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, re.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, re.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !h.detectDuplicates, u = !h.sortStable && e.slice(0), e.sort(j), l) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = re.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += o(t);
                return n
            }, (b = re.selectors = {
                cacheLength: 50,
                createPseudo: oe,
                match: V,
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
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ee, te), e[3] = (e[3] || e[4] || e[5] || "").replace(ee, te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = g(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ee, te).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = p[e + " "];
                        return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && p(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = re.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(W, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var m = "nth" !== h.slice(0, 3),
                            y = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, s, a, u, l = m !== y ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (m) {
                                    for (; l;) {
                                        for (s = e; s = s[l];)
                                            if (x ? s.nodeName.toLowerCase() === f : 1 === s.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [y ? c.firstChild : c.lastChild], y && p) {
                                    for (d = (a = (r = (i = (o = (s = c)[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === N && r[1]) && r[2], s = a && c.childNodes[a]; s = ++a && s && s[l] || (d = a = 0) || u.pop();)
                                        if (1 === s.nodeType && ++d && s === e) {
                                            i[h] = [N, a, d];
                                            break
                                        }
                                } else if (p && (d = a = (r = (i = (o = (s = e)[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === N && r[1]), !1 === d)
                                    for (;
                                        (s = ++a && s && s[l] || (d = a = 0) || u.pop()) && ((x ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++d || (p && ((i = (o = s[E] || (s[E] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] = [N, d]), s !== e)););
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                        return s[E] ? s(o) : 1 < s.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, t) {
                            for (var n, r = s(e, o), i = r.length; i--;) e[n = O(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: oe(function(e) {
                        var r = [],
                            i = [],
                            a = f(e.replace($, "$1"));
                        return a[E] ? oe(function(e, t, n, r) {
                            for (var i, o = a(e, null, r, []), s = e.length; s--;)(i = o[s]) && (e[s] = !(t[s] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, a(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: oe(function(t) {
                        return function(e) {
                            return 0 < re(t, e).length
                        }
                    }),
                    contains: oe(function(t) {
                        return t = t.replace(ee, te),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                            }
                    }),
                    lang: oe(function(n) {
                        return U.test(n || "") || re.error("unsupported lang: " + n), n = n.replace(ee, te).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = k ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === s
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return Y.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: fe(function() {
                        return [0]
                    }),
                    last: fe(function(e, t) {
                        return [t - 1]
                    }),
                    eq: fe(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: fe(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: fe(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: fe(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: fe(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = le(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = ce(e);

        function de() {}

        function he(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function ge(a, e, t) {
            var u = e.dir,
                l = t && "parentNode" === u,
                c = r++;
            return e.first ? function(e, t, n) {
                for (; e = e[u];)
                    if (1 === e.nodeType || l) return a(e, t, n)
            } : function(e, t, n) {
                var r, i, o, s = [N, c];
                if (n) {
                    for (; e = e[u];)
                        if ((1 === e.nodeType || l) && a(e, t, n)) return !0
                } else
                    for (; e = e[u];)
                        if (1 === e.nodeType || l) {
                            if ((r = (i = (o = e[E] || (e[E] = {}))[e.uniqueID] || (o[e.uniqueID] = {}))[u]) && r[0] === N && r[1] === c) return s[2] = r[2];
                            if ((i[u] = s)[2] = a(e, t, n)) return !0
                        }
            }
        }

        function ve(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--;)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function me(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), l && t.push(a)));
            return s
        }

        function ye(d, h, g, v, m, e) {
            return v && !v[E] && (v = ye(v)), m && !m[E] && (m = ye(m, e)), oe(function(e, t, n, r) {
                var i, o, s, a = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) re(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : me(c, a, d, n, r),
                    p = g ? m || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v)
                    for (i = me(p, u), v(i, [], n, r), o = i.length; o--;)(s = i[o]) && (p[u[o]] = !(f[u[o]] = s));
                if (e) {
                    if (m || d) {
                        if (m) {
                            for (i = [], o = p.length; o--;)(s = p[o]) && i.push(f[o] = s);
                            m(null, p = [], i, r)
                        }
                        for (o = p.length; o--;)(s = p[o]) && -1 < (i = m ? O(e, s) : a[o]) && (e[i] = !(t[i] = s))
                    }
                } else p = me(p === t ? p.splice(l, p.length) : p), m ? m(null, t, p, r) : L.apply(t, p)
            })
        }

        function xe(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], s = o || b.relative[" "], a = o ? 1 : 0, u = ge(function(e) {
                    return e === i
                }, s, !0), l = ge(function(e) {
                    return -1 < O(i, e)
                }, s, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; a < r; a++)
                if (t = b.relative[e[a].type]) c = [ge(ve(c), t)];
                else {
                    if ((t = b.filter[e[a].type].apply(null, e[a].matches))[E]) {
                        for (n = ++a; n < r && !b.relative[e[n].type]; n++);
                        return ye(1 < a && ve(c), 1 < a && he(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace($, "$1"), t, a < n && xe(e.slice(a, n)), n < r && xe(e = e.slice(n)), n < r && he(e))
                    }
                    c.push(t)
                }
            return ve(c)
        }
        return de.prototype = b.filters = b.pseudos, b.setFilters = new de, g = re.tokenize = function(e, t) {
            var n, r, i, o, s, a, u, l = d[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (s = e, a = [], u = b.preFilter; s;) {
                for (o in n && !(r = B.exec(s)) || (r && (s = s.slice(r[0].length) || s), a.push(i = [])), n = !1, (r = _.exec(s)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace($, " ")
                    }), s = s.slice(n.length)), b.filter) !(r = V[o].exec(s)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? re.error(e) : d(e, a).slice(0)
        }, f = re.compile = function(e, t) {
            var n, v, m, y, x, r, i = [],
                o = [],
                s = S[e + " "];
            if (!s) {
                for (t || (t = g(e)), n = t.length; n--;)(s = xe(t[n]))[E] ? i.push(s) : o.push(s);
                (s = S(e, (v = o, y = 0 < (m = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, s, a, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = N += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            for (s = 0, t || o.ownerDocument === C || (T(o), n = !k); a = v[s++];)
                                if (a(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (N = h)
                        }
                        y && ((o = !a && o) && u--, e && c.push(o))
                    }
                    if (u += l, y && l !== u) {
                        for (s = 0; a = m[s++];) a(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                for (; l--;) c[l] || f[l] || (f[l] = A.call(r));
                            f = me(f)
                        }
                        L.apply(r, f), i && !e && 0 < f.length && 1 < u + m.length && re.uniqueSort(r)
                    }
                    return i && (N = h, w = p), c
                }, y ? oe(r) : r))).selector = e
            }
            return s
        }, v = re.select = function(e, t, n, r) {
            var i, o, s, a, u, l = "function" == typeof e && e,
                c = !r && g(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && h.getById && 9 === t.nodeType && k && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(s.matches[0].replace(ee, te), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = V.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !b.relative[a = s.type]);)
                    if ((u = b.find[a]) && (r = u(s.matches[0].replace(ee, te), K.test(o[0].type) && pe(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && he(o))) return L.apply(n, r), n;
                        break
                    }
            }
            return (l || f(e, c))(r, t, !k, n, !t || K.test(e) && pe(t.parentNode) || t), n
        }, h.sortStable = E.split("").sort(j).join("") === E, h.detectDuplicates = !!l, T(), h.sortDetached = se(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("div"))
        }), se(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ae("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), h.attributes && se(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ae("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), se(function(e) {
            return null == e.getAttribute("disabled")
        }) || ae(F, function(e, t, n) {
            var r;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), re
    }(C);
    E.find = d, E.expr = d.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = d.uniqueSort, E.text = d.getText, E.isXMLDoc = d.isXML, E.contains = d.contains;
    var m = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && E(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        y = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        x = E.expr.match.needsContext,
        b = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function T(e, n, r) {
        if (E.isFunction(n)) return E.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        });
        if (n.nodeType) return E.grep(e, function(e) {
            return e === n !== r
        });
        if ("string" == typeof n) {
            if (w.test(n)) return E.filter(n, e, r);
            n = E.filter(n, e)
        }
        return E.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        })
    }
    E.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, E.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(E(e).filter(function() {
                for (t = 0; t < n; t++)
                    if (E.contains(i[t], this)) return !0
            }));
            for (t = 0; t < n; t++) E.find(e, i[t], r);
            return (r = this.pushStack(1 < n ? E.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(T(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(T(this, e || [], !0))
        },
        is: function(e) {
            return !!T(this, "string" == typeof e && x.test(e) ? E(e) : e || [], !1).length
        }
    });
    var N, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (E.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || N, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : k, !0)), b.test(r[1]) && E.isPlainObject(t))
                    for (r in t) E.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = k.getElementById(r[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = k, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : E.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), E.makeArray(e, this))
    }).prototype = E.fn, N = E(k);
    var j = /^(?:parents|prev(?:Until|All))/,
        D = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function A(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    E.fn.extend({
        has: function(e) {
            var t = E(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (E.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = x.test(e) || "string" != typeof e ? E(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), E.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return m(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return m(e, "parentNode", n)
        },
        next: function(e) {
            return A(e, "nextSibling")
        },
        prev: function(e) {
            return A(e, "previousSibling")
        },
        nextAll: function(e) {
            return m(e, "nextSibling")
        },
        prevAll: function(e) {
            return m(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return m(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return m(e, "previousSibling", n)
        },
        siblings: function(e) {
            return y((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return y(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || E.merge([], e.childNodes)
        }
    }, function(r, i) {
        E.fn[r] = function(e, t) {
            var n = E.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (D[r] || E.uniqueSort(n), j.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var q, L = /\S+/g;

    function H() {
        k.removeEventListener("DOMContentLoaded", H), C.removeEventListener("load", H), E.ready()
    }
    E.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, E.each(e.match(L) || [], function(e, t) {
            n[t] = !0
        }), n) : E.extend({}, r);
        var i, t, o, s, a = [],
            u = [],
            l = -1,
            c = function() {
                for (s = r.once, o = i = !0; u.length; l = -1)
                    for (t = u.shift(); ++l < a.length;) !1 === a[l].apply(t[0], t[1]) && r.stopOnFalse && (l = a.length, t = !1);
                r.memory || (t = !1), i = !1, s && (a = t ? [] : "")
            },
            f = {
                add: function() {
                    return a && (t && !i && (l = a.length - 1, u.push(t)), function n(e) {
                        E.each(e, function(e, t) {
                            E.isFunction(t) ? r.unique && f.has(t) || a.push(t) : t && t.length && "string" !== E.type(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return E.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = E.inArray(t, a, n));) a.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < E.inArray(e, a) : 0 < a.length
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return s = u = [], a = t = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return s = u = [], t || (a = t = ""), this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, E.extend({
        Deferred: function(e) {
            var o = [
                    ["resolve", "done", E.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", E.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", E.Callbacks("memory")]
                ],
                i = "pending",
                s = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var i = arguments;
                        return E.Deferred(function(r) {
                            E.each(o, function(e, t) {
                                var n = E.isFunction(i[e]) && i[e];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && E.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this === s ? r.promise() : this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? E.extend(e, s) : s
                    }
                },
                a = {};
            return s.pipe = s.then, E.each(o, function(e, t) {
                var n = t[2],
                    r = t[3];
                s[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[1 ^ e][2].disable, o[2][2].lock), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? s : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            var i, t, n, r = 0,
                o = c.call(arguments),
                s = o.length,
                a = 1 !== s || e && E.isFunction(e.promise) ? s : 0,
                u = 1 === a ? e : E.Deferred(),
                l = function(t, n, r) {
                    return function(e) {
                        n[t] = this, r[t] = 1 < arguments.length ? c.call(arguments) : e, r === i ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
            if (1 < s)
                for (i = new Array(s), t = new Array(s), n = new Array(s); r < s; r++) o[r] && E.isFunction(o[r].promise) ? o[r].promise().progress(l(r, t, i)).done(l(r, n, o)).fail(u.reject) : --a;
            return a || u.resolveWith(n, o), u.promise()
        }
    }), E.fn.ready = function(e) {
        return E.ready.promise().done(e), this
    }, E.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? E.readyWait++ : E.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --E.readyWait : E.isReady) || ((E.isReady = !0) !== e && 0 < --E.readyWait || (q.resolveWith(k, [E]), E.fn.triggerHandler && (E(k).triggerHandler("ready"), E(k).off("ready"))))
        }
    }), E.ready.promise = function(e) {
        return q || (q = E.Deferred(), "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? C.setTimeout(E.ready) : (k.addEventListener("DOMContentLoaded", H), C.addEventListener("load", H))), q.promise(e)
    }, E.ready.promise();
    var O = function(e, t, n, r, i, o, s) {
            var a = 0,
                u = e.length,
                l = null == n;
            if ("object" === E.type(n))
                for (a in i = !0, n) O(e, t, a, n[a], !0, o, s);
            else if (void 0 !== r && (i = !0, E.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(E(e), n)
                })), t))
                for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        F = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

    function P() {
        this.expando = E.expando + P.uid++
    }
    P.uid = 1, P.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function(e) {
            if (!F(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, F(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[t] = n;
            else
                for (r in t) i[r] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, E.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t) this.register(e);
                else {
                    E.isArray(t) ? r = t.concat(t.map(E.camelCase)) : (i = E.camelCase(t), t in o ? r = [t, i] : r = (r = i) in o ? [r] : r.match(L) || []), n = r.length;
                    for (; n--;) delete o[r[n]]
                }(void 0 === t || E.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !E.isEmptyObject(t)
        }
    };
    var R = new P,
        M = new P,
        I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        W = /[A-Z]/g;

    function $(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(W, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : I.test(n) ? E.parseJSON(n) : n)
                } catch (e) {}
                M.set(e, t, n)
            } else n = void 0;
        return n
    }
    E.extend({
        hasData: function(e) {
            return M.hasData(e) || R.hasData(e)
        },
        data: function(e, t, n) {
            return M.access(e, t, n)
        },
        removeData: function(e, t) {
            M.remove(e, t)
        },
        _data: function(e, t, n) {
            return R.access(e, t, n)
        },
        _removeData: function(e, t) {
            R.remove(e, t)
        }
    }), E.fn.extend({
        data: function(r, e) {
            var t, n, i, o = this[0],
                s = o && o.attributes;
            if (void 0 === r) {
                if (this.length && (i = M.get(o), 1 === o.nodeType && !R.get(o, "hasDataAttrs"))) {
                    for (t = s.length; t--;) s[t] && (0 === (n = s[t].name).indexOf("data-") && (n = E.camelCase(n.slice(5)), $(o, n, i[n])));
                    R.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof r ? this.each(function() {
                M.set(this, r)
            }) : O(this, function(t) {
                var e, n;
                if (o && void 0 === t) {
                    if (void 0 !== (e = M.get(o, r) || M.get(o, r.replace(W, "-$&").toLowerCase()))) return e;
                    if (n = E.camelCase(r), void 0 !== (e = M.get(o, n))) return e;
                    if (void 0 !== (e = $(o, n, void 0))) return e
                } else n = E.camelCase(r), this.each(function() {
                    var e = M.get(this, n);
                    M.set(this, n, t), -1 < r.indexOf("-") && void 0 !== e && M.set(this, r, t)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                M.remove(this, e)
            })
        }
    }), E.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = R.get(e, t), n && (!r || E.isArray(n) ? r = R.access(e, t, E.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = E.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = E._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                E.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return R.get(e, n) || R.access(e, n, {
                empty: E.Callbacks("once memory").add(function() {
                    R.remove(e, [t + "queue", n])
                })
            })
        }
    }), E.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                E.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = E.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = R.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var B = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        _ = new RegExp("^(?:([+-])=|)(" + B + ")([a-z%]*)$", "i"),
        X = ["Top", "Right", "Bottom", "Left"],
        z = function(e, t) {
            return e = t || e, "none" === E.css(e, "display") || !E.contains(e.ownerDocument, e)
        };

    function U(e, t, n, r) {
        var i, o = 1,
            s = 20,
            a = r ? function() {
                return r.cur()
            } : function() {
                return E.css(e, t, "")
            },
            u = a(),
            l = n && n[3] || (E.cssNumber[t] ? "" : "px"),
            c = (E.cssNumber[t] || "px" !== l && +u) && _.exec(E.css(e, t));
        if (c && c[3] !== l)
            for (l = l || c[3], n = n || [], c = +u || 1; c /= o = o || ".5", E.style(e, t, c + l), o !== (o = a() / u) && 1 !== o && --s;);
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var V = /^(?:checkbox|radio)$/i,
        Y = /<([\w:-]+)/,
        G = /^$|\/(?:java|ecma)script/i,
        Q = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function J(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && E.nodeName(e, t) ? E.merge([e], n) : n
    }

    function K(e, t) {
        for (var n = 0, r = e.length; n < r; n++) R.set(e[n], "globalEval", !t || R.get(t[n], "globalEval"))
    }
    Q.optgroup = Q.option, Q.tbody = Q.tfoot = Q.colgroup = Q.caption = Q.thead, Q.th = Q.td;
    var Z, ee, te = /<|&#?\w+;/;

    function ne(e, t, n, r, i) {
        for (var o, s, a, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === E.type(o)) E.merge(p, o.nodeType ? [o] : o);
                else if (te.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (Y.exec(o) || ["", ""])[1].toLowerCase(), u = Q[a] || Q._default, s.innerHTML = u[1] + E.htmlPrefilter(o) + u[2], c = u[0]; c--;) s = s.lastChild;
            E.merge(p, s.childNodes), (s = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = p[d++];)
            if (r && -1 < E.inArray(o, r)) i && i.push(o);
            else if (l = E.contains(o.ownerDocument, o), s = J(f.appendChild(o), "script"), l && K(s), n)
            for (c = 0; o = s[c++];) G.test(o.type || "") && n.push(o);
        return f
    }
    Z = k.createDocumentFragment().appendChild(k.createElement("div")), (ee = k.createElement("input")).setAttribute("type", "radio"), ee.setAttribute("checked", "checked"), ee.setAttribute("name", "t"), Z.appendChild(ee), v.checkClone = Z.cloneNode(!0).cloneNode(!0).lastChild.checked, Z.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!Z.cloneNode(!0).lastChild.defaultValue;
    var re = /^key/,
        ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        oe = /^([^.]*)(?:\.(.+)|)/;

    function se() {
        return !0
    }

    function ae() {
        return !1
    }

    function ue() {
        try {
            return k.activeElement
        } catch (e) {}
    }

    function le(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (r = r || n, n = void 0), t) le(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ae;
        else if (!i) return e;
        return 1 === o && (s = i, (i = function(e) {
            return E().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = E.guid++)), e.each(function() {
            E.event.add(this, t, i, r, n)
        })
    }
    E.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, v = R.get(t);
            if (v)
                for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = E.guid++), (u = v.events) || (u = v.events = {}), (s = v.handle) || (s = v.handle = function(e) {
                        return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                    }), l = (e = (e || "").match(L) || [""]).length; l--;) d = g = (a = oe.exec(e[l]) || [])[1], h = (a[2] || "").split(".").sort(), d && (f = E.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = E.event.special[d] || {}, c = E.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && E.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, s) || t.addEventListener && t.addEventListener(d, s)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), E.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, v = R.hasData(e) && R.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(L) || [""]).length; l--;)
                    if (d = g = (a = oe.exec(t[l]) || [])[1], h = (a[2] || "").split(".").sort(), d) {
                        for (f = E.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || E.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) E.event.remove(e, d + t[l], n, r, !0);
                E.isEmptyObject(u) && R.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = E.event.fix(e);
            var t, n, r, i, o, s = [],
                a = c.call(arguments),
                u = (R.get(this, "events") || {})[e.type] || [],
                l = E.event.special[e.type] || {};
            if ((a[0] = e).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (s = E.event.handlers.call(this, e, u), t = 0;
                    (i = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [],
                a = t.delegateCount,
                u = e.target;
            if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                        for (r = [], n = 0; n < a; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? -1 < E(i, this).index(u) : E.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || k).documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[E.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = ie.test(i) ? this.mouseHooks : re.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new E.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
            return e.target || (e.target = k), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ue() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ue() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && E.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return E.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, E.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, E.Event = function(e, t) {
        return this instanceof E.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? se : ae) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || E.now(), void(this[E.expando] = !0)) : new E.Event(e, t)
    }, E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: ae,
        isPropagationStopped: ae,
        isImmediatePropagationStopped: ae,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = se, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = se, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        E.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), E.fn.extend({
        on: function(e, t, n, r) {
            return le(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return le(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ae), this.each(function() {
                E.event.remove(this, e, n, t)
            })
        }
    });
    var ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        fe = /<script|<style|<link/i,
        pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        de = /^true\/(.*)/,
        he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function ge(e, t) {
        return E.nodeName(e, "table") && E.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function ve(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function me(e) {
        var t = de.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function ye(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (R.hasData(e) && (o = R.access(e), s = R.set(t, o), l = o.events))
                for (i in delete s.handle, s.events = {}, l)
                    for (n = 0, r = l[i].length; n < r; n++) E.event.add(t, i, l[i][n]);
            M.hasData(e) && (a = M.access(e), u = E.extend({}, a), M.set(t, u))
        }
    }

    function xe(n, r, i, o) {
        r = g.apply([], r);
        var e, t, s, a, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = E.isFunction(d);
        if (h || 1 < f && "string" == typeof d && !v.checkClone && pe.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), xe(t, r, i, o)
        });
        if (f && (t = (e = ne(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (a = (s = E.map(J(e, "script"), ve)).length; c < f; c++) u = e, c !== p && (u = E.clone(u, !0, !0), a && E.merge(s, J(u, "script"))), i.call(n[c], u, c);
            if (a)
                for (l = s[s.length - 1].ownerDocument, E.map(s, me), c = 0; c < a; c++) u = s[c], G.test(u.type || "") && !R.access(u, "globalEval") && E.contains(l, u) && (u.src ? E._evalUrl && E._evalUrl(u.src) : E.globalEval(u.textContent.replace(he, "")))
        }
        return n
    }

    function be(e, t, n) {
        for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(J(r)), r.parentNode && (n && E.contains(r.ownerDocument, r) && K(J(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    E.extend({
        htmlPrefilter: function(e) {
            return e.replace(ce, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, s, a, u, l, c = e.cloneNode(!0),
                f = E.contains(e.ownerDocument, e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                for (s = J(c), r = 0, i = (o = J(e)).length; r < i; r++) a = o[r], u = s[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && V.test(a.type) ? u.checked = a.checked : "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || J(e), s = s || J(c), r = 0, i = o.length; r < i; r++) ye(o[r], s[r]);
                else ye(e, c);
            return 0 < (s = J(c, "script")).length && K(s, !f && J(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (F(n)) {
                    if (t = n[R.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                        n[R.expando] = void 0
                    }
                    n[M.expando] && (n[M.expando] = void 0)
                }
        }
    }), E.fn.extend({
        domManip: xe,
        detach: function(e) {
            return be(this, e, !0)
        },
        remove: function(e) {
            return be(this, e)
        },
        text: function(e) {
            return O(this, function(e) {
                return void 0 === e ? E.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return xe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ge(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return xe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ge(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return xe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return xe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(J(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return E.clone(this, e, t)
            })
        },
        html: function(e) {
            return O(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !fe.test(e) && !Q[(Y.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(J(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return xe(this, arguments, function(e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(J(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        E.fn[e] = function(e) {
            for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), E(r[o])[s](t), a.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var we, Te = {
        HTML: "block",
        BODY: "block"
    };

    function Ce(e, t) {
        var n = E(t.createElement(e)).appendTo(t.body),
            r = E.css(n[0], "display");
        return n.detach(), r
    }

    function ke(e) {
        var t = k,
            n = Te[e];
        return n || ("none" !== (n = Ce(e, t)) && n || ((t = (we = (we || E("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = Ce(e, t), we.detach()), Te[e] = n), n
    }
    var Ee = /^margin/,
        Ne = new RegExp("^(" + B + ")(?!px)[a-z%]+$", "i"),
        Se = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        je = function(e, t, n, r) {
            var i, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.apply(e, r || []), t) e.style[o] = s[o];
            return i
        },
        De = k.documentElement;

    function Ae(e, t, n) {
        var r, i, o, s, a = e.style;
        return "" !== (s = (n = n || Se(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== s || E.contains(e.ownerDocument, e) || (s = E.style(e, t)), n && !v.pixelMarginRight() && Ne.test(s) && Ee.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o), void 0 !== s ? s + "" : s
    }

    function qe(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }! function() {
        var t, n, r, i, o = k.createElement("div"),
            s = k.createElement("div");
        if (s.style) {
            function e() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", De.appendChild(o);
                var e = C.getComputedStyle(s);
                t = "1%" !== e.top, i = "2px" === e.marginLeft, n = "4px" === e.width, s.style.marginRight = "50%", r = "4px" === e.marginRight, De.removeChild(o)
            }
            s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(s), E.extend(v, {
                pixelPosition: function() {
                    return e(), t
                },
                boxSizingReliable: function() {
                    return null == n && e(), n
                },
                pixelMarginRight: function() {
                    return null == n && e(), r
                },
                reliableMarginLeft: function() {
                    return null == n && e(), i
                },
                reliableMarginRight: function() {
                    var e, t = s.appendChild(k.createElement("div"));
                    return t.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", s.style.width = "1px", De.appendChild(o), e = !parseFloat(C.getComputedStyle(t).marginRight), De.removeChild(o), s.removeChild(t), e
                }
            })
        }
    }();
    var Le = /^(none|table(?!-c[ea]).+)/,
        He = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Oe = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Fe = ["Webkit", "O", "Moz", "ms"],
        Pe = k.createElement("div").style;

    function Re(e) {
        if (e in Pe) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Fe.length; n--;)
            if ((e = Fe[n] + t) in Pe) return e
    }

    function Me(e, t, n) {
        var r = _.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ie(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += E.css(e, n + X[o], !0, i)), r ? ("content" === n && (s -= E.css(e, "padding" + X[o], !0, i)), "margin" !== n && (s -= E.css(e, "border" + X[o] + "Width", !0, i))) : (s += E.css(e, "padding" + X[o], !0, i), "padding" !== n && (s += E.css(e, "border" + X[o] + "Width", !0, i)));
        return s
    }

    function We(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Se(e),
            s = "border-box" === E.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = Ae(e, t, o)) < 0 || null == i) && (i = e.style[t]), Ne.test(i)) return i;
            r = s && (v.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + Ie(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function $e(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)(r = e[s]).style && (o[s] = R.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && z(r) && (o[s] = R.access(r, "olddisplay", ke(r.nodeName)))) : (i = z(r), "none" === n && i || R.set(r, "olddisplay", i ? n : E.css(r, "display"))));
        for (s = 0; s < a; s++)(r = e[s]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function Be(e, t, n, r, i) {
        return new Be.prototype.init(e, t, n, r, i)
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ae(e, "opacity");
                        return "" === n ? "1" : n
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
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = E.camelCase(t),
                    u = e.style;
                return t = E.cssProps[a] || (E.cssProps[a] = Re(a) || a), s = E.cssHooks[t] || E.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : ("string" === (o = typeof n) && (i = _.exec(n)) && i[1] && (n = U(e, t, i), o = "number"), void(null != n && n == n && ("number" === o && (n += i && i[3] || (E.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = E.camelCase(t);
            return t = E.cssProps[a] || (E.cssProps[a] = Re(a) || a), (s = E.cssHooks[t] || E.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = Ae(e, t, r)), "normal" === i && t in Oe && (i = Oe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), E.each(["height", "width"], function(e, s) {
        E.cssHooks[s] = {
            get: function(e, t, n) {
                return t ? Le.test(E.css(e, "display")) && 0 === e.offsetWidth ? je(e, He, function() {
                    return We(e, s, n)
                }) : We(e, s, n) : void 0
            },
            set: function(e, t, n) {
                var r, i = n && Se(e),
                    o = n && Ie(e, s, n, "border-box" === E.css(e, "boxSizing", !1, i), i);
                return o && (r = _.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t, t = E.css(e, s)), Me(0, t, o)
            }
        }
    }), E.cssHooks.marginLeft = qe(v.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(Ae(e, "marginLeft")) || e.getBoundingClientRect().left - je(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), E.cssHooks.marginRight = qe(v.reliableMarginRight, function(e, t) {
        return t ? je(e, {
            display: "inline-block"
        }, Ae, [e, "marginRight"]) : void 0
    }), E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        E.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + X[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, Ee.test(i) || (E.cssHooks[i + o].set = Me)
    }), E.fn.extend({
        css: function(e, t) {
            return O(this, function(e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (E.isArray(t)) {
                    for (r = Se(e), i = t.length; s < i; s++) o[t[s]] = E.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return $e(this, !0)
        },
        hide: function() {
            return $e(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                z(this) ? E(this).show() : E(this).hide()
            })
        }
    }), ((E.Tween = Be).prototype = {
        constructor: Be,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (E.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Be.propHooks[this.prop];
            return e && e.get ? e.get(this) : Be.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Be.propHooks[this.prop];
            return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Be.propHooks._default.set(this), this
        }
    }).init.prototype = Be.prototype, (Be.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[E.cssProps[e.prop]] && !E.cssHooks[e.prop] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Be.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, E.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, E.fx = Be.prototype.init, E.fx.step = {};
    var _e, Xe, ze, Ue, Ve, Ye = /^(?:toggle|show|hide)$/,
        Ge = /queueHooks$/;

    function Qe() {
        return C.setTimeout(function() {
            _e = void 0
        }), _e = E.now()
    }

    function Je(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = X[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function Ke(e, t, n) {
        for (var r, i = (Ze.tweeners[t] || []).concat(Ze.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function Ze(o, e, t) {
        var n, s, r = 0,
            i = Ze.prefilters.length,
            a = E.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (s) return !1;
                for (var e = _e || Qe(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return a.notifyWith(o, [l, n, t]), n < 1 && i ? t : (a.resolveWith(o, [l]), !1)
            },
            l = a.promise({
                elem: o,
                props: E.extend({}, e),
                opts: E.extend(!0, {
                    specialEasing: {},
                    easing: E.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: _e || Qe(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = E.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (a.notifyWith(o, [l, 1, 0]), a.resolveWith(o, [l, e])) : a.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (function(e, t) {
                var n, r, i, o, s;
                for (n in e)
                    if (i = t[r = E.camelCase(n)], o = e[n], E.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = E.cssHooks[r]) && "expand" in s)
                        for (n in o = s.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = Ze.prefilters[r].call(l, o, c, l.opts)) return E.isFunction(n.stop) && (E._queueHooks(l.elem, l.opts.queue).stop = E.proxy(n.stop, n)), n;
        return E.map(c, Ke, l), E.isFunction(l.opts.start) && l.opts.start.call(o, l), E.fx.timer(E.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    E.Animation = E.extend(Ze, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return U(n.elem, e, _.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            E.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(L);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], Ze.tweeners[n] = Ze.tweeners[n] || [], Ze.tweeners[n].unshift(t)
        },
        prefilters: [function(t, e, n) {
            var r, i, o, s, a, u, l, c = this,
                f = {},
                p = t.style,
                d = t.nodeType && z(t),
                h = R.get(t, "fxshow");
            for (r in n.queue || (null == (a = E._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || u()
                }), a.unqueued++, c.always(function() {
                    c.always(function() {
                        a.unqueued--, E.queue(t, "fx").length || a.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ("none" === (l = E.css(t, "display")) ? R.get(t, "olddisplay") || ke(t.nodeName) : l) && "none" === E.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function() {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), e)
                if (i = e[r], Ye.exec(i)) {
                    if (delete e[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
                        if ("show" !== i || !h || void 0 === h[r]) continue;
                        d = !0
                    }
                    f[r] = h && h[r] || E.style(t, r)
                } else l = void 0;
            if (E.isEmptyObject(f)) "inline" === ("none" === l ? ke(t.nodeName) : l) && (p.display = l);
            else
                for (r in h ? "hidden" in h && (d = h.hidden) : h = R.access(t, "fxshow", {}), o && (h.hidden = !d), d ? E(t).show() : c.done(function() {
                        E(t).hide()
                    }), c.done(function() {
                        var e;
                        for (e in R.remove(t, "fxshow"), f) E.style(t, e, f[e])
                    }), f) s = Ke(d ? h[r] : 0, r, c), r in h || (h[r] = s.start, d && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }],
        prefilter: function(e, t) {
            t ? Ze.prefilters.unshift(e) : Ze.prefilters.push(e)
        }
    }), E.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? E.extend({}, e) : {
            complete: n || !n && t || E.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !E.isFunction(t) && t
        };
        return r.duration = E.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in E.fx.speeds ? E.fx.speeds[r.duration] : E.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            E.isFunction(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue)
        }, r
    }, E.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(z).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = E.isEmptyObject(t),
                o = E.speed(e, n, r),
                s = function() {
                    var e = Ze(this, E.extend({}, t), o);
                    (i || R.get(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(i, e, o) {
            var s = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = E.timers,
                    r = R.get(this);
                if (t) r[t] && r[t].stop && s(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && Ge.test(t) && s(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || E.dequeue(this, i)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = R.get(this),
                    n = t[s + "queue"],
                    r = t[s + "queueHooks"],
                    i = E.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, E.queue(this, s, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), E.each(["toggle", "show", "hide"], function(e, r) {
        var i = E.fn[r];
        E.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(Je(r, !0), e, t, n)
        }
    }), E.each({
        slideDown: Je("show"),
        slideUp: Je("hide"),
        slideToggle: Je("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        E.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), E.timers = [], E.fx.tick = function() {
        var e, t = 0,
            n = E.timers;
        for (_e = E.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || E.fx.stop(), _e = void 0
    }, E.fx.timer = function(e) {
        E.timers.push(e), e() ? E.fx.start() : E.timers.pop()
    }, E.fx.interval = 13, E.fx.start = function() {
        Xe || (Xe = C.setInterval(E.fx.tick, E.fx.interval))
    }, E.fx.stop = function() {
        C.clearInterval(Xe), Xe = null
    }, E.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, E.fn.delay = function(r, e) {
        return r = E.fx && E.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, ze = k.createElement("input"), Ue = k.createElement("select"), Ve = Ue.appendChild(k.createElement("option")), ze.type = "checkbox", v.checkOn = "" !== ze.value, v.optSelected = Ve.selected, Ue.disabled = !0, v.optDisabled = !Ve.disabled, (ze = k.createElement("input")).value = "t", ze.type = "radio", v.radioValue = "t" === ze.value;
    var et, tt = E.expr.attrHandle;
    E.fn.extend({
        attr: function(e, t) {
            return O(this, E.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                E.removeAttr(this, e)
            })
        }
    }), E.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (t = t.toLowerCase(), i = E.attrHooks[t] || (E.expr.match.bool.test(t) ? et : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && E.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(L);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = E.propFix[n] || n, E.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        }
    }), et = {
        set: function(e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var o = tt[t] || E.find.attr;
        tt[t] = function(e, t, n) {
            var r, i;
            return n || (i = tt[t], tt[t] = r, r = null != o(e, t, n) ? t.toLowerCase() : null, tt[t] = i), r
        }
    });
    var nt = /^(?:input|select|textarea|button)$/i,
        rt = /^(?:a|area)$/i;
    E.fn.extend({
        prop: function(e, t) {
            return O(this, E.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[E.propFix[e] || e]
            })
        }
    }), E.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : nt.test(e.nodeName) || rt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), v.optSelected || (E.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        E.propFix[this.toLowerCase()] = this
    });
    var it = /[\t\r\n\f]/g;

    function ot(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    E.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, s, a, u = 0;
            if (E.isFunction(t)) return this.each(function(e) {
                E(this).addClass(t.call(this, e, ot(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(L) || []; n = this[u++];)
                    if (i = ot(n), r = 1 === n.nodeType && (" " + i + " ").replace(it, " ")) {
                        for (s = 0; o = e[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (a = E.trim(r)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, s, a, u = 0;
            if (E.isFunction(t)) return this.each(function(e) {
                E(this).removeClass(t.call(this, e, ot(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(L) || []; n = this[u++];)
                    if (i = ot(n), r = 1 === n.nodeType && (" " + i + " ").replace(it, " ")) {
                        for (s = 0; o = e[s++];)
                            for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                        i !== (a = E.trim(r)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i;
            return "boolean" == typeof t && "string" === o ? t ? this.addClass(i) : this.removeClass(i) : E.isFunction(i) ? this.each(function(e) {
                E(this).toggleClass(i.call(this, e, ot(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if ("string" === o)
                    for (t = 0, n = E(this), r = i.match(L) || []; e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== i && "boolean" !== o || ((e = ot(this)) && R.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : R.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + ot(n) + " ").replace(it, " ").indexOf(t)) return !0;
            return !1
        }
    });
    var st = /\r/g,
        at = /[\x20\t\r\n\f]+/g;
    E.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = E.isFunction(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : E.isArray(t) && (t = E.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(st, "") : null == e ? "" : e : void 0
        }
    }), E.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : E.trim(E.text(e)).replace(at, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++)
                        if (((n = r[u]).selected || u === i) && (v.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !E.nodeName(n.parentNode, "optgroup"))) {
                            if (t = E(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = E.makeArray(t), s = i.length; s--;)((r = i[s]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), E.each(["radio", "checkbox"], function() {
        E.valHooks[this] = {
            set: function(e, t) {
                return E.isArray(t) ? e.checked = -1 < E.inArray(E(e).val(), t) : void 0
            }
        }, v.checkOn || (E.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var ut = /^(?:focusinfocus|focusoutblur)$/;
    E.extend(E.event, {
        trigger: function(e, t, n, r) {
            var i, o, s, a, u, l, c, f = [n || k],
                p = h.call(e, "type") ? e.type : e,
                d = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = s = n = n || k, 3 !== n.nodeType && 8 !== n.nodeType && !ut.test(p + E.event.triggered) && (-1 < p.indexOf(".") && (p = (d = p.split(".")).shift(), d.sort()), u = p.indexOf(":") < 0 && "on" + p, (e = e[E.expando] ? e : new E.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[p] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !E.isWindow(n)) {
                    for (a = c.delegateType || p, ut.test(a + p) || (o = o.parentNode); o; o = o.parentNode) f.push(o), s = o;
                    s === (n.ownerDocument || k) && f.push(s.defaultView || s.parentWindow || C)
                }
                for (i = 0;
                    (o = f[i++]) && !e.isPropagationStopped();) e.type = 1 < i ? a : c.bindType || p, (l = (R.get(o, "events") || {})[e.type] && R.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && F(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), t) || !F(n) || u && E.isFunction(n[p]) && !E.isWindow(n) && ((s = n[u]) && (n[u] = null), n[E.event.triggered = p](), E.event.triggered = void 0, s && (n[u] = s)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = E.extend(new E.Event, n, {
                type: e,
                isSimulated: !0
            });
            E.event.trigger(r, null, t)
        }
    }), E.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                E.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? E.event.trigger(e, t, n, !0) : void 0
        }
    }), E.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        E.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), E.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), v.focusin = "onfocusin" in C, v.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            E.event.simulate(r, e.target, E.event.fix(e))
        };
        E.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = R.access(e, r);
                t || e.addEventListener(n, i, !0), R.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = R.access(e, r) - 1;
                t ? R.access(e, r, t) : (e.removeEventListener(n, i, !0), R.remove(e, r))
            }
        }
    });
    var lt = C.location,
        ct = E.now(),
        ft = /\?/;
    E.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, E.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e), t
    };
    var pt = /#.*$/,
        dt = /([?&])_=[^&]*/,
        ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        gt = /^(?:GET|HEAD)$/,
        vt = /^\/\//,
        mt = {},
        yt = {},
        xt = "*/".concat("*"),
        bt = k.createElement("a");

    function wt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(L) || [];
            if (E.isFunction(t))
                for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Tt(t, i, o, s) {
        var a = {},
            u = t === yt;

        function l(e) {
            var r;
            return a[e] = !0, E.each(t[e] || [], function(e, t) {
                var n = t(i, o, s);
                return "string" != typeof n || u || a[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !a["*"] && l("*")
    }

    function Ct(e, t) {
        var n, r, i = E.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && E.extend(!0, e, r), e
    }
    bt.href = lt.href, E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: lt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(lt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": xt,
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
                "text json": E.parseJSON,
                "text xml": E.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ct(Ct(e, E.ajaxSettings), t) : Ct(E.ajaxSettings, e)
        },
        ajaxPrefilter: wt(mt),
        ajaxTransport: wt(yt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, i, g = E.ajaxSetup({}, t),
                v = g.context || g,
                m = g.context && (v.nodeType || v.jquery) ? E(v) : E.event,
                y = E.Deferred(),
                x = E.Callbacks("once memory"),
                b = g.statusCode || {},
                o = {},
                s = {},
                w = 0,
                a = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!n)
                                for (n = {}; t = ht.exec(p);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return w || (e = s[n] = s[n] || e, o[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return w || (g.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (w < 2)
                                for (t in e) b[t] = [b[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || a;
                        return c && c.abort(t), u(0, t), this
                    }
                };
            if (y.promise(T).complete = x.add, T.success = T.done, T.error = T.fail, g.url = ((e || g.url || lt.href) + "").replace(pt, "").replace(vt, lt.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = E.trim(g.dataType || "*").toLowerCase().match(L) || [""], null == g.crossDomain) {
                r = k.createElement("a");
                try {
                    r.href = g.url, r.href = r.href, g.crossDomain = bt.protocol + "//" + bt.host != r.protocol + "//" + r.host
                } catch (e) {
                    g.crossDomain = !0
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = E.param(g.data, g.traditional)), Tt(mt, g, t, T), 2 === w) return T;
            for (i in (h = E.event && g.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !gt.test(g.type), f = g.url, g.hasContent || (g.data && (f = g.url += (ft.test(f) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (g.url = dt.test(f) ? f.replace(dt, "$1_=" + ct++) : f + (ft.test(f) ? "&" : "?") + "_=" + ct++)), g.ifModified && (E.lastModified[f] && T.setRequestHeader("If-Modified-Since", E.lastModified[f]), E.etag[f] && T.setRequestHeader("If-None-Match", E.etag[f])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && T.setRequestHeader("Content-Type", g.contentType), T.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + xt + "; q=0.01" : "") : g.accepts["*"]), g.headers) T.setRequestHeader(i, g.headers[i]);
            if (g.beforeSend && (!1 === g.beforeSend.call(v, T, g) || 2 === w)) return T.abort();
            for (i in a = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[i](g[i]);
            if (c = Tt(yt, g, t, T)) {
                if (T.readyState = 1, h && m.trigger("ajaxSend", [T, g]), 2 === w) return T;
                g.async && 0 < g.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, g.timeout));
                try {
                    w = 1, c.send(o, u)
                } catch (e) {
                    if (!(w < 2)) throw e;
                    u(-1, e)
                }
            } else u(-1, "No Transport");

            function u(e, t, n, r) {
                var i, o, s, a, u, l = t;
                2 !== w && (w = 2, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                    for (var r, i, o, s, a = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in a)
                            if (a[i] && a[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            s || (s = i)
                        }
                        o = o || s
                    }
                    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
                }(g, T, n)), a = function(e, t, n, r) {
                    var i, o, s, a, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(s = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                    !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0], c.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(g, a, T, i), i ? (g.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (E.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (E.etag[f] = u)), 204 === e || "HEAD" === g.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = a.state, o = a.data, i = !(s = a.error))) : (s = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? y.resolveWith(v, [o, l, T]) : y.rejectWith(v, [T, l, s]), T.statusCode(b), b = void 0, h && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, g, i ? o : s]), x.fireWith(v, [T, l]), h && (m.trigger("ajaxComplete", [T, g]), --E.active || E.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return E.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return E.get(e, void 0, t, "script")
        }
    }), E.each(["get", "post"], function(e, i) {
        E[i] = function(e, t, n, r) {
            return E.isFunction(t) && (r = r || n, n = t, t = void 0), E.ajax(E.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, E.isPlainObject(e) && e))
        }
    }), E._evalUrl = function(e) {
        return E.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, E.fn.extend({
        wrapAll: function(t) {
            var e;
            return E.isFunction(t) ? this.each(function(e) {
                E(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = E(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(n) {
            return E.isFunction(n) ? this.each(function(e) {
                E(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = E(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = E.isFunction(t);
            return this.each(function(e) {
                E(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                E.nodeName(this, "body") || E(this).replaceWith(this.childNodes)
            }).end()
        }
    }), E.expr.filters.hidden = function(e) {
        return !E.expr.filters.visible(e)
    }, E.expr.filters.visible = function(e) {
        return 0 < e.offsetWidth || 0 < e.offsetHeight || 0 < e.getClientRects().length
    };
    var kt = /%20/g,
        Et = /\[\]$/,
        Nt = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;

    function Dt(n, e, r, i) {
        var t;
        if (E.isArray(e)) E.each(e, function(e, t) {
            r || Et.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== E.type(e)) i(n, e);
        else
            for (t in e) Dt(n + "[" + t + "]", e[t], r, i)
    }
    E.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = E.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = E.ajaxSettings && E.ajaxSettings.traditional), E.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Dt(n, e[n], t, i);
        return r.join("&").replace(kt, "+")
    }, E.fn.extend({
        serialize: function() {
            return E.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && jt.test(this.nodeName) && !St.test(e) && (this.checked || !V.test(e))
            }).map(function(e, t) {
                var n = E(this).val();
                return null == n ? null : E.isArray(n) ? E.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Nt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Nt, "\r\n")
                }
            }).get()
        }
    }), E.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var At = {
            0: 200,
            1223: 204
        },
        qt = E.ajaxSettings.xhr();
    v.cors = !!qt && "withCredentials" in qt, v.ajax = qt = !!qt, E.ajaxTransport(function(i) {
        var o, s;
        return v.cors || qt && !i.crossDomain ? {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = s = r.onload = r.onerror = r.onabort = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(At[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), s = r.onerror = o("error"), void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && s()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        } : void 0
    }), E.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return E.globalEval(e), e
            }
        }
    }), E.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), E.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain) return {
            send: function(e, t) {
                r = E("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), k.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Lt = [],
        Ht = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Lt.pop() || E.expando + "_" + ct++;
            return this[e] = !0, e
        }
    }), E.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, s = !1 !== e.jsonp && (Ht.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = E.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Ht, "$1" + r) : !1 !== e.jsonp && (e.url += (ft.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || E.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? E(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Lt.push(r)), o && E.isFunction(i) && i(o[0]), o = i = void 0
        }), "script") : void 0
    }), E.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || k;
        var r = b.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = ne([e], t, i), i && i.length && E(i).remove(), E.merge([], r.childNodes))
    };
    var Ot = E.fn.load;

    function Ft(e) {
        return E.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    E.fn.load = function(e, t, n) {
        if ("string" != typeof e && Ot) return Ot.apply(this, arguments);
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return -1 < a && (r = E.trim(e.slice(a)), e = e.slice(0, a)), E.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < s.length && E.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        E.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), E.expr.filters.animated = function(t) {
        return E.grep(E.timers, function(e) {
            return t === e.elem
        }).length
    }, E.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l = E.css(e, "position"),
                c = E(e),
                f = {};
            "static" === l && (e.style.position = "relative"), a = c.offset(), o = E.css(e, "top"), u = E.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (s = (r = c.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), E.isFunction(t) && (t = t.call(e, n, E.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, E.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                E.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            return o ? (e = o.documentElement, E.contains(e, r) ? (i = r.getBoundingClientRect(), n = Ft(o), {
                top: i.top + n.pageYOffset - e.clientTop,
                left: i.left + n.pageXOffset - e.clientLeft
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === E.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), E.nodeName(e[0], "html") || (r = e.offset()), r.top += E.css(e[0], "borderTopWidth", !0), r.left += E.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - E.css(n, "marginTop", !0),
                    left: t.left - r.left - E.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === E.css(e, "position");) e = e.offsetParent;
                return e || De
            })
        }
    }), E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        E.fn[t] = function(e) {
            return O(this, function(e, t, n) {
                var r = Ft(e);
                return void 0 === n ? r ? r[i] : e[t] : void(r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }), E.each(["top", "left"], function(e, n) {
        E.cssHooks[n] = qe(v.pixelPosition, function(e, t) {
            return t ? (t = Ae(e, n), Ne.test(t) ? E(e).position()[n] + "px" : t) : void 0
        })
    }), E.each({
        Height: "height",
        Width: "width"
    }, function(o, s) {
        E.each({
            padding: "inner" + o,
            content: s,
            "": "outer" + o
        }, function(r, e) {
            E.fn[e] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return O(this, function(e, t, n) {
                    var r;
                    return E.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i)
                }, s, n ? e : void 0, n, null)
            }
        })
    }), E.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }), E.fn.andSelf = E.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return E
    });
    var Pt = C.jQuery,
        Rt = C.$;
    return E.noConflict = function(e) {
        return C.$ === E && (C.$ = Rt), e && C.jQuery === E && (C.jQuery = Pt), E
    }, e || (C.jQuery = C.$ = E), E
});
! function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {},
                n = i[e] = i[e] || [];
            return -1 == n.indexOf(t) && n.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[e] = i[e] || {})[t] = !0, this
        }
    }, t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return -1 != n && i.splice(n, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = 0,
                o = i[n];
            t = t || [];
            for (var s = this._onceEvents && this._onceEvents[e]; o;) {
                var r = s && s[o];
                r && (this.off(e, o), delete s[o]), o.apply(this, t), o = i[n += r ? 0 : 1]
            }
            return this
        }
    }, e
}),
function(t, i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(e) {
        return i(t, e)
    }) : "object" == typeof module && module.exports ? module.exports = i(t, require("ev-emitter")) : t.imagesLoaded = i(t, t.EvEmitter)
}(window, function(t, e) {
    function n(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }

    function o(e, t, i) {
        return this instanceof o ? ("string" == typeof e && (e = document.querySelectorAll(e)), this.elements = function(e) {
            var t = [];
            if (Array.isArray(e)) t = e;
            else if ("number" == typeof e.length)
                for (var i = 0; i < e.length; i++) t.push(e[i]);
            else t.push(e);
            return t
        }(e), this.options = n({}, this.options), "function" == typeof t ? i = t : n(this.options, t), i && this.on("always", i), this.getImages(), r && (this.jqDeferred = new r.Deferred), void setTimeout(function() {
            this.check()
        }.bind(this))) : new o(e, t, i)
    }

    function i(e) {
        this.img = e
    }

    function s(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var r = t.jQuery,
        h = t.console;
    (o.prototype = Object.create(e.prototype)).options = {}, o.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && a[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var s = e.querySelectorAll(this.options.background);
                for (n = 0; n < s.length; n++) {
                    var r = s[n];
                    this.addElementBackgroundImages(r)
                }
            }
        }
    };
    var a = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
            }
    }, o.prototype.addImage = function(e) {
        var t = new i(e);
        this.images.push(t)
    }, o.prototype.addBackground = function(e, t) {
        var i = new s(e, t);
        this.images.push(i)
    }, o.prototype.check = function() {
        function t(e, t, i) {
            setTimeout(function() {
                n.progress(e, t, i)
            })
        }
        var n = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) {
            e.once("progress", t), e.check()
        }) : void this.complete()
    }, o.prototype.progress = function(e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && h && h.log("progress: " + i, e, t)
    }, o.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, (i.prototype = Object.create(e.prototype)).check = function() {
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, i.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, i.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, i.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, i.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, i.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, i.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, (s.prototype = Object.create(i.prototype)).check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, o.makeJQueryPlugin = function(e) {
        (e = e || t.jQuery) && ((r = e).fn.imagesLoaded = function(e, t) {
            return new o(this, e, t).jqDeferred.promise(r(this))
        })
    }, o.makeJQueryPlugin(), o
});
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function() {
        var o = /\blang(?:uage)?-([\w-]+)\b/i,
            t = 0,
            O = _self.Prism = {
                manual: _self.Prism && _self.Prism.manual,
                disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function(e) {
                        return e instanceof s ? new s(e.type, O.util.encode(e.content), e.alias) : "Array" === O.util.type(e) ? e.map(O.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: function(e) {
                        return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
                    },
                    objId: function(e) {
                        return e.__id || Object.defineProperty(e, "__id", {
                            value: ++t
                        }), e.__id
                    },
                    clone: function(e, a) {
                        var t = O.util.type(e);
                        switch (a = a || {}, t) {
                            case "Object":
                                if (a[O.util.objId(e)]) return a[O.util.objId(e)];
                                var n = {};
                                for (var r in a[O.util.objId(e)] = n, e) e.hasOwnProperty(r) && (n[r] = O.util.clone(e[r], a));
                                return n;
                            case "Array":
                                if (a[O.util.objId(e)]) return a[O.util.objId(e)];
                                n = [];
                                return a[O.util.objId(e)] = n, e.forEach(function(e, t) {
                                    n[t] = O.util.clone(e, a)
                                }), n
                        }
                        return e
                    }
                },
                languages: {
                    extend: function(e, t) {
                        var a = O.util.clone(O.languages[e]);
                        for (var n in t) a[n] = t[n];
                        return a
                    },
                    insertBefore: function(a, e, t, n) {
                        var r = (n = n || O.languages)[a];
                        if (2 == arguments.length) {
                            for (var i in t = e) t.hasOwnProperty(i) && (r[i] = t[i]);
                            return r
                        }
                        var s = {};
                        for (var l in r)
                            if (r.hasOwnProperty(l)) {
                                if (l == e)
                                    for (var i in t) t.hasOwnProperty(i) && (s[i] = t[i]);
                                s[l] = r[l]
                            }
                        return O.languages.DFS(O.languages, function(e, t) {
                            t === n[a] && e != a && (this[e] = s)
                        }), n[a] = s
                    },
                    DFS: function(e, t, a, n) {
                        for (var r in n = n || {}, e) e.hasOwnProperty(r) && (t.call(e, r, e[r], a || r), "Object" !== O.util.type(e[r]) || n[O.util.objId(e[r])] ? "Array" !== O.util.type(e[r]) || n[O.util.objId(e[r])] || (n[O.util.objId(e[r])] = !0, O.languages.DFS(e[r], t, r, n)) : (n[O.util.objId(e[r])] = !0, O.languages.DFS(e[r], t, null, n)))
                    }
                },
                plugins: {},
                highlightAll: function(e, t) {
                    O.highlightAllUnder(document, e, t)
                },
                highlightAllUnder: function(e, t, a) {
                    var n = {
                        callback: a,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    O.hooks.run("before-highlightall", n);
                    for (var r, i = n.elements || e.querySelectorAll(n.selector), s = 0; r = i[s++];) O.highlightElement(r, !0 === t, n.callback)
                },
                highlightElement: function(e, t, a) {
                    for (var n, r, i = e; i && !o.test(i.className);) i = i.parentNode;
                    i && (n = (i.className.match(o) || [, ""])[1].toLowerCase(), r = O.languages[n]), e.className = e.className.replace(o, "").replace(/\s+/g, " ") + " language-" + n, e.parentNode && (i = e.parentNode, /pre/i.test(i.nodeName) && (i.className = i.className.replace(o, "").replace(/\s+/g, " ") + " language-" + n));
                    var s = {
                        element: e,
                        language: n,
                        grammar: r,
                        code: e.textContent
                    };
                    if (O.hooks.run("before-sanity-check", s), !s.code || !s.grammar) return s.code && (O.hooks.run("before-highlight", s), s.element.textContent = s.code, O.hooks.run("after-highlight", s)), void O.hooks.run("complete", s);
                    if (O.hooks.run("before-highlight", s), t && _self.Worker) {
                        var l = new Worker(O.filename);
                        l.onmessage = function(e) {
                            s.highlightedCode = e.data, O.hooks.run("before-insert", s), s.element.innerHTML = s.highlightedCode, a && a.call(s.element), O.hooks.run("after-highlight", s), O.hooks.run("complete", s)
                        }, l.postMessage(JSON.stringify({
                            language: s.language,
                            code: s.code,
                            immediateClose: !0
                        }))
                    } else s.highlightedCode = O.highlight(s.code, s.grammar, s.language), O.hooks.run("before-insert", s), s.element.innerHTML = s.highlightedCode, a && a.call(e), O.hooks.run("after-highlight", s), O.hooks.run("complete", s)
                },
                highlight: function(e, t, a) {
                    var n = {
                        code: e,
                        grammar: t,
                        language: a
                    };
                    return O.hooks.run("before-tokenize", n), n.tokens = O.tokenize(n.code, n.grammar), O.hooks.run("after-tokenize", n), s.stringify(O.util.encode(n.tokens), n.language)
                },
                matchGrammar: function(e, t, a, n, r, i, s) {
                    var l = O.Token;
                    for (var o in a)
                        if (a.hasOwnProperty(o) && a[o]) {
                            if (o == s) return;
                            var u = a[o];
                            u = "Array" === O.util.type(u) ? u : [u];
                            for (var g = 0; g < u.length; ++g) {
                                var c = u[g],
                                    d = c.inside,
                                    p = !!c.lookbehind,
                                    m = !!c.greedy,
                                    h = 0,
                                    f = c.alias;
                                if (m && !c.pattern.global) {
                                    var y = c.pattern.toString().match(/[imuy]*$/)[0];
                                    c.pattern = RegExp(c.pattern.source, y + "g")
                                }
                                c = c.pattern || c;
                                for (var b = n, k = r; b < t.length; k += t[b].length, ++b) {
                                    var v = t[b];
                                    if (t.length > e.length) return;
                                    if (!(v instanceof l)) {
                                        if (m && b != t.length - 1) {
                                            if (c.lastIndex = k, !(S = c.exec(e))) break;
                                            for (var P = S.index + (p ? S[1].length : 0), w = S.index + S[0].length, F = b, x = k, A = t.length; F < A && (x < w || !t[F].type && !t[F - 1].greedy); ++F)(x += t[F].length) <= P && (++b, k = x);
                                            if (t[b] instanceof l) continue;
                                            j = F - b, v = e.slice(k, x), S.index -= k
                                        } else {
                                            c.lastIndex = 0;
                                            var S = c.exec(v),
                                                j = 1
                                        }
                                        if (S) {
                                            p && (h = S[1] ? S[1].length : 0);
                                            w = (P = S.index + h) + (S = S[0].slice(h)).length;
                                            var _ = v.slice(0, P),
                                                N = v.slice(w),
                                                C = [b, j];
                                            _ && (++b, k += _.length, C.push(_));
                                            var E = new l(o, d ? O.tokenize(S, d) : S, f, S, m);
                                            if (C.push(E), N && C.push(N), Array.prototype.splice.apply(t, C), 1 != j && O.matchGrammar(e, t, a, b, k, !0, o), i) break
                                        } else if (i) break
                                    }
                                }
                            }
                        }
                },
                tokenize: function(e, t, a) {
                    var n = [e],
                        r = t.rest;
                    if (r) {
                        for (var i in r) t[i] = r[i];
                        delete t.rest
                    }
                    return O.matchGrammar(e, n, t, 0, 0, !1), n
                },
                hooks: {
                    all: {},
                    add: function(e, t) {
                        var a = O.hooks.all;
                        a[e] = a[e] || [], a[e].push(t)
                    },
                    run: function(e, t) {
                        var a = O.hooks.all[e];
                        if (a && a.length)
                            for (var n, r = 0; n = a[r++];) n(t)
                    }
                }
            },
            s = O.Token = function(e, t, a, n, r) {
                this.type = e, this.content = t, this.alias = a, this.length = 0 | (n || "").length, this.greedy = !!r
            };
        if (s.stringify = function(t, a, e) {
                if ("string" == typeof t) return t;
                if ("Array" === O.util.type(t)) return t.map(function(e) {
                    return s.stringify(e, a, t)
                }).join("");
                var n = {
                    type: t.type,
                    content: s.stringify(t.content, a, e),
                    tag: "span",
                    classes: ["token", t.type],
                    attributes: {},
                    language: a,
                    parent: e
                };
                if (t.alias) {
                    var r = "Array" === O.util.type(t.alias) ? t.alias : [t.alias];
                    Array.prototype.push.apply(n.classes, r)
                }
                O.hooks.run("wrap", n);
                var i = Object.keys(n.attributes).map(function(e) {
                    return e + '="' + (n.attributes[e] || "").replace(/"/g, "&quot;") + '"'
                }).join(" ");
                return "<" + n.tag + ' class="' + n.classes.join(" ") + '"' + (i ? " " + i : "") + ">" + n.content + "</" + n.tag + ">"
            }, !_self.document) return _self.addEventListener && (O.disableWorkerMessageHandler || _self.addEventListener("message", function(e) {
            var t = JSON.parse(e.data),
                a = t.language,
                n = t.code,
                r = t.immediateClose;
            _self.postMessage(O.highlight(n, O.languages[a], a)), r && _self.close()
        }, !1)), _self.Prism;
        var e = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
        return e && (O.filename = e.src, O.manual || e.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(O.highlightAll) : window.setTimeout(O.highlightAll, 16) : document.addEventListener("DOMContentLoaded", O.highlightAll))), _self.Prism
    }();
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: /<!DOCTYPE[\s\S]+?>/i,
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
        greedy: !0,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/i,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[^\s>\/:]+:/
                }
            },
            "attr-value": {
                pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
                inside: {
                    punctuation: [/^=/, {
                        pattern: /(^|[^\\])["']/,
                        lookbehind: !0
                    }]
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    namespace: /^[^\s>\/:]+:/
                }
            }
        }
    },
    entity: /&#?[\da-z]{1,8};/i
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function(e) {
    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
        pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
        inside: {
            rule: /@[\w-]+/
        }
    },
    url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    selector: /[^{}\s][^{};]*?(?=\s*\{)/,
    string: {
        pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    important: /\B!important\b/i,
    function: /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:]/
}, Prism.languages.css.atrule.inside.rest = Prism.languages.css, Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
    style: {
        pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
        lookbehind: !0,
        inside: Prism.languages.css,
        alias: "language-css",
        greedy: !0
    }
}), Prism.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
        pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
        inside: {
            "attr-name": {
                pattern: /^\s*style/i,
                inside: Prism.languages.markup.tag.inside
            },
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            "attr-value": {
                pattern: /.+/i,
                inside: Prism.languages.css
            }
        },
        alias: "language-css"
    }
}, Prism.languages.markup.tag)), Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
    }],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /[.\\]/
        }
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /[a-z0-9_]+(?=\()/i,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
    number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
    operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
}), Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
        lookbehind: !0,
        greedy: !0
    },
    "function-variable": {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
        alias: "function"
    },
    constant: /\b[A-Z][A-Z\d_]*\b/
}), Prism.languages.insertBefore("javascript", "string", {
    "template-string": {
        pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /\${[^}]+}/,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\${|}$/,
                        alias: "punctuation"
                    },
                    rest: null
                }
            },
            string: /[\s\S]+/
        }
    }
}), Prism.languages.javascript["template-string"].inside.interpolation.inside.rest = Prism.languages.javascript, Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    script: {
        pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript,
        alias: "language-javascript",
        greedy: !0
    }
}), Prism.languages.js = Prism.languages.javascript, "undefined" != typeof self && self.Prism && self.document && document.querySelector && (self.Prism.fileHighlight = function() {
    var o = {
        js: "javascript",
        py: "python",
        rb: "ruby",
        ps1: "powershell",
        psm1: "powershell",
        sh: "bash",
        bat: "batch",
        h: "c",
        tex: "latex"
    };
    Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(e) {
        for (var t, a = e.getAttribute("data-src"), n = e, r = /\blang(?:uage)?-([\w-]+)\b/i; n && !r.test(n.className);) n = n.parentNode;
        if (n && (t = (e.className.match(r) || [, ""])[1]), !t) {
            var i = (a.match(/\.(\w+)$/) || [, ""])[1];
            t = o[i] || i
        }
        var s = document.createElement("code");
        s.className = "language-" + t, e.textContent = "", s.textContent = "Loading…", e.appendChild(s);
        var l = new XMLHttpRequest;
        l.open("GET", a, !0), l.onreadystatechange = function() {
            4 == l.readyState && (l.status < 400 && l.responseText ? (s.textContent = l.responseText, Prism.highlightElement(s)) : 400 <= l.status ? s.textContent = "✖ Error " + l.status + " while fetching file: " + l.statusText : s.textContent = "✖ Error: File does not exist or is empty")
        }, l.send(null)
    }), Prism.plugins.toolbar && Prism.plugins.toolbar.registerButton("download-file", function(e) {
        var t = e.element.parentNode;
        if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-src") && t.hasAttribute("data-download-link")) {
            var a = t.getAttribute("data-src"),
                n = document.createElement("a");
            return n.textContent = t.getAttribute("data-download-link-label") || "Download", n.setAttribute("download", ""), n.href = a, n
        }
    })
}, document.addEventListener("DOMContentLoaded", self.Prism.fileHighlight));
! function(e, n) {
    "function" == typeof define && define.amd ? define(n) : "object" == typeof exports ? module.exports = n() : e.NProgress = n()
}(this, function() {
    var n, t, o = {
            version: "0.2.0"
        },
        a = o.settings = {
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

    function u(e, n, t) {
        return e < n ? n : t < e ? t : e
    }

    function c(e) {
        return 100 * (-1 + e)
    }
    o.configure = function(e) {
        var n, t;
        for (n in e) void 0 !== (t = e[n]) && e.hasOwnProperty(n) && (a[n] = t);
        return this
    }, o.status = null, o.set = function(n) {
        var e = o.isStarted();
        n = u(n, a.minimum, 1), o.status = 1 === n ? null : n;
        var t = o.render(!e),
            r = t.querySelector(a.barSelector),
            i = a.speed,
            s = a.easing;
        return t.offsetWidth, l(function(e) {
            "" === a.positionUsing && (a.positionUsing = o.getPositioningCSS()), f(r, function(e, n, t) {
                var r;
                r = "translate3d" === a.positionUsing ? {
                    transform: "translate3d(" + c(e) + "%,0,0)"
                } : "translate" === a.positionUsing ? {
                    transform: "translate(" + c(e) + "%,0)"
                } : {
                    "margin-left": c(e) + "%"
                };
                return r.transition = "all " + n + "ms " + t, r
            }(n, i, s)), 1 === n ? (f(t, {
                transition: "none",
                opacity: 1
            }), t.offsetWidth, setTimeout(function() {
                f(t, {
                    transition: "all " + i + "ms linear",
                    opacity: 0
                }), setTimeout(function() {
                    o.remove(), e()
                }, i)
            }, i)) : setTimeout(e, i)
        }), this
    }, o.isStarted = function() {
        return "number" == typeof o.status
    }, o.start = function() {
        o.status || o.set(0);
        var e = function() {
            setTimeout(function() {
                o.status && (o.trickle(), e())
            }, a.trickleSpeed)
        };
        return a.trickle && e(), this
    }, o.done = function(e) {
        return e || o.status ? o.inc(.3 + .5 * Math.random()).set(1) : this
    }, o.inc = function(e) {
        var n = o.status;
        return n ? ("number" != typeof e && (e = (1 - n) * u(Math.random() * n, .1, .95)), n = u(n + e, 0, .994), o.set(n)) : o.start()
    }, o.trickle = function() {
        return o.inc(Math.random() * a.trickleRate)
    }, t = n = 0, o.promise = function(e) {
        return e && "resolved" !== e.state() && (0 === t && o.start(), n++, t++, e.always(function() {
            0 == --t ? (n = 0, o.done()) : o.set((n - t) / n)
        })), this
    }, o.render = function(e) {
        if (o.isRendered()) return document.getElementById("nprogress");
        d(document.documentElement, "nprogress-busy");
        var n = document.createElement("div");
        n.id = "nprogress", n.innerHTML = a.template;
        var t, r = n.querySelector(a.barSelector),
            i = e ? "-100" : c(o.status || 0),
            s = document.querySelector(a.parent);
        return f(r, {
            transition: "all 0 linear",
            transform: "translate3d(" + i + "%,0,0)"
        }), a.showSpinner || (t = n.querySelector(a.spinnerSelector)) && m(t), s != document.body && d(s, "nprogress-custom-parent"), s.appendChild(n), n
    }, o.remove = function() {
        r(document.documentElement, "nprogress-busy"), r(document.querySelector(a.parent), "nprogress-custom-parent");
        var e = document.getElementById("nprogress");
        e && m(e)
    }, o.isRendered = function() {
        return !!document.getElementById("nprogress")
    }, o.getPositioningCSS = function() {
        var e = document.body.style,
            n = "WebkitTransform" in e ? "Webkit" : "MozTransform" in e ? "Moz" : "msTransform" in e ? "ms" : "OTransform" in e ? "O" : "";
        return n + "Perspective" in e ? "translate3d" : n + "Transform" in e ? "translate" : "margin"
    };
    var l = function() {
            var n = [];

            function t() {
                var e = n.shift();
                e && e(t)
            }
            return function(e) {
                n.push(e), 1 == n.length && t()
            }
        }(),
        f = function() {
            var s = ["Webkit", "O", "Moz", "ms"],
                n = {};

            function r(e) {
                return e = e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(e, n) {
                    return n.toUpperCase()
                }), n[e] || (n[e] = function(e) {
                    var n = document.body.style;
                    if (e in n) return e;
                    for (var t, r = s.length, i = e.charAt(0).toUpperCase() + e.slice(1); r--;)
                        if ((t = s[r] + i) in n) return t;
                    return e
                }(e))
            }

            function o(e, n, t) {
                n = r(n), e.style[n] = t
            }
            return function(e, n) {
                var t, r, i = arguments;
                if (2 == i.length)
                    for (t in n) void 0 !== (r = n[t]) && n.hasOwnProperty(t) && o(e, t, r);
                else o(e, i[1], i[2])
            }
        }();

    function i(e, n) {
        return 0 <= ("string" == typeof e ? e : s(e)).indexOf(" " + n + " ")
    }

    function d(e, n) {
        var t = s(e),
            r = t + n;
        i(t, n) || (e.className = r.substring(1))
    }

    function r(e, n) {
        var t, r = s(e);
        i(e, n) && (t = r.replace(" " + n + " ", " "), e.className = t.substring(1, t.length - 1))
    }

    function s(e) {
        return (" " + (e.className || "") + " ").replace(/\s+/gi, " ")
    }

    function m(e) {
        e && e.parentNode && e.parentNode.removeChild(e)
    }
    return o
});
! function(y) {
    "use strict";

    function b(t) {
        var e, i, s = [];
        if ("number" == typeof t) s.push(t);
        else {
            i = t.split(",");
            for (var n = 0; n < i.length; n++)
                if (2 === (e = i[n].split("-")).length)
                    for (var a = parseInt(e[0], 10); a <= e[1]; a++) s.push(a);
                else 1 === e.length && s.push(parseInt(e[0], 10))
        }
        return s
    }
    var v = {};
    y.fn.gist = function(p) {
        return this.each(function() {
            function e(t) {
                var e, i, s, n, a;
                t && t.div ? (t.stylesheet && (0 === t.stylesheet.indexOf("<link") ? t.stylesheet = t.stylesheet.replace(/\\/g, "").match(/href=\"([^\s]*)\"/)[1] : 0 !== t.stylesheet.indexOf("http") && (0 !== t.stylesheet.indexOf("/") && (t.stylesheet = "/" + t.stylesheet), t.stylesheet = "https://gist.github.com" + t.stylesheet)), t.stylesheet && 0 === y('link[href="' + t.stylesheet + '"]').length && (e = document.createElement("link"), i = document.getElementsByTagName("head")[0], e.type = "text/css", e.rel = "stylesheet", e.href = t.stylesheet, i.insertBefore(e, i.firstChild)), (a = y(t.div)).removeAttr("id"), u.html("").append(a), r && (n = b(r), a.find("td.line-data").css({
                    width: "100%"
                }), a.find(".js-file-line").each(function(t) {
                    -1 !== y.inArray(t + 1, n) && y(this).css({
                        "background-color": "rgb(255, 255, 204)"
                    })
                })), o && (s = b(o), a.find(".js-file-line").each(function(t) {
                    -1 === y.inArray(t + 1, s) && y(this).parent().remove()
                })), d && (a.find(".gist-meta").remove(), a.find(".gist-data").css("border-bottom", "0px"), a.find(".gist-file").css("border-bottom", "1px solid #ddd")), h && a.find(".js-line-number").remove()) : u.html("Failed loading gist " + l)
            }

            function i(t) {
                u.html("Failed loading gist " + l + ": " + t)
            }

            function s() {
                "function" == typeof p && p()
            }
            var t, l, n, o, a, r, d, h, f, c, g, u = y(this),
                m = {};
            return u.css("display", "block"), t = u.data("gist-id") || "", n = u.data("gist-file"), d = !0 === u.data("gist-hide-footer"), h = !0 === u.data("gist-hide-line-numbers"), o = u.data("gist-line"), r = u.data("gist-highlight-line"), f = !(c = !0 === u.data("gist-show-spinner")) && (void 0 === u.data("gist-show-loading") || u.data("gist-show-loading")), n && (m.file = n), !!t && (l = "https://gist.github.com/" + t + ".json", g = !0 === u.data("gist-enable-cache") || v[l], a = "Loading gist " + l + (m.file ? ", file: " + m.file : "") + "...", f && u.html(a), c && u.html('<img style="display:block;margin-left:auto;margin-right:auto"  alt="' + a + '" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif">'), void y.ajax({
                url: l,
                data: m,
                dataType: "jsonp",
                timeout: 2e4,
                beforeSend: function() {
                    if (g) {
                        if (v[l]) return v[l].then(function(t) {
                            e(t), s()
                        }, function(t) {
                            i(t)
                        }), !1;
                        v[l] = y.Deferred()
                    }
                },
                success: function(t) {
                    g && v[l] && v[l].resolve(t), e(t)
                },
                error: function(t, e) {
                    i(e)
                },
                complete: function() {
                    s()
                }
            }))
        })
    }, y(function() {
        y("[data-gist-id]").gist()
    })
}(jQuery);
! function(st) {
    "use strict";

    function t(t) {
        if (!dt(t)) return Hn;
        $t(t.objectMaxDepth) && (Hn.objectMaxDepth = u(t.objectMaxDepth) ? t.objectMaxDepth : NaN)
    }

    function u(t) {
        return p(t) && 0 < t
    }

    function S(r, i) {
        return i = i || Error,
            function() {
                var t, e = arguments[0];
                for (t = "[" + (r ? r + ":" : "") + e + "] http://errors.angularjs.org/1.6.9/" + (r ? r + "/" : "") + e, e = 1; e < arguments.length; e++) {
                    var n;
                    t = t + (1 == e ? "?" : "&") + "p" + (e - 1) + "=", t += encodeURIComponent(n = "function" == typeof(n = arguments[e]) ? n.toString().replace(/ \{[\s\S]*$/, "") : void 0 === n ? "undefined" : "string" != typeof n ? JSON.stringify(n) : n)
                }
                return new i(t)
            }
    }

    function O(t) {
        if (null == t || d(t)) return !1;
        if (ar(t) || mt(t) || qn && t instanceof qn) return !0;
        var e = "length" in Object(t) && t.length;
        return p(e) && (0 <= e && (e - 1 in t || t instanceof Array) || "function" == typeof t.item)
    }

    function ut(t, e, n) {
        var r, i;
        if (t)
            if (gt(t))
                for (r in t) "prototype" !== r && "length" !== r && "name" !== r && t.hasOwnProperty(r) && e.call(n, t[r], r, t);
            else if (ar(t) || O(t)) {
            var o = "object" != typeof t;
            for (r = 0, i = t.length; r < i; r++)(o || r in t) && e.call(n, t[r], r, t)
        } else if (t.forEach && t.forEach !== ut) t.forEach(e, n, t);
        else if (c(t))
            for (r in t) e.call(n, t[r], r, t);
        else if ("function" == typeof t.hasOwnProperty)
            for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t);
        else
            for (r in t) Wn.call(t, r) && e.call(n, t[r], r, t);
        return t
    }

    function o(t, e, n) {
        for (var r = Object.keys(t).sort(), i = 0; i < r.length; i++) e.call(n, t[r[i]], r[i]);
        return r
    }

    function v(n) {
        return function(t, e) {
            n(e, t)
        }
    }

    function h(t, e, n) {
        for (var r = t.$$hashKey, i = 0, o = e.length; i < o; ++i) {
            var a = e[i];
            if (dt(a) || gt(a))
                for (var s = Object.keys(a), u = 0, c = s.length; u < c; u++) {
                    var l = s[u],
                        f = a[l];
                    n && dt(f) ? g(f) ? t[l] = new Date(f.valueOf()) : $(f) ? t[l] = new RegExp(f) : f.nodeName ? t[l] = f.cloneNode(!0) : m(f) ? t[l] = f.clone() : (dt(t[l]) || (t[l] = ar(f) ? [] : {}), h(t[l], [f], !0)) : t[l] = f
                }
        }
        return r ? t.$$hashKey = r : delete t.$$hashKey, t
    }

    function ct(t) {
        return h(t, Jn.call(arguments, 1), !1)
    }

    function e(t) {
        return h(t, Jn.call(arguments, 1), !0)
    }

    function l(t) {
        return parseInt(t, 10)
    }

    function lt(t, e) {
        return ct(Object.create(t), e)
    }

    function ft() {}

    function ht(t) {
        return t
    }

    function C(t) {
        return function() {
            return t
        }
    }

    function f(t) {
        return gt(t.toString) && t.toString !== Qn
    }

    function pt(t) {
        return void 0 === t
    }

    function $t(t) {
        return void 0 !== t
    }

    function dt(t) {
        return null !== t && "object" == typeof t
    }

    function c(t) {
        return null !== t && "object" == typeof t && !Xn(t)
    }

    function mt(t) {
        return "string" == typeof t
    }

    function p(t) {
        return "number" == typeof t
    }

    function g(t) {
        return "[object Date]" === Qn.call(t)
    }

    function vt(t) {
        switch (Qn.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return t instanceof Error
        }
    }

    function gt(t) {
        return "function" == typeof t
    }

    function $(t) {
        return "[object RegExp]" === Qn.call(t)
    }

    function d(t) {
        return t && t.window === t
    }

    function yt(t) {
        return t && t.$evalAsync && t.$watch
    }

    function bt(t) {
        return "boolean" == typeof t
    }

    function m(t) {
        return !(!t || !(t.nodeName || t.prop && t.attr && t.find))
    }

    function wt(t) {
        return Gn(t.nodeName || t[0] && t[0].nodeName)
    }

    function xt(t, e) {
        var n = t.indexOf(e);
        return 0 <= n && t.splice(n, 1), n
    }

    function E(t, n, e) {
        function i(t, e, n) {
            if (--n < 0) return "...";
            var r, i = e.$$hashKey;
            if (ar(t)) {
                r = 0;
                for (var o = t.length; r < o; r++) e.push(a(t[r], n))
            } else if (c(t))
                for (r in t) e[r] = a(t[r], n);
            else if (t && "function" == typeof t.hasOwnProperty)
                for (r in t) t.hasOwnProperty(r) && (e[r] = a(t[r], n));
            else
                for (r in t) Wn.call(t, r) && (e[r] = a(t[r], n));
            return i ? e.$$hashKey = i : delete e.$$hashKey, e
        }

        function a(t, e) {
            if (!dt(t)) return t;
            if (-1 !== (n = o.indexOf(t))) return s[n];
            if (d(t) || yt(t)) throw tr("cpws");
            var n = !1,
                r = function(t) {
                    switch (Qn.call(t)) {
                        case "[object Int8Array]":
                        case "[object Int16Array]":
                        case "[object Int32Array]":
                        case "[object Float32Array]":
                        case "[object Float64Array]":
                        case "[object Uint8Array]":
                        case "[object Uint8ClampedArray]":
                        case "[object Uint16Array]":
                        case "[object Uint32Array]":
                            return new t.constructor(a(t.buffer), t.byteOffset, t.length);
                        case "[object ArrayBuffer]":
                            if (!t.slice) {
                                var e = new ArrayBuffer(t.byteLength);
                                return new Uint8Array(e).set(new Uint8Array(t)), e
                            }
                            return t.slice(0);
                        case "[object Boolean]":
                        case "[object Number]":
                        case "[object String]":
                        case "[object Date]":
                            return new t.constructor(t.valueOf());
                        case "[object RegExp]":
                            return (e = new RegExp(t.source, t.toString().match(/[^/]*$/)[0])).lastIndex = t.lastIndex, e;
                        case "[object Blob]":
                            return new t.constructor([t], {
                                type: t.type
                            })
                    }
                    if (gt(t.cloneNode)) return t.cloneNode(!0)
                }(t);
            return void 0 === r && (r = ar(t) ? [] : Object.create(Xn(t)), n = !0), o.push(t), s.push(r), n ? i(t, r, e) : r
        }
        var r, o = [],
            s = [];
        if (e = u(e) ? e : NaN, n) {
            if ((r = n) && p(r.length) && sr.test(Qn.call(r)) || "[object ArrayBuffer]" === Qn.call(n)) throw tr("cpta");
            if (t === n) throw tr("cpi");
            return ar(n) ? n.length = 0 : ut(n, function(t, e) {
                "$$hashKey" !== e && delete n[e]
            }), o.push(t), s.push(n), i(t, n, e)
        }
        return a(t, e)
    }

    function Ct(t, e) {
        return t === e || t != t && e != e
    }

    function St(t, e) {
        if (t === e) return !0;
        if (null === t || null === e) return !1;
        if (t != t && e != e) return !0;
        var n, r = typeof t;
        if (r === typeof e && "object" === r) {
            if (!ar(t)) {
                if (g(t)) return !!g(e) && Ct(t.getTime(), e.getTime());
                if ($(t)) return !!$(e) && t.toString() === e.toString();
                if (yt(t) || yt(e) || d(t) || d(e) || ar(e) || g(e) || $(e)) return !1;
                for (n in r = Mt(), t)
                    if ("$" !== n.charAt(0) && !gt(t[n])) {
                        if (!St(t[n], e[n])) return !1;
                        r[n] = !0
                    }
                for (n in e)
                    if (!(n in r) && "$" !== n.charAt(0) && $t(e[n]) && !gt(e[n])) return !1;
                return !0
            }
            if (!ar(e)) return !1;
            if ((r = t.length) === e.length) {
                for (n = 0; n < r; n++)
                    if (!St(t[n], e[n])) return !1;
                return !0
            }
        }
        return !1
    }

    function k(t, e, n) {
        return t.concat(Jn.call(e, n))
    }

    function Et(t, e) {
        var n = 2 < arguments.length ? Jn.call(arguments, 2) : [];
        return !gt(e) || e instanceof RegExp ? e : n.length ? function() {
            return arguments.length ? e.apply(t, k(n, arguments, 0)) : e.apply(t, n)
        } : function() {
            return arguments.length ? e.apply(t, arguments) : e.call(t)
        }
    }

    function r(t, e) {
        var n = e;
        return "string" == typeof t && "$" === t.charAt(0) && "$" === t.charAt(1) ? n = void 0 : d(e) ? n = "$WINDOW" : e && st.document === e ? n = "$DOCUMENT" : yt(e) && (n = "$SCOPE"), n
    }

    function n(t, e) {
        if (!pt(t)) return p(e) || (e = e ? 2 : null), JSON.stringify(t, r, e)
    }

    function a(t) {
        return mt(t) ? JSON.parse(t) : t
    }

    function y(t, e) {
        t = t.replace(hr, "");
        var n = Date.parse("Jan 01, 1970 00:00:00 " + t) / 6e4;
        return rr(n) ? e : n
    }

    function b(t, e, n) {
        n = n ? -1 : 1;
        var r = t.getTimezoneOffset();
        return n *= (e = y(e, r)) - r, (t = new Date(t.getTime())).setMinutes(t.getMinutes() + n), t
    }

    function kt(t) {
        t = qn(t).clone().empty();
        var e = qn("<div>").append(t).html();
        try {
            return t[0].nodeType === vr ? Gn(e) : e.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function(t, e) {
                return "<" + Gn(e)
            })
        } catch (t) {
            return Gn(e)
        }
    }

    function s(t) {
        try {
            return decodeURIComponent(t)
        } catch (t) {}
    }

    function A(t) {
        var i = {};
        return ut((t || "").split("&"), function(t) {
            var e, n, r;
            t && (n = t = t.replace(/\+/g, "%20"), -1 !== (e = t.indexOf("=")) && (n = t.substring(0, e), r = t.substring(e + 1)), $t(n = s(n)) && (r = !$t(r) || s(r), Wn.call(i, n) ? ar(i[n]) ? i[n].push(r) : i[n] = [i[n], r] : i[n] = r))
        }), i
    }

    function w(t) {
        var n = [];
        return ut(t, function(t, e) {
            ar(t) ? ut(t, function(t) {
                n.push(M(e, !0) + (!0 === t ? "" : "=" + M(t, !0)))
            }) : n.push(M(e, !0) + (!0 === t ? "" : "=" + M(t, !0)))
        }), n.length ? n.join("&") : ""
    }

    function x(t) {
        return M(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function M(t, e) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, e ? "%20" : "+")
    }

    function i(n, t) {
        var r, i, e = {};
        ut(pr, function(t) {
            t += "app", !r && n.hasAttribute && n.hasAttribute(t) && (i = (r = n).getAttribute(t))
        }), ut(pr, function(t) {
            var e;
            t += "app", !r && (e = n.querySelector("[" + t.replace(":", "\\:") + "]")) && (i = (r = e).getAttribute(t))
        }), r && ($r ? (e.strictDi = null !== function(t, e) {
            var n, r, i = pr.length;
            for (r = 0; r < i; ++r)
                if (n = pr[r] + e, mt(n = t.getAttribute(n))) return n;
            return null
        }(r, "strict-di"), t(r, i ? [i] : [], e)) : st.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))
    }

    function V(e, n, r) {
        dt(r) || (r = {}), r = ct({
            strictDi: !1
        }, r);
        var i = function() {
                if ((e = qn(e)).injector()) {
                    var t = e[0] === st.document ? "document" : kt(e);
                    throw tr("btstrpd", t.replace(/</, "&lt;").replace(/>/, "&gt;"))
                }
                return (n = n || []).unshift(["$provide", function(t) {
                    t.value("$rootElement", e)
                }]), r.debugInfoEnabled && n.push(["$compileProvider", function(t) {
                    t.debugInfoEnabled(!0)
                }]), n.unshift("ng"), (t = Pt(n, r.strictDi)).invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(t, e, n, r) {
                    t.$apply(function() {
                        e.data("$injector", r), n(e)(t)
                    })
                }]), t
            },
            t = /^NG_ENABLE_DEBUG_INFO!/,
            o = /^NG_DEFER_BOOTSTRAP!/;
        if (st && t.test(st.name) && (r.debugInfoEnabled = !0, st.name = st.name.replace(t, "")), st && !o.test(st.name)) return i();
        st.name = st.name.replace(o, ""), er.resumeBootstrap = function(t) {
            return ut(t, function(t) {
                n.push(t)
            }), i()
        }, gt(er.resumeDeferredBootstrap) && er.resumeDeferredBootstrap()
    }

    function T() {
        st.name = "NG_ENABLE_DEBUG_INFO!" + st.name, st.location.reload()
    }

    function N(t) {
        if (!(t = er.element(t).injector())) throw tr("test");
        return t.get("$$testability")
    }

    function At(t, n) {
        return n = n || "_", t.replace(dr, function(t, e) {
            return (e ? n : "") + t.toLowerCase()
        })
    }

    function Ot(t, e, n) {
        if (!t) throw tr("areq", e || "?", n || "required");
        return t
    }

    function I(t, e, n) {
        return n && ar(t) && (t = t[t.length - 1]), Ot(gt(t), e, "not a function, got " + (t && "object" == typeof t ? t.constructor.name || "Object" : typeof t)), t
    }

    function _(t, e) {
        if ("hasOwnProperty" === t) throw tr("badname", e)
    }

    function j(t, e, n) {
        if (!e) return t;
        for (var r, i = t, o = (e = e.split(".")).length, a = 0; a < o; a++) r = e[a], t && (t = (i = t)[r]);
        return !n && gt(t) ? Et(i, t) : t
    }

    function D(t) {
        for (var e, n = t[0], r = t[t.length - 1], i = 1; n !== r && (n = n.nextSibling); i++)(e || t[i] !== n) && (e || (e = qn(Jn.call(t, 0, i))), e.push(n));
        return e || t
    }

    function Mt() {
        return Object.create(null)
    }

    function P(t) {
        if (null == t) return "";
        switch (typeof t) {
            case "string":
                break;
            case "number":
                t = "" + t;
                break;
            default:
                t = !f(t) || ar(t) || g(t) ? n(t) : t.toString()
        }
        return t
    }

    function U(t, e) {
        if (ar(t)) {
            e = e || [];
            for (var n = 0, r = t.length; n < r; n++) e[n] = t[n]
        } else if (dt(t))
            for (n in e = e || {}, t) "$" === n.charAt(0) && "$" === n.charAt(1) || (e[n] = t[n]);
        return e || t
    }

    function R(t, e) {
        var n = [];
        return u(e) && (t = er.copy(t, null, e)), JSON.stringify(t, function(t, e) {
            if (dt(e = r(t, e))) {
                if (0 <= n.indexOf(e)) return "...";
                n.push(e)
            }
            return e
        })
    }

    function L(t, e) {
        return e.toUpperCase()
    }

    function q(t) {
        return t.replace(wr, L)
    }

    function F(t) {
        return 1 === (t = t.nodeType) || !t || 9 === t
    }

    function B(t, e) {
        var n, r, i = e.createDocumentFragment(),
            o = [];
        if (kr.test(t)) {
            for (n = i.appendChild(e.createElement("div")), r = (Ar.exec(t) || ["", ""])[1].toLowerCase(), r = Mr[r] || Mr._default, n.innerHTML = r[1] + t.replace(Or, "<$1></$2>") + r[2], r = r[0]; r--;) n = n.lastChild;
            o = k(o, n.childNodes), (n = i.firstChild).textContent = ""
        } else o.push(e.createTextNode(t));
        return i.textContent = "", i.innerHTML = "", ut(o, function(t) {
            i.appendChild(t)
        }), i
    }

    function H(t) {
        if (t instanceof H) return t;
        var e, n;
        if (mt(t) && (t = ur(t), e = !0), !(this instanceof H)) {
            if (e && "<" !== t.charAt(0)) throw Sr("nosel");
            return new H(t)
        }
        e ? (e = st.document, X(this, t = (n = Er.exec(t)) ? [e.createElement(n[1])] : (n = B(t, e)) ? n.childNodes : [])) : gt(t) ? it(t) : X(this, t)
    }

    function Vt(t) {
        return t.cloneNode(!0)
    }

    function z(t, e) {
        !e && F(t) && qn.cleanData([t]), t.querySelectorAll && qn.cleanData(t.querySelectorAll("*"))
    }

    function W(n, t, r, e) {
        if ($t(e)) throw Sr("offargs");
        var i = (e = K(n)) && e.events,
            o = e && e.handle;
        if (o)
            if (t) {
                var a = function(t) {
                    var e = i[t];
                    $t(r) && xt(e || [], r), $t(r) && e && 0 < e.length || (n.removeEventListener(t, o), delete i[t])
                };
                ut(t.split(" "), function(t) {
                    a(t), Cr[t] && a(Cr[t])
                })
            } else
                for (t in i) "$destroy" !== t && n.removeEventListener(t, o), delete i[t]
    }

    function G(t, e) {
        var n = t.ng339,
            r = n && yr[n];
        r && (e ? delete r.data[e] : (r.handle && (r.events.$destroy && r.handle({}, "$destroy"), W(t)), delete yr[n], t.ng339 = void 0))
    }

    function K(t, e) {
        var n = (n = t.ng339) && yr[n];
        return e && !n && (t.ng339 = n = ++br, n = yr[n] = {
            events: {},
            data: {},
            handle: void 0
        }), n
    }

    function J(t, e, n) {
        if (F(t)) {
            var r, i = $t(n),
                o = !i && e && !dt(e),
                a = !e;
            if (t = (t = K(t, !o)) && t.data, i) t[q(e)] = n;
            else {
                if (a) return t;
                if (o) return t && t[q(e)];
                for (r in e) t[q(r)] = e[r]
            }
        }
    }

    function Z(t, e) {
        return !!t.getAttribute && -1 < (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ")
    }

    function Y(t, e) {
        if (e && t.setAttribute) {
            var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "),
                r = n;
            ut(e.split(" "), function(t) {
                t = ur(t), r = r.replace(" " + t + " ", " ")
            }), r !== n && t.setAttribute("class", ur(r))
        }
    }

    function Q(t, e) {
        if (e && t.setAttribute) {
            var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "),
                r = n;
            ut(e.split(" "), function(t) {
                t = ur(t), -1 === r.indexOf(" " + t + " ") && (r += t + " ")
            }), r !== n && t.setAttribute("class", ur(r))
        }
    }

    function X(t, e) {
        if (e)
            if (e.nodeType) t[t.length++] = e;
            else {
                var n = e.length;
                if ("number" == typeof n && e.window !== e) {
                    if (n)
                        for (var r = 0; r < n; r++) t[t.length++] = e[r]
                } else t[t.length++] = e
            }
    }

    function tt(t, e) {
        return et(t, "$" + (e || "ngController") + "Controller")
    }

    function et(t, e, n) {
        for (9 === t.nodeType && (t = t.documentElement), e = ar(e) ? e : [e]; t;) {
            for (var r = 0, i = e.length; r < i; r++)
                if ($t(n = qn.data(t, e[r]))) return n;
            t = t.parentNode || 11 === t.nodeType && t.host
        }
    }

    function nt(t) {
        for (z(t, !0); t.firstChild;) t.removeChild(t.firstChild)
    }

    function rt(t, e) {
        e || z(t);
        var n = t.parentNode;
        n && n.removeChild(t)
    }

    function it(t) {
        function e() {
            st.document.removeEventListener("DOMContentLoaded", e), st.removeEventListener("load", e), t()
        }
        "complete" === st.document.readyState ? st.setTimeout(t) : (st.document.addEventListener("DOMContentLoaded", e), st.addEventListener("load", e))
    }

    function Tt(t, e) {
        var n = Nr[e.toLowerCase()];
        return n && Ir[wt(t)] && n
    }

    function ot(t, e, n) {
        n.call(t, e)
    }

    function at(t, e, n) {
        var r = e.relatedTarget;
        r && (r === t || Vr.call(t, r)) || n.call(t, e)
    }

    function Nt() {
        this.$get = function() {
            return ct(H, {
                hasClass: function(t, e) {
                    return t.attr && (t = t[0]), Z(t, e)
                },
                addClass: function(t, e) {
                    return t.attr && (t = t[0]), Q(t, e)
                },
                removeClass: function(t, e) {
                    return t.attr && (t = t[0]), Y(t, e)
                }
            })
        }
    }

    function It(t, e) {
        var n = t && t.$$hashKey;
        return n ? ("function" == typeof n && (n = t.$$hashKey()), n) : "function" === (n = typeof t) || "object" === n && null !== t ? t.$$hashKey = n + ":" + (e || function() {
            return ++nr
        })() : n + ":" + t
    }

    function jt() {
        this._keys = [], this._values = [], this._lastKey = NaN, this._lastIndex = -1
    }

    function Dt(t) {
        return (t = Function.prototype.toString.call(t).replace(Fr, "")).match(Rr) || t.match(_r)
    }

    function Pt(t, u) {
        function e(n) {
            return function(t, e) {
                if (!dt(t)) return n(t, e);
                ut(t, v(n))
            }
        }

        function o(t, e) {
            if (_(t, "service"), (gt(e) || ar(e)) && (e = f.instantiate(e)), !e.$get) throw Br("pget", t);
            return l[t + "Provider"] = e
        }

        function n(t, e, n) {
            return o(t, {
                $get: !1 !== n ? (r = t, i = e, function() {
                    var t = $.invoke(i, this);
                    if (pt(t)) throw Br("undef", r);
                    return t
                }) : e
            });
            var r, i
        }

        function i(t) {
            Ot(pt(t) || ar(t), "modulesToLoad", "not an array");
            var n, r = [];
            return ut(t, function(e) {
                function t(t) {
                    var e, n;
                    for (e = 0, n = t.length; e < n; e++) {
                        var r = t[e],
                            i = f.get(r[0]);
                        i[r[1]].apply(i, r[2])
                    }
                }
                if (!s.get(e)) {
                    s.set(e, !0);
                    try {
                        mt(e) ? (n = Bn(e), $.modules[e] = n, r = r.concat(i(n.requires)).concat(n._runBlocks), t(n._invokeQueue), t(n._configBlocks)) : gt(e) ? r.push(f.invoke(e)) : ar(e) ? r.push(f.invoke(e)) : I(e, "module")
                    } catch (t) {
                        throw ar(e) && (e = e[e.length - 1]), t.message && t.stack && -1 === t.stack.indexOf(t.message) && (t = t.message + "\n" + t.stack), Br("modulerr", e, t.stack || t.message || t)
                    }
                }
            }), r
        }

        function r(n, r) {
            function s(e, t) {
                if (n.hasOwnProperty(e)) {
                    if (n[e] === a) throw Br("cdep", e + " <- " + c.join(" <- "));
                    return n[e]
                }
                try {
                    return c.unshift(e), n[e] = a, n[e] = r(e, t), n[e]
                } catch (t) {
                    throw n[e] === a && delete n[e], t
                } finally {
                    c.shift()
                }
            }

            function o(t, e, n) {
                for (var r = [], i = 0, o = (t = Pt.$$annotate(t, u, n)).length; i < o; i++) {
                    var a = t[i];
                    if ("string" != typeof a) throw Br("itkn", a);
                    r.push(e && e.hasOwnProperty(a) ? e[a] : s(a, n))
                }
                return r
            }
            return {
                invoke: function(t, e, n, r) {
                    if ("string" == typeof n && (r = n, n = null), n = o(t, n, r), ar(t) && (t = t[t.length - 1]), r = t, Ln || "function" != typeof r) r = !1;
                    else {
                        var i = r.$$ngIsClass;
                        bt(i) || (i = r.$$ngIsClass = /^(?:class\b|constructor\()/.test(Function.prototype.toString.call(r))), r = i
                    }
                    return r ? (n.unshift(null), new(Function.prototype.bind.apply(t, n))) : t.apply(e, n)
                },
                instantiate: function(t, e, n) {
                    var r = ar(t) ? t[t.length - 1] : t;
                    return (t = o(t, e, n)).unshift(null), new(Function.prototype.bind.apply(r, t))
                },
                get: s,
                annotate: Pt.$$annotate,
                has: function(t) {
                    return l.hasOwnProperty(t + "Provider") || n.hasOwnProperty(t)
                }
            }
        }
        u = !0 === u;
        var a = {},
            c = [],
            s = new Pr,
            l = {
                $provide: {
                    provider: e(o),
                    factory: e(n),
                    service: e(function(t, e) {
                        return n(t, ["$injector", function(t) {
                            return t.instantiate(e)
                        }])
                    }),
                    value: e(function(t, e) {
                        return n(t, C(e), !1)
                    }),
                    constant: e(function(t, e) {
                        _(t, "constant"), l[t] = e, h[t] = e
                    }),
                    decorator: function(t, e) {
                        var n = f.get(t + "Provider"),
                            r = n.$get;
                        n.$get = function() {
                            var t = $.invoke(r, n);
                            return $.invoke(e, null, {
                                $delegate: t
                            })
                        }
                    }
                }
            },
            f = l.$injector = r(l, function(t, e) {
                throw er.isString(e) && c.push(e), Br("unpr", c.join(" <- "))
            }),
            h = {},
            p = r(h, function(t, e) {
                var n = f.get(t + "Provider", e);
                return $.invoke(n.$get, n, void 0, t)
            }),
            $ = p;
        l.$injectorProvider = {
            $get: C(p)
        }, $.modules = f.modules = Mt();
        var d = i(t);
        return ($ = p.get("$injector")).strictDi = u, ut(d, function(t) {
            t && $.invoke(t)
        }), $.loadNewModules = function(t) {
            ut(i(t), function(t) {
                t && $.invoke(t)
            })
        }, $
    }

    function Ut() {
        var t = !0;
        this.disableAutoScrolling = function() {
            t = !1
        }, this.$get = ["$window", "$location", "$rootScope", function(n, i, o) {
            function a(t) {
                var e;
                t ? (t.scrollIntoView(), gt(e = s.yOffset) ? e = e() : m(e) ? (e = e[0], e = "fixed" !== n.getComputedStyle(e).position ? 0 : e.getBoundingClientRect().bottom) : p(e) || (e = 0), e && (t = t.getBoundingClientRect().top, n.scrollBy(0, t - e))) : n.scrollTo(0, 0)
            }

            function s(t) {
                var e, n, r;
                (t = mt(t) ? t : p(t) ? t.toString() : i.hash()) ? (e = u.getElementById(t)) ? a(e): (n = u.getElementsByName(t), r = null, Array.prototype.some.call(n, function(t) {
                    if ("a" === wt(t)) return r = t, !0
                }), (e = r) ? a(e) : "top" === t && a(null)): a(null)
            }
            var u = n.document;
            return t && o.$watch(function() {
                return i.hash()
            }, function(t, e) {
                var n, r;
                t === e && "" === t || (n = function() {
                    o.$evalAsync(s)
                }, "complete" === (r = r || st).document.readyState ? r.setTimeout(n) : qn(r).on("load", n))
            }), s
        }]
    }

    function Rt(t, e) {
        return t || e ? t ? e ? (ar(t) && (t = t.join(" ")), ar(e) && (e = e.join(" ")), t + " " + e) : t : e : ""
    }

    function _t(t) {
        return dt(t) ? t : {}
    }

    function Lt(o, t, e, a) {
        function r(t) {
            try {
                t.apply(null, Jn.call(arguments, 1))
            } finally {
                if (0 === --$)
                    for (; d.length;) try {
                        d.pop()()
                    } catch (t) {
                        e.error(t)
                    }
            }
        }

        function n() {
            b = null, i()
        }

        function s() {
            St(m = pt(m = w()) ? null : m, S) && (m = S), v = S = m
        }

        function i() {
            var t = v;
            s(), g === u.url() && t === m || (g = u.url(), v = m, ut(x, function(t) {
                t(u.url(), m)
            }))
        }
        var u = this,
            c = o.location,
            l = o.history,
            f = o.setTimeout,
            h = o.clearTimeout,
            p = {};
        u.isMock = !1;
        var $ = 0,
            d = [];
        u.$$completeOutstandingRequest = r, u.$$incOutstandingRequestCount = function() {
            $++
        }, u.notifyWhenNoOutstandingRequests = function(t) {
            0 === $ ? t() : d.push(t)
        };
        var m, v, g = c.href,
            y = t.find("base"),
            b = null,
            w = a.history ? function() {
                try {
                    return l.state
                } catch (t) {}
            } : ft;
        s(), u.url = function(t, e, n) {
            if (pt(n) && (n = null), c !== o.location && (c = o.location), l !== o.history && (l = o.history), t) {
                var r = v === n;
                if (g === t && (!a.history || r)) return u;
                var i = g && me(g) === me(t);
                return g = t, v = n, !a.history || i && r ? (i || (b = t), e ? c.replace(t) : i ? (e = c, n = -1 === (n = t.indexOf("#")) ? "" : t.substr(n), e.hash = n) : c.href = t, c.href !== t && (b = t)) : (l[e ? "replaceState" : "pushState"](n, "", t), s()), b && (b = t), u
            }
            return b || c.href.replace(/%27/g, "'")
        }, u.state = function() {
            return m
        };
        var x = [],
            C = !1,
            S = null;
        u.onUrlChange = function(t) {
            return C || (a.history && qn(o).on("popstate", n), qn(o).on("hashchange", n), C = !0), x.push(t), t
        }, u.$$applicationDestroyed = function() {
            qn(o).off("hashchange popstate", n)
        }, u.$$checkUrlChange = i, u.baseHref = function() {
            var t = y.attr("href");
            return t ? t.replace(/^(https?:)?\/\/[^/]*/, "") : ""
        }, u.defer = function(t, e) {
            var n;
            return $++, n = f(function() {
                delete p[n], r(t)
            }, e || 0), p[n] = !0, n
        }, u.defer.cancel = function(t) {
            return !!p[t] && (delete p[t], h(t), r(ft), !0)
        }
    }

    function qt() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(t, e, n, r) {
            return new Lt(t, r, e, n)
        }]
    }

    function Ft() {
        this.$get = function() {
            function t(t, e) {
                function n(t) {
                    t !== c && (l ? l === t && (l = t.n) : l = t, r(t.n, t.p), r(t, c), (c = t).n = null)
                }

                function r(t, e) {
                    t !== e && (t && (t.p = e), e && (e.n = t))
                }
                if (t in f) throw S("$cacheFactory")("iid", t);
                var i = 0,
                    o = ct({}, e, {
                        id: t
                    }),
                    a = Mt(),
                    s = e && e.capacity || Number.MAX_VALUE,
                    u = Mt(),
                    c = null,
                    l = null;
                return f[t] = {
                    put: function(t, e) {
                        if (!pt(e)) {
                            if (s < Number.MAX_VALUE) n(u[t] || (u[t] = {
                                key: t
                            }));
                            return t in a || i++, a[t] = e, s < i && this.remove(l.key), e
                        }
                    },
                    get: function(t) {
                        if (s < Number.MAX_VALUE) {
                            var e = u[t];
                            if (!e) return;
                            n(e)
                        }
                        return a[t]
                    },
                    remove: function(t) {
                        if (s < Number.MAX_VALUE) {
                            var e = u[t];
                            if (!e) return;
                            e === c && (c = e.p), e === l && (l = e.n), r(e.n, e.p), delete u[t]
                        }
                        t in a && (delete a[t], i--)
                    },
                    removeAll: function() {
                        a = Mt(), i = 0, u = Mt(), c = l = null
                    },
                    destroy: function() {
                        u = o = a = null, delete f[t]
                    },
                    info: function() {
                        return ct({}, o, {
                            size: i
                        })
                    }
                }
            }
            var f = {};
            return t.info = function() {
                var n = {};
                return ut(f, function(t, e) {
                    n[e] = t.info()
                }), n
            }, t.get = function(t) {
                return f[t]
            }, t
        }
    }

    function Bt() {
        this.$get = ["$cacheFactory", function(t) {
            return t("templates")
        }]
    }

    function Ht(n, e) {
        function d(t, r, i) {
            var o = /^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/,
                a = Mt();
            return ut(t, function(t, e) {
                if (t in s) a[e] = s[t];
                else {
                    var n = t.match(o);
                    if (!n) throw Yr("iscp", r, e, t, i ? "controller bindings definition" : "isolate scope definition");
                    a[e] = {
                        mode: n[1][0],
                        collection: "*" === n[2],
                        optional: "?" === n[3],
                        attrName: n[4] || e
                    }, n[4] && (s[t] = a[e])
                }
            }), a
        }
        var m = {},
            N = /^\s*directive:\s*([\w-]+)\s+(.*)$/,
            I = /(([\w-]+)(?::([^;]+))?;?)/,
            c = function(t) {
                var e, n = {};
                for (t = t.split(","), e = 0; e < t.length; e++) n[t[e]] = !0;
                return n
            }("ngSrc,ngSrcset,src,srcset"),
            j = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            D = /^(on[a-z]+|formaction)$/,
            s = Mt();
        this.directive = function t(l, e) {
            return Ot(l, "name"), _(l, "directive"), mt(l) ? (function(t) {
                var e = t.charAt(0);
                if (!e || e !== Gn(e)) throw Yr("baddir", t);
                if (t !== t.trim()) throw Yr("baddir", t)
            }(l), Ot(e, "directiveFactory"), m.hasOwnProperty(l) || (m[l] = [], n.factory(l + "Directive", ["$injector", "$exceptionHandler", function(s, u) {
                var c = [];
                return ut(m[l], function(t, e) {
                    try {
                        var n = s.invoke(t);
                        gt(n) ? n = {
                            compile: C(n)
                        } : !n.compile && n.link && (n.compile = C(n.link)), n.priority = n.priority || 0, n.index = e, n.name = n.name || l, n.require = (a = (o = n).require || o.controller && o.name, !ar(a) && dt(a) && ut(a, function(t, e) {
                            var n = t.match(j);
                            t.substring(n[0].length) || (a[e] = n[0] + e)
                        }), a);
                        var r = n,
                            i = n.restrict;
                        if (i && (!mt(i) || !/[EACM]/.test(i))) throw Yr("badrestrict", i, l);
                        r.restrict = i || "EA", n.$$moduleName = t.$$moduleName, c.push(n)
                    } catch (t) {
                        u(t)
                    }
                    var o, a
                }), c
            }])), m[l].push(e)) : ut(l, v(t)), this
        }, this.component = function t(e, i) {
            function n(r) {
                function t(n) {
                    return gt(n) || ar(n) ? function(t, e) {
                        return r.invoke(n, this, {
                            $element: t,
                            $attrs: e
                        })
                    } : n
                }
                var e = i.template || i.templateUrl ? i.template : "",
                    n = {
                        controller: o,
                        controllerAs: function(t, e) {
                            if (e && mt(e)) return e;
                            if (mt(t)) {
                                var n = ni.exec(t);
                                if (n) return n[3]
                            }
                        }(i.controller) || i.controllerAs || "$ctrl",
                        template: t(e),
                        templateUrl: t(i.templateUrl),
                        transclude: i.transclude,
                        scope: {},
                        bindToController: i.bindings || {},
                        restrict: "E",
                        require: i.require
                    };
                return ut(i, function(t, e) {
                    "$" === e.charAt(0) && (n[e] = t)
                }), n
            }
            if (!mt(e)) return ut(e, v(Et(this, t))), this;
            var o = i.controller || function() {};
            return ut(i, function(t, e) {
                "$" === e.charAt(0) && (n[e] = t, gt(o) && (o[e] = t))
            }), n.$inject = ["$injector"], this.directive(e, n)
        }, this.aHrefSanitizationWhitelist = function(t) {
            return $t(t) ? (e.aHrefSanitizationWhitelist(t), this) : e.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function(t) {
            return $t(t) ? (e.imgSrcSanitizationWhitelist(t), this) : e.imgSrcSanitizationWhitelist()
        };
        var P = !0,
            it = !(this.debugInfoEnabled = function(t) {
                return $t(t) ? (P = t, this) : P
            }),
            U = !(this.preAssignBindingsEnabled = function(t) {
                return $t(t) ? (it = t, this) : it
            });
        this.strictComponentBindingsEnabled = function(t) {
            return $t(t) ? (U = t, this) : U
        };
        var R = 10;
        this.onChangesTtl = function(t) {
            return arguments.length ? (R = t, this) : R
        };
        var ot = !0;
        this.commentDirectivesEnabled = function(t) {
            return arguments.length ? (ot = t, this) : ot
        };
        var at = !0;
        this.cssClassDirectivesEnabled = function(t) {
            return arguments.length ? (at = t, this) : at
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function(p, y, _, t, v, L, o, r, i, l) {
            function a() {
                try {
                    if (!--e) throw s = void 0, Yr("infchng", R);
                    o.$apply(function() {
                        for (var e = [], t = 0, n = s.length; t < n; ++t) try {
                            s[t]()
                        } catch (t) {
                            e.push(t)
                        }
                        if (s = void 0, e.length) throw e
                    })
                } finally {
                    e++
                }
            }

            function q(t, e) {
                if (e) {
                    var n, r, i, o = Object.keys(e);
                    for (n = 0, r = o.length; n < r; n++) this[i = o[n]] = e[i]
                } else this.$attr = {};
                this.$$element = t
            }

            function C(t, e) {
                try {
                    t.addClass(e)
                } catch (t) {}
            }

            function F(a, t, e, n, s) {
                a instanceof qn || (a = qn(a));
                var u = S(a, t, a, e, n, s);
                F.$$addScopeClass(a);
                var c = null;
                return function(t, e, n) {
                    if (!a) throw Yr("multilink");
                    Ot(t, "scope"), s && s.needsNewScope && (t = t.$parent.$new());
                    var r = (n = n || {}).parentBoundTranscludeFn,
                        i = n.transcludeControllers;
                    if (n = n.futureParentElement, r && r.$$boundTransclude && (r = r.$$boundTransclude), c || (c = (n = n && n[0]) && "foreignobject" !== wt(n) && Qn.call(n).match(/SVG/) ? "svg" : "html"), n = "html" !== c ? qn(Q(c, qn("<div>").append(a).html())) : e ? Tr.clone.call(a) : a, i)
                        for (var o in i) n.data("$" + o + "Controller", i[o].instance);
                    return F.$$addScopeInfo(n, t), e && e(n, t), u && u(t, n, n, r), e || (a = u = null), n
                }
            }

            function S(t, l, e, n, r, i) {
                for (var o, a, s, u, f, h = [], c = ar(t) || t instanceof qn, p = 0; p < t.length; p++) o = new q, 11 === Ln && $(t, p, c), (i = (a = B(t[p], [], o, 0 === p ? n : void 0, r)).length ? k(a, t[p], o, l, e, null, [], [], i) : null) && i.scope && F.$$addScopeClass(o.$$element), o = i && i.terminal || !(s = t[p].childNodes) || !s.length ? null : S(s, i ? (i.transcludeOnThisElement || !i.templateOnThisElement) && i.transclude : l), (i || o) && (h.push(p, i, o), u = !0, f = f || i), i = null;
                return u ? function(t, e, n, r) {
                    var i, o, a, s, u, c;
                    if (f)
                        for (c = Array(e.length), s = 0; s < h.length; s += 3) c[i = h[s]] = e[i];
                    else c = e;
                    for (s = 0, u = h.length; s < u;) o = c[h[s++]], e = h[s++], i = h[s++], e ? (e.scope ? (a = t.$new(), F.$$addScopeInfo(qn(o), a)) : a = t, e(i, a, o, n, e.transcludeOnThisElement ? E(t, e.transclude, r) : !e.templateOnThisElement && r ? r : !r && l ? E(t, l) : null)) : i && i(t, o.childNodes, void 0, r)
                } : null
            }

            function $(t, e, n) {
                var r, i = t[e],
                    o = i.parentNode;
                if (i.nodeType === vr)
                    for (;
                        (r = o ? i.nextSibling : t[e + 1]) && r.nodeType === vr;) i.nodeValue += r.nodeValue, r.parentNode && r.parentNode.removeChild(r), n && r === t[e + 1] && t.splice(e + 1, 1)
            }

            function E(o, a, s) {
                function t(t, e, n, r, i) {
                    return t || ((t = o.$new(!1, i)).$$transcluded = !0), a(t, e, {
                        parentBoundTranscludeFn: s,
                        transcludeControllers: n,
                        futureParentElement: r
                    })
                }
                var e, n = t.$$slots = Mt();
                for (e in a.$$slots) n[e] = a.$$slots[e] ? E(o, a.$$slots[e], s) : null;
                return t
            }

            function B(t, e, n, r, i) {
                var o, a, s, u, c = n.$attr;
                switch (t.nodeType) {
                    case 1:
                        b(e, Wt(o = wt(t)), "E", r, i);
                        for (var l, f, h, p, $ = t.attributes, d = 0, m = $ && $.length; d < m; d++) {
                            var v = !1,
                                g = !1;
                            f = (l = $[d]).name, h = l.value, l = Wt(f), (p = V.test(l)) && (f = f.replace(Xr, "").substr(8).replace(/_(.)/g, function(t, e) {
                                return e.toUpperCase()
                            })), (l = l.match(T)) && w(l[1]) && (g = (v = f).substr(0, f.length - 5) + "end", f = f.substr(0, f.length - 6)), c[l = Wt(f.toLowerCase())] = f, !p && n.hasOwnProperty(l) || (n[l] = h, Tt(t, l) && (n[l] = !0)), A(t, e, h, l, p), b(e, l, "A", r, i, v, g)
                        }
                        if ("input" === o && "hidden" === t.getAttribute("type") && t.setAttribute("autocomplete", "off"), !M) break;
                        if (dt(c = t.className) && (c = c.animVal), mt(c) && "" !== c)
                            for (; t = I.exec(c);) b(e, l = Wt(t[2]), "C", r, i) && (n[l] = ur(t[3])), c = c.substr(t.index + t[0].length);
                        break;
                    case vr:
                        a = e, s = t.nodeValue, (u = y(s, !0)) && a.push({
                            priority: 0,
                            compile: function(t) {
                                var r = !!(t = t.parent()).length;
                                return r && F.$$addBindingClass(t),
                                    function(t, e) {
                                        var n = e.parent();
                                        r || F.$$addBindingClass(n), F.$$addBindingInfo(n, u.expressions), t.$watch(u, function(t) {
                                            e[0].nodeValue = t
                                        })
                                    }
                            }
                        });
                        break;
                    case 8:
                        if (!O) break;
                        ! function(t, e, n, r, i) {
                            try {
                                var o = N.exec(t.nodeValue);
                                if (o) {
                                    var a = Wt(o[1]);
                                    b(e, a, "M", r, i) && (n[a] = ur(o[2]))
                                }
                            } catch (t) {}
                        }(t, e, n, r, i)
                }
                return e.sort(x), e
            }

            function H(t, e, n) {
                var r = [],
                    i = 0;
                if (e && t.hasAttribute && t.hasAttribute(e))
                    do {
                        if (!t) throw Yr("uterdir", e, n);
                        1 === t.nodeType && (t.hasAttribute(e) && i++, t.hasAttribute(n) && i--), r.push(t), t = t.nextSibling
                    } while (0 < i);
                else r.push(t);
                return qn(r)
            }

            function z(o, a, s) {
                return function(t, e, n, r, i) {
                    return e = H(e[0], a, s), o(t, e, n, r, i)
                }
            }

            function W(t, e, n, r, i, o) {
                var a;
                return t ? F(e, n, r, i, o) : function() {
                    return a || (a = F(e, n, r, i, o), e = n = o = null), a.apply(this, arguments)
                }
            }

            function k(t, m, v, e, n, r, g, y, i) {
                function o(t, e, n, r) {
                    t && (n && (t = z(t, n, r)), t.require = s.require, t.directiveName = u, (x === s || s.$$isolateScope) && (t = tt(t, {
                        isolateScope: !0
                    })), g.push(t)), e && (n && (e = z(e, n, r)), e.require = s.require, e.directiveName = u, (x === s || s.$$isolateScope) && (e = tt(e, {
                        isolateScope: !0
                    })), y.push(e))
                }

                function a(t, e, n, r, a) {
                    var i, o, s, u, c, l, f, h;
                    for (i in m === n ? h = (r = v).$$element : r = new q(h = qn(n), v), c = e, x ? u = e.$new(!0) : b && (c = e.$parent), a && ((f = function(t, e, n, r) {
                            var i;
                            if (yt(t) || (r = n, n = e, e = t, t = void 0), S && (i = l), n || (n = S ? h.parent() : h), !r) return a(t, e, i, n, d);
                            var o = a.$$slots[r];
                            if (o) return o(t, e, i, n, d);
                            if (pt(o)) throw Yr("noslot", r, kt(h))
                        }).$$boundTransclude = a, f.isSlotFilled = function(t) {
                            return !!a.$$slots[t]
                        }), w && (l = function(t, e, n, r, i, o, a) {
                            var s, u = Mt();
                            for (s in r) {
                                var c = r[s],
                                    l = {
                                        $scope: c === a || c.$$isolateScope ? i : o,
                                        $element: t,
                                        $attrs: e,
                                        $transclude: n
                                    },
                                    f = c.controller;
                                "@" === f && (f = e[c.name]), l = L(f, l, !0, c.controllerAs), u[c.name] = l, t.data("$" + c.name + "Controller", l.instance)
                            }
                            return u
                        }(h, r, f, w, u, e, x)), x && (F.$$addScopeInfo(h, u, !0, !(C && (C === x || C === x.$$originalDirective))), F.$$addScopeClass(h, !0), u.$$isolateBindings = x.$$isolateBindings, (o = nt(e, r, u, u.$$isolateBindings, x)).removeWatches && u.$on("$destroy", o.removeWatches)), l) {
                        o = w[i], s = l[i];
                        var p = o.$$bindings.bindToController;
                        if (it) {
                            s.bindingInfo = p ? nt(c, r, s.instance, p, o) : {};
                            var $ = s();
                            $ !== s.instance && (s.instance = $, h.data("$" + o.name + "Controller", $), s.bindingInfo.removeWatches && s.bindingInfo.removeWatches(), s.bindingInfo = nt(c, r, s.instance, p, o))
                        } else s.instance = s(), h.data("$" + o.name + "Controller", s.instance), s.bindingInfo = nt(c, r, s.instance, p, o)
                    }
                    for (ut(w, function(t, e) {
                            var n = t.require;
                            t.bindToController && !ar(n) && dt(n) && ct(l[e].instance, G(e, n, h, l))
                        }), ut(l, function(t) {
                            var e = t.instance;
                            if (gt(e.$onChanges)) try {
                                e.$onChanges(t.bindingInfo.initialChanges)
                            } catch (t) {
                                _(t)
                            }
                            if (gt(e.$onInit)) try {
                                e.$onInit()
                            } catch (t) {
                                _(t)
                            }
                            gt(e.$doCheck) && (c.$watch(function() {
                                e.$doCheck()
                            }), e.$doCheck()), gt(e.$onDestroy) && c.$on("$destroy", function() {
                                e.$onDestroy()
                            })
                        }), i = 0, o = g.length; i < o; i++) et(s = g[i], s.isolateScope ? u : e, h, r, s.require && G(s.directiveName, s.require, h, l), f);
                    var d = e;
                    for (x && (x.template || null === x.templateUrl) && (d = u), t && t(d, n.childNodes, void 0, a), i = y.length - 1; 0 <= i; i--) et(s = y[i], s.isolateScope ? u : e, h, r, s.require && G(s.directiveName, s.require, h, l), f);
                    ut(l, function(t) {
                        gt((t = t.instance).$postLink) && t.$postLink()
                    })
                }
                i = i || {};
                for (var s, u, c, l, f, h = -Number.MAX_VALUE, b = i.newScopeDirective, w = i.controllerDirectives, x = i.newIsolateScopeDirective, C = i.templateDirective, p = i.nonTlbTranscludeDirective, $ = !1, d = !1, S = i.hasElementTranscludeDirective, E = v.$$element = qn(m), k = e, A = !1, O = !1, M = 0, V = t.length; M < V; M++) {
                    var T = (s = t[M]).$$start,
                        N = s.$$end;
                    if (T && (E = H(m, T, N)), c = void 0, h > s.priority) break;
                    if ((f = s.scope) && (s.templateUrl || (dt(f) ? (Y("new/isolated scope", x || b, s, E), x = s) : Y("new/isolated scope", x, s, E)), b = b || s), u = s.name, !A && (s.replace && (s.templateUrl || s.template) || s.transclude && !s.$$tlb)) {
                        for (f = M + 1; A = t[f++];)
                            if (A.transclude && !A.$$tlb || A.replace && (A.templateUrl || A.template)) {
                                O = !0;
                                break
                            }
                        A = !0
                    }
                    if (!s.templateUrl && s.controller && (w = w || Mt(), Y("'" + u + "' controller", w[u], s, E), w[u] = s), f = s.transclude)
                        if ($ = !0, s.$$tlb || (Y("transclusion", p, s, E), p = s), "element" === f) S = !0, h = s.priority, c = E, E = v.$$element = qn(F.$$createComment(u, v[u])), m = E[0], X(n, Jn.call(c, 0), m), c[0].$$parentNode = c[0].parentNode, k = W(O, c, e, h, r && r.name, {
                            nonTlbTranscludeDirective: p
                        });
                        else {
                            var I = Mt();
                            if (dt(f)) {
                                c = [];
                                var j = Mt(),
                                    D = Mt();
                                for (var P in ut(f, function(t, e) {
                                        var n = "?" === t.charAt(0);
                                        t = n ? t.substring(1) : t, j[t] = e, I[e] = null, D[e] = n
                                    }), ut(E.contents(), function(t) {
                                        var e = j[Wt(wt(t))];
                                        e ? (D[e] = !0, I[e] = I[e] || [], I[e].push(t)) : c.push(t)
                                    }), ut(D, function(t, e) {
                                        if (!t) throw Yr("reqslot", e)
                                    }), I) I[P] && (I[P] = W(O, I[P], e))
                            } else c = qn(Vt(m)).contents();
                            E.empty(), (k = W(O, c, e, void 0, void 0, {
                                needsNewScope: s.$$isolateScope || s.$$newScope
                            })).$$slots = I
                        }
                    if (s.template)
                        if (d = !0, Y("template", C, s, E), f = gt((C = s).template) ? s.template(E, v) : s.template, f = rt(f), s.replace) {
                            if (r = s, c = kr.test(f) ? Kt(Q(s.templateNamespace, ur(f))) : [], m = c[0], 1 !== c.length || 1 !== m.nodeType) throw Yr("tplrt", u, "");
                            X(n, E, m), f = B(m, [], V = {
                                $attr: {}
                            });
                            var U = t.splice(M + 1, t.length - (M + 1));
                            (x || b) && K(f, x, b), t = t.concat(f).concat(U), J(v, V), V = t.length
                        } else E.html(f);
                    if (s.templateUrl) d = !0, Y("template", C, s, E), (C = s).replace && (r = s), a = Z(t.splice(M, t.length - M), E, v, n, $ && k, g, y, {
                        controllerDirectives: w,
                        newScopeDirective: b !== s && b,
                        newIsolateScopeDirective: x,
                        templateDirective: C,
                        nonTlbTranscludeDirective: p
                    }), V = t.length;
                    else if (s.compile) try {
                        l = s.compile(E, v, k);
                        var R = s.$$originalDirective || s;
                        gt(l) ? o(null, Et(R, l), T, N) : l && o(Et(R, l.pre), Et(R, l.post), T, N)
                    } catch (t) {
                        _(t, kt(E))
                    }
                    s.terminal && (a.terminal = !0, h = Math.max(h, s.priority))
                }
                return a.scope = b && !0 === b.scope, a.transcludeOnThisElement = $, a.templateOnThisElement = d, a.transclude = k, i.hasElementTranscludeDirective = S, a
            }

            function G(n, t, r, i) {
                var o;
                if (mt(t)) {
                    var e = t.match(j);
                    t = t.substring(e[0].length);
                    var a = e[1] || e[3];
                    e = "?" === e[2];
                    if ("^^" === a ? r = r.parent() : o = (o = i && i[t]) && o.instance, !o) {
                        var s = "$" + t + "Controller";
                        o = a ? r.inheritedData(s) : r.data(s)
                    }
                    if (!o && !e) throw Yr("ctreq", t, n)
                } else if (ar(t))
                    for (o = [], a = 0, e = t.length; a < e; a++) o[a] = G(n, t[a], r, i);
                else dt(t) && (o = {}, ut(t, function(t, e) {
                    o[e] = G(n, t, r, i)
                }));
                return o || null
            }

            function K(t, e, n) {
                for (var r = 0, i = t.length; r < i; r++) t[r] = lt(t[r], {
                    $$isolateScope: e,
                    $$newScope: n
                })
            }

            function b(t, e, n, r, i, o, a) {
                if (e === i) return null;
                var s = null;
                if (m.hasOwnProperty(e))
                    for (var u = 0, c = (i = p.get(e + "Directive")).length; u < c; u++)
                        if (e = i[u], (pt(r) || r > e.priority) && -1 !== e.restrict.indexOf(n)) {
                            if (o && (e = lt(e, {
                                    $$start: o,
                                    $$end: a
                                })), !e.$$bindings) {
                                var l = s = e,
                                    f = e.name,
                                    h = {
                                        isolateScope: null,
                                        bindToController: null
                                    };
                                if (dt(l.scope) && (!0 === l.bindToController ? (h.bindToController = d(l.scope, f, !0), h.isolateScope = {}) : h.isolateScope = d(l.scope, f, !1)), dt(l.bindToController) && (h.bindToController = d(l.bindToController, f, !0)), h.bindToController && !l.controller) throw Yr("noctrl", f);
                                dt((s = s.$$bindings = h).isolateScope) && (e.$$isolateBindings = s.isolateScope)
                            }
                            t.push(e), s = e
                        }
                return s
            }

            function w(t) {
                if (m.hasOwnProperty(t))
                    for (var e = p.get(t + "Directive"), n = 0, r = e.length; n < r; n++)
                        if ((t = e[n]).multiElement) return !0;
                return !1
            }

            function J(n, r) {
                var i = r.$attr,
                    o = n.$attr;
                ut(n, function(t, e) {
                    "$" !== e.charAt(0) && (r[e] && r[e] !== t && (t = t.length ? t + ("style" === e ? ";" : " ") + r[e] : r[e]), n.$set(e, t, !0, i[e]))
                }), ut(r, function(t, e) {
                    n.hasOwnProperty(e) || "$" === e.charAt(0) || (n[e] = t, "class" !== e && "style" !== e && (o[e] = i[e]))
                })
            }

            function Z(s, u, c, l, f, h, p, $) {
                var d, m, v = [],
                    g = u[0],
                    y = s.shift(),
                    b = lt(y, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: y
                    }),
                    w = gt(y.templateUrl) ? y.templateUrl(u, c) : y.templateUrl,
                    x = y.templateNamespace;
                return u.empty(), t(w).then(function(t) {
                        var n, e;
                        if (t = rt(t), y.replace) {
                            if (t = kr.test(t) ? Kt(Q(x, ur(t))) : [], n = t[0], 1 !== t.length || 1 !== n.nodeType) throw Yr("tplrt", y.name, w);
                            t = {
                                $attr: {}
                            }, X(l, u, n);
                            var r = B(n, [], t);
                            dt(y.scope) && K(r, !0), s = r.concat(s), J(c, t)
                        } else n = g, u.html(t);
                        for (s.unshift(b), d = k(s, n, c, f, u, y, h, p, $), ut(l, function(t, e) {
                                t === n && (l[e] = u[0])
                            }), m = S(u[0].childNodes, f); v.length;) {
                            t = v.shift(), e = v.shift();
                            var i = v.shift(),
                                o = v.shift();
                            r = u[0];
                            if (!t.$$destroyed) {
                                if (e !== g) {
                                    var a = e.className;
                                    $.hasElementTranscludeDirective && y.replace || (r = Vt(n)), X(i, qn(e), r), C(qn(r), a)
                                }
                                e = d.transcludeOnThisElement ? E(t, d.transclude, o) : o, d(m, t, r, l, e)
                            }
                        }
                        v = null
                    }).catch(function(t) {
                        vt(t) && _(t)
                    }),
                    function(t, e, n, r, i) {
                        t = i, e.$$destroyed || (v ? v.push(e, n, r, t) : (d.transcludeOnThisElement && (t = E(e, d.transclude, i)), d(m, e, n, r, t)))
                    }
            }

            function x(t, e) {
                var n = e.priority - t.priority;
                return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index
            }

            function Y(t, e, n, r) {
                function i(t) {
                    return t ? " (module: " + t + ")" : ""
                }
                if (e) throw Yr("multidir", e.name, i(e.$$moduleName), n.name, i(n.$$moduleName), t, kt(r))
            }

            function Q(t, e) {
                switch (t = Gn(t || "html")) {
                    case "svg":
                    case "math":
                        var n = st.document.createElement("div");
                        return n.innerHTML = "<" + t + ">" + e + "</" + t + ">", n.childNodes[0].childNodes;
                    default:
                        return e
                }
            }

            function A(t, e, i, o, n) {
                var a = function(t, e) {
                        if ("srcdoc" === e) return r.HTML;
                        var n = wt(t);
                        if ("src" === e || "ngSrc" === e) {
                            if (-1 === ["img", "video", "audio", "source", "track"].indexOf(n)) return r.RESOURCE_URL
                        } else if ("xlinkHref" === e || "form" === n && "action" === e || "link" === n && "href" === e) return r.RESOURCE_URL
                    }(t, o),
                    s = c[o] || n,
                    u = y(i, !n, a, s);
                if (u) {
                    if ("multiple" === o && "select" === wt(t)) throw Yr("selmulti", kt(t));
                    if (D.test(o)) throw Yr("nodomevents");
                    e.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(t, e, n) {
                                    e = n.$$observers || (n.$$observers = Mt());
                                    var r = n[o];
                                    r !== i && (u = r && y(r, !0, a, s), i = r), u && (n[o] = u(t), (e[o] || (e[o] = [])).$$inter = !0, (n.$$observers && n.$$observers[o].$$scope || t).$watch(u, function(t, e) {
                                        "class" === o && t !== e ? n.$updateClass(t, e) : n.$set(o, t)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function X(t, e, n) {
                var r, i, o = e[0],
                    a = e.length,
                    s = o.parentNode;
                if (t)
                    for (r = 0, i = t.length; r < i; r++)
                        if (t[r] === o) {
                            t[r++] = n, i = r + a - 1;
                            for (var u = t.length; r < u; r++, i++) i < u ? t[r] = t[i] : delete t[r];
                            t.length -= a - 1, t.context === o && (t.context = n);
                            break
                        }
                for (s && s.replaceChild(n, o), t = st.document.createDocumentFragment(), r = 0; r < a; r++) t.appendChild(e[r]);
                for (qn.hasData(o) && (qn.data(n, qn.data(o)), qn(o).off("$destroy")), qn.cleanData(t.querySelectorAll("*")), r = 1; r < a; r++) delete e[r];
                e[0] = n, e.length = 1
            }

            function tt(t, e) {
                return ct(function() {
                    return t.apply(null, arguments)
                }, t, e)
            }

            function et(t, e, n, r, i, o) {
                try {
                    t(e, n, r, i, o)
                } catch (t) {
                    _(t, kt(n))
                }
            }

            function g(t, e) {
                if (U) throw Yr("missingattr", t, e)
            }

            function nt(l, f, h, t, p) {
                function $(t, e, n) {
                    gt(h.$onChanges) && !Ct(e, n) && (s || (l.$$postDigest(a), s = []), i || (i = {}, s.push(r)), i[t] && (n = i[t].previousValue), i[t] = new zt(n, e))
                }

                function r() {
                    h.$onChanges(i), i = void 0
                }
                var i, d = [],
                    m = {};
                return ut(t, function(t, n) {
                    var e, r, i, o, a = t.attrName,
                        s = t.optional;
                    switch (t.mode) {
                        case "@":
                            s || Wn.call(f, a) || (g(a, p.name), h[n] = f[a] = void 0), s = f.$observe(a, function(t) {
                                (mt(t) || bt(t)) && ($(n, t, h[n]), h[n] = t)
                            }), f.$$observers[a].$$scope = l, mt(e = f[a]) ? h[n] = y(e)(l) : bt(e) && (h[n] = e), m[n] = new zt(Qr, h[n]), d.push(s);
                            break;
                        case "=":
                            if (!Wn.call(f, a)) {
                                if (s) break;
                                g(a, p.name), f[a] = void 0
                            }
                            if (s && !f[a]) break;
                            r = v(f[a]), o = r.literal ? St : Ct, i = r.assign || function() {
                                throw e = h[n] = r(l), Yr("nonassign", f[a], a, p.name)
                            }, e = h[n] = r(l), (s = function(t) {
                                return o(t, h[n]) || (o(t, e) ? i(l, t = h[n]) : h[n] = t), e = t
                            }).$stateful = !0, s = t.collection ? l.$watchCollection(f[a], s) : l.$watch(v(f[a], s), null, r.literal), d.push(s);
                            break;
                        case "<":
                            if (!Wn.call(f, a)) {
                                if (s) break;
                                g(a, p.name), f[a] = void 0
                            }
                            if (s && !f[a]) break;
                            var u = (r = v(f[a])).literal,
                                c = h[n] = r(l);
                            m[n] = new zt(Qr, h[n]), s = l.$watch(r, function(t, e) {
                                if (e === t) {
                                    if (e === c || u && St(e, c)) return;
                                    e = c
                                }
                                $(n, t, e), h[n] = t
                            }, u), d.push(s);
                            break;
                        case "&":
                            if (s || Wn.call(f, a) || g(a, p.name), (r = f.hasOwnProperty(a) ? v(f[a]) : ft) === ft && s) break;
                            h[n] = function(t) {
                                return r(l, t)
                            }
                    }
                }), {
                    initialChanges: m,
                    removeWatches: d.length && function() {
                        for (var t = 0, e = d.length; t < e; ++t) d[t]()
                    }
                }
            }
            var s, f = /^\w/,
                h = st.document.createElement("div"),
                O = ot,
                M = at,
                e = R;
            q.prototype = {
                $normalize: Wt,
                $addClass: function(t) {
                    t && 0 < t.length && i.addClass(this.$$element, t)
                },
                $removeClass: function(t) {
                    t && 0 < t.length && i.removeClass(this.$$element, t)
                },
                $updateClass: function(t, e) {
                    var n = Gt(t, e);
                    n && n.length && i.addClass(this.$$element, n), (n = Gt(e, t)) && n.length && i.removeClass(this.$$element, n)
                },
                $set: function(t, e, n, r) {
                    var i = Tt(this.$$element[0], t),
                        o = jr[t],
                        a = t;
                    if (i ? (this.$$element.prop(t, e), r = i) : o && (this[o] = e, a = o), this[t] = e, r ? this.$attr[t] = r : (r = this.$attr[t]) || (this.$attr[t] = r = At(t, "-")), "a" === (i = wt(this.$$element)) && ("href" === t || "xlinkHref" === t) || "img" === i && "src" === t) this[t] = e = l(e, "src" === t);
                    else if ("img" === i && "srcset" === t && $t(e)) {
                        i = "", o = ur(e);
                        for (var s = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, u = (s = /\s/.test(o) ? s : /(,)/, o = o.split(s), s = Math.floor(o.length / 2), 0); u < s; u++) {
                            var c = 2 * u;
                            i = (i = i + l(ur(o[c]), !0)) + " " + ur(o[c + 1])
                        }
                        o = ur(o[2 * u]).split(/\s/), i += l(ur(o[0]), !0), 2 === o.length && (i += " " + ur(o[1])), this[t] = e = i
                    }!1 !== n && (null === e || pt(e) ? this.$$element.removeAttr(r) : f.test(r) ? this.$$element.attr(r, e) : function(t, e, n) {
                        h.innerHTML = "<span " + e + ">";
                        var r = (e = h.firstChild.attributes)[0];
                        e.removeNamedItem(r.name), r.value = n, t.attributes.setNamedItem(r)
                    }(this.$$element[0], r, e)), (t = this.$$observers) && ut(t[a], function(t) {
                        try {
                            t(e)
                        } catch (t) {
                            _(t)
                        }
                    })
                },
                $observe: function(t, e) {
                    var n = this,
                        r = n.$$observers || (n.$$observers = Mt()),
                        i = r[t] || (r[t] = []);
                    return i.push(e), o.$evalAsync(function() {
                            i.$$inter || !n.hasOwnProperty(t) || pt(n[t]) || e(n[t])
                        }),
                        function() {
                            xt(i, e)
                        }
                }
            };
            var n = y.startSymbol(),
                u = y.endSymbol(),
                rt = "{{" === n && "}}" === u ? ht : function(t) {
                    return t.replace(/\{\{/g, n).replace(/}}/g, u)
                },
                V = /^ngAttr[A-Z]/,
                T = /^(.+)Start$/;
            return F.$$addBindingInfo = P ? function(t, e) {
                var n = t.data("$binding") || [];
                ar(e) ? n = n.concat(e) : n.push(e), t.data("$binding", n)
            } : ft, F.$$addBindingClass = P ? function(t) {
                C(t, "ng-binding")
            } : ft, F.$$addScopeInfo = P ? function(t, e, n, r) {
                t.data(n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", e)
            } : ft, F.$$addScopeClass = P ? function(t, e) {
                C(t, e ? "ng-isolate-scope" : "ng-scope")
            } : ft, F.$$createComment = function(t, e) {
                var n = "";
                return P && (n = " " + (t || "") + ": ", e && (n += e + " ")), st.document.createComment(n)
            }, F
        }]
    }

    function zt(t, e) {
        this.previousValue = t, this.currentValue = e
    }

    function Wt(t) {
        return t.replace(Xr, "").replace(ti, function(t, e, n) {
            return n ? e.toUpperCase() : e
        })
    }

    function Gt(t, e) {
        var n = "",
            r = t.split(/\s+/),
            i = e.split(/\s+/),
            o = 0;
        t: for (; o < r.length; o++) {
            for (var a = r[o], s = 0; s < i.length; s++)
                if (a === i[s]) continue t;
            n += (0 < n.length ? " " : "") + a
        }
        return n
    }

    function Kt(t) {
        var e = (t = qn(t)).length;
        if (e <= 1) return t;
        for (; e--;) {
            var n = t[e];
            (8 === n.nodeType || n.nodeType === vr && "" === n.nodeValue.trim()) && Zn.call(t, e, 1)
        }
        return t
    }

    function Jt() {
        var l = {},
            f = !1;
        this.has = function(t) {
            return l.hasOwnProperty(t)
        }, this.register = function(t, e) {
            _(t, "controller"), dt(t) ? ct(l, t) : l[t] = e
        }, this.allowGlobals = function() {
            f = !0
        }, this.$get = ["$injector", "$window", function(s, u) {
            function c(t, e, n, r) {
                if (!t || !dt(t.$scope)) throw S("$controller")("noscp", r, e);
                t.$scope[e] = n
            }
            return function(e, n, t, r) {
                var i, o, a;
                if (t = !0 === t, r && mt(r) && (a = r), mt(e)) {
                    if (!(r = e.match(ni))) throw ei("ctrlfmt", e);
                    if (o = r[1], a = a || r[3], !(e = l.hasOwnProperty(o) ? l[o] : j(n.$scope, o, !0) || (f ? j(u, o, !0) : void 0))) throw ei("ctrlreg", o);
                    I(e, o, !0)
                }
                return t ? (t = (ar(e) ? e[e.length - 1] : e).prototype, i = Object.create(t || null), a && c(n, a, i, o || e.name), ct(function() {
                    var t = s.invoke(e, i, n, o);
                    return t !== i && (dt(t) || gt(t)) && (i = t, a && c(n, a, i, o || e.name)), i
                }, {
                    instance: i,
                    identifier: a
                })) : (i = s.instantiate(e, n, o), a && c(n, a, i, o || e.name), i)
            }
        }]
    }

    function Zt() {
        this.$get = ["$window", function(t) {
            return qn(t.document)
        }]
    }

    function Yt() {
        this.$get = ["$document", "$rootScope", function(t, e) {
            function n() {
                i = r.hidden
            }
            var r = t[0],
                i = r && r.hidden;
            return t.on("visibilitychange", n), e.$on("$destroy", function() {
                    t.off("visibilitychange", n)
                }),
                function() {
                    return i
                }
        }]
    }

    function Qt() {
        this.$get = ["$log", function(n) {
            return function(t, e) {
                n.error.apply(n, arguments)
            }
        }]
    }

    function Xt(t) {
        return dt(t) ? g(t) ? t.toISOString() : n(t) : t
    }

    function te() {
        this.$get = function() {
            return function(t) {
                if (!t) return "";
                var n = [];
                return o(t, function(t, e) {
                    null === t || pt(t) || gt(t) || (ar(t) ? ut(t, function(t) {
                        n.push(M(e) + "=" + M(Xt(t)))
                    }) : n.push(M(e) + "=" + M(Xt(t))))
                }), n.join("&")
            }
        }
    }

    function ee() {
        this.$get = function() {
            return function(t) {
                if (!t) return "";
                var e = [];
                return function n(t, r, i) {
                    null === t || pt(t) || (ar(t) ? ut(t, function(t, e) {
                        n(t, r + "[" + (dt(t) ? e : "") + "]")
                    }) : dt(t) && !g(t) ? o(t, function(t, e) {
                        n(t, r + (i ? "" : "[") + e + (i ? "" : "]"))
                    }) : e.push(M(r) + "=" + M(Xt(t))))
                }(t, "", !0), e.join("&")
            }
        }
    }

    function ne(e, t) {
        if (mt(e)) {
            var n, r, i = e.replace(ui, "").trim();
            if (i)
                if ((r = n = (n = t("Content-Type")) && 0 === n.indexOf(ii)) || (r = (r = i.match(ai)) && si[r[0]].test(i)), r) try {
                    e = a(i)
                } catch (t) {
                    if (!n) return e;
                    throw ci("baddata", e, t)
                }
        }
        return e
    }

    function re(t) {
        var n, i = Mt();
        return mt(t) ? ut(t.split("\n"), function(t) {
            n = t.indexOf(":");
            var e = Gn(ur(t.substr(0, n)));
            t = ur(t.substr(n + 1)), e && (i[e] = i[e] ? i[e] + ", " + t : t)
        }) : dt(t) && ut(t, function(t, e) {
            var n = Gn(e),
                r = ur(t);
            n && (i[n] = i[n] ? i[n] + ", " + r : r)
        }), i
    }

    function ie(e) {
        var n;
        return function(t) {
            return n || (n = re(e)), t ? (void 0 === (t = n[Gn(t)]) && (t = null), t) : n
        }
    }

    function oe(e, n, r, t) {
        return gt(t) ? t(e, n, r) : (ut(t, function(t) {
            e = t(e, n, r)
        }), e)
    }

    function ae() {
        var x = this.defaults = {
                transformResponse: [ne],
                transformRequest: [function(t) {
                    return dt(t) && "[object File]" !== Qn.call(t) && "[object Blob]" !== Qn.call(t) && "[object FormData]" !== Qn.call(t) ? n(t) : t
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: U(oi),
                    put: U(oi),
                    patch: U(oi)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                paramSerializer: "$httpParamSerializer",
                jsonpCallbackParam: "callback"
            },
            C = !1;
        this.useApplyAsync = function(t) {
            return $t(t) ? (C = !!t, this) : C
        };
        var e = this.interceptors = [];
        this.$get = ["$browser", "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", "$sce", function(a, d, m, t, v, g, s, y) {
            function b(t) {
                function e(t, e) {
                    for (var n = 0, r = e.length; n < r;) {
                        var i = e[n++],
                            o = e[n++];
                        t = t.then(i, o)
                    }
                    return e.length = 0, t
                }

                function r(t) {
                    var e = ct({}, t);
                    return e.data = oe(t.data, t.headers, t.status, n.transformResponse), 200 <= (t = t.status) && t < 300 ? e : g.reject(e)
                }
                if (!dt(t)) throw S("$http")("badreq", t);
                if (!mt(y.valueOf(t.url))) throw S("$http")("badreq", t.url);
                var n = ct({
                    method: "get",
                    transformRequest: x.transformRequest,
                    transformResponse: x.transformResponse,
                    paramSerializer: x.paramSerializer,
                    jsonpCallbackParam: x.jsonpCallbackParam
                }, t);
                n.headers = function(t) {
                    var e, n, r, i, o, a, s, u = x.headers,
                        c = ct({}, t.headers);
                    u = ct({}, u.common, u[Gn(t.method)]);
                    t: for (e in u) {
                        for (r in n = Gn(e), c)
                            if (Gn(r) === n) continue t;
                        c[e] = u[e]
                    }
                    return i = c, o = U(t), s = {}, ut(i, function(t, e) {
                        gt(t) ? null != (a = t(o)) && (s[e] = a) : s[e] = t
                    }), s
                }(t), n.method = Kn(n.method), n.paramSerializer = mt(n.paramSerializer) ? s.get(n.paramSerializer) : n.paramSerializer, a.$$incOutstandingRequestCount();
                var i = [],
                    o = [];
                return t = g.resolve(n), ut(u, function(t) {
                    (t.request || t.requestError) && i.unshift(t.request, t.requestError), (t.response || t.responseError) && o.push(t.response, t.responseError)
                }), (t = e(t = (t = e(t, i)).then(function(t) {
                    var n = t.headers,
                        e = oe(t.data, ie(n), void 0, t.transformRequest);
                    return pt(e) && ut(n, function(t, e) {
                            "content-type" === Gn(e) && delete n[e]
                        }), pt(t.withCredentials) && !pt(x.withCredentials) && (t.withCredentials = x.withCredentials),
                        function(o, t) {
                            function e(t) {
                                if (t) {
                                    var e = {};
                                    return ut(t, function(n, t) {
                                        e[t] = function(t) {
                                            function e() {
                                                n(t)
                                            }
                                            C ? v.$applyAsync(e) : v.$$phase ? e() : v.$apply(e)
                                        }
                                    }), e
                                }
                            }

                            function a(t, e, n, r, i) {
                                (200 <= (e = -1 <= e ? e : 0) && e < 300 ? u.resolve : u.reject)({
                                    data: t,
                                    status: e,
                                    headers: ie(n),
                                    config: o,
                                    statusText: r,
                                    xhrStatus: i
                                })
                            }

                            function n(t) {
                                a(t.data, t.status, U(t.headers()), t.statusText, t.xhrStatus)
                            }

                            function r() {
                                var t = b.pendingRequests.indexOf(o); - 1 !== t && b.pendingRequests.splice(t, 1)
                            }
                            var s, i, u = g.defer(),
                                c = u.promise,
                                l = o.headers,
                                f = "jsonp" === Gn(o.method),
                                h = o.url;
                            return f ? h = y.getTrustedResourceUrl(h) : mt(h) || (h = y.valueOf(h)), p = h, $ = o.paramSerializer(o.params), 0 < $.length && (p += (-1 === p.indexOf("?") ? "?" : "&") + $), h = p, f && (h = function(n, r) {
                                var t = n.split("?");
                                if (2 < t.length) throw ci("badjsonp", n);
                                return ut(t = A(t[1]), function(t, e) {
                                    if ("JSON_CALLBACK" === t) throw ci("badjsonp", n);
                                    if (e === r) throw ci("badjsonp", r, n)
                                }), n += (-1 === n.indexOf("?") ? "?" : "&") + r + "=JSON_CALLBACK"
                            }(h, o.jsonpCallbackParam)), b.pendingRequests.push(o), c.then(r, r), !o.cache && !x.cache || !1 === o.cache || "GET" !== o.method && "JSONP" !== o.method || (s = dt(o.cache) ? o.cache : dt(x.cache) ? x.cache : w), s && ($t(i = s.get(h)) ? i && gt(i.then) ? i.then(n, n) : ar(i) ? a(i[1], i[0], U(i[2]), i[3], i[4]) : a(i, 200, {}, "OK", "complete") : s.put(h, c)), pt(i) && ((i = Ye(o.url) ? m()[o.xsrfCookieName || x.xsrfCookieName] : void 0) && (l[o.xsrfHeaderName || x.xsrfHeaderName] = i), d(o.method, h, t, function(t, e, n, r, i) {
                                function o() {
                                    a(e, t, n, r, i)
                                }
                                s && (200 <= t && t < 300 ? s.put(h, [t, e, re(n), r, i]) : s.remove(h)), C ? v.$applyAsync(o) : (o(), v.$$phase || v.$apply())
                            }, l, o.timeout, o.withCredentials, o.responseType, e(o.eventHandlers), e(o.uploadEventHandlers))), c;
                            var p, $
                        }(t, e).then(r, r)
                }), o)).finally(function() {
                    a.$$completeOutstandingRequest(ft)
                })
            }
            var w = t("$http");
            x.paramSerializer = mt(x.paramSerializer) ? s.get(x.paramSerializer) : x.paramSerializer;
            var u = [];
            return ut(e, function(t) {
                    u.unshift(mt(t) ? s.get(t) : s.invoke(t))
                }), b.pendingRequests = [],
                function(t) {
                    ut(arguments, function(n) {
                        b[n] = function(t, e) {
                            return b(ct({}, e || {}, {
                                method: n,
                                url: t
                            }))
                        }
                    })
                }("get", "delete", "head", "jsonp"),
                function(t) {
                    ut(arguments, function(r) {
                        b[r] = function(t, e, n) {
                            return b(ct({}, n || {}, {
                                method: r,
                                url: t,
                                data: e
                            }))
                        }
                    })
                }("post", "put", "patch"), b.defaults = x, b
        }]
    }

    function se() {
        this.$get = function() {
            return function() {
                return new st.XMLHttpRequest
            }
        }
    }

    function ue() {
        this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function(t, e, n, r) {
            return v = r, g = (m = t).defer, y = e, b = n[0],
                function(t, r, e, i, n, o, a, s, u, c) {
                    function l() {
                        p && p(), $ && $.abort()
                    }

                    function f(t, e, n, r, i, o) {
                        $t(d) && g.cancel(d), p = $ = null, t(e, n, r, i, o)
                    }
                    if (r = r || m.url(), "jsonp" === Gn(t)) var h = y.createCallback(r),
                        p = function(t, r, i) {
                            t = t.replace("JSON_CALLBACK", r);
                            var o = b.createElement("script"),
                                a = null;
                            return o.type = "text/javascript", o.src = t, o.async = !0, a = function(t) {
                                o.removeEventListener("load", a), o.removeEventListener("error", a), b.body.removeChild(o), o = null;
                                var e = -1,
                                    n = "unknown";
                                t && ("load" !== t.type || y.wasCalled(r) || (t = {
                                    type: "error"
                                }), n = t.type, e = "error" === t.type ? 404 : 200), i && i(e, n)
                            }, o.addEventListener("load", a), o.addEventListener("error", a), b.body.appendChild(o), a
                        }(r, h, function(t, e) {
                            var n = 200 === t && y.getResponse(h);
                            f(i, t, n, "", e, "complete"), y.removeCallback(h)
                        });
                    else {
                        var $ = v(t, r);
                        if ($.open(t, r, !0), ut(n, function(t, e) {
                                $t(t) && $.setRequestHeader(e, t)
                            }), $.onload = function() {
                                var t = $.statusText || "",
                                    e = "response" in $ ? $.response : $.responseText,
                                    n = 1223 === $.status ? 204 : $.status;
                                0 === n && (n = e ? 200 : "file" === Ze(r).protocol ? 404 : 0), f(i, n, e, $.getAllResponseHeaders(), t, "complete")
                            }, $.onerror = function() {
                                f(i, -1, null, null, "", "error")
                            }, $.onabort = function() {
                                f(i, -1, null, null, "", "abort")
                            }, $.ontimeout = function() {
                                f(i, -1, null, null, "", "timeout")
                            }, ut(u, function(t, e) {
                                $.addEventListener(e, t)
                            }), ut(c, function(t, e) {
                                $.upload.addEventListener(e, t)
                            }), a && ($.withCredentials = !0), s) try {
                            $.responseType = s
                        } catch (t) {
                            if ("json" !== s) throw t
                        }
                        $.send(pt(e) ? null : e)
                    }
                    if (0 < o) var d = g(l, o);
                    else o && gt(o.then) && o.then(l)
                };
            var m, v, g, y, b
        }]
    }

    function ce() {
        var w = "{{",
            x = "}}";
        this.startSymbol = function(t) {
            return t ? (w = t, this) : w
        }, this.endSymbol = function(t) {
            return t ? (x = t, this) : x
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function($, d, m) {
            function t(t) {
                return "\\\\\\" + t
            }

            function v(t) {
                return t.replace(n, w).replace(r, x)
            }

            function g(t, e, n, r) {
                var i = t.$watch(function(t) {
                    return i(), r(t)
                }, e, n);
                return i
            }

            function e(i, t, n, r) {
                function e(t) {
                    try {
                        var e = t;
                        return t = n ? m.getTrusted(n, e) : m.valueOf(e), r && !$t(t) ? t : P(t)
                    } catch (t) {
                        d(li.interr(i, t))
                    }
                }
                var o;
                if (!i.length || -1 === i.indexOf(w)) return t || ((o = C(t = v(i))).exp = i, o.expressions = [], o.$$watchDelegate = g), o;
                r = !!r;
                var a, s, u = 0,
                    c = [],
                    l = [];
                o = i.length;
                for (var f = [], h = []; u < o;) {
                    if (-1 === (a = i.indexOf(w, u)) || -1 === (s = i.indexOf(x, a + y))) {
                        u !== o && f.push(v(i.substring(u)));
                        break
                    }
                    u !== a && f.push(v(i.substring(u, a))), u = i.substring(a + y, s), c.push(u), l.push($(u, e)), u = s + b, h.push(f.length), f.push("")
                }
                if (n && 1 < f.length && li.throwNoconcat(i), !t || c.length) {
                    var p = function(t) {
                        for (var e = 0, n = c.length; e < n; e++) {
                            if (r && pt(t[e])) return;
                            f[h[e]] = t[e]
                        }
                        return f.join("")
                    };
                    return ct(function(t) {
                        var e = 0,
                            n = c.length,
                            r = Array(n);
                        try {
                            for (; e < n; e++) r[e] = l[e](t);
                            return p(r)
                        } catch (t) {
                            d(li.interr(i, t))
                        }
                    }, {
                        exp: i,
                        expressions: c,
                        $$watchDelegate: function(r, i) {
                            var o;
                            return r.$watchGroup(l, function(t, e) {
                                var n = p(t);
                                i.call(this, n, t !== e ? o : n, r), o = n
                            })
                        }
                    })
                }
            }
            var y = w.length,
                b = x.length,
                n = new RegExp(w.replace(/./g, t), "g"),
                r = new RegExp(x.replace(/./g, t), "g");
            return e.startSymbol = function() {
                return w
            }, e.endSymbol = function() {
                return x
            }, e
        }]
    }

    function le() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function(p, $, d, m, v) {
            function t(t, e, n, r) {
                function i() {
                    o ? t.apply(null, a) : t(c)
                }
                var o = 4 < arguments.length,
                    a = o ? Jn.call(arguments, 4) : [],
                    s = $.setInterval,
                    u = $.clearInterval,
                    c = 0,
                    l = $t(r) && !r,
                    f = (l ? m : d).defer(),
                    h = f.promise;
                return n = $t(n) ? n : 0, h.$$intervalId = s(function() {
                    l ? v.defer(i) : p.$evalAsync(i), f.notify(c++), 0 < n && n <= c && (f.resolve(c), u(h.$$intervalId), delete g[h.$$intervalId]), l || p.$apply()
                }, e), g[h.$$intervalId] = f, h
            }
            var g = {};
            return t.cancel = function(t) {
                return !!(t && t.$$intervalId in g) && (g[t.$$intervalId].promise.$$state.pur = !0, g[t.$$intervalId].reject("canceled"), $.clearInterval(t.$$intervalId), delete g[t.$$intervalId], !0)
            }, t
        }]
    }

    function fe(t) {
        for (var e = (t = t.split("/")).length; e--;) t[e] = x(t[e].replace(/%2F/g, "/"));
        return t.join("/")
    }

    function he(t, e) {
        var n = Ze(t);
        e.$$protocol = n.protocol, e.$$host = n.hostname, e.$$port = l(n.port) || pi[n.protocol] || null
    }

    function pe(t, e, n) {
        if (di.test(t)) throw $i("badpath", t);
        (r = "/" !== t.charAt(0)) && (t = "/" + t), t = Ze(t);
        for (var r, i = (r = (r && "/" === t.pathname.charAt(0) ? t.pathname.substring(1) : t.pathname).split("/")).length; i--;) r[i] = decodeURIComponent(r[i]), n && (r[i] = r[i].replace(/\//g, "%2F"));
        n = r.join("/"), e.$$path = n, e.$$search = A(t.search), e.$$hash = decodeURIComponent(t.hash), e.$$path && "/" !== e.$$path.charAt(0) && (e.$$path = "/" + e.$$path)
    }

    function $e(t, e) {
        return t.slice(0, e.length) === e
    }

    function de(t, e) {
        if ($e(e, t)) return e.substr(t.length)
    }

    function me(t) {
        var e = t.indexOf("#");
        return -1 === e ? t : t.substr(0, e)
    }

    function ve(t) {
        return t.replace(/(#.+)|#$/, "$1")
    }

    function ge(i, o, a) {
        this.$$html5 = !0, a = a || "", he(i, this), this.$$parse = function(t) {
            var e = de(o, t);
            if (!mt(e)) throw $i("ipthprfx", t, o);
            pe(e, this, !0), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function() {
            var t = w(this.$$search),
                e = this.$$hash ? "#" + x(this.$$hash) : "";
            this.$$url = fe(this.$$path) + (t ? "?" + t : "") + e, this.$$absUrl = o + this.$$url.substr(1), this.$$urlUpdatedByLocation = !0
        }, this.$$parseLinkUrl = function(t, e) {
            return e && "#" === e[0] ? (this.hash(e.slice(1)), !0) : ($t(n = de(i, t)) ? (r = n, r = a && $t(n = de(a, n)) ? o + (de("/", n) || n) : i + r) : $t(n = de(o, t)) ? r = o + n : o === t + "/" && (r = o), r && this.$$parse(r), !!r);
            var n, r
        }
    }

    function ye(i, o, a) {
        he(i, this), this.$$parse = function(t) {
            var e;
            pt(n = de(i, t) || de(o, t)) || "#" !== n.charAt(0) ? this.$$html5 ? e = n : (e = "", pt(n) && (i = t, this.replace())) : pt(e = de(a, n)) && (e = n), pe(e, this, !1), t = this.$$path;
            var n, r = /^\/[A-Z]:(\/.*)/;
            $e(e, n = i) && (e = e.replace(n, "")), r.exec(e) || (t = (e = r.exec(t)) ? e[1] : t), this.$$path = t, this.$$compose()
        }, this.$$compose = function() {
            var t = w(this.$$search),
                e = this.$$hash ? "#" + x(this.$$hash) : "";
            this.$$url = fe(this.$$path) + (t ? "?" + t : "") + e, this.$$absUrl = i + (this.$$url ? a + this.$$url : ""), this.$$urlUpdatedByLocation = !0
        }, this.$$parseLinkUrl = function(t, e) {
            return me(i) === me(t) && (this.$$parse(t), !0)
        }
    }

    function be(i, o, a) {
        this.$$html5 = !0, ye.apply(this, arguments), this.$$parseLinkUrl = function(t, e) {
            return e && "#" === e[0] ? (this.hash(e.slice(1)), !0) : (i === me(t) ? n = t : (r = de(o, t)) ? n = i + a + r : o === t + "/" && (n = o), n && this.$$parse(n), !!n);
            var n, r
        }, this.$$compose = function() {
            var t = w(this.$$search),
                e = this.$$hash ? "#" + x(this.$$hash) : "";
            this.$$url = fe(this.$$path) + (t ? "?" + t : "") + e, this.$$absUrl = i + a + this.$$url, this.$$urlUpdatedByLocation = !0
        }
    }

    function we(t) {
        return function() {
            return this[t]
        }
    }

    function xe(e, n) {
        return function(t) {
            return pt(t) ? this[e] : (this[e] = n(t), this.$$compose(), this)
        }
    }

    function Ce() {
        var $ = "!",
            d = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
        this.hashPrefix = function(t) {
            return $t(t) ? ($ = t, this) : $
        }, this.html5Mode = function(t) {
            return bt(t) ? (d.enabled = t, this) : dt(t) ? (bt(t.enabled) && (d.enabled = t.enabled), bt(t.requireBase) && (d.requireBase = t.requireBase), (bt(t.rewriteLinks) || mt(t.rewriteLinks)) && (d.rewriteLinks = t.rewriteLinks), this) : d
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(a, s, e, i, o) {
            function u(t, e, n) {
                var r = l.url(),
                    i = l.$$state;
                try {
                    s.url(t, e, n), l.$$state = s.state()
                } catch (t) {
                    throw l.url(r), l.$$state = i, t
                }
            }

            function c(t, e) {
                a.$broadcast("$locationChangeSuccess", l.absUrl(), t, l.$$state, e)
            }
            var l, t;
            t = s.baseHref();
            var n, r = s.url();
            if (d.enabled) {
                if (!t && d.requireBase) throw $i("nobase");
                n = r.substring(0, r.indexOf("/", r.indexOf("//") + 2)) + (t || "/"), t = e.history ? ge : be
            } else n = me(r), t = ye;
            var f = n.substr(0, me(n).lastIndexOf("/") + 1);
            (l = new t(n, f, "#" + $)).$$parseLinkUrl(r, r), l.$$state = s.state();
            var h = /^\s*(javascript|mailto):/i;
            i.on("click", function(t) {
                if ((n = d.rewriteLinks) && !t.ctrlKey && !t.metaKey && !t.shiftKey && 2 !== t.which && 2 !== t.button) {
                    for (var e = qn(t.target);
                        "a" !== wt(e[0]);)
                        if (e[0] === i[0] || !(e = e.parent())[0]) return;
                    if (!mt(n) || !pt(e.attr(n))) {
                        var n = e.prop("href"),
                            r = e.attr("href") || e.attr("xlink:href");
                        dt(n) && "[object SVGAnimatedString]" === n.toString() && (n = Ze(n.animVal).href), h.test(n) || !n || e.attr("target") || t.isDefaultPrevented() || !l.$$parseLinkUrl(n, r) || (t.preventDefault(), l.absUrl() !== s.url() && (a.$apply(), o.angular["ff-684208-preventDefault"] = !0))
                    }
                }
            }), ve(l.absUrl()) !== ve(r) && s.url(l.absUrl(), !0);
            var p = !0;
            return s.onUrlChange(function(r, i) {
                $e(r, f) ? (a.$evalAsync(function() {
                    var t, e = l.absUrl(),
                        n = l.$$state;
                    r = ve(r), l.$$parse(r), l.$$state = i, t = a.$broadcast("$locationChangeStart", r, e, i, n).defaultPrevented, l.absUrl() === r && (t ? (l.$$parse(e), u(e, !1, l.$$state = n)) : (p = !1, c(e, n)))
                }), a.$$phase || a.$digest()) : o.location.href = r
            }), a.$watch(function() {
                if (p || l.$$urlUpdatedByLocation) {
                    l.$$urlUpdatedByLocation = !1;
                    var n = ve(s.url()),
                        t = ve(l.absUrl()),
                        r = s.state(),
                        i = l.$$replace,
                        o = n !== t || l.$$html5 && e.history && r !== l.$$state;
                    (p || o) && (p = !1, a.$evalAsync(function() {
                        var t = l.absUrl(),
                            e = a.$broadcast("$locationChangeStart", t, n, l.$$state, r).defaultPrevented;
                        l.absUrl() === t && (e ? (l.$$parse(n), l.$$state = r) : (o && u(t, i, r === l.$$state ? null : l.$$state), c(n, r)))
                    }))
                }
                l.$$replace = !1
            }), l
        }]
    }

    function Se() {
        var r = !0,
            o = this;
        this.debugEnabled = function(t) {
            return $t(t) ? (r = t, this) : r
        }, this.$get = ["$window", function(n) {
            function t(t) {
                var e = n.console || {},
                    r = e[t] || e.log || ft;
                return function() {
                    var n = [];
                    return ut(arguments, function(t) {
                        var e;
                        n.push((vt(e = t) && (e.stack && i ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e))
                    }), Function.prototype.apply.call(r, e, n)
                }
            }
            var e, i = Ln || /\bEdge\//.test(n.navigator && n.navigator.userAgent);
            return {
                log: t("log"),
                info: t("info"),
                warn: t("warn"),
                error: t("error"),
                debug: (e = t("debug"), function() {
                    r && e.apply(o, arguments)
                })
            }
        }]
    }

    function Ee(t) {
        return t + ""
    }

    function ke(t, e) {
        return void 0 !== t ? t : e
    }

    function Ae(t, e) {
        return void 0 === t ? e : void 0 === e ? t : t + e
    }

    function Oe(t, e, n) {
        var r, i, o = t.isPure = function(t, e) {
            switch (t.type) {
                case xi.MemberExpression:
                    if (t.computed) return !1;
                    break;
                case xi.UnaryExpression:
                    return 1;
                case xi.BinaryExpression:
                    return "+" !== t.operator && 1;
                case xi.CallExpression:
                    return !1
            }
            return void 0 === e ? Ci : e
        }(t, n);
        switch (t.type) {
            case xi.Program:
                r = !0, ut(t.body, function(t) {
                    Oe(t.expression, e, o), r = r && t.expression.constant
                }), t.constant = r;
                break;
            case xi.Literal:
                t.constant = !0, t.toWatch = [];
                break;
            case xi.UnaryExpression:
                Oe(t.argument, e, o), t.constant = t.argument.constant, t.toWatch = t.argument.toWatch;
                break;
            case xi.BinaryExpression:
                Oe(t.left, e, o), Oe(t.right, e, o), t.constant = t.left.constant && t.right.constant, t.toWatch = t.left.toWatch.concat(t.right.toWatch);
                break;
            case xi.LogicalExpression:
                Oe(t.left, e, o), Oe(t.right, e, o), t.constant = t.left.constant && t.right.constant, t.toWatch = t.constant ? [] : [t];
                break;
            case xi.ConditionalExpression:
                Oe(t.test, e, o), Oe(t.alternate, e, o), Oe(t.consequent, e, o), t.constant = t.test.constant && t.alternate.constant && t.consequent.constant, t.toWatch = t.constant ? [] : [t];
                break;
            case xi.Identifier:
                t.constant = !1, t.toWatch = [t];
                break;
            case xi.MemberExpression:
                Oe(t.object, e, o), t.computed && Oe(t.property, e, o), t.constant = t.object.constant && (!t.computed || t.property.constant), t.toWatch = t.constant ? [] : [t];
                break;
            case xi.CallExpression:
                r = n = !!t.filter && !e(t.callee.name).$stateful, i = [], ut(t.arguments, function(t) {
                    Oe(t, e, o), r = r && t.constant, i.push.apply(i, t.toWatch)
                }), t.constant = r, t.toWatch = n ? i : [t];
                break;
            case xi.AssignmentExpression:
                Oe(t.left, e, o), Oe(t.right, e, o), t.constant = t.left.constant && t.right.constant, t.toWatch = [t];
                break;
            case xi.ArrayExpression:
                r = !0, i = [], ut(t.elements, function(t) {
                    Oe(t, e, o), r = r && t.constant, i.push.apply(i, t.toWatch)
                }), t.constant = r, t.toWatch = i;
                break;
            case xi.ObjectExpression:
                r = !0, i = [], ut(t.properties, function(t) {
                    Oe(t.value, e, o), r = r && t.value.constant, i.push.apply(i, t.value.toWatch), t.computed && (Oe(t.key, e, !1), r = r && t.key.constant, i.push.apply(i, t.key.toWatch))
                }), t.constant = r, t.toWatch = i;
                break;
            case xi.ThisExpression:
                t.constant = !1, t.toWatch = [];
                break;
            case xi.LocalsExpression:
                t.constant = !1, t.toWatch = []
        }
    }

    function Me(t) {
        if (1 === t.length) {
            var e = (t = t[0].expression).toWatch;
            return 1 !== e.length ? e : e[0] !== t ? e : void 0
        }
    }

    function Ve(t) {
        return t.type === xi.Identifier || t.type === xi.MemberExpression
    }

    function Te(t) {
        if (1 === t.body.length && Ve(t.body[0].expression)) return {
            type: xi.AssignmentExpression,
            left: t.body[0].expression,
            right: {
                type: xi.NGValueParameter
            },
            operator: "="
        }
    }

    function Ne(t) {
        this.$filter = t
    }

    function Ie(t) {
        this.$filter = t
    }

    function je(t, e, n) {
        this.ast = new xi(t, n), this.astCompiler = n.csp ? new Ie(e) : new Ne(e)
    }

    function De(t) {
        return gt(t.valueOf) ? t.valueOf() : gi.call(t)
    }

    function Pe() {
        var n, r, f = Mt(),
            p = {
                true: !0,
                false: !1,
                null: null,
                undefined: void 0
            };
        this.addLiteral = function(t, e) {
            p[t] = e
        }, this.setIdentifierFns = function(t, e) {
            return n = t, r = e, this
        }, this.$get = ["$filter", function(i) {
            function t(t, e) {
                var n, r;
                switch (typeof t) {
                    case "string":
                        return r = t = t.trim(), (n = f[r]) || ((n = new je(n = new wi(l), i, l).parse(t)).constant ? n.$$watchDelegate = o : n.oneTime ? n.$$watchDelegate = n.literal ? c : s : n.inputs && (n.$$watchDelegate = u), f[r] = n), a(n, e);
                    case "function":
                        return a(t, e);
                    default:
                        return a(ft, e)
                }
            }

            function h(t, e, n) {
                return null == t || null == e ? t === e : !("object" == typeof t && ("object" == typeof(t = De(t)) && !n)) && (t === e || t != t && e != e)
            }

            function u(t, e, n, o, r) {
                var a;
                if (1 === (s = o.inputs).length) {
                    var i = h,
                        s = s[0];
                    return t.$watch(function(t) {
                        var e = s(t);
                        return h(e, i, s.isPure) || (a = o(t, void 0, void 0, [e]), i = e && De(e)), a
                    }, e, n, r)
                }
                for (var u = [], c = [], l = 0, f = s.length; l < f; l++) u[l] = h, c[l] = null;
                return t.$watch(function(t) {
                    for (var e = !1, n = 0, r = s.length; n < r; n++) {
                        var i = s[n](t);
                        (e || (e = !h(i, u[n], s[n].isPure))) && (c[n] = i, u[n] = i && De(i))
                    }
                    return e && (a = o(t, void 0, void 0, c)), a
                }, e, n, r)
            }

            function s(t, r, e, n, i) {
                function o(t, e, n) {
                    s = t, gt(r) && r(t, e, n), $t(t) && n.$$postDigest(function() {
                        $t(s) && a()
                    })
                }
                var a, s;
                return a = n.inputs ? u(t, o, e, n, i) : t.$watch(function(t) {
                    return n(t)
                }, o, e)
            }

            function c(t, r, e, n) {
                function i(t) {
                    var e = !0;
                    return ut(t, function(t) {
                        $t(t) || (e = !1)
                    }), e
                }
                var o, a;
                return o = t.$watch(function(t) {
                    return n(t)
                }, function(t, e, n) {
                    a = t, gt(r) && r(t, e, n), i(t) && n.$$postDigest(function() {
                        i(a) && o()
                    })
                }, e)
            }

            function o(t, e, n, r) {
                var i = t.$watch(function(t) {
                    return i(), r(t)
                }, e, n);
                return i
            }

            function a(i, o) {
                if (!o) return i;
                var t = i.$$watchDelegate,
                    a = !1,
                    e = t !== c && t !== s ? function(t, e, n, r) {
                        return n = a && r ? r[0] : i(t, e, n, r), o(n, t, e)
                    } : function(t, e, n, r) {
                        return n = i(t, e, n, r), t = o(n, t, e), $t(n) ? t : n
                    };
                a = !i.inputs;
                return t && t !== u ? (e.$$watchDelegate = t, e.inputs = i.inputs) : o.$stateful || (e.$$watchDelegate = u, e.inputs = i.inputs ? i.inputs : [i]), e.inputs && (e.inputs = e.inputs.map(function(e) {
                    return e.isPure === Ci ? function(t) {
                        return e(t)
                    } : e
                })), e
            }
            var l = {
                csp: lr().noUnsafeEval,
                literals: E(p),
                isIdentifierStart: gt(n) && n,
                isIdentifierContinue: gt(r) && r
            };
            return t.$$getAst = function(t) {
                return new je(new wi(l), i, l).getAst(t).ast
            }, t
        }]
    }

    function Ue() {
        var n = !0;
        this.$get = ["$rootScope", "$exceptionHandler", function(e, t) {
            return _e(function(t) {
                e.$evalAsync(t)
            }, t, n)
        }], this.errorOnUnhandledRejections = function(t) {
            return $t(t) ? (n = t, this) : n
        }
    }

    function Re() {
        var n = !0;
        this.$get = ["$browser", "$exceptionHandler", function(e, t) {
            return _e(function(t) {
                e.defer(t)
            }, t, n)
        }], this.errorOnUnhandledRejections = function(t) {
            return $t(t) ? (n = t, this) : n
        }
    }

    function _e(a, s, u) {
        function n() {
            return new t
        }

        function t() {
            var e = this.promise = new o;
            this.resolve = function(t) {
                f(e, t)
            }, this.reject = function(t) {
                h(e, t)
            }, this.notify = function(t) {
                $(e, t)
            }
        }

        function o() {
            this.$$state = {
                status: 0
            }
        }

        function c() {
            for (; !v && g.length;) {
                var t = g.shift();
                if (!t.pur) {
                    t.pur = !0;
                    var e = "Possibly unhandled rejection: " + ("function" == typeof(e = t.value) ? e.toString().replace(/ \{[\s\S]*$/, "") : pt(e) ? "undefined" : "string" != typeof e ? R(e, void 0) : e);
                    vt(t.value) ? s(t.value, e) : s(e)
                }
            }
        }

        function l(o) {
            !u || o.pending || 2 !== o.status || o.pur || (0 === v && 0 === g.length && a(c), g.push(o)), !o.processScheduled && o.pending && (o.processScheduled = !0, ++v, a(function() {
                var t, e, n;
                n = o.pending, o.processScheduled = !1, o.pending = void 0;
                try {
                    for (var r = 0, i = n.length; r < i; ++r) {
                        o.pur = !0, e = n[r][0], t = n[r][o.status];
                        try {
                            gt(t) ? f(e, t(o.value)) : 1 === o.status ? f(e, o.value) : h(e, o.value)
                        } catch (t) {
                            h(e, t), t && !0 === t.$$passToExceptionHandler && s(t)
                        }
                    }
                } finally {
                    --v, u && 0 === v && a(c)
                }
            }))
        }

        function f(t, e) {
            t.$$state.status || (e === t ? p(t, m("qcycle", e)) : function e(n, t) {
                function r(t) {
                    a || (a = !0, e(n, t))
                }

                function i(t) {
                    a || (a = !0, p(n, t))
                }
                var o, a = !1;
                try {
                    (dt(t) || gt(t)) && (o = t.then), gt(o) ? (n.$$state.status = -1, o.call(t, function r(t) {
                        a || (a = !0, function e(n, t) {
                            function r(t) {
                                a || (a = !0, e(n, t))
                            }

                            function i(t) {
                                a || (a = !0, p(n, t))
                            }
                            var o, a = !1;
                            try {
                                (dt(t) || gt(t)) && (o = t.then), gt(o) ? (n.$$state.status = -1, o.call(t, r, i, function(t) {
                                    $(n, t)
                                })) : (n.$$state.value = t, n.$$state.status = 1, l(n.$$state))
                            } catch (t) {
                                i(t)
                            }
                        }(n, t))
                    }, i, function(t) {
                        $(n, t)
                    })) : (n.$$state.value = t, n.$$state.status = 1, l(n.$$state))
                } catch (t) {
                    i(t)
                }
            }(t, e))
        }

        function h(t, e) {
            t.$$state.status || p(t, e)
        }

        function p(t, e) {
            t.$$state.value = e, t.$$state.status = 2, l(t.$$state)
        }

        function $(t, i) {
            var o = t.$$state.pending;
            t.$$state.status <= 0 && o && o.length && a(function() {
                for (var t, e, n = 0, r = o.length; n < r; n++) {
                    e = o[n][0], t = o[n][3];
                    try {
                        $(e, gt(t) ? t(i) : i)
                    } catch (t) {
                        s(t)
                    }
                }
            })
        }

        function i(t) {
            var e = new o;
            return h(e, t), e
        }

        function r(t, e, n) {
            var r = null;
            try {
                gt(n) && (r = n())
            } catch (t) {
                return i(t)
            }
            return r && gt(r.then) ? r.then(function() {
                return e(t)
            }, i) : e(t)
        }

        function d(t, e, n, r) {
            var i = new o;
            return f(i, t), i.then(e, n, r)
        }

        function e(t) {
            if (!gt(t)) throw m("norslvr", t);
            var e = new o;
            return t(function(t) {
                f(e, t)
            }, function(t) {
                h(e, t)
            }), e
        }
        var m = S("$q", TypeError),
            v = 0,
            g = [];
        ct(o.prototype, {
            then: function(t, e, n) {
                if (pt(t) && pt(e) && pt(n)) return this;
                var r = new o;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, t, e, n]), 0 < this.$$state.status && l(this.$$state), r
            },
            catch: function(t) {
                return this.then(null, t)
            },
            finally: function(e, t) {
                return this.then(function(t) {
                    return r(t, y, e)
                }, function(t) {
                    return r(t, i, e)
                }, t)
            }
        });
        var y = d;
        return e.prototype = o.prototype, e.defer = n, e.reject = i, e.when = d, e.resolve = y, e.all = function(t) {
            var n = new o,
                r = 0,
                i = ar(t) ? [] : {};
            return ut(t, function(t, e) {
                r++, d(t).then(function(t) {
                    i[e] = t, --r || f(n, i)
                }, function(t) {
                    h(n, t)
                })
            }), 0 === r && f(n, i), n
        }, e.race = function(t) {
            var e = n();
            return ut(t, function(t) {
                d(t).then(e.resolve, e.reject)
            }), e.promise
        }, e
    }

    function Le() {
        this.$get = ["$window", "$timeout", function(t, n) {
            var r = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
                i = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.webkitCancelRequestAnimationFrame,
                e = !!r,
                o = e ? function(t) {
                    var e = r(t);
                    return function() {
                        i(e)
                    }
                } : function(t) {
                    var e = n(t, 16.66, !1);
                    return function() {
                        n.cancel(e)
                    }
                };
            return o.supported = e, o
        }]
    }

    function qe() {
        var b = 10,
            w = S("$rootScope"),
            x = null,
            C = null;
        this.digestTtl = function(t) {
            return arguments.length && (b = t), b
        }, this.$get = ["$exceptionHandler", "$parse", "$browser", function(l, $, f) {
            function r(t) {
                t.currentScope.$$destroyed = !0
            }

            function i() {
                this.$id = ++nr, this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, (this.$root = this).$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
            }

            function h(t) {
                if (m.$$phase) throw w("inprog", m.$$phase);
                m.$$phase = t
            }

            function u(t, e) {
                for (; t.$$watchersCount += e, t = t.$parent;);
            }

            function o(t, e, n) {
                for (; t.$$listenerCount[n] -= e, 0 === t.$$listenerCount[n] && delete t.$$listenerCount[n], t = t.$parent;);
            }

            function p() {}

            function d() {
                for (; n.length;) try {
                    n.shift()()
                } catch (t) {
                    l(t)
                }
                C = null
            }
            i.prototype = {
                constructor: i,
                $new: function(t, e) {
                    var n;
                    return e = e || this, t ? (n = new i).$root = this.$root : (this.$$ChildScope || (this.$$ChildScope = function(t) {
                        function e() {
                            this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = ++nr, this.$$ChildScope = null
                        }
                        return e.prototype = t, e
                    }(this)), n = new this.$$ChildScope), n.$parent = e, n.$$prevSibling = e.$$childTail, e.$$childHead ? (e.$$childTail.$$nextSibling = n, e.$$childTail = n) : e.$$childHead = e.$$childTail = n, (t || e !== this) && n.$on("$destroy", r), n
                },
                $watch: function(t, e, n, r) {
                    var i = $(t);
                    if (e = gt(e) ? e : ft, i.$$watchDelegate) return i.$$watchDelegate(this, e, n, i, t);
                    var o = this,
                        a = o.$$watchers,
                        s = {
                            fn: e,
                            last: p,
                            get: i,
                            exp: r || t,
                            eq: !!n
                        };
                    return x = null, a || ((a = o.$$watchers = []).$$digestWatchIndex = -1), a.unshift(s), a.$$digestWatchIndex++, u(this, 1),
                        function() {
                            var t = xt(a, s);
                            0 <= t && (u(o, -1), t < a.$$digestWatchIndex && a.$$digestWatchIndex--), x = null
                        }
                },
                $watchGroup: function(t, r) {
                    function i() {
                        c = !1, e ? (e = !1, r(a, a, u)) : r(a, o, u)
                    }
                    var o = Array(t.length),
                        a = Array(t.length),
                        s = [],
                        u = this,
                        c = !1,
                        e = !0;
                    if (!t.length) {
                        var n = !0;
                        return u.$evalAsync(function() {
                                n && r(a, a, u)
                            }),
                            function() {
                                n = !1
                            }
                    }
                    return 1 === t.length ? this.$watch(t[0], function(t, e, n) {
                        a[0] = t, o[0] = e, r(a, t === e ? a : o, n)
                    }) : (ut(t, function(t, n) {
                        var e = u.$watch(t, function(t, e) {
                            a[n] = t, o[n] = e, c || (c = !0, u.$evalAsync(i))
                        });
                        s.push(e)
                    }), function() {
                        for (; s.length;) s.shift()()
                    })
                },
                $watchCollection: function(t, e) {
                    function n(t) {
                        var e, n, r;
                        if (!pt(i = t)) {
                            if (dt(i))
                                if (O(i))
                                    for (o !== l && (p = (o = l).length = 0, u++), t = i.length, p !== t && (u++, o.length = p = t), e = 0; e < t; e++) r = o[e], n = i[e], r != r && n != n || r === n || (u++, o[e] = n);
                                else {
                                    for (e in o !== f && (o = f = {}, p = 0, u++), t = 0, i) Wn.call(i, e) && (t++, n = i[e], r = o[e], e in o ? r != r && n != n || r === n || (u++, o[e] = n) : (p++, o[e] = n, u++));
                                    if (t < p)
                                        for (e in u++, o) Wn.call(i, e) || (p--, delete o[e])
                                } else o !== i && (o = i, u++);
                            return u
                        }
                    }
                    n.$stateful = !0;
                    var i, o, r, a = this,
                        s = 1 < e.length,
                        u = 0,
                        c = $(t, n),
                        l = [],
                        f = {},
                        h = !0,
                        p = 0;
                    return this.$watch(c, function() {
                        if (h ? (h = !1, e(i, i, a)) : e(i, r, a), s)
                            if (dt(i))
                                if (O(i)) {
                                    r = Array(i.length);
                                    for (var t = 0; t < i.length; t++) r[t] = i[t]
                                } else
                                    for (t in r = {}, i) Wn.call(i, t) && (r[t] = i[t]);
                        else r = i
                    })
                },
                $digest: function() {
                    var t, e, n, r, i, o, a, s, u = b,
                        c = [];
                    h("$digest"), f.$$checkUrlChange(), this === m && null !== C && (f.defer.cancel(C), d()), x = null;
                    do {
                        for (i = !1, o = this, r = 0; r < v.length; r++) {
                            try {
                                (0, (s = v[r]).fn)(s.scope, s.locals)
                            } catch (t) {
                                l(t)
                            }
                            x = null
                        }
                        v.length = 0;
                        t: do {
                            if (r = o.$$watchers)
                                for (r.$$digestWatchIndex = r.length; r.$$digestWatchIndex--;) try {
                                    if (t = r[r.$$digestWatchIndex])
                                        if ((e = (0, t.get)(o)) === (n = t.last) || (t.eq ? St(e, n) : rr(e) && rr(n))) {
                                            if (t === x) {
                                                i = !1;
                                                break t
                                            }
                                        } else i = !0, (x = t).last = t.eq ? E(e, null) : e, (0, t.fn)(e, n === p ? e : n, o), u < 5 && (c[a = 4 - u] || (c[a] = []), c[a].push({
                                            msg: gt(t.exp) ? "fn: " + (t.exp.name || t.exp.toString()) : t.exp,
                                            newVal: e,
                                            oldVal: n
                                        }))
                                } catch (t) {
                                    l(t)
                                }
                            if (!(r = o.$$watchersCount && o.$$childHead || o !== this && o.$$nextSibling))
                                for (; o !== this && !(r = o.$$nextSibling);) o = o.$parent
                        } while (o = r);
                        if ((i || v.length) && !u--) throw m.$$phase = null, w("infdig", b, c)
                    } while (i || v.length);
                    for (m.$$phase = null; y < g.length;) try {
                        g[y++]()
                    } catch (t) {
                        l(t)
                    }
                    g.length = y = 0, f.$$checkUrlChange()
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var t = this.$parent;
                        for (var e in this.$broadcast("$destroy"), this.$$destroyed = !0, this === m && f.$$applicationDestroyed(), u(this, -this.$$watchersCount), this.$$listenerCount) o(this, this.$$listenerCount[e], e);
                        t && t.$$childHead === this && (t.$$childHead = this.$$nextSibling), t && t.$$childTail === this && (t.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = ft, this.$on = this.$watch = this.$watchGroup = function() {
                                return ft
                            }, this.$$listeners = {}, this.$$nextSibling = null,
                            function t(e) {
                                9 === Ln && (e.$$childHead && t(e.$$childHead), e.$$nextSibling && t(e.$$nextSibling)), e.$parent = e.$$nextSibling = e.$$prevSibling = e.$$childHead = e.$$childTail = e.$root = e.$$watchers = null
                            }(this)
                    }
                },
                $eval: function(t, e) {
                    return $(t)(this, e)
                },
                $evalAsync: function(t, e) {
                    m.$$phase || v.length || f.defer(function() {
                        v.length && m.$digest()
                    }), v.push({
                        scope: this,
                        fn: $(t),
                        locals: e
                    })
                },
                $$postDigest: function(t) {
                    g.push(t)
                },
                $apply: function(t) {
                    try {
                        h("$apply");
                        try {
                            return this.$eval(t)
                        } finally {
                            m.$$phase = null
                        }
                    } catch (t) {
                        l(t)
                    } finally {
                        try {
                            m.$digest()
                        } catch (t) {
                            throw l(t), t
                        }
                    }
                },
                $applyAsync: function(t) {
                    var e = this;
                    t && n.push(function() {
                        e.$eval(t)
                    }), t = $(t), null === C && (C = f.defer(function() {
                        m.$apply(d)
                    }))
                },
                $on: function(e, n) {
                    var r = this.$$listeners[e];
                    r || (this.$$listeners[e] = r = []), r.push(n);
                    for (var t = this; t.$$listenerCount[e] || (t.$$listenerCount[e] = 0), t.$$listenerCount[e]++, t = t.$parent;);
                    var i = this;
                    return function() {
                        var t = r.indexOf(n); - 1 !== t && (delete r[t], o(i, 1, e))
                    }
                },
                $emit: function(t, e) {
                    var n, r, i, o = [],
                        a = this,
                        s = !1,
                        u = {
                            name: t,
                            targetScope: a,
                            stopPropagation: function() {
                                s = !0
                            },
                            preventDefault: function() {
                                u.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        c = k([u], arguments, 1);
                    do {
                        for (n = a.$$listeners[t] || o, u.currentScope = a, r = 0, i = n.length; r < i; r++)
                            if (n[r]) try {
                                n[r].apply(null, c)
                            } catch (t) {
                                l(t)
                            } else n.splice(r, 1), r--, i--;
                        if (s) break;
                        a = a.$parent
                    } while (a);
                    return u.currentScope = null, u
                },
                $broadcast: function(t, e) {
                    var n = this,
                        r = this,
                        i = {
                            name: t,
                            targetScope: this,
                            preventDefault: function() {
                                i.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        };
                    if (!this.$$listenerCount[t]) return i;
                    for (var o, a, s = k([i], arguments, 1); n = r;) {
                        for (o = 0, a = (r = (i.currentScope = n).$$listeners[t] || []).length; o < a; o++)
                            if (r[o]) try {
                                r[o].apply(null, s)
                            } catch (t) {
                                l(t)
                            } else r.splice(o, 1), o--, a--;
                        if (!(r = n.$$listenerCount[t] && n.$$childHead || n !== this && n.$$nextSibling))
                            for (; n !== this && !(r = n.$$nextSibling);) n = n.$parent
                    }
                    return i.currentScope = null, i
                }
            };
            var m = new i,
                v = m.$$asyncQueue = [],
                g = m.$$postDigestQueue = [],
                n = m.$$applyAsyncQueue = [],
                y = 0;
            return m
        }]
    }

    function Fe() {
        var i = /^\s*(https?|s?ftp|mailto|tel|file):/,
            o = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(t) {
            return $t(t) ? (i = t, this) : i
        }, this.imgSrcSanitizationWhitelist = function(t) {
            return $t(t) ? (o = t, this) : o
        }, this.$get = function() {
            return function(t, e) {
                var n, r = e ? o : i;
                return "" === (n = Ze(t && t.trim()).href) || n.match(r) ? t : "unsafe:" + n
            }
        }
    }

    function Be(t) {
        var e = [];
        return $t(t) && ut(t, function(t) {
            e.push(function(t) {
                if ("self" === t) return t;
                if (mt(t)) {
                    if (-1 < t.indexOf("***")) throw Si("iwcard", t);
                    return t = cr(t).replace(/\\\*\\\*/g, ".*").replace(/\\\*/g, "[^:/.?&;]*"), new RegExp("^" + t + "$")
                }
                if ($(t)) return new RegExp("^" + t.source + "$");
                throw Si("imatcher")
            }(t))
        }), e
    }

    function He() {
        this.SCE_CONTEXTS = Ei;
        var c = ["self"],
            l = [];
        this.resourceUrlWhitelist = function(t) {
            return arguments.length && (c = Be(t)), c
        }, this.resourceUrlBlacklist = function(t) {
            return arguments.length && (l = Be(t)), l
        }, this.$get = ["$injector", function(t) {
            function a(t, e) {
                return "self" === t ? Ye(e) : !!t.exec(e.href)
            }

            function e(t) {
                var e = function(t) {
                    this.$$unwrapTrustedValue = function() {
                        return t
                    }
                };
                return t && (e.prototype = new t), e.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue()
                }, e.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString()
                }, e
            }
            var s = function(t) {
                throw Si("unsafe")
            };
            t.has("$sanitize") && (s = t.get("$sanitize"));
            var n = e(),
                u = {};
            return u[Ei.HTML] = e(n), u[Ei.CSS] = e(n), u[Ei.URL] = e(n), u[Ei.JS] = e(n), u[Ei.RESOURCE_URL] = e(u[Ei.URL]), {
                trustAs: function(t, e) {
                    var n = u.hasOwnProperty(t) ? u[t] : null;
                    if (!n) throw Si("icontext", t, e);
                    if (null === e || pt(e) || "" === e) return e;
                    if ("string" != typeof e) throw Si("itype", t);
                    return new n(e)
                },
                getTrusted: function(t, e) {
                    if (null === e || pt(e) || "" === e) return e;
                    if ((i = u.hasOwnProperty(t) ? u[t] : null) && e instanceof i) return e.$$unwrapTrustedValue();
                    if (t === Ei.RESOURCE_URL) {
                        var n, r, i = Ze(e.toString()),
                            o = !1;
                        for (n = 0, r = c.length; n < r; n++)
                            if (a(c[n], i)) {
                                o = !0;
                                break
                            }
                        if (o)
                            for (n = 0, r = l.length; n < r; n++)
                                if (a(l[n], i)) {
                                    o = !1;
                                    break
                                }
                        if (o) return e;
                        throw Si("insecurl", e.toString())
                    }
                    if (t === Ei.HTML) return s(e);
                    throw Si("unsafe")
                },
                valueOf: function(t) {
                    return t instanceof n ? t.$$unwrapTrustedValue() : t
                }
            }
        }]
    }

    function ze() {
        var e = !0;
        this.enabled = function(t) {
            return arguments.length && (e = !!t), e
        }, this.$get = ["$parse", "$sceDelegate", function(r, t) {
            if (e && Ln < 8) throw Si("iequirks");
            var i = U(Ei);
            i.isEnabled = function() {
                return e
            }, i.trustAs = t.trustAs, i.getTrusted = t.getTrusted, i.valueOf = t.valueOf, e || (i.trustAs = i.getTrusted = function(t, e) {
                return e
            }, i.valueOf = ht), i.parseAs = function(e, t) {
                var n = r(t);
                return n.literal && n.constant ? n : r(t, function(t) {
                    return i.getTrusted(e, t)
                })
            };
            var o = i.parseAs,
                a = i.getTrusted,
                s = i.trustAs;
            return ut(Ei, function(e, t) {
                var n = Gn(t);
                i[("parse_as_" + n).replace(ki, L)] = function(t) {
                    return o(e, t)
                }, i[("get_trusted_" + n).replace(ki, L)] = function(t) {
                    return a(e, t)
                }, i[("trust_as_" + n).replace(ki, L)] = function(t) {
                    return s(e, t)
                }
            }), i
        }]
    }

    function We() {
        this.$get = ["$window", "$document", function(t, e) {
            var n = {},
                r = !((!t.nw || !t.nw.process) && t.chrome && (t.chrome.app && t.chrome.app.runtime || !t.chrome.app && t.chrome.runtime && t.chrome.runtime.id)) && t.history && t.history.pushState,
                i = l((/android (\d+)/.exec(Gn((t.navigator || {}).userAgent)) || [])[1]),
                o = /Boxee/i.test((t.navigator || {}).userAgent),
                a = e[0] || {},
                s = a.body && a.body.style,
                u = !1,
                c = !1;
            return s && (u = !!("transition" in s || "webkitTransition" in s), c = !!("animation" in s || "webkitAnimation" in s)), {
                history: !(!r || i < 4 || o),
                hasEvent: function(t) {
                    if ("input" === t && Ln) return !1;
                    if (pt(n[t])) {
                        var e = a.createElement("div");
                        n[t] = "on" + t in e
                    }
                    return n[t]
                },
                csp: lr(),
                transitions: u,
                animations: c,
                android: i
            }
        }]
    }

    function Ge() {
        var c;
        this.httpOptions = function(t) {
            return t ? (c = t, this) : c
        }, this.$get = ["$exceptionHandler", "$templateCache", "$http", "$q", "$sce", function(r, i, o, a, s) {
            function u(e, n) {
                u.totalPendingRequests++, mt(e) && !pt(i.get(e)) || (e = s.getTrustedResourceUrl(e));
                var t = o.defaults && o.defaults.transformResponse;
                return ar(t) ? t = t.filter(function(t) {
                    return t !== ne
                }) : t === ne && (t = null), o.get(e, ct({
                    cache: i,
                    transformResponse: t
                }, c)).finally(function() {
                    u.totalPendingRequests--
                }).then(function(t) {
                    return i.put(e, t.data), t.data
                }, function(t) {
                    return n || (t = Ai("tpload", e, t.status, t.statusText), r(t)), a.reject(t)
                })
            }
            return u.totalPendingRequests = 0, u
        }]
    }

    function Ke() {
        this.$get = ["$rootScope", "$browser", "$location", function(e, n, r) {
            return {
                findBindings: function(t, n, r) {
                    t = t.getElementsByClassName("ng-binding");
                    var i = [];
                    return ut(t, function(e) {
                        var t = er.element(e).data("$binding");
                        t && ut(t, function(t) {
                            r ? new RegExp("(^|\\s)" + cr(n) + "(\\s|\\||$)").test(t) && i.push(e) : -1 !== t.indexOf(n) && i.push(e)
                        })
                    }), i
                },
                findModels: function(t, e, n) {
                    for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
                        var o = t.querySelectorAll("[" + r[i] + "model" + (n ? "=" : "*=") + '"' + e + '"]');
                        if (o.length) return o
                    }
                },
                getLocation: function() {
                    return r.url()
                },
                setLocation: function(t) {
                    t !== r.url() && (r.url(t), e.$digest())
                },
                whenStable: function(t) {
                    n.notifyWhenNoOutstandingRequests(t)
                }
            }
        }]
    }

    function Je() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(u, c, l, f, h) {
            function t(t, e, n) {
                gt(t) || (n = e, e = t, t = ft);
                var r, i = Jn.call(arguments, 3),
                    o = $t(n) && !n,
                    a = (o ? f : l).defer(),
                    s = a.promise;
                return r = c.defer(function() {
                    try {
                        a.resolve(t.apply(null, i))
                    } catch (t) {
                        a.reject(t), h(t)
                    } finally {
                        delete p[s.$$timeoutId]
                    }
                    o || u.$apply()
                }, e), s.$$timeoutId = r, p[r] = a, s
            }
            var p = {};
            return t.cancel = function(t) {
                return !!(t && t.$$timeoutId in p) && (p[t.$$timeoutId].promise.$$state.pur = !0, p[t.$$timeoutId].reject("canceled"), delete p[t.$$timeoutId], c.defer.cancel(t.$$timeoutId))
            }, t
        }]
    }

    function Ze(t) {
        return Ln && (Oi.setAttribute("href", t), t = Oi.href), Oi.setAttribute("href", t), {
            href: Oi.href,
            protocol: Oi.protocol ? Oi.protocol.replace(/:$/, "") : "",
            host: Oi.host,
            search: Oi.search ? Oi.search.replace(/^\?/, "") : "",
            hash: Oi.hash ? Oi.hash.replace(/^#/, "") : "",
            hostname: Oi.hostname,
            port: Oi.port,
            pathname: "/" === Oi.pathname.charAt(0) ? Oi.pathname : "/" + Oi.pathname
        }
    }

    function Ye(t) {
        return (t = mt(t) ? Ze(t) : t).protocol === Mi.protocol && t.host === Mi.host
    }

    function Qe() {
        this.$get = C(st)
    }

    function Xe(t) {
        function o(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return e
            }
        }
        var a = t[0] || {},
            s = {},
            u = "";
        return function() {
            var e, t, n, r, i;
            try {
                e = a.cookie || ""
            } catch (t) {
                e = ""
            }
            if (e !== u)
                for (e = (u = e).split("; "), s = {}, n = 0; n < e.length; n++) 0 < (r = (t = e[n]).indexOf("=")) && (i = o(t.substring(0, r)), pt(s[i]) && (s[i] = o(t.substring(r + 1))));
            return s
        }
    }

    function tn() {
        this.$get = Xe
    }

    function en(r) {
        function i(t, e) {
            if (dt(t)) {
                var n = {};
                return ut(t, function(t, e) {
                    n[e] = i(e, t)
                }), n
            }
            return r.factory(t + "Filter", e)
        }
        this.register = i, this.$get = ["$injector", function(e) {
            return function(t) {
                return e.get(t + "Filter")
            }
        }], i("currency", an), i("date", dn), i("filter", nn), i("json", mn), i("limitTo", vn), i("lowercase", Pi), i("number", sn), i("orderBy", yn), i("uppercase", Ui)
    }

    function nn() {
        return function(t, e, n, r) {
            if (!O(t)) {
                if (null == t) return t;
                throw S("filter")("notarray", t)
            }
            var i, o, a, s, u, c;
            switch (r = r || "$", on(e)) {
                case "function":
                    break;
                case "boolean":
                case "null":
                case "number":
                case "string":
                    i = !0;
                case "object":
                    a = n, s = r, u = i, c = dt(o = e) && s in o, !0 === a ? a = St : gt(a) || (a = function(t, e) {
                        return !(pt(t) || (null === t || null === e ? t !== e : dt(e) || dt(t) && !f(t) || (t = Gn("" + t), e = Gn("" + e), -1 === t.indexOf(e))))
                    }), e = function(t) {
                        return c && !dt(t) ? rn(t, o[s], a, s, !1) : rn(t, o, a, s, u)
                    };
                    break;
                default:
                    return t
            }
            return Array.prototype.filter.call(t, e)
        }
    }

    function rn(t, e, n, r, i, o) {
        var a = on(t),
            s = on(e);
        if ("string" === s && "!" === e.charAt(0)) return !rn(t, e.substring(1), n, r, i);
        if (ar(t)) return t.some(function(t) {
            return rn(t, e, n, r, i)
        });
        switch (a) {
            case "object":
                var u;
                if (i) {
                    for (u in t)
                        if (u.charAt && "$" !== u.charAt(0) && rn(t[u], e, n, r, !0)) return !0;
                    return !o && rn(t, e, n, r, !1)
                }
                if ("object" === s) {
                    for (u in e)
                        if (!gt(o = e[u]) && !pt(o) && !rn((a = u === r) ? t : t[u], o, n, r, a, a)) return !1;
                    return !0
                }
                return n(t, e);
            case "function":
                return !1;
            default:
                return n(t, e)
        }
    }

    function on(t) {
        return null === t ? "null" : typeof t
    }

    function an(t) {
        var i = t.NUMBER_FORMATS;
        return function(t, e, n) {
            pt(e) && (e = i.CURRENCY_SYM), pt(n) && (n = i.PATTERNS[1].maxFrac);
            var r = e ? /\u00A4/g : /\s*\u00A4\s*/g;
            return null == t ? t : un(t, i.PATTERNS[1], i.GROUP_SEP, i.DECIMAL_SEP, n).replace(r, e)
        }
    }

    function sn(t) {
        var n = t.NUMBER_FORMATS;
        return function(t, e) {
            return null == t ? t : un(t, n.PATTERNS[0], n.GROUP_SEP, n.DECIMAL_SEP, e)
        }
    }

    function un(t, e, n, r, i) {
        if (!mt(t) && !p(t) || isNaN(t)) return "";
        var o = !isFinite(t),
            a = !1,
            s = Math.abs(t) + "",
            u = "";
        if (o) u = "∞";
        else {
            for (function(t, e, n, r) {
                    var i = t.d,
                        o = i.length - t.i;
                    if (r = i[n = (e = pt(e) ? Math.min(Math.max(n, o), r) : +e) + t.i], 0 < n) {
                        i.splice(Math.max(t.i, n));
                        for (var a = n; a < i.length; a++) i[a] = 0
                    } else
                        for (o = Math.max(0, o), t.i = 1, i.length = Math.max(1, n = e + 1), i[0] = 0, a = 1; a < n; a++) i[a] = 0;
                    if (5 <= r)
                        if (n - 1 < 0) {
                            for (r = 0; n < r; r--) i.unshift(0), t.i++;
                            i.unshift(1), t.i++
                        } else i[n - 1]++;
                    for (; o < Math.max(0, e); o++) i.push(0);
                    (e = i.reduceRight(function(t, e, n, r) {
                        return e += t, r[n] = e % 10, Math.floor(e / 10)
                    }, 0)) && (i.unshift(e), t.i++)
                }(a = function(t) {
                    var e, n, r, i, o, a = 0;
                    for (-1 < (n = t.indexOf(Ti)) && (t = t.replace(Ti, "")), 0 < (r = t.search(/e/i)) ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; t.charAt(r) === Ni; r++);
                    if (r === (o = t.length)) e = [0], n = 1;
                    else {
                        for (o--; t.charAt(o) === Ni;) o--;
                        for (n -= r, e = [], i = 0; r <= o; r++, i++) e[i] = +t.charAt(r)
                    }
                    return Vi < n && (e = e.splice(0, Vi - 1), a = n - 1, n = 1), {
                        d: e,
                        e: a,
                        i: n
                    }
                }(s), i, e.minFrac, e.maxFrac), u = a.d, s = a.i, i = a.e, o = [], a = u.reduce(function(t, e) {
                    return t && !e
                }, !0); s < 0;) u.unshift(0), s++;
            for (0 < s ? o = u.splice(s, u.length) : (o = u, u = [0]), s = [], u.length >= e.lgSize && s.unshift(u.splice(-e.lgSize, u.length).join("")); u.length > e.gSize;) s.unshift(u.splice(-e.gSize, u.length).join(""));
            u.length && s.unshift(u.join("")), u = s.join(n), o.length && (u += r + o.join("")), i && (u += "e+" + i)
        }
        return t < 0 && !a ? e.negPre + u + e.negSuf : e.posPre + u + e.posSuf
    }

    function cn(t, e, n, r) {
        var i = "";
        for ((t < 0 || r && t <= 0) && (r ? t = 1 - t : (t = -t, i = "-")), t = "" + t; t.length < e;) t = Ni + t;
        return n && (t = t.substr(t.length - e)), i + t
    }

    function ln(e, n, r, i, o) {
        return r = r || 0,
            function(t) {
                return t = t["get" + e](), (0 < r || -r < t) && (t += r), 0 === t && -12 === r && (t = 12), cn(t, n, i, o)
            }
    }

    function fn(r, i, o) {
        return function(t, e) {
            var n = t["get" + r]();
            return e[Kn((o ? "STANDALONE" : "") + (i ? "SHORT" : "") + r)][n]
        }
    }

    function hn(t) {
        var e = new Date(t, 0, 1).getDay();
        return new Date(t, 0, (e <= 4 ? 5 : 12) - e)
    }

    function pn(n) {
        return function(t) {
            var e = hn(t.getFullYear());
            return t = +new Date(t.getFullYear(), t.getMonth(), t.getDate() + (4 - t.getDay())) - +e, cn(t = 1 + Math.round(t / 6048e5), n)
        }
    }

    function $n(t, e) {
        return t.getFullYear() <= 0 ? e.ERAS[0] : e.ERAS[1]
    }

    function dn(u) {
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(e, t, n) {
            var r, i, o = "",
                a = [];
            if (t = t || "mediumDate", t = u.DATETIME_FORMATS[t] || t, mt(e) && (e = Di.test(e) ? l(e) : function(t) {
                    var e;
                    if (e = t.match(c)) {
                        t = new Date(0);
                        var n = 0,
                            r = 0,
                            i = e[8] ? t.setUTCFullYear : t.setFullYear,
                            o = e[8] ? t.setUTCHours : t.setHours;
                        e[9] && (n = l(e[9] + e[10]), r = l(e[9] + e[11])), i.call(t, l(e[1]), l(e[2]) - 1, l(e[3])), n = l(e[4] || 0) - n, r = l(e[5] || 0) - r, i = l(e[6] || 0), e = Math.round(1e3 * parseFloat("0." + (e[7] || 0))), o.call(t, n, r, i, e)
                    }
                    return t
                }(e)), p(e) && (e = new Date(e)), !g(e) || !isFinite(e.getTime())) return e;
            for (; t;)(i = ji.exec(t)) ? t = (a = k(a, i, 1)).pop() : (a.push(t), t = null);
            var s = e.getTimezoneOffset();
            return n && (s = y(n, s), e = b(e, n, !0)), ut(a, function(t) {
                r = Ii[t], o += r ? r(e, u.DATETIME_FORMATS, s) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), o
        }
    }

    function mn() {
        return function(t, e) {
            return pt(e) && (e = 2), n(t, e)
        }
    }

    function vn() {
        return function(t, e, n) {
            return e = 1 / 0 === Math.abs(Number(e)) ? Number(e) : l(e), rr(e) ? t : (p(t) && (t = t.toString()), O(t) ? (n = (n = !n || isNaN(n) ? 0 : l(n)) < 0 ? Math.max(0, t.length + n) : n, 0 <= e ? gn(t, n, n + e) : 0 === n ? gn(t, e, t.length) : gn(t, Math.max(0, n + e), n)) : t)
        }
    }

    function gn(t, e, n) {
        return mt(t) ? t.slice(e, n) : Jn.call(t, e, n)
    }

    function yn(i) {
        function u(t) {
            switch (typeof t) {
                case "number":
                case "boolean":
                case "string":
                    return !0;
                default:
                    return !1
            }
        }

        function c(t, e) {
            var n = 0,
                r = t.type;
            if (r === (i = e.type)) {
                var i = t.value,
                    o = e.value;
                "string" === r ? (i = i.toLowerCase(), o = o.toLowerCase()) : "object" === r && (dt(i) && (i = t.index), dt(o) && (o = e.index)), i !== o && (n = i < o ? -1 : 1)
            } else n = r < i ? -1 : 1;
            return n
        }
        return function(t, e, n, r) {
            if (null == t) return t;
            if (!O(t)) throw S("orderBy")("notarray", t);
            ar(e) || (e = [e]), 0 === e.length && (e = ["+"]);
            var o = e.map(function(t) {
                    var e = 1,
                        n = ht;
                    if (gt(t)) n = t;
                    else if (mt(t) && ("+" !== t.charAt(0) && "-" !== t.charAt(0) || (e = "-" === t.charAt(0) ? -1 : 1, t = t.substring(1)), "" !== t && (n = i(t)).constant)) {
                        var r = n();
                        n = function(t) {
                            return t[r]
                        }
                    }
                    return {
                        get: n,
                        descending: e
                    }
                }),
                a = n ? -1 : 1,
                s = gt(r) ? r : c;
            return (t = Array.prototype.map.call(t, function(n, r) {
                return {
                    value: n,
                    tieBreaker: {
                        value: r,
                        type: "number",
                        index: r
                    },
                    predicateValues: o.map(function(t) {
                        var e = t.get(n);
                        return t = typeof e, null === e ? (t = "string", e = "null") : "object" === t && (gt(e.valueOf) && u(e = e.valueOf()) || f(e) && u(e = e.toString())), {
                            value: e,
                            type: t,
                            index: r
                        }
                    })
                }
            })).sort(function(t, e) {
                for (var n = 0, r = o.length; n < r; n++) {
                    var i = s(t.predicateValues[n], e.predicateValues[n]);
                    if (i) return i * o[n].descending * a
                }
                return (s(t.tieBreaker, e.tieBreaker) || c(t.tieBreaker, e.tieBreaker)) * a
            }), t.map(function(t) {
                return t.value
            })
        }
    }

    function bn(t) {
        return gt(t) && (t = {
            link: t
        }), t.restrict = t.restrict || "AC", C(t)
    }

    function wn(t, e, n, r, i) {
        this.$$controls = [], this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = i(e.name || e.ngForm || "")(n), this.$dirty = !1, this.$valid = this.$pristine = !0, this.$submitted = this.$invalid = !1, this.$$parentForm = Li, this.$$element = t, this.$$animate = r, xn(this)
    }

    function xn(t) {
        t.$$classCache = {}, t.$$classCache[xo] = !(t.$$classCache[wo] = t.$$element.hasClass(wo))
    }

    function Cn(t) {
        function r(t, e, n) {
            n && !t.$$classCache[e] ? (t.$$animate.addClass(t.$$element, e), t.$$classCache[e] = !0) : !n && t.$$classCache[e] && (t.$$animate.removeClass(t.$$element, e), t.$$classCache[e] = !1)
        }

        function i(t, e, n) {
            e = e ? "-" + At(e, "-") : "", r(t, wo + e, !0 === n), r(t, xo + e, !1 === n)
        }
        var o = t.set,
            a = t.unset;
        t.clazz.prototype.$setValidity = function(t, e, n) {
            pt(e) ? (this.$pending || (this.$pending = {}), o(this.$pending, t, n)) : (this.$pending && a(this.$pending, t, n), Sn(this.$pending) && (this.$pending = void 0)), bt(e) ? e ? (a(this.$error, t, n), o(this.$$success, t, n)) : (o(this.$error, t, n), a(this.$$success, t, n)) : (a(this.$error, t, n), a(this.$$success, t, n)), this.$pending ? (r(this, "ng-pending", !0), this.$valid = this.$invalid = void 0, i(this, "", null)) : (r(this, "ng-pending", !1), this.$valid = Sn(this.$error), this.$invalid = !this.$valid, i(this, "", this.$valid)), i(this, t, e = this.$pending && this.$pending[t] ? void 0 : !this.$error[t] && (!!this.$$success[t] || null)), this.$$parentForm.$setValidity(t, e, this)
        }
    }

    function Sn(t) {
        if (t)
            for (var e in t)
                if (t.hasOwnProperty(e)) return !1;
        return !0
    }

    function En(e) {
        e.$formatters.push(function(t) {
            return e.$isEmpty(t) ? t : t.toString()
        })
    }

    function kn(t, n, r, i, e, o) {
        var a = Gn(n[0].type);
        if (!e.android) {
            var s = !1;
            n.on("compositionstart", function() {
                s = !0
            }), n.on("compositionend", function() {
                s = !1, c()
            })
        }
        var u, c = function(t) {
            if (u && (o.defer.cancel(u), u = null), !s) {
                var e = n.val();
                t = t && t.type, "password" === a || r.ngTrim && "false" === r.ngTrim || (e = ur(e)), (i.$viewValue !== e || "" === e && i.$$hasNativeValidators) && i.$setViewValue(e, t)
            }
        };
        if (e.hasEvent("input")) n.on("input", c);
        else {
            var l = function(t, e, n) {
                u || (u = o.defer(function() {
                    u = null, e && e.value === n || c(t)
                }))
            };
            n.on("keydown", function(t) {
                var e = t.keyCode;
                91 === e || 15 < e && e < 19 || 37 <= e && e <= 40 || l(t, this, this.value)
            }), e.hasEvent("paste") && n.on("paste cut drop", l)
        }
        n.on("change", c), Xi[a] && i.$$hasNativeValidators && a === r.type && n.on("keydown wheel mousedown", function(t) {
            if (!u) {
                var e = this.validity,
                    n = e.badInput,
                    r = e.typeMismatch;
                u = o.defer(function() {
                    u = null, e.badInput === n && e.typeMismatch === r || c(t)
                })
            }
        }), i.$render = function() {
            var t = i.$isEmpty(i.$viewValue) ? "" : i.$viewValue;
            n.val() !== t && n.val(t)
        }
    }

    function An(i, o) {
        return function(t, e) {
            var n, r;
            if (g(t)) return t;
            if (mt(t)) {
                if ('"' === t.charAt(0) && '"' === t.charAt(t.length - 1) && (t = t.substring(1, t.length - 1)), Hi.test(t)) return new Date(t);
                if (i.lastIndex = 0, n = i.exec(t)) return n.shift(), r = e ? {
                    yyyy: e.getFullYear(),
                    MM: e.getMonth() + 1,
                    dd: e.getDate(),
                    HH: e.getHours(),
                    mm: e.getMinutes(),
                    ss: e.getSeconds(),
                    sss: e.getMilliseconds() / 1e3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, ut(n, function(t, e) {
                    e < o.length && (r[o[e]] = +t)
                }), new Date(r.yyyy, r.MM - 1, r.dd, r.HH, r.mm, r.ss || 0, 1e3 * r.sss || 0)
            }
            return NaN
        }
    }

    function On(p, $, d, m) {
        return function(t, e, n, r, i, o, a) {
            function s(t) {
                return t && !(t.getTime && t.getTime() != t.getTime())
            }

            function u(t) {
                return $t(t) && !g(t) ? d(t) || void 0 : t
            }
            Mn(t, e, n, r), kn(0, e, n, r, i, o);
            var c, l, f, h = r && r.$options.getOption("timezone");
            (r.$$parserName = p, r.$parsers.push(function(t) {
                return r.$isEmpty(t) ? null : $.test(t) ? (t = d(t, c), h && (t = b(t, h)), t) : void 0
            }), r.$formatters.push(function(t) {
                if (t && !g(t)) throw Eo("datefmt", t);
                return s(t) ? ((c = t) && h && (c = b(c, h, !0)), a("date")(t, m, h)) : (c = null, "")
            }), $t(n.min) || n.ngMin) && (r.$validators.min = function(t) {
                return !s(t) || pt(l) || d(t) >= l
            }, n.$observe("min", function(t) {
                l = u(t), r.$validate()
            }));
            ($t(n.max) || n.ngMax) && (r.$validators.max = function(t) {
                return !s(t) || pt(f) || d(t) <= f
            }, n.$observe("max", function(t) {
                f = u(t), r.$validate()
            }))
        }
    }

    function Mn(t, n, e, r) {
        (r.$$hasNativeValidators = dt(n[0].validity)) && r.$parsers.push(function(t) {
            var e = n.prop("validity") || {};
            return e.badInput || e.typeMismatch ? void 0 : t
        })
    }

    function Vn(e) {
        e.$$parserName = "number", e.$parsers.push(function(t) {
            return e.$isEmpty(t) ? null : Gi.test(t) ? parseFloat(t) : void 0
        }), e.$formatters.push(function(t) {
            if (!e.$isEmpty(t)) {
                if (!p(t)) throw Eo("numfmt", t);
                t = t.toString()
            }
            return t
        })
    }

    function Tn(t) {
        return $t(t) && !p(t) && (t = parseFloat(t)), rr(t) ? void 0 : t
    }

    function Nn(t) {
        var e = t.toString(),
            n = e.indexOf(".");
        return -1 === n ? -1 < t && t < 1 && (t = /e-(\d+)$/.exec(e)) ? Number(t[1]) : 0 : e.length - n - 1
    }

    function In(t, e, n) {
        var r = (0 | (t = Number(t))) !== t,
            i = (0 | e) !== e,
            o = (0 | n) !== n;
        if (r || i || o) {
            var a = r ? Nn(t) : 0,
                s = i ? Nn(e) : 0,
                u = o ? Nn(n) : 0;
            a = Math.max(a, s, u);
            t *= a = Math.pow(10, a), e *= a, n *= a, r && (t = Math.round(t)), i && (e = Math.round(e)), o && (n = Math.round(n))
        }
        return 0 == (t - e) % n
    }

    function jn(t, e, n, r, i) {
        if ($t(r)) {
            if (!(t = t(r)).constant) throw Eo("constexpr", n, r);
            return t(e)
        }
        return i
    }

    function Dn(h, p) {
        function $(t, e) {
            if (!t || !t.length) return [];
            if (!e || !e.length) return t;
            var n = [],
                r = 0;
            t: for (; r < t.length; r++) {
                for (var i = t[r], o = 0; o < e.length; o++)
                    if (i === e[o]) continue t;
                n.push(i)
            }
            return n
        }

        function d(e) {
            var t = e;
            return ar(e) ? t = e.map(d).join(" ") : dt(e) && (t = Object.keys(e).filter(function(t) {
                return e[t]
            }).join(" ")), t
        }

        function m(e) {
            var t = e;
            if (ar(e)) t = e.map(m);
            else if (dt(e)) {
                var n = !1;
                t = Object.keys(e).filter(function(t) {
                    return t = e[t], !n && pt(t) && (n = !0), t
                });
                n && t.push(void 0)
            }
            return t
        }
        var v;
        return h = "ngClass" + h, ["$parse", function(f) {
            return {
                restrict: "AC",
                link: function(t, e, i) {
                    function o(t, e) {
                        var n = [];
                        return ut(t, function(t) {
                            (0 < e || c[t]) && (c[t] = (c[t] || 0) + e, c[t] === +(0 < e) && n.push(t))
                        }), n.join(" ")
                    }

                    function n(t) {
                        if (l === p) {
                            var e = a && a.split(" "),
                                n = t && t.split(" "),
                                r = $(e, n);
                            e = $(n, e), r = o(r, -1), e = o(e, 1);
                            i.$addClass(e), i.$removeClass(r)
                        }
                        a = t
                    }
                    var a, r = ":" === (s = i[h].trim()).charAt(0) && ":" === s.charAt(1),
                        s = f(s, r ? m : d),
                        u = r ? function(t) {
                            (t = d(t)) !== a && n(t)
                        } : n,
                        c = e.data("$classCounts"),
                        l = !0;
                    c || (c = Mt(), e.data("$classCounts", c)), "ngClass" !== h && (v || (v = f("$index", function(t) {
                        return 1 & t
                    })), t.$watch(v, function(t) {
                        if (t === p) {
                            var e = o((e = a) && e.split(" "), 1);
                            i.$addClass(e)
                        } else e = o((e = a) && e.split(" "), -1), i.$removeClass(e);
                        l = t
                    })), t.$watch(s, u, r)
                }
            }
        }]
    }

    function Pn(t, e, n, r, i, o, a, s, u) {
        var c;
        this.$modelValue = this.$viewValue = Number.NaN, this.$$rawModelValue = void 0, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = u(n.name || "", !1)(t), this.$$parentForm = Li, this.$options = ko, this.$$updateEvents = "", this.$$updateEventHandler = this.$$updateEventHandler.bind(this), this.$$parsedNgModel = i(n.ngModel), this.$$parsedNgModelAssign = this.$$parsedNgModel.assign, this.$$ngModelGet = this.$$parsedNgModel, this.$$ngModelSet = this.$$parsedNgModelAssign, this.$$pendingDebounce = null, this.$$parserValid = void 0, this.$$currentValidationRunId = 0, Object.defineProperty(this, "$$scope", {
            value: t
        }), this.$$attr = n, this.$$element = r, this.$$animate = o, this.$$timeout = a, this.$$parse = i, this.$$q = s, this.$$exceptionHandler = e, xn(this), (c = this).$$scope.$watch(function(t) {
            return (t = c.$$ngModelGet(t)) === c.$modelValue || c.$modelValue != c.$modelValue && t != t || c.$$setModelValue(t), t
        })
    }

    function Un(t) {
        this.$$options = t
    }

    function Rn(n, t) {
        ut(t, function(t, e) {
            $t(n[e]) || (n[e] = t)
        })
    }

    function _n(t, e) {
        t.prop("selected", e), t.attr("selected", e)
    }
    var Ln, qn, Fn, Bn, Hn = {
            objectMaxDepth: 5
        },
        zn = /^\/(.+)\/([a-z]*)$/,
        Wn = Object.prototype.hasOwnProperty,
        Gn = function(t) {
            return mt(t) ? t.toLowerCase() : t
        },
        Kn = function(t) {
            return mt(t) ? t.toUpperCase() : t
        },
        Jn = [].slice,
        Zn = [].splice,
        Yn = [].push,
        Qn = Object.prototype.toString,
        Xn = Object.getPrototypeOf,
        tr = S("ng"),
        er = st.angular || (st.angular = {}),
        nr = 0;
    Ln = st.document.documentMode;
    var rr = Number.isNaN || function(t) {
        return t != t
    };
    ft.$inject = [], ht.$inject = [];
    var ir, or, ar = Array.isArray,
        sr = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
        ur = function(t) {
            return mt(t) ? t.trim() : t
        },
        cr = function(t) {
            return t.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },
        lr = function() {
            if (!$t(lr.rules)) {
                var t = st.document.querySelector("[ng-csp]") || st.document.querySelector("[data-ng-csp]");
                if (t) {
                    var e = t.getAttribute("ng-csp") || t.getAttribute("data-ng-csp");
                    lr.rules = {
                        noUnsafeEval: !e || -1 !== e.indexOf("no-unsafe-eval"),
                        noInlineStyle: !e || -1 !== e.indexOf("no-inline-style")
                    }
                } else {
                    t = lr;
                    try {
                        new Function(""), e = !1
                    } catch (t) {
                        e = !0
                    }
                    t.rules = {
                        noUnsafeEval: e,
                        noInlineStyle: !1
                    }
                }
            }
            return lr.rules
        },
        fr = function() {
            if ($t(fr.name_)) return fr.name_;
            var t, e, n, r, i = pr.length;
            for (e = 0; e < i; ++e)
                if (n = pr[e], t = st.document.querySelector("[" + n.replace(":", "\\:") + "jq]")) {
                    r = t.getAttribute(n + "jq");
                    break
                }
            return fr.name_ = r
        },
        hr = /:/g,
        pr = ["ng-", "data-ng-", "ng:", "x-ng-"],
        $r = (ir = st.document, !(or = ir.currentScript) || (or instanceof st.HTMLScriptElement || or instanceof st.SVGScriptElement) && [(or = or.attributes).getNamedItem("src"), or.getNamedItem("href"), or.getNamedItem("xlink:href")].every(function(t) {
            if (!t) return !0;
            if (!t.value) return !1;
            var e = ir.createElement("a");
            if (e.href = t.value, ir.location.origin === e.origin) return !0;
            switch (e.protocol) {
                case "http:":
                case "https:":
                case "ftp:":
                case "blob:":
                case "file:":
                case "data:":
                    return !0;
                default:
                    return !1
            }
        })),
        dr = /[A-Z]/g,
        mr = !1,
        vr = 3,
        gr = {
            full: "1.6.9",
            major: 1,
            minor: 6,
            dot: 9,
            codeName: "fiery-basilisk"
        };
    H.expando = "ng339";
    var yr = H.cache = {},
        br = 1;
    H._data = function(t) {
        return this.cache[t[this.expando]] || {}
    };
    var wr = /-([a-z])/g,
        xr = /^-ms-/,
        Cr = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        },
        Sr = S("jqLite"),
        Er = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        kr = /<|&#?\w+;/,
        Ar = /<([\w:-]+)/,
        Or = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Mr = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Mr.optgroup = Mr.option, Mr.tbody = Mr.tfoot = Mr.colgroup = Mr.caption = Mr.thead, Mr.th = Mr.td;
    var Vr = st.Node.prototype.contains || function(t) {
            return !!(16 & this.compareDocumentPosition(t))
        },
        Tr = H.prototype = {
            ready: it,
            toString: function() {
                var e = [];
                return ut(this, function(t) {
                    e.push("" + t)
                }), "[" + e.join(", ") + "]"
            },
            eq: function(t) {
                return qn(0 <= t ? this[t] : this[this.length + t])
            },
            length: 0,
            push: Yn,
            sort: [].sort,
            splice: [].splice
        },
        Nr = {};
    ut("multiple selected checked disabled readOnly required open".split(" "), function(t) {
        Nr[Gn(t)] = t
    });
    var Ir = {};
    ut("input select option textarea button form details".split(" "), function(t) {
        Ir[t] = !0
    });
    var jr = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern",
        ngStep: "step"
    };
    ut({
        data: J,
        removeData: G,
        hasData: function(t) {
            for (var e in yr[t.ng339]) return !0;
            return !1
        },
        cleanData: function(t) {
            for (var e = 0, n = t.length; e < n; e++) G(t[e])
        }
    }, function(t, e) {
        H[e] = t
    }), ut({
        data: J,
        inheritedData: et,
        scope: function(t) {
            return qn.data(t, "$scope") || et(t.parentNode || t, ["$isolateScope", "$scope"])
        },
        isolateScope: function(t) {
            return qn.data(t, "$isolateScope") || qn.data(t, "$isolateScopeNoTemplate")
        },
        controller: tt,
        injector: function(t) {
            return et(t, "$injector")
        },
        removeAttr: function(t, e) {
            t.removeAttribute(e)
        },
        hasClass: Z,
        css: function(t, e, n) {
            if (e = q(e.replace(xr, "ms-")), !$t(n)) return t.style[e];
            t.style[e] = n
        },
        attr: function(t, e, n) {
            if ((r = t.nodeType) !== vr && 2 !== r && 8 !== r && t.getAttribute) {
                var r = Gn(e),
                    i = Nr[r];
                if (!$t(n)) return t = t.getAttribute(e), i && null !== t && (t = r), null === t ? void 0 : t;
                null === n || !1 === n && i ? t.removeAttribute(e) : t.setAttribute(e, i ? r : n)
            }
        },
        prop: function(t, e, n) {
            if (!$t(n)) return t[e];
            t[e] = n
        },
        text: function() {
            function t(t, e) {
                if (pt(e)) {
                    var n = t.nodeType;
                    return 1 === n || n === vr ? t.textContent : ""
                }
                t.textContent = e
            }
            return t.$dv = "", t
        }(),
        val: function(t, e) {
            if (pt(e)) {
                if (t.multiple && "select" === wt(t)) {
                    var n = [];
                    return ut(t.options, function(t) {
                        t.selected && n.push(t.value || t.text)
                    }), n
                }
                return t.value
            }
            t.value = e
        },
        html: function(t, e) {
            if (pt(e)) return t.innerHTML;
            z(t, !0), t.innerHTML = e
        },
        empty: nt
    }, function(a, t) {
        H.prototype[t] = function(t, e) {
            var n, r, i = this.length;
            if (a !== nt && pt(2 === a.length && a !== Z && a !== tt ? t : e)) {
                if (dt(t)) {
                    for (n = 0; n < i; n++)
                        if (a === J) a(this[n], t);
                        else
                            for (r in t) a(this[n], r, t[r]);
                    return this
                }
                for (i = pt(n = a.$dv) ? Math.min(i, 1) : i, r = 0; r < i; r++) {
                    var o = a(this[r], t, e);
                    n = n ? n + o : o
                }
                return n
            }
            for (n = 0; n < i; n++) a(this[n], t, e);
            return this
        }
    }), ut({
        removeData: G,
        on: function(i, t, o, e) {
            if ($t(e)) throw Sr("onargs");
            if (F(i)) {
                var a = (e = K(i, !0)).events,
                    s = e.handle;
                s || (s = e.handle = (c = a, (l = function(t, e) {
                    t.isDefaultPrevented = function() {
                        return t.defaultPrevented
                    };
                    var n = c[e || t.type],
                        r = n ? n.length : 0;
                    if (r) {
                        if (pt(t.immediatePropagationStopped)) {
                            var i = t.stopImmediatePropagation;
                            t.stopImmediatePropagation = function() {
                                t.immediatePropagationStopped = !0, t.stopPropagation && t.stopPropagation(), i && i.call(t)
                            }
                        }
                        t.isImmediatePropagationStopped = function() {
                            return !0 === t.immediatePropagationStopped
                        };
                        var o = n.specialHandlerWrapper || ot;
                        1 < r && (n = U(n));
                        for (var a = 0; a < r; a++) t.isImmediatePropagationStopped() || o(u, t, n[a])
                    }
                }).elem = u = i, l));
                for (var n = (e = 0 <= t.indexOf(" ") ? t.split(" ") : [t]).length, r = function(t, e, n) {
                        var r = a[t];
                        r || ((r = a[t] = []).specialHandlerWrapper = e, "$destroy" === t || n || i.addEventListener(t, s)), r.push(o)
                    }; n--;) t = e[n], Cr[t] ? (r(Cr[t], at), r(t, void 0, !0)) : r(t)
            }
            var u, c, l
        },
        off: W,
        one: function(e, n, r) {
            (e = qn(e)).on(n, function t() {
                e.off(n, r), e.off(n, t)
            }), e.on(n, r)
        },
        replaceWith: function(e, t) {
            var n, r = e.parentNode;
            z(e), ut(new H(t), function(t) {
                n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
            })
        },
        children: function(t) {
            var e = [];
            return ut(t.childNodes, function(t) {
                1 === t.nodeType && e.push(t)
            }), e
        },
        contents: function(t) {
            return t.contentDocument || t.childNodes || []
        },
        append: function(t, e) {
            if (1 === (n = t.nodeType) || 11 === n)
                for (var n = 0, r = (e = new H(e)).length; n < r; n++) t.appendChild(e[n])
        },
        prepend: function(e, t) {
            if (1 === e.nodeType) {
                var n = e.firstChild;
                ut(new H(t), function(t) {
                    e.insertBefore(t, n)
                })
            }
        },
        wrap: function(t, e) {
            var n = qn(e).eq(0).clone()[0],
                r = t.parentNode;
            r && r.replaceChild(n, t), n.appendChild(t)
        },
        remove: rt,
        detach: function(t) {
            rt(t, !0)
        },
        after: function(t, e) {
            var n = t,
                r = t.parentNode;
            if (r)
                for (var i = 0, o = (e = new H(e)).length; i < o; i++) {
                    var a = e[i];
                    r.insertBefore(a, n.nextSibling), n = a
                }
        },
        addClass: Q,
        removeClass: Y,
        toggleClass: function(n, t, r) {
            t && ut(t.split(" "), function(t) {
                var e = r;
                pt(e) && (e = !Z(n, t)), (e ? Q : Y)(n, t)
            })
        },
        parent: function(t) {
            return (t = t.parentNode) && 11 !== t.nodeType ? t : null
        },
        next: function(t) {
            return t.nextElementSibling
        },
        find: function(t, e) {
            return t.getElementsByTagName ? t.getElementsByTagName(e) : []
        },
        clone: Vt,
        triggerHandler: function(e, t, n) {
            var r, i, o = t.type || t,
                a = K(e);
            (a = (a = a && a.events) && a[o]) && (r = {
                preventDefault: function() {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function() {
                    return !0 === this.defaultPrevented
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0
                },
                isImmediatePropagationStopped: function() {
                    return !0 === this.immediatePropagationStopped
                },
                stopPropagation: ft,
                type: o,
                target: e
            }, t.type && (r = ct(r, t)), t = U(a), i = n ? [r].concat(n) : [r], ut(t, function(t) {
                r.isImmediatePropagationStopped() || t.apply(e, i)
            }))
        }
    }, function(a, t) {
        H.prototype[t] = function(t, e, n) {
            for (var r, i = 0, o = this.length; i < o; i++) pt(r) ? $t(r = a(this[i], t, e, n)) && (r = qn(r)) : X(r, a(this[i], t, e, n));
            return $t(r) ? r : this
        }
    }), H.prototype.bind = H.prototype.on, H.prototype.unbind = H.prototype.off;
    var Dr = Object.create(null);
    jt.prototype = {
        _idx: function(t) {
            return t === this._lastKey ? this._lastIndex : (this._lastKey = t, this._lastIndex = this._keys.indexOf(t))
        },
        _transformKey: function(t) {
            return rr(t) ? Dr : t
        },
        get: function(t) {
            if (t = this._transformKey(t), -1 !== (t = this._idx(t))) return this._values[t]
        },
        set: function(t, e) {
            t = this._transformKey(t);
            var n = this._idx(t); - 1 === n && (n = this._lastIndex = this._keys.length), this._keys[n] = t, this._values[n] = e
        },
        delete: function(t) {
            return t = this._transformKey(t), -1 !== (t = this._idx(t)) && (this._keys.splice(t, 1), this._values.splice(t, 1), this._lastKey = NaN, this._lastIndex = -1, !0)
        }
    };
    var Pr = jt,
        Ur = [function() {
            this.$get = [function() {
                return Pr
            }]
        }],
        Rr = /^([^(]+?)=>/,
        _r = /^[^(]*\(\s*([^)]*)\)/m,
        Lr = /,/,
        qr = /^\s*(_?)(\S+?)\1\s*$/,
        Fr = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        Br = S("$injector");
    Pt.$$annotate = function(t, e, n) {
        var r, i;
        if ("function" == typeof t) {
            if (!(r = t.$inject)) {
                if (r = [], t.length) {
                    if (e) throw mt(n) && n || (n = t.name || ((i = Dt(i = t)) ? "function(" + (i[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn")), Br("strictdi", n);
                    ut((e = Dt(t))[1].split(Lr), function(t) {
                        t.replace(qr, function(t, e, n) {
                            r.push(n)
                        })
                    })
                }
                t.$inject = r
            }
        } else ar(t) ? (I(t[e = t.length - 1], "fn"), r = t.slice(0, e)) : I(t, "fn", !0);
        return r
    };
    var Hr = S("$animate"),
        zr = function() {
            this.$get = ft
        },
        Wr = function() {
            var u = new Pr,
                c = [];
            this.$get = ["$$AnimateRunner", "$rootScope", function(i, o) {
                function a(e, t, n) {
                    var r = !1;
                    return t && ut(t = mt(t) ? t.split(" ") : ar(t) ? t : [], function(t) {
                        t && (r = !0, e[t] = n)
                    }), r
                }

                function s() {
                    ut(c, function(t) {
                        var e = u.get(t);
                        if (e) {
                            var n = function(t) {
                                    mt(t) && (t = t.split(" "));
                                    var e = Mt();
                                    return ut(t, function(t) {
                                        t.length && (e[t] = !0)
                                    }), e
                                }(t.attr("class")),
                                r = "",
                                i = "";
                            ut(e, function(t, e) {
                                t !== !!n[e] && (t ? r += (r.length ? " " : "") + e : i += (i.length ? " " : "") + e)
                            }), ut(t, function(t) {
                                r && Q(t, r), i && Y(t, i)
                            }), u.delete(t)
                        }
                    }), c.length = 0
                }
                return {
                    enabled: ft,
                    on: ft,
                    off: ft,
                    pin: ft,
                    push: function(t, e, n, r) {
                        return r && r(), (n = n || {}).from && t.css(n.from), n.to && t.css(n.to), (n.addClass || n.removeClass) && (e = n.addClass, r = n.removeClass, e = a(n = u.get(t) || {}, e, !0), r = a(n, r, !1), (e || r) && (u.set(t, n), c.push(t), 1 === c.length && o.$$postDigest(s))), (t = new i).complete(), t
                    }
                }
            }]
        },
        Gr = ["$provide", function(r) {
            var i = this,
                e = null,
                n = null;
            this.$$registeredAnimations = Object.create(null), this.register = function(t, e) {
                if (t && "." !== t.charAt(0)) throw Hr("notcsel", t);
                var n = t + "-animation";
                i.$$registeredAnimations[t.substr(1)] = n, r.factory(n, e)
            }, this.customFilter = function(t) {
                return 1 === arguments.length && (n = gt(t) ? t : null), n
            }, this.classNameFilter = function(t) {
                if (1 === arguments.length && (e = t instanceof RegExp ? t : null) && /[(\s|\/)]ng-animate[(\s|\/)]/.test(e.toString())) throw e = null, Hr("nongcls", "ng-animate");
                return e
            }, this.$get = ["$$animateQueue", function(o) {
                function i(t, e, n) {
                    if (n) {
                        var r;
                        t: {
                            for (r = 0; r < n.length; r++) {
                                var i = n[r];
                                if (1 === i.nodeType) {
                                    r = i;
                                    break t
                                }
                            }
                            r = void 0
                        }!r || r.parentNode || r.previousElementSibling || (n = null)
                    }
                    n ? n.after(t) : e.prepend(t)
                }
                return {
                    on: o.on,
                    off: o.off,
                    pin: o.pin,
                    enabled: o.enabled,
                    cancel: function(t) {
                        t.end && t.end()
                    },
                    enter: function(t, e, n, r) {
                        return e = e && qn(e), n = n && qn(n), i(t, e = e || n.parent(), n), o.push(t, "enter", _t(r))
                    },
                    move: function(t, e, n, r) {
                        return e = e && qn(e), n = n && qn(n), i(t, e = e || n.parent(), n), o.push(t, "move", _t(r))
                    },
                    leave: function(t, e) {
                        return o.push(t, "leave", _t(e), function() {
                            t.remove()
                        })
                    },
                    addClass: function(t, e, n) {
                        return (n = _t(n)).addClass = Rt(n.addclass, e), o.push(t, "addClass", n)
                    },
                    removeClass: function(t, e, n) {
                        return (n = _t(n)).removeClass = Rt(n.removeClass, e), o.push(t, "removeClass", n)
                    },
                    setClass: function(t, e, n, r) {
                        return (r = _t(r)).addClass = Rt(r.addClass, e), r.removeClass = Rt(r.removeClass, n), o.push(t, "setClass", r)
                    },
                    animate: function(t, e, n, r, i) {
                        return (i = _t(i)).from = i.from ? ct(i.from, e) : e, i.to = i.to ? ct(i.to, n) : n, i.tempClasses = Rt(i.tempClasses, r || "ng-inline-animate"), o.push(t, "animate", i)
                    }
                }
            }]
        }],
        Kr = function() {
            this.$get = ["$$rAF", function(e) {
                function n(t) {
                    r.push(t), 1 < r.length || e(function() {
                        for (var t = 0; t < r.length; t++) r[t]();
                        r = []
                    })
                }
                var r = [];
                return function() {
                    var e = !1;
                    return n(function() {
                            e = !0
                        }),
                        function(t) {
                            e ? t() : n(t)
                        }
                }
            }]
        },
        Jr = function() {
            this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$$isDocumentHidden", "$timeout", function(e, t, n, r, i) {
                function o(t) {
                    this.setHost(t);
                    var e = n();
                    this._doneCallbacks = [], this._tick = function(t) {
                        r() ? i(t, 0, !1) : e(t)
                    }, this._state = 0
                }
                return o.chain = function(t, n) {
                    var r = 0;
                    ! function e() {
                        r === t.length ? n(!0) : t[r](function(t) {
                            !1 === t ? n(!1) : (r++, e())
                        })
                    }()
                }, o.all = function(e, n) {
                    function r(t) {
                        o = o && t, ++i === e.length && n(o)
                    }
                    var i = 0,
                        o = !0;
                    ut(e, function(t) {
                        t.done(r)
                    })
                }, o.prototype = {
                    setHost: function(t) {
                        this.host = t || {}
                    },
                    done: function(t) {
                        2 === this._state ? t() : this._doneCallbacks.push(t)
                    },
                    progress: ft,
                    getPromise: function() {
                        if (!this.promise) {
                            var t = this;
                            this.promise = e(function(e, n) {
                                t.done(function(t) {
                                    !1 === t ? n() : e()
                                })
                            })
                        }
                        return this.promise
                    },
                    then: function(t, e) {
                        return this.getPromise().then(t, e)
                    },
                    catch: function(t) {
                        return this.getPromise().catch(t)
                    },
                    finally: function(t) {
                        return this.getPromise().finally(t)
                    },
                    pause: function() {
                        this.host.pause && this.host.pause()
                    },
                    resume: function() {
                        this.host.resume && this.host.resume()
                    },
                    end: function() {
                        this.host.end && this.host.end(), this._resolve(!0)
                    },
                    cancel: function() {
                        this.host.cancel && this.host.cancel(), this._resolve(!1)
                    },
                    complete: function(t) {
                        var e = this;
                        0 === e._state && (e._state = 1, e._tick(function() {
                            e._resolve(t)
                        }))
                    },
                    _resolve: function(e) {
                        2 !== this._state && (ut(this._doneCallbacks, function(t) {
                            t(e)
                        }), this._doneCallbacks.length = 0, this._state = 2)
                    }
                }, o
            }]
        },
        Zr = function() {
            this.$get = ["$$rAF", "$q", "$$AnimateRunner", function(a, t, s) {
                return function(t, e) {
                    function n() {
                        return a(function() {
                            r.addClass && (t.addClass(r.addClass), r.addClass = null), r.removeClass && (t.removeClass(r.removeClass), r.removeClass = null), r.to && (t.css(r.to), r.to = null), i || o.complete(), i = !0
                        }), o
                    }
                    var r = e || {};
                    r.$$prepared || (r = E(r)), r.cleanupStyles && (r.from = r.to = null), r.from && (t.css(r.from), r.from = null);
                    var i, o = new s;
                    return {
                        start: n,
                        end: n
                    }
                }
            }]
        },
        Yr = S("$compile"),
        Qr = new function() {};
    Ht.$inject = ["$provide", "$$sanitizeUriProvider"], zt.prototype.isFirstChange = function() {
        return this.previousValue === Qr
    };
    var Xr = /^((?:x|data)[:\-_])/i,
        ti = /[:\-_]+(.)/g,
        ei = S("$controller"),
        ni = /^(\S+)(\s+as\s+([\w$]+))?$/,
        ri = function() {
            this.$get = ["$document", function(e) {
                return function(t) {
                    return t ? !t.nodeType && t instanceof qn && (t = t[0]) : t = e[0].body, t.offsetWidth + 1
                }
            }]
        },
        ii = "application/json",
        oi = {
            "Content-Type": ii + ";charset=utf-8"
        },
        ai = /^\[|^\{(?!\{)/,
        si = {
            "[": /]$/,
            "{": /}$/
        },
        ui = /^\)]\}',?\n/,
        ci = S("$http"),
        li = er.$interpolateMinErr = S("$interpolate");
    li.throwNoconcat = function(t) {
        throw li("noconcat", t)
    }, li.interr = function(t, e) {
        return li("interr", t, e.toString())
    };
    var fi = function() {
            this.$get = function() {
                var i = er.callbacks,
                    o = {};
                return {
                    createCallback: function(t) {
                        var e, n = "angular.callbacks." + (t = "_" + (i.$$counter++).toString(36)),
                            r = ((e = function(t) {
                                e.data = t, e.called = !0
                            }).id = t, e);
                        return o[n] = i[t] = r, n
                    },
                    wasCalled: function(t) {
                        return o[t].called
                    },
                    getResponse: function(t) {
                        return o[t].data
                    },
                    removeCallback: function(t) {
                        delete i[o[t].id], delete o[t]
                    }
                }
            }
        },
        hi = /^([^?#]*)(\?([^#]*))?(#(.*))?$/,
        pi = {
            http: 80,
            https: 443,
            ftp: 21
        },
        $i = S("$location"),
        di = /^\s*[\\/]{2,}/,
        mi = {
            $$absUrl: "",
            $$html5: !1,
            $$replace: !1,
            absUrl: we("$$absUrl"),
            url: function(t) {
                if (pt(t)) return this.$$url;
                var e = hi.exec(t);
                return (e[1] || "" === t) && this.path(decodeURIComponent(e[1])), (e[2] || e[1] || "" === t) && this.search(e[3] || ""), this.hash(e[5] || ""), this
            },
            protocol: we("$$protocol"),
            host: we("$$host"),
            port: we("$$port"),
            path: xe("$$path", function(t) {
                return "/" === (t = null !== t ? t.toString() : "").charAt(0) ? t : "/" + t
            }),
            search: function(n, t) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (mt(n) || p(n)) n = n.toString(), this.$$search = A(n);
                        else {
                            if (!dt(n)) throw $i("isrcharg");
                            ut(n = E(n, {}), function(t, e) {
                                null == t && delete n[e]
                            }), this.$$search = n
                        }
                        break;
                    default:
                        pt(t) || null === t ? delete this.$$search[n] : this.$$search[n] = t
                }
                return this.$$compose(), this
            },
            hash: xe("$$hash", function(t) {
                return null !== t ? t.toString() : ""
            }),
            replace: function() {
                return this.$$replace = !0, this
            }
        };
    ut([be, ye, ge], function(e) {
        e.prototype = Object.create(mi), e.prototype.state = function(t) {
            if (!arguments.length) return this.$$state;
            if (e !== ge || !this.$$html5) throw $i("nostate");
            return this.$$state = pt(t) ? null : t, this.$$urlUpdatedByLocation = !0, this
        }
    });
    var vi = S("$parse"),
        gi = {}.constructor.prototype.valueOf,
        yi = Mt();
    ut("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(t) {
        yi[t] = !0
    });
    var bi = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "\t",
            v: "\v",
            "'": "'",
            '"': '"'
        },
        wi = function(t) {
            this.options = t
        };
    wi.prototype = {
        constructor: wi,
        lex: function(t) {
            for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length;)
                if ('"' === (t = this.text.charAt(this.index)) || "'" === t) this.readString(t);
                else if (this.isNumber(t) || "." === t && this.isNumber(this.peek())) this.readNumber();
            else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();
            else if (this.is(t, "(){}[].,;:?")) this.tokens.push({
                index: this.index,
                text: t
            }), this.index++;
            else if (this.isWhitespace(t)) this.index++;
            else {
                var e = t + this.peek(),
                    n = e + this.peek(2),
                    r = yi[e],
                    i = yi[n];
                yi[t] || r || i ? (t = i ? n : r ? e : t, this.tokens.push({
                    index: this.index,
                    text: t,
                    operator: !0
                }), this.index += t.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
            }
            return this.tokens
        },
        is: function(t, e) {
            return -1 !== e.indexOf(t)
        },
        peek: function(t) {
            return t = t || 1, this.index + t < this.text.length && this.text.charAt(this.index + t)
        },
        isNumber: function(t) {
            return "0" <= t && t <= "9" && "string" == typeof t
        },
        isWhitespace: function(t) {
            return " " === t || "\r" === t || "\t" === t || "\n" === t || "\v" === t || " " === t
        },
        isIdentifierStart: function(t) {
            return this.options.isIdentifierStart ? this.options.isIdentifierStart(t, this.codePointAt(t)) : this.isValidIdentifierStart(t)
        },
        isValidIdentifierStart: function(t) {
            return "a" <= t && t <= "z" || "A" <= t && t <= "Z" || "_" === t || "$" === t
        },
        isIdentifierContinue: function(t) {
            return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(t, this.codePointAt(t)) : this.isValidIdentifierContinue(t)
        },
        isValidIdentifierContinue: function(t, e) {
            return this.isValidIdentifierStart(t, e) || this.isNumber(t)
        },
        codePointAt: function(t) {
            return 1 === t.length ? t.charCodeAt(0) : (t.charCodeAt(0) << 10) + t.charCodeAt(1) - 56613888
        },
        peekMultichar: function() {
            var t = this.text.charAt(this.index),
                e = this.peek();
            if (!e) return t;
            var n = t.charCodeAt(0),
                r = e.charCodeAt(0);
            return 55296 <= n && n <= 56319 && 56320 <= r && r <= 57343 ? t + e : t
        },
        isExpOperator: function(t) {
            return "-" === t || "+" === t || this.isNumber(t)
        },
        throwError: function(t, e, n) {
            throw n = n || this.index, e = $t(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]" : " " + n, vi("lexerr", t, e, this.text)
        },
        readNumber: function() {
            for (var t = "", e = this.index; this.index < this.text.length;) {
                var n = Gn(this.text.charAt(this.index));
                if ("." === n || this.isNumber(n)) t += n;
                else {
                    var r = this.peek();
                    if ("e" === n && this.isExpOperator(r)) t += n;
                    else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" === t.charAt(t.length - 1)) t += n;
                    else {
                        if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" !== t.charAt(t.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({
                index: e,
                text: t,
                constant: !0,
                value: Number(t)
            })
        },
        readIdent: function() {
            var t = this.index;
            for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
                var e = this.peekMultichar();
                if (!this.isIdentifierContinue(e)) break;
                this.index += e.length
            }
            this.tokens.push({
                index: t,
                text: this.text.slice(t, this.index),
                identifier: !0
            })
        },
        readString: function(t) {
            var e = this.index;
            this.index++;
            for (var n = "", r = t, i = !1; this.index < this.text.length;) {
                var o = this.text.charAt(this.index);
                r = r + o;
                if (i) "u" === o ? ((i = this.text.substring(this.index + 1, this.index + 5)).match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + i + "]"), this.index += 4, n += String.fromCharCode(parseInt(i, 16))) : n += bi[o] || o, i = !1;
                else if ("\\" === o) i = !0;
                else {
                    if (o === t) return this.index++, void this.tokens.push({
                        index: e,
                        text: r,
                        constant: !0,
                        value: n
                    });
                    n += o
                }
                this.index++
            }
            this.throwError("Unterminated quote", e)
        }
    };
    var xi = function(t, e) {
        this.lexer = t, this.options = e
    };
    xi.Program = "Program", xi.ExpressionStatement = "ExpressionStatement", xi.AssignmentExpression = "AssignmentExpression", xi.ConditionalExpression = "ConditionalExpression", xi.LogicalExpression = "LogicalExpression", xi.BinaryExpression = "BinaryExpression", xi.UnaryExpression = "UnaryExpression", xi.CallExpression = "CallExpression", xi.MemberExpression = "MemberExpression", xi.Identifier = "Identifier", xi.Literal = "Literal", xi.ArrayExpression = "ArrayExpression", xi.Property = "Property", xi.ObjectExpression = "ObjectExpression", xi.ThisExpression = "ThisExpression", xi.LocalsExpression = "LocalsExpression", xi.NGValueParameter = "NGValueParameter", xi.prototype = {
        ast: function(t) {
            return this.text = t, this.tokens = this.lexer.lex(t), t = this.program(), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t
        },
        program: function() {
            for (var t = [];;)
                if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && t.push(this.expressionStatement()), !this.expect(";")) return {
                    type: xi.Program,
                    body: t
                }
        },
        expressionStatement: function() {
            return {
                type: xi.ExpressionStatement,
                expression: this.filterChain()
            }
        },
        filterChain: function() {
            for (var t = this.expression(); this.expect("|");) t = this.filter(t);
            return t
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var t = this.ternary();
            if (this.expect("=")) {
                if (!Ve(t)) throw vi("lval");
                t = {
                    type: xi.AssignmentExpression,
                    left: t,
                    right: this.assignment(),
                    operator: "="
                }
            }
            return t
        },
        ternary: function() {
            var t, e, n = this.logicalOR();
            return this.expect("?") && (t = this.expression(), this.consume(":")) ? (e = this.expression(), {
                type: xi.ConditionalExpression,
                test: n,
                alternate: t,
                consequent: e
            }) : n
        },
        logicalOR: function() {
            for (var t = this.logicalAND(); this.expect("||");) t = {
                type: xi.LogicalExpression,
                operator: "||",
                left: t,
                right: this.logicalAND()
            };
            return t
        },
        logicalAND: function() {
            for (var t = this.equality(); this.expect("&&");) t = {
                type: xi.LogicalExpression,
                operator: "&&",
                left: t,
                right: this.equality()
            };
            return t
        },
        equality: function() {
            for (var t, e = this.relational(); t = this.expect("==", "!=", "===", "!==");) e = {
                type: xi.BinaryExpression,
                operator: t.text,
                left: e,
                right: this.relational()
            };
            return e
        },
        relational: function() {
            for (var t, e = this.additive(); t = this.expect("<", ">", "<=", ">=");) e = {
                type: xi.BinaryExpression,
                operator: t.text,
                left: e,
                right: this.additive()
            };
            return e
        },
        additive: function() {
            for (var t, e = this.multiplicative(); t = this.expect("+", "-");) e = {
                type: xi.BinaryExpression,
                operator: t.text,
                left: e,
                right: this.multiplicative()
            };
            return e
        },
        multiplicative: function() {
            for (var t, e = this.unary(); t = this.expect("*", "/", "%");) e = {
                type: xi.BinaryExpression,
                operator: t.text,
                left: e,
                right: this.unary()
            };
            return e
        },
        unary: function() {
            var t;
            return (t = this.expect("+", "-", "!")) ? {
                type: xi.UnaryExpression,
                operator: t.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary()
        },
        primary: function() {
            var t, e;
            for (this.expect("(") ? (t = this.filterChain(), this.consume(")")) : this.expect("[") ? t = this.arrayDeclaration() : this.expect("{") ? t = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? t = E(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? t = {
                    type: xi.Literal,
                    value: this.options.literals[this.consume().text]
                } : this.peek().identifier ? t = this.identifier() : this.peek().constant ? t = this.constant() : this.throwError("not a primary expression", this.peek()); e = this.expect("(", "[", ".");) "(" === e.text ? (t = {
                type: xi.CallExpression,
                callee: t,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === e.text ? (t = {
                type: xi.MemberExpression,
                object: t,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === e.text ? t = {
                type: xi.MemberExpression,
                object: t,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return t
        },
        filter: function(t) {
            t = [t];
            for (var e = {
                    type: xi.CallExpression,
                    callee: this.identifier(),
                    arguments: t,
                    filter: !0
                }; this.expect(":");) t.push(this.expression());
            return e
        },
        parseArguments: function() {
            var t = [];
            if (")" !== this.peekToken().text)
                for (; t.push(this.filterChain()), this.expect(","););
            return t
        },
        identifier: function() {
            var t = this.consume();
            return t.identifier || this.throwError("is not a valid identifier", t), {
                type: xi.Identifier,
                name: t.text
            }
        },
        constant: function() {
            return {
                type: xi.Literal,
                value: this.consume().value
            }
        },
        arrayDeclaration: function() {
            var t = [];
            if ("]" !== this.peekToken().text)
                do {
                    if (this.peek("]")) break;
                    t.push(this.expression())
                } while (this.expect(","));
            return this.consume("]"), {
                type: xi.ArrayExpression,
                elements: t
            }
        },
        object: function() {
            var t, e = [];
            if ("}" !== this.peekToken().text)
                do {
                    if (this.peek("}")) break;
                    t = {
                        type: xi.Property,
                        kind: "init"
                    }, this.peek().constant ? (t.key = this.constant(), t.computed = !1, this.consume(":"), t.value = this.expression()) : this.peek().identifier ? (t.key = this.identifier(), t.computed = !1, this.peek(":") ? (this.consume(":"), t.value = this.expression()) : t.value = t.key) : this.peek("[") ? (this.consume("["), t.key = this.expression(), this.consume("]"), t.computed = !0, this.consume(":"), t.value = this.expression()) : this.throwError("invalid key", this.peek()), e.push(t)
                } while (this.expect(","));
            return this.consume("}"), {
                type: xi.ObjectExpression,
                properties: e
            }
        },
        throwError: function(t, e) {
            throw vi("syntax", e.text, t, e.index + 1, this.text, this.text.substring(e.index))
        },
        consume: function(t) {
            if (0 === this.tokens.length) throw vi("ueoe", this.text);
            var e = this.expect(t);
            return e || this.throwError("is unexpected, expecting [" + t + "]", this.peek()), e
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw vi("ueoe", this.text);
            return this.tokens[0]
        },
        peek: function(t, e, n, r) {
            return this.peekAhead(0, t, e, n, r)
        },
        peekAhead: function(t, e, n, r, i) {
            if (this.tokens.length > t) {
                var o = (t = this.tokens[t]).text;
                if (o === e || o === n || o === r || o === i || !(e || n || r || i)) return t
            }
            return !1
        },
        expect: function(t, e, n, r) {
            return !!(t = this.peek(t, e, n, r)) && (this.tokens.shift(), t)
        },
        selfReferential: {
            this: {
                type: xi.ThisExpression
            },
            $locals: {
                type: xi.LocalsExpression
            }
        }
    };
    var Ci = 2;
    Ne.prototype = {
        compile: function(t) {
            var i = this;
            this.state = {
                nextId: 0,
                filters: {},
                fn: {
                    vars: [],
                    body: [],
                    own: {}
                },
                assign: {
                    vars: [],
                    body: [],
                    own: {}
                },
                inputs: []
            }, Oe(t, i.$filter);
            var e, n = "";
            return this.stage = "assign", (e = Te(t)) && (this.state.computing = "assign", n = this.nextId(), this.recurse(e, n), this.return_(n), n = "fn.assign=" + this.generateFunction("assign", "s,v,l")), e = Me(t.body), i.stage = "inputs", ut(e, function(t, e) {
                var n = "fn" + e;
                i.state[n] = {
                    vars: [],
                    body: [],
                    own: {}
                }, i.state.computing = n;
                var r = i.nextId();
                i.recurse(t, r), i.return_(r), i.state.inputs.push({
                    name: n,
                    isPure: t.isPure
                }), t.watchId = e
            }), this.state.computing = "fn", this.stage = "main", this.recurse(t), t = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + n + this.watchFns() + "return fn;", t = new Function("$filter", "getStringValue", "ifDefined", "plus", t)(this.$filter, Ee, ke, Ae), this.state = this.stage = void 0, t
        },
        USE: "use",
        STRICT: "strict",
        watchFns: function() {
            var e = [],
                t = this.state.inputs,
                n = this;
            return ut(t, function(t) {
                e.push("var " + t.name + "=" + n.generateFunction(t.name, "s")), t.isPure && e.push(t.name, ".isPure=" + JSON.stringify(t.isPure) + ";")
            }), t.length && e.push("fn.inputs=[" + t.map(function(t) {
                return t.name
            }).join(",") + "];"), e.join("")
        },
        generateFunction: function(t, e) {
            return "function(" + e + "){" + this.varsPrefix(t) + this.body(t) + "};"
        },
        filterPrefix: function() {
            var n = [],
                r = this;
            return ut(this.state.filters, function(t, e) {
                n.push(t + "=$filter(" + r.escape(e) + ")")
            }), n.length ? "var " + n.join(",") + ";" : ""
        },
        varsPrefix: function(t) {
            return this.state[t].vars.length ? "var " + this.state[t].vars.join(",") + ";" : ""
        },
        body: function(t) {
            return this.state[t].body.join("")
        },
        recurse: function(n, e, t, r, i, o) {
            var a, s, u, c, l, f = this;
            if (r = r || ft, !o && $t(n.watchId)) e = e || this.nextId(), this.if_("i", this.lazyAssign(e, this.computedMember("i", n.watchId)), this.lazyRecurse(n, e, t, r, i, !0));
            else switch (n.type) {
                case xi.Program:
                    ut(n.body, function(t, e) {
                        f.recurse(t.expression, void 0, void 0, function(t) {
                            s = t
                        }), e !== n.body.length - 1 ? f.current().body.push(s, ";") : f.return_(s)
                    });
                    break;
                case xi.Literal:
                    c = this.escape(n.value), this.assign(e, c), r(e || c);
                    break;
                case xi.UnaryExpression:
                    this.recurse(n.argument, void 0, void 0, function(t) {
                        s = t
                    }), c = n.operator + "(" + this.ifDefined(s, 0) + ")", this.assign(e, c), r(c);
                    break;
                case xi.BinaryExpression:
                    this.recurse(n.left, void 0, void 0, function(t) {
                        a = t
                    }), this.recurse(n.right, void 0, void 0, function(t) {
                        s = t
                    }), c = "+" === n.operator ? this.plus(a, s) : "-" === n.operator ? this.ifDefined(a, 0) + n.operator + this.ifDefined(s, 0) : "(" + a + ")" + n.operator + "(" + s + ")", this.assign(e, c), r(c);
                    break;
                case xi.LogicalExpression:
                    e = e || this.nextId(), f.recurse(n.left, e), f.if_("&&" === n.operator ? e : f.not(e), f.lazyRecurse(n.right, e)), r(e);
                    break;
                case xi.ConditionalExpression:
                    e = e || this.nextId(), f.recurse(n.test, e), f.if_(e, f.lazyRecurse(n.alternate, e), f.lazyRecurse(n.consequent, e)), r(e);
                    break;
                case xi.Identifier:
                    e = e || this.nextId(), t && (t.context = "inputs" === f.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", n.name) + "?l:s"), t.computed = !1, t.name = n.name), f.if_("inputs" === f.stage || f.not(f.getHasOwnProperty("l", n.name)), function() {
                        f.if_("inputs" === f.stage || "s", function() {
                            i && 1 !== i && f.if_(f.isNull(f.nonComputedMember("s", n.name)), f.lazyAssign(f.nonComputedMember("s", n.name), "{}")), f.assign(e, f.nonComputedMember("s", n.name))
                        })
                    }, e && f.lazyAssign(e, f.nonComputedMember("l", n.name))), r(e);
                    break;
                case xi.MemberExpression:
                    a = t && (t.context = this.nextId()) || this.nextId(), e = e || this.nextId(), f.recurse(n.object, a, void 0, function() {
                        f.if_(f.notNull(a), function() {
                            n.computed ? (s = f.nextId(), f.recurse(n.property, s), f.getStringValue(s), i && 1 !== i && f.if_(f.not(f.computedMember(a, s)), f.lazyAssign(f.computedMember(a, s), "{}")), c = f.computedMember(a, s), f.assign(e, c), t && (t.computed = !0, t.name = s)) : (i && 1 !== i && f.if_(f.isNull(f.nonComputedMember(a, n.property.name)), f.lazyAssign(f.nonComputedMember(a, n.property.name), "{}")), c = f.nonComputedMember(a, n.property.name), f.assign(e, c), t && (t.computed = !1, t.name = n.property.name))
                        }, function() {
                            f.assign(e, "undefined")
                        }), r(e)
                    }, !!i);
                    break;
                case xi.CallExpression:
                    e = e || this.nextId(), n.filter ? (s = f.filter(n.callee.name), u = [], ut(n.arguments, function(t) {
                        var e = f.nextId();
                        f.recurse(t, e), u.push(e)
                    }), c = s + "(" + u.join(",") + ")", f.assign(e, c), r(e)) : (s = f.nextId(), a = {}, u = [], f.recurse(n.callee, s, a, function() {
                        f.if_(f.notNull(s), function() {
                            ut(n.arguments, function(t) {
                                f.recurse(t, n.constant ? void 0 : f.nextId(), void 0, function(t) {
                                    u.push(t)
                                })
                            }), c = a.name ? f.member(a.context, a.name, a.computed) + "(" + u.join(",") + ")" : s + "(" + u.join(",") + ")", f.assign(e, c)
                        }, function() {
                            f.assign(e, "undefined")
                        }), r(e)
                    }));
                    break;
                case xi.AssignmentExpression:
                    s = this.nextId(), a = {}, this.recurse(n.left, void 0, a, function() {
                        f.if_(f.notNull(a.context), function() {
                            f.recurse(n.right, s), c = f.member(a.context, a.name, a.computed) + n.operator + s, f.assign(e, c), r(e || c)
                        })
                    }, 1);
                    break;
                case xi.ArrayExpression:
                    u = [], ut(n.elements, function(t) {
                        f.recurse(t, n.constant ? void 0 : f.nextId(), void 0, function(t) {
                            u.push(t)
                        })
                    }), c = "[" + u.join(",") + "]", this.assign(e, c), r(e || c);
                    break;
                case xi.ObjectExpression:
                    l = !(u = []), ut(n.properties, function(t) {
                        t.computed && (l = !0)
                    }), l ? (e = e || this.nextId(), this.assign(e, "{}"), ut(n.properties, function(t) {
                        t.computed ? (a = f.nextId(), f.recurse(t.key, a)) : a = t.key.type === xi.Identifier ? t.key.name : "" + t.key.value, s = f.nextId(), f.recurse(t.value, s), f.assign(f.member(e, a, t.computed), s)
                    })) : (ut(n.properties, function(e) {
                        f.recurse(e.value, n.constant ? void 0 : f.nextId(), void 0, function(t) {
                            u.push(f.escape(e.key.type === xi.Identifier ? e.key.name : "" + e.key.value) + ":" + t)
                        })
                    }), c = "{" + u.join(",") + "}", this.assign(e, c)), r(e || c);
                    break;
                case xi.ThisExpression:
                    this.assign(e, "s"), r(e || "s");
                    break;
                case xi.LocalsExpression:
                    this.assign(e, "l"), r(e || "l");
                    break;
                case xi.NGValueParameter:
                    this.assign(e, "v"), r(e || "v")
            }
        },
        getHasOwnProperty: function(t, e) {
            var n = t + "." + e,
                r = this.current().own;
            return r.hasOwnProperty(n) || (r[n] = this.nextId(!1, t + "&&(" + this.escape(e) + " in " + t + ")")), r[n]
        },
        assign: function(t, e) {
            if (t) return this.current().body.push(t, "=", e, ";"), t
        },
        filter: function(t) {
            return this.state.filters.hasOwnProperty(t) || (this.state.filters[t] = this.nextId(!0)), this.state.filters[t]
        },
        ifDefined: function(t, e) {
            return "ifDefined(" + t + "," + this.escape(e) + ")"
        },
        plus: function(t, e) {
            return "plus(" + t + "," + e + ")"
        },
        return_: function(t) {
            this.current().body.push("return ", t, ";")
        },
        if_: function(t, e, n) {
            if (!0 === t) e();
            else {
                var r = this.current().body;
                r.push("if(", t, "){"), e(), r.push("}"), n && (r.push("else{"), n(), r.push("}"))
            }
        },
        not: function(t) {
            return "!(" + t + ")"
        },
        isNull: function(t) {
            return t + "==null"
        },
        notNull: function(t) {
            return t + "!=null"
        },
        nonComputedMember: function(t, e) {
            return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? t + "." + e : t + '["' + e.replace(/[^$_a-zA-Z0-9]/g, this.stringEscapeFn) + '"]'
        },
        computedMember: function(t, e) {
            return t + "[" + e + "]"
        },
        member: function(t, e, n) {
            return n ? this.computedMember(t, e) : this.nonComputedMember(t, e)
        },
        getStringValue: function(t) {
            this.assign(t, "getStringValue(" + t + ")")
        },
        lazyRecurse: function(t, e, n, r, i, o) {
            var a = this;
            return function() {
                a.recurse(t, e, n, r, i, o)
            }
        },
        lazyAssign: function(t, e) {
            var n = this;
            return function() {
                n.assign(t, e)
            }
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function(t) {
            return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
        },
        escape: function(t) {
            if (mt(t)) return "'" + t.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (p(t)) return t.toString();
            if (!0 === t) return "true";
            if (!1 === t) return "false";
            if (null === t) return "null";
            if (void 0 === t) return "undefined";
            throw vi("esc")
        },
        nextId: function(t, e) {
            var n = "v" + this.state.nextId++;
            return t || this.current().vars.push(n + (e ? "=" + e : "")), n
        },
        current: function() {
            return this.state[this.state.computing]
        }
    }, Ie.prototype = {
        compile: function(t) {
            var e, r, i, o = this;
            Oe(t, o.$filter), (e = Te(t)) && (r = this.recurse(e)), (e = Me(t.body)) && (i = [], ut(e, function(t, e) {
                var n = o.recurse(t);
                n.isPure = t.isPure, t.input = n, i.push(n), t.watchId = e
            }));
            var a = [];
            return ut(t.body, function(t) {
                a.push(o.recurse(t.expression))
            }), t = 0 === t.body.length ? ft : 1 === t.body.length ? a[0] : function(e, n) {
                var r;
                return ut(a, function(t) {
                    r = t(e, n)
                }), r
            }, r && (t.assign = function(t, e, n) {
                return r(t, n, e)
            }), i && (t.inputs = i), t
        },
        recurse: function(t, s, e) {
            var o, u, c, n = this;
            if (t.input) return this.inputs(t.input, t.watchId);
            switch (t.type) {
                case xi.Literal:
                    return this.value(t.value, s);
                case xi.UnaryExpression:
                    return u = this.recurse(t.argument), this["unary" + t.operator](u, s);
                case xi.BinaryExpression:
                case xi.LogicalExpression:
                    return o = this.recurse(t.left), u = this.recurse(t.right), this["binary" + t.operator](o, u, s);
                case xi.ConditionalExpression:
                    return this["ternary?:"](this.recurse(t.test), this.recurse(t.alternate), this.recurse(t.consequent), s);
                case xi.Identifier:
                    return n.identifier(t.name, s, e);
                case xi.MemberExpression:
                    return o = this.recurse(t.object, !1, !!e), t.computed || (u = t.property.name), t.computed && (u = this.recurse(t.property)), t.computed ? this.computedMember(o, u, s, e) : this.nonComputedMember(o, u, s, e);
                case xi.CallExpression:
                    return c = [], ut(t.arguments, function(t) {
                        c.push(n.recurse(t))
                    }), t.filter && (u = this.$filter(t.callee.name)), t.filter || (u = this.recurse(t.callee, !0)), t.filter ? function(t, e, n, r) {
                        for (var i = [], o = 0; o < c.length; ++o) i.push(c[o](t, e, n, r));
                        return t = u.apply(void 0, i, r), s ? {
                            context: void 0,
                            name: void 0,
                            value: t
                        } : t
                    } : function(t, e, n, r) {
                        var i, o = u(t, e, n, r);
                        if (null != o.value) {
                            i = [];
                            for (var a = 0; a < c.length; ++a) i.push(c[a](t, e, n, r));
                            i = o.value.apply(o.context, i)
                        }
                        return s ? {
                            value: i
                        } : i
                    };
                case xi.AssignmentExpression:
                    return o = this.recurse(t.left, !0, 1), u = this.recurse(t.right),
                        function(t, e, n, r) {
                            var i = o(t, e, n, r);
                            return t = u(t, e, n, r), i.context[i.name] = t, s ? {
                                value: t
                            } : t
                        };
                case xi.ArrayExpression:
                    return c = [], ut(t.elements, function(t) {
                            c.push(n.recurse(t))
                        }),
                        function(t, e, n, r) {
                            for (var i = [], o = 0; o < c.length; ++o) i.push(c[o](t, e, n, r));
                            return s ? {
                                value: i
                            } : i
                        };
                case xi.ObjectExpression:
                    return c = [], ut(t.properties, function(t) {
                            t.computed ? c.push({
                                key: n.recurse(t.key),
                                computed: !0,
                                value: n.recurse(t.value)
                            }) : c.push({
                                key: t.key.type === xi.Identifier ? t.key.name : "" + t.key.value,
                                computed: !1,
                                value: n.recurse(t.value)
                            })
                        }),
                        function(t, e, n, r) {
                            for (var i = {}, o = 0; o < c.length; ++o) c[o].computed ? i[c[o].key(t, e, n, r)] = c[o].value(t, e, n, r) : i[c[o].key] = c[o].value(t, e, n, r);
                            return s ? {
                                value: i
                            } : i
                        };
                case xi.ThisExpression:
                    return function(t) {
                        return s ? {
                            value: t
                        } : t
                    };
                case xi.LocalsExpression:
                    return function(t, e) {
                        return s ? {
                            value: e
                        } : e
                    };
                case xi.NGValueParameter:
                    return function(t, e, n) {
                        return s ? {
                            value: n
                        } : n
                    }
            }
        },
        "unary+": function(i, o) {
            return function(t, e, n, r) {
                return t = $t(t = i(t, e, n, r)) ? +t : 0, o ? {
                    value: t
                } : t
            }
        },
        "unary-": function(i, o) {
            return function(t, e, n, r) {
                return t = $t(t = i(t, e, n, r)) ? -t : -0, o ? {
                    value: t
                } : t
            }
        },
        "unary!": function(i, o) {
            return function(t, e, n, r) {
                return t = !i(t, e, n, r), o ? {
                    value: t
                } : t
            }
        },
        "binary+": function(o, a, s) {
            return function(t, e, n, r) {
                var i = o(t, e, n, r);
                return i = Ae(i, t = a(t, e, n, r)), s ? {
                    value: i
                } : i
            }
        },
        "binary-": function(o, a, s) {
            return function(t, e, n, r) {
                var i = o(t, e, n, r);
                return t = a(t, e, n, r), i = ($t(i) ? i : 0) - ($t(t) ? t : 0), s ? {
                    value: i
                } : i
            }
        },
        "binary*": function(i, o, a) {
            return function(t, e, n, r) {
                return t = i(t, e, n, r) * o(t, e, n, r), a ? {
                    value: t
                } : t
            }
        },
        "binary/": function(i, o, a) {
            return function(t, e, n, r) {
                return t = i(t, e, n, r) / o(t, e, n, r), a ? {
                    value: t
                } : t
            }
        },
        "binary%": function(i, o, a) {
            return function(t, e, n, r) {
                return t = i(t, e, n, r) % o(t, e, n, r), a ? {
                    value: t
                } : t
            }
        },
        "binary===": function(i, o, a) {
            return function(t, e, n, r) {
                return t = i(t, e, n, r) === o(t, e, n, r), a ? {
                    value: t
                } : t
            }
        },
        "binary!==": function(i, o, a) {
            return function(t, e, n, r) {
                return t = i(t, e, n, r) !== o(t, e, n, r), a ? {
                    value: t
                } : t
            }
        },
        "binary==": function(i, o, a) {
            return function(t, e, n, r) {
                return t = i(t, e, n, r) == o(t, e, n, r), a ? {
                    value: t
                } : t
            }
        },
        "binary!=": function(i, o, a) {
            return function(t, e, n, r) {
                return t = i(t, e, n, r) != o(t, e, n, r), a ? {
                    value: t
                } : t
            }
        },
        "binary<": function(i, o, a) {
            return function(t, e, n, r) {
                return t = i(t, e, n, r) < o(t, e, n, r), a ? {
                    value: t
                } : t
            }
        },
        "binary>": function(i, o, a) {
            return function(t, e, n, r) {
                return t = i(t, e, n, r) > o(t, e, n, r), a ? {
                    value: t
                } : t
            }
        },
        "binary<=": function(i, o, a) {
            return function(t, e, n, r) {
                return t = i(t, e, n, r) <= o(t, e, n, r), a ? {
                    value: t
                } : t
            }
        },
        "binary>=": function(i, o, a) {
            return function(t, e, n, r) {
                return t = i(t, e, n, r) >= o(t, e, n, r), a ? {
                    value: t
                } : t
            }
        },
        "binary&&": function(i, o, a) {
            return function(t, e, n, r) {
                return t = i(t, e, n, r) && o(t, e, n, r), a ? {
                    value: t
                } : t
            }
        },
        "binary||": function(i, o, a) {
            return function(t, e, n, r) {
                return t = i(t, e, n, r) || o(t, e, n, r), a ? {
                    value: t
                } : t
            }
        },
        "ternary?:": function(i, o, a, s) {
            return function(t, e, n, r) {
                return t = i(t, e, n, r) ? o(t, e, n, r) : a(t, e, n, r), s ? {
                    value: t
                } : t
            }
        },
        value: function(t, e) {
            return function() {
                return e ? {
                    context: void 0,
                    name: void 0,
                    value: t
                } : t
            }
        },
        identifier: function(i, o, a) {
            return function(t, e, n, r) {
                return t = e && i in e ? e : t, a && 1 !== a && t && null == t[i] && (t[i] = {}), e = t ? t[i] : void 0, o ? {
                    context: t,
                    name: i,
                    value: e
                } : e
            }
        },
        computedMember: function(s, u, c, l) {
            return function(t, e, n, r) {
                var i, o, a = s(t, e, n, r);
                return null != a && (i = u(t, e, n, r), i += "", l && 1 !== l && a && !a[i] && (a[i] = {}), o = a[i]), c ? {
                    context: a,
                    name: i,
                    value: o
                } : o
            }
        },
        nonComputedMember: function(i, o, a, s) {
            return function(t, e, n, r) {
                return t = i(t, e, n, r), s && 1 !== s && t && null == t[o] && (t[o] = {}), e = null != t ? t[o] : void 0, a ? {
                    context: t,
                    name: o,
                    value: e
                } : e
            }
        },
        inputs: function(i, o) {
            return function(t, e, n, r) {
                return r ? r[o] : i(t, e, n)
            }
        }
    }, je.prototype = {
        constructor: je,
        parse: function(t) {
            t = this.getAst(t);
            var e = this.astCompiler.compile(t.ast),
                n = t.ast;
            return e.literal = 0 === n.body.length || 1 === n.body.length && (n.body[0].expression.type === xi.Literal || n.body[0].expression.type === xi.ArrayExpression || n.body[0].expression.type === xi.ObjectExpression), e.constant = t.ast.constant, e.oneTime = t.oneTime, e
        },
        getAst: function(t) {
            var e = !1;
            return ":" === (t = t.trim()).charAt(0) && ":" === t.charAt(1) && (e = !0, t = t.substring(2)), {
                ast: this.ast.ast(t),
                oneTime: e
            }
        }
    };
    var Si = S("$sce"),
        Ei = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        ki = /_([a-z])/g,
        Ai = S("$compile"),
        Oi = st.document.createElement("a"),
        Mi = Ze(st.location.href);
    Xe.$inject = ["$document"], en.$inject = ["$provide"];
    var Vi = 22,
        Ti = ".",
        Ni = "0";
    an.$inject = ["$locale"];
    var Ii = {
            yyyy: ln("FullYear", 4, 0, !(sn.$inject = ["$locale"]), !0),
            yy: ln("FullYear", 2, 0, !0, !0),
            y: ln("FullYear", 1, 0, !1, !0),
            MMMM: fn("Month"),
            MMM: fn("Month", !0),
            MM: ln("Month", 2, 1),
            M: ln("Month", 1, 1),
            LLLL: fn("Month", !1, !0),
            dd: ln("Date", 2),
            d: ln("Date", 1),
            HH: ln("Hours", 2),
            H: ln("Hours", 1),
            hh: ln("Hours", 2, -12),
            h: ln("Hours", 1, -12),
            mm: ln("Minutes", 2),
            m: ln("Minutes", 1),
            ss: ln("Seconds", 2),
            s: ln("Seconds", 1),
            sss: ln("Milliseconds", 3),
            EEEE: fn("Day"),
            EEE: fn("Day", !0),
            a: function(t, e) {
                return t.getHours() < 12 ? e.AMPMS[0] : e.AMPMS[1]
            },
            Z: function(t, e, n) {
                return (0 <= (t = -1 * n) ? "+" : "") + (cn(Math[0 < t ? "floor" : "ceil"](t / 60), 2) + cn(Math.abs(t % 60), 2))
            },
            ww: pn(2),
            w: pn(1),
            G: $n,
            GG: $n,
            GGG: $n,
            GGGG: function(t, e) {
                return t.getFullYear() <= 0 ? e.ERANAMES[0] : e.ERANAMES[1]
            }
        },
        ji = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,
        Di = /^-?\d+$/;
    dn.$inject = ["$locale"];
    var Pi = C(Gn),
        Ui = C(Kn);
    yn.$inject = ["$parse"];
    var Ri = C({
            restrict: "E",
            compile: function(t, e) {
                if (!e.href && !e.xlinkHref) return function(t, e) {
                    if ("a" === e[0].nodeName.toLowerCase()) {
                        var n = "[object SVGAnimatedString]" === Qn.call(e.prop("href")) ? "xlink:href" : "href";
                        e.on("click", function(t) {
                            e.attr(n) || t.preventDefault()
                        })
                    }
                }
            }
        }),
        _i = {};
    ut(Nr, function(t, r) {
        function i(t, e, n) {
            t.$watch(n[o], function(t) {
                n.$set(r, !!t)
            })
        }
        if ("multiple" !== t) {
            var o = Wt("ng-" + r),
                e = i;
            "checked" === t && (e = function(t, e, n) {
                n.ngModel !== n[o] && i(t, 0, n)
            }), _i[o] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: e
                }
            }
        }
    }), ut(jr, function(t, r) {
        _i[r] = function() {
            return {
                priority: 100,
                link: function(t, e, n) {
                    "ngPattern" === r && "/" === n.ngPattern.charAt(0) && (e = n.ngPattern.match(zn)) ? n.$set("ngPattern", new RegExp(e[1], e[2])) : t.$watch(n[r], function(t) {
                        n.$set(r, t)
                    })
                }
            }
        }
    }), ut(["src", "srcset", "href"], function(o) {
        var a = Wt("ng-" + o);
        _i[a] = function() {
            return {
                priority: 99,
                link: function(t, e, n) {
                    var r = o,
                        i = o;
                    "href" === o && "[object SVGAnimatedString]" === Qn.call(e.prop("href")) && (i = "xlinkHref", n.$attr[i] = "xlink:href", r = null), n.$observe(a, function(t) {
                        t ? (n.$set(i, t), Ln && r && e.prop(r, n[i])) : "href" === o && n.$set(i, null)
                    })
                }
            }
        }
    });
    var Li = {
        $addControl: ft,
        $$renameControl: function(t, e) {
            t.$name = e
        },
        $removeControl: ft,
        $setValidity: ft,
        $setDirty: ft,
        $setPristine: ft,
        $setSubmitted: ft
    };
    wn.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"], wn.prototype = {
        $rollbackViewValue: function() {
            ut(this.$$controls, function(t) {
                t.$rollbackViewValue()
            })
        },
        $commitViewValue: function() {
            ut(this.$$controls, function(t) {
                t.$commitViewValue()
            })
        },
        $addControl: function(t) {
            _(t.$name, "input"), this.$$controls.push(t), t.$name && (this[t.$name] = t), t.$$parentForm = this
        },
        $$renameControl: function(t, e) {
            var n = t.$name;
            this[n] === t && delete this[n], (this[e] = t).$name = e
        },
        $removeControl: function(n) {
            n.$name && this[n.$name] === n && delete this[n.$name], ut(this.$pending, function(t, e) {
                this.$setValidity(e, null, n)
            }, this), ut(this.$error, function(t, e) {
                this.$setValidity(e, null, n)
            }, this), ut(this.$$success, function(t, e) {
                this.$setValidity(e, null, n)
            }, this), xt(this.$$controls, n), n.$$parentForm = Li
        },
        $setDirty: function() {
            this.$$animate.removeClass(this.$$element, Co), this.$$animate.addClass(this.$$element, So), this.$dirty = !0, this.$pristine = !1, this.$$parentForm.$setDirty()
        },
        $setPristine: function() {
            this.$$animate.setClass(this.$$element, Co, So + " ng-submitted"), this.$dirty = !1, this.$pristine = !0, this.$submitted = !1, ut(this.$$controls, function(t) {
                t.$setPristine()
            })
        },
        $setUntouched: function() {
            ut(this.$$controls, function(t) {
                t.$setUntouched()
            })
        },
        $setSubmitted: function() {
            this.$$animate.addClass(this.$$element, "ng-submitted"), this.$submitted = !0, this.$$parentForm.$setSubmitted()
        }
    }, Cn({
        clazz: wn,
        set: function(t, e, n) {
            var r = t[e];
            r ? -1 === r.indexOf(n) && r.push(n) : t[e] = [n]
        },
        unset: function(t, e, n) {
            var r = t[e];
            r && (xt(r, n), 0 === r.length && delete t[e])
        }
    });
    var qi = function(n) {
            return ["$timeout", "$parse", function(u, e) {
                function c(t) {
                    return "" === t ? e('this[""]').assign : e(t).assign || ft
                }
                return {
                    name: "form",
                    restrict: n ? "EAC" : "E",
                    require: ["form", "^^?form"],
                    controller: wn,
                    compile: function(t, e) {
                        t.addClass(Co).addClass(wo);
                        var s = e.name ? "name" : !(!n || !e.ngForm) && "ngForm";
                        return {
                            pre: function(e, t, n, r) {
                                var i = r[0];
                                if (!("action" in n)) {
                                    var o = function(t) {
                                        e.$apply(function() {
                                            i.$commitViewValue(), i.$setSubmitted()
                                        }), t.preventDefault()
                                    };
                                    t[0].addEventListener("submit", o), t.on("$destroy", function() {
                                        u(function() {
                                            t[0].removeEventListener("submit", o)
                                        }, 0, !1)
                                    })
                                }(r[1] || i.$$parentForm).$addControl(i);
                                var a = s ? c(i.$name) : ft;
                                s && (a(e, i), n.$observe(s, function(t) {
                                    i.$name !== t && (a(e, void 0), i.$$parentForm.$$renameControl(i, t), (a = c(i.$name))(e, i))
                                })), t.on("$destroy", function() {
                                    i.$$parentForm.$removeControl(i), a(e, void 0), ct(i, Li)
                                })
                            }
                        }
                    }
                }
            }]
        },
        Fi = qi(),
        Bi = qi(!0),
        Hi = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
        zi = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
        Wi = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
        Gi = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
        Ki = /^(\d{4,})-(\d{2})-(\d{2})$/,
        Ji = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Zi = /^(\d{4,})-W(\d\d)$/,
        Yi = /^(\d{4,})-(\d\d)$/,
        Qi = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Xi = Mt();
    ut(["date", "datetime-local", "month", "time", "week"], function(t) {
        Xi[t] = !0
    });
    var to = {
            text: function(t, e, n, r, i, o) {
                kn(0, e, n, r, i, o), En(r)
            },
            date: On("date", Ki, An(Ki, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": On("datetimelocal", Ji, An(Ji, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: On("time", Qi, An(Qi, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: On("week", Zi, function(t, e) {
                if (g(t)) return t;
                if (mt(t)) {
                    Zi.lastIndex = 0;
                    var n = Zi.exec(t);
                    if (n) {
                        var r = +n[1],
                            i = +n[2],
                            o = n = 0,
                            a = 0,
                            s = 0,
                            u = hn(r);
                        i = 7 * (i - 1);
                        return e && (n = e.getHours(), o = e.getMinutes(), a = e.getSeconds(), s = e.getMilliseconds()), new Date(r, 0, u.getDate() + i, n, o, a, s)
                    }
                }
                return NaN
            }, "yyyy-Www"),
            month: On("month", Yi, An(Yi, ["yyyy", "MM"]), "yyyy-MM"),
            number: function(t, e, n, r, i, o) {
                var a, s, u;
                (Mn(0, e, 0, r), Vn(r), kn(0, e, n, r, i, o), ($t(n.min) || n.ngMin) && (r.$validators.min = function(t) {
                    return r.$isEmpty(t) || pt(a) || a <= t
                }, n.$observe("min", function(t) {
                    a = Tn(t), r.$validate()
                })), ($t(n.max) || n.ngMax) && (r.$validators.max = function(t) {
                    return r.$isEmpty(t) || pt(s) || t <= s
                }, n.$observe("max", function(t) {
                    s = Tn(t), r.$validate()
                })), $t(n.step) || n.ngStep) && (r.$validators.step = function(t, e) {
                    return r.$isEmpty(e) || pt(u) || In(e, a || 0, u)
                }, n.$observe("step", function(t) {
                    u = Tn(t), r.$validate()
                }))
            },
            url: function(t, e, n, r, i, o) {
                kn(0, e, n, r, i, o), En(r), r.$$parserName = "url", r.$validators.url = function(t, e) {
                    var n = t || e;
                    return r.$isEmpty(n) || zi.test(n)
                }
            },
            email: function(t, e, n, r, i, o) {
                kn(0, e, n, r, i, o), En(r), r.$$parserName = "email", r.$validators.email = function(t, e) {
                    var n = t || e;
                    return r.$isEmpty(n) || Wi.test(n)
                }
            },
            radio: function(t, n, r, i) {
                var o = !r.ngTrim || "false" !== ur(r.ngTrim);
                pt(r.name) && n.attr("name", ++nr), n.on("click", function(t) {
                    var e;
                    n[0].checked && (e = r.value, o && (e = ur(e)), i.$setViewValue(e, t && t.type))
                }), i.$render = function() {
                    var t = r.value;
                    o && (t = ur(t)), n[0].checked = t === i.$viewValue
                }, r.$observe("value", i.$render)
            },
            range: function(t, n, r, i, e, o) {
                function a(t, e) {
                    n.attr(t, r[t]), r.$observe(t, e)
                }
                Mn(0, n, 0, i), Vn(i), kn(0, n, r, i, e, o);
                var s = i.$$hasNativeValidators && "range" === n[0].type,
                    u = s ? 0 : void 0,
                    c = s ? 100 : void 0,
                    l = s ? 1 : void 0,
                    f = n[0].validity;
                t = $t(r.min), e = $t(r.max), o = $t(r.step);
                var h = i.$render;
                i.$render = s && $t(f.rangeUnderflow) && $t(f.rangeOverflow) ? function() {
                    h(), i.$setViewValue(n.val())
                } : h, t && (i.$validators.min = s ? function() {
                    return !0
                } : function(t, e) {
                    return i.$isEmpty(e) || pt(u) || u <= e
                }, a("min", function(t) {
                    u = Tn(t), rr(i.$modelValue) || (s ? ((t = n.val()) < u && (t = u, n.val(t)), i.$setViewValue(t)) : i.$validate())
                })), e && (i.$validators.max = s ? function() {
                    return !0
                } : function(t, e) {
                    return i.$isEmpty(e) || pt(c) || e <= c
                }, a("max", function(t) {
                    c = Tn(t), rr(i.$modelValue) || (s ? (t = n.val(), c < t && (n.val(c), t = c < u ? u : c), i.$setViewValue(t)) : i.$validate())
                })), o && (i.$validators.step = s ? function() {
                    return !f.stepMismatch
                } : function(t, e) {
                    return i.$isEmpty(e) || pt(l) || In(e, u || 0, l)
                }, a("step", function(t) {
                    l = Tn(t), rr(i.$modelValue) || (s && i.$viewValue !== n.val() ? i.$setViewValue(n.val()) : i.$validate())
                }))
            },
            checkbox: function(t, e, n, r, i, o, a, s) {
                var u = jn(s, t, "ngTrueValue", n.ngTrueValue, !0),
                    c = jn(s, t, "ngFalseValue", n.ngFalseValue, !1);
                e.on("click", function(t) {
                    r.$setViewValue(e[0].checked, t && t.type)
                }), r.$render = function() {
                    e[0].checked = r.$viewValue
                }, r.$isEmpty = function(t) {
                    return !1 === t
                }, r.$formatters.push(function(t) {
                    return St(t, u)
                }), r.$parsers.push(function(t) {
                    return t ? u : c
                })
            },
            hidden: ft,
            button: ft,
            submit: ft,
            reset: ft,
            file: ft
        },
        eo = ["$browser", "$sniffer", "$filter", "$parse", function(i, o, a, s) {
            return {
                restrict: "E",
                require: ["?ngModel"],
                link: {
                    pre: function(t, e, n, r) {
                        r[0] && (to[Gn(n.type)] || to.text)(t, e, n, r[0], o, i, a, s)
                    }
                }
            }
        }],
        no = /^(true|false|\d+)$/,
        ro = function() {
            function r(t, e, n) {
                var r = $t(n) ? n : 9 === Ln ? "" : null;
                t.prop("value", r), e.$set("value", n)
            }
            return {
                restrict: "A",
                priority: 100,
                compile: function(t, e) {
                    return no.test(e.ngValue) ? function(t, e, n) {
                        r(e, n, t = t.$eval(n.ngValue))
                    } : function(t, e, n) {
                        t.$watch(n.ngValue, function(t) {
                            r(e, n, t)
                        })
                    }
                }
            }
        },
        io = ["$compile", function(r) {
            return {
                restrict: "AC",
                compile: function(t) {
                    return r.$$addBindingClass(t),
                        function(t, e, n) {
                            r.$$addBindingInfo(e, n.ngBind), e = e[0], t.$watch(n.ngBind, function(t) {
                                e.textContent = P(t)
                            })
                        }
                }
            }
        }],
        oo = ["$interpolate", "$compile", function(r, i) {
            return {
                compile: function(t) {
                    return i.$$addBindingClass(t),
                        function(t, e, n) {
                            t = r(e.attr(n.$attr.ngBindTemplate)), i.$$addBindingInfo(e, t.expressions), e = e[0], n.$observe("ngBindTemplate", function(t) {
                                e.textContent = pt(t) ? "" : t
                            })
                        }
                }
            }
        }],
        ao = ["$sce", "$parse", "$compile", function(o, n, a) {
            return {
                restrict: "A",
                compile: function(t, e) {
                    var r = n(e.ngBindHtml),
                        i = n(e.ngBindHtml, function(t) {
                            return o.valueOf(t)
                        });
                    return a.$$addBindingClass(t),
                        function(e, n, t) {
                            a.$$addBindingInfo(n, t.ngBindHtml), e.$watch(i, function() {
                                var t = r(e);
                                n.html(o.getTrustedHtml(t) || "")
                            })
                        }
                }
            }
        }],
        so = C({
            restrict: "A",
            require: "ngModel",
            link: function(t, e, n, r) {
                r.$viewChangeListeners.push(function() {
                    t.$eval(n.ngChange)
                })
            }
        }),
        uo = Dn("", !0),
        co = Dn("Odd", 0),
        lo = Dn("Even", 1),
        fo = bn({
            compile: function(t, e) {
                e.$set("ngCloak", void 0), t.removeClass("ng-cloak")
            }
        }),
        ho = [function() {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        po = {},
        $o = {
            blur: !0,
            focus: !0
        };
    ut("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(o) {
        var a = Wt("ng-" + o);
        po[a] = ["$parse", "$rootScope", function(n, i) {
            return {
                restrict: "A",
                compile: function(t, e) {
                    var r = n(e[a]);
                    return function(n, t) {
                        t.on(o, function(t) {
                            var e = function() {
                                r(n, {
                                    $event: t
                                })
                            };
                            $o[o] && i.$$phase ? n.$evalAsync(e) : n.$apply(e)
                        })
                    }
                }
            }
        }]
    });
    var mo = ["$animate", "$compile", function(u, c) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function(t, n, r, e, i) {
                    var o, a, s;
                    t.$watch(r.ngIf, function(t) {
                        t ? a || i(function(t, e) {
                            a = e, t[t.length++] = c.$$createComment("end ngIf", r.ngIf), o = {
                                clone: t
                            }, u.enter(t, n.parent(), n)
                        }) : (s && (s.remove(), s = null), a && (a.$destroy(), a = null), o && (s = D(o.clone), u.leave(s).done(function(t) {
                            !1 !== t && (s = null)
                        }), o = null))
                    })
                }
            }
        }],
        vo = ["$templateRequest", "$anchorScroll", "$animate", function(d, m, v) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: er.noop,
                compile: function(t, e) {
                    var n = e.ngInclude || e.src,
                        p = e.onload || "",
                        $ = e.autoscroll;
                    return function(o, a, t, s, u) {
                        var c, e, l, f = 0,
                            h = function() {
                                e && (e.remove(), e = null), c && (c.$destroy(), c = null), l && (v.leave(l).done(function(t) {
                                    !1 !== t && (e = null)
                                }), e = l, l = null)
                            };
                        o.$watch(n, function(n) {
                            var r = function(t) {
                                    !1 === t || !$t($) || $ && !o.$eval($) || m()
                                },
                                i = ++f;
                            n ? (d(n, !0).then(function(t) {
                                if (!o.$$destroyed && i === f) {
                                    var e = o.$new();
                                    s.template = t, t = u(e, function(t) {
                                        h(), v.enter(t, null, a).done(r)
                                    }), l = t, (c = e).$emit("$includeContentLoaded", n), o.$eval(p)
                                }
                            }, function() {
                                o.$$destroyed || i !== f || (h(), o.$emit("$includeContentError", n))
                            }), o.$emit("$includeContentRequested", n)) : (h(), s.template = null)
                        })
                    }
                }
            }
        }],
        go = ["$compile", function(i) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function(t, e, n, r) {
                    Qn.call(e[0]).match(/SVG/) ? (e.empty(), i(B(r.template, st.document).childNodes)(t, function(t) {
                        e.append(t)
                    }, {
                        futureParentElement: e
                    })) : (e.html(r.template), i(e.contents())(t))
                }
            }
        }],
        yo = bn({
            priority: 450,
            compile: function() {
                return {
                    pre: function(t, e, n) {
                        t.$eval(n.ngInit)
                    }
                }
            }
        }),
        bo = function() {
            return {
                restrict: "A",
                priority: 100,
                require: "ngModel",
                link: function(t, e, n, r) {
                    var i = n.ngList || ", ",
                        o = "false" !== n.ngTrim,
                        a = o ? ur(i) : i;
                    r.$parsers.push(function(t) {
                        if (!pt(t)) {
                            var e = [];
                            return t && ut(t.split(a), function(t) {
                                t && e.push(o ? ur(t) : t)
                            }), e
                        }
                    }), r.$formatters.push(function(t) {
                        if (ar(t)) return t.join(i)
                    }), r.$isEmpty = function(t) {
                        return !t || !t.length
                    }
                }
            }
        },
        wo = "ng-valid",
        xo = "ng-invalid",
        Co = "ng-pristine",
        So = "ng-dirty",
        Eo = S("ngModel");
    Pn.$inject = "$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" "), Pn.prototype = {
        $$initGetterSetters: function() {
            if (this.$options.getOption("getterSetter")) {
                var n = this.$$parse(this.$$attr.ngModel + "()"),
                    r = this.$$parse(this.$$attr.ngModel + "($$$p)");
                this.$$ngModelGet = function(t) {
                    var e = this.$$parsedNgModel(t);
                    return gt(e) && (e = n(t)), e
                }, this.$$ngModelSet = function(t, e) {
                    gt(this.$$parsedNgModel(t)) ? r(t, {
                        $$$p: e
                    }) : this.$$parsedNgModelAssign(t, e)
                }
            } else if (!this.$$parsedNgModel.assign) throw Eo("nonassign", this.$$attr.ngModel, kt(this.$$element))
        },
        $render: ft,
        $isEmpty: function(t) {
            return pt(t) || "" === t || null === t || t != t
        },
        $$updateEmptyClasses: function(t) {
            this.$isEmpty(t) ? (this.$$animate.removeClass(this.$$element, "ng-not-empty"), this.$$animate.addClass(this.$$element, "ng-empty")) : (this.$$animate.removeClass(this.$$element, "ng-empty"), this.$$animate.addClass(this.$$element, "ng-not-empty"))
        },
        $setPristine: function() {
            this.$dirty = !1, this.$pristine = !0, this.$$animate.removeClass(this.$$element, So), this.$$animate.addClass(this.$$element, Co)
        },
        $setDirty: function() {
            this.$dirty = !0, this.$pristine = !1, this.$$animate.removeClass(this.$$element, Co), this.$$animate.addClass(this.$$element, So), this.$$parentForm.$setDirty()
        },
        $setUntouched: function() {
            this.$touched = !1, this.$untouched = !0, this.$$animate.setClass(this.$$element, "ng-untouched", "ng-touched")
        },
        $setTouched: function() {
            this.$touched = !0, this.$untouched = !1, this.$$animate.setClass(this.$$element, "ng-touched", "ng-untouched")
        },
        $rollbackViewValue: function() {
            this.$$timeout.cancel(this.$$pendingDebounce), this.$viewValue = this.$$lastCommittedViewValue, this.$render()
        },
        $validate: function() {
            if (!rr(this.$modelValue)) {
                var t = this.$$lastCommittedViewValue,
                    e = this.$$rawModelValue,
                    n = this.$valid,
                    r = this.$modelValue,
                    i = this.$options.getOption("allowInvalid"),
                    o = this;
                this.$$runValidators(e, t, function(t) {
                    i || n === t || (o.$modelValue = t ? e : void 0, o.$modelValue !== r && o.$$writeModelToScope())
                })
            }
        },
        $$runValidators: function(r, i, e) {
            function o(t, e) {
                c === l.$$currentValidationRunId && l.$setValidity(t, e)
            }

            function t(t) {
                c === l.$$currentValidationRunId && e(t)
            }
            this.$$currentValidationRunId++;
            var a, s, u, n, c = this.$$currentValidationRunId,
                l = this;
            n = l.$$parserName || "parse", (pt(l.$$parserValid) ? (o(n, null), 1) : (l.$$parserValid || (ut(l.$validators, function(t, e) {
                o(e, null)
            }), ut(l.$asyncValidators, function(t, e) {
                o(e, null)
            })), o(n, l.$$parserValid), l.$$parserValid)) ? (u = !0, ut(l.$validators, function(t, e) {
                var n = Boolean(t(r, i));
                u = u && n, o(e, n)
            }), u || (ut(l.$asyncValidators, function(t, e) {
                o(e, null)
            }), 0) ? (a = [], s = !0, ut(l.$asyncValidators, function(t, e) {
                var n = t(r, i);
                if (!n || !gt(n.then)) throw Eo("nopromise", n);
                o(e, void 0), a.push(n.then(function() {
                    o(e, !0)
                }, function() {
                    o(e, s = !1)
                }))
            }), a.length ? l.$$q.all(a).then(function() {
                t(s)
            }, ft) : t(!0)) : t(!1)) : t(!1)
        },
        $commitViewValue: function() {
            var t = this.$viewValue;
            this.$$timeout.cancel(this.$$pendingDebounce), (this.$$lastCommittedViewValue !== t || "" === t && this.$$hasNativeValidators) && (this.$$updateEmptyClasses(t), this.$$lastCommittedViewValue = t, this.$pristine && this.$setDirty(), this.$$parseAndValidate())
        },
        $$parseAndValidate: function() {
            var e = this.$$lastCommittedViewValue,
                n = this;
            if (this.$$parserValid = !pt(e) || void 0)
                for (var t = 0; t < this.$parsers.length; t++)
                    if (pt(e = this.$parsers[t](e))) {
                        this.$$parserValid = !1;
                        break
                    }
            rr(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
            var r = this.$modelValue,
                i = this.$options.getOption("allowInvalid");
            this.$$rawModelValue = e, i && (this.$modelValue = e, n.$modelValue !== r && n.$$writeModelToScope()), this.$$runValidators(e, this.$$lastCommittedViewValue, function(t) {
                i || (n.$modelValue = t ? e : void 0, n.$modelValue !== r && n.$$writeModelToScope())
            })
        },
        $$writeModelToScope: function() {
            this.$$ngModelSet(this.$$scope, this.$modelValue), ut(this.$viewChangeListeners, function(t) {
                try {
                    t()
                } catch (t) {
                    this.$$exceptionHandler(t)
                }
            }, this)
        },
        $setViewValue: function(t, e) {
            this.$viewValue = t, this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(e)
        },
        $$debounceViewValueCommit: function(t) {
            var e = this.$options.getOption("debounce");
            p(e[t]) ? e = e[t] : p(e.default) && (e = e.default), this.$$timeout.cancel(this.$$pendingDebounce);
            var n = this;
            0 < e ? this.$$pendingDebounce = this.$$timeout(function() {
                n.$commitViewValue()
            }, e) : this.$$scope.$root.$$phase ? this.$commitViewValue() : this.$$scope.$apply(function() {
                n.$commitViewValue()
            })
        },
        $overrideModelOptions: function(t) {
            this.$options = this.$options.createChild(t), this.$$setUpdateOnEvents()
        },
        $processModelValue: function() {
            var t = this.$$format();
            this.$viewValue !== t && (this.$$updateEmptyClasses(t), this.$viewValue = this.$$lastCommittedViewValue = t, this.$render(), this.$$runValidators(this.$modelValue, this.$viewValue, ft))
        },
        $$format: function() {
            for (var t = this.$formatters, e = t.length, n = this.$modelValue; e--;) n = t[e](n);
            return n
        },
        $$setModelValue: function(t) {
            this.$modelValue = this.$$rawModelValue = t, this.$$parserValid = void 0, this.$processModelValue()
        },
        $$setUpdateOnEvents: function() {
            this.$$updateEvents && this.$$element.off(this.$$updateEvents, this.$$updateEventHandler), (this.$$updateEvents = this.$options.getOption("updateOn")) && this.$$element.on(this.$$updateEvents, this.$$updateEventHandler)
        },
        $$updateEventHandler: function(t) {
            this.$$debounceViewValueCommit(t && t.type)
        }
    }, Cn({
        clazz: Pn,
        set: function(t, e) {
            t[e] = !0
        },
        unset: function(t, e) {
            delete t[e]
        }
    });
    var ko, Ao = ["$rootScope", function(a) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: Pn,
                priority: 1,
                compile: function(t) {
                    return t.addClass(Co).addClass("ng-untouched").addClass(wo), {
                        pre: function(t, e, n, r) {
                            var i = r[0];
                            e = r[1] || i.$$parentForm, (r = r[2]) && (i.$options = r.$options), i.$$initGetterSetters(), e.$addControl(i), n.$observe("name", function(t) {
                                i.$name !== t && i.$$parentForm.$$renameControl(i, t)
                            }), t.$on("$destroy", function() {
                                i.$$parentForm.$removeControl(i)
                            })
                        },
                        post: function(t, e, n, r) {
                            function i() {
                                o.$setTouched()
                            }
                            var o = r[0];
                            o.$$setUpdateOnEvents(), e.on("blur", function() {
                                o.$touched || (a.$$phase ? t.$evalAsync(i) : t.$apply(i))
                            })
                        }
                    }
                }
            }
        }],
        Oo = /(\s+|^)default(\s+|$)/;
    Un.prototype = {
        getOption: function(t) {
            return this.$$options[t]
        },
        createChild: function(n) {
            var r = !1;
            return ut(n = ct({}, n), function(t, e) {
                "$inherit" === t ? "*" === e ? r = !0 : (n[e] = this.$$options[e], "updateOn" === e && (n.updateOnDefault = this.$$options.updateOnDefault)) : "updateOn" === e && (n.updateOnDefault = !1, n[e] = ur(t.replace(Oo, function() {
                    return n.updateOnDefault = !0, " "
                })))
            }, this), r && (delete n["*"], Rn(n, this.$$options)), Rn(n, ko.$$options), new Un(n)
        }
    }, ko = new Un({
        updateOn: "",
        updateOnDefault: !0,
        debounce: 0,
        getterSetter: !1,
        allowInvalid: !1,
        timezone: null
    });
    var Mo = function() {
            function t(t, e) {
                this.$$attrs = t, this.$$scope = e
            }
            return t.$inject = ["$attrs", "$scope"], t.prototype = {
                $onInit: function() {
                    var t = this.parentCtrl ? this.parentCtrl.$options : ko,
                        e = this.$$scope.$eval(this.$$attrs.ngModelOptions);
                    this.$options = t.createChild(e)
                }
            }, {
                restrict: "A",
                priority: 10,
                require: {
                    parentCtrl: "?^^ngModelOptions"
                },
                bindToController: !0,
                controller: t
            }
        },
        Vo = bn({
            terminal: !0,
            priority: 1e3
        }),
        To = S("ngOptions"),
        No = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        Io = ["$compile", "$document", "$parse", function($, d, w) {
            var m = st.document.createElement("option"),
                v = st.document.createElement("optgroup");
            return {
                restrict: "A",
                terminal: !0,
                require: ["select", "ngModel"],
                link: {
                    pre: function(t, e, n, r) {
                        r[0].registerOption = ft
                    },
                    post: function(t, i, e, n) {
                        function r(t) {
                            var e = (t = f.getOptionFromViewValue(t)) && t.element;
                            return e && !e.selected && (e.selected = !0), t
                        }

                        function o(t, e) {
                            (t.element = e).disabled = t.disabled, t.label !== e.label && (e.label = t.label, e.textContent = t.label), e.value = t.selectValue
                        }
                        var a = n[0],
                            s = n[1],
                            u = e.multiple;
                        n = 0;
                        for (var c = i.children(), l = c.length; n < l; n++)
                            if ("" === c[n].value) {
                                a.hasEmptyOption = !0, a.emptyOption = c.eq(n);
                                break
                            }
                        i.empty(), n = !!a.emptyOption, qn(m.cloneNode(!1)).val("?");
                        var f, h = function(t, e, c) {
                                function l(t, e, n, r, i) {
                                    this.selectValue = t, this.viewValue = e, this.label = n, this.group = r, this.disabled = i
                                }

                                function f(t) {
                                    var e;
                                    if (!r && O(t)) e = t;
                                    else
                                        for (var n in e = [], t) t.hasOwnProperty(n) && "$" !== n.charAt(0) && e.push(n);
                                    return e
                                }
                                var s = t.match(No);
                                if (!s) throw To("iexp", t, kt(e));
                                var n = s[5] || s[7],
                                    r = s[6];
                                t = / as /.test(s[0]) && s[1];
                                var h = s[9];
                                e = w(s[2] ? s[1] : n);
                                var p = t && w(t) || e,
                                    i = h && w(h),
                                    $ = h ? function(t, e) {
                                        return i(c, e)
                                    } : function(t) {
                                        return It(t)
                                    },
                                    d = function(t, e) {
                                        return $(t, b(t, e))
                                    },
                                    m = w(s[2] || s[1]),
                                    v = w(s[3] || ""),
                                    g = w(s[4] || ""),
                                    y = w(s[8]),
                                    o = {},
                                    b = r ? function(t, e) {
                                        return o[r] = e, o[n] = t, o
                                    } : function(t) {
                                        return o[n] = t, o
                                    };
                                return {
                                    trackBy: h,
                                    getTrackByValue: d,
                                    getWatchables: w(y, function(t) {
                                        for (var e = [], n = f(t = t || []), r = n.length, i = 0; i < r; i++) {
                                            var o = t[a = t === n ? i : n[i]],
                                                a = b(o, a);
                                            o = $(o, a), e.push(o), (s[2] || s[1]) && (o = m(c, a), e.push(o)), s[4] && (a = g(c, a), e.push(a))
                                        }
                                        return e
                                    }),
                                    getOptions: function() {
                                        for (var t = [], e = {}, n = y(c) || [], r = f(n), i = r.length, o = 0; o < i; o++) {
                                            var a = n === r ? o : r[o],
                                                s = b(n[a], a),
                                                u = p(c, s);
                                            u = new l(a = $(u, s), u, m(c, s), v(c, s), s = g(c, s)), t.push(u), e[a] = u
                                        }
                                        return {
                                            items: t,
                                            selectValueMap: e,
                                            getOptionFromViewValue: function(t) {
                                                return e[d(t)]
                                            },
                                            getViewValueFromOption: function(t) {
                                                return h ? E(t.viewValue) : t.viewValue
                                            }
                                        }
                                    }
                                }
                            }(e.ngOptions, i, t),
                            p = d[0].createDocumentFragment();
                        a.generateUnknownOptionValue = function(t) {
                            return "?"
                        }, u ? (a.writeValue = function(t) {
                            if (f) {
                                var e = t && t.map(r) || [];
                                f.items.forEach(function(t) {
                                    t.element.selected && -1 === Array.prototype.indexOf.call(e, t) && (t.element.selected = !1)
                                })
                            }
                        }, a.readValue = function() {
                            var t = i.val() || [],
                                e = [];
                            return ut(t, function(t) {
                                (t = f.selectValueMap[t]) && !t.disabled && e.push(f.getViewValueFromOption(t))
                            }), e
                        }, h.trackBy && t.$watchCollection(function() {
                            if (ar(s.$viewValue)) return s.$viewValue.map(function(t) {
                                return h.getTrackByValue(t)
                            })
                        }, function() {
                            s.$render()
                        })) : (a.writeValue = function(t) {
                            if (f) {
                                var e = i[0].options[i[0].selectedIndex],
                                    n = f.getOptionFromViewValue(t);
                                e && e.removeAttribute("selected"), n ? (i[0].value !== n.selectValue && (a.removeUnknownOption(), i[0].value = n.selectValue, n.element.selected = !0), n.element.setAttribute("selected", "selected")) : a.selectUnknownOrEmptyOption(t)
                            }
                        }, a.readValue = function() {
                            var t = f.selectValueMap[i.val()];
                            return t && !t.disabled ? (a.unselectEmptyOption(), a.removeUnknownOption(), f.getViewValueFromOption(t)) : null
                        }, h.trackBy && t.$watch(function() {
                            return h.getTrackByValue(s.$viewValue)
                        }, function() {
                            s.$render()
                        })), n && ($(a.emptyOption)(t), i.prepend(a.emptyOption), 8 === a.emptyOption[0].nodeType ? (a.hasEmptyOption = !1, a.registerOption = function(t, e) {
                            "" === e.val() && (a.hasEmptyOption = !0, a.emptyOption = e, a.emptyOption.removeClass("ng-scope"), s.$render(), e.on("$destroy", function() {
                                var t = a.$isEmptyOptionSelected();
                                a.hasEmptyOption = !1, a.emptyOption = void 0, t && s.$render()
                            }))
                        }) : a.emptyOption.removeClass("ng-scope")), t.$watchCollection(h.getWatchables, function() {
                            var t = f && a.readValue();
                            if (f)
                                for (var e = f.items.length - 1; 0 <= e; e--) {
                                    var n = f.items[e];
                                    $t(n.group) ? rt(n.element.parentNode) : rt(n.element)
                                }
                            f = h.getOptions();
                            var r = {};
                            f.items.forEach(function(t) {
                                var e;
                                if ($t(t.group)) {
                                    (e = r[t.group]) || (e = v.cloneNode(!1), p.appendChild(e), e.label = null === t.group ? "null" : t.group, r[t.group] = e);
                                    var n = m.cloneNode(!1);
                                    e.appendChild(n), o(t, n)
                                } else e = m.cloneNode(!1), p.appendChild(e), o(t, e)
                            }), i[0].appendChild(p), s.$render(), s.$isEmpty(t) || (e = a.readValue(), (h.trackBy || u ? St(t, e) : t === e) || (s.$setViewValue(e), s.$render()))
                        })
                    }
                }
            }
        }],
        jo = ["$locale", "$interpolate", "$log", function($, d, m) {
            var v = /{}/g,
                g = /^when(Minus)?(.+)$/;
            return {
                link: function(r, i, o) {
                    function a(t) {
                        i.text(t || "")
                    }
                    var s, t = o.count,
                        u = o.$attr.when && i.attr(o.$attr.when),
                        c = o.offset || 0,
                        l = r.$eval(u) || {},
                        f = {},
                        e = d.startSymbol(),
                        n = d.endSymbol(),
                        h = e + t + "-" + c + n,
                        p = er.noop;
                    ut(o, function(t, e) {
                        var n = g.exec(e);
                        n && (n = (n[1] ? "-" : "") + Gn(n[2]), l[n] = i.attr(o.$attr[e]))
                    }), ut(l, function(t, e) {
                        f[e] = d(t.replace(v, h))
                    }), r.$watch(t, function(t) {
                        var e = parseFloat(t),
                            n = rr(e);
                        n || e in l || (e = $.pluralCat(e - c)), e === s || n && rr(s) || (p(), pt(n = f[e]) ? (null != t && m.debug("ngPluralize: no rule defined for '" + e + "' in " + u), p = ft, a()) : p = r.$watch(n, a), s = e)
                    })
                }
            }
        }],
        Do = ["$parse", "$animate", "$compile", function(u, E, c) {
            var k = S("ngRepeat"),
                A = function(t, e, n, r, i, o, a) {
                    t[n] = r, i && (t[i] = o), t.$index = e, t.$first = 0 === e, t.$last = e === a - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 == (1 & e))
                };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function(t, e) {
                    var v = e.ngRepeat,
                        g = c.$$createComment("end ngRepeat", v);
                    if (!(n = v.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/))) throw k("iexp", v);
                    var n, r = n[1],
                        i = n[2],
                        y = n[3],
                        o = n[4];
                    if (!(n = r.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/))) throw k("iidexp", r);
                    var b = n[3] || n[1],
                        w = n[2];
                    if (y && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(y) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(y))) throw k("badident", y);
                    var a, x, C, S, s = {
                        $id: It
                    };
                    return o ? a = u(o) : (C = function(t, e) {
                            return It(e)
                        }, S = function(t) {
                            return t
                        }),
                        function(p, $, t, e, d) {
                            a && (x = function(t, e, n) {
                                return w && (s[w] = t), s[b] = e, s.$index = n, a(p, s)
                            });
                            var m = Mt();
                            p.$watchCollection(i, function(t) {
                                var r, e, n, i, o, a, s, u, c, l, f = $[0],
                                    h = Mt();
                                if (y && (p[y] = t), O(t)) u = t, e = x || C;
                                else
                                    for (l in e = x || S, u = [], t) Wn.call(t, l) && "$" !== l.charAt(0) && u.push(l);
                                for (i = u.length, l = Array(i), r = 0; r < i; r++)
                                    if (o = t === u ? r : u[r], a = t[o], s = e(o, a, r), m[s]) c = m[s], delete m[s], h[s] = c, l[r] = c;
                                    else {
                                        if (h[s]) throw ut(l, function(t) {
                                            t && t.scope && (m[t.id] = t)
                                        }), k("dupes", v, s, a);
                                        l[r] = {
                                            id: s,
                                            scope: void 0,
                                            clone: void 0
                                        }, h[s] = !0
                                    }
                                for (n in m) {
                                    if (s = D((c = m[n]).clone), E.leave(s), s[0].parentNode)
                                        for (r = 0, e = s.length; r < e; r++) s[r].$$NG_REMOVED = !0;
                                    c.scope.$destroy()
                                }
                                for (r = 0; r < i; r++)
                                    if (o = t === u ? r : u[r], a = t[o], (c = l[r]).scope) {
                                        for (n = f;
                                            (n = n.nextSibling) && n.$$NG_REMOVED;);
                                        c.clone[0] !== n && E.move(D(c.clone), null, f), f = c.clone[c.clone.length - 1], A(c.scope, r, b, a, w, o, i)
                                    } else d(function(t, e) {
                                        c.scope = e;
                                        var n = g.cloneNode(!1);
                                        t[t.length++] = n, E.enter(t, null, f), f = n, c.clone = t, h[c.id] = c, A(c.scope, r, b, a, w, o, i)
                                    });
                                m = h
                            })
                        }
                }
            }
        }],
        Po = ["$animate", function(r) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(t, e, n) {
                    t.$watch(n.ngShow, function(t) {
                        r[t ? "removeClass" : "addClass"](e, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        })
                    })
                }
            }
        }],
        Uo = ["$animate", function(r) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(t, e, n) {
                    t.$watch(n.ngHide, function(t) {
                        r[t ? "addClass" : "removeClass"](e, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        })
                    })
                }
            }
        }],
        Ro = bn(function(t, n, e) {
            t.$watch(e.ngStyle, function(t, e) {
                e && t !== e && ut(e, function(t, e) {
                    n.css(e, "")
                }), t && n.css(t)
            }, !0)
        }),
        _o = ["$animate", "$compile", function(l, f) {
            return {
                require: "ngSwitch",
                controller: ["$scope", function() {
                    this.cases = {}
                }],
                link: function(t, e, n, i) {
                    var o = [],
                        a = [],
                        s = [],
                        u = [],
                        c = function(e, n) {
                            return function(t) {
                                !1 !== t && e.splice(n, 1)
                            }
                        };
                    t.$watch(n.ngSwitch || n.on, function(t) {
                        for (var e, n; s.length;) l.cancel(s.pop());
                        for (e = 0, n = u.length; e < n; ++e) {
                            var r = D(a[e].clone);
                            u[e].$destroy(), (s[e] = l.leave(r)).done(c(s, e))
                        }
                        a.length = 0, u.length = 0, (o = i.cases["!" + t] || i.cases["?"]) && ut(o, function(r) {
                            r.transclude(function(t, e) {
                                u.push(e);
                                var n = r.element;
                                t[t.length++] = f.$$createComment("end ngSwitchWhen"), a.push({
                                    clone: t
                                }), l.enter(t, n.parent(), n)
                            })
                        })
                    })
                }
            }
        }],
        Lo = bn({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(t, e, n, r, i) {
                ut(n.ngSwitchWhen.split(n.ngSwitchWhenSeparator).sort().filter(function(t, e, n) {
                    return n[e - 1] !== t
                }), function(t) {
                    r.cases["!" + t] = r.cases["!" + t] || [], r.cases["!" + t].push({
                        transclude: i,
                        element: e
                    })
                })
            }
        }),
        qo = bn({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(t, e, n, r, i) {
                r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
                    transclude: i,
                    element: e
                })
            }
        }),
        Fo = S("ngTransclude"),
        Bo = ["$compile", function(e) {
            return {
                restrict: "EAC",
                compile: function(t) {
                    var i = e(t.contents());
                    return t.empty(),
                        function(t, o, e, n, r) {
                            function a() {
                                i(t, function(t) {
                                    o.append(t)
                                })
                            }
                            if (!r) throw Fo("orphan", kt(o));
                            e.ngTransclude === e.$attr.ngTransclude && (e.ngTransclude = ""), r(function(t, e) {
                                var n;
                                if (n = t.length) t: {
                                    n = 0;
                                    for (var r = t.length; n < r; n++) {
                                        var i = t[n];
                                        if (i.nodeType !== vr || i.nodeValue.trim()) {
                                            n = !0;
                                            break t
                                        }
                                    }
                                    n = void 0
                                }
                                n ? o.append(t) : (a(), e.$destroy())
                            }, null, e = e.ngTransclude || e.ngTranscludeSlot), e && !r.isSlotFilled(e) && a()
                        }
                }
            }
        }],
        Ho = ["$templateCache", function(n) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function(t, e) {
                    "text/ng-template" === e.type && n.put(e.id, t[0].text)
                }
            }
        }],
        zo = {
            $setViewValue: ft,
            $render: ft
        },
        Wo = ["$element", "$scope", function(n, e) {
            function s() {
                t || (t = !0, e.$$postDigest(function() {
                    t = !1, c.ngModelCtrl.$render()
                }))
            }

            function u(t) {
                i || (i = !0, e.$$postDigest(function() {
                    e.$$destroyed || (i = !1, c.ngModelCtrl.$setViewValue(c.readValue()), t && c.ngModelCtrl.$render())
                }))
            }
            var c = this,
                r = new Pr;
            c.selectValueMap = {}, c.ngModelCtrl = zo, c.multiple = !1, c.unknownOption = qn(st.document.createElement("option")), c.hasEmptyOption = !1, c.emptyOption = void 0, c.renderUnknownOption = function(t) {
                t = c.generateUnknownOptionValue(t), c.unknownOption.val(t), n.prepend(c.unknownOption), _n(c.unknownOption, !0), n.val(t)
            }, c.updateUnknownOption = function(t) {
                t = c.generateUnknownOptionValue(t), c.unknownOption.val(t), _n(c.unknownOption, !0), n.val(t)
            }, c.generateUnknownOptionValue = function(t) {
                return "? " + It(t) + " ?"
            }, c.removeUnknownOption = function() {
                c.unknownOption.parent() && c.unknownOption.remove()
            }, c.selectEmptyOption = function() {
                c.emptyOption && (n.val(""), _n(c.emptyOption, !0))
            }, c.unselectEmptyOption = function() {
                c.hasEmptyOption && _n(c.emptyOption, !1)
            }, e.$on("$destroy", function() {
                c.renderUnknownOption = ft
            }), c.readValue = function() {
                var t = (t = n.val()) in c.selectValueMap ? c.selectValueMap[t] : t;
                return c.hasOption(t) ? t : null
            }, c.writeValue = function(t) {
                var e = n[0].options[n[0].selectedIndex];
                e && _n(qn(e), !1), c.hasOption(t) ? (c.removeUnknownOption(), e = It(t), n.val(e in c.selectValueMap ? e : t), _n(qn(n[0].options[n[0].selectedIndex]), !0)) : c.selectUnknownOrEmptyOption(t)
            }, c.addOption = function(t, e) {
                if (8 !== e[0].nodeType) {
                    _(t, '"option value"'), "" === t && (c.hasEmptyOption = !0, c.emptyOption = e);
                    var n = r.get(t) || 0;
                    r.set(t, n + 1), s()
                }
            }, c.removeOption = function(t) {
                var e = r.get(t);
                e && (1 === e ? (r.delete(t), "" === t && (c.hasEmptyOption = !1, c.emptyOption = void 0)) : r.set(t, e - 1))
            }, c.hasOption = function(t) {
                return !!r.get(t)
            }, c.$hasEmptyOption = function() {
                return c.hasEmptyOption
            }, c.$isUnknownOptionSelected = function() {
                return n[0].options[0] === c.unknownOption[0]
            }, c.$isEmptyOptionSelected = function() {
                return c.hasEmptyOption && n[0].options[n[0].selectedIndex] === c.emptyOption[0]
            };
            var t = !(c.selectUnknownOrEmptyOption = function(t) {
                    null == t && c.emptyOption ? (c.removeUnknownOption(), c.selectEmptyOption()) : c.unknownOption.parent().length ? c.updateUnknownOption(t) : c.renderUnknownOption(t)
                }),
                i = !1;
            c.registerOption = function(t, r, i, e, n) {
                if (i.$attr.ngValue) {
                    var o, a = NaN;
                    i.$observe("value", function(t) {
                        var e, n = r.prop("selected");
                        $t(a) && (c.removeOption(o), delete c.selectValueMap[a], e = !0), a = It(t), o = t, c.selectValueMap[a] = t, c.addOption(t, r), r.attr("value", a), e && n && u()
                    })
                } else e ? i.$observe("value", function(t) {
                    c.readValue();
                    var e, n = r.prop("selected");
                    $t(o) && (c.removeOption(o), e = !0), o = t, c.addOption(t, r), e && n && u()
                }) : n ? t.$watch(n, function(t, e) {
                    i.$set("value", t);
                    var n = r.prop("selected");
                    e !== t && c.removeOption(e), c.addOption(t, r), e && n && u()
                }) : c.addOption(i.value, r);
                i.$observe("disabled", function(t) {
                    ("true" === t || t && r.prop("selected")) && (c.multiple ? u(!0) : (c.ngModelCtrl.$setViewValue(null), c.ngModelCtrl.$render()))
                }), r.on("$destroy", function() {
                    var t = c.readValue(),
                        e = i.value;
                    c.removeOption(e), s(), (c.multiple && t && -1 !== t.indexOf(e) || t === e) && u(!0)
                })
            }
        }],
        Go = function() {
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: Wo,
                priority: 1,
                link: {
                    pre: function(t, r, e, n) {
                        var i = n[0],
                            o = n[1];
                        if (o) {
                            if (i.ngModelCtrl = o, r.on("change", function() {
                                    i.removeUnknownOption(), t.$apply(function() {
                                        o.$setViewValue(i.readValue())
                                    })
                                }), e.multiple) {
                                i.multiple = !0, i.readValue = function() {
                                    var e = [];
                                    return ut(r.find("option"), function(t) {
                                        t.selected && !t.disabled && (t = t.value, e.push(t in i.selectValueMap ? i.selectValueMap[t] : t))
                                    }), e
                                }, i.writeValue = function(n) {
                                    ut(r.find("option"), function(t) {
                                        var e = !!n && (-1 !== Array.prototype.indexOf.call(n, t.value) || -1 !== Array.prototype.indexOf.call(n, i.selectValueMap[t.value]));
                                        e !== t.selected && _n(qn(t), e)
                                    })
                                };
                                var a, s = NaN;
                                t.$watch(function() {
                                    s !== o.$viewValue || St(a, o.$viewValue) || (a = U(o.$viewValue), o.$render()), s = o.$viewValue
                                }), o.$isEmpty = function(t) {
                                    return !t || 0 === t.length
                                }
                            }
                        } else i.registerOption = ft
                    },
                    post: function(t, e, n, r) {
                        var i = r[1];
                        if (i) {
                            var o = r[0];
                            i.$render = function() {
                                o.writeValue(i.$viewValue)
                            }
                        }
                    }
                }
            }
        },
        Ko = ["$interpolate", function(n) {
            return {
                restrict: "E",
                priority: 100,
                compile: function(t, e) {
                    var i, o;
                    return $t(e.ngValue) || ($t(e.value) ? i = n(e.value, !0) : (o = n(t.text(), !0)) || e.$set("value", t.text())),
                        function(t, e, n) {
                            var r = e.parent();
                            (r = r.data("$selectController") || r.parent().data("$selectController")) && r.registerOption(t, e, n, i, o)
                        }
                }
            }
        }],
        Jo = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(t, e, n, r) {
                    r && (n.required = !0, r.$validators.required = function(t, e) {
                        return !n.required || !r.$isEmpty(e)
                    }, n.$observe("required", function() {
                        r.$validate()
                    }))
                }
            }
        },
        Zo = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(t, e, n, r) {
                    if (r) {
                        var i, o = n.ngPattern || n.pattern;
                        n.$observe("pattern", function(t) {
                            if (mt(t) && 0 < t.length && (t = new RegExp("^" + t + "$")), t && !t.test) throw S("ngPattern")("noregexp", o, t, kt(e));
                            i = t || void 0, r.$validate()
                        }), r.$validators.pattern = function(t, e) {
                            return r.$isEmpty(e) || pt(i) || i.test(e)
                        }
                    }
                }
            }
        },
        Yo = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(t, e, n, r) {
                    if (r) {
                        var i = -1;
                        n.$observe("maxlength", function(t) {
                            t = l(t), i = rr(t) ? -1 : t, r.$validate()
                        }), r.$validators.maxlength = function(t, e) {
                            return i < 0 || r.$isEmpty(e) || e.length <= i
                        }
                    }
                }
            }
        },
        Qo = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(t, e, n, r) {
                    if (r) {
                        var i = 0;
                        n.$observe("minlength", function(t) {
                            i = l(t) || 0, r.$validate()
                        }), r.$validators.minlength = function(t, e) {
                            return r.$isEmpty(e) || e.length >= i
                        }
                    }
                }
            }
        };
    st.angular.bootstrap ? st.console && console.log("WARNING: Tried to load AngularJS more than once.") : (function() {
        var i;
        if (!mr) {
            var t = fr();
            (Fn = pt(t) ? st.jQuery : t ? st[t] : void 0) && Fn.fn.on ? (ct((qn = Fn).fn, {
                scope: Tr.scope,
                isolateScope: Tr.isolateScope,
                controller: Tr.controller,
                injector: Tr.injector,
                inheritedData: Tr.inheritedData
            }), i = Fn.cleanData, Fn.cleanData = function(t) {
                for (var e, n, r = 0; null != (n = t[r]); r++)(e = Fn._data(n, "events")) && e.$destroy && Fn(n).triggerHandler("$destroy");
                i(t)
            }) : qn = H, er.element = qn, mr = !0
        }
    }(), ct(er, {
        errorHandlingConfig: t,
        bootstrap: V,
        copy: E,
        extend: ct,
        merge: e,
        equals: St,
        element: qn,
        forEach: ut,
        injector: Pt,
        noop: ft,
        bind: Et,
        toJson: n,
        fromJson: a,
        identity: ht,
        isUndefined: pt,
        isDefined: $t,
        isString: mt,
        isFunction: gt,
        isObject: dt,
        isNumber: p,
        isElement: m,
        isArray: ar,
        version: gr,
        isDate: g,
        lowercase: Gn,
        uppercase: Kn,
        callbacks: {
            $$counter: 0
        },
        getTestability: N,
        reloadWithDebugInfo: T,
        $$minErr: S,
        $$csp: lr,
        $$encodeUriSegment: x,
        $$encodeUriQuery: M,
        $$stringify: P
    }), (Bn = function(t) {
        function e(t, e, n) {
            return t[e] || (t[e] = n())
        }
        var f = S("$injector"),
            h = S("ng");
        return (t = e(t, "angular", Object)).$$minErr = t.$$minErr || S, e(t, "module", function() {
            var t = {};
            return function(s, u, c) {
                var l = {};
                if ("hasOwnProperty" === s) throw h("badname", "module");
                return u && t.hasOwnProperty(s) && (t[s] = null), e(t, s, function() {
                    function t(t, e, n, r) {
                        return r || (r = o),
                            function() {
                                return r[n || "push"]([t, e, arguments]), a
                            }
                    }

                    function e(n, r, i) {
                        return i || (i = o),
                            function(t, e) {
                                return e && gt(e) && (e.$$moduleName = s), i.push([n, r, arguments]), a
                            }
                    }
                    if (!u) throw f("nomod", s);
                    var o = [],
                        n = [],
                        r = [],
                        i = t("$injector", "invoke", "push", n),
                        a = {
                            _invokeQueue: o,
                            _configBlocks: n,
                            _runBlocks: r,
                            info: function(t) {
                                if ($t(t)) {
                                    if (!dt(t)) throw h("aobj", "value");
                                    return l = t, this
                                }
                                return l
                            },
                            requires: u,
                            name: s,
                            provider: e("$provide", "provider"),
                            factory: e("$provide", "factory"),
                            service: e("$provide", "service"),
                            value: t("$provide", "value"),
                            constant: t("$provide", "constant", "unshift"),
                            decorator: e("$provide", "decorator", n),
                            animation: e("$animateProvider", "register"),
                            filter: e("$filterProvider", "register"),
                            controller: e("$controllerProvider", "register"),
                            directive: e("$compileProvider", "directive"),
                            component: e("$compileProvider", "component"),
                            config: i,
                            run: function(t) {
                                return r.push(t), this
                            }
                        };
                    return c && i(c), a
                })
            }
        })
    }(st))("ng", ["ngLocale"], ["$provide", function(t) {
        t.provider({
            $$sanitizeUri: Fe
        }), t.provider("$compile", Ht).directive({
            a: Ri,
            input: eo,
            textarea: eo,
            form: Fi,
            script: Ho,
            select: Go,
            option: Ko,
            ngBind: io,
            ngBindHtml: ao,
            ngBindTemplate: oo,
            ngClass: uo,
            ngClassEven: lo,
            ngClassOdd: co,
            ngCloak: fo,
            ngController: ho,
            ngForm: Bi,
            ngHide: Uo,
            ngIf: mo,
            ngInclude: vo,
            ngInit: yo,
            ngNonBindable: Vo,
            ngPluralize: jo,
            ngRepeat: Do,
            ngShow: Po,
            ngStyle: Ro,
            ngSwitch: _o,
            ngSwitchWhen: Lo,
            ngSwitchDefault: qo,
            ngOptions: Io,
            ngTransclude: Bo,
            ngModel: Ao,
            ngList: bo,
            ngChange: so,
            pattern: Zo,
            ngPattern: Zo,
            required: Jo,
            ngRequired: Jo,
            minlength: Qo,
            ngMinlength: Qo,
            maxlength: Yo,
            ngMaxlength: Yo,
            ngValue: ro,
            ngModelOptions: Mo
        }).directive({
            ngInclude: go
        }).directive(_i).directive(po), t.provider({
            $anchorScroll: Ut,
            $animate: Gr,
            $animateCss: Zr,
            $$animateJs: zr,
            $$animateQueue: Wr,
            $$AnimateRunner: Jr,
            $$animateAsyncRun: Kr,
            $browser: qt,
            $cacheFactory: Ft,
            $controller: Jt,
            $document: Zt,
            $$isDocumentHidden: Yt,
            $exceptionHandler: Qt,
            $filter: en,
            $$forceReflow: ri,
            $interpolate: ce,
            $interval: le,
            $http: ae,
            $httpParamSerializer: te,
            $httpParamSerializerJQLike: ee,
            $httpBackend: ue,
            $xhrFactory: se,
            $jsonpCallbacks: fi,
            $location: Ce,
            $log: Se,
            $parse: Pe,
            $rootScope: qe,
            $q: Ue,
            $$q: Re,
            $sce: ze,
            $sceDelegate: He,
            $sniffer: We,
            $templateCache: Bt,
            $templateRequest: Ge,
            $$testability: Ke,
            $timeout: Je,
            $window: Qe,
            $$rAF: Le,
            $$jqLite: Nt,
            $$Map: Ur,
            $$cookieReader: tn
        })
    }]).info({
        angularVersion: "1.6.9"
    }), er.module("ngLocale", [], ["$provide", function(t) {
        t.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: ["AM", "PM"],
                DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                ERANAMES: ["Before Christ", "Anno Domini"],
                ERAS: ["BC", "AD"],
                FIRSTDAYOFWEEK: 6,
                MONTH: "January February March April May June July August September October November December".split(" "),
                SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
                WEEKENDRANGE: [5, 6],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                short: "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [{
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-¤",
                    negSuf: "",
                    posPre: "¤",
                    posSuf: ""
                }]
            },
            id: "en-us",
            localeID: "en_US",
            pluralCat: function(t, e) {
                var n, r, i = 0 | t,
                    o = e;
                return void 0 === o && (o = Math.min((n = t, -1 == (r = (n += "").indexOf(".")) ? 0 : n.length - r - 1), 3)), Math.pow(10, o), 1 == i && 0 == o ? "one" : "other"
            }
        })
    }]), qn(function() {
        i(st.document, V)
    }))
}(window), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
angular.module("lastfm-nowplaying", []).directive("lastfmnowplaying", ["uiCreation", "lastFmAPI", "lastFmParser", function(r, n, l) {
    return {
        scope: {
            config: "=config"
        },
        link: function(a, i, t) {
            a.$watch("config", function(t) {
                e()
            });
            var e = function() {
                n.getLatestScrobbles(a.config).then(function(t) {
                    var n = l.getLatestTrack(t);
                    angular.forEach(i, function(t, e) {
                        angular.element(i).addClass("lastfm-nowplaying"), r.create(t, a, n)
                    })
                }, function(t) {})
            }
        }
    }
}]).factory("uiCreation", ["$q", "canvasUI", function(c, s) {
    return {
        create: function(r, l, o) {
            (function(t, e, n) {
                t.innerHTML = "";
                var a = document.createElement("canvas");
                t.appendChild(a);
                var i = c.defer();
                return s.applyUI(t, a, n, function() {
                    setTimeout(function() {
                        var t = s.getAverageCanvasColor(a),
                            e = !1;
                        186 < .299 * t.r + .587 * t.g + .114 * t.b && (e = !0), i.resolve({
                            useBlackText: e
                        })
                    }, 200)
                }), i.promise
            })(r, 0, o.xLargeImgUrl).then(function(t) {
                angular.element(r).find("div").remove();
                var e, n, a, i = document.createElement("div");
                l.config.containerClass && angular.element(i).addClass(l.config.containerClass), e = i, n = o.largeImgUrl, a = document.createElement("div"), angular.element(a).attr("style", "background-image:url(" + n + ");").addClass("artwork"), e.appendChild(a),
                    function(t, e, n) {
                        var a = document.createElement("h3");
                        angular.element(a).text(e.nowplaying ? "Now Playing" : "Listening To");
                        var i = document.createElement("p");
                        angular.element(i).addClass("track").text(e.title);
                        var r = document.createElement("p");
                        angular.element(r).addClass("artist").text(e.artist);
                        var l = document.createElement("div");
                        angular.element(l).addClass("text"), angular.element(l).toggleClass("black", n), l.appendChild(a), l.appendChild(i), l.appendChild(r), t.appendChild(l)
                    }(i, o, t.useBlackText), r.appendChild(i)
            })
        }
    }
}]).factory("lastFmAPI", ["$q", "$http", function(a, i) {
    return {
        getLatestScrobbles: function(t) {
            var e = a.defer();
            if (t && t.user && t.apiKey) {
                var n = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=" + t.user + "&api_key=" + t.apiKey + "&format=json&limit=1";
                i.get(n).then(function(t) {
                    e.resolve(t)
                })
            } else e.reject("user or apiKey missing");
            return e.promise
        }
    }
}]).factory("lastFmParser", [function() {
    return {
        getLatestTrack: function(t) {
            var e = t.data.recenttracks.track[0];
            return {
                title: e.name,
                artist: e.artist["#text"],
                largeImgUrl: e.image[2]["#text"],
                xLargeImgUrl: e.image[3]["#text"],
                nowplaying: e["@attr"] && e["@attr"].nowplaying
            }
        }
    }
}]).factory("canvasUI", ["imageFx", function(i) {
    return {
        applyUI: function(t, e, n, a) {
            i.blur(t, e, 6, n, function() {
                a()
            })
        },
        getAverageCanvasColor: function(t) {
            for (var e = t.width, n = t.height, a = t.getContext("2d").getImageData(0, 0, e, n).data, i = 0, r = 0, l = 0, o = 0, c = a.length; o < c; o += 4) i += a[o], r += a[o + 1], l += a[o + 2];
            return {
                r: i = Math.floor(i / (a.length / 4)),
                g: r = Math.floor(r / (a.length / 4)),
                b: l = Math.floor(l / (a.length / 4))
            }
        }
    }
}]).factory("imageFx", ["$window", "$timeout", function(h, t) {
    var m = function(t, e) {
        this.image = e, this.element = t, this.element.width = this.image.width, this.element.height = this.image.height, this.context = this.element.getContext("2d"), this.context.drawImage(this.image, 0, 0)
    };
    m.prototype = {
        blur: function(t) {
            this.context.globalAlpha = .5;
            for (var e = -t; e <= t; e += 2)
                for (var n = -t; n <= t; n += 2) this.context.drawImage(this.element, n, e), 0 <= n && 0 <= e && this.context.drawImage(this.element, -(n - 1), -(e - 1));
            this.context.globalAlpha = 1
        }
    };
    return {
        blur: function(t, e, n, a, i) {
            return !!h.HTMLCanvasElement && (r = t, l = e, o = n, c = a, s = i, u = function() {
                var t, e, n, a, i;
                t = r, e = l, i = 0, (n = g).width / n.height > t.clientWidth / t.clientHeight ? (e.style.height = t.clientHeight + "px", e.style.width = e.clientHeight * (n.width / n.height) + "px", i = t.clientWidth - e.clientWidth) : (e.style.width = t.clientWidth + "px", e.style.height = e.clientWidth * (n.height / n.width) + "px"), a = (e.clientHeight - t.clientHeight) / 2 * -1, e.style.marginLeft = i + "px", e.style.marginTop = a + "px"
            }, (g = document.createElement("img")).crossOrigin = "Anonymous", g.onload = function() {
                new m(l, this).blur(o), u(), s && s()
            }, g.src = c, void angular.element(h).bind("resize", function() {
                u()
            }));
            var r, l, o, c, s, g, u
        }
    }
}]);