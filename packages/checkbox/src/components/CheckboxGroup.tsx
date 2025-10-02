import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { withTheme } from '@8x8/oxygen-config';
import { SwitchBaseGroup } from '@8x8/oxygen-switch-base';
import { CheckboxGroupTheme } from '../types';

export interface CheckboxGroupProps {
  theme?: Partial<CheckboxGroupTheme>;
  isHorizontal?: boolean;
}

const CheckboxGroup: React.FC<
  PropsWithChildren<CheckboxGroupProps>
> = props => {
  const propsWithDefault: PropsWithChildren<CheckboxGroupProps> = {
    isHorizontal: false,
    ...props,
  };
  const { children, isHorizontal, theme, ...rest } = propsWithDefault;

  return (
    <ThemeProvider theme={theme}>
      <SwitchBaseGroup theme={theme} isHorizontal={isHorizontal} {...rest}>
        {children}
      </SwitchBaseGroup>
    </ThemeProvider>
  );
};

export { CheckboxGroup };

export default withTheme(CheckboxGroup, 'checkboxGroup');
