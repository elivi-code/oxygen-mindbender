import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import isUndefined from 'lodash.isundefined';

import { getTestAttributes } from '@8x8/oxygen-config';
import { ArrowDownSolidIcon, CalendarIcon, CloseIcon } from '@8x8/oxygen-icon';

import {
  InputContainer,
  InputIcon,
  InputIconLeft,
  InputTitle,
} from '../styled/StyledDateTimeSelectorInput';

const DateTimeRangeSelectorInput = ({
  hasError,
  iconLeft: IconLeft,
  id,
  inputIcon,
  isOpen,
  size,
  isClearable,
  isDisabled,
  isValueSelected,
  onClear,
  onClick,
  title,
  theme,
  popperAnchorRef,
  setInputRef,
  testId,
}) => {
  const { iconColor, placeholderColor, isClassic } = theme;

  const setRef = node => {
    popperAnchorRef(node);
    setInputRef(node);
  };

  const getInputIcon = () => {
    const iconProps = {
      ...getTestAttributes(`${testId}_ICON`),
      isDisabled,
      color: iconColor,
      reverse: isOpen,
    };

    if (isUndefined(inputIcon)) {
      return (
        <InputIcon
          {...iconProps}
          as={isClassic ? ArrowDownSolidIcon : CalendarIcon}
        />
      );
    }

    if (typeof inputIcon === 'function') {
      const Icon = inputIcon;

      return <Icon {...iconProps} />;
    }

    return inputIcon;
  };

  const handleOnClear = e => {
    e.stopPropagation();
    onClear();
  };

  return (
    <InputContainer
      aria-disabled={isDisabled}
      aria-invalid={hasError}
      hasError={hasError}
      id={id}
      {...getTestAttributes(testId)}
      isOpen={isOpen}
      isClearable={isClearable}
      isDisabled={isDisabled}
      size={size}
      onClick={onClick}
      ref={setRef}
      title={title}
      isPlaceholder={!isValueSelected}
    >
      {IconLeft && (
        <InputIconLeft>
          <IconLeft
            isDisabled={isDisabled}
            color={isValueSelected ? iconColor : placeholderColor}
          />
        </InputIconLeft>
      )}
      <InputTitle>{title}</InputTitle>
      {isClearable && !isOpen && isValueSelected && (
        <CloseIcon
          {...getTestAttributes(`${testId}_CLEAR_ICON`)}
          theme={{
            linkColor: theme.clearIconColor,
            hoverColor: theme.clearIconHoverColor,
          }}
          link
          isOpen={isOpen}
          onClick={handleOnClear}
        />
      )}
      {getInputIcon()}
    </InputContainer>
  );
};

DateTimeRangeSelectorInput.propTypes = {
  inputIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  iconLeft: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.elementType,
  ]),
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
  testId: PropTypes.string,
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
  testId: 'DATE_TIME_RANGE_SELECTOR_INPUT',
};

export default DateTimeRangeSelectorInput;
