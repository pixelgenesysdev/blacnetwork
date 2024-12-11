/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 633:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(738)["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 738:
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 756:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(633)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}

;// ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

;// ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

;// ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

;// ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

;// ./node_modules/@babel/runtime/helpers/esm/createClass.js

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}

;// ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

;// ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}

;// ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}

;// ./node_modules/@babel/runtime/helpers/esm/superPropBase.js

function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
  return t;
}

;// ./node_modules/@babel/runtime/helpers/esm/get.js

function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}

;// ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

;// ./node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}

;// ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function defineProperty_defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(756);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
;// ./assets/js/src/globals.js


/* global jQuery yith yithStripePayments */

// these constants will be wrapped inside webpack closure, to prevent collisions

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var $ = jQuery,
  $document = $(document),
  $body = $('body'),
  block = function block($el) {
    if ('undefined' === typeof $.fn.block) {
      return false;
    }
    try {
      $el.block({
        message: null,
        overlayCSS: {
          background: '#fff',
          opacity: 0.6
        }
      });
      return $el;
    } catch (e) {
      return false;
    }
  },
  unblock = function unblock($el) {
    if ('undefined' === typeof $.fn.unblock) {
      return false;
    }
    try {
      $el.unblock();
    } catch (e) {
      return false;
    }
  },
  globals_confirm = function confirm(title, message, args) {
    return new Promise(function (resolve, reject) {
      var _yith;
      // if can't display modal, accept by default
      if ('undefined' === typeof ((_yith = yith) === null || _yith === void 0 || (_yith = _yith.ui) === null || _yith === void 0 ? void 0 : _yith.confirm)) {
        reject(new Error('Missing yith.ui utilities'));
      }
      var options = _objectSpread({
        title: title || labels.generic_confirm_title,
        message: message || labels.generic_confirm_message
      }, args);
      options.onConfirm = function () {
        return resolve(true);
      };
      options.onCancel = reject;
      yith.ui.confirm(options);
    });
  },
  _ref = typeof yithStripePayments !== 'undefined' ? yithStripePayments : {},
  ajaxUrl = _ref.ajax_url,
  labels = _ref.labels,
  nonces = _ref.nonces;

;// ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

;// ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

;// ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

;// ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

;// ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

;// ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

;// ./assets/js/src/modules/PaymentElement.js


/* globals jQuery Stripe yithStripePayments yithStripePaymentsElement */








/**
 * Class that init and manages all interactions with Stripe Element
 */
