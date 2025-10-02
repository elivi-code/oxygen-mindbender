import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import { isEnterEvent, isSpaceEvent } from '@8x8/oxygen-utils';
import { getIconColor } from '../styled/iconButton.utils';
import { IconButtonStyled } from '../styled/IconButtonStyled';
const iconSizeMap = {
    small2XIconXs: [20, 16],
    smallXIconS: [24, 20],
    default: [28, 24],
    smallIconM: [32, 24],
    smallIconS: [32, 20],
    smallIconXs: [32, 16],
    mediumIconL: [40, 32],
    mediumIconM: [40, 24],
    mediumIconS: [40, 20],
    largeIconL: [48, 32],
    largeIconM: [48, 24],
};
const IconButton = ({ children, size, isDisabled, theme, forwardedRef, testId, onClick, onKeyDown, ...rest }) => {
    const buttonProps = {
        ...(isDisabled && { 'aria-disabled': true }),
    };
    const isDefaultSize = size === 'default';
    const iconButtonSize = isDefaultSize ? '' : iconSizeMap[size][0].toString();
    const getIconProps = (child) => {
        const iconProps = {
            color: getIconColor({
                isActive: rest.isActive,
                isInverted: rest.isInverted,
                isDisabled,
                theme,
            }),
            size: iconSizeMap[size][1],
        };
        if (child.props?.size) {
            iconProps.size = child.props.size;
        }
        return iconProps;
    };
    const handleOnClick = (ev) => {
        if (isDisabled) {
            ev.preventDefault();
            ev.stopPropagation();
            return;
        }
        if (onClick) {
            onClick(ev);
        }
    };
    const handleOnKeyDown = (ev) => {
        if ((isSpaceEvent(ev) || isEnterEvent(ev)) && isDisabled) {
            ev.preventDefault();
            ev.stopPropagation();
            return;
        }
        if (onKeyDown) {
            onKeyDown(ev);
        }
    };
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(IconButtonStyled, { type: "button", onClick: handleOnClick, onKeyDown: handleOnKeyDown, ...getTestAttributes(testId), ...rest, ...buttonProps, ref: forwardedRef, "$iconButtonSize": iconButtonSize }, React.Children.map(children || null, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { ...getIconProps(child) });
            }
            return child;
        }))));
};
IconButton.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf([
        'small2XIconXs',
        'smallXIconS',
        'smallIconM',
        'smallIconS',
        'smallIconXs',
        'mediumIconL',
        'mediumIconM',
        'mediumIconS',
        'largeIconL',
        'largeIconM',
        'default',
    ]),
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isInverted: PropTypes.bool,
    testId: PropTypes.string,
};
IconButton.defaultProps = {
    size: 'default',
    isActive: false,
    isDisabled: false,
    isInverted: false,
    testId: 'iconButton',
};
export default withTheme(IconButton, 'iconButton');
