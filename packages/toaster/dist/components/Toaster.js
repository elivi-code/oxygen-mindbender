function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import PubSub from 'pubsub-js';
import { PoseGroup } from 'react-pose';
import { ToastStack, Toast } from '@8x8/oxygen-toast';
import { withTheme } from '@8x8/oxygen-config';
import ToasterWrapper from '../styled/ToasterWrapper';
import * as events from '../constants/events';
import { getConfig } from '../config';
var Toaster = /*#__PURE__*/function (_Component) {
  function Toaster() {
    var _this;
    _classCallCheck(this, Toaster);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Toaster, [].concat(args));
    _defineProperty(_this, "state", {
      toasts: []
    });
    _defineProperty(_this, "addSubscriptionToken", undefined);
    _defineProperty(_this, "removeSubscriptionToken", undefined);
    _defineProperty(_this, "removeAllSubscriptionToken", undefined);
    _defineProperty(_this, "configUpdateSubscriptionToken", undefined);
    _defineProperty(_this, "stackSize", undefined);
    return _this;
  }
  _inherits(Toaster, _Component);
  return _createClass(Toaster, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.addSubscriptionToken = PubSub.subscribe(events.ADD_TOAST, this.addToast.bind(this));
      this.removeSubscriptionToken = PubSub.subscribe(events.REMOVE_TOAST, this.removeToast.bind(this));
      this.removeAllSubscriptionToken = PubSub.subscribe(events.REMOVE_ALL, this.removeAllToasts.bind(this));
      this.configUpdateSubscriptionToken = PubSub.subscribe(events.CONFIG_UPDATE, function () {
        _this2.stackSize = getConfig().stackSize;
      });
      this.stackSize = getConfig().stackSize;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      PubSub.unsubscribe(this.addSubscriptionToken);
      PubSub.unsubscribe(this.removeSubscriptionToken);
      PubSub.unsubscribe(this.removeAllSubscriptionToken);
      PubSub.unsubscribe(this.configUpdateSubscriptionToken);
    }
  }, {
    key: "addToast",
    value: function addToast(event, toast) {
      var toasts = this.state.toasts;
      var toastIndex = toasts.findIndex(function (t) {
        return toast.id === t.id;
      });

      // remove toast when stack size limit is reached and it's not opened yet
      if (toasts.length === this.stackSize && toastIndex === -1) {
        this.removeToast(undefined, toasts[0].id);
      }
      if (toastIndex > -1) {
        // if toast is already opened
        toasts[toastIndex].expirationTimeout.clear(); // reset toast timer
        toasts[toastIndex] = _objectSpread(_objectSpread({}, toasts[toastIndex]), toast);
        this.setState({
          toasts: toasts
        });
      } else {
        this.setState(function (prevState) {
          return {
            toasts: [].concat(_toConsumableArray(prevState.toasts), [toast])
          };
        });
      }
    }
  }, {
    key: "removeToast",
    value: function removeToast(event, toastId) {
      var _this$state$toasts$fi, _this$state$toasts$fi2;
      (_this$state$toasts$fi = this.state.toasts.find(function (toast) {
        return toast.id === toastId;
      })) === null || _this$state$toasts$fi === void 0 || (_this$state$toasts$fi2 = _this$state$toasts$fi.onClose) === null || _this$state$toasts$fi2 === void 0 || _this$state$toasts$fi2.call(_this$state$toasts$fi);
      this.setState(function (prevState) {
        return {
          toasts: prevState.toasts.filter(function (toast) {
            return toast.id !== toastId;
          })
        };
      });
    }
  }, {
    key: "removeAllToasts",
    value: function removeAllToasts() {
      this.state.toasts.forEach(function (toast) {
        var _toast$onClose;
        (_toast$onClose = toast.onClose) === null || _toast$onClose === void 0 || _toast$onClose.call(toast);
      });
      this.setState({
        toasts: []
      });
    }
  }, {
    key: "renderToasts",
    value: function renderToasts() {
      return this.state.toasts.map(function (toast) {
        return /*#__PURE__*/React.createElement(Toast, {
          size: toast.size,
          type: toast.type,
          actions: toast.actions,
          hideCloseControl: toast.hideCloseControl,
          onCloseControlClick: function onCloseControlClick() {
            return toast.close();
          },
          onMouseEnter: function onMouseEnter() {
            return toast.pauseExpirationTimeout();
          },
          onMouseLeave: function onMouseLeave() {
            return toast.resumeExpirationTimeout();
          },
          key: toast.id,
          theme: toast.theme,
          title: toast.title,
          closeButtonLabel: toast.closeButtonLabel,
          description: toast.description
        }, toast.content);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _getConfig = getConfig(),
        size = _getConfig.size,
        targetNode = _getConfig.targetNode;
      var theme = this.props.theme;
      return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement(ToasterWrapper, {
        size: size
      }, /*#__PURE__*/React.createElement(ToastStack, null, /*#__PURE__*/React.createElement(PoseGroup, null, this.renderToasts())))), targetNode);
    }
  }]);
}(Component);
_defineProperty(Toaster, "propTypes", {
  /**
   * Toast theme
   */
  theme: PropTypes.object
});
export default withTheme(Toaster, 'toast');
export { Toaster };