var PaymentElement = /*#__PURE__*/function () {
  /**
   * Constructor method
   */
  function PaymentElement() {
    _classCallCheck(this, PaymentElement);
    /**
     * Flag enabled when we're on checkout or pay page
     */
    defineProperty_defineProperty(this, "isCheckout", void 0);
    /**
     * Flag enabled when we're on add payment method page
     */
    defineProperty_defineProperty(this, "isAddMethod", void 0);
    /**
     * jQuery element that reference target of embed
     */
    defineProperty_defineProperty(this, "$target", void 0);
    /**
     * Id for the embed target
     */
    defineProperty_defineProperty(this, "target", '#yith-stripe-payments-element');
    /**
     * Stores Stripe object once created
     */
    defineProperty_defineProperty(this, "stripe", void 0);
    /**
     * Store Elements object once created
     */
    defineProperty_defineProperty(this, "elements", void 0);
    /**
     * Store PaymentElement object once created
     */
    defineProperty_defineProperty(this, "paymentElement", void 0);
    // instance binding
    this.maybeInitElements = this.maybeInitElements.bind(this);
    this.updateElements = this.updateElements.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onError = this.onError.bind(this);
    this.onHashChange = this.onHashChange.bind(this);
    this.afterElementsSubmit = this.afterElementsSubmit.bind(this);
    this.clearPaymentMethod = this.clearPaymentMethod.bind(this);

    // init object
    this.init();
  }

  /* === INITIALIZATION METHOD === */

  /**
   * Init current object
   */
  return _createClass(PaymentElement, [{
    key: "init",
    value: function init() {
      this.initStripe();
      this.maybeInitElements();
      this.initFormSubmit();
      this.initHashChange();
      $body.on('payment_method_selected', this.maybeInitElements);
    }

    /**
     * Init Stripe object
     */
  }, {
    key: "initStripe",
    value: function initStripe() {
      var _yithStripePaymentsEl = yithStripePaymentsElement,
        publicKey = _yithStripePaymentsEl.public_key,
        acctId = _yithStripePaymentsEl.account_id;
      if (!publicKey || !acctId) {
        return;
      }
      this.stripe = Stripe(publicKey, {
        stripeAccount: acctId
      });
    }

    /**
     * Init checkout handling
     */
  }, {
    key: "initFormSubmit",
    value: function initFormSubmit() {
      this.getForm().on("submit", this.onSubmit);
    }

    /**
     */
  }, {
    key: "initHashChange",
    value: function initHashChange() {
      window.addEventListener('hashchange', this.onHashChange);
      this.onHashChange();
    }

    /* === ELEMENTS HANDLING === */

    /**
     * Init Elements if currently selected payment method is Stripe Payments Element
     */
  }, {
    key: "maybeInitElements",
    value: function maybeInitElements() {
      var _yithStripePaymentsEl2 = yithStripePaymentsElement,
        slug = _yithStripePaymentsEl2.slug;
      var $selectedMethod = $('input[name="payment_method"]:checked'),
        selectedMethod = $selectedMethod.attr('id');
      if ("payment_method_".concat(slug) !== selectedMethod) {
        return;
      }

      // init elements.
      this.initElements();
    }

    /**
     * Init Elements given that conditions are matched
     *
     * @return {Promise<void>}
     */
  }, {
    key: "initElements",
    value: (function () {
      var _initElements = _asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee() {
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.stripe) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              _context.t0 = this.stripe;
              _context.next = 5;
              return this.getElementsDetails();
            case 5:
              _context.t1 = _context.sent;
              this.elements = _context.t0.elements.call(_context.t0, _context.t1);
              this.paymentElement = this.elements.create('payment', {
                layout: yithStripePaymentsElement.layout
              }).on('change', this.clearPaymentMethod);
              this.mount();
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function initElements() {
        return _initElements.apply(this, arguments);
      }
      return initElements;
    }()
    /**
     * Update Elements with new Checkout details
     *
     * @return {Promise<void>}
     */
    )
  }, {
    key: "updateElements",
    value: (function () {
      var _updateElements = _asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee2() {
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!this.stripe || !this.elements)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              _context2.t0 = this.elements;
              _context2.next = 5;
              return this.getElementsDetails();
            case 5:
              _context2.t1 = _context2.sent;
              _context2.t0.update.call(_context2.t0, _context2.t1);
              this.clearPaymentMethod();
              this.mount();
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function updateElements() {
        return _updateElements.apply(this, arguments);
      }
      return updateElements;
    }()
    /**
     * Submit Elements form and waits for response
     */
    )
  }, {
    key: "submitElements",
    value: function submitElements() {
      if (!this.stripe || !this.elements) {
        return;
      }
      block(this.getForm());
      this.elements.submit().then(this.afterElementsSubmit)["catch"](this.onError);
    }

    /**
     * Handles successful responses from Elements submit
     */
  }, {
    key: "afterElementsSubmit",
    value: function afterElementsSubmit() {
      var _this = this;
      // otherwise proceed creating a payment method.
      this.stripe.createPaymentMethod({
        elements: this.elements,
        params: {
          billing_details: this.getBillingDetails()
        }
      }).then(function (_ref) {
        var error = _ref.error,
          paymentMethod = _ref.paymentMethod;
        unblock(_this.getForm());
        if (error) {
          _this.onError(error);
          return;
        }
        _this.appendPaymentMethod(paymentMethod);
        _this.getForm().trigger('submit');
      })["catch"](this.onError);
    }

    /**
     * Mount Elements on target node
     */
  }, {
    key: "mount",
    value: function mount() {
      this.paymentElement.mount(this.getTargetNode(true));
    }

    /* === FORM HANDLING === */

    /**
     * Returns container form
     *
     * @return {jQuery} Container form
     */
  }, {
    key: "getForm",
    value: function getForm() {
      var $target = this.getTarget();
      return $target.closest('form');
    }

    /**
     * Handles container form submit
     */
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      if (!this.hasPaymentMethod()) {
        this.submitElements();
        return false;
      }
    }

    /**
     * Prints error messages relevant to customer
     *
     *
     * @param {Object} error Error describing current error.
     */
  }, {
    key: "onError",
    value: function onError(error) {
      var $form = this.getForm();
      unblock($form);

      // remove existing error messages.
      $form.find('.woocommerce-error').remove();

      // add new error message.
      var $errorMsg = $('<div/>', {
        "class": 'woocommerce-error',
        text: error.message
      });
      $form.prepend($errorMsg);

      // scroll to notice.
      $.scroll_to_notices($errorMsg);

      // trigger form fields validation.
      $form.find('.input-text, select, input:checkbox').trigger('validate').trigger('blur');
    }

    /* === PAYMENT METHOD HANDLING === */

    /**
     * Checks if current form already has a payment method or needs a new one
     *
     * @return {boolean} Whether form contains payment method or not
     */
  }, {
    key: "hasPaymentMethod",
    value: function hasPaymentMethod() {
      var $paymentMethod = this.getPaymentMethod();
      return $paymentMethod.length && !!$paymentMethod.val();
    }

    /**
     * Returns payment method Node
     *
     * @return {jQuery} jQuery node for the Payment Method hidden field
     */
  }, {
    key: "getPaymentMethod",
    value: function getPaymentMethod() {
      var $form = this.getForm();
      return $form.find("#yith-stripe-payments-".concat(yithStripePaymentsElement.slug, "-payment-method"));
    }

    /**
     * Set value for the Payment method input in the form.
     * If input does not exist, creates it and append it to the form
     *
     * @param {Object} paymentMethod Payment method object
     */
  }, {
    key: "appendPaymentMethod",
    value: function appendPaymentMethod(paymentMethod) {
      var $paymentMethod = this.getPaymentMethod();
      if (!$paymentMethod.length) {
        var $form = this.getForm();
        $paymentMethod = $('<input/>', {
          type: 'hidden',
          id: "yith-stripe-payments-".concat(yithStripePaymentsElement.slug, "-payment-method"),
          name: "yith_stripe_payments_".concat(yithStripePaymentsElement.slug, "_payment_method"),
          value: paymentMethod.id
        });
        $form.append($paymentMethod);
      } else {
        $paymentMethod.val(paymentMethod.id);
      }
    }

    /**
     * Clears payment method input, to make sure we don't accidentally process checkout with an outdated one
     */
  }, {
    key: "clearPaymentMethod",
    value: function clearPaymentMethod() {
      var $paymentMethod = this.getPaymentMethod();
      if (!$paymentMethod.length) {
        return;
      }
      $paymentMethod.val('');
    }

    /* === HANDLE NEXT ACTIONS === */

    /**
     * Reacts to hash change in the url
     */
  }, {
    key: "onHashChange",
    value: (function () {
      var _onHashChange = _asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee3() {
        var _this2 = this;
        var hash, identifier, regex, matches, _matches, clientSecret, redirectUrl;
        return regenerator_default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              hash = window.location.hash;
              if (hash) {
                _context3.next = 3;
                break;
              }
              return _context3.abrupt("return");
            case 3:
              identifier = "yith-stripe-payments-".concat(yithStripePaymentsElement.slug), regex = new RegExp("^#".concat(identifier, "/confirm/([^/]+)/(.+)$")), matches = hash.match(regex);
              if (!(!matches || 3 < matches.length)) {
                _context3.next = 6;
                break;
              }
              return _context3.abrupt("return");
            case 6:
              window.location.hash = '';
              _matches = _slicedToArray(matches, 3), clientSecret = _matches[1], redirectUrl = _matches[2];
              this.stripe.handleNextAction({
                clientSecret: clientSecret
              }).then(function (result) {
                result.error && _this2.onError(result.error);
                result.paymentIntent && (window.location = redirectUrl);
              })["catch"](this.onError);
            case 9:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function onHashChange() {
        return _onHashChange.apply(this, arguments);
      }
      return onHashChange;
    }()
    /* === GETTERS METHOD === */
    /**
     * Get an object with billing details about customer
     *
     * @return {Object} Billing object.
     */
    )
  }, {
    key: "getBillingDetails",
    value: function getBillingDetails() {
      return {};
    }

    /**
     * Returns jQuery node to the embed target
     *
     * @param {boolean} refresh Whether to refresh target or not
     * @return {jQuery} jQuery node element.
     */
  }, {
    key: "getTarget",
    value: function getTarget(refresh) {
      if (!this.$target || refresh) {
        this.$target = $(this.target);
      }
      return this.$target;
    }

    /**
     * Returns DOM node to the embed target
     *
     * @param {boolean} refresh Whether to refresh target or not
     * @return {Element} DOM node element.
     */
  }, {
    key: "getTargetNode",
    value: function getTargetNode(refresh) {
      return this.getTarget(refresh).get(0);
    }

    /**
     * Returns an object with a set of options to be used for Elements init/update
     *
     * @return {Promise<object|boolean>} Settings object, or false on failure.
     */
  }, {
    key: "getElementsDetails",
    value: (function () {
      var _getElementsDetails = _asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee4() {
        return regenerator_default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", {
                mode: 'setup',
                currency: yithStripePaymentsElement.currency
              });
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function getElementsDetails() {
        return _getElementsDetails.apply(this, arguments);
      }
      return getElementsDetails;
    }())
  }]);
}();

