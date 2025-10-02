import React from 'react';
import { getTestAttributes } from '@8x8/oxygen-config';
import { Li } from './styled/List';
import { Button } from './styled/Button';
export const Item = ({ children, isActive, onClick, testId, ...props }) => {
    return (React.createElement(Li, { ...getTestAttributes(`${testId}_ITEM`) },
        React.createElement(Button, { isActive: isActive, onClick: onClick, ...props }, children)));
};
