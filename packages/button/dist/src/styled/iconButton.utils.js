export const getIconColor = ({ isActive, isInverted, isDisabled, theme, }) => {
    if (isDisabled) {
        return theme.colorDisabled;
    }
    if (isActive && isInverted) {
        return theme.color;
    }
    if (isActive) {
        return theme.colorSelected;
    }
    if (isInverted) {
        return theme.colorInverted;
    }
    return theme.color;
};
export const getDefaultBackground = (props) => {
    if (!props.isActive) {
        return 'transparent';
    }
    if (props['aria-disabled']) {
        return props.theme.backgroundSelectedDisabled;
    }
    if (props.isInverted) {
        return props.theme.backgroundActive;
    }
    return props.theme.backgroundActiveSelected;
};
export const getHoverBackground = (props) => {
    if ((props.isActive && !props.isInverted) ||
        (!props.isActive && props.isInverted)) {
        return props.theme.backgroundSelectedHover;
    }
    return props.theme.backgroundHover;
};
export const getActiveBackground = (props) => {
    if ((props.isActive && props.isInverted) ||
        (!props.isActive && !props.isInverted)) {
        return props.theme.backgroundActive;
    }
    return props.theme.backgroundActiveSelected;
};