;// ./assets/js/src/modules/ajax.js



function ajax_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function ajax_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ajax_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ajax_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

var _request = function request(method, action, security, params, args) {
    var _request$activeReques;
    if (!(_request !== null && _request !== void 0 && _request.activeRequests)) {
      _request.activeRequests = {};
    }

    // retrieve wrapper as current context.
    var $wrapper = $(this);
    if (params instanceof FormData) {
      params.append('action', "yith_stripe_payments_".concat(action));
      params.append('security', nonces !== null && nonces !== void 0 && nonces[security] ? nonces === null || nonces === void 0 ? void 0 : nonces[security] : security);
    } else {
      params = ajax_objectSpread({
        action: "yith_stripe_payments_".concat(action),
        security: nonces !== null && nonces !== void 0 && nonces[security] ? nonces === null || nonces === void 0 ? void 0 : nonces[security] : security
      }, params);
    }
    var requestKey = "".concat(method, "-").concat(action);
    var ajaxArgs = ajax_objectSpread({
      url: ajaxUrl,
      data: params,
      method: method,
      beforeSend: function beforeSend() {
        return $wrapper.length && block($wrapper);
      },
      complete: function complete() {
        return $wrapper.length && unblock($wrapper);
      }
    }, args);

    // eslint-disable-next-line
    if (_request !== null && _request !== void 0 && _request.activeRequests[requestKey] && typeof ((_request$activeReques = _request.activeRequests[requestKey]) === null || _request$activeReques === void 0 ? void 0 : _request$activeReques.abort) === 'function') {
      _request.activeRequests[requestKey].abort();
    }
    var xhr = $.ajax(ajaxArgs);
    _request.activeRequests[requestKey] = xhr;
    xhr.always(function () {
      return delete _request.activeRequests[requestKey];
    });
    return xhr;
  },
  get = function get() {
    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }
    return _request.call.apply(_request, [this, 'get'].concat(params));
  },
  post = function post() {
    for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      params[_key2] = arguments[_key2];
    }
    return _request.call.apply(_request, [this, 'post'].concat(params));
  };
