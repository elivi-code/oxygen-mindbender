import React from 'react';
import PropTypes from 'prop-types';
import { RadioIcon, RadiofilledIcon } from '@8x8/oxygen-icon';
var getIconName = function getIconName(isChecked) {
  return isChecked ? RadiofilledIcon : RadioIcon;
};
var Icon = function Icon(_ref) {
  var color = _ref.color,
    isChecked = _ref.isChecked,
    className = _ref.className;
  var IconComponent = getIconName(isChecked);
  return /*#__PURE__*/React.createElement(IconComponent, {
    color: color,
    className: className,
    "aria-hidden": "true"
  });
};
Icon.propTypes = {
  className: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired
};
export default Icon;