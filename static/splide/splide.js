function _defineProperties(n, t) {
  for (var e = 0; e < t.length; e++) {
    var i = t[e];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(n, i.key, i);
  }
}
function _createClass(n, t, e) {
  return (
    t && _defineProperties(n.prototype, t),
    e && _defineProperties(n, e),
    Object.defineProperty(n, "prototype", { writable: !1 }),
    n
  );
}
!(function (n, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((n = "undefined" != typeof globalThis ? globalThis : n || self).Splide =
        t());
})(this, function () {
  "use strict";
  var d = "(prefers-reduced-motion: reduce)",
    R = 4,
    W = 5,
    n = {
      CREATED: 1,
      MOUNTED: 2,
      IDLE: 3,
      MOVING: R,
      SCROLLING: W,
      DRAGGING: 6,
      DESTROYED: 7,
    };
  function x(n) {
    n.length = 0;
  }
  function _(n, t, e) {
    return Array.prototype.slice.call(n, t, e);
  }
  function D(n) {
    return n.bind.apply(n, [null].concat(_(arguments, 1)));
  }
  function G() {}
  var v = setTimeout;
  function p(n) {
    return requestAnimationFrame(n);
  }
  function t(n, t) {
    return typeof t === n;
  }
  function X(n) {
    return !r(n) && t("object", n);
  }
  var o = Array.isArray,
    w = D(t, "function"),
    M = D(t, "string"),
    z = D(t, "undefined");
  function r(n) {
    return null === n;
  }
  function g(n) {
    return n instanceof HTMLElement;
  }
  function m(n) {
    return o(n) ? n : [n];
  }
  function y(n, t) {
    m(n).forEach(t);
  }
  function b(n, t) {
    return -1 < n.indexOf(t);
  }
  function E(n, t) {
    return n.push.apply(n, m(t)), n;
  }
  function L(t, n, e) {
    t &&
      y(n, function (n) {
        n && t.classList[e ? "add" : "remove"](n);
      });
  }
  function C(n, t) {
    L(n, M(t) ? t.split(" ") : t, !0);
  }
  function P(n, t) {
    y(t, n.appendChild.bind(n));
  }
  function k(n, e) {
    y(n, function (n) {
      var t = (e || n).parentNode;
      t && t.insertBefore(n, e);
    });
  }
  function B(n, t) {
    return g(n) && (n.msMatchesSelector || n.matches).call(n, t);
  }
  function S(n, t) {
    n = n ? _(n.children) : [];
    return t
      ? n.filter(function (n) {
          return B(n, t);
        })
      : n;
  }
  function A(n, t) {
    return t ? S(n, t)[0] : n.firstElementChild;
  }
  var h = Object.keys;
  function N(n, t, e) {
    if (n)
      for (var i = h(n), i = e ? i.reverse() : i, o = 0; o < i.length; o++) {
        var r = i[o];
        if ("__proto__" !== r && !1 === t(n[r], r)) break;
      }
    return n;
  }
  function T(i) {
    return (
      _(arguments, 1).forEach(function (e) {
        N(e, function (n, t) {
          i[t] = e[t];
        });
      }),
      i
    );
  }
  function O(e) {
    return (
      _(arguments, 1).forEach(function (n) {
        N(n, function (n, t) {
          o(n)
            ? (e[t] = n.slice())
            : X(n)
            ? (e[t] = O({}, X(e[t]) ? e[t] : {}, n))
            : (e[t] = n);
        });
      }),
      e
    );
  }
  function I(t, n) {
    m(n || h(t)).forEach(function (n) {
      delete t[n];
    });
  }
  function F(n, e) {
    y(n, function (t) {
      y(e, function (n) {
        t && t.removeAttribute(n);
      });
    });
  }
  function j(e, t, i) {
    X(t)
      ? N(t, function (n, t) {
          j(e, t, n);
        })
      : y(e, function (n) {
          r(i) || "" === i ? F(n, t) : n.setAttribute(t, String(i));
        });
  }
  function H(n, t, e) {
    n = document.createElement(n);
    return t && (M(t) ? C : j)(n, t), e && P(e, n), n;
  }
  function Y(n, t, e) {
    if (z(e)) return getComputedStyle(n)[t];
    r(e) || (n.style[t] = "" + e);
  }
  function q(n, t) {
    Y(n, "display", t);
  }
  function U(n) {
    (n.setActive && n.setActive()) || n.focus({ preventScroll: !0 });
  }
  function K(n, t) {
    return n.getAttribute(t);
  }
  function J(n, t) {
    return n && n.classList.contains(t);
  }
  function Q(n) {
    return n.getBoundingClientRect();
  }
  function V(n) {
    y(n, function (n) {
      n && n.parentNode && n.parentNode.removeChild(n);
    });
  }
  function Z(n) {
    return A(new DOMParser().parseFromString(n, "text/html").body);
  }
  function $(n, t) {
    n.preventDefault(),
      t && (n.stopPropagation(), n.stopImmediatePropagation());
  }
  function nn(n, t) {
    return n && n.querySelector(t);
  }
  function tn(n, t) {
    return t ? _(n.querySelectorAll(t)) : [];
  }
  function en(n, t) {
    L(n, t, !1);
  }
  function on(n) {
    return n.timeStamp;
  }
  function rn(n) {
    return M(n) ? n : n ? n + "px" : "";
  }
  var un = "splide",
    i = "data-" + un;
  function sn(n, t) {
    if (!n) throw new Error("[" + un + "] " + (t || ""));
  }
  var cn = Math.min,
    an = Math.max,
    fn = Math.floor,
    ln = Math.ceil,
    dn = Math.abs;
  function pn(n, t, e) {
    return dn(n - t) < e;
  }
  function hn(n, t, e, i) {
    var o = cn(t, e),
      e = an(t, e);
    return i ? o < n && n < e : o <= n && n <= e;
  }
  function vn(n, t, e) {
    var i = cn(t, e),
      e = an(t, e);
    return cn(an(i, n), e);
  }
  function gn(n) {
    return (0 < n) - (n < 0);
  }
  function mn(t, n) {
    return (
      y(n, function (n) {
        t = t.replace("%s", "" + n);
      }),
      t
    );
  }
  function yn(n) {
    return n < 10 ? "0" + n : "" + n;
  }
  var bn = {};
  function wn() {
    var s = [];
    function e(n, e, i) {
      y(n, function (t) {
        t &&
          y(e, function (n) {
            n.split(" ").forEach(function (n) {
              n = n.split(".");
              i(t, n[0], n[1]);
            });
          });
      });
    }
    return {
      bind: function (n, t, r, u) {
        e(n, t, function (n, t, e) {
          var i = "addEventListener" in n,
            o = i
              ? n.removeEventListener.bind(n, t, r, u)
              : n.removeListener.bind(n, r);
          i ? n.addEventListener(t, r, u) : n.addListener(r),
            s.push([n, t, e, r, o]);
        });
      },
      unbind: function (n, t, o) {
        e(n, t, function (t, e, i) {
          s = s.filter(function (n) {
            return (
              !!(n[0] !== t || n[1] !== e || n[2] !== i || (o && n[3] !== o)) ||
              (n[4](), !1)
            );
          });
        });
      },
      dispatch: function (n, t, e) {
        var i;
        return (
          "function" == typeof CustomEvent
            ? (i = new CustomEvent(t, { bubbles: !0, detail: e }))
            : (i = document.createEvent("CustomEvent")).initCustomEvent(
                t,
                !0,
                !1,
                e
              ),
          n.dispatchEvent(i),
          i
        );
      },
      destroy: function () {
        s.forEach(function (n) {
          n[4]();
        }),
          x(s);
      },
    };
  }
  var En = "mounted",
    Sn = "move",
    xn = "moved",
    _n = "shifted",
    Cn = "click",
    Pn = "active",
    kn = "inactive",
    Ln = "visible",
    An = "hidden",
    Dn = "slide:keydown",
    Mn = "refresh",
    zn = "updated",
    Nn = "resize",
    Tn = "resized",
    On = "scroll",
    In = "scrolled",
    u = "destroy",
    Fn = "navigation:mounted",
    jn = "autoplay:play",
    Rn = "autoplay:pause",
    Wn = "lazyload:loaded";
  function Gn(n) {
    var e = n ? n.event.bus : document.createDocumentFragment(),
      i = wn();
    return (
      n && n.event.on(u, i.destroy),
      T(i, {
        bus: e,
        on: function (n, t) {
          i.bind(e, m(n).join(" "), function (n) {
            t.apply(t, o(n.detail) ? n.detail : []);
          });
        },
        off: D(i.unbind, e),
        emit: function (n) {
          i.dispatch(e, n, _(arguments, 1));
        },
      })
    );
  }
  function Xn(t, n, e, i) {
    var o,
      r,
      u = Date.now,
      s = 0,
      c = !0,
      a = 0;
    function f() {
      if (!c) {
        if (
          ((s = t ? cn((u() - o) / t, 1) : 1),
          e && e(s),
          1 <= s && (n(), (o = u()), i && ++a >= i))
        )
          return l();
        p(f);
      }
    }
    function l() {
      c = !0;
    }
    function d() {
      r && cancelAnimationFrame(r), (c = !(r = s = 0));
    }
    return {
      start: function (n) {
        n || d(), (o = u() - (n ? s * t : 0)), (c = !1), p(f);
      },
      rewind: function () {
        (o = u()), (s = 0), e && e(s);
      },
      pause: l,
      cancel: d,
      set: function (n) {
        t = n;
      },
      isPaused: function () {
        return c;
      },
    };
  }
  function s(n) {
    var t = n;
    return {
      set: function (n) {
        t = n;
      },
      is: function (n) {
        return b(m(n), t);
      },
    };
  }
  var e = "Arrow",
    Bn = e + "Left",
    Hn = e + "Right",
    c = e + "Up",
    a = e + "Down",
    Yn = "ttb",
    f = {
      width: ["height"],
      left: ["top", "right"],
      right: ["bottom", "left"],
      x: ["y"],
      X: ["Y"],
      Y: ["X"],
      ArrowLeft: [c, Hn],
      ArrowRight: [a, Bn],
    };
  var qn = "role",
    Un = "tabindex",
    e = "aria-",
    Kn = e + "controls",
    Jn = e + "current",
    Qn = e + "selected",
    Vn = e + "label",
    Zn = e + "labelledby",
    $n = e + "hidden",
    nt = e + "orientation",
    tt = e + "roledescription",
    l = e + "live",
    et = e + "busy",
    it = e + "atomic",
    ot = [qn, Un, "disabled", Kn, Jn, Vn, Zn, $n, nt, tt],
    rt = un,
    ut = un + "__track",
    st = un + "__list",
    ct = un + "__slide",
    at = ct + "--clone",
    ft = ct + "__container",
    lt = un + "__arrows",
    dt = un + "__arrow",
    pt = dt + "--prev",
    ht = dt + "--next",
    vt = un + "__pagination",
    gt = vt + "__page",
    mt = un + "__progress" + "__bar",
    yt = un + "__toggle",
    bt = un + "__sr",
    wt = "is-active",
    Et = "is-prev",
    St = "is-next",
    xt = "is-visible",
    _t = "is-loading",
    Ct = "is-focus-in",
    Pt = [wt, xt, Et, St, _t, Ct];
  var kt = "touchstart mousedown",
    Lt = "touchmove mousemove",
    At = "touchend touchcancel mouseup click";
  var Dt = "slide",
    Mt = "loop",
    zt = "fade";
  function Nt(o, e, t, r) {
    var i,
      n = Gn(o),
      u = n.on,
      s = n.emit,
      c = n.bind,
      a = o.Components,
      f = o.root,
      l = o.options,
      d = l.isNavigation,
      p = l.updateOnMove,
      h = l.i18n,
      v = l.pagination,
      g = l.slideFocus,
      m = a.Direction.resolve,
      y = K(r, "style"),
      b = K(r, Vn),
      w = -1 < t,
      E = A(r, "." + ft),
      S = tn(r, l.focusableNodes || "");
    function x() {
      var n = o.splides
        .map(function (n) {
          n = n.splide.Components.Slides.getAt(e);
          return n ? n.slide.id : "";
        })
        .join(" ");
      j(r, Vn, mn(h.slideX, (w ? t : e) + 1)),
        j(r, Kn, n),
        j(r, qn, g ? "button" : ""),
        g && F(r, tt);
    }
    function _() {
      i || C();
    }
    function C() {
      var n, t;
      i ||
        ((n = o.index),
        (t = P()) !== J(r, wt) &&
          (L(r, wt, t), j(r, Jn, (d && t) || ""), s(t ? Pn : kn, k)),
        (function () {
          var n = (function () {
              if (o.is(zt)) return P();
              var n = Q(a.Elements.track),
                t = Q(r),
                e = m("left", !0),
                i = m("right", !0);
              return fn(n[e]) <= ln(t[e]) && fn(t[i]) <= ln(n[i]);
            })(),
            t = !n && (!P() || w);
          o.state.is([R, W]) || j(r, $n, t || "");
          j(S, Un, t ? -1 : ""), g && j(r, Un, t ? -1 : 0);
          n !== J(r, xt) && (L(r, xt, n), s(n ? Ln : An, k));
          n ||
            document.activeElement !== r ||
            ((n = a.Slides.getAt(o.index)) && U(n.slide));
        })(),
        L(r, Et, e === n - 1),
        L(r, St, e === n + 1));
    }
    function P() {
      var n = o.index;
      return n === e || (l.cloneStatus && n === t);
    }
    var k = {
      index: e,
      slideIndex: t,
      slide: r,
      container: E,
      isClone: w,
      mount: function () {
        w ||
          ((r.id = f.id + "-slide" + yn(e + 1)),
          j(r, qn, v ? "tabpanel" : "group"),
          j(r, tt, h.slide),
          j(r, Vn, b || mn(h.slideLabel, [e + 1, o.length]))),
          c(r, "click", D(s, Cn, k)),
          c(r, "keydown", D(s, Dn, k)),
          u([xn, _n, In], C),
          u(Fn, x),
          p && u(Sn, _);
      },
      destroy: function () {
        (i = !0),
          n.destroy(),
          en(r, Pt),
          F(r, ot),
          j(r, "style", y),
          j(r, Vn, b || "");
      },
      update: C,
      style: function (n, t, e) {
        Y((e && E) || r, n, t);
      },
      isWithin: function (n, t) {
        return (
          (n = dn(n - e)),
          (n = !w && (l.rewind || o.is(Mt)) ? cn(n, o.length - n) : n) <= t
        );
      },
    };
    return k;
  }
  var Tt = i + "-interval";
  var Ot = { passive: !1, capture: !0 };
  var It = { Spacebar: " ", Right: Hn, Left: Bn, Up: c, Down: a };
  function Ft(n) {
    return (n = M(n) ? n : n.key), It[n] || n;
  }
  var jt = "keydown";
  var Rt = i + "-lazy",
    Wt = Rt + "-srcset",
    Gt = "[" + Rt + "], [" + Wt + "]";
  var Xt = [" ", "Enter"];
  var Bt = Object.freeze({
      __proto__: null,
      Media: function (i, n, o) {
        var r = i.state,
          t = o.breakpoints || {},
          u = o.reducedMotion || {},
          e = wn(),
          s = [];
        function c(n) {
          n && e.destroy();
        }
        function a(n, t) {
          t = matchMedia(t);
          e.bind(t, "change", f), s.push([n, t]);
        }
        function f() {
          var n = r.is(7),
            t = o.direction,
            e = s.reduce(function (n, t) {
              return O(n, t[1].matches ? t[0] : {});
            }, {});
          I(o),
            l(e),
            o.destroy
              ? i.destroy("completely" === o.destroy)
              : n
              ? (c(!0), i.mount())
              : t !== o.direction && i.refresh();
        }
        function l(n, t) {
          O(o, n),
            t && O(Object.getPrototypeOf(o), n),
            r.is(1) || i.emit(zn, o);
        }
        return {
          setup: function () {
            var e = "min" === o.mediaQuery;
            h(t)
              .sort(function (n, t) {
                return e ? +n - +t : +t - +n;
              })
              .forEach(function (n) {
                a(t[n], "(" + (e ? "min" : "max") + "-width:" + n + "px)");
              }),
              a(u, d),
              f();
          },
          destroy: c,
          reduce: function (n) {
            matchMedia(d).matches && (n ? O(o, u) : I(o, h(u)));
          },
          set: l,
        };
      },
      Direction: function (n, t, o) {
        return {
          resolve: function (n, t, e) {
            var i =
              "rtl" !== (e = e || o.direction) || t ? (e === Yn ? 0 : -1) : 1;
            return (
              (f[n] && f[n][i]) ||
              n.replace(/width|left|right/i, function (n, t) {
                n = f[n.toLowerCase()][i] || n;
                return 0 < t ? n.charAt(0).toUpperCase() + n.slice(1) : n;
              })
            );
          },
          orient: function (n) {
            return n * ("rtl" === o.direction ? 1 : -1);
          },
        };
      },
      Elements: function (n, t, e) {
        var i,
          o,
          r,
          u = Gn(n),
          s = u.on,
          c = u.bind,
          a = n.root,
          f = e.i18n,
          l = {},
          d = [],
          p = [],
          h = [];
        function v() {
          (i = y("." + ut)),
            (o = A(i, "." + st)),
            sn(i && o, "A track/list element is missing."),
            E(d, S(o, "." + ct + ":not(." + at + ")")),
            N(
              {
                arrows: lt,
                pagination: vt,
                prev: pt,
                next: ht,
                bar: mt,
                toggle: yt,
              },
              function (n, t) {
                l[t] = y("." + n);
              }
            ),
            T(l, { root: a, track: i, list: o, slides: d }),
            (function () {
              var n =
                  a.id ||
                  (function (n) {
                    return "" + n + yn((bn[n] = (bn[n] || 0) + 1));
                  })(un),
                t = e.role;
              (a.id = n),
                (i.id = i.id || n + "-track"),
                (o.id = o.id || n + "-list"),
                !K(a, qn) && "SECTION" !== a.tagName && t && j(a, qn, t);
              j(a, tt, f.carousel), j(o, qn, "presentation");
            })(),
            m();
        }
        function g(n) {
          var t = ot.concat("style");
          x(d), en(a, p), en(i, h), F([i, o], t), F(a, n ? t : ["style", tt]);
        }
        function m() {
          en(a, p),
            en(i, h),
            (p = b(rt)),
            (h = b(ut)),
            C(a, p),
            C(i, h),
            j(a, Vn, e.label),
            j(a, Zn, e.labelledby);
        }
        function y(n) {
          n = nn(a, n);
          return n &&
            (function (n, t) {
              if (w(n.closest)) return n.closest(t);
              for (var e = n; e && 1 === e.nodeType && !B(e, t); )
                e = e.parentElement;
              return e;
            })(n, "." + rt) === a
            ? n
            : void 0;
        }
        function b(n) {
          return [
            n + "--" + e.type,
            n + "--" + e.direction,
            e.drag && n + "--draggable",
            e.isNavigation && n + "--nav",
            n === rt && wt,
          ];
        }
        return T(l, {
          setup: v,
          mount: function () {
            s(Mn, g),
              s(Mn, v),
              s(zn, m),
              c(
                document,
                kt + " keydown",
                function (n) {
                  r = "keydown" === n.type;
                },
                { capture: !0 }
              ),
              c(a, "focusin", function () {
                L(a, Ct, !!r);
              });
          },
          destroy: g,
        });
      },
      Slides: function (i, o, r) {
        var n = Gn(i),
          t = n.on,
          u = n.emit,
          s = n.bind,
          c = (n = o.Elements).slides,
          a = n.list,
          f = [];
        function e() {
          c.forEach(function (n, t) {
            d(n, t, -1);
          });
        }
        function l() {
          h(function (n) {
            n.destroy();
          }),
            x(f);
        }
        function d(n, t, e) {
          n = Nt(i, t, e, n);
          n.mount(), f.push(n);
        }
        function p(n) {
          return n
            ? v(function (n) {
                return !n.isClone;
              })
            : f;
        }
        function h(n, t) {
          p(t).forEach(n);
        }
        function v(t) {
          return f.filter(
            w(t)
              ? t
              : function (n) {
                  return M(t) ? B(n.slide, t) : b(m(t), n.index);
                }
          );
        }
        return {
          mount: function () {
            e(),
              t(Mn, l),
              t(Mn, e),
              t([En, Mn], function () {
                f.sort(function (n, t) {
                  return n.index - t.index;
                });
              });
          },
          destroy: l,
          update: function () {
            h(function (n) {
              n.update();
            });
          },
          register: d,
          get: p,
          getIn: function (n) {
            var t = o.Controller,
              e = t.toIndex(n),
              i = t.hasFocus() ? 1 : r.perPage;
            return v(function (n) {
              return hn(n.index, e, e + i - 1);
            });
          },
          getAt: function (n) {
            return v(n)[0];
          },
          add: function (n, o) {
            y(n, function (n) {
              var t, e, i;
              g((n = M(n) ? Z(n) : n)) &&
                ((t = c[o]) ? k(n, t) : P(a, n),
                C(n, r.classes.slide),
                (n = n),
                (e = D(u, Nn)),
                (n = tn(n, "img")),
                (i = n.length)
                  ? n.forEach(function (n) {
                      s(n, "load error", function () {
                        --i || e();
                      });
                    })
                  : e());
            }),
              u(Mn);
          },
          remove: function (n) {
            V(
              v(n).map(function (n) {
                return n.slide;
              })
            ),
              u(Mn);
          },
          forEach: h,
          filter: v,
          style: function (t, e, i) {
            h(function (n) {
              n.style(t, e, i);
            });
          },
          getLength: function (n) {
            return (n ? c : f).length;
          },
          isEnough: function () {
            return f.length > r.perPage;
          },
        };
      },
      Layout: function (n, t, e) {
        var i,
          o,
          r = (c = Gn(n)).on,
          u = c.bind,
          s = c.emit,
          c = t.Slides,
          a = t.Direction.resolve,
          f = (t = t.Elements).root,
          l = t.track,
          d = t.list,
          p = c.getAt,
          h = c.style;
        function v() {
          (o = null),
            (i = e.direction === Yn),
            Y(f, "maxWidth", rn(e.width)),
            Y(l, a("paddingLeft"), m(!1)),
            Y(l, a("paddingRight"), m(!0)),
            g();
        }
        function g() {
          var n = Q(f);
          (o && o.width === n.width && o.height === n.height) ||
            (Y(
              l,
              "height",
              (function () {
                var n = "";
                i &&
                  (sn((n = y()), "height or heightRatio is missing."),
                  (n = "calc(" + n + " - " + m(!1) + " - " + m(!0) + ")"));
                return n;
              })()
            ),
            h(a("marginRight"), rn(e.gap)),
            h("width", e.autoWidth ? null : rn(e.fixedWidth) || (i ? "" : b())),
            h(
              "height",
              rn(e.fixedHeight) || (i ? (e.autoHeight ? null : b()) : y()),
              !0
            ),
            (o = n),
            s(Tn));
        }
        function m(n) {
          var t = e.padding,
            n = a(n ? "right" : "left");
          return (t && rn(t[n] || (X(t) ? 0 : t))) || "0px";
        }
        function y() {
          return rn(e.height || Q(d).width * e.heightRatio);
        }
        function b() {
          var n = rn(e.gap);
          return (
            "calc((100%" +
            (n && " + " + n) +
            ")/" +
            (e.perPage || 1) +
            (n && " - " + n) +
            ")"
          );
        }
        function w(n, t) {
          var e = p(n);
          if (e) {
            (n = Q(e.slide)[a("right")]), (e = Q(d)[a("left")]);
            return dn(n - e) + (t ? 0 : E());
          }
          return 0;
        }
        function E() {
          var n = p(0);
          return (n && parseFloat(Y(n.slide, a("marginRight")))) || 0;
        }
        return {
          mount: function () {
            var n, t, e;
            v(),
              u(
                window,
                "resize load",
                ((n = D(s, Nn)),
                function () {
                  e ||
                    (e = Xn(
                      t || 0,
                      function () {
                        n(), (e = null);
                      },
                      null,
                      1
                    )).start();
                })
              ),
              r([zn, Mn], v),
              r(Nn, g);
          },
          listSize: function () {
            return Q(d)[a("width")];
          },
          slideSize: function (n, t) {
            return (n = p(n || 0)) ? Q(n.slide)[a("width")] + (t ? 0 : E()) : 0;
          },
          sliderSize: function () {
            return w(n.length - 1, !0) - w(-1, !0);
          },
          totalSize: w,
          getPadding: function (n) {
            return parseFloat(Y(l, a("padding" + (n ? "Right" : "Left")))) || 0;
          },
        };
      },
      Clones: function (s, e, c) {
        var n,
          t = Gn(s),
          i = t.on,
          o = t.emit,
          a = e.Elements,
          f = e.Slides,
          r = e.Direction.resolve,
          l = [];
        function u() {
          (n = h()) &&
            ((function (o) {
              var r = f.get().slice(),
                u = r.length;
              if (u) {
                for (; r.length < o; ) E(r, r);
                E(r.slice(-o), r.slice(0, o)).forEach(function (n, t) {
                  var e = t < o,
                    i = (function (n, t) {
                      n = n.cloneNode(!0);
                      return (
                        C(n, c.classes.clone),
                        (n.id = s.root.id + "-clone" + yn(t + 1)),
                        n
                      );
                    })(n.slide, t);
                  e ? k(i, r[0].slide) : P(a.list, i),
                    E(l, i),
                    f.register(i, t - o + (e ? 0 : u), n.index);
                });
              }
            })(n),
            o(Nn));
        }
        function d() {
          V(l), x(l);
        }
        function p() {
          n < h() && o(Mn);
        }
        function h() {
          var n,
            t = c.clones;
          return (
            s.is(Mt)
              ? t ||
                (t =
                  ((n = c[r("fixedWidth")] && e.Layout.slideSize(0)) &&
                    ln(Q(a.track)[r("width")] / n)) ||
                  (c[r("autoWidth")] && s.length) ||
                  2 * c.perPage)
              : (t = 0),
            t
          );
        }
        return {
          mount: function () {
            u(), i(Mn, d), i(Mn, u), i([zn, Nn], p);
          },
          destroy: d,
        };
      },
      Move: function (i, s, o) {
        var u,
          n = Gn(i),
          t = n.on,
          c = n.emit,
          a = i.state.set,
          r = (n = s.Layout).slideSize,
          e = n.getPadding,
          f = n.totalSize,
          l = n.listSize,
          d = n.sliderSize,
          p = (n = s.Direction).resolve,
          h = n.orient,
          v = (n = s.Elements).list,
          g = n.track;
        function m() {
          s.Controller.isBusy() ||
            (s.Scroll.cancel(), y(i.index), s.Slides.update());
        }
        function y(n) {
          b(x(n, !0));
        }
        function b(n, t) {
          i.is(zt) ||
            ((t = t
              ? n
              : (function (n) {
                  {
                    var t, e;
                    i.is(Mt) &&
                      ((t = S(n)),
                      (e = t > s.Controller.getEnd()),
                      (t < 0 || e) && (n = w(n, e)));
                  }
                  return n;
                })(n)),
            Y(v, "transform", "translate" + p("X") + "(" + t + "px)"),
            n !== t && c(_n));
        }
        function w(n, t) {
          var e = n - C(t),
            i = d();
          return (n -= h(i * (ln(dn(e) / i) || 1)) * (t ? 1 : -1));
        }
        function E() {
          b(_()), u.cancel();
        }
        function S(n) {
          for (
            var t = s.Slides.get(), e = 0, i = 1 / 0, o = 0;
            o < t.length;
            o++
          ) {
            var r = t[o].index,
              u = dn(x(r, !0) - n);
            if (!(u <= i)) break;
            (i = u), (e = r);
          }
          return e;
        }
        function x(n, t) {
          var e = h(
            f(n - 1) -
              ((e = n),
              "center" === (n = o.focus)
                ? (l() - r(e, !0)) / 2
                : +n * r(e) || 0)
          );
          return t
            ? (function (n) {
                o.trimSpace && i.is(Dt) && (n = vn(n, 0, h(d() - l())));
                return n;
              })(e)
            : e;
        }
        function _() {
          var n = p("left");
          return Q(v)[n] - Q(g)[n] + h(e(!1));
        }
        function C(n) {
          return x(n ? s.Controller.getEnd() : 0, !!o.trimSpace);
        }
        return {
          mount: function () {
            (u = s.Transition), t([En, Tn, zn, Mn], m);
          },
          move: function (n, t, e, i) {
            var o, r;
            n !== t &&
              ((o = e < n),
              (r = h(w(_(), o))),
              o ? 0 <= r : r <= v[p("scrollWidth")] - Q(g)[p("width")]) &&
              (E(), b(w(_(), e < n), !0)),
              a(R),
              c(Sn, t, e, n),
              u.start(t, function () {
                a(3), c(xn, t, e, n), i && i();
              });
          },
          jump: y,
          translate: b,
          shift: w,
          cancel: E,
          toIndex: S,
          toPosition: x,
          getPosition: _,
          getLimit: C,
          exceededLimit: function (n, t) {
            t = z(t) ? _() : t;
            var e = !0 !== n && h(t) < h(C(!1)),
              t = !1 !== n && h(t) > h(C(!0));
            return e || t;
          },
          reposition: m,
        };
      },
      Controller: function (r, o, u) {
        var s,
          c,
          a,
          n = Gn(r).on,
          f = o.Move,
          l = f.getPosition,
          i = f.getLimit,
          d = f.toPosition,
          t = o.Slides,
          p = t.isEnough,
          e = t.getLength,
          h = r.is(Mt),
          v = r.is(Dt),
          g = D(E, !1),
          m = D(E, !0),
          y = u.start || 0,
          b = y;
        function w() {
          (s = e(!0)), (c = u.perMove), (a = u.perPage);
          var n = vn(y, 0, s - 1);
          n !== y && ((y = n), f.reposition());
        }
        function E(n, t) {
          var e = c || (L() ? 1 : a),
            e = S(y + e * (n ? -1 : 1), y, !(c || L()));
          return -1 === e && v && !pn(l(), i(!n), 1)
            ? n
              ? 0
              : _()
            : t
            ? e
            : x(e);
        }
        function S(n, t, e) {
          var i, o;
          return (
            p()
              ? ((i = _()),
                (o = (function (n) {
                  if (v && "move" === u.trimSpace && n !== y)
                    for (
                      var t = l();
                      t === d(n, !0) && hn(n, 0, r.length - 1, !u.rewind);

                    )
                      n < y ? --n : ++n;
                  return n;
                })(n)) !== n && ((t = n), (n = o), (e = !1)),
                n < 0 || i < n
                  ? (n =
                      c || (!hn(0, n, t, !0) && !hn(i, t, n, !0))
                        ? h
                          ? e
                            ? n < 0
                              ? -(s % a || a)
                              : s
                            : n
                          : u.rewind
                          ? n < 0
                            ? i
                            : 0
                          : -1
                        : C(P(n)))
                  : e && n !== t && (n = C(P(t) + (n < t ? -1 : 1))))
              : (n = -1),
            n
          );
        }
        function x(n) {
          return h ? (n + s) % s || 0 : n;
        }
        function _() {
          return an(s - (L() || (h && c) ? 1 : a), 0);
        }
        function C(n) {
          return vn(L() ? n : a * n, 0, _());
        }
        function P(n) {
          return L() ? n : fn((n >= _() ? s - 1 : n) / a);
        }
        function k(n) {
          n !== y && ((b = y), (y = n));
        }
        function L() {
          return !z(u.focus) || u.isNavigation;
        }
        function A() {
          return r.state.is([R, W]) && !!u.waitForTransition;
        }
        return {
          mount: function () {
            w(), n([zn, Mn], w);
          },
          go: function (n, t, e) {
            var i;
            A() ||
              (-1 <
                (n = x(
                  (i = (function (n) {
                    var t = y;
                    {
                      var e, i;
                      M(n)
                        ? ((i = n.match(/([+\-<>])(\d+)?/) || []),
                          (e = i[1]),
                          (i = i[2]),
                          "+" === e || "-" === e
                            ? (t = S(y + +("" + e + (+i || 1)), y))
                            : ">" === e
                            ? (t = i ? C(+i) : g(!0))
                            : "<" === e && (t = m(!0)))
                        : (t = h ? n : vn(n, 0, _()));
                    }
                    return t;
                  })(n))
                )) &&
                (t || n !== y) &&
                (k(n), f.move(i, n, b, e)));
          },
          scroll: function (n, t, e, i) {
            o.Scroll.scroll(n, t, e, function () {
              k(x(f.toIndex(l()))), i && i();
            });
          },
          getNext: g,
          getPrev: m,
          getAdjacent: E,
          getEnd: _,
          setIndex: k,
          getIndex: function (n) {
            return n ? b : y;
          },
          toIndex: C,
          toPage: P,
          toDest: function (n) {
            return (n = f.toIndex(n)), v ? vn(n, 0, _()) : n;
          },
          hasFocus: L,
          isBusy: A,
        };
      },
      Arrows: function (o, n, t) {
        var e,
          i,
          r = Gn(o),
          u = r.on,
          s = r.bind,
          c = r.emit,
          a = t.classes,
          f = t.i18n,
          l = n.Elements,
          d = n.Controller,
          p = l.arrows,
          h = l.track,
          v = p,
          g = l.prev,
          m = l.next,
          y = {};
        function b() {
          !(function () {
            var n = t.arrows;
            !n ||
              (g && m) ||
              ((v = p || H("div", a.arrows)),
              (g = x(!0)),
              (m = x(!1)),
              (e = !0),
              P(v, [g, m]),
              p || k(v, h));
            g &&
              m &&
              (T(y, { prev: g, next: m }),
              q(v, n ? "" : "none"),
              C(v, (i = lt + "--" + t.direction)),
              n &&
                (u([xn, Mn, In], _),
                s(m, "click", D(S, ">")),
                s(g, "click", D(S, "<")),
                _(),
                j([g, m], Kn, h.id),
                c("arrows:mounted", g, m)));
          })(),
            u(zn, w);
        }
        function w() {
          E(), b();
        }
        function E() {
          r.destroy(),
            en(v, i),
            e ? (V(p ? [g, m] : v), (g = m = null)) : F([g, m], ot);
        }
        function S(n) {
          d.go(n, !0);
        }
        function x(n) {
          return Z(
            '<button class="' +
              a.arrow +
              " " +
              (n ? a.prev : a.next) +
              '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="' +
              (t.arrowPath ||
                "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") +
              '" />'
          );
        }
        function _() {
          var n = o.index,
            t = d.getPrev(),
            e = d.getNext(),
            i = -1 < t && n < t ? f.last : f.prev,
            n = -1 < e && e < n ? f.first : f.next;
          (g.disabled = t < 0),
            (m.disabled = e < 0),
            j(g, Vn, i),
            j(m, Vn, n),
            c("arrows:updated", g, m, t, e);
        }
        return { arrows: y, mount: b, destroy: E };
      },
      Autoplay: function (n, t, e) {
        var i,
          o,
          r = Gn(n),
          u = r.on,
          s = r.bind,
          c = r.emit,
          a = Xn(e.interval, n.go.bind(n, ">"), function (n) {
            var t = l.bar;
            t && Y(t, "width", 100 * n + "%"), c("autoplay:playing", n);
          }),
          f = a.isPaused,
          l = t.Elements,
          d = (n = t.Elements).root,
          p = n.toggle,
          h = e.autoplay,
          v = "pause" === h;
        function g() {
          f() &&
            t.Slides.isEnough() &&
            (a.start(!e.resetProgress), (o = i = v = !1), b(), c(jn));
        }
        function m(n) {
          (v = !!(n = void 0 === n ? !0 : n)), b(), f() || (a.pause(), c(Rn));
        }
        function y() {
          v || (i || o ? m(!1) : g());
        }
        function b() {
          p && (L(p, wt, !v), j(p, Vn, e.i18n[v ? "play" : "pause"]));
        }
        function w(n) {
          n = t.Slides.getAt(n);
          a.set((n && +K(n.slide, Tt)) || e.interval);
        }
        return {
          mount: function () {
            h &&
              ((function () {
                e.pauseOnHover &&
                  s(d, "mouseenter mouseleave", function (n) {
                    (i = "mouseenter" === n.type), y();
                  });
                e.pauseOnFocus &&
                  s(d, "focusin focusout", function (n) {
                    (o = "focusin" === n.type), y();
                  });
                p &&
                  s(p, "click", function () {
                    v ? g() : m(!0);
                  });
                u([Sn, On, Mn], a.rewind), u(Sn, w);
              })(),
              p && j(p, Kn, l.track.id),
              v || g(),
              b());
          },
          destroy: a.cancel,
          play: g,
          pause: m,
          isPaused: f,
        };
      },
      Cover: function (n, t, e) {
        var i = Gn(n).on;
        function o(e) {
          t.Slides.forEach(function (n) {
            var t = A(n.container || n.slide, "img");
            t && t.src && r(e, t, n);
          });
        }
        function r(n, t, e) {
          e.style(
            "background",
            n ? 'center/cover no-repeat url("' + t.src + '")' : "",
            !0
          ),
            q(t, n ? "none" : "");
        }
        return {
          mount: function () {
            e.cover && (i(Wn, D(r, !0)), i([En, zn, Mn], D(o, !0)));
          },
          destroy: D(o, !1),
        };
      },
      Scroll: function (r, s, u) {
        var c,
          a,
          n = Gn(r),
          t = n.on,
          f = n.emit,
          l = r.state.set,
          d = s.Move,
          p = d.getPosition,
          h = d.getLimit,
          v = d.exceededLimit,
          g = d.translate,
          m = 1;
        function y(n, t, e, i, o) {
          var r = p();
          E(),
            e &&
              ((e = s.Layout.sliderSize()),
              (u = gn(n) * e * fn(dn(n) / e) || 0),
              (n = d.toPosition(s.Controller.toDest(n % e)) + u));
          var u = pn(r, n, 1);
          (m = 1),
            (t = u ? 0 : t || an(dn(n - r) / 1.5, 800)),
            (a = i),
            (c = Xn(t, b, D(w, r, n, o), 1)),
            l(W),
            f(On),
            c.start();
        }
        function b() {
          l(3), a && a(), f(In);
        }
        function w(n, t, e, i) {
          var o = p(),
            n =
              (n +
                (t - n) *
                  ((n = i),
                  (i = u.easingFunc) ? i(n) : 1 - Math.pow(1 - n, 4)) -
                o) *
              m;
          g(o + n),
            r.is(Dt) &&
              !e &&
              v() &&
              ((m *= 0.6), dn(n) < 10 && y(h(v(!0)), 600, !1, a, !0));
        }
        function E() {
          c && c.cancel();
        }
        function e() {
          c && !c.isPaused() && (E(), b());
        }
        return {
          mount: function () {
            t(Sn, E), t([zn, Mn], e);
          },
          destroy: E,
          scroll: y,
          cancel: e,
        };
      },
      Drag: function (r, i, u) {
        var s,
          t,
          o,
          c,
          a,
          f,
          l,
          d,
          n = Gn(r),
          e = n.on,
          p = n.emit,
          h = n.bind,
          v = n.unbind,
          g = r.state,
          m = i.Move,
          y = i.Scroll,
          b = i.Controller,
          w = i.Elements.track,
          E = i.Media.reduce,
          S = (n = i.Direction).resolve,
          x = n.orient,
          _ = m.getPosition,
          C = m.exceededLimit,
          P = !1;
        function k() {
          var n = u.drag;
          j(!n), (c = "free" === n);
        }
        function L(n) {
          var t, e, i;
          (f = !1),
            l ||
              ((t = F(n)),
              (e = n.target),
              (i = u.noDrag),
              B(e, "." + gt + ", ." + dt) ||
                (i && B(e, i)) ||
                (!t && n.button) ||
                (b.isBusy()
                  ? $(n, !0)
                  : ((d = t ? w : window),
                    (a = g.is([R, W])),
                    (o = null),
                    h(d, Lt, A, Ot),
                    h(d, At, D, Ot),
                    m.cancel(),
                    y.cancel(),
                    z(n))));
        }
        function A(n) {
          var t, e, i, o;
          g.is(6) || (g.set(6), p("drag")),
            n.cancelable &&
              (a
                ? (m.translate(s + N(n) / (P && r.is(Dt) ? 5 : 1)),
                  (e = 200 < T(n)),
                  (i = P !== (P = C())),
                  (e || i) && z(n),
                  (f = !0),
                  p("dragging"),
                  $(n))
                : dn(N((o = n))) > dn(N(o, !0)) &&
                  ((t = n),
                  (e = u.dragMinThreshold),
                  (i = X(e)),
                  (o = (i && e.mouse) || 0),
                  (e = (i ? e.touch : +e) || 10),
                  (a = dn(N(t)) > (F(t) ? e : o)),
                  $(n)));
        }
        function D(n) {
          g.is(6) && (g.set(3), p("dragged")),
            a &&
              ((function (n) {
                var t = (function (n) {
                    if (r.is(Mt) || !P) {
                      var t = T(n);
                      if (t && t < 200) return N(n) / t;
                    }
                    return 0;
                  })(n),
                  e = (function (n) {
                    return (
                      _() +
                      gn(n) *
                        cn(
                          dn(n) * (u.flickPower || 600),
                          c
                            ? 1 / 0
                            : i.Layout.listSize() * (u.flickMaxPages || 1)
                        )
                    );
                  })(t),
                  n = u.rewind && u.rewindByDrag;
                E(!1),
                  c
                    ? b.scroll(e, 0, u.snap)
                    : r.is(zt)
                    ? b.go(x(gn(t)) < 0 ? (n ? "<" : "-") : n ? ">" : "+")
                    : r.is(Dt) && P && n
                    ? b.go(C(!0) ? ">" : "<")
                    : b.go(b.toDest(e), !0);
                E(!0);
              })(n),
              $(n)),
            v(d, Lt, A),
            v(d, At, D),
            (a = !1);
        }
        function M(n) {
          !l && f && $(n, !0);
        }
        function z(n) {
          (o = t), (t = n), (s = _());
        }
        function N(n, t) {
          return I(n, t) - I(O(n), t);
        }
        function T(n) {
          return on(n) - on(O(n));
        }
        function O(n) {
          return (t === n && o) || t;
        }
        function I(n, t) {
          return (F(n) ? n.changedTouches[0] : n)["page" + S(t ? "Y" : "X")];
        }
        function F(n) {
          return "undefined" != typeof TouchEvent && n instanceof TouchEvent;
        }
        function j(n) {
          l = n;
        }
        return {
          mount: function () {
            h(w, Lt, G, Ot),
              h(w, At, G, Ot),
              h(w, kt, L, Ot),
              h(w, "click", M, { capture: !0 }),
              h(w, "dragstart", $),
              e([En, zn], k);
          },
          disable: j,
          isDragging: function () {
            return a;
          },
        };
      },
      Keyboard: function (t, n, e) {
        var i,
          o,
          r = Gn(t),
          u = r.on,
          s = r.bind,
          c = r.unbind,
          a = t.root,
          f = n.Direction.resolve;
        function l() {
          var n = e.keyboard;
          n && ((i = "global" === n ? window : a), s(i, jt, h));
        }
        function d() {
          c(i, jt);
        }
        function p() {
          var n = o;
          (o = !0),
            v(function () {
              o = n;
            });
        }
        function h(n) {
          o || ((n = Ft(n)) === f(Bn) ? t.go("<") : n === f(Hn) && t.go(">"));
        }
        return {
          mount: function () {
            l(), u(zn, d), u(zn, l), u(Sn, p);
          },
          destroy: d,
          disable: function (n) {
            o = n;
          },
        };
      },
      LazyLoad: function (e, n, o) {
        var t = Gn(e),
          i = t.on,
          r = t.off,
          u = t.bind,
          s = t.emit,
          c = "sequential" === o.lazyLoad,
          a = [En, Mn, xn, In],
          f = [];
        function l() {
          x(f),
            n.Slides.forEach(function (i) {
              tn(i.slide, Gt).forEach(function (n) {
                var t = K(n, Rt),
                  e = K(n, Wt);
                (t === n.src && e === n.srcset) ||
                  ((t = o.classes.spinner),
                  (e = A((e = n.parentElement), "." + t) || H("span", t, e)),
                  f.push([n, i, e]),
                  n.src || q(n, "none"));
              });
            }),
            c && v();
        }
        function d() {
          (f = f.filter(function (n) {
            var t = o.perPage * ((o.preloadPages || 1) + 1) - 1;
            return !n[1].isWithin(e.index, t) || p(n);
          })).length || r(a);
        }
        function p(n) {
          var t = n[0];
          C(n[1].slide, _t),
            u(t, "load error", D(h, n)),
            j(t, "src", K(t, Rt)),
            j(t, "srcset", K(t, Wt)),
            F(t, Rt),
            F(t, Wt);
        }
        function h(n, t) {
          var e = n[0],
            i = n[1];
          en(i.slide, _t),
            "error" !== t.type && (V(n[2]), q(e, ""), s(Wn, e, i), s(Nn)),
            c && v();
        }
        function v() {
          f.length && p(f.shift());
        }
        return {
          mount: function () {
            o.lazyLoad && (l(), i(Mn, l), c || i(a, d));
          },
          destroy: D(x, f),
        };
      },
      Pagination: function (f, n, l) {
        var d,
          p,
          t = Gn(f),
          e = t.on,
          i = t.emit,
          h = t.bind,
          v = n.Slides,
          g = n.Elements,
          o = n.Controller,
          m = o.hasFocus,
          r = o.getIndex,
          u = o.go,
          s = n.Direction.resolve,
          y = [];
        function c() {
          d &&
            (V(g.pagination ? _(d.children) : d), en(d, p), x(y), (d = null)),
            t.destroy();
        }
        function b(n) {
          u(">" + n, !0);
        }
        function w(n, t) {
          var e = y.length,
            i = Ft(t),
            o = E(),
            r = -1;
          i === s(Hn, !1, o)
            ? (r = ++n % e)
            : i === s(Bn, !1, o)
            ? (r = (--n + e) % e)
            : "Home" === i
            ? (r = 0)
            : "End" === i && (r = e - 1);
          e = y[r];
          e && (U(e.button), u(">" + r), $(t, !0));
        }
        function E() {
          return l.paginationDirection || l.direction;
        }
        function a(n) {
          return y[o.toPage(n)];
        }
        function S() {
          var n,
            t = a(r(!0)),
            e = a(r());
          t && (en((n = t.button), wt), F(n, Qn), j(n, Un, -1)),
            e && (C((n = e.button), wt), j(n, Qn, !0), j(n, Un, "")),
            i("pagination:updated", { list: d, items: y }, t, e);
        }
        return {
          items: y,
          mount: function n() {
            c(),
              e([zn, Mn], n),
              l.pagination &&
                v.isEnough() &&
                (e([Sn, On, In], S),
                (function () {
                  var n = f.length,
                    t = l.classes,
                    e = l.i18n,
                    i = l.perPage,
                    o = m() ? n : ln(n / i);
                  C(
                    (d =
                      g.pagination ||
                      H("ul", t.pagination, g.track.parentElement)),
                    (p = vt + "--" + E())
                  ),
                    j(d, qn, "tablist"),
                    j(d, Vn, e.select),
                    j(d, nt, E() === Yn ? "vertical" : "");
                  for (var r = 0; r < o; r++) {
                    var u = H("li", null, d),
                      s = H("button", { class: t.page, type: "button" }, u),
                      c = v.getIn(r).map(function (n) {
                        return n.slide.id;
                      }),
                      a = !m() && 1 < i ? e.pageX : e.slideX;
                    h(s, "click", D(b, r)),
                      l.paginationKeyboard && h(s, "keydown", D(w, r)),
                      j(u, qn, "presentation"),
                      j(s, qn, "tab"),
                      j(s, Kn, c.join(" ")),
                      j(s, Vn, mn(a, r + 1)),
                      j(s, Un, -1),
                      y.push({ li: u, button: s, page: r });
                  }
                })(),
                S(),
                i("pagination:mounted", { list: d, items: y }, a(f.index)));
          },
          destroy: c,
          getAt: a,
          update: S,
        };
      },
      Sync: function (e, n, t) {
        var i = t.isNavigation,
          o = t.slideFocus,
          r = [];
        function u() {
          var n, t;
          e.splides.forEach(function (n) {
            n.isParent || (c(e, n.splide), c(n.splide, e));
          }),
            i &&
              ((n = Gn(e)),
              (t = n.on)(Cn, f),
              t(Dn, l),
              t([En, zn], a),
              r.push(n),
              n.emit(Fn, e.splides));
        }
        function s() {
          r.forEach(function (n) {
            n.destroy();
          }),
            x(r);
        }
        function c(n, i) {
          n = Gn(n);
          n.on(Sn, function (n, t, e) {
            i.go(i.is(Mt) ? e : n);
          }),
            r.push(n);
        }
        function a() {
          j(n.Elements.list, nt, t.direction === Yn ? "vertical" : "");
        }
        function f(n) {
          e.go(n.index);
        }
        function l(n, t) {
          b(Xt, Ft(t)) && (f(n), $(t));
        }
        return {
          setup: function () {
            e.options = { slideFocus: z(o) ? i : o };
          },
          mount: u,
          destroy: s,
          remount: function () {
            s(), u();
          },
        };
      },
      Wheel: function (u, s, c) {
        var n = Gn(u).bind,
          a = 0;
        function t(n) {
          var t, e, i, o, r;
          n.cancelable &&
            ((r = (t = n.deltaY) < 0),
            (e = on(n)),
            (i = c.wheelMinThreshold || 0),
            (o = c.wheelSleep || 0),
            dn(t) > i && o < e - a && (u.go(r ? "<" : ">"), (a = e)),
            (r = r),
            (c.releaseWheel &&
              !u.state.is(R) &&
              -1 === s.Controller.getAdjacent(r)) ||
              $(n));
        }
        return {
          mount: function () {
            c.wheel && n(s.Elements.track, "wheel", t, Ot);
          },
        };
      },
      Live: function (n, t, e) {
        var i = Gn(n).on,
          o = t.Elements.track,
          r = e.live && !e.isNavigation,
          u = H("span", bt),
          s = Xn(90, D(c, !1));
        function c(n) {
          j(o, et, n), n ? (P(o, u), s.start()) : V(u);
        }
        function a(n) {
          r && j(o, l, n ? "off" : "polite");
        }
        return {
          mount: function () {
            r &&
              (a(!t.Autoplay.isPaused()),
              j(o, it, !0),
              (u.textContent = "…"),
              i(jn, D(a, !0)),
              i(Rn, D(a, !1)),
              i([xn, In], D(c, !0)));
          },
          disable: a,
          destroy: function () {
            F(o, [l, it, et]), V(u);
          },
        };
      },
    }),
    Ht = {
      type: "slide",
      role: "region",
      speed: 400,
      perPage: 1,
      cloneStatus: !0,
      arrows: !0,
      pagination: !0,
      paginationKeyboard: !0,
      interval: 5e3,
      pauseOnHover: !0,
      pauseOnFocus: !0,
      resetProgress: !0,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      drag: !0,
      direction: "ltr",
      trimSpace: !0,
      focusableNodes: "a, button, textarea, input, select, iframe",
      live: !0,
      classes: {
        slide: ct,
        clone: at,
        arrows: lt,
        arrow: dt,
        prev: pt,
        next: ht,
        pagination: vt,
        page: gt,
        spinner: un + "__spinner",
      },
      i18n: {
        prev: "Previous slide",
        next: "Next slide",
        first: "Go to first slide",
        last: "Go to last slide",
        slideX: "Go to slide %s",
        pageX: "Go to page %s",
        play: "Start autoplay",
        pause: "Pause autoplay",
        carousel: "carousel",
        slide: "slide",
        select: "Select a slide to show",
        slideLabel: "%s of %s",
      },
      reducedMotion: { speed: 0, rewindSpeed: 0, autoplay: "pause" },
    };
  function Yt(n, i, t) {
    var e = Gn(n).on;
    return {
      mount: function () {
        e([En, Mn], function () {
          v(function () {
            i.Slides.style(
              "transition",
              "opacity " + t.speed + "ms " + t.easing
            );
          });
        });
      },
      start: function (n, t) {
        var e = i.Elements.track;
        Y(e, "height", rn(Q(e).height)),
          v(function () {
            t(), Y(e, "height", "");
          });
      },
      cancel: G,
    };
  }
  function qt(r, n, u) {
    var s,
      t = Gn(r).bind,
      c = n.Move,
      a = n.Controller,
      f = n.Scroll,
      e = n.Elements.list,
      l = D(Y, e, "transition");
    function i() {
      l(""), f.cancel();
    }
    return {
      mount: function () {
        t(e, "transitionend", function (n) {
          n.target === e && s && (i(), s());
        });
      },
      start: function (n, t) {
        var e = c.toPosition(n, !0),
          i = c.getPosition(),
          o = (function (n) {
            var t = u.rewindSpeed;
            if (r.is(Dt) && t) {
              var e = a.getIndex(!0),
                i = a.getEnd();
              if ((0 === e && i <= n) || (i <= e && 0 === n)) return t;
            }
            return u.speed;
          })(n);
        1 <= dn(e - i) && 1 <= o
          ? u.useScroll
            ? f.scroll(e, o, !1, t)
            : (l("transform " + o + "ms " + u.easing),
              c.translate(e, !0),
              (s = t))
          : (c.jump(n), t());
      },
      cancel: i,
    };
  }
  a = (function () {
    function e(n, t) {
      (this.event = Gn()),
        (this.Components = {}),
        (this.state = s(1)),
        (this.splides = []),
        (this._o = {}),
        (this._E = {});
      n = M(n) ? nn(document, n) : n;
      sn(n, n + " is invalid."),
        (t = O(
          { label: K((this.root = n), Vn) || "", labelledby: K(n, Zn) || "" },
          Ht,
          e.defaults,
          t || {}
        ));
      try {
        O(t, JSON.parse(K(n, i)));
      } catch (n) {
        sn(!1, "Invalid JSON");
      }
      this._o = Object.create(O({}, t));
    }
    var n = e.prototype;
    return (
      (n.mount = function (n, t) {
        var e = this,
          i = this.state,
          o = this.Components;
        return (
          sn(i.is([1, 7]), "Already mounted!"),
          i.set(1),
          (this._C = o),
          (this._T = t || this._T || (this.is(zt) ? Yt : qt)),
          (this._E = n || this._E),
          N(T({}, Bt, this._E, { Transition: this._T }), function (n, t) {
            n = n(e, o, e._o);
            (o[t] = n).setup && n.setup();
          }),
          N(o, function (n) {
            n.mount && n.mount();
          }),
          this.emit(En),
          C(this.root, "is-initialized"),
          i.set(3),
          this.emit("ready"),
          this
        );
      }),
      (n.sync = function (n) {
        return (
          this.splides.push({ splide: n }),
          n.splides.push({ splide: this, isParent: !0 }),
          this.state.is(3) &&
            (this._C.Sync.remount(), n.Components.Sync.remount()),
          this
        );
      }),
      (n.go = function (n) {
        return this._C.Controller.go(n), this;
      }),
      (n.on = function (n, t) {
        return this.event.on(n, t), this;
      }),
      (n.off = function (n) {
        return this.event.off(n), this;
      }),
      (n.emit = function (n) {
        var t;
        return (
          (t = this.event).emit.apply(t, [n].concat(_(arguments, 1))), this
        );
      }),
      (n.add = function (n, t) {
        return this._C.Slides.add(n, t), this;
      }),
      (n.remove = function (n) {
        return this._C.Slides.remove(n), this;
      }),
      (n.is = function (n) {
        return this._o.type === n;
      }),
      (n.refresh = function () {
        return this.emit(Mn), this;
      }),
      (n.destroy = function (t) {
        void 0 === t && (t = !0);
        var n = this.event,
          e = this.state;
        return (
          e.is(1)
            ? Gn(this).on("ready", this.destroy.bind(this, t))
            : (N(
                this._C,
                function (n) {
                  n.destroy && n.destroy(t);
                },
                !0
              ),
              n.emit(u),
              n.destroy(),
              t && x(this.splides),
              e.set(7)),
          this
        );
      }),
      _createClass(e, [
        {
          key: "options",
          get: function () {
            return this._o;
          },
          set: function (n) {
            this._C.Media.set(n, !0);
          },
        },
        {
          key: "length",
          get: function () {
            return this._C.Slides.getLength(!0);
          },
        },
        {
          key: "index",
          get: function () {
            return this._C.Controller.getIndex();
          },
        },
      ]),
      e
    );
  })();
  return (a.defaults = {}), (a.STATES = n), a;
});
//# sourceMappingURL=splide.min.js.map