/* harmony default export */ const ajax = ({
  request: _request,
  get: get,
  post: post
});
;// ./assets/js/src/modules/PaymentElementCheckout.js


/* globals jQuery Stripe yithStripePayments yithStripePaymentsElement */









function PaymentElementCheckout_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function PaymentElementCheckout_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? PaymentElementCheckout_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : PaymentElementCheckout_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }




/**
 * Class that init and manages all interactions with Stripe Element on Checkout
 */
var PaymentElementCheckout = /*#__PURE__*/function (_PaymentElement) {
  function PaymentElementCheckout() {
    var _this;
    _classCallCheck(this, PaymentElementCheckout);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, PaymentElementCheckout, [].concat(args));
    defineProperty_defineProperty(_this, "isCheckout", true);
    return _this;
  }
  _inherits(PaymentElementCheckout, _PaymentElement);
  return _createClass(PaymentElementCheckout, [{
    key: "init",
    value: /* === INITIALIZATION METHOD === */

    /**
     * Init current object
     */
    function init() {
      _superPropGet(PaymentElementCheckout, "init", this, 3)([]);
      $body.on('updated_checkout', this.updateElements);
      $body.on('checkout_error', this.clearPaymentMethod);
    }

    /**
     * Init checkout handling
     */
  }, {
    key: "initFormSubmit",
    value: function initFormSubmit() {
      this.getForm().on("checkout_place_order_".concat(yithStripePaymentsElement.slug), this.onSubmit).on('change', ':input', this.clearPaymentMethod);
    }

    /**
     * Checks if current form already has a payment method or needs a new one
     *
     * @return {boolean} Whether form contains payment method or not
     */
  }, {
    key: "hasPaymentMethod",
    value: function hasPaymentMethod() {
      return _superPropGet(PaymentElementCheckout, "hasPaymentMethod", this, 3)([]) || !!this.getSelectedToken();
    }

    /* === GETTERS METHOD === */

    /**
     * Get an object with billing details about customer
     *
     * @return {Object} Billing object.
     */
  }, {
    key: "getBillingDetails",
    value: function getBillingDetails() {
      var $form = this.getForm(),
        $billingFields = $form.find('[name^=billing]');
      if (!$billingFields.length) {
        return {};
      }
      var address = {};
      $billingFields.each(function (i, v) {
        var $field = $(v),
          name = $field.attr('name').replace('billing_', '');
        address[name] = $field.val();
      });
      var name = "".concat(address.first_name, " ").concat(address.last_name);
      return {
        name: name,
        email: address === null || address === void 0 ? void 0 : address.email,
        phone: address === null || address === void 0 ? void 0 : address.phone,
        address: {
          country: address === null || address === void 0 ? void 0 : address.country,
          city: address === null || address === void 0 ? void 0 : address.city,
          line1: address === null || address === void 0 ? void 0 : address.address_1,
          line2: address === null || address === void 0 ? void 0 : address.address_2,
          postal_code: address === null || address === void 0 ? void 0 : address.postcode,
          state: address.state
        }
      };
    }

    /**
     * Returns selected payment method from existing ones, if any
     *
     * @return {string|boolean} Selected token among existing ones, or false if no selection is made (or if no token exists)
     */
  }, {
    key: "getSelectedToken",
    value: function getSelectedToken() {
      var $form = this.getForm(),
        $tokens = $form.find("[name=\"wc-".concat(yithStripePaymentsElement.slug, "-payment-token\"]")),
        $selectedToken = $tokens.filter(':selected');
      if (!$selectedToken.length) {
        return false;
      }
      var selectedToken = $selectedToken.val();
      if (!selectedToken) {
        return false;
      }
      return selectedToken;
    }

    /**
     * Returns an object with a set of options to be used for Elements init/update
     *
     * @return {Promise<object|boolean>} Settings object, or false on failure.
     */
  }, {
    key: "getElementsDetails",
    value: (function () {
      var _getElementsDetails = _asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee() {
        var amount, currency, secret, mode, checkoutDetails, details;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return this.getCheckoutDetails();
            case 3:
              checkoutDetails = _context.sent;
              amount = checkoutDetails === null || checkoutDetails === void 0 ? void 0 : checkoutDetails.total;
              currency = checkoutDetails === null || checkoutDetails === void 0 ? void 0 : checkoutDetails.currency;
              secret = checkoutDetails === null || checkoutDetails === void 0 ? void 0 : checkoutDetails.secret;
              mode = amount ? 'payment' : 'setup';
              _context.next = 13;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", false);
            case 13:
              details = {
                paymentMethodCreation: 'manual',
                appearance: yithStripePaymentsElement.appearance
              };
              if (secret) {
                details.clientSecret = secret;
              } else {
                details = PaymentElementCheckout_objectSpread(PaymentElementCheckout_objectSpread({}, details), {}, {
                  mode: mode,
                  currency: currency,
                  captureMethod: yithStripePaymentsElement.capture_method
                });
                if ('payment' === mode) {
                  details.amount = amount;
                }
              }
              if (!!yithStripePaymentsElement.tokenization) {
                details.setupFutureUsage = 'on_session';
              }
              return _context.abrupt("return", details);
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 10]]);
      }));
      function getElementsDetails() {
        return _getElementsDetails.apply(this, arguments);
      }
      return getElementsDetails;
    }()
    /**
     * Retrieves fresh checkout details via AJAX
     *
     * @return {Promise<object>} JSON object retrieve form AJAX call, containing details about the checkout, such as amount and currency
     */
    )
  }, {
    key: "getCheckoutDetails",
    value: (function () {
      var _getCheckoutDetails = _asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee2() {
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return ajax.get.call(null, 'get_checkout_details', 'get_checkout_details', {
                gateway: 'element'
              });
            case 2:
              return _context2.abrupt("return", _context2.sent);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function getCheckoutDetails() {
        return _getCheckoutDetails.apply(this, arguments);
      }
      return getCheckoutDetails;
    }())
  }]);
}(PaymentElement);

