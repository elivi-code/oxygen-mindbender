import React from 'react';
import { withTheme } from '@8x8/oxygen-config';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import TypographyWrapper from '../styled/TypographyWrapper';
import { sizes, weights, THEME_NAME } from '../constants';

const Typography = ({ children, theme, forwardedRef, ...pasThroughProps }) => (
  <ThemeProvider theme={theme}>
    <TypographyWrapper {...pasThroughProps} ref={forwardedRef}>
      {children}
    </TypographyWrapper>
  </ThemeProvider>
);

Typography.propTypes = {
  /**
   * Theme object
   */
  theme: PropTypes.object,
  /**
   * Rendered elements
   */
  children: PropTypes.node,
  /**
   * Color
   */
  color: PropTypes.string,
  /**
   * Predefined font weights(default, attention, max) or pass any possible CSS value
   */
  weight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(Object.keys(weights)),
  ]),
  /**
   * CSS display
   */
  display: PropTypes.string,
  /**
   * Define if text should wrap or truncate with ellipsis
   */
  shouldWrap: PropTypes.bool,
  /**
   * CSS text-align
   */
  align: PropTypes.string,
  /**
   * HTML element type
   */
  as: PropTypes.string,
  /**
   * Add extra bottom padding
   */
  isParagraph: PropTypes.bool,
  /**
   * Typography ref
   */
  ref: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  /**
   * Predefined font sizes(small, default, medium, large, attention, max) or pass any possible CSS value
   */
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(Object.keys(sizes)),
  ]),
  /**
   * Test id
   */
  testId: PropTypes.string,
  /**
   * Forwarded ref
   */
  forwardedRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

Typography.defaultProps = {
  children: null,
  color: undefined,
  weight: undefined,
  display: undefined,
  shouldWrap: true,
  align: undefined,
  as: undefined,
  isParagraph: false,
  ref: null,
  size: undefined,
  testId: 'TYPOGRAPHY',
  forwardedRef: null,
};

export default withTheme(Typography, THEME_NAME);
