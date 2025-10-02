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
import { ThemeProvider } from 'styled-components';
import getHours from 'date-fns/getHours';
import getMinutes from 'date-fns/getMinutes';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import format from 'date-fns/format';
import isBefore from 'date-fns/isBefore';
import PropTypes from 'prop-types';
import find from 'lodash.find';
import { getTestAttributes, withTheme } from '@8x8/oxygen-config';
import Label from '@8x8/oxygen-label';
import Input from '@8x8/oxygen-input';
import TimeSelector from '@8x8/oxygen-time-selector';
import Calendar, { DISPLAY_MODE } from '@8x8/oxygen-calendar';
import DateTimeRangeSelectorPredefinedList from './DateTimeRangeSelectorPredefinedList';
import CUSTOM_RANGE_ID from '../utils/constants';
import defaultPredefinedRanges from '../utils/predefinedRanges';
import { CalendarContainer, CalendarWrapper, Content, DateInput, DateTimeInputContainer, DateTimeInputs, EndTimeError, TimeInput, TimeSelectorPortalNode } from '../styled';
var setHoursAndMinutes = function setHoursAndMinutes(date, hours, minutes) {
  return setHours(setMinutes(date, minutes), hours);
};
export var DateTimeRangePicker = /*#__PURE__*/function (_PureComponent) {
  function DateTimeRangePicker(props) {
    var _this;
    _classCallCheck(this, DateTimeRangePicker);
    _this = _callSuper(this, DateTimeRangePicker, [props]);
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
    _defineProperty(_this, "onStartTimeChange", function (time) {
      if (!time) {
        _this.setState(function (_ref) {
          var _ref$dateRange = _ref.dateRange,
            startDate = _ref$dateRange.startDate,
            endDate = _ref$dateRange.endDate;
          return {
            dateRange: {
              startDate: startDate,
              endDate: endDate
            }
          };
        }, _this.validateTimeRangeOnDateTimeChange);
        return;
      }
      _this.setState(function (_ref2) {
        var _ref2$dateRange = _ref2.dateRange,
          startDate = _ref2$dateRange.startDate,
          endDate = _ref2$dateRange.endDate;
        return {
          dateRange: {
            startDate: setHoursAndMinutes(startDate, time.hours, time.minutes),
            endDate: endDate
          },
          predefinedRange: {
            id: CUSTOM_RANGE_ID
          }
        };
      }, _this.validateTimeRangeOnDateTimeChange);
    });
    _defineProperty(_this, "onEndTimeChange", function (time) {
      if (!time) {
        _this.setState(function (_ref3) {
          var _ref3$dateRange = _ref3.dateRange,
            startDate = _ref3$dateRange.startDate,
            endDate = _ref3$dateRange.endDate;
          return {
            dateRange: {
              startDate: startDate,
              endDate: endDate
            }
          };
        }, _this.validateTimeRangeOnDateTimeChange);
        return;
      }
      _this.setState(function (_ref4) {
        var _ref4$dateRange = _ref4.dateRange,
          startDate = _ref4$dateRange.startDate,
          endDate = _ref4$dateRange.endDate;
        return {
          dateRange: {
            startDate: startDate,
            endDate: setHoursAndMinutes(endDate, time.hours, time.minutes)
          },
          predefinedRange: {
            id: CUSTOM_RANGE_ID
          }
        };
      }, _this.validateTimeRangeOnDateTimeChange);
    });
    _defineProperty(_this, "onPredefinedListItemChange", function (_ref5) {
      var id = _ref5.id,
        value = _ref5.value;
      var predefinedRanges = _this.props.predefinedRanges;
      var currentRange = find(predefinedRanges, {
        id: id
      });
      if (!currentRange) {
        _this.setState({
          predefinedRange: {
            id: CUSTOM_RANGE_ID
          }
        }, function () {
          if (_this.props.setOuterState) {
            _this.props.setOuterState({
              predefinedRange: _this.state.predefinedRange
            });
          }
          if (_this.props.onRangeChange) _this.props.onRangeChange({
            dateTime: {
              startDate: new Date(_this.state.dateRange.startDate),
              endDate: new Date(_this.state.dateRange.endDate)
            },
            predefinedRange: _this.state.predefinedRange
          });
          _this.validateTimeRangeOnDateTimeChange();
        });
        return;
      }
      var dateTimeRange = currentRange.dateTimeRange;
      var dateRange = dateTimeRange(value);
      _this.setState({
        predefinedRange: {
          id: id,
          value: value
        },
        dateRange: dateRange,
        calendarRange: dateRange
      }, function () {
        if (_this.props.setOuterState) _this.props.setOuterState({
          predefinedRange: {
            id: id,
            value: value
          },
          dateRange: dateRange,
          calendarRange: dateRange
        });
        if (_this.props.onRangeChange) _this.props.onRangeChange({
          dateTime: {
            startDate: new Date(_this.state.dateRange.startDate),
            endDate: new Date(_this.state.dateRange.endDate)
          },
          predefinedRange: _this.state.predefinedRange
        });
        _this.validateTimeRangeOnDateTimeChange();
      });
    });
    _defineProperty(_this, "onCalendarRangeChange", function (_ref6) {
      var startDate = _ref6.startDate,
        endDate = _ref6.endDate;
      var _this$state$dateRange = _this.state.dateRange,
        currentStartDate = _this$state$dateRange.startDate,
        currentEndDate = _this$state$dateRange.endDate;
      var startHours = getHours(currentStartDate);
      var startMinutes = getMinutes(currentStartDate);
      var endHours = getHours(currentEndDate);
      var endMinutes = getMinutes(currentEndDate);
      _this.setState({
        dateRange: {
          startDate: setHoursAndMinutes(startDate, startHours, startMinutes),
          endDate: setHoursAndMinutes(endDate || startDate, endHours, endMinutes)
        },
        predefinedRange: {
          id: CUSTOM_RANGE_ID
        },
        calendarRange: {
          startDate: startDate,
          endDate: endDate
        }
      }, _this.validateTimeRangeOnDateTimeChange);
    });
    _defineProperty(_this, "timeRangeIsInvalid", function () {
      var _this$state$dateRange2 = _this.state.dateRange,
        startDate = _this$state$dateRange2.startDate,
        endDate = _this$state$dateRange2.endDate;
      return endDate && isBefore(endDate, startDate);
    });
    _defineProperty(_this, "validateTimeRangeOnDateTimeChange", function () {
      var isEndTimeValid = _this.state.isEndTimeValid;
      var isTimeRangeInvalid = _this.timeRangeIsInvalid();
      _this.setState({
        isEndTimeValid: !isTimeRangeInvalid
      }, _this.props.setOuterState && _this.props.setOuterState({
        isEndTimeValid: !isTimeRangeInvalid
      }));
      if (isTimeRangeInvalid) return;
      if (_this.props.setOuterState) _this.props.setOuterState({
        predefinedRange: _this.state.predefinedRange,
        dateRange: _this.state.dateRange
      });
      if (isEndTimeValid) {
        if (_this.props.setOuterState) _this.props.setOuterState({
          isEndTimeValid: true,
          dateRange: _this.state.dateRange,
          predefinedRange: _this.state.predefinedRange
        });
        if (_this.props.onRangeChange) {
          if (_this.state.predefinedRange.id === CUSTOM_RANGE_ID) {
            _this.props.onRangeChange({
              dateTime: {
                startDate: new Date(_this.state.dateRange.startDate),
                endDate: new Date(_this.state.dateRange.endDate)
              }
            });
          } else {
            _this.props.onRangeChange({
              predefinedRange: _this.state.predefinedRange
            });
          }
        }
      }
    });
    var defaultState = _this.getState();
    _this.state = _objectSpread({
      isEndTimeValid: true
    }, defaultState);
    _this.portalRef = /*#__PURE__*/React.createRef();
    return _this;
  }
  _inherits(DateTimeRangePicker, _PureComponent);
  return _createClass(DateTimeRangePicker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // If the component is within its intended parent, we don't want to run this block
      if (!this.props.setOuterState) {
        var _this$props2 = this.props,
          dateTimeRange = _this$props2.dateTimeRange,
          predefinedRange = _this$props2.predefinedRange;
        var previousDateTimeRange = prevProps.dateTimeRange,
          previousPredefinedRange = prevProps.predefinedRange;
        if (predefinedRange === previousPredefinedRange && dateTimeRange === previousDateTimeRange) {
          return;
        }
        this.updateRangeStates(this.getState());
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        otherCalendarProps = _this$props3.otherCalendarProps,
        hidePredefinedRanges = _this$props3.hidePredefinedRanges,
        hideTime = _this$props3.hideTime,
        fromLabel = _this$props3.fromLabel,
        startTimeLabel = _this$props3.startTimeLabel,
        toLabel = _this$props3.toLabel,
        endTimeLabel = _this$props3.endTimeLabel,
        endTimeErrorMessage = _this$props3.endTimeErrorMessage,
        predefinedRanges = _this$props3.predefinedRanges,
        testId = _this$props3.testId,
        theme = _this$props3.theme,
        dateFormat = _this$props3.dateFormat,
        timeFormat = _this$props3.timeFormat,
        locale = _this$props3.locale,
        headerRenderer = _this$props3.headerRenderer,
        customPredefinedRangeLabel = _this$props3.customPredefinedRangeLabel;
      var _this$state = this.state,
        predefinedRange = _this$state.predefinedRange,
        isEndTimeValid = _this$state.isEndTimeValid,
        _this$state$dateRange3 = _this$state.dateRange,
        startDate = _this$state$dateRange3.startDate,
        endDate = _this$state$dateRange3.endDate,
        calendarRange = _this$state.calendarRange;
      var startTimeValue = {
        hours: getHours(startDate),
        minutes: getMinutes(startDate),
        seconds: 0
      };
      var endTimeValue = {
        hours: getHours(endDate),
        minutes: getMinutes(endDate),
        seconds: 0
      };
      return /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement(Content, getTestAttributes("".concat(testId, "_CONTENT")), !hidePredefinedRanges && /*#__PURE__*/React.createElement(DateTimeRangeSelectorPredefinedList, {
        theme: theme,
        testId: "".concat(testId, "_PREDEFINED_LIST"),
        ranges: predefinedRanges,
        selectedRange: predefinedRange,
        customPredefinedRangeLabel: customPredefinedRangeLabel,
        onRangeSelect: this.onPredefinedListItemChange
      }), /*#__PURE__*/React.createElement(CalendarContainer, getTestAttributes("".concat(testId, "_CALENDAR_CONTAINER")), headerRenderer && headerRenderer(this.props), !hideTime && !headerRenderer && /*#__PURE__*/React.createElement(DateTimeInputs, getTestAttributes("".concat(testId, "_DATE_TIME_INPUTS")), /*#__PURE__*/React.createElement(DateTimeInputContainer, getTestAttributes("".concat(testId, "_DATE_TIME_INPUT_CONTAINER_START")), /*#__PURE__*/React.createElement(TimeSelectorPortalNode, {
        ref: this.portalRef
      }), /*#__PURE__*/React.createElement(DateInput, getTestAttributes("".concat(testId, "_DATE_INPUT_START")), /*#__PURE__*/React.createElement(Label, {
        htmlFor: "".concat(testId, "_DATE_INPUT_START_FIELD"),
        value: fromLabel,
        testId: "".concat(testId, "_DATE_INPUT_START_LABEL")
      }), /*#__PURE__*/React.createElement(Input, _extends({
        id: "".concat(testId, "_DATE_INPUT_START_FIELD")
      }, getTestAttributes("".concat(testId, "_DATE_INPUT_START_FIELD")), {
        fixed: true,
        value: format(startDate, dateFormat, {
          locale: locale
        }),
        size: "small"
      }))), /*#__PURE__*/React.createElement(TimeInput, getTestAttributes("".concat(testId, "_TIME_INPUT_START")), /*#__PURE__*/React.createElement(Label, {
        value: startTimeLabel,
        testId: "".concat(testId, "_TIME_INPUT_START_LABEL")
      }), /*#__PURE__*/React.createElement(TimeSelector, {
        timeDisplayFormat: timeFormat,
        size: "small",
        placeholder: startTimeLabel,
        value: startTimeValue,
        testId: "".concat(testId, "_START_TIME_SELECTOR"),
        onChange: this.onStartTimeChange,
        portalRef: this.portalRef
      }))), /*#__PURE__*/React.createElement(DateTimeInputContainer, getTestAttributes("".concat(testId, "_DATE_TIME_INPUT_CONTAINER_END")), /*#__PURE__*/React.createElement(DateInput, getTestAttributes("".concat(testId, "_DATE_INPUT_END")), /*#__PURE__*/React.createElement(Label, {
        htmlFor: "".concat(testId, "_DATE_INPUT_END_FIELD"),
        value: toLabel,
        testId: "".concat(testId, "_DATE_INPUT_END_LABEL")
      }), /*#__PURE__*/React.createElement(Input, _extends({
        id: "".concat(testId, "_DATE_INPUT_END_FIELD")
      }, getTestAttributes("".concat(testId, "_DATE_INPUT_END_FIELD")), {
        fixed: true,
        value: format(endDate, dateFormat, {
          locale: locale
        }),
        size: "small"
      }))), /*#__PURE__*/React.createElement(TimeInput, getTestAttributes("".concat(testId, "_TIME_INPUT_END")), /*#__PURE__*/React.createElement(Label, {
        value: endTimeLabel,
        testId: "".concat(testId, "_TIME_INPUT_END_LABEL")
      }), /*#__PURE__*/React.createElement(TimeSelector, {
        hasError: !isEndTimeValid,
        timeDisplayFormat: timeFormat,
        size: "small",
        placeholder: endTimeLabel,
        value: endTimeValue,
        testId: "".concat(testId, "_END_TIME_SELECTOR"),
        onChange: this.onEndTimeChange,
        portalRef: this.portalRef
      })), !isEndTimeValid && /*#__PURE__*/React.createElement(EndTimeError, getTestAttributes("".concat(testId, "_DATE_TIME_INPUTS_ERROR")), endTimeErrorMessage))), /*#__PURE__*/React.createElement(CalendarWrapper, getTestAttributes("".concat(testId, "_CALENDAR_WRAPPER")), /*#__PURE__*/React.createElement(Calendar, _extends({
        showMonthYearPickers: false
      }, otherCalendarProps, {
        testId: "".concat(testId, "_CALENDAR"),
        displayMode: DISPLAY_MODE.DATE_RANGE,
        locale: locale,
        range: calendarRange,
        onRangeChange: this.onCalendarRangeChange,
        enableMaxWidth: false
      }))))));
    }
  }]);
}(PureComponent);
DateTimeRangePicker.propTypes = {
  dateTimeRange: PropTypes.object,
  otherCalendarProps: PropTypes.object,
  hidePredefinedRanges: PropTypes.bool,
  hideTime: PropTypes.bool,
  endTimeErrorMessage: PropTypes.string.isRequired,
  fromLabel: PropTypes.string.isRequired,
  startTimeLabel: PropTypes.string.isRequired,
  toLabel: PropTypes.string.isRequired,
  endTimeLabel: PropTypes.string.isRequired,
  predefinedRanges: PropTypes.array,
  predefinedRange: PropTypes.object,
  customPredefinedRangeLabel: PropTypes.string.isRequired,
  testId: PropTypes.string,
  dateFormat: PropTypes.string.isRequired,
  timeFormat: PropTypes.string.isRequired,
  locale: PropTypes.object,
  headerRenderer: PropTypes.func,
  setOuterState: PropTypes.func,
  theme: PropTypes.object,
  onRangeChange: PropTypes.func
};
DateTimeRangePicker.defaultProps = {
  otherCalendarProps: {},
  hidePredefinedRanges: false,
  hideTime: false,
  testId: 'DATE_TIME_RANGE_SELECTOR_DROPDOWN',
  locale: undefined,
  headerRenderer: undefined,
  predefinedRange: {
    id: CUSTOM_RANGE_ID
  },
  predefinedRanges: defaultPredefinedRanges
};
export default withTheme(DateTimeRangePicker, 'dateTimeRangeSelector');