import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { CheckIcon } from '@8x8/oxygen-icon';

import { type ListItemWrapperProps } from '../types';

const Item = styled.li<ListItemWrapperProps>`
  background: ${({ theme }) => theme.ui06};
  border: 0;
  box-sizing: border-box;
  padding: 8px 12px;
  color: ${({ theme }) => theme.textColor01};
  ${({ theme }) => ({ ...theme.body01 })}
  text-align: left;
  display: flex;
  justify-content: space-between;
  outline: none;
  cursor: pointer;
  overflow-wrap: break-word;
  width: 100%;
  list-style: none;
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.focus01};
    outline-offset: -2px;
  }
  ${({ isActive, theme }) => isActive && { background: theme.ui01 }}
  ${({ isDisabled, theme }) =>
    isDisabled
      ? `
    color: ${theme.disabled02};
    cursor: not-allowed;
  `
      : `
    &:hover {
    background: ${theme.ui02};
  }`}

  min-height: 2.5rem;
`;

const StyledCheckIcon = styled(CheckIcon)`
  margin-left: 8px;
  flex: 0 0 auto;
`;

const ContentWrapper = styled.span`
  align-self: center;
  overflow: hidden;
`;

export const ListItemWrapper = forwardRef<HTMLLIElement, ListItemWrapperProps>(
  function ListItemWrapper({ isActive, isDisabled, children, ...props }, ref) {
    return (
      <Item
        {...props}
        data-test-id={props.testId}
        ref={ref}
        role="menuitem"
        isActive={isActive}
        isDisabled={isDisabled}
        aria-disabled={isDisabled}
        aria-current={isActive}
      >
        <ContentWrapper>{children}</ContentWrapper>
        {isActive && <StyledCheckIcon />}
      </Item>
    );
  },
);
