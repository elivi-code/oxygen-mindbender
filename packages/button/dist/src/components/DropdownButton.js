import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useOxygen, getTestAttributes } from '@8x8/oxygen-config';
import { isEnterEvent, isSpaceEvent } from '@8x8/oxygen-utils';
import { ArrowDownIcon, ArrowUpIcon } from '@8x8/oxygen-icon';
const DropdownButtonComponent = styled.button `
  display: flex;
  justify-content: space-between;
  ${({ $fullWidth }) => $fullWidth && 'width: 100%;'}
  box-sizing: border-box;
  gap: 8px;
  ${({ size, theme }) => {
    if (size === 'large') {
        return { ...theme.bodyBold02 };
    }
    if (size === 'small') {
        return { ...theme.labelBold01 };
    }
    return { ...theme.bodyBold01 };
}}
  color: ${({ theme }) => theme.textColor01};
  background: ${({ theme }) => theme.ui06};
  padding: 11px 15px;
  border: 1px solid ${({ theme }) => theme.ui06};
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.focus01};
    outline-offset: -2px;
  }

  ${({ $isActive, theme }) => $isActive && `border-color: ${theme.active02};`}
  ${({ 'aria-disabled': ariaDisabled, theme }) => {
    if (ariaDisabled) {
        return `
    color: ${theme.disabled04};
    cursor: not-allowed;
  `;
    }
    return `&:hover {
      border-color: ${theme.active02};
    }`;
}}
`;
const iconSizeMap = {
    large: 24,
    medium: 20,
    small: 16,
};
export const DropdownButton = forwardRef(function DropdownButton({ children, size = 'medium', isActive = false, isDisabled = false, fullWidth = false, testId = 'DROPDOWN_BUTTON', onClick, onKeyDown, ...rest }, ref) {
    const { theme } = useOxygen();
    const handleOnClick = (ev) => {
        if (isDisabled) {
            ev.preventDefault();
            ev.stopPropagation();
            return;
        }
        if (onClick) {
            onClick(ev);
        }
    };
    const handleOnKeyDown = (ev) => {
        if ((isSpaceEvent(ev) || isEnterEvent(ev)) && isDisabled) {
            ev.preventDefault();
            ev.stopPropagation();
            return;
        }
        if (onKeyDown) {
            onKeyDown(ev);
        }
    };
    const iconProps = {
        size: iconSizeMap[size],
        ...(isDisabled && { color: theme.disabled04 }),
    };
    const buttonProps = {
        ...(isDisabled && { 'aria-disabled': true }),
    };
    return (React.createElement(DropdownButtonComponent, { size: size, "$fullWidth": fullWidth, ref: ref, "$isActive": isActive, onClick: handleOnClick, onKeyDown: handleOnKeyDown, ...buttonProps, ...getTestAttributes(testId), ...rest },
        children,
        isActive ? (React.createElement(ArrowUpIcon, { ...iconProps })) : (React.createElement(ArrowDownIcon, { ...iconProps }))));
});
