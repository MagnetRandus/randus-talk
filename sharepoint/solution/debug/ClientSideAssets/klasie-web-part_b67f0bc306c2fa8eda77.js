define("4d982091-dcda-4c3f-9239-df1ecbfce717_0.0.1", [
  "@microsoft/sp-property-pane",
  "@microsoft/sp-lodash-subset",
  "KlasieWebPartStrings",
  "@microsoft/sp-core-library",
  "@microsoft/sp-webpart-base",
  "react",
  "react-dom",
], function (n, a, i, r, o, s, c) {
  return (function (e) {
    var t = {};
    function n(a) {
      if (t[a]) return t[a].exports;
      var i = (t[a] = { i: a, l: !1, exports: {} });
      return e[a].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (
          (n.r(a),
          Object.defineProperty(a, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var i in e)
            n.d(
              a,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return a;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = "oq9h"))
    );
  })({
    "26ea": function (e, t) {
      e.exports = n;
    },
    FQWx: function (e, t, n) {
      (t = n("JPst")(!1)).push([
        e.i,
        '.klasie_e9c90df0{color:"[theme:bodyText, default: #323130]";color:var(--bodyText);overflow:hidden;padding:1em}.klasie_e9c90df0.teams_e9c90df0{font-family:Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif}.welcome_e9c90df0{text-align:center}.welcomeImage_e9c90df0{max-width:420px;width:100%}.links_e9c90df0 a{color:"[theme:link, default:#03787c]";color:var(--link);text-decoration:none}.links_e9c90df0 a:hover{color:"[theme:linkHovered, default: #014446]";color:var(--linkHovered);text-decoration:underline}.klasie_e9c90df0{font-size:x-large}.QVersation_e9c90df0 ul{margin-left:0}.QVersation_e9c90df0 ul li{border-radius:12px;display:inline-block;padding:4px;width:auto}.Controls_e9c90df0{padding-left:43px}.Controls_e9c90df0 table{width:-webkit-fill-availables}.Controls_e9c90df0 button{margin-left:3px;margin-top:15px}.Controls_e9c90df0 .PraatHier_e9c90df0{width:250px}.Controls_e9c90df0 .Comms_e9c90df0{font-size:13px;padding-top:7px}.KiesPratie_e9c90df0{color:inherit}.CodeFrame_e9c90df0{border:1px solid #ff0}.tool_e9c90df0{color:inherit}.assistant_e9c90df0{color:#253259}.function_e9c90df0{color:orange}.system_e9c90df0{color:#a6401b}.user_e9c90df0{color:#808c89}',
        "",
      ]),
        (e.exports = t);
    },
    JPst: function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var n = (function (e, t) {
                var n,
                  a,
                  i,
                  r = e[1] || "",
                  o = e[3];
                if (!o) return r;
                if (t && "function" == typeof btoa) {
                  var s =
                      ((n = o),
                      (a = btoa(
                        unescape(encodeURIComponent(JSON.stringify(n)))
                      )),
                      (i =
                        "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                          a
                        )),
                      "/*# ".concat(i, " */")),
                    c = o.sources.map(function (e) {
                      return "/*# sourceURL="
                        .concat(o.sourceRoot || "")
                        .concat(e, " */");
                    });
                  return [r].concat(c).concat([s]).join("\n");
                }
                return [r].join("\n");
              })(t, e);
              return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
            }).join("");
          }),
          (t.i = function (e, n, a) {
            "string" == typeof e && (e = [[null, e, ""]]);
            var i = {};
            if (a)
              for (var r = 0; r < this.length; r++) {
                var o = this[r][0];
                null != o && (i[o] = !0);
              }
            for (var s = 0; s < e.length; s++) {
              var c = [].concat(e[s]);
              (a && i[c[0]]) ||
                (n &&
                  (c[2]
                    ? (c[2] = "".concat(n, " and ").concat(c[2]))
                    : (c[2] = n)),
                t.push(c));
            }
          }),
          t
        );
      };
    },
    Pk8u: function (e, t) {
      e.exports = a;
    },
    QT9j: function (e, t) {
      e.exports = i;
    },
    UWqr: function (e, t) {
      e.exports = r;
    },
    br4S: function (e, t) {
      e.exports = o;
    },
    cDcd: function (e, t) {
      e.exports = s;
    },
    faye: function (e, t) {
      e.exports = c;
    },
    oq9h: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("cDcd"),
        i = n("faye"),
        r = n("UWqr"),
        o = n("26ea"),
        s = n("br4S"),
        c = n("QT9j");
      n("sUTF");
      var d,
        l = n("Pk8u"),
        u =
          ((d = function (e, t) {
            return (
              (d =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              d(e, t)
            );
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = e;
            }
            d(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }),
        f = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            u(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.description,
                n = e.isDarkTheme,
                i = e.environmentMessage,
                r = e.hasTeamsContext,
                o = e.userDisplayName;
              return (
                n ? console.log("Dark") : console.log("Light"),
                console.log(i),
                a.createElement(
                  "section",
                  {
                    className: ""
                      .concat("klasie_e9c90df0", " ")
                      .concat(r ? "teams_e9c90df0" : ""),
                  },
                  a.createElement(
                    "div",
                    { className: "welcome_e9c90df0" },
                    a.createElement(
                      "h2",
                      null,
                      "Hi ",
                      Object(l.escape)(o),
                      "!"
                    ),
                    a.createElement(
                      "div",
                      null,
                      a.createElement("strong", null, Object(l.escape)(t))
                    )
                  )
                )
              );
            }),
            t
          );
        })(a.Component),
        p = f,
        m = (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            if ("function" != typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null"
              );
            function a() {
              this.constructor = t;
            }
            e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((a.prototype = n.prototype), new a()));
          };
        })(),
        _ = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t._isDarkTheme = !1), (t._environmentMessage = ""), t;
          }
          return (
            m(t, e),
            (t.prototype.render = function () {
              var e = a.createElement(p, {
                description: this.properties.description,
                isDarkTheme: this._isDarkTheme,
                environmentMessage: this._environmentMessage,
                hasTeamsContext: !!this.context.sdks.microsoftTeams,
                userDisplayName: this.context.pageContext.user.displayName,
              });
              i.render(e, this.domElement);
            }),
            (t.prototype.onInit = function () {
              var e = this;
              return this._getEnvironmentMessage().then(function (t) {
                e._environmentMessage = t;
              });
            }),
            (t.prototype._getEnvironmentMessage = function () {
              var e = this;
              return this.context.sdks.microsoftTeams
                ? this.context.sdks.microsoftTeams.teamsJs.app
                    .getContext()
                    .then(function (t) {
                      var n = "";
                      switch (t.app.host.name) {
                        case "Office":
                          n = e.context.isServedFromLocalhost
                            ? c.AppLocalEnvironmentOffice
                            : c.AppOfficeEnvironment;
                          break;
                        case "Outlook":
                          n = e.context.isServedFromLocalhost
                            ? c.AppLocalEnvironmentOutlook
                            : c.AppOutlookEnvironment;
                          break;
                        case "Teams":
                        case "TeamsModern":
                          n = e.context.isServedFromLocalhost
                            ? c.AppLocalEnvironmentTeams
                            : c.AppTeamsTabEnvironment;
                          break;
                        default:
                          n = c.UnknownEnvironment;
                      }
                      return n;
                    })
                : Promise.resolve(
                    this.context.isServedFromLocalhost
                      ? c.AppLocalEnvironmentSharePoint
                      : c.AppSharePointEnvironment
                  );
            }),
            (t.prototype.onThemeChanged = function (e) {
              if (e) {
                this._isDarkTheme = !!e.isInverted;
                var t = e.semanticColors;
                t &&
                  (this.domElement.style.setProperty(
                    "--bodyText",
                    t.bodyText || null
                  ),
                  this.domElement.style.setProperty("--link", t.link || null),
                  this.domElement.style.setProperty(
                    "--linkHovered",
                    t.linkHovered || null
                  ));
              }
            }),
            (t.prototype.onDispose = function () {
              i.unmountComponentAtNode(this.domElement);
            }),
            Object.defineProperty(t.prototype, "dataVersion", {
              get: function () {
                return r.Version.parse("1.0");
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.getPropertyPaneConfiguration = function () {
              return {
                pages: [
                  {
                    header: { description: c.PropertyPaneDescription },
                    groups: [
                      {
                        groupName: c.BasicGroupName,
                        groupFields: [
                          Object(o.PropertyPaneTextField)("description", {
                            label: c.DescriptionFieldLabel,
                          }),
                          Object(o.PropertyPaneTextField)("APIKey", {
                            label: c.APIKey,
                          }),
                        ],
                      },
                    ],
                  },
                ],
              };
            }),
            t
          );
        })(s.BaseClientSideWebPart);
      t.default = _;
    },
    sUTF: function (e, t, n) {
      var a = n("FQWx"),
        i = n("xMn6");
      "string" == typeof a && (a = [[e.i, a]]);
      for (var r = 0; r < a.length; r++) i.loadStyles(a[r][1], !0);
      a.locals && (e.exports = a.locals);
    },
    xMn6: function (e, t, n) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__assign) ||
          function () {
            return (
              (n =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              n.apply(this, arguments)
            );
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.splitStyles =
            t.detokenize =
            t.clearStyles =
            t.loadTheme =
            t.flush =
            t.configureRunMode =
            t.configureLoadStyles =
            t.loadStyles =
              void 0);
        var a,
          i = "undefined" == typeof window ? e : window,
          r = i && i.CSPSettings && i.CSPSettings.nonce,
          o =
            ((a = i.__themeState__ || {
              theme: void 0,
              lastStyleElement: void 0,
              registeredStyles: [],
            }).runState ||
              (a = n(n({}, a), {
                perf: { count: 0, duration: 0 },
                runState: { flushTimer: 0, mode: 0, buffer: [] },
              })),
            a.registeredThemableStyles ||
              (a = n(n({}, a), { registeredThemableStyles: [] })),
            (i.__themeState__ = a),
            a),
          s =
            /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,
          c = function () {
            return "undefined" != typeof performance && performance.now
              ? performance.now()
              : Date.now();
          };
        function d(e) {
          var t = c();
          e();
          var n = c();
          o.perf.duration += n - t;
        }
        function l() {
          d(function () {
            var e = o.runState.buffer.slice();
            o.runState.buffer = [];
            var t = [].concat.apply([], e);
            t.length > 0 && u(t);
          });
        }
        function u(e, t) {
          o.loadStyles
            ? o.loadStyles(m(e).styleString, e)
            : (function (e) {
                if ("undefined" != typeof document) {
                  var t = document.getElementsByTagName("head")[0],
                    n = document.createElement("style"),
                    a = m(e),
                    i = a.styleString,
                    s = a.themable;
                  n.setAttribute("data-load-themed-styles", "true"),
                    r && n.setAttribute("nonce", r),
                    n.appendChild(document.createTextNode(i)),
                    o.perf.count++,
                    t.appendChild(n);
                  var c = document.createEvent("HTMLEvents");
                  c.initEvent("styleinsert", !0, !1),
                    (c.args = { newStyle: n }),
                    document.dispatchEvent(c);
                  var d = { styleElement: n, themableStyle: e };
                  s
                    ? o.registeredThemableStyles.push(d)
                    : o.registeredStyles.push(d);
                }
              })(e);
        }
        function f(e) {
          void 0 === e && (e = 3),
            (3 !== e && 2 !== e) ||
              (p(o.registeredStyles), (o.registeredStyles = [])),
            (3 !== e && 1 !== e) ||
              (p(o.registeredThemableStyles),
              (o.registeredThemableStyles = []));
        }
        function p(e) {
          e.forEach(function (e) {
            var t = e && e.styleElement;
            t && t.parentElement && t.parentElement.removeChild(t);
          });
        }
        function m(e) {
          var t = o.theme,
            n = !1;
          return {
            styleString: (e || [])
              .map(function (e) {
                var a = e.theme;
                if (a) {
                  n = !0;
                  var i = t ? t[a] : void 0,
                    r = e.defaultValue || "inherit";
                  return t && !i && console, i || r;
                }
                return e.rawString;
              })
              .join(""),
            themable: n,
          };
        }
        function _(e) {
          var t = [];
          if (e) {
            for (var n = 0, a = void 0; (a = s.exec(e)); ) {
              var i = a.index;
              i > n && t.push({ rawString: e.substring(n, i) }),
                t.push({ theme: a[1], defaultValue: a[2] }),
                (n = s.lastIndex);
            }
            t.push({ rawString: e.substring(n) });
          }
          return t;
        }
        (t.loadStyles = function (e, t) {
          void 0 === t && (t = !1),
            d(function () {
              var n = Array.isArray(e) ? e : _(e),
                a = o.runState,
                i = a.mode,
                r = a.buffer,
                s = a.flushTimer;
              t || 1 === i
                ? (r.push(n),
                  s ||
                    (o.runState.flushTimer = self.setTimeout(function () {
                      (o.runState.flushTimer = 0), l();
                    }, 0)))
                : u(n);
            });
        }),
          (t.configureLoadStyles = function (e) {
            o.loadStyles = e;
          }),
          (t.configureRunMode = function (e) {
            o.runState.mode = e;
          }),
          (t.flush = l),
          (t.loadTheme = function (e) {
            (o.theme = e),
              (function () {
                if (o.theme) {
                  for (
                    var e = [], t = 0, n = o.registeredThemableStyles;
                    t < n.length;
                    t++
                  ) {
                    var a = n[t];
                    e.push(a.themableStyle);
                  }
                  e.length > 0 && (f(1), u([].concat.apply([], e)));
                }
              })();
          }),
          (t.clearStyles = f),
          (t.detokenize = function (e) {
            return e && (e = m(_(e)).styleString), e;
          }),
          (t.splitStyles = _);
      }).call(this, n("yLpj"));
    },
    yLpj: function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (e) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
  });
});
