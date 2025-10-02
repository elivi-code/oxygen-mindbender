import React from 'react';

export interface CopyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Callback function triggered when copy action is performed
   */
  onCopy?: () => void;
  /**
   * Text to copy to clipboard. If not provided, only onCopy callback will be triggered
   */
  textToCopy?: string;
  /**
   * Custom tooltip text shown before copying
   * @default "Copy"
   */
  tooltipText?: string;
  /**
   * Custom text shown in tooltip after copying
   * @default "Copied"
   */
  copiedText?: string;
  /**
   * Duration in milliseconds to show "copied" state
   * @default 1600
   */
  copiedDuration?: number;
  /**
   * Disable the button
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Test ID for testing purposes
   */
  testId?: string;
  /**
   * Ref forwarding for button element
   */
  forwardedRef?: React.Ref<HTMLButtonElement>;
}
