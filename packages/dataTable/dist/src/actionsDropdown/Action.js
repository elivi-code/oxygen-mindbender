import React from 'react';
import styled from 'styled-components';
import Tooltip from '@8x8/oxygen-tooltip';
import { ListItem } from '@8x8/oxygen-popover';
const ActionContainer = styled.div `
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
const Action = ({ icon, label, disabled, type = 'default', }) => {
    const action = (React.createElement(ActionContainer, { isDisabled: disabled?.isDisabled, type: type },
        React.createElement(ListItem, { leadingVisuals: icon }, label)));
    return disabled?.isDisabled ? (React.createElement(Tooltip, { title: disabled.reason }, action)) : (action);
};
export { Action };
