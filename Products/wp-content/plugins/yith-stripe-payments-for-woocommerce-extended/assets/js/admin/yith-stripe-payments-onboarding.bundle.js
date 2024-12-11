/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

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

;// ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function defineProperty_defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

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
;// ./assets/js/admin/src/modules/OnboardingButton.js


/* globals jQuery yith yithStripePayments */




function OnboardingButton_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function OnboardingButton_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? OnboardingButton_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : OnboardingButton_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



/**
 * Class that handles Onboarding button interactions
 */
var OnboardingButton = /*#__PURE__*/function () {
  /**
   * Constructor method
   *
   * @param {jQuery} $el     Object jQuery reference to onboarding button node
   * @param {Object} options Options for object construction
   */
  function OnboardingButton($el) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, OnboardingButton);
    /**
     * Set of options
     */
    defineProperty_defineProperty(this, "options", {
      reloadOnClose: true,
      addBackdrop: true
    });
    /**
     * jQuery button element
     */
    defineProperty_defineProperty(this, "$button", void 0);
    /**
     * Instance of the popup window opened to contain onboard flow
     */
    defineProperty_defineProperty(this, "onboardingPopup", void 0);
    /**
     * Holds reference to the Interval checking for onboarding popup closure
     */
    defineProperty_defineProperty(this, "popupClosePool", void 0);
    this.$button = $el;
    this.options = OnboardingButton_objectSpread(OnboardingButton_objectSpread({}, this.options), options);
    this.init();
  }

  /**
   * Init events specific of this object
   */
  return _createClass(OnboardingButton, [{
    key: "init",
    value: function init() {
      this.initClick();
    }

    /**
     * Init click on the Onboarding button
     */
  }, {
    key: "initClick",
    value: function initClick() {
      var _this = this;
      this.$button.on('click', function (ev) {
        ev.preventDefault();
        _this.onClick();
      });
    }

    /**
     * Handles click on the onboarding button
     */
  }, {
    key: "onClick",
    value: function onClick() {
      var _this2 = this;
      ajax.post.call(this.$button, 'process_onboarding', 'process_onboarding', {
        env: this.getEnv()
      }).then(function (response) {
        var _response$data;
        // something went wrong with connection process; reload to show possible notices.
        if (!(response !== null && response !== void 0 && (_response$data = response.data) !== null && _response$data !== void 0 && _response$data.onboard_link)) {
          return window.location.reload();
        }
        _this2.openOnboardingWindow(response.data.onboard_link);
      });
    }

    /**
     * Returns env for API call (either global defined one, or one coming from dedicated option in current page)
     *
     * @return {string} Current environment
     */
  }, {
    key: "getEnv",
    value: function getEnv() {
      var $envRadio = $(':input[id*="environment"]'),
        $checked = $envRadio.filter(':checked'),
        val = $checked.val();
      var env = yithStripePayments.env;
      if (val && ['live', 'test'].includes(val)) {
        env = val;
      }
      return env;
    }

    /**
     * Adds backdrop to current window
     */
  }, {
    key: "addBackdrop",
    value: function addBackdrop() {
      this.options.addBackdrop && $(document.body).addClass('stripe-onboarding-open');
    }

    /**
     * Removes backdrop from current window
     */
  }, {
    key: "removeBackdrop",
    value: function removeBackdrop() {
      this.options.addBackdrop && $(document.body).removeClass('stripe-onboarding-open');
    }

    /**
     * Opens onboarding popup, given the URL to visit
     *
     * @param {string} onboardLink Url to visit for onboarding
     */
  }, {
    key: "openOnboardingWindow",
    value: function openOnboardingWindow(onboardLink) {
      var screenHeight = screen.height,
        screenWidth = screen.width,
        features = Object.entries({
          popup: true,
          left: screenWidth / 6,
          top: screenHeight / 6,
          width: 2 * screenWidth / 3,
          height: 2 * screenHeight / 3
        }).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            i = _ref2[0],
            v = _ref2[1];
          return "".concat(i, "=").concat(v);
        }).join(',');

      // open popup window.
      this.onboardingPopup = window.open(onboardLink, 'Stripe', features);

      // starts timeout to check for window closure.
      this.startPopupClosePool();

      // add backdrop on body
      this.addBackdrop();
    }

    /**
     * Starts the pool that checks for onboarding popup closure
     */
  }, {
    key: "startPopupClosePool",
    value: function startPopupClosePool() {
      var _this3 = this;
      if (this.popupClosePool) {
        clearInterval(this.popupClosePool);
      }
      this.popupClosePool = setInterval(function () {
        if (!_this3.onboardingPopup.closed) {
          return;
        }
        _this3.onboardingPopup = null;
        _this3.removeBackdrop();
        clearInterval(_this3.popupClosePool);
        _this3.options.reloadOnClose && window.location.reload();
      }, 1000);
    }

    /**
     * Removes event listeners and cleans up resources.
     */
  }, {
    key: "destroy",
    value: function destroy() {
      this.$button.off();
    }
  }]);
}();

