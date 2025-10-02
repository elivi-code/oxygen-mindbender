import React, { MouseEvent } from 'react';

import { DotsVerticalIcon } from '@8x8/oxygen-icon';
import { ActionProps } from '../actionsDropdown/types';
import { ActionsDropdown } from '../actionsDropdown/ActionsDropdown';
import { StyledIconButton } from './styled';

interface Props {
  actions?: ActionProps[];
  rowActionsPortalTarget: React.RefObject<HTMLDivElement>;
  testId?: string;
}

const MoreRowActions: React.FC<Props> = ({
  actions,
  rowActionsPortalTarget,
  testId,
}) => {
  if (!actions?.length) {
    return null;
  }

  return (
    <ActionsDropdown
      actions={actions}
      portalTargetRef={rowActionsPortalTarget}
      testId={testId}
    >
      <StyledIconButton
        onClick={(e: MouseEvent) => e.stopPropagation()}
        testId={testId && `${testId}-iconButton`}
      >
        <DotsVerticalIcon />
      </StyledIconButton>
    </ActionsDropdown>
  );
};

export { MoreRowActions };
