function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) { ; } } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import noop from 'lodash.noop';
import find from 'lodash.find';
import isObject from 'lodash.isobject';
import { ThemeProvider } from 'styled-components';
import { Manager, Reference, Popper } from 'react-popper';
import { withTheme } from '@8x8/oxygen-config';
import DateTimeSelectorInput from '@8x8/oxygen-date-time-base';
import defaultPredefinedRanges from '../utils/predefinedRanges';
import CUSTOM_RANGE_ID from '../utils/constants';
import DateTimeRangeSelectorDropdown from './DateTimeRangeSelectorDropdown';
var registerEventHandlers = function registerEventHandlers(handlers) {
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
var unregisterEventHandlers = function unregisterEventHandlers(handlers) {
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
var hasValueSelected = function hasValueSelected(predefinedRange, dateTimeRange) {
  return predefinedRange.id !== CUSTOM_RANGE_ID || isObject(dateTimeRange);
};
var DateTimeRangeSelector = /*#__PURE__*/function (_PureComponent) {
  function DateTimeRangeSelector(props) {
    var _this;
    _classCallCheck(this, DateTimeRangeSelector);
    _this = _callSuper(this, DateTimeRangeSelector, [props]);
    _defineProperty(_this, "onHideDropdown", function (_ref) {
      var target = _ref.target;
      if (_this.inputRef.current.contains(target) || _this.inputRef.current === target || _this.dropdownRef.current.contains(target) || _this.dropdownRef.current === target) {
        return;
      }
      _this.closeDropdown();
    });
    _defineProperty(_this, "getDateTimeRangeTitle", function () {
      var _this$props = _this.props,
        placeholder = _this$props.placeholder,
        predefinedRanges = _this$props.predefinedRanges,
        _this$props$predefine = _this$props.predefinedRange;
      _this$props$predefine = _this$props$predefine === void 0 ? {} : _this$props$predefine;
      var id = _this$props$predefine.id,
        value = _this$props$predefine.value,
        _this$props$dateTimeR = _this$props.dateTimeRange;
      _this$props$dateTimeR = _this$props$dateTimeR === void 0 ? {} : _this$props$dateTimeR;
      var startDate = _this$props$dateTimeR.startDate,
        endDate = _this$props$dateTimeR.endDate,
        dateFormat = _this$props.dateFormat,
        timeFormat = _this$props.timeFormat;
      var currentRange = find(predefinedRanges, {
        id: id
      });
      if (currentRange) {
        var displayName = currentRange.displayName,
          selectedDisplayName = currentRange.selectedDisplayName;
        if (selectedDisplayName) {
          var displayValue = value || 'X';
          var _selectedDisplayName = _slicedToArray(selectedDisplayName, 2),
            firstLabel = _selectedDisplayName[0],
            secondLabel = _selectedDisplayName[1];
          return "".concat(firstLabel, " ").concat(displayValue, " ").concat(secondLabel);
        }
        if (displayName) {
          return displayName;
        }
      }
      if (startDate && endDate) {
        return "".concat(format(startDate, "".concat(dateFormat, " ").concat(timeFormat)), " - ").concat(format(endDate, "".concat(dateFormat, " ").concat(timeFormat)));
      }
      return placeholder || '';
    });
    _defineProperty(_this, "setDropdownRef", function (node) {
      _this.dropdownRef.current = node;
    });
    _defineProperty(_this, "setInputRef", function (node) {
      _this.inputRef.current = node;
    });
    _defineProperty(_this, "closeDropdown", function () {
      unregisterEventHandlers(_this.closeHandlers);
      _this.setState({
        isOpen: false
      }, _this.props.onClose);
    });
    _defineProperty(_this, "openDropdown", function () {
      registerEventHandlers(_this.closeHandlers);
      _this.setState({
        isOpen: true
      }, _this.props.onOpen);
    });
    _defineProperty(_this, "toggleDateRangeSelectorDropdown", function () {
      var isOpen = _this.state.isOpen;
      if (!isOpen) {
        _this.openDropdown();
      } else {
        _this.closeDropdown();
      }
    });
    _defineProperty(_this, "addOnHideCallback", function (customCloseHandlers) {
      return customCloseHandlers.map(function (handler) {
        return _objectSpread(_objectSpread({}, handler), {}, {
          callback: _this.closeDropdown
        });
      });
    });
    _this.state = {
      isOpen: false
    };
    var _customCloseHandlers = _this.props.customCloseHandlers;
    _this.inputRef = /*#__PURE__*/React.createRef();
    _this.dropdownRef = /*#__PURE__*/React.createRef();
    _this.closeHandlers = [{
      target: document.body,
      eventName: 'click',
      callback: _this.onHideDropdown,
      capture: true
    }, {
      target: document.body,
      eventName: 'contextmenu',
      callback: _this.onHideDropdown,
      capture: true
    }].concat(_toConsumableArray(_this.addOnHideCallback(_customCloseHandlers)));
    return _this;
  }
  _inherits(DateTimeRangeSelector, _PureComponent);
  return _createClass(DateTimeRangeSelector, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        hasError = _this$props2.hasError,
        iconLeft = _this$props2.iconLeft,
        id = _this$props2.id,
        otherCalendarProps = _this$props2.otherCalendarProps,
        hidePredefinedRanges = _this$props2.hidePredefinedRanges,
        hideTime = _this$props2.hideTime,
        theme = _this$props2.theme,
        size = _this$props2.size,
        inputIcon = _this$props2.inputIcon,
        isDisabled = _this$props2.isDisabled,
        clearButtonLabel = _this$props2.clearButtonLabel,
        finishButtonLabel = _this$props2.finishButtonLabel,
        fromLabel = _this$props2.fromLabel,
        startTimeLabel = _this$props2.startTimeLabel,
        toLabel = _this$props2.toLabel,
        endTimeLabel = _this$props2.endTimeLabel,
        endTimeErrorMessage = _this$props2.endTimeErrorMessage,
        predefinedRanges = _this$props2.predefinedRanges,
        predefinedRange = _this$props2.predefinedRange,
        dateTimeRange = _this$props2.dateTimeRange,
        testId = _this$props2.testId,
        dateFormat = _this$props2.dateFormat,
        timeFormat = _this$props2.timeFormat,
        locale = _this$props2.locale,
        onRangeChange = _this$props2.onRangeChange,
        inputRenderer = _this$props2.inputRenderer,
        headerRenderer = _this$props2.headerRenderer,
        customPredefinedRangeLabel = _this$props2.customPredefinedRangeLabel;
      var isOpen = this.state.isOpen;
      return /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement(Manager, null, /*#__PURE__*/React.createElement(Reference, null, function (_ref2) {
        var ref = _ref2.ref;
        var inputProps = {
          hasError: hasError,
          id: id,
          isOpen: isOpen,
          isDisabled: isDisabled,
          size: size,
          testId: "".concat(testId, "_INPUT"),
          isValueSelected: hasValueSelected(predefinedRange, dateTimeRange),
          onClick: _this2.toggleDateRangeSelectorDropdown
        };
        if (inputRenderer) {
          inputProps.ref = ref;
          return inputRenderer(inputProps);
        }
        var dateTimeRangeTitle = _this2.getDateTimeRangeTitle();
        return /*#__PURE__*/React.createElement(DateTimeSelectorInput, _extends({}, inputProps, {
          iconLeft: iconLeft,
          inputIcon: inputIcon,
          theme: theme,
          popperAnchorRef: ref,
          setInputRef: _this2.setInputRef,
          title: dateTimeRangeTitle
        }));
      }), isOpen && /*#__PURE__*/React.createElement(Popper, {
        placement: "bottom-start",
        positionFixed: true,
        innerRef: this.setDropdownRef
      }, function (_ref3) {
        var ref = _ref3.ref,
          style = _ref3.style;
        return /*#__PURE__*/React.createElement(DateTimeRangeSelectorDropdown, {
          headerRenderer: headerRenderer,
          otherCalendarProps: otherCalendarProps,
          hidePredefinedRanges: hidePredefinedRanges,
          hideTime: hideTime,
          theme: theme,
          testId: "".concat(testId, "_DROPDOWN"),
          onClose: _this2.closeDropdown,
          clearButtonLabel: clearButtonLabel,
          finishButtonLabel: finishButtonLabel,
          endTimeErrorMessage: endTimeErrorMessage,
          fromLabel: fromLabel,
          startTimeLabel: startTimeLabel,
          toLabel: toLabel,
          endTimeLabel: endTimeLabel,
          predefinedRanges: predefinedRanges,
          predefinedRange: predefinedRange,
          customPredefinedRangeLabel: customPredefinedRangeLabel,
          onRangeChange: onRangeChange,
          dateTimeRange: dateTimeRange,
          dateFormat: dateFormat,
          timeFormat: timeFormat,
          locale: locale,
          dropdownRef: ref,
          style: style
        });
      })));
    }
  }]);
}(PureComponent);
DateTimeRangeSelector.propTypes = {
  otherCalendarProps: PropTypes.object,
  customCloseHandlers: PropTypes.array,
  hasError: PropTypes.bool,
  hidePredefinedRanges: PropTypes.bool,
  hideTime: PropTypes.bool,
  predefinedRanges: PropTypes.array,
  predefinedRange: PropTypes.object,
  dateTimeRange: PropTypes.object,
  size: PropTypes.oneOf(['large', 'small']),
  clearButtonLabel: PropTypes.string,
  finishButtonLabel: PropTypes.string,
  fromLabel: PropTypes.string,
  startTimeLabel: PropTypes.string,
  toLabel: PropTypes.string,
  endTimeLabel: PropTypes.string,
  customPredefinedRangeLabel: PropTypes.string,
  endTimeErrorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  testId: PropTypes.string,
  dateFormat: PropTypes.string,
  timeFormat: PropTypes.string,
  inputIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  iconLeft: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.elementType]),
  isDisabled: PropTypes.bool,
  locale: PropTypes.object,
  onRangeChange: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  theme: PropTypes.object,
  inputRenderer: PropTypes.func,
  headerRenderer: PropTypes.func
};
DateTimeRangeSelector.defaultProps = {
  otherCalendarProps: {},
  customCloseHandlers: [],
  hasError: false,
  hidePredefinedRanges: false,
  hideTime: false,
  predefinedRanges: defaultPredefinedRanges,
  predefinedRange: {
    id: CUSTOM_RANGE_ID
  },
  dateTimeRange: undefined,
  size: 'large',
  clearButtonLabel: 'Clear',
  finishButtonLabel: 'Finish',
  fromLabel: 'From',
  startTimeLabel: 'Start Time',
  toLabel: 'To',
  endTimeLabel: 'End Time',
  customPredefinedRangeLabel: 'Custom',
  endTimeErrorMessage: 'Cannot be before start time',
  placeholder: 'Select Date Range',
  id: undefined,
  testId: 'DATE_TIME_RANGE_SELECTOR',
  dateFormat: 'MM/dd/yyyy',
  timeFormat: 'hh:mm a',
  inputIcon: undefined,
  iconLeft: null,
  isDisabled: false,
  locale: undefined,
  onRangeChange: noop,
  onOpen: noop,
  onClose: noop,
  inputRenderer: undefined,
  headerRenderer: undefined
};
export default withTheme(DateTimeRangeSelector, 'dateTimeRangeSelector');