! function(e) {
    var t = {};

    function i(n) { if (t[n]) return t[n].exports; var s = t[n] = { i: n, l: !1, exports: {} }; return e[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports }
    i.m = e, i.c = t, i.d = function(e, t, n) { i.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: n }) }, i.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return i.d(t, "a", t), t }, i.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, i.p = "//oflt40zxf.bkt.clouddn.com/", i(i.s = 1)
}([function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.document = t.window = void 0;
    var n = "undefined" == typeof document ? { body: {}, addEventListener: function() {}, removeEventListener: function() {}, activeElement: { blur: function() {}, nodeName: "" }, querySelector: function() { return null }, querySelectorAll: function() { return [] }, getElementById: function() { return null }, createEvent: function() { return { initEvent: function() {} } }, createElement: function() { return { children: [], childNodes: [], style: {}, setAttribute: function() {}, getElementsByTagName: function() { return [] } } }, location: { hash: "" } } : document;
    t.document = n;
    var s = "undefined" == typeof window ? { document: n, navigator: { userAgent: "" }, location: {}, history: {}, CustomEvent: function() { return this }, addEventListener: function() {}, removeEventListener: function() {}, getComputedStyle: function() { return { getPropertyValue: function() { return "" } } }, Image: function() {}, Date: function() {}, screen: {}, setTimeout: function() {}, clearTimeout: function() {} } : window;
    t.window = s
}, function(e, t, i) {
    "use strict";
    i(2), i(3);
    var n = a(i(4)),
        s = a(i(6));

    function a(e) { return e && e.__esModule ? e : { default: e } }(0, n.default)(document).ready(function() { new s.default(".swiper-container", { direction: "horizontal", loop: !0, pagination: { el: ".swiper-pagination" } }) })
}, function(e, t) {}, function(e, t) {}, function(e, t, i) {
    "use strict";
    (function(e) {
        var i, n, s;

        function a(e) { return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }
        /*!
         * jQuery JavaScript Library v3.3.1
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2018-01-20T17:24Z
         */
        /*!
         * jQuery JavaScript Library v3.3.1
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2018-01-20T17:24Z
         */
        n = "undefined" != typeof window ? window : void 0, s = function(n, s) {
            var r = [],
                o = n.document,
                l = Object.getPrototypeOf,
                c = r.slice,
                d = r.concat,
                u = r.push,
                h = r.indexOf,
                p = {},
                f = p.toString,
                v = p.hasOwnProperty,
                m = v.toString,
                g = m.call(Object),
                y = {},
                w = function(e) { return "function" == typeof e && "number" != typeof e.nodeType },
                b = function(e) { return null != e && e === e.window },
                x = { type: !0, src: !0, noModule: !0 };

            function T(e, t, i) {
                var n, s = (t = t || o).createElement("script");
                if (s.text = e, i)
                    for (n in x) i[n] && (s[n] = i[n]);
                t.head.appendChild(s).parentNode.removeChild(s)
            }

            function E(e) { return null == e ? e + "" : "object" === a(e) || "function" == typeof e ? p[f.call(e)] || "object" : a(e) }
            var C = function e(t, i) { return new e.fn.init(t, i) },
                S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

            function k(e) {
                var t = !!e && "length" in e && e.length,
                    i = E(e);
                return !w(e) && !b(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            C.fn = C.prototype = {
                jquery: "3.3.1",
                constructor: C,
                length: 0,
                toArray: function() { return c.call(this) },
                get: function(e) { return null == e ? c.call(this) : e < 0 ? this[e + this.length] : this[e] },
                pushStack: function(e) { var t = C.merge(this.constructor(), e); return t.prevObject = this, t },
                each: function(e) { return C.each(this, e) },
                map: function(e) { return this.pushStack(C.map(this, function(t, i) { return e.call(t, i, t) })) },
                slice: function() { return this.pushStack(c.apply(this, arguments)) },
                first: function() { return this.eq(0) },
                last: function() { return this.eq(-1) },
                eq: function(e) {
                    var t = this.length,
                        i = +e + (e < 0 ? t : 0);
                    return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
                },
                end: function() { return this.prevObject || this.constructor() },
                push: u,
                sort: r.sort,
                splice: r.splice
            }, C.extend = C.fn.extend = function() {
                var e, t, i, n, s, r, o = arguments[0] || {},
                    l = 1,
                    c = arguments.length,
                    d = !1;
                for ("boolean" == typeof o && (d = o, o = arguments[l] || {}, l++), "object" === a(o) || w(o) || (o = {}), l === c && (o = this, l--); l < c; l++)
                    if (null != (e = arguments[l]))
                        for (t in e) i = o[t], o !== (n = e[t]) && (d && n && (C.isPlainObject(n) || (s = Array.isArray(n))) ? (s ? (s = !1, r = i && Array.isArray(i) ? i : []) : r = i && C.isPlainObject(i) ? i : {}, o[t] = C.extend(d, r, n)) : void 0 !== n && (o[t] = n));
                return o
            }, C.extend({
                expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) { throw new Error(e) },
                noop: function() {},
                isPlainObject: function(e) { var t, i; return !(!e || "[object Object]" !== f.call(e)) && (!(t = l(e)) || "function" == typeof(i = v.call(t, "constructor") && t.constructor) && m.call(i) === g) },
                isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
                globalEval: function(e) { T(e) },
                each: function(e, t) {
                    var i, n = 0;
                    if (k(e))
                        for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
                    else
                        for (n in e)
                            if (!1 === t.call(e[n], n, e[n])) break; return e
                },
                trim: function(e) { return null == e ? "" : (e + "").replace(S, "") },
                makeArray: function(e, t) { var i = t || []; return null != e && (k(Object(e)) ? C.merge(i, "string" == typeof e ? [e] : e) : u.call(i, e)), i },
                inArray: function(e, t, i) { return null == t ? -1 : h.call(t, e, i) },
                merge: function(e, t) { for (var i = +t.length, n = 0, s = e.length; n < i; n++) e[s++] = t[n]; return e.length = s, e },
                grep: function(e, t, i) { for (var n = [], s = 0, a = e.length, r = !i; s < a; s++) !t(e[s], s) !== r && n.push(e[s]); return n },
                map: function(e, t, i) {
                    var n, s, a = 0,
                        r = [];
                    if (k(e))
                        for (n = e.length; a < n; a++) null != (s = t(e[a], a, i)) && r.push(s);
                    else
                        for (a in e) null != (s = t(e[a], a, i)) && r.push(s);
                    return d.apply([], r)
                },
                guid: 1,
                support: y
            }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = r[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { p["[object " + t + "]"] = t.toLowerCase() });
            var M =
                /*!
                 * Sizzle CSS Selector Engine v2.3.3
                 * https://sizzlejs.com/
                 *
                 * Copyright jQuery Foundation and other contributors
                 * Released under the MIT license
                 * http://jquery.org/license
                 *
                 * Date: 2016-08-08
                 */
                function(e) {
                    var t, i, n, s, a, r, o, l, c, d, u, h, p, f, v, m, g, y, w, b = "sizzle" + 1 * new Date,
                        x = e.document,
                        T = 0,
                        E = 0,
                        C = re(),
                        S = re(),
                        k = re(),
                        M = function(e, t) { return e === t && (u = !0), 0 },
                        P = {}.hasOwnProperty,
                        D = [],
                        A = D.pop,
                        L = D.push,
                        $ = D.push,
                        z = D.slice,
                        N = function(e, t) {
                            for (var i = 0, n = e.length; i < n; i++)
                                if (e[i] === t) return i;
                            return -1
                        },
                        I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        O = "[\\x20\\t\\r\\n\\f]",
                        H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                        j = "\\[" + O + "*(" + H + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + O + "*\\]",
                        q = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)",
                        B = new RegExp(O + "+", "g"),
                        R = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
                        X = new RegExp("^" + O + "*," + O + "*"),
                        F = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
                        G = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
                        Y = new RegExp(q),
                        V = new RegExp("^" + H + "$"),
                        W = { ID: new RegExp("^#(" + H + ")"), CLASS: new RegExp("^\\.(" + H + ")"), TAG: new RegExp("^(" + H + "|[*])"), ATTR: new RegExp("^" + j), PSEUDO: new RegExp("^" + q), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"), bool: new RegExp("^(?:" + I + ")$", "i"), needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i") },
                        _ = /^(?:input|select|textarea|button)$/i,
                        U = /^h\d$/i,
                        K = /^[^{]+\{\s*\[native \w/,
                        Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        J = /[+~]/,
                        Z = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
                        ee = function(e, t, i) { var n = "0x" + t - 65536; return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320) },
                        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                        ie = function(e, t) { return t ? "\0" === e ? "锟�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
                        ne = function() { h() },
                        se = ye(function(e) { return !0 === e.disabled && ("form" in e || "label" in e) }, { dir: "parentNode", next: "legend" });
                    try { $.apply(D = z.call(x.childNodes), x.childNodes), D[x.childNodes.length].nodeType } catch (e) {
                        $ = {
                            apply: D.length ? function(e, t) { L.apply(e, z.call(t)) } : function(e, t) {
                                for (var i = e.length, n = 0; e[i++] = t[n++];);
                                e.length = i - 1
                            }
                        }
                    }

                    function ae(e, t, n, s) {
                        var a, o, c, d, u, f, g, y = t && t.ownerDocument,
                            T = t ? t.nodeType : 9;
                        if (n = n || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return n;
                        if (!s && ((t ? t.ownerDocument || t : x) !== p && h(t), t = t || p, v)) {
                            if (11 !== T && (u = Q.exec(e)))
                                if (a = u[1]) { if (9 === T) { if (!(c = t.getElementById(a))) return n; if (c.id === a) return n.push(c), n } else if (y && (c = y.getElementById(a)) && w(t, c) && c.id === a) return n.push(c), n } else { if (u[2]) return $.apply(n, t.getElementsByTagName(e)), n; if ((a = u[3]) && i.getElementsByClassName && t.getElementsByClassName) return $.apply(n, t.getElementsByClassName(a)), n }
                            if (i.qsa && !k[e + " "] && (!m || !m.test(e))) {
                                if (1 !== T) y = t, g = e;
                                else if ("object" !== t.nodeName.toLowerCase()) {
                                    for ((d = t.getAttribute("id")) ? d = d.replace(te, ie) : t.setAttribute("id", d = b), o = (f = r(e)).length; o--;) f[o] = "#" + d + " " + ge(f[o]);
                                    g = f.join(","), y = J.test(e) && ve(t.parentNode) || t
                                }
                                if (g) try { return $.apply(n, y.querySelectorAll(g)), n } catch (e) {} finally { d === b && t.removeAttribute("id") }
                            }
                        }
                        return l(e.replace(R, "$1"), t, n, s)
                    }

                    function re() { var e = []; return function t(i, s) { return e.push(i + " ") > n.cacheLength && delete t[e.shift()], t[i + " "] = s } }

                    function oe(e) { return e[b] = !0, e }

                    function le(e) { var t = p.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

                    function ce(e, t) { for (var i = e.split("|"), s = i.length; s--;) n.attrHandle[i[s]] = t }

                    function de(e, t) {
                        var i = t && e,
                            n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                        if (n) return n;
                        if (i)
                            for (; i = i.nextSibling;)
                                if (i === t) return -1;
                        return e ? 1 : -1
                    }

                    function ue(e) { return function(t) { return "input" === t.nodeName.toLowerCase() && t.type === e } }

                    function he(e) { return function(t) { var i = t.nodeName.toLowerCase(); return ("input" === i || "button" === i) && t.type === e } }

                    function pe(e) { return function(t) { return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e } }

                    function fe(e) { return oe(function(t) { return t = +t, oe(function(i, n) { for (var s, a = e([], i.length, t), r = a.length; r--;) i[s = a[r]] && (i[s] = !(n[s] = i[s])) }) }) }

                    function ve(e) { return e && void 0 !== e.getElementsByTagName && e }
                    for (t in i = ae.support = {}, a = ae.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, h = ae.setDocument = function(e) {
                            var t, s, r = e ? e.ownerDocument || e : x;
                            return r !== p && 9 === r.nodeType && r.documentElement ? (f = (p = r).documentElement, v = !a(p), x !== p && (s = p.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", ne, !1) : s.attachEvent && s.attachEvent("onunload", ne)), i.attributes = le(function(e) { return e.className = "i", !e.getAttribute("className") }), i.getElementsByTagName = le(function(e) { return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length }), i.getElementsByClassName = K.test(p.getElementsByClassName), i.getById = le(function(e) { return f.appendChild(e).id = b, !p.getElementsByName || !p.getElementsByName(b).length }), i.getById ? (n.filter.ID = function(e) { var t = e.replace(Z, ee); return function(e) { return e.getAttribute("id") === t } }, n.find.ID = function(e, t) { if (void 0 !== t.getElementById && v) { var i = t.getElementById(e); return i ? [i] : [] } }) : (n.filter.ID = function(e) { var t = e.replace(Z, ee); return function(e) { var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id"); return i && i.value === t } }, n.find.ID = function(e, t) {
                                if (void 0 !== t.getElementById && v) {
                                    var i, n, s, a = t.getElementById(e);
                                    if (a) {
                                        if ((i = a.getAttributeNode("id")) && i.value === e) return [a];
                                        for (s = t.getElementsByName(e), n = 0; a = s[n++];)
                                            if ((i = a.getAttributeNode("id")) && i.value === e) return [a]
                                    }
                                    return []
                                }
                            }), n.find.TAG = i.getElementsByTagName ? function(e, t) { return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                                var i, n = [],
                                    s = 0,
                                    a = t.getElementsByTagName(e);
                                if ("*" === e) { for (; i = a[s++];) 1 === i.nodeType && n.push(i); return n }
                                return a
                            }, n.find.CLASS = i.getElementsByClassName && function(e, t) { if (void 0 !== t.getElementsByClassName && v) return t.getElementsByClassName(e) }, g = [], m = [], (i.qsa = K.test(p.querySelectorAll)) && (le(function(e) { f.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + O + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]") }), le(function(e) {
                                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var t = p.createElement("input");
                                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + O + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                            })), (i.matchesSelector = K.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && le(function(e) { i.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), g.push("!=", q) }), m = m.length && new RegExp(m.join("|")), g = g.length && new RegExp(g.join("|")), t = K.test(f.compareDocumentPosition), w = t || K.test(f.contains) ? function(e, t) {
                                var i = 9 === e.nodeType ? e.documentElement : e,
                                    n = t && t.parentNode;
                                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                            } : function(e, t) {
                                if (t)
                                    for (; t = t.parentNode;)
                                        if (t === e) return !0;
                                return !1
                            }, M = t ? function(e, t) { if (e === t) return u = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e === p || e.ownerDocument === x && w(x, e) ? -1 : t === p || t.ownerDocument === x && w(x, t) ? 1 : d ? N(d, e) - N(d, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                                if (e === t) return u = !0, 0;
                                var i, n = 0,
                                    s = e.parentNode,
                                    a = t.parentNode,
                                    r = [e],
                                    o = [t];
                                if (!s || !a) return e === p ? -1 : t === p ? 1 : s ? -1 : a ? 1 : d ? N(d, e) - N(d, t) : 0;
                                if (s === a) return de(e, t);
                                for (i = e; i = i.parentNode;) r.unshift(i);
                                for (i = t; i = i.parentNode;) o.unshift(i);
                                for (; r[n] === o[n];) n++;
                                return n ? de(r[n], o[n]) : r[n] === x ? -1 : o[n] === x ? 1 : 0
                            }, p) : p
                        }, ae.matches = function(e, t) { return ae(e, null, null, t) }, ae.matchesSelector = function(e, t) {
                            if ((e.ownerDocument || e) !== p && h(e), t = t.replace(G, "='$1']"), i.matchesSelector && v && !k[t + " "] && (!g || !g.test(t)) && (!m || !m.test(t))) try { var n = y.call(e, t); if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) {}
                            return ae(t, p, null, [e]).length > 0
                        }, ae.contains = function(e, t) { return (e.ownerDocument || e) !== p && h(e), w(e, t) }, ae.attr = function(e, t) {
                            (e.ownerDocument || e) !== p && h(e);
                            var s = n.attrHandle[t.toLowerCase()],
                                a = s && P.call(n.attrHandle, t.toLowerCase()) ? s(e, t, !v) : void 0;
                            return void 0 !== a ? a : i.attributes || !v ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
                        }, ae.escape = function(e) { return (e + "").replace(te, ie) }, ae.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, ae.uniqueSort = function(e) {
                            var t, n = [],
                                s = 0,
                                a = 0;
                            if (u = !i.detectDuplicates, d = !i.sortStable && e.slice(0), e.sort(M), u) { for (; t = e[a++];) t === e[a] && (s = n.push(a)); for (; s--;) e.splice(n[s], 1) }
                            return d = null, e
                        }, s = ae.getText = function(e) {
                            var t, i = "",
                                n = 0,
                                a = e.nodeType;
                            if (a) { if (1 === a || 9 === a || 11 === a) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) i += s(e) } else if (3 === a || 4 === a) return e.nodeValue } else
                                for (; t = e[n++];) i += s(t);
                            return i
                        }, (n = ae.selectors = {
                            cacheLength: 50,
                            createPseudo: oe,
                            match: W,
                            attrHandle: {},
                            find: {},
                            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                            preFilter: { ATTR: function(e) { return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e }, PSEUDO: function(e) { var t, i = !e[6] && e[2]; return W.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && Y.test(i) && (t = r(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3)) } },
                            filter: {
                                TAG: function(e) { var t = e.replace(Z, ee).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                                CLASS: function(e) { var t = C[e + " "]; return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && C(e, function(e) { return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "") }) },
                                ATTR: function(e, t, i) { return function(n) { var s = ae.attr(n, e); return null == s ? "!=" === t : !t || (s += "", "=" === t ? s === i : "!=" === t ? s !== i : "^=" === t ? i && 0 === s.indexOf(i) : "*=" === t ? i && s.indexOf(i) > -1 : "$=" === t ? i && s.slice(-i.length) === i : "~=" === t ? (" " + s.replace(B, " ") + " ").indexOf(i) > -1 : "|=" === t && (s === i || s.slice(0, i.length + 1) === i + "-")) } },
                                CHILD: function(e, t, i, n, s) {
                                    var a = "nth" !== e.slice(0, 3),
                                        r = "last" !== e.slice(-4),
                                        o = "of-type" === t;
                                    return 1 === n && 0 === s ? function(e) { return !!e.parentNode } : function(t, i, l) {
                                        var c, d, u, h, p, f, v = a !== r ? "nextSibling" : "previousSibling",
                                            m = t.parentNode,
                                            g = o && t.nodeName.toLowerCase(),
                                            y = !l && !o,
                                            w = !1;
                                        if (m) {
                                            if (a) {
                                                for (; v;) {
                                                    for (h = t; h = h[v];)
                                                        if (o ? h.nodeName.toLowerCase() === g : 1 === h.nodeType) return !1;
                                                    f = v = "only" === e && !f && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (f = [r ? m.firstChild : m.lastChild], r && y) {
                                                for (w = (p = (c = (d = (u = (h = m)[b] || (h[b] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] || [])[0] === T && c[1]) && c[2], h = p && m.childNodes[p]; h = ++p && h && h[v] || (w = p = 0) || f.pop();)
                                                    if (1 === h.nodeType && ++w && h === t) { d[e] = [T, p, w]; break }
                                            } else if (y && (w = p = (c = (d = (u = (h = t)[b] || (h[b] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] || [])[0] === T && c[1]), !1 === w)
                                                for (;
                                                    (h = ++p && h && h[v] || (w = p = 0) || f.pop()) && ((o ? h.nodeName.toLowerCase() !== g : 1 !== h.nodeType) || !++w || (y && ((d = (u = h[b] || (h[b] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] = [T, w]), h !== t)););
                                            return (w -= s) === n || w % n == 0 && w / n >= 0
                                        }
                                    }
                                },
                                PSEUDO: function(e, t) { var i, s = n.pseudos[e] || n.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e); return s[b] ? s(t) : s.length > 1 ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, i) { for (var n, a = s(e, t), r = a.length; r--;) e[n = N(e, a[r])] = !(i[n] = a[r]) }) : function(e) { return s(e, 0, i) }) : s }
                            },
                            pseudos: {
                                not: oe(function(e) {
                                    var t = [],
                                        i = [],
                                        n = o(e.replace(R, "$1"));
                                    return n[b] ? oe(function(e, t, i, s) { for (var a, r = n(e, null, s, []), o = e.length; o--;)(a = r[o]) && (e[o] = !(t[o] = a)) }) : function(e, s, a) { return t[0] = e, n(t, null, a, i), t[0] = null, !i.pop() }
                                }),
                                has: oe(function(e) { return function(t) { return ae(e, t).length > 0 } }),
                                contains: oe(function(e) {
                                    return e = e.replace(Z, ee),
                                        function(t) { return (t.textContent || t.innerText || s(t)).indexOf(e) > -1 }
                                }),
                                lang: oe(function(e) {
                                    return V.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                                        function(t) {
                                            var i;
                                            do { if (i = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType);
                                            return !1
                                        }
                                }),
                                target: function(t) { var i = e.location && e.location.hash; return i && i.slice(1) === t.id },
                                root: function(e) { return e === f },
                                focus: function(e) { return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                                enabled: pe(!1),
                                disabled: pe(!0),
                                checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                                selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                                empty: function(e) {
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        if (e.nodeType < 6) return !1;
                                    return !0
                                },
                                parent: function(e) { return !n.pseudos.empty(e) },
                                header: function(e) { return U.test(e.nodeName) },
                                input: function(e) { return _.test(e.nodeName) },
                                button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                                text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                                first: fe(function() { return [0] }),
                                last: fe(function(e, t) { return [t - 1] }),
                                eq: fe(function(e, t, i) { return [i < 0 ? i + t : i] }),
                                even: fe(function(e, t) { for (var i = 0; i < t; i += 2) e.push(i); return e }),
                                odd: fe(function(e, t) { for (var i = 1; i < t; i += 2) e.push(i); return e }),
                                lt: fe(function(e, t, i) { for (var n = i < 0 ? i + t : i; --n >= 0;) e.push(n); return e }),
                                gt: fe(function(e, t, i) { for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n); return e })
                            }
                        }).pseudos.nth = n.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) n.pseudos[t] = ue(t);
                    for (t in { submit: !0, reset: !0 }) n.pseudos[t] = he(t);

                    function me() {}

                    function ge(e) { for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value; return n }

                    function ye(e, t, i) {
                        var n = t.dir,
                            s = t.next,
                            a = s || n,
                            r = i && "parentNode" === a,
                            o = E++;
                        return t.first ? function(t, i, s) {
                            for (; t = t[n];)
                                if (1 === t.nodeType || r) return e(t, i, s);
                            return !1
                        } : function(t, i, l) {
                            var c, d, u, h = [T, o];
                            if (l) {
                                for (; t = t[n];)
                                    if ((1 === t.nodeType || r) && e(t, i, l)) return !0
                            } else
                                for (; t = t[n];)
                                    if (1 === t.nodeType || r)
                                        if (d = (u = t[b] || (t[b] = {}))[t.uniqueID] || (u[t.uniqueID] = {}), s && s === t.nodeName.toLowerCase()) t = t[n] || t;
                                        else { if ((c = d[a]) && c[0] === T && c[1] === o) return h[2] = c[2]; if (d[a] = h, h[2] = e(t, i, l)) return !0 } return !1
                        }
                    }

                    function we(e) {
                        return e.length > 1 ? function(t, i, n) {
                            for (var s = e.length; s--;)
                                if (!e[s](t, i, n)) return !1;
                            return !0
                        } : e[0]
                    }

                    function be(e, t, i, n, s) { for (var a, r = [], o = 0, l = e.length, c = null != t; o < l; o++)(a = e[o]) && (i && !i(a, n, s) || (r.push(a), c && t.push(o))); return r }

                    function xe(e, t, i, n, s, a) {
                        return n && !n[b] && (n = xe(n)), s && !s[b] && (s = xe(s, a)), oe(function(a, r, o, l) {
                            var c, d, u, h = [],
                                p = [],
                                f = r.length,
                                v = a || function(e, t, i) { for (var n = 0, s = t.length; n < s; n++) ae(e, t[n], i); return i }(t || "*", o.nodeType ? [o] : o, []),
                                m = !e || !a && t ? v : be(v, h, e, o, l),
                                g = i ? s || (a ? e : f || n) ? [] : r : m;
                            if (i && i(m, g, o, l), n)
                                for (c = be(g, p), n(c, [], o, l), d = c.length; d--;)(u = c[d]) && (g[p[d]] = !(m[p[d]] = u));
                            if (a) {
                                if (s || e) {
                                    if (s) {
                                        for (c = [], d = g.length; d--;)(u = g[d]) && c.push(m[d] = u);
                                        s(null, g = [], c, l)
                                    }
                                    for (d = g.length; d--;)(u = g[d]) && (c = s ? N(a, u) : h[d]) > -1 && (a[c] = !(r[c] = u))
                                }
                            } else g = be(g === r ? g.splice(f, g.length) : g), s ? s(null, r, g, l) : $.apply(r, g)
                        })
                    }

                    function Te(e) {
                        for (var t, i, s, a = e.length, r = n.relative[e[0].type], o = r || n.relative[" "], l = r ? 1 : 0, d = ye(function(e) { return e === t }, o, !0), u = ye(function(e) { return N(t, e) > -1 }, o, !0), h = [function(e, i, n) { var s = !r && (n || i !== c) || ((t = i).nodeType ? d(e, i, n) : u(e, i, n)); return t = null, s }]; l < a; l++)
                            if (i = n.relative[e[l].type]) h = [ye(we(h), i)];
                            else {
                                if ((i = n.filter[e[l].type].apply(null, e[l].matches))[b]) { for (s = ++l; s < a && !n.relative[e[s].type]; s++); return xe(l > 1 && we(h), l > 1 && ge(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(R, "$1"), i, l < s && Te(e.slice(l, s)), s < a && Te(e = e.slice(s)), s < a && ge(e)) }
                                h.push(i)
                            }
                        return we(h)
                    }
                    return me.prototype = n.filters = n.pseudos, n.setFilters = new me, r = ae.tokenize = function(e, t) { var i, s, a, r, o, l, c, d = S[e + " "]; if (d) return t ? 0 : d.slice(0); for (o = e, l = [], c = n.preFilter; o;) { for (r in i && !(s = X.exec(o)) || (s && (o = o.slice(s[0].length) || o), l.push(a = [])), i = !1, (s = F.exec(o)) && (i = s.shift(), a.push({ value: i, type: s[0].replace(R, " ") }), o = o.slice(i.length)), n.filter) !(s = W[r].exec(o)) || c[r] && !(s = c[r](s)) || (i = s.shift(), a.push({ value: i, type: r, matches: s }), o = o.slice(i.length)); if (!i) break } return t ? o.length : o ? ae.error(e) : S(e, l).slice(0) }, o = ae.compile = function(e, t) {
                        var i, s = [],
                            a = [],
                            o = k[e + " "];
                        if (!o) {
                            for (t || (t = r(e)), i = t.length; i--;)(o = Te(t[i]))[b] ? s.push(o) : a.push(o);
                            (o = k(e, function(e, t) {
                                var i = t.length > 0,
                                    s = e.length > 0,
                                    a = function(a, r, o, l, d) {
                                        var u, f, m, g = 0,
                                            y = "0",
                                            w = a && [],
                                            b = [],
                                            x = c,
                                            E = a || s && n.find.TAG("*", d),
                                            C = T += null == x ? 1 : Math.random() || .1,
                                            S = E.length;
                                        for (d && (c = r === p || r || d); y !== S && null != (u = E[y]); y++) {
                                            if (s && u) {
                                                for (f = 0, r || u.ownerDocument === p || (h(u), o = !v); m = e[f++];)
                                                    if (m(u, r || p, o)) { l.push(u); break }
                                                d && (T = C)
                                            }
                                            i && ((u = !m && u) && g--, a && w.push(u))
                                        }
                                        if (g += y, i && y !== g) {
                                            for (f = 0; m = t[f++];) m(w, b, r, o);
                                            if (a) {
                                                if (g > 0)
                                                    for (; y--;) w[y] || b[y] || (b[y] = A.call(l));
                                                b = be(b)
                                            }
                                            $.apply(l, b), d && !a && b.length > 0 && g + t.length > 1 && ae.uniqueSort(l)
                                        }
                                        return d && (T = C, c = x), w
                                    };
                                return i ? oe(a) : a
                            }(a, s))).selector = e
                        }
                        return o
                    }, l = ae.select = function(e, t, i, s) {
                        var a, l, c, d, u, h = "function" == typeof e && e,
                            p = !s && r(e = h.selector || e);
                        if (i = i || [], 1 === p.length) {
                            if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && v && n.relative[l[1].type]) {
                                if (!(t = (n.find.ID(c.matches[0].replace(Z, ee), t) || [])[0])) return i;
                                h && (t = t.parentNode), e = e.slice(l.shift().value.length)
                            }
                            for (a = W.needsContext.test(e) ? 0 : l.length; a-- && (c = l[a], !n.relative[d = c.type]);)
                                if ((u = n.find[d]) && (s = u(c.matches[0].replace(Z, ee), J.test(l[0].type) && ve(t.parentNode) || t))) { if (l.splice(a, 1), !(e = s.length && ge(l))) return $.apply(i, s), i; break }
                        }
                        return (h || o(e, p))(s, t, !v, i, !t || J.test(e) && ve(t.parentNode) || t), i
                    }, i.sortStable = b.split("").sort(M).join("") === b, i.detectDuplicates = !!u, h(), i.sortDetached = le(function(e) { return 1 & e.compareDocumentPosition(p.createElement("fieldset")) }), le(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || ce("type|href|height|width", function(e, t, i) { if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), i.attributes && le(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || ce("value", function(e, t, i) { if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), le(function(e) { return null == e.getAttribute("disabled") }) || ce(I, function(e, t, i) { var n; if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null }), ae
                }(n);
            C.find = M, C.expr = M.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = M.uniqueSort, C.text = M.getText, C.isXMLDoc = M.isXML, C.contains = M.contains, C.escapeSelector = M.escape;
            var P = function(e, t, i) {
                    for (var n = [], s = void 0 !== i;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (s && C(e).is(i)) break;
                            n.push(e)
                        }
                    return n
                },
                D = function(e, t) { for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e); return i },
                A = C.expr.match.needsContext;

            function L(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }
            var $ = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function z(e, t, i) { return w(t) ? C.grep(e, function(e, n) { return !!t.call(e, n, e) !== i }) : t.nodeType ? C.grep(e, function(e) { return e === t !== i }) : "string" != typeof t ? C.grep(e, function(e) { return h.call(t, e) > -1 !== i }) : C.filter(t, e, i) }
            C.filter = function(e, t, i) { var n = t[0]; return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? C.find.matchesSelector(n, e) ? [n] : [] : C.find.matches(e, C.grep(t, function(e) { return 1 === e.nodeType })) }, C.fn.extend({
                find: function(e) {
                    var t, i, n = this.length,
                        s = this;
                    if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
                        for (t = 0; t < n; t++)
                            if (C.contains(s[t], this)) return !0
                    }));
                    for (i = this.pushStack([]), t = 0; t < n; t++) C.find(e, s[t], i);
                    return n > 1 ? C.uniqueSort(i) : i
                },
                filter: function(e) { return this.pushStack(z(this, e || [], !1)) },
                not: function(e) { return this.pushStack(z(this, e || [], !0)) },
                is: function(e) { return !!z(this, "string" == typeof e && A.test(e) ? C(e) : e || [], !1).length }
            });
            var N, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (C.fn.init = function(e, t, i) {
                var n, s;
                if (!e) return this;
                if (i = i || N, "string" == typeof e) {
                    if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : I.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : o, !0)), $.test(n[1]) && C.isPlainObject(t))
                            for (n in t) w(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    return (s = o.getElementById(n[2])) && (this[0] = s, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : w(e) ? void 0 !== i.ready ? i.ready(e) : e(C) : C.makeArray(e, this)
            }).prototype = C.fn, N = C(o);
            var O = /^(?:parents|prev(?:Until|All))/,
                H = { children: !0, contents: !0, next: !0, prev: !0 };

            function j(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }
            C.fn.extend({
                has: function(e) {
                    var t = C(e, this),
                        i = t.length;
                    return this.filter(function() {
                        for (var e = 0; e < i; e++)
                            if (C.contains(this, t[e])) return !0
                    })
                },
                closest: function(e, t) {
                    var i, n = 0,
                        s = this.length,
                        a = [],
                        r = "string" != typeof e && C(e);
                    if (!A.test(e))
                        for (; n < s; n++)
                            for (i = this[n]; i && i !== t; i = i.parentNode)
                                if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && C.find.matchesSelector(i, e))) { a.push(i); break }
                    return this.pushStack(a.length > 1 ? C.uniqueSort(a) : a)
                },
                index: function(e) { return e ? "string" == typeof e ? h.call(C(e), this[0]) : h.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
                add: function(e, t) { return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t)))) },
                addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
            }), C.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return P(e, "parentNode") }, parentsUntil: function(e, t, i) { return P(e, "parentNode", i) }, next: function(e) { return j(e, "nextSibling") }, prev: function(e) { return j(e, "previousSibling") }, nextAll: function(e) { return P(e, "nextSibling") }, prevAll: function(e) { return P(e, "previousSibling") }, nextUntil: function(e, t, i) { return P(e, "nextSibling", i) }, prevUntil: function(e, t, i) { return P(e, "previousSibling", i) }, siblings: function(e) { return D((e.parentNode || {}).firstChild, e) }, children: function(e) { return D(e.firstChild) }, contents: function(e) { return L(e, "iframe") ? e.contentDocument : (L(e, "template") && (e = e.content || e), C.merge([], e.childNodes)) } }, function(e, t) { C.fn[e] = function(i, n) { var s = C.map(this, t, i); return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (s = C.filter(n, s)), this.length > 1 && (H[e] || C.uniqueSort(s), O.test(e) && s.reverse()), this.pushStack(s) } });
            var q = /[^\x20\t\r\n\f]+/g;

            function B(e) { return e }

            function R(e) { throw e }

            function X(e, t, i, n) { var s; try { e && w(s = e.promise) ? s.call(e).done(t).fail(i) : e && w(s = e.then) ? s.call(e, t, i) : t.apply(void 0, [e].slice(n)) } catch (e) { i.apply(void 0, [e]) } }
            C.Callbacks = function(e) {
                e = "string" == typeof e ? function(e) { var t = {}; return C.each(e.match(q) || [], function(e, i) { t[i] = !0 }), t }(e) : C.extend({}, e);
                var t, i, n, s, a = [],
                    r = [],
                    o = -1,
                    l = function() {
                        for (s = s || e.once, n = t = !0; r.length; o = -1)
                            for (i = r.shift(); ++o < a.length;) !1 === a[o].apply(i[0], i[1]) && e.stopOnFalse && (o = a.length, i = !1);
                        e.memory || (i = !1), t = !1, s && (a = i ? [] : "")
                    },
                    c = {
                        add: function() { return a && (i && !t && (o = a.length - 1, r.push(i)), function t(i) { C.each(i, function(i, n) { w(n) ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== E(n) && t(n) }) }(arguments), i && !t && l()), this },
                        remove: function() {
                            return C.each(arguments, function(e, t) {
                                for (var i;
                                    (i = C.inArray(t, a, i)) > -1;) a.splice(i, 1), i <= o && o--
                            }), this
                        },
                        has: function(e) { return e ? C.inArray(e, a) > -1 : a.length > 0 },
                        empty: function() { return a && (a = []), this },
                        disable: function() { return s = r = [], a = i = "", this },
                        disabled: function() { return !a },
                        lock: function() { return s = r = [], i || t || (a = i = ""), this },
                        locked: function() { return !!s },
                        fireWith: function(e, i) { return s || (i = [e, (i = i || []).slice ? i.slice() : i], r.push(i), t || l()), this },
                        fire: function() { return c.fireWith(this, arguments), this },
                        fired: function() { return !!n }
                    };
                return c
            }, C.extend({
                Deferred: function(e) {
                    var t = [
                            ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                            ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                        ],
                        i = "pending",
                        s = {
                            state: function() { return i },
                            always: function() { return r.done(arguments).fail(arguments), this },
                            catch: function(e) { return s.then(null, e) },
                            pipe: function() {
                                var e = arguments;
                                return C.Deferred(function(i) {
                                    C.each(t, function(t, n) {
                                        var s = w(e[n[4]]) && e[n[4]];
                                        r[n[1]](function() {
                                            var e = s && s.apply(this, arguments);
                                            e && w(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[n[0] + "With"](this, s ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            then: function(e, i, s) {
                                var r = 0;

                                function o(e, t, i, s) {
                                    return function() {
                                        var l = this,
                                            c = arguments,
                                            d = function() {
                                                var n, d;
                                                if (!(e < r)) {
                                                    if ((n = i.apply(l, c)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                    d = n && ("object" === a(n) || "function" == typeof n) && n.then, w(d) ? s ? d.call(n, o(r, t, B, s), o(r, t, R, s)) : (r++, d.call(n, o(r, t, B, s), o(r, t, R, s), o(r, t, B, t.notifyWith))) : (i !== B && (l = void 0, c = [n]), (s || t.resolveWith)(l, c))
                                                }
                                            },
                                            u = s ? d : function() { try { d() } catch (n) { C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= r && (i !== R && (l = void 0, c = [n]), t.rejectWith(l, c)) } };
                                        e ? u() : (C.Deferred.getStackHook && (u.stackTrace = C.Deferred.getStackHook()), n.setTimeout(u))
                                    }
                                }
                                return C.Deferred(function(n) { t[0][3].add(o(0, n, w(s) ? s : B, n.notifyWith)), t[1][3].add(o(0, n, w(e) ? e : B)), t[2][3].add(o(0, n, w(i) ? i : R)) }).promise()
                            },
                            promise: function(e) { return null != e ? C.extend(e, s) : s }
                        },
                        r = {};
                    return C.each(t, function(e, n) {
                        var a = n[2],
                            o = n[5];
                        s[n[1]] = a.add, o && a.add(function() { i = o }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), r[n[0]] = function() { return r[n[0] + "With"](this === r ? void 0 : this, arguments), this }, r[n[0] + "With"] = a.fireWith
                    }), s.promise(r), e && e.call(r, r), r
                },
                when: function(e) {
                    var t = arguments.length,
                        i = t,
                        n = Array(i),
                        s = c.call(arguments),
                        a = C.Deferred(),
                        r = function(e) { return function(i) { n[e] = this, s[e] = arguments.length > 1 ? c.call(arguments) : i, --t || a.resolveWith(n, s) } };
                    if (t <= 1 && (X(e, a.done(r(i)).resolve, a.reject, !t), "pending" === a.state() || w(s[i] && s[i].then))) return a.then();
                    for (; i--;) X(s[i], r(i), a.reject);
                    return a.promise()
                }
            });
            var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            C.Deferred.exceptionHook = function(e, t) { n.console && n.console.warn && e && F.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, C.readyException = function(e) { n.setTimeout(function() { throw e }) };
            var G = C.Deferred();

            function Y() { o.removeEventListener("DOMContentLoaded", Y), n.removeEventListener("load", Y), C.ready() }
            C.fn.ready = function(e) { return G.then(e).catch(function(e) { C.readyException(e) }), this }, C.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || G.resolveWith(o, [C]))
                }
            }), C.ready.then = G.then, "complete" === o.readyState || "loading" !== o.readyState && !o.documentElement.doScroll ? n.setTimeout(C.ready) : (o.addEventListener("DOMContentLoaded", Y), n.addEventListener("load", Y));
            var V = function e(t, i, n, s, a, r, o) {
                    var l = 0,
                        c = t.length,
                        d = null == n;
                    if ("object" === E(n))
                        for (l in a = !0, n) e(t, i, l, n[l], !0, r, o);
                    else if (void 0 !== s && (a = !0, w(s) || (o = !0), d && (o ? (i.call(t, s), i = null) : (d = i, i = function(e, t, i) { return d.call(C(e), i) })), i))
                        for (; l < c; l++) i(t[l], n, o ? s : s.call(t[l], l, i(t[l], n)));
                    return a ? t : d ? i.call(t) : c ? i(t[0], n) : r
                },
                W = /^-ms-/,
                _ = /-([a-z])/g;

            function U(e, t) { return t.toUpperCase() }

            function K(e) { return e.replace(W, "ms-").replace(_, U) }
            var Q = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

            function J() { this.expando = C.expando + J.uid++ }
            J.uid = 1, J.prototype = {
                cache: function(e) { var t = e[this.expando]; return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
                set: function(e, t, i) {
                    var n, s = this.cache(e);
                    if ("string" == typeof t) s[K(t)] = i;
                    else
                        for (n in t) s[K(n)] = t[n];
                    return s
                },
                get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)] },
                access: function(e, t, i) { return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t) },
                remove: function(e, t) { var i, n = e[this.expando]; if (void 0 !== n) { if (void 0 !== t) { i = (t = Array.isArray(t) ? t.map(K) : (t = K(t)) in n ? [t] : t.match(q) || []).length; for (; i--;) delete n[t[i]] }(void 0 === t || C.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } },
                hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !C.isEmptyObject(t) }
            };
            var Z = new J,
                ee = new J,
                te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                ie = /[A-Z]/g;

            function ne(e, t, i) {
                var n;
                if (void 0 === i && 1 === e.nodeType)
                    if (n = "data-" + t.replace(ie, "-$&").toLowerCase(), "string" == typeof(i = e.getAttribute(n))) {
                        try { i = function(e) { return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : te.test(e) ? JSON.parse(e) : e) }(i) } catch (e) {}
                        ee.set(e, t, i)
                    } else i = void 0;
                return i
            }
            C.extend({ hasData: function(e) { return ee.hasData(e) || Z.hasData(e) }, data: function(e, t, i) { return ee.access(e, t, i) }, removeData: function(e, t) { ee.remove(e, t) }, _data: function(e, t, i) { return Z.access(e, t, i) }, _removeData: function(e, t) { Z.remove(e, t) } }), C.fn.extend({
                data: function(e, t) {
                    var i, n, s, r = this[0],
                        o = r && r.attributes;
                    if (void 0 === e) {
                        if (this.length && (s = ee.get(r), 1 === r.nodeType && !Z.get(r, "hasDataAttrs"))) {
                            for (i = o.length; i--;) o[i] && 0 === (n = o[i].name).indexOf("data-") && (n = K(n.slice(5)), ne(r, n, s[n]));
                            Z.set(r, "hasDataAttrs", !0)
                        }
                        return s
                    }
                    return "object" === a(e) ? this.each(function() { ee.set(this, e) }) : V(this, function(t) {
                        var i;
                        if (r && void 0 === t) return void 0 !== (i = ee.get(r, e)) ? i : void 0 !== (i = ne(r, e)) ? i : void 0;
                        this.each(function() { ee.set(this, e, t) })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) { return this.each(function() { ee.remove(this, e) }) }
            }), C.extend({
                queue: function(e, t, i) { var n; if (e) return t = (t || "fx") + "queue", n = Z.get(e, t), i && (!n || Array.isArray(i) ? n = Z.access(e, t, C.makeArray(i)) : n.push(i)), n || [] },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var i = C.queue(e, t),
                        n = i.length,
                        s = i.shift(),
                        a = C._queueHooks(e, t);
                    "inprogress" === s && (s = i.shift(), n--), s && ("fx" === t && i.unshift("inprogress"), delete a.stop, s.call(e, function() { C.dequeue(e, t) }, a)), !n && a && a.empty.fire()
                },
                _queueHooks: function(e, t) { var i = t + "queueHooks"; return Z.get(e, i) || Z.access(e, i, { empty: C.Callbacks("once memory").add(function() { Z.remove(e, [t + "queue", i]) }) }) }
            }), C.fn.extend({
                queue: function(e, t) {
                    var i = 2;
                    return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? C.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var i = C.queue(this, e, t);
                        C._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && C.dequeue(this, e)
                    })
                },
                dequeue: function(e) { return this.each(function() { C.dequeue(this, e) }) },
                clearQueue: function(e) { return this.queue(e || "fx", []) },
                promise: function(e, t) {
                    var i, n = 1,
                        s = C.Deferred(),
                        a = this,
                        r = this.length,
                        o = function() {--n || s.resolveWith(a, [a]) };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(i = Z.get(a[r], e + "queueHooks")) && i.empty && (n++, i.empty.add(o));
                    return o(), s.promise(t)
                }
            });
            var se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                ae = new RegExp("^(?:([+-])=|)(" + se + ")([a-z%]*)$", "i"),
                re = ["Top", "Right", "Bottom", "Left"],
                oe = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && C.contains(e.ownerDocument, e) && "none" === C.css(e, "display") },
                le = function(e, t, i, n) { var s, a, r = {}; for (a in t) r[a] = e.style[a], e.style[a] = t[a]; for (a in s = i.apply(e, n || []), t) e.style[a] = r[a]; return s };

            function ce(e, t, i, n) {
                var s, a, r = 20,
                    o = n ? function() { return n.cur() } : function() { return C.css(e, t, "") },
                    l = o(),
                    c = i && i[3] || (C.cssNumber[t] ? "" : "px"),
                    d = (C.cssNumber[t] || "px" !== c && +l) && ae.exec(C.css(e, t));
                if (d && d[3] !== c) {
                    for (l /= 2, c = c || d[3], d = +l || 1; r--;) C.style(e, t, d + c), (1 - a) * (1 - (a = o() / l || .5)) <= 0 && (r = 0), d /= a;
                    d *= 2, C.style(e, t, d + c), i = i || []
                }
                return i && (d = +d || +l || 0, s = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = d, n.end = s)), s
            }
            var de = {};

            function ue(e) {
                var t, i = e.ownerDocument,
                    n = e.nodeName,
                    s = de[n];
                return s || (t = i.body.appendChild(i.createElement(n)), s = C.css(t, "display"), t.parentNode.removeChild(t), "none" === s && (s = "block"), de[n] = s, s)
            }

            function he(e, t) { for (var i, n, s = [], a = 0, r = e.length; a < r; a++)(n = e[a]).style && (i = n.style.display, t ? ("none" === i && (s[a] = Z.get(n, "display") || null, s[a] || (n.style.display = "")), "" === n.style.display && oe(n) && (s[a] = ue(n))) : "none" !== i && (s[a] = "none", Z.set(n, "display", i))); for (a = 0; a < r; a++) null != s[a] && (e[a].style.display = s[a]); return e }
            C.fn.extend({ show: function() { return he(this, !0) }, hide: function() { return he(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { oe(this) ? C(this).show() : C(this).hide() }) } });
            var pe = /^(?:checkbox|radio)$/i,
                fe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                ve = /^$|^module$|\/(?:java|ecma)script/i,
                me = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

            function ge(e, t) { var i; return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && L(e, t) ? C.merge([e], i) : i }

            function ye(e, t) { for (var i = 0, n = e.length; i < n; i++) Z.set(e[i], "globalEval", !t || Z.get(t[i], "globalEval")) }
            me.optgroup = me.option, me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td;
            var we, be, xe = /<|&#?\w+;/;

            function Te(e, t, i, n, s) {
                for (var a, r, o, l, c, d, u = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++)
                    if ((a = e[p]) || 0 === a)
                        if ("object" === E(a)) C.merge(h, a.nodeType ? [a] : a);
                        else if (xe.test(a)) {
                    for (r = r || u.appendChild(t.createElement("div")), o = (fe.exec(a) || ["", ""])[1].toLowerCase(), l = me[o] || me._default, r.innerHTML = l[1] + C.htmlPrefilter(a) + l[2], d = l[0]; d--;) r = r.lastChild;
                    C.merge(h, r.childNodes), (r = u.firstChild).textContent = ""
                } else h.push(t.createTextNode(a));
                for (u.textContent = "", p = 0; a = h[p++];)
                    if (n && C.inArray(a, n) > -1) s && s.push(a);
                    else if (c = C.contains(a.ownerDocument, a), r = ge(u.appendChild(a), "script"), c && ye(r), i)
                    for (d = 0; a = r[d++];) ve.test(a.type || "") && i.push(a);
                return u
            }
            we = o.createDocumentFragment().appendChild(o.createElement("div")), (be = o.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), we.appendChild(be), y.checkClone = we.cloneNode(!0).cloneNode(!0).lastChild.checked, we.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!we.cloneNode(!0).lastChild.defaultValue;
            var Ee = o.documentElement,
                Ce = /^key/,
                Se = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                ke = /^([^.]*)(?:\.(.+)|)/;

            function Me() { return !0 }

            function Pe() { return !1 }

            function De() { try { return o.activeElement } catch (e) {} }

            function Ae(e, t, i, n, s, r) {
                var o, l;
                if ("object" === a(t)) { for (l in "string" != typeof i && (n = n || i, i = void 0), t) Ae(e, l, i, n, t[l], r); return e }
                if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = Pe;
                else if (!s) return e;
                return 1 === r && (o = s, (s = function(e) { return C().off(e), o.apply(this, arguments) }).guid = o.guid || (o.guid = C.guid++)), e.each(function() { C.event.add(this, t, s, n, i) })
            }
            C.event = {
                global: {},
                add: function(e, t, i, n, s) {
                    var a, r, o, l, c, d, u, h, p, f, v, m = Z.get(e);
                    if (m)
                        for (i.handler && (i = (a = i).handler, s = a.selector), s && C.find.matchesSelector(Ee, s), i.guid || (i.guid = C.guid++), (l = m.events) || (l = m.events = {}), (r = m.handle) || (r = m.handle = function(t) { return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0 }), c = (t = (t || "").match(q) || [""]).length; c--;) p = v = (o = ke.exec(t[c]) || [])[1], f = (o[2] || "").split(".").sort(), p && (u = C.event.special[p] || {}, p = (s ? u.delegateType : u.bindType) || p, u = C.event.special[p] || {}, d = C.extend({ type: p, origType: v, data: n, handler: i, guid: i.guid, selector: s, needsContext: s && C.expr.match.needsContext.test(s), namespace: f.join(".") }, a), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, n, f, r) || e.addEventListener && e.addEventListener(p, r)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)), s ? h.splice(h.delegateCount++, 0, d) : h.push(d), C.event.global[p] = !0)
                },
                remove: function(e, t, i, n, s) {
                    var a, r, o, l, c, d, u, h, p, f, v, m = Z.hasData(e) && Z.get(e);
                    if (m && (l = m.events)) {
                        for (c = (t = (t || "").match(q) || [""]).length; c--;)
                            if (p = v = (o = ke.exec(t[c]) || [])[1], f = (o[2] || "").split(".").sort(), p) {
                                for (u = C.event.special[p] || {}, h = l[p = (n ? u.delegateType : u.bindType) || p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = a = h.length; a--;) d = h[a], !s && v !== d.origType || i && i.guid !== d.guid || o && !o.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (h.splice(a, 1), d.selector && h.delegateCount--, u.remove && u.remove.call(e, d));
                                r && !h.length && (u.teardown && !1 !== u.teardown.call(e, f, m.handle) || C.removeEvent(e, p, m.handle), delete l[p])
                            } else
                                for (p in l) C.event.remove(e, p + t[c], i, n, !0);
                        C.isEmptyObject(l) && Z.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, i, n, s, a, r, o = C.event.fix(e),
                        l = new Array(arguments.length),
                        c = (Z.get(this, "events") || {})[o.type] || [],
                        d = C.event.special[o.type] || {};
                    for (l[0] = o, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                    if (o.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, o)) {
                        for (r = C.event.handlers.call(this, o, c), t = 0;
                            (s = r[t++]) && !o.isPropagationStopped();)
                            for (o.currentTarget = s.elem, i = 0;
                                (a = s.handlers[i++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !o.rnamespace.test(a.namespace) || (o.handleObj = a, o.data = a.data, void 0 !== (n = ((C.event.special[a.origType] || {}).handle || a.handler).apply(s.elem, l)) && !1 === (o.result = n) && (o.preventDefault(), o.stopPropagation()));
                        return d.postDispatch && d.postDispatch.call(this, o), o.result
                    }
                },
                handlers: function(e, t) {
                    var i, n, s, a, r, o = [],
                        l = t.delegateCount,
                        c = e.target;
                    if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                for (a = [], r = {}, i = 0; i < l; i++) void 0 === r[s = (n = t[i]).selector + " "] && (r[s] = n.needsContext ? C(s, this).index(c) > -1 : C.find(s, this, null, [c]).length), r[s] && a.push(n);
                                a.length && o.push({ elem: c, handlers: a })
                            }
                    return c = this, l < t.length && o.push({ elem: c, handlers: t.slice(l) }), o
                },
                addProp: function(e, t) { Object.defineProperty(C.Event.prototype, e, { enumerable: !0, configurable: !0, get: w(t) ? function() { if (this.originalEvent) return t(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[e] }, set: function(t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) },
                fix: function(e) { return e[C.expando] ? e : new C.Event(e) },
                special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== De() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === De() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && L(this, "input")) return this.click(), !1 }, _default: function(e) { return L(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
            }, C.removeEvent = function(e, t, i) { e.removeEventListener && e.removeEventListener(t, i) }, C.Event = function(e, t) {
                if (!(this instanceof C.Event)) return new C.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Me : Pe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
            }, C.Event.prototype = {
                constructor: C.Event,
                isDefaultPrevented: Pe,
                isPropagationStopped: Pe,
                isImmediatePropagationStopped: Pe,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = Me, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = Me, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = Me, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, C.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Se.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, C.event.addProp), C.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) {
                C.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var i, n = e.relatedTarget,
                            s = e.handleObj;
                        return n && (n === this || C.contains(this, n)) || (e.type = s.origType, i = s.handler.apply(this, arguments), e.type = t), i
                    }
                }
            }), C.fn.extend({ on: function(e, t, i, n) { return Ae(this, e, t, i, n) }, one: function(e, t, i, n) { return Ae(this, e, t, i, n, 1) }, off: function(e, t, i) { var n, s; if (e && e.preventDefault && e.handleObj) return n = e.handleObj, C(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this; if ("object" === a(e)) { for (s in e) this.off(s, t, e[s]); return this } return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = Pe), this.each(function() { C.event.remove(this, e, i, t) }) } });
            var Le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                $e = /<script|<style|<link/i,
                ze = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Ie(e, t) { return L(e, "table") && L(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e }

            function Oe(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

            function He(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

            function je(e, t) {
                var i, n, s, a, r, o, l, c;
                if (1 === t.nodeType) {
                    if (Z.hasData(e) && (a = Z.access(e), r = Z.set(t, a), c = a.events))
                        for (s in delete r.handle, r.events = {}, c)
                            for (i = 0, n = c[s].length; i < n; i++) C.event.add(t, s, c[s][i]);
                    ee.hasData(e) && (o = ee.access(e), l = C.extend({}, o), ee.set(t, l))
                }
            }

            function qe(e, t, i, n) {
                t = d.apply([], t);
                var s, a, r, o, l, c, u = 0,
                    h = e.length,
                    p = h - 1,
                    f = t[0],
                    v = w(f);
                if (v || h > 1 && "string" == typeof f && !y.checkClone && ze.test(f)) return e.each(function(s) {
                    var a = e.eq(s);
                    v && (t[0] = f.call(this, s, a.html())), qe(a, t, i, n)
                });
                if (h && (a = (s = Te(t, e[0].ownerDocument, !1, e, n)).firstChild, 1 === s.childNodes.length && (s = a), a || n)) {
                    for (o = (r = C.map(ge(s, "script"), Oe)).length; u < h; u++) l = s, u !== p && (l = C.clone(l, !0, !0), o && C.merge(r, ge(l, "script"))), i.call(e[u], l, u);
                    if (o)
                        for (c = r[r.length - 1].ownerDocument, C.map(r, He), u = 0; u < o; u++) l = r[u], ve.test(l.type || "") && !Z.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && C._evalUrl(l.src) : T(l.textContent.replace(Ne, ""), c, l))
                }
                return e
            }

            function Be(e, t, i) { for (var n, s = t ? C.filter(t, e) : e, a = 0; null != (n = s[a]); a++) i || 1 !== n.nodeType || C.cleanData(ge(n)), n.parentNode && (i && C.contains(n.ownerDocument, n) && ye(ge(n, "script")), n.parentNode.removeChild(n)); return e }
            C.extend({
                htmlPrefilter: function(e) { return e.replace(Le, "<$1></$2>") },
                clone: function(e, t, i) {
                    var n, s, a, r, o, l, c, d = e.cloneNode(!0),
                        u = C.contains(e.ownerDocument, e);
                    if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                        for (r = ge(d), n = 0, s = (a = ge(e)).length; n < s; n++) o = a[n], l = r[n], void 0, "input" === (c = l.nodeName.toLowerCase()) && pe.test(o.type) ? l.checked = o.checked : "input" !== c && "textarea" !== c || (l.defaultValue = o.defaultValue);
                    if (t)
                        if (i)
                            for (a = a || ge(e), r = r || ge(d), n = 0, s = a.length; n < s; n++) je(a[n], r[n]);
                        else je(e, d);
                    return (r = ge(d, "script")).length > 0 && ye(r, !u && ge(e, "script")), d
                },
                cleanData: function(e) {
                    for (var t, i, n, s = C.event.special, a = 0; void 0 !== (i = e[a]); a++)
                        if (Q(i)) {
                            if (t = i[Z.expando]) {
                                if (t.events)
                                    for (n in t.events) s[n] ? C.event.remove(i, n) : C.removeEvent(i, n, t.handle);
                                i[Z.expando] = void 0
                            }
                            i[ee.expando] && (i[ee.expando] = void 0)
                        }
                }
            }), C.fn.extend({
                detach: function(e) { return Be(this, e, !0) },
                remove: function(e) { return Be(this, e) },
                text: function(e) { return V(this, function(e) { return void 0 === e ? C.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) },
                append: function() { return qe(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ie(this, e).appendChild(e) }) },
                prepend: function() {
                    return qe(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Ie(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() { return qe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
                after: function() { return qe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
                empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(ge(e, !1)), e.textContent = ""); return this },
                clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return C.clone(this, e, t) }) },
                html: function(e) {
                    return V(this, function(e) {
                        var t = this[0] || {},
                            i = 0,
                            n = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !$e.test(e) && !me[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = C.htmlPrefilter(e);
                            try {
                                for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (C.cleanData(ge(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return qe(this, arguments, function(t) {
                        var i = this.parentNode;
                        C.inArray(this, e) < 0 && (C.cleanData(ge(this)), i && i.replaceChild(t, this))
                    }, e)
                }
            }), C.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { C.fn[e] = function(e) { for (var i, n = [], s = C(e), a = s.length - 1, r = 0; r <= a; r++) i = r === a ? this : this.clone(!0), C(s[r])[t](i), u.apply(n, i.get()); return this.pushStack(n) } });
            var Re = new RegExp("^(" + se + ")(?!px)[a-z%]+$", "i"),
                Xe = function(e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = n), t.getComputedStyle(e) },
                Fe = new RegExp(re.join("|"), "i");

            function Ge(e, t, i) { var n, s, a, r, o = e.style; return (i = i || Xe(e)) && ("" !== (r = i.getPropertyValue(t) || i[t]) || C.contains(e.ownerDocument, e) || (r = C.style(e, t)), !y.pixelBoxStyles() && Re.test(r) && Fe.test(t) && (n = o.width, s = o.minWidth, a = o.maxWidth, o.minWidth = o.maxWidth = o.width = r, r = i.width, o.width = n, o.minWidth = s, o.maxWidth = a)), void 0 !== r ? r + "" : r }

            function Ye(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }! function() {
                function e() {
                    if (d) {
                        c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Ee.appendChild(c).appendChild(d);
                        var e = n.getComputedStyle(d);
                        i = "1%" !== e.top, l = 12 === t(e.marginLeft), d.style.right = "60%", r = 36 === t(e.right), s = 36 === t(e.width), d.style.position = "absolute", a = 36 === d.offsetWidth || "absolute", Ee.removeChild(c), d = null
                    }
                }

                function t(e) { return Math.round(parseFloat(e)) }
                var i, s, a, r, l, c = o.createElement("div"),
                    d = o.createElement("div");
                d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === d.style.backgroundClip, C.extend(y, { boxSizingReliable: function() { return e(), s }, pixelBoxStyles: function() { return e(), r }, pixelPosition: function() { return e(), i }, reliableMarginLeft: function() { return e(), l }, scrollboxSize: function() { return e(), a } }))
            }();
            var Ve = /^(none|table(?!-c[ea]).+)/,
                We = /^--/,
                _e = { position: "absolute", visibility: "hidden", display: "block" },
                Ue = { letterSpacing: "0", fontWeight: "400" },
                Ke = ["Webkit", "Moz", "ms"],
                Qe = o.createElement("div").style;

            function Je(e) {
                var t = C.cssProps[e];
                return t || (t = C.cssProps[e] = function(e) {
                    if (e in Qe) return e;
                    for (var t = e[0].toUpperCase() + e.slice(1), i = Ke.length; i--;)
                        if ((e = Ke[i] + t) in Qe) return e
                }(e) || e), t
            }

            function Ze(e, t, i) { var n = ae.exec(t); return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t }

            function et(e, t, i, n, s, a) {
                var r = "width" === t ? 1 : 0,
                    o = 0,
                    l = 0;
                if (i === (n ? "border" : "content")) return 0;
                for (; r < 4; r += 2) "margin" === i && (l += C.css(e, i + re[r], !0, s)), n ? ("content" === i && (l -= C.css(e, "padding" + re[r], !0, s)), "margin" !== i && (l -= C.css(e, "border" + re[r] + "Width", !0, s))) : (l += C.css(e, "padding" + re[r], !0, s), "padding" !== i ? l += C.css(e, "border" + re[r] + "Width", !0, s) : o += C.css(e, "border" + re[r] + "Width", !0, s));
                return !n && a >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - o - .5))), l
            }

            function tt(e, t, i) {
                var n = Xe(e),
                    s = Ge(e, t, n),
                    a = "border-box" === C.css(e, "boxSizing", !1, n),
                    r = a;
                if (Re.test(s)) {
                    if (!i) return s;
                    s = "auto"
                }
                return r = r && (y.boxSizingReliable() || s === e.style[t]), ("auto" === s || !parseFloat(s) && "inline" === C.css(e, "display", !1, n)) && (s = e["offset" + t[0].toUpperCase() + t.slice(1)], r = !0), (s = parseFloat(s) || 0) + et(e, t, i || (a ? "border" : "content"), r, n, s) + "px"
            }

            function it(e, t, i, n, s) { return new it.prototype.init(e, t, i, n, s) }
            C.extend({
                cssHooks: { opacity: { get: function(e, t) { if (t) { var i = Ge(e, "opacity"); return "" === i ? "1" : i } } } },
                cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
                cssProps: {},
                style: function(e, t, i, n) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var s, r, o, l = K(t),
                            c = We.test(t),
                            d = e.style;
                        if (c || (t = Je(l)), o = C.cssHooks[t] || C.cssHooks[l], void 0 === i) return o && "get" in o && void 0 !== (s = o.get(e, !1, n)) ? s : d[t];
                        "string" === (r = a(i)) && (s = ae.exec(i)) && s[1] && (i = ce(e, t, s), r = "number"), null != i && i == i && ("number" === r && (i += s && s[3] || (C.cssNumber[l] ? "" : "px")), y.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (d[t] = "inherit"), o && "set" in o && void 0 === (i = o.set(e, i, n)) || (c ? d.setProperty(t, i) : d[t] = i))
                    }
                },
                css: function(e, t, i, n) { var s, a, r, o = K(t); return We.test(t) || (t = Je(o)), (r = C.cssHooks[t] || C.cssHooks[o]) && "get" in r && (s = r.get(e, !0, i)), void 0 === s && (s = Ge(e, t, n)), "normal" === s && t in Ue && (s = Ue[t]), "" === i || i ? (a = parseFloat(s), !0 === i || isFinite(a) ? a || 0 : s) : s }
            }), C.each(["height", "width"], function(e, t) {
                C.cssHooks[t] = {
                    get: function(e, i, n) { if (i) return !Ve.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, n) : le(e, _e, function() { return tt(e, t, n) }) },
                    set: function(e, i, n) {
                        var s, a = Xe(e),
                            r = "border-box" === C.css(e, "boxSizing", !1, a),
                            o = n && et(e, t, n, r, a);
                        return r && y.scrollboxSize() === a.position && (o -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - et(e, t, "border", !1, a) - .5)), o && (s = ae.exec(i)) && "px" !== (s[3] || "px") && (e.style[t] = i, i = C.css(e, t)), Ze(0, i, o)
                    }
                }
            }), C.cssHooks.marginLeft = Ye(y.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), C.each({ margin: "", padding: "", border: "Width" }, function(e, t) { C.cssHooks[e + t] = { expand: function(i) { for (var n = 0, s = {}, a = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) s[e + re[n] + t] = a[n] || a[n - 2] || a[0]; return s } }, "margin" !== e && (C.cssHooks[e + t].set = Ze) }), C.fn.extend({
                css: function(e, t) {
                    return V(this, function(e, t, i) {
                        var n, s, a = {},
                            r = 0;
                        if (Array.isArray(t)) { for (n = Xe(e), s = t.length; r < s; r++) a[t[r]] = C.css(e, t[r], !1, n); return a }
                        return void 0 !== i ? C.style(e, t, i) : C.css(e, t)
                    }, e, t, arguments.length > 1)
                }
            }), C.Tween = it, it.prototype = { constructor: it, init: function(e, t, i, n, s, a) { this.elem = e, this.prop = i, this.easing = s || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = a || (C.cssNumber[i] ? "" : "px") }, cur: function() { var e = it.propHooks[this.prop]; return e && e.get ? e.get(this) : it.propHooks._default.get(this) }, run: function(e) { var t, i = it.propHooks[this.prop]; return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : it.propHooks._default.set(this), this } }, it.prototype.init.prototype = it.prototype, it.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit) } } }, it.propHooks.scrollTop = it.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, C.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, C.fx = it.prototype.init, C.fx.step = {};
            var nt, st, at = /^(?:toggle|show|hide)$/,
                rt = /queueHooks$/;

            function ot() { st && (!1 === o.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ot) : n.setTimeout(ot, C.fx.interval), C.fx.tick()) }

            function lt() { return n.setTimeout(function() { nt = void 0 }), nt = Date.now() }

            function ct(e, t) {
                var i, n = 0,
                    s = { height: e };
                for (t = t ? 1 : 0; n < 4; n += 2 - t) s["margin" + (i = re[n])] = s["padding" + i] = e;
                return t && (s.opacity = s.width = e), s
            }

            function dt(e, t, i) {
                for (var n, s = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), a = 0, r = s.length; a < r; a++)
                    if (n = s[a].call(i, t, e)) return n
            }

            function ut(e, t, i) {
                var n, s, a = 0,
                    r = ut.prefilters.length,
                    o = C.Deferred().always(function() { delete l.elem }),
                    l = function() { if (s) return !1; for (var t = nt || lt(), i = Math.max(0, c.startTime + c.duration - t), n = 1 - (i / c.duration || 0), a = 0, r = c.tweens.length; a < r; a++) c.tweens[a].run(n); return o.notifyWith(e, [c, n, i]), n < 1 && r ? i : (r || o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c]), !1) },
                    c = o.promise({
                        elem: e,
                        props: C.extend({}, t),
                        opts: C.extend(!0, { specialEasing: {}, easing: C.easing._default }, i),
                        originalProperties: t,
                        originalOptions: i,
                        startTime: nt || lt(),
                        duration: i.duration,
                        tweens: [],
                        createTween: function(t, i) { var n = C.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing); return c.tweens.push(n), n },
                        stop: function(t) {
                            var i = 0,
                                n = t ? c.tweens.length : 0;
                            if (s) return this;
                            for (s = !0; i < n; i++) c.tweens[i].run(1);
                            return t ? (o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c, t])) : o.rejectWith(e, [c, t]), this
                        }
                    }),
                    d = c.props;
                for (! function(e, t) {
                        var i, n, s, a, r;
                        for (i in e)
                            if (s = t[n = K(i)], a = e[i], Array.isArray(a) && (s = a[1], a = e[i] = a[0]), i !== n && (e[n] = a, delete e[i]), (r = C.cssHooks[n]) && "expand" in r)
                                for (i in a = r.expand(a), delete e[n], a) i in e || (e[i] = a[i], t[i] = s);
                            else t[n] = s
                    }(d, c.opts.specialEasing); a < r; a++)
                    if (n = ut.prefilters[a].call(c, e, d, c.opts)) return w(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
                return C.map(d, dt, c), w(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(l, { elem: e, anim: c, queue: c.opts.queue })), c
            }
            C.Animation = C.extend(ut, {
                    tweeners: { "*": [function(e, t) { var i = this.createTween(e, t); return ce(i.elem, e, ae.exec(t), i), i }] },
                    tweener: function(e, t) { w(e) ? (t = e, e = ["*"]) : e = e.match(q); for (var i, n = 0, s = e.length; n < s; n++) i = e[n], ut.tweeners[i] = ut.tweeners[i] || [], ut.tweeners[i].unshift(t) },
                    prefilters: [function(e, t, i) {
                        var n, s, a, r, o, l, c, d, u = "width" in t || "height" in t,
                            h = this,
                            p = {},
                            f = e.style,
                            v = e.nodeType && oe(e),
                            m = Z.get(e, "fxshow");
                        for (n in i.queue || (null == (r = C._queueHooks(e, "fx")).unqueued && (r.unqueued = 0, o = r.empty.fire, r.empty.fire = function() { r.unqueued || o() }), r.unqueued++, h.always(function() { h.always(function() { r.unqueued--, C.queue(e, "fx").length || r.empty.fire() }) })), t)
                            if (s = t[n], at.test(s)) {
                                if (delete t[n], a = a || "toggle" === s, s === (v ? "hide" : "show")) {
                                    if ("show" !== s || !m || void 0 === m[n]) continue;
                                    v = !0
                                }
                                p[n] = m && m[n] || C.style(e, n)
                            }
                        if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                            for (n in u && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = m && m.display) && (c = Z.get(e, "display")), "none" === (d = C.css(e, "display")) && (c ? d = c : (he([e], !0), c = e.style.display || c, d = C.css(e, "display"), he([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === C.css(e, "float") && (l || (h.done(function() { f.display = c }), null == c && (d = f.display, c = "none" === d ? "" : d)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", h.always(function() { f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2] })), l = !1, p) l || (m ? "hidden" in m && (v = m.hidden) : m = Z.access(e, "fxshow", { display: c }), a && (m.hidden = !v), v && he([e], !0), h.done(function() { for (n in v || he([e]), Z.remove(e, "fxshow"), p) C.style(e, n, p[n]) })), l = dt(v ? m[n] : 0, n, h), n in m || (m[n] = l.start, v && (l.end = l.start, l.start = 0))
                    }],
                    prefilter: function(e, t) { t ? ut.prefilters.unshift(e) : ut.prefilters.push(e) }
                }), C.speed = function(e, t, i) { var n = e && "object" === a(e) ? C.extend({}, e) : { complete: i || !i && t || w(e) && e, duration: e, easing: i && t || t && !w(t) && t }; return C.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in C.fx.speeds ? n.duration = C.fx.speeds[n.duration] : n.duration = C.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() { w(n.old) && n.old.call(this), n.queue && C.dequeue(this, n.queue) }, n }, C.fn.extend({
                    fadeTo: function(e, t, i, n) { return this.filter(oe).css("opacity", 0).show().end().animate({ opacity: t }, e, i, n) },
                    animate: function(e, t, i, n) {
                        var s = C.isEmptyObject(e),
                            a = C.speed(t, i, n),
                            r = function() {
                                var t = ut(this, C.extend({}, e), a);
                                (s || Z.get(this, "finish")) && t.stop(!0)
                            };
                        return r.finish = r, s || !1 === a.queue ? this.each(r) : this.queue(a.queue, r)
                    },
                    stop: function(e, t, i) {
                        var n = function(e) {
                            var t = e.stop;
                            delete e.stop, t(i)
                        };
                        return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                            var t = !0,
                                s = null != e && e + "queueHooks",
                                a = C.timers,
                                r = Z.get(this);
                            if (s) r[s] && r[s].stop && n(r[s]);
                            else
                                for (s in r) r[s] && r[s].stop && rt.test(s) && n(r[s]);
                            for (s = a.length; s--;) a[s].elem !== this || null != e && a[s].queue !== e || (a[s].anim.stop(i), t = !1, a.splice(s, 1));
                            !t && i || C.dequeue(this, e)
                        })
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"), this.each(function() {
                            var t, i = Z.get(this),
                                n = i[e + "queue"],
                                s = i[e + "queueHooks"],
                                a = C.timers,
                                r = n ? n.length : 0;
                            for (i.finish = !0, C.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                            for (t = 0; t < r; t++) n[t] && n[t].finish && n[t].finish.call(this);
                            delete i.finish
                        })
                    }
                }), C.each(["toggle", "show", "hide"], function(e, t) {
                    var i = C.fn[t];
                    C.fn[t] = function(e, n, s) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ct(t, !0), e, n, s) }
                }), C.each({ slideDown: ct("show"), slideUp: ct("hide"), slideToggle: ct("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { C.fn[e] = function(e, i, n) { return this.animate(t, e, i, n) } }), C.timers = [], C.fx.tick = function() {
                    var e, t = 0,
                        i = C.timers;
                    for (nt = Date.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
                    i.length || C.fx.stop(), nt = void 0
                }, C.fx.timer = function(e) { C.timers.push(e), C.fx.start() }, C.fx.interval = 13, C.fx.start = function() { st || (st = !0, ot()) }, C.fx.stop = function() { st = null }, C.fx.speeds = { slow: 600, fast: 200, _default: 400 }, C.fn.delay = function(e, t) {
                    return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, i) {
                        var s = n.setTimeout(t, e);
                        i.stop = function() { n.clearTimeout(s) }
                    })
                },
                function() {
                    var e = o.createElement("input"),
                        t = o.createElement("select").appendChild(o.createElement("option"));
                    e.type = "checkbox", y.checkOn = "" !== e.value, y.optSelected = t.selected, (e = o.createElement("input")).value = "t", e.type = "radio", y.radioValue = "t" === e.value
                }();
            var ht, pt = C.expr.attrHandle;
            C.fn.extend({ attr: function(e, t) { return V(this, C.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each(function() { C.removeAttr(this, e) }) } }), C.extend({
                attr: function(e, t, i) { var n, s, a = e.nodeType; if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? C.prop(e, t, i) : (1 === a && C.isXMLDoc(e) || (s = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ht : void 0)), void 0 !== i ? null === i ? void C.removeAttr(e, t) : s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : s && "get" in s && null !== (n = s.get(e, t)) ? n : null == (n = C.find.attr(e, t)) ? void 0 : n) },
                attrHooks: { type: { set: function(e, t) { if (!y.radioValue && "radio" === t && L(e, "input")) { var i = e.value; return e.setAttribute("type", t), i && (e.value = i), t } } } },
                removeAttr: function(e, t) {
                    var i, n = 0,
                        s = t && t.match(q);
                    if (s && 1 === e.nodeType)
                        for (; i = s[n++];) e.removeAttribute(i)
                }
            }), ht = { set: function(e, t, i) { return !1 === t ? C.removeAttr(e, i) : e.setAttribute(i, i), i } }, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var i = pt[t] || C.find.attr;
                pt[t] = function(e, t, n) { var s, a, r = t.toLowerCase(); return n || (a = pt[r], pt[r] = s, s = null != i(e, t, n) ? r : null, pt[r] = a), s }
            });
            var ft = /^(?:input|select|textarea|button)$/i,
                vt = /^(?:a|area)$/i;

            function mt(e) { return (e.match(q) || []).join(" ") }

            function gt(e) { return e.getAttribute && e.getAttribute("class") || "" }

            function yt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(q) || [] }
            C.fn.extend({ prop: function(e, t) { return V(this, C.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return this.each(function() { delete this[C.propFix[e] || e] }) } }), C.extend({ prop: function(e, t, i) { var n, s, a = e.nodeType; if (3 !== a && 8 !== a && 2 !== a) return 1 === a && C.isXMLDoc(e) || (t = C.propFix[t] || t, s = C.propHooks[t]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : e[t] = i : s && "get" in s && null !== (n = s.get(e, t)) ? n : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = C.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : ft.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), y.optSelected || (C.propHooks.selected = {
                get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { C.propFix[this.toLowerCase()] = this }), C.fn.extend({
                addClass: function(e) {
                    var t, i, n, s, a, r, o, l = 0;
                    if (w(e)) return this.each(function(t) { C(this).addClass(e.call(this, t, gt(this))) });
                    if ((t = yt(e)).length)
                        for (; i = this[l++];)
                            if (s = gt(i), n = 1 === i.nodeType && " " + mt(s) + " ") {
                                for (r = 0; a = t[r++];) n.indexOf(" " + a + " ") < 0 && (n += a + " ");
                                s !== (o = mt(n)) && i.setAttribute("class", o)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, i, n, s, a, r, o, l = 0;
                    if (w(e)) return this.each(function(t) { C(this).removeClass(e.call(this, t, gt(this))) });
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = yt(e)).length)
                        for (; i = this[l++];)
                            if (s = gt(i), n = 1 === i.nodeType && " " + mt(s) + " ") {
                                for (r = 0; a = t[r++];)
                                    for (; n.indexOf(" " + a + " ") > -1;) n = n.replace(" " + a + " ", " ");
                                s !== (o = mt(n)) && i.setAttribute("class", o)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var i = a(e),
                        n = "string" === i || Array.isArray(e);
                    return "boolean" == typeof t && n ? t ? this.addClass(e) : this.removeClass(e) : w(e) ? this.each(function(i) { C(this).toggleClass(e.call(this, i, gt(this), t), t) }) : this.each(function() {
                        var t, s, a, r;
                        if (n)
                            for (s = 0, a = C(this), r = yt(e); t = r[s++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                        else void 0 !== e && "boolean" !== i || ((t = gt(this)) && Z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Z.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, i, n = 0;
                    for (t = " " + e + " "; i = this[n++];)
                        if (1 === i.nodeType && (" " + mt(gt(i)) + " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var wt = /\r/g;
            C.fn.extend({
                val: function(e) {
                    var t, i, n, s = this[0];
                    return arguments.length ? (n = w(e), this.each(function(i) {
                        var s;
                        1 === this.nodeType && (null == (s = n ? e.call(this, i, C(this).val()) : e) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = C.map(s, function(e) { return null == e ? "" : e + "" })), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s))
                    })) : s ? (t = C.valHooks[s.type] || C.valHooks[s.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(s, "value")) ? i : "string" == typeof(i = s.value) ? i.replace(wt, "") : null == i ? "" : i : void 0
                }
            }), C.extend({
                valHooks: {
                    option: { get: function(e) { var t = C.find.attr(e, "value"); return null != t ? t : mt(C.text(e)) } },
                    select: {
                        get: function(e) {
                            var t, i, n, s = e.options,
                                a = e.selectedIndex,
                                r = "select-one" === e.type,
                                o = r ? null : [],
                                l = r ? a + 1 : s.length;
                            for (n = a < 0 ? l : r ? a : 0; n < l; n++)
                                if (((i = s[n]).selected || n === a) && !i.disabled && (!i.parentNode.disabled || !L(i.parentNode, "optgroup"))) {
                                    if (t = C(i).val(), r) return t;
                                    o.push(t)
                                }
                            return o
                        },
                        set: function(e, t) { for (var i, n, s = e.options, a = C.makeArray(t), r = s.length; r--;)((n = s[r]).selected = C.inArray(C.valHooks.option.get(n), a) > -1) && (i = !0); return i || (e.selectedIndex = -1), a }
                    }
                }
            }), C.each(["radio", "checkbox"], function() { C.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1 } }, y.checkOn || (C.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), y.focusin = "onfocusin" in n;
            var bt = /^(?:focusinfocus|focusoutblur)$/,
                xt = function(e) { e.stopPropagation() };
            C.extend(C.event, {
                trigger: function(e, t, i, s) {
                    var r, l, c, d, u, h, p, f, m = [i || o],
                        g = v.call(e, "type") ? e.type : e,
                        y = v.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (l = f = c = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !bt.test(g + C.event.triggered) && (g.indexOf(".") > -1 && (g = (y = g.split(".")).shift(), y.sort()), u = g.indexOf(":") < 0 && "on" + g, (e = e[C.expando] ? e : new C.Event(g, "object" === a(e) && e)).isTrigger = s ? 2 : 3, e.namespace = y.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : C.makeArray(t, [e]), p = C.event.special[g] || {}, s || !p.trigger || !1 !== p.trigger.apply(i, t))) {
                        if (!s && !p.noBubble && !b(i)) {
                            for (d = p.delegateType || g, bt.test(d + g) || (l = l.parentNode); l; l = l.parentNode) m.push(l), c = l;
                            c === (i.ownerDocument || o) && m.push(c.defaultView || c.parentWindow || n)
                        }
                        for (r = 0;
                            (l = m[r++]) && !e.isPropagationStopped();) f = l, e.type = r > 1 ? d : p.bindType || g, (h = (Z.get(l, "events") || {})[e.type] && Z.get(l, "handle")) && h.apply(l, t), (h = u && l[u]) && h.apply && Q(l) && (e.result = h.apply(l, t), !1 === e.result && e.preventDefault());
                        return e.type = g, s || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(m.pop(), t) || !Q(i) || u && w(i[g]) && !b(i) && ((c = i[u]) && (i[u] = null), C.event.triggered = g, e.isPropagationStopped() && f.addEventListener(g, xt), i[g](), e.isPropagationStopped() && f.removeEventListener(g, xt), C.event.triggered = void 0, c && (i[u] = c)), e.result
                    }
                },
                simulate: function(e, t, i) {
                    var n = C.extend(new C.Event, i, { type: e, isSimulated: !0 });
                    C.event.trigger(n, null, t)
                }
            }), C.fn.extend({ trigger: function(e, t) { return this.each(function() { C.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var i = this[0]; if (i) return C.event.trigger(e, t, i, !0) } }), y.focusin || C.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
                var i = function(e) { C.event.simulate(t, e.target, C.event.fix(e)) };
                C.event.special[t] = {
                    setup: function() {
                        var n = this.ownerDocument || this,
                            s = Z.access(n, t);
                        s || n.addEventListener(e, i, !0), Z.access(n, t, (s || 0) + 1)
                    },
                    teardown: function() {
                        var n = this.ownerDocument || this,
                            s = Z.access(n, t) - 1;
                        s ? Z.access(n, t, s) : (n.removeEventListener(e, i, !0), Z.remove(n, t))
                    }
                }
            });
            var Tt = n.location,
                Et = Date.now(),
                Ct = /\?/;
            C.parseXML = function(e) { var t; if (!e || "string" != typeof e) return null; try { t = (new n.DOMParser).parseFromString(e, "text/xml") } catch (e) { t = void 0 } return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t };
            var St = /\[\]$/,
                kt = /\r?\n/g,
                Mt = /^(?:submit|button|image|reset|file)$/i,
                Pt = /^(?:input|select|textarea|keygen)/i;

            function Dt(e, t, i, n) {
                var s;
                if (Array.isArray(t)) C.each(t, function(t, s) { i || St.test(e) ? n(e, s) : Dt(e + "[" + ("object" === a(s) && null != s ? t : "") + "]", s, i, n) });
                else if (i || "object" !== E(t)) n(e, t);
                else
                    for (s in t) Dt(e + "[" + s + "]", t[s], i, n)
            }
            C.param = function(e, t) {
                var i, n = [],
                    s = function(e, t) {
                        var i = w(t) ? t() : t;
                        n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
                    };
                if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() { s(this.name, this.value) });
                else
                    for (i in e) Dt(i, e[i], t, s);
                return n.join("&")
            }, C.fn.extend({ serialize: function() { return C.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = C.prop(this, "elements"); return e ? C.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !C(this).is(":disabled") && Pt.test(this.nodeName) && !Mt.test(e) && (this.checked || !pe.test(e)) }).map(function(e, t) { var i = C(this).val(); return null == i ? null : Array.isArray(i) ? C.map(i, function(e) { return { name: t.name, value: e.replace(kt, "\r\n") } }) : { name: t.name, value: i.replace(kt, "\r\n") } }).get() } });
            var At = /%20/g,
                Lt = /#.*$/,
                $t = /([?&])_=[^&]*/,
                zt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Nt = /^(?:GET|HEAD)$/,
                It = /^\/\//,
                Ot = {},
                Ht = {},
                jt = "*/".concat("*"),
                qt = o.createElement("a");

            function Bt(e) {
                return function(t, i) {
                    "string" != typeof t && (i = t, t = "*");
                    var n, s = 0,
                        a = t.toLowerCase().match(q) || [];
                    if (w(i))
                        for (; n = a[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
                }
            }

            function Rt(e, t, i, n) {
                var s = {},
                    a = e === Ht;

                function r(o) { var l; return s[o] = !0, C.each(e[o] || [], function(e, o) { var c = o(t, i, n); return "string" != typeof c || a || s[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1) }), l }
                return r(t.dataTypes[0]) || !s["*"] && r("*")
            }

            function Xt(e, t) { var i, n, s = C.ajaxSettings.flatOptions || {}; for (i in t) void 0 !== t[i] && ((s[i] ? e : n || (n = {}))[i] = t[i]); return n && C.extend(!0, e, n), e }
            qt.href = Tt.href, C.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: { url: Tt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": jt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": C.parseXML }, flatOptions: { url: !0, context: !0 } },
                ajaxSetup: function(e, t) { return t ? Xt(Xt(e, C.ajaxSettings), t) : Xt(C.ajaxSettings, e) },
                ajaxPrefilter: Bt(Ot),
                ajaxTransport: Bt(Ht),
                ajax: function(e, t) {
                    "object" === a(e) && (t = e, e = void 0), t = t || {};
                    var i, s, r, l, c, d, u, h, p, f, v = C.ajaxSetup({}, t),
                        m = v.context || v,
                        g = v.context && (m.nodeType || m.jquery) ? C(m) : C.event,
                        y = C.Deferred(),
                        w = C.Callbacks("once memory"),
                        b = v.statusCode || {},
                        x = {},
                        T = {},
                        E = "canceled",
                        S = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (u) {
                                    if (!l)
                                        for (l = {}; t = zt.exec(r);) l[t[1].toLowerCase()] = t[2];
                                    t = l[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function() { return u ? r : null },
                            setRequestHeader: function(e, t) { return null == u && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, x[e] = t), this },
                            overrideMimeType: function(e) { return null == u && (v.mimeType = e), this },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (u) S.always(e[S.status]);
                                    else
                                        for (t in e) b[t] = [b[t], e[t]];
                                return this
                            },
                            abort: function(e) { var t = e || E; return i && i.abort(t), k(0, t), this }
                        };
                    if (y.promise(S), v.url = ((e || v.url || Tt.href) + "").replace(It, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(q) || [""], null == v.crossDomain) { d = o.createElement("a"); try { d.href = v.url, d.href = d.href, v.crossDomain = qt.protocol + "//" + qt.host != d.protocol + "//" + d.host } catch (e) { v.crossDomain = !0 } }
                    if (v.data && v.processData && "string" != typeof v.data && (v.data = C.param(v.data, v.traditional)), Rt(Ot, v, t, S), u) return S;
                    for (p in (h = C.event && v.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Nt.test(v.type), s = v.url.replace(Lt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(At, "+")) : (f = v.url.slice(s.length), v.data && (v.processData || "string" == typeof v.data) && (s += (Ct.test(s) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (s = s.replace($t, "$1"), f = (Ct.test(s) ? "&" : "?") + "_=" + Et++ + f), v.url = s + f), v.ifModified && (C.lastModified[s] && S.setRequestHeader("If-Modified-Since", C.lastModified[s]), C.etag[s] && S.setRequestHeader("If-None-Match", C.etag[s])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && S.setRequestHeader("Content-Type", v.contentType), S.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + jt + "; q=0.01" : "") : v.accepts["*"]), v.headers) S.setRequestHeader(p, v.headers[p]);
                    if (v.beforeSend && (!1 === v.beforeSend.call(m, S, v) || u)) return S.abort();
                    if (E = "abort", w.add(v.complete), S.done(v.success), S.fail(v.error), i = Rt(Ht, v, t, S)) {
                        if (S.readyState = 1, h && g.trigger("ajaxSend", [S, v]), u) return S;
                        v.async && v.timeout > 0 && (c = n.setTimeout(function() { S.abort("timeout") }, v.timeout));
                        try { u = !1, i.send(x, k) } catch (e) {
                            if (u) throw e;
                            k(-1, e)
                        }
                    } else k(-1, "No Transport");

                    function k(e, t, a, o) {
                        var l, d, p, f, x, T = t;
                        u || (u = !0, c && n.clearTimeout(c), i = void 0, r = o || "", S.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, a && (f = function(e, t, i) {
                            for (var n, s, a, r, o = e.contents, l = e.dataTypes;
                                "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (n)
                                for (s in o)
                                    if (o[s] && o[s].test(n)) { l.unshift(s); break }
                            if (l[0] in i) a = l[0];
                            else {
                                for (s in i) {
                                    if (!l[0] || e.converters[s + " " + l[0]]) { a = s; break }
                                    r || (r = s)
                                }
                                a = a || r
                            }
                            if (a) return a !== l[0] && l.unshift(a), i[a]
                        }(v, S, a)), f = function(e, t, i, n) {
                            var s, a, r, o, l, c = {},
                                d = e.dataTypes.slice();
                            if (d[1])
                                for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
                            for (a = d.shift(); a;)
                                if (e.responseFields[a] && (i[e.responseFields[a]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = d.shift())
                                    if ("*" === a) a = l;
                                    else if ("*" !== l && l !== a) {
                                if (!(r = c[l + " " + a] || c["* " + a]))
                                    for (s in c)
                                        if ((o = s.split(" "))[1] === a && (r = c[l + " " + o[0]] || c["* " + o[0]])) {!0 === r ? r = c[s] : !0 !== c[s] && (a = o[0], d.unshift(o[1])); break }
                                if (!0 !== r)
                                    if (r && e.throws) t = r(t);
                                    else try { t = r(t) } catch (e) { return { state: "parsererror", error: r ? e : "No conversion from " + l + " to " + a } }
                            }
                            return { state: "success", data: t }
                        }(v, f, S, l), l ? (v.ifModified && ((x = S.getResponseHeader("Last-Modified")) && (C.lastModified[s] = x), (x = S.getResponseHeader("etag")) && (C.etag[s] = x)), 204 === e || "HEAD" === v.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = f.state, d = f.data, l = !(p = f.error))) : (p = T, !e && T || (T = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (t || T) + "", l ? y.resolveWith(m, [d, T, S]) : y.rejectWith(m, [S, T, p]), S.statusCode(b), b = void 0, h && g.trigger(l ? "ajaxSuccess" : "ajaxError", [S, v, l ? d : p]), w.fireWith(m, [S, T]), h && (g.trigger("ajaxComplete", [S, v]), --C.active || C.event.trigger("ajaxStop")))
                    }
                    return S
                },
                getJSON: function(e, t, i) { return C.get(e, t, i, "json") },
                getScript: function(e, t) { return C.get(e, void 0, t, "script") }
            }), C.each(["get", "post"], function(e, t) { C[t] = function(e, i, n, s) { return w(i) && (s = s || n, n = i, i = void 0), C.ajax(C.extend({ url: e, type: t, dataType: s, data: i, success: n }, C.isPlainObject(e) && e)) } }), C._evalUrl = function(e) { return C.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, C.fn.extend({
                wrapAll: function(e) { var t; return this[0] && (w(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstElementChild;) e = e.firstElementChild; return e }).append(this)), this },
                wrapInner: function(e) {
                    return w(e) ? this.each(function(t) { C(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                        var t = C(this),
                            i = t.contents();
                        i.length ? i.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) { var t = w(e); return this.each(function(i) { C(this).wrapAll(t ? e.call(this, i) : e) }) },
                unwrap: function(e) { return this.parent(e).not("body").each(function() { C(this).replaceWith(this.childNodes) }), this }
            }), C.expr.pseudos.hidden = function(e) { return !C.expr.pseudos.visible(e) }, C.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, C.ajaxSettings.xhr = function() { try { return new n.XMLHttpRequest } catch (e) {} };
            var Ft = { 0: 200, 1223: 204 },
                Gt = C.ajaxSettings.xhr();
            y.cors = !!Gt && "withCredentials" in Gt, y.ajax = Gt = !!Gt, C.ajaxTransport(function(e) {
                var t, i;
                if (y.cors || Gt && !e.crossDomain) return {
                    send: function(s, a) {
                        var r, o = e.xhr();
                        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (r in e.xhrFields) o[r] = e.xhrFields[r];
                        for (r in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s) o.setRequestHeader(r, s[r]);
                        t = function(e) { return function() { t && (t = i = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? a(0, "error") : a(o.status, o.statusText) : a(Ft[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? { binary: o.response } : { text: o.responseText }, o.getAllResponseHeaders())) } }, o.onload = t(), i = o.onerror = o.ontimeout = t("error"), void 0 !== o.onabort ? o.onabort = i : o.onreadystatechange = function() { 4 === o.readyState && n.setTimeout(function() { t && i() }) }, t = t("abort");
                        try { o.send(e.hasContent && e.data || null) } catch (e) { if (t) throw e }
                    },
                    abort: function() { t && t() }
                }
            }), C.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), C.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return C.globalEval(e), e } } }), C.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), C.ajaxTransport("script", function(e) { var t, i; if (e.crossDomain) return { send: function(n, s) { t = C("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", i = function(e) { t.remove(), i = null, e && s("error" === e.type ? 404 : 200, e.type) }), o.head.appendChild(t[0]) }, abort: function() { i && i() } } });
            var Yt, Vt = [],
                Wt = /(=)\?(?=&|$)|\?\?/;
            C.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Vt.pop() || C.expando + "_" + Et++; return this[e] = !0, e } }), C.ajaxPrefilter("json jsonp", function(e, t, i) { var s, a, r, o = !1 !== e.jsonp && (Wt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(e.data) && "data"); if (o || "jsonp" === e.dataTypes[0]) return s = e.jsonpCallback = w(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(Wt, "$1" + s) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function() { return r || C.error(s + " was not called"), r[0] }, e.dataTypes[0] = "json", a = n[s], n[s] = function() { r = arguments }, i.always(function() { void 0 === a ? C(n).removeProp(s) : n[s] = a, e[s] && (e.jsonpCallback = t.jsonpCallback, Vt.push(s)), r && w(a) && a(r[0]), r = a = void 0 }), "script" }), y.createHTMLDocument = ((Yt = o.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Yt.childNodes.length), C.parseHTML = function(e, t, i) { return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (y.createHTMLDocument ? ((n = (t = o.implementation.createHTMLDocument("")).createElement("base")).href = o.location.href, t.head.appendChild(n)) : t = o), s = $.exec(e), a = !i && [], s ? [t.createElement(s[1])] : (s = Te([e], t, a), a && a.length && C(a).remove(), C.merge([], s.childNodes))); var n, s, a }, C.fn.load = function(e, t, i) {
                var n, s, r, o = this,
                    l = e.indexOf(" ");
                return l > -1 && (n = mt(e.slice(l)), e = e.slice(0, l)), w(t) ? (i = t, t = void 0) : t && "object" === a(t) && (s = "POST"), o.length > 0 && C.ajax({ url: e, type: s || "GET", dataType: "html", data: t }).done(function(e) { r = arguments, o.html(n ? C("<div>").append(C.parseHTML(e)).find(n) : e) }).always(i && function(e, t) { o.each(function() { i.apply(this, r || [e.responseText, t, e]) }) }), this
            }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { C.fn[t] = function(e) { return this.on(t, e) } }), C.expr.pseudos.animated = function(e) { return C.grep(C.timers, function(t) { return e === t.elem }).length }, C.offset = {
                setOffset: function(e, t, i) {
                    var n, s, a, r, o, l, c = C.css(e, "position"),
                        d = C(e),
                        u = {};
                    "static" === c && (e.style.position = "relative"), o = d.offset(), a = C.css(e, "top"), l = C.css(e, "left"), ("absolute" === c || "fixed" === c) && (a + l).indexOf("auto") > -1 ? (r = (n = d.position()).top, s = n.left) : (r = parseFloat(a) || 0, s = parseFloat(l) || 0), w(t) && (t = t.call(e, i, C.extend({}, o))), null != t.top && (u.top = t.top - o.top + r), null != t.left && (u.left = t.left - o.left + s), "using" in t ? t.using.call(e, u) : d.css(u)
                }
            }, C.fn.extend({
                offset: function(e) { if (arguments.length) return void 0 === e ? this : this.each(function(t) { C.offset.setOffset(this, e, t) }); var t, i, n = this[0]; return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, { top: t.top + i.pageYOffset, left: t.left + i.pageXOffset }) : { top: 0, left: 0 } : void 0 },
                position: function() {
                    if (this[0]) {
                        var e, t, i, n = this[0],
                            s = { top: 0, left: 0 };
                        if ("fixed" === C.css(n, "position")) t = n.getBoundingClientRect();
                        else {
                            for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                            e && e !== n && 1 === e.nodeType && ((s = C(e).offset()).top += C.css(e, "borderTopWidth", !0), s.left += C.css(e, "borderLeftWidth", !0))
                        }
                        return { top: t.top - s.top - C.css(n, "marginTop", !0), left: t.left - s.left - C.css(n, "marginLeft", !0) }
                    }
                },
                offsetParent: function() { return this.map(function() { for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent; return e || Ee }) }
            }), C.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
                var i = "pageYOffset" === t;
                C.fn[e] = function(n) {
                    return V(this, function(e, n, s) {
                        var a;
                        if (b(e) ? a = e : 9 === e.nodeType && (a = e.defaultView), void 0 === s) return a ? a[t] : e[n];
                        a ? a.scrollTo(i ? a.pageXOffset : s, i ? s : a.pageYOffset) : e[n] = s
                    }, e, n, arguments.length)
                }
            }), C.each(["top", "left"], function(e, t) { C.cssHooks[t] = Ye(y.pixelPosition, function(e, i) { if (i) return i = Ge(e, t), Re.test(i) ? C(e).position()[t] + "px" : i }) }), C.each({ Height: "height", Width: "width" }, function(e, t) {
                C.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(i, n) {
                    C.fn[n] = function(s, a) {
                        var r = arguments.length && (i || "boolean" != typeof s),
                            o = i || (!0 === s || !0 === a ? "margin" : "border");
                        return V(this, function(t, i, s) { var a; return b(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === s ? C.css(t, i, o) : C.style(t, i, s, o) }, t, r ? s : void 0, r)
                    }
                })
            }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) { C.fn[t] = function(e, i) { return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t) } }), C.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), C.fn.extend({ bind: function(e, t, i) { return this.on(e, null, t, i) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, i, n) { return this.on(t, e, i, n) }, undelegate: function(e, t, i) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i) } }), C.proxy = function(e, t) { var i, n, s; if ("string" == typeof t && (i = e[t], t = e, e = i), w(e)) return n = c.call(arguments, 2), (s = function() { return e.apply(t || this, n.concat(c.call(arguments))) }).guid = e.guid = e.guid || C.guid++, s }, C.holdReady = function(e) { e ? C.readyWait++ : C.ready(!0) }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = L, C.isFunction = w, C.isWindow = b, C.camelCase = K, C.type = E, C.now = Date.now, C.isNumeric = function(e) { var t = C.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, void 0 === (i = function() { return C }.apply(t, [])) || (e.exports = i);
            var _t = n.jQuery,
                Ut = n.$;
            return C.noConflict = function(e) { return n.$ === C && (n.$ = Ut), e && n.jQuery === C && (n.jQuery = _t), C }, s || (n.jQuery = n.$ = C), C
        }, "object" === a(e) && "object" === a(e.exports) ? e.exports = n.document ? s(n, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return s(e) } : s(n)
    }).call(t, i(5)(e))
}, function(e, t, i) {
    "use strict";
    e.exports = function(e) { return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function() { return e.l } }), Object.defineProperty(e, "id", { enumerable: !0, get: function() { return e.i } }), e.webpackPolyfill = 1), e }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
    var n = i(7),
        s = i(0);

    function a(e, t) { return !t || "object" !== d(t) && "function" != typeof t ? r(e) : t }

    function r(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

    function o(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function l(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function c(e, t, i) { return t && l(e.prototype, t), i && l(e, i), e }

    function d(e) { return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }
    var u = { addClass: n.addClass, removeClass: n.removeClass, hasClass: n.hasClass, toggleClass: n.toggleClass, attr: n.attr, removeAttr: n.removeAttr, data: n.data, transform: n.transform, transition: n.transition, on: n.on, off: n.off, trigger: n.trigger, transitionEnd: n.transitionEnd, outerWidth: n.outerWidth, outerHeight: n.outerHeight, offset: n.offset, css: n.css, each: n.each, html: n.html, text: n.text, is: n.is, index: n.index, eq: n.eq, append: n.append, prepend: n.prepend, next: n.next, nextAll: n.nextAll, prev: n.prev, prevAll: n.prevAll, parent: n.parent, parents: n.parents, closest: n.closest, find: n.find, children: n.children, remove: n.remove, add: n.add, styles: n.styles };
    Object.keys(u).forEach(function(e) { n.$.fn[e] = u[e] });
    var h, p, f = {
            deleteProps: function(e) {
                var t = e;
                Object.keys(t).forEach(function(e) { try { t[e] = null } catch (e) {} try { delete t[e] } catch (e) {} })
            },
            nextTick: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; return setTimeout(e, t) },
            now: function() { return Date.now() },
            getTranslate: function(e) {
                var t, i, n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x",
                    r = s.window.getComputedStyle(e, null);
                return s.window.WebKitCSSMatrix ? ((i = r.transform || r.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(function(e) { return e.replace(",", ".") }).join(", ")), n = new s.window.WebKitCSSMatrix("none" === i ? "" : i)) : t = (n = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === a && (i = s.window.WebKitCSSMatrix ? n.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === a && (i = s.window.WebKitCSSMatrix ? n.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), i || 0
            },
            parseUrlQuery: function(e) {
                var t, i, n, a, r = {},
                    o = e || s.window.location.href;
                if ("string" == typeof o && o.length)
                    for (a = (i = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function(e) { return "" !== e })).length, t = 0; t < a; t += 1) n = i[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(n[0])] = void 0 === n[1] ? void 0 : decodeURIComponent(n[1]) || "";
                return r
            },
            isObject: function(e) { return "object" === d(e) && null !== e && e.constructor && e.constructor === Object },
            extend: function() {
                for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) {
                    var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
                    if (void 0 !== i && null !== i)
                        for (var n = Object.keys(Object(i)), s = 0, a = n.length; s < a; s += 1) {
                            var r = n[s],
                                o = Object.getOwnPropertyDescriptor(i, r);
                            void 0 !== o && o.enumerable && (f.isObject(e[r]) && f.isObject(i[r]) ? f.extend(e[r], i[r]) : !f.isObject(e[r]) && f.isObject(i[r]) ? (e[r] = {}, f.extend(e[r], i[r])) : e[r] = i[r])
                        }
                }
                return e
            }
        },
        v = (p = s.document.createElement("div"), {
            touch: s.window.Modernizr && !0 === s.window.Modernizr.touch || !!("ontouchstart" in s.window || s.window.DocumentTouch && s.document instanceof s.window.DocumentTouch),
            pointerEvents: !(!s.window.navigator.pointerEnabled && !s.window.PointerEvent),
            prefixedPointerEvents: !!s.window.navigator.msPointerEnabled,
            transition: (h = p.style, "transition" in h || "webkitTransition" in h || "MozTransition" in h),
            transforms3d: s.window.Modernizr && !0 === s.window.Modernizr.csstransforms3d || function() { var e = p.style; return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e }(),
            flexbox: function() {
                for (var e = p.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1)
                    if (t[i] in e) return !0;
                return !1
            }(),
            observer: "MutationObserver" in s.window || "WebkitMutationObserver" in s.window,
            passiveListener: function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", { get: function() { e = !0 } });
                    s.window.addEventListener("testPassiveListener", null, t)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart" in s.window
        }),
        m = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                o(this, e);
                var i = this;
                i.params = t, i.eventsListeners = {}, i.params && i.params.on && Object.keys(i.params.on).forEach(function(e) { i.on(e, i.params.on[e]) })
            }
            return c(e, [{ key: "on", value: function(e, t, i) { var n = this; if ("function" != typeof t) return n; var s = i ? "unshift" : "push"; return e.split(" ").forEach(function(e) { n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][s](t) }), n } }, {
                key: "once",
                value: function(e, t, i) {
                    var n = this;
                    if ("function" != typeof t) return n;
                    return n.on(e, function i() {
                        for (var s = arguments.length, a = new Array(s), r = 0; r < s; r++) a[r] = arguments[r];
                        t.apply(n, a), n.off(e, i)
                    }, i)
                }
            }, { key: "off", value: function(e, t) { var i = this; return e.split(" ").forEach(function(e) { void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e].forEach(function(n, s) { n === t && i.eventsListeners[e].splice(s, 1) }) }), i } }, {
                key: "emit",
                value: function() {
                    var e, t, i, n = this;
                    if (!n.eventsListeners) return n;
                    for (var s = arguments.length, a = new Array(s), r = 0; r < s; r++) a[r] = arguments[r];
                    return "string" == typeof a[0] || Array.isArray(a[0]) ? (e = a[0], t = a.slice(1, a.length), i = n) : (e = a[0].events, t = a[0].data, i = a[0].context || n), (Array.isArray(e) ? e : e.split(" ")).forEach(function(e) {
                        if (n.eventsListeners[e]) {
                            var s = [];
                            n.eventsListeners[e].forEach(function(e) { s.push(e) }), s.forEach(function(e) { e.apply(i, t) })
                        }
                    }), n
                }
            }, {
                key: "useModulesParams",
                value: function(e) {
                    var t = this;
                    t.modules && Object.keys(t.modules).forEach(function(i) {
                        var n = t.modules[i];
                        n.params && f.extend(e, n.params)
                    })
                }
            }, {
                key: "useModules",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = this;
                    t.modules && Object.keys(t.modules).forEach(function(i) {
                        var n = t.modules[i],
                            s = e[i] || {};
                        n.instance && Object.keys(n.instance).forEach(function(e) {
                            var i = n.instance[e];
                            t[e] = "function" == typeof i ? i.bind(t) : i
                        }), n.on && t.on && Object.keys(n.on).forEach(function(e) { t.on(e, n.on[e]) }), n.create && n.create.bind(t)(s)
                    })
                }
            }], [{
                key: "installModule",
                value: function(e) {
                    var t = this;
                    t.prototype.modules || (t.prototype.modules = {});
                    var i = e.name || "".concat(Object.keys(t.prototype.modules).length, "_").concat(f.now());
                    if (t.prototype.modules[i] = e, e.proto && Object.keys(e.proto).forEach(function(i) { t.prototype[i] = e.proto[i] }), e.static && Object.keys(e.static).forEach(function(i) { t[i] = e.static[i] }), e.install) {
                        for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) s[a - 1] = arguments[a];
                        e.install.apply(t, s)
                    }
                    return t
                }
            }, { key: "use", value: function(e) { var t = this; if (Array.isArray(e)) return e.forEach(function(e) { return t.installModule(e) }), t; for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) n[s - 1] = arguments[s]; return t.installModule.apply(t, [e].concat(n)) } }, { key: "components", set: function(e) { this.use && this.use(e) } }]), e
        }();
    var g = {
        updateSize: function() {
            var e, t, i = this.$el;
            e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), f.extend(this, { width: e, height: t, size: this.isHorizontal() ? e : t }))
        },
        updateSlides: function() {
            var e = this.params,
                t = this.$wrapperEl,
                i = this.size,
                n = this.rtlTranslate,
                a = this.wrongRTL,
                r = t.children(".".concat(this.params.slideClass)),
                o = this.virtual && e.virtual.enabled ? this.virtual.slides.length : r.length,
                l = [],
                c = [],
                d = [],
                u = e.slidesOffsetBefore;
            "function" == typeof u && (u = e.slidesOffsetBefore.call(this));
            var h = e.slidesOffsetAfter;
            "function" == typeof h && (h = e.slidesOffsetAfter.call(this));
            var p = o,
                m = this.snapGrid.length,
                g = this.snapGrid.length,
                y = e.spaceBetween,
                w = -u,
                b = 0,
                x = 0;
            if (void 0 !== i) {
                var T, E;
                "string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * i), this.virtualSize = -y, n ? r.css({ marginLeft: "", marginTop: "" }) : r.css({ marginRight: "", marginBottom: "" }), e.slidesPerColumn > 1 && (T = Math.floor(o / e.slidesPerColumn) === o / this.params.slidesPerColumn ? o : Math.ceil(o / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (T = Math.max(T, e.slidesPerView * e.slidesPerColumn)));
                for (var C, S = e.slidesPerColumn, k = T / S, M = k - (e.slidesPerColumn * k - o), P = 0; P < o; P += 1) {
                    E = 0;
                    var D = r.eq(P);
                    if (e.slidesPerColumn > 1) {
                        var A = void 0,
                            L = void 0,
                            $ = void 0;
                        "column" === e.slidesPerColumnFill ? ($ = P - (L = Math.floor(P / S)) * S, (L > M || L === M && $ === S - 1) && ($ += 1) >= S && ($ = 0, L += 1), A = L + $ * T / S, D.css({ "-webkit-box-ordinal-group": A, "-moz-box-ordinal-group": A, "-ms-flex-order": A, "-webkit-order": A, order: A })) : L = P - ($ = Math.floor(P / k)) * k, D.css("margin-".concat(this.isHorizontal() ? "top" : "left"), 0 !== $ && e.spaceBetween && "".concat(e.spaceBetween, "px")).attr("data-swiper-column", L).attr("data-swiper-row", $)
                    }
                    if ("none" !== D.css("display")) {
                        if ("auto" === e.slidesPerView) {
                            var z = s.window.getComputedStyle(D[0], null);
                            E = this.isHorizontal() ? D[0].getBoundingClientRect().width + parseFloat(z.getPropertyValue("margin-left")) + parseFloat(z.getPropertyValue("margin-right")) : D[0].getBoundingClientRect().height + parseFloat(z.getPropertyValue("margin-top")) + parseFloat(z.getPropertyValue("margin-bottom")), e.roundLengths && (E = Math.floor(E))
                        } else E = (i - (e.slidesPerView - 1) * y) / e.slidesPerView, e.roundLengths && (E = Math.floor(E)), r[P] && (this.isHorizontal() ? r[P].style.width = "".concat(E, "px") : r[P].style.height = "".concat(E, "px"));
                        r[P] && (r[P].swiperSlideSize = E), d.push(E), e.centeredSlides ? (w = w + E / 2 + b / 2 + y, 0 === b && 0 !== P && (w = w - i / 2 - y), 0 === P && (w = w - i / 2 - y), Math.abs(w) < .001 && (w = 0), x % e.slidesPerGroup == 0 && l.push(w), c.push(w)) : (x % e.slidesPerGroup == 0 && l.push(w), c.push(w), w = w + E + y), this.virtualSize += E + y, b = E, x += 1
                    }
                }
                if (this.virtualSize = Math.max(this.virtualSize, i) + h, n && a && ("slide" === e.effect || "coverflow" === e.effect) && t.css({ width: "".concat(this.virtualSize + e.spaceBetween, "px") }), v.flexbox && !e.setWrapperSize || (this.isHorizontal() ? t.css({ width: "".concat(this.virtualSize + e.spaceBetween, "px") }) : t.css({ height: "".concat(this.virtualSize + e.spaceBetween, "px") })), e.slidesPerColumn > 1 && (this.virtualSize = (E + e.spaceBetween) * T, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? t.css({ width: "".concat(this.virtualSize + e.spaceBetween, "px") }) : t.css({ height: "".concat(this.virtualSize + e.spaceBetween, "px") }), e.centeredSlides)) {
                    C = [];
                    for (var N = 0; N < l.length; N += 1) l[N] < this.virtualSize + l[0] && C.push(l[N]);
                    l = C
                }
                if (!e.centeredSlides) {
                    C = [];
                    for (var I = 0; I < l.length; I += 1) l[I] <= this.virtualSize - i && C.push(l[I]);
                    l = C, Math.floor(this.virtualSize - i) - Math.floor(l[l.length - 1]) > 1 && l.push(this.virtualSize - i)
                }
                0 === l.length && (l = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? n ? r.css({ marginLeft: "".concat(y, "px") }) : r.css({ marginRight: "".concat(y, "px") }) : r.css({ marginBottom: "".concat(y, "px") })), f.extend(this, { slides: r, snapGrid: l, slidesGrid: c, slidesSizesGrid: d }), o !== p && this.emit("slidesLengthChange"), l.length !== m && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), c.length !== g && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
            }
        },
        updateAutoHeight: function(e) {
            var t, i = [],
                n = 0;
            if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                    var s = this.activeIndex + t;
                    if (s > this.slides.length) break;
                    i.push(this.slides.eq(s)[0])
                } else i.push(this.slides.eq(this.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var a = i[t].offsetHeight;
                    n = a > n ? a : n
                }
            n && this.$wrapperEl.css("height", "".concat(n, "px"))
        },
        updateSlidesOffset: function() { for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop },
        updateSlidesProgress: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.translate || 0,
                t = this.params,
                i = this.slides,
                n = this.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                var s = -e;
                n && (s = e), i.removeClass(t.slideVisibleClass);
                for (var a = 0; a < i.length; a += 1) {
                    var r = i[a],
                        o = (s + (t.centeredSlides ? this.minTranslate() : 0) - r.swiperSlideOffset) / (r.swiperSlideSize + t.spaceBetween);
                    if (t.watchSlidesVisibility) {
                        var l = -(s - r.swiperSlideOffset),
                            c = l + this.slidesSizesGrid[a];
                        (l >= 0 && l < this.size || c > 0 && c <= this.size || l <= 0 && c >= this.size) && i.eq(a).addClass(t.slideVisibleClass)
                    }
                    r.progress = n ? -o : o
                }
            }
        },
        updateProgress: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.translate || 0,
                t = this.params,
                i = this.maxTranslate() - this.minTranslate(),
                n = this.progress,
                s = this.isBeginning,
                a = this.isEnd,
                r = s,
                o = a;
            0 === i ? (n = 0, s = !0, a = !0) : (s = (n = (e - this.minTranslate()) / i) <= 0, a = n >= 1), f.extend(this, { progress: n, isBeginning: s, isEnd: a }), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), s && !r && this.emit("reachBeginning toEdge"), a && !o && this.emit("reachEnd toEdge"), (r && !s || o && !a) && this.emit("fromEdge"), this.emit("progress", n)
        },
        updateSlidesClasses: function() {
            var e, t = this.slides,
                i = this.params,
                n = this.$wrapperEl,
                s = this.activeIndex,
                a = this.realIndex,
                r = this.virtual && i.virtual.enabled;
            t.removeClass("".concat(i.slideActiveClass, " ").concat(i.slideNextClass, " ").concat(i.slidePrevClass, " ").concat(i.slideDuplicateActiveClass, " ").concat(i.slideDuplicateNextClass, " ").concat(i.slideDuplicatePrevClass)), (e = r ? this.$wrapperEl.find(".".concat(i.slideClass, '[data-swiper-slide-index="').concat(s, '"]')) : t.eq(s)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? n.children(".".concat(i.slideClass, ":not(.").concat(i.slideDuplicateClass, ')[data-swiper-slide-index="').concat(a, '"]')).addClass(i.slideDuplicateActiveClass) : n.children(".".concat(i.slideClass, ".").concat(i.slideDuplicateClass, '[data-swiper-slide-index="').concat(a, '"]')).addClass(i.slideDuplicateActiveClass));
            var o = e.nextAll(".".concat(i.slideClass)).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e.prevAll(".".concat(i.slideClass)).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? n.children(".".concat(i.slideClass, ":not(.").concat(i.slideDuplicateClass, ')[data-swiper-slide-index="').concat(o.attr("data-swiper-slide-index"), '"]')).addClass(i.slideDuplicateNextClass) : n.children(".".concat(i.slideClass, ".").concat(i.slideDuplicateClass, '[data-swiper-slide-index="').concat(o.attr("data-swiper-slide-index"), '"]')).addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? n.children(".".concat(i.slideClass, ":not(.").concat(i.slideDuplicateClass, ')[data-swiper-slide-index="').concat(l.attr("data-swiper-slide-index"), '"]')).addClass(i.slideDuplicatePrevClass) : n.children(".".concat(i.slideClass, ".").concat(i.slideDuplicateClass, '[data-swiper-slide-index="').concat(l.attr("data-swiper-slide-index"), '"]')).addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            var t, i = this.rtlTranslate ? this.translate : -this.translate,
                n = this.slidesGrid,
                s = this.snapGrid,
                a = this.params,
                r = this.activeIndex,
                o = this.realIndex,
                l = this.snapIndex,
                c = e;
            if (void 0 === c) {
                for (var d = 0; d < n.length; d += 1) void 0 !== n[d + 1] ? i >= n[d] && i < n[d + 1] - (n[d + 1] - n[d]) / 2 ? c = d : i >= n[d] && i < n[d + 1] && (c = d + 1) : i >= n[d] && (c = d);
                a.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
            }
            if ((t = s.indexOf(i) >= 0 ? s.indexOf(i) : Math.floor(c / a.slidesPerGroup)) >= s.length && (t = s.length - 1), c !== r) {
                var u = parseInt(this.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                f.extend(this, { snapIndex: t, realIndex: u, previousIndex: r, activeIndex: c }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== u && this.emit("realIndexChange"), this.emit("slideChange")
            } else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"))
        },
        updateClickedSlide: function(e) {
            var t = this.params,
                i = (0, n.$)(e.target).closest(".".concat(t.slideClass))[0],
                s = !1;
            if (i)
                for (var a = 0; a < this.slides.length; a += 1) this.slides[a] === i && (s = !0);
            if (!i || !s) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
            this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt((0, n.$)(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = (0, n.$)(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
        }
    };
    var y = {
        getTranslate: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.isHorizontal() ? "x" : "y",
                t = this.params,
                i = this.rtlTranslate,
                n = this.translate,
                s = this.$wrapperEl;
            if (t.virtualTranslate) return i ? -n : n;
            var a = f.getTranslate(s[0], e);
            return i && (a = -a), a || 0
        },
        setTranslate: function(e, t) {
            var i = this.rtlTranslate,
                n = this.params,
                s = this.$wrapperEl,
                a = this.progress,
                r = 0,
                o = 0;
            this.isHorizontal() ? r = i ? -e : e : o = e, n.roundLengths && (r = Math.floor(r), o = Math.floor(o)), n.virtualTranslate || (v.transforms3d ? s.transform("translate3d(".concat(r, "px, ").concat(o, "px, ").concat(0, "px)")) : s.transform("translate(".concat(r, "px, ").concat(o, "px)"))), this.translate = this.isHorizontal() ? r : o;
            var l = this.maxTranslate() - this.minTranslate();
            (0 === l ? 0 : (e - this.minTranslate()) / l) !== a && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
        },
        minTranslate: function() { return -this.snapGrid[0] },
        maxTranslate: function() { return -this.snapGrid[this.snapGrid.length - 1] }
    };
    var w = {
        setTransition: function(e, t) { this.$wrapperEl.transition(e), this.emit("setTransition", e, t) },
        transitionStart: function() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                t = arguments.length > 1 ? arguments[1] : void 0,
                i = this.activeIndex,
                n = this.params,
                s = this.previousIndex;
            n.autoHeight && this.updateAutoHeight();
            var a = t;
            if (a || (a = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionStart"), e && i !== s) {
                if ("reset" === a) return void this.emit("slideResetTransitionStart");
                this.emit("slideChangeTransitionStart"), "next" === a ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
            }
        },
        transitionEnd: function() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                t = arguments.length > 1 ? arguments[1] : void 0,
                i = this.activeIndex,
                n = this.previousIndex;
            this.animating = !1, this.setTransition(0);
            var s = t;
            if (s || (s = i > n ? "next" : i < n ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== n) {
                if ("reset" === s) return void this.emit("slideResetTransitionEnd");
                this.emit("slideChangeTransitionEnd"), "next" === s ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
            }
        }
    };
    var b = {
        slideTo: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                n = arguments.length > 3 ? arguments[3] : void 0,
                s = this,
                a = e;
            a < 0 && (a = 0);
            var r = s.params,
                o = s.snapGrid,
                l = s.slidesGrid,
                c = s.previousIndex,
                d = s.activeIndex,
                u = s.rtlTranslate,
                h = s.$wrapperEl;
            if (s.animating && r.preventIntercationOnTransition) return !1;
            var p = Math.floor(a / r.slidesPerGroup);
            p >= o.length && (p = o.length - 1), (d || r.initialSlide || 0) === (c || 0) && i && s.emit("beforeSlideChangeStart");
            var f, m = -o[p];
            if (s.updateProgress(m), r.normalizeSlideIndex)
                for (var g = 0; g < l.length; g += 1) - Math.floor(100 * m) >= Math.floor(100 * l[g]) && (a = g);
            if (s.initialized && a !== d) { if (!s.allowSlideNext && m < s.translate && m < s.minTranslate()) return !1; if (!s.allowSlidePrev && m > s.translate && m > s.maxTranslate() && (d || 0) !== a) return !1 }
            return f = a > d ? "next" : a < d ? "prev" : "reset", u && -m === s.translate || !u && m === s.translate ? (s.updateActiveIndex(a), r.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== r.effect && s.setTranslate(m), "reset" !== f && (s.transitionStart(i, f), s.transitionEnd(i, f)), !1) : (0 !== t && v.transition ? (s.setTransition(t), s.setTranslate(m), s.updateActiveIndex(a), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(i, f), s.animating || (s.animating = !0, h.transitionEnd(function() { s && !s.destroyed && s.transitionEnd(i, f) }))) : (s.setTransition(0), s.setTranslate(m), s.updateActiveIndex(a), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(i, f), s.transitionEnd(i, f)), !0)
        },
        slideToLoop: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                n = arguments.length > 3 ? arguments[3] : void 0,
                s = e;
            return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, i, n)
        },
        slideNext: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                i = arguments.length > 2 ? arguments[2] : void 0,
                n = this.params,
                s = this.animating;
            return n.loop ? !s && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + n.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + n.slidesPerGroup, e, t, i)
        },
        slidePrev: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                i = arguments.length > 2 ? arguments[2] : void 0,
                n = this.params,
                s = this.animating;
            return n.loop ? !s && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex - 1, e, t, i)) : this.slideTo(this.activeIndex - 1, e, t, i)
        },
        slideReset: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                i = arguments.length > 2 ? arguments[2] : void 0;
            return this.slideTo(this.activeIndex, e, t, i)
        },
        slideToClosest: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                i = arguments.length > 2 ? arguments[2] : void 0,
                n = this.activeIndex,
                s = Math.floor(n / this.params.slidesPerGroup);
            if (s < this.snapGrid.length - 1) {
                var a = this.rtlTranslate ? this.translate : -this.translate,
                    r = this.snapGrid[s];
                a - r > (this.snapGrid[s + 1] - r) / 2 && (n = this.params.slidesPerGroup)
            }
            return this.slideTo(n, e, t, i)
        },
        slideToClickedSlide: function() {
            var e, t = this,
                i = t.params,
                s = t.$wrapperEl,
                a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                r = t.clickedIndex;
            if (i.loop) {
                if (t.animating) return;
                e = parseInt((0, n.$)(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), r = s.children(".".concat(i.slideClass, '[data-swiper-slide-index="').concat(e, '"]:not(.').concat(i.slideDuplicateClass, ")")).eq(0).index(), f.nextTick(function() { t.slideTo(r) })) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(), r = s.children(".".concat(i.slideClass, '[data-swiper-slide-index="').concat(e, '"]:not(.').concat(i.slideDuplicateClass, ")")).eq(0).index(), f.nextTick(function() { t.slideTo(r) })) : t.slideTo(r)
            } else t.slideTo(r)
        }
    };
    var x = {
        loopCreate: function() {
            var e = this,
                t = e.params,
                i = e.$wrapperEl;
            i.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass)).remove();
            var a = i.children(".".concat(t.slideClass));
            if (t.loopFillGroupWithBlank) {
                var r = t.slidesPerGroup - a.length % t.slidesPerGroup;
                if (r !== t.slidesPerGroup) {
                    for (var o = 0; o < r; o += 1) {
                        var l = (0, n.$)(s.document.createElement("div")).addClass("".concat(t.slideClass, " ").concat(t.slideBlankClass));
                        i.append(l)
                    }
                    a = i.children(".".concat(t.slideClass))
                }
            }
            "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = a.length), e.loopedSlides = parseInt(t.loopedSlides || t.slidesPerView, 10), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length);
            var c = [],
                d = [];
            a.each(function(t, i) {
                var s = (0, n.$)(i);
                t < e.loopedSlides && d.push(i), t < a.length && t >= a.length - e.loopedSlides && c.push(i), s.attr("data-swiper-slide-index", t)
            });
            for (var u = 0; u < d.length; u += 1) i.append((0, n.$)(d[u].cloneNode(!0)).addClass(t.slideDuplicateClass));
            for (var h = c.length - 1; h >= 0; h -= 1) i.prepend((0, n.$)(c[h].cloneNode(!0)).addClass(t.slideDuplicateClass))
        },
        loopFix: function() {
            var e, t = this.params,
                i = this.activeIndex,
                n = this.slides,
                s = this.loopedSlides,
                a = this.allowSlidePrev,
                r = this.allowSlideNext,
                o = this.snapGrid,
                l = this.rtlTranslate;
            this.allowSlidePrev = !0, this.allowSlideNext = !0;
            var c = -o[i] - this.getTranslate();
            i < s ? (e = n.length - 3 * s + i, e += s, this.slideTo(e, 0, !1, !0) && 0 !== c && this.setTranslate((l ? -this.translate : this.translate) - c)) : ("auto" === t.slidesPerView && i >= 2 * s || i > n.length - 2 * t.slidesPerView) && (e = -n.length + i + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== c && this.setTranslate((l ? -this.translate : this.translate) - c));
            this.allowSlidePrev = a, this.allowSlideNext = r
        },
        loopDestroy: function() {
            var e = this.$wrapperEl,
                t = this.params,
                i = this.slides;
            e.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass)).remove(), i.removeAttr("data-swiper-slide-index")
        }
    };
    var T = {
        setGrabCursor: function(e) {
            if (!v.touch && this.params.simulateTouch) {
                var t = this.el;
                t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
            }
        },
        unsetGrabCursor: function() { v.touch || (this.el.style.cursor = "") }
    };
    var E = {
            appendSlide: function(e) {
                var t = this.$wrapperEl,
                    i = this.params;
                if (i.loop && this.loopDestroy(), "object" === d(e) && "length" in e)
                    for (var n = 0; n < e.length; n += 1) e[n] && t.append(e[n]);
                else t.append(e);
                i.loop && this.loopCreate(), i.observer && v.observer || this.update()
            },
            prependSlide: function(e) {
                var t = this.params,
                    i = this.$wrapperEl,
                    n = this.activeIndex;
                t.loop && this.loopDestroy();
                var s = n + 1;
                if ("object" === d(e) && "length" in e) {
                    for (var a = 0; a < e.length; a += 1) e[a] && i.prepend(e[a]);
                    s = n + e.length
                } else i.prepend(e);
                t.loop && this.loopCreate(), t.observer && v.observer || this.update(), this.slideTo(s, 0, !1)
            },
            removeSlide: function(e) {
                var t = this.params,
                    i = this.$wrapperEl,
                    n = this.activeIndex;
                t.loop && (this.loopDestroy(), this.slides = i.children(".".concat(t.slideClass)));
                var s, a = n;
                if ("object" === d(e) && "length" in e) {
                    for (var r = 0; r < e.length; r += 1) s = e[r], this.slides[s] && this.slides.eq(s).remove(), s < a && (a -= 1);
                    a = Math.max(a, 0)
                } else s = e, this.slides[s] && this.slides.eq(s).remove(), s < a && (a -= 1), a = Math.max(a, 0);
                t.loop && this.loopCreate(), t.observer && v.observer || this.update(), t.loop ? this.slideTo(a + this.loopedSlides, 0, !1) : this.slideTo(a, 0, !1)
            },
            removeAllSlides: function() {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }
        },
        C = function() {
            var e = s.window.navigator.userAgent,
                t = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: s.window.cordova || s.window.phonegap, phonegap: s.window.cordova || s.window.phonegap },
                i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                n = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                a = e.match(/(iPad).*OS\s([\d_]+)/),
                r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                o = !a && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (i && (t.os = "windows", t.osVersion = i[2], t.windows = !0), n && !i && (t.os = "android", t.osVersion = n[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (a || o || r) && (t.os = "ios", t.ios = !0), o && !r && (t.osVersion = o[2].replace(/_/g, "."), t.iphone = !0), a && (t.osVersion = a[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (o || a || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
                var l = t.osVersion.split("."),
                    c = s.document.querySelector('meta[name="viewport"]');
                t.minimalUi = !t.webView && (r || o) && (1 * l[0] == 7 ? 1 * l[1] >= 1 : 1 * l[0] > 7) && c && c.getAttribute("content").indexOf("minimal-ui") >= 0
            }
            return t.pixelRatio = s.window.devicePixelRatio || 1, t
        }();

    function S() {
        var e = this.params,
            t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext,
                n = this.allowSlidePrev;
            if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), e.freeMode) {
                var s = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
                this.setTranslate(s), this.updateActiveIndex(), this.updateSlidesClasses(), e.autoHeight && this.updateAutoHeight()
            } else this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
            this.allowSlidePrev = n, this.allowSlideNext = i
        }
    }
    var k = {
        attachEvents: function() {
            var e = this.params,
                t = this.touchEvents,
                i = this.el,
                a = this.wrapperEl;
            this.onTouchStart = function(e) {
                var t = this.touchEventsData,
                    i = this.params,
                    a = this.touches;
                if (!this.animating || !i.preventIntercationOnTransition) {
                    var r = e;
                    if (r.originalEvent && (r = r.originalEvent), t.isTouchEvent = "touchstart" === r.type, (t.isTouchEvent || !("which" in r) || 3 !== r.which) && (!t.isTouched || !t.isMoved))
                        if (i.noSwiping && (0, n.$)(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : ".".concat(i.noSwipingClass))[0]) this.allowClick = !0;
                        else if (!i.swipeHandler || (0, n.$)(r).closest(i.swipeHandler)[0]) {
                        a.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, a.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
                        var o = a.currentX,
                            l = a.currentY;
                        if (!(C.ios && !C.cordova && i.iOSEdgeSwipeDetection && o <= i.iOSEdgeSwipeThreshold && o >= s.window.screen.width - i.iOSEdgeSwipeThreshold)) {
                            if (f.extend(t, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), a.startX = o, a.startY = l, t.touchStartTime = f.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, i.threshold > 0 && (t.allowThresholdMove = !1), "touchstart" !== r.type) {
                                var c = !0;
                                (0, n.$)(r.target).is(t.formElements) && (c = !1), s.document.activeElement && (0, n.$)(s.document.activeElement).is(t.formElements) && s.document.activeElement !== r.target && s.document.activeElement.blur(), c && this.allowTouchMove && r.preventDefault()
                            }
                            this.emit("touchStart", r)
                        }
                    }
                }
            }.bind(this), this.onTouchMove = function(e) {
                var t = this.touchEventsData,
                    i = this.params,
                    a = this.touches,
                    r = this.rtlTranslate,
                    o = e;
                if (o.originalEvent && (o = o.originalEvent), t.isTouched) {
                    if (!t.isTouchEvent || "mousemove" !== o.type) {
                        var l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
                            c = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
                        if (o.preventedByNestedSwiper) return a.startX = l, void(a.startY = c);
                        if (!this.allowTouchMove) return this.allowClick = !1, void(t.isTouched && (f.extend(a, { startX: l, startY: c, currentX: l, currentY: c }), t.touchStartTime = f.now()));
                        if (t.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                            if (this.isVertical()) { if (c < a.startY && this.translate <= this.maxTranslate() || c > a.startY && this.translate >= this.minTranslate()) return t.isTouched = !1, void(t.isMoved = !1) } else if (l < a.startX && this.translate <= this.maxTranslate() || l > a.startX && this.translate >= this.minTranslate()) return;
                        if (t.isTouchEvent && s.document.activeElement && o.target === s.document.activeElement && (0, n.$)(o.target).is(t.formElements)) return t.isMoved = !0, void(this.allowClick = !1);
                        if (t.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
                            a.currentX = l, a.currentY = c;
                            var d, u = a.currentX - a.startX,
                                h = a.currentY - a.startY;
                            if (void 0 === t.isScrolling && (this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? t.isScrolling = !1 : u * u + h * h >= 25 && (d = 180 * Math.atan2(Math.abs(h), Math.abs(u)) / Math.PI, t.isScrolling = this.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)), t.isScrolling && this.emit("touchMoveOpposite", o), "undefined" == typeof startMoving && (a.currentX === a.startX && a.currentY === a.startY || (t.startMoving = !0)), t.isScrolling) t.isTouched = !1;
                            else if (t.startMoving) {
                                this.allowClick = !1, o.preventDefault(), i.touchMoveStopPropagation && !i.nested && o.stopPropagation(), t.isMoved || (i.loop && this.loopFix(), t.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), t.allowMomentumBounce = !1, !i.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)), this.emit("sliderMove", o), t.isMoved = !0;
                                var p = this.isHorizontal() ? u : h;
                                a.diff = p, p *= i.touchRatio, r && (p = -p), this.swipeDirection = p > 0 ? "prev" : "next", t.currentTranslate = p + t.startTranslate;
                                var v = !0,
                                    m = i.resistanceRatio;
                                if (i.touchReleaseOnEdges && (m = 0), p > 0 && t.currentTranslate > this.minTranslate() ? (v = !1, i.resistance && (t.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + t.startTranslate + p, m))) : p < 0 && t.currentTranslate < this.maxTranslate() && (v = !1, i.resistance && (t.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - t.startTranslate - p, m))), v && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && t.currentTranslate < t.startTranslate && (t.currentTranslate = t.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && t.currentTranslate > t.startTranslate && (t.currentTranslate = t.startTranslate), i.threshold > 0) { if (!(Math.abs(p) > i.threshold || t.allowThresholdMove)) return void(t.currentTranslate = t.startTranslate); if (!t.allowThresholdMove) return t.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, t.currentTranslate = t.startTranslate, void(a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY) }
                                i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), i.freeMode && (0 === t.velocities.length && t.velocities.push({ position: a[this.isHorizontal() ? "startX" : "startY"], time: t.touchStartTime }), t.velocities.push({ position: a[this.isHorizontal() ? "currentX" : "currentY"], time: f.now() })), this.updateProgress(t.currentTranslate), this.setTranslate(t.currentTranslate))
                            }
                        }
                    }
                } else t.startMoving && t.isScrolling && this.emit("touchMoveOpposite", o)
            }.bind(this), this.onTouchEnd = function(e) {
                var t = this,
                    i = t.touchEventsData,
                    n = t.params,
                    s = t.touches,
                    a = t.rtlTranslate,
                    r = t.$wrapperEl,
                    o = t.slidesGrid,
                    l = t.snapGrid,
                    c = e;
                if (c.originalEvent && (c = c.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", c), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
                n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var d, u = f.now(),
                    h = u - i.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(c), t.emit("tap", c), h < 300 && u - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = f.nextTick(function() { t && !t.destroyed && t.emit("click", c) }, 300)), h < 300 && u - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", c))), i.lastClickTime = f.now(), f.nextTick(function() { t.destroyed || (t.allowClick = !0) }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === s.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
                if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, d = n.followFinger ? a ? t.translate : -t.translate : -i.currentTranslate, n.freeMode) {
                    if (d < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (d > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                    if (n.freeModeMomentum) {
                        if (i.velocities.length > 1) {
                            var p = i.velocities.pop(),
                                v = i.velocities.pop(),
                                m = p.position - v.position,
                                g = p.time - v.time;
                            t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || f.now() - p.time > 300) && (t.velocity = 0)
                        } else t.velocity = 0;
                        t.velocity *= n.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                        var y = 1e3 * n.freeModeMomentumRatio,
                            w = t.velocity * y,
                            b = t.translate + w;
                        a && (b = -b);
                        var x, T = !1,
                            E = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                        if (b < t.maxTranslate()) n.freeModeMomentumBounce ? (b + t.maxTranslate() < -E && (b = t.maxTranslate() - E), x = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : b = t.maxTranslate();
                        else if (b > t.minTranslate()) n.freeModeMomentumBounce ? (b - t.minTranslate() > E && (b = t.minTranslate() + E), x = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : b = t.minTranslate();
                        else if (n.freeModeSticky) {
                            for (var C, S = 0; S < l.length; S += 1)
                                if (l[S] > -b) { C = S; break }
                            b = -(b = Math.abs(l[C] - b) < Math.abs(l[C - 1] - b) || "next" === t.swipeDirection ? l[C] : l[C - 1])
                        }
                        if (0 !== t.velocity) y = a ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity);
                        else if (n.freeModeSticky) return void t.slideToClosest();
                        n.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(y), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating = !0, r.transitionEnd(function() { t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(n.speed), t.setTranslate(x), r.transitionEnd(function() { t && !t.destroyed && t.transitionEnd() })) })) : t.velocity ? (t.updateProgress(b), t.setTransition(y), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, r.transitionEnd(function() { t && !t.destroyed && t.transitionEnd() }))) : t.updateProgress(b), t.updateActiveIndex(), t.updateSlidesClasses()
                    } else if (n.freeModeSticky) return void t.slideToClosest();
                    (!n.freeModeMomentum || h >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                } else { for (var k = 0, M = t.slidesSizesGrid[0], P = 0; P < o.length; P += n.slidesPerGroup) void 0 !== o[P + n.slidesPerGroup] ? d >= o[P] && d < o[P + n.slidesPerGroup] && (k = P, M = o[P + n.slidesPerGroup] - o[P]) : d >= o[P] && (k = P, M = o[o.length - 1] - o[o.length - 2]); var D = (d - o[k]) / M; if (h > n.longSwipesMs) { if (!n.longSwipes) return void t.slideTo(t.activeIndex); "next" === t.swipeDirection && (D >= n.longSwipesRatio ? t.slideTo(k + n.slidesPerGroup) : t.slideTo(k)), "prev" === t.swipeDirection && (D > 1 - n.longSwipesRatio ? t.slideTo(k + n.slidesPerGroup) : t.slideTo(k)) } else { if (!n.shortSwipes) return void t.slideTo(t.activeIndex); "next" === t.swipeDirection && t.slideTo(k + n.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(k) } }
            }.bind(this), this.onClick = function(e) { this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation())) }.bind(this);
            var r = "container" === e.touchEventsTarget ? i : a,
                o = !!e.nested;
            if (v.touch || !v.pointerEvents && !v.prefixedPointerEvents) {
                if (v.touch) {
                    var l = !("touchstart" !== t.start || !v.passiveListener || !e.passiveListeners) && { passive: !0, capture: !1 };
                    r.addEventListener(t.start, this.onTouchStart, l), r.addEventListener(t.move, this.onTouchMove, v.passiveListener ? { passive: !1, capture: o } : o), r.addEventListener(t.end, this.onTouchEnd, l)
                }(e.simulateTouch && !C.ios && !C.android || e.simulateTouch && !v.touch && C.ios) && (r.addEventListener("mousedown", this.onTouchStart, !1), s.document.addEventListener("mousemove", this.onTouchMove, o), s.document.addEventListener("mouseup", this.onTouchEnd, !1))
            } else r.addEventListener(t.start, this.onTouchStart, !1), s.document.addEventListener(t.move, this.onTouchMove, o), s.document.addEventListener(t.end, this.onTouchEnd, !1);
            (e.preventClicks || e.preventClicksPropagation) && r.addEventListener("click", this.onClick, !0), this.on("resize observerUpdate", S, !0)
        },
        detachEvents: function() {
            var e = this.params,
                t = this.touchEvents,
                i = this.el,
                n = this.wrapperEl,
                a = "container" === e.touchEventsTarget ? i : n,
                r = !!e.nested;
            if (v.touch || !v.pointerEvents && !v.prefixedPointerEvents) {
                if (v.touch) {
                    var o = !("onTouchStart" !== t.start || !v.passiveListener || !e.passiveListeners) && { passive: !0, capture: !1 };
                    a.removeEventListener(t.start, this.onTouchStart, o), a.removeEventListener(t.move, this.onTouchMove, r), a.removeEventListener(t.end, this.onTouchEnd, o)
                }(e.simulateTouch && !C.ios && !C.android || e.simulateTouch && !v.touch && C.ios) && (a.removeEventListener("mousedown", this.onTouchStart, !1), s.document.removeEventListener("mousemove", this.onTouchMove, r), s.document.removeEventListener("mouseup", this.onTouchEnd, !1))
            } else a.removeEventListener(t.start, this.onTouchStart, !1), s.document.removeEventListener(t.move, this.onTouchMove, r), s.document.removeEventListener(t.end, this.onTouchEnd, !1);
            (e.preventClicks || e.preventClicksPropagation) && a.removeEventListener("click", this.onClick, !0), this.off("resize observerUpdate", S)
        }
    };
    var M = {
            setBreakpoint: function() {
                var e = this.activeIndex,
                    t = this.loopedSlides,
                    i = void 0 === t ? 0 : t,
                    n = this.params,
                    s = n.breakpoints;
                if (s && (!s || 0 !== Object.keys(s).length)) {
                    var a = this.getBreakpoint(s);
                    if (a && this.currentBreakpoint !== a) {
                        var r = a in s ? s[a] : this.originalParams,
                            o = n.loop && r.slidesPerView !== n.slidesPerView;
                        f.extend(this.params, r), f.extend(this, { allowTouchMove: this.params.allowTouchMove, allowSlideNext: this.params.allowSlideNext, allowSlidePrev: this.params.allowSlidePrev }), this.currentBreakpoint = a, o && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", r)
                    }
                }
            },
            getBreakpoint: function(e) {
                if (e) {
                    var t = !1,
                        i = [];
                    Object.keys(e).forEach(function(e) { i.push(e) }), i.sort(function(e, t) { return parseInt(e, 10) - parseInt(t, 10) });
                    for (var n = 0; n < i.length; n += 1) {
                        var a = i[n];
                        a >= s.window.innerWidth && !t && (t = a)
                    }
                    return t || "max"
                }
            }
        },
        P = function() { return { isIE: !!s.window.navigator.userAgent.match(/Trident/g) || !!s.window.navigator.userAgent.match(/MSIE/g), isSafari: (e = s.window.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.window.navigator.userAgent) }; var e }();
    var D = { init: !0, direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, preventIntercationOnTransition: !1, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, watchOverflow: !1, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !0, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: !0 },
        A = {
            update: g,
            translate: y,
            transition: w,
            slide: b,
            loop: x,
            grabCursor: T,
            manipulation: E,
            events: k,
            breakpoints: M,
            checkOverflow: {
                checkOverflow: function() {
                    var e = this.isLocked;
                    this.isLocked = 1 === this.snapGrid.length, this.allowTouchMove = !this.isLocked, e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    var e = this.classNames,
                        t = this.params,
                        i = this.rtl,
                        n = this.$el,
                        s = [];
                    s.push(t.direction), t.freeMode && s.push("free-mode"), v.flexbox || s.push("no-flexbox"), t.autoHeight && s.push("autoheight"), i && s.push("rtl"), t.slidesPerColumn > 1 && s.push("multirow"), C.android && s.push("android"), C.ios && s.push("ios"), P.isIE && (v.pointerEvents || v.prefixedPointerEvents) && s.push("wp8-".concat(t.direction)), s.forEach(function(i) { e.push(t.containerModifierClass + i) }), n.addClass(e.join(" "))
                },
                removeClasses: function() {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function(e, t, i, n, a, r) {
                    var o;

                    function l() { r && r() }
                    e.complete && a ? l() : t ? ((o = new s.window.Image).onload = l, o.onerror = l, n && (o.sizes = n), i && (o.srcset = i), t && (o.src = t)) : l()
                },
                preloadImages: function() {
                    var e = this;

                    function t() { void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady"))) }
                    e.imagesToLoad = e.$el.find("img");
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var n = e.imagesToLoad[i];
                        e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        L = {},
        $ = function(e) {
            function t() {
                var e, i, s;
                o(this, t);
                for (var l = arguments.length, c = new Array(l), u = 0; u < l; u++) c[u] = arguments[u];
                1 === c.length && c[0].constructor && c[0].constructor === Object ? s = c[0] : (i = c[0], s = c[1]), s || (s = {}), s = f.extend({}, s), i && !s.el && (s.el = i), e = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, s)), Object.keys(A).forEach(function(e) { Object.keys(A[e]).forEach(function(i) { t.prototype[i] || (t.prototype[i] = A[e][i]) }) });
                var h = r(e);
                void 0 === h.modules && (h.modules = {}), Object.keys(h.modules).forEach(function(e) {
                    var t = h.modules[e];
                    if (t.params) {
                        var i = Object.keys(t.params)[0],
                            n = t.params[i];
                        if ("object" !== d(n)) return;
                        if (!(i in s && "enabled" in n)) return;
                        !0 === s[i] && (s[i] = { enabled: !0 }), "object" !== d(s[i]) || "enabled" in s[i] || (s[i].enabled = !0), s[i] || (s[i] = { enabled: !1 })
                    }
                });
                var p = f.extend({}, D);
                h.useModulesParams(p), h.params = f.extend({}, p, L, s), h.originalParams = f.extend({}, h.params), h.passedParams = f.extend({}, s), h.$ = n.$;
                var m = (0, n.$)(h.params.el);
                if (!(i = m[0])) return a(e, void 0);
                if (m.length > 1) {
                    var g = [];
                    return m.each(function(e, i) {
                        var n = f.extend({}, s, { el: i });
                        g.push(new t(n))
                    }), a(e, g)
                }
                i.swiper = h, m.data("swiper", h);
                var y, w, b = m.children(".".concat(h.params.wrapperClass));
                return f.extend(h, { $el: m, el: i, $wrapperEl: b, wrapperEl: b[0], classNames: [], slides: (0, n.$)(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: function() { return "horizontal" === h.params.direction }, isVertical: function() { return "vertical" === h.params.direction }, rtl: "rtl" === i.dir.toLowerCase() || "rtl" === m.css("direction"), rtlTranslate: "horizontal" === h.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === m.css("direction")), wrongRTL: "-webkit-box" === b.css("display"), activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, progress: 0, velocity: 0, animating: !1, allowSlideNext: h.params.allowSlideNext, allowSlidePrev: h.params.allowSlidePrev, touchEvents: (y = ["touchstart", "touchmove", "touchend"], w = ["mousedown", "mousemove", "mouseup"], v.pointerEvents ? w = ["pointerdown", "pointermove", "pointerup"] : v.prefixedPointerEvents && (w = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), h.touchEventsTouch = { start: y[0], move: y[1], end: y[2] }, h.touchEventsDesktop = { start: w[0], move: w[1], end: w[2] }, v.touch || !h.params.simulateTouch ? h.touchEventsTouch : h.touchEventsDesktop), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, formElements: "input, select, option, textarea, button, video", lastClickTime: f.now(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: !0, allowTouchMove: h.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), h.useModules(), h.params.init && h.init(), a(e, h)
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, m), c(t, [{
                key: "slidesPerViewDynamic",
                value: function() {
                    var e = this.params,
                        t = this.slides,
                        i = this.slidesGrid,
                        n = this.size,
                        s = this.activeIndex,
                        a = 1;
                    if (e.centeredSlides) { for (var r, o = t[s].swiperSlideSize, l = s + 1; l < t.length; l += 1) t[l] && !r && (a += 1, (o += t[l].swiperSlideSize) > n && (r = !0)); for (var c = s - 1; c >= 0; c -= 1) t[c] && !r && (a += 1, (o += t[c].swiperSlideSize) > n && (r = !0)) } else
                        for (var d = s + 1; d < t.length; d += 1) i[d] - i[s] < n && (a += 1);
                    return a
                }
            }, {
                key: "update",
                value: function() {
                    var e = this;
                    e && !e.destroyed && (e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (t(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || t(), e.emit("update"));

                    function t() {
                        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                }
            }, { key: "init", value: function() { this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init")) } }, {
                key: "destroy",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = this,
                        n = i.params,
                        s = i.$el,
                        a = i.$wrapperEl,
                        r = i.slides;
                    i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), t && (i.removeClasses(), s.removeAttr("style"), a.removeAttr("style"), r && r.length && r.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(e) { i.off(e) }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), f.deleteProps(i)), i.destroyed = !0
                }
            }], [{ key: "extendDefaults", value: function(e) { f.extend(L, e) } }, { key: "extendedDefaults", get: function() { return L } }, { key: "defaults", get: function() { return D } }, { key: "Class", get: function() { return m } }, { key: "$", get: function() { return n.$ } }]), t
        }(),
        z = { name: "device", proto: { device: C }, static: { device: C } },
        N = { name: "support", proto: { support: v }, static: { support: v } },
        I = { name: "browser", proto: { browser: P }, static: { browser: P } },
        O = {
            name: "resize",
            create: function() {
                var e = this;
                f.extend(e, { resize: { resizeHandler: function() { e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize")) }, orientationChangeHandler: function() { e && !e.destroyed && e.initialized && e.emit("orientationchange") } } })
            },
            on: { init: function() { s.window.addEventListener("resize", this.resize.resizeHandler), s.window.addEventListener("orientationchange", this.resize.orientationChangeHandler) }, destroy: function() { s.window.removeEventListener("resize", this.resize.resizeHandler), s.window.removeEventListener("orientationchange", this.resize.orientationChangeHandler) } }
        },
        H = {
            func: s.window.MutationObserver || s.window.WebkitMutationObserver,
            attach: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = this,
                    n = new(0, H.func)(function(e) { e.forEach(function(e) { i.emit("observerUpdate", e) }) });
                n.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), i.observer.observers.push(n)
            },
            init: function() {
                if (v.observer && this.params.observer) {
                    if (this.params.observeParents)
                        for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                    this.observer.attach(this.$el[0], { childList: !1 }), this.observer.attach(this.$wrapperEl[0], { attributes: !1 })
                }
            },
            destroy: function() { this.observer.observers.forEach(function(e) { e.disconnect() }), this.observer.observers = [] }
        },
        j = { name: "observer", params: { observer: !1, observeParents: !1 }, create: function() { f.extend(this, { observer: { init: H.init.bind(this), attach: H.attach.bind(this), destroy: H.destroy.bind(this), observers: [] } }) }, on: { init: function() { this.observer.init() }, destroy: function() { this.observer.destroy() } } },
        q = {
            update: function(e) {
                var t = this,
                    i = t.params,
                    n = i.slidesPerView,
                    s = i.slidesPerGroup,
                    a = i.centeredSlides,
                    r = t.virtual,
                    o = r.from,
                    l = r.to,
                    c = r.slides,
                    d = r.slidesGrid,
                    u = r.renderSlide,
                    h = r.offset;
                t.updateActiveIndex();
                var p, v, m, g = t.activeIndex || 0;
                p = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", a ? (v = Math.floor(n / 2) + s, m = Math.floor(n / 2) + s) : (v = n + (s - 1), m = s);
                var y = Math.max((g || 0) - m, 0),
                    w = Math.min((g || 0) + v, c.length - 1),
                    b = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

                function x() { t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load() }
                if (f.extend(t.virtual, { from: y, to: w, offset: b, slidesGrid: t.slidesGrid }), o === y && l === w && !e) return t.slidesGrid !== d && b !== h && t.slides.css(p, "".concat(b, "px")), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, { offset: b, from: y, to: w, slides: function() { for (var e = [], t = y; t <= w; t += 1) e.push(c[t]); return e }() }), void x();
                var T = [],
                    E = [];
                if (e) t.$wrapperEl.find(".".concat(t.params.slideClass)).remove();
                else
                    for (var C = o; C <= l; C += 1)(C < y || C > w) && t.$wrapperEl.find(".".concat(t.params.slideClass, '[data-swiper-slide-index="').concat(C, '"]')).remove();
                for (var S = 0; S < c.length; S += 1) S >= y && S <= w && (void 0 === l || e ? E.push(S) : (S > l && E.push(S), S < o && T.push(S)));
                E.forEach(function(e) { t.$wrapperEl.append(u(c[e], e)) }), T.sort(function(e, t) { return e < t }).forEach(function(e) { t.$wrapperEl.prepend(u(c[e], e)) }), t.$wrapperEl.children(".swiper-slide").css(p, "".concat(b, "px")), x()
            },
            renderSlide: function(e, t) { var i = this.params.virtual; if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t]; var s = i.renderSlide ? (0, n.$)(i.renderSlide.call(this, e, t)) : (0, n.$)('<div class="'.concat(this.params.slideClass, '" data-swiper-slide-index="').concat(t, '">').concat(e, "</div>")); return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = s), s },
            appendSlide: function(e) { this.virtual.slides.push(e), this.virtual.update(!0) },
            prependSlide: function(e) {
                if (this.virtual.slides.unshift(e), this.params.virtual.cache) {
                    var t = this.virtual.cache,
                        i = {};
                    Object.keys(t).forEach(function(e) { i[e + 1] = t[e] }), this.virtual.cache = i
                }
                this.virtual.update(!0), this.slideNext(0)
            }
        },
        B = {
            name: "virtual",
            params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null } },
            create: function() { f.extend(this, { virtual: { update: q.update.bind(this), appendSlide: q.appendSlide.bind(this), prependSlide: q.prependSlide.bind(this), renderSlide: q.renderSlide.bind(this), slides: this.params.virtual.slides, cache: {} } }) },
            on: {
                beforeInit: function() {
                    if (this.params.virtual.enabled) {
                        this.classNames.push("".concat(this.params.containerModifierClass, "virtual"));
                        var e = { watchSlidesProgress: !0 };
                        f.extend(this.params, e), f.extend(this.originalParams, e), this.virtual.update()
                    }
                },
                setTranslate: function() { this.params.virtual.enabled && this.virtual.update() }
            }
        },
        R = {
            handle: function(e) {
                var t = this.rtlTranslate,
                    i = e;
                i.originalEvent && (i = i.originalEvent);
                var n = i.keyCode || i.charCode;
                if (!this.allowSlideNext && (this.isHorizontal() && 39 === n || this.isVertical() && 40 === n)) return !1;
                if (!this.allowSlidePrev && (this.isHorizontal() && 37 === n || this.isVertical() && 38 === n)) return !1;
                if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || s.document.activeElement && s.document.activeElement.nodeName && ("input" === s.document.activeElement.nodeName.toLowerCase() || "textarea" === s.document.activeElement.nodeName.toLowerCase()))) {
                    if (this.params.keyboard.onlyInViewport && (37 === n || 39 === n || 38 === n || 40 === n)) {
                        var a = !1;
                        if (this.$el.parents(".".concat(this.params.slideClass)).length > 0 && 0 === this.$el.parents(".".concat(this.params.slideActiveClass)).length) return;
                        var r = s.window.innerWidth,
                            o = s.window.innerHeight,
                            l = this.$el.offset();
                        t && (l.left -= this.$el[0].scrollLeft);
                        for (var c = [
                                [l.left, l.top],
                                [l.left + this.width, l.top],
                                [l.left, l.top + this.height],
                                [l.left + this.width, l.top + this.height]
                            ], d = 0; d < c.length; d += 1) {
                            var u = c[d];
                            u[0] >= 0 && u[0] <= r && u[1] >= 0 && u[1] <= o && (a = !0)
                        }
                        if (!a) return
                    }
                    this.isHorizontal() ? (37 !== n && 39 !== n || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === n && !t || 37 === n && t) && this.slideNext(), (37 === n && !t || 39 === n && t) && this.slidePrev()) : (38 !== n && 40 !== n || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === n && this.slideNext(), 38 === n && this.slidePrev()), this.emit("keyPress", n)
                }
            },
            enable: function() { this.keyboard.enabled || ((0, n.$)(s.document).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0) },
            disable: function() { this.keyboard.enabled && ((0, n.$)(s.document).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1) }
        },
        X = { name: "keyboard", params: { keyboard: { enabled: !1, onlyInViewport: !0 } }, create: function() { f.extend(this, { keyboard: { enabled: !1, enable: R.enable.bind(this), disable: R.disable.bind(this), handle: R.handle.bind(this) } }) }, on: { init: function() { this.params.keyboard.enabled && this.keyboard.enable() }, destroy: function() { this.keyboard.enabled && this.keyboard.disable() } } };
    var F = {
            lastScrollTime: f.now(),
            event: s.window.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                var e = "onwheel" in s.document;
                if (!e) {
                    var t = s.document.createElement("div");
                    t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
                }
                return !e && s.document.implementation && s.document.implementation.hasFeature && !0 !== s.document.implementation.hasFeature("", "") && (e = s.document.implementation.hasFeature("Events.wheel", "3.0")), e
            }() ? "wheel" : "mousewheel",
            normalize: function(e) {
                var t = 0,
                    i = 0,
                    n = 0,
                    s = 0;
                return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), n = 10 * t, s = 10 * i, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || s) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, s *= 40) : (n *= 800, s *= 800)), n && !t && (t = n < 1 ? -1 : 1), s && !i && (i = s < 1 ? -1 : 1), { spinX: t, spinY: i, pixelX: n, pixelY: s }
            },
            handleMouseEnter: function() { this.mouseEntered = !0 },
            handleMouseLeave: function() { this.mouseEntered = !1 },
            handle: function(e) {
                var t = e,
                    i = this,
                    n = i.params.mousewheel;
                if (!i.mouseEntered && !n.releaseOnEdges) return !0;
                t.originalEvent && (t = t.originalEvent);
                var a = 0,
                    r = i.rtlTranslate ? -1 : 1,
                    o = F.normalize(t);
                if (n.forceToAxis)
                    if (i.isHorizontal()) {
                        if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                        a = o.pixelX * r
                    } else {
                        if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                        a = o.pixelY
                    }
                else a = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * r : -o.pixelY;
                if (0 === a) return !0;
                if (n.invert && (a = -a), i.params.freeMode) {
                    var l = i.getTranslate() + a * n.sensitivity,
                        c = i.isBeginning,
                        d = i.isEnd;
                    if (l >= i.minTranslate() && (l = i.minTranslate()), l <= i.maxTranslate() && (l = i.maxTranslate()), i.setTransition(0), i.setTranslate(l), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!c && i.isBeginning || !d && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = f.nextTick(function() { i.slideToClosest() }, 300)), i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.stopAutoplay(), l === i.minTranslate() || l === i.maxTranslate()) return !0
                } else {
                    if (f.now() - i.mousewheel.lastScrollTime > 60)
                        if (a < 0)
                            if (i.isEnd && !i.params.loop || i.animating) { if (n.releaseOnEdges) return !0 } else i.slideNext(), i.emit("scroll", t);
                    else if (i.isBeginning && !i.params.loop || i.animating) { if (n.releaseOnEdges) return !0 } else i.slidePrev(), i.emit("scroll", t);
                    i.mousewheel.lastScrollTime = (new s.window.Date).getTime()
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            },
            enable: function() { if (!F.event) return !1; if (this.mousewheel.enabled) return !1; var e = this.$el; return "container" !== this.params.mousewheel.eventsTarged && (e = (0, n.$)(this.params.mousewheel.eventsTarged)), e.on("mouseenter", this.mousewheel.handleMouseEnter), e.on("mouseleave", this.mousewheel.handleMouseLeave), e.on(F.event, this.mousewheel.handle), this.mousewheel.enabled = !0, !0 },
            disable: function() { if (!F.event) return !1; if (!this.mousewheel.enabled) return !1; var e = this.$el; return "container" !== this.params.mousewheel.eventsTarged && (e = (0, n.$)(this.params.mousewheel.eventsTarged)), e.off(F.event, this.mousewheel.handle), this.mousewheel.enabled = !1, !0 }
        },
        G = {
            update: function() {
                var e = this.params.navigation;
                if (!this.params.loop) {
                    var t = this.navigation,
                        i = t.$nextEl,
                        n = t.$prevEl;
                    n && n.length > 0 && (this.isBeginning ? n.addClass(e.disabledClass) : n.removeClass(e.disabledClass), n[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
                }
            },
            init: function() {
                var e, t, i = this,
                    s = i.params.navigation;
                (s.nextEl || s.prevEl) && (s.nextEl && (e = (0, n.$)(s.nextEl), i.params.uniqueNavElements && "string" == typeof s.nextEl && e.length > 1 && 1 === i.$el.find(s.nextEl).length && (e = i.$el.find(s.nextEl))), s.prevEl && (t = (0, n.$)(s.prevEl), i.params.uniqueNavElements && "string" == typeof s.prevEl && t.length > 1 && 1 === i.$el.find(s.prevEl).length && (t = i.$el.find(s.prevEl))), e && e.length > 0 && e.on("click", function(e) { e.preventDefault(), i.isEnd && !i.params.loop || i.slideNext() }), t && t.length > 0 && t.on("click", function(e) { e.preventDefault(), i.isBeginning && !i.params.loop || i.slidePrev() }), f.extend(i.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] }))
            },
            destroy: function() {
                var e = this.navigation,
                    t = e.$nextEl,
                    i = e.$prevEl;
                t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass))
            }
        },
        Y = {
            update: function() {
                var e = this.rtl,
                    t = this.params.pagination;
                if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var i, s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        a = this.pagination.$el,
                        r = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                    if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides), i > r - 1 && (i -= r), i < 0 && "bullets" !== this.params.paginationType && (i = r + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                        var o, l, c, d = this.pagination.bullets;
                        if (t.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(this.isHorizontal() ? "width" : "height", "".concat(this.pagination.bulletSize * (t.dynamicMainBullets + 4), "px")), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, c = ((l = o + (Math.min(d.length, t.dynamicMainBullets) - 1)) + o) / 2), d.removeClass("".concat(t.bulletActiveClass, " ").concat(t.bulletActiveClass, "-next ").concat(t.bulletActiveClass, "-next-next ").concat(t.bulletActiveClass, "-prev ").concat(t.bulletActiveClass, "-prev-prev ").concat(t.bulletActiveClass, "-main")), a.length > 1) d.each(function(e, s) {
                            var a = (0, n.$)(s),
                                r = a.index();
                            r === i && a.addClass(t.bulletActiveClass), t.dynamicBullets && (r >= o && r <= l && a.addClass("".concat(t.bulletActiveClass, "-main")), r === o && a.prev().addClass("".concat(t.bulletActiveClass, "-prev")).prev().addClass("".concat(t.bulletActiveClass, "-prev-prev")), r === l && a.next().addClass("".concat(t.bulletActiveClass, "-next")).next().addClass("".concat(t.bulletActiveClass, "-next-next")))
                        });
                        else if (d.eq(i).addClass(t.bulletActiveClass), t.dynamicBullets) {
                            for (var u = d.eq(o), h = d.eq(l), p = o; p <= l; p += 1) d.eq(p).addClass("".concat(t.bulletActiveClass, "-main"));
                            u.prev().addClass("".concat(t.bulletActiveClass, "-prev")).prev().addClass("".concat(t.bulletActiveClass, "-prev-prev")), h.next().addClass("".concat(t.bulletActiveClass, "-next")).next().addClass("".concat(t.bulletActiveClass, "-next-next"))
                        }
                        if (t.dynamicBullets) {
                            var f = Math.min(d.length, t.dynamicMainBullets + 4),
                                v = (this.pagination.bulletSize * f - this.pagination.bulletSize) / 2 - c * this.pagination.bulletSize,
                                m = e ? "right" : "left";
                            d.css(this.isHorizontal() ? m : "top", "".concat(v, "px"))
                        }
                    }
                    if ("fraction" === t.type && (a.find(".".concat(t.currentClass)).text(i + 1), a.find(".".concat(t.totalClass)).text(r)), "progressbar" === t.type) {
                        var g = (i + 1) / r,
                            y = g,
                            w = 1;
                        this.isHorizontal() || (w = g, y = 1), a.find(".".concat(t.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(y, ") scaleY(").concat(w, ")")).transition(this.params.speed)
                    }
                    "custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, r)), this.emit("paginationRender", this, a[0])) : this.emit("paginationUpdate", this, a[0]), a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
                }
            },
            render: function() {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        i = this.pagination.$el,
                        n = "";
                    if ("bullets" === e.type) {
                        for (var s = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, a = 0; a < s; a += 1) e.renderBullet ? n += e.renderBullet.call(this, a, e.bulletClass) : n += "<".concat(e.bulletElement, ' class="').concat(e.bulletClass, '"></').concat(e.bulletElement, ">");
                        i.html(n), this.pagination.bullets = i.find(".".concat(e.bulletClass))
                    }
                    "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="'.concat(e.currentClass, '"></span>') + " / " + '<span class="'.concat(e.totalClass, '"></span>'), i.html(n)), "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="'.concat(e.progressbarFillClass, '"></span>'), i.html(n)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
                }
            },
            init: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el) {
                    var i = (0, n.$)(t.el);
                    0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("".concat(t.modifierClass).concat(t.type, "-dynamic")), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), t.clickable && i.on("click", ".".concat(t.bulletClass), function(t) {
                        t.preventDefault();
                        var i = (0, n.$)(this).index() * e.params.slidesPerGroup;
                        e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                    }), f.extend(e.pagination, { $el: i, el: i[0] }))
                }
            },
            destroy: function() {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.pagination.$el;
                    t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", ".".concat(e.bulletClass))
                }
            }
        },
        V = {
            setTranslate: function() {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.rtlTranslate,
                        i = this.progress,
                        n = e.dragSize,
                        s = e.trackSize,
                        a = e.$dragEl,
                        r = e.$el,
                        o = this.params.scrollbar,
                        l = n,
                        c = (s - n) * i;
                    t ? (c = -c) > 0 ? (l = n - c, c = 0) : -c + n > s && (l = s + c) : c < 0 ? (l = n + c, c = 0) : c + n > s && (l = s - c), this.isHorizontal() ? (v.transforms3d ? a.transform("translate3d(".concat(c, "px, 0, 0)")) : a.transform("translateX(".concat(c, "px)")), a[0].style.width = "".concat(l, "px")) : (v.transforms3d ? a.transform("translate3d(0px, ".concat(c, "px, 0)")) : a.transform("translateY(".concat(c, "px)")), a[0].style.height = "".concat(l, "px")), o.hide && (clearTimeout(this.scrollbar.timeout), r[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function() { r[0].style.opacity = 0, r.transition(400) }, 1e3))
                }
            },
            setTransition: function(e) { this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e) },
            updateSize: function() {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = e.$dragEl,
                        i = e.$el;
                    t[0].style.width = "", t[0].style.height = "";
                    var n, s = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        a = this.size / this.virtualSize,
                        r = a * (s / this.size);
                    n = "auto" === this.params.scrollbar.dragSize ? s * a : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = "".concat(n, "px") : t[0].style.height = "".concat(n, "px"), i[0].style.display = a >= 1 ? "none" : "", this.params.scrollbarHide && (i[0].style.opacity = 0), f.extend(e, { trackSize: s, divider: a, moveDivider: r, dragSize: n }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
                }
            },
            setDragPosition: function(e) {
                var t, i = this.scrollbar,
                    n = this.rtlTranslate,
                    s = i.$el,
                    a = i.dragSize,
                    r = i.trackSize;
                t = ((this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - s.offset()[this.isHorizontal() ? "left" : "top"] - a / 2) / (r - a), t = Math.max(Math.min(t, 1), 0), n && (t = 1 - t);
                var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
                this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses()
            },
            onDragStart: function(e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar,
                    n = this.$wrapperEl,
                    s = i.$el,
                    a = i.$dragEl;
                this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), n.transition(100), a.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), s.transition(0), t.hide && s.css("opacity", 1), this.emit("scrollbarDragStart", e)
            },
            onDragMove: function(e) {
                var t = this.scrollbar,
                    i = this.$wrapperEl,
                    n = t.$el,
                    s = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), n.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
            },
            onDragEnd: function(e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar.$el;
                this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = f.nextTick(function() { i.css("opacity", 0), i.transition(400) }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
            },
            enableDraggable: function() {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.touchEvents,
                        i = this.touchEventsDesktop,
                        n = this.params,
                        a = e.$el[0],
                        r = !(!v.passiveListener || !n.passiveListener) && { passive: !1, capture: !1 },
                        o = !(!v.passiveListener || !n.passiveListener) && { passive: !0, capture: !1 };
                    v.touch || !v.pointerEvents && !v.prefixedPointerEvents ? (v.touch && (a.addEventListener(t.start, this.scrollbar.onDragStart, r), a.addEventListener(t.move, this.scrollbar.onDragMove, r), a.addEventListener(t.end, this.scrollbar.onDragEnd, o)), (n.simulateTouch && !C.ios && !C.android || n.simulateTouch && !v.touch && C.ios) && (a.addEventListener("mousedown", this.scrollbar.onDragStart, r), s.document.addEventListener("mousemove", this.scrollbar.onDragMove, r), s.document.addEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (a.addEventListener(i.start, this.scrollbar.onDragStart, r), s.document.addEventListener(i.move, this.scrollbar.onDragMove, r), s.document.addEventListener(i.end, this.scrollbar.onDragEnd, o))
                }
            },
            disableDraggable: function() {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.touchEvents,
                        i = this.touchEventsDesktop,
                        n = this.params,
                        a = e.$el[0],
                        r = !(!v.passiveListener || !n.passiveListener) && { passive: !1, capture: !1 },
                        o = !(!v.passiveListener || !n.passiveListener) && { passive: !0, capture: !1 };
                    v.touch || !v.pointerEvents && !v.prefixedPointerEvents ? (v.touch && (a.removeEventListener(t.start, this.scrollbar.onDragStart, r), a.removeEventListener(t.move, this.scrollbar.onDragMove, r), a.removeEventListener(t.end, this.scrollbar.onDragEnd, o)), (n.simulateTouch && !C.ios && !C.android || n.simulateTouch && !v.touch && C.ios) && (a.removeEventListener("mousedown", this.scrollbar.onDragStart, r), s.document.removeEventListener("mousemove", this.scrollbar.onDragMove, r), s.document.removeEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (a.removeEventListener(i.start, this.scrollbar.onDragStart, r), s.document.removeEventListener(i.move, this.scrollbar.onDragMove, r), s.document.removeEventListener(i.end, this.scrollbar.onDragEnd, o))
                }
            },
            init: function() {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.$el,
                        i = this.params.scrollbar,
                        s = (0, n.$)(i.el);
                    this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.find(i.el).length && (s = t.find(i.el));
                    var a = s.find(".".concat(this.params.scrollbar.dragClass));
                    0 === a.length && (a = (0, n.$)('<div class="'.concat(this.params.scrollbar.dragClass, '"></div>')), s.append(a)), f.extend(e, { $el: s, el: s[0], $dragEl: a, dragEl: a[0] }), i.draggable && e.enableDraggable()
                }
            },
            destroy: function() { this.scrollbar.disableDraggable() }
        },
        W = {
            setTransform: function(e, t) {
                var i = this.rtl,
                    s = (0, n.$)(e),
                    a = i ? -1 : 1,
                    r = s.attr("data-swiper-parallax") || "0",
                    o = s.attr("data-swiper-parallax-x"),
                    l = s.attr("data-swiper-parallax-y"),
                    c = s.attr("data-swiper-parallax-scale"),
                    d = s.attr("data-swiper-parallax-opacity");
                if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = r, l = "0") : (l = r, o = "0"), o = o.indexOf("%") >= 0 ? "".concat(parseInt(o, 10) * t * a, "%") : "".concat(o * t * a, "px"), l = l.indexOf("%") >= 0 ? "".concat(parseInt(l, 10) * t, "%") : "".concat(l * t, "px"), void 0 !== d && null !== d) {
                    var u = d - (d - 1) * (1 - Math.abs(t));
                    s[0].style.opacity = u
                }
                if (void 0 === c || null === c) s.transform("translate3d(".concat(o, ", ").concat(l, ", 0px)"));
                else {
                    var h = c - (c - 1) * (1 - Math.abs(t));
                    s.transform("translate3d(".concat(o, ", ").concat(l, ", 0px) scale(").concat(h, ")"))
                }
            },
            setTranslate: function() {
                var e = this,
                    t = e.$el,
                    i = e.slides,
                    s = e.progress,
                    a = e.snapGrid;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) { e.parallax.setTransform(i, s) }), i.each(function(t, i) {
                    var r = i.progress;
                    e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(t / 2) - s * (a.length - 1)), r = Math.min(Math.max(r, -1), 1), (0, n.$)(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) { e.parallax.setTransform(i, r) })
                })
            },
            setTransition: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed;
                this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
                    var s = (0, n.$)(i),
                        a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (a = 0), s.transition(a)
                })
            }
        },
        _ = {
            getDistanceBetweenTouches: function(e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    i = e.targetTouches[0].pageY,
                    n = e.targetTouches[1].pageX,
                    s = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(n - t, 2) + Math.pow(s - i, 2))
            },
            onGestureStart: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    s = i.gesture;
                if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !v.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureTouched = !0, s.scaleStart = _.getDistanceBetweenTouches(e)
                }
                s.$slideEl && s.$slideEl.length || (s.$slideEl = (0, n.$)(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = this.slides.eq(this.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent(".".concat(t.containerClass)), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), this.zoom.isScaling = !0) : s.$imageEl = void 0
            },
            onGestureChange: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    n = i.gesture;
                if (!v.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureMoved = !0, n.scaleMove = _.getDistanceBetweenTouches(e)
                }
                n.$imageEl && 0 !== n.$imageEl.length && (v.gestures ? this.zoom.scale = e.scale * i.currentScale : i.scale = n.scaleMove / n.scaleStart * i.currentScale, i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), n.$imageEl.transform("translate3d(0,0,0) scale(".concat(i.scale, ")")))
            },
            onGestureEnd: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    n = i.gesture;
                if (!v.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !C.android) return;
                    i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                }
                n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), t.minRatio), n.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(".concat(i.scale, ")")), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (n.$slideEl = void 0))
            },
            onTouchStart: function(e) {
                var t = this.zoom,
                    i = t.gesture,
                    n = t.image;
                i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (C.android && e.preventDefault(), n.isTouched = !0, n.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function(e) {
                var t = this.zoom,
                    i = t.gesture,
                    n = t.image,
                    s = t.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, n.isTouched && i.$slideEl)) {
                    n.isMoved || (n.width = i.$imageEl[0].offsetWidth, n.height = i.$imageEl[0].offsetHeight, n.startX = f.getTranslate(i.$imageWrapEl[0], "x") || 0, n.startY = f.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (n.startX = -n.startX, n.startY = -n.startY));
                    var a = n.width * t.scale,
                        r = n.height * t.scale;
                    if (!(a < i.slideWidth && r < i.slideHeight)) {
                        if (n.minX = Math.min(i.slideWidth / 2 - a / 2, 0), n.maxX = -n.minX, n.minY = Math.min(i.slideHeight / 2 - r / 2, 0), n.maxY = -n.minY, n.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !n.isMoved && !t.isScaling) { if (this.isHorizontal() && (Math.floor(n.minX) === Math.floor(n.startX) && n.touchesCurrent.x < n.touchesStart.x || Math.floor(n.maxX) === Math.floor(n.startX) && n.touchesCurrent.x > n.touchesStart.x)) return void(n.isTouched = !1); if (!this.isHorizontal() && (Math.floor(n.minY) === Math.floor(n.startY) && n.touchesCurrent.y < n.touchesStart.y || Math.floor(n.maxY) === Math.floor(n.startY) && n.touchesCurrent.y > n.touchesStart.y)) return void(n.isTouched = !1) }
                        e.preventDefault(), e.stopPropagation(), n.isMoved = !0, n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX, n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY, n.currentX < n.minX && (n.currentX = n.minX + 1 - Math.pow(n.minX - n.currentX + 1, .8)), n.currentX > n.maxX && (n.currentX = n.maxX - 1 + Math.pow(n.currentX - n.maxX + 1, .8)), n.currentY < n.minY && (n.currentY = n.minY + 1 - Math.pow(n.minY - n.currentY + 1, .8)), n.currentY > n.maxY && (n.currentY = n.maxY - 1 + Math.pow(n.currentY - n.maxY + 1, .8)), s.prevPositionX || (s.prevPositionX = n.touchesCurrent.x), s.prevPositionY || (s.prevPositionY = n.touchesCurrent.y), s.prevTime || (s.prevTime = Date.now()), s.x = (n.touchesCurrent.x - s.prevPositionX) / (Date.now() - s.prevTime) / 2, s.y = (n.touchesCurrent.y - s.prevPositionY) / (Date.now() - s.prevTime) / 2, Math.abs(n.touchesCurrent.x - s.prevPositionX) < 2 && (s.x = 0), Math.abs(n.touchesCurrent.y - s.prevPositionY) < 2 && (s.y = 0), s.prevPositionX = n.touchesCurrent.x, s.prevPositionY = n.touchesCurrent.y, s.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(".concat(n.currentX, "px, ").concat(n.currentY, "px,0)"))
                    }
                }
            },
            onTouchEnd: function() {
                var e = this.zoom,
                    t = e.gesture,
                    i = e.image,
                    n = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                    i.isTouched = !1, i.isMoved = !1;
                    var s = 300,
                        a = 300,
                        r = n.x * s,
                        o = i.currentX + r,
                        l = n.y * a,
                        c = i.currentY + l;
                    0 !== n.x && (s = Math.abs((o - i.currentX) / n.x)), 0 !== n.y && (a = Math.abs((c - i.currentY) / n.y));
                    var d = Math.max(s, a);
                    i.currentX = o, i.currentY = c;
                    var u = i.width * e.scale,
                        h = i.height * e.scale;
                    i.minX = Math.min(t.slideWidth / 2 - u / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - h / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(d).transform("translate3d(".concat(i.currentX, "px, ").concat(i.currentY, "px,0)"))
                }
            },
            onTransitionEnd: function() {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1)
            },
            toggle: function(e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in: function(e) {
                var t, i, s, a, r, o, l, c, d, u, h, p, f, v, m, g, y = this.zoom,
                    w = this.params.zoom,
                    b = y.gesture,
                    x = y.image;
                (b.$slideEl || (b.$slideEl = this.clickedSlide ? (0, n.$)(this.clickedSlide) : this.slides.eq(this.activeIndex), b.$imageEl = b.$slideEl.find("img, svg, canvas"), b.$imageWrapEl = b.$imageEl.parent(".".concat(w.containerClass))), b.$imageEl && 0 !== b.$imageEl.length) && (b.$slideEl.addClass("".concat(w.zoomedSlideClass)), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, i = x.touchesStart.y), y.scale = b.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, y.currentScale = b.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (m = b.$slideEl[0].offsetWidth, g = b.$slideEl[0].offsetHeight, s = b.$slideEl.offset().left + m / 2 - t, a = b.$slideEl.offset().top + g / 2 - i, l = b.$imageEl[0].offsetWidth, c = b.$imageEl[0].offsetHeight, d = l * y.scale, u = c * y.scale, f = -(h = Math.min(m / 2 - d / 2, 0)), v = -(p = Math.min(g / 2 - u / 2, 0)), r = s * y.scale, o = a * y.scale, r < h && (r = h), r > f && (r = f), o < p && (o = p), o > v && (o = v)) : (r = 0, o = 0), b.$imageWrapEl.transition(300).transform("translate3d(".concat(r, "px, ").concat(o, "px,0)")), b.$imageEl.transition(300).transform("translate3d(0,0,0) scale(".concat(y.scale, ")")))
            },
            out: function() {
                var e = this.zoom,
                    t = this.params.zoom,
                    i = e.gesture;
                i.$slideEl || (i.$slideEl = this.clickedSlide ? (0, n.$)(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent(".".concat(t.containerClass))), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("".concat(t.zoomedSlideClass)), i.$slideEl = void 0)
            },
            enable: function() {
                var e = this.zoom;
                if (!e.enabled) {
                    e.enabled = !0;
                    var t = !("touchstart" !== this.touchEvents.start || !v.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 };
                    v.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, ".".concat(this.params.zoom.containerClass), e.onTouchMove)
                }
            },
            disable: function() {
                var e = this.zoom;
                if (e.enabled) {
                    this.zoom.enabled = !1;
                    var t = !("touchstart" !== this.touchEvents.start || !v.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 };
                    v.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, ".".concat(this.params.zoom.containerClass), e.onTouchMove)
                }
            }
        },
        U = {
            loadInSlide: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    i = this,
                    s = i.params.lazy;
                if (void 0 !== e && 0 !== i.slides.length) {
                    var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children(".".concat(i.params.slideClass, '[data-swiper-slide-index="').concat(e, '"]')) : i.slides.eq(e),
                        r = a.find(".".concat(s.elementClass, ":not(.").concat(s.loadedClass, "):not(.").concat(s.loadingClass, ")"));
                    !a.hasClass(s.elementClass) || a.hasClass(s.loadedClass) || a.hasClass(s.loadingClass) || (r = r.add(a[0])), 0 !== r.length && r.each(function(e, r) {
                        var o = (0, n.$)(r);
                        o.addClass(s.loadingClass);
                        var l = o.attr("data-background"),
                            c = o.attr("data-src"),
                            d = o.attr("data-srcset"),
                            u = o.attr("data-sizes");
                        i.loadImage(o[0], c || l, d, u, !1, function() {
                            if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
                                if (l ? (o.css("background-image", 'url("'.concat(l, '")')), o.removeAttr("data-background")) : (d && (o.attr("srcset", d), o.removeAttr("data-srcset")), u && (o.attr("sizes", u), o.removeAttr("data-sizes")), c && (o.attr("src", c), o.removeAttr("data-src"))), o.addClass(s.loadedClass).removeClass(s.loadingClass), a.find(".".concat(s.preloaderClass)).remove(), i.params.loop && t) {
                                    var e = a.attr("data-swiper-slide-index");
                                    if (a.hasClass(i.params.slideDuplicateClass)) {
                                        var n = i.$wrapperEl.children('[data-swiper-slide-index="'.concat(e, '"]:not(.').concat(i.params.slideDuplicateClass, ")"));
                                        i.lazy.loadInSlide(n.index(), !1)
                                    } else {
                                        var r = i.$wrapperEl.children(".".concat(i.params.slideDuplicateClass, '[data-swiper-slide-index="').concat(e, '"]'));
                                        i.lazy.loadInSlide(r.index(), !1)
                                    }
                                }
                                i.emit("lazyImageReady", a[0], o[0])
                            }
                        }), i.emit("lazyImageLoad", a[0], o[0])
                    })
                }
            },
            load: function() {
                var e = this,
                    t = e.$wrapperEl,
                    i = e.params,
                    s = e.slides,
                    a = e.activeIndex,
                    r = e.virtual && i.virtual.enabled,
                    o = i.lazy,
                    l = i.slidesPerView;

                function c(e) { if (r) { if (t.children(".".concat(i.slideClass, '[data-swiper-slide-index="').concat(e, '"]')).length) return !0 } else if (s[e]) return !0; return !1 }

                function d(e) { return r ? (0, n.$)(e).attr("data-swiper-slide-index") : (0, n.$)(e).index() }
                if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children(".".concat(i.slideVisibleClass)).each(function(t, i) {
                    var s = r ? (0, n.$)(i).attr("data-swiper-slide-index") : (0, n.$)(i).index();
                    e.lazy.loadInSlide(s)
                });
                else if (l > 1)
                    for (var u = a; u < a + l; u += 1) c(u) && e.lazy.loadInSlide(u);
                else e.lazy.loadInSlide(a);
                if (o.loadPrevNext)
                    if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) { for (var h = o.loadPrevNextAmount, p = l, f = Math.min(a + p + Math.max(h, p), s.length), v = Math.max(a - Math.max(p, h), 0), m = a + l; m < f; m += 1) c(m) && e.lazy.loadInSlide(m); for (var g = v; g < a; g += 1) c(g) && e.lazy.loadInSlide(g) } else {
                        var y = t.children(".".concat(i.slideNextClass));
                        y.length > 0 && e.lazy.loadInSlide(d(y));
                        var w = t.children(".".concat(i.slidePrevClass));
                        w.length > 0 && e.lazy.loadInSlide(d(w))
                    }
            }
        },
        K = {
            LinearSpline: function(e, t) { var i, n, s, a, r, o = function(e, t) { for (n = -1, i = e.length; i - n > 1;) e[s = i + n >> 1] <= t ? n = s : i = s; return i }; return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) { return e ? (r = o(this.x, e), a = r - 1, (e - this.x[a]) * (this.y[r] - this.y[a]) / (this.x[r] - this.x[a]) + this.y[a]) : 0 }, this },
            getInterpolateFunction: function(e) { this.controller.spline || (this.controller.spline = this.params.loop ? new K.LinearSpline(this.slidesGrid, e.slidesGrid) : new K.LinearSpline(this.snapGrid, e.snapGrid)) },
            setTranslate: function(e, t) {
                var i, n, s = this,
                    a = s.controller.control;

                function r(e) { var t = s.rtlTranslate ? -s.translate : s.translate; "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), n = -s.controller.spline.interpolate(-t)), n && "container" !== s.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), n = (t - s.minTranslate()) * i + e.minTranslate()), s.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, s), e.updateActiveIndex(), e.updateSlidesClasses() }
                if (Array.isArray(a))
                    for (var o = 0; o < a.length; o += 1) a[o] !== t && a[o] instanceof $ && r(a[o]);
                else a instanceof $ && t !== a && r(a)
            },
            setTransition: function(e, t) {
                var i, n = this,
                    s = n.controller.control;

                function a(t) { t.setTransition(e, n), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function() { s && (t.params.loop && "slide" === n.params.controller.by && t.loopFix(), t.transitionEnd()) })) }
                if (Array.isArray(s))
                    for (i = 0; i < s.length; i += 1) s[i] !== t && s[i] instanceof $ && a(s[i]);
                else s instanceof $ && t !== s && a(s)
            }
        },
        Q = {
            makeElFocusable: function(e) { return e.attr("tabIndex", "0"), e },
            addElRole: function(e, t) { return e.attr("role", t), e },
            addElLabel: function(e, t) { return e.attr("aria-label", t), e },
            disableEl: function(e) { return e.attr("aria-disabled", !0), e },
            enableEl: function(e) { return e.attr("aria-disabled", !1), e },
            onEnterKey: function(e) {
                var t = this.params.a11y;
                if (13 === e.keyCode) {
                    var i = (0, n.$)(e.target);
                    this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is(".".concat(this.params.pagination.bulletClass)) && i[0].click()
                }
            },
            notify: function(e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function() {
                if (!this.params.loop) {
                    var e = this.navigation,
                        t = e.$nextEl,
                        i = e.$prevEl;
                    i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
                }
            },
            updatePagination: function() {
                var e = this,
                    t = e.params.a11y;
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function(i, s) {
                    var a = (0, n.$)(s);
                    e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, t.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
                })
            },
            init: function() {
                this.$el.append(this.a11y.liveRegion);
                var e, t, i = this.params.a11y;
                this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", ".".concat(this.params.pagination.bulletClass), this.a11y.onEnterKey)
            },
            destroy: function() {
                var e, t;
                this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", ".".concat(this.params.pagination.bulletClass), this.a11y.onEnterKey)
            }
        },
        J = {
            init: function() {
                if (this.params.history) {
                    if (!s.window.history || !s.window.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
                    var e = this.history;
                    e.initialized = !0, e.paths = J.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || s.window.addEventListener("popstate", this.history.setHistoryPopState))
                }
            },
            destroy: function() { this.params.history.replaceState || s.window.removeEventListener("popstate", this.history.setHistoryPopState) },
            setHistoryPopState: function() { this.history.paths = J.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1) },
            getPathValues: function() {
                var e = s.window.location.pathname.slice(1).split("/").filter(function(e) { return "" !== e }),
                    t = e.length;
                return { key: e[t - 2], value: e[t - 1] }
            },
            setHistory: function(e, t) {
                if (this.history.initialized && this.params.history.enabled) {
                    var i = this.slides.eq(t),
                        n = J.slugify(i.attr("data-history"));
                    s.window.location.pathname.includes(e) || (n = "".concat(e, "/").concat(n));
                    var a = s.window.history.state;
                    a && a.value === n || (this.params.history.replaceState ? s.window.history.replaceState({ value: n }, null, n) : s.window.history.pushState({ value: n }, null, n))
                }
            },
            slugify: function(e) { return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "") },
            scrollToSlide: function(e, t, i) {
                if (t)
                    for (var n = 0, s = this.slides.length; n < s; n += 1) {
                        var a = this.slides.eq(n);
                        if (J.slugify(a.attr("data-history")) === t && !a.hasClass(this.params.slideDuplicateClass)) {
                            var r = a.index();
                            this.slideTo(r, e, i)
                        }
                    } else this.slideTo(0, e, i)
            }
        },
        Z = {
            onHashCange: function() {
                var e = s.document.location.hash.replace("#", "");
                e !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children(".".concat(this.params.slideClass, '[data-hash="').concat(e, '"]')).index())
            },
            setHash: function() {
                if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                    if (this.params.hashNavigation.replaceState && s.window.history && s.window.history.replaceState) s.window.history.replaceState(null, null, "#".concat(this.slides.eq(this.activeIndex).attr("data-hash")) || "");
                    else {
                        var e = this.slides.eq(this.activeIndex),
                            t = e.attr("data-hash") || e.attr("data-history");
                        s.document.location.hash = t || ""
                    }
            },
            init: function() {
                if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                    this.hashNavigation.initialized = !0;
                    var e = s.document.location.hash.replace("#", "");
                    if (e)
                        for (var t = 0, i = this.slides.length; t < i; t += 1) {
                            var a = this.slides.eq(t);
                            if ((a.attr("data-hash") || a.attr("data-history")) === e && !a.hasClass(this.params.slideDuplicateClass)) {
                                var r = a.index();
                                this.slideTo(r, 0, this.params.runCallbacksOnInit, !0)
                            }
                        }
                    this.params.hashNavigation.watchState && (0, n.$)(s.window).on("hashchange", this.hashNavigation.onHashCange)
                }
            },
            destroy: function() { this.params.hashNavigation.watchState && (0, n.$)(s.window).off("hashchange", this.hashNavigation.onHashCange) }
        },
        ee = {
            run: function() {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    i = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = f.nextTick(function() { e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) }, i)
            },
            start: function() { return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)) },
            stop: function() { return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)) },
            pause: function(e) {
                var t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? t.$wrapperEl.transitionEnd(function() { t && !t.destroyed && (t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop()) }) : (t.autoplay.paused = !1, t.autoplay.run())))
            }
        },
        te = {
            setTranslate: function() {
                for (var e = this.slides, t = 0; t < e.length; t += 1) {
                    var i = this.slides.eq(t),
                        n = -i[0].swiperSlideOffset;
                    this.params.virtualTranslate || (n -= this.translate);
                    var s = 0;
                    this.isHorizontal() || (s = n, n = 0);
                    var a = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({ opacity: a }).transform("translate3d(".concat(n, "px, ").concat(s, "px, 0px)"))
                }
            },
            setTransition: function(e) {
                var t = this,
                    i = t.slides,
                    n = t.$wrapperEl;
                if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                    var s = !1;
                    i.transitionEnd(function() { if (!s && t && !t.destroyed) { s = !0, t.animating = !1; for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) n.trigger(e[i]) } })
                }
            }
        },
        ie = {
            setTranslate: function() {
                var e, t = this.$el,
                    i = this.$wrapperEl,
                    s = this.slides,
                    a = this.width,
                    r = this.height,
                    o = this.rtlTranslate,
                    l = this.size,
                    c = this.params.cubeEffect,
                    d = this.isHorizontal(),
                    u = this.virtual && this.params.virtual.enabled,
                    h = 0;
                c.shadow && (d ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = (0, n.$)('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({ height: "".concat(a, "px") })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = (0, n.$)('<div class="swiper-cube-shadow"></div>'), t.append(e)));
                for (var p = 0; p < s.length; p += 1) {
                    var f = s.eq(p),
                        v = p;
                    u && (v = parseInt(f.attr("data-swiper-slide-index"), 10));
                    var m = 90 * v,
                        g = Math.floor(m / 360);
                    o && (m = -m, g = Math.floor(-m / 360));
                    var y = Math.max(Math.min(f[0].progress, 1), -1),
                        w = 0,
                        b = 0,
                        x = 0;
                    v % 4 == 0 ? (w = 4 * -g * l, x = 0) : (v - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (v - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (v - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), d || (b = w, w = 0);
                    var T = "rotateX(".concat(d ? 0 : -m, "deg) rotateY(").concat(d ? m : 0, "deg) translate3d(").concat(w, "px, ").concat(b, "px, ").concat(x, "px)");
                    if (y <= 1 && y > -1 && (h = 90 * v + 90 * y, o && (h = 90 * -v - 90 * y)), f.transform(T), c.slideShadows) {
                        var E = d ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                            C = d ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                        0 === E.length && (E = (0, n.$)('<div class="swiper-slide-shadow-'.concat(d ? "left" : "top", '"></div>')), f.append(E)), 0 === C.length && (C = (0, n.$)('<div class="swiper-slide-shadow-'.concat(d ? "right" : "bottom", '"></div>')), f.append(C)), E.length && (E[0].style.opacity = Math.max(-y, 0)), C.length && (C[0].style.opacity = Math.max(y, 0))
                    }
                }
                if (i.css({ "-webkit-transform-origin": "50% 50% -".concat(l / 2, "px"), "-moz-transform-origin": "50% 50% -".concat(l / 2, "px"), "-ms-transform-origin": "50% 50% -".concat(l / 2, "px"), "transform-origin": "50% 50% -".concat(l / 2, "px") }), c.shadow)
                    if (d) e.transform("translate3d(0px, ".concat(a / 2 + c.shadowOffset, "px, ").concat(-a / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(c.shadowScale, ")"));
                    else {
                        var S = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                            k = 1.5 - (Math.sin(2 * S * Math.PI / 360) / 2 + Math.cos(2 * S * Math.PI / 360) / 2),
                            M = c.shadowScale,
                            D = c.shadowScale / k,
                            A = c.shadowOffset;
                        e.transform("scale3d(".concat(M, ", 1, ").concat(D, ") translate3d(0px, ").concat(r / 2 + A, "px, ").concat(-r / 2 / D, "px) rotateX(-90deg)"))
                    }
                var L = P.isSafari || P.isUiWebView ? -l / 2 : 0;
                i.transform("translate3d(0px,0,".concat(L, "px) rotateX(").concat(this.isHorizontal() ? 0 : h, "deg) rotateY(").concat(this.isHorizontal() ? -h : 0, "deg)"))
            },
            setTransition: function(e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        },
        ne = {
            setTranslate: function() {
                for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                    var s = e.eq(i),
                        a = s[0].progress;
                    this.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
                    var r = -180 * a,
                        o = 0,
                        l = -s[0].swiperSlideOffset,
                        c = 0;
                    if (this.isHorizontal() ? t && (r = -r) : (c = l, l = 0, o = -r, r = 0), s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length, this.params.flipEffect.slideShadows) {
                        var d = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                            u = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                        0 === d.length && (d = (0, n.$)('<div class="swiper-slide-shadow-'.concat(this.isHorizontal() ? "left" : "top", '"></div>')), s.append(d)), 0 === u.length && (u = (0, n.$)('<div class="swiper-slide-shadow-'.concat(this.isHorizontal() ? "right" : "bottom", '"></div>')), s.append(u)), d.length && (d[0].style.opacity = Math.max(-a, 0)), u.length && (u[0].style.opacity = Math.max(a, 0))
                    }
                    s.transform("translate3d(".concat(l, "px, ").concat(c, "px, 0px) rotateX(").concat(o, "deg) rotateY(").concat(r, "deg)"))
                }
            },
            setTransition: function(e) {
                var t = this,
                    i = t.slides,
                    n = t.activeIndex,
                    s = t.$wrapperEl;
                if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                    var a = !1;
                    i.eq(n).transitionEnd(function() { if (!a && t && !t.destroyed) { a = !0, t.animating = !1; for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i]) } })
                }
            }
        },
        se = {
            setTranslate: function() {
                for (var e = this.width, t = this.height, i = this.slides, s = this.$wrapperEl, a = this.slidesSizesGrid, r = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, c = o ? e / 2 - l : t / 2 - l, d = o ? r.rotate : -r.rotate, u = r.depth, h = 0, p = i.length; h < p; h += 1) {
                    var f = i.eq(h),
                        m = a[h],
                        g = (c - f[0].swiperSlideOffset - m / 2) / m * r.modifier,
                        y = o ? d * g : 0,
                        w = o ? 0 : d * g,
                        b = -u * Math.abs(g),
                        x = o ? 0 : r.stretch * g,
                        T = o ? r.stretch * g : 0;
                    Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(b) < .001 && (b = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0);
                    var E = "translate3d(".concat(T, "px,").concat(x, "px,").concat(b, "px)  rotateX(").concat(w, "deg) rotateY(").concat(y, "deg)");
                    if (f.transform(E), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), r.slideShadows) {
                        var C = o ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                            S = o ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                        0 === C.length && (C = (0, n.$)('<div class="swiper-slide-shadow-'.concat(o ? "left" : "top", '"></div>')), f.append(C)), 0 === S.length && (S = (0, n.$)('<div class="swiper-slide-shadow-'.concat(o ? "right" : "bottom", '"></div>')), f.append(S)), C.length && (C[0].style.opacity = g > 0 ? g : 0), S.length && (S[0].style.opacity = -g > 0 ? -g : 0)
                    }
                }(v.pointerEvents || v.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = "".concat(c, "px 50%"))
            },
            setTransition: function(e) { this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e) }
        },
        ae = [z, N, I, O, j, B, X, { name: "mousewheel", params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } }, create: function() { f.extend(this, { mousewheel: { enabled: !1, enable: F.enable.bind(this), disable: F.disable.bind(this), handle: F.handle.bind(this), handleMouseEnter: F.handleMouseEnter.bind(this), handleMouseLeave: F.handleMouseLeave.bind(this), lastScrollTime: f.now() } }) }, on: { init: function() { this.params.mousewheel.enabled && this.mousewheel.enable() }, destroy: function() { this.mousewheel.enabled && this.mousewheel.disable() } } }, {
            name: "navigation",
            params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } },
            create: function() { f.extend(this, { navigation: { init: G.init.bind(this), update: G.update.bind(this), destroy: G.destroy.bind(this) } }) },
            on: {
                init: function() { this.navigation.init(), this.navigation.update() },
                toEdge: function() { this.navigation.update() },
                fromEdge: function() { this.navigation.update() },
                destroy: function() { this.navigation.destroy() },
                click: function(e) {
                    var t = this.navigation,
                        i = t.$nextEl,
                        s = t.$prevEl;
                    !this.params.navigation.hideOnClick || (0, n.$)(e.target).is(s) || (0, n.$)(e.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass), s && s.toggleClass(this.params.navigation.hiddenClass))
                }
            }
        }, { name: "pagination", params: { pagination: { el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, type: "bullets", dynamicBullets: !1, dynamicMainBullets: 1, bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", modifierClass: "swiper-pagination-", currentClass: "swiper-pagination-current", totalClass: "swiper-pagination-total", hiddenClass: "swiper-pagination-hidden", progressbarFillClass: "swiper-pagination-progressbar-fill", clickableClass: "swiper-pagination-clickable", lockClass: "swiper-pagination-lock" } }, create: function() { f.extend(this, { pagination: { init: Y.init.bind(this), render: Y.render.bind(this), update: Y.update.bind(this), destroy: Y.destroy.bind(this), dynamicBulletIndex: 0 } }) }, on: { init: function() { this.pagination.init(), this.pagination.render(), this.pagination.update() }, activeIndexChange: function() { this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update() }, snapIndexChange: function() { this.params.loop || this.pagination.update() }, slidesLengthChange: function() { this.params.loop && (this.pagination.render(), this.pagination.update()) }, snapGridLengthChange: function() { this.params.loop || (this.pagination.render(), this.pagination.update()) }, destroy: function() { this.pagination.destroy() }, click: function(e) { this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !(0, n.$)(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass) } } }, { name: "scrollbar", params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } }, create: function() { f.extend(this, { scrollbar: { init: V.init.bind(this), destroy: V.destroy.bind(this), updateSize: V.updateSize.bind(this), setTranslate: V.setTranslate.bind(this), setTransition: V.setTransition.bind(this), enableDraggable: V.enableDraggable.bind(this), disableDraggable: V.disableDraggable.bind(this), setDragPosition: V.setDragPosition.bind(this), onDragStart: V.onDragStart.bind(this), onDragMove: V.onDragMove.bind(this), onDragEnd: V.onDragEnd.bind(this), isTouched: !1, timeout: null, dragTimeout: null } }) }, on: { init: function() { this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate() }, update: function() { this.scrollbar.updateSize() }, resize: function() { this.scrollbar.updateSize() }, observerUpdate: function() { this.scrollbar.updateSize() }, setTranslate: function() { this.scrollbar.setTranslate() }, setTransition: function(e) { this.scrollbar.setTransition(e) }, destroy: function() { this.scrollbar.destroy() } } }, { name: "parallax", params: { parallax: { enabled: !1 } }, create: function() { f.extend(this, { parallax: { setTransform: W.setTransform.bind(this), setTranslate: W.setTranslate.bind(this), setTransition: W.setTransition.bind(this) } }) }, on: { beforeInit: function() { this.params.parallax.enabled && (this.params.watchSlidesProgress = !0) }, init: function() { this.params.parallax && this.parallax.setTranslate() }, setTranslate: function() { this.params.parallax && this.parallax.setTranslate() }, setTransition: function(e) { this.params.parallax && this.parallax.setTransition(e) } } }, {
            name: "zoom",
            params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } },
            create: function() {
                var e = this,
                    t = { enabled: !1, scale: 1, currentScale: 1, isScaling: !1, gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 } };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i) { t[i] = _[i].bind(e) }), f.extend(e, { zoom: t })
            },
            on: { init: function() { this.params.zoom.enabled && this.zoom.enable() }, destroy: function() { this.zoom.disable() }, touchStart: function(e) { this.zoom.enabled && this.zoom.onTouchStart(e) }, touchEnd: function(e) { this.zoom.enabled && this.zoom.onTouchEnd(e) }, doubleTap: function(e) { this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e) }, transitionEnd: function() { this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd() } }
        }, { name: "lazy", params: { lazy: { enabled: !1, loadPrevNext: !1, loadPrevNextAmount: 1, loadOnTransitionStart: !1, elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } }, create: function() { f.extend(this, { lazy: { initialImageLoaded: !1, load: U.load.bind(this), loadInSlide: U.loadInSlide.bind(this) } }) }, on: { beforeInit: function() { this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1) }, init: function() { this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load() }, scroll: function() { this.params.freeMode && !this.params.freeModeSticky && this.lazy.load() }, resize: function() { this.params.lazy.enabled && this.lazy.load() }, scrollbarDragMove: function() { this.params.lazy.enabled && this.lazy.load() }, transitionStart: function() { this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load() }, transitionEnd: function() { this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load() } } }, { name: "controller", params: { controller: { control: void 0, inverse: !1, by: "slide" } }, create: function() { f.extend(this, { controller: { control: this.params.controller.control, getInterpolateFunction: K.getInterpolateFunction.bind(this), setTranslate: K.setTranslate.bind(this), setTransition: K.setTransition.bind(this) } }) }, on: { update: function() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, resize: function() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, observerUpdate: function() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, setTranslate: function(e, t) { this.controller.control && this.controller.setTranslate(e, t) }, setTransition: function(e, t) { this.controller.control && this.controller.setTransition(e, t) } } }, {
            name: "a11y",
            params: { a11y: { enabled: !0, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}" } },
            create: function() {
                var e = this;
                f.extend(e, { a11y: { liveRegion: (0, n.$)('<span class="'.concat(e.params.a11y.notificationClass, '" aria-live="assertive" aria-atomic="true"></span>')) } }), Object.keys(Q).forEach(function(t) { e.a11y[t] = Q[t].bind(e) })
            },
            on: { init: function() { this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation()) }, toEdge: function() { this.params.a11y.enabled && this.a11y.updateNavigation() }, fromEdge: function() { this.params.a11y.enabled && this.a11y.updateNavigation() }, paginationUpdate: function() { this.params.a11y.enabled && this.a11y.updatePagination() }, destroy: function() { this.params.a11y.enabled && this.a11y.destroy() } }
        }, { name: "history", params: { history: { enabled: !1, replaceState: !1, key: "slides" } }, create: function() { f.extend(this, { history: { init: J.init.bind(this), setHistory: J.setHistory.bind(this), setHistoryPopState: J.setHistoryPopState.bind(this), scrollToSlide: J.scrollToSlide.bind(this), destroy: J.destroy.bind(this) } }) }, on: { init: function() { this.params.history.enabled && this.history.init() }, destroy: function() { this.params.history.enabled && this.history.destroy() }, transitionEnd: function() { this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex) } } }, { name: "hash-navigation", params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } }, create: function() { f.extend(this, { hashNavigation: { initialized: !1, init: Z.init.bind(this), destroy: Z.destroy.bind(this), setHash: Z.setHash.bind(this), onHashCange: Z.onHashCange.bind(this) } }) }, on: { init: function() { this.params.hashNavigation.enabled && this.hashNavigation.init() }, destroy: function() { this.params.hashNavigation.enabled && this.hashNavigation.destroy() }, transitionEnd: function() { this.hashNavigation.initialized && this.hashNavigation.setHash() } } }, { name: "autoplay", params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } }, create: function() { f.extend(this, { autoplay: { running: !1, paused: !1, run: ee.run.bind(this), start: ee.start.bind(this), stop: ee.stop.bind(this), pause: ee.pause.bind(this) } }) }, on: { init: function() { this.params.autoplay.enabled && this.autoplay.start() }, beforeTransitionStart: function(e, t) { this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop()) }, sliderFirstMove: function() { this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause()) }, destroy: function() { this.autoplay.running && this.autoplay.stop() } } }, {
            name: "effect-fade",
            params: { fadeEffect: { crossFade: !1 } },
            create: function() { f.extend(this, { fadeEffect: { setTranslate: te.setTranslate.bind(this), setTransition: te.setTransition.bind(this) } }) },
            on: {
                beforeInit: function() {
                    if ("fade" === this.params.effect) {
                        this.classNames.push("".concat(this.params.containerModifierClass, "fade"));
                        var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                        f.extend(this.params, e), f.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() { "fade" === this.params.effect && this.fadeEffect.setTranslate() },
                setTransition: function(e) { "fade" === this.params.effect && this.fadeEffect.setTransition(e) }
            }
        }, {
            name: "effect-cube",
            params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 } },
            create: function() { f.extend(this, { cubeEffect: { setTranslate: ie.setTranslate.bind(this), setTransition: ie.setTransition.bind(this) } }) },
            on: {
                beforeInit: function() {
                    if ("cube" === this.params.effect) {
                        this.classNames.push("".concat(this.params.containerModifierClass, "cube")), this.classNames.push("".concat(this.params.containerModifierClass, "3d"));
                        var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };
                        f.extend(this.params, e), f.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() { "cube" === this.params.effect && this.cubeEffect.setTranslate() },
                setTransition: function(e) { "cube" === this.params.effect && this.cubeEffect.setTransition(e) }
            }
        }, {
            name: "effect-flip",
            params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
            create: function() { f.extend(this, { flipEffect: { setTranslate: ne.setTranslate.bind(this), setTransition: ne.setTransition.bind(this) } }) },
            on: {
                beforeInit: function() {
                    if ("flip" === this.params.effect) {
                        this.classNames.push("".concat(this.params.containerModifierClass, "flip")), this.classNames.push("".concat(this.params.containerModifierClass, "3d"));
                        var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                        f.extend(this.params, e), f.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() { "flip" === this.params.effect && this.flipEffect.setTranslate() },
                setTransition: function(e) { "flip" === this.params.effect && this.flipEffect.setTransition(e) }
            }
        }, { name: "effect-coverflow", params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } }, create: function() { f.extend(this, { coverflowEffect: { setTranslate: se.setTranslate.bind(this), setTransition: se.setTransition.bind(this) } }) }, on: { beforeInit: function() { "coverflow" === this.params.effect && (this.classNames.push("".concat(this.params.containerModifierClass, "coverflow")), this.classNames.push("".concat(this.params.containerModifierClass, "3d")), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0) }, setTranslate: function() { "coverflow" === this.params.effect && this.coverflowEffect.setTranslate() }, setTransition: function(e) { "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e) } } }];
    void 0 === $.use && ($.use = $.Class.use, $.installModule = $.Class.installModule), $.use(ae);
    var re = $;
    t.default = re
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.$ = a, t.addClass = function(e) {
        if (void 0 === e) return this;
        for (var t = e.split(" "), i = 0; i < t.length; i += 1)
            for (var n = 0; n < this.length; n += 1) void 0 !== this[n].classList && this[n].classList.add(t[i]);
        return this
    }, t.removeClass = function(e) {
        for (var t = e.split(" "), i = 0; i < t.length; i += 1)
            for (var n = 0; n < this.length; n += 1) void 0 !== this[n].classList && this[n].classList.remove(t[i]);
        return this
    }, t.hasClass = function(e) { return !!this[0] && this[0].classList.contains(e) }, t.toggleClass = function(e) {
        for (var t = e.split(" "), i = 0; i < t.length; i += 1)
            for (var n = 0; n < this.length; n += 1) void 0 !== this[n].classList && this[n].classList.toggle(t[i]);
        return this
    }, t.attr = function(e, t) {
        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
        for (var i = 0; i < this.length; i += 1)
            if (2 === arguments.length) this[i].setAttribute(e, t);
            else
                for (var n in e) this[i][n] = e[n], this[i].setAttribute(n, e[n]);
        return this
    }, t.removeAttr = function(e) { for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e); return this }, t.prop = function(e, t) {
        if (1 !== arguments.length || "string" != typeof e) {
            for (var i = 0; i < this.length; i += 1)
                if (2 === arguments.length) this[i][e] = t;
                else
                    for (var n in e) this[i][n] = e[n];
            return this
        }
        if (this[0]) return this[0][e]
    }, t.data = function(e, t) { var i; if (void 0 === t) { if (i = this[0]) { if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e]; var n = i.getAttribute("data-".concat(e)); return n || void 0 } return } for (var s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t; return this }, t.removeData = function(e) {
        for (var t = 0; t < this.length; t += 1) {
            var i = this[t];
            i.dom7ElementDataStorage && i.dom7ElementDataStorage[e] && (i.dom7ElementDataStorage[e] = null, delete i.dom7ElementDataStorage[e])
        }
    }, t.dataset = function() {
        var e = this[0];
        if (!e) return;
        var t = {};
        if (e.dataset)
            for (var i in e.dataset) t[i] = e.dataset[i];
        else
            for (var n = 0; n < e.attributes.length; n += 1) {
                var s = e.attributes[n];
                s.name.indexOf("data-") >= 0 && (t[(a = s.name.split("data-")[1], a.toLowerCase().replace(/-(.)/g, function(e, t) { return t.toUpperCase() }))] = s.value)
            }
        var a;
        for (var r in t) "false" === t[r] ? t[r] = !1 : "true" === t[r] ? t[r] = !0 : parseFloat(t[r]) === 1 * t[r] && (t[r] *= 1);
        return t
    }, t.val = function(e) { if (void 0 === e) { if (this[0]) { if (this[0].multiple && "select" === this[0].nodeName.toLowerCase()) { for (var t = [], i = 0; i < this[0].selectedOptions.length; i += 1) t.push(this[0].selectedOptions[i].value); return t } return this[0].value } return } for (var n = 0; n < this.length; n += 1) this[n].value = e; return this }, t.transform = function(e) {
        for (var t = 0; t < this.length; t += 1) {
            var i = this[t].style;
            i.webkitTransform = e, i.transform = e
        }
        return this
    }, t.transition = function(e) {
        "string" != typeof e && (e = "".concat(e, "ms"));
        for (var t = 0; t < this.length; t += 1) {
            var i = this[t].style;
            i.webkitTransitionDuration = e, i.transitionDuration = e
        }
        return this
    }, t.on = function() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        var n = t[0],
            s = t[1],
            r = t[2],
            o = t[3];
        "function" == typeof t[1] && (n = t[0], r = t[1], o = t[2], s = void 0);
        o || (o = !1);

        function l(e) {
            var t = e.target;
            if (t) {
                var i = e.target.dom7EventData || [];
                if (i.unshift(e), a(t).is(s)) r.apply(t, i);
                else
                    for (var n = a(t).parents(), o = 0; o < n.length; o += 1) a(n[o]).is(s) && r.apply(n[o], i)
            }
        }

        function c(e) {
            var t = e && e.target && e.target.dom7EventData || [];
            t.unshift(e), r.apply(this, t)
        }
        for (var d, u = n.split(" "), h = 0; h < this.length; h += 1) {
            var p = this[h];
            if (s)
                for (d = 0; d < u.length; d += 1) p.dom7LiveListeners || (p.dom7LiveListeners = []), p.dom7LiveListeners.push({ type: n, listener: r, proxyListener: l }), p.addEventListener(u[d], l, o);
            else
                for (d = 0; d < u.length; d += 1) p.dom7Listeners || (p.dom7Listeners = []), p.dom7Listeners.push({ type: n, listener: r, proxyListener: c }), p.addEventListener(u[d], c, o)
        }
        return this
    }, t.off = function() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        var n = t[0],
            s = t[1],
            a = t[2],
            r = t[3];
        "function" == typeof t[1] && (n = t[0], a = t[1], r = t[2], s = void 0);
        r || (r = !1);
        for (var o = n.split(" "), l = 0; l < o.length; l += 1)
            for (var c = 0; c < this.length; c += 1) {
                var d = this[c];
                if (s) {
                    if (d.dom7LiveListeners)
                        for (var u = 0; u < d.dom7LiveListeners.length; u += 1) a ? d.dom7LiveListeners[u].listener === a && d.removeEventListener(o[l], d.dom7LiveListeners[u].proxyListener, r) : d.dom7LiveListeners[u].type === o[l] && d.removeEventListener(o[l], d.dom7LiveListeners[u].proxyListener, r)
                } else if (d.dom7Listeners)
                    for (var h = 0; h < d.dom7Listeners.length; h += 1) a ? d.dom7Listeners[h].listener === a && d.removeEventListener(o[l], d.dom7Listeners[h].proxyListener, r) : d.dom7Listeners[h].type === o[l] && d.removeEventListener(o[l], d.dom7Listeners[h].proxyListener, r)
            }
        return this
    }, t.once = function() {
        for (var e = this, t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
        var s = i[0],
            a = i[1],
            r = i[2],
            o = i[3];
        "function" == typeof i[1] && (s = i[0], r = i[1], o = i[2], a = void 0);
        return e.on(s, a, function t(i) {
            var n = i.target.dom7EventData || [];
            r.apply(this, n);
            e.off(s, a, t, o)
        }, o)
    }, t.trigger = function() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        for (var s = t[0].split(" "), a = t[1], r = 0; r < s.length; r += 1)
            for (var o = 0; o < this.length; o += 1) {
                var l = void 0;
                try { l = new n.window.CustomEvent(s[r], { detail: a, bubbles: !0, cancelable: !0 }) } catch (e) {
                    (l = n.document.createEvent("Event")).initEvent(s[r], !0, !0), l.detail = a
                }
                this[o].dom7EventData = t.filter(function(e, t) { return t > 0 }), this[o].dispatchEvent(l), this[o].dom7EventData = [], delete this[o].dom7EventData
            }
        return this
    }, t.transitionEnd = function(e) {
        var t, i = ["webkitTransitionEnd", "transitionend"],
            n = this;

        function s(a) {
            if (a.target === this)
                for (e.call(this, a), t = 0; t < i.length; t += 1) n.off(i[t], s)
        }
        if (e)
            for (t = 0; t < i.length; t += 1) n.on(i[t], s);
        return this
    }, t.animationEnd = function(e) {
        var t, i = ["webkitAnimationEnd", "animationend"],
            n = this;

        function s(a) {
            if (a.target === this)
                for (e.call(this, a), t = 0; t < i.length; t += 1) n.off(i[t], s)
        }
        if (e)
            for (t = 0; t < i.length; t += 1) n.on(i[t], s);
        return this
    }, t.width = function() { if (this[0] === n.window) return n.window.innerWidth; if (this.length > 0) return parseFloat(this.css("width")); return null }, t.outerWidth = function(e) { if (this.length > 0) { if (e) { var t = this.styles(); return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left")) } return this[0].offsetWidth } return null }, t.height = function() { if (this[0] === n.window) return n.window.innerHeight; if (this.length > 0) return parseFloat(this.css("height")); return null }, t.outerHeight = function(e) { if (this.length > 0) { if (e) { var t = this.styles(); return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom")) } return this[0].offsetHeight } return null }, t.offset = function() {
        if (this.length > 0) {
            var e = this[0],
                t = e.getBoundingClientRect(),
                i = n.document.body,
                s = e.clientTop || i.clientTop || 0,
                a = e.clientLeft || i.clientLeft || 0,
                r = e === n.window ? n.window.scrollY : e.scrollTop,
                o = e === n.window ? n.window.scrollX : e.scrollLeft;
            return { top: t.top + r - s, left: t.left + o - a }
        }
        return null
    }, t.hide = function() { for (var e = 0; e < this.length; e += 1) this[e].style.display = "none"; return this }, t.show = function() { for (var e = 0; e < this.length; e += 1) { var t = this[e]; "none" === t.style.display && (t.style.display = ""), "none" === n.window.getComputedStyle(t, null).getPropertyValue("display") && (t.style.display = "block") } return this }, t.styles = function() { return this[0] ? n.window.getComputedStyle(this[0], null) : {} }, t.css = function(e, t) {
        var i;
        if (1 === arguments.length) {
            if ("string" != typeof e) {
                for (i = 0; i < this.length; i += 1)
                    for (var s in e) this[i].style[s] = e[s];
                return this
            }
            if (this[0]) return n.window.getComputedStyle(this[0], null).getPropertyValue(e)
        }
        if (2 === arguments.length && "string" == typeof e) { for (i = 0; i < this.length; i += 1) this[i].style[e] = t; return this }
        return this
    }, t.toArray = function() { for (var e = [], t = 0; t < this.length; t += 1) e.push(this[t]); return e }, t.each = function(e) {
        if (!e) return this;
        for (var t = 0; t < this.length; t += 1)
            if (!1 === e.call(this[t], t, this[t])) return this;
        return this
    }, t.forEach = function(e) {
        if (!e) return this;
        for (var t = 0; t < this.length; t += 1)
            if (!1 === e.call(this[t], this[t], t)) return this;
        return this
    }, t.filter = function(e) { for (var t = [], i = 0; i < this.length; i += 1) e.call(this[i], i, this[i]) && t.push(this[i]); return new s(t) }, t.map = function(e) { for (var t = [], i = 0; i < this.length; i += 1) t.push(e.call(this[i], i, this[i])); return new s(t) }, t.html = function(e) { if (void 0 === e) return this[0] ? this[0].innerHTML : void 0; for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e; return this }, t.text = function(e) { if (void 0 === e) return this[0] ? this[0].textContent.trim() : null; for (var t = 0; t < this.length; t += 1) this[t].textContent = e; return this }, t.is = function(e) {
        var t, i, r = this[0];
        if (!r || void 0 === e) return !1;
        if ("string" == typeof e) {
            if (r.matches) return r.matches(e);
            if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
            if (r.msMatchesSelector) return r.msMatchesSelector(e);
            for (t = a(e), i = 0; i < t.length; i += 1)
                if (t[i] === r) return !0;
            return !1
        }
        if (e === n.document) return r === n.document;
        if (e === n.window) return r === n.window;
        if (e.nodeType || e instanceof s) {
            for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1)
                if (t[i] === r) return !0;
            return !1
        }
        return !1
    }, t.indexOf = function(e) {
        for (var t = 0; t < this.length; t += 1)
            if (this[t] === e) return t;
        return -1
    }, t.index = function() { var e, t = this[0]; if (t) { for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1); return e } return }, t.eq = function(e) { if (void 0 === e) return this; var t, i = this.length; if (e > i - 1) return new s([]); if (e < 0) return new s((t = i + e) < 0 ? [] : [this[t]]); return new s([this[e]]) }, t.append = function() {
        for (var e, t = 0; t < arguments.length; t += 1) {
            e = t < 0 || arguments.length <= t ? void 0 : arguments[t];
            for (var i = 0; i < this.length; i += 1)
                if ("string" == typeof e) { var a = n.document.createElement("div"); for (a.innerHTML = e; a.firstChild;) this[i].appendChild(a.firstChild) } else if (e instanceof s)
                for (var r = 0; r < e.length; r += 1) this[i].appendChild(e[r]);
            else this[i].appendChild(e)
        }
        return this
    }, t.appendTo = function(e) { return a(e).append(this), this }, t.prepend = function(e) {
        var t, i;
        for (t = 0; t < this.length; t += 1)
            if ("string" == typeof e) { var a = n.document.createElement("div"); for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(a.childNodes[i], this[t].childNodes[0]) } else if (e instanceof s)
            for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
        else this[t].insertBefore(e, this[t].childNodes[0]);
        return this
    }, t.prependTo = function(e) { return a(e).prepend(this), this }, t.insertBefore = function(e) {
        for (var t = a(e), i = 0; i < this.length; i += 1)
            if (1 === t.length) t[0].parentNode.insertBefore(this[i], t[0]);
            else if (t.length > 1)
            for (var n = 0; n < t.length; n += 1) t[n].parentNode.insertBefore(this[i].cloneNode(!0), t[n])
    }, t.insertAfter = function(e) {
        for (var t = a(e), i = 0; i < this.length; i += 1)
            if (1 === t.length) t[0].parentNode.insertBefore(this[i], t[0].nextSibling);
            else if (t.length > 1)
            for (var n = 0; n < t.length; n += 1) t[n].parentNode.insertBefore(this[i].cloneNode(!0), t[n].nextSibling)
    }, t.next = function(e) { if (this.length > 0) return e ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(e) ? new s([this[0].nextElementSibling]) : new s([]) : this[0].nextElementSibling ? new s([this[0].nextElementSibling]) : new s([]); return new s([]) }, t.nextAll = function(e) {
        var t = [],
            i = this[0];
        if (!i) return new s([]);
        for (; i.nextElementSibling;) {
            var n = i.nextElementSibling;
            e ? a(n).is(e) && t.push(n) : t.push(n), i = n
        }
        return new s(t)
    }, t.prev = function(e) { if (this.length > 0) { var t = this[0]; return e ? t.previousElementSibling && a(t.previousElementSibling).is(e) ? new s([t.previousElementSibling]) : new s([]) : t.previousElementSibling ? new s([t.previousElementSibling]) : new s([]) } return new s([]) }, t.prevAll = function(e) {
        var t = [],
            i = this[0];
        if (!i) return new s([]);
        for (; i.previousElementSibling;) {
            var n = i.previousElementSibling;
            e ? a(n).is(e) && t.push(n) : t.push(n), i = n
        }
        return new s(t)
    }, t.siblings = function(e) { return this.nextAll(e).add(this.prevAll(e)) }, t.parent = function(e) { for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? a(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode)); return a(r(t)) }, t.parents = function(e) {
        for (var t = [], i = 0; i < this.length; i += 1)
            for (var n = this[i].parentNode; n;) e ? a(n).is(e) && t.push(n) : t.push(n), n = n.parentNode;
        return a(r(t))
    }, t.closest = function(e) {
        var t = this;
        if (void 0 === e) return new s([]);
        t.is(e) || (t = t.parents(e).eq(0));
        return t
    }, t.find = function(e) {
        for (var t = [], i = 0; i < this.length; i += 1)
            for (var n = this[i].querySelectorAll(e), a = 0; a < n.length; a += 1) t.push(n[a]);
        return new s(t)
    }, t.children = function(e) {
        for (var t = [], i = 0; i < this.length; i += 1)
            for (var n = this[i].childNodes, o = 0; o < n.length; o += 1) e ? 1 === n[o].nodeType && a(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
        return new s(r(t))
    }, t.remove = function() { for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]); return this }, t.detach = function() { return this.remove() }, t.add = function() { for (var e, t, i = arguments.length, n = new Array(i), s = 0; s < i; s++) n[s] = arguments[s]; for (e = 0; e < n.length; e += 1) { var r = a(n[e]); for (t = 0; t < r.length; t += 1) this[this.length] = r[t], this.length += 1 } return this }, t.empty = function() {
        for (var e = 0; e < this.length; e += 1) {
            var t = this[e];
            if (1 === t.nodeType) {
                for (var i = 0; i < t.childNodes.length; i += 1) t.childNodes[i].parentNode && t.childNodes[i].parentNode.removeChild(t.childNodes[i]);
                t.textContent = ""
            }
        }
        return this
    }, t.scrollTo = function() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        var n = t[0],
            s = t[1],
            a = t[2],
            r = t[3],
            l = t[4];
        4 === t.length && "function" == typeof r && (l = r, n = t[0], s = t[1], a = t[2], l = t[3], r = t[4]);
        void 0 === r && (r = "swing");
        return this.each(function() {
            var e, t, i, c, d, u, h, p, f = this,
                v = s > 0 || 0 === s,
                m = n > 0 || 0 === n;
            if (void 0 === r && (r = "swing"), v && (e = f.scrollTop, a || (f.scrollTop = s)), m && (t = f.scrollLeft, a || (f.scrollLeft = n)), a) {
                v && (i = f.scrollHeight - f.offsetHeight, d = Math.max(Math.min(s, i), 0)), m && (c = f.scrollWidth - f.offsetWidth, u = Math.max(Math.min(n, c), 0));
                var g = null;
                v && d === e && (v = !1), m && u === t && (m = !1), o(function i() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (new Date).getTime();
                    null === g && (g = n);
                    var s = Math.max(Math.min((n - g) / a, 1), 0);
                    var c = "linear" === r ? s : .5 - Math.cos(s * Math.PI) / 2;
                    var y;
                    v && (h = e + c * (d - e));
                    m && (p = t + c * (u - t));
                    v && d > e && h >= d && (f.scrollTop = d, y = !0);
                    v && d < e && h <= d && (f.scrollTop = d, y = !0);
                    m && u > t && p >= u && (f.scrollLeft = u, y = !0);
                    m && u < t && p <= u && (f.scrollLeft = u, y = !0);
                    if (y) return void(l && l());
                    v && (f.scrollTop = h);
                    m && (f.scrollLeft = p);
                    o(i)
                })
            }
        })
    }, t.scrollTop = function() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        var n = t[0],
            s = t[1],
            a = t[2],
            r = t[3];
        3 === t.length && "function" == typeof a && (n = t[0], s = t[1], r = t[2], a = t[3]);
        if (void 0 === n) return this.length > 0 ? this[0].scrollTop : null;
        return this.scrollTo(void 0, n, s, a, r)
    }, t.scrollLeft = function() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        var n = t[0],
            s = t[1],
            a = t[2],
            r = t[3];
        3 === t.length && "function" == typeof a && (n = t[0], s = t[1], r = t[2], a = t[3]);
        if (void 0 === n) return this.length > 0 ? this[0].scrollLeft : null;
        return this.scrollTo(n, void 0, s, a, r)
    }, t.animate = function(e, t) {
        var i, s = this,
            a = {
                props: Object.assign({}, e),
                params: Object.assign({ duration: 300, easing: "swing" }, t),
                elements: s,
                animating: !1,
                que: [],
                easingProgress: function(e, t) { return "swing" === e ? .5 - Math.cos(t * Math.PI) / 2 : "function" == typeof e ? e(t) : t },
                stop: function() {
                    a.frameId && function(e) {
                        if (n.window.cancelAnimationFrame) return n.window.cancelAnimationFrame(e);
                        if (n.window.webkitCancelAnimationFrame) return n.window.webkitCancelAnimationFrame(e);
                        n.window.clearTimeout(e)
                    }(a.frameId), a.animating = !1, a.elements.each(function(e, t) {
                        var i = t;
                        delete i.dom7AnimateInstance
                    }), a.que = []
                },
                done: function(e) {
                    if (a.animating = !1, a.elements.each(function(e, t) {
                            var i = t;
                            delete i.dom7AnimateInstance
                        }), e && e(s), a.que.length > 0) {
                        var t = a.que.shift();
                        a.animate(t[0], t[1])
                    }
                },
                animate: function(e, t) {
                    if (a.animating) return a.que.push([e, t]), a;
                    var i = [];
                    a.elements.each(function(t, s) {
                        var r, o, l, c, d;
                        s.dom7AnimateInstance || (a.elements[t].dom7AnimateInstance = a), i[t] = { container: s }, Object.keys(e).forEach(function(a) { r = n.window.getComputedStyle(s, null).getPropertyValue(a).replace(",", "."), o = parseFloat(r), l = r.replace(o, ""), c = parseFloat(e[a]), d = e[a] + l, i[t][a] = { initialFullValue: r, initialValue: o, unit: l, finalValue: c, finalFullValue: d, currentValue: o } })
                    });
                    var r, l, c = null,
                        d = 0,
                        u = 0,
                        h = !1;
                    return a.animating = !0, a.frameId = o(function n() {
                        r = (new Date).getTime();
                        var p;
                        var f;
                        h || (h = !0, t.begin && t.begin(s));
                        null === c && (c = r);
                        t.progress && t.progress(s, Math.max(Math.min((r - c) / t.duration, 1), 0), c + t.duration - r < 0 ? 0 : c + t.duration - r, c);
                        i.forEach(function(n) {
                            var s = n;
                            l || s.done || Object.keys(e).forEach(function(n) {
                                if (!l && !s.done) {
                                    p = Math.max(Math.min((r - c) / t.duration, 1), 0), f = a.easingProgress(t.easing, p);
                                    var o = s[n],
                                        h = o.initialValue,
                                        v = o.finalValue,
                                        m = o.unit;
                                    s[n].currentValue = h + f * (v - h);
                                    var g = s[n].currentValue;
                                    (v > h && g >= v || v < h && g <= v) && (s.container.style[n] = v + m, (u += 1) === Object.keys(e).length && (s.done = !0, d += 1), d === i.length && (l = !0)), l ? a.done(t.complete) : s.container.style[n] = g + m
                                }
                            })
                        });
                        if (l) return;
                        a.frameId = o(n)
                    }), a
                }
            };
        if (0 === a.elements.length) return s;
        for (var r = 0; r < a.elements.length; r += 1) a.elements[r].dom7AnimateInstance ? i = a.elements[r].dom7AnimateInstance : a.elements[r].dom7AnimateInstance = a;
        i || (i = a);
        "stop" === e ? i.stop() : i.animate(a.props, a.params);
        return s
    }, t.stop = function() { for (var e = 0; e < this.length; e += 1) this[e].dom7AnimateInstance && this[e].dom7AnimateInstance.stop() }, t.click = function() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return c.bind(this).apply(void 0, ["click"].concat(t)) }, t.blur = function() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return c.bind(this).apply(void 0, ["blur"].concat(t)) }, t.focus = function() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return c.bind(this).apply(void 0, ["focus"].concat(t)) }, t.focusin = function() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return c.bind(this).apply(void 0, ["focusin"].concat(t)) }, t.focusout = function() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return c.bind(this).apply(void 0, ["focusout"].concat(t)) }, t.keyup = function() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return c.bind(this).apply(void 0, ["keyup"].concat(t)) }, t.keydown = function() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return c.bind(this).apply(void 0, ["keydown"].concat(t)) }, t.keypress = function() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return c.bind(this).apply(void 0, ["keypress"].concat(t)) }, t.submit = function() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return c.bind(this).apply(void 0, ["submit"].concat(t)) }, t.change = function() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return c.bind(this).apply(void 0, ["change"].concat(t)) }, t.mousedown = function() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return c.bind(this).apply(void 0, ["mousedown"].concat(t)) }, t.mousemove = function() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return c.bind(this).apply(void 0, ["mousemove"].concat(t)) }, t.mouseup = function() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return c.bind(this).apply(void 0, ["mouseup"].concat(t)) }, t.mouseenter = function() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return c.bind(this).apply(void 0, ["mouseenter"].concat(t)) }, t.mouseleave = function() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return c.bind(this).apply(void 0, ["mouseleave"].concat(t)) }, t.mouseout = function() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return c.bind(this).apply(void 0, ["mouseout"].concat(t)) }, t.mouseover = function() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return c.bind(this).apply(void 0, ["mouseover"].concat(t)) }, t.touchstart = function() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return c.bind(this).apply(void 0, ["touchstart"].concat(t)) }, t.touchend = function() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return c.bind(this).apply(void 0, ["touchend"].concat(t)) }, t.touchmove = function() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return c.bind(this).apply(void 0, ["touchmove"].concat(t)) }, t.resize = function() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return c.bind(this).apply(void 0, ["resize"].concat(t)) }, t.scroll = function() { for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return c.bind(this).apply(void 0, ["scroll"].concat(t)) };
    var n = i(0);
    var s = function e(t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e); for (var i = 0; i < t.length; i += 1) this[i] = t[i]; return this.length = t.length, this };

    function a(e, t) {
        var i = [],
            a = 0;
        if (e && !t && e instanceof s) return e;
        if (e)
            if ("string" == typeof e) {
                var r, o, l = e.trim();
                if (l.indexOf("<") >= 0 && l.indexOf(">") >= 0) { var c = "div"; for (0 === l.indexOf("<li") && (c = "ul"), 0 === l.indexOf("<tr") && (c = "tbody"), 0 !== l.indexOf("<td") && 0 !== l.indexOf("<th") || (c = "tr"), 0 === l.indexOf("<tbody") && (c = "table"), 0 === l.indexOf("<option") && (c = "select"), (o = n.document.createElement(c)).innerHTML = l, a = 0; a < o.childNodes.length; a += 1) i.push(o.childNodes[a]) } else
                    for (r = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || n.document).querySelectorAll(e.trim()) : [n.document.getElementById(e.trim().split("#")[1])], a = 0; a < r.length; a += 1) r[a] && i.push(r[a])
            } else if (e.nodeType || e === n.window || e === n.document) i.push(e);
        else if (e.length > 0 && e[0].nodeType)
            for (a = 0; a < e.length; a += 1) i.push(e[a]);
        return new s(i)
    }

    function r(e) { for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]); return t }

    function o(e) { return n.window.requestAnimationFrame ? n.window.requestAnimationFrame(e) : n.window.webkitRequestAnimationFrame ? n.window.webkitRequestAnimationFrame(e) : n.window.setTimeout(e, 1e3 / 60) }
    a.fn = s.prototype, a.Class = s, a.Dom7 = s;
    var l = "resize scroll".split(" ");

    function c(e) { for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n]; if (void 0 === i[0]) { for (var s = 0; s < this.length; s += 1) l.indexOf(e) < 0 && (e in this[s] ? this[s][e]() : a(this[s]).trigger(e)); return this } return this.on.apply(this, [e].concat(i)) }
}]);