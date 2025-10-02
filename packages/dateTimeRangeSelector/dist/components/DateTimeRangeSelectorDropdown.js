function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import find from 'lodash.find';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import isBefore from 'date-fns/isBefore';
import { getTestAttributes } from '@8x8/oxygen-config';
import Button, { ButtonGroup, buttonSize, buttonVariant } from '@8x8/oxygen-button';
import { BaseDropdownContainer, BaseDropdownFooter, BasePopperContainer } from '@8x8/oxygen-date-time-base';
import { DateTimeRangePicker } from './DateTimeRangePicker';
import CUSTOM_RANGE_ID from '../utils/constants';
var setHoursAndMinutes = function setHoursAndMinutes(date, hours, minutes) {
  return setHours(setMinutes(date, minutes), hours);
};
var DateTimeRangeSelectorDropdown = /*#__PURE__*/function (_PureComponent) {
  function DateTimeRangeSelectorDropdown(props) {
    var _this;
    _classCallCheck(this, DateTimeRangeSelectorDropdown);
    _this = _callSuper(this, DateTimeRangeSelectorDropdown, [props]);
    _defineProperty(_this, "updateRangeStates", function (state) {
      _this.setState(state);
    });
    _defineProperty(_this, "getState", function () {
      var _this$props = _this.props,
        predefinedRange = _this$props.predefinedRange,
        predefinedRanges = _this$props.predefinedRanges,
        dateTimeRange = _this$props.dateTimeRange;
      var id = predefinedRange.id,
        value = predefinedRange.value;
      if (id !== CUSTOM_RANGE_ID) {
        var currentRange = find(predefinedRanges, {
          id: id
        });
        if (currentRange) {
          var currentDateTimeRange = currentRange.dateTimeRange;
          var dateRange = currentDateTimeRange(value);
          return {
            predefinedRange: predefinedRange,
            dateRange: dateRange,
            calendarRange: dateRange
          };
        }
      }
      if (dateTimeRange) {
        return {
          predefinedRange: {
            id: CUSTOM_RANGE_ID
          },
          dateRange: dateTimeRange,
          calendarRange: dateTimeRange
        };
      }
      return {
        predefinedRange: {
          id: CUSTOM_RANGE_ID
        },
        dateRange: {
          startDate: setHoursAndMinutes(new Date(), 0, 0),
          endDate: setHoursAndMinutes(new Date(), 23, 59)
        },
        calendarRange: {
          startDate: setHoursAndMinutes(new Date(), 0, 0),
          endDate: setHoursAndMinutes(new Date(), 23, 59)
        }
      };
    });
    _defineProperty(_this, "onApply", function () {
      var _this$props2 = _this.props,
        onClose = _this$props2.onClose,
        onRangeChange = _this$props2.onRangeChange;
      var _this$state = _this.state,
        predefinedRange = _this$state.predefinedRange,
        _this$state$dateRange = _this$state.dateRange,
        startDate = _this$state$dateRange.startDate,
        endDate = _this$state$dateRange.endDate;
      if (_this.timeRangeIsInvalid()) {
        _this.setState({
          isEndTimeValid: false
        });
        return;
      }
      onClose();
      var id = predefinedRange.id;
      if (id !== CUSTOM_RANGE_ID) {
        onRangeChange({
          predefinedRange: _objectSpread({}, predefinedRange)
        });
        return;
      }
      onRangeChange({
        dateTime: {
          startDate: new Date(startDate),
          endDate: new Date(endDate)
        }
      });
    });
    _defineProperty(_this, "onClear", function () {
      var _this$props3 = _this.props,
        onClose = _this$props3.onClose,
        onRangeChange = _this$props3.onRangeChange;
      onClose();
      onRangeChange({});
    });
    _defineProperty(_this, "timeRangeIsInvalid", function () {
      var _this$state$dateRange2 = _this.state.dateRange,
        startDate = _this$state$dateRange2.startDate,
        endDate = _this$state$dateRange2.endDate;
      return endDate && isBefore(endDate, startDate);
    });
    _defineProperty(_this, "setOuterState", function (stateProp) {
      _this.setState(_objectSpread({}, stateProp));
    });
    var defaultState = _this.getState();
    _this.state = _objectSpread({
      isEndTimeValid: true
    }, defaultState);
    return _this;
  }
  _inherits(DateTimeRangeSelectorDropdown, _PureComponent);
  return _createClass(DateTimeRangeSelectorDropdown, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props4 = this.props,
        dateTimeRange = _this$props4.dateTimeRange,
        predefinedRange = _this$props4.predefinedRange;
      var previousDateTimeRange = prevProps.dateTimeRange,
        previousPredefinedRange = prevProps.predefinedRange;
      if (predefinedRange === previousPredefinedRange && dateTimeRange === previousDateTimeRange) {
        return;
      }
      this.updateRangeStates(this.getState());
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
        dateTimeRange = _this$props5.dateTimeRange,
        clearButtonLabel = _this$props5.clearButtonLabel,
        otherCalendarProps = _this$props5.otherCalendarProps,
        finishButtonLabel = _this$props5.finishButtonLabel,
        hidePredefinedRanges = _this$props5.hidePredefinedRanges,
        hideTime = _this$props5.hideTime,
        fromLabel = _this$props5.fromLabel,
        startTimeLabel = _this$props5.startTimeLabel,
        toLabel = _this$props5.toLabel,
        endTimeLabel = _this$props5.endTimeLabel,
        endTimeErrorMessage = _this$props5.endTimeErrorMessage,
        predefinedRanges = _this$props5.predefinedRanges,
        predefinedRange = _this$props5.predefinedRange,
        testId = _this$props5.testId,
        dateFormat = _this$props5.dateFormat,
        timeFormat = _this$props5.timeFormat,
        locale = _this$props5.locale,
        dropdownRef = _this$props5.dropdownRef,
        style = _this$props5.style,
        headerRenderer = _this$props5.headerRenderer,
        customPredefinedRangeLabel = _this$props5.customPredefinedRangeLabel,
        onClose = _this$props5.onClose,
        theme = _this$props5.theme;
      var isEndTimeValid = this.state.isEndTimeValid;
      return /*#__PURE__*/React.createElement(BasePopperContainer, {
        ref: dropdownRef,
        style: style
      }, /*#__PURE__*/React.createElement(BaseDropdownContainer, getTestAttributes("".concat(testId)), /*#__PURE__*/React.createElement(DateTimeRangePicker, {
        theme: theme,
        dateTimeRange: dateTimeRange,
        otherCalendarProps: otherCalendarProps,
        hidePredefinedRanges: hidePredefinedRanges,
        hideTime: hideTime,
        endTimeErrorMessage: endTimeErrorMessage,
        predefinedRanges: predefinedRanges,
        predefinedRange: predefinedRange,
        testId: testId,
        dateFormat: dateFormat,
        timeFormat: timeFormat,
        locale: locale,
        headerRenderer: headerRenderer,
        customPredefinedRangeLabel: customPredefinedRangeLabel,
        fromLabel: fromLabel,
        startTimeLabel: startTimeLabel,
        toLabel: toLabel,
        endTimeLabel: endTimeLabel,
        onClose: onClose,
        setOuterState: this.setOuterState
      }), /*#__PURE__*/React.createElement(BaseDropdownFooter, getTestAttributes("".concat(testId, "_FOOTER")), /*#__PURE__*/React.createElement(ButtonGroup, _extends({}, getTestAttributes("".concat(testId, "_BUTTON_GROUP")), {
        small: true
      }), /*#__PURE__*/React.createElement(Button, {
        testId: "".concat(testId, "_FINISH_BUTTON"),
        size: buttonSize.small,
        onClick: this.onApply,
        isDisabled: !isEndTimeValid
      }, finishButtonLabel), /*#__PURE__*/React.createElement(Button, {
        testId: "".concat(testId, "_CLEAR_BUTTON"),
        variant: buttonVariant.secondary,
        size: buttonSize.small,
        onClick: this.onClear
      }, clearButtonLabel)))));
    }
  }]);
}(PureComponent);
DateTimeRangeSelectorDropdown.propTypes = {
  theme: PropTypes.object,
  clearButtonLabel: PropTypes.string.isRequired,
  finishButtonLabel: PropTypes.string.isRequired,
  otherCalendarProps: PropTypes.object,
  hidePredefinedRanges: PropTypes.bool,
  hideTime: PropTypes.bool,
  endTimeErrorMessage: PropTypes.string.isRequired,
  fromLabel: PropTypes.string.isRequired,
  startTimeLabel: PropTypes.string.isRequired,
  toLabel: PropTypes.string.isRequired,
  endTimeLabel: PropTypes.string.isRequired,
  predefinedRanges: PropTypes.array.isRequired,
  predefinedRange: PropTypes.object.isRequired,
  customPredefinedRangeLabel: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  onRangeChange: PropTypes.func.isRequired,
  dateTimeRange: PropTypes.object,
  testId: PropTypes.string,
  dateFormat: PropTypes.string.isRequired,
  timeFormat: PropTypes.string.isRequired,
  locale: PropTypes.object,
  dropdownRef: PropTypes.func,
  style: PropTypes.object.isRequired,
  headerRenderer: PropTypes.func
};
DateTimeRangeSelectorDropdown.defaultProps = {
  otherCalendarProps: {},
  hidePredefinedRanges: false,
  hideTime: false,
  onClose: noop,
  testId: 'DATE_TIME_RANGE_SELECTOR_DROPDOWN',
  dropdownRef: undefined,
  dateTimeRange: undefined,
  locale: undefined,
  headerRenderer: undefined
};
export default DateTimeRangeSelectorDropdown;