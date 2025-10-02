import styled from 'styled-components';
import React, { ReactElement } from 'react';
import { useOxygen } from '@8x8/oxygen-config';

export const SectionHeader = styled.h3.attrs({ role: 'none' })<{
  isBold?: boolean;
}>`
  ${({ isBold, theme }) =>
    isBold ? { ...theme.labelBold01 } : { ...theme.label01 }};
  color: ${({ isBold, theme }) =>
    isBold ? theme.textColor01 : theme.textColor02};
  padding: 8px 12px;
  margin: 0;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.ui01};
  padding: 0;
  margin: 4px 0;
`;

export const EmptyStateContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  margin-bottom: 11px;
`;

const MessageContainer = styled.p<{ isBold?: boolean }>`
  ${({ isBold, theme }) =>
    isBold
      ? { color: theme.textColor01, ...theme.bodyBold01 }
      : { color: theme.textColor02, ...theme.body01 }};
  text-align: center;
  margin: 0 0 2px;
`;

export const EmptyState = ({
  primaryMessage,
  secondaryMessage,
  icon,
}: {
  primaryMessage?: string;
  secondaryMessage?: string;
  icon?: ReactElement;
}) => {
  const { theme } = useOxygen();
  const baseProps = { color: theme.icon03 };
  const iconProps = !icon?.props?.size ? { size: 32, ...baseProps } : baseProps;

  return (
    <EmptyStateContainer>
      <IconWrapper>{icon && React.cloneElement(icon, iconProps)}</IconWrapper>
      <MessageContainer isBold>{primaryMessage}</MessageContainer>
      <MessageContainer>{secondaryMessage}</MessageContainer>
    </EmptyStateContainer>
  );
};
