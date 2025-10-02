import React from 'react';
import styled from 'styled-components';

import {
  PopoverMenu,
  PopoverMenuProps,
  ListItemWrapperProps,
} from '@8x8/oxygen-popover';

import { ActionProps } from './types';
import { Action } from './Action';

const StyledPopoverMenu = styled(PopoverMenu)`
  z-index: 100;
`;

export interface ActionsProps
  extends Omit<PopoverMenuProps, 'onUpdate' | 'items'> {
  /**
   * An array of actions to render in the dropdown
   */
  actions: ActionProps[];

  portalTargetRef?: PopoverMenuProps['portalTargetRef'];
  testId?: string;
}

/**
 * A react component that renders a dropdown menu with actions
 */
const ActionsDropdown: React.FC<ActionsProps> = ({
  actions,
  children,
  portalTargetRef,
  testId,
}) => {
  const actionToItem = (action: ActionProps): ListItemWrapperProps => ({
    key: action.key,
    children: <Action {...action} />,
    isDisabled: action.disabled?.isDisabled,
    testId: action.testId,
  });

  return (
    // TODO: see about styling on PopoverMenu as it is a bit different than what we have in design for actions
    // need to see with Andrei, since it also needs to support separators between items
    <StyledPopoverMenu
      portalTargetRef={portalTargetRef}
      onUpdate={(_, index) => actions[index]?.onClick()}
      onMenuItemClick={event => {
        // Prevent the click from propagating to the parent element (whhich would be the bodyrow)
        event.stopPropagation();
      }}
      items={actions.map(actionToItem)}
      testId={testId && `${testId}_POPOVER_MENU`}
    >
      {children}
    </StyledPopoverMenu>
  );
};

export { ActionsDropdown };
