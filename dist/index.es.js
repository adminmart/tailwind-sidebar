import * as c from "react";
import gt, { forwardRef as Zn, createElement as Ft, useState as Mo, useLayoutEffect as Do, useContext as Lo } from "react";
import * as Jn from "react-dom";
import Io from "react-dom";
var Qe = { exports: {} }, $e = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vn;
function Fo() {
  if (vn) return $e;
  vn = 1;
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
  return $e.Fragment = t, $e.jsx = n, $e.jsxs = n, $e;
}
var We = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bn;
function zo() {
  return bn || (bn = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(x) {
      if (x == null) return null;
      if (typeof x == "function")
        return x.$$typeof === $ ? null : x.displayName || x.name || null;
      if (typeof x == "string") return x;
      switch (x) {
        case m:
          return "Fragment";
        case y:
          return "Profiler";
        case b:
          return "StrictMode";
        case S:
          return "Suspense";
        case O:
          return "SuspenseList";
        case M:
          return "Activity";
      }
      if (typeof x == "object")
        switch (typeof x.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), x.$$typeof) {
          case v:
            return "Portal";
          case E:
            return (x.displayName || "Context") + ".Provider";
          case w:
            return (x._context.displayName || "Context") + ".Consumer";
          case R:
            var N = x.render;
            return x = x.displayName, x || (x = N.displayName || N.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
          case A:
            return N = x.displayName || null, N !== null ? N : e(x.type) || "Memo";
          case k:
            N = x._payload, x = x._init;
            try {
              return e(x(N));
            } catch {
            }
        }
      return null;
    }
    function t(x) {
      return "" + x;
    }
    function n(x) {
      try {
        t(x);
        var N = !1;
      } catch {
        N = !0;
      }
      if (N) {
        N = console;
        var F = N.error, _ = typeof Symbol == "function" && Symbol.toStringTag && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return F.call(
          N,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), t(x);
      }
    }
    function r(x) {
      if (x === m) return "<>";
      if (typeof x == "object" && x !== null && x.$$typeof === k)
        return "<...>";
      try {
        var N = e(x);
        return N ? "<" + N + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var x = G.A;
      return x === null ? null : x.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(x) {
      if (V.call(x, "key")) {
        var N = Object.getOwnPropertyDescriptor(x, "key").get;
        if (N && N.isReactWarning) return !1;
      }
      return x.key !== void 0;
    }
    function a(x, N) {
      function F() {
        H || (H = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          N
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(x, "key", {
        get: F,
        configurable: !0
      });
    }
    function l() {
      var x = e(this.type);
      return D[x] || (D[x] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), x = this.props.ref, x !== void 0 ? x : null;
    }
    function u(x, N, F, _, B, K, ge, z) {
      return F = K.ref, x = {
        $$typeof: h,
        type: x,
        key: N,
        props: K,
        _owner: B
      }, (F !== void 0 ? F : null) !== null ? Object.defineProperty(x, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(x, "ref", { enumerable: !1, value: null }), x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(x, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(x, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ge
      }), Object.defineProperty(x, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    }
    function d(x, N, F, _, B, K, ge, z) {
      var Y = N.children;
      if (Y !== void 0)
        if (_)
          if (W(Y)) {
            for (_ = 0; _ < Y.length; _++)
              f(Y[_]);
            Object.freeze && Object.freeze(Y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(Y);
      if (V.call(N, "key")) {
        Y = e(x);
        var Q = Object.keys(N).filter(function(we) {
          return we !== "key";
        });
        _ = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", U[Y + _] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          Y,
          Q,
          Y
        ), U[Y + _] = !0);
      }
      if (Y = null, F !== void 0 && (n(F), Y = "" + F), i(N) && (n(N.key), Y = "" + N.key), "key" in N) {
        F = {};
        for (var ie in N)
          ie !== "key" && (F[ie] = N[ie]);
      } else F = N;
      return Y && a(
        F,
        typeof x == "function" ? x.displayName || x.name || "Unknown" : x
      ), u(
        x,
        Y,
        K,
        B,
        o(),
        F,
        ge,
        z
      );
    }
    function f(x) {
      typeof x == "object" && x !== null && x.$$typeof === h && x._store && (x._store.validated = 1);
    }
    var g = gt, h = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), E = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), M = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), G = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, W = Array.isArray, I = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(x) {
        return x();
      }
    };
    var H, D = {}, L = g.react_stack_bottom_frame.bind(
      g,
      s
    )(), C = I(r(s)), U = {};
    We.Fragment = m, We.jsx = function(x, N, F, _, B) {
      var K = 1e4 > G.recentlyCreatedOwnerStacks++;
      return d(
        x,
        N,
        F,
        !1,
        _,
        B,
        K ? Error("react-stack-top-frame") : L,
        K ? I(r(x)) : C
      );
    }, We.jsxs = function(x, N, F, _, B) {
      var K = 1e4 > G.recentlyCreatedOwnerStacks++;
      return d(
        x,
        N,
        F,
        !0,
        _,
        B,
        K ? Error("react-stack-top-frame") : L,
        K ? I(r(x)) : C
      );
    };
  })()), We;
}
var xn;
function $o() {
  return xn || (xn = 1, process.env.NODE_ENV === "production" ? Qe.exports = Fo() : Qe.exports = zo()), Qe.exports;
}
var p = $o();
function yn(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Qn(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = yn(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : yn(e[o], null);
        }
      };
  };
}
function ne(...e) {
  return c.useCallback(Qn(...e), e);
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
  const t = /* @__PURE__ */ Wo(e), n = c.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = c.Children.toArray(s), l = a.find(Vo);
    if (l) {
      const u = l.props.children, d = a.map((f) => f === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: c.isValidElement(u) ? c.cloneElement(u, void 0, d) : null });
    }
    return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var er = /* @__PURE__ */ qt("Slot");
