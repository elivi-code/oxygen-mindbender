import React from 'react';
import Tooltip from '@8x8/oxygen-tooltip';
import { StyledIconButton } from './styled';
const InlineRowAction = ({ label, onClick, disabled, icon, testId, }) => {
    const Icon = (React.createElement(StyledIconButton, { isDisabled: disabled?.isDisabled, title: disabled?.isDisabled ? undefined : label, onClick: onClick, testId: testId && `${testId}-iconButton` }, icon));
    return disabled?.isDisabled ? (React.createElement(Tooltip, { title: disabled.reason }, Icon)) : (Icon);
};
export { InlineRowAction };
