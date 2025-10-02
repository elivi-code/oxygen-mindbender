import React, { forwardRef, useState } from 'react';
import styled, { css, useTheme } from 'styled-components';
import { getTestAttributes } from '@8x8/oxygen-config';
import { iconSizeMap } from '../types';
import { getColor } from '../styled/getColor';
import { getSize } from '../styled/getSize';
const hoverRules = `cursor: pointer;`;
const StyledLink = styled.a `
  /* base && inline styles */
  color: ${getColor};
  text-decoration: underline;

  -webkit-tap-highlight-color: transparent;

  &:hover {
    ${hoverRules}
  }
  ${({ isHovered }) => isHovered && hoverRules}

  outline: none;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.focus01};
    outline-offset: 1px;
    border-radius: 2px;
  }

  &:active,
  &:link:active {
    color: ${getColor};
    outline: 2px solid ${({ theme }) => theme.focus01};
    outline-offset: 1px;
    border-radius: 2px;
  }

  ${({ standalone, size, theme }) => standalone &&
    css `
      display: inline-flex;
      align-items: center;
      text-decoration: none;
      gap: 4px;
      ${getSize({ size, theme })}

      &:hover,
      &:focus,
      &:active {
        text-decoration: underline;
      }
    `}
`;
const Link = forwardRef(({ children, standalone = false, isChat = false, testId = 'LINK', ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const theme = useTheme();
    const { size = 'small', icon } = props;
    const iconProps = {
        ...(standalone
            ? { size: iconSizeMap[size] }
            : {
                style: {
                    verticalAlign: '-0.175em',
                    width: '1em',
                    height: '1em',
                    minWidth: '1em',
                    minHeight: '1em',
                    ...(children && { marginLeft: '4px' }),
                },
            }),
        color: getColor({
            isChat,
            isHovered,
            isFocused,
            isActive,
            theme,
        }),
    };
    return (React.createElement(StyledLink, { ref: ref, standalone: standalone, size: standalone ? size : undefined, isChat: isChat, isHovered: isHovered, isFocused: isFocused, isActive: isActive, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => {
            setIsHovered(false);
            setIsActive(false);
        }, onFocus: () => setIsFocused(true), onBlur: () => setIsFocused(false), onMouseDown: () => setIsActive(true), onMouseUp: () => setIsActive(false), tabIndex: 0, ...getTestAttributes(testId), ...props },
        children,
        icon &&
            React.isValidElement(icon) &&
            React.cloneElement(icon, iconProps)));
});
Link.displayName = 'Link';
export { Link };
export default Link;
