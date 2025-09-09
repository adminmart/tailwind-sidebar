import * as u from "react";
import mt, { forwardRef as Un, createElement as It, useState as Eo, useLayoutEffect as So, useContext as Ro } from "react";
import * as Yn from "react-dom";
import ko from "react-dom";
var qe = { exports: {} }, We = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dn;
function Ao() {
  if (dn) return We;
  dn = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, o, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      s = {};
      for (var a in o)
        a !== "key" && (s[a] = o[a]);
    } else s = o;
    return o = s.ref, {
      $$typeof: e,
      type: r,
      key: i,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return We.Fragment = t, We.jsx = n, We.jsxs = n, We;
}
var Be = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fn;
function Po() {
  return fn || (fn = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(y) {
      if (y == null) return null;
      if (typeof y == "function")
        return y.$$typeof === z ? null : y.displayName || y.name || null;
      if (typeof y == "string") return y;
      switch (y) {
        case p:
          return "Fragment";
        case x:
          return "Profiler";
        case b:
          return "StrictMode";
        case k:
          return "Suspense";
        case T:
          return "SuspenseList";
        case j:
          return "Activity";
      }
      if (typeof y == "object")
        switch (typeof y.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), y.$$typeof) {
          case v:
            return "Portal";
          case E:
            return (y.displayName || "Context") + ".Provider";
          case w:
            return (y._context.displayName || "Context") + ".Consumer";
          case S:
            var N = y.render;
            return y = y.displayName, y || (y = N.displayName || N.name || "", y = y !== "" ? "ForwardRef(" + y + ")" : "ForwardRef"), y;
          case O:
            return N = y.displayName || null, N !== null ? N : e(y.type) || "Memo";
          case R:
            N = y._payload, y = y._init;
            try {
              return e(y(N));
            } catch {
            }
        }
      return null;
    }
    function t(y) {
      return "" + y;
    }
    function n(y) {
      try {
        t(y);
        var N = !1;
      } catch {
        N = !0;
      }
      if (N) {
        N = console;
        var F = N.error, M = typeof Symbol == "function" && Symbol.toStringTag && y[Symbol.toStringTag] || y.constructor.name || "Object";
        return F.call(
          N,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          M
        ), t(y);
      }
    }
    function r(y) {
      if (y === p) return "<>";
      if (typeof y == "object" && y !== null && y.$$typeof === R)
        return "<...>";
      try {
        var N = e(y);
        return N ? "<" + N + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var y = G.A;
      return y === null ? null : y.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(y) {
      if (V.call(y, "key")) {
        var N = Object.getOwnPropertyDescriptor(y, "key").get;
        if (N && N.isReactWarning) return !1;
      }
      return y.key !== void 0;
    }
    function a(y, N) {
      function F() {
        H || (H = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          N
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(y, "key", {
        get: F,
        configurable: !0
      });
    }
    function l() {
      var y = e(this.type);
      return D[y] || (D[y] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), y = this.props.ref, y !== void 0 ? y : null;
    }
    function c(y, N, F, M, B, q, ge, $) {
      return F = q.ref, y = {
        $$typeof: g,
        type: y,
        key: N,
        props: q,
        _owner: B
      }, (F !== void 0 ? F : null) !== null ? Object.defineProperty(y, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(y, "ref", { enumerable: !1, value: null }), y._store = {}, Object.defineProperty(y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(y, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(y, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ge
      }), Object.defineProperty(y, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    }
    function d(y, N, F, M, B, q, ge, $) {
      var Y = N.children;
      if (Y !== void 0)
        if (M)
          if (W(Y)) {
            for (M = 0; M < Y.length; M++)
              f(Y[M]);
            Object.freeze && Object.freeze(Y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(Y);
      if (V.call(N, "key")) {
        Y = e(y);
        var Q = Object.keys(N).filter(function(we) {
          return we !== "key";
        });
        M = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", U[Y + M] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          M,
          Y,
          Q,
          Y
        ), U[Y + M] = !0);
      }
      if (Y = null, F !== void 0 && (n(F), Y = "" + F), i(N) && (n(N.key), Y = "" + N.key), "key" in N) {
        F = {};
        for (var ie in N)
          ie !== "key" && (F[ie] = N[ie]);
      } else F = N;
      return Y && a(
        F,
        typeof y == "function" ? y.displayName || y.name || "Unknown" : y
      ), c(
        y,
        Y,
        q,
        B,
        o(),
        F,
        ge,
        $
      );
    }
    function f(y) {
      typeof y == "object" && y !== null && y.$$typeof === g && y._store && (y._store.validated = 1);
    }
    var m = mt, g = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), E = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), j = Symbol.for("react.activity"), z = Symbol.for("react.client.reference"), G = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, W = Array.isArray, I = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(y) {
        return y();
      }
    };
    var H, D = {}, L = m.react_stack_bottom_frame.bind(
      m,
      s
    )(), C = I(r(s)), U = {};
    Be.Fragment = p, Be.jsx = function(y, N, F, M, B) {
      var q = 1e4 > G.recentlyCreatedOwnerStacks++;
      return d(
        y,
        N,
        F,
        !1,
        M,
        B,
        q ? Error("react-stack-top-frame") : L,
        q ? I(r(y)) : C
      );
    }, Be.jsxs = function(y, N, F, M, B) {
      var q = 1e4 > G.recentlyCreatedOwnerStacks++;
      return d(
        y,
        N,
        F,
        !0,
        M,
        B,
        q ? Error("react-stack-top-frame") : L,
        q ? I(r(y)) : C
      );
    };
  })()), Be;
}
var pn;
function Oo() {
  return pn || (pn = 1, process.env.NODE_ENV === "production" ? qe.exports = Ao() : qe.exports = Po()), qe.exports;
}
var h = Oo();
function mn(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Xn(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = mn(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : mn(e[o], null);
        }
      };
  };
}
function ne(...e) {
  return u.useCallback(Xn(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
  const t = /* @__PURE__ */ To(e), n = u.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = u.Children.toArray(s), l = a.find(_o);
    if (l) {
      const c = l.props.children, d = a.map((f) => f === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : f);
      return /* @__PURE__ */ h.jsx(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ h.jsx(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Kn = /* @__PURE__ */ Yt("Slot");
// @__NO_SIDE_EFFECTS__
function To(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (u.isValidElement(o)) {
      const i = jo(o), a = Mo(s, o.props);
      return o.type !== u.Fragment && (a.ref = r ? Xn(r, i) : i), u.cloneElement(o, a);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var qn = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function No(e) {
  const t = ({ children: n }) => /* @__PURE__ */ h.jsx(h.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = qn, t;
}
function _o(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === qn;
}
function Mo(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      const l = s(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function jo(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Zn(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Zn(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function He() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Zn(e)) && (r && (r += " "), r += t);
  return r;
}
const hn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, gn = He, Do = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return gn(e, n?.class, n?.className);
  const { variants: o, defaultVariants: s } = t, i = Object.keys(o).map((c) => {
    const d = n?.[c], f = s?.[c];
    if (d === null) return null;
    const m = hn(d) || hn(f);
    return o[c][m];
  }), a = n && Object.entries(n).reduce((c, d) => {
    let [f, m] = d;
    return m === void 0 || (c[f] = m), c;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, d) => {
    let { class: f, className: m, ...g } = d;
    return Object.entries(g).every((v) => {
      let [p, b] = v;
      return Array.isArray(b) ? b.includes({
        ...s,
        ...a
      }[p]) : {
        ...s,
        ...a
      }[p] === b;
    }) ? [
      ...c,
      f,
      m
    ] : c;
  }, []);
  return gn(e, i, l, n?.class, n?.className);
};
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lo = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Io = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), vn = (e) => {
  const t = Io(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Jn = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), Fo = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = Un(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: s,
    iconNode: i,
    ...a
  }, l) => It(
    "svg",
    {
      ref: l,
      ...$o,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Jn("lucide", o),
      ...!s && !Fo(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...i.map(([c, d]) => It(c, d)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const De = (e, t) => {
  const n = Un(
    ({ className: r, ...o }, s) => It(zo, {
      ref: s,
      iconNode: t,
      className: Jn(
        `lucide-${Lo(vn(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = vn(e), n;
};
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wo = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Bo = De("chevron-down", Wo);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vo = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Ho = De("chevron-right", Vo);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Go = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
], Qn = De("circle-dot", Go);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uo = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
], Yo = De("log-out", Uo);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xo = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
], Ko = De("panel-left", Xo);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qo = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Zo = De("x", qo), Rt = 768;
function Jo() {
  const [e, t] = u.useState(void 0);
  return u.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${Rt - 1}px)`), r = () => {
      t(window.innerWidth < Rt);
    };
    return n.addEventListener("change", r), t(window.innerWidth < Rt), () => n.removeEventListener("change", r);
  }, []), !!e;
}
const Xt = "-", Qo = (e) => {
  const t = ts(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(Xt);
      return a[0] === "" && a.length !== 1 && a.shift(), er(a, t) || es(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const l = n[i] || [];
      return a && r[i] ? [...l, ...r[i]] : l;
    }
  };
}, er = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? er(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(Xt);
  return t.validators.find(({
    validator: i
  }) => i(s))?.classGroupId;
}, bn = /^\[(.+)\]$/, es = (e) => {
  if (bn.test(e)) {
    const t = bn.exec(e)[1], n = t?.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, ts = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    Ft(n[o], r, o, t);
  return r;
}, Ft = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : xn(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (ns(o)) {
        Ft(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      Ft(i, xn(t, s), n, r);
    });
  });
}, xn = (e, t) => {
  let n = e;
  return t.split(Xt).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, ns = (e) => e.isThemeGetter, rs = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (s, i) => {
    n.set(s, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let i = n.get(s);
      if (i !== void 0)
        return i;
      if ((i = r.get(s)) !== void 0)
        return o(s, i), i;
    },
    set(s, i) {
      n.has(s) ? n.set(s, i) : o(s, i);
    }
  };
}, $t = "!", zt = ":", os = zt.length, ss = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const s = [];
    let i = 0, a = 0, l = 0, c;
    for (let v = 0; v < o.length; v++) {
      let p = o[v];
      if (i === 0 && a === 0) {
        if (p === zt) {
          s.push(o.slice(l, v)), l = v + os;
          continue;
        }
        if (p === "/") {
          c = v;
          continue;
        }
      }
      p === "[" ? i++ : p === "]" ? i-- : p === "(" ? a++ : p === ")" && a--;
    }
    const d = s.length === 0 ? o : o.substring(l), f = is(d), m = f !== d, g = c && c > l ? c - l : void 0;
    return {
      modifiers: s,
      hasImportantModifier: m,
      baseClassName: f,
      maybePostfixModifierPosition: g
    };
  };
  if (t) {
    const o = t + zt, s = r;
    r = (i) => i.startsWith(o) ? s(i.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: i,
      maybePostfixModifierPosition: void 0
    };
  }
  if (n) {
    const o = r;
    r = (s) => n({
      className: s,
      parseClassName: o
    });
  }
  return r;
}, is = (e) => e.endsWith($t) ? e.substring(0, e.length - 1) : e.startsWith($t) ? e.substring(1) : e, as = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const o = [];
    let s = [];
    return r.forEach((i) => {
      i[0] === "[" || t[i] ? (o.push(...s.sort(), i), s = []) : s.push(i);
    }), o.push(...s.sort()), o;
  };
}, ls = (e) => ({
  cache: rs(e.cacheSize),
  parseClassName: ss(e),
  sortModifiers: as(e),
  ...Qo(e)
}), cs = /\s+/, us = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, i = [], a = e.trim().split(cs);
  let l = "";
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const d = a[c], {
      isExternal: f,
      modifiers: m,
      hasImportantModifier: g,
      baseClassName: v,
      maybePostfixModifierPosition: p
    } = n(d);
    if (f) {
      l = d + (l.length > 0 ? " " + l : l);
      continue;
    }
    let b = !!p, x = r(b ? v.substring(0, p) : v);
    if (!x) {
      if (!b) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (x = r(v), !x) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      b = !1;
    }
    const w = s(m).join(":"), E = g ? w + $t : w, S = E + x;
    if (i.includes(S))
      continue;
    i.push(S);
    const k = o(x, b);
    for (let T = 0; T < k.length; ++T) {
      const O = k[T];
      i.push(E + O);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function ds() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = tr(t)) && (r && (r += " "), r += n);
  return r;
}
const tr = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = tr(e[r])) && (n && (n += " "), n += t);
  return n;
};
function fs(e, ...t) {
  let n, r, o, s = i;
  function i(l) {
    const c = t.reduce((d, f) => f(d), e());
    return n = ls(c), r = n.cache.get, o = n.cache.set, s = a, a(l);
  }
  function a(l) {
    const c = r(l);
    if (c)
      return c;
    const d = us(l, n);
    return o(l, d), d;
  }
  return function() {
    return s(ds.apply(null, arguments));
  };
}
const K = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, nr = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, rr = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ps = /^\d+\/\d+$/, ms = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, hs = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, gs = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, vs = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, bs = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ke = (e) => ps.test(e), _ = (e) => !!e && !Number.isNaN(Number(e)), ve = (e) => !!e && Number.isInteger(Number(e)), kt = (e) => e.endsWith("%") && _(e.slice(0, -1)), fe = (e) => ms.test(e), xs = () => !0, ys = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  hs.test(e) && !gs.test(e)
), or = () => !1, ws = (e) => vs.test(e), Cs = (e) => bs.test(e), Es = (e) => !A(e) && !P(e), Ss = (e) => Le(e, ar, or), A = (e) => nr.test(e), Ce = (e) => Le(e, lr, ys), At = (e) => Le(e, Os, _), yn = (e) => Le(e, sr, or), Rs = (e) => Le(e, ir, Cs), Ze = (e) => Le(e, cr, ws), P = (e) => rr.test(e), Ve = (e) => Ie(e, lr), ks = (e) => Ie(e, Ts), wn = (e) => Ie(e, sr), As = (e) => Ie(e, ar), Ps = (e) => Ie(e, ir), Je = (e) => Ie(e, cr, !0), Le = (e, t, n) => {
  const r = nr.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Ie = (e, t, n = !1) => {
  const r = rr.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, sr = (e) => e === "position" || e === "percentage", ir = (e) => e === "image" || e === "url", ar = (e) => e === "length" || e === "size" || e === "bg-size", lr = (e) => e === "length", Os = (e) => e === "number", Ts = (e) => e === "family-name", cr = (e) => e === "shadow", Ns = () => {
  const e = K("color"), t = K("font"), n = K("text"), r = K("font-weight"), o = K("tracking"), s = K("leading"), i = K("breakpoint"), a = K("container"), l = K("spacing"), c = K("radius"), d = K("shadow"), f = K("inset-shadow"), m = K("text-shadow"), g = K("drop-shadow"), v = K("blur"), p = K("perspective"), b = K("aspect"), x = K("ease"), w = K("animate"), E = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], k = () => [...S(), P, A], T = () => ["auto", "hidden", "clip", "visible", "scroll"], O = () => ["auto", "contain", "none"], R = () => [P, A, l], j = () => [ke, "full", "auto", ...R()], z = () => [ve, "none", "subgrid", P, A], G = () => ["auto", {
    span: ["full", ve, P, A]
  }, ve, P, A], V = () => [ve, "auto", P, A], W = () => ["auto", "min", "max", "fr", P, A], I = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], H = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], D = () => ["auto", ...R()], L = () => [ke, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...R()], C = () => [e, P, A], U = () => [...S(), wn, yn, {
    position: [P, A]
  }], y = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], N = () => ["auto", "cover", "contain", As, Ss, {
    size: [P, A]
  }], F = () => [kt, Ve, Ce], M = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    P,
    A
  ], B = () => ["", _, Ve, Ce], q = () => ["solid", "dashed", "dotted", "double"], ge = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], $ = () => [_, kt, wn, yn], Y = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    P,
    A
  ], Q = () => ["none", _, P, A], ie = () => ["none", _, P, A], we = () => [_, P, A], Re = () => [ke, "full", ...R()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [fe],
      breakpoint: [fe],
      color: [xs],
      container: [fe],
      "drop-shadow": [fe],
      ease: ["in", "out", "in-out"],
      font: [Es],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [fe],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [fe],
      shadow: [fe],
      spacing: ["px", _],
      text: [fe],
      "text-shadow": [fe],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", ke, A, P, b]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [_, A, P, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": E()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": E()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: k()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: T()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": T()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": T()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: O()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": O()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": O()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: j()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": j()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": j()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: j()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: j()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: j()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: j()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: j()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: j()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [ve, "auto", P, A]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ke, "full", "auto", a, ...R()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [_, ke, "auto", "initial", "none", A]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", _, P, A]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", _, P, A]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ve, "first", "last", "none", P, A]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": z()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: G()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": V()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": V()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": z()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: G()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": V()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": V()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": W()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": W()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: R()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": R()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": R()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...I(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...H(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...H()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...I()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...H(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...H(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": I()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...H(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...H()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: R()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: R()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: R()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: R()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: R()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: R()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: R()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: R()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: R()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: D()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: D()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: D()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: D()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: D()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: D()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: D()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: D()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: D()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": R()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": R()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: L()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...L()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          a,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...L()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          a,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...L()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...L()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...L()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...L()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Ve, Ce]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, P, At]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", kt, A]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ks, A, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, P, A]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [_, "none", P, At]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...R()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", P, A]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", P, A]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: C()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: C()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...q(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [_, "from-font", "auto", P, Ce]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: C()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [_, "auto", P, A]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: R()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", P, A]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", P, A]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: U()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: y()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: N()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, ve, P, A],
          radial: ["", P, A],
          conic: [ve, P, A]
        }, Ps, Rs]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: C()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: F()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: F()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: F()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: C()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: C()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: C()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: M()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": M()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": M()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": M()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": M()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": M()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": M()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": M()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": M()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": M()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": M()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": M()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": M()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": M()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": M()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: B()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": B()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": B()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": B()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": B()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": B()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": B()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": B()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": B()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": B()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": B()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...q(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...q(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: C()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": C()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": C()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": C()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": C()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": C()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": C()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": C()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": C()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: C()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...q(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [_, P, A]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", _, Ve, Ce]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: C()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          d,
          Je,
          Ze
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: C()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, Je, Ze]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": C()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: B()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: C()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [_, Ce]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": C()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": B()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": C()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", m, Je, Ze]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": C()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [_, P, A]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ge(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ge()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [_]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": $()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": $()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": C()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": C()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": $()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": $()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": C()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": C()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": $()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": $()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": C()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": C()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": $()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": $()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": C()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": C()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": $()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": $()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": C()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": C()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": $()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": $()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": C()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": C()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": $()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": $()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": C()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": C()
      }],
      "mask-image-radial": [{
        "mask-radial": [P, A]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": $()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": $()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": C()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": C()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": S()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [_]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": $()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": $()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": C()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": C()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: U()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: y()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: N()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", P, A]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          P,
          A
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Y()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [_, P, A]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [_, P, A]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          g,
          Je,
          Ze
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": C()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", _, P, A]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [_, P, A]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", _, P, A]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [_, P, A]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", _, P, A]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          P,
          A
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Y()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [_, P, A]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [_, P, A]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", _, P, A]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [_, P, A]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", _, P, A]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [_, P, A]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [_, P, A]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", _, P, A]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": R()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": R()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": R()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", P, A]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [_, "initial", P, A]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", x, P, A]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [_, P, A]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", w, P, A]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [p, P, A]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": k()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Q()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Q()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Q()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Q()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ie()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ie()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ie()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ie()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: we()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": we()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": we()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [P, A, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: k()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Re()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Re()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Re()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Re()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: C()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: C()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", P, A]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": R()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": R()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": R()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": R()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": R()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": R()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": R()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": R()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": R()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": R()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": R()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": R()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": R()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": R()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": R()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": R()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": R()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": R()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", P, A]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...C()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [_, Ve, Ce, At]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...C()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, _s = /* @__PURE__ */ fs(Ns);
function X(...e) {
  return _s(He(e));
}
const Ms = Do(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function js({
  className: e,
  variant: t,
  size: n,
  asChild: r = !1,
  ...o
}) {
  const s = r ? Kn : "button";
  return /* @__PURE__ */ h.jsx(
    s,
    {
      "data-slot": "button",
      className: X(Ms({ variant: t, size: n, className: e })),
      ...o
    }
  );
}
var Ds = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Z = Ds.reduce((e, t) => {
  const n = /* @__PURE__ */ Yt(`Primitive.${t}`), r = u.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ h.jsx(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Ls(e, t) {
  e && Yn.flushSync(() => e.dispatchEvent(t));
}
function J(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
function Is(e, t) {
  const n = u.createContext(t), r = (s) => {
    const { children: i, ...a } = s, l = u.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ h.jsx(n.Provider, { value: l, children: i });
  };
  r.displayName = e + "Provider";
  function o(s) {
    const i = u.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function ht(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = u.createContext(i), l = n.length;
    n = [...n, i];
    const c = (f) => {
      const { scope: m, children: g, ...v } = f, p = m?.[e]?.[l] || a, b = u.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ h.jsx(p.Provider, { value: b, children: g });
    };
    c.displayName = s + "Provider";
    function d(f, m) {
      const g = m?.[e]?.[l] || a, v = u.useContext(g);
      if (v) return v;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [c, d];
  }
  const o = () => {
    const s = n.map((i) => u.createContext(i));
    return function(a) {
      const l = a?.[e] || s;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [r, Fs(o, ...t)];
}
function Fs(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = r.reduce((a, { useScope: l, scopeName: c }) => {
        const f = l(s)[`__scope${c}`];
        return { ...a, ...f };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var pe = globalThis?.document ? u.useLayoutEffect : () => {
}, $s = u[" useId ".trim().toString()] || (() => {
}), zs = 0;
function st(e) {
  const [t, n] = u.useState($s());
  return pe(() => {
    n((r) => r ?? String(zs++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var Ws = u[" useInsertionEffect ".trim().toString()] || pe;
function ur({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, i] = Bs({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o;
  {
    const d = u.useRef(e !== void 0);
    u.useEffect(() => {
      const f = d.current;
      f !== a && console.warn(
        `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = a;
    }, [a, r]);
  }
  const c = u.useCallback(
    (d) => {
      if (a) {
        const f = Vs(d) ? d(e) : d;
        f !== e && i.current?.(f);
      } else
        s(d);
    },
    [a, e, s, i]
  );
  return [l, c];
}
function Bs({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), o = u.useRef(n), s = u.useRef(t);
  return Ws(() => {
    s.current = t;
  }, [t]), u.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
function Vs(e) {
  return typeof e == "function";
}
function _e(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => t.current?.(...n), []);
}
function Hs(e, t = globalThis?.document) {
  const n = _e(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Gs = "DismissableLayer", Wt = "dismissableLayer.update", Us = "dismissableLayer.pointerDownOutside", Ys = "dismissableLayer.focusOutside", Cn, dr = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Kt = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...l
    } = e, c = u.useContext(dr), [d, f] = u.useState(null), m = d?.ownerDocument ?? globalThis?.document, [, g] = u.useState({}), v = ne(t, (O) => f(O)), p = Array.from(c.layers), [b] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), x = p.indexOf(b), w = d ? p.indexOf(d) : -1, E = c.layersWithOutsidePointerEventsDisabled.size > 0, S = w >= x, k = qs((O) => {
      const R = O.target, j = [...c.branches].some((z) => z.contains(R));
      !S || j || (o?.(O), i?.(O), O.defaultPrevented || a?.());
    }, m), T = Zs((O) => {
      const R = O.target;
      [...c.branches].some((z) => z.contains(R)) || (s?.(O), i?.(O), O.defaultPrevented || a?.());
    }, m);
    return Hs((O) => {
      w === c.layers.size - 1 && (r?.(O), !O.defaultPrevented && a && (O.preventDefault(), a()));
    }, m), u.useEffect(() => {
      if (d)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Cn = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), En(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Cn);
        };
    }, [d, m, n, c]), u.useEffect(() => () => {
      d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), En());
    }, [d, c]), u.useEffect(() => {
      const O = () => g({});
      return document.addEventListener(Wt, O), () => document.removeEventListener(Wt, O);
    }, []), /* @__PURE__ */ h.jsx(
      Z.div,
      {
        ...l,
        ref: v,
        style: {
          pointerEvents: E ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: J(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: J(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: J(
          e.onPointerDownCapture,
          k.onPointerDownCapture
        )
      }
    );
  }
);
Kt.displayName = Gs;
var Xs = "DismissableLayerBranch", Ks = u.forwardRef((e, t) => {
  const n = u.useContext(dr), r = u.useRef(null), o = ne(t, r);
  return u.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ h.jsx(Z.div, { ...e, ref: o });
});
Ks.displayName = Xs;
function qs(e, t = globalThis?.document) {
  const n = _e(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          fr(
            Us,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Zs(e, t = globalThis?.document) {
  const n = _e(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && fr(Ys, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function En() {
  const e = new CustomEvent(Wt);
  document.dispatchEvent(e);
}
function fr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ls(o, s) : o.dispatchEvent(s);
}
var Pt = "focusScope.autoFocusOnMount", Ot = "focusScope.autoFocusOnUnmount", Sn = { bubbles: !1, cancelable: !0 }, Js = "FocusScope", pr = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = u.useState(null), c = _e(o), d = _e(s), f = u.useRef(null), m = ne(t, (p) => l(p)), g = u.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  u.useEffect(() => {
    if (r) {
      let p = function(E) {
        if (g.paused || !a) return;
        const S = E.target;
        a.contains(S) ? f.current = S : be(f.current, { select: !0 });
      }, b = function(E) {
        if (g.paused || !a) return;
        const S = E.relatedTarget;
        S !== null && (a.contains(S) || be(f.current, { select: !0 }));
      }, x = function(E) {
        if (document.activeElement === document.body)
          for (const k of E)
            k.removedNodes.length > 0 && be(a);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", b);
      const w = new MutationObserver(x);
      return a && w.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", b), w.disconnect();
      };
    }
  }, [r, a, g.paused]), u.useEffect(() => {
    if (a) {
      kn.add(g);
      const p = document.activeElement;
      if (!a.contains(p)) {
        const x = new CustomEvent(Pt, Sn);
        a.addEventListener(Pt, c), a.dispatchEvent(x), x.defaultPrevented || (Qs(oi(mr(a)), { select: !0 }), document.activeElement === p && be(a));
      }
      return () => {
        a.removeEventListener(Pt, c), setTimeout(() => {
          const x = new CustomEvent(Ot, Sn);
          a.addEventListener(Ot, d), a.dispatchEvent(x), x.defaultPrevented || be(p ?? document.body, { select: !0 }), a.removeEventListener(Ot, d), kn.remove(g);
        }, 0);
      };
    }
  }, [a, c, d, g]);
  const v = u.useCallback(
    (p) => {
      if (!n && !r || g.paused) return;
      const b = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, x = document.activeElement;
      if (b && x) {
        const w = p.currentTarget, [E, S] = ei(w);
        E && S ? !p.shiftKey && x === S ? (p.preventDefault(), n && be(E, { select: !0 })) : p.shiftKey && x === E && (p.preventDefault(), n && be(S, { select: !0 })) : x === w && p.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ h.jsx(Z.div, { tabIndex: -1, ...i, ref: m, onKeyDown: v });
});
pr.displayName = Js;
function Qs(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (be(r, { select: t }), document.activeElement !== n) return;
}
function ei(e) {
  const t = mr(e), n = Rn(t, e), r = Rn(t.reverse(), e);
  return [n, r];
}
function mr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Rn(e, t) {
  for (const n of e)
    if (!ti(n, { upTo: t })) return n;
}
function ti(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function ni(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function be(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && ni(e) && t && e.select();
  }
}
var kn = ri();
function ri() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = An(e, t), e.unshift(t);
    },
    remove(t) {
      e = An(e, t), e[0]?.resume();
    }
  };
}
function An(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function oi(e) {
  return e.filter((t) => t.tagName !== "A");
}
var si = "Portal", hr = u.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, s] = u.useState(!1);
  pe(() => s(!0), []);
  const i = n || o && globalThis?.document?.body;
  return i ? ko.createPortal(/* @__PURE__ */ h.jsx(Z.div, { ...r, ref: t }), i) : null;
});
hr.displayName = si;
function ii(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var Fe = (e) => {
  const { present: t, children: n } = e, r = ai(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), s = ne(r.ref, li(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: s }) : null;
};
Fe.displayName = "Presence";
function ai(e) {
  const [t, n] = u.useState(), r = u.useRef(null), o = u.useRef(e), s = u.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = ii(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return u.useEffect(() => {
    const c = Qe(r.current);
    s.current = a === "mounted" ? c : "none";
  }, [a]), pe(() => {
    const c = r.current, d = o.current;
    if (d !== e) {
      const m = s.current, g = Qe(c);
      e ? l("MOUNT") : g === "none" || c?.display === "none" ? l("UNMOUNT") : l(d && m !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), pe(() => {
    if (t) {
      let c;
      const d = t.ownerDocument.defaultView ?? window, f = (g) => {
        const p = Qe(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && p && (l("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, m = (g) => {
        g.target === t && (s.current = Qe(r.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        d.clearTimeout(c), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: u.useCallback((c) => {
      r.current = c ? getComputedStyle(c) : null, n(c);
    }, [])
  };
}
function Qe(e) {
  return e?.animationName || "none";
}
function li(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Tt = 0;
function ci() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Pn()), document.body.insertAdjacentElement("beforeend", e[1] ?? Pn()), Tt++, () => {
      Tt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Tt--;
    };
  }, []);
}
function Pn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ae = function() {
  return ae = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, ae.apply(this, arguments);
};
function gr(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function ui(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var it = "right-scroll-bar-position", at = "width-before-scroll-bar", di = "with-scroll-bars-hidden", fi = "--removed-body-scroll-bar-size";
function Nt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function pi(e, t) {
  var n = Eo(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var mi = typeof window < "u" ? u.useLayoutEffect : u.useEffect, On = /* @__PURE__ */ new WeakMap();
function hi(e, t) {
  var n = pi(null, function(r) {
    return e.forEach(function(o) {
      return Nt(o, r);
    });
  });
  return mi(function() {
    var r = On.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || Nt(a, null);
      }), s.forEach(function(a) {
        o.has(a) || Nt(a, i);
      });
    }
    On.set(n, e);
  }, [e]), n;
}
function gi(e) {
  return e;
}
function vi(e, t) {
  t === void 0 && (t = gi);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var i = t(s, r);
      return n.push(i), function() {
        n = n.filter(function(a) {
          return a !== i;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(s);
      }
      n = {
        push: function(a) {
          return s(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      r = !0;
      var i = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(s), i = n;
      }
      var l = function() {
        var d = i;
        i = [], d.forEach(s);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(d) {
          i.push(d), c();
        },
        filter: function(d) {
          return i = i.filter(d), n;
        }
      };
    }
  };
  return o;
}
function bi(e) {
  e === void 0 && (e = {});
  var t = vi(null);
  return t.options = ae({ async: !0, ssr: !1 }, e), t;
}
var vr = function(e) {
  var t = e.sideCar, n = gr(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, ae({}, n));
};
vr.isSideCarExport = !0;
function xi(e, t) {
  return e.useMedium(t), vr;
}
var br = bi(), _t = function() {
}, gt = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: _t,
    onWheelCapture: _t,
    onTouchMoveCapture: _t
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, d = e.enabled, f = e.shards, m = e.sideCar, g = e.noRelative, v = e.noIsolation, p = e.inert, b = e.allowPinchZoom, x = e.as, w = x === void 0 ? "div" : x, E = e.gapMode, S = gr(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), k = m, T = hi([n, t]), O = ae(ae({}, S), o);
  return u.createElement(
    u.Fragment,
    null,
    d && u.createElement(k, { sideCar: br, removeScrollBar: c, shards: f, noRelative: g, noIsolation: v, inert: p, setCallbacks: s, allowPinchZoom: !!b, lockRef: n, gapMode: E }),
    i ? u.cloneElement(u.Children.only(a), ae(ae({}, O), { ref: T })) : u.createElement(w, ae({}, O, { className: l, ref: T }), a)
  );
});
gt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
gt.classNames = {
  fullWidth: at,
  zeroRight: it
};
var yi = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function wi() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = yi();
  return t && e.setAttribute("nonce", t), e;
}
function Ci(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ei(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Si = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = wi()) && (Ci(t, n), Ei(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Ri = function() {
  var e = Si();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, xr = function() {
  var e = Ri(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, ki = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Mt = function(e) {
  return parseInt(e || "", 10) || 0;
}, Ai = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Mt(n), Mt(r), Mt(o)];
}, Pi = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return ki;
  var t = Ai(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Oi = xr(), Te = "data-scroll-locked", Ti = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(di, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Te, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(it, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(at, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(it, " .").concat(it, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(at, " .").concat(at, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Te, `] {
    `).concat(fi, ": ").concat(a, `px;
  }
`);
}, Tn = function() {
  var e = parseInt(document.body.getAttribute(Te) || "0", 10);
  return isFinite(e) ? e : 0;
}, Ni = function() {
  u.useEffect(function() {
    return document.body.setAttribute(Te, (Tn() + 1).toString()), function() {
      var e = Tn() - 1;
      e <= 0 ? document.body.removeAttribute(Te) : document.body.setAttribute(Te, e.toString());
    };
  }, []);
}, _i = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Ni();
  var s = u.useMemo(function() {
    return Pi(o);
  }, [o]);
  return u.createElement(Oi, { styles: Ti(s, !t, o, n ? "" : "!important") });
}, Bt = !1;
if (typeof window < "u")
  try {
    var et = Object.defineProperty({}, "passive", {
      get: function() {
        return Bt = !0, !0;
      }
    });
    window.addEventListener("test", et, et), window.removeEventListener("test", et, et);
  } catch {
    Bt = !1;
  }
var Ae = Bt ? { passive: !1 } : !1, Mi = function(e) {
  return e.tagName === "TEXTAREA";
}, yr = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Mi(e) && n[t] === "visible")
  );
}, ji = function(e) {
  return yr(e, "overflowY");
}, Di = function(e) {
  return yr(e, "overflowX");
}, Nn = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = wr(e, r);
    if (o) {
      var s = Cr(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Li = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Ii = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, wr = function(e, t) {
  return e === "v" ? ji(t) : Di(t);
}, Cr = function(e, t) {
  return e === "v" ? Li(t) : Ii(t);
}, Fi = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, $i = function(e, t, n, r, o) {
  var s = Fi(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, l = t.contains(a), c = !1, d = i > 0, f = 0, m = 0;
  do {
    if (!a)
      break;
    var g = Cr(e, a), v = g[0], p = g[1], b = g[2], x = p - b - s * v;
    (v || x) && wr(e, a) && (f += x, m += v);
    var w = a.parentNode;
    a = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (d && Math.abs(f) < 1 || !d && Math.abs(m) < 1) && (c = !0), c;
}, tt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, _n = function(e) {
  return [e.deltaX, e.deltaY];
}, Mn = function(e) {
  return e && "current" in e ? e.current : e;
}, zi = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Wi = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Bi = 0, Pe = [];
function Vi(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(Bi++)[0], s = u.useState(xr)[0], i = u.useRef(e);
  u.useEffect(function() {
    i.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var p = ui([e.lockRef.current], (e.shards || []).map(Mn), !0).filter(Boolean);
      return p.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), p.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = u.useCallback(function(p, b) {
    if ("touches" in p && p.touches.length === 2 || p.type === "wheel" && p.ctrlKey)
      return !i.current.allowPinchZoom;
    var x = tt(p), w = n.current, E = "deltaX" in p ? p.deltaX : w[0] - x[0], S = "deltaY" in p ? p.deltaY : w[1] - x[1], k, T = p.target, O = Math.abs(E) > Math.abs(S) ? "h" : "v";
    if ("touches" in p && O === "h" && T.type === "range")
      return !1;
    var R = Nn(O, T);
    if (!R)
      return !0;
    if (R ? k = O : (k = O === "v" ? "h" : "v", R = Nn(O, T)), !R)
      return !1;
    if (!r.current && "changedTouches" in p && (E || S) && (r.current = k), !k)
      return !0;
    var j = r.current || k;
    return $i(j, b, p, j === "h" ? E : S);
  }, []), l = u.useCallback(function(p) {
    var b = p;
    if (!(!Pe.length || Pe[Pe.length - 1] !== s)) {
      var x = "deltaY" in b ? _n(b) : tt(b), w = t.current.filter(function(k) {
        return k.name === b.type && (k.target === b.target || b.target === k.shadowParent) && zi(k.delta, x);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var E = (i.current.shards || []).map(Mn).filter(Boolean).filter(function(k) {
          return k.contains(b.target);
        }), S = E.length > 0 ? a(b, E[0]) : !i.current.noIsolation;
        S && b.cancelable && b.preventDefault();
      }
    }
  }, []), c = u.useCallback(function(p, b, x, w) {
    var E = { name: p, delta: b, target: x, should: w, shadowParent: Hi(x) };
    t.current.push(E), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== E;
      });
    }, 1);
  }, []), d = u.useCallback(function(p) {
    n.current = tt(p), r.current = void 0;
  }, []), f = u.useCallback(function(p) {
    c(p.type, _n(p), p.target, a(p, e.lockRef.current));
  }, []), m = u.useCallback(function(p) {
    c(p.type, tt(p), p.target, a(p, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return Pe.push(s), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", l, Ae), document.addEventListener("touchmove", l, Ae), document.addEventListener("touchstart", d, Ae), function() {
      Pe = Pe.filter(function(p) {
        return p !== s;
      }), document.removeEventListener("wheel", l, Ae), document.removeEventListener("touchmove", l, Ae), document.removeEventListener("touchstart", d, Ae);
    };
  }, []);
  var g = e.removeScrollBar, v = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    v ? u.createElement(s, { styles: Wi(o) }) : null,
    g ? u.createElement(_i, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Hi(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Gi = xi(br, Vi);
var Er = u.forwardRef(function(e, t) {
  return u.createElement(gt, ae({}, e, { ref: t, sideCar: Gi }));
});
Er.classNames = gt.classNames;
var Ui = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Oe = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ new WeakMap(), rt = {}, jt = 0, Sr = function(e) {
  return e && (e.host || Sr(e.parentNode));
}, Yi = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Sr(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Xi = function(e, t, n, r) {
  var o = Yi(t, Array.isArray(e) ? e : [e]);
  rt[n] || (rt[n] = /* @__PURE__ */ new WeakMap());
  var s = rt[n], i = [], a = /* @__PURE__ */ new Set(), l = new Set(o), c = function(f) {
    !f || a.has(f) || (a.add(f), c(f.parentNode));
  };
  o.forEach(c);
  var d = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(m) {
      if (a.has(m))
        d(m);
      else
        try {
          var g = m.getAttribute(r), v = g !== null && g !== "false", p = (Oe.get(m) || 0) + 1, b = (s.get(m) || 0) + 1;
          Oe.set(m, p), s.set(m, b), i.push(m), p === 1 && v && nt.set(m, !0), b === 1 && m.setAttribute(n, "true"), v || m.setAttribute(r, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", m, x);
        }
    });
  };
  return d(t), a.clear(), jt++, function() {
    i.forEach(function(f) {
      var m = Oe.get(f) - 1, g = s.get(f) - 1;
      Oe.set(f, m), s.set(f, g), m || (nt.has(f) || f.removeAttribute(r), nt.delete(f)), g || f.removeAttribute(n);
    }), jt--, jt || (Oe = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ new WeakMap(), rt = {});
  };
}, Ki = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Ui(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Xi(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, vt = "Dialog", [Rr, Oc] = ht(vt), [qi, se] = Rr(vt), kr = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !0
  } = e, a = u.useRef(null), l = u.useRef(null), [c, d] = ur({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: vt
  });
  return /* @__PURE__ */ h.jsx(
    qi,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: st(),
      titleId: st(),
      descriptionId: st(),
      open: c,
      onOpenChange: d,
      onOpenToggle: u.useCallback(() => d((f) => !f), [d]),
      modal: i,
      children: n
    }
  );
};
kr.displayName = vt;
var Ar = "DialogTrigger", Zi = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(Ar, n), s = ne(t, o.triggerRef);
    return /* @__PURE__ */ h.jsx(
      Z.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Jt(o.open),
        ...r,
        ref: s,
        onClick: J(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Zi.displayName = Ar;
var qt = "DialogPortal", [Ji, Pr] = Rr(qt, {
  forceMount: void 0
}), Or = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = se(qt, t);
  return /* @__PURE__ */ h.jsx(Ji, { scope: t, forceMount: n, children: u.Children.map(r, (i) => /* @__PURE__ */ h.jsx(Fe, { present: n || s.open, children: /* @__PURE__ */ h.jsx(hr, { asChild: !0, container: o, children: i }) })) });
};
Or.displayName = qt;
var ct = "DialogOverlay", Tr = u.forwardRef(
  (e, t) => {
    const n = Pr(ct, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = se(ct, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ h.jsx(Fe, { present: r || s.open, children: /* @__PURE__ */ h.jsx(ea, { ...o, ref: t }) }) : null;
  }
);
Tr.displayName = ct;
var Qi = /* @__PURE__ */ Yt("DialogOverlay.RemoveScroll"), ea = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(ct, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ h.jsx(Er, { as: Qi, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ h.jsx(
        Z.div,
        {
          "data-state": Jt(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Ee = "DialogContent", Nr = u.forwardRef(
  (e, t) => {
    const n = Pr(Ee, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = se(Ee, e.__scopeDialog);
    return /* @__PURE__ */ h.jsx(Fe, { present: r || s.open, children: s.modal ? /* @__PURE__ */ h.jsx(ta, { ...o, ref: t }) : /* @__PURE__ */ h.jsx(na, { ...o, ref: t }) });
  }
);
Nr.displayName = Ee;
var ta = u.forwardRef(
  (e, t) => {
    const n = se(Ee, e.__scopeDialog), r = u.useRef(null), o = ne(t, n.contentRef, r);
    return u.useEffect(() => {
      const s = r.current;
      if (s) return Ki(s);
    }, []), /* @__PURE__ */ h.jsx(
      _r,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: J(e.onCloseAutoFocus, (s) => {
          s.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: J(e.onPointerDownOutside, (s) => {
          const i = s.detail.originalEvent, a = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || a) && s.preventDefault();
        }),
        onFocusOutside: J(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), na = u.forwardRef(
  (e, t) => {
    const n = se(Ee, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ h.jsx(
      _r,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          e.onCloseAutoFocus?.(s), s.defaultPrevented || (r.current || n.triggerRef.current?.focus(), s.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          e.onInteractOutside?.(s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = s.target;
          n.triggerRef.current?.contains(i) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), _r = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = se(Ee, n), l = u.useRef(null), c = ne(t, l);
    return ci(), /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
      /* @__PURE__ */ h.jsx(
        pr,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ h.jsx(
            Kt,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": Jt(a.open),
              ...i,
              ref: c,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
        /* @__PURE__ */ h.jsx(ra, { titleId: a.titleId }),
        /* @__PURE__ */ h.jsx(sa, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), Zt = "DialogTitle", Mr = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(Zt, n);
    return /* @__PURE__ */ h.jsx(Z.h2, { id: o.titleId, ...r, ref: t });
  }
);
Mr.displayName = Zt;
var jr = "DialogDescription", Dr = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(jr, n);
    return /* @__PURE__ */ h.jsx(Z.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Dr.displayName = jr;
var Lr = "DialogClose", Ir = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(Lr, n);
    return /* @__PURE__ */ h.jsx(
      Z.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: J(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Ir.displayName = Lr;
function Jt(e) {
  return e ? "open" : "closed";
}
var Fr = "DialogTitleWarning", [Tc, $r] = Is(Fr, {
  contentName: Ee,
  titleName: Zt,
  docsSlug: "dialog"
}), ra = ({ titleId: e }) => {
  const t = $r(Fr), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, oa = "DialogDescriptionWarning", sa = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${$r(oa).contentName}}.`;
  return u.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, ia = kr, aa = Or, la = Tr, ca = Nr, ua = Mr, da = Dr, fa = Ir;
function pa({ ...e }) {
  return /* @__PURE__ */ h.jsx(ia, { "data-slot": "sheet", ...e });
}
function ma({
  ...e
}) {
  return /* @__PURE__ */ h.jsx(aa, { "data-slot": "sheet-portal", ...e });
}
function ha({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ h.jsx(
    la,
    {
      "data-slot": "sheet-overlay",
      className: X(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function ga({
  className: e,
  children: t,
  side: n = "right",
  ...r
}) {
  return /* @__PURE__ */ h.jsxs(ma, { children: [
    /* @__PURE__ */ h.jsx(ha, {}),
    /* @__PURE__ */ h.jsxs(
      ca,
      {
        "data-slot": "sheet-content",
        className: X(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          n === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          n === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          n === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          n === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          e
        ),
        ...r,
        children: [
          t,
          /* @__PURE__ */ h.jsxs(fa, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ h.jsx(Zo, { className: "size-4" }),
            /* @__PURE__ */ h.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function va({ className: e, ...t }) {
  return /* @__PURE__ */ h.jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: X("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function ba({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ h.jsx(
    ua,
    {
      "data-slot": "sheet-title",
      className: X("text-foreground font-semibold", e),
      ...t
    }
  );
}
function xa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ h.jsx(
    da,
    {
      "data-slot": "sheet-description",
      className: X("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
const ya = ["top", "right", "bottom", "left"], xe = Math.min, ee = Math.max, ut = Math.round, ot = Math.floor, ce = (e) => ({
  x: e,
  y: e
}), wa = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ca = {
  start: "end",
  end: "start"
};
function Vt(e, t, n) {
  return ee(e, xe(t, n));
}
function me(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function he(e) {
  return e.split("-")[0];
}
function $e(e) {
  return e.split("-")[1];
}
function Qt(e) {
  return e === "x" ? "y" : "x";
}
function en(e) {
  return e === "y" ? "height" : "width";
}
const Ea = /* @__PURE__ */ new Set(["top", "bottom"]);
function le(e) {
  return Ea.has(he(e)) ? "y" : "x";
}
function tn(e) {
  return Qt(le(e));
}
function Sa(e, t, n) {
  n === void 0 && (n = !1);
  const r = $e(e), o = tn(e), s = en(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = dt(i)), [i, dt(i)];
}
function Ra(e) {
  const t = dt(e);
  return [Ht(e), t, Ht(t)];
}
function Ht(e) {
  return e.replace(/start|end/g, (t) => Ca[t]);
}
const jn = ["left", "right"], Dn = ["right", "left"], ka = ["top", "bottom"], Aa = ["bottom", "top"];
function Pa(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Dn : jn : t ? jn : Dn;
    case "left":
    case "right":
      return t ? ka : Aa;
    default:
      return [];
  }
}
function Oa(e, t, n, r) {
  const o = $e(e);
  let s = Pa(he(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Ht)))), s;
}
function dt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => wa[t]);
}
function Ta(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function zr(e) {
  return typeof e != "number" ? Ta(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ft(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Ln(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = le(t), i = tn(t), a = en(i), l = he(t), c = s === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, m = r[a] / 2 - o[a] / 2;
  let g;
  switch (l) {
    case "top":
      g = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch ($e(t)) {
    case "start":
      g[i] -= m * (n && c ? -1 : 1);
      break;
    case "end":
      g[i] += m * (n && c ? -1 : 1);
      break;
  }
  return g;
}
const Na = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, a = s.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: f
  } = Ln(c, r, l), m = r, g = {}, v = 0;
  for (let p = 0; p < a.length; p++) {
    const {
      name: b,
      fn: x
    } = a[p], {
      x: w,
      y: E,
      data: S,
      reset: k
    } = await x({
      x: d,
      y: f,
      initialPlacement: r,
      placement: m,
      strategy: o,
      middlewareData: g,
      rects: c,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = w ?? d, f = E ?? f, g = {
      ...g,
      [b]: {
        ...g[b],
        ...S
      }
    }, k && v <= 50 && (v++, typeof k == "object" && (k.placement && (m = k.placement), k.rects && (c = k.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: d,
      y: f
    } = Ln(c, m, l)), p = -1);
  }
  return {
    x: d,
    y: f,
    placement: m,
    strategy: o,
    middlewareData: g
  };
};
async function Ge(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: i,
    elements: a,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: g = 0
  } = me(t, e), v = zr(g), b = a[m ? f === "floating" ? "reference" : "floating" : f], x = ft(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null || n ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), w = f === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), S = await (s.isElement == null ? void 0 : s.isElement(E)) ? await (s.getScale == null ? void 0 : s.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = ft(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: w,
    offsetParent: E,
    strategy: l
  }) : w);
  return {
    top: (x.top - k.top + v.top) / S.y,
    bottom: (k.bottom - x.bottom + v.bottom) / S.y,
    left: (x.left - k.left + v.left) / S.x,
    right: (k.right - x.right + v.right) / S.x
  };
}
const _a = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: i,
      elements: a,
      middlewareData: l
    } = t, {
      element: c,
      padding: d = 0
    } = me(e, t) || {};
    if (c == null)
      return {};
    const f = zr(d), m = {
      x: n,
      y: r
    }, g = tn(o), v = en(g), p = await i.getDimensions(c), b = g === "y", x = b ? "top" : "left", w = b ? "bottom" : "right", E = b ? "clientHeight" : "clientWidth", S = s.reference[v] + s.reference[g] - m[g] - s.floating[v], k = m[g] - s.reference[g], T = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let O = T ? T[E] : 0;
    (!O || !await (i.isElement == null ? void 0 : i.isElement(T))) && (O = a.floating[E] || s.floating[v]);
    const R = S / 2 - k / 2, j = O / 2 - p[v] / 2 - 1, z = xe(f[x], j), G = xe(f[w], j), V = z, W = O - p[v] - G, I = O / 2 - p[v] / 2 + R, H = Vt(V, I, W), D = !l.arrow && $e(o) != null && I !== H && s.reference[v] / 2 - (I < V ? z : G) - p[v] / 2 < 0, L = D ? I < V ? I - V : I - W : 0;
    return {
      [g]: m[g] + L,
      data: {
        [g]: H,
        centerOffset: I - H - L,
        ...D && {
          alignmentOffset: L
        }
      },
      reset: D
    };
  }
}), Ma = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: i,
        initialPlacement: a,
        platform: l,
        elements: c
      } = t, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: m,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: p = !0,
        ...b
      } = me(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const x = he(o), w = le(a), E = he(a) === a, S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), k = m || (E || !p ? [dt(a)] : Ra(a)), T = v !== "none";
      !m && T && k.push(...Oa(a, p, v, S));
      const O = [a, ...k], R = await Ge(t, b), j = [];
      let z = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (d && j.push(R[x]), f) {
        const I = Sa(o, i, S);
        j.push(R[I[0]], R[I[1]]);
      }
      if (z = [...z, {
        placement: o,
        overflows: j
      }], !j.every((I) => I <= 0)) {
        var G, V;
        const I = (((G = s.flip) == null ? void 0 : G.index) || 0) + 1, H = O[I];
        if (H && (!(f === "alignment" ? w !== le(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        z.every((C) => le(C.placement) === w ? C.overflows[0] > 0 : !0)))
          return {
            data: {
              index: I,
              overflows: z
            },
            reset: {
              placement: H
            }
          };
        let D = (V = z.filter((L) => L.overflows[0] <= 0).sort((L, C) => L.overflows[1] - C.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!D)
          switch (g) {
            case "bestFit": {
              var W;
              const L = (W = z.filter((C) => {
                if (T) {
                  const U = le(C.placement);
                  return U === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  U === "y";
                }
                return !0;
              }).map((C) => [C.placement, C.overflows.filter((U) => U > 0).reduce((U, y) => U + y, 0)]).sort((C, U) => C[1] - U[1])[0]) == null ? void 0 : W[0];
              L && (D = L);
              break;
            }
            case "initialPlacement":
              D = a;
              break;
          }
        if (o !== D)
          return {
            reset: {
              placement: D
            }
          };
      }
      return {};
    }
  };
};
function In(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Fn(e) {
  return ya.some((t) => e[t] >= 0);
}
const ja = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = me(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await Ge(t, {
            ...o,
            elementContext: "reference"
          }), i = In(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Fn(i)
            }
          };
        }
        case "escaped": {
          const s = await Ge(t, {
            ...o,
            altBoundary: !0
          }), i = In(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Fn(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Wr = /* @__PURE__ */ new Set(["left", "top"]);
async function Da(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = he(n), a = $e(n), l = le(n) === "y", c = Wr.has(i) ? -1 : 1, d = s && l ? -1 : 1, f = me(t, e);
  let {
    mainAxis: m,
    crossAxis: g,
    alignmentAxis: v
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return a && typeof v == "number" && (g = a === "end" ? v * -1 : v), l ? {
    x: g * d,
    y: m * c
  } : {
    x: m * c,
    y: g * d
  };
}
const La = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: i,
        middlewareData: a
      } = t, l = await Da(t, e);
      return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, Ia = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: i = !1,
        limiter: a = {
          fn: (b) => {
            let {
              x,
              y: w
            } = b;
            return {
              x,
              y: w
            };
          }
        },
        ...l
      } = me(e, t), c = {
        x: n,
        y: r
      }, d = await Ge(t, l), f = le(he(o)), m = Qt(f);
      let g = c[m], v = c[f];
      if (s) {
        const b = m === "y" ? "top" : "left", x = m === "y" ? "bottom" : "right", w = g + d[b], E = g - d[x];
        g = Vt(w, g, E);
      }
      if (i) {
        const b = f === "y" ? "top" : "left", x = f === "y" ? "bottom" : "right", w = v + d[b], E = v - d[x];
        v = Vt(w, v, E);
      }
      const p = a.fn({
        ...t,
        [m]: g,
        [f]: v
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - r,
          enabled: {
            [m]: s,
            [f]: i
          }
        }
      };
    }
  };
}, Fa = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: s,
        middlewareData: i
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = me(e, t), d = {
        x: n,
        y: r
      }, f = le(o), m = Qt(f);
      let g = d[m], v = d[f];
      const p = me(a, t), b = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (l) {
        const E = m === "y" ? "height" : "width", S = s.reference[m] - s.floating[E] + b.mainAxis, k = s.reference[m] + s.reference[E] - b.mainAxis;
        g < S ? g = S : g > k && (g = k);
      }
      if (c) {
        var x, w;
        const E = m === "y" ? "width" : "height", S = Wr.has(he(o)), k = s.reference[f] - s.floating[E] + (S && ((x = i.offset) == null ? void 0 : x[f]) || 0) + (S ? 0 : b.crossAxis), T = s.reference[f] + s.reference[E] + (S ? 0 : ((w = i.offset) == null ? void 0 : w[f]) || 0) - (S ? b.crossAxis : 0);
        v < k ? v = k : v > T && (v = T);
      }
      return {
        [m]: g,
        [f]: v
      };
    }
  };
}, $a = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: s,
        platform: i,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...c
      } = me(e, t), d = await Ge(t, c), f = he(o), m = $e(o), g = le(o) === "y", {
        width: v,
        height: p
      } = s.floating;
      let b, x;
      f === "top" || f === "bottom" ? (b = f, x = m === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (x = f, b = m === "end" ? "top" : "bottom");
      const w = p - d.top - d.bottom, E = v - d.left - d.right, S = xe(p - d[b], w), k = xe(v - d[x], E), T = !t.middlewareData.shift;
      let O = S, R = k;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (R = E), (r = t.middlewareData.shift) != null && r.enabled.y && (O = w), T && !m) {
        const z = ee(d.left, 0), G = ee(d.right, 0), V = ee(d.top, 0), W = ee(d.bottom, 0);
        g ? R = v - 2 * (z !== 0 || G !== 0 ? z + G : ee(d.left, d.right)) : O = p - 2 * (V !== 0 || W !== 0 ? V + W : ee(d.top, d.bottom));
      }
      await l({
        ...t,
        availableWidth: R,
        availableHeight: O
      });
      const j = await i.getDimensions(a.floating);
      return v !== j.width || p !== j.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function bt() {
  return typeof window < "u";
}
function ze(e) {
  return Br(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function te(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function de(e) {
  var t;
  return (t = (Br(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Br(e) {
  return bt() ? e instanceof Node || e instanceof te(e).Node : !1;
}
function re(e) {
  return bt() ? e instanceof Element || e instanceof te(e).Element : !1;
}
function ue(e) {
  return bt() ? e instanceof HTMLElement || e instanceof te(e).HTMLElement : !1;
}
function $n(e) {
  return !bt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof te(e).ShadowRoot;
}
const za = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ye(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = oe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !za.has(o);
}
const Wa = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Ba(e) {
  return Wa.has(ze(e));
}
const Va = [":popover-open", ":modal"];
function xt(e) {
  return Va.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Ha = ["transform", "translate", "scale", "rotate", "perspective"], Ga = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Ua = ["paint", "layout", "strict", "content"];
function nn(e) {
  const t = rn(), n = re(e) ? oe(e) : e;
  return Ha.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Ga.some((r) => (n.willChange || "").includes(r)) || Ua.some((r) => (n.contain || "").includes(r));
}
function Ya(e) {
  let t = ye(e);
  for (; ue(t) && !Me(t); ) {
    if (nn(t))
      return t;
    if (xt(t))
      return null;
    t = ye(t);
  }
  return null;
}
function rn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Xa = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Me(e) {
  return Xa.has(ze(e));
}
function oe(e) {
  return te(e).getComputedStyle(e);
}
function yt(e) {
  return re(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ye(e) {
  if (ze(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    $n(e) && e.host || // Fallback.
    de(e)
  );
  return $n(t) ? t.host : t;
}
function Vr(e) {
  const t = ye(e);
  return Me(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ue(t) && Ye(t) ? t : Vr(t);
}
function Ue(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Vr(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = te(o);
  if (s) {
    const a = Gt(i);
    return t.concat(i, i.visualViewport || [], Ye(o) ? o : [], a && n ? Ue(a) : []);
  }
  return t.concat(o, Ue(o, [], n));
}
function Gt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Hr(e) {
  const t = oe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ue(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = ut(n) !== s || ut(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function on(e) {
  return re(e) ? e : e.contextElement;
}
function Ne(e) {
  const t = on(e);
  if (!ue(t))
    return ce(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Hr(t);
  let i = (s ? ut(n.width) : n.width) / r, a = (s ? ut(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const Ka = /* @__PURE__ */ ce(0);
function Gr(e) {
  const t = te(e);
  return !rn() || !t.visualViewport ? Ka : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function qa(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== te(e) ? !1 : t;
}
function Se(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = on(e);
  let i = ce(1);
  t && (r ? re(r) && (i = Ne(r)) : i = Ne(e));
  const a = qa(s, n, r) ? Gr(s) : ce(0);
  let l = (o.left + a.x) / i.x, c = (o.top + a.y) / i.y, d = o.width / i.x, f = o.height / i.y;
  if (s) {
    const m = te(s), g = r && re(r) ? te(r) : r;
    let v = m, p = Gt(v);
    for (; p && r && g !== v; ) {
      const b = Ne(p), x = p.getBoundingClientRect(), w = oe(p), E = x.left + (p.clientLeft + parseFloat(w.paddingLeft)) * b.x, S = x.top + (p.clientTop + parseFloat(w.paddingTop)) * b.y;
      l *= b.x, c *= b.y, d *= b.x, f *= b.y, l += E, c += S, v = te(p), p = Gt(v);
    }
  }
  return ft({
    width: d,
    height: f,
    x: l,
    y: c
  });
}
function wt(e, t) {
  const n = yt(e).scrollLeft;
  return t ? t.left + n : Se(de(e)).left + n;
}
function Ur(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - wt(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Za(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = de(r), a = t ? xt(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = ce(1);
  const d = ce(0), f = ue(r);
  if ((f || !f && !s) && ((ze(r) !== "body" || Ye(i)) && (l = yt(r)), ue(r))) {
    const g = Se(r);
    c = Ne(r), d.x = g.x + r.clientLeft, d.y = g.y + r.clientTop;
  }
  const m = i && !f && !s ? Ur(i, l) : ce(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + m.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + m.y
  };
}
function Ja(e) {
  return Array.from(e.getClientRects());
}
function Qa(e) {
  const t = de(e), n = yt(e), r = e.ownerDocument.body, o = ee(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = ee(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + wt(e);
  const a = -n.scrollTop;
  return oe(r).direction === "rtl" && (i += ee(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
const zn = 25;
function el(e, t) {
  const n = te(e), r = de(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const d = rn();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const c = wt(r);
  if (c <= 0) {
    const d = r.ownerDocument, f = d.body, m = getComputedStyle(f), g = d.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, v = Math.abs(r.clientWidth - f.clientWidth - g);
    v <= zn && (s -= v);
  } else c <= zn && (s += c);
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
const tl = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function nl(e, t) {
  const n = Se(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = ue(e) ? Ne(e) : ce(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, c = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: c
  };
}
function Wn(e, t, n) {
  let r;
  if (t === "viewport")
    r = el(e, n);
  else if (t === "document")
    r = Qa(de(e));
  else if (re(t))
    r = nl(t, n);
  else {
    const o = Gr(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ft(r);
}
function Yr(e, t) {
  const n = ye(e);
  return n === t || !re(n) || Me(n) ? !1 : oe(n).position === "fixed" || Yr(n, t);
}
function rl(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ue(e, [], !1).filter((a) => re(a) && ze(a) !== "body"), o = null;
  const s = oe(e).position === "fixed";
  let i = s ? ye(e) : e;
  for (; re(i) && !Me(i); ) {
    const a = oe(i), l = nn(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && tl.has(o.position) || Ye(i) && !l && Yr(e, i)) ? r = r.filter((d) => d !== i) : o = a, i = ye(i);
  }
  return t.set(e, r), r;
}
function ol(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? xt(t) ? [] : rl(t, this._c) : [].concat(n), r], a = i[0], l = i.reduce((c, d) => {
    const f = Wn(t, d, o);
    return c.top = ee(f.top, c.top), c.right = xe(f.right, c.right), c.bottom = xe(f.bottom, c.bottom), c.left = ee(f.left, c.left), c;
  }, Wn(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function sl(e) {
  const {
    width: t,
    height: n
  } = Hr(e);
  return {
    width: t,
    height: n
  };
}
function il(e, t, n) {
  const r = ue(t), o = de(t), s = n === "fixed", i = Se(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ce(0);
  function c() {
    l.x = wt(o);
  }
  if (r || !r && !s)
    if ((ze(t) !== "body" || Ye(o)) && (a = yt(t)), r) {
      const g = Se(t, !0, s, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && c();
  s && !r && o && c();
  const d = o && !r && !s ? Ur(o, a) : ce(0), f = i.left + a.scrollLeft - l.x - d.x, m = i.top + a.scrollTop - l.y - d.y;
  return {
    x: f,
    y: m,
    width: i.width,
    height: i.height
  };
}
function Dt(e) {
  return oe(e).position === "static";
}
function Bn(e, t) {
  if (!ue(e) || oe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return de(e) === n && (n = n.ownerDocument.body), n;
}
function Xr(e, t) {
  const n = te(e);
  if (xt(e))
    return n;
  if (!ue(e)) {
    let o = ye(e);
    for (; o && !Me(o); ) {
      if (re(o) && !Dt(o))
        return o;
      o = ye(o);
    }
    return n;
  }
  let r = Bn(e, t);
  for (; r && Ba(r) && Dt(r); )
    r = Bn(r, t);
  return r && Me(r) && Dt(r) && !nn(r) ? n : r || Ya(e) || n;
}
const al = async function(e) {
  const t = this.getOffsetParent || Xr, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: il(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function ll(e) {
  return oe(e).direction === "rtl";
}
const cl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Za,
  getDocumentElement: de,
  getClippingRect: ol,
  getOffsetParent: Xr,
  getElementRects: al,
  getClientRects: Ja,
  getDimensions: sl,
  getScale: Ne,
  isElement: re,
  isRTL: ll
};
function Kr(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ul(e, t) {
  let n = null, r;
  const o = de(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const c = e.getBoundingClientRect(), {
      left: d,
      top: f,
      width: m,
      height: g
    } = c;
    if (a || t(), !m || !g)
      return;
    const v = ot(f), p = ot(o.clientWidth - (d + m)), b = ot(o.clientHeight - (f + g)), x = ot(d), E = {
      rootMargin: -v + "px " + -p + "px " + -b + "px " + -x + "px",
      threshold: ee(0, xe(1, l)) || 1
    };
    let S = !0;
    function k(T) {
      const O = T[0].intersectionRatio;
      if (O !== l) {
        if (!S)
          return i();
        O ? i(!1, O) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      O === 1 && !Kr(c, e.getBoundingClientRect()) && i(), S = !1;
    }
    try {
      n = new IntersectionObserver(k, {
        ...E,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(k, E);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function dl(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = on(e), d = o || s ? [...c ? Ue(c) : [], ...Ue(t)] : [];
  d.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), s && x.addEventListener("resize", n);
  });
  const f = c && a ? ul(c, n) : null;
  let m = -1, g = null;
  i && (g = new ResizeObserver((x) => {
    let [w] = x;
    w && w.target === c && g && (g.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var E;
      (E = g) == null || E.observe(t);
    })), n();
  }), c && !l && g.observe(c), g.observe(t));
  let v, p = l ? Se(e) : null;
  l && b();
  function b() {
    const x = Se(e);
    p && !Kr(p, x) && n(), p = x, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var x;
    d.forEach((w) => {
      o && w.removeEventListener("scroll", n), s && w.removeEventListener("resize", n);
    }), f?.(), (x = g) == null || x.disconnect(), g = null, l && cancelAnimationFrame(v);
  };
}
const fl = La, pl = Ia, ml = Ma, hl = $a, gl = ja, Vn = _a, vl = Fa, bl = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: cl,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Na(e, t, {
    ...o,
    platform: s
  });
};
var xl = typeof document < "u", yl = function() {
}, lt = xl ? So : yl;
function pt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!pt(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !pt(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function qr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Hn(e, t) {
  const n = qr(e);
  return Math.round(t * n) / n;
}
function Lt(e) {
  const t = u.useRef(e);
  return lt(() => {
    t.current = e;
  }), t;
}
function wl(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: c
  } = e, [d, f] = u.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, g] = u.useState(r);
  pt(m, r) || g(r);
  const [v, p] = u.useState(null), [b, x] = u.useState(null), w = u.useCallback((C) => {
    C !== T.current && (T.current = C, p(C));
  }, []), E = u.useCallback((C) => {
    C !== O.current && (O.current = C, x(C));
  }, []), S = s || v, k = i || b, T = u.useRef(null), O = u.useRef(null), R = u.useRef(d), j = l != null, z = Lt(l), G = Lt(o), V = Lt(c), W = u.useCallback(() => {
    if (!T.current || !O.current)
      return;
    const C = {
      placement: t,
      strategy: n,
      middleware: m
    };
    G.current && (C.platform = G.current), bl(T.current, O.current, C).then((U) => {
      const y = {
        ...U,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: V.current !== !1
      };
      I.current && !pt(R.current, y) && (R.current = y, Yn.flushSync(() => {
        f(y);
      }));
    });
  }, [m, t, n, G, V]);
  lt(() => {
    c === !1 && R.current.isPositioned && (R.current.isPositioned = !1, f((C) => ({
      ...C,
      isPositioned: !1
    })));
  }, [c]);
  const I = u.useRef(!1);
  lt(() => (I.current = !0, () => {
    I.current = !1;
  }), []), lt(() => {
    if (S && (T.current = S), k && (O.current = k), S && k) {
      if (z.current)
        return z.current(S, k, W);
      W();
    }
  }, [S, k, W, z, j]);
  const H = u.useMemo(() => ({
    reference: T,
    floating: O,
    setReference: w,
    setFloating: E
  }), [w, E]), D = u.useMemo(() => ({
    reference: S,
    floating: k
  }), [S, k]), L = u.useMemo(() => {
    const C = {
      position: n,
      left: 0,
      top: 0
    };
    if (!D.floating)
      return C;
    const U = Hn(D.floating, d.x), y = Hn(D.floating, d.y);
    return a ? {
      ...C,
      transform: "translate(" + U + "px, " + y + "px)",
      ...qr(D.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: U,
      top: y
    };
  }, [n, a, D.floating, d.x, d.y]);
  return u.useMemo(() => ({
    ...d,
    update: W,
    refs: H,
    elements: D,
    floatingStyles: L
  }), [d, W, H, D, L]);
}
const Cl = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Vn({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Vn({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, El = (e, t) => ({
  ...fl(e),
  options: [e, t]
}), Sl = (e, t) => ({
  ...pl(e),
  options: [e, t]
}), Rl = (e, t) => ({
  ...vl(e),
  options: [e, t]
}), kl = (e, t) => ({
  ...ml(e),
  options: [e, t]
}), Al = (e, t) => ({
  ...hl(e),
  options: [e, t]
}), Pl = (e, t) => ({
  ...gl(e),
  options: [e, t]
}), Ol = (e, t) => ({
  ...Cl(e),
  options: [e, t]
});
var Tl = "Arrow", Zr = u.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ h.jsx(
    Z.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ h.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Zr.displayName = Tl;
var Nl = Zr;
function _l(e) {
  const [t, n] = u.useState(void 0);
  return pe(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let i, a;
        if ("borderBoxSize" in s) {
          const l = s.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          i = c.inlineSize, a = c.blockSize;
        } else
          i = e.offsetWidth, a = e.offsetHeight;
        n({ width: i, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Jr = "Popper", [Qr, eo] = ht(Jr), [Nc, to] = Qr(Jr), no = "PopperAnchor", ro = u.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = to(no, n), i = u.useRef(null), a = ne(t, i), l = u.useRef(null);
    return u.useEffect(() => {
      const c = l.current;
      l.current = r?.current || i.current, c !== l.current && s.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ h.jsx(Z.div, { ...o, ref: a });
  }
);
ro.displayName = no;
var sn = "PopperContent", [Ml, jl] = Qr(sn), oo = u.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: i = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: d = 0,
      sticky: f = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: v,
      ...p
    } = e, b = to(sn, n), [x, w] = u.useState(null), E = ne(t, ($) => w($)), [S, k] = u.useState(null), T = _l(S), O = T?.width ?? 0, R = T?.height ?? 0, j = r + (s !== "center" ? "-" + s : ""), z = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, G = Array.isArray(c) ? c : [c], V = G.length > 0, W = {
      padding: z,
      boundary: G.filter(Ll),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: V
    }, { refs: I, floatingStyles: H, placement: D, isPositioned: L, middlewareData: C } = wl({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: j,
      whileElementsMounted: (...$) => dl(...$, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        El({ mainAxis: o + R, alignmentAxis: i }),
        l && Sl({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? Rl() : void 0,
          ...W
        }),
        l && kl({ ...W }),
        Al({
          ...W,
          apply: ({ elements: $, rects: Y, availableWidth: Q, availableHeight: ie }) => {
            const { width: we, height: Re } = Y.reference, Ke = $.floating.style;
            Ke.setProperty("--radix-popper-available-width", `${Q}px`), Ke.setProperty("--radix-popper-available-height", `${ie}px`), Ke.setProperty("--radix-popper-anchor-width", `${we}px`), Ke.setProperty("--radix-popper-anchor-height", `${Re}px`);
          }
        }),
        S && Ol({ element: S, padding: a }),
        Il({ arrowWidth: O, arrowHeight: R }),
        m && Pl({ strategy: "referenceHidden", ...W })
      ]
    }), [U, y] = ao(D), N = _e(v);
    pe(() => {
      L && N?.();
    }, [L, N]);
    const F = C.arrow?.x, M = C.arrow?.y, B = C.arrow?.centerOffset !== 0, [q, ge] = u.useState();
    return pe(() => {
      x && ge(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ h.jsx(
      "div",
      {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: L ? H.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: q,
          "--radix-popper-transform-origin": [
            C.transformOrigin?.x,
            C.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...C.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ h.jsx(
          Ml,
          {
            scope: n,
            placedSide: U,
            onArrowChange: k,
            arrowX: F,
            arrowY: M,
            shouldHideArrow: B,
            children: /* @__PURE__ */ h.jsx(
              Z.div,
              {
                "data-side": U,
                "data-align": y,
                ...p,
                ref: E,
                style: {
                  ...p.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: L ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
oo.displayName = sn;
var so = "PopperArrow", Dl = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, io = u.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = jl(so, r), i = Dl[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ h.jsx(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ h.jsx(
          Nl,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
io.displayName = so;
function Ll(e) {
  return e !== null;
}
var Il = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, i = o.arrow?.centerOffset !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [c, d] = ao(n), f = { start: "0%", center: "50%", end: "100%" }[d], m = (o.arrow?.x ?? 0) + a / 2, g = (o.arrow?.y ?? 0) + l / 2;
    let v = "", p = "";
    return c === "bottom" ? (v = i ? f : `${m}px`, p = `${-l}px`) : c === "top" ? (v = i ? f : `${m}px`, p = `${r.floating.height + l}px`) : c === "right" ? (v = `${-l}px`, p = i ? f : `${g}px`) : c === "left" && (v = `${r.floating.width + l}px`, p = i ? f : `${g}px`), { data: { x: v, y: p } };
  }
});
function ao(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Fl = ro, $l = oo, zl = io, Wl = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), Bl = "VisuallyHidden", lo = u.forwardRef(
  (e, t) => /* @__PURE__ */ h.jsx(
    Z.span,
    {
      ...e,
      ref: t,
      style: { ...Wl, ...e.style }
    }
  )
);
lo.displayName = Bl;
var Vl = lo, [Ct, _c] = ht("Tooltip", [
  eo
]), an = eo(), co = "TooltipProvider", Hl = 700, Gn = "tooltip.open", [Gl, uo] = Ct(co), fo = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = Hl,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, i = u.useRef(!0), a = u.useRef(!1), l = u.useRef(0);
  return u.useEffect(() => {
    const c = l.current;
    return () => window.clearTimeout(c);
  }, []), /* @__PURE__ */ h.jsx(
    Gl,
    {
      scope: t,
      isOpenDelayedRef: i,
      delayDuration: n,
      onOpen: u.useCallback(() => {
        window.clearTimeout(l.current), i.current = !1;
      }, []),
      onClose: u.useCallback(() => {
        window.clearTimeout(l.current), l.current = window.setTimeout(
          () => i.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: a,
      onPointerInTransitChange: u.useCallback((c) => {
        a.current = c;
      }, []),
      disableHoverableContent: o,
      children: s
    }
  );
};
fo.displayName = co;
var po = "Tooltip", [Mc, Et] = Ct(po), Ut = "TooltipTrigger", Ul = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Et(Ut, n), s = uo(Ut, n), i = an(n), a = u.useRef(null), l = ne(t, a, o.onTriggerChange), c = u.useRef(!1), d = u.useRef(!1), f = u.useCallback(() => c.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ h.jsx(Fl, { asChild: !0, ...i, children: /* @__PURE__ */ h.jsx(
      Z.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: J(e.onPointerMove, (m) => {
          m.pointerType !== "touch" && !d.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: J(e.onPointerLeave, () => {
          o.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: J(e.onPointerDown, () => {
          o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: J(e.onFocus, () => {
          c.current || o.onOpen();
        }),
        onBlur: J(e.onBlur, o.onClose),
        onClick: J(e.onClick, o.onClose)
      }
    ) });
  }
);
Ul.displayName = Ut;
var Yl = "TooltipPortal", [jc, Xl] = Ct(Yl, {
  forceMount: void 0
}), je = "TooltipContent", Kl = u.forwardRef(
  (e, t) => {
    const n = Xl(je, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...s } = e, i = Et(je, e.__scopeTooltip);
    return /* @__PURE__ */ h.jsx(Fe, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ h.jsx(mo, { side: o, ...s, ref: t }) : /* @__PURE__ */ h.jsx(ql, { side: o, ...s, ref: t }) });
  }
), ql = u.forwardRef((e, t) => {
  const n = Et(je, e.__scopeTooltip), r = uo(je, e.__scopeTooltip), o = u.useRef(null), s = ne(t, o), [i, a] = u.useState(null), { trigger: l, onClose: c } = n, d = o.current, { onPointerInTransitChange: f } = r, m = u.useCallback(() => {
    a(null), f(!1);
  }, [f]), g = u.useCallback(
    (v, p) => {
      const b = v.currentTarget, x = { x: v.clientX, y: v.clientY }, w = tc(x, b.getBoundingClientRect()), E = nc(x, w), S = rc(p.getBoundingClientRect()), k = sc([...E, ...S]);
      a(k), f(!0);
    },
    [f]
  );
  return u.useEffect(() => () => m(), [m]), u.useEffect(() => {
    if (l && d) {
      const v = (b) => g(b, d), p = (b) => g(b, l);
      return l.addEventListener("pointerleave", v), d.addEventListener("pointerleave", p), () => {
        l.removeEventListener("pointerleave", v), d.removeEventListener("pointerleave", p);
      };
    }
  }, [l, d, g, m]), u.useEffect(() => {
    if (i) {
      const v = (p) => {
        const b = p.target, x = { x: p.clientX, y: p.clientY }, w = l?.contains(b) || d?.contains(b), E = !oc(x, i);
        w ? m() : E && (m(), c());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [l, d, i, c, m]), /* @__PURE__ */ h.jsx(mo, { ...e, ref: s });
}), [Zl, Jl] = Ct(po, { isInside: !1 }), Ql = /* @__PURE__ */ No("TooltipContent"), mo = u.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      ...a
    } = e, l = Et(je, n), c = an(n), { onClose: d } = l;
    return u.useEffect(() => (document.addEventListener(Gn, d), () => document.removeEventListener(Gn, d)), [d]), u.useEffect(() => {
      if (l.trigger) {
        const f = (m) => {
          m.target?.contains(l.trigger) && d();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [l.trigger, d]), /* @__PURE__ */ h.jsx(
      Kt,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ h.jsxs(
          $l,
          {
            "data-state": l.stateAttribute,
            ...c,
            ...a,
            ref: t,
            style: {
              ...a.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ h.jsx(Ql, { children: r }),
              /* @__PURE__ */ h.jsx(Zl, { scope: n, isInside: !0, children: /* @__PURE__ */ h.jsx(Vl, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
Kl.displayName = je;
var ho = "TooltipArrow", ec = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = an(n);
    return Jl(
      ho,
      n
    ).isInside ? null : /* @__PURE__ */ h.jsx(zl, { ...o, ...r, ref: t });
  }
);
ec.displayName = ho;
function tc(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, s)) {
    case s:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function nc(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function rc(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function oc(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s], l = t[i], c = a.x, d = a.y, f = l.x, m = l.y;
    d > r != m > r && n < (f - c) * (r - d) / (m - d) + c && (o = !o);
  }
  return o;
}
function sc(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), ic(t);
}
function ic(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], i = t[t.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], i = n[n.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var ac = fo;
function lc({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ h.jsx(
    ac,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
const cc = "sidebar_state", uc = 3600 * 24 * 7, dc = "16rem", fc = "3rem", pc = "b", go = u.createContext(null);
function vo() {
  const e = u.useContext(go);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function Dc({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: n,
  className: r,
  style: o,
  children: s,
  ...i
}) {
  const a = Jo(), [l, c] = u.useState(!1), [d, f] = u.useState(e), m = t ?? d, g = u.useCallback(
    (x) => {
      const w = typeof x == "function" ? x(m) : x;
      n ? n(w) : f(w), document.cookie = `${cc}=${w}; path=/; max-age=${uc}`;
    },
    [n, m]
  ), v = u.useCallback(() => a ? c((x) => !x) : g((x) => !x), [a, g, c]);
  u.useEffect(() => {
    const x = (w) => {
      w.key === pc && (w.metaKey || w.ctrlKey) && (w.preventDefault(), v());
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [v]);
  const p = m ? "expanded" : "collapsed", b = u.useMemo(
    () => ({
      state: p,
      open: m,
      setOpen: g,
      isMobile: a,
      openMobile: l,
      setOpenMobile: c,
      toggleSidebar: v
    }),
    [p, m, g, a, l, c, v]
  );
  return /* @__PURE__ */ h.jsx(go.Provider, { value: b, children: /* @__PURE__ */ h.jsx(lc, { delayDuration: 0, children: /* @__PURE__ */ h.jsx(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": dc,
        "--sidebar-width-icon": fc,
        ...o
      },
      className: X(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        r
      ),
      ...i,
      children: s
    }
  ) }) });
}
function mc({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: n = "offcanvas",
  className: r,
  children: o,
  width: s = "250px",
  collapsewidth: i = "80px",
  isCollapse: a = !1,
  ...l
}) {
  const { isMobile: c, state: d, openMobile: f, setOpenMobile: m } = vo();
  return n === "none" ? /* @__PURE__ */ h.jsx(
    "div",
    {
      "data-slot": "sidebar",
      className: X(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        r
      ),
      ...l,
      children: o
    }
  ) : c ? /* @__PURE__ */ h.jsx(pa, { open: f, onOpenChange: m, ...l, children: /* @__PURE__ */ h.jsxs(
    ga,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": a ? i : s
      },
      side: e,
      children: [
        /* @__PURE__ */ h.jsxs(va, { className: "sr-only", children: [
          /* @__PURE__ */ h.jsx(ba, { children: "Sidebar" }),
          /* @__PURE__ */ h.jsx(xa, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ h.jsx("div", { className: "flex h-full w-full flex-col", children: o })
      ]
    }
  ) }) : /* @__PURE__ */ h.jsxs(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": d,
      "data-collapsible": d === "collapsed" ? n : "",
      "data-variant": t,
      "data-side": e,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ h.jsx(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: X(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ h.jsx(
          "div",
          {
            "data-slot": "sidebar-container",
            className: X(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              r
            ),
            ...l,
            children: /* @__PURE__ */ h.jsx(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children: o
              }
            )
          }
        )
      ]
    }
  );
}
function Lc({
  className: e,
  onClick: t,
  ...n
}) {
  const { toggleSidebar: r } = vo();
  return /* @__PURE__ */ h.jsxs(
    js,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: X("size-7", e),
      onClick: (o) => {
        t?.(o), r();
      },
      ...n,
      children: [
        /* @__PURE__ */ h.jsx(Ko, {}),
        /* @__PURE__ */ h.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function hc({ className: e, ...t }) {
  return /* @__PURE__ */ h.jsx(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: X("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function gc({ className: e, ...t }) {
  return /* @__PURE__ */ h.jsx(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: X("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function Ic({ className: e, ...t }) {
  return /* @__PURE__ */ h.jsx(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: X(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        e
      ),
      ...t
    }
  );
}
function Fc({ className: e, ...t }) {
  return /* @__PURE__ */ h.jsx(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: X("relative flex w-full min-w-0 flex-col p-4", e),
      ...t
    }
  );
}
function vc({
  className: e,
  asChild: t = !1,
  ...n
}) {
  const r = t ? Kn : "div";
  return /* @__PURE__ */ h.jsx(
    r,
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: X(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        e
      ),
      ...n
    }
  );
}
const bc = ({
  userName: e = "",
  designation: t = "",
  userimg: n = "",
  isCollapse: r = !1,
  onLogout: o
}) => /* @__PURE__ */ h.jsx(h.Fragment, { children: /* @__PURE__ */ h.jsx(gc, { children: r ? "" : /* @__PURE__ */ h.jsxs("div", { className: "flex items-center gap-3 m-5 p-4 rounded-md bg-secondary/20", children: [
  /* @__PURE__ */ h.jsx(
    "img",
    {
      src: n,
      alt: "profile-image",
      className: "w-10 h-10 rounded-full object-cover"
    }
  ),
  /* @__PURE__ */ h.jsxs("div", { children: [
    /* @__PURE__ */ h.jsx("p", { className: "text-xl font-medium", children: e }),
    /* @__PURE__ */ h.jsx("p", { className: "text-xs text-gray-400 ", children: t })
  ] }),
  /* @__PURE__ */ h.jsx("div", { className: "ml-auto", children: /* @__PURE__ */ h.jsx(
    "button",
    {
      onClick: o,
      className: "p-2",
      children: /* @__PURE__ */ h.jsx(
        Yo,
        {
          size: 18,
          className: " text-primary cursor-pointer"
        }
      )
    }
  ) })
] }) }) }), Xe = mt.createContext({
  width: "270px",
  collapsewidth: "80px",
  textColor: "#8D939D",
  isCollapse: !1,
  themeColor: "#5d87ff",
  themeSecondaryColor: "#49beff",
  direction: "ltr"
});
let xc = () => {
  alert("Logout Successfully");
};
const $c = ({
  children: e,
  width: t = "270px",
  collapsewidth: n = "80px",
  textColor: r = "#2b2b2b",
  isCollapse: o = !1,
  themeColor: s = "#5d87ff",
  themeSecondaryColor: i = "#49beff",
  mode: a = "light",
  direction: l = "ltr",
  userName: c = "Mathew",
  designation: d = "Designer",
  showProfile: f = !0,
  userimg: m = "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-1.jpg",
  onLogout: g = xc
}) => {
  const v = o ? n : t, p = a === "dark" ? "dark" : "";
  return a === "dark" && (r = "rgba(255,255,255, 0.9)"), /* @__PURE__ */ h.jsx(
    Xe.Provider,
    {
      value: {
        width: t,
        collapsewidth: n,
        themeColor: s,
        textColor: r,
        themeSecondaryColor: i,
        direction: l,
        isCollapse: o
      },
      children: /* @__PURE__ */ h.jsx("div", { className: p, children: /* @__PURE__ */ h.jsxs(
        mc,
        {
          dir: l,
          style: { width: v, color: r },
          isCollapse: o,
          width: t,
          collapsewidth: n,
          collapsible: "icon",
          className: "border-r border-border ",
          children: [
            e,
            f && /* @__PURE__ */ h.jsx(
              bc,
              {
                userName: c,
                designation: d,
                userimg: m,
                isCollapse: o,
                onLogout: g
              }
            )
          ]
        }
      ) })
    }
  );
};
function bo({
  component: e = "a",
  children: t,
  ...n
}) {
  return /* @__PURE__ */ h.jsx(e, { ...n, style: { textDecoration: "none" }, children: t });
}
const zc = ({
  children: e,
  img: t = "https://tailwindadmin-nextjs-main.vercel.app/_next/static/media/dark-logo.7f45c7e7.svg",
  href: n = "/",
  component: r
}) => {
  const o = mt.useContext(Xe);
  return /* @__PURE__ */ h.jsx(hc, { children: /* @__PURE__ */ h.jsx(
    "div",
    {
      className: `min-h-[50px] overflow-hidden flex w-[253px] whitespace-nowrap  line-clamp-1 px-5 py-2  overflow-ellipsis ${o.direction === "rtl" ? " rtl:scale-x-[-1]" : ""}`,
      children: /* @__PURE__ */ h.jsx(
        bo,
        {
          href: n,
          component: r,
          to: n,
          className: `w-[40px] flex ${o.isCollapse ? "overflow-hidden" : "overflow-visible"}`,
          children: t ? /* @__PURE__ */ h.jsx("img", { src: t, alt: "Logo", style: { maxWidth: "unset" } }) : /* @__PURE__ */ h.jsx("span", { className: "text-gray-800", children: e })
        }
      )
    }
  ) });
}, Wc = ({ children: e, subHeading: t = "menu" }) => {
  const n = Ro(Xe);
  return /* @__PURE__ */ h.jsxs("div", { children: [
    /* @__PURE__ */ h.jsx(vc, { children: /* @__PURE__ */ h.jsx(
      "div",
      {
        className: "text-xs font-bold leading-5 py-1",
        style: { color: n.textColor },
        children: n.isCollapse ? "..." : t
      }
    ) }),
    /* @__PURE__ */ h.jsx("div", { className: "space-y-1", children: e })
  ] });
}, Bc = ({
  children: e,
  icon: t,
  component: n,
  badge: r = !1,
  badgeColor: o = "bg-primary",
  badgeTextColor: s = "",
  badgeContent: i = "New",
  textFontSize: a = "text-sm",
  borderRadius: l = "rounded-md",
  disabled: c = !1,
  badgeType: d = "filled",
  link: f = "/",
  target: m = "",
  isSelected: g = !1
}) => {
  const v = mt.useContext(Xe), p = v?.isCollapse;
  return /* @__PURE__ */ h.jsx(bo, { to: f, component: n, target: m, children: /* @__PURE__ */ h.jsxs(
    "div",
    {
      className: X(
        "flex items-center gap-3 w-full py-2.5 px-3 whitespace-nowrap mb-0.5 transition-colors duration-200 hover:bg-primary/20",
        l,
        c ? "cursor-not-allowed opacity-60" : "cursor-pointer",
        g ? "bg-primary text-white" : "text-muted-foreground bg-transparent"
      ),
      style: {
        backgroundColor: g ? v.themeColor : void 0,
        color: g ? "white" : v.textColor,
        justifyContent: v?.direction === "rtl" ? "flex-end" : "flex-start"
      },
      children: [
        /* @__PURE__ */ h.jsx(
          "div",
          {
            className: X(
              "flex items-center justify-center",
              !p && "min-w-[20px]"
            ),
            style: {
              color: g ? "#fff" : v.textColor
            },
            children: t ?? /* @__PURE__ */ h.jsx(Qn, { size: 18 })
          }
        ),
        !p && /* @__PURE__ */ h.jsxs("div", { className: "flex items-center justify-between w-full", children: [
          /* @__PURE__ */ h.jsx("span", { className: X(a, "leading-tight truncate"), children: e }),
          r && /* @__PURE__ */ h.jsx(
            "span",
            {
              className: X(
                "ml-auto px-2 py-0.5 rounded text-xs font-semibold",
                d === "outlined" ? "border border-border bg-transparent" : o !== "bg-secondary" ? o : "",
                s ?? (d === "outlined" ? "text-primary" : "")
              ),
              style: {
                backgroundColor: o === "bg-secondary" ? v.themeSecondaryColor : void 0,
                color: o === "bg-secondary" && s === void 0 && (d === "outlined" || o === void 0) ? v.textColor : void 0
              },
              children: i
            }
          )
        ] })
      ]
    }
  ) });
};
var St = "Collapsible", [yc, Vc] = ht(St), [wc, ln] = yc(St), xo = u.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: s,
      onOpenChange: i,
      ...a
    } = e, [l, c] = ur({
      prop: r,
      defaultProp: o ?? !1,
      onChange: i,
      caller: St
    });
    return /* @__PURE__ */ h.jsx(
      wc,
      {
        scope: n,
        disabled: s,
        contentId: st(),
        open: l,
        onOpenToggle: u.useCallback(() => c((d) => !d), [c]),
        children: /* @__PURE__ */ h.jsx(
          Z.div,
          {
            "data-state": un(l),
            "data-disabled": s ? "" : void 0,
            ...a,
            ref: t
          }
        )
      }
    );
  }
);
xo.displayName = St;
var yo = "CollapsibleTrigger", wo = u.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = ln(yo, n);
    return /* @__PURE__ */ h.jsx(
      Z.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": un(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: J(e.onClick, o.onOpenToggle)
      }
    );
  }
);
wo.displayName = yo;
var cn = "CollapsibleContent", Co = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = ln(cn, e.__scopeCollapsible);
    return /* @__PURE__ */ h.jsx(Fe, { present: n || o.open, children: ({ present: s }) => /* @__PURE__ */ h.jsx(Cc, { ...r, ref: t, present: s }) });
  }
);
Co.displayName = cn;
var Cc = u.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...s } = e, i = ln(cn, n), [a, l] = u.useState(r), c = u.useRef(null), d = ne(t, c), f = u.useRef(0), m = f.current, g = u.useRef(0), v = g.current, p = i.open || a, b = u.useRef(p), x = u.useRef(void 0);
  return u.useEffect(() => {
    const w = requestAnimationFrame(() => b.current = !1);
    return () => cancelAnimationFrame(w);
  }, []), pe(() => {
    const w = c.current;
    if (w) {
      x.current = x.current || {
        transitionDuration: w.style.transitionDuration,
        animationName: w.style.animationName
      }, w.style.transitionDuration = "0s", w.style.animationName = "none";
      const E = w.getBoundingClientRect();
      f.current = E.height, g.current = E.width, b.current || (w.style.transitionDuration = x.current.transitionDuration, w.style.animationName = x.current.animationName), l(r);
    }
  }, [i.open, r]), /* @__PURE__ */ h.jsx(
    Z.div,
    {
      "data-state": un(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
      hidden: !p,
      ...s,
      ref: d,
      style: {
        "--radix-collapsible-content-height": m ? `${m}px` : void 0,
        "--radix-collapsible-content-width": v ? `${v}px` : void 0,
        ...e.style
      },
      children: p && o
    }
  );
});
function un(e) {
  return e ? "open" : "closed";
}
var Ec = xo;
function Sc({
  ...e
}) {
  return /* @__PURE__ */ h.jsx(Ec, { "data-slot": "collapsible", ...e });
}
function Rc({
  ...e
}) {
  return /* @__PURE__ */ h.jsx(
    wo,
    {
      "data-slot": "collapsible-trigger",
      ...e
    }
  );
}
function kc({
  ...e
}) {
  return /* @__PURE__ */ h.jsx(
    Co,
    {
      "data-slot": "collapsible-content",
      ...e
    }
  );
}
function Hc({
  title: e,
  children: t,
  icon: n,
  textFontSize: r = "text-sm",
  disabled: o = !1,
  borderRadius: s = "rounded-md"
}) {
  const [i, a] = u.useState(!1), l = u.useContext(Xe);
  return /* @__PURE__ */ h.jsx("div", { className: "w-full", children: /* @__PURE__ */ h.jsxs(
    Sc,
    {
      open: i,
      onOpenChange: a,
      className: "flex  flex-col",
      children: [
        /* @__PURE__ */ h.jsx(Rc, { asChild: !0, children: /* @__PURE__ */ h.jsxs(
          "button",
          {
            disabled: o,
            onClick: () => a(!i),
            className: He(
              "flex items-center justify-between rounded-md  p-2.5 transition-colors ",
              s,
              {
                "cursor-not-allowed opacity-60 ": o,
                "cursor-pointer": !o,
                "justify-center px-3": l.isCollapse,
                "justify-between": !l.isCollapse
              }
            ),
            style: {
              color: i ? "#fff" : l?.textColor,
              backgroundColor: i ? l?.themeColor : void 0
            },
            children: [
              /* @__PURE__ */ h.jsxs("div", { className: "flex items-center gap-3 ", children: [
                /* @__PURE__ */ h.jsx("span", { className: "text-inherit", children: n || /* @__PURE__ */ h.jsx(Qn, { size: 20 }) }),
                !l?.isCollapse && /* @__PURE__ */ h.jsx("span", { className: He(r, "truncate leading-tight"), children: e })
              ] }),
              !l?.isCollapse && (i ? /* @__PURE__ */ h.jsx(Bo, { size: 16 }) : /* @__PURE__ */ h.jsx(Ho, { size: 16 }))
            ]
          }
        ) }),
        /* @__PURE__ */ h.jsx(
          kc,
          {
            className: He(
              "mt-1 flex flex-col space-y-1",
              l?.isCollapse && "items-center"
            ),
            children: t
          }
        )
      ]
    }
  ) });
}
export {
  zc as Logo,
  Wc as Menu,
  Bc as MenuItem,
  $c as Sidebar,
  Ic as SidebarContent,
  Fc as SidebarGroup,
  Dc as SidebarProvider,
  Lc as SidebarTrigger,
  Hc as Submenu,
  vo as useSidebar
};
