import React from 'react';

interface SlideOutProps {
  /**
   * SlideOut theme
   */
  theme?: object;
  /**
   * Test ID
   */
  testId?: string;
  /**
   * SlideOut children
   */
  children: React.ReactNode;
  /**
   * Specifies if the SlideOut is visible
   */
  isVisible?: boolean;
  /**
   * Specifies if the SlideOut can be resized
   */
  isResizable?: boolean;
  /**
   * Specifies if the SlideOut uses an animation when toggling
   */
  hasAnimation?: boolean;
  /**
   * Specifies the default width of the SlideOut
   */
  defaultWidth?: number;
  /**
   * Specifies the minimum width of the SlideOut
   */
  minWidth?: number;
  /**
   * Specifies the maximum width of the SlideOut
   */
  maxWidth?: number;
  /**
   * Callback for when the SlideOut is being resized. Called with the new width
   */
  onResize?(): void;
}

declare const SlideOut: React.FunctionComponent<SlideOutProps>;

export default SlideOut;
