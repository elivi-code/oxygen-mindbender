const getInputBorderRadius = ({ theme, withSuffix, withPrefix }) => {
    if (withSuffix && !theme.prefixSuffixInsideInput) {
        return `${theme.borderRadius} 0 0 ${theme.borderRadius}`;
    }
    if (withPrefix && !theme.prefixSuffixInsideInput) {
        return `0 ${theme.borderRadius} ${theme.borderRadius} 0`;
    }
    return theme.borderRadius;
};
export default getInputBorderRadius;
