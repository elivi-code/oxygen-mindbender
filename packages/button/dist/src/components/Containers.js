import React from 'react';
import { getColor, getIconStyle } from '../styled/button.utils';
import { ButtonRegularStyled, ButtonCircularStyled, } from '../styled/ButtonStyled';
const iconSizeMap = {
    small: 16,
    medium: 20,
    large: 24,
    big: 24,
};
export const ButtonRegular = React.forwardRef(({ children, iconLeft, iconRight, ...props }, ref) => {
    const iconProps = {
        color: getColor(props, getIconStyle(props)),
        size: iconSizeMap[props.size],
    };
    return (React.createElement(ButtonRegularStyled, { ...props, ref: ref },
        iconLeft &&
            React.isValidElement(iconLeft) &&
            React.cloneElement(iconLeft, iconProps),
        children,
        iconRight &&
            React.isValidElement(iconRight) &&
            React.cloneElement(iconRight, iconProps)));
});
ButtonRegular.displayName = 'ButtonRegular';
export const ButtonCircular = React.forwardRef(({ children, ...props }, ref) => (React.createElement(ButtonCircularStyled, { ...props, ref: ref }, React.Children.map(children, child => {
    if (React.isValidElement(child)) {
        const color = getColor(props, getIconStyle(props));
        const childProps = { color };
        return React.cloneElement(child, childProps);
    }
    return child;
}))));
ButtonCircular.displayName = 'ButtonCircular';
