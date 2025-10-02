import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import RadioIconWrapper from './Icon';
import { RadioIconClassic } from '../styled';
import { getIconColor } from '../utils';

const RadioIcon = ({
  isChecked,
  isDisabled,
  isFocused,
  isHovered,
  isPressed,
  hasLabel,
}) => {
  const theme = useContext(ThemeContext);

  if (theme.iconSet === 'novo') {
    const shouldApplyFocusVisible = isFocused && !isPressed;

    return (
      <RadioIconWrapper
        hasLabel={hasLabel}
        isFocusVisible={shouldApplyFocusVisible}
        isChecked={isChecked}
        color={getIconColor({
          theme,
          isChecked,
          isDisabled,
          isFocused,
          isHovered,
        })}
      />
    );
  }

  return (
    <RadioIconClassic
      isChecked={isChecked}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isHovered={isHovered}
      hasLabel={hasLabel}
    />
  );
};

RadioIcon.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isFocused: PropTypes.bool.isRequired,
  isHovered: PropTypes.bool.isRequired,
  isPressed: PropTypes.bool.isRequired,
  hasLabel: PropTypes.bool.isRequired,
};

export default RadioIcon;