;// ./assets/js/admin/src/modules/OnboardingWidget.js


/* globals jQuery yith yithStripePayments */







/**
 * Class that handles Onboarding button interactions
 */
var OnboardingWidget = /*#__PURE__*/function () {
  /**
   * Constructor method
   *
   * @param {jQuery} $el object jQuery reference to onboarding button node
   */
  function OnboardingWidget($el) {
    _classCallCheck(this, OnboardingWidget);
    /**
     * jQuery wrapper element.
     */
    defineProperty_defineProperty(this, "$wrapper", void 0);
    /**
     * jQuery connect button element
     */
    defineProperty_defineProperty(this, "$connectButton", void 0);
    /**
     * jQuery refresh button element
     */
    defineProperty_defineProperty(this, "$refreshButton", void 0);
    /**
     * jQuery revoke button element
     */
    defineProperty_defineProperty(this, "$revokeButton", void 0);
    this.$wrapper = $el;
    this.$connectButton = this.$wrapper.find('.yith-stripe-payments__onboarding__button').add('.yith-stripe-payments__onboarding__continue');
    this.$refreshButton = this.$wrapper.find('.yith-stripe-payments__onboarding__refresh');
    this.$revokeButton = this.$wrapper.find('.yith-stripe-payments__onboarding__revoke');
    this.init();
  }

  /**
   * Init events specific of this object
   */
  return _createClass(OnboardingWidget, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.$connectButton.length && this.$connectButton.each(function (i, el) {
        return new OnboardingButton($(el));
      });
      this.$refreshButton.length && this.$refreshButton.on('click', function (ev) {
        ev.preventDefault();
        _this.refresh();
      });
      this.$revokeButton.length && this.$revokeButton.on('click', function (ev) {
        ev.preventDefault();
        _this.revoke();
      });
    }
  }, {
    key: "refresh",
    value: function refresh() {
      ajax.post.call(this.$refreshButton, 'refresh_connection_status', 'refresh_connection_status').then(function () {
        return window.location.reload();
      });
    }
  }, {
    key: "revoke",
    value: function revoke() {
      var modalClass = 'yith-stripe-payments__onboarding__revoke-modal';
      yith.ui.confirm({
        title: labels.confirm_revoke_title,
        message: labels.confirm_revoke_message,
        confirmButton: labels.confirm_revoke_button,
        confirmButtonType: 'delete',
        closeAfterConfirm: false,
        classes: {
          wrap: modalClass
        },
        onConfirm: function onConfirm() {
          ajax.post.call($(".".concat(modalClass, " > .yith-plugin-fw__modal__main")), 'revoke_connection', 'revoke_connection').then(function () {
            return window.location.reload();
          });
        }
      });
    }
  }]);
}();

;// ./assets/js/admin/src/onboarding.js


/* global jQuery yith yithStripePayments */



// init onboarding process.
jQuery(function ($) {
  var $onboardingWidget = $('.yith-stripe-payments__onboarding'),
    $envRadio = $(':input[id*="environment"]');

  // start onboarding widget JS behaviour.
  $onboardingWidget.length && new OnboardingWidget($onboardingWidget);
  window.yithStripePayments.connectOnboarding = function (button) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var $button = $(button);
    if (!$button.length) {
      return;
    }
    return new OnboardingButton($button, options);
  };

  // reloads page when environment option is changed. Double $( fn ) is required to run this code after WC's one, that does the same.
  // @see wp-content/plugins/woocommerce/assets/js/admin/settings.js:93
  $(function () {
    $envRadio.on('change', function (ev) {
      window.onbeforeunload = null;
      $(ev.target).closest('form').submit();
      return false;
    });
  });
});
var __webpack_export_target__ = window;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=yith-stripe-payments-onboarding.bundle.js.map