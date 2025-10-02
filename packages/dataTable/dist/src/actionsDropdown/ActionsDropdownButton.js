import React, { forwardRef, useCallback, useRef, useState, } from 'react';
import styled from 'styled-components';
import Button, { buttonSize } from '@8x8/oxygen-button';
import { ArrowUpIcon, ArrowDownIcon } from '@8x8/oxygen-icon';
import { ActionsDropdown } from './ActionsDropdown';
const StyledArrowUpIcon = styled(ArrowUpIcon) `
  fill: currentcolor;
`;
const StyledArrowDownIcon = styled(ArrowDownIcon) `
  fill: currentcolor;
`;
const DropdownPortalNode = styled.div `
  position: fixed;
  z-index: 70;
`;
const iconSizeMap = {
    small: 16,
    medium: 20,
    large: 24,
    big: 24,
};
// TODO: if / when DropdownButton from oxygen button supports variants we can replace this implementation with that component
// right now it only has one variant
const ActionsDropdownButton = forwardRef(({ actions, onClick, children, size = buttonSize.medium, testId, ...rest }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const portalTargetRef = useRef(null);
    const onButtonClick = useCallback(e => {
        onClick?.(e);
        setIsOpen(value => !value);
    }, [onClick]);
    const iconSize = iconSizeMap[size];
    return (React.createElement(React.Fragment, null,
        React.createElement(ActionsDropdown, { actions: actions, portalTargetRef: portalTargetRef, testId: testId },
            React.createElement(Button, { ...rest, testId: testId && `${testId}_BUTTON`, size: size, onClick: onButtonClick, ref: ref },
                children,
                isOpen ? (React.createElement(StyledArrowUpIcon, { size: iconSize })) : (React.createElement(StyledArrowDownIcon, { size: iconSize })))),
        React.createElement(DropdownPortalNode, { ref: portalTargetRef })));
});
ActionsDropdownButton.displayName = 'ActionsDropdownButton';
export { ActionsDropdownButton };
