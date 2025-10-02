import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { getTestAttributes, withTheme } from '@8x8/oxygen-config';
import { isEnterEvent, isSpaceEvent } from '@8x8/oxygen-utils';
import { THEME_NAME } from '../constants/themeName';
import { ButtonRegular, ButtonCircular } from './Containers';
import { buttonSize, buttonVariant } from '../types';
const getDefaultSize = (size, isClassic) => {
    // To be removed in V2
    let finalDefaultSize = size;
    if (isClassic) {
        finalDefaultSize = size === buttonSize.medium ? buttonSize.big : size;
    }
    else {
        finalDefaultSize = size === buttonSize.big ? buttonSize.medium : size;
    }
    return finalDefaultSize;
};
const Button = ({ isDisabled, forwardedRef, secondary, variant, theme, size, testId, onClick, onKeyDown, isDestructive, ...rest }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const ButtonComponent = rest.isCircular ? ButtonCircular : ButtonRegular;
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
        React.createElement(ButtonComponent, { "aria-disabled": isDisabled, isHovered: isHovered, onClick: handleOnClick, onKeyDown: handleOnKeyDown, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, ref: forwardedRef, size: getDefaultSize(size, theme.isClassic), variant: secondary ? buttonVariant.secondary : variant, theme: theme, type: "button", isDestructive: isDestructive, ...getTestAttributes(testId), ...rest })));
};
Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(Object.values(buttonVariant)),
    hasShadow: PropTypes.bool,
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    secondary: PropTypes.bool,
    isCircular: PropTypes.bool,
    size: PropTypes.oneOf(Object.values(buttonSize)),
    testId: PropTypes.string,
    isDestructive: PropTypes.bool,
};
Button.defaultProps = {
    variant: buttonVariant.primary,
    hasShadow: undefined,
    isActive: false,
    isDisabled: false,
    secondary: false,
    isCircular: false,
    size: buttonSize.medium,
    testId: 'BUTTON',
    isDestructive: false,
};
export default withTheme(Button, THEME_NAME);
