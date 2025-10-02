var _excluded = ["testId", "name", "isChecked", "isDisabled", "isFocused", "isHovered", "isPressed", "hasLabel", "onBlur", "onChange", "onClick", "onFocus", "onMouseEnter", "onMouseLeave"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import { getTestAttributes } from '@8x8/oxygen-config';
import RadioIcon from './RadioIcon';
import { RadioInputField, RadioInputWrapper } from '../styled';
var RadioInput = function RadioInput(_ref) {
  var testId = _ref.testId,
    name = _ref.name,
    isChecked = _ref.isChecked,
    isDisabled = _ref.isDisabled,
    isFocused = _ref.isFocused,
    isHovered = _ref.isHovered,
    isPressed = _ref.isPressed,
    hasLabel = _ref.hasLabel,
    onBlur = _ref.onBlur,
    onChange = _ref.onChange,
    onClick = _ref.onClick,
    onFocus = _ref.onFocus,
    onMouseEnter = _ref.onMouseEnter,
    onMouseLeave = _ref.onMouseLeave,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(RadioInputWrapper, {
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, /*#__PURE__*/React.createElement(RadioIcon, {
    hasLabel: hasLabel,
    isChecked: isChecked,
    isDisabled: isDisabled,
    isFocused: isFocused,
    isHovered: isHovered,
    isPressed: isPressed
  }), /*#__PURE__*/React.createElement(RadioInputField, _extends({}, getTestAttributes(testId), rest, {
    name: name,
    type: "radio",
    checked: isChecked,
    "aria-disabled": isDisabled,
    onClick: onClick,
    onChange: !isDisabled ? onChange : null,
    onFocus: onFocus,
    onBlur: onBlur
  })));
};
RadioInput.propTypes = {
  testId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isFocused: PropTypes.bool.isRequired,
  isHovered: PropTypes.bool.isRequired,
  isPressed: PropTypes.bool.isRequired,
  hasLabel: PropTypes.bool.isRequired,
  onBlur: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};
export default RadioInput;