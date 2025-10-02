import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import SwitchBase, {
  InputValue,
  SwitchBaseProps,
} from '@8x8/oxygen-switch-base';

import { withTheme } from '@8x8/oxygen-config';
import { CheckboxIconWrapper } from '../styled/CheckboxIconWrapper';
import CheckboxIcon from './CheckboxIcon';
import { CheckboxTheme } from '../types';

export interface CheckboxProps<T extends InputValue = string>
  extends SwitchBaseProps<T> {
  theme?: Partial<CheckboxTheme>;
  isIndeterminate?: boolean;
  showLabelTooltipOnOverflow?: boolean;
}

const Checkbox = <T extends InputValue>(props: CheckboxProps<T>) => {
  const propsWithDefault: CheckboxProps<T> = {
    testId: 'CHECKBOX',
    value: '' as T,
    isChecked: false,
    isIndeterminate: false,
    isDisabled: false,
    showLabelTooltipOnOverflow: true,
    ...props,
  };
  const {
    theme,
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
    onChange,
    onBlur,
    onFocus,
    ...rest
  } = propsWithDefault;
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    onBlur?.(event);
    setIsFocused(false);
  };

  const handleOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    onFocus?.(event);
    setIsFocused(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <SwitchBase
        testId={testId}
        theme={theme}
        id={id}
        icon={
          <CheckboxIconWrapper
            hasLabel={!!label}
            isChecked={isChecked}
            isDisabled={isDisabled}
            isFocused={isFocused}
            isHovered={isHovered}
            isIndeterminate={isIndeterminate}
          >
            <CheckboxIcon
              isNovo={theme?.iconSet === 'novo'}
              isChecked={isChecked}
              isIndeterminate={isIndeterminate}
            />
          </CheckboxIconWrapper>
        }
        label={label}
        value={value}
        name={name}
        infoBoxText={infoBoxText}
        infoBoxButtonLabel={infoBoxButtonLabel}
        isChecked={isChecked}
        isDisabled={isDisabled}
        showLabelTooltipOnOverflow={showLabelTooltipOnOverflow}
        onChange={onChange}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        {...rest}
      />
    </ThemeProvider>
  );
};

export { Checkbox };
export default withTheme(Checkbox, 'checkbox');
