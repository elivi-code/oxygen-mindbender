import React from 'react';
import styled from 'styled-components';

import { ActionProps, ActionTypes } from '../actionsDropdown/types';
import { InlineRowAction } from './InlineRowAction';
import { MoreRowActions } from './MoreRowActions';
import { OutlineWidth, pinnedCellZIndex } from '../styled/Cell';
import { StyledIconButton } from './styled';

interface RowActionsProps {
  isActive: boolean;
}

const RowActionsContainer = styled.td`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;

  /* removes padding from "td" */
  padding: 0;

  /* so it appears above pinned cells */
  z-index: ${pinnedCellZIndex + 25};
`;

export const StyledRowActionsPaddingRight = 16 + OutlineWidth; // theme.spacing05 + OutlineWidth

const StyledRowActions = styled.div<RowActionsProps>`
  pointer-events: initial;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${({ theme }) =>
    `0 ${StyledRowActionsPaddingRight}px 0 ${theme.spacing06}`};
  gap: ${({ theme }) => theme.spacing05};
  height: 100%;
  position: sticky;
  right: 0;
  width: 220px;
  box-sizing: border-box;
  background: ${({ theme, isActive }) =>
    isActive
      ? `linear-gradient(270deg, ${theme.active10} 67.19%, transparent 100%)`
      : `linear-gradient(270deg, ${theme.ui02} 67.19%, transparent 100%)`};
  margin-left: auto;

  /**
   * sometimes 'align-self: center' is not applied to the icon button, when multiple apps use dataTable in the same browser instance
   * if one of the apps is not allowed to load fully, css classes won't be fully applied, IconButton remains with initial value for align-self 
   * 
   * this is a workaround to remedy when 'align-self: center' is not applied
   */
  ${StyledIconButton} {
    align-self: center;
  }
`;

export interface Props {
  actions?: ActionProps[];
  show: boolean;
  rowActionsPortalTarget?: React.RefObject<HTMLDivElement>;
  isActive: boolean;
  testId?: string;
}

const RowActions: React.FC<Props> = ({
  actions,
  show,
  rowActionsPortalTarget,
  isActive,
  testId = 'rowActions',
}) => {
  if (!actions || !show) {
    return null;
  }

  // if we need to display more than 3 actions, 2 are inline, rest are in a dropdown
  const inlineActions = actions.length <= 3 ? actions : actions.slice(0, 2);
  const moreActions = actions.length > 3 ? actions.slice(2) : undefined;

  return (
    <RowActionsContainer>
      <StyledRowActions isActive={isActive}>
        {inlineActions.map(action => (
          <InlineRowAction
            testId={action.testId}
            label={action.label}
            onClick={event => {
              action.onClick();
              event?.stopPropagation();
            }}
            disabled={action.disabled}
            icon={action.icon}
            key={action.key}
          />
        ))}
        {rowActionsPortalTarget && (
          <MoreRowActions
            actions={moreActions}
            rowActionsPortalTarget={rowActionsPortalTarget}
            testId={`${testId}-moreRowActions`}
          />
        )}
      </StyledRowActions>
    </RowActionsContainer>
  );
};

export { RowActions, StyledRowActions, ActionProps, ActionTypes };
