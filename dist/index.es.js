import * as c from "react";
import gt, { forwardRef as er, createElement as zt, useState as _o, useLayoutEffect as jo, useContext as Mo } from "react";
import * as tr from "react-dom";
import Do from "react-dom";
var Qe = { exports: {} }, We = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yn;
function Lo() {
  if (yn) return We;
  yn = 1;
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
var wn;
function Io() {
  return wn || (wn = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(y) {
      if (y == null) return null;
      if (typeof y == "function")
        return y.$$typeof === $ ? null : y.displayName || y.name || null;
      if (typeof y == "string") return y;
      switch (y) {
        case p:
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
          case A:
            return N = y.displayName || null, N !== null ? N : e(y.type) || "Memo";
          case k:
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
        var F = N.error, j = typeof Symbol == "function" && Symbol.toStringTag && y[Symbol.toStringTag] || y.constructor.name || "Object";
        return F.call(
          N,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          j
        ), t(y);
      }
    }
    function r(y) {
      if (y === p) return "<>";
      if (typeof y == "object" && y !== null && y.$$typeof === k)
        return "<...>";
      try {
        var N = e(y);
        return N ? "<" + N + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var y = U.A;
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
    function u(y, N, F, j, B, q, ge, z) {
      return F = q.ref, y = {
        $$typeof: h,
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
        value: z
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    }
    function d(y, N, F, j, B, q, ge, z) {
      var X = N.children;
      if (X !== void 0)
        if (j)
          if (W(X)) {
            for (j = 0; j < X.length; j++)
              f(X[j]);
            Object.freeze && Object.freeze(X);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(X);
      if (V.call(N, "key")) {
        X = e(y);
        var Q = Object.keys(N).filter(function(we) {
          return we !== "key";
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
        typeof y == "function" ? y.displayName || y.name || "Unknown" : y
      ), u(
        y,
        X,
        q,
        B,
        o(),
        F,
        ge,
        z
      );
    }
    function f(y) {
      typeof y == "object" && y !== null && y.$$typeof === h && y._store && (y._store.validated = 1);
    }
    var g = gt, h = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), E = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), M = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), U = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, W = Array.isArray, I = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(y) {
        return y();
      }
    };
    var H, D = {}, L = g.react_stack_bottom_frame.bind(
      g,
      s
    )(), C = I(r(s)), Y = {};
    Be.Fragment = p, Be.jsx = function(y, N, F, j, B) {
      var q = 1e4 > U.recentlyCreatedOwnerStacks++;
      return d(
        y,
        N,
        F,
        !1,
        j,
        B,
        q ? Error("react-stack-top-frame") : L,
        q ? I(r(y)) : C
      );
    }, Be.jsxs = function(y, N, F, j, B) {
      var q = 1e4 > U.recentlyCreatedOwnerStacks++;
      return d(
        y,
        N,
        F,
        !0,
        j,
        B,
        q ? Error("react-stack-top-frame") : L,
        q ? I(r(y)) : C
      );
    };
  })()), Be;
}
var Cn;
function Fo() {
  return Cn || (Cn = 1, process.env.NODE_ENV === "production" ? Qe.exports = Lo() : Qe.exports = Io()), Qe.exports;
}
var m = Fo();
function En(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function nr(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = En(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : En(e[o], null);
        }
      };
  };
}
function ne(...e) {
  return c.useCallback(nr(...e), e);
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
  const t = /* @__PURE__ */ zo(e), n = c.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = c.Children.toArray(s), l = a.find(Wo);
    if (l) {
      const u = l.props.children, d = a.map((f) => f === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ m.jsx(t, { ...i, ref: o, children: c.isValidElement(u) ? c.cloneElement(u, void 0, d) : null });
    }
    return /* @__PURE__ */ m.jsx(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Zt = /* @__PURE__ */ qt("Slot");
// @__NO_SIDE_EFFECTS__
function zo(e) {
  const t = c.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (c.isValidElement(o)) {
      const i = Vo(o), a = Bo(s, o.props);
      return o.type !== c.Fragment && (a.ref = r ? nr(r, i) : i), c.cloneElement(o, a);
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var rr = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function $o(e) {
  const t = ({ children: n }) => /* @__PURE__ */ m.jsx(m.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = rr, t;
}
function Wo(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === rr;
}
function Bo(e, t) {
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
function Vo(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function or(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = or(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function He() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = or(e)) && (r && (r += " "), r += t);
  return r;
}
const Sn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Rn = He, sr = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return Rn(e, n?.class, n?.className);
  const { variants: o, defaultVariants: s } = t, i = Object.keys(o).map((u) => {
    const d = n?.[u], f = s?.[u];
    if (d === null) return null;
    const g = Sn(d) || Sn(f);
    return o[u][g];
  }), a = n && Object.entries(n).reduce((u, d) => {
    let [f, g] = d;
    return g === void 0 || (u[f] = g), u;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, d) => {
    let { class: f, className: g, ...h } = d;
    return Object.entries(h).every((v) => {
      let [p, b] = v;
      return Array.isArray(b) ? b.includes({
        ...s,
        ...a
      }[p]) : {
        ...s,
        ...a
      }[p] === b;
    }) ? [
      ...u,
      f,
      g
    ] : u;
  }, []);
  return Rn(e, i, l, n?.class, n?.className);
};
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ho = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Go = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), kn = (e) => {
  const t = Go(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, ir = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), Uo = (e) => {
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
var Yo = {
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
const Xo = er(
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
      ...Yo,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: ir("lucide", o),
      ...!s && !Uo(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...i.map(([u, d]) => zt(u, d)),
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
const Le = (e, t) => {
  const n = er(
    ({ className: r, ...o }, s) => zt(Xo, {
      ref: s,
      iconNode: t,
      className: ir(
        `lucide-${Ho(kn(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = kn(e), n;
};
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ko = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], qo = Le("chevron-down", Ko);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zo = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Jo = Le("chevron-right", Zo);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qo = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
], ar = Le("circle-dot", Qo);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
], ts = Le("log-out", es);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
], rs = Le("panel-left", ns);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ss = Le("x", os), At = 768;
function is() {
  const [e, t] = c.useState(void 0);
  return c.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${At - 1}px)`), r = () => {
      t(window.innerWidth < At);
    };
    return n.addEventListener("change", r), t(window.innerWidth < At), () => n.removeEventListener("change", r);
  }, []), !!e;
}
const Jt = "-", as = (e) => {
  const t = cs(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(Jt);
      return a[0] === "" && a.length !== 1 && a.shift(), lr(a, t) || ls(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const l = n[i] || [];
      return a && r[i] ? [...l, ...r[i]] : l;
    }
  };
}, lr = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? lr(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(Jt);
  return t.validators.find(({
    validator: i
  }) => i(s))?.classGroupId;
}, An = /^\[(.+)\]$/, ls = (e) => {
  if (An.test(e)) {
    const t = An.exec(e)[1], n = t?.substring(0, t.indexOf(":"));
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
    $t(n[o], r, o, t);
  return r;
}, $t = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Pn(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (us(o)) {
        $t(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      $t(i, Pn(t, s), n, r);
    });
  });
}, Pn = (e, t) => {
  let n = e;
  return t.split(Jt).forEach((r) => {
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
}, Wt = "!", Bt = ":", fs = Bt.length, ps = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const s = [];
    let i = 0, a = 0, l = 0, u;
    for (let v = 0; v < o.length; v++) {
      let p = o[v];
      if (i === 0 && a === 0) {
        if (p === Bt) {
          s.push(o.slice(l, v)), l = v + fs;
          continue;
        }
        if (p === "/") {
          u = v;
          continue;
        }
      }
      p === "[" ? i++ : p === "]" ? i-- : p === "(" ? a++ : p === ")" && a--;
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
    const o = t + Bt, s = r;
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
}, ms = (e) => e.endsWith(Wt) ? e.substring(0, e.length - 1) : e.startsWith(Wt) ? e.substring(1) : e, hs = (e) => {
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
    const w = s(g).join(":"), E = h ? w + Wt : w, S = E + x;
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
function xs() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = cr(t)) && (r && (r += " "), r += n);
  return r;
}
const cr = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = cr(e[r])) && (n && (n += " "), n += t);
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
const K = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, ur = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, dr = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ws = /^\d+\/\d+$/, Cs = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Es = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ss = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Rs = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ks = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ae = (e) => ws.test(e), _ = (e) => !!e && !Number.isNaN(Number(e)), ve = (e) => !!e && Number.isInteger(Number(e)), Pt = (e) => e.endsWith("%") && _(e.slice(0, -1)), fe = (e) => Cs.test(e), As = () => !0, Ps = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Es.test(e) && !Ss.test(e)
), fr = () => !1, Os = (e) => Rs.test(e), Ts = (e) => ks.test(e), Ns = (e) => !P(e) && !O(e), _s = (e) => Ie(e, hr, fr), P = (e) => ur.test(e), Ce = (e) => Ie(e, gr, Ps), Ot = (e) => Ie(e, Is, _), On = (e) => Ie(e, pr, fr), js = (e) => Ie(e, mr, Ts), et = (e) => Ie(e, vr, Os), O = (e) => dr.test(e), Ve = (e) => Fe(e, gr), Ms = (e) => Fe(e, Fs), Tn = (e) => Fe(e, pr), Ds = (e) => Fe(e, hr), Ls = (e) => Fe(e, mr), tt = (e) => Fe(e, vr, !0), Ie = (e, t, n) => {
  const r = ur.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Fe = (e, t, n = !1) => {
  const r = dr.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, pr = (e) => e === "position" || e === "percentage", mr = (e) => e === "image" || e === "url", hr = (e) => e === "length" || e === "size" || e === "bg-size", gr = (e) => e === "length", Is = (e) => e === "number", Fs = (e) => e === "family-name", vr = (e) => e === "shadow", zs = () => {
  const e = K("color"), t = K("font"), n = K("text"), r = K("font-weight"), o = K("tracking"), s = K("leading"), i = K("breakpoint"), a = K("container"), l = K("spacing"), u = K("radius"), d = K("shadow"), f = K("inset-shadow"), g = K("text-shadow"), h = K("drop-shadow"), v = K("blur"), p = K("perspective"), b = K("aspect"), x = K("ease"), w = K("animate"), E = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
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
  ], R = () => [...S(), O, P], T = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", "contain", "none"], k = () => [O, P, l], M = () => [Ae, "full", "auto", ...k()], $ = () => [ve, "none", "subgrid", O, P], U = () => ["auto", {
    span: ["full", ve, O, P]
  }, ve, O, P], V = () => [ve, "auto", O, P], W = () => ["auto", "min", "max", "fr", O, P], I = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], H = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], D = () => ["auto", ...k()], L = () => [Ae, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...k()], C = () => [e, O, P], Y = () => [...S(), Tn, On, {
    position: [O, P]
  }], y = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], N = () => ["auto", "cover", "contain", Ds, _s, {
    size: [O, P]
  }], F = () => [Pt, Ve, Ce], j = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    O,
    P
  ], B = () => ["", _, Ve, Ce], q = () => ["solid", "dashed", "dotted", "double"], ge = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], z = () => [_, Pt, Tn, On], X = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    O,
    P
  ], Q = () => ["none", _, O, P], ie = () => ["none", _, O, P], we = () => [_, O, P], ke = () => [Ae, "full", ...k()];
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
        aspect: ["auto", "square", Ae, P, O, b]
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
        flex: [_, Ae, "auto", "initial", "none", P]
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
        row: U()
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
        font: [r, O, Ot]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Pt, P]
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
        tracking: [o, O, P]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [_, "none", O, Ot]
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
        decoration: [_, "from-font", "auto", O, Ce]
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
          }, ve, O, P],
          radial: ["", O, P],
          conic: [ve, O, P]
        }, Ls, js]
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
        "outline-offset": [_, O, P]
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
        animate: ["none", w, O, P]
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
        perspective: [p, O, P]
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
        stroke: [_, Ve, Ce, Ot]
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
function G(...e) {
  return $s(He(e));
}
const Ws = sr(
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
function Bs({
  className: e,
  variant: t,
  size: n,
  asChild: r = !1,
  ...o
}) {
  const s = r ? Zt : "button";
  return /* @__PURE__ */ m.jsx(
    s,
    {
      "data-slot": "button",
      className: G(Ws({ variant: t, size: n, className: e })),
      ...o
    }
  );
}
var Vs = [
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
], Z = Vs.reduce((e, t) => {
  const n = /* @__PURE__ */ qt(`Primitive.${t}`), r = c.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m.jsx(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Hs(e, t) {
  e && tr.flushSync(() => e.dispatchEvent(t));
}
function J(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
function Gs(e, t) {
  const n = c.createContext(t), r = (s) => {
    const { children: i, ...a } = s, l = c.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ m.jsx(n.Provider, { value: l, children: i });
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
      const { scope: g, children: h, ...v } = f, p = g?.[e]?.[l] || a, b = c.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ m.jsx(p.Provider, { value: b, children: h });
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
  return o.scopeName = e, [r, Us(o, ...t)];
}
function Us(...e) {
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
}, Ys = c[" useId ".trim().toString()] || (() => {
}), Xs = 0;
function Ge(e) {
  const [t, n] = c.useState(Ys());
  return pe(() => {
    n((r) => r ?? String(Xs++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var Ks = c[" useInsertionEffect ".trim().toString()] || pe;
function Qt({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, i] = qs({
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
        const f = Zs(d) ? d(e) : d;
        f !== e && i.current?.(f);
      } else
        s(d);
    },
    [a, e, s, i]
  );
  return [l, u];
}
function qs({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), o = c.useRef(n), s = c.useRef(t);
  return Ks(() => {
    s.current = t;
  }, [t]), c.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
function Zs(e) {
  return typeof e == "function";
}
function je(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...n) => t.current?.(...n), []);
}
function Js(e, t = globalThis?.document) {
  const n = je(e);
  c.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Qs = "DismissableLayer", Vt = "dismissableLayer.update", ei = "dismissableLayer.pointerDownOutside", ti = "dismissableLayer.focusOutside", Nn, br = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), en = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...l
    } = e, u = c.useContext(br), [d, f] = c.useState(null), g = d?.ownerDocument ?? globalThis?.document, [, h] = c.useState({}), v = ne(t, (A) => f(A)), p = Array.from(u.layers), [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), x = p.indexOf(b), w = d ? p.indexOf(d) : -1, E = u.layersWithOutsidePointerEventsDisabled.size > 0, S = w >= x, R = oi((A) => {
      const k = A.target, M = [...u.branches].some(($) => $.contains(k));
      !S || M || (o?.(A), i?.(A), A.defaultPrevented || a?.());
    }, g), T = si((A) => {
      const k = A.target;
      [...u.branches].some(($) => $.contains(k)) || (s?.(A), i?.(A), A.defaultPrevented || a?.());
    }, g);
    return Js((A) => {
      w === u.layers.size - 1 && (r?.(A), !A.defaultPrevented && a && (A.preventDefault(), a()));
    }, g), c.useEffect(() => {
      if (d)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Nn = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), _n(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = Nn);
        };
    }, [d, g, n, u]), c.useEffect(() => () => {
      d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), _n());
    }, [d, u]), c.useEffect(() => {
      const A = () => h({});
      return document.addEventListener(Vt, A), () => document.removeEventListener(Vt, A);
    }, []), /* @__PURE__ */ m.jsx(
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
en.displayName = Qs;
var ni = "DismissableLayerBranch", ri = c.forwardRef((e, t) => {
  const n = c.useContext(br), r = c.useRef(null), o = ne(t, r);
  return c.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ m.jsx(Z.div, { ...e, ref: o });
});
ri.displayName = ni;
function oi(e, t = globalThis?.document) {
  const n = je(e), r = c.useRef(!1), o = c.useRef(() => {
  });
  return c.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          xr(
            ei,
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
function si(e, t = globalThis?.document) {
  const n = je(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && xr(ti, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function _n() {
  const e = new CustomEvent(Vt);
  document.dispatchEvent(e);
}
function xr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Hs(o, s) : o.dispatchEvent(s);
}
var Tt = "focusScope.autoFocusOnMount", Nt = "focusScope.autoFocusOnUnmount", jn = { bubbles: !1, cancelable: !0 }, ii = "FocusScope", yr = c.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = c.useState(null), u = je(o), d = je(s), f = c.useRef(null), g = ne(t, (p) => l(p)), h = c.useRef({
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
      let p = function(E) {
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
      document.addEventListener("focusin", p), document.addEventListener("focusout", b);
      const w = new MutationObserver(x);
      return a && w.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", b), w.disconnect();
      };
    }
  }, [r, a, h.paused]), c.useEffect(() => {
    if (a) {
      Dn.add(h);
      const p = document.activeElement;
      if (!a.contains(p)) {
        const x = new CustomEvent(Tt, jn);
        a.addEventListener(Tt, u), a.dispatchEvent(x), x.defaultPrevented || (ai(fi(wr(a)), { select: !0 }), document.activeElement === p && be(a));
      }
      return () => {
        a.removeEventListener(Tt, u), setTimeout(() => {
          const x = new CustomEvent(Nt, jn);
          a.addEventListener(Nt, d), a.dispatchEvent(x), x.defaultPrevented || be(p ?? document.body, { select: !0 }), a.removeEventListener(Nt, d), Dn.remove(h);
        }, 0);
      };
    }
  }, [a, u, d, h]);
  const v = c.useCallback(
    (p) => {
      if (!n && !r || h.paused) return;
      const b = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, x = document.activeElement;
      if (b && x) {
        const w = p.currentTarget, [E, S] = li(w);
        E && S ? !p.shiftKey && x === S ? (p.preventDefault(), n && be(E, { select: !0 })) : p.shiftKey && x === E && (p.preventDefault(), n && be(S, { select: !0 })) : x === w && p.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ m.jsx(Z.div, { tabIndex: -1, ...i, ref: g, onKeyDown: v });
});
yr.displayName = ii;
function ai(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (be(r, { select: t }), document.activeElement !== n) return;
}
function li(e) {
  const t = wr(e), n = Mn(t, e), r = Mn(t.reverse(), e);
  return [n, r];
}
function wr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Mn(e, t) {
  for (const n of e)
    if (!ci(n, { upTo: t })) return n;
}
function ci(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function ui(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function be(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && ui(e) && t && e.select();
  }
}
var Dn = di();
function di() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = Ln(e, t), e.unshift(t);
    },
    remove(t) {
      e = Ln(e, t), e[0]?.resume();
    }
  };
}
function Ln(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function fi(e) {
  return e.filter((t) => t.tagName !== "A");
}
var pi = "Portal", tn = c.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, s] = c.useState(!1);
  pe(() => s(!0), []);
  const i = n || o && globalThis?.document?.body;
  return i ? Do.createPortal(/* @__PURE__ */ m.jsx(Z.div, { ...r, ref: t }), i) : null;
});
tn.displayName = pi;
function mi(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var Re = (e) => {
  const { present: t, children: n } = e, r = hi(t), o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), s = ne(r.ref, gi(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: s }) : null;
};
Re.displayName = "Presence";
function hi(e) {
  const [t, n] = c.useState(), r = c.useRef(null), o = c.useRef(e), s = c.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = mi(i, {
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
        const p = nt(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && p && (l("ANIMATION_END"), !o.current)) {
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
function gi(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var _t = 0;
function vi() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? In()), document.body.insertAdjacentElement("beforeend", e[1] ?? In()), _t++, () => {
      _t === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), _t--;
    };
  }, []);
}
function In() {
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
function Cr(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function bi(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var lt = "right-scroll-bar-position", ct = "width-before-scroll-bar", xi = "with-scroll-bars-hidden", yi = "--removed-body-scroll-bar-size";
function jt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function wi(e, t) {
  var n = _o(function() {
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
var Ci = typeof window < "u" ? c.useLayoutEffect : c.useEffect, Fn = /* @__PURE__ */ new WeakMap();
function Ei(e, t) {
  var n = wi(null, function(r) {
    return e.forEach(function(o) {
      return jt(o, r);
    });
  });
  return Ci(function() {
    var r = Fn.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || jt(a, null);
      }), s.forEach(function(a) {
        o.has(a) || jt(a, i);
      });
    }
    Fn.set(n, e);
  }, [e]), n;
}
function Si(e) {
  return e;
}
function Ri(e, t) {
  t === void 0 && (t = Si);
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
function ki(e) {
  e === void 0 && (e = {});
  var t = Ri(null);
  return t.options = ae({ async: !0, ssr: !1 }, e), t;
}
var Er = function(e) {
  var t = e.sideCar, n = Cr(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return c.createElement(r, ae({}, n));
};
Er.isSideCarExport = !0;
function Ai(e, t) {
  return e.useMedium(t), Er;
}
var Sr = ki(), Mt = function() {
}, bt = c.forwardRef(function(e, t) {
  var n = c.useRef(null), r = c.useState({
    onScrollCapture: Mt,
    onWheelCapture: Mt,
    onTouchMoveCapture: Mt
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, g = e.sideCar, h = e.noRelative, v = e.noIsolation, p = e.inert, b = e.allowPinchZoom, x = e.as, w = x === void 0 ? "div" : x, E = e.gapMode, S = Cr(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = g, T = Ei([n, t]), A = ae(ae({}, S), o);
  return c.createElement(
    c.Fragment,
    null,
    d && c.createElement(R, { sideCar: Sr, removeScrollBar: u, shards: f, noRelative: h, noIsolation: v, inert: p, setCallbacks: s, allowPinchZoom: !!b, lockRef: n, gapMode: E }),
    i ? c.cloneElement(c.Children.only(a), ae(ae({}, A), { ref: T })) : c.createElement(w, ae({}, A, { className: l, ref: T }), a)
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
var Pi = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Oi() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Pi();
  return t && e.setAttribute("nonce", t), e;
}
function Ti(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ni(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var _i = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Oi()) && (Ti(t, n), Ni(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, ji = function() {
  var e = _i();
  return function(t, n) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Rr = function() {
  var e = ji(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Mi = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Dt = function(e) {
  return parseInt(e || "", 10) || 0;
}, Di = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Dt(n), Dt(r), Dt(o)];
}, Li = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Mi;
  var t = Di(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Ii = Rr(), Ne = "data-scroll-locked", Fi = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(xi, ` {
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
    `).concat(yi, ": ").concat(a, `px;
  }
`);
}, zn = function() {
  var e = parseInt(document.body.getAttribute(Ne) || "0", 10);
  return isFinite(e) ? e : 0;
}, zi = function() {
  c.useEffect(function() {
    return document.body.setAttribute(Ne, (zn() + 1).toString()), function() {
      var e = zn() - 1;
      e <= 0 ? document.body.removeAttribute(Ne) : document.body.setAttribute(Ne, e.toString());
    };
  }, []);
}, $i = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  zi();
  var s = c.useMemo(function() {
    return Li(o);
  }, [o]);
  return c.createElement(Ii, { styles: Fi(s, !t, o, n ? "" : "!important") });
}, Ht = !1;
if (typeof window < "u")
  try {
    var rt = Object.defineProperty({}, "passive", {
      get: function() {
        return Ht = !0, !0;
      }
    });
    window.addEventListener("test", rt, rt), window.removeEventListener("test", rt, rt);
  } catch {
    Ht = !1;
  }
var Pe = Ht ? { passive: !1 } : !1, Wi = function(e) {
  return e.tagName === "TEXTAREA";
}, kr = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Wi(e) && n[t] === "visible")
  );
}, Bi = function(e) {
  return kr(e, "overflowY");
}, Vi = function(e) {
  return kr(e, "overflowX");
}, $n = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Ar(e, r);
    if (o) {
      var s = Pr(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Hi = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Gi = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ar = function(e, t) {
  return e === "v" ? Bi(t) : Vi(t);
}, Pr = function(e, t) {
  return e === "v" ? Hi(t) : Gi(t);
}, Ui = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Yi = function(e, t, n, r, o) {
  var s = Ui(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, l = t.contains(a), u = !1, d = i > 0, f = 0, g = 0;
  do {
    if (!a)
      break;
    var h = Pr(e, a), v = h[0], p = h[1], b = h[2], x = p - b - s * v;
    (v || x) && Ar(e, a) && (f += x, g += v);
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
}, Wn = function(e) {
  return [e.deltaX, e.deltaY];
}, Bn = function(e) {
  return e && "current" in e ? e.current : e;
}, Xi = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Ki = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, qi = 0, Oe = [];
function Zi(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), r = c.useRef(), o = c.useState(qi++)[0], s = c.useState(Rr)[0], i = c.useRef(e);
  c.useEffect(function() {
    i.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var p = bi([e.lockRef.current], (e.shards || []).map(Bn), !0).filter(Boolean);
      return p.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), p.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = c.useCallback(function(p, b) {
    if ("touches" in p && p.touches.length === 2 || p.type === "wheel" && p.ctrlKey)
      return !i.current.allowPinchZoom;
    var x = ot(p), w = n.current, E = "deltaX" in p ? p.deltaX : w[0] - x[0], S = "deltaY" in p ? p.deltaY : w[1] - x[1], R, T = p.target, A = Math.abs(E) > Math.abs(S) ? "h" : "v";
    if ("touches" in p && A === "h" && T.type === "range")
      return !1;
    var k = $n(A, T);
    if (!k)
      return !0;
    if (k ? R = A : (R = A === "v" ? "h" : "v", k = $n(A, T)), !k)
      return !1;
    if (!r.current && "changedTouches" in p && (E || S) && (r.current = R), !R)
      return !0;
    var M = r.current || R;
    return Yi(M, b, p, M === "h" ? E : S);
  }, []), l = c.useCallback(function(p) {
    var b = p;
    if (!(!Oe.length || Oe[Oe.length - 1] !== s)) {
      var x = "deltaY" in b ? Wn(b) : ot(b), w = t.current.filter(function(R) {
        return R.name === b.type && (R.target === b.target || b.target === R.shadowParent) && Xi(R.delta, x);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var E = (i.current.shards || []).map(Bn).filter(Boolean).filter(function(R) {
          return R.contains(b.target);
        }), S = E.length > 0 ? a(b, E[0]) : !i.current.noIsolation;
        S && b.cancelable && b.preventDefault();
      }
    }
  }, []), u = c.useCallback(function(p, b, x, w) {
    var E = { name: p, delta: b, target: x, should: w, shadowParent: Ji(x) };
    t.current.push(E), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== E;
      });
    }, 1);
  }, []), d = c.useCallback(function(p) {
    n.current = ot(p), r.current = void 0;
  }, []), f = c.useCallback(function(p) {
    u(p.type, Wn(p), p.target, a(p, e.lockRef.current));
  }, []), g = c.useCallback(function(p) {
    u(p.type, ot(p), p.target, a(p, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return Oe.push(s), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: g
    }), document.addEventListener("wheel", l, Pe), document.addEventListener("touchmove", l, Pe), document.addEventListener("touchstart", d, Pe), function() {
      Oe = Oe.filter(function(p) {
        return p !== s;
      }), document.removeEventListener("wheel", l, Pe), document.removeEventListener("touchmove", l, Pe), document.removeEventListener("touchstart", d, Pe);
    };
  }, []);
  var h = e.removeScrollBar, v = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    v ? c.createElement(s, { styles: Ki(o) }) : null,
    h ? c.createElement($i, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Ji(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Qi = Ai(Sr, Zi);
var Or = c.forwardRef(function(e, t) {
  return c.createElement(bt, ae({}, e, { ref: t, sideCar: Qi }));
});
Or.classNames = bt.classNames;
var ea = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Te = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakMap(), it = {}, Lt = 0, Tr = function(e) {
  return e && (e.host || Tr(e.parentNode));
}, ta = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Tr(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, na = function(e, t, n, r) {
  var o = ta(t, Array.isArray(e) ? e : [e]);
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
          var h = g.getAttribute(r), v = h !== null && h !== "false", p = (Te.get(g) || 0) + 1, b = (s.get(g) || 0) + 1;
          Te.set(g, p), s.set(g, b), i.push(g), p === 1 && v && st.set(g, !0), b === 1 && g.setAttribute(n, "true"), v || g.setAttribute(r, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", g, x);
        }
    });
  };
  return d(t), a.clear(), Lt++, function() {
    i.forEach(function(f) {
      var g = Te.get(f) - 1, h = s.get(f) - 1;
      Te.set(f, g), s.set(f, h), g || (st.has(f) || f.removeAttribute(r), st.delete(f)), h || f.removeAttribute(n);
    }), Lt--, Lt || (Te = /* @__PURE__ */ new WeakMap(), Te = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakMap(), it = {});
  };
}, ra = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = ea(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), na(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, xt = "Dialog", [Nr, Gc] = vt(xt), [oa, se] = Nr(xt), _r = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !0
  } = e, a = c.useRef(null), l = c.useRef(null), [u, d] = Qt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: xt
  });
  return /* @__PURE__ */ m.jsx(
    oa,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: Ge(),
      titleId: Ge(),
      descriptionId: Ge(),
      open: u,
      onOpenChange: d,
      onOpenToggle: c.useCallback(() => d((f) => !f), [d]),
      modal: i,
      children: n
    }
  );
};
_r.displayName = xt;
var jr = "DialogTrigger", sa = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(jr, n), s = ne(t, o.triggerRef);
    return /* @__PURE__ */ m.jsx(
      Z.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": on(o.open),
        ...r,
        ref: s,
        onClick: J(e.onClick, o.onOpenToggle)
      }
    );
  }
);
sa.displayName = jr;
var nn = "DialogPortal", [ia, Mr] = Nr(nn, {
  forceMount: void 0
}), Dr = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = se(nn, t);
  return /* @__PURE__ */ m.jsx(ia, { scope: t, forceMount: n, children: c.Children.map(r, (i) => /* @__PURE__ */ m.jsx(Re, { present: n || s.open, children: /* @__PURE__ */ m.jsx(tn, { asChild: !0, container: o, children: i }) })) });
};
Dr.displayName = nn;
var dt = "DialogOverlay", Lr = c.forwardRef(
  (e, t) => {
    const n = Mr(dt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = se(dt, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ m.jsx(Re, { present: r || s.open, children: /* @__PURE__ */ m.jsx(la, { ...o, ref: t }) }) : null;
  }
);
Lr.displayName = dt;
var aa = /* @__PURE__ */ qt("DialogOverlay.RemoveScroll"), la = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(dt, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ m.jsx(Or, { as: aa, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ m.jsx(
        Z.div,
        {
          "data-state": on(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Ee = "DialogContent", Ir = c.forwardRef(
  (e, t) => {
    const n = Mr(Ee, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = se(Ee, e.__scopeDialog);
    return /* @__PURE__ */ m.jsx(Re, { present: r || s.open, children: s.modal ? /* @__PURE__ */ m.jsx(ca, { ...o, ref: t }) : /* @__PURE__ */ m.jsx(ua, { ...o, ref: t }) });
  }
);
Ir.displayName = Ee;
var ca = c.forwardRef(
  (e, t) => {
    const n = se(Ee, e.__scopeDialog), r = c.useRef(null), o = ne(t, n.contentRef, r);
    return c.useEffect(() => {
      const s = r.current;
      if (s) return ra(s);
    }, []), /* @__PURE__ */ m.jsx(
      Fr,
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
), ua = c.forwardRef(
  (e, t) => {
    const n = se(Ee, e.__scopeDialog), r = c.useRef(!1), o = c.useRef(!1);
    return /* @__PURE__ */ m.jsx(
      Fr,
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
), Fr = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = se(Ee, n), l = c.useRef(null), u = ne(t, l);
    return vi(), /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
      /* @__PURE__ */ m.jsx(
        yr,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ m.jsx(
            en,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": on(a.open),
              ...i,
              ref: u,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
        /* @__PURE__ */ m.jsx(da, { titleId: a.titleId }),
        /* @__PURE__ */ m.jsx(pa, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), rn = "DialogTitle", zr = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(rn, n);
    return /* @__PURE__ */ m.jsx(Z.h2, { id: o.titleId, ...r, ref: t });
  }
);
zr.displayName = rn;
var $r = "DialogDescription", Wr = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se($r, n);
    return /* @__PURE__ */ m.jsx(Z.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Wr.displayName = $r;
var Br = "DialogClose", Vr = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = se(Br, n);
    return /* @__PURE__ */ m.jsx(
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
Vr.displayName = Br;
function on(e) {
  return e ? "open" : "closed";
}
var Hr = "DialogTitleWarning", [Uc, Gr] = Gs(Hr, {
  contentName: Ee,
  titleName: rn,
  docsSlug: "dialog"
}), da = ({ titleId: e }) => {
  const t = Gr(Hr), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, fa = "DialogDescriptionWarning", pa = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Gr(fa).contentName}}.`;
  return c.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, ma = _r, ha = Dr, ga = Lr, va = Ir, ba = zr, xa = Wr, ya = Vr;
function wa({ ...e }) {
  return /* @__PURE__ */ m.jsx(ma, { "data-slot": "sheet", ...e });
}
function Ca({
  ...e
}) {
  return /* @__PURE__ */ m.jsx(ha, { "data-slot": "sheet-portal", ...e });
}
function Ea({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ m.jsx(
    ga,
    {
      "data-slot": "sheet-overlay",
      className: G(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function Sa({
  className: e,
  children: t,
  side: n = "right",
  ...r
}) {
  return /* @__PURE__ */ m.jsxs(Ca, { children: [
    /* @__PURE__ */ m.jsx(Ea, {}),
    /* @__PURE__ */ m.jsxs(
      va,
      {
        "data-slot": "sheet-content",
        className: G(
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
          /* @__PURE__ */ m.jsxs(ya, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ m.jsx(ss, { className: "size-4" }),
            /* @__PURE__ */ m.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function Ra({ className: e, ...t }) {
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: G("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function ka({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ m.jsx(
    ba,
    {
      "data-slot": "sheet-title",
      className: G("text-foreground font-semibold", e),
      ...t
    }
  );
}
function Aa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ m.jsx(
    xa,
    {
      "data-slot": "sheet-description",
      className: G("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
const Pa = ["top", "right", "bottom", "left"], xe = Math.min, ee = Math.max, ft = Math.round, at = Math.floor, ce = (e) => ({
  x: e,
  y: e
}), Oa = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ta = {
  start: "end",
  end: "start"
};
function Gt(e, t, n) {
  return ee(e, xe(t, n));
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
function sn(e) {
  return e === "x" ? "y" : "x";
}
function an(e) {
  return e === "y" ? "height" : "width";
}
const Na = /* @__PURE__ */ new Set(["top", "bottom"]);
function le(e) {
  return Na.has(he(e)) ? "y" : "x";
}
function ln(e) {
  return sn(le(e));
}
function _a(e, t, n) {
  n === void 0 && (n = !1);
  const r = ze(e), o = ln(e), s = an(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = pt(i)), [i, pt(i)];
}
function ja(e) {
  const t = pt(e);
  return [Ut(e), t, Ut(t)];
}
function Ut(e) {
  return e.replace(/start|end/g, (t) => Ta[t]);
}
const Vn = ["left", "right"], Hn = ["right", "left"], Ma = ["top", "bottom"], Da = ["bottom", "top"];
function La(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Hn : Vn : t ? Vn : Hn;
    case "left":
    case "right":
      return t ? Ma : Da;
    default:
      return [];
  }
}
function Ia(e, t, n, r) {
  const o = ze(e);
  let s = La(he(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Ut)))), s;
}
function pt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Oa[t]);
}
function Fa(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ur(e) {
  return typeof e != "number" ? Fa(e) : {
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
function Gn(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = le(t), i = ln(t), a = an(i), l = he(t), u = s === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, g = r[a] / 2 - o[a] / 2;
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
      h[i] -= g * (n && u ? -1 : 1);
      break;
    case "end":
      h[i] += g * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const za = async (e, t, n) => {
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
  } = Gn(u, r, l), g = r, h = {}, v = 0;
  for (let p = 0; p < a.length; p++) {
    const {
      name: b,
      fn: x
    } = a[p], {
      x: w,
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
        ...S
      }
    }, R && v <= 50 && (v++, typeof R == "object" && (R.placement && (g = R.placement), R.rects && (u = R.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : R.rects), {
      x: d,
      y: f
    } = Gn(u, g, l)), p = -1);
  }
  return {
    x: d,
    y: f,
    placement: g,
    strategy: o,
    middlewareData: h
  };
};
async function Ue(e, t) {
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
  } = me(t, e), v = Ur(h), b = a[g ? f === "floating" ? "reference" : "floating" : f], x = mt(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null || n ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: u,
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
  }, R = mt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: w,
    offsetParent: E,
    strategy: l
  }) : w);
  return {
    top: (x.top - R.top + v.top) / S.y,
    bottom: (R.bottom - x.bottom + v.bottom) / S.y,
    left: (x.left - R.left + v.left) / S.x,
    right: (R.right - x.right + v.right) / S.x
  };
}
const $a = (e) => ({
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
    const f = Ur(d), g = {
      x: n,
      y: r
    }, h = ln(o), v = an(h), p = await i.getDimensions(u), b = h === "y", x = b ? "top" : "left", w = b ? "bottom" : "right", E = b ? "clientHeight" : "clientWidth", S = s.reference[v] + s.reference[h] - g[h] - s.floating[v], R = g[h] - s.reference[h], T = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let A = T ? T[E] : 0;
    (!A || !await (i.isElement == null ? void 0 : i.isElement(T))) && (A = a.floating[E] || s.floating[v]);
    const k = S / 2 - R / 2, M = A / 2 - p[v] / 2 - 1, $ = xe(f[x], M), U = xe(f[w], M), V = $, W = A - p[v] - U, I = A / 2 - p[v] / 2 + k, H = Gt(V, I, W), D = !l.arrow && ze(o) != null && I !== H && s.reference[v] / 2 - (I < V ? $ : U) - p[v] / 2 < 0, L = D ? I < V ? I - V : I - W : 0;
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
}), Wa = function(e) {
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
        flipAlignment: p = !0,
        ...b
      } = me(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const x = he(o), w = le(a), E = he(a) === a, S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), R = g || (E || !p ? [pt(a)] : ja(a)), T = v !== "none";
      !g && T && R.push(...Ia(a, p, v, S));
      const A = [a, ...R], k = await Ue(t, b), M = [];
      let $ = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (d && M.push(k[x]), f) {
        const I = _a(o, i, S);
        M.push(k[I[0]], k[I[1]]);
      }
      if ($ = [...$, {
        placement: o,
        overflows: M
      }], !M.every((I) => I <= 0)) {
        var U, V;
        const I = (((U = s.flip) == null ? void 0 : U.index) || 0) + 1, H = A[I];
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
                if (T) {
                  const Y = le(C.placement);
                  return Y === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Y === "y";
                }
                return !0;
              }).map((C) => [C.placement, C.overflows.filter((Y) => Y > 0).reduce((Y, y) => Y + y, 0)]).sort((C, Y) => C[1] - Y[1])[0]) == null ? void 0 : W[0];
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
function Un(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Yn(e) {
  return Pa.some((t) => e[t] >= 0);
}
const Ba = function(e) {
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
          const s = await Ue(t, {
            ...o,
            elementContext: "reference"
          }), i = Un(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Yn(i)
            }
          };
        }
        case "escaped": {
          const s = await Ue(t, {
            ...o,
            altBoundary: !0
          }), i = Un(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Yn(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Yr = /* @__PURE__ */ new Set(["left", "top"]);
async function Va(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = he(n), a = ze(n), l = le(n) === "y", u = Yr.has(i) ? -1 : 1, d = s && l ? -1 : 1, f = me(t, e);
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
const Ha = function(e) {
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
      } = t, l = await Va(t, e);
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
}, Ga = function(e) {
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
      } = me(e, t), u = {
        x: n,
        y: r
      }, d = await Ue(t, l), f = le(he(o)), g = sn(f);
      let h = u[g], v = u[f];
      if (s) {
        const b = g === "y" ? "top" : "left", x = g === "y" ? "bottom" : "right", w = h + d[b], E = h - d[x];
        h = Gt(w, h, E);
      }
      if (i) {
        const b = f === "y" ? "top" : "left", x = f === "y" ? "bottom" : "right", w = v + d[b], E = v - d[x];
        v = Gt(w, v, E);
      }
      const p = a.fn({
        ...t,
        [g]: h,
        [f]: v
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - r,
          enabled: {
            [g]: s,
            [f]: i
          }
        }
      };
    }
  };
}, Ua = function(e) {
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
      }, f = le(o), g = sn(f);
      let h = d[g], v = d[f];
      const p = me(a, t), b = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (l) {
        const E = g === "y" ? "height" : "width", S = s.reference[g] - s.floating[E] + b.mainAxis, R = s.reference[g] + s.reference[E] - b.mainAxis;
        h < S ? h = S : h > R && (h = R);
      }
      if (u) {
        var x, w;
        const E = g === "y" ? "width" : "height", S = Yr.has(he(o)), R = s.reference[f] - s.floating[E] + (S && ((x = i.offset) == null ? void 0 : x[f]) || 0) + (S ? 0 : b.crossAxis), T = s.reference[f] + s.reference[E] + (S ? 0 : ((w = i.offset) == null ? void 0 : w[f]) || 0) - (S ? b.crossAxis : 0);
        v < R ? v = R : v > T && (v = T);
      }
      return {
        [g]: h,
        [f]: v
      };
    }
  };
}, Ya = function(e) {
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
      } = me(e, t), d = await Ue(t, u), f = he(o), g = ze(o), h = le(o) === "y", {
        width: v,
        height: p
      } = s.floating;
      let b, x;
      f === "top" || f === "bottom" ? (b = f, x = g === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (x = f, b = g === "end" ? "top" : "bottom");
      const w = p - d.top - d.bottom, E = v - d.left - d.right, S = xe(p - d[b], w), R = xe(v - d[x], E), T = !t.middlewareData.shift;
      let A = S, k = R;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (k = E), (r = t.middlewareData.shift) != null && r.enabled.y && (A = w), T && !g) {
        const $ = ee(d.left, 0), U = ee(d.right, 0), V = ee(d.top, 0), W = ee(d.bottom, 0);
        h ? k = v - 2 * ($ !== 0 || U !== 0 ? $ + U : ee(d.left, d.right)) : A = p - 2 * (V !== 0 || W !== 0 ? V + W : ee(d.top, d.bottom));
      }
      await l({
        ...t,
        availableWidth: k,
        availableHeight: A
      });
      const M = await i.getDimensions(a.floating);
      return v !== M.width || p !== M.height ? {
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
function $e(e) {
  return Xr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function te(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function de(e) {
  var t;
  return (t = (Xr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Xr(e) {
  return yt() ? e instanceof Node || e instanceof te(e).Node : !1;
}
function re(e) {
  return yt() ? e instanceof Element || e instanceof te(e).Element : !1;
}
function ue(e) {
  return yt() ? e instanceof HTMLElement || e instanceof te(e).HTMLElement : !1;
}
function Xn(e) {
  return !yt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof te(e).ShadowRoot;
}
const Xa = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ke(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = oe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Xa.has(o);
}
const Ka = /* @__PURE__ */ new Set(["table", "td", "th"]);
function qa(e) {
  return Ka.has($e(e));
}
const Za = [":popover-open", ":modal"];
function wt(e) {
  return Za.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Ja = ["transform", "translate", "scale", "rotate", "perspective"], Qa = ["transform", "translate", "scale", "rotate", "perspective", "filter"], el = ["paint", "layout", "strict", "content"];
function cn(e) {
  const t = un(), n = re(e) ? oe(e) : e;
  return Ja.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Qa.some((r) => (n.willChange || "").includes(r)) || el.some((r) => (n.contain || "").includes(r));
}
function tl(e) {
  let t = ye(e);
  for (; ue(t) && !Me(t); ) {
    if (cn(t))
      return t;
    if (wt(t))
      return null;
    t = ye(t);
  }
  return null;
}
function un() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const nl = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Me(e) {
  return nl.has($e(e));
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
  if ($e(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Xn(e) && e.host || // Fallback.
    de(e)
  );
  return Xn(t) ? t.host : t;
}
function Kr(e) {
  const t = ye(e);
  return Me(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ue(t) && Ke(t) ? t : Kr(t);
}
function Ye(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Kr(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = te(o);
  if (s) {
    const a = Yt(i);
    return t.concat(i, i.visualViewport || [], Ke(o) ? o : [], a && n ? Ye(a) : []);
  }
  return t.concat(o, Ye(o, [], n));
}
function Yt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function qr(e) {
  const t = oe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ue(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = ft(n) !== s || ft(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function dn(e) {
  return re(e) ? e : e.contextElement;
}
function _e(e) {
  const t = dn(e);
  if (!ue(t))
    return ce(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = qr(t);
  let i = (s ? ft(n.width) : n.width) / r, a = (s ? ft(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const rl = /* @__PURE__ */ ce(0);
function Zr(e) {
  const t = te(e);
  return !un() || !t.visualViewport ? rl : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ol(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== te(e) ? !1 : t;
}
function Se(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = dn(e);
  let i = ce(1);
  t && (r ? re(r) && (i = _e(r)) : i = _e(e));
  const a = ol(s, n, r) ? Zr(s) : ce(0);
  let l = (o.left + a.x) / i.x, u = (o.top + a.y) / i.y, d = o.width / i.x, f = o.height / i.y;
  if (s) {
    const g = te(s), h = r && re(r) ? te(r) : r;
    let v = g, p = Yt(v);
    for (; p && r && h !== v; ) {
      const b = _e(p), x = p.getBoundingClientRect(), w = oe(p), E = x.left + (p.clientLeft + parseFloat(w.paddingLeft)) * b.x, S = x.top + (p.clientTop + parseFloat(w.paddingTop)) * b.y;
      l *= b.x, u *= b.y, d *= b.x, f *= b.y, l += E, u += S, v = te(p), p = Yt(v);
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
  return t ? t.left + n : Se(de(e)).left + n;
}
function Jr(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Et(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function sl(e) {
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
  if ((f || !f && !s) && (($e(r) !== "body" || Ke(i)) && (l = Ct(r)), ue(r))) {
    const h = Se(r);
    u = _e(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const g = i && !f && !s ? Jr(i, l) : ce(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + g.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + g.y
  };
}
function il(e) {
  return Array.from(e.getClientRects());
}
function al(e) {
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
const Kn = 25;
function ll(e, t) {
  const n = te(e), r = de(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const d = un();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = Et(r);
  if (u <= 0) {
    const d = r.ownerDocument, f = d.body, g = getComputedStyle(f), h = d.compatMode === "CSS1Compat" && parseFloat(g.marginLeft) + parseFloat(g.marginRight) || 0, v = Math.abs(r.clientWidth - f.clientWidth - h);
    v <= Kn && (s -= v);
  } else u <= Kn && (s += u);
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
const cl = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function ul(e, t) {
  const n = Se(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = ue(e) ? _e(e) : ce(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, u = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: u
  };
}
function qn(e, t, n) {
  let r;
  if (t === "viewport")
    r = ll(e, n);
  else if (t === "document")
    r = al(de(e));
  else if (re(t))
    r = ul(t, n);
  else {
    const o = Zr(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return mt(r);
}
function Qr(e, t) {
  const n = ye(e);
  return n === t || !re(n) || Me(n) ? !1 : oe(n).position === "fixed" || Qr(n, t);
}
function dl(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ye(e, [], !1).filter((a) => re(a) && $e(a) !== "body"), o = null;
  const s = oe(e).position === "fixed";
  let i = s ? ye(e) : e;
  for (; re(i) && !Me(i); ) {
    const a = oe(i), l = cn(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && cl.has(o.position) || Ke(i) && !l && Qr(e, i)) ? r = r.filter((d) => d !== i) : o = a, i = ye(i);
  }
  return t.set(e, r), r;
}
function fl(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? wt(t) ? [] : dl(t, this._c) : [].concat(n), r], a = i[0], l = i.reduce((u, d) => {
    const f = qn(t, d, o);
    return u.top = ee(f.top, u.top), u.right = xe(f.right, u.right), u.bottom = xe(f.bottom, u.bottom), u.left = ee(f.left, u.left), u;
  }, qn(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function pl(e) {
  const {
    width: t,
    height: n
  } = qr(e);
  return {
    width: t,
    height: n
  };
}
function ml(e, t, n) {
  const r = ue(t), o = de(t), s = n === "fixed", i = Se(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ce(0);
  function u() {
    l.x = Et(o);
  }
  if (r || !r && !s)
    if (($e(t) !== "body" || Ke(o)) && (a = Ct(t)), r) {
      const h = Se(t, !0, s, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && u();
  s && !r && o && u();
  const d = o && !r && !s ? Jr(o, a) : ce(0), f = i.left + a.scrollLeft - l.x - d.x, g = i.top + a.scrollTop - l.y - d.y;
  return {
    x: f,
    y: g,
    width: i.width,
    height: i.height
  };
}
function It(e) {
  return oe(e).position === "static";
}
function Zn(e, t) {
  if (!ue(e) || oe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return de(e) === n && (n = n.ownerDocument.body), n;
}
function eo(e, t) {
  const n = te(e);
  if (wt(e))
    return n;
  if (!ue(e)) {
    let o = ye(e);
    for (; o && !Me(o); ) {
      if (re(o) && !It(o))
        return o;
      o = ye(o);
    }
    return n;
  }
  let r = Zn(e, t);
  for (; r && qa(r) && It(r); )
    r = Zn(r, t);
  return r && Me(r) && It(r) && !cn(r) ? n : r || tl(e) || n;
}
const hl = async function(e) {
  const t = this.getOffsetParent || eo, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: ml(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function gl(e) {
  return oe(e).direction === "rtl";
}
const vl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: sl,
  getDocumentElement: de,
  getClippingRect: fl,
  getOffsetParent: eo,
  getElementRects: hl,
  getClientRects: il,
  getDimensions: pl,
  getScale: _e,
  isElement: re,
  isRTL: gl
};
function to(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function bl(e, t) {
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
    const v = at(f), p = at(o.clientWidth - (d + g)), b = at(o.clientHeight - (f + h)), x = at(d), E = {
      rootMargin: -v + "px " + -p + "px " + -b + "px " + -x + "px",
      threshold: ee(0, xe(1, l)) || 1
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
      A === 1 && !to(u, e.getBoundingClientRect()) && i(), S = !1;
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
function xl(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = dn(e), d = o || s ? [...u ? Ye(u) : [], ...Ye(t)] : [];
  d.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), s && x.addEventListener("resize", n);
  });
  const f = u && a ? bl(u, n) : null;
  let g = -1, h = null;
  i && (h = new ResizeObserver((x) => {
    let [w] = x;
    w && w.target === u && h && (h.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var E;
      (E = h) == null || E.observe(t);
    })), n();
  }), u && !l && h.observe(u), h.observe(t));
  let v, p = l ? Se(e) : null;
  l && b();
  function b() {
    const x = Se(e);
    p && !to(p, x) && n(), p = x, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var x;
    d.forEach((w) => {
      o && w.removeEventListener("scroll", n), s && w.removeEventListener("resize", n);
    }), f?.(), (x = h) == null || x.disconnect(), h = null, l && cancelAnimationFrame(v);
  };
}
const yl = Ha, wl = Ga, Cl = Wa, El = Ya, Sl = Ba, Jn = $a, Rl = Ua, kl = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: vl,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return za(e, t, {
    ...o,
    platform: s
  });
};
var Al = typeof document < "u", Pl = function() {
}, ut = Al ? jo : Pl;
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
function no(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Qn(e, t) {
  const n = no(e);
  return Math.round(t * n) / n;
}
function Ft(e) {
  const t = c.useRef(e);
  return ut(() => {
    t.current = e;
  }), t;
}
function Ol(e) {
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
  const [v, p] = c.useState(null), [b, x] = c.useState(null), w = c.useCallback((C) => {
    C !== T.current && (T.current = C, p(C));
  }, []), E = c.useCallback((C) => {
    C !== A.current && (A.current = C, x(C));
  }, []), S = s || v, R = i || b, T = c.useRef(null), A = c.useRef(null), k = c.useRef(d), M = l != null, $ = Ft(l), U = Ft(o), V = Ft(u), W = c.useCallback(() => {
    if (!T.current || !A.current)
      return;
    const C = {
      placement: t,
      strategy: n,
      middleware: g
    };
    U.current && (C.platform = U.current), kl(T.current, A.current, C).then((Y) => {
      const y = {
        ...Y,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: V.current !== !1
      };
      I.current && !ht(k.current, y) && (k.current = y, tr.flushSync(() => {
        f(y);
      }));
    });
  }, [g, t, n, U, V]);
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
    if (S && (T.current = S), R && (A.current = R), S && R) {
      if ($.current)
        return $.current(S, R, W);
      W();
    }
  }, [S, R, W, $, M]);
  const H = c.useMemo(() => ({
    reference: T,
    floating: A,
    setReference: w,
    setFloating: E
  }), [w, E]), D = c.useMemo(() => ({
    reference: S,
    floating: R
  }), [S, R]), L = c.useMemo(() => {
    const C = {
      position: n,
      left: 0,
      top: 0
    };
    if (!D.floating)
      return C;
    const Y = Qn(D.floating, d.x), y = Qn(D.floating, d.y);
    return a ? {
      ...C,
      transform: "translate(" + Y + "px, " + y + "px)",
      ...no(D.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: Y,
      top: y
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
const Tl = (e) => {
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
      return r && t(r) ? r.current != null ? Jn({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Jn({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Nl = (e, t) => ({
  ...yl(e),
  options: [e, t]
}), _l = (e, t) => ({
  ...wl(e),
  options: [e, t]
}), jl = (e, t) => ({
  ...Rl(e),
  options: [e, t]
}), Ml = (e, t) => ({
  ...Cl(e),
  options: [e, t]
}), Dl = (e, t) => ({
  ...El(e),
  options: [e, t]
}), Ll = (e, t) => ({
  ...Sl(e),
  options: [e, t]
}), Il = (e, t) => ({
  ...Tl(e),
  options: [e, t]
});
var Fl = "Arrow", ro = c.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ m.jsx(
    Z.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ m.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
ro.displayName = Fl;
var zl = ro;
function $l(e) {
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
var fn = "Popper", [oo, so] = vt(fn), [Wl, io] = oo(fn), ao = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = c.useState(null);
  return /* @__PURE__ */ m.jsx(Wl, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
ao.displayName = fn;
var lo = "PopperAnchor", co = c.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = io(lo, n), i = c.useRef(null), a = ne(t, i), l = c.useRef(null);
    return c.useEffect(() => {
      const u = l.current;
      l.current = r?.current || i.current, u !== l.current && s.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ m.jsx(Z.div, { ...o, ref: a });
  }
);
co.displayName = lo;
var pn = "PopperContent", [Bl, Vl] = oo(pn), uo = c.forwardRef(
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
      ...p
    } = e, b = io(pn, n), [x, w] = c.useState(null), E = ne(t, (z) => w(z)), [S, R] = c.useState(null), T = $l(S), A = T?.width ?? 0, k = T?.height ?? 0, M = r + (s !== "center" ? "-" + s : ""), $ = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, U = Array.isArray(u) ? u : [u], V = U.length > 0, W = {
      padding: $,
      boundary: U.filter(Gl),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: V
    }, { refs: I, floatingStyles: H, placement: D, isPositioned: L, middlewareData: C } = Ol({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: M,
      whileElementsMounted: (...z) => xl(...z, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        Nl({ mainAxis: o + k, alignmentAxis: i }),
        l && _l({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? jl() : void 0,
          ...W
        }),
        l && Ml({ ...W }),
        Dl({
          ...W,
          apply: ({ elements: z, rects: X, availableWidth: Q, availableHeight: ie }) => {
            const { width: we, height: ke } = X.reference, Je = z.floating.style;
            Je.setProperty("--radix-popper-available-width", `${Q}px`), Je.setProperty("--radix-popper-available-height", `${ie}px`), Je.setProperty("--radix-popper-anchor-width", `${we}px`), Je.setProperty("--radix-popper-anchor-height", `${ke}px`);
          }
        }),
        S && Il({ element: S, padding: a }),
        Ul({ arrowWidth: A, arrowHeight: k }),
        g && Ll({ strategy: "referenceHidden", ...W })
      ]
    }), [Y, y] = mo(D), N = je(v);
    pe(() => {
      L && N?.();
    }, [L, N]);
    const F = C.arrow?.x, j = C.arrow?.y, B = C.arrow?.centerOffset !== 0, [q, ge] = c.useState();
    return pe(() => {
      x && ge(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ m.jsx(
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
        children: /* @__PURE__ */ m.jsx(
          Bl,
          {
            scope: n,
            placedSide: Y,
            onArrowChange: R,
            arrowX: F,
            arrowY: j,
            shouldHideArrow: B,
            children: /* @__PURE__ */ m.jsx(
              Z.div,
              {
                "data-side": Y,
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
uo.displayName = pn;
var fo = "PopperArrow", Hl = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, po = c.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = Vl(fo, r), i = Hl[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ m.jsx(
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
        children: /* @__PURE__ */ m.jsx(
          zl,
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
po.displayName = fo;
function Gl(e) {
  return e !== null;
}
var Ul = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, i = o.arrow?.centerOffset !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, d] = mo(n), f = { start: "0%", center: "50%", end: "100%" }[d], g = (o.arrow?.x ?? 0) + a / 2, h = (o.arrow?.y ?? 0) + l / 2;
    let v = "", p = "";
    return u === "bottom" ? (v = i ? f : `${g}px`, p = `${-l}px`) : u === "top" ? (v = i ? f : `${g}px`, p = `${r.floating.height + l}px`) : u === "right" ? (v = `${-l}px`, p = i ? f : `${h}px`) : u === "left" && (v = `${r.floating.width + l}px`, p = i ? f : `${h}px`), { data: { x: v, y: p } };
  }
});
function mo(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Yl = ao, Xl = co, Kl = uo, ql = po, Zl = Object.freeze({
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
}), Jl = "VisuallyHidden", ho = c.forwardRef(
  (e, t) => /* @__PURE__ */ m.jsx(
    Z.span,
    {
      ...e,
      ref: t,
      style: { ...Zl, ...e.style }
    }
  )
);
ho.displayName = Jl;
var Ql = ho, [St, Yc] = vt("Tooltip", [
  so
]), Rt = so(), go = "TooltipProvider", ec = 700, Xt = "tooltip.open", [tc, mn] = St(go), vo = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = ec,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, i = c.useRef(!0), a = c.useRef(!1), l = c.useRef(0);
  return c.useEffect(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ m.jsx(
    tc,
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
vo.displayName = go;
var Xe = "Tooltip", [nc, qe] = St(Xe), bo = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    disableHoverableContent: i,
    delayDuration: a
  } = e, l = mn(Xe, e.__scopeTooltip), u = Rt(t), [d, f] = c.useState(null), g = Ge(), h = c.useRef(0), v = i ?? l.disableHoverableContent, p = a ?? l.delayDuration, b = c.useRef(!1), [x, w] = Qt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (A) => {
      A ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Xt))) : l.onClose(), s?.(A);
    },
    caller: Xe
  }), E = c.useMemo(() => x ? b.current ? "delayed-open" : "instant-open" : "closed", [x]), S = c.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, b.current = !1, w(!0);
  }, [w]), R = c.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, w(!1);
  }, [w]), T = c.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      b.current = !0, w(!0), h.current = 0;
    }, p);
  }, [p, w]);
  return c.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ m.jsx(Yl, { ...u, children: /* @__PURE__ */ m.jsx(
    nc,
    {
      scope: t,
      contentId: g,
      open: x,
      stateAttribute: E,
      trigger: d,
      onTriggerChange: f,
      onTriggerEnter: c.useCallback(() => {
        l.isOpenDelayedRef.current ? T() : S();
      }, [l.isOpenDelayedRef, T, S]),
      onTriggerLeave: c.useCallback(() => {
        v ? R() : (window.clearTimeout(h.current), h.current = 0);
      }, [R, v]),
      onOpen: S,
      onClose: R,
      disableHoverableContent: v,
      children: n
    }
  ) });
};
bo.displayName = Xe;
var Kt = "TooltipTrigger", xo = c.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = qe(Kt, n), s = mn(Kt, n), i = Rt(n), a = c.useRef(null), l = ne(t, a, o.onTriggerChange), u = c.useRef(!1), d = c.useRef(!1), f = c.useCallback(() => u.current = !1, []);
    return c.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ m.jsx(Xl, { asChild: !0, ...i, children: /* @__PURE__ */ m.jsx(
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
xo.displayName = Kt;
var hn = "TooltipPortal", [rc, oc] = St(hn, {
  forceMount: void 0
}), yo = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, s = qe(hn, t);
  return /* @__PURE__ */ m.jsx(rc, { scope: t, forceMount: n, children: /* @__PURE__ */ m.jsx(Re, { present: n || s.open, children: /* @__PURE__ */ m.jsx(tn, { asChild: !0, container: o, children: r }) }) });
};
yo.displayName = hn;
var De = "TooltipContent", wo = c.forwardRef(
  (e, t) => {
    const n = oc(De, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...s } = e, i = qe(De, e.__scopeTooltip);
    return /* @__PURE__ */ m.jsx(Re, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ m.jsx(Co, { side: o, ...s, ref: t }) : /* @__PURE__ */ m.jsx(sc, { side: o, ...s, ref: t }) });
  }
), sc = c.forwardRef((e, t) => {
  const n = qe(De, e.__scopeTooltip), r = mn(De, e.__scopeTooltip), o = c.useRef(null), s = ne(t, o), [i, a] = c.useState(null), { trigger: l, onClose: u } = n, d = o.current, { onPointerInTransitChange: f } = r, g = c.useCallback(() => {
    a(null), f(!1);
  }, [f]), h = c.useCallback(
    (v, p) => {
      const b = v.currentTarget, x = { x: v.clientX, y: v.clientY }, w = cc(x, b.getBoundingClientRect()), E = uc(x, w), S = dc(p.getBoundingClientRect()), R = pc([...E, ...S]);
      a(R), f(!0);
    },
    [f]
  );
  return c.useEffect(() => () => g(), [g]), c.useEffect(() => {
    if (l && d) {
      const v = (b) => h(b, d), p = (b) => h(b, l);
      return l.addEventListener("pointerleave", v), d.addEventListener("pointerleave", p), () => {
        l.removeEventListener("pointerleave", v), d.removeEventListener("pointerleave", p);
      };
    }
  }, [l, d, h, g]), c.useEffect(() => {
    if (i) {
      const v = (p) => {
        const b = p.target, x = { x: p.clientX, y: p.clientY }, w = l?.contains(b) || d?.contains(b), E = !fc(x, i);
        w ? g() : E && (g(), u());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [l, d, i, u, g]), /* @__PURE__ */ m.jsx(Co, { ...e, ref: s });
}), [ic, ac] = St(Xe, { isInside: !1 }), lc = /* @__PURE__ */ $o("TooltipContent"), Co = c.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      ...a
    } = e, l = qe(De, n), u = Rt(n), { onClose: d } = l;
    return c.useEffect(() => (document.addEventListener(Xt, d), () => document.removeEventListener(Xt, d)), [d]), c.useEffect(() => {
      if (l.trigger) {
        const f = (g) => {
          g.target?.contains(l.trigger) && d();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [l.trigger, d]), /* @__PURE__ */ m.jsx(
      en,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ m.jsxs(
          Kl,
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
              /* @__PURE__ */ m.jsx(lc, { children: r }),
              /* @__PURE__ */ m.jsx(ic, { scope: n, isInside: !0, children: /* @__PURE__ */ m.jsx(Ql, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
wo.displayName = De;
var Eo = "TooltipArrow", So = c.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Rt(n);
    return ac(
      Eo,
      n
    ).isInside ? null : /* @__PURE__ */ m.jsx(ql, { ...o, ...r, ref: t });
  }
);
So.displayName = Eo;
function cc(e, t) {
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
function uc(e, t, n = 5) {
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
function dc(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function fc(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s], l = t[i], u = a.x, d = a.y, f = l.x, g = l.y;
    d > r != g > r && n < (f - u) * (r - d) / (g - d) + u && (o = !o);
  }
  return o;
}
function pc(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), mc(t);
}
function mc(e) {
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
var hc = vo, gc = bo, vc = xo, bc = yo, xc = wo, yc = So;
function Ro({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ m.jsx(
    hc,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function wc({
  ...e
}) {
  return /* @__PURE__ */ m.jsx(Ro, { children: /* @__PURE__ */ m.jsx(gc, { "data-slot": "tooltip", ...e }) });
}
function Cc({
  ...e
}) {
  return /* @__PURE__ */ m.jsx(vc, { "data-slot": "tooltip-trigger", ...e });
}
function Ec({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ m.jsx(bc, { children: /* @__PURE__ */ m.jsxs(
    xc,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: G(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ m.jsx(yc, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const Sc = "sidebar_state", Rc = 3600 * 24 * 7, kc = "16rem", Ac = "3rem", Pc = "b", ko = c.createContext(null);
function gn() {
  const e = c.useContext(ko);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function Xc({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: n,
  className: r,
  style: o,
  children: s,
  ...i
}) {
  const a = is(), [l, u] = c.useState(!1), [d, f] = c.useState(e), g = t ?? d, h = c.useCallback(
    (x) => {
      const w = typeof x == "function" ? x(g) : x;
      n ? n(w) : f(w), document.cookie = `${Sc}=${w}; path=/; max-age=${Rc}`;
    },
    [n, g]
  ), v = c.useCallback(() => a ? u((x) => !x) : h((x) => !x), [a, h, u]);
  c.useEffect(() => {
    const x = (w) => {
      w.key === Pc && (w.metaKey || w.ctrlKey) && (w.preventDefault(), v());
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [v]);
  const p = g ? "expanded" : "collapsed", b = c.useMemo(
    () => ({
      state: p,
      open: g,
      setOpen: h,
      isMobile: a,
      openMobile: l,
      setOpenMobile: u,
      toggleSidebar: v
    }),
    [p, g, h, a, l, u, v]
  );
  return /* @__PURE__ */ m.jsx(ko.Provider, { value: b, children: /* @__PURE__ */ m.jsx(Ro, { delayDuration: 0, children: /* @__PURE__ */ m.jsx(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": kc,
        "--sidebar-width-icon": Ac,
        ...o
      },
      className: G(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        r
      ),
      ...i,
      children: s
    }
  ) }) });
}
function Oc({
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
  const { isMobile: u, state: d, openMobile: f, setOpenMobile: g } = gn();
  return n === "none" ? /* @__PURE__ */ m.jsx(
    "div",
    {
      "data-slot": "sidebar",
      className: G(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        r
      ),
      ...l,
      children: o
    }
  ) : u ? /* @__PURE__ */ m.jsx(wa, { open: f, onOpenChange: g, ...l, children: /* @__PURE__ */ m.jsxs(
    Sa,
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
        /* @__PURE__ */ m.jsxs(Ra, { className: "sr-only", children: [
          /* @__PURE__ */ m.jsx(ka, { children: "Sidebar" }),
          /* @__PURE__ */ m.jsx(Aa, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ m.jsx("div", { className: "flex h-full w-full flex-col", children: o })
      ]
    }
  ) }) : /* @__PURE__ */ m.jsxs(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": d,
      "data-collapsible": d === "collapsed" ? n : "",
      "data-variant": t,
      "data-side": e,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ m.jsx(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: G(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ m.jsx(
          "div",
          {
            "data-slot": "sidebar-container",
            className: G(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              r
            ),
            ...l,
            children: /* @__PURE__ */ m.jsx(
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
function Kc({
  className: e,
  onClick: t,
  ...n
}) {
  const { toggleSidebar: r } = gn();
  return /* @__PURE__ */ m.jsxs(
    Bs,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: G("size-7", e),
      onClick: (o) => {
        t?.(o), r();
      },
      ...n,
      children: [
        /* @__PURE__ */ m.jsx(rs, {}),
        /* @__PURE__ */ m.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function Tc({ className: e, ...t }) {
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: G("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function Nc({ className: e, ...t }) {
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: G("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function qc({ className: e, ...t }) {
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: G(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        e
      ),
      ...t
    }
  );
}
function Zc({ className: e, ...t }) {
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: G("relative flex w-full min-w-0 flex-col p-4", e),
      ...t
    }
  );
}
function _c({
  className: e,
  asChild: t = !1,
  ...n
}) {
  const r = t ? Zt : "div";
  return /* @__PURE__ */ m.jsx(
    r,
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: G(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        e
      ),
      ...n
    }
  );
}
function Jc({ className: e, ...t }) {
  return /* @__PURE__ */ m.jsx(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: G("group/menu-item relative", e),
      ...t
    }
  );
}
const jc = sr(
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
function Qc({
  asChild: e = !1,
  isActive: t = !1,
  variant: n = "default",
  size: r = "default",
  tooltip: o,
  className: s,
  ...i
}) {
  const a = e ? Zt : "button", { isMobile: l, state: u } = gn(), d = /* @__PURE__ */ m.jsx(
    a,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": r,
      "data-active": t,
      className: G(jc({ variant: n, size: r }), s),
      ...i
    }
  );
  return o ? (typeof o == "string" && (o = {
    children: o
  }), /* @__PURE__ */ m.jsxs(wc, { children: [
    /* @__PURE__ */ m.jsx(Cc, { asChild: !0, children: d }),
    /* @__PURE__ */ m.jsx(
      Ec,
      {
        side: "right",
        align: "center",
        hidden: u !== "collapsed" || l,
        ...o
      }
    )
  ] })) : d;
}
const Mc = ({
  userName: e = "",
  designation: t = "",
  userimg: n = "",
  isCollapse: r = !1,
  onLogout: o
}) => /* @__PURE__ */ m.jsx(m.Fragment, { children: /* @__PURE__ */ m.jsx(Nc, { children: r ? "" : /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-3 m-5 p-4 rounded-md bg-secondary/20", children: [
  /* @__PURE__ */ m.jsx(
    "img",
    {
      src: n,
      alt: "profile-image",
      className: "w-10 h-10 rounded-full object-cover"
    }
  ),
  /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsx("p", { className: "text-xl font-medium", children: e }),
    /* @__PURE__ */ m.jsx("p", { className: "text-xs text-gray-400 ", children: t })
  ] }),
  /* @__PURE__ */ m.jsx("div", { className: "ml-auto", children: /* @__PURE__ */ m.jsx(
    "button",
    {
      onClick: o,
      className: "p-2",
      children: /* @__PURE__ */ m.jsx(
        ts,
        {
          size: 18,
          className: " text-primary cursor-pointer"
        }
      )
    }
  ) })
] }) }) }), Ze = gt.createContext({
  width: "270px",
  collapsewidth: "80px",
  textColor: "#8D939D",
  isCollapse: !1,
  themeColor: "#5d87ff",
  themeSecondaryColor: "#49beff",
  direction: "ltr"
});
let Dc = () => {
  alert("Logout Successfully");
};
const eu = ({
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
  onLogout: h = Dc
}) => {
  const v = o ? n : t, p = a === "dark" ? "dark" : "";
  return a === "dark" && (r = "rgba(255,255,255, 0.9)"), /* @__PURE__ */ m.jsx(
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
      children: /* @__PURE__ */ m.jsx("div", { className: p, children: /* @__PURE__ */ m.jsxs(
        Oc,
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
            f && /* @__PURE__ */ m.jsx(
              Mc,
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
function Ao({
  component: e = "a",
  children: t,
  ...n
}) {
  return /* @__PURE__ */ m.jsx(e, { ...n, style: { textDecoration: "none" }, children: t });
}
const tu = ({
  children: e,
  img: t = "https://tailwindadmin-nextjs-main.vercel.app/_next/static/media/dark-logo.7f45c7e7.svg",
  href: n = "/",
  component: r
}) => {
  const o = gt.useContext(Ze);
  return /* @__PURE__ */ m.jsx(Tc, { children: /* @__PURE__ */ m.jsx(
    "div",
    {
      className: `min-h-[50px] overflow-hidden flex w-[253px] whitespace-nowrap  line-clamp-1 px-5 py-2  overflow-ellipsis ${o.direction === "rtl" ? " rtl:scale-x-[-1]" : ""}`,
      children: /* @__PURE__ */ m.jsx(
        Ao,
        {
          href: n,
          component: r,
          to: n,
          className: `w-[40px] flex ${o.isCollapse ? "overflow-hidden" : "overflow-visible"}`,
          children: t ? /* @__PURE__ */ m.jsx("img", { src: t, alt: "Logo", style: { maxWidth: "unset" } }) : /* @__PURE__ */ m.jsx("span", { className: "text-gray-800", children: e })
        }
      )
    }
  ) });
}, nu = ({ children: e, subHeading: t = "menu" }) => {
  const n = Mo(Ze);
  return /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsx(_c, { children: /* @__PURE__ */ m.jsx(
      "div",
      {
        className: "text-xs font-bold leading-5 py-1",
        style: { color: n.textColor },
        children: n.isCollapse ? "..." : t
      }
    ) }),
    /* @__PURE__ */ m.jsx("div", { className: "space-y-1", children: e })
  ] });
}, ru = ({
  children: e,
  icon: t,
  component: n,
  badge: r = !1,
  badgeColor: o = "bg-primary",
  badgeTextColor: s = "",
  badgeContent: i = "New",
  textFontSize: a = "text-sm",
  borderRadius: l = "rounded-md",
  disabled: u = !1,
  badgeType: d = "filled",
  link: f = "/",
  target: g = "",
  isSelected: h = !1
}) => {
  const v = gt.useContext(Ze), p = v?.isCollapse;
  return /* @__PURE__ */ m.jsx(Ao, { to: f, component: n, target: g, children: /* @__PURE__ */ m.jsxs(
    "div",
    {
      className: G(
        "flex items-center gap-3 w-full py-2.5 px-3 whitespace-nowrap mb-0.5 transition-colors duration-200 hover:bg-primary/20",
        l,
        u ? "cursor-not-allowed opacity-60" : "cursor-pointer",
        h ? "bg-primary text-white" : "text-muted-foreground bg-transparent"
      ),
      style: {
        backgroundColor: h ? v.themeColor : void 0,
        color: h ? "white" : v.textColor,
        justifyContent: v?.direction === "rtl" ? "flex-end" : "flex-start"
      },
      children: [
        /* @__PURE__ */ m.jsx(
          "div",
          {
            className: G(
              "flex items-center justify-center",
              !p && "min-w-[20px]"
            ),
            style: {
              color: h ? "#fff" : v.textColor
            },
            children: t ?? /* @__PURE__ */ m.jsx(ar, { size: 18 })
          }
        ),
        !p && /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between w-full", children: [
          /* @__PURE__ */ m.jsx("span", { className: G(a, "leading-tight truncate"), children: e }),
          r && /* @__PURE__ */ m.jsx(
            "span",
            {
              className: G(
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
var kt = "Collapsible", [Lc, ou] = vt(kt), [Ic, vn] = Lc(kt), Po = c.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: s,
      onOpenChange: i,
      ...a
    } = e, [l, u] = Qt({
      prop: r,
      defaultProp: o ?? !1,
      onChange: i,
      caller: kt
    });
    return /* @__PURE__ */ m.jsx(
      Ic,
      {
        scope: n,
        disabled: s,
        contentId: Ge(),
        open: l,
        onOpenToggle: c.useCallback(() => u((d) => !d), [u]),
        children: /* @__PURE__ */ m.jsx(
          Z.div,
          {
            "data-state": xn(l),
            "data-disabled": s ? "" : void 0,
            ...a,
            ref: t
          }
        )
      }
    );
  }
);
Po.displayName = kt;
var Oo = "CollapsibleTrigger", To = c.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = vn(Oo, n);
    return /* @__PURE__ */ m.jsx(
      Z.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": xn(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: J(e.onClick, o.onOpenToggle)
      }
    );
  }
);
To.displayName = Oo;
var bn = "CollapsibleContent", No = c.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = vn(bn, e.__scopeCollapsible);
    return /* @__PURE__ */ m.jsx(Re, { present: n || o.open, children: ({ present: s }) => /* @__PURE__ */ m.jsx(Fc, { ...r, ref: t, present: s }) });
  }
);
No.displayName = bn;
var Fc = c.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...s } = e, i = vn(bn, n), [a, l] = c.useState(r), u = c.useRef(null), d = ne(t, u), f = c.useRef(0), g = f.current, h = c.useRef(0), v = h.current, p = i.open || a, b = c.useRef(p), x = c.useRef(void 0);
  return c.useEffect(() => {
    const w = requestAnimationFrame(() => b.current = !1);
    return () => cancelAnimationFrame(w);
  }, []), pe(() => {
    const w = u.current;
    if (w) {
      x.current = x.current || {
        transitionDuration: w.style.transitionDuration,
        animationName: w.style.animationName
      }, w.style.transitionDuration = "0s", w.style.animationName = "none";
      const E = w.getBoundingClientRect();
      f.current = E.height, h.current = E.width, b.current || (w.style.transitionDuration = x.current.transitionDuration, w.style.animationName = x.current.animationName), l(r);
    }
  }, [i.open, r]), /* @__PURE__ */ m.jsx(
    Z.div,
    {
      "data-state": xn(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
      hidden: !p,
      ...s,
      ref: d,
      style: {
        "--radix-collapsible-content-height": g ? `${g}px` : void 0,
        "--radix-collapsible-content-width": v ? `${v}px` : void 0,
        ...e.style
      },
      children: p && o
    }
  );
});
function xn(e) {
  return e ? "open" : "closed";
}
var zc = Po;
function $c({
  ...e
}) {
  return /* @__PURE__ */ m.jsx(zc, { "data-slot": "collapsible", ...e });
}
function Wc({
  ...e
}) {
  return /* @__PURE__ */ m.jsx(
    To,
    {
      "data-slot": "collapsible-trigger",
      ...e
    }
  );
}
function Bc({
  ...e
}) {
  return /* @__PURE__ */ m.jsx(
    No,
    {
      "data-slot": "collapsible-content",
      ...e
    }
  );
}
function su({
  title: e,
  children: t,
  icon: n,
  textFontSize: r = "text-sm",
  disabled: o = !1,
  borderRadius: s = "rounded-md"
}) {
  const [i, a] = c.useState(!1), l = c.useContext(Ze);
  return /* @__PURE__ */ m.jsx("div", { className: "w-full", children: /* @__PURE__ */ m.jsxs(
    $c,
    {
      open: i,
      onOpenChange: a,
      className: "flex  flex-col",
      children: [
        /* @__PURE__ */ m.jsx(Wc, { asChild: !0, children: /* @__PURE__ */ m.jsxs(
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
              /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-3 ", children: [
                /* @__PURE__ */ m.jsx("span", { className: "text-inherit", children: n || /* @__PURE__ */ m.jsx(ar, { size: 20 }) }),
                !l?.isCollapse && /* @__PURE__ */ m.jsx("span", { className: He(r, "truncate leading-tight"), children: e })
              ] }),
              !l?.isCollapse && (i ? /* @__PURE__ */ m.jsx(qo, { size: 16 }) : /* @__PURE__ */ m.jsx(Jo, { size: 16 }))
            ]
          }
        ) }),
        /* @__PURE__ */ m.jsx(
          Bc,
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
  tu as Logo,
  nu as Menu,
  ru as MenuItem,
  eu as Sidebar,
  qc as SidebarContent,
  Zc as SidebarGroup,
  Qc as SidebarMenuButton,
  Jc as SidebarMenuItem,
  Xc as SidebarProvider,
  Kc as SidebarTrigger,
  su as Submenu,
  gn as useSidebar
};
