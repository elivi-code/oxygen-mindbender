import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { getTestAttributes, withTheme } from '@8x8/oxygen-config';

import type { TooltipProps } from '../types';
import { TooltipWrapper, TooltipContent } from '../styled';

const StaticTooltip: FunctionComponent<TooltipProps> = ({
  children,
  forwardedRef,
  renderArrow,
  testId,
  theme,
  ...restProps
}) => (
  <ThemeProvider theme={theme}>
    <TooltipWrapper
      ref={forwardedRef}
      {...restProps}
      {...getTestAttributes(testId)}
    >
      <TooltipContent>{children}</TooltipContent>
      {renderArrow && renderArrow()}
    </TooltipWrapper>
  </ThemeProvider>
);

StaticTooltip.propTypes = {
  children: PropTypes.node.isRequired,
  testId: PropTypes.string,
  renderArrow: PropTypes.func,
};

StaticTooltip.defaultProps = {
  testId: 'STATIC_TOOLTIP',
  renderArrow: undefined,
};

export default withTheme(StaticTooltip, 'staticTooltip');
