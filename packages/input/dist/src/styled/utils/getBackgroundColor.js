const getBackgroundColor = ({ theme, fixed, isDisabled, isReadOnly, }) => {
    if (fixed) {
        return theme.backgroundColorFixed;
    }
    if (isReadOnly) {
        return theme.backgroundColorReadOnly;
    }
    if (isDisabled) {
        return theme.backgroundColorDisabled;
    }
    return theme.backgroundColor;
};
export default getBackgroundColor;
