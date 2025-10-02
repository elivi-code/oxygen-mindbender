const getDecoratorBorder = ({ theme, isReadOnly }) => {
    if (isReadOnly && theme.prefixSuffixInsideInput) {
        return `0`;
    }
    return `${theme.borderWidthSemanticBlock} ${theme.borderStyleDefaultSemanticBlock} ${theme.borderColorSemanticBlock}`;
};
export default getDecoratorBorder;