// @__NO_SIDE_EFFECTS__
function Wo(e) {
  const t = c.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (c.isValidElement(o)) {
      const i = Go(o), a = Ho(s, o.props);
      return o.type !== c.Fragment && (a.ref = r ? Qn(r, i) : i), c.cloneElement(o, a);
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var tr = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Bo(e) {
  const t = ({ children: n }) => /* @__PURE__ */ p.jsx(p.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = tr, t;
}
function Vo(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === tr;
}
function Ho(e, t) {
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
function Go(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function nr(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = nr(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ve() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = nr(e)) && (r && (r += " "), r += t);
  return r;
}
const wn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Cn = Ve, Uo = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return Cn(e, n?.class, n?.className);
  const { variants: o, defaultVariants: s } = t, i = Object.keys(o).map((u) => {
    const d = n?.[u], f = s?.[u];
    if (d === null) return null;
    const g = wn(d) || wn(f);
    return o[u][g];
  }), a = n && Object.entries(n).reduce((u, d) => {
    let [f, g] = d;
    return g === void 0 || (u[f] = g), u;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, d) => {
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
      ...u,
      f,
      g
    ] : u;
  }, []);
  return Cn(e, i, l, n?.class, n?.className);
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
), En = (e) => {
  const t = Xo(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, rr = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), qo = (e) => {
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
var Ko = {
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
const Zo = Zn(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: s,
    iconNode: i,
    ...a
  }, l) => Ft(
    "svg",
    {
      ref: l,
      ...Ko,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: rr("lucide", o),
      ...!s && !qo(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...i.map(([u, d]) => Ft(u, d)),
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
const Xe = (e, t) => {
  const n = Zn(
    ({ className: r, ...o }, s) => Ft(Zo, {
      ref: s,
      iconNode: t,
      className: rr(
        `lucide-${Yo(En(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = En(e), n;
};
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jo = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Qo = Xe("chevron-down", Jo);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], ts = Xe("chevron-right", es);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
], or = Xe("circle-dot", ns);
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
], os = Xe("log-out", rs);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], is = Xe("x", ss), Kt = "-", as = (e) => {
  const t = cs(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(Kt);
      return a[0] === "" && a.length !== 1 && a.shift(), sr(a, t) || ls(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const l = n[i] || [];
      return a && r[i] ? [...l, ...r[i]] : l;
    }
  };
}, sr = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? sr(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(Kt);
  return t.validators.find(({
    validator: i
  }) => i(s))?.classGroupId;
}, Rn = /^\[(.+)\]$/, ls = (e) => {
  if (Rn.test(e)) {
    const t = Rn.exec(e)[1], n = t?.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, cs = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    zt(n[o], r, o, t);
  return r;
}, zt = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Sn(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (us(o)) {
        zt(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      zt(i, Sn(t, s), n, r);
    });
  });
}, Sn = (e, t) => {
  let n = e;
  return t.split(Kt).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, us = (e) => e.isThemeGetter, ds = (e) => {
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
}, $t = "!", Wt = ":", fs = Wt.length, ps = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const s = [];
    let i = 0, a = 0, l = 0, u;
    for (let v = 0; v < o.length; v++) {
      let m = o[v];
      if (i === 0 && a === 0) {
        if (m === Wt) {
          s.push(o.slice(l, v)), l = v + fs;
          continue;
        }
        if (m === "/") {
          u = v;
          continue;
        }
      }
      m === "[" ? i++ : m === "]" ? i-- : m === "(" ? a++ : m === ")" && a--;
    }
    const d = s.length === 0 ? o : o.substring(l), f = ms(d), g = f !== d, h = u && u > l ? u - l : void 0;
    return {
      modifiers: s,
      hasImportantModifier: g,
      baseClassName: f,
      maybePostfixModifierPosition: h
    };
  };
  if (t) {
    const o = t + Wt, s = r;
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
}, ms = (e) => e.endsWith($t) ? e.substring(0, e.length - 1) : e.startsWith($t) ? e.substring(1) : e, hs = (e) => {
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
}, gs = (e) => ({
  cache: ds(e.cacheSize),
  parseClassName: ps(e),
  sortModifiers: hs(e),
  ...as(e)
}), vs = /\s+/, bs = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, i = [], a = e.trim().split(vs);
  let l = "";
  for (let u = a.length - 1; u >= 0; u -= 1) {
    const d = a[u], {
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
    let b = !!m, y = r(b ? v.substring(0, m) : v);
    if (!y) {
      if (!b) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (y = r(v), !y) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      b = !1;
    }
    const w = s(g).join(":"), E = h ? w + $t : w, R = E + y;
    if (i.includes(R))
      continue;
    i.push(R);
    const S = o(y, b);
    for (let O = 0; O < S.length; ++O) {
      const A = S[O];
      i.push(E + A);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function xs() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = ir(t)) && (r && (r += " "), r += n);
  return r;
}
const ir = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = ir(e[r])) && (n && (n += " "), n += t);
  return n;
};
function ys(e, ...t) {
  let n, r, o, s = i;
  function i(l) {
    const u = t.reduce((d, f) => f(d), e());
    return n = gs(u), r = n.cache.get, o = n.cache.set, s = a, a(l);
  }
  function a(l) {
    const u = r(l);
    if (u)
      return u;
    const d = bs(l, n);
    return o(l, d), d;
  }
  return function() {
    return s(xs.apply(null, arguments));
  };
}
const q = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, ar = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, lr = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ws = /^\d+\/\d+$/, Cs = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Es = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Rs = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Ss = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ks = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ae = (e) => ws.test(e), j = (e) => !!e && !Number.isNaN(Number(e)), ve = (e) => !!e && Number.isInteger(Number(e)), At = (e) => e.endsWith("%") && j(e.slice(0, -1)), fe = (e) => Cs.test(e), As = () => !0, Ps = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Es.test(e) && !Rs.test(e)
), cr = () => !1, Ts = (e) => Ss.test(e), Os = (e) => ks.test(e), Ns = (e) => !P(e) && !T(e), js = (e) => Le(e, fr, cr), P = (e) => ar.test(e), Ce = (e) => Le(e, pr, Ps), Pt = (e) => Le(e, Is, j), kn = (e) => Le(e, ur, cr), _s = (e) => Le(e, dr, Os), et = (e) => Le(e, mr, Ts), T = (e) => lr.test(e), Be = (e) => Ie(e, pr), Ms = (e) => Ie(e, Fs), An = (e) => Ie(e, ur), Ds = (e) => Ie(e, fr), Ls = (e) => Ie(e, dr), tt = (e) => Ie(e, mr, !0), Le = (e, t, n) => {
  const r = ar.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Ie = (e, t, n = !1) => {
  const r = lr.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, ur = (e) => e === "position" || e === "percentage", dr = (e) => e === "image" || e === "url", fr = (e) => e === "length" || e === "size" || e === "bg-size", pr = (e) => e === "length", Is = (e) => e === "number", Fs = (e) => e === "family-name", mr = (e) => e === "shadow", zs = () => {
  const e = q("color"), t = q("font"), n = q("text"), r = q("font-weight"), o = q("tracking"), s = q("leading"), i = q("breakpoint"), a = q("container"), l = q("spacing"), u = q("radius"), d = q("shadow"), f = q("inset-shadow"), g = q("text-shadow"), h = q("drop-shadow"), v = q("blur"), m = q("perspective"), b = q("aspect"), y = q("ease"), w = q("animate"), E = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], R = () => [
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
  ], S = () => [...R(), T, P], O = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", "contain", "none"], k = () => [T, P, l], M = () => [Ae, "full", "auto", ...k()], $ = () => [ve, "none", "subgrid", T, P], G = () => ["auto", {
    span: ["full", ve, T, P]
  }, ve, T, P], V = () => [ve, "auto", T, P], W = () => ["auto", "min", "max", "fr", T, P], I = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], H = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], D = () => ["auto", ...k()], L = () => [Ae, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...k()], C = () => [e, T, P], U = () => [...R(), An, kn, {
    position: [T, P]
  }], x = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], N = () => ["auto", "cover", "contain", Ds, js, {
    size: [T, P]
  }], F = () => [At, Be, Ce], _ = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    T,
    P
  ], B = () => ["", j, Be, Ce], K = () => ["solid", "dashed", "dotted", "double"], ge = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], z = () => [j, At, An, kn], Y = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    T,
    P
  ], Q = () => ["none", j, T, P], ie = () => ["none", j, T, P], we = () => [j, T, P], ke = () => [Ae, "full", ...k()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [fe],
      breakpoint: [fe],
      color: [As],
      container: [fe],
      "drop-shadow": [fe],
      ease: ["in", "out", "in-out"],
      font: [Ns],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [fe],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [fe],
      shadow: [fe],
      spacing: ["px", j],
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
        aspect: ["auto", "square", Ae, P, T, b]
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
        columns: [j, P, T, a]
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
        object: S()
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
        basis: [Ae, "full", "auto", a, ...k()]
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
        flex: [j, Ae, "auto", "initial", "none", P]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", j, T, P]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", j, T, P]
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
        "grid-cols": $()
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
        "grid-rows": $()
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
        text: ["base", n, Be, Ce]
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
        font: [r, T, Pt]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", At, P]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ms, P, t]
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
        "line-clamp": [j, "none", T, Pt]
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
        decoration: [...K(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [j, "from-font", "auto", T, Ce]
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
        "underline-offset": [j, "auto", T, P]
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
        bg: U()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: x()
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
        }, Ls, _s]
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
        rounded: _()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": _()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": _()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": _()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": _()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": _()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": _()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": _()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": _()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": _()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": _()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": _()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": _()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": _()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": _()
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
        border: [...K(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...K(), "hidden", "none"]
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
        outline: [...K(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [j, T, P]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", j, Be, Ce]
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
        "ring-offset": [j, Ce]
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
        opacity: [j, T, P]
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
        "mask-linear": [j]
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
        "mask-radial": [T, P]
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
        "mask-radial-at": R()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [j]
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
        mask: U()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: x()
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
        blur: Y()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [j, T, P]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [j, T, P]
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
        grayscale: ["", j, T, P]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [j, T, P]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", j, T, P]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [j, T, P]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", j, T, P]
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
        "backdrop-blur": Y()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [j, T, P]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [j, T, P]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", j, T, P]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [j, T, P]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", j, T, P]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [j, T, P]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [j, T, P]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", j, T, P]
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
        duration: [j, "initial", T, P]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", y, T, P]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [j, T, P]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", w, T, P]
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
        "perspective-origin": S()
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
        transform: [T, P, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: S()
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
        translate: ke()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ke()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ke()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ke()
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
        fill: ["none", ...C()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [j, Be, Ce, Pt]
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
}, $s = /* @__PURE__ */ ys(zs);
function X(...e) {
  return $s(Ve(e));
}
var Ws = [
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
], Z = Ws.reduce((e, t) => {
  const n = /* @__PURE__ */ qt(`Primitive.${t}`), r = c.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Bs(e, t) {
  e && Jn.flushSync(() => e.dispatchEvent(t));
}
function J(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
function Vs(e, t) {
  const n = c.createContext(t), r = (s) => {
    const { children: i, ...a } = s, l = c.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ p.jsx(n.Provider, { value: l, children: i });
  };
  r.displayName = e + "Provider";
  function o(s) {
    const i = c.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function vt(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = c.createContext(i), l = n.length;
    n = [...n, i];
    const u = (f) => {
      const { scope: g, children: h, ...v } = f, m = g?.[e]?.[l] || a, b = c.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ p.jsx(m.Provider, { value: b, children: h });
    };
    u.displayName = s + "Provider";
    function d(f, g) {
      const h = g?.[e]?.[l] || a, v = c.useContext(h);
      if (v) return v;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [u, d];
  }
  const o = () => {
    const s = n.map((i) => c.createContext(i));
    return function(a) {
      const l = a?.[e] || s;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [r, Hs(o, ...t)];
}
function Hs(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = r.reduce((a, { useScope: l, scopeName: u }) => {
        const f = l(s)[`__scope${u}`];
        return { ...a, ...f };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var pe = globalThis?.document ? c.useLayoutEffect : () => {
}, Gs = c[" useId ".trim().toString()] || (() => {
}), Us = 0;
function He(e) {
  const [t, n] = c.useState(Gs());
  return pe(() => {
    n((r) => r ?? String(Us++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var Ys = c[" useInsertionEffect ".trim().toString()] || pe;
function Zt({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, i] = Xs({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o;
  {
    const d = c.useRef(e !== void 0);
    c.useEffect(() => {
      const f = d.current;
      f !== a && console.warn(
        `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = a;
    }, [a, r]);
  }
  const u = c.useCallback(
    (d) => {
      if (a) {
        const f = qs(d) ? d(e) : d;
        f !== e && i.current?.(f);
      } else
        s(d);
    },
    [a, e, s, i]
  );
  return [l, u];
}
function Xs({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), o = c.useRef(n), s = c.useRef(t);
  return Ys(() => {
    s.current = t;
  }, [t]), c.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
function qs(e) {
  return typeof e == "function";
}
function _e(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...n) => t.current?.(...n), []);
}
function Ks(e, t = globalThis?.document) {
  const n = _e(e);
  c.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Zs = "DismissableLayer", Bt = "dismissableLayer.update", Js = "dismissableLayer.pointerDownOutside", Qs = "dismissableLayer.focusOutside", Pn, hr = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Jt = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...l
    } = e, u = c.useContext(hr), [d, f] = c.useState(null), g = d?.ownerDocument ?? globalThis?.document, [, h] = c.useState({}), v = ne(t, (A) => f(A)), m = Array.from(u.layers), [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = m.indexOf(b), w = d ? m.indexOf(d) : -1, E = u.layersWithOutsidePointerEventsDisabled.size > 0, R = w >= y, S = ni((A) => {
      const k = A.target, M = [...u.branches].some(($) => $.contains(k));
      !R || M || (o?.(A), i?.(A), A.defaultPrevented || a?.());
    }, g), O = ri((A) => {
      const k = A.target;
      [...u.branches].some(($) => $.contains(k)) || (s?.(A), i?.(A), A.defaultPrevented || a?.());
    }, g);
    return Ks((A) => {
      w === u.layers.size - 1 && (r?.(A), !A.defaultPrevented && a && (A.preventDefault(), a()));
    }, g), c.useEffect(() => {
      if (d)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Pn = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Tn(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = Pn);
        };
    }, [d, g, n, u]), c.useEffect(() => () => {
      d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Tn());
    }, [d, u]), c.useEffect(() => {
      const A = () => h({});
      return document.addEventListener(Bt, A), () => document.removeEventListener(Bt, A);
    }, []), /* @__PURE__ */ p.jsx(
      Z.div,
      {
        ...l,
        ref: v,
        style: {
          pointerEvents: E ? R ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: J(e.onFocusCapture, O.onFocusCapture),
        onBlurCapture: J(e.onBlurCapture, O.onBlurCapture),
        onPointerDownCapture: J(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
Jt.displayName = Zs;
var ei = "DismissableLayerBranch", ti = c.forwardRef((e, t) => {
  const n = c.useContext(hr), r = c.useRef(null), o = ne(t, r);
  return c.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ p.jsx(Z.div, { ...e, ref: o });
});
ti.displayName = ei;
function ni(e, t = globalThis?.document) {
  const n = _e(e), r = c.useRef(!1), o = c.useRef(() => {
  });
  return c.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          gr(
            Js,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: a };
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
function ri(e, t = globalThis?.document) {
  const n = _e(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && gr(Qs, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Tn() {
  const e = new CustomEvent(Bt);
  document.dispatchEvent(e);
}
function gr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Bs(o, s) : o.dispatchEvent(s);
}
var Tt = "focusScope.autoFocusOnMount", Ot = "focusScope.autoFocusOnUnmount", On = { bubbles: !1, cancelable: !0 }, oi = "FocusScope", vr = c.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = c.useState(null), u = _e(o), d = _e(s), f = c.useRef(null), g = ne(t, (m) => l(m)), h = c.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  c.useEffect(() => {
    if (r) {
      let m = function(E) {
        if (h.paused || !a) return;
        const R = E.target;
        a.contains(R) ? f.current = R : be(f.current, { select: !0 });
      }, b = function(E) {
        if (h.paused || !a) return;
        const R = E.relatedTarget;
        R !== null && (a.contains(R) || be(f.current, { select: !0 }));
      }, y = function(E) {
        if (document.activeElement === document.body)
          for (const S of E)
            S.removedNodes.length > 0 && be(a);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", b);
      const w = new MutationObserver(y);
      return a && w.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", b), w.disconnect();
      };
    }
  }, [r, a, h.paused]), c.useEffect(() => {
    if (a) {
      jn.add(h);
      const m = document.activeElement;
      if (!a.contains(m)) {
        const y = new CustomEvent(Tt, On);
        a.addEventListener(Tt, u), a.dispatchEvent(y), y.defaultPrevented || (si(ui(br(a)), { select: !0 }), document.activeElement === m && be(a));
      }
      return () => {
        a.removeEventListener(Tt, u), setTimeout(() => {
          const y = new CustomEvent(Ot, On);
          a.addEventListener(Ot, d), a.dispatchEvent(y), y.defaultPrevented || be(m ?? document.body, { select: !0 }), a.removeEventListener(Ot, d), jn.remove(h);
        }, 0);
      };
    }
  }, [a, u, d, h]);
  const v = c.useCallback(
    (m) => {
      if (!n && !r || h.paused) return;
      const b = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, y = document.activeElement;
      if (b && y) {
        const w = m.currentTarget, [E, R] = ii(w);
        E && R ? !m.shiftKey && y === R ? (m.preventDefault(), n && be(E, { select: !0 })) : m.shiftKey && y === E && (m.preventDefault(), n && be(R, { select: !0 })) : y === w && m.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ p.jsx(Z.div, { tabIndex: -1, ...i, ref: g, onKeyDown: v });
});
vr.displayName = oi;
function si(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (be(r, { select: t }), document.activeElement !== n) return;
}
function ii(e) {
  const t = br(e), n = Nn(t, e), r = Nn(t.reverse(), e);
  return [n, r];
}
function br(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Nn(e, t) {
  for (const n of e)
    if (!ai(n, { upTo: t })) return n;
}
function ai(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function li(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function be(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && li(e) && t && e.select();
  }
}
var jn = ci();
function ci() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = _n(e, t), e.unshift(t);
    },
    remove(t) {
      e = _n(e, t), e[0]?.resume();
    }
  };
}
function _n(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function ui(e) {
  return e.filter((t) => t.tagName !== "A");
}
var di = "Portal", Qt = c.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, s] = c.useState(!1);
  pe(() => s(!0), []);
  const i = n || o && globalThis?.document?.body;
  return i ? Io.createPortal(/* @__PURE__ */ p.jsx(Z.div, { ...r, ref: t }), i) : null;
});
Qt.displayName = di;
function fi(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var Se = (e) => {
  const { present: t, children: n } = e, r = pi(t), o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), s = ne(r.ref, mi(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: s }) : null;
};
Se.displayName = "Presence";
function pi(e) {
  const [t, n] = c.useState(), r = c.useRef(null), o = c.useRef(e), s = c.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = fi(i, {
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
  return c.useEffect(() => {
    const u = nt(r.current);
    s.current = a === "mounted" ? u : "none";
  }, [a]), pe(() => {
    const u = r.current, d = o.current;
    if (d !== e) {
      const g = s.current, h = nt(u);
      e ? l("MOUNT") : h === "none" || u?.display === "none" ? l("UNMOUNT") : l(d && g !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), pe(() => {
    if (t) {
      let u;
      const d = t.ownerDocument.defaultView ?? window, f = (h) => {
        const m = nt(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && m && (l("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, g = (h) => {
        h.target === t && (s.current = nt(r.current));
      };
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        d.clearTimeout(u), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: c.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function nt(e) {
  return e?.animationName || "none";
}
function mi(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Nt = 0;
function hi() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Mn()), document.body.insertAdjacentElement("beforeend", e[1] ?? Mn()), Nt++, () => {
      Nt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Nt--;
    };
  }, []);
}
function Mn() {
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
function xr(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function gi(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var lt = "right-scroll-bar-position", ct = "width-before-scroll-bar", vi = "with-scroll-bars-hidden", bi = "--removed-body-scroll-bar-size";
function jt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function xi(e, t) {
  var n = Mo(function() {
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
var yi = typeof window < "u" ? c.useLayoutEffect : c.useEffect, Dn = /* @__PURE__ */ new WeakMap();
function wi(e, t) {
  var n = xi(null, function(r) {
    return e.forEach(function(o) {
      return jt(o, r);
    });
  });
  return yi(function() {
    var r = Dn.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || jt(a, null);
      }), s.forEach(function(a) {
        o.has(a) || jt(a, i);
      });
    }
    Dn.set(n, e);
  }, [e]), n;
}
function Ci(e) {
  return e;
}
function Ei(e, t) {
  t === void 0 && (t = Ci);
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
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(d) {
          i.push(d), u();
        },
        filter: function(d) {
          return i = i.filter(d), n;
        }
      };
    }
  };
  return o;
}
function Ri(e) {
  e === void 0 && (e = {});
  var t = Ei(null);
  return t.options = ae({ async: !0, ssr: !1 }, e), t;
}
var yr = function(e) {
  var t = e.sideCar, n = xr(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return c.createElement(r, ae({}, n));
};
yr.isSideCarExport = !0;
function Si(e, t) {
  return e.useMedium(t), yr;
}
var wr = Ri(), _t = function() {
}, bt = c.forwardRef(function(e, t) {
  var n = c.useRef(null), r = c.useState({
    onScrollCapture: _t,
    onWheelCapture: _t,
    onTouchMoveCapture: _t
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, g = e.sideCar, h = e.noRelative, v = e.noIsolation, m = e.inert, b = e.allowPinchZoom, y = e.as, w = y === void 0 ? "div" : y, E = e.gapMode, R = xr(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = g, O = wi([n, t]), A = ae(ae({}, R), o);
  return c.createElement(
    c.Fragment,
    null,
    d && c.createElement(S, { sideCar: wr, removeScrollBar: u, shards: f, noRelative: h, noIsolation: v, inert: m, setCallbacks: s, allowPinchZoom: !!b, lockRef: n, gapMode: E }),
    i ? c.cloneElement(c.Children.only(a), ae(ae({}, A), { ref: O })) : c.createElement(w, ae({}, A, { className: l, ref: O }), a)
  );
});
bt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
bt.classNames = {
  fullWidth: ct,
  zeroRight: lt
};
var ki = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Ai() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ki();
  return t && e.setAttribute("nonce", t), e;
}
function Pi(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ti(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Oi = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Ai()) && (Pi(t, n), Ti(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Ni = function() {
  var e = Oi();
  return function(t, n) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Cr = function() {
  var e = Ni(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, ji = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Mt = function(e) {
  return parseInt(e || "", 10) || 0;
}, _i = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Mt(n), Mt(r), Mt(o)];
}, Mi = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return ji;
  var t = _i(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Di = Cr(), Ne = "data-scroll-locked", Li = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(vi, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Ne, `] {
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
  
  body[`).concat(Ne, `] {
    `).concat(bi, ": ").concat(a, `px;
  }
`);
}, Ln = function() {
  var e = parseInt(document.body.getAttribute(Ne) || "0", 10);
  return isFinite(e) ? e : 0;
}, Ii = function() {
  c.useEffect(function() {
    return document.body.setAttribute(Ne, (Ln() + 1).toString()), function() {
      var e = Ln() - 1;
      e <= 0 ? document.body.removeAttribute(Ne) : document.body.setAttribute(Ne, e.toString());
    };
  }, []);
}, Fi = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Ii();
  var s = c.useMemo(function() {
    return Mi(o);
  }, [o]);
  return c.createElement(Di, { styles: Li(s, !t, o, n ? "" : "!important") });
}, Vt = !1;
if (typeof window < "u")
  try {
    var rt = Object.defineProperty({}, "passive", {
      get: function() {
        return Vt = !0, !0;
      }
    });
    window.addEventListener("test", rt, rt), window.removeEventListener("test", rt, rt);
  } catch {
    Vt = !1;
  }
var Pe = Vt ? { passive: !1 } : !1, zi = function(e) {
  return e.tagName === "TEXTAREA";
}, Er = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !zi(e) && n[t] === "visible")
  );
}, $i = function(e) {
  return Er(e, "overflowY");
}, Wi = function(e) {
  return Er(e, "overflowX");
}, In = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Rr(e, r);
    if (o) {
      var s = Sr(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Bi = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Vi = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Rr = function(e, t) {
  return e === "v" ? $i(t) : Wi(t);
}, Sr = function(e, t) {
  return e === "v" ? Bi(t) : Vi(t);
}, Hi = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Gi = function(e, t, n, r, o) {
  var s = Hi(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, l = t.contains(a), u = !1, d = i > 0, f = 0, g = 0;
  do {
    if (!a)
      break;
    var h = Sr(e, a), v = h[0], m = h[1], b = h[2], y = m - b - s * v;
    (v || y) && Rr(e, a) && (f += y, g += v);
    var w = a.parentNode;
    a = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (d && Math.abs(f) < 1 || !d && Math.abs(g) < 1) && (u = !0), u;
}, ot = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Fn = function(e) {
  return [e.deltaX, e.deltaY];
}, zn = function(e) {
  return e && "current" in e ? e.current : e;
}, Ui = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Yi = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Xi = 0, Te = [];
function qi(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), r = c.useRef(), o = c.useState(Xi++)[0], s = c.useState(Cr)[0], i = c.useRef(e);
  c.useEffect(function() {
    i.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = gi([e.lockRef.current], (e.shards || []).map(zn), !0).filter(Boolean);
      return m.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = c.useCallback(function(m, b) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !i.current.allowPinchZoom;
    var y = ot(m), w = n.current, E = "deltaX" in m ? m.deltaX : w[0] - y[0], R = "deltaY" in m ? m.deltaY : w[1] - y[1], S, O = m.target, A = Math.abs(E) > Math.abs(R) ? "h" : "v";
    if ("touches" in m && A === "h" && O.type === "range")
      return !1;
    var k = In(A, O);
    if (!k)
      return !0;
    if (k ? S = A : (S = A === "v" ? "h" : "v", k = In(A, O)), !k)
      return !1;
    if (!r.current && "changedTouches" in m && (E || R) && (r.current = S), !S)
      return !0;
    var M = r.current || S;
    return Gi(M, b, m, M === "h" ? E : R);
  }, []), l = c.useCallback(function(m) {
    var b = m;
    if (!(!Te.length || Te[Te.length - 1] !== s)) {
      var y = "deltaY" in b ? Fn(b) : ot(b), w = t.current.filter(function(S) {
        return S.name === b.type && (S.target === b.target || b.target === S.shadowParent) && Ui(S.delta, y);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var E = (i.current.shards || []).map(zn).filter(Boolean).filter(function(S) {
          return S.contains(b.target);
        }), R = E.length > 0 ? a(b, E[0]) : !i.current.noIsolation;
        R && b.cancelable && b.preventDefault();
      }
    }
  }, []), u = c.useCallback(function(m, b, y, w) {
    var E = { name: m, delta: b, target: y, should: w, shadowParent: Ki(y) };
    t.current.push(E), setTimeout(function() {
      t.current = t.current.filter(function(R) {
        return R !== E;
      });
    }, 1);
  }, []), d = c.useCallback(function(m) {
    n.current = ot(m), r.current = void 0;
  }, []), f = c.useCallback(function(m) {
    u(m.type, Fn(m), m.target, a(m, e.lockRef.current));
  }, []), g = c.useCallback(function(m) {
    u(m.type, ot(m), m.target, a(m, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return Te.push(s), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: g
    }), document.addEventListener("wheel", l, Pe), document.addEventListener("touchmove", l, Pe), document.addEventListener("touchstart", d, Pe), function() {
      Te = Te.filter(function(m) {
        return m !== s;
      }), document.removeEventListener("wheel", l, Pe), document.removeEventListener("touchmove", l, Pe), document.removeEventListener("touchstart", d, Pe);
    };
  }, []);
  var h = e.removeScrollBar, v = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    v ? c.createElement(s, { styles: Yi(o) }) : null,
    h ? c.createElement(Fi, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Ki(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Zi = Si(wr, qi);
var kr = c.forwardRef(function(e, t) {
  return c.createElement(bt, ae({}, e, { ref: t, sideCar: Zi }));
});
kr.classNames = bt.classNames;
var Ji = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Oe = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakMap(), it = {}, Dt = 0, Ar = function(e) {
  return e && (e.host || Ar(e.parentNode));
}, Qi = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ar(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, ea = function(e, t, n, r) {
  var o = Qi(t, Array.isArray(e) ? e : [e]);
  it[n] || (it[n] = /* @__PURE__ */ new WeakMap());
  var s = it[n], i = [], a = /* @__PURE__ */ new Set(), l = new Set(o), u = function(f) {
    !f || a.has(f) || (a.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var d = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(g) {
      if (a.has(g))
        d(g);
      else
        try {
          var h = g.getAttribute(r), v = h !== null && h !== "false", m = (Oe.get(g) || 0) + 1, b = (s.get(g) || 0) + 1;
          Oe.set(g, m), s.set(g, b), i.push(g), m === 1 && v && st.set(g, !0), b === 1 && g.setAttribute(n, "true"), v || g.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", g, y);
        }
    });
  };
  return d(t), a.clear(), Dt++, function() {
    i.forEach(function(f) {
      var g = Oe.get(f) - 1, h = s.get(f) - 1;
      Oe.set(f, g), s.set(f, h), g || (st.has(f) || f.removeAttribute(r), st.delete(f)), h || f.removeAttribute(n);
    }), Dt--, Dt || (Oe = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakMap(), it = {});
  };
}, ta = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Ji(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), ea(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, xt = "Dialog", [Pr, Fc] = vt(xt), [na, se] = Pr(xt), Tr = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !0
  } = e, a = c.useRef(null), l = c.useRef(null), [u, d] = Zt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: xt
  });
  return /* @__PURE__ */ p.jsx(
    na,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: He(),
      titleId: He(),
      descriptionId: He(),
      open: u,
      onOpenChange: d,
      onOpenToggle: c.useCallback(() => d((f) => !f), [d]),
      modal: i,
      children: n
    }
  );
};
Tr.displayName = xt;
var Or = "DialogTrigger", ra = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(Or, n), s = ne(t, o.triggerRef);
    return /* @__PURE__ */ p.jsx(
      Z.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": nn(o.open),
        ...r,
        ref: s,
        onClick: J(e.onClick, o.onOpenToggle)
      }
    );
  }
);
ra.displayName = Or;
var en = "DialogPortal", [oa, Nr] = Pr(en, {
  forceMount: void 0
}), jr = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = se(en, t);
  return /* @__PURE__ */ p.jsx(oa, { scope: t, forceMount: n, children: c.Children.map(r, (i) => /* @__PURE__ */ p.jsx(Se, { present: n || s.open, children: /* @__PURE__ */ p.jsx(Qt, { asChild: !0, container: o, children: i }) })) });
};
jr.displayName = en;
var dt = "DialogOverlay", _r = c.forwardRef(
  (e, t) => {
    const n = Nr(dt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = se(dt, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ p.jsx(Se, { present: r || s.open, children: /* @__PURE__ */ p.jsx(ia, { ...o, ref: t }) }) : null;
  }
);
_r.displayName = dt;
var sa = /* @__PURE__ */ qt("DialogOverlay.RemoveScroll"), ia = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(dt, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p.jsx(kr, { as: sa, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ p.jsx(
        Z.div,
        {
          "data-state": nn(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Ee = "DialogContent", Mr = c.forwardRef(
  (e, t) => {
    const n = Nr(Ee, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = se(Ee, e.__scopeDialog);
    return /* @__PURE__ */ p.jsx(Se, { present: r || s.open, children: s.modal ? /* @__PURE__ */ p.jsx(aa, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(la, { ...o, ref: t }) });
  }
);
Mr.displayName = Ee;
var aa = c.forwardRef(
  (e, t) => {
    const n = se(Ee, e.__scopeDialog), r = c.useRef(null), o = ne(t, n.contentRef, r);
    return c.useEffect(() => {
      const s = r.current;
      if (s) return ta(s);
    }, []), /* @__PURE__ */ p.jsx(
      Dr,
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
), la = c.forwardRef(
  (e, t) => {
    const n = se(Ee, e.__scopeDialog), r = c.useRef(!1), o = c.useRef(!1);
    return /* @__PURE__ */ p.jsx(
      Dr,
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
), Dr = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = se(Ee, n), l = c.useRef(null), u = ne(t, l);
    return hi(), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        vr,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ p.jsx(
            Jt,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": nn(a.open),
              ...i,
              ref: u,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(ca, { titleId: a.titleId }),
        /* @__PURE__ */ p.jsx(da, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), tn = "DialogTitle", Lr = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(tn, n);
    return /* @__PURE__ */ p.jsx(Z.h2, { id: o.titleId, ...r, ref: t });
  }
);
Lr.displayName = tn;
var Ir = "DialogDescription", Fr = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(Ir, n);
    return /* @__PURE__ */ p.jsx(Z.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Fr.displayName = Ir;
var zr = "DialogClose", $r = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(zr, n);
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
$r.displayName = zr;
function nn(e) {
  return e ? "open" : "closed";
}
var Wr = "DialogTitleWarning", [zc, Br] = Vs(Wr, {
  contentName: Ee,
  titleName: tn,
  docsSlug: "dialog"
}), ca = ({ titleId: e }) => {
  const t = Br(Wr), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, ua = "DialogDescriptionWarning", da = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Br(ua).contentName}}.`;
  return c.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, fa = Tr, pa = jr, ma = _r, ha = Mr, ga = Lr, va = Fr, ba = $r;
function xa({ ...e }) {
  return /* @__PURE__ */ p.jsx(fa, { "data-slot": "sheet", ...e });
}
function ya({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(pa, { "data-slot": "sheet-portal", ...e });
}
function wa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    ma,
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
function Ca({
  className: e,
  children: t,
  side: n = "right",
  ...r
}) {
  return /* @__PURE__ */ p.jsxs(ya, { children: [
    /* @__PURE__ */ p.jsx(wa, {}),
    /* @__PURE__ */ p.jsxs(
      ha,
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
          /* @__PURE__ */ p.jsxs(ba, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ p.jsx(is, { className: "size-4" }),
            /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function Ea({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: X("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function Ra({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    ga,
    {
      "data-slot": "sheet-title",
      className: X("text-foreground font-semibold", e),
      ...t
    }
  );
}
function Sa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    va,
    {
      "data-slot": "sheet-description",
      className: X("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
const ka = ["top", "right", "bottom", "left"], xe = Math.min, ee = Math.max, ft = Math.round, at = Math.floor, ce = (e) => ({
  x: e,
  y: e
}), Aa = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Pa = {
  start: "end",
  end: "start"
};
function Ht(e, t, n) {
  return ee(e, xe(t, n));
}
function me(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function he(e) {
  return e.split("-")[0];
}
function Fe(e) {
  return e.split("-")[1];
}
function rn(e) {
  return e === "x" ? "y" : "x";
}
function on(e) {
  return e === "y" ? "height" : "width";
}
const Ta = /* @__PURE__ */ new Set(["top", "bottom"]);
function le(e) {
  return Ta.has(he(e)) ? "y" : "x";
}
function sn(e) {
  return rn(le(e));
}
function Oa(e, t, n) {
  n === void 0 && (n = !1);
  const r = Fe(e), o = sn(e), s = on(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = pt(i)), [i, pt(i)];
}
function Na(e) {
  const t = pt(e);
  return [Gt(e), t, Gt(t)];
}
function Gt(e) {
  return e.replace(/start|end/g, (t) => Pa[t]);
}
const $n = ["left", "right"], Wn = ["right", "left"], ja = ["top", "bottom"], _a = ["bottom", "top"];
function Ma(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Wn : $n : t ? $n : Wn;
    case "left":
    case "right":
      return t ? ja : _a;
    default:
      return [];
  }
}
function Da(e, t, n, r) {
  const o = Fe(e);
  let s = Ma(he(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Gt)))), s;
}
function pt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Aa[t]);
}
function La(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Vr(e) {
  return typeof e != "number" ? La(e) : {
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
function Bn(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = le(t), i = sn(t), a = on(i), l = he(t), u = s === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, g = r[a] / 2 - o[a] / 2;
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
  switch (Fe(t)) {
    case "start":
      h[i] -= g * (n && u ? -1 : 1);
      break;
    case "end":
      h[i] += g * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const Ia = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, a = s.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: f
  } = Bn(u, r, l), g = r, h = {}, v = 0;
  for (let m = 0; m < a.length; m++) {
    const {
      name: b,
      fn: y
    } = a[m], {
      x: w,
      y: E,
      data: R,
      reset: S
    } = await y({
      x: d,
      y: f,
      initialPlacement: r,
      placement: g,
      strategy: o,
      middlewareData: h,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = w ?? d, f = E ?? f, h = {
      ...h,
      [b]: {
        ...h[b],
        ...R
      }
    }, S && v <= 50 && (v++, typeof S == "object" && (S.placement && (g = S.placement), S.rects && (u = S.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: d,
      y: f
    } = Bn(u, g, l)), m = -1);
  }
  return {
    x: d,
    y: f,
    placement: g,
    strategy: o,
    middlewareData: h
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
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: g = !1,
    padding: h = 0
  } = me(t, e), v = Vr(h), b = a[g ? f === "floating" ? "reference" : "floating" : f], y = mt(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null || n ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), w = f === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), R = await (s.isElement == null ? void 0 : s.isElement(E)) ? await (s.getScale == null ? void 0 : s.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = mt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: w,
    offsetParent: E,
    strategy: l
  }) : w);
  return {
    top: (y.top - S.top + v.top) / R.y,
    bottom: (S.bottom - y.bottom + v.bottom) / R.y,
    left: (y.left - S.left + v.left) / R.x,
    right: (S.right - y.right + v.right) / R.x
  };
}
const Fa = (e) => ({
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
      element: u,
      padding: d = 0
    } = me(e, t) || {};
    if (u == null)
      return {};
    const f = Vr(d), g = {
      x: n,
      y: r
    }, h = sn(o), v = on(h), m = await i.getDimensions(u), b = h === "y", y = b ? "top" : "left", w = b ? "bottom" : "right", E = b ? "clientHeight" : "clientWidth", R = s.reference[v] + s.reference[h] - g[h] - s.floating[v], S = g[h] - s.reference[h], O = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let A = O ? O[E] : 0;
    (!A || !await (i.isElement == null ? void 0 : i.isElement(O))) && (A = a.floating[E] || s.floating[v]);
    const k = R / 2 - S / 2, M = A / 2 - m[v] / 2 - 1, $ = xe(f[y], M), G = xe(f[w], M), V = $, W = A - m[v] - G, I = A / 2 - m[v] / 2 + k, H = Ht(V, I, W), D = !l.arrow && Fe(o) != null && I !== H && s.reference[v] / 2 - (I < V ? $ : G) - m[v] / 2 < 0, L = D ? I < V ? I - V : I - W : 0;
    return {
      [h]: g[h] + L,
      data: {
        [h]: H,
        centerOffset: I - H - L,
        ...D && {
          alignmentOffset: L
        }
      },
      reset: D
    };
  }
}), za = function(e) {
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
        elements: u
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
      const y = he(o), w = le(a), E = he(a) === a, R = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), S = g || (E || !m ? [pt(a)] : Na(a)), O = v !== "none";
      !g && O && S.push(...Da(a, m, v, R));
      const A = [a, ...S], k = await Ge(t, b), M = [];
      let $ = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (d && M.push(k[y]), f) {
        const I = Oa(o, i, R);
        M.push(k[I[0]], k[I[1]]);
      }
      if ($ = [...$, {
        placement: o,
        overflows: M
      }], !M.every((I) => I <= 0)) {
        var G, V;
        const I = (((G = s.flip) == null ? void 0 : G.index) || 0) + 1, H = A[I];
        if (H && (!(f === "alignment" ? w !== le(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        $.every((C) => le(C.placement) === w ? C.overflows[0] > 0 : !0)))
          return {
            data: {
              index: I,
              overflows: $
            },
            reset: {
              placement: H
            }
          };
        let D = (V = $.filter((L) => L.overflows[0] <= 0).sort((L, C) => L.overflows[1] - C.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!D)
          switch (h) {
            case "bestFit": {
              var W;
              const L = (W = $.filter((C) => {
                if (O) {
                  const U = le(C.placement);
                  return U === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  U === "y";
                }
                return !0;
              }).map((C) => [C.placement, C.overflows.filter((U) => U > 0).reduce((U, x) => U + x, 0)]).sort((C, U) => C[1] - U[1])[0]) == null ? void 0 : W[0];
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
function Vn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Hn(e) {
  return ka.some((t) => e[t] >= 0);
}
const $a = function(e) {
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
          }), i = Vn(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Hn(i)
            }
          };
        }
        case "escaped": {
          const s = await Ge(t, {
            ...o,
            altBoundary: !0
          }), i = Vn(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Hn(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Hr = /* @__PURE__ */ new Set(["left", "top"]);
async function Wa(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = he(n), a = Fe(n), l = le(n) === "y", u = Hr.has(i) ? -1 : 1, d = s && l ? -1 : 1, f = me(t, e);
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
    y: g * u
  } : {
    x: g * u,
    y: h * d
  };
}
const Ba = function(e) {
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
      } = t, l = await Wa(t, e);
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
}, Va = function(e) {
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
              x: y,
              y: w
            } = b;
            return {
              x: y,
              y: w
            };
          }
        },
        ...l
      } = me(e, t), u = {
        x: n,
        y: r
      }, d = await Ge(t, l), f = le(he(o)), g = rn(f);
      let h = u[g], v = u[f];
      if (s) {
        const b = g === "y" ? "top" : "left", y = g === "y" ? "bottom" : "right", w = h + d[b], E = h - d[y];
        h = Ht(w, h, E);
      }
      if (i) {
        const b = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", w = v + d[b], E = v - d[y];
        v = Ht(w, v, E);
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
}, Ha = function(e) {
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
        crossAxis: u = !0
      } = me(e, t), d = {
        x: n,
        y: r
      }, f = le(o), g = rn(f);
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
        const E = g === "y" ? "height" : "width", R = s.reference[g] - s.floating[E] + b.mainAxis, S = s.reference[g] + s.reference[E] - b.mainAxis;
        h < R ? h = R : h > S && (h = S);
      }
      if (u) {
        var y, w;
        const E = g === "y" ? "width" : "height", R = Hr.has(he(o)), S = s.reference[f] - s.floating[E] + (R && ((y = i.offset) == null ? void 0 : y[f]) || 0) + (R ? 0 : b.crossAxis), O = s.reference[f] + s.reference[E] + (R ? 0 : ((w = i.offset) == null ? void 0 : w[f]) || 0) - (R ? b.crossAxis : 0);
        v < S ? v = S : v > O && (v = O);
      }
      return {
        [g]: h,
        [f]: v
      };
    }
  };
}, Ga = function(e) {
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
        ...u
      } = me(e, t), d = await Ge(t, u), f = he(o), g = Fe(o), h = le(o) === "y", {
        width: v,
        height: m
      } = s.floating;
      let b, y;
      f === "top" || f === "bottom" ? (b = f, y = g === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (y = f, b = g === "end" ? "top" : "bottom");
      const w = m - d.top - d.bottom, E = v - d.left - d.right, R = xe(m - d[b], w), S = xe(v - d[y], E), O = !t.middlewareData.shift;
      let A = R, k = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (k = E), (r = t.middlewareData.shift) != null && r.enabled.y && (A = w), O && !g) {
        const $ = ee(d.left, 0), G = ee(d.right, 0), V = ee(d.top, 0), W = ee(d.bottom, 0);
        h ? k = v - 2 * ($ !== 0 || G !== 0 ? $ + G : ee(d.left, d.right)) : A = m - 2 * (V !== 0 || W !== 0 ? V + W : ee(d.top, d.bottom));
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
function yt() {
  return typeof window < "u";
}
function ze(e) {
  return Gr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function te(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function de(e) {
  var t;
  return (t = (Gr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Gr(e) {
  return yt() ? e instanceof Node || e instanceof te(e).Node : !1;
}
function re(e) {
  return yt() ? e instanceof Element || e instanceof te(e).Element : !1;
}
function ue(e) {
  return yt() ? e instanceof HTMLElement || e instanceof te(e).HTMLElement : !1;
}
function Gn(e) {
  return !yt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof te(e).ShadowRoot;
}
const Ua = /* @__PURE__ */ new Set(["inline", "contents"]);
function qe(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = oe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Ua.has(o);
}
const Ya = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Xa(e) {
  return Ya.has(ze(e));
}
const qa = [":popover-open", ":modal"];
function wt(e) {
  return qa.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Ka = ["transform", "translate", "scale", "rotate", "perspective"], Za = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Ja = ["paint", "layout", "strict", "content"];
function an(e) {
  const t = ln(), n = re(e) ? oe(e) : e;
  return Ka.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Za.some((r) => (n.willChange || "").includes(r)) || Ja.some((r) => (n.contain || "").includes(r));
}
function Qa(e) {
  let t = ye(e);
  for (; ue(t) && !Me(t); ) {
    if (an(t))
      return t;
    if (wt(t))
      return null;
    t = ye(t);
  }
  return null;
}
function ln() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const el = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Me(e) {
  return el.has(ze(e));
}
function oe(e) {
  return te(e).getComputedStyle(e);
}
function Ct(e) {
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
    Gn(e) && e.host || // Fallback.
    de(e)
  );
  return Gn(t) ? t.host : t;
}
function Ur(e) {
  const t = ye(e);
  return Me(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ue(t) && qe(t) ? t : Ur(t);
}
function Ue(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Ur(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = te(o);
  if (s) {
    const a = Ut(i);
    return t.concat(i, i.visualViewport || [], qe(o) ? o : [], a && n ? Ue(a) : []);
  }
  return t.concat(o, Ue(o, [], n));
}
function Ut(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Yr(e) {
  const t = oe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ue(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = ft(n) !== s || ft(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function cn(e) {
  return re(e) ? e : e.contextElement;
}
function je(e) {
  const t = cn(e);
  if (!ue(t))
    return ce(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Yr(t);
  let i = (s ? ft(n.width) : n.width) / r, a = (s ? ft(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const tl = /* @__PURE__ */ ce(0);
function Xr(e) {
  const t = te(e);
  return !ln() || !t.visualViewport ? tl : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function nl(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== te(e) ? !1 : t;
}
function Re(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = cn(e);
  let i = ce(1);
  t && (r ? re(r) && (i = je(r)) : i = je(e));
  const a = nl(s, n, r) ? Xr(s) : ce(0);
  let l = (o.left + a.x) / i.x, u = (o.top + a.y) / i.y, d = o.width / i.x, f = o.height / i.y;
  if (s) {
    const g = te(s), h = r && re(r) ? te(r) : r;
    let v = g, m = Ut(v);
    for (; m && r && h !== v; ) {
      const b = je(m), y = m.getBoundingClientRect(), w = oe(m), E = y.left + (m.clientLeft + parseFloat(w.paddingLeft)) * b.x, R = y.top + (m.clientTop + parseFloat(w.paddingTop)) * b.y;
      l *= b.x, u *= b.y, d *= b.x, f *= b.y, l += E, u += R, v = te(m), m = Ut(v);
    }
  }
  return mt({
    width: d,
    height: f,
    x: l,
    y: u
  });
}
function Et(e, t) {
  const n = Ct(e).scrollLeft;
  return t ? t.left + n : Re(de(e)).left + n;
}
function qr(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Et(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function rl(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = de(r), a = t ? wt(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = ce(1);
  const d = ce(0), f = ue(r);
  if ((f || !f && !s) && ((ze(r) !== "body" || qe(i)) && (l = Ct(r)), ue(r))) {
    const h = Re(r);
    u = je(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const g = i && !f && !s ? qr(i, l) : ce(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + g.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + g.y
  };
}
function ol(e) {
  return Array.from(e.getClientRects());
}
function sl(e) {
  const t = de(e), n = Ct(e), r = e.ownerDocument.body, o = ee(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = ee(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Et(e);
  const a = -n.scrollTop;
  return oe(r).direction === "rtl" && (i += ee(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
const Un = 25;
function il(e, t) {
  const n = te(e), r = de(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const d = ln();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = Et(r);
  if (u <= 0) {
    const d = r.ownerDocument, f = d.body, g = getComputedStyle(f), h = d.compatMode === "CSS1Compat" && parseFloat(g.marginLeft) + parseFloat(g.marginRight) || 0, v = Math.abs(r.clientWidth - f.clientWidth - h);
    v <= Un && (s -= v);
  } else u <= Un && (s += u);
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
const al = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function ll(e, t) {
  const n = Re(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = ue(e) ? je(e) : ce(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, u = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: u
  };
}
function Yn(e, t, n) {
  let r;
  if (t === "viewport")
    r = il(e, n);
  else if (t === "document")
    r = sl(de(e));
  else if (re(t))
    r = ll(t, n);
  else {
    const o = Xr(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return mt(r);
}
function Kr(e, t) {
  const n = ye(e);
  return n === t || !re(n) || Me(n) ? !1 : oe(n).position === "fixed" || Kr(n, t);
}
function cl(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ue(e, [], !1).filter((a) => re(a) && ze(a) !== "body"), o = null;
  const s = oe(e).position === "fixed";
  let i = s ? ye(e) : e;
  for (; re(i) && !Me(i); ) {
    const a = oe(i), l = an(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && al.has(o.position) || qe(i) && !l && Kr(e, i)) ? r = r.filter((d) => d !== i) : o = a, i = ye(i);
  }
  return t.set(e, r), r;
}
function ul(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? wt(t) ? [] : cl(t, this._c) : [].concat(n), r], a = i[0], l = i.reduce((u, d) => {
    const f = Yn(t, d, o);
    return u.top = ee(f.top, u.top), u.right = xe(f.right, u.right), u.bottom = xe(f.bottom, u.bottom), u.left = ee(f.left, u.left), u;
  }, Yn(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function dl(e) {
  const {
    width: t,
    height: n
  } = Yr(e);
  return {
    width: t,
    height: n
  };
}
function fl(e, t, n) {
  const r = ue(t), o = de(t), s = n === "fixed", i = Re(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ce(0);
  function u() {
    l.x = Et(o);
  }
  if (r || !r && !s)
    if ((ze(t) !== "body" || qe(o)) && (a = Ct(t)), r) {
      const h = Re(t, !0, s, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && u();
  s && !r && o && u();
  const d = o && !r && !s ? qr(o, a) : ce(0), f = i.left + a.scrollLeft - l.x - d.x, g = i.top + a.scrollTop - l.y - d.y;
  return {
    x: f,
    y: g,
    width: i.width,
    height: i.height
  };
}
function Lt(e) {
  return oe(e).position === "static";
}
function Xn(e, t) {
  if (!ue(e) || oe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return de(e) === n && (n = n.ownerDocument.body), n;
}
function Zr(e, t) {
  const n = te(e);
  if (wt(e))
    return n;
  if (!ue(e)) {
    let o = ye(e);
    for (; o && !Me(o); ) {
      if (re(o) && !Lt(o))
        return o;
      o = ye(o);
    }
    return n;
  }
  let r = Xn(e, t);
  for (; r && Xa(r) && Lt(r); )
    r = Xn(r, t);
  return r && Me(r) && Lt(r) && !an(r) ? n : r || Qa(e) || n;
}
const pl = async function(e) {
  const t = this.getOffsetParent || Zr, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: fl(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function ml(e) {
  return oe(e).direction === "rtl";
}
const hl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: rl,
  getDocumentElement: de,
  getClippingRect: ul,
  getOffsetParent: Zr,
  getElementRects: pl,
  getClientRects: ol,
  getDimensions: dl,
  getScale: je,
  isElement: re,
  isRTL: ml
};
function Jr(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function gl(e, t) {
  let n = null, r;
  const o = de(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const u = e.getBoundingClientRect(), {
      left: d,
      top: f,
      width: g,
      height: h
    } = u;
    if (a || t(), !g || !h)
      return;
    const v = at(f), m = at(o.clientWidth - (d + g)), b = at(o.clientHeight - (f + h)), y = at(d), E = {
      rootMargin: -v + "px " + -m + "px " + -b + "px " + -y + "px",
      threshold: ee(0, xe(1, l)) || 1
    };
    let R = !0;
    function S(O) {
      const A = O[0].intersectionRatio;
      if (A !== l) {
        if (!R)
          return i();
        A ? i(!1, A) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !Jr(u, e.getBoundingClientRect()) && i(), R = !1;
    }
    try {
      n = new IntersectionObserver(S, {
        ...E,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(S, E);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function vl(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = cn(e), d = o || s ? [...u ? Ue(u) : [], ...Ue(t)] : [];
  d.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), s && y.addEventListener("resize", n);
  });
  const f = u && a ? gl(u, n) : null;
  let g = -1, h = null;
  i && (h = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === u && h && (h.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var E;
      (E = h) == null || E.observe(t);
    })), n();
  }), u && !l && h.observe(u), h.observe(t));
  let v, m = l ? Re(e) : null;
  l && b();
  function b() {
    const y = Re(e);
    m && !Jr(m, y) && n(), m = y, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var y;
    d.forEach((w) => {
      o && w.removeEventListener("scroll", n), s && w.removeEventListener("resize", n);
    }), f?.(), (y = h) == null || y.disconnect(), h = null, l && cancelAnimationFrame(v);
  };
}
const bl = Ba, xl = Va, yl = za, wl = Ga, Cl = $a, qn = Fa, El = Ha, Rl = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: hl,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Ia(e, t, {
    ...o,
    platform: s
  });
};
var Sl = typeof document < "u", kl = function() {
}, ut = Sl ? Do : kl;
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
function Qr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Kn(e, t) {
  const n = Qr(e);
  return Math.round(t * n) / n;
}
function It(e) {
  const t = c.useRef(e);
  return ut(() => {
    t.current = e;
  }), t;
}
function Al(e) {
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
    open: u
  } = e, [d, f] = c.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, h] = c.useState(r);
  ht(g, r) || h(r);
  const [v, m] = c.useState(null), [b, y] = c.useState(null), w = c.useCallback((C) => {
    C !== O.current && (O.current = C, m(C));
  }, []), E = c.useCallback((C) => {
    C !== A.current && (A.current = C, y(C));
  }, []), R = s || v, S = i || b, O = c.useRef(null), A = c.useRef(null), k = c.useRef(d), M = l != null, $ = It(l), G = It(o), V = It(u), W = c.useCallback(() => {
    if (!O.current || !A.current)
      return;
    const C = {
      placement: t,
      strategy: n,
      middleware: g
    };
    G.current && (C.platform = G.current), Rl(O.current, A.current, C).then((U) => {
      const x = {
        ...U,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: V.current !== !1
      };
      I.current && !ht(k.current, x) && (k.current = x, Jn.flushSync(() => {
        f(x);
      }));
    });
  }, [g, t, n, G, V]);
  ut(() => {
    u === !1 && k.current.isPositioned && (k.current.isPositioned = !1, f((C) => ({
      ...C,
      isPositioned: !1
    })));
  }, [u]);
  const I = c.useRef(!1);
  ut(() => (I.current = !0, () => {
    I.current = !1;
  }), []), ut(() => {
    if (R && (O.current = R), S && (A.current = S), R && S) {
      if ($.current)
        return $.current(R, S, W);
      W();
    }
  }, [R, S, W, $, M]);
  const H = c.useMemo(() => ({
    reference: O,
    floating: A,
    setReference: w,
    setFloating: E
  }), [w, E]), D = c.useMemo(() => ({
    reference: R,
    floating: S
  }), [R, S]), L = c.useMemo(() => {
    const C = {
      position: n,
      left: 0,
      top: 0
    };
    if (!D.floating)
      return C;
    const U = Kn(D.floating, d.x), x = Kn(D.floating, d.y);
    return a ? {
      ...C,
      transform: "translate(" + U + "px, " + x + "px)",
      ...Qr(D.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: U,
      top: x
    };
  }, [n, a, D.floating, d.x, d.y]);
  return c.useMemo(() => ({
    ...d,
    update: W,
    refs: H,
    elements: D,
    floatingStyles: L
  }), [d, W, H, D, L]);
}
const Pl = (e) => {
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
      return r && t(r) ? r.current != null ? qn({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? qn({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Tl = (e, t) => ({
  ...bl(e),
  options: [e, t]
}), Ol = (e, t) => ({
  ...xl(e),
  options: [e, t]
}), Nl = (e, t) => ({
  ...El(e),
  options: [e, t]
}), jl = (e, t) => ({
  ...yl(e),
  options: [e, t]
}), _l = (e, t) => ({
  ...wl(e),
  options: [e, t]
}), Ml = (e, t) => ({
  ...Cl(e),
  options: [e, t]
}), Dl = (e, t) => ({
  ...Pl(e),
  options: [e, t]
});
var Ll = "Arrow", eo = c.forwardRef((e, t) => {
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
eo.displayName = Ll;
var Il = eo;
function Fl(e) {
  const [t, n] = c.useState(void 0);
  return pe(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let i, a;
        if ("borderBoxSize" in s) {
          const l = s.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          i = u.inlineSize, a = u.blockSize;
        } else
          i = e.offsetWidth, a = e.offsetHeight;
        n({ width: i, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var un = "Popper", [to, no] = vt(un), [zl, ro] = to(un), oo = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = c.useState(null);
  return /* @__PURE__ */ p.jsx(zl, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
oo.displayName = un;
var so = "PopperAnchor", io = c.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = ro(so, n), i = c.useRef(null), a = ne(t, i), l = c.useRef(null);
    return c.useEffect(() => {
      const u = l.current;
      l.current = r?.current || i.current, u !== l.current && s.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ p.jsx(Z.div, { ...o, ref: a });
  }
);
io.displayName = so;
var dn = "PopperContent", [$l, Wl] = to(dn), ao = c.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: i = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: u = [],
      collisionPadding: d = 0,
      sticky: f = "partial",
      hideWhenDetached: g = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: v,
      ...m
    } = e, b = ro(dn, n), [y, w] = c.useState(null), E = ne(t, (z) => w(z)), [R, S] = c.useState(null), O = Fl(R), A = O?.width ?? 0, k = O?.height ?? 0, M = r + (s !== "center" ? "-" + s : ""), $ = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, G = Array.isArray(u) ? u : [u], V = G.length > 0, W = {
      padding: $,
      boundary: G.filter(Vl),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: V
    }, { refs: I, floatingStyles: H, placement: D, isPositioned: L, middlewareData: C } = Al({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: M,
      whileElementsMounted: (...z) => vl(...z, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        Tl({ mainAxis: o + k, alignmentAxis: i }),
        l && Ol({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? Nl() : void 0,
          ...W
        }),
        l && jl({ ...W }),
        _l({
          ...W,
          apply: ({ elements: z, rects: Y, availableWidth: Q, availableHeight: ie }) => {
            const { width: we, height: ke } = Y.reference, Je = z.floating.style;
            Je.setProperty("--radix-popper-available-width", `${Q}px`), Je.setProperty("--radix-popper-available-height", `${ie}px`), Je.setProperty("--radix-popper-anchor-width", `${we}px`), Je.setProperty("--radix-popper-anchor-height", `${ke}px`);
          }
        }),
        R && Dl({ element: R, padding: a }),
        Hl({ arrowWidth: A, arrowHeight: k }),
        g && Ml({ strategy: "referenceHidden", ...W })
      ]
    }), [U, x] = uo(D), N = _e(v);
    pe(() => {
      L && N?.();
    }, [L, N]);
    const F = C.arrow?.x, _ = C.arrow?.y, B = C.arrow?.centerOffset !== 0, [K, ge] = c.useState();
    return pe(() => {
      y && ge(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ p.jsx(
      "div",
      {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: L ? H.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: K,
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
          $l,
          {
            scope: n,
            placedSide: U,
            onArrowChange: S,
            arrowX: F,
            arrowY: _,
            shouldHideArrow: B,
            children: /* @__PURE__ */ p.jsx(
              Z.div,
              {
                "data-side": U,
                "data-align": x,
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
ao.displayName = dn;
var lo = "PopperArrow", Bl = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, co = c.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = Wl(lo, r), i = Bl[s.placedSide];
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
          Il,
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
co.displayName = lo;
function Vl(e) {
  return e !== null;
}
var Hl = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, i = o.arrow?.centerOffset !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, d] = uo(n), f = { start: "0%", center: "50%", end: "100%" }[d], g = (o.arrow?.x ?? 0) + a / 2, h = (o.arrow?.y ?? 0) + l / 2;
    let v = "", m = "";
    return u === "bottom" ? (v = i ? f : `${g}px`, m = `${-l}px`) : u === "top" ? (v = i ? f : `${g}px`, m = `${r.floating.height + l}px`) : u === "right" ? (v = `${-l}px`, m = i ? f : `${h}px`) : u === "left" && (v = `${r.floating.width + l}px`, m = i ? f : `${h}px`), { data: { x: v, y: m } };
  }
});
function uo(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Gl = oo, Ul = io, Yl = ao, Xl = co, ql = Object.freeze({
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
}), Kl = "VisuallyHidden", fo = c.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(
    Z.span,
    {
      ...e,
      ref: t,
      style: { ...ql, ...e.style }
    }
  )
);
fo.displayName = Kl;
var Zl = fo, [Rt, $c] = vt("Tooltip", [
  no
]), St = no(), po = "TooltipProvider", Jl = 700, Yt = "tooltip.open", [Ql, fn] = Rt(po), mo = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = Jl,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, i = c.useRef(!0), a = c.useRef(!1), l = c.useRef(0);
  return c.useEffect(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ p.jsx(
    Ql,
    {
      scope: t,
      isOpenDelayedRef: i,
      delayDuration: n,
      onOpen: c.useCallback(() => {
        window.clearTimeout(l.current), i.current = !1;
      }, []),
      onClose: c.useCallback(() => {
        window.clearTimeout(l.current), l.current = window.setTimeout(
          () => i.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: a,
      onPointerInTransitChange: c.useCallback((u) => {
        a.current = u;
      }, []),
      disableHoverableContent: o,
      children: s
    }
  );
};
mo.displayName = po;
var Ye = "Tooltip", [ec, Ke] = Rt(Ye), ho = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    disableHoverableContent: i,
    delayDuration: a
  } = e, l = fn(Ye, e.__scopeTooltip), u = St(t), [d, f] = c.useState(null), g = He(), h = c.useRef(0), v = i ?? l.disableHoverableContent, m = a ?? l.delayDuration, b = c.useRef(!1), [y, w] = Zt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (A) => {
      A ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Yt))) : l.onClose(), s?.(A);
    },
    caller: Ye
  }), E = c.useMemo(() => y ? b.current ? "delayed-open" : "instant-open" : "closed", [y]), R = c.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, b.current = !1, w(!0);
  }, [w]), S = c.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, w(!1);
  }, [w]), O = c.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      b.current = !0, w(!0), h.current = 0;
    }, m);
  }, [m, w]);
  return c.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ p.jsx(Gl, { ...u, children: /* @__PURE__ */ p.jsx(
    ec,
    {
      scope: t,
      contentId: g,
      open: y,
      stateAttribute: E,
      trigger: d,
      onTriggerChange: f,
      onTriggerEnter: c.useCallback(() => {
        l.isOpenDelayedRef.current ? O() : R();
      }, [l.isOpenDelayedRef, O, R]),
      onTriggerLeave: c.useCallback(() => {
        v ? S() : (window.clearTimeout(h.current), h.current = 0);
      }, [S, v]),
      onOpen: R,
      onClose: S,
      disableHoverableContent: v,
      children: n
    }
  ) });
};
ho.displayName = Ye;
var Xt = "TooltipTrigger", go = c.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Ke(Xt, n), s = fn(Xt, n), i = St(n), a = c.useRef(null), l = ne(t, a, o.onTriggerChange), u = c.useRef(!1), d = c.useRef(!1), f = c.useCallback(() => u.current = !1, []);
    return c.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ p.jsx(Ul, { asChild: !0, ...i, children: /* @__PURE__ */ p.jsx(
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
          o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: J(e.onFocus, () => {
          u.current || o.onOpen();
        }),
        onBlur: J(e.onBlur, o.onClose),
        onClick: J(e.onClick, o.onClose)
      }
    ) });
  }
);
go.displayName = Xt;
var pn = "TooltipPortal", [tc, nc] = Rt(pn, {
  forceMount: void 0
}), vo = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, s = Ke(pn, t);
  return /* @__PURE__ */ p.jsx(tc, { scope: t, forceMount: n, children: /* @__PURE__ */ p.jsx(Se, { present: n || s.open, children: /* @__PURE__ */ p.jsx(Qt, { asChild: !0, container: o, children: r }) }) });
};
vo.displayName = pn;
var De = "TooltipContent", bo = c.forwardRef(
  (e, t) => {
    const n = nc(De, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...s } = e, i = Ke(De, e.__scopeTooltip);
    return /* @__PURE__ */ p.jsx(Se, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ p.jsx(xo, { side: o, ...s, ref: t }) : /* @__PURE__ */ p.jsx(rc, { side: o, ...s, ref: t }) });
  }
), rc = c.forwardRef((e, t) => {
  const n = Ke(De, e.__scopeTooltip), r = fn(De, e.__scopeTooltip), o = c.useRef(null), s = ne(t, o), [i, a] = c.useState(null), { trigger: l, onClose: u } = n, d = o.current, { onPointerInTransitChange: f } = r, g = c.useCallback(() => {
    a(null), f(!1);
  }, [f]), h = c.useCallback(
    (v, m) => {
      const b = v.currentTarget, y = { x: v.clientX, y: v.clientY }, w = ac(y, b.getBoundingClientRect()), E = lc(y, w), R = cc(m.getBoundingClientRect()), S = dc([...E, ...R]);
      a(S), f(!0);
    },
    [f]
  );
  return c.useEffect(() => () => g(), [g]), c.useEffect(() => {
    if (l && d) {
      const v = (b) => h(b, d), m = (b) => h(b, l);
      return l.addEventListener("pointerleave", v), d.addEventListener("pointerleave", m), () => {
        l.removeEventListener("pointerleave", v), d.removeEventListener("pointerleave", m);
      };
    }
  }, [l, d, h, g]), c.useEffect(() => {
    if (i) {
      const v = (m) => {
        const b = m.target, y = { x: m.clientX, y: m.clientY }, w = l?.contains(b) || d?.contains(b), E = !uc(y, i);
        w ? g() : E && (g(), u());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [l, d, i, u, g]), /* @__PURE__ */ p.jsx(xo, { ...e, ref: s });
}), [oc, sc] = Rt(Ye, { isInside: !1 }), ic = /* @__PURE__ */ Bo("TooltipContent"), xo = c.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      ...a
    } = e, l = Ke(De, n), u = St(n), { onClose: d } = l;
    return c.useEffect(() => (document.addEventListener(Yt, d), () => document.removeEventListener(Yt, d)), [d]), c.useEffect(() => {
      if (l.trigger) {
        const f = (g) => {
          g.target?.contains(l.trigger) && d();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [l.trigger, d]), /* @__PURE__ */ p.jsx(
      Jt,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ p.jsxs(
          Yl,
          {
            "data-state": l.stateAttribute,
            ...u,
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
              /* @__PURE__ */ p.jsx(ic, { children: r }),
              /* @__PURE__ */ p.jsx(oc, { scope: n, isInside: !0, children: /* @__PURE__ */ p.jsx(Zl, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
bo.displayName = De;
var yo = "TooltipArrow", wo = c.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = St(n);
    return sc(
      yo,
      n
    ).isInside ? null : /* @__PURE__ */ p.jsx(Xl, { ...o, ...r, ref: t });
  }
);
wo.displayName = yo;
function ac(e, t) {
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
function lc(e, t, n = 5) {
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
function cc(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function uc(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s], l = t[i], u = a.x, d = a.y, f = l.x, g = l.y;
    d > r != g > r && n < (f - u) * (r - d) / (g - d) + u && (o = !o);
  }
  return o;
}
function dc(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), fc(t);
}
function fc(e) {
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
var pc = mo, mc = ho, hc = go, gc = vo, vc = bo, bc = wo;
function xc({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    pc,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function Co({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(xc, { children: /* @__PURE__ */ p.jsx(mc, { "data-slot": "tooltip", ...e }) });
}
function Eo({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(hc, { "data-slot": "tooltip-trigger", ...e });
}
function Ro({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ p.jsx(gc, { children: /* @__PURE__ */ p.jsxs(
    vc,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: X(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ p.jsx(bc, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const yc = c.createContext(null);
function So() {
  const e = c.useContext(yc);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function wc({
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
  const { isMobile: u, state: d, openMobile: f, setOpenMobile: g } = So();
  return n === "none" ? /* @__PURE__ */ p.jsx(
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
  ) : u ? /* @__PURE__ */ p.jsx(xa, { open: f, onOpenChange: g, ...l, children: /* @__PURE__ */ p.jsxs(
    Ca,
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
        /* @__PURE__ */ p.jsxs(Ea, { className: "sr-only", children: [
          /* @__PURE__ */ p.jsx(Ra, { children: "Sidebar" }),
          /* @__PURE__ */ p.jsx(Sa, { children: "Displays the mobile sidebar." })
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
            className: X(
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
            className: X(
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
function Cc({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: X("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function Ec({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: X("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function Rc({
  className: e,
  asChild: t = !1,
  ...n
}) {
  const r = t ? er : "div";
  return /* @__PURE__ */ p.jsx(
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
function ko({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: X("w-full text-sm", e),
      ...t
    }
  );
}
function Ao({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: X("flex w-full min-w-0 flex-col gap-1", e),
      ...t
    }
  );
}
function Po({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: X("group/menu-item relative", e),
      ...t
    }
  );
}
const Sc = Uo(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function kc({
  asChild: e = !1,
  isActive: t = !1,
  variant: n = "default",
  size: r = "default",
  tooltip: o,
  className: s,
  ...i
}) {
  const a = e ? er : "button", { isMobile: l, state: u } = So(), d = /* @__PURE__ */ p.jsx(
    a,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": r,
      "data-active": t,
      className: X(Sc({ variant: n, size: r }), s),
      ...i
    }
  );
  return o ? (typeof o == "string" && (o = {
    children: o
  }), /* @__PURE__ */ p.jsxs(Co, { children: [
    /* @__PURE__ */ p.jsx(Eo, { asChild: !0, children: d }),
    /* @__PURE__ */ p.jsx(
      Ro,
      {
        side: "right",
        align: "center",
        hidden: u !== "collapsed" || l,
        ...o
      }
    )
  ] })) : d;
}
const Ac = ({
  userName: e = "",
  designation: t = "",
  userimg: n = "",
  isCollapse: r = !1,
  onLogout: o
}) => /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx(Ec, { children: r ? "" : /* @__PURE__ */ p.jsx("div", { className: " my-3 mx-3", children: /* @__PURE__ */ p.jsx(
  "div",
  {
    className: " py-4 px-4 bg-secondary/20 rounded-md overflow-hidden",
    children: /* @__PURE__ */ p.jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex gap-4 items-center", children: [
        /* @__PURE__ */ p.jsx(
          "img",
          {
            src: n,
            alt: "profile-image",
            width: 40,
            height: 40,
            className: "rounded-full"
          }
        ),
        /* @__PURE__ */ p.jsxs("div", { children: [
          /* @__PURE__ */ p.jsxs("h3", { className: "text-base font-medium dark:text-white", children: [
            " ",
            e
          ] }),
          /* @__PURE__ */ p.jsxs("p", { className: "text-xs font-normal text-muted dark:text-darklink", children: [
            " ",
            t
          ] })
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs(Co, { children: [
        /* @__PURE__ */ p.jsx(Eo, { children: /* @__PURE__ */ p.jsx(
          os,
          {
            onClick: o,
            size: 18,
            className: " text-primary cursor-pointer"
          }
        ) }),
        /* @__PURE__ */ p.jsx(Ro, { children: /* @__PURE__ */ p.jsx("p", { children: "Logout" }) })
      ] })
    ] })
  }
) }) }) }), Ze = gt.createContext({
  width: "270px",
  collapsewidth: "80px",
  textColor: "#8D939D",
  isCollapse: !1,
  themeColor: "#5d87ff",
  themeSecondaryColor: "#49beff",
  direction: "ltr"
});
let Pc = () => {
  alert("Logout Successfully");
};
const Wc = ({
  children: e,
  width: t = "270px",
  collapsewidth: n = "80px",
  textColor: r = "#2b2b2b",
  isCollapse: o = !1,
  themeColor: s = "#5d87ff",
  themeSecondaryColor: i = "#49beff",
  mode: a = "light",
  direction: l = "ltr",
  userName: u = "Mathew",
  designation: d = "Designer",
  showProfile: f = !0,
  userimg: g = "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-1.jpg",
  onLogout: h = Pc
}) => {
  const v = o ? n : t, m = a === "dark" ? "dark" : "";
  return a === "dark" && (r = "rgba(255,255,255, 0.9)"), /* @__PURE__ */ p.jsx(
    Ze.Provider,
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
      children: /* @__PURE__ */ p.jsx("div", { className: m, children: /* @__PURE__ */ p.jsxs(
        wc,
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
            f && /* @__PURE__ */ p.jsx(
              Ac,
              {
                userName: u,
                designation: d,
                userimg: g,
                isCollapse: o,
                onLogout: h
              }
            )
          ]
        }
      ) })
    }
  );
};
function To({
  component: e = "a",
  children: t,
  ...n
}) {
  return /* @__PURE__ */ p.jsx(e, { ...n, style: { textDecoration: "none" }, children: t });
}
const Bc = ({
  children: e,
  img: t = "https://tailwindadmin-nextjs-main.vercel.app/_next/static/media/dark-logo.7f45c7e7.svg",
  href: n = "/",
  component: r
}) => {
  const o = gt.useContext(Ze);
  return /* @__PURE__ */ p.jsx(Cc, { children: /* @__PURE__ */ p.jsx(
    "div",
    {
      className: `min-h-[50px] overflow-hidden flex w-[253px] whitespace-nowrap  line-clamp-1 px-5 py-2  overflow-ellipsis ${o.direction === "rtl" ? " rtl:scale-x-[-1]" : ""}`,
      children: /* @__PURE__ */ p.jsx(
        To,
        {
          href: n,
          component: r,
          to: n,
          className: `w-[40px] flex ${o.isCollapse ? "overflow-hidden" : "overflow-visible"}`,
          children: t ? /* @__PURE__ */ p.jsx("img", { src: t, alt: "Logo", style: { maxWidth: "unset" } }) : /* @__PURE__ */ p.jsx("span", { className: "text-gray-800", children: e })
        }
      )
    }
  ) });
}, Vc = ({ children: e, subHeading: t = "menu" }) => {
  const n = Lo(Ze);
  return /* @__PURE__ */ p.jsxs("div", { className: `pt-2 ${n.isCollapse ? "px-2" : "px-4"}`, children: [
    /* @__PURE__ */ p.jsx(
      Rc,
      {
        className: "text-xs font-bold leading-5 p-0",
        style: { color: n.textColor },
        children: n.isCollapse ? "..." : t
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "space-y-1", children: e })
  ] });
}, Hc = ({
  children: e,
  icon: t,
  component: n,
  link: r = "/",
  badge: o = !1,
  badgeColor: s = "bg-primary",
  badgeTextColor: i = "text-white",
  badgeContent: a = "New",
  textFontSize: l = "text-sm",
  borderRadius: u = "rounded-md",
  disabled: d = !1,
  isSelected: f = !1,
  badgeType: g = "filled",
  target: h = ""
}) => {
  const v = gt.useContext(Ze), m = v?.isCollapse;
  return /* @__PURE__ */ p.jsx(ko, { children: /* @__PURE__ */ p.jsx(Ao, { children: /* @__PURE__ */ p.jsx(Po, { children: /* @__PURE__ */ p.jsx(kc, { asChild: !0, children: /* @__PURE__ */ p.jsx(To, { to: r, component: n, target: h, children: /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: X(
        "flex items-center gap-3 w-full py-2.5 px-3 whitespace-nowrap mb-0.5 rounded-md transition-colors duration-200 hover:bg-primary/20 ",
        u,
        d ? "cursor-not-allowed opacity-60 " : "cursor-pointer ",
        f ? "bg-primary text-white" : "text-muted-foreground bg-transparent "
      ),
      style: {
        backgroundColor: f ? v.themeColor : void 0,
        color: f ? void 0 : v.textColor,
        justifyContent: v?.direction === "rtl" ? "flex-end" : "flex-start"
      },
      children: [
        /* @__PURE__ */ p.jsx(
          "div",
          {
            className: X(
              "flex items-center justify-center",
              !m && "min-w-[20px]"
            ),
            style: {
              color: f ? "#fff" : v.textColor
            },
            children: t ?? /* @__PURE__ */ p.jsx(or, { size: 18 })
          }
        ),
        !m && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between w-full", children: [
          /* @__PURE__ */ p.jsx("span", { className: X(l, "leading-tight truncate"), children: e }),
          o && /* @__PURE__ */ p.jsx(
            "span",
            {
              className: X(
                "ml-auto px-2 py-0.5 rounded text-xs font-semibold",
                g === "outlined" ? "border border-border bg-transparent" : s !== "bg-secondary" ? s : "",
                i ?? (g === "outlined" ? "text-primary" : "")
              ),
              style: {
                backgroundColor: s === "bg-secondary" ? v.themeSecondaryColor : void 0,
                color: s === "bg-secondary" && i === void 0 ? "#fff" : void 0
              },
              children: a
            }
          )
        ] })
      ]
    }
  ) }) }) }) }) });
};
var kt = "Collapsible", [Tc, Gc] = vt(kt), [Oc, mn] = Tc(kt), Oo = c.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: s,
      onOpenChange: i,
      ...a
    } = e, [l, u] = Zt({
      prop: r,
      defaultProp: o ?? !1,
      onChange: i,
      caller: kt
    });
    return /* @__PURE__ */ p.jsx(
      Oc,
      {
        scope: n,
        disabled: s,
        contentId: He(),
        open: l,
        onOpenToggle: c.useCallback(() => u((d) => !d), [u]),
        children: /* @__PURE__ */ p.jsx(
          Z.div,
          {
            "data-state": gn(l),
            "data-disabled": s ? "" : void 0,
            ...a,
            ref: t
          }
        )
      }
    );
  }
);
Oo.displayName = kt;
var No = "CollapsibleTrigger", jo = c.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = mn(No, n);
    return /* @__PURE__ */ p.jsx(
      Z.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": gn(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: J(e.onClick, o.onOpenToggle)
      }
    );
  }
);
jo.displayName = No;
var hn = "CollapsibleContent", _o = c.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = mn(hn, e.__scopeCollapsible);
    return /* @__PURE__ */ p.jsx(Se, { present: n || o.open, children: ({ present: s }) => /* @__PURE__ */ p.jsx(Nc, { ...r, ref: t, present: s }) });
  }
);
_o.displayName = hn;
var Nc = c.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...s } = e, i = mn(hn, n), [a, l] = c.useState(r), u = c.useRef(null), d = ne(t, u), f = c.useRef(0), g = f.current, h = c.useRef(0), v = h.current, m = i.open || a, b = c.useRef(m), y = c.useRef(void 0);
  return c.useEffect(() => {
    const w = requestAnimationFrame(() => b.current = !1);
    return () => cancelAnimationFrame(w);
  }, []), pe(() => {
    const w = u.current;
    if (w) {
      y.current = y.current || {
        transitionDuration: w.style.transitionDuration,
        animationName: w.style.animationName
      }, w.style.transitionDuration = "0s", w.style.animationName = "none";
      const E = w.getBoundingClientRect();
      f.current = E.height, h.current = E.width, b.current || (w.style.transitionDuration = y.current.transitionDuration, w.style.animationName = y.current.animationName), l(r);
    }
  }, [i.open, r]), /* @__PURE__ */ p.jsx(
    Z.div,
    {
      "data-state": gn(i.open),
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
function gn(e) {
  return e ? "open" : "closed";
}
var jc = Oo;
function _c({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(jc, { "data-slot": "collapsible", ...e });
}
function Mc({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(
    jo,
    {
      "data-slot": "collapsible-trigger",
      ...e
    }
  );
}
function Dc({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(
    _o,
    {
      "data-slot": "collapsible-content",
      ...e
    }
  );
}
function Uc({
  title: e,
  children: t,
  icon: n,
  textFontSize: r = "text-sm",
  disabled: o = !1,
  borderRadius: s = "rounded-md"
}) {
  const [i, a] = c.useState(!1), l = c.useContext(Ze);
  return /* @__PURE__ */ p.jsx(ko, { children: /* @__PURE__ */ p.jsx(Ao, { children: /* @__PURE__ */ p.jsx(Po, { children: /* @__PURE__ */ p.jsx("div", { className: "w-full", children: /* @__PURE__ */ p.jsxs(
    _c,
    {
      open: i,
      onOpenChange: a,
      className: "flex  flex-col px-3",
      children: [
        /* @__PURE__ */ p.jsx(Mc, { asChild: !0, children: /* @__PURE__ */ p.jsxs(
          "button",
          {
            disabled: o,
            onClick: () => a(!i),
            className: Ve(
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
              /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 ", children: [
                /* @__PURE__ */ p.jsx("span", { className: "text-inherit", children: n || /* @__PURE__ */ p.jsx(or, { size: 20 }) }),
                !l?.isCollapse && /* @__PURE__ */ p.jsx("span", { className: Ve(r, "truncate leading-tight"), children: e })
              ] }),
              !l?.isCollapse && (i ? /* @__PURE__ */ p.jsx(Qo, { size: 16 }) : /* @__PURE__ */ p.jsx(ts, { size: 16 }))
            ]
          }
        ) }),
        /* @__PURE__ */ p.jsx(
          Dc,
          {
            className: Ve(
              "mt-1 flex flex-col space-y-1",
              l?.isCollapse && "items-center"
            ),
            children: t
          }
        )
      ]
    }
  ) }) }) }) });
}
export {
  Bc as Logo,
  Hc as MenuItem,
  Vc as MenuLabel,
  Wc as Sidebar,
  Uc as Submenu
};
