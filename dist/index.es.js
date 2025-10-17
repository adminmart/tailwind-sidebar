import * as u from "react";
import gt, { forwardRef as nr, createElement as $t, useState as Io, useLayoutEffect as Fo, useContext as Zt, useEffect as zo } from "react";
import * as rr from "react-dom";
import $o from "react-dom";
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
var Cn;
function Wo() {
  if (Cn) return Ve;
  Cn = 1;
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
var En;
function Bo() {
  return En || (En = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(w) {
      if (w == null) return null;
      if (typeof w == "function")
        return w.$$typeof === $ ? null : w.displayName || w.name || null;
      if (typeof w == "string") return w;
      switch (w) {
        case m:
          return "Fragment";
        case x:
          return "Profiler";
        case b:
          return "StrictMode";
        case R:
          return "Suspense";
        case T:
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
          case E:
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
    function c(w, N, F, j, V, q, ge, z) {
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
        value: z
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    }
    function d(w, N, F, j, V, q, ge, z) {
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
        z
      );
    }
    function f(w) {
      typeof w == "object" && w !== null && w.$$typeof === h && w._store && (w._store.validated = 1);
    }
    var g = gt, h = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), E = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), M = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), U = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, B = Array.isArray, I = console.createTask ? console.createTask : function() {
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
    )(), C = I(r(s)), Y = {};
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
        q ? I(r(w)) : C
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
        q ? I(r(w)) : C
      );
    };
  })()), He;
}
var Sn;
function Vo() {
  return Sn || (Sn = 1, process.env.NODE_ENV === "production" ? Qe.exports = Wo() : Qe.exports = Bo()), Qe.exports;
}
var p = Vo();
function Rn(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function or(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = Rn(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : Rn(e[o], null);
        }
      };
  };
}
function ne(...e) {
  return u.useCallback(or(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
  const t = /* @__PURE__ */ Ho(e), n = u.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = u.Children.toArray(s), l = a.find(Uo);
    if (l) {
      const c = l.props.children, d = a.map((f) => f === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : f);
      return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var vt = /* @__PURE__ */ Jt("Slot");
// @__NO_SIDE_EFFECTS__
function Ho(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (u.isValidElement(o)) {
      const i = Xo(o), a = Yo(s, o.props);
      return o.type !== u.Fragment && (a.ref = r ? or(r, i) : i), u.cloneElement(o, a);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var sr = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Go(e) {
  const t = ({ children: n }) => /* @__PURE__ */ p.jsx(p.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = sr, t;
}
function Uo(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === sr;
}
function Yo(e, t) {
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
function Xo(e) {
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
const kn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, An = xe, Qt = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return An(e, n?.class, n?.className);
  const { variants: o, defaultVariants: s } = t, i = Object.keys(o).map((c) => {
    const d = n?.[c], f = s?.[c];
    if (d === null) return null;
    const g = kn(d) || kn(f);
    return o[c][g];
  }), a = n && Object.entries(n).reduce((c, d) => {
    let [f, g] = d;
    return g === void 0 || (c[f] = g), c;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, d) => {
    let { class: f, className: g, ...h } = d;
    return Object.entries(h).every((v) => {
      let [m, b] = v;
      return Array.isArray(b) ? b.includes({
        ...s,
        ...a
      }[m]) : {
        ...s,
        ...a
      }[m] === b;
    }) ? [
      ...c,
      f,
      g
    ] : c;
  }, []);
  return An(e, i, l, n?.class, n?.className);
};
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ko = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), qo = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), Pn = (e) => {
  const t = qo(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, ar = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), Zo = (e) => {
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
var Jo = {
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
const Qo = nr(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: s,
    iconNode: i,
    ...a
  }, l) => $t(
    "svg",
    {
      ref: l,
      ...Jo,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: ar("lucide", o),
      ...!s && !Zo(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...i.map(([c, d]) => $t(c, d)),
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
const Fe = (e, t) => {
  const n = nr(
    ({ className: r, ...o }, s) => $t(Qo, {
      ref: s,
      iconNode: t,
      className: ar(
        `lucide-${Ko(Pn(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = Pn(e), n;
};
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ts = Fe("chevron-down", es);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], rs = Fe("chevron-right", ns);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
], lr = Fe("circle-dot", os);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
], is = Fe("log-out", ss);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const as = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
], ls = Fe("panel-left", as);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cs = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], us = Fe("x", cs), Pt = 768;
function ds() {
  const [e, t] = u.useState(void 0);
  return u.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${Pt - 1}px)`), r = () => {
      t(window.innerWidth < Pt);
    };
    return n.addEventListener("change", r), t(window.innerWidth < Pt), () => n.removeEventListener("change", r);
  }, []), !!e;
}
const en = "-", fs = (e) => {
  const t = ms(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(en);
      return a[0] === "" && a.length !== 1 && a.shift(), cr(a, t) || ps(i);
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
  const s = e.join(en);
  return t.validators.find(({
    validator: i
  }) => i(s))?.classGroupId;
}, On = /^\[(.+)\]$/, ps = (e) => {
  if (On.test(e)) {
    const t = On.exec(e)[1], n = t?.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, ms = (e) => {
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
      if (hs(o)) {
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
  return t.split(en).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, hs = (e) => e.isThemeGetter, gs = (e) => {
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
}, Bt = "!", Vt = ":", vs = Vt.length, bs = (e) => {
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
          s.push(o.slice(l, v)), l = v + vs;
          continue;
        }
        if (m === "/") {
          c = v;
          continue;
        }
      }
      m === "[" ? i++ : m === "]" ? i-- : m === "(" ? a++ : m === ")" && a--;
    }
    const d = s.length === 0 ? o : o.substring(l), f = xs(d), g = f !== d, h = c && c > l ? c - l : void 0;
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
}, xs = (e) => e.endsWith(Bt) ? e.substring(0, e.length - 1) : e.startsWith(Bt) ? e.substring(1) : e, ys = (e) => {
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
}, ws = (e) => ({
  cache: gs(e.cacheSize),
  parseClassName: bs(e),
  sortModifiers: ys(e),
  ...fs(e)
}), Cs = /\s+/, Es = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, i = [], a = e.trim().split(Cs);
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
    let b = !!m, x = r(b ? v.substring(0, m) : v);
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
    const y = s(g).join(":"), E = h ? y + Bt : y, S = E + x;
    if (i.includes(S))
      continue;
    i.push(S);
    const R = o(x, b);
    for (let T = 0; T < R.length; ++T) {
      const A = R[T];
      i.push(E + A);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Ss() {
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
function Rs(e, ...t) {
  let n, r, o, s = i;
  function i(l) {
    const c = t.reduce((d, f) => f(d), e());
    return n = ws(c), r = n.cache.get, o = n.cache.set, s = a, a(l);
  }
  function a(l) {
    const c = r(l);
    if (c)
      return c;
    const d = Es(l, n);
    return o(l, d), d;
  }
  return function() {
    return s(Ss.apply(null, arguments));
  };
}
const K = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, dr = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, fr = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ks = /^\d+\/\d+$/, As = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ps = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Os = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Ts = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ns = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Oe = (e) => ks.test(e), _ = (e) => !!e && !Number.isNaN(Number(e)), ve = (e) => !!e && Number.isInteger(Number(e)), Ot = (e) => e.endsWith("%") && _(e.slice(0, -1)), fe = (e) => As.test(e), _s = () => !0, js = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ps.test(e) && !Os.test(e)
), pr = () => !1, Ms = (e) => Ts.test(e), Ds = (e) => Ns.test(e), Ls = (e) => !P(e) && !O(e), Is = (e) => ze(e, gr, pr), P = (e) => dr.test(e), Ee = (e) => ze(e, vr, js), Tt = (e) => ze(e, Bs, _), Nn = (e) => ze(e, mr, pr), Fs = (e) => ze(e, hr, Ds), et = (e) => ze(e, br, Ms), O = (e) => fr.test(e), Ge = (e) => $e(e, vr), zs = (e) => $e(e, Vs), _n = (e) => $e(e, mr), $s = (e) => $e(e, gr), Ws = (e) => $e(e, hr), tt = (e) => $e(e, br, !0), ze = (e, t, n) => {
  const r = dr.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, $e = (e, t, n = !1) => {
  const r = fr.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, mr = (e) => e === "position" || e === "percentage", hr = (e) => e === "image" || e === "url", gr = (e) => e === "length" || e === "size" || e === "bg-size", vr = (e) => e === "length", Bs = (e) => e === "number", Vs = (e) => e === "family-name", br = (e) => e === "shadow", Hs = () => {
  const e = K("color"), t = K("font"), n = K("text"), r = K("font-weight"), o = K("tracking"), s = K("leading"), i = K("breakpoint"), a = K("container"), l = K("spacing"), c = K("radius"), d = K("shadow"), f = K("inset-shadow"), g = K("text-shadow"), h = K("drop-shadow"), v = K("blur"), m = K("perspective"), b = K("aspect"), x = K("ease"), y = K("animate"), E = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
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
  ], R = () => [...S(), O, P], T = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", "contain", "none"], k = () => [O, P, l], M = () => [Oe, "full", "auto", ...k()], $ = () => [ve, "none", "subgrid", O, P], U = () => ["auto", {
    span: ["full", ve, O, P]
  }, ve, O, P], H = () => [ve, "auto", O, P], B = () => ["auto", "min", "max", "fr", O, P], I = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], G = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], D = () => ["auto", ...k()], L = () => [Oe, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...k()], C = () => [e, O, P], Y = () => [...S(), _n, Nn, {
    position: [O, P]
  }], w = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], N = () => ["auto", "cover", "contain", $s, Is, {
    size: [O, P]
  }], F = () => [Ot, Ge, Ee], j = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    O,
    P
  ], V = () => ["", _, Ge, Ee], q = () => ["solid", "dashed", "dotted", "double"], ge = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], z = () => [_, Ot, _n, Nn], X = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    O,
    P
  ], Q = () => ["none", _, O, P], ie = () => ["none", _, O, P], Ce = () => [_, O, P], Pe = () => [Oe, "full", ...k()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [fe],
      breakpoint: [fe],
      color: [_s],
      container: [fe],
      "drop-shadow": [fe],
      ease: ["in", "out", "in-out"],
      font: [Ls],
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
        aspect: ["auto", "square", Oe, P, O, b]
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
        columns: [_, P, O, a]
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
        object: R()
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
        z: [ve, "auto", O, P]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Oe, "full", "auto", a, ...k()]
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
        flex: [_, Oe, "auto", "initial", "none", P]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", _, O, P]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", _, O, P]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ve, "first", "last", "none", O, P]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": $()
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
        "grid-rows": $()
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
        font: [r, O, Tt]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ot, P]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [zs, P, t]
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
        tracking: [o, O, P]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [_, "none", O, Tt]
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
        "list-image": ["none", O, P]
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
        list: ["disc", "decimal", "none", O, P]
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
        decoration: [_, "from-font", "auto", O, Ee]
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
        "underline-offset": [_, "auto", O, P]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", O, P]
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
        content: ["none", O, P]
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
          }, ve, O, P],
          radial: ["", O, P],
          conic: [ve, O, P]
        }, Ws, Fs]
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
        "outline-offset": [_, O, P]
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
          tt,
          et
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
        "inset-shadow": ["none", f, tt, et]
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
        ring: C()
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
        "ring-offset": C()
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
        "inset-ring": C()
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
        "text-shadow": C()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [_, O, P]
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
        "mask-linear-from": z()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": z()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": C()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": C()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": z()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": z()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": C()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": C()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": z()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": z()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": C()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": C()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": z()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": z()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": C()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": C()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": z()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": z()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": C()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": C()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": z()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": z()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": C()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": C()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": z()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": z()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": C()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": C()
      }],
      "mask-image-radial": [{
        "mask-radial": [O, P]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": z()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": z()
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
        "mask-conic-from": z()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": z()
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
        mask: ["none", O, P]
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
          O,
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
        brightness: [_, O, P]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [_, O, P]
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
        "drop-shadow": C()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", _, O, P]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [_, O, P]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", _, O, P]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [_, O, P]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", _, O, P]
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
          O,
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
        "backdrop-brightness": [_, O, P]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [_, O, P]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", _, O, P]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [_, O, P]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", _, O, P]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [_, O, P]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [_, O, P]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", _, O, P]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", O, P]
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
        duration: [_, "initial", O, P]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", x, O, P]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [_, O, P]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, O, P]
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
        perspective: [m, O, P]
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
        transform: [O, P, "", "none", "gpu", "cpu"]
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
        translate: Pe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Pe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Pe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Pe()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", O, P]
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
        "will-change": ["auto", "scroll", "contents", "transform", O, P]
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
        stroke: [_, Ge, Ee, Tt]
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
}, Gs = /* @__PURE__ */ Rs(Hs);
function W(...e) {
  return Gs(xe(e));
}
const Us = Qt(
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
function Ys({
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
      className: W(Us({ variant: t, size: n, className: e })),
      ...o
    }
  );
}
var Xs = [
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
], Z = Xs.reduce((e, t) => {
  const n = /* @__PURE__ */ Jt(`Primitive.${t}`), r = u.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Ks(e, t) {
  e && rr.flushSync(() => e.dispatchEvent(t));
}
function J(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
function qs(e, t) {
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
      const { scope: g, children: h, ...v } = f, m = g?.[e]?.[l] || a, b = u.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ p.jsx(m.Provider, { value: b, children: h });
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
  return o.scopeName = e, [r, Zs(o, ...t)];
}
function Zs(...e) {
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
}, Js = u[" useId ".trim().toString()] || (() => {
}), Qs = 0;
function Ue(e) {
  const [t, n] = u.useState(Js());
  return pe(() => {
    n((r) => r ?? String(Qs++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var ei = u[" useInsertionEffect ".trim().toString()] || pe;
function tn({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, i] = ti({
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
        const f = ni(d) ? d(e) : d;
        f !== e && i.current?.(f);
      } else
        s(d);
    },
    [a, e, s, i]
  );
  return [l, c];
}
function ti({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), o = u.useRef(n), s = u.useRef(t);
  return ei(() => {
    s.current = t;
  }, [t]), u.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
function ni(e) {
  return typeof e == "function";
}
function De(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => t.current?.(...n), []);
}
function ri(e, t = globalThis?.document) {
  const n = De(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var oi = "DismissableLayer", Ht = "dismissableLayer.update", si = "dismissableLayer.pointerDownOutside", ii = "dismissableLayer.focusOutside", jn, xr = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), nn = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...l
    } = e, c = u.useContext(xr), [d, f] = u.useState(null), g = d?.ownerDocument ?? globalThis?.document, [, h] = u.useState({}), v = ne(t, (A) => f(A)), m = Array.from(c.layers), [b] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), x = m.indexOf(b), y = d ? m.indexOf(d) : -1, E = c.layersWithOutsidePointerEventsDisabled.size > 0, S = y >= x, R = ci((A) => {
      const k = A.target, M = [...c.branches].some(($) => $.contains(k));
      !S || M || (o?.(A), i?.(A), A.defaultPrevented || a?.());
    }, g), T = ui((A) => {
      const k = A.target;
      [...c.branches].some(($) => $.contains(k)) || (s?.(A), i?.(A), A.defaultPrevented || a?.());
    }, g);
    return ri((A) => {
      y === c.layers.size - 1 && (r?.(A), !A.defaultPrevented && a && (A.preventDefault(), a()));
    }, g), u.useEffect(() => {
      if (d)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (jn = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), Mn(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = jn);
        };
    }, [d, g, n, c]), u.useEffect(() => () => {
      d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), Mn());
    }, [d, c]), u.useEffect(() => {
      const A = () => h({});
      return document.addEventListener(Ht, A), () => document.removeEventListener(Ht, A);
    }, []), /* @__PURE__ */ p.jsx(
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
          R.onPointerDownCapture
        )
      }
    );
  }
);
nn.displayName = oi;
var ai = "DismissableLayerBranch", li = u.forwardRef((e, t) => {
  const n = u.useContext(xr), r = u.useRef(null), o = ne(t, r);
  return u.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ p.jsx(Z.div, { ...e, ref: o });
});
li.displayName = ai;
function ci(e, t = globalThis?.document) {
  const n = De(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          yr(
            si,
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
function ui(e, t = globalThis?.document) {
  const n = De(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && yr(ii, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Mn() {
  const e = new CustomEvent(Ht);
  document.dispatchEvent(e);
}
function yr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ks(o, s) : o.dispatchEvent(s);
}
var Nt = "focusScope.autoFocusOnMount", _t = "focusScope.autoFocusOnUnmount", Dn = { bubbles: !1, cancelable: !0 }, di = "FocusScope", wr = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = u.useState(null), c = De(o), d = De(s), f = u.useRef(null), g = ne(t, (m) => l(m)), h = u.useRef({
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
      let m = function(E) {
        if (h.paused || !a) return;
        const S = E.target;
        a.contains(S) ? f.current = S : be(f.current, { select: !0 });
      }, b = function(E) {
        if (h.paused || !a) return;
        const S = E.relatedTarget;
        S !== null && (a.contains(S) || be(f.current, { select: !0 }));
      }, x = function(E) {
        if (document.activeElement === document.body)
          for (const R of E)
            R.removedNodes.length > 0 && be(a);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", b);
      const y = new MutationObserver(x);
      return a && y.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", b), y.disconnect();
      };
    }
  }, [r, a, h.paused]), u.useEffect(() => {
    if (a) {
      In.add(h);
      const m = document.activeElement;
      if (!a.contains(m)) {
        const x = new CustomEvent(Nt, Dn);
        a.addEventListener(Nt, c), a.dispatchEvent(x), x.defaultPrevented || (fi(vi(Cr(a)), { select: !0 }), document.activeElement === m && be(a));
      }
      return () => {
        a.removeEventListener(Nt, c), setTimeout(() => {
          const x = new CustomEvent(_t, Dn);
          a.addEventListener(_t, d), a.dispatchEvent(x), x.defaultPrevented || be(m ?? document.body, { select: !0 }), a.removeEventListener(_t, d), In.remove(h);
        }, 0);
      };
    }
  }, [a, c, d, h]);
  const v = u.useCallback(
    (m) => {
      if (!n && !r || h.paused) return;
      const b = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, x = document.activeElement;
      if (b && x) {
        const y = m.currentTarget, [E, S] = pi(y);
        E && S ? !m.shiftKey && x === S ? (m.preventDefault(), n && be(E, { select: !0 })) : m.shiftKey && x === E && (m.preventDefault(), n && be(S, { select: !0 })) : x === y && m.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ p.jsx(Z.div, { tabIndex: -1, ...i, ref: g, onKeyDown: v });
});
wr.displayName = di;
function fi(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (be(r, { select: t }), document.activeElement !== n) return;
}
function pi(e) {
  const t = Cr(e), n = Ln(t, e), r = Ln(t.reverse(), e);
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
function Ln(e, t) {
  for (const n of e)
    if (!mi(n, { upTo: t })) return n;
}
function mi(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function hi(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function be(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && hi(e) && t && e.select();
  }
}
var In = gi();
function gi() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = Fn(e, t), e.unshift(t);
    },
    remove(t) {
      e = Fn(e, t), e[0]?.resume();
    }
  };
}
function Fn(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function vi(e) {
  return e.filter((t) => t.tagName !== "A");
}
var bi = "Portal", rn = u.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, s] = u.useState(!1);
  pe(() => s(!0), []);
  const i = n || o && globalThis?.document?.body;
  return i ? $o.createPortal(/* @__PURE__ */ p.jsx(Z.div, { ...r, ref: t }), i) : null;
});
rn.displayName = bi;
function xi(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var Ae = (e) => {
  const { present: t, children: n } = e, r = yi(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), s = ne(r.ref, wi(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: s }) : null;
};
Ae.displayName = "Presence";
function yi(e) {
  const [t, n] = u.useState(), r = u.useRef(null), o = u.useRef(e), s = u.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = xi(i, {
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
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
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
function wi(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var jt = 0;
function Ci() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? zn()), document.body.insertAdjacentElement("beforeend", e[1] ?? zn()), jt++, () => {
      jt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), jt--;
    };
  }, []);
}
function zn() {
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
function Ei(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var lt = "right-scroll-bar-position", ct = "width-before-scroll-bar", Si = "with-scroll-bars-hidden", Ri = "--removed-body-scroll-bar-size";
function Mt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ki(e, t) {
  var n = Io(function() {
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
var Ai = typeof window < "u" ? u.useLayoutEffect : u.useEffect, $n = /* @__PURE__ */ new WeakMap();
function Pi(e, t) {
  var n = ki(null, function(r) {
    return e.forEach(function(o) {
      return Mt(o, r);
    });
  });
  return Ai(function() {
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
function Oi(e) {
  return e;
}
function Ti(e, t) {
  t === void 0 && (t = Oi);
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
function Ni(e) {
  e === void 0 && (e = {});
  var t = Ti(null);
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
function _i(e, t) {
  return e.useMedium(t), Sr;
}
var Rr = Ni(), Dt = function() {
}, xt = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: Dt,
    onWheelCapture: Dt,
    onTouchMoveCapture: Dt
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, d = e.enabled, f = e.shards, g = e.sideCar, h = e.noRelative, v = e.noIsolation, m = e.inert, b = e.allowPinchZoom, x = e.as, y = x === void 0 ? "div" : x, E = e.gapMode, S = Er(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = g, T = Pi([n, t]), A = ae(ae({}, S), o);
  return u.createElement(
    u.Fragment,
    null,
    d && u.createElement(R, { sideCar: Rr, removeScrollBar: c, shards: f, noRelative: h, noIsolation: v, inert: m, setCallbacks: s, allowPinchZoom: !!b, lockRef: n, gapMode: E }),
    i ? u.cloneElement(u.Children.only(a), ae(ae({}, A), { ref: T })) : u.createElement(y, ae({}, A, { className: l, ref: T }), a)
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
var ji = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Mi() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ji();
  return t && e.setAttribute("nonce", t), e;
}
function Di(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Li(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Ii = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Mi()) && (Di(t, n), Li(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Fi = function() {
  var e = Ii();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, kr = function() {
  var e = Fi(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, zi = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Lt = function(e) {
  return parseInt(e || "", 10) || 0;
}, $i = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Lt(n), Lt(r), Lt(o)];
}, Wi = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return zi;
  var t = $i(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Bi = kr(), je = "data-scroll-locked", Vi = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Si, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(je, `] {
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
  
  body[`).concat(je, `] {
    `).concat(Ri, ": ").concat(a, `px;
  }
`);
}, Wn = function() {
  var e = parseInt(document.body.getAttribute(je) || "0", 10);
  return isFinite(e) ? e : 0;
}, Hi = function() {
  u.useEffect(function() {
    return document.body.setAttribute(je, (Wn() + 1).toString()), function() {
      var e = Wn() - 1;
      e <= 0 ? document.body.removeAttribute(je) : document.body.setAttribute(je, e.toString());
    };
  }, []);
}, Gi = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Hi();
  var s = u.useMemo(function() {
    return Wi(o);
  }, [o]);
  return u.createElement(Bi, { styles: Vi(s, !t, o, n ? "" : "!important") });
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
var Te = Gt ? { passive: !1 } : !1, Ui = function(e) {
  return e.tagName === "TEXTAREA";
}, Ar = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Ui(e) && n[t] === "visible")
  );
}, Yi = function(e) {
  return Ar(e, "overflowY");
}, Xi = function(e) {
  return Ar(e, "overflowX");
}, Bn = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Pr(e, r);
    if (o) {
      var s = Or(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Ki = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, qi = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Pr = function(e, t) {
  return e === "v" ? Yi(t) : Xi(t);
}, Or = function(e, t) {
  return e === "v" ? Ki(t) : qi(t);
}, Zi = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Ji = function(e, t, n, r, o) {
  var s = Zi(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, l = t.contains(a), c = !1, d = i > 0, f = 0, g = 0;
  do {
    if (!a)
      break;
    var h = Or(e, a), v = h[0], m = h[1], b = h[2], x = m - b - s * v;
    (v || x) && Pr(e, a) && (f += x, g += v);
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
}, Vn = function(e) {
  return [e.deltaX, e.deltaY];
}, Hn = function(e) {
  return e && "current" in e ? e.current : e;
}, Qi = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, ea = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ta = 0, Ne = [];
function na(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(ta++)[0], s = u.useState(kr)[0], i = u.useRef(e);
  u.useEffect(function() {
    i.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = Ei([e.lockRef.current], (e.shards || []).map(Hn), !0).filter(Boolean);
      return m.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = u.useCallback(function(m, b) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !i.current.allowPinchZoom;
    var x = ot(m), y = n.current, E = "deltaX" in m ? m.deltaX : y[0] - x[0], S = "deltaY" in m ? m.deltaY : y[1] - x[1], R, T = m.target, A = Math.abs(E) > Math.abs(S) ? "h" : "v";
    if ("touches" in m && A === "h" && T.type === "range")
      return !1;
    var k = Bn(A, T);
    if (!k)
      return !0;
    if (k ? R = A : (R = A === "v" ? "h" : "v", k = Bn(A, T)), !k)
      return !1;
    if (!r.current && "changedTouches" in m && (E || S) && (r.current = R), !R)
      return !0;
    var M = r.current || R;
    return Ji(M, b, m, M === "h" ? E : S);
  }, []), l = u.useCallback(function(m) {
    var b = m;
    if (!(!Ne.length || Ne[Ne.length - 1] !== s)) {
      var x = "deltaY" in b ? Vn(b) : ot(b), y = t.current.filter(function(R) {
        return R.name === b.type && (R.target === b.target || b.target === R.shadowParent) && Qi(R.delta, x);
      })[0];
      if (y && y.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!y) {
        var E = (i.current.shards || []).map(Hn).filter(Boolean).filter(function(R) {
          return R.contains(b.target);
        }), S = E.length > 0 ? a(b, E[0]) : !i.current.noIsolation;
        S && b.cancelable && b.preventDefault();
      }
    }
  }, []), c = u.useCallback(function(m, b, x, y) {
    var E = { name: m, delta: b, target: x, should: y, shadowParent: ra(x) };
    t.current.push(E), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== E;
      });
    }, 1);
  }, []), d = u.useCallback(function(m) {
    n.current = ot(m), r.current = void 0;
  }, []), f = u.useCallback(function(m) {
    c(m.type, Vn(m), m.target, a(m, e.lockRef.current));
  }, []), g = u.useCallback(function(m) {
    c(m.type, ot(m), m.target, a(m, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return Ne.push(s), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: g
    }), document.addEventListener("wheel", l, Te), document.addEventListener("touchmove", l, Te), document.addEventListener("touchstart", d, Te), function() {
      Ne = Ne.filter(function(m) {
        return m !== s;
      }), document.removeEventListener("wheel", l, Te), document.removeEventListener("touchmove", l, Te), document.removeEventListener("touchstart", d, Te);
    };
  }, []);
  var h = e.removeScrollBar, v = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    v ? u.createElement(s, { styles: ea(o) }) : null,
    h ? u.createElement(Gi, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function ra(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const oa = _i(Rr, na);
var Tr = u.forwardRef(function(e, t) {
  return u.createElement(xt, ae({}, e, { ref: t, sideCar: oa }));
});
Tr.classNames = xt.classNames;
var sa = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, _e = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakMap(), it = {}, It = 0, Nr = function(e) {
  return e && (e.host || Nr(e.parentNode));
}, ia = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Nr(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, aa = function(e, t, n, r) {
  var o = ia(t, Array.isArray(e) ? e : [e]);
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
          var h = g.getAttribute(r), v = h !== null && h !== "false", m = (_e.get(g) || 0) + 1, b = (s.get(g) || 0) + 1;
          _e.set(g, m), s.set(g, b), i.push(g), m === 1 && v && st.set(g, !0), b === 1 && g.setAttribute(n, "true"), v || g.setAttribute(r, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", g, x);
        }
    });
  };
  return d(t), a.clear(), It++, function() {
    i.forEach(function(f) {
      var g = _e.get(f) - 1, h = s.get(f) - 1;
      _e.set(f, g), s.set(f, h), g || (st.has(f) || f.removeAttribute(r), st.delete(f)), h || f.removeAttribute(n);
    }), It--, It || (_e = /* @__PURE__ */ new WeakMap(), _e = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakMap(), it = {});
  };
}, la = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = sa(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), aa(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, yt = "Dialog", [_r, nu] = bt(yt), [ca, se] = _r(yt), jr = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !0
  } = e, a = u.useRef(null), l = u.useRef(null), [c, d] = tn({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: yt
  });
  return /* @__PURE__ */ p.jsx(
    ca,
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
var Mr = "DialogTrigger", ua = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(Mr, n), s = ne(t, o.triggerRef);
    return /* @__PURE__ */ p.jsx(
      Z.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": an(o.open),
        ...r,
        ref: s,
        onClick: J(e.onClick, o.onOpenToggle)
      }
    );
  }
);
ua.displayName = Mr;
var on = "DialogPortal", [da, Dr] = _r(on, {
  forceMount: void 0
}), Lr = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = se(on, t);
  return /* @__PURE__ */ p.jsx(da, { scope: t, forceMount: n, children: u.Children.map(r, (i) => /* @__PURE__ */ p.jsx(Ae, { present: n || s.open, children: /* @__PURE__ */ p.jsx(rn, { asChild: !0, container: o, children: i }) })) });
};
Lr.displayName = on;
var dt = "DialogOverlay", Ir = u.forwardRef(
  (e, t) => {
    const n = Dr(dt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = se(dt, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ p.jsx(Ae, { present: r || s.open, children: /* @__PURE__ */ p.jsx(pa, { ...o, ref: t }) }) : null;
  }
);
Ir.displayName = dt;
var fa = /* @__PURE__ */ Jt("DialogOverlay.RemoveScroll"), pa = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(dt, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p.jsx(Tr, { as: fa, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ p.jsx(
        Z.div,
        {
          "data-state": an(o.open),
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
    return /* @__PURE__ */ p.jsx(Ae, { present: r || s.open, children: s.modal ? /* @__PURE__ */ p.jsx(ma, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(ha, { ...o, ref: t }) });
  }
);
Fr.displayName = Se;
var ma = u.forwardRef(
  (e, t) => {
    const n = se(Se, e.__scopeDialog), r = u.useRef(null), o = ne(t, n.contentRef, r);
    return u.useEffect(() => {
      const s = r.current;
      if (s) return la(s);
    }, []), /* @__PURE__ */ p.jsx(
      zr,
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
), ha = u.forwardRef(
  (e, t) => {
    const n = se(Se, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      zr,
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
), zr = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = se(Se, n), l = u.useRef(null), c = ne(t, l);
    return Ci(), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        wr,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ p.jsx(
            nn,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": an(a.open),
              ...i,
              ref: c,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(ga, { titleId: a.titleId }),
        /* @__PURE__ */ p.jsx(ba, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), sn = "DialogTitle", $r = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(sn, n);
    return /* @__PURE__ */ p.jsx(Z.h2, { id: o.titleId, ...r, ref: t });
  }
);
$r.displayName = sn;
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
function an(e) {
  return e ? "open" : "closed";
}
var Gr = "DialogTitleWarning", [ru, Ur] = qs(Gr, {
  contentName: Se,
  titleName: sn,
  docsSlug: "dialog"
}), ga = ({ titleId: e }) => {
  const t = Ur(Gr), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, va = "DialogDescriptionWarning", ba = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ur(va).contentName}}.`;
  return u.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, xa = jr, ya = Lr, wa = Ir, Ca = Fr, Ea = $r, Sa = Br, Ra = Hr;
function ka({ ...e }) {
  return /* @__PURE__ */ p.jsx(xa, { "data-slot": "sheet", ...e });
}
function Aa({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(ya, { "data-slot": "sheet-portal", ...e });
}
function Pa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    wa,
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
function Oa({
  className: e,
  children: t,
  side: n = "right",
  ...r
}) {
  return /* @__PURE__ */ p.jsxs(Aa, { children: [
    /* @__PURE__ */ p.jsx(Pa, {}),
    /* @__PURE__ */ p.jsxs(
      Ca,
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
          /* @__PURE__ */ p.jsxs(Ra, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ p.jsx(us, { className: "size-4" }),
            /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function Ta({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: W("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function Na({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    Ea,
    {
      "data-slot": "sheet-title",
      className: W("text-foreground font-semibold", e),
      ...t
    }
  );
}
function _a({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    Sa,
    {
      "data-slot": "sheet-description",
      className: W("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
const ja = ["top", "right", "bottom", "left"], ye = Math.min, ee = Math.max, ft = Math.round, at = Math.floor, ce = (e) => ({
  x: e,
  y: e
}), Ma = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Da = {
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
function We(e) {
  return e.split("-")[1];
}
function ln(e) {
  return e === "x" ? "y" : "x";
}
function cn(e) {
  return e === "y" ? "height" : "width";
}
const La = /* @__PURE__ */ new Set(["top", "bottom"]);
function le(e) {
  return La.has(he(e)) ? "y" : "x";
}
function un(e) {
  return ln(le(e));
}
function Ia(e, t, n) {
  n === void 0 && (n = !1);
  const r = We(e), o = un(e), s = cn(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = pt(i)), [i, pt(i)];
}
function Fa(e) {
  const t = pt(e);
  return [Yt(e), t, Yt(t)];
}
function Yt(e) {
  return e.replace(/start|end/g, (t) => Da[t]);
}
const Gn = ["left", "right"], Un = ["right", "left"], za = ["top", "bottom"], $a = ["bottom", "top"];
function Wa(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Un : Gn : t ? Gn : Un;
    case "left":
    case "right":
      return t ? za : $a;
    default:
      return [];
  }
}
function Ba(e, t, n, r) {
  const o = We(e);
  let s = Wa(he(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Yt)))), s;
}
function pt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ma[t]);
}
function Va(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Yr(e) {
  return typeof e != "number" ? Va(e) : {
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
function Yn(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = le(t), i = un(t), a = cn(i), l = he(t), c = s === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, g = r[a] / 2 - o[a] / 2;
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
  switch (We(t)) {
    case "start":
      h[i] -= g * (n && c ? -1 : 1);
      break;
    case "end":
      h[i] += g * (n && c ? -1 : 1);
      break;
  }
  return h;
}
const Ha = async (e, t, n) => {
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
  } = Yn(c, r, l), g = r, h = {}, v = 0;
  for (let m = 0; m < a.length; m++) {
    const {
      name: b,
      fn: x
    } = a[m], {
      x: y,
      y: E,
      data: S,
      reset: R
    } = await x({
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
    d = y ?? d, f = E ?? f, h = {
      ...h,
      [b]: {
        ...h[b],
        ...S
      }
    }, R && v <= 50 && (v++, typeof R == "object" && (R.placement && (g = R.placement), R.rects && (c = R.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : R.rects), {
      x: d,
      y: f
    } = Yn(c, g, l)), m = -1);
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
  } = me(t, e), v = Yr(h), b = a[g ? f === "floating" ? "reference" : "floating" : f], x = mt(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null || n ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), y = f === "floating" ? {
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
  }, R = mt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: y,
    offsetParent: E,
    strategy: l
  }) : y);
  return {
    top: (x.top - R.top + v.top) / S.y,
    bottom: (R.bottom - x.bottom + v.bottom) / S.y,
    left: (x.left - R.left + v.left) / S.x,
    right: (R.right - x.right + v.right) / S.x
  };
}
const Ga = (e) => ({
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
    }, h = un(o), v = cn(h), m = await i.getDimensions(c), b = h === "y", x = b ? "top" : "left", y = b ? "bottom" : "right", E = b ? "clientHeight" : "clientWidth", S = s.reference[v] + s.reference[h] - g[h] - s.floating[v], R = g[h] - s.reference[h], T = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let A = T ? T[E] : 0;
    (!A || !await (i.isElement == null ? void 0 : i.isElement(T))) && (A = a.floating[E] || s.floating[v]);
    const k = S / 2 - R / 2, M = A / 2 - m[v] / 2 - 1, $ = ye(f[x], M), U = ye(f[y], M), H = $, B = A - m[v] - U, I = A / 2 - m[v] / 2 + k, G = Ut(H, I, B), D = !l.arrow && We(o) != null && I !== G && s.reference[v] / 2 - (I < H ? $ : U) - m[v] / 2 < 0, L = D ? I < H ? I - H : I - B : 0;
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
}), Ua = function(e) {
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
        ...b
      } = me(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const x = he(o), y = le(a), E = he(a) === a, S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), R = g || (E || !m ? [pt(a)] : Fa(a)), T = v !== "none";
      !g && T && R.push(...Ba(a, m, v, S));
      const A = [a, ...R], k = await Ye(t, b), M = [];
      let $ = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (d && M.push(k[x]), f) {
        const I = Ia(o, i, S);
        M.push(k[I[0]], k[I[1]]);
      }
      if ($ = [...$, {
        placement: o,
        overflows: M
      }], !M.every((I) => I <= 0)) {
        var U, H;
        const I = (((U = s.flip) == null ? void 0 : U.index) || 0) + 1, G = A[I];
        if (G && (!(f === "alignment" ? y !== le(G) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        $.every((C) => le(C.placement) === y ? C.overflows[0] > 0 : !0)))
          return {
            data: {
              index: I,
              overflows: $
            },
            reset: {
              placement: G
            }
          };
        let D = (H = $.filter((L) => L.overflows[0] <= 0).sort((L, C) => L.overflows[1] - C.overflows[1])[0]) == null ? void 0 : H.placement;
        if (!D)
          switch (h) {
            case "bestFit": {
              var B;
              const L = (B = $.filter((C) => {
                if (T) {
                  const Y = le(C.placement);
                  return Y === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Y === "y";
                }
                return !0;
              }).map((C) => [C.placement, C.overflows.filter((Y) => Y > 0).reduce((Y, w) => Y + w, 0)]).sort((C, Y) => C[1] - Y[1])[0]) == null ? void 0 : B[0];
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
function Xn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Kn(e) {
  return ja.some((t) => e[t] >= 0);
}
const Ya = function(e) {
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
          }), i = Xn(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Kn(i)
            }
          };
        }
        case "escaped": {
          const s = await Ye(t, {
            ...o,
            altBoundary: !0
          }), i = Xn(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Kn(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Xr = /* @__PURE__ */ new Set(["left", "top"]);
async function Xa(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = he(n), a = We(n), l = le(n) === "y", c = Xr.has(i) ? -1 : 1, d = s && l ? -1 : 1, f = me(t, e);
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
const Ka = function(e) {
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
      } = t, l = await Xa(t, e);
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
}, qa = function(e) {
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
              y
            } = b;
            return {
              x,
              y
            };
          }
        },
        ...l
      } = me(e, t), c = {
        x: n,
        y: r
      }, d = await Ye(t, l), f = le(he(o)), g = ln(f);
      let h = c[g], v = c[f];
      if (s) {
        const b = g === "y" ? "top" : "left", x = g === "y" ? "bottom" : "right", y = h + d[b], E = h - d[x];
        h = Ut(y, h, E);
      }
      if (i) {
        const b = f === "y" ? "top" : "left", x = f === "y" ? "bottom" : "right", y = v + d[b], E = v - d[x];
        v = Ut(y, v, E);
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
}, Za = function(e) {
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
      }, f = le(o), g = ln(f);
      let h = d[g], v = d[f];
      const m = me(a, t), b = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (l) {
        const E = g === "y" ? "height" : "width", S = s.reference[g] - s.floating[E] + b.mainAxis, R = s.reference[g] + s.reference[E] - b.mainAxis;
        h < S ? h = S : h > R && (h = R);
      }
      if (c) {
        var x, y;
        const E = g === "y" ? "width" : "height", S = Xr.has(he(o)), R = s.reference[f] - s.floating[E] + (S && ((x = i.offset) == null ? void 0 : x[f]) || 0) + (S ? 0 : b.crossAxis), T = s.reference[f] + s.reference[E] + (S ? 0 : ((y = i.offset) == null ? void 0 : y[f]) || 0) - (S ? b.crossAxis : 0);
        v < R ? v = R : v > T && (v = T);
      }
      return {
        [g]: h,
        [f]: v
      };
    }
  };
}, Ja = function(e) {
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
      } = me(e, t), d = await Ye(t, c), f = he(o), g = We(o), h = le(o) === "y", {
        width: v,
        height: m
      } = s.floating;
      let b, x;
      f === "top" || f === "bottom" ? (b = f, x = g === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (x = f, b = g === "end" ? "top" : "bottom");
      const y = m - d.top - d.bottom, E = v - d.left - d.right, S = ye(m - d[b], y), R = ye(v - d[x], E), T = !t.middlewareData.shift;
      let A = S, k = R;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (k = E), (r = t.middlewareData.shift) != null && r.enabled.y && (A = y), T && !g) {
        const $ = ee(d.left, 0), U = ee(d.right, 0), H = ee(d.top, 0), B = ee(d.bottom, 0);
        h ? k = v - 2 * ($ !== 0 || U !== 0 ? $ + U : ee(d.left, d.right)) : A = m - 2 * (H !== 0 || B !== 0 ? H + B : ee(d.top, d.bottom));
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
function Be(e) {
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
function qn(e) {
  return !wt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof te(e).ShadowRoot;
}
const Qa = /* @__PURE__ */ new Set(["inline", "contents"]);
function qe(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = oe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Qa.has(o);
}
const el = /* @__PURE__ */ new Set(["table", "td", "th"]);
function tl(e) {
  return el.has(Be(e));
}
const nl = [":popover-open", ":modal"];
function Ct(e) {
  return nl.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const rl = ["transform", "translate", "scale", "rotate", "perspective"], ol = ["transform", "translate", "scale", "rotate", "perspective", "filter"], sl = ["paint", "layout", "strict", "content"];
function dn(e) {
  const t = fn(), n = re(e) ? oe(e) : e;
  return rl.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ol.some((r) => (n.willChange || "").includes(r)) || sl.some((r) => (n.contain || "").includes(r));
}
function il(e) {
  let t = we(e);
  for (; ue(t) && !Le(t); ) {
    if (dn(t))
      return t;
    if (Ct(t))
      return null;
    t = we(t);
  }
  return null;
}
function fn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const al = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Le(e) {
  return al.has(Be(e));
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
  if (Be(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    qn(e) && e.host || // Fallback.
    de(e)
  );
  return qn(t) ? t.host : t;
}
function qr(e) {
  const t = we(e);
  return Le(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ue(t) && qe(t) ? t : qr(t);
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
function pn(e) {
  return re(e) ? e : e.contextElement;
}
function Me(e) {
  const t = pn(e);
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
const ll = /* @__PURE__ */ ce(0);
function Jr(e) {
  const t = te(e);
  return !fn() || !t.visualViewport ? ll : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function cl(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== te(e) ? !1 : t;
}
function Re(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = pn(e);
  let i = ce(1);
  t && (r ? re(r) && (i = Me(r)) : i = Me(e));
  const a = cl(s, n, r) ? Jr(s) : ce(0);
  let l = (o.left + a.x) / i.x, c = (o.top + a.y) / i.y, d = o.width / i.x, f = o.height / i.y;
  if (s) {
    const g = te(s), h = r && re(r) ? te(r) : r;
    let v = g, m = Xt(v);
    for (; m && r && h !== v; ) {
      const b = Me(m), x = m.getBoundingClientRect(), y = oe(m), E = x.left + (m.clientLeft + parseFloat(y.paddingLeft)) * b.x, S = x.top + (m.clientTop + parseFloat(y.paddingTop)) * b.y;
      l *= b.x, c *= b.y, d *= b.x, f *= b.y, l += E, c += S, v = te(m), m = Xt(v);
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
function ul(e) {
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
  if ((f || !f && !s) && ((Be(r) !== "body" || qe(i)) && (l = Et(r)), ue(r))) {
    const h = Re(r);
    c = Me(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const g = i && !f && !s ? Qr(i, l) : ce(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + g.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + g.y
  };
}
function dl(e) {
  return Array.from(e.getClientRects());
}
function fl(e) {
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
const Zn = 25;
function pl(e, t) {
  const n = te(e), r = de(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const d = fn();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const c = St(r);
  if (c <= 0) {
    const d = r.ownerDocument, f = d.body, g = getComputedStyle(f), h = d.compatMode === "CSS1Compat" && parseFloat(g.marginLeft) + parseFloat(g.marginRight) || 0, v = Math.abs(r.clientWidth - f.clientWidth - h);
    v <= Zn && (s -= v);
  } else c <= Zn && (s += c);
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
const ml = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function hl(e, t) {
  const n = Re(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = ue(e) ? Me(e) : ce(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, c = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: c
  };
}
function Jn(e, t, n) {
  let r;
  if (t === "viewport")
    r = pl(e, n);
  else if (t === "document")
    r = fl(de(e));
  else if (re(t))
    r = hl(t, n);
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
  return n === t || !re(n) || Le(n) ? !1 : oe(n).position === "fixed" || eo(n, t);
}
function gl(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Xe(e, [], !1).filter((a) => re(a) && Be(a) !== "body"), o = null;
  const s = oe(e).position === "fixed";
  let i = s ? we(e) : e;
  for (; re(i) && !Le(i); ) {
    const a = oe(i), l = dn(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && ml.has(o.position) || qe(i) && !l && eo(e, i)) ? r = r.filter((d) => d !== i) : o = a, i = we(i);
  }
  return t.set(e, r), r;
}
function vl(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Ct(t) ? [] : gl(t, this._c) : [].concat(n), r], a = i[0], l = i.reduce((c, d) => {
    const f = Jn(t, d, o);
    return c.top = ee(f.top, c.top), c.right = ye(f.right, c.right), c.bottom = ye(f.bottom, c.bottom), c.left = ee(f.left, c.left), c;
  }, Jn(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function bl(e) {
  const {
    width: t,
    height: n
  } = Zr(e);
  return {
    width: t,
    height: n
  };
}
function xl(e, t, n) {
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
    if ((Be(t) !== "body" || qe(o)) && (a = Et(t)), r) {
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
function Qn(e, t) {
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
    for (; o && !Le(o); ) {
      if (re(o) && !Ft(o))
        return o;
      o = we(o);
    }
    return n;
  }
  let r = Qn(e, t);
  for (; r && tl(r) && Ft(r); )
    r = Qn(r, t);
  return r && Le(r) && Ft(r) && !dn(r) ? n : r || il(e) || n;
}
const yl = async function(e) {
  const t = this.getOffsetParent || to, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: xl(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function wl(e) {
  return oe(e).direction === "rtl";
}
const Cl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ul,
  getDocumentElement: de,
  getClippingRect: vl,
  getOffsetParent: to,
  getElementRects: yl,
  getClientRects: dl,
  getDimensions: bl,
  getScale: Me,
  isElement: re,
  isRTL: wl
};
function no(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function El(e, t) {
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
    const v = at(f), m = at(o.clientWidth - (d + g)), b = at(o.clientHeight - (f + h)), x = at(d), E = {
      rootMargin: -v + "px " + -m + "px " + -b + "px " + -x + "px",
      threshold: ee(0, ye(1, l)) || 1
    };
    let S = !0;
    function R(T) {
      const A = T[0].intersectionRatio;
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
        ...E,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(R, E);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function Sl(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = pn(e), d = o || s ? [...c ? Xe(c) : [], ...Xe(t)] : [];
  d.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), s && x.addEventListener("resize", n);
  });
  const f = c && a ? El(c, n) : null;
  let g = -1, h = null;
  i && (h = new ResizeObserver((x) => {
    let [y] = x;
    y && y.target === c && h && (h.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var E;
      (E = h) == null || E.observe(t);
    })), n();
  }), c && !l && h.observe(c), h.observe(t));
  let v, m = l ? Re(e) : null;
  l && b();
  function b() {
    const x = Re(e);
    m && !no(m, x) && n(), m = x, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var x;
    d.forEach((y) => {
      o && y.removeEventListener("scroll", n), s && y.removeEventListener("resize", n);
    }), f?.(), (x = h) == null || x.disconnect(), h = null, l && cancelAnimationFrame(v);
  };
}
const Rl = Ka, kl = qa, Al = Ua, Pl = Ja, Ol = Ya, er = Ga, Tl = Za, Nl = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Cl,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Ha(e, t, {
    ...o,
    platform: s
  });
};
var _l = typeof document < "u", jl = function() {
}, ut = _l ? Fo : jl;
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
function tr(e, t) {
  const n = ro(e);
  return Math.round(t * n) / n;
}
function zt(e) {
  const t = u.useRef(e);
  return ut(() => {
    t.current = e;
  }), t;
}
function Ml(e) {
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
  const [v, m] = u.useState(null), [b, x] = u.useState(null), y = u.useCallback((C) => {
    C !== T.current && (T.current = C, m(C));
  }, []), E = u.useCallback((C) => {
    C !== A.current && (A.current = C, x(C));
  }, []), S = s || v, R = i || b, T = u.useRef(null), A = u.useRef(null), k = u.useRef(d), M = l != null, $ = zt(l), U = zt(o), H = zt(c), B = u.useCallback(() => {
    if (!T.current || !A.current)
      return;
    const C = {
      placement: t,
      strategy: n,
      middleware: g
    };
    U.current && (C.platform = U.current), Nl(T.current, A.current, C).then((Y) => {
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
    c === !1 && k.current.isPositioned && (k.current.isPositioned = !1, f((C) => ({
      ...C,
      isPositioned: !1
    })));
  }, [c]);
  const I = u.useRef(!1);
  ut(() => (I.current = !0, () => {
    I.current = !1;
  }), []), ut(() => {
    if (S && (T.current = S), R && (A.current = R), S && R) {
      if ($.current)
        return $.current(S, R, B);
      B();
    }
  }, [S, R, B, $, M]);
  const G = u.useMemo(() => ({
    reference: T,
    floating: A,
    setReference: y,
    setFloating: E
  }), [y, E]), D = u.useMemo(() => ({
    reference: S,
    floating: R
  }), [S, R]), L = u.useMemo(() => {
    const C = {
      position: n,
      left: 0,
      top: 0
    };
    if (!D.floating)
      return C;
    const Y = tr(D.floating, d.x), w = tr(D.floating, d.y);
    return a ? {
      ...C,
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
const Dl = (e) => {
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
      return r && t(r) ? r.current != null ? er({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? er({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Ll = (e, t) => ({
  ...Rl(e),
  options: [e, t]
}), Il = (e, t) => ({
  ...kl(e),
  options: [e, t]
}), Fl = (e, t) => ({
  ...Tl(e),
  options: [e, t]
}), zl = (e, t) => ({
  ...Al(e),
  options: [e, t]
}), $l = (e, t) => ({
  ...Pl(e),
  options: [e, t]
}), Wl = (e, t) => ({
  ...Ol(e),
  options: [e, t]
}), Bl = (e, t) => ({
  ...Dl(e),
  options: [e, t]
});
var Vl = "Arrow", oo = u.forwardRef((e, t) => {
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
oo.displayName = Vl;
var Hl = oo;
function Gl(e) {
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
var mn = "Popper", [so, io] = bt(mn), [Ul, ao] = so(mn), lo = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ p.jsx(Ul, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
lo.displayName = mn;
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
var hn = "PopperContent", [Yl, Xl] = so(hn), fo = u.forwardRef(
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
    } = e, b = ao(hn, n), [x, y] = u.useState(null), E = ne(t, (z) => y(z)), [S, R] = u.useState(null), T = Gl(S), A = T?.width ?? 0, k = T?.height ?? 0, M = r + (s !== "center" ? "-" + s : ""), $ = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, U = Array.isArray(c) ? c : [c], H = U.length > 0, B = {
      padding: $,
      boundary: U.filter(ql),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: H
    }, { refs: I, floatingStyles: G, placement: D, isPositioned: L, middlewareData: C } = Ml({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: M,
      whileElementsMounted: (...z) => Sl(...z, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        Ll({ mainAxis: o + k, alignmentAxis: i }),
        l && Il({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? Fl() : void 0,
          ...B
        }),
        l && zl({ ...B }),
        $l({
          ...B,
          apply: ({ elements: z, rects: X, availableWidth: Q, availableHeight: ie }) => {
            const { width: Ce, height: Pe } = X.reference, Je = z.floating.style;
            Je.setProperty("--radix-popper-available-width", `${Q}px`), Je.setProperty("--radix-popper-available-height", `${ie}px`), Je.setProperty("--radix-popper-anchor-width", `${Ce}px`), Je.setProperty("--radix-popper-anchor-height", `${Pe}px`);
          }
        }),
        S && Bl({ element: S, padding: a }),
        Zl({ arrowWidth: A, arrowHeight: k }),
        g && Wl({ strategy: "referenceHidden", ...B })
      ]
    }), [Y, w] = ho(D), N = De(v);
    pe(() => {
      L && N?.();
    }, [L, N]);
    const F = C.arrow?.x, j = C.arrow?.y, V = C.arrow?.centerOffset !== 0, [q, ge] = u.useState();
    return pe(() => {
      x && ge(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ p.jsx(
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
        children: /* @__PURE__ */ p.jsx(
          Yl,
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
                ref: E,
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
fo.displayName = hn;
var po = "PopperArrow", Kl = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, mo = u.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = Xl(po, r), i = Kl[s.placedSide];
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
          Hl,
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
function ql(e) {
  return e !== null;
}
var Zl = (e) => ({
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
var Jl = lo, Ql = uo, ec = fo, tc = mo, nc = Object.freeze({
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
}), rc = "VisuallyHidden", go = u.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(
    Z.span,
    {
      ...e,
      ref: t,
      style: { ...nc, ...e.style }
    }
  )
);
go.displayName = rc;
var oc = go, [Rt, ou] = bt("Tooltip", [
  io
]), kt = io(), vo = "TooltipProvider", sc = 700, Kt = "tooltip.open", [ic, gn] = Rt(vo), bo = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = sc,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, i = u.useRef(!0), a = u.useRef(!1), l = u.useRef(0);
  return u.useEffect(() => {
    const c = l.current;
    return () => window.clearTimeout(c);
  }, []), /* @__PURE__ */ p.jsx(
    ic,
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
var Ke = "Tooltip", [ac, Ze] = Rt(Ke), xo = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    disableHoverableContent: i,
    delayDuration: a
  } = e, l = gn(Ke, e.__scopeTooltip), c = kt(t), [d, f] = u.useState(null), g = Ue(), h = u.useRef(0), v = i ?? l.disableHoverableContent, m = a ?? l.delayDuration, b = u.useRef(!1), [x, y] = tn({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (A) => {
      A ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Kt))) : l.onClose(), s?.(A);
    },
    caller: Ke
  }), E = u.useMemo(() => x ? b.current ? "delayed-open" : "instant-open" : "closed", [x]), S = u.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, b.current = !1, y(!0);
  }, [y]), R = u.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, y(!1);
  }, [y]), T = u.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      b.current = !0, y(!0), h.current = 0;
    }, m);
  }, [m, y]);
  return u.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ p.jsx(Jl, { ...c, children: /* @__PURE__ */ p.jsx(
    ac,
    {
      scope: t,
      contentId: g,
      open: x,
      stateAttribute: E,
      trigger: d,
      onTriggerChange: f,
      onTriggerEnter: u.useCallback(() => {
        l.isOpenDelayedRef.current ? T() : S();
      }, [l.isOpenDelayedRef, T, S]),
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
    const { __scopeTooltip: n, ...r } = e, o = Ze(qt, n), s = gn(qt, n), i = kt(n), a = u.useRef(null), l = ne(t, a, o.onTriggerChange), c = u.useRef(!1), d = u.useRef(!1), f = u.useCallback(() => c.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ p.jsx(Ql, { asChild: !0, ...i, children: /* @__PURE__ */ p.jsx(
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
var vn = "TooltipPortal", [lc, cc] = Rt(vn, {
  forceMount: void 0
}), wo = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, s = Ze(vn, t);
  return /* @__PURE__ */ p.jsx(lc, { scope: t, forceMount: n, children: /* @__PURE__ */ p.jsx(Ae, { present: n || s.open, children: /* @__PURE__ */ p.jsx(rn, { asChild: !0, container: o, children: r }) }) });
};
wo.displayName = vn;
var Ie = "TooltipContent", Co = u.forwardRef(
  (e, t) => {
    const n = cc(Ie, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...s } = e, i = Ze(Ie, e.__scopeTooltip);
    return /* @__PURE__ */ p.jsx(Ae, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ p.jsx(Eo, { side: o, ...s, ref: t }) : /* @__PURE__ */ p.jsx(uc, { side: o, ...s, ref: t }) });
  }
), uc = u.forwardRef((e, t) => {
  const n = Ze(Ie, e.__scopeTooltip), r = gn(Ie, e.__scopeTooltip), o = u.useRef(null), s = ne(t, o), [i, a] = u.useState(null), { trigger: l, onClose: c } = n, d = o.current, { onPointerInTransitChange: f } = r, g = u.useCallback(() => {
    a(null), f(!1);
  }, [f]), h = u.useCallback(
    (v, m) => {
      const b = v.currentTarget, x = { x: v.clientX, y: v.clientY }, y = mc(x, b.getBoundingClientRect()), E = hc(x, y), S = gc(m.getBoundingClientRect()), R = bc([...E, ...S]);
      a(R), f(!0);
    },
    [f]
  );
  return u.useEffect(() => () => g(), [g]), u.useEffect(() => {
    if (l && d) {
      const v = (b) => h(b, d), m = (b) => h(b, l);
      return l.addEventListener("pointerleave", v), d.addEventListener("pointerleave", m), () => {
        l.removeEventListener("pointerleave", v), d.removeEventListener("pointerleave", m);
      };
    }
  }, [l, d, h, g]), u.useEffect(() => {
    if (i) {
      const v = (m) => {
        const b = m.target, x = { x: m.clientX, y: m.clientY }, y = l?.contains(b) || d?.contains(b), E = !vc(x, i);
        y ? g() : E && (g(), c());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [l, d, i, c, g]), /* @__PURE__ */ p.jsx(Eo, { ...e, ref: s });
}), [dc, fc] = Rt(Ke, { isInside: !1 }), pc = /* @__PURE__ */ Go("TooltipContent"), Eo = u.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      ...a
    } = e, l = Ze(Ie, n), c = kt(n), { onClose: d } = l;
    return u.useEffect(() => (document.addEventListener(Kt, d), () => document.removeEventListener(Kt, d)), [d]), u.useEffect(() => {
      if (l.trigger) {
        const f = (g) => {
          g.target?.contains(l.trigger) && d();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [l.trigger, d]), /* @__PURE__ */ p.jsx(
      nn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ p.jsxs(
          ec,
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
              /* @__PURE__ */ p.jsx(pc, { children: r }),
              /* @__PURE__ */ p.jsx(dc, { scope: n, isInside: !0, children: /* @__PURE__ */ p.jsx(oc, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
Co.displayName = Ie;
var So = "TooltipArrow", Ro = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = kt(n);
    return fc(
      So,
      n
    ).isInside ? null : /* @__PURE__ */ p.jsx(tc, { ...o, ...r, ref: t });
  }
);
Ro.displayName = So;
function mc(e, t) {
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
function hc(e, t, n = 5) {
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
function gc(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function vc(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s], l = t[i], c = a.x, d = a.y, f = l.x, g = l.y;
    d > r != g > r && n < (f - c) * (r - d) / (g - d) + c && (o = !o);
  }
  return o;
}
function bc(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), xc(t);
}
function xc(e) {
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
var yc = bo, wc = xo, Cc = yo, Ec = wo, Sc = Co, Rc = Ro;
function ko({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    yc,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function kc({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(ko, { children: /* @__PURE__ */ p.jsx(wc, { "data-slot": "tooltip", ...e }) });
}
function Ac({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(Cc, { "data-slot": "tooltip-trigger", ...e });
}
function Pc({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ p.jsx(Ec, { children: /* @__PURE__ */ p.jsxs(
    Sc,
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
        /* @__PURE__ */ p.jsx(Rc, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const Oc = "sidebar_state", Tc = 3600 * 24 * 7, Nc = "16rem", _c = "3rem", jc = "b", Ao = u.createContext(null);
function bn() {
  const e = u.useContext(Ao);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function Mc({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: n,
  className: r,
  style: o,
  children: s,
  ...i
}) {
  const a = ds(), [l, c] = u.useState(!1), [d, f] = u.useState(e), g = t ?? d, h = u.useCallback(
    (x) => {
      const y = typeof x == "function" ? x(g) : x;
      n ? n(y) : f(y), document.cookie = `${Oc}=${y}; path=/; max-age=${Tc}`;
    },
    [n, g]
  ), v = u.useCallback(() => a ? c((x) => !x) : h((x) => !x), [a, h, c]);
  u.useEffect(() => {
    const x = (y) => {
      y.key === jc && (y.metaKey || y.ctrlKey) && (y.preventDefault(), v());
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [v]);
  const m = g ? "expanded" : "collapsed", b = u.useMemo(
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
  return /* @__PURE__ */ p.jsx(Ao.Provider, { value: b, children: /* @__PURE__ */ p.jsx(ko, { delayDuration: 0, children: /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": Nc,
        "--sidebar-width-icon": _c,
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
function Dc({
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
  const { isMobile: c, state: d, openMobile: f, setOpenMobile: g } = bn();
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
  ) : c ? /* @__PURE__ */ p.jsx(ka, { open: f, onOpenChange: g, ...l, children: /* @__PURE__ */ p.jsxs(
    Oa,
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
        /* @__PURE__ */ p.jsxs(Ta, { className: "sr-only", children: [
          /* @__PURE__ */ p.jsx(Na, { children: "Sidebar" }),
          /* @__PURE__ */ p.jsx(_a, { children: "Displays the mobile sidebar." })
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
function Lc({
  className: e,
  onClick: t,
  ...n
}) {
  const { toggleSidebar: r } = bn();
  return /* @__PURE__ */ p.jsxs(
    Ys,
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
        /* @__PURE__ */ p.jsx(ls, {}),
        /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function Ic({ className: e, ...t }) {
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
function Fc({ className: e, ...t }) {
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
function zc({ className: e, ...t }) {
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
function $c({ className: e, ...t }) {
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
function Wc({
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
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 dark:text-white",
        e
      ),
      ...n
    }
  );
}
function Po({
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
function Oo({ className: e, ...t }) {
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
const Bc = Qt(
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
        false: "bg-transparent hover:bg-sidebar-accent hover:text-sidebar-accent-foreground dark:hover:text-sidebar-accent-foreground"
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
function No({
  asChild: e = !1,
  isActive: t = !1,
  variant: n = "default",
  size: r = "default",
  tooltip: o,
  className: s,
  ...i
}) {
  const a = e ? vt : "button", { isMobile: l, state: c } = bn(), d = /* @__PURE__ */ p.jsx(
    a,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": r,
      "data-active": t,
      className: W("p-2.5 mb-0.5 ", Bc({ variant: n, size: r, active: t }), s),
      ...i
    }
  );
  return o ? (typeof o == "string" && (o = {
    children: o
  }), /* @__PURE__ */ p.jsxs(kc, { children: [
    /* @__PURE__ */ p.jsx(Ac, { asChild: !0, children: d }),
    /* @__PURE__ */ p.jsx(
      Pc,
      {
        side: "right",
        align: "center",
        hidden: c !== "collapsed" || l,
        ...o
      }
    )
  ] })) : d;
}
const Vc = ({
  userName: e = "",
  designation: t = "",
  userimg: n = "",
  isCollapse: r = !1,
  onLogout: o,
  ClassName: s = ""
}) => {
  const i = Zt(ke);
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx(Fc, { children: r ? "" : /* @__PURE__ */ p.jsxs(
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
          /* @__PURE__ */ p.jsx("p", { className: "text-lg font-medium dark:text-white", children: e }),
          /* @__PURE__ */ p.jsx("p", { className: "text-xs text-gray-400 dark:text-white/40", children: t })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "ml-auto", children: /* @__PURE__ */ p.jsx(
          "button",
          {
            onClick: o,
            className: "p-2",
            children: /* @__PURE__ */ p.jsx(
              is,
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
}, ke = gt.createContext({
  width: "260px",
  collapsewidth: "80px",
  textColor: "#2b2b2b",
  isCollapse: !1,
  themeColor: "#5d87ff",
  themeSecondaryColor: "#49beff",
  direction: "ltr",
  animation: !1
});
let Hc = () => {
  alert("Logout Successfully");
};
const su = ({
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
  onLogout: h = Hc,
  animation: v = !1,
  ClassName: m = "",
  side: b = "left",
  variant: x = "sidebar",
  collapsible: y = "icon",
  showTrigger: E = !1
}) => {
  const S = o ? n : t;
  return console.log(a), zo(() => {
    document.documentElement.style.setProperty("--lightprimary", `${s}2a`), document.documentElement.style.setProperty("--sidebar-primary", s), document.documentElement.style.setProperty("--sidebar-txtclr", r);
  }, [s]), /* @__PURE__ */ p.jsx(
    ke.Provider,
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
      children: /* @__PURE__ */ p.jsxs(Mc, { children: [
        E && /* @__PURE__ */ p.jsx(Lc, {}),
        /* @__PURE__ */ p.jsx("div", { children: /* @__PURE__ */ p.jsxs(
          Dc,
          {
            dir: l,
            style: { width: S, color: r },
            isCollapse: o,
            width: t,
            collapsewidth: n,
            collapsible: y,
            variant: x,
            side: b,
            className: xe("border-r border-border ", v && "transition-all duration-300 ease-in-out", m),
            children: [
              /* @__PURE__ */ p.jsx(zc, { children: /* @__PURE__ */ p.jsx($c, { children: e }) }),
              f && /* @__PURE__ */ p.jsx(
                Vc,
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
function _o({
  component: e = "a",
  children: t,
  to: n,
  href: r,
  ...o
}) {
  return /* @__PURE__ */ p.jsx(
    e,
    {
      ...o,
      to: n,
      href: r ?? n,
      style: { textDecoration: "none" },
      children: t
    }
  );
}
const iu = ({
  children: e,
  img: t = "https://adminmart.com/wp-content/uploads/2024/03/logo-admin-mart-news.png",
  href: n = "/",
  component: r
}) => {
  const o = gt.useContext(ke);
  return /* @__PURE__ */ p.jsx(Ic, { children: /* @__PURE__ */ p.jsx(
    "div",
    {
      className: `min-h-[50px] overflow-hidden flex w-[253px] whitespace-nowrap  line-clamp-1  py-2  overflow-ellipsis ${o.direction === "rtl" && o.isCollapse === !1 ? " rtl:scale-x-[-1]" : ""} ${o.isCollapse === !1 ? "justify-end" : "justify-start"} ${o.direction === "ltr" && "justify-start"} `,
      children: /* @__PURE__ */ p.jsx(
        _o,
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
}, au = ({
  children: e,
  subHeading: t = "menu",
  ClassName: n
}) => {
  const r = Zt(ke);
  return /* @__PURE__ */ p.jsxs("div", { children: [
    /* @__PURE__ */ p.jsx(Wc, { className: W(r.textColor, n), children: r.isCollapse ? "..." : t }),
    /* @__PURE__ */ p.jsx("div", { children: e })
  ] });
}, Gc = Qt(
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
function Uc({
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
      className: W(Gc({ variant: t }), e, "!ml-auto"),
      ...r
    }
  );
}
const lu = ({
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
  className: v = "",
  variant: m = "default",
  size: b = "default"
}) => {
  const x = gt.useContext(ke), y = x?.isCollapse, { animation: E } = Zt(ke);
  return /* @__PURE__ */ p.jsx(Po, { children: /* @__PURE__ */ p.jsx(Oo, { children: /* @__PURE__ */ p.jsx(To, { children: /* @__PURE__ */ p.jsx(_o, { to: f, component: n, target: g, children: /* @__PURE__ */ p.jsx(No, { asChild: !0, variant: m, size: b, isActive: h, children: /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: W(
        "h-full whitespace-nowrap transition-all duration-200 ease-in-out",
        E && "transition-all duration-300 ease-in-out hover:translate-x-1 ",
        l,
        h ? "text-white " : "text-sidebar-txtclr dark:text-white",
        c ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        v
      ),
      style: {
        backgroundColor: h ? x.themeColor : void 0
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
            Uc,
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
  ) }) }) }) }) });
};
var At = "Collapsible", [Yc, cu] = bt(At), [Xc, xn] = Yc(At), jo = u.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: s,
      onOpenChange: i,
      ...a
    } = e, [l, c] = tn({
      prop: r,
      defaultProp: o ?? !1,
      onChange: i,
      caller: At
    });
    return /* @__PURE__ */ p.jsx(
      Xc,
      {
        scope: n,
        disabled: s,
        contentId: Ue(),
        open: l,
        onOpenToggle: u.useCallback(() => c((d) => !d), [c]),
        children: /* @__PURE__ */ p.jsx(
          Z.div,
          {
            "data-state": wn(l),
            "data-disabled": s ? "" : void 0,
            ...a,
            ref: t
          }
        )
      }
    );
  }
);
jo.displayName = At;
var Mo = "CollapsibleTrigger", Do = u.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = xn(Mo, n);
    return /* @__PURE__ */ p.jsx(
      Z.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": wn(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: J(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Do.displayName = Mo;
var yn = "CollapsibleContent", Lo = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = xn(yn, e.__scopeCollapsible);
    return /* @__PURE__ */ p.jsx(Ae, { present: n || o.open, children: ({ present: s }) => /* @__PURE__ */ p.jsx(Kc, { ...r, ref: t, present: s }) });
  }
);
Lo.displayName = yn;
var Kc = u.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...s } = e, i = xn(yn, n), [a, l] = u.useState(r), c = u.useRef(null), d = ne(t, c), f = u.useRef(0), g = f.current, h = u.useRef(0), v = h.current, m = i.open || a, b = u.useRef(m), x = u.useRef(void 0);
  return u.useEffect(() => {
    const y = requestAnimationFrame(() => b.current = !1);
    return () => cancelAnimationFrame(y);
  }, []), pe(() => {
    const y = c.current;
    if (y) {
      x.current = x.current || {
        transitionDuration: y.style.transitionDuration,
        animationName: y.style.animationName
      }, y.style.transitionDuration = "0s", y.style.animationName = "none";
      const E = y.getBoundingClientRect();
      f.current = E.height, h.current = E.width, b.current || (y.style.transitionDuration = x.current.transitionDuration, y.style.animationName = x.current.animationName), l(r);
    }
  }, [i.open, r]), /* @__PURE__ */ p.jsx(
    Z.div,
    {
      "data-state": wn(i.open),
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
function wn(e) {
  return e ? "open" : "closed";
}
var qc = jo;
function Zc({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(qc, { "data-slot": "collapsible", ...e });
}
function Jc({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(
    Do,
    {
      "data-slot": "collapsible-trigger",
      ...e
    }
  );
}
function Qc({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(
    Lo,
    {
      "data-slot": "collapsible-content",
      ...e
    }
  );
}
function uu({
  title: e,
  children: t,
  icon: n,
  textFontSize: r = "text-sm",
  disabled: o = !1,
  borderRadius: s = "rounded-md",
  ClassName: i = ""
}) {
  const [a, l] = u.useState(!1), c = u.useContext(ke);
  return /* @__PURE__ */ p.jsx("div", { className: xe("w-full", i), children: /* @__PURE__ */ p.jsxs(Zc, { open: a, onOpenChange: l, className: "flex flex-col", children: [
    /* @__PURE__ */ p.jsx(Jc, { asChild: !0, children: /* @__PURE__ */ p.jsx(
      "button",
      {
        disabled: o,
        onClick: () => l(!a),
        className: xe(
          "p-2.5 transition-all duration-200 ease-in-out flex items-center gap-3",
          s,
          a ? "text-white" : "text-sidebar-txtclr dark:text-white",
          c?.animation && " hover:translate-x-1",
          {
            "cursor-not-allowed opacity-50": o,
            "cursor-pointer": !o,
            // only apply hover styles if not disabled and not open
            "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground dark:hover:text-sidebar-accent-foreground": !o && !a
          }
        ),
        style: {
          backgroundColor: a ? c?.themeColor : void 0
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
          !c?.isCollapse && (a ? /* @__PURE__ */ p.jsx(ts, { size: 16 }) : /* @__PURE__ */ p.jsx(rs, { size: 16 }))
        ] })
      }
    ) }),
    /* @__PURE__ */ p.jsx(
      Qc,
      {
        className: xe(
          " flex flex-col",
          c?.isCollapse && "items-center"
        ),
        children: /* @__PURE__ */ p.jsx(Po, { children: /* @__PURE__ */ p.jsx(Oo, { children: u.Children.map(t, (d, f) => /* @__PURE__ */ p.jsx(To, { children: /* @__PURE__ */ p.jsx(No, { asChild: !0, children: d }) }, f)) }) })
      }
    )
  ] }) });
}
export {
  iu as AMLogo,
  au as AMMenu,
  lu as AMMenuItem,
  su as AMSidebar,
  uu as AMSubmenu
};
