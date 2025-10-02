import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import RadioIconWrapper from './Icon';
import { RadioIconClassic } from '../styled';
import { getIconColor } from '../utils';
var RadioIcon = function RadioIcon(_ref) {
  var isChecked = _ref.isChecked,
    isDisabled = _ref.isDisabled,
    isFocused = _ref.isFocused,
    isHovered = _ref.isHovered,
    isPressed = _ref.isPressed,
    hasLabel = _ref.hasLabel;
  var theme = useContext(ThemeContext);
  if (theme.iconSet === 'novo') {
    var shouldApplyFocusVisible = isFocused && !isPressed;
    return /*#__PURE__*/React.createElement(RadioIconWrapper, {
      hasLabel: hasLabel,
      isFocusVisible: shouldApplyFocusVisible,
      isChecked: isChecked,
      color: getIconColor({
        theme: theme,
        isChecked: isChecked,
        isDisabled: isDisabled,
        isFocused: isFocused,
        isHovered: isHovered
      })
    });
  }
  return /*#__PURE__*/React.createElement(RadioIconClassic, {
    isChecked: isChecked,
    isDisabled: isDisabled,
    isFocused: isFocused,
    isHovered: isHovered,
    hasLabel: hasLabel
  });
};
RadioIcon.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isFocused: PropTypes.bool.isRequired,
  isHovered: PropTypes.bool.isRequired,
  isPressed: PropTypes.bool.isRequired,
  hasLabel: PropTypes.bool.isRequired
};
export default RadioIcon;