import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import SwitchBase, { InputValue } from '@8x8/oxygen-switch-base';
import { withTheme, withDeprecation } from '@8x8/oxygen-config';

import { ToggleButtonIcon } from '../styled';
import { ToggleButtonTheme } from '../types';

export interface ToggleButtonProps<T extends InputValue = string> {
  theme?: Partial<ToggleButtonTheme>;
  testId?: string;
  id?: string;
  label?: React.ReactNode;
  value?: T;
  name?: string;
  infoBoxText?: React.ReactNode;
  infoBoxButtonLabel?: string;
  isChecked?: boolean;
  isIndeterminate?: boolean;
  isDisabled?: boolean;
  showLabelTooltipOnOverflow?: boolean;
  onBlur?: () => void;
  onChange?: (value?: T) => void;
  onFocus?: () => void;
}

const ToggleButton = <T extends InputValue>(props: ToggleButtonProps<T>) => {
  const propsWithDefault: ToggleButtonProps<T> = {
    testId: 'TOGGLE_BUTTON',
    value: '' as T,
    isChecked: false,
    isIndeterminate: false,
    isDisabled: false,
    showLabelTooltipOnOverflow: true,
    ...props,
  };
  const {
    testId,
    id,
    label,
    value,
    name,
    infoBoxText,
    infoBoxButtonLabel,
    isChecked,
    isIndeterminate,
    isDisabled,
    showLabelTooltipOnOverflow,
    onBlur,
    onChange,
    onFocus,
    ...rest
  } = propsWithDefault;
  const theme = propsWithDefault.theme as ToggleButtonTheme;

  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleOnBlur = () => {
    onBlur?.();
    setIsFocused(false);
  };

  const handleOnFocus = () => {
    onFocus?.();
    setIsFocused(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <SwitchBase
        theme={theme}
        icon={
          <ThemeProvider theme={theme}>
            <ToggleButtonIcon
              hasLabel={!!label}
              isChecked={isChecked}
              isDisabled={isDisabled}
              isFocused={isFocused}
              isHovered={isHovered}
              isIndeterminate={isIndeterminate}
            />
          </ThemeProvider>
        }
        id={id}
        label={label}
        value={value}
        name={name}
        testId={testId}
        infoBoxText={infoBoxText}
        infoBoxButtonLabel={infoBoxButtonLabel}
        isChecked={isChecked}
        isDisabled={isDisabled}
        isToggleButton
        showLabelTooltipOnOverflow={showLabelTooltipOnOverflow}
        onBlur={handleOnBlur}
        onChange={onChange}
        onFocus={handleOnFocus}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="switch"
        {...rest}
      />
    </ThemeProvider>
  );
};

export { ToggleButton };

export default withTheme(
  withDeprecation(
    ToggleButton,
    `following properties are deprecated and will be removed in next major
    release: "isIndeterminate", theme "backgroundColorFocus" (use outlineColorFocus)`,
  ),
  'toggleButton',
);
