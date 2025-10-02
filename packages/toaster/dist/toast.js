function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* eslint-disable default-param-last */
import { v4 as uuidv4 } from 'uuid';
import { toastTypes } from '@8x8/oxygen-constants';
import { PausableTimeout } from '@8x8/oxygen-utils';
import PubSub from 'pubsub-js';
import isUndefined from 'lodash.isundefined';
import { getConfig } from './config';
import * as events from './constants/events';

/**
 * Toast DTO
 */
var Toast = /*#__PURE__*/function () {
  /**
   * @param {String} id
   * @param {Node|String} content
   * @param {Node|String} title
   * @param {String} [closeButtonLabel='Close']
   * @param {Node|String} description
   * @param {Array} [actions=[]]
   * @param {Boolean} [hideCloseControl=false]
   * @param {Function} onClose
   * @param {String} [type=toastTypes.success]
   * @param {Number} duration
   * @param {String} size
   */
  function Toast(id, content, title, closeButtonLabel, description) {
    var actions = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
    var hideCloseControl = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    var onClose = arguments.length > 7 ? arguments[7] : undefined;
    var type = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : toastTypes.success;
    var duration = arguments.length > 9 ? arguments[9] : undefined;
    var size = arguments.length > 10 ? arguments[10] : undefined;
    var theme = arguments.length > 11 ? arguments[11] : undefined;
    _classCallCheck(this, Toast);
    _defineProperty(this, "id", undefined);
    _defineProperty(this, "content", undefined);
    _defineProperty(this, "title", undefined);
    _defineProperty(this, "closeButtonLabel", undefined);
    _defineProperty(this, "description", undefined);
    _defineProperty(this, "actions", []);
    _defineProperty(this, "hideCloseControl", undefined);
    _defineProperty(this, "onClose", undefined);
    _defineProperty(this, "type", undefined);
    _defineProperty(this, "duration", undefined);
    _defineProperty(this, "size", undefined);
    _defineProperty(this, "theme", {});
    _defineProperty(this, "expirationTimeout", undefined);
    this.id = id || uuidv4();
    this.content = content;
    this.title = title;
    this.closeButtonLabel = closeButtonLabel;
    this.description = description;
    this.actions = actions.map(function (action) {
      return _objectSpread(_objectSpread({}, action), {}, {
        id: uuidv4()
      });
    });
    this.hideCloseControl = hideCloseControl;
    this.onClose = onClose;
    this.type = type;
    this.duration = isUndefined(duration) ? getConfig().duration : duration;
    this.size = size;
    this.theme = theme;
    this.initExpirationTimeout(this.duration);
  }
  return _createClass(Toast, [{
    key: "close",
    value: function close() {
      PubSub.publish(events.REMOVE_TOAST, this.id);
      if (this.expirationTimeout) {
        this.expirationTimeout.clear();
      }
    }
  }, {
    key: "initExpirationTimeout",
    value: function initExpirationTimeout(duration) {
      var _this = this;
      if (duration === Infinity) {
        return;
      }
      this.expirationTimeout = new PausableTimeout(function () {
        return _this.close();
      }, duration);
    }
  }, {
    key: "pauseExpirationTimeout",
    value: function pauseExpirationTimeout() {
      if (this.expirationTimeout) {
        this.expirationTimeout.pause();
      }
    }
  }, {
    key: "resumeExpirationTimeout",
    value: function resumeExpirationTimeout() {
      if (this.expirationTimeout) {
        this.expirationTimeout.resume();
      }
    }
  }]);
}();
export default Toast;