import * as u from "react";
import gt, { forwardRef as tr, createElement as zt, useState as Lo, useLayoutEffect as Io, useContext as nr } from "react";
import * as rr from "react-dom";
import Fo from "react-dom";
var Qe = { exports: {} }, Ve = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wn;
function $o() {
  if (wn) return Ve;
  wn = 1;
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
  return Ve.Fragment = t, Ve.jsx = n, Ve.jsxs = n, Ve;
}
var He = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cn;
function zo() {
  return Cn || (Cn = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(w) {
      if (w == null) return null;
      if (typeof w == "function")
        return w.$$typeof === z ? null : w.displayName || w.name || null;
      if (typeof w == "string") return w;
      switch (w) {
        case m:
          return "Fragment";
        case b:
          return "Profiler";
        case x:
          return "StrictMode";
        case R:
          return "Suspense";
        case O:
          return "SuspenseList";
        case M:
          return "Activity";
      }
      if (typeof w == "object")
        switch (typeof w.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), w.$$typeof) {
          case v:
            return "Portal";
          case C:
            return (w.displayName || "Context") + ".Provider";
          case y:
            return (w._context.displayName || "Context") + ".Consumer";
          case S:
            var N = w.render;
            return w = w.displayName, w || (w = N.displayName || N.name || "", w = w !== "" ? "ForwardRef(" + w + ")" : "ForwardRef"), w;
          case A:
            return N = w.displayName || null, N !== null ? N : e(w.type) || "Memo";
          case k:
            N = w._payload, w = w._init;
            try {
              return e(w(N));
            } catch {
            }
        }
      return null;
    }
    function t(w) {
      return "" + w;
    }
    function n(w) {
      try {
        t(w);
        var N = !1;
      } catch {
        N = !0;
      }
      if (N) {
        N = console;
        var F = N.error, j = typeof Symbol == "function" && Symbol.toStringTag && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return F.call(
          N,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          j
        ), t(w);
      }
    }
    function r(w) {
      if (w === m) return "<>";
      if (typeof w == "object" && w !== null && w.$$typeof === k)
        return "<...>";
      try {
        var N = e(w);
        return N ? "<" + N + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var w = U.A;
      return w === null ? null : w.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(w) {
      if (H.call(w, "key")) {
        var N = Object.getOwnPropertyDescriptor(w, "key").get;
        if (N && N.isReactWarning) return !1;
      }
      return w.key !== void 0;
    }
    function a(w, N) {
      function F() {
        G || (G = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          N
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(w, "key", {
        get: F,
        configurable: !0
      });
    }
    function l() {
      var w = e(this.type);
      return D[w] || (D[w] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), w = this.props.ref, w !== void 0 ? w : null;
    }
    function c(w, N, F, j, V, q, ge, $) {
      return F = q.ref, w = {
        $$typeof: h,
        type: w,
        key: N,
        props: q,
        _owner: V
      }, (F !== void 0 ? F : null) !== null ? Object.defineProperty(w, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(w, "ref", { enumerable: !1, value: null }), w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(w, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(w, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ge
      }), Object.defineProperty(w, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    }
    function d(w, N, F, j, V, q, ge, $) {
      var X = N.children;
      if (X !== void 0)
        if (j)
          if (B(X)) {
            for (j = 0; j < X.length; j++)
              f(X[j]);
            Object.freeze && Object.freeze(X);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(X);
      if (H.call(N, "key")) {
        X = e(w);
        var Q = Object.keys(N).filter(function(Ce) {
          return Ce !== "key";
        });
        j = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", Y[X + j] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          j,
          X,
          Q,
          X
        ), Y[X + j] = !0);
      }
      if (X = null, F !== void 0 && (n(F), X = "" + F), i(N) && (n(N.key), X = "" + N.key), "key" in N) {
        F = {};
        for (var ie in N)
          ie !== "key" && (F[ie] = N[ie]);
      } else F = N;
      return X && a(
        F,
        typeof w == "function" ? w.displayName || w.name || "Unknown" : w
      ), c(
        w,
        X,
        q,
        V,
        o(),
        F,
        ge,
        $
      );
    }
    function f(w) {
      typeof w == "object" && w !== null && w.$$typeof === h && w._store && (w._store.validated = 1);
    }
    var g = gt, h = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), C = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), M = Symbol.for("react.activity"), z = Symbol.for("react.client.reference"), U = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, B = Array.isArray, I = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(w) {
        return w();
      }
    };
    var G, D = {}, L = g.react_stack_bottom_frame.bind(
      g,
      s
    )(), E = I(r(s)), Y = {};
    He.Fragment = m, He.jsx = function(w, N, F, j, V) {
      var q = 1e4 > U.recentlyCreatedOwnerStacks++;
      return d(
        w,
        N,
        F,
        !1,
        j,
        V,
        q ? Error("react-stack-top-frame") : L,
        q ? I(r(w)) : E
      );
    }, He.jsxs = function(w, N, F, j, V) {
      var q = 1e4 > U.recentlyCreatedOwnerStacks++;
      return d(
        w,
        N,
        F,
        !0,
        j,
        V,
        q ? Error("react-stack-top-frame") : L,
        q ? I(r(w)) : E
      );
    };
  })()), He;
}
var En;
function Wo() {
  return En || (En = 1, process.env.NODE_ENV === "production" ? Qe.exports = $o() : Qe.exports = zo()), Qe.exports;
}
var p = Wo();
function Sn(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function or(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = Sn(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : Sn(e[o], null);
        }
      };
  };
}
function ne(...e) {
  return u.useCallback(or(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
  const t = /* @__PURE__ */ Bo(e), n = u.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = u.Children.toArray(s), l = a.find(Ho);
    if (l) {
      const c = l.props.children, d = a.map((f) => f === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : f);
      return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var vt = /* @__PURE__ */ Zt("Slot");
// @__NO_SIDE_EFFECTS__
function Bo(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (u.isValidElement(o)) {
      const i = Uo(o), a = Go(s, o.props);
      return o.type !== u.Fragment && (a.ref = r ? or(r, i) : i), u.cloneElement(o, a);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var sr = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Vo(e) {
  const t = ({ children: n }) => /* @__PURE__ */ p.jsx(p.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = sr, t;
}
function Ho(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === sr;
}
function Go(e, t) {
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
function Uo(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function ir(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ir(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function xe() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ir(e)) && (r && (r += " "), r += t);
  return r;
}
const Rn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, kn = xe, Jt = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return kn(e, n?.class, n?.className);
  const { variants: o, defaultVariants: s } = t, i = Object.keys(o).map((c) => {
    const d = n?.[c], f = s?.[c];
    if (d === null) return null;
    const g = Rn(d) || Rn(f);
    return o[c][g];
  }), a = n && Object.entries(n).reduce((c, d) => {
    let [f, g] = d;
    return g === void 0 || (c[f] = g), c;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, d) => {
    let { class: f, className: g, ...h } = d;
    return Object.entries(h).every((v) => {
      let [m, x] = v;
      return Array.isArray(x) ? x.includes({
        ...s,
        ...a
      }[m]) : {
        ...s,
        ...a
      }[m] === x;
    }) ? [
      ...c,
      f,
      g
    ] : c;
  }, []);
  return kn(e, i, l, n?.class, n?.className);
};
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yo = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Xo = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), An = (e) => {
  const t = Xo(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, ar = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), Ko = (e) => {
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
var qo = {
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
const Zo = tr(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: s,
    iconNode: i,
    ...a
  }, l) => zt(
    "svg",
    {
      ref: l,
      ...qo,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: ar("lucide", o),
      ...!s && !Ko(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...i.map(([c, d]) => zt(c, d)),
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
const Ie = (e, t) => {
  const n = tr(
    ({ className: r, ...o }, s) => zt(Zo, {
      ref: s,
      iconNode: t,
      className: ar(
        `lucide-${Yo(An(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = An(e), n;
};
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jo = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Qo = Ie("chevron-down", Jo);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], ts = Ie("chevron-right", es);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
], lr = Ie("circle-dot", ns);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rs = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
], os = Ie("log-out", rs);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
], is = Ie("panel-left", ss);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const as = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ls = Ie("x", as), Pt = 768;
function cs() {
  const [e, t] = u.useState(void 0);
  return u.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${Pt - 1}px)`), r = () => {
      t(window.innerWidth < Pt);
    };
    return n.addEventListener("change", r), t(window.innerWidth < Pt), () => n.removeEventListener("change", r);
  }, []), !!e;
}
const Qt = "-", us = (e) => {
  const t = fs(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(Qt);
      return a[0] === "" && a.length !== 1 && a.shift(), cr(a, t) || ds(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const l = n[i] || [];
      return a && r[i] ? [...l, ...r[i]] : l;
    }
  };
}, cr = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? cr(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(Qt);
  return t.validators.find(({
    validator: i
  }) => i(s))?.classGroupId;
}, Pn = /^\[(.+)\]$/, ds = (e) => {
  if (Pn.test(e)) {
    const t = Pn.exec(e)[1], n = t?.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, fs = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    Wt(n[o], r, o, t);
  return r;
}, Wt = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Tn(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (ps(o)) {
        Wt(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      Wt(i, Tn(t, s), n, r);
    });
  });
}, Tn = (e, t) => {
  let n = e;
  return t.split(Qt).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, ps = (e) => e.isThemeGetter, ms = (e) => {
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
}, Bt = "!", Vt = ":", hs = Vt.length, gs = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const s = [];
    let i = 0, a = 0, l = 0, c;
    for (let v = 0; v < o.length; v++) {
      let m = o[v];
      if (i === 0 && a === 0) {
        if (m === Vt) {
          s.push(o.slice(l, v)), l = v + hs;
          continue;
        }
        if (m === "/") {
          c = v;
          continue;
        }
      }
      m === "[" ? i++ : m === "]" ? i-- : m === "(" ? a++ : m === ")" && a--;
    }
    const d = s.length === 0 ? o : o.substring(l), f = vs(d), g = f !== d, h = c && c > l ? c - l : void 0;
    return {
      modifiers: s,
      hasImportantModifier: g,
      baseClassName: f,
      maybePostfixModifierPosition: h
    };
  };
  if (t) {
    const o = t + Vt, s = r;
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
}, vs = (e) => e.endsWith(Bt) ? e.substring(0, e.length - 1) : e.startsWith(Bt) ? e.substring(1) : e, bs = (e) => {
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
}, xs = (e) => ({
  cache: ms(e.cacheSize),
  parseClassName: gs(e),
  sortModifiers: bs(e),
  ...us(e)
}), ys = /\s+/, ws = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, i = [], a = e.trim().split(ys);
  let l = "";
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const d = a[c], {
      isExternal: f,
      modifiers: g,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: m
    } = n(d);
    if (f) {
      l = d + (l.length > 0 ? " " + l : l);
      continue;
    }
    let x = !!m, b = r(x ? v.substring(0, m) : v);
    if (!b) {
      if (!x) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (b = r(v), !b) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      x = !1;
    }
    const y = s(g).join(":"), C = h ? y + Bt : y, S = C + b;
    if (i.includes(S))
      continue;
    i.push(S);
    const R = o(b, x);
    for (let O = 0; O < R.length; ++O) {
      const A = R[O];
      i.push(C + A);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Cs() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = ur(t)) && (r && (r += " "), r += n);
  return r;
}
const ur = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = ur(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Es(e, ...t) {
  let n, r, o, s = i;
  function i(l) {
    const c = t.reduce((d, f) => f(d), e());
    return n = xs(c), r = n.cache.get, o = n.cache.set, s = a, a(l);
  }
  function a(l) {
    const c = r(l);
    if (c)
      return c;
    const d = ws(l, n);
    return o(l, d), d;
  }
  return function() {
    return s(Cs.apply(null, arguments));
  };
}
const K = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, dr = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, fr = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Ss = /^\d+\/\d+$/, Rs = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ks = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, As = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Ps = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ts = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Pe = (e) => Ss.test(e), _ = (e) => !!e && !Number.isNaN(Number(e)), ve = (e) => !!e && Number.isInteger(Number(e)), Tt = (e) => e.endsWith("%") && _(e.slice(0, -1)), fe = (e) => Rs.test(e), Os = () => !0, Ns = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ks.test(e) && !As.test(e)
), pr = () => !1, _s = (e) => Ps.test(e), js = (e) => Ts.test(e), Ms = (e) => !P(e) && !T(e), Ds = (e) => Fe(e, gr, pr), P = (e) => dr.test(e), Ee = (e) => Fe(e, vr, Ns), Ot = (e) => Fe(e, zs, _), On = (e) => Fe(e, mr, pr), Ls = (e) => Fe(e, hr, js), et = (e) => Fe(e, br, _s), T = (e) => fr.test(e), Ge = (e) => $e(e, vr), Is = (e) => $e(e, Ws), Nn = (e) => $e(e, mr), Fs = (e) => $e(e, gr), $s = (e) => $e(e, hr), tt = (e) => $e(e, br, !0), Fe = (e, t, n) => {
  const r = dr.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, $e = (e, t, n = !1) => {
  const r = fr.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, mr = (e) => e === "position" || e === "percentage", hr = (e) => e === "image" || e === "url", gr = (e) => e === "length" || e === "size" || e === "bg-size", vr = (e) => e === "length", zs = (e) => e === "number", Ws = (e) => e === "family-name", br = (e) => e === "shadow", Bs = () => {
  const e = K("color"), t = K("font"), n = K("text"), r = K("font-weight"), o = K("tracking"), s = K("leading"), i = K("breakpoint"), a = K("container"), l = K("spacing"), c = K("radius"), d = K("shadow"), f = K("inset-shadow"), g = K("text-shadow"), h = K("drop-shadow"), v = K("blur"), m = K("perspective"), x = K("aspect"), b = K("ease"), y = K("animate"), C = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
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
  ], R = () => [...S(), T, P], O = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", "contain", "none"], k = () => [T, P, l], M = () => [Pe, "full", "auto", ...k()], z = () => [ve, "none", "subgrid", T, P], U = () => ["auto", {
    span: ["full", ve, T, P]
  }, ve, T, P], H = () => [ve, "auto", T, P], B = () => ["auto", "min", "max", "fr", T, P], I = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], G = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], D = () => ["auto", ...k()], L = () => [Pe, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...k()], E = () => [e, T, P], Y = () => [...S(), Nn, On, {
    position: [T, P]
  }], w = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], N = () => ["auto", "cover", "contain", Fs, Ds, {
    size: [T, P]
  }], F = () => [Tt, Ge, Ee], j = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    T,
    P
  ], V = () => ["", _, Ge, Ee], q = () => ["solid", "dashed", "dotted", "double"], ge = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], $ = () => [_, Tt, Nn, On], X = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    T,
    P
  ], Q = () => ["none", _, T, P], ie = () => ["none", _, T, P], Ce = () => [_, T, P], Ae = () => [Pe, "full", ...k()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [fe],
      breakpoint: [fe],
      color: [Os],
      container: [fe],
      "drop-shadow": [fe],
      ease: ["in", "out", "in-out"],
      font: [Ms],
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
        aspect: ["auto", "square", Pe, P, T, x]
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
        columns: [_, P, T, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": C()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": C()
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
        object: R()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: O()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": O()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": O()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: A()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": A()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": A()
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
        inset: M()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": M()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": M()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: M()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: M()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: M()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: M()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: M()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: M()
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
        z: [ve, "auto", T, P]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Pe, "full", "auto", a, ...k()]
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
        flex: [_, Pe, "auto", "initial", "none", P]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", _, T, P]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", _, T, P]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ve, "first", "last", "none", T, P]
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
        col: U()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": H()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": H()
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
        row: U()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": H()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": H()
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
        "auto-cols": B()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": B()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: k()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": k()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": k()
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
        "justify-items": [...G(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...G()]
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
        items: [...G(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...G(), {
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
        "place-items": [...G(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...G()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: k()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: k()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: k()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: k()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: k()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: k()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: k()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: k()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: k()
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
        "space-x": k()
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
        "space-y": k()
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
        text: ["base", n, Ge, Ee]
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
        font: [r, T, Ot]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Tt, P]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Is, P, t]
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
        tracking: [o, T, P]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [_, "none", T, Ot]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...k()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", T, P]
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
        list: ["disc", "decimal", "none", T, P]
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
        placeholder: E()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: E()
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
        decoration: [_, "from-font", "auto", T, Ee]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: E()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [_, "auto", T, P]
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
        indent: k()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", T, P]
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
        content: ["none", T, P]
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
        bg: Y()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: w()
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
          }, ve, T, P],
          radial: ["", T, P],
          conic: [ve, T, P]
        }, $s, Ls]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: E()
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
        from: E()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: E()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: E()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: j()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": j()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": j()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": j()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": j()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": j()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": j()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": j()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": j()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": j()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": j()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": j()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": j()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": j()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": j()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: V()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": V()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": V()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": V()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": V()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": V()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": V()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": V()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": V()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": V()
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
        "divide-y": V()
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
        border: E()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": E()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": E()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": E()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": E()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": E()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": E()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": E()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": E()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: E()
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
        "outline-offset": [_, T, P]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", _, Ge, Ee]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: E()
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
          tt,
          et
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: E()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, tt, et]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": E()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: V()
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
        ring: E()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [_, Ee]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": E()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": V()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": E()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", g, tt, et]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": E()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [_, T, P]
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
        "mask-linear-from": E()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": E()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": $()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": $()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": E()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": E()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": $()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": $()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": E()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": E()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": $()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": $()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": E()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": E()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": $()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": $()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": E()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": E()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": $()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": $()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": E()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": E()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": $()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": $()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": E()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": E()
      }],
      "mask-image-radial": [{
        "mask-radial": [T, P]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": $()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": $()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": E()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": E()
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
        "mask-conic-from": E()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": E()
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
        mask: Y()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: w()
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
        mask: ["none", T, P]
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
          T,
          P
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: X()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [_, T, P]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [_, T, P]
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
          h,
          tt,
          et
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": E()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", _, T, P]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [_, T, P]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", _, T, P]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [_, T, P]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", _, T, P]
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
          T,
          P
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": X()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [_, T, P]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [_, T, P]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", _, T, P]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [_, T, P]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", _, T, P]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [_, T, P]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [_, T, P]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", _, T, P]
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
        "border-spacing": k()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": k()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": k()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", T, P]
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
        duration: [_, "initial", T, P]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", b, T, P]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [_, T, P]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, T, P]
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
        perspective: [m, T, P]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": R()
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
        skew: Ce()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Ce()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Ce()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [T, P, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: R()
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
        translate: Ae()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Ae()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Ae()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Ae()
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
        accent: E()
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
        caret: E()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", T, P]
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
        "scroll-m": k()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": k()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": k()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": k()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": k()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": k()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": k()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": k()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": k()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": k()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": k()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": k()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": k()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": k()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": k()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": k()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": k()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": k()
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
        "will-change": ["auto", "scroll", "contents", "transform", T, P]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...E()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [_, Ge, Ee, Ot]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...E()]
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
}, Vs = /* @__PURE__ */ Es(Bs);
function W(...e) {
  return Vs(xe(e));
}
const Hs = Jt(
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
function Gs({
  className: e,
  variant: t,
  size: n,
  asChild: r = !1,
  ...o
}) {
  const s = r ? vt : "button";
  return /* @__PURE__ */ p.jsx(
    s,
    {
      "data-slot": "button",
      className: W(Hs({ variant: t, size: n, className: e })),
      ...o
    }
  );
}
var Us = [
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
], Z = Us.reduce((e, t) => {
  const n = /* @__PURE__ */ Zt(`Primitive.${t}`), r = u.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Ys(e, t) {
  e && rr.flushSync(() => e.dispatchEvent(t));
}
function J(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
function Xs(e, t) {
  const n = u.createContext(t), r = (s) => {
    const { children: i, ...a } = s, l = u.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ p.jsx(n.Provider, { value: l, children: i });
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
function bt(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = u.createContext(i), l = n.length;
    n = [...n, i];
    const c = (f) => {
      const { scope: g, children: h, ...v } = f, m = g?.[e]?.[l] || a, x = u.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ p.jsx(m.Provider, { value: x, children: h });
    };
    c.displayName = s + "Provider";
    function d(f, g) {
      const h = g?.[e]?.[l] || a, v = u.useContext(h);
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
  return o.scopeName = e, [r, Ks(o, ...t)];
}
function Ks(...e) {
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
}, qs = u[" useId ".trim().toString()] || (() => {
}), Zs = 0;
function Ue(e) {
  const [t, n] = u.useState(qs());
  return pe(() => {
    n((r) => r ?? String(Zs++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var Js = u[" useInsertionEffect ".trim().toString()] || pe;
function en({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, i] = Qs({
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
        const f = ei(d) ? d(e) : d;
        f !== e && i.current?.(f);
      } else
        s(d);
    },
    [a, e, s, i]
  );
  return [l, c];
}
function Qs({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), o = u.useRef(n), s = u.useRef(t);
  return Js(() => {
    s.current = t;
  }, [t]), u.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
function ei(e) {
  return typeof e == "function";
}
function Me(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => t.current?.(...n), []);
}
function ti(e, t = globalThis?.document) {
  const n = Me(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var ni = "DismissableLayer", Ht = "dismissableLayer.update", ri = "dismissableLayer.pointerDownOutside", oi = "dismissableLayer.focusOutside", _n, xr = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), tn = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...l
    } = e, c = u.useContext(xr), [d, f] = u.useState(null), g = d?.ownerDocument ?? globalThis?.document, [, h] = u.useState({}), v = ne(t, (A) => f(A)), m = Array.from(c.layers), [x] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), b = m.indexOf(x), y = d ? m.indexOf(d) : -1, C = c.layersWithOutsidePointerEventsDisabled.size > 0, S = y >= b, R = ai((A) => {
      const k = A.target, M = [...c.branches].some((z) => z.contains(k));
      !S || M || (o?.(A), i?.(A), A.defaultPrevented || a?.());
    }, g), O = li((A) => {
      const k = A.target;
      [...c.branches].some((z) => z.contains(k)) || (s?.(A), i?.(A), A.defaultPrevented || a?.());
    }, g);
    return ti((A) => {
      y === c.layers.size - 1 && (r?.(A), !A.defaultPrevented && a && (A.preventDefault(), a()));
    }, g), u.useEffect(() => {
      if (d)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (_n = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), jn(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = _n);
        };
    }, [d, g, n, c]), u.useEffect(() => () => {
      d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), jn());
    }, [d, c]), u.useEffect(() => {
      const A = () => h({});
      return document.addEventListener(Ht, A), () => document.removeEventListener(Ht, A);
    }, []), /* @__PURE__ */ p.jsx(
      Z.div,
      {
        ...l,
        ref: v,
        style: {
          pointerEvents: C ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: J(e.onFocusCapture, O.onFocusCapture),
        onBlurCapture: J(e.onBlurCapture, O.onBlurCapture),
        onPointerDownCapture: J(
          e.onPointerDownCapture,
          R.onPointerDownCapture
        )
      }
    );
  }
);
tn.displayName = ni;
var si = "DismissableLayerBranch", ii = u.forwardRef((e, t) => {
  const n = u.useContext(xr), r = u.useRef(null), o = ne(t, r);
  return u.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ p.jsx(Z.div, { ...e, ref: o });
});
ii.displayName = si;
function ai(e, t = globalThis?.document) {
  const n = Me(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          yr(
            ri,
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
function li(e, t = globalThis?.document) {
  const n = Me(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && yr(oi, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function jn() {
  const e = new CustomEvent(Ht);
  document.dispatchEvent(e);
}
function yr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ys(o, s) : o.dispatchEvent(s);
}
var Nt = "focusScope.autoFocusOnMount", _t = "focusScope.autoFocusOnUnmount", Mn = { bubbles: !1, cancelable: !0 }, ci = "FocusScope", wr = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = u.useState(null), c = Me(o), d = Me(s), f = u.useRef(null), g = ne(t, (m) => l(m)), h = u.useRef({
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
      let m = function(C) {
        if (h.paused || !a) return;
        const S = C.target;
        a.contains(S) ? f.current = S : be(f.current, { select: !0 });
      }, x = function(C) {
        if (h.paused || !a) return;
        const S = C.relatedTarget;
        S !== null && (a.contains(S) || be(f.current, { select: !0 }));
      }, b = function(C) {
        if (document.activeElement === document.body)
          for (const R of C)
            R.removedNodes.length > 0 && be(a);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", x);
      const y = new MutationObserver(b);
      return a && y.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", x), y.disconnect();
      };
    }
  }, [r, a, h.paused]), u.useEffect(() => {
    if (a) {
      Ln.add(h);
      const m = document.activeElement;
      if (!a.contains(m)) {
        const b = new CustomEvent(Nt, Mn);
        a.addEventListener(Nt, c), a.dispatchEvent(b), b.defaultPrevented || (ui(hi(Cr(a)), { select: !0 }), document.activeElement === m && be(a));
      }
      return () => {
        a.removeEventListener(Nt, c), setTimeout(() => {
          const b = new CustomEvent(_t, Mn);
          a.addEventListener(_t, d), a.dispatchEvent(b), b.defaultPrevented || be(m ?? document.body, { select: !0 }), a.removeEventListener(_t, d), Ln.remove(h);
        }, 0);
      };
    }
  }, [a, c, d, h]);
  const v = u.useCallback(
    (m) => {
      if (!n && !r || h.paused) return;
      const x = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, b = document.activeElement;
      if (x && b) {
        const y = m.currentTarget, [C, S] = di(y);
        C && S ? !m.shiftKey && b === S ? (m.preventDefault(), n && be(C, { select: !0 })) : m.shiftKey && b === C && (m.preventDefault(), n && be(S, { select: !0 })) : b === y && m.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ p.jsx(Z.div, { tabIndex: -1, ...i, ref: g, onKeyDown: v });
});
wr.displayName = ci;
function ui(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (be(r, { select: t }), document.activeElement !== n) return;
}
function di(e) {
  const t = Cr(e), n = Dn(t, e), r = Dn(t.reverse(), e);
  return [n, r];
}
function Cr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Dn(e, t) {
  for (const n of e)
    if (!fi(n, { upTo: t })) return n;
}
function fi(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function pi(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function be(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && pi(e) && t && e.select();
  }
}
var Ln = mi();
function mi() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = In(e, t), e.unshift(t);
    },
    remove(t) {
      e = In(e, t), e[0]?.resume();
    }
  };
}
function In(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function hi(e) {
  return e.filter((t) => t.tagName !== "A");
}
var gi = "Portal", nn = u.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, s] = u.useState(!1);
  pe(() => s(!0), []);
  const i = n || o && globalThis?.document?.body;
  return i ? Fo.createPortal(/* @__PURE__ */ p.jsx(Z.div, { ...r, ref: t }), i) : null;
});
nn.displayName = gi;
function vi(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var ke = (e) => {
  const { present: t, children: n } = e, r = bi(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), s = ne(r.ref, xi(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: s }) : null;
};
ke.displayName = "Presence";
function bi(e) {
  const [t, n] = u.useState(), r = u.useRef(null), o = u.useRef(e), s = u.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = vi(i, {
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
    const c = nt(r.current);
    s.current = a === "mounted" ? c : "none";
  }, [a]), pe(() => {
    const c = r.current, d = o.current;
    if (d !== e) {
      const g = s.current, h = nt(c);
      e ? l("MOUNT") : h === "none" || c?.display === "none" ? l("UNMOUNT") : l(d && g !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), pe(() => {
    if (t) {
      let c;
      const d = t.ownerDocument.defaultView ?? window, f = (h) => {
        const m = nt(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && m && (l("ANIMATION_END"), !o.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, g = (h) => {
        h.target === t && (s.current = nt(r.current));
      };
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        d.clearTimeout(c), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
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
function nt(e) {
  return e?.animationName || "none";
}
function xi(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var jt = 0;
function yi() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Fn()), document.body.insertAdjacentElement("beforeend", e[1] ?? Fn()), jt++, () => {
      jt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), jt--;
    };
  }, []);
}
function Fn() {
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
function Er(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function wi(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var lt = "right-scroll-bar-position", ct = "width-before-scroll-bar", Ci = "with-scroll-bars-hidden", Ei = "--removed-body-scroll-bar-size";
function Mt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Si(e, t) {
  var n = Lo(function() {
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
var Ri = typeof window < "u" ? u.useLayoutEffect : u.useEffect, $n = /* @__PURE__ */ new WeakMap();
function ki(e, t) {
  var n = Si(null, function(r) {
    return e.forEach(function(o) {
      return Mt(o, r);
    });
  });
  return Ri(function() {
    var r = $n.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || Mt(a, null);
      }), s.forEach(function(a) {
        o.has(a) || Mt(a, i);
      });
    }
    $n.set(n, e);
  }, [e]), n;
}
function Ai(e) {
  return e;
}
function Pi(e, t) {
  t === void 0 && (t = Ai);
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
function Ti(e) {
  e === void 0 && (e = {});
  var t = Pi(null);
  return t.options = ae({ async: !0, ssr: !1 }, e), t;
}
var Sr = function(e) {
  var t = e.sideCar, n = Er(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, ae({}, n));
};
Sr.isSideCarExport = !0;
function Oi(e, t) {
  return e.useMedium(t), Sr;
}
var Rr = Ti(), Dt = function() {
}, xt = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: Dt,
    onWheelCapture: Dt,
    onTouchMoveCapture: Dt
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, d = e.enabled, f = e.shards, g = e.sideCar, h = e.noRelative, v = e.noIsolation, m = e.inert, x = e.allowPinchZoom, b = e.as, y = b === void 0 ? "div" : b, C = e.gapMode, S = Er(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = g, O = ki([n, t]), A = ae(ae({}, S), o);
  return u.createElement(
    u.Fragment,
    null,
    d && u.createElement(R, { sideCar: Rr, removeScrollBar: c, shards: f, noRelative: h, noIsolation: v, inert: m, setCallbacks: s, allowPinchZoom: !!x, lockRef: n, gapMode: C }),
    i ? u.cloneElement(u.Children.only(a), ae(ae({}, A), { ref: O })) : u.createElement(y, ae({}, A, { className: l, ref: O }), a)
  );
});
xt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
xt.classNames = {
  fullWidth: ct,
  zeroRight: lt
};
var Ni = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function _i() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Ni();
  return t && e.setAttribute("nonce", t), e;
}
function ji(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Mi(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Di = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = _i()) && (ji(t, n), Mi(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Li = function() {
  var e = Di();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, kr = function() {
  var e = Li(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Ii = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Lt = function(e) {
  return parseInt(e || "", 10) || 0;
}, Fi = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Lt(n), Lt(r), Lt(o)];
}, $i = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Ii;
  var t = Fi(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, zi = kr(), _e = "data-scroll-locked", Wi = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Ci, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(_e, `] {
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
  
  .`).concat(lt, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(ct, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(lt, " .").concat(lt, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ct, " .").concat(ct, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(_e, `] {
    `).concat(Ei, ": ").concat(a, `px;
  }
`);
}, zn = function() {
  var e = parseInt(document.body.getAttribute(_e) || "0", 10);
  return isFinite(e) ? e : 0;
}, Bi = function() {
  u.useEffect(function() {
    return document.body.setAttribute(_e, (zn() + 1).toString()), function() {
      var e = zn() - 1;
      e <= 0 ? document.body.removeAttribute(_e) : document.body.setAttribute(_e, e.toString());
    };
  }, []);
}, Vi = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Bi();
  var s = u.useMemo(function() {
    return $i(o);
  }, [o]);
  return u.createElement(zi, { styles: Wi(s, !t, o, n ? "" : "!important") });
}, Gt = !1;
if (typeof window < "u")
  try {
    var rt = Object.defineProperty({}, "passive", {
      get: function() {
        return Gt = !0, !0;
      }
    });
    window.addEventListener("test", rt, rt), window.removeEventListener("test", rt, rt);
  } catch {
    Gt = !1;
  }
var Te = Gt ? { passive: !1 } : !1, Hi = function(e) {
  return e.tagName === "TEXTAREA";
}, Ar = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Hi(e) && n[t] === "visible")
  );
}, Gi = function(e) {
  return Ar(e, "overflowY");
}, Ui = function(e) {
  return Ar(e, "overflowX");
}, Wn = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Pr(e, r);
    if (o) {
      var s = Tr(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Yi = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Xi = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Pr = function(e, t) {
  return e === "v" ? Gi(t) : Ui(t);
}, Tr = function(e, t) {
  return e === "v" ? Yi(t) : Xi(t);
}, Ki = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, qi = function(e, t, n, r, o) {
  var s = Ki(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, l = t.contains(a), c = !1, d = i > 0, f = 0, g = 0;
  do {
    if (!a)
      break;
    var h = Tr(e, a), v = h[0], m = h[1], x = h[2], b = m - x - s * v;
    (v || b) && Pr(e, a) && (f += b, g += v);
    var y = a.parentNode;
    a = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (d && Math.abs(f) < 1 || !d && Math.abs(g) < 1) && (c = !0), c;
}, ot = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Bn = function(e) {
  return [e.deltaX, e.deltaY];
}, Vn = function(e) {
  return e && "current" in e ? e.current : e;
}, Zi = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Ji = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Qi = 0, Oe = [];
function ea(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(Qi++)[0], s = u.useState(kr)[0], i = u.useRef(e);
  u.useEffect(function() {
    i.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = wi([e.lockRef.current], (e.shards || []).map(Vn), !0).filter(Boolean);
      return m.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = u.useCallback(function(m, x) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !i.current.allowPinchZoom;
    var b = ot(m), y = n.current, C = "deltaX" in m ? m.deltaX : y[0] - b[0], S = "deltaY" in m ? m.deltaY : y[1] - b[1], R, O = m.target, A = Math.abs(C) > Math.abs(S) ? "h" : "v";
    if ("touches" in m && A === "h" && O.type === "range")
      return !1;
    var k = Wn(A, O);
    if (!k)
      return !0;
    if (k ? R = A : (R = A === "v" ? "h" : "v", k = Wn(A, O)), !k)
      return !1;
    if (!r.current && "changedTouches" in m && (C || S) && (r.current = R), !R)
      return !0;
    var M = r.current || R;
    return qi(M, x, m, M === "h" ? C : S);
  }, []), l = u.useCallback(function(m) {
    var x = m;
    if (!(!Oe.length || Oe[Oe.length - 1] !== s)) {
      var b = "deltaY" in x ? Bn(x) : ot(x), y = t.current.filter(function(R) {
        return R.name === x.type && (R.target === x.target || x.target === R.shadowParent) && Zi(R.delta, b);
      })[0];
      if (y && y.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!y) {
        var C = (i.current.shards || []).map(Vn).filter(Boolean).filter(function(R) {
          return R.contains(x.target);
        }), S = C.length > 0 ? a(x, C[0]) : !i.current.noIsolation;
        S && x.cancelable && x.preventDefault();
      }
    }
  }, []), c = u.useCallback(function(m, x, b, y) {
    var C = { name: m, delta: x, target: b, should: y, shadowParent: ta(b) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== C;
      });
    }, 1);
  }, []), d = u.useCallback(function(m) {
    n.current = ot(m), r.current = void 0;
  }, []), f = u.useCallback(function(m) {
    c(m.type, Bn(m), m.target, a(m, e.lockRef.current));
  }, []), g = u.useCallback(function(m) {
    c(m.type, ot(m), m.target, a(m, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return Oe.push(s), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: g
    }), document.addEventListener("wheel", l, Te), document.addEventListener("touchmove", l, Te), document.addEventListener("touchstart", d, Te), function() {
      Oe = Oe.filter(function(m) {
        return m !== s;
      }), document.removeEventListener("wheel", l, Te), document.removeEventListener("touchmove", l, Te), document.removeEventListener("touchstart", d, Te);
    };
  }, []);
  var h = e.removeScrollBar, v = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    v ? u.createElement(s, { styles: Ji(o) }) : null,
    h ? u.createElement(Vi, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function ta(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const na = Oi(Rr, ea);
var Or = u.forwardRef(function(e, t) {
  return u.createElement(xt, ae({}, e, { ref: t, sideCar: na }));
});
Or.classNames = xt.classNames;
var ra = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ne = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakMap(), it = {}, It = 0, Nr = function(e) {
  return e && (e.host || Nr(e.parentNode));
}, oa = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Nr(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, sa = function(e, t, n, r) {
  var o = oa(t, Array.isArray(e) ? e : [e]);
  it[n] || (it[n] = /* @__PURE__ */ new WeakMap());
  var s = it[n], i = [], a = /* @__PURE__ */ new Set(), l = new Set(o), c = function(f) {
    !f || a.has(f) || (a.add(f), c(f.parentNode));
  };
  o.forEach(c);
  var d = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(g) {
      if (a.has(g))
        d(g);
      else
        try {
          var h = g.getAttribute(r), v = h !== null && h !== "false", m = (Ne.get(g) || 0) + 1, x = (s.get(g) || 0) + 1;
          Ne.set(g, m), s.set(g, x), i.push(g), m === 1 && v && st.set(g, !0), x === 1 && g.setAttribute(n, "true"), v || g.setAttribute(r, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", g, b);
        }
    });
  };
  return d(t), a.clear(), It++, function() {
    i.forEach(function(f) {
      var g = Ne.get(f) - 1, h = s.get(f) - 1;
      Ne.set(f, g), s.set(f, h), g || (st.has(f) || f.removeAttribute(r), st.delete(f)), h || f.removeAttribute(n);
    }), It--, It || (Ne = /* @__PURE__ */ new WeakMap(), Ne = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakMap(), it = {});
  };
}, ia = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = ra(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), sa(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, yt = "Dialog", [_r, tu] = bt(yt), [aa, se] = _r(yt), jr = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !0
  } = e, a = u.useRef(null), l = u.useRef(null), [c, d] = en({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: yt
  });
  return /* @__PURE__ */ p.jsx(
    aa,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: Ue(),
      titleId: Ue(),
      descriptionId: Ue(),
      open: c,
      onOpenChange: d,
      onOpenToggle: u.useCallback(() => d((f) => !f), [d]),
      modal: i,
      children: n
    }
  );
};
jr.displayName = yt;
var Mr = "DialogTrigger", la = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(Mr, n), s = ne(t, o.triggerRef);
    return /* @__PURE__ */ p.jsx(
      Z.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": sn(o.open),
        ...r,
        ref: s,
        onClick: J(e.onClick, o.onOpenToggle)
      }
    );
  }
);
la.displayName = Mr;
var rn = "DialogPortal", [ca, Dr] = _r(rn, {
  forceMount: void 0
}), Lr = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = se(rn, t);
  return /* @__PURE__ */ p.jsx(ca, { scope: t, forceMount: n, children: u.Children.map(r, (i) => /* @__PURE__ */ p.jsx(ke, { present: n || s.open, children: /* @__PURE__ */ p.jsx(nn, { asChild: !0, container: o, children: i }) })) });
};
Lr.displayName = rn;
var dt = "DialogOverlay", Ir = u.forwardRef(
  (e, t) => {
    const n = Dr(dt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = se(dt, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ p.jsx(ke, { present: r || s.open, children: /* @__PURE__ */ p.jsx(da, { ...o, ref: t }) }) : null;
  }
);
Ir.displayName = dt;
var ua = /* @__PURE__ */ Zt("DialogOverlay.RemoveScroll"), da = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(dt, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p.jsx(Or, { as: ua, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ p.jsx(
        Z.div,
        {
          "data-state": sn(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Se = "DialogContent", Fr = u.forwardRef(
  (e, t) => {
    const n = Dr(Se, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = se(Se, e.__scopeDialog);
    return /* @__PURE__ */ p.jsx(ke, { present: r || s.open, children: s.modal ? /* @__PURE__ */ p.jsx(fa, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(pa, { ...o, ref: t }) });
  }
);
Fr.displayName = Se;
var fa = u.forwardRef(
  (e, t) => {
    const n = se(Se, e.__scopeDialog), r = u.useRef(null), o = ne(t, n.contentRef, r);
    return u.useEffect(() => {
      const s = r.current;
      if (s) return ia(s);
    }, []), /* @__PURE__ */ p.jsx(
      $r,
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
), pa = u.forwardRef(
  (e, t) => {
    const n = se(Se, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      $r,
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
), $r = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = se(Se, n), l = u.useRef(null), c = ne(t, l);
    return yi(), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        wr,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ p.jsx(
            tn,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": sn(a.open),
              ...i,
              ref: c,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(ma, { titleId: a.titleId }),
        /* @__PURE__ */ p.jsx(ga, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), on = "DialogTitle", zr = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(on, n);
    return /* @__PURE__ */ p.jsx(Z.h2, { id: o.titleId, ...r, ref: t });
  }
);
zr.displayName = on;
var Wr = "DialogDescription", Br = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(Wr, n);
    return /* @__PURE__ */ p.jsx(Z.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Br.displayName = Wr;
var Vr = "DialogClose", Hr = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(Vr, n);
    return /* @__PURE__ */ p.jsx(
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
Hr.displayName = Vr;
function sn(e) {
  return e ? "open" : "closed";
}
var Gr = "DialogTitleWarning", [nu, Ur] = Xs(Gr, {
  contentName: Se,
  titleName: on,
  docsSlug: "dialog"
}), ma = ({ titleId: e }) => {
  const t = Ur(Gr), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, ha = "DialogDescriptionWarning", ga = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ur(ha).contentName}}.`;
  return u.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, va = jr, ba = Lr, xa = Ir, ya = Fr, wa = zr, Ca = Br, Ea = Hr;
function Sa({ ...e }) {
  return /* @__PURE__ */ p.jsx(va, { "data-slot": "sheet", ...e });
}
function Ra({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(ba, { "data-slot": "sheet-portal", ...e });
}
function ka({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    xa,
    {
      "data-slot": "sheet-overlay",
      className: W(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function Aa({
  className: e,
  children: t,
  side: n = "right",
  ...r
}) {
  return /* @__PURE__ */ p.jsxs(Ra, { children: [
    /* @__PURE__ */ p.jsx(ka, {}),
    /* @__PURE__ */ p.jsxs(
      ya,
      {
        "data-slot": "sheet-content",
        className: W(
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
          /* @__PURE__ */ p.jsxs(Ea, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ p.jsx(ls, { className: "size-4" }),
            /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function Pa({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: W("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function Ta({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    wa,
    {
      "data-slot": "sheet-title",
      className: W("text-foreground font-semibold", e),
      ...t
    }
  );
}
function Oa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    Ca,
    {
      "data-slot": "sheet-description",
      className: W("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
const Na = ["top", "right", "bottom", "left"], ye = Math.min, ee = Math.max, ft = Math.round, at = Math.floor, ce = (e) => ({
  x: e,
  y: e
}), _a = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ja = {
  start: "end",
  end: "start"
};
function Ut(e, t, n) {
  return ee(e, ye(t, n));
}
function me(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function he(e) {
  return e.split("-")[0];
}
function ze(e) {
  return e.split("-")[1];
}
function an(e) {
  return e === "x" ? "y" : "x";
}
function ln(e) {
  return e === "y" ? "height" : "width";
}
const Ma = /* @__PURE__ */ new Set(["top", "bottom"]);
function le(e) {
  return Ma.has(he(e)) ? "y" : "x";
}
function cn(e) {
  return an(le(e));
}
function Da(e, t, n) {
  n === void 0 && (n = !1);
  const r = ze(e), o = cn(e), s = ln(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = pt(i)), [i, pt(i)];
}
function La(e) {
  const t = pt(e);
  return [Yt(e), t, Yt(t)];
}
function Yt(e) {
  return e.replace(/start|end/g, (t) => ja[t]);
}
const Hn = ["left", "right"], Gn = ["right", "left"], Ia = ["top", "bottom"], Fa = ["bottom", "top"];
function $a(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Gn : Hn : t ? Hn : Gn;
    case "left":
    case "right":
      return t ? Ia : Fa;
    default:
      return [];
  }
}
function za(e, t, n, r) {
  const o = ze(e);
  let s = $a(he(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Yt)))), s;
}
function pt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => _a[t]);
}
function Wa(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Yr(e) {
  return typeof e != "number" ? Wa(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function mt(e) {
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
function Un(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = le(t), i = cn(t), a = ln(i), l = he(t), c = s === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, g = r[a] / 2 - o[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (ze(t)) {
    case "start":
      h[i] -= g * (n && c ? -1 : 1);
      break;
    case "end":
      h[i] += g * (n && c ? -1 : 1);
      break;
  }
  return h;
}
const Ba = async (e, t, n) => {
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
  } = Un(c, r, l), g = r, h = {}, v = 0;
  for (let m = 0; m < a.length; m++) {
    const {
      name: x,
      fn: b
    } = a[m], {
      x: y,
      y: C,
      data: S,
      reset: R
    } = await b({
      x: d,
      y: f,
      initialPlacement: r,
      placement: g,
      strategy: o,
      middlewareData: h,
      rects: c,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = y ?? d, f = C ?? f, h = {
      ...h,
      [x]: {
        ...h[x],
        ...S
      }
    }, R && v <= 50 && (v++, typeof R == "object" && (R.placement && (g = R.placement), R.rects && (c = R.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : R.rects), {
      x: d,
      y: f
    } = Un(c, g, l)), m = -1);
  }
  return {
    x: d,
    y: f,
    placement: g,
    strategy: o,
    middlewareData: h
  };
};
async function Ye(e, t) {
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
    altBoundary: g = !1,
    padding: h = 0
  } = me(t, e), v = Yr(h), x = a[g ? f === "floating" ? "reference" : "floating" : f], b = mt(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(x))) == null || n ? x : x.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), y = f === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), S = await (s.isElement == null ? void 0 : s.isElement(C)) ? await (s.getScale == null ? void 0 : s.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, R = mt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: y,
    offsetParent: C,
    strategy: l
  }) : y);
  return {
    top: (b.top - R.top + v.top) / S.y,
    bottom: (R.bottom - b.bottom + v.bottom) / S.y,
    left: (b.left - R.left + v.left) / S.x,
    right: (R.right - b.right + v.right) / S.x
  };
}
const Va = (e) => ({
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
    const f = Yr(d), g = {
      x: n,
      y: r
    }, h = cn(o), v = ln(h), m = await i.getDimensions(c), x = h === "y", b = x ? "top" : "left", y = x ? "bottom" : "right", C = x ? "clientHeight" : "clientWidth", S = s.reference[v] + s.reference[h] - g[h] - s.floating[v], R = g[h] - s.reference[h], O = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let A = O ? O[C] : 0;
    (!A || !await (i.isElement == null ? void 0 : i.isElement(O))) && (A = a.floating[C] || s.floating[v]);
    const k = S / 2 - R / 2, M = A / 2 - m[v] / 2 - 1, z = ye(f[b], M), U = ye(f[y], M), H = z, B = A - m[v] - U, I = A / 2 - m[v] / 2 + k, G = Ut(H, I, B), D = !l.arrow && ze(o) != null && I !== G && s.reference[v] / 2 - (I < H ? z : U) - m[v] / 2 < 0, L = D ? I < H ? I - H : I - B : 0;
    return {
      [h]: g[h] + L,
      data: {
        [h]: G,
        centerOffset: I - G - L,
        ...D && {
          alignmentOffset: L
        }
      },
      reset: D
    };
  }
}), Ha = function(e) {
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
        fallbackPlacements: g,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: m = !0,
        ...x
      } = me(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const b = he(o), y = le(a), C = he(a) === a, S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), R = g || (C || !m ? [pt(a)] : La(a)), O = v !== "none";
      !g && O && R.push(...za(a, m, v, S));
      const A = [a, ...R], k = await Ye(t, x), M = [];
      let z = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (d && M.push(k[b]), f) {
        const I = Da(o, i, S);
        M.push(k[I[0]], k[I[1]]);
      }
      if (z = [...z, {
        placement: o,
        overflows: M
      }], !M.every((I) => I <= 0)) {
        var U, H;
        const I = (((U = s.flip) == null ? void 0 : U.index) || 0) + 1, G = A[I];
        if (G && (!(f === "alignment" ? y !== le(G) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        z.every((E) => le(E.placement) === y ? E.overflows[0] > 0 : !0)))
          return {
            data: {
              index: I,
              overflows: z
            },
            reset: {
              placement: G
            }
          };
        let D = (H = z.filter((L) => L.overflows[0] <= 0).sort((L, E) => L.overflows[1] - E.overflows[1])[0]) == null ? void 0 : H.placement;
        if (!D)
          switch (h) {
            case "bestFit": {
              var B;
              const L = (B = z.filter((E) => {
                if (O) {
                  const Y = le(E.placement);
                  return Y === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Y === "y";
                }
                return !0;
              }).map((E) => [E.placement, E.overflows.filter((Y) => Y > 0).reduce((Y, w) => Y + w, 0)]).sort((E, Y) => E[1] - Y[1])[0]) == null ? void 0 : B[0];
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
function Yn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Xn(e) {
  return Na.some((t) => e[t] >= 0);
}
const Ga = function(e) {
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
          const s = await Ye(t, {
            ...o,
            elementContext: "reference"
          }), i = Yn(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Xn(i)
            }
          };
        }
        case "escaped": {
          const s = await Ye(t, {
            ...o,
            altBoundary: !0
          }), i = Yn(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Xn(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Xr = /* @__PURE__ */ new Set(["left", "top"]);
async function Ua(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = he(n), a = ze(n), l = le(n) === "y", c = Xr.has(i) ? -1 : 1, d = s && l ? -1 : 1, f = me(t, e);
  let {
    mainAxis: g,
    crossAxis: h,
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
  return a && typeof v == "number" && (h = a === "end" ? v * -1 : v), l ? {
    x: h * d,
    y: g * c
  } : {
    x: g * c,
    y: h * d
  };
}
const Ya = function(e) {
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
      } = t, l = await Ua(t, e);
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
}, Xa = function(e) {
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
          fn: (x) => {
            let {
              x: b,
              y
            } = x;
            return {
              x: b,
              y
            };
          }
        },
        ...l
      } = me(e, t), c = {
        x: n,
        y: r
      }, d = await Ye(t, l), f = le(he(o)), g = an(f);
      let h = c[g], v = c[f];
      if (s) {
        const x = g === "y" ? "top" : "left", b = g === "y" ? "bottom" : "right", y = h + d[x], C = h - d[b];
        h = Ut(y, h, C);
      }
      if (i) {
        const x = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", y = v + d[x], C = v - d[b];
        v = Ut(y, v, C);
      }
      const m = a.fn({
        ...t,
        [g]: h,
        [f]: v
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r,
          enabled: {
            [g]: s,
            [f]: i
          }
        }
      };
    }
  };
}, Ka = function(e) {
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
      }, f = le(o), g = an(f);
      let h = d[g], v = d[f];
      const m = me(a, t), x = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (l) {
        const C = g === "y" ? "height" : "width", S = s.reference[g] - s.floating[C] + x.mainAxis, R = s.reference[g] + s.reference[C] - x.mainAxis;
        h < S ? h = S : h > R && (h = R);
      }
      if (c) {
        var b, y;
        const C = g === "y" ? "width" : "height", S = Xr.has(he(o)), R = s.reference[f] - s.floating[C] + (S && ((b = i.offset) == null ? void 0 : b[f]) || 0) + (S ? 0 : x.crossAxis), O = s.reference[f] + s.reference[C] + (S ? 0 : ((y = i.offset) == null ? void 0 : y[f]) || 0) - (S ? x.crossAxis : 0);
        v < R ? v = R : v > O && (v = O);
      }
      return {
        [g]: h,
        [f]: v
      };
    }
  };
}, qa = function(e) {
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
      } = me(e, t), d = await Ye(t, c), f = he(o), g = ze(o), h = le(o) === "y", {
        width: v,
        height: m
      } = s.floating;
      let x, b;
      f === "top" || f === "bottom" ? (x = f, b = g === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = f, x = g === "end" ? "top" : "bottom");
      const y = m - d.top - d.bottom, C = v - d.left - d.right, S = ye(m - d[x], y), R = ye(v - d[b], C), O = !t.middlewareData.shift;
      let A = S, k = R;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (k = C), (r = t.middlewareData.shift) != null && r.enabled.y && (A = y), O && !g) {
        const z = ee(d.left, 0), U = ee(d.right, 0), H = ee(d.top, 0), B = ee(d.bottom, 0);
        h ? k = v - 2 * (z !== 0 || U !== 0 ? z + U : ee(d.left, d.right)) : A = m - 2 * (H !== 0 || B !== 0 ? H + B : ee(d.top, d.bottom));
      }
      await l({
        ...t,
        availableWidth: k,
        availableHeight: A
      });
      const M = await i.getDimensions(a.floating);
      return v !== M.width || m !== M.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function wt() {
  return typeof window < "u";
}
function We(e) {
  return Kr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function te(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function de(e) {
  var t;
  return (t = (Kr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Kr(e) {
  return wt() ? e instanceof Node || e instanceof te(e).Node : !1;
}
function re(e) {
  return wt() ? e instanceof Element || e instanceof te(e).Element : !1;
}
function ue(e) {
  return wt() ? e instanceof HTMLElement || e instanceof te(e).HTMLElement : !1;
}
function Kn(e) {
  return !wt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof te(e).ShadowRoot;
}
const Za = /* @__PURE__ */ new Set(["inline", "contents"]);
function qe(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = oe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Za.has(o);
}
const Ja = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Qa(e) {
  return Ja.has(We(e));
}
const el = [":popover-open", ":modal"];
function Ct(e) {
  return el.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const tl = ["transform", "translate", "scale", "rotate", "perspective"], nl = ["transform", "translate", "scale", "rotate", "perspective", "filter"], rl = ["paint", "layout", "strict", "content"];
function un(e) {
  const t = dn(), n = re(e) ? oe(e) : e;
  return tl.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || nl.some((r) => (n.willChange || "").includes(r)) || rl.some((r) => (n.contain || "").includes(r));
}
function ol(e) {
  let t = we(e);
  for (; ue(t) && !De(t); ) {
    if (un(t))
      return t;
    if (Ct(t))
      return null;
    t = we(t);
  }
  return null;
}
function dn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const sl = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function De(e) {
  return sl.has(We(e));
}
function oe(e) {
  return te(e).getComputedStyle(e);
}
function Et(e) {
  return re(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function we(e) {
  if (We(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Kn(e) && e.host || // Fallback.
    de(e)
  );
  return Kn(t) ? t.host : t;
}
function qr(e) {
  const t = we(e);
  return De(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ue(t) && qe(t) ? t : qr(t);
}
function Xe(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = qr(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = te(o);
  if (s) {
    const a = Xt(i);
    return t.concat(i, i.visualViewport || [], qe(o) ? o : [], a && n ? Xe(a) : []);
  }
  return t.concat(o, Xe(o, [], n));
}
function Xt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Zr(e) {
  const t = oe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ue(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = ft(n) !== s || ft(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function fn(e) {
  return re(e) ? e : e.contextElement;
}
function je(e) {
  const t = fn(e);
  if (!ue(t))
    return ce(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Zr(t);
  let i = (s ? ft(n.width) : n.width) / r, a = (s ? ft(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const il = /* @__PURE__ */ ce(0);
function Jr(e) {
  const t = te(e);
  return !dn() || !t.visualViewport ? il : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function al(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== te(e) ? !1 : t;
}
function Re(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = fn(e);
  let i = ce(1);
  t && (r ? re(r) && (i = je(r)) : i = je(e));
  const a = al(s, n, r) ? Jr(s) : ce(0);
  let l = (o.left + a.x) / i.x, c = (o.top + a.y) / i.y, d = o.width / i.x, f = o.height / i.y;
  if (s) {
    const g = te(s), h = r && re(r) ? te(r) : r;
    let v = g, m = Xt(v);
    for (; m && r && h !== v; ) {
      const x = je(m), b = m.getBoundingClientRect(), y = oe(m), C = b.left + (m.clientLeft + parseFloat(y.paddingLeft)) * x.x, S = b.top + (m.clientTop + parseFloat(y.paddingTop)) * x.y;
      l *= x.x, c *= x.y, d *= x.x, f *= x.y, l += C, c += S, v = te(m), m = Xt(v);
    }
  }
  return mt({
    width: d,
    height: f,
    x: l,
    y: c
  });
}
function St(e, t) {
  const n = Et(e).scrollLeft;
  return t ? t.left + n : Re(de(e)).left + n;
}
function Qr(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - St(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function ll(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = de(r), a = t ? Ct(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = ce(1);
  const d = ce(0), f = ue(r);
  if ((f || !f && !s) && ((We(r) !== "body" || qe(i)) && (l = Et(r)), ue(r))) {
    const h = Re(r);
    c = je(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const g = i && !f && !s ? Qr(i, l) : ce(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + g.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + g.y
  };
}
function cl(e) {
  return Array.from(e.getClientRects());
}
function ul(e) {
  const t = de(e), n = Et(e), r = e.ownerDocument.body, o = ee(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = ee(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + St(e);
  const a = -n.scrollTop;
  return oe(r).direction === "rtl" && (i += ee(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
const qn = 25;
function dl(e, t) {
  const n = te(e), r = de(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const d = dn();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const c = St(r);
  if (c <= 0) {
    const d = r.ownerDocument, f = d.body, g = getComputedStyle(f), h = d.compatMode === "CSS1Compat" && parseFloat(g.marginLeft) + parseFloat(g.marginRight) || 0, v = Math.abs(r.clientWidth - f.clientWidth - h);
    v <= qn && (s -= v);
  } else c <= qn && (s += c);
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
const fl = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function pl(e, t) {
  const n = Re(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = ue(e) ? je(e) : ce(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, c = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: c
  };
}
function Zn(e, t, n) {
  let r;
  if (t === "viewport")
    r = dl(e, n);
  else if (t === "document")
    r = ul(de(e));
  else if (re(t))
    r = pl(t, n);
  else {
    const o = Jr(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return mt(r);
}
function eo(e, t) {
  const n = we(e);
  return n === t || !re(n) || De(n) ? !1 : oe(n).position === "fixed" || eo(n, t);
}
function ml(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Xe(e, [], !1).filter((a) => re(a) && We(a) !== "body"), o = null;
  const s = oe(e).position === "fixed";
  let i = s ? we(e) : e;
  for (; re(i) && !De(i); ) {
    const a = oe(i), l = un(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && fl.has(o.position) || qe(i) && !l && eo(e, i)) ? r = r.filter((d) => d !== i) : o = a, i = we(i);
  }
  return t.set(e, r), r;
}
function hl(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Ct(t) ? [] : ml(t, this._c) : [].concat(n), r], a = i[0], l = i.reduce((c, d) => {
    const f = Zn(t, d, o);
    return c.top = ee(f.top, c.top), c.right = ye(f.right, c.right), c.bottom = ye(f.bottom, c.bottom), c.left = ee(f.left, c.left), c;
  }, Zn(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function gl(e) {
  const {
    width: t,
    height: n
  } = Zr(e);
  return {
    width: t,
    height: n
  };
}
function vl(e, t, n) {
  const r = ue(t), o = de(t), s = n === "fixed", i = Re(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ce(0);
  function c() {
    l.x = St(o);
  }
  if (r || !r && !s)
    if ((We(t) !== "body" || qe(o)) && (a = Et(t)), r) {
      const h = Re(t, !0, s, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && c();
  s && !r && o && c();
  const d = o && !r && !s ? Qr(o, a) : ce(0), f = i.left + a.scrollLeft - l.x - d.x, g = i.top + a.scrollTop - l.y - d.y;
  return {
    x: f,
    y: g,
    width: i.width,
    height: i.height
  };
}
function Ft(e) {
  return oe(e).position === "static";
}
function Jn(e, t) {
  if (!ue(e) || oe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return de(e) === n && (n = n.ownerDocument.body), n;
}
function to(e, t) {
  const n = te(e);
  if (Ct(e))
    return n;
  if (!ue(e)) {
    let o = we(e);
    for (; o && !De(o); ) {
      if (re(o) && !Ft(o))
        return o;
      o = we(o);
    }
    return n;
  }
  let r = Jn(e, t);
  for (; r && Qa(r) && Ft(r); )
    r = Jn(r, t);
  return r && De(r) && Ft(r) && !un(r) ? n : r || ol(e) || n;
}
const bl = async function(e) {
  const t = this.getOffsetParent || to, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: vl(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function xl(e) {
  return oe(e).direction === "rtl";
}
const yl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ll,
  getDocumentElement: de,
  getClippingRect: hl,
  getOffsetParent: to,
  getElementRects: bl,
  getClientRects: cl,
  getDimensions: gl,
  getScale: je,
  isElement: re,
  isRTL: xl
};
function no(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function wl(e, t) {
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
      width: g,
      height: h
    } = c;
    if (a || t(), !g || !h)
      return;
    const v = at(f), m = at(o.clientWidth - (d + g)), x = at(o.clientHeight - (f + h)), b = at(d), C = {
      rootMargin: -v + "px " + -m + "px " + -x + "px " + -b + "px",
      threshold: ee(0, ye(1, l)) || 1
    };
    let S = !0;
    function R(O) {
      const A = O[0].intersectionRatio;
      if (A !== l) {
        if (!S)
          return i();
        A ? i(!1, A) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !no(c, e.getBoundingClientRect()) && i(), S = !1;
    }
    try {
      n = new IntersectionObserver(R, {
        ...C,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(R, C);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function Cl(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = fn(e), d = o || s ? [...c ? Xe(c) : [], ...Xe(t)] : [];
  d.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), s && b.addEventListener("resize", n);
  });
  const f = c && a ? wl(c, n) : null;
  let g = -1, h = null;
  i && (h = new ResizeObserver((b) => {
    let [y] = b;
    y && y.target === c && h && (h.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var C;
      (C = h) == null || C.observe(t);
    })), n();
  }), c && !l && h.observe(c), h.observe(t));
  let v, m = l ? Re(e) : null;
  l && x();
  function x() {
    const b = Re(e);
    m && !no(m, b) && n(), m = b, v = requestAnimationFrame(x);
  }
  return n(), () => {
    var b;
    d.forEach((y) => {
      o && y.removeEventListener("scroll", n), s && y.removeEventListener("resize", n);
    }), f?.(), (b = h) == null || b.disconnect(), h = null, l && cancelAnimationFrame(v);
  };
}
const El = Ya, Sl = Xa, Rl = Ha, kl = qa, Al = Ga, Qn = Va, Pl = Ka, Tl = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: yl,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Ba(e, t, {
    ...o,
    platform: s
  });
};
var Ol = typeof document < "u", Nl = function() {
}, ut = Ol ? Io : Nl;
function ht(e, t) {
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
        if (!ht(e[r], t[r]))
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
      if (!(s === "_owner" && e.$$typeof) && !ht(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ro(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function er(e, t) {
  const n = ro(e);
  return Math.round(t * n) / n;
}
function $t(e) {
  const t = u.useRef(e);
  return ut(() => {
    t.current = e;
  }), t;
}
function _l(e) {
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
  }), [g, h] = u.useState(r);
  ht(g, r) || h(r);
  const [v, m] = u.useState(null), [x, b] = u.useState(null), y = u.useCallback((E) => {
    E !== O.current && (O.current = E, m(E));
  }, []), C = u.useCallback((E) => {
    E !== A.current && (A.current = E, b(E));
  }, []), S = s || v, R = i || x, O = u.useRef(null), A = u.useRef(null), k = u.useRef(d), M = l != null, z = $t(l), U = $t(o), H = $t(c), B = u.useCallback(() => {
    if (!O.current || !A.current)
      return;
    const E = {
      placement: t,
      strategy: n,
      middleware: g
    };
    U.current && (E.platform = U.current), Tl(O.current, A.current, E).then((Y) => {
      const w = {
        ...Y,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: H.current !== !1
      };
      I.current && !ht(k.current, w) && (k.current = w, rr.flushSync(() => {
        f(w);
      }));
    });
  }, [g, t, n, U, H]);
  ut(() => {
    c === !1 && k.current.isPositioned && (k.current.isPositioned = !1, f((E) => ({
      ...E,
      isPositioned: !1
    })));
  }, [c]);
  const I = u.useRef(!1);
  ut(() => (I.current = !0, () => {
    I.current = !1;
  }), []), ut(() => {
    if (S && (O.current = S), R && (A.current = R), S && R) {
      if (z.current)
        return z.current(S, R, B);
      B();
    }
  }, [S, R, B, z, M]);
  const G = u.useMemo(() => ({
    reference: O,
    floating: A,
    setReference: y,
    setFloating: C
  }), [y, C]), D = u.useMemo(() => ({
    reference: S,
    floating: R
  }), [S, R]), L = u.useMemo(() => {
    const E = {
      position: n,
      left: 0,
      top: 0
    };
    if (!D.floating)
      return E;
    const Y = er(D.floating, d.x), w = er(D.floating, d.y);
    return a ? {
      ...E,
      transform: "translate(" + Y + "px, " + w + "px)",
      ...ro(D.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: Y,
      top: w
    };
  }, [n, a, D.floating, d.x, d.y]);
  return u.useMemo(() => ({
    ...d,
    update: B,
    refs: G,
    elements: D,
    floatingStyles: L
  }), [d, B, G, D, L]);
}
const jl = (e) => {
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
      return r && t(r) ? r.current != null ? Qn({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Qn({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Ml = (e, t) => ({
  ...El(e),
  options: [e, t]
}), Dl = (e, t) => ({
  ...Sl(e),
  options: [e, t]
}), Ll = (e, t) => ({
  ...Pl(e),
  options: [e, t]
}), Il = (e, t) => ({
  ...Rl(e),
  options: [e, t]
}), Fl = (e, t) => ({
  ...kl(e),
  options: [e, t]
}), $l = (e, t) => ({
  ...Al(e),
  options: [e, t]
}), zl = (e, t) => ({
  ...jl(e),
  options: [e, t]
});
var Wl = "Arrow", oo = u.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ p.jsx(
    Z.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ p.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
oo.displayName = Wl;
var Bl = oo;
function Vl(e) {
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
var pn = "Popper", [so, io] = bt(pn), [Hl, ao] = so(pn), lo = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ p.jsx(Hl, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
lo.displayName = pn;
var co = "PopperAnchor", uo = u.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = ao(co, n), i = u.useRef(null), a = ne(t, i), l = u.useRef(null);
    return u.useEffect(() => {
      const c = l.current;
      l.current = r?.current || i.current, c !== l.current && s.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ p.jsx(Z.div, { ...o, ref: a });
  }
);
uo.displayName = co;
var mn = "PopperContent", [Gl, Ul] = so(mn), fo = u.forwardRef(
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
      hideWhenDetached: g = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: v,
      ...m
    } = e, x = ao(mn, n), [b, y] = u.useState(null), C = ne(t, ($) => y($)), [S, R] = u.useState(null), O = Vl(S), A = O?.width ?? 0, k = O?.height ?? 0, M = r + (s !== "center" ? "-" + s : ""), z = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, U = Array.isArray(c) ? c : [c], H = U.length > 0, B = {
      padding: z,
      boundary: U.filter(Xl),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: H
    }, { refs: I, floatingStyles: G, placement: D, isPositioned: L, middlewareData: E } = _l({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: M,
      whileElementsMounted: (...$) => Cl(...$, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        Ml({ mainAxis: o + k, alignmentAxis: i }),
        l && Dl({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? Ll() : void 0,
          ...B
        }),
        l && Il({ ...B }),
        Fl({
          ...B,
          apply: ({ elements: $, rects: X, availableWidth: Q, availableHeight: ie }) => {
            const { width: Ce, height: Ae } = X.reference, Je = $.floating.style;
            Je.setProperty("--radix-popper-available-width", `${Q}px`), Je.setProperty("--radix-popper-available-height", `${ie}px`), Je.setProperty("--radix-popper-anchor-width", `${Ce}px`), Je.setProperty("--radix-popper-anchor-height", `${Ae}px`);
          }
        }),
        S && zl({ element: S, padding: a }),
        Kl({ arrowWidth: A, arrowHeight: k }),
        g && $l({ strategy: "referenceHidden", ...B })
      ]
    }), [Y, w] = ho(D), N = Me(v);
    pe(() => {
      L && N?.();
    }, [L, N]);
    const F = E.arrow?.x, j = E.arrow?.y, V = E.arrow?.centerOffset !== 0, [q, ge] = u.useState();
    return pe(() => {
      b && ge(window.getComputedStyle(b).zIndex);
    }, [b]), /* @__PURE__ */ p.jsx(
      "div",
      {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...G,
          transform: L ? G.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: q,
          "--radix-popper-transform-origin": [
            E.transformOrigin?.x,
            E.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...E.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ p.jsx(
          Gl,
          {
            scope: n,
            placedSide: Y,
            onArrowChange: R,
            arrowX: F,
            arrowY: j,
            shouldHideArrow: V,
            children: /* @__PURE__ */ p.jsx(
              Z.div,
              {
                "data-side": Y,
                "data-align": w,
                ...m,
                ref: C,
                style: {
                  ...m.style,
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
fo.displayName = mn;
var po = "PopperArrow", Yl = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, mo = u.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = Ul(po, r), i = Yl[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ p.jsx(
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
        children: /* @__PURE__ */ p.jsx(
          Bl,
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
mo.displayName = po;
function Xl(e) {
  return e !== null;
}
var Kl = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, i = o.arrow?.centerOffset !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [c, d] = ho(n), f = { start: "0%", center: "50%", end: "100%" }[d], g = (o.arrow?.x ?? 0) + a / 2, h = (o.arrow?.y ?? 0) + l / 2;
    let v = "", m = "";
    return c === "bottom" ? (v = i ? f : `${g}px`, m = `${-l}px`) : c === "top" ? (v = i ? f : `${g}px`, m = `${r.floating.height + l}px`) : c === "right" ? (v = `${-l}px`, m = i ? f : `${h}px`) : c === "left" && (v = `${r.floating.width + l}px`, m = i ? f : `${h}px`), { data: { x: v, y: m } };
  }
});
function ho(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var ql = lo, Zl = uo, Jl = fo, Ql = mo, ec = Object.freeze({
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
}), tc = "VisuallyHidden", go = u.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(
    Z.span,
    {
      ...e,
      ref: t,
      style: { ...ec, ...e.style }
    }
  )
);
go.displayName = tc;
var nc = go, [Rt, ru] = bt("Tooltip", [
  io
]), kt = io(), vo = "TooltipProvider", rc = 700, Kt = "tooltip.open", [oc, hn] = Rt(vo), bo = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = rc,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, i = u.useRef(!0), a = u.useRef(!1), l = u.useRef(0);
  return u.useEffect(() => {
    const c = l.current;
    return () => window.clearTimeout(c);
  }, []), /* @__PURE__ */ p.jsx(
    oc,
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
bo.displayName = vo;
var Ke = "Tooltip", [sc, Ze] = Rt(Ke), xo = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    disableHoverableContent: i,
    delayDuration: a
  } = e, l = hn(Ke, e.__scopeTooltip), c = kt(t), [d, f] = u.useState(null), g = Ue(), h = u.useRef(0), v = i ?? l.disableHoverableContent, m = a ?? l.delayDuration, x = u.useRef(!1), [b, y] = en({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (A) => {
      A ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Kt))) : l.onClose(), s?.(A);
    },
    caller: Ke
  }), C = u.useMemo(() => b ? x.current ? "delayed-open" : "instant-open" : "closed", [b]), S = u.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, x.current = !1, y(!0);
  }, [y]), R = u.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, y(!1);
  }, [y]), O = u.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      x.current = !0, y(!0), h.current = 0;
    }, m);
  }, [m, y]);
  return u.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ p.jsx(ql, { ...c, children: /* @__PURE__ */ p.jsx(
    sc,
    {
      scope: t,
      contentId: g,
      open: b,
      stateAttribute: C,
      trigger: d,
      onTriggerChange: f,
      onTriggerEnter: u.useCallback(() => {
        l.isOpenDelayedRef.current ? O() : S();
      }, [l.isOpenDelayedRef, O, S]),
      onTriggerLeave: u.useCallback(() => {
        v ? R() : (window.clearTimeout(h.current), h.current = 0);
      }, [R, v]),
      onOpen: S,
      onClose: R,
      disableHoverableContent: v,
      children: n
    }
  ) });
};
xo.displayName = Ke;
var qt = "TooltipTrigger", yo = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Ze(qt, n), s = hn(qt, n), i = kt(n), a = u.useRef(null), l = ne(t, a, o.onTriggerChange), c = u.useRef(!1), d = u.useRef(!1), f = u.useCallback(() => c.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ p.jsx(Zl, { asChild: !0, ...i, children: /* @__PURE__ */ p.jsx(
      Z.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: J(e.onPointerMove, (g) => {
          g.pointerType !== "touch" && !d.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0);
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
yo.displayName = qt;
var gn = "TooltipPortal", [ic, ac] = Rt(gn, {
  forceMount: void 0
}), wo = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, s = Ze(gn, t);
  return /* @__PURE__ */ p.jsx(ic, { scope: t, forceMount: n, children: /* @__PURE__ */ p.jsx(ke, { present: n || s.open, children: /* @__PURE__ */ p.jsx(nn, { asChild: !0, container: o, children: r }) }) });
};
wo.displayName = gn;
var Le = "TooltipContent", Co = u.forwardRef(
  (e, t) => {
    const n = ac(Le, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...s } = e, i = Ze(Le, e.__scopeTooltip);
    return /* @__PURE__ */ p.jsx(ke, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ p.jsx(Eo, { side: o, ...s, ref: t }) : /* @__PURE__ */ p.jsx(lc, { side: o, ...s, ref: t }) });
  }
), lc = u.forwardRef((e, t) => {
  const n = Ze(Le, e.__scopeTooltip), r = hn(Le, e.__scopeTooltip), o = u.useRef(null), s = ne(t, o), [i, a] = u.useState(null), { trigger: l, onClose: c } = n, d = o.current, { onPointerInTransitChange: f } = r, g = u.useCallback(() => {
    a(null), f(!1);
  }, [f]), h = u.useCallback(
    (v, m) => {
      const x = v.currentTarget, b = { x: v.clientX, y: v.clientY }, y = fc(b, x.getBoundingClientRect()), C = pc(b, y), S = mc(m.getBoundingClientRect()), R = gc([...C, ...S]);
      a(R), f(!0);
    },
    [f]
  );
  return u.useEffect(() => () => g(), [g]), u.useEffect(() => {
    if (l && d) {
      const v = (x) => h(x, d), m = (x) => h(x, l);
      return l.addEventListener("pointerleave", v), d.addEventListener("pointerleave", m), () => {
        l.removeEventListener("pointerleave", v), d.removeEventListener("pointerleave", m);
      };
    }
  }, [l, d, h, g]), u.useEffect(() => {
    if (i) {
      const v = (m) => {
        const x = m.target, b = { x: m.clientX, y: m.clientY }, y = l?.contains(x) || d?.contains(x), C = !hc(b, i);
        y ? g() : C && (g(), c());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [l, d, i, c, g]), /* @__PURE__ */ p.jsx(Eo, { ...e, ref: s });
}), [cc, uc] = Rt(Ke, { isInside: !1 }), dc = /* @__PURE__ */ Vo("TooltipContent"), Eo = u.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      ...a
    } = e, l = Ze(Le, n), c = kt(n), { onClose: d } = l;
    return u.useEffect(() => (document.addEventListener(Kt, d), () => document.removeEventListener(Kt, d)), [d]), u.useEffect(() => {
      if (l.trigger) {
        const f = (g) => {
          g.target?.contains(l.trigger) && d();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [l.trigger, d]), /* @__PURE__ */ p.jsx(
      tn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ p.jsxs(
          Jl,
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
              /* @__PURE__ */ p.jsx(dc, { children: r }),
              /* @__PURE__ */ p.jsx(cc, { scope: n, isInside: !0, children: /* @__PURE__ */ p.jsx(nc, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
Co.displayName = Le;
var So = "TooltipArrow", Ro = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = kt(n);
    return uc(
      So,
      n
    ).isInside ? null : /* @__PURE__ */ p.jsx(Ql, { ...o, ...r, ref: t });
  }
);
Ro.displayName = So;
function fc(e, t) {
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
function pc(e, t, n = 5) {
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
function mc(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function hc(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s], l = t[i], c = a.x, d = a.y, f = l.x, g = l.y;
    d > r != g > r && n < (f - c) * (r - d) / (g - d) + c && (o = !o);
  }
  return o;
}
function gc(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), vc(t);
}
function vc(e) {
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
var bc = bo, xc = xo, yc = yo, wc = wo, Cc = Co, Ec = Ro;
function ko({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    bc,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function Sc({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(ko, { children: /* @__PURE__ */ p.jsx(xc, { "data-slot": "tooltip", ...e }) });
}
function Rc({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(yc, { "data-slot": "tooltip-trigger", ...e });
}
function kc({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ p.jsx(wc, { children: /* @__PURE__ */ p.jsxs(
    Cc,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: W(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ p.jsx(Ec, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const Ac = "sidebar_state", Pc = 3600 * 24 * 7, Tc = "16rem", Oc = "3rem", Nc = "b", Ao = u.createContext(null);
function vn() {
  const e = u.useContext(Ao);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function _c({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: n,
  className: r,
  style: o,
  children: s,
  ...i
}) {
  const a = cs(), [l, c] = u.useState(!1), [d, f] = u.useState(e), g = t ?? d, h = u.useCallback(
    (b) => {
      const y = typeof b == "function" ? b(g) : b;
      n ? n(y) : f(y), document.cookie = `${Ac}=${y}; path=/; max-age=${Pc}`;
    },
    [n, g]
  ), v = u.useCallback(() => a ? c((b) => !b) : h((b) => !b), [a, h, c]);
  u.useEffect(() => {
    const b = (y) => {
      y.key === Nc && (y.metaKey || y.ctrlKey) && (y.preventDefault(), v());
    };
    return window.addEventListener("keydown", b), () => window.removeEventListener("keydown", b);
  }, [v]);
  const m = g ? "expanded" : "collapsed", x = u.useMemo(
    () => ({
      state: m,
      open: g,
      setOpen: h,
      isMobile: a,
      openMobile: l,
      setOpenMobile: c,
      toggleSidebar: v
    }),
    [m, g, h, a, l, c, v]
  );
  return /* @__PURE__ */ p.jsx(Ao.Provider, { value: x, children: /* @__PURE__ */ p.jsx(ko, { delayDuration: 0, children: /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": Tc,
        "--sidebar-width-icon": Oc,
        ...o
      },
      className: W(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        r
      ),
      ...i,
      children: s
    }
  ) }) });
}
function jc({
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
  const { isMobile: c, state: d, openMobile: f, setOpenMobile: g } = vn();
  return n === "none" ? /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "sidebar",
      className: W(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        r
      ),
      ...l,
      children: o
    }
  ) : c ? /* @__PURE__ */ p.jsx(Sa, { open: f, onOpenChange: g, ...l, children: /* @__PURE__ */ p.jsxs(
    Aa,
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
        /* @__PURE__ */ p.jsxs(Pa, { className: "sr-only", children: [
          /* @__PURE__ */ p.jsx(Ta, { children: "Sidebar" }),
          /* @__PURE__ */ p.jsx(Oa, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "flex h-full w-full flex-col", children: o })
      ]
    }
  ) }) : /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": d,
      "data-collapsible": d === "collapsed" ? n : "",
      "data-variant": t,
      "data-side": e,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ p.jsx(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: W(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ p.jsx(
          "div",
          {
            "data-slot": "sidebar-container",
            className: W(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              r
            ),
            ...l,
            children: /* @__PURE__ */ p.jsx(
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
function Mc({
  className: e,
  onClick: t,
  ...n
}) {
  const { toggleSidebar: r } = vn();
  return /* @__PURE__ */ p.jsxs(
    Gs,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: W("size-7", e),
      onClick: (o) => {
        t?.(o), r();
      },
      ...n,
      children: [
        /* @__PURE__ */ p.jsx(is, {}),
        /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function Dc({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: W("flex flex-col gap-2 py-3", e),
      ...t
    }
  );
}
function Lc({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: W("flex flex-col gap-2 px-5 mb-4", e),
      ...t
    }
  );
}
function Ic({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: W(
        "flex min-h-0 flex-1 flex-col gap-2 px-5 group-data-[collapsible=icon]:overflow-hidden",
        e
      ),
      ...t
    }
  );
}
function Fc({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: W("relative flex w-full min-w-0 flex-col", e),
      ...t
    }
  );
}
function $c({
  className: e,
  asChild: t = !1,
  ...n
}) {
  const r = t ? vt : "div";
  return /* @__PURE__ */ p.jsx(
    r,
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: W(
        " ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md mt-5 text-xs font-bold outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        e
      ),
      ...n
    }
  );
}
function zc({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: W("w-full text-sm", e),
      ...t
    }
  );
}
function Po({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: W("flex w-full min-w-0 flex-col gap-1", e),
      ...t
    }
  );
}
function To({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: W("group/menu-item relative   ", e),
      ...t
    }
  );
}
const Wc = Jt(
  "peer/menu-button flex w-full  items-center gap-3 overflow-hidden rounded-md text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "",
        // No hover here, handled below in active variants
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      },
      active: {
        true: "bg-primary text-white",
        // Active styles with no hover styles
        false: "bg-transparent hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        // Hover styles only when not active
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      active: !1
    }
  }
);
function Oo({
  asChild: e = !1,
  isActive: t = !1,
  variant: n = "default",
  size: r = "default",
  tooltip: o,
  className: s,
  ...i
}) {
  const a = e ? vt : "button", { isMobile: l, state: c } = vn(), d = /* @__PURE__ */ p.jsx(
    a,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": r,
      "data-active": t,
      className: W("p-2.5 mb-0.5 ", Wc({ variant: n, size: r, active: t }), s),
      ...i
    }
  );
  return o ? (typeof o == "string" && (o = {
    children: o
  }), /* @__PURE__ */ p.jsxs(Sc, { children: [
    /* @__PURE__ */ p.jsx(Rc, { asChild: !0, children: d }),
    /* @__PURE__ */ p.jsx(
      kc,
      {
        side: "right",
        align: "center",
        hidden: c !== "collapsed" || l,
        ...o
      }
    )
  ] })) : d;
}
const Bc = ({
  userName: e = "",
  designation: t = "",
  userimg: n = "",
  isCollapse: r = !1,
  onLogout: o,
  ClassName: s = ""
}) => {
  const i = nr(Be);
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx(Lc, { children: r ? "" : /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: xe("flex items-center gap-3  p-4 rounded-md ", s),
      style: { backgroundColor: i.themeSecondaryColor + 20 },
      children: [
        /* @__PURE__ */ p.jsx(
          "img",
          {
            src: n,
            alt: "profile-image",
            className: "w-10 h-10 rounded-full object-cover"
          }
        ),
        /* @__PURE__ */ p.jsxs("div", { children: [
          /* @__PURE__ */ p.jsx("p", { className: "text-lg font-medium", children: e }),
          /* @__PURE__ */ p.jsx("p", { className: "text-xs text-gray-400 ", children: t })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "ml-auto", children: /* @__PURE__ */ p.jsx(
          "button",
          {
            onClick: o,
            className: "p-2",
            children: /* @__PURE__ */ p.jsx(
              os,
              {
                size: 18,
                className: " text-primary cursor-pointer"
              }
            )
          }
        ) })
      ]
    }
  ) }) });
}, Be = gt.createContext({
  width: "260px",
  collapsewidth: "80px",
  textColor: "#2b2b2b",
  isCollapse: !1,
  themeColor: "#5d87ff",
  themeSecondaryColor: "#49beff",
  direction: "ltr",
  animation: !1
});
let Vc = () => {
  alert("Logout Successfully");
};
const ou = ({
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
  userimg: g = "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-1.jpg",
  onLogout: h = Vc,
  animation: v = !1,
  ClassName: m = "",
  side: x = "left",
  variant: b = "sidebar",
  collapsible: y = "icon",
  showTrigger: C = !1
}) => {
  const S = o ? n : t, R = a === "dark" ? "dark" : "";
  return a === "dark" && (r = "rgba(255,255,255, 0.9)"), /* @__PURE__ */ p.jsx(
    Be.Provider,
    {
      value: {
        width: t,
        collapsewidth: n,
        themeColor: s,
        textColor: r,
        themeSecondaryColor: i,
        direction: l,
        isCollapse: o,
        animation: v
      },
      children: /* @__PURE__ */ p.jsxs(_c, { children: [
        C && /* @__PURE__ */ p.jsx(Mc, {}),
        /* @__PURE__ */ p.jsx("div", { className: R, children: /* @__PURE__ */ p.jsxs(
          jc,
          {
            dir: l,
            style: { width: S, color: r },
            isCollapse: o,
            width: t,
            collapsewidth: n,
            collapsible: y,
            variant: b,
            side: x,
            className: xe("border-r border-border ", v && "transition-all duration-300 ease-in-out", m),
            children: [
              /* @__PURE__ */ p.jsx(Ic, { children: /* @__PURE__ */ p.jsx(Fc, { children: e }) }),
              f && /* @__PURE__ */ p.jsx(
                Bc,
                {
                  userName: c,
                  designation: d,
                  userimg: g,
                  isCollapse: o,
                  onLogout: h
                }
              )
            ]
          }
        ) })
      ] })
    }
  );
};
function No({
  component: e = "a",
  children: t,
  ...n
}) {
  return /* @__PURE__ */ p.jsx(e, { ...n, style: { textDecoration: "none" }, children: t });
}
const su = ({
  children: e,
  img: t = "https://adminmart.com/wp-content/uploads/2024/03/logo-admin-mart-news.png",
  href: n = "/",
  component: r
}) => {
  const o = gt.useContext(Be);
  return /* @__PURE__ */ p.jsx(Dc, { children: /* @__PURE__ */ p.jsx(
    "div",
    {
      className: `min-h-[50px] overflow-hidden flex w-[253px] whitespace-nowrap  line-clamp-1  py-2  overflow-ellipsis ${o.direction === "rtl" && o.isCollapse === !1 ? " rtl:scale-x-[-1]" : ""} ${o.isCollapse === !1 ? "justify-end" : "justify-start"} ${o.direction === "ltr" && "justify-start"} `,
      children: /* @__PURE__ */ p.jsx(
        No,
        {
          href: n,
          component: r,
          to: n,
          className: `w-[40px] flex ${o.direction === "rtl" ? "justify-end" : ""} ${o.isCollapse ? "overflow-hidden" : "overflow-visible"}`,
          children: t ? /* @__PURE__ */ p.jsx("img", { src: t, alt: "Logo", style: { maxWidth: "unset" } }) : /* @__PURE__ */ p.jsx("span", { className: "text-gray-800", children: e })
        }
      )
    }
  ) });
}, iu = ({
  children: e,
  subHeading: t = "menu",
  ClassName: n
}) => {
  const r = nr(Be);
  return /* @__PURE__ */ p.jsxs("div", { children: [
    /* @__PURE__ */ p.jsx($c, { className: W(r.textColor, n), children: r.isCollapse ? "..." : t }),
    /* @__PURE__ */ p.jsx("div", { children: e })
  ] });
}, Hc = Jt(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-primary [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Gc({
  className: e,
  variant: t,
  asChild: n = !1,
  ...r
}) {
  const o = n ? vt : "span";
  return /* @__PURE__ */ p.jsx(
    o,
    {
      "data-slot": "badge",
      className: W(Hc({ variant: t }), e, "!ml-auto"),
      ...r
    }
  );
}
const au = ({
  children: e,
  icon: t,
  component: n,
  badge: r = !1,
  badgeColor: o = "",
  badgeTextColor: s = "",
  badgeContent: i = "New",
  textFontSize: a = "text-sm",
  borderRadius: l = "rounded-md",
  disabled: c = !1,
  badgeType: d = "default",
  link: f = "#",
  target: g = "",
  isSelected: h = !1,
  ClassName: v = "",
  variant: m = "default",
  size: x = "default"
}) => {
  const b = gt.useContext(Be), y = b?.isCollapse;
  return /* @__PURE__ */ p.jsx(Po, { children: /* @__PURE__ */ p.jsx(To, { children: /* @__PURE__ */ p.jsx(No, { to: f, component: n, target: g, children: /* @__PURE__ */ p.jsx(Oo, { asChild: !0, variant: m, size: x, isActive: h, children: /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: W(
        "h-full whitespace-nowrap transition-all duration-200 ease-in-out",
        l,
        h ? "text-white " : `text-[${b.textColor}]`,
        c ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        v
      ),
      style: {
        backgroundColor: h ? b.themeColor : void 0,
        transition: "transform 0.3s ease"
      },
      onMouseEnter: (C) => {
        C.currentTarget.style.transform = "translateX(4px)", C.currentTarget.style.backgroundColor = h ? b.themeColor : `${b.themeColor}1a`, C.currentTarget.style.color = h ? "white" : `${b.themeColor}`;
      },
      onMouseLeave: (C) => {
        C.currentTarget.style.transform = "translateX(0)", C.currentTarget.style.backgroundColor = h ? b.themeColor : `${b.themeColor}00`, C.currentTarget.style.color = h ? "white" : `${b.textColor}`;
      },
      children: [
        /* @__PURE__ */ p.jsx(
          "div",
          {
            children: t ?? /* @__PURE__ */ p.jsx(lr, { size: 18 })
          }
        ),
        !y && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between w-full ", children: [
          /* @__PURE__ */ p.jsx("span", { className: W(a, "leading-tight truncate"), children: e }),
          r && /* @__PURE__ */ p.jsx(
            Gc,
            {
              variant: d,
              className: W(
                o,
                s
              ),
              children: i
            }
          )
        ] })
      ]
    }
  ) }) }) }) });
};
var At = "Collapsible", [Uc, lu] = bt(At), [Yc, bn] = Uc(At), _o = u.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: s,
      onOpenChange: i,
      ...a
    } = e, [l, c] = en({
      prop: r,
      defaultProp: o ?? !1,
      onChange: i,
      caller: At
    });
    return /* @__PURE__ */ p.jsx(
      Yc,
      {
        scope: n,
        disabled: s,
        contentId: Ue(),
        open: l,
        onOpenToggle: u.useCallback(() => c((d) => !d), [c]),
        children: /* @__PURE__ */ p.jsx(
          Z.div,
          {
            "data-state": yn(l),
            "data-disabled": s ? "" : void 0,
            ...a,
            ref: t
          }
        )
      }
    );
  }
);
_o.displayName = At;
var jo = "CollapsibleTrigger", Mo = u.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = bn(jo, n);
    return /* @__PURE__ */ p.jsx(
      Z.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": yn(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: J(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Mo.displayName = jo;
var xn = "CollapsibleContent", Do = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = bn(xn, e.__scopeCollapsible);
    return /* @__PURE__ */ p.jsx(ke, { present: n || o.open, children: ({ present: s }) => /* @__PURE__ */ p.jsx(Xc, { ...r, ref: t, present: s }) });
  }
);
Do.displayName = xn;
var Xc = u.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...s } = e, i = bn(xn, n), [a, l] = u.useState(r), c = u.useRef(null), d = ne(t, c), f = u.useRef(0), g = f.current, h = u.useRef(0), v = h.current, m = i.open || a, x = u.useRef(m), b = u.useRef(void 0);
  return u.useEffect(() => {
    const y = requestAnimationFrame(() => x.current = !1);
    return () => cancelAnimationFrame(y);
  }, []), pe(() => {
    const y = c.current;
    if (y) {
      b.current = b.current || {
        transitionDuration: y.style.transitionDuration,
        animationName: y.style.animationName
      }, y.style.transitionDuration = "0s", y.style.animationName = "none";
      const C = y.getBoundingClientRect();
      f.current = C.height, h.current = C.width, x.current || (y.style.transitionDuration = b.current.transitionDuration, y.style.animationName = b.current.animationName), l(r);
    }
  }, [i.open, r]), /* @__PURE__ */ p.jsx(
    Z.div,
    {
      "data-state": yn(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
      hidden: !m,
      ...s,
      ref: d,
      style: {
        "--radix-collapsible-content-height": g ? `${g}px` : void 0,
        "--radix-collapsible-content-width": v ? `${v}px` : void 0,
        ...e.style
      },
      children: m && o
    }
  );
});
function yn(e) {
  return e ? "open" : "closed";
}
var Kc = _o;
function qc({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(Kc, { "data-slot": "collapsible", ...e });
}
function Zc({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(
    Mo,
    {
      "data-slot": "collapsible-trigger",
      ...e
    }
  );
}
function Jc({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(
    Do,
    {
      "data-slot": "collapsible-content",
      ...e
    }
  );
}
function cu({
  title: e,
  children: t,
  icon: n,
  textFontSize: r = "text-sm",
  disabled: o = !1,
  borderRadius: s = "rounded-md",
  ClassName: i = ""
}) {
  const [a, l] = u.useState(!1), c = u.useContext(Be);
  return /* @__PURE__ */ p.jsx("div", { className: xe("w-full", i), children: /* @__PURE__ */ p.jsxs(qc, { open: a, onOpenChange: l, className: "flex flex-col", children: [
    /* @__PURE__ */ p.jsx(Zc, { asChild: !0, children: /* @__PURE__ */ p.jsx(
      "button",
      {
        disabled: o,
        onClick: () => l(!a),
        className: xe(
          "p-2.5 transition-all duration-200 ease-in-out flex items-center gap-3",
          s,
          a ? "text-white" : `text-[${c.textColor}]`,
          c?.animation && "",
          {
            "cursor-not-allowed opacity-50": o,
            "cursor-pointer": !o
          }
        ),
        style: {
          backgroundColor: a ? c?.themeColor : void 0
        },
        onMouseEnter: (d) => {
          d.currentTarget.style.transform = "translateX(4px)", d.currentTarget.style.backgroundColor = !o && a ? c.themeColor : `${c.themeColor}1a`, d.currentTarget.style.color = !o && a ? "white" : `${c.themeColor}`;
        },
        onMouseLeave: (d) => {
          d.currentTarget.style.transform = "translateX(0)", d.currentTarget.style.backgroundColor = !o && a ? c.themeColor : `${c.themeColor}00`, d.currentTarget.style.color = !o && a ? "white" : `${c.textColor}`;
        },
        children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between w-full", children: [
          /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ p.jsx("span", { className: "text-inherit", children: n || /* @__PURE__ */ p.jsx(lr, { size: 20 }) }),
            !c?.isCollapse && /* @__PURE__ */ p.jsx(
              "span",
              {
                className: xe(r, "truncate leading-tight"),
                children: e
              }
            )
          ] }),
          !c?.isCollapse && (a ? /* @__PURE__ */ p.jsx(Qo, { size: 16 }) : /* @__PURE__ */ p.jsx(ts, { size: 16 }))
        ] })
      }
    ) }),
    /* @__PURE__ */ p.jsx(
      Jc,
      {
        className: xe(
          " flex flex-col",
          c?.isCollapse && "items-center"
        ),
        children: /* @__PURE__ */ p.jsx(zc, { children: /* @__PURE__ */ p.jsx(Po, { children: u.Children.map(t, (d, f) => /* @__PURE__ */ p.jsx(To, { children: /* @__PURE__ */ p.jsx(Oo, { asChild: !0, children: d }) }, f)) }) })
      }
    )
  ] }) });
}
export {
  su as AMLogo,
  iu as AMMenu,
  au as AMMenuItem,
  ou as AMSidebar,
  cu as AMSubmenu
};
