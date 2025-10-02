function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import isUndefined from 'lodash.isundefined';
import { getTestAttributes } from '@8x8/oxygen-config';
import { ArrowDownSolidIcon, CalendarIcon, CloseIcon } from '@8x8/oxygen-icon';
import { InputContainer, InputIcon, InputIconLeft, InputTitle } from '../styled/StyledDateTimeSelectorInput';
var DateTimeRangeSelectorInput = function DateTimeRangeSelectorInput(_ref) {
  var hasError = _ref.hasError,
    IconLeft = _ref.iconLeft,
    id = _ref.id,
    inputIcon = _ref.inputIcon,
    isOpen = _ref.isOpen,
    size = _ref.size,
    isClearable = _ref.isClearable,
    isDisabled = _ref.isDisabled,
    isValueSelected = _ref.isValueSelected,
    onClear = _ref.onClear,
    onClick = _ref.onClick,
    title = _ref.title,
    theme = _ref.theme,
    popperAnchorRef = _ref.popperAnchorRef,
    setInputRef = _ref.setInputRef,
    testId = _ref.testId;
  var iconColor = theme.iconColor,
    placeholderColor = theme.placeholderColor,
    isClassic = theme.isClassic;
  var setRef = function setRef(node) {
    popperAnchorRef(node);
    setInputRef(node);
  };
  var getInputIcon = function getInputIcon() {
    var iconProps = _objectSpread(_objectSpread({}, getTestAttributes("".concat(testId, "_ICON"))), {}, {
      isDisabled: isDisabled,
      color: iconColor,
      reverse: isOpen
    });
    if (isUndefined(inputIcon)) {
      return /*#__PURE__*/React.createElement(InputIcon, _extends({}, iconProps, {
        as: isClassic ? ArrowDownSolidIcon : CalendarIcon
      }));
    }
    if (typeof inputIcon === 'function') {
      var Icon = inputIcon;
      return /*#__PURE__*/React.createElement(Icon, iconProps);
    }
    return inputIcon;
  };
  var handleOnClear = function handleOnClear(e) {
    e.stopPropagation();
    onClear();
  };
  return /*#__PURE__*/React.createElement(InputContainer, _extends({
    "aria-disabled": isDisabled,
    "aria-invalid": hasError,
    hasError: hasError,
    id: id
  }, getTestAttributes(testId), {
    isOpen: isOpen,
    isClearable: isClearable,
    isDisabled: isDisabled,
    size: size,
    onClick: onClick,
    ref: setRef,
    title: title,
    isPlaceholder: !isValueSelected
  }), IconLeft && /*#__PURE__*/React.createElement(InputIconLeft, null, /*#__PURE__*/React.createElement(IconLeft, {
    isDisabled: isDisabled,
    color: isValueSelected ? iconColor : placeholderColor
  })), /*#__PURE__*/React.createElement(InputTitle, null, title), isClearable && !isOpen && isValueSelected && /*#__PURE__*/React.createElement(CloseIcon, _extends({}, getTestAttributes("".concat(testId, "_CLEAR_ICON")), {
    theme: {
      linkColor: theme.clearIconColor,
      hoverColor: theme.clearIconHoverColor
    },
    link: true,
    isOpen: isOpen,
    onClick: handleOnClear
  })), getInputIcon());
};
DateTimeRangeSelectorInput.propTypes = {
  inputIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  iconLeft: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.elementType]),
  hasError: PropTypes.bool,
  isOpen: PropTypes.bool,
  size: PropTypes.string.isRequired,
  isClearable: PropTypes.bool,
  isDisabled: PropTypes.bool.isRequired,
  isValueSelected: PropTypes.bool.isRequired,
  onClear: PropTypes.func,
  onClick: PropTypes.func,
  theme: PropTypes.object,
  popperAnchorRef: PropTypes.func,
  setInputRef: PropTypes.func,
  title: PropTypes.string,
  id: PropTypes.string,
  testId: PropTypes.string
};
DateTimeRangeSelectorInput.defaultProps = {
  inputIcon: undefined,
  iconLeft: null,
  hasError: false,
  isClearable: false,
  isOpen: false,
  onClear: noop,
  onClick: noop,
  popperAnchorRef: noop,
  setInputRef: noop,
  title: '',
  id: undefined,
  testId: 'DATE_TIME_RANGE_SELECTOR_INPUT'
};
export default DateTimeRangeSelectorInput;