var require, define;
! function(a) { if (!require) { var c = document.getElementsByTagName("head")[0],
            h = {},
            v = {},
            y = {},
            g = {},
            j = {},
            C = {},
            T = function(a, h) { for (var v = document.createDocumentFragment(), i = 0, y = a.length; y > i; i++) { var j = a[i].id,
                        C = a[i].url; if (!(C in g)) { g[C] = !0; var T = document.createElement("script");
                        h && ! function(a, c) { var v = setTimeout(function() { h(c) }, require.timeout);
                            a.onerror = function() { clearTimeout(v), h(c) }; var y = function() { clearTimeout(v) }; "onload" in a ? a.onload = y : a.onreadystatechange = function() {
                                ("loaded" === this.readyState || "complete" === this.readyState) && y() } }(T, j), T.type = "text/javascript", T.src = C, v.appendChild(T) } }
                c.appendChild(v) },
            E = function(a, c, v) { for (var y = [], i = 0, g = a.length; g > i; i++) { var E = a[i],
                        S = h[E] || (h[E] = []);
                    S.push(c); var k, w = j[E] || j[E + ".js"] || {},
                        M = w.pkg;
                    k = M ? C[M].url || C[M].uri : w.url || w.uri || E, y.push({ id: E, url: k }) }
                T(y, v) };
        define = function(a, c) { a = a.replace(/\.js$/i, ""), v[a] = c; var y = h[a]; if (y) { for (var i = 0, n = y.length; n > i; i++) y[i]();
                delete h[a] } }, require = function(a) { if (a && a.splice) return require.async.apply(this, arguments);
            a = require.alias(a); var mod = y[a]; if (mod) return mod.exports; var c = v[a];
            mod = y[a] = { exports: {} }; var h = "function" == typeof c ? c.apply(mod, [require, mod.exports, mod]) : c; return h && (mod.exports = h), mod.exports }, require.async = function(c, h, y) {
            function g(a) { for (var c, i = 0, n = a.length; n > i; i++) { var h = require.alias(a[i]);
                    h in T || (T[h] = !0, h in v ? (c = j[h] || j[h + ".js"], c && "deps" in c && g(c.deps)) : (k.push(h), S++, c = j[h] || j[h + ".js"], c && "deps" in c && g(c.deps))) } }

            function C() { if (0 === S--) { for (var v = [], i = 0, n = c.length; n > i; i++) v[i] = require(c[i]);
                    h && h.apply(a, v) } } "string" == typeof c && (c = [c]); var T = {},
                S = 0,
                k = [];
            g(c), E(k, C, y), C() }, require.ensure = function(a, c) { require.async(a, function() { c && c.call(this, require) }) }, require.resourceMap = function(a) { var c, h;
            h = a.res; for (c in h) h.hasOwnProperty(c) && (j[c] = h[c]);
            h = a.pkg; for (c in h) h.hasOwnProperty(c) && (C[c] = h[c]) }, require.loadJs = function(a) { if (!(a in g)) { g[a] = !0; var h = document.createElement("script");
                h.type = "text/javascript", h.src = a, c.appendChild(h) } }, require.loadCss = function(a) { if (a.content) { var h = document.createElement("style");
                h.type = "text/css", h.styleSheet ? h.styleSheet.cssText = a.content : h.innerHTML = a.content, c.appendChild(h) } else if (a.url) { var v = document.createElement("link");
                v.href = a.url, v.rel = "stylesheet", v.type = "text/css", c.appendChild(v) } }, require.alias = function(a) { return a.replace(/\.js$/i, "") }, require.timeout = 5e3 } }(this);
