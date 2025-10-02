import React from 'react';
import styled from 'styled-components';
import Tooltip from '@8x8/oxygen-tooltip';
import { ListItem } from '@8x8/oxygen-popover';
import { ActionProps, ActionTypes } from './types';

interface ActionContainerProps {
  isDisabled?: boolean;
  type: ActionTypes;
}

const ActionContainer = styled.div<ActionContainerProps>`
  width: 200px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing04};
  ${({ theme }) => ({ ...theme.body01 })};
  color: ${({ theme, isDisabled, type }) => {
    if (isDisabled) {
      return theme.disabled04;
    }

    switch (type) {
      case 'danger':
        return theme.error01;
      case 'default':
      default:
        return theme.textColor01;
    }
  }};

  svg {
    fill: currentcolor;
  }
`;

const Action: React.FC<ActionProps> = ({
  icon,
  label,
  disabled,
  type = 'default',
}) => {
  const action = (
    <ActionContainer isDisabled={disabled?.isDisabled} type={type}>
      <ListItem leadingVisuals={icon}>{label}</ListItem>
    </ActionContainer>
  );

  return disabled?.isDisabled ? (
    <Tooltip title={disabled.reason}>{action}</Tooltip>
  ) : (
    action
  );
};

export { Action };
