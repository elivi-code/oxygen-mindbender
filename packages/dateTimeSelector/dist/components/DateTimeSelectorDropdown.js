function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) { ; } } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Calendar, { DISPLAY_MODE } from '@8x8/oxygen-calendar';
import Button, { buttonSize } from '@8x8/oxygen-button';
import { BaseDropdownContainer, BaseDropdownFooter, BasePopperContainer } from '@8x8/oxygen-date-time-base';
import { DropdownSpinner } from '../styled/DropdownSpinner';
function DateTimeSelectorDropDown(props) {
  var closeOnDateChange = props.closeOnDateChange,
    dropdownRef = props.dropdownRef,
    isLoading = props.isLoading,
    loadingMessage = props.loadingMessage,
    onDateChange = props.onDateChange,
    otherCalendarProps = props.otherCalendarProps,
    finishButtonLabel = props.finishButtonLabel,
    setIsDropdownVisible = props.setIsDropdownVisible,
    style = props.style,
    testId = props.testId,
    value = props.value;
  var _useState = useState(value),
    _useState2 = _slicedToArray(_useState, 2),
    selectedValue = _useState2[0],
    setSelectedValue = _useState2[1];
  var changeDate = function changeDate(date) {
    setIsDropdownVisible(false);
    onDateChange(date);
  };
  return /*#__PURE__*/React.createElement(BasePopperContainer, {
    ref: dropdownRef,
    style: style
  }, /*#__PURE__*/React.createElement(BaseDropdownContainer, null, isLoading ? /*#__PURE__*/React.createElement(DropdownSpinner, {
    loadingMessage: loadingMessage
  }) : /*#__PURE__*/React.createElement(Calendar, _extends({
    testId: "".concat(testId, "_CALENDAR"),
    months: 1,
    showMonthYearPickers: false
  }, otherCalendarProps, {
    date: selectedValue,
    displayMode: DISPLAY_MODE.DATE,
    onDateChange: closeOnDateChange ? changeDate : setSelectedValue
  })), !closeOnDateChange && /*#__PURE__*/React.createElement(BaseDropdownFooter, null, /*#__PURE__*/React.createElement(Button, {
    testId: "".concat(testId, "_FINISH_BUTTON"),
    onClick: function onClick() {
      return changeDate(selectedValue);
    },
    size: buttonSize.small
  }, finishButtonLabel))));
}
DateTimeSelectorDropDown.propTypes = {
  closeOnDateChange: PropTypes.bool.isRequired,
  dropdownRef: PropTypes.func.isRequired,
  finishButtonLabel: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  loadingMessage: PropTypes.string,
  onDateChange: PropTypes.func.isRequired,
  otherCalendarProps: PropTypes.object.isRequired,
  setIsDropdownVisible: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
  testId: PropTypes.string,
  value: PropTypes.object
};
DateTimeSelectorDropDown.defaultProps = {
  testId: 'DATE_TIME_SELECTOR_DROPDOWN',
  value: undefined
};
export default DateTimeSelectorDropDown;