! function(a, c) { "function" == typeof define && define.amd ? define(function() { return c(a) }) : c(a) }(this, function(a) { var c = function() {
        function c(a) { return null == a ? String(a) : pe[me.call(a)] || "object" }

        function h(a) { return "function" == c(a) }

        function g(a) { return null != a && a == a.window }

        function v(a) { return null != a && a.nodeType == a.DOCUMENT_NODE }

        function y(a) { return "object" == c(a) }

        function b(a) { return y(a) && !g(a) && Object.getPrototypeOf(a) == Object.prototype }

        function E(a) { var c = !!a && "length" in a && a.length,
                h = z.type(a); return "function" != h && !g(a) && ("array" == h || 0 === c || "number" == typeof c && c > 0 && c - 1 in a) }

        function j(a) { return U.call(a, function(a) { return null != a }) }

        function T(a) { return a.length > 0 ? z.fn.concat.apply([], a) : a }

        function w(a) { return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase() }

        function S(a) { return a in Y ? Y[a] : Y[a] = new RegExp("(^|\\s)" + a + "(\\s|$)") }

        function C(a, c) { return "number" != typeof c || G[w(a)] ? c : c + "px" }

        function N(a) { var c, h; return W[a] || (c = J.createElement(a), J.body.appendChild(c), h = getComputedStyle(c, "").getPropertyValue("display"), c.parentNode.removeChild(c), "none" == h && (h = "block"), W[a] = h), W[a] }

        function O(a) { return "children" in a ? X.call(a.children) : z.map(a.childNodes, function(a) { return 1 == a.nodeType ? a : void 0 }) }

        function P(a, c) { var i, h = a ? a.length : 0; for (i = 0; h > i; i++) this[i] = a[i];
            this.length = h, this.selector = c || "" }

        function A(a, c, h) { for (Z in c) h && (b(c[Z]) || xe(c[Z])) ? (b(c[Z]) && !b(a[Z]) && (a[Z] = {}), xe(c[Z]) && !xe(a[Z]) && (a[Z] = []), A(a[Z], c[Z], h)) : c[Z] !== R && (a[Z] = c[Z]) }

        function D(a, c) { return null == c ? z(a) : z(a).filter(c) }

        function L(a, c, g, v) { return h(c) ? c.call(a, g, v) : c }

        function $(a, c, h) { null == h ? a.removeAttribute(c) : a.setAttribute(c, h) }

        function F(a, c) { var h = a.className || "",
                g = h && h.baseVal !== R; return c === R ? g ? h.baseVal : h : void(g ? h.baseVal = c : a.className = c) }

        function k(a) { try { return a ? "true" == a || ("false" == a ? !1 : "null" == a ? null : +a + "" == a ? +a : /^[\[\{]/.test(a) ? z.parseJSON(a) : a) : a } catch (e) { return a } }

        function M(a, c) { c(a); for (var i = 0, h = a.childNodes.length; h > i; i++) M(a.childNodes[i], c) } var R, Z, z, H, I, V, _ = [],
            B = _.concat,
            U = _.filter,
            X = _.slice,
            J = a.document,
            W = {},
            Y = {},
            G = { "column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1 },
            K = /^\s*<(\w+|!)[^>]*>/,
            Q = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            ee = /^(?:body|html)$/i,
            ie = /([A-Z])/g,
            oe = ["val", "css", "html", "text", "data", "width", "height", "offset"],
            ae = ["after", "prepend", "before", "append"],
            se = J.createElement("table"),
            ue = J.createElement("tr"),
            ce = { tr: J.createElement("tbody"), tbody: se, thead: se, tfoot: se, td: ue, th: ue, "*": J.createElement("div") },
            fe = /complete|loaded|interactive/,
            he = /^[\w-]*$/,
            pe = {},
            me = pe.toString,
            ge = {},
            ve = J.createElement("div"),
            ye = { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" },
            xe = Array.isArray || function(a) { return a instanceof Array }; return ge.matches = function(a, c) { if (!c || !a || 1 !== a.nodeType) return !1; var h = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector; if (h) return h.call(a, c); var g, v = a.parentNode,
                y = !v; return y && (v = ve).appendChild(a), g = ~ge.qsa(v, c).indexOf(a), y && ve.removeChild(a), g }, I = function(a) { return a.replace(/-+(.)?/g, function(a, c) { return c ? c.toUpperCase() : "" }) }, V = function(a) { return U.call(a, function(c, h) { return a.indexOf(c) == h }) }, ge.fragment = function(a, c, h) { var g, v, y; return Q.test(a) && (g = z(J.createElement(RegExp.$1))), g || (a.replace && (a = a.replace(te, "<$1></$2>")), c === R && (c = K.test(a) && RegExp.$1), c in ce || (c = "*"), y = ce[c], y.innerHTML = "" + a, g = z.each(X.call(y.childNodes), function() { y.removeChild(this) })), b(h) && (v = z(g), z.each(h, function(a, c) { oe.indexOf(a) > -1 ? v[a](c) : v.attr(a, c) })), g }, ge.Z = function(a, c) { return new P(a, c) }, ge.isZ = function(a) { return a instanceof ge.Z }, ge.init = function(a, c) { var g; if (!a) return ge.Z(); if ("string" == typeof a)
                if (a = a.trim(), "<" == a[0] && K.test(a)) g = ge.fragment(a, RegExp.$1, c), a = null;
                else { if (c !== R) return z(c).find(a);
                    g = ge.qsa(J, a) }
            else { if (h(a)) return z(J).ready(a); if (ge.isZ(a)) return a; if (xe(a)) g = j(a);
                else if (y(a)) g = [a], a = null;
                else if (K.test(a)) g = ge.fragment(a.trim(), RegExp.$1, c), a = null;
                else { if (c !== R) return z(c).find(a);
                    g = ge.qsa(J, a) } } return ge.Z(g, a) }, z = function(a, c) { return ge.init(a, c) }, z.extend = function(a) { var c, h = X.call(arguments, 1); return "boolean" == typeof a && (c = a, a = h.shift()), h.forEach(function(h) { A(a, h, c) }), a }, ge.qsa = function(a, c) { var h, g = "#" == c[0],
                v = !g && "." == c[0],
                y = g || v ? c.slice(1) : c,
                b = he.test(y); return a.getElementById && b && g ? (h = a.getElementById(y)) ? [h] : [] : 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType ? [] : X.call(b && !g && a.getElementsByClassName ? v ? a.getElementsByClassName(y) : a.getElementsByTagName(c) : a.querySelectorAll(c)) }, z.contains = J.documentElement.contains ? function(a, c) { return a !== c && a.contains(c) } : function(a, c) { for (; c && (c = c.parentNode);)
                if (c === a) return !0;
            return !1 }, z.type = c, z.isFunction = h, z.isWindow = g, z.isArray = xe, z.isPlainObject = b, z.isEmptyObject = function(a) { var c; for (c in a) return !1; return !0 }, z.isNumeric = function(a) { var c = Number(a),
                h = typeof a; return null != a && "boolean" != h && ("string" != h || a.length) && !isNaN(c) && isFinite(c) || !1 }, z.inArray = function(a, c, i) { return _.indexOf.call(c, a, i) }, z.camelCase = I, z.trim = function(a) { return null == a ? "" : String.prototype.trim.call(a) }, z.uuid = 0, z.support = {}, z.expr = {}, z.noop = function() {}, z.map = function(a, c) { var h, i, g, v = []; if (E(a))
                for (i = 0; i < a.length; i++) h = c(a[i], i), null != h && v.push(h);
            else
                for (g in a) h = c(a[g], g), null != h && v.push(h); return T(v) }, z.each = function(a, c) { var i, h; if (E(a)) { for (i = 0; i < a.length; i++)
                    if (c.call(a[i], i, a[i]) === !1) return a } else
                for (h in a)
                    if (c.call(a[h], h, a[h]) === !1) return a; return a }, z.grep = function(a, c) { return U.call(a, c) }, a.JSON && (z.parseJSON = JSON.parse), z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, a) { pe["[object " + a + "]"] = a.toLowerCase() }), z.fn = { constructor: ge.Z, length: 0, forEach: _.forEach, reduce: _.reduce, push: _.push, sort: _.sort, splice: _.splice, indexOf: _.indexOf, concat: function() { var i, a, c = []; for (i = 0; i < arguments.length; i++) a = arguments[i], c[i] = ge.isZ(a) ? a.toArray() : a; return B.apply(ge.isZ(this) ? this.toArray() : this, c) }, map: function(a) { return z(z.map(this, function(c, i) { return a.call(c, i, c) })) }, slice: function() { return z(X.apply(this, arguments)) }, ready: function(a) { return fe.test(J.readyState) && J.body ? a(z) : J.addEventListener("DOMContentLoaded", function() { a(z) }, !1), this }, get: function(a) { return a === R ? X.call(this) : this[a >= 0 ? a : a + this.length] }, toArray: function() { return this.get() }, size: function() { return this.length }, remove: function() { return this.each(function() { null != this.parentNode && this.parentNode.removeChild(this) }) }, each: function(a) { return _.every.call(this, function(c, h) { return a.call(c, h, c) !== !1 }), this }, filter: function(a) { return h(a) ? this.not(this.not(a)) : z(U.call(this, function(c) { return ge.matches(c, a) })) }, add: function(a, c) { return z(V(this.concat(z(a, c)))) }, is: function(a) { return this.length > 0 && ge.matches(this[0], a) }, not: function(a) { var c = []; if (h(a) && a.call !== R) this.each(function(h) { a.call(this, h) || c.push(this) });
                else { var g = "string" == typeof a ? this.filter(a) : E(a) && h(a.item) ? X.call(a) : z(a);
                    this.forEach(function(a) { g.indexOf(a) < 0 && c.push(a) }) } return z(c) }, has: function(a) { return this.filter(function() { return y(a) ? z.contains(this, a) : z(this).find(a).size() }) }, eq: function(a) { return -1 === a ? this.slice(a) : this.slice(a, +a + 1) }, first: function() { var a = this[0]; return a && !y(a) ? a : z(a) }, last: function() { var a = this[this.length - 1]; return a && !y(a) ? a : z(a) }, find: function(a) { var c, h = this; return c = a ? "object" == typeof a ? z(a).filter(function() { var a = this; return _.some.call(h, function(c) { return z.contains(c, a) }) }) : 1 == this.length ? z(ge.qsa(this[0], a)) : this.map(function() { return ge.qsa(this, a) }) : z() }, closest: function(a, c) { var h = [],
                    g = "object" == typeof a && z(a); return this.each(function(y, b) { for (; b && !(g ? g.indexOf(b) >= 0 : ge.matches(b, a));) b = b !== c && !v(b) && b.parentNode;
                    b && h.indexOf(b) < 0 && h.push(b) }), z(h) }, parents: function(a) { for (var c = [], h = this; h.length > 0;) h = z.map(h, function(a) { return (a = a.parentNode) && !v(a) && c.indexOf(a) < 0 ? (c.push(a), a) : void 0 }); return D(c, a) }, parent: function(a) { return D(V(this.pluck("parentNode")), a) }, children: function(a) { return D(this.map(function() { return O(this) }), a) }, contents: function() { return this.map(function() { return this.contentDocument || X.call(this.childNodes) }) }, siblings: function(a) { return D(this.map(function(i, a) { return U.call(O(a.parentNode), function(c) { return c !== a }) }), a) }, empty: function() { return this.each(function() { this.innerHTML = "" }) }, pluck: function(a) { return z.map(this, function(c) { return c[a] }) }, show: function() { return this.each(function() { "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = N(this.nodeName)) }) }, replaceWith: function(a) { return this.before(a).remove() }, wrap: function(a) { var c = h(a); if (this[0] && !c) var g = z(a).get(0),
                    v = g.parentNode || this.length > 1; return this.each(function(h) { z(this).wrapAll(c ? a.call(this, h) : v ? g.cloneNode(!0) : g) }) }, wrapAll: function(a) { if (this[0]) { z(this[0]).before(a = z(a)); for (var c;
                        (c = a.children()).length;) a = c.first();
                    z(a).append(this) } return this }, wrapInner: function(a) { var c = h(a); return this.each(function(h) { var g = z(this),
                        v = g.contents(),
                        y = c ? a.call(this, h) : a;
                    v.length ? v.wrapAll(y) : g.append(y) }) }, unwrap: function() { return this.parent().each(function() { z(this).replaceWith(z(this).children()) }), this }, clone: function() { return this.map(function() { return this.cloneNode(!0) }) }, hide: function() { return this.css("display", "none") }, toggle: function(a) { return this.each(function() { var c = z(this);
                    (a === R ? "none" == c.css("display") : a) ? c.show(): c.hide() }) }, prev: function(a) { return z(this.pluck("previousElementSibling")).filter(a || "*") }, next: function(a) { return z(this.pluck("nextElementSibling")).filter(a || "*") }, html: function(a) { return 0 in arguments ? this.each(function(c) { var h = this.innerHTML;
                    z(this).empty().append(L(this, a, c, h)) }) : 0 in this ? this[0].innerHTML : null }, text: function(a) { return 0 in arguments ? this.each(function(c) { var h = L(this, a, c, this.textContent);
                    this.textContent = null == h ? "" : "" + h }) : 0 in this ? this.pluck("textContent").join("") : null }, attr: function(a, c) { var h; return "string" != typeof a || 1 in arguments ? this.each(function(h) { if (1 === this.nodeType)
                        if (y(a))
                            for (Z in a) $(this, Z, a[Z]);
                        else $(this, a, L(this, c, h, this.getAttribute(a))) }) : 0 in this && 1 == this[0].nodeType && null != (h = this[0].getAttribute(a)) ? h : R }, removeAttr: function(a) { return this.each(function() { 1 === this.nodeType && a.split(" ").forEach(function(a) { $(this, a) }, this) }) }, prop: function(a, c) { return a = ye[a] || a, 1 in arguments ? this.each(function(h) { this[a] = L(this, c, h, this[a]) }) : this[0] && this[0][a] }, removeProp: function(a) { return a = ye[a] || a, this.each(function() { delete this[a] }) }, data: function(a, c) { var h = "data-" + a.replace(ie, "-$1").toLowerCase(),
                    g = 1 in arguments ? this.attr(h, c) : this.attr(h); return null !== g ? k(g) : R }, val: function(a) { return 0 in arguments ? (null == a && (a = ""), this.each(function(c) { this.value = L(this, a, c, this.value) })) : this[0] && (this[0].multiple ? z(this[0]).find("option").filter(function() { return this.selected }).pluck("value") : this[0].value) }, offset: function(c) { if (c) return this.each(function(a) { var h = z(this),
                        g = L(this, c, a, h.offset()),
                        v = h.offsetParent().offset(),
                        y = { top: g.top - v.top, left: g.left - v.left }; "static" == h.css("position") && (y.position = "relative"), h.css(y) }); if (!this.length) return null; if (J.documentElement !== this[0] && !z.contains(J.documentElement, this[0])) return { top: 0, left: 0 }; var h = this[0].getBoundingClientRect(); return { left: h.left + a.pageXOffset, top: h.top + a.pageYOffset, width: Math.round(h.width), height: Math.round(h.height) } }, css: function(a, h) { if (arguments.length < 2) { var g = this[0]; if ("string" == typeof a) { if (!g) return; return g.style[I(a)] || getComputedStyle(g, "").getPropertyValue(a) } if (xe(a)) { if (!g) return; var v = {},
                            y = getComputedStyle(g, ""); return z.each(a, function(a, c) { v[c] = g.style[I(c)] || y.getPropertyValue(c) }), v } } var b = ""; if ("string" == c(a)) h || 0 === h ? b = w(a) + ":" + C(a, h) : this.each(function() { this.style.removeProperty(w(a)) });
                else
                    for (Z in a) a[Z] || 0 === a[Z] ? b += w(Z) + ":" + C(Z, a[Z]) + ";" : this.each(function() { this.style.removeProperty(w(Z)) }); return this.each(function() { this.style.cssText += ";" + b }) }, index: function(a) { return a ? this.indexOf(z(a)[0]) : this.parent().children().indexOf(this[0]) }, hasClass: function(a) { return a ? _.some.call(this, function(a) { return this.test(F(a)) }, S(a)) : !1 }, addClass: function(a) { return a ? this.each(function(c) { if ("className" in this) { H = []; var h = F(this),
                            g = L(this, a, c, h);
                        g.split(/\s+/g).forEach(function(a) { z(this).hasClass(a) || H.push(a) }, this), H.length && F(this, h + (h ? " " : "") + H.join(" ")) } }) : this }, removeClass: function(a) { return this.each(function(c) { if ("className" in this) { if (a === R) return F(this, "");
                        H = F(this), L(this, a, c, H).split(/\s+/g).forEach(function(a) { H = H.replace(S(a), " ") }), F(this, H.trim()) } }) }, toggleClass: function(a, c) { return a ? this.each(function(h) { var g = z(this),
                        v = L(this, a, h, F(this));
                    v.split(/\s+/g).forEach(function(a) {
                        (c === R ? !g.hasClass(a) : c) ? g.addClass(a): g.removeClass(a) }) }) : this }, scrollTop: function(a) { if (this.length) { var c = "scrollTop" in this[0]; return a === R ? c ? this[0].scrollTop : this[0].pageYOffset : this.each(c ? function() { this.scrollTop = a } : function() { this.scrollTo(this.scrollX, a) }) } }, scrollLeft: function(a) { if (this.length) { var c = "scrollLeft" in this[0]; return a === R ? c ? this[0].scrollLeft : this[0].pageXOffset : this.each(c ? function() { this.scrollLeft = a } : function() { this.scrollTo(a, this.scrollY) }) } }, position: function() { if (this.length) { var a = this[0],
                        c = this.offsetParent(),
                        h = this.offset(),
                        g = ee.test(c[0].nodeName) ? { top: 0, left: 0 } : c.offset(); return h.top -= parseFloat(z(a).css("margin-top")) || 0, h.left -= parseFloat(z(a).css("margin-left")) || 0, g.top += parseFloat(z(c[0]).css("border-top-width")) || 0, g.left += parseFloat(z(c[0]).css("border-left-width")) || 0, { top: h.top - g.top, left: h.left - g.left } } }, offsetParent: function() { return this.map(function() { for (var a = this.offsetParent || J.body; a && !ee.test(a.nodeName) && "static" == z(a).css("position");) a = a.offsetParent; return a }) } }, z.fn.detach = z.fn.remove, ["width", "height"].forEach(function(a) { var c = a.replace(/./, function(m) { return m[0].toUpperCase() });
            z.fn[a] = function(h) { var y, b = this[0]; return h === R ? g(b) ? b["inner" + c] : v(b) ? b.documentElement["scroll" + c] : (y = this.offset()) && y[a] : this.each(function(c) { b = z(this), b.css(a, L(this, h, c, b[a]())) }) } }), ae.forEach(function(h, g) { var v = g % 2;
            z.fn[h] = function() { var h, y, b = z.map(arguments, function(a) { var g = []; return h = c(a), "array" == h ? (a.forEach(function(a) { return a.nodeType !== R ? g.push(a) : z.zepto.isZ(a) ? g = g.concat(a.get()) : void(g = g.concat(ge.fragment(a))) }), g) : "object" == h || null == a ? a : ge.fragment(a) }),
                    E = this.length > 1; return b.length < 1 ? this : this.each(function(c, h) { y = v ? h : h.parentNode, h = 0 == g ? h.nextSibling : 1 == g ? h.firstChild : 2 == g ? h : null; var j = z.contains(J.documentElement, y);
                    b.forEach(function(c) { if (E) c = c.cloneNode(!0);
                        else if (!y) return z(c).remove();
                        y.insertBefore(c, h), j && M(c, function(c) { if (!(null == c.nodeName || "SCRIPT" !== c.nodeName.toUpperCase() || c.type && "text/javascript" !== c.type || c.src)) { var h = c.ownerDocument ? c.ownerDocument.defaultView : a;
                                h.eval.call(h, c.innerHTML) } }) }) }) }, z.fn[v ? h + "To" : "insert" + (g ? "Before" : "After")] = function(a) { return z(a)[h](this), this } }), ge.Z.prototype = P.prototype = z.fn, ge.uniq = V, ge.deserializeValue = k, z.zepto = ge, z }(); return a.Zepto = c, void 0 === a.$ && (a.$ = c),
        function(c) {
            function h(a) { return a._zid || (a._zid = N++) }

            function g(a, c, g, b) { if (c = v(c), c.ns) var E = y(c.ns); return (D[h(a)] || []).filter(function(a) { return !(!a || c.e && a.e != c.e || c.ns && !E.test(a.ns) || g && h(a.fn) !== h(g) || b && a.sel != b) }) }

            function v(a) { var c = ("" + a).split("."); return { e: c[0], ns: c.slice(1).sort().join(" ") } }

            function y(a) { return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)") }

            function b(a, c) { return a.del && !$ && a.e in F || !!c }

            function E(a) { return k[a] || $ && F[a] || a }

            function j(a, g, y, j, T, S, N) { var O = h(a),
                    P = D[O] || (D[O] = []);
                g.split(/\s/).forEach(function(h) { if ("ready" == h) return c(document).ready(y); var g = v(h);
                    g.fn = y, g.sel = T, g.e in k && (y = function(e) { var a = e.relatedTarget; return !a || a !== this && !c.contains(this, a) ? g.fn.apply(this, arguments) : void 0 }), g.del = S; var O = S || y;
                    g.proxy = function(e) { if (e = w(e), !e.isImmediatePropagationStopped()) { e.data = j; var c = O.apply(a, e._args == C ? [e] : [e].concat(e._args)); return c === !1 && (e.preventDefault(), e.stopPropagation()), c } }, g.i = P.length, P.push(g), "addEventListener" in a && a.addEventListener(E(g.e), g.proxy, b(g, N)) }) }

            function T(a, c, v, y, j) { var T = h(a);
                (c || "").split(/\s/).forEach(function(c) { g(a, c, v, y).forEach(function(c) { delete D[T][c.i], "removeEventListener" in a && a.removeEventListener(E(c.e), c.proxy, b(c, j)) }) }) }

            function w(a, h) { return (h || !a.isDefaultPrevented) && (h || (h = a), c.each(z, function(c, g) { var v = h[c];
                    a[c] = function() { return this[g] = M, v && v.apply(h, arguments) }, a[g] = R }), a.timeStamp || (a.timeStamp = Date.now()), (h.defaultPrevented !== C ? h.defaultPrevented : "returnValue" in h ? h.returnValue === !1 : h.getPreventDefault && h.getPreventDefault()) && (a.isDefaultPrevented = M)), a }

            function S(a) { var c, h = { originalEvent: a }; for (c in a) Z.test(c) || a[c] === C || (h[c] = a[c]); return w(h, a) } var C, N = 1,
                O = Array.prototype.slice,
                P = c.isFunction,
                A = function(a) { return "string" == typeof a },
                D = {},
                L = {},
                $ = "onfocusin" in a,
                F = { focus: "focusin", blur: "focusout" },
                k = { mouseenter: "mouseover", mouseleave: "mouseout" };
            L.click = L.mousedown = L.mouseup = L.mousemove = "MouseEvents", c.event = { add: j, remove: T }, c.proxy = function(a, g) { var v = 2 in arguments && O.call(arguments, 2); if (P(a)) { var y = function() { return a.apply(g, v ? v.concat(O.call(arguments)) : arguments) }; return y._zid = h(a), y } if (A(g)) return v ? (v.unshift(a[g], a), c.proxy.apply(null, v)) : c.proxy(a[g], a); throw new TypeError("expected function") }, c.fn.bind = function(a, c, h) { return this.on(a, c, h) }, c.fn.unbind = function(a, c) { return this.off(a, c) }, c.fn.one = function(a, c, h, g) { return this.on(a, c, h, g, 1) }; var M = function() { return !0 },
                R = function() { return !1 },
                Z = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
                z = { preventDefault: "isDefaultPrevented", stopImmediatePropagation: "isImmediatePropagationStopped", stopPropagation: "isPropagationStopped" };
            c.fn.delegate = function(a, c, h) { return this.on(c, a, h) }, c.fn.undelegate = function(a, c, h) { return this.off(c, a, h) }, c.fn.live = function(a, h) { return c(document.body).delegate(this.selector, a, h), this }, c.fn.die = function(a, h) { return c(document.body).undelegate(this.selector, a, h), this }, c.fn.on = function(a, h, g, v, y) { var b, E, w = this; return a && !A(a) ? (c.each(a, function(a, c) { w.on(a, h, g, c, y) }), w) : (A(h) || P(v) || v === !1 || (v = g, g = h, h = C), (v === C || g === !1) && (v = g, g = C), v === !1 && (v = R), w.each(function(w, C) { y && (b = function(e) { return T(C, e.type, v), v.apply(this, arguments) }), h && (E = function(e) { var a, g = c(e.target).closest(h, C).get(0); return g && g !== C ? (a = c.extend(S(e), { currentTarget: g, liveFired: C }), (b || v).apply(g, [a].concat(O.call(arguments, 1)))) : void 0 }), j(C, a, v, g, h, E || b) })) }, c.fn.off = function(a, h, g) { var v = this; return a && !A(a) ? (c.each(a, function(a, c) { v.off(a, h, c) }), v) : (A(h) || P(g) || g === !1 || (g = h, h = C), g === !1 && (g = R), v.each(function() { T(this, a, g, h) })) }, c.fn.trigger = function(a, h) { return a = A(a) || c.isPlainObject(a) ? c.Event(a) : w(a), a._args = h, this.each(function() { a.type in F && "function" == typeof this[a.type] ? this[a.type]() : "dispatchEvent" in this ? this.dispatchEvent(a) : c(this).triggerHandler(a, h) }) }, c.fn.triggerHandler = function(a, h) { var e, v; return this.each(function(i, y) { e = S(A(a) ? c.Event(a) : a), e._args = h, e.target = y, c.each(g(y, a.type || a), function(i, a) { return v = a.proxy(e), e.isImmediatePropagationStopped() ? !1 : void 0 }) }), v }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(a) { c.fn[a] = function(c) { return 0 in arguments ? this.bind(a, c) : this.trigger(a) } }), c.Event = function(a, c) { A(a) || (c = a, a = c.type); var h = document.createEvent(L[a] || "Events"),
                    g = !0; if (c)
                    for (var v in c) "bubbles" == v ? g = !!c[v] : h[v] = c[v]; return h.initEvent(a, g, !0), w(h) } }(c),
        function(c) {
            function h(a, h, g) { var v = c.Event(h); return c(a).trigger(v, g), !v.isDefaultPrevented() }

            function g(a, c, g, v) { return a.global ? h(c || F, g, v) : void 0 }

            function v(a) { a.global && 0 === c.active++ && g(a, null, "ajaxStart") }

            function y(a) { a.global && !--c.active && g(a, null, "ajaxStop") }

            function b(a, c) { var h = c.context; return c.beforeSend.call(h, a, c) === !1 || g(c, h, "ajaxBeforeSend", [a, c]) === !1 ? !1 : void g(c, h, "ajaxSend", [a, c]) }

            function E(a, c, h, v) { var y = h.context,
                    b = "success";
                h.success.call(y, a, b, c), v && v.resolveWith(y, [a, b, c]), g(h, y, "ajaxSuccess", [c, h, a]), T(b, c, h) }

            function j(a, c, h, v, y) { var b = v.context;
                v.error.call(b, h, c, a), y && y.rejectWith(b, [h, c, a]), g(v, b, "ajaxError", [h, v, a || c]), T(c, h, v) }

            function T(a, c, h) { var v = h.context;
                h.complete.call(v, c, a), g(h, v, "ajaxComplete", [c, h]), y(h) }

            function w(a, c, h) { if (h.dataFilter == S) return a; var g = h.context; return h.dataFilter.call(g, a, c) }

            function S() {}

            function C(a) { return a && (a = a.split(";", 2)[0]), a && (a == z ? "html" : a == Z ? "json" : M.test(a) ? "script" : R.test(a) && "xml") || "text" }

            function N(a, c) { return "" == c ? a : (a + "&" + c).replace(/[&?]{1,2}/, "?") }

            function O(a) { a.processData && a.data && "string" != c.type(a.data) && (a.data = c.param(a.data, a.traditional)), !a.data || a.type && "GET" != a.type.toUpperCase() && "jsonp" != a.dataType || (a.url = N(a.url, a.data), a.data = void 0) }

            function P(a, h, g, v) { return c.isFunction(h) && (v = g, g = h, h = void 0), c.isFunction(g) || (v = g, g = void 0), { url: a, data: h, success: g, dataType: v } }

            function A(a, h, g, v) { var y, b = c.isArray(h),
                    E = c.isPlainObject(h);
                c.each(h, function(h, j) { y = c.type(j), v && (h = g ? v : v + "[" + (E || "object" == y || "array" == y ? h : "") + "]"), !v && b ? a.add(j.name, j.value) : "array" == y || !g && "object" == y ? A(a, j, g, h) : a.add(h, j) }) } var D, L, $ = +new Date,
                F = a.document,
                k = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                M = /^(?:text|application)\/javascript/i,
                R = /^(?:text|application)\/xml/i,
                Z = "application/json",
                z = "text/html",
                H = /^\s*$/,
                I = F.createElement("a");
            I.href = a.location.href, c.active = 0, c.ajaxJSONP = function(h, g) { if (!("type" in h)) return c.ajax(h); var v, y, T = h.jsonpCallback,
                    w = (c.isFunction(T) ? T() : T) || "Zepto" + $++,
                    S = F.createElement("script"),
                    C = a[w],
                    N = function(a) { c(S).triggerHandler("error", a || "abort") },
                    O = { abort: N }; return g && g.promise(O), c(S).on("load error", function(e, b) { clearTimeout(y), c(S).off().remove(), "error" != e.type && v ? E(v[0], O, h, g) : j(null, b || "error", O, h, g), a[w] = C, v && c.isFunction(C) && C(v[0]), C = v = void 0 }), b(O, h) === !1 ? (N("abort"), O) : (a[w] = function() { v = arguments }, S.src = h.url.replace(/\?(.+)=\?/, "?$1=" + w), F.head.appendChild(S), h.timeout > 0 && (y = setTimeout(function() { N("timeout") }, h.timeout)), O) }, c.ajaxSettings = { type: "GET", beforeSend: S, success: S, error: S, complete: S, context: null, global: !0, xhr: function() { return new a.XMLHttpRequest }, accepts: { script: "text/javascript, application/javascript, application/x-javascript", json: Z, xml: "application/xml, text/xml", html: z, text: "text/plain" }, crossDomain: !1, timeout: 0, processData: !0, cache: !0, dataFilter: S }, c.ajax = function(h) { var g, y, T = c.extend({}, h || {}),
                    P = c.Deferred && c.Deferred(); for (D in c.ajaxSettings) void 0 === T[D] && (T[D] = c.ajaxSettings[D]);
                v(T), T.crossDomain || (g = F.createElement("a"), g.href = T.url, g.href = g.href, T.crossDomain = I.protocol + "//" + I.host != g.protocol + "//" + g.host), T.url || (T.url = a.location.toString()), (y = T.url.indexOf("#")) > -1 && (T.url = T.url.slice(0, y)), O(T); var A = T.dataType,
                    $ = /\?.+=\?/.test(T.url); if ($ && (A = "jsonp"), T.cache !== !1 && (h && h.cache === !0 || "script" != A && "jsonp" != A) || (T.url = N(T.url, "_=" + Date.now())), "jsonp" == A) return $ || (T.url = N(T.url, T.jsonp ? T.jsonp + "=?" : T.jsonp === !1 ? "" : "callback=?")), c.ajaxJSONP(T, P); var k, M = T.accepts[A],
                    R = {},
                    Z = function(a, c) { R[a.toLowerCase()] = [a, c] },
                    z = /^([\w-]+:)\/\//.test(T.url) ? RegExp.$1 : a.location.protocol,
                    V = T.xhr(),
                    _ = V.setRequestHeader; if (P && P.promise(V), T.crossDomain || Z("X-Requested-With", "XMLHttpRequest"), Z("Accept", M || "*/*"), (M = T.mimeType || M) && (M.indexOf(",") > -1 && (M = M.split(",", 2)[0]), V.overrideMimeType && V.overrideMimeType(M)), (T.contentType || T.contentType !== !1 && T.data && "GET" != T.type.toUpperCase()) && Z("Content-Type", T.contentType || "application/x-www-form-urlencoded"), T.headers)
                    for (L in T.headers) Z(L, T.headers[L]); if (V.setRequestHeader = Z, V.onreadystatechange = function() { if (4 == V.readyState) { V.onreadystatechange = S, clearTimeout(k); var a, h = !1; if (V.status >= 200 && V.status < 300 || 304 == V.status || 0 == V.status && "file:" == z) { if (A = A || C(T.mimeType || V.getResponseHeader("content-type")), "arraybuffer" == V.responseType || "blob" == V.responseType) a = V.response;
                                else { a = V.responseText; try { a = w(a, A, T), "script" == A ? (1, eval)(a) : "xml" == A ? a = V.responseXML : "json" == A && (a = H.test(a) ? null : c.parseJSON(a)) } catch (e) { h = e } if (h) return j(h, "parsererror", V, T, P) }
                                E(a, V, T, P) } else j(V.statusText || null, V.status ? "error" : "abort", V, T, P) } }, b(V, T) === !1) return V.abort(), j(null, "abort", V, T, P), V; var B = "async" in T ? T.async : !0; if (V.open(T.type, T.url, B, T.username, T.password), T.xhrFields)
                    for (L in T.xhrFields) V[L] = T.xhrFields[L]; for (L in R) _.apply(V, R[L]); return T.timeout > 0 && (k = setTimeout(function() { V.onreadystatechange = S, V.abort(), j(null, "timeout", V, T, P) }, T.timeout)), V.send(T.data ? T.data : null), V }, c.get = function() { return c.ajax(P.apply(null, arguments)) }, c.post = function() { var a = P.apply(null, arguments); return a.type = "POST", c.ajax(a) }, c.getJSON = function() { var a = P.apply(null, arguments); return a.dataType = "json", c.ajax(a) }, c.fn.load = function(a, h, g) { if (!this.length) return this; var v, y = this,
                    b = a.split(/\s/),
                    E = P(a, h, g),
                    j = E.success; return b.length > 1 && (E.url = b[0], v = b[1]), E.success = function(a) { y.html(v ? c("<div>").html(a.replace(k, "")).find(v) : a), j && j.apply(y, arguments) }, c.ajax(E), this }; var V = encodeURIComponent;
            c.param = function(a, h) { var g = []; return g.add = function(a, h) { c.isFunction(h) && (h = h()), null == h && (h = ""), this.push(V(a) + "=" + V(h)) }, A(g, a, h), g.join("&").replace(/%20/g, "+") } }(c),
        function(a) { a.fn.serializeArray = function() { var c, h, g = [],
                    v = function(a) { return a.forEach ? a.forEach(v) : void g.push({ name: c, value: a }) }; return this[0] && a.each(this[0].elements, function(g, y) { h = y.type, c = y.name, c && "fieldset" != y.nodeName.toLowerCase() && !y.disabled && "submit" != h && "reset" != h && "button" != h && "file" != h && ("radio" != h && "checkbox" != h || y.checked) && v(a(y).val()) }), g }, a.fn.serialize = function() { var a = []; return this.serializeArray().forEach(function(c) { a.push(encodeURIComponent(c.name) + "=" + encodeURIComponent(c.value)) }), a.join("&") }, a.fn.submit = function(c) { if (0 in arguments) this.bind("submit", c);
                else if (this.length) { var h = a.Event("submit");
                    this.eq(0).trigger(h), h.isDefaultPrevented() || this.get(0).submit() } return this } }(c),
        function() { try { getComputedStyle(void 0) } catch (e) { var c = getComputedStyle;
                a.getComputedStyle = function(a, h) { try { return c(a, h) } catch (e) { return null } } } }(), c });
define("zepto/fx", function() {! function(a, c) {
        function h(a) { return a.replace(/([A-Z])/g, "-$1").toLowerCase() }

        function y(a) { return g ? g + a : a.toLowerCase() } var g, b, E, w, v, T, L, P, j, k, z = "",
            C = { Webkit: "webkit", Moz: "", O: "o" },
            F = document.createElement("div"),
            Z = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
            _ = {};
        F.style.transform === c && a.each(C, function(a, h) { return F.style[a + "TransitionProperty"] !== c ? (z = "-" + a.toLowerCase() + "-", g = h, !1) : void 0 }), b = z + "transform", _[E = z + "transition-property"] = _[w = z + "transition-duration"] = _[T = z + "transition-delay"] = _[v = z + "transition-timing-function"] = _[L = z + "animation-name"] = _[P = z + "animation-duration"] = _[k = z + "animation-delay"] = _[j = z + "animation-timing-function"] = "", a.fx = { off: g === c && F.style.transitionProperty === c, speeds: { _default: 400, fast: 200, slow: 600 }, cssPrefix: z, transitionEnd: y("TransitionEnd"), animationEnd: y("AnimationEnd") }, a.fn.animate = function(h, y, g, b, E) { return a.isFunction(y) && (b = y, g = c, y = c), a.isFunction(g) && (b = g, g = c), a.isPlainObject(y) && (g = y.easing, b = y.complete, E = y.delay, y = y.duration), y && (y = ("number" == typeof y ? y : a.fx.speeds[y] || a.fx.speeds._default) / 1e3), E && (E = parseFloat(E) / 1e3), this.anim(h, y, g, b, E) }, a.fn.anim = function(y, g, z, C, F) { var A, O, X, Y = {},
                $ = "",
                M = this,
                W = a.fx.transitionEnd,
                B = !1; if (g === c && (g = a.fx.speeds._default / 1e3), F === c && (F = 0), a.fx.off && (g = 0), "string" == typeof y) Y[L] = y, Y[P] = g + "s", Y[k] = F + "s", Y[j] = z || "linear", W = a.fx.animationEnd;
            else { O = []; for (A in y) Z.test(A) ? $ += A + "(" + y[A] + ") " : (Y[A] = y[A], O.push(h(A)));
                $ && (Y[b] = $, O.push(b)), g > 0 && "object" == typeof y && (Y[E] = O.join(", "), Y[w] = g + "s", Y[T] = F + "s", Y[v] = z || "linear") } return X = function(c) { if ("undefined" != typeof c) { if (c.target !== c.currentTarget) return;
                    a(c.target).unbind(W, X) } else a(this).unbind(W, X);
                B = !0, a(this).css(_), C && C.call(this) }, g > 0 && (this.bind(W, X), setTimeout(function() { B || X.call(M) }, 1e3 * (g + F) + 25)), this.size() && this.get(0).clientLeft, this.css(Y), 0 >= g && setTimeout(function() { M.each(function() { X.call(this) }) }, 0), this }, F = null }(Zepto) });
define("zepto/cookie", function() {! function(c) { c.extend(c.fn, { cookie: function(a, g, C) { var R, U, h, k; return arguments.length > 1 && "[object Object]" !== String(g) ? (C = c.extend({}, C), (null === g || void 0 === g) && (C.expires = -1), "number" == typeof C.expires && (R = 24 * C.expires * 60 * 60 * 1e3, U = C.expires = new Date, U.setTime(U.getTime() + R)), g = String(g), document.cookie = [encodeURIComponent(a), "=", C.raw ? g : encodeURIComponent(g), C.expires ? "; expires=" + C.expires.toUTCString() : "", C.path ? "; path=" + C.path : "", C.domain ? "; domain=" + C.domain : "", C.secure ? "; secure" : ""].join("")) : (C = g || {}, k = C.raw ? function(s) { return s } : decodeURIComponent, (h = new RegExp("(?:^|; )" + encodeURIComponent(a) + "=([^;]*)").exec(document.cookie)) ? k(h[1]) : null) } }) }(Zepto) });
define("zepto/rotate", function(require, exports, module) {! function($) { for (var jQuery = Zepto, supportedCSS, supportedCSSOrigin, styles = document.getElementsByTagName("head")[0].style, toCheck = "transformProperty WebkitTransform OTransform msTransform MozTransform".split(" "), a = 0; a < toCheck.length; a++) void 0 !== styles[toCheck[a]] && (supportedCSS = toCheck[a]);
        supportedCSS && (supportedCSSOrigin = supportedCSS.replace(/[tT]ransform/, "TransformOrigin"), "T" == supportedCSSOrigin[0] && (supportedCSSOrigin[0] = "t")), eval('IE = "v"==""'), jQuery.fn.rotate = function(a) { if (0 !== this.length && "undefined" != typeof a) { "number" == typeof a && (a = { angle: a }); for (var h = [], i = 0, _ = this.length; _ > i; i++) { var c = this.get(i); if (c.Wilq32 && c.Wilq32.PhotoEffect) c.Wilq32.PhotoEffect._handleRotation(a);
                    else { var g = $.extend(!0, {}, a),
                            v = new Wilq32.PhotoEffect(c, g)._rootObj;
                        h.push($(v)) } } return h } }, jQuery.fn.getRotateAngle = function() { for (var a = [0], i = 0, h = this.length; h > i; i++) { var _ = this.get(i);
                _.Wilq32 && _.Wilq32.PhotoEffect && (a[i] = _.Wilq32.PhotoEffect._angle) } return a }, jQuery.fn.stopRotate = function() { for (var i = 0, a = this.length; a > i; i++) { var h = this.get(i);
                h.Wilq32 && h.Wilq32.PhotoEffect && clearTimeout(h.Wilq32.PhotoEffect._timer) } }, Wilq32 = window.Wilq32 || {}, Wilq32.PhotoEffect = function() { return supportedCSS ? function(a, h) { a.Wilq32 = { PhotoEffect: this }, this._img = this._rootObj = this._eventObj = a, this._handleRotation(h) } : function(a, h) { if (this._img = a, this._onLoadDelegate = [h], this._rootObj = document.createElement("span"), this._rootObj.style.display = "inline-block", this._rootObj.Wilq32 = { PhotoEffect: this }, a.parentNode.insertBefore(this._rootObj, a), a.complete) this._Loader();
                else { var _ = this;
                    jQuery(this._img).bind("load", function() { _._Loader() }) } } }(), Wilq32.PhotoEffect.prototype = { _setupParameters: function(a) { this._parameters = this._parameters || {}, "number" != typeof this._angle && (this._angle = 0), "number" == typeof a.angle && (this._angle = a.angle), this._parameters.animateTo = "number" == typeof a.animateTo ? a.animateTo : this._angle, this._parameters.step = a.step || this._parameters.step || null, this._parameters.easing = a.easing || this._parameters.easing || this._defaultEasing, this._parameters.duration = "duration" in a ? a.duration : a.duration || this._parameters.duration || 1e3, this._parameters.callback = a.callback || this._parameters.callback || this._emptyFunction, this._parameters.center = a.center || this._parameters.center || ["50%", "50%"], this._rotationCenterX = "string" == typeof this._parameters.center[0] ? parseInt(this._parameters.center[0], 10) / 100 * this._imgWidth * this._aspectW : this._parameters.center[0], this._rotationCenterY = "string" == typeof this._parameters.center[1] ? parseInt(this._parameters.center[1], 10) / 100 * this._imgHeight * this._aspectH : this._parameters.center[1], a.bind && a.bind != this._parameters.bind && this._BindEvents(a.bind) }, _emptyFunction: function() {}, _defaultEasing: function(x, t, a, h, d) { return -h * ((t = t / d - 1) * t * t * t - 1) + a }, _handleRotation: function(a, h) { return supportedCSS || this._img.complete || h ? (this._setupParameters(a), void(this._angle == this._parameters.animateTo ? this._rotate(this._angle) : this._animateStart())) : void this._onLoadDelegate.push(a) }, _BindEvents: function(a) { if (a && this._eventObj) { if (this._parameters.bind) { var h = this._parameters.bind; for (var _ in h) h.hasOwnProperty(_) && jQuery(this._eventObj).unbind(_, h[_]) }
                    this._parameters.bind = a; for (var _ in a) a.hasOwnProperty(_) && jQuery(this._eventObj).bind(_, a[_]) } }, _Loader: function() { return IE ? function() { var a = this._img.width,
                        h = this._img.height;
                    this._imgWidth = a, this._imgHeight = h, this._img.parentNode.removeChild(this._img), this._vimage = this.createVMLNode("image"), this._vimage.src = this._img.src, this._vimage.style.height = h + "px", this._vimage.style.width = a + "px", this._vimage.style.position = "absolute", this._vimage.style.top = "0px", this._vimage.style.left = "0px", this._aspectW = this._aspectH = 1, this._container = this.createVMLNode("group"), this._container.style.width = a, this._container.style.height = h, this._container.style.position = "absolute", this._container.style.top = "0px", this._container.style.left = "0px", this._container.setAttribute("coordsize", a - 1 + "," + (h - 1)), this._container.appendChild(this._vimage), this._rootObj.appendChild(this._container), this._rootObj.style.position = "relative", this._rootObj.style.width = a + "px", this._rootObj.style.height = h + "px", this._rootObj.setAttribute("id", this._img.getAttribute("id")), this._rootObj.className = this._img.className, this._eventObj = this._rootObj; for (var _; _ = this._onLoadDelegate.shift();) this._handleRotation(_, !0) } : function() { this._rootObj.setAttribute("id", this._img.getAttribute("id")), this._rootObj.className = this._img.className, this._imgWidth = this._img.naturalWidth, this._imgHeight = this._img.naturalHeight; var a = Math.sqrt(this._imgHeight * this._imgHeight + this._imgWidth * this._imgWidth);
                    this._width = 3 * a, this._height = 3 * a, this._aspectW = this._img.offsetWidth / this._img.naturalWidth, this._aspectH = this._img.offsetHeight / this._img.naturalHeight, this._img.parentNode.removeChild(this._img), this._canvas = document.createElement("canvas"), this._canvas.setAttribute("width", this._width), this._canvas.style.position = "relative", this._canvas.style.left = -this._img.height * this._aspectW + "px", this._canvas.style.top = -this._img.width * this._aspectH + "px", this._canvas.Wilq32 = this._rootObj.Wilq32, this._rootObj.appendChild(this._canvas), this._rootObj.style.width = this._img.width * this._aspectW + "px", this._rootObj.style.height = this._img.height * this._aspectH + "px", this._eventObj = this._canvas, this._cnv = this._canvas.getContext("2d"); for (var h; h = this._onLoadDelegate.shift();) this._handleRotation(h, !0) } }(), _animateStart: function() { this._timer && clearTimeout(this._timer), this._animateStartTime = +new Date, this._animateStartAngle = this._angle, this._animate() }, _animate: function() { var a = +new Date,
                    h = a - this._animateStartTime > this._parameters.duration; if (h && !this._parameters.animatedGif) clearTimeout(this._timer);
                else { if (this._canvas || this._vimage || this._img) { var _ = this._parameters.easing(0, a - this._animateStartTime, this._animateStartAngle, this._parameters.animateTo - this._animateStartAngle, this._parameters.duration);
                        this._rotate(~~(10 * _) / 10) }
                    this._parameters.step && this._parameters.step(this._angle); var c = this;
                    this._timer = setTimeout(function() { c._animate.call(c) }, 10) }
                this._parameters.callback && h && (this._angle = this._parameters.animateTo, this._rotate(this._angle), this._parameters.callback.call(this._rootObj)) }, _rotate: function() { var a = Math.PI / 180; return IE ? function(a) { this._angle = a, this._container.style.rotation = a % 360 + "deg", this._vimage.style.top = -(this._rotationCenterY - this._imgHeight / 2) + "px", this._vimage.style.left = -(this._rotationCenterX - this._imgWidth / 2) + "px", this._container.style.top = this._rotationCenterY - this._imgHeight / 2 + "px", this._container.style.left = this._rotationCenterX - this._imgWidth / 2 + "px" } : supportedCSS ? function(a) { this._angle = a, this._img.style[supportedCSS] = "rotate(" + a % 360 + "deg)", this._img.style[supportedCSSOrigin] = this._parameters.center.join(" ") } : function(h) { this._angle = h, h = h % 360 * a, this._canvas.width = this._width, this._canvas.height = this._height, this._cnv.translate(this._imgWidth * this._aspectW, this._imgHeight * this._aspectH), this._cnv.translate(this._rotationCenterX, this._rotationCenterY), this._cnv.rotate(h), this._cnv.translate(-this._rotationCenterX, -this._rotationCenterY), this._cnv.scale(this._aspectW, this._aspectH), this._cnv.drawImage(this._img, 0, 0) } }() }, IE && (Wilq32.PhotoEffect.prototype.createVMLNode = function() { document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)"); try { return !document.namespaces.rvml && document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"),
                    function(a) { return document.createElement("<rvml:" + a + ' class="rvml">') } } catch (e) { return function(a) { return document.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">') } } }()) }(Zepto) });
define("widget/CommonTools/StringsTool", function(require, exports, module) { module.exports = { trim: function(c) { return null == c || "undefined" == typeof c ? "" : c.replace(/(^\s*)|(\s*$)/g, "") }, isNull: function(c) { return null == c || "undefined" == typeof c ? !0 : !1 }, isEmpty: function(c) { return null == c || "undefined" == typeof c || "" == c ? !0 : !1 }, isBlank: function(c) { return null == c || "undefined" == typeof c || "" == c || "" == trim(c) ? !0 : !1 }, isURL: function(c) { var a = new RegExp; return a.compile("^[A-Za-z]+://[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&?/.=]+$"), a.test(c) } } });
define("widget/CommonTools/DateTool", function(require, exports, module) { module.exports = { getToday: function() { var a = new Date; return a.getMonth() + 1 + "-" + a.getDate() }, getTodayFull: function() { var a = new Date; return a.getFullYear() + "/" + (a.getMonth() + 1) + "/" + a.getDate() }, getHours: function() { return (new Date).getHours() } } });
define("fingerprint2", function(require, exports, module) {
    ! function(a, h, c) { "use strict"; "function" == typeof window.define && window.define.amd ? window.define(c) : "undefined" != typeof module && module.exports ? module.exports = c() : h.exports ? h.exports = c() : h[a] = c() }("Fingerprint2", this, function() {
        "use strict";
        var a = function(h) { if (!(this instanceof a)) return new a(h); var c = { swfContainerId: "fingerprintjs2", swfPath: "flash/compiled/FontList.swf", detectScreenOrientation: !0, sortPluginsFor: [/palemoon/i], userDefinedFonts: [] };
            this.options = this.extend(h, c), this.nativeForEach = Array.prototype.forEach, this.nativeMap = Array.prototype.map };
        return a.prototype = {
            extend: function(a, h) { if (null == a) return h; for (var c in a) null != a[c] && h[c] !== a[c] && (h[c] = a[c]); return h },
            get: function(a) { var h = this,
                    c = { data: [], addPreprocessedComponent: function(a) { var g = a.value; "function" == typeof h.options.preprocessor && (g = h.options.preprocessor(a.key, g)), c.data.push({ key: a.key, value: g }) } };
                c = this.userAgentKey(c), c = this.languageKey(c), c = this.colorDepthKey(c), c = this.deviceMemoryKey(c), c = this.pixelRatioKey(c), c = this.hardwareConcurrencyKey(c), c = this.screenResolutionKey(c), c = this.availableScreenResolutionKey(c), c = this.timezoneOffsetKey(c), c = this.sessionStorageKey(c), c = this.localStorageKey(c), c = this.indexedDbKey(c), c = this.addBehaviorKey(c), c = this.openDatabaseKey(c), c = this.cpuClassKey(c), c = this.platformKey(c), c = this.doNotTrackKey(c), c = this.pluginsKey(c), c = this.canvasKey(c), c = this.webglKey(c), c = this.webglVendorAndRendererKey(c), c = this.adBlockKey(c), c = this.hasLiedLanguagesKey(c), c = this.hasLiedResolutionKey(c), c = this.hasLiedOsKey(c), c = this.hasLiedBrowserKey(c), c = this.touchSupportKey(c), c = this.customEntropyFunction(c), this.fontsKey(c, function(c) { var g = [];
                    h.each(c.data, function(a) { var h = a.value;
                        h && "function" == typeof h.join && (h = h.join(";")), g.push(h) }); var S = h.x64hash128(g.join("~~~"), 31); return a(S, c.data) }) },
            customEntropyFunction: function(a) { return "function" == typeof this.options.customFunction && a.addPreprocessedComponent({ key: "custom", value: this.options.customFunction() }), a },
            userAgentKey: function(a) { return this.options.excludeUserAgent || a.addPreprocessedComponent({ key: "user_agent", value: this.getUserAgent() }), a },
            getUserAgent: function() { return navigator.userAgent },
            languageKey: function(a) { return this.options.excludeLanguage || a.addPreprocessedComponent({ key: "language", value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || "" }), a },
            colorDepthKey: function(a) { return this.options.excludeColorDepth || a.addPreprocessedComponent({ key: "color_depth", value: window.screen.colorDepth || -1 }), a },
            deviceMemoryKey: function(a) { return this.options.excludeDeviceMemory || a.addPreprocessedComponent({ key: "device_memory", value: this.getDeviceMemory() }), a },
            getDeviceMemory: function() { return navigator.deviceMemory || -1 },
            pixelRatioKey: function(a) { return this.options.excludePixelRatio || a.addPreprocessedComponent({ key: "pixel_ratio", value: this.getPixelRatio() }), a },
            getPixelRatio: function() { return window.devicePixelRatio || "" },
            screenResolutionKey: function(a) { return this.options.excludeScreenResolution ? a : this.getScreenResolution(a) },
            getScreenResolution: function(a) { var h; return h = this.options.detectScreenOrientation && window.screen.height > window.screen.width ? [window.screen.height, window.screen.width] : [window.screen.width, window.screen.height], a.addPreprocessedComponent({ key: "resolution", value: h }), a },
            availableScreenResolutionKey: function(a) { return this.options.excludeAvailableScreenResolution ? a : this.getAvailableScreenResolution(a) },
            getAvailableScreenResolution: function(a) { var h; return window.screen.availWidth && window.screen.availHeight && (h = this.options.detectScreenOrientation ? window.screen.availHeight > window.screen.availWidth ? [window.screen.availHeight, window.screen.availWidth] : [window.screen.availWidth, window.screen.availHeight] : [window.screen.availHeight, window.screen.availWidth]), "undefined" != typeof h && a.addPreprocessedComponent({ key: "available_resolution", value: h }), a },
            timezoneOffsetKey: function(a) { return this.options.excludeTimezoneOffset || a.addPreprocessedComponent({ key: "timezone_offset", value: (new Date).getTimezoneOffset() }), a },
            sessionStorageKey: function(a) { return !this.options.excludeSessionStorage && this.hasSessionStorage() && a.addPreprocessedComponent({ key: "session_storage", value: 1 }), a },
            localStorageKey: function(a) { return !this.options.excludeSessionStorage && this.hasLocalStorage() && a.addPreprocessedComponent({ key: "local_storage", value: 1 }), a },
            indexedDbKey: function(a) { return !this.options.excludeIndexedDB && this.hasIndexedDB() && a.addPreprocessedComponent({ key: "indexed_db", value: 1 }), a },
            addBehaviorKey: function(a) { return !this.options.excludeAddBehavior && document.body && document.body.addBehavior && a.addPreprocessedComponent({ key: "add_behavior", value: 1 }), a },
            openDatabaseKey: function(a) { return !this.options.excludeOpenDatabase && window.openDatabase && a.addPreprocessedComponent({ key: "open_database", value: 1 }), a },
            cpuClassKey: function(a) { return this.options.excludeCpuClass || a.addPreprocessedComponent({ key: "cpu_class", value: this.getNavigatorCpuClass() }), a },
            platformKey: function(a) { return this.options.excludePlatform || a.addPreprocessedComponent({ key: "navigator_platform", value: this.getNavigatorPlatform() }), a },
            doNotTrackKey: function(a) { return this.options.excludeDoNotTrack || a.addPreprocessedComponent({ key: "do_not_track", value: this.getDoNotTrack() }), a },
            canvasKey: function(a) { return !this.options.excludeCanvas && this.isCanvasSupported() && a.addPreprocessedComponent({ key: "canvas", value: this.getCanvasFp() }), a },
            webglKey: function(a) { return !this.options.excludeWebGL && this.isWebGlSupported() && a.addPreprocessedComponent({ key: "webgl", value: this.getWebglFp() }), a },
            webglVendorAndRendererKey: function(a) { return !this.options.excludeWebGLVendorAndRenderer && this.isWebGlSupported() && a.addPreprocessedComponent({ key: "webgl_vendor", value: this.getWebglVendorAndRenderer() }), a },
            adBlockKey: function(a) { return this.options.excludeAdBlock || a.addPreprocessedComponent({ key: "adblock", value: this.getAdBlock() }), a },
            hasLiedLanguagesKey: function(a) { return this.options.excludeHasLiedLanguages || a.addPreprocessedComponent({ key: "has_lied_languages", value: this.getHasLiedLanguages() }), a },
            hasLiedResolutionKey: function(a) { return this.options.excludeHasLiedResolution || a.addPreprocessedComponent({ key: "has_lied_resolution", value: this.getHasLiedResolution() }), a },
            hasLiedOsKey: function(a) { return this.options.excludeHasLiedOs || a.addPreprocessedComponent({ key: "has_lied_os", value: this.getHasLiedOs() }), a },
            hasLiedBrowserKey: function(a) { return this.options.excludeHasLiedBrowser || a.addPreprocessedComponent({ key: "has_lied_browser", value: this.getHasLiedBrowser() }), a },
            fontsKey: function(a, h) { return this.options.excludeJsFonts ? this.flashFontsKey(a, h) : this.jsFontsKey(a, h) },
            flashFontsKey: function(a, h) { return this.options.excludeFlashFonts ? h(a) : this.hasSwfObjectLoaded() && this.hasMinFlashInstalled() ? "undefined" == typeof this.options.swfPath ? h(a) : void this.loadSwfAndDetectFonts(function(c) { a.addPreprocessedComponent({ key: "swf_fonts", value: c.join(";") }), h(a) }) : h(a) },
            jsFontsKey: function(a, h) { var c = this; return setTimeout(function() { var g = ["monospace", "sans-serif", "serif"],
                        S = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"],
                        T = ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];
                    c.options.extendedJsFonts && (S = S.concat(T)), S = S.concat(c.options.userDefinedFonts); var v = "mmmmmmmmmmlli",
                        E = "72px",
                        w = document.getElementsByTagName("body")[0],
                        M = document.createElement("div"),
                        C = document.createElement("div"),
                        A = {},
                        y = {},
                        P = function() { var s = document.createElement("span"); return s.style.position = "absolute", s.style.left = "-9999px", s.style.fontSize = E, s.style.lineHeight = "normal", s.innerHTML = v, s },
                        R = function(a, h) { var s = P(); return s.style.fontFamily = "'" + a + "'," + h, s },
                        B = function() { for (var a = [], h = 0, c = g.length; c > h; h++) { var s = P();
                                s.style.fontFamily = g[h], M.appendChild(s), a.push(s) } return a },
                        b = function() { for (var a = {}, i = 0, l = S.length; l > i; i++) { for (var h = [], c = 0, T = g.length; T > c; c++) { var s = R(S[i], g[c]);
                                    C.appendChild(s), h.push(s) }
                                a[S[i]] = h } return a },
                        _ = function(a) { for (var h = !1, i = 0; i < g.length; i++)
                                if (h = a[i].offsetWidth !== A[g[i]] || a[i].offsetHeight !== y[g[i]]) return h;
                            return h },
                        F = B();
                    w.appendChild(M); for (var L = 0, O = g.length; O > L; L++) A[g[L]] = F[L].offsetWidth, y[g[L]] = F[L].offsetHeight; var I = b();
                    w.appendChild(C); for (var D = [], i = 0, l = S.length; l > i; i++) _(I[S[i]]) && D.push(S[i]);
                    w.removeChild(C), w.removeChild(M), a.addPreprocessedComponent({ key: "js_fonts", value: D }), h(a) }, 1) },
            pluginsKey: function(a) { return this.options.excludePlugins || (this.isIE() ? this.options.excludeIEPlugins || a.addPreprocessedComponent({ key: "ie_plugins", value: this.getIEPlugins() }) : a.addPreprocessedComponent({ key: "regular_plugins", value: this.getRegularPlugins() })), a },
            getRegularPlugins: function() { var a = []; if (navigator.plugins)
                    for (var i = 0, l = navigator.plugins.length; l > i; i++) navigator.plugins[i] && a.push(navigator.plugins[i]); return this.pluginsShouldBeSorted() && (a = a.sort(function(a, h) { return a.name > h.name ? 1 : a.name < h.name ? -1 : 0 })), this.map(a, function(p) { var a = this.map(p, function(a) { return [a.type, a.suffixes].join("~") }).join(","); return [p.name, p.description, a].join("::") }, this) },
            getIEPlugins: function() { var a = []; if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) { var h = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"];
                    a = this.map(h, function(a) { try { return new window.ActiveXObject(a), a } catch (e) { return null } }) } return navigator.plugins && (a = a.concat(this.getRegularPlugins())), a },
            pluginsShouldBeSorted: function() { for (var a = !1, i = 0, l = this.options.sortPluginsFor.length; l > i; i++) { var re = this.options.sortPluginsFor[i]; if (navigator.userAgent.match(re)) { a = !0; break } } return a },
            touchSupportKey: function(a) { return this.options.excludeTouchSupport || a.addPreprocessedComponent({ key: "touch_support", value: this.getTouchSupport() }), a },
            hardwareConcurrencyKey: function(a) { return this.options.excludeHardwareConcurrency || a.addPreprocessedComponent({ key: "hardware_concurrency", value: this.getHardwareConcurrency() }), a },
            hasSessionStorage: function() { try { return !!window.sessionStorage } catch (e) { return !0 } },
            hasLocalStorage: function() { try { return !!window.localStorage } catch (e) { return !0 } },
            hasIndexedDB: function() { try { return !!window.indexedDB } catch (e) { return !0 } },
            getHardwareConcurrency: function() { return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "unknown" },
            getNavigatorCpuClass: function() { return navigator.cpuClass ? navigator.cpuClass : "unknown" },
            getNavigatorPlatform: function() { return navigator.platform ? navigator.platform : "unknown" },
            getDoNotTrack: function() { return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : "unknown" },
            getTouchSupport: function() { var a = 0,
                    h = !1; "undefined" != typeof navigator.maxTouchPoints ? a = navigator.maxTouchPoints : "undefined" != typeof navigator.msMaxTouchPoints && (a = navigator.msMaxTouchPoints); try { document.createEvent("TouchEvent"), h = !0 } catch (c) {} var g = "ontouchstart" in window; return [a, h, g] },
            getCanvasFp: function() { var a = [],
                    h = document.createElement("canvas");
                h.width = 2e3, h.height = 200, h.style.display = "inline"; var c = h.getContext("2d"); return c.rect(0, 0, 10, 10), c.rect(2, 2, 6, 6), a.push("canvas winding:" + (c.isPointInPath(5, 5, "evenodd") === !1 ? "yes" : "no")), c.textBaseline = "alphabetic", c.fillStyle = "#f60", c.fillRect(125, 1, 62, 20), c.fillStyle = "#069", c.font = this.options.dontUseFakeFontInCanvas ? "11pt Arial" : "11pt no-real-font-123", c.fillText("Cwm fjordbank glyphs vext quiz, 馃槂", 2, 15), c.fillStyle = "rgba(102, 204, 0, 0.2)", c.font = "18pt Arial", c.fillText("Cwm fjordbank glyphs vext quiz, 馃槂", 4, 45), c.globalCompositeOperation = "multiply", c.fillStyle = "rgb(255,0,255)", c.beginPath(), c.arc(50, 50, 50, 0, 2 * Math.PI, !0), c.closePath(), c.fill(), c.fillStyle = "rgb(0,255,255)", c.beginPath(), c.arc(100, 50, 50, 0, 2 * Math.PI, !0), c.closePath(), c.fill(), c.fillStyle = "rgb(255,255,0)", c.beginPath(), c.arc(75, 100, 50, 0, 2 * Math.PI, !0), c.closePath(), c.fill(), c.fillStyle = "rgb(255,0,255)", c.arc(75, 75, 75, 0, 2 * Math.PI, !0), c.arc(75, 75, 25, 0, 2 * Math.PI, !0), c.fill("evenodd"), h.toDataURL && a.push("canvas fp:" + h.toDataURL()), a.join("~") },
            getWebglFp: function() { var a, h = function(h) { return a.clearColor(0, 0, 0, 1), a.enable(a.DEPTH_TEST), a.depthFunc(a.LEQUAL), a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT), "[" + h[0] + ", " + h[1] + "]" },
                    c = function(a) { var h = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic"); if (h) { var c = a.getParameter(h.MAX_TEXTURE_MAX_ANISOTROPY_EXT); return 0 === c && (c = 2), c } return null }; if (a = this.getWebglCanvas(), !a) return null; var g = [],
                    S = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}",
                    T = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}",
                    v = a.createBuffer();
                a.bindBuffer(a.ARRAY_BUFFER, v); var E = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                a.bufferData(a.ARRAY_BUFFER, E, a.STATIC_DRAW), v.itemSize = 3, v.numItems = 3; var w = a.createProgram(),
                    M = a.createShader(a.VERTEX_SHADER);
                a.shaderSource(M, S), a.compileShader(M); var C = a.createShader(a.FRAGMENT_SHADER);
                a.shaderSource(C, T), a.compileShader(C), a.attachShader(w, M), a.attachShader(w, C), a.linkProgram(w), a.useProgram(w), w.vertexPosAttrib = a.getAttribLocation(w, "attrVertex"), w.offsetUniform = a.getUniformLocation(w, "uniformOffset"), a.enableVertexAttribArray(w.vertexPosArray), a.vertexAttribPointer(w.vertexPosAttrib, v.itemSize, a.FLOAT, !1, 0, 0), a.uniform2f(w.offsetUniform, 1, 1), a.drawArrays(a.TRIANGLE_STRIP, 0, v.numItems); try { g.push(a.canvas.toDataURL()) } catch (e) {}
                g.push("extensions:" + (a.getSupportedExtensions() || []).join(";")), g.push("webgl aliased line width range:" + h(a.getParameter(a.ALIASED_LINE_WIDTH_RANGE))), g.push("webgl aliased point size range:" + h(a.getParameter(a.ALIASED_POINT_SIZE_RANGE))), g.push("webgl alpha bits:" + a.getParameter(a.ALPHA_BITS)), g.push("webgl antialiasing:" + (a.getContextAttributes().antialias ? "yes" : "no")), g.push("webgl blue bits:" + a.getParameter(a.BLUE_BITS)), g.push("webgl depth bits:" + a.getParameter(a.DEPTH_BITS)), g.push("webgl green bits:" + a.getParameter(a.GREEN_BITS)), g.push("webgl max anisotropy:" + c(a)), g.push("webgl max combined texture image units:" + a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), g.push("webgl max cube map texture size:" + a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE)), g.push("webgl max fragment uniform vectors:" + a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS)), g.push("webgl max render buffer size:" + a.getParameter(a.MAX_RENDERBUFFER_SIZE)), g.push("webgl max texture image units:" + a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS)), g.push("webgl max texture size:" + a.getParameter(a.MAX_TEXTURE_SIZE)), g.push("webgl max varying vectors:" + a.getParameter(a.MAX_VARYING_VECTORS)), g.push("webgl max vertex attribs:" + a.getParameter(a.MAX_VERTEX_ATTRIBS)), g.push("webgl max vertex texture image units:" + a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), g.push("webgl max vertex uniform vectors:" + a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS)), g.push("webgl max viewport dims:" + h(a.getParameter(a.MAX_VIEWPORT_DIMS))), g.push("webgl red bits:" + a.getParameter(a.RED_BITS)), g.push("webgl renderer:" + a.getParameter(a.RENDERER)), g.push("webgl shading language version:" + a.getParameter(a.SHADING_LANGUAGE_VERSION)), g.push("webgl stencil bits:" + a.getParameter(a.STENCIL_BITS)), g.push("webgl vendor:" + a.getParameter(a.VENDOR)), g.push("webgl version:" + a.getParameter(a.VERSION)); try { var A = a.getExtension("WEBGL_debug_renderer_info");
                    A && (g.push("webgl unmasked vendor:" + a.getParameter(A.UNMASKED_VENDOR_WEBGL)), g.push("webgl unmasked renderer:" + a.getParameter(A.UNMASKED_RENDERER_WEBGL))) } catch (e) {} return a.getShaderPrecisionFormat ? (g.push("webgl vertex shader high float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).precision), g.push("webgl vertex shader high float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMin), g.push("webgl vertex shader high float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMax), g.push("webgl vertex shader medium float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).precision), g.push("webgl vertex shader medium float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMin), g.push("webgl vertex shader medium float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMax), g.push("webgl vertex shader low float precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).precision), g.push("webgl vertex shader low float precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMin), g.push("webgl vertex shader low float precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMax), g.push("webgl fragment shader high float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).precision), g.push("webgl fragment shader high float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMin), g.push("webgl fragment shader high float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMax), g.push("webgl fragment shader medium float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).precision), g.push("webgl fragment shader medium float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMin), g.push("webgl fragment shader medium float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMax), g.push("webgl fragment shader low float precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).precision), g.push("webgl fragment shader low float precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMin), g.push("webgl fragment shader low float precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMax), g.push("webgl vertex shader high int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).precision), g.push("webgl vertex shader high int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMin), g.push("webgl vertex shader high int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMax), g.push("webgl vertex shader medium int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).precision), g.push("webgl vertex shader medium int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMin), g.push("webgl vertex shader medium int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMax), g.push("webgl vertex shader low int precision:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).precision), g.push("webgl vertex shader low int precision rangeMin:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMin), g.push("webgl vertex shader low int precision rangeMax:" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMax), g.push("webgl fragment shader high int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).precision), g.push("webgl fragment shader high int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMin), g.push("webgl fragment shader high int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMax), g.push("webgl fragment shader medium int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).precision), g.push("webgl fragment shader medium int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMin), g.push("webgl fragment shader medium int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMax), g.push("webgl fragment shader low int precision:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).precision), g.push("webgl fragment shader low int precision rangeMin:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMin), g.push("webgl fragment shader low int precision rangeMax:" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMax), g.join("~")) : g.join("~") },
            getWebglVendorAndRenderer: function() { try { var a = this.getWebglCanvas(),
                        h = a.getExtension("WEBGL_debug_renderer_info"); return a.getParameter(h.UNMASKED_VENDOR_WEBGL) + "~" + a.getParameter(h.UNMASKED_RENDERER_WEBGL) } catch (e) { return null } },
            getAdBlock: function() { var a = document.createElement("div");
                a.innerHTML = "&nbsp;", a.className = "adsbox"; var h = !1; try { document.body.appendChild(a), h = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(a) } catch (e) { h = !1 } return h },
            getHasLiedLanguages: function() { if ("undefined" != typeof navigator.languages) try { var a = navigator.languages[0].substr(0, 2); if (a !== navigator.language.substr(0, 2)) return !0 } catch (h) { return !0 }
                return !1 },
            getHasLiedResolution: function() { return window.screen.width < window.screen.availWidth ? !0 : window.screen.height < window.screen.availHeight ? !0 : !1 },
            getHasLiedOs: function() { var a, h = navigator.userAgent.toLowerCase(),
                    c = navigator.oscpu,
                    g = navigator.platform.toLowerCase();
                a = h.indexOf("windows phone") >= 0 ? "Windows Phone" : h.indexOf("win") >= 0 ? "Windows" : h.indexOf("android") >= 0 ? "Android" : h.indexOf("linux") >= 0 ? "Linux" : h.indexOf("iphone") >= 0 || h.indexOf("ipad") >= 0 ? "iOS" : h.indexOf("mac") >= 0 ? "Mac" : "Other"; var S; if (S = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? !0 : !1, S && "Windows Phone" !== a && "Android" !== a && "iOS" !== a && "Other" !== a) return !0; if ("undefined" != typeof c) { if (c = c.toLowerCase(), c.indexOf("win") >= 0 && "Windows" !== a && "Windows Phone" !== a) return !0; if (c.indexOf("linux") >= 0 && "Linux" !== a && "Android" !== a) return !0; if (c.indexOf("mac") >= 0 && "Mac" !== a && "iOS" !== a) return !0; if ((-1 === c.indexOf("win") && -1 === c.indexOf("linux") && -1 === c.indexOf("mac")) != ("Other" === a)) return !0 } return g.indexOf("win") >= 0 && "Windows" !== a && "Windows Phone" !== a ? !0 : (g.indexOf("linux") >= 0 || g.indexOf("android") >= 0 || g.indexOf("pike") >= 0) && "Linux" !== a && "Android" !== a ? !0 : (g.indexOf("mac") >= 0 || g.indexOf("ipad") >= 0 || g.indexOf("ipod") >= 0 || g.indexOf("iphone") >= 0) && "Mac" !== a && "iOS" !== a ? !0 : (-1 === g.indexOf("win") && -1 === g.indexOf("linux") && -1 === g.indexOf("mac")) != ("Other" === a) ? !0 : "undefined" == typeof navigator.plugins && "Windows" !== a && "Windows Phone" !== a ? !0 : !1 },
            getHasLiedBrowser: function() { var a, h = navigator.userAgent.toLowerCase(),
                    c = navigator.productSub; if (a = h.indexOf("firefox") >= 0 ? "Firefox" : h.indexOf("opera") >= 0 || h.indexOf("opr") >= 0 ? "Opera" : h.indexOf("chrome") >= 0 ? "Chrome" : h.indexOf("safari") >= 0 ? "Safari" : h.indexOf("trident") >= 0 ? "Internet Explorer" : "Other", ("Chrome" === a || "Safari" === a || "Opera" === a) && "20030107" !== c) return !0; var g = eval.toString().length; if (37 === g && "Safari" !== a && "Firefox" !== a && "Other" !== a) return !0; if (39 === g && "Internet Explorer" !== a && "Other" !== a) return !0; if (33 === g && "Chrome" !== a && "Opera" !== a && "Other" !== a) return !0; var S; try { throw "a" } catch (T) { try { T.toSource(), S = !0 } catch (v) { S = !1 } } return S && "Firefox" !== a && "Other" !== a ? !0 : !1 },
            isCanvasSupported: function() { var a = document.createElement("canvas"); return !(!a.getContext || !a.getContext("2d")) },
            isWebGlSupported: function() { if (!this.isCanvasSupported()) return !1; var a = this.getWebglCanvas(); return !!window.WebGLRenderingContext && !!a },
            isIE: function() { return "Microsoft Internet Explorer" === navigator.appName ? !0 : "Netscape" === navigator.appName && /Trident/.test(navigator.userAgent) ? !0 : !1 },
            hasSwfObjectLoaded: function() { return "undefined" != typeof window.swfobject },
            hasMinFlashInstalled: function() { return window.swfobject.hasFlashPlayerVersion("9.0.0") },
            addFlashDivNode: function() { var a = document.createElement("div");
                a.setAttribute("id", this.options.swfContainerId), document.body.appendChild(a) },
            loadSwfAndDetectFonts: function(a) { var h = "___fp_swf_loaded";
                window[h] = function(h) { a(h) }; var c = this.options.swfContainerId;
                this.addFlashDivNode(); var g = { onReady: h },
                    S = { allowScriptAccess: "always", menu: "false" };
                window.swfobject.embedSWF(this.options.swfPath, c, "1", "1", "9.0.0", !1, g, S, {}) },
            getWebglCanvas: function() { var a = document.createElement("canvas"),
                    h = null; try { h = a.getContext("webgl") || a.getContext("experimental-webgl") } catch (e) {} return h || (h = null), h },
            each: function(a, h, c) { if (null !== a)
                    if (this.nativeForEach && a.forEach === this.nativeForEach) a.forEach(h, c);
                    else if (a.length === +a.length) { for (var i = 0, l = a.length; l > i; i++)
                        if (h.call(c, a[i], i, a) === {}) return } else
                    for (var g in a)
                        if (a.hasOwnProperty(g) && h.call(c, a[g], g, a) === {}) return },
            map: function(a, h, c) {
                var g = [];
                return null == a ? g : this.nativeMap && a.map === this.nativeMap ? a.map(h, c) : (this.each(a, function(a, S, T) { g[g.length] = h.call(c, a, S, T) }), g)
            },
            x64Add: function(m, n) { m = [m[0] >>> 16, 65535 & m[0], m[1] >>> 16, 65535 & m[1]], n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]]; var o = [0, 0, 0, 0]; return o[3] += m[3] + n[3], o[2] += o[3] >>> 16, o[3] &= 65535, o[2] += m[2] + n[2], o[1] += o[2] >>> 16, o[2] &= 65535, o[1] += m[1] + n[1], o[0] += o[1] >>> 16, o[1] &= 65535, o[0] += m[0] + n[0], o[0] &= 65535, [o[0] << 16 | o[1], o[2] << 16 | o[3]] },
            x64Multiply: function(m, n) { m = [m[0] >>> 16, 65535 & m[0], m[1] >>> 16, 65535 & m[1]], n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]]; var o = [0, 0, 0, 0]; return o[3] += m[3] * n[3], o[2] += o[3] >>> 16, o[3] &= 65535, o[2] += m[2] * n[3], o[1] += o[2] >>> 16, o[2] &= 65535, o[2] += m[3] * n[2], o[1] += o[2] >>> 16, o[2] &= 65535, o[1] += m[1] * n[3], o[0] += o[1] >>> 16, o[1] &= 65535, o[1] += m[2] * n[2], o[0] += o[1] >>> 16, o[1] &= 65535, o[1] += m[3] * n[1], o[0] += o[1] >>> 16, o[1] &= 65535, o[0] += m[0] * n[3] + m[1] * n[2] + m[2] * n[1] + m[3] * n[0], o[0] &= 65535, [o[0] << 16 | o[1], o[2] << 16 | o[3]] },
            x64Rotl: function(m, n) { return n %= 64, 32 === n ? [m[1], m[0]] : 32 > n ? [m[0] << n | m[1] >>> 32 - n, m[1] << n | m[0] >>> 32 - n] : (n -= 32, [m[1] << n | m[0] >>> 32 - n, m[0] << n | m[1] >>> 32 - n]) },
            x64LeftShift: function(m, n) { return n %= 64, 0 === n ? m : 32 > n ? [m[0] << n | m[1] >>> 32 - n, m[1] << n] : [m[1] << n - 32, 0] },
            x64Xor: function(m, n) { return [m[0] ^ n[0], m[1] ^ n[1]] },
            x64Fmix: function(a) { return a = this.x64Xor(a, [0, a[0] >>> 1]), a = this.x64Multiply(a, [4283543511, 3981806797]), a = this.x64Xor(a, [0, a[0] >>> 1]), a = this.x64Multiply(a, [3301882366, 444984403]), a = this.x64Xor(a, [0, a[0] >>> 1]) },
            x64hash128: function(a, h) { a = a || "", h = h || 0; for (var c = a.length % 16, g = a.length - c, S = [0, h], T = [0, h], v = [0, 0], E = [0, 0], w = [2277735313, 289559509], M = [1291169091, 658871167], i = 0; g > i; i += 16) v = [255 & a.charCodeAt(i + 4) | (255 & a.charCodeAt(i + 5)) << 8 | (255 & a.charCodeAt(i + 6)) << 16 | (255 & a.charCodeAt(i + 7)) << 24, 255 & a.charCodeAt(i) | (255 & a.charCodeAt(i + 1)) << 8 | (255 & a.charCodeAt(i + 2)) << 16 | (255 & a.charCodeAt(i + 3)) << 24], E = [255 & a.charCodeAt(i + 12) | (255 & a.charCodeAt(i + 13)) << 8 | (255 & a.charCodeAt(i + 14)) << 16 | (255 & a.charCodeAt(i + 15)) << 24, 255 & a.charCodeAt(i + 8) | (255 & a.charCodeAt(i + 9)) << 8 | (255 & a.charCodeAt(i + 10)) << 16 | (255 & a.charCodeAt(i + 11)) << 24], v = this.x64Multiply(v, w), v = this.x64Rotl(v, 31), v = this.x64Multiply(v, M), S = this.x64Xor(S, v), S = this.x64Rotl(S, 27), S = this.x64Add(S, T), S = this.x64Add(this.x64Multiply(S, [0, 5]), [0, 1390208809]), E = this.x64Multiply(E, M), E = this.x64Rotl(E, 33), E = this.x64Multiply(E, w), T = this.x64Xor(T, E), T = this.x64Rotl(T, 31), T = this.x64Add(T, S), T = this.x64Add(this.x64Multiply(T, [0, 5]), [0, 944331445]); switch (v = [0, 0], E = [0, 0], c) {
                    case 15:
                        E = this.x64Xor(E, this.x64LeftShift([0, a.charCodeAt(i + 14)], 48));
                    case 14:
                        E = this.x64Xor(E, this.x64LeftShift([0, a.charCodeAt(i + 13)], 40));
                    case 13:
                        E = this.x64Xor(E, this.x64LeftShift([0, a.charCodeAt(i + 12)], 32));
                    case 12:
                        E = this.x64Xor(E, this.x64LeftShift([0, a.charCodeAt(i + 11)], 24));
                    case 11:
                        E = this.x64Xor(E, this.x64LeftShift([0, a.charCodeAt(i + 10)], 16));
                    case 10:
                        E = this.x64Xor(E, this.x64LeftShift([0, a.charCodeAt(i + 9)], 8));
                    case 9:
                        E = this.x64Xor(E, [0, a.charCodeAt(i + 8)]), E = this.x64Multiply(E, M), E = this.x64Rotl(E, 33), E = this.x64Multiply(E, w), T = this.x64Xor(T, E);
                    case 8:
                        v = this.x64Xor(v, this.x64LeftShift([0, a.charCodeAt(i + 7)], 56));
                    case 7:
                        v = this.x64Xor(v, this.x64LeftShift([0, a.charCodeAt(i + 6)], 48));
                    case 6:
                        v = this.x64Xor(v, this.x64LeftShift([0, a.charCodeAt(i + 5)], 40));
                    case 5:
                        v = this.x64Xor(v, this.x64LeftShift([0, a.charCodeAt(i + 4)], 32));
                    case 4:
                        v = this.x64Xor(v, this.x64LeftShift([0, a.charCodeAt(i + 3)], 24));
                    case 3:
                        v = this.x64Xor(v, this.x64LeftShift([0, a.charCodeAt(i + 2)], 16));
                    case 2:
                        v = this.x64Xor(v, this.x64LeftShift([0, a.charCodeAt(i + 1)], 8));
                    case 1:
                        v = this.x64Xor(v, [0, a.charCodeAt(i)]), v = this.x64Multiply(v, w), v = this.x64Rotl(v, 31), v = this.x64Multiply(v, M), S = this.x64Xor(S, v) } return S = this.x64Xor(S, [0, a.length]), T = this.x64Xor(T, [0, a.length]), S = this.x64Add(S, T), T = this.x64Add(T, S), S = this.x64Fmix(S), T = this.x64Fmix(T), S = this.x64Add(S, T), T = this.x64Add(T, S), ("00000000" + (S[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (S[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (T[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (T[1] >>> 0).toString(16)).slice(-8) }
        }, a.VERSION = "1.5.1", a
    })
});
define("widget/CommonTools/DeviceMotionTool", function(require, exports, module) {
    function a(a) { c = { alpha: a.alpha, beta: a.beta, gamma: a.gamma } } var c = null;
    module.exports = { init: function() { window.addEventListener("deviceorientation", a, !0) }, destroy: function() { window.removeEventListener("deviceorientation", a, !1) }, currentData: function() { return c } } });
define('widget/CommonMsgModal/CommonMsgModal', function(require, exports, module) {

    module.exports = {
        show: function(e) {
            var n = {
                title: "",
                tip: "",
                type: "",
                btnText: "",
                link: "",
                clickCallback: null,
                btnCallback: null
            };
            e = $.extend({}, n, e);
            this.render(e)
        },
        hide: function() {
            $(".db-msg-modal").remove(),
                $("#db-content").removeClass("filter")
        },
        render: function(e) {
            var i = this,
                imagePaths = {
                    again: "../../images/widget/CommonMsgModal/img/again.png",
                    noPrize: "../../images/widget/CommonMsgModal/img/noPrize.png",
                    todayOver: "../../images/widget/CommonMsgModal/img/todayOver.png",
                    over: "../../images/widget/CommonMsgModal/img/over.png",
                    preview: "../../images/widget/CommonMsgModal/img/noCredits.png",
                    systemError: "../../images/widget/CommonMsgModal/img/noLogin.png",
                    networkError: "../../images/widget/CommonMsgModal/img/networkError.png"
                },
                r = imagePaths[e.type],
                a = '<div class="db-msg-modal"><div class="msg-modal-wrapper"><div class="msg-modal-header"><i class="msg-modal-close"></i><h4 class="msg-title">' + e.title + '</h4><p class="msg-tip">' + e.tip + '</p></div><div class="msg-modal-section">' + (r ? '<img src="' + r + '" />' : "") + '</div><div class="msg-modal-footer"><a href="javascript:;" class="msg-btn">' + e.btnText + "</a></div></div></div>";
            $("body").append(a),
                $("#db-content").addClass("filter"),
                $(".db-msg-modal").off("click").on("click", ".msg-modal-close", function() {
                    e.clickCallback && e.clickCallback(),
                        i.hide()
                }).on("click", ".msg-btn", function() {
                    e.link && (window.location.href = e.link),
                        e.btnCallback ? e.btnCallback() : e.clickCallback && e.clickCallback(),
                        i.hide()
                })
        },
        createErrorObject: function(t, e) {
            var n = "",
                i = "",
                o = "",
                r = "";
            e ? e : e = {};
            var a = 0;
            switch (window.CFG && 1 == CFG.overseas && (a = 1),
                t) {
                case "systemError":
                    n = e.title ? e.title : a ? "Draw failure" : "鎶藉澶辫触",
                        i = e.message,
                        o = a ? "Try again" : "鍐嶆潵涓€娆�";
                    break;
                case "networkError":
                    n = a ? "Oh锛丯etwork parsing error" : "鍣㈠摝锛岀綉缁滆В鏋愰敊璇紒",
                        i = a ? "Try again" : "鍐嶈瘯涓€閬嶅惂~",
                        o = a ? "again" : "鍐嶆潵涓€娆�";
                    break;
                case "gameClose":
                    n = a ? "End of the activity" : "娲诲姩缁撴潫",
                        i = a ? "The activity is over" : "璇ユ椿鍔ㄥ凡缁忕粨鏉熷暒~",
                        o = a ? "I see" : "鐭ラ亾浜�";
                    break;
                case "over":
                    n = a ? "The activity is over" : "鎶藉娆℃暟宸插叏閮ㄧ敤瀹�",
                        i = a ? "Your opportunity is used up" : "宸茬粡娌℃湁娆℃暟鍟",
                        o = a ? "I see" : "鐭ラ亾浜�";
                    break;
                case "todayOver":
                    n = a ? "Your opportunity is used up" : "浠婂ぉ鎶藉娆℃暟宸茬敤瀹�",
                        i = a ? "See you" : "鏄庡ぉ鍐嶆潵鍝",
                        o = a ? "I see" : "鐭ラ亾浜�";
                    break;
                case "noPrize":
                    n = a ? "Oh! What a pity!" : "鍝庡憖锛屽氨宸偅涔堜竴鐐圭偣~",
                        i = a ? "Don`t lose heart. Come again" : "鍒伆蹇冿紝鍐嶆潵涓€娆★紒",
                        o = a ? "again" : "鍐嶆娊涓€娆�";
                    break;
                case "again":
                    n = a ? "Congratulations!" : "鎭枩鎮紝涓浜�",
                        i = a ? "Get a free redraw" : "鑾峰緱鍏嶈垂鍐嶆娊涓€娆�",
                        o = a ? "again" : "鍐嶆娊涓€娆�";
                    break;
                case "preview":
                    n = "棰勮鐢ㄦ埛鏃犳硶鍙備笌娲诲姩",
                        i = "鎹㈡甯哥敤鎴锋潵鍚",
                        o = "鐭ラ亾浜�"
            }
            return {
                type: t,
                title: n,
                tip: i,
                btnText: o,
                link: r
            }
        }
    }

});

define('widget/RecommendActivitiesWidget/RecommendActivitiesWidget.es6', function(require, exports, module) {

    'use strict';

    function createActivity(data) {
        return $('<a>', {
            class: 'recommend-li',
            href: data.activityUrl
        }).append($('<i>', {
            class: 'recommend-btn',
            style: 'background-image: url(//yun.tuisnake.com/h5-mami/recommend/btn.png)'
        })).append($('<img>', {
            src: data.activityImage
        }));
    }
    module.exports = {
        init: function init(data) {
            if (data.length == 1) {
                data.push({
                    activityImage: 'http://images.nicetui.cn/mami-media/img/myPrizeListEnterance.jpg',
                    activityUrl: '../MyPrizeList/MyPrizeList.html'
                });
            } else if (data.length < 1) {
                return false;
            }
            var html = $('<div>', {
                id: 'recommend-modal',
                class: 'recommend-modal'
            }).append($('<div>', {
                class: 'recommend-modal-dialog'
            }).append($('<i>', {
                class: 'close'
            })).append($('<div>', {
                class: 'recommend-body1',
                style: 'background-image: url(//yun.tuisnake.com/h5-mami/recommend/m.png);'
            }).append($('<a>', {
                class: 'fuli',
                href: '//activity.tuiapple.com/mainMeet/index?id=873&amp;slotId=1381&amp;deviceId=e5dffab7-0e57-4c1c-8438-ff6985758f3e&amp;login=normal&amp;appKey=&amp;dpm=26520.36.3.5930&amp;dsm=3.29.1.5930',
                style: 'background-image: url(//yun.tuisnake.com/h5-mami/recommend/fuli.png);display:none'
            })).append(createActivity(data[0])).append(createActivity(data[1]))));

            $(document.body).append(html);
            $('#recommend-modal .close').one('click', function() {
                $('#recommend-modal').remove();
            });
        }
    };

});

define('widget/PrizeModal/CouponModal-Random/CouponModal-Random.es6', function(require, exports, module) {

    "use strict";

    module.exports = {
        init: function init($container, data) {
            var html = "\n    <div id=\"plugin\" class=\"plugin-pop\" style=\"z-index: 200;\">\n        <!-- \u63D2\u4EF6\u9634\u5F71 -->\n        <div class=\"pop-shadow\"></div>\n        <!-- \u5173\u95ED\u6309\u94AE -->\n        <div class=\"pop-close j-close-btn\"></div>\n        <!-- \u821E\u53F0 -->\n        <div class=\"pop-stage\">\n            <div class=\"bgtop\"></div>\n            <div class=\"bgbot\"></div>\n            <div class=\"j-act-btn\"></div>\n            <!-- \u4E2D\u5956 -->\n            <div class=\"pop-win content\">\n                <a class=\"coupon-img j-coupon-img order\" href=\"javascript:void(0);\">\n                  <img src=\"\"/>\n                </a>\n                <div class=\"coupon-title-box\">\n                    <div class=\"coupon-title j-coupon-title desc\"></div>\n                </div>\n                <a class=\"coupon-btn j-coupon-btn\" href=\"javascript:void(0);\"></a>\n            </div>\n        </div>\n                <div class=\"blueFire\"></div>\n                <div class=\"blueDot\"></div>\n                <div class=\"orangeFire\"></div>\n                <div class=\"orangeDot\"></div>\n                <div class=\"redFire\"></div>\n                <div class=\"redDot\"></div>\n        <div class=\"pop-bottom\"></div>\n        \n        <!-- \u5931\u8D25 -->\n        <div class=\"pop-lose\"></div>\n    </div>";

            $container.append(html);

            var $popStage = $(".pop-stage"),
                $popWin = $(".pop-win"),
                $popLose = $(".pop-lose"),
                $popStageTop = $(".pop-stage .bgtop");

            $('.pop-close.j-close-btn').on('click', function() {
                $('#plugin').remove();
            });

            var lastData = null;
            $('.j-act-btn').on('click', function() {
                if ($(this).hasClass('active')) {
                    $('#plugin').remove();
                    window.location.href = lastData.jnmpUrl;
                } else {
                    var netCenter = require("widget/NetDataCenter/NetDataCenter");
                    netCenter.prizeData({
                        data: {
                            type: 1
                        },
                        success: function success(result) {
                            lastData = result.data;
                            $('#plugin img').prop('src', result.data.creativeImg);
                            $('#plugin .coupon-title.j-coupon-title.desc').html(result.data.creativeName);
                            $popWin.addClass("active");
                            $popWin.show();
                            $popStageTop.addClass("active");
                            $('.j-act-btn').addClass('active');
                        }
                    });
                }
            });
        }
    };

});

define("widget/CommonTools/CommonTools", function(require, exports, module) { var a = require("widget/CommonTools/StringsTool"),
        c = require("widget/CommonTools/DateTool"),
        h = { platform: { isiOS: function() { return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) }, isAndroid: function() { return /(Android)/i.test(navigator.userAgent) } }, loadCssCode: function(a) { var c = document.createElement("style");
                c.type = "text/css", c.rel = "stylesheet", c.appendChild(document.createTextNode(a)); var h = document.getElementsByTagName("head")[0];
                h.appendChild(c) }, getActivityStatusText: function(a) { return 0 >= a ? "鎶藉鏈轰細宸茬敤瀹�" : "浠婃棩鍏嶈垂锛�" + a + " 娆�" }, uniqueArray: function(a) { for (var c, h = [], g = {}, i = 0; null != (c = a[i]); i++) g[c] || (h.push(c), g[c] = !0); return h }, ArrayRemoveExtension: function() { Array.prototype.remove = function(a) { var c = this.indexOf(a);
                    c > -1 && this.splice(c, 1) } }, returnIntercept: function(a) { if (this.isURL(a) && (a = location.origin + this.getUrlRelativePath(a) + "?" + this.getUrlPara(a), !history.state)) { var c = location.href;
                    history.replaceState({ page: "intercept", entered: !1 }, "", a), history.pushState({ page: "current" }, "", c) }
                window.onpopstate = function() { this.history.state && "intercept" == this.history.state.page && (this.history.state.entered || history.replaceState({ page: "intercept", entered: !0 }, "", a)), location.reload() } }, showRedPacket: function(a) { if (!a) return !1; var c = this.getUrlQuery(),
                    h = c.key,
                    g = localStorage.getItem(h),
                    y = this.getTodayFull(); if (y == g) return !1;
                localStorage.setItem(h, y); var v = require("widget/PrizeModal/CouponModal-Random/CouponModal-Random.es6");
                v.init($(document.body)) }, getUrlRelativePath: function(a) { if (!this.isURL(a)) return null; var c = a.split("//"),
                    h = c[1].indexOf("/"),
                    g = c[1].substring(h); return -1 != g.indexOf("?") && (g = g.split("?")[0]), g }, getUrlPara: function(a) { var c = a.split("?"),
                    h = c[1]; return h }, getUrlQuery: function() { var a = location.search,
                    c = new Object; if (-1 != a.indexOf("?")) { var h = a.substr(1);
                    strs = h.split("&"); for (var i = 0; i < strs.length; i++) c[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]) } return c } };
    h = $.extend(h, a, c), module.exports = h });
define("widget/NetDataCenter/NetDataCenter", function(require, exports, module) { var a = "http://api8.nicetui.cn/niceapi/",
        c = require("widget/CommonTools/CommonTools"),
        v = require("fingerprint2"),
        g = require("widget/CommonTools/DeviceMotionTool");
    g.init(); var y = {};
    (new v).get(function(a, c) { y = $.extend({ UUID: a }, c) }), module.exports = { ajax: function(v) { var h = c.getUrlQuery() ? c.getUrlQuery() : {}; return h.userid = this.userID(), v.data = v.data || {}, v.data = $.extend(v.data, h, { uniqueInfo: y }, { deviceMotion: g.currentData() }), v.url = c.isURL(v.url) ? v.url : a + v.url, v.dataType = v.dataType ? v.dataType : "json", v.type = v.type ? v.type : "POST", v.timeout = v.timeout ? v.timeout : 5e3, $.ajax(v) }, pageInitData: function(a, c) { var v = this;
            this.ajax({ url: "getactivity", success: function(c) { var g = c.code;
                    0 == g ? a && "undefined" != typeof a && (a(c), 0 == c.data.freeLimitCount && v.randomActivity()) : location.href = "../404/404.html" }, error: function(a, v) { "timeout" == v ? c && "undefined" != typeof c && c(c) : location.href = "../404/404.html" } }) }, prizeData: function(a) { this.ajax({ url: "getadvertorder", data: a.data, success: function(c) { var v = c.code; if (0 == v) a.success && "undefined" != typeof a.success && a.success(c);
                    else if (403 == v) { var g = require("widget/CommonMsgModal/CommonMsgModal"),
                            y = g.createErrorObject("noPrize", null);
                        y = $.extend({}, { clickCallback: function() { window.location.reload() } }, y), g.show(y) } else { var g = require("widget/CommonMsgModal/CommonMsgModal"),
                            y = g.createErrorObject("systemError", null);
                        y = $.extend({}, { clickCallback: function() { window.location.reload() } }, y), g.show(y) } }, error: function(c, v) { if ("timeout" != v) { var g = require("widget/CommonMsgModal/CommonMsgModal"),
                            y = g.createErrorObject("systemError", null); return y = $.extend({}, { clickCallback: function() { window.location.reload() } }, y), void g.show(y) }
                    a.error && "undefined" != typeof a.error && a.error(error) } }) }, randomActivity: function(a) { this.ajax({ url: "getrandomactivity", data: a ? a.data : null, success: function(a) { var c = a.code; if (0 == c) { var v = require("widget/RecommendActivitiesWidget/RecommendActivitiesWidget.es6");
                        v.init(a.data) } } }) }, userID: function() { require("zepto/cookie"); var a = $.fn.cookie("userid"); return (null == a || "" == a) && ($.fn.cookie("userid", this.createUUID(), { expires: 365, path: "/" }), a = $.fn.cookie("userid")), a }, createUUID: function() { for (var s = [], a = "0123456789abcdef", i = 0; 36 > i; i++) s[i] = a.substr(Math.floor(16 * Math.random()), 1);
            s[14] = "4", s[19] = a.substr(3 & s[19] | 8, 1), s[8] = s[13] = s[18] = s[23] = ""; var c = s.join(""); return c } } });
