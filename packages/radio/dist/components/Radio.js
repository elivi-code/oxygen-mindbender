var _excluded = ["theme", "testId", "htmlFor", "label", "value", "name", "infoBoxText", "infoBoxButtonLabel", "isChecked", "isDisabled", "onChange", "inputProps", "labelProps"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) { ; } } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { withTheme } from '@8x8/oxygen-config';
import Label from '@8x8/oxygen-label';
import { LabelTextWrapper, RadioContainer } from '../styled';
import RadioInput from './RadioInput';
import { RadioGroupContext } from './RadioGroup';
var Radio = function Radio(_ref) {
  var theme = _ref.theme,
    testId = _ref.testId,
    htmlFor = _ref.htmlFor,
    label = _ref.label,
    value = _ref.value,
    name = _ref.name,
    infoBoxText = _ref.infoBoxText,
    infoBoxButtonLabel = _ref.infoBoxButtonLabel,
    isChecked = _ref.isChecked,
    isDisabled = _ref.isDisabled,
    onChange = _ref.onChange,
    inputProps = _ref.inputProps,
    labelProps = _ref.labelProps,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isFocused = _useState2[0],
    setFocus = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isPressed = _useState4[0],
    setIsPressed = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isHovered = _useState6[0],
    setIsHovered = _useState6[1];
  var handleMouseEnter = function handleMouseEnter() {
    if (isDisabled) {
      return;
    }
    setIsHovered(true);
  };
  var handleMouseLeave = function handleMouseLeave() {
    if (isDisabled) {
      return;
    }
    setIsHovered(false);
  };
  var handleOnChange = function handleOnChange(onChangeCb) {
    onChangeCb(value);
  };
  var handleClick = function handleClick(ev) {
    // this is to make the difference between actual click event and the other one caused by pressing UP/DOWN arrow keys
    if (ev.nativeEvent.clientX) {
      setIsPressed(true);
    } else if (isPressed) {
      setIsPressed(false);
    }
  };
  return /*#__PURE__*/React.createElement(RadioGroupContext.Consumer, null, function (radioGroup) {
    var radioChecked = isChecked;
    var radioName = name;
    var radioOnChange = onChange;
    if (radioGroup) {
      // if the radio is not used as standalone component, and it's controlled through the group
      // we must use the props from group context
      radioChecked = _typeof(radioGroup.selectedValue) === 'object' && _typeof(value) === 'object' ? radioGroup.selectedValue.id === value.id : radioGroup.selectedValue === value;
      radioName = radioGroup.name;
      radioOnChange = radioGroup.onChange;
    }
    return /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(RadioContainer, _extends({
      isDisabled: isDisabled,
      isFocused: isFocused
    }, rest), /*#__PURE__*/React.createElement(Label, _extends({
      theme: theme.label,
      htmlFor: htmlFor,
      value: /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement(RadioInput, _extends({}, inputProps, {
        testId: testId,
        name: radioName,
        isChecked: radioChecked,
        isDisabled: isDisabled,
        isFocused: isFocused,
        isHovered: isHovered,
        isPressed: isPressed,
        hasLabel: !!label,
        onBlur: function onBlur() {
          return setFocus(false);
        },
        onChange: function onChange() {
          return handleOnChange(radioOnChange);
        },
        onClick: handleClick,
        onFocus: function onFocus() {
          return setFocus(true);
        },
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave
      })), !!label && /*#__PURE__*/React.createElement(LabelTextWrapper, {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave
      }, label)),
      infoBoxText: infoBoxText,
      infoBoxButtonLabel: infoBoxButtonLabel,
      isDisabled: isDisabled,
      shouldWrapText: true
    }, labelProps))));
  });
};
Radio.propTypes = {
  /**
   * Radio theme
   */
  theme: PropTypes.object,
  /**
   * Radio test id
   */
  testId: PropTypes.string,
  /**
   * Specifies which element the label is bound to
   */
  htmlFor: PropTypes.string,
  /**
   * Specifies the label content for the radio input
   */
  label: PropTypes.node,
  /**
   * Radio input value (used to match with the selected value of the group)
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool, PropTypes.shape({
    id: PropTypes.string.isRequired
  })]),
  /**
   * Specifies the name prop for the radio input
   */
  name: PropTypes.string,
  /**
   * Shows info icon and renders text inside Tooltip
   */
  infoBoxText: PropTypes.node,
  /**
   * Add accessible name to info button label
   */
  infoBoxButtonLabel: PropTypes.string,
  /**
   * Specifies if the input is checked
   */
  isChecked: PropTypes.bool,
  /**
   * Radio inputs to be rendered
   */
  isDisabled: PropTypes.bool,
  /**
   * Callback for the radio input
   */
  onChange: PropTypes.func,
  /**
   * Rest of props pass into Input component
   */
  inputProps: PropTypes.object,
  /**
   * Rest of props pass into Label component
   */
  labelProps: PropTypes.object
};
Radio.defaultProps = {
  theme: {},
  testId: 'RADIO',
  htmlFor: null,
  label: '',
  value: '',
  name: undefined,
  infoBoxText: undefined,
  infoBoxButtonLabel: undefined,
  inputProps: undefined,
  labelProps: undefined,
  isChecked: false,
  isDisabled: false,
  onChange: function onChange() {
    return false;
  }
};

// for testing only
export { Radio };
export default withTheme(Radio, 'radio');