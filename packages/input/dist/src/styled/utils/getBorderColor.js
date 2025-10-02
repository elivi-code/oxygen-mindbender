const getBorderColor = ({ theme, focused, hasError, isReadOnly, fixed, defaultColor, }) => {
    if (isReadOnly && !focused) {
        return theme.borderColorReadOnly;
    }
    if (hasError) {
        return theme.borderColorError;
    }
    if (fixed) {
        return theme.borderColorFixed;
    }
    if (focused) {
        return theme.borderColorFocused;
    }
    return defaultColor || theme.borderColor;
};
export default getBorderColor;