define("widget/PrizeModal/PrizeModal", function(require, exports, module) { module.exports = { showModal: function(c, h, w) { var k = this;
            $("body").append(c.init(h)), $(".J_modalShowPrize .J_btnCoupon").on("click", function() { $(this).html();
                location.href = h.jnmpUrl, w && w.use && "function" == typeof w.use && w.use() }), $(".J_modalShowPrize .coupon-modal-close").on("click", function() { $(this).hide(), k.animationOut(w) }), $(".J_modalShowPrize .modal-title.title-clickable").on("click", function(i) { window.DB.exposure.singleClk({ data: r.titleDBClick, callback: function() { i.preventDefault(), r.sendResult(a, function() { t.callback && t.callback.close && t.callback.use(), r.prize.showUse ? window.downloadApp() : window.location.href = r.prize.link }) } }) }), $(".coupon-again").on("click", function(i) { window.DB.exposure.singleClk({ data: r.againDBClick, callback: function() { i.preventDefault(), t.callback && t.callback.again && t.callback.again() } }) }) }, animationOut: function(a) { var e = $(".coupon-modal-showPrize"),
                o = $(".record"),
                n = e.offset().left + e.offset().width / 2,
                s = e.offset().top + e.offset().height / 2,
                r = o.length ? o.offset().left + o.offset().width / 2 : document.body.offsetWidth,
                c = o.length ? o.offset().top + o.offset().height / 2 : 0,
                l = parseInt(r - n),
                h = parseInt(c - s),
                w = $(".coupon-modal-showPrize");
            w.css({ "background-color": "rgba(0, 0, 0, 0)" }).animate({ translateY: h + "px" }, 800, "ease-out", function() { $(".J_modalShowPrize").remove() }), $(".coupon-modal-animate").animate({ translateX: l + "px", scale: 0 }, 800, "cubic-bezier(0.23, 0.21, 0.71, 1)"), $(".coupon-modal-showPrize-dialog").animate({ scale: 0 }, 800, "linear"), setTimeout(function() { a && a.close ? a.close() : self.prize.noreload || window.location.reload() }, 0) } } });
define('widget/PrizeModal/CouponModal-Light/CouponModal-Light.es6', function(require, exports, module) {

    "use strict";

    // var html = `<div>
    //     <p>鏃堕棿锛� ${new Date()}</p>
    //     <input id="${Math.random() > 0.5 ? "large" : "small"}" type="text">
    // </div>`;

    module.exports = {
        init: function init(data) {
            var defaultStrings = {
                couponcode: "鍒哥爜",
                password: "瀵嗙爜",
                btnText: "绔嬪嵆棰嗗彇",
                congratulations: "鎭枩鎮ㄨ幏寰椾簡"
            };

            var html = "\n        <div class=\"J_modalShowPrize coupon-modal-showPrize\">\n            <div class=\"coupon-modal-animate\">\n                <div class=\"coupon-modal-showPrize-dialog\">\n                    <span class=\"close coupon-modal-close\"></span>\n                    <div class=\"modal-light\">\n                    <div class=\"l-shine\"></div>\n                    </div>\n                    <div class=\"modal-header\">\n                    </div>\n                    " + (data.couponCode ? '<div class="modal-body">' : '<div class="modal-body withoutCode">') + "\n                        <div class=\"body-header\">\n                        </div>\n                        <div class=\"coupon-wrapper\">\n                            <div class=\"coupon-image\">\n                                <img class=\"J_gotoDetail logandgo\" data-pic=\"true\" src=\"" + data.creativeImg + "\"/>\n                            </div>\n                        </div>\n                        <div class=\"body-footer\">\n                            <span class=\"coupon-win\">" + defaultStrings.congratulations + "</span>\n                            <h3 class=\"coupon-name\"><span>" + data.creativeName + "</span></h3>\n                            " + (data.buttonCopy ? "<button type=\"button\" class=\"J_btnCoupon coupon-use\"><span>" + (data.buttonCopy ? data.buttonCopy : defaultStrings.btnText) + "</span></button>" : {}) + "\n                        </div>\n                    </div>\n                    <i class=\"decoration\"></i>  \n                    </div>\n                </div>\n        </div>";
            return html;
        }
    };

});

