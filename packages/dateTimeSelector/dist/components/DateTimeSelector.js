function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) { ; } } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Manager, Reference, Popper } from 'react-popper';
import noop from 'lodash.noop';
import isUndefined from 'lodash.isundefined';
import format from 'date-fns/format';
import { withTheme } from '@8x8/oxygen-config';
import { OutsideEventBehavior } from '@8x8/oxygen-utils';
import DateTimeSelectorInput from '@8x8/oxygen-date-time-base';
import DateTimeSelectorDropdown from './DateTimeSelectorDropdown';
function DateTimeSelector(_ref) {
  var closeOnDateChange = _ref.closeOnDateChange,
    hasError = _ref.hasError,
    placeholder = _ref.placeholder,
    finishButtonLabel = _ref.finishButtonLabel,
    iconLeft = _ref.iconLeft,
    id = _ref.id,
    inputIcon = _ref.inputIcon,
    isClearable = _ref.isClearable,
    isDisabled = _ref.isDisabled,
    isLoading = _ref.isLoading,
    loadingMessage = _ref.loadingMessage,
    onBlur = _ref.onBlur,
    onDateChange = _ref.onDateChange,
    onFocus = _ref.onFocus,
    otherCalendarProps = _ref.otherCalendarProps,
    size = _ref.size,
    testId = _ref.testId,
    theme = _ref.theme,
    titleFormatPattern = _ref.titleFormatPattern,
    titleFormatter = _ref.titleFormatter,
    value = _ref.value;
  var inputRef = /*#__PURE__*/React.createRef();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDropdownVisible = _useState2[0],
    setIsDropdownVisible = _useState2[1];
  var handleSetIsDropdownVisible = function handleSetIsDropdownVisible(dropDownVisibleValue) {
    if (!dropDownVisibleValue) {
      onBlur();
    }
    setIsDropdownVisible(dropDownVisibleValue);
  };
  var setInputRef = function setInputRef(node) {
    inputRef.current = node;
  };
  var onClickOutside = function onClickOutside(e) {
    var _inputRef$current, _inputRef$current$con;
    // handle clicking on the original input
    if (inputRef !== null && inputRef !== void 0 && (_inputRef$current = inputRef.current) !== null && _inputRef$current !== void 0 && (_inputRef$current$con = _inputRef$current.contains) !== null && _inputRef$current$con !== void 0 && _inputRef$current$con.call(_inputRef$current, e.target)) {
      return;
    }
    handleSetIsDropdownVisible(false);
  };
  var getTitle = function getTitle() {
    if (!value) {
      return placeholder;
    }
    if (titleFormatter) {
      return titleFormatter(value);
    }
    return format(value, titleFormatPattern);
  };
  var onClear = function onClear() {
    onFocus();
    onDateChange(undefined);
    onBlur();
  };
  var onClick = function onClick() {
    if (!isDropdownVisible) {
      onFocus();
    }
    handleSetIsDropdownVisible(!isDropdownVisible);
  };
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(Manager, null, /*#__PURE__*/React.createElement(Reference, null, function (_ref2) {
    var ref = _ref2.ref;
    return /*#__PURE__*/React.createElement(DateTimeSelectorInput, {
      hasError: hasError,
      iconLeft: iconLeft,
      id: id,
      isClearable: isClearable,
      isDisabled: isDisabled,
      isOpen: isDropdownVisible,
      inputIcon: inputIcon,
      isValueSelected: !isUndefined(value),
      onClear: onClear,
      onClick: onClick,
      popperAnchorRef: ref,
      size: size,
      testId: "".concat(testId, "_INPUT"),
      theme: theme,
      title: getTitle(),
      setInputRef: setInputRef
    });
  }), isDropdownVisible && /*#__PURE__*/React.createElement(Popper, {
    placement: "bottom",
    positionFixed: true
  }, function (_ref3) {
    var ref = _ref3.ref,
      style = _ref3.style;
    return /*#__PURE__*/React.createElement(OutsideEventBehavior, {
      onClick: onClickOutside
    }, /*#__PURE__*/React.createElement(DateTimeSelectorDropdown, {
      closeOnDateChange: closeOnDateChange,
      dropdownRef: ref,
      finishButtonLabel: finishButtonLabel,
      isLoading: isLoading,
      loadingMessage: loadingMessage,
      onDateChange: onDateChange,
      otherCalendarProps: otherCalendarProps,
      setIsDropdownVisible: handleSetIsDropdownVisible,
      style: style,
      testId: "".concat(testId, "_DROPDOWN"),
      value: value
    }));
  })));
}
DateTimeSelector.propTypes = {
  closeOnDateChange: PropTypes.bool,
  hasError: PropTypes.bool,
  placeholder: PropTypes.string,
  finishButtonLabel: PropTypes.string,
  inputIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  iconLeft: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.elementType]),
  isClearable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  loadingMessage: PropTypes.string,
  onBlur: PropTypes.func,
  onDateChange: PropTypes.func,
  onFocus: PropTypes.func,
  otherCalendarProps: PropTypes.object,
  id: PropTypes.string,
  size: PropTypes.string,
  testId: PropTypes.string,
  theme: PropTypes.object,
  titleFormatPattern: PropTypes.string,
  titleFormatter: PropTypes.func,
  value: PropTypes.object
};
DateTimeSelector.defaultProps = {
  closeOnDateChange: true,
  hasError: false,
  placeholder: 'Select Date',
  finishButtonLabel: 'Finish',
  inputIcon: undefined,
  iconLeft: null,
  isClearable: false,
  isDisabled: false,
  isLoading: false,
  loadingMessage: 'Loading...',
  onBlur: noop,
  onDateChange: noop,
  onFocus: noop,
  otherCalendarProps: {},
  id: undefined,
  size: 'large',
  testId: 'DATE_TIME_SELECTOR',
  titleFormatPattern: 'MM/dd/yyyy',
  titleFormatter: undefined,
  value: undefined
};
export default withTheme(DateTimeSelector, 'dateTimeSelector');