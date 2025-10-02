import React, { useState, useCallback, useEffect, useRef } from 'react';
import { IconButton } from '@8x8/oxygen-button';
import Tooltip from '@8x8/oxygen-tooltip';
import CopyIcon from '@8x8/oxygen-icon/novo/CopyIcon';
import CheckIcon from '@8x8/oxygen-icon/novo/CheckIcon';
const CopyButton = ({ onCopy, textToCopy, tooltipText = 'Copy', copiedText = 'Copied', copiedDuration = 1600, isDisabled = false, testId, forwardedRef, onClick, ...rest }) => {
    const [isCopied, setIsCopied] = useState(false);
    const [showCheckIcon, setShowCheckIcon] = useState(false);
    const timeoutRef = useRef(null);
    const iconTimeoutRef = useRef(null);
    useEffect(() => () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        if (iconTimeoutRef.current) {
            clearTimeout(iconTimeoutRef.current);
        }
    }, []);
    const handleCopy = useCallback(async (event) => {
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
            }
            catch (error) {
                // Fallback for older browsers or if clipboard API fails
                const textArea = document.createElement('textarea');
                textArea.value = textToCopy;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    document.execCommand('copy');
                }
                catch (err) {
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
    }, [isDisabled, onClick, textToCopy, onCopy, copiedDuration]);
    const currentTooltipText = isCopied ? copiedText : tooltipText;
    const handleMouseDown = useCallback((e) => {
        // Prevent all default behavior and stop event from reaching Floating UI handlers
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }, []);
    const handleClick = useCallback(async (event) => {
        // Stop all event propagation to prevent any tooltip close handlers from firing
        event.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        await handleCopy(event);
    }, [handleCopy]);
    const buttonElement = (React.createElement(IconButton, { size: "smallXIconS", isDisabled: isDisabled, onClick: handleClick, onMouseDown: handleMouseDown, testId: testId, ref: forwardedRef, ...rest }, showCheckIcon ? React.createElement(CheckIcon, null) : React.createElement(CopyIcon, null)));
    // Don't show tooltip when button is disabled
    if (isDisabled) {
        return buttonElement;
    }
    return (React.createElement(Tooltip, { title: currentTooltipText, orientation: "top", showOn: "hover", offset: 9 }, buttonElement));
};
export default React.forwardRef((props, ref) => React.createElement(CopyButton, { ...props, forwardedRef: ref }));
