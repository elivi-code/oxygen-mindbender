import React from 'react';
import isFunction from 'lodash.isfunction';
import { getTestAttributes } from '@8x8/oxygen-config';
import ActionText from '../styled/ActionText';
import renderTitle from '../utils/renderTitle';
const Action = props => {
    const { action, actionTarget = '_self', isDisabled = false, shouldWrapText = false, testId = 'LABEL', children, } = props;
    const handleOnClick = (event) => {
        if (isDisabled) {
            event.preventDefault();
            return;
        }
        if (isFunction(action)) {
            event.preventDefault();
            action(event);
        }
    };
    return (React.createElement(ActionText, { tabIndex: 0, as: isFunction(action) ? 'button' : undefined, type: isFunction(action) ? 'button' : undefined, "aria-disabled": isDisabled, ...getTestAttributes(`${testId}_ACTION`), ...(actionTarget && { target: `${actionTarget}` }), ...{ [isFunction(action) ? 'onClick' : 'href']: action }, title: renderTitle(children), isDisabled: isDisabled, shouldWrapText: shouldWrapText, onClick: handleOnClick }, children));
};
export default Action;
