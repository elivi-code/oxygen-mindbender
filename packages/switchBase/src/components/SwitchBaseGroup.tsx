import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { StyledSwitchBaseGroup } from '../styled';

export interface SwitchBaseGroupProps {
  theme?: Partial<DefaultTheme>;
  isHorizontal?: boolean;
}

const SwitchBaseGroup: React.FC<
  React.PropsWithChildren<SwitchBaseGroupProps>
> = props => {
  const { children, isHorizontal = false, theme = {}, ...rest } = props;

  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <StyledSwitchBaseGroup isHorizontal={isHorizontal} {...rest}>
        {children}
      </StyledSwitchBaseGroup>
    </ThemeProvider>
  );
};

export default SwitchBaseGroup;
