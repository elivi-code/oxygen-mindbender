import React, { useState, useCallback, useEffect, useRef } from 'react';
import { IconButton } from '@8x8/oxygen-button';
import Tooltip from '@8x8/oxygen-tooltip';
import CopyIcon from '@8x8/oxygen-icon/novo/CopyIcon';
import CheckIcon from '@8x8/oxygen-icon/novo/CheckIcon';

import type { CopyButtonProps } from '../types';

const CopyButton: React.FunctionComponent<CopyButtonProps> = ({
  onCopy,
  textToCopy,
  tooltipText = 'Copy',
  copiedText = 'Copied',
  copiedDuration = 1600,
  isDisabled = false,
  testId,
  forwardedRef,
  onClick,
  ...rest
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const [showCheckIcon, setShowCheckIcon] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const iconTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(
    () => () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (iconTimeoutRef.current) {
        clearTimeout(iconTimeoutRef.current);
      }
    },
    [],
  );

  const handleCopy = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled) {
        return;
      }

      // Call custom onClick handler if provided
      if (onClick) {
        onClick(event);
      }

      // Copy text to clipboard if provided
      if (textToCopy) {
        try {
          await navigator.clipboard.writeText(textToCopy);
        } catch (error) {
          // Fallback for older browsers or if clipboard API fails
          const textArea = document.createElement('textarea');

          textArea.value = textToCopy;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.select();

          try {
            document.execCommand('copy');
          } catch (err) {
            // Silently fail if copy is not supported
          }

          document.body.removeChild(textArea);
        }
      }

      // Call onCopy callback
      if (onCopy) {
        onCopy();
      }

      // Set copied state
      setIsCopied(true);

      // Show check icon
      setShowCheckIcon(true);

      // Clear any existing timeouts
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (iconTimeoutRef.current) {
        clearTimeout(iconTimeoutRef.current);
      }

      // Reset both icon and copied state after copiedDuration to keep them in sync
      iconTimeoutRef.current = setTimeout(() => {
        setShowCheckIcon(false);
        iconTimeoutRef.current = null;
      }, copiedDuration);

      timeoutRef.current = setTimeout(() => {
        setIsCopied(false);
        timeoutRef.current = null;
      }, copiedDuration);
    },
    [isDisabled, onClick, textToCopy, onCopy, copiedDuration],
  );

  const currentTooltipText = isCopied ? copiedText : tooltipText;

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      // Prevent all default behavior and stop event from reaching Floating UI handlers
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    },
    [],
  );

  const handleClick = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      // Stop all event propagation to prevent any tooltip close handlers from firing
      event.preventDefault();
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();

      await handleCopy(event);
    },
    [handleCopy],
  );

  const buttonElement = (
    <IconButton
      size="smallXIconS"
      isDisabled={isDisabled}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      testId={testId}
      ref={forwardedRef}
      {...rest}
    >
      {showCheckIcon ? <CheckIcon /> : <CopyIcon />}
    </IconButton>
  );

  // Don't show tooltip when button is disabled
  if (isDisabled) {
    return buttonElement;
  }

  return (
    <Tooltip
      title={currentTooltipText}
      orientation="top"
      showOn="hover"
      offset={9}
    >
      {buttonElement}
    </Tooltip>
  );
};

export default React.forwardRef<HTMLButtonElement, CopyButtonProps>(
  (props, ref) => <CopyButton {...props} forwardedRef={ref} />,
);
