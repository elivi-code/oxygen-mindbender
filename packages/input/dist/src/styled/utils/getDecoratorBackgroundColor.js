const getDecoratorBackgroundColor = ({ theme, isReadOnly }) => {
    if (isReadOnly) {
        return theme.backgroundColorReadOnly;
    }
    return theme.backgroundColorSemanticBlock;
};
export default getDecoratorBackgroundColor;
