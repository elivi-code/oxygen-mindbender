import React from 'react';
import { ThemeProvider } from 'styled-components';

import { withTheme } from '@8x8/oxygen-config';
import { SwitchBaseGroup } from '@8x8/oxygen-switch-base';
import { ToggleButtonTheme } from '../types';

export interface ToggleButtonGroupProps {
  isHorizontal?: boolean;
  theme?: Partial<ToggleButtonTheme>;
}

type InternalToggleButtonGroupProps = ToggleButtonGroupProps & {
  theme: ToggleButtonTheme;
};

const ToggleButtonGroup: React.FC<
  React.PropsWithChildren<InternalToggleButtonGroupProps>
> = props => {
  const { children, isHorizontal = false, theme, ...rest } = props;

  return (
    <ThemeProvider theme={theme}>
      <SwitchBaseGroup isHorizontal={isHorizontal} {...rest}>
        {children}
      </SwitchBaseGroup>
    </ThemeProvider>
  );
};

export { ToggleButtonGroup };

export default withTheme(ToggleButtonGroup, 'toggleButtonGroup');