;// ./assets/js/src/modules/PaymentElementCards.js


/* globals jQuery Stripe yithStripePayments yithStripePaymentsElement */








function PaymentElementCards_callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, PaymentElementCards_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function PaymentElementCards_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (PaymentElementCards_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


/**
 * Class that init and manages all interactions with Stripe Element on Checkout
 */
var PaymentElementCards = /*#__PURE__*/function (_PaymentElement) {
  function PaymentElementCards() {
    var _this;
    _classCallCheck(this, PaymentElementCards);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = PaymentElementCards_callSuper(this, PaymentElementCards, [].concat(args));
    defineProperty_defineProperty(_this, "isAddMethod", true);
    return _this;
  }
  _inherits(PaymentElementCards, _PaymentElement);
  return _createClass(PaymentElementCards, [{
    key: "getElementsDetails",
    value: (
    /* === INITIALIZATION METHOD === */
    /**
     * Returns an object with a set of options to be used for Elements init/update
     *
     * @return {Promise<object|boolean>} Settings object, or false on failure.
     */
    function () {
      var _getElementsDetails = _asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee() {
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", {
                mode: 'setup',
                setupFutureUsage: 'on_session',
                currency: yithStripePaymentsElement.currency,
                appearance: yithStripePaymentsElement.appearance
              });
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function getElementsDetails() {
        return _getElementsDetails.apply(this, arguments);
      }
      return getElementsDetails;
    }())
  }]);
}(PaymentElement);

;// ./assets/js/src/element.js


/* global wc jQuery Stripe */


jQuery(function ($) {
  var $elementsContainer = $('.payment_method_element'),
    $form = $elementsContainer.closest('form');
  if (!$form.length) {
    return;
  }
  if ($form.is('#add_payment_method')) {
    new PaymentElementCards();
  } else if ($form.is('.checkout') || $form.is('#order_review')) {
    new PaymentElementCheckout();
  }
});
})();

var __webpack_export_target__ = window;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=yith-stripe-payments-element.bundle.js.map