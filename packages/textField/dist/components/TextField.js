function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["action", "actionLabel", "actionTarget", "description", "fixed", "focus", "fullWidth", "hasError", "iconLeft", "iconRight", "id", "infoBoxText", "infoBoxButtonLabel", "isDisabled", "isReadOnly", "isRequired", "label", "labelOrientation", "name", "onBlur", "onChange", "onFocus", "onKeyDown", "onKeyUp", "otherActionProps", "otherInputProps", "otherLabelProps", "actionProps", "inputProps", "labelProps", "placeholder", "prefix", "size", "suffix", "testId", "theme", "type", "value"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import { ThemeProvider } from 'styled-components';
import { actionTargets } from '@8x8/oxygen-label';
import Input, { inputType } from '@8x8/oxygen-input';
import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import { inputSize } from '@8x8/oxygen-constants';
import THEME_NAME from '../constants/themeName';
import { TextFieldLabel, TextFieldWrapper, TextFieldDescription, TextFieldContainer } from '../styled';
var TextField = function TextField(_ref) {
  var action = _ref.action,
    actionLabel = _ref.actionLabel,
    actionTarget = _ref.actionTarget,
    description = _ref.description,
    fixed = _ref.fixed,
    focus = _ref.focus,
    fullWidth = _ref.fullWidth,
    hasError = _ref.hasError,
    iconLeft = _ref.iconLeft,
    iconRight = _ref.iconRight,
    id = _ref.id,
    infoBoxText = _ref.infoBoxText,
    infoBoxButtonLabel = _ref.infoBoxButtonLabel,
    isDisabled = _ref.isDisabled,
    isReadOnly = _ref.isReadOnly,
    isRequired = _ref.isRequired,
    label = _ref.label,
    labelOrientation = _ref.labelOrientation,
    name = _ref.name,
    onBlur = _ref.onBlur,
    onChange = _ref.onChange,
    onFocus = _ref.onFocus,
    onKeyDown = _ref.onKeyDown,
    onKeyUp = _ref.onKeyUp,
    otherActionProps = _ref.otherActionProps,
    otherInputProps = _ref.otherInputProps,
    otherLabelProps = _ref.otherLabelProps,
    actionProps = _ref.actionProps,
    inputProps = _ref.inputProps,
    labelProps = _ref.labelProps,
    placeholder = _ref.placeholder,
    prefix = _ref.prefix,
    size = _ref.size,
    suffix = _ref.suffix,
    testId = _ref.testId,
    theme = _ref.theme,
    type = _ref.type,
    value = _ref.value,
    restProps = _objectWithoutProperties(_ref, _excluded);
  // Preserve otherInputProps, otherActionProps, otherLabelProps for backwards compatibility
  var finalInputProps = _objectSpread(_objectSpread({}, otherInputProps), inputProps);
  var finalActionProps = _objectSpread(_objectSpread({}, otherActionProps), actionProps);
  var finalLabelProps = _objectSpread(_objectSpread({}, otherLabelProps), labelProps);
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(TextFieldWrapper, _extends({
    fullWidth: fullWidth,
    labelOrientation: labelOrientation
  }, getTestAttributes(testId), restProps), (label || actionLabel) && /*#__PURE__*/React.createElement(TextFieldLabel, _extends({
    theme: theme.label,
    htmlFor: id,
    value: label,
    infoBoxText: infoBoxText,
    infoBoxButtonLabel: infoBoxButtonLabel,
    action: action,
    actionLabel: actionLabel,
    actionTarget: actionTarget,
    isRequired: isRequired,
    isDisabled: fixed || isDisabled,
    otherActionProps: finalActionProps,
    testId: "".concat(testId, "_LABEL")
  }, finalLabelProps)), /*#__PURE__*/React.createElement(TextFieldContainer, null, /*#__PURE__*/React.createElement(Input, _extends({
    fixed: fixed,
    focus: focus,
    fullWidth: fullWidth,
    hasError: hasError,
    iconLeft: iconLeft,
    iconRight: iconRight,
    id: id,
    isDisabled: isDisabled,
    isReadOnly: isReadOnly,
    isRequired: isRequired,
    name: name,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp,
    placeholder: placeholder,
    prefix: prefix,
    size: size,
    suffix: suffix,
    testId: "".concat(testId, "_INPUT"),
    theme: theme.input,
    type: type,
    value: value
  }, finalInputProps)), description && /*#__PURE__*/React.createElement(TextFieldDescription, getTestAttributes("".concat(testId, "_DESCRIPTION")), description))));
};
TextField.propTypes = {
  /**
   * Input theme
   */
  theme: PropTypes.object,
  /**
   * Define id attribute for input element
   */
  id: PropTypes.string,
  /**
   * Define name attribute for input element
   */
  name: PropTypes.string,
  /**
   * Value / Initial value of the input
   */
  value: PropTypes.string,
  /**
   * Render placeholder text inside input
   */
  placeholder: PropTypes.string,
  /**
   * Define type of Input
   */
  type: PropTypes.oneOf(Object.values(inputType)),
  /**
   * Define Input size
   */
  size: PropTypes.oneOf(Object.values(inputSize)),
  /**
   * Show text in front of input
   */
  prefix: PropTypes.string,
  /**
   * Show text just after input
   */
  suffix: PropTypes.string,
  /**
   * Show icon inside input on the left side
   */
  iconLeft: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.element]),
  /**
   * Show icon inside input on the right side
   */
  iconRight: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.element]),
  /**
   * Tell when Input is focus
   */
  focus: PropTypes.bool,
  /**
   * Render input as pure text
   */
  fixed: PropTypes.bool,
  /**
   * Tell when Input has error
   */
  hasError: PropTypes.bool,
  /**
   * Tell when Input is disabled
   */
  isDisabled: PropTypes.bool,
  /**
   * Tell when Input is read only
   */
  isReadOnly: PropTypes.bool,
  /**
   * Tell when Input is stretched
   */
  fullWidth: PropTypes.bool,
  /**
   * Tell when required sight is visible
   */
  isRequired: PropTypes.bool,
  /**
   * Tell where label is render: top or before Input
   */
  labelOrientation: PropTypes.oneOf(['row', 'column']),
  /**
   * Renders label text
   */
  label: PropTypes.string,
  /**
   * Defines callback onClick event on label action
   */
  action: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * Renders text inside action element
   */
  actionLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Specifies type of target on action element
   */
  actionTarget: PropTypes.oneOf(Object.values(actionTargets)),
  /**
   * Renders text inside Tooltip on Label Info Box icon
   */
  infoBoxText: PropTypes.node,
  /**
   * Add accessible name to info button label
   */
  infoBoxButtonLabel: PropTypes.string,
  /**
   * Renders text just below Input
   */
  description: PropTypes.node,
  /**
   * Rest of props pass into Action component (deprecated)
   */
  otherActionProps: PropTypes.object,
  /**
   * Rest of props pass into Action component
   */
  actionProps: PropTypes.object,
  /**
   * Rest of props pass into Label component (deprecated)
   */
  otherLabelProps: PropTypes.object,
  /**
   * Rest of props pass into Label component
   */
  labelProps: PropTypes.object,
  /**
   * Rest of props pass into InputField component
   */
  inputProps: PropTypes.object,
  /**
   * Rest of props pass into InputWrapper component (deprecated)
   */
  otherInputProps: PropTypes.object,
  /**
   * Text field testId
   */
  testId: PropTypes.string,
  /**
   * Callback when the input change
   */
  onChange: PropTypes.func,
  /**
   * Standard input onkeyup event
   */
  onKeyUp: PropTypes.func,
  /**
   * Standard input onkeydown event
   */
  onKeyDown: PropTypes.func,
  /**
   * Callback when input is blurred
   */
  onBlur: PropTypes.func,
  /**
   * Callback when input is focused
   */
  onFocus: PropTypes.func
};
TextField.defaultProps = {
  action: '',
  actionLabel: '',
  actionTarget: null,
  description: '',
  fixed: false,
  focus: false,
  fullWidth: false,
  hasError: false,
  iconLeft: null,
  iconRight: null,
  id: undefined,
  infoBoxText: undefined,
  isDisabled: false,
  isReadOnly: false,
  isRequired: false,
  label: '',
  labelOrientation: 'column',
  name: undefined,
  onChange: noop,
  onKeyDown: noop,
  onKeyUp: noop,
  onFocus: noop,
  onBlur: noop,
  otherActionProps: undefined,
  actionProps: undefined,
  inputProps: undefined,
  otherInputProps: undefined,
  labelProps: undefined,
  otherLabelProps: undefined,
  placeholder: '',
  prefix: '',
  size: inputSize["default"],
  suffix: '',
  testId: 'TEXT_FIELD',
  type: inputType.TEXT,
  value: undefined
};
export default withTheme(TextField, THEME_NAME);