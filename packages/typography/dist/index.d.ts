/* eslint-disable */
import React from 'react';

type Weight = 'default' | 'attention' | 'max';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

interface TypographyProps {
  /**
   * Theme object
   */
  theme?: object;
  /**
   * Rendered elements
   */
  children?: React.ReactNode;
  /**
   * Color
   */
  color?: string;
  /**
   * Predefined font weights(default, attention, max) or pass any possible CSS value
   */
  weight?: Weight;
  /**
   * CSS display
   */
  display?: string;
  /**
   * Define if text should wrap or truncate with ellipsis
   */
  shouldWrap?: boolean;
  /**
   * CSS text-align
   */
  align?: string;
  /**
   * HTML element type
   */
  as?: string;
  /**
   * Add extra bottom padding
   */
  isParagraph?: boolean;
  /**
   * Typography ref
   */
  ref?: React.Ref<any> | Function;
  /**
   * Predefined font sizes(small, default, medium, large, attention, max) or pass any possible CSS value
   */
  size?: Size;
  /**
   * Test id
   */
  testId?: string;
  /**
   * Forwarded ref
   */
  forwardedRef?: React.Ref<any> | Function;
}

declare const Typography: React.FunctionComponent<TypographyProps>;

export default Typography;
export { sizes, weights } from './constants';
