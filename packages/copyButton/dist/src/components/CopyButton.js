import React, { useState, useCallback, useEffect, useRef } from 'react';
import { IconButton } from '@8x8/oxygen-button';
import Tooltip from '@8x8/oxygen-tooltip';
import CopyIcon from '@8x8/oxygen-icon/novo/CopyIcon';
const CopyButton = ({ onCopy, textToCopy, tooltipText = 'Copy', copiedText = 'Copied', copiedDuration = 2000, isDisabled = false, testId, forwardedRef, onClick, ...rest }) => {
    const [isCopied, setIsCopied] = useState(false);
    const timeoutRef = useRef(null);
    useEffect(() => () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
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
        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        // Reset copied state after duration
        timeoutRef.current = setTimeout(() => {
            setIsCopied(false);
            timeoutRef.current = null;
        }, copiedDuration);
    }, [isDisabled, onClick, textToCopy, onCopy, copiedDuration]);
    const currentTooltipText = isCopied ? copiedText : tooltipText;
    return (React.createElement(Tooltip, { title: currentTooltipText, orientation: "top", showOn: "hover" },
        React.createElement(IconButton, { size: "smallXIconS", isDisabled: isDisabled, onClick: handleCopy, testId: testId, ref: forwardedRef, ...rest },
            React.createElement(CopyIcon, null))));
};
export default React.forwardRef((props, ref) => React.createElement(CopyButton, { ...props, forwardedRef: ref }));
