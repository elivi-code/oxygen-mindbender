import React from 'react';
import PropTypes from 'prop-types';

import { getTestAttributes } from '@8x8/oxygen-config';

import RadioIcon from './RadioIcon';
import { RadioInputField, RadioInputWrapper } from '../styled';

const RadioInput = ({
  testId,
  name,
  isChecked,
  isDisabled,
  isFocused,
  isHovered,
  isPressed,
  hasLabel,
  onBlur,
  onChange,
  onClick,
  onFocus,
  onMouseEnter,
  onMouseLeave,
  ...rest
}) => {
  return (
    <RadioInputWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <RadioIcon
        hasLabel={hasLabel}
        isChecked={isChecked}
        isDisabled={isDisabled}
        isFocused={isFocused}
        isHovered={isHovered}
        isPressed={isPressed}
      />
      <RadioInputField
        {...getTestAttributes(testId)}
        {...rest}
        name={name}
        type="radio"
        checked={isChecked}
        aria-disabled={isDisabled}
        onClick={onClick}
        onChange={!isDisabled ? onChange : null}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </RadioInputWrapper>
  );
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
  onMouseLeave: PropTypes.func.isRequired,
};

export default RadioInput;
