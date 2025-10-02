import React from 'react';
import { DotsVerticalIcon } from '@8x8/oxygen-icon';
import { ActionsDropdown } from '../actionsDropdown/ActionsDropdown';
import { StyledIconButton } from './styled';
const MoreRowActions = ({ actions, rowActionsPortalTarget, testId, }) => {
    if (!actions?.length) {
        return null;
    }
    return (React.createElement(ActionsDropdown, { actions: actions, portalTargetRef: rowActionsPortalTarget, testId: testId },
        React.createElement(StyledIconButton, { onClick: (e) => e.stopPropagation(), testId: testId && `${testId}-iconButton` },
            React.createElement(DotsVerticalIcon, null))));
};
export { MoreRowActions };
