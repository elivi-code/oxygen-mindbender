const getDecoratorBorderRadius = ({ theme, isSuffix, isPrefix }) => {
    if (isSuffix) {
        return `0 ${theme.borderRadius} ${theme.borderRadius} 0`;
    }
    if (isPrefix) {
        return `${theme.borderRadius} 0 0 ${theme.borderRadius}`;
    }
    return theme.borderRadius;
};
export default getDecoratorBorderRadius;