define("modules/js/iscroll/iscroll", function(require, exports, module) {
    ! function(h, a, c) {
        function g(c, g) { this.wrapper = "string" == typeof c ? a.querySelector(c) : c, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = { resizeScrollbars: !0, mouseWheelSpeed: 20, snapThreshold: .334, disablePointer: !T.hasPointer, disableTouch: T.hasPointer || !T.hasTouch, disableMouse: T.hasPointer || T.hasTouch, startX: 0, startY: 0, scrollY: !0, directionLockThreshold: 5, momentum: !0, bounce: !0, bounceTime: 600, bounceEasing: "", preventDefault: !0, preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ }, HWCompositing: !0, useTransition: !0, useTransform: !0, bindToWrapper: "undefined" == typeof h.onmousedown }; for (var i in g) this.options[i] = g[i];
            this.translateZ = this.options.HWCompositing && T.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = T.hasTransition && this.options.useTransition, this.options.useTransform = T.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" == this.options.eventPassthrough ? !1 : this.options.scrollY, this.options.scrollX = "horizontal" == this.options.eventPassthrough ? !1 : this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? T.ease[this.options.bounceEasing] || T.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable() }

        function v(h, c, g) { var v = a.createElement("div"),
                y = a.createElement("div"); return g === !0 && (v.style.cssText = "position:absolute;z-index:9999", y.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), y.className = "iScrollIndicator", "h" == h ? (g === !0 && (v.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", y.style.height = "100%"), v.className = "iScrollHorizontalScrollbar") : (g === !0 && (v.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", y.style.width = "100%"), v.className = "iScrollVerticalScrollbar"), v.style.cssText += ";overflow:hidden", c || (v.style.pointerEvents = "none"), v.appendChild(y), v }

        function y(c, g) { this.wrapper = "string" == typeof g.el ? a.querySelector(g.el) : g.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = c, this.options = { listenX: !0, listenY: !0, interactive: !1, resize: !0, defaultScrollbars: !1, shrink: !1, fade: !1, speedRatioX: 0, speedRatioY: 0 }; for (var i in g) this.options[i] = g[i]; if (this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (T.addEvent(this.indicator, "touchstart", this), T.addEvent(h, "touchend", this)), this.options.disablePointer || (T.addEvent(this.indicator, T.prefixPointerEvent("pointerdown"), this), T.addEvent(h, T.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (T.addEvent(this.indicator, "mousedown", this), T.addEvent(h, "mouseup", this))), this.options.fade) { this.wrapperStyle[T.style.transform] = this.scroller.translateZ; var v = T.style.transitionDuration;
                this.wrapperStyle[v] = T.isBadAndroid ? "0.0001ms" : "0ms"; var y = this;
                T.isBadAndroid && S(function() { "0.0001ms" === y.wrapperStyle[v] && (y.wrapperStyle[v] = "0s") }), this.wrapperStyle.opacity = "0" } }
        var S = h.requestAnimationFrame || h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.oRequestAnimationFrame || h.msRequestAnimationFrame || function(a) { h.setTimeout(a, 1e3 / 60) },
            T = function() {
                function g(h) { return S === !1 ? !1 : "" === S ? h : S + h.charAt(0).toUpperCase() + h.substr(1) } var v = {},
                    y = a.createElement("div").style,
                    S = function() { for (var h, a = ["t", "webkitT", "MozT", "msT", "OT"], i = 0, l = a.length; l > i; i++)
                            if (h = a[i] + "ransform", h in y) return a[i].substr(0, a[i].length - 1);
                        return !1 }();
                v.getTime = Date.now || function() { return (new Date).getTime() }, v.extend = function(h, a) { for (var i in a) h[i] = a[i] }, v.addEvent = function(h, a, c, g) { h.addEventListener(a, c, !!g) }, v.removeEvent = function(h, a, c, g) { h.removeEventListener(a, c, !!g) }, v.prefixPointerEvent = function(a) { return h.MSPointerEvent ? "MSPointer" + a.charAt(7).toUpperCase() + a.substr(8) : a }, v.momentum = function(h, a, g, v, y, S) { var T, b, w = h - a,
                        E = c.abs(w) / g; return S = void 0 === S ? 6e-4 : S, T = h + E * E / (2 * S) * (0 > w ? -1 : 1), b = E / S, v > T ? (T = y ? v - y / 2.5 * (E / 8) : v, w = c.abs(T - h), b = w / E) : T > 0 && (T = y ? y / 2.5 * (E / 8) : 0, w = c.abs(h) + T, b = w / E), { destination: c.round(T), duration: b } }; var T = g("transform"); return v.extend(v, { hasTransform: T !== !1, hasPerspective: g("perspective") in y, hasTouch: "ontouchstart" in h, hasPointer: !(!h.PointerEvent && !h.MSPointerEvent), hasTransition: g("transition") in y }), v.isBadAndroid = function() { var a = h.navigator.appVersion; if (/Android/.test(a) && !/Chrome\/\d/.test(a)) { var c = a.match(/Safari\/(\d+.\d)/); return c && "object" == typeof c && c.length >= 2 ? parseFloat(c[1]) < 535.19 : !0 } return !1 }(), v.extend(v.style = {}, { transform: T, transitionTimingFunction: g("transitionTimingFunction"), transitionDuration: g("transitionDuration"), transitionDelay: g("transitionDelay"), transformOrigin: g("transformOrigin") }), v.hasClass = function(e, h) { var re = new RegExp("(^|\\s)" + h + "(\\s|$)"); return re.test(e.className) }, v.addClass = function(e, h) { if (!v.hasClass(e, h)) { var a = e.className.split(" ");
                        a.push(h), e.className = a.join(" ") } }, v.removeClass = function(e, h) { if (v.hasClass(e, h)) { var re = new RegExp("(^|\\s)" + h + "(\\s|$)", "g");
                        e.className = e.className.replace(re, " ") } }, v.offset = function(h) { for (var a = -h.offsetLeft, c = -h.offsetTop; h = h.offsetParent;) a -= h.offsetLeft, c -= h.offsetTop; return { left: a, top: c } }, v.preventDefaultException = function(h, a) { for (var i in a)
                        if (a[i].test(h[i])) return !0;
                    return !1 }, v.extend(v.eventType = {}, { touchstart: 1, touchmove: 1, touchend: 1, mousedown: 2, mousemove: 2, mouseup: 2, pointerdown: 3, pointermove: 3, pointerup: 3, MSPointerDown: 3, MSPointerMove: 3, MSPointerUp: 3 }), v.extend(v.ease = {}, { quadratic: { style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", fn: function(h) { return h * (2 - h) } }, circular: { style: "cubic-bezier(0.1, 0.57, 0.1, 1)", fn: function(h) { return c.sqrt(1 - --h * h) } }, back: { style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)", fn: function(h) { var a = 4; return (h -= 1) * h * ((a + 1) * h + a) + 1 } }, bounce: { style: "", fn: function(h) { return (h /= 1) < 1 / 2.75 ? 7.5625 * h * h : 2 / 2.75 > h ? 7.5625 * (h -= 1.5 / 2.75) * h + .75 : 2.5 / 2.75 > h ? 7.5625 * (h -= 2.25 / 2.75) * h + .9375 : 7.5625 * (h -= 2.625 / 2.75) * h + .984375 } }, elastic: { style: "", fn: function(h) { var f = .22,
                                e = .4; return 0 === h ? 0 : 1 == h ? 1 : e * c.pow(2, -10 * h) * c.sin(2 * (h - f / 4) * c.PI / f) + 1 } } }), v.tap = function(e, h) { var c = a.createEvent("Event");
                    c.initEvent(h, !0, !0), c.pageX = e.pageX, c.pageY = e.pageY, e.target.dispatchEvent(c) }, v.click = function(e) { var h, c = e.target; /(SELECT|INPUT|TEXTAREA)/i.test(c.tagName) || (h = a.createEvent("MouseEvents"), h.initMouseEvent("click", !0, !0, e.view, 1, c.screenX, c.screenY, c.clientX, c.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), h._constructed = !0, c.dispatchEvent(h)) }, v }();
        g.prototype = { version: "5.2.0", _init: function() { this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys() }, destroy: function() { this._initEvents(!0), clearTimeout(this.resizeTimeout), this.resizeTimeout = null, this._execEvent("destroy") }, _transitionEnd: function(e) { e.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd"))) }, _start: function(e) { if (1 != T.eventType[e.type]) { var h; if (h = e.which ? e.button : e.button < 2 ? 0 : 4 == e.button ? 1 : 2, 0 !== h) return } if (this.enabled && (!this.initiated || T.eventType[e.type] === this.initiated)) {!this.options.preventDefault || T.isBadAndroid || T.preventDefaultException(e.target, this.options.preventDefaultException) || e.preventDefault(); var a, g = e.touches ? e.touches[0] : e;
                    this.initiated = T.eventType[e.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this.startTime = T.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, a = this.getComputedPosition(), this._translate(c.round(a.x), c.round(a.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = g.pageX, this.pointY = g.pageY, this._execEvent("beforeScrollStart") } }, _move: function(e) { if (this.enabled && T.eventType[e.type] === this.initiated) { this.options.preventDefault && e.preventDefault(); var h, a, g, v, y = e.touches ? e.touches[0] : e,
                        S = y.pageX - this.pointX,
                        b = y.pageY - this.pointY,
                        w = T.getTime(); if (this.pointX = y.pageX, this.pointY = y.pageY, this.distX += S, this.distY += b, g = c.abs(this.distX), v = c.abs(this.distY), !(w - this.endTime > 300 && 10 > g && 10 > v)) { if (this.directionLocked || this.options.freeScroll || (this.directionLocked = g > v + this.options.directionLockThreshold ? "h" : v >= g + this.options.directionLockThreshold ? "v" : "n"), "h" == this.directionLocked) { if ("vertical" == this.options.eventPassthrough) e.preventDefault();
                            else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
                            b = 0 } else if ("v" == this.directionLocked) { if ("horizontal" == this.options.eventPassthrough) e.preventDefault();
                            else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
                            S = 0 }
                        S = this.hasHorizontalScroll ? S : 0, b = this.hasVerticalScroll ? b : 0, h = this.x + S, a = this.y + b, (h > 0 || h < this.maxScrollX) && (h = this.options.bounce ? this.x + S / 3 : h > 0 ? 0 : this.maxScrollX), (a > 0 || a < this.maxScrollY) && (a = this.options.bounce ? this.y + b / 3 : a > 0 ? 0 : this.maxScrollY), this.directionX = S > 0 ? -1 : 0 > S ? 1 : 0, this.directionY = b > 0 ? -1 : 0 > b ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(h, a), w - this.startTime > 300 && (this.startTime = w, this.startX = this.x, this.startY = this.y) } } }, _end: function(e) { if (this.enabled && T.eventType[e.type] === this.initiated) { this.options.preventDefault && !T.preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault(); var h, a, g = (e.changedTouches ? e.changedTouches[0] : e, T.getTime() - this.startTime),
                        v = c.round(this.x),
                        y = c.round(this.y),
                        S = c.abs(v - this.startX),
                        b = c.abs(y - this.startY),
                        w = 0,
                        E = ""; if (this.isInTransition = 0, this.initiated = 0, this.endTime = T.getTime(), !this.resetPosition(this.options.bounceTime)) { if (this.scrollTo(v, y), !this.moved) return this.options.tap && T.tap(e, this.options.tap), this.options.click && T.click(e), void this._execEvent("scrollCancel"); if (this._events.flick && 200 > g && 100 > S && 100 > b) return void this._execEvent("flick"); if (this.options.momentum && 300 > g && (h = this.hasHorizontalScroll ? T.momentum(this.x, this.startX, g, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: v, duration: 0 }, a = this.hasVerticalScroll ? T.momentum(this.y, this.startY, g, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: y, duration: 0 }, v = h.destination, y = a.destination, w = c.max(h.duration, a.duration), this.isInTransition = 1), this.options.snap) { var P = this._nearestSnap(v, y);
                            this.currentPage = P, w = this.options.snapSpeed || c.max(c.max(c.min(c.abs(v - P.x), 1e3), c.min(c.abs(y - P.y), 1e3)), 300), v = P.x, y = P.y, this.directionX = 0, this.directionY = 0, E = this.options.bounceEasing } return v != this.x || y != this.y ? ((v > 0 || v < this.maxScrollX || y > 0 || y < this.maxScrollY) && (E = T.ease.quadratic), void this.scrollTo(v, y, w, E)) : void this._execEvent("scrollEnd") } } }, _resize: function() { var h = this;
                clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() { h.refresh() }, this.options.resizePolling) }, resetPosition: function(h) { var x = this.x,
                    a = this.y; return h = h || 0, !this.hasHorizontalScroll || this.x > 0 ? x = 0 : this.x < this.maxScrollX && (x = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? a = 0 : this.y < this.maxScrollY && (a = this.maxScrollY), x == this.x && a == this.y ? !1 : (this.scrollTo(x, a, h, this.options.bounceEasing), !0) }, disable: function() { this.enabled = !1 }, enable: function() { this.enabled = !0 }, refresh: function() { this.wrapper.offsetHeight;
                this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = T.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition() }, on: function(h, a) { this._events[h] || (this._events[h] = []), this._events[h].push(a) }, off: function(h, a) { if (this._events[h]) { var c = this._events[h].indexOf(a);
                    c > -1 && this._events[h].splice(c, 1) } }, _execEvent: function(h) { if (this._events[h]) { var i = 0,
                        l = this._events[h].length; if (l)
                        for (; l > i; i++) this._events[h][i].apply(this, [].slice.call(arguments, 1)) } }, scrollBy: function(x, h, a, c) { x = this.x + x, h = this.y + h, a = a || 0, this.scrollTo(x, h, a, c) }, scrollTo: function(x, h, a, c) { c = c || T.ease.circular, this.isInTransition = this.options.useTransition && a > 0; var g = this.options.useTransition && c.style;!a || g ? (g && (this._transitionTimingFunction(c.style), this._transitionTime(a)), this._translate(x, h)) : this._animate(x, h, a, c.fn) }, scrollToElement: function(h, a, g, v, y) { if (h = h.nodeType ? h : this.scroller.querySelector(h)) { var S = T.offset(h);
                    S.left -= this.wrapperOffset.left, S.top -= this.wrapperOffset.top, g === !0 && (g = c.round(h.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), v === !0 && (v = c.round(h.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), S.left -= g || 0, S.top -= v || 0, S.left = S.left > 0 ? 0 : S.left < this.maxScrollX ? this.maxScrollX : S.left, S.top = S.top > 0 ? 0 : S.top < this.maxScrollY ? this.maxScrollY : S.top, a = void 0 === a || null === a || "auto" === a ? c.max(c.abs(this.x - S.left), c.abs(this.y - S.top)) : a, this.scrollTo(S.left, S.top, a, y) } }, _transitionTime: function(h) { h = h || 0; var a = T.style.transitionDuration; if (this.scrollerStyle[a] = h + "ms", !h && T.isBadAndroid) { this.scrollerStyle[a] = "0.0001ms"; var c = this;
                    S(function() { "0.0001ms" === c.scrollerStyle[a] && (c.scrollerStyle[a] = "0s") }) } if (this.indicators)
                    for (var i = this.indicators.length; i--;) this.indicators[i].transitionTime(h) }, _transitionTimingFunction: function(h) { if (this.scrollerStyle[T.style.transitionTimingFunction] = h, this.indicators)
                    for (var i = this.indicators.length; i--;) this.indicators[i].transitionTimingFunction(h) }, _translate: function(x, h) { if (this.options.useTransform ? this.scrollerStyle[T.style.transform] = "translate(" + x + "px," + h + "px)" + this.translateZ : (x = c.round(x), h = c.round(h), this.scrollerStyle.left = x + "px", this.scrollerStyle.top = h + "px"), this.x = x, this.y = h, this.indicators)
                    for (var i = this.indicators.length; i--;) this.indicators[i].updatePosition() }, _initEvents: function(a) { var c = a ? T.removeEvent : T.addEvent,
                    g = this.options.bindToWrapper ? this.wrapper : h;
                c(h, "orientationchange", this), c(h, "resize", this), this.options.click && c(this.wrapper, "click", this, !0), this.options.disableMouse || (c(this.wrapper, "mousedown", this), c(g, "mousemove", this), c(g, "mousecancel", this), c(g, "mouseup", this)), T.hasPointer && !this.options.disablePointer && (c(this.wrapper, T.prefixPointerEvent("pointerdown"), this), c(g, T.prefixPointerEvent("pointermove"), this), c(g, T.prefixPointerEvent("pointercancel"), this), c(g, T.prefixPointerEvent("pointerup"), this)), T.hasTouch && !this.options.disableTouch && (c(this.wrapper, "touchstart", this), c(g, "touchmove", this), c(g, "touchcancel", this), c(g, "touchend", this)), c(this.scroller, "transitionend", this), c(this.scroller, "webkitTransitionEnd", this), c(this.scroller, "oTransitionEnd", this), c(this.scroller, "MSTransitionEnd", this) }, getComputedPosition: function() { var x, a, c = h.getComputedStyle(this.scroller, null); return this.options.useTransform ? (c = c[T.style.transform].split(")")[0].split(", "), x = +(c[12] || c[4]), a = +(c[13] || c[5])) : (x = +c.left.replace(/[^-\d.]/g, ""), a = +c.top.replace(/[^-\d.]/g, "")), { x: x, y: a } }, _initIndicators: function() {
                function h(h) { if (T.indicators)
                        for (var i = T.indicators.length; i--;) h.call(T.indicators[i]) } var a, c = this.options.interactiveScrollbars,
                    g = "string" != typeof this.options.scrollbars,
                    S = [],
                    T = this;
                this.indicators = [], this.options.scrollbars && (this.options.scrollY && (a = { el: v("v", c, this.options.scrollbars), interactive: c, defaultScrollbars: !0, customStyle: g, resize: this.options.resizeScrollbars, shrink: this.options.shrinkScrollbars, fade: this.options.fadeScrollbars, listenX: !1 }, this.wrapper.appendChild(a.el), S.push(a)), this.options.scrollX && (a = { el: v("h", c, this.options.scrollbars), interactive: c, defaultScrollbars: !0, customStyle: g, resize: this.options.resizeScrollbars, shrink: this.options.shrinkScrollbars, fade: this.options.fadeScrollbars, listenY: !1 }, this.wrapper.appendChild(a.el), S.push(a))), this.options.indicators && (S = S.concat(this.options.indicators)); for (var i = S.length; i--;) this.indicators.push(new y(this, S[i]));
                this.options.fadeScrollbars && (this.on("scrollEnd", function() { h(function() { this.fade() }) }), this.on("scrollCancel", function() { h(function() { this.fade() }) }), this.on("scrollStart", function() { h(function() { this.fade(1) }) }), this.on("beforeScrollStart", function() { h(function() { this.fade(1, !0) }) })), this.on("refresh", function() { h(function() { this.refresh() }) }), this.on("destroy", function() { h(function() { this.destroy() }), delete this.indicators }) }, _initWheel: function() { T.addEvent(this.wrapper, "wheel", this), T.addEvent(this.wrapper, "mousewheel", this), T.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function() { clearTimeout(this.wheelTimeout), this.wheelTimeout = null, T.removeEvent(this.wrapper, "wheel", this), T.removeEvent(this.wrapper, "mousewheel", this), T.removeEvent(this.wrapper, "DOMMouseScroll", this) }) }, _wheel: function(e) { if (this.enabled) { e.preventDefault(); var h, a, g, v, y = this; if (void 0 === this.wheelTimeout && y._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() { y.options.snap || y._execEvent("scrollEnd"), y.wheelTimeout = void 0 }, 400), "deltaX" in e) 1 === e.deltaMode ? (h = -e.deltaX * this.options.mouseWheelSpeed, a = -e.deltaY * this.options.mouseWheelSpeed) : (h = -e.deltaX, a = -e.deltaY);
                    else if ("wheelDeltaX" in e) h = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed, a = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                    else if ("wheelDelta" in e) h = a = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
                    else { if (!("detail" in e)) return;
                        h = a = -e.detail / 3 * this.options.mouseWheelSpeed } if (h *= this.options.invertWheelDirection, a *= this.options.invertWheelDirection, this.hasVerticalScroll || (h = a, a = 0), this.options.snap) return g = this.currentPage.pageX, v = this.currentPage.pageY, h > 0 ? g-- : 0 > h && g++, a > 0 ? v-- : 0 > a && v++, void this.goToPage(g, v);
                    g = this.x + c.round(this.hasHorizontalScroll ? h : 0), v = this.y + c.round(this.hasVerticalScroll ? a : 0), this.directionX = h > 0 ? -1 : 0 > h ? 1 : 0, this.directionY = a > 0 ? -1 : 0 > a ? 1 : 0, g > 0 ? g = 0 : g < this.maxScrollX && (g = this.maxScrollX), v > 0 ? v = 0 : v < this.maxScrollY && (v = this.maxScrollY), this.scrollTo(g, v, 0) } }, _initSnap: function() { this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function() { var l, n, h, a, g, v, i = 0,
                        m = 0,
                        x = 0,
                        y = this.options.snapStepX || this.wrapperWidth,
                        S = this.options.snapStepY || this.wrapperHeight; if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) { if (this.options.snap === !0)
                            for (h = c.round(y / 2), a = c.round(S / 2); x > -this.scrollerWidth;) { for (this.pages[i] = [], l = 0, g = 0; g > -this.scrollerHeight;) this.pages[i][l] = { x: c.max(x, this.maxScrollX), y: c.max(g, this.maxScrollY), width: y, height: S, cx: x - h, cy: g - a }, g -= S, l++;
                                x -= y, i++ } else
                                for (v = this.options.snap, l = v.length, n = -1; l > i; i++)(0 === i || v[i].offsetLeft <= v[i - 1].offsetLeft) && (m = 0, n++), this.pages[m] || (this.pages[m] = []), x = c.max(-v[i].offsetLeft, this.maxScrollX), g = c.max(-v[i].offsetTop, this.maxScrollY), h = x - c.round(v[i].offsetWidth / 2), a = g - c.round(v[i].offsetHeight / 2), this.pages[m][n] = { x: x, y: g, width: v[i].offsetWidth, height: v[i].offsetHeight, cx: h, cy: a }, x > this.maxScrollX && m++;
                        this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = c.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = c.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold)) } }), this.on("flick", function() { var h = this.options.snapSpeed || c.max(c.max(c.min(c.abs(this.x - this.startX), 1e3), c.min(c.abs(this.y - this.startY), 1e3)), 300);
                    this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, h) }) }, _nearestSnap: function(x, h) { if (!this.pages.length) return { x: 0, y: 0, pageX: 0, pageY: 0 }; var i = 0,
                    l = this.pages.length,
                    m = 0; if (c.abs(x - this.absStartX) < this.snapThresholdX && c.abs(h - this.absStartY) < this.snapThresholdY) return this.currentPage; for (x > 0 ? x = 0 : x < this.maxScrollX && (x = this.maxScrollX), h > 0 ? h = 0 : h < this.maxScrollY && (h = this.maxScrollY); l > i; i++)
                    if (x >= this.pages[i][0].cx) { x = this.pages[i][0].x; break }
                for (l = this.pages[i].length; l > m; m++)
                    if (h >= this.pages[0][m].cy) { h = this.pages[0][m].y; break }
                return i == this.currentPage.pageX && (i += this.directionX, 0 > i ? i = 0 : i >= this.pages.length && (i = this.pages.length - 1), x = this.pages[i][0].x), m == this.currentPage.pageY && (m += this.directionY, 0 > m ? m = 0 : m >= this.pages[0].length && (m = this.pages[0].length - 1), h = this.pages[0][m].y), { x: x, y: h, pageX: i, pageY: m } }, goToPage: function(x, h, a, g) { g = g || this.options.bounceEasing, x >= this.pages.length ? x = this.pages.length - 1 : 0 > x && (x = 0), h >= this.pages[x].length ? h = this.pages[x].length - 1 : 0 > h && (h = 0); var v = this.pages[x][h].x,
                    y = this.pages[x][h].y;
                a = void 0 === a ? this.options.snapSpeed || c.max(c.max(c.min(c.abs(v - this.x), 1e3), c.min(c.abs(y - this.y), 1e3)), 300) : a, this.currentPage = { x: v, y: y, pageX: x, pageY: h }, this.scrollTo(v, y, a, g) }, next: function(h, a) { var x = this.currentPage.pageX,
                    c = this.currentPage.pageY;
                x++, x >= this.pages.length && this.hasVerticalScroll && (x = 0, c++), this.goToPage(x, c, h, a) }, prev: function(h, a) { var x = this.currentPage.pageX,
                    c = this.currentPage.pageY;
                x--, 0 > x && this.hasVerticalScroll && (x = 0, c--), this.goToPage(x, c, h, a) }, _initKeys: function() { var i, a = { pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40 }; if ("object" == typeof this.options.keyBindings)
                    for (i in this.options.keyBindings) "string" == typeof this.options.keyBindings[i] && (this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0));
                else this.options.keyBindings = {}; for (i in a) this.options.keyBindings[i] = this.options.keyBindings[i] || a[i];
                T.addEvent(h, "keydown", this), this.on("destroy", function() { T.removeEvent(h, "keydown", this) }) }, _key: function(e) { if (this.enabled) { var h, a = this.options.snap,
                        g = a ? this.currentPage.pageX : this.x,
                        v = a ? this.currentPage.pageY : this.y,
                        y = T.getTime(),
                        S = this.keyTime || 0,
                        b = .25; switch (this.options.useTransition && this.isInTransition && (h = this.getComputedPosition(), this._translate(c.round(h.x), c.round(h.y)), this.isInTransition = !1), this.keyAcceleration = 200 > y - S ? c.min(this.keyAcceleration + b, 50) : 0, e.keyCode) {
                        case this.options.keyBindings.pageUp:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ? g += a ? 1 : this.wrapperWidth : v += a ? 1 : this.wrapperHeight; break;
                        case this.options.keyBindings.pageDown:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ? g -= a ? 1 : this.wrapperWidth : v -= a ? 1 : this.wrapperHeight; break;
                        case this.options.keyBindings.end:
                            g = a ? this.pages.length - 1 : this.maxScrollX, v = a ? this.pages[0].length - 1 : this.maxScrollY; break;
                        case this.options.keyBindings.home:
                            g = 0, v = 0; break;
                        case this.options.keyBindings.left:
                            g += a ? -1 : 5 + this.keyAcceleration >> 0; break;
                        case this.options.keyBindings.up:
                            v += a ? 1 : 5 + this.keyAcceleration >> 0; break;
                        case this.options.keyBindings.right:
                            g -= a ? -1 : 5 + this.keyAcceleration >> 0; break;
                        case this.options.keyBindings.down:
                            v -= a ? 1 : 5 + this.keyAcceleration >> 0; break;
                        default:
                            return } if (a) return void this.goToPage(g, v);
                    g > 0 ? (g = 0, this.keyAcceleration = 0) : g < this.maxScrollX && (g = this.maxScrollX, this.keyAcceleration = 0), v > 0 ? (v = 0, this.keyAcceleration = 0) : v < this.maxScrollY && (v = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(g, v, 0), this.keyTime = y } }, _animate: function(h, a, c, g) {
                function v() { var X, Y, k, _ = T.getTime(); return _ >= P ? (y.isAnimating = !1, y._translate(h, a), void(y.resetPosition(y.options.bounceTime) || y._execEvent("scrollEnd"))) : (_ = (_ - E) / c, k = g(_), X = (h - b) * k + b, Y = (a - w) * k + w, y._translate(X, Y), void(y.isAnimating && S(v))) } var y = this,
                    b = this.x,
                    w = this.y,
                    E = T.getTime(),
                    P = E + c;
                this.isAnimating = !0, v() }, handleEvent: function(e) { switch (e.type) {
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                    case "mousedown":
                        this._start(e); break;
                    case "touchmove":
                    case "pointermove":
                    case "MSPointerMove":
                    case "mousemove":
                        this._move(e); break;
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseup":
                    case "touchcancel":
                    case "pointercancel":
                    case "MSPointerCancel":
                    case "mousecancel":
                        this._end(e); break;
                    case "orientationchange":
                    case "resize":
                        this._resize(); break;
                    case "transitionend":
                    case "webkitTransitionEnd":
                    case "oTransitionEnd":
                    case "MSTransitionEnd":
                        this._transitionEnd(e); break;
                    case "wheel":
                    case "DOMMouseScroll":
                    case "mousewheel":
                        this._wheel(e); break;
                    case "keydown":
                        this._key(e); break;
                    case "click":
                        this.enabled && !e._constructed && (e.preventDefault(), e.stopPropagation()) } } }, y.prototype = {
            handleEvent: function(e) { switch (e.type) {
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                    case "mousedown":
                        this._start(e); break;
                    case "touchmove":
                    case "pointermove":
                    case "MSPointerMove":
                    case "mousemove":
                        this._move(e); break;
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseup":
                    case "touchcancel":
                    case "pointercancel":
                    case "MSPointerCancel":
                    case "mousecancel":
                        this._end(e) } },
            destroy: function() { this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null), this.options.interactive && (T.removeEvent(this.indicator, "touchstart", this), T.removeEvent(this.indicator, T.prefixPointerEvent("pointerdown"), this), T.removeEvent(this.indicator, "mousedown", this), T.removeEvent(h, "touchmove", this), T.removeEvent(h, T.prefixPointerEvent("pointermove"), this), T.removeEvent(h, "mousemove", this), T.removeEvent(h, "touchend", this), T.removeEvent(h, T.prefixPointerEvent("pointerup"), this), T.removeEvent(h, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper) },
            _start: function(e) { var a = e.touches ? e.touches[0] : e;
                e.preventDefault(), e.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = a.pageX, this.lastPointY = a.pageY, this.startTime = T.getTime(), this.options.disableTouch || T.addEvent(h, "touchmove", this), this.options.disablePointer || T.addEvent(h, T.prefixPointerEvent("pointermove"), this), this.options.disableMouse || T.addEvent(h, "mousemove", this), this.scroller._execEvent("beforeScrollStart") },
            _move: function(e) {
                { var h, a, c, g, v = e.touches ? e.touches[0] : e;
                    T.getTime() }
                this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, h = v.pageX - this.lastPointX, this.lastPointX = v.pageX, a = v.pageY - this.lastPointY, this.lastPointY = v.pageY, c = this.x + h, g = this.y + a, this._pos(c, g), e.preventDefault(), e.stopPropagation() },
            _end: function(e) { if (this.initiated) { if (this.initiated = !1, e.preventDefault(), e.stopPropagation(), T.removeEvent(h, "touchmove", this), T.removeEvent(h, T.prefixPointerEvent("pointermove"), this), T.removeEvent(h, "mousemove", this), this.scroller.options.snap) { var a = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                            g = this.options.snapSpeed || c.max(c.max(c.min(c.abs(this.scroller.x - a.x), 1e3), c.min(c.abs(this.scroller.y - a.y), 1e3)), 300);
                        (this.scroller.x != a.x || this.scroller.y != a.y) && (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = a, this.scroller.scrollTo(a.x, a.y, g, this.scroller.options.bounceEasing)) }
                    this.moved && this.scroller._execEvent("scrollEnd") } },
            transitionTime: function(h) { h = h || 0; var a = T.style.transitionDuration; if (this.indicatorStyle[a] = h + "ms", !h && T.isBadAndroid) { this.indicatorStyle[a] = "0.0001ms"; var c = this;
                    S(function() { "0.0001ms" === c.indicatorStyle[a] && (c.indicatorStyle[a] = "0s") }) } },
            transitionTimingFunction: function(h) { this.indicatorStyle[T.style.transitionTimingFunction] = h },
            refresh: function() { this.transitionTime(), this.indicatorStyle.display = this.options.listenX && !this.options.listenY ? this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.scroller.hasVerticalScroll ? "block" : "none" : this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (T.addClass(this.wrapper, "iScrollBothScrollbars"), T.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (T.removeClass(this.wrapper, "iScrollBothScrollbars"), T.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
                this.wrapper.offsetHeight;
                this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = c.max(c.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = c.max(c.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition() },
            updatePosition: function() {
                var x = this.options.listenX && c.round(this.sizeRatioX * this.scroller.x) || 0,
                    h = this.options.listenY && c.round(this.sizeRatioY * this.scroller.y) || 0;
                this.options.ignoreBoundaries || (x < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = c.max(this.indicatorWidth + x, 8), this.indicatorStyle.width = this.width + "px"), x = this.minBoundaryX) : x > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = c.max(this.indicatorWidth - (x - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", x = this.maxPosX + this.indicatorWidth - this.width) : x = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), h < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = c.max(this.indicatorHeight + 3 * h, 8), this.indicatorStyle.height = this.height + "px"), h = this.minBoundaryY) : h > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = c.max(this.indicatorHeight - 3 * (h - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", h = this.maxPosY + this.indicatorHeight - this.height) : h = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = x, this.y = h, this.scroller.options.useTransform ? this.indicatorStyle[T.style.transform] = "translate(" + x + "px," + h + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = x + "px", this.indicatorStyle.top = h + "px")
            },
            _pos: function(x, h) { 0 > x ? x = 0 : x > this.maxPosX && (x = this.maxPosX), 0 > h ? h = 0 : h > this.maxPosY && (h = this.maxPosY), x = this.options.listenX ? c.round(x / this.sizeRatioX) : this.scroller.x, h = this.options.listenY ? c.round(h / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(x, h) },
            fade: function(h, a) { if (!a || this.visible) { clearTimeout(this.fadeTimeout), this.fadeTimeout = null; var c = h ? 250 : 500,
                        g = h ? 0 : 300;
                    h = h ? "1" : "0", this.wrapperStyle[T.style.transitionDuration] = c + "ms", this.fadeTimeout = setTimeout(function(h) { this.wrapperStyle.opacity = h, this.visible = +h }.bind(this, h), g) } }
        }, g.utils = T, "undefined" != typeof module && module.exports ? module.exports = g : "function" == typeof define && define.amd ? define(function() { return g }) : h.IScroll = g
    }(window, document, Math)
});
define("widget/CommonRuleWidget/CommonRuleWidget", function(require, exports, module) { module.exports = { init: function() { var c;
            $(".rule").on("click", function() { $(".rule-modal").show(), $("#db-content").addClass("filter"); var a = require("modules/js/iscroll/iscroll");
                c = new a(".scroll-box", { mouseWheel: !0, scrollbars: !0 }) }), $(".rule-modal .close").on("click", function() { $(".rule-modal").hide(), $("#db-content").removeClass("filter"), c && c.destroy() }), $(".probability .nav").on("click", function() { $(".probability").toggleClass("active"), c.refresh(), $(".probability").hasClass("active") ? window.DB && window.DB.exposure && window.DB.exposure.singleExp(embedData.st_info_rule_more_click) : window.DB && window.DB.exposure && window.DB.exposure.singleExp(embedData.st_info_rule_less_click) }) }, setRuleContent: function(c) { $(".description-scroller").html(c) } } });
define("widget/AppleAnnounce/AppleAnnounce", function(require, exports, module) { module.exports = { init: function(a) { var c = $("<p>", { "class": "apple", html: "*濂栧搧涓庢椿鍔ㄥ拰璁惧鐢熶骇鍟咥pple Inc.鍏徃鏃犲叧" });
            a && a.fixed && 1 == a.fixed && c.addClass("fixed"); var h = require("widget/CommonTools/CommonTools");
            h.platform.isiOS() || c.hide(); var A = a && a.container ? a.container : $("#db-content");
            A.append(c); var g = A.height(),
                v = $(window).height();
            v > g && c.addClass("fixed") } } });

function a() { c.pageInitData(function(a) { $("#db-content").show(), document.title = a.data.acativityName; var c = "";
        $.each(a.data.listPrize, function(i, a) { c += '<div class="prize" > ', c += '<div class="prize-dialog">', c += "	<p>" + a.activityPrizeTitle + "</p>", c += '	<img src="' + a.activityPrizeImg + '" alt="">', c += "</div>", c += "</div>" }), $("#circle-box").html(c), C.leftTimes = a.data.freeLimitCount, C.refreshLeftText(C.leftTimes); var h = require("widget/CommonRuleWidget/CommonRuleWidget");
        h.setRuleContent(a.data.activityRule), g.returnIntercept(a.data.returnUrl), g.showRedPacket(a.data.showPacket), require.loadCss({ url: a.data.skinPath }) }, function() { var a = require("widget/CommonMsgModal/CommonMsgModal");
        a.show(a.createErrorObject("systemError", { message: "璇锋眰瓒呮椂" })) }) }
require("zepto/rotate");
var g = require("widget/CommonTools/CommonTools"),
    c = require("widget/NetDataCenter/NetDataCenter"),
    C = { thanksDeg: null, speed: 1300, timeout: !1, running: !1, leftTimes: 0, againOrderId: null, guide: null, lastResult: null, isShowBuoy: !1, reset: function() { C.thanksDeg = 300, $("#circle").rotate(C.thanksDeg), C.toggleLight(), $("#circle").rotate({ angle: C.thanksDeg, animateTo: 3600, duration: 3e6, easing: function(a, e, i, g, r) { return -g * ((e = e / r - 1) * e * e * e - 1) + i } }) }, toggleLight: function() { window.lightTimer = setTimeout(function() { $(".radius-bg").toggleClass("toggle"), C.toggleLight() }, 500) }, rotateStart: function() { this.timeout = !1, this.running = !0, $("#circle").stopRotate(), $("#circle").rotate({ angle: C.getRotateAngle(), animateTo: 7200, duration: 20 * C.speed, easing: function(a, e) { return e }, callback: function() { C.timeout = !0, window.xhr && window.xhr.abort(), t.showModal("networkError") } }) }, getRotateAngle: function() { return $("#circle").getRotateAngle() }, rotateError: function() { $("#circle").stopRotate(), $("#circle").rotate({ angle: C.getRotateAngle(), animateTo: C.thanksDeg + 1800, duration: 1 * C.speed, easing: function(t, e, i, a, r) { return -a * ((e = e / r - 1) * e * e * e - 1) + i }, callback: function() { C.reInit(); var a = require("widget/CommonMsgModal/CommonMsgModal");
                    a.show(a.createErrorObject("systemError", { message: "璇锋眰瓒呮椂" })) } }) }, start: function() {!C.running && C.leftTimes > 0 && (this.rotateStart(), this.getOrder()), !C.running && C.leftTimes <= 0 && c.randomActivity() }, getOrder: function() { c.prizeData({ success: function(a) { C.leftTimes = a.data.leftCount, C.refreshLeftText(C.leftTimes), $("#creativeImg").attr("value", a.data.creativeImg), $("#creativeContent").attr("value", a.data.creativeName), $("#jnmpUrl").attr("value", a.data.jnmpUrl), $("#buttonCopy").attr("value", a.data.buttonCopy), $("#circledataresult").attr("value", a.data.circleData), $("#circledata").attr("value", $("#circledataresult").attr("value")), C.rotateFn(a) }, error: function() { C.rotateError() } }) }, refreshLeftText: function(a) { $(".needCredits p").html(g.getActivityStatusText(a)) }, rotateFn: function(a) { setTimeout(function() { $("#circle").stopRotate(), $("#circle").rotate({ angle: C.getRotateAngle(), animateTo: 1260, duration: 1 * C.speed, easing: function(t, e, i, a, r) { return -a * ((e = e / r - 1) * e * e * e - 1) + i }, callback: function() { var g = require("widget/PrizeModal/PrizeModal"),
                            c = require("widget/PrizeModal/CouponModal-Light/CouponModal-Light.es6");
                        g.showModal(c, a.data, { close: function() { C.reInit() }, use: function() { $(".J_modalShowPrize").remove(), C.reInit() }, again: function() { $(".J_modalShowPrize").remove(), C.reInit(), setTimeout(function() { t.start() }, 500) } }) } }) }, 500) }, reInit: function() { document.ontouchmove = null, C.running = !1, clearTimeout(window.lightTimer), $("#circle").rotate(this.thanksDeg), this.reset() } };
$(document).ready(function() { var g = !1;
    window.addEventListener("pageshow", function() { g && window.location.reload() }), window.addEventListener("pagehide", function() { g = !0 }), $(".record").click(function() { location.href = "../MyPrizeList/MyPrizeList.html" }), C.reset(), a(), $("#start").click(function() { C.start() }) });
var h = require("widget/AppleAnnounce/AppleAnnounce");
h.init();
define("widget/NiceGuide/NiceGuide", function(require, exports, module) { module.exports = { show: function() { $(".DB_guide").show() }, hide: function() { $(".DB_guide").hide() } } });