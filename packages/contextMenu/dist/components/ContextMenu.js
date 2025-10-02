function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["theme", "children", "onShow", "onHide", "onInsideClick", "testId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import { Manager, Popper } from 'react-popper';
import PubSub from 'pubsub-js';
import noop from 'lodash.noop';
import { THEME_NAME, CONTEXT_MENU_SHOW, CONTEXT_MENU_HIDE } from '../constants';
import * as Styled from '../styled';
import VirtualReference from '../utils/VirtualReference';
var registerHandlers = function registerHandlers(handlers) {
  if (!Array.isArray(handlers)) {
    return;
  }
  var _iterator = _createForOfIteratorHelper(handlers),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var handler = _step.value;
      handler.target.addEventListener(handler.eventName, handler.callback, handler.capture);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var unregisterHandlers = function unregisterHandlers(handlers) {
  if (!Array.isArray(handlers)) {
    return;
  }
  var _iterator2 = _createForOfIteratorHelper(handlers),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var handler = _step2.value;
      handler.target.removeEventListener(handler.eventName, handler.callback, handler.capture);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};
export var ContextMenu = /*#__PURE__*/function (_Component) {
  function ContextMenu(props) {
    var _this;
    _classCallCheck(this, ContextMenu);
    _this = _callSuper(this, ContextMenu, [props]);
    _defineProperty(_this, "state", {
      isVisible: false
    });
    _defineProperty(_this, "show", function (_ref) {
      var x = _ref.x,
        y = _ref.y;
      var onShow = _this.props.onShow;
      registerHandlers(_this.eventHandlers);
      _this.virtualReference = new VirtualReference(x, y);
      onShow();
      _this.setState({
        isVisible: true
      });
    });
    _defineProperty(_this, "hide", function () {
      var onHide = _this.props.onHide;
      var isVisible = _this.state.isVisible;
      unregisterHandlers(_this.eventHandlers);
      if (isVisible) {
        _this.wrapper(function () {
          onHide();
          _this.setState({
            isVisible: false
          });
        });
      }
    });
    _defineProperty(_this, "virtualReference", undefined);
    _defineProperty(_this, "showToken", undefined);
    _defineProperty(_this, "hideToken", undefined);
    _defineProperty(_this, "wrapper", (window.requestAnimationFrame || window.setTimeout).bind(window));
    var customCloseHandlers = _this.props.customCloseHandlers;
    _this.eventHandlers = [{
      target: document.body,
      eventName: 'click',
      callback: _this.hide,
      capture: true
    }, {
      target: document.body,
      eventName: 'contextmenu',
      callback: _this.hide,
      capture: true
    }, {
      target: window,
      eventName: 'resize',
      callback: _this.hide,
      capture: false
    }, {
      target: window,
      eventName: 'scroll',
      callback: _this.hide,
      capture: false
    }].concat(_toConsumableArray(customCloseHandlers));
    return _this;
  }
  _inherits(ContextMenu, _Component);
  return _createClass(ContextMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.showToken = PubSub.subscribe(CONTEXT_MENU_SHOW, function (event, _ref2) {
        var eventId = _ref2.id,
          x = _ref2.x,
          y = _ref2.y;
        var id = _this2.props.id;
        if (id !== eventId) {
          return;
        }
        _this2.show({
          x: x,
          y: y
        });
      });
      this.hideToken = PubSub.subscribe(CONTEXT_MENU_HIDE, function (event, _ref3) {
        var eventId = _ref3.id;
        var id = _this2.props.id;
        if (id !== eventId) {
          return;
        }
        _this2.hide();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      PubSub.unsubscribe(this.showToken);
      PubSub.unsubscribe(this.hideToken);
      unregisterHandlers(this.eventHandlers);
      this.virtualReference = undefined;
      this.showToken = undefined;
      this.hideToken = undefined;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        theme = _this$props.theme,
        children = _this$props.children,
        onShow = _this$props.onShow,
        onHide = _this$props.onHide,
        onInsideClick = _this$props.onInsideClick,
        testId = _this$props.testId,
        otherProps = _objectWithoutProperties(_this$props, _excluded);
      var isVisible = this.state.isVisible;
      if (!isVisible) {
        return null;
      }
      return /*#__PURE__*/React.createElement(Manager, null, /*#__PURE__*/React.createElement(Popper, {
        referenceElement: this.virtualReference,
        placement: "bottom-start",
        positionFixed: true
      }, function (_ref4) {
        var ref = _ref4.ref,
          style = _ref4.style;
        return /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, /*#__PURE__*/React.createElement(Styled.ContextMenu, _extends({
          onClick: onInsideClick
        }, otherProps, {
          ref: ref,
          style: style
        }, getTestAttributes(testId)), children));
      }));
    }
  }]);
}(Component);
_defineProperty(ContextMenu, "propTypes", {
  theme: PropTypes.object,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  testId: PropTypes.string,
  onShow: PropTypes.func,
  onHide: PropTypes.func,
  customCloseHandlers: PropTypes.array,
  onInsideClick: PropTypes.func
});
_defineProperty(ContextMenu, "defaultProps", {
  testId: 'CONTEXT_MENU',
  onShow: noop,
  onHide: noop,
  customCloseHandlers: [],
  onInsideClick: noop
});
export default withTheme(ContextMenu, THEME_NAME);