import React from 'react';
import PropTypes from 'prop-types';

import { RadioIcon, RadiofilledIcon } from '@8x8/oxygen-icon';

const getIconName = isChecked => (isChecked ? RadiofilledIcon : RadioIcon);

const Icon = ({ color, isChecked, className }) => {
  const IconComponent = getIconName(isChecked);

  return (
    <IconComponent color={color} className={className} aria-hidden="true" />
  );
};

Icon.propTypes = {
  className: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default Icon